"use strict";var precacheConfig=[["./index.html","2bb23895d22f57a4c59c9dece1164a33"],["./static/css/main.bb40b844.css","558fbffa3d13d85722187b853e45208d"],["./static/js/main.3dc36e37.js","b7e743e7aa66632a09c29a6825b3ff99"],["./static/media/AfterMidnite.14ba17dc.woff","14ba17dc0f9b383a207f2189eb872b17"],["./static/media/AfterMidnite.64b5b297.ttf","64b5b297f4850c5ea7a5d0f470fc7232"],["./static/media/AfterMidnite.a87a6caf.eot","a87a6caf41930bc09545b9b7ef501bc2"],["./static/media/TrajanPro-Regular.8157680b.woff","8157680b02128da4844734b257ac079f"],["./static/media/TrajanPro-Regular.db5af361.eot","db5af3616df0ff994ce4cde75c58c8e3"],["./static/media/TrajanPro-Regular.deef2c5b.ttf","deef2c5bba8095607b541dbb8929149f"],["./static/media/geovanna-bg-contact.e25da5e7.jpg","e25da5e766322502735a4f47f1dea28b"],["./static/media/geovanna-bg-home.80245896.jpg","80245896dbd05904fb6a0f1e8842487a"],["./static/media/geovanna-bg-presentation.5cd90e32.jpg","5cd90e326449c443a2f08d190eeb7c57"],["./static/media/geovanna-bg-services.d06785f4.jpg","d06785f429634102ba757bdfb36ed833"],["./static/media/geovanna-icon-facebook.cd792322.svg","cd79232242ad65bed4cc457cfc406e94"],["./static/media/geovanna-icon-heart.f3e5a6dc.svg","f3e5a6dc36d8a5268a341e3ff5a2efc5"],["./static/media/geovanna-icon-instagram.1ec983a2.svg","1ec983a2aded17d5d4c38d262a7011f5"],["./static/media/geovanna-icon-presentation.9dd22ecf.svg","9dd22ecffc31f1dec27f4641a0e9cbf7"],["./static/media/geovanna-icon-ring.1278cfe2.svg","1278cfe2ff002c64fd58389bdbdc3e2b"],["./static/media/geovanna-icon-rings.fd9b2cc6.svg","fd9b2cc65e20a073313684519089dd45"],["./static/media/geovanna-logo-nav.0af4aa7c.svg","0af4aa7c4b7a346f608b4f21d6ddd252"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,t,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),r.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return t.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],n=new URL(a,self.location),r=createCacheKey(n,hashParamName,t,/\.\w{8}\./);return[n.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,t=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,n),e=urlsToCacheKeys.has(t));var r="./index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(t=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});