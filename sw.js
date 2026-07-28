// Service Worker — AD Louveira
const CACHE = 'adlouveira-v1';

self.addEventListener('install', function(e) {
  self.skipWaiting();
});

self.addEventListener('activate', function(e) {
  e.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', function(e) {
  // Passa todas as requisições normalmente (sem cache agressivo)
  e.respondWith(fetch(e.request).catch(function() {
    return caches.match(e.request);
  }));
});
