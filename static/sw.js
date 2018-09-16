importScripts('/_nuxt/workbox.dev.3ffff7b2.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/app.76cee4b572d4c780ca46.js",
    "revision": "9fcc240480176ee7e7610e39e06cac9a"
  },
  {
    "url": "/_nuxt/layouts/default.a486d4ae4c3664dde50c.js",
    "revision": "5d8c0360bdf9349c524269313b2ce211"
  },
  {
    "url": "/_nuxt/manifest.ed6da2e70a4fdccb63c6.js",
    "revision": "a26003afb226b6812c3e6de29db32f56"
  },
  {
    "url": "/_nuxt/pages/index.fc606ad57a41b5cace2e.js",
    "revision": "d206232b726b7fd8110a47da7526946f"
  },
  {
    "url": "/_nuxt/vendor.13ef70b463ce71c01a92.js",
    "revision": "35803c26af7180d53971b7eb2cdd1c8e"
  }
], {
  "cacheId": "nuxt_boilerplate",
  "directoryIndex": "/",
  "cleanUrls": false
})



workbox.clientsClaim()
workbox.skipWaiting()


workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')





