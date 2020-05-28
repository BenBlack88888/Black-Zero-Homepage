importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/118d81e5c7aead0f1272.js",
    "revision": "3478e6cad43bd41bbbac2e1bdc5afcc8"
  },
  {
    "url": "/_nuxt/23aa9da110d1923f6812.js",
    "revision": "14c8519768264d09dda03ecae67a25ee"
  },
  {
    "url": "/_nuxt/3597f2a10b8975797c8c.js",
    "revision": "cc6f455a202b028a0761c7692fe43f98"
  },
  {
    "url": "/_nuxt/3875d4ed124c781b3fdf.js",
    "revision": "f7180ee6b2e8c501ba4ea433808da149"
  },
  {
    "url": "/_nuxt/3ad51b7a29eb2a76032c.js",
    "revision": "350d4e3bf93ef77553a0f6c14df2d8b3"
  },
  {
    "url": "/_nuxt/3d73ab37b5b3475af572.js",
    "revision": "34e7635c998a1fda16fb2d7e82eb6854"
  },
  {
    "url": "/_nuxt/4d515520c0f284afb008.js",
    "revision": "8126c6ca9f03494598cad5149d8cef53"
  },
  {
    "url": "/_nuxt/508c1fd4ae8133dfa326.js",
    "revision": "6db47b8d93bdc424e998dabda4165b60"
  },
  {
    "url": "/_nuxt/527ebe82f29d67029624.js",
    "revision": "50657b88dfde34f05ba1c7bcdd1f38e3"
  },
  {
    "url": "/_nuxt/5ed5e8f6f53693f336b3.js",
    "revision": "8dfc291a57555d66c8566e97e3ac9587"
  },
  {
    "url": "/_nuxt/8740b7cea6c4e520bce6.js",
    "revision": "d14e81882a972113a380e9056c94a64e"
  },
  {
    "url": "/_nuxt/9263f43943f0493ca031.js",
    "revision": "6443749219b2a9c9a8e4c35c56149e67"
  },
  {
    "url": "/_nuxt/9ee5da456b39603e27bb.js",
    "revision": "71bdd49a372c28386e071bf575186ae0"
  },
  {
    "url": "/_nuxt/bb59f1809aea28d8a56f.js",
    "revision": "0c096db7459d0c0f7f1646f6b08f5ac1"
  },
  {
    "url": "/_nuxt/de0f97d1d5279f8c3d4a.js",
    "revision": "1be488dc4686db8f254346bedb0f3760"
  },
  {
    "url": "/_nuxt/ecf2751b7708140c1393.js",
    "revision": "5e19a8b64efdd64bd250d718a924d8f6"
  },
  {
    "url": "/_nuxt/f9cd4bf49c864e081235.js",
    "revision": "0e8c1f935844c424e3b55ab46aadb736"
  }
], {
  "cacheId": "site",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
