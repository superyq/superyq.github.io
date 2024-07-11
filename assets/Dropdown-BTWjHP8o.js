import{r as T,m as ue,g as I,q as d,b as S,a8 as N,d as D,j as Z,u as ce,bF as Re,h as m,k as pe,b5 as Pe,aD as fe,b3 as re,c as ie,s as B,bG as he,af as H,aM as W,ai as ke,aj as Ce,am as Ie,an as Ke,bp as G,as as le,U as _e,bH as $e,bI as Oe,bJ as ze,bK as De,a9 as Ae,aa as ae,f as z,ae as je,ad as C,av as ne,br as Fe,b6 as Te,bL as ve,bf as Be,bM as Le,y as F,bN as Me}from"./index-BkQ_KyLE.js";import{u as Ee}from"./use-keyboard-Bh1bouc9.js";function He(e,t,i){if(!t)return e;const r=T(e.value);let n=null;return ue(e,o=>{n!==null&&window.clearTimeout(n),o===!0?i&&!i.value?r.value=!0:n=window.setTimeout(()=>{r.value=!0},t):r.value=!1}),r}const Ue=I({name:"ChevronRight",render(){return d("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},d("path",{d:"M5.64645 3.14645C5.45118 3.34171 5.45118 3.65829 5.64645 3.85355L9.79289 8L5.64645 12.1464C5.45118 12.3417 5.45118 12.6583 5.64645 12.8536C5.84171 13.0488 6.15829 13.0488 6.35355 12.8536L10.8536 8.35355C11.0488 8.15829 11.0488 7.84171 10.8536 7.64645L6.35355 3.14645C6.15829 2.95118 5.84171 2.95118 5.64645 3.14645Z",fill:"currentColor"}))}}),be=I({name:"DropdownDivider",props:{clsPrefix:{type:String,required:!0}},render(){return d("div",{class:`${this.clsPrefix}-dropdown-divider`})}}),qe=S("icon",`
 height: 1em;
 width: 1em;
 line-height: 1em;
 text-align: center;
 display: inline-block;
 position: relative;
 fill: currentColor;
 transform: translateZ(0);
`,[N("color-transition",{transition:"color .3s var(--n-bezier)"}),N("depth",{color:"var(--n-color)"},[D("svg",{opacity:"var(--n-opacity)",transition:"opacity .3s var(--n-bezier)"})]),D("svg",{height:"1em",width:"1em"})]),Ve=Object.assign(Object.assign({},Z.props),{depth:[String,Number],size:[Number,String],color:String,component:Object}),We=I({_n_icon__:!0,name:"Icon",inheritAttrs:!1,props:Ve,setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:i}=ce(e),r=Z("Icon","-icon",qe,Re,e,t),n=m(()=>{const{depth:s}=e,{common:{cubicBezierEaseInOut:c},self:f}=r.value;if(s!==void 0){const{color:x,[`opacity${s}Depth`]:y}=f;return{"--n-bezier":c,"--n-color":x,"--n-opacity":y}}return{"--n-bezier":c,"--n-color":"","--n-opacity":""}}),o=i?pe("icon",m(()=>`${e.depth||"d"}`),n,e):void 0;return{mergedClsPrefix:t,mergedStyle:m(()=>{const{size:s,color:c}=e;return{fontSize:Pe(s),color:c}}),cssVars:i?void 0:n,themeClass:o==null?void 0:o.themeClass,onRender:o==null?void 0:o.onRender}},render(){var e;const{$parent:t,depth:i,mergedClsPrefix:r,component:n,onRender:o,themeClass:s}=this;return!((e=t==null?void 0:t.$options)===null||e===void 0)&&e._n_icon__&&fe("icon","don't wrap `n-icon` inside `n-icon`"),o==null||o(),d("i",re(this.$attrs,{role:"img",class:[`${r}-icon`,s,{[`${r}-icon--depth`]:i,[`${r}-icon--color-transition`]:i!==void 0}],style:[this.cssVars,this.mergedStyle]}),n?d(n):this.$slots)}}),de=ie("n-dropdown-menu"),J=ie("n-dropdown"),se=ie("n-dropdown-option");function te(e,t){return e.type==="submenu"||e.type===void 0&&e[t]!==void 0}function Ge(e){return e.type==="group"}function me(e){return e.type==="divider"}function Ze(e){return e.type==="render"}const we=I({name:"DropdownOption",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0},parentKey:{type:[String,Number],default:null},placement:{type:String,default:"right-start"},props:Object,scrollable:Boolean},setup(e){const t=B(J),{hoverKeyRef:i,keyboardKeyRef:r,lastToggledSubmenuKeyRef:n,pendingKeyPathRef:o,activeKeyPathRef:s,animatedRef:c,mergedShowRef:f,renderLabelRef:x,renderIconRef:y,labelFieldRef:R,childrenFieldRef:K,renderOptionRef:P,nodePropsRef:_,menuPropsRef:L}=t,w=B(se,null),$=B(de),U=B(he),X=m(()=>e.tmNode.rawNode),q=m(()=>{const{value:a}=K;return te(e.tmNode.rawNode,a)}),Q=m(()=>{const{disabled:a}=e.tmNode;return a}),Y=m(()=>{if(!q.value)return!1;const{key:a,disabled:b}=e.tmNode;if(b)return!1;const{value:k}=i,{value:A}=r,{value:oe}=n,{value:j}=o;return k!==null?j.includes(a):A!==null?j.includes(a)&&j[j.length-1]!==a:oe!==null?j.includes(a):!1}),ee=m(()=>r.value===null&&!c.value),V=He(Y,300,ee),M=m(()=>!!(w!=null&&w.enteringSubmenuRef.value)),E=T(!1);H(se,{enteringSubmenuRef:E});function O(){E.value=!0}function l(){E.value=!1}function v(){const{parentKey:a,tmNode:b}=e;b.disabled||f.value&&(n.value=a,r.value=null,i.value=b.key)}function p(){const{tmNode:a}=e;a.disabled||f.value&&i.value!==a.key&&v()}function u(a){if(e.tmNode.disabled||!f.value)return;const{relatedTarget:b}=a;b&&!le({target:b},"dropdownOption")&&!le({target:b},"scrollbarRail")&&(i.value=null)}function g(){const{value:a}=q,{tmNode:b}=e;f.value&&!a&&!b.disabled&&(t.doSelect(b.key,b.rawNode),t.doUpdateShow(!1))}return{labelField:R,renderLabel:x,renderIcon:y,siblingHasIcon:$.showIconRef,siblingHasSubmenu:$.hasSubmenuRef,menuProps:L,popoverBody:U,animated:c,mergedShowSubmenu:m(()=>V.value&&!M.value),rawNode:X,hasSubmenu:q,pending:W(()=>{const{value:a}=o,{key:b}=e.tmNode;return a.includes(b)}),childActive:W(()=>{const{value:a}=s,{key:b}=e.tmNode,k=a.findIndex(A=>b===A);return k===-1?!1:k<a.length-1}),active:W(()=>{const{value:a}=s,{key:b}=e.tmNode,k=a.findIndex(A=>b===A);return k===-1?!1:k===a.length-1}),mergedDisabled:Q,renderOption:P,nodeProps:_,handleClick:g,handleMouseMove:p,handleMouseEnter:v,handleMouseLeave:u,handleSubmenuBeforeEnter:O,handleSubmenuAfterEnter:l}},render(){var e,t;const{animated:i,rawNode:r,mergedShowSubmenu:n,clsPrefix:o,siblingHasIcon:s,siblingHasSubmenu:c,renderLabel:f,renderIcon:x,renderOption:y,nodeProps:R,props:K,scrollable:P}=this;let _=null;if(n){const U=(e=this.menuProps)===null||e===void 0?void 0:e.call(this,r,r.children);_=d(ye,Object.assign({},U,{clsPrefix:o,scrollable:this.scrollable,tmNodes:this.tmNode.children,parentKey:this.tmNode.key}))}const L={class:[`${o}-dropdown-option-body`,this.pending&&`${o}-dropdown-option-body--pending`,this.active&&`${o}-dropdown-option-body--active`,this.childActive&&`${o}-dropdown-option-body--child-active`,this.mergedDisabled&&`${o}-dropdown-option-body--disabled`],onMousemove:this.handleMouseMove,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onClick:this.handleClick},w=R==null?void 0:R(r),$=d("div",Object.assign({class:[`${o}-dropdown-option`,w==null?void 0:w.class],"data-dropdown-option":!0},w),d("div",re(L,K),[d("div",{class:[`${o}-dropdown-option-body__prefix`,s&&`${o}-dropdown-option-body__prefix--show-icon`]},[x?x(r):G(r.icon)]),d("div",{"data-dropdown-option":!0,class:`${o}-dropdown-option-body__label`},f?f(r):G((t=r[this.labelField])!==null&&t!==void 0?t:r.title)),d("div",{"data-dropdown-option":!0,class:[`${o}-dropdown-option-body__suffix`,c&&`${o}-dropdown-option-body__suffix--has-submenu`]},this.hasSubmenu?d(We,null,{default:()=>d(Ue,null)}):null)]),this.hasSubmenu?d(ke,null,{default:()=>[d(Ce,null,{default:()=>d("div",{class:`${o}-dropdown-offset-container`},d(Ie,{show:this.mergedShowSubmenu,placement:this.placement,to:P&&this.popoverBody||void 0,teleportDisabled:!P},{default:()=>d("div",{class:`${o}-dropdown-menu-wrapper`},i?d(Ke,{onBeforeEnter:this.handleSubmenuBeforeEnter,onAfterEnter:this.handleSubmenuAfterEnter,name:"fade-in-scale-up-transition",appear:!0},{default:()=>_}):_)}))})]}):null);return y?y({node:$,option:r}):$}}),Je=I({name:"DropdownGroupHeader",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(){const{showIconRef:e,hasSubmenuRef:t}=B(de),{renderLabelRef:i,labelFieldRef:r,nodePropsRef:n,renderOptionRef:o}=B(J);return{labelField:r,showIcon:e,hasSubmenu:t,renderLabel:i,nodeProps:n,renderOption:o}},render(){var e;const{clsPrefix:t,hasSubmenu:i,showIcon:r,nodeProps:n,renderLabel:o,renderOption:s}=this,{rawNode:c}=this.tmNode,f=d("div",Object.assign({class:`${t}-dropdown-option`},n==null?void 0:n(c)),d("div",{class:`${t}-dropdown-option-body ${t}-dropdown-option-body--group`},d("div",{"data-dropdown-option":!0,class:[`${t}-dropdown-option-body__prefix`,r&&`${t}-dropdown-option-body__prefix--show-icon`]},G(c.icon)),d("div",{class:`${t}-dropdown-option-body__label`,"data-dropdown-option":!0},o?o(c):G((e=c.title)!==null&&e!==void 0?e:c[this.labelField])),d("div",{class:[`${t}-dropdown-option-body__suffix`,i&&`${t}-dropdown-option-body__suffix--has-submenu`],"data-dropdown-option":!0})));return s?s({node:f,option:c}):f}}),Xe=I({name:"NDropdownGroup",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0},parentKey:{type:[String,Number],default:null}},render(){const{tmNode:e,parentKey:t,clsPrefix:i}=this,{children:r}=e;return d(_e,null,d(Je,{clsPrefix:i,tmNode:e,key:e.key}),r==null?void 0:r.map(n=>{const{rawNode:o}=n;return o.show===!1?null:me(o)?d(be,{clsPrefix:i,key:n.key}):n.isGroup?(fe("dropdown","`group` node is not allowed to be put in `group` node."),null):d(we,{clsPrefix:i,tmNode:n,parentKey:t,key:n.key})}))}}),Qe=I({name:"DropdownRenderOption",props:{tmNode:{type:Object,required:!0}},render(){const{rawNode:{render:e,props:t}}=this.tmNode;return d("div",t,[e==null?void 0:e()])}}),ye=I({name:"DropdownMenu",props:{scrollable:Boolean,showArrow:Boolean,arrowStyle:[String,Object],clsPrefix:{type:String,required:!0},tmNodes:{type:Array,default:()=>[]},parentKey:{type:[String,Number],default:null}},setup(e){const{renderIconRef:t,childrenFieldRef:i}=B(J);H(de,{showIconRef:m(()=>{const n=t.value;return e.tmNodes.some(o=>{var s;if(o.isGroup)return(s=o.children)===null||s===void 0?void 0:s.some(({rawNode:f})=>n?n(f):f.icon);const{rawNode:c}=o;return n?n(c):c.icon})}),hasSubmenuRef:m(()=>{const{value:n}=i;return e.tmNodes.some(o=>{var s;if(o.isGroup)return(s=o.children)===null||s===void 0?void 0:s.some(({rawNode:f})=>te(f,n));const{rawNode:c}=o;return te(c,n)})})});const r=T(null);return H($e,null),H(Oe,null),H(he,r),{bodyRef:r}},render(){const{parentKey:e,clsPrefix:t,scrollable:i}=this,r=this.tmNodes.map(n=>{const{rawNode:o}=n;return o.show===!1?null:Ze(o)?d(Qe,{tmNode:n,key:n.key}):me(o)?d(be,{clsPrefix:t,key:n.key}):Ge(o)?d(Xe,{clsPrefix:t,tmNode:n,parentKey:e,key:n.key}):d(we,{clsPrefix:t,tmNode:n,parentKey:e,key:n.key,props:o.props,scrollable:i})});return d("div",{class:[`${t}-dropdown-menu`,i&&`${t}-dropdown-menu--scrollable`],ref:"bodyRef"},i?d(De,{contentClass:`${t}-dropdown-menu__content`},{default:()=>r}):r,this.showArrow?ze({clsPrefix:t,arrowStyle:this.arrowStyle,arrowClass:void 0,arrowWrapperClass:void 0,arrowWrapperStyle:void 0}):null)}}),Ye=S("dropdown-menu",`
 transform-origin: var(--v-transform-origin);
 background-color: var(--n-color);
 border-radius: var(--n-border-radius);
 box-shadow: var(--n-box-shadow);
 position: relative;
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
`,[Ae(),S("dropdown-option",`
 position: relative;
 `,[D("a",`
 text-decoration: none;
 color: inherit;
 outline: none;
 `,[D("&::before",`
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),S("dropdown-option-body",`
 display: flex;
 cursor: pointer;
 position: relative;
 height: var(--n-option-height);
 line-height: var(--n-option-height);
 font-size: var(--n-font-size);
 color: var(--n-option-text-color);
 transition: color .3s var(--n-bezier);
 `,[D("&::before",`
 content: "";
 position: absolute;
 top: 0;
 bottom: 0;
 left: 4px;
 right: 4px;
 transition: background-color .3s var(--n-bezier);
 border-radius: var(--n-border-radius);
 `),ae("disabled",[N("pending",`
 color: var(--n-option-text-color-hover);
 `,[z("prefix, suffix",`
 color: var(--n-option-text-color-hover);
 `),D("&::before","background-color: var(--n-option-color-hover);")]),N("active",`
 color: var(--n-option-text-color-active);
 `,[z("prefix, suffix",`
 color: var(--n-option-text-color-active);
 `),D("&::before","background-color: var(--n-option-color-active);")]),N("child-active",`
 color: var(--n-option-text-color-child-active);
 `,[z("prefix, suffix",`
 color: var(--n-option-text-color-child-active);
 `)])]),N("disabled",`
 cursor: not-allowed;
 opacity: var(--n-option-opacity-disabled);
 `),N("group",`
 font-size: calc(var(--n-font-size) - 1px);
 color: var(--n-group-header-text-color);
 `,[z("prefix",`
 width: calc(var(--n-option-prefix-width) / 2);
 `,[N("show-icon",`
 width: calc(var(--n-option-icon-prefix-width) / 2);
 `)])]),z("prefix",`
 width: var(--n-option-prefix-width);
 display: flex;
 justify-content: center;
 align-items: center;
 color: var(--n-prefix-color);
 transition: color .3s var(--n-bezier);
 z-index: 1;
 `,[N("show-icon",`
 width: var(--n-option-icon-prefix-width);
 `),S("icon",`
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
 `,[N("has-submenu",`
 width: var(--n-option-icon-suffix-width);
 `),S("icon",`
 font-size: var(--n-option-icon-size);
 `)]),S("dropdown-menu","pointer-events: all;")]),S("dropdown-offset-container",`
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: -4px;
 bottom: -4px;
 `)]),S("dropdown-divider",`
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-divider-color);
 height: 1px;
 margin: 4px 0;
 `),S("dropdown-menu-wrapper",`
 transform-origin: var(--v-transform-origin);
 width: fit-content;
 `),D(">",[S("scrollbar",`
 height: inherit;
 max-height: inherit;
 `)]),ae("scrollable",`
 padding: var(--n-padding);
 `),N("scrollable",[z("content",`
 padding: var(--n-padding);
 `)])]),eo={animated:{type:Boolean,default:!0},keyboard:{type:Boolean,default:!0},size:{type:String,default:"medium"},inverted:Boolean,placement:{type:String,default:"bottom"},onSelect:[Function,Array],options:{type:Array,default:()=>[]},menuProps:Function,showArrow:Boolean,renderLabel:Function,renderIcon:Function,renderOption:Function,nodeProps:Function,labelField:{type:String,default:"label"},keyField:{type:String,default:"key"},childrenField:{type:String,default:"children"},value:[String,Number]},oo=Object.keys(ve),no=Object.assign(Object.assign(Object.assign({},ve),eo),Z.props),io=I({name:"Dropdown",inheritAttrs:!1,props:no,setup(e){const t=T(!1),i=je(C(e,"show"),t),r=m(()=>{const{keyField:l,childrenField:v}=e;return Be(e.options,{getKey(p){return p[l]},getDisabled(p){return p.disabled===!0},getIgnored(p){return p.type==="divider"||p.type==="render"},getChildren(p){return p[v]}})}),n=m(()=>r.value.treeNodes),o=T(null),s=T(null),c=T(null),f=m(()=>{var l,v,p;return(p=(v=(l=o.value)!==null&&l!==void 0?l:s.value)!==null&&v!==void 0?v:c.value)!==null&&p!==void 0?p:null}),x=m(()=>r.value.getPath(f.value).keyPath),y=m(()=>r.value.getPath(e.value).keyPath),R=W(()=>e.keyboard&&i.value);Ee({keydown:{ArrowUp:{prevent:!0,handler:Q},ArrowRight:{prevent:!0,handler:q},ArrowDown:{prevent:!0,handler:Y},ArrowLeft:{prevent:!0,handler:X},Enter:{prevent:!0,handler:ee},Escape:U}},R);const{mergedClsPrefixRef:K,inlineThemeDisabled:P}=ce(e),_=Z("Dropdown","-dropdown",Ye,Le,e,K);H(J,{labelFieldRef:C(e,"labelField"),childrenFieldRef:C(e,"childrenField"),renderLabelRef:C(e,"renderLabel"),renderIconRef:C(e,"renderIcon"),hoverKeyRef:o,keyboardKeyRef:s,lastToggledSubmenuKeyRef:c,pendingKeyPathRef:x,activeKeyPathRef:y,animatedRef:C(e,"animated"),mergedShowRef:i,nodePropsRef:C(e,"nodeProps"),renderOptionRef:C(e,"renderOption"),menuPropsRef:C(e,"menuProps"),doSelect:L,doUpdateShow:w}),ue(i,l=>{!e.animated&&!l&&$()});function L(l,v){const{onSelect:p}=e;p&&ne(p,l,v)}function w(l){const{"onUpdate:show":v,onUpdateShow:p}=e;v&&ne(v,l),p&&ne(p,l),t.value=l}function $(){o.value=null,s.value=null,c.value=null}function U(){w(!1)}function X(){M("left")}function q(){M("right")}function Q(){M("up")}function Y(){M("down")}function ee(){const l=V();l!=null&&l.isLeaf&&i.value&&(L(l.key,l.rawNode),w(!1))}function V(){var l;const{value:v}=r,{value:p}=f;return!v||p===null?null:(l=v.getNode(p))!==null&&l!==void 0?l:null}function M(l){const{value:v}=f,{value:{getFirstAvailableNode:p}}=r;let u=null;if(v===null){const g=p();g!==null&&(u=g.key)}else{const g=V();if(g){let a;switch(l){case"down":a=g.getNext();break;case"up":a=g.getPrev();break;case"right":a=g.getChild();break;case"left":a=g.getParent();break}a&&(u=a.key)}}u!==null&&(o.value=null,s.value=u)}const E=m(()=>{const{size:l,inverted:v}=e,{common:{cubicBezierEaseInOut:p},self:u}=_.value,{padding:g,dividerColor:a,borderRadius:b,optionOpacityDisabled:k,[F("optionIconSuffixWidth",l)]:A,[F("optionSuffixWidth",l)]:oe,[F("optionIconPrefixWidth",l)]:j,[F("optionPrefixWidth",l)]:ge,[F("fontSize",l)]:xe,[F("optionHeight",l)]:Se,[F("optionIconSize",l)]:Ne}=u,h={"--n-bezier":p,"--n-font-size":xe,"--n-padding":g,"--n-border-radius":b,"--n-option-height":Se,"--n-option-prefix-width":ge,"--n-option-icon-prefix-width":j,"--n-option-suffix-width":oe,"--n-option-icon-suffix-width":A,"--n-option-icon-size":Ne,"--n-divider-color":a,"--n-option-opacity-disabled":k};return v?(h["--n-color"]=u.colorInverted,h["--n-option-color-hover"]=u.optionColorHoverInverted,h["--n-option-color-active"]=u.optionColorActiveInverted,h["--n-option-text-color"]=u.optionTextColorInverted,h["--n-option-text-color-hover"]=u.optionTextColorHoverInverted,h["--n-option-text-color-active"]=u.optionTextColorActiveInverted,h["--n-option-text-color-child-active"]=u.optionTextColorChildActiveInverted,h["--n-prefix-color"]=u.prefixColorInverted,h["--n-suffix-color"]=u.suffixColorInverted,h["--n-group-header-text-color"]=u.groupHeaderTextColorInverted):(h["--n-color"]=u.color,h["--n-option-color-hover"]=u.optionColorHover,h["--n-option-color-active"]=u.optionColorActive,h["--n-option-text-color"]=u.optionTextColor,h["--n-option-text-color-hover"]=u.optionTextColorHover,h["--n-option-text-color-active"]=u.optionTextColorActive,h["--n-option-text-color-child-active"]=u.optionTextColorChildActive,h["--n-prefix-color"]=u.prefixColor,h["--n-suffix-color"]=u.suffixColor,h["--n-group-header-text-color"]=u.groupHeaderTextColor),h}),O=P?pe("dropdown",m(()=>`${e.size[0]}${e.inverted?"i":""}`),E,e):void 0;return{mergedClsPrefix:K,mergedTheme:_,tmNodes:n,mergedShow:i,handleAfterLeave:()=>{e.animated&&$()},doUpdateShow:w,cssVars:P?void 0:E,themeClass:O==null?void 0:O.themeClass,onRender:O==null?void 0:O.onRender}},render(){const e=(r,n,o,s,c)=>{var f;const{mergedClsPrefix:x,menuProps:y}=this;(f=this.onRender)===null||f===void 0||f.call(this);const R=(y==null?void 0:y(void 0,this.tmNodes.map(P=>P.rawNode)))||{},K={ref:Me(n),class:[r,`${x}-dropdown`,this.themeClass],clsPrefix:x,tmNodes:this.tmNodes,style:[...o,this.cssVars],showArrow:this.showArrow,arrowStyle:this.arrowStyle,scrollable:this.scrollable,onMouseenter:s,onMouseleave:c};return d(ye,re(this.$attrs,K,R))},{mergedTheme:t}=this,i={show:this.mergedShow,theme:t.peers.Popover,themeOverrides:t.peerOverrides.Popover,internalOnAfterLeave:this.handleAfterLeave,internalRenderBody:e,onUpdateShow:this.doUpdateShow,"onUpdate:show":void 0};return d(Te,Object.assign({},Fe(this.$props,oo),i),{trigger:()=>{var r,n;return(n=(r=this.$slots).default)===null||n===void 0?void 0:n.call(r)}})}});export{Ue as C,io as N};
