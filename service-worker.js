self.addEventListener('install', e => {
  e.waitUntil(caches.open('bem-estar-v7').then(cache => cache.addAll([
    'index.html','manifest.json','icon-192.png','icon-512.png'
  ])));
});
self.addEventListener('fetch', e => {
  e.respondWith(caches.match(e.request).then(r => r || fetch(e.request)));
});
