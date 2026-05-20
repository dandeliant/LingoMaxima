// LingoMaxima Service Worker — network-first dla głównych plików,
// cache-first dla statyki. Bumpuj CACHE_VERSION przy każdej istotnej zmianie.
var CACHE_VERSION="v7";
var CACHE_NAME="lingomaxima-"+CACHE_VERSION;
var CORE_ASSETS=[
  "./",
  "./index.html",
  "./styles.css",
  "./script.js",
  "./manifest.json"
];

self.addEventListener("install",function(e){
  e.waitUntil(
    caches.open(CACHE_NAME).then(function(cache){
      return cache.addAll(CORE_ASSETS).catch(function(err){
        console.warn("SW: niektóre zasoby nie zostały zcache'owane:",err);
      });
    })
  );
  // Natychmiast przejmij kontrolę nad otwartymi kartami
  self.skipWaiting();
});

self.addEventListener("activate",function(e){
  e.waitUntil(
    caches.keys().then(function(names){
      return Promise.all(names.map(function(n){
        // Usuń wszystkie stare wersje cache
        if(n!==CACHE_NAME)return caches.delete(n);
      }));
    }).then(function(){
      // Przejmij kontrolę nad wszystkimi otwartymi kartami
      return self.clients.claim();
    }).then(function(){
      // Powiadom otwarte karty że jest nowa wersja
      return self.clients.matchAll().then(function(clients){
        clients.forEach(function(client){
          client.postMessage({type:"SW_UPDATED",version:CACHE_VERSION});
        });
      });
    })
  );
});

self.addEventListener("fetch",function(e){
  if(e.request.method!=="GET")return;
  var url=new URL(e.request.url);
  // External: zawsze z sieci, bez interakcji ze SW
  if(url.host.indexOf("mymemory")!==-1||url.host.indexOf("responsivevoice")!==-1||url.host.indexOf("googleapis")!==-1||url.host.indexOf("gstatic")!==-1)return;
  // Same origin: NETWORK-FIRST (zawsze próbuj świeżą wersję)
  // Cache jest fallbackiem jeśli offline
  e.respondWith(
    fetch(e.request).then(function(response){
      // Sukces z sieci — zaktualizuj cache i zwróć
      if(response&&response.status===200&&response.type==="basic"){
        var clone=response.clone();
        caches.open(CACHE_NAME).then(function(cache){cache.put(e.request,clone)});
      }
      return response;
    }).catch(function(){
      // Offline — zwróć z cache
      return caches.match(e.request).then(function(cached){
        if(cached)return cached;
        // Ostateczny fallback dla nawigacji
        if(e.request.mode==="navigate")return caches.match("./index.html");
      });
    })
  );
});
