import{r as F,p as ae,g as T,t as l,c as re,v as j,cg as se,h as w,aj as H,aA as G,bk as xe,bl as Se,bn as Ne,a8 as Pe,c5 as ue,az as V,ch as Re,av as ke,b0 as ie,bM as Ke,M as Ie,ci as Ce,cj as Oe,ck as _e,bc as De,b as x,bd as ze,d as E,aF as de,an as k,f as D,ax as $e,ap as K,aI as Ae,u as Fe,j as ce,cl as je,ay as oe,k as A,l as Te,aD as Be,c7 as Me,cm as pe,cn as Le}from"./index-C89OI0f9.js";import{u as Ee}from"./use-keyboard-CzUaIFAX.js";function He(e,r,a){if(!r)return e;const t=F(e.value);let n=null;return ae(e,o=>{n!==null&&window.clearTimeout(n),o===!0?a&&!a.value?t.value=!0:n=window.setTimeout(()=>{t.value=!0},r):t.value=!1}),t}const fe=T({name:"DropdownDivider",props:{clsPrefix:{type:String,required:!0}},render(){return l("div",{class:`${this.clsPrefix}-dropdown-divider`})}}),te=re("n-dropdown-menu"),X=re("n-dropdown"),le=re("n-dropdown-option");function ne(e,r){return e.type==="submenu"||e.type===void 0&&e[r]!==void 0}function Ue(e){return e.type==="group"}function ve(e){return e.type==="divider"}function We(e){return e.type==="render"}const he=T({name:"DropdownOption",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0},parentKey:{type:[String,Number],default:null},placement:{type:String,default:"right-start"},props:Object,scrollable:Boolean},setup(e){const r=j(X),{hoverKeyRef:a,keyboardKeyRef:t,lastToggledSubmenuKeyRef:n,pendingKeyPathRef:o,activeKeyPathRef:p,animatedRef:f,mergedShowRef:c,renderLabelRef:S,renderIconRef:g,labelFieldRef:N,childrenFieldRef:I,renderOptionRef:P,nodePropsRef:C,menuPropsRef:B}=r,m=j(le,null),O=j(te),U=j(se),J=w(()=>e.tmNode.rawNode),W=w(()=>{const{value:d}=I;return ne(e.tmNode.rawNode,d)}),Q=w(()=>{const{disabled:d}=e.tmNode;return d}),Y=w(()=>{if(!W.value)return!1;const{key:d,disabled:b}=e.tmNode;if(b)return!1;const{value:R}=a,{value:z}=t,{value:ee}=n,{value:$}=o;return R!==null?$.includes(d):z!==null?$.includes(d)&&$[$.length-1]!==d:ee!==null?$.includes(d):!1}),Z=w(()=>t.value===null&&!f.value),q=He(Y,300,Z),M=w(()=>!!(m!=null&&m.enteringSubmenuRef.value)),L=F(!1);H(le,{enteringSubmenuRef:L});function _(){L.value=!0}function i(){L.value=!1}function h(){const{parentKey:d,tmNode:b}=e;b.disabled||c.value&&(n.value=d,t.value=null,a.value=b.key)}function u(){const{tmNode:d}=e;d.disabled||c.value&&a.value!==d.key&&h()}function s(d){if(e.tmNode.disabled||!c.value)return;const{relatedTarget:b}=d;b&&!ie({target:b},"dropdownOption")&&!ie({target:b},"scrollbarRail")&&(a.value=null)}function y(){const{value:d}=W,{tmNode:b}=e;c.value&&!d&&!b.disabled&&(r.doSelect(b.key,b.rawNode),r.doUpdateShow(!1))}return{labelField:N,renderLabel:S,renderIcon:g,siblingHasIcon:O.showIconRef,siblingHasSubmenu:O.hasSubmenuRef,menuProps:B,popoverBody:U,animated:f,mergedShowSubmenu:w(()=>q.value&&!M.value),rawNode:J,hasSubmenu:W,pending:G(()=>{const{value:d}=o,{key:b}=e.tmNode;return d.includes(b)}),childActive:G(()=>{const{value:d}=p,{key:b}=e.tmNode,R=d.findIndex(z=>b===z);return R===-1?!1:R<d.length-1}),active:G(()=>{const{value:d}=p,{key:b}=e.tmNode,R=d.findIndex(z=>b===z);return R===-1?!1:R===d.length-1}),mergedDisabled:Q,renderOption:P,nodeProps:C,handleClick:y,handleMouseMove:u,handleMouseEnter:h,handleMouseLeave:s,handleSubmenuBeforeEnter:_,handleSubmenuAfterEnter:i}},render(){var e,r;const{animated:a,rawNode:t,mergedShowSubmenu:n,clsPrefix:o,siblingHasIcon:p,siblingHasSubmenu:f,renderLabel:c,renderIcon:S,renderOption:g,nodeProps:N,props:I,scrollable:P}=this;let C=null;if(n){const U=(e=this.menuProps)===null||e===void 0?void 0:e.call(this,t,t.children);C=l(be,Object.assign({},U,{clsPrefix:o,scrollable:this.scrollable,tmNodes:this.tmNode.children,parentKey:this.tmNode.key}))}const B={class:[`${o}-dropdown-option-body`,this.pending&&`${o}-dropdown-option-body--pending`,this.active&&`${o}-dropdown-option-body--active`,this.childActive&&`${o}-dropdown-option-body--child-active`,this.mergedDisabled&&`${o}-dropdown-option-body--disabled`],onMousemove:this.handleMouseMove,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onClick:this.handleClick},m=N==null?void 0:N(t),O=l("div",Object.assign({class:[`${o}-dropdown-option`,m==null?void 0:m.class],"data-dropdown-option":!0},m),l("div",ue(B,I),[l("div",{class:[`${o}-dropdown-option-body__prefix`,p&&`${o}-dropdown-option-body__prefix--show-icon`]},[S?S(t):V(t.icon)]),l("div",{"data-dropdown-option":!0,class:`${o}-dropdown-option-body__label`},c?c(t):V((r=t[this.labelField])!==null&&r!==void 0?r:t.title)),l("div",{"data-dropdown-option":!0,class:[`${o}-dropdown-option-body__suffix`,f&&`${o}-dropdown-option-body__suffix--has-submenu`]},this.hasSubmenu?l(Re,null,{default:()=>l(ke,null)}):null)]),this.hasSubmenu?l(xe,null,{default:()=>[l(Se,null,{default:()=>l("div",{class:`${o}-dropdown-offset-container`},l(Ne,{show:this.mergedShowSubmenu,placement:this.placement,to:P&&this.popoverBody||void 0,teleportDisabled:!P},{default:()=>l("div",{class:`${o}-dropdown-menu-wrapper`},a?l(Pe,{onBeforeEnter:this.handleSubmenuBeforeEnter,onAfterEnter:this.handleSubmenuAfterEnter,name:"fade-in-scale-up-transition",appear:!0},{default:()=>C}):C)}))})]}):null);return g?g({node:O,option:t}):O}}),qe=T({name:"DropdownGroupHeader",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(){const{showIconRef:e,hasSubmenuRef:r}=j(te),{renderLabelRef:a,labelFieldRef:t,nodePropsRef:n,renderOptionRef:o}=j(X);return{labelField:t,showIcon:e,hasSubmenu:r,renderLabel:a,nodeProps:n,renderOption:o}},render(){var e;const{clsPrefix:r,hasSubmenu:a,showIcon:t,nodeProps:n,renderLabel:o,renderOption:p}=this,{rawNode:f}=this.tmNode,c=l("div",Object.assign({class:`${r}-dropdown-option`},n==null?void 0:n(f)),l("div",{class:`${r}-dropdown-option-body ${r}-dropdown-option-body--group`},l("div",{"data-dropdown-option":!0,class:[`${r}-dropdown-option-body__prefix`,t&&`${r}-dropdown-option-body__prefix--show-icon`]},V(f.icon)),l("div",{class:`${r}-dropdown-option-body__label`,"data-dropdown-option":!0},o?o(f):V((e=f.title)!==null&&e!==void 0?e:f[this.labelField])),l("div",{class:[`${r}-dropdown-option-body__suffix`,a&&`${r}-dropdown-option-body__suffix--has-submenu`],"data-dropdown-option":!0})));return p?p({node:c,option:f}):c}}),Ge=T({name:"NDropdownGroup",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0},parentKey:{type:[String,Number],default:null}},render(){const{tmNode:e,parentKey:r,clsPrefix:a}=this,{children:t}=e;return l(Ie,null,l(qe,{clsPrefix:a,tmNode:e,key:e.key}),t==null?void 0:t.map(n=>{const{rawNode:o}=n;return o.show===!1?null:ve(o)?l(fe,{clsPrefix:a,key:n.key}):n.isGroup?(Ke("dropdown","`group` node is not allowed to be put in `group` node."),null):l(he,{clsPrefix:a,tmNode:n,parentKey:r,key:n.key})}))}}),Ve=T({name:"DropdownRenderOption",props:{tmNode:{type:Object,required:!0}},render(){const{rawNode:{render:e,props:r}}=this.tmNode;return l("div",r,[e==null?void 0:e()])}}),be=T({name:"DropdownMenu",props:{scrollable:Boolean,showArrow:Boolean,arrowStyle:[String,Object],clsPrefix:{type:String,required:!0},tmNodes:{type:Array,default:()=>[]},parentKey:{type:[String,Number],default:null}},setup(e){const{renderIconRef:r,childrenFieldRef:a}=j(X);H(te,{showIconRef:w(()=>{const n=r.value;return e.tmNodes.some(o=>{var p;if(o.isGroup)return(p=o.children)===null||p===void 0?void 0:p.some(({rawNode:c})=>n?n(c):c.icon);const{rawNode:f}=o;return n?n(f):f.icon})}),hasSubmenuRef:w(()=>{const{value:n}=a;return e.tmNodes.some(o=>{var p;if(o.isGroup)return(p=o.children)===null||p===void 0?void 0:p.some(({rawNode:c})=>ne(c,n));const{rawNode:f}=o;return ne(f,n)})})});const t=F(null);return H(Ce,null),H(Oe,null),H(se,t),{bodyRef:t}},render(){const{parentKey:e,clsPrefix:r,scrollable:a}=this,t=this.tmNodes.map(n=>{const{rawNode:o}=n;return o.show===!1?null:We(o)?l(Ve,{tmNode:n,key:n.key}):ve(o)?l(fe,{clsPrefix:r,key:n.key}):Ue(o)?l(Ge,{clsPrefix:r,tmNode:n,parentKey:e,key:n.key}):l(he,{clsPrefix:r,tmNode:n,parentKey:e,key:n.key,props:o.props,scrollable:a})});return l("div",{class:[`${r}-dropdown-menu`,a&&`${r}-dropdown-menu--scrollable`],ref:"bodyRef"},a?l(De,{contentClass:`${r}-dropdown-menu__content`},{default:()=>t}):t,this.showArrow?_e({clsPrefix:r,arrowStyle:this.arrowStyle,arrowClass:void 0,arrowWrapperClass:void 0,arrowWrapperStyle:void 0}):null)}}),Xe=x("dropdown-menu",`
 transform-origin: var(--v-transform-origin);
 background-color: var(--n-color);
 border-radius: var(--n-border-radius);
 box-shadow: var(--n-box-shadow);
 position: relative;
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
`,[ze(),x("dropdown-option",`
 position: relative;
 `,[E("a",`
 text-decoration: none;
 color: inherit;
 outline: none;
 `,[E("&::before",`
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),x("dropdown-option-body",`
 display: flex;
 cursor: pointer;
 position: relative;
 height: var(--n-option-height);
 line-height: var(--n-option-height);
 font-size: var(--n-font-size);
 color: var(--n-option-text-color);
 transition: color .3s var(--n-bezier);
 `,[E("&::before",`
 content: "";
 position: absolute;
 top: 0;
 bottom: 0;
 left: 4px;
 right: 4px;
 transition: background-color .3s var(--n-bezier);
 border-radius: var(--n-border-radius);
 `),de("disabled",[k("pending",`
 color: var(--n-option-text-color-hover);
 `,[D("prefix, suffix",`
 color: var(--n-option-text-color-hover);
 `),E("&::before","background-color: var(--n-option-color-hover);")]),k("active",`
 color: var(--n-option-text-color-active);
 `,[D("prefix, suffix",`
 color: var(--n-option-text-color-active);
 `),E("&::before","background-color: var(--n-option-color-active);")]),k("child-active",`
 color: var(--n-option-text-color-child-active);
 `,[D("prefix, suffix",`
 color: var(--n-option-text-color-child-active);
 `)])]),k("disabled",`
 cursor: not-allowed;
 opacity: var(--n-option-opacity-disabled);
 `),k("group",`
 font-size: calc(var(--n-font-size) - 1px);
 color: var(--n-group-header-text-color);
 `,[D("prefix",`
 width: calc(var(--n-option-prefix-width) / 2);
 `,[k("show-icon",`
 width: calc(var(--n-option-icon-prefix-width) / 2);
 `)])]),D("prefix",`
 width: var(--n-option-prefix-width);
 display: flex;
 justify-content: center;
 align-items: center;
 color: var(--n-prefix-color);
 transition: color .3s var(--n-bezier);
 z-index: 1;
 `,[k("show-icon",`
 width: var(--n-option-icon-prefix-width);
 `),x("icon",`
 font-size: var(--n-option-icon-size);
 `)]),D("label",`
 white-space: nowrap;
 flex: 1;
 z-index: 1;
 `),D("suffix",`
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
 `,[k("has-submenu",`
 width: var(--n-option-icon-suffix-width);
 `),x("icon",`
 font-size: var(--n-option-icon-size);
 `)]),x("dropdown-menu","pointer-events: all;")]),x("dropdown-offset-container",`
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: -4px;
 bottom: -4px;
 `)]),x("dropdown-divider",`
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-divider-color);
 height: 1px;
 margin: 4px 0;
 `),x("dropdown-menu-wrapper",`
 transform-origin: var(--v-transform-origin);
 width: fit-content;
 `),E(">",[x("scrollbar",`
 height: inherit;
 max-height: inherit;
 `)]),de("scrollable",`
 padding: var(--n-padding);
 `),k("scrollable",[D("content",`
 padding: var(--n-padding);
 `)])]),Je={animated:{type:Boolean,default:!0},keyboard:{type:Boolean,default:!0},size:{type:String,default:"medium"},inverted:Boolean,placement:{type:String,default:"bottom"},onSelect:[Function,Array],options:{type:Array,default:()=>[]},menuProps:Function,showArrow:Boolean,renderLabel:Function,renderIcon:Function,renderOption:Function,nodeProps:Function,labelField:{type:String,default:"label"},keyField:{type:String,default:"key"},childrenField:{type:String,default:"children"},value:[String,Number]},Qe=Object.keys(pe),Ye=Object.assign(Object.assign(Object.assign({},pe),Je),ce.props),oo=T({name:"Dropdown",inheritAttrs:!1,props:Ye,setup(e){const r=F(!1),a=$e(K(e,"show"),r),t=w(()=>{const{keyField:i,childrenField:h}=e;return Ae(e.options,{getKey(u){return u[i]},getDisabled(u){return u.disabled===!0},getIgnored(u){return u.type==="divider"||u.type==="render"},getChildren(u){return u[h]}})}),n=w(()=>t.value.treeNodes),o=F(null),p=F(null),f=F(null),c=w(()=>{var i,h,u;return(u=(h=(i=o.value)!==null&&i!==void 0?i:p.value)!==null&&h!==void 0?h:f.value)!==null&&u!==void 0?u:null}),S=w(()=>t.value.getPath(c.value).keyPath),g=w(()=>t.value.getPath(e.value).keyPath),N=G(()=>e.keyboard&&a.value);Ee({keydown:{ArrowUp:{prevent:!0,handler:Q},ArrowRight:{prevent:!0,handler:W},ArrowDown:{prevent:!0,handler:Y},ArrowLeft:{prevent:!0,handler:J},Enter:{prevent:!0,handler:Z},Escape:U}},N);const{mergedClsPrefixRef:I,inlineThemeDisabled:P}=Fe(e),C=ce("Dropdown","-dropdown",Xe,je,e,I);H(X,{labelFieldRef:K(e,"labelField"),childrenFieldRef:K(e,"childrenField"),renderLabelRef:K(e,"renderLabel"),renderIconRef:K(e,"renderIcon"),hoverKeyRef:o,keyboardKeyRef:p,lastToggledSubmenuKeyRef:f,pendingKeyPathRef:S,activeKeyPathRef:g,animatedRef:K(e,"animated"),mergedShowRef:a,nodePropsRef:K(e,"nodeProps"),renderOptionRef:K(e,"renderOption"),menuPropsRef:K(e,"menuProps"),doSelect:B,doUpdateShow:m}),ae(a,i=>{!e.animated&&!i&&O()});function B(i,h){const{onSelect:u}=e;u&&oe(u,i,h)}function m(i){const{"onUpdate:show":h,onUpdateShow:u}=e;h&&oe(h,i),u&&oe(u,i),r.value=i}function O(){o.value=null,p.value=null,f.value=null}function U(){m(!1)}function J(){M("left")}function W(){M("right")}function Q(){M("up")}function Y(){M("down")}function Z(){const i=q();i!=null&&i.isLeaf&&a.value&&(B(i.key,i.rawNode),m(!1))}function q(){var i;const{value:h}=t,{value:u}=c;return!h||u===null?null:(i=h.getNode(u))!==null&&i!==void 0?i:null}function M(i){const{value:h}=c,{value:{getFirstAvailableNode:u}}=t;let s=null;if(h===null){const y=u();y!==null&&(s=y.key)}else{const y=q();if(y){let d;switch(i){case"down":d=y.getNext();break;case"up":d=y.getPrev();break;case"right":d=y.getChild();break;case"left":d=y.getParent();break}d&&(s=d.key)}}s!==null&&(o.value=null,p.value=s)}const L=w(()=>{const{size:i,inverted:h}=e,{common:{cubicBezierEaseInOut:u},self:s}=C.value,{padding:y,dividerColor:d,borderRadius:b,optionOpacityDisabled:R,[A("optionIconSuffixWidth",i)]:z,[A("optionSuffixWidth",i)]:ee,[A("optionIconPrefixWidth",i)]:$,[A("optionPrefixWidth",i)]:we,[A("fontSize",i)]:me,[A("optionHeight",i)]:ye,[A("optionIconSize",i)]:ge}=s,v={"--n-bezier":u,"--n-font-size":me,"--n-padding":y,"--n-border-radius":b,"--n-option-height":ye,"--n-option-prefix-width":we,"--n-option-icon-prefix-width":$,"--n-option-suffix-width":ee,"--n-option-icon-suffix-width":z,"--n-option-icon-size":ge,"--n-divider-color":d,"--n-option-opacity-disabled":R};return h?(v["--n-color"]=s.colorInverted,v["--n-option-color-hover"]=s.optionColorHoverInverted,v["--n-option-color-active"]=s.optionColorActiveInverted,v["--n-option-text-color"]=s.optionTextColorInverted,v["--n-option-text-color-hover"]=s.optionTextColorHoverInverted,v["--n-option-text-color-active"]=s.optionTextColorActiveInverted,v["--n-option-text-color-child-active"]=s.optionTextColorChildActiveInverted,v["--n-prefix-color"]=s.prefixColorInverted,v["--n-suffix-color"]=s.suffixColorInverted,v["--n-group-header-text-color"]=s.groupHeaderTextColorInverted):(v["--n-color"]=s.color,v["--n-option-color-hover"]=s.optionColorHover,v["--n-option-color-active"]=s.optionColorActive,v["--n-option-text-color"]=s.optionTextColor,v["--n-option-text-color-hover"]=s.optionTextColorHover,v["--n-option-text-color-active"]=s.optionTextColorActive,v["--n-option-text-color-child-active"]=s.optionTextColorChildActive,v["--n-prefix-color"]=s.prefixColor,v["--n-suffix-color"]=s.suffixColor,v["--n-group-header-text-color"]=s.groupHeaderTextColor),v}),_=P?Te("dropdown",w(()=>`${e.size[0]}${e.inverted?"i":""}`),L,e):void 0;return{mergedClsPrefix:I,mergedTheme:C,tmNodes:n,mergedShow:a,handleAfterLeave:()=>{e.animated&&O()},doUpdateShow:m,cssVars:P?void 0:L,themeClass:_==null?void 0:_.themeClass,onRender:_==null?void 0:_.onRender}},render(){const e=(t,n,o,p,f)=>{var c;const{mergedClsPrefix:S,menuProps:g}=this;(c=this.onRender)===null||c===void 0||c.call(this);const N=(g==null?void 0:g(void 0,this.tmNodes.map(P=>P.rawNode)))||{},I={ref:Le(n),class:[t,`${S}-dropdown`,this.themeClass],clsPrefix:S,tmNodes:this.tmNodes,style:[...o,this.cssVars],showArrow:this.showArrow,arrowStyle:this.arrowStyle,scrollable:this.scrollable,onMouseenter:p,onMouseleave:f};return l(be,ue(this.$attrs,I,N))},{mergedTheme:r}=this,a={show:this.mergedShow,theme:r.peers.Popover,themeOverrides:r.peerOverrides.Popover,internalOnAfterLeave:this.handleAfterLeave,internalRenderBody:e,onUpdateShow:this.doUpdateShow,"onUpdate:show":void 0};return l(Me,Object.assign({},Be(this.$props,Qe),a),{trigger:()=>{var t,n;return(n=(t=this.$slots).default)===null||n===void 0?void 0:n.call(t)}})}});export{oo as N};
