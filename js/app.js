/* Router, globale Event-Delegation und Start der App. */
(function (root) {
  'use strict';

  const ROUTES = {
    start: (v) => root.Pages.renderStart(v),
    karte: (v) => root.MapView.render(v),
    ranking: (v) => root.Pages.renderRanking(v),
    bewerbungen: (v) => root.Tracker.render(v),
    mehr: (v) => renderMehr(v),
    geld: (v) => root.Rechner.render(v),
    planb: (v) => root.PlanB.render(v)
  };
  // Unterseiten, die unter „Mehr“ hängen.
  const TAB_OF = { geld: 'mehr', planb: 'mehr' };

  // Module, die Klicks auf [data-action] behandeln können (erstes, das true liefert, gewinnt).
  const HANDLERS = () => [root.Tracker, root.MapView, root.Pages];

  function renderMehr(view) {
    view.innerHTML = `
      <h1>Mehr</h1>
      <a class="card menu-item" href="#geld"><b>Geld</b><span class="muted">PiA oder Schule: Was verdienst du?</span></a>
      <a class="card menu-item" href="#planb"><b>Plan B</b><span class="muted">Welche Wege passen zu deinem Abschluss?</span></a>
      <section class="card">
        <b>Sicherung</b>
        <p class="muted">Deine Daten sind nur in diesem Browser gespeichert.</p>
        <div class="row">
          <button type="button" class="btn" data-action="export">Herunterladen</button>
          <label class="btn">Laden<input type="file" accept="application/json,.json" data-action="import" hidden></label>
        </div>
      </section>`;
  }

  // <select data-set="kitas.traeger"> usw.: Wert direkt in den Zustand schreiben.
  function setPath(el) {
    const path = el.dataset.set.split('.');
    let value = el.type === 'checkbox' ? el.checked : el.value;
    if (path[0] === 'geldJahre') value = Number(value);
    root.Store.update((s) => {
      let obj = s;
      for (const k of path.slice(0, -1)) obj = obj[k];
      obj[path[path.length - 1]] = value;
    });
  }

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
    const tab = TAB_OF[route] || route;
    document.querySelectorAll('.tabs a').forEach((a) => a.classList.toggle('active', a.dataset.route === tab));
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
    if (el.dataset.set) { setPath(el); return; }
    for (const h of HANDLERS()) if (h && h.handleChange && h.handleChange(el)) return;
  }

  function onInput(e) {
    for (const h of HANDLERS()) if (h && h.handleInput && h.handleInput(e.target)) return;
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
