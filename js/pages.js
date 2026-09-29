/* Seiten: Übersicht, Ranking, Aufgaben & Unterlagen, Infos, Detaildialog + Modal-Helfer. */
(function (root) {
  'use strict';
  const { esc, formatDate, relativeDays, dueClass, daysUntil, todayIso, uid } = root.Util;

  function D() { return root.AUSBILDUNG_DATA; }
  function inst(id) { return D().institutions.find((i) => i.id === id) || null; }

  /* ---------- Modal ---------- */
  const UI = {
    openModal({ title, body, actions, onMount }) {
      const host = document.getElementById('modal-root');
      host.innerHTML = `
        <div class="modal-backdrop" data-modal-backdrop>
          <div class="modal" role="dialog" aria-modal="true" aria-label="${esc(title)}">
            <div class="modal-head"><h2>${esc(title)}</h2><button class="btn small" data-modal-close aria-label="Schließen">✕</button></div>
            <div class="modal-body">${body}</div>
            <div class="modal-foot">${(actions || []).map((a, i) => `<button class="btn ${a.className || ''}" data-modal-action="${i}">${esc(a.label)}</button>`).join('')}</div>
          </div>
        </div>`;
      const el = host.querySelector('.modal');
      const close = () => { host.innerHTML = ''; document.removeEventListener('keydown', onKey); };
      const onKey = (e) => { if (e.key === 'Escape') close(); };
      document.addEventListener('keydown', onKey);
      host.querySelector('[data-modal-backdrop]').addEventListener('mousedown', (e) => { if (e.target === e.currentTarget) close(); });
      host.querySelector('[data-modal-close]').addEventListener('click', close);
      host.querySelectorAll('[data-modal-action]').forEach((btn) => btn.addEventListener('click', () => actions[Number(btn.dataset.modalAction)].onClick(close, el)));
      if (onMount) onMount(el);
      const first = el.querySelector('input, select, textarea, button');
      if (first) first.focus();
      return close;
    }
  };

  /* ---------- Details zu einer Einrichtung ---------- */
  function yesNo(v) { return v === true ? 'ja' : v === false ? 'nein' : 'unbekannt'; }

  function showInstitution(id) {
    const i = inst(id);
    if (!i) return;
    const home = root.Store.get().home;
    const km = root.Util.distanceKm(home || root.Ranking.KIEL_HBF, i);
    const body = `
      <div class="stack">
        <div class="row">
          <span class="chip ${i.kategorie === 'traeger' ? 'traeger' : 'school'}">${i.kategorie === 'traeger' ? 'Träger / Praxisstelle' : 'Schule'}</span>
          ${i.traegerschaft ? `<span class="chip">${esc(i.traegerschaft)}</span>` : ''}
          <span class="chip">${km.toFixed(1)} km Luftlinie</span>
          ${i.schulgeld ? `<span class="chip ${/kein/i.test(i.schulgeld) ? 'good' : 'warn'}">${esc(i.schulgeld)}</span>` : ''}
        </div>
        <div>${esc(i.adresse || '')}</div>
        <div class="row">
          ${i.website ? `<a href="${esc(i.website)}" target="_blank" rel="noopener">Website</a>` : ''}
          ${i.telefon ? `<span>☎ ${esc(i.telefon)}</span>` : ''}
          ${i.email ? `<a href="mailto:${esc(i.email)}">${esc(i.email)}</a>` : ''}
        </div>
        ${i.schwerpunkte ? `<p>${esc(i.schwerpunkte)}</p>` : ''}
        ${(i.angebote || []).map((o, idx) => `
          <div class="card">
            <div class="row"><h3 style="margin:0">${esc(o.bildungsgang || o.beruf)}</h3><span class="spacer"></span>
              <button class="btn small primary" data-action="add-app" data-inst="${esc(i.id)}" data-offer="${idx}">Auf meine Liste</button></div>
            <div class="row" style="margin:6px 0">
              <span class="chip accent">${esc(root.Ranking.FORM_LABEL[o.form] || o.form || '')}</span>
              ${o.dauer_jahre ? `<span class="chip">${esc(o.dauer_jahre)} Jahre</span>` : ''}
              <span class="chip ${o.verguetung || o.form === 'pia' ? 'good' : ''}">Vergütung: ${esc(o.verguetung_text || yesNo(o.verguetung === null && o.form === 'pia' ? true : o.verguetung))}</span>
              ${o.start ? `<span class="chip">Start: ${esc(o.start)}</span>` : ''}
            </div>
            ${o.bewerbungsfrist ? `<div><b>Bewerbungsfrist:</b> ${esc(o.bewerbungsfrist)}</div>` : ''}
            ${o.voraussetzungen ? `<div><b>Voraussetzungen:</b> ${esc(o.voraussetzungen)}</div>` : ''}
            ${o.quelle ? `<div class="source"><a href="${esc(o.quelle)}" target="_blank" rel="noopener">Quelle</a></div>` : ''}
          </div>`).join('')}
        ${i.hinweise ? `<p class="muted"><b>Hinweis:</b> ${esc(i.hinweise)}</p>` : ''}
        ${(i.quellen || []).length ? `<div class="source">Quellen: ${i.quellen.map((q, n) => `<a href="${esc(q)}" target="_blank" rel="noopener">[${n + 1}]</a>`).join(' ')}</div>` : ''}
        <p class="muted source">Stand der Recherche: ${formatDate(D().stand)}. Angaben bitte vor der Bewerbung auf der Website prüfen.</p>
      </div>`;
    UI.openModal({ title: i.name, body, actions: [
      { label: 'Teilen', onClick: () => shareInstitution(i) },
      { label: 'Schließen', onClick: (c) => c() }
    ] });
  }

  // Schulkarte an Freunde/Eltern schicken (Handy: Teilen-Menü, sonst WhatsApp Web).
  function shareInstitution(i) {
    const offers = (i.angebote || []).map((o) => `• ${o.beruf} (${root.Ranking.FORM_LABEL[o.form] || o.form}${o.dauer_jahre ? ', ' + o.dauer_jahre + ' J.' : ''})`).join('\n');
    const text = `${i.name}\n${i.adresse || ''}\n${offers}${i.website ? '\n' + i.website : ''}`;
    if (navigator.share) {
      navigator.share({ title: i.name, text }).catch(() => {});
    } else {
      window.open('https://wa.me/?text=' + encodeURIComponent(text), '_blank', 'noopener');
    }
  }

  /* ---------- Termine (für Übersicht und Kalenderexport) ---------- */
  function upcomingEvents() {
    const st = root.Store.get();
    const ev = [];
    for (const b of st.bewerbungen) {
      const t = root.Tracker.titleOf(b);
      if (b.frist && ['idee', 'recherche', 'vorbereitung'].includes(b.status)) ev.push({ uid: b.id + '-frist', date: b.frist, title: `Bewerbungsfrist: ${t}`, kind: 'Frist', ref: b.id });
      if (b.gespraechAm) ev.push({ uid: b.id + '-gespraech', date: b.gespraechAm, title: `Gespräch: ${t}`, kind: 'Gespräch', ref: b.id });
    }
    for (const a of st.aufgaben) if (a.faellig && !a.erledigt) ev.push({ uid: a.id, date: a.faellig, title: a.text, kind: 'Aufgabe' });
    return ev.sort((a, b) => a.date.localeCompare(b.date));
  }

  function exportCalendar() {
    const ev = upcomingEvents();
    if (!ev.length) { root.Util.toast('Noch keine Termine mit Datum'); return; }
    root.Util.download('ausbildung-termine.ics', root.Util.buildIcs(ev), 'text/calendar');
  }

  function currentRanking() {
    const st = root.Store.get();
    return root.Ranking.rank(D().institutions, {
      weights: st.weights, home: st.home, ratings: root.Tracker.ratingsByInstitution(), filters: st.filters
    });
  }

  /* ---------- Übersicht ---------- */
  function renderStart(view) {
    const st = root.Store.get();
    const apps = st.bewerbungen;
    const count = (k) => apps.filter((b) => b.status === k).length;
    const docsDone = st.unterlagen.filter((d) => d.status === 'fertig').length;
    const events = upcomingEvents().filter((e) => daysUntil(e.date) >= -7).slice(0, 8);
    const top = currentRanking().slice(0, 3);
    const open = st.aufgaben.filter((a) => !a.erledigt).slice(0, 5);

    view.innerHTML = `
      <div class="hero" style="margin-bottom:16px">
        <div>
          <h1>Moin Bela 👋</h1>
          <p class="muted" style="margin:0">Dein Weg zur Ausbildung in Kiel: vergleichen, bewerben, dranbleiben.</p>
        </div>
      </div>
      ${!st.profil.abschluss ? `
      <section class="card row" style="margin-bottom:16px;border-color:var(--accent)">
        <span style="flex:1"><b>Kurz zu dir:</b> Welchen Schulabschluss hast du? Dann zeigt dir der Plan B Explorer, welche Wege direkt offen sind.</span>
        <a class="btn primary" href="#planb">Los geht's</a>
      </section>` : ''}
      <div class="stats">
        <div class="stat"><b>${apps.filter((b) => b.status !== 'absage').length}</b><span>aktive Bewerbungen</span></div>
        <div class="stat"><b>${count('beworben')}</b><span>abgeschickt</span></div>
        <div class="stat"><b>${count('gespraech')}</b><span>Gespräche</span></div>
        <div class="stat"><b>${count('zusage')}</b><span>Zusagen</span></div>
        <div class="stat"><b>${docsDone}/${st.unterlagen.length}</b><span>Unterlagen fertig</span>
          <div class="progress" style="margin-top:6px"><div style="width:${st.unterlagen.length ? (docsDone / st.unterlagen.length) * 100 : 0}%"></div></div></div>
      </div>
      <div class="grid grid-2">
        <section class="card">
          <div class="row"><h2 style="margin:0">Fristen-Radar</h2><span class="spacer"></span>
            <button class="btn small" data-action="ics">Termine in den Kalender</button></div>
          ${events.length ? `<ul class="list">${events.map((e) => `
            <li><span class="chip ${e.kind === 'Frist' ? 'warn' : e.kind === 'Gespräch' ? 'accent' : ''}">${esc(e.kind)}</span>
              <span style="flex:1">${esc(e.title)}</span>
              <span class="${dueClass(e.date)}" title="${formatDate(e.date)}">${relativeDays(e.date)}</span></li>`).join('')}</ul>`
            : `<p class="empty">Noch keine Termine. Trag bei deinen <a href="#bewerbungen">Bewerbungen</a> Fristen und Gesprächstermine ein.</p>`}
        </section>
        <section class="card">
          <div class="row"><h2 style="margin:0">Deine Top 3</h2><span class="spacer"></span><a href="#ranking">Zum Ranking</a></div>
          <ul class="list">${top.map((r, n) => `
            <li><b>${n + 1}.</b><span style="flex:1"><a href="#" data-action="inst-detail" data-inst="${esc(r.inst.id)}">${esc(r.inst.kurzname || r.inst.name)}</a>
              <div class="muted">${esc(r.offer.beruf)} · ${esc(root.Ranking.FORM_LABEL[r.offer.form] || r.offer.form)}</div></span>
              <span class="score">${r.score}</span></li>`).join('')}</ul>
        </section>
        <section class="card">
          <div class="row"><h2 style="margin:0">Als Nächstes</h2><span class="spacer"></span><a href="#aufgaben">Alle Aufgaben</a></div>
          ${open.length ? `<ul class="list">${open.map((a) => `
            <li><input type="checkbox" data-action="toggle-task" data-id="${esc(a.id)}" aria-label="erledigt">
              <span style="flex:1">${esc(a.text)}</span>${a.faellig ? `<span class="${dueClass(a.faellig)}">${relativeDays(a.faellig)}</span>` : ''}</li>`).join('')}</ul>`
            : '<p class="empty">Alles erledigt. Stark!</p>'}
        </section>
        <section class="card">
          <h2>So läuft's ab</h2>
          <ol style="margin:0;padding-left:20px">
            <li><b>Orientieren:</b> <a href="#planb">Welche Wege passen zu deinem Abschluss?</a> und <a href="#geld">was bringt welcher Weg finanziell?</a></li>
            <li><b>Vergleichen:</b> Im <a href="#ranking">Ranking</a> einstellen, was dir wichtig ist.</li>
            <li><b>Unterlagen</b> vorbereiten, besonders das Führungszeugnis dauert ein paar Wochen.</li>
            <li><b>Bewerben</b> vor den Fristen und jede Bewerbung im Tracker festhalten.</li>
            <li><b>Praxisstelle</b> suchen, falls nötig: <a href="#karte">Kitas auf der Karte</a>.</li>
          </ol>
        </section>
      </div>`;
  }

  /* ---------- Ranking ---------- */
  let rankOpen = null; // auf dem Handy zunächst eingeklappt, danach merken
  function rankSettingsOpen() { return rankOpen === null ? window.innerWidth > 760 : rankOpen; }
  document.addEventListener('toggle', (e) => { if (e.target.id === 'rank-settings') rankOpen = e.target.open; }, true);

  function renderRanking(view) {
    const st = root.Store.get();
    const f = st.filters;
    view.innerHTML = `
      <div class="page-head">
        <div>
          <h1>Ranking</h1>
          <p>Stell ein, was dir wichtig ist (0 = egal, 5 = sehr wichtig). Die Punkte (0–100) sind der gewichtete Durchschnitt.</p>
        </div>
      </div>
      <details class="card" style="margin-bottom:16px" id="rank-settings" ${rankSettingsOpen() ? 'open' : ''}>
        <summary><b>Gewichtung und Filter</b></summary>
        <div class="weights" style="margin-top:12px">
          ${root.Ranking.CRITERIA.map((c) => `
            <div class="weight">
              <label for="w-${c.key}"><span>${esc(c.label)}</span><output id="o-${c.key}">${st.weights[c.key]}</output></label>
              <input type="range" min="0" max="5" step="1" id="w-${c.key}" data-weight="${c.key}" value="${st.weights[c.key]}">
              <small class="muted">${esc(c.hint)}</small>
            </div>`).join('')}
        </div>
        <div class="row" style="margin-top:14px">
          <label class="row" style="gap:6px">Beruf
            <select data-rank-filter="beruf" style="width:auto">
              <option value="">alle</option>
              ${root.MapView.allBerufe().map((b) => `<option ${f.berufe.length === 1 && f.berufe[0] === b ? 'selected' : ''}>${esc(b)}</option>`).join('')}
            </select></label>
          <label class="row" style="gap:6px">Form
            <select data-rank-filter="form" style="width:auto">
              <option value="">alle</option>
              ${Object.entries(root.Ranking.FORM_LABEL).map(([k, v]) => `<option value="${k}" ${f.formen.length === 1 && f.formen[0] === k ? 'selected' : ''}>${esc(v)}</option>`).join('')}
            </select></label>
          <label class="row" style="gap:6px">Art
            <select data-rank-filter="kategorie" style="width:auto">
              <option value="alle" ${f.kategorie === 'alle' ? 'selected' : ''}>Schulen und Träger</option>
              <option value="schule" ${f.kategorie === 'schule' ? 'selected' : ''}>Nur Schulen</option>
              <option value="traeger" ${f.kategorie === 'traeger' ? 'selected' : ''}>Nur Träger (PiA-Stellen)</option>
            </select></label>
          <label class="row" style="gap:6px">Max. Entfernung
            <select data-rank-filter="maxKm" style="width:auto">
              ${[0, 10, 20, 30, 50].map((k) => `<option value="${k}" ${Number(f.maxKm) === k ? 'selected' : ''}>${k ? k + ' km' : 'egal'}</option>`).join('')}
            </select></label>
          <span class="spacer"></span>
          <button class="btn small" data-action="reset-weights">Gewichte zurücksetzen</button>
        </div>
        <p class="muted" style="margin:10px 0 0">Entfernung ab ${st.home ? 'deinem Wohnort' : 'Kiel Hbf (Wohnort auf der <a href="#karte">Karte</a> setzen)'}. „?“ heißt: keine Angabe gefunden, zählt neutral mit 50.</p>
      </details>
      <div class="card" id="rank-table"></div>`;
    renderRankingTable();
  }

  function renderRankingTable() {
    const host = document.getElementById('rank-table');
    if (!host) return;
    const rows = currentRanking();
    const st = root.Store.get();
    const onList = new Set(st.bewerbungen.map((b) => b.institutionId + '#' + b.angebotIndex));
    if (!rows.length) { host.innerHTML = '<div class="empty">Keine Angebote passen zu den Filtern.</div>'; return; }
    const short = (t, n) => (t.length > n ? t.slice(0, n - 1) + '…' : t);
    host.innerHTML = rows.map((r, n) => `
      <div class="rank-row">
        <div class="rank-num">${n + 1}</div>
        <div class="rank-main">
          <a href="#" data-action="inst-detail" data-inst="${esc(r.inst.id)}"><b>${esc(r.inst.kurzname || r.inst.name)}</b></a>
          <div>${esc(r.offer.bildungsgang || r.offer.beruf)}</div>
          <div class="row" style="margin-top:4px">
            <span class="chip ${r.inst.kategorie === 'traeger' ? 'traeger' : 'school'}">${r.inst.kategorie === 'traeger' ? 'Träger' : 'Schule'}</span>
            <span class="chip accent">${esc(root.Ranking.FORM_LABEL[r.offer.form] || r.offer.form || '')}</span>
            ${r.offer.dauer_jahre ? `<span class="chip">${esc(String(r.offer.dauer_jahre).replace('.', ','))} J.</span>` : ''}
            ${typeof r.parts.entfernung.km === 'number' ? `<span class="chip">${r.parts.entfernung.km.toFixed(1).replace('.', ',')} km</span>` : ''}
            ${r.offer.bewerbungsfrist ? `<span class="chip warn" title="${esc(r.offer.bewerbungsfrist)}">Frist: ${esc(short(r.offer.bewerbungsfrist, 34))}</span>` : ''}
          </div>
          <div style="margin-top:6px">${onList.has(r.key) ? '<span class="chip good">auf deiner Liste</span>' : `<button class="btn small" data-action="add-app" data-inst="${esc(r.inst.id)}" data-offer="${r.offerIndex}">Auf meine Liste</button>`}</div>
        </div>
        <div class="rank-score"><span class="score">${r.score}</span><small class="muted">Punkte</small></div>
        <div class="bars" aria-label="Aufschlüsselung">${root.Ranking.CRITERIA.filter((c) => Number(st.weights[c.key]) > 0).map((c) => `
          <span>${esc(c.label)}${r.parts[c.key].unknown ? ' ?' : ''}</span>
          <div class="bar" title="${esc(c.label)}: ${Math.round(r.parts[c.key].value)} von 100${r.parts[c.key].unknown ? ' (keine Angabe)' : ''}"><div style="width:${r.parts[c.key].value}%;${r.parts[c.key].unknown ? 'opacity:.35' : ''}"></div></div>`).join('')}</div>
      </div>`).join('');
  }

  /* ---------- Aufgaben & Unterlagen ---------- */
  const DOC_STATUS = [['offen', 'offen'], ['beantragt', 'beantragt / in Arbeit'], ['fertig', 'fertig']];

  function renderAufgaben(view) {
    const st = root.Store.get();
    const tasks = st.aufgaben.slice().sort((a, b) => Number(a.erledigt) - Number(b.erledigt) || (a.faellig || '9999').localeCompare(b.faellig || '9999'));
    view.innerHTML = `
      <div class="page-head"><div><h1>Aufgaben &amp; Unterlagen</h1><p>Was noch zu tun ist und welche Dokumente du schon zusammen hast.</p></div></div>
      <div class="grid grid-2">
        <section class="card">
          <h2>Aufgaben</h2>
          <form class="row" data-form="task" style="margin-bottom:8px">
            <input name="text" placeholder="Neue Aufgabe" style="flex:1;min-width:160px" required>
            <input type="date" name="faellig" style="width:auto">
            <button class="btn primary">Hinzufügen</button>
          </form>
          ${tasks.map((a) => `
            <div class="check-row ${a.erledigt ? 'done' : ''}">
              <input type="checkbox" data-action="toggle-task" data-id="${esc(a.id)}" ${a.erledigt ? 'checked' : ''} aria-label="erledigt">
              <div class="grow"><div class="title">${esc(a.text)}</div>
                ${a.faellig ? `<small class="${a.erledigt ? '' : dueClass(a.faellig)}">bis ${formatDate(a.faellig)} (${relativeDays(a.faellig)})</small>` : ''}</div>
              <button class="btn small danger" data-action="del-task" data-id="${esc(a.id)}" aria-label="löschen">✕</button>
            </div>`).join('') || '<p class="empty">Keine Aufgaben.</p>'}
        </section>
        <section class="card">
          <h2>Unterlagen</h2>
          ${st.unterlagen.map((d) => `
            <div class="check-row ${d.status === 'fertig' ? 'done' : ''}">
              <div class="grow"><div class="title"><b>${esc(d.name)}</b></div>${d.notiz ? `<small class="muted">${esc(d.notiz)}</small>` : ''}</div>
              <select data-doc-status="${esc(d.id)}" aria-label="Status">${DOC_STATUS.map(([k, l]) => `<option value="${k}" ${d.status === k ? 'selected' : ''}>${l}</option>`).join('')}</select>
              <button class="btn small danger" data-action="del-doc" data-id="${esc(d.id)}" aria-label="löschen">✕</button>
            </div>`).join('')}
          <form class="row" data-form="doc" style="margin-top:8px">
            <input name="name" placeholder="Weiteres Dokument" style="flex:1" required>
            <button class="btn">Hinzufügen</button>
          </form>
        </section>
      </div>`;
  }

  /* ---------- Infos ---------- */
  const INFO_SECTIONS = [
    ['zugangswege', 'Zugangswege'], ['fristen', 'Fristen und Start'], ['verguetung', 'Vergütung'],
    ['unterlagen', 'Bewerbungsunterlagen'], ['foerderung', 'Förderung (BAföG & Co.)']
  ];

  const GLOSSAR = [
    ['PiA', 'Praxisintegrierte Ausbildung: Du arbeitest in einer Kita und gehst parallel zur Fachschule. Dauert meist 3 Jahre und ist bezahlt.'],
    ['SPA', 'Sozialpädagogische/r Assistent/in: 2-jährige Ausbildung an einer Berufsfachschule, oft der erste Schritt zum Erzieher.'],
    ['HEP', 'Heilerziehungspflege: Begleitung von Menschen mit Behinderung, Abschluss auf Fachschulniveau wie Erzieher.'],
    ['ESA', 'Erster allgemeinbildender Schulabschluss (früher Hauptschulabschluss).'],
    ['MSA', 'Mittlerer Schulabschluss (früher Realschulabschluss).'],
    ['FHR', 'Fachhochschulreife (Fachabitur).'],
    ['Fachschule', 'Schule für eine Weiterbildung nach Ausbildung bzw. Vorqualifikation, z. B. für Erzieher. Abschluss auf Bachelor-Niveau (DQR 6).'],
    ['Erweitertes Führungszeugnis', 'Nachweis, dass du keine einschlägigen Vorstrafen hast. Pflicht für die Arbeit mit Kindern. Beantragung beim Bürgeramt oder online.'],
    ['Aufstiegs-BAföG', 'Förderung für Fortbildungen wie die Erzieher-Fachschule, wenn du schon eine Ausbildung hast. Der Unterhaltsbeitrag muss nicht zurückgezahlt werden.'],
    ['Träger', 'Die Organisation hinter einer Kita, z. B. die Stadt, AWO, DRK oder die Kirche. Bei PiA schließt du den Vertrag mit dem Träger.']
  ];

  function renderInfos(view) {
    const h = D().hintergrund || {};
    view.innerHTML = `
      <div class="page-head"><div><h1>Wissenswertes</h1><p>Recherchiert am ${formatDate(D().stand)} mit Quellen. Vor Entscheidungen bitte die verlinkte Quelle prüfen.</p></div></div>
      <section class="card" style="margin-bottom:16px"><h2>Begriffe kurz erklärt</h2>
        <dl style="margin:0;display:grid;grid-template-columns:minmax(120px,max-content) 1fr;gap:6px 16px">
          ${GLOSSAR.map(([t, d]) => `<dt><b>${esc(t)}</b></dt><dd style="margin:0">${esc(d)}</dd>`).join('')}
        </dl></section>
      <div class="grid grid-2">${INFO_SECTIONS.filter(([k]) => (h[k] || []).length).map(([k, label]) => `
        <section class="card info-section"><h2>${label}</h2>
          ${h[k].map((it) => `<div class="info-item"><b>${esc(it.titel)}</b><p style="margin:2px 0">${esc(it.text)}</p>
            ${it.quelle ? `<a class="source" href="${esc(it.quelle)}" target="_blank" rel="noopener">Quelle</a>` : ''}</div>`).join('')}
        </section>`).join('')}
      </div>
      <p class="muted" style="margin-top:16px">Kartendaten © OpenStreetMap-Mitwirkende. Alle Angaben ohne Gewähr.</p>`;
  }

  function handleAction(action, el) {
    switch (action) {
      case 'inst-detail': showInstitution(el.dataset.inst); return true;
      case 'ics': exportCalendar(); return true;
      case 'toggle-task': root.Store.update((s) => { const a = s.aufgaben.find((x) => x.id === el.dataset.id); if (a) a.erledigt = !a.erledigt; }); return true;
      case 'del-task': root.Store.update((s) => { s.aufgaben = s.aufgaben.filter((x) => x.id !== el.dataset.id); }); return true;
      case 'del-doc':
        if (!confirm('Dokument von der Liste entfernen?')) return true;
        root.Store.update((s) => { s.unterlagen = s.unterlagen.filter((x) => x.id !== el.dataset.id); });
        return true;
      case 'reset-weights': root.Store.update((s) => { s.weights = root.Ranking.defaultWeights(); }); return true;
    }
    return false;
  }

  function handleSubmit(form) {
    const data = Object.fromEntries(new FormData(form));
    if (form.dataset.form === 'task') {
      root.Store.update((s) => { s.aufgaben.push({ id: uid(), text: data.text.trim(), faellig: data.faellig || '', erledigt: false }); });
      return true;
    }
    if (form.dataset.form === 'doc') {
      root.Store.update((s) => { s.unterlagen.push({ id: uid(), name: data.name.trim(), notiz: '', status: 'offen' }); });
      return true;
    }
    return false;
  }

  function handleInput(el) {
    if (el.dataset.weight) {
      const key = el.dataset.weight;
      root.Store.update((s) => { s.weights[key] = Number(el.value); }, { silent: true });
      const out = document.getElementById('o-' + key);
      if (out) out.textContent = el.value;
      renderRankingTable();
      return true;
    }
    return false;
  }

  function handleChange(el) {
    if (el.dataset.rankFilter) {
      const k = el.dataset.rankFilter;
      root.Store.update((s) => {
        if (k === 'beruf') s.filters.berufe = el.value ? [el.value] : [];
        if (k === 'form') s.filters.formen = el.value ? [el.value] : [];
        if (k === 'maxKm') s.filters.maxKm = Number(el.value);
        if (k === 'kategorie') s.filters.kategorie = el.value;
      });
      return true;
    }
    if (el.dataset.docStatus) {
      root.Store.update((s) => { const d = s.unterlagen.find((x) => x.id === el.dataset.docStatus); if (d) d.status = el.value; });
      return true;
    }
    return false;
  }

  // Begriff mit Erklärung als Tooltip, z. B. gloss('PiA').
  function gloss(term) {
    const g = GLOSSAR.find(([t]) => t === term);
    return g ? `<abbr title="${esc(g[1])}">${esc(term)}</abbr>` : esc(term);
  }

  root.UI = UI;
  root.Pages = { gloss, renderStart, renderRanking, renderAufgaben, renderInfos, showInstitution, handleAction, handleSubmit, handleInput, handleChange, currentRanking };
})(window);
