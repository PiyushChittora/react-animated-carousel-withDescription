module.exports=function(n){var r={};function e(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return n[t].call(a.exports,a,a.exports,e),a.l=!0,a.exports}return e.m=n,e.c=r,e.d=function(n,r,t){e.o(n,r)||Object.defineProperty(n,r,{enumerable:!0,get:t})},e.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},e.t=function(n,r){if(1&r&&(n=e(n)),8&r)return n;if(4&r&&"object"==typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(e.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&r&&"string"!=typeof n)for(var a in n)e.d(t,a,function(r){return n[r]}.bind(null,a));return t},e.n=function(n){var r=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(r,"a",r),r},e.o=function(n,r){return Object.prototype.hasOwnProperty.call(n,r)},e.p="",e(e.s=9)}([function(n,r){n.exports=require("react")},function(n,r,e){"use strict";var t,a=function(){return void 0===t&&(t=Boolean(window&&document&&document.all&&!window.atob)),t},o=function(){var n={};return function(r){if(void 0===n[r]){var e=document.querySelector(r);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}n[r]=e}return n[r]}}(),i=[];function l(n){for(var r=-1,e=0;e<i.length;e++)if(i[e].identifier===n){r=e;break}return r}function s(n,r){for(var e={},t=[],a=0;a<n.length;a++){var o=n[a],s=r.base?o[0]+r.base:o[0],c=e[s]||0,d="".concat(s," ").concat(c);e[s]=c+1;var f=l(d),u={css:o[1],media:o[2],sourceMap:o[3]};-1!==f?(i[f].references++,i[f].updater(u)):i.push({identifier:d,updater:g(u,r),references:1}),t.push(d)}return t}function c(n){var r=document.createElement("style"),t=n.attributes||{};if(void 0===t.nonce){var a=e.nc;a&&(t.nonce=a)}if(Object.keys(t).forEach((function(n){r.setAttribute(n,t[n])})),"function"==typeof n.insert)n.insert(r);else{var i=o(n.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(r)}return r}var d,f=(d=[],function(n,r){return d[n]=r,d.filter(Boolean).join("\n")});function u(n,r,e,t){var a=e?"":t.media?"@media ".concat(t.media," {").concat(t.css,"}"):t.css;if(n.styleSheet)n.styleSheet.cssText=f(r,a);else{var o=document.createTextNode(a),i=n.childNodes;i[r]&&n.removeChild(i[r]),i.length?n.insertBefore(o,i[r]):n.appendChild(o)}}function m(n,r,e){var t=e.css,a=e.media,o=e.sourceMap;if(a?n.setAttribute("media",a):n.removeAttribute("media"),o&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),n.styleSheet)n.styleSheet.cssText=t;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(t))}}var p=null,h=0;function g(n,r){var e,t,a;if(r.singleton){var o=h++;e=p||(p=c(r)),t=u.bind(null,e,o,!1),a=u.bind(null,e,o,!0)}else e=c(r),t=m.bind(null,e,r),a=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)};return t(n),function(r){if(r){if(r.css===n.css&&r.media===n.media&&r.sourceMap===n.sourceMap)return;t(n=r)}else a()}}n.exports=function(n,r){(r=r||{}).singleton||"boolean"==typeof r.singleton||(r.singleton=a());var e=s(n=n||[],r);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var t=0;t<e.length;t++){var a=l(e[t]);i[a].references--}for(var o=s(n,r),c=0;c<e.length;c++){var d=l(e[c]);0===i[d].references&&(i[d].updater(),i.splice(d,1))}e=o}}}},function(n,r,e){"use strict";n.exports=function(n){var r=[];return r.toString=function(){return this.map((function(r){var e=function(n,r){var e=n[1]||"",t=n[3];if(!t)return e;if(r&&"function"==typeof btoa){var a=(i=t,l=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(l),"/*# ".concat(s," */")),o=t.sources.map((function(n){return"/*# sourceURL=".concat(t.sourceRoot||"").concat(n," */")}));return[e].concat(o).concat([a]).join("\n")}var i,l,s;return[e].join("\n")}(r,n);return r[2]?"@media ".concat(r[2]," {").concat(e,"}"):e})).join("")},r.i=function(n,e,t){"string"==typeof n&&(n=[[null,n,""]]);var a={};if(t)for(var o=0;o<this.length;o++){var i=this[o][0];null!=i&&(a[i]=!0)}for(var l=0;l<n.length;l++){var s=[].concat(n[l]);t&&a[s[0]]||(e&&(s[2]?s[2]="".concat(e," and ").concat(s[2]):s[2]=e),r.push(s))}},r}},function(n,r,e){var t=e(1),a=e(4);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[n.i,a,""]]);var o={insert:"head",singleton:!1};t(a,o);n.exports=a.locals||{}},function(n,r,e){(r=e(2)(!1)).push([n.i,".allContainer {\r\n    position: relative;\r\n    height: 100vh;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    overflow: hidden;\r\n    color: black;\r\n}\r\n\r\n.dark.allContainer {\r\n    color: white;\r\n}\r\n\r\n.CarouselContainer {\r\n    z-index: 10;\r\n    position: absolute;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-around;\r\n    width: 100%;\r\n}\r\n\r\n.arrow {\r\n    width: 0;\r\n    height: 0;\r\n    border-left: 14px solid transparent;\r\n    border-right: 14px solid transparent;\r\n    border-bottom: 14px solid black;\r\n    margin: 0px;\r\n    transition: all ease 0.5s;\r\n    cursor: pointer;\r\n}\r\n.arrow.dark{\r\n    border-bottom-color: white;\r\n}\r\n.left{\r\n    transform: rotate(-90deg);\r\n}\r\n.right{\r\n    transform: rotate(90deg);\r\n}\r\n.left:hover {\r\n    transform: rotate(-90deg) scale(1.2);\r\n    box-shadow: 0 0 0;\r\n}\r\n.right:hover{\r\n    transform: rotate(90deg) scale(1.2);\r\n    box-shadow: 0 0 0;\r\n}\r\n\r\n.slideButton {\r\n    z-index: 100;\r\n    position: absolute;\r\n    bottom: 16px;\r\n    left: 50%;\r\n    transform: translate(-50%);\r\n    display: flex;\r\n    align-items: baseline;\r\n}\r\n\r\n.SlideBtn {\r\n    width: 2px;\r\n    height: 16px;\r\n    background-color: black;\r\n    margin: 5px;\r\n    transition: all ease 0.5s;\r\n    box-shadow: 0 0 5px #00000050;\r\n    cursor: pointer;\r\n    border-radius: 2px;\r\n}\r\n\r\n.dark.SlideBtn {\r\n    background-color: white;\r\n}\r\n\r\n.SlideBtn.active {\r\n    height: 24px;\r\n}\r\n\r\n.Goleft {\r\n    font-size: 12px;\r\n    position: absolute;\r\n    right: -140px;\r\n    bottom: 24px;\r\n    z-index: 100000;\r\n    display: flex;\r\n    align-items: center;\r\n    transition: all ease 0.5s;\r\n}\r\n\r\n.indicatoractive {\r\n    right: 0em;\r\n}\r\n\r\n.line {\r\n    margin-left: 7px;\r\n    height: 1px;\r\n    width: 70px;\r\n    background-color: black;\r\n}\r\n\r\n.dark.line {\r\n    background-color: white;\r\n}\r\n\r\n@media (max-width: 800px) {\r\n    .arrow {\r\n        margin-left: 14px;\r\n        margin-right: 14px;\r\n    }\r\n}",""]),n.exports=r},function(n,r,e){var t=e(1),a=e(6);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[n.i,a,""]]);var o={insert:"head",singleton:!1};t(a,o);n.exports=a.locals||{}},function(n,r,e){(r=e(2)(!1)).push([n.i,".leftContainer{\r\n    width: 25%;\r\n    overflow: hidden;\r\n}\r\n.headingName{\r\n    font-size: 42px;\r\n    width: auto;\r\n    animation: 0.8s ease 1 textAnimate;\r\n}\r\n.headingDecor{\r\n    height: 2px;\r\n    width: 40px;\r\n    background-color: #ff4d5a;\r\n    margin-top: 10px;\r\n    transform: translateX(10px);\r\n}\r\n#decor2{\r\n    transform: translateX(30px);\r\n}\r\n\r\n.Descp {\r\n    font-size: 14px;\r\n    margin-top: 14px;\r\n    font-weight: 300;\r\n    animation: 1s ease 1 textAnimate;\r\n}\r\n.port {\r\n    font-weight: 700;\r\n    font-size: 18px;\r\n    color: #ff4d5a;\r\n    margin-top: 14px;\r\n    animation: 1s ease 1 textAnimate;\r\n}\r\n\r\n.btn{\r\n    outline: none;\r\n    border: none;\r\n    cursor: pointer;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    color: white;\r\n    text-decoration: none;\r\n    width: 50%;\r\n    margin-top: 18px;\r\n    margin-bottom: 7px;\r\n    padding: 7px;\r\n    font-size: small;\r\n    border-radius: 50px;\r\n    transition: all ease 0.5s;\r\n    animation: 1s ease 1 textAnimate;\r\n}\r\n.btn:hover{\r\n    transform: translateY(-2px);\r\n    box-shadow: 0 5px 5px #0000003c;\r\n}\r\n\r\n@keyframes textAnimate {\r\n    from{\r\n        transform: translateX(-100%);\r\n    }\r\n    to{\r\n        transform: translate(0%);\r\n    }\r\n}\r\n\r\n@media (max-width:800px) {\r\n    .leftContainer{\r\n        width: 100%;\r\n    }\r\n    .headingName{\r\n        font-size: 42px;\r\n    }\r\n    \r\n    .Descp {\r\n        font-size: 14px;\r\n    }\r\n    .port {\r\n        font-size: 18px;\r\n    }\r\n    .btn{\r\n        font-size: medium;\r\n    }\r\n}\r\n\r\n",""]),n.exports=r},function(n,r,e){var t=e(1),a=e(8);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[n.i,a,""]]);var o={insert:"head",singleton:!1};t(a,o);n.exports=a.locals||{}},function(n,r,e){(r=e(2)(!1)).push([n.i,"@import url(https://fonts.googleapis.com/css2?family=DM+Serif+Text&display=swap);"]),r.push([n.i,".HomeContainer {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    flex-wrap: wrap-reverse;\r\n    width: 80vw;\r\n}\r\n\r\n.rightContainer {\r\n    position: relative;\r\n    overflow: hidden;\r\n    height: 75vh;\r\n    display: flex;\r\n    align-items: center;\r\n    animation: 1s ease-out 1 containerAnimate;\r\n}\r\n\r\n@keyframes containerAnimate {\r\n    from {\r\n        height: 55%;\r\n    }\r\n    \r\n    to {\r\n        height: 75%;\r\n    }\r\n}\r\n\r\n.box {\r\n    position: absolute;\r\n    width: 52vw;\r\n    height: 75vh;\r\n    transform: translateX(100%);\r\n}\r\n\r\n@keyframes boxAnimate {\r\n    from {\r\n        transform: translateX(0);\r\n    }\r\n    \r\n    to {\r\n        transform: translateX(100%);\r\n    }\r\n}\r\n\r\n.blue {\r\n    z-index: 10003;\r\n    background-color: #072142;\r\n    animation: 0.7s ease 1 boxAnimate;\r\n}\r\n\r\n.red {\r\n    z-index: 10002;\r\n    background-color: #ff4d5a;\r\n    animation: 0.8s ease-in-out 1 boxAnimate;\r\n}\r\n\r\n.rightContainer>img {\r\n    max-width: 52vw;\r\n    height: 75vh;\r\n    object-fit: cover;\r\n    animation: 1s ease-out 1 imgAnimate;\r\n}\r\n\r\n@keyframes imgAnimate {\r\n    from {\r\n        width: 43vw;\r\n    }\r\n\r\n    to {\r\n        width: 52vw;\r\n    }\r\n}\r\n\r\n.idxContainer {\r\n    z-index: 100000;\r\n    position: absolute;\r\n    left: 85vw;\r\n    bottom: 10vh;\r\n    overflow: hidden;\r\n}\r\n\r\n.idxText {\r\n    margin-left: 0.2em;\r\n    margin-right: 0.2em;\r\n    font-size: 6em;\r\n    font-family: 'DM Serif Text', serif;\r\n    text-shadow: 0 0px 7px #00000050;\r\n    animation: 1s ease-out 1 idxAnimate;\r\n}\r\n\r\n@keyframes idxAnimate {\r\n    from {\r\n        transform: translateY(100%);\r\n    }\r\n\r\n    to {\r\n        transform: translateY(0);\r\n    }\r\n}\r\n\r\n\r\n@media (max-width: 800px) {\r\n    .HomeContainer {\r\n        align-items: flex-end;\r\n        width: 100vw;\r\n        height: 80vh;\r\n    }\r\n\r\n    .rightContainer {\r\n        height: 40vh;\r\n    }\r\n\r\n    @keyframes containerAnimate {\r\n        from {\r\n            height: 30vh;\r\n        }\r\n\r\n        to {\r\n            height: 40vh;\r\n        }\r\n    }\r\n\r\n    .box {\r\n        width: 101%;\r\n        height: 40vh;\r\n    }\r\n\r\n    .rightContainer>img {\r\n        max-width: 100%;\r\n        height: 100%;\r\n    }\r\n\r\n    @keyframes imgAnimate {\r\n        from {\r\n            width: 80%;\r\n        }\r\n        to {\r\n            width: 100%;\r\n        }\r\n    }\r\n    \r\n    .idxContainer {\r\n        left: 5vw;\r\n        bottom: 80vh;\r\n    }\r\n}",""]),n.exports=r},function(n,r,e){"use strict";e.r(r),e.d(r,"Carousel",(function(){return c}));var t=e(0),a=e.n(t);e(3),e(5);function o(n){var r=n.obj,e="color"in r?r.color:"#ff4d5a",t="textOnly"in r&&r.textOnly;return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"leftContainer"},a.a.createElement("div",{className:"headingName"},r.heading,a.a.createElement("div",{className:"headingDecor",id:"decor1",style:{backgroundColor:e}}),a.a.createElement("div",{className:"headingDecor",id:"decor2",style:{backgroundColor:e}})),a.a.createElement("div",{className:"Descp"},r.description),t?a.a.createElement("div",{className:"port",style:{color:e}},r.text):a.a.createElement("a",{href:r.link,className:"btn",style:{backgroundColor:e},target:"__blank"},r.text)))}e(7);function i(n){var r=n.obj,e=(n.idx,"color"in r?r.color:"#ff4d5a");return a.a.createElement("div",{className:"HomeContainer"},a.a.createElement(o,{obj:r}),a.a.createElement("div",{className:"rightContainer"},a.a.createElement("div",{className:"box blue"}),a.a.createElement("div",{className:"box red",style:{backgroundColor:e}}),a.a.createElement("img",{src:r.image,alt:"loading"})))}function l(n,r){return function(n){if(Array.isArray(n))return n}(n)||function(n,r){var e=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=e){var t,a,o,i,l=[],s=!0,c=!1;try{if(o=(e=e.call(n)).next,0===r){if(Object(e)!==e)return;s=!1}else for(;!(s=(t=o.call(e)).done)&&(l.push(t.value),l.length!==r);s=!0);}catch(n){c=!0,a=n}finally{try{if(!s&&null!=e.return&&(i=e.return(),Object(i)!==i))return}finally{if(c)throw a}}return l}}(n,r)||function(n,r){if(!n)return;if("string"==typeof n)return s(n,r);var e=Object.prototype.toString.call(n).slice(8,-1);"Object"===e&&n.constructor&&(e=n.constructor.name);if("Map"===e||"Set"===e)return Array.from(n);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return s(n,r)}(n,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(n,r){(null==r||r>n.length)&&(r=n.length);for(var e=0,t=new Array(r);e<r;e++)t[e]=n[e];return t}var c=function(n){var r=n.isDark,e=n.data,o=e.length,s=l(Object(t.useState)(0),2),c=s[0],d=s[1];return a.a.createElement("div",{className:"allContainer ".concat(r?"dark":"")},a.a.createElement("div",{className:"CarouselContainer"},a.a.createElement("div",{className:"arrow left ".concat(r?"dark":""),onClick:function(){d(0===c?o-1:c-1)}}),e.map((function(n,r){return c===r&&a.a.createElement(i,{key:r,obj:n,idx:r})})),a.a.createElement("div",{className:"arrow right ".concat(r?"dark":""),onClick:function(){d(c===o-1?0:c+1)}})),a.a.createElement("div",{className:"slideButton"},e.map((function(n,e){return a.a.createElement("div",{key:e,className:"SlideBtn ".concat(c===e?"active":""," ").concat(r?"dark":""),onClick:function(){return d(e)}})}))),a.a.createElement("div",{className:"Goleft ".concat(0===c?"indicatoractive":"")},a.a.createElement("span",null,"GO LEFT"),a.a.createElement("div",{className:"line ".concat(r?"dark":"")})))}}]);