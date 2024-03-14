'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "79d10b1c4e8f190efa15644c0113cf8a",
"assets/AssetManifest.bin.json": "037e74648cb996213278a0147a57a4a1",
"assets/AssetManifest.json": "95ab98aa89b74d84397828ad4b5157f9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "05ce84abdd832d27966216a01877e6e7",
"assets/lib/images/2b7a62ef-b39e-11ee-91e3-00155d45d204.jpg": "1dc31f06214286818e09d957ee33a9de",
"assets/lib/images/3279a223-6bf6-11ed-91c9-00155d45d204.jpg": "1e17046950a68a1577dbbe0cd6177ef5",
"assets/lib/images/3b42ae69-c91e-11eb-916d-00155d45d204.jpg": "691624d9eb3455ed7fbaec6798b2fa0d",
"assets/lib/images/3e91af79-97d0-11eb-916b-00155d45d204.jpg": "e3e27a0a33714bffc8c33c1456edc4da",
"assets/lib/images/3e91af7d-97d0-11eb-916b-00155d45d204.jpg": "0f4e9cc0d33dc443767c9645c6508d4f",
"assets/lib/images/3e91af7e-97d0-11eb-916b-00155d45d204.jpg": "5aeb774e19c52c732f44398eebae776b",
"assets/lib/images/3e91af82-97d0-11eb-916b-00155d45d204.jpg": "cae8b1a0a81e91264f5fea958378bad7",
"assets/lib/images/3e91af83-97d0-11eb-916b-00155d45d204.jpg": "c58c63b226cd44a800ac2e2b7eb0f7ff",
"assets/lib/images/3e91af85-97d0-11eb-916b-00155d45d204.jpg": "529b6b77fc5ded446df4d1c77fae221d",
"assets/lib/images/3e91af86-97d0-11eb-916b-00155d45d204.jpg": "f5504459de0ce16827dba634fdce7104",
"assets/lib/images/3e91af87-97d0-11eb-916b-00155d45d204.jpg": "4a9fb8b94496025b5fb8f62268da24ae",
"assets/lib/images/448ea91a-97d0-11eb-916b-00155d45d204.jpg": "d156d9de4062a6cb744ae37b1f4630a8",
"assets/lib/images/448ea925-97d0-11eb-916b-00155d45d204.jpg": "6d3208be6776f835d392b2ce5f3a5985",
"assets/lib/images/48106a5f-3b4f-11ee-91d0-00155d45d204.jpg": "67eac33ba005cb43e51a4dec0121a361",
"assets/lib/images/4e130d97-87ad-11ee-91d6-00155d45d204.jpg": "3d6d9abff81a770ca60383dad2ba200f",
"assets/lib/images/5294e1d3-3b47-11ee-91d0-00155d45d204.jpg": "415cb22855c1f343685414a92afab598",
"assets/lib/images/a49c5695-7536-11ec-918f-00155d45d204.jpg": "540dd9d784fd335b825c2beae46935d0",
"assets/lib/images/aad708a5-7532-11ec-918f-00155d45d204.jpg": "2f4ef53976c03f7ba3e98ba541a6cd3d",
"assets/lib/images/ad9facb7-cc50-11ec-91c1-00155d45d204.jpg": "bbd06cdf8efa5d46289a090e06efca41",
"assets/lib/images/b79fdb2b-d6d6-11ec-91c1-00155d45d204.jpg": "af6f32ac75e88bb6ce0ac12ee013759b",
"assets/lib/images/ba09a446-ccb4-11ee-8ac7-001dd8b75f51.jpg": "7e01b4f9d794b859255a67865a91c59e",
"assets/lib/images/bf39fc84-cce2-11ee-8ac7-001dd8b75f51.jpg": "cbad4dc1f42a06117aa5db24cc1860a1",
"assets/lib/images/d05ffdf5-c1ad-11ee-8ac4-001dd8b75f51.jpg": "0aaed18750466d7eed5b7410fe7271b4",
"assets/lib/images/dd785723-87b6-11ee-91d6-00155d45d204.jpg": "173e293fe2f9c2720845940836fab6ac",
"assets/lib/images/e9557516-c1c2-11ee-8ac4-001dd8b75f51.jpg": "5dd36472e70e4e7edc3fb2506d59eb85",
"assets/lib/images/f3123aa9-305c-11ee-91d0-00155d45d204.jpg": "6b22c9a6123718079e995e63a067dd0d",
"assets/lib/images/f4c3b3d5-15ec-11ed-91c6-00155d45d204.jpg": "a5e8b03b4f3a96249c1e52115b4af60c",
"assets/lib/images/ff646fa3-b37d-11ee-91e3-00155d45d204.jpg": "66804b84fe58ceef8ca1139bd5e03e6a",
"assets/lib/prices.json": "cffc4144473ca3beafe4666c32552ab2",
"assets/lib/products.json": "a283668f9133c66a6e2cc120bab8183a",
"assets/lib/stores.json": "6ea4f0b8407a43a8a26d208ca5c14106",
"assets/NOTICES": "999028c1fe63ddcf8c3ee071cdf7cdd8",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"assets/web/icons/1.png": "df720cf4052e8a0809e31945c0169abb",
"assets/web/icons/2.png": "6b30447815349a14f408769494ed8faf",
"assets/web/icons/3.png": "60e3d8adeef08b102877f8afcbc52e73",
"assets/web/icons/4.png": "60e3d8adeef08b102877f8afcbc52e73",
"assets/web/icons/5.png": "60e3d8adeef08b102877f8afcbc52e73",
"assets/web/icons/6.png": "60e3d8adeef08b102877f8afcbc52e73",
"assets/web/icons/new.png": "25e5e27f2fb952191df6fa64bf103165",
"assets/web/icons/pizzaday.png": "aeb958f2fbc5dc01fb3b4f39e9b9c724",
"assets/web/icons/store.png": "a6af3d8e834d3fedced2703917b912af",
"assets/web/icons/vegan.png": "bdc47bdf04e6d390319b5f6d82c97405",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/1.png": "df720cf4052e8a0809e31945c0169abb",
"icons/2.png": "6b30447815349a14f408769494ed8faf",
"icons/3.png": "60e3d8adeef08b102877f8afcbc52e73",
"icons/4.png": "60e3d8adeef08b102877f8afcbc52e73",
"icons/5.png": "60e3d8adeef08b102877f8afcbc52e73",
"icons/6.png": "60e3d8adeef08b102877f8afcbc52e73",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/new.png": "25e5e27f2fb952191df6fa64bf103165",
"icons/pizzaday.png": "aeb958f2fbc5dc01fb3b4f39e9b9c724",
"icons/store.png": "a6af3d8e834d3fedced2703917b912af",
"icons/vegan.png": "bdc47bdf04e6d390319b5f6d82c97405",
"index.html": "2329b52a6d5ed1807b09eac5bb649ea0",
"/": "2329b52a6d5ed1807b09eac5bb649ea0",
"main.dart.js": "76775d08b1289175fff4bf77b472bcd0",
"manifest.json": "bf24c84c3bf99672a631c4f84464e793",
"telegram_integration.js": "b23339b44d5bf28105117676dfad25a5",
"version.json": "15235b5108d6a877ef74fe3317a96bf7"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
