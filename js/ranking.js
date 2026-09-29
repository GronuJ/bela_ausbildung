/* Ranking der Ausbildungsangebote nach gewichteten Kriterien.
 * Reine Funktionen ohne DOM, damit sie auch mit `node --test` geprüft werden können. */
(function (root) {
  'use strict';

  const KIEL_HBF = { lat: 54.3149, lng: 10.1318, label: 'Kiel Hauptbahnhof' };

  const CRITERIA = [
    { key: 'verguetung', label: 'Vergütung', hint: 'Bezahlte Ausbildung (z. B. PiA) statt Schulzeit ohne Gehalt', default: 4 },
    { key: 'kosten', label: 'Keine Kosten', hint: 'Kein Schulgeld oder andere Gebühren', default: 3 },
    { key: 'entfernung', label: 'Nähe', hint: 'Luftlinie von deinem Wohnort (sonst Kiel Hbf); ab 50 km 0 Punkte', default: 3 },
    { key: 'dauer', label: 'Kürze', hint: 'Wie schnell du fertig bist', default: 2 },
    { key: 'zugang', label: 'Einfacher Einstieg', hint: 'Wie niedrig die Zugangsvoraussetzungen sind', default: 2 },
    { key: 'abschluss', label: 'Abschluss', hint: 'Erzieher/in und Heilerziehungspflege (DQR 6) zählen mehr als Assistenz (DQR 4)', default: 3 },
    { key: 'bauchgefuehl', label: 'Bauchgefühl', hint: 'Deine Sterne bei der passenden Bewerbung (ohne Sterne: neutral)', default: 2 }
  ];

  const FORM_LABEL = { vollzeit: 'Vollzeit (schulisch)', pia: 'Praxisintegriert (PiA, bezahlt)', teilzeit: 'Teilzeit / berufsbegleitend' };

  function clamp(n) { return Math.max(0, Math.min(100, n)); }

  function defaultWeights() {
    const w = {};
    for (const c of CRITERIA) w[c.key] = c.default;
    return w;
  }

  function haversine(a, b) {
    const R = 6371;
    const toRad = (d) => (d * Math.PI) / 180;
    const dLat = toRad(b.lat - a.lat);
    const dLng = toRad(b.lng - a.lng);
    const h = Math.sin(dLat / 2) ** 2 + Math.cos(toRad(a.lat)) * Math.cos(toRad(b.lat)) * Math.sin(dLng / 2) ** 2;
    return 2 * R * Math.asin(Math.sqrt(h));
  }

  // Abschlussniveau: 2 = Fachschule (DQR 6), 1 = Berufsfachschule/Assistenz (DQR 4).
  function abschlussStufe(beruf) {
    const b = (beruf || '').toLowerCase();
    if (b.includes('assist')) return 1;
    if (b.includes('erzieh') || b.includes('heilerzieh') || b.includes('heilpäd')) return 2;
    return null;
  }

  // Einzelwerte 0–100 je Kriterium. `unknown` markiert fehlende Daten (dann neutral 50).
  function criterionScores(inst, offer, ctx) {
    const s = {};

    if (offer.verguetung === true || offer.form === 'pia') s.verguetung = { value: 100 };
    else if (offer.verguetung === false) s.verguetung = { value: 0 };
    else s.verguetung = { value: 50, unknown: true };

    const fee = inst.schulgeld_monat;
    if (typeof fee === 'number') s.kosten = { value: clamp(100 - fee / 2) };
    else s.kosten = { value: 50, unknown: true };

    const origin = ctx.home || KIEL_HBF;
    if (typeof inst.lat === 'number' && typeof inst.lng === 'number') {
      const km = haversine(origin, inst);
      s.entfernung = { value: clamp(100 - km * 2), km };
    } else s.entfernung = { value: 50, unknown: true };

    if (typeof offer.dauer_jahre === 'number') s.dauer = { value: clamp(100 - (offer.dauer_jahre - 1) * 33) };
    else s.dauer = { value: 50, unknown: true };

    // zugang_stufe: 1 = ESA/erster Abschluss reicht, 2 = MSA, 3 = Abitur/FHR oder abgeschlossene Ausbildung nötig.
    const z = offer.zugang_stufe;
    if (z === 1) s.zugang = { value: 100 };
    else if (z === 2) s.zugang = { value: 70 };
    else if (z === 3) s.zugang = { value: 35 };
    else s.zugang = { value: 50, unknown: true };

    const a = abschlussStufe(offer.beruf);
    if (a === 2) s.abschluss = { value: 100 };
    else if (a === 1) s.abschluss = { value: 55 };
    else s.abschluss = { value: 50, unknown: true };

    const rating = ctx.ratings ? ctx.ratings[inst.id] : undefined;
    if (typeof rating === 'number' && rating > 0) s.bauchgefuehl = { value: clamp(rating * 20) };
    else s.bauchgefuehl = { value: 50, unknown: true };

    return s;
  }

  function matchesFilters(inst, offer, filters) {
    if (!filters) return true;
    if (filters.berufe && filters.berufe.length && !filters.berufe.includes(offer.beruf)) return false;
    if (filters.formen && filters.formen.length && !filters.formen.includes(offer.form)) return false;
    if (filters.kategorie && filters.kategorie !== 'alle' && inst.kategorie !== filters.kategorie) return false;
    if (typeof filters.maxKm === 'number' && filters.maxKm > 0) {
      const origin = filters.home || KIEL_HBF;
      if (typeof inst.lat === 'number' && haversine(origin, inst) > filters.maxKm) return false;
    }
    return true;
  }

  /**
   * @param institutions Liste aus data.js
   * @param opts { weights, home, ratings: {instId: sterne}, filters }
   * @returns sortierte Zeilen { inst, offer, offerIndex, key, score, parts }
   */
  function rank(institutions, opts) {
    opts = opts || {};
    const weights = Object.assign(defaultWeights(), opts.weights || {});
    const ctx = { home: opts.home, ratings: opts.ratings };
    const rows = [];
    for (const inst of institutions) {
      (inst.angebote || []).forEach((offer, offerIndex) => {
        if (!matchesFilters(inst, offer, Object.assign({ home: opts.home }, opts.filters))) return;
        const parts = criterionScores(inst, offer, ctx);
        let sum = 0, wsum = 0;
        for (const c of CRITERIA) {
          const w = Number(weights[c.key]) || 0;
          sum += w * parts[c.key].value;
          wsum += w;
        }
        rows.push({ inst, offer, offerIndex, key: inst.id + '#' + offerIndex, score: wsum ? Math.round(sum / wsum) : 0, parts });
      });
    }
    rows.sort((a, b) => b.score - a.score || (a.parts.entfernung.km || 0) - (b.parts.entfernung.km || 0));
    return rows;
  }

  const Ranking = { CRITERIA, FORM_LABEL, KIEL_HBF, defaultWeights, criterionScores, abschlussStufe, rank, haversine };
  root.Ranking = Ranking;
  if (typeof module !== 'undefined' && module.exports) module.exports = Ranking;
})(typeof window !== 'undefined' ? window : globalThis);
