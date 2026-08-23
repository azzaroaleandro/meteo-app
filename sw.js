const CACHE = "marevero-v1";
const SHELL = ["./","./index.html","./styles.css","./app.js","./manifest.webmanifest","./icon.svg"];

self.addEventListener("install", function(event) {
  event.waitUntil(caches.open(CACHE).then(function(cache) { return cache.addAll(SHELL); }));
  self.skipWaiting();
});

self.addEventListener("activate", function(event) {
  event.waitUntil(caches.keys().then(function(keys) {
    return Promise.all(keys.filter(function(key) { return key !== CACHE; }).map(function(key) { return caches.delete(key); }));
  }));
  self.clients.claim();
});

self.addEventListener("fetch", function(event) {
  const url = new URL(event.request.url);
  if (url.origin !== self.location.origin || event.request.method !== "GET") return;
  event.respondWith(fetch(event.request).then(function(response) {
    const copy = response.clone();
    caches.open(CACHE).then(function(cache) { cache.put(event.request, copy); });
    return response;
  }).catch(function() {
    return caches.match(event.request).then(function(match) {
      return match || (event.request.mode === "navigate" ? caches.match("./index.html") : Response.error());
    });
  }));
});
