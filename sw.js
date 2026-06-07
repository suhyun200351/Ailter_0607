const CACHE = 'ailter-v1';
const ASSETS = [
  '/Ailter_0607/',
  '/Ailter_0607/index.html',
  '/Ailter_0607/Ailter Design System.html',
  '/Ailter_0607/styles/ailter-tokens.css',
  '/Ailter_0607/styles/ailter-components.css',
  '/Ailter_0607/manifest.json',
  '/Ailter_0607/icon-192.png',
  '/Ailter_0607/icon-512.png'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(cached => cached || fetch(e.request))
  );
});
