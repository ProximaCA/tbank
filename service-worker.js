const CACHE_NAME = "bank-app-v1";
const urlsToCache = [
  "/",
  "/index.html",
  "/styles.css",
  "/ELENA_LOGIN.JPG",
  "/ELENA_HOME.JPG",
  "/ELENA_HOME_SCOLL.JPG",
  "/ELENA_CARD.JPG",
  "/ELENA_MORE.JPG",
];

self.addEventListener("install", function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("fetch", function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      if (response) {
        return response;
      }
      return fetch(event.request);
    })
  );
});
