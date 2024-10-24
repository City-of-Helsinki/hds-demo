"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[1352],{3597:function(e,t,a){a.d(t,{S:function(){return i}});var l=a(80136),n=a(67294),s=(a(13746),a(7444)),r=a(9741),o={statusLabel:"StatusLabel-module_statusLabel__1iSa6",statusLabelWithIcon:"StatusLabel-module_statusLabelWithIcon__3nZbg",statusLabelIcon:"StatusLabel-module_statusLabelIcon__2wChn",info:"StatusLabel-module_info__1lFA9",success:"StatusLabel-module_success__1mEVZ",alert:"StatusLabel-module_alert__1Fnb3",error:"StatusLabel-module_error__1-2nz"};(0,s.s)(".StatusLabel-module_statusLabel__1iSa6{--status-label-background:var(--color-black-10);--status-label-color:var(--color-black-90);--status-label-height:32px;background-color:var(--status-label-background);border-radius:20px;color:var(--status-label-color);display:inline-block;font-size:var(--fontsize-body-s);line-height:var(--status-label-height);min-height:var(--status-label-height);padding:0 var(--spacing-2-xs);vertical-align:middle}.StatusLabel-module_statusLabelWithIcon__3nZbg{align-items:center;display:inline-flex;padding-left:var(--spacing-3-xs)}.StatusLabel-module_statusLabelIcon__2wChn{height:var(--spacing-m);margin-right:var(--spacing-3-xs);width:var(--spacing-m)}.StatusLabel-module_info__1lFA9{--status-label-background:var(--color-info);--status-label-color:var(--color-white)}.StatusLabel-module_success__1mEVZ{--status-label-background:var(--color-success);--status-label-color:var(--color-white)}.StatusLabel-module_alert__1Fnb3{--status-label-background:var(--color-alert)}.StatusLabel-module_error__1-2nz{--status-label-background:var(--color-error);--status-label-color:var(--color-white)}");const c=e=>{let{icon:t}=e;return n.createElement("span",{className:o.statusLabelIcon,"aria-hidden":"true"},t)},i=e=>{var{children:t,className:a,type:s="neutral",iconStart:i}=e,u=(0,l._)(e,["children","className","type","iconStart"]);return n.createElement("span",Object.assign({className:(0,r.c)(o.statusLabel,o[s],i&&o.statusLabelWithIcon,a)},u),i&&n.createElement(c,{icon:i}),t)}},1072:function(e,t,a){a.r(t);var l=a(11151),n=a(67294),s=a(57674),r=a(89482),o=(a(18607),a(26127)),c=a(55725);function i(e){const t=Object.assign({h1:"h1",a:"a",span:"span"},(0,l.ah)(),e.components);return o.Z||u("PageTabs",!1),o.Z.Tab||u("PageTabs.Tab",!0),o.Z.TabList||u("PageTabs.TabList",!0),o.Z.TabPanel||u("PageTabs.TabPanel",!0),n.createElement(n.Fragment,null,n.createElement(t.h1,{id:"selectiongroup",style:{position:"relative"}},"SelectionGroup",n.createElement(t.a,{href:"#selectiongroup","aria-label":"selectiongroup permalink",className:"header-anchor after"},n.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<span class="hds-anchor-icon hds-icon hds-icon--link hds-icon--size-xs" aria-hidden="true" style="vertical-align: middle"></span>'}}))),"\n",n.createElement("div",{class:"status-label-description"},n.createElement(c.Z,{type:"info"},"Stable"),n.createElement(c.Z,{type:"success",style:{marginLeft:"var(--spacing-xs)"}},"Accessible"),n.createElement(s.Z)),"\n",n.createElement(r.Z,null,"Selection group allows grouping related form selection elements (such as Checkboxes) to each other."),"\n",n.createElement(o.Z,{pageContext:e.pageContext},n.createElement(o.Z.TabList,null,n.createElement(o.Z.Tab,{href:"/"},"Usage"),n.createElement(o.Z.Tab,{href:"/code"},"Code"),n.createElement(o.Z.Tab,{href:"/accessibility"},"Accessibility")),n.createElement(o.Z.TabPanel,null,e.children)))}function u(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}t.default=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,l.ah)(),e.components);return t?n.createElement(t,e,n.createElement(i,e)):i(e)}},89482:function(e,t,a){var l=a(67294),n=a(42972);t.Z=e=>{let{color:t="var(--color-black-90)",size:a="var(--fontsize-body-xl)",style:s={},children:r}=e;return l.createElement("p",{style:{fontSize:a,color:t,maxWidth:600,...s}},(0,n.g)(r))}},26127:function(e,t,a){var l=a(67294),n=a(14160),s=a(76537),r=a(42972);const o="PageTabList",c="PageTabPanel",i="PageTab",u=e=>{var t;let{pageContext:a,children:u}=e;const b=a.frontmatter.slug,m=Array.isArray(u)?u:[u],d=m.find((e=>(0,l.isValidElement)(e)&&e.type.componentName===o)),p=m.find((e=>(0,l.isValidElement)(e)&&e.type.componentName===c)),h=null===(t=d.props)||void 0===t?void 0:t.children.filter((e=>e.type.componentName===i)),g=h.findIndex((e=>b.endsWith(e.props.href))),f=-1===g?0:g,_=0===f?b:(e=>`/${e.trim().split("/").filter((e=>!!e)).slice(0,-1).join("/")}`)(b);return l.createElement(s.a,{initiallyActiveTab:f},l.createElement(s.a.TabList,{className:"page-tabs-list"},h.map((e=>l.createElement(s.a.Tab,{key:e.props.href,onClick:()=>(0,n.navigate)(`${"/"===e.props.href?_:_+e.props.href}`)},(0,r.g)(e.props.children))))),h.map(((e,t)=>l.createElement(s.a.TabPanel,{key:e.props.href},f===t?p.props.children:l.createElement("div",null)))))},b=e=>{let{children:t}=e;return l.createElement(s.a.TabList,null,t)};b.componentName=o;const m=e=>{let{href:t,slug:a,children:n}=e;return l.createElement(s.a.Tab,null," ",n)};m.componentName=i;const d=e=>{let{children:t}=e;return l.createElement(s.a.TabPanel,null,t)};d.componentName=c,u.TabList=b,u.Tab=m,u.TabPanel=d,t.Z=u},55725:function(e,t,a){var l=a(67294),n=a(3597),s=a(42972);t.Z=e=>{let{children:t,...a}=e;return l.createElement(n.S,a,(0,s.g)(t))}},57674:function(e,t,a){var l=a(67294),n=a(59979);t.Z=()=>{const e={Draft:"The component is work in progress",Beta:"The component is being tested",Stable:"The component has been tested and defects have been fixed",Accessible:"The component has been reviewed for accessibility",Deprecated:"The component will be removed"};return l.createElement(n.T,{placement:"right-end",className:"status-label-tooltip",boxShadow:!0},l.createElement("ul",{className:"status-label-definitions"},Object.keys(e).map((t=>l.createElement("li",{key:t},l.createElement("span",{className:"status-name"},t),l.createElement("span",null,e[t]))))))}}}]);