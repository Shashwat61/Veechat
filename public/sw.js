if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return a[e]||(s=new Promise((async s=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]}))},s=(s,a)=>{Promise.all(s.map(e)).then((e=>a(1===e.length?e[0]:e)))},a={require:Promise.resolve(s)};self.define=(s,i,n)=>{a[s]||(a[s]=Promise.resolve().then((()=>{let a={};const c={uri:location.origin+s.slice(1)};return Promise.all(i.map((s=>{switch(s){case"exports":return a;case"module":return c;default:return e(s)}}))).then((e=>{const s=n(...e);return a.default||(a.default=s),a}))})))}}define("./sw.js",["./workbox-4a677df8"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/593-d68ef03a4898d8906104.js",revision:"uzV2D6mMj1wXN82m1ZJuy"},{url:"/_next/static/chunks/75fc9c18-5c1929f66343f0a636cd.js",revision:"uzV2D6mMj1wXN82m1ZJuy"},{url:"/_next/static/chunks/framework-895f067827ebe11ffe45.js",revision:"uzV2D6mMj1wXN82m1ZJuy"},{url:"/_next/static/chunks/main-a24fd78f98c3ac5c2849.js",revision:"uzV2D6mMj1wXN82m1ZJuy"},{url:"/_next/static/chunks/pages/_app-ab887dcea6da8992599e.js",revision:"uzV2D6mMj1wXN82m1ZJuy"},{url:"/_next/static/chunks/pages/_error-737a04e9a0da63c9d162.js",revision:"uzV2D6mMj1wXN82m1ZJuy"},{url:"/_next/static/chunks/pages/chat/%5Bid%5D-11ab90d5bdecbc472dcb.js",revision:"uzV2D6mMj1wXN82m1ZJuy"},{url:"/_next/static/chunks/pages/index-3355ac330356702e0ac6.js",revision:"uzV2D6mMj1wXN82m1ZJuy"},{url:"/_next/static/chunks/pages/login-49d8d3807e5193430b0c.js",revision:"uzV2D6mMj1wXN82m1ZJuy"},{url:"/_next/static/chunks/polyfills-a40ef1678bae11e696dba45124eadd70.js",revision:"uzV2D6mMj1wXN82m1ZJuy"},{url:"/_next/static/chunks/webpack-1ad8a2eca3222dad2066.js",revision:"uzV2D6mMj1wXN82m1ZJuy"},{url:"/_next/static/css/4662984b3315aebf01f8.css",revision:"uzV2D6mMj1wXN82m1ZJuy"},{url:"/_next/static/image/assets/images/chatbg2.4bb67a478a0cdaddea4c9878cab78eb9.png",revision:"uzV2D6mMj1wXN82m1ZJuy"},{url:"/_next/static/uzV2D6mMj1wXN82m1ZJuy/_buildManifest.js",revision:"uzV2D6mMj1wXN82m1ZJuy"},{url:"/_next/static/uzV2D6mMj1wXN82m1ZJuy/_ssgManifest.js",revision:"uzV2D6mMj1wXN82m1ZJuy"},{url:"/favicon.ico",revision:"21b739d43fcb9bbb83d8541fe4fe88fa"},{url:"/icon.png",revision:"f41befb1e26591f49a88f0630abf1b52"},{url:"/icons/apple-icon-180.png",revision:"0a8783a8f464d40562121df796096fcc"},{url:"/icons/apple-splash-1125-2436.jpg",revision:"2b5b54dfb299f886ca2ea9b74fb52228"},{url:"/icons/apple-splash-1136-640.jpg",revision:"ac6a943487a7d843c533eac41515d145"},{url:"/icons/apple-splash-1170-2532.jpg",revision:"cf7b96f1fc1c8c09dc6af0ee84ed9a03"},{url:"/icons/apple-splash-1242-2208.jpg",revision:"45779f446142a4ec890cf426d4c67080"},{url:"/icons/apple-splash-1242-2688.jpg",revision:"0b76fea869f0b3f3ecce5ceed6aa5987"},{url:"/icons/apple-splash-1284-2778.jpg",revision:"cf8cfe5b6755d044f2280bf9ab58d55d"},{url:"/icons/apple-splash-1334-750.jpg",revision:"eff278e7ff4b14fe20be6ba53fc241a0"},{url:"/icons/apple-splash-1536-2048.jpg",revision:"985af6242f0b009ec1496679dc5b2f91"},{url:"/icons/apple-splash-1620-2160.jpg",revision:"542e118254fb6d5a9cbd9692c53605ef"},{url:"/icons/apple-splash-1668-2224.jpg",revision:"e48c4ac4b92f4f24841dd5d28aa59aec"},{url:"/icons/apple-splash-1668-2388.jpg",revision:"678dc40ce0663a21b3d2331f1d70b2c9"},{url:"/icons/apple-splash-1792-828.jpg",revision:"d66125cd0fca7f5d991ace6f624e60a1"},{url:"/icons/apple-splash-2048-1536.jpg",revision:"7e150494fc5b787a49d299df58ed2aca"},{url:"/icons/apple-splash-2048-2732.jpg",revision:"3018248020cc95a994681a2720d5010c"},{url:"/icons/apple-splash-2160-1620.jpg",revision:"b0db4f024ffba6f820d4ace46420774c"},{url:"/icons/apple-splash-2208-1242.jpg",revision:"b94a5a7b7b862f344dfdcf8065bdc1dc"},{url:"/icons/apple-splash-2224-1668.jpg",revision:"407ff2b9448cb23911f8dcd61189079c"},{url:"/icons/apple-splash-2388-1668.jpg",revision:"e9eac512d40a82487d091d3d85397dad"},{url:"/icons/apple-splash-2436-1125.jpg",revision:"e3714e09bab418c800ae3cc258768b4c"},{url:"/icons/apple-splash-2532-1170.jpg",revision:"f82130d260170cb298115eabcf7557c8"},{url:"/icons/apple-splash-2688-1242.jpg",revision:"ffbc1a0bcaca4cbe957b91cdb13ae6c9"},{url:"/icons/apple-splash-2732-2048.jpg",revision:"65bd0ef5e7f2746924a8d85922ae5a9e"},{url:"/icons/apple-splash-2778-1284.jpg",revision:"1528fdac82027d9f48fb9fa2ae6a6fe9"},{url:"/icons/apple-splash-640-1136.jpg",revision:"2d35fb075db5f106ec943ad3084a5e2b"},{url:"/icons/apple-splash-750-1334.jpg",revision:"5b9b126e27d9c57fa85c8debece16e46"},{url:"/icons/apple-splash-828-1792.jpg",revision:"938d7dbabde4489cfc9039e2e8d6e7c6"},{url:"/icons/manifest-icon-192.png",revision:"68dd6a3f98c01a4d2fb1e5528672817d"},{url:"/icons/manifest-icon-512.png",revision:"7438cfc5de4c18d2a9a65da374f660f0"},{url:"/manifest.json",revision:"9796571fc99d02bb3cf7ae2d78b652cc"},{url:"/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:i})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));