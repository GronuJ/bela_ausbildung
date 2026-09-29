/* Bewerbungs-Tracker: Board nach Status, Liste und Bearbeiten-Dialog. */
(function (root) {
  'use strict';
  const { esc, formatDate, relativeDays, dueClass, stars, todayIso, uid } = root.Util;

  function inst(id) { return root.AUSBILDUNG_DATA.institutions.find((i) => i.id === id) || null; }

  function titleOf(b) {
    const i = b.institutionId ? inst(b.institutionId) : null;
    return b.name || (i ? i.kurzname || i.name : 'Ohne Namen');
  }

  function nextDate(b) {
    if (b.gespraechAm && root.Util.daysUntil(b.gespraechAm) >= 0) return { label: 'Gespräch', date: b.gespraechAm };
    if (b.frist && ['idee', 'recherche', 'vorbereitung'].includes(b.status)) return { label: 'Frist', date: b.frist };
    return null;
  }

  function cardHtml(b) {
    const nd = nextDate(b);
    const docs = root.Store.get().unterlagen;
    const done = docs.filter((d) => b.unterlagen[d.id]).length;
    return `
      <div class="app-card" data-action="edit-app" data-id="${esc(b.id)}" tabindex="0" draggable="true">
        <h4>${esc(titleOf(b))}</h4>
        <div class="meta">${esc(b.bildungsgang || '')}</div>
        ${nd ? `<div class="meta ${dueClass(nd.date)}">${nd.label}: ${formatDate(nd.date)} (${relativeDays(nd.date)})</div>` : ''}
        <div class="row meta" style="margin-top:4px">
          ${b.bewertung ? `<span class="stars">${stars(b.bewertung)}</span>` : ''}
          ${docs.length ? `<span>Unterlagen ${done}/${docs.length}</span>` : ''}
        </div>
      </div>`;
  }

  function render(view) {
    const st = root.Store.get();
    const apps = st.bewerbungen;
    const board = st.trackerView !== 'liste';
    view.innerHTML = `
      <div class="page-head">
        <div>
          <h1>Meine Bewerbungen</h1>
          <p>Alles an einem Ort: Status, Fristen, Ansprechpartner, Unterlagen und Notizen.</p>
        </div>
        <span class="spacer"></span>
        <div class="row view-toggle">
          <button class="btn ${board ? 'active' : ''}" data-action="tracker-view" data-view="board">Board</button>
          <button class="btn ${!board ? 'active' : ''}" data-action="tracker-view" data-view="liste">Liste</button>
          <button class="btn primary" data-action="add-app">+ Neue Bewerbung</button>
        </div>
      </div>
      ${!apps.length ? `
        <div class="card empty">
          <p>Noch keine Bewerbungen. Leg eine an oder such dir auf der <a href="#karte">Karte</a> bzw. im <a href="#ranking">Ranking</a> Schulen aus und klick auf „Auf meine Liste“.</p>
          <button class="btn primary" data-action="add-app">+ Neue Bewerbung</button>
        </div>` : board ? boardHtml(apps) : listHtml(apps)}`;
  }

  function boardHtml(apps) {
    return `<div class="board">${root.Store.STATUSES.map((s) => {
      const items = apps.filter((b) => b.status === s.key);
      return `<section class="column" aria-label="${esc(s.label)}" data-status="${s.key}">
        <h3><span>${esc(s.label)}</span><span>${items.length}</span></h3>
        ${items.map(cardHtml).join('')}
      </section>`;
    }).join('')}</div>`;
  }

  function listHtml(apps) {
    const sorted = apps.slice().sort((a, b) => (a.frist || '9999').localeCompare(b.frist || '9999'));
    return `<div class="card table-wrap"><table class="rank-table">
      <thead><tr><th>Einrichtung</th><th>Status</th><th>Frist</th><th>Gespräch</th><th>Bewertung</th></tr></thead>
      <tbody>${sorted.map((b) => {
        const s = root.Store.STATUSES.find((x) => x.key === b.status) || {};
        return `<tr data-action="edit-app" data-id="${esc(b.id)}" style="cursor:pointer">
          <td><b>${esc(titleOf(b))}</b><div class="muted">${esc(b.bildungsgang || '')}</div></td>
          <td><span class="chip ${s.tone || ''}">${esc(s.label || b.status)}</span></td>
          <td class="${dueClass(b.frist)}">${b.frist ? formatDate(b.frist) + '<div class="muted">' + relativeDays(b.frist) + '</div>' : '–'}</td>
          <td>${b.gespraechAm ? formatDate(b.gespraechAm) : '–'}</td>
          <td class="stars">${b.bewertung ? stars(b.bewertung) : ''}</td>
        </tr>`;
      }).join('')}</tbody></table></div>`;
  }

  function offerOptions(selectedInst, selectedIdx) {
    const groups = root.AUSBILDUNG_DATA.institutions.map((i) => {
      const offers = i.angebote && i.angebote.length ? i.angebote : [{ beruf: 'allgemein', form: '' }];
      return `<optgroup label="${esc(i.kurzname || i.name)}">${offers.map((o, idx) => {
        const val = `${i.id}#${i.angebote && i.angebote.length ? idx : ''}`;
        const sel = selectedInst === i.id && (selectedIdx === null || selectedIdx === undefined ? !i.angebote.length || idx === 0 : Number(selectedIdx) === idx);
        return `<option value="${esc(val)}" ${sel ? 'selected' : ''}>${esc((i.kurzname || i.name) + ' · ' + o.beruf + (o.form ? ' (' + (root.Ranking.FORM_LABEL[o.form] || o.form) + ')' : ''))}</option>`;
      }).join('')}</optgroup>`;
    });
    return `<option value="" ${!selectedInst ? 'selected' : ''}>Eigene Einrichtung (nicht in der Liste)</option>${groups.join('')}`;
  }

  function newApplication(instId, offerIndex) {
    const i = instId ? inst(instId) : null;
    const offer = i && i.angebote && i.angebote.length ? i.angebote[offerIndex || 0] : null;
    return {
      id: uid(), institutionId: i ? i.id : null, angebotIndex: offer ? (offerIndex || 0) : null,
      name: '', bildungsgang: offer ? (offer.bildungsgang || offer.beruf) : '', status: 'idee',
      frist: '', beworbenAm: '', gespraechAm: '', kontaktName: '', kontaktTel: i && i.telefon ? i.telefon : '',
      kontaktMail: i && i.email ? i.email : '', notizen: '', bewertung: 0, unterlagen: {},
      verlauf: [{ datum: todayIso(), text: 'Auf die Liste gesetzt' }], erstellt: todayIso()
    };
  }

  function openEditor(existing) {
    const st = root.Store.get();
    const isNew = !st.bewerbungen.some((b) => b.id === existing.id);
    const b = JSON.parse(JSON.stringify(existing));
    const i = b.institutionId ? inst(b.institutionId) : null;
    const offer = i && b.angebotIndex !== null && i.angebote ? i.angebote[b.angebotIndex] : null;

    const body = `
      <div class="form-grid">
        <label class="field full"><span>Einrichtung und Bildungsgang</span>
          <select name="offer">${offerOptions(b.institutionId, b.angebotIndex)}</select>
        </label>
        <label class="field full" data-custom ${b.institutionId ? 'hidden' : ''}><span>Name der Einrichtung</span>
          <input name="name" value="${esc(b.name)}" placeholder="z. B. Kita Sonnenschein, Kiel-Gaarden">
        </label>
        <label class="field"><span>Bildungsgang / Stelle</span><input name="bildungsgang" value="${esc(b.bildungsgang)}"></label>
        <label class="field"><span>Status</span>
          <select name="status">${root.Store.STATUSES.map((s) => `<option value="${s.key}" ${s.key === b.status ? 'selected' : ''}>${esc(s.label)}</option>`).join('')}</select>
        </label>
        <label class="field"><span>Bewerbungsfrist</span><input type="date" name="frist" value="${esc(b.frist)}">
          ${offer && offer.bewerbungsfrist ? `<small>Laut Quelle: ${esc(offer.bewerbungsfrist)}</small>` : ''}
        </label>
        <label class="field"><span>Beworben am</span><input type="date" name="beworbenAm" value="${esc(b.beworbenAm)}"></label>
        <label class="field"><span>Gespräch / Hospitation am</span><input type="date" name="gespraechAm" value="${esc(b.gespraechAm)}"></label>
        <div class="field"><span class="muted" style="font-size:.85rem;font-weight:500">Bauchgefühl</span>
          <div class="star-input" data-stars="${b.bewertung || 0}">${[1, 2, 3, 4, 5].map((n) => `<button type="button" data-star="${n}" class="${n <= b.bewertung ? 'on' : ''}" aria-label="${n} Sterne">★</button>`).join('')}</div>
        </div>
        <label class="field"><span>Ansprechpartner/in</span><input name="kontaktName" value="${esc(b.kontaktName)}"></label>
        <label class="field"><span>Telefon</span><input name="kontaktTel" value="${esc(b.kontaktTel)}"></label>
        <label class="field"><span>E-Mail</span><input type="email" name="kontaktMail" value="${esc(b.kontaktMail)}"></label>
        <div class="field full"><span class="muted" style="font-size:.85rem;font-weight:500">Unterlagen für diese Bewerbung</span>
          <div class="row" style="gap:4px 16px">${st.unterlagen.map((d) => `
            <label class="row" style="gap:6px;flex-wrap:nowrap"><input type="checkbox" data-doc="${esc(d.id)}" ${b.unterlagen[d.id] ? 'checked' : ''}> ${esc(d.name)}</label>`).join('')}
          </div>
        </div>
        <label class="field full"><span>Notizen</span><textarea name="notizen" placeholder="Eindruck, Fragen fürs Gespräch, was die Schule wichtig findet …">${esc(b.notizen)}</textarea></label>
        <div class="field full"><span class="muted" style="font-size:.85rem;font-weight:500">Verlauf</span>
          <ul class="timeline">${b.verlauf.slice().reverse().map((v) => `<li><b>${formatDate(v.datum)}</b> ${esc(v.text)}</li>`).join('') || '<li class="muted">Noch nichts</li>'}</ul>
          <div class="row" style="margin-top:6px"><input name="verlaufNeu" placeholder="Neuer Eintrag, z. B. Angerufen, Infoabend besucht" style="flex:1"></div>
        </div>
      </div>`;

    root.UI.openModal({
      title: isNew ? 'Neue Bewerbung' : titleOf(b),
      body,
      actions: [
        !isNew ? { label: 'Löschen', className: 'danger', onClick: (close) => {
          if (!confirm('Diese Bewerbung wirklich löschen?')) return;
          root.Store.update((s) => { s.bewerbungen = s.bewerbungen.filter((x) => x.id !== b.id); });
          close();
        } } : null,
        { label: 'Abbrechen', onClick: (close) => close() },
        { label: 'Speichern', className: 'primary', onClick: (close, el) => { persist(el, b, isNew); close(); } }
      ].filter(Boolean),
      onMount: (el) => {
        const sel = el.querySelector('[name=offer]');
        sel.addEventListener('change', () => {
          const [id, idx] = sel.value.split('#');
          el.querySelector('[data-custom]').hidden = !!id;
          const ni = id ? inst(id) : null;
          const no = ni && idx !== '' && ni.angebote ? ni.angebote[Number(idx)] : null;
          if (no) el.querySelector('[name=bildungsgang]').value = no.bildungsgang || no.beruf;
        });
        el.querySelector('.star-input').addEventListener('click', (e) => {
          const btn = e.target.closest('[data-star]');
          if (!btn) return;
          const box = e.currentTarget;
          const n = Number(btn.dataset.star);
          const val = Number(box.dataset.stars) === n ? 0 : n;
          box.dataset.stars = val;
          box.querySelectorAll('[data-star]').forEach((x) => x.classList.toggle('on', Number(x.dataset.star) <= val));
        });
      }
    });
  }

  function persist(el, b, isNew) {
    const val = (n) => el.querySelector(`[name=${n}]`).value.trim();
    const [id, idx] = el.querySelector('[name=offer]').value.split('#');
    const before = b.status;
    b.institutionId = id || null;
    b.angebotIndex = id && idx !== '' && idx !== undefined ? Number(idx) : null;
    b.name = id ? '' : val('name');
    for (const f of ['bildungsgang', 'status', 'frist', 'beworbenAm', 'gespraechAm', 'kontaktName', 'kontaktTel', 'kontaktMail', 'notizen']) b[f] = val(f);
    b.bewertung = Number(el.querySelector('.star-input').dataset.stars) || 0;
    b.unterlagen = {};
    el.querySelectorAll('[data-doc]').forEach((c) => { if (c.checked) b.unterlagen[c.dataset.doc] = true; });
    if (!isNew && before !== b.status) b.verlauf.push({ datum: todayIso(), text: `Status: ${root.Store.statusLabel(before)} → ${root.Store.statusLabel(b.status)}` });
    if (b.status === 'beworben' && !b.beworbenAm) b.beworbenAm = todayIso();
    const neu = val('verlaufNeu');
    if (neu) b.verlauf.push({ datum: todayIso(), text: neu });
    root.Store.update((s) => {
      const pos = s.bewerbungen.findIndex((x) => x.id === b.id);
      if (pos >= 0) s.bewerbungen[pos] = b; else s.bewerbungen.push(b);
    });
    root.Util.toast('Gespeichert');
  }

  function handleAction(action, el) {
    const st = root.Store.get();
    switch (action) {
      case 'tracker-view': root.Store.update((s) => { s.trackerView = el.dataset.view; }); return true;
      case 'edit-app': {
        const b = st.bewerbungen.find((x) => x.id === el.dataset.id);
        if (b) openEditor(b);
        return true;
      }
      case 'add-kita': {
        const k = root.MapView.kitaById(el.dataset.kita);
        if (!k) return true;
        const existing = st.bewerbungen.find((x) => !x.institutionId && x.name === k.name);
        if (existing) { openEditor(existing); root.Util.toast('Steht schon auf deiner Liste'); return true; }
        const b = newApplication(null);
        b.name = k.name;
        b.bildungsgang = 'Praxisstelle (PiA oder Praktikum)';
        b.notizen = [k.traeger ? 'Träger: ' + k.traeger : '', k.adresse ? 'Adresse: ' + k.adresse : '', k.website || ''].filter(Boolean).join('\n');
        openEditor(b);
        return true;
      }
      case 'add-app': {
        const instId = el.dataset.inst || null;
        const offerIdx = el.dataset.offer !== undefined ? Number(el.dataset.offer) : 0;
        const existing = instId && st.bewerbungen.find((x) => x.institutionId === instId && (el.dataset.offer === undefined || x.angebotIndex === offerIdx));
        if (existing) { openEditor(existing); root.Util.toast('Steht schon auf deiner Liste'); return true; }
        openEditor(newApplication(instId, offerIdx));
        return true;
      }
    }
    return false;
  }

  // Bestes Bauchgefühl je Einrichtung, fürs Ranking.
  function ratingsByInstitution() {
    const out = {};
    for (const b of root.Store.get().bewerbungen) {
      if (b.institutionId && b.bewertung) out[b.institutionId] = Math.max(out[b.institutionId] || 0, b.bewertung);
    }
    return out;
  }

  function moveTo(id, status) {
    root.Store.update((s) => {
      const b = s.bewerbungen.find((x) => x.id === id);
      if (!b || b.status === status) return;
      b.verlauf.push({ datum: todayIso(), text: `Status: ${root.Store.statusLabel(b.status)} → ${root.Store.statusLabel(status)}` });
      b.status = status;
      if (status === 'beworben' && !b.beworbenAm) b.beworbenAm = todayIso();
    });
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

  root.Tracker = { render, moveTo, handleAction, ratingsByInstitution, titleOf, nextDate };
})(window);
