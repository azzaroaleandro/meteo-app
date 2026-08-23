const CACHE = "marevero-v4";
const BASE = new URL("./", self.location.href);
const INDEX = new URL("index.html", BASE).href;
const SHELL = ["index.html","styles.css?v=20260824-1","app.js?v=20260824-2","manifest.webmanifest","icon.svg"].map(function(path) {
  return new URL(path, BASE).href;
});
const SHELL_URLS = new Set(SHELL);

self.addEventListener("install", function(event) {
  event.waitUntil(caches.open(CACHE).then(function(cache) {
    return cache.addAll(SHELL);
  }));
  self.skipWaiting();
});

self.addEventListener("activate", function(event) {
  event.waitUntil(caches.keys().then(function(keys) {
    return Promise.all(keys.filter(function(key) {
      return key.indexOf("marevero-") === 0 && key !== CACHE;
    }).map(function(key) {
      return caches.delete(key);
    }));
  }));
  self.clients.claim();
});

self.addEventListener("fetch", function(event) {
  var request = event.request;
  var url = new URL(request.url);
  if (request.method !== "GET" || url.origin !== self.location.origin) return;

  if (request.mode === "navigate") {
    event.respondWith(fetch(request).catch(function() {
      return caches.match(INDEX);
    }));
    return;
  }

  if (!SHELL_URLS.has(url.href)) return;
  event.respondWith(fetch(request).then(function(response) {
    if (!response.ok) return response;
    var copy = response.clone();
    event.waitUntil(caches.open(CACHE).then(function(cache) {
      return cache.put(request, copy);
    }));
    return response;
  }).catch(function() {
    return caches.match(request);
  }));
});
