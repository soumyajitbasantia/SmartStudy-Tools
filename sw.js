const CACHE_NAME = "smartstudy-tools-v5";
const ASSETS = [
  "./",
  "index.html",
  "tool.html",
  "project-notes.html",
  "mathematical.html",
  "percentage.html",
  "loan.html",
  "age.html",
  "unit.html",
  "table.html",
  "gpa.html",
  "word-counter.html",
  "pomodoro.html",
  "fraction.html",
  "lcm-hcf.html",
  "marks.html",
  "cgpa.html",
  "bmi.html",
  "assets/css/styles.css",
  "assets/js/app.js",
  "assets/images/icon.svg",
  "manifest.webmanifest"
];

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS)));
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) => Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))))
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;

  event.respondWith(
    fetch(event.request)
      .then((response) => {
        const copy = response.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy));
        return response;
      })
      .catch(() => caches.match(event.request).then((cached) => cached || caches.match("index.html")))
  );
});
