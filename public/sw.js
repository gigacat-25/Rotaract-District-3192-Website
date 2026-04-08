/* Service Worker Stub for Phase 1 */
self.addEventListener('install', (event) => {
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    event.waitUntil(clients.claim());
});

self.addEventListener('fetch', (event) => {
    // Phase 1: Simple passthrough
    event.respondWith(fetch(event.request));
});
