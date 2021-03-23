(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
(function (global,setImmediate){(function (){
"use strict";function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}!function(e,t){"object"==("undefined"==typeof exports?"undefined":_typeof(exports))&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e=e||self).Vue=t()}(void 0,function(){var f=Object.freeze({});function N(e){return null==e}function L(e){return null!=e}function $(e){return!0===e}function c(e){return"string"==typeof e||"number"==typeof e||"symbol"==_typeof(e)||"boolean"==typeof e}function P(e){return null!==e&&"object"==_typeof(e)}var n=Object.prototype.toString;function l(e){return"[object Object]"===n.call(e)}function r(e){var t=parseFloat(String(e));return 0<=t&&Math.floor(t)===t&&isFinite(e)}function h(e){return L(e)&&"function"==typeof e.then&&"function"==typeof e.catch}function t(e){return null==e?"":Array.isArray(e)||l(e)&&e.toString===n?JSON.stringify(e,null,2):String(e)}function M(e){var t=parseFloat(e);return isNaN(t)?e:t}function s(e,t){for(var n=Object.create(null),i=e.split(","),r=0;r<i.length;r++)n[i[r]]=!0;return t?function(e){return n[e.toLowerCase()]}:function(e){return n[e]}}var u=s("slot,component",!0),d=s("key,ref,slot,slot-scope,is");function v(e,t){if(e.length){t=e.indexOf(t);if(-1<t)return e.splice(t,1)}}var i=Object.prototype.hasOwnProperty;function p(e,t){return i.call(e,t)}function e(t){var n=Object.create(null);return function(e){return n[e]||(n[e]=t(e))}}var o=/-(\w)/g,m=e(function(e){return e.replace(o,function(e,t){return t?t.toUpperCase():""})}),a=e(function(e){return e.charAt(0).toUpperCase()+e.slice(1)}),g=/\B([A-Z])/g,y=e(function(e){return e.replace(g,"-$1").toLowerCase()}),b=Function.prototype.bind?function(e,t){return e.bind(t)}:function(n,i){function e(e){var t=arguments.length;return t?1<t?n.apply(i,arguments):n.call(i,e):n.call(i)}return e._length=n.length,e};function w(e,t){t=t||0;for(var n=e.length-t,i=new Array(n);n--;)i[n]=e[n+t];return i}function x(e,t){for(var n in t)e[n]=t[n];return e}function k(e){for(var t={},n=0;n<e.length;n++)e[n]&&x(t,e[n]);return t}function C(e,t,n){}function S(e,t,n){return!1}var T=function(e){return e};function _(t,n){if(t===n)return!0;var e=P(t),i=P(n);if(!e||!i)return!e&&!i&&String(t)===String(n);try{var r=Array.isArray(t),o=Array.isArray(n);if(r&&o)return t.length===n.length&&t.every(function(e,t){return _(e,n[t])});if(t instanceof Date&&n instanceof Date)return t.getTime()===n.getTime();if(r||o)return!1;r=Object.keys(t),o=Object.keys(n);return r.length===o.length&&r.every(function(e){return _(t[e],n[e])})}catch(t){return!1}}function A(e,t){for(var n=0;n<e.length;n++)if(_(e[n],t))return n;return-1}function R(e){var t=!1;return function(){t||(t=!0,e.apply(this,arguments))}}var O="data-server-rendered",E=["component","directive","filter"],j=["beforeCreate","created","beforeMount","mounted","beforeUpdate","updated","beforeDestroy","destroyed","activated","deactivated","errorCaptured","serverPrefetch"],D={optionMergeStrategies:Object.create(null),silent:!1,productionTip:!1,devtools:!1,performance:!1,errorHandler:null,warnHandler:null,ignoredElements:[],keyCodes:Object.create(null),isReservedTag:S,isReservedAttr:S,isUnknownElement:S,getTagNamespace:C,parsePlatformTagName:T,mustUseProp:S,async:!0,_lifecycleHooks:j},I=/a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;function H(e,t,n,i){Object.defineProperty(e,t,{value:n,enumerable:!!i,writable:!0,configurable:!0})}var q,F=new RegExp("[^"+I.source+".$_\\d]"),z="__proto__"in{},B="undefined"!=typeof window,W="undefined"!=typeof WXEnvironment&&!!WXEnvironment.platform,U=W&&WXEnvironment.platform.toLowerCase(),V=B&&window.navigator.userAgent.toLowerCase(),X=V&&/msie|trident/.test(V),Y=V&&0<V.indexOf("msie 9.0"),G=V&&0<V.indexOf("edge/"),J=(V&&V.indexOf("android"),V&&/iphone|ipad|ipod|ios/.test(V)||"ios"===U),K=(V&&/chrome\/\d+/.test(V),V&&/phantomjs/.test(V),V&&V.match(/firefox\/(\d+)/)),Q={}.watch,Z=!1;if(B)try{var ee={};Object.defineProperty(ee,"passive",{get:function(){Z=!0}}),window.addEventListener("test-passive",null,ee)}catch(f){}var te=function(){return q=void 0===q?!B&&!W&&"undefined"!=typeof global&&global.process&&"server"===global.process.env.VUE_ENV:q},ne=B&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function ie(e){return"function"==typeof e&&/native code/.test(e.toString())}var re="undefined"!=typeof Symbol&&ie(Symbol)&&"undefined"!=typeof Reflect&&ie(Reflect.ownKeys);function oe(){this.set=Object.create(null)}var se="undefined"!=typeof Set&&ie(Set)?Set:(oe.prototype.has=function(e){return!0===this.set[e]},oe.prototype.add=function(e){this.set[e]=!0},oe.prototype.clear=function(){this.set=Object.create(null)},oe),ae=C,le=0,ce=function(){this.id=le++,this.subs=[]};ce.prototype.addSub=function(e){this.subs.push(e)},ce.prototype.removeSub=function(e){v(this.subs,e)},ce.prototype.depend=function(){ce.target&&ce.target.addDep(this)},ce.prototype.notify=function(){for(var e=this.subs.slice(),t=0,n=e.length;t<n;t++)e[t].update()},ce.target=null;var ue=[];function de(e){ue.push(e),ce.target=e}function pe(){ue.pop(),ce.target=ue[ue.length-1]}var fe=function(e,t,n,i,r,o,s,a){this.tag=e,this.data=t,this.children=n,this.text=i,this.elm=r,this.ns=void 0,this.context=o,this.fnContext=void 0,this.fnOptions=void 0,this.fnScopeId=void 0,this.key=t&&t.key,this.componentOptions=s,this.componentInstance=void 0,this.parent=void 0,this.raw=!1,this.isStatic=!1,this.isRootInsert=!0,this.isComment=!1,this.isCloned=!1,this.isOnce=!1,this.asyncFactory=a,this.asyncMeta=void 0,this.isAsyncPlaceholder=!1},he={child:{configurable:!0}};he.child.get=function(){return this.componentInstance},Object.defineProperties(fe.prototype,he);var ve=function(e){void 0===e&&(e="");var t=new fe;return t.text=e,t.isComment=!0,t};function me(e){return new fe(void 0,void 0,void 0,String(e))}function ge(e){var t=new fe(e.tag,e.data,e.children&&e.children.slice(),e.text,e.elm,e.context,e.componentOptions,e.asyncFactory);return t.ns=e.ns,t.isStatic=e.isStatic,t.key=e.key,t.isComment=e.isComment,t.fnContext=e.fnContext,t.fnOptions=e.fnOptions,t.fnScopeId=e.fnScopeId,t.asyncMeta=e.asyncMeta,t.isCloned=!0,t}var ye=Array.prototype,be=Object.create(ye);["push","pop","shift","unshift","splice","sort","reverse"].forEach(function(o){var s=ye[o];H(be,o,function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];var n,i=s.apply(this,e),r=this.__ob__;switch(o){case"push":case"unshift":n=e;break;case"splice":n=e.slice(2)}return n&&r.observeArray(n),r.dep.notify(),i})});var we=Object.getOwnPropertyNames(be),xe=!0;function ke(e){xe=e}var Ce=function(e){this.value=e,this.dep=new ce,this.vmCount=0,H(e,"__ob__",this),Array.isArray(e)?(z?e.__proto__=be:function(e,t,n){for(var i=0,r=n.length;i<r;i++){var o=n[i];H(e,o,t[o])}}(e,be,we),this.observeArray(e)):this.walk(e)};function Se(e,t){var n;if(P(e)&&!(e instanceof fe))return p(e,"__ob__")&&e.__ob__ instanceof Ce?n=e.__ob__:xe&&!te()&&(Array.isArray(e)||l(e))&&Object.isExtensible(e)&&!e._isVue&&(n=new Ce(e)),t&&n&&n.vmCount++,n}function Te(n,e,i,t,r){var o,s,a,l=new ce,c=Object.getOwnPropertyDescriptor(n,e);c&&!1===c.configurable||(o=c&&c.get,s=c&&c.set,o&&!s||2!==arguments.length||(i=n[e]),a=!r&&Se(i),Object.defineProperty(n,e,{enumerable:!0,configurable:!0,get:function(){var e=o?o.call(n):i;return ce.target&&(l.depend(),a&&(a.dep.depend(),Array.isArray(e)&&function e(t){for(var n=void 0,i=0,r=t.length;i<r;i++)(n=t[i])&&n.__ob__&&n.__ob__.dep.depend(),Array.isArray(n)&&e(n)}(e))),e},set:function(e){var t=o?o.call(n):i;e===t||e!=e&&t!=t||o&&!s||(s?s.call(n,e):i=e,a=!r&&Se(e),l.notify())}}))}function _e(e,t,n){if(Array.isArray(e)&&r(t))return e.length=Math.max(e.length,t),e.splice(t,1,n),n;if(t in e&&!(t in Object.prototype))return e[t]=n;var i=e.__ob__;return e._isVue||i&&i.vmCount||(i?(Te(i.value,t,n),i.dep.notify()):e[t]=n),n}function $e(e,t){var n;Array.isArray(e)&&r(t)?e.splice(t,1):(n=e.__ob__,e._isVue||n&&n.vmCount||p(e,t)&&(delete e[t],n&&n.dep.notify()))}Ce.prototype.walk=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)Te(e,t[n])},Ce.prototype.observeArray=function(e){for(var t=0,n=e.length;t<n;t++)Se(e[t])};var Ae=D.optionMergeStrategies;function Oe(e,t){if(!t)return e;for(var n,i,r,o=re?Reflect.ownKeys(t):Object.keys(t),s=0;s<o.length;s++)"__ob__"!==(n=o[s])&&(i=e[n],r=t[n],p(e,n)?i!==r&&l(i)&&l(r)&&Oe(i,r):_e(e,n,r));return e}function Ee(n,i,r){return r?function(){var e="function"==typeof i?i.call(r,r):i,t="function"==typeof n?n.call(r,r):n;return e?Oe(e,t):t}:i?n?function(){return Oe("function"==typeof i?i.call(this,this):i,"function"==typeof n?n.call(this,this):n)}:i:n}function je(e,t){e=t?e?e.concat(t):Array.isArray(t)?t:[t]:e;return e&&function(e){for(var t=[],n=0;n<e.length;n++)-1===t.indexOf(e[n])&&t.push(e[n]);return t}(e)}function De(e,t,n,i){e=Object.create(e||null);return t?x(e,t):e}Ae.data=function(e,t,n){return n?Ee(e,t,n):t&&"function"!=typeof t?e:Ee(e,t)},j.forEach(function(e){Ae[e]=je}),E.forEach(function(e){Ae[e+"s"]=De}),Ae.watch=function(e,t,n,i){if(e===Q&&(e=void 0),!(t=t===Q?void 0:t))return Object.create(e||null);if(!e)return t;var r,o={};for(r in x(o,e),t){var s=o[r],a=t[r];s&&!Array.isArray(s)&&(s=[s]),o[r]=s?s.concat(a):Array.isArray(a)?a:[a]}return o},Ae.props=Ae.methods=Ae.inject=Ae.computed=function(e,t,n,i){if(!e)return t;var r=Object.create(null);return x(r,e),t&&x(r,t),r},Ae.provide=Ee;var Ne=function(e,t){return void 0===t?e:t};function Le(n,o,i){if(function(e){var t=e.props;if(t){var n,i,r={};if(Array.isArray(t))for(n=t.length;n--;)"string"==typeof(i=t[n])&&(r[m(i)]={type:null});else if(l(t))for(var o in t)i=t[o],r[m(o)]=l(i)?i:{type:i};e.props=r}}(o="function"==typeof o?o.options:o),function(){var e=o.inject;if(e){var t=o.inject={};if(Array.isArray(e))for(var n=0;n<e.length;n++)t[e[n]]={from:e[n]};else if(l(e))for(var i in e){var r=e[i];t[i]=l(r)?x({from:i},r):{from:r}}}}(),function(){var e=o.directives;if(e)for(var t in e){var n=e[t];"function"==typeof n&&(e[t]={bind:n,update:n})}}(),!o._base&&(o.extends&&(n=Le(n,o.extends,i)),o.mixins))for(var e=0,t=o.mixins.length;e<t;e++)n=Le(n,o.mixins[e],i);var r,s={};for(r in n)a(r);for(r in o)p(n,r)||a(r);function a(e){var t=Ae[e]||Ne;s[e]=t(n[e],o[e],i,e)}return s}function Pe(e,t,n){if("string"==typeof n){var i=e[t];if(p(i,n))return i[n];e=m(n);if(p(i,e))return i[e];t=a(e);return!p(i,t)&&(i[n]||i[e])||i[t]}}function Me(e,t,n,i){var r=t[e],o=!p(n,e),t=n[e],n=He(Boolean,r.type);return-1<n&&(o&&!p(r,"default")?t=!1:""!==t&&t!==y(e)||((o=He(String,r.type))<0||n<o)&&(t=!0)),void 0===t&&(t=function(e,t,n){if(p(t,"default")){var i=t.default;return e&&e.$options.propsData&&void 0===e.$options.propsData[n]&&void 0!==e._props[n]?e._props[n]:"function"==typeof i&&"Function"!==Re(t.type)?i.call(e):i}}(i,r,e),e=xe,ke(!0),Se(t),ke(e)),t}function Re(e){e=e&&e.toString().match(/^\s*function (\w+)/);return e?e[1]:""}function Ie(e,t){return Re(e)===Re(t)}function He(e,t){if(!Array.isArray(t))return Ie(t,e)?0:-1;for(var n=0,i=t.length;n<i;n++)if(Ie(t[n],e))return n;return-1}function qe(e,t,n){de();try{if(t)for(var i=t;i=i.$parent;){var r=i.$options.errorCaptured;if(r)for(var o=0;o<r.length;o++)try{if(!1===r[o].call(i,e,t,n))return}catch(e){ze(e,i,"errorCaptured hook")}}ze(e,t,n)}finally{pe()}}function Fe(e,t,n,i,r){var o;try{(o=n?e.apply(t,n):e.call(t))&&!o._isVue&&h(o)&&!o._handled&&(o.catch(function(e){return qe(e,i,r+" (Promise/async)")}),o._handled=!0)}catch(e){qe(e,i,r)}return o}function ze(e,t,n){if(D.errorHandler)try{return D.errorHandler.call(null,e,t,n)}catch(t){t!==e&&Be(t)}Be(e)}function Be(e){if(!B&&!W||"undefined"==typeof console)throw e;console.error(e)}var We,Ue,Ve,Xe,Ye=!1,Ge=[],Je=!1;function Ke(){Je=!1;for(var e=Ge.slice(0),t=Ge.length=0;t<e.length;t++)e[t]()}function Qe(e,t){var n;if(Ge.push(function(){if(e)try{e.call(t)}catch(e){qe(e,t,"nextTick")}else n&&n(t)}),Je||(Je=!0,Ue()),!e&&"undefined"!=typeof Promise)return new Promise(function(e){n=e})}"undefined"!=typeof Promise&&ie(Promise)?(We=Promise.resolve(),Ue=function(){We.then(Ke),J&&setTimeout(C)},Ye=!0):X||"undefined"==typeof MutationObserver||!ie(MutationObserver)&&"[object MutationObserverConstructor]"!==MutationObserver.toString()?Ue="undefined"!=typeof setImmediate&&ie(setImmediate)?function(){setImmediate(Ke)}:function(){setTimeout(Ke,0)}:(Ve=1,An=new MutationObserver(Ke),Xe=document.createTextNode(String(Ve)),An.observe(Xe,{characterData:!0}),Ue=function(){Ve=(Ve+1)%2,Xe.data=String(Ve)},Ye=!0);var Ze=new se;function et(e){!function e(t,n){var i,r,o=Array.isArray(t);if(!(!o&&!P(t)||Object.isFrozen(t)||t instanceof fe)){if(t.__ob__){var s=t.__ob__.dep.id;if(n.has(s))return;n.add(s)}if(o)for(i=t.length;i--;)e(t[i],n);else for(i=(r=Object.keys(t)).length;i--;)e(t[r[i]],n)}}(e,Ze),Ze.clear()}var tt=e(function(e){var t="&"===e.charAt(0),n="~"===(e=t?e.slice(1):e).charAt(0),i="!"===(e=n?e.slice(1):e).charAt(0);return{name:e=i?e.slice(1):e,once:n,capture:i,passive:t}});function nt(e,r){function o(){var e=arguments,t=o.fns;if(!Array.isArray(t))return Fe(t,null,arguments,r,"v-on handler");for(var n=t.slice(),i=0;i<n.length;i++)Fe(n[i],null,e,r,"v-on handler")}return o.fns=e,o}function it(e,t,n,i,r,o){var s,a,l,c;for(s in e)a=e[s],l=t[s],c=tt(s),N(a)||(N(l)?(N(a.fns)&&(a=e[s]=nt(a,o)),$(c.once)&&(a=e[s]=r(c.name,a,c.capture)),n(c.name,a,c.capture,c.passive,c.params)):a!==l&&(l.fns=a,e[s]=l));for(s in t)N(e[s])&&i((c=tt(s)).name,t[s],c.capture)}function rt(e,t,n){var i,r=(e=e instanceof fe?e.data.hook||(e.data.hook={}):e)[t];function o(){n.apply(this,arguments),v(i.fns,o)}N(r)?i=nt([o]):L(r.fns)&&$(r.merged)?(i=r).fns.push(o):i=nt([r,o]),i.merged=!0,e[t]=i}function ot(e,t,n,i,r){if(L(t)){if(p(t,n))return e[n]=t[n],r||delete t[n],1;if(p(t,i))return e[n]=t[i],r||delete t[i],1}}function st(e){return c(e)?[me(e)]:Array.isArray(e)?function e(t,n){for(var i,r,o,s=[],a=0;a<t.length;a++)N(i=t[a])||"boolean"==typeof i||(o=s[r=s.length-1],Array.isArray(i)?0<i.length&&(at((i=e(i,(n||"")+"_"+a))[0])&&at(o)&&(s[r]=me(o.text+i[0].text),i.shift()),s.push.apply(s,i)):c(i)?at(o)?s[r]=me(o.text+i):""!==i&&s.push(me(i)):at(i)&&at(o)?s[r]=me(o.text+i.text):($(t._isVList)&&L(i.tag)&&N(i.key)&&L(n)&&(i.key="__vlist"+n+"_"+a+"__"),s.push(i)));return s}(e):void 0}function at(e){return L(e)&&L(e.text)&&!1===e.isComment}function lt(e,t){if(e){for(var n=Object.create(null),i=re?Reflect.ownKeys(e):Object.keys(e),r=0;r<i.length;r++){var o=i[r];if("__ob__"!==o){for(var s,a=e[o].from,l=t;l;){if(l._provided&&p(l._provided,a)){n[o]=l._provided[a];break}l=l.$parent}!l&&"default"in e[o]&&(s=e[o].default,n[o]="function"==typeof s?s.call(t):s)}}return n}}function ct(e,t){if(!e||!e.length)return{};for(var n,i={},r=0,o=e.length;r<o;r++){var s=e[r],a=s.data;a&&a.attrs&&a.attrs.slot&&delete a.attrs.slot,s.context!==t&&s.fnContext!==t||!a||null==a.slot?(i.default||(i.default=[])).push(s):(a=i[a=a.slot]||(i[a]=[]),"template"===s.tag?a.push.apply(a,s.children||[]):a.push(s))}for(n in i)i[n].every(ut)&&delete i[n];return i}function ut(e){return e.isComment&&!e.asyncFactory||" "===e.text}function dt(e,t,n){var i,r,o=0<Object.keys(t).length,s=e?!!e.$stable:!o,a=e&&e.$key;if(e){if(e._normalized)return e._normalized;if(s&&n&&n!==f&&a===n.$key&&!o&&!n.$hasNormal)return n;for(var l in i={},e)e[l]&&"$"!==l[0]&&(i[l]=function(e,t,n){function i(){var e=arguments.length?n.apply(null,arguments):n({});return(e=e&&"object"==_typeof(e)&&!Array.isArray(e)?[e]:st(e))&&(0===e.length||1===e.length&&e[0].isComment)?void 0:e}return n.proxy&&Object.defineProperty(e,t,{get:i,enumerable:!0,configurable:!0}),i}(t,l,e[l]))}else i={};for(r in t)r in i||(i[r]=function(e,t){return function(){return e[t]}}(t,r));return e&&Object.isExtensible(e)&&(e._normalized=i),H(i,"$stable",s),H(i,"$key",a),H(i,"$hasNormal",o),i}function pt(e,t){var n,i,r,o;if(Array.isArray(e)||"string"==typeof e)for(s=new Array(e.length),n=0,i=e.length;n<i;n++)s[n]=t(e[n],n);else if("number"==typeof e)for(s=new Array(e),n=0;n<e;n++)s[n]=t(n+1,n);else if(P(e))if(re&&e[Symbol.iterator])for(var s=[],a=e[Symbol.iterator](),l=a.next();!l.done;)s.push(t(l.value,s.length)),l=a.next();else for(r=Object.keys(e),s=new Array(r.length),n=0,i=r.length;n<i;n++)o=r[n],s[n]=t(e[o],o,n);return(s=!L(s)?[]:s)._isVList=!0,s}function ft(e,t,n,i){var r=this.$scopedSlots[e],t=r?(n=n||{},r(n=i?x(x({},i),n):n)||t):this.$slots[e]||t,n=n&&n.slot;return n?this.$createElement("template",{slot:n},t):t}function ht(e){return Pe(this.$options,"filters",e)||T}function vt(e,t){return Array.isArray(e)?-1===e.indexOf(t):e!==t}function mt(e,t,n,i,r){n=D.keyCodes[t]||n;return r&&i&&!D.keyCodes[t]?vt(r,i):n?vt(n,e):i?y(i)!==t:void 0}function gt(r,o,s,a,l){if(s&&P(s)){var c,e;for(e in s=Array.isArray(s)?k(s):s)!function(t){var e;c="class"===t||"style"===t||d(t)?r:(e=r.attrs&&r.attrs.type,a||D.mustUseProp(o,e,t)?r.domProps||(r.domProps={}):r.attrs||(r.attrs={}));var n=m(t),i=y(t);n in c||i in c||(c[t]=s[t],l&&((r.on||(r.on={}))["update:"+t]=function(e){s[t]=e}))}(e)}return r}function yt(e,t){var n=this._staticTrees||(this._staticTrees=[]),i=n[e];return i&&!t||wt(i=n[e]=this.$options.staticRenderFns[e].call(this._renderProxy,null,this),"__static__"+e,!1),i}function bt(e,t,n){return wt(e,"__once__"+t+(n?"_"+n:""),!0),e}function wt(e,t,n){if(Array.isArray(e))for(var i=0;i<e.length;i++)e[i]&&"string"!=typeof e[i]&&xt(e[i],t+"_"+i,n);else xt(e,t,n)}function xt(e,t,n){e.isStatic=!0,e.key=t,e.isOnce=n}function kt(e,t){if(t&&l(t)){var n,i=e.on=e.on?x({},e.on):{};for(n in t){var r=i[n],o=t[n];i[n]=r?[].concat(r,o):o}}return e}function Ct(e,t,n,i){t=t||{$stable:!n};for(var r=0;r<e.length;r++){var o=e[r];Array.isArray(o)?Ct(o,t,n):o&&(o.proxy&&(o.fn.proxy=!0),t[o.key]=o.fn)}return i&&(t.$key=i),t}function St(e,t){for(var n=0;n<t.length;n+=2){var i=t[n];"string"==typeof i&&i&&(e[t[n]]=t[n+1])}return e}function Tt(e,t){return"string"==typeof e?t+e:e}function _t(e){e._o=bt,e._n=M,e._s=t,e._l=pt,e._t=ft,e._q=_,e._i=A,e._m=yt,e._f=ht,e._k=mt,e._b=gt,e._v=me,e._e=ve,e._u=Ct,e._g=kt,e._d=St,e._p=Tt}function $t(e,t,n,r,i){var o,s=this,a=i.options;p(r,"_uid")?(o=Object.create(r))._original=r:r=(o=r)._original;var i=$(a._compiled),l=!i;this.data=e,this.props=t,this.children=n,this.parent=r,this.listeners=e.on||f,this.injections=lt(a.inject,r),this.slots=function(){return s.$slots||dt(e.scopedSlots,s.$slots=ct(n,r)),s.$slots},Object.defineProperty(this,"scopedSlots",{enumerable:!0,get:function(){return dt(e.scopedSlots,this.slots())}}),i&&(this.$options=a,this.$slots=this.slots(),this.$scopedSlots=dt(e.scopedSlots,this.$slots)),a._scopeId?this._c=function(e,t,n,i){i=Pt(o,e,t,n,i,l);return i&&!Array.isArray(i)&&(i.fnScopeId=a._scopeId,i.fnContext=r),i}:this._c=function(e,t,n,i){return Pt(o,e,t,n,i,l)}}function At(e,t,n,i){e=ge(e);return e.fnContext=n,e.fnOptions=i,t.slot&&((e.data||(e.data={})).slot=t.slot),e}function Ot(e,t){for(var n in t)e[m(n)]=t[n]}_t($t.prototype);var Et={init:function(e,t){var n,i,r;e.componentInstance&&!e.componentInstance._isDestroyed&&e.data.keepAlive?Et.prepatch(e,e):(e.componentInstance=(i={_isComponent:!0,_parentVnode:n=e,parent:Ut},L(r=n.data.inlineTemplate)&&(i.render=r.render,i.staticRenderFns=r.staticRenderFns),new n.componentOptions.Ctor(i))).$mount(t?e.elm:void 0,t)},prepatch:function(e,t){var n=t.componentOptions;!function(e,t,n,i,r){var o=i.data.scopedSlots,s=e.$scopedSlots,s=!!(o&&!o.$stable||s!==f&&!s.$stable||o&&e.$scopedSlots.$key!==o.$key),o=!!(r||e.$options._renderChildren||s);if(e.$options._parentVnode=i,e.$vnode=i,e._vnode&&(e._vnode.parent=i),e.$options._renderChildren=r,e.$attrs=i.data.attrs||f,e.$listeners=n||f,t&&e.$options.props){ke(!1);for(var a=e._props,l=e.$options._propKeys||[],c=0;c<l.length;c++){var u=l[c],d=e.$options.props;a[u]=Me(u,d,t,e)}ke(!0),e.$options.propsData=t}n=n||f;s=e.$options._parentListeners;e.$options._parentListeners=n,Wt(e,n,s),o&&(e.$slots=ct(r,i.context),e.$forceUpdate())}(t.componentInstance=e.componentInstance,n.propsData,n.listeners,t,n.children)},insert:function(e){var t=e.context,n=e.componentInstance;n._isMounted||(n._isMounted=!0,Gt(n,"mounted")),e.data.keepAlive&&(t._isMounted?(n._inactive=!1,Qt.push(n)):Yt(n,!0))},destroy:function(e){var t=e.componentInstance;t._isDestroyed||(e.data.keepAlive?function e(t,n){if(!(n&&(t._directInactive=!0,Xt(t))||t._inactive)){t._inactive=!0;for(var i=0;i<t.$children.length;i++)e(t.$children[i]);Gt(t,"deactivated")}}(t,!0):t.$destroy())}},jt=Object.keys(Et);function Dt(s,a,e,t,n){if(!N(s)){var i,r=e.$options._base;if("function"==typeof(s=P(s)?r.extend(s):s)){if(N(s.cid)&&void 0===(s=function(t,n){if($(t.error)&&L(t.errorComp))return t.errorComp;if(L(t.resolved))return t.resolved;var e=Rt;if(e&&L(t.owners)&&-1===t.owners.indexOf(e)&&t.owners.push(e),$(t.loading)&&L(t.loadingComp))return t.loadingComp;if(e&&!L(t.owners)){var i=t.owners=[e],r=!0,o=null,s=null;e.$on("hook:destroyed",function(){return v(i,e)});var a=function(e){for(var t=0,n=i.length;t<n;t++)i[t].$forceUpdate();e&&(i.length=0,null!==o&&(clearTimeout(o),o=null),null!==s&&(clearTimeout(s),s=null))},l=R(function(e){t.resolved=It(e,n),r?i.length=0:a(!0)}),c=R(function(e){L(t.errorComp)&&(t.error=!0,a(!0))}),u=t(l,c);return P(u)&&(h(u)?N(t.resolved)&&u.then(l,c):h(u.component)&&(u.component.then(l,c),L(u.error)&&(t.errorComp=It(u.error,n)),L(u.loading)&&(t.loadingComp=It(u.loading,n),0===u.delay?t.loading=!0:o=setTimeout(function(){o=null,N(t.resolved)&&N(t.error)&&(t.loading=!0,a(!1))},u.delay||200)),L(u.timeout)&&(s=setTimeout(function(){s=null,N(t.resolved)&&c(null)},u.timeout)))),r=!1,t.loading?t.loadingComp:t.resolved}}(i=s,r)))return l=i,c=a,u=e,r=t,d=n,(p=ve()).asyncFactory=l,p.asyncMeta={data:c,context:u,children:r,tag:d},p;a=a||{},bn(s),L(a.model)&&function(e,t){var n=e.model&&e.model.prop||"value",i=e.model&&e.model.event||"input";(t.attrs||(t.attrs={}))[n]=t.model.value;e=t.on||(t.on={}),n=e[i],t=t.model.callback;L(n)?(Array.isArray(n)?-1===n.indexOf(t):n!==t)&&(e[i]=[t].concat(n)):e[i]=t}(s.options,a);d=function(){var e=s.options.props;if(!N(e)){var t={},n=a.attrs,i=a.props;if(L(n)||L(i))for(var r in e){var o=y(r);ot(t,i,r,o,!0)||ot(t,n,r,o,!1)}return t}}();if($(s.options.functional))return function(e,t,n,i,r){var o=e.options,s={},a=o.props;if(L(a))for(var l in a)s[l]=Me(l,a,t||f);else L(n.attrs)&&Ot(s,n.attrs),L(n.props)&&Ot(s,n.props);var c=new $t(n,s,r,i,e),e=o.render.call(null,c._c,c);if(e instanceof fe)return At(e,n,c.parent,o);if(Array.isArray(e)){for(var u=st(e)||[],d=new Array(u.length),p=0;p<u.length;p++)d[p]=At(u[p],n,c.parent,o);return d}}(s,d,a,e,t);p=a.on;a.on=a.nativeOn,$(s.options.abstract)&&(o=a.slot,a={},o&&(a.slot=o)),function(){for(var e=a.hook||(a.hook={}),t=0;t<jt.length;t++){var n=jt[t],i=e[n],r=Et[n];i===r||i&&i._merged||(e[n]=i?function(n,i){function e(e,t){n(e,t),i(e,t)}return e._merged=!0,e}(r,i):r)}}();var o=s.options.name||n;return new fe("vue-component-"+s.cid+(o?"-"+o:""),a,void 0,void 0,void 0,e,{Ctor:s,propsData:d,listeners:p,tag:n,children:t},i)}}var l,c,u,d,p}var Nt=1,Lt=2;function Pt(e,t,n,i,r,o){return(Array.isArray(n)||c(n))&&(r=i,i=n,n=void 0),$(o)&&(r=Lt),e=e,t=t,i=i,r=r,(!L(n=n)||!L(n.__ob__))&&(t=L(n)&&L(n.is)?n.is:t)?(Array.isArray(i)&&"function"==typeof i[0]&&((n=n||{}).scopedSlots={default:i[0]},i.length=0),r===Lt?i=st(i):r===Nt&&(i=function(e){for(var t=0;t<e.length;t++)if(Array.isArray(e[t]))return Array.prototype.concat.apply([],e);return e}(i)),i="string"==typeof t?(a=e.$vnode&&e.$vnode.ns||D.getTagNamespace(t),D.isReservedTag(t)?new fe(D.parsePlatformTagName(t),n,i,void 0,void 0,e):n&&n.pre||!L(s=Pe(e.$options,"components",t))?new fe(t,n,i,void 0,void 0,e):Dt(s,n,e,i,t)):Dt(t,n,e,i),Array.isArray(i)?i:L(i)?(L(a)&&function e(t,n,i){if(t.ns=n,"foreignObject"===t.tag&&(i=!(n=void 0)),L(t.children))for(var r=0,o=t.children.length;r<o;r++){var s=t.children[r];L(s.tag)&&(N(s.ns)||$(i)&&"svg"!==s.tag)&&e(s,n,i)}}(i,a),L(n)&&(P((n=n).style)&&et(n.style),P(n.class)&&et(n.class)),i):ve()):ve();var s,a}var Mt,Rt=null;function It(e,t){return P(e=e.__esModule||re&&"Module"===e[Symbol.toStringTag]?e.default:e)?t.extend(e):e}function Ht(e){return e.isComment&&e.asyncFactory}function qt(e){if(Array.isArray(e))for(var t=0;t<e.length;t++){var n=e[t];if(L(n)&&(L(n.componentOptions)||Ht(n)))return n}}function Ft(e,t){Mt.$on(e,t)}function zt(e,t){Mt.$off(e,t)}function Bt(t,n){var i=Mt;return function e(){null!==n.apply(null,arguments)&&i.$off(t,e)}}function Wt(e,t,n){it(t,n||{},Ft,zt,Bt,Mt=e),Mt=void 0}var Ut=null;function Vt(e){var t=Ut;return Ut=e,function(){Ut=t}}function Xt(e){for(;e=e&&e.$parent;)if(e._inactive)return 1}function Yt(e,t){if(t){if(e._directInactive=!1,Xt(e))return}else if(e._directInactive)return;if(e._inactive||null===e._inactive){e._inactive=!1;for(var n=0;n<e.$children.length;n++)Yt(e.$children[n]);Gt(e,"activated")}}function Gt(e,t){de();var n=e.$options[t],i=t+" hook";if(n)for(var r=0,o=n.length;r<o;r++)Fe(n[r],e,null,e,i);e._hasHookEvent&&e.$emit("hook:"+t),pe()}var Jt,Kt=[],Qt=[],Zt={},en=!1,tn=!1,nn=0,rn=0,on=Date.now;function sn(){var e,t;for(rn=on(),tn=!0,Kt.sort(function(e,t){return e.id-t.id}),nn=0;nn<Kt.length;nn++)(e=Kt[nn]).before&&e.before(),t=e.id,Zt[t]=null,e.run();var n=Qt.slice(),i=Kt.slice();nn=Kt.length=Qt.length=0,en=tn=!(Zt={}),function(e){for(var t=0;t<e.length;t++)e[t]._inactive=!0,Yt(e[t],!0)}(n),function(e){for(var t=e.length;t--;){var n=e[t],i=n.vm;i._watcher===n&&i._isMounted&&!i._isDestroyed&&Gt(i,"updated")}}(i),ne&&D.devtools&&ne.emit("flush")}!B||X||(Jt=window.performance)&&"function"==typeof Jt.now&&on()>document.createEvent("Event").timeStamp&&(on=function(){return Jt.now()});function an(e,t,n,i,r){this.vm=e,r&&(e._watcher=this),e._watchers.push(this),i?(this.deep=!!i.deep,this.user=!!i.user,this.lazy=!!i.lazy,this.sync=!!i.sync,this.before=i.before):this.deep=this.user=this.lazy=this.sync=!1,this.cb=n,this.id=++ln,this.active=!0,this.dirty=this.lazy,this.deps=[],this.newDeps=[],this.depIds=new se,this.newDepIds=new se,this.expression="","function"==typeof t?this.getter=t:(this.getter=function(e){if(!F.test(e)){var n=e.split(".");return function(e){for(var t=0;t<n.length;t++){if(!e)return;e=e[n[t]]}return e}}}(t),this.getter||(this.getter=C)),this.value=this.lazy?void 0:this.get()}var ln=0;an.prototype.get=function(){var e;de(this);var t=this.vm;try{e=this.getter.call(t,t)}catch(e){if(!this.user)throw e;qe(e,t,'getter for watcher "'+this.expression+'"')}finally{this.deep&&et(e),pe(),this.cleanupDeps()}return e},an.prototype.addDep=function(e){var t=e.id;this.newDepIds.has(t)||(this.newDepIds.add(t),this.newDeps.push(e),this.depIds.has(t)||e.addSub(this))},an.prototype.cleanupDeps=function(){for(var e=this.deps.length;e--;){var t=this.deps[e];this.newDepIds.has(t.id)||t.removeSub(this)}var n=this.depIds;this.depIds=this.newDepIds,this.newDepIds=n,this.newDepIds.clear(),n=this.deps,this.deps=this.newDeps,this.newDeps=n,this.newDeps.length=0},an.prototype.update=function(){this.lazy?this.dirty=!0:this.sync?this.run():function(e){var t=e.id;if(null==Zt[t]){if(Zt[t]=!0,tn){for(var n=Kt.length-1;nn<n&&Kt[n].id>e.id;)n--;Kt.splice(n+1,0,e)}else Kt.push(e);en||(en=!0,Qe(sn))}}(this)},an.prototype.run=function(){if(this.active){var e=this.get();if(e!==this.value||P(e)||this.deep){var t=this.value;if(this.value=e,this.user)try{this.cb.call(this.vm,e,t)}catch(e){qe(e,this.vm,'callback for watcher "'+this.expression+'"')}else this.cb.call(this.vm,e,t)}}},an.prototype.evaluate=function(){this.value=this.get(),this.dirty=!1},an.prototype.depend=function(){for(var e=this.deps.length;e--;)this.deps[e].depend()},an.prototype.teardown=function(){if(this.active){this.vm._isBeingDestroyed||v(this.vm._watchers,this);for(var e=this.deps.length;e--;)this.deps[e].removeSub(this);this.active=!1}};var cn={enumerable:!0,configurable:!0,get:C,set:C};function un(e,t,n){cn.get=function(){return this[t][n]},cn.set=function(e){this[t][n]=e},Object.defineProperty(e,n,cn)}function dn(e){e._watchers=[];var t=e.$options;t.props&&function(n,i){var r=n.$options.propsData||{},o=n._props={},s=n.$options._propKeys=[];n.$parent&&ke(!1);for(var e in i)!function(e){s.push(e);var t=Me(e,i,r,n);Te(o,e,t),e in n||un(n,"_props",e)}(e);ke(!0)}(e,t.props),t.methods&&function(e,t){for(var n in e.$options.props,t)e[n]="function"!=typeof t[n]?C:b(t[n],e)}(e,t.methods),t.data?function(e){var t=e.$options.data;l(t=e._data="function"==typeof t?function(e,t){de();try{return e.call(t,t)}catch(e){return qe(e,t,"data()"),{}}finally{pe()}}(t,e):t||{})||(t={});for(var n,i=Object.keys(t),r=e.$options.props,o=(e.$options.methods,i.length);o--;){var s=i[o];r&&p(r,s)||36!==(n=(s+"").charCodeAt(0))&&95!==n&&un(e,"_data",s)}Se(t,!0)}(e):Se(e._data={},!0),t.computed&&function(e,t){var n,i=e._computedWatchers=Object.create(null),r=te();for(n in t){var o=t[n],s="function"==typeof o?o:o.get;r||(i[n]=new an(e,s||C,C,pn)),n in e||fn(e,n,o)}}(e,t.computed),t.watch&&t.watch!==Q&&function(e,t){for(var n in t){var i=t[n];if(Array.isArray(i))for(var r=0;r<i.length;r++)mn(e,n,i[r]);else mn(e,n,i)}}(e,t.watch)}var pn={lazy:!0};function fn(e,t,n){var i=!te();"function"==typeof n?(cn.get=i?hn(t):vn(n),cn.set=C):(cn.get=n.get?i&&!1!==n.cache?hn(t):vn(n.get):C,cn.set=n.set||C),Object.defineProperty(e,t,cn)}function hn(t){return function(){var e=this._computedWatchers&&this._computedWatchers[t];if(e)return e.dirty&&e.evaluate(),ce.target&&e.depend(),e.value}}function vn(e){return function(){return e.call(this,this)}}function mn(e,t,n,i){return"string"==typeof(n=l(n)?(i=n).handler:n)&&(n=e[n]),e.$watch(t,n,i)}var gn,yn=0;function bn(r){var e,t,n=r.options;return!r.super||(e=bn(r.super))!==r.superOptions&&(r.superOptions=e,(t=function(){var e,t,n=r.options,i=r.sealedOptions;for(t in n)n[t]!==i[t]&&((e=e||{})[t]=n[t]);return e}())&&x(r.extendOptions,t),(n=r.options=Le(e,r.extendOptions)).name&&(n.components[n.name]=r)),n}function wn(e){this._init(e)}function xn(e){e.cid=0;var s=1;e.extend=function(e){e=e||{};var t=this,n=t.cid,i=e._Ctor||(e._Ctor={});if(i[n])return i[n];function r(e){this._init(e)}var o=e.name||t.options.name;return((r.prototype=Object.create(t.prototype)).constructor=r).cid=s++,r.options=Le(t.options,e),r.super=t,r.options.props&&function(e){for(var t in e.options.props)un(e.prototype,"_props",t)}(r),r.options.computed&&function(e){var t,n=e.options.computed;for(t in n)fn(e.prototype,t,n[t])}(r),r.extend=t.extend,r.mixin=t.mixin,r.use=t.use,E.forEach(function(e){r[e]=t[e]}),o&&(r.options.components[o]=r),r.superOptions=t.options,r.extendOptions=e,r.sealedOptions=x({},r.options),i[n]=r}}function kn(e){return e&&(e.Ctor.options.name||e.tag)}function Cn(e,t){return Array.isArray(e)?-1<e.indexOf(t):"string"==typeof e?-1<e.split(",").indexOf(t):"[object RegExp]"===n.call(e)&&e.test(t)}function Sn(e,t){var n,i=e.cache,r=e.keys,o=e._vnode;for(n in i){var s=i[n];!s||(s=kn(s.componentOptions))&&!t(s)&&Tn(i,n,r,o)}}function Tn(e,t,n,i){var r=e[t];!r||i&&r.tag===i.tag||r.componentInstance.$destroy(),e[t]=null,v(n,t)}wn.prototype._init=function(e){var t,n,i=this;i._uid=yn++,i._isVue=!0,e&&e._isComponent?function(e){var t=i.$options=Object.create(i.constructor.options),n=e._parentVnode;t.parent=e.parent;n=(t._parentVnode=n).componentOptions;t.propsData=n.propsData,t._parentListeners=n.listeners,t._renderChildren=n.children,t._componentTag=n.tag,e.render&&(t.render=e.render,t.staticRenderFns=e.staticRenderFns)}(e):i.$options=Le(bn(i.constructor),e||{},i),function(e){var t=e.$options,n=t.parent;if(n&&!t.abstract){for(;n.$options.abstract&&n.$parent;)n=n.$parent;n.$children.push(e)}e.$parent=n,e.$root=n?n.$root:e,e.$children=[],e.$refs={},e._watcher=null,e._inactive=null,e._directInactive=!1,e._isMounted=!1,e._isDestroyed=!1,e._isBeingDestroyed=!1}((i._renderProxy=i)._self=i),function(e){e._events=Object.create(null),e._hasHookEvent=!1;var t=e.$options._parentListeners;t&&Wt(e,t)}(i),function(r){r._vnode=null,r._staticTrees=null;var e=r.$options,t=r.$vnode=e._parentVnode,n=t&&t.context;r.$slots=ct(e._renderChildren,n),r.$scopedSlots=f,r._c=function(e,t,n,i){return Pt(r,e,t,n,i,!1)},r.$createElement=function(e,t,n,i){return Pt(r,e,t,n,i,!0)};t=t&&t.data;Te(r,"$attrs",t&&t.attrs||f,null,!0),Te(r,"$listeners",e._parentListeners||f,null,!0)}(i),Gt(i,"beforeCreate"),(n=lt((t=i).$options.inject,t))&&(ke(!1),Object.keys(n).forEach(function(e){Te(t,e,n[e])}),ke(!0)),dn(i),(e=i.$options.provide)&&(i._provided="function"==typeof e?e.call(i):e),Gt(i,"created"),i.$options.el&&i.$mount(i.$options.el)},Zn=wn,Object.defineProperty(Zn.prototype,"$data",{get:function(){return this._data}}),Object.defineProperty(Zn.prototype,"$props",{get:function(){return this._props}}),Zn.prototype.$set=_e,Zn.prototype.$delete=$e,Zn.prototype.$watch=function(e,t,n){if(l(t))return mn(this,e,t,n);(n=n||{}).user=!0;var i=new an(this,e,t,n);if(n.immediate)try{t.call(this,i.value)}catch(e){qe(e,this,'callback for immediate watcher "'+i.expression+'"')}return function(){i.teardown()}},gn=/^hook:/,(U=wn).prototype.$on=function(e,t){var n=this;if(Array.isArray(e))for(var i=0,r=e.length;i<r;i++)n.$on(e[i],t);else(n._events[e]||(n._events[e]=[])).push(t),gn.test(e)&&(n._hasHookEvent=!0);return n},U.prototype.$once=function(e,t){var n=this;function i(){n.$off(e,i),t.apply(n,arguments)}return i.fn=t,n.$on(e,i),n},U.prototype.$off=function(e,t){var n=this;if(!arguments.length)return n._events=Object.create(null),n;if(Array.isArray(e)){for(var i=0,r=e.length;i<r;i++)n.$off(e[i],t);return n}var o,s=n._events[e];if(!s)return n;if(!t)return n._events[e]=null,n;for(var a=s.length;a--;)if((o=s[a])===t||o.fn===t){s.splice(a,1);break}return n},U.prototype.$emit=function(e){if(t=this._events[e])for(var t=1<t.length?w(t):t,n=w(arguments,1),i='event handler for "'+e+'"',r=0,o=t.length;r<o;r++)Fe(t[r],this,n,this,i);return this},(V=wn).prototype._update=function(e,t){var n=this,i=n.$el,r=n._vnode,o=Vt(n);n._vnode=e,n.$el=r?n.__patch__(r,e):n.__patch__(n.$el,e,t,!1),o(),i&&(i.__vue__=null),n.$el&&(n.$el.__vue__=n),n.$vnode&&n.$parent&&n.$vnode===n.$parent._vnode&&(n.$parent.$el=n.$el)},V.prototype.$forceUpdate=function(){this._watcher&&this._watcher.update()},V.prototype.$destroy=function(){var e=this;if(!e._isBeingDestroyed){Gt(e,"beforeDestroy"),e._isBeingDestroyed=!0;var t=e.$parent;!t||t._isBeingDestroyed||e.$options.abstract||v(t.$children,e),e._watcher&&e._watcher.teardown();for(var n=e._watchers.length;n--;)e._watchers[n].teardown();e._data.__ob__&&e._data.__ob__.vmCount--,e._isDestroyed=!0,e.__patch__(e._vnode,null),Gt(e,"destroyed"),e.$off(),e.$el&&(e.$el.__vue__=null),e.$vnode&&(e.$vnode.parent=null)}},_t((he=wn).prototype),he.prototype.$nextTick=function(e){return Qe(e,this)},he.prototype._render=function(){var e,t=this,n=t.$options,i=n.render,r=n._parentVnode;r&&(t.$scopedSlots=dt(r.data.scopedSlots,t.$slots,t.$scopedSlots)),t.$vnode=r;try{Rt=t,e=i.call(t._renderProxy,t.$createElement)}catch(n){qe(n,t,"render"),e=t._vnode}finally{Rt=null}return(e=!((e=Array.isArray(e)&&1===e.length?e[0]:e)instanceof fe)?ve():e).parent=r,e};var _n,$n,j=[String,RegExp,Array],An={KeepAlive:{name:"keep-alive",abstract:!0,props:{include:j,exclude:j,max:[String,Number]},created:function(){this.cache=Object.create(null),this.keys=[]},destroyed:function(){for(var e in this.cache)Tn(this.cache,e,this.keys)},mounted:function(){var e=this;this.$watch("include",function(t){Sn(e,function(e){return Cn(t,e)})}),this.$watch("exclude",function(t){Sn(e,function(e){return!Cn(t,e)})})},render:function(){var e=this.$slots.default,t=qt(e),n=t&&t.componentOptions;if(n){var i=kn(n),r=this.include,o=this.exclude;if(r&&(!i||!Cn(r,i))||o&&i&&Cn(o,i))return t;o=this.cache,i=this.keys,n=null==t.key?n.Ctor.cid+(n.tag?"::"+n.tag:""):t.key;o[n]?(t.componentInstance=o[n].componentInstance,v(i,n),i.push(n)):(o[n]=t,i.push(n),this.max&&i.length>parseInt(this.max)&&Tn(o,i[0],i,this._vnode)),t.data.keepAlive=!0}return t||e&&e[0]}}};_n=wn,Zn={get:function(){return D}},Object.defineProperty(_n,"config",Zn),_n.util={warn:ae,extend:x,mergeOptions:Le,defineReactive:Te},_n.set=_e,_n.delete=$e,_n.nextTick=Qe,_n.observable=function(e){return Se(e),e},_n.options=Object.create(null),E.forEach(function(e){_n.options[e+"s"]=Object.create(null)}),x((_n.options._base=_n).options.components,An),_n.use=function(e){var t=this._installedPlugins||(this._installedPlugins=[]);if(-1<t.indexOf(e))return this;var n=w(arguments,1);return n.unshift(this),"function"==typeof e.install?e.install.apply(e,n):"function"==typeof e&&e.apply(null,n),t.push(e),this},_n.mixin=function(e){return this.options=Le(this.options,e),this},xn(_n),$n=_n,E.forEach(function(n){$n[n]=function(e,t){return t?("component"===n&&l(t)&&(t.name=t.name||e,t=this.options._base.extend(t)),"directive"===n&&"function"==typeof t&&(t={bind:t,update:t}),this.options[n+"s"][e]=t):this.options[n+"s"][e]}}),Object.defineProperty(wn.prototype,"$isServer",{get:te}),Object.defineProperty(wn.prototype,"$ssrContext",{get:function(){return this.$vnode&&this.$vnode.ssrContext}}),Object.defineProperty(wn,"FunctionalRenderContext",{value:$t}),wn.version="2.6.12";var U=s("style,class"),On=s("input,textarea,option,select,progress"),V=function(e,t,n){return"value"===n&&On(e)&&"button"!==t||"selected"===n&&"option"===e||"checked"===n&&"input"===e||"muted"===n&&"video"===e},En=s("contenteditable,draggable,spellcheck"),jn=s("events,caret,typing,plaintext-only"),Dn=function(e,t){return Rn(t)||"false"===t?"false":"contenteditable"===e&&jn(t)?t:"true"},Nn=s("allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,translate,truespeed,typemustmatch,visible"),Ln="http://www.w3.org/1999/xlink",Pn=function(e){return":"===e.charAt(5)&&"xlink"===e.slice(0,5)},Mn=function(e){return Pn(e)?e.slice(6,e.length):""},Rn=function(e){return null==e||!1===e};function In(e,t){return{staticClass:Hn(e.staticClass,t.staticClass),class:L(e.class)?[e.class,t.class]:t.class}}function Hn(e,t){return e?t?e+" "+t:e:t||""}function qn(e){return Array.isArray(e)?function(e){for(var t,n="",i=0,r=e.length;i<r;i++)L(t=qn(e[i]))&&""!==t&&(n&&(n+=" "),n+=t);return n}(e):P(e)?function(e){var t,n="";for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}(e):"string"==typeof e?e:""}function Fn(e){return Bn(e)||Wn(e)}var zn={svg:"http://www.w3.org/2000/svg",math:"http://www.w3.org/1998/Math/MathML"},Bn=s("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template,blockquote,iframe,tfoot"),Wn=s("svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view",!0);function Un(e){return Wn(e)?"svg":"math"===e?"math":void 0}var Vn=Object.create(null),Xn=s("text,number,password,search,email,tel,url");function Yn(e){return"string"!=typeof e?e:document.querySelector(e)||document.createElement("div")}he=Object.freeze({createElement:function(e,t){var n=document.createElement(e);return"select"!==e||t.data&&t.data.attrs&&void 0!==t.data.attrs.multiple&&n.setAttribute("multiple","multiple"),n},createElementNS:function(e,t){return document.createElementNS(zn[e],t)},createTextNode:function(e){return document.createTextNode(e)},createComment:function(e){return document.createComment(e)},insertBefore:function(e,t,n){e.insertBefore(t,n)},removeChild:function(e,t){e.removeChild(t)},appendChild:function(e,t){e.appendChild(t)},parentNode:function(e){return e.parentNode},nextSibling:function(e){return e.nextSibling},tagName:function(e){return e.tagName},setTextContent:function(e,t){e.textContent=t},setStyleScope:function(e,t){e.setAttribute(t,"")}}),j={create:function(e,t){Gn(t)},update:function(e,t){e.data.ref!==t.data.ref&&(Gn(e,!0),Gn(t))},destroy:function(e){Gn(e,!0)}};function Gn(e,t){var n,i,r=e.data.ref;L(r)&&(i=e.context,n=e.componentInstance||e.elm,i=i.$refs,t?Array.isArray(i[r])?v(i[r],n):i[r]===n&&(i[r]=void 0):e.data.refInFor?Array.isArray(i[r])?i[r].indexOf(n)<0&&i[r].push(n):i[r]=[n]:i[r]=n)}var Jn=new fe("",{},[]),Kn=["create","activate","update","remove","destroy"];function Qn(n,i){return n.key===i.key&&(n.tag===i.tag&&n.isComment===i.isComment&&L(n.data)===L(i.data)&&function(){if("input"!==n.tag)return 1;var e=L(t=n.data)&&L(t=t.attrs)&&t.type,t=L(t=i.data)&&L(t=t.attrs)&&t.type;return e===t||Xn(e)&&Xn(t)}()||$(n.isAsyncPlaceholder)&&n.asyncFactory===i.asyncFactory&&N(i.asyncFactory.error))}var Zn={create:ei,update:ei,destroy:function(e){ei(e,Jn)}};function ei(e,t){(e.data.directives||t.data.directives)&&function(t,n){var e,i,r,o,s=t===Jn,a=n===Jn,l=ni(t.data.directives,t.context),c=ni(n.data.directives,n.context),u=[],d=[];for(e in c)i=l[e],r=c[e],i?(r.oldValue=i.value,r.oldArg=i.arg,ii(r,"update",n,t),r.def&&r.def.componentUpdated&&d.push(r)):(ii(r,"bind",n,t),r.def&&r.def.inserted&&u.push(r));if(u.length&&(o=function(){for(var e=0;e<u.length;e++)ii(u[e],"inserted",n,t)},s?rt(n,"insert",o):o()),d.length&&rt(n,"postpatch",function(){for(var e=0;e<d.length;e++)ii(d[e],"componentUpdated",n,t)}),!s)for(e in l)c[e]||ii(l[e],"unbind",t,t,a)}(e,t)}var ti=Object.create(null);function ni(e,t){var n,i,r,o=Object.create(null);if(!e)return o;for(n=0;n<e.length;n++)(i=e[n]).modifiers||(i.modifiers=ti),(o[(r=i).rawName||r.name+"."+Object.keys(r.modifiers||{}).join(".")]=i).def=Pe(t.$options,"directives",i.name);return o}function ii(e,t,n,i,r){var o=e.def&&e.def[t];if(o)try{o(n.elm,e,n,i,r)}catch(i){qe(i,n.context,"directive "+e.name+" "+t+" hook")}}ae=[j,Zn];function ri(e,t){var n=t.componentOptions;if(!(L(n)&&!1===n.Ctor.options.inheritAttrs||N(e.data.attrs)&&N(t.data.attrs))){var i,r,o=t.elm,s=e.data.attrs||{},a=t.data.attrs||{};for(i in a=L(a.__ob__)?t.data.attrs=x({},a):a)r=a[i],s[i]!==r&&oi(o,i,r);for(i in(X||G)&&a.value!==s.value&&oi(o,"value",a.value),s)N(a[i])&&(Pn(i)?o.removeAttributeNS(Ln,Mn(i)):En(i)||o.removeAttribute(i))}}function oi(e,t,n){-1<e.tagName.indexOf("-")?si(e,t,n):Nn(t)?Rn(n)?e.removeAttribute(t):(n="allowfullscreen"===t&&"EMBED"===e.tagName?"true":t,e.setAttribute(t,n)):En(t)?e.setAttribute(t,Dn(t,n)):Pn(t)?Rn(n)?e.removeAttributeNS(Ln,Mn(t)):e.setAttributeNS(Ln,t,n):si(e,t,n)}function si(n,e,t){var i;Rn(t)?n.removeAttribute(e):(!X||Y||"TEXTAREA"!==n.tagName||"placeholder"!==e||""===t||n.__ieph||(i=function e(t){t.stopImmediatePropagation(),n.removeEventListener("input",e)},n.addEventListener("input",i),n.__ieph=!0),n.setAttribute(e,t))}An={create:ri,update:ri};function ai(e,t){var n=t.elm,i=t.data,e=e.data;N(i.staticClass)&&N(i.class)&&(N(e)||N(e.staticClass)&&N(e.class))||(e=function(e){for(var t,n=e.data,i=e,r=e;L(r.componentInstance);)(r=r.componentInstance._vnode)&&r.data&&(n=In(r.data,n));for(;L(i=i.parent);)i&&i.data&&(n=In(n,i.data));return t=n.staticClass,e=n.class,L(t)||L(e)?Hn(t,qn(e)):""}(t),(e=L(t=n._transitionClasses)?Hn(e,qn(t)):e)!==n._prevClass&&(n.setAttribute("class",e),n._prevClass=e))}var li,ci,ui,di,pi,fi,j={create:ai,update:ai},hi=/[\w).+\-_$\]]/;function vi(e){for(var t,n,i,r,o=!1,s=!1,a=!1,l=!1,c=0,u=0,d=0,p=0,f=0;f<e.length;f++)if(n=t,t=e.charCodeAt(f),o)39===t&&92!==n&&(o=!1);else if(s)34===t&&92!==n&&(s=!1);else if(a)96===t&&92!==n&&(a=!1);else if(l)47===t&&92!==n&&(l=!1);else if(124!==t||124===e.charCodeAt(f+1)||124===e.charCodeAt(f-1)||c||u||d){switch(t){case 34:s=!0;break;case 39:o=!0;break;case 96:a=!0;break;case 40:d++;break;case 41:d--;break;case 91:u++;break;case 93:u--;break;case 123:c++;break;case 125:c--}if(47===t){for(var h=f-1,v=void 0;0<=h&&" "===(v=e.charAt(h));h--);v&&hi.test(v)||(l=!0)}}else void 0===i?(p=f+1,i=e.slice(0,f).trim()):m();function m(){(r=r||[]).push(e.slice(p,f).trim()),p=f+1}if(void 0===i?i=e.slice(0,f).trim():0!==p&&m(),r)for(f=0;f<r.length;f++)i=function(e,t){var n=t.indexOf("(");if(n<0)return'_f("'+t+'")('+e+")";var i=t.slice(0,n),n=t.slice(n+1);return'_f("'+i+'")('+e+(")"!==n?","+n:n)}(i,r[f]);return i}function mi(e,t){console.error("[Vue compiler]: "+e)}function gi(e,t){return e?e.map(function(e){return e[t]}).filter(function(e){return e}):[]}function yi(e,t,n,i,r){(e.props||(e.props=[])).push(_i({name:t,value:n,dynamic:r},i)),e.plain=!1}function bi(e,t,n,i,r){(r?e.dynamicAttrs||(e.dynamicAttrs=[]):e.attrs||(e.attrs=[])).push(_i({name:t,value:n,dynamic:r},i)),e.plain=!1}function wi(e,t,n,i){e.attrsMap[t]=n,e.attrsList.push(_i({name:t,value:n},i))}function xi(e,t,n){return n?"_p("+t+',"'+e+'")':e+t}function ki(e,t,n,i,r,o,s,a){(i=i||f).right?a?t="("+t+")==='click'?'contextmenu':("+t+")":"click"===t&&(t="contextmenu",delete i.right):i.middle&&(a?t="("+t+")==='click'?'mouseup':("+t+")":"click"===t&&(t="mouseup")),i.capture&&(delete i.capture,t=xi("!",t,a)),i.once&&(delete i.once,t=xi("~",t,a)),i.passive&&(delete i.passive,t=xi("&",t,a));var l=i.native?(delete i.native,e.nativeEvents||(e.nativeEvents={})):e.events||(e.events={}),s=_i({value:n.trim(),dynamic:a},s);i!==f&&(s.modifiers=i);i=l[t];Array.isArray(i)?r?i.unshift(s):i.push(s):l[t]=i?r?[s,i]:[i,s]:s,e.plain=!1}function Ci(e,t,n){var i=Si(e,":"+t)||Si(e,"v-bind:"+t);if(null!=i)return vi(i);if(!1!==n){t=Si(e,t);if(null!=t)return JSON.stringify(t)}}function Si(e,t,n){var i;if(null!=(i=e.attrsMap[t]))for(var r=e.attrsList,o=0,s=r.length;o<s;o++)if(r[o].name===t){r.splice(o,1);break}return n&&delete e.attrsMap[t],i}function Ti(e,t){for(var n=e.attrsList,i=0,r=n.length;i<r;i++){var o=n[i];if(t.test(o.name))return n.splice(i,1),o}}function _i(e,t){return t&&(null!=t.start&&(e.start=t.start),null!=t.end&&(e.end=t.end)),e}function $i(e,t,n){var i=n||{},n=i.trim?"(typeof $$v === 'string'? $$v.trim(): $$v)":"$$v",n=Ai(t,n=i.number?"_n("+n+")":n);e.model={value:"("+t+")",expression:JSON.stringify(t),callback:"function ($$v) {"+n+"}"}}function Ai(e,t){var n=function(e){if(e=e.trim(),li=e.length,e.indexOf("[")<0||e.lastIndexOf("]")<li-1)return-1<(di=e.lastIndexOf("."))?{exp:e.slice(0,di),key:'"'+e.slice(di+1)+'"'}:{exp:e,key:null};for(ci=e,di=pi=fi=0;!Ei();)ji(ui=Oi())?Di(ui):91===ui&&function(e){var t=1;for(pi=di;!Ei();)if(ji(e=Oi()))Di(e);else if(91===e&&t++,93===e&&t--,0===t){fi=di;break}}(ui);return{exp:e.slice(0,pi),key:e.slice(pi+1,fi)}}(e);return null===n.key?e+"="+t:"$set("+n.exp+", "+n.key+", "+t+")"}function Oi(){return ci.charCodeAt(++di)}function Ei(){return li<=di}function ji(e){return 34===e||39===e}function Di(e){for(var t=e;!Ei()&&(e=Oi())!==t;);}var Ni,Li="__r";function Pi(t,n,i){var r=Ni;return function e(){null!==n.apply(null,arguments)&&Ii(t,e,i,r)}}var Mi=Ye&&!(K&&Number(K[1])<=53);function Ri(e,t,n,i){var r,o;Mi&&(r=rn,t=(o=t)._wrapper=function(e){if(e.target===e.currentTarget||e.timeStamp>=r||e.timeStamp<=0||e.target.ownerDocument!==document)return o.apply(this,arguments)}),Ni.addEventListener(e,t,Z?{capture:n,passive:i}:n)}function Ii(e,t,n,i){(i||Ni).removeEventListener(e,t._wrapper||t,n)}function Hi(e,t){var n,i,r;N(e.data.on)&&N(t.data.on)||(n=t.data.on||{},i=e.data.on||{},Ni=t.elm,L((r=n).__r)&&(r[e=X?"change":"input"]=[].concat(r.__r,r[e]||[]),delete r.__r),L(r.__c)&&(r.change=[].concat(r.__c,r.change||[]),delete r.__c),it(n,i,Ri,Ii,Pi,t.context),Ni=void 0)}var qi,Zn={create:Hi,update:Hi};function Fi(e,t){if(!N(e.data.domProps)||!N(t.data.domProps)){var n,i,r=t.elm,o=e.data.domProps||{},s=t.data.domProps||{};for(n in L(s.__ob__)&&(s=t.data.domProps=x({},s)),o)n in s||(r[n]="");for(n in s){if(i=s[n],"textContent"===n||"innerHTML"===n){if(t.children&&(t.children.length=0),i===o[n])continue;1===r.childNodes.length&&r.removeChild(r.childNodes[0])}if("value"===n&&"PROGRESS"!==r.tagName){var a=N(r._value=i)?"":String(i);u=a,(c=r).composing||"OPTION"!==c.tagName&&!function(e,t){var n=!0;try{n=document.activeElement!==e}catch(e){}return n&&e.value!==t}(c,u)&&!function(e){var t=c.value,n=c._vModifiers;if(L(n)){if(n.number)return M(t)!==M(e);if(n.trim)return t.trim()!==e.trim()}return t!==e}(u)||(r.value=a)}else if("innerHTML"===n&&Wn(r.tagName)&&N(r.innerHTML)){(qi=qi||document.createElement("div")).innerHTML="<svg>"+i+"</svg>";for(var l=qi.firstChild;r.firstChild;)r.removeChild(r.firstChild);for(;l.firstChild;)r.appendChild(l.firstChild)}else if(i!==o[n])try{r[n]=i}catch(e){}}}var c,u}var Ye={create:Fi,update:Fi},zi=e(function(e){var t={},n=/:(.+)/;return e.split(/;(?![^(]*\))/g).forEach(function(e){!e||1<(e=e.split(n)).length&&(t[e[0].trim()]=e[1].trim())}),t});function Bi(e){var t=Wi(e.style);return e.staticStyle?x(e.staticStyle,t):t}function Wi(e){return Array.isArray(e)?k(e):"string"==typeof e?zi(e):e}function Ui(e,t,n){if(Xi.test(t))e.style.setProperty(t,n);else if(Yi.test(n))e.style.setProperty(y(t),n.replace(Yi,""),"important");else{var i=Ji(t);if(Array.isArray(n))for(var r=0,o=n.length;r<o;r++)e.style[i]=n[r];else e.style[i]=n}}var Vi,Xi=/^--/,Yi=/\s*!important$/,Gi=["Webkit","Moz","ms"],Ji=e(function(e){if(Vi=Vi||document.createElement("div").style,"filter"!==(e=m(e))&&e in Vi)return e;for(var t=e.charAt(0).toUpperCase()+e.slice(1),n=0;n<Gi.length;n++){var i=Gi[n]+t;if(i in Vi)return i}});function Ki(e,t){var n=t.data,e=e.data;if(!(N(n.staticStyle)&&N(n.style)&&N(e.staticStyle)&&N(e.style))){var i,r,o=t.elm,n=e.staticStyle,e=e.normalizedStyle||e.style||{},s=n||e,e=Wi(t.data.style)||{};t.data.normalizedStyle=L(e.__ob__)?x({},e):e;var a=function(e){for(var t,n={},i=e;i.componentInstance;)(i=i.componentInstance._vnode)&&i.data&&(t=Bi(i.data))&&x(n,t);(t=Bi(e.data))&&x(n,t);for(var r=e;r=r.parent;)r.data&&(t=Bi(r.data))&&x(n,t);return n}(t);for(r in s)N(a[r])&&Ui(o,r,"");for(r in a)(i=a[r])!==s[r]&&Ui(o,r,null==i?"":i)}}var K={create:Ki,update:Ki},Qi=/\s+/;function Zi(t,e){var n;(e=e&&e.trim())&&(t.classList?-1<e.indexOf(" ")?e.split(Qi).forEach(function(e){return t.classList.add(e)}):t.classList.add(e):(n=" "+(t.getAttribute("class")||"")+" ").indexOf(" "+e+" ")<0&&t.setAttribute("class",(n+e).trim()))}function er(t,e){if(e=e&&e.trim())if(t.classList)-1<e.indexOf(" ")?e.split(Qi).forEach(function(e){return t.classList.remove(e)}):t.classList.remove(e),t.classList.length||t.removeAttribute("class");else{for(var n=" "+(t.getAttribute("class")||"")+" ",i=" "+e+" ";0<=n.indexOf(i);)n=n.replace(i," ");(n=n.trim())?t.setAttribute("class",n):t.removeAttribute("class")}}function tr(e){if(e){if("object"!=_typeof(e))return"string"==typeof e?nr(e):void 0;var t={};return!1!==e.css&&x(t,nr(e.name||"v")),x(t,e),t}}var nr=e(function(e){return{enterClass:e+"-enter",enterToClass:e+"-enter-to",enterActiveClass:e+"-enter-active",leaveClass:e+"-leave",leaveToClass:e+"-leave-to",leaveActiveClass:e+"-leave-active"}}),ir=B&&!Y,rr="transition",or="animation",sr="transition",ar="transitionend",lr="animation",cr="animationend";ir&&(void 0===window.ontransitionend&&void 0!==window.onwebkittransitionend&&(sr="WebkitTransition",ar="webkitTransitionEnd"),void 0===window.onanimationend&&void 0!==window.onwebkitanimationend&&(lr="WebkitAnimation",cr="webkitAnimationEnd"));var ur=B?window.requestAnimationFrame?window.requestAnimationFrame.bind(window):setTimeout:function(e){return e()};function dr(e){ur(function(){ur(e)})}function pr(e,t){var n=e._transitionClasses||(e._transitionClasses=[]);n.indexOf(t)<0&&(n.push(t),Zi(e,t))}function fr(e,t){e._transitionClasses&&v(e._transitionClasses,t),er(e,t)}function hr(t,e,n){var i=mr(t,e),r=i.type,e=i.timeout,o=i.propCount;if(!r)return n();function s(){t.removeEventListener(a,c),n()}var a=r===rr?ar:cr,l=0,c=function(e){e.target===t&&++l>=o&&s()};setTimeout(function(){l<o&&s()},e+1),t.addEventListener(a,c)}var vr=/\b(transform|all)(,|$)/;function mr(e,t){var n,i=window.getComputedStyle(e),r=(i[sr+"Delay"]||"").split(", "),o=(i[sr+"Duration"]||"").split(", "),s=gr(r,o),a=(i[lr+"Delay"]||"").split(", "),l=(i[lr+"Duration"]||"").split(", "),e=gr(a,l),r=0,a=0;return t===rr?0<s&&(n=rr,r=s,a=o.length):t===or?0<e&&(n=or,r=e,a=l.length):a=(n=0<(r=Math.max(s,e))?e<s?rr:or:null)?(n===rr?o:l).length:0,{type:n,timeout:r,propCount:a,hasTransform:n===rr&&vr.test(i[sr+"Property"])}}function gr(n,e){for(;n.length<e.length;)n=n.concat(n);return Math.max.apply(null,e.map(function(e,t){return yr(e)+yr(n[t])}))}function yr(e){return 1e3*Number(e.slice(0,-1).replace(",","."))}function br(t,e){var n=t.elm;L(n._leaveCb)&&(n._leaveCb.cancelled=!0,n._leaveCb());var i=tr(t.data.transition);if(!N(i)&&!L(n._enterCb)&&1===n.nodeType){for(var r=i.css,o=i.type,s=i.enterClass,a=i.enterToClass,l=i.enterActiveClass,c=i.appearClass,u=i.appearToClass,d=i.appearActiveClass,p=i.beforeEnter,f=i.enter,h=i.afterEnter,v=i.enterCancelled,m=i.beforeAppear,g=i.appear,y=i.afterAppear,b=i.appearCancelled,w=i.duration,x=Ut,k=Ut.$vnode;k&&k.parent;)x=k.context,k=k.parent;var C,S,T,_,$,A,O,E,j,D,i=!x._isMounted||!t.isRootInsert;i&&!g&&""!==g||(C=i&&c?c:s,S=i&&d?d:l,T=i&&u?u:a,p=i&&m||p,_=i&&"function"==typeof g?g:f,$=i&&y||h,A=i&&b||v,O=M(P(w)?w.enter:w),E=!1!==r&&!Y,j=kr(_),D=n._enterCb=R(function(){E&&(fr(n,T),fr(n,S)),D.cancelled?(E&&fr(n,C),A&&A(n)):$&&$(n),n._enterCb=null}),t.data.show||rt(t,"insert",function(){var e=n.parentNode,e=e&&e._pending&&e._pending[t.key];e&&e.tag===t.tag&&e.elm._leaveCb&&e.elm._leaveCb(),_&&_(n,D)}),p&&p(n),E&&(pr(n,C),pr(n,S),dr(function(){fr(n,C),D.cancelled||(pr(n,T),j||(xr(O)?setTimeout(D,O):hr(n,o,D)))})),t.data.show&&(e&&e(),_&&_(n,D)),E||j||D())}}function wr(e,t){var n=e.elm;L(n._enterCb)&&(n._enterCb.cancelled=!0,n._enterCb());var i,r,o,s,a,l,c,u,d,p,f,h,v,m,g=tr(e.data.transition);if(N(g)||1!==n.nodeType)return t();function y(){m.cancelled||(!e.data.show&&n.parentNode&&((n.parentNode._pending||(n.parentNode._pending={}))[e.key]=e),l&&l(n),f&&(pr(n,o),pr(n,a),dr(function(){fr(n,o),m.cancelled||(pr(n,s),h||(xr(v)?setTimeout(m,v):hr(n,r,m)))})),c&&c(n,m),f||h||m())}L(n._leaveCb)||(i=g.css,r=g.type,o=g.leaveClass,s=g.leaveToClass,a=g.leaveActiveClass,l=g.beforeLeave,c=g.leave,u=g.afterLeave,d=g.leaveCancelled,p=g.delayLeave,g=g.duration,f=!1!==i&&!Y,h=kr(c),v=M(P(g)?g.leave:g),m=n._leaveCb=R(function(){n.parentNode&&n.parentNode._pending&&(n.parentNode._pending[e.key]=null),f&&(fr(n,s),fr(n,a)),m.cancelled?(f&&fr(n,o),d&&d(n)):(t(),u&&u(n)),n._leaveCb=null}),p?p(y):y())}function xr(e){return"number"==typeof e&&!isNaN(e)}function kr(e){if(N(e))return!1;var t=e.fns;return L(t)?kr(Array.isArray(t)?t[0]:t):1<(e._length||e.length)}function Cr(e,t){!0!==t.data.show&&br(t)}Zn=function(e){for(var t,h={},n=e.modules,g=e.nodeOps,i=0;i<Kn.length;++i)for(h[Kn[i]]=[],t=0;t<n.length;++t)L(n[t][Kn[i]])&&h[Kn[i]].push(n[t][Kn[i]]);function o(e){var t=g.parentNode(e);L(t)&&g.removeChild(t,e)}function y(e,t,n,i,r,o,s){(e=L(e.elm)&&L(o)?o[s]=ge(e):e).isRootInsert=!r,function(e,t,n,i){var r=e.data;if(L(r)){var o=L(e.componentInstance)&&r.keepAlive;return(L(r=r.hook)&&L(r=r.init)&&r(e,!1),L(e.componentInstance))?(f(e,t),a(n,e.elm,i),$(o)&&function(e,t,n,i){for(var r,o=e;o.componentInstance;)if(o=o.componentInstance._vnode,L(r=o.data)&&L(r=r.transition)){for(r=0;r<h.activate.length;++r)h.activate[r](Jn,o);t.push(o);break}a(n,e.elm,i)}(e,t,n,i),1):void 0}}(e,t,n,i)||(o=e.data,s=e.children,L(r=e.tag)?(e.elm=e.ns?g.createElementNS(e.ns,r):g.createElement(r,e),l(e),v(e,s,t),L(o)&&m(e,t)):$(e.isComment)?e.elm=g.createComment(e.text):e.elm=g.createTextNode(e.text),a(n,e.elm,i))}function f(e,t){L(e.data.pendingInsert)&&(t.push.apply(t,e.data.pendingInsert),e.data.pendingInsert=null),e.elm=e.componentInstance.$el,b(e)?(m(e,t),l(e)):(Gn(e),t.push(e))}function a(e,t,n){L(e)&&(L(n)?g.parentNode(n)===e&&g.insertBefore(e,t,n):g.appendChild(e,t))}function v(e,t,n){if(Array.isArray(t))for(var i=0;i<t.length;++i)y(t[i],n,e.elm,null,!0,t,i);else c(e.text)&&g.appendChild(e.elm,g.createTextNode(String(e.text)))}function b(e){for(;e.componentInstance;)e=e.componentInstance._vnode;return L(e.tag)}function m(e,t){for(var n=0;n<h.create.length;++n)h.create[n](Jn,e);L(i=e.data.hook)&&(L(i.create)&&i.create(Jn,e),L(i.insert)&&t.push(e))}function l(e){var t;if(L(t=e.fnScopeId))g.setStyleScope(e.elm,t);else for(var n=e;n;)L(t=n.context)&&L(t=t.$options._scopeId)&&g.setStyleScope(e.elm,t),n=n.parent;L(t=Ut)&&t!==e.context&&t!==e.fnContext&&L(t=t.$options._scopeId)&&g.setStyleScope(e.elm,t)}function w(e,t,n,i,r,o){for(;i<=r;++i)y(n[i],o,e,t,!1,n,i)}function x(e){var t,n,i=e.data;if(L(i))for(L(t=i.hook)&&L(t=t.destroy)&&t(e),t=0;t<h.destroy.length;++t)h.destroy[t](e);if(L(t=e.children))for(n=0;n<e.children.length;++n)x(e.children[n])}function k(e,t,n){for(;t<=n;++t){var i=e[t];L(i)&&(L(i.tag)?(function e(t,n){if(L(n)||L(t.data)){var i,r=h.remove.length+1;for(L(n)?n.listeners+=r:n=function(e,t){function n(){0==--n.listeners&&o(e)}return n.listeners=t,n}(t.elm,r),L(i=t.componentInstance)&&L(i=i._vnode)&&L(i.data)&&e(i,n),i=0;i<h.remove.length;++i)h.remove[i](t,n);L(i=t.data.hook)&&L(i=i.remove)?i(t,n):n()}else o(t.elm)}(i),x(i)):o(i.elm))}}function C(e,t,n,i,r,m){if(e!==t){var o=(t=L(t.elm)&&L(i)?i[r]=ge(t):t).elm=e.elm;if($(e.isAsyncPlaceholder))L(t.asyncFactory.resolved)?_(e.elm,t,n):t.isAsyncPlaceholder=!0;else if($(t.isStatic)&&$(e.isStatic)&&t.key===e.key&&($(t.isCloned)||$(t.isOnce)))t.componentInstance=e.componentInstance;else{var s,a=t.data;L(a)&&L(s=a.hook)&&L(s=s.prepatch)&&s(e,t);i=e.children,r=t.children;if(L(a)&&b(t)){for(s=0;s<h.update.length;++s)h.update[s](e,t);L(s=a.hook)&&L(s=s.update)&&s(e,t)}N(t.text)?L(i)&&L(r)?i!==r&&function(e,t,n,i){for(var r,o,s,a=0,l=0,c=t.length-1,u=t[0],d=t[c],p=n.length-1,f=n[0],h=n[p],v=!m;a<=c&&l<=p;)N(u)?u=t[++a]:N(d)?d=t[--c]:Qn(u,f)?(C(u,f,i,n,l),u=t[++a],f=n[++l]):Qn(d,h)?(C(d,h,i,n,p),d=t[--c],h=n[--p]):Qn(u,h)?(C(u,h,i,n,p),v&&g.insertBefore(e,u.elm,g.nextSibling(d.elm)),u=t[++a],h=n[--p]):f=(Qn(d,f)?(C(d,f,i,n,l),v&&g.insertBefore(e,d.elm,u.elm),d=t[--c]):(N(r)&&(r=function(e,t,n){for(var i,r={},o=t;o<=n;++o)L(i=e[o].key)&&(r[i]=o);return r}(t,a,c)),!N(o=L(f.key)?r[f.key]:function(e,t,n,i){for(var r=n;r<i;r++){var o=t[r];if(L(o)&&Qn(e,o))return r}}(f,t,a,c))&&Qn(s=t[o],f)?(C(s,f,i,n,l),t[o]=void 0,v&&g.insertBefore(e,s.elm,u.elm)):y(f,i,e,u.elm,!1,n,l)),n[++l]);c<a?w(e,N(n[p+1])?null:n[p+1].elm,n,l,p,i):p<l&&k(t,a,c)}(o,i,r,n):L(r)?(L(e.text)&&g.setTextContent(o,""),w(o,null,r,0,r.length-1,n)):L(i)?k(i,0,i.length-1):L(e.text)&&g.setTextContent(o,""):e.text!==t.text&&g.setTextContent(o,t.text),L(a)&&L(s=a.hook)&&L(s=s.postpatch)&&s(e,t)}}}function S(e,t,n){if($(n)&&L(e.parent))e.parent.data.pendingInsert=t;else for(var i=0;i<t.length;++i)t[i].data.hook.insert(t[i])}var T=s("attrs,class,staticClass,staticStyle,key");function _(e,t,n,i){var r,o=t.tag,s=t.data,a=t.children;if(i=i||s&&s.pre,t.elm=e,$(t.isComment)&&L(t.asyncFactory))return t.isAsyncPlaceholder=!0;if(L(s)&&(L(r=s.hook)&&L(r=r.init)&&r(t,!0),L(r=t.componentInstance)))return f(t,n),1;if(L(o)){if(L(a))if(e.hasChildNodes())if(L(r=s)&&L(r=r.domProps)&&L(r=r.innerHTML)){if(r!==e.innerHTML)return}else{for(var l=!0,c=e.firstChild,u=0;u<a.length;u++){if(!c||!_(c,a[u],n,i)){l=!1;break}c=c.nextSibling}if(!l||c)return}else v(t,a,n);if(L(s)){var d,p=!1;for(d in s)if(!T(d)){p=!0,m(t,n);break}!p&&s.class&&et(s.class)}}else e.data!==t.text&&(e.data=t.text);return 1}return function(e,t,n,i){if(!N(t)){var r=!1,o=[];if(N(e))r=!0,y(t,o);else{var s=L(e.nodeType);if(!s&&Qn(e,t))C(e,t,o,null,null,i);else{if(s){if(1===e.nodeType&&e.hasAttribute(O)&&(e.removeAttribute(O),n=!0),$(n)&&_(e,t,o))return S(t,o,!0),e;a=e,e=new fe(g.tagName(a).toLowerCase(),{},[],void 0,a)}var n=e.elm,a=g.parentNode(n);if(y(t,o,n._leaveCb?null:a,g.nextSibling(n)),L(t.parent))for(var l=t.parent,c=b(t);l;){for(var u=0;u<h.destroy.length;++u)h.destroy[u](l);if(l.elm=t.elm,c){for(var d=0;d<h.create.length;++d)h.create[d](Jn,l);var p=l.data.hook.insert;if(p.merged)for(var f=1;f<p.fns.length;f++)p.fns[f]()}else Gn(l);l=l.parent}L(a)?k([e],0,0):L(e.tag)&&x(e)}}return S(t,o,r),t.elm}L(e)&&x(e)}}({nodeOps:he,modules:[An,j,Zn,Ye,K,B?{create:Cr,activate:Cr,remove:function(e,t){!0!==e.data.show?wr(e,t):t()}}:{}].concat(ae)});Y&&document.addEventListener("selectionchange",function(){var e=document.activeElement;e&&e.vmodel&&jr(e,"input")});var Sr={inserted:function(e,t,n,i){"select"===n.tag?(i.elm&&!i.elm._vOptions?rt(n,"postpatch",function(){Sr.componentUpdated(e,t,n)}):Tr(e,t,n.context),e._vOptions=[].map.call(e.options,Ar)):"textarea"!==n.tag&&!Xn(e.type)||(e._vModifiers=t.modifiers,t.modifiers.lazy||(e.addEventListener("compositionstart",Or),e.addEventListener("compositionend",Er),e.addEventListener("change",Er),Y&&(e.vmodel=!0)))},componentUpdated:function(e,t,n){var i,r;"select"===n.tag&&(Tr(e,t,n.context),i=e._vOptions,(r=e._vOptions=[].map.call(e.options,Ar)).some(function(e,t){return!_(e,i[t])})&&(e.multiple?t.value.some(function(e){return $r(e,r)}):t.value!==t.oldValue&&$r(t.value,r))&&jr(e,"change"))}};function Tr(e,t,n){_r(e,t),(X||G)&&setTimeout(function(){_r(e,t)},0)}function _r(e,t){var n=t.value,i=e.multiple;if(!i||Array.isArray(n)){for(var r,o,s=0,a=e.options.length;s<a;s++)if(o=e.options[s],i)r=-1<A(n,Ar(o)),o.selected!==r&&(o.selected=r);else if(_(Ar(o),n))return e.selectedIndex!==s&&(e.selectedIndex=s),0;i||(e.selectedIndex=-1)}}function $r(t,e){return e.every(function(e){return!_(e,t)})}function Ar(e){return"_value"in e?e._value:e.value}function Or(e){e.target.composing=!0}function Er(e){e.target.composing&&(e.target.composing=!1,jr(e.target,"input"))}function jr(e,t){var n=document.createEvent("HTMLEvents");n.initEvent(t,!0,!0),e.dispatchEvent(n)}function Dr(e){return!e.componentInstance||e.data&&e.data.transition?e:Dr(e.componentInstance._vnode)}Ye={model:Sr,show:{bind:function(e,t,n){var i=t.value,t=(n=Dr(n)).data&&n.data.transition,r=e.__vOriginalDisplay="none"===e.style.display?"":e.style.display;i&&t?(n.data.show=!0,br(n,function(){e.style.display=r})):e.style.display=i?r:"none"},update:function(e,t,n){var i=t.value;!i!=!t.oldValue&&((n=Dr(n)).data&&n.data.transition?(n.data.show=!0,i?br(n,function(){e.style.display=e.__vOriginalDisplay}):wr(n,function(){e.style.display="none"})):e.style.display=i?e.__vOriginalDisplay:"none")},unbind:function(e,t,n,i,r){r||(e.style.display=e.__vOriginalDisplay)}}},K={name:String,appear:Boolean,css:Boolean,mode:String,type:String,enterClass:String,leaveClass:String,enterToClass:String,leaveToClass:String,enterActiveClass:String,leaveActiveClass:String,appearClass:String,appearActiveClass:String,appearToClass:String,duration:[Number,String,Object]};function Nr(e){var t=e&&e.componentOptions;return t&&t.Ctor.options.abstract?Nr(qt(t.children)):e}function Lr(e){var t,n={},i=e.$options;for(t in i.propsData)n[t]=e[t];var r,o=i._parentListeners;for(r in o)n[m(r)]=o[r];return n}function Pr(e,t){if(/\d-keep-alive$/.test(t.tag))return e("keep-alive",{props:t.componentOptions.propsData})}function Mr(e){return e.tag||Ht(e)}function Rr(e){return"show"===e.name}ae={name:"transition",props:K,abstract:!0,render:function(e){var t=this,n=this.$slots.default;if(n&&(n=n.filter(Mr)).length){var i=this.mode,r=n[0];if(function(e){for(;e=e.parent;)if(e.data.transition)return 1}(this.$vnode))return r;var o=Nr(r);if(!o)return r;if(this._leaving)return Pr(e,r);var s="__transition-"+this._uid+"-";o.key=null==o.key?o.isComment?s+"comment":s+o.tag:!c(o.key)||0===String(o.key).indexOf(s)?o.key:s+o.key;var a=(o.data||(o.data={})).transition=Lr(this),n=this._vnode,s=Nr(n);if(o.data.directives&&o.data.directives.some(Rr)&&(o.data.show=!0),s&&s.data&&(s.key!==o.key||s.tag!==o.tag)&&!Ht(s)&&(!s.componentInstance||!s.componentInstance._vnode.isComment)){s=s.data.transition=x({},a);if("out-in"===i)return this._leaving=!0,rt(s,"afterLeave",function(){t._leaving=!1,t.$forceUpdate()}),Pr(e,r);if("in-out"===i){if(Ht(o))return n;var l,n=function(){l()};rt(a,"afterEnter",n),rt(a,"enterCancelled",n),rt(s,"delayLeave",function(e){l=e})}}return r}}},K=x({tag:String,moveClass:String},K);function Ir(e){e.elm._moveCb&&e.elm._moveCb(),e.elm._enterCb&&e.elm._enterCb()}function Hr(e){e.data.newPos=e.elm.getBoundingClientRect()}function qr(e){var t=e.data.pos,n=e.data.newPos,i=t.left-n.left,n=t.top-n.top;(i||n)&&(e.data.moved=!0,(e=e.elm.style).transform=e.WebkitTransform="translate("+i+"px,"+n+"px)",e.transitionDuration="0s")}delete K.mode;K={Transition:ae,TransitionGroup:{props:K,beforeMount:function(){var i=this,r=this._update;this._update=function(e,t){var n=Vt(i);i.__patch__(i._vnode,i.kept,!1,!0),i._vnode=i.kept,n(),r.call(i,e,t)}},render:function(e){for(var t=this.tag||this.$vnode.data.tag||"span",n=Object.create(null),i=this.prevChildren=this.children,r=this.$slots.default||[],o=this.children=[],s=Lr(this),a=0;a<r.length;a++){var l=r[a];l.tag&&null!=l.key&&0!==String(l.key).indexOf("__vlist")&&(o.push(l),((n[l.key]=l).data||(l.data={})).transition=s)}if(i){for(var c=[],u=[],d=0;d<i.length;d++){var p=i[d];p.data.transition=s,p.data.pos=p.elm.getBoundingClientRect(),(n[p.key]?c:u).push(p)}this.kept=e(t,null,c),this.removed=u}return e(t,null,o)},updated:function(){var e=this.prevChildren,i=this.moveClass||(this.name||"v")+"-move";e.length&&this.hasMove(e[0].elm,i)&&(e.forEach(Ir),e.forEach(Hr),e.forEach(qr),this._reflow=document.body.offsetHeight,e.forEach(function(e){var n;e.data.moved&&(e=(n=e.elm).style,pr(n,i),e.transform=e.WebkitTransform=e.transitionDuration="",n.addEventListener(ar,n._moveCb=function e(t){t&&t.target!==n||t&&!/transform$/.test(t.propertyName)||(n.removeEventListener(ar,e),n._moveCb=null,fr(n,i))}))}))},methods:{hasMove:function(e,t){if(!ir)return!1;if(this._hasMove)return this._hasMove;var n=e.cloneNode();e._transitionClasses&&e._transitionClasses.forEach(function(e){er(n,e)}),Zi(n,t),n.style.display="none",this.$el.appendChild(n);t=mr(n);return this.$el.removeChild(n),this._hasMove=t.hasTransform}}}};wn.config.mustUseProp=V,wn.config.isReservedTag=Fn,wn.config.isReservedAttr=U,wn.config.getTagNamespace=Un,wn.config.isUnknownElement=function(e){if(!B)return!0;if(Fn(e))return!1;if(e=e.toLowerCase(),null!=Vn[e])return Vn[e];var t=document.createElement(e);return-1<e.indexOf("-")?Vn[e]=t.constructor===window.HTMLUnknownElement||t.constructor===window.HTMLElement:Vn[e]=/HTMLUnknownElement/.test(t.toString())},x(wn.options.directives,Ye),x(wn.options.components,K),wn.prototype.__patch__=B?Zn:C,wn.prototype.$mount=function(e,t){return n=this,e=e=e&&B?Yn(e):void 0,i=t,n.$el=e,n.$options.render||(n.$options.render=ve),Gt(n,"beforeMount"),e=function(){n._update(n._render(),i)},new an(n,e,C,{before:function(){n._isMounted&&!n._isDestroyed&&Gt(n,"beforeUpdate")}},!0),i=!1,null==n.$vnode&&(n._isMounted=!0,Gt(n,"mounted")),n;var n,i},B&&setTimeout(function(){D.devtools&&ne&&ne.emit("init",wn)},0);function Fr(e,t){return e&&so(e)&&"\n"===t[0]}var zr,Br=/\{\{((?:.|\r?\n)+?)\}\}/g,Wr=/[-.*+?^${}()|[\]\/\\]/g,Ur=e(function(e){var t=e[0].replace(Wr,"\\$&"),e=e[1].replace(Wr,"\\$&");return new RegExp(t+"((?:.|\\n)+?)"+e,"g")}),U={staticKeys:["staticClass"],transformNode:function(e,t){t.warn;t=Si(e,"class");t&&(e.staticClass=JSON.stringify(t));t=Ci(e,"class",!1);t&&(e.classBinding=t)},genData:function(e){var t="";return e.staticClass&&(t+="staticClass:"+e.staticClass+","),e.classBinding&&(t+="class:"+e.classBinding+","),t}},Ye={staticKeys:["staticStyle"],transformNode:function(e,t){t.warn;t=Si(e,"style");t&&(e.staticStyle=JSON.stringify(zi(t)));t=Ci(e,"style",!1);t&&(e.styleBinding=t)},genData:function(e){var t="";return e.staticStyle&&(t+="staticStyle:"+e.staticStyle+","),e.styleBinding&&(t+="style:("+e.styleBinding+"),"),t}},K=s("area,base,br,col,embed,frame,hr,img,input,isindex,keygen,link,meta,param,source,track,wbr"),Zn=s("colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source"),Vr=s("address,article,aside,base,blockquote,body,caption,col,colgroup,dd,details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,title,tr,track"),Xr=/^\s*([^\s"'<>\/=]+)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/,Yr=/^\s*((?:v-[\w-]+:|@|:|#)\[[^=]+\][^\s"'<>\/=]*)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/,I="[a-zA-Z_][\\-\\.0-9_a-zA-Z"+I.source+"]*",I="((?:"+I+"\\:)?"+I+")",Gr=new RegExp("^<"+I),Jr=/^\s*(\/?)>/,Kr=new RegExp("^<\\/"+I+"[^>]*>"),Qr=/^<!DOCTYPE [^>]+>/i,Zr=/^<!\--/,eo=/^<!\[/,to=s("script,style,textarea",!0),no={},io={"&lt;":"<","&gt;":">","&quot;":'"',"&amp;":"&","&#10;":"\n","&#9;":"\t","&#39;":"'"},ro=/&(?:lt|gt|quot|amp|#39);/g,oo=/&(?:lt|gt|quot|amp|#39|#10|#9);/g,so=s("pre,textarea",!0);var ao,lo,co,uo,po,fo,ho,vo,mo=/^@|^v-on:/,go=/^v-|^@|^:|^#/,yo=/([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/,bo=/,([^,\}\]]*)(?:,([^,\}\]]*))?$/,wo=/^\(|\)$/g,xo=/^\[.*\]$/,ko=/:(.*)$/,Co=/^:|^\.|^v-bind:/,So=/\.[^.\]]+(?=[^\]]*$)/g,To=/^v-slot(:|$)|^#/,_o=/[\r\n]/,$o=/\s+/g,Ao=e(function(e){return(zr=zr||document.createElement("div")).innerHTML=e,zr.textContent}),Oo="_empty_";function Eo(e,t,n){return{type:1,tag:e,attrsList:t,attrsMap:function(e){for(var t={},n=0,i=e.length;n<i;n++)t[e[n].name]=e[n].value;return t}(t),rawAttrsMap:{},parent:n,children:[]}}function jo(e,c){ao=c.warn||mi,fo=c.isPreTag||S,ho=c.mustUseProp||S,vo=c.getTagNamespace||S,c.isReservedTag,co=gi(c.modules,"transformNode"),uo=gi(c.modules,"preTransformNode"),po=gi(c.modules,"postTransformNode"),lo=c.delimiters;var u,d,p=[],s=!1!==c.preserveWhitespace,a=c.whitespace,f=!1,h=!1;function v(e){var t,n;r(e),f||e.processed||(e=Do(e,c)),p.length||e===u||u.if&&(e.elseif||e.else)&&Lo(u,{exp:e.elseif,block:e}),d&&!e.forbidden&&(e.elseif||e.else?(t=e,(n=function(e){for(var t=e.length;t--;){if(1===e[t].type)return e[t];e.pop()}}(d.children))&&n.if&&Lo(n,{exp:t.elseif,block:t})):(e.slotScope&&(t=e.slotTarget||'"default"',(d.scopedSlots||(d.scopedSlots={}))[t]=e),d.children.push(e),e.parent=d)),e.children=e.children.filter(function(e){return!e.slotScope}),r(e),e.pre&&(f=!1),fo(e.tag)&&(h=!1);for(var i=0;i<po.length;i++)po[i](e,c)}function r(e){if(!h)for(var t;(t=e.children[e.children.length-1])&&3===t.type&&" "===t.text;)e.children.pop()}return function(r,c){for(var e,u,d=[],p=c.expectHTML,f=c.isUnaryTag||S,h=c.canBeLeftOpenTag||S,s=0;r;){if(e=r,u&&to(u)){var i=0,o=u.toLowerCase(),t=no[o]||(no[o]=new RegExp("([\\s\\S]*?)(</"+o+"[^>]*>)","i")),t=r.replace(t,function(e,t,n){return i=n.length,to(o)||"noscript"===o||(t=t.replace(/<!\--([\s\S]*?)-->/g,"$1").replace(/<!\[CDATA\[([\s\S]*?)]]>/g,"$1")),Fr(o,t)&&(t=t.slice(1)),c.chars&&c.chars(t),""});s+=r.length-t.length,r=t,y(o,s-i,s)}else{var n=r.indexOf("<");if(0===n){if(Zr.test(r)){t=r.indexOf("--\x3e");if(0<=t){c.shouldKeepComment&&c.comment(r.substring(4,t),s,s+t+3),g(t+3);continue}}if(eo.test(r)){var a=r.indexOf("]>");if(0<=a){g(a+2);continue}}a=r.match(Qr);if(a){g(a[0].length);continue}a=r.match(Kr);if(a){var l=s;g(a[0].length),y(a[1],l,s);continue}l=function(){var e=r.match(Gr);if(e){var t,n,i={tagName:e[1],attrs:[],start:s};for(g(e[0].length);!(t=r.match(Jr))&&(n=r.match(Yr)||r.match(Xr));)n.start=s,g(n[0].length),n.end=s,i.attrs.push(n);if(t)return i.unarySlash=t[1],g(t[0].length),i.end=s,i}}();if(l){(function(e){var t=e.tagName,n=e.unarySlash;p&&("p"===u&&Vr(t)&&y(u),h(t)&&u===t&&y(t));for(var n=f(t)||!!n,i=e.attrs.length,r=new Array(i),o=0;o<i;o++){var s=e.attrs[o],a=s[3]||s[4]||s[5]||"",l="a"===t&&"href"===s[1]?c.shouldDecodeNewlinesForHref:c.shouldDecodeNewlines;r[o]={name:s[1],value:function(e,t){return t=t?oo:ro,e.replace(t,function(e){return io[e]})}(a,l)}}n||(d.push({tag:t,lowerCasedTag:t.toLowerCase(),attrs:r,start:e.start,end:e.end}),u=t),c.start&&c.start(t,r,n,e.start,e.end)})(l),Fr(l.tagName,r)&&g(1);continue}}var l=void 0,v=void 0,m=void 0;if(0<=n){for(v=r.slice(n);!(Kr.test(v)||Gr.test(v)||Zr.test(v)||eo.test(v)||(m=v.indexOf("<",1))<0);)n+=m,v=r.slice(n);l=r.substring(0,n)}(l=n<0?r:l)&&g(l.length),c.chars&&l&&c.chars(l,s-l.length,s)}if(r===e){c.chars&&c.chars(r);break}}function g(e){s+=e,r=r.substring(e)}function y(e,t,n){var i,r;if(null==t&&(t=s),null==n&&(n=s),e)for(r=e.toLowerCase(),i=d.length-1;0<=i&&d[i].lowerCasedTag!==r;i--);else i=0;if(0<=i){for(var o=d.length-1;i<=o;o--)c.end&&c.end(d[o].tag,t,n);d.length=i,u=i&&d[i-1].tag}else"br"===r?c.start&&c.start(e,[],!0,t,n):"p"===r&&(c.start&&c.start(e,[],!1,t,n),c.end&&c.end(e,t,n))}y()}(e,{warn:ao,expectHTML:c.expectHTML,isUnaryTag:c.isUnaryTag,canBeLeftOpenTag:c.canBeLeftOpenTag,shouldDecodeNewlines:c.shouldDecodeNewlines,shouldDecodeNewlinesForHref:c.shouldDecodeNewlinesForHref,shouldKeepComment:c.comments,outputSourceRange:c.outputSourceRange,start:function(e,t,n,i,r){var o=d&&d.ns||vo(e),s=Eo(e,t=X&&"svg"===o?function(e){for(var t=[],n=0;n<e.length;n++){var i=e[n];Mo.test(i.name)||(i.name=i.name.replace(Ro,""),t.push(i))}return t}(t):t,d);o&&(s.ns=o),"style"!==s.tag&&("script"!==s.tag||s.attrsMap.type&&"text/javascript"!==s.attrsMap.type)||te()||(s.forbidden=!0);for(var a,l=0;l<uo.length;l++)s=uo[l](s,c)||s;f||(null!=Si(a=s,"v-pre")&&(a.pre=!0),s.pre&&(f=!0)),fo(s.tag)&&(h=!0),f?function(e){var t=e.attrsList,n=t.length;if(n)for(var i=e.attrs=new Array(n),r=0;r<n;r++)i[r]={name:t[r].name,value:JSON.stringify(t[r].value)},null!=t[r].start&&(i[r].start=t[r].start,i[r].end=t[r].end);else e.pre||(e.plain=!0)}(s):s.processed||(No(s),(a=Si(o=s,"v-if"))?(o.if=a,Lo(o,{exp:a,block:o})):(null!=Si(o,"v-else")&&(o.else=!0),(a=Si(o,"v-else-if"))&&(o.elseif=a)),null!=Si(a=s,"v-once")&&(a.once=!0)),u=u||s,n?v(s):(d=s,p.push(s))},end:function(e,t,n){var i=p[p.length-1];--p.length,d=p[p.length-1],v(i)},chars:function(e,t,n){var i,r,o;!d||X&&"textarea"===d.tag&&d.attrsMap.placeholder===e||(o=d.children,(e=h||e.trim()?"script"===d.tag||"style"===d.tag?e:Ao(e):o.length?a?"condense"===a&&_o.test(e)?"":" ":s?" ":"":"")&&(h||"condense"!==a||(e=e.replace($o," ")),!f&&" "!==e&&(i=function(e){var t=lo?Ur(lo):Br;if(t.test(e)){for(var n,i,r,o=[],s=[],a=t.lastIndex=0;n=t.exec(e);){(i=n.index)>a&&(s.push(r=e.slice(a,i)),o.push(JSON.stringify(r)));var l=vi(n[1].trim());o.push("_s("+l+")"),s.push({"@binding":l}),a=i+n[0].length}return a<e.length&&(s.push(r=e.slice(a)),o.push(JSON.stringify(r))),{expression:o.join("+"),tokens:s}}}(e))?r={type:2,expression:i.expression,tokens:i.tokens,text:e}:" "===e&&o.length&&" "===o[o.length-1].text||(r={type:3,text:e}),r&&o.push(r)))},comment:function(e,t,n){d&&(e={type:3,text:e,isComment:!0},d.children.push(e))}}),u}function Do(e,t){var n,i,r;(n=Ci(r=e,"key"))&&(r.key=n),e.plain=!e.key&&!e.scopedSlots&&!e.attrsList.length,(r=Ci(i=e,"ref"))&&(i.ref=r,i.refInFor=function(){for(var e=i;e;){if(void 0!==e.for)return!0;e=e.parent}return!1}()),function(e){"template"===e.tag?(s=Si(e,"scope"),e.slotScope=s||Si(e,"slot-scope")):(s=Si(e,"slot-scope"))&&(e.slotScope=s);var t,n,i,r,o,s=Ci(e,"slot");s&&(e.slotTarget='""'===s?'"default"':s,e.slotTargetDynamic=!(!e.attrsMap[":slot"]&&!e.attrsMap["v-bind:slot"]),"template"===e.tag||e.slotScope||bi(e,"slot",s,(s="slot",e.rawAttrsMap[":"+s]||e.rawAttrsMap["v-bind:"+s]||e.rawAttrsMap[s]))),"template"===e.tag?(i=Ti(e,To))&&(n=(t=Po(i)).name,r=t.dynamic,e.slotTarget=n,e.slotTargetDynamic=r,e.slotScope=i.value||Oo):(t=Ti(e,To))&&(n=e.scopedSlots||(e.scopedSlots={}),i=(r=Po(t)).name,r=r.dynamic,(o=n[i]=Eo("template",[],e)).slotTarget=i,o.slotTargetDynamic=r,o.children=e.children.filter(function(e){if(!e.slotScope)return e.parent=o,!0}),o.slotScope=t.value||Oo,e.children=[],e.plain=!1)}(e),"slot"===e.tag&&(e.slotName=Ci(e,"name")),(r=Ci(n=e,"is"))&&(n.component=r),null!=Si(n,"inline-template")&&(n.inlineTemplate=!0);for(var o=0;o<co.length;o++)e=co[o](e,t)||e;return function(e){for(var t,n,i,r,o,s,a=e.attrsList,l=0,c=a.length;l<c;l++){var u,d,p,f=o=a[l].name,h=a[l].value;go.test(f)?(e.hasBindings=!0,(s=function(e){e=e.match(So);if(e){var t={};return e.forEach(function(e){t[e.slice(1)]=!0}),t}}(f.replace(go,"")))&&(f=f.replace(So,"")),Co.test(f)?(f=f.replace(Co,""),h=vi(h),(p=xo.test(f))&&(f=f.slice(1,-1)),s&&(s.prop&&!p&&"innerHtml"===(f=m(f))&&(f="innerHTML"),s.camel&&!p&&(f=m(f)),s.sync&&(r=Ai(h,"$event"),p?ki(e,'"update:"+('+f+")",r,null,!1,0,a[l],!0):(ki(e,"update:"+m(f),r,null,!1,0,a[l]),y(f)!==m(f)&&ki(e,"update:"+y(f),r,null,!1,0,a[l])))),(s&&s.prop||!e.component&&ho(e.tag,e.attrsMap.type,f)?yi:bi)(e,f,h,a[l],p)):mo.test(f)?(f=f.replace(mo,""),ki(e,f=(p=xo.test(f))?f.slice(1,-1):f,h,s,!1,0,a[l],p)):(p=!1,(d=(u=(f=f.replace(go,"")).match(ko))&&u[1])&&(f=f.slice(0,-(d.length+1)),xo.test(d)&&(d=d.slice(1,-1),p=!0)),t=e,n=f,i=o,r=h,u=d,o=p,d=s,s=a[l],(t.directives||(t.directives=[])).push(_i({name:n,rawName:i,value:r,arg:u,isDynamicArg:o,modifiers:d},s)),t.plain=!1)):(bi(e,f,JSON.stringify(h),a[l]),!e.component&&"muted"===f&&ho(e.tag,e.attrsMap.type,f)&&yi(e,f,"true",a[l]))}}(e),e}function No(e){var i,t;!(i=Si(e,"v-for"))||(t=function(){var e=i.match(yo);if(e){var t={};t.for=e[2].trim();var n=e[1].trim().replace(wo,""),e=n.match(bo);return e?(t.alias=n.replace(bo,"").trim(),t.iterator1=e[1].trim(),e[2]&&(t.iterator2=e[2].trim())):t.alias=n,t}}())&&x(e,t)}function Lo(e,t){e.ifConditions||(e.ifConditions=[]),e.ifConditions.push(t)}function Po(e){var t=e.name.replace(To,"");return t||"#"!==e.name[0]&&(t="default"),xo.test(t)?{name:t.slice(1,-1),dynamic:!0}:{name:'"'+t+'"',dynamic:!1}}var Mo=/^xmlns:NS\d+/,Ro=/^NS\d+:/;function Io(e){return Eo(e.tag,e.attrsList.slice(),e.parent)}var Ho,qo,Ye=[U,Ye,{preTransformNode:function(e,t){if("input"===e.tag){var n,i=e.attrsMap;if(i["v-model"]&&((i[":type"]||i["v-bind:type"])&&(n=Ci(e,"type")),n=!i.type&&!n&&i["v-bind"]?"("+i["v-bind"]+").type":n)){var r=Si(e,"v-if",!0),o=r?"&&("+r+")":"",s=null!=Si(e,"v-else",!0),a=Si(e,"v-else-if",!0),l=Io(e);No(l),wi(l,"type","checkbox"),Do(l,t),l.processed=!0,l.if="("+n+")==='checkbox'"+o,Lo(l,{exp:l.if,block:l});i=Io(e);Si(i,"v-for",!0),wi(i,"type","radio"),Do(i,t),Lo(l,{exp:"("+n+")==='radio'"+o,block:i});e=Io(e);return Si(e,"v-for",!0),wi(e,":type",n),Do(e,t),Lo(l,{exp:r,block:e}),s?l.else=!0:a&&(l.elseif=a),l}}}}],Ye={expectHTML:!0,modules:Ye,directives:{model:function(e,t,n){var i,r,o,s,a,l,c,u,d,p=t.value,f=t.modifiers,h=e.tag,v=e.attrsMap.type;if(e.component)return $i(e,p,f),!1;if("select"===h)ki(e,"change",'var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return '+(f&&f.number?"_n(val)":"val")+"});"+" "+Ai(p,"$event.target.multiple ? $$selectedVal : $$selectedVal[0]"),null,!0);else if("input"===h&&"checkbox"===v)a=e,l=p,c=f&&f.number,u=Ci(a,"value")||"null",d=Ci(a,"true-value")||"true",t=Ci(a,"false-value")||"false",yi(a,"checked","Array.isArray("+l+")?_i("+l+","+u+")>-1"+("true"===d?":("+l+")":":_q("+l+","+d+")")),ki(a,"change","var $$a="+l+",$$el=$event.target,$$c=$$el.checked?("+d+"):("+t+");if(Array.isArray($$a)){var $$v="+(c?"_n("+u+")":u)+",$$i=_i($$a,$$v);if($$el.checked){$$i<0&&("+Ai(l,"$$a.concat([$$v])")+")}else{$$i>-1&&("+Ai(l,"$$a.slice(0,$$i).concat($$a.slice($$i+1))")+")}}else{"+Ai(l,"$$c")+"}",null,!0);else if("input"===h&&"radio"===v)i=e,r=p,o=f&&f.number,s=Ci(i,"value")||"null",yi(i,"checked","_q("+r+","+(s=o?"_n("+s+")":s)+")"),ki(i,"change",Ai(r,s),null,!0);else if("input"===h||"textarea"===h)u=p,v=(l=e).attrsMap.type,i=(o=f||{}).number,r=o.trim,o=!(s=o.lazy)&&"range"!==v,s=s?"change":"range"===v?Li:"input",v=r?"$event.target.value.trim()":"$event.target.value",v=Ai(u,v=i?"_n("+v+")":v),o&&(v="if($event.target.composing)return;"+v),yi(l,"value","("+u+")"),ki(l,s,v,null,!0),(r||i)&&ki(l,"blur","$forceUpdate()");else if(!D.isReservedTag(h))return $i(e,p,f),!1;return!0},text:function(e,t){t.value&&yi(e,"textContent","_s("+t.value+")",t)},html:function(e,t){t.value&&yi(e,"innerHTML","_s("+t.value+")",t)}},isPreTag:function(e){return"pre"===e},isUnaryTag:K,mustUseProp:V,canBeLeftOpenTag:Zn,isReservedTag:Fn,getTagNamespace:Un,staticKeys:Ye.reduce(function(e,t){return e.concat(t.staticKeys||[])},[]).join(",")},Fo=e(function(e){return s("type,tag,attrsList,attrsMap,plain,parent,children,attrs,start,end,rawAttrsMap"+(e?","+e:""))});function zo(e,t){e&&(Ho=Fo(t.staticKeys||""),qo=t.isReservedTag||S,function e(t){var n;if(t.static=(n=t,2!==n.type&&(3===n.type||!(!n.pre&&(n.hasBindings||n.if||n.for||u(n.tag)||!qo(n.tag)||function(e){for(;e.parent;){if("template"!==(e=e.parent).tag)return;if(e.for)return 1}}(n)||!Object.keys(n).every(Ho))))),1===t.type&&(qo(t.tag)||"slot"===t.tag||null!=t.attrsMap["inline-template"])){for(var i=0,r=t.children.length;i<r;i++){var o=t.children[i];e(o),o.static||(t.static=!1)}if(t.ifConditions)for(var s=1,a=t.ifConditions.length;s<a;s++){var l=t.ifConditions[s].block;e(l),l.static||(t.static=!1)}}}(e),function e(t,n){if(1===t.type){if((t.static||t.once)&&(t.staticInFor=n),t.static&&t.children.length&&(1!==t.children.length||3!==t.children[0].type))return t.staticRoot=!0,0;if(t.staticRoot=!1,t.children)for(var i=0,r=t.children.length;i<r;i++)e(t.children[i],n||!!t.for);if(t.ifConditions)for(var o=1,s=t.ifConditions.length;o<s;o++)e(t.ifConditions[o].block,n)}}(e,!1))}var Bo=/^([\w$_]+|\([^)]*?\))\s*=>|^function(?:\s+[\w$]+)?\s*\(/,Wo=/\([^)]*?\);*$/,Uo=/^[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['[^']*?']|\["[^"]*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*$/,Vo={esc:27,tab:9,enter:13,space:32,up:38,left:37,right:39,down:40,delete:[8,46]},Xo={esc:["Esc","Escape"],tab:"Tab",enter:"Enter",space:[" ","Spacebar"],up:["Up","ArrowUp"],left:["Left","ArrowLeft"],right:["Right","ArrowRight"],down:["Down","ArrowDown"],delete:["Backspace","Delete","Del"]},Yo=function(e){return"if("+e+")return null;"},Go={stop:"$event.stopPropagation();",prevent:"$event.preventDefault();",self:Yo("$event.target !== $event.currentTarget"),ctrl:Yo("!$event.ctrlKey"),shift:Yo("!$event.shiftKey"),alt:Yo("!$event.altKey"),meta:Yo("!$event.metaKey"),left:Yo("'button' in $event && $event.button !== 0"),middle:Yo("'button' in $event && $event.button !== 1"),right:Yo("'button' in $event && $event.button !== 2")};function Jo(e,t){var n,t=t?"nativeOn:":"on:",i="",r="";for(n in e){var o=function t(e){if(!e)return"function(){}";if(Array.isArray(e))return"["+e.map(function(e){return t(e)}).join(",")+"]";var n=Uo.test(e.value),i=Bo.test(e.value),r=Uo.test(e.value.replace(Wo,""));if(e.modifiers){var o,s,a="",l="",c=[];for(o in e.modifiers)Go[o]?(l+=Go[o],Vo[o]&&c.push(o)):"exact"===o?(s=e.modifiers,l+=Yo(["ctrl","shift","alt","meta"].filter(function(e){return!s[e]}).map(function(e){return"$event."+e+"Key"}).join("||"))):c.push(o);return c.length&&(a+=function(e){return"if(!$event.type.indexOf('key')&&"+e.map(Ko).join("&&")+")return null;"}(c)),l&&(a+=l),"function($event){"+a+(n?"return "+e.value+"($event)":i?"return ("+e.value+")($event)":r?"return "+e.value:e.value)+"}"}return n||i?e.value:"function($event){"+(r?"return "+e.value:e.value)+"}"}(e[n]);e[n]&&e[n].dynamic?r+=n+","+o+",":i+='"'+n+'":'+o+","}return i="{"+i.slice(0,-1)+"}",r?t+"_d("+i+",["+r.slice(0,-1)+"])":t+i}function Ko(e){var t=parseInt(e,10);if(t)return"$event.keyCode!=="+t;var n=Vo[e],t=Xo[e];return"_k($event.keyCode,"+JSON.stringify(e)+","+JSON.stringify(n)+",$event.key,"+JSON.stringify(t)+")"}var Qo={on:function(e,t){e.wrapListeners=function(e){return"_g("+e+","+t.value+")"}},bind:function(t,n){t.wrapData=function(e){return"_b("+e+",'"+t.tag+"',"+n.value+","+(n.modifiers&&n.modifiers.prop?"true":"false")+(n.modifiers&&n.modifiers.sync?",true":"")+")"}},cloak:C},Zo=function(e){this.options=e,this.warn=e.warn||mi,this.transforms=gi(e.modules,"transformCode"),this.dataGenFns=gi(e.modules,"genData"),this.directives=x(x({},Qo),e.directives);var t=e.isReservedTag||S;this.maybeComponent=function(e){return!!e.component||!t(e.tag)},this.onceId=0,this.staticRenderFns=[],this.pre=!1};function es(e,t){t=new Zo(t);return{render:"with(this){return "+(e?ts(e,t):'_c("div")')+"}",staticRenderFns:t.staticRenderFns}}function ts(e,t){if(e.parent&&(e.pre=e.pre||e.parent.pre),e.staticRoot&&!e.staticProcessed)return ns(e,t);if(e.once&&!e.onceProcessed)return is(e,t);if(e.for&&!e.forProcessed)return os(e,t);if(e.if&&!e.ifProcessed)return rs(e,t);if("template"!==e.tag||e.slotTarget||t.pre){if("slot"===e.tag)return a=(s=e).slotName||'"default"',l=cs(s,t),c="_t("+a+(l?","+l:""),a=s.attrs||s.dynamicAttrs?ps((s.attrs||[]).concat(s.dynamicAttrs||[]).map(function(e){return{name:m(e.name),value:e.value,dynamic:e.dynamic}})):null,s=s.attrsMap["v-bind"],!a&&!s||l||(c+=",null"),a&&(c+=","+a),s&&(c+=(a?"":",null")+","+s),c+")";var n,i;i=e.component?(a=e.component,s=t,o=(c=e).inlineTemplate?null:cs(c,s,!0),"_c("+a+","+ss(c,s)+(o?","+o:"")+")"):((!e.plain||e.pre&&t.maybeComponent(e))&&(n=ss(e,t)),o=e.inlineTemplate?null:cs(e,t,!0),"_c('"+e.tag+"'"+(n?","+n:"")+(o?","+o:"")+")");for(var r=0;r<t.transforms.length;r++)i=t.transforms[r](e,i);return i}var o,s,a,l,c;return cs(e,t)||"void 0"}function ns(e,t){e.staticProcessed=!0;var n=t.pre;return e.pre&&(t.pre=e.pre),t.staticRenderFns.push("with(this){return "+ts(e,t)+"}"),t.pre=n,"_m("+(t.staticRenderFns.length-1)+(e.staticInFor?",true":"")+")"}function is(e,t){if(e.onceProcessed=!0,e.if&&!e.ifProcessed)return rs(e,t);if(e.staticInFor){for(var n="",i=e.parent;i;){if(i.for){n=i.key;break}i=i.parent}return n?"_o("+ts(e,t)+","+t.onceId+++","+n+")":ts(e,t)}return ns(e,t)}function rs(e,t,n,i){return e.ifProcessed=!0,function e(t,n,i,r){if(!t.length)return r||"_e()";var o=t.shift();return o.exp?"("+o.exp+")?"+s(o.block)+":"+e(t,n,i,r):""+s(o.block);function s(e){return(i||(e.once?is:ts))(e,n)}}(e.ifConditions.slice(),t,n,i)}function os(e,t,n,i){var r=e.for,o=e.alias,s=e.iterator1?","+e.iterator1:"",a=e.iterator2?","+e.iterator2:"";return e.forProcessed=!0,(i||"_l")+"(("+r+"),function("+o+s+a+"){return "+(n||ts)(e,t)+"})"}function ss(t,n){var e="{",i=function(e,t){var n=e.directives;if(n){for(var i="directives:[",r=!1,o=0,s=n.length;o<s;o++){var a=n[o],l=!0,c=t.directives[a.name];(l=c?!!c(e,a,t.warn):l)&&(r=!0,i+='{name:"'+a.name+'",rawName:"'+a.rawName+'"'+(a.value?",value:("+a.value+"),expression:"+JSON.stringify(a.value):"")+(a.arg?",arg:"+(a.isDynamicArg?a.arg:'"'+a.arg+'"'):"")+(a.modifiers?",modifiers:"+JSON.stringify(a.modifiers):"")+"},")}return r?i.slice(0,-1)+"]":void 0}}(t,n);i&&(e+=i+","),t.key&&(e+="key:"+t.key+","),t.ref&&(e+="ref:"+t.ref+","),t.refInFor&&(e+="refInFor:true,"),t.pre&&(e+="pre:true,"),t.component&&(e+='tag:"'+t.tag+'",');for(var r,o=0;o<n.dataGenFns.length;o++)e+=n.dataGenFns[o](t);return t.attrs&&(e+="attrs:"+ps(t.attrs)+","),t.props&&(e+="domProps:"+ps(t.props)+","),t.events&&(e+=Jo(t.events,!1)+","),t.nativeEvents&&(e+=Jo(t.nativeEvents,!0)+","),t.slotTarget&&!t.slotScope&&(e+="slot:"+t.slotTarget+","),t.scopedSlots&&(e+=function(e,t,n){var i=e.for||Object.keys(t).some(function(e){e=t[e];return e.slotTargetDynamic||e.if||e.for||as(e)}),r=!!e.if;if(!i)for(var o=e.parent;o;){if(o.slotScope&&o.slotScope!==Oo||o.for){i=!0;break}o.if&&(r=!0),o=o.parent}e=Object.keys(t).map(function(e){return ls(t[e],n)}).join(",");return"scopedSlots:_u(["+e+"]"+(i?",null,true":"")+(!i&&r?",null,false,"+function(e){for(var t=5381,n=e.length;n;)t=33*t^e.charCodeAt(--n);return t>>>0}(e):"")+")"}(t,t.scopedSlots,n)+","),t.model&&(e+="model:{value:"+t.model.value+",callback:"+t.model.callback+",expression:"+t.model.expression+"},"),t.inlineTemplate&&(r=function(){var e=t.children[0];if(e&&1===e.type){e=es(e,n.options);return"inlineTemplate:{render:function(){"+e.render+"},staticRenderFns:["+e.staticRenderFns.map(function(e){return"function(){"+e+"}"}).join(",")+"]}"}}())&&(e+=r+","),e=e.replace(/,$/,"")+"}",t.dynamicAttrs&&(e="_b("+e+',"'+t.tag+'",'+ps(t.dynamicAttrs)+")"),t.wrapData&&(e=t.wrapData(e)),e=t.wrapListeners?t.wrapListeners(e):e}function as(e){return 1===e.type&&("slot"===e.tag||e.children.some(as))}function ls(e,t){var n=e.attrsMap["slot-scope"];if(e.if&&!e.ifProcessed&&!n)return rs(e,t,ls,"null");if(e.for&&!e.forProcessed)return os(e,t,ls);var i=e.slotScope===Oo?"":String(e.slotScope),t="function("+i+"){return "+("template"===e.tag?e.if&&n?"("+e.if+")?"+(cs(e,t)||"undefined")+":undefined":cs(e,t)||"undefined":ts(e,t))+"}",i=i?"":",proxy:true";return"{key:"+(e.slotTarget||'"default"')+",fn:"+t+i+"}"}function cs(e,t,n,i,r){var o=e.children;if(o.length){var s=o[0];if(1===o.length&&s.for&&"template"!==s.tag&&"slot"!==s.tag){e=n?t.maybeComponent(s)?",1":",0":"";return(i||ts)(s,t)+e}var n=n?function(e,t){for(var n=0,i=0;i<e.length;i++){var r=e[i];if(1===r.type){if(us(r)||r.ifConditions&&r.ifConditions.some(function(e){return us(e.block)})){n=2;break}(t(r)||r.ifConditions&&r.ifConditions.some(function(e){return t(e.block)}))&&(n=1)}}return n}(o,t.maybeComponent):0,a=r||ds;return"["+o.map(function(e){return a(e,t)}).join(",")+"]"+(n?","+n:"")}}function us(e){return void 0!==e.for||"template"===e.tag||"slot"===e.tag}function ds(e,t){return 1===e.type?ts(e,t):3===e.type&&e.isComment?"_e("+JSON.stringify(e.text)+")":"_v("+(2===e.type?e.expression:fs(JSON.stringify(e.text)))+")"}function ps(e){for(var t="",n="",i=0;i<e.length;i++){var r=e[i],o=fs(r.value);r.dynamic?n+=r.name+","+o+",":t+='"'+r.name+'":'+o+","}return t="{"+t.slice(0,-1)+"}",n?"_d("+t+",["+n.slice(0,-1)+"])":t}function fs(e){return e.replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029")}function hs(t,n){try{return new Function(t)}catch(e){return n.push({err:e,code:t}),C}}new RegExp("\\b"+"do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,super,throw,while,yield,delete,export,import,return,switch,default,extends,finally,continue,debugger,function,arguments".split(",").join("\\b|\\b")+"\\b");var vs,ms,gs,ys,bs,Ye=(vs=function(e,t){e=jo(e.trim(),t);!1!==t.optimize&&zo(e,t);t=es(e,t);return{ast:e,render:t.render,staticRenderFns:t.staticRenderFns}},gs=Ye,{compile:xs,compileToFunctions:(ys=xs,bs=Object.create(null),function(e,t,n){(t=x({},t)).warn,delete t.warn;var i=t.delimiters?String(t.delimiters)+e:e;if(bs[i])return bs[i];var e=ys(e,t),t={},r=[];return t.render=hs(e.render,r),t.staticRenderFns=e.staticRenderFns.map(function(e){return hs(e,r)}),bs[i]=t})}),ws=Ye.compileToFunctions;function xs(e,t){var n=Object.create(gs),i=[],r=[];if(t)for(var o in t.modules&&(n.modules=(gs.modules||[]).concat(t.modules)),t.directives&&(n.directives=x(Object.create(gs.directives||null),t.directives)),t)"modules"!==o&&"directives"!==o&&(n[o]=t[o]);n.warn=function(e,t,n){(n?r:i).push(e)};e=vs(e.trim(),n);return e.errors=i,e.tips=r,e}function ks(e){return(ms=ms||document.createElement("div")).innerHTML=e?'<a href="\n"/>':'<div a="\n"/>',0<ms.innerHTML.indexOf("&#10;")}var Cs=!!B&&ks(!1),Ss=!!B&&ks(!0),Ts=e(function(e){e=Yn(e);return e&&e.innerHTML}),_s=wn.prototype.$mount;return wn.prototype.$mount=function(e,t){if((e=e&&Yn(e))===document.body||e===document.documentElement)return this;var n=this.$options;if(!n.render){var i,r=n.template;if(r)if("string"==typeof r)"#"===r.charAt(0)&&(r=Ts(r));else{if(!r.nodeType)return this;r=r.innerHTML}else e&&(r=function(e){if(e.outerHTML)return e.outerHTML;var t=document.createElement("div");return t.appendChild(e.cloneNode(!0)),t.innerHTML}(e));r&&(r=(i=ws(r,{outputSourceRange:!1,shouldDecodeNewlines:Cs,shouldDecodeNewlinesForHref:Ss,delimiters:n.delimiters,comments:n.comments},this)).render,i=i.staticRenderFns,n.render=r,n.staticRenderFns=i)}return _s.call(this,e,t)},wn.compile=ws,wn}),function(e,t){"object"===("undefined"==typeof exports?"undefined":_typeof(exports))&&"object"===("undefined"==typeof module?"undefined":_typeof(module))?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"===("undefined"==typeof exports?"undefined":_typeof(exports))?exports.VueStarRating=t():e.VueStarRating=t()}("undefined"!=typeof self?self:void 0,function(){return i={},r.m=n={"27c2":function(e,t,n){(t=n("4bad")(!1)).push([e.i,".vue-star-rating-star[data-v-fde73a0c]{display:inline-block}.vue-star-rating-pointer[data-v-fde73a0c]{cursor:pointer}.vue-star-rating[data-v-fde73a0c]{display:flex;align-items:center}.vue-star-rating-inline[data-v-fde73a0c]{display:inline-flex}.vue-star-rating-rating-text[data-v-fde73a0c]{margin-left:7px}.vue-star-rating-rtl[data-v-fde73a0c]{direction:rtl}.vue-star-rating-rtl .vue-star-rating-rating-text[data-v-fde73a0c]{margin-right:10px;direction:rtl}.sr-only[data-v-fde73a0c]{position:absolute;left:-10000px;top:auto;width:1px;height:1px;overflow:hidden}",""]),e.exports=t},"2b2b":function(e,t,n){var i=n("3c76");n.n(i).a},"3c76":function(e,t,n){var i=n("27c2");(i="string"==typeof i?[[e.i,i,""]]:i).locals&&(e.exports=i.locals),(0,n("499e").default)("af45d76c",i,!0,{sourceMap:!1,shadowMode:!1})},"499e":function(e,t,n){function l(e,t){for(var n=[],i={},r=0;r<t.length;r++){var o=t[r],s=o[0],o={id:e+":"+r,css:o[1],media:o[2],sourceMap:o[3]};i[s]?i[s].parts.push(o):n.push(i[s]={id:s,parts:[o]})}return n}n.r(t),n.d(t,"default",function(){return r});t="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!t)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var c={},i=t&&(document.head||document.getElementsByTagName("head")[0]),o=null,s=0,u=!1,a=function(){},d=null,p="data-vue-ssr-id",f="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function r(s,e,t,n){u=t,d=n||{};var a=l(s,e);return h(a),function(e){for(var t=[],n=0;n<a.length;n++){var i=a[n],r=c[i.id];r.refs--,t.push(r)}for(e?h(a=l(s,e)):a=[],n=0;n<t.length;n++)if(0===(r=t[n]).refs){for(var o=0;o<r.parts.length;o++)r.parts[o]();delete c[r.id]}}}function h(e){for(var t=0;t<e.length;t++){var n=e[t],i=c[n.id];if(i){i.refs++;for(var r=0;r<i.parts.length;r++)i.parts[r](n.parts[r]);for(;r<n.parts.length;r++)i.parts.push(m(n.parts[r]));i.parts.length>n.parts.length&&(i.parts.length=n.parts.length)}else{for(var o=[],r=0;r<n.parts.length;r++)o.push(m(n.parts[r]));c[n.id]={id:n.id,refs:1,parts:o}}}}function v(){var e=document.createElement("style");return e.type="text/css",i.appendChild(e),e}function m(t){var e,n,i,r=document.querySelector("style["+p+'~="'+t.id+'"]');if(r){if(u)return a;r.parentNode.removeChild(r)}return i=f?(e=s++,r=o=o||v(),n=b.bind(null,r,e,!1),b.bind(null,r,e,!0)):(r=v(),n=function(e,t){var n=t.css,i=t.media,r=t.sourceMap;if(i&&e.setAttribute("media",i),d.ssrId&&e.setAttribute(p,t.id),r&&(n+="\n/*# sourceURL="+r.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}.bind(null,r),function(){r.parentNode.removeChild(r)}),n(t),function(e){e?e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap||n(t=e):i()}}var g,y=(g=[],function(e,t){return g[e]=t,g.filter(Boolean).join("\n")});function b(e,t,n,i){n=n?"":i.css;e.styleSheet?e.styleSheet.cssText=y(t,n):(i=document.createTextNode(n),(n=e.childNodes)[t]&&e.removeChild(n[t]),n.length?e.insertBefore(i,n[t]):e.appendChild(i))}},"4bad":function(e,t,n){function i(e,t){var n=e[1]||"",i=e[3];if(!i)return n;if(t&&"function"==typeof btoa){e=function(e){e=btoa(unescape(encodeURIComponent(JSON.stringify(e)))),e="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(e);return"/*# ".concat(e," */")}(i),t=i.sources.map(function(e){return"/*# sourceURL=".concat(i.sourceRoot||"").concat(e," */")});return[n].concat(t).concat([e]).join("\n")}return[n].join("\n")}e.exports=function(n){var l=[];return l.toString=function(){return this.map(function(e){var t=i(e,n);return e[2]?"@media ".concat(e[2]," {").concat(t,"}"):t}).join("")},l.i=function(e,t,n){"string"==typeof e&&(e=[[null,e,""]]);var i={};if(n)for(var r=0;r<this.length;r++){var o=this[r][0];null!=o&&(i[o]=!0)}for(var s=0;s<e.length;s++){var a=[].concat(e[s]);n&&i[a[0]]||(t&&(a[2]?a[2]="".concat(t," and ").concat(a[2]):a[2]=t),l.push(a))}},l}},"70a0":function(e,t,n){var i=n("812a");(i="string"==typeof i?[[e.i,i,""]]:i).locals&&(e.exports=i.locals),(0,n("499e").default)("4599b915",i,!0,{sourceMap:!1,shadowMode:!1})},"812a":function(e,t,n){(t=n("4bad")(!1)).push([e.i,".vue-star-rating-star[data-v-ef4bc576]{overflow:visible!important}.vue-star-rating-star-rotate[data-v-ef4bc576]{transition:all .25s}.vue-star-rating-star-rotate[data-v-ef4bc576]:hover{transition:transform .25s;transform:rotate(-15deg) scale(1.3)}",""]),e.exports=t},8875:function(e,t,n){var i,r;i=[],void 0===(r="function"==typeof(r=function(){function p(){var e=Object.getOwnPropertyDescriptor(document,"currentScript");if(!e&&"currentScript"in document&&document.currentScript)return document.currentScript;if(e&&e.get!==p&&document.currentScript)return document.currentScript;try{throw new Error}catch(e){var t,n,i,r=/.*at [^(]*\((.*):(.+):(.+)\)$/gi,o=/@([^@]*):(\d+):(\d+)\s*$/gi,s=r.exec(e.stack)||o.exec(e.stack),a=s&&s[1]||!1,l=s&&s[2]||!1,c=document.location.href.replace(document.location.hash,""),u=document.getElementsByTagName("script");a===c&&(t=document.documentElement.outerHTML,n=new RegExp("(?:[^\\n]+?\\n){0,"+(l-2)+"}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*","i"),i=t.replace(n,"$1").trim());for(var d=0;d<u.length;d++){if("interactive"===u[d].readyState)return u[d];if(u[d].src===a)return u[d];if(a===c&&u[d].innerHTML&&u[d].innerHTML.trim()===i)return u[d]}return null}}return p})?r.apply(t,i):r)||(e.exports=r)},ab73:function(e,t,n){var i=n("70a0");n.n(i).a},d4aa:function(e,t){var n=function(){function t(e){_classCallCheck(this,t),this.color=e}return _createClass(t,[{key:"parseAlphaColor",value:function(){return/^rgba\((\d{1,3}%?\s*,\s*){3}(\d*(?:\.\d+)?)\)$/.test(this.color)?this.parseRgba():/^hsla\(\d+\s*,\s*([\d.]+%\s*,\s*){2}(\d*(?:\.\d+)?)\)$/.test(this.color)?this.parseHsla():/^#([0-9A-Fa-f]{4}|[0-9A-Fa-f]{8})$/.test(this.color)?this.parseAlphaHex():/^transparent$/.test(this.color)?this.parseTransparent():{color:this.color,opacity:"1"}}},{key:"parseRgba",value:function(){return{color:this.color.replace(/,(?!.*,).*(?=\))|a/g,""),opacity:this.color.match(/\.\d+|[01](?=\))/)[0]}}},{key:"parseHsla",value:function(){return{color:this.color.replace(/,(?!.*,).*(?=\))|a/g,""),opacity:this.color.match(/\.\d+|[01](?=\))/)[0]}}},{key:"parseAlphaHex",value:function(){return{color:5===this.color.length?this.color.substring(0,4):this.color.substring(0,7),opacity:(5===this.color.length?parseInt(this.color.substring(4,5)+this.color.substring(4,5),16)/255:parseInt(this.color.substring(7,9),16)/255).toFixed(2)}}},{key:"parseTransparent",value:function(){return{color:"#fff",opacity:0}}}]),t}();e.exports=n},fb15:function(e,t,n){var i;n.r(t),"undefined"!=typeof window&&(r=window.document.currentScript,r=(i=n("8875"))(),"currentScript"in document||Object.defineProperty(document,"currentScript",{get:i}),(r=r&&r.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))&&(n.p=r[1]));var r=n("d4aa"),o=n.n(r),r={name:"Star",props:{fill:{type:Number,default:0},points:{type:Array,default:function(){return[]}},size:{type:Number,default:50},starId:{type:Number,required:!0},activeColor:{type:String,required:!0},inactiveColor:{type:String,required:!0},borderColor:{type:String,default:"#000"},activeBorderColor:{type:String,default:"#000"},borderWidth:{type:Number,default:0},roundedCorners:{type:Boolean,default:!1},rtl:{type:Boolean,default:!1},glow:{type:Number,default:0},glowColor:{type:String,default:null,required:!1},animate:{type:Boolean,default:!1}},data:function(){return{starPoints:[19.8,2.2,6.6,43.56,39.6,17.16,0,17.16,33,43.56],grad:"",glowId:"",isStarActive:!0}},computed:{starPointsToString:function(){return this.starPoints.join(",")},gradId:function(){return"url(#"+this.grad+")"},starSize:function(){var e=this.roundedCorners&&this.borderWidth<=0?parseInt(this.size)-parseInt(this.border):this.size;return parseInt(e)+parseInt(this.border)},starFill:function(){return this.rtl?100-this.fill+"%":this.fill+"%"},border:function(){return this.roundedCorners&&this.borderWidth<=0?6:this.borderWidth},getBorderColor:function(){return this.roundedCorners&&this.borderWidth<=0?this.fill<=0?this.inactiveColor:this.activeColor:this.fill<=0?this.borderColor:this.activeBorderColor},maxSize:function(){return this.starPoints.reduce(function(e,t){return Math.max(e,t)})},viewBox:function(){return"0 0 "+this.maxSize+" "+this.maxSize},shouldAnimate:function(){return this.animate&&this.isStarActive},strokeLinejoin:function(){return this.roundedCorners?"round":"miter"}},created:function(){this.starPoints=this.points.length?this.points:this.starPoints,this.calculatePoints(),this.grad=this.getRandomId(),this.glowId=this.getRandomId()},methods:{mouseMoving:function(e){"undefined"!==e.touchAction&&this.$emit("star-mouse-move",{event:e,position:this.getPosition(e),id:this.starId})},touchStart:function(){var e=this;this.$nextTick(function(){e.isStarActive=!0})},touchEnd:function(){var e=this;this.$nextTick(function(){e.isStarActive=!1})},getPosition:function(e){var t=.92*this.size,e=this.rtl?Math.min(e.offsetX,45):Math.max(e.offsetX,1),e=Math.round(100/t*e);return Math.min(e,100)},selected:function(e){this.$emit("star-selected",{id:this.starId,position:this.getPosition(e)})},getRandomId:function(){return Math.random().toString(36).substring(7)},calculatePoints:function(){var n=this;this.starPoints=this.starPoints.map(function(e,t){t=t%2==0?1.5*n.border:0;return n.size/n.maxSize*e+t})},getColor:function(e){return new o.a(e).parseAlphaColor().color},getOpacity:function(e){return new o.a(e).parseAlphaColor().opacity}}};function s(e,t,n,i,r,o,s,a){var l,c,u="function"==typeof e?e.options:e;return t&&(u.render=t,u.staticRenderFns=n,u._compiled=!0),i&&(u.functional=!0),o&&(u._scopeId="data-v-"+o),s?(l=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(s)},u._ssrRegister=l):r&&(l=a?function(){r.call(this,(u.functional?this.parent:this).$root.$options.shadowRoot)}:r),l&&(u.functional?(u._injectStyles=l,c=u.render,u.render=function(e,t){return l.call(t),c(e,t)}):(a=u.beforeCreate,u.beforeCreate=a?[].concat(a,l):[l])),{exports:e,options:u}}n("ab73");r={components:{star:s(r,function(){var e=this,t=e.$createElement,t=e._self._c||t;return t("svg",{class:["vue-star-rating-star",{"vue-star-rating-star-rotate":e.shouldAnimate}],attrs:{height:e.starSize,width:e.starSize,viewBox:e.viewBox},on:{mousemove:e.mouseMoving,click:e.selected,touchstart:e.touchStart,touchend:e.touchEnd}},[t("linearGradient",{attrs:{id:e.grad,x1:"0",x2:"100%",y1:"0",y2:"0"}},[t("stop",{attrs:{offset:e.starFill,"stop-color":e.rtl?e.getColor(e.inactiveColor):e.getColor(e.activeColor),"stop-opacity":e.rtl?e.getOpacity(e.inactiveColor):e.getOpacity(e.activeColor)}}),t("stop",{attrs:{offset:e.starFill,"stop-color":e.rtl?e.getColor(e.activeColor):e.getColor(e.inactiveColor),"stop-opacity":e.rtl?e.getOpacity(e.activeColor):e.getOpacity(e.inactiveColor)}})],1),t("filter",{attrs:{id:e.glowId,height:"130%",width:"130%",filterUnits:"userSpaceOnUse"}},[t("feGaussianBlur",{attrs:{stdDeviation:e.glow,result:"coloredBlur"}}),t("feMerge",[t("feMergeNode",{attrs:{in:"coloredBlur"}}),t("feMergeNode",{attrs:{in:"SourceGraphic"}})],1)],1),e.glowColor&&0<e.glow?t("polygon",{directives:[{name:"show",rawName:"v-show",value:1<e.fill,expression:"fill > 1"}],attrs:{points:e.starPointsToString,fill:e.gradId,stroke:e.glowColor,filter:"url(#"+e.glowId+")","stroke-width":e.border}}):e._e(),t("polygon",{attrs:{points:e.starPointsToString,fill:e.gradId,stroke:e.getBorderColor,"stroke-width":e.border,"stroke-linejoin":e.strokeLinejoin}}),t("polygon",{attrs:{points:e.starPointsToString,fill:e.gradId}})],1)},[],!1,null,"ef4bc576",null).exports},model:{prop:"rating",event:"rating-selected"},props:{increment:{type:Number,default:1},rating:{type:Number,default:0},roundStartRating:{type:Boolean,default:!0},activeColor:{type:[String,Array],default:"#ffd055"},inactiveColor:{type:String,default:"#d8d8d8"},maxRating:{type:Number,default:5},starPoints:{type:Array,default:function(){return[]}},starSize:{type:Number,default:50},showRating:{type:Boolean,default:!0},readOnly:{type:Boolean,default:!1},textClass:{type:String,default:""},inline:{type:Boolean,default:!1},borderColor:{type:String,default:"#999"},activeBorderColor:{type:[String,Array],default:null},borderWidth:{type:Number,default:0},roundedCorners:{type:Boolean,default:!1},padding:{type:Number,default:0},rtl:{type:Boolean,default:!1},fixedPoints:{type:Number,default:null},glow:{type:Number,default:0},glowColor:{type:String,default:"#fff"},clearable:{type:Boolean,default:!1},activeOnClick:{type:Boolean,default:!1},animate:{type:Boolean,default:!1}},data:function(){return{step:0,fillLevel:[],currentRating:0,selectedRating:0,ratingSelected:!1}},computed:{formattedRating:function(){return null===this.fixedPoints?this.currentRating:this.currentRating.toFixed(this.fixedPoints)},shouldRound:function(){return this.ratingSelected||this.roundStartRating},margin:function(){return this.padding+this.borderWidth},activeColors:function(){return Array.isArray(this.activeColor)?this.padColors(this.activeColor,this.maxRating,this.activeColor.slice(-1)[0]):new Array(this.maxRating).fill(this.activeColor)},currentActiveColor:function(){return this.activeOnClick?0<this.selectedRating?this.activeColors[Math.ceil(this.selectedRating)-1]:this.inactiveColor:0<this.currentRating?this.activeColors[Math.ceil(this.currentRating)-1]:this.inactiveColor},activeBorderColors:function(){if(Array.isArray(this.activeBorderColor))return this.padColors(this.activeBorderColor,this.maxRating,this.activeBorderColor.slice(-1)[0]);var e=this.activeBorderColor||this.borderColor;return new Array(this.maxRating).fill(e)},currentActiveBorderColor:function(){return this.activeOnClick?0<this.selectedRating?this.activeBorderColors[Math.ceil(this.selectedRating)-1]:this.borderColor:0<this.currentRating?this.activeBorderColors[Math.ceil(this.currentRating)-1]:this.borderColor}},watch:{rating:function(e){this.currentRating=e,this.selectedRating=e,this.createStars(this.shouldRound)}},created:function(){this.step=100*this.increment,this.currentRating=this.rating,this.selectedRating=this.currentRating,this.createStars(this.roundStartRating)},methods:{setRating:function(e,t){var n;this.readOnly||(n=this.rtl?(100-e.position)/100:e.position/100,this.currentRating=(e.id+n-1).toFixed(2),this.currentRating=this.currentRating>this.maxRating?this.maxRating:this.currentRating,t?(this.createStars(!0,!0),this.clearable&&this.currentRating===this.selectedRating?this.selectedRating=0:this.selectedRating=this.currentRating,this.$emit("rating-selected",this.selectedRating),this.ratingSelected=!0):(this.createStars(!0,!this.activeOnClick),this.$emit("current-rating",this.currentRating)))},resetRating:function(){this.readOnly||(this.currentRating=this.selectedRating,this.createStars(this.shouldRound))},createStars:function(){var e=!(0<arguments.length&&void 0!==arguments[0])||arguments[0],t=!(1<arguments.length&&void 0!==arguments[1])||arguments[1];e&&this.round();for(var n=0;n<this.maxRating;n++){var i=0;n<this.currentRating&&(i=1<this.currentRating-n?100:100*(this.currentRating-n)),t&&(this.fillLevel[n]=Math.round(i))}},round:function(){var e=1/this.increment;this.currentRating=Math.min(this.maxRating,Math.ceil(this.currentRating*e)/e)},padColors:function(e,t,n){return Object.assign(new Array(t).fill(n),e)}}},r=(n("2b2b"),s(r,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:["vue-star-rating",{"vue-star-rating-rtl":t.rtl},{"vue-star-rating-inline":t.inline}]},[n("div",{staticClass:"sr-only"},[t._t("screen-reader",[n("span",[t._v("Rated "+t._s(t.selectedRating)+" stars out of "+t._s(t.maxRating))])],{rating:t.selectedRating,stars:t.maxRating})],2),n("div",{staticClass:"vue-star-rating",on:{mouseleave:t.resetRating}},[t._l(t.maxRating,function(e){return n("span",{key:e,class:[{"vue-star-rating-pointer":!t.readOnly},"vue-star-rating-star"],style:{"margin-right":t.margin+"px"}},[n("star",{attrs:{fill:t.fillLevel[e-1],size:t.starSize,points:t.starPoints,"star-id":e,step:t.step,"active-color":t.currentActiveColor,"inactive-color":t.inactiveColor,"border-color":t.borderColor,"active-border-color":t.currentActiveBorderColor,"border-width":t.borderWidth,"rounded-corners":t.roundedCorners,rtl:t.rtl,glow:t.glow,"glow-color":t.glowColor,animate:t.animate},on:{"star-selected":function(e){return t.setRating(e,!0)},"star-mouse-move":t.setRating}})],1)}),t.showRating?n("span",{class:["vue-star-rating-rating-text",t.textClass]},[t._v(" "+t._s(t.formattedRating))]):t._e()],2)])},[],!1,null,"fde73a0c",null)).exports;t.default=r}},r.c=i,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===_typeof(t)&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)r.d(n,i,function(e){return t[e]}.bind(null,i));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s="fb15");function r(e){if(i[e])return i[e].exports;var t=i[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,r),t.l=!0,t.exports}var n,i}),function(e,t){"object"==("undefined"==typeof module?"undefined":_typeof(module))&&"object"==_typeof(module.exports)?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:void 0,function(C,e){function v(e){return null!=e&&e===e.window}var t=[],n=Object.getPrototypeOf,a=t.slice,m=t.flat?function(e){return t.flat.call(e)}:function(e){return t.concat.apply([],e)},l=t.push,r=t.indexOf,i={},o=i.toString,g=i.hasOwnProperty,s=g.toString,c=s.call(Object),y={},b=function(e){return"function"==typeof e&&"number"!=typeof e.nodeType&&"function"!=typeof e.item},S=C.document,u={type:!0,src:!0,nonce:!0,noModule:!0};function w(e,t,n){var i,r,o=(n=n||S).createElement("script");if(o.text=e,t)for(i in u)(r=t[i]||t.getAttribute&&t.getAttribute(i))&&o.setAttribute(i,r);n.head.appendChild(o).parentNode.removeChild(o)}function h(e){return null==e?e+"":"object"==_typeof(e)||"function"==typeof e?i[o.call(e)]||"object":_typeof(e)}var T=function e(t,n){return new e.fn.init(t,n)};function d(e){var t=!!e&&"length"in e&&e.length,n=h(e);return!b(e)&&!v(e)&&("array"===n||0===t||"number"==typeof t&&0<t&&t-1 in e)}T.fn=T.prototype={jquery:"3.6.0",constructor:T,length:0,toArray:function(){return a.call(this)},get:function(e){return null==e?a.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){e=T.merge(this.constructor(),e);return e.prevObject=this,e},each:function(e){return T.each(this,e)},map:function(n){return this.pushStack(T.map(this,function(e,t){return n.call(e,t,e)}))},slice:function(){return this.pushStack(a.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(T.grep(this,function(e,t){return(t+1)%2}))},odd:function(){return this.pushStack(T.grep(this,function(e,t){return t%2}))},eq:function(e){var t=this.length,e=+e+(e<0?t:0);return this.pushStack(0<=e&&e<t?[this[e]]:[])},end:function(){return this.prevObject||this.constructor()},push:l,sort:t.sort,splice:t.splice},T.extend=T.fn.extend=function(){var e,t,n,i,r,o=arguments[0]||{},s=1,a=arguments.length,l=!1;for("boolean"==typeof o&&(l=o,o=arguments[s]||{},s++),"object"==_typeof(o)||b(o)||(o={}),s===a&&(o=this,s--);s<a;s++)if(null!=(e=arguments[s]))for(t in e)n=e[t],"__proto__"!==t&&o!==n&&(l&&n&&(T.isPlainObject(n)||(i=Array.isArray(n)))?(r=o[t],r=i&&!Array.isArray(r)?[]:i||T.isPlainObject(r)?r:{},i=!1,o[t]=T.extend(l,r,n)):void 0!==n&&(o[t]=n));return o},T.extend({expando:"jQuery"+("3.6.0"+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){return!(!e||"[object Object]"!==o.call(e)||(e=n(e))&&("function"!=typeof(e=g.call(e,"constructor")&&e.constructor)||s.call(e)!==c))},isEmptyObject:function(e){for(var t in e)return!1;return!0},globalEval:function(e,t,n){w(e,{nonce:t&&t.nonce},n)},each:function(e,t){var n,i=0;if(d(e))for(n=e.length;i<n&&!1!==t.call(e[i],i,e[i]);i++);else for(i in e)if(!1===t.call(e[i],i,e[i]))break;return e},makeArray:function(e,t){t=t||[];return null!=e&&(d(Object(e))?T.merge(t,"string"==typeof e?[e]:e):l.call(t,e)),t},inArray:function(e,t,n){return null==t?-1:r.call(t,e,n)},merge:function(e,t){for(var n=+t.length,i=0,r=e.length;i<n;i++)e[r++]=t[i];return e.length=r,e},grep:function(e,t,n){for(var i=[],r=0,o=e.length,s=!n;r<o;r++)!t(e[r],r)!=s&&i.push(e[r]);return i},map:function(e,t,n){var i,r,o=0,s=[];if(d(e))for(i=e.length;o<i;o++)null!=(r=t(e[o],o,n))&&s.push(r);else for(o in e)null!=(r=t(e[o],o,n))&&s.push(r);return m(s)},guid:1,support:y}),"function"==typeof Symbol&&(T.fn[Symbol.iterator]=t[Symbol.iterator]),T.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){i["[object "+t+"]"]=t.toLowerCase()});var p=function(n){function d(e,t){return e="0x"+e.slice(1)-65536,t||(e<0?String.fromCharCode(65536+e):String.fromCharCode(e>>10|55296,1023&e|56320))}function i(){k()}var e,f,w,o,r,h,p,v,x,l,c,k,C,s,S,m,a,u,g,T="sizzle"+ +new Date,y=n.document,_=0,b=0,$=le(),A=le(),O=le(),E=le(),j=function(e,t){return e===t&&(c=!0),0},D={}.hasOwnProperty,t=[],N=t.pop,L=t.push,P=t.push,M=t.slice,R=function(e,t){for(var n=0,i=e.length;n<i;n++)if(e[n]===t)return n;return-1},I="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",H="[\\x20\\t\\r\\n\\f]",q="(?:\\\\[\\da-fA-F]{1,6}"+H+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",F="\\["+H+"*("+q+")(?:"+H+"*([*^$|!~]?=)"+H+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+q+"))|)"+H+"*\\]",z=":("+q+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+F+")*)|.*)\\)|)",B=new RegExp(H+"+","g"),W=new RegExp("^"+H+"+|((?:^|[^\\\\])(?:\\\\.)*)"+H+"+$","g"),U=new RegExp("^"+H+"*,"+H+"*"),V=new RegExp("^"+H+"*([>+~]|"+H+")"+H+"*"),X=new RegExp(H+"|>"),Y=new RegExp(z),G=new RegExp("^"+q+"$"),J={ID:new RegExp("^#("+q+")"),CLASS:new RegExp("^\\.("+q+")"),TAG:new RegExp("^("+q+"|[*])"),ATTR:new RegExp("^"+F),PSEUDO:new RegExp("^"+z),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+H+"*(even|odd|(([+-]|)(\\d*)n|)"+H+"*(?:([+-]|)"+H+"*(\\d+)|))"+H+"*\\)|)","i"),bool:new RegExp("^(?:"+I+")$","i"),needsContext:new RegExp("^"+H+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+H+"*((?:-\\d)?\\d*)"+H+"*\\)|)(?=[^-]|$)","i")},K=/HTML$/i,Q=/^(?:input|select|textarea|button)$/i,Z=/^h\d$/i,ee=/^[^{]+\{\s*\[native \w/,te=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ne=/[+~]/,ie=new RegExp("\\\\[\\da-fA-F]{1,6}"+H+"?|\\\\([^\\r\\n\\f])","g"),re=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,oe=function(e,t){return t?"\0"===e?"�":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},se=ye(function(e){return!0===e.disabled&&"fieldset"===e.nodeName.toLowerCase()},{dir:"parentNode",next:"legend"});try{P.apply(t=M.call(y.childNodes),y.childNodes),t[y.childNodes.length].nodeType}catch(e){P={apply:t.length?function(e,t){L.apply(e,M.call(t))}:function(e,t){for(var n=e.length,i=0;e[n++]=t[i++];);e.length=n-1}}}function ae(e,t,n,i){var r,o,s,a,l,c,u,d=t&&t.ownerDocument,p=t?t.nodeType:9;if(n=n||[],"string"!=typeof e||!e||1!==p&&9!==p&&11!==p)return n;if(!i&&(k(t),t=t||C,S)){if(11!==p&&(l=te.exec(e)))if(r=l[1]){if(9===p){if(!(s=t.getElementById(r)))return n;if(s.id===r)return n.push(s),n}else if(d&&(s=d.getElementById(r))&&g(t,s)&&s.id===r)return n.push(s),n}else{if(l[2])return P.apply(n,t.getElementsByTagName(e)),n;if((r=l[3])&&f.getElementsByClassName&&t.getElementsByClassName)return P.apply(n,t.getElementsByClassName(r)),n}if(f.qsa&&!E[e+" "]&&(!m||!m.test(e))&&(1!==p||"object"!==t.nodeName.toLowerCase())){if(u=e,d=t,1===p&&(X.test(e)||V.test(e))){for((d=ne.test(e)&&ve(t.parentNode)||t)===t&&f.scope||((a=t.getAttribute("id"))?a=a.replace(re,oe):t.setAttribute("id",a=T)),o=(c=h(e)).length;o--;)c[o]=(a?"#"+a:":scope")+" "+ge(c[o]);u=c.join(",")}try{return P.apply(n,d.querySelectorAll(u)),n}catch(t){E(e,!0)}finally{a===T&&t.removeAttribute("id")}}}return v(e.replace(W,"$1"),t,n,i)}function le(){var i=[];return function e(t,n){return i.push(t+" ")>w.cacheLength&&delete e[i.shift()],e[t+" "]=n}}function ce(e){return e[T]=!0,e}function ue(e){var t=C.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function de(e,t){for(var n=e.split("|"),i=n.length;i--;)w.attrHandle[n[i]]=t}function pe(e,t){var n=t&&e,i=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(i)return i;if(n)for(;n=n.nextSibling;)if(n===t)return-1;return e?1:-1}function fe(t){return function(e){return"form"in e?e.parentNode&&!1===e.disabled?"label"in e?"label"in e.parentNode?e.parentNode.disabled===t:e.disabled===t:e.isDisabled===t||e.isDisabled!==!t&&se(e)===t:e.disabled===t:"label"in e&&e.disabled===t}}function he(s){return ce(function(o){return o=+o,ce(function(e,t){for(var n,i=s([],e.length,o),r=i.length;r--;)e[n=i[r]]&&(e[n]=!(t[n]=e[n]))})})}function ve(e){return e&&void 0!==e.getElementsByTagName&&e}for(e in f=ae.support={},r=ae.isXML=function(e){var t=e&&e.namespaceURI,e=e&&(e.ownerDocument||e).documentElement;return!K.test(t||e&&e.nodeName||"HTML")},k=ae.setDocument=function(e){var t,e=e?e.ownerDocument||e:y;return e!=C&&9===e.nodeType&&e.documentElement&&(s=(C=e).documentElement,S=!r(C),y!=C&&(t=C.defaultView)&&t.top!==t&&(t.addEventListener?t.addEventListener("unload",i,!1):t.attachEvent&&t.attachEvent("onunload",i)),f.scope=ue(function(e){return s.appendChild(e).appendChild(C.createElement("div")),void 0!==e.querySelectorAll&&!e.querySelectorAll(":scope fieldset div").length}),f.attributes=ue(function(e){return e.className="i",!e.getAttribute("className")}),f.getElementsByTagName=ue(function(e){return e.appendChild(C.createComment("")),!e.getElementsByTagName("*").length}),f.getElementsByClassName=ee.test(C.getElementsByClassName),f.getById=ue(function(e){return s.appendChild(e).id=T,!C.getElementsByName||!C.getElementsByName(T).length}),f.getById?(w.filter.ID=function(e){var t=e.replace(ie,d);return function(e){return e.getAttribute("id")===t}},w.find.ID=function(e,t){if(void 0!==t.getElementById&&S){e=t.getElementById(e);return e?[e]:[]}}):(w.filter.ID=function(e){var t=e.replace(ie,d);return function(e){e=void 0!==e.getAttributeNode&&e.getAttributeNode("id");return e&&e.value===t}},w.find.ID=function(e,t){if(void 0!==t.getElementById&&S){var n,i,r,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];for(r=t.getElementsByName(e),i=0;o=r[i++];)if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),w.find.TAG=f.getElementsByTagName?function(e,t){return void 0!==t.getElementsByTagName?t.getElementsByTagName(e):f.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,i=[],r=0,o=t.getElementsByTagName(e);if("*"!==e)return o;for(;n=o[r++];)1===n.nodeType&&i.push(n);return i},w.find.CLASS=f.getElementsByClassName&&function(e,t){if(void 0!==t.getElementsByClassName&&S)return t.getElementsByClassName(e)},a=[],m=[],(f.qsa=ee.test(C.querySelectorAll))&&(ue(function(e){var t;s.appendChild(e).innerHTML="<a id='"+T+"'></a><select id='"+T+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&m.push("[*^$]="+H+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||m.push("\\["+H+"*(?:value|"+I+")"),e.querySelectorAll("[id~="+T+"-]").length||m.push("~="),(t=C.createElement("input")).setAttribute("name",""),e.appendChild(t),e.querySelectorAll("[name='']").length||m.push("\\["+H+"*name"+H+"*="+H+"*(?:''|\"\")"),e.querySelectorAll(":checked").length||m.push(":checked"),e.querySelectorAll("a#"+T+"+*").length||m.push(".#.+[+~]"),e.querySelectorAll("\\\f"),m.push("[\\r\\n\\f]")}),ue(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=C.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&m.push("name"+H+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&m.push(":enabled",":disabled"),s.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&m.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),m.push(",.*:")})),(f.matchesSelector=ee.test(u=s.matches||s.webkitMatchesSelector||s.mozMatchesSelector||s.oMatchesSelector||s.msMatchesSelector))&&ue(function(e){f.disconnectedMatch=u.call(e,"*"),u.call(e,"[s!='']:x"),a.push("!=",z)}),m=m.length&&new RegExp(m.join("|")),a=a.length&&new RegExp(a.join("|")),t=ee.test(s.compareDocumentPosition),g=t||ee.test(s.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,t=t&&t.parentNode;return e===t||!(!t||1!==t.nodeType||!(n.contains?n.contains(t):e.compareDocumentPosition&&16&e.compareDocumentPosition(t)))}:function(e,t){if(t)for(;t=t.parentNode;)if(t===e)return!0;return!1},j=t?function(e,t){if(e===t)return c=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n||(1&(n=(e.ownerDocument||e)==(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!f.sortDetached&&t.compareDocumentPosition(e)===n?e==C||e.ownerDocument==y&&g(y,e)?-1:t==C||t.ownerDocument==y&&g(y,t)?1:l?R(l,e)-R(l,t):0:4&n?-1:1)}:function(e,t){if(e===t)return c=!0,0;var n,i=0,r=e.parentNode,o=t.parentNode,s=[e],a=[t];if(!r||!o)return e==C?-1:t==C?1:r?-1:o?1:l?R(l,e)-R(l,t):0;if(r===o)return pe(e,t);for(n=e;n=n.parentNode;)s.unshift(n);for(n=t;n=n.parentNode;)a.unshift(n);for(;s[i]===a[i];)i++;return i?pe(s[i],a[i]):s[i]==y?-1:a[i]==y?1:0}),C},ae.matches=function(e,t){return ae(e,null,null,t)},ae.matchesSelector=function(e,t){if(k(e),f.matchesSelector&&S&&!E[t+" "]&&(!a||!a.test(t))&&(!m||!m.test(t)))try{var n=u.call(e,t);if(n||f.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(e){E(t,!0)}return 0<ae(t,C,null,[e]).length},ae.contains=function(e,t){return(e.ownerDocument||e)!=C&&k(e),g(e,t)},ae.attr=function(e,t){(e.ownerDocument||e)!=C&&k(e);var n=w.attrHandle[t.toLowerCase()],n=n&&D.call(w.attrHandle,t.toLowerCase())?n(e,t,!S):void 0;return void 0!==n?n:f.attributes||!S?e.getAttribute(t):(n=e.getAttributeNode(t))&&n.specified?n.value:null},ae.escape=function(e){return(e+"").replace(re,oe)},ae.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},ae.uniqueSort=function(e){var t,n=[],i=0,r=0;if(c=!f.detectDuplicates,l=!f.sortStable&&e.slice(0),e.sort(j),c){for(;t=e[r++];)t===e[r]&&(i=n.push(r));for(;i--;)e.splice(n[i],1)}return l=null,e},o=ae.getText=function(e){var t,n="",i=0,r=e.nodeType;if(r){if(1===r||9===r||11===r){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===r||4===r)return e.nodeValue}else for(;t=e[i++];)n+=o(t);return n},(w=ae.selectors={cacheLength:50,createPseudo:ce,match:J,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(ie,d),e[3]=(e[3]||e[4]||e[5]||"").replace(ie,d),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||ae.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&ae.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return J.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&Y.test(n)&&(t=h(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(ie,d).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=$[e+" "];return t||(t=new RegExp("(^|"+H+")"+e+"("+H+"|$)"))&&$(e,function(e){return t.test("string"==typeof e.className&&e.className||void 0!==e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(t,n,i){return function(e){e=ae.attr(e,t);return null==e?"!="===n:!n||(e+="","="===n?e===i:"!="===n?e!==i:"^="===n?i&&0===e.indexOf(i):"*="===n?i&&-1<e.indexOf(i):"$="===n?i&&e.slice(-i.length)===i:"~="===n?-1<(" "+e.replace(B," ")+" ").indexOf(i):"|="===n&&(e===i||e.slice(0,i.length+1)===i+"-"))}},CHILD:function(h,e,t,v,m){var g="nth"!==h.slice(0,3),y="last"!==h.slice(-4),b="of-type"===e;return 1===v&&0===m?function(e){return!!e.parentNode}:function(e,t,n){var i,r,o,s,a,l,c=g!=y?"nextSibling":"previousSibling",u=e.parentNode,d=b&&e.nodeName.toLowerCase(),p=!n&&!b,f=!1;if(u){if(g){for(;c;){for(s=e;s=s[c];)if(b?s.nodeName.toLowerCase()===d:1===s.nodeType)return!1;l=c="only"===h&&!l&&"nextSibling"}return!0}if(l=[y?u.firstChild:u.lastChild],y&&p){for(f=(a=(i=(r=(o=(s=u)[T]||(s[T]={}))[s.uniqueID]||(o[s.uniqueID]={}))[h]||[])[0]===_&&i[1])&&i[2],s=a&&u.childNodes[a];s=++a&&s&&s[c]||(f=a=0)||l.pop();)if(1===s.nodeType&&++f&&s===e){r[h]=[_,a,f];break}}else if(!1===(f=p?a=(i=(r=(o=(s=e)[T]||(s[T]={}))[s.uniqueID]||(o[s.uniqueID]={}))[h]||[])[0]===_&&i[1]:f))for(;(s=++a&&s&&s[c]||(f=a=0)||l.pop())&&((b?s.nodeName.toLowerCase()!==d:1!==s.nodeType)||!++f||(p&&((r=(o=s[T]||(s[T]={}))[s.uniqueID]||(o[s.uniqueID]={}))[h]=[_,f]),s!==e)););return(f-=m)===v||f%v==0&&0<=f/v}}},PSEUDO:function(e,o){var t,s=w.pseudos[e]||w.setFilters[e.toLowerCase()]||ae.error("unsupported pseudo: "+e);return s[T]?s(o):1<s.length?(t=[e,e,"",o],w.setFilters.hasOwnProperty(e.toLowerCase())?ce(function(e,t){for(var n,i=s(e,o),r=i.length;r--;)e[n=R(e,i[r])]=!(t[n]=i[r])}):function(e){return s(e,0,t)}):s}},pseudos:{not:ce(function(e){var i=[],r=[],a=p(e.replace(W,"$1"));return a[T]?ce(function(e,t,n,i){for(var r,o=a(e,null,i,[]),s=e.length;s--;)(r=o[s])&&(e[s]=!(t[s]=r))}):function(e,t,n){return i[0]=e,a(i,null,n,r),i[0]=null,!r.pop()}}),has:ce(function(t){return function(e){return 0<ae(t,e).length}}),contains:ce(function(t){return t=t.replace(ie,d),function(e){return-1<(e.textContent||o(e)).indexOf(t)}}),lang:ce(function(n){return G.test(n||"")||ae.error("unsupported lang: "+n),n=n.replace(ie,d).toLowerCase(),function(e){var t;do{if(t=S?e.lang:e.getAttribute("xml:lang")||e.getAttribute("lang"))return(t=t.toLowerCase())===n||0===t.indexOf(n+"-")}while((e=e.parentNode)&&1===e.nodeType);return!1}}),target:function(e){var t=n.location&&n.location.hash;return t&&t.slice(1)===e.id},root:function(e){return e===s},focus:function(e){return e===C.activeElement&&(!C.hasFocus||C.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:fe(!1),disabled:fe(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!w.pseudos.empty(e)},header:function(e){return Z.test(e.nodeName)},input:function(e){return Q.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(e=e.getAttribute("type"))||"text"===e.toLowerCase())},first:he(function(){return[0]}),last:he(function(e,t){return[t-1]}),eq:he(function(e,t,n){return[n<0?n+t:n]}),even:he(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:he(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:he(function(e,t,n){for(var i=n<0?n+t:t<n?t:n;0<=--i;)e.push(i);return e}),gt:he(function(e,t,n){for(var i=n<0?n+t:n;++i<t;)e.push(i);return e})}}).pseudos.nth=w.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})w.pseudos[e]=function(t){return function(e){return"input"===e.nodeName.toLowerCase()&&e.type===t}}(e);for(e in{submit:!0,reset:!0})w.pseudos[e]=function(n){return function(e){var t=e.nodeName.toLowerCase();return("input"===t||"button"===t)&&e.type===n}}(e);function me(){}function ge(e){for(var t=0,n=e.length,i="";t<n;t++)i+=e[t].value;return i}function ye(s,e,t){var a=e.dir,l=e.next,c=l||a,u=t&&"parentNode"===c,d=b++;return e.first?function(e,t,n){for(;e=e[a];)if(1===e.nodeType||u)return s(e,t,n);return!1}:function(e,t,n){var i,r,o=[_,d];if(n){for(;e=e[a];)if((1===e.nodeType||u)&&s(e,t,n))return!0}else for(;e=e[a];)if(1===e.nodeType||u)if(i=(r=e[T]||(e[T]={}))[e.uniqueID]||(r[e.uniqueID]={}),l&&l===e.nodeName.toLowerCase())e=e[a]||e;else{if((r=i[c])&&r[0]===_&&r[1]===d)return o[2]=r[2];if((i[c]=o)[2]=s(e,t,n))return!0}return!1}}function be(r){return 1<r.length?function(e,t,n){for(var i=r.length;i--;)if(!r[i](e,t,n))return!1;return!0}:r[0]}function we(e,t,n,i,r){for(var o,s=[],a=0,l=e.length,c=null!=t;a<l;a++)(o=e[a])&&(n&&!n(o,i,r)||(s.push(o),c&&t.push(a)));return s}function xe(e){for(var i,t,n,r=e.length,o=w.relative[e[0].type],s=o||w.relative[" "],a=o?1:0,l=ye(function(e){return e===i},s,!0),c=ye(function(e){return-1<R(i,e)},s,!0),u=[function(e,t,n){n=!o&&(n||t!==x)||((i=t).nodeType?l:c)(e,t,n);return i=null,n}];a<r;a++)if(t=w.relative[e[a].type])u=[ye(be(u),t)];else{if((t=w.filter[e[a].type].apply(null,e[a].matches))[T]){for(n=++a;n<r&&!w.relative[e[n].type];n++);return function e(f,h,v,m,g,t){return m&&!m[T]&&(m=e(m)),g&&!g[T]&&(g=e(g,t)),ce(function(e,t,n,i){var r,o,s,a=[],l=[],c=t.length,u=e||function(e,t,n){for(var i=0,r=t.length;i<r;i++)ae(e,t[i],n);return n}(h||"*",n.nodeType?[n]:n,[]),d=!f||!e&&h?u:we(u,a,f,n,i),p=v?g||(e?f:c||m)?[]:t:d;if(v&&v(d,p,n,i),m)for(r=we(p,l),m(r,[],n,i),o=r.length;o--;)(s=r[o])&&(p[l[o]]=!(d[l[o]]=s));if(e){if(g||f){if(g){for(r=[],o=p.length;o--;)(s=p[o])&&r.push(d[o]=s);g(null,p=[],r,i)}for(o=p.length;o--;)(s=p[o])&&-1<(r=g?R(e,s):a[o])&&(e[r]=!(t[r]=s))}}else p=we(p===t?p.splice(c,p.length):p),g?g(null,t,p,i):P.apply(t,p)})}(1<a&&be(u),1<a&&ge(e.slice(0,a-1).concat({value:" "===e[a-2].type?"*":""})).replace(W,"$1"),t,a<n&&xe(e.slice(a,n)),n<r&&xe(e=e.slice(n)),n<r&&ge(e))}u.push(t)}return be(u)}return me.prototype=w.filters=w.pseudos,w.setFilters=new me,h=ae.tokenize=function(e,t){var n,i,r,o,s,a,l,c=A[e+" "];if(c)return t?0:c.slice(0);for(s=e,a=[],l=w.preFilter;s;){for(o in n&&!(i=U.exec(s))||(i&&(s=s.slice(i[0].length)||s),a.push(r=[])),n=!1,(i=V.exec(s))&&(n=i.shift(),r.push({value:n,type:i[0].replace(W," ")}),s=s.slice(n.length)),w.filter)!(i=J[o].exec(s))||l[o]&&!(i=l[o](i))||(n=i.shift(),r.push({value:n,type:o,matches:i}),s=s.slice(n.length));if(!n)break}return t?s.length:s?ae.error(e):A(e,a).slice(0)},p=ae.compile=function(e,t){var n,m,g,y,b,i,r=[],o=[],s=O[e+" "];if(!s){for(n=(t=t||h(e)).length;n--;)((s=xe(t[n]))[T]?r:o).push(s);(s=O(e,(m=o,y=0<(g=r).length,b=0<m.length,i=function(e,t,n,i,r){var o,s,a,l=0,c="0",u=e&&[],d=[],p=x,f=e||b&&w.find.TAG("*",r),h=_+=null==p?1:Math.random()||.1,v=f.length;for(r&&(x=t==C||t||r);c!==v&&null!=(o=f[c]);c++){if(b&&o){for(s=0,t||o.ownerDocument==C||(k(o),n=!S);a=m[s++];)if(a(o,t||C,n)){i.push(o);break}r&&(_=h)}y&&((o=!a&&o)&&l--,e&&u.push(o))}if(l+=c,y&&c!==l){for(s=0;a=g[s++];)a(u,d,t,n);if(e){if(0<l)for(;c--;)u[c]||d[c]||(d[c]=N.call(i));d=we(d)}P.apply(i,d),r&&!e&&0<d.length&&1<l+g.length&&ae.uniqueSort(i)}return r&&(_=h,x=p),u},y?ce(i):i))).selector=e}return s},v=ae.select=function(e,t,n,i){var r,o,s,a,l,c="function"==typeof e&&e,u=!i&&h(e=c.selector||e);if(n=n||[],1===u.length){if(2<(o=u[0]=u[0].slice(0)).length&&"ID"===(s=o[0]).type&&9===t.nodeType&&S&&w.relative[o[1].type]){if(!(t=(w.find.ID(s.matches[0].replace(ie,d),t)||[])[0]))return n;c&&(t=t.parentNode),e=e.slice(o.shift().value.length)}for(r=J.needsContext.test(e)?0:o.length;r--&&(s=o[r],!w.relative[a=s.type]);)if((l=w.find[a])&&(i=l(s.matches[0].replace(ie,d),ne.test(o[0].type)&&ve(t.parentNode)||t))){if(o.splice(r,1),!(e=i.length&&ge(o)))return P.apply(n,i),n;break}}return(c||p(e,u))(i,t,!S,n,!t||ne.test(e)&&ve(t.parentNode)||t),n},f.sortStable=T.split("").sort(j).join("")===T,f.detectDuplicates=!!c,k(),f.sortDetached=ue(function(e){return 1&e.compareDocumentPosition(C.createElement("fieldset"))}),ue(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||de("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),f.attributes&&ue(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||de("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),ue(function(e){return null==e.getAttribute("disabled")})||de(I,function(e,t,n){if(!n)return!0===e[t]?t.toLowerCase():(t=e.getAttributeNode(t))&&t.specified?t.value:null}),ae}(C);T.find=p,T.expr=p.selectors,T.expr[":"]=T.expr.pseudos,T.uniqueSort=T.unique=p.uniqueSort,T.text=p.getText,T.isXMLDoc=p.isXML,T.contains=p.contains,T.escapeSelector=p.escape;function f(e,t,n){for(var i=[],r=void 0!==n;(e=e[t])&&9!==e.nodeType;)if(1===e.nodeType){if(r&&T(e).is(n))break;i.push(e)}return i}function x(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n}var k=T.expr.match.needsContext;function _(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var $=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function A(e,n,i){return b(n)?T.grep(e,function(e,t){return!!n.call(e,t,e)!==i}):n.nodeType?T.grep(e,function(e){return e===n!==i}):"string"!=typeof n?T.grep(e,function(e){return-1<r.call(n,e)!==i}):T.filter(n,e,i)}T.filter=function(e,t,n){var i=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===i.nodeType?T.find.matchesSelector(i,e)?[i]:[]:T.find.matches(e,T.grep(t,function(e){return 1===e.nodeType}))},T.fn.extend({find:function(e){var t,n,i=this.length,r=this;if("string"!=typeof e)return this.pushStack(T(e).filter(function(){for(t=0;t<i;t++)if(T.contains(r[t],this))return!0}));for(n=this.pushStack([]),t=0;t<i;t++)T.find(e,r[t],n);return 1<i?T.uniqueSort(n):n},filter:function(e){return this.pushStack(A(this,e||[],!1))},not:function(e){return this.pushStack(A(this,e||[],!0))},is:function(e){return!!A(this,"string"==typeof e&&k.test(e)?T(e):e||[],!1).length}});var O=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(T.fn.init=function(e,t,n){if(!e)return this;if(n=n||E,"string"!=typeof e)return e.nodeType?(this[0]=e,this.length=1,this):b(e)?void 0!==n.ready?n.ready(e):e(T):T.makeArray(e,this);if(!(i="<"===e[0]&&">"===e[e.length-1]&&3<=e.length?[null,e,null]:O.exec(e))||!i[1]&&t)return(!t||t.jquery?t||n:this.constructor(t)).find(e);if(i[1]){if(t=t instanceof T?t[0]:t,T.merge(this,T.parseHTML(i[1],t&&t.nodeType?t.ownerDocument||t:S,!0)),$.test(i[1])&&T.isPlainObject(t))for(var i in t)b(this[i])?this[i](t[i]):this.attr(i,t[i]);return this}return(e=S.getElementById(i[2]))&&(this[0]=e,this.length=1),this}).prototype=T.fn;var E=T(S),j=/^(?:parents|prev(?:Until|All))/,D={children:!0,contents:!0,next:!0,prev:!0};function N(e,t){for(;(e=e[t])&&1!==e.nodeType;);return e}T.fn.extend({has:function(e){var t=T(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(T.contains(this,t[e]))return!0})},closest:function(e,t){var n,i=0,r=this.length,o=[],s="string"!=typeof e&&T(e);if(!k.test(e))for(;i<r;i++)for(n=this[i];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(s?-1<s.index(n):1===n.nodeType&&T.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(1<o.length?T.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?r.call(T(e),this[0]):r.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(T.uniqueSort(T.merge(this.get(),T(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),T.each({parent:function(e){e=e.parentNode;return e&&11!==e.nodeType?e:null},parents:function(e){return f(e,"parentNode")},parentsUntil:function(e,t,n){return f(e,"parentNode",n)},next:function(e){return N(e,"nextSibling")},prev:function(e){return N(e,"previousSibling")},nextAll:function(e){return f(e,"nextSibling")},prevAll:function(e){return f(e,"previousSibling")},nextUntil:function(e,t,n){return f(e,"nextSibling",n)},prevUntil:function(e,t,n){return f(e,"previousSibling",n)},siblings:function(e){return x((e.parentNode||{}).firstChild,e)},children:function(e){return x(e.firstChild)},contents:function(e){return null!=e.contentDocument&&n(e.contentDocument)?e.contentDocument:(_(e,"template")&&(e=e.content||e),T.merge([],e.childNodes))}},function(i,r){T.fn[i]=function(e,t){var n=T.map(this,r,e);return(t="Until"!==i.slice(-5)?e:t)&&"string"==typeof t&&(n=T.filter(t,n)),1<this.length&&(D[i]||T.uniqueSort(n),j.test(i)&&n.reverse()),this.pushStack(n)}});var L=/[^\x20\t\r\n\f]+/g;function P(e){return e}function M(e){throw e}function R(e,t,n,i){var r;try{e&&b(r=e.promise)?r.call(e).done(t).fail(n):e&&b(r=e.then)?r.call(e,t,n):t.apply(void 0,[e].slice(i))}catch(e){n.apply(void 0,[e])}}T.Callbacks=function(i){var n;i="string"==typeof i?(n={},T.each(i.match(L)||[],function(e,t){n[t]=!0}),n):T.extend({},i);function r(){for(s=s||i.once,t=o=!0;l.length;c=-1)for(e=l.shift();++c<a.length;)!1===a[c].apply(e[0],e[1])&&i.stopOnFalse&&(c=a.length,e=!1);i.memory||(e=!1),o=!1,s&&(a=e?[]:"")}var o,e,t,s,a=[],l=[],c=-1,u={add:function(){return a&&(e&&!o&&(c=a.length-1,l.push(e)),function n(e){T.each(e,function(e,t){b(t)?i.unique&&u.has(t)||a.push(t):t&&t.length&&"string"!==h(t)&&n(t)})}(arguments),e&&!o&&r()),this},remove:function(){return T.each(arguments,function(e,t){for(var n;-1<(n=T.inArray(t,a,n));)a.splice(n,1),n<=c&&c--}),this},has:function(e){return e?-1<T.inArray(e,a):0<a.length},empty:function(){return a=a&&[],this},disable:function(){return s=l=[],a=e="",this},disabled:function(){return!a},lock:function(){return s=l=[],e||o||(a=e=""),this},locked:function(){return!!s},fireWith:function(e,t){return s||(t=[e,(t=t||[]).slice?t.slice():t],l.push(t),o||r()),this},fire:function(){return u.fireWith(this,arguments),this},fired:function(){return!!t}};return u},T.extend({Deferred:function(e){var o=[["notify","progress",T.Callbacks("memory"),T.Callbacks("memory"),2],["resolve","done",T.Callbacks("once memory"),T.Callbacks("once memory"),0,"resolved"],["reject","fail",T.Callbacks("once memory"),T.Callbacks("once memory"),1,"rejected"]],r="pending",s={state:function(){return r},always:function(){return a.done(arguments).fail(arguments),this},catch:function(e){return s.then(null,e)},pipe:function(){var r=arguments;return T.Deferred(function(i){T.each(o,function(e,t){var n=b(r[t[4]])&&r[t[4]];a[t[1]](function(){var e=n&&n.apply(this,arguments);e&&b(e.promise)?e.promise().progress(i.notify).done(i.resolve).fail(i.reject):i[t[0]+"With"](this,n?[e]:arguments)})}),r=null}).promise()},then:function(t,n,i){var l=0;function c(r,o,s,a){return function(){function e(){var e,t;if(!(r<l)){if((e=s.apply(n,i))===o.promise())throw new TypeError("Thenable self-resolution");t=e&&("object"==_typeof(e)||"function"==typeof e)&&e.then,b(t)?a?t.call(e,c(l,o,P,a),c(l,o,M,a)):(l++,t.call(e,c(l,o,P,a),c(l,o,M,a),c(l,o,P,o.notifyWith))):(s!==P&&(n=void 0,i=[e]),(a||o.resolveWith)(n,i))}}var n=this,i=arguments,t=a?e:function(){try{e()}catch(e){T.Deferred.exceptionHook&&T.Deferred.exceptionHook(e,t.stackTrace),l<=r+1&&(s!==M&&(n=void 0,i=[e]),o.rejectWith(n,i))}};r?t():(T.Deferred.getStackHook&&(t.stackTrace=T.Deferred.getStackHook()),C.setTimeout(t))}}return T.Deferred(function(e){o[0][3].add(c(0,e,b(i)?i:P,e.notifyWith)),o[1][3].add(c(0,e,b(t)?t:P)),o[2][3].add(c(0,e,b(n)?n:M))}).promise()},promise:function(e){return null!=e?T.extend(e,s):s}},a={};return T.each(o,function(e,t){var n=t[2],i=t[5];s[t[1]]=n.add,i&&n.add(function(){r=i},o[3-e][2].disable,o[3-e][3].disable,o[0][2].lock,o[0][3].lock),n.add(t[3].fire),a[t[0]]=function(){return a[t[0]+"With"](this===a?void 0:this,arguments),this},a[t[0]+"With"]=n.fireWith}),s.promise(a),e&&e.call(a,a),a},when:function(e){function t(t){return function(e){r[t]=this,o[t]=1<arguments.length?a.call(arguments):e,--n||s.resolveWith(r,o)}}var n=arguments.length,i=n,r=Array(i),o=a.call(arguments),s=T.Deferred();if(n<=1&&(R(e,s.done(t(i)).resolve,s.reject,!n),"pending"===s.state()||b(o[i]&&o[i].then)))return s.then();for(;i--;)R(o[i],t(i),s.reject);return s.promise()}});var I=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;T.Deferred.exceptionHook=function(e,t){C.console&&C.console.warn&&e&&I.test(e.name)&&C.console.warn("jQuery.Deferred exception: "+e.message,e.stack,t)},T.readyException=function(e){C.setTimeout(function(){throw e})};var H=T.Deferred();function q(){S.removeEventListener("DOMContentLoaded",q),C.removeEventListener("load",q),T.ready()}T.fn.ready=function(e){return H.then(e).catch(function(e){T.readyException(e)}),this},T.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--T.readyWait:T.isReady)||(T.isReady=!0)!==e&&0<--T.readyWait||H.resolveWith(S,[T])}}),T.ready.then=H.then,"complete"===S.readyState||"loading"!==S.readyState&&!S.documentElement.doScroll?C.setTimeout(T.ready):(S.addEventListener("DOMContentLoaded",q),C.addEventListener("load",q));function F(e,t,n,i,r,o,s){var a=0,l=e.length,c=null==n;if("object"===h(n))for(a in r=!0,n)F(e,t,a,n[a],!0,o,s);else if(void 0!==i&&(r=!0,b(i)||(s=!0),t=c?s?(t.call(e,i),null):(c=t,function(e,t,n){return c.call(T(e),n)}):t))for(;a<l;a++)t(e[a],n,s?i:i.call(e[a],a,t(e[a],n)));return r?e:c?t.call(e):l?t(e[0],n):o}var z=/^-ms-/,B=/-([a-z])/g;function W(e,t){return t.toUpperCase()}function U(e){return e.replace(z,"ms-").replace(B,W)}function V(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType}function X(){this.expando=T.expando+X.uid++}X.uid=1,X.prototype={cache:function(e){var t=e[this.expando];return t||(t={},V(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var i,r=this.cache(e);if("string"==typeof t)r[U(t)]=n;else for(i in t)r[U(i)]=t[i];return r},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][U(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,i=e[this.expando];if(void 0!==i){if(void 0!==t){n=(t=Array.isArray(t)?t.map(U):(t=U(t))in i?[t]:t.match(L)||[]).length;for(;n--;)delete i[t[n]]}void 0!==t&&!T.isEmptyObject(i)||(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){e=e[this.expando];return void 0!==e&&!T.isEmptyObject(e)}};var Y=new X,G=new X,J=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,K=/[A-Z]/g;function Q(e,t,n){var i,r;if(void 0===n&&1===e.nodeType)if(i="data-"+t.replace(K,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(i))){try{n="true"===(r=n)||"false"!==r&&("null"===r?null:r===+r+""?+r:J.test(r)?JSON.parse(r):r)}catch(e){}G.set(e,t,n)}else n=void 0;return n}T.extend({hasData:function(e){return G.hasData(e)||Y.hasData(e)},data:function(e,t,n){return G.access(e,t,n)},removeData:function(e,t){G.remove(e,t)},_data:function(e,t,n){return Y.access(e,t,n)},_removeData:function(e,t){Y.remove(e,t)}}),T.fn.extend({data:function(n,e){var t,i,r,o=this[0],s=o&&o.attributes;if(void 0!==n)return"object"==_typeof(n)?this.each(function(){G.set(this,n)}):F(this,function(e){var t;return o&&void 0===e?void 0!==(t=G.get(o,n))||void 0!==(t=Q(o,n))?t:void 0:void this.each(function(){G.set(this,n,e)})},null,e,1<arguments.length,null,!0);if(this.length&&(r=G.get(o),1===o.nodeType&&!Y.get(o,"hasDataAttrs"))){for(t=s.length;t--;)s[t]&&0===(i=s[t].name).indexOf("data-")&&(i=U(i.slice(5)),Q(o,i,r[i]));Y.set(o,"hasDataAttrs",!0)}return r},removeData:function(e){return this.each(function(){G.remove(this,e)})}}),T.extend({queue:function(e,t,n){var i;if(e)return t=(t||"fx")+"queue",i=Y.get(e,t),n&&(!i||Array.isArray(n)?i=Y.access(e,t,T.makeArray(n)):i.push(n)),i||[]},dequeue:function(e,t){t=t||"fx";var n=T.queue(e,t),i=n.length,r=n.shift(),o=T._queueHooks(e,t);"inprogress"===r&&(r=n.shift(),i--),r&&("fx"===t&&n.unshift("inprogress"),delete o.stop,r.call(e,function(){T.dequeue(e,t)},o)),!i&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return Y.get(e,n)||Y.access(e,n,{empty:T.Callbacks("once memory").add(function(){Y.remove(e,[t+"queue",n])})})}}),T.fn.extend({queue:function(t,n){var e=2;return"string"!=typeof t&&(n=t,t="fx",e--),arguments.length<e?T.queue(this[0],t):void 0===n?this:this.each(function(){var e=T.queue(this,t,n);T._queueHooks(this,t),"fx"===t&&"inprogress"!==e[0]&&T.dequeue(this,t)})},dequeue:function(e){return this.each(function(){T.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){function n(){--r||o.resolveWith(s,[s])}var i,r=1,o=T.Deferred(),s=this,a=this.length;for("string"!=typeof e&&(t=e,e=void 0),e=e||"fx";a--;)(i=Y.get(s[a],e+"queueHooks"))&&i.empty&&(r++,i.empty.add(n));return n(),o.promise(t)}});var Z=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,ee=new RegExp("^(?:([+-])=|)("+Z+")([a-z%]*)$","i"),te=["Top","Right","Bottom","Left"],ne=S.documentElement,ie=function(e){return T.contains(e.ownerDocument,e)},re={composed:!0};ne.getRootNode&&(ie=function(e){return T.contains(e.ownerDocument,e)||e.getRootNode(re)===e.ownerDocument});function oe(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&ie(e)&&"none"===T.css(e,"display")}function se(e,t,n,i){var r,o,s=20,a=i?function(){return i.cur()}:function(){return T.css(e,t,"")},l=a(),c=n&&n[3]||(T.cssNumber[t]?"":"px"),u=e.nodeType&&(T.cssNumber[t]||"px"!==c&&+l)&&ee.exec(T.css(e,t));if(u&&u[3]!==c){for(l/=2,c=c||u[3],u=+l||1;s--;)T.style(e,t,u+c),(1-o)*(1-(o=a()/l||.5))<=0&&(s=0),u/=o;u*=2,T.style(e,t,u+c),n=n||[]}return n&&(u=+u||+l||0,r=n[1]?u+(n[1]+1)*n[2]:+n[2],i&&(i.unit=c,i.start=u,i.end=r)),r}var ae={};function le(e,t){for(var n,i,r,o,s,a,l=[],c=0,u=e.length;c<u;c++)(i=e[c]).style&&(n=i.style.display,t?("none"===n&&(l[c]=Y.get(i,"display")||null,l[c]||(i.style.display="")),""===i.style.display&&oe(i)&&(l[c]=(a=o=r=void 0,o=i.ownerDocument,s=i.nodeName,(a=ae[s])||(r=o.body.appendChild(o.createElement(s)),a=T.css(r,"display"),r.parentNode.removeChild(r),"none"===a&&(a="block"),ae[s]=a)))):"none"!==n&&(l[c]="none",Y.set(i,"display",n)));for(c=0;c<u;c++)null!=l[c]&&(e[c].style.display=l[c]);return e}T.fn.extend({show:function(){return le(this,!0)},hide:function(){return le(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){oe(this)?T(this).show():T(this).hide()})}});var ce=/^(?:checkbox|radio)$/i,ue=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,de=/^$|^module$|\/(?:java|ecma)script/i,pe=S.createDocumentFragment().appendChild(S.createElement("div"));(p=S.createElement("input")).setAttribute("type","radio"),p.setAttribute("checked","checked"),p.setAttribute("name","t"),pe.appendChild(p),y.checkClone=pe.cloneNode(!0).cloneNode(!0).lastChild.checked,pe.innerHTML="<textarea>x</textarea>",y.noCloneChecked=!!pe.cloneNode(!0).lastChild.defaultValue,pe.innerHTML="<option></option>",y.option=!!pe.lastChild;var fe={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function he(e,t){var n=void 0!==e.getElementsByTagName?e.getElementsByTagName(t||"*"):void 0!==e.querySelectorAll?e.querySelectorAll(t||"*"):[];return void 0===t||t&&_(e,t)?T.merge([e],n):n}function ve(e,t){for(var n=0,i=e.length;n<i;n++)Y.set(e[n],"globalEval",!t||Y.get(t[n],"globalEval"))}fe.tbody=fe.tfoot=fe.colgroup=fe.caption=fe.thead,fe.th=fe.td,y.option||(fe.optgroup=fe.option=[1,"<select multiple='multiple'>","</select>"]);var me=/<|&#?\w+;/;function ge(e,t,n,i,r){for(var o,s,a,l,c,u=t.createDocumentFragment(),d=[],p=0,f=e.length;p<f;p++)if((o=e[p])||0===o)if("object"===h(o))T.merge(d,o.nodeType?[o]:o);else if(me.test(o)){for(s=s||u.appendChild(t.createElement("div")),a=(ue.exec(o)||["",""])[1].toLowerCase(),a=fe[a]||fe._default,s.innerHTML=a[1]+T.htmlPrefilter(o)+a[2],c=a[0];c--;)s=s.lastChild;T.merge(d,s.childNodes),(s=u.firstChild).textContent=""}else d.push(t.createTextNode(o));for(u.textContent="",p=0;o=d[p++];)if(i&&-1<T.inArray(o,i))r&&r.push(o);else if(l=ie(o),s=he(u.appendChild(o),"script"),l&&ve(s),n)for(c=0;o=s[c++];)de.test(o.type||"")&&n.push(o);return u}var ye=/^([^.]*)(?:\.(.+)|)/;function be(){return!0}function we(){return!1}function xe(e,t){return e===function(){try{return S.activeElement}catch(e){}}()==("focus"===t)}function ke(e,t,n,i,r,o){var s,a;if("object"==_typeof(t)){for(a in"string"!=typeof n&&(i=i||n,n=void 0),t)ke(e,a,n,i,t[a],o);return e}if(null==i&&null==r?(r=n,i=n=void 0):null==r&&("string"==typeof n?(r=i,i=void 0):(r=i,i=n,n=void 0)),!1===r)r=we;else if(!r)return e;return 1===o&&(s=r,(r=function(e){return T().off(e),s.apply(this,arguments)}).guid=s.guid||(s.guid=T.guid++)),e.each(function(){T.event.add(this,t,r,i,n)})}function Ce(e,r,o){o?(Y.set(e,r,!1),T.event.add(e,r,{namespace:!1,handler:function(e){var t,n,i=Y.get(this,r);if(1&e.isTrigger&&this[r]){if(i.length)(T.event.special[r]||{}).delegateType&&e.stopPropagation();else if(i=a.call(arguments),Y.set(this,r,i),t=o(this,r),this[r](),i!==(n=Y.get(this,r))||t?Y.set(this,r,!1):n={},i!==n)return e.stopImmediatePropagation(),e.preventDefault(),n&&n.value}else i.length&&(Y.set(this,r,{value:T.event.trigger(T.extend(i[0],T.Event.prototype),i.slice(1),this)}),e.stopImmediatePropagation())}})):void 0===Y.get(e,r)&&T.event.add(e,r,be)}T.event={global:{},add:function(t,e,n,i,r){var o,s,a,l,c,u,d,p,f,h=Y.get(t);if(V(t))for(n.handler&&(n=(o=n).handler,r=o.selector),r&&T.find.matchesSelector(ne,r),n.guid||(n.guid=T.guid++),(a=h.events)||(a=h.events=Object.create(null)),(s=h.handle)||(s=h.handle=function(e){return void 0!==T&&T.event.triggered!==e.type?T.event.dispatch.apply(t,arguments):void 0}),l=(e=(e||"").match(L)||[""]).length;l--;)d=f=(c=ye.exec(e[l])||[])[1],p=(c[2]||"").split(".").sort(),d&&(u=T.event.special[d]||{},d=(r?u.delegateType:u.bindType)||d,u=T.event.special[d]||{},c=T.extend({type:d,origType:f,data:i,handler:n,guid:n.guid,selector:r,needsContext:r&&T.expr.match.needsContext.test(r),namespace:p.join(".")},o),(f=a[d])||((f=a[d]=[]).delegateCount=0,u.setup&&!1!==u.setup.call(t,i,p,s)||t.addEventListener&&t.addEventListener(d,s)),u.add&&(u.add.call(t,c),c.handler.guid||(c.handler.guid=n.guid)),r?f.splice(f.delegateCount++,0,c):f.push(c),T.event.global[d]=!0)},remove:function(e,t,n,i,r){var o,s,a,l,c,u,d,p,f,h,v,m=Y.hasData(e)&&Y.get(e);if(m&&(l=m.events)){for(c=(t=(t||"").match(L)||[""]).length;c--;)if(f=v=(a=ye.exec(t[c])||[])[1],h=(a[2]||"").split(".").sort(),f){for(d=T.event.special[f]||{},p=l[f=(i?d.delegateType:d.bindType)||f]||[],a=a[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),s=o=p.length;o--;)u=p[o],!r&&v!==u.origType||n&&n.guid!==u.guid||a&&!a.test(u.namespace)||i&&i!==u.selector&&("**"!==i||!u.selector)||(p.splice(o,1),u.selector&&p.delegateCount--,d.remove&&d.remove.call(e,u));s&&!p.length&&(d.teardown&&!1!==d.teardown.call(e,h,m.handle)||T.removeEvent(e,f,m.handle),delete l[f])}else for(f in l)T.event.remove(e,f+t[c],n,i,!0);T.isEmptyObject(l)&&Y.remove(e,"handle events")}},dispatch:function(e){var t,n,i,r,o,s=new Array(arguments.length),a=T.event.fix(e),l=(Y.get(this,"events")||Object.create(null))[a.type]||[],e=T.event.special[a.type]||{};for(s[0]=a,t=1;t<arguments.length;t++)s[t]=arguments[t];if(a.delegateTarget=this,!e.preDispatch||!1!==e.preDispatch.call(this,a)){for(o=T.event.handlers.call(this,a,l),t=0;(i=o[t++])&&!a.isPropagationStopped();)for(a.currentTarget=i.elem,n=0;(r=i.handlers[n++])&&!a.isImmediatePropagationStopped();)a.rnamespace&&!1!==r.namespace&&!a.rnamespace.test(r.namespace)||(a.handleObj=r,a.data=r.data,void 0!==(r=((T.event.special[r.origType]||{}).handle||r.handler).apply(i.elem,s))&&!1===(a.result=r)&&(a.preventDefault(),a.stopPropagation()));return e.postDispatch&&e.postDispatch.call(this,a),a.result}},handlers:function(e,t){var n,i,r,o,s,a=[],l=t.delegateCount,c=e.target;if(l&&c.nodeType&&!("click"===e.type&&1<=e.button))for(;c!==this;c=c.parentNode||this)if(1===c.nodeType&&("click"!==e.type||!0!==c.disabled)){for(o=[],s={},n=0;n<l;n++)void 0===s[r=(i=t[n]).selector+" "]&&(s[r]=i.needsContext?-1<T(r,this).index(c):T.find(r,this,null,[c]).length),s[r]&&o.push(i);o.length&&a.push({elem:c,handlers:o})}return c=this,l<t.length&&a.push({elem:c,handlers:t.slice(l)}),a},addProp:function(t,e){Object.defineProperty(T.Event.prototype,t,{enumerable:!0,configurable:!0,get:b(e)?function(){if(this.originalEvent)return e(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[t]},set:function(e){Object.defineProperty(this,t,{enumerable:!0,configurable:!0,writable:!0,value:e})}})},fix:function(e){return e[T.expando]?e:new T.Event(e)},special:{load:{noBubble:!0},click:{setup:function(e){e=this||e;return ce.test(e.type)&&e.click&&_(e,"input")&&Ce(e,"click",be),!1},trigger:function(e){e=this||e;return ce.test(e.type)&&e.click&&_(e,"input")&&Ce(e,"click"),!0},_default:function(e){e=e.target;return ce.test(e.type)&&e.click&&_(e,"input")&&Y.get(e,"click")||_(e,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},T.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},T.Event=function(e,t){if(!(this instanceof T.Event))return new T.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?be:we,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&T.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[T.expando]=!0},T.Event.prototype={constructor:T.Event,isDefaultPrevented:we,isPropagationStopped:we,isImmediatePropagationStopped:we,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=be,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=be,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=be,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},T.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,char:!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:!0},T.event.addProp),T.each({focus:"focusin",blur:"focusout"},function(e,t){T.event.special[e]={setup:function(){return Ce(this,e,xe),!1},trigger:function(){return Ce(this,e),!0},_default:function(){return!0},delegateType:t}}),T.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,r){T.event.special[e]={delegateType:r,bindType:r,handle:function(e){var t,n=e.relatedTarget,i=e.handleObj;return n&&(n===this||T.contains(this,n))||(e.type=i.origType,t=i.handler.apply(this,arguments),e.type=r),t}}}),T.fn.extend({on:function(e,t,n,i){return ke(this,e,t,n,i)},one:function(e,t,n,i){return ke(this,e,t,n,i,1)},off:function(e,t,n){var i,r;if(e&&e.preventDefault&&e.handleObj)return i=e.handleObj,T(e.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler),this;if("object"!=_typeof(e))return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=we),this.each(function(){T.event.remove(this,e,n,t)});for(r in e)this.off(r,t,e[r]);return this}});var Se=/<script|<style|<link/i,Te=/checked\s*(?:[^=]|=\s*.checked.)/i,_e=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function $e(e,t){return _(e,"table")&&_(11!==t.nodeType?t:t.firstChild,"tr")&&T(e).children("tbody")[0]||e}function Ae(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function Oe(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Ee(e,t){var n,i,r,o;if(1===t.nodeType){if(Y.hasData(e)&&(o=Y.get(e).events))for(r in Y.remove(t,"handle events"),o)for(n=0,i=o[r].length;n<i;n++)T.event.add(t,r,o[r][n]);G.hasData(e)&&(e=G.access(e),e=T.extend({},e),G.set(t,e))}}function je(n,i,r,o){i=m(i);var e,t,s,a,l,c,u=0,d=n.length,p=d-1,f=i[0],h=b(f);if(h||1<d&&"string"==typeof f&&!y.checkClone&&Te.test(f))return n.each(function(e){var t=n.eq(e);h&&(i[0]=f.call(this,e,t.html())),je(t,i,r,o)});if(d&&(t=(e=ge(i,n[0].ownerDocument,!1,n,o)).firstChild,1===e.childNodes.length&&(e=t),t||o)){for(a=(s=T.map(he(e,"script"),Ae)).length;u<d;u++)l=e,u!==p&&(l=T.clone(l,!0,!0),a&&T.merge(s,he(l,"script"))),r.call(n[u],l,u);if(a)for(c=s[s.length-1].ownerDocument,T.map(s,Oe),u=0;u<a;u++)l=s[u],de.test(l.type||"")&&!Y.access(l,"globalEval")&&T.contains(c,l)&&(l.src&&"module"!==(l.type||"").toLowerCase()?T._evalUrl&&!l.noModule&&T._evalUrl(l.src,{nonce:l.nonce||l.getAttribute("nonce")},c):w(l.textContent.replace(_e,""),l,c))}return n}function De(e,t,n){for(var i,r=t?T.filter(t,e):e,o=0;null!=(i=r[o]);o++)n||1!==i.nodeType||T.cleanData(he(i)),i.parentNode&&(n&&ie(i)&&ve(he(i,"script")),i.parentNode.removeChild(i));return e}T.extend({htmlPrefilter:function(e){return e},clone:function(e,t,n){var i,r,o,s,a,l,c,u=e.cloneNode(!0),d=ie(e);if(!(y.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||T.isXMLDoc(e)))for(s=he(u),i=0,r=(o=he(e)).length;i<r;i++)a=o[i],"input"===(c=(l=s[i]).nodeName.toLowerCase())&&ce.test(a.type)?l.checked=a.checked:"input"!==c&&"textarea"!==c||(l.defaultValue=a.defaultValue);if(t)if(n)for(o=o||he(e),s=s||he(u),i=0,r=o.length;i<r;i++)Ee(o[i],s[i]);else Ee(e,u);return 0<(s=he(u,"script")).length&&ve(s,!d&&he(e,"script")),u},cleanData:function(e){for(var t,n,i,r=T.event.special,o=0;void 0!==(n=e[o]);o++)if(V(n)){if(t=n[Y.expando]){if(t.events)for(i in t.events)r[i]?T.event.remove(n,i):T.removeEvent(n,i,t.handle);n[Y.expando]=void 0}n[G.expando]&&(n[G.expando]=void 0)}}}),T.fn.extend({detach:function(e){return De(this,e,!0)},remove:function(e){return De(this,e)},text:function(e){return F(this,function(e){return void 0===e?T.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return je(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||$e(this,e).appendChild(e)})},prepend:function(){return je(this,arguments,function(e){var t;1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(t=$e(this,e)).insertBefore(e,t.firstChild)})},before:function(){return je(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return je(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(T.cleanData(he(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return T.clone(this,e,t)})},html:function(e){return F(this,function(e){var t=this[0]||{},n=0,i=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!Se.test(e)&&!fe[(ue.exec(e)||["",""])[1].toLowerCase()]){e=T.htmlPrefilter(e);try{for(;n<i;n++)1===(t=this[n]||{}).nodeType&&(T.cleanData(he(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var n=[];return je(this,arguments,function(e){var t=this.parentNode;T.inArray(this,n)<0&&(T.cleanData(he(this)),t&&t.replaceChild(e,this))},n)}}),T.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,s){T.fn[e]=function(e){for(var t,n=[],i=T(e),r=i.length-1,o=0;o<=r;o++)t=o===r?this:this.clone(!0),T(i[o])[s](t),l.apply(n,t.get());return this.pushStack(n)}});function Ne(e,t,n){var i,r={};for(i in t)r[i]=e.style[i],e.style[i]=t[i];for(i in n=n.call(e),t)e.style[i]=r[i];return n}var Le,Pe,Me,Re,Ie,He,qe,Fe,ze=new RegExp("^("+Z+")(?!px)[a-z%]+$","i"),Be=function(e){var t=e.ownerDocument.defaultView;return(t=!t||!t.opener?C:t).getComputedStyle(e)},We=new RegExp(te.join("|"),"i");function Ue(e,t,n){var i,r,o=e.style;return(n=n||Be(e))&&(""!==(r=n.getPropertyValue(t)||n[t])||ie(e)||(r=T.style(e,t)),!y.pixelBoxStyles()&&ze.test(r)&&We.test(t)&&(i=o.width,e=o.minWidth,t=o.maxWidth,o.minWidth=o.maxWidth=o.width=r,r=n.width,o.width=i,o.minWidth=e,o.maxWidth=t)),void 0!==r?r+"":r}function Ve(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}function Xe(){var e;Fe&&(qe.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",Fe.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",ne.appendChild(qe).appendChild(Fe),e=C.getComputedStyle(Fe),Le="1%"!==e.top,He=12===Ye(e.marginLeft),Fe.style.right="60%",Re=36===Ye(e.right),Pe=36===Ye(e.width),Fe.style.position="absolute",Me=12===Ye(Fe.offsetWidth/3),ne.removeChild(qe),Fe=null)}function Ye(e){return Math.round(parseFloat(e))}qe=S.createElement("div"),(Fe=S.createElement("div")).style&&(Fe.style.backgroundClip="content-box",Fe.cloneNode(!0).style.backgroundClip="",y.clearCloneStyle="content-box"===Fe.style.backgroundClip,T.extend(y,{boxSizingReliable:function(){return Xe(),Pe},pixelBoxStyles:function(){return Xe(),Re},pixelPosition:function(){return Xe(),Le},reliableMarginLeft:function(){return Xe(),He},scrollboxSize:function(){return Xe(),Me},reliableTrDimensions:function(){var e,t,n;return null==Ie&&(e=S.createElement("table"),t=S.createElement("tr"),n=S.createElement("div"),e.style.cssText="position:absolute;left:-11111px;border-collapse:separate",t.style.cssText="border:1px solid",t.style.height="1px",n.style.height="9px",n.style.display="block",ne.appendChild(e).appendChild(t).appendChild(n),n=C.getComputedStyle(t),Ie=parseInt(n.height,10)+parseInt(n.borderTopWidth,10)+parseInt(n.borderBottomWidth,10)===t.offsetHeight,ne.removeChild(e)),Ie}}));var Ge=["Webkit","Moz","ms"],Je=S.createElement("div").style,Ke={};function Qe(e){return T.cssProps[e]||Ke[e]||(e in Je?e:Ke[e]=function(e){for(var t=e[0].toUpperCase()+e.slice(1),n=Ge.length;n--;)if((e=Ge[n]+t)in Je)return e}(e)||e)}var Ze=/^(none|table(?!-c[ea]).+)/,et=/^--/,tt={position:"absolute",visibility:"hidden",display:"block"},nt={letterSpacing:"0",fontWeight:"400"};function it(e,t,n){var i=ee.exec(t);return i?Math.max(0,i[2]-(n||0))+(i[3]||"px"):t}function rt(e,t,n,i,r,o){var s="width"===t?1:0,a=0,l=0;if(n===(i?"border":"content"))return 0;for(;s<4;s+=2)"margin"===n&&(l+=T.css(e,n+te[s],!0,r)),i?("content"===n&&(l-=T.css(e,"padding"+te[s],!0,r)),"margin"!==n&&(l-=T.css(e,"border"+te[s]+"Width",!0,r))):(l+=T.css(e,"padding"+te[s],!0,r),"padding"!==n?l+=T.css(e,"border"+te[s]+"Width",!0,r):a+=T.css(e,"border"+te[s]+"Width",!0,r));return!i&&0<=o&&(l+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-l-a-.5))||0),l}function ot(e,t,n){var i=Be(e),r=(!y.boxSizingReliable()||n)&&"border-box"===T.css(e,"boxSizing",!1,i),o=r,s=Ue(e,t,i),a="offset"+t[0].toUpperCase()+t.slice(1);if(ze.test(s)){if(!n)return s;s="auto"}return(!y.boxSizingReliable()&&r||!y.reliableTrDimensions()&&_(e,"tr")||"auto"===s||!parseFloat(s)&&"inline"===T.css(e,"display",!1,i))&&e.getClientRects().length&&(r="border-box"===T.css(e,"boxSizing",!1,i),(o=a in e)&&(s=e[a])),(s=parseFloat(s)||0)+rt(e,t,n||(r?"border":"content"),o,i,s)+"px"}function st(e,t,n,i,r){return new st.prototype.init(e,t,n,i,r)}T.extend({cssHooks:{opacity:{get:function(e,t){if(t){e=Ue(e,"opacity");return""===e?"1":e}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,i){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var r,o,s,a=U(t),l=et.test(t),c=e.style;if(l||(t=Qe(a)),s=T.cssHooks[t]||T.cssHooks[a],void 0===n)return s&&"get"in s&&void 0!==(r=s.get(e,!1,i))?r:c[t];"string"===(o=_typeof(n))&&(r=ee.exec(n))&&r[1]&&(n=se(e,t,r),o="number"),null!=n&&n==n&&("number"!==o||l||(n+=r&&r[3]||(T.cssNumber[a]?"":"px")),y.clearCloneStyle||""!==n||0!==t.indexOf("background")||(c[t]="inherit"),s&&"set"in s&&void 0===(n=s.set(e,n,i))||(l?c.setProperty(t,n):c[t]=n))}},css:function(e,t,n,i){var r,o=U(t);return et.test(t)||(t=Qe(o)),"normal"===(r=void 0===(r=(o=T.cssHooks[t]||T.cssHooks[o])&&"get"in o?o.get(e,!0,n):r)?Ue(e,t,i):r)&&t in nt&&(r=nt[t]),""===n||n?(t=parseFloat(r),!0===n||isFinite(t)?t||0:r):r}}),T.each(["height","width"],function(e,a){T.cssHooks[a]={get:function(e,t,n){if(t)return!Ze.test(T.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?ot(e,a,n):Ne(e,tt,function(){return ot(e,a,n)})},set:function(e,t,n){var i,r=Be(e),o=!y.scrollboxSize()&&"absolute"===r.position,s=(o||n)&&"border-box"===T.css(e,"boxSizing",!1,r),n=n?rt(e,a,n,s,r):0;return s&&o&&(n-=Math.ceil(e["offset"+a[0].toUpperCase()+a.slice(1)]-parseFloat(r[a])-rt(e,a,"border",!1,r)-.5)),n&&(i=ee.exec(t))&&"px"!==(i[3]||"px")&&(e.style[a]=t,t=T.css(e,a)),it(0,t,n)}}}),T.cssHooks.marginLeft=Ve(y.reliableMarginLeft,function(e,t){if(t)return(parseFloat(Ue(e,"marginLeft"))||e.getBoundingClientRect().left-Ne(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),T.each({margin:"",padding:"",border:"Width"},function(r,o){T.cssHooks[r+o]={expand:function(e){for(var t=0,n={},i="string"==typeof e?e.split(" "):[e];t<4;t++)n[r+te[t]+o]=i[t]||i[t-2]||i[0];return n}},"margin"!==r&&(T.cssHooks[r+o].set=it)}),T.fn.extend({css:function(e,t){return F(this,function(e,t,n){var i,r,o={},s=0;if(Array.isArray(t)){for(i=Be(e),r=t.length;s<r;s++)o[t[s]]=T.css(e,t[s],!1,i);return o}return void 0!==n?T.style(e,t,n):T.css(e,t)},e,t,1<arguments.length)}}),((T.Tween=st).prototype={constructor:st,init:function(e,t,n,i,r,o){this.elem=e,this.prop=n,this.easing=r||T.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=i,this.unit=o||(T.cssNumber[n]?"":"px")},cur:function(){var e=st.propHooks[this.prop];return(e&&e.get?e:st.propHooks._default).get(this)},run:function(e){var t,n=st.propHooks[this.prop];return this.options.duration?this.pos=t=T.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),(n&&n.set?n:st.propHooks._default).set(this),this}}).init.prototype=st.prototype,(st.propHooks={_default:{get:function(e){return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(e=T.css(e.elem,e.prop,""))&&"auto"!==e?e:0},set:function(e){T.fx.step[e.prop]?T.fx.step[e.prop](e):1!==e.elem.nodeType||!T.cssHooks[e.prop]&&null==e.elem.style[Qe(e.prop)]?e.elem[e.prop]=e.now:T.style(e.elem,e.prop,e.now+e.unit)}}}).scrollTop=st.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},T.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},T.fx=st.prototype.init,T.fx.step={};var at,lt,ct=/^(?:toggle|show|hide)$/,ut=/queueHooks$/;function dt(){lt&&(!1===S.hidden&&C.requestAnimationFrame?C.requestAnimationFrame(dt):C.setTimeout(dt,T.fx.interval),T.fx.tick())}function pt(){return C.setTimeout(function(){at=void 0}),at=Date.now()}function ft(e,t){var n,i=0,r={height:e};for(t=t?1:0;i<4;i+=2-t)r["margin"+(n=te[i])]=r["padding"+n]=e;return t&&(r.opacity=r.width=e),r}function ht(e,t,n){for(var i,r=(vt.tweeners[t]||[]).concat(vt.tweeners["*"]),o=0,s=r.length;o<s;o++)if(i=r[o].call(n,t,e))return i}function vt(r,e,t){var n,o,i=0,s=vt.prefilters.length,a=T.Deferred().always(function(){delete l.elem}),l=function(){if(o)return!1;for(var e=at||pt(),e=Math.max(0,c.startTime+c.duration-e),t=1-(e/c.duration||0),n=0,i=c.tweens.length;n<i;n++)c.tweens[n].run(t);return a.notifyWith(r,[c,t,e]),t<1&&i?e:(i||a.notifyWith(r,[c,1,0]),a.resolveWith(r,[c]),!1)},c=a.promise({elem:r,props:T.extend({},e),opts:T.extend(!0,{specialEasing:{},easing:T.easing._default},t),originalProperties:e,originalOptions:t,startTime:at||pt(),duration:t.duration,tweens:[],createTween:function(e,t){e=T.Tween(r,c.opts,e,t,c.opts.specialEasing[e]||c.opts.easing);return c.tweens.push(e),e},stop:function(e){var t=0,n=e?c.tweens.length:0;if(o)return this;for(o=!0;t<n;t++)c.tweens[t].run(1);return e?(a.notifyWith(r,[c,1,0]),a.resolveWith(r,[c,e])):a.rejectWith(r,[c,e]),this}}),u=c.props;for(function(e,t){var n,i,r,o,s;for(n in e)if(r=t[i=U(n)],o=e[n],Array.isArray(o)&&(r=o[1],o=e[n]=o[0]),n!==i&&(e[i]=o,delete e[n]),(s=T.cssHooks[i])&&"expand"in s)for(n in o=s.expand(o),delete e[i],o)n in e||(e[n]=o[n],t[n]=r);else t[i]=r}(u,c.opts.specialEasing);i<s;i++)if(n=vt.prefilters[i].call(c,r,u,c.opts))return b(n.stop)&&(T._queueHooks(c.elem,c.opts.queue).stop=n.stop.bind(n)),n;return T.map(u,ht,c),b(c.opts.start)&&c.opts.start.call(r,c),c.progress(c.opts.progress).done(c.opts.done,c.opts.complete).fail(c.opts.fail).always(c.opts.always),T.fx.timer(T.extend(l,{elem:r,anim:c,queue:c.opts.queue})),c}T.Animation=T.extend(vt,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return se(n.elem,e,ee.exec(t),n),n}]},tweener:function(e,t){for(var n,i=0,r=(e=b(e)?(t=e,["*"]):e.match(L)).length;i<r;i++)n=e[i],vt.tweeners[n]=vt.tweeners[n]||[],vt.tweeners[n].unshift(t)},prefilters:[function(e,t,n){var i,r,o,s,a,l,c,u="width"in t||"height"in t,d=this,p={},f=e.style,h=e.nodeType&&oe(e),v=Y.get(e,"fxshow");for(i in n.queue||(null==(s=T._queueHooks(e,"fx")).unqueued&&(s.unqueued=0,a=s.empty.fire,s.empty.fire=function(){s.unqueued||a()}),s.unqueued++,d.always(function(){d.always(function(){s.unqueued--,T.queue(e,"fx").length||s.empty.fire()})})),t)if(r=t[i],ct.test(r)){if(delete t[i],o=o||"toggle"===r,r===(h?"hide":"show")){if("show"!==r||!v||void 0===v[i])continue;h=!0}p[i]=v&&v[i]||T.style(e,i)}if((l=!T.isEmptyObject(t))||!T.isEmptyObject(p))for(i in u&&1===e.nodeType&&(n.overflow=[f.overflow,f.overflowX,f.overflowY],null==(c=v&&v.display)&&(c=Y.get(e,"display")),"none"===(u=T.css(e,"display"))&&(c?u=c:(le([e],!0),c=e.style.display||c,u=T.css(e,"display"),le([e]))),("inline"===u||"inline-block"===u&&null!=c)&&"none"===T.css(e,"float")&&(l||(d.done(function(){f.display=c}),null==c&&(u=f.display,c="none"===u?"":u)),f.display="inline-block")),n.overflow&&(f.overflow="hidden",d.always(function(){f.overflow=n.overflow[0],f.overflowX=n.overflow[1],f.overflowY=n.overflow[2]})),l=!1,p)l||(v?"hidden"in v&&(h=v.hidden):v=Y.access(e,"fxshow",{display:c}),o&&(v.hidden=!h),h&&le([e],!0),d.done(function(){for(i in h||le([e]),Y.remove(e,"fxshow"),p)T.style(e,i,p[i])})),l=ht(h?v[i]:0,i,d),i in v||(v[i]=l.start,h&&(l.end=l.start,l.start=0))}],prefilter:function(e,t){t?vt.prefilters.unshift(e):vt.prefilters.push(e)}}),T.speed=function(e,t,n){var i=e&&"object"==_typeof(e)?T.extend({},e):{complete:n||!n&&t||b(e)&&e,duration:e,easing:n&&t||t&&!b(t)&&t};return T.fx.off?i.duration=0:"number"!=typeof i.duration&&(i.duration in T.fx.speeds?i.duration=T.fx.speeds[i.duration]:i.duration=T.fx.speeds._default),null!=i.queue&&!0!==i.queue||(i.queue="fx"),i.old=i.complete,i.complete=function(){b(i.old)&&i.old.call(this),i.queue&&T.dequeue(this,i.queue)},i},T.fn.extend({fadeTo:function(e,t,n,i){return this.filter(oe).css("opacity",0).show().end().animate({opacity:t},e,n,i)},animate:function(t,e,n,i){var r=T.isEmptyObject(t),o=T.speed(e,n,i),i=function(){var e=vt(this,T.extend({},t),o);(r||Y.get(this,"finish"))&&e.stop(!0)};return i.finish=i,r||!1===o.queue?this.each(i):this.queue(o.queue,i)},stop:function(r,e,o){function s(e){var t=e.stop;delete e.stop,t(o)}return"string"!=typeof r&&(o=e,e=r,r=void 0),e&&this.queue(r||"fx",[]),this.each(function(){var e=!0,t=null!=r&&r+"queueHooks",n=T.timers,i=Y.get(this);if(t)i[t]&&i[t].stop&&s(i[t]);else for(t in i)i[t]&&i[t].stop&&ut.test(t)&&s(i[t]);for(t=n.length;t--;)n[t].elem!==this||null!=r&&n[t].queue!==r||(n[t].anim.stop(o),e=!1,n.splice(t,1));!e&&o||T.dequeue(this,r)})},finish:function(s){return!1!==s&&(s=s||"fx"),this.each(function(){var e,t=Y.get(this),n=t[s+"queue"],i=t[s+"queueHooks"],r=T.timers,o=n?n.length:0;for(t.finish=!0,T.queue(this,s,[]),i&&i.stop&&i.stop.call(this,!0),e=r.length;e--;)r[e].elem===this&&r[e].queue===s&&(r[e].anim.stop(!0),r.splice(e,1));for(e=0;e<o;e++)n[e]&&n[e].finish&&n[e].finish.call(this);delete t.finish})}}),T.each(["toggle","show","hide"],function(e,i){var r=T.fn[i];T.fn[i]=function(e,t,n){return null==e||"boolean"==typeof e?r.apply(this,arguments):this.animate(ft(i,!0),e,t,n)}}),T.each({slideDown:ft("show"),slideUp:ft("hide"),slideToggle:ft("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,i){T.fn[e]=function(e,t,n){return this.animate(i,e,t,n)}}),T.timers=[],T.fx.tick=function(){var e,t=0,n=T.timers;for(at=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||T.fx.stop(),at=void 0},T.fx.timer=function(e){T.timers.push(e),T.fx.start()},T.fx.interval=13,T.fx.start=function(){lt||(lt=!0,dt())},T.fx.stop=function(){lt=null},T.fx.speeds={slow:600,fast:200,_default:400},T.fn.delay=function(i,e){return i=T.fx&&T.fx.speeds[i]||i,e=e||"fx",this.queue(e,function(e,t){var n=C.setTimeout(e,i);t.stop=function(){C.clearTimeout(n)}})},pe=S.createElement("input"),Z=S.createElement("select").appendChild(S.createElement("option")),pe.type="checkbox",y.checkOn=""!==pe.value,y.optSelected=Z.selected,(pe=S.createElement("input")).value="t",pe.type="radio",y.radioValue="t"===pe.value;var mt,gt=T.expr.attrHandle;T.fn.extend({attr:function(e,t){return F(this,T.attr,e,t,1<arguments.length)},removeAttr:function(e){return this.each(function(){T.removeAttr(this,e)})}}),T.extend({attr:function(e,t,n){var i,r,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return void 0===e.getAttribute?T.prop(e,t,n):(1===o&&T.isXMLDoc(e)||(r=T.attrHooks[t.toLowerCase()]||(T.expr.match.bool.test(t)?mt:void 0)),void 0!==n?null===n?void T.removeAttr(e,t):r&&"set"in r&&void 0!==(i=r.set(e,n,t))?i:(e.setAttribute(t,n+""),n):!(r&&"get"in r&&null!==(i=r.get(e,t)))&&null==(i=T.find.attr(e,t))?void 0:i)},attrHooks:{type:{set:function(e,t){if(!y.radioValue&&"radio"===t&&_(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,i=0,r=t&&t.match(L);if(r&&1===e.nodeType)for(;n=r[i++];)e.removeAttribute(n)}}),mt={set:function(e,t,n){return!1===t?T.removeAttr(e,n):e.setAttribute(n,n),n}},T.each(T.expr.match.bool.source.match(/\w+/g),function(e,t){var s=gt[t]||T.find.attr;gt[t]=function(e,t,n){var i,r,o=t.toLowerCase();return n||(r=gt[o],gt[o]=i,i=null!=s(e,t,n)?o:null,gt[o]=r),i}});var yt=/^(?:input|select|textarea|button)$/i,bt=/^(?:a|area)$/i;function wt(e){return(e.match(L)||[]).join(" ")}function xt(e){return e.getAttribute&&e.getAttribute("class")||""}function kt(e){return Array.isArray(e)?e:"string"==typeof e&&e.match(L)||[]}T.fn.extend({prop:function(e,t){return F(this,T.prop,e,t,1<arguments.length)},removeProp:function(e){return this.each(function(){delete this[T.propFix[e]||e]})}}),T.extend({prop:function(e,t,n){var i,r,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&T.isXMLDoc(e)||(t=T.propFix[t]||t,r=T.propHooks[t]),void 0!==n?r&&"set"in r&&void 0!==(i=r.set(e,n,t))?i:e[t]=n:r&&"get"in r&&null!==(i=r.get(e,t))?i:e[t]},propHooks:{tabIndex:{get:function(e){var t=T.find.attr(e,"tabindex");return t?parseInt(t,10):yt.test(e.nodeName)||bt.test(e.nodeName)&&e.href?0:-1}}},propFix:{for:"htmlFor",class:"className"}}),y.optSelected||(T.propHooks.selected={get:function(e){e=e.parentNode;return e&&e.parentNode&&e.parentNode.selectedIndex,null},set:function(e){e=e.parentNode;e&&(e.selectedIndex,e.parentNode&&e.parentNode.selectedIndex)}}),T.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){T.propFix[this.toLowerCase()]=this}),T.fn.extend({addClass:function(t){var e,n,i,r,o,s,a=0;if(b(t))return this.each(function(e){T(this).addClass(t.call(this,e,xt(this)))});if((e=kt(t)).length)for(;n=this[a++];)if(s=xt(n),i=1===n.nodeType&&" "+wt(s)+" "){for(o=0;r=e[o++];)i.indexOf(" "+r+" ")<0&&(i+=r+" ");s!==(s=wt(i))&&n.setAttribute("class",s)}return this},removeClass:function(t){var e,n,i,r,o,s,a=0;if(b(t))return this.each(function(e){T(this).removeClass(t.call(this,e,xt(this)))});if(!arguments.length)return this.attr("class","");if((e=kt(t)).length)for(;n=this[a++];)if(s=xt(n),i=1===n.nodeType&&" "+wt(s)+" "){for(o=0;r=e[o++];)for(;-1<i.indexOf(" "+r+" ");)i=i.replace(" "+r+" "," ");s!==(s=wt(i))&&n.setAttribute("class",s)}return this},toggleClass:function(r,t){var o=_typeof(r),s="string"===o||Array.isArray(r);return"boolean"==typeof t&&s?t?this.addClass(r):this.removeClass(r):b(r)?this.each(function(e){T(this).toggleClass(r.call(this,e,xt(this),t),t)}):this.each(function(){var e,t,n,i;if(s)for(t=0,n=T(this),i=kt(r);e=i[t++];)n.hasClass(e)?n.removeClass(e):n.addClass(e);else void 0!==r&&"boolean"!==o||((e=xt(this))&&Y.set(this,"__className__",e),this.setAttribute&&this.setAttribute("class",!e&&!1!==r&&Y.get(this,"__className__")||""))})},hasClass:function(e){for(var t,n=0,i=" "+e+" ";t=this[n++];)if(1===t.nodeType&&-1<(" "+wt(xt(t))+" ").indexOf(i))return!0;return!1}});var Ct=/\r/g;T.fn.extend({val:function(t){var n,e,i,r=this[0];return arguments.length?(i=b(t),this.each(function(e){1===this.nodeType&&(null==(e=i?t.call(this,e,T(this).val()):t)?e="":"number"==typeof e?e+="":Array.isArray(e)&&(e=T.map(e,function(e){return null==e?"":e+""})),(n=T.valHooks[this.type]||T.valHooks[this.nodeName.toLowerCase()])&&"set"in n&&void 0!==n.set(this,e,"value")||(this.value=e))})):r?(n=T.valHooks[r.type]||T.valHooks[r.nodeName.toLowerCase()])&&"get"in n&&void 0!==(e=n.get(r,"value"))?e:"string"==typeof(e=r.value)?e.replace(Ct,""):null==e?"":e:void 0}}),T.extend({valHooks:{option:{get:function(e){var t=T.find.attr(e,"value");return null!=t?t:wt(T.text(e))}},select:{get:function(e){for(var t,n=e.options,i=e.selectedIndex,r="select-one"===e.type,o=r?null:[],s=r?i+1:n.length,a=i<0?s:r?i:0;a<s;a++)if(((t=n[a]).selected||a===i)&&!t.disabled&&(!t.parentNode.disabled||!_(t.parentNode,"optgroup"))){if(t=T(t).val(),r)return t;o.push(t)}return o},set:function(e,t){for(var n,i,r=e.options,o=T.makeArray(t),s=r.length;s--;)((i=r[s]).selected=-1<T.inArray(T.valHooks.option.get(i),o))&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),T.each(["radio","checkbox"],function(){T.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=-1<T.inArray(T(e).val(),t)}},y.checkOn||(T.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),y.focusin="onfocusin"in C;function St(e){e.stopPropagation()}var Tt=/^(?:focusinfocus|focusoutblur)$/;T.extend(T.event,{trigger:function(e,t,n,i){var r,o,s,a,l,c,u,d=[n||S],p=g.call(e,"type")?e.type:e,f=g.call(e,"namespace")?e.namespace.split("."):[],h=u=o=n=n||S;if(3!==n.nodeType&&8!==n.nodeType&&!Tt.test(p+T.event.triggered)&&(-1<p.indexOf(".")&&(p=(f=p.split(".")).shift(),f.sort()),a=p.indexOf(":")<0&&"on"+p,(e=e[T.expando]?e:new T.Event(p,"object"==_typeof(e)&&e)).isTrigger=i?2:3,e.namespace=f.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+f.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=n),t=null==t?[e]:T.makeArray(t,[e]),c=T.event.special[p]||{},i||!c.trigger||!1!==c.trigger.apply(n,t))){if(!i&&!c.noBubble&&!v(n)){for(s=c.delegateType||p,Tt.test(s+p)||(h=h.parentNode);h;h=h.parentNode)d.push(h),o=h;o===(n.ownerDocument||S)&&d.push(o.defaultView||o.parentWindow||C)}for(r=0;(h=d[r++])&&!e.isPropagationStopped();)u=h,e.type=1<r?s:c.bindType||p,(l=(Y.get(h,"events")||Object.create(null))[e.type]&&Y.get(h,"handle"))&&l.apply(h,t),(l=a&&h[a])&&l.apply&&V(h)&&(e.result=l.apply(h,t),!1===e.result&&e.preventDefault());return e.type=p,i||e.isDefaultPrevented()||c._default&&!1!==c._default.apply(d.pop(),t)||!V(n)||a&&b(n[p])&&!v(n)&&((o=n[a])&&(n[a]=null),T.event.triggered=p,e.isPropagationStopped()&&u.addEventListener(p,St),n[p](),e.isPropagationStopped()&&u.removeEventListener(p,St),T.event.triggered=void 0,o&&(n[a]=o)),e.result}},simulate:function(e,t,n){e=T.extend(new T.Event,n,{type:e,isSimulated:!0});T.event.trigger(e,null,t)}}),T.fn.extend({trigger:function(e,t){return this.each(function(){T.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return T.event.trigger(e,t,n,!0)}}),y.focusin||T.each({focus:"focusin",blur:"focusout"},function(n,i){function r(e){T.event.simulate(i,e.target,T.event.fix(e))}T.event.special[i]={setup:function(){var e=this.ownerDocument||this.document||this,t=Y.access(e,i);t||e.addEventListener(n,r,!0),Y.access(e,i,(t||0)+1)},teardown:function(){var e=this.ownerDocument||this.document||this,t=Y.access(e,i)-1;t?Y.access(e,i,t):(e.removeEventListener(n,r,!0),Y.remove(e,i))}}});var _t=C.location,$t={guid:Date.now()},At=/\?/;T.parseXML=function(e){var t,n;if(!e||"string"!=typeof e)return null;try{t=(new C.DOMParser).parseFromString(e,"text/xml")}catch(e){}return n=t&&t.getElementsByTagName("parsererror")[0],t&&!n||T.error("Invalid XML: "+(n?T.map(n.childNodes,function(e){return e.textContent}).join("\n"):e)),t};var Ot=/\[\]$/,Et=/\r?\n/g,jt=/^(?:submit|button|image|reset|file)$/i,Dt=/^(?:input|select|textarea|keygen)/i;T.param=function(e,t){function n(e,t){t=b(t)?t():t,r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==t?"":t)}var i,r=[];if(null==e)return"";if(Array.isArray(e)||e.jquery&&!T.isPlainObject(e))T.each(e,function(){n(this.name,this.value)});else for(i in e)!function n(i,e,r,o){if(Array.isArray(e))T.each(e,function(e,t){r||Ot.test(i)?o(i,t):n(i+"["+("object"==_typeof(t)&&null!=t?e:"")+"]",t,r,o)});else if(r||"object"!==h(e))o(i,e);else for(var t in e)n(i+"["+t+"]",e[t],r,o)}(i,e[i],t,n);return r.join("&")},T.fn.extend({serialize:function(){return T.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=T.prop(this,"elements");return e?T.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!T(this).is(":disabled")&&Dt.test(this.nodeName)&&!jt.test(e)&&(this.checked||!ce.test(e))}).map(function(e,t){var n=T(this).val();return null==n?null:Array.isArray(n)?T.map(n,function(e){return{name:t.name,value:e.replace(Et,"\r\n")}}):{name:t.name,value:n.replace(Et,"\r\n")}}).get()}});var Nt=/%20/g,Lt=/#.*$/,Pt=/([?&])_=[^&]*/,Mt=/^(.*?):[ \t]*([^\r\n]*)$/gm,Rt=/^(?:GET|HEAD)$/,It=/^\/\//,Ht={},qt={},Ft="*/".concat("*"),zt=S.createElement("a");function Bt(o){return function(e,t){"string"!=typeof e&&(t=e,e="*");var n,i=0,r=e.toLowerCase().match(L)||[];if(b(t))for(;n=r[i++];)"+"===n[0]?(n=n.slice(1)||"*",(o[n]=o[n]||[]).unshift(t)):(o[n]=o[n]||[]).push(t)}}function Wt(t,i,r,o){var s={},a=t===qt;function l(e){var n;return s[e]=!0,T.each(t[e]||[],function(e,t){t=t(i,r,o);return"string"!=typeof t||a||s[t]?a?!(n=t):void 0:(i.dataTypes.unshift(t),l(t),!1)}),n}return l(i.dataTypes[0])||!s["*"]&&l("*")}function Ut(e,t){var n,i,r=T.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((r[n]?e:i=i||{})[n]=t[n]);return i&&T.extend(!0,e,i),e}zt.href=_t.href,T.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:_t.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(_t.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Ft,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":T.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?Ut(Ut(e,T.ajaxSettings),t):Ut(T.ajaxSettings,e)},ajaxPrefilter:Bt(Ht),ajaxTransport:Bt(qt),ajax:function(e,t){"object"==_typeof(e)&&(t=e,e=void 0),t=t||{};var l,c,u,n,d,i,p,f,r,o,h=T.ajaxSetup({},t),v=h.context||h,m=h.context&&(v.nodeType||v.jquery)?T(v):T.event,g=T.Deferred(),y=T.Callbacks("once memory"),b=h.statusCode||{},s={},a={},w="canceled",x={readyState:0,getResponseHeader:function(e){var t;if(p){if(!n)for(n={};t=Mt.exec(u);)n[t[1].toLowerCase()+" "]=(n[t[1].toLowerCase()+" "]||[]).concat(t[2]);t=n[e.toLowerCase()+" "]}return null==t?null:t.join(", ")},getAllResponseHeaders:function(){return p?u:null},setRequestHeader:function(e,t){return null==p&&(e=a[e.toLowerCase()]=a[e.toLowerCase()]||e,s[e]=t),this},overrideMimeType:function(e){return null==p&&(h.mimeType=e),this},statusCode:function(e){if(e)if(p)x.always(e[x.status]);else for(var t in e)b[t]=[b[t],e[t]];return this},abort:function(e){e=e||w;return l&&l.abort(e),k(0,e),this}};if(g.promise(x),h.url=((e||h.url||_t.href)+"").replace(It,_t.protocol+"//"),h.type=t.method||t.type||h.method||h.type,h.dataTypes=(h.dataType||"*").toLowerCase().match(L)||[""],null==h.crossDomain){i=S.createElement("a");try{i.href=h.url,i.href=i.href,h.crossDomain=zt.protocol+"//"+zt.host!=i.protocol+"//"+i.host}catch(e){h.crossDomain=!0}}if(h.data&&h.processData&&"string"!=typeof h.data&&(h.data=T.param(h.data,h.traditional)),Wt(Ht,h,t,x),p)return x;for(r in(f=T.event&&h.global)&&0==T.active++&&T.event.trigger("ajaxStart"),h.type=h.type.toUpperCase(),h.hasContent=!Rt.test(h.type),c=h.url.replace(Lt,""),h.hasContent?h.data&&h.processData&&0===(h.contentType||"").indexOf("application/x-www-form-urlencoded")&&(h.data=h.data.replace(Nt,"+")):(o=h.url.slice(c.length),h.data&&(h.processData||"string"==typeof h.data)&&(c+=(At.test(c)?"&":"?")+h.data,delete h.data),!1===h.cache&&(c=c.replace(Pt,"$1"),o=(At.test(c)?"&":"?")+"_="+$t.guid+++o),h.url=c+o),h.ifModified&&(T.lastModified[c]&&x.setRequestHeader("If-Modified-Since",T.lastModified[c]),T.etag[c]&&x.setRequestHeader("If-None-Match",T.etag[c])),(h.data&&h.hasContent&&!1!==h.contentType||t.contentType)&&x.setRequestHeader("Content-Type",h.contentType),x.setRequestHeader("Accept",h.dataTypes[0]&&h.accepts[h.dataTypes[0]]?h.accepts[h.dataTypes[0]]+("*"!==h.dataTypes[0]?", "+Ft+"; q=0.01":""):h.accepts["*"]),h.headers)x.setRequestHeader(r,h.headers[r]);if(h.beforeSend&&(!1===h.beforeSend.call(v,x,h)||p))return x.abort();if(w="abort",y.add(h.complete),x.done(h.success),x.fail(h.error),l=Wt(qt,h,t,x)){if(x.readyState=1,f&&m.trigger("ajaxSend",[x,h]),p)return x;h.async&&0<h.timeout&&(d=C.setTimeout(function(){x.abort("timeout")},h.timeout));try{p=!1,l.send(s,k)}catch(e){if(p)throw e;k(-1,e)}}else k(-1,"No Transport");function k(e,t,n,i){var r,o,s,a=t;p||(p=!0,d&&C.clearTimeout(d),l=void 0,u=i||"",x.readyState=0<e?4:0,i=200<=e&&e<300||304===e,n&&(s=function(e,t,n){for(var i,r,o,s,a=e.contents,l=e.dataTypes;"*"===l[0];)l.shift(),void 0===i&&(i=e.mimeType||t.getResponseHeader("Content-Type"));if(i)for(r in a)if(a[r]&&a[r].test(i)){l.unshift(r);break}if(l[0]in n)o=l[0];else{for(r in n){if(!l[0]||e.converters[r+" "+l[0]]){o=r;break}s=s||r}o=o||s}if(o)return o!==l[0]&&l.unshift(o),n[o]}(h,x,n)),!i&&-1<T.inArray("script",h.dataTypes)&&T.inArray("json",h.dataTypes)<0&&(h.converters["text script"]=function(){}),s=function(e,t,n,i){var r,o,s,a,l,c={},u=e.dataTypes.slice();if(u[1])for(s in e.converters)c[s.toLowerCase()]=e.converters[s];for(o=u.shift();o;)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!l&&i&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),l=o,o=u.shift())if("*"===o)o=l;else if("*"!==l&&l!==o){if(!(s=c[l+" "+o]||c["* "+o]))for(r in c)if((a=r.split(" "))[1]===o&&(s=c[l+" "+a[0]]||c["* "+a[0]])){!0===s?s=c[r]:!0!==c[r]&&(o=a[0],u.unshift(a[1]));break}if(!0!==s)if(s&&e.throws)t=s(t);else try{t=s(t)}catch(e){return{state:"parsererror",error:s?e:"No conversion from "+l+" to "+o}}}return{state:"success",data:t}}(h,s,x,i),i?(h.ifModified&&((n=x.getResponseHeader("Last-Modified"))&&(T.lastModified[c]=n),(n=x.getResponseHeader("etag"))&&(T.etag[c]=n)),204===e||"HEAD"===h.type?a="nocontent":304===e?a="notmodified":(a=s.state,r=s.data,i=!(o=s.error))):(o=a,!e&&a||(a="error",e<0&&(e=0))),x.status=e,x.statusText=(t||a)+"",i?g.resolveWith(v,[r,a,x]):g.rejectWith(v,[x,a,o]),x.statusCode(b),b=void 0,f&&m.trigger(i?"ajaxSuccess":"ajaxError",[x,h,i?r:o]),y.fireWith(v,[x,a]),f&&(m.trigger("ajaxComplete",[x,h]),--T.active||T.event.trigger("ajaxStop")))}return x},getJSON:function(e,t,n){return T.get(e,t,n,"json")},getScript:function(e,t){return T.get(e,void 0,t,"script")}}),T.each(["get","post"],function(e,r){T[r]=function(e,t,n,i){return b(t)&&(i=i||n,n=t,t=void 0),T.ajax(T.extend({url:e,type:r,dataType:i,data:t,success:n},T.isPlainObject(e)&&e))}}),T.ajaxPrefilter(function(e){for(var t in e.headers)"content-type"===t.toLowerCase()&&(e.contentType=e.headers[t]||"")}),T._evalUrl=function(e,t,n){return T.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(e){T.globalEval(e,t,n)}})},T.fn.extend({wrapAll:function(e){return this[0]&&(b(e)&&(e=e.call(this[0])),e=T(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&e.insertBefore(this[0]),e.map(function(){for(var e=this;e.firstElementChild;)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(n){return b(n)?this.each(function(e){T(this).wrapInner(n.call(this,e))}):this.each(function(){var e=T(this),t=e.contents();t.length?t.wrapAll(n):e.append(n)})},wrap:function(t){var n=b(t);return this.each(function(e){T(this).wrapAll(n?t.call(this,e):t)})},unwrap:function(e){return this.parent(e).not("body").each(function(){T(this).replaceWith(this.childNodes)}),this}}),T.expr.pseudos.hidden=function(e){return!T.expr.pseudos.visible(e)},T.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},T.ajaxSettings.xhr=function(){try{return new C.XMLHttpRequest}catch(e){}};var Vt={0:200,1223:204},Xt=T.ajaxSettings.xhr();y.cors=!!Xt&&"withCredentials"in Xt,y.ajax=Xt=!!Xt,T.ajaxTransport(function(r){var o,s;if(y.cors||Xt&&!r.crossDomain)return{send:function(e,t){var n,i=r.xhr();if(i.open(r.type,r.url,r.async,r.username,r.password),r.xhrFields)for(n in r.xhrFields)i[n]=r.xhrFields[n];for(n in r.mimeType&&i.overrideMimeType&&i.overrideMimeType(r.mimeType),r.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest"),e)i.setRequestHeader(n,e[n]);o=function(e){return function(){o&&(o=s=i.onload=i.onerror=i.onabort=i.ontimeout=i.onreadystatechange=null,"abort"===e?i.abort():"error"===e?"number"!=typeof i.status?t(0,"error"):t(i.status,i.statusText):t(Vt[i.status]||i.status,i.statusText,"text"!==(i.responseType||"text")||"string"!=typeof i.responseText?{binary:i.response}:{text:i.responseText},i.getAllResponseHeaders()))}},i.onload=o(),s=i.onerror=i.ontimeout=o("error"),void 0!==i.onabort?i.onabort=s:i.onreadystatechange=function(){4===i.readyState&&C.setTimeout(function(){o&&s()})},o=o("abort");try{i.send(r.hasContent&&r.data||null)}catch(e){if(o)throw e}},abort:function(){o&&o()}}}),T.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),T.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return T.globalEval(e),e}}}),T.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),T.ajaxTransport("script",function(n){var i,r;if(n.crossDomain||n.scriptAttrs)return{send:function(e,t){i=T("<script>").attr(n.scriptAttrs||{}).prop({charset:n.scriptCharset,src:n.url}).on("load error",r=function(e){i.remove(),r=null,e&&t("error"===e.type?404:200,e.type)}),S.head.appendChild(i[0])},abort:function(){r&&r()}}});var Yt=[],Gt=/(=)\?(?=&|$)|\?\?/;T.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Yt.pop()||T.expando+"_"+$t.guid++;return this[e]=!0,e}}),T.ajaxPrefilter("json jsonp",function(e,t,n){var i,r,o,s=!1!==e.jsonp&&(Gt.test(e.url)?"url":"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&Gt.test(e.data)&&"data");if(s||"jsonp"===e.dataTypes[0])return i=e.jsonpCallback=b(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,s?e[s]=e[s].replace(Gt,"$1"+i):!1!==e.jsonp&&(e.url+=(At.test(e.url)?"&":"?")+e.jsonp+"="+i),e.converters["script json"]=function(){return o||T.error(i+" was not called"),o[0]},e.dataTypes[0]="json",r=C[i],C[i]=function(){o=arguments},n.always(function(){void 0===r?T(C).removeProp(i):C[i]=r,e[i]&&(e.jsonpCallback=t.jsonpCallback,Yt.push(i)),o&&b(r)&&r(o[0]),o=r=void 0}),"script"}),y.createHTMLDocument=((pe=S.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===pe.childNodes.length),T.parseHTML=function(e,t,n){return"string"!=typeof e?[]:("boolean"==typeof t&&(n=t,t=!1),t||(y.createHTMLDocument?((i=(t=S.implementation.createHTMLDocument("")).createElement("base")).href=S.location.href,t.head.appendChild(i)):t=S),i=!n&&[],(n=$.exec(e))?[t.createElement(n[1])]:(n=ge([e],t,i),i&&i.length&&T(i).remove(),T.merge([],n.childNodes)));var i},T.fn.load=function(e,t,n){var i,r,o,s=this,a=e.indexOf(" ");return-1<a&&(i=wt(e.slice(a)),e=e.slice(0,a)),b(t)?(n=t,t=void 0):t&&"object"==_typeof(t)&&(r="POST"),0<s.length&&T.ajax({url:e,type:r||"GET",dataType:"html",data:t}).done(function(e){o=arguments,s.html(i?T("<div>").append(T.parseHTML(e)).find(i):e)}).always(n&&function(e,t){s.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},T.expr.pseudos.animated=function(t){return T.grep(T.timers,function(e){return t===e.elem}).length},T.offset={setOffset:function(e,t,n){var i,r,o,s,a=T.css(e,"position"),l=T(e),c={};"static"===a&&(e.style.position="relative"),o=l.offset(),i=T.css(e,"top"),s=T.css(e,"left"),s=("absolute"===a||"fixed"===a)&&-1<(i+s).indexOf("auto")?(r=(a=l.position()).top,a.left):(r=parseFloat(i)||0,parseFloat(s)||0),null!=(t=b(t)?t.call(e,n,T.extend({},o)):t).top&&(c.top=t.top-o.top+r),null!=t.left&&(c.left=t.left-o.left+s),"using"in t?t.using.call(e,c):l.css(c)}},T.fn.extend({offset:function(t){if(arguments.length)return void 0===t?this:this.each(function(e){T.offset.setOffset(this,t,e)});var e,n=this[0];return n?n.getClientRects().length?(e=n.getBoundingClientRect(),n=n.ownerDocument.defaultView,{top:e.top+n.pageYOffset,left:e.left+n.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var e,t,n,i=this[0],r={top:0,left:0};if("fixed"===T.css(i,"position"))t=i.getBoundingClientRect();else{for(t=this.offset(),n=i.ownerDocument,e=i.offsetParent||n.documentElement;e&&(e===n.body||e===n.documentElement)&&"static"===T.css(e,"position");)e=e.parentNode;e&&e!==i&&1===e.nodeType&&((r=T(e).offset()).top+=T.css(e,"borderTopWidth",!0),r.left+=T.css(e,"borderLeftWidth",!0))}return{top:t.top-r.top-T.css(i,"marginTop",!0),left:t.left-r.left-T.css(i,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var e=this.offsetParent;e&&"static"===T.css(e,"position");)e=e.offsetParent;return e||ne})}}),T.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,r){var o="pageYOffset"===r;T.fn[t]=function(e){return F(this,function(e,t,n){var i;return v(e)?i=e:9===e.nodeType&&(i=e.defaultView),void 0===n?i?i[r]:e[t]:void(i?i.scrollTo(o?i.pageXOffset:n,o?n:i.pageYOffset):e[t]=n)},t,e,arguments.length)}}),T.each(["top","left"],function(e,n){T.cssHooks[n]=Ve(y.pixelPosition,function(e,t){if(t)return t=Ue(e,n),ze.test(t)?T(e).position()[n]+"px":t})}),T.each({Height:"height",Width:"width"},function(s,a){T.each({padding:"inner"+s,content:a,"":"outer"+s},function(i,o){T.fn[o]=function(e,t){var n=arguments.length&&(i||"boolean"!=typeof e),r=i||(!0===e||!0===t?"margin":"border");return F(this,function(e,t,n){var i;return v(e)?0===o.indexOf("outer")?e["inner"+s]:e.document.documentElement["client"+s]:9===e.nodeType?(i=e.documentElement,Math.max(e.body["scroll"+s],i["scroll"+s],e.body["offset"+s],i["offset"+s],i["client"+s])):void 0===n?T.css(e,t,r):T.style(e,t,n,r)},a,n?e:void 0,n)}})}),T.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){T.fn[t]=function(e){return this.on(t,e)}}),T.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,i){return this.on(t,e,n,i)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)},hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),T.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,n){T.fn[n]=function(e,t){return 0<arguments.length?this.on(n,null,e,t):this.trigger(n)}});var Jt=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;T.proxy=function(e,t){var n,i;if("string"==typeof t&&(i=e[t],t=e,e=i),b(e))return n=a.call(arguments,2),(i=function(){return e.apply(t||this,n.concat(a.call(arguments)))}).guid=e.guid=e.guid||T.guid++,i},T.holdReady=function(e){e?T.readyWait++:T.ready(!0)},T.isArray=Array.isArray,T.parseJSON=JSON.parse,T.nodeName=_,T.isFunction=b,T.isWindow=v,T.camelCase=U,T.type=h,T.now=Date.now,T.isNumeric=function(e){var t=T.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},T.trim=function(e){return null==e?"":(e+"").replace(Jt,"")},"function"==typeof define&&define.amd&&define("jquery",[],function(){return T});var Kt=C.jQuery,Qt=C.$;return T.noConflict=function(e){return C.$===T&&(C.$=Qt),e&&C.jQuery===T&&(C.jQuery=Kt),T},void 0===e&&(C.jQuery=C.$=T),T}),function(e){"function"==typeof define&&define.amd?define(["jquery"],e):"undefined"!=typeof exports?module.exports=e(require("jquery")):e(jQuery)}(function(c){var i,o=window.Slick||{};i=0,(o=function(e,t){var n=this;n.defaults={accessibility:!0,adaptiveHeight:!1,appendArrows:c(e),appendDots:c(e),arrows:!0,asNavFor:null,prevArrow:'<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',nextArrow:'<button class="slick-next" aria-label="Next" type="button">Next</button>',autoplay:!1,autoplaySpeed:3e3,centerMode:!1,centerPadding:"50px",cssEase:"ease",customPaging:function(e,t){return c('<button type="button" />').text(t+1)},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,focusOnChange:!1,infinite:!0,initialSlide:0,lazyLoad:"ondemand",mobileFirst:!1,pauseOnHover:!0,pauseOnFocus:!0,pauseOnDotsHover:!1,respondTo:"window",responsive:null,rows:1,rtl:!1,slide:"",slidesPerRow:1,slidesToShow:1,slidesToScroll:1,speed:500,swipe:!0,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,useTransform:!0,variableWidth:!1,vertical:!1,verticalSwiping:!1,waitForAnimate:!0,zIndex:1e3},n.initials={animating:!1,dragging:!1,autoPlayTimer:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,$dots:null,listWidth:null,listHeight:null,loadIndex:0,$nextArrow:null,$prevArrow:null,scrolling:!1,slideCount:null,slideWidth:null,$slideTrack:null,$slides:null,sliding:!1,slideOffset:0,swipeLeft:null,swiping:!1,$list:null,touchObject:{},transformsEnabled:!1,unslicked:!1},c.extend(n,n.initials),n.activeBreakpoint=null,n.animType=null,n.animProp=null,n.breakpoints=[],n.breakpointSettings=[],n.cssTransitions=!1,n.focussed=!1,n.interrupted=!1,n.hidden="hidden",n.paused=!0,n.positionProp=null,n.respondTo=null,n.rowCount=1,n.shouldClick=!0,n.$slider=c(e),n.$slidesCache=null,n.transformType=null,n.transitionType=null,n.visibilityChange="visibilitychange",n.windowWidth=0,n.windowTimer=null,e=c(e).data("slick")||{},n.options=c.extend({},n.defaults,t,e),n.currentSlide=n.options.initialSlide,n.originalSettings=n.options,void 0!==document.mozHidden?(n.hidden="mozHidden",n.visibilityChange="mozvisibilitychange"):void 0!==document.webkitHidden&&(n.hidden="webkitHidden",n.visibilityChange="webkitvisibilitychange"),n.autoPlay=c.proxy(n.autoPlay,n),n.autoPlayClear=c.proxy(n.autoPlayClear,n),n.autoPlayIterator=c.proxy(n.autoPlayIterator,n),n.changeSlide=c.proxy(n.changeSlide,n),n.clickHandler=c.proxy(n.clickHandler,n),n.selectHandler=c.proxy(n.selectHandler,n),n.setPosition=c.proxy(n.setPosition,n),n.swipeHandler=c.proxy(n.swipeHandler,n),n.dragHandler=c.proxy(n.dragHandler,n),n.keyHandler=c.proxy(n.keyHandler,n),n.instanceUid=i++,n.htmlExpr=/^(?:\s*(<[\w\W]+>)[^>]*)$/,n.registerBreakpoints(),n.init(!0)}).prototype.activateADA=function(){this.$slideTrack.find(".slick-active").attr({"aria-hidden":"false"}).find("a, input, button, select").attr({tabindex:"0"})},o.prototype.addSlide=o.prototype.slickAdd=function(e,t,n){var i=this;if("boolean"==typeof t)n=t,t=null;else if(t<0||t>=i.slideCount)return!1;i.unload(),"number"==typeof t?0===t&&0===i.$slides.length?c(e).appendTo(i.$slideTrack):n?c(e).insertBefore(i.$slides.eq(t)):c(e).insertAfter(i.$slides.eq(t)):!0===n?c(e).prependTo(i.$slideTrack):c(e).appendTo(i.$slideTrack),i.$slides=i.$slideTrack.children(this.options.slide),i.$slideTrack.children(this.options.slide).detach(),i.$slideTrack.append(i.$slides),i.$slides.each(function(e,t){c(t).attr("data-slick-index",e)}),i.$slidesCache=i.$slides,i.reinit()},o.prototype.animateHeight=function(){var e;1===this.options.slidesToShow&&!0===this.options.adaptiveHeight&&!1===this.options.vertical&&(e=this.$slides.eq(this.currentSlide).outerHeight(!0),this.$list.animate({height:e},this.options.speed))},o.prototype.animateSlide=function(e,t){var n={},i=this;i.animateHeight(),!0===i.options.rtl&&!1===i.options.vertical&&(e=-e),!1===i.transformsEnabled?!1===i.options.vertical?i.$slideTrack.animate({left:e},i.options.speed,i.options.easing,t):i.$slideTrack.animate({top:e},i.options.speed,i.options.easing,t):!1===i.cssTransitions?(!0===i.options.rtl&&(i.currentLeft=-i.currentLeft),c({animStart:i.currentLeft}).animate({animStart:e},{duration:i.options.speed,easing:i.options.easing,step:function(e){e=Math.ceil(e),!1===i.options.vertical?n[i.animType]="translate("+e+"px, 0px)":n[i.animType]="translate(0px,"+e+"px)",i.$slideTrack.css(n)},complete:function(){t&&t.call()}})):(i.applyTransition(),e=Math.ceil(e),!1===i.options.vertical?n[i.animType]="translate3d("+e+"px, 0px, 0px)":n[i.animType]="translate3d(0px,"+e+"px, 0px)",i.$slideTrack.css(n),t&&setTimeout(function(){i.disableTransition(),t.call()},i.options.speed))},o.prototype.getNavTarget=function(){var e=this.options.asNavFor;return e=e&&null!==e?c(e).not(this.$slider):e},o.prototype.asNavFor=function(t){var e=this.getNavTarget();null!==e&&"object"==_typeof(e)&&e.each(function(){var e=c(this).slick("getSlick");e.unslicked||e.slideHandler(t,!0)})},o.prototype.applyTransition=function(e){var t=this,n={};!1===t.options.fade?n[t.transitionType]=t.transformType+" "+t.options.speed+"ms "+t.options.cssEase:n[t.transitionType]="opacity "+t.options.speed+"ms "+t.options.cssEase,(!1===t.options.fade?t.$slideTrack:t.$slides.eq(e)).css(n)},o.prototype.autoPlay=function(){this.autoPlayClear(),this.slideCount>this.options.slidesToShow&&(this.autoPlayTimer=setInterval(this.autoPlayIterator,this.options.autoplaySpeed))},o.prototype.autoPlayClear=function(){this.autoPlayTimer&&clearInterval(this.autoPlayTimer)},o.prototype.autoPlayIterator=function(){var e=this,t=e.currentSlide+e.options.slidesToScroll;e.paused||e.interrupted||e.focussed||(!1===e.options.infinite&&(1===e.direction&&e.currentSlide+1===e.slideCount-1?e.direction=0:0===e.direction&&(t=e.currentSlide-e.options.slidesToScroll,e.currentSlide-1==0&&(e.direction=1))),e.slideHandler(t))},o.prototype.buildArrows=function(){var e=this;!0===e.options.arrows&&(e.$prevArrow=c(e.options.prevArrow).addClass("slick-arrow"),e.$nextArrow=c(e.options.nextArrow).addClass("slick-arrow"),e.slideCount>e.options.slidesToShow?(e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),e.htmlExpr.test(e.options.prevArrow)&&e.$prevArrow.prependTo(e.options.appendArrows),e.htmlExpr.test(e.options.nextArrow)&&e.$nextArrow.appendTo(e.options.appendArrows),!0!==e.options.infinite&&e.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true")):e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({"aria-disabled":"true",tabindex:"-1"}))},o.prototype.buildDots=function(){var e,t;if(!0===this.options.dots){for(this.$slider.addClass("slick-dotted"),t=c("<ul />").addClass(this.options.dotsClass),e=0;e<=this.getDotCount();e+=1)t.append(c("<li />").append(this.options.customPaging.call(this,this,e)));this.$dots=t.appendTo(this.options.appendDots),this.$dots.find("li").first().addClass("slick-active")}},o.prototype.buildOut=function(){var e=this;e.$slides=e.$slider.children(e.options.slide+":not(.slick-cloned)").addClass("slick-slide"),e.slideCount=e.$slides.length,e.$slides.each(function(e,t){c(t).attr("data-slick-index",e).data("originalStyling",c(t).attr("style")||"")}),e.$slider.addClass("slick-slider"),e.$slideTrack=0===e.slideCount?c('<div class="slick-track"/>').appendTo(e.$slider):e.$slides.wrapAll('<div class="slick-track"/>').parent(),e.$list=e.$slideTrack.wrap('<div class="slick-list"/>').parent(),e.$slideTrack.css("opacity",0),!0!==e.options.centerMode&&!0!==e.options.swipeToSlide||(e.options.slidesToScroll=1),c("img[data-lazy]",e.$slider).not("[src]").addClass("slick-loading"),e.setupInfinite(),e.buildArrows(),e.buildDots(),e.updateDots(),e.setSlideClasses("number"==typeof e.currentSlide?e.currentSlide:0),!0===e.options.draggable&&e.$list.addClass("draggable")},o.prototype.buildRows=function(){var e,t,n,i=this,r=document.createDocumentFragment(),o=i.$slider.children();if(1<i.options.rows){for(n=i.options.slidesPerRow*i.options.rows,t=Math.ceil(o.length/n),e=0;e<t;e++){for(var s=document.createElement("div"),a=0;a<i.options.rows;a++){for(var l=document.createElement("div"),c=0;c<i.options.slidesPerRow;c++){var u=e*n+(a*i.options.slidesPerRow+c);o.get(u)&&l.appendChild(o.get(u))}s.appendChild(l)}r.appendChild(s)}i.$slider.empty().append(r),i.$slider.children().children().children().css({width:100/i.options.slidesPerRow+"%",display:"inline-block"})}},o.prototype.checkResponsive=function(e,t){var n,i,r,o=this,s=!1,a=o.$slider.width(),l=window.innerWidth||c(window).width();if("window"===o.respondTo?r=l:"slider"===o.respondTo?r=a:"min"===o.respondTo&&(r=Math.min(l,a)),o.options.responsive&&o.options.responsive.length&&null!==o.options.responsive){for(n in i=null,o.breakpoints)o.breakpoints.hasOwnProperty(n)&&(!1===o.originalSettings.mobileFirst?r<o.breakpoints[n]&&(i=o.breakpoints[n]):r>o.breakpoints[n]&&(i=o.breakpoints[n]));null!==i?null!==o.activeBreakpoint&&i===o.activeBreakpoint&&!t||(o.activeBreakpoint=i,"unslick"===o.breakpointSettings[i]?o.unslick(i):(o.options=c.extend({},o.originalSettings,o.breakpointSettings[i]),!0===e&&(o.currentSlide=o.options.initialSlide),o.refresh(e)),s=i):null!==o.activeBreakpoint&&(o.activeBreakpoint=null,o.options=o.originalSettings,!0===e&&(o.currentSlide=o.options.initialSlide),o.refresh(e),s=i),e||!1===s||o.$slider.trigger("breakpoint",[o,s])}},o.prototype.changeSlide=function(e,t){var n,i=this,r=c(e.currentTarget);switch(r.is("a")&&e.preventDefault(),r.is("li")||(r=r.closest("li")),n=i.slideCount%i.options.slidesToScroll!=0?0:(i.slideCount-i.currentSlide)%i.options.slidesToScroll,e.data.message){case"previous":o=0==n?i.options.slidesToScroll:i.options.slidesToShow-n,i.slideCount>i.options.slidesToShow&&i.slideHandler(i.currentSlide-o,!1,t);break;case"next":o=0==n?i.options.slidesToScroll:n,i.slideCount>i.options.slidesToShow&&i.slideHandler(i.currentSlide+o,!1,t);break;case"index":var o=0===e.data.index?0:e.data.index||r.index()*i.options.slidesToScroll;i.slideHandler(i.checkNavigable(o),!1,t),r.children().trigger("focus");break;default:return}},o.prototype.checkNavigable=function(e){var t=this.getNavigableIndexes(),n=0;if(e>t[t.length-1])e=t[t.length-1];else for(var i in t){if(e<t[i]){e=n;break}n=t[i]}return e},o.prototype.cleanUpEvents=function(){var e=this;e.options.dots&&null!==e.$dots&&(c("li",e.$dots).off("click.slick",e.changeSlide).off("mouseenter.slick",c.proxy(e.interrupt,e,!0)).off("mouseleave.slick",c.proxy(e.interrupt,e,!1)),!0===e.options.accessibility&&e.$dots.off("keydown.slick",e.keyHandler)),e.$slider.off("focus.slick blur.slick"),!0===e.options.arrows&&e.slideCount>e.options.slidesToShow&&(e.$prevArrow&&e.$prevArrow.off("click.slick",e.changeSlide),e.$nextArrow&&e.$nextArrow.off("click.slick",e.changeSlide),!0===e.options.accessibility&&(e.$prevArrow&&e.$prevArrow.off("keydown.slick",e.keyHandler),e.$nextArrow&&e.$nextArrow.off("keydown.slick",e.keyHandler))),e.$list.off("touchstart.slick mousedown.slick",e.swipeHandler),e.$list.off("touchmove.slick mousemove.slick",e.swipeHandler),e.$list.off("touchend.slick mouseup.slick",e.swipeHandler),e.$list.off("touchcancel.slick mouseleave.slick",e.swipeHandler),e.$list.off("click.slick",e.clickHandler),c(document).off(e.visibilityChange,e.visibility),e.cleanUpSlideEvents(),!0===e.options.accessibility&&e.$list.off("keydown.slick",e.keyHandler),!0===e.options.focusOnSelect&&c(e.$slideTrack).children().off("click.slick",e.selectHandler),c(window).off("orientationchange.slick.slick-"+e.instanceUid,e.orientationChange),c(window).off("resize.slick.slick-"+e.instanceUid,e.resize),c("[draggable!=true]",e.$slideTrack).off("dragstart",e.preventDefault),c(window).off("load.slick.slick-"+e.instanceUid,e.setPosition)},o.prototype.cleanUpSlideEvents=function(){this.$list.off("mouseenter.slick",c.proxy(this.interrupt,this,!0)),this.$list.off("mouseleave.slick",c.proxy(this.interrupt,this,!1))},o.prototype.cleanUpRows=function(){var e;1<this.options.rows&&((e=this.$slides.children().children()).removeAttr("style"),this.$slider.empty().append(e))},o.prototype.clickHandler=function(e){!1===this.shouldClick&&(e.stopImmediatePropagation(),e.stopPropagation(),e.preventDefault())},o.prototype.destroy=function(e){var t=this;t.autoPlayClear(),t.touchObject={},t.cleanUpEvents(),c(".slick-cloned",t.$slider).detach(),t.$dots&&t.$dots.remove(),t.$prevArrow&&t.$prevArrow.length&&(t.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),t.htmlExpr.test(t.options.prevArrow)&&t.$prevArrow.remove()),t.$nextArrow&&t.$nextArrow.length&&(t.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),t.htmlExpr.test(t.options.nextArrow)&&t.$nextArrow.remove()),t.$slides&&(t.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function(){c(this).attr("style",c(this).data("originalStyling"))}),t.$slideTrack.children(this.options.slide).detach(),t.$slideTrack.detach(),t.$list.detach(),t.$slider.append(t.$slides)),t.cleanUpRows(),t.$slider.removeClass("slick-slider"),t.$slider.removeClass("slick-initialized"),t.$slider.removeClass("slick-dotted"),t.unslicked=!0,e||t.$slider.trigger("destroy",[t])},o.prototype.disableTransition=function(e){var t={};t[this.transitionType]="",(!1===this.options.fade?this.$slideTrack:this.$slides.eq(e)).css(t)},o.prototype.fadeSlide=function(e,t){var n=this;!1===n.cssTransitions?(n.$slides.eq(e).css({zIndex:n.options.zIndex}),n.$slides.eq(e).animate({opacity:1},n.options.speed,n.options.easing,t)):(n.applyTransition(e),n.$slides.eq(e).css({opacity:1,zIndex:n.options.zIndex}),t&&setTimeout(function(){n.disableTransition(e),t.call()},n.options.speed))},o.prototype.fadeSlideOut=function(e){!1===this.cssTransitions?this.$slides.eq(e).animate({opacity:0,zIndex:this.options.zIndex-2},this.options.speed,this.options.easing):(this.applyTransition(e),this.$slides.eq(e).css({opacity:0,zIndex:this.options.zIndex-2}))},o.prototype.filterSlides=o.prototype.slickFilter=function(e){null!==e&&(this.$slidesCache=this.$slides,this.unload(),this.$slideTrack.children(this.options.slide).detach(),this.$slidesCache.filter(e).appendTo(this.$slideTrack),this.reinit())},o.prototype.focusHandler=function(){var n=this;n.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick","*",function(e){e.stopImmediatePropagation();var t=c(this);setTimeout(function(){n.options.pauseOnFocus&&(n.focussed=t.is(":focus"),n.autoPlay())},0)})},o.prototype.getCurrent=o.prototype.slickCurrentSlide=function(){return this.currentSlide},o.prototype.getDotCount=function(){var e=this,t=0,n=0,i=0;if(!0===e.options.infinite)if(e.slideCount<=e.options.slidesToShow)++i;else for(;t<e.slideCount;)++i,t=n+e.options.slidesToScroll,n+=e.options.slidesToScroll<=e.options.slidesToShow?e.options.slidesToScroll:e.options.slidesToShow;else if(!0===e.options.centerMode)i=e.slideCount;else if(e.options.asNavFor)for(;t<e.slideCount;)++i,t=n+e.options.slidesToScroll,n+=e.options.slidesToScroll<=e.options.slidesToShow?e.options.slidesToScroll:e.options.slidesToShow;else i=1+Math.ceil((e.slideCount-e.options.slidesToShow)/e.options.slidesToScroll);return i-1},o.prototype.getLeft=function(e){var t,n,i=this,r=0;return i.slideOffset=0,t=i.$slides.first().outerHeight(!0),!0===i.options.infinite?(i.slideCount>i.options.slidesToShow&&(i.slideOffset=i.slideWidth*i.options.slidesToShow*-1,n=-1,!0===i.options.vertical&&!0===i.options.centerMode&&(2===i.options.slidesToShow?n=-1.5:1===i.options.slidesToShow&&(n=-2)),r=t*i.options.slidesToShow*n),i.slideCount%i.options.slidesToScroll!=0&&e+i.options.slidesToScroll>i.slideCount&&i.slideCount>i.options.slidesToShow&&(r=e>i.slideCount?(i.slideOffset=(i.options.slidesToShow-(e-i.slideCount))*i.slideWidth*-1,(i.options.slidesToShow-(e-i.slideCount))*t*-1):(i.slideOffset=i.slideCount%i.options.slidesToScroll*i.slideWidth*-1,i.slideCount%i.options.slidesToScroll*t*-1))):e+i.options.slidesToShow>i.slideCount&&(i.slideOffset=(e+i.options.slidesToShow-i.slideCount)*i.slideWidth,r=(e+i.options.slidesToShow-i.slideCount)*t),i.slideCount<=i.options.slidesToShow&&(r=i.slideOffset=0),!0===i.options.centerMode&&i.slideCount<=i.options.slidesToShow?i.slideOffset=i.slideWidth*Math.floor(i.options.slidesToShow)/2-i.slideWidth*i.slideCount/2:!0===i.options.centerMode&&!0===i.options.infinite?i.slideOffset+=i.slideWidth*Math.floor(i.options.slidesToShow/2)-i.slideWidth:!0===i.options.centerMode&&(i.slideOffset=0,i.slideOffset+=i.slideWidth*Math.floor(i.options.slidesToShow/2)),t=!1===i.options.vertical?e*i.slideWidth*-1+i.slideOffset:e*t*-1+r,!0===i.options.variableWidth&&(r=i.slideCount<=i.options.slidesToShow||!1===i.options.infinite?i.$slideTrack.children(".slick-slide").eq(e):i.$slideTrack.children(".slick-slide").eq(e+i.options.slidesToShow),t=!0===i.options.rtl?r[0]?-1*(i.$slideTrack.width()-r[0].offsetLeft-r.width()):0:r[0]?-1*r[0].offsetLeft:0,!0===i.options.centerMode&&(r=i.slideCount<=i.options.slidesToShow||!1===i.options.infinite?i.$slideTrack.children(".slick-slide").eq(e):i.$slideTrack.children(".slick-slide").eq(e+i.options.slidesToShow+1),t=!0===i.options.rtl?r[0]?-1*(i.$slideTrack.width()-r[0].offsetLeft-r.width()):0:r[0]?-1*r[0].offsetLeft:0,t+=(i.$list.width()-r.outerWidth())/2)),t},o.prototype.getOption=o.prototype.slickGetOption=function(e){return this.options[e]},o.prototype.getNavigableIndexes=function(){for(var e=this,t=0,n=0,i=[],r=!1===e.options.infinite?e.slideCount:(t=-1*e.options.slidesToScroll,n=-1*e.options.slidesToScroll,2*e.slideCount);t<r;)i.push(t),t=n+e.options.slidesToScroll,n+=e.options.slidesToScroll<=e.options.slidesToShow?e.options.slidesToScroll:e.options.slidesToShow;return i},o.prototype.getSlick=function(){return this},o.prototype.getSlideCount=function(){var n,i=this,r=!0===i.options.centerMode?i.slideWidth*Math.floor(i.options.slidesToShow/2):0;return!0===i.options.swipeToSlide?(i.$slideTrack.find(".slick-slide").each(function(e,t){if(t.offsetLeft-r+c(t).outerWidth()/2>-1*i.swipeLeft)return n=t,!1}),Math.abs(c(n).attr("data-slick-index")-i.currentSlide)||1):i.options.slidesToScroll},o.prototype.goTo=o.prototype.slickGoTo=function(e,t){this.changeSlide({data:{message:"index",index:parseInt(e)}},t)},o.prototype.init=function(e){var t=this;c(t.$slider).hasClass("slick-initialized")||(c(t.$slider).addClass("slick-initialized"),t.buildRows(),t.buildOut(),t.setProps(),t.startLoad(),t.loadSlider(),t.initializeEvents(),t.updateArrows(),t.updateDots(),t.checkResponsive(!0),t.focusHandler()),e&&t.$slider.trigger("init",[t]),!0===t.options.accessibility&&t.initADA(),t.options.autoplay&&(t.paused=!1,t.autoPlay())},o.prototype.initADA=function(){var n=this,i=Math.ceil(n.slideCount/n.options.slidesToShow),r=n.getNavigableIndexes().filter(function(e){return 0<=e&&e<n.slideCount});n.$slides.add(n.$slideTrack.find(".slick-cloned")).attr({"aria-hidden":"true",tabindex:"-1"}).find("a, input, button, select").attr({tabindex:"-1"}),null!==n.$dots&&(n.$slides.not(n.$slideTrack.find(".slick-cloned")).each(function(e){var t=r.indexOf(e);c(this).attr({role:"tabpanel",id:"slick-slide"+n.instanceUid+e,tabindex:-1}),-1!==t&&c(this).attr({"aria-describedby":"slick-slide-control"+n.instanceUid+t})}),n.$dots.attr("role","tablist").find("li").each(function(e){var t=r[e];c(this).attr({role:"presentation"}),c(this).find("button").first().attr({role:"tab",id:"slick-slide-control"+n.instanceUid+e,"aria-controls":"slick-slide"+n.instanceUid+t,"aria-label":e+1+" of "+i,"aria-selected":null,tabindex:"-1"})}).eq(n.currentSlide).find("button").attr({"aria-selected":"true",tabindex:"0"}).end());for(var e=n.currentSlide,t=e+n.options.slidesToShow;e<t;e++)n.$slides.eq(e).attr("tabindex",0);n.activateADA()},o.prototype.initArrowEvents=function(){var e=this;!0===e.options.arrows&&e.slideCount>e.options.slidesToShow&&(e.$prevArrow.off("click.slick").on("click.slick",{message:"previous"},e.changeSlide),e.$nextArrow.off("click.slick").on("click.slick",{message:"next"},e.changeSlide),!0===e.options.accessibility&&(e.$prevArrow.on("keydown.slick",e.keyHandler),e.$nextArrow.on("keydown.slick",e.keyHandler)))},o.prototype.initDotEvents=function(){var e=this;!0===e.options.dots&&(c("li",e.$dots).on("click.slick",{message:"index"},e.changeSlide),!0===e.options.accessibility&&e.$dots.on("keydown.slick",e.keyHandler)),!0===e.options.dots&&!0===e.options.pauseOnDotsHover&&c("li",e.$dots).on("mouseenter.slick",c.proxy(e.interrupt,e,!0)).on("mouseleave.slick",c.proxy(e.interrupt,e,!1))},o.prototype.initSlideEvents=function(){this.options.pauseOnHover&&(this.$list.on("mouseenter.slick",c.proxy(this.interrupt,this,!0)),this.$list.on("mouseleave.slick",c.proxy(this.interrupt,this,!1)))},o.prototype.initializeEvents=function(){var e=this;e.initArrowEvents(),e.initDotEvents(),e.initSlideEvents(),e.$list.on("touchstart.slick mousedown.slick",{action:"start"},e.swipeHandler),e.$list.on("touchmove.slick mousemove.slick",{action:"move"},e.swipeHandler),e.$list.on("touchend.slick mouseup.slick",{action:"end"},e.swipeHandler),e.$list.on("touchcancel.slick mouseleave.slick",{action:"end"},e.swipeHandler),e.$list.on("click.slick",e.clickHandler),c(document).on(e.visibilityChange,c.proxy(e.visibility,e)),!0===e.options.accessibility&&e.$list.on("keydown.slick",e.keyHandler),!0===e.options.focusOnSelect&&c(e.$slideTrack).children().on("click.slick",e.selectHandler),c(window).on("orientationchange.slick.slick-"+e.instanceUid,c.proxy(e.orientationChange,e)),c(window).on("resize.slick.slick-"+e.instanceUid,c.proxy(e.resize,e)),c("[draggable!=true]",e.$slideTrack).on("dragstart",e.preventDefault),c(window).on("load.slick.slick-"+e.instanceUid,e.setPosition),c(e.setPosition)},o.prototype.initUI=function(){!0===this.options.arrows&&this.slideCount>this.options.slidesToShow&&(this.$prevArrow.show(),this.$nextArrow.show()),!0===this.options.dots&&this.slideCount>this.options.slidesToShow&&this.$dots.show()},o.prototype.keyHandler=function(e){e.target.tagName.match("TEXTAREA|INPUT|SELECT")||(37===e.keyCode&&!0===this.options.accessibility?this.changeSlide({data:{message:!0===this.options.rtl?"next":"previous"}}):39===e.keyCode&&!0===this.options.accessibility&&this.changeSlide({data:{message:!0===this.options.rtl?"previous":"next"}}))},o.prototype.lazyLoad=function(){function e(e){c("img[data-lazy]",e).each(function(){var e=c(this),t=c(this).attr("data-lazy"),n=c(this).attr("data-srcset"),i=c(this).attr("data-sizes")||o.$slider.attr("data-sizes"),r=document.createElement("img");r.onload=function(){e.animate({opacity:0},100,function(){n&&(e.attr("srcset",n),i&&e.attr("sizes",i)),e.attr("src",t).animate({opacity:1},200,function(){e.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")}),o.$slider.trigger("lazyLoaded",[o,e,t])})},r.onerror=function(){e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),o.$slider.trigger("lazyLoadError",[o,e,t])},r.src=t})}var t,n,i,o=this;if(!0===o.options.centerMode?i=!0===o.options.infinite?(n=o.currentSlide+(o.options.slidesToShow/2+1))+o.options.slidesToShow+2:(n=Math.max(0,o.currentSlide-(o.options.slidesToShow/2+1)),o.options.slidesToShow/2+1+2+o.currentSlide):(n=o.options.infinite?o.options.slidesToShow+o.currentSlide:o.currentSlide,i=Math.ceil(n+o.options.slidesToShow),!0===o.options.fade&&(0<n&&n--,i<=o.slideCount&&i++)),t=o.$slider.find(".slick-slide").slice(n,i),"anticipated"===o.options.lazyLoad)for(var r=n-1,s=i,a=o.$slider.find(".slick-slide"),l=0;l<o.options.slidesToScroll;l++)r<0&&(r=o.slideCount-1),t=(t=t.add(a.eq(r))).add(a.eq(s)),r--,s++;e(t),o.slideCount<=o.options.slidesToShow?e(o.$slider.find(".slick-slide")):o.currentSlide>=o.slideCount-o.options.slidesToShow?e(o.$slider.find(".slick-cloned").slice(0,o.options.slidesToShow)):0===o.currentSlide&&e(o.$slider.find(".slick-cloned").slice(-1*o.options.slidesToShow))},o.prototype.loadSlider=function(){this.setPosition(),this.$slideTrack.css({opacity:1}),this.$slider.removeClass("slick-loading"),this.initUI(),"progressive"===this.options.lazyLoad&&this.progressiveLazyLoad()},o.prototype.next=o.prototype.slickNext=function(){this.changeSlide({data:{message:"next"}})},o.prototype.orientationChange=function(){this.checkResponsive(),this.setPosition()},o.prototype.pause=o.prototype.slickPause=function(){this.autoPlayClear(),this.paused=!0},o.prototype.play=o.prototype.slickPlay=function(){this.autoPlay(),this.options.autoplay=!0,this.paused=!1,this.focussed=!1,this.interrupted=!1},o.prototype.postSlide=function(e){var t=this;t.unslicked||(t.$slider.trigger("afterChange",[t,e]),t.animating=!1,t.slideCount>t.options.slidesToShow&&t.setPosition(),t.swipeLeft=null,t.options.autoplay&&t.autoPlay(),!0===t.options.accessibility&&(t.initADA(),t.options.focusOnChange&&c(t.$slides.get(t.currentSlide)).attr("tabindex",0).focus()))},o.prototype.prev=o.prototype.slickPrev=function(){this.changeSlide({data:{message:"previous"}})},o.prototype.preventDefault=function(e){e.preventDefault()},o.prototype.progressiveLazyLoad=function(e){e=e||1;var t,n,i,r,o=this,s=c("img[data-lazy]",o.$slider);s.length?(t=s.first(),n=t.attr("data-lazy"),i=t.attr("data-srcset"),r=t.attr("data-sizes")||o.$slider.attr("data-sizes"),(s=document.createElement("img")).onload=function(){i&&(t.attr("srcset",i),r&&t.attr("sizes",r)),t.attr("src",n).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"),!0===o.options.adaptiveHeight&&o.setPosition(),o.$slider.trigger("lazyLoaded",[o,t,n]),o.progressiveLazyLoad()},s.onerror=function(){e<3?setTimeout(function(){o.progressiveLazyLoad(e+1)},500):(t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),o.$slider.trigger("lazyLoadError",[o,t,n]),o.progressiveLazyLoad())},s.src=n):o.$slider.trigger("allImagesLoaded",[o])},o.prototype.refresh=function(e){var t=this,n=t.slideCount-t.options.slidesToShow;!t.options.infinite&&t.currentSlide>n&&(t.currentSlide=n),t.slideCount<=t.options.slidesToShow&&(t.currentSlide=0),n=t.currentSlide,t.destroy(!0),c.extend(t,t.initials,{currentSlide:n}),t.init(),e||t.changeSlide({data:{message:"index",index:n}},!1)},o.prototype.registerBreakpoints=function(){var e,t,n,i=this,r=i.options.responsive||null;if("array"===c.type(r)&&r.length){for(e in i.respondTo=i.options.respondTo||"window",r)if(n=i.breakpoints.length-1,r.hasOwnProperty(e)){for(t=r[e].breakpoint;0<=n;)i.breakpoints[n]&&i.breakpoints[n]===t&&i.breakpoints.splice(n,1),n--;i.breakpoints.push(t),i.breakpointSettings[t]=r[e].settings}i.breakpoints.sort(function(e,t){return i.options.mobileFirst?e-t:t-e})}},o.prototype.reinit=function(){var e=this;e.$slides=e.$slideTrack.children(e.options.slide).addClass("slick-slide"),e.slideCount=e.$slides.length,e.currentSlide>=e.slideCount&&0!==e.currentSlide&&(e.currentSlide=e.currentSlide-e.options.slidesToScroll),e.slideCount<=e.options.slidesToShow&&(e.currentSlide=0),e.registerBreakpoints(),e.setProps(),e.setupInfinite(),e.buildArrows(),e.updateArrows(),e.initArrowEvents(),e.buildDots(),e.updateDots(),e.initDotEvents(),e.cleanUpSlideEvents(),e.initSlideEvents(),e.checkResponsive(!1,!0),!0===e.options.focusOnSelect&&c(e.$slideTrack).children().on("click.slick",e.selectHandler),e.setSlideClasses("number"==typeof e.currentSlide?e.currentSlide:0),e.setPosition(),e.focusHandler(),e.paused=!e.options.autoplay,e.autoPlay(),e.$slider.trigger("reInit",[e])},o.prototype.resize=function(){var e=this;c(window).width()!==e.windowWidth&&(clearTimeout(e.windowDelay),e.windowDelay=window.setTimeout(function(){e.windowWidth=c(window).width(),e.checkResponsive(),e.unslicked||e.setPosition()},50))},o.prototype.removeSlide=o.prototype.slickRemove=function(e,t,n){var i=this;if(e="boolean"==typeof e?!0===(t=e)?0:i.slideCount-1:!0===t?--e:e,i.slideCount<1||e<0||e>i.slideCount-1)return!1;i.unload(),(!0===n?i.$slideTrack.children():i.$slideTrack.children(this.options.slide).eq(e)).remove(),i.$slides=i.$slideTrack.children(this.options.slide),i.$slideTrack.children(this.options.slide).detach(),i.$slideTrack.append(i.$slides),i.$slidesCache=i.$slides,i.reinit()},o.prototype.setCSS=function(e){var t,n,i=this,r={};!0===i.options.rtl&&(e=-e),t="left"==i.positionProp?Math.ceil(e)+"px":"0px",n="top"==i.positionProp?Math.ceil(e)+"px":"0px",r[i.positionProp]=e,!1===i.transformsEnabled||(!(r={})===i.cssTransitions?r[i.animType]="translate("+t+", "+n+")":r[i.animType]="translate3d("+t+", "+n+", 0px)"),i.$slideTrack.css(r)},o.prototype.setDimensions=function(){var e=this;!1===e.options.vertical?!0===e.options.centerMode&&e.$list.css({padding:"0px "+e.options.centerPadding}):(e.$list.height(e.$slides.first().outerHeight(!0)*e.options.slidesToShow),!0===e.options.centerMode&&e.$list.css({padding:e.options.centerPadding+" 0px"})),e.listWidth=e.$list.width(),e.listHeight=e.$list.height(),!1===e.options.vertical&&!1===e.options.variableWidth?(e.slideWidth=Math.ceil(e.listWidth/e.options.slidesToShow),e.$slideTrack.width(Math.ceil(e.slideWidth*e.$slideTrack.children(".slick-slide").length))):!0===e.options.variableWidth?e.$slideTrack.width(5e3*e.slideCount):(e.slideWidth=Math.ceil(e.listWidth),e.$slideTrack.height(Math.ceil(e.$slides.first().outerHeight(!0)*e.$slideTrack.children(".slick-slide").length)));var t=e.$slides.first().outerWidth(!0)-e.$slides.first().width();!1===e.options.variableWidth&&e.$slideTrack.children(".slick-slide").width(e.slideWidth-t)},o.prototype.setFade=function(){var n,i=this;i.$slides.each(function(e,t){n=i.slideWidth*e*-1,!0===i.options.rtl?c(t).css({position:"relative",right:n,top:0,zIndex:i.options.zIndex-2,opacity:0}):c(t).css({position:"relative",left:n,top:0,zIndex:i.options.zIndex-2,opacity:0})}),i.$slides.eq(i.currentSlide).css({zIndex:i.options.zIndex-1,opacity:1})},o.prototype.setHeight=function(){var e;1===this.options.slidesToShow&&!0===this.options.adaptiveHeight&&!1===this.options.vertical&&(e=this.$slides.eq(this.currentSlide).outerHeight(!0),this.$list.css("height",e))},o.prototype.setOption=o.prototype.slickSetOption=function(){var e,t,n,i,r,o=this,s=!1;if("object"===c.type(arguments[0])?(n=arguments[0],s=arguments[1],r="multiple"):"string"===c.type(arguments[0])&&(n=arguments[0],i=arguments[1],s=arguments[2],"responsive"===arguments[0]&&"array"===c.type(arguments[1])?r="responsive":void 0!==arguments[1]&&(r="single")),"single"===r)o.options[n]=i;else if("multiple"===r)c.each(n,function(e,t){o.options[e]=t});else if("responsive"===r)for(t in i)if("array"!==c.type(o.options.responsive))o.options.responsive=[i[t]];else{for(e=o.options.responsive.length-1;0<=e;)o.options.responsive[e].breakpoint===i[t].breakpoint&&o.options.responsive.splice(e,1),e--;o.options.responsive.push(i[t])}s&&(o.unload(),o.reinit())},o.prototype.setPosition=function(){this.setDimensions(),this.setHeight(),!1===this.options.fade?this.setCSS(this.getLeft(this.currentSlide)):this.setFade(),this.$slider.trigger("setPosition",[this])},o.prototype.setProps=function(){var e=this,t=document.body.style;e.positionProp=!0===e.options.vertical?"top":"left","top"===e.positionProp?e.$slider.addClass("slick-vertical"):e.$slider.removeClass("slick-vertical"),void 0===t.WebkitTransition&&void 0===t.MozTransition&&void 0===t.msTransition||!0===e.options.useCSS&&(e.cssTransitions=!0),e.options.fade&&("number"==typeof e.options.zIndex?e.options.zIndex<3&&(e.options.zIndex=3):e.options.zIndex=e.defaults.zIndex),void 0!==t.OTransform&&(e.animType="OTransform",e.transformType="-o-transform",e.transitionType="OTransition",void 0===t.perspectiveProperty&&void 0===t.webkitPerspective&&(e.animType=!1)),void 0!==t.MozTransform&&(e.animType="MozTransform",e.transformType="-moz-transform",e.transitionType="MozTransition",void 0===t.perspectiveProperty&&void 0===t.MozPerspective&&(e.animType=!1)),void 0!==t.webkitTransform&&(e.animType="webkitTransform",e.transformType="-webkit-transform",e.transitionType="webkitTransition",void 0===t.perspectiveProperty&&void 0===t.webkitPerspective&&(e.animType=!1)),void 0!==t.msTransform&&(e.animType="msTransform",e.transformType="-ms-transform",e.transitionType="msTransition",void 0===t.msTransform&&(e.animType=!1)),void 0!==t.transform&&!1!==e.animType&&(e.animType="transform",e.transformType="transform",e.transitionType="transition"),e.transformsEnabled=e.options.useTransform&&null!==e.animType&&!1!==e.animType},o.prototype.setSlideClasses=function(e){var t,n,i,r=this,o=r.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden","true");r.$slides.eq(e).addClass("slick-current"),!0===r.options.centerMode?(n=r.options.slidesToShow%2==0?1:0,i=Math.floor(r.options.slidesToShow/2),!0===r.options.infinite&&(i<=e&&e<=r.slideCount-1-i?r.$slides.slice(e-i+n,e+i+1).addClass("slick-active").attr("aria-hidden","false"):(t=r.options.slidesToShow+e,o.slice(t-i+1+n,t+i+2).addClass("slick-active").attr("aria-hidden","false")),0===e?o.eq(o.length-1-r.options.slidesToShow).addClass("slick-center"):e===r.slideCount-1&&o.eq(r.options.slidesToShow).addClass("slick-center")),r.$slides.eq(e).addClass("slick-center")):0<=e&&e<=r.slideCount-r.options.slidesToShow?r.$slides.slice(e,e+r.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"):o.length<=r.options.slidesToShow?o.addClass("slick-active").attr("aria-hidden","false"):(i=r.slideCount%r.options.slidesToShow,t=!0===r.options.infinite?r.options.slidesToShow+e:e,(r.options.slidesToShow==r.options.slidesToScroll&&r.slideCount-e<r.options.slidesToShow?o.slice(t-(r.options.slidesToShow-i),t+i):o.slice(t,t+r.options.slidesToShow)).addClass("slick-active").attr("aria-hidden","false")),"ondemand"!==r.options.lazyLoad&&"anticipated"!==r.options.lazyLoad||r.lazyLoad()},o.prototype.setupInfinite=function(){var e,t,n,i=this;if(!0===i.options.fade&&(i.options.centerMode=!1),!0===i.options.infinite&&!1===i.options.fade&&(t=null,i.slideCount>i.options.slidesToShow)){for(n=!0===i.options.centerMode?i.options.slidesToShow+1:i.options.slidesToShow,e=i.slideCount;e>i.slideCount-n;--e)t=e-1,c(i.$slides[t]).clone(!0).attr("id","").attr("data-slick-index",t-i.slideCount).prependTo(i.$slideTrack).addClass("slick-cloned");for(e=0;e<n+i.slideCount;e+=1)t=e,c(i.$slides[t]).clone(!0).attr("id","").attr("data-slick-index",t+i.slideCount).appendTo(i.$slideTrack).addClass("slick-cloned");i.$slideTrack.find(".slick-cloned").find("[id]").each(function(){c(this).attr("id","")})}},o.prototype.interrupt=function(e){e||this.autoPlay(),this.interrupted=e},o.prototype.selectHandler=function(e){e=c(e.target).is(".slick-slide")?c(e.target):c(e.target).parents(".slick-slide"),e=(e=parseInt(e.attr("data-slick-index")))||0;this.slideCount<=this.options.slidesToShow?this.slideHandler(e,!1,!0):this.slideHandler(e)},o.prototype.slideHandler=function(e,t,n){var i,r,o,s,a=this;if(t=t||!1,!(!0===a.animating&&!0===a.options.waitForAnimate||!0===a.options.fade&&a.currentSlide===e))if(!1===t&&a.asNavFor(e),i=e,s=a.getLeft(i),t=a.getLeft(a.currentSlide),a.currentLeft=null===a.swipeLeft?t:a.swipeLeft,!1===a.options.infinite&&!1===a.options.centerMode&&(e<0||e>a.getDotCount()*a.options.slidesToScroll))!1===a.options.fade&&(i=a.currentSlide,!0!==n?a.animateSlide(t,function(){a.postSlide(i)}):a.postSlide(i));else if(!1===a.options.infinite&&!0===a.options.centerMode&&(e<0||e>a.slideCount-a.options.slidesToScroll))!1===a.options.fade&&(i=a.currentSlide,!0!==n?a.animateSlide(t,function(){a.postSlide(i)}):a.postSlide(i));else{if(a.options.autoplay&&clearInterval(a.autoPlayTimer),r=i<0?a.slideCount%a.options.slidesToScroll!=0?a.slideCount-a.slideCount%a.options.slidesToScroll:a.slideCount+i:i>=a.slideCount?a.slideCount%a.options.slidesToScroll!=0?0:i-a.slideCount:i,a.animating=!0,a.$slider.trigger("beforeChange",[a,a.currentSlide,r]),t=a.currentSlide,a.currentSlide=r,a.setSlideClasses(a.currentSlide),a.options.asNavFor&&(o=(o=a.getNavTarget()).slick("getSlick")).slideCount<=o.options.slidesToShow&&o.setSlideClasses(a.currentSlide),a.updateDots(),a.updateArrows(),!0===a.options.fade)return!0!==n?(a.fadeSlideOut(t),a.fadeSlide(r,function(){a.postSlide(r)})):a.postSlide(r),void a.animateHeight();!0!==n?a.animateSlide(s,function(){a.postSlide(r)}):a.postSlide(r)}},o.prototype.startLoad=function(){var e=this;!0===e.options.arrows&&e.slideCount>e.options.slidesToShow&&(e.$prevArrow.hide(),e.$nextArrow.hide()),!0===e.options.dots&&e.slideCount>e.options.slidesToShow&&e.$dots.hide(),e.$slider.addClass("slick-loading")},o.prototype.swipeDirection=function(){var e=this.touchObject.startX-this.touchObject.curX,t=this.touchObject.startY-this.touchObject.curY,e=Math.atan2(t,e);return(e=(e=Math.round(180*e/Math.PI))<0?360-Math.abs(e):e)<=45&&0<=e||e<=360&&315<=e?!1===this.options.rtl?"left":"right":135<=e&&e<=225?!1===this.options.rtl?"right":"left":!0===this.options.verticalSwiping?35<=e&&e<=135?"down":"up":"vertical"},o.prototype.swipeEnd=function(e){var t,n,i=this;if(i.dragging=!1,i.swiping=!1,i.scrolling)return i.scrolling=!1;if(i.interrupted=!1,i.shouldClick=!(10<i.touchObject.swipeLength),void 0===i.touchObject.curX)return!1;if(!0===i.touchObject.edgeHit&&i.$slider.trigger("edge",[i,i.swipeDirection()]),i.touchObject.swipeLength>=i.touchObject.minSwipe){switch(n=i.swipeDirection()){case"left":case"down":t=i.options.swipeToSlide?i.checkNavigable(i.currentSlide+i.getSlideCount()):i.currentSlide+i.getSlideCount(),i.currentDirection=0;break;case"right":case"up":t=i.options.swipeToSlide?i.checkNavigable(i.currentSlide-i.getSlideCount()):i.currentSlide-i.getSlideCount(),i.currentDirection=1}"vertical"!=n&&(i.slideHandler(t),i.touchObject={},i.$slider.trigger("swipe",[i,n]))}else i.touchObject.startX!==i.touchObject.curX&&(i.slideHandler(i.currentSlide),i.touchObject={})},o.prototype.swipeHandler=function(e){var t=this;if(!(!1===t.options.swipe||"ontouchend"in document&&!1===t.options.swipe||!1===t.options.draggable&&-1!==e.type.indexOf("mouse")))switch(t.touchObject.fingerCount=e.originalEvent&&void 0!==e.originalEvent.touches?e.originalEvent.touches.length:1,t.touchObject.minSwipe=t.listWidth/t.options.touchThreshold,!0===t.options.verticalSwiping&&(t.touchObject.minSwipe=t.listHeight/t.options.touchThreshold),e.data.action){case"start":t.swipeStart(e);break;case"move":t.swipeMove(e);break;case"end":t.swipeEnd(e)}},o.prototype.swipeMove=function(e){var t,n,i=this,r=void 0!==e.originalEvent?e.originalEvent.touches:null;return!(!i.dragging||i.scrolling||r&&1!==r.length)&&(t=i.getLeft(i.currentSlide),i.touchObject.curX=void 0!==r?r[0].pageX:e.clientX,i.touchObject.curY=void 0!==r?r[0].pageY:e.clientY,i.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(i.touchObject.curX-i.touchObject.startX,2))),n=Math.round(Math.sqrt(Math.pow(i.touchObject.curY-i.touchObject.startY,2))),!i.options.verticalSwiping&&!i.swiping&&4<n?!(i.scrolling=!0):(!0===i.options.verticalSwiping&&(i.touchObject.swipeLength=n),r=i.swipeDirection(),void 0!==e.originalEvent&&4<i.touchObject.swipeLength&&(i.swiping=!0,e.preventDefault()),n=(!1===i.options.rtl?1:-1)*(i.touchObject.curX>i.touchObject.startX?1:-1),!0===i.options.verticalSwiping&&(n=i.touchObject.curY>i.touchObject.startY?1:-1),e=i.touchObject.swipeLength,(i.touchObject.edgeHit=!1)===i.options.infinite&&(0===i.currentSlide&&"right"===r||i.currentSlide>=i.getDotCount()&&"left"===r)&&(e=i.touchObject.swipeLength*i.options.edgeFriction,i.touchObject.edgeHit=!0),!1===i.options.vertical?i.swipeLeft=t+e*n:i.swipeLeft=t+e*(i.$list.height()/i.listWidth)*n,!0===i.options.verticalSwiping&&(i.swipeLeft=t+e*n),!0!==i.options.fade&&!1!==i.options.touchMove&&(!0===i.animating?(i.swipeLeft=null,!1):void i.setCSS(i.swipeLeft))))},o.prototype.swipeStart=function(e){var t,n=this;if(n.interrupted=!0,1!==n.touchObject.fingerCount||n.slideCount<=n.options.slidesToShow)return!(n.touchObject={});void 0!==e.originalEvent&&void 0!==e.originalEvent.touches&&(t=e.originalEvent.touches[0]),n.touchObject.startX=n.touchObject.curX=void 0!==t?t.pageX:e.clientX,n.touchObject.startY=n.touchObject.curY=void 0!==t?t.pageY:e.clientY,n.dragging=!0},o.prototype.unfilterSlides=o.prototype.slickUnfilter=function(){null!==this.$slidesCache&&(this.unload(),this.$slideTrack.children(this.options.slide).detach(),this.$slidesCache.appendTo(this.$slideTrack),this.reinit())},o.prototype.unload=function(){var e=this;c(".slick-cloned",e.$slider).remove(),e.$dots&&e.$dots.remove(),e.$prevArrow&&e.htmlExpr.test(e.options.prevArrow)&&e.$prevArrow.remove(),e.$nextArrow&&e.htmlExpr.test(e.options.nextArrow)&&e.$nextArrow.remove(),e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden","true").css("width","")},o.prototype.unslick=function(e){this.$slider.trigger("unslick",[this,e]),this.destroy()},o.prototype.updateArrows=function(){var e=this;Math.floor(e.options.slidesToShow/2),!0===e.options.arrows&&e.slideCount>e.options.slidesToShow&&!e.options.infinite&&(e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false"),e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false"),0===e.currentSlide?(e.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true"),e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false")):(e.currentSlide>=e.slideCount-e.options.slidesToShow&&!1===e.options.centerMode||e.currentSlide>=e.slideCount-1&&!0===e.options.centerMode)&&(e.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")))},o.prototype.updateDots=function(){null!==this.$dots&&(this.$dots.find("li").removeClass("slick-active").end(),this.$dots.find("li").eq(Math.floor(this.currentSlide/this.options.slidesToScroll)).addClass("slick-active"))},o.prototype.visibility=function(){this.options.autoplay&&(document[this.hidden]?this.interrupted=!0:this.interrupted=!1)},c.fn.slick=function(){for(var e,t=arguments[0],n=Array.prototype.slice.call(arguments,1),i=this.length,r=0;r<i;r++)if("object"==_typeof(t)||void 0===t?this[r].slick=new o(this[r],t):e=this[r].slick[t].apply(this[r].slick,n),void 0!==e)return e;return this}});var _interopRequireDefault=require("@babel/runtime-corejs3/helpers/interopRequireDefault"),_forEach=_interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/for-each")),data=[{id:1,active:!1,showIcon:!1,title:"What is Cannabidiol (CBD)? ",details:"\n        CBD is short for cannabidiol. It is a phytocannabinoid found in hemp\n                                and known for supporting the body and mind in many ways.* Charlotte’s Web products have\n                                cannabinoids with CBD extract.\n      "},{id:2,active:!1,showIcon:!1,title:"Is Hemp-Derived Cannabidiol (CBD) Legal? ",details:"\n        Not to be confused with oil from hemp seeds (which doesn’t contain\n            cannabinoids), CBD\n            comes from the flowers and leaves of the hemp plant.\n            "},{id:3,active:!1,showIcon:!1,title:"Are there any negative side effects? ",details:"\n        Why does CBD work? The human body has a vast network of receptors,\n                                the endocannabinoid\n                                system.\n      "},{id:4,active:!1,showIcon:!1,title:"Do you offer a return policy?",details:"\n        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur doloremque hic voluptate\n                            nesciunt numquam, eos ullam non temporibus, labore ea ad modi quas accusamus reprehenderit\n                            impedit tempore illo pariatur sunt!\n      "}];Vue.component("accordion",{props:{content:{type:Array,required:!0}},data:function(){return{groupId:null}},template:'\n      <div class="accordion__box">\n        <accordion-item\n          v-for="item in content"\n          :item="item"\n          :groupId="groupId"\n          :key="item.id"\n          >\n        </accordion-item>\n      </div>\n    ',mounted:function(){this.groupId=this.$el.id}}),Vue.component("accordion-item",{props:["item","groupId"],template:'\n      <div :id="groupId + \'-\' + item.id" class="accordion__item" :class="{\'is-active\': item.active}">\n        <div class="accordion__title">\n          <button @click="toggle" class="accordion__trigger">\n            <i v-if="!item.showIcon" \n                class="fas fa-plus accordion__icon"\n            >\n            </i>\n            <i v-else \n                class="fas fa-minus accordion__icon"\n            >\n           </i>\n        <span class="accordion__text">{{item.title}}</span>\n          </button>\n        </div>\n        <transition\n          name="accordion-item"\n          @enter="startTransition"\n          @after-enter="endTransition"\n          @before-leave="startTransition"\n          @after-leave="endTransition">\n          <div v-if="item.active" class="accordion__details">\n            <div class="accordion__inner"> <p class="accordion__answer"> {{item.details}} </p> </div>\n          </div>\n        </transition>\n      </div>\n    ',methods:{toggle:function(n){var e;(0,_forEach.default)(e=this.$parent.$children).call(e,function(e,t){e.$el.id===n.currentTarget.parentElement.parentElement.id?(e.item.active=!e.item.active,e.item.showIcon=!e.item.showIcon):(e.item.active=!1,e.item.showIcon=!1)})},startTransition:function(e){e.style.height=e.scrollHeight+"px"},endTransition:function(e){e.style.height=""}}});var _includes=(_interopRequireDefault=require("@babel/runtime-corejs3/helpers/interopRequireDefault"))(require("@babel/runtime-corejs3/core-js-stable/instance/includes")),_setTimeout2=_interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/set-timeout"));Vue.component("contact",{props:{email:String},template:'\n    <form action="№" class="contact__form" @submit.prevent="submitHandler">\n                        <legend class="contact__legend">Subscribe to Newsletter</legend>\n                        \n                        <div class="contact__subscribe">\n                        <input placeholder="Email" \n                                type="email" \n                                class="contact__email"\n                                v-model.lazy="email"\n                                required\n                            >\n                            <button  type="submit" class="contact__submit">\n                                <div class="contact__btn"><i class="icon-arrow"></i></div>\n                                <FlashMessage><FlashMessage/>\n                            </button>\n                            </div>\n                            <div v-if="state">\n                                <div v-if="isShown" class="flash flash--red">You have already subscribed</div>\n                                <div v-else class="flash flash--green">You have succesfully subscribed</div>\n                            </div>\n                            </form>\n    ',data:function(){return{state:!1,isShown:!1,stor:[]}},methods:{submitHandler:function(){var e,t=this;localStorage.email?(this.stor=localStorage.email.split(","),(0,_includes.default)(e=this.stor).call(e,this.email)?(this.isShown=!0,this.state=!0):(this.stor.push(this.email),localStorage.setItem("email",this.stor),this.state=!0,this.isShown=!1)):(this.stor.push(this.email),localStorage.setItem("email",this.stor)),(this.email="",_setTimeout2.default)(function(){return t.state=!1},4e3)}}});var _reduce=(_interopRequireDefault=require("@babel/runtime-corejs3/helpers/interopRequireDefault"))(require("@babel/runtime-corejs3/core-js-stable/instance/reduce"));Vue.component("modal",{props:{baskets:Array},template:'\n      <transition name="modal">\n      <div class="modal-mask">\n        <div class="modal-wrapper">\n          <div class="modal-container">\n  \n          <div class="modal-header">\n          <h3 @click="showThis">Goods for shopping</h3>\n            </div>\n            <div class="modal-body">\n              <slot name="body">\n              <table class="modal__table">\n                <tr>\n                    <th class="modal__tr">Img</th>\n                    <th class="modal__tr">Name</th>\n                    <th class="modal__tr">Count</th>\n                    <th class="modal__tr">Price</th>\n                </tr>\n                <tr class="modal__tr" v-for="(basket,i) in baskets" :key="i" >\n                    <td class="modal__td"><img :src="basket.src" alt="product" width="50px" height="70px"></td>\n                    <td class="modal__td">{{basket.name}} </td>\n                    <td class="modal__td">{{basket.count}}</td>\n                    <td class="modal__td">${{basket.totalPrice}} USD</td>\n                </tr>\n                <tr class="modal__tr">\n                    <td class="modal__td">Total:</td>\n                    <td class="modal__td"></td>\n                    <td class="modal__td"> {{totalCount}} </td>\n                    <td class="modal__td">${{totalPrice}} USD </td>\n                </tr>\n              </table>        \n              </slot>\n            </div>\n            <div class="modal-footer">\n              <slot name="footer">\n                <button class="modal-default-button" @click="$emit(\'close\')">\n                  OK\n                </button>\n              </slot>\n            </div>\n          </div>\n        </div>\n      </div>\n    </transition>\n      ',methods:{showThis:function(){console.log(this.baskets)}},computed:{totalCount:function(e){function t(){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}(function(){var e;return totalCount=(0,_reduce.default)(e=this.baskets).call(e,function(e,t){return e+t.count},0)}),totalPrice:function(){var e;return+(0,_reduce.default)(e=this.baskets).call(e,function(e,t){return e+t.totalPrice},0).toFixed(2)},price:function(){return+(this.baskets.price*this.baskets.count).toFixed(2)}}}),Vue.component("star-rating",VueStarRating.default);var product=Vue.component("product-item",{props:{contents:Object},template:'\n<div class="products__item">\n    <div class="products__wrapper">\n        <div class="products__rating">\n        <star-rating :border-width="4" \n            border-color="#ffffff" \n            :rounded-corners="false" \n            :show-rating="false"\n            :star-size="20"\n            active-color="#6e774a"\n            :star-points="[23,2, 14,17, 0,19, 10,34, 7,50, 23,43, 38,50, 36,34, 46,19, 31,17]"\n        ></star-rating>\n        </div>\n        <h2 class="products__name"> {{contents.name}} </h2>\n        <img :src="contents.src" class="img products__img">\n    </div>\n    <div class="products__foot">\n        <span class="products__price">{{contents.price}} USD</span>\n        <button @click="increment" class="products__buy">\n            <span>shop {{count > 0 ? count : ""}} </span>\n            <span v-if="!count" class="dash"></span>\n        </button>\n    </div>\n\n</div>\n    ',data:function(){return{count:0}},methods:{increment:function(){this.count+=1,this.$emit("add-to-cart",this.contents)}}}),_some=(_interopRequireDefault=require("@babel/runtime-corejs3/helpers/interopRequireDefault"))(require("@babel/runtime-corejs3/core-js-stable/instance/some")),_findIndex=_interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/find-index"));function isInArray(t,e){return!!(0,_some.default)(e).call(e,function(e){return e.id===t})}Vue.directive("scroll",{inserted:function(t,n){function i(e){n.value(e,t)&&window.removeEventListener("scroll",i)}window.addEventListener("scroll",i)}}),new Vue({el:"#app",data:{itemsLeftDesktop:[{name:"home",show:!1},{name:"products",show:!1},{name:"FAQS",show:!1},{name:"contact us",show:!1}],tabs:[{name:"what is cbd",show:!1},{name:"benefits",show:!1},{name:"our difference",show:!1}],contents:[{id:0,name:"CBD 500 mg Orange Flavor Tincture",src:"./imgo/product-1.png",price:49.99,count:0,totalPrice:0},{id:1,name:"lack ICE CBD Muscle Rub 200 mg",src:"./imgo/product-2.png",price:49.99,count:0,totalPrice:0},{id:2,name:"CBD+Curcumin Coffee 750 mg",src:"./imgo/product-3.png",price:79.99,count:0,totalPrice:0},{id:0,name:"CBD 500 mg Orange Flavor Tincture",src:"./imgo/product-1.png",price:49.99,count:0,totalPrice:0},{id:1,name:"lack ICE CBD Muscle Rub 200 mg",src:"./imgo/product-2.png",price:49.99,count:0,totalPrice:0},{id:2,name:"CBD+Curcumin Coffee 750 mg",src:"./imgo/product-3.png",price:79.99,count:0,totalPrice:0}],show:!1,activetab:1,cart:[],totalCount:0,showModal:!1,content:data,stor:[],showSearch:!1,query:"",showClassTabsName:!0},methods:{clickedLine:function(e,t){for(var n=e.length,i=0;i<n;i++)i!=t&&(e[i].show=!1);e[t].show?e[t].show=!1:e[t].show=!0},link:function(e){return"#".concat(this.itemsLeftDesktop[e].name)},handleScroll:function(e,t){window.scrollY?t.setAttribute("style","background-color: #cad0dc;"):t.removeAttribute("style")},incrementTotal:function(t){var e=this.cart,n=(0,_findIndex.default)(e).call(e,function(e){return e.id===t.id});-1<n?(e[n].count=e[n].count+1,e[n].totalPrice=e[n].totalPrice+e[n].price,e[n].totalPrice=+e[n].totalPrice.toFixed(2)):(t.count+=1,t.totalPrice=t.price,e.push(t)),this.totalCount+=1},searchInfo:function(){var e="https://www.google.com/search?q="+this.query;console.log(e),this.query="",this.showSearch=!1,window.open(e,"_blank")},showInput:function(){var e=this;this.showSearch=!this.showSearch,this.$nextTick(function(){e.focusInput()})},focusInput:function(){this.$refs.input&&this.$refs.input.focus()}}}),console.log("test"),$(".products__slider").slick({slidesToShow:3,slidesToScroll:1,variableWidth:!1,prevArrow:$(".prev"),nextArrow:$(".next"),autoplay:!0,autoplaySpeed:4e3,dots:!1,infinite:!0,responsive:[{breakpoint:992,settings:{slidesToShow:2,arrows:!1}},{breakpoint:768,settings:{slidesToShow:1,arrows:!1}}]}),$(".testimonials__slider").slick({dots:!1,infinite:!0,autoplaySpeed:3500,autoplay:!0,slidesToShow:1,speed:500,fade:!0,cssEase:"linear",prevArrow:$(".testimonials__prev"),nextArrow:$(".testimonials__next")});
}).call(this)}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("timers").setImmediate)
},{"@babel/runtime-corejs3/core-js-stable/instance/find-index":2,"@babel/runtime-corejs3/core-js-stable/instance/for-each":3,"@babel/runtime-corejs3/core-js-stable/instance/includes":4,"@babel/runtime-corejs3/core-js-stable/instance/reduce":5,"@babel/runtime-corejs3/core-js-stable/instance/some":6,"@babel/runtime-corejs3/core-js-stable/set-timeout":7,"@babel/runtime-corejs3/helpers/interopRequireDefault":8,"jquery":111,"timers":113}],2:[function(require,module,exports){
module.exports = require("core-js-pure/stable/instance/find-index");
},{"core-js-pure/stable/instance/find-index":105}],3:[function(require,module,exports){
module.exports = require("core-js-pure/stable/instance/for-each");
},{"core-js-pure/stable/instance/for-each":106}],4:[function(require,module,exports){
module.exports = require("core-js-pure/stable/instance/includes");
},{"core-js-pure/stable/instance/includes":107}],5:[function(require,module,exports){
module.exports = require("core-js-pure/stable/instance/reduce");
},{"core-js-pure/stable/instance/reduce":108}],6:[function(require,module,exports){
module.exports = require("core-js-pure/stable/instance/some");
},{"core-js-pure/stable/instance/some":109}],7:[function(require,module,exports){
module.exports = require("core-js-pure/stable/set-timeout");
},{"core-js-pure/stable/set-timeout":110}],8:[function(require,module,exports){
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;
module.exports["default"] = module.exports, module.exports.__esModule = true;
},{}],9:[function(require,module,exports){
require('../../../modules/es.array.find-index');
var entryVirtual = require('../../../internals/entry-virtual');

module.exports = entryVirtual('Array').findIndex;

},{"../../../internals/entry-virtual":43,"../../../modules/es.array.find-index":95}],10:[function(require,module,exports){
require('../../../modules/es.array.for-each');
var entryVirtual = require('../../../internals/entry-virtual');

module.exports = entryVirtual('Array').forEach;

},{"../../../internals/entry-virtual":43,"../../../modules/es.array.for-each":96}],11:[function(require,module,exports){
require('../../../modules/es.array.includes');
var entryVirtual = require('../../../internals/entry-virtual');

module.exports = entryVirtual('Array').includes;

},{"../../../internals/entry-virtual":43,"../../../modules/es.array.includes":97}],12:[function(require,module,exports){
require('../../../modules/es.array.reduce');
var entryVirtual = require('../../../internals/entry-virtual');

module.exports = entryVirtual('Array').reduce;

},{"../../../internals/entry-virtual":43,"../../../modules/es.array.reduce":99}],13:[function(require,module,exports){
require('../../../modules/es.array.some');
var entryVirtual = require('../../../internals/entry-virtual');

module.exports = entryVirtual('Array').some;

},{"../../../internals/entry-virtual":43,"../../../modules/es.array.some":100}],14:[function(require,module,exports){
var findIndex = require('../array/virtual/find-index');

var ArrayPrototype = Array.prototype;

module.exports = function (it) {
  var own = it.findIndex;
  return it === ArrayPrototype || (it instanceof Array && own === ArrayPrototype.findIndex) ? findIndex : own;
};

},{"../array/virtual/find-index":9}],15:[function(require,module,exports){
var arrayIncludes = require('../array/virtual/includes');
var stringIncludes = require('../string/virtual/includes');

var ArrayPrototype = Array.prototype;
var StringPrototype = String.prototype;

module.exports = function (it) {
  var own = it.includes;
  if (it === ArrayPrototype || (it instanceof Array && own === ArrayPrototype.includes)) return arrayIncludes;
  if (typeof it === 'string' || it === StringPrototype || (it instanceof String && own === StringPrototype.includes)) {
    return stringIncludes;
  } return own;
};

},{"../array/virtual/includes":11,"../string/virtual/includes":18}],16:[function(require,module,exports){
var reduce = require('../array/virtual/reduce');

var ArrayPrototype = Array.prototype;

module.exports = function (it) {
  var own = it.reduce;
  return it === ArrayPrototype || (it instanceof Array && own === ArrayPrototype.reduce) ? reduce : own;
};

},{"../array/virtual/reduce":12}],17:[function(require,module,exports){
var some = require('../array/virtual/some');

var ArrayPrototype = Array.prototype;

module.exports = function (it) {
  var own = it.some;
  return it === ArrayPrototype || (it instanceof Array && own === ArrayPrototype.some) ? some : own;
};

},{"../array/virtual/some":13}],18:[function(require,module,exports){
require('../../../modules/es.string.includes');
var entryVirtual = require('../../../internals/entry-virtual');

module.exports = entryVirtual('String').includes;

},{"../../../internals/entry-virtual":43,"../../../modules/es.string.includes":101}],19:[function(require,module,exports){
module.exports = function (it) {
  if (typeof it != 'function') {
    throw TypeError(String(it) + ' is not a function');
  } return it;
};

},{}],20:[function(require,module,exports){
var isObject = require('../internals/is-object');

module.exports = function (it) {
  if (!isObject(it) && it !== null) {
    throw TypeError("Can't set " + String(it) + ' as a prototype');
  } return it;
};

},{"../internals/is-object":59}],21:[function(require,module,exports){
module.exports = function () { /* empty */ };

},{}],22:[function(require,module,exports){
var isObject = require('../internals/is-object');

module.exports = function (it) {
  if (!isObject(it)) {
    throw TypeError(String(it) + ' is not an object');
  } return it;
};

},{"../internals/is-object":59}],23:[function(require,module,exports){
'use strict';
var $forEach = require('../internals/array-iteration').forEach;
var arrayMethodIsStrict = require('../internals/array-method-is-strict');

var STRICT_METHOD = arrayMethodIsStrict('forEach');

// `Array.prototype.forEach` method implementation
// https://tc39.es/ecma262/#sec-array.prototype.foreach
module.exports = !STRICT_METHOD ? function forEach(callbackfn /* , thisArg */) {
  return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
} : [].forEach;

},{"../internals/array-iteration":25,"../internals/array-method-is-strict":26}],24:[function(require,module,exports){
var toIndexedObject = require('../internals/to-indexed-object');
var toLength = require('../internals/to-length');
var toAbsoluteIndex = require('../internals/to-absolute-index');

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare -- NaN check
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare -- NaN check
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

module.exports = {
  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};

},{"../internals/to-absolute-index":85,"../internals/to-indexed-object":86,"../internals/to-length":88}],25:[function(require,module,exports){
var bind = require('../internals/function-bind-context');
var IndexedObject = require('../internals/indexed-object');
var toObject = require('../internals/to-object');
var toLength = require('../internals/to-length');
var arraySpeciesCreate = require('../internals/array-species-create');

var push = [].push;

// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex, filterOut }` methods implementation
var createMethod = function (TYPE) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var IS_FILTER_OUT = TYPE == 7;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  return function ($this, callbackfn, that, specificCreate) {
    var O = toObject($this);
    var self = IndexedObject(O);
    var boundFunction = bind(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var create = specificCreate || arraySpeciesCreate;
    var target = IS_MAP ? create($this, length) : IS_FILTER || IS_FILTER_OUT ? create($this, 0) : undefined;
    var value, result;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      value = self[index];
      result = boundFunction(value, index, O);
      if (TYPE) {
        if (IS_MAP) target[index] = result; // map
        else if (result) switch (TYPE) {
          case 3: return true;              // some
          case 5: return value;             // find
          case 6: return index;             // findIndex
          case 2: push.call(target, value); // filter
        } else switch (TYPE) {
          case 4: return false;             // every
          case 7: push.call(target, value); // filterOut
        }
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
  };
};

module.exports = {
  // `Array.prototype.forEach` method
  // https://tc39.es/ecma262/#sec-array.prototype.foreach
  forEach: createMethod(0),
  // `Array.prototype.map` method
  // https://tc39.es/ecma262/#sec-array.prototype.map
  map: createMethod(1),
  // `Array.prototype.filter` method
  // https://tc39.es/ecma262/#sec-array.prototype.filter
  filter: createMethod(2),
  // `Array.prototype.some` method
  // https://tc39.es/ecma262/#sec-array.prototype.some
  some: createMethod(3),
  // `Array.prototype.every` method
  // https://tc39.es/ecma262/#sec-array.prototype.every
  every: createMethod(4),
  // `Array.prototype.find` method
  // https://tc39.es/ecma262/#sec-array.prototype.find
  find: createMethod(5),
  // `Array.prototype.findIndex` method
  // https://tc39.es/ecma262/#sec-array.prototype.findIndex
  findIndex: createMethod(6),
  // `Array.prototype.filterOut` method
  // https://github.com/tc39/proposal-array-filtering
  filterOut: createMethod(7)
};

},{"../internals/array-species-create":28,"../internals/function-bind-context":47,"../internals/indexed-object":54,"../internals/to-length":88,"../internals/to-object":89}],26:[function(require,module,exports){
'use strict';
var fails = require('../internals/fails');

module.exports = function (METHOD_NAME, argument) {
  var method = [][METHOD_NAME];
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call,no-throw-literal -- required for testing
    method.call(null, argument || function () { throw 1; }, 1);
  });
};

},{"../internals/fails":46}],27:[function(require,module,exports){
var aFunction = require('../internals/a-function');
var toObject = require('../internals/to-object');
var IndexedObject = require('../internals/indexed-object');
var toLength = require('../internals/to-length');

// `Array.prototype.{ reduce, reduceRight }` methods implementation
var createMethod = function (IS_RIGHT) {
  return function (that, callbackfn, argumentsLength, memo) {
    aFunction(callbackfn);
    var O = toObject(that);
    var self = IndexedObject(O);
    var length = toLength(O.length);
    var index = IS_RIGHT ? length - 1 : 0;
    var i = IS_RIGHT ? -1 : 1;
    if (argumentsLength < 2) while (true) {
      if (index in self) {
        memo = self[index];
        index += i;
        break;
      }
      index += i;
      if (IS_RIGHT ? index < 0 : length <= index) {
        throw TypeError('Reduce of empty array with no initial value');
      }
    }
    for (;IS_RIGHT ? index >= 0 : length > index; index += i) if (index in self) {
      memo = callbackfn(memo, self[index], index, O);
    }
    return memo;
  };
};

module.exports = {
  // `Array.prototype.reduce` method
  // https://tc39.es/ecma262/#sec-array.prototype.reduce
  left: createMethod(false),
  // `Array.prototype.reduceRight` method
  // https://tc39.es/ecma262/#sec-array.prototype.reduceright
  right: createMethod(true)
};

},{"../internals/a-function":19,"../internals/indexed-object":54,"../internals/to-length":88,"../internals/to-object":89}],28:[function(require,module,exports){
var isObject = require('../internals/is-object');
var isArray = require('../internals/is-array');
var wellKnownSymbol = require('../internals/well-known-symbol');

var SPECIES = wellKnownSymbol('species');

// `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate
module.exports = function (originalArray, length) {
  var C;
  if (isArray(originalArray)) {
    C = originalArray.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    else if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return new (C === undefined ? Array : C)(length === 0 ? 0 : length);
};

},{"../internals/is-array":57,"../internals/is-object":59,"../internals/well-known-symbol":94}],29:[function(require,module,exports){
var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};

},{}],30:[function(require,module,exports){
var TO_STRING_TAG_SUPPORT = require('../internals/to-string-tag-support');
var classofRaw = require('../internals/classof-raw');
var wellKnownSymbol = require('../internals/well-known-symbol');

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
// ES3 wrong here
var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (error) { /* empty */ }
};

// getting tag from ES6+ `Object.prototype.toString`
module.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (tag = tryGet(O = Object(it), TO_STRING_TAG)) == 'string' ? tag
    // builtinTag case
    : CORRECT_ARGUMENTS ? classofRaw(O)
    // ES3 arguments fallback
    : (result = classofRaw(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : result;
};

},{"../internals/classof-raw":29,"../internals/to-string-tag-support":91,"../internals/well-known-symbol":94}],31:[function(require,module,exports){
var wellKnownSymbol = require('../internals/well-known-symbol');

var MATCH = wellKnownSymbol('match');

module.exports = function (METHOD_NAME) {
  var regexp = /./;
  try {
    '/./'[METHOD_NAME](regexp);
  } catch (error1) {
    try {
      regexp[MATCH] = false;
      return '/./'[METHOD_NAME](regexp);
    } catch (error2) { /* empty */ }
  } return false;
};

},{"../internals/well-known-symbol":94}],32:[function(require,module,exports){
var fails = require('../internals/fails');

module.exports = !fails(function () {
  function F() { /* empty */ }
  F.prototype.constructor = null;
  return Object.getPrototypeOf(new F()) !== F.prototype;
});

},{"../internals/fails":46}],33:[function(require,module,exports){
'use strict';
var IteratorPrototype = require('../internals/iterators-core').IteratorPrototype;
var create = require('../internals/object-create');
var createPropertyDescriptor = require('../internals/create-property-descriptor');
var setToStringTag = require('../internals/set-to-string-tag');
var Iterators = require('../internals/iterators');

var returnThis = function () { return this; };

module.exports = function (IteratorConstructor, NAME, next) {
  var TO_STRING_TAG = NAME + ' Iterator';
  IteratorConstructor.prototype = create(IteratorPrototype, { next: createPropertyDescriptor(1, next) });
  setToStringTag(IteratorConstructor, TO_STRING_TAG, false, true);
  Iterators[TO_STRING_TAG] = returnThis;
  return IteratorConstructor;
};

},{"../internals/create-property-descriptor":35,"../internals/iterators":63,"../internals/iterators-core":62,"../internals/object-create":67,"../internals/set-to-string-tag":81}],34:[function(require,module,exports){
var DESCRIPTORS = require('../internals/descriptors');
var definePropertyModule = require('../internals/object-define-property');
var createPropertyDescriptor = require('../internals/create-property-descriptor');

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};

},{"../internals/create-property-descriptor":35,"../internals/descriptors":37,"../internals/object-define-property":69}],35:[function(require,module,exports){
module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};

},{}],36:[function(require,module,exports){
'use strict';
var $ = require('../internals/export');
var createIteratorConstructor = require('../internals/create-iterator-constructor');
var getPrototypeOf = require('../internals/object-get-prototype-of');
var setPrototypeOf = require('../internals/object-set-prototype-of');
var setToStringTag = require('../internals/set-to-string-tag');
var createNonEnumerableProperty = require('../internals/create-non-enumerable-property');
var redefine = require('../internals/redefine');
var wellKnownSymbol = require('../internals/well-known-symbol');
var IS_PURE = require('../internals/is-pure');
var Iterators = require('../internals/iterators');
var IteratorsCore = require('../internals/iterators-core');

var IteratorPrototype = IteratorsCore.IteratorPrototype;
var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
var ITERATOR = wellKnownSymbol('iterator');
var KEYS = 'keys';
var VALUES = 'values';
var ENTRIES = 'entries';

var returnThis = function () { return this; };

module.exports = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
  createIteratorConstructor(IteratorConstructor, NAME, next);

  var getIterationMethod = function (KIND) {
    if (KIND === DEFAULT && defaultIterator) return defaultIterator;
    if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype) return IterablePrototype[KIND];
    switch (KIND) {
      case KEYS: return function keys() { return new IteratorConstructor(this, KIND); };
      case VALUES: return function values() { return new IteratorConstructor(this, KIND); };
      case ENTRIES: return function entries() { return new IteratorConstructor(this, KIND); };
    } return function () { return new IteratorConstructor(this); };
  };

  var TO_STRING_TAG = NAME + ' Iterator';
  var INCORRECT_VALUES_NAME = false;
  var IterablePrototype = Iterable.prototype;
  var nativeIterator = IterablePrototype[ITERATOR]
    || IterablePrototype['@@iterator']
    || DEFAULT && IterablePrototype[DEFAULT];
  var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
  var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
  var CurrentIteratorPrototype, methods, KEY;

  // fix native
  if (anyNativeIterator) {
    CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));
    if (IteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
      if (!IS_PURE && getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
        if (setPrototypeOf) {
          setPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);
        } else if (typeof CurrentIteratorPrototype[ITERATOR] != 'function') {
          createNonEnumerableProperty(CurrentIteratorPrototype, ITERATOR, returnThis);
        }
      }
      // Set @@toStringTag to native iterators
      setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true, true);
      if (IS_PURE) Iterators[TO_STRING_TAG] = returnThis;
    }
  }

  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
    INCORRECT_VALUES_NAME = true;
    defaultIterator = function values() { return nativeIterator.call(this); };
  }

  // define iterator
  if ((!IS_PURE || FORCED) && IterablePrototype[ITERATOR] !== defaultIterator) {
    createNonEnumerableProperty(IterablePrototype, ITERATOR, defaultIterator);
  }
  Iterators[NAME] = defaultIterator;

  // export additional methods
  if (DEFAULT) {
    methods = {
      values: getIterationMethod(VALUES),
      keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
      entries: getIterationMethod(ENTRIES)
    };
    if (FORCED) for (KEY in methods) {
      if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
        redefine(IterablePrototype, KEY, methods[KEY]);
      }
    } else $({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);
  }

  return methods;
};

},{"../internals/create-iterator-constructor":33,"../internals/create-non-enumerable-property":34,"../internals/export":45,"../internals/is-pure":60,"../internals/iterators":63,"../internals/iterators-core":62,"../internals/object-get-prototype-of":71,"../internals/object-set-prototype-of":75,"../internals/redefine":78,"../internals/set-to-string-tag":81,"../internals/well-known-symbol":94}],37:[function(require,module,exports){
var fails = require('../internals/fails');

// Detect IE8's incomplete defineProperty implementation
module.exports = !fails(function () {
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
});

},{"../internals/fails":46}],38:[function(require,module,exports){
var global = require('../internals/global');
var isObject = require('../internals/is-object');

var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};

},{"../internals/global":49,"../internals/is-object":59}],39:[function(require,module,exports){
// iterable DOM collections
// flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
module.exports = {
  CSSRuleList: 0,
  CSSStyleDeclaration: 0,
  CSSValueList: 0,
  ClientRectList: 0,
  DOMRectList: 0,
  DOMStringList: 0,
  DOMTokenList: 1,
  DataTransferItemList: 0,
  FileList: 0,
  HTMLAllCollection: 0,
  HTMLCollection: 0,
  HTMLFormElement: 0,
  HTMLSelectElement: 0,
  MediaList: 0,
  MimeTypeArray: 0,
  NamedNodeMap: 0,
  NodeList: 1,
  PaintRequestList: 0,
  Plugin: 0,
  PluginArray: 0,
  SVGLengthList: 0,
  SVGNumberList: 0,
  SVGPathSegList: 0,
  SVGPointList: 0,
  SVGStringList: 0,
  SVGTransformList: 0,
  SourceBufferList: 0,
  StyleSheetList: 0,
  TextTrackCueList: 0,
  TextTrackList: 0,
  TouchList: 0
};

},{}],40:[function(require,module,exports){
var classof = require('../internals/classof-raw');
var global = require('../internals/global');

module.exports = classof(global.process) == 'process';

},{"../internals/classof-raw":29,"../internals/global":49}],41:[function(require,module,exports){
var getBuiltIn = require('../internals/get-built-in');

module.exports = getBuiltIn('navigator', 'userAgent') || '';

},{"../internals/get-built-in":48}],42:[function(require,module,exports){
var global = require('../internals/global');
var userAgent = require('../internals/engine-user-agent');

var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8;
var match, version;

if (v8) {
  match = v8.split('.');
  version = match[0] + match[1];
} else if (userAgent) {
  match = userAgent.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = userAgent.match(/Chrome\/(\d+)/);
    if (match) version = match[1];
  }
}

module.exports = version && +version;

},{"../internals/engine-user-agent":41,"../internals/global":49}],43:[function(require,module,exports){
var path = require('../internals/path');

module.exports = function (CONSTRUCTOR) {
  return path[CONSTRUCTOR + 'Prototype'];
};

},{"../internals/path":77}],44:[function(require,module,exports){
// IE8- don't enum bug keys
module.exports = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];

},{}],45:[function(require,module,exports){
'use strict';
var global = require('../internals/global');
var getOwnPropertyDescriptor = require('../internals/object-get-own-property-descriptor').f;
var isForced = require('../internals/is-forced');
var path = require('../internals/path');
var bind = require('../internals/function-bind-context');
var createNonEnumerableProperty = require('../internals/create-non-enumerable-property');
var has = require('../internals/has');

var wrapConstructor = function (NativeConstructor) {
  var Wrapper = function (a, b, c) {
    if (this instanceof NativeConstructor) {
      switch (arguments.length) {
        case 0: return new NativeConstructor();
        case 1: return new NativeConstructor(a);
        case 2: return new NativeConstructor(a, b);
      } return new NativeConstructor(a, b, c);
    } return NativeConstructor.apply(this, arguments);
  };
  Wrapper.prototype = NativeConstructor.prototype;
  return Wrapper;
};

/*
  options.target      - name of the target object
  options.global      - target is the global object
  options.stat        - export as static methods of target
  options.proto       - export as prototype methods of target
  options.real        - real prototype method for the `pure` version
  options.forced      - export even if the native feature is available
  options.bind        - bind methods to the target, required for the `pure` version
  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
  options.sham        - add a flag to not completely full polyfills
  options.enumerable  - export as enumerable property
  options.noTargetGet - prevent calling a getter on target
*/
module.exports = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var PROTO = options.proto;

  var nativeSource = GLOBAL ? global : STATIC ? global[TARGET] : (global[TARGET] || {}).prototype;

  var target = GLOBAL ? path : path[TARGET] || (path[TARGET] = {});
  var targetPrototype = target.prototype;

  var FORCED, USE_NATIVE, VIRTUAL_PROTOTYPE;
  var key, sourceProperty, targetProperty, nativeProperty, resultProperty, descriptor;

  for (key in source) {
    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contains in native
    USE_NATIVE = !FORCED && nativeSource && has(nativeSource, key);

    targetProperty = target[key];

    if (USE_NATIVE) if (options.noTargetGet) {
      descriptor = getOwnPropertyDescriptor(nativeSource, key);
      nativeProperty = descriptor && descriptor.value;
    } else nativeProperty = nativeSource[key];

    // export native or implementation
    sourceProperty = (USE_NATIVE && nativeProperty) ? nativeProperty : source[key];

    if (USE_NATIVE && typeof targetProperty === typeof sourceProperty) continue;

    // bind timers to global for call from export context
    if (options.bind && USE_NATIVE) resultProperty = bind(sourceProperty, global);
    // wrap global constructors for prevent changs in this version
    else if (options.wrap && USE_NATIVE) resultProperty = wrapConstructor(sourceProperty);
    // make static versions for prototype methods
    else if (PROTO && typeof sourceProperty == 'function') resultProperty = bind(Function.call, sourceProperty);
    // default case
    else resultProperty = sourceProperty;

    // add a flag to not completely full polyfills
    if (options.sham || (sourceProperty && sourceProperty.sham) || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty(resultProperty, 'sham', true);
    }

    target[key] = resultProperty;

    if (PROTO) {
      VIRTUAL_PROTOTYPE = TARGET + 'Prototype';
      if (!has(path, VIRTUAL_PROTOTYPE)) {
        createNonEnumerableProperty(path, VIRTUAL_PROTOTYPE, {});
      }
      // export virtual prototype methods
      path[VIRTUAL_PROTOTYPE][key] = sourceProperty;
      // export real prototype methods
      if (options.real && targetPrototype && !targetPrototype[key]) {
        createNonEnumerableProperty(targetPrototype, key, sourceProperty);
      }
    }
  }
};

},{"../internals/create-non-enumerable-property":34,"../internals/function-bind-context":47,"../internals/global":49,"../internals/has":50,"../internals/is-forced":58,"../internals/object-get-own-property-descriptor":70,"../internals/path":77}],46:[function(require,module,exports){
module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};

},{}],47:[function(require,module,exports){
var aFunction = require('../internals/a-function');

// optional / simple context binding
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 0: return function () {
      return fn.call(that);
    };
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};

},{"../internals/a-function":19}],48:[function(require,module,exports){
var path = require('../internals/path');
var global = require('../internals/global');

var aFunction = function (variable) {
  return typeof variable == 'function' ? variable : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global[namespace])
    : path[namespace] && path[namespace][method] || global[namespace] && global[namespace][method];
};

},{"../internals/global":49,"../internals/path":77}],49:[function(require,module,exports){
(function (global){(function (){
var check = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports =
  /* global globalThis -- safe */
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  check(typeof self == 'object' && self) ||
  check(typeof global == 'object' && global) ||
  // eslint-disable-next-line no-new-func -- fallback
  (function () { return this; })() || Function('return this')();

}).call(this)}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],50:[function(require,module,exports){
var hasOwnProperty = {}.hasOwnProperty;

module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};

},{}],51:[function(require,module,exports){
module.exports = {};

},{}],52:[function(require,module,exports){
var getBuiltIn = require('../internals/get-built-in');

module.exports = getBuiltIn('document', 'documentElement');

},{"../internals/get-built-in":48}],53:[function(require,module,exports){
var DESCRIPTORS = require('../internals/descriptors');
var fails = require('../internals/fails');
var createElement = require('../internals/document-create-element');

// Thank's IE8 for his funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});

},{"../internals/descriptors":37,"../internals/document-create-element":38,"../internals/fails":46}],54:[function(require,module,exports){
var fails = require('../internals/fails');
var classof = require('../internals/classof-raw');

var split = ''.split;

// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins -- safe
  return !Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) == 'String' ? split.call(it, '') : Object(it);
} : Object;

},{"../internals/classof-raw":29,"../internals/fails":46}],55:[function(require,module,exports){
var store = require('../internals/shared-store');

var functionToString = Function.toString;

// this helper broken in `3.4.1-3.4.4`, so we can't use `shared` helper
if (typeof store.inspectSource != 'function') {
  store.inspectSource = function (it) {
    return functionToString.call(it);
  };
}

module.exports = store.inspectSource;

},{"../internals/shared-store":83}],56:[function(require,module,exports){
var NATIVE_WEAK_MAP = require('../internals/native-weak-map');
var global = require('../internals/global');
var isObject = require('../internals/is-object');
var createNonEnumerableProperty = require('../internals/create-non-enumerable-property');
var objectHas = require('../internals/has');
var shared = require('../internals/shared-store');
var sharedKey = require('../internals/shared-key');
var hiddenKeys = require('../internals/hidden-keys');

var WeakMap = global.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP) {
  var store = shared.state || (shared.state = new WeakMap());
  var wmget = store.get;
  var wmhas = store.has;
  var wmset = store.set;
  set = function (it, metadata) {
    metadata.facade = it;
    wmset.call(store, it, metadata);
    return metadata;
  };
  get = function (it) {
    return wmget.call(store, it) || {};
  };
  has = function (it) {
    return wmhas.call(store, it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;
  set = function (it, metadata) {
    metadata.facade = it;
    createNonEnumerableProperty(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return objectHas(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return objectHas(it, STATE);
  };
}

module.exports = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};

},{"../internals/create-non-enumerable-property":34,"../internals/global":49,"../internals/has":50,"../internals/hidden-keys":51,"../internals/is-object":59,"../internals/native-weak-map":65,"../internals/shared-key":82,"../internals/shared-store":83}],57:[function(require,module,exports){
var classof = require('../internals/classof-raw');

// `IsArray` abstract operation
// https://tc39.es/ecma262/#sec-isarray
module.exports = Array.isArray || function isArray(arg) {
  return classof(arg) == 'Array';
};

},{"../internals/classof-raw":29}],58:[function(require,module,exports){
var fails = require('../internals/fails');

var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true
    : value == NATIVE ? false
    : typeof detection == 'function' ? fails(detection)
    : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';

module.exports = isForced;

},{"../internals/fails":46}],59:[function(require,module,exports){
module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};

},{}],60:[function(require,module,exports){
module.exports = true;

},{}],61:[function(require,module,exports){
var isObject = require('../internals/is-object');
var classof = require('../internals/classof-raw');
var wellKnownSymbol = require('../internals/well-known-symbol');

var MATCH = wellKnownSymbol('match');

// `IsRegExp` abstract operation
// https://tc39.es/ecma262/#sec-isregexp
module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : classof(it) == 'RegExp');
};

},{"../internals/classof-raw":29,"../internals/is-object":59,"../internals/well-known-symbol":94}],62:[function(require,module,exports){
'use strict';
var fails = require('../internals/fails');
var getPrototypeOf = require('../internals/object-get-prototype-of');
var createNonEnumerableProperty = require('../internals/create-non-enumerable-property');
var has = require('../internals/has');
var wellKnownSymbol = require('../internals/well-known-symbol');
var IS_PURE = require('../internals/is-pure');

var ITERATOR = wellKnownSymbol('iterator');
var BUGGY_SAFARI_ITERATORS = false;

var returnThis = function () { return this; };

// `%IteratorPrototype%` object
// https://tc39.es/ecma262/#sec-%iteratorprototype%-object
var IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator;

if ([].keys) {
  arrayIterator = [].keys();
  // Safari 8 has buggy iterators w/o `next`
  if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS = true;
  else {
    PrototypeOfArrayIteratorPrototype = getPrototypeOf(getPrototypeOf(arrayIterator));
    if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype = PrototypeOfArrayIteratorPrototype;
  }
}

var NEW_ITERATOR_PROTOTYPE = IteratorPrototype == undefined || fails(function () {
  var test = {};
  // FF44- legacy iterators case
  return IteratorPrototype[ITERATOR].call(test) !== test;
});

if (NEW_ITERATOR_PROTOTYPE) IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
if ((!IS_PURE || NEW_ITERATOR_PROTOTYPE) && !has(IteratorPrototype, ITERATOR)) {
  createNonEnumerableProperty(IteratorPrototype, ITERATOR, returnThis);
}

module.exports = {
  IteratorPrototype: IteratorPrototype,
  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS
};

},{"../internals/create-non-enumerable-property":34,"../internals/fails":46,"../internals/has":50,"../internals/is-pure":60,"../internals/object-get-prototype-of":71,"../internals/well-known-symbol":94}],63:[function(require,module,exports){
arguments[4][51][0].apply(exports,arguments)
},{"dup":51}],64:[function(require,module,exports){
var IS_NODE = require('../internals/engine-is-node');
var V8_VERSION = require('../internals/engine-v8-version');
var fails = require('../internals/fails');

module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  /* global Symbol -- required for testing */
  return !Symbol.sham &&
    // Chrome 38 Symbol has incorrect toString conversion
    // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
    (IS_NODE ? V8_VERSION === 38 : V8_VERSION > 37 && V8_VERSION < 41);
});

},{"../internals/engine-is-node":40,"../internals/engine-v8-version":42,"../internals/fails":46}],65:[function(require,module,exports){
var global = require('../internals/global');
var inspectSource = require('../internals/inspect-source');

var WeakMap = global.WeakMap;

module.exports = typeof WeakMap === 'function' && /native code/.test(inspectSource(WeakMap));

},{"../internals/global":49,"../internals/inspect-source":55}],66:[function(require,module,exports){
var isRegExp = require('../internals/is-regexp');

module.exports = function (it) {
  if (isRegExp(it)) {
    throw TypeError("The method doesn't accept regular expressions");
  } return it;
};

},{"../internals/is-regexp":61}],67:[function(require,module,exports){
var anObject = require('../internals/an-object');
var defineProperties = require('../internals/object-define-properties');
var enumBugKeys = require('../internals/enum-bug-keys');
var hiddenKeys = require('../internals/hidden-keys');
var html = require('../internals/html');
var documentCreateElement = require('../internals/document-create-element');
var sharedKey = require('../internals/shared-key');

var GT = '>';
var LT = '<';
var PROTOTYPE = 'prototype';
var SCRIPT = 'script';
var IE_PROTO = sharedKey('IE_PROTO');

var EmptyConstructor = function () { /* empty */ };

var scriptTag = function (content) {
  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
};

// Create object with fake `null` prototype: use ActiveX Object with cleared prototype
var NullProtoObjectViaActiveX = function (activeXDocument) {
  activeXDocument.write(scriptTag(''));
  activeXDocument.close();
  var temp = activeXDocument.parentWindow.Object;
  activeXDocument = null; // avoid memory leak
  return temp;
};

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var NullProtoObjectViaIFrame = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement('iframe');
  var JS = 'java' + SCRIPT + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html.appendChild(iframe);
  // https://github.com/zloirock/core-js/issues/475
  iframe.src = String(JS);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(scriptTag('document.F=Object'));
  iframeDocument.close();
  return iframeDocument.F;
};

// Check for document.domain and active x support
// No need to use active x approach when document.domain is not set
// see https://github.com/es-shims/es5-shim/issues/150
// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
// avoid IE GC bug
var activeXDocument;
var NullProtoObject = function () {
  try {
    /* global ActiveXObject -- old IE */
    activeXDocument = document.domain && new ActiveXObject('htmlfile');
  } catch (error) { /* ignore */ }
  NullProtoObject = activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) : NullProtoObjectViaIFrame();
  var length = enumBugKeys.length;
  while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
  return NullProtoObject();
};

hiddenKeys[IE_PROTO] = true;

// `Object.create` method
// https://tc39.es/ecma262/#sec-object.create
module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    EmptyConstructor[PROTOTYPE] = anObject(O);
    result = new EmptyConstructor();
    EmptyConstructor[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = NullProtoObject();
  return Properties === undefined ? result : defineProperties(result, Properties);
};

},{"../internals/an-object":22,"../internals/document-create-element":38,"../internals/enum-bug-keys":44,"../internals/hidden-keys":51,"../internals/html":52,"../internals/object-define-properties":68,"../internals/shared-key":82}],68:[function(require,module,exports){
var DESCRIPTORS = require('../internals/descriptors');
var definePropertyModule = require('../internals/object-define-property');
var anObject = require('../internals/an-object');
var objectKeys = require('../internals/object-keys');

// `Object.defineProperties` method
// https://tc39.es/ecma262/#sec-object.defineproperties
module.exports = DESCRIPTORS ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = objectKeys(Properties);
  var length = keys.length;
  var index = 0;
  var key;
  while (length > index) definePropertyModule.f(O, key = keys[index++], Properties[key]);
  return O;
};

},{"../internals/an-object":22,"../internals/descriptors":37,"../internals/object-define-property":69,"../internals/object-keys":73}],69:[function(require,module,exports){
var DESCRIPTORS = require('../internals/descriptors');
var IE8_DOM_DEFINE = require('../internals/ie8-dom-define');
var anObject = require('../internals/an-object');
var toPrimitive = require('../internals/to-primitive');

var nativeDefineProperty = Object.defineProperty;

// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? nativeDefineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return nativeDefineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};

},{"../internals/an-object":22,"../internals/descriptors":37,"../internals/ie8-dom-define":53,"../internals/to-primitive":90}],70:[function(require,module,exports){
var DESCRIPTORS = require('../internals/descriptors');
var propertyIsEnumerableModule = require('../internals/object-property-is-enumerable');
var createPropertyDescriptor = require('../internals/create-property-descriptor');
var toIndexedObject = require('../internals/to-indexed-object');
var toPrimitive = require('../internals/to-primitive');
var has = require('../internals/has');
var IE8_DOM_DEFINE = require('../internals/ie8-dom-define');

var nativeGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? nativeGetOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return nativeGetOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (has(O, P)) return createPropertyDescriptor(!propertyIsEnumerableModule.f.call(O, P), O[P]);
};

},{"../internals/create-property-descriptor":35,"../internals/descriptors":37,"../internals/has":50,"../internals/ie8-dom-define":53,"../internals/object-property-is-enumerable":74,"../internals/to-indexed-object":86,"../internals/to-primitive":90}],71:[function(require,module,exports){
var has = require('../internals/has');
var toObject = require('../internals/to-object');
var sharedKey = require('../internals/shared-key');
var CORRECT_PROTOTYPE_GETTER = require('../internals/correct-prototype-getter');

var IE_PROTO = sharedKey('IE_PROTO');
var ObjectPrototype = Object.prototype;

// `Object.getPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.getprototypeof
module.exports = CORRECT_PROTOTYPE_GETTER ? Object.getPrototypeOf : function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectPrototype : null;
};

},{"../internals/correct-prototype-getter":32,"../internals/has":50,"../internals/shared-key":82,"../internals/to-object":89}],72:[function(require,module,exports){
var has = require('../internals/has');
var toIndexedObject = require('../internals/to-indexed-object');
var indexOf = require('../internals/array-includes').indexOf;
var hiddenKeys = require('../internals/hidden-keys');

module.exports = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !has(hiddenKeys, key) && has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~indexOf(result, key) || result.push(key);
  }
  return result;
};

},{"../internals/array-includes":24,"../internals/has":50,"../internals/hidden-keys":51,"../internals/to-indexed-object":86}],73:[function(require,module,exports){
var internalObjectKeys = require('../internals/object-keys-internal');
var enumBugKeys = require('../internals/enum-bug-keys');

// `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
module.exports = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys);
};

},{"../internals/enum-bug-keys":44,"../internals/object-keys-internal":72}],74:[function(require,module,exports){
'use strict';
var nativePropertyIsEnumerable = {}.propertyIsEnumerable;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !nativePropertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : nativePropertyIsEnumerable;

},{}],75:[function(require,module,exports){
/* eslint-disable no-proto -- safe */
var anObject = require('../internals/an-object');
var aPossiblePrototype = require('../internals/a-possible-prototype');

// `Object.setPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.setprototypeof
// Works with __proto__ only. Old v8 can't work with null proto objects.
module.exports = Object.setPrototypeOf || ('__proto__' in {} ? function () {
  var CORRECT_SETTER = false;
  var test = {};
  var setter;
  try {
    setter = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set;
    setter.call(test, []);
    CORRECT_SETTER = test instanceof Array;
  } catch (error) { /* empty */ }
  return function setPrototypeOf(O, proto) {
    anObject(O);
    aPossiblePrototype(proto);
    if (CORRECT_SETTER) setter.call(O, proto);
    else O.__proto__ = proto;
    return O;
  };
}() : undefined);

},{"../internals/a-possible-prototype":20,"../internals/an-object":22}],76:[function(require,module,exports){
'use strict';
var TO_STRING_TAG_SUPPORT = require('../internals/to-string-tag-support');
var classof = require('../internals/classof');

// `Object.prototype.toString` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.tostring
module.exports = TO_STRING_TAG_SUPPORT ? {}.toString : function toString() {
  return '[object ' + classof(this) + ']';
};

},{"../internals/classof":30,"../internals/to-string-tag-support":91}],77:[function(require,module,exports){
arguments[4][51][0].apply(exports,arguments)
},{"dup":51}],78:[function(require,module,exports){
var createNonEnumerableProperty = require('../internals/create-non-enumerable-property');

module.exports = function (target, key, value, options) {
  if (options && options.enumerable) target[key] = value;
  else createNonEnumerableProperty(target, key, value);
};

},{"../internals/create-non-enumerable-property":34}],79:[function(require,module,exports){
// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on " + it);
  return it;
};

},{}],80:[function(require,module,exports){
var global = require('../internals/global');
var createNonEnumerableProperty = require('../internals/create-non-enumerable-property');

module.exports = function (key, value) {
  try {
    createNonEnumerableProperty(global, key, value);
  } catch (error) {
    global[key] = value;
  } return value;
};

},{"../internals/create-non-enumerable-property":34,"../internals/global":49}],81:[function(require,module,exports){
var TO_STRING_TAG_SUPPORT = require('../internals/to-string-tag-support');
var defineProperty = require('../internals/object-define-property').f;
var createNonEnumerableProperty = require('../internals/create-non-enumerable-property');
var has = require('../internals/has');
var toString = require('../internals/object-to-string');
var wellKnownSymbol = require('../internals/well-known-symbol');

var TO_STRING_TAG = wellKnownSymbol('toStringTag');

module.exports = function (it, TAG, STATIC, SET_METHOD) {
  if (it) {
    var target = STATIC ? it : it.prototype;
    if (!has(target, TO_STRING_TAG)) {
      defineProperty(target, TO_STRING_TAG, { configurable: true, value: TAG });
    }
    if (SET_METHOD && !TO_STRING_TAG_SUPPORT) {
      createNonEnumerableProperty(target, 'toString', toString);
    }
  }
};

},{"../internals/create-non-enumerable-property":34,"../internals/has":50,"../internals/object-define-property":69,"../internals/object-to-string":76,"../internals/to-string-tag-support":91,"../internals/well-known-symbol":94}],82:[function(require,module,exports){
var shared = require('../internals/shared');
var uid = require('../internals/uid');

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};

},{"../internals/shared":84,"../internals/uid":92}],83:[function(require,module,exports){
var global = require('../internals/global');
var setGlobal = require('../internals/set-global');

var SHARED = '__core-js_shared__';
var store = global[SHARED] || setGlobal(SHARED, {});

module.exports = store;

},{"../internals/global":49,"../internals/set-global":80}],84:[function(require,module,exports){
var IS_PURE = require('../internals/is-pure');
var store = require('../internals/shared-store');

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.9.1',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2021 Denis Pushkarev (zloirock.ru)'
});

},{"../internals/is-pure":60,"../internals/shared-store":83}],85:[function(require,module,exports){
var toInteger = require('../internals/to-integer');

var max = Math.max;
var min = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
module.exports = function (index, length) {
  var integer = toInteger(index);
  return integer < 0 ? max(integer + length, 0) : min(integer, length);
};

},{"../internals/to-integer":87}],86:[function(require,module,exports){
// toObject with fallback for non-array-like ES3 strings
var IndexedObject = require('../internals/indexed-object');
var requireObjectCoercible = require('../internals/require-object-coercible');

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};

},{"../internals/indexed-object":54,"../internals/require-object-coercible":79}],87:[function(require,module,exports){
var ceil = Math.ceil;
var floor = Math.floor;

// `ToInteger` abstract operation
// https://tc39.es/ecma262/#sec-tointeger
module.exports = function (argument) {
  return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
};

},{}],88:[function(require,module,exports){
var toInteger = require('../internals/to-integer');

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
module.exports = function (argument) {
  return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};

},{"../internals/to-integer":87}],89:[function(require,module,exports){
var requireObjectCoercible = require('../internals/require-object-coercible');

// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
module.exports = function (argument) {
  return Object(requireObjectCoercible(argument));
};

},{"../internals/require-object-coercible":79}],90:[function(require,module,exports){
var isObject = require('../internals/is-object');

// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (input, PREFERRED_STRING) {
  if (!isObject(input)) return input;
  var fn, val;
  if (PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  if (typeof (fn = input.valueOf) == 'function' && !isObject(val = fn.call(input))) return val;
  if (!PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  throw TypeError("Can't convert object to primitive value");
};

},{"../internals/is-object":59}],91:[function(require,module,exports){
var wellKnownSymbol = require('../internals/well-known-symbol');

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var test = {};

test[TO_STRING_TAG] = 'z';

module.exports = String(test) === '[object z]';

},{"../internals/well-known-symbol":94}],92:[function(require,module,exports){
var id = 0;
var postfix = Math.random();

module.exports = function (key) {
  return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);
};

},{}],93:[function(require,module,exports){
var NATIVE_SYMBOL = require('../internals/native-symbol');

module.exports = NATIVE_SYMBOL
  /* global Symbol -- safe */
  && !Symbol.sham
  && typeof Symbol.iterator == 'symbol';

},{"../internals/native-symbol":64}],94:[function(require,module,exports){
var global = require('../internals/global');
var shared = require('../internals/shared');
var has = require('../internals/has');
var uid = require('../internals/uid');
var NATIVE_SYMBOL = require('../internals/native-symbol');
var USE_SYMBOL_AS_UID = require('../internals/use-symbol-as-uid');

var WellKnownSymbolsStore = shared('wks');
var Symbol = global.Symbol;
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol : Symbol && Symbol.withoutSetter || uid;

module.exports = function (name) {
  if (!has(WellKnownSymbolsStore, name) || !(NATIVE_SYMBOL || typeof WellKnownSymbolsStore[name] == 'string')) {
    if (NATIVE_SYMBOL && has(Symbol, name)) {
      WellKnownSymbolsStore[name] = Symbol[name];
    } else {
      WellKnownSymbolsStore[name] = createWellKnownSymbol('Symbol.' + name);
    }
  } return WellKnownSymbolsStore[name];
};

},{"../internals/global":49,"../internals/has":50,"../internals/native-symbol":64,"../internals/shared":84,"../internals/uid":92,"../internals/use-symbol-as-uid":93}],95:[function(require,module,exports){
'use strict';
var $ = require('../internals/export');
var $findIndex = require('../internals/array-iteration').findIndex;
var addToUnscopables = require('../internals/add-to-unscopables');

var FIND_INDEX = 'findIndex';
var SKIPS_HOLES = true;

// Shouldn't skip holes
if (FIND_INDEX in []) Array(1)[FIND_INDEX](function () { SKIPS_HOLES = false; });

// `Array.prototype.findIndex` method
// https://tc39.es/ecma262/#sec-array.prototype.findindex
$({ target: 'Array', proto: true, forced: SKIPS_HOLES }, {
  findIndex: function findIndex(callbackfn /* , that = undefined */) {
    return $findIndex(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables(FIND_INDEX);

},{"../internals/add-to-unscopables":21,"../internals/array-iteration":25,"../internals/export":45}],96:[function(require,module,exports){
'use strict';
var $ = require('../internals/export');
var forEach = require('../internals/array-for-each');

// `Array.prototype.forEach` method
// https://tc39.es/ecma262/#sec-array.prototype.foreach
$({ target: 'Array', proto: true, forced: [].forEach != forEach }, {
  forEach: forEach
});

},{"../internals/array-for-each":23,"../internals/export":45}],97:[function(require,module,exports){
'use strict';
var $ = require('../internals/export');
var $includes = require('../internals/array-includes').includes;
var addToUnscopables = require('../internals/add-to-unscopables');

// `Array.prototype.includes` method
// https://tc39.es/ecma262/#sec-array.prototype.includes
$({ target: 'Array', proto: true }, {
  includes: function includes(el /* , fromIndex = 0 */) {
    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
  }
});

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('includes');

},{"../internals/add-to-unscopables":21,"../internals/array-includes":24,"../internals/export":45}],98:[function(require,module,exports){
'use strict';
var toIndexedObject = require('../internals/to-indexed-object');
var addToUnscopables = require('../internals/add-to-unscopables');
var Iterators = require('../internals/iterators');
var InternalStateModule = require('../internals/internal-state');
var defineIterator = require('../internals/define-iterator');

var ARRAY_ITERATOR = 'Array Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(ARRAY_ITERATOR);

// `Array.prototype.entries` method
// https://tc39.es/ecma262/#sec-array.prototype.entries
// `Array.prototype.keys` method
// https://tc39.es/ecma262/#sec-array.prototype.keys
// `Array.prototype.values` method
// https://tc39.es/ecma262/#sec-array.prototype.values
// `Array.prototype[@@iterator]` method
// https://tc39.es/ecma262/#sec-array.prototype-@@iterator
// `CreateArrayIterator` internal method
// https://tc39.es/ecma262/#sec-createarrayiterator
module.exports = defineIterator(Array, 'Array', function (iterated, kind) {
  setInternalState(this, {
    type: ARRAY_ITERATOR,
    target: toIndexedObject(iterated), // target
    index: 0,                          // next index
    kind: kind                         // kind
  });
// `%ArrayIteratorPrototype%.next` method
// https://tc39.es/ecma262/#sec-%arrayiteratorprototype%.next
}, function () {
  var state = getInternalState(this);
  var target = state.target;
  var kind = state.kind;
  var index = state.index++;
  if (!target || index >= target.length) {
    state.target = undefined;
    return { value: undefined, done: true };
  }
  if (kind == 'keys') return { value: index, done: false };
  if (kind == 'values') return { value: target[index], done: false };
  return { value: [index, target[index]], done: false };
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values%
// https://tc39.es/ecma262/#sec-createunmappedargumentsobject
// https://tc39.es/ecma262/#sec-createmappedargumentsobject
Iterators.Arguments = Iterators.Array;

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');

},{"../internals/add-to-unscopables":21,"../internals/define-iterator":36,"../internals/internal-state":56,"../internals/iterators":63,"../internals/to-indexed-object":86}],99:[function(require,module,exports){
'use strict';
var $ = require('../internals/export');
var $reduce = require('../internals/array-reduce').left;
var arrayMethodIsStrict = require('../internals/array-method-is-strict');
var CHROME_VERSION = require('../internals/engine-v8-version');
var IS_NODE = require('../internals/engine-is-node');

var STRICT_METHOD = arrayMethodIsStrict('reduce');
// Chrome 80-82 has a critical bug
// https://bugs.chromium.org/p/chromium/issues/detail?id=1049982
var CHROME_BUG = !IS_NODE && CHROME_VERSION > 79 && CHROME_VERSION < 83;

// `Array.prototype.reduce` method
// https://tc39.es/ecma262/#sec-array.prototype.reduce
$({ target: 'Array', proto: true, forced: !STRICT_METHOD || CHROME_BUG }, {
  reduce: function reduce(callbackfn /* , initialValue */) {
    return $reduce(this, callbackfn, arguments.length, arguments.length > 1 ? arguments[1] : undefined);
  }
});

},{"../internals/array-method-is-strict":26,"../internals/array-reduce":27,"../internals/engine-is-node":40,"../internals/engine-v8-version":42,"../internals/export":45}],100:[function(require,module,exports){
'use strict';
var $ = require('../internals/export');
var $some = require('../internals/array-iteration').some;
var arrayMethodIsStrict = require('../internals/array-method-is-strict');

var STRICT_METHOD = arrayMethodIsStrict('some');

// `Array.prototype.some` method
// https://tc39.es/ecma262/#sec-array.prototype.some
$({ target: 'Array', proto: true, forced: !STRICT_METHOD }, {
  some: function some(callbackfn /* , thisArg */) {
    return $some(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});

},{"../internals/array-iteration":25,"../internals/array-method-is-strict":26,"../internals/export":45}],101:[function(require,module,exports){
'use strict';
var $ = require('../internals/export');
var notARegExp = require('../internals/not-a-regexp');
var requireObjectCoercible = require('../internals/require-object-coercible');
var correctIsRegExpLogic = require('../internals/correct-is-regexp-logic');

// `String.prototype.includes` method
// https://tc39.es/ecma262/#sec-string.prototype.includes
$({ target: 'String', proto: true, forced: !correctIsRegExpLogic('includes') }, {
  includes: function includes(searchString /* , position = 0 */) {
    return !!~String(requireObjectCoercible(this))
      .indexOf(notARegExp(searchString), arguments.length > 1 ? arguments[1] : undefined);
  }
});

},{"../internals/correct-is-regexp-logic":31,"../internals/export":45,"../internals/not-a-regexp":66,"../internals/require-object-coercible":79}],102:[function(require,module,exports){
require('./es.array.iterator');
var DOMIterables = require('../internals/dom-iterables');
var global = require('../internals/global');
var classof = require('../internals/classof');
var createNonEnumerableProperty = require('../internals/create-non-enumerable-property');
var Iterators = require('../internals/iterators');
var wellKnownSymbol = require('../internals/well-known-symbol');

var TO_STRING_TAG = wellKnownSymbol('toStringTag');

for (var COLLECTION_NAME in DOMIterables) {
  var Collection = global[COLLECTION_NAME];
  var CollectionPrototype = Collection && Collection.prototype;
  if (CollectionPrototype && classof(CollectionPrototype) !== TO_STRING_TAG) {
    createNonEnumerableProperty(CollectionPrototype, TO_STRING_TAG, COLLECTION_NAME);
  }
  Iterators[COLLECTION_NAME] = Iterators.Array;
}

},{"../internals/classof":30,"../internals/create-non-enumerable-property":34,"../internals/dom-iterables":39,"../internals/global":49,"../internals/iterators":63,"../internals/well-known-symbol":94,"./es.array.iterator":98}],103:[function(require,module,exports){
var $ = require('../internals/export');
var global = require('../internals/global');
var userAgent = require('../internals/engine-user-agent');

var slice = [].slice;
var MSIE = /MSIE .\./.test(userAgent); // <- dirty ie9- check

var wrap = function (scheduler) {
  return function (handler, timeout /* , ...arguments */) {
    var boundArgs = arguments.length > 2;
    var args = boundArgs ? slice.call(arguments, 2) : undefined;
    return scheduler(boundArgs ? function () {
      // eslint-disable-next-line no-new-func -- spec requirement
      (typeof handler == 'function' ? handler : Function(handler)).apply(this, args);
    } : handler, timeout);
  };
};

// ie9- setTimeout & setInterval additional parameters fix
// https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#timers
$({ global: true, bind: true, forced: MSIE }, {
  // `setTimeout` method
  // https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-settimeout
  setTimeout: wrap(global.setTimeout),
  // `setInterval` method
  // https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-setinterval
  setInterval: wrap(global.setInterval)
});

},{"../internals/engine-user-agent":41,"../internals/export":45,"../internals/global":49}],104:[function(require,module,exports){
var parent = require('../../../es/array/virtual/for-each');

module.exports = parent;

},{"../../../es/array/virtual/for-each":10}],105:[function(require,module,exports){
var parent = require('../../es/instance/find-index');

module.exports = parent;

},{"../../es/instance/find-index":14}],106:[function(require,module,exports){
require('../../modules/web.dom-collections.iterator');
var forEach = require('../array/virtual/for-each');
var classof = require('../../internals/classof');
var ArrayPrototype = Array.prototype;

var DOMIterables = {
  DOMTokenList: true,
  NodeList: true
};

module.exports = function (it) {
  var own = it.forEach;
  return it === ArrayPrototype || (it instanceof Array && own === ArrayPrototype.forEach)
    // eslint-disable-next-line no-prototype-builtins -- safe
    || DOMIterables.hasOwnProperty(classof(it)) ? forEach : own;
};

},{"../../internals/classof":30,"../../modules/web.dom-collections.iterator":102,"../array/virtual/for-each":104}],107:[function(require,module,exports){
var parent = require('../../es/instance/includes');

module.exports = parent;

},{"../../es/instance/includes":15}],108:[function(require,module,exports){
var parent = require('../../es/instance/reduce');

module.exports = parent;

},{"../../es/instance/reduce":16}],109:[function(require,module,exports){
var parent = require('../../es/instance/some');

module.exports = parent;

},{"../../es/instance/some":17}],110:[function(require,module,exports){
require('../modules/web.timers');
var path = require('../internals/path');

module.exports = path.setTimeout;

},{"../internals/path":77,"../modules/web.timers":103}],111:[function(require,module,exports){
/*!
 * jQuery JavaScript Library v3.6.0
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2021-03-02T17:08Z
 */
( function( global, factory ) {

	"use strict";

	if ( typeof module === "object" && typeof module.exports === "object" ) {

		// For CommonJS and CommonJS-like environments where a proper `window`
		// is present, execute the factory and get jQuery.
		// For environments that do not have a `window` with a `document`
		// (such as Node.js), expose a factory as module.exports.
		// This accentuates the need for the creation of a real `window`.
		// e.g. var jQuery = require("jquery")(window);
		// See ticket #14549 for more info.
		module.exports = global.document ?
			factory( global, true ) :
			function( w ) {
				if ( !w.document ) {
					throw new Error( "jQuery requires a window with a document" );
				}
				return factory( w );
			};
	} else {
		factory( global );
	}

// Pass this if window is not defined yet
} )( typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
// enough that all such attempts are guarded in a try block.
"use strict";

var arr = [];

var getProto = Object.getPrototypeOf;

var slice = arr.slice;

var flat = arr.flat ? function( array ) {
	return arr.flat.call( array );
} : function( array ) {
	return arr.concat.apply( [], array );
};


var push = arr.push;

var indexOf = arr.indexOf;

var class2type = {};

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var fnToString = hasOwn.toString;

var ObjectFunctionString = fnToString.call( Object );

var support = {};

var isFunction = function isFunction( obj ) {

		// Support: Chrome <=57, Firefox <=52
		// In some browsers, typeof returns "function" for HTML <object> elements
		// (i.e., `typeof document.createElement( "object" ) === "function"`).
		// We don't want to classify *any* DOM node as a function.
		// Support: QtWeb <=3.8.5, WebKit <=534.34, wkhtmltopdf tool <=0.12.5
		// Plus for old WebKit, typeof returns "function" for HTML collections
		// (e.g., `typeof document.getElementsByTagName("div") === "function"`). (gh-4756)
		return typeof obj === "function" && typeof obj.nodeType !== "number" &&
			typeof obj.item !== "function";
	};


var isWindow = function isWindow( obj ) {
		return obj != null && obj === obj.window;
	};


var document = window.document;



	var preservedScriptAttributes = {
		type: true,
		src: true,
		nonce: true,
		noModule: true
	};

	function DOMEval( code, node, doc ) {
		doc = doc || document;

		var i, val,
			script = doc.createElement( "script" );

		script.text = code;
		if ( node ) {
			for ( i in preservedScriptAttributes ) {

				// Support: Firefox 64+, Edge 18+
				// Some browsers don't support the "nonce" property on scripts.
				// On the other hand, just using `getAttribute` is not enough as
				// the `nonce` attribute is reset to an empty string whenever it
				// becomes browsing-context connected.
				// See https://github.com/whatwg/html/issues/2369
				// See https://html.spec.whatwg.org/#nonce-attributes
				// The `node.getAttribute` check was added for the sake of
				// `jQuery.globalEval` so that it can fake a nonce-containing node
				// via an object.
				val = node[ i ] || node.getAttribute && node.getAttribute( i );
				if ( val ) {
					script.setAttribute( i, val );
				}
			}
		}
		doc.head.appendChild( script ).parentNode.removeChild( script );
	}


function toType( obj ) {
	if ( obj == null ) {
		return obj + "";
	}

	// Support: Android <=2.3 only (functionish RegExp)
	return typeof obj === "object" || typeof obj === "function" ?
		class2type[ toString.call( obj ) ] || "object" :
		typeof obj;
}
/* global Symbol */
// Defining this global in .eslintrc.json would create a danger of using the global
// unguarded in another place, it seems safer to define global only for this module



var
	version = "3.6.0",

	// Define a local copy of jQuery
	jQuery = function( selector, context ) {

		// The jQuery object is actually just the init constructor 'enhanced'
		// Need init if jQuery is called (just allow error to be thrown if not included)
		return new jQuery.fn.init( selector, context );
	};

jQuery.fn = jQuery.prototype = {

	// The current version of jQuery being used
	jquery: version,

	constructor: jQuery,

	// The default length of a jQuery object is 0
	length: 0,

	toArray: function() {
		return slice.call( this );
	},

	// Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get: function( num ) {

		// Return all the elements in a clean array
		if ( num == null ) {
			return slice.call( this );
		}

		// Return just the one element from the set
		return num < 0 ? this[ num + this.length ] : this[ num ];
	},

	// Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack: function( elems ) {

		// Build a new jQuery matched element set
		var ret = jQuery.merge( this.constructor(), elems );

		// Add the old object onto the stack (as a reference)
		ret.prevObject = this;

		// Return the newly-formed element set
		return ret;
	},

	// Execute a callback for every element in the matched set.
	each: function( callback ) {
		return jQuery.each( this, callback );
	},

	map: function( callback ) {
		return this.pushStack( jQuery.map( this, function( elem, i ) {
			return callback.call( elem, i, elem );
		} ) );
	},

	slice: function() {
		return this.pushStack( slice.apply( this, arguments ) );
	},

	first: function() {
		return this.eq( 0 );
	},

	last: function() {
		return this.eq( -1 );
	},

	even: function() {
		return this.pushStack( jQuery.grep( this, function( _elem, i ) {
			return ( i + 1 ) % 2;
		} ) );
	},

	odd: function() {
		return this.pushStack( jQuery.grep( this, function( _elem, i ) {
			return i % 2;
		} ) );
	},

	eq: function( i ) {
		var len = this.length,
			j = +i + ( i < 0 ? len : 0 );
		return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
	},

	end: function() {
		return this.prevObject || this.constructor();
	},

	// For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push: push,
	sort: arr.sort,
	splice: arr.splice
};

jQuery.extend = jQuery.fn.extend = function() {
	var options, name, src, copy, copyIsArray, clone,
		target = arguments[ 0 ] || {},
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;

		// Skip the boolean and the target
		target = arguments[ i ] || {};
		i++;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !isFunction( target ) ) {
		target = {};
	}

	// Extend jQuery itself if only one argument is passed
	if ( i === length ) {
		target = this;
		i--;
	}

	for ( ; i < length; i++ ) {

		// Only deal with non-null/undefined values
		if ( ( options = arguments[ i ] ) != null ) {

			// Extend the base object
			for ( name in options ) {
				copy = options[ name ];

				// Prevent Object.prototype pollution
				// Prevent never-ending loop
				if ( name === "__proto__" || target === copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
					( copyIsArray = Array.isArray( copy ) ) ) ) {
					src = target[ name ];

					// Ensure proper type for the source value
					if ( copyIsArray && !Array.isArray( src ) ) {
						clone = [];
					} else if ( !copyIsArray && !jQuery.isPlainObject( src ) ) {
						clone = {};
					} else {
						clone = src;
					}
					copyIsArray = false;

					// Never move original objects, clone them
					target[ name ] = jQuery.extend( deep, clone, copy );

				// Don't bring in undefined values
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
};

jQuery.extend( {

	// Unique for each copy of jQuery on the page
	expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

	// Assume jQuery is ready without the ready module
	isReady: true,

	error: function( msg ) {
		throw new Error( msg );
	},

	noop: function() {},

	isPlainObject: function( obj ) {
		var proto, Ctor;

		// Detect obvious negatives
		// Use toString instead of jQuery.type to catch host objects
		if ( !obj || toString.call( obj ) !== "[object Object]" ) {
			return false;
		}

		proto = getProto( obj );

		// Objects with no prototype (e.g., `Object.create( null )`) are plain
		if ( !proto ) {
			return true;
		}

		// Objects with prototype are plain iff they were constructed by a global Object function
		Ctor = hasOwn.call( proto, "constructor" ) && proto.constructor;
		return typeof Ctor === "function" && fnToString.call( Ctor ) === ObjectFunctionString;
	},

	isEmptyObject: function( obj ) {
		var name;

		for ( name in obj ) {
			return false;
		}
		return true;
	},

	// Evaluates a script in a provided context; falls back to the global one
	// if not specified.
	globalEval: function( code, options, doc ) {
		DOMEval( code, { nonce: options && options.nonce }, doc );
	},

	each: function( obj, callback ) {
		var length, i = 0;

		if ( isArrayLike( obj ) ) {
			length = obj.length;
			for ( ; i < length; i++ ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		} else {
			for ( i in obj ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		}

		return obj;
	},

	// results is for internal usage only
	makeArray: function( arr, results ) {
		var ret = results || [];

		if ( arr != null ) {
			if ( isArrayLike( Object( arr ) ) ) {
				jQuery.merge( ret,
					typeof arr === "string" ?
						[ arr ] : arr
				);
			} else {
				push.call( ret, arr );
			}
		}

		return ret;
	},

	inArray: function( elem, arr, i ) {
		return arr == null ? -1 : indexOf.call( arr, elem, i );
	},

	// Support: Android <=4.0 only, PhantomJS 1 only
	// push.apply(_, arraylike) throws on ancient WebKit
	merge: function( first, second ) {
		var len = +second.length,
			j = 0,
			i = first.length;

		for ( ; j < len; j++ ) {
			first[ i++ ] = second[ j ];
		}

		first.length = i;

		return first;
	},

	grep: function( elems, callback, invert ) {
		var callbackInverse,
			matches = [],
			i = 0,
			length = elems.length,
			callbackExpect = !invert;

		// Go through the array, only saving the items
		// that pass the validator function
		for ( ; i < length; i++ ) {
			callbackInverse = !callback( elems[ i ], i );
			if ( callbackInverse !== callbackExpect ) {
				matches.push( elems[ i ] );
			}
		}

		return matches;
	},

	// arg is for internal usage only
	map: function( elems, callback, arg ) {
		var length, value,
			i = 0,
			ret = [];

		// Go through the array, translating each of the items to their new values
		if ( isArrayLike( elems ) ) {
			length = elems.length;
			for ( ; i < length; i++ ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}

		// Go through every key on the object,
		} else {
			for ( i in elems ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}
		}

		// Flatten any nested arrays
		return flat( ret );
	},

	// A global GUID counter for objects
	guid: 1,

	// jQuery.support is not used in Core but other projects attach their
	// properties to it so it needs to exist.
	support: support
} );

if ( typeof Symbol === "function" ) {
	jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
}

// Populate the class2type map
jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
	function( _i, name ) {
		class2type[ "[object " + name + "]" ] = name.toLowerCase();
	} );

function isArrayLike( obj ) {

	// Support: real iOS 8.2 only (not reproducible in simulator)
	// `in` check used to prevent JIT error (gh-2145)
	// hasOwn isn't used here due to false negatives
	// regarding Nodelist length in IE
	var length = !!obj && "length" in obj && obj.length,
		type = toType( obj );

	if ( isFunction( obj ) || isWindow( obj ) ) {
		return false;
	}

	return type === "array" || length === 0 ||
		typeof length === "number" && length > 0 && ( length - 1 ) in obj;
}
var Sizzle =
/*!
 * Sizzle CSS Selector Engine v2.3.6
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://js.foundation/
 *
 * Date: 2021-02-16
 */
( function( window ) {
var i,
	support,
	Expr,
	getText,
	isXML,
	tokenize,
	compile,
	select,
	outermostContext,
	sortInput,
	hasDuplicate,

	// Local document vars
	setDocument,
	document,
	docElem,
	documentIsHTML,
	rbuggyQSA,
	rbuggyMatches,
	matches,
	contains,

	// Instance-specific data
	expando = "sizzle" + 1 * new Date(),
	preferredDoc = window.document,
	dirruns = 0,
	done = 0,
	classCache = createCache(),
	tokenCache = createCache(),
	compilerCache = createCache(),
	nonnativeSelectorCache = createCache(),
	sortOrder = function( a, b ) {
		if ( a === b ) {
			hasDuplicate = true;
		}
		return 0;
	},

	// Instance methods
	hasOwn = ( {} ).hasOwnProperty,
	arr = [],
	pop = arr.pop,
	pushNative = arr.push,
	push = arr.push,
	slice = arr.slice,

	// Use a stripped-down indexOf as it's faster than native
	// https://jsperf.com/thor-indexof-vs-for/5
	indexOf = function( list, elem ) {
		var i = 0,
			len = list.length;
		for ( ; i < len; i++ ) {
			if ( list[ i ] === elem ) {
				return i;
			}
		}
		return -1;
	},

	booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|" +
		"ismap|loop|multiple|open|readonly|required|scoped",

	// Regular expressions

	// http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace = "[\\x20\\t\\r\\n\\f]",

	// https://www.w3.org/TR/css-syntax-3/#ident-token-diagram
	identifier = "(?:\\\\[\\da-fA-F]{1,6}" + whitespace +
		"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",

	// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
	attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +

		// Operator (capture 2)
		"*([*^$|!~]?=)" + whitespace +

		// "Attribute values must be CSS identifiers [capture 5]
		// or strings [capture 3 or capture 4]"
		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" +
		whitespace + "*\\]",

	pseudos = ":(" + identifier + ")(?:\\((" +

		// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
		// 1. quoted (capture 3; capture 4 or capture 5)
		"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +

		// 2. simple (capture 6)
		"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +

		// 3. anything else (capture 2)
		".*" +
		")\\)|)",

	// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
	rwhitespace = new RegExp( whitespace + "+", "g" ),
	rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" +
		whitespace + "+$", "g" ),

	rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
	rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace +
		"*" ),
	rdescend = new RegExp( whitespace + "|>" ),

	rpseudo = new RegExp( pseudos ),
	ridentifier = new RegExp( "^" + identifier + "$" ),

	matchExpr = {
		"ID": new RegExp( "^#(" + identifier + ")" ),
		"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
		"TAG": new RegExp( "^(" + identifier + "|[*])" ),
		"ATTR": new RegExp( "^" + attributes ),
		"PSEUDO": new RegExp( "^" + pseudos ),
		"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
			whitespace + "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" +
			whitespace + "*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
		"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),

		// For use in libraries implementing .is()
		// We use this for POS matching in `select`
		"needsContext": new RegExp( "^" + whitespace +
			"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + whitespace +
			"*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
	},

	rhtml = /HTML$/i,
	rinputs = /^(?:input|select|textarea|button)$/i,
	rheader = /^h\d$/i,

	rnative = /^[^{]+\{\s*\[native \w/,

	// Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	rsibling = /[+~]/,

	// CSS escapes
	// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp( "\\\\[\\da-fA-F]{1,6}" + whitespace + "?|\\\\([^\\r\\n\\f])", "g" ),
	funescape = function( escape, nonHex ) {
		var high = "0x" + escape.slice( 1 ) - 0x10000;

		return nonHex ?

			// Strip the backslash prefix from a non-hex escape sequence
			nonHex :

			// Replace a hexadecimal escape sequence with the encoded Unicode code point
			// Support: IE <=11+
			// For values outside the Basic Multilingual Plane (BMP), manually construct a
			// surrogate pair
			high < 0 ?
				String.fromCharCode( high + 0x10000 ) :
				String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
	},

	// CSS string/identifier serialization
	// https://drafts.csswg.org/cssom/#common-serializing-idioms
	rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
	fcssescape = function( ch, asCodePoint ) {
		if ( asCodePoint ) {

			// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
			if ( ch === "\0" ) {
				return "\uFFFD";
			}

			// Control characters and (dependent upon position) numbers get escaped as code points
			return ch.slice( 0, -1 ) + "\\" +
				ch.charCodeAt( ch.length - 1 ).toString( 16 ) + " ";
		}

		// Other potentially-special ASCII characters get backslash-escaped
		return "\\" + ch;
	},

	// Used for iframes
	// See setDocument()
	// Removing the function wrapper causes a "Permission Denied"
	// error in IE
	unloadHandler = function() {
		setDocument();
	},

	inDisabledFieldset = addCombinator(
		function( elem ) {
			return elem.disabled === true && elem.nodeName.toLowerCase() === "fieldset";
		},
		{ dir: "parentNode", next: "legend" }
	);

// Optimize for push.apply( _, NodeList )
try {
	push.apply(
		( arr = slice.call( preferredDoc.childNodes ) ),
		preferredDoc.childNodes
	);

	// Support: Android<4.0
	// Detect silently failing push.apply
	// eslint-disable-next-line no-unused-expressions
	arr[ preferredDoc.childNodes.length ].nodeType;
} catch ( e ) {
	push = { apply: arr.length ?

		// Leverage slice if possible
		function( target, els ) {
			pushNative.apply( target, slice.call( els ) );
		} :

		// Support: IE<9
		// Otherwise append directly
		function( target, els ) {
			var j = target.length,
				i = 0;

			// Can't trust NodeList.length
			while ( ( target[ j++ ] = els[ i++ ] ) ) {}
			target.length = j - 1;
		}
	};
}

function Sizzle( selector, context, results, seed ) {
	var m, i, elem, nid, match, groups, newSelector,
		newContext = context && context.ownerDocument,

		// nodeType defaults to 9, since context defaults to document
		nodeType = context ? context.nodeType : 9;

	results = results || [];

	// Return early from calls with invalid selector or context
	if ( typeof selector !== "string" || !selector ||
		nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

		return results;
	}

	// Try to shortcut find operations (as opposed to filters) in HTML documents
	if ( !seed ) {
		setDocument( context );
		context = context || document;

		if ( documentIsHTML ) {

			// If the selector is sufficiently simple, try using a "get*By*" DOM method
			// (excepting DocumentFragment context, where the methods don't exist)
			if ( nodeType !== 11 && ( match = rquickExpr.exec( selector ) ) ) {

				// ID selector
				if ( ( m = match[ 1 ] ) ) {

					// Document context
					if ( nodeType === 9 ) {
						if ( ( elem = context.getElementById( m ) ) ) {

							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( elem.id === m ) {
								results.push( elem );
								return results;
							}
						} else {
							return results;
						}

					// Element context
					} else {

						// Support: IE, Opera, Webkit
						// TODO: identify versions
						// getElementById can match elements by name instead of ID
						if ( newContext && ( elem = newContext.getElementById( m ) ) &&
							contains( context, elem ) &&
							elem.id === m ) {

							results.push( elem );
							return results;
						}
					}

				// Type selector
				} else if ( match[ 2 ] ) {
					push.apply( results, context.getElementsByTagName( selector ) );
					return results;

				// Class selector
				} else if ( ( m = match[ 3 ] ) && support.getElementsByClassName &&
					context.getElementsByClassName ) {

					push.apply( results, context.getElementsByClassName( m ) );
					return results;
				}
			}

			// Take advantage of querySelectorAll
			if ( support.qsa &&
				!nonnativeSelectorCache[ selector + " " ] &&
				( !rbuggyQSA || !rbuggyQSA.test( selector ) ) &&

				// Support: IE 8 only
				// Exclude object elements
				( nodeType !== 1 || context.nodeName.toLowerCase() !== "object" ) ) {

				newSelector = selector;
				newContext = context;

				// qSA considers elements outside a scoping root when evaluating child or
				// descendant combinators, which is not what we want.
				// In such cases, we work around the behavior by prefixing every selector in the
				// list with an ID selector referencing the scope context.
				// The technique has to be used as well when a leading combinator is used
				// as such selectors are not recognized by querySelectorAll.
				// Thanks to Andrew Dupont for this technique.
				if ( nodeType === 1 &&
					( rdescend.test( selector ) || rcombinators.test( selector ) ) ) {

					// Expand context for sibling selectors
					newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
						context;

					// We can use :scope instead of the ID hack if the browser
					// supports it & if we're not changing the context.
					if ( newContext !== context || !support.scope ) {

						// Capture the context ID, setting it first if necessary
						if ( ( nid = context.getAttribute( "id" ) ) ) {
							nid = nid.replace( rcssescape, fcssescape );
						} else {
							context.setAttribute( "id", ( nid = expando ) );
						}
					}

					// Prefix every selector in the list
					groups = tokenize( selector );
					i = groups.length;
					while ( i-- ) {
						groups[ i ] = ( nid ? "#" + nid : ":scope" ) + " " +
							toSelector( groups[ i ] );
					}
					newSelector = groups.join( "," );
				}

				try {
					push.apply( results,
						newContext.querySelectorAll( newSelector )
					);
					return results;
				} catch ( qsaError ) {
					nonnativeSelectorCache( selector, true );
				} finally {
					if ( nid === expando ) {
						context.removeAttribute( "id" );
					}
				}
			}
		}
	}

	// All others
	return select( selector.replace( rtrim, "$1" ), context, results, seed );
}

/**
 * Create key-value caches of limited size
 * @returns {function(string, object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
function createCache() {
	var keys = [];

	function cache( key, value ) {

		// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
		if ( keys.push( key + " " ) > Expr.cacheLength ) {

			// Only keep the most recent entries
			delete cache[ keys.shift() ];
		}
		return ( cache[ key + " " ] = value );
	}
	return cache;
}

/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */
function markFunction( fn ) {
	fn[ expando ] = true;
	return fn;
}

/**
 * Support testing using an element
 * @param {Function} fn Passed the created element and returns a boolean result
 */
function assert( fn ) {
	var el = document.createElement( "fieldset" );

	try {
		return !!fn( el );
	} catch ( e ) {
		return false;
	} finally {

		// Remove from its parent by default
		if ( el.parentNode ) {
			el.parentNode.removeChild( el );
		}

		// release memory in IE
		el = null;
	}
}

/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */
function addHandle( attrs, handler ) {
	var arr = attrs.split( "|" ),
		i = arr.length;

	while ( i-- ) {
		Expr.attrHandle[ arr[ i ] ] = handler;
	}
}

/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */
function siblingCheck( a, b ) {
	var cur = b && a,
		diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
			a.sourceIndex - b.sourceIndex;

	// Use IE sourceIndex if available on both nodes
	if ( diff ) {
		return diff;
	}

	// Check if b follows a
	if ( cur ) {
		while ( ( cur = cur.nextSibling ) ) {
			if ( cur === b ) {
				return -1;
			}
		}
	}

	return a ? 1 : -1;
}

/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
function createInputPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return name === "input" && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
function createButtonPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return ( name === "input" || name === "button" ) && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for :enabled/:disabled
 * @param {Boolean} disabled true for :disabled; false for :enabled
 */
function createDisabledPseudo( disabled ) {

	// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
	return function( elem ) {

		// Only certain elements can match :enabled or :disabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
		if ( "form" in elem ) {

			// Check for inherited disabledness on relevant non-disabled elements:
			// * listed form-associated elements in a disabled fieldset
			//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
			// * option elements in a disabled optgroup
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
			// All such elements have a "form" property.
			if ( elem.parentNode && elem.disabled === false ) {

				// Option elements defer to a parent optgroup if present
				if ( "label" in elem ) {
					if ( "label" in elem.parentNode ) {
						return elem.parentNode.disabled === disabled;
					} else {
						return elem.disabled === disabled;
					}
				}

				// Support: IE 6 - 11
				// Use the isDisabled shortcut property to check for disabled fieldset ancestors
				return elem.isDisabled === disabled ||

					// Where there is no isDisabled, check manually
					/* jshint -W018 */
					elem.isDisabled !== !disabled &&
					inDisabledFieldset( elem ) === disabled;
			}

			return elem.disabled === disabled;

		// Try to winnow out elements that can't be disabled before trusting the disabled property.
		// Some victims get caught in our net (label, legend, menu, track), but it shouldn't
		// even exist on them, let alone have a boolean value.
		} else if ( "label" in elem ) {
			return elem.disabled === disabled;
		}

		// Remaining elements are neither :enabled nor :disabled
		return false;
	};
}

/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
function createPositionalPseudo( fn ) {
	return markFunction( function( argument ) {
		argument = +argument;
		return markFunction( function( seed, matches ) {
			var j,
				matchIndexes = fn( [], seed.length, argument ),
				i = matchIndexes.length;

			// Match elements found at the specified indexes
			while ( i-- ) {
				if ( seed[ ( j = matchIndexes[ i ] ) ] ) {
					seed[ j ] = !( matches[ j ] = seed[ j ] );
				}
			}
		} );
	} );
}

/**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */
function testContext( context ) {
	return context && typeof context.getElementsByTagName !== "undefined" && context;
}

// Expose support vars for convenience
support = Sizzle.support = {};

/**
 * Detects XML nodes
 * @param {Element|Object} elem An element or a document
 * @returns {Boolean} True iff elem is a non-HTML XML node
 */
isXML = Sizzle.isXML = function( elem ) {
	var namespace = elem && elem.namespaceURI,
		docElem = elem && ( elem.ownerDocument || elem ).documentElement;

	// Support: IE <=8
	// Assume HTML when documentElement doesn't yet exist, such as inside loading iframes
	// https://bugs.jquery.com/ticket/4833
	return !rhtml.test( namespace || docElem && docElem.nodeName || "HTML" );
};

/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
setDocument = Sizzle.setDocument = function( node ) {
	var hasCompare, subWindow,
		doc = node ? node.ownerDocument || node : preferredDoc;

	// Return early if doc is invalid or already selected
	// Support: IE 11+, Edge 17 - 18+
	// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	// two documents; shallow comparisons work.
	// eslint-disable-next-line eqeqeq
	if ( doc == document || doc.nodeType !== 9 || !doc.documentElement ) {
		return document;
	}

	// Update global variables
	document = doc;
	docElem = document.documentElement;
	documentIsHTML = !isXML( document );

	// Support: IE 9 - 11+, Edge 12 - 18+
	// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
	// Support: IE 11+, Edge 17 - 18+
	// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	// two documents; shallow comparisons work.
	// eslint-disable-next-line eqeqeq
	if ( preferredDoc != document &&
		( subWindow = document.defaultView ) && subWindow.top !== subWindow ) {

		// Support: IE 11, Edge
		if ( subWindow.addEventListener ) {
			subWindow.addEventListener( "unload", unloadHandler, false );

		// Support: IE 9 - 10 only
		} else if ( subWindow.attachEvent ) {
			subWindow.attachEvent( "onunload", unloadHandler );
		}
	}

	// Support: IE 8 - 11+, Edge 12 - 18+, Chrome <=16 - 25 only, Firefox <=3.6 - 31 only,
	// Safari 4 - 5 only, Opera <=11.6 - 12.x only
	// IE/Edge & older browsers don't support the :scope pseudo-class.
	// Support: Safari 6.0 only
	// Safari 6.0 supports :scope but it's an alias of :root there.
	support.scope = assert( function( el ) {
		docElem.appendChild( el ).appendChild( document.createElement( "div" ) );
		return typeof el.querySelectorAll !== "undefined" &&
			!el.querySelectorAll( ":scope fieldset div" ).length;
	} );

	/* Attributes
	---------------------------------------------------------------------- */

	// Support: IE<8
	// Verify that getAttribute really returns attributes and not properties
	// (excepting IE8 booleans)
	support.attributes = assert( function( el ) {
		el.className = "i";
		return !el.getAttribute( "className" );
	} );

	/* getElement(s)By*
	---------------------------------------------------------------------- */

	// Check if getElementsByTagName("*") returns only elements
	support.getElementsByTagName = assert( function( el ) {
		el.appendChild( document.createComment( "" ) );
		return !el.getElementsByTagName( "*" ).length;
	} );

	// Support: IE<9
	support.getElementsByClassName = rnative.test( document.getElementsByClassName );

	// Support: IE<10
	// Check if getElementById returns elements by name
	// The broken getElementById methods don't pick up programmatically-set names,
	// so use a roundabout getElementsByName test
	support.getById = assert( function( el ) {
		docElem.appendChild( el ).id = expando;
		return !document.getElementsByName || !document.getElementsByName( expando ).length;
	} );

	// ID filter and find
	if ( support.getById ) {
		Expr.filter[ "ID" ] = function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				return elem.getAttribute( "id" ) === attrId;
			};
		};
		Expr.find[ "ID" ] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var elem = context.getElementById( id );
				return elem ? [ elem ] : [];
			}
		};
	} else {
		Expr.filter[ "ID" ] =  function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				var node = typeof elem.getAttributeNode !== "undefined" &&
					elem.getAttributeNode( "id" );
				return node && node.value === attrId;
			};
		};

		// Support: IE 6 - 7 only
		// getElementById is not reliable as a find shortcut
		Expr.find[ "ID" ] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var node, i, elems,
					elem = context.getElementById( id );

				if ( elem ) {

					// Verify the id attribute
					node = elem.getAttributeNode( "id" );
					if ( node && node.value === id ) {
						return [ elem ];
					}

					// Fall back on getElementsByName
					elems = context.getElementsByName( id );
					i = 0;
					while ( ( elem = elems[ i++ ] ) ) {
						node = elem.getAttributeNode( "id" );
						if ( node && node.value === id ) {
							return [ elem ];
						}
					}
				}

				return [];
			}
		};
	}

	// Tag
	Expr.find[ "TAG" ] = support.getElementsByTagName ?
		function( tag, context ) {
			if ( typeof context.getElementsByTagName !== "undefined" ) {
				return context.getElementsByTagName( tag );

			// DocumentFragment nodes don't have gEBTN
			} else if ( support.qsa ) {
				return context.querySelectorAll( tag );
			}
		} :

		function( tag, context ) {
			var elem,
				tmp = [],
				i = 0,

				// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
				results = context.getElementsByTagName( tag );

			// Filter out possible comments
			if ( tag === "*" ) {
				while ( ( elem = results[ i++ ] ) ) {
					if ( elem.nodeType === 1 ) {
						tmp.push( elem );
					}
				}

				return tmp;
			}
			return results;
		};

	// Class
	Expr.find[ "CLASS" ] = support.getElementsByClassName && function( className, context ) {
		if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
			return context.getElementsByClassName( className );
		}
	};

	/* QSA/matchesSelector
	---------------------------------------------------------------------- */

	// QSA and matchesSelector support

	// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
	rbuggyMatches = [];

	// qSa(:focus) reports false when true (Chrome 21)
	// We allow this because of a bug in IE8/9 that throws an error
	// whenever `document.activeElement` is accessed on an iframe
	// So, we allow :focus to pass through QSA all the time to avoid the IE error
	// See https://bugs.jquery.com/ticket/13378
	rbuggyQSA = [];

	if ( ( support.qsa = rnative.test( document.querySelectorAll ) ) ) {

		// Build QSA regex
		// Regex strategy adopted from Diego Perini
		assert( function( el ) {

			var input;

			// Select is set to empty string on purpose
			// This is to test IE's treatment of not explicitly
			// setting a boolean content attribute,
			// since its presence should be enough
			// https://bugs.jquery.com/ticket/12359
			docElem.appendChild( el ).innerHTML = "<a id='" + expando + "'></a>" +
				"<select id='" + expando + "-\r\\' msallowcapture=''>" +
				"<option selected=''></option></select>";

			// Support: IE8, Opera 11-12.16
			// Nothing should be selected when empty strings follow ^= or $= or *=
			// The test attribute must be unknown in Opera but "safe" for WinRT
			// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
			if ( el.querySelectorAll( "[msallowcapture^='']" ).length ) {
				rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
			}

			// Support: IE8
			// Boolean attributes and "value" are not treated correctly
			if ( !el.querySelectorAll( "[selected]" ).length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
			}

			// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
			if ( !el.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
				rbuggyQSA.push( "~=" );
			}

			// Support: IE 11+, Edge 15 - 18+
			// IE 11/Edge don't find elements on a `[name='']` query in some cases.
			// Adding a temporary attribute to the document before the selection works
			// around the issue.
			// Interestingly, IE 10 & older don't seem to have the issue.
			input = document.createElement( "input" );
			input.setAttribute( "name", "" );
			el.appendChild( input );
			if ( !el.querySelectorAll( "[name='']" ).length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*name" + whitespace + "*=" +
					whitespace + "*(?:''|\"\")" );
			}

			// Webkit/Opera - :checked should return selected option elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8 throws error here and will not see later tests
			if ( !el.querySelectorAll( ":checked" ).length ) {
				rbuggyQSA.push( ":checked" );
			}

			// Support: Safari 8+, iOS 8+
			// https://bugs.webkit.org/show_bug.cgi?id=136851
			// In-page `selector#id sibling-combinator selector` fails
			if ( !el.querySelectorAll( "a#" + expando + "+*" ).length ) {
				rbuggyQSA.push( ".#.+[+~]" );
			}

			// Support: Firefox <=3.6 - 5 only
			// Old Firefox doesn't throw on a badly-escaped identifier.
			el.querySelectorAll( "\\\f" );
			rbuggyQSA.push( "[\\r\\n\\f]" );
		} );

		assert( function( el ) {
			el.innerHTML = "<a href='' disabled='disabled'></a>" +
				"<select disabled='disabled'><option/></select>";

			// Support: Windows 8 Native Apps
			// The type and name attributes are restricted during .innerHTML assignment
			var input = document.createElement( "input" );
			input.setAttribute( "type", "hidden" );
			el.appendChild( input ).setAttribute( "name", "D" );

			// Support: IE8
			// Enforce case-sensitivity of name attribute
			if ( el.querySelectorAll( "[name=d]" ).length ) {
				rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
			}

			// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
			// IE8 throws error here and will not see later tests
			if ( el.querySelectorAll( ":enabled" ).length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Support: IE9-11+
			// IE's :disabled selector does not pick up the children of disabled fieldsets
			docElem.appendChild( el ).disabled = true;
			if ( el.querySelectorAll( ":disabled" ).length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Support: Opera 10 - 11 only
			// Opera 10-11 does not throw on post-comma invalid pseudos
			el.querySelectorAll( "*,:x" );
			rbuggyQSA.push( ",.*:" );
		} );
	}

	if ( ( support.matchesSelector = rnative.test( ( matches = docElem.matches ||
		docElem.webkitMatchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector ) ) ) ) {

		assert( function( el ) {

			// Check to see if it's possible to do matchesSelector
			// on a disconnected node (IE 9)
			support.disconnectedMatch = matches.call( el, "*" );

			// This should fail with an exception
			// Gecko does not error, returns false instead
			matches.call( el, "[s!='']:x" );
			rbuggyMatches.push( "!=", pseudos );
		} );
	}

	rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join( "|" ) );
	rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join( "|" ) );

	/* Contains
	---------------------------------------------------------------------- */
	hasCompare = rnative.test( docElem.compareDocumentPosition );

	// Element contains another
	// Purposefully self-exclusive
	// As in, an element does not contain itself
	contains = hasCompare || rnative.test( docElem.contains ) ?
		function( a, b ) {
			var adown = a.nodeType === 9 ? a.documentElement : a,
				bup = b && b.parentNode;
			return a === bup || !!( bup && bup.nodeType === 1 && (
				adown.contains ?
					adown.contains( bup ) :
					a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
			) );
		} :
		function( a, b ) {
			if ( b ) {
				while ( ( b = b.parentNode ) ) {
					if ( b === a ) {
						return true;
					}
				}
			}
			return false;
		};

	/* Sorting
	---------------------------------------------------------------------- */

	// Document order sorting
	sortOrder = hasCompare ?
	function( a, b ) {

		// Flag for duplicate removal
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		// Sort on method existence if only one input has compareDocumentPosition
		var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
		if ( compare ) {
			return compare;
		}

		// Calculate position if both inputs belong to the same document
		// Support: IE 11+, Edge 17 - 18+
		// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
		// two documents; shallow comparisons work.
		// eslint-disable-next-line eqeqeq
		compare = ( a.ownerDocument || a ) == ( b.ownerDocument || b ) ?
			a.compareDocumentPosition( b ) :

			// Otherwise we know they are disconnected
			1;

		// Disconnected nodes
		if ( compare & 1 ||
			( !support.sortDetached && b.compareDocumentPosition( a ) === compare ) ) {

			// Choose the first element that is related to our preferred document
			// Support: IE 11+, Edge 17 - 18+
			// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
			// two documents; shallow comparisons work.
			// eslint-disable-next-line eqeqeq
			if ( a == document || a.ownerDocument == preferredDoc &&
				contains( preferredDoc, a ) ) {
				return -1;
			}

			// Support: IE 11+, Edge 17 - 18+
			// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
			// two documents; shallow comparisons work.
			// eslint-disable-next-line eqeqeq
			if ( b == document || b.ownerDocument == preferredDoc &&
				contains( preferredDoc, b ) ) {
				return 1;
			}

			// Maintain original order
			return sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;
		}

		return compare & 4 ? -1 : 1;
	} :
	function( a, b ) {

		// Exit early if the nodes are identical
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		var cur,
			i = 0,
			aup = a.parentNode,
			bup = b.parentNode,
			ap = [ a ],
			bp = [ b ];

		// Parentless nodes are either documents or disconnected
		if ( !aup || !bup ) {

			// Support: IE 11+, Edge 17 - 18+
			// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
			// two documents; shallow comparisons work.
			/* eslint-disable eqeqeq */
			return a == document ? -1 :
				b == document ? 1 :
				/* eslint-enable eqeqeq */
				aup ? -1 :
				bup ? 1 :
				sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;

		// If the nodes are siblings, we can do a quick check
		} else if ( aup === bup ) {
			return siblingCheck( a, b );
		}

		// Otherwise we need full lists of their ancestors for comparison
		cur = a;
		while ( ( cur = cur.parentNode ) ) {
			ap.unshift( cur );
		}
		cur = b;
		while ( ( cur = cur.parentNode ) ) {
			bp.unshift( cur );
		}

		// Walk down the tree looking for a discrepancy
		while ( ap[ i ] === bp[ i ] ) {
			i++;
		}

		return i ?

			// Do a sibling check if the nodes have a common ancestor
			siblingCheck( ap[ i ], bp[ i ] ) :

			// Otherwise nodes in our document sort first
			// Support: IE 11+, Edge 17 - 18+
			// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
			// two documents; shallow comparisons work.
			/* eslint-disable eqeqeq */
			ap[ i ] == preferredDoc ? -1 :
			bp[ i ] == preferredDoc ? 1 :
			/* eslint-enable eqeqeq */
			0;
	};

	return document;
};

Sizzle.matches = function( expr, elements ) {
	return Sizzle( expr, null, null, elements );
};

Sizzle.matchesSelector = function( elem, expr ) {
	setDocument( elem );

	if ( support.matchesSelector && documentIsHTML &&
		!nonnativeSelectorCache[ expr + " " ] &&
		( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
		( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

		try {
			var ret = matches.call( elem, expr );

			// IE 9's matchesSelector returns false on disconnected nodes
			if ( ret || support.disconnectedMatch ||

				// As well, disconnected nodes are said to be in a document
				// fragment in IE 9
				elem.document && elem.document.nodeType !== 11 ) {
				return ret;
			}
		} catch ( e ) {
			nonnativeSelectorCache( expr, true );
		}
	}

	return Sizzle( expr, document, null, [ elem ] ).length > 0;
};

Sizzle.contains = function( context, elem ) {

	// Set document vars if needed
	// Support: IE 11+, Edge 17 - 18+
	// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	// two documents; shallow comparisons work.
	// eslint-disable-next-line eqeqeq
	if ( ( context.ownerDocument || context ) != document ) {
		setDocument( context );
	}
	return contains( context, elem );
};

Sizzle.attr = function( elem, name ) {

	// Set document vars if needed
	// Support: IE 11+, Edge 17 - 18+
	// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	// two documents; shallow comparisons work.
	// eslint-disable-next-line eqeqeq
	if ( ( elem.ownerDocument || elem ) != document ) {
		setDocument( elem );
	}

	var fn = Expr.attrHandle[ name.toLowerCase() ],

		// Don't get fooled by Object.prototype properties (jQuery #13807)
		val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
			fn( elem, name, !documentIsHTML ) :
			undefined;

	return val !== undefined ?
		val :
		support.attributes || !documentIsHTML ?
			elem.getAttribute( name ) :
			( val = elem.getAttributeNode( name ) ) && val.specified ?
				val.value :
				null;
};

Sizzle.escape = function( sel ) {
	return ( sel + "" ).replace( rcssescape, fcssescape );
};

Sizzle.error = function( msg ) {
	throw new Error( "Syntax error, unrecognized expression: " + msg );
};

/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
Sizzle.uniqueSort = function( results ) {
	var elem,
		duplicates = [],
		j = 0,
		i = 0;

	// Unless we *know* we can detect duplicates, assume their presence
	hasDuplicate = !support.detectDuplicates;
	sortInput = !support.sortStable && results.slice( 0 );
	results.sort( sortOrder );

	if ( hasDuplicate ) {
		while ( ( elem = results[ i++ ] ) ) {
			if ( elem === results[ i ] ) {
				j = duplicates.push( i );
			}
		}
		while ( j-- ) {
			results.splice( duplicates[ j ], 1 );
		}
	}

	// Clear input after sorting to release objects
	// See https://github.com/jquery/sizzle/pull/225
	sortInput = null;

	return results;
};

/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
getText = Sizzle.getText = function( elem ) {
	var node,
		ret = "",
		i = 0,
		nodeType = elem.nodeType;

	if ( !nodeType ) {

		// If no nodeType, this is expected to be an array
		while ( ( node = elem[ i++ ] ) ) {

			// Do not traverse comment nodes
			ret += getText( node );
		}
	} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {

		// Use textContent for elements
		// innerText usage removed for consistency of new lines (jQuery #11153)
		if ( typeof elem.textContent === "string" ) {
			return elem.textContent;
		} else {

			// Traverse its children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				ret += getText( elem );
			}
		}
	} else if ( nodeType === 3 || nodeType === 4 ) {
		return elem.nodeValue;
	}

	// Do not include comment or processing instruction nodes

	return ret;
};

Expr = Sizzle.selectors = {

	// Can be adjusted by the user
	cacheLength: 50,

	createPseudo: markFunction,

	match: matchExpr,

	attrHandle: {},

	find: {},

	relative: {
		">": { dir: "parentNode", first: true },
		" ": { dir: "parentNode" },
		"+": { dir: "previousSibling", first: true },
		"~": { dir: "previousSibling" }
	},

	preFilter: {
		"ATTR": function( match ) {
			match[ 1 ] = match[ 1 ].replace( runescape, funescape );

			// Move the given value to match[3] whether quoted or unquoted
			match[ 3 ] = ( match[ 3 ] || match[ 4 ] ||
				match[ 5 ] || "" ).replace( runescape, funescape );

			if ( match[ 2 ] === "~=" ) {
				match[ 3 ] = " " + match[ 3 ] + " ";
			}

			return match.slice( 0, 4 );
		},

		"CHILD": function( match ) {

			/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
			match[ 1 ] = match[ 1 ].toLowerCase();

			if ( match[ 1 ].slice( 0, 3 ) === "nth" ) {

				// nth-* requires argument
				if ( !match[ 3 ] ) {
					Sizzle.error( match[ 0 ] );
				}

				// numeric x and y parameters for Expr.filter.CHILD
				// remember that false/true cast respectively to 0/1
				match[ 4 ] = +( match[ 4 ] ?
					match[ 5 ] + ( match[ 6 ] || 1 ) :
					2 * ( match[ 3 ] === "even" || match[ 3 ] === "odd" ) );
				match[ 5 ] = +( ( match[ 7 ] + match[ 8 ] ) || match[ 3 ] === "odd" );

				// other types prohibit arguments
			} else if ( match[ 3 ] ) {
				Sizzle.error( match[ 0 ] );
			}

			return match;
		},

		"PSEUDO": function( match ) {
			var excess,
				unquoted = !match[ 6 ] && match[ 2 ];

			if ( matchExpr[ "CHILD" ].test( match[ 0 ] ) ) {
				return null;
			}

			// Accept quoted arguments as-is
			if ( match[ 3 ] ) {
				match[ 2 ] = match[ 4 ] || match[ 5 ] || "";

			// Strip excess characters from unquoted arguments
			} else if ( unquoted && rpseudo.test( unquoted ) &&

				// Get excess from tokenize (recursively)
				( excess = tokenize( unquoted, true ) ) &&

				// advance to the next closing parenthesis
				( excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length ) ) {

				// excess is a negative index
				match[ 0 ] = match[ 0 ].slice( 0, excess );
				match[ 2 ] = unquoted.slice( 0, excess );
			}

			// Return only captures needed by the pseudo filter method (type and argument)
			return match.slice( 0, 3 );
		}
	},

	filter: {

		"TAG": function( nodeNameSelector ) {
			var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
			return nodeNameSelector === "*" ?
				function() {
					return true;
				} :
				function( elem ) {
					return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
				};
		},

		"CLASS": function( className ) {
			var pattern = classCache[ className + " " ];

			return pattern ||
				( pattern = new RegExp( "(^|" + whitespace +
					")" + className + "(" + whitespace + "|$)" ) ) && classCache(
						className, function( elem ) {
							return pattern.test(
								typeof elem.className === "string" && elem.className ||
								typeof elem.getAttribute !== "undefined" &&
									elem.getAttribute( "class" ) ||
								""
							);
				} );
		},

		"ATTR": function( name, operator, check ) {
			return function( elem ) {
				var result = Sizzle.attr( elem, name );

				if ( result == null ) {
					return operator === "!=";
				}
				if ( !operator ) {
					return true;
				}

				result += "";

				/* eslint-disable max-len */

				return operator === "=" ? result === check :
					operator === "!=" ? result !== check :
					operator === "^=" ? check && result.indexOf( check ) === 0 :
					operator === "*=" ? check && result.indexOf( check ) > -1 :
					operator === "$=" ? check && result.slice( -check.length ) === check :
					operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
					operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
					false;
				/* eslint-enable max-len */

			};
		},

		"CHILD": function( type, what, _argument, first, last ) {
			var simple = type.slice( 0, 3 ) !== "nth",
				forward = type.slice( -4 ) !== "last",
				ofType = what === "of-type";

			return first === 1 && last === 0 ?

				// Shortcut for :nth-*(n)
				function( elem ) {
					return !!elem.parentNode;
				} :

				function( elem, _context, xml ) {
					var cache, uniqueCache, outerCache, node, nodeIndex, start,
						dir = simple !== forward ? "nextSibling" : "previousSibling",
						parent = elem.parentNode,
						name = ofType && elem.nodeName.toLowerCase(),
						useCache = !xml && !ofType,
						diff = false;

					if ( parent ) {

						// :(first|last|only)-(child|of-type)
						if ( simple ) {
							while ( dir ) {
								node = elem;
								while ( ( node = node[ dir ] ) ) {
									if ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) {

										return false;
									}
								}

								// Reverse direction for :only-* (if we haven't yet done so)
								start = dir = type === "only" && !start && "nextSibling";
							}
							return true;
						}

						start = [ forward ? parent.firstChild : parent.lastChild ];

						// non-xml :nth-child(...) stores cache data on `parent`
						if ( forward && useCache ) {

							// Seek `elem` from a previously-cached index

							// ...in a gzip-friendly way
							node = parent;
							outerCache = node[ expando ] || ( node[ expando ] = {} );

							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ node.uniqueID ] ||
								( outerCache[ node.uniqueID ] = {} );

							cache = uniqueCache[ type ] || [];
							nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
							diff = nodeIndex && cache[ 2 ];
							node = nodeIndex && parent.childNodes[ nodeIndex ];

							while ( ( node = ++nodeIndex && node && node[ dir ] ||

								// Fallback to seeking `elem` from the start
								( diff = nodeIndex = 0 ) || start.pop() ) ) {

								// When found, cache indexes on `parent` and break
								if ( node.nodeType === 1 && ++diff && node === elem ) {
									uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
									break;
								}
							}

						} else {

							// Use previously-cached element index if available
							if ( useCache ) {

								// ...in a gzip-friendly way
								node = elem;
								outerCache = node[ expando ] || ( node[ expando ] = {} );

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									( outerCache[ node.uniqueID ] = {} );

								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex;
							}

							// xml :nth-child(...)
							// or :nth-last-child(...) or :nth(-last)?-of-type(...)
							if ( diff === false ) {

								// Use the same loop as above to seek `elem` from the start
								while ( ( node = ++nodeIndex && node && node[ dir ] ||
									( diff = nodeIndex = 0 ) || start.pop() ) ) {

									if ( ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) &&
										++diff ) {

										// Cache the index of each encountered element
										if ( useCache ) {
											outerCache = node[ expando ] ||
												( node[ expando ] = {} );

											// Support: IE <9 only
											// Defend against cloned attroperties (jQuery gh-1709)
											uniqueCache = outerCache[ node.uniqueID ] ||
												( outerCache[ node.uniqueID ] = {} );

											uniqueCache[ type ] = [ dirruns, diff ];
										}

										if ( node === elem ) {
											break;
										}
									}
								}
							}
						}

						// Incorporate the offset, then check against cycle size
						diff -= last;
						return diff === first || ( diff % first === 0 && diff / first >= 0 );
					}
				};
		},

		"PSEUDO": function( pseudo, argument ) {

			// pseudo-class names are case-insensitive
			// http://www.w3.org/TR/selectors/#pseudo-classes
			// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
			// Remember that setFilters inherits from pseudos
			var args,
				fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
					Sizzle.error( "unsupported pseudo: " + pseudo );

			// The user may use createPseudo to indicate that
			// arguments are needed to create the filter function
			// just as Sizzle does
			if ( fn[ expando ] ) {
				return fn( argument );
			}

			// But maintain support for old signatures
			if ( fn.length > 1 ) {
				args = [ pseudo, pseudo, "", argument ];
				return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
					markFunction( function( seed, matches ) {
						var idx,
							matched = fn( seed, argument ),
							i = matched.length;
						while ( i-- ) {
							idx = indexOf( seed, matched[ i ] );
							seed[ idx ] = !( matches[ idx ] = matched[ i ] );
						}
					} ) :
					function( elem ) {
						return fn( elem, 0, args );
					};
			}

			return fn;
		}
	},

	pseudos: {

		// Potentially complex pseudos
		"not": markFunction( function( selector ) {

			// Trim the selector passed to compile
			// to avoid treating leading and trailing
			// spaces as combinators
			var input = [],
				results = [],
				matcher = compile( selector.replace( rtrim, "$1" ) );

			return matcher[ expando ] ?
				markFunction( function( seed, matches, _context, xml ) {
					var elem,
						unmatched = matcher( seed, null, xml, [] ),
						i = seed.length;

					// Match elements unmatched by `matcher`
					while ( i-- ) {
						if ( ( elem = unmatched[ i ] ) ) {
							seed[ i ] = !( matches[ i ] = elem );
						}
					}
				} ) :
				function( elem, _context, xml ) {
					input[ 0 ] = elem;
					matcher( input, null, xml, results );

					// Don't keep the element (issue #299)
					input[ 0 ] = null;
					return !results.pop();
				};
		} ),

		"has": markFunction( function( selector ) {
			return function( elem ) {
				return Sizzle( selector, elem ).length > 0;
			};
		} ),

		"contains": markFunction( function( text ) {
			text = text.replace( runescape, funescape );
			return function( elem ) {
				return ( elem.textContent || getText( elem ) ).indexOf( text ) > -1;
			};
		} ),

		// "Whether an element is represented by a :lang() selector
		// is based solely on the element's language value
		// being equal to the identifier C,
		// or beginning with the identifier C immediately followed by "-".
		// The matching of C against the element's language value is performed case-insensitively.
		// The identifier C does not have to be a valid language name."
		// http://www.w3.org/TR/selectors/#lang-pseudo
		"lang": markFunction( function( lang ) {

			// lang value must be a valid identifier
			if ( !ridentifier.test( lang || "" ) ) {
				Sizzle.error( "unsupported lang: " + lang );
			}
			lang = lang.replace( runescape, funescape ).toLowerCase();
			return function( elem ) {
				var elemLang;
				do {
					if ( ( elemLang = documentIsHTML ?
						elem.lang :
						elem.getAttribute( "xml:lang" ) || elem.getAttribute( "lang" ) ) ) {

						elemLang = elemLang.toLowerCase();
						return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
					}
				} while ( ( elem = elem.parentNode ) && elem.nodeType === 1 );
				return false;
			};
		} ),

		// Miscellaneous
		"target": function( elem ) {
			var hash = window.location && window.location.hash;
			return hash && hash.slice( 1 ) === elem.id;
		},

		"root": function( elem ) {
			return elem === docElem;
		},

		"focus": function( elem ) {
			return elem === document.activeElement &&
				( !document.hasFocus || document.hasFocus() ) &&
				!!( elem.type || elem.href || ~elem.tabIndex );
		},

		// Boolean properties
		"enabled": createDisabledPseudo( false ),
		"disabled": createDisabledPseudo( true ),

		"checked": function( elem ) {

			// In CSS3, :checked should return both checked and selected elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var nodeName = elem.nodeName.toLowerCase();
			return ( nodeName === "input" && !!elem.checked ) ||
				( nodeName === "option" && !!elem.selected );
		},

		"selected": function( elem ) {

			// Accessing this property makes selected-by-default
			// options in Safari work properly
			if ( elem.parentNode ) {
				// eslint-disable-next-line no-unused-expressions
				elem.parentNode.selectedIndex;
			}

			return elem.selected === true;
		},

		// Contents
		"empty": function( elem ) {

			// http://www.w3.org/TR/selectors/#empty-pseudo
			// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
			//   but not by others (comment: 8; processing instruction: 7; etc.)
			// nodeType < 6 works because attributes (2) do not appear as children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				if ( elem.nodeType < 6 ) {
					return false;
				}
			}
			return true;
		},

		"parent": function( elem ) {
			return !Expr.pseudos[ "empty" ]( elem );
		},

		// Element/input types
		"header": function( elem ) {
			return rheader.test( elem.nodeName );
		},

		"input": function( elem ) {
			return rinputs.test( elem.nodeName );
		},

		"button": function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === "button" || name === "button";
		},

		"text": function( elem ) {
			var attr;
			return elem.nodeName.toLowerCase() === "input" &&
				elem.type === "text" &&

				// Support: IE<8
				// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
				( ( attr = elem.getAttribute( "type" ) ) == null ||
					attr.toLowerCase() === "text" );
		},

		// Position-in-collection
		"first": createPositionalPseudo( function() {
			return [ 0 ];
		} ),

		"last": createPositionalPseudo( function( _matchIndexes, length ) {
			return [ length - 1 ];
		} ),

		"eq": createPositionalPseudo( function( _matchIndexes, length, argument ) {
			return [ argument < 0 ? argument + length : argument ];
		} ),

		"even": createPositionalPseudo( function( matchIndexes, length ) {
			var i = 0;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} ),

		"odd": createPositionalPseudo( function( matchIndexes, length ) {
			var i = 1;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} ),

		"lt": createPositionalPseudo( function( matchIndexes, length, argument ) {
			var i = argument < 0 ?
				argument + length :
				argument > length ?
					length :
					argument;
			for ( ; --i >= 0; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} ),

		"gt": createPositionalPseudo( function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; ++i < length; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} )
	}
};

Expr.pseudos[ "nth" ] = Expr.pseudos[ "eq" ];

// Add button/input type pseudos
for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
	Expr.pseudos[ i ] = createInputPseudo( i );
}
for ( i in { submit: true, reset: true } ) {
	Expr.pseudos[ i ] = createButtonPseudo( i );
}

// Easy API for creating new setFilters
function setFilters() {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters();

tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
	var matched, match, tokens, type,
		soFar, groups, preFilters,
		cached = tokenCache[ selector + " " ];

	if ( cached ) {
		return parseOnly ? 0 : cached.slice( 0 );
	}

	soFar = selector;
	groups = [];
	preFilters = Expr.preFilter;

	while ( soFar ) {

		// Comma and first run
		if ( !matched || ( match = rcomma.exec( soFar ) ) ) {
			if ( match ) {

				// Don't consume trailing commas as valid
				soFar = soFar.slice( match[ 0 ].length ) || soFar;
			}
			groups.push( ( tokens = [] ) );
		}

		matched = false;

		// Combinators
		if ( ( match = rcombinators.exec( soFar ) ) ) {
			matched = match.shift();
			tokens.push( {
				value: matched,

				// Cast descendant combinators to space
				type: match[ 0 ].replace( rtrim, " " )
			} );
			soFar = soFar.slice( matched.length );
		}

		// Filters
		for ( type in Expr.filter ) {
			if ( ( match = matchExpr[ type ].exec( soFar ) ) && ( !preFilters[ type ] ||
				( match = preFilters[ type ]( match ) ) ) ) {
				matched = match.shift();
				tokens.push( {
					value: matched,
					type: type,
					matches: match
				} );
				soFar = soFar.slice( matched.length );
			}
		}

		if ( !matched ) {
			break;
		}
	}

	// Return the length of the invalid excess
	// if we're just parsing
	// Otherwise, throw an error or return tokens
	return parseOnly ?
		soFar.length :
		soFar ?
			Sizzle.error( selector ) :

			// Cache the tokens
			tokenCache( selector, groups ).slice( 0 );
};

function toSelector( tokens ) {
	var i = 0,
		len = tokens.length,
		selector = "";
	for ( ; i < len; i++ ) {
		selector += tokens[ i ].value;
	}
	return selector;
}

function addCombinator( matcher, combinator, base ) {
	var dir = combinator.dir,
		skip = combinator.next,
		key = skip || dir,
		checkNonElements = base && key === "parentNode",
		doneName = done++;

	return combinator.first ?

		// Check against closest ancestor/preceding element
		function( elem, context, xml ) {
			while ( ( elem = elem[ dir ] ) ) {
				if ( elem.nodeType === 1 || checkNonElements ) {
					return matcher( elem, context, xml );
				}
			}
			return false;
		} :

		// Check against all ancestor/preceding elements
		function( elem, context, xml ) {
			var oldCache, uniqueCache, outerCache,
				newCache = [ dirruns, doneName ];

			// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
			if ( xml ) {
				while ( ( elem = elem[ dir ] ) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						if ( matcher( elem, context, xml ) ) {
							return true;
						}
					}
				}
			} else {
				while ( ( elem = elem[ dir ] ) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						outerCache = elem[ expando ] || ( elem[ expando ] = {} );

						// Support: IE <9 only
						// Defend against cloned attroperties (jQuery gh-1709)
						uniqueCache = outerCache[ elem.uniqueID ] ||
							( outerCache[ elem.uniqueID ] = {} );

						if ( skip && skip === elem.nodeName.toLowerCase() ) {
							elem = elem[ dir ] || elem;
						} else if ( ( oldCache = uniqueCache[ key ] ) &&
							oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

							// Assign to newCache so results back-propagate to previous elements
							return ( newCache[ 2 ] = oldCache[ 2 ] );
						} else {

							// Reuse newcache so results back-propagate to previous elements
							uniqueCache[ key ] = newCache;

							// A match means we're done; a fail means we have to keep checking
							if ( ( newCache[ 2 ] = matcher( elem, context, xml ) ) ) {
								return true;
							}
						}
					}
				}
			}
			return false;
		};
}

function elementMatcher( matchers ) {
	return matchers.length > 1 ?
		function( elem, context, xml ) {
			var i = matchers.length;
			while ( i-- ) {
				if ( !matchers[ i ]( elem, context, xml ) ) {
					return false;
				}
			}
			return true;
		} :
		matchers[ 0 ];
}

function multipleContexts( selector, contexts, results ) {
	var i = 0,
		len = contexts.length;
	for ( ; i < len; i++ ) {
		Sizzle( selector, contexts[ i ], results );
	}
	return results;
}

function condense( unmatched, map, filter, context, xml ) {
	var elem,
		newUnmatched = [],
		i = 0,
		len = unmatched.length,
		mapped = map != null;

	for ( ; i < len; i++ ) {
		if ( ( elem = unmatched[ i ] ) ) {
			if ( !filter || filter( elem, context, xml ) ) {
				newUnmatched.push( elem );
				if ( mapped ) {
					map.push( i );
				}
			}
		}
	}

	return newUnmatched;
}

function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
	if ( postFilter && !postFilter[ expando ] ) {
		postFilter = setMatcher( postFilter );
	}
	if ( postFinder && !postFinder[ expando ] ) {
		postFinder = setMatcher( postFinder, postSelector );
	}
	return markFunction( function( seed, results, context, xml ) {
		var temp, i, elem,
			preMap = [],
			postMap = [],
			preexisting = results.length,

			// Get initial elements from seed or context
			elems = seed || multipleContexts(
				selector || "*",
				context.nodeType ? [ context ] : context,
				[]
			),

			// Prefilter to get matcher input, preserving a map for seed-results synchronization
			matcherIn = preFilter && ( seed || !selector ) ?
				condense( elems, preMap, preFilter, context, xml ) :
				elems,

			matcherOut = matcher ?

				// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
				postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

					// ...intermediate processing is necessary
					[] :

					// ...otherwise use results directly
					results :
				matcherIn;

		// Find primary matches
		if ( matcher ) {
			matcher( matcherIn, matcherOut, context, xml );
		}

		// Apply postFilter
		if ( postFilter ) {
			temp = condense( matcherOut, postMap );
			postFilter( temp, [], context, xml );

			// Un-match failing elements by moving them back to matcherIn
			i = temp.length;
			while ( i-- ) {
				if ( ( elem = temp[ i ] ) ) {
					matcherOut[ postMap[ i ] ] = !( matcherIn[ postMap[ i ] ] = elem );
				}
			}
		}

		if ( seed ) {
			if ( postFinder || preFilter ) {
				if ( postFinder ) {

					// Get the final matcherOut by condensing this intermediate into postFinder contexts
					temp = [];
					i = matcherOut.length;
					while ( i-- ) {
						if ( ( elem = matcherOut[ i ] ) ) {

							// Restore matcherIn since elem is not yet a final match
							temp.push( ( matcherIn[ i ] = elem ) );
						}
					}
					postFinder( null, ( matcherOut = [] ), temp, xml );
				}

				// Move matched elements from seed to results to keep them synchronized
				i = matcherOut.length;
				while ( i-- ) {
					if ( ( elem = matcherOut[ i ] ) &&
						( temp = postFinder ? indexOf( seed, elem ) : preMap[ i ] ) > -1 ) {

						seed[ temp ] = !( results[ temp ] = elem );
					}
				}
			}

		// Add elements to results, through postFinder if defined
		} else {
			matcherOut = condense(
				matcherOut === results ?
					matcherOut.splice( preexisting, matcherOut.length ) :
					matcherOut
			);
			if ( postFinder ) {
				postFinder( null, results, matcherOut, xml );
			} else {
				push.apply( results, matcherOut );
			}
		}
	} );
}

function matcherFromTokens( tokens ) {
	var checkContext, matcher, j,
		len = tokens.length,
		leadingRelative = Expr.relative[ tokens[ 0 ].type ],
		implicitRelative = leadingRelative || Expr.relative[ " " ],
		i = leadingRelative ? 1 : 0,

		// The foundational matcher ensures that elements are reachable from top-level context(s)
		matchContext = addCombinator( function( elem ) {
			return elem === checkContext;
		}, implicitRelative, true ),
		matchAnyContext = addCombinator( function( elem ) {
			return indexOf( checkContext, elem ) > -1;
		}, implicitRelative, true ),
		matchers = [ function( elem, context, xml ) {
			var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
				( checkContext = context ).nodeType ?
					matchContext( elem, context, xml ) :
					matchAnyContext( elem, context, xml ) );

			// Avoid hanging onto element (issue #299)
			checkContext = null;
			return ret;
		} ];

	for ( ; i < len; i++ ) {
		if ( ( matcher = Expr.relative[ tokens[ i ].type ] ) ) {
			matchers = [ addCombinator( elementMatcher( matchers ), matcher ) ];
		} else {
			matcher = Expr.filter[ tokens[ i ].type ].apply( null, tokens[ i ].matches );

			// Return special upon seeing a positional matcher
			if ( matcher[ expando ] ) {

				// Find the next relative operator (if any) for proper handling
				j = ++i;
				for ( ; j < len; j++ ) {
					if ( Expr.relative[ tokens[ j ].type ] ) {
						break;
					}
				}
				return setMatcher(
					i > 1 && elementMatcher( matchers ),
					i > 1 && toSelector(

					// If the preceding token was a descendant combinator, insert an implicit any-element `*`
					tokens
						.slice( 0, i - 1 )
						.concat( { value: tokens[ i - 2 ].type === " " ? "*" : "" } )
					).replace( rtrim, "$1" ),
					matcher,
					i < j && matcherFromTokens( tokens.slice( i, j ) ),
					j < len && matcherFromTokens( ( tokens = tokens.slice( j ) ) ),
					j < len && toSelector( tokens )
				);
			}
			matchers.push( matcher );
		}
	}

	return elementMatcher( matchers );
}

function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
	var bySet = setMatchers.length > 0,
		byElement = elementMatchers.length > 0,
		superMatcher = function( seed, context, xml, results, outermost ) {
			var elem, j, matcher,
				matchedCount = 0,
				i = "0",
				unmatched = seed && [],
				setMatched = [],
				contextBackup = outermostContext,

				// We must always have either seed elements or outermost context
				elems = seed || byElement && Expr.find[ "TAG" ]( "*", outermost ),

				// Use integer dirruns iff this is the outermost matcher
				dirrunsUnique = ( dirruns += contextBackup == null ? 1 : Math.random() || 0.1 ),
				len = elems.length;

			if ( outermost ) {

				// Support: IE 11+, Edge 17 - 18+
				// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
				// two documents; shallow comparisons work.
				// eslint-disable-next-line eqeqeq
				outermostContext = context == document || context || outermost;
			}

			// Add elements passing elementMatchers directly to results
			// Support: IE<9, Safari
			// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
			for ( ; i !== len && ( elem = elems[ i ] ) != null; i++ ) {
				if ( byElement && elem ) {
					j = 0;

					// Support: IE 11+, Edge 17 - 18+
					// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
					// two documents; shallow comparisons work.
					// eslint-disable-next-line eqeqeq
					if ( !context && elem.ownerDocument != document ) {
						setDocument( elem );
						xml = !documentIsHTML;
					}
					while ( ( matcher = elementMatchers[ j++ ] ) ) {
						if ( matcher( elem, context || document, xml ) ) {
							results.push( elem );
							break;
						}
					}
					if ( outermost ) {
						dirruns = dirrunsUnique;
					}
				}

				// Track unmatched elements for set filters
				if ( bySet ) {

					// They will have gone through all possible matchers
					if ( ( elem = !matcher && elem ) ) {
						matchedCount--;
					}

					// Lengthen the array for every element, matched or not
					if ( seed ) {
						unmatched.push( elem );
					}
				}
			}

			// `i` is now the count of elements visited above, and adding it to `matchedCount`
			// makes the latter nonnegative.
			matchedCount += i;

			// Apply set filters to unmatched elements
			// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
			// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
			// no element matchers and no seed.
			// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
			// case, which will result in a "00" `matchedCount` that differs from `i` but is also
			// numerically zero.
			if ( bySet && i !== matchedCount ) {
				j = 0;
				while ( ( matcher = setMatchers[ j++ ] ) ) {
					matcher( unmatched, setMatched, context, xml );
				}

				if ( seed ) {

					// Reintegrate element matches to eliminate the need for sorting
					if ( matchedCount > 0 ) {
						while ( i-- ) {
							if ( !( unmatched[ i ] || setMatched[ i ] ) ) {
								setMatched[ i ] = pop.call( results );
							}
						}
					}

					// Discard index placeholder values to get only actual matches
					setMatched = condense( setMatched );
				}

				// Add matches to results
				push.apply( results, setMatched );

				// Seedless set matches succeeding multiple successful matchers stipulate sorting
				if ( outermost && !seed && setMatched.length > 0 &&
					( matchedCount + setMatchers.length ) > 1 ) {

					Sizzle.uniqueSort( results );
				}
			}

			// Override manipulation of globals by nested matchers
			if ( outermost ) {
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}

			return unmatched;
		};

	return bySet ?
		markFunction( superMatcher ) :
		superMatcher;
}

compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
	var i,
		setMatchers = [],
		elementMatchers = [],
		cached = compilerCache[ selector + " " ];

	if ( !cached ) {

		// Generate a function of recursive functions that can be used to check each element
		if ( !match ) {
			match = tokenize( selector );
		}
		i = match.length;
		while ( i-- ) {
			cached = matcherFromTokens( match[ i ] );
			if ( cached[ expando ] ) {
				setMatchers.push( cached );
			} else {
				elementMatchers.push( cached );
			}
		}

		// Cache the compiled function
		cached = compilerCache(
			selector,
			matcherFromGroupMatchers( elementMatchers, setMatchers )
		);

		// Save selector and tokenization
		cached.selector = selector;
	}
	return cached;
};

/**
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */
select = Sizzle.select = function( selector, context, results, seed ) {
	var i, tokens, token, type, find,
		compiled = typeof selector === "function" && selector,
		match = !seed && tokenize( ( selector = compiled.selector || selector ) );

	results = results || [];

	// Try to minimize operations if there is only one selector in the list and no seed
	// (the latter of which guarantees us context)
	if ( match.length === 1 ) {

		// Reduce context if the leading compound selector is an ID
		tokens = match[ 0 ] = match[ 0 ].slice( 0 );
		if ( tokens.length > 2 && ( token = tokens[ 0 ] ).type === "ID" &&
			context.nodeType === 9 && documentIsHTML && Expr.relative[ tokens[ 1 ].type ] ) {

			context = ( Expr.find[ "ID" ]( token.matches[ 0 ]
				.replace( runescape, funescape ), context ) || [] )[ 0 ];
			if ( !context ) {
				return results;

			// Precompiled matchers will still verify ancestry, so step up a level
			} else if ( compiled ) {
				context = context.parentNode;
			}

			selector = selector.slice( tokens.shift().value.length );
		}

		// Fetch a seed set for right-to-left matching
		i = matchExpr[ "needsContext" ].test( selector ) ? 0 : tokens.length;
		while ( i-- ) {
			token = tokens[ i ];

			// Abort if we hit a combinator
			if ( Expr.relative[ ( type = token.type ) ] ) {
				break;
			}
			if ( ( find = Expr.find[ type ] ) ) {

				// Search, expanding context for leading sibling combinators
				if ( ( seed = find(
					token.matches[ 0 ].replace( runescape, funescape ),
					rsibling.test( tokens[ 0 ].type ) && testContext( context.parentNode ) ||
						context
				) ) ) {

					// If seed is empty or no tokens remain, we can return early
					tokens.splice( i, 1 );
					selector = seed.length && toSelector( tokens );
					if ( !selector ) {
						push.apply( results, seed );
						return results;
					}

					break;
				}
			}
		}
	}

	// Compile and execute a filtering function if one is not provided
	// Provide `match` to avoid retokenization if we modified the selector above
	( compiled || compile( selector, match ) )(
		seed,
		context,
		!documentIsHTML,
		results,
		!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
	);
	return results;
};

// One-time assignments

// Sort stability
support.sortStable = expando.split( "" ).sort( sortOrder ).join( "" ) === expando;

// Support: Chrome 14-35+
// Always assume duplicates if they aren't passed to the comparison function
support.detectDuplicates = !!hasDuplicate;

// Initialize against the default document
setDocument();

// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
support.sortDetached = assert( function( el ) {

	// Should return 1, but returns 4 (following)
	return el.compareDocumentPosition( document.createElement( "fieldset" ) ) & 1;
} );

// Support: IE<8
// Prevent attribute/property "interpolation"
// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !assert( function( el ) {
	el.innerHTML = "<a href='#'></a>";
	return el.firstChild.getAttribute( "href" ) === "#";
} ) ) {
	addHandle( "type|href|height|width", function( elem, name, isXML ) {
		if ( !isXML ) {
			return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
		}
	} );
}

// Support: IE<9
// Use defaultValue in place of getAttribute("value")
if ( !support.attributes || !assert( function( el ) {
	el.innerHTML = "<input/>";
	el.firstChild.setAttribute( "value", "" );
	return el.firstChild.getAttribute( "value" ) === "";
} ) ) {
	addHandle( "value", function( elem, _name, isXML ) {
		if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
			return elem.defaultValue;
		}
	} );
}

// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
if ( !assert( function( el ) {
	return el.getAttribute( "disabled" ) == null;
} ) ) {
	addHandle( booleans, function( elem, name, isXML ) {
		var val;
		if ( !isXML ) {
			return elem[ name ] === true ? name.toLowerCase() :
				( val = elem.getAttributeNode( name ) ) && val.specified ?
					val.value :
					null;
		}
	} );
}

return Sizzle;

} )( window );



jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;

// Deprecated
jQuery.expr[ ":" ] = jQuery.expr.pseudos;
jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;
jQuery.escapeSelector = Sizzle.escape;




var dir = function( elem, dir, until ) {
	var matched = [],
		truncate = until !== undefined;

	while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
		if ( elem.nodeType === 1 ) {
			if ( truncate && jQuery( elem ).is( until ) ) {
				break;
			}
			matched.push( elem );
		}
	}
	return matched;
};


var siblings = function( n, elem ) {
	var matched = [];

	for ( ; n; n = n.nextSibling ) {
		if ( n.nodeType === 1 && n !== elem ) {
			matched.push( n );
		}
	}

	return matched;
};


var rneedsContext = jQuery.expr.match.needsContext;



function nodeName( elem, name ) {

	return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();

}
var rsingleTag = ( /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i );



// Implement the identical functionality for filter and not
function winnow( elements, qualifier, not ) {
	if ( isFunction( qualifier ) ) {
		return jQuery.grep( elements, function( elem, i ) {
			return !!qualifier.call( elem, i, elem ) !== not;
		} );
	}

	// Single element
	if ( qualifier.nodeType ) {
		return jQuery.grep( elements, function( elem ) {
			return ( elem === qualifier ) !== not;
		} );
	}

	// Arraylike of elements (jQuery, arguments, Array)
	if ( typeof qualifier !== "string" ) {
		return jQuery.grep( elements, function( elem ) {
			return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
		} );
	}

	// Filtered directly for both simple and complex selectors
	return jQuery.filter( qualifier, elements, not );
}

jQuery.filter = function( expr, elems, not ) {
	var elem = elems[ 0 ];

	if ( not ) {
		expr = ":not(" + expr + ")";
	}

	if ( elems.length === 1 && elem.nodeType === 1 ) {
		return jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [];
	}

	return jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
		return elem.nodeType === 1;
	} ) );
};

jQuery.fn.extend( {
	find: function( selector ) {
		var i, ret,
			len = this.length,
			self = this;

		if ( typeof selector !== "string" ) {
			return this.pushStack( jQuery( selector ).filter( function() {
				for ( i = 0; i < len; i++ ) {
					if ( jQuery.contains( self[ i ], this ) ) {
						return true;
					}
				}
			} ) );
		}

		ret = this.pushStack( [] );

		for ( i = 0; i < len; i++ ) {
			jQuery.find( selector, self[ i ], ret );
		}

		return len > 1 ? jQuery.uniqueSort( ret ) : ret;
	},
	filter: function( selector ) {
		return this.pushStack( winnow( this, selector || [], false ) );
	},
	not: function( selector ) {
		return this.pushStack( winnow( this, selector || [], true ) );
	},
	is: function( selector ) {
		return !!winnow(
			this,

			// If this is a positional/relative selector, check membership in the returned set
			// so $("p:first").is("p:last") won't return true for a doc with two "p".
			typeof selector === "string" && rneedsContext.test( selector ) ?
				jQuery( selector ) :
				selector || [],
			false
		).length;
	}
} );


// Initialize a jQuery object


// A central reference to the root jQuery(document)
var rootjQuery,

	// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
	// Strict HTML recognition (#11290: must start with <)
	// Shortcut simple #id case for speed
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,

	init = jQuery.fn.init = function( selector, context, root ) {
		var match, elem;

		// HANDLE: $(""), $(null), $(undefined), $(false)
		if ( !selector ) {
			return this;
		}

		// Method init() accepts an alternate rootjQuery
		// so migrate can support jQuery.sub (gh-2101)
		root = root || rootjQuery;

		// Handle HTML strings
		if ( typeof selector === "string" ) {
			if ( selector[ 0 ] === "<" &&
				selector[ selector.length - 1 ] === ">" &&
				selector.length >= 3 ) {

				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [ null, selector, null ];

			} else {
				match = rquickExpr.exec( selector );
			}

			// Match html or make sure no context is specified for #id
			if ( match && ( match[ 1 ] || !context ) ) {

				// HANDLE: $(html) -> $(array)
				if ( match[ 1 ] ) {
					context = context instanceof jQuery ? context[ 0 ] : context;

					// Option to run scripts is true for back-compat
					// Intentionally let the error be thrown if parseHTML is not present
					jQuery.merge( this, jQuery.parseHTML(
						match[ 1 ],
						context && context.nodeType ? context.ownerDocument || context : document,
						true
					) );

					// HANDLE: $(html, props)
					if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
						for ( match in context ) {

							// Properties of context are called as methods if possible
							if ( isFunction( this[ match ] ) ) {
								this[ match ]( context[ match ] );

							// ...and otherwise set as attributes
							} else {
								this.attr( match, context[ match ] );
							}
						}
					}

					return this;

				// HANDLE: $(#id)
				} else {
					elem = document.getElementById( match[ 2 ] );

					if ( elem ) {

						// Inject the element directly into the jQuery object
						this[ 0 ] = elem;
						this.length = 1;
					}
					return this;
				}

			// HANDLE: $(expr, $(...))
			} else if ( !context || context.jquery ) {
				return ( context || root ).find( selector );

			// HANDLE: $(expr, context)
			// (which is just equivalent to: $(context).find(expr)
			} else {
				return this.constructor( context ).find( selector );
			}

		// HANDLE: $(DOMElement)
		} else if ( selector.nodeType ) {
			this[ 0 ] = selector;
			this.length = 1;
			return this;

		// HANDLE: $(function)
		// Shortcut for document ready
		} else if ( isFunction( selector ) ) {
			return root.ready !== undefined ?
				root.ready( selector ) :

				// Execute immediately if ready is not present
				selector( jQuery );
		}

		return jQuery.makeArray( selector, this );
	};

// Give the init function the jQuery prototype for later instantiation
init.prototype = jQuery.fn;

// Initialize central reference
rootjQuery = jQuery( document );


var rparentsprev = /^(?:parents|prev(?:Until|All))/,

	// Methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique = {
		children: true,
		contents: true,
		next: true,
		prev: true
	};

jQuery.fn.extend( {
	has: function( target ) {
		var targets = jQuery( target, this ),
			l = targets.length;

		return this.filter( function() {
			var i = 0;
			for ( ; i < l; i++ ) {
				if ( jQuery.contains( this, targets[ i ] ) ) {
					return true;
				}
			}
		} );
	},

	closest: function( selectors, context ) {
		var cur,
			i = 0,
			l = this.length,
			matched = [],
			targets = typeof selectors !== "string" && jQuery( selectors );

		// Positional selectors never match, since there's no _selection_ context
		if ( !rneedsContext.test( selectors ) ) {
			for ( ; i < l; i++ ) {
				for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

					// Always skip document fragments
					if ( cur.nodeType < 11 && ( targets ?
						targets.index( cur ) > -1 :

						// Don't pass non-elements to Sizzle
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector( cur, selectors ) ) ) {

						matched.push( cur );
						break;
					}
				}
			}
		}

		return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
	},

	// Determine the position of an element within the set
	index: function( elem ) {

		// No argument, return index in parent
		if ( !elem ) {
			return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
		}

		// Index in selector
		if ( typeof elem === "string" ) {
			return indexOf.call( jQuery( elem ), this[ 0 ] );
		}

		// Locate the position of the desired element
		return indexOf.call( this,

			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[ 0 ] : elem
		);
	},

	add: function( selector, context ) {
		return this.pushStack(
			jQuery.uniqueSort(
				jQuery.merge( this.get(), jQuery( selector, context ) )
			)
		);
	},

	addBack: function( selector ) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter( selector )
		);
	}
} );

function sibling( cur, dir ) {
	while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
	return cur;
}

jQuery.each( {
	parent: function( elem ) {
		var parent = elem.parentNode;
		return parent && parent.nodeType !== 11 ? parent : null;
	},
	parents: function( elem ) {
		return dir( elem, "parentNode" );
	},
	parentsUntil: function( elem, _i, until ) {
		return dir( elem, "parentNode", until );
	},
	next: function( elem ) {
		return sibling( elem, "nextSibling" );
	},
	prev: function( elem ) {
		return sibling( elem, "previousSibling" );
	},
	nextAll: function( elem ) {
		return dir( elem, "nextSibling" );
	},
	prevAll: function( elem ) {
		return dir( elem, "previousSibling" );
	},
	nextUntil: function( elem, _i, until ) {
		return dir( elem, "nextSibling", until );
	},
	prevUntil: function( elem, _i, until ) {
		return dir( elem, "previousSibling", until );
	},
	siblings: function( elem ) {
		return siblings( ( elem.parentNode || {} ).firstChild, elem );
	},
	children: function( elem ) {
		return siblings( elem.firstChild );
	},
	contents: function( elem ) {
		if ( elem.contentDocument != null &&

			// Support: IE 11+
			// <object> elements with no `data` attribute has an object
			// `contentDocument` with a `null` prototype.
			getProto( elem.contentDocument ) ) {

			return elem.contentDocument;
		}

		// Support: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only
		// Treat the template element as a regular one in browsers that
		// don't support it.
		if ( nodeName( elem, "template" ) ) {
			elem = elem.content || elem;
		}

		return jQuery.merge( [], elem.childNodes );
	}
}, function( name, fn ) {
	jQuery.fn[ name ] = function( until, selector ) {
		var matched = jQuery.map( this, fn, until );

		if ( name.slice( -5 ) !== "Until" ) {
			selector = until;
		}

		if ( selector && typeof selector === "string" ) {
			matched = jQuery.filter( selector, matched );
		}

		if ( this.length > 1 ) {

			// Remove duplicates
			if ( !guaranteedUnique[ name ] ) {
				jQuery.uniqueSort( matched );
			}

			// Reverse order for parents* and prev-derivatives
			if ( rparentsprev.test( name ) ) {
				matched.reverse();
			}
		}

		return this.pushStack( matched );
	};
} );
var rnothtmlwhite = ( /[^\x20\t\r\n\f]+/g );



// Convert String-formatted options into Object-formatted ones
function createOptions( options ) {
	var object = {};
	jQuery.each( options.match( rnothtmlwhite ) || [], function( _, flag ) {
		object[ flag ] = true;
	} );
	return object;
}

/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
jQuery.Callbacks = function( options ) {

	// Convert options from String-formatted to Object-formatted if needed
	// (we check in cache first)
	options = typeof options === "string" ?
		createOptions( options ) :
		jQuery.extend( {}, options );

	var // Flag to know if list is currently firing
		firing,

		// Last fire value for non-forgettable lists
		memory,

		// Flag to know if list was already fired
		fired,

		// Flag to prevent firing
		locked,

		// Actual callback list
		list = [],

		// Queue of execution data for repeatable lists
		queue = [],

		// Index of currently firing callback (modified by add/remove as needed)
		firingIndex = -1,

		// Fire callbacks
		fire = function() {

			// Enforce single-firing
			locked = locked || options.once;

			// Execute callbacks for all pending executions,
			// respecting firingIndex overrides and runtime changes
			fired = firing = true;
			for ( ; queue.length; firingIndex = -1 ) {
				memory = queue.shift();
				while ( ++firingIndex < list.length ) {

					// Run callback and check for early termination
					if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
						options.stopOnFalse ) {

						// Jump to end and forget the data so .add doesn't re-fire
						firingIndex = list.length;
						memory = false;
					}
				}
			}

			// Forget the data if we're done with it
			if ( !options.memory ) {
				memory = false;
			}

			firing = false;

			// Clean up if we're done firing for good
			if ( locked ) {

				// Keep an empty list if we have data for future add calls
				if ( memory ) {
					list = [];

				// Otherwise, this object is spent
				} else {
					list = "";
				}
			}
		},

		// Actual Callbacks object
		self = {

			// Add a callback or a collection of callbacks to the list
			add: function() {
				if ( list ) {

					// If we have memory from a past run, we should fire after adding
					if ( memory && !firing ) {
						firingIndex = list.length - 1;
						queue.push( memory );
					}

					( function add( args ) {
						jQuery.each( args, function( _, arg ) {
							if ( isFunction( arg ) ) {
								if ( !options.unique || !self.has( arg ) ) {
									list.push( arg );
								}
							} else if ( arg && arg.length && toType( arg ) !== "string" ) {

								// Inspect recursively
								add( arg );
							}
						} );
					} )( arguments );

					if ( memory && !firing ) {
						fire();
					}
				}
				return this;
			},

			// Remove a callback from the list
			remove: function() {
				jQuery.each( arguments, function( _, arg ) {
					var index;
					while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
						list.splice( index, 1 );

						// Handle firing indexes
						if ( index <= firingIndex ) {
							firingIndex--;
						}
					}
				} );
				return this;
			},

			// Check if a given callback is in the list.
			// If no argument is given, return whether or not list has callbacks attached.
			has: function( fn ) {
				return fn ?
					jQuery.inArray( fn, list ) > -1 :
					list.length > 0;
			},

			// Remove all callbacks from the list
			empty: function() {
				if ( list ) {
					list = [];
				}
				return this;
			},

			// Disable .fire and .add
			// Abort any current/pending executions
			// Clear all callbacks and values
			disable: function() {
				locked = queue = [];
				list = memory = "";
				return this;
			},
			disabled: function() {
				return !list;
			},

			// Disable .fire
			// Also disable .add unless we have memory (since it would have no effect)
			// Abort any pending executions
			lock: function() {
				locked = queue = [];
				if ( !memory && !firing ) {
					list = memory = "";
				}
				return this;
			},
			locked: function() {
				return !!locked;
			},

			// Call all callbacks with the given context and arguments
			fireWith: function( context, args ) {
				if ( !locked ) {
					args = args || [];
					args = [ context, args.slice ? args.slice() : args ];
					queue.push( args );
					if ( !firing ) {
						fire();
					}
				}
				return this;
			},

			// Call all the callbacks with the given arguments
			fire: function() {
				self.fireWith( this, arguments );
				return this;
			},

			// To know if the callbacks have already been called at least once
			fired: function() {
				return !!fired;
			}
		};

	return self;
};


function Identity( v ) {
	return v;
}
function Thrower( ex ) {
	throw ex;
}

function adoptValue( value, resolve, reject, noValue ) {
	var method;

	try {

		// Check for promise aspect first to privilege synchronous behavior
		if ( value && isFunction( ( method = value.promise ) ) ) {
			method.call( value ).done( resolve ).fail( reject );

		// Other thenables
		} else if ( value && isFunction( ( method = value.then ) ) ) {
			method.call( value, resolve, reject );

		// Other non-thenables
		} else {

			// Control `resolve` arguments by letting Array#slice cast boolean `noValue` to integer:
			// * false: [ value ].slice( 0 ) => resolve( value )
			// * true: [ value ].slice( 1 ) => resolve()
			resolve.apply( undefined, [ value ].slice( noValue ) );
		}

	// For Promises/A+, convert exceptions into rejections
	// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
	// Deferred#then to conditionally suppress rejection.
	} catch ( value ) {

		// Support: Android 4.0 only
		// Strict mode functions invoked without .call/.apply get global-object context
		reject.apply( undefined, [ value ] );
	}
}

jQuery.extend( {

	Deferred: function( func ) {
		var tuples = [

				// action, add listener, callbacks,
				// ... .then handlers, argument index, [final state]
				[ "notify", "progress", jQuery.Callbacks( "memory" ),
					jQuery.Callbacks( "memory" ), 2 ],
				[ "resolve", "done", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 0, "resolved" ],
				[ "reject", "fail", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 1, "rejected" ]
			],
			state = "pending",
			promise = {
				state: function() {
					return state;
				},
				always: function() {
					deferred.done( arguments ).fail( arguments );
					return this;
				},
				"catch": function( fn ) {
					return promise.then( null, fn );
				},

				// Keep pipe for back-compat
				pipe: function( /* fnDone, fnFail, fnProgress */ ) {
					var fns = arguments;

					return jQuery.Deferred( function( newDefer ) {
						jQuery.each( tuples, function( _i, tuple ) {

							// Map tuples (progress, done, fail) to arguments (done, fail, progress)
							var fn = isFunction( fns[ tuple[ 4 ] ] ) && fns[ tuple[ 4 ] ];

							// deferred.progress(function() { bind to newDefer or newDefer.notify })
							// deferred.done(function() { bind to newDefer or newDefer.resolve })
							// deferred.fail(function() { bind to newDefer or newDefer.reject })
							deferred[ tuple[ 1 ] ]( function() {
								var returned = fn && fn.apply( this, arguments );
								if ( returned && isFunction( returned.promise ) ) {
									returned.promise()
										.progress( newDefer.notify )
										.done( newDefer.resolve )
										.fail( newDefer.reject );
								} else {
									newDefer[ tuple[ 0 ] + "With" ](
										this,
										fn ? [ returned ] : arguments
									);
								}
							} );
						} );
						fns = null;
					} ).promise();
				},
				then: function( onFulfilled, onRejected, onProgress ) {
					var maxDepth = 0;
					function resolve( depth, deferred, handler, special ) {
						return function() {
							var that = this,
								args = arguments,
								mightThrow = function() {
									var returned, then;

									// Support: Promises/A+ section 2.3.3.3.3
									// https://promisesaplus.com/#point-59
									// Ignore double-resolution attempts
									if ( depth < maxDepth ) {
										return;
									}

									returned = handler.apply( that, args );

									// Support: Promises/A+ section 2.3.1
									// https://promisesaplus.com/#point-48
									if ( returned === deferred.promise() ) {
										throw new TypeError( "Thenable self-resolution" );
									}

									// Support: Promises/A+ sections 2.3.3.1, 3.5
									// https://promisesaplus.com/#point-54
									// https://promisesaplus.com/#point-75
									// Retrieve `then` only once
									then = returned &&

										// Support: Promises/A+ section 2.3.4
										// https://promisesaplus.com/#point-64
										// Only check objects and functions for thenability
										( typeof returned === "object" ||
											typeof returned === "function" ) &&
										returned.then;

									// Handle a returned thenable
									if ( isFunction( then ) ) {

										// Special processors (notify) just wait for resolution
										if ( special ) {
											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special )
											);

										// Normal processors (resolve) also hook into progress
										} else {

											// ...and disregard older resolution values
											maxDepth++;

											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special ),
												resolve( maxDepth, deferred, Identity,
													deferred.notifyWith )
											);
										}

									// Handle all other returned values
									} else {

										// Only substitute handlers pass on context
										// and multiple values (non-spec behavior)
										if ( handler !== Identity ) {
											that = undefined;
											args = [ returned ];
										}

										// Process the value(s)
										// Default process is resolve
										( special || deferred.resolveWith )( that, args );
									}
								},

								// Only normal processors (resolve) catch and reject exceptions
								process = special ?
									mightThrow :
									function() {
										try {
											mightThrow();
										} catch ( e ) {

											if ( jQuery.Deferred.exceptionHook ) {
												jQuery.Deferred.exceptionHook( e,
													process.stackTrace );
											}

											// Support: Promises/A+ section 2.3.3.3.4.1
											// https://promisesaplus.com/#point-61
											// Ignore post-resolution exceptions
											if ( depth + 1 >= maxDepth ) {

												// Only substitute handlers pass on context
												// and multiple values (non-spec behavior)
												if ( handler !== Thrower ) {
													that = undefined;
													args = [ e ];
												}

												deferred.rejectWith( that, args );
											}
										}
									};

							// Support: Promises/A+ section 2.3.3.3.1
							// https://promisesaplus.com/#point-57
							// Re-resolve promises immediately to dodge false rejection from
							// subsequent errors
							if ( depth ) {
								process();
							} else {

								// Call an optional hook to record the stack, in case of exception
								// since it's otherwise lost when execution goes async
								if ( jQuery.Deferred.getStackHook ) {
									process.stackTrace = jQuery.Deferred.getStackHook();
								}
								window.setTimeout( process );
							}
						};
					}

					return jQuery.Deferred( function( newDefer ) {

						// progress_handlers.add( ... )
						tuples[ 0 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onProgress ) ?
									onProgress :
									Identity,
								newDefer.notifyWith
							)
						);

						// fulfilled_handlers.add( ... )
						tuples[ 1 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onFulfilled ) ?
									onFulfilled :
									Identity
							)
						);

						// rejected_handlers.add( ... )
						tuples[ 2 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onRejected ) ?
									onRejected :
									Thrower
							)
						);
					} ).promise();
				},

				// Get a promise for this deferred
				// If obj is provided, the promise aspect is added to the object
				promise: function( obj ) {
					return obj != null ? jQuery.extend( obj, promise ) : promise;
				}
			},
			deferred = {};

		// Add list-specific methods
		jQuery.each( tuples, function( i, tuple ) {
			var list = tuple[ 2 ],
				stateString = tuple[ 5 ];

			// promise.progress = list.add
			// promise.done = list.add
			// promise.fail = list.add
			promise[ tuple[ 1 ] ] = list.add;

			// Handle state
			if ( stateString ) {
				list.add(
					function() {

						// state = "resolved" (i.e., fulfilled)
						// state = "rejected"
						state = stateString;
					},

					// rejected_callbacks.disable
					// fulfilled_callbacks.disable
					tuples[ 3 - i ][ 2 ].disable,

					// rejected_handlers.disable
					// fulfilled_handlers.disable
					tuples[ 3 - i ][ 3 ].disable,

					// progress_callbacks.lock
					tuples[ 0 ][ 2 ].lock,

					// progress_handlers.lock
					tuples[ 0 ][ 3 ].lock
				);
			}

			// progress_handlers.fire
			// fulfilled_handlers.fire
			// rejected_handlers.fire
			list.add( tuple[ 3 ].fire );

			// deferred.notify = function() { deferred.notifyWith(...) }
			// deferred.resolve = function() { deferred.resolveWith(...) }
			// deferred.reject = function() { deferred.rejectWith(...) }
			deferred[ tuple[ 0 ] ] = function() {
				deferred[ tuple[ 0 ] + "With" ]( this === deferred ? undefined : this, arguments );
				return this;
			};

			// deferred.notifyWith = list.fireWith
			// deferred.resolveWith = list.fireWith
			// deferred.rejectWith = list.fireWith
			deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
		} );

		// Make the deferred a promise
		promise.promise( deferred );

		// Call given func if any
		if ( func ) {
			func.call( deferred, deferred );
		}

		// All done!
		return deferred;
	},

	// Deferred helper
	when: function( singleValue ) {
		var

			// count of uncompleted subordinates
			remaining = arguments.length,

			// count of unprocessed arguments
			i = remaining,

			// subordinate fulfillment data
			resolveContexts = Array( i ),
			resolveValues = slice.call( arguments ),

			// the primary Deferred
			primary = jQuery.Deferred(),

			// subordinate callback factory
			updateFunc = function( i ) {
				return function( value ) {
					resolveContexts[ i ] = this;
					resolveValues[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
					if ( !( --remaining ) ) {
						primary.resolveWith( resolveContexts, resolveValues );
					}
				};
			};

		// Single- and empty arguments are adopted like Promise.resolve
		if ( remaining <= 1 ) {
			adoptValue( singleValue, primary.done( updateFunc( i ) ).resolve, primary.reject,
				!remaining );

			// Use .then() to unwrap secondary thenables (cf. gh-3000)
			if ( primary.state() === "pending" ||
				isFunction( resolveValues[ i ] && resolveValues[ i ].then ) ) {

				return primary.then();
			}
		}

		// Multiple arguments are aggregated like Promise.all array elements
		while ( i-- ) {
			adoptValue( resolveValues[ i ], updateFunc( i ), primary.reject );
		}

		return primary.promise();
	}
} );


// These usually indicate a programmer mistake during development,
// warn about them ASAP rather than swallowing them by default.
var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;

jQuery.Deferred.exceptionHook = function( error, stack ) {

	// Support: IE 8 - 9 only
	// Console exists when dev tools are open, which can happen at any time
	if ( window.console && window.console.warn && error && rerrorNames.test( error.name ) ) {
		window.console.warn( "jQuery.Deferred exception: " + error.message, error.stack, stack );
	}
};




jQuery.readyException = function( error ) {
	window.setTimeout( function() {
		throw error;
	} );
};




// The deferred used on DOM ready
var readyList = jQuery.Deferred();

jQuery.fn.ready = function( fn ) {

	readyList
		.then( fn )

		// Wrap jQuery.readyException in a function so that the lookup
		// happens at the time of error handling instead of callback
		// registration.
		.catch( function( error ) {
			jQuery.readyException( error );
		} );

	return this;
};

jQuery.extend( {

	// Is the DOM ready to be used? Set to true once it occurs.
	isReady: false,

	// A counter to track how many items to wait for before
	// the ready event fires. See #6781
	readyWait: 1,

	// Handle when the DOM is ready
	ready: function( wait ) {

		// Abort if there are pending holds or we're already ready
		if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
			return;
		}

		// Remember that the DOM is ready
		jQuery.isReady = true;

		// If a normal DOM Ready event fired, decrement, and wait if need be
		if ( wait !== true && --jQuery.readyWait > 0 ) {
			return;
		}

		// If there are functions bound, to execute
		readyList.resolveWith( document, [ jQuery ] );
	}
} );

jQuery.ready.then = readyList.then;

// The ready event handler and self cleanup method
function completed() {
	document.removeEventListener( "DOMContentLoaded", completed );
	window.removeEventListener( "load", completed );
	jQuery.ready();
}

// Catch cases where $(document).ready() is called
// after the browser event has already occurred.
// Support: IE <=9 - 10 only
// Older IE sometimes signals "interactive" too soon
if ( document.readyState === "complete" ||
	( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

	// Handle it asynchronously to allow scripts the opportunity to delay ready
	window.setTimeout( jQuery.ready );

} else {

	// Use the handy event callback
	document.addEventListener( "DOMContentLoaded", completed );

	// A fallback to window.onload, that will always work
	window.addEventListener( "load", completed );
}




// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
	var i = 0,
		len = elems.length,
		bulk = key == null;

	// Sets many values
	if ( toType( key ) === "object" ) {
		chainable = true;
		for ( i in key ) {
			access( elems, fn, i, key[ i ], true, emptyGet, raw );
		}

	// Sets one value
	} else if ( value !== undefined ) {
		chainable = true;

		if ( !isFunction( value ) ) {
			raw = true;
		}

		if ( bulk ) {

			// Bulk operations run against the entire set
			if ( raw ) {
				fn.call( elems, value );
				fn = null;

			// ...except when executing function values
			} else {
				bulk = fn;
				fn = function( elem, _key, value ) {
					return bulk.call( jQuery( elem ), value );
				};
			}
		}

		if ( fn ) {
			for ( ; i < len; i++ ) {
				fn(
					elems[ i ], key, raw ?
						value :
						value.call( elems[ i ], i, fn( elems[ i ], key ) )
				);
			}
		}
	}

	if ( chainable ) {
		return elems;
	}

	// Gets
	if ( bulk ) {
		return fn.call( elems );
	}

	return len ? fn( elems[ 0 ], key ) : emptyGet;
};


// Matches dashed string for camelizing
var rmsPrefix = /^-ms-/,
	rdashAlpha = /-([a-z])/g;

// Used by camelCase as callback to replace()
function fcamelCase( _all, letter ) {
	return letter.toUpperCase();
}

// Convert dashed to camelCase; used by the css and data modules
// Support: IE <=9 - 11, Edge 12 - 15
// Microsoft forgot to hump their vendor prefix (#9572)
function camelCase( string ) {
	return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
}
var acceptData = function( owner ) {

	// Accepts only:
	//  - Node
	//    - Node.ELEMENT_NODE
	//    - Node.DOCUMENT_NODE
	//  - Object
	//    - Any
	return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
};




function Data() {
	this.expando = jQuery.expando + Data.uid++;
}

Data.uid = 1;

Data.prototype = {

	cache: function( owner ) {

		// Check if the owner object already has a cache
		var value = owner[ this.expando ];

		// If not, create one
		if ( !value ) {
			value = {};

			// We can accept data for non-element nodes in modern browsers,
			// but we should not, see #8335.
			// Always return an empty object.
			if ( acceptData( owner ) ) {

				// If it is a node unlikely to be stringify-ed or looped over
				// use plain assignment
				if ( owner.nodeType ) {
					owner[ this.expando ] = value;

				// Otherwise secure it in a non-enumerable property
				// configurable must be true to allow the property to be
				// deleted when data is removed
				} else {
					Object.defineProperty( owner, this.expando, {
						value: value,
						configurable: true
					} );
				}
			}
		}

		return value;
	},
	set: function( owner, data, value ) {
		var prop,
			cache = this.cache( owner );

		// Handle: [ owner, key, value ] args
		// Always use camelCase key (gh-2257)
		if ( typeof data === "string" ) {
			cache[ camelCase( data ) ] = value;

		// Handle: [ owner, { properties } ] args
		} else {

			// Copy the properties one-by-one to the cache object
			for ( prop in data ) {
				cache[ camelCase( prop ) ] = data[ prop ];
			}
		}
		return cache;
	},
	get: function( owner, key ) {
		return key === undefined ?
			this.cache( owner ) :

			// Always use camelCase key (gh-2257)
			owner[ this.expando ] && owner[ this.expando ][ camelCase( key ) ];
	},
	access: function( owner, key, value ) {

		// In cases where either:
		//
		//   1. No key was specified
		//   2. A string key was specified, but no value provided
		//
		// Take the "read" path and allow the get method to determine
		// which value to return, respectively either:
		//
		//   1. The entire cache object
		//   2. The data stored at the key
		//
		if ( key === undefined ||
				( ( key && typeof key === "string" ) && value === undefined ) ) {

			return this.get( owner, key );
		}

		// When the key is not a string, or both a key and value
		// are specified, set or extend (existing objects) with either:
		//
		//   1. An object of properties
		//   2. A key and value
		//
		this.set( owner, key, value );

		// Since the "set" path can have two possible entry points
		// return the expected data based on which path was taken[*]
		return value !== undefined ? value : key;
	},
	remove: function( owner, key ) {
		var i,
			cache = owner[ this.expando ];

		if ( cache === undefined ) {
			return;
		}

		if ( key !== undefined ) {

			// Support array or space separated string of keys
			if ( Array.isArray( key ) ) {

				// If key is an array of keys...
				// We always set camelCase keys, so remove that.
				key = key.map( camelCase );
			} else {
				key = camelCase( key );

				// If a key with the spaces exists, use it.
				// Otherwise, create an array by matching non-whitespace
				key = key in cache ?
					[ key ] :
					( key.match( rnothtmlwhite ) || [] );
			}

			i = key.length;

			while ( i-- ) {
				delete cache[ key[ i ] ];
			}
		}

		// Remove the expando if there's no more data
		if ( key === undefined || jQuery.isEmptyObject( cache ) ) {

			// Support: Chrome <=35 - 45
			// Webkit & Blink performance suffers when deleting properties
			// from DOM nodes, so set to undefined instead
			// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
			if ( owner.nodeType ) {
				owner[ this.expando ] = undefined;
			} else {
				delete owner[ this.expando ];
			}
		}
	},
	hasData: function( owner ) {
		var cache = owner[ this.expando ];
		return cache !== undefined && !jQuery.isEmptyObject( cache );
	}
};
var dataPriv = new Data();

var dataUser = new Data();



//	Implementation Summary
//
//	1. Enforce API surface and semantic compatibility with 1.9.x branch
//	2. Improve the module's maintainability by reducing the storage
//		paths to a single mechanism.
//	3. Use the same single mechanism to support "private" and "user" data.
//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
//	5. Avoid exposing implementation details on user objects (eg. expando properties)
//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	rmultiDash = /[A-Z]/g;

function getData( data ) {
	if ( data === "true" ) {
		return true;
	}

	if ( data === "false" ) {
		return false;
	}

	if ( data === "null" ) {
		return null;
	}

	// Only convert to a number if it doesn't change the string
	if ( data === +data + "" ) {
		return +data;
	}

	if ( rbrace.test( data ) ) {
		return JSON.parse( data );
	}

	return data;
}

function dataAttr( elem, key, data ) {
	var name;

	// If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if ( data === undefined && elem.nodeType === 1 ) {
		name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
		data = elem.getAttribute( name );

		if ( typeof data === "string" ) {
			try {
				data = getData( data );
			} catch ( e ) {}

			// Make sure we set the data so it isn't changed later
			dataUser.set( elem, key, data );
		} else {
			data = undefined;
		}
	}
	return data;
}

jQuery.extend( {
	hasData: function( elem ) {
		return dataUser.hasData( elem ) || dataPriv.hasData( elem );
	},

	data: function( elem, name, data ) {
		return dataUser.access( elem, name, data );
	},

	removeData: function( elem, name ) {
		dataUser.remove( elem, name );
	},

	// TODO: Now that all calls to _data and _removeData have been replaced
	// with direct calls to dataPriv methods, these can be deprecated.
	_data: function( elem, name, data ) {
		return dataPriv.access( elem, name, data );
	},

	_removeData: function( elem, name ) {
		dataPriv.remove( elem, name );
	}
} );

jQuery.fn.extend( {
	data: function( key, value ) {
		var i, name, data,
			elem = this[ 0 ],
			attrs = elem && elem.attributes;

		// Gets all values
		if ( key === undefined ) {
			if ( this.length ) {
				data = dataUser.get( elem );

				if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
					i = attrs.length;
					while ( i-- ) {

						// Support: IE 11 only
						// The attrs elements can be null (#14894)
						if ( attrs[ i ] ) {
							name = attrs[ i ].name;
							if ( name.indexOf( "data-" ) === 0 ) {
								name = camelCase( name.slice( 5 ) );
								dataAttr( elem, name, data[ name ] );
							}
						}
					}
					dataPriv.set( elem, "hasDataAttrs", true );
				}
			}

			return data;
		}

		// Sets multiple values
		if ( typeof key === "object" ) {
			return this.each( function() {
				dataUser.set( this, key );
			} );
		}

		return access( this, function( value ) {
			var data;

			// The calling jQuery object (element matches) is not empty
			// (and therefore has an element appears at this[ 0 ]) and the
			// `value` parameter was not undefined. An empty jQuery object
			// will result in `undefined` for elem = this[ 0 ] which will
			// throw an exception if an attempt to read a data cache is made.
			if ( elem && value === undefined ) {

				// Attempt to get data from the cache
				// The key will always be camelCased in Data
				data = dataUser.get( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// Attempt to "discover" the data in
				// HTML5 custom data-* attrs
				data = dataAttr( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// We tried really hard, but the data doesn't exist.
				return;
			}

			// Set the data...
			this.each( function() {

				// We always store the camelCased key
				dataUser.set( this, key, value );
			} );
		}, null, value, arguments.length > 1, null, true );
	},

	removeData: function( key ) {
		return this.each( function() {
			dataUser.remove( this, key );
		} );
	}
} );


jQuery.extend( {
	queue: function( elem, type, data ) {
		var queue;

		if ( elem ) {
			type = ( type || "fx" ) + "queue";
			queue = dataPriv.get( elem, type );

			// Speed up dequeue by getting out quickly if this is just a lookup
			if ( data ) {
				if ( !queue || Array.isArray( data ) ) {
					queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
				} else {
					queue.push( data );
				}
			}
			return queue || [];
		}
	},

	dequeue: function( elem, type ) {
		type = type || "fx";

		var queue = jQuery.queue( elem, type ),
			startLength = queue.length,
			fn = queue.shift(),
			hooks = jQuery._queueHooks( elem, type ),
			next = function() {
				jQuery.dequeue( elem, type );
			};

		// If the fx queue is dequeued, always remove the progress sentinel
		if ( fn === "inprogress" ) {
			fn = queue.shift();
			startLength--;
		}

		if ( fn ) {

			// Add a progress sentinel to prevent the fx queue from being
			// automatically dequeued
			if ( type === "fx" ) {
				queue.unshift( "inprogress" );
			}

			// Clear up the last queue stop function
			delete hooks.stop;
			fn.call( elem, next, hooks );
		}

		if ( !startLength && hooks ) {
			hooks.empty.fire();
		}
	},

	// Not public - generate a queueHooks object, or return the current one
	_queueHooks: function( elem, type ) {
		var key = type + "queueHooks";
		return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
			empty: jQuery.Callbacks( "once memory" ).add( function() {
				dataPriv.remove( elem, [ type + "queue", key ] );
			} )
		} );
	}
} );

jQuery.fn.extend( {
	queue: function( type, data ) {
		var setter = 2;

		if ( typeof type !== "string" ) {
			data = type;
			type = "fx";
			setter--;
		}

		if ( arguments.length < setter ) {
			return jQuery.queue( this[ 0 ], type );
		}

		return data === undefined ?
			this :
			this.each( function() {
				var queue = jQuery.queue( this, type, data );

				// Ensure a hooks for this queue
				jQuery._queueHooks( this, type );

				if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
					jQuery.dequeue( this, type );
				}
			} );
	},
	dequeue: function( type ) {
		return this.each( function() {
			jQuery.dequeue( this, type );
		} );
	},
	clearQueue: function( type ) {
		return this.queue( type || "fx", [] );
	},

	// Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise: function( type, obj ) {
		var tmp,
			count = 1,
			defer = jQuery.Deferred(),
			elements = this,
			i = this.length,
			resolve = function() {
				if ( !( --count ) ) {
					defer.resolveWith( elements, [ elements ] );
				}
			};

		if ( typeof type !== "string" ) {
			obj = type;
			type = undefined;
		}
		type = type || "fx";

		while ( i-- ) {
			tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
			if ( tmp && tmp.empty ) {
				count++;
				tmp.empty.add( resolve );
			}
		}
		resolve();
		return defer.promise( obj );
	}
} );
var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );


var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

var documentElement = document.documentElement;



	var isAttached = function( elem ) {
			return jQuery.contains( elem.ownerDocument, elem );
		},
		composed = { composed: true };

	// Support: IE 9 - 11+, Edge 12 - 18+, iOS 10.0 - 10.2 only
	// Check attachment across shadow DOM boundaries when possible (gh-3504)
	// Support: iOS 10.0-10.2 only
	// Early iOS 10 versions support `attachShadow` but not `getRootNode`,
	// leading to errors. We need to check for `getRootNode`.
	if ( documentElement.getRootNode ) {
		isAttached = function( elem ) {
			return jQuery.contains( elem.ownerDocument, elem ) ||
				elem.getRootNode( composed ) === elem.ownerDocument;
		};
	}
var isHiddenWithinTree = function( elem, el ) {

		// isHiddenWithinTree might be called from jQuery#filter function;
		// in that case, element will be second argument
		elem = el || elem;

		// Inline style trumps all
		return elem.style.display === "none" ||
			elem.style.display === "" &&

			// Otherwise, check computed style
			// Support: Firefox <=43 - 45
			// Disconnected elements can have computed display: none, so first confirm that elem is
			// in the document.
			isAttached( elem ) &&

			jQuery.css( elem, "display" ) === "none";
	};



function adjustCSS( elem, prop, valueParts, tween ) {
	var adjusted, scale,
		maxIterations = 20,
		currentValue = tween ?
			function() {
				return tween.cur();
			} :
			function() {
				return jQuery.css( elem, prop, "" );
			},
		initial = currentValue(),
		unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

		// Starting value computation is required for potential unit mismatches
		initialInUnit = elem.nodeType &&
			( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
			rcssNum.exec( jQuery.css( elem, prop ) );

	if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

		// Support: Firefox <=54
		// Halve the iteration target value to prevent interference from CSS upper bounds (gh-2144)
		initial = initial / 2;

		// Trust units reported by jQuery.css
		unit = unit || initialInUnit[ 3 ];

		// Iteratively approximate from a nonzero starting point
		initialInUnit = +initial || 1;

		while ( maxIterations-- ) {

			// Evaluate and update our best guess (doubling guesses that zero out).
			// Finish if the scale equals or crosses 1 (making the old*new product non-positive).
			jQuery.style( elem, prop, initialInUnit + unit );
			if ( ( 1 - scale ) * ( 1 - ( scale = currentValue() / initial || 0.5 ) ) <= 0 ) {
				maxIterations = 0;
			}
			initialInUnit = initialInUnit / scale;

		}

		initialInUnit = initialInUnit * 2;
		jQuery.style( elem, prop, initialInUnit + unit );

		// Make sure we update the tween properties later on
		valueParts = valueParts || [];
	}

	if ( valueParts ) {
		initialInUnit = +initialInUnit || +initial || 0;

		// Apply relative offset (+=/-=) if specified
		adjusted = valueParts[ 1 ] ?
			initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
			+valueParts[ 2 ];
		if ( tween ) {
			tween.unit = unit;
			tween.start = initialInUnit;
			tween.end = adjusted;
		}
	}
	return adjusted;
}


var defaultDisplayMap = {};

function getDefaultDisplay( elem ) {
	var temp,
		doc = elem.ownerDocument,
		nodeName = elem.nodeName,
		display = defaultDisplayMap[ nodeName ];

	if ( display ) {
		return display;
	}

	temp = doc.body.appendChild( doc.createElement( nodeName ) );
	display = jQuery.css( temp, "display" );

	temp.parentNode.removeChild( temp );

	if ( display === "none" ) {
		display = "block";
	}
	defaultDisplayMap[ nodeName ] = display;

	return display;
}

function showHide( elements, show ) {
	var display, elem,
		values = [],
		index = 0,
		length = elements.length;

	// Determine new display value for elements that need to change
	for ( ; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}

		display = elem.style.display;
		if ( show ) {

			// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
			// check is required in this first loop unless we have a nonempty display value (either
			// inline or about-to-be-restored)
			if ( display === "none" ) {
				values[ index ] = dataPriv.get( elem, "display" ) || null;
				if ( !values[ index ] ) {
					elem.style.display = "";
				}
			}
			if ( elem.style.display === "" && isHiddenWithinTree( elem ) ) {
				values[ index ] = getDefaultDisplay( elem );
			}
		} else {
			if ( display !== "none" ) {
				values[ index ] = "none";

				// Remember what we're overwriting
				dataPriv.set( elem, "display", display );
			}
		}
	}

	// Set the display of the elements in a second loop to avoid constant reflow
	for ( index = 0; index < length; index++ ) {
		if ( values[ index ] != null ) {
			elements[ index ].style.display = values[ index ];
		}
	}

	return elements;
}

jQuery.fn.extend( {
	show: function() {
		return showHide( this, true );
	},
	hide: function() {
		return showHide( this );
	},
	toggle: function( state ) {
		if ( typeof state === "boolean" ) {
			return state ? this.show() : this.hide();
		}

		return this.each( function() {
			if ( isHiddenWithinTree( this ) ) {
				jQuery( this ).show();
			} else {
				jQuery( this ).hide();
			}
		} );
	}
} );
var rcheckableType = ( /^(?:checkbox|radio)$/i );

var rtagName = ( /<([a-z][^\/\0>\x20\t\r\n\f]*)/i );

var rscriptType = ( /^$|^module$|\/(?:java|ecma)script/i );



( function() {
	var fragment = document.createDocumentFragment(),
		div = fragment.appendChild( document.createElement( "div" ) ),
		input = document.createElement( "input" );

	// Support: Android 4.0 - 4.3 only
	// Check state lost if the name is set (#11217)
	// Support: Windows Web Apps (WWA)
	// `name` and `type` must use .setAttribute for WWA (#14901)
	input.setAttribute( "type", "radio" );
	input.setAttribute( "checked", "checked" );
	input.setAttribute( "name", "t" );

	div.appendChild( input );

	// Support: Android <=4.1 only
	// Older WebKit doesn't clone checked state correctly in fragments
	support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// Support: IE <=11 only
	// Make sure textarea (and checkbox) defaultValue is properly cloned
	div.innerHTML = "<textarea>x</textarea>";
	support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;

	// Support: IE <=9 only
	// IE <=9 replaces <option> tags with their contents when inserted outside of
	// the select element.
	div.innerHTML = "<option></option>";
	support.option = !!div.lastChild;
} )();


// We have to close these tags to support XHTML (#13200)
var wrapMap = {

	// XHTML parsers do not magically insert elements in the
	// same way that tag soup parsers do. So we cannot shorten
	// this by omitting <tbody> or other required elements.
	thead: [ 1, "<table>", "</table>" ],
	col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
	tr: [ 2, "<table><tbody>", "</tbody></table>" ],
	td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

	_default: [ 0, "", "" ]
};

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;

// Support: IE <=9 only
if ( !support.option ) {
	wrapMap.optgroup = wrapMap.option = [ 1, "<select multiple='multiple'>", "</select>" ];
}


function getAll( context, tag ) {

	// Support: IE <=9 - 11 only
	// Use typeof to avoid zero-argument method invocation on host objects (#15151)
	var ret;

	if ( typeof context.getElementsByTagName !== "undefined" ) {
		ret = context.getElementsByTagName( tag || "*" );

	} else if ( typeof context.querySelectorAll !== "undefined" ) {
		ret = context.querySelectorAll( tag || "*" );

	} else {
		ret = [];
	}

	if ( tag === undefined || tag && nodeName( context, tag ) ) {
		return jQuery.merge( [ context ], ret );
	}

	return ret;
}


// Mark scripts as having already been evaluated
function setGlobalEval( elems, refElements ) {
	var i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		dataPriv.set(
			elems[ i ],
			"globalEval",
			!refElements || dataPriv.get( refElements[ i ], "globalEval" )
		);
	}
}


var rhtml = /<|&#?\w+;/;

function buildFragment( elems, context, scripts, selection, ignored ) {
	var elem, tmp, tag, wrap, attached, j,
		fragment = context.createDocumentFragment(),
		nodes = [],
		i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		elem = elems[ i ];

		if ( elem || elem === 0 ) {

			// Add nodes directly
			if ( toType( elem ) === "object" ) {

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

			// Convert non-html into a text node
			} else if ( !rhtml.test( elem ) ) {
				nodes.push( context.createTextNode( elem ) );

			// Convert html into DOM nodes
			} else {
				tmp = tmp || fragment.appendChild( context.createElement( "div" ) );

				// Deserialize a standard representation
				tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
				wrap = wrapMap[ tag ] || wrapMap._default;
				tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

				// Descend through wrappers to the right content
				j = wrap[ 0 ];
				while ( j-- ) {
					tmp = tmp.lastChild;
				}

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, tmp.childNodes );

				// Remember the top-level container
				tmp = fragment.firstChild;

				// Ensure the created nodes are orphaned (#12392)
				tmp.textContent = "";
			}
		}
	}

	// Remove wrapper from fragment
	fragment.textContent = "";

	i = 0;
	while ( ( elem = nodes[ i++ ] ) ) {

		// Skip elements already in the context collection (trac-4087)
		if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
			if ( ignored ) {
				ignored.push( elem );
			}
			continue;
		}

		attached = isAttached( elem );

		// Append to fragment
		tmp = getAll( fragment.appendChild( elem ), "script" );

		// Preserve script evaluation history
		if ( attached ) {
			setGlobalEval( tmp );
		}

		// Capture executables
		if ( scripts ) {
			j = 0;
			while ( ( elem = tmp[ j++ ] ) ) {
				if ( rscriptType.test( elem.type || "" ) ) {
					scripts.push( elem );
				}
			}
		}
	}

	return fragment;
}


var rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

function returnTrue() {
	return true;
}

function returnFalse() {
	return false;
}

// Support: IE <=9 - 11+
// focus() and blur() are asynchronous, except when they are no-op.
// So expect focus to be synchronous when the element is already active,
// and blur to be synchronous when the element is not already active.
// (focus and blur are always synchronous in other supported browsers,
// this just defines when we can count on it).
function expectSync( elem, type ) {
	return ( elem === safeActiveElement() ) === ( type === "focus" );
}

// Support: IE <=9 only
// Accessing document.activeElement can throw unexpectedly
// https://bugs.jquery.com/ticket/13393
function safeActiveElement() {
	try {
		return document.activeElement;
	} catch ( err ) { }
}

function on( elem, types, selector, data, fn, one ) {
	var origFn, type;

	// Types can be a map of types/handlers
	if ( typeof types === "object" ) {

		// ( types-Object, selector, data )
		if ( typeof selector !== "string" ) {

			// ( types-Object, data )
			data = data || selector;
			selector = undefined;
		}
		for ( type in types ) {
			on( elem, type, selector, data, types[ type ], one );
		}
		return elem;
	}

	if ( data == null && fn == null ) {

		// ( types, fn )
		fn = selector;
		data = selector = undefined;
	} else if ( fn == null ) {
		if ( typeof selector === "string" ) {

			// ( types, selector, fn )
			fn = data;
			data = undefined;
		} else {

			// ( types, data, fn )
			fn = data;
			data = selector;
			selector = undefined;
		}
	}
	if ( fn === false ) {
		fn = returnFalse;
	} else if ( !fn ) {
		return elem;
	}

	if ( one === 1 ) {
		origFn = fn;
		fn = function( event ) {

			// Can use an empty set, since event contains the info
			jQuery().off( event );
			return origFn.apply( this, arguments );
		};

		// Use same guid so caller can remove using origFn
		fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
	}
	return elem.each( function() {
		jQuery.event.add( this, types, fn, data, selector );
	} );
}

/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = {

	global: {},

	add: function( elem, types, handler, data, selector ) {

		var handleObjIn, eventHandle, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.get( elem );

		// Only attach events to objects that accept data
		if ( !acceptData( elem ) ) {
			return;
		}

		// Caller can pass in an object of custom data in lieu of the handler
		if ( handler.handler ) {
			handleObjIn = handler;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		// Ensure that invalid selectors throw exceptions at attach time
		// Evaluate against documentElement in case elem is a non-element node (e.g., document)
		if ( selector ) {
			jQuery.find.matchesSelector( documentElement, selector );
		}

		// Make sure that the handler has a unique ID, used to find/remove it later
		if ( !handler.guid ) {
			handler.guid = jQuery.guid++;
		}

		// Init the element's event structure and main handler, if this is the first
		if ( !( events = elemData.events ) ) {
			events = elemData.events = Object.create( null );
		}
		if ( !( eventHandle = elemData.handle ) ) {
			eventHandle = elemData.handle = function( e ) {

				// Discard the second event of a jQuery.event.trigger() and
				// when an event is called after a page has unloaded
				return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
					jQuery.event.dispatch.apply( elem, arguments ) : undefined;
			};
		}

		// Handle multiple events separated by a space
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// There *must* be a type, no attaching namespace-only handlers
			if ( !type ) {
				continue;
			}

			// If event changes its type, use the special event handlers for the changed type
			special = jQuery.event.special[ type ] || {};

			// If selector defined, determine special event api type, otherwise given type
			type = ( selector ? special.delegateType : special.bindType ) || type;

			// Update special based on newly reset type
			special = jQuery.event.special[ type ] || {};

			// handleObj is passed to all event handlers
			handleObj = jQuery.extend( {
				type: type,
				origType: origType,
				data: data,
				handler: handler,
				guid: handler.guid,
				selector: selector,
				needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
				namespace: namespaces.join( "." )
			}, handleObjIn );

			// Init the event handler queue if we're the first
			if ( !( handlers = events[ type ] ) ) {
				handlers = events[ type ] = [];
				handlers.delegateCount = 0;

				// Only use addEventListener if the special events handler returns false
				if ( !special.setup ||
					special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

					if ( elem.addEventListener ) {
						elem.addEventListener( type, eventHandle );
					}
				}
			}

			if ( special.add ) {
				special.add.call( elem, handleObj );

				if ( !handleObj.handler.guid ) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Add to the element's handler list, delegates in front
			if ( selector ) {
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			} else {
				handlers.push( handleObj );
			}

			// Keep track of which events have ever been used, for event optimization
			jQuery.event.global[ type ] = true;
		}

	},

	// Detach an event or set of events from an element
	remove: function( elem, types, handler, selector, mappedTypes ) {

		var j, origCount, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

		if ( !elemData || !( events = elemData.events ) ) {
			return;
		}

		// Once for each type.namespace in types; type may be omitted
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// Unbind all events (on this namespace, if provided) for the element
			if ( !type ) {
				for ( type in events ) {
					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
				}
				continue;
			}

			special = jQuery.event.special[ type ] || {};
			type = ( selector ? special.delegateType : special.bindType ) || type;
			handlers = events[ type ] || [];
			tmp = tmp[ 2 ] &&
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

			// Remove matching events
			origCount = j = handlers.length;
			while ( j-- ) {
				handleObj = handlers[ j ];

				if ( ( mappedTypes || origType === handleObj.origType ) &&
					( !handler || handler.guid === handleObj.guid ) &&
					( !tmp || tmp.test( handleObj.namespace ) ) &&
					( !selector || selector === handleObj.selector ||
						selector === "**" && handleObj.selector ) ) {
					handlers.splice( j, 1 );

					if ( handleObj.selector ) {
						handlers.delegateCount--;
					}
					if ( special.remove ) {
						special.remove.call( elem, handleObj );
					}
				}
			}

			// Remove generic event handler if we removed something and no more handlers exist
			// (avoids potential for endless recursion during removal of special event handlers)
			if ( origCount && !handlers.length ) {
				if ( !special.teardown ||
					special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

					jQuery.removeEvent( elem, type, elemData.handle );
				}

				delete events[ type ];
			}
		}

		// Remove data and the expando if it's no longer used
		if ( jQuery.isEmptyObject( events ) ) {
			dataPriv.remove( elem, "handle events" );
		}
	},

	dispatch: function( nativeEvent ) {

		var i, j, ret, matched, handleObj, handlerQueue,
			args = new Array( arguments.length ),

			// Make a writable jQuery.Event from the native event object
			event = jQuery.event.fix( nativeEvent ),

			handlers = (
				dataPriv.get( this, "events" ) || Object.create( null )
			)[ event.type ] || [],
			special = jQuery.event.special[ event.type ] || {};

		// Use the fix-ed jQuery.Event rather than the (read-only) native event
		args[ 0 ] = event;

		for ( i = 1; i < arguments.length; i++ ) {
			args[ i ] = arguments[ i ];
		}

		event.delegateTarget = this;

		// Call the preDispatch hook for the mapped type, and let it bail if desired
		if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
			return;
		}

		// Determine handlers
		handlerQueue = jQuery.event.handlers.call( this, event, handlers );

		// Run delegates first; they may want to stop propagation beneath us
		i = 0;
		while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
			event.currentTarget = matched.elem;

			j = 0;
			while ( ( handleObj = matched.handlers[ j++ ] ) &&
				!event.isImmediatePropagationStopped() ) {

				// If the event is namespaced, then each handler is only invoked if it is
				// specially universal or its namespaces are a superset of the event's.
				if ( !event.rnamespace || handleObj.namespace === false ||
					event.rnamespace.test( handleObj.namespace ) ) {

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
						handleObj.handler ).apply( matched.elem, args );

					if ( ret !== undefined ) {
						if ( ( event.result = ret ) === false ) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
		}

		// Call the postDispatch hook for the mapped type
		if ( special.postDispatch ) {
			special.postDispatch.call( this, event );
		}

		return event.result;
	},

	handlers: function( event, handlers ) {
		var i, handleObj, sel, matchedHandlers, matchedSelectors,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = event.target;

		// Find delegate handlers
		if ( delegateCount &&

			// Support: IE <=9
			// Black-hole SVG <use> instance trees (trac-13180)
			cur.nodeType &&

			// Support: Firefox <=42
			// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
			// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
			// Support: IE 11 only
			// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
			!( event.type === "click" && event.button >= 1 ) ) {

			for ( ; cur !== this; cur = cur.parentNode || this ) {

				// Don't check non-elements (#13208)
				// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
				if ( cur.nodeType === 1 && !( event.type === "click" && cur.disabled === true ) ) {
					matchedHandlers = [];
					matchedSelectors = {};
					for ( i = 0; i < delegateCount; i++ ) {
						handleObj = handlers[ i ];

						// Don't conflict with Object.prototype properties (#13203)
						sel = handleObj.selector + " ";

						if ( matchedSelectors[ sel ] === undefined ) {
							matchedSelectors[ sel ] = handleObj.needsContext ?
								jQuery( sel, this ).index( cur ) > -1 :
								jQuery.find( sel, this, null, [ cur ] ).length;
						}
						if ( matchedSelectors[ sel ] ) {
							matchedHandlers.push( handleObj );
						}
					}
					if ( matchedHandlers.length ) {
						handlerQueue.push( { elem: cur, handlers: matchedHandlers } );
					}
				}
			}
		}

		// Add the remaining (directly-bound) handlers
		cur = this;
		if ( delegateCount < handlers.length ) {
			handlerQueue.push( { elem: cur, handlers: handlers.slice( delegateCount ) } );
		}

		return handlerQueue;
	},

	addProp: function( name, hook ) {
		Object.defineProperty( jQuery.Event.prototype, name, {
			enumerable: true,
			configurable: true,

			get: isFunction( hook ) ?
				function() {
					if ( this.originalEvent ) {
						return hook( this.originalEvent );
					}
				} :
				function() {
					if ( this.originalEvent ) {
						return this.originalEvent[ name ];
					}
				},

			set: function( value ) {
				Object.defineProperty( this, name, {
					enumerable: true,
					configurable: true,
					writable: true,
					value: value
				} );
			}
		} );
	},

	fix: function( originalEvent ) {
		return originalEvent[ jQuery.expando ] ?
			originalEvent :
			new jQuery.Event( originalEvent );
	},

	special: {
		load: {

			// Prevent triggered image.load events from bubbling to window.load
			noBubble: true
		},
		click: {

			// Utilize native event to ensure correct state for checkable inputs
			setup: function( data ) {

				// For mutual compressibility with _default, replace `this` access with a local var.
				// `|| data` is dead code meant only to preserve the variable through minification.
				var el = this || data;

				// Claim the first handler
				if ( rcheckableType.test( el.type ) &&
					el.click && nodeName( el, "input" ) ) {

					// dataPriv.set( el, "click", ... )
					leverageNative( el, "click", returnTrue );
				}

				// Return false to allow normal processing in the caller
				return false;
			},
			trigger: function( data ) {

				// For mutual compressibility with _default, replace `this` access with a local var.
				// `|| data` is dead code meant only to preserve the variable through minification.
				var el = this || data;

				// Force setup before triggering a click
				if ( rcheckableType.test( el.type ) &&
					el.click && nodeName( el, "input" ) ) {

					leverageNative( el, "click" );
				}

				// Return non-false to allow normal event-path propagation
				return true;
			},

			// For cross-browser consistency, suppress native .click() on links
			// Also prevent it if we're currently inside a leveraged native-event stack
			_default: function( event ) {
				var target = event.target;
				return rcheckableType.test( target.type ) &&
					target.click && nodeName( target, "input" ) &&
					dataPriv.get( target, "click" ) ||
					nodeName( target, "a" );
			}
		},

		beforeunload: {
			postDispatch: function( event ) {

				// Support: Firefox 20+
				// Firefox doesn't alert if the returnValue field is not set.
				if ( event.result !== undefined && event.originalEvent ) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	}
};

// Ensure the presence of an event listener that handles manually-triggered
// synthetic events by interrupting progress until reinvoked in response to
// *native* events that it fires directly, ensuring that state changes have
// already occurred before other listeners are invoked.
function leverageNative( el, type, expectSync ) {

	// Missing expectSync indicates a trigger call, which must force setup through jQuery.event.add
	if ( !expectSync ) {
		if ( dataPriv.get( el, type ) === undefined ) {
			jQuery.event.add( el, type, returnTrue );
		}
		return;
	}

	// Register the controller as a special universal handler for all event namespaces
	dataPriv.set( el, type, false );
	jQuery.event.add( el, type, {
		namespace: false,
		handler: function( event ) {
			var notAsync, result,
				saved = dataPriv.get( this, type );

			if ( ( event.isTrigger & 1 ) && this[ type ] ) {

				// Interrupt processing of the outer synthetic .trigger()ed event
				// Saved data should be false in such cases, but might be a leftover capture object
				// from an async native handler (gh-4350)
				if ( !saved.length ) {

					// Store arguments for use when handling the inner native event
					// There will always be at least one argument (an event object), so this array
					// will not be confused with a leftover capture object.
					saved = slice.call( arguments );
					dataPriv.set( this, type, saved );

					// Trigger the native event and capture its result
					// Support: IE <=9 - 11+
					// focus() and blur() are asynchronous
					notAsync = expectSync( this, type );
					this[ type ]();
					result = dataPriv.get( this, type );
					if ( saved !== result || notAsync ) {
						dataPriv.set( this, type, false );
					} else {
						result = {};
					}
					if ( saved !== result ) {

						// Cancel the outer synthetic event
						event.stopImmediatePropagation();
						event.preventDefault();

						// Support: Chrome 86+
						// In Chrome, if an element having a focusout handler is blurred by
						// clicking outside of it, it invokes the handler synchronously. If
						// that handler calls `.remove()` on the element, the data is cleared,
						// leaving `result` undefined. We need to guard against this.
						return result && result.value;
					}

				// If this is an inner synthetic event for an event with a bubbling surrogate
				// (focus or blur), assume that the surrogate already propagated from triggering the
				// native event and prevent that from happening again here.
				// This technically gets the ordering wrong w.r.t. to `.trigger()` (in which the
				// bubbling surrogate propagates *after* the non-bubbling base), but that seems
				// less bad than duplication.
				} else if ( ( jQuery.event.special[ type ] || {} ).delegateType ) {
					event.stopPropagation();
				}

			// If this is a native event triggered above, everything is now in order
			// Fire an inner synthetic event with the original arguments
			} else if ( saved.length ) {

				// ...and capture the result
				dataPriv.set( this, type, {
					value: jQuery.event.trigger(

						// Support: IE <=9 - 11+
						// Extend with the prototype to reset the above stopImmediatePropagation()
						jQuery.extend( saved[ 0 ], jQuery.Event.prototype ),
						saved.slice( 1 ),
						this
					)
				} );

				// Abort handling of the native event
				event.stopImmediatePropagation();
			}
		}
	} );
}

jQuery.removeEvent = function( elem, type, handle ) {

	// This "if" is needed for plain objects
	if ( elem.removeEventListener ) {
		elem.removeEventListener( type, handle );
	}
};

jQuery.Event = function( src, props ) {

	// Allow instantiation without the 'new' keyword
	if ( !( this instanceof jQuery.Event ) ) {
		return new jQuery.Event( src, props );
	}

	// Event object
	if ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;

		// Events bubbling up the document may have been marked as prevented
		// by a handler lower down the tree; reflect the correct value.
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === undefined &&

				// Support: Android <=2.3 only
				src.returnValue === false ?
			returnTrue :
			returnFalse;

		// Create target properties
		// Support: Safari <=6 - 7 only
		// Target should not be a text node (#504, #13143)
		this.target = ( src.target && src.target.nodeType === 3 ) ?
			src.target.parentNode :
			src.target;

		this.currentTarget = src.currentTarget;
		this.relatedTarget = src.relatedTarget;

	// Event type
	} else {
		this.type = src;
	}

	// Put explicitly provided properties onto the event object
	if ( props ) {
		jQuery.extend( this, props );
	}

	// Create a timestamp if incoming event doesn't have one
	this.timeStamp = src && src.timeStamp || Date.now();

	// Mark it as fixed
	this[ jQuery.expando ] = true;
};

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	constructor: jQuery.Event,
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,
	isSimulated: false,

	preventDefault: function() {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;

		if ( e && !this.isSimulated ) {
			e.preventDefault();
		}
	},
	stopPropagation: function() {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopPropagation();
		}
	},
	stopImmediatePropagation: function() {
		var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopImmediatePropagation();
		}

		this.stopPropagation();
	}
};

// Includes all common event props including KeyEvent and MouseEvent specific props
jQuery.each( {
	altKey: true,
	bubbles: true,
	cancelable: true,
	changedTouches: true,
	ctrlKey: true,
	detail: true,
	eventPhase: true,
	metaKey: true,
	pageX: true,
	pageY: true,
	shiftKey: true,
	view: true,
	"char": true,
	code: true,
	charCode: true,
	key: true,
	keyCode: true,
	button: true,
	buttons: true,
	clientX: true,
	clientY: true,
	offsetX: true,
	offsetY: true,
	pointerId: true,
	pointerType: true,
	screenX: true,
	screenY: true,
	targetTouches: true,
	toElement: true,
	touches: true,
	which: true
}, jQuery.event.addProp );

jQuery.each( { focus: "focusin", blur: "focusout" }, function( type, delegateType ) {
	jQuery.event.special[ type ] = {

		// Utilize native event if possible so blur/focus sequence is correct
		setup: function() {

			// Claim the first handler
			// dataPriv.set( this, "focus", ... )
			// dataPriv.set( this, "blur", ... )
			leverageNative( this, type, expectSync );

			// Return false to allow normal processing in the caller
			return false;
		},
		trigger: function() {

			// Force setup before trigger
			leverageNative( this, type );

			// Return non-false to allow normal event-path propagation
			return true;
		},

		// Suppress native focus or blur as it's already being fired
		// in leverageNative.
		_default: function() {
			return true;
		},

		delegateType: delegateType
	};
} );

// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
jQuery.each( {
	mouseenter: "mouseover",
	mouseleave: "mouseout",
	pointerenter: "pointerover",
	pointerleave: "pointerout"
}, function( orig, fix ) {
	jQuery.event.special[ orig ] = {
		delegateType: fix,
		bindType: fix,

		handle: function( event ) {
			var ret,
				target = this,
				related = event.relatedTarget,
				handleObj = event.handleObj;

			// For mouseenter/leave call the handler if related is outside the target.
			// NB: No relatedTarget if the mouse left/entered the browser window
			if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( this, arguments );
				event.type = fix;
			}
			return ret;
		}
	};
} );

jQuery.fn.extend( {

	on: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn );
	},
	one: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn, 1 );
	},
	off: function( types, selector, fn ) {
		var handleObj, type;
		if ( types && types.preventDefault && types.handleObj ) {

			// ( event )  dispatched jQuery.Event
			handleObj = types.handleObj;
			jQuery( types.delegateTarget ).off(
				handleObj.namespace ?
					handleObj.origType + "." + handleObj.namespace :
					handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			return this;
		}
		if ( typeof types === "object" ) {

			// ( types-object [, selector] )
			for ( type in types ) {
				this.off( type, selector, types[ type ] );
			}
			return this;
		}
		if ( selector === false || typeof selector === "function" ) {

			// ( types [, fn] )
			fn = selector;
			selector = undefined;
		}
		if ( fn === false ) {
			fn = returnFalse;
		}
		return this.each( function() {
			jQuery.event.remove( this, types, fn, selector );
		} );
	}
} );


var

	// Support: IE <=10 - 11, Edge 12 - 13 only
	// In IE/Edge using regex groups here causes severe slowdowns.
	// See https://connect.microsoft.com/IE/feedback/details/1736512/
	rnoInnerhtml = /<script|<style|<link/i,

	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

// Prefer a tbody over its parent table for containing new rows
function manipulationTarget( elem, content ) {
	if ( nodeName( elem, "table" ) &&
		nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ) {

		return jQuery( elem ).children( "tbody" )[ 0 ] || elem;
	}

	return elem;
}

// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript( elem ) {
	elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
	return elem;
}
function restoreScript( elem ) {
	if ( ( elem.type || "" ).slice( 0, 5 ) === "true/" ) {
		elem.type = elem.type.slice( 5 );
	} else {
		elem.removeAttribute( "type" );
	}

	return elem;
}

function cloneCopyEvent( src, dest ) {
	var i, l, type, pdataOld, udataOld, udataCur, events;

	if ( dest.nodeType !== 1 ) {
		return;
	}

	// 1. Copy private data: events, handlers, etc.
	if ( dataPriv.hasData( src ) ) {
		pdataOld = dataPriv.get( src );
		events = pdataOld.events;

		if ( events ) {
			dataPriv.remove( dest, "handle events" );

			for ( type in events ) {
				for ( i = 0, l = events[ type ].length; i < l; i++ ) {
					jQuery.event.add( dest, type, events[ type ][ i ] );
				}
			}
		}
	}

	// 2. Copy user data
	if ( dataUser.hasData( src ) ) {
		udataOld = dataUser.access( src );
		udataCur = jQuery.extend( {}, udataOld );

		dataUser.set( dest, udataCur );
	}
}

// Fix IE bugs, see support tests
function fixInput( src, dest ) {
	var nodeName = dest.nodeName.toLowerCase();

	// Fails to persist the checked state of a cloned checkbox or radio button.
	if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
		dest.checked = src.checked;

	// Fails to return the selected option to the default selected state when cloning options
	} else if ( nodeName === "input" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue;
	}
}

function domManip( collection, args, callback, ignored ) {

	// Flatten any nested arrays
	args = flat( args );

	var fragment, first, scripts, hasScripts, node, doc,
		i = 0,
		l = collection.length,
		iNoClone = l - 1,
		value = args[ 0 ],
		valueIsFunction = isFunction( value );

	// We can't cloneNode fragments that contain checked, in WebKit
	if ( valueIsFunction ||
			( l > 1 && typeof value === "string" &&
				!support.checkClone && rchecked.test( value ) ) ) {
		return collection.each( function( index ) {
			var self = collection.eq( index );
			if ( valueIsFunction ) {
				args[ 0 ] = value.call( this, index, self.html() );
			}
			domManip( self, args, callback, ignored );
		} );
	}

	if ( l ) {
		fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
		first = fragment.firstChild;

		if ( fragment.childNodes.length === 1 ) {
			fragment = first;
		}

		// Require either new content or an interest in ignored elements to invoke the callback
		if ( first || ignored ) {
			scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
			hasScripts = scripts.length;

			// Use the original fragment for the last item
			// instead of the first because it can end up
			// being emptied incorrectly in certain situations (#8070).
			for ( ; i < l; i++ ) {
				node = fragment;

				if ( i !== iNoClone ) {
					node = jQuery.clone( node, true, true );

					// Keep references to cloned scripts for later restoration
					if ( hasScripts ) {

						// Support: Android <=4.0 only, PhantomJS 1 only
						// push.apply(_, arraylike) throws on ancient WebKit
						jQuery.merge( scripts, getAll( node, "script" ) );
					}
				}

				callback.call( collection[ i ], node, i );
			}

			if ( hasScripts ) {
				doc = scripts[ scripts.length - 1 ].ownerDocument;

				// Reenable scripts
				jQuery.map( scripts, restoreScript );

				// Evaluate executable scripts on first document insertion
				for ( i = 0; i < hasScripts; i++ ) {
					node = scripts[ i ];
					if ( rscriptType.test( node.type || "" ) &&
						!dataPriv.access( node, "globalEval" ) &&
						jQuery.contains( doc, node ) ) {

						if ( node.src && ( node.type || "" ).toLowerCase()  !== "module" ) {

							// Optional AJAX dependency, but won't run scripts if not present
							if ( jQuery._evalUrl && !node.noModule ) {
								jQuery._evalUrl( node.src, {
									nonce: node.nonce || node.getAttribute( "nonce" )
								}, doc );
							}
						} else {
							DOMEval( node.textContent.replace( rcleanScript, "" ), node, doc );
						}
					}
				}
			}
		}
	}

	return collection;
}

function remove( elem, selector, keepData ) {
	var node,
		nodes = selector ? jQuery.filter( selector, elem ) : elem,
		i = 0;

	for ( ; ( node = nodes[ i ] ) != null; i++ ) {
		if ( !keepData && node.nodeType === 1 ) {
			jQuery.cleanData( getAll( node ) );
		}

		if ( node.parentNode ) {
			if ( keepData && isAttached( node ) ) {
				setGlobalEval( getAll( node, "script" ) );
			}
			node.parentNode.removeChild( node );
		}
	}

	return elem;
}

jQuery.extend( {
	htmlPrefilter: function( html ) {
		return html;
	},

	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
		var i, l, srcElements, destElements,
			clone = elem.cloneNode( true ),
			inPage = isAttached( elem );

		// Fix IE cloning issues
		if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
				!jQuery.isXMLDoc( elem ) ) {

			// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
			destElements = getAll( clone );
			srcElements = getAll( elem );

			for ( i = 0, l = srcElements.length; i < l; i++ ) {
				fixInput( srcElements[ i ], destElements[ i ] );
			}
		}

		// Copy the events from the original to the clone
		if ( dataAndEvents ) {
			if ( deepDataAndEvents ) {
				srcElements = srcElements || getAll( elem );
				destElements = destElements || getAll( clone );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					cloneCopyEvent( srcElements[ i ], destElements[ i ] );
				}
			} else {
				cloneCopyEvent( elem, clone );
			}
		}

		// Preserve script evaluation history
		destElements = getAll( clone, "script" );
		if ( destElements.length > 0 ) {
			setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
		}

		// Return the cloned set
		return clone;
	},

	cleanData: function( elems ) {
		var data, elem, type,
			special = jQuery.event.special,
			i = 0;

		for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
			if ( acceptData( elem ) ) {
				if ( ( data = elem[ dataPriv.expando ] ) ) {
					if ( data.events ) {
						for ( type in data.events ) {
							if ( special[ type ] ) {
								jQuery.event.remove( elem, type );

							// This is a shortcut to avoid jQuery.event.remove's overhead
							} else {
								jQuery.removeEvent( elem, type, data.handle );
							}
						}
					}

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataPriv.expando ] = undefined;
				}
				if ( elem[ dataUser.expando ] ) {

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataUser.expando ] = undefined;
				}
			}
		}
	}
} );

jQuery.fn.extend( {
	detach: function( selector ) {
		return remove( this, selector, true );
	},

	remove: function( selector ) {
		return remove( this, selector );
	},

	text: function( value ) {
		return access( this, function( value ) {
			return value === undefined ?
				jQuery.text( this ) :
				this.empty().each( function() {
					if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
						this.textContent = value;
					}
				} );
		}, null, value, arguments.length );
	},

	append: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.appendChild( elem );
			}
		} );
	},

	prepend: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.insertBefore( elem, target.firstChild );
			}
		} );
	},

	before: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this );
			}
		} );
	},

	after: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			}
		} );
	},

	empty: function() {
		var elem,
			i = 0;

		for ( ; ( elem = this[ i ] ) != null; i++ ) {
			if ( elem.nodeType === 1 ) {

				// Prevent memory leaks
				jQuery.cleanData( getAll( elem, false ) );

				// Remove any remaining nodes
				elem.textContent = "";
			}
		}

		return this;
	},

	clone: function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		return this.map( function() {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		} );
	},

	html: function( value ) {
		return access( this, function( value ) {
			var elem = this[ 0 ] || {},
				i = 0,
				l = this.length;

			if ( value === undefined && elem.nodeType === 1 ) {
				return elem.innerHTML;
			}

			// See if we can take a shortcut and just use innerHTML
			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
				!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

				value = jQuery.htmlPrefilter( value );

				try {
					for ( ; i < l; i++ ) {
						elem = this[ i ] || {};

						// Remove element nodes and prevent memory leaks
						if ( elem.nodeType === 1 ) {
							jQuery.cleanData( getAll( elem, false ) );
							elem.innerHTML = value;
						}
					}

					elem = 0;

				// If using innerHTML throws an exception, use the fallback method
				} catch ( e ) {}
			}

			if ( elem ) {
				this.empty().append( value );
			}
		}, null, value, arguments.length );
	},

	replaceWith: function() {
		var ignored = [];

		// Make the changes, replacing each non-ignored context element with the new content
		return domManip( this, arguments, function( elem ) {
			var parent = this.parentNode;

			if ( jQuery.inArray( this, ignored ) < 0 ) {
				jQuery.cleanData( getAll( this ) );
				if ( parent ) {
					parent.replaceChild( elem, this );
				}
			}

		// Force callback invocation
		}, ignored );
	}
} );

jQuery.each( {
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var elems,
			ret = [],
			insert = jQuery( selector ),
			last = insert.length - 1,
			i = 0;

		for ( ; i <= last; i++ ) {
			elems = i === last ? this : this.clone( true );
			jQuery( insert[ i ] )[ original ]( elems );

			// Support: Android <=4.0 only, PhantomJS 1 only
			// .get() because push.apply(_, arraylike) throws on ancient WebKit
			push.apply( ret, elems.get() );
		}

		return this.pushStack( ret );
	};
} );
var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

var getStyles = function( elem ) {

		// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
		// IE throws on elements created in popups
		// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
		var view = elem.ownerDocument.defaultView;

		if ( !view || !view.opener ) {
			view = window;
		}

		return view.getComputedStyle( elem );
	};

var swap = function( elem, options, callback ) {
	var ret, name,
		old = {};

	// Remember the old values, and insert the new ones
	for ( name in options ) {
		old[ name ] = elem.style[ name ];
		elem.style[ name ] = options[ name ];
	}

	ret = callback.call( elem );

	// Revert the old values
	for ( name in options ) {
		elem.style[ name ] = old[ name ];
	}

	return ret;
};


var rboxStyle = new RegExp( cssExpand.join( "|" ), "i" );



( function() {

	// Executing both pixelPosition & boxSizingReliable tests require only one layout
	// so they're executed at the same time to save the second computation.
	function computeStyleTests() {

		// This is a singleton, we need to execute it only once
		if ( !div ) {
			return;
		}

		container.style.cssText = "position:absolute;left:-11111px;width:60px;" +
			"margin-top:1px;padding:0;border:0";
		div.style.cssText =
			"position:relative;display:block;box-sizing:border-box;overflow:scroll;" +
			"margin:auto;border:1px;padding:1px;" +
			"width:60%;top:1%";
		documentElement.appendChild( container ).appendChild( div );

		var divStyle = window.getComputedStyle( div );
		pixelPositionVal = divStyle.top !== "1%";

		// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
		reliableMarginLeftVal = roundPixelMeasures( divStyle.marginLeft ) === 12;

		// Support: Android 4.0 - 4.3 only, Safari <=9.1 - 10.1, iOS <=7.0 - 9.3
		// Some styles come back with percentage values, even though they shouldn't
		div.style.right = "60%";
		pixelBoxStylesVal = roundPixelMeasures( divStyle.right ) === 36;

		// Support: IE 9 - 11 only
		// Detect misreporting of content dimensions for box-sizing:border-box elements
		boxSizingReliableVal = roundPixelMeasures( divStyle.width ) === 36;

		// Support: IE 9 only
		// Detect overflow:scroll screwiness (gh-3699)
		// Support: Chrome <=64
		// Don't get tricked when zoom affects offsetWidth (gh-4029)
		div.style.position = "absolute";
		scrollboxSizeVal = roundPixelMeasures( div.offsetWidth / 3 ) === 12;

		documentElement.removeChild( container );

		// Nullify the div so it wouldn't be stored in the memory and
		// it will also be a sign that checks already performed
		div = null;
	}

	function roundPixelMeasures( measure ) {
		return Math.round( parseFloat( measure ) );
	}

	var pixelPositionVal, boxSizingReliableVal, scrollboxSizeVal, pixelBoxStylesVal,
		reliableTrDimensionsVal, reliableMarginLeftVal,
		container = document.createElement( "div" ),
		div = document.createElement( "div" );

	// Finish early in limited (non-browser) environments
	if ( !div.style ) {
		return;
	}

	// Support: IE <=9 - 11 only
	// Style of cloned element affects source element cloned (#8908)
	div.style.backgroundClip = "content-box";
	div.cloneNode( true ).style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	jQuery.extend( support, {
		boxSizingReliable: function() {
			computeStyleTests();
			return boxSizingReliableVal;
		},
		pixelBoxStyles: function() {
			computeStyleTests();
			return pixelBoxStylesVal;
		},
		pixelPosition: function() {
			computeStyleTests();
			return pixelPositionVal;
		},
		reliableMarginLeft: function() {
			computeStyleTests();
			return reliableMarginLeftVal;
		},
		scrollboxSize: function() {
			computeStyleTests();
			return scrollboxSizeVal;
		},

		// Support: IE 9 - 11+, Edge 15 - 18+
		// IE/Edge misreport `getComputedStyle` of table rows with width/height
		// set in CSS while `offset*` properties report correct values.
		// Behavior in IE 9 is more subtle than in newer versions & it passes
		// some versions of this test; make sure not to make it pass there!
		//
		// Support: Firefox 70+
		// Only Firefox includes border widths
		// in computed dimensions. (gh-4529)
		reliableTrDimensions: function() {
			var table, tr, trChild, trStyle;
			if ( reliableTrDimensionsVal == null ) {
				table = document.createElement( "table" );
				tr = document.createElement( "tr" );
				trChild = document.createElement( "div" );

				table.style.cssText = "position:absolute;left:-11111px;border-collapse:separate";
				tr.style.cssText = "border:1px solid";

				// Support: Chrome 86+
				// Height set through cssText does not get applied.
				// Computed height then comes back as 0.
				tr.style.height = "1px";
				trChild.style.height = "9px";

				// Support: Android 8 Chrome 86+
				// In our bodyBackground.html iframe,
				// display for all div elements is set to "inline",
				// which causes a problem only in Android 8 Chrome 86.
				// Ensuring the div is display: block
				// gets around this issue.
				trChild.style.display = "block";

				documentElement
					.appendChild( table )
					.appendChild( tr )
					.appendChild( trChild );

				trStyle = window.getComputedStyle( tr );
				reliableTrDimensionsVal = ( parseInt( trStyle.height, 10 ) +
					parseInt( trStyle.borderTopWidth, 10 ) +
					parseInt( trStyle.borderBottomWidth, 10 ) ) === tr.offsetHeight;

				documentElement.removeChild( table );
			}
			return reliableTrDimensionsVal;
		}
	} );
} )();


function curCSS( elem, name, computed ) {
	var width, minWidth, maxWidth, ret,

		// Support: Firefox 51+
		// Retrieving style before computed somehow
		// fixes an issue with getting wrong values
		// on detached elements
		style = elem.style;

	computed = computed || getStyles( elem );

	// getPropertyValue is needed for:
	//   .css('filter') (IE 9 only, #12537)
	//   .css('--customProperty) (#3144)
	if ( computed ) {
		ret = computed.getPropertyValue( name ) || computed[ name ];

		if ( ret === "" && !isAttached( elem ) ) {
			ret = jQuery.style( elem, name );
		}

		// A tribute to the "awesome hack by Dean Edwards"
		// Android Browser returns percentage for some values,
		// but width seems to be reliably pixels.
		// This is against the CSSOM draft spec:
		// https://drafts.csswg.org/cssom/#resolved-values
		if ( !support.pixelBoxStyles() && rnumnonpx.test( ret ) && rboxStyle.test( name ) ) {

			// Remember the original values
			width = style.width;
			minWidth = style.minWidth;
			maxWidth = style.maxWidth;

			// Put in the new values to get a computed value out
			style.minWidth = style.maxWidth = style.width = ret;
			ret = computed.width;

			// Revert the changed values
			style.width = width;
			style.minWidth = minWidth;
			style.maxWidth = maxWidth;
		}
	}

	return ret !== undefined ?

		// Support: IE <=9 - 11 only
		// IE returns zIndex value as an integer.
		ret + "" :
		ret;
}


function addGetHookIf( conditionFn, hookFn ) {

	// Define the hook, we'll check on the first run if it's really needed.
	return {
		get: function() {
			if ( conditionFn() ) {

				// Hook not needed (or it's not possible to use it due
				// to missing dependency), remove it.
				delete this.get;
				return;
			}

			// Hook needed; redefine it so that the support test is not executed again.
			return ( this.get = hookFn ).apply( this, arguments );
		}
	};
}


var cssPrefixes = [ "Webkit", "Moz", "ms" ],
	emptyStyle = document.createElement( "div" ).style,
	vendorProps = {};

// Return a vendor-prefixed property or undefined
function vendorPropName( name ) {

	// Check for vendor prefixed names
	var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
		i = cssPrefixes.length;

	while ( i-- ) {
		name = cssPrefixes[ i ] + capName;
		if ( name in emptyStyle ) {
			return name;
		}
	}
}

// Return a potentially-mapped jQuery.cssProps or vendor prefixed property
function finalPropName( name ) {
	var final = jQuery.cssProps[ name ] || vendorProps[ name ];

	if ( final ) {
		return final;
	}
	if ( name in emptyStyle ) {
		return name;
	}
	return vendorProps[ name ] = vendorPropName( name ) || name;
}


var

	// Swappable if display is none or starts with table
	// except "table", "table-cell", or "table-caption"
	// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	rcustomProp = /^--/,
	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	};

function setPositiveNumber( _elem, value, subtract ) {

	// Any relative (+/-) values have already been
	// normalized at this point
	var matches = rcssNum.exec( value );
	return matches ?

		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
		value;
}

function boxModelAdjustment( elem, dimension, box, isBorderBox, styles, computedVal ) {
	var i = dimension === "width" ? 1 : 0,
		extra = 0,
		delta = 0;

	// Adjustment may not be necessary
	if ( box === ( isBorderBox ? "border" : "content" ) ) {
		return 0;
	}

	for ( ; i < 4; i += 2 ) {

		// Both box models exclude margin
		if ( box === "margin" ) {
			delta += jQuery.css( elem, box + cssExpand[ i ], true, styles );
		}

		// If we get here with a content-box, we're seeking "padding" or "border" or "margin"
		if ( !isBorderBox ) {

			// Add padding
			delta += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

			// For "border" or "margin", add border
			if ( box !== "padding" ) {
				delta += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );

			// But still keep track of it otherwise
			} else {
				extra += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}

		// If we get here with a border-box (content + padding + border), we're seeking "content" or
		// "padding" or "margin"
		} else {

			// For "content", subtract padding
			if ( box === "content" ) {
				delta -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			}

			// For "content" or "padding", subtract border
			if ( box !== "margin" ) {
				delta -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		}
	}

	// Account for positive content-box scroll gutter when requested by providing computedVal
	if ( !isBorderBox && computedVal >= 0 ) {

		// offsetWidth/offsetHeight is a rounded sum of content, padding, scroll gutter, and border
		// Assuming integer scroll gutter, subtract the rest and round down
		delta += Math.max( 0, Math.ceil(
			elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
			computedVal -
			delta -
			extra -
			0.5

		// If offsetWidth/offsetHeight is unknown, then we can't determine content-box scroll gutter
		// Use an explicit zero to avoid NaN (gh-3964)
		) ) || 0;
	}

	return delta;
}

function getWidthOrHeight( elem, dimension, extra ) {

	// Start with computed style
	var styles = getStyles( elem ),

		// To avoid forcing a reflow, only fetch boxSizing if we need it (gh-4322).
		// Fake content-box until we know it's needed to know the true value.
		boxSizingNeeded = !support.boxSizingReliable() || extra,
		isBorderBox = boxSizingNeeded &&
			jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
		valueIsBorderBox = isBorderBox,

		val = curCSS( elem, dimension, styles ),
		offsetProp = "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 );

	// Support: Firefox <=54
	// Return a confounding non-pixel value or feign ignorance, as appropriate.
	if ( rnumnonpx.test( val ) ) {
		if ( !extra ) {
			return val;
		}
		val = "auto";
	}


	// Support: IE 9 - 11 only
	// Use offsetWidth/offsetHeight for when box sizing is unreliable.
	// In those cases, the computed value can be trusted to be border-box.
	if ( ( !support.boxSizingReliable() && isBorderBox ||

		// Support: IE 10 - 11+, Edge 15 - 18+
		// IE/Edge misreport `getComputedStyle` of table rows with width/height
		// set in CSS while `offset*` properties report correct values.
		// Interestingly, in some cases IE 9 doesn't suffer from this issue.
		!support.reliableTrDimensions() && nodeName( elem, "tr" ) ||

		// Fall back to offsetWidth/offsetHeight when value is "auto"
		// This happens for inline elements with no explicit setting (gh-3571)
		val === "auto" ||

		// Support: Android <=4.1 - 4.3 only
		// Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
		!parseFloat( val ) && jQuery.css( elem, "display", false, styles ) === "inline" ) &&

		// Make sure the element is visible & connected
		elem.getClientRects().length ) {

		isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

		// Where available, offsetWidth/offsetHeight approximate border box dimensions.
		// Where not available (e.g., SVG), assume unreliable box-sizing and interpret the
		// retrieved value as a content box dimension.
		valueIsBorderBox = offsetProp in elem;
		if ( valueIsBorderBox ) {
			val = elem[ offsetProp ];
		}
	}

	// Normalize "" and auto
	val = parseFloat( val ) || 0;

	// Adjust for the element's box model
	return ( val +
		boxModelAdjustment(
			elem,
			dimension,
			extra || ( isBorderBox ? "border" : "content" ),
			valueIsBorderBox,
			styles,

			// Provide the current computed size to request scroll gutter calculation (gh-3589)
			val
		)
	) + "px";
}

jQuery.extend( {

	// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks: {
		opacity: {
			get: function( elem, computed ) {
				if ( computed ) {

					// We should always get a number back from opacity
					var ret = curCSS( elem, "opacity" );
					return ret === "" ? "1" : ret;
				}
			}
		}
	},

	// Don't automatically add "px" to these possibly-unitless properties
	cssNumber: {
		"animationIterationCount": true,
		"columnCount": true,
		"fillOpacity": true,
		"flexGrow": true,
		"flexShrink": true,
		"fontWeight": true,
		"gridArea": true,
		"gridColumn": true,
		"gridColumnEnd": true,
		"gridColumnStart": true,
		"gridRow": true,
		"gridRowEnd": true,
		"gridRowStart": true,
		"lineHeight": true,
		"opacity": true,
		"order": true,
		"orphans": true,
		"widows": true,
		"zIndex": true,
		"zoom": true
	},

	// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps: {},

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {

		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}

		// Make sure that we're working with the right name
		var ret, type, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name ),
			style = elem.style;

		// Make sure that we're working with the right name. We don't
		// want to query the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Gets hook for the prefixed version, then unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// Check if we're setting a value
		if ( value !== undefined ) {
			type = typeof value;

			// Convert "+=" or "-=" to relative numbers (#7345)
			if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
				value = adjustCSS( elem, name, ret );

				// Fixes bug #9237
				type = "number";
			}

			// Make sure that null and NaN values aren't set (#7116)
			if ( value == null || value !== value ) {
				return;
			}

			// If a number was passed in, add the unit (except for certain CSS properties)
			// The isCustomProp check can be removed in jQuery 4.0 when we only auto-append
			// "px" to a few hardcoded values.
			if ( type === "number" && !isCustomProp ) {
				value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
			}

			// background-* props affect original clone's values
			if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
				style[ name ] = "inherit";
			}

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !( "set" in hooks ) ||
				( value = hooks.set( elem, value, extra ) ) !== undefined ) {

				if ( isCustomProp ) {
					style.setProperty( name, value );
				} else {
					style[ name ] = value;
				}
			}

		} else {

			// If a hook was provided get the non-computed value from there
			if ( hooks && "get" in hooks &&
				( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

				return ret;
			}

			// Otherwise just get the value from the style object
			return style[ name ];
		}
	},

	css: function( elem, name, extra, styles ) {
		var val, num, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name );

		// Make sure that we're working with the right name. We don't
		// want to modify the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Try prefixed name followed by the unprefixed name
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// If a hook was provided get the computed value from there
		if ( hooks && "get" in hooks ) {
			val = hooks.get( elem, true, extra );
		}

		// Otherwise, if a way to get the computed value exists, use that
		if ( val === undefined ) {
			val = curCSS( elem, name, styles );
		}

		// Convert "normal" to computed value
		if ( val === "normal" && name in cssNormalTransform ) {
			val = cssNormalTransform[ name ];
		}

		// Make numeric if forced or a qualifier was provided and val looks numeric
		if ( extra === "" || extra ) {
			num = parseFloat( val );
			return extra === true || isFinite( num ) ? num || 0 : val;
		}

		return val;
	}
} );

jQuery.each( [ "height", "width" ], function( _i, dimension ) {
	jQuery.cssHooks[ dimension ] = {
		get: function( elem, computed, extra ) {
			if ( computed ) {

				// Certain elements can have dimension info if we invisibly show them
				// but it must have a current display style that would benefit
				return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&

					// Support: Safari 8+
					// Table columns in Safari have non-zero offsetWidth & zero
					// getBoundingClientRect().width unless display is changed.
					// Support: IE <=11 only
					// Running getBoundingClientRect on a disconnected node
					// in IE throws an error.
					( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?
					swap( elem, cssShow, function() {
						return getWidthOrHeight( elem, dimension, extra );
					} ) :
					getWidthOrHeight( elem, dimension, extra );
			}
		},

		set: function( elem, value, extra ) {
			var matches,
				styles = getStyles( elem ),

				// Only read styles.position if the test has a chance to fail
				// to avoid forcing a reflow.
				scrollboxSizeBuggy = !support.scrollboxSize() &&
					styles.position === "absolute",

				// To avoid forcing a reflow, only fetch boxSizing if we need it (gh-3991)
				boxSizingNeeded = scrollboxSizeBuggy || extra,
				isBorderBox = boxSizingNeeded &&
					jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
				subtract = extra ?
					boxModelAdjustment(
						elem,
						dimension,
						extra,
						isBorderBox,
						styles
					) :
					0;

			// Account for unreliable border-box dimensions by comparing offset* to computed and
			// faking a content-box to get border and padding (gh-3699)
			if ( isBorderBox && scrollboxSizeBuggy ) {
				subtract -= Math.ceil(
					elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
					parseFloat( styles[ dimension ] ) -
					boxModelAdjustment( elem, dimension, "border", false, styles ) -
					0.5
				);
			}

			// Convert to pixels if value adjustment is needed
			if ( subtract && ( matches = rcssNum.exec( value ) ) &&
				( matches[ 3 ] || "px" ) !== "px" ) {

				elem.style[ dimension ] = value;
				value = jQuery.css( elem, dimension );
			}

			return setPositiveNumber( elem, value, subtract );
		}
	};
} );

jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
	function( elem, computed ) {
		if ( computed ) {
			return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
				elem.getBoundingClientRect().left -
					swap( elem, { marginLeft: 0 }, function() {
						return elem.getBoundingClientRect().left;
					} )
			) + "px";
		}
	}
);

// These hooks are used by animate to expand properties
jQuery.each( {
	margin: "",
	padding: "",
	border: "Width"
}, function( prefix, suffix ) {
	jQuery.cssHooks[ prefix + suffix ] = {
		expand: function( value ) {
			var i = 0,
				expanded = {},

				// Assumes a single number if not a string
				parts = typeof value === "string" ? value.split( " " ) : [ value ];

			for ( ; i < 4; i++ ) {
				expanded[ prefix + cssExpand[ i ] + suffix ] =
					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
			}

			return expanded;
		}
	};

	if ( prefix !== "margin" ) {
		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
	}
} );

jQuery.fn.extend( {
	css: function( name, value ) {
		return access( this, function( elem, name, value ) {
			var styles, len,
				map = {},
				i = 0;

			if ( Array.isArray( name ) ) {
				styles = getStyles( elem );
				len = name.length;

				for ( ; i < len; i++ ) {
					map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
				}

				return map;
			}

			return value !== undefined ?
				jQuery.style( elem, name, value ) :
				jQuery.css( elem, name );
		}, name, value, arguments.length > 1 );
	}
} );


function Tween( elem, options, prop, end, easing ) {
	return new Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween = Tween;

Tween.prototype = {
	constructor: Tween,
	init: function( elem, options, prop, end, easing, unit ) {
		this.elem = elem;
		this.prop = prop;
		this.easing = easing || jQuery.easing._default;
		this.options = options;
		this.start = this.now = this.cur();
		this.end = end;
		this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
	},
	cur: function() {
		var hooks = Tween.propHooks[ this.prop ];

		return hooks && hooks.get ?
			hooks.get( this ) :
			Tween.propHooks._default.get( this );
	},
	run: function( percent ) {
		var eased,
			hooks = Tween.propHooks[ this.prop ];

		if ( this.options.duration ) {
			this.pos = eased = jQuery.easing[ this.easing ](
				percent, this.options.duration * percent, 0, 1, this.options.duration
			);
		} else {
			this.pos = eased = percent;
		}
		this.now = ( this.end - this.start ) * eased + this.start;

		if ( this.options.step ) {
			this.options.step.call( this.elem, this.now, this );
		}

		if ( hooks && hooks.set ) {
			hooks.set( this );
		} else {
			Tween.propHooks._default.set( this );
		}
		return this;
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_default: {
		get: function( tween ) {
			var result;

			// Use a property on the element directly when it is not a DOM element,
			// or when there is no matching style property that exists.
			if ( tween.elem.nodeType !== 1 ||
				tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
				return tween.elem[ tween.prop ];
			}

			// Passing an empty string as a 3rd parameter to .css will automatically
			// attempt a parseFloat and fallback to a string if the parse fails.
			// Simple values such as "10px" are parsed to Float;
			// complex values such as "rotate(1rad)" are returned as-is.
			result = jQuery.css( tween.elem, tween.prop, "" );

			// Empty strings, null, undefined and "auto" are converted to 0.
			return !result || result === "auto" ? 0 : result;
		},
		set: function( tween ) {

			// Use step hook for back compat.
			// Use cssHook if its there.
			// Use .style if available and use plain properties where available.
			if ( jQuery.fx.step[ tween.prop ] ) {
				jQuery.fx.step[ tween.prop ]( tween );
			} else if ( tween.elem.nodeType === 1 && (
				jQuery.cssHooks[ tween.prop ] ||
					tween.elem.style[ finalPropName( tween.prop ) ] != null ) ) {
				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
			} else {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	}
};

// Support: IE <=9 only
// Panic based approach to setting things on disconnected nodes
Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set: function( tween ) {
		if ( tween.elem.nodeType && tween.elem.parentNode ) {
			tween.elem[ tween.prop ] = tween.now;
		}
	}
};

jQuery.easing = {
	linear: function( p ) {
		return p;
	},
	swing: function( p ) {
		return 0.5 - Math.cos( p * Math.PI ) / 2;
	},
	_default: "swing"
};

jQuery.fx = Tween.prototype.init;

// Back compat <1.8 extension point
jQuery.fx.step = {};




var
	fxNow, inProgress,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rrun = /queueHooks$/;

function schedule() {
	if ( inProgress ) {
		if ( document.hidden === false && window.requestAnimationFrame ) {
			window.requestAnimationFrame( schedule );
		} else {
			window.setTimeout( schedule, jQuery.fx.interval );
		}

		jQuery.fx.tick();
	}
}

// Animations created synchronously will run synchronously
function createFxNow() {
	window.setTimeout( function() {
		fxNow = undefined;
	} );
	return ( fxNow = Date.now() );
}

// Generate parameters to create a standard animation
function genFx( type, includeWidth ) {
	var which,
		i = 0,
		attrs = { height: type };

	// If we include width, step value is 1 to do all cssExpand values,
	// otherwise step value is 2 to skip over Left and Right
	includeWidth = includeWidth ? 1 : 0;
	for ( ; i < 4; i += 2 - includeWidth ) {
		which = cssExpand[ i ];
		attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
	}

	if ( includeWidth ) {
		attrs.opacity = attrs.width = type;
	}

	return attrs;
}

function createTween( value, prop, animation ) {
	var tween,
		collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
		index = 0,
		length = collection.length;
	for ( ; index < length; index++ ) {
		if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

			// We're done with this property
			return tween;
		}
	}
}

function defaultPrefilter( elem, props, opts ) {
	var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display,
		isBox = "width" in props || "height" in props,
		anim = this,
		orig = {},
		style = elem.style,
		hidden = elem.nodeType && isHiddenWithinTree( elem ),
		dataShow = dataPriv.get( elem, "fxshow" );

	// Queue-skipping animations hijack the fx hooks
	if ( !opts.queue ) {
		hooks = jQuery._queueHooks( elem, "fx" );
		if ( hooks.unqueued == null ) {
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function() {
				if ( !hooks.unqueued ) {
					oldfire();
				}
			};
		}
		hooks.unqueued++;

		anim.always( function() {

			// Ensure the complete handler is called before this completes
			anim.always( function() {
				hooks.unqueued--;
				if ( !jQuery.queue( elem, "fx" ).length ) {
					hooks.empty.fire();
				}
			} );
		} );
	}

	// Detect show/hide animations
	for ( prop in props ) {
		value = props[ prop ];
		if ( rfxtypes.test( value ) ) {
			delete props[ prop ];
			toggle = toggle || value === "toggle";
			if ( value === ( hidden ? "hide" : "show" ) ) {

				// Pretend to be hidden if this is a "show" and
				// there is still data from a stopped show/hide
				if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
					hidden = true;

				// Ignore all other no-op show/hide data
				} else {
					continue;
				}
			}
			orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
		}
	}

	// Bail out if this is a no-op like .hide().hide()
	propTween = !jQuery.isEmptyObject( props );
	if ( !propTween && jQuery.isEmptyObject( orig ) ) {
		return;
	}

	// Restrict "overflow" and "display" styles during box animations
	if ( isBox && elem.nodeType === 1 ) {

		// Support: IE <=9 - 11, Edge 12 - 15
		// Record all 3 overflow attributes because IE does not infer the shorthand
		// from identically-valued overflowX and overflowY and Edge just mirrors
		// the overflowX value there.
		opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

		// Identify a display type, preferring old show/hide data over the CSS cascade
		restoreDisplay = dataShow && dataShow.display;
		if ( restoreDisplay == null ) {
			restoreDisplay = dataPriv.get( elem, "display" );
		}
		display = jQuery.css( elem, "display" );
		if ( display === "none" ) {
			if ( restoreDisplay ) {
				display = restoreDisplay;
			} else {

				// Get nonempty value(s) by temporarily forcing visibility
				showHide( [ elem ], true );
				restoreDisplay = elem.style.display || restoreDisplay;
				display = jQuery.css( elem, "display" );
				showHide( [ elem ] );
			}
		}

		// Animate inline elements as inline-block
		if ( display === "inline" || display === "inline-block" && restoreDisplay != null ) {
			if ( jQuery.css( elem, "float" ) === "none" ) {

				// Restore the original display value at the end of pure show/hide animations
				if ( !propTween ) {
					anim.done( function() {
						style.display = restoreDisplay;
					} );
					if ( restoreDisplay == null ) {
						display = style.display;
						restoreDisplay = display === "none" ? "" : display;
					}
				}
				style.display = "inline-block";
			}
		}
	}

	if ( opts.overflow ) {
		style.overflow = "hidden";
		anim.always( function() {
			style.overflow = opts.overflow[ 0 ];
			style.overflowX = opts.overflow[ 1 ];
			style.overflowY = opts.overflow[ 2 ];
		} );
	}

	// Implement show/hide animations
	propTween = false;
	for ( prop in orig ) {

		// General show/hide setup for this element animation
		if ( !propTween ) {
			if ( dataShow ) {
				if ( "hidden" in dataShow ) {
					hidden = dataShow.hidden;
				}
			} else {
				dataShow = dataPriv.access( elem, "fxshow", { display: restoreDisplay } );
			}

			// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
			if ( toggle ) {
				dataShow.hidden = !hidden;
			}

			// Show elements before animating them
			if ( hidden ) {
				showHide( [ elem ], true );
			}

			/* eslint-disable no-loop-func */

			anim.done( function() {

				/* eslint-enable no-loop-func */

				// The final step of a "hide" animation is actually hiding the element
				if ( !hidden ) {
					showHide( [ elem ] );
				}
				dataPriv.remove( elem, "fxshow" );
				for ( prop in orig ) {
					jQuery.style( elem, prop, orig[ prop ] );
				}
			} );
		}

		// Per-property setup
		propTween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
		if ( !( prop in dataShow ) ) {
			dataShow[ prop ] = propTween.start;
			if ( hidden ) {
				propTween.end = propTween.start;
				propTween.start = 0;
			}
		}
	}
}

function propFilter( props, specialEasing ) {
	var index, name, easing, value, hooks;

	// camelCase, specialEasing and expand cssHook pass
	for ( index in props ) {
		name = camelCase( index );
		easing = specialEasing[ name ];
		value = props[ index ];
		if ( Array.isArray( value ) ) {
			easing = value[ 1 ];
			value = props[ index ] = value[ 0 ];
		}

		if ( index !== name ) {
			props[ name ] = value;
			delete props[ index ];
		}

		hooks = jQuery.cssHooks[ name ];
		if ( hooks && "expand" in hooks ) {
			value = hooks.expand( value );
			delete props[ name ];

			// Not quite $.extend, this won't overwrite existing keys.
			// Reusing 'index' because we have the correct "name"
			for ( index in value ) {
				if ( !( index in props ) ) {
					props[ index ] = value[ index ];
					specialEasing[ index ] = easing;
				}
			}
		} else {
			specialEasing[ name ] = easing;
		}
	}
}

function Animation( elem, properties, options ) {
	var result,
		stopped,
		index = 0,
		length = Animation.prefilters.length,
		deferred = jQuery.Deferred().always( function() {

			// Don't match elem in the :animated selector
			delete tick.elem;
		} ),
		tick = function() {
			if ( stopped ) {
				return false;
			}
			var currentTime = fxNow || createFxNow(),
				remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

				// Support: Android 2.3 only
				// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
				temp = remaining / animation.duration || 0,
				percent = 1 - temp,
				index = 0,
				length = animation.tweens.length;

			for ( ; index < length; index++ ) {
				animation.tweens[ index ].run( percent );
			}

			deferred.notifyWith( elem, [ animation, percent, remaining ] );

			// If there's more to do, yield
			if ( percent < 1 && length ) {
				return remaining;
			}

			// If this was an empty animation, synthesize a final progress notification
			if ( !length ) {
				deferred.notifyWith( elem, [ animation, 1, 0 ] );
			}

			// Resolve the animation and report its conclusion
			deferred.resolveWith( elem, [ animation ] );
			return false;
		},
		animation = deferred.promise( {
			elem: elem,
			props: jQuery.extend( {}, properties ),
			opts: jQuery.extend( true, {
				specialEasing: {},
				easing: jQuery.easing._default
			}, options ),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function( prop, end ) {
				var tween = jQuery.Tween( elem, animation.opts, prop, end,
					animation.opts.specialEasing[ prop ] || animation.opts.easing );
				animation.tweens.push( tween );
				return tween;
			},
			stop: function( gotoEnd ) {
				var index = 0,

					// If we are going to the end, we want to run all the tweens
					// otherwise we skip this part
					length = gotoEnd ? animation.tweens.length : 0;
				if ( stopped ) {
					return this;
				}
				stopped = true;
				for ( ; index < length; index++ ) {
					animation.tweens[ index ].run( 1 );
				}

				// Resolve when we played the last frame; otherwise, reject
				if ( gotoEnd ) {
					deferred.notifyWith( elem, [ animation, 1, 0 ] );
					deferred.resolveWith( elem, [ animation, gotoEnd ] );
				} else {
					deferred.rejectWith( elem, [ animation, gotoEnd ] );
				}
				return this;
			}
		} ),
		props = animation.props;

	propFilter( props, animation.opts.specialEasing );

	for ( ; index < length; index++ ) {
		result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
		if ( result ) {
			if ( isFunction( result.stop ) ) {
				jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
					result.stop.bind( result );
			}
			return result;
		}
	}

	jQuery.map( props, createTween, animation );

	if ( isFunction( animation.opts.start ) ) {
		animation.opts.start.call( elem, animation );
	}

	// Attach callbacks from options
	animation
		.progress( animation.opts.progress )
		.done( animation.opts.done, animation.opts.complete )
		.fail( animation.opts.fail )
		.always( animation.opts.always );

	jQuery.fx.timer(
		jQuery.extend( tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		} )
	);

	return animation;
}

jQuery.Animation = jQuery.extend( Animation, {

	tweeners: {
		"*": [ function( prop, value ) {
			var tween = this.createTween( prop, value );
			adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
			return tween;
		} ]
	},

	tweener: function( props, callback ) {
		if ( isFunction( props ) ) {
			callback = props;
			props = [ "*" ];
		} else {
			props = props.match( rnothtmlwhite );
		}

		var prop,
			index = 0,
			length = props.length;

		for ( ; index < length; index++ ) {
			prop = props[ index ];
			Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
			Animation.tweeners[ prop ].unshift( callback );
		}
	},

	prefilters: [ defaultPrefilter ],

	prefilter: function( callback, prepend ) {
		if ( prepend ) {
			Animation.prefilters.unshift( callback );
		} else {
			Animation.prefilters.push( callback );
		}
	}
} );

jQuery.speed = function( speed, easing, fn ) {
	var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
		complete: fn || !fn && easing ||
			isFunction( speed ) && speed,
		duration: speed,
		easing: fn && easing || easing && !isFunction( easing ) && easing
	};

	// Go to the end state if fx are off
	if ( jQuery.fx.off ) {
		opt.duration = 0;

	} else {
		if ( typeof opt.duration !== "number" ) {
			if ( opt.duration in jQuery.fx.speeds ) {
				opt.duration = jQuery.fx.speeds[ opt.duration ];

			} else {
				opt.duration = jQuery.fx.speeds._default;
			}
		}
	}

	// Normalize opt.queue - true/undefined/null -> "fx"
	if ( opt.queue == null || opt.queue === true ) {
		opt.queue = "fx";
	}

	// Queueing
	opt.old = opt.complete;

	opt.complete = function() {
		if ( isFunction( opt.old ) ) {
			opt.old.call( this );
		}

		if ( opt.queue ) {
			jQuery.dequeue( this, opt.queue );
		}
	};

	return opt;
};

jQuery.fn.extend( {
	fadeTo: function( speed, to, easing, callback ) {

		// Show any hidden elements after setting opacity to 0
		return this.filter( isHiddenWithinTree ).css( "opacity", 0 ).show()

			// Animate to the value specified
			.end().animate( { opacity: to }, speed, easing, callback );
	},
	animate: function( prop, speed, easing, callback ) {
		var empty = jQuery.isEmptyObject( prop ),
			optall = jQuery.speed( speed, easing, callback ),
			doAnimation = function() {

				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation( this, jQuery.extend( {}, prop ), optall );

				// Empty animations, or finishing resolves immediately
				if ( empty || dataPriv.get( this, "finish" ) ) {
					anim.stop( true );
				}
			};

		doAnimation.finish = doAnimation;

		return empty || optall.queue === false ?
			this.each( doAnimation ) :
			this.queue( optall.queue, doAnimation );
	},
	stop: function( type, clearQueue, gotoEnd ) {
		var stopQueue = function( hooks ) {
			var stop = hooks.stop;
			delete hooks.stop;
			stop( gotoEnd );
		};

		if ( typeof type !== "string" ) {
			gotoEnd = clearQueue;
			clearQueue = type;
			type = undefined;
		}
		if ( clearQueue ) {
			this.queue( type || "fx", [] );
		}

		return this.each( function() {
			var dequeue = true,
				index = type != null && type + "queueHooks",
				timers = jQuery.timers,
				data = dataPriv.get( this );

			if ( index ) {
				if ( data[ index ] && data[ index ].stop ) {
					stopQueue( data[ index ] );
				}
			} else {
				for ( index in data ) {
					if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
						stopQueue( data[ index ] );
					}
				}
			}

			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this &&
					( type == null || timers[ index ].queue === type ) ) {

					timers[ index ].anim.stop( gotoEnd );
					dequeue = false;
					timers.splice( index, 1 );
				}
			}

			// Start the next in the queue if the last step wasn't forced.
			// Timers currently will call their complete callbacks, which
			// will dequeue but only if they were gotoEnd.
			if ( dequeue || !gotoEnd ) {
				jQuery.dequeue( this, type );
			}
		} );
	},
	finish: function( type ) {
		if ( type !== false ) {
			type = type || "fx";
		}
		return this.each( function() {
			var index,
				data = dataPriv.get( this ),
				queue = data[ type + "queue" ],
				hooks = data[ type + "queueHooks" ],
				timers = jQuery.timers,
				length = queue ? queue.length : 0;

			// Enable finishing flag on private data
			data.finish = true;

			// Empty the queue first
			jQuery.queue( this, type, [] );

			if ( hooks && hooks.stop ) {
				hooks.stop.call( this, true );
			}

			// Look for any active animations, and finish them
			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
					timers[ index ].anim.stop( true );
					timers.splice( index, 1 );
				}
			}

			// Look for any animations in the old queue and finish them
			for ( index = 0; index < length; index++ ) {
				if ( queue[ index ] && queue[ index ].finish ) {
					queue[ index ].finish.call( this );
				}
			}

			// Turn off finishing flag
			delete data.finish;
		} );
	}
} );

jQuery.each( [ "toggle", "show", "hide" ], function( _i, name ) {
	var cssFn = jQuery.fn[ name ];
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return speed == null || typeof speed === "boolean" ?
			cssFn.apply( this, arguments ) :
			this.animate( genFx( name, true ), speed, easing, callback );
	};
} );

// Generate shortcuts for custom animations
jQuery.each( {
	slideDown: genFx( "show" ),
	slideUp: genFx( "hide" ),
	slideToggle: genFx( "toggle" ),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" },
	fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return this.animate( props, speed, easing, callback );
	};
} );

jQuery.timers = [];
jQuery.fx.tick = function() {
	var timer,
		i = 0,
		timers = jQuery.timers;

	fxNow = Date.now();

	for ( ; i < timers.length; i++ ) {
		timer = timers[ i ];

		// Run the timer and safely remove it when done (allowing for external removal)
		if ( !timer() && timers[ i ] === timer ) {
			timers.splice( i--, 1 );
		}
	}

	if ( !timers.length ) {
		jQuery.fx.stop();
	}
	fxNow = undefined;
};

jQuery.fx.timer = function( timer ) {
	jQuery.timers.push( timer );
	jQuery.fx.start();
};

jQuery.fx.interval = 13;
jQuery.fx.start = function() {
	if ( inProgress ) {
		return;
	}

	inProgress = true;
	schedule();
};

jQuery.fx.stop = function() {
	inProgress = null;
};

jQuery.fx.speeds = {
	slow: 600,
	fast: 200,

	// Default speed
	_default: 400
};


// Based off of the plugin by Clint Helfers, with permission.
// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
jQuery.fn.delay = function( time, type ) {
	time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
	type = type || "fx";

	return this.queue( type, function( next, hooks ) {
		var timeout = window.setTimeout( next, time );
		hooks.stop = function() {
			window.clearTimeout( timeout );
		};
	} );
};


( function() {
	var input = document.createElement( "input" ),
		select = document.createElement( "select" ),
		opt = select.appendChild( document.createElement( "option" ) );

	input.type = "checkbox";

	// Support: Android <=4.3 only
	// Default value for a checkbox should be "on"
	support.checkOn = input.value !== "";

	// Support: IE <=11 only
	// Must access selectedIndex to make default options select
	support.optSelected = opt.selected;

	// Support: IE <=11 only
	// An input loses its value after becoming a radio
	input = document.createElement( "input" );
	input.value = "t";
	input.type = "radio";
	support.radioValue = input.value === "t";
} )();


var boolHook,
	attrHandle = jQuery.expr.attrHandle;

jQuery.fn.extend( {
	attr: function( name, value ) {
		return access( this, jQuery.attr, name, value, arguments.length > 1 );
	},

	removeAttr: function( name ) {
		return this.each( function() {
			jQuery.removeAttr( this, name );
		} );
	}
} );

jQuery.extend( {
	attr: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set attributes on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === "undefined" ) {
			return jQuery.prop( elem, name, value );
		}

		// Attribute hooks are determined by the lowercase version
		// Grab necessary hook if one is defined
		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
			hooks = jQuery.attrHooks[ name.toLowerCase() ] ||
				( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
		}

		if ( value !== undefined ) {
			if ( value === null ) {
				jQuery.removeAttr( elem, name );
				return;
			}

			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			elem.setAttribute( name, value + "" );
			return value;
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		ret = jQuery.find.attr( elem, name );

		// Non-existent attributes return null, we normalize to undefined
		return ret == null ? undefined : ret;
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				if ( !support.radioValue && value === "radio" &&
					nodeName( elem, "input" ) ) {
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		}
	},

	removeAttr: function( elem, value ) {
		var name,
			i = 0,

			// Attribute names can contain non-HTML whitespace characters
			// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
			attrNames = value && value.match( rnothtmlwhite );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( ( name = attrNames[ i++ ] ) ) {
				elem.removeAttribute( name );
			}
		}
	}
} );

// Hooks for boolean attributes
boolHook = {
	set: function( elem, value, name ) {
		if ( value === false ) {

			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else {
			elem.setAttribute( name, name );
		}
		return name;
	}
};

jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( _i, name ) {
	var getter = attrHandle[ name ] || jQuery.find.attr;

	attrHandle[ name ] = function( elem, name, isXML ) {
		var ret, handle,
			lowercaseName = name.toLowerCase();

		if ( !isXML ) {

			// Avoid an infinite loop by temporarily removing this function from the getter
			handle = attrHandle[ lowercaseName ];
			attrHandle[ lowercaseName ] = ret;
			ret = getter( elem, name, isXML ) != null ?
				lowercaseName :
				null;
			attrHandle[ lowercaseName ] = handle;
		}
		return ret;
	};
} );




var rfocusable = /^(?:input|select|textarea|button)$/i,
	rclickable = /^(?:a|area)$/i;

jQuery.fn.extend( {
	prop: function( name, value ) {
		return access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function( name ) {
		return this.each( function() {
			delete this[ jQuery.propFix[ name ] || name ];
		} );
	}
} );

jQuery.extend( {
	prop: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set properties on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			return ( elem[ name ] = value );
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		return elem[ name ];
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {

				// Support: IE <=9 - 11 only
				// elem.tabIndex doesn't always return the
				// correct value when it hasn't been explicitly set
				// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
				// Use proper attribute retrieval(#12072)
				var tabindex = jQuery.find.attr( elem, "tabindex" );

				if ( tabindex ) {
					return parseInt( tabindex, 10 );
				}

				if (
					rfocusable.test( elem.nodeName ) ||
					rclickable.test( elem.nodeName ) &&
					elem.href
				) {
					return 0;
				}

				return -1;
			}
		}
	},

	propFix: {
		"for": "htmlFor",
		"class": "className"
	}
} );

// Support: IE <=11 only
// Accessing the selectedIndex property
// forces the browser to respect setting selected
// on the option
// The getter ensures a default option is selected
// when in an optgroup
// eslint rule "no-unused-expressions" is disabled for this code
// since it considers such accessions noop
if ( !support.optSelected ) {
	jQuery.propHooks.selected = {
		get: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent && parent.parentNode ) {
				parent.parentNode.selectedIndex;
			}
			return null;
		},
		set: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent ) {
				parent.selectedIndex;

				if ( parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
			}
		}
	};
}

jQuery.each( [
	"tabIndex",
	"readOnly",
	"maxLength",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"frameBorder",
	"contentEditable"
], function() {
	jQuery.propFix[ this.toLowerCase() ] = this;
} );




	// Strip and collapse whitespace according to HTML spec
	// https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace
	function stripAndCollapse( value ) {
		var tokens = value.match( rnothtmlwhite ) || [];
		return tokens.join( " " );
	}


function getClass( elem ) {
	return elem.getAttribute && elem.getAttribute( "class" ) || "";
}

function classesToArray( value ) {
	if ( Array.isArray( value ) ) {
		return value;
	}
	if ( typeof value === "string" ) {
		return value.match( rnothtmlwhite ) || [];
	}
	return [];
}

jQuery.fn.extend( {
	addClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		classes = classesToArray( value );

		if ( classes.length ) {
			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {
						if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
							cur += clazz + " ";
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	removeClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( !arguments.length ) {
			return this.attr( "class", "" );
		}

		classes = classesToArray( value );

		if ( classes.length ) {
			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );

				// This expression is here for better compressibility (see addClass)
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {

						// Remove *all* instances
						while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
							cur = cur.replace( " " + clazz + " ", " " );
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var type = typeof value,
			isValidValue = type === "string" || Array.isArray( value );

		if ( typeof stateVal === "boolean" && isValidValue ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}

		if ( isFunction( value ) ) {
			return this.each( function( i ) {
				jQuery( this ).toggleClass(
					value.call( this, i, getClass( this ), stateVal ),
					stateVal
				);
			} );
		}

		return this.each( function() {
			var className, i, self, classNames;

			if ( isValidValue ) {

				// Toggle individual class names
				i = 0;
				self = jQuery( this );
				classNames = classesToArray( value );

				while ( ( className = classNames[ i++ ] ) ) {

					// Check each className given, space separated list
					if ( self.hasClass( className ) ) {
						self.removeClass( className );
					} else {
						self.addClass( className );
					}
				}

			// Toggle whole class name
			} else if ( value === undefined || type === "boolean" ) {
				className = getClass( this );
				if ( className ) {

					// Store className if set
					dataPriv.set( this, "__className__", className );
				}

				// If the element has a class name or if we're passed `false`,
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				if ( this.setAttribute ) {
					this.setAttribute( "class",
						className || value === false ?
							"" :
							dataPriv.get( this, "__className__" ) || ""
					);
				}
			}
		} );
	},

	hasClass: function( selector ) {
		var className, elem,
			i = 0;

		className = " " + selector + " ";
		while ( ( elem = this[ i++ ] ) ) {
			if ( elem.nodeType === 1 &&
				( " " + stripAndCollapse( getClass( elem ) ) + " " ).indexOf( className ) > -1 ) {
				return true;
			}
		}

		return false;
	}
} );




var rreturn = /\r/g;

jQuery.fn.extend( {
	val: function( value ) {
		var hooks, ret, valueIsFunction,
			elem = this[ 0 ];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] ||
					jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if ( hooks &&
					"get" in hooks &&
					( ret = hooks.get( elem, "value" ) ) !== undefined
				) {
					return ret;
				}

				ret = elem.value;

				// Handle most common string cases
				if ( typeof ret === "string" ) {
					return ret.replace( rreturn, "" );
				}

				// Handle cases where value is null/undef or number
				return ret == null ? "" : ret;
			}

			return;
		}

		valueIsFunction = isFunction( value );

		return this.each( function( i ) {
			var val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( valueIsFunction ) {
				val = value.call( this, i, jQuery( this ).val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";

			} else if ( typeof val === "number" ) {
				val += "";

			} else if ( Array.isArray( val ) ) {
				val = jQuery.map( val, function( value ) {
					return value == null ? "" : value + "";
				} );
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		} );
	}
} );

jQuery.extend( {
	valHooks: {
		option: {
			get: function( elem ) {

				var val = jQuery.find.attr( elem, "value" );
				return val != null ?
					val :

					// Support: IE <=10 - 11 only
					// option.text throws exceptions (#14686, #14858)
					// Strip and collapse whitespace
					// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
					stripAndCollapse( jQuery.text( elem ) );
			}
		},
		select: {
			get: function( elem ) {
				var value, option, i,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one",
					values = one ? null : [],
					max = one ? index + 1 : options.length;

				if ( index < 0 ) {
					i = max;

				} else {
					i = one ? index : 0;
				}

				// Loop through all the selected options
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// Support: IE <=9 only
					// IE8-9 doesn't update selected after form reset (#2551)
					if ( ( option.selected || i === index ) &&

							// Don't return options that are disabled or in a disabled optgroup
							!option.disabled &&
							( !option.parentNode.disabled ||
								!nodeName( option.parentNode, "optgroup" ) ) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				return values;
			},

			set: function( elem, value ) {
				var optionSet, option,
					options = elem.options,
					values = jQuery.makeArray( value ),
					i = options.length;

				while ( i-- ) {
					option = options[ i ];

					/* eslint-disable no-cond-assign */

					if ( option.selected =
						jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
					) {
						optionSet = true;
					}

					/* eslint-enable no-cond-assign */
				}

				// Force browsers to behave consistently when non-matching value is set
				if ( !optionSet ) {
					elem.selectedIndex = -1;
				}
				return values;
			}
		}
	}
} );

// Radios and checkboxes getter/setter
jQuery.each( [ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = {
		set: function( elem, value ) {
			if ( Array.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
			}
		}
	};
	if ( !support.checkOn ) {
		jQuery.valHooks[ this ].get = function( elem ) {
			return elem.getAttribute( "value" ) === null ? "on" : elem.value;
		};
	}
} );




// Return jQuery for attributes-only inclusion


support.focusin = "onfocusin" in window;


var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
	stopPropagationCallback = function( e ) {
		e.stopPropagation();
	};

jQuery.extend( jQuery.event, {

	trigger: function( event, data, elem, onlyHandlers ) {

		var i, cur, tmp, bubbleType, ontype, handle, special, lastElement,
			eventPath = [ elem || document ],
			type = hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

		cur = lastElement = tmp = elem = elem || document;

		// Don't do events on text and comment nodes
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf( "." ) > -1 ) {

			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split( "." );
			type = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf( ":" ) < 0 && "on" + type;

		// Caller can pass in a jQuery.Event object, Object, or just an event type string
		event = event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event === "object" && event );

		// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
		event.isTrigger = onlyHandlers ? 2 : 3;
		event.namespace = namespaces.join( "." );
		event.rnamespace = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
			null;

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data == null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (#9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
		if ( !onlyHandlers && !special.noBubble && !isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( tmp === ( elem.ownerDocument || document ) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}

		// Fire handlers on the event path
		i = 0;
		while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {
			lastElement = cur;
			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

			// jQuery handler
			handle = ( dataPriv.get( cur, "events" ) || Object.create( null ) )[ event.type ] &&
				dataPriv.get( cur, "handle" );
			if ( handle ) {
				handle.apply( cur, data );
			}

			// Native handler
			handle = ontype && cur[ ontype ];
			if ( handle && handle.apply && acceptData( cur ) ) {
				event.result = handle.apply( cur, data );
				if ( event.result === false ) {
					event.preventDefault();
				}
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if ( ( !special._default ||
				special._default.apply( eventPath.pop(), data ) === false ) &&
				acceptData( elem ) ) {

				// Call a native DOM method on the target with the same name as the event.
				// Don't do default actions on window, that's where global variables be (#6170)
				if ( ontype && isFunction( elem[ type ] ) && !isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;

					if ( event.isPropagationStopped() ) {
						lastElement.addEventListener( type, stopPropagationCallback );
					}

					elem[ type ]();

					if ( event.isPropagationStopped() ) {
						lastElement.removeEventListener( type, stopPropagationCallback );
					}

					jQuery.event.triggered = undefined;

					if ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	// Piggyback on a donor event to simulate a different one
	// Used only for `focus(in | out)` events
	simulate: function( type, elem, event ) {
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{
				type: type,
				isSimulated: true
			}
		);

		jQuery.event.trigger( e, null, elem );
	}

} );

jQuery.fn.extend( {

	trigger: function( type, data ) {
		return this.each( function() {
			jQuery.event.trigger( type, data, this );
		} );
	},
	triggerHandler: function( type, data ) {
		var elem = this[ 0 ];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
} );


// Support: Firefox <=44
// Firefox doesn't have focus(in | out) events
// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
// focus(in | out) events fire after focus & blur events,
// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
if ( !support.focusin ) {
	jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

		// Attach a single capturing handler on the document while someone wants focusin/focusout
		var handler = function( event ) {
			jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
		};

		jQuery.event.special[ fix ] = {
			setup: function() {

				// Handle: regular nodes (via `this.ownerDocument`), window
				// (via `this.document`) & document (via `this`).
				var doc = this.ownerDocument || this.document || this,
					attaches = dataPriv.access( doc, fix );

				if ( !attaches ) {
					doc.addEventListener( orig, handler, true );
				}
				dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
			},
			teardown: function() {
				var doc = this.ownerDocument || this.document || this,
					attaches = dataPriv.access( doc, fix ) - 1;

				if ( !attaches ) {
					doc.removeEventListener( orig, handler, true );
					dataPriv.remove( doc, fix );

				} else {
					dataPriv.access( doc, fix, attaches );
				}
			}
		};
	} );
}
var location = window.location;

var nonce = { guid: Date.now() };

var rquery = ( /\?/ );



// Cross-browser xml parsing
jQuery.parseXML = function( data ) {
	var xml, parserErrorElem;
	if ( !data || typeof data !== "string" ) {
		return null;
	}

	// Support: IE 9 - 11 only
	// IE throws on parseFromString with invalid input.
	try {
		xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
	} catch ( e ) {}

	parserErrorElem = xml && xml.getElementsByTagName( "parsererror" )[ 0 ];
	if ( !xml || parserErrorElem ) {
		jQuery.error( "Invalid XML: " + (
			parserErrorElem ?
				jQuery.map( parserErrorElem.childNodes, function( el ) {
					return el.textContent;
				} ).join( "\n" ) :
				data
		) );
	}
	return xml;
};


var
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( Array.isArray( obj ) ) {

		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {

				// Treat each array item as a scalar.
				add( prefix, v );

			} else {

				// Item is non-scalar (array or object), encode its numeric index.
				buildParams(
					prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
					v,
					traditional,
					add
				);
			}
		} );

	} else if ( !traditional && toType( obj ) === "object" ) {

		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {

		// Serialize scalar item.
		add( prefix, obj );
	}
}

// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, valueOrFunction ) {

			// If value is a function, invoke it and use its return value
			var value = isFunction( valueOrFunction ) ?
				valueOrFunction() :
				valueOrFunction;

			s[ s.length ] = encodeURIComponent( key ) + "=" +
				encodeURIComponent( value == null ? "" : value );
		};

	if ( a == null ) {
		return "";
	}

	// If an array was passed in, assume that it is an array of form elements.
	if ( Array.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		} );

	} else {

		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&" );
};

jQuery.fn.extend( {
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map( function() {

			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		} ).filter( function() {
			var type = this.type;

			// Use .is( ":disabled" ) so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !rcheckableType.test( type ) );
		} ).map( function( _i, elem ) {
			var val = jQuery( this ).val();

			if ( val == null ) {
				return null;
			}

			if ( Array.isArray( val ) ) {
				return jQuery.map( val, function( val ) {
					return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
				} );
			}

			return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		} ).get();
	}
} );


var
	r20 = /%20/g,
	rhash = /#.*$/,
	rantiCache = /([?&])_=[^&]*/,
	rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

	// #7653, #8125, #8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},

	// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes = "*/".concat( "*" ),

	// Anchor tag for parsing the document origin
	originAnchor = document.createElement( "a" );

originAnchor.href = location.href;

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var dataType,
			i = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( rnothtmlwhite ) || [];

		if ( isFunction( func ) ) {

			// For each dataType in the dataTypeExpression
			while ( ( dataType = dataTypes[ i++ ] ) ) {

				// Prepend if requested
				if ( dataType[ 0 ] === "+" ) {
					dataType = dataType.slice( 1 ) || "*";
					( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

				// Otherwise append
				} else {
					( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
				}
			}
		}
	};
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

	var inspected = {},
		seekingTransport = ( structure === transports );

	function inspect( dataType ) {
		var selected;
		inspected[ dataType ] = true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
			if ( typeof dataTypeOrTransport === "string" &&
				!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

				options.dataTypes.unshift( dataTypeOrTransport );
				inspect( dataTypeOrTransport );
				return false;
			} else if ( seekingTransport ) {
				return !( selected = dataTypeOrTransport );
			}
		} );
		return selected;
	}

	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ajaxExtend( target, src ) {
	var key, deep,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}

	return target;
}

/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {

	var ct, type, finalDataType, firstDataType,
		contents = s.contents,
		dataTypes = s.dataTypes;

	// Remove auto dataType and get content-type in the process
	while ( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {

		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}

		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ajaxConvert( s, response, jqXHR, isSuccess ) {
	var conv2, current, conv, tmp, prev,
		converters = {},

		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();

	// Create converters map with lowercased keys
	if ( dataTypes[ 1 ] ) {
		for ( conv in s.converters ) {
			converters[ conv.toLowerCase() ] = s.converters[ conv ];
		}
	}

	current = dataTypes.shift();

	// Convert to each sequential dataType
	while ( current ) {

		if ( s.responseFields[ current ] ) {
			jqXHR[ s.responseFields[ current ] ] = response;
		}

		// Apply the dataFilter if provided
		if ( !prev && isSuccess && s.dataFilter ) {
			response = s.dataFilter( response, s.dataType );
		}

		prev = current;
		current = dataTypes.shift();

		if ( current ) {

			// There's only work to do if current dataType is non-auto
			if ( current === "*" ) {

				current = prev;

			// Convert response if prev dataType is non-auto and differs from current
			} else if ( prev !== "*" && prev !== current ) {

				// Seek a direct converter
				conv = converters[ prev + " " + current ] || converters[ "* " + current ];

				// If none found, seek a pair
				if ( !conv ) {
					for ( conv2 in converters ) {

						// If conv2 outputs current
						tmp = conv2.split( " " );
						if ( tmp[ 1 ] === current ) {

							// If prev can be converted to accepted input
							conv = converters[ prev + " " + tmp[ 0 ] ] ||
								converters[ "* " + tmp[ 0 ] ];
							if ( conv ) {

								// Condense equivalence converters
								if ( conv === true ) {
									conv = converters[ conv2 ];

								// Otherwise, insert the intermediate dataType
								} else if ( converters[ conv2 ] !== true ) {
									current = tmp[ 0 ];
									dataTypes.unshift( tmp[ 1 ] );
								}
								break;
							}
						}
					}
				}

				// Apply converter (if not an equivalence)
				if ( conv !== true ) {

					// Unless errors are allowed to bubble, catch and return them
					if ( conv && s.throws ) {
						response = conv( response );
					} else {
						try {
							response = conv( response );
						} catch ( e ) {
							return {
								state: "parsererror",
								error: conv ? e : "No conversion from " + prev + " to " + current
							};
						}
					}
				}
			}
		}
	}

	return { state: "success", data: response };
}

jQuery.extend( {

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {},

	ajaxSettings: {
		url: location.href,
		type: "GET",
		isLocal: rlocalProtocol.test( location.protocol ),
		global: true,
		processData: true,
		async: true,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",

		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

		accepts: {
			"*": allTypes,
			text: "text/plain",
			html: "text/html",
			xml: "application/xml, text/xml",
			json: "application/json, text/javascript"
		},

		contents: {
			xml: /\bxml\b/,
			html: /\bhtml/,
			json: /\bjson\b/
		},

		responseFields: {
			xml: "responseXML",
			text: "responseText",
			json: "responseJSON"
		},

		// Data converters
		// Keys separate source (or catchall "*") and destination types with a single space
		converters: {

			// Convert anything to text
			"* text": String,

			// Text to html (true = no transformation)
			"text html": true,

			// Evaluate text as a json expression
			"text json": JSON.parse,

			// Parse text as xml
			"text xml": jQuery.parseXML
		},

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: {
			url: true,
			context: true
		}
	},

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) {
		return settings ?

			// Building a settings object
			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

			// Extending ajaxSettings
			ajaxExtend( jQuery.ajaxSettings, target );
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Main method
	ajax: function( url, options ) {

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}

		// Force options to be an object
		options = options || {};

		var transport,

			// URL without anti-cache param
			cacheURL,

			// Response headers
			responseHeadersString,
			responseHeaders,

			// timeout handle
			timeoutTimer,

			// Url cleanup var
			urlAnchor,

			// Request state (becomes false upon send and true upon completion)
			completed,

			// To know if global events are to be dispatched
			fireGlobals,

			// Loop variable
			i,

			// uncached part of the url
			uncached,

			// Create the final options object
			s = jQuery.ajaxSetup( {}, options ),

			// Callbacks context
			callbackContext = s.context || s,

			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context &&
				( callbackContext.nodeType || callbackContext.jquery ) ?
				jQuery( callbackContext ) :
				jQuery.event,

			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks( "once memory" ),

			// Status-dependent callbacks
			statusCode = s.statusCode || {},

			// Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},

			// Default abort message
			strAbort = "canceled",

			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( completed ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
								responseHeaders[ match[ 1 ].toLowerCase() + " " ] =
									( responseHeaders[ match[ 1 ].toLowerCase() + " " ] || [] )
										.concat( match[ 2 ] );
							}
						}
						match = responseHeaders[ key.toLowerCase() + " " ];
					}
					return match == null ? null : match.join( ", " );
				},

				// Raw string
				getAllResponseHeaders: function() {
					return completed ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function( name, value ) {
					if ( completed == null ) {
						name = requestHeadersNames[ name.toLowerCase() ] =
							requestHeadersNames[ name.toLowerCase() ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( completed == null ) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function( map ) {
					var code;
					if ( map ) {
						if ( completed ) {

							// Execute the appropriate callbacks
							jqXHR.always( map[ jqXHR.status ] );
						} else {

							// Lazy-add the new callbacks in a way that preserves old ones
							for ( code in map ) {
								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
							}
						}
					}
					return this;
				},

				// Cancel the request
				abort: function( statusText ) {
					var finalText = statusText || strAbort;
					if ( transport ) {
						transport.abort( finalText );
					}
					done( 0, finalText );
					return this;
				}
			};

		// Attach deferreds
		deferred.promise( jqXHR );

		// Add protocol if not provided (prefilters might expect it)
		// Handle falsy url in the settings object (#10093: consistency with old signature)
		// We also use the url parameter if available
		s.url = ( ( url || s.url || location.href ) + "" )
			.replace( rprotocol, location.protocol + "//" );

		// Alias method option to type as per ticket #12004
		s.type = options.method || options.type || s.method || s.type;

		// Extract dataTypes list
		s.dataTypes = ( s.dataType || "*" ).toLowerCase().match( rnothtmlwhite ) || [ "" ];

		// A cross-domain request is in order when the origin doesn't match the current origin.
		if ( s.crossDomain == null ) {
			urlAnchor = document.createElement( "a" );

			// Support: IE <=8 - 11, Edge 12 - 15
			// IE throws exception on accessing the href property if url is malformed,
			// e.g. http://example.com:80x/
			try {
				urlAnchor.href = s.url;

				// Support: IE <=8 - 11 only
				// Anchor's host property isn't correctly set when s.url is relative
				urlAnchor.href = urlAnchor.href;
				s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
					urlAnchor.protocol + "//" + urlAnchor.host;
			} catch ( e ) {

				// If there is an error parsing the URL, assume it is crossDomain,
				// it can be rejected by the transport if it is invalid
				s.crossDomain = true;
			}
		}

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefilter, stop there
		if ( completed ) {
			return jqXHR;
		}

		// We can fire global events as of now if asked to
		// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
		fireGlobals = jQuery.event && s.global;

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger( "ajaxStart" );
		}

		// Uppercase the type
		s.type = s.type.toUpperCase();

		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type );

		// Save the URL in case we're toying with the If-Modified-Since
		// and/or If-None-Match header later on
		// Remove hash to simplify url manipulation
		cacheURL = s.url.replace( rhash, "" );

		// More options handling for requests with no content
		if ( !s.hasContent ) {

			// Remember the hash so we can put it back
			uncached = s.url.slice( cacheURL.length );

			// If data is available and should be processed, append data to url
			if ( s.data && ( s.processData || typeof s.data === "string" ) ) {
				cacheURL += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data;

				// #9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Add or update anti-cache param if needed
			if ( s.cache === false ) {
				cacheURL = cacheURL.replace( rantiCache, "$1" );
				uncached = ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ( nonce.guid++ ) +
					uncached;
			}

			// Put hash and anti-cache on the URL that will be requested (gh-1732)
			s.url = cacheURL + uncached;

		// Change '%20' to '+' if this is encoded form body content (gh-2658)
		} else if ( s.data && s.processData &&
			( s.contentType || "" ).indexOf( "application/x-www-form-urlencoded" ) === 0 ) {
			s.data = s.data.replace( r20, "+" );
		}

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ) {
			if ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
			}
			if ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
			}
		}

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
				s.accepts[ s.dataTypes[ 0 ] ] +
					( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

		// Check for headers option
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend &&
			( s.beforeSend.call( callbackContext, jqXHR, s ) === false || completed ) ) {

			// Abort if not done already and return
			return jqXHR.abort();
		}

		// Aborting is no longer a cancellation
		strAbort = "abort";

		// Install callbacks on deferreds
		completeDeferred.add( s.complete );
		jqXHR.done( s.success );
		jqXHR.fail( s.error );

		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// If no transport, we auto-abort
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;

			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}

			// If request was aborted inside ajaxSend, stop there
			if ( completed ) {
				return jqXHR;
			}

			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = window.setTimeout( function() {
					jqXHR.abort( "timeout" );
				}, s.timeout );
			}

			try {
				completed = false;
				transport.send( requestHeaders, done );
			} catch ( e ) {

				// Rethrow post-completion exceptions
				if ( completed ) {
					throw e;
				}

				// Propagate others as results
				done( -1, e );
			}
		}

		// Callback for when everything is done
		function done( status, nativeStatusText, responses, headers ) {
			var isSuccess, success, error, response, modified,
				statusText = nativeStatusText;

			// Ignore repeat invocations
			if ( completed ) {
				return;
			}

			completed = true;

			// Clear timeout if it exists
			if ( timeoutTimer ) {
				window.clearTimeout( timeoutTimer );
			}

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport = undefined;

			// Cache response headers
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			// Determine if successful
			isSuccess = status >= 200 && status < 300 || status === 304;

			// Get response data
			if ( responses ) {
				response = ajaxHandleResponses( s, jqXHR, responses );
			}

			// Use a noop converter for missing script but not if jsonp
			if ( !isSuccess &&
				jQuery.inArray( "script", s.dataTypes ) > -1 &&
				jQuery.inArray( "json", s.dataTypes ) < 0 ) {
				s.converters[ "text script" ] = function() {};
			}

			// Convert no matter what (that way responseXXX fields are always set)
			response = ajaxConvert( s, response, jqXHR, isSuccess );

			// If successful, handle type chaining
			if ( isSuccess ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {
					modified = jqXHR.getResponseHeader( "Last-Modified" );
					if ( modified ) {
						jQuery.lastModified[ cacheURL ] = modified;
					}
					modified = jqXHR.getResponseHeader( "etag" );
					if ( modified ) {
						jQuery.etag[ cacheURL ] = modified;
					}
				}

				// if no content
				if ( status === 204 || s.type === "HEAD" ) {
					statusText = "nocontent";

				// if not modified
				} else if ( status === 304 ) {
					statusText = "notmodified";

				// If we have data, let's convert it
				} else {
					statusText = response.state;
					success = response.data;
					error = response.error;
					isSuccess = !error;
				}
			} else {

				// Extract error from statusText and normalize for non-aborts
				error = statusText;
				if ( status || !statusText ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger( "ajaxStop" );
				}
			}
		}

		return jqXHR;
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	},

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	}
} );

jQuery.each( [ "get", "post" ], function( _i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {

		// Shift arguments if data argument was omitted
		if ( isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		// The url can be an options object (which then must have .url)
		return jQuery.ajax( jQuery.extend( {
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		}, jQuery.isPlainObject( url ) && url ) );
	};
} );

jQuery.ajaxPrefilter( function( s ) {
	var i;
	for ( i in s.headers ) {
		if ( i.toLowerCase() === "content-type" ) {
			s.contentType = s.headers[ i ] || "";
		}
	}
} );


jQuery._evalUrl = function( url, options, doc ) {
	return jQuery.ajax( {
		url: url,

		// Make this explicit, since user can override this through ajaxSetup (#11264)
		type: "GET",
		dataType: "script",
		cache: true,
		async: false,
		global: false,

		// Only evaluate the response if it is successful (gh-4126)
		// dataFilter is not invoked for failure responses, so using it instead
		// of the default converter is kludgy but it works.
		converters: {
			"text script": function() {}
		},
		dataFilter: function( response ) {
			jQuery.globalEval( response, options, doc );
		}
	} );
};


jQuery.fn.extend( {
	wrapAll: function( html ) {
		var wrap;

		if ( this[ 0 ] ) {
			if ( isFunction( html ) ) {
				html = html.call( this[ 0 ] );
			}

			// The elements to wrap the target around
			wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

			if ( this[ 0 ].parentNode ) {
				wrap.insertBefore( this[ 0 ] );
			}

			wrap.map( function() {
				var elem = this;

				while ( elem.firstElementChild ) {
					elem = elem.firstElementChild;
				}

				return elem;
			} ).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( isFunction( html ) ) {
			return this.each( function( i ) {
				jQuery( this ).wrapInner( html.call( this, i ) );
			} );
		}

		return this.each( function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		} );
	},

	wrap: function( html ) {
		var htmlIsFunction = isFunction( html );

		return this.each( function( i ) {
			jQuery( this ).wrapAll( htmlIsFunction ? html.call( this, i ) : html );
		} );
	},

	unwrap: function( selector ) {
		this.parent( selector ).not( "body" ).each( function() {
			jQuery( this ).replaceWith( this.childNodes );
		} );
		return this;
	}
} );


jQuery.expr.pseudos.hidden = function( elem ) {
	return !jQuery.expr.pseudos.visible( elem );
};
jQuery.expr.pseudos.visible = function( elem ) {
	return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
};




jQuery.ajaxSettings.xhr = function() {
	try {
		return new window.XMLHttpRequest();
	} catch ( e ) {}
};

var xhrSuccessStatus = {

		// File protocol always yields status code 0, assume 200
		0: 200,

		// Support: IE <=9 only
		// #1450: sometimes IE returns 1223 when it should be 204
		1223: 204
	},
	xhrSupported = jQuery.ajaxSettings.xhr();

support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
support.ajax = xhrSupported = !!xhrSupported;

jQuery.ajaxTransport( function( options ) {
	var callback, errorCallback;

	// Cross domain only allowed if supported through XMLHttpRequest
	if ( support.cors || xhrSupported && !options.crossDomain ) {
		return {
			send: function( headers, complete ) {
				var i,
					xhr = options.xhr();

				xhr.open(
					options.type,
					options.url,
					options.async,
					options.username,
					options.password
				);

				// Apply custom fields if provided
				if ( options.xhrFields ) {
					for ( i in options.xhrFields ) {
						xhr[ i ] = options.xhrFields[ i ];
					}
				}

				// Override mime type if needed
				if ( options.mimeType && xhr.overrideMimeType ) {
					xhr.overrideMimeType( options.mimeType );
				}

				// X-Requested-With header
				// For cross-domain requests, seeing as conditions for a preflight are
				// akin to a jigsaw puzzle, we simply never set it to be sure.
				// (it can always be set on a per-request basis or even using ajaxSetup)
				// For same-domain requests, won't change header if already provided.
				if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
					headers[ "X-Requested-With" ] = "XMLHttpRequest";
				}

				// Set headers
				for ( i in headers ) {
					xhr.setRequestHeader( i, headers[ i ] );
				}

				// Callback
				callback = function( type ) {
					return function() {
						if ( callback ) {
							callback = errorCallback = xhr.onload =
								xhr.onerror = xhr.onabort = xhr.ontimeout =
									xhr.onreadystatechange = null;

							if ( type === "abort" ) {
								xhr.abort();
							} else if ( type === "error" ) {

								// Support: IE <=9 only
								// On a manual native abort, IE9 throws
								// errors on any property access that is not readyState
								if ( typeof xhr.status !== "number" ) {
									complete( 0, "error" );
								} else {
									complete(

										// File: protocol always yields status 0; see #8605, #14207
										xhr.status,
										xhr.statusText
									);
								}
							} else {
								complete(
									xhrSuccessStatus[ xhr.status ] || xhr.status,
									xhr.statusText,

									// Support: IE <=9 only
									// IE9 has no XHR2 but throws on binary (trac-11426)
									// For XHR2 non-text, let the caller handle it (gh-2498)
									( xhr.responseType || "text" ) !== "text"  ||
									typeof xhr.responseText !== "string" ?
										{ binary: xhr.response } :
										{ text: xhr.responseText },
									xhr.getAllResponseHeaders()
								);
							}
						}
					};
				};

				// Listen to events
				xhr.onload = callback();
				errorCallback = xhr.onerror = xhr.ontimeout = callback( "error" );

				// Support: IE 9 only
				// Use onreadystatechange to replace onabort
				// to handle uncaught aborts
				if ( xhr.onabort !== undefined ) {
					xhr.onabort = errorCallback;
				} else {
					xhr.onreadystatechange = function() {

						// Check readyState before timeout as it changes
						if ( xhr.readyState === 4 ) {

							// Allow onerror to be called first,
							// but that will not handle a native abort
							// Also, save errorCallback to a variable
							// as xhr.onerror cannot be accessed
							window.setTimeout( function() {
								if ( callback ) {
									errorCallback();
								}
							} );
						}
					};
				}

				// Create the abort callback
				callback = callback( "abort" );

				try {

					// Do send the request (this may raise an exception)
					xhr.send( options.hasContent && options.data || null );
				} catch ( e ) {

					// #14683: Only rethrow if this hasn't been notified as an error yet
					if ( callback ) {
						throw e;
					}
				}
			},

			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
jQuery.ajaxPrefilter( function( s ) {
	if ( s.crossDomain ) {
		s.contents.script = false;
	}
} );

// Install script dataType
jQuery.ajaxSetup( {
	accepts: {
		script: "text/javascript, application/javascript, " +
			"application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /\b(?:java|ecma)script\b/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
} );

// Handle cache's special case and crossDomain
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
	}
} );

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function( s ) {

	// This transport only deals with cross domain or forced-by-attrs requests
	if ( s.crossDomain || s.scriptAttrs ) {
		var script, callback;
		return {
			send: function( _, complete ) {
				script = jQuery( "<script>" )
					.attr( s.scriptAttrs || {} )
					.prop( { charset: s.scriptCharset, src: s.url } )
					.on( "load error", callback = function( evt ) {
						script.remove();
						callback = null;
						if ( evt ) {
							complete( evt.type === "error" ? 404 : 200, evt.type );
						}
					} );

				// Use native DOM manipulation to avoid our domManip AJAX trickery
				document.head.appendChild( script[ 0 ] );
			},
			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




var oldCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup( {
	jsonp: "callback",
	jsonpCallback: function() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce.guid++ ) );
		this[ callback ] = true;
		return callback;
	}
} );

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var callbackName, overwritten, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url" :
			typeof s.data === "string" &&
				( s.contentType || "" )
					.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
				rjsonp.test( s.data ) && "data"
		);

	// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

		// Get callback name, remembering preexisting value associated with it
		callbackName = s.jsonpCallback = isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;

		// Insert callback into url or form data
		if ( jsonProp ) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} else if ( s.jsonp !== false ) {
			s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

		// Use data converter to retrieve json after script execution
		s.converters[ "script json" ] = function() {
			if ( !responseContainer ) {
				jQuery.error( callbackName + " was not called" );
			}
			return responseContainer[ 0 ];
		};

		// Force json dataType
		s.dataTypes[ 0 ] = "json";

		// Install callback
		overwritten = window[ callbackName ];
		window[ callbackName ] = function() {
			responseContainer = arguments;
		};

		// Clean-up function (fires after converters)
		jqXHR.always( function() {

			// If previous value didn't exist - remove it
			if ( overwritten === undefined ) {
				jQuery( window ).removeProp( callbackName );

			// Otherwise restore preexisting value
			} else {
				window[ callbackName ] = overwritten;
			}

			// Save back as free
			if ( s[ callbackName ] ) {

				// Make sure that re-using the options doesn't screw things around
				s.jsonpCallback = originalSettings.jsonpCallback;

				// Save the callback name for future use
				oldCallbacks.push( callbackName );
			}

			// Call if it was a function and we have a response
			if ( responseContainer && isFunction( overwritten ) ) {
				overwritten( responseContainer[ 0 ] );
			}

			responseContainer = overwritten = undefined;
		} );

		// Delegate to script
		return "script";
	}
} );




// Support: Safari 8 only
// In Safari 8 documents created via document.implementation.createHTMLDocument
// collapse sibling forms: the second one becomes a child of the first one.
// Because of that, this security measure has to be disabled in Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
support.createHTMLDocument = ( function() {
	var body = document.implementation.createHTMLDocument( "" ).body;
	body.innerHTML = "<form></form><form></form>";
	return body.childNodes.length === 2;
} )();


// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML = function( data, context, keepScripts ) {
	if ( typeof data !== "string" ) {
		return [];
	}
	if ( typeof context === "boolean" ) {
		keepScripts = context;
		context = false;
	}

	var base, parsed, scripts;

	if ( !context ) {

		// Stop scripts or inline event handlers from being executed immediately
		// by using document.implementation
		if ( support.createHTMLDocument ) {
			context = document.implementation.createHTMLDocument( "" );

			// Set the base href for the created document
			// so any parsed elements with URLs
			// are based on the document's URL (gh-2965)
			base = context.createElement( "base" );
			base.href = document.location.href;
			context.head.appendChild( base );
		} else {
			context = document;
		}
	}

	parsed = rsingleTag.exec( data );
	scripts = !keepScripts && [];

	// Single tag
	if ( parsed ) {
		return [ context.createElement( parsed[ 1 ] ) ];
	}

	parsed = buildFragment( [ data ], context, scripts );

	if ( scripts && scripts.length ) {
		jQuery( scripts ).remove();
	}

	return jQuery.merge( [], parsed.childNodes );
};


/**
 * Load a url into a page
 */
jQuery.fn.load = function( url, params, callback ) {
	var selector, type, response,
		self = this,
		off = url.indexOf( " " );

	if ( off > -1 ) {
		selector = stripAndCollapse( url.slice( off ) );
		url = url.slice( 0, off );
	}

	// If it's a function
	if ( isFunction( params ) ) {

		// We assume that it's the callback
		callback = params;
		params = undefined;

	// Otherwise, build a param string
	} else if ( params && typeof params === "object" ) {
		type = "POST";
	}

	// If we have elements to modify, make the request
	if ( self.length > 0 ) {
		jQuery.ajax( {
			url: url,

			// If "type" variable is undefined, then "GET" method will be used.
			// Make value of this field explicit since
			// user can override it through ajaxSetup method
			type: type || "GET",
			dataType: "html",
			data: params
		} ).done( function( responseText ) {

			// Save response for use in complete callback
			response = arguments;

			self.html( selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

				// Otherwise use the full result
				responseText );

		// If the request succeeds, this function gets "data", "status", "jqXHR"
		// but they are ignored because response was set above.
		// If it fails, this function gets "jqXHR", "status", "error"
		} ).always( callback && function( jqXHR, status ) {
			self.each( function() {
				callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
			} );
		} );
	}

	return this;
};




jQuery.expr.pseudos.animated = function( elem ) {
	return jQuery.grep( jQuery.timers, function( fn ) {
		return elem === fn.elem;
	} ).length;
};




jQuery.offset = {
	setOffset: function( elem, options, i ) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
			position = jQuery.css( elem, "position" ),
			curElem = jQuery( elem ),
			props = {};

		// Set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "top" );
		curCSSLeft = jQuery.css( elem, "left" );
		calculatePosition = ( position === "absolute" || position === "fixed" ) &&
			( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

		// Need to be able to calculate position if either
		// top or left is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;

		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( isFunction( options ) ) {

			// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
			options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );

		} else {
			curElem.css( props );
		}
	}
};

jQuery.fn.extend( {

	// offset() relates an element's border box to the document origin
	offset: function( options ) {

		// Preserve chaining for setter
		if ( arguments.length ) {
			return options === undefined ?
				this :
				this.each( function( i ) {
					jQuery.offset.setOffset( this, options, i );
				} );
		}

		var rect, win,
			elem = this[ 0 ];

		if ( !elem ) {
			return;
		}

		// Return zeros for disconnected and hidden (display: none) elements (gh-2310)
		// Support: IE <=11 only
		// Running getBoundingClientRect on a
		// disconnected node in IE throws an error
		if ( !elem.getClientRects().length ) {
			return { top: 0, left: 0 };
		}

		// Get document-relative position by adding viewport scroll to viewport-relative gBCR
		rect = elem.getBoundingClientRect();
		win = elem.ownerDocument.defaultView;
		return {
			top: rect.top + win.pageYOffset,
			left: rect.left + win.pageXOffset
		};
	},

	// position() relates an element's margin box to its offset parent's padding box
	// This corresponds to the behavior of CSS absolute positioning
	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset, doc,
			elem = this[ 0 ],
			parentOffset = { top: 0, left: 0 };

		// position:fixed elements are offset from the viewport, which itself always has zero offset
		if ( jQuery.css( elem, "position" ) === "fixed" ) {

			// Assume position:fixed implies availability of getBoundingClientRect
			offset = elem.getBoundingClientRect();

		} else {
			offset = this.offset();

			// Account for the *real* offset parent, which can be the document or its root element
			// when a statically positioned element is identified
			doc = elem.ownerDocument;
			offsetParent = elem.offsetParent || doc.documentElement;
			while ( offsetParent &&
				( offsetParent === doc.body || offsetParent === doc.documentElement ) &&
				jQuery.css( offsetParent, "position" ) === "static" ) {

				offsetParent = offsetParent.parentNode;
			}
			if ( offsetParent && offsetParent !== elem && offsetParent.nodeType === 1 ) {

				// Incorporate borders into its offset, since they are outside its content origin
				parentOffset = jQuery( offsetParent ).offset();
				parentOffset.top += jQuery.css( offsetParent, "borderTopWidth", true );
				parentOffset.left += jQuery.css( offsetParent, "borderLeftWidth", true );
			}
		}

		// Subtract parent offsets and element margins
		return {
			top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
		};
	},

	// This method will return documentElement in the following cases:
	// 1) For the element inside the iframe without offsetParent, this method will return
	//    documentElement of the parent window
	// 2) For the hidden or detached element
	// 3) For body or html element, i.e. in case of the html node - it will return itself
	//
	// but those exceptions were never presented as a real life use-cases
	// and might be considered as more preferable results.
	//
	// This logic, however, is not guaranteed and can change at any point in the future
	offsetParent: function() {
		return this.map( function() {
			var offsetParent = this.offsetParent;

			while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
				offsetParent = offsetParent.offsetParent;
			}

			return offsetParent || documentElement;
		} );
	}
} );

// Create scrollLeft and scrollTop methods
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
	var top = "pageYOffset" === prop;

	jQuery.fn[ method ] = function( val ) {
		return access( this, function( elem, method, val ) {

			// Coalesce documents and windows
			var win;
			if ( isWindow( elem ) ) {
				win = elem;
			} else if ( elem.nodeType === 9 ) {
				win = elem.defaultView;
			}

			if ( val === undefined ) {
				return win ? win[ prop ] : elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : win.pageXOffset,
					top ? val : win.pageYOffset
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length );
	};
} );

// Support: Safari <=7 - 9.1, Chrome <=37 - 49
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
jQuery.each( [ "top", "left" ], function( _i, prop ) {
	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
		function( elem, computed ) {
			if ( computed ) {
				computed = curCSS( elem, prop );

				// If curCSS returns percentage, fallback to offset
				return rnumnonpx.test( computed ) ?
					jQuery( elem ).position()[ prop ] + "px" :
					computed;
			}
		}
	);
} );


// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( {
		padding: "inner" + name,
		content: type,
		"": "outer" + name
	}, function( defaultExtra, funcName ) {

		// Margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return access( this, function( elem, type, value ) {
				var doc;

				if ( isWindow( elem ) ) {

					// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
					return funcName.indexOf( "outer" ) === 0 ?
						elem[ "inner" + name ] :
						elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
					// whichever is greatest
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?

					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable );
		};
	} );
} );


jQuery.each( [
	"ajaxStart",
	"ajaxStop",
	"ajaxComplete",
	"ajaxError",
	"ajaxSuccess",
	"ajaxSend"
], function( _i, type ) {
	jQuery.fn[ type ] = function( fn ) {
		return this.on( type, fn );
	};
} );




jQuery.fn.extend( {

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {

		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ?
			this.off( selector, "**" ) :
			this.off( types, selector || "**", fn );
	},

	hover: function( fnOver, fnOut ) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	}
} );

jQuery.each(
	( "blur focus focusin focusout resize scroll click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup contextmenu" ).split( " " ),
	function( _i, name ) {

		// Handle event binding
		jQuery.fn[ name ] = function( data, fn ) {
			return arguments.length > 0 ?
				this.on( name, null, data, fn ) :
				this.trigger( name );
		};
	}
);




// Support: Android <=4.0 only
// Make sure we trim BOM and NBSP
var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

// Bind a function to a context, optionally partially applying any
// arguments.
// jQuery.proxy is deprecated to promote standards (specifically Function#bind)
// However, it is not slated for removal any time soon
jQuery.proxy = function( fn, context ) {
	var tmp, args, proxy;

	if ( typeof context === "string" ) {
		tmp = fn[ context ];
		context = fn;
		fn = tmp;
	}

	// Quick check to determine if target is callable, in the spec
	// this throws a TypeError, but we will just return undefined.
	if ( !isFunction( fn ) ) {
		return undefined;
	}

	// Simulated bind
	args = slice.call( arguments, 2 );
	proxy = function() {
		return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
	};

	// Set the guid of unique handler to the same of original handler, so it can be removed
	proxy.guid = fn.guid = fn.guid || jQuery.guid++;

	return proxy;
};

jQuery.holdReady = function( hold ) {
	if ( hold ) {
		jQuery.readyWait++;
	} else {
		jQuery.ready( true );
	}
};
jQuery.isArray = Array.isArray;
jQuery.parseJSON = JSON.parse;
jQuery.nodeName = nodeName;
jQuery.isFunction = isFunction;
jQuery.isWindow = isWindow;
jQuery.camelCase = camelCase;
jQuery.type = toType;

jQuery.now = Date.now;

jQuery.isNumeric = function( obj ) {

	// As of jQuery 3.0, isNumeric is limited to
	// strings and numbers (primitives or objects)
	// that can be coerced to finite numbers (gh-2662)
	var type = jQuery.type( obj );
	return ( type === "number" || type === "string" ) &&

		// parseFloat NaNs numeric-cast false positives ("")
		// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
		// subtraction forces infinities to NaN
		!isNaN( obj - parseFloat( obj ) );
};

jQuery.trim = function( text ) {
	return text == null ?
		"" :
		( text + "" ).replace( rtrim, "" );
};



// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if ( typeof define === "function" && define.amd ) {
	define( "jquery", [], function() {
		return jQuery;
	} );
}




var

	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$;

jQuery.noConflict = function( deep ) {
	if ( window.$ === jQuery ) {
		window.$ = _$;
	}

	if ( deep && window.jQuery === jQuery ) {
		window.jQuery = _jQuery;
	}

	return jQuery;
};

// Expose jQuery and $ identifiers, even in AMD
// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
if ( typeof noGlobal === "undefined" ) {
	window.jQuery = window.$ = jQuery;
}




return jQuery;
} );

},{}],112:[function(require,module,exports){
// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };

},{}],113:[function(require,module,exports){
(function (setImmediate,clearImmediate){(function (){
var nextTick = require('process/browser.js').nextTick;
var apply = Function.prototype.apply;
var slice = Array.prototype.slice;
var immediateIds = {};
var nextImmediateId = 0;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, window, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, window, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) { timeout.close(); };

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(window, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// That's not how node.js implements it but the exposed api is the same.
exports.setImmediate = typeof setImmediate === "function" ? setImmediate : function(fn) {
  var id = nextImmediateId++;
  var args = arguments.length < 2 ? false : slice.call(arguments, 1);

  immediateIds[id] = true;

  nextTick(function onNextTick() {
    if (immediateIds[id]) {
      // fn.call() is faster so we optimize for the common use-case
      // @see http://jsperf.com/call-apply-segu
      if (args) {
        fn.apply(null, args);
      } else {
        fn.call(null);
      }
      // Prevent ids from leaking
      exports.clearImmediate(id);
    }
  });

  return id;
};

exports.clearImmediate = typeof clearImmediate === "function" ? clearImmediate : function(id) {
  delete immediateIds[id];
};
}).call(this)}).call(this,require("timers").setImmediate,require("timers").clearImmediate)
},{"process/browser.js":112,"timers":113}]},{},[1]);
