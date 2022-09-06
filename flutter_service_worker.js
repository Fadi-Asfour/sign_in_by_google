'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "220d922e3912de23b20b5ca4e3c661f5",
".git/config": "ccbf973f2b74890dfd98a2db0622cb05",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "72710381a49a8ec45aaa1496f309f0cf",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "a9de42afa776fae9881af0fce3f9f2ec",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "cca04b3b0605a129e69da18eaf002640",
".git/logs/refs/heads/main": "8062bd3f90cd0d628a60bcf91dfc7621",
".git/logs/refs/remotes/origin/main": "44eb73f2a7ef31c3f11aa9f14dc27023",
".git/objects/03/c9a7472de4132af3aa63ff51f15feec8def385": "0603be7434665cc7ed62c4f1ceae39cc",
".git/objects/08/4a35e29ff181cd8e1cb75e63e568ed08f62105": "a57e1107ebb236297d73ad640382e5e6",
".git/objects/09/6337bc66d80e592fb04f46c60fd6b85329e570": "6eb5f5dfd729d69972dd676444756e3e",
".git/objects/0c/af02a2db3e58772050a21a62e641e9c6f9a6e1": "ccf5e592484e7b0462565b45bac18a84",
".git/objects/19/0fa64bc4e5e2094cf45c65d842c68666da2153": "f18b20ed7fad6e46effe39edbaf3ca3f",
".git/objects/1a/b847b818dec389fb43fb9da80637c02e27d3d3": "8af286f2a069534106d53e8c037b0a4a",
".git/objects/1c/983025bb200eb326f527c818558e420f923969": "9122ae06df4615f8e926705e2498690a",
".git/objects/27/e9f182130e3136b5fce2d18ca699d93739eac6": "e1bae063f4ce8e3e7852bf3779de27c2",
".git/objects/2a/5a5a0c33788bee2f52c87224e1b30312aeaf85": "4419404a86a93a2e0fb0fd6e37800bd6",
".git/objects/2b/2c3a562b375d8b8666585df340e8f3868f38a8": "92a5ead6e841d0afb413c30b02850499",
".git/objects/39/d87025efab89a5c7fa5286045528c75c8a543c": "affa9131f88cb56fbe12fa9faf494ec0",
".git/objects/3b/6ed11f30a1b110c3196b960bcfcb084fb9f34e": "95bcdc396c263db334341f38066280e6",
".git/objects/3f/7682a6e830e34f27e98a37d386fa63b2985df4": "1acac7a08041d4c873c649de6751474c",
".git/objects/42/9903e3168b91671f5f9d69bf96481f1463bc38": "3a58ce176e970a11474b2e17ec64ea38",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/47/ec40375ccdd7db30c1e3efa9b89dbdab0c7923": "b7881492f4523a077c1e2b5bedc4bd84",
".git/objects/4a/ef4aa5a91528d0bb6bd22d8c6efe9627cd1f57": "796001ba0c63cdff9c86defd3cf7828f",
".git/objects/4d/d6dd62abeaa3caff2898b7a5a45ae47442bb7a": "cc79739651cba122be48e78c64317d83",
".git/objects/53/27fe314e3667a2c5cc8df04410d7739a797be1": "e90977d35a5db05d1c9cc6fa2c21764a",
".git/objects/55/2e611467d6abd610582a5336224c14bfe1f34b": "3b7e1887517f28c56c30c10144d51f24",
".git/objects/56/8034a8855a7a5c7cf509db5262206d5cb34b27": "6e42c0e710e7b15e6d04c39147d827bb",
".git/objects/5d/c617c8f585d93b13cd7e6dc35b78b0b1040f58": "9805b86514febcb02f4a4f2dc52521b1",
".git/objects/61/6673336376088833fe7ee29ed9fe0fdf287cda": "4e3d5d66b0f206f38bcdf29f57c09963",
".git/objects/68/7c7a450c47cc30edc210e12e3c66e7ded8ac88": "badb033d39fbb2f5b9c1fc98ae205517",
".git/objects/6d/730b0aeee002771f5dac80186995a23ea47bbb": "3d78fe94cb9861ab1a49ba3c968a0761",
".git/objects/6d/f97a7e54b4313f263ee9d3865dcb6428b27a5c": "882f0c70ba6478292ef54e63705b67d3",
".git/objects/72/77bd20f908876cb83c44ab92b5de2adb4674c4": "5615b4552fa149dd0efb6ea1919f3ac9",
".git/objects/79/3f7cdcf6cbd4da289599bfde9c576fe2951e0c": "a7c5aad0f1a4c4db5912e98eba406ceb",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7c/fb6f962bdb8c4b610bb1bb25b6c4361f9d20e8": "20235224869b650fc9ceb371e56bb5c9",
".git/objects/80/04ea9cee7bcb6509ac79630898befed33c3cbf": "33902808e2e920892916670f94525926",
".git/objects/8a/c06614d2733ccba67787a11b061c994b415700": "35c4c8336d6424bf1debfff9d8e1f643",
".git/objects/8d/d8277229ded859e7ce26553945f0837a4bfec7": "a1da6e0846c0c61e63afeb99fba5012d",
".git/objects/90/82808c9e3d284c0c46db823dafcb5b6486de16": "64735cd789edff7d201ac51a75427c89",
".git/objects/91/dfa7a16ac03d83e6b19c074a043c99da14a904": "7652da8cdd9435eed409872d99781358",
".git/objects/97/8746b5424d1212460133977131fc5ef0971abb": "3cc094294d4d3275ff02b12eff5e10c3",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a2/e4bdb6bb40e145befa1c3ddf359e7e57c102a4": "7c1f3c827b427a2aebe7e96722f4198e",
".git/objects/a3/0a491327806b4e9c6a3bdeb188f825ee298e78": "2acc1f21f72451b442ee02f632ef4470",
".git/objects/a4/08b7d1d63be14a5d034f02ef4b8f2ca2516d3a": "2e114e83fb348a736ce035ff1ea333ca",
".git/objects/a7/2095d8a334c5749d7248acac656e284b85e9e1": "2cb091f23d24797cf84a80af01593f85",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ab/70969a7ebde8f87209ab9d02bbbfa7af636698": "e0c2b276c8c7bc6cb9af9f90513f0863",
".git/objects/ac/401585894ce646ae05021ec402e9f9856a0675": "2ff721a8c667e07c363c046c4a8314f0",
".git/objects/b0/a08a812dc52e177d8bb8f69f8b7aa6fcf07cf8": "03f8b24c59caf82463c9d4d207c42d95",
".git/objects/b2/f28e76e7551df0c982125005cb46a3f9e1a5a7": "b0a9757a10be219b198953b5c41af037",
".git/objects/b3/97f413dca1e887c77c3c0442751881a2f97d67": "ee32f503e93dea29d1935b243922cb0e",
".git/objects/b4/dc80740499395dfe53880516ef9ec552229649": "08e41e926fb56a05feadd53a6b480224",
".git/objects/b6/af16bcbd91e34f7ba7217564fec633d99700ec": "2b7ab16edd6c6c3699c2e51f3960af4c",
".git/objects/b6/dd2eb4b996e1e959fbd2fa060b0a94aed8d490": "1a02ab3903ad9d7cca8ec160bfc8f7be",
".git/objects/bb/5fc6ac56faf8d20ffc0a082524dbd20cc99064": "b202f75f7805e04469da86f8773b8af3",
".git/objects/c1/7dfe86dd4e0abfdee3c8ff930f8238cbdf6de2": "e13fda72c5fae3780794b06f13a80ab3",
".git/objects/c4/8127af473b1be5c0fd725d9564fc3cfd64a240": "febc1cba2504700fd6ec019f95a7fa62",
".git/objects/c6/e0fb27d86b9d217532521e8e3440a12d2da1e6": "3a4421b4d8bc72c8cdd9179d95b0b73c",
".git/objects/c7/85de98c9811603b95e05381f09bc2bb7db8b4e": "239e2dc78837f1bc3ed9dfcf1037bd15",
".git/objects/ca/df9a9dc2c49911f5d658866c234f5dcb755e53": "ada9aa8a30265afbedf9e9077dd375ac",
".git/objects/cc/5725b315760d100f6386e6bbf09af8fe57a9f1": "29c19352d2bee0821600856656c95791",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/d0/382bd78bfd97d7017ce5b737209b33c5cbd7e6": "d34c0e2feb4c0edbc2f026052a6c47fd",
".git/objects/d8/fb2b1a1cd3dfc705a65b029c306454e8d9fe1e": "b27950b3eba8a582ff2078d0d3f3d304",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/de/978f04a76701a9c6c05119aa2d296c64605dc8": "f190ee2bdbbd2b418a824316bfcf46c8",
".git/objects/e0/2012ca0a73da86edd7614aebdc24f350669305": "4cb516f7f367eb8387729d8cfc7cf9b2",
".git/objects/e0/d1b813df54dcdf19480ee054261b50d285a33d": "61e363df618b76a6fa475b32bbbcf912",
".git/objects/e4/40dfae9117d85df93e68e6e5553c3f706a1b36": "5f527fdec6d65a3baab513a3f6badad9",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/ed/61cb9b322388128e43d70ed647741fa4af3e31": "d175ce8b686d6127187b87a88cac6449",
".git/objects/ed/d6a189f5f92fc70bf47739c4c279968a190de4": "393366702bbb89fa8116619549603c29",
".git/objects/ee/8ffed0c2387ea2727c2dae81a6cb3ce175b4ab": "6b3326ed73568988078402d63857c85b",
".git/objects/ee/f73df43e8f29fcdb0472123af607b925f4b06a": "dabb21bc02018c9bd74bab8b9b6fce42",
".git/objects/f3/b3f063607037a5dd6164b825c0859f5fec540f": "244a2eef5c0557b01e27b063e8a87131",
".git/objects/f4/6c58a6563debdfcfa0de2202e8330da662e84c": "1833e8e73d5781dfd2b3d4842d064306",
".git/objects/f8/696ab76c5b2d546359e3c8d7ba0fe4503e4a66": "c061d1988533cc6671da790e012761b3",
".git/objects/f9/2b3f3bfccb4d742bccf4adb4400bb21ae558b3": "d03cf8a3044a11ff5d797c7a555062bc",
".git/objects/ff/4268d8f8185d3b444bd71e54618c4b60f2ee3a": "b7445fd014ce00577f43cab190506dc0",
".git/refs/heads/main": "e7c5db42059a2a4ef26f32f84542e088",
".git/refs/remotes/origin/main": "1271f85a1db02687bad58401c2ab3c77",
"assets/AssetManifest.json": "5917f53bbf94637774d1325b89a02f0b",
"assets/assets/images/final_logo.jpg": "d854d7c49bd2da237ff0e5ed94ad9693",
"assets/assets/images/final_logo2.png": "a57c17bd375d29f3c4220d94f6a73a56",
"assets/assets/images/google.png": "a2229b88eeb7a5118f0a2c38b1862c58",
"assets/assets/images/linkedin.png": "0d04430512d3edfaceda80ea1cf1d5e7",
"assets/assets/images/logo.png": "ea9dec07c80cb8cdfd65c5265e2bbc7e",
"assets/assets/images/logo2.png": "581d776f4deec518040ff1c2b789f869",
"assets/assets/images/splash_logo.png": "6238a3da7fa13d8c823a2a10e2ca7079",
"assets/assets/images/splash_logo2.png": "400259539b300a6d91e8472175698973",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "8b8288730413ea309eca6ed2de582730",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "06d557a8192f05367ce799cc69330696",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"favicon.png": "be39183988cadd34b1d7c8083a1041ed",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/Icon-192.png": "af1492cdf3a8bcfe55a005b76fe4ecf0",
"icons/Icon-512.png": "3e6096fae6b999740ca3f0e293a5190d",
"icons/Icon-maskable-192.png": "af1492cdf3a8bcfe55a005b76fe4ecf0",
"icons/Icon-maskable-512.png": "3e6096fae6b999740ca3f0e293a5190d",
"index.html": "94a55c4b9a90634a08134609bf740f62",
"/": "94a55c4b9a90634a08134609bf740f62",
"main.dart.js": "5d6267a3f9ee0100d5f4afda9660b562",
"manifest.json": "0f216b11fb5476021f5ec0445df6f8db",
"splash/img/dark-1x.png": "13a0d4c5f1617f296b3e0d4e1dadd764",
"splash/img/dark-2x.png": "b0abd23dd7d687b4d38aff5ffa5faee1",
"splash/img/dark-3x.png": "7aaa9b275fe87224d3f48f59e63379e7",
"splash/img/dark-4x.png": "40b74d31bcfc5c711f1c68f3e514c367",
"splash/img/light-1x.png": "13a0d4c5f1617f296b3e0d4e1dadd764",
"splash/img/light-2x.png": "b0abd23dd7d687b4d38aff5ffa5faee1",
"splash/img/light-3x.png": "7aaa9b275fe87224d3f48f59e63379e7",
"splash/img/light-4x.png": "40b74d31bcfc5c711f1c68f3e514c367",
"splash/splash.js": "123c400b58bea74c1305ca3ac966748d",
"splash/style.css": "e04889c542d335c83b47d50e2427ebef",
"version.json": "c86af1bc27e1acb81f0bcfa75353e71e"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
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
