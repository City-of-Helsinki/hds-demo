"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[21848],{56877:function(e,t,a){a.r(t),a.d(t,{default:function(){return p}});var n=a(28453),l=a(96540),i=a(66280),r=a(63664);const o=e=>{let{children:t,pageContext:a}=e;return l.createElement(r.A,{pageContext:a},t)};function s(e){const t=Object.assign({h2:"h2",a:"a",span:"span",h3:"h3",ul:"ul",li:"li",strong:"strong",h4:"h4",p:"p"},(0,n.RP)(),e.components),{PlaygroundPreview:a,InternalLink:r}=t;return r||d("InternalLink",!0),a||d("PlaygroundPreview",!0),l.createElement(l.Fragment,null,l.createElement(t.h2,{id:"usage",style:{position:"relative"}},"Usage",l.createElement(t.a,{href:"#usage","aria-label":"usage permalink",className:"header-anchor after"},l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<span class="hds-anchor-icon hds-icon hds-icon--link hds-icon--size-xs" aria-hidden="true" style="vertical-align: middle"></span>'}}))),"\n",l.createElement(t.h3,{id:"example",style:{position:"relative"}},"Example",l.createElement(t.a,{href:"#example","aria-label":"example permalink",className:"header-anchor after"},l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<span class="hds-anchor-icon hds-icon hds-icon--link hds-icon--size-xs" aria-hidden="true" style="vertical-align: middle"></span>'}}))),"\n",l.createElement(a,null,l.createElement(i.T,{id:"textarea",label:"Label",placeholder:"Placeholder",helperText:"Assistive text",required:!0,style:{maxWidth:"320px"}})),"\n",l.createElement(t.h3,{id:"principles",style:{position:"relative"}},"Principles",l.createElement(t.a,{href:"#principles","aria-label":"principles permalink",className:"header-anchor after"},l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<span class="hds-anchor-icon hds-icon hds-icon--link hds-icon--size-xs" aria-hidden="true" style="vertical-align: middle"></span>'}}))),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,l.createElement(t.strong,null,"A label should always be provided with a text area.")),"\n",l.createElement(t.li,null,"Use a text area when multiples lines of text is expected. For single line inputs, use a ",l.createElement(r,{href:"/components/text-input"},"TextInput component.")),"\n",l.createElement(t.li,null,"Allow the text area to reflect the length of the content you expect the user to enter."),"\n",l.createElement(t.li,null,"If possible, add programmatic assistance. Detect and pre-fill inputs to reduce errors and save time. Use sentence-case for default values, detected values, and auto-completion text."),"\n",l.createElement(t.li,null,"If possible, do input validation in client-side real-time and provide the user with immediate feedback. See ",l.createElement(r,{href:"/patterns/forms/form-validation"},"HDS Form validation pattern page")," for more information."),"\n",l.createElement(t.li,null,"If possible, be forgiving of different input formats and small mistakes. It can greatly increase user experience of your product if you can fix common mistakes for the user."),"\n",l.createElement(t.li,null,"To decrease a cognitive load of the user, it is recommended to mark all required fields. Remember to provide explanation of the required field indicator at the top of your form."),"\n",l.createElement(t.li,null,"While not required, you can show the current and the expected amount of characters below the text area in the assistive text."),"\n"),"\n",l.createElement(t.h3,{id:"variations",style:{position:"relative"}},"Variations",l.createElement(t.a,{href:"#variations","aria-label":"variations permalink",className:"header-anchor after"},l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<span class="hds-anchor-icon hds-icon hds-icon--link hds-icon--size-xs" aria-hidden="true" style="vertical-align: middle"></span>'}}))),"\n",l.createElement(t.h4,{id:"default",style:{position:"relative"}},"Default",l.createElement(t.a,{href:"#default","aria-label":"default permalink",className:"header-anchor after"},l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<span class="hds-anchor-icon hds-icon hds-icon--link hds-icon--size-xs" aria-hidden="true" style="vertical-align: middle"></span>'}}))),"\n",l.createElement(t.p,null,"A text area is meant for situations where inputted text is multiline or contains more than one sentence."),"\n",l.createElement(a,null,l.createElement(i.T,{id:"textarea-default",label:"Label",placeholder:"Placeholder",helperText:"Assistive text",required:!0,style:{maxWidth:"320px"}})),"\n",l.createElement(t.h4,{id:"with-a-tooltip",style:{position:"relative"}},"With a tooltip",l.createElement(t.a,{href:"#with-a-tooltip","aria-label":"with a tooltip permalink",className:"header-anchor after"},l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<span class="hds-anchor-icon hds-icon hds-icon--link hds-icon--size-xs" aria-hidden="true" style="vertical-align: middle"></span>'}}))),"\n",l.createElement(t.p,null,"A text area can be provided with additional tooltip. Tooltip information should be considered as extra information, for example, why is this information gathered or how is it used. The user should have sufficient information on how to fill the input field in label and assistive text. You can find more information about Tooltips how they are used from the ",l.createElement(r,{href:"/components/tooltip"},"Tooltip documentation page"),"."),"\n",l.createElement(a,null,l.createElement(i.T,{id:"textarea-tooltip",label:"Label",placeholder:"Placeholder",tooltipLabel:"Tooltip label",tooltipButtonLabel:"Tooltip button label",tooltipText:"Tooltips contain nice to have information. Default Tooltip contents should not be longer than two to three sentences. For longer descriptions, provide a link to a separate page.",style:{maxWidth:"320px"}})))}var c=function(e){return void 0===e&&(e={}),l.createElement(o,e,l.createElement(s,e))};function d(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}function h(e){let{children:t}=e;return l.createElement(l.Fragment,null,t)}function p(e){return l.createElement(h,e,l.createElement(c,e))}},66280:function(e,t,a){a.d(t,{T:function(){return o}});var n=a(68795),l=a(96540),i=(a(6453),a(68604)),r=a(42698);const o=l.forwardRef(((e,t)=>{var{className:a="",disabled:o=!1,defaultValue:s,errorText:c,helperText:d,hideLabel:h,invalid:p,id:u,label:m,onChange:f=(()=>null),required:x,style:b,successText:E,infoText:g,tooltipLabel:v,tooltipText:y,tooltipButtonLabel:T}=e,k=(0,n._)(e,["className","disabled","defaultValue","errorText","helperText","hideLabel","invalid","id","label","onChange","required","style","successText","infoText","tooltipLabel","tooltipText","tooltipButtonLabel"]);const w={className:a,errorText:c,helperText:d,hideLabel:h,id:u,invalid:p,label:m,required:x,style:b,successText:E,infoText:g,tooltipLabel:v,tooltipText:y,tooltipButtonLabel:T},L=(0,r.c)(u,d,c,E,g);return l.createElement(i.I,Object.assign({},w),l.createElement("textarea",Object.assign({className:i.t.input,defaultValue:s,disabled:o,id:u,onChange:f,ref:t,required:x,"aria-describedby":L},k)))}))}}]);