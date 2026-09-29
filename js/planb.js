/* Plan B: Welche Wege stehen mit deinem Schulabschluss offen? */
(function (root) {
  'use strict';
  const { esc } = root.Util;

  function P() { return root.PLANB_DATA || { abschluesse: [], pfade: [] }; }

  // "ja" -> offen, "nein" -> zu, "unklar" -> unklar, alles andere -> mit Bedingung.
  function zugangFuer(p, profil) {
    if (!profil.abschluss) return { ton: '', label: '', text: '' };
    const t = ((p.zugang && p.zugang[profil.abschluss]) || '').trim();
    const lower = t.toLowerCase();
    let ton = 'warn', label = 'mit Bedingung';
    if (!t || /^unklar\b/.test(lower)) { ton = ''; label = 'unklar'; }
    else if (/^ja\b/.test(lower)) { ton = 'good'; label = 'passt'; }
    else if (/^nein\b/.test(lower)) { ton = 'bad'; label = 'noch nicht'; }
    return { ton, label, text: t.replace(/^(ja|nein|mit Bedingung|unklar)\b\s*[:,.–-]?\s*/i, '') };
  }

  // Nur den ersten Teil der Bedingung zeigen, der Rest steht im Tooltip.
  function kurz(t) {
    const first = t.split(/;|\s–\s|\(b\)/)[0].trim();
    return first.length > 90 ? first.slice(0, 88).trim() + ' …' : first;
  }

  function item(p, profil) {
    const z = zugangFuer(p, profil);
    const meta = [p.dauer, p.verguetet === true ? 'bezahlt' : null].filter(Boolean).join(' · ');
    return `
      <li>
        <span style="flex:1"><b>${esc(p.titel)}</b>
          ${meta ? `<br><small class="muted">${esc(meta)}</small>` : ''}
          ${z.text && z.ton !== 'good' ? `<br><small title="${esc(z.text)}">${esc(kurz(z.text))}</small>` : ''}</span>
        ${z.label ? `<span class="chip ${z.ton}">${esc(z.label)}</span>` : ''}
      </li>`;
  }

  function render(view) {
    const profil = root.Store.get().profil;
    const pfade = P().pfade;
    const groups = { good: [], warn: [], '': [], bad: [] };
    pfade.forEach((p) => groups[zugangFuer(p, profil).ton].push(p));

    view.innerHTML = `
      <div class="page-head"><h1>Plan B</h1></div>
      <section class="card">
        <label class="field"><span>Dein Schulabschluss</span>
          <select data-set="profil.abschluss">
            <option value="">bitte wählen</option>
            ${P().abschluesse.map((a) => `<option value="${esc(a.key)}" ${profil.abschluss === a.key ? 'selected' : ''}>${esc(a.label)}</option>`).join('')}
          </select></label>
      </section>
      ${!profil.abschluss ? '<p class="muted">Wähl deinen Abschluss, dann siehst du, welche Wege direkt offen sind.</p>' : `
        ${groups.good.length ? `<section class="card"><h2>Geht direkt</h2><ul class="list">${groups.good.map((p) => item(p, profil)).join('')}</ul></section>` : ''}
        ${groups.warn.length || groups[''].length ? `<section class="card"><h2>Geht mit Bedingung</h2><ul class="list">${groups.warn.concat(groups['']).map((p) => item(p, profil)).join('')}</ul></section>` : ''}
        ${groups.bad.length ? `<details class="card"><summary><b>Geht noch nicht (${groups.bad.length})</b></summary><ul class="list">${groups.bad.map((p) => item(p, profil)).join('')}</ul></details>` : ''}
        <p class="muted source">Orientierung laut Beratungsstelle und Schulen (Stand ${root.Util.formatDate(P().stand)}). Im Zweifel bei der Schule nachfragen.</p>`}`;
  }

  root.PlanB = { render, zugangFuer };
})(window);
