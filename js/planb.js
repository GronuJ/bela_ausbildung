/* Plan B Explorer: Welche Wege stehen mit deinem Schulabschluss offen, und wohin führen sie? */
(function (root) {
  'use strict';
  const { esc } = root.Util;

  function P() { return root.PLANB_DATA || { abschluesse: [], pfade: [] }; }
  function pfad(id) { return P().pfade.find((p) => p.id === id) || null; }

  // "ja" -> offen, "nein" -> zu, alles andere (z. B. "mit Bedingung: ...") -> mit Bedingung.
  function zugangFuer(p, profil) {
    if (!profil.abschluss) return { ton: '', label: 'Abschluss wählen', text: '' };
    const raw = (p.zugang && p.zugang[profil.abschluss]) || '';
    const t = raw.trim();
    const lower = t.toLowerCase();
    let ton = 'warn', label = 'mit Bedingung';
    if (!t) { ton = ''; label = 'unklar'; }
    else if (/^ja\b/.test(lower)) { ton = 'good'; label = 'passt'; }
    else if (/^nein\b/.test(lower)) {
      ton = 'bad'; label = 'noch nicht';
      if (profil.ausbildung && /ausbildung/.test(lower)) { ton = 'warn'; label = 'evtl. mit deiner Ausbildung'; }
    }
    return { ton, label, text: t.replace(/^(ja|nein)\b[:,.]?\s*/i, '') };
  }

  function card(p, profil, compact) {
    const z = zugangFuer(p, profil);
    const next = (p.fuehrt_zu || []).map(pfad).filter(Boolean);
    return `
      <div class="card" style="${compact ? 'padding:12px' : ''}">
        <div class="row"><h3 style="margin:0;flex:1">${esc(p.titel)}</h3>
          ${z.label ? `<span class="chip ${z.ton}">${esc(z.label)}</span>` : ''}</div>
        <p style="margin:6px 0">${esc(p.kurz || '')}</p>
        <div class="row">
          ${p.dauer ? `<span class="chip">${esc(p.dauer)}</span>` : ''}
          ${p.verguetet === true ? '<span class="chip good">bezahlt</span>' : p.verguetet === false ? '<span class="chip">unbezahlt</span>' : ''}
        </div>
        ${z.text ? `<p class="muted" style="margin:6px 0 0"><b>Für dich:</b> ${esc(z.text)}</p>` : ''}
        ${next.length ? `<p style="margin:6px 0 0"><b>Danach möglich:</b> ${next.map((n) => `<a href="#planb" data-action="planb-focus" data-id="${esc(n.id)}">${esc(n.titel)}</a>`).join(', ')}</p>` : ''}
        ${!compact && p.hinweis ? `<p class="muted" style="margin:6px 0 0">${esc(p.hinweis)}</p>` : ''}
        ${(p.quellen || []).length ? `<div class="source" style="margin-top:6px">${p.quellen.map((q, i) => `<a href="${esc(q)}" target="_blank" rel="noopener">Quelle ${i + 1}</a>`).join(' · ')}</div>` : ''}
      </div>`;
  }

  function render(view) {
    const st = root.Store.get();
    const profil = st.profil;
    const pfade = P().pfade;
    const groups = { good: [], warn: [], bad: [], '': [] };
    pfade.forEach((p) => groups[zugangFuer(p, profil).ton].push(p));

    view.innerHTML = `
      <div class="page-head"><div>
        <h1>Plan B Explorer</h1>
        <p>Erzieher ist nicht der einzige Weg. Sag kurz, was du mitbringst, und sieh, welche Wege offen sind und wohin sie führen.</p>
      </div></div>

      <section class="card" style="margin-bottom:16px">
        <h2>Das bringst du mit</h2>
        <div class="form-grid">
          <label class="field"><span>Höchster Schulabschluss</span>
            <select data-profil="abschluss">
              <option value="">bitte wählen</option>
              ${P().abschluesse.map((a) => `<option value="${esc(a.key)}" ${profil.abschluss === a.key ? 'selected' : ''}>${esc(a.label)}</option>`).join('')}
            </select></label>
          <label class="field"><span>Abgeschlossene Berufsausbildung?</span>
            <select data-profil="ausbildung"><option value="0" ${!profil.ausbildung ? 'selected' : ''}>nein</option><option value="1" ${profil.ausbildung ? 'selected' : ''}>ja</option></select></label>
          <label class="field"><span>Praktikum, FSJ oder BFD mit Kindern?</span>
            <select data-profil="praktikum"><option value="0" ${!profil.praktikum ? 'selected' : ''}>nein</option><option value="1" ${profil.praktikum ? 'selected' : ''}>ja</option></select></label>
        </div>
        <p class="muted" style="margin:10px 0 0">Die Einschätzung ist eine Orientierung aus den verlinkten Quellen. Ob es genau passt, entscheidet die Schule, am besten dort kurz nachfragen.</p>
      </section>

      ${profil.abschluss ? `
        ${groups.good.length ? `<h2>Passt direkt</h2><div class="grid grid-2" style="margin-bottom:16px">${groups.good.map((p) => card(p, profil)).join('')}</div>` : ''}
        ${groups.warn.length ? `<h2>Möglich mit Bedingung</h2><div class="grid grid-2" style="margin-bottom:16px">${groups.warn.map((p) => card(p, profil)).join('')}</div>` : ''}
        ${groups[''].length ? `<h2>Unklar</h2><div class="grid grid-2" style="margin-bottom:16px">${groups[''].map((p) => card(p, profil)).join('')}</div>` : ''}
        ${groups.bad.length ? `<h2>Später, über einen Zwischenschritt</h2><div class="grid grid-2">${groups.bad.map((p) => card(p, profil, true)).join('')}</div>` : ''}`
      : `<div class="grid grid-2">${pfade.map((p) => card(p, profil)).join('')}</div>`}`;
  }

  function handleChange(el) {
    if (!el.dataset.profil) return false;
    const k = el.dataset.profil;
    root.Store.update((s) => { s.profil[k] = k === 'abschluss' ? el.value : el.value === '1'; });
    return true;
  }

  function handleAction(action, el) {
    if (action !== 'planb-focus') return false;
    const title = (pfad(el.dataset.id) || {}).titel;
    const target = [...document.querySelectorAll('#view h3')].find((h) => h.textContent === title);
    if (target) {
      const c = target.closest('.card');
      c.scrollIntoView({ behavior: 'smooth', block: 'center' });
      c.style.outline = '2px solid var(--accent)';
      setTimeout(() => { c.style.outline = ''; }, 1500);
    }
    return true;
  }

  root.PlanB = { render, handleChange, handleAction, zugangFuer };
})(window);
