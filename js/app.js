/* Router, globale Event-Delegation und Start der App. */
(function (root) {
  'use strict';

  const ROUTES = {
    start: (v) => root.Pages.renderStart(v),
    karte: (v) => root.MapView.render(v),
    ranking: (v) => root.Pages.renderRanking(v),
    bewerbungen: (v) => root.Tracker.render(v),
    aufgaben: (v) => root.Pages.renderAufgaben(v),
    geld: (v) => root.Rechner.render(v),
    planb: (v) => root.PlanB.render(v),
    infos: (v) => root.Pages.renderInfos(v)
  };

  // Module, die Klicks auf [data-action] behandeln können (erstes, das true liefert, gewinnt).
  const HANDLERS = () => [root.Tracker, root.MapView, root.Pages, root.Rechner, root.PlanB];

  function currentRoute() {
    const r = (location.hash || '#start').slice(1).split('?')[0];
    return ROUTES[r] ? r : 'start';
  }

  let lastRoute = null;
  function render() {
    const route = currentRoute();
    const view = document.getElementById('view');
    const scroll = route === lastRoute ? window.scrollY : 0;
    root.MapView.destroy();
    ROUTES[route](view);
    document.querySelectorAll('.tabs a').forEach((a) => a.classList.toggle('active', a.dataset.route === route));
    window.scrollTo(0, scroll);
    lastRoute = route;
  }

  function onClick(e) {
    const el = e.target.closest('[data-action]');
    if (!el || el.tagName === 'INPUT' && el.type === 'file') return;
    const action = el.dataset.action;
    if (action === 'export') {
      root.Util.download(`ausbildungsplaner-sicherung-${root.Util.todayIso()}.json`, root.Store.exportJson(), 'application/json');
      return;
    }
    for (const h of HANDLERS()) {
      if (h && h.handleAction && h.handleAction(action, el, e)) {
        if (el.tagName === 'A') e.preventDefault();
        return;
      }
    }
  }

  function onChange(e) {
    const el = e.target;
    if (el.dataset.action === 'import' && el.files && el.files[0]) {
      const reader = new FileReader();
      reader.onload = () => {
        try {
          if (!confirm('Sicherung laden? Die aktuellen Daten in diesem Browser werden ersetzt.')) return;
          root.Store.importJson(String(reader.result));
          root.Util.toast('Sicherung geladen');
        } catch (err) {
          alert('Konnte die Datei nicht laden: ' + err.message);
        }
        el.value = '';
      };
      reader.readAsText(el.files[0]);
      return;
    }
    if (el.dataset.filter) { root.MapView.handleFilterChange(el); return; }
    for (const h of HANDLERS()) if (h && h.handleChange && h.handleChange(el)) return;
  }

  function onInput(e) {
    for (const h of HANDLERS()) if (h && h.handleInput && h.handleInput(e.target)) return;
  }

  function onSubmit(e) {
    const form = e.target.closest('form[data-form]');
    if (!form) return;
    e.preventDefault();
    for (const h of HANDLERS()) if (h && h.handleSubmit && h.handleSubmit(form)) return;
  }

  function onKeydown(e) {
    if (e.key === 'Enter' && e.target.id === 'home-query') { e.preventDefault(); root.MapView.handleAction('home-search', e.target); }
    if ((e.key === 'Enter' || e.key === ' ') && e.target.classList.contains('app-card')) { e.preventDefault(); e.target.click(); }
  }

  function init() {
    root.Store.load();
    root.Store.subscribe(render);
    document.addEventListener('click', onClick);
    document.addEventListener('change', onChange);
    document.addEventListener('input', onInput);
    document.addEventListener('submit', onSubmit);
    document.addEventListener('keydown', onKeydown);
    window.addEventListener('hashchange', render);
    render();
  }

  init();
})(window);

// Offline-Modus / installierbare App (nur über http(s), nicht per Doppelklick auf die Datei).
if ('serviceWorker' in navigator && /^https?:$/.test(location.protocol)) {
  window.addEventListener('load', () => navigator.serviceWorker.register('sw.js').catch(() => {}));
}
