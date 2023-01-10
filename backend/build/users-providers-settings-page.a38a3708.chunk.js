"use strict";(self.webpackChunkbackend=self.webpackChunkbackend||[]).push([[2282],{69877:(vt,se,d)=>{d.r(se),d.d(se,{ProvidersPage:()=>Oa,default:()=>Gi});var c=d(67294),C=d(97132),h=d(68547),te=d(18721),ne=d.n(te),le=d(11700),q=d.n(le),G=d(25108);function fe(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,a)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?fe(Object(n),!0).forEach(function(a){N(e,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):fe(Object(n)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))})}return e}function X(e){return X=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},X(e)}function V(){V=function(r,i){return new n(r,void 0,i)};var e=RegExp.prototype,t=new WeakMap;function n(r,i,o){var s=new RegExp(r,i);return t.set(s,o||t.get(r)),ae(s,n.prototype)}function a(r,i){var o=t.get(i);return Object.keys(o).reduce(function(s,l){return s[l]=r[o[l]],s},Object.create(null))}return ce(n,RegExp),n.prototype.exec=function(r){var i=e.exec.call(this,r);return i&&(i.groups=a(i,this)),i},n.prototype[Symbol.replace]=function(r,i){if(typeof i=="string"){var o=t.get(this);return e[Symbol.replace].call(this,r,i.replace(/\$<([^>]+)>/g,function(l,f){return"$"+o[f]}))}if(typeof i=="function"){var s=this;return e[Symbol.replace].call(this,r,function(){var l=arguments;return typeof l[l.length-1]!="object"&&(l=[].slice.call(l)).push(a(l,s)),i.apply(this,l)})}return e[Symbol.replace].call(this,r,i)},V.apply(this,arguments)}function me(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function ve(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function Te(e,t,n){return t&&ve(e.prototype,t),n&&ve(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function N(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ce(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&ae(e,t)}function ae(e,t){return ae=Object.setPrototypeOf||function(a,r){return a.__proto__=r,a},ae(e,t)}function H(e,t){return P(e)||pe(e,t)||Me(e,t)||Le()}function g(e){return E(e)||S(e)||Me(e)||Be()}function E(e){if(Array.isArray(e))return xe(e)}function P(e){if(Array.isArray(e))return e}function S(e){if(typeof Symbol!="undefined"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function pe(e,t){var n=e==null?null:typeof Symbol!="undefined"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var a=[],r=!0,i=!1,o,s;try{for(n=n.call(e);!(r=(o=n.next()).done)&&(a.push(o.value),!(t&&a.length===t));r=!0);}catch(l){i=!0,s=l}finally{try{!r&&n.return!=null&&n.return()}finally{if(i)throw s}}return a}}function Me(e,t){if(!!e){if(typeof e=="string")return xe(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return xe(e,t)}}function xe(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function Be(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Le(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Ue=function(){},we={},Ne={},Re=null,pt={mark:Ue,measure:Ue};try{typeof window!="undefined"&&(we=window),typeof document!="undefined"&&(Ne=document),typeof MutationObserver!="undefined"&&(Re=MutationObserver),typeof performance!="undefined"&&(pt=performance)}catch(e){}var We=we.navigator||{},et=We.userAgent,tt=et===void 0?"":et,re=we,I=Ne,bt=Re,_e=pt,pn=!!re.document,Z=!!I.documentElement&&!!I.head&&typeof I.addEventListener=="function"&&typeof I.createElement=="function",y=~tt.indexOf("MSIE")||~tt.indexOf("Trident/"),x,O,A,Oe,ke,K="___FONT_AWESOME___",_=16,Q="fa",Ye="svg-inline--fa",ie="data-fa-i2svg",Ee="data-fa-pseudo-element",He="data-fa-pseudo-element-pending",be="data-prefix",je="data-icon",De="fontawesome-i2svg",Tt="async",nt=["HTML","HEAD","STYLE","SCRIPT"],bn=function(){try{return!0}catch(e){return!1}}(),R="classic",D="sharp",Mt=[R,D];function at(e){return new Proxy(e,{get:function(n,a){return a in n?n[a]:n[R]}})}var rt=at((x={},N(x,R,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),N(x,D,{fa:"solid",fass:"solid","fa-solid":"solid"}),x)),it=at((O={},N(O,R,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),N(O,D,{solid:"fass"}),O)),ot=at((A={},N(A,R,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),N(A,D,{fass:"fa-solid"}),A)),Ea=at((Oe={},N(Oe,R,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),N(Oe,D,{"fa-solid":"fass"}),Oe)),Pa=/fa(s|r|l|t|d|b|k|ss)?[\-\ ]/,gn="fa-layers-text",Aa=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,Sa=at((ke={},N(ke,R,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),N(ke,D,{900:"fass"}),ke)),hn=[1,2,3,4,5,6,7,8,9,10],Ca=hn.concat([11,12,13,14,15,16,17,18,19,20]),Ia=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Fe={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},st=new Set;Object.keys(it[R]).map(st.add.bind(st)),Object.keys(it[D]).map(st.add.bind(st));var Ta=[].concat(Mt,g(st),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Fe.GROUP,Fe.SWAP_OPACITY,Fe.PRIMARY,Fe.SECONDARY]).concat(hn.map(function(e){return"".concat(e,"x")})).concat(Ca.map(function(e){return"w-".concat(e)})),lt=re.FontAwesomeConfig||{};function Ma(e){var t=I.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function La(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(I&&typeof I.querySelector=="function"){var Na=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Na.forEach(function(e){var t=H(e,2),n=t[0],a=t[1],r=La(Ma(n));r!=null&&(lt[a]=r)})}var yn={styleDefault:"solid",familyDefault:"classic",cssPrefix:Q,replacementClass:Ye,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};lt.familyPrefix&&(lt.cssPrefix=lt.familyPrefix);var Ze=m(m({},yn),lt);Ze.autoReplaceSvg||(Ze.observeMutations=!1);var b={};Object.keys(yn).forEach(function(e){Object.defineProperty(b,e,{enumerable:!0,set:function(n){Ze[e]=n,ft.forEach(function(a){return a(b)})},get:function(){return Ze[e]}})}),Object.defineProperty(b,"familyPrefix",{enumerable:!0,set:function(t){Ze.cssPrefix=t,ft.forEach(function(n){return n(b)})},get:function(){return Ze.cssPrefix}}),re.FontAwesomeConfig=b;var ft=[];function Ra(e){return ft.push(e),function(){ft.splice(ft.indexOf(e),1)}}var Pe=_,ue={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function ja(e){if(!(!e||!Z)){var t=I.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=I.head.childNodes,a=null,r=n.length-1;r>-1;r--){var i=n[r],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(a=i)}return I.head.insertBefore(t,a),e}}var Da="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function ct(){for(var e=12,t="";e-- >0;)t+=Da[Math.random()*62|0];return t}function Ke(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function Lt(e){return e.classList?Ke(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function xn(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Fa(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(xn(e[n]),'" ')},"").trim()}function gt(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function Nt(e){return e.size!==ue.size||e.x!==ue.x||e.y!==ue.y||e.rotate!==ue.rotate||e.flipX||e.flipY}function za(e){var t=e.transform,n=e.containerWidth,a=e.iconWidth,r={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(s)},f={transform:"translate(".concat(a/2*-1," -256)")};return{outer:r,inner:l,path:f}}function $a(e){var t=e.transform,n=e.width,a=n===void 0?_:n,r=e.height,i=r===void 0?_:r,o=e.startCentered,s=o===void 0?!1:o,l="";return s&&y?l+="translate(".concat(t.x/Pe-a/2,"em, ").concat(t.y/Pe-i/2,"em) "):s?l+="translate(calc(-50% + ".concat(t.x/Pe,"em), calc(-50% + ").concat(t.y/Pe,"em)) "):l+="translate(".concat(t.x/Pe,"em, ").concat(t.y/Pe,"em) "),l+="scale(".concat(t.size/Pe*(t.flipX?-1:1),", ").concat(t.size/Pe*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var Ba=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function wn(){var e=Q,t=Ye,n=b.cssPrefix,a=b.replacementClass,r=Ba;if(n!==e||a!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");r=r.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(a))}return r}var On=!1;function Rt(){b.autoAddCss&&!On&&(ja(wn()),On=!0)}var Ua={mixout:function(){return{dom:{css:wn,insertCss:Rt}}},hooks:function(){return{beforeDOMElementCreation:function(){Rt()},beforeI2svg:function(){Rt()}}}},ge=re||{};ge[K]||(ge[K]={}),ge[K].styles||(ge[K].styles={}),ge[K].hooks||(ge[K].hooks={}),ge[K].shims||(ge[K].shims=[]);var oe=ge[K],kn=[],Wa=function e(){I.removeEventListener("DOMContentLoaded",e),ht=1,kn.map(function(t){return t()})},ht=!1;Z&&(ht=(I.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(I.readyState),ht||I.addEventListener("DOMContentLoaded",Wa));function _a(e){!Z||(ht?setTimeout(e,0):kn.push(e))}function ut(e){var t=e.tag,n=e.attributes,a=n===void 0?{}:n,r=e.children,i=r===void 0?[]:r;return typeof e=="string"?xn(e):"<".concat(t," ").concat(Fa(a),">").concat(i.map(ut).join(""),"</").concat(t,">")}function En(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var Ya=function(t,n){return function(a,r,i,o){return t.call(n,a,r,i,o)}},jt=function(t,n,a,r){var i=Object.keys(t),o=i.length,s=r!==void 0?Ya(n,r):n,l,f,u;for(a===void 0?(l=1,u=t[i[0]]):(l=0,u=a);l<o;l++)f=i[l],u=s(u,t[f],f,t);return u};function Ha(e){for(var t=[],n=0,a=e.length;n<a;){var r=e.charCodeAt(n++);if(r>=55296&&r<=56319&&n<a){var i=e.charCodeAt(n++);(i&64512)==56320?t.push(((r&1023)<<10)+(i&1023)+65536):(t.push(r),n--)}else t.push(r)}return t}function Dt(e){var t=Ha(e);return t.length===1?t[0].toString(16):null}function Za(e,t){var n=e.length,a=e.charCodeAt(t),r;return a>=55296&&a<=56319&&n>t+1&&(r=e.charCodeAt(t+1),r>=56320&&r<=57343)?(a-55296)*1024+r-56320+65536:a}function Pn(e){return Object.keys(e).reduce(function(t,n){var a=e[n],r=!!a.icon;return r?t[a.iconName]=a.icon:t[n]=a,t},{})}function Ft(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},a=n.skipHooks,r=a===void 0?!1:a,i=Pn(t);typeof oe.hooks.addPack=="function"&&!r?oe.hooks.addPack(e,Pn(t)):oe.styles[e]=m(m({},oe.styles[e]||{}),i),e==="fas"&&Ft("fa",t)}var Vi=[V(/path d="((?:(?!")[\s\S])+)".*path d="((?:(?!")[\s\S])+)"/,{d1:1,d2:2}),V(/path class="((?:(?!")[\s\S])+)".*d="((?:(?!")[\s\S])+)".*path class="((?:(?!")[\s\S])+)".*d="((?:(?!")[\s\S])+)"/,{cls1:1,d1:2,cls2:3,d2:4}),V(/path class="((?:(?!")[\s\S])+)".*d="((?:(?!")[\s\S])+)"/,{cls1:1,d1:2})],yt,xt,wt,Ge=oe.styles,Ka=oe.shims,Ga=(yt={},N(yt,R,Object.values(ot[R])),N(yt,D,Object.values(ot[D])),yt),zt=null,An={},Sn={},Cn={},In={},Tn={},Xa=(xt={},N(xt,R,Object.keys(rt[R])),N(xt,D,Object.keys(rt[D])),xt);function Va(e){return~Ta.indexOf(e)}function Qa(e,t){var n=t.split("-"),a=n[0],r=n.slice(1).join("-");return a===e&&r!==""&&!Va(r)?r:null}var Mn=function(){var t=function(i){return jt(Ge,function(o,s,l){return o[l]=jt(s,i,{}),o},{})};An=t(function(r,i,o){if(i[3]&&(r[i[3]]=o),i[2]){var s=i[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){r[l.toString(16)]=o})}return r}),Sn=t(function(r,i,o){if(r[o]=o,i[2]){var s=i[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){r[l]=o})}return r}),Tn=t(function(r,i,o){var s=i[2];return r[o]=o,s.forEach(function(l){r[l]=o}),r});var n="far"in Ge||b.autoFetchSvg,a=jt(Ka,function(r,i){var o=i[0],s=i[1],l=i[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(r.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(r.unicodes[o.toString(16)]={prefix:s,iconName:l}),r},{names:{},unicodes:{}});Cn=a.names,In=a.unicodes,zt=Ot(b.styleDefault,{family:b.familyDefault})};Ra(function(e){zt=Ot(e.styleDefault,{family:b.familyDefault})}),Mn();function $t(e,t){return(An[e]||{})[t]}function Ja(e,t){return(Sn[e]||{})[t]}function ze(e,t){return(Tn[e]||{})[t]}function Ln(e){return Cn[e]||{prefix:null,iconName:null}}function qa(e){var t=In[e],n=$t("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Ae(){return zt}var Bt=function(){return{prefix:null,iconName:null,rest:[]}};function Ot(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,a=n===void 0?R:n,r=rt[a][e],i=it[a][e]||it[a][r],o=e in oe.styles?e:null;return i||o||null}var Nn=(wt={},N(wt,R,Object.keys(ot[R])),N(wt,D,Object.keys(ot[D])),wt);function kt(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=n.skipLookups,r=a===void 0?!1:a,i=(t={},N(t,R,"".concat(b.cssPrefix,"-").concat(R)),N(t,D,"".concat(b.cssPrefix,"-").concat(D)),t),o=null,s=R;(e.includes(i[R])||e.some(function(f){return Nn[R].includes(f)}))&&(s=R),(e.includes(i[D])||e.some(function(f){return Nn[D].includes(f)}))&&(s=D);var l=e.reduce(function(f,u){var p=Qa(b.cssPrefix,u);if(Ge[u]?(u=Ga[s].includes(u)?Ea[s][u]:u,o=u,f.prefix=u):Xa[s].indexOf(u)>-1?(o=u,f.prefix=Ot(u,{family:s})):p?f.iconName=p:u!==b.replacementClass&&u!==i[R]&&u!==i[D]&&f.rest.push(u),!r&&f.prefix&&f.iconName){var w=o==="fa"?Ln(f.iconName):{},k=ze(f.prefix,f.iconName);w.prefix&&(o=null),f.iconName=w.iconName||k||f.iconName,f.prefix=w.prefix||f.prefix,f.prefix==="far"&&!Ge.far&&Ge.fas&&!b.autoFetchSvg&&(f.prefix="fas")}return f},Bt());return(e.includes("fa-brands")||e.includes("fab"))&&(l.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(l.prefix="fad"),!l.prefix&&s===D&&(Ge.fass||b.autoFetchSvg)&&(l.prefix="fass",l.iconName=ze(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=Ae()||"fas"),l}var er=function(){function e(){me(this,e),this.definitions={}}return Te(e,[{key:"add",value:function(){for(var n=this,a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];var o=r.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=m(m({},n.definitions[s]||{}),o[s]),Ft(s,o[s]);var l=ot[R][s];l&&Ft(l,o[s]),Mn()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,a){var r=a.prefix&&a.iconName&&a.icon?{0:a}:a;return Object.keys(r).map(function(i){var o=r[i],s=o.prefix,l=o.iconName,f=o.icon,u=f[2];n[s]||(n[s]={}),u.length>0&&u.forEach(function(p){typeof p=="string"&&(n[s][p]=f)}),n[s][l]=f}),n}}]),e}(),Rn=[],Xe={},Ve={},tr=Object.keys(Ve);function nr(e,t){var n=t.mixoutsTo;return Rn=e,Xe={},Object.keys(Ve).forEach(function(a){tr.indexOf(a)===-1&&delete Ve[a]}),Rn.forEach(function(a){var r=a.mixout?a.mixout():{};if(Object.keys(r).forEach(function(o){typeof r[o]=="function"&&(n[o]=r[o]),X(r[o])==="object"&&Object.keys(r[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=r[o][s]})}),a.hooks){var i=a.hooks();Object.keys(i).forEach(function(o){Xe[o]||(Xe[o]=[]),Xe[o].push(i[o])})}a.provides&&a.provides(Ve)}),n}function Ut(e,t){for(var n=arguments.length,a=new Array(n>2?n-2:0),r=2;r<n;r++)a[r-2]=arguments[r];var i=Xe[e]||[];return i.forEach(function(o){t=o.apply(null,[t].concat(a))}),t}function $e(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),a=1;a<t;a++)n[a-1]=arguments[a];var r=Xe[e]||[];r.forEach(function(i){i.apply(null,n)})}function he(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return Ve[e]?Ve[e].apply(null,t):void 0}function Wt(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||Ae();if(!!t)return t=ze(n,t)||t,En(jn.definitions,n,t)||En(oe.styles,n,t)}var jn=new er,ar=function(){b.autoReplaceSvg=!1,b.observeMutations=!1,$e("noAuto")},rr={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Z?($e("beforeI2svg",t),he("pseudoElements2svg",t),he("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;b.autoReplaceSvg===!1&&(b.autoReplaceSvg=!0),b.observeMutations=!0,_a(function(){or({autoReplaceSvgRoot:n}),$e("watch",t)})}},ir={icon:function(t){if(t===null)return null;if(X(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:ze(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],a=Ot(t[0]);return{prefix:a,iconName:ze(a,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(b.cssPrefix,"-"))>-1||t.match(Pa))){var r=kt(t.split(" "),{skipLookups:!0});return{prefix:r.prefix||Ae(),iconName:ze(r.prefix,r.iconName)||r.iconName}}if(typeof t=="string"){var i=Ae();return{prefix:i,iconName:ze(i,t)||t}}}},J={noAuto:ar,config:b,dom:rr,parse:ir,library:jn,findIconDefinition:Wt,toHtml:ut},or=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,a=n===void 0?I:n;(Object.keys(oe.styles).length>0||b.autoFetchSvg)&&Z&&b.autoReplaceSvg&&J.dom.i2svg({node:a})};function Et(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(a){return ut(a)})}}),Object.defineProperty(e,"node",{get:function(){if(!!Z){var a=I.createElement("div");return a.innerHTML=e.html,a.children}}}),e}function sr(e){var t=e.children,n=e.main,a=e.mask,r=e.attributes,i=e.styles,o=e.transform;if(Nt(o)&&n.found&&!a.found){var s=n.width,l=n.height,f={x:s/l/2,y:.5};r.style=gt(m(m({},i),{},{"transform-origin":"".concat(f.x+o.x/16,"em ").concat(f.y+o.y/16,"em")}))}return[{tag:"svg",attributes:r,children:t}]}function lr(e){var t=e.prefix,n=e.iconName,a=e.children,r=e.attributes,i=e.symbol,o=i===!0?"".concat(t,"-").concat(b.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:m(m({},r),{},{id:o}),children:a}]}]}function _t(e){var t=e.icons,n=t.main,a=t.mask,r=e.prefix,i=e.iconName,o=e.transform,s=e.symbol,l=e.title,f=e.maskId,u=e.titleId,p=e.extra,w=e.watchable,k=w===void 0?!1:w,j=a.found?a:n,F=j.width,M=j.height,U=r==="fak",L=[b.replacementClass,i?"".concat(b.cssPrefix,"-").concat(i):""].filter(function(de){return p.classes.indexOf(de)===-1}).filter(function(de){return de!==""||!!de}).concat(p.classes).join(" "),z={children:[],attributes:m(m({},p.attributes),{},{"data-prefix":r,"data-icon":i,class:L,role:p.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(F," ").concat(M)})},Y=U&&!~p.classes.indexOf("fa-fw")?{width:"".concat(F/M*16*.0625,"em")}:{};k&&(z.attributes[ie]=""),l&&(z.children.push({tag:"title",attributes:{id:z.attributes["aria-labelledby"]||"title-".concat(u||ct())},children:[l]}),delete z.attributes.title);var B=m(m({},z),{},{prefix:r,iconName:i,main:n,mask:a,maskId:f,transform:o,symbol:s,styles:m(m({},Y),p.styles)}),ee=a.found&&n.found?he("generateAbstractMask",B)||{children:[],attributes:{}}:he("generateAbstractIcon",B)||{children:[],attributes:{}},ye=ee.children,qe=ee.attributes;return B.children=ye,B.attributes=qe,s?lr(B):sr(B)}function Dn(e){var t=e.content,n=e.width,a=e.height,r=e.transform,i=e.title,o=e.extra,s=e.watchable,l=s===void 0?!1:s,f=m(m(m({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});l&&(f[ie]="");var u=m({},o.styles);Nt(r)&&(u.transform=$a({transform:r,startCentered:!0,width:n,height:a}),u["-webkit-transform"]=u.transform);var p=gt(u);p.length>0&&(f.style=p);var w=[];return w.push({tag:"span",attributes:f,children:[t]}),i&&w.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),w}function fr(e){var t=e.content,n=e.title,a=e.extra,r=m(m(m({},a.attributes),n?{title:n}:{}),{},{class:a.classes.join(" ")}),i=gt(a.styles);i.length>0&&(r.style=i);var o=[];return o.push({tag:"span",attributes:r,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var Yt=oe.styles;function Ht(e){var t=e[0],n=e[1],a=e.slice(4),r=H(a,1),i=r[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(b.cssPrefix,"-").concat(Fe.GROUP)},children:[{tag:"path",attributes:{class:"".concat(b.cssPrefix,"-").concat(Fe.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(b.cssPrefix,"-").concat(Fe.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:n,icon:o}}var cr={found:!1,width:512,height:512};function ur(e,t){!bn&&!b.showMissingIcons&&e&&G.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function Zt(e,t){var n=t;return t==="fa"&&b.styleDefault!==null&&(t=Ae()),new Promise(function(a,r){var i={found:!1,width:512,height:512,icon:he("missingIconAbstract")||{}};if(n==="fa"){var o=Ln(e)||{};e=o.iconName||e,t=o.prefix||t}if(e&&t&&Yt[t]&&Yt[t][e]){var s=Yt[t][e];return a(Ht(s))}ur(e,t),a(m(m({},cr),{},{icon:b.showMissingIcons&&e?he("missingIconAbstract")||{}:{}}))})}var Fn=function(){},Kt=b.measurePerformance&&_e&&_e.mark&&_e.measure?_e:{mark:Fn,measure:Fn},dt='FA "6.2.0"',dr=function(t){return Kt.mark("".concat(dt," ").concat(t," begins")),function(){return zn(t)}},zn=function(t){Kt.mark("".concat(dt," ").concat(t," ends")),Kt.measure("".concat(dt," ").concat(t),"".concat(dt," ").concat(t," begins"),"".concat(dt," ").concat(t," ends"))},Gt={begin:dr,end:zn},Pt=function(){};function $n(e){var t=e.getAttribute?e.getAttribute(ie):null;return typeof t=="string"}function mr(e){var t=e.getAttribute?e.getAttribute(be):null,n=e.getAttribute?e.getAttribute(je):null;return t&&n}function vr(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(b.replacementClass)}function pr(){if(b.autoReplaceSvg===!0)return At.replace;var e=At[b.autoReplaceSvg];return e||At.replace}function br(e){return I.createElementNS("http://www.w3.org/2000/svg",e)}function gr(e){return I.createElement(e)}function Bn(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,a=n===void 0?e.tag==="svg"?br:gr:n;if(typeof e=="string")return I.createTextNode(e);var r=a(e.tag);Object.keys(e.attributes||[]).forEach(function(o){r.setAttribute(o,e.attributes[o])});var i=e.children||[];return i.forEach(function(o){r.appendChild(Bn(o,{ceFn:a}))}),r}function hr(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var At={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(r){n.parentNode.insertBefore(Bn(r),n)}),n.getAttribute(ie)===null&&b.keepOriginalSource){var a=I.createComment(hr(n));n.parentNode.replaceChild(a,n)}else n.remove()},nest:function(t){var n=t[0],a=t[1];if(~Lt(n).indexOf(b.replacementClass))return At.replace(t);var r=new RegExp("".concat(b.cssPrefix,"-.*"));if(delete a[0].attributes.id,a[0].attributes.class){var i=a[0].attributes.class.split(" ").reduce(function(s,l){return l===b.replacementClass||l.match(r)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});a[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=a.map(function(s){return ut(s)}).join(`
`);n.setAttribute(ie,""),n.innerHTML=o}};function Un(e){e()}function Wn(e,t){var n=typeof t=="function"?t:Pt;if(e.length===0)n();else{var a=Un;b.mutateApproach===Tt&&(a=re.requestAnimationFrame||Un),a(function(){var r=pr(),i=Gt.begin("mutate");e.map(r),i(),n()})}}var Xt=!1;function _n(){Xt=!0}function Vt(){Xt=!1}var St=null;function Yn(e){if(!!bt&&!!b.observeMutations){var t=e.treeCallback,n=t===void 0?Pt:t,a=e.nodeCallback,r=a===void 0?Pt:a,i=e.pseudoElementsCallback,o=i===void 0?Pt:i,s=e.observeMutationsRoot,l=s===void 0?I:s;St=new bt(function(f){if(!Xt){var u=Ae();Ke(f).forEach(function(p){if(p.type==="childList"&&p.addedNodes.length>0&&!$n(p.addedNodes[0])&&(b.searchPseudoElements&&o(p.target),n(p.target)),p.type==="attributes"&&p.target.parentNode&&b.searchPseudoElements&&o(p.target.parentNode),p.type==="attributes"&&$n(p.target)&&~Ia.indexOf(p.attributeName))if(p.attributeName==="class"&&mr(p.target)){var w=kt(Lt(p.target)),k=w.prefix,j=w.iconName;p.target.setAttribute(be,k||u),j&&p.target.setAttribute(je,j)}else vr(p.target)&&r(p.target)})}}),Z&&St.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function yr(){!St||St.disconnect()}function xr(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(a,r){var i=r.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(a[o]=s.join(":").trim()),a},{})),n}function wr(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),a=e.innerText!==void 0?e.innerText.trim():"",r=kt(Lt(e));return r.prefix||(r.prefix=Ae()),t&&n&&(r.prefix=t,r.iconName=n),r.iconName&&r.prefix||(r.prefix&&a.length>0&&(r.iconName=Ja(r.prefix,e.innerText)||$t(r.prefix,Dt(e.innerText))),!r.iconName&&b.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=e.firstChild.data)),r}function Or(e){var t=Ke(e.attributes).reduce(function(r,i){return r.name!=="class"&&r.name!=="style"&&(r[i.name]=i.value),r},{}),n=e.getAttribute("title"),a=e.getAttribute("data-fa-title-id");return b.autoA11y&&(n?t["aria-labelledby"]="".concat(b.replacementClass,"-title-").concat(a||ct()):(t["aria-hidden"]="true",t.focusable="false")),t}function kr(){return{iconName:null,title:null,titleId:null,prefix:null,transform:ue,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Hn(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=wr(e),a=n.iconName,r=n.prefix,i=n.rest,o=Or(e),s=Ut("parseNodeAttributes",{},e),l=t.styleParser?xr(e):[];return m({iconName:a,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:r,transform:ue,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:o}},s)}var Er=oe.styles;function Zn(e){var t=b.autoReplaceSvg==="nest"?Hn(e,{styleParser:!1}):Hn(e);return~t.extra.classes.indexOf(gn)?he("generateLayersText",e,t):he("generateSvgReplacementMutation",e,t)}var Se=new Set;Mt.map(function(e){Se.add("fa-".concat(e))}),Object.keys(rt[R]).map(Se.add.bind(Se)),Object.keys(rt[D]).map(Se.add.bind(Se)),Se=g(Se);function Kn(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Z)return Promise.resolve();var n=I.documentElement.classList,a=function(p){return n.add("".concat(De,"-").concat(p))},r=function(p){return n.remove("".concat(De,"-").concat(p))},i=b.autoFetchSvg?Se:Mt.map(function(u){return"fa-".concat(u)}).concat(Object.keys(Er));i.includes("fa")||i.push("fa");var o=[".".concat(gn,":not([").concat(ie,"])")].concat(i.map(function(u){return".".concat(u,":not([").concat(ie,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=Ke(e.querySelectorAll(o))}catch(u){}if(s.length>0)a("pending"),r("complete");else return Promise.resolve();var l=Gt.begin("onTree"),f=s.reduce(function(u,p){try{var w=Zn(p);w&&u.push(w)}catch(k){bn||k.name==="MissingIcon"&&G.error(k)}return u},[]);return new Promise(function(u,p){Promise.all(f).then(function(w){Wn(w,function(){a("active"),a("complete"),r("pending"),typeof t=="function"&&t(),l(),u()})}).catch(function(w){l(),p(w)})})}function Pr(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Zn(e).then(function(n){n&&Wn([n],t)})}function Ar(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=(t||{}).icon?t:Wt(t||{}),r=n.mask;return r&&(r=(r||{}).icon?r:Wt(r||{})),e(a,m(m({},n),{},{mask:r}))}}var Sr=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=n.transform,r=a===void 0?ue:a,i=n.symbol,o=i===void 0?!1:i,s=n.mask,l=s===void 0?null:s,f=n.maskId,u=f===void 0?null:f,p=n.title,w=p===void 0?null:p,k=n.titleId,j=k===void 0?null:k,F=n.classes,M=F===void 0?[]:F,U=n.attributes,L=U===void 0?{}:U,z=n.styles,Y=z===void 0?{}:z;if(!!t){var B=t.prefix,ee=t.iconName,ye=t.icon;return Et(m({type:"icon"},t),function(){return $e("beforeDOMElementCreation",{iconDefinition:t,params:n}),b.autoA11y&&(w?L["aria-labelledby"]="".concat(b.replacementClass,"-title-").concat(j||ct()):(L["aria-hidden"]="true",L.focusable="false")),_t({icons:{main:Ht(ye),mask:l?Ht(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:B,iconName:ee,transform:m(m({},ue),r),symbol:o,title:w,maskId:u,titleId:j,extra:{attributes:L,styles:Y,classes:M}})})}},Cr={mixout:function(){return{icon:Ar(Sr)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=Kn,n.nodeCallback=Pr,n}}},provides:function(t){t.i2svg=function(n){var a=n.node,r=a===void 0?I:a,i=n.callback,o=i===void 0?function(){}:i;return Kn(r,o)},t.generateSvgReplacementMutation=function(n,a){var r=a.iconName,i=a.title,o=a.titleId,s=a.prefix,l=a.transform,f=a.symbol,u=a.mask,p=a.maskId,w=a.extra;return new Promise(function(k,j){Promise.all([Zt(r,s),u.iconName?Zt(u.iconName,u.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(F){var M=H(F,2),U=M[0],L=M[1];k([n,_t({icons:{main:U,mask:L},prefix:s,iconName:r,transform:l,symbol:f,maskId:p,title:i,titleId:o,extra:w,watchable:!0})])}).catch(j)})},t.generateAbstractIcon=function(n){var a=n.children,r=n.attributes,i=n.main,o=n.transform,s=n.styles,l=gt(s);l.length>0&&(r.style=l);var f;return Nt(o)&&(f=he("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),a.push(f||i.icon),{children:a,attributes:r}}}},Ir={mixout:function(){return{layer:function(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.classes,i=r===void 0?[]:r;return Et({type:"layer"},function(){$e("beforeDOMElementCreation",{assembler:n,params:a});var o=[];return n(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(b.cssPrefix,"-layers")].concat(g(i)).join(" ")},children:o}]})}}}},Tr={mixout:function(){return{counter:function(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.title,i=r===void 0?null:r,o=a.classes,s=o===void 0?[]:o,l=a.attributes,f=l===void 0?{}:l,u=a.styles,p=u===void 0?{}:u;return Et({type:"counter",content:n},function(){return $e("beforeDOMElementCreation",{content:n,params:a}),fr({content:n.toString(),title:i,extra:{attributes:f,styles:p,classes:["".concat(b.cssPrefix,"-layers-counter")].concat(g(s))}})})}}}},Mr={mixout:function(){return{text:function(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.transform,i=r===void 0?ue:r,o=a.title,s=o===void 0?null:o,l=a.classes,f=l===void 0?[]:l,u=a.attributes,p=u===void 0?{}:u,w=a.styles,k=w===void 0?{}:w;return Et({type:"text",content:n},function(){return $e("beforeDOMElementCreation",{content:n,params:a}),Dn({content:n,transform:m(m({},ue),i),title:s,extra:{attributes:p,styles:k,classes:["".concat(b.cssPrefix,"-layers-text")].concat(g(f))}})})}}},provides:function(t){t.generateLayersText=function(n,a){var r=a.title,i=a.transform,o=a.extra,s=null,l=null;if(y){var f=parseInt(getComputedStyle(n).fontSize,10),u=n.getBoundingClientRect();s=u.width/f,l=u.height/f}return b.autoA11y&&!r&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,Dn({content:n.innerHTML,width:s,height:l,transform:i,title:r,extra:o,watchable:!0})])}}},Lr=new RegExp('"',"ug"),Gn=[1105920,1112319];function Nr(e){var t=e.replace(Lr,""),n=Za(t,0),a=n>=Gn[0]&&n<=Gn[1],r=t.length===2?t[0]===t[1]:!1;return{value:Dt(r?t[0]:t),isSecondary:a||r}}function Xn(e,t){var n="".concat(He).concat(t.replace(":","-"));return new Promise(function(a,r){if(e.getAttribute(n)!==null)return a();var i=Ke(e.children),o=i.filter(function(ye){return ye.getAttribute(Ee)===t})[0],s=re.getComputedStyle(e,t),l=s.getPropertyValue("font-family").match(Aa),f=s.getPropertyValue("font-weight"),u=s.getPropertyValue("content");if(o&&!l)return e.removeChild(o),a();if(l&&u!=="none"&&u!==""){var p=s.getPropertyValue("content"),w=~["Sharp"].indexOf(l[2])?D:R,k=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?it[w][l[2].toLowerCase()]:Sa[w][f],j=Nr(p),F=j.value,M=j.isSecondary,U=l[0].startsWith("FontAwesome"),L=$t(k,F),z=L;if(U){var Y=qa(F);Y.iconName&&Y.prefix&&(L=Y.iconName,k=Y.prefix)}if(L&&!M&&(!o||o.getAttribute(be)!==k||o.getAttribute(je)!==z)){e.setAttribute(n,z),o&&e.removeChild(o);var B=kr(),ee=B.extra;ee.attributes[Ee]=t,Zt(L,k).then(function(ye){var qe=_t(m(m({},B),{},{icons:{main:ye,mask:Bt()},prefix:k,iconName:z,extra:ee,watchable:!0})),de=I.createElement("svg");t==="::before"?e.insertBefore(de,e.firstChild):e.appendChild(de),de.outerHTML=qe.map(function(dn){return ut(dn)}).join(`
`),e.removeAttribute(n),a()}).catch(r)}else a()}else a()})}function Rr(e){return Promise.all([Xn(e,"::before"),Xn(e,"::after")])}function jr(e){return e.parentNode!==document.head&&!~nt.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Ee)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function Vn(e){if(!!Z)return new Promise(function(t,n){var a=Ke(e.querySelectorAll("*")).filter(jr).map(Rr),r=Gt.begin("searchPseudoElements");_n(),Promise.all(a).then(function(){r(),Vt(),t()}).catch(function(){r(),Vt(),n()})})}var Dr={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=Vn,n}}},provides:function(t){t.pseudoElements2svg=function(n){var a=n.node,r=a===void 0?I:a;b.searchPseudoElements&&Vn(r)}}},Qn=!1,Fr={mixout:function(){return{dom:{unwatch:function(){_n(),Qn=!0}}}},hooks:function(){return{bootstrap:function(){Yn(Ut("mutationObserverCallbacks",{}))},noAuto:function(){yr()},watch:function(n){var a=n.observeMutationsRoot;Qn?Vt():Yn(Ut("mutationObserverCallbacks",{observeMutationsRoot:a}))}}}},Jn=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(a,r){var i=r.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return a.flipX=!0,a;if(o&&s==="v")return a.flipY=!0,a;if(s=parseFloat(s),isNaN(s))return a;switch(o){case"grow":a.size=a.size+s;break;case"shrink":a.size=a.size-s;break;case"left":a.x=a.x-s;break;case"right":a.x=a.x+s;break;case"up":a.y=a.y-s;break;case"down":a.y=a.y+s;break;case"rotate":a.rotate=a.rotate+s;break}return a},n)},zr={mixout:function(){return{parse:{transform:function(n){return Jn(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,a){var r=a.getAttribute("data-fa-transform");return r&&(n.transform=Jn(r)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var a=n.main,r=n.transform,i=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(r.x*32,", ").concat(r.y*32,") "),f="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),u="rotate(".concat(r.rotate," 0 0)"),p={transform:"".concat(l," ").concat(f," ").concat(u)},w={transform:"translate(".concat(o/2*-1," -256)")},k={outer:s,inner:p,path:w};return{tag:"g",attributes:m({},k.outer),children:[{tag:"g",attributes:m({},k.inner),children:[{tag:a.icon.tag,children:a.icon.children,attributes:m(m({},a.icon.attributes),k.path)}]}]}}}},Qt={x:0,y:0,width:"100%",height:"100%"};function qn(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function $r(e){return e.tag==="g"?e.children:[e]}var Br={hooks:function(){return{parseNodeAttributes:function(n,a){var r=a.getAttribute("data-fa-mask"),i=r?kt(r.split(" ").map(function(o){return o.trim()})):Bt();return i.prefix||(i.prefix=Ae()),n.mask=i,n.maskId=a.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var a=n.children,r=n.attributes,i=n.main,o=n.mask,s=n.maskId,l=n.transform,f=i.width,u=i.icon,p=o.width,w=o.icon,k=za({transform:l,containerWidth:p,iconWidth:f}),j={tag:"rect",attributes:m(m({},Qt),{},{fill:"white"})},F=u.children?{children:u.children.map(qn)}:{},M={tag:"g",attributes:m({},k.inner),children:[qn(m({tag:u.tag,attributes:m(m({},u.attributes),k.path)},F))]},U={tag:"g",attributes:m({},k.outer),children:[M]},L="mask-".concat(s||ct()),z="clip-".concat(s||ct()),Y={tag:"mask",attributes:m(m({},Qt),{},{id:L,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[j,U]},B={tag:"defs",children:[{tag:"clipPath",attributes:{id:z},children:$r(w)},Y]};return a.push(B,{tag:"rect",attributes:m({fill:"currentColor","clip-path":"url(#".concat(z,")"),mask:"url(#".concat(L,")")},Qt)}),{children:a,attributes:r}}}},Ur={provides:function(t){var n=!1;re.matchMedia&&(n=re.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var a=[],r={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};a.push({tag:"path",attributes:m(m({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=m(m({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:m(m({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:m(m({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:m(m({},o),{},{values:"1;0;1;1;0;1;"})}),a.push(s),a.push({tag:"path",attributes:m(m({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:m(m({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||a.push({tag:"path",attributes:m(m({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:m(m({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:a}}}},Wr={hooks:function(){return{parseNodeAttributes:function(n,a){var r=a.getAttribute("data-fa-symbol"),i=r===null?!1:r===""?!0:r;return n.symbol=i,n}}}},_r=[Ua,Cr,Ir,Tr,Mr,Dr,Fr,zr,Br,Ur,Wr];nr(_r,{mixoutsTo:J});var Qi=J.noAuto,Ji=J.config,qi=J.library,eo=J.dom,Jt=J.parse,to=J.findIconDefinition,no=J.toHtml,Yr=J.icon,ao=J.layer,ro=J.text,io=J.counter,Hr=d(45697),v=d.n(Hr),qt=d(25108);function ea(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,a)}return n}function Ce(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?ea(Object(n),!0).forEach(function(a){Qe(e,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ea(Object(n)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))})}return e}function Ct(e){return Ct=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ct(e)}function Qe(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Zr(e,t){if(e==null)return{};var n={},a=Object.keys(e),r,i;for(i=0;i<a.length;i++)r=a[i],!(t.indexOf(r)>=0)&&(n[r]=e[r]);return n}function Kr(e,t){if(e==null)return{};var n=Zr(e,t),a,r;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],!(t.indexOf(a)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,a)||(n[a]=e[a]))}return n}function en(e){return Gr(e)||Xr(e)||Vr(e)||Qr()}function Gr(e){if(Array.isArray(e))return tn(e)}function Xr(e){if(typeof Symbol!="undefined"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Vr(e,t){if(!!e){if(typeof e=="string")return tn(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return tn(e,t)}}function tn(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function Qr(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Jr(e){var t,n=e.beat,a=e.fade,r=e.beatFade,i=e.bounce,o=e.shake,s=e.flash,l=e.spin,f=e.spinPulse,u=e.spinReverse,p=e.pulse,w=e.fixedWidth,k=e.inverse,j=e.border,F=e.listItem,M=e.flip,U=e.size,L=e.rotation,z=e.pull,Y=(t={"fa-beat":n,"fa-fade":a,"fa-beat-fade":r,"fa-bounce":i,"fa-shake":o,"fa-flash":s,"fa-spin":l,"fa-spin-reverse":u,"fa-spin-pulse":f,"fa-pulse":p,"fa-fw":w,"fa-inverse":k,"fa-border":j,"fa-li":F,"fa-flip":M===!0,"fa-flip-horizontal":M==="horizontal"||M==="both","fa-flip-vertical":M==="vertical"||M==="both"},Qe(t,"fa-".concat(U),typeof U!="undefined"&&U!==null),Qe(t,"fa-rotate-".concat(L),typeof L!="undefined"&&L!==null&&L!==0),Qe(t,"fa-pull-".concat(z),typeof z!="undefined"&&z!==null),Qe(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(Y).map(function(B){return Y[B]?B:null}).filter(function(B){return B})}function qr(e){return e=e-0,e===e}function ta(e){return qr(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,function(t,n){return n?n.toUpperCase():""}),e.substr(0,1).toLowerCase()+e.substr(1))}var ei=["style"];function ti(e){return e.charAt(0).toUpperCase()+e.slice(1)}function ni(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var a=n.indexOf(":"),r=ta(n.slice(0,a)),i=n.slice(a+1).trim();return r.startsWith("webkit")?t[ti(r)]=i:t[r]=i,t},{})}function na(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var a=(t.children||[]).map(function(l){return na(e,l)}),r=Object.keys(t.attributes||{}).reduce(function(l,f){var u=t.attributes[f];switch(f){case"class":l.attrs.className=u,delete t.attributes.class;break;case"style":l.attrs.style=ni(u);break;default:f.indexOf("aria-")===0||f.indexOf("data-")===0?l.attrs[f.toLowerCase()]=u:l.attrs[ta(f)]=u}return l},{attrs:{}}),i=n.style,o=i===void 0?{}:i,s=Kr(n,ei);return r.attrs.style=Ce(Ce({},r.attrs.style),o),e.apply(void 0,[t.tag,Ce(Ce({},r.attrs),s)].concat(en(a)))}var aa=!1;try{aa=!0}catch(e){}function ai(){if(!aa&&qt&&typeof qt.error=="function"){var e;(e=qt).error.apply(e,arguments)}}function ra(e){if(e&&Ct(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(Jt.icon)return Jt.icon(e);if(e===null)return null;if(e&&Ct(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}function nn(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?Qe({},e,t):{}}var mt=c.forwardRef(function(e,t){var n=e.icon,a=e.mask,r=e.symbol,i=e.className,o=e.title,s=e.titleId,l=e.maskId,f=ra(n),u=nn("classes",[].concat(en(Jr(e)),en(i.split(" ")))),p=nn("transform",typeof e.transform=="string"?Jt.transform(e.transform):e.transform),w=nn("mask",ra(a)),k=Yr(f,Ce(Ce(Ce(Ce({},u),p),w),{},{symbol:r,title:o,titleId:s,maskId:l}));if(!k)return ai("Could not find icon",f),null;var j=k.abstract,F={ref:t};return Object.keys(e).forEach(function(M){mt.defaultProps.hasOwnProperty(M)||(F[M]=e[M])}),ri(j[0],F)});mt.displayName="FontAwesomeIcon",mt.propTypes={beat:v().bool,border:v().bool,beatFade:v().bool,bounce:v().bool,className:v().string,fade:v().bool,flash:v().bool,mask:v().oneOfType([v().object,v().array,v().string]),maskId:v().string,fixedWidth:v().bool,inverse:v().bool,flip:v().oneOf([!0,!1,"horizontal","vertical","both"]),icon:v().oneOfType([v().object,v().array,v().string]),listItem:v().bool,pull:v().oneOf(["right","left"]),pulse:v().bool,rotation:v().oneOf([0,90,180,270]),shake:v().bool,size:v().oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:v().bool,spinPulse:v().bool,spinReverse:v().bool,symbol:v().oneOfType([v().bool,v().string]),title:v().string,titleId:v().string,transform:v().oneOfType([v().string,v().object]),swapOpacity:v().bool},mt.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var ri=na.bind(null,c.createElement),ii=d(17034),oi=d(67838),si=d(49066),li=d(185),fi=d(14087),ci=d(11057),ui=d(63985),ia=d(47144),Ie=d(18374),di=d(550),Je=d(72735),oa=d(63237),mi=d(12028),vi=d(4585),an=d(23724),T=d(63600),$=d(89031);const sa={id:(0,$.OB)("PopUpForm.Providers.redirectURL.front-end.label"),defaultMessage:"The redirect URL to your front-end app"},la={id:"http://www.client-app.com",defaultMessage:"http://www.client-app.com"},rn={id:(0,$.OB)("PopUpForm.Providers.enabled.description"),defaultMessage:"If disabled, users won't be able to use this provider."},on={id:(0,$.OB)("PopUpForm.Providers.enabled.label"),defaultMessage:"Enable"},fa={id:(0,$.OB)("PopUpForm.Providers.key.label"),defaultMessage:"Client ID"},ca={id:(0,$.OB)("PopUpForm.Providers.redirectURL.label"),defaultMessage:"The redirect URL to add in your {provider} application configurations"},It={id:(0,$.OB)("PopUpForm.Providers.key.placeholder"),defaultMessage:"TEXT"},ua={id:(0,$.OB)("PopUpForm.Providers.secret.label"),defaultMessage:"Client Secret"},sn={email:{form:[[{intlLabel:on,name:"enabled",type:"bool",description:rn,size:6}]],schema:T.Ry().shape({enabled:T.Xg().required(h.translatedErrors.required)})},providers:{form:[[{intlLabel:on,name:"enabled",type:"bool",description:rn,size:6,validations:{required:!0}}],[{intlLabel:fa,name:"key",type:"text",placeholder:It,size:12,validations:{required:!0}}],[{intlLabel:ua,name:"secret",type:"text",placeholder:It,size:12,validations:{required:!0}}],[{intlLabel:sa,placeholder:la,name:"callback",type:"text",size:12,validations:{required:!0}}],[{intlLabel:ca,name:"noName",type:"text",validations:{},size:12,disabled:!0}]],schema:T.Ry().shape({enabled:T.Xg().required(h.translatedErrors.required),key:T.Z_().when("enabled",{is:!0,then:T.Z_().required(h.translatedErrors.required),otherwise:T.Z_()}),secret:T.Z_().when("enabled",{is:!0,then:T.Z_().required(h.translatedErrors.required),otherwise:T.Z_()}),callback:T.Z_().when("enabled",{is:!0,then:T.Z_().required(h.translatedErrors.required),otherwise:T.Z_()})})},providersWithSubdomain:{form:[[{intlLabel:on,name:"enabled",type:"bool",description:rn,size:6,validations:{required:!0}}],[{intlLabel:fa,name:"key",type:"text",placeholder:It,size:12,validations:{required:!0}}],[{intlLabel:ua,name:"secret",type:"text",placeholder:It,size:12,validations:{required:!0}}],[{intlLabel:{id:(0,$.OB)("PopUpForm.Providers.subdomain.label"),defaultMessage:"Host URI (Subdomain)"},name:"subdomain",type:"text",placeholder:{id:(0,$.OB)("PopUpForm.Providers.subdomain.placeholder"),defaultMessage:"my.subdomain.com"},size:12,validations:{required:!0}}],[{intlLabel:sa,placeholder:la,name:"callback",type:"text",size:12,validations:{required:!0}}],[{intlLabel:ca,name:"noName",type:"text",validations:{},size:12,disabled:!0}]],schema:T.Ry().shape({enabled:T.Xg().required(h.translatedErrors.required),key:T.Z_().when("enabled",{is:!0,then:T.Z_().required(h.translatedErrors.required),otherwise:T.Z_()}),secret:T.Z_().when("enabled",{is:!0,then:T.Z_().required(h.translatedErrors.required),otherwise:T.Z_()}),subdomain:T.Z_().when("enabled",{is:!0,then:T.Z_().required(h.translatedErrors.required),otherwise:T.Z_()}),callback:T.Z_().when("enabled",{is:!0,then:T.Z_().required(h.translatedErrors.required),otherwise:T.Z_()})})}};var pi=(e,t,n)=>new Promise((a,r)=>{var i=l=>{try{s(n.next(l))}catch(f){r(f)}},o=l=>{try{s(n.throw(l))}catch(f){r(f)}},s=l=>l.done?a(l.value):Promise.resolve(l.value).then(i,o);s((n=n.apply(e,t)).next())});const bi=e=>pi(void 0,null,function*(){try{const{data:t}=yield $.be.get((0,$.Gc)("providers"));return t}catch(t){throw e({type:"warning",message:{id:"notification.error"}}),new Error("error")}}),gi=e=>$.be.put((0,$.Gc)("providers"),e);var hi=d(96486);const yi=e=>(0,hi.sortBy)(Object.keys(e).reduce((t,n)=>{const{icon:a,enabled:r,subdomain:i}=e[n],o=a==="envelope"?["fas","envelope"]:["fab",a];return i!==void 0?t.push({name:n,icon:o,enabled:r,subdomain:i}):t.push({name:n,icon:o,enabled:r}),t},[]),"name");var da=d(81912),ma=d(29728),xi=d(7681),va=d(2407),wi=d(11276),Oi=d(74571),ki=d(42866),Ei=d(24969),Pi=d(59946),Ai=d(36856),Si=d(80831),Ci=d(20707),Ii=d(16364),Ti=Object.defineProperty,pa=Object.getOwnPropertySymbols,Mi=Object.prototype.hasOwnProperty,Li=Object.prototype.propertyIsEnumerable,ba=(e,t,n)=>t in e?Ti(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,ln=(e,t)=>{for(var n in t||(t={}))Mi.call(t,n)&&ba(e,n,t[n]);if(pa)for(var n of pa(t))Li.call(t,n)&&ba(e,n,t[n]);return e};const fn=({description:e,disabled:t,intlLabel:n,error:a,name:r,onChange:i,placeholder:o,providerToEditName:s,type:l,value:f})=>{const{formatMessage:u}=(0,C.useIntl)(),p=r==="noName"?`${strapi.backendURL}/api/connect/${s}/callback`:f,w=u({id:n.id,defaultMessage:n.defaultMessage},ln({provider:s},n.values)),k=e?u({id:e.id,defaultMessage:e.defaultMessage},ln({provider:s},e.values)):"";if(l==="bool")return c.createElement(Ci.s,{"aria-label":r,checked:f,disabled:t,hint:k,label:w,name:r,offLabel:u({id:"app.components.ToggleCheckbox.off-label",defaultMessage:"Off"}),onLabel:u({id:"app.components.ToggleCheckbox.on-label",defaultMessage:"On"}),onChange:M=>{i({target:{name:r,value:M.target.checked}})}});const j=o?u({id:o.id,defaultMessage:o.defaultMessage},ln({},o.values)):"",F=a?u({id:a,defaultMessage:a}):"";return c.createElement(Ii.o,{"aria-label":r,disabled:t,error:F,label:w,name:r,onChange:i,placeholder:j,type:l,value:p})};fn.defaultProps={description:null,disabled:!1,error:"",placeholder:null,value:""},fn.propTypes={description:v().shape({id:v().string.isRequired,defaultMessage:v().string.isRequired,values:v().object}),disabled:v().bool,error:v().string,intlLabel:v().shape({id:v().string.isRequired,defaultMessage:v().string.isRequired,values:v().object}).isRequired,name:v().string.isRequired,onChange:v().func.isRequired,placeholder:v().shape({id:v().string.isRequired,defaultMessage:v().string.isRequired,values:v().object}),providerToEditName:v().string.isRequired,type:v().string.isRequired,value:v().oneOfType([v().bool,v().string])};const Ni=fn;var Ri=Object.defineProperty,ji=Object.defineProperties,Di=Object.getOwnPropertyDescriptors,ga=Object.getOwnPropertySymbols,Fi=Object.prototype.hasOwnProperty,zi=Object.prototype.propertyIsEnumerable,ha=(e,t,n)=>t in e?Ri(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,$i=(e,t)=>{for(var n in t||(t={}))Fi.call(t,n)&&ha(e,n,t[n]);if(ga)for(var n of ga(t))zi.call(t,n)&&ha(e,n,t[n]);return e},Bi=(e,t)=>ji(e,Di(t));const cn=({headerBreadcrumbs:e,initialData:t,isSubmiting:n,layout:a,isOpen:r,onSubmit:i,onToggle:o,providerToEditName:s})=>{const{formatMessage:l}=(0,C.useIntl)();return r?c.createElement(ki.P,{onClose:o,labelledBy:"title"},c.createElement(Ei.x,null,c.createElement(va.O,{label:e.join(", ")},e.map(f=>c.createElement(va.$,{key:f},f)))),c.createElement(Si.Formik,{onSubmit:f=>i(f),initialValues:t,validationSchema:a.schema,validateOnChange:!1},({errors:f,handleChange:u,values:p})=>c.createElement(h.Form,null,c.createElement(Pi.f,null,c.createElement(xi.K,{spacing:1},c.createElement(wi.r,{gap:5},a.form.map(w=>w.map(k=>c.createElement(Oi.P,{key:k.name,col:k.size,xs:12},c.createElement(Ni,Bi($i({},k),{error:f[k.name],onChange:u,value:p[k.name],providerToEditName:s})))))))),c.createElement(Ai.m,{startActions:c.createElement(ma.z,{variant:"tertiary",onClick:o,type:"button"},l({id:"app.components.Button.cancel",defaultMessage:"Cancel"})),endActions:c.createElement(ma.z,{type:"submit",loading:n},l({id:"global.save",defaultMessage:"Save"}))})))):null};cn.defaultProps={initialData:null,providerToEditName:null},cn.propTypes={headerBreadcrumbs:v().arrayOf(v().string).isRequired,initialData:v().object,layout:v().shape({form:v().arrayOf(v().array),schema:v().object}).isRequired,isOpen:v().bool.isRequired,isSubmiting:v().bool.isRequired,onSubmit:v().func.isRequired,onToggle:v().func.isRequired,providerToEditName:v().string};const Ui=cn;var Wi=Object.defineProperty,_i=Object.defineProperties,Yi=Object.getOwnPropertyDescriptors,ya=Object.getOwnPropertySymbols,Hi=Object.prototype.hasOwnProperty,Zi=Object.prototype.propertyIsEnumerable,xa=(e,t,n)=>t in e?Wi(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,un=(e,t)=>{for(var n in t||(t={}))Hi.call(t,n)&&xa(e,n,t[n]);if(ya)for(var n of ya(t))Zi.call(t,n)&&xa(e,n,t[n]);return e},Ki=(e,t)=>_i(e,Yi(t)),wa=(e,t,n)=>new Promise((a,r)=>{var i=l=>{try{s(n.next(l))}catch(f){r(f)}},o=l=>{try{s(n.throw(l))}catch(f){r(f)}},s=l=>l.done?a(l.value):Promise.resolve(l.value).then(i,o);s((n=n.apply(e,t)).next())});const Oa=()=>{const{formatMessage:e}=(0,C.useIntl)();(0,h.useFocusWhenNavigate)();const{notifyStatus:t}=(0,fi.G)(),n=(0,an.useQueryClient)(),{trackUsage:a}=(0,h.useTracking)(),r=(0,c.useRef)(a),[i,o]=(0,c.useState)(!1),[s,l]=(0,c.useState)(!1),[f,u]=(0,c.useState)(null),p=(0,h.useNotification)(),{lockApp:w,unlockApp:k}=(0,h.useOverlayBlocker)(),j=(0,c.useMemo)(()=>({update:da.Z.updateProviders}),[]),{isLoading:F,allowedActions:{canUpdate:M}}=(0,h.useRBAC)(j),{isLoading:U,data:L,isFetching:z}=(0,an.useQuery)("get-providers",()=>bi(p),{onSuccess(){t(e({id:(0,$.OB)("Providers.data.loaded"),defaultMessage:"Providers have been loaded"}))},initialData:{}}),Y=U||z,B=(0,an.useMutation)(gi,{onSuccess(){return wa(this,null,function*(){yield n.invalidateQueries("get-providers"),p({type:"info",message:{id:(0,$.OB)("notification.success.submit")}}),r.current("didEditAuthenticationProvider"),l(!1),mn(),k()})},onError(){p({type:"warning",message:{id:"notification.error"}}),k(),l(!1)},refetchActive:!1}),ee=(0,c.useMemo)(()=>yi(L),[L]),ye=ee.length,qe=(0,c.useMemo)(()=>{if(!f)return!1;const W=ee.find(vn=>vn.name===f);return ne()(W,"subdomain")},[ee,f]),de=e({id:(0,$.OB)("HeaderNav.link.providers"),defaultMessage:"Providers"}),dn=(0,c.useMemo)(()=>f==="email"?sn.email:qe?sn.providersWithSubdomain:sn.providers,[f,qe]),mn=()=>{o(W=>!W)},ka=W=>{M&&(u(W.name),mn())},Xi=W=>wa(void 0,null,function*(){l(!0),w(),r.current("willEditAuthenticationProvider");const vn=Ki(un({},L),{[f]:W});B.mutate({providers:vn})});return c.createElement(ii.A,null,c.createElement(h.SettingsPageTitle,{name:de}),c.createElement(li.o,null,c.createElement(oi.T,{title:e({id:(0,$.OB)("HeaderNav.link.providers"),defaultMessage:"Providers"})}),Y||F?c.createElement(h.LoadingIndicatorPage,null):c.createElement(si.D,null,c.createElement(ci.i,{colCount:4,rowCount:ye+1},c.createElement(ui.h,null,c.createElement(ia.Tr,null,c.createElement(Ie.Th,null,c.createElement(Je.Z,{variant:"sigma",textColor:"neutral600"},c.createElement(oa.T,null,e({id:(0,$.OB)("Providers.image"),defaultMessage:"Image"})))),c.createElement(Ie.Th,null,c.createElement(Je.Z,{variant:"sigma",textColor:"neutral600"},e({id:"global.name",defaultMessage:"Name"}))),c.createElement(Ie.Th,null,c.createElement(Je.Z,{variant:"sigma",textColor:"neutral600"},e({id:(0,$.OB)("Providers.status"),defaultMessage:"Status"}))),c.createElement(Ie.Th,null,c.createElement(Je.Z,{variant:"sigma"},c.createElement(oa.T,null,e({id:"global.settings",defaultMessage:"Settings"})))))),c.createElement(di.p,null,ee.map(W=>c.createElement(ia.Tr,un({key:W.name},(0,h.onRowClick)({fn:()=>ka(W),condition:M})),c.createElement(Ie.Td,{width:""},c.createElement(mt,{icon:W.icon})),c.createElement(Ie.Td,{width:"45%"},c.createElement(Je.Z,{fontWeight:"semiBold",textColor:"neutral800"},W.name)),c.createElement(Ie.Td,{width:"65%"},c.createElement(Je.Z,{textColor:W.enabled?"success600":"danger600","data-testid":`enable-${W.name}`},W.enabled?e({id:"global.enabled",defaultMessage:"Enabled"}):e({id:"global.disabled",defaultMessage:"Disabled"}))),c.createElement(Ie.Td,un({},h.stopPropagation),M&&c.createElement(mi.h,{onClick:()=>ka(W),noBorder:!0,icon:c.createElement(vi.Z,null),label:"Edit"})))))))),c.createElement(Ui,{initialData:L[f],isOpen:i,isSubmiting:s,layout:dn,headerBreadcrumbs:[e({id:(0,$.OB)("PopUpForm.header.edit.providers"),defaultMessage:"Edit Provider"}),q()(f)],onToggle:mn,onSubmit:Xi,providerToEditName:f}))},Gi=()=>c.createElement(h.CheckPagePermissions,{permissions:da.Z.readProviders},c.createElement(Oa,null))},2407:(vt,se,d)=>{d.d(se,{$:()=>ce,O:()=>H});var c=d(67294),C=d(45697),h=d(71893),te=d(16405),ne=d(72735),le=d(35961),q=d(46273),G=d(63237),fe=Object.defineProperty,m=Object.getOwnPropertySymbols,X=Object.prototype.hasOwnProperty,V=Object.prototype.propertyIsEnumerable,me=(g,E,P)=>E in g?fe(g,E,{enumerable:!0,configurable:!0,writable:!0,value:P}):g[E]=P,ve=(g,E)=>{for(var P in E||(E={}))X.call(E,P)&&me(g,P,E[P]);if(m)for(var P of m(E))V.call(E,P)&&me(g,P,E[P]);return g},Te=(g,E)=>{var P={};for(var S in g)X.call(g,S)&&E.indexOf(S)<0&&(P[S]=g[S]);if(g!=null&&m)for(var S of m(g))E.indexOf(S)<0&&V.call(g,S)&&(P[S]=g[S]);return P};const N=(0,h.default)(q.k)`
  svg {
    height: ${10/16}rem;
    width: ${10/16}rem;
    path {
      fill: ${({theme:g})=>g.colors.neutral500};
    }
  }
  :last-of-type ${le.x} {
    display: none;
  }
  :last-of-type ${ne.Z} {
    color: ${({theme:g})=>g.colors.neutral800};
    font-weight: ${({theme:g})=>g.fontWeights.bold};
  }
`,ce=({children:g})=>c.createElement(N,{inline:!0,as:"li"},c.createElement(ne.Z,{variant:"pi",textColor:"neutral600"},g),c.createElement(le.x,{"aria-hidden":!0,paddingLeft:3,paddingRight:3},c.createElement(te.default,null)));ce.displayName="Crumb",ce.propTypes={children:C.node.isRequired};const ae=C.shape({type:C.oneOf([ce])}),H=g=>{var E=g,{children:P,label:S}=E,pe=Te(E,["children","label"]);return c.createElement(q.k,ve({},pe),c.createElement(G.T,null,S),c.createElement("ol",{"aria-hidden":!0},P))};H.displayName="Breadcrumbs",H.propTypes={children:C.oneOfType([C.arrayOf(ae),ae]).isRequired,label:C.string.isRequired}},17034:(vt,se,d)=>{d.d(se,{A:()=>q});var c=d(67294),C=d(45697),h=d(71893),te=d(35961);const ne=(0,h.default)(te.x)`
  display: grid;
  grid-template-columns: ${({hasSideNav:G})=>G?"auto 1fr":"1fr"};
`,le=(0,h.default)(te.x)`
  overflow-x: hidden;
`,q=({sideNav:G,children:fe})=>c.createElement(ne,{hasSideNav:Boolean(G)},G,c.createElement(le,{paddingBottom:10},fe));q.defaultProps={sideNav:void 0},q.propTypes={children:C.node.isRequired,sideNav:C.node}},39785:(vt,se,d)=>{d.d(se,{A:()=>H});var c=d(67294),C=d(45697),h=d(71893),te=d(86647),ne=d(35961),le=d(72735),q=d(46273),G=d(15585),fe=Object.defineProperty,m=Object.getOwnPropertySymbols,X=Object.prototype.hasOwnProperty,V=Object.prototype.propertyIsEnumerable,me=(g,E,P)=>E in g?fe(g,E,{enumerable:!0,configurable:!0,writable:!0,value:P}):g[E]=P,ve=(g,E)=>{for(var P in E||(E={}))X.call(E,P)&&me(g,P,E[P]);if(m)for(var P of m(E))V.call(E,P)&&me(g,P,E[P]);return g},Te=(g,E)=>{var P={};for(var S in g)X.call(g,S)&&E.indexOf(S)<0&&(P[S]=g[S]);if(g!=null&&m)for(var S of m(g))E.indexOf(S)<0&&V.call(g,S)&&(P[S]=g[S]);return P};const N=h.keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`,ce=h.default.div`
  animation: ${N} 2s infinite linear;
  will-change: transform;
`,ae=(0,h.default)(q.k)`
  background: transparent;
  border: none;

  &[aria-disabled='true'] {
    pointer-events: none;
    svg path {
      fill: ${({theme:g})=>g.colors.neutral600};
    }
  }

  svg {
    display: flex;
    font-size: ${10/16}rem;
  }

  svg path {
    fill: ${({theme:g})=>g.colors.primary600};
  }

  ${G.BF}
`,H=c.forwardRef((g,E)=>{var P=g,{children:S,startIcon:pe,endIcon:Me,onClick:xe,disabled:Be,loading:Le}=P,Ue=Te(P,["children","startIcon","endIcon","onClick","disabled","loading"]);const we=xe&&!Be?xe:void 0,Ne=Be||Le;return c.createElement(ae,ve({ref:E,"aria-disabled":Ne,onClick:we,as:"button",type:"button"},Ue),(pe||Le)&&c.createElement(ne.x,{as:"span",paddingRight:2,"aria-hidden":!0},Le?c.createElement(ce,null,c.createElement(te.default,null)):pe),c.createElement(le.Z,{variant:"pi",textColor:Ne?"neutral600":"primary600"},S),Me&&c.createElement(ne.x,{as:"span",paddingLeft:2,"aria-hidden":!0},Me))});H.displayName="TextButton",H.defaultProps={disabled:!1,startIcon:void 0,endIcon:void 0,loading:!1,onClick:void 0},H.propTypes={children:C.node.isRequired,disabled:C.bool,endIcon:C.element,loading:C.bool,onClick:C.func,startIcon:C.element}},20707:(vt,se,d)=>{d.d(se,{s:()=>Z});var c=d(67294),C=d(71893),h=d(45697),te=d(75228),ne=d(41762),le=d(54574),q=d(64777),G=d(63428),fe=d(96404),m=d(7681),X=d(46273),V=d(39785),me=d(15585),ve=d(72735),Te=d(63237),N=d(35961),ce=d(88262),ae=Object.defineProperty,H=Object.defineProperties,g=Object.getOwnPropertyDescriptors,E=Object.getOwnPropertySymbols,P=Object.prototype.hasOwnProperty,S=Object.prototype.propertyIsEnumerable,pe=(y,x,O)=>x in y?ae(y,x,{enumerable:!0,configurable:!0,writable:!0,value:O}):y[x]=O,Me=(y,x)=>{for(var O in x||(x={}))P.call(x,O)&&pe(y,O,x[O]);if(E)for(var O of E(x))S.call(x,O)&&pe(y,O,x[O]);return y},xe=(y,x)=>H(y,g(x)),Be=(y,x)=>{var O={};for(var A in y)P.call(y,A)&&x.indexOf(A)<0&&(O[A]=y[A]);if(y!=null&&E)for(var A of E(y))x.indexOf(A)<0&&S.call(y,A)&&(O[A]=y[A]);return O};const Le=C.default.label`
  position: relative;
  display: inline-block;
  z-index: 0;
  width: 100%;
`,Ue=(0,C.default)(N.x)`
  cursor: ${({disabled:y})=>y?"not-allowed":void 0};
  // Masks the background of each value
  overflow: hidden;
  flex-wrap: wrap;

  ${(0,me.k3)()}
`,we=(0,C.default)(X.k).attrs({hasRadius:!0})`
  background-color: ${({theme:y,checked:x,disabled:O})=>x?O?y.colors.neutral200:y.colors.neutral0:"transparent"};
  border: 1px solid
    ${({theme:y,checked:x,disabled:O})=>x&&x!==null?O?y.colors.neutral300:y.colors.neutral200:O?y.colors.neutral150:y.colors.neutral100};
  position: relative;
  user-select: none;
  z-index: 2;
  flex: 1 1 50%;
  /**
    We declare the defined value because we want the height of the input when 
    the values are in a row to be 40px. But defining a height on the label
    would break the input when it wraps.
  */
  padding-top: ${({size:y})=>`${y==="S"?"2px":"6px"}`};
  padding-bottom: ${({size:y})=>`${y==="S"?"2px":"6px"}`};
`,Ne=C.default.input`
  height: 100%;
  left: 0;
  opacity: 0;
  position: absolute;
  top: 0;
  z-index: 1;
  width: 100%;
`,Re=c.forwardRef((y,x)=>{var O=y,{size:A,onLabel:Oe,offLabel:ke,children:K,checked:_,disabled:Q,onChange:Ye}=O,ie=Be(O,["size","onLabel","offLabel","children","checked","disabled","onChange"]);const{name:Ee,required:He}=(0,ce.U)(),be="neutral600";let je=!_&&_!==null?"danger700":be,De=_?"primary600":be;const Tt=nt=>{Q||Ye(nt)};return c.createElement(Le,null,c.createElement(Te.T,null,K),c.createElement(Ue,{hasRadius:!0,disabled:Q,padding:1,display:"flex",background:Q?"neutral150":"neutral100",borderStyle:"solid",borderWidth:"1px",borderColor:"neutral200"},c.createElement(we,{size:A,paddingLeft:3,paddingRight:3,justifyContent:"center",alignItems:"center","aria-hidden":!0,checked:_===null?!1:!_,disabled:Q},c.createElement(ve.Z,{variant:"pi",fontWeight:"bold",textTransform:"uppercase",textColor:Q?"neutral700":je},ke)),c.createElement(we,{size:A,paddingLeft:3,paddingRight:3,justifyContent:"center",alignItems:"center","aria-hidden":!0,checked:_===null?!1:_,disabled:Q},c.createElement(ve.Z,{variant:"pi",fontWeight:"bold",textTransform:"uppercase",textColor:Q?"neutral700":De},Oe)),c.createElement(Ne,xe(Me({type:"checkbox","aria-disabled":Q,onChange:nt=>Tt(nt),name:Ee,ref:x,"aria-required":He},ie),{checked:!(_===null||!_)}))))});Re.displayName="ToggleCheckbox",Re.defaultProps={disabled:!1,checked:!1,onChange:void 0,size:"M"},Re.propTypes={checked:h.bool,children:h.string.isRequired,disabled:h.bool,offLabel:h.string.isRequired,onChange:h.func,onLabel:h.string.isRequired,size:h.oneOf(Object.keys(te.J.input))};var pt=Object.defineProperty,We=Object.getOwnPropertySymbols,et=Object.prototype.hasOwnProperty,tt=Object.prototype.propertyIsEnumerable,re=(y,x,O)=>x in y?pt(y,x,{enumerable:!0,configurable:!0,writable:!0,value:O}):y[x]=O,I=(y,x)=>{for(var O in x||(x={}))et.call(x,O)&&re(y,O,x[O]);if(We)for(var O of We(x))tt.call(x,O)&&re(y,O,x[O]);return y},bt=(y,x)=>{var O={};for(var A in y)et.call(y,A)&&x.indexOf(A)<0&&(O[A]=y[A]);if(y!=null&&We)for(var A of We(y))x.indexOf(A)<0&&tt.call(y,A)&&(O[A]=y[A]);return O};const _e=(0,C.default)(le.g)`
  max-width: 320px;
`,pn=(0,C.default)(V.A)`
  align-self: flex-end;
  margin-left: auto;
`,Z=y=>{var x=y,{disabled:O,size:A,error:Oe,hint:ke,label:K,name:_,labelAction:Q,required:Ye,id:ie,onClear:Ee,clearLabel:He,checked:be}=x,je=bt(x,["disabled","size","error","hint","label","name","labelAction","required","id","onClear","clearLabel","checked"]);const De=(0,ne.M)("toggleinput",ie);return c.createElement(_e,{name:_,hint:ke,error:Oe,id:De,required:Ye},c.createElement(m.K,{spacing:1},c.createElement(X.k,null,c.createElement(q.Q,{action:Q},K),He&&Ee&&be!==null&&!O&&c.createElement(pn,{onClick:Ee},He)),c.createElement(Re,I({id:De,size:A,checked:be,disabled:O},je),K),c.createElement(G.J,null),c.createElement(fe.c,null)))};Z.displayName="ToggleInput",Z.defaultProps={checked:!1,clearLabel:void 0,disabled:!1,error:void 0,hint:void 0,id:void 0,label:"",labelAction:void 0,name:"",onClear:void 0,required:!1,size:"M"},Z.propTypes={checked:h.bool,clearLabel:h.string,disabled:h.bool,error:h.string,hint:h.oneOfType([h.string,h.node,h.arrayOf(h.node)]),id:h.string,label:h.string,labelAction:h.node,name:h.string,onClear:h.func,required:h.bool,size:h.oneOf(Object.keys(te.J.input))}}}]);
