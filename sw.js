if(!self.define){let e,s={};const a=(a,n)=>(a=new URL(a+".js",n).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(n,c)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let i={};const t=e=>a(e,r),d={module:{uri:r},exports:i,require:t};s[r]=Promise.all(n.map((e=>d[e]||t(e)))).then((e=>(c(...e),i)))}}define(["./workbox-6316bd60"],(function(e){"use strict";importScripts("fallback-ITeKqzBt_d-t8cZpxIfY8.js"),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/192.png",revision:"4a8d21d6cfb2f95f67102c12e956b71d"},{url:"/404.svg",revision:"4fc49eb0df0f3f1c2a98c80f2aa1a52f"},{url:"/421.svg",revision:"28b2cc900a170ca3d3c7dd0ff2d1dc83"},{url:"/512.png",revision:"a7462b705d92cb13cfbe64141ca6f211"},{url:"/CNAME",revision:"08f5efa96713c7872bd13006bc423c6c"},{url:"/_next/static/ITeKqzBt_d-t8cZpxIfY8/_buildManifest.js",revision:"c04ed2c59e568931b5afa299e979d0a8"},{url:"/_next/static/ITeKqzBt_d-t8cZpxIfY8/_middlewareManifest.js",revision:"fb2823d66b3e778e04a3f681d0d2fb19"},{url:"/_next/static/ITeKqzBt_d-t8cZpxIfY8/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/1bfc9850.46fb651ee95ba9bb.js",revision:"46fb651ee95ba9bb"},{url:"/_next/static/chunks/252f366e.0bb14475d6c770dc.js",revision:"0bb14475d6c770dc"},{url:"/_next/static/chunks/4.8490b711fe40d7a8.js",revision:"8490b711fe40d7a8"},{url:"/_next/static/chunks/503-c52dcbb1cebf4729.js",revision:"c52dcbb1cebf4729"},{url:"/_next/static/chunks/72fdc299.13ac368d6056aded.js",revision:"13ac368d6056aded"},{url:"/_next/static/chunks/7f0c75c1.7c95ac55b297e6c6.js",revision:"7c95ac55b297e6c6"},{url:"/_next/static/chunks/989.a8f8d309cbf6fbb6.js",revision:"a8f8d309cbf6fbb6"},{url:"/_next/static/chunks/ae51ba48.075bd16c039e9038.js",revision:"075bd16c039e9038"},{url:"/_next/static/chunks/bd1a647f.34bb7a89c9c5bcad.js",revision:"34bb7a89c9c5bcad"},{url:"/_next/static/chunks/d64684d8.a82f92467542074f.js",revision:"a82f92467542074f"},{url:"/_next/static/chunks/d7eeaac4-de4098ce556ddf1a.js",revision:"de4098ce556ddf1a"},{url:"/_next/static/chunks/framework-0471df08d5fed370.js",revision:"0471df08d5fed370"},{url:"/_next/static/chunks/main-1c75b2a932ea3332.js",revision:"1c75b2a932ea3332"},{url:"/_next/static/chunks/pages/404-2f088d42cc55fd13.js",revision:"2f088d42cc55fd13"},{url:"/_next/static/chunks/pages/_app-7941d5abdc71ba00.js",revision:"7941d5abdc71ba00"},{url:"/_next/static/chunks/pages/_error-1995526792b513b2.js",revision:"1995526792b513b2"},{url:"/_next/static/chunks/pages/editor-046a346f391c3f01.js",revision:"046a346f391c3f01"},{url:"/_next/static/chunks/pages/index-a225ee29b62daa0a.js",revision:"a225ee29b62daa0a"},{url:"/_next/static/chunks/polyfills-5cd94c89d3acac5f.js",revision:"99442aec5788bccac9b2f0ead2afdd6b"},{url:"/_next/static/chunks/webpack-d2fa0038bcef331b.js",revision:"d2fa0038bcef331b"},{url:"/_next/static/css/ef85647730d73bc3.css",revision:"ef85647730d73bc3"},{url:"/editor",revision:"ITeKqzBt_d-t8cZpxIfY8"},{url:"/favicon.ico",revision:"c692c04b35a99adb5a7bd7072f02e02b"},{url:"/graphs3.svg",revision:"c6d7787bdc0540545421e9caca2257da"},{url:"/graphs4.svg",revision:"c565f80acb8d2da83ed32828426f1a83"},{url:"/graphs5.svg",revision:"ff5350dfb978487fd22c4b637dbf0630"},{url:"/jsonvisio.png",revision:"3ec7e3af932a78f8bd34826da24927e0"},{url:"/logo.png",revision:"448c52ee96ab697d2d6e7e9a485dc894"},{url:"/manifest.json",revision:"75c291ffb65d4c9159c9178e9b9a71fd"},{url:"/preview_2.png",revision:"63d2ba797be45e79022adbf6dce57d35"},{url:"/robots.txt",revision:"831c12f36005e14de4d977930adb650c"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:n})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s},{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET")}));
