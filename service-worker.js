// LingoMaxima Service Worker — basic cache-first offline support
var CACHE_NAME="lingomaxima-v1";
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
  self.skipWaiting();
});

self.addEventListener("activate",function(e){
  e.waitUntil(
    caches.keys().then(function(names){
      return Promise.all(names.map(function(n){
        if(n!==CACHE_NAME)return caches.delete(n);
      }));
    })
  );
  self.clients.claim();
});

self.addEventListener("fetch",function(e){
  // Tylko GET, tylko same origin
  if(e.request.method!=="GET")return;
  var url=new URL(e.request.url);
  // MyMemory API, ResponsiveVoice, Google Fonts — z sieci (network-only)
  if(url.host.indexOf("mymemory")!==-1||url.host.indexOf("responsivevoice")!==-1||url.host.indexOf("googleapis")!==-1||url.host.indexOf("gstatic")!==-1)return;
  // Same origin: cache-first dla core assets, network-first dla reszty
  e.respondWith(
    caches.match(e.request).then(function(cached){
      if(cached)return cached;
      return fetch(e.request).then(function(response){
        // Cache'uj odpowiedź jeśli OK
        if(response&&response.status===200&&response.type==="basic"){
          var clone=response.clone();
          caches.open(CACHE_NAME).then(function(cache){cache.put(e.request,clone)});
        }
        return response;
      }).catch(function(){
        // Offline fallback: zwróć index.html
        if(e.request.mode==="navigate")return caches.match("./index.html");
      });
    })
  );
});
