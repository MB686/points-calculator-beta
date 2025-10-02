self.addEventListener('install', event => {
    event.waitUntil(
        caches.open('points-calculator-beta-cache-v1').then(cache => {
            return cache.addAll([
                '/points-calculator-beta/',
                '/points-calculator-beta/index.html',
                '/points-calculator-beta/log.html',
                '/points-calculator-beta/weight.html',
                '/points-calculator-beta/icon.png'
            ]);
        })
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request);
        })
    );
});
