/* Ranking der Ausbildungsangebote nach gewichteten Kriterien.
 * Reine Funktionen ohne DOM, damit sie auch mit `node --test` geprüft werden können. */
(function (root) {
  'use strict';

  const KIEL_HBF = { lat: 54.3149, lng: 10.1318, label: 'Kiel Hauptbahnhof' };

  const CRITERIA = [
    { key: 'geld', label: 'Geld', hint: 'Bezahlt und ohne Schulgeld', default: 3 },
    { key: 'naehe', label: 'Nähe', hint: 'Nah an deinem Wohnort', default: 3 },
    { key: 'dauer', label: 'Schnell fertig', hint: 'Kurze Ausbildung', default: 2 },
    { key: 'einstieg', label: 'Leichter Einstieg', hint: 'Niedrige Voraussetzungen', default: 2 }
  ];

  const FORM_LABEL = { vollzeit: 'Schule, Vollzeit', pia: 'PiA, bezahlt', teilzeit: 'Teilzeit' };

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

  // Einzelwerte 0–100 je Kriterium. `unknown` markiert fehlende Daten (dann neutral 50).
  function criterionScores(inst, offer, ctx) {
    const s = {};

    const fee = inst.schulgeld_monat;
    if (offer.verguetung === true || offer.form === 'pia') s.geld = { value: 100 };
    else if (typeof fee === 'number' && fee > 0) s.geld = { value: 0 };
    else if (offer.verguetung === false) s.geld = { value: 30 };
    else s.geld = { value: 50, unknown: true };

    const origin = ctx.home || KIEL_HBF;
    if (typeof inst.lat === 'number' && typeof inst.lng === 'number') {
      const km = haversine(origin, inst);
      s.naehe = { value: clamp(100 - km * 2), km };
    } else s.naehe = { value: 50, unknown: true };

    if (typeof offer.dauer_jahre === 'number') s.dauer = { value: clamp(100 - (offer.dauer_jahre - 1) * 33) };
    else s.dauer = { value: 50, unknown: true };

    // zugang_stufe: 1 = ESA reicht, 2 = MSA, 3 = Abitur/FHR oder abgeschlossene Ausbildung nötig.
    const z = offer.zugang_stufe;
    if (z === 1) s.einstieg = { value: 100 };
    else if (z === 2) s.einstieg = { value: 70 };
    else if (z === 3) s.einstieg = { value: 35 };
    else s.einstieg = { value: 50, unknown: true };

    return s;
  }

  function matchesFilters(inst, offer, filters) {
    if (!filters) return true;
    if (filters.beruf && offer.beruf !== filters.beruf) return false;
    if (filters.kategorie && inst.kategorie !== filters.kategorie) return false;
    return true;
  }

  /**
   * @param institutions Liste aus data.js
   * @param opts { weights, home, filters: { beruf, kategorie } }
   * @returns sortierte Zeilen { inst, offer, offerIndex, key, score, parts }
   */
  function rank(institutions, opts) {
    opts = opts || {};
    const weights = Object.assign(defaultWeights(), opts.weights || {});
    const ctx = { home: opts.home };
    const rows = [];
    for (const inst of institutions) {
      (inst.angebote || []).forEach((offer, offerIndex) => {
        if (!matchesFilters(inst, offer, opts.filters)) return;
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
    rows.sort((a, b) => b.score - a.score || (a.parts.naehe.km || 0) - (b.parts.naehe.km || 0));
    return rows;
  }

  const Ranking = { CRITERIA, FORM_LABEL, KIEL_HBF, defaultWeights, criterionScores, rank, haversine };
  root.Ranking = Ranking;
  if (typeof module !== 'undefined' && module.exports) module.exports = Ranking;
})(typeof window !== 'undefined' ? window : globalThis);
