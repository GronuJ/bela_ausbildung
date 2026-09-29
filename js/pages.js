/* Seiten: Start und Ranking, Detaildialog und Modal-Helfer. */
(function (root) {
  'use strict';
  const { esc, formatDate, relativeDays, dueClass, daysUntil } = root.Util;

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
            ${(actions || []).length ? `<div class="modal-foot">${actions.map((a, i) => `<button class="btn ${a.className || ''}" data-modal-action="${i}">${esc(a.label)}</button>`).join('')}</div>` : ''}
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
      return close;
    }
  };

  /* ---------- Details zu einer Einrichtung ---------- */
  function showInstitution(id) {
    const i = inst(id);
    if (!i) return;
    const body = `
      <p class="muted" style="margin-top:0">${esc(i.adresse || '')}${i.website ? ` · <a href="${esc(i.website)}" target="_blank" rel="noopener">Website</a>` : ''}</p>
      <ul class="list">${(i.angebote || []).map((o, idx) => `
        <li>
          <span style="flex:1"><b>${esc(o.beruf)}</b> · ${esc(root.Ranking.FORM_LABEL[o.form] || o.form)}${o.dauer_jahre ? `, ${esc(String(o.dauer_jahre).replace('.', ','))} Jahre` : ''}
            ${o.bewerbungsfrist ? `<br><small class="muted">Frist: ${esc(o.bewerbungsfrist)}</small>` : ''}</span>
          <button class="btn small" data-action="add-app" data-inst="${esc(i.id)}" data-offer="${idx}">Merken</button>
        </li>`).join('')}</ul>
      ${(i.quellen || []).length ? `<p class="muted source">Quellen: ${i.quellen.map((q, n) => `<a href="${esc(q)}" target="_blank" rel="noopener">${n + 1}</a>`).join(', ')} · Stand ${formatDate(D().stand)}</p>` : ''}`;
    UI.openModal({ title: i.kurzname || i.name, body });
  }

  function currentRanking() {
    const st = root.Store.get();
    return root.Ranking.rank(D().institutions, { weights: st.weights, home: st.home, filters: { beruf: st.beruf, kategorie: 'schule' } });
  }

  /* ---------- Start ---------- */
  function upcoming() {
    const ev = [];
    for (const b of root.Store.get().bewerbungen) {
      const nd = root.Tracker.nextDate(b);
      if (nd && daysUntil(nd.date) >= 0) ev.push({ uid: b.id, date: nd.date, title: `${nd.label}: ${root.Tracker.titleOf(b)}` });
    }
    return ev.sort((a, b) => a.date.localeCompare(b.date));
  }

  function renderStart(view) {
    const st = root.Store.get();
    const ev = upcoming();
    const next = ev[0];
    const top = currentRanking().slice(0, 3);
    const docs = st.unterlagen;
    const done = docs.filter((d) => d.fertig).length;

    view.innerHTML = `
      <h1>Moin Bela 👋</h1>
      <section class="card next">
        <small class="muted">Als Nächstes</small>
        ${next ? `
          <div class="next-title ${dueClass(next.date)}">${esc(next.title)}</div>
          <div class="muted">${formatDate(next.date)}, ${relativeDays(next.date)}${ev.length > 1 ? ` · danach noch ${ev.length - 1} Termin${ev.length > 2 ? 'e' : ''}` : ''}</div>
          <button class="linkish" data-action="ics">In den Kalender</button>`
        : st.bewerbungen.length ? `
          <div class="next-title">Fristen eintragen</div>
          <div class="muted">Trag bei deinen <a href="#bewerbungen">Bewerbungen</a> die Fristen ein, dann siehst du hier, was ansteht.</div>`
        : `
          <div class="next-title">2–3 Favoriten merken</div>
          <div class="muted">Die Stadt Kiel nimmt PiA-Bewerbungen bis 24.01.2027 an, die Schulen bis Ende Februar 2027.</div>`}
      </section>

      <section class="card">
        <div class="row"><h2 style="margin:0">Passt am besten</h2><span class="spacer"></span><a href="#ranking">Alle</a></div>
        <ul class="list">${top.map((r) => `
          <li><span class="score-badge">${r.score}</span>
            <span style="flex:1"><a href="#" data-action="inst-detail" data-inst="${esc(r.inst.id)}">${esc(r.inst.kurzname || r.inst.name)}</a>
            <br><small class="muted">${esc(r.offer.beruf)} · ${esc(root.Ranking.FORM_LABEL[r.offer.form] || r.offer.form)}</small></span>
            <button class="btn small" data-action="add-app" data-inst="${esc(r.inst.id)}" data-offer="${r.offerIndex}">Merken</button></li>`).join('')}</ul>
      </section>

      <section class="card">
        <div class="row"><h2 style="margin:0">Unterlagen</h2><span class="spacer"></span><span class="muted">${done} von ${docs.length}</span></div>
        <div class="progress" style="margin:8px 0"><div style="width:${docs.length ? (done / docs.length) * 100 : 0}%"></div></div>
        ${docs.map((d) => `
          <label class="check-row ${d.fertig ? 'done' : ''}">
            <input type="checkbox" data-action="toggle-doc" data-id="${esc(d.id)}" ${d.fertig ? 'checked' : ''}>
            <span class="grow"><span class="title">${esc(d.name)}</span>${d.notiz && !d.fertig ? `<br><small class="muted">${esc(d.notiz)}</small>` : ''}</span>
          </label>`).join('')}
      </section>`;
  }

  /* ---------- Ranking ---------- */
  function renderRanking(view) {
    const st = root.Store.get();
    view.innerHTML = `
      <div class="page-head"><h1>Ranking</h1><span class="spacer"></span>
        <select data-set="beruf" aria-label="Beruf" style="width:auto">
          <option value="">Alle Berufe</option>
          ${root.MapView.allBerufe().map((b) => `<option ${st.beruf === b ? 'selected' : ''}>${esc(b)}</option>`).join('')}
        </select>
      </div>
      <section class="card weights">
        ${root.Ranking.CRITERIA.map((c) => `
          <div class="weight">
            <label for="w-${c.key}">${esc(c.label)} <small class="muted">${esc(c.hint)}</small></label>
            <input type="range" min="0" max="5" step="1" id="w-${c.key}" data-weight="${c.key}" value="${st.weights[c.key]}">
          </div>`).join('')}
      </section>
      <section class="card" id="rank-table"></section>`;
    renderRankingTable();
  }

  let showAll = false;
  function renderRankingTable() {
    const host = document.getElementById('rank-table');
    if (!host) return;
    const all = currentRanking();
    const rows = showAll ? all : all.slice(0, 10);
    const onList = new Set(root.Store.get().bewerbungen.map((b) => b.institutionId + '#' + b.angebotIndex));
    if (!rows.length) { host.innerHTML = '<div class="empty">Nichts gefunden.</div>'; return; }
    host.innerHTML = `<ul class="list">${rows.map((r, n) => `
      <li>
        <span class="rank-num">${n + 1}</span>
        <span style="flex:1"><a href="#" data-action="inst-detail" data-inst="${esc(r.inst.id)}"><b>${esc(r.inst.kurzname || r.inst.name)}</b></a>
          <br><small class="muted">${esc(r.offer.beruf)} · ${esc(root.Ranking.FORM_LABEL[r.offer.form] || r.offer.form)}${r.offer.dauer_jahre ? ` · ${esc(String(r.offer.dauer_jahre).replace('.', ','))} J.` : ''}${typeof r.parts.naehe.km === 'number' ? ` · ${r.parts.naehe.km.toFixed(0)} km` : ''}</small></span>
        <span class="score-badge">${r.score}</span>
        ${onList.has(r.key) ? '<span class="chip good">gemerkt</span>' : `<button class="btn small" data-action="add-app" data-inst="${esc(r.inst.id)}" data-offer="${r.offerIndex}">Merken</button>`}
      </li>`).join('')}</ul>
      ${all.length > rows.length ? `<button class="btn" data-action="rank-all" style="width:100%;justify-content:center;margin-top:8px">Alle ${all.length} zeigen</button>` : ''}`;
  }

  function handleAction(action, el) {
    switch (action) {
      case 'inst-detail': showInstitution(el.dataset.inst); return true;
      case 'rank-all': showAll = true; renderRankingTable(); return true;
      case 'ics': {
        const ev = upcoming();
        if (ev.length) root.Util.download('ausbildung-termine.ics', root.Util.buildIcs(ev), 'text/calendar');
        return true;
      }
      case 'toggle-doc':
        root.Store.update((s) => { const d = s.unterlagen.find((x) => x.id === el.dataset.id); if (d) d.fertig = el.checked; });
        return true;
    }
    return false;
  }

  function handleInput(el) {
    if (!el.dataset.weight) return false;
    root.Store.update((s) => { s.weights[el.dataset.weight] = Number(el.value); }, { silent: true });
    renderRankingTable();
    return true;
  }

  root.UI = UI;
  root.Pages = { renderStart, renderRanking, showInstitution, handleAction, handleInput, currentRanking };
})(window);
