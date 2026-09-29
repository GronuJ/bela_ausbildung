/* Gehalts- und Kostenrechner: Wege zur Ausbildung finanziell vergleichen (grobe Netto-Schätzung). */
(function (root) {
  'use strict';
  const { esc, uid } = root.Util;

  const TYPEN = {
    brutto: 'Vergütung / Gehalt (brutto)',
    netto: 'Zuschuss / BAföG (netto)',
    ohne: 'Kein Einkommen'
  };

  function F() { return root.FINANZEN_DATA || { werte: [] }; }
  function wert(key) {
    const w = F().werte.find((x) => x.key === key);
    return w && typeof w.wert === 'number' ? w.wert : null;
  }
  function wertInfo(key) { return F().werte.find((x) => x.key === key) || null; }

  /* Einkommensteuer nach § 32a EStG, Tarif 2026 (Grundtabelle, Steuerklasse I, ohne Kirchensteuer/Soli). */
  function einkommensteuer(zvE) {
    const x = Math.floor(zvE);
    if (x <= 12348) return 0;
    if (x <= 17799) { const y = (x - 12348) / 10000; return Math.floor((914.51 * y + 1400) * y); }
    if (x <= 69878) { const z = (x - 17799) / 10000; return Math.floor((173.10 * z + 2397) * z + 1034.87); }
    if (x <= 277825) return Math.floor(0.42 * x - 11135.63);
    return Math.floor(0.45 * x - 19470.38);
  }

  // Grobes Monatsnetto aus Brutto: Sozialabgaben-Anteil + Lohnsteuer auf das Jahr gerechnet.
  function nettoAusBrutto(brutto, svProzent) {
    const sv = brutto * (svProzent / 100);
    const zvE = Math.max(0, brutto * 12 - sv * 12 - 1230 - 36); // Werbungskosten- und Sonderausgaben-Pauschale
    const steuer = einkommensteuer(zvE) / 12;
    return Math.max(0, brutto - sv - steuer);
  }

  function defaultSzenarien() {
    const n = (key) => wert(key) || 0;
    return [
      {
        id: uid(), name: 'PiA: Erzieher/in praxisintegriert',
        phasen: [
          { label: 'PiA 1. Jahr', monate: 12, typ: 'brutto', betrag: n('pia_j1'), kosten: 0 },
          { label: 'PiA 2. Jahr', monate: 12, typ: 'brutto', betrag: n('pia_j2'), kosten: 0 },
          { label: 'PiA 3. Jahr', monate: 12, typ: 'brutto', betrag: n('pia_j3'), kosten: 0 },
          { label: 'Job als Erzieher/in', monate: 999, typ: 'brutto', betrag: n('erzieher_start'), kosten: 0, job: true }
        ]
      },
      {
        id: uid(), name: 'SPA (Schule) + Erzieher/in Vollzeit',
        phasen: [
          { label: 'SPA, Schüler-BAföG (bei den Eltern)', monate: 24, typ: 'netto', betrag: n('schuelerbafoeg_eltern'), kosten: 0 },
          { label: 'Erzieher-Fachschule, Aufstiegs-BAföG', monate: 24, typ: 'netto', betrag: n('aufstiegsbafoeg_unterhalt_ohne_kv'), kosten: 0 },
          { label: 'Job als Erzieher/in', monate: 999, typ: 'brutto', betrag: n('erzieher_start'), kosten: 0, job: true }
        ]
      },
      {
        id: uid(), name: 'SPA-PiA + Erzieher/in Vollzeit',
        phasen: [
          { label: 'SPA-PiA 1. Jahr', monate: 12, typ: 'brutto', betrag: n('spa_pia_j1'), kosten: 0 },
          { label: 'SPA-PiA 2. Jahr', monate: 12, typ: 'brutto', betrag: n('spa_pia_j2'), kosten: 0 },
          { label: 'Erzieher-Fachschule, Aufstiegs-BAföG', monate: 24, typ: 'netto', betrag: n('aufstiegsbafoeg_unterhalt_ohne_kv'), kosten: 0 },
          { label: 'Job als Erzieher/in', monate: 999, typ: 'brutto', betrag: n('erzieher_start'), kosten: 0, job: true }
        ]
      },
      {
        id: uid(), name: 'SPA (Schule), dann direkt arbeiten',
        phasen: [
          { label: 'SPA, Schüler-BAföG (bei den Eltern)', monate: 24, typ: 'netto', betrag: n('schuelerbafoeg_eltern'), kosten: 0 },
          { label: 'Job als Sozialpäd. Assistent/in', monate: 999, typ: 'brutto', betrag: n('spa_start'), kosten: 0, job: true }
        ]
      }
    ];
  }

  function settings() {
    const st = root.Store.get();
    if (!st.rechner || !Array.isArray(st.rechner.szenarien)) {
      st.rechner = {
        jahre: 5,
        svProzent: wert('sv_anteil_prozent') || 21.15,
        kindergeld: false,
        szenarien: defaultSzenarien()
      };
      root.Store.save();
    }
    return st.rechner;
  }

  // Monatliche Netto-Reihe über den Zeitraum.
  function simulate(sz, cfg) {
    const total = cfg.jahre * 12;
    const months = [];
    let qualifiziertAb = null;
    const kg = cfg.kindergeld ? (wert('kindergeld') || 0) : 0;
    for (const p of sz.phasen) {
      const isJob = p.job === true || (p.job === undefined && /job|arbeiten|gehalt/i.test(p.label));
      if (isJob && qualifiziertAb === null) qualifiziertAb = months.length;
      const m = Math.max(0, Math.round(Number(p.monate) || 0));
      for (let i = 0; i < m && months.length < total; i++) {
        let net = 0;
        const betrag = Number(p.betrag) || 0;
        if (p.typ === 'brutto') net = nettoAusBrutto(betrag, cfg.svProzent);
        else if (p.typ === 'netto') net = betrag;
        if (!isJob) net += kg;
        months.push({ phase: p.label, net: net - (Number(p.kosten) || 0) });
      }
    }
    while (months.length < total) months.push({ phase: '–', net: 0 });
    const perYear = [];
    for (let y = 0; y < cfg.jahre; y++) perYear.push(months.slice(y * 12, y * 12 + 12).reduce((s, m) => s + m.net, 0));
    return { months, perYear, sum: perYear.reduce((a, b) => a + b, 0), qualifiziertAb };
  }

  const euro = (n) => Math.round(n).toLocaleString('de-DE') + ' €';

  function render(view) {
    const cfg = settings();
    const results = cfg.szenarien.map((sz) => ({ sz, r: simulate(sz, cfg) }));
    const max = Math.max(1, ...results.map((x) => x.r.sum));
    const start = 2027;

    view.innerHTML = `
      <div class="page-head"><div>
        <h1>Gehalts- und Kostenrechner</h1>
        <p>Was bleibt dir netto, wenn du ab August ${start} einen bestimmten Weg gehst? Alle Beträge sind anpassbar.</p>
      </div></div>

      <section class="card" style="margin-bottom:16px">
        <div class="form-grid">
          <label class="field"><span>Zeitraum</span>
            <select data-rechner="jahre">${[3, 4, 5, 6, 8].map((j) => `<option value="${j}" ${cfg.jahre === j ? 'selected' : ''}>${j} Jahre (bis ${start + j})</option>`).join('')}</select></label>
          <label class="field"><span>Sozialabgaben in % vom Brutto</span>
            <input type="number" min="0" max="40" step="0.1" data-rechner="svProzent" value="${cfg.svProzent}"></label>
          <label class="field"><span>Kindergeld während der Ausbildung</span>
            <select data-rechner="kindergeld">
              <option value="0" ${!cfg.kindergeld ? 'selected' : ''}>nicht einrechnen</option>
              <option value="1" ${cfg.kindergeld ? 'selected' : ''}>einrechnen (${wert('kindergeld') ? euro(wert('kindergeld')) : '?'} / Monat)</option>
            </select></label>
        </div>
      </section>

      <section class="card" style="margin-bottom:16px">
        <h2>Netto über ${cfg.jahre} Jahre</h2>
        <div role="img" aria-label="Netto-Summen je Weg" class="stack">
          ${results.map(({ sz, r }) => `
            <div>
              <div class="row"><b>${esc(sz.name)}</b><span class="spacer"></span><b>${euro(r.sum)}</b></div>
              <div class="bar" style="height:14px;margin-top:4px" title="${esc(sz.name)}: ${euro(r.sum)}"><div style="width:${Math.max(0, (r.sum / max) * 100)}%;border-radius:0 4px 4px 0"></div></div>
              <small class="muted">${r.qualifiziertAb !== null && r.qualifiziertAb < cfg.jahre * 12 ? `Fertig nach ${(r.qualifiziertAb / 12).toLocaleString('de-DE', { maximumFractionDigits: 1 })} Jahren` : 'Im Zeitraum noch in Ausbildung'} · im Schnitt ${euro(r.sum / (cfg.jahre * 12))} pro Monat</small>
            </div>`).join('')}
        </div>
        <div class="table-wrap" style="margin-top:14px">
          <table class="rank-table">
            <thead><tr><th>Weg</th>${Array.from({ length: cfg.jahre }, (_, y) => `<th>${y + 1}. Jahr</th>`).join('')}<th>Summe</th></tr></thead>
            <tbody>${results.map(({ sz, r }) => `<tr><td><b>${esc(sz.name)}</b></td>${r.perYear.map((v) => `<td>${euro(v)}</td>`).join('')}<td><b>${euro(r.sum)}</b></td></tr>`).join('')}</tbody>
          </table>
        </div>
      </section>

      <div class="grid grid-2">
        ${cfg.szenarien.map((sz, si) => `
          <section class="card">
            <div class="row"><input data-sz="${si}" data-field="name" value="${esc(sz.name)}" style="font-weight:700;flex:1">
              <button class="btn small danger" data-action="sz-del" data-sz="${si}" aria-label="Weg löschen">✕</button></div>
            <div class="table-wrap"><table class="rank-table" style="margin-top:8px">
              <thead><tr><th>Phase</th><th>Monate</th><th>Art</th><th>€ / Monat</th><th>Kosten / Monat</th><th></th></tr></thead>
              <tbody>${sz.phasen.map((p, pi) => `
                <tr>
                  <td><input data-sz="${si}" data-ph="${pi}" data-field="label" value="${esc(p.label)}"></td>
                  <td><input type="number" min="0" data-sz="${si}" data-ph="${pi}" data-field="monate" value="${p.monate >= 999 ? '' : p.monate}" placeholder="bis Ende" style="width:80px"></td>
                  <td><select data-sz="${si}" data-ph="${pi}" data-field="typ">${Object.entries(TYPEN).map(([k, l]) => `<option value="${k}" ${p.typ === k ? 'selected' : ''}>${l}</option>`).join('')}</select></td>
                  <td><input type="number" min="0" step="1" data-sz="${si}" data-ph="${pi}" data-field="betrag" value="${p.betrag}" style="width:100px"></td>
                  <td><input type="number" min="0" step="1" data-sz="${si}" data-ph="${pi}" data-field="kosten" value="${p.kosten}" style="width:90px"></td>
                  <td><button class="btn small danger" data-action="ph-del" data-sz="${si}" data-ph="${pi}" aria-label="Phase löschen">✕</button></td>
                </tr>`).join('')}</tbody></table></div>
            <button class="btn small" data-action="ph-add" data-sz="${si}" style="margin-top:8px">+ Phase</button>
          </section>`).join('')}
      </div>
      <div class="row" style="margin-top:12px">
        <button class="btn" data-action="sz-add">+ Weiteren Weg vergleichen</button>
        <button class="btn" data-action="sz-reset">Auf Standardwerte zurücksetzen</button>
      </div>

      <section class="card" style="margin-top:16px">
        <h2>Woher die Zahlen kommen</h2>
        <ul class="list">${F().werte.map((w) => `
          <li><span style="flex:1"><b>${esc(w.label)}</b>: ${typeof w.wert === 'number' ? esc(w.wert.toLocaleString('de-DE')) + ' ' + esc(w.einheit || '') : 'unbekannt'}
            ${w.gueltig_ab ? `<span class="muted">(gültig ab ${root.Util.formatDate(w.gueltig_ab)})</span>` : ''}
            ${w.hinweis ? `<br><small class="muted">${esc(w.hinweis)}</small>` : ''}</span>
            ${w.quelle ? `<a class="source" href="${esc(w.quelle)}" target="_blank" rel="noopener">Quelle</a>` : ''}</li>`).join('')}</ul>
        <p class="muted" style="margin-top:8px">Netto ist eine grobe Schätzung: Brutto minus Sozialabgaben-Anteil minus Lohnsteuer (Steuerklasse I, Tarif 2026, ohne Kirchensteuer). BAföG-Beträge hängen vom Einkommen der Eltern und deiner Wohnsituation ab, eine verbindliche Auskunft gibt das BAföG-Amt. Für eine Phase ohne Monatsangabe gilt „bis zum Ende des Zeitraums“.</p>
      </section>`;
  }

  function handleAction(action, el) {
    const si = Number(el.dataset.sz);
    switch (action) {
      case 'sz-add':
        root.Store.update((s) => { s.rechner.szenarien.push({ id: uid(), name: 'Mein Weg', phasen: [{ label: 'Ausbildung', monate: 36, typ: 'brutto', betrag: 0, kosten: 0 }, { label: 'Job', monate: 999, typ: 'brutto', betrag: wert('erzieher_start') || 0, kosten: 0, job: true }] }); });
        return true;
      case 'sz-del':
        if (!confirm('Diesen Weg entfernen?')) return true;
        root.Store.update((s) => { s.rechner.szenarien.splice(si, 1); });
        return true;
      case 'sz-reset':
        if (!confirm('Alle Wege auf die Standardwerte zurücksetzen?')) return true;
        root.Store.update((s) => { s.rechner = null; });
        return true;
      case 'ph-add':
        root.Store.update((s) => { s.rechner.szenarien[si].phasen.push({ label: 'Neue Phase', monate: 12, typ: 'netto', betrag: 0, kosten: 0 }); });
        return true;
      case 'ph-del':
        root.Store.update((s) => { s.rechner.szenarien[si].phasen.splice(Number(el.dataset.ph), 1); });
        return true;
    }
    return false;
  }

  // Eingaben erst beim Verlassen des Felds übernehmen, damit der Fokus beim Tippen bleibt.
  function handleChange(el) {
    if (el.dataset.rechner) {
      const k = el.dataset.rechner;
      root.Store.update((s) => {
        if (k === 'jahre') s.rechner.jahre = Number(el.value);
        if (k === 'svProzent') s.rechner.svProzent = Math.max(0, Math.min(40, Number(el.value) || 0));
        if (k === 'kindergeld') s.rechner.kindergeld = el.value === '1';
      });
      return true;
    }
    if (el.dataset.sz !== undefined && el.dataset.field) {
      const si = Number(el.dataset.sz);
      const f = el.dataset.field;
      root.Store.update((s) => {
        const sz = s.rechner.szenarien[si];
        if (!sz) return;
        if (el.dataset.ph === undefined) { sz[f] = el.value; return; }
        const p = sz.phasen[Number(el.dataset.ph)];
        if (f === 'monate') p.monate = el.value === '' ? 999 : Math.max(0, Number(el.value));
        else if (f === 'betrag' || f === 'kosten') p[f] = Math.max(0, Number(el.value) || 0);
        else p[f] = el.value;
      });
      return true;
    }
    return false;
  }

  root.Rechner = { render, handleAction, handleChange, simulate, nettoAusBrutto, einkommensteuer, defaultSzenarien };
})(window);
