!function t(e,n,r){function i(a,s){if(!n[a]){if(!e[a]){var c="function"==typeof require&&require;if(!s&&c)return c(a,!0);if(o)return o(a,!0);var u=new Error("Cannot find module '"+a+"'");throw u.code="MODULE_NOT_FOUND",u}var l=n[a]={exports:{}};e[a][0].call(l.exports,function(t){var n=e[a][1][t];return i(n?n:t)},l,l.exports,t,e,n,r)}return n[a].exports}for(var o="function"==typeof require&&require,a=0;a<r.length;a++)i(r[a]);return i}({1:[function(t,e,n){"use strict";var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};!function(t,i){"object"===("undefined"==typeof n?"undefined":r(n))?e.exports=n=i():"function"==typeof define&&define.amd?define([],i):t.CryptoJS=i()}(void 0,function(){var t=t||function(t,e){var n={},r=n.lib={},i=r.Base=function(){function t(){}return{extend:function(e){t.prototype=this;var n=new t;return e&&n.mixIn(e),n.hasOwnProperty("init")&&this.init!==n.init||(n.init=function(){n.$super.init.apply(this,arguments)}),n.init.prototype=n,n.$super=this,n},create:function(){var t=this.extend();return t.init.apply(t,arguments),t},init:function(){},mixIn:function(t){for(var e in t)t.hasOwnProperty(e)&&(this[e]=t[e]);t.hasOwnProperty("toString")&&(this.toString=t.toString)},clone:function(){return this.init.prototype.extend(this)}}}(),o=r.WordArray=i.extend({init:function(t,n){t=this.words=t||[],n!=e?this.sigBytes=n:this.sigBytes=4*t.length},toString:function(t){return(t||s).stringify(this)},concat:function(t){var e=this.words,n=t.words,r=this.sigBytes,i=t.sigBytes;if(this.clamp(),r%4)for(var o=0;o<i;o++){var a=n[o>>>2]>>>24-o%4*8&255;e[r+o>>>2]|=a<<24-(r+o)%4*8}else for(var o=0;o<i;o+=4)e[r+o>>>2]=n[o>>>2];return this.sigBytes+=i,this},clamp:function(){var e=this.words,n=this.sigBytes;e[n>>>2]&=4294967295<<32-n%4*8,e.length=t.ceil(n/4)},clone:function t(){var t=i.clone.call(this);return t.words=this.words.slice(0),t},random:function(e){for(var n,r=[],i=function(e){var e=e,n=987654321,r=4294967295;return function(){n=36969*(65535&n)+(n>>16)&r,e=18e3*(65535&e)+(e>>16)&r;var i=(n<<16)+e&r;return i/=4294967296,i+=.5,i*(t.random()>.5?1:-1)}},a=0;a<e;a+=4){var s=i(4294967296*(n||t.random()));n=987654071*s(),r.push(4294967296*s()|0)}return new o.init(r,e)}}),a=n.enc={},s=a.Hex={stringify:function(t){for(var e=t.words,n=t.sigBytes,r=[],i=0;i<n;i++){var o=e[i>>>2]>>>24-i%4*8&255;r.push((o>>>4).toString(16)),r.push((15&o).toString(16))}return r.join("")},parse:function(t){for(var e=t.length,n=[],r=0;r<e;r+=2)n[r>>>3]|=parseInt(t.substr(r,2),16)<<24-r%8*4;return new o.init(n,e/2)}},c=a.Latin1={stringify:function(t){for(var e=t.words,n=t.sigBytes,r=[],i=0;i<n;i++){var o=e[i>>>2]>>>24-i%4*8&255;r.push(String.fromCharCode(o))}return r.join("")},parse:function(t){for(var e=t.length,n=[],r=0;r<e;r++)n[r>>>2]|=(255&t.charCodeAt(r))<<24-r%4*8;return new o.init(n,e)}},u=a.Utf8={stringify:function(t){try{return decodeURIComponent(escape(c.stringify(t)))}catch(t){throw new Error("Malformed UTF-8 data")}},parse:function(t){return c.parse(unescape(encodeURIComponent(t)))}},l=r.BufferedBlockAlgorithm=i.extend({reset:function(){this._data=new o.init,this._nDataBytes=0},_append:function(t){"string"==typeof t&&(t=u.parse(t)),this._data.concat(t),this._nDataBytes+=t.sigBytes},_process:function(e){var n=this._data,r=n.words,i=n.sigBytes,a=this.blockSize,s=4*a,c=i/s;c=e?t.ceil(c):t.max((0|c)-this._minBufferSize,0);var u=c*a,l=t.min(4*u,i);if(u){for(var f=0;f<u;f+=a)this._doProcessBlock(r,f);var d=r.splice(0,u);n.sigBytes-=l}return new o.init(d,l)},clone:function t(){var t=i.clone.call(this);return t._data=this._data.clone(),t},_minBufferSize:0}),f=(r.Hasher=l.extend({cfg:i.extend(),init:function(t){this.cfg=this.cfg.extend(t),this.reset()},reset:function(){l.reset.call(this),this._doReset()},update:function(t){return this._append(t),this._process(),this},finalize:function(t){t&&this._append(t);var e=this._doFinalize();return e},blockSize:16,_createHelper:function(t){return function(e,n){return new t.init(n).finalize(e)}},_createHmacHelper:function(t){return function(e,n){return new f.HMAC.init(t,n).finalize(e)}}}),n.algo={});return n}(Math);return t})},{}],2:[function(t,e,n){"use strict";var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};!function(i,o){"object"===("undefined"==typeof n?"undefined":r(n))?e.exports=n=o(t("./core")):"function"==typeof define&&define.amd?define(["./core"],o):o(i.CryptoJS)}(void 0,function(t){return function(){var e=t,n=e.lib,r=n.WordArray,i=n.Hasher,o=e.algo,a=[],s=o.SHA1=i.extend({_doReset:function(){this._hash=new r.init([1732584193,4023233417,2562383102,271733878,3285377520])},_doProcessBlock:function(t,e){for(var n=this._hash.words,r=n[0],i=n[1],o=n[2],s=n[3],c=n[4],u=0;u<80;u++){if(u<16)a[u]=0|t[e+u];else{var l=a[u-3]^a[u-8]^a[u-14]^a[u-16];a[u]=l<<1|l>>>31}var f=(r<<5|r>>>27)+c+a[u];f+=u<20?(i&o|~i&s)+1518500249:u<40?(i^o^s)+1859775393:u<60?(i&o|i&s|o&s)-1894007588:(i^o^s)-899497514,c=s,s=o,o=i<<30|i>>>2,i=r,r=f}n[0]=n[0]+r|0,n[1]=n[1]+i|0,n[2]=n[2]+o|0,n[3]=n[3]+s|0,n[4]=n[4]+c|0},_doFinalize:function(){var t=this._data,e=t.words,n=8*this._nDataBytes,r=8*t.sigBytes;return e[r>>>5]|=128<<24-r%32,e[(r+64>>>9<<4)+14]=Math.floor(n/4294967296),e[(r+64>>>9<<4)+15]=n,t.sigBytes=4*e.length,this._process(),this._hash},clone:function t(){var t=i.clone.call(this);return t._hash=this._hash.clone(),t}});e.SHA1=i._createHelper(s),e.HmacSHA1=i._createHmacHelper(s)}(),t.SHA1})},{"./core":1}],3:[function(t,e,n){(function(r,i){"use strict";var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};!function(t,r){"object"===("undefined"==typeof n?"undefined":o(n))&&"undefined"!=typeof e?e.exports=r():"function"==typeof define&&define.amd?define(r):t.ES6Promise=r()}(void 0,function(){function e(t){return"function"==typeof t||"object"===("undefined"==typeof t?"undefined":o(t))&&null!==t}function n(t){return"function"==typeof t}function a(t){G=t}function s(t){$=t}function c(){return function(){return r.nextTick(h)}}function u(){return"undefined"!=typeof Q?function(){Q(h)}:d()}function l(){var t=0,e=new tt(h),n=document.createTextNode("");return e.observe(n,{characterData:!0}),function(){n.data=t=++t%2}}function f(){var t=new MessageChannel;return t.port1.onmessage=h,function(){return t.port2.postMessage(0)}}function d(){var t=setTimeout;return function(){return t(h,1)}}function h(){for(var t=0;t<J;t+=2){var e=rt[t],n=rt[t+1];e(n),rt[t]=void 0,rt[t+1]=void 0}J=0}function p(){try{var e=t,n=e("vertx");return Q=n.runOnLoop||n.runOnContext,u()}catch(t){return d()}}function g(t,e){var n=arguments,r=this,i=new this.constructor(m);void 0===i[ot]&&j(i);var o=r._state;return o?!function(){var t=n[o-1];$(function(){return P(o,i,t,r._result)})}():A(r,i,t,e),i}function v(t){var e=this;if(t&&"object"===("undefined"==typeof t?"undefined":o(t))&&t.constructor===e)return t;var n=new e(m);return I(n,t),n}function m(){}function y(){return new TypeError("You cannot resolve a promise with itself")}function w(){return new TypeError("A promises callback cannot return that same promise.")}function _(t){try{return t.then}catch(t){return ut.error=t,ut}}function b(t,e,n,r){try{t.call(e,n,r)}catch(t){return t}}function S(t,e,n){$(function(t){var r=!1,i=b(n,e,function(n){r||(r=!0,e!==n?I(t,n):O(t,n))},function(e){r||(r=!0,L(t,e))},"Settle: "+(t._label||" unknown promise"));!r&&i&&(r=!0,L(t,i))},t)}function k(t,e){e._state===st?O(t,e._result):e._state===ct?L(t,e._result):A(e,void 0,function(e){return I(t,e)},function(e){return L(t,e)})}function E(t,e,r){e.constructor===t.constructor&&r===g&&e.constructor.resolve===v?k(t,e):r===ut?L(t,ut.error):void 0===r?O(t,e):n(r)?S(t,e,r):O(t,e)}function I(t,n){t===n?L(t,y()):e(n)?E(t,n,_(n)):O(t,n)}function T(t){t._onerror&&t._onerror(t._result),N(t)}function O(t,e){t._state===at&&(t._result=e,t._state=st,0!==t._subscribers.length&&$(N,t))}function L(t,e){t._state===at&&(t._state=ct,t._result=e,$(T,t))}function A(t,e,n,r){var i=t._subscribers,o=i.length;t._onerror=null,i[o]=e,i[o+st]=n,i[o+ct]=r,0===o&&t._state&&$(N,t)}function N(t){var e=t._subscribers,n=t._state;if(0!==e.length){for(var r=void 0,i=void 0,o=t._result,a=0;a<e.length;a+=3)r=e[a],i=e[a+n],r?P(n,r,i,o):i(o);t._subscribers.length=0}}function x(){this.error=null}function C(t,e){try{return t(e)}catch(t){return lt.error=t,lt}}function P(t,e,r,i){var o=n(r),a=void 0,s=void 0,c=void 0,u=void 0;if(o){if(a=C(r,i),a===lt?(u=!0,s=a.error,a=null):c=!0,e===a)return void L(e,w())}else a=i,c=!0;e._state!==at||(o&&c?I(e,a):u?L(e,s):t===st?O(e,a):t===ct&&L(e,a))}function M(t,e){try{e(function(e){I(t,e)},function(e){L(t,e)})}catch(e){L(t,e)}}function U(){return ft++}function j(t){t[ot]=ft++,t._state=void 0,t._result=void 0,t._subscribers=[]}function R(t,e){this._instanceConstructor=t,this.promise=new t(m),this.promise[ot]||j(this.promise),Y(e)?(this._input=e,this.length=e.length,this._remaining=e.length,this._result=new Array(this.length),0===this.length?O(this.promise,this._result):(this.length=this.length||0,this._enumerate(),0===this._remaining&&O(this.promise,this._result))):L(this.promise,V())}function V(){return new Error("Array Methods must be provided an Array")}function D(t){return new R(this,t).promise}function q(t){var e=this;return new e(Y(t)?function(n,r){for(var i=t.length,o=0;o<i;o++)e.resolve(t[o]).then(n,r)}:function(t,e){return e(new TypeError("You must pass an array to race."))})}function H(t){var e=this,n=new e(m);return L(n,t),n}function B(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}function W(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}function F(t){this[ot]=U(),this._result=this._state=void 0,this._subscribers=[],m!==t&&("function"!=typeof t&&B(),this instanceof F?M(this,t):W())}function z(){var t=void 0;if("undefined"!=typeof i)t=i;else if("undefined"!=typeof self)t=self;else try{t=Function("return this")()}catch(t){throw new Error("polyfill failed because global object is unavailable in this environment")}var e=t.Promise;if(e){var n=null;try{n=Object.prototype.toString.call(e.resolve())}catch(t){}if("[object Promise]"===n&&!e.cast)return}t.Promise=F}var X=void 0;X=Array.isArray?Array.isArray:function(t){return"[object Array]"===Object.prototype.toString.call(t)};var Y=X,J=0,Q=void 0,G=void 0,$=function(t,e){rt[J]=t,rt[J+1]=e,J+=2,2===J&&(G?G(h):it())},K="undefined"!=typeof window?window:void 0,Z=K||{},tt=Z.MutationObserver||Z.WebKitMutationObserver,et="undefined"==typeof self&&"undefined"!=typeof r&&"[object process]"==={}.toString.call(r),nt="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel,rt=new Array(1e3),it=void 0;it=et?c():tt?l():nt?f():void 0===K&&"function"==typeof t?p():d();var ot=Math.random().toString(36).substring(16),at=void 0,st=1,ct=2,ut=new x,lt=new x,ft=0;return R.prototype._enumerate=function(){for(var t=this.length,e=this._input,n=0;this._state===at&&n<t;n++)this._eachEntry(e[n],n)},R.prototype._eachEntry=function(t,e){var n=this._instanceConstructor,r=n.resolve;if(r===v){var i=_(t);if(i===g&&t._state!==at)this._settledAt(t._state,e,t._result);else if("function"!=typeof i)this._remaining--,this._result[e]=t;else if(n===F){var o=new n(m);E(o,t,i),this._willSettleAt(o,e)}else this._willSettleAt(new n(function(e){return e(t)}),e)}else this._willSettleAt(r(t),e)},R.prototype._settledAt=function(t,e,n){var r=this.promise;r._state===at&&(this._remaining--,t===ct?L(r,n):this._result[e]=n),0===this._remaining&&O(r,this._result)},R.prototype._willSettleAt=function(t,e){var n=this;A(t,void 0,function(t){return n._settledAt(st,e,t)},function(t){return n._settledAt(ct,e,t)})},F.all=D,F.race=q,F.resolve=v,F.reject=H,F._setScheduler=a,F._setAsap=s,F._asap=$,F.prototype={constructor:F,then:g,catch:function(t){return this.then(null,t)}},F.polyfill=z,F.Promise=F,F})}).call(this,t("_process"),"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{_process:6}],4:[function(t,e,n){"use strict";e.exports=function(t,e){function n(){if(!o){o=!0;for(var t=0;t<i.length;t++)i[t].fn.call(window,i[t].ctx);i=[]}}function r(){"complete"===document.readyState&&n()}t=t||"docReady",e=e||window;var i=[],o=!1,a=!1;e[t]=function(t,e){if("function"!=typeof t)throw new TypeError("callback for docReady(fn) must be a function");return o?void setTimeout(function(){t(e)},1):(i.push({fn:t,ctx:e}),void("complete"===document.readyState||!document.attachEvent&&"interactive"===document.readyState?setTimeout(n,1):a||(document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):(document.attachEvent("onreadystatechange",r),window.attachEvent("onload",n)),a=!0)))}}("docReady",window)},{}],5:[function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var i=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),o=function(){function t(){r(this,t)}return i(t,[{key:"track",value:function(t,e){var n=function(t){var e=document.createElement("script");e.type="text/javascript",e.async=!0;var n="https:"===document.location.protocol?"https:":"http:";e.src=n+"//trowel.twitch.tv/?data="+t;var r=document.getElementsByTagName("script")[0];r.parentNode.insertBefore(e,r);var i=5e3;setTimeout(function(){e.parentNode.removeChild(e)},i)};setTimeout(function(){var r=btoa(JSON.stringify({event:t,properties:e}));n(r)},0)}}]),t}();e.exports=o},{}],6:[function(t,e,n){function r(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function o(t){if(f===setTimeout)return setTimeout(t,0);if((f===r||!f)&&setTimeout)return f=setTimeout,setTimeout(t,0);try{return f(t,0)}catch(e){try{return f.call(null,t,0)}catch(e){return f.call(this,t,0)}}}function a(t){if(d===clearTimeout)return clearTimeout(t);if((d===i||!d)&&clearTimeout)return d=clearTimeout,clearTimeout(t);try{return d(t)}catch(e){try{return d.call(null,t)}catch(e){return d.call(this,t)}}}function s(){v&&p&&(v=!1,p.length?g=p.concat(g):m=-1,g.length&&c())}function c(){if(!v){var t=o(s);v=!0;for(var e=g.length;e;){for(p=g,g=[];++m<e;)p&&p[m].run();m=-1,e=g.length}p=null,v=!1,a(t)}}function u(t,e){this.fun=t,this.array=e}function l(){}var f,d,h=e.exports={};!function(){try{f="function"==typeof setTimeout?setTimeout:r}catch(t){f=r}try{d="function"==typeof clearTimeout?clearTimeout:i}catch(t){d=i}}();var p,g=[],v=!1,m=-1;h.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];g.push(new u(t,e)),1!==g.length||v||o(c)},u.prototype.run=function(){this.fun.apply(null,this.array)},h.title="browser",h.browser=!0,h.env={},h.argv=[],h.version="",h.versions={},h.on=l,h.addListener=l,h.once=l,h.off=l,h.removeListener=l,h.removeAllListeners=l,h.emit=l,h.binding=function(t){throw new Error("process.binding is not supported")},h.cwd=function(){return"/"},h.chdir=function(t){throw new Error("process.chdir is not supported")},h.umask=function(){return 0}},{}],7:[function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var i=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),o=t("../bower_components/crypto-js/sha1"),a=function(){function t(){r(this,t)}return i(t,[{key:"_generateRandomString",value:function(t){for(var e=new Array(t),n=0;n<t;n++)e[n]=String.fromCharCode(Math.floor(27*Math.random())+65);return e.join("")}},{key:"createUniqueId",value:function(t,e){e=e||16;var n=t||"";return n+=this._generateRandomString(32)+(new Date).toLocaleTimeString(),o(n).toString().substring(0,e)}},{key:"getOrCreateDeviceId",value:function(){return Landscape.getCookie("device_id")?Landscape.getCookie("device_id"):Landscape.makeLandscapeServiceRequest().then(function(){return Landscape.getCookie("device_id")})}},{key:"getOrCreateSessionUniqueId",value:function(){return Landscape.getCookie("session_unique_id")||Landscape.setCookie("session_unique_id",this.createUniqueId()),Landscape.getCookie("session_unique_id")}},{key:"getOrCreateLocalStorageUniqueId",value:function(){return Landscape.storage.get("localstorage_unique_id")||Landscape.storage.set("localstorage_unique_id",this.createUniqueId()),Landscape.storage.get("localstorage_unique_id")}},{key:"getOrCreateSessionStorageUniqueId",value:function(){var t=Landscape.storage.get("sessionstorage_unique_id",{storage:"sessionStorage"});return t||(t=this.createUniqueId(),Landscape.storage.set("sessionstorage_unique_id",t,{storage:"sessionStorage"})),t}}]),t}();e.exports=a},{"../bower_components/crypto-js/sha1":2}],8:[function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var i=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),o=t("./landscape.tracking"),a=t("./landscape.ids"),s=t("./landscape.storage"),c=t("./landscape.twitch"),u=t("../bower_components/es6-promise/es6-promise"),l=(t("../lib/docready.js"),function(){function t(){r(this,t),this.tracking=new o,this.ids=new a,this.storage=new s,this.twitch=new c,this.MS_IN_SEC=1e3,this.SEC_IN_MIN=60,this.MIN_IN_HOUR=60,this.HOURS_IN_DAY=24,this.MS_IN_DAY=this.HOURS_IN_DAY*this.MIN_IN_HOUR*this.SEC_IN_MIN*this.MS_IN_SEC}return i(t,[{key:"setCookie",value:function(t,e,n){var r="";if(n){var i=new Date;i.setTime(i.getTime()+n*this.MS_IN_DAY),r="expires="+i.toUTCString()}document.cookie=t+"="+e+"; "+r+"; path=/"}},{key:"getCookie",value:function(t){for(var e=t+"=",n=document.cookie.split(";"),r=0,i=n.length;r<i;r++){for(var o=n[r];" "==o.charAt(0);)o=o.substring(1);if(o.indexOf(e)!=-1)return o.substring(e.length,o.length)}return""}},{key:"ajax",value:function(t,e,n){return new u(function(r,i){try{n=n||{};var o,a=e?"POST":"GET";o=window.XMLHttpRequest?new XMLHttpRequest:new ActiveXObject("Microsoft.XMLHTTP"),o.open(a,t,!0),o.withCredentials=void 0===n.withCredentials||n.withCredentials,o.send(e),o.onreadystatechange=function(){var t=4,e=200;o.readyState===t&&(o.status===e?r(o.responseText):i(o.responseText))}}catch(t){i(t)}})}},{key:"makeLandscapeServiceRequest",value:function(){return this._landscapeServicePromise||(this._landscapeServicePromise=this.ajax("https://deviceidshare.twitch.tv/",null,{withCredentials:!0}).then(function(t){var e=JSON.parse(t);this.setCookie("device_id",e.unique_id,3650)}.bind(this)).catch(function(){this.getCookie("device_id")||this.setCookie("device_id",this.ids.createUniqueId(void 0,32),3650)}.bind(this))),this._landscapeServicePromise}}]),t}());window.Landscape=window.Landscape||new l,window.Landscape.tracking.trackPageView(),window.Landscape.twitch.trackExposure(document)},{"../bower_components/es6-promise/es6-promise":3,"../lib/docready.js":4,"./landscape.ids":7,"./landscape.storage":9,"./landscape.tracking":10,"./landscape.twitch":11}],9:[function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var i=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),o=function(){function t(){r(this,t),this._localStorage=null,this._sessionStorage=null}return i(t,[{key:"_buildMemoryStorage",value:function(){return{_storage:{},setItem:function(t,e){this._storage[t]=e},getItem:function(t){return this._storage[t]},removeItem:function(t){delete this._storage[t]}}}},{key:"getLocalStorage",value:function(){if(null===this._localStorage)try{var t=new Date;(this._localStorage=window.localStorage).setItem(t,t);var e=this._localStorage.getItem(t)!=t;this._localStorage.removeItem(t),e&&(this._localStorage=this._buildMemoryStorage())}catch(t){this._localStorage=this._buildMemoryStorage()}return this._localStorage}},{key:"getSessionStorage",value:function(){if(null===this._sessionStorage)try{var t=new Date;(this._sessionStorage=window.sessionStorage).setItem(t,t);var e=this._sessionStorage.getItem(t)!=t;this._sessionStorage.removeItem(t),e&&(this._sessionStorage=this._buildMemoryStorage())}catch(t){this._sessionStorage=this._buildMemoryStorage()}return this._sessionStorage}},{key:"_storageForOptions",value:function(t){return t&&"sessionStorage"===t.storage?this.getSessionStorage():this.getLocalStorage()}},{key:"setObject",value:function(t,e,n){this.set(t,JSON.stringify(e),n)}},{key:"getObject",value:function(t,e){var n=this.get(t,e),r=null;if(n&&""!==n)try{r=JSON.parse(n)}catch(t){}return r}},{key:"set",value:function(t,e,n){this._storageForOptions(n).setItem(t,e)}},{key:"get",value:function(t,e){return this._storageForOptions(e).getItem(t)}},{key:"del",value:function(t,e){this._storageForOptions(e).removeItem(t)}}]),t}();e.exports=o},{}],10:[function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var i=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),o=t("../lib/spade"),a=t("./promise.props"),s=function(){function t(){r(this,t),this.Libraries={MIXPANEL:1,SPADE:2,SPADE_AND_MIXPANEL:3},this.spade=new o}return i(t,[{key:"trackEvent",value:function(t,e,n){e=e||{},e.device_id=Landscape.ids.getOrCreateDeviceId(),e.tab_session_id=Landscape.ids.getOrCreateSessionStorageUniqueId(),e.page_session_id=this.getPageSessionId(),e.time=(new Date).getTime()/1e3,a(e).then(function(e){n&this.Libraries.SPADE&&this.trackEventViaSpade(t,e),n&this.Libraries.MIXPANEL&&this.trackEventViaMixPanel(t,e),this.logEvent(t,e,n)}.bind(this))}},{key:"trackPageView",value:function(t){if(t=t||{},t.platform="web",t.viewport_width=Math.max(document.documentElement.clientWidth,window.innerWidth||0),t.viewport_height=Math.max(document.documentElement.clientHeight,window.innerHeight||0),window.document.referrer){var e=new RegExp("^https?://([^/]+)").exec(window.document.referrer);t.referrer_host=e[1]||"",t.referrer_domain=this.getDomainName(t.referrer_host)}else t.referrer_host="",t.referrer_domain="";t.referrer_url=(window.document.referrer||"").substring(0,256),t.protocol=window.location.protocol||"",t.host=window.location.hostname||"",t.domain=this.getDomainName(window.location.hostname),t.path=window.document.location.pathname+window.document.location.search,t.browser=navigator.userAgent,t.language=navigator.language;var n=this.getAuthProps(t.domain);n?(t.user_id=n.curseId,t.login=n.curseUserName,t.twitch_id=n.twitchId,t.twitch_login=n.twitchUserName):(t.login=this.getLoginName(t.domain),t.user_id=this.getUserId(t.domain)),this.trackEvent("cm_pageview",t,this.Libraries.SPADE)}},{key:"trackTwitchExposure",value:function(t){t=t||{},t.host=window.location.hostname||"",t.domain=this.getDomainName(window.location.hostname),t.path=window.document.location.pathname+window.document.location.search,this.trackEvent("cm_twitch_exposure",t,this.Libraries.SPADE)}},{key:"getPageSessionId",value:function(){return void 0===this.pageSessionId&&(this.pageSessionId=Landscape.ids.createUniqueId()),this.pageSessionId}},{key:"getTrackingLog",value:function(){return Landscape.storage.getObject("trackingLog")}},{key:"logEvent",value:function(t,e,n){var r=Landscape.storage.getObject("trackingLog")||[],i=this.getTrackingLogLength();r.length>i&&r.shift();var o=new Date;r.push({event:t,properties:e,createdOn:o,library:n}),this.debugEnabled()&&(console.group("Landscape.tracking.trackEvent"),console.log("event:",t),console.log("properties:",e),console.log("library:",n),console.groupEnd()),Landscape.storage.setObject("trackingLog",r)}},{key:"trackEventViaMixPanel",value:function(t,e){e.token="3857da20a3c2b03bb017825a6d1bce3e",e.distinct_id||(e.distinct_id=e.device_id),e.time=Date.now();var n={event:t,properties:e},r="//api.mixpanel.com/track";Landscape.ajax(r,"data="+btoa(JSON.stringify(n)),null,{crossDomain:!0})}},{key:"trackEventViaSpade",value:function(t,e){this.spade.track(t,e)}},{key:"setTrackingLogLength",value:function(t){Landscape.storage.setObject("trackingLogLength",t)}},{key:"getTrackingLogLength",value:function(){return Landscape.storage.getObject("trackingLogLength")||5}},{key:"debugEnabled",value:function(t){var e="Landscape.tracking.log.debugEnabled";return void 0===t?Landscape.storage.getObject(e)===!0:void Landscape.storage.setObject(e,t)}},{key:"getDomainName",value:function(t){return t.substring(t.lastIndexOf(".",t.lastIndexOf(".")-1)+1)}},{key:"getLoginName",value:function(t){switch(t){default:return Landscape.getCookie("User.Username")}}},{key:"getUserId",value:function(t){switch(t){default:return Landscape.getCookie("User.ID")}}},{key:"getAuthProps",value:function(t){try{switch(t){default:for(var e={},n=Landscape.getCookie("User"),r=n.split("&"),i=0;i<r.length;i++){var o=r[i].split("=");switch(o[0]){case"UserID":var a=Number(o[1]);e.curseId=0==a?null:a;break;case"TwitchID":var s=Number(o[1]);e.twitchId=0==s?null:s;break;case"UserName":e.curseUserName=o[1];break;case"TwitchDisplayName":e.twitchUserName=o[1]}}return e}}catch(t){return null}}}]),t}();e.exports=s},{"../lib/spade":5,"./promise.props":12}],11:[function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var i=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),o=(t("../lib/docready.js"),t("./scrollspy.js"),function(){function t(){r(this,t),this.Exposure={OPPORTUNITY:1,EXPOSURE:2,CONVERSION:3},this.EmbedType={EMBED:1,TRIGGER:2},this.scrollSpy=window.scrollSpy,this.scrollSpy.initialize(0),this.mutationQueue=[],this.trackedElements=[]}return i(t,[{key:"getAttributeFromNodeOrParent",value:function(t,e){return t.getAttribute(e)||t.parentNode.getAttribute(e)}},{key:"trackIframes",value:function(t){try{var e=/(player|clips)\.twitch\.tv\/(embed)?(\?(video|channel|clip)=)?(\w+)?/,n=Array.from(t.getElementsByTagName("iframe"));"IFRAME"==t.tagName&&n.push(t);for(var r=0;r<n.length;r++){var i=e.exec(n[r].src);if(i&&!n[r].getAttribute("data-landscape-bound")){var o,a;i&&6==i.length&&("player"==i[1]?o=i[4]:"clips"==i[1]&&(o="clip"),a=i[5]);var s={type:o,feature:this.getAttributeFromNodeOrParent(n[r],"data-twitch-feature"),exp_version:this.getAttributeFromNodeOrParent(n[r],"data-twitch-exp-version"),embed_content:a,exp_type:window.Landscape.twitch.Exposure.OPPORTUNITY,embed_type:this.EmbedType.EMBED};window.Landscape.tracking.trackTwitchExposure(s),this.addListener(this.scrollSpy.statusEvents.IN_VIEW,s,n[r],window.Landscape.twitch.Exposure.EXPOSURE),this.scrollSpy.watch(n[r]),n[r].setAttribute("data-landscape-bound","true")}}}catch(t){Landscape.tracking.debugEnabled()&&console.error(t)}}},{key:"getTriggerProps",value:function(t){return{type:this.getAttributeFromNodeOrParent(t,"data-twitch-embed-type"),feature:t.getAttribute("data-twitch-feature")?t.getAttribute("data-twitch-feature"):null,exp_version:t.getAttribute("data-twitch-exp-version")?t.getAttribute("data-twitch-exp-version"):null,embed_content:t.getAttribute("data-twitch-id")?t.getAttribute("data-twitch-id"):null,embed_type:this.EmbedType.TRIGGER}}},{key:"addListener",value:function(t,e,n,r){var i=function n(){var i=e;i.exp_type=r,window.Landscape.tracking.trackTwitchExposure(i),this.removeEventListener(t,n,!1)};n.addEventListener(t,i)}},{key:"addMutationObserver",value:function(){var t=document.querySelector("body"),e=function(t){this.mutationQueue=this.mutationQueue.concat(t),this.mutationTimeout||(this.mutationTimeout=setTimeout(this.processMutations.bind(this),50))},n=new MutationObserver(e.bind(this));n.observe(t,{childList:!0,subtree:!0})}},{key:"processMutations",value:function(){var t=this.mutationQueue;this.mutationQueue=[];for(var e=0;e<t.length;e++){var n=t[e];if(n.addedNodes&&n.addedNodes.length>0)for(var r=0;r<n.addedNodes.length;r++)this.trackIframes(n.addedNodes[r]),this.trackTriggers(n.addedNodes[r])}this.mutationQueue=[],this.mutationTimeout=void 0}},{key:"trackTriggers",value:function(t){try{var e=t.querySelectorAll?Array.from(t.querySelectorAll(".twitch-embed-trigger")):[];t.matches&&t.matches(".twitch-embed-trigger")&&e.push(t);for(var n=0,r=e[n];n<e.length;n++)if(!r.getAttribute("data-landscape-bound")){var i=this.getTriggerProps(r);i.exp_type=window.Landscape.twitch.Exposure.OPPORTUNITY,window.Landscape.tracking.trackTwitchExposure(i),this.addListener(this.scrollSpy.statusEvents.IN_VIEW,i,r,window.Landscape.twitch.Exposure.EXPOSURE),this.scrollSpy.watch(r),this.addListener("click",i,r,window.Landscape.twitch.Exposure.CONVERSION),this.trackedElements[r]=1,r.setAttribute("data-landscape-bound","true")}}catch(t){Landscape.tracking.debugEnabled()&&console.error(t)}}},{key:"trackExposure",value:function(t){window.docReady(function(){t==document&&this.addMutationObserver(),this.trackIframes(t),this.trackTriggers(t)}.bind(this))}}]),t}());e.exports=o},{"../lib/docready.js":4,"./scrollspy.js":13}],12:[function(t,e,n){"use strict";e.exports=function(t){return Promise.all(Object.keys(t).map(function(e){return Promise.resolve(t[e]).then(function(t){var n={};return n[e]=t,n})})).then(function(t){return t.reduce(function(t,e){var n=Object.keys(e)[0];return t[n]=e[n],t},{})})}},{}],13:[function(t,e,n){"use strict";!function(t,e){function n(t,e,n){e||(e=250);var r,i;return function(){var o=n||this,a=+new Date,s=arguments;r&&a<r+e?(clearTimeout(i),i=setTimeout(function(){r=a,t.apply(o,s)},e+r-a)):(r=a,t.apply(o,s))}}var r=1,i=!1,o={OUT_OF_VIEW:"OUT_OF_VIEW",ALMOST_IN_VIEW:"ALMOST_IN_VIEW",IN_VIEW:"IN_VIEW"},a={},s={},c=-1,u={statusEvents:{OUT_OF_VIEW:"scrollSpyOutOfView",ALMOST_IN_VIEW:"scrollSpyAlmostInView",IN_VIEW:"scrollSpyInView"},Offset:0,Initialized:!1,TickIntervalRate:1500,ThrottleRate:250,initialize:function(t){t=t||{},u.Offset=t.offset&&t.offset>0?t.offset:0,u.TickIntervalRate=t.tickIntervalRate?t.tickIntervalRate:u.TickIntervalRate,u.ThrottleRate=t.throttleRate?t.throttleRate:u.ThrottleRate,e.addEventListener("scroll",n(u.scheduleUpdateInViewStatus,u.ThrottleRate)),e.addEventListener("resize",n(u.scheduleUpdateInViewStatus,u.ThrottleRate))},getElementsCount:function(){return Object.keys(a).length},isElementWatched:function(t){for(var e=Object.keys(a),n=0;n<e.length;n++){var r=e[n],i=a[r];if(i===t)return!0}return!1},watch:function(t){t&&t.nodeName&&!u.isElementWatched(t)&&(a[r]=t,u.updateInViewStatus(t,r),u.addTickInterval(),r++)},unwatch:function(t){for(var e={},n=Object.keys(a),r=0;r<n.length;r++){var i=n[r],o=a[i];o!==t?e[i]=o:delete s[i]}a=e,u.getElementsCount()||u.removeTickInterval()},scheduleUpdateInViewStatus:function(){!i&&u.getElementsCount()&&(e.requestAnimationFrame(function(){
for(var t=Object.keys(a),e=0;e<t.length;e++){var n=t[e],r=a[n];u.updateInViewStatus(r,n)}i=!1}),i=!0)},addTickInterval:function(){c>-1||(c=setInterval(u.scheduleUpdateInViewStatus,u.TickIntervalRate))},removeTickInterval:function(){clearInterval(c),c=-1},getInViewStatus:function(t){var n=t.getBoundingClientRect();return 0===n.width||0===n.height?o.OUT_OF_VIEW:n.top>=0&&n.top<e.innerHeight||n.bottom>0&&n.bottom<=e.innerHeight||n.top<0&&n.bottom>e.innerHeight?o.IN_VIEW:!(n.bottom<0||n.top>e.innerHeight)||n.top<0&&n.top>e.innerHeight?o.OUT_OF_VIEW:u.Offset>0&&(n.top<=u.Offset+e.innerHeight&&n.top>e.innerHeight||n.bottom<0&&Math.abs(n.bottom)<u.Offset)?o.ALMOST_IN_VIEW:o.OUT_OF_VIEW},updateInViewStatus:function(t,e){var n=s[e],r=u.getInViewStatus(t);n!==r&&(s[e]=r,u.fireEvent(t,r))},fireEvent:function(e,n){var r;switch(n){default:case o.OUT_OF_VIEW:r=u.statusEvents.OUT_OF_VIEW;break;case o.ALMOST_IN_VIEW:r=u.statusEvents.ALMOST_IN_VIEW;break;case o.IN_VIEW:r=u.statusEvents.IN_VIEW}var i=t.createEvent("Event");i.initEvent(r,!0,!0),e.dispatchEvent(new Event(r))}};e.scrollSpy=u}(document,window)},{}]},{},[8]);