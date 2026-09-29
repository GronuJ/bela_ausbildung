/* Kleine Helfer, die überall gebraucht werden. */
(function (root) {
  'use strict';

  const ESC = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' };
  function esc(value) {
    if (value === null || value === undefined) return '';
    return String(value).replace(/[&<>"']/g, (c) => ESC[c]);
  }

  function uid() {
    return Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
  }

  // Luftlinie in km zwischen zwei Punkten.
  function distanceKm(a, b) {
    const R = 6371;
    const toRad = (d) => (d * Math.PI) / 180;
    const dLat = toRad(b.lat - a.lat);
    const dLng = toRad(b.lng - a.lng);
    const h = Math.sin(dLat / 2) ** 2 +
      Math.cos(toRad(a.lat)) * Math.cos(toRad(b.lat)) * Math.sin(dLng / 2) ** 2;
    return 2 * R * Math.asin(Math.sqrt(h));
  }

  function todayIso() {
    const d = new Date();
    return new Date(d.getTime() - d.getTimezoneOffset() * 60000).toISOString().slice(0, 10);
  }

  function parseIso(iso) {
    if (!iso) return null;
    const [y, m, d] = iso.split('-').map(Number);
    if (!y || !m || !d) return null;
    return new Date(y, m - 1, d);
  }

  function formatDate(iso) {
    const d = parseIso(iso);
    if (!d) return '';
    return d.toLocaleDateString('de-DE', { day: '2-digit', month: '2-digit', year: 'numeric' });
  }

  // Tage von heute bis zum Datum (negativ = vorbei).
  function daysUntil(iso) {
    const d = parseIso(iso);
    if (!d) return null;
    const t = parseIso(todayIso());
    return Math.round((d - t) / 86400000);
  }

  function relativeDays(iso) {
    const n = daysUntil(iso);
    if (n === null) return '';
    if (n === 0) return 'heute';
    if (n === 1) return 'morgen';
    if (n === -1) return 'gestern';
    if (n > 0) return `in ${n} Tagen`;
    return `vor ${-n} Tagen`;
  }

  function dueClass(iso) {
    const n = daysUntil(iso);
    if (n === null) return '';
    if (n < 0) return 'overdue';
    if (n <= 14) return 'soon';
    return '';
  }

  function stars(n) {
    n = Math.max(0, Math.min(5, Math.round(n || 0)));
    return '★'.repeat(n) + '☆'.repeat(5 - n);
  }

  function download(filename, content, type) {
    const blob = new Blob([content], { type: type || 'application/octet-stream' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }

  // Kalenderdatei (.ics) mit ganztägigen Terminen.
  function buildIcs(events) {
    const pad = (s) => s.replace(/-/g, '');
    const escIcs = (s) => String(s || '').replace(/[\\;,]/g, (c) => '\\' + c).replace(/\n/g, '\\n');
    const stamp = new Date().toISOString().replace(/[-:]/g, '').replace(/\.\d+/, '');
    const lines = ['BEGIN:VCALENDAR', 'VERSION:2.0', 'PRODID:-//Ausbildungsplaner Kiel//DE', 'CALSCALE:GREGORIAN'];
    for (const ev of events) {
      const start = parseIso(ev.date);
      if (!start) continue;
      const end = new Date(start.getTime() + 86400000);
      const endIso = `${end.getFullYear()}${String(end.getMonth() + 1).padStart(2, '0')}${String(end.getDate()).padStart(2, '0')}`;
      lines.push(
        'BEGIN:VEVENT',
        `UID:${ev.uid}@ausbildungsplaner-kiel`,
        `DTSTAMP:${stamp}`,
        `DTSTART;VALUE=DATE:${pad(ev.date)}`,
        `DTEND;VALUE=DATE:${endIso}`,
        `SUMMARY:${escIcs(ev.title)}`,
        ev.description ? `DESCRIPTION:${escIcs(ev.description)}` : null,
        'END:VEVENT'
      );
    }
    lines.push('END:VCALENDAR');
    return lines.filter(Boolean).join('\r\n');
  }

  let toastTimer = null;
  function toast(msg) {
    const el = document.getElementById('toast');
    if (!el) return;
    el.textContent = msg;
    el.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => el.classList.remove('show'), 2200);
  }

  const Util = { esc, uid, distanceKm, todayIso, parseIso, formatDate, daysUntil, relativeDays, dueClass, stars, download, buildIcs, toast };
  root.Util = Util;
  if (typeof module !== 'undefined' && module.exports) module.exports = Util;
})(typeof window !== 'undefined' ? window : globalThis);
