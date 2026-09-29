/* Karte der Ausbildungsstätten (Leaflet + OpenStreetMap). */
(function (root) {
  'use strict';
  const { esc } = root.Util;

  let map = null;
  let homeMarker = null;
  let markers = {};
  let pickMode = false;

  function data() { return root.AUSBILDUNG_DATA; }

  function allBerufe() {
    const set = new Set();
    data().institutions.forEach((i) => (i.angebote || []).forEach((o) => set.add(o.beruf)));
    return [...set].sort();
  }

  function visibleInstitutions(filters) {
    return data().institutions.filter((inst) => {
      if (filters.kategorie !== 'alle' && inst.kategorie !== filters.kategorie) return false;
      const offers = inst.angebote || [];
      if (!offers.length) return !filters.berufe.length && !filters.formen.length;
      return offers.some((o) =>
        (!filters.berufe.length || filters.berufe.includes(o.beruf)) &&
        (!filters.formen.length || filters.formen.includes(o.form)));
    });
  }

  /* ---------- Kita-Praxisstellen-Layer ---------- */
  function K() { return root.KITA_DATA || { kitas: [] }; }
  function kitaValues(field) {
    const set = new Set();
    K().kitas.forEach((k) => [].concat(k[field] || []).forEach((v) => v && set.add(v)));
    return [...set].sort((a, b) => a.localeCompare(b, 'de'));
  }
  function visibleKitas(kl) {
    return K().kitas.filter((k) =>
      (!kl.traeger.length || kl.traeger.includes(k.traeger_gruppe)) &&
      (!kl.typ.length || kl.typ.includes(k.typ)) &&
      (!kl.konzept.length || (k.konzept || []).some((c) => kl.konzept.includes(c))));
  }
  function kitaPopup(k) {
    return `
      <h3>${esc(k.name)}</h3>
      <div class="row" style="margin:4px 0">
        <span class="chip traeger">${esc(k.typ || 'Kita')}</span>
        ${(k.konzept || []).map((c) => `<span class="chip accent">${esc(c)}</span>`).join(' ')}
      </div>
      ${k.traeger ? `<div><b>Träger:</b> ${esc(k.traeger)}</div>` : ''}
      ${k.adresse ? `<div class="muted">${esc(k.adresse)}</div>` : ''}
      ${k.website ? `<div><a href="${esc(k.website)}" target="_blank" rel="noopener">Website</a></div>` : ''}
      <div class="row" style="margin-top:6px">
        <button class="btn small primary" data-action="add-kita" data-kita="${esc(k.id)}">Als Praxisstelle merken</button>
      </div>`;
  }

  function color(inst) {
    return inst.kategorie === 'traeger' ? getCss('--traeger') : getCss('--school');
  }
  function getCss(name) { return getComputedStyle(document.documentElement).getPropertyValue(name).trim() || '#1f6f8b'; }

  function offerLine(o) {
    const bits = [root.Ranking.FORM_LABEL[o.form] || o.form];
    if (o.dauer_jahre) bits.push(`${o.dauer_jahre} J.`);
    return `<b>${esc(o.beruf)}</b> · ${esc(bits.join(', '))}`;
  }

  function popupHtml(inst, home) {
    const km = root.Util.distanceKm(home || root.Ranking.KIEL_HBF, inst);
    return `
      <h3>${esc(inst.kurzname || inst.name)}</h3>
      <div class="muted">${esc(inst.adresse || '')}</div>
      <div class="muted">${km.toFixed(1)} km Luftlinie von ${home ? 'deinem Wohnort' : 'Kiel Hbf'}</div>
      ${(inst.angebote || []).length ? `<ul class="popup-offers">${inst.angebote.map((o) => `<li>${offerLine(o)}</li>`).join('')}</ul>` : ''}
      <div class="row">
        <button class="btn small" data-action="inst-detail" data-inst="${esc(inst.id)}">Details</button>
        <button class="btn small primary" data-action="add-app" data-inst="${esc(inst.id)}">Auf meine Liste</button>
      </div>`;
  }

  function destroy() {
    if (map) { map.remove(); map = null; }
    markers = {};
    homeMarker = null;
    pickMode = false;
  }

  function checkboxGroup(name, values, selected, labelFn) {
    return values.map((v) => `
      <label class="chip ${selected.includes(v) ? 'accent' : ''}" style="cursor:pointer">
        <input type="checkbox" data-filter="${name}" value="${esc(v)}" ${selected.includes(v) ? 'checked' : ''} hidden>
        ${esc(labelFn ? labelFn(v) : v)}
      </label>`).join(' ');
  }

  function render(view) {
    destroy();
    const st = root.Store.get();
    const f = st.filters;
    const insts = visibleInstitutions(f);
    const home = st.home;
    const kl = st.kitaLayer;
    const kitas = kl.an ? visibleKitas(kl) : [];
    const origin = home || root.Ranking.KIEL_HBF;
    const sorted = insts.slice().sort((a, b) => root.Util.distanceKm(origin, a) - root.Util.distanceKm(origin, b));

    view.innerHTML = `
      <div class="page-head">
        <div>
          <h1>Karte der Ausbildungsstätten</h1>
          <p>${data().institutions.length} Schulen und Träger in und um Kiel. Klick auf einen Punkt für Details.</p>
        </div>
      </div>
      <div class="card stack" style="margin-bottom:16px">
        <div class="row"><b style="min-width:90px">Beruf</b> ${checkboxGroup('berufe', allBerufe(), f.berufe)}</div>
        <div class="row"><b style="min-width:90px">Form</b> ${checkboxGroup('formen', Object.keys(root.Ranking.FORM_LABEL), f.formen, (k) => root.Ranking.FORM_LABEL[k])}</div>
        <div class="row"><b style="min-width:90px">Art</b>
          <select data-filter="kategorie" style="width:auto">
            <option value="alle" ${f.kategorie === 'alle' ? 'selected' : ''}>Schulen und Träger</option>
            <option value="schule" ${f.kategorie === 'schule' ? 'selected' : ''}>Nur Schulen</option>
            <option value="traeger" ${f.kategorie === 'traeger' ? 'selected' : ''}>Nur Kita-Träger (Praxisstellen)</option>
          </select>
          <span class="spacer"></span>
          <span class="legend"><span><span class="dot" style="background:var(--school)"></span>Schule</span><span><span class="dot" style="background:var(--traeger)"></span>Träger / Praxisstelle</span>${kl.an ? '<span><span class="dot" style="background:var(--kita);width:7px;height:7px"></span>Kita</span>' : ''}<span>🏠 Wohnort</span></span>
        </div>
        ${K().kitas.length ? `
        <div class="row">
          <b style="min-width:90px">Kitas</b>
          <label class="row" style="gap:6px"><input type="checkbox" data-kita-toggle ${kl.an ? 'checked' : ''}> ${K().kitas.length} Kitas, Horte &amp; Co. als mögliche Praxisstellen zeigen</label>
        </div>
        ${kl.an ? `
        <div class="row"><b style="min-width:90px">Träger</b> ${checkboxGroup('kita-traeger', kitaValues('traeger_gruppe'), kl.traeger)}</div>
        <div class="row"><b style="min-width:90px">Einrichtung</b> ${checkboxGroup('kita-typ', kitaValues('typ'), kl.typ)}</div>
        ${kitaValues('konzept').length ? `<div class="row"><b style="min-width:90px">Konzept</b> ${checkboxGroup('kita-konzept', kitaValues('konzept'), kl.konzept)}</div>` : ''}
        <div class="muted">${kitas.length} Kitas passen. Kleine Punkte auf der Karte.${K().quelle ? ` Quelle: <a href="${esc(K().quelle)}" target="_blank" rel="noopener">Datensatz</a>${K().lizenz ? ' (' + esc(K().lizenz) + ')' : ''}` : ''}</div>` : ''}` : ''}
        <div class="row">
          <b style="min-width:90px">Wohnort</b>
          <input id="home-query" placeholder="Adresse, z. B. Holtenauer Str. 1, Kiel" style="flex:1;min-width:200px" value="">
          <button class="btn" data-action="home-search">Suchen</button>
          <button class="btn" data-action="home-pick">Auf Karte wählen</button>
          ${home ? `<button class="btn small danger" data-action="home-clear">Entfernen</button>` : ''}
        </div>
        <div class="muted" id="home-info">${home ? `Wohnort: ${esc(home.label || 'gesetzt')}. Entfernungen sind Luftlinie.` : 'Noch kein Wohnort gesetzt, Entfernungen zählen ab Kiel Hbf.'}</div>
      </div>
      <div class="map-layout">
        <div id="map" role="region" aria-label="Karte"></div>
        <div class="card map-side">
          <h2>${insts.length} Treffer</h2>
          ${sorted.map((inst) => `
            <div class="inst-item" data-action="focus-inst" data-inst="${esc(inst.id)}">
              <h3>${esc(inst.kurzname || inst.name)}</h3>
              <div class="row">
                <span class="chip ${inst.kategorie === 'traeger' ? 'traeger' : 'school'}">${inst.kategorie === 'traeger' ? 'Träger' : 'Schule'}</span>
                <span class="muted">${esc(inst.ort || '')} · ${root.Util.distanceKm(origin, inst).toFixed(1)} km</span>
              </div>
              <div class="muted" style="font-size:.85rem;margin-top:4px">${[...new Set((inst.angebote || []).map((o) => o.beruf + ' (' + (o.form === 'pia' ? 'PiA' : o.form) + ')'))].map(esc).join(', ')}</div>
            </div>`).join('') || '<div class="empty">Keine Treffer mit diesen Filtern.</div>'}
        </div>
      </div>`;

    if (typeof L === 'undefined') {
      document.getElementById('map').innerHTML = '<div class="empty">Die Karte konnte nicht geladen werden.</div>';
      return;
    }

    map = L.map('map', { scrollWheelZoom: true, preferCanvas: true }).setView([54.32, 10.13], 10);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>-Mitwirkende'
    }).addTo(map);

    const kitaColor = getCss('--kita');
    kitas.forEach((k) => {
      if (typeof k.lat !== 'number') return;
      L.circleMarker([k.lat, k.lng], { radius: 5, weight: 1, color: '#fff', fillColor: kitaColor, fillOpacity: 0.85 })
        .bindPopup(() => kitaPopup(k), { maxWidth: 280 })
        .bindTooltip(esc(k.name))
        .addTo(map);
    });

    const bounds = [];
    insts.forEach((inst) => {
      if (typeof inst.lat !== 'number') return;
      const m = L.circleMarker([inst.lat, inst.lng], {
        radius: 9, weight: 2, color: '#fff', fillColor: color(inst), fillOpacity: 0.95
      }).addTo(map);
      m.bindPopup(() => popupHtml(inst, root.Store.get().home), { maxWidth: 300 });
      m.bindTooltip(esc(inst.kurzname || inst.name));
      markers[inst.id] = m;
      bounds.push([inst.lat, inst.lng]);
    });

    if (home) {
      addHomeMarker(home);
      bounds.push([home.lat, home.lng]);
    }
    if (bounds.length > 1) map.fitBounds(bounds, { padding: [30, 30], maxZoom: 13 });

    map.on('click', (e) => {
      if (!pickMode) return;
      pickMode = false;
      document.getElementById('map').style.cursor = '';
      setHome({ lat: e.latlng.lat, lng: e.latlng.lng, label: 'auf der Karte gewählt' });
    });
  }

  function addHomeMarker(home) {
    const icon = L.divIcon({ className: '', html: '<div style="font-size:26px;line-height:26px">🏠</div>', iconSize: [26, 26], iconAnchor: [13, 13] });
    homeMarker = L.marker([home.lat, home.lng], { icon, draggable: true, title: 'Wohnort (verschiebbar)' }).addTo(map);
    homeMarker.on('dragend', () => {
      const p = homeMarker.getLatLng();
      setHome({ lat: p.lat, lng: p.lng, label: 'auf der Karte gewählt' });
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
      const res = await fetch(url, { headers: { 'Accept-Language': 'de' } });
      const hits = await res.json();
      if (!hits.length) { info.textContent = 'Adresse nicht gefunden. Versuch es genauer oder wähle den Ort auf der Karte.'; return; }
      setHome({ lat: Number(hits[0].lat), lng: Number(hits[0].lon), label: hits[0].display_name.split(',').slice(0, 3).join(',') });
    } catch (e) {
      info.textContent = 'Suche fehlgeschlagen (keine Internetverbindung?). Wähle den Ort direkt auf der Karte.';
    }
  }

  function handleAction(action, el) {
    switch (action) {
      case 'home-search': searchHome(); return true;
      case 'home-pick':
        pickMode = true;
        document.getElementById('map').style.cursor = 'crosshair';
        document.getElementById('home-info').textContent = 'Klick jetzt auf die Karte, wo du wohnst.';
        return true;
      case 'home-clear': root.Store.update((s) => { s.home = null; }); return true;
      case 'focus-inst': {
        const m = markers[el.dataset.inst];
        if (m && map) {
          map.setView(m.getLatLng(), Math.max(map.getZoom(), 13));
          m.openPopup();
          document.getElementById('map').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
        return true;
      }
    }
    return false;
  }

  function handleFilterChange(el) {
    const name = el.dataset.filter;
    if (name.startsWith('kita-')) {
      const key = name.slice(5);
      root.Store.update((s) => {
        const list = new Set(s.kitaLayer[key]);
        if (el.checked) list.add(el.value); else list.delete(el.value);
        s.kitaLayer[key] = [...list];
      });
      return;
    }
    root.Store.update((s) => {
      if (name === 'kategorie') s.filters.kategorie = el.value;
      else {
        const list = new Set(s.filters[name]);
        if (el.checked) list.add(el.value); else list.delete(el.value);
        s.filters[name] = [...list];
      }
    });
  }

  function handleChange(el) {
    if (!el.hasAttribute('data-kita-toggle')) return false;
    root.Store.update((s) => { s.kitaLayer.an = el.checked; });
    return true;
  }

  function kitaById(id) { return K().kitas.find((k) => k.id === id) || null; }

  root.MapView = { render, destroy, handleAction, handleFilterChange, handleChange, allBerufe, kitaById };
})(window);
