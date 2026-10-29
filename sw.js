// Wald & Holz – Startseite (W8.78). Nötig, damit Chrome die Seite als App mit Symbol installiert. Speichert nichts zwischen –
// alles kommt immer frisch aus dem Netz (die Daten liegen nur in der Google-Tabelle).
self.addEventListener('install', function () { self.skipWaiting(); });
self.addEventListener('activate', function (e) { e.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', function (e) { e.respondWith(fetch(e.request)); });
