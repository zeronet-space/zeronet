if(!self.define){let e,r={};const a=(a,t)=>(a=new URL(a+".js",t).href,r[a]||new Promise((r=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=r,document.head.appendChild(e)}else e=a,importScripts(a),r()})).then((()=>{let e=r[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(t,s)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(r[n])return;let o={};const i=e=>a(e,n),f={module:{uri:n},exports:o,require:i};r[n]=Promise.all(t.map((e=>f[e]||i(e)))).then((e=>(s(...e),o)))}}define(["./workbox-5afaf374"],(function(e){"use strict";importScripts("fallback-.js"),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static//_buildManifest.js",revision:""},{url:"/_next/static//_middlewareManifest.js",revision:""},{url:"/_next/static//_ssgManifest.js",revision:""},{url:"/_next/static/chunks/17-83e115d4f2b274dc.js",revision:""},{url:"/_next/static/chunks/784-40c3d9222e5d2762.js",revision:""},{url:"/_next/static/chunks/9f96d65d-f1a9c4fd0d636f35.js",revision:""},{url:"/_next/static/chunks/framework-5f4595e5518b5600.js",revision:""},{url:"/_next/static/chunks/main-be146e96f3672a3a.js",revision:""},{url:"/_next/static/chunks/pages/_app-4a5cd5034ba19f29.js",revision:""},{url:"/_next/static/chunks/pages/_error-1995526792b513b2.js",revision:""},{url:"/_next/static/chunks/pages/_offline-37e5697cbf9ce9b8.js",revision:""},{url:"/_next/static/chunks/pages/index-52a961f8bf26e744.js",revision:""},{url:"/_next/static/chunks/pages/post/%5Bid%5D-0230c9cfd7a3ce76.js",revision:""},{url:"/_next/static/chunks/polyfills-5cd94c89d3acac5f.js",revision:""},{url:"/_next/static/chunks/webpack-42cdea76c8170223.js",revision:""},{url:"/_next/static/css/736b0e09b2c7fe5d.css",revision:""},{url:"/_offline",revision:""},{url:"/android-chrome-144x144.png",revision:"4076dcfbf547e829d61c7eafbf3bb6a0"},{url:"/android-chrome-192x192.png",revision:"4ef349b32dee2b9066dd7f202284629f"},{url:"/android-chrome-256x256.png",revision:"cf585dfbbe318d6108dd672b8a6b6c11"},{url:"/android-chrome-36x36.png",revision:"e19b69a297a6cf19157c754f20717aaa"},{url:"/android-chrome-384x384.png",revision:"8fcabe7ff3acec4f4568ee88958eb78f"},{url:"/android-chrome-48x48.png",revision:"3a04d4426f8331fae888bd0058298d96"},{url:"/android-chrome-512x512.png",revision:"af8e5f6d15630cab9ee7f95423c6caa7"},{url:"/android-chrome-72x72.png",revision:"497fc338277cab1bee2d93a1a0955022"},{url:"/android-chrome-96x96.png",revision:"cbebd904cc69d25c5d73f4904b3b5512"},{url:"/apple-touch-icon-114x114-precomposed.png",revision:"91067cd4d424cb213ef976edb7d039a5"},{url:"/apple-touch-icon-114x114.png",revision:"99e64a4d5b9bc7f6c4fa756e9861a6c8"},{url:"/apple-touch-icon-120x120-precomposed.png",revision:"7df863fad8e34655fd45d06204f269bd"},{url:"/apple-touch-icon-120x120.png",revision:"916d2109e47a5f706807fe6b729df199"},{url:"/apple-touch-icon-144x144-precomposed.png",revision:"fd942f77726b266bcab5199212a53e5a"},{url:"/apple-touch-icon-144x144.png",revision:"5d9c37f007e0bde02d60c9fad57c23b2"},{url:"/apple-touch-icon-152x152-precomposed.png",revision:"6b8a10a24cd69323e5abaffa2cf6eeb7"},{url:"/apple-touch-icon-152x152.png",revision:"0506a165903e7fdd6e5cd3d597a5aca1"},{url:"/apple-touch-icon-180x180-precomposed.png",revision:"b94df0e1b1a5538ba1a51e619557ff84"},{url:"/apple-touch-icon-180x180.png",revision:"f03ed7db35df1d7a472e46196714f389"},{url:"/apple-touch-icon-57x57-precomposed.png",revision:"a5111d83ecb4dd18e98be85d13fcda66"},{url:"/apple-touch-icon-57x57.png",revision:"f3431b56c6ad1971885c8b9fb560b785"},{url:"/apple-touch-icon-60x60-precomposed.png",revision:"baedb1c77822c2edd9b8181eef6a52a9"},{url:"/apple-touch-icon-60x60.png",revision:"eca7ae0352da68af0714e4723045bbb2"},{url:"/apple-touch-icon-72x72-precomposed.png",revision:"87600719ddb38d46ed15fbd33c5bea52"},{url:"/apple-touch-icon-72x72.png",revision:"447d31117d37df82f7ace8122beec38d"},{url:"/apple-touch-icon-76x76-precomposed.png",revision:"0b1855d708b4d68d028d6c6a046b8d0e"},{url:"/apple-touch-icon-76x76.png",revision:"e4e5c0496a3313351adb74df5683e7d4"},{url:"/apple-touch-icon-precomposed.png",revision:"b94df0e1b1a5538ba1a51e619557ff84"},{url:"/apple-touch-icon.png",revision:"188687c1a0a4c5e4c8e9283219ea92b4"},{url:"/browserconfig.xml",revision:"ec32d03cb6c5720e78dec6df2c5015a6"},{url:"/favicon-16x16.png",revision:"f9e6ed35d1e02936e2f51f1bc6aca0fb"},{url:"/favicon-32x32.png",revision:"04262da58bb8922984ed14910d9fc658"},{url:"/favicon.ico",revision:"c8ba66f8d4d4f497a3fcbc8645225727"},{url:"/fonts/Montserrat-Black.eot",revision:"52f5a0933d0ff44d39561fdd0e325aea"},{url:"/fonts/Montserrat-Black.svg",revision:"60f83691fe11a567b7fb3f4610cef218"},{url:"/fonts/Montserrat-Black.ttf",revision:"aa2033ab8c0908b6c7de1d4bffa57904"},{url:"/fonts/Montserrat-Black.woff",revision:"92699517c2a4023936ecc896de65a4dd"},{url:"/fonts/Montserrat-Black.woff2",revision:"e8a684b6f5ec405a0490b169b121c7be"},{url:"/fonts/Montserrat-BlackItalic.eot",revision:"a5843a5e76137df55e9aba615c7dcfb1"},{url:"/fonts/Montserrat-BlackItalic.svg",revision:"7e52fefb316a84eafaeae71587ad4e86"},{url:"/fonts/Montserrat-BlackItalic.ttf",revision:"2ea08a1c4ef7e39005fe0e41579d6d89"},{url:"/fonts/Montserrat-BlackItalic.woff",revision:"370f94b3e94939df3237d5121366be59"},{url:"/fonts/Montserrat-BlackItalic.woff2",revision:"c2782f126c039a0fd001dfbb3b1c91bb"},{url:"/fonts/Montserrat-Bold.eot",revision:"15b34cb73629d9bf97d45a8eae057e49"},{url:"/fonts/Montserrat-Bold.svg",revision:"ea08779395a5d7cd31294f9b02af3e0b"},{url:"/fonts/Montserrat-Bold.ttf",revision:"ef6838acecbcd24fc6dbc2fc93616684"},{url:"/fonts/Montserrat-Bold.woff",revision:"71ec1842f1012f7fd920b7e48de2bca7"},{url:"/fonts/Montserrat-Bold.woff2",revision:"e2ad216f3f61e564dce2bfd6927c98fe"},{url:"/fonts/Montserrat-BoldItalic.eot",revision:"cc24f6bdcb72cf424b8c18ee2d1b4730"},{url:"/fonts/Montserrat-BoldItalic.svg",revision:"1af2054e8f6d26412b19582bf1edebdd"},{url:"/fonts/Montserrat-BoldItalic.ttf",revision:"86d3a82c8392f1ba1c5db2c37b48427a"},{url:"/fonts/Montserrat-BoldItalic.woff",revision:"6a94b6b1da822c03e373be8faa75ce16"},{url:"/fonts/Montserrat-BoldItalic.woff2",revision:"476f71485b6da1191f5966f5f6d80a28"},{url:"/fonts/Montserrat-ExtraBold.eot",revision:"b8c6a05275698efb9ddfe75eb2036ba0"},{url:"/fonts/Montserrat-ExtraBold.svg",revision:"5136be1549e2865a2117cc87a86092a3"},{url:"/fonts/Montserrat-ExtraBold.ttf",revision:"d49e14db4c66cffefbceb8c52453af4a"},{url:"/fonts/Montserrat-ExtraBold.woff",revision:"0727656ba1f890a2d77131db1edf4046"},{url:"/fonts/Montserrat-ExtraBold.woff2",revision:"2b4fae1f25dab09691f89304df8cf28f"},{url:"/fonts/Montserrat-ExtraBoldItalic.eot",revision:"c7458154aa9c75f6edb092e1af3ac561"},{url:"/fonts/Montserrat-ExtraBoldItalic.svg",revision:"ff197c9be12f032740b14ecfc959662f"},{url:"/fonts/Montserrat-ExtraBoldItalic.ttf",revision:"c3d1e5cc60435fc4b3c2363d45faed74"},{url:"/fonts/Montserrat-ExtraBoldItalic.woff",revision:"e67c96a605bd72126a72776c1013ba42"},{url:"/fonts/Montserrat-ExtraBoldItalic.woff2",revision:"5af3590c2525f74bdd3bb74461b69e60"},{url:"/fonts/Montserrat-ExtraLight.eot",revision:"c0780cea09608161602e24b0db72cf77"},{url:"/fonts/Montserrat-ExtraLight.svg",revision:"b7c5e18e52df06e98b8986feefbafdc4"},{url:"/fonts/Montserrat-ExtraLight.ttf",revision:"2559c4f6b9c7040144bb062cbafcf14e"},{url:"/fonts/Montserrat-ExtraLight.woff",revision:"a9d3ec340d32af0608940edd7e641c12"},{url:"/fonts/Montserrat-ExtraLight.woff2",revision:"67dea9bbb5f313d9d355c47a9d5bfd5d"},{url:"/fonts/Montserrat-ExtraLightItalic.eot",revision:"1f1e5d1c0e31c8bd3d9cf8d8bf8c19ee"},{url:"/fonts/Montserrat-ExtraLightItalic.svg",revision:"d70c2cf284b3d7663842e638c4d37f64"},{url:"/fonts/Montserrat-ExtraLightItalic.ttf",revision:"d245280f929b7ef1a5d9ddf3be0b66d0"},{url:"/fonts/Montserrat-ExtraLightItalic.woff",revision:"02ccdaeef8233b418c6e404c6f5b14fc"},{url:"/fonts/Montserrat-ExtraLightItalic.woff2",revision:"89edbc63652b85c7ef455422ffdb9784"},{url:"/fonts/Montserrat-Italic.eot",revision:"eb73af052f63832a0770c8bc7a536d7a"},{url:"/fonts/Montserrat-Italic.svg",revision:"3d031ba9b5ce3020e4aae563a870d5af"},{url:"/fonts/Montserrat-Italic.ttf",revision:"6a219bce7b6ce14046a46f3ac2e177c7"},{url:"/fonts/Montserrat-Italic.woff",revision:"3fe44b1b9b5ed6bbc99c2c8948b1f911"},{url:"/fonts/Montserrat-Italic.woff2",revision:"433bc206f134273660e0ede1423a5b99"},{url:"/fonts/Montserrat-Light.eot",revision:"a74319d818fec570181c91fd2aaa01f2"},{url:"/fonts/Montserrat-Light.svg",revision:"390792361bb8f07c8cb27f15c52181e3"},{url:"/fonts/Montserrat-Light.ttf",revision:"eb3cba1c56ad37fe9df3b2d80040508c"},{url:"/fonts/Montserrat-Light.woff",revision:"9b49277bb702430978e9148127788d4f"},{url:"/fonts/Montserrat-Light.woff2",revision:"2b7998f9464393dd70e8f9856a42772d"},{url:"/fonts/Montserrat-LightItalic.eot",revision:"a5b7767f849da86433510dfbbaa8a23e"},{url:"/fonts/Montserrat-LightItalic.svg",revision:"ea1e62f4523279719eb5d73a8e8f3034"},{url:"/fonts/Montserrat-LightItalic.ttf",revision:"654b791e2a1bfe984609f46df4f28c6a"},{url:"/fonts/Montserrat-LightItalic.woff",revision:"01e285ea21e36c17216c7675fcc33b8a"},{url:"/fonts/Montserrat-LightItalic.woff2",revision:"fcb2e07e6595cfa3e4463863774599e5"},{url:"/fonts/Montserrat-Medium.eot",revision:"f777b733782678c12616602fbaa46856"},{url:"/fonts/Montserrat-Medium.svg",revision:"d370d6aa7eac44e232eeb6c57febe198"},{url:"/fonts/Montserrat-Medium.ttf",revision:"06769cee565f5ccf227d70987f640cef"},{url:"/fonts/Montserrat-Medium.woff",revision:"98170ce25af0312a98b0acfec1252676"},{url:"/fonts/Montserrat-Medium.woff2",revision:"a94a59bfd902505667985a58b6dcf5bf"},{url:"/fonts/Montserrat-MediumItalic.eot",revision:"991641e99e39dacfba64a750667de6ee"},{url:"/fonts/Montserrat-MediumItalic.svg",revision:"f1755778d611c75b3b49ab1abfac58fe"},{url:"/fonts/Montserrat-MediumItalic.ttf",revision:"f8b71e33c8292cd08389ef8a7b08f9ac"},{url:"/fonts/Montserrat-MediumItalic.woff",revision:"49ac05f4a51d770f3e7d56523cdcb763"},{url:"/fonts/Montserrat-MediumItalic.woff2",revision:"a34888d5fef6d55c343b41b060fa66c2"},{url:"/fonts/Montserrat-Regular.eot",revision:"4e3971f969366ea026e061ab31625e19"},{url:"/fonts/Montserrat-Regular.svg",revision:"769745f653fd25998f72a8111d155882"},{url:"/fonts/Montserrat-Regular.ttf",revision:"51bcc130df2470e1f1333aa3fdfae9c1"},{url:"/fonts/Montserrat-Regular.woff",revision:"635b59458aae408e202ca65e112f8e39"},{url:"/fonts/Montserrat-Regular.woff2",revision:"797a602d2af2f0c4dc412aa8cbc00045"},{url:"/fonts/Montserrat-SemiBold.eot",revision:"97b780524dbd8ed163119041ab0a52e0"},{url:"/fonts/Montserrat-SemiBold.svg",revision:"66a20c539e8c06c9ca620f0f1b831198"},{url:"/fonts/Montserrat-SemiBold.ttf",revision:"878d887b401fcbcf85e9a2e50ef953c3"},{url:"/fonts/Montserrat-SemiBold.woff",revision:"3df691b1e7cb221fcb4530f1b0b641d0"},{url:"/fonts/Montserrat-SemiBold.woff2",revision:"c4698b42a782ef91ee5f1c1d8030f43f"},{url:"/fonts/Montserrat-SemiBoldItalic.eot",revision:"1838219cc3dda2ec28bc59a9daa4810f"},{url:"/fonts/Montserrat-SemiBoldItalic.svg",revision:"3f65330912348f8d492ca4cd48c12d97"},{url:"/fonts/Montserrat-SemiBoldItalic.ttf",revision:"c06b72752cc0b2333021564b215c9ee1"},{url:"/fonts/Montserrat-SemiBoldItalic.woff",revision:"8ff6ec4a5a7ace0db4a4a37e82a32982"},{url:"/fonts/Montserrat-SemiBoldItalic.woff2",revision:"2e4c1bd8d7622c30a99a0a1fbc9ff596"},{url:"/fonts/Montserrat-Thin.eot",revision:"63b4dff571f18a45cb7c0eab0acbac24"},{url:"/fonts/Montserrat-Thin.svg",revision:"f31d72cf07b7e1cf3da399ea6a32f3a7"},{url:"/fonts/Montserrat-Thin.ttf",revision:"ca1bef492651d0b5e5b4b56294ef91f7"},{url:"/fonts/Montserrat-Thin.woff",revision:"09c1393e7fb73f6fafe06e24e9d1db21"},{url:"/fonts/Montserrat-Thin.woff2",revision:"fb9fb44efb9bb638976a1af5e0fc803b"},{url:"/fonts/Montserrat-ThinItalic.eot",revision:"0f28d852d24ede7ba469cd725eaa2707"},{url:"/fonts/Montserrat-ThinItalic.svg",revision:"6b71dacf0cb0d7687e738579056f1585"},{url:"/fonts/Montserrat-ThinItalic.ttf",revision:"d64424b72cd5812744eb486308007253"},{url:"/fonts/Montserrat-ThinItalic.woff",revision:"026485fa2cea7a8e542f0d3c4fae8afe"},{url:"/fonts/Montserrat-ThinItalic.woff2",revision:"e0c7bb2316baa507516b25f4db530a07"},{url:"/manifest.json",revision:"385709f9a32e6f15cecccd3412b260e6"},{url:"/mstile-144x144.png",revision:"e6982887dd9b12f525f50049b7408738"},{url:"/mstile-150x150.png",revision:"7e66a0de039efa6bc8ca98dbfd195882"},{url:"/mstile-310x150.png",revision:"cf0ab05db352eb8030feddd6e048c4b9"},{url:"/mstile-310x310.png",revision:"5e9445e99fb5d710f389c9b7af6f55db"},{url:"/mstile-70x70.png",revision:"8ea65f75c95c4b1ec84c3b7a7671cdc3"},{url:"/safari-pinned-tab.svg",revision:"a25d439763c4257a6862e7cad461fe22"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:r,event:a,state:t})=>r&&"opaqueredirect"===r.type?new Response(r.body,{status:200,statusText:"OK",headers:r.headers}):r},{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const r=e.pathname;return!r.startsWith("/api/auth/")&&!!r.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET")}));
