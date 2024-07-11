import{g as A,q as p,c as Z,s as O,h as b,af as j,bp as $,U as $e,al as Ke,r as M,aM as te,bq as Le,b1 as Be,br as ee,bs as ae,d as x,b as g,a8 as z,f,aa as B,bt as je,u as Ve,j as ye,bu as De,bf as oe,w as ne,ad as fe,ae as ge,bv as Ue,av as T,k as Ge,bh as qe,V as We,bw as Ze,bn as J,E as K,S as V,bx as Je,by as Qe,bz as E,bA as Xe,bB as Ye,R as F,C as xe,an as eo,D as re,B as oo,aR as to,bC as no,bo as ro,bD as io,o as lo,bE as ao}from"./index-BkQ_KyLE.js";import{a as co}from"./user-h4_qDw75.js";import{N as so}from"./Dropdown-BTWjHP8o.js";import"./use-keyboard-Bh1bouc9.js";const uo=A({name:"ChevronDownFilled",render(){return p("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},p("path",{d:"M3.20041 5.73966C3.48226 5.43613 3.95681 5.41856 4.26034 5.70041L8 9.22652L11.7397 5.70041C12.0432 5.41856 12.5177 5.43613 12.7996 5.73966C13.0815 6.0432 13.0639 6.51775 12.7603 6.7996L8.51034 10.7996C8.22258 11.0668 7.77743 11.0668 7.48967 10.7996L3.23966 6.7996C2.93613 6.51775 2.91856 6.0432 3.20041 5.73966Z",fill:"currentColor"}))}}),vo=Z("n-layout-sider"),D=Z("n-menu"),ce=Z("n-submenu"),de=Z("n-menu-item-group"),W=8;function se(e){const r=O(D),{props:n,mergedCollapsedRef:a}=r,c=O(ce,null),s=O(de,null),d=b(()=>n.mode==="horizontal"),v=b(()=>d.value?n.dropdownPlacement:"tmNodes"in e?"right-start":"right"),l=b(()=>{var m;return Math.max((m=n.collapsedIconSize)!==null&&m!==void 0?m:n.iconSize,n.iconSize)}),_=b(()=>{var m;return!d.value&&e.root&&a.value&&(m=n.collapsedIconSize)!==null&&m!==void 0?m:n.iconSize}),y=b(()=>{if(d.value||d.value)return;const{collapsedWidth:m,indent:w,rootIndent:N}=n,{root:R,isGroup:P}=e,H=N===void 0?w:N;return R?a.value?m/2-l.value/2:H:s&&typeof s.paddingLeftRef.value=="number"?w/2+s.paddingLeftRef.value:c&&typeof c.paddingLeftRef.value=="number"?(P?w/2:w)+c.paddingLeftRef.value:0}),I=b(()=>{const{collapsedWidth:m,indent:w,rootIndent:N}=n,{value:R}=l,{root:P}=e;return d.value||!P||!a.value?W:(N===void 0?w:N)+R+W-(m+R)/2});return{dropdownPlacement:v,activeIconSize:_,maxIconSize:l,paddingLeft:y,iconMarginRight:I,NMenu:r,NSubmenu:c}}const ue={internalKey:{type:[String,Number],required:!0},root:Boolean,isGroup:Boolean,level:{type:Number,required:!0},title:[String,Function],extra:[String,Function]},ze=Object.assign(Object.assign({},ue),{tmNode:{type:Object,required:!0},tmNodes:{type:Array,required:!0}}),mo=A({name:"MenuOptionGroup",props:ze,setup(e){j(ce,null);const r=se(e);j(de,{paddingLeftRef:r.paddingLeft});const{mergedClsPrefixRef:n,props:a}=O(D);return function(){const{value:c}=n,s=r.paddingLeft.value,{nodeProps:d}=a,v=d==null?void 0:d(e.tmNode.rawNode);return p("div",{class:`${c}-menu-item-group`,role:"group"},p("div",Object.assign({},v,{class:[`${c}-menu-item-group-title`,v==null?void 0:v.class],style:[(v==null?void 0:v.style)||"",s!==void 0?`padding-left: ${s}px;`:""]}),$(e.title),e.extra?p($e,null," ",$(e.extra)):null),p("div",null,e.tmNodes.map(l=>ve(l,a))))}}}),_e=A({name:"MenuOptionContent",props:{collapsed:Boolean,disabled:Boolean,title:[String,Function],icon:Function,extra:[String,Function],showArrow:Boolean,childActive:Boolean,hover:Boolean,paddingLeft:Number,selected:Boolean,maxIconSize:{type:Number,required:!0},activeIconSize:{type:Number,required:!0},iconMarginRight:{type:Number,required:!0},clsPrefix:{type:String,required:!0},onClick:Function,tmNode:{type:Object,required:!0},isEllipsisPlaceholder:Boolean},setup(e){const{props:r}=O(D);return{menuProps:r,style:b(()=>{const{paddingLeft:n}=e;return{paddingLeft:n&&`${n}px`}}),iconStyle:b(()=>{const{maxIconSize:n,activeIconSize:a,iconMarginRight:c}=e;return{width:`${n}px`,height:`${n}px`,fontSize:`${a}px`,marginRight:`${c}px`}})}},render(){const{clsPrefix:e,tmNode:r,menuProps:{renderIcon:n,renderLabel:a,renderExtra:c,expandIcon:s}}=this,d=n?n(r.rawNode):$(this.icon);return p("div",{onClick:v=>{var l;(l=this.onClick)===null||l===void 0||l.call(this,v)},role:"none",class:[`${e}-menu-item-content`,{[`${e}-menu-item-content--selected`]:this.selected,[`${e}-menu-item-content--collapsed`]:this.collapsed,[`${e}-menu-item-content--child-active`]:this.childActive,[`${e}-menu-item-content--disabled`]:this.disabled,[`${e}-menu-item-content--hover`]:this.hover}],style:this.style},d&&p("div",{class:`${e}-menu-item-content__icon`,style:this.iconStyle,role:"none"},[d]),p("div",{class:`${e}-menu-item-content-header`,role:"none"},this.isEllipsisPlaceholder?this.title:a?a(r.rawNode):$(this.title),this.extra||c?p("span",{class:`${e}-menu-item-content-header__extra`}," ",c?c(r.rawNode):$(this.extra)):null),this.showArrow?p(Ke,{ariaHidden:!0,class:`${e}-menu-item-content__arrow`,clsPrefix:e},{default:()=>s?s(r.rawNode):p(uo,null)}):null)}}),Ie=Object.assign(Object.assign({},ue),{rawNodes:{type:Array,default:()=>[]},tmNodes:{type:Array,default:()=>[]},tmNode:{type:Object,required:!0},disabled:Boolean,icon:Function,onClick:Function,domId:String,virtualChildActive:{type:Boolean,default:void 0},isEllipsisPlaceholder:Boolean}),ie=A({name:"Submenu",props:Ie,setup(e){const r=se(e),{NMenu:n,NSubmenu:a}=r,{props:c,mergedCollapsedRef:s,mergedThemeRef:d}=n,v=b(()=>{const{disabled:m}=e;return a!=null&&a.mergedDisabledRef.value||c.disabled?!0:m}),l=M(!1);j(ce,{paddingLeftRef:r.paddingLeft,mergedDisabledRef:v}),j(de,null);function _(){const{onClick:m}=e;m&&m()}function y(){v.value||(s.value||n.toggleExpand(e.internalKey),_())}function I(m){l.value=m}return{menuProps:c,mergedTheme:d,doSelect:n.doSelect,inverted:n.invertedRef,isHorizontal:n.isHorizontalRef,mergedClsPrefix:n.mergedClsPrefixRef,maxIconSize:r.maxIconSize,activeIconSize:r.activeIconSize,iconMarginRight:r.iconMarginRight,dropdownPlacement:r.dropdownPlacement,dropdownShow:l,paddingLeft:r.paddingLeft,mergedDisabled:v,mergedValue:n.mergedValueRef,childActive:te(()=>{var m;return(m=e.virtualChildActive)!==null&&m!==void 0?m:n.activePathRef.value.includes(e.internalKey)}),collapsed:b(()=>c.mode==="horizontal"?!1:s.value?!0:!n.mergedExpandedKeysRef.value.includes(e.internalKey)),dropdownEnabled:b(()=>!v.value&&(c.mode==="horizontal"||s.value)),handlePopoverShowChange:I,handleClick:y}},render(){var e;const{mergedClsPrefix:r,menuProps:{renderIcon:n,renderLabel:a}}=this,c=()=>{const{isHorizontal:d,paddingLeft:v,collapsed:l,mergedDisabled:_,maxIconSize:y,activeIconSize:I,title:m,childActive:w,icon:N,handleClick:R,menuProps:{nodeProps:P},dropdownShow:H,iconMarginRight:Q,tmNode:L,mergedClsPrefix:U,isEllipsisPlaceholder:X,extra:G}=this,S=P==null?void 0:P(L.rawNode);return p("div",Object.assign({},S,{class:[`${U}-menu-item`,S==null?void 0:S.class],role:"menuitem"}),p(_e,{tmNode:L,paddingLeft:v,collapsed:l,disabled:_,iconMarginRight:Q,maxIconSize:y,activeIconSize:I,title:m,extra:G,showArrow:!d,childActive:w,clsPrefix:U,icon:N,hover:H,onClick:R,isEllipsisPlaceholder:X}))},s=()=>p(Le,null,{default:()=>{const{tmNodes:d,collapsed:v}=this;return v?null:p("div",{class:`${r}-submenu-children`,role:"menu"},d.map(l=>ve(l,this.menuProps)))}});return this.root?p(so,Object.assign({size:"large",trigger:"hover"},(e=this.menuProps)===null||e===void 0?void 0:e.dropdownProps,{themeOverrides:this.mergedTheme.peerOverrides.Dropdown,theme:this.mergedTheme.peers.Dropdown,builtinThemeOverrides:{fontSizeLarge:"14px",optionIconSizeLarge:"18px"},value:this.mergedValue,disabled:!this.dropdownEnabled,placement:this.dropdownPlacement,keyField:this.menuProps.keyField,labelField:this.menuProps.labelField,childrenField:this.menuProps.childrenField,onUpdateShow:this.handlePopoverShowChange,options:this.rawNodes,onSelect:this.doSelect,inverted:this.inverted,renderIcon:n,renderLabel:a}),{default:()=>p("div",{class:`${r}-submenu`,role:"menuitem","aria-expanded":!this.collapsed,id:this.domId},c(),this.isHorizontal?null:s())}):p("div",{class:`${r}-submenu`,role:"menuitem","aria-expanded":!this.collapsed,id:this.domId},c(),s())}}),we=Object.assign(Object.assign({},ue),{tmNode:{type:Object,required:!0},disabled:Boolean,icon:Function,onClick:Function}),ho=A({name:"MenuOption",props:we,setup(e){const r=se(e),{NSubmenu:n,NMenu:a}=r,{props:c,mergedClsPrefixRef:s,mergedCollapsedRef:d}=a,v=n?n.mergedDisabledRef:{value:!1},l=b(()=>v.value||e.disabled);function _(I){const{onClick:m}=e;m&&m(I)}function y(I){l.value||(a.doSelect(e.internalKey,e.tmNode.rawNode),_(I))}return{mergedClsPrefix:s,dropdownPlacement:r.dropdownPlacement,paddingLeft:r.paddingLeft,iconMarginRight:r.iconMarginRight,maxIconSize:r.maxIconSize,activeIconSize:r.activeIconSize,mergedTheme:a.mergedThemeRef,menuProps:c,dropdownEnabled:te(()=>e.root&&d.value&&c.mode!=="horizontal"&&!l.value),selected:te(()=>a.mergedValueRef.value===e.internalKey),mergedDisabled:l,handleClick:y}},render(){const{mergedClsPrefix:e,mergedTheme:r,tmNode:n,menuProps:{renderLabel:a,nodeProps:c}}=this,s=c==null?void 0:c(n.rawNode);return p("div",Object.assign({},s,{role:"menuitem",class:[`${e}-menu-item`,s==null?void 0:s.class]}),p(Be,{theme:r.peers.Tooltip,themeOverrides:r.peerOverrides.Tooltip,trigger:"hover",placement:this.dropdownPlacement,disabled:!this.dropdownEnabled||this.title===void 0,internalExtraClass:["menu-tooltip"]},{default:()=>a?a(n.rawNode):$(this.title),trigger:()=>p(_e,{tmNode:n,clsPrefix:e,paddingLeft:this.paddingLeft,iconMarginRight:this.iconMarginRight,maxIconSize:this.maxIconSize,activeIconSize:this.activeIconSize,selected:this.selected,title:this.title,extra:this.extra,disabled:this.mergedDisabled,icon:this.icon,onClick:this.handleClick})}))}}),po=A({name:"MenuDivider",setup(){const e=O(D),{mergedClsPrefixRef:r,isHorizontalRef:n}=e;return()=>n.value?null:p("div",{class:`${r.value}-menu-divider`})}}),fo=ae(ze),go=ae(we),xo=ae(Ie);function le(e){return e.type==="divider"||e.type==="render"}function bo(e){return e.type==="divider"}function ve(e,r){const{rawNode:n}=e,{show:a}=n;if(a===!1)return null;if(le(n))return bo(n)?p(po,Object.assign({key:e.key},n.props)):null;const{labelField:c}=r,{key:s,level:d,isGroup:v}=e,l=Object.assign(Object.assign({},n),{title:n.title||n[c],extra:n.titleExtra||n.extra,key:s,internalKey:s,level:d,root:d===0,isGroup:v});return e.children?e.isGroup?p(mo,ee(l,fo,{tmNode:e,tmNodes:e.children,key:s})):p(ie,ee(l,xo,{key:s,rawNodes:n[r.childrenField],tmNodes:e.children,tmNode:e})):p(ho,ee(l,go,{key:s,tmNode:e}))}const be=[x("&::before","background-color: var(--n-item-color-hover);"),f("arrow",`
 color: var(--n-arrow-color-hover);
 `),f("icon",`
 color: var(--n-item-icon-color-hover);
 `),g("menu-item-content-header",`
 color: var(--n-item-text-color-hover);
 `,[x("a",`
 color: var(--n-item-text-color-hover);
 `),f("extra",`
 color: var(--n-item-text-color-hover);
 `)])],Ce=[f("icon",`
 color: var(--n-item-icon-color-hover-horizontal);
 `),g("menu-item-content-header",`
 color: var(--n-item-text-color-hover-horizontal);
 `,[x("a",`
 color: var(--n-item-text-color-hover-horizontal);
 `),f("extra",`
 color: var(--n-item-text-color-hover-horizontal);
 `)])],Co=x([g("menu",`
 background-color: var(--n-color);
 color: var(--n-item-text-color);
 overflow: hidden;
 transition: background-color .3s var(--n-bezier);
 box-sizing: border-box;
 font-size: var(--n-font-size);
 padding-bottom: 6px;
 `,[z("horizontal",`
 max-width: 100%;
 width: 100%;
 display: flex;
 overflow: hidden;
 padding-bottom: 0;
 `,[g("submenu","margin: 0;"),g("menu-item","margin: 0;"),g("menu-item-content",`
 padding: 0 20px;
 border-bottom: 2px solid #0000;
 `,[x("&::before","display: none;"),z("selected","border-bottom: 2px solid var(--n-border-color-horizontal)")]),g("menu-item-content",[z("selected",[f("icon","color: var(--n-item-icon-color-active-horizontal);"),g("menu-item-content-header",`
 color: var(--n-item-text-color-active-horizontal);
 `,[x("a","color: var(--n-item-text-color-active-horizontal);"),f("extra","color: var(--n-item-text-color-active-horizontal);")])]),z("child-active",`
 border-bottom: 2px solid var(--n-border-color-horizontal);
 `,[g("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-horizontal);
 `,[x("a",`
 color: var(--n-item-text-color-child-active-horizontal);
 `),f("extra",`
 color: var(--n-item-text-color-child-active-horizontal);
 `)]),f("icon",`
 color: var(--n-item-icon-color-child-active-horizontal);
 `)]),B("disabled",[B("selected, child-active",[x("&:focus-within",Ce)]),z("selected",[k(null,[f("icon","color: var(--n-item-icon-color-active-hover-horizontal);"),g("menu-item-content-header",`
 color: var(--n-item-text-color-active-hover-horizontal);
 `,[x("a","color: var(--n-item-text-color-active-hover-horizontal);"),f("extra","color: var(--n-item-text-color-active-hover-horizontal);")])])]),z("child-active",[k(null,[f("icon","color: var(--n-item-icon-color-child-active-hover-horizontal);"),g("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-hover-horizontal);
 `,[x("a","color: var(--n-item-text-color-child-active-hover-horizontal);"),f("extra","color: var(--n-item-text-color-child-active-hover-horizontal);")])])]),k("border-bottom: 2px solid var(--n-border-color-horizontal);",Ce)]),g("menu-item-content-header",[x("a","color: var(--n-item-text-color-horizontal);")])])]),B("responsive",[g("menu-item-content-header",`
 overflow: hidden;
 text-overflow: ellipsis;
 `)]),z("collapsed",[g("menu-item-content",[z("selected",[x("&::before",`
 background-color: var(--n-item-color-active-collapsed) !important;
 `)]),g("menu-item-content-header","opacity: 0;"),f("arrow","opacity: 0;"),f("icon","color: var(--n-item-icon-color-collapsed);")])]),g("menu-item",`
 height: var(--n-item-height);
 margin-top: 6px;
 position: relative;
 `),g("menu-item-content",`
 box-sizing: border-box;
 line-height: 1.75;
 height: 100%;
 display: grid;
 grid-template-areas: "icon content arrow";
 grid-template-columns: auto 1fr auto;
 align-items: center;
 cursor: pointer;
 position: relative;
 padding-right: 18px;
 transition:
 background-color .3s var(--n-bezier),
 padding-left .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[x("> *","z-index: 1;"),x("&::before",`
 z-index: auto;
 content: "";
 background-color: #0000;
 position: absolute;
 left: 8px;
 right: 8px;
 top: 0;
 bottom: 0;
 pointer-events: none;
 border-radius: var(--n-border-radius);
 transition: background-color .3s var(--n-bezier);
 `),z("disabled",`
 opacity: .45;
 cursor: not-allowed;
 `),z("collapsed",[f("arrow","transform: rotate(0);")]),z("selected",[x("&::before","background-color: var(--n-item-color-active);"),f("arrow","color: var(--n-arrow-color-active);"),f("icon","color: var(--n-item-icon-color-active);"),g("menu-item-content-header",`
 color: var(--n-item-text-color-active);
 `,[x("a","color: var(--n-item-text-color-active);"),f("extra","color: var(--n-item-text-color-active);")])]),z("child-active",[g("menu-item-content-header",`
 color: var(--n-item-text-color-child-active);
 `,[x("a",`
 color: var(--n-item-text-color-child-active);
 `),f("extra",`
 color: var(--n-item-text-color-child-active);
 `)]),f("arrow",`
 color: var(--n-arrow-color-child-active);
 `),f("icon",`
 color: var(--n-item-icon-color-child-active);
 `)]),B("disabled",[B("selected, child-active",[x("&:focus-within",be)]),z("selected",[k(null,[f("arrow","color: var(--n-arrow-color-active-hover);"),f("icon","color: var(--n-item-icon-color-active-hover);"),g("menu-item-content-header",`
 color: var(--n-item-text-color-active-hover);
 `,[x("a","color: var(--n-item-text-color-active-hover);"),f("extra","color: var(--n-item-text-color-active-hover);")])])]),z("child-active",[k(null,[f("arrow","color: var(--n-arrow-color-child-active-hover);"),f("icon","color: var(--n-item-icon-color-child-active-hover);"),g("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-hover);
 `,[x("a","color: var(--n-item-text-color-child-active-hover);"),f("extra","color: var(--n-item-text-color-child-active-hover);")])])]),z("selected",[k(null,[x("&::before","background-color: var(--n-item-color-active-hover);")])]),k(null,be)]),f("icon",`
 grid-area: icon;
 color: var(--n-item-icon-color);
 transition:
 color .3s var(--n-bezier),
 font-size .3s var(--n-bezier),
 margin-right .3s var(--n-bezier);
 box-sizing: content-box;
 display: inline-flex;
 align-items: center;
 justify-content: center;
 `),f("arrow",`
 grid-area: arrow;
 font-size: 16px;
 color: var(--n-arrow-color);
 transform: rotate(180deg);
 opacity: 1;
 transition:
 color .3s var(--n-bezier),
 transform 0.2s var(--n-bezier),
 opacity 0.2s var(--n-bezier);
 `),g("menu-item-content-header",`
 grid-area: content;
 transition:
 color .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 opacity: 1;
 white-space: nowrap;
 color: var(--n-item-text-color);
 `,[x("a",`
 outline: none;
 text-decoration: none;
 transition: color .3s var(--n-bezier);
 color: var(--n-item-text-color);
 `,[x("&::before",`
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),f("extra",`
 font-size: .93em;
 color: var(--n-group-text-color);
 transition: color .3s var(--n-bezier);
 `)])]),g("submenu",`
 cursor: pointer;
 position: relative;
 margin-top: 6px;
 `,[g("menu-item-content",`
 height: var(--n-item-height);
 `),g("submenu-children",`
 overflow: hidden;
 padding: 0;
 `,[je({duration:".2s"})])]),g("menu-item-group",[g("menu-item-group-title",`
 margin-top: 6px;
 color: var(--n-group-text-color);
 cursor: default;
 font-size: .93em;
 height: 36px;
 display: flex;
 align-items: center;
 transition:
 padding-left .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `)])]),g("menu-tooltip",[x("a",`
 color: inherit;
 text-decoration: none;
 `)]),g("menu-divider",`
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-divider-color);
 height: 1px;
 margin: 6px 18px;
 `)]);function k(e,r){return[z("hover",e,r),x("&:hover",e,r)]}const yo=Object.assign(Object.assign({},ye.props),{options:{type:Array,default:()=>[]},collapsed:{type:Boolean,default:void 0},collapsedWidth:{type:Number,default:48},iconSize:{type:Number,default:20},collapsedIconSize:{type:Number,default:24},rootIndent:Number,indent:{type:Number,default:32},labelField:{type:String,default:"label"},keyField:{type:String,default:"key"},childrenField:{type:String,default:"children"},disabledField:{type:String,default:"disabled"},defaultExpandAll:Boolean,defaultExpandedKeys:Array,expandedKeys:Array,value:[String,Number],defaultValue:{type:[String,Number],default:null},mode:{type:String,default:"vertical"},watchProps:{type:Array,default:void 0},disabled:Boolean,show:{type:Boolean,default:!0},inverted:Boolean,"onUpdate:expandedKeys":[Function,Array],onUpdateExpandedKeys:[Function,Array],onUpdateValue:[Function,Array],"onUpdate:value":[Function,Array],expandIcon:Function,renderIcon:Function,renderLabel:Function,renderExtra:Function,dropdownProps:Object,accordion:Boolean,nodeProps:Function,dropdownPlacement:{type:String,default:"bottom"},responsive:Boolean,items:Array,onOpenNamesChange:[Function,Array],onSelect:[Function,Array],onExpandedNamesChange:[Function,Array],expandedNames:Array,defaultExpandedNames:Array}),zo=A({name:"Menu",props:yo,setup(e){const{mergedClsPrefixRef:r,inlineThemeDisabled:n}=Ve(e),a=ye("Menu","-menu",Co,De,e,r),c=O(vo,null),s=b(()=>{var i;const{collapsed:h}=e;if(h!==void 0)return h;if(c){const{collapseModeRef:o,collapsedRef:u}=c;if(o.value==="width")return(i=u.value)!==null&&i!==void 0?i:!1}return!1}),d=b(()=>{const{keyField:i,childrenField:h,disabledField:o}=e;return oe(e.items||e.options,{getIgnored(u){return le(u)},getChildren(u){return u[h]},getDisabled(u){return u[o]},getKey(u){var C;return(C=u[i])!==null&&C!==void 0?C:u.name}})}),v=b(()=>new Set(d.value.treeNodes.map(i=>i.key))),{watchProps:l}=e,_=M(null);l!=null&&l.includes("defaultValue")?ne(()=>{_.value=e.defaultValue}):_.value=e.defaultValue;const y=fe(e,"value"),I=ge(y,_),m=M([]),w=()=>{m.value=e.defaultExpandAll?d.value.getNonLeafKeys():e.defaultExpandedNames||e.defaultExpandedKeys||d.value.getPath(I.value,{includeSelf:!1}).keyPath};l!=null&&l.includes("defaultExpandedKeys")?ne(w):w();const N=Ue(e,["expandedNames","expandedKeys"]),R=ge(N,m),P=b(()=>d.value.treeNodes),H=b(()=>d.value.getPath(I.value).keyPath);j(D,{props:e,mergedCollapsedRef:s,mergedThemeRef:a,mergedValueRef:I,mergedExpandedKeysRef:R,activePathRef:H,mergedClsPrefixRef:r,isHorizontalRef:b(()=>e.mode==="horizontal"),invertedRef:fe(e,"inverted"),doSelect:Q,toggleExpand:U});function Q(i,h){const{"onUpdate:value":o,onUpdateValue:u,onSelect:C}=e;u&&T(u,i,h),o&&T(o,i,h),C&&T(C,i,h),_.value=i}function L(i){const{"onUpdate:expandedKeys":h,onUpdateExpandedKeys:o,onExpandedNamesChange:u,onOpenNamesChange:C}=e;h&&T(h,i),o&&T(o,i),u&&T(u,i),C&&T(C,i),m.value=i}function U(i){const h=Array.from(R.value),o=h.findIndex(u=>u===i);if(~o)h.splice(o,1);else{if(e.accordion&&v.value.has(i)){const u=h.findIndex(C=>v.value.has(C));u>-1&&h.splice(u,1)}h.push(i)}L(h)}const X=i=>{const h=d.value.getPath(i??I.value,{includeSelf:!1}).keyPath;if(!h.length)return;const o=Array.from(R.value),u=new Set([...o,...h]);e.accordion&&v.value.forEach(C=>{u.has(C)&&!h.includes(C)&&u.delete(C)}),L(Array.from(u))},G=b(()=>{const{inverted:i}=e,{common:{cubicBezierEaseInOut:h},self:o}=a.value,{borderRadius:u,borderColorHorizontal:C,fontSize:ke,itemHeight:Fe,dividerColor:Oe}=o,t={"--n-divider-color":Oe,"--n-bezier":h,"--n-font-size":ke,"--n-border-color-horizontal":C,"--n-border-radius":u,"--n-item-height":Fe};return i?(t["--n-group-text-color"]=o.groupTextColorInverted,t["--n-color"]=o.colorInverted,t["--n-item-text-color"]=o.itemTextColorInverted,t["--n-item-text-color-hover"]=o.itemTextColorHoverInverted,t["--n-item-text-color-active"]=o.itemTextColorActiveInverted,t["--n-item-text-color-child-active"]=o.itemTextColorChildActiveInverted,t["--n-item-text-color-child-active-hover"]=o.itemTextColorChildActiveInverted,t["--n-item-text-color-active-hover"]=o.itemTextColorActiveHoverInverted,t["--n-item-icon-color"]=o.itemIconColorInverted,t["--n-item-icon-color-hover"]=o.itemIconColorHoverInverted,t["--n-item-icon-color-active"]=o.itemIconColorActiveInverted,t["--n-item-icon-color-active-hover"]=o.itemIconColorActiveHoverInverted,t["--n-item-icon-color-child-active"]=o.itemIconColorChildActiveInverted,t["--n-item-icon-color-child-active-hover"]=o.itemIconColorChildActiveHoverInverted,t["--n-item-icon-color-collapsed"]=o.itemIconColorCollapsedInverted,t["--n-item-text-color-horizontal"]=o.itemTextColorHorizontalInverted,t["--n-item-text-color-hover-horizontal"]=o.itemTextColorHoverHorizontalInverted,t["--n-item-text-color-active-horizontal"]=o.itemTextColorActiveHorizontalInverted,t["--n-item-text-color-child-active-horizontal"]=o.itemTextColorChildActiveHorizontalInverted,t["--n-item-text-color-child-active-hover-horizontal"]=o.itemTextColorChildActiveHoverHorizontalInverted,t["--n-item-text-color-active-hover-horizontal"]=o.itemTextColorActiveHoverHorizontalInverted,t["--n-item-icon-color-horizontal"]=o.itemIconColorHorizontalInverted,t["--n-item-icon-color-hover-horizontal"]=o.itemIconColorHoverHorizontalInverted,t["--n-item-icon-color-active-horizontal"]=o.itemIconColorActiveHorizontalInverted,t["--n-item-icon-color-active-hover-horizontal"]=o.itemIconColorActiveHoverHorizontalInverted,t["--n-item-icon-color-child-active-horizontal"]=o.itemIconColorChildActiveHorizontalInverted,t["--n-item-icon-color-child-active-hover-horizontal"]=o.itemIconColorChildActiveHoverHorizontalInverted,t["--n-arrow-color"]=o.arrowColorInverted,t["--n-arrow-color-hover"]=o.arrowColorHoverInverted,t["--n-arrow-color-active"]=o.arrowColorActiveInverted,t["--n-arrow-color-active-hover"]=o.arrowColorActiveHoverInverted,t["--n-arrow-color-child-active"]=o.arrowColorChildActiveInverted,t["--n-arrow-color-child-active-hover"]=o.arrowColorChildActiveHoverInverted,t["--n-item-color-hover"]=o.itemColorHoverInverted,t["--n-item-color-active"]=o.itemColorActiveInverted,t["--n-item-color-active-hover"]=o.itemColorActiveHoverInverted,t["--n-item-color-active-collapsed"]=o.itemColorActiveCollapsedInverted):(t["--n-group-text-color"]=o.groupTextColor,t["--n-color"]=o.color,t["--n-item-text-color"]=o.itemTextColor,t["--n-item-text-color-hover"]=o.itemTextColorHover,t["--n-item-text-color-active"]=o.itemTextColorActive,t["--n-item-text-color-child-active"]=o.itemTextColorChildActive,t["--n-item-text-color-child-active-hover"]=o.itemTextColorChildActiveHover,t["--n-item-text-color-active-hover"]=o.itemTextColorActiveHover,t["--n-item-icon-color"]=o.itemIconColor,t["--n-item-icon-color-hover"]=o.itemIconColorHover,t["--n-item-icon-color-active"]=o.itemIconColorActive,t["--n-item-icon-color-active-hover"]=o.itemIconColorActiveHover,t["--n-item-icon-color-child-active"]=o.itemIconColorChildActive,t["--n-item-icon-color-child-active-hover"]=o.itemIconColorChildActiveHover,t["--n-item-icon-color-collapsed"]=o.itemIconColorCollapsed,t["--n-item-text-color-horizontal"]=o.itemTextColorHorizontal,t["--n-item-text-color-hover-horizontal"]=o.itemTextColorHoverHorizontal,t["--n-item-text-color-active-horizontal"]=o.itemTextColorActiveHorizontal,t["--n-item-text-color-child-active-horizontal"]=o.itemTextColorChildActiveHorizontal,t["--n-item-text-color-child-active-hover-horizontal"]=o.itemTextColorChildActiveHoverHorizontal,t["--n-item-text-color-active-hover-horizontal"]=o.itemTextColorActiveHoverHorizontal,t["--n-item-icon-color-horizontal"]=o.itemIconColorHorizontal,t["--n-item-icon-color-hover-horizontal"]=o.itemIconColorHoverHorizontal,t["--n-item-icon-color-active-horizontal"]=o.itemIconColorActiveHorizontal,t["--n-item-icon-color-active-hover-horizontal"]=o.itemIconColorActiveHoverHorizontal,t["--n-item-icon-color-child-active-horizontal"]=o.itemIconColorChildActiveHorizontal,t["--n-item-icon-color-child-active-hover-horizontal"]=o.itemIconColorChildActiveHoverHorizontal,t["--n-arrow-color"]=o.arrowColor,t["--n-arrow-color-hover"]=o.arrowColorHover,t["--n-arrow-color-active"]=o.arrowColorActive,t["--n-arrow-color-active-hover"]=o.arrowColorActiveHover,t["--n-arrow-color-child-active"]=o.arrowColorChildActive,t["--n-arrow-color-child-active-hover"]=o.arrowColorChildActiveHover,t["--n-item-color-hover"]=o.itemColorHover,t["--n-item-color-active"]=o.itemColorActive,t["--n-item-color-active-hover"]=o.itemColorActiveHover,t["--n-item-color-active-collapsed"]=o.itemColorActiveCollapsed),t}),S=n?Ge("menu",b(()=>e.inverted?"a":"b"),G,e):void 0,Y=qe(),me=M(null),Se=M(null);let he=!0;const pe=()=>{var i;he?he=!1:(i=me.value)===null||i===void 0||i.sync({showAllItemsBeforeCalculate:!0})};function Ne(){return document.getElementById(Y)}const q=M(-1);function Ae(i){q.value=e.options.length-i}function Pe(i){i||(q.value=-1)}const He=b(()=>{const i=q.value;return{children:i===-1?[]:e.options.slice(i)}}),Me=b(()=>{const{childrenField:i,disabledField:h,keyField:o}=e;return oe([He.value],{getIgnored(u){return le(u)},getChildren(u){return u[i]},getDisabled(u){return u[h]},getKey(u){var C;return(C=u[o])!==null&&C!==void 0?C:u.name}})}),Ee=b(()=>oe([{}]).treeNodes[0]);function Te(){var i;if(q.value===-1)return p(ie,{root:!0,level:0,key:"__ellpisisGroupPlaceholder__",internalKey:"__ellpisisGroupPlaceholder__",title:"···",tmNode:Ee.value,domId:Y,isEllipsisPlaceholder:!0});const h=Me.value.treeNodes[0],o=H.value,u=!!(!((i=h.children)===null||i===void 0)&&i.some(C=>o.includes(C.key)));return p(ie,{level:0,root:!0,key:"__ellpisisGroup__",internalKey:"__ellpisisGroup__",title:"···",virtualChildActive:u,tmNode:h,domId:Y,rawNodes:h.rawNode.children||[],tmNodes:h.children||[],isEllipsisPlaceholder:!0})}return{mergedClsPrefix:r,controlledExpandedKeys:N,uncontrolledExpanededKeys:m,mergedExpandedKeys:R,uncontrolledValue:_,mergedValue:I,activePath:H,tmNodes:P,mergedTheme:a,mergedCollapsed:s,cssVars:n?void 0:G,themeClass:S==null?void 0:S.themeClass,overflowRef:me,counterRef:Se,updateCounter:()=>{},onResize:pe,onUpdateOverflow:Pe,onUpdateCount:Ae,renderCounter:Te,getCounter:Ne,onRender:S==null?void 0:S.onRender,showOption:X,deriveResponsiveState:pe}},render(){const{mergedClsPrefix:e,mode:r,themeClass:n,onRender:a}=this;a==null||a();const c=()=>this.tmNodes.map(l=>ve(l,this.$props)),d=r==="horizontal"&&this.responsive,v=()=>p("div",{role:r==="horizontal"?"menubar":"menu",class:[`${e}-menu`,n,`${e}-menu--${r}`,d&&`${e}-menu--responsive`,this.mergedCollapsed&&`${e}-menu--collapsed`],style:this.cssVars},d?p(Ze,{ref:"overflowRef",onUpdateOverflow:this.onUpdateOverflow,getCounter:this.getCounter,onUpdateCount:this.onUpdateCount,updateCounter:this.updateCounter,style:{width:"100%",display:"flex",overflow:"hidden"}},{default:c,counter:this.renderCounter}):c());return d?p(We,{onResize:this.onResize},{default:v}):v()}}),_o="/assets/logo-BHfeqoDh.png",Io={},Re=e=>(Je("data-v-42e67872"),e=e(),Qe(),e),wo={class:"layout-logo u__flex-ac u__width"},Ro=Re(()=>E("div",{class:"layout-logo__img"},[E("a",{href:"/company"},[E("img",{src:_o})])],-1)),So=Re(()=>E("span",{class:"layout-logo__phone"},"400-658-8900",-1)),No=[Ro,So];function Ao(e,r){return K(),V("div",wo,No)}const Po=J(Io,[["render",Ao],["__scopeId","data-v-42e67872"]]),Ho=Xe({id:"action",state:()=>({refreh:!0}),actions:{onRefreh(){this.refreh=!1;let e=null;e&&clearTimeout(e),e=setTimeout(()=>{this.refreh=!0},300)}}}),Mo={class:"layout-content"},Eo=A({__name:"LayoutContent",setup(e){const r=Ho();let n=b(()=>r.refreh);return(a,c)=>{const s=Ye("RouterView");return K(),V("div",Mo,[F(s,null,{default:xe(({Component:d,route:v})=>[F(eo,{mode:"out-in",name:v.meta.transition||"mainFade"},{default:xe(()=>[re(n)?(K(),oo(to(d),{key:v.path})):no("",!0)]),_:2},1032,["name"])]),_:1})])}}}),To=J(Eo,[["__scopeId","data-v-770d7bd1"]]),ko={class:"layout-menu u__flex-ac u__width"},Fo=A({__name:"LayoutMenu",props:{isOpen:Boolean,inverted:Boolean},setup(e){const r=ro(),n=io();let a=M();ne(()=>{console.log(111,r.params.id),a.value=+r.params.id});const c=l=>{a.value=l,n.push(`/content/${l}`)},s=l=>l.map(y=>(y.childs.length?y.childs=s(y.childs):delete y.childs,y));let d=M([]);const v=()=>{co().then(l=>{console.log(1123123,l),d.value=s(l.data)})};return lo(()=>{v()}),(l,_)=>{const y=zo;return K(),V("div",ko,[F(y,{mode:"horizontal",inverted:e.inverted,indent:10,"root-indent":10,options:re(d),value:re(a),"key-field":"menuId","label-field":"menuName","children-field":"childs","onUpdate:value":c},null,8,["inverted","options","value"])])}}}),Oo=J(Fo,[["__scopeId","data-v-c9d08b0f"]]),$o="/assets/police-DzUIhgta.png",Ko={},Lo={class:"layout-footer u__width"},Bo=ao('<div class="layout-footer__top u__flex-ac" style="justify-content:space-between;" data-v-ab349c92><p data-v-ab349c92><span style="margin-right:20px;" data-v-ab349c92>联系我们</span><span data-v-ab349c92>加入我们</span></p><div class="u__flex-ac" data-v-ab349c92><div style="font:normal normal 44px / 165px &#39;微软雅黑&#39;;" data-v-ab349c92> 400-658-8900 </div><div class="layout-footer__code" data-v-ab349c92><div class="code-img" data-v-ab349c92></div><span data-v-ab349c92>扫码，关注科拉斯公司</span></div></div></div><div class="layout-footer__bottom" data-v-ab349c92><p data-v-ab349c92>地址：北京市朝阳区来广营西路5号森根国际社区3D 　邮编：100012</p><div class="u__flex" style="justify-content:space-between;" data-v-ab349c92><p data-v-ab349c92> 电话：86-10-84908900　 传真：86-10-84900900　 E-mail：sc@sino-composite.com </p><p data-v-ab349c92> ©1992-2024 科拉斯公司 版权所有 , Copyright © 1992-2024 sino-composite.com, All Rights Reserved </p></div><p style="text-align:center;padding-bottom:20px;" data-v-ab349c92><span style="margin-right:10px;" data-v-ab349c92>网站备案/许可证号</span><a target="_blank" style="text-decoration:underline;" href="https://beian.miit.gov.cn" data-v-ab349c92>京ICP备2020048857号-2</a><a target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11010502045864" style="display:inline-block;text-decoration:underline;margin-left:30px;" data-v-ab349c92><img src="'+$o+'" alt="" style="width:20px;float:left;vertical-align:middle;margin-right:10px;" data-v-ab349c92>京公网安备 11010502045864号</a></p></div>',2),jo=[Bo];function Vo(e,r){return K(),V("div",Lo,jo)}const Do=J(Ko,[["render",Vo],["__scopeId","data-v-ab349c92"]]),Uo={class:"layout-box"},Go={class:"layout-box__logo"},qo={class:"layout-box__menu"},Wo={class:"layout-box__content"},Zo={class:"layout-box__footer"},et=A({__name:"index",setup(e){return(r,n)=>(K(),V("div",Uo,[E("div",Go,[F(Po)]),E("div",qo,[F(Oo,{inverted:!1})]),E("div",Wo,[F(To)]),E("div",Zo,[F(Do)])]))}});export{et as default};
