/* Karte der Ausbildungsstätten (Leaflet + OpenStreetMap), optional mit Kitas als Praxisstellen. */
(function (root) {
  'use strict';
  const { esc } = root.Util;

  let map = null;
  let pickMode = false;

  function data() { return root.AUSBILDUNG_DATA; }
  function K() { return root.KITA_DATA || { kitas: [] }; }

  function allBerufe() {
    const set = new Set();
    data().institutions.forEach((i) => (i.angebote || []).forEach((o) => set.add(o.beruf)));
    return [...set].sort();
  }

  function kitaValues(field) {
    const set = new Set();
    K().kitas.forEach((k) => [].concat(k[field] || []).forEach((v) => v && set.add(v)));
    return [...set].sort((a, b) => a.localeCompare(b, 'de'));
  }

  function visibleKitas(f) {
    return K().kitas.filter((k) =>
      (!f.traeger || k.traeger_gruppe === f.traeger) &&
      (!f.konzept || (k.konzept || []).includes(f.konzept)));
  }

  function getCss(name) { return getComputedStyle(document.documentElement).getPropertyValue(name).trim() || '#1f6f8b'; }

  function offerSummary(inst) {
    return [...new Set((inst.angebote || []).map((o) => `${o.beruf} (${root.Ranking.FORM_LABEL[o.form] || o.form})`))];
  }

  function popupHtml(inst) {
    const km = root.Util.distanceKm(root.Store.get().home || root.Ranking.KIEL_HBF, inst);
    return `
      <h3>${esc(inst.kurzname || inst.name)}</h3>
      <div class="muted">${esc(inst.ort || '')} · ${km.toFixed(1).replace('.', ',')} km</div>
      <ul class="popup-offers">${offerSummary(inst).map((t) => `<li>${esc(t)}</li>`).join('')}</ul>
      <div class="row">
        <button class="btn small primary" data-action="add-app" data-inst="${esc(inst.id)}">Merken</button>
        <button class="btn small" data-action="inst-detail" data-inst="${esc(inst.id)}">Details</button>
      </div>`;
  }

  function kitaPopup(k) {
    return `
      <h3>${esc(k.name)}</h3>
      <div class="muted">${esc([k.typ, k.traeger].filter(Boolean).join(' · '))}</div>
      ${k.adresse ? `<div class="muted">${esc(k.adresse)}</div>` : ''}
      <div class="row" style="margin-top:6px">
        <button class="btn small primary" data-action="add-kita" data-kita="${esc(k.id)}">Merken</button>
        ${k.website ? `<a class="btn small" href="${esc(k.website)}" target="_blank" rel="noopener">Website</a>` : ''}
      </div>`;
  }

  function destroy() {
    if (map) { map.remove(); map = null; }
    pickMode = false;
  }

  function options(values, selected, allLabel) {
    return `<option value="">${esc(allLabel)}</option>` +
      values.map((v) => `<option ${v === selected ? 'selected' : ''}>${esc(v)}</option>`).join('');
  }

  function render(view) {
    destroy();
    const st = root.Store.get();
    const insts = data().institutions.filter((i) => !st.beruf || (i.angebote || []).some((o) => o.beruf === st.beruf));
    const kf = st.kitas;
    const kitas = kf.an ? visibleKitas(kf) : [];

    view.innerHTML = `
      <div class="page-head"><h1>Karte</h1></div>
      <div class="toolbar">
        <select data-set="beruf" aria-label="Beruf">${options(allBerufe(), st.beruf, 'Alle Berufe')}</select>
        <label class="toggle"><input type="checkbox" data-set="kitas.an" ${kf.an ? 'checked' : ''}> Kitas zeigen</label>
        ${kf.an ? `
          <select data-set="kitas.traeger" aria-label="Träger">${options(kitaValues('traeger_gruppe'), kf.traeger, 'Alle Träger')}</select>
          <select data-set="kitas.konzept" aria-label="Konzept">${options(kitaValues('konzept'), kf.konzept, 'Alle Konzepte')}</select>` : ''}
        <span class="spacer"></span>
        <button class="btn small" data-action="home-open">${st.home ? '🏠 Wohnort ändern' : '🏠 Wohnort setzen'}</button>
      </div>
      <div class="toolbar" id="home-bar" hidden>
        <input id="home-query" placeholder="Deine Adresse" style="flex:1;min-width:180px">
        <button class="btn" data-action="home-search">Suchen</button>
        <button class="btn" data-action="home-pick">Auf Karte tippen</button>
      </div>
      <div class="muted hint" id="home-info"></div>
      <div id="map" role="region" aria-label="Karte"></div>
      <div class="legend">
        <span><span class="dot" style="background:var(--school)"></span>Schule</span>
        <span><span class="dot" style="background:var(--traeger)"></span>Träger</span>
        ${kf.an ? `<span><span class="dot" style="background:var(--kita)"></span>Kita (${kitas.length})</span>` : ''}
      </div>`;

    if (typeof L === 'undefined') {
      document.getElementById('map').innerHTML = '<div class="empty">Die Karte konnte nicht geladen werden.</div>';
      return;
    }

    map = L.map('map', { scrollWheelZoom: true, preferCanvas: true }).setView([54.32, 10.13], 10);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    const kitaColor = getCss('--kita');
    kitas.forEach((k) => {
      L.circleMarker([k.lat, k.lng], { radius: 5, weight: 1, color: '#fff', fillColor: kitaColor, fillOpacity: 0.85 })
        .bindPopup(() => kitaPopup(k), { maxWidth: 260 })
        .addTo(map);
    });

    const bounds = [];
    insts.forEach((inst) => {
      if (typeof inst.lat !== 'number') return;
      L.circleMarker([inst.lat, inst.lng], {
        radius: 9, weight: 2, color: '#fff', fillColor: getCss(inst.kategorie === 'traeger' ? '--traeger' : '--school'), fillOpacity: 0.95
      }).bindPopup(() => popupHtml(inst), { maxWidth: 280 }).addTo(map);
      bounds.push([inst.lat, inst.lng]);
    });

    if (st.home) {
      const icon = L.divIcon({ className: '', html: '<div style="font-size:24px;line-height:24px">🏠</div>', iconSize: [24, 24], iconAnchor: [12, 12] });
      L.marker([st.home.lat, st.home.lng], { icon, draggable: true }).addTo(map)
        .on('dragend', (e) => { const p = e.target.getLatLng(); setHome({ lat: p.lat, lng: p.lng }); });
      bounds.push([st.home.lat, st.home.lng]);
    }
    if (bounds.length > 1) map.fitBounds(bounds, { padding: [30, 30], maxZoom: 12 });

    map.on('click', (e) => {
      if (!pickMode) return;
      pickMode = false;
      setHome({ lat: e.latlng.lat, lng: e.latlng.lng });
    });
  }

  function setHome(home) {
    root.Store.update((s) => { s.home = home; });
    root.Util.toast('Wohnort gespeichert');
  }

  async function searchHome() {
    const q = (document.getElementById('home-query') || {}).value || '';
    if (!q.trim()) return;
    const info = document.getElementById('home-info');
    info.textContent = 'Suche …';
    try {
      const url = 'https://nominatim.openstreetmap.org/search?format=json&limit=1&countrycodes=de&q=' + encodeURIComponent(q);
      const hits = await (await fetch(url, { headers: { 'Accept-Language': 'de' } })).json();
      if (!hits.length) { info.textContent = 'Nicht gefunden. Tipp stattdessen auf die Karte.'; return; }
      setHome({ lat: Number(hits[0].lat), lng: Number(hits[0].lon) });
    } catch (e) {
      info.textContent = 'Suche geht gerade nicht. Tipp stattdessen auf die Karte.';
    }
  }

  function handleAction(action) {
    switch (action) {
      case 'home-open': {
        const bar = document.getElementById('home-bar');
        bar.hidden = !bar.hidden;
        if (!bar.hidden) document.getElementById('home-query').focus();
        return true;
      }
      case 'home-search': searchHome(); return true;
      case 'home-pick':
        pickMode = true;
        document.getElementById('home-info').textContent = 'Tipp jetzt auf die Karte, wo du wohnst.';
        return true;
    }
    return false;
  }

  function kitaById(id) { return K().kitas.find((k) => k.id === id) || null; }

  root.MapView = { render, destroy, handleAction, allBerufe, kitaById };
})(window);
