"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[2151,8365],{37852:function(e,t,a){a.d(t,{S:function(){return c}});var s=a(29508),n=a(67294),l=(a(7568),a(7444)),r=a(9741),o={statusLabel:"StatusLabel-module_statusLabel__3R2J2 status-label_hds-status-label__1L8YI",statusLabelWithIcon:"StatusLabel-module_statusLabelWithIcon__5lKVk status-label_hds-status-label--with-icon__3bHf6",statusLabelIcon:"StatusLabel-module_statusLabelIcon__2SAou status-label_hds-status-label-icon__3K58a",info:"StatusLabel-module_info__3YrAe status-label_hds-status-label--info__J28-H",success:"StatusLabel-module_success__2BfdX status-label_hds-status-label--success__3jiST",alert:"StatusLabel-module_alert__2VR8r status-label_hds-status-label--alert__1ecsX",error:"StatusLabel-module_error__zNgn8 status-label_hds-status-label--error__2EYi4"};(0,l.s)(".status-label_hds-status-label__1L8YI{--status-label-background:var(--color-black-10);--status-label-color:var(--color-black-90);--status-label-height:32px;background-color:var(--status-label-background);border-radius:20px;color:var(--status-label-color);display:inline-block;font-size:var(--fontsize-body-s);line-height:var(--status-label-height);min-height:var(--status-label-height);padding:0 var(--spacing-2-xs);vertical-align:middle}.status-label_hds-status-label--with-icon__3bHf6{align-items:center;display:inline-flex;padding-left:var(--spacing-3-xs)}.status-label_hds-status-label-icon__3K58a{height:var(--spacing-m);margin-right:var(--spacing-3-xs);width:var(--spacing-m)}.status-label_hds-status-label--info__J28-H{--status-label-background:var(--color-info);--status-label-color:var(--color-white)}.status-label_hds-status-label--success__3jiST{--status-label-background:var(--color-success);--status-label-color:var(--color-white)}.status-label_hds-status-label--alert__1ecsX{--status-label-background:var(--color-alert)}.status-label_hds-status-label--error__2EYi4{--status-label-background:var(--color-error);--status-label-color:var(--color-white)}");const i=e=>{let{icon:t}=e;return n.createElement("span",{className:o.statusLabelIcon,"aria-hidden":"true"},t)},c=e=>{var{children:t,className:a,dataTestId:l,type:c="neutral",iconLeft:u}=e,d=(0,s._)(e,["children","className","dataTestId","type","iconLeft"]);return n.createElement("span",Object.assign({className:(0,r.c)(o.statusLabel,o[c],u&&o.statusLabelWithIcon,a),"data-testid":l},d),u&&n.createElement(i,{icon:u}),t)}},45190:function(e,t,a){a.r(t);var s=a(11151),n=a(67294),l=a(29090),r=a(90203),o=a(77884);const i=e=>{let{children:t,pageContext:a}=e;return n.createElement(r.default,{pageContext:a},t)};function c(e){const t=Object.assign({h2:"h2",a:"a",span:"span",p:"p",h3:"h3",code:"code",pre:"pre"},(0,s.ah)(),e.components),{Playground:a}=t;return a||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Playground",!0),n.createElement(n.Fragment,null,n.createElement(t.h2,{id:"customisation",style:{position:"relative"}},"Customisation",n.createElement(t.a,{href:"#customisation","aria-label":"customisation permalink",className:"header-anchor after"},n.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<span class="hds-anchor-icon hds-icon hds-icon--link hds-icon--size-xs" aria-hidden="true" style="vertical-align: middle"></span>'}}))),"\n",n.createElement(o.Z,{type:"alert",label:"Koros customisation works differently!",className:"siteNotification"},n.createElement(t.p,null,"Koros is an older HDS component and therefore its customisation works slightly differently. Instead of the\n",n.createElement("code",null,"theme")," property, you need to use the ",n.createElement("code",null,"style")," property. This will be fixed in a future update.")),"\n",n.createElement(t.h3,{id:"customisation-properties",style:{position:"relative"}},"Customisation properties",n.createElement(t.a,{href:"#customisation-properties","aria-label":"customisation properties permalink",className:"header-anchor after"},n.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<span class="hds-anchor-icon hds-icon hds-icon--link hds-icon--size-xs" aria-hidden="true" style="vertical-align: middle"></span>'}}))),"\n",n.createElement(t.p,null,"In Core version, you can either use the ",n.createElement(t.code,null,"style")," or ",n.createElement(t.code,null,"class")," attributes in the HTML to customise the component."),"\n",n.createElement(t.p,null,"In React version, you can either use the ",n.createElement(t.code,null,"style")," or ",n.createElement(t.code,null,"className")," properties to customise the component."),"\n",n.createElement(t.h3,{id:"customisation-example",style:{position:"relative"}},"Customisation example",n.createElement(t.a,{href:"#customisation-example","aria-label":"customisation example permalink",className:"header-anchor after"},n.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<span class="hds-anchor-icon hds-icon hds-icon--link hds-icon--size-xs" aria-hidden="true" style="vertical-align: middle"></span>'}}))),"\n",n.createElement(a,{scope:{Koros:l.K}},n.createElement(t.pre,null,n.createElement(t.code,{className:"language-jsx"},"import { Koros } from 'hds-react';\n() => (\n<Koros style={{ fill: 'var(--color-coat-of-arms)' }} />)\n")),n.createElement(t.pre,null,n.createElement(t.code,{className:"language-html"},'<div class="hds-koros" style="fill: var(--color-coat-of-arms);">\n  <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="100%" height="85">\n    <defs>\n      <pattern id="korosBasicCustom" x="0" y="0" width="106" height="85" patternUnits="userSpaceOnUse">\n        <path transform="scale(5.3)" d="M0,800h20V0c-4.9,0-5,2.6-9.9,2.6S5,0,0,0V800z" />\n      </pattern>\n    </defs>\n    <rect fill="url(#korosBasicCustom)" width="100%" height="85" />\n  </svg>\n</div>\n'))))}t.default=function(e){return void 0===e&&(e={}),n.createElement(i,e,n.createElement(c,e))}},90203:function(e,t,a){a.r(t);var s=a(11151),n=a(67294),l=a(57674),r=a(89482),o=a(26127),i=a(55725);function c(e){const t=Object.assign({h1:"h1",a:"a",span:"span"},(0,s.ah)(),e.components);return o.Z||u("PageTabs",!1),o.Z.Tab||u("PageTabs.Tab",!0),o.Z.TabList||u("PageTabs.TabList",!0),o.Z.TabPanel||u("PageTabs.TabPanel",!0),n.createElement(n.Fragment,null,n.createElement(t.h1,{id:"koros",style:{position:"relative"}},"Koros",n.createElement(t.a,{href:"#koros","aria-label":"koros permalink",className:"header-anchor after"},n.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<span class="hds-anchor-icon hds-icon hds-icon--link hds-icon--size-xs" aria-hidden="true" style="vertical-align: middle"></span>'}}))),"\n",n.createElement("div",{class:"status-label-description"},n.createElement(i.Z,{type:"info"},"Stable"),n.createElement(i.Z,{type:"success",style:{marginLeft:"var(--spacing-xs)"}},"Accessible"),n.createElement(l.Z)),"\n",n.createElement(r.Z,null,"Koros, also known as Wave motifs, are part of the visual identity of City of Helsinki. The Koros can be used as visual elements, for example as part of the hero image or the footer and as a divider of content in the user interface."),"\n",n.createElement(o.Z,{pageContext:e.pageContext},n.createElement(o.Z.TabList,null,n.createElement(o.Z.Tab,{href:"/"},"Usage"),n.createElement(o.Z.Tab,{href:"/code"},"Code"),n.createElement(o.Z.Tab,{href:"/accessibility"},"Accessibility"),n.createElement(o.Z.Tab,{href:"/customisation"},"Customisation")),n.createElement(o.Z.TabPanel,null,e.children)))}function u(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}t.default=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,s.ah)(),e.components);return t?n.createElement(t,e,n.createElement(c,e)):c(e)}},89482:function(e,t,a){var s=a(67294),n=a(42972);t.Z=e=>{let{color:t="var(--color-black-90)",size:a="var(--fontsize-body-xl)",style:l={},children:r}=e;return s.createElement("p",{style:{fontSize:a,color:t,maxWidth:600,...l}},(0,n.g)(r))}},77884:function(e,t,a){var s=a(67294),n=a(95151),l=a(42972);t.Z=e=>{let{children:t,...a}=e;return s.createElement(n.N,a,(0,l.g)(t))}},26127:function(e,t,a){var s=a(67294),n=a(14160),l=a(69138),r=a(42972);const o="PageTabList",i="PageTabPanel",c="PageTab",u=e=>{var t;let{pageContext:a,children:u}=e;const d=a.frontmatter.slug,m=Array.isArray(u)?u:[u],h=m.find((e=>(0,s.isValidElement)(e)&&e.type.componentName===o)),p=m.find((e=>(0,s.isValidElement)(e)&&e.type.componentName===i)),b=null===(t=h.props)||void 0===t?void 0:t.children.filter((e=>e.type.componentName===c)),f=b.findIndex((e=>d.endsWith(e.props.href))),g=-1===f?0:f,E=0===g?d:(e=>`/${e.trim().split("/").filter((e=>!!e)).slice(0,-1).join("/")}`)(d);return s.createElement(l.a,{initiallyActiveTab:g},s.createElement(l.a.TabList,{className:"page-tabs-list"},b.map((e=>s.createElement(l.a.Tab,{key:e.props.href,onClick:()=>(0,n.navigate)(`${"/"===e.props.href?E:E+e.props.href}`)},(0,r.g)(e.props.children))))),b.map(((e,t)=>s.createElement(l.a.TabPanel,{key:e.props.href},g===t?p.props.children:s.createElement("div",null)))))},d=e=>{let{children:t}=e;return s.createElement(l.a.TabList,null,t)};d.componentName=o;const m=e=>{let{href:t,slug:a,children:n}=e;return s.createElement(l.a.Tab,null," ",n)};m.componentName=c;const h=e=>{let{children:t}=e;return s.createElement(l.a.TabPanel,null,t)};h.componentName=i,u.TabList=d,u.Tab=m,u.TabPanel=h,t.Z=u},55725:function(e,t,a){var s=a(67294),n=a(37852),l=a(42972);t.Z=e=>{let{children:t,...a}=e;return s.createElement(n.S,a,(0,l.g)(t))}},57674:function(e,t,a){var s=a(67294),n=a(25760);t.Z=()=>{const e={Draft:"The component is work in progress",Beta:"The component is being tested",Stable:"The component has been tested and defects have been fixed",Accessible:"The component has been reviewed for accessibility",Deprecated:"The component will be removed"};return s.createElement(n.T,{placement:"right-end",className:"status-label-tooltip",boxShadow:!0},s.createElement("ul",{className:"status-label-definitions"},Object.keys(e).map((t=>s.createElement("li",{key:t},s.createElement("span",{className:"status-name"},t),s.createElement("span",null,e[t]))))))}}}]);