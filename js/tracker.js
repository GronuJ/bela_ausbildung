/* Bewerbungen: Board nach Status und ein kurzer Bearbeiten-Dialog. */
(function (root) {
  'use strict';
  const { esc, formatDate, relativeDays, dueClass, uid } = root.Util;

  function inst(id) { return root.AUSBILDUNG_DATA.institutions.find((i) => i.id === id) || null; }

  function titleOf(b) {
    const i = b.institutionId ? inst(b.institutionId) : null;
    return b.name || (i ? i.kurzname || i.name : 'Ohne Namen');
  }

  function nextDate(b) {
    if (b.gespraechAm && root.Util.daysUntil(b.gespraechAm) >= 0) return { label: 'Gespräch', date: b.gespraechAm };
    if (b.frist && b.status === 'idee') return { label: 'Frist', date: b.frist };
    return null;
  }

  function cardHtml(b) {
    const nd = nextDate(b);
    return `
      <div class="app-card" data-action="edit-app" data-id="${esc(b.id)}" tabindex="0" draggable="true">
        <h4>${esc(titleOf(b))}</h4>
        ${nd ? `<div class="meta ${dueClass(nd.date)}">${nd.label} ${relativeDays(nd.date)}</div>` : ''}
      </div>`;
  }

  function render(view) {
    const apps = root.Store.get().bewerbungen;
    view.innerHTML = `
      <div class="page-head">
        <h1>Bewerbungen</h1>
        <span class="spacer"></span>
        <button class="btn primary" data-action="add-app">+ Neu</button>
      </div>
      ${!apps.length ? `
        <div class="card empty">
          <p>Noch leer. Im <a href="#ranking">Ranking</a> oder auf der <a href="#karte">Karte</a> auf „Merken“ tippen.</p>
        </div>` : `
        <div class="board">${root.Store.STATUSES.map((s) => {
          const items = apps.filter((b) => b.status === s.key);
          return `<section class="column" aria-label="${esc(s.label)}" data-status="${s.key}">
            <h3><span>${esc(s.label)}</span><span>${items.length}</span></h3>
            ${items.map(cardHtml).join('')}
          </section>`;
        }).join('')}</div>
        <p class="muted hint">Karten ziehen oder antippen, um den Status zu ändern.</p>`}`;
  }

  function offerOptions(selectedInst, selectedIdx) {
    const groups = root.AUSBILDUNG_DATA.institutions.map((i) => `<optgroup label="${esc(i.kurzname || i.name)}">${(i.angebote || []).map((o, idx) => {
      const sel = selectedInst === i.id && Number(selectedIdx || 0) === idx;
      return `<option value="${esc(i.id + '#' + idx)}" ${sel ? 'selected' : ''}>${esc((i.kurzname || i.name) + ' · ' + o.beruf + ' (' + (root.Ranking.FORM_LABEL[o.form] || o.form) + ')')}</option>`;
    }).join('')}</optgroup>`);
    return `<option value="" ${!selectedInst ? 'selected' : ''}>Andere Einrichtung …</option>${groups.join('')}`;
  }

  function newApplication(instId, offerIndex) {
    const i = instId ? inst(instId) : null;
    const offer = i && i.angebote && i.angebote.length ? i.angebote[offerIndex || 0] : null;
    return {
      id: uid(), institutionId: i ? i.id : null, angebotIndex: offer ? (offerIndex || 0) : null,
      name: '', bildungsgang: offer ? offer.beruf : '', status: 'idee',
      frist: '', gespraechAm: '', kontakt: '', notizen: ''
    };
  }

  function openEditor(existing) {
    const st = root.Store.get();
    const isNew = !st.bewerbungen.some((b) => b.id === existing.id);
    const b = Object.assign({}, existing);
    const i = b.institutionId ? inst(b.institutionId) : null;
    const offer = i && b.angebotIndex !== null && i.angebote ? i.angebote[b.angebotIndex] : null;

    const body = `
      <div class="form-grid">
        <label class="field full"><span>Wo?</span>
          <select name="offer">${offerOptions(b.institutionId, b.angebotIndex)}</select>
        </label>
        <label class="field full" data-custom ${b.institutionId ? 'hidden' : ''}><span>Name</span>
          <input name="name" value="${esc(b.name)}" placeholder="z. B. Kita Sonnenschein">
        </label>
        <div class="field full"><span>Status</span>
          <div class="segmented">${root.Store.STATUSES.map((s) => `
            <label><input type="radio" name="status" value="${s.key}" ${s.key === b.status ? 'checked' : ''}><span>${esc(s.label)}</span></label>`).join('')}
          </div>
        </div>
        <label class="field"><span>Bewerbungsfrist</span><input type="date" name="frist" value="${esc(b.frist)}">
          ${offer && offer.bewerbungsfrist ? `<small class="muted">Laut Schule: ${esc(offer.bewerbungsfrist)}</small>` : ''}
        </label>
        <label class="field"><span>Gespräch am</span><input type="date" name="gespraechAm" value="${esc(b.gespraechAm)}"></label>
        <label class="field full"><span>Kontakt</span><input name="kontakt" value="${esc(b.kontakt)}" placeholder="Name, Telefon oder E-Mail"></label>
        <label class="field full"><span>Notizen</span><textarea name="notizen">${esc(b.notizen)}</textarea></label>
      </div>`;

    root.UI.openModal({
      title: isNew ? 'Bewerbung merken' : titleOf(b),
      body,
      actions: [
        !isNew ? { label: 'Löschen', className: 'danger', onClick: (close) => {
          if (!confirm('Diese Bewerbung löschen?')) return;
          root.Store.update((s) => { s.bewerbungen = s.bewerbungen.filter((x) => x.id !== b.id); });
          close();
        } } : null,
        { label: 'Speichern', className: 'primary', onClick: (close, el) => { persist(el, b); close(); } }
      ].filter(Boolean),
      onMount: (el) => {
        const sel = el.querySelector('[name=offer]');
        sel.addEventListener('change', () => { el.querySelector('[data-custom]').hidden = !!sel.value; });
      }
    });
  }

  function persist(el, b) {
    const val = (n) => el.querySelector(`[name=${n}]`).value.trim();
    const [id, idx] = el.querySelector('[name=offer]').value.split('#');
    const i = id ? inst(id) : null;
    b.institutionId = id || null;
    b.angebotIndex = id ? Number(idx) : null;
    b.name = id ? '' : val('name');
    b.bildungsgang = i && i.angebote[b.angebotIndex] ? i.angebote[b.angebotIndex].beruf : b.bildungsgang;
    b.status = (el.querySelector('[name=status]:checked') || {}).value || 'idee';
    for (const f of ['frist', 'gespraechAm', 'kontakt', 'notizen']) b[f] = val(f);
    root.Store.update((s) => {
      const pos = s.bewerbungen.findIndex((x) => x.id === b.id);
      if (pos >= 0) s.bewerbungen[pos] = b; else s.bewerbungen.push(b);
    });
    root.Util.toast('Gespeichert');
  }

  function moveTo(id, status) {
    root.Store.update((s) => {
      const b = s.bewerbungen.find((x) => x.id === id);
      if (b) b.status = status;
    });
  }

  function handleAction(action, el) {
    const st = root.Store.get();
    switch (action) {
      case 'edit-app': {
        const b = st.bewerbungen.find((x) => x.id === el.dataset.id);
        if (b) openEditor(b);
        return true;
      }
      case 'add-kita': {
        const k = root.MapView.kitaById(el.dataset.kita);
        if (!k) return true;
        const existing = st.bewerbungen.find((x) => !x.institutionId && x.name === k.name);
        if (existing) { openEditor(existing); return true; }
        const b = newApplication(null);
        b.name = k.name;
        b.bildungsgang = 'Praxisstelle';
        b.notizen = [k.traeger, k.adresse, k.website].filter(Boolean).join('\n');
        openEditor(b);
        return true;
      }
      case 'add-app': {
        const instId = el.dataset.inst || null;
        const offerIdx = el.dataset.offer !== undefined ? Number(el.dataset.offer) : 0;
        const existing = instId && st.bewerbungen.find((x) => x.institutionId === instId && (el.dataset.offer === undefined || x.angebotIndex === offerIdx));
        if (existing) { openEditor(existing); root.Util.toast('Schon gemerkt'); return true; }
        openEditor(newApplication(instId, offerIdx));
        return true;
      }
    }
    return false;
  }

  // Karten per Drag & Drop zwischen den Spalten verschieben.
  document.addEventListener('dragstart', (e) => {
    const c = e.target.closest && e.target.closest('.app-card');
    if (!c) return;
    e.dataTransfer.setData('text/plain', c.dataset.id);
    e.dataTransfer.effectAllowed = 'move';
  });
  document.addEventListener('dragover', (e) => {
    const col = e.target.closest && e.target.closest('.column[data-status]');
    if (col) { e.preventDefault(); col.classList.add('drop'); }
  });
  document.addEventListener('dragleave', (e) => {
    const col = e.target.closest && e.target.closest('.column[data-status]');
    if (col && !col.contains(e.relatedTarget)) col.classList.remove('drop');
  });
  document.addEventListener('drop', (e) => {
    const col = e.target.closest && e.target.closest('.column[data-status]');
    if (!col) return;
    e.preventDefault();
    moveTo(e.dataTransfer.getData('text/plain'), col.dataset.status);
  });

  root.Tracker = { render, moveTo, handleAction, titleOf, nextDate };
})(window);
