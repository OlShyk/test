!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){e.exports=n(2)},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r,o,a;n(1);function i(e){return function(e){if(Array.isArray(e))return c(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return c(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return c(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}r=document.querySelector("#file"),o=document.querySelector(".file__button"),a=document.querySelector(".file"),o.addEventListener("focus",(function(){r.focus(),a.classList.add("file--focus")})),r.addEventListener("change",(function(){o.classList.add("file__button--chosen"),o.textContent=r.value.replace("C:\\fakepath\\","")})),function(){var e=document.getElementById("output"),t=document.getElementById("range");e.textContent=t.value+" %",t.addEventListener("change",(function(t){e.textContent=t.target.value+" %"}))}(),function(){var e=document.querySelector(".select"),t=document.getElementById("system"),n=e.querySelector(".select__list"),r=n.querySelectorAll(".select__option"),o=i(r),a="initial";function c(t){"Open"===t?(n.classList.remove("select__list--hidden"),e.setAttribute("aria-expanded","true")):(n.classList.add("select__list--hidden"),e.setAttribute("aria-expanded","false"))}function u(e,n){var a=o.filter((function(e){if(""===e.style.display)return!0}));if(0!==a.length)switch("input"===n&&t.focus(),e){case t:"forward"===n?a[0].focus():"back"===n&&a[a.length-1].focus();break;case r[0]:"forward"===n?a[1].focus():"back"===n&&t.focus();break;case r[r.length-1]:"forward"===n?a[0].focus():"back"===n&&a[a.length-2].focus();break;default:var i=a.indexOf(document.activeElement);"forward"===n?a[i+1].focus():"back"===n&&whichOne>0?a[i-1].focus():t.focus()}}function l(){var e=o.filter((function(e){if(e.textContent.toUpperCase().startsWith(t.value.toUpperCase()))return!0}));r.forEach((function(e){return e.style.display="none"})),e.forEach((function(e){e.style.display=""})),a="filtered"}e.addEventListener("click",(function(e){var n=document.activeElement;switch(a){case"initial":c("Open"),a="opened";break;case"opened":n===t?(c("Shut"),a="initial"):"LI"===n.tagName&&(t.value=n.textContent,u(n,"input"),c("Shut"),a="closed");break;case"filtered":"LI"===n.tagName&&(t.value=n.textContent,u(n,"input"),c("Shut"),a="closed");break;case"closed":c("Open"),a="filtered"}})),e.addEventListener("keyup",(function(e){var n=document.activeElement;switch(e.key){case"Enter":"initial"===a?(t.style="background-color: #3D4050; border-color: #3D4050; color: #FFFFFF",c("Open"),a="opened"):"opened"===a&&"LI"===n.tagName?(t.value=n.textContent,u(n,"input"),c("Shut"),a="closed"):"opened"===a&&n===t?(c("Shut"),a="closed"):"filtered"===a&&"LI"===n.tagName?(t.value=n.textContent,u(n,"input"),c("Shut"),a="closed"):"filtered"===a&&n===t?(c("Open"),a="opened"):(c("Open"),a="filtered");break;case"Escape":"opened"!==a&&"filtered"!==a||(c("Shut"),a="initial");break;case"ArrowDown":"initial"===a||"closed"===a?(c("Open"),u(t,"forward"),a="opened"):(t.style="background-color: #3D4050; border-color: #3D4050",c("Open"),u(n,"forward"));break;case"ArrowUp":t.style="background-color: #3D4050; border-color: #3D4050; color: #FFFFFF","initial"===a||"closed"===a?(c("Open"),u(t,"back"),a="opened"):u(n,"back");break;default:"initial"===a?(c("Open"),l(),a="filtered"):"opened"===a||"closed"===a?(l(),a="filtered"):l()}})),document.addEventListener("click",(function(e){e.target.closest(".select")||(c("Shut"),a="initial")}))}(),function(){var e=document.querySelector(".header__button"),t=document.querySelector(".header__navigation");e.addEventListener("click",(function(){t.classList.add("header__navigation--open")})),document.addEventListener("click",(function(e){e.target.closest(".header__button")||t.classList.remove("header__navigation--open")}))}()}]);
//# sourceMappingURL=bundle.js.map