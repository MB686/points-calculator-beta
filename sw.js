const CACHE_NAME = 'ww-diary-cache-v1';
const urlsToCache = [
    '/points-calculator-beta/',
    '/points-calculator-beta/index.html',
    '/points-calculator-beta/log.html',
    '/points-calculator-beta/weight.html',
    '/points-calculator-beta/icon.png'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(urlsToCache))
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => response || fetch(event.request))
    );
});
