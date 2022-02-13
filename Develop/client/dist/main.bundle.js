(()=>{"use strict";try{self["workbox:window:6.4.1"]&&_()}catch(e){}function e(e,n){return new Promise((function(t){var r=new MessageChannel;r.port1.onmessage=function(e){t(e.data)},e.postMessage(n,[r.port2])}))}function n(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function t(e,t){var r;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=function(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var o=0;return function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(r=e[Symbol.iterator]()).next.bind(r)}try{self["workbox:core:6.4.1"]&&_()}catch(e){}var r=function(){var e=this;this.promise=new Promise((function(n,t){e.resolve=n,e.reject=t}))};function o(e,n){var t=location.href;return new URL(e,t).href===new URL(n,t).href}var i=function(e,n){this.type=e,Object.assign(this,n)};function a(e,n,t){return t?n?n(e):e:(e&&e.then||(e=Promise.resolve(e)),n?e.then(n):e)}function s(){}var c={type:"SKIP_WAITING"};function u(e,n){if(!n)return e&&e.then?e.then(s):Promise.resolve()}var d=function(n){var t,s;function d(e,t){var s,c;return void 0===t&&(t={}),(s=n.call(this)||this).nn={},s.tn=0,s.rn=new r,s.en=new r,s.on=new r,s.un=0,s.an=new Set,s.cn=function(){var e=s.fn,n=e.installing;s.tn>0||!o(n.scriptURL,s.sn.toString())||performance.now()>s.un+6e4?(s.vn=n,e.removeEventListener("updatefound",s.cn)):(s.hn=n,s.an.add(n),s.rn.resolve(n)),++s.tn,n.addEventListener("statechange",s.ln)},s.ln=function(e){var n=s.fn,t=e.target,r=t.state,o=t===s.vn,a={sw:t,isExternal:o,originalEvent:e};!o&&s.mn&&(a.isUpdate=!0),s.dispatchEvent(new i(r,a)),"installed"===r?s.wn=self.setTimeout((function(){"installed"===r&&n.waiting===t&&s.dispatchEvent(new i("waiting",a))}),200):"activating"===r&&(clearTimeout(s.wn),o||s.en.resolve(t))},s.dn=function(e){var n=s.hn,t=n!==navigator.serviceWorker.controller;s.dispatchEvent(new i("controlling",{isExternal:t,originalEvent:e,sw:n,isUpdate:s.mn})),t||s.on.resolve(n)},s.gn=(c=function(e){var n=e.data,t=e.ports,r=e.source;return a(s.getSW(),(function(){s.an.has(r)&&s.dispatchEvent(new i("message",{data:n,originalEvent:e,ports:t,sw:r}))}))},function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];try{return Promise.resolve(c.apply(this,e))}catch(e){return Promise.reject(e)}}),s.sn=e,s.nn=t,navigator.serviceWorker.addEventListener("message",s.gn),s}s=n,(t=d).prototype=Object.create(s.prototype),t.prototype.constructor=t,t.__proto__=s;var l,f=d.prototype;return f.register=function(e){var n=(void 0===e?{}:e).immediate,t=void 0!==n&&n;try{var r=this;return function(e,n){var t=e();return t&&t.then?t.then(n):n()}((function(){if(!t&&"complete"!==document.readyState)return u(new Promise((function(e){return window.addEventListener("load",e)})))}),(function(){return r.mn=Boolean(navigator.serviceWorker.controller),r.yn=r.pn(),a(r.bn(),(function(e){r.fn=e,r.yn&&(r.hn=r.yn,r.en.resolve(r.yn),r.on.resolve(r.yn),r.yn.addEventListener("statechange",r.ln,{once:!0}));var n=r.fn.waiting;return n&&o(n.scriptURL,r.sn.toString())&&(r.hn=n,Promise.resolve().then((function(){r.dispatchEvent(new i("waiting",{sw:n,wasWaitingBeforeRegister:!0}))})).then((function(){}))),r.hn&&(r.rn.resolve(r.hn),r.an.add(r.hn)),r.fn.addEventListener("updatefound",r.cn),navigator.serviceWorker.addEventListener("controllerchange",r.dn),r.fn}))}))}catch(e){return Promise.reject(e)}},f.update=function(){try{return this.fn?u(this.fn.update()):void 0}catch(e){return Promise.reject(e)}},f.getSW=function(){return void 0!==this.hn?Promise.resolve(this.hn):this.rn.promise},f.messageSW=function(n){try{return a(this.getSW(),(function(t){return e(t,n)}))}catch(e){return Promise.reject(e)}},f.messageSkipWaiting=function(){this.fn&&this.fn.waiting&&e(this.fn.waiting,c)},f.pn=function(){var e=navigator.serviceWorker.controller;return e&&o(e.scriptURL,this.sn.toString())?e:void 0},f.bn=function(){try{var e=this;return function(e,n){try{var t=e()}catch(e){return n(e)}return t&&t.then?t.then(void 0,n):t}((function(){return a(navigator.serviceWorker.register(e.sn,e.nn),(function(n){return e.un=performance.now(),n}))}),(function(e){throw e}))}catch(e){return Promise.reject(e)}},(l=[{key:"active",get:function(){return this.en.promise}},{key:"controlling",get:function(){return this.on.promise}}])&&function(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}(d.prototype,l),d}(function(){function e(){this.Pn=new Map}var n=e.prototype;return n.addEventListener=function(e,n){this.Sn(e).add(n)},n.removeEventListener=function(e,n){this.Sn(e).delete(n)},n.dispatchEvent=function(e){e.target=this;for(var n,r=t(this.Sn(e.type));!(n=r()).done;)(0,n.value)(e)},n.Sn=function(e){return this.Pn.has(e)||this.Pn.set(e,new Set),this.Pn.get(e)},e}());let l,f;const v=new WeakMap,h=new WeakMap,p=new WeakMap,g=new WeakMap,m=new WeakMap;let y={get(e,n,t){if(e instanceof IDBTransaction){if("done"===n)return h.get(e);if("objectStoreNames"===n)return e.objectStoreNames||p.get(e);if("store"===n)return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return b(e[n])},set:(e,n,t)=>(e[n]=t,!0),has:(e,n)=>e instanceof IDBTransaction&&("done"===n||"store"===n)||n in e};function w(e){return"function"==typeof e?(n=e)!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(f||(f=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(n)?function(...e){return n.apply(E(this),e),b(v.get(this))}:function(...e){return b(n.apply(E(this),e))}:function(e,...t){const r=n.call(E(this),e,...t);return p.set(r,e.sort?e.sort():[e]),b(r)}:(e instanceof IDBTransaction&&function(e){if(h.has(e))return;const n=new Promise(((n,t)=>{const r=()=>{e.removeEventListener("complete",o),e.removeEventListener("error",i),e.removeEventListener("abort",i)},o=()=>{n(),r()},i=()=>{t(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",o),e.addEventListener("error",i),e.addEventListener("abort",i)}));h.set(e,n)}(e),t=e,(l||(l=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((e=>t instanceof e))?new Proxy(e,y):e);var n,t}function b(e){if(e instanceof IDBRequest)return function(e){const n=new Promise(((n,t)=>{const r=()=>{e.removeEventListener("success",o),e.removeEventListener("error",i)},o=()=>{n(b(e.result)),r()},i=()=>{t(e.error),r()};e.addEventListener("success",o),e.addEventListener("error",i)}));return n.then((n=>{n instanceof IDBCursor&&v.set(n,e)})).catch((()=>{})),m.set(n,e),n}(e);if(g.has(e))return g.get(e);const n=w(e);return n!==e&&(g.set(e,n),m.set(n,e)),n}const E=e=>m.get(e),S=["get","getKey","getAll","getAllKeys","count"],I=["put","add","delete","clear"],L=new Map;function j(e,n){if(!(e instanceof IDBDatabase)||n in e||"string"!=typeof n)return;if(L.get(n))return L.get(n);const t=n.replace(/FromIndex$/,""),r=n!==t,o=I.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!o&&!S.includes(t))return;const i=async function(e,...n){const i=this.transaction(e,o?"readwrite":"readonly");let a=i.store;return r&&(a=a.index(n.shift())),(await Promise.all([a[t](...n),o&&i.done]))[0]};return L.set(n,i),i}var D;D=y,y={...D,get:(e,n,t)=>j(e,n)||D.get(e,n,t),has:(e,n)=>!!j(e,n)||D.has(e,n)},(async()=>{!function(e,n,{blocked:t,upgrade:r,blocking:o,terminated:i}={}){const a=indexedDB.open(e,n),s=b(a);r&&a.addEventListener("upgradeneeded",(e=>{r(b(a.result),e.oldVersion,e.newVersion,b(a.transaction))})),t&&a.addEventListener("blocked",(()=>t())),s.then((e=>{i&&e.addEventListener("close",(()=>i())),o&&e.addEventListener("versionchange",(()=>o()))})).catch((()=>{}))}("jate",1,{upgrade(e){e.objectStoreNames.contains("jate")?console.log("jate database already exists"):(e.createObjectStore("jate",{keyPath:"id",autoIncrement:!0}),console.log("jate database created"))}})})();const k=document.querySelector("#main");k.innerHTML="",void 0===new class{constructor(){const e=localStorage.getItem("content");if("undefined"==typeof CodeMirror)throw new Error("CodeMirror is not loaded");this.editor=CodeMirror(document.querySelector("#main"),{value:"",mode:"javascript",theme:"monokai",lineNumbers:!0,lineWrapping:!0,autofocus:!0,indentUnit:2,tabSize:2}),(async()=>console.error("getDb not implemented"))().then((n=>{console.info("Loaded data from IndexedDB, injecting into editor"),this.editor.setValue(n||e||"\n/*\n       _____  ____________\n      / /   |/_  __/ ____/\n __  / / /| | / / / __/   \n/ /_/ / ___ |/ / / /___   \n ____/_/  |_/_/ /_____/   \njust another text editor\n*/                          \n")})),this.editor.on("change",(()=>{localStorage.setItem("content",this.editor.getValue())})),this.editor.on("blur",(()=>{console.log("The editor has lost focus"),(async e=>{console.error("putDb not implemented")})(localStorage.getItem("content"))}))}}&&(()=>{const e=document.createElement("div");e.classList.add("spinner"),e.innerHTML='\n  <div class="loading-container">\n  <div class="loading-spinner" />\n  </div>\n  ',k.appendChild(e)})(),"serviceWorker"in navigator?new d("/service-worker.js").register():console.error("Service workers are not supported in this browser.")})();