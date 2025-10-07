const CACHE_NAME = 'ww-diary-cache-v1';
const urlsToCache = [
    '/',
    '/index.html',
    '/log.html',
    '/weight.html',
    '/target.html'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                return cache.addAll(urlsToCache);
            })
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                return response || fetch(event.request);
            })
    );
});
