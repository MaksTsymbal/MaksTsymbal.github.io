'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "79d10b1c4e8f190efa15644c0113cf8a",
"assets/AssetManifest.bin.json": "037e74648cb996213278a0147a57a4a1",
"assets/AssetManifest.json": "95ab98aa89b74d84397828ad4b5157f9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "05ce84abdd832d27966216a01877e6e7",
"assets/lib/images/2b7a62ef-b39e-11ee-91e3-00155d45d204.jpg": "b3b228b3f4628b16284daf0a31368258",
"assets/lib/images/3279a223-6bf6-11ed-91c9-00155d45d204.jpg": "5a2f4691ee7e2baf7082beb8ef159852",
"assets/lib/images/3b42ae69-c91e-11eb-916d-00155d45d204.jpg": "36792afc1218b1b0c3150d055ee1ba32",
"assets/lib/images/3e91af79-97d0-11eb-916b-00155d45d204.jpg": "95513bdaf30b941fd8f85a04fb783ddd",
"assets/lib/images/3e91af7d-97d0-11eb-916b-00155d45d204.jpg": "8941fa8acd952a3cc9331a40a10951ef",
"assets/lib/images/3e91af7e-97d0-11eb-916b-00155d45d204.jpg": "531ed58fc1229a2f13d886d70d7758d3",
"assets/lib/images/3e91af82-97d0-11eb-916b-00155d45d204.jpg": "bae8e36a7a6cd2011dbb58c7f1298d59",
"assets/lib/images/3e91af83-97d0-11eb-916b-00155d45d204.jpg": "8d331f28ff74e511572c5e53e5baef9b",
"assets/lib/images/3e91af85-97d0-11eb-916b-00155d45d204.jpg": "c972b0017d68b3481208277be0c006e2",
"assets/lib/images/3e91af86-97d0-11eb-916b-00155d45d204.jpg": "7319152672b91fdfa5859d990302f9c6",
"assets/lib/images/3e91af87-97d0-11eb-916b-00155d45d204.jpg": "03220e4a8e94e6e34c950497a124d36e",
"assets/lib/images/448ea91a-97d0-11eb-916b-00155d45d204.jpg": "fa3f928cb493c91a92f724ae3e3a0b2c",
"assets/lib/images/448ea925-97d0-11eb-916b-00155d45d204.jpg": "939945a95923bb39ec13f2cad357da0c",
"assets/lib/images/48106a5f-3b4f-11ee-91d0-00155d45d204.jpg": "b40a2cdd38a1d2e46c7508ebaf5fa62c",
"assets/lib/images/4e130d97-87ad-11ee-91d6-00155d45d204.jpg": "15ba9226022ac5430a63339b15cbd069",
"assets/lib/images/5294e1d3-3b47-11ee-91d0-00155d45d204.jpg": "6f8d630bb3000945421f6b9913862c9e",
"assets/lib/images/a49c5695-7536-11ec-918f-00155d45d204.jpg": "c7f091cc2b158df275441b7c29661b0c",
"assets/lib/images/aad708a5-7532-11ec-918f-00155d45d204.jpg": "e7f27cab4be5913a43e9a7a9f020b323",
"assets/lib/images/ad9facb7-cc50-11ec-91c1-00155d45d204.jpg": "ed19e3a4c40339d43498d1b3f2aebffc",
"assets/lib/images/b79fdb2b-d6d6-11ec-91c1-00155d45d204.jpg": "bad3a4e347b7b4ac9aee04c06cc13c78",
"assets/lib/images/ba09a446-ccb4-11ee-8ac7-001dd8b75f51.jpg": "b7e6a4204a6c712bcd926f4468bda0da",
"assets/lib/images/bf39fc84-cce2-11ee-8ac7-001dd8b75f51.jpg": "4e90b3fb926af571c3f05465c5a096d7",
"assets/lib/images/d05ffdf5-c1ad-11ee-8ac4-001dd8b75f51.jpg": "e16b8dd0f31603283a06ea975d2ff8f6",
"assets/lib/images/dd785723-87b6-11ee-91d6-00155d45d204.jpg": "5562398beeae7cb3573d5c5b61f27aeb",
"assets/lib/images/e9557516-c1c2-11ee-8ac4-001dd8b75f51.jpg": "be3f4395d1bf78d1a2dd04b482b6251e",
"assets/lib/images/f3123aa9-305c-11ee-91d0-00155d45d204.jpg": "bbaf79e3e3b6471ed197811e0b9cb7b0",
"assets/lib/images/f4c3b3d5-15ec-11ed-91c6-00155d45d204.jpg": "f54c0be5b1bcd4b0450a2bb8975889b6",
"assets/lib/images/ff646fa3-b37d-11ee-91e3-00155d45d204.jpg": "29265b1f68bbeb4ee813843dc2bb0895",
"assets/lib/prices.json": "896e96d6379452522885911af251f11e",
"assets/lib/products.json": "0eec75919598c45dabab7ce6aeeafcd1",
"assets/lib/stores.json": "f7d1ba90df5ed156b5b4d26dcb05cc26",
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
"index.html": "f0bd2bdf438248c82bda8b41f8edeb29",
"/": "f0bd2bdf438248c82bda8b41f8edeb29",
"main.dart.js": "d44d7f32ae1ebf06b7dc3850212c890c",
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
