(self.webpackChunksite=self.webpackChunksite||[]).push([[8580],{71928:function(o,r,e){var n=e(88799),t=e(85638),c=Object.prototype.hasOwnProperty;o.exports=function(o,r,e){var i=o[r];c.call(o,r)&&t(i,e)&&(void 0!==e||r in o)||n(o,r,e)}},88799:function(o,r,e){var n=e(42630);o.exports=function(o,r,e){"__proto__"==r&&n?n(o,r,{configurable:!0,enumerable:!0,value:e,writable:!0}):o[r]=e}},79867:function(o,r,e){var n=e(76747),t=e(37948);o.exports=function(o,r){for(var e=0,c=(r=n(r,o)).length;null!=o&&e<c;)o=o[t(r[e++])];return e&&e==c?o:void 0}},21610:function(o){o.exports=function(o,r){return null!=o&&r in Object(o)}},19850:function(o,r,e){var n=e(23694),t=e(32866);o.exports=function(o,r,e,c){var i=e.length,a=i,l=!c;if(null==o)return!a;for(o=Object(o);i--;){var u=e[i];if(l&&u[2]?u[1]!==o[u[0]]:!(u[0]in o))return!1}for(;++i<a;){var d=(u=e[i])[0],s=o[d],b=u[1];if(l&&u[2]){if(void 0===s&&!(d in o))return!1}else{var f=new n;if(c)var v=c(s,b,d,o,r,f);if(!(void 0===v?t(b,s,3,c,f):v))return!1}}return!0}},89278:function(o,r,e){var n=e(71410),t=e(57518),c=e(31137),i=e(19785),a=e(96001);o.exports=function(o){return"function"==typeof o?o:null==o?c:"object"==typeof o?i(o)?t(o[0],o[1]):n(o):a(o)}},59464:function(o,r,e){var n=e(11611),t=e(56016),c=e(21586),i=Object.prototype.hasOwnProperty;o.exports=function(o){if(!n(o))return c(o);var r=t(o),e=[];for(var a in o)("constructor"!=a||!r&&i.call(o,a))&&e.push(a);return e}},71410:function(o,r,e){var n=e(19850),t=e(68125),c=e(65042);o.exports=function(o){var r=t(o);return 1==r.length&&r[0][2]?c(r[0][0],r[0][1]):function(e){return e===o||n(e,o,r)}}},57518:function(o,r,e){var n=e(32866),t=e(99729),c=e(79749),i=e(40318),a=e(68302),l=e(65042),u=e(37948);o.exports=function(o,r){return i(o)&&a(r)?l(u(o),r):function(e){var i=t(e,o);return void 0===i&&i===r?c(e,o):n(r,i,3)}}},10228:function(o,r,e){var n=e(79867),t=e(78859),c=e(76747);o.exports=function(o,r,e){for(var i=-1,a=r.length,l={};++i<a;){var u=r[i],d=n(o,u);e(d,u)&&t(l,c(u,o),d)}return l}},50517:function(o){o.exports=function(o){return function(r){return null==r?void 0:r[o]}}},10301:function(o,r,e){var n=e(79867);o.exports=function(o){return function(r){return n(r,o)}}},78859:function(o,r,e){var n=e(71928),t=e(76747),c=e(42383),i=e(11611),a=e(37948);o.exports=function(o,r,e,l){if(!i(o))return o;for(var u=-1,d=(r=t(r,o)).length,s=d-1,b=o;null!=b&&++u<d;){var f=a(r[u]),v=e;if("__proto__"===f||"constructor"===f||"prototype"===f)return o;if(u!=s){var h=b[f];void 0===(v=l?l(h,f,b):void 0)&&(v=i(h)?h:c(r[u+1])?[]:{})}n(b,f,v),b=b[f]}return o}},76747:function(o,r,e){var n=e(19785),t=e(40318),c=e(23419),i=e(65567);o.exports=function(o,r){return n(o)?o:t(o,r)?[o]:c(i(o))}},42630:function(o,r,e){var n=e(81822),t=function(){try{var o=n(Object,"defineProperty");return o({},"",{}),o}catch(r){}}();o.exports=t},39759:function(o,r,e){var n=e(11324),t=e(30791),c=e(53893);o.exports=function(o){return n(o,c,t)}},68125:function(o,r,e){var n=e(68302),t=e(50098);o.exports=function(o){for(var r=t(o),e=r.length;e--;){var c=r[e],i=o[c];r[e]=[c,i,n(i)]}return r}},2173:function(o,r,e){var n=e(58023)(Object.getPrototypeOf,Object);o.exports=n},30791:function(o,r,e){var n=e(97141),t=e(2173),c=e(83080),i=e(15937),a=Object.getOwnPropertySymbols?function(o){for(var r=[];o;)n(r,c(o)),o=t(o);return r}:i;o.exports=a},731:function(o,r,e){var n=e(76747),t=e(2900),c=e(19785),i=e(42383),a=e(84194),l=e(37948);o.exports=function(o,r,e){for(var u=-1,d=(r=n(r,o)).length,s=!1;++u<d;){var b=l(r[u]);if(!(s=null!=o&&e(o,b)))break;o=o[b]}return s||++u!=d?s:!!(d=null==o?0:o.length)&&a(d)&&i(b,d)&&(c(o)||t(o))}},40318:function(o,r,e){var n=e(19785),t=e(55193),c=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,i=/^\w*$/;o.exports=function(o,r){if(n(o))return!1;var e=typeof o;return!("number"!=e&&"symbol"!=e&&"boolean"!=e&&null!=o&&!t(o))||(i.test(o)||!c.test(o)||null!=r&&o in Object(r))}},68302:function(o,r,e){var n=e(11611);o.exports=function(o){return o==o&&!n(o)}},65042:function(o){o.exports=function(o,r){return function(e){return null!=e&&(e[o]===r&&(void 0!==r||o in Object(e)))}}},2941:function(o,r,e){var n=e(16651);o.exports=function(o){var r=n(o,(function(o){return 500===e.size&&e.clear(),o})),e=r.cache;return r}},21586:function(o){o.exports=function(o){var r=[];if(null!=o)for(var e in Object(o))r.push(e);return r}},23419:function(o,r,e){var n=e(2941),t=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,c=/\\(\\)?/g,i=n((function(o){var r=[];return 46===o.charCodeAt(0)&&r.push(""),o.replace(t,(function(o,e,n,t){r.push(n?t.replace(c,"$1"):e||o)})),r}));o.exports=i},37948:function(o,r,e){var n=e(55193);o.exports=function(o){if("string"==typeof o||n(o))return o;var r=o+"";return"0"==r&&1/o==-Infinity?"-0":r}},99729:function(o,r,e){var n=e(79867);o.exports=function(o,r,e){var t=null==o?void 0:n(o,r);return void 0===t?e:t}},79749:function(o,r,e){var n=e(21610),t=e(731);o.exports=function(o,r){return null!=o&&t(o,r,n)}},31137:function(o){o.exports=function(o){return o}},53893:function(o,r,e){var n=e(98213),t=e(59464),c=e(80068);o.exports=function(o){return c(o)?n(o,!0):t(o)}},16651:function(o,r,e){var n=e(74554);function t(o,r){if("function"!=typeof o||null!=r&&"function"!=typeof r)throw new TypeError("Expected a function");var e=function(){var n=arguments,t=r?r.apply(this,n):n[0],c=e.cache;if(c.has(t))return c.get(t);var i=o.apply(this,n);return e.cache=c.set(t,i)||c,i};return e.cache=new(t.Cache||n),e}t.Cache=n,o.exports=t},71975:function(o,r,e){var n=e(66070),t=e(89278),c=e(10228),i=e(39759);o.exports=function(o,r){if(null==o)return{};var e=n(i(o),(function(o){return[o]}));return r=t(r),c(o,e,(function(o,e){return r(o,e[0])}))}},96001:function(o,r,e){var n=e(50517),t=e(10301),c=e(40318),i=e(37948);o.exports=function(o){return c(o)?n(i(o)):t(o)}},40496:function(o,r,e){"use strict";e.d(r,{A:function(){return _}});var n=e(71975),t=e.n(n),c=e(46854),i=e.n(c),a=e(29508),l=e(67294),u=(e(7568),e(7444)),d=e(9741),s=e(53052),b=e(43837),f=e(36440),v=e(67785),h=e(91276),g={accordion:"Accordion-module_accordion__2fPUT",card:"Accordion-module_card__1iRKx",border:"Accordion-module_border__2AgQd",accordionHeader:"Accordion-module_accordionHeader__3_uK7",s:"Accordion-module_s__8gw4g",closeButton:"Accordion-module_closeButton__1Qt8U",m:"Accordion-module_m__2k6QY",l:"Accordion-module_l__gPzdT",accordionContent:"Accordion-module_accordionContent__1umso",contentWithCloseButton:"Accordion-module_contentWithCloseButton__-einM",headingContainer:"Accordion-module_headingContainer__1DzX3",accordionButtonIcon:"Accordion-module_accordionButtonIcon__MQu2J"};(0,u.s)(".Accordion-module_accordion__2fPUT{--background-color:var(--color-white);--border-color:var(--color-black-60);--header-font-color:var(--color-black-90);--header-focus-outline-color:var(--color-coat-of-arms);--content-font-color:var(--color-black-90);--content-font-size:var(--fontsize-body-m);--content-line-height:var(--lineheight-l);--close-button-background-color-disabled:inherit;--close-button-background-color-focus:transparent;--close-button-background-color-hover-focus:var(--color-black-5);--close-button-background-color-hover:var(--color-black-5);--close-button-background-color:inherit;--close-button-border-color-active:var(--header-focus-outline-color);--close-button-border-color-disabled:inherit;--close-button-border-color-focus:var(--header-focus-outline-color);--close-button-border-color-hover-focus:var(--header-focus-outline-color);--close-button-border-color-hover:inherit;--close-button-border-color:inherit;--close-button-color-disabled:inherit;--close-button-color-focus:var(--color-black);--close-button-color-hover-focus:var(--color-black);--close-button-color-hover:var(--color-black);--close-button-color:var(--content-font-color);--close-button-focus-outline-color:transparent}.Accordion-module_accordion__2fPUT:not(.Accordion-module_card__1iRKx){border-bottom:1px solid var(--border-color)}.Accordion-module_accordion__2fPUT.Accordion-module_card__1iRKx{background-color:var(--background-color);padding-left:var(--padding-horizontal);padding-right:var(--padding-horizontal)}.Accordion-module_accordion__2fPUT.Accordion-module_border__2AgQd{border:2px solid var(--border-color)}.Accordion-module_accordionHeader__3_uK7{align-items:center;color:var(--header-font-color);display:flex;font-size:var(--header-font-size);font-weight:var(--header-font-weight);justify-content:space-between;letter-spacing:var(--header-letter-spacing);line-height:var(--header-line-height);padding-bottom:var(--padding-vertical);padding-top:var(--padding-vertical);position:relative}.Accordion-module_accordionHeader__3_uK7>div{flex:1 1 auto}.Accordion-module_s__8gw4g{--header-font-size:var(--fontsize-heading-s);--padding-vertical:var(--spacing-s);--header-font-weight:700;--header-letter-spacing:0.2px;--header-line-height:1.4;--button-size:28px;--padding-horizontal:var(--spacing-2-xs)}.Accordion-module_s__8gw4g .Accordion-module_closeButton__1Qt8U div{margin-right:var(--spacing-4-xs)}.Accordion-module_m__2k6QY{--header-font-size:var(--fontsize-heading-m);--padding-vertical:var(--spacing-m);--header-font-weight:500;--header-letter-spacing:-0.2px;--header-line-height:32px;--button-size:36px;--padding-horizontal:var(--spacing-m)}.Accordion-module_m__2k6QY .Accordion-module_closeButton__1Qt8U div{margin-right:6px}.Accordion-module_l__gPzdT{--header-font-size:var(--fontsize-heading-l);--padding-vertical:var(--spacing-l);--header-font-weight:400;--header-letter-spacing:-0.4px;--header-line-height:var(--lineheight-s);--button-size:52px;--padding-horizontal:var(--spacing-l)}.Accordion-module_l__gPzdT .Accordion-module_closeButton__1Qt8U div{margin-right:var(--spacing-xs)}.Accordion-module_accordionContent__1umso{color:var(--content-font-color);font-size:var(--content-font-size);line-height:var(--content-line-height);padding-bottom:var(--spacing-m);position:relative}.Accordion-module_accordionContent__1umso .Accordion-module_closeButton__1Qt8U{bottom:0;position:absolute;right:0;--background-color-disabled:var(--close-button-background-color-disabled);--background-color-focus:var(--close-button-background-color-focus);--background-color-hover-focus:var(--close-button-background-color-hover-focus);--background-color-hover:var(--close-button-background-color-hover);--background-color:var(--close-button-background-color);--border-color-active:var(--close-button-border-color-active);--border-color-disabled:var(--close-button-border-color-disabled);--border-color-focus:var(--close-button-border-color-focus);--border-color-hover-focus:var(--close-button-border-color-hover-focus);--border-color-hover:var(--close-button-border-color-hover);--border-color:var(--close-button-border-color);--color-disabled:var(--close-button-color-disabled);--color-focus:var(--close-button-color-focus);--color-hover-focus:var(--close-button-color-hover-focus);--color-hover:var(--close-button-color-hover);--color:var(--close-button-color);--focus-outline-color:var(--close-button-focus-outline-color)}.Accordion-module_accordionContent__1umso .Accordion-module_closeButton__1Qt8U:not(:disabled):active{border-color:var(--close-button-border-color-active)}.Accordion-module_contentWithCloseButton__-einM{padding-bottom:44px}.Accordion-module_headingContainer__1DzX3{align-items:center;box-sizing:border-box;cursor:pointer;display:grid;grid-template-columns:auto calc(var(--button-size));width:100%}.Accordion-module_headingContainer__1DzX3:focus{outline:2px solid var(--header-focus-outline-color,transparent)}.Accordion-module_accordionButtonIcon__MQu2J{border:2px solid transparent;box-sizing:border-box;height:var(--button-size)!important;margin:auto;width:var(--button-size)!important}");const p=o=>({en:"Close",fi:"Sulje",sv:"Stäng"}[o]),_=o=>{var{border:r=!1,card:e=!1,children:n,className:c,closeButtonClassName:u,closeButton:_=!0,heading:m,headingLevel:x=2,id:k,initiallyOpen:A=!1,language:z="fi",size:y="m",theme:C}=o,O=(0,a._)(o,["border","card","children","className","closeButtonClassName","closeButton","heading","headingLevel","id","initiallyOpen","language","size","theme"]);const w=(0,l.useRef)(null),[B,j]=(0,l.useState)(!1),[P]=(0,l.useState)(k||i()("accordion-")),E=C&&{"--background-color":C["--background-color"],"--border-color":C["--border-color"],"--header-font-color":C["--header-font-color"],"--header-focus-outline-color":C["--header-focus-outline-color"],"--content-font-color":C["--content-font-color"],"--content-font-size":C["--content-font-size"],"--content-line-height":C["--content-line-height"],"--close-button-background-color-disabled":C["--close-button-background-color-disabled"],"--close-button-background-color-focus":C["--close-button-background-color-focus"],"--close-button-background-color-hover-focus":C["--close-button-background-color-hover-focus"],"--close-button-background-color-hover":C["--close-button-background-color-hover"],"--close-button-background-color":C["--close-button-background-color"],"--close-button-border-color-active":C["--close-button-border-color-active"],"--close-button-border-color-disabled":C["--close-button-border-color-disabled"],"--close-button-border-color-focus":C["--close-button-border-color-focus"],"--close-button-border-color-hover-focus":C["--close-button-border-color-hover-focus"],"--close-button-border-color-hover":C["--close-button-border-color-hover"],"--close-button-border-color":C["--close-button-border-color"],"--close-button-color-disabled":C["--close-button-color-disabled"],"--close-button-color-focus":C["--close-button-color-focus"],"--close-button-color-hover-focus":C["--close-button-color-hover-focus"],"--close-button-color-hover":C["--close-button-color-hover"],"--close-button-color":C["--close-button-color"],"--close-button-focus-outline-color":C["--close-button-focus-outline-color"]},N=t()(E),Q=(0,b.u)(g.accordion,Object.keys(N).length>0?N:void 0),I=C&&{"--header-font-size":C["--header-font-size"],"--padding-vertical":C["--padding-vertical"],"--padding-horizontal":C["--padding-horizontal"],"--header-font-weight":C["--header-font-weight"],"--header-letter-spacing":C["--header-letter-spacing"],"--header-line-height":C["--header-line-height"],"--button-size":C["--button-size"]},T=t()(I),U=(0,b.u)(g[y],Object.keys(T).length>0?T:void 0),{isOpen:$,buttonProps:K,contentProps:S}=(0,s.u)({initiallyOpen:A}),H=$?l.createElement(v.I,{"aria-hidden":!0,className:g.accordionButtonIcon}):l.createElement(h.I,{"aria-hidden":!0,className:g.accordionButtonIcon}),R=function(){const[o,r]=l.useState(!1);return l.useEffect((()=>{r(!0)}),[]),o}();(0,l.useEffect)((()=>{if(!R)return;const o=setTimeout((()=>{w.current.focus(),!0===B&&(j(!1),K.onClick())}),50);return()=>clearTimeout(o)}),[B]);const D=()=>{j(!0)};return l.createElement("div",Object.assign({},O,{className:(0,d.c)(g.accordion,e&&g.card,e&&r&&g.border,$&&g.isOpen,g[y],Q,U,c),id:P}),l.createElement("div",{className:(0,d.c)(g.accordionHeader)},l.createElement("div",{role:"heading","aria-level":x,id:`${P}-heading`},l.createElement("div",Object.assign({ref:w,role:"button",tabIndex:0,onKeyPress:o=>{"Enter"!==o.key&&" "!==o.key||(o.preventDefault(),K.onClick())},className:g.headingContainer,"aria-labelledby":`${P}-heading`},K,B?{"aria-expanded":!1}:{}),l.createElement("span",{className:"label"},m),H))),l.createElement("div",Object.assign({},S,{id:`${P}-content`,role:"region",className:(0,d.c)(g.accordionContent,e&&g.card,_&&g.contentWithCloseButton),"aria-labelledby":`${P}-heading`}),n,_&&l.createElement(f.B,{"data-testid":`${P}-closeButton`,"aria-label":`${p(z)} ${m}`,className:(0,d.c)(g.closeButton,u),theme:"black",size:"small",onKeyPress:o=>{" "===o.key&&D()},onClick:()=>{D()},variant:"supplementary",iconRight:l.createElement(v.I,{"aria-hidden":!0,size:"xs",className:g.accordionButtonIcon})},p(z))))}},53052:function(o,r,e){"use strict";e.d(r,{u:function(){return t}});var n=e(67294);const t=o=>{let{initiallyOpen:r=!1}=o;const[e,t]=(0,n.useState)(r),c=()=>{t(!0)},i=()=>{t(!1)},a=()=>{e?i():c()},l={onClick:a,"aria-expanded":e},u={};return!1===e&&(u.style={display:"none"}),{isOpen:e,openAccordion:c,closeAccordion:i,toggleAccordion:a,buttonProps:l,contentProps:u}}}}]);