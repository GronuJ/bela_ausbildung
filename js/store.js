/* Zustand der App (Bewerbungen, Unterlagen, Einstellungen) im localStorage. */
(function (root) {
  'use strict';

  const KEY = 'ausbildungsplaner-kiel:v1';

  const STATUSES = [
    { key: 'idee', label: 'Interessant', tone: '' },
    { key: 'beworben', label: 'Beworben', tone: 'accent' },
    { key: 'gespraech', label: 'Gespräch', tone: 'warn' },
    { key: 'zusage', label: 'Zusage', tone: 'good' },
    { key: 'absage', label: 'Absage', tone: 'bad' }
  ];
  // Ältere Status aus Version 1 auf die neuen abbilden.
  const OLD_STATUS = { recherche: 'idee', vorbereitung: 'idee' };

  const DEFAULT_UNTERLAGEN = [
    { name: 'Lebenslauf', notiz: '' },
    { name: 'Anschreiben', notiz: 'Für jede Bewerbung kurz anpassen.' },
    { name: 'Zeugnisse (Kopien)', notiz: '' },
    { name: 'Praktikumsnachweise', notiz: '' },
    { name: 'Erweitertes Führungszeugnis', notiz: 'Beim Bürgeramt beantragen, dauert 1–2 Wochen.' },
    { name: 'Nachweis Masernschutz', notiz: 'Kopie vom Impfpass.' }
  ];

  function freshState() {
    return {
      version: 2,
      home: null,
      weights: root.Ranking ? root.Ranking.defaultWeights() : {},
      beruf: 'Erzieher/in',
      kitas: { an: false, traeger: '', konzept: '' },
      bewerbungen: [],
      unterlagen: DEFAULT_UNTERLAGEN.map((u) => ({ id: root.Util.uid(), name: u.name, notiz: u.notiz, fertig: false })),
      profil: { abschluss: '' },
      geldJahre: 5
    };
  }

  function normalize(raw) {
    const base = freshState();
    if (!raw || typeof raw !== 'object') return base;
    const s = base;
    if (raw.home) s.home = raw.home;
    if (typeof raw.beruf === 'string') s.beruf = raw.beruf;
    if (raw.kitas && typeof raw.kitas === 'object') s.kitas = Object.assign(base.kitas, raw.kitas);
    if (raw.profil && raw.profil.abschluss) s.profil.abschluss = raw.profil.abschluss;
    if (raw.geldJahre) s.geldJahre = Number(raw.geldJahre) || 5;
    const w = raw.weights || {};
    for (const k of Object.keys(s.weights)) if (typeof w[k] === 'number') s.weights[k] = w[k];
    if (Array.isArray(raw.unterlagen)) {
      s.unterlagen = raw.unterlagen.map((u) => ({
        id: u.id || root.Util.uid(), name: u.name || '', notiz: u.notiz || '',
        fertig: u.fertig === true || u.status === 'fertig'
      }));
    }
    if (Array.isArray(raw.bewerbungen)) {
      s.bewerbungen = raw.bewerbungen.map((b) => {
        const kontakt = b.kontakt !== undefined ? b.kontakt : [b.kontaktName, b.kontaktTel, b.kontaktMail].filter(Boolean).join(', ');
        return {
          id: b.id || root.Util.uid(), institutionId: b.institutionId || null,
          angebotIndex: typeof b.angebotIndex === 'number' ? b.angebotIndex : null,
          name: b.name || '', bildungsgang: b.bildungsgang || '',
          status: OLD_STATUS[b.status] || (STATUSES.some((x) => x.key === b.status) ? b.status : 'idee'),
          frist: b.frist || '', gespraechAm: b.gespraechAm || '', kontakt: kontakt || '', notizen: b.notizen || ''
        };
      });
    }
    return s;
  }

  let state = null;
  const listeners = new Set();

  function load() {
    try {
      const raw = localStorage.getItem(KEY);
      state = normalize(raw ? JSON.parse(raw) : null);
    } catch (e) {
      console.warn('Konnte gespeicherte Daten nicht lesen', e);
      state = freshState();
    }
    return state;
  }

  function save() {
    try {
      localStorage.setItem(KEY, JSON.stringify(state));
    } catch (e) {
      console.warn('Speichern fehlgeschlagen', e);
      root.Util.toast('Speichern im Browser nicht möglich. Bitte Sicherung herunterladen.');
    }
  }

  function get() { return state || load(); }

  // Änderung durchführen, speichern, Oberfläche benachrichtigen.
  function update(fn, opts) {
    fn(get());
    save();
    if (!opts || !opts.silent) listeners.forEach((l) => l(state));
  }

  function subscribe(fn) { listeners.add(fn); return () => listeners.delete(fn); }

  function exportJson() {
    return JSON.stringify({ app: 'ausbildungsplaner-kiel', exportiert: new Date().toISOString(), daten: get() }, null, 2);
  }

  function importJson(text) {
    const parsed = JSON.parse(text);
    const data = parsed && parsed.daten ? parsed.daten : parsed;
    if (!data || !Array.isArray(data.bewerbungen)) throw new Error('Das sieht nicht nach einer Sicherung dieses Planers aus.');
    state = normalize(data);
    save();
    listeners.forEach((l) => l(state));
  }

  function statusLabel(key) {
    const s = STATUSES.find((x) => x.key === key);
    return s ? s.label : key;
  }

  root.Store = { STATUSES, get, load, save, update, subscribe, exportJson, importJson, statusLabel, freshState, normalize };
})(window);
