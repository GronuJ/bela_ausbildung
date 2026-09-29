/* Service Worker: App offline nutzbar machen. Eigene Dateien: erst Cache, im Hintergrund aktualisieren.
 * Kartenkacheln: aus dem Cache, wenn schon einmal geladen (begrenzte Anzahl). */
const VERSION = 'v1';
const APP_CACHE = 'app-' + VERSION;
const TILE_CACHE = 'tiles-' + VERSION;
const MAX_TILES = 1500;

const APP_FILES = [
  './', './index.html', './manifest.webmanifest', './css/style.css',
  './vendor/leaflet/leaflet.css', './vendor/leaflet/leaflet.js',
  './data/ausbildungsstaetten.js', './data/kitas.js', './data/finanzen.js', './data/planb.js',
  './js/util.js', './js/ranking.js', './js/store.js', './js/map.js', './js/tracker.js',
  './js/pages.js', './js/rechner.js', './js/planb.js', './js/app.js',
  './icons/icon.svg', './icons/icon-192.png'
];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(APP_CACHE).then((c) => c.addAll(APP_FILES)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', (e) => {
  e.waitUntil(caches.keys().then((keys) => Promise.all(
    keys.filter((k) => k !== APP_CACHE && k !== TILE_CACHE).map((k) => caches.delete(k))
  )).then(() => self.clients.claim()));
});

async function trimTiles() {
  const cache = await caches.open(TILE_CACHE);
  const keys = await cache.keys();
  for (let i = 0; i < keys.length - MAX_TILES; i++) await cache.delete(keys[i]);
}

self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);

  if (url.hostname.endsWith('tile.openstreetmap.org')) {
    e.respondWith(caches.open(TILE_CACHE).then(async (cache) => {
      const hit = await cache.match(req);
      if (hit) return hit;
      const res = await fetch(req);
      if (res.ok || res.type === 'opaque') { cache.put(req, res.clone()); trimTiles(); }
      return res;
    }));
    return;
  }

  if (url.origin !== self.location.origin) return;
  e.respondWith(caches.open(APP_CACHE).then(async (cache) => {
    const hit = await cache.match(req, { ignoreSearch: true });
    const net = fetch(req).then((res) => { if (res.ok) cache.put(req, res.clone()); return res; }).catch(() => hit);
    return hit || net;
  }));
});
