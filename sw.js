/*
  RaceNotes service worker — makes the app open offline.
  VERSION HISTORY (newest first)
  v1.2.0  2026-10-22  Cache bump; background photo added to the offline set.
  v1.1.0  2026-10-22  Cache bump for the entry list change.
  v1.0.0  2026-10-21  First build: app shell, logos and icons cached on install;
                      PDF and ZIP libraries cached right after; fonts cached
                      the first time they're used.
  Bump CACHE when shipping a new version so phones pick up the update.
*/
const CACHE = "racenotes-v1.2.0";
const SHELL = ["./", "index.html", "manifest.webmanifest",
  "icons/icon-192.png", "icons/icon-512.png", "icons/apple-touch-icon.png", "icons/favicon-32.png",
  "brand/logo-horizontal.svg", "brand/logo-horizontal-white.svg", "brand/symbol.svg", "brand/track-bg.jpg"];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL)).then(() => self.skipWaiting()));
});
// Export libraries download in the background after install, so exports work with no signal.
const VENDOR = ["vendor/jspdf/jspdf.umd.min.js", "vendor/jszip/jszip.min.js"];

self.addEventListener("activate", e => {
  caches.open(CACHE).then(c => Promise.all(VENDOR.map(u => c.match(u).then(hit => hit || c.add(u))))).catch(() => {});
  e.waitUntil(caches.keys().then(keys => Promise.all(
    keys.filter(k => k.startsWith("racenotes-") && k !== CACHE).map(k => caches.delete(k))
  )).then(() => self.clients.claim()));
});
self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  if (url.origin === location.origin) {
    // app files: network first so updates arrive, cache when offline
    e.respondWith(fetch(req).then(res => {
      if (res.ok) { const copy = res.clone(); caches.open(CACHE).then(c => c.put(req, copy)); }
      return res;
    }).catch(() => caches.match(req, { ignoreSearch: true }).then(r => r || caches.match("index.html"))));
  } else if (/fonts\.(googleapis|gstatic)\.com/.test(url.host + url.pathname)) {
    // fonts: cache first (they never change at a pinned version)
    e.respondWith(caches.match(req).then(hit => hit || fetch(req).then(res => {
      if (res.ok || res.type === "opaque") { const copy = res.clone(); caches.open(CACHE).then(c => c.put(req, copy)); }
      return res;
    })));
  }
});
