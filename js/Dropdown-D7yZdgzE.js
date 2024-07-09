import{r as K,p as pe,b as C,aL as te,al as I,g as F,cf as Re,j as X,co as Ne,h as y,cp as Pe,t as d,aI as ke,ba as ie,c as le,v as E,cq as fe,ae as W,aH as V,bx as Ce,by as Ie,bA as Ke,at as Oe,aG as J,cr as _e,aC as Te,bh as ae,b_ as $e,M as De,cs as Ae,ct as je,cu as ze,bq as Fe,ap as Be,d as U,f as z,aE as Le,ai as D,aO as Me,u as Ee,cv as He,aF as ne,k as M,l as qe,aJ as Ue,b3 as We,cw as ve,cx as Ge}from"./index-D8FvNXUN.js";import{u as Ve}from"./use-keyboard-cUwMenjY.js";function Je(e,n,l){if(!n)return e;const o=K(e.value);let r=null;return pe(e,t=>{r!==null&&window.clearTimeout(r),t===!0?l&&!l.value?o.value=!0:r=window.setTimeout(()=>{o.value=!0},n):o.value=!1}),o}const Xe=C("ellipsis",{overflow:"hidden"},[te("line-clamp",`
 white-space: nowrap;
 display: inline-block;
 vertical-align: bottom;
 max-width: 100%;
 `),I("line-clamp",`
 display: -webkit-inline-box;
 -webkit-box-orient: vertical;
 `),I("cursor-pointer",`
 cursor: pointer;
 `)]);function se(e){return`${e}-ellipsis--line-clamp`}function ue(e,n){return`${e}-ellipsis--cursor-${n}`}const Qe=Object.assign(Object.assign({},X.props),{expandTrigger:String,lineClamp:[Number,String],tooltip:{type:[Boolean,Object],default:!0}}),uo=F({name:"Ellipsis",inheritAttrs:!1,props:Qe,setup(e,{slots:n,attrs:l}){const o=Re(),r=X("Ellipsis","-ellipsis",Xe,Ne,e,o),t=K(null),h=K(null),v=K(null),u=K(!1),S=y(()=>{const{lineClamp:i}=e,{value:p}=u;return i!==void 0?{textOverflow:"","-webkit-line-clamp":p?"":i}:{textOverflow:p?"":"ellipsis","-webkit-line-clamp":""}});function x(){let i=!1;const{value:p}=u;if(p)return!0;const{value:w}=t;if(w){const{lineClamp:T}=e;if(P(w),T!==void 0)i=w.scrollHeight<=w.offsetHeight;else{const{value:A}=h;A&&(i=A.getBoundingClientRect().width<=w.getBoundingClientRect().width)}_(w,i)}return i}const R=y(()=>e.expandTrigger==="click"?()=>{var i;const{value:p}=u;p&&((i=v.value)===null||i===void 0||i.setShow(!1)),u.value=!p}:void 0);Pe(()=>{var i;e.tooltip&&((i=v.value)===null||i===void 0||i.setShow(!1))});const O=()=>d("span",Object.assign({},ie(l,{class:[`${o.value}-ellipsis`,e.lineClamp!==void 0?se(o.value):void 0,e.expandTrigger==="click"?ue(o.value,"pointer"):void 0],style:S.value}),{ref:"triggerRef",onClick:R.value,onMouseenter:e.expandTrigger==="click"?x:void 0}),e.lineClamp?n:d("span",{ref:"triggerInnerRef"},n));function P(i){if(!i)return;const p=S.value,w=se(o.value);e.lineClamp!==void 0?k(i,w,"add"):k(i,w,"remove");for(const T in p)i.style[T]!==p[T]&&(i.style[T]=p[T])}function _(i,p){const w=ue(o.value,"pointer");e.expandTrigger==="click"&&!p?k(i,w,"add"):k(i,w,"remove")}function k(i,p,w){w==="add"?i.classList.contains(p)||i.classList.add(p):i.classList.contains(p)&&i.classList.remove(p)}return{mergedTheme:r,triggerRef:t,triggerInnerRef:h,tooltipRef:v,handleClick:R,renderTrigger:O,getTooltipDisabled:x}},render(){var e;const{tooltip:n,renderTrigger:l,$slots:o}=this;if(n){const{mergedTheme:r}=this;return d(ke,Object.assign({ref:"tooltipRef",placement:"top"},n,{getDisabled:this.getTooltipDisabled,theme:r.peers.Tooltip,themeOverrides:r.peerOverrides.Tooltip}),{trigger:l,default:(e=o.tooltip)!==null&&e!==void 0?e:o.default})}else return l()}}),he=F({name:"DropdownDivider",props:{clsPrefix:{type:String,required:!0}},render(){return d("div",{class:`${this.clsPrefix}-dropdown-divider`})}}),de=le("n-dropdown-menu"),Q=le("n-dropdown"),ce=le("n-dropdown-option");function re(e,n){return e.type==="submenu"||e.type===void 0&&e[n]!==void 0}function Ye(e){return e.type==="group"}function be(e){return e.type==="divider"}function Ze(e){return e.type==="render"}const we=F({name:"DropdownOption",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0},parentKey:{type:[String,Number],default:null},placement:{type:String,default:"right-start"},props:Object,scrollable:Boolean},setup(e){const n=E(Q),{hoverKeyRef:l,keyboardKeyRef:o,lastToggledSubmenuKeyRef:r,pendingKeyPathRef:t,activeKeyPathRef:h,animatedRef:v,mergedShowRef:u,renderLabelRef:S,renderIconRef:x,labelFieldRef:R,childrenFieldRef:O,renderOptionRef:P,nodePropsRef:_,menuPropsRef:k}=n,i=E(ce,null),p=E(de),w=E(fe),T=y(()=>e.tmNode.rawNode),A=y(()=>{const{value:s}=O;return re(e.tmNode.rawNode,s)}),Y=y(()=>{const{disabled:s}=e.tmNode;return s}),Z=y(()=>{if(!A.value)return!1;const{key:s,disabled:g}=e.tmNode;if(g)return!1;const{value:$}=l,{value:B}=o,{value:oe}=r,{value:L}=t;return $!==null?L.includes(s):B!==null?L.includes(s)&&L[L.length-1]!==s:oe!==null?L.includes(s):!1}),ee=y(()=>o.value===null&&!v.value),G=Je(Z,300,ee),H=y(()=>!!(i!=null&&i.enteringSubmenuRef.value)),q=K(!1);W(ce,{enteringSubmenuRef:q});function j(){q.value=!0}function a(){q.value=!1}function m(){const{parentKey:s,tmNode:g}=e;g.disabled||u.value&&(r.value=s,o.value=null,l.value=g.key)}function f(){const{tmNode:s}=e;s.disabled||u.value&&l.value!==s.key&&m()}function c(s){if(e.tmNode.disabled||!u.value)return;const{relatedTarget:g}=s;g&&!ae({target:g},"dropdownOption")&&!ae({target:g},"scrollbarRail")&&(l.value=null)}function N(){const{value:s}=A,{tmNode:g}=e;u.value&&!s&&!g.disabled&&(n.doSelect(g.key,g.rawNode),n.doUpdateShow(!1))}return{labelField:R,renderLabel:S,renderIcon:x,siblingHasIcon:p.showIconRef,siblingHasSubmenu:p.hasSubmenuRef,menuProps:k,popoverBody:w,animated:v,mergedShowSubmenu:y(()=>G.value&&!H.value),rawNode:T,hasSubmenu:A,pending:V(()=>{const{value:s}=t,{key:g}=e.tmNode;return s.includes(g)}),childActive:V(()=>{const{value:s}=h,{key:g}=e.tmNode,$=s.findIndex(B=>g===B);return $===-1?!1:$<s.length-1}),active:V(()=>{const{value:s}=h,{key:g}=e.tmNode,$=s.findIndex(B=>g===B);return $===-1?!1:$===s.length-1}),mergedDisabled:Y,renderOption:P,nodeProps:_,handleClick:N,handleMouseMove:f,handleMouseEnter:m,handleMouseLeave:c,handleSubmenuBeforeEnter:j,handleSubmenuAfterEnter:a}},render(){var e,n;const{animated:l,rawNode:o,mergedShowSubmenu:r,clsPrefix:t,siblingHasIcon:h,siblingHasSubmenu:v,renderLabel:u,renderIcon:S,renderOption:x,nodeProps:R,props:O,scrollable:P}=this;let _=null;if(r){const w=(e=this.menuProps)===null||e===void 0?void 0:e.call(this,o,o.children);_=d(me,Object.assign({},w,{clsPrefix:t,scrollable:this.scrollable,tmNodes:this.tmNode.children,parentKey:this.tmNode.key}))}const k={class:[`${t}-dropdown-option-body`,this.pending&&`${t}-dropdown-option-body--pending`,this.active&&`${t}-dropdown-option-body--active`,this.childActive&&`${t}-dropdown-option-body--child-active`,this.mergedDisabled&&`${t}-dropdown-option-body--disabled`],onMousemove:this.handleMouseMove,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onClick:this.handleClick},i=R==null?void 0:R(o),p=d("div",Object.assign({class:[`${t}-dropdown-option`,i==null?void 0:i.class],"data-dropdown-option":!0},i),d("div",ie(k,O),[d("div",{class:[`${t}-dropdown-option-body__prefix`,h&&`${t}-dropdown-option-body__prefix--show-icon`]},[S?S(o):J(o.icon)]),d("div",{"data-dropdown-option":!0,class:`${t}-dropdown-option-body__label`},u?u(o):J((n=o[this.labelField])!==null&&n!==void 0?n:o.title)),d("div",{"data-dropdown-option":!0,class:[`${t}-dropdown-option-body__suffix`,v&&`${t}-dropdown-option-body__suffix--has-submenu`]},this.hasSubmenu?d(_e,null,{default:()=>d(Te,null)}):null)]),this.hasSubmenu?d(Ce,null,{default:()=>[d(Ie,null,{default:()=>d("div",{class:`${t}-dropdown-offset-container`},d(Ke,{show:this.mergedShowSubmenu,placement:this.placement,to:P&&this.popoverBody||void 0,teleportDisabled:!P},{default:()=>d("div",{class:`${t}-dropdown-menu-wrapper`},l?d(Oe,{onBeforeEnter:this.handleSubmenuBeforeEnter,onAfterEnter:this.handleSubmenuAfterEnter,name:"fade-in-scale-up-transition",appear:!0},{default:()=>_}):_)}))})]}):null);return x?x({node:p,option:o}):p}}),eo=F({name:"DropdownGroupHeader",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(){const{showIconRef:e,hasSubmenuRef:n}=E(de),{renderLabelRef:l,labelFieldRef:o,nodePropsRef:r,renderOptionRef:t}=E(Q);return{labelField:o,showIcon:e,hasSubmenu:n,renderLabel:l,nodeProps:r,renderOption:t}},render(){var e;const{clsPrefix:n,hasSubmenu:l,showIcon:o,nodeProps:r,renderLabel:t,renderOption:h}=this,{rawNode:v}=this.tmNode,u=d("div",Object.assign({class:`${n}-dropdown-option`},r==null?void 0:r(v)),d("div",{class:`${n}-dropdown-option-body ${n}-dropdown-option-body--group`},d("div",{"data-dropdown-option":!0,class:[`${n}-dropdown-option-body__prefix`,o&&`${n}-dropdown-option-body__prefix--show-icon`]},J(v.icon)),d("div",{class:`${n}-dropdown-option-body__label`,"data-dropdown-option":!0},t?t(v):J((e=v.title)!==null&&e!==void 0?e:v[this.labelField])),d("div",{class:[`${n}-dropdown-option-body__suffix`,l&&`${n}-dropdown-option-body__suffix--has-submenu`],"data-dropdown-option":!0})));return h?h({node:u,option:v}):u}}),oo=F({name:"NDropdownGroup",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0},parentKey:{type:[String,Number],default:null}},render(){const{tmNode:e,parentKey:n,clsPrefix:l}=this,{children:o}=e;return d(De,null,d(eo,{clsPrefix:l,tmNode:e,key:e.key}),o==null?void 0:o.map(r=>{const{rawNode:t}=r;return t.show===!1?null:be(t)?d(he,{clsPrefix:l,key:r.key}):r.isGroup?($e("dropdown","`group` node is not allowed to be put in `group` node."),null):d(we,{clsPrefix:l,tmNode:r,parentKey:n,key:r.key})}))}}),no=F({name:"DropdownRenderOption",props:{tmNode:{type:Object,required:!0}},render(){const{rawNode:{render:e,props:n}}=this.tmNode;return d("div",n,[e==null?void 0:e()])}}),me=F({name:"DropdownMenu",props:{scrollable:Boolean,showArrow:Boolean,arrowStyle:[String,Object],clsPrefix:{type:String,required:!0},tmNodes:{type:Array,default:()=>[]},parentKey:{type:[String,Number],default:null}},setup(e){const{renderIconRef:n,childrenFieldRef:l}=E(Q);W(de,{showIconRef:y(()=>{const r=n.value;return e.tmNodes.some(t=>{var h;if(t.isGroup)return(h=t.children)===null||h===void 0?void 0:h.some(({rawNode:u})=>r?r(u):u.icon);const{rawNode:v}=t;return r?r(v):v.icon})}),hasSubmenuRef:y(()=>{const{value:r}=l;return e.tmNodes.some(t=>{var h;if(t.isGroup)return(h=t.children)===null||h===void 0?void 0:h.some(({rawNode:u})=>re(u,r));const{rawNode:v}=t;return re(v,r)})})});const o=K(null);return W(Ae,null),W(je,null),W(fe,o),{bodyRef:o}},render(){const{parentKey:e,clsPrefix:n,scrollable:l}=this,o=this.tmNodes.map(r=>{const{rawNode:t}=r;return t.show===!1?null:Ze(t)?d(no,{tmNode:r,key:r.key}):be(t)?d(he,{clsPrefix:n,key:r.key}):Ye(t)?d(oo,{clsPrefix:n,tmNode:r,parentKey:e,key:r.key}):d(we,{clsPrefix:n,tmNode:r,parentKey:e,key:r.key,props:t.props,scrollable:l})});return d("div",{class:[`${n}-dropdown-menu`,l&&`${n}-dropdown-menu--scrollable`],ref:"bodyRef"},l?d(Fe,{contentClass:`${n}-dropdown-menu__content`},{default:()=>o}):o,this.showArrow?ze({clsPrefix:n,arrowStyle:this.arrowStyle,arrowClass:void 0,arrowWrapperClass:void 0,arrowWrapperStyle:void 0}):null)}}),to=C("dropdown-menu",`
 transform-origin: var(--v-transform-origin);
 background-color: var(--n-color);
 border-radius: var(--n-border-radius);
 box-shadow: var(--n-box-shadow);
 position: relative;
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
`,[Be(),C("dropdown-option",`
 position: relative;
 `,[U("a",`
 text-decoration: none;
 color: inherit;
 outline: none;
 `,[U("&::before",`
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),C("dropdown-option-body",`
 display: flex;
 cursor: pointer;
 position: relative;
 height: var(--n-option-height);
 line-height: var(--n-option-height);
 font-size: var(--n-font-size);
 color: var(--n-option-text-color);
 transition: color .3s var(--n-bezier);
 `,[U("&::before",`
 content: "";
 position: absolute;
 top: 0;
 bottom: 0;
 left: 4px;
 right: 4px;
 transition: background-color .3s var(--n-bezier);
 border-radius: var(--n-border-radius);
 `),te("disabled",[I("pending",`
 color: var(--n-option-text-color-hover);
 `,[z("prefix, suffix",`
 color: var(--n-option-text-color-hover);
 `),U("&::before","background-color: var(--n-option-color-hover);")]),I("active",`
 color: var(--n-option-text-color-active);
 `,[z("prefix, suffix",`
 color: var(--n-option-text-color-active);
 `),U("&::before","background-color: var(--n-option-color-active);")]),I("child-active",`
 color: var(--n-option-text-color-child-active);
 `,[z("prefix, suffix",`
 color: var(--n-option-text-color-child-active);
 `)])]),I("disabled",`
 cursor: not-allowed;
 opacity: var(--n-option-opacity-disabled);
 `),I("group",`
 font-size: calc(var(--n-font-size) - 1px);
 color: var(--n-group-header-text-color);
 `,[z("prefix",`
 width: calc(var(--n-option-prefix-width) / 2);
 `,[I("show-icon",`
 width: calc(var(--n-option-icon-prefix-width) / 2);
 `)])]),z("prefix",`
 width: var(--n-option-prefix-width);
 display: flex;
 justify-content: center;
 align-items: center;
 color: var(--n-prefix-color);
 transition: color .3s var(--n-bezier);
 z-index: 1;
 `,[I("show-icon",`
 width: var(--n-option-icon-prefix-width);
 `),C("icon",`
 font-size: var(--n-option-icon-size);
 `)]),z("label",`
 white-space: nowrap;
 flex: 1;
 z-index: 1;
 `),z("suffix",`
 box-sizing: border-box;
 flex-grow: 0;
 flex-shrink: 0;
 display: flex;
 justify-content: flex-end;
 align-items: center;
 min-width: var(--n-option-suffix-width);
 padding: 0 8px;
 transition: color .3s var(--n-bezier);
 color: var(--n-suffix-color);
 z-index: 1;
 `,[I("has-submenu",`
 width: var(--n-option-icon-suffix-width);
 `),C("icon",`
 font-size: var(--n-option-icon-size);
 `)]),C("dropdown-menu","pointer-events: all;")]),C("dropdown-offset-container",`
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: -4px;
 bottom: -4px;
 `)]),C("dropdown-divider",`
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-divider-color);
 height: 1px;
 margin: 4px 0;
 `),C("dropdown-menu-wrapper",`
 transform-origin: var(--v-transform-origin);
 width: fit-content;
 `),U(">",[C("scrollbar",`
 height: inherit;
 max-height: inherit;
 `)]),te("scrollable",`
 padding: var(--n-padding);
 `),I("scrollable",[z("content",`
 padding: var(--n-padding);
 `)])]),ro={animated:{type:Boolean,default:!0},keyboard:{type:Boolean,default:!0},size:{type:String,default:"medium"},inverted:Boolean,placement:{type:String,default:"bottom"},onSelect:[Function,Array],options:{type:Array,default:()=>[]},menuProps:Function,showArrow:Boolean,renderLabel:Function,renderIcon:Function,renderOption:Function,nodeProps:Function,labelField:{type:String,default:"label"},keyField:{type:String,default:"key"},childrenField:{type:String,default:"children"},value:[String,Number]},io=Object.keys(ve),lo=Object.assign(Object.assign(Object.assign({},ve),ro),X.props),co=F({name:"Dropdown",inheritAttrs:!1,props:lo,setup(e){const n=K(!1),l=Le(D(e,"show"),n),o=y(()=>{const{keyField:a,childrenField:m}=e;return Me(e.options,{getKey(f){return f[a]},getDisabled(f){return f.disabled===!0},getIgnored(f){return f.type==="divider"||f.type==="render"},getChildren(f){return f[m]}})}),r=y(()=>o.value.treeNodes),t=K(null),h=K(null),v=K(null),u=y(()=>{var a,m,f;return(f=(m=(a=t.value)!==null&&a!==void 0?a:h.value)!==null&&m!==void 0?m:v.value)!==null&&f!==void 0?f:null}),S=y(()=>o.value.getPath(u.value).keyPath),x=y(()=>o.value.getPath(e.value).keyPath),R=V(()=>e.keyboard&&l.value);Ve({keydown:{ArrowUp:{prevent:!0,handler:Y},ArrowRight:{prevent:!0,handler:A},ArrowDown:{prevent:!0,handler:Z},ArrowLeft:{prevent:!0,handler:T},Enter:{prevent:!0,handler:ee},Escape:w}},R);const{mergedClsPrefixRef:O,inlineThemeDisabled:P}=Ee(e),_=X("Dropdown","-dropdown",to,He,e,O);W(Q,{labelFieldRef:D(e,"labelField"),childrenFieldRef:D(e,"childrenField"),renderLabelRef:D(e,"renderLabel"),renderIconRef:D(e,"renderIcon"),hoverKeyRef:t,keyboardKeyRef:h,lastToggledSubmenuKeyRef:v,pendingKeyPathRef:S,activeKeyPathRef:x,animatedRef:D(e,"animated"),mergedShowRef:l,nodePropsRef:D(e,"nodeProps"),renderOptionRef:D(e,"renderOption"),menuPropsRef:D(e,"menuProps"),doSelect:k,doUpdateShow:i}),pe(l,a=>{!e.animated&&!a&&p()});function k(a,m){const{onSelect:f}=e;f&&ne(f,a,m)}function i(a){const{"onUpdate:show":m,onUpdateShow:f}=e;m&&ne(m,a),f&&ne(f,a),n.value=a}function p(){t.value=null,h.value=null,v.value=null}function w(){i(!1)}function T(){H("left")}function A(){H("right")}function Y(){H("up")}function Z(){H("down")}function ee(){const a=G();a!=null&&a.isLeaf&&l.value&&(k(a.key,a.rawNode),i(!1))}function G(){var a;const{value:m}=o,{value:f}=u;return!m||f===null?null:(a=m.getNode(f))!==null&&a!==void 0?a:null}function H(a){const{value:m}=u,{value:{getFirstAvailableNode:f}}=o;let c=null;if(m===null){const N=f();N!==null&&(c=N.key)}else{const N=G();if(N){let s;switch(a){case"down":s=N.getNext();break;case"up":s=N.getPrev();break;case"right":s=N.getChild();break;case"left":s=N.getParent();break}s&&(c=s.key)}}c!==null&&(t.value=null,h.value=c)}const q=y(()=>{const{size:a,inverted:m}=e,{common:{cubicBezierEaseInOut:f},self:c}=_.value,{padding:N,dividerColor:s,borderRadius:g,optionOpacityDisabled:$,[M("optionIconSuffixWidth",a)]:B,[M("optionSuffixWidth",a)]:oe,[M("optionIconPrefixWidth",a)]:L,[M("optionPrefixWidth",a)]:ge,[M("fontSize",a)]:ye,[M("optionHeight",a)]:xe,[M("optionIconSize",a)]:Se}=c,b={"--n-bezier":f,"--n-font-size":ye,"--n-padding":N,"--n-border-radius":g,"--n-option-height":xe,"--n-option-prefix-width":ge,"--n-option-icon-prefix-width":L,"--n-option-suffix-width":oe,"--n-option-icon-suffix-width":B,"--n-option-icon-size":Se,"--n-divider-color":s,"--n-option-opacity-disabled":$};return m?(b["--n-color"]=c.colorInverted,b["--n-option-color-hover"]=c.optionColorHoverInverted,b["--n-option-color-active"]=c.optionColorActiveInverted,b["--n-option-text-color"]=c.optionTextColorInverted,b["--n-option-text-color-hover"]=c.optionTextColorHoverInverted,b["--n-option-text-color-active"]=c.optionTextColorActiveInverted,b["--n-option-text-color-child-active"]=c.optionTextColorChildActiveInverted,b["--n-prefix-color"]=c.prefixColorInverted,b["--n-suffix-color"]=c.suffixColorInverted,b["--n-group-header-text-color"]=c.groupHeaderTextColorInverted):(b["--n-color"]=c.color,b["--n-option-color-hover"]=c.optionColorHover,b["--n-option-color-active"]=c.optionColorActive,b["--n-option-text-color"]=c.optionTextColor,b["--n-option-text-color-hover"]=c.optionTextColorHover,b["--n-option-text-color-active"]=c.optionTextColorActive,b["--n-option-text-color-child-active"]=c.optionTextColorChildActive,b["--n-prefix-color"]=c.prefixColor,b["--n-suffix-color"]=c.suffixColor,b["--n-group-header-text-color"]=c.groupHeaderTextColor),b}),j=P?qe("dropdown",y(()=>`${e.size[0]}${e.inverted?"i":""}`),q,e):void 0;return{mergedClsPrefix:O,mergedTheme:_,tmNodes:r,mergedShow:l,handleAfterLeave:()=>{e.animated&&p()},doUpdateShow:i,cssVars:P?void 0:q,themeClass:j==null?void 0:j.themeClass,onRender:j==null?void 0:j.onRender}},render(){const e=(o,r,t,h,v)=>{var u;const{mergedClsPrefix:S,menuProps:x}=this;(u=this.onRender)===null||u===void 0||u.call(this);const R=(x==null?void 0:x(void 0,this.tmNodes.map(P=>P.rawNode)))||{},O={ref:Ge(r),class:[o,`${S}-dropdown`,this.themeClass],clsPrefix:S,tmNodes:this.tmNodes,style:[...t,this.cssVars],showArrow:this.showArrow,arrowStyle:this.arrowStyle,scrollable:this.scrollable,onMouseenter:h,onMouseleave:v};return d(me,ie(this.$attrs,O,R))},{mergedTheme:n}=this,l={show:this.mergedShow,theme:n.peers.Popover,themeOverrides:n.peerOverrides.Popover,internalOnAfterLeave:this.handleAfterLeave,internalRenderBody:e,onUpdateShow:this.doUpdateShow,"onUpdate:show":void 0};return d(We,Object.assign({},Ue(this.$props,io),l),{trigger:()=>{var o,r;return(r=(o=this.$slots).default)===null||r===void 0?void 0:r.call(o)}})}});export{co as N,uo as _,ue as a,se as c,Qe as e,Xe as s};
