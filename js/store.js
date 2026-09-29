/* Zustand der App (Bewerbungen, Aufgaben, Unterlagen, Einstellungen) im localStorage. */
(function (root) {
  'use strict';

  const KEY = 'ausbildungsplaner-kiel:v1';

  const STATUSES = [
    { key: 'idee', label: 'Interessant', tone: '' },
    { key: 'recherche', label: 'Infos eingeholt', tone: 'accent' },
    { key: 'vorbereitung', label: 'Unterlagen in Arbeit', tone: 'warn' },
    { key: 'beworben', label: 'Beworben', tone: 'accent' },
    { key: 'gespraech', label: 'Gespräch / Hospitation', tone: 'warn' },
    { key: 'zusage', label: 'Zusage', tone: 'good' },
    { key: 'absage', label: 'Absage / verworfen', tone: 'bad' }
  ];

  const DEFAULT_UNTERLAGEN = [
    { name: 'Lebenslauf (tabellarisch, aktuell)', notiz: 'Mit Datum und Unterschrift. Praktika und Ehrenamt mit Kindern/Jugendlichen hervorheben.' },
    { name: 'Anschreiben / Motivationsschreiben', notiz: 'Für jede Schule bzw. jeden Träger anpassen: Warum dieser Beruf, warum dort?' },
    { name: 'Schulzeugnisse (Abschluss- bzw. letztes Halbjahreszeugnis)', notiz: 'Viele Schulen wollen beglaubigte Kopien, das geht z. B. bei der Schule oder im Bürgeramt.' },
    { name: 'Nachweise über Praktika / Erfahrung', notiz: 'Praktikumsbescheinigungen, FSJ/BFD, Jugendarbeit, Babysitten mit Bestätigung.' },
    { name: 'Erweitertes Führungszeugnis', notiz: 'Beim Bürgeramt oder online beim Bundesamt für Justiz beantragen. Dafür braucht man meist ein Aufforderungsschreiben der Schule oder Einrichtung. Darf bei Abgabe oft nicht älter als 3 Monate sein.' },
    { name: 'Nachweis Masernschutz', notiz: 'Impfpass (Kopie) oder ärztliche Bescheinigung. Pflicht für die Arbeit in Kitas und Schulen.' },
    { name: 'Personalausweis (Kopie)', notiz: '' },
    { name: 'Bewerbungsfoto (optional)', notiz: 'In Deutschland nicht Pflicht, aber oft gern gesehen.' }
  ];

  const DEFAULT_AUFGABEN = [
    'Im Ranking die Gewichte einstellen und die Top 3 anschauen',
    'Wohnort auf der Karte setzen, damit Entfernungen stimmen',
    'Infoabende / Tage der offenen Tür der Top-Schulen raussuchen',
    'Impfpass auf Masernimpfung prüfen',
    'Zeugnisse raussuchen und beglaubigte Kopien machen lassen',
    'Lebenslauf aktualisieren'
  ];

  function freshState() {
    return {
      version: 1,
      home: null,
      weights: root.Ranking ? root.Ranking.defaultWeights() : {},
      filters: { berufe: [], formen: [], kategorie: 'alle', maxKm: 0 },
      bewerbungen: [],
      unterlagen: DEFAULT_UNTERLAGEN.map((u) => ({ id: root.Util.uid(), name: u.name, notiz: u.notiz, status: 'offen' })),
      aufgaben: DEFAULT_AUFGABEN.map((t) => ({ id: root.Util.uid(), text: t, faellig: '', erledigt: false })),
      trackerView: 'board',
      rechner: null,
      profil: { abschluss: '', ausbildung: false, praktikum: false },
      kitaLayer: { an: false, traeger: [], konzept: [], typ: [] }
    };
  }

  function normalize(raw) {
    const base = freshState();
    if (!raw || typeof raw !== 'object') return base;
    const s = Object.assign(base, raw);
    s.weights = Object.assign(root.Ranking ? root.Ranking.defaultWeights() : {}, raw.weights || {});
    s.filters = Object.assign(base.filters, raw.filters || {});
    s.profil = Object.assign(base.profil, raw.profil || {});
    s.kitaLayer = Object.assign(base.kitaLayer, raw.kitaLayer || {});
    for (const key of ['bewerbungen', 'unterlagen', 'aufgaben']) if (!Array.isArray(s[key])) s[key] = [];
    s.bewerbungen = s.bewerbungen.map((b) => Object.assign({
      id: root.Util.uid(), institutionId: null, angebotIndex: null, name: '', bildungsgang: '', status: 'idee',
      frist: '', beworbenAm: '', gespraechAm: '', kontaktName: '', kontaktTel: '', kontaktMail: '',
      notizen: '', bewertung: 0, unterlagen: {}, verlauf: [], erstellt: root.Util.todayIso()
    }, b));
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

  root.Store = { STATUSES, get, load, save, update, subscribe, exportJson, importJson, statusLabel, freshState };
})(window);
