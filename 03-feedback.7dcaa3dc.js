!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={};Object.defineProperty(i,"__esModule",{value:!0}),i.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var r="Expected a function",o=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,l=/^0o[0-7]+$/i,f=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,s="object"==typeof self&&self&&self.Object===Object&&self,d=c||s||Function("return this")(),m=Object.prototype.toString,v=Math.max,g=Math.min,p=function(){return d.Date.now()};function b(e,t,n){var i,o,a,u,l,f,c=0,s=!1,d=!1,m=!0;if("function"!=typeof e)throw new TypeError(r);function b(t){var n=i,r=o;return i=o=void 0,c=t,u=e.apply(r,n)}function O(e){return c=e,l=setTimeout(h,t),s?b(e):u}function j(e){var n=e-f;return void 0===f||n>=t||n<0||d&&e-c>=a}function h(){var e=p();if(j(e))return w(e);l=setTimeout(h,function(e){var n=t-(e-f);return d?g(n,a-(e-c)):n}(e))}function w(e){return l=void 0,m&&i?b(e):(i=o=void 0,u)}function T(){var e=p(),n=j(e);if(i=arguments,o=this,f=e,n){if(void 0===l)return O(f);if(d)return l=setTimeout(h,t),b(f)}return void 0===l&&(l=setTimeout(h,t)),u}return t=S(t)||0,y(n)&&(s=!!n.leading,a=(d="maxWait"in n)?v(S(n.maxWait)||0,t):a,m="trailing"in n?!!n.trailing:m),T.cancel=function(){void 0!==l&&clearTimeout(l),c=0,i=f=o=l=void 0},T.flush=function(){return void 0===l?u:w(p())},T}function y(t){var n=void 0===t?"undefined":e(i)(t);return!!t&&("object"==n||"function"==n)}function S(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(i)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==m.call(t)}(t))return NaN;if(y(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=y(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(o,"");var r=u.test(t);return r||l.test(t)?f(t.slice(2),r?2:8):a.test(t)?NaN:+t}t=function(e,t,n){var i=!0,o=!0;if("function"!=typeof e)throw new TypeError(r);return y(n)&&(i="leading"in n?!!n.leading:i,o="trailing"in n?!!n.trailing:o),b(e,t,{leading:i,maxWait:t,trailing:o})};var O=document.querySelector(".feedback-form"),j="feedback-form-state";if(JSON.parse(localStorage.getItem(j))){var h=JSON.parse(localStorage.getItem(j));O.elements.email.value=h.email,O.elements.message.value=h.message}O.addEventListener("input",e(t)((function(e){var t={email:O.elements.email.value,message:O.elements.message.value};localStorage.setItem(j,JSON.stringify(t))}),500)),O.addEventListener("submit",(function(e){if(e.preventDefault(),""===O.elements.email.value||""===O.elements.message.value)return alert("All fields must be filled!");console.log(JSON.parse(localStorage.getItem(j))),localStorage.removeItem(j),O.reset()}))}();
//# sourceMappingURL=03-feedback.7dcaa3dc.js.map
