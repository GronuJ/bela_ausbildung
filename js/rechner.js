/* Gehalts- und Kostenrechner: Wege zur Ausbildung finanziell vergleichen (grobe Netto-Schätzung). */
(function (root) {
  'use strict';
  const { esc, uid } = root.Util;

  function F() { return root.FINANZEN_DATA || { werte: [] }; }
  function wert(key) {
    const w = F().werte.find((x) => x.key === key);
    return w && typeof w.wert === 'number' ? w.wert : null;
  }

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
        id: uid(), name: 'Erzieher/in mit PiA (bezahlt)',
        phasen: [
          { label: 'PiA 1. Jahr', monate: 12, typ: 'brutto', betrag: n('pia_j1'), kosten: 0 },
          { label: 'PiA 2. Jahr', monate: 12, typ: 'brutto', betrag: n('pia_j2'), kosten: 0 },
          { label: 'PiA 3. Jahr', monate: 12, typ: 'brutto', betrag: n('pia_j3'), kosten: 0 },
          { label: 'Job als Erzieher/in', monate: 999, typ: 'brutto', betrag: n('erzieher_start'), kosten: 0, job: true }
        ]
      },
      {
        id: uid(), name: 'SPA + Erzieher-Schule (BAföG)',
        phasen: [
          { label: 'SPA, Schüler-BAföG (bei den Eltern)', monate: 24, typ: 'netto', betrag: n('schuelerbafoeg_eltern'), kosten: 0 },
          { label: 'Erzieher-Fachschule, Aufstiegs-BAföG', monate: 24, typ: 'netto', betrag: n('aufstiegsbafoeg_unterhalt_ohne_kv'), kosten: 0 },
          { label: 'Job als Erzieher/in', monate: 999, typ: 'brutto', betrag: n('erzieher_start'), kosten: 0, job: true }
        ]
      },
      {
        id: uid(), name: 'Nur SPA, dann arbeiten',
        phasen: [
          { label: 'SPA, Schüler-BAföG (bei den Eltern)', monate: 24, typ: 'netto', betrag: n('schuelerbafoeg_eltern'), kosten: 0 },
          { label: 'Job als Sozialpäd. Assistent/in', monate: 999, typ: 'brutto', betrag: n('spa_start'), kosten: 0, job: true }
        ]
      }
    ];
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

  // Durchschnittliches Netto pro Monat in der Ausbildung und danach.
  function monthly(sz, cfg) {
    const job = sz.phasen.find((p) => p.job);
    const lern = sz.phasen.filter((p) => !p.job);
    const lernMonate = lern.reduce((a, p) => a + p.monate, 0);
    const lernNetto = lern.reduce((a, p) => a + p.monate * (p.typ === 'brutto' ? nettoAusBrutto(p.betrag, cfg.svProzent) : p.betrag), 0);
    return { lern: lernMonate ? lernNetto / lernMonate : 0, job: job ? nettoAusBrutto(job.betrag, cfg.svProzent) : 0, jahre: lernMonate / 12 };
  }

  function render(view) {
    const st = root.Store.get();
    const cfg = { jahre: st.geldJahre || 5, svProzent: wert('sv_anteil_prozent') || 21.15, kindergeld: false };
    const results = defaultSzenarien().map((sz) => ({ sz, r: simulate(sz, cfg), m: monthly(sz, cfg) }));
    const max = Math.max(1, ...results.map((x) => x.r.sum));

    view.innerHTML = `
      <div class="page-head"><h1>Geld</h1><span class="spacer"></span>
        <select data-set="geldJahre" aria-label="Zeitraum" style="width:auto">
          ${[3, 5, 8].map((j) => `<option value="${j}" ${cfg.jahre === j ? 'selected' : ''}>nach ${j} Jahren</option>`).join('')}
        </select>
      </div>
      <p class="muted">So viel hast du ungefähr netto verdient, wenn du im August 2027 startest.</p>
      <section class="card stack">
        ${results.map(({ sz, r, m }) => `
          <div>
            <div class="row"><b style="flex:1">${esc(sz.name)}</b><b>${euro(r.sum)}</b></div>
            <div class="bar big"><div style="width:${(r.sum / max) * 100}%"></div></div>
            <small class="muted">${m.jahre.toLocaleString('de-DE')} Jahre Ausbildung mit ca. ${euro(m.lern)} im Monat, danach ca. ${euro(m.job)}</small>
          </div>`).join('')}
      </section>
      <details class="muted source" style="margin-top:12px">
        <summary>Woher die Zahlen kommen</summary>
        <p>Grobe Schätzung: Steuerklasse I, ohne Kirchensteuer, Sozialabgaben ${String(cfg.svProzent).replace('.', ',')} %. BAföG hängt von deiner Situation ab, genau sagt es das BAföG-Amt.</p>
        <ul>${F().werte.filter((w) => ['pia_j1', 'erzieher_start', 'spa_start', 'schuelerbafoeg_eltern', 'aufstiegsbafoeg_unterhalt_ohne_kv', 'spa_pia_j1'].includes(w.key)).map((w) => `
          <li>${esc(w.label)}: ${typeof w.wert === 'number' ? esc(w.wert.toLocaleString('de-DE')) + ' €' : '?'}${w.quelle ? ` (<a href="${esc(w.quelle)}" target="_blank" rel="noopener">Quelle</a>)` : ''}</li>`).join('')}</ul>
      </details>`;
  }

  root.Rechner = { render, simulate, monthly, nettoAusBrutto, einkommensteuer, defaultSzenarien };
})(window);
