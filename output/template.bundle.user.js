// ==UserScript==
// @name            Tampermonkey Typescript Template
// @description     A simple tampermonkey typescript template using webpack.
// @author          EurekaEffect
// @version         1.0

// @match           *

// @grant           unsafeWindow
// @run-at          document-idle
// ==/UserScript==

(()=>{"use strict";var e={130:(e,o)=>{Object.defineProperty(o,"__esModule",{value:!0}),o.getRandomNumber=function(){return Math.floor(1e3*Math.random())}},279:function(e,o,n){var t=this&&this.__awaiter||function(e,o,n,t){return new(n||(n=Promise))((function(r,i){function u(e){try{c(t.next(e))}catch(e){i(e)}}function a(e){try{c(t.throw(e))}catch(e){i(e)}}function c(e){var o;e.done?r(e.value):(o=e.value,o instanceof n?o:new n((function(e){e(o)}))).then(u,a)}c((t=t.apply(e,o||[])).next())}))};Object.defineProperty(o,"__esModule",{value:!0});const r=n(130);!function(){t(this,void 0,void 0,(function*(){console.log("You will see this prompt each time you open a new tab."),console.log("I love random numbers! "+(0,r.getRandomNumber)()),console.log(window),console.log(unsafeWindow)}))}()}},o={};!function n(t){var r=o[t];if(void 0!==r)return r.exports;var i=o[t]={exports:{}};return e[t].call(i.exports,i,i.exports,n),i.exports}(279)})();