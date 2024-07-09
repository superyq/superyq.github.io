import{g as F,t as h,b as v,d as z,an as N,f as m,u as ae,j as G,ao as yo,aj as Z,ap as ie,h as C,l as se,c as ne,r as $,o as Co,a6 as _o,aq as zo,v as Y,q as wo,ar as Se,as as Ve,at as Ie,au as De,av as So,aw as pe,ax as xe,ay as D,az as re,M as ve,aA as ye,aB as Io,aC as Ro,aD as ge,aE as Re,aF as le,aG as ko,aH as Po,aI as be,w as he,aJ as To,aK as No,V as Ao,aL as $o,aM as ke,aN as Ue,B as L,K as ee,X as q,J as A,aa as Eo,ab as Fo,a4 as Ce,F as O,a0 as U,a3 as te,T as Pe,U as qe,C as Q,D as H,L as Ge,P as We,Q as _e,aO as Oo,S as Lo,H as Le,a1 as Ye,a2 as Xe,aP as Je,ai as Ho,p as Qe,aQ as Bo,aR as Mo,a8 as jo,aS as Ko,a7 as Vo,aT as Do,N as Uo}from"./index-C89OI0f9.js";import{N as me}from"./Dropdown-B4qkqsJv.js";import{_ as qo}from"./YSwitch.vue_vue_type_script_setup_true_lang-DiIAcGsh.js";import{C as Go}from"./CopyRight-BR6zD9pq.js";import"./use-keyboard-CzUaIFAX.js";const Wo=F({name:"ChevronDownFilled",render(){return h("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},h("path",{d:"M3.20041 5.73966C3.48226 5.43613 3.95681 5.41856 4.26034 5.70041L8 9.22652L11.7397 5.70041C12.0432 5.41856 12.5177 5.43613 12.7996 5.73966C13.0815 6.0432 13.0639 6.51775 12.7603 6.7996L8.51034 10.7996C8.22258 11.0668 7.77743 11.0668 7.48967 10.7996L3.23966 6.7996C2.93613 6.51775 2.91856 6.0432 3.20041 5.73966Z",fill:"currentColor"}))}}),Yo=v("breadcrumb",`
 white-space: nowrap;
 cursor: default;
 line-height: var(--n-item-line-height);
`,[z("ul",`
 list-style: none;
 padding: 0;
 margin: 0;
 `),z("a",`
 color: inherit;
 text-decoration: inherit;
 `),v("breadcrumb-item",`
 font-size: var(--n-font-size);
 transition: color .3s var(--n-bezier);
 display: inline-flex;
 align-items: center;
 `,[v("icon",`
 font-size: 18px;
 vertical-align: -.2em;
 transition: color .3s var(--n-bezier);
 color: var(--n-item-text-color);
 `),z("&:not(:last-child)",[N("clickable",[m("link",`
 cursor: pointer;
 `,[z("&:hover",`
 background-color: var(--n-item-color-hover);
 `),z("&:active",`
 background-color: var(--n-item-color-pressed); 
 `)])])]),m("link",`
 padding: 4px;
 border-radius: var(--n-item-border-radius);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 color: var(--n-item-text-color);
 position: relative;
 `,[z("&:hover",`
 color: var(--n-item-text-color-hover);
 `,[v("icon",`
 color: var(--n-item-text-color-hover);
 `)]),z("&:active",`
 color: var(--n-item-text-color-pressed);
 `,[v("icon",`
 color: var(--n-item-text-color-pressed);
 `)])]),m("separator",`
 margin: 0 8px;
 color: var(--n-separator-color);
 transition: color .3s var(--n-bezier);
 user-select: none;
 -webkit-user-select: none;
 `),z("&:last-child",[m("link",`
 font-weight: var(--n-font-weight-active);
 cursor: unset;
 color: var(--n-item-text-color-active);
 `,[v("icon",`
 color: var(--n-item-text-color-active);
 `)]),m("separator",`
 display: none;
 `)])])]),Ze=ne("n-breadcrumb"),Xo=Object.assign(Object.assign({},G.props),{separator:{type:String,default:"/"}}),Jo=F({name:"Breadcrumb",props:Xo,setup(e){const{mergedClsPrefixRef:o,inlineThemeDisabled:t}=ae(e),n=G("Breadcrumb","-breadcrumb",Yo,yo,e,o);Z(Ze,{separatorRef:ie(e,"separator"),mergedClsPrefixRef:o});const i=C(()=>{const{common:{cubicBezierEaseInOut:d},self:{separatorColor:c,itemTextColor:s,itemTextColorHover:f,itemTextColorPressed:b,itemTextColorActive:x,fontSize:u,fontWeightActive:y,itemBorderRadius:S,itemColorHover:I,itemColorPressed:g,itemLineHeight:w}}=n.value;return{"--n-font-size":u,"--n-bezier":d,"--n-item-text-color":s,"--n-item-text-color-hover":f,"--n-item-text-color-pressed":b,"--n-item-text-color-active":x,"--n-separator-color":c,"--n-item-color-hover":I,"--n-item-color-pressed":g,"--n-item-border-radius":S,"--n-font-weight-active":y,"--n-item-line-height":w}}),l=t?se("breadcrumb",void 0,i,e):void 0;return{mergedClsPrefix:o,cssVars:t?void 0:i,themeClass:l==null?void 0:l.themeClass,onRender:l==null?void 0:l.onRender}},render(){var e;return(e=this.onRender)===null||e===void 0||e.call(this),h("nav",{class:[`${this.mergedClsPrefix}-breadcrumb`,this.themeClass],style:this.cssVars,"aria-label":"Breadcrumb"},h("ul",null,this.$slots))}}),Qo=(e=zo?window:null)=>{const o=()=>{const{hash:i,host:l,hostname:d,href:c,origin:s,pathname:f,port:b,protocol:x,search:u}=(e==null?void 0:e.location)||{};return{hash:i,host:l,hostname:d,href:c,origin:s,pathname:f,port:b,protocol:x,search:u}},t=()=>{n.value=o()},n=$(o());return Co(()=>{e&&(e.addEventListener("popstate",t),e.addEventListener("hashchange",t))}),_o(()=>{e&&(e.removeEventListener("popstate",t),e.removeEventListener("hashchange",t))}),n},Zo={separator:String,href:String,clickable:{type:Boolean,default:!0},onClick:Function},et=F({name:"BreadcrumbItem",props:Zo,setup(e,{slots:o}){const t=Y(Ze,null);if(!t)return()=>null;const{separatorRef:n,mergedClsPrefixRef:i}=t,l=Qo(),d=C(()=>e.href?"a":"span"),c=C(()=>l.value.href===e.href?"location":null);return()=>{const{value:s}=i;return h("li",{class:[`${s}-breadcrumb-item`,e.clickable&&`${s}-breadcrumb-item--clickable`]},h(d.value,{class:`${s}-breadcrumb-item__link`,"aria-current":c.value,href:e.href,onClick:e.onClick},o),h("span",{class:`${s}-breadcrumb-item__separator`,"aria-hidden":"true"},wo(o.separator,()=>{var f;return[(f=e.separator)!==null&&f!==void 0?f:n.value]})))}}}),eo=ne("n-layout-sider"),Te={type:String,default:"static"},ot=v("layout",`
 color: var(--n-text-color);
 background-color: var(--n-color);
 box-sizing: border-box;
 position: relative;
 z-index: auto;
 flex: auto;
 overflow: hidden;
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
`,[v("layout-scroll-container",`
 overflow-x: hidden;
 box-sizing: border-box;
 height: 100%;
 `),N("absolute-positioned",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),tt={embedded:Boolean,position:Te,nativeScrollbar:{type:Boolean,default:!0},scrollbarProps:Object,onScroll:Function,contentClass:String,contentStyle:{type:[String,Object],default:""},hasSider:Boolean,siderPlacement:{type:String,default:"left"}},oo=ne("n-layout");function to(e){return F({name:e?"LayoutContent":"Layout",props:Object.assign(Object.assign({},G.props),tt),setup(o){const t=$(null),n=$(null),{mergedClsPrefixRef:i,inlineThemeDisabled:l}=ae(o),d=G("Layout","-layout",ot,Se,o,i);function c(I,g){if(o.nativeScrollbar){const{value:w}=t;w&&(g===void 0?w.scrollTo(I):w.scrollTo(I,g))}else{const{value:w}=n;w&&w.scrollTo(I,g)}}Z(oo,o);let s=0,f=0;const b=I=>{var g;const w=I.target;s=w.scrollLeft,f=w.scrollTop,(g=o.onScroll)===null||g===void 0||g.call(o,I)};Ve(()=>{if(o.nativeScrollbar){const I=t.value;I&&(I.scrollTop=f,I.scrollLeft=s)}});const x={display:"flex",flexWrap:"nowrap",width:"100%",flexDirection:"row"},u={scrollTo:c},y=C(()=>{const{common:{cubicBezierEaseInOut:I},self:g}=d.value;return{"--n-bezier":I,"--n-color":o.embedded?g.colorEmbedded:g.color,"--n-text-color":g.textColor}}),S=l?se("layout",C(()=>o.embedded?"e":""),y,o):void 0;return Object.assign({mergedClsPrefix:i,scrollableElRef:t,scrollbarInstRef:n,hasSiderStyle:x,mergedTheme:d,handleNativeElScroll:b,cssVars:l?void 0:y,themeClass:S==null?void 0:S.themeClass,onRender:S==null?void 0:S.onRender},u)},render(){var o;const{mergedClsPrefix:t,hasSider:n}=this;(o=this.onRender)===null||o===void 0||o.call(this);const i=n?this.hasSiderStyle:void 0,l=[this.themeClass,e&&`${t}-layout-content`,`${t}-layout`,`${t}-layout--${this.position}-positioned`];return h("div",{class:l,style:this.cssVars},this.nativeScrollbar?h("div",{ref:"scrollableElRef",class:[`${t}-layout-scroll-container`,this.contentClass],style:[this.contentStyle,i],onScroll:this.handleNativeElScroll},this.$slots):h(Ie,Object.assign({},this.scrollbarProps,{onScroll:this.onScroll,ref:"scrollbarInstRef",theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar,contentClass:this.contentClass,contentStyle:[this.contentStyle,i]}),this.$slots))}})}const rt=to(!1),nt=to(!0),lt=v("layout-header",`
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 box-sizing: border-box;
 width: 100%;
 background-color: var(--n-color);
 color: var(--n-text-color);
`,[N("absolute-positioned",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 `),N("bordered",`
 border-bottom: solid 1px var(--n-border-color);
 `)]),it={position:Te,inverted:Boolean,bordered:{type:Boolean,default:!1}},at=F({name:"LayoutHeader",props:Object.assign(Object.assign({},G.props),it),setup(e){const{mergedClsPrefixRef:o,inlineThemeDisabled:t}=ae(e),n=G("Layout","-layout-header",lt,Se,e,o),i=C(()=>{const{common:{cubicBezierEaseInOut:d},self:c}=n.value,s={"--n-bezier":d};return e.inverted?(s["--n-color"]=c.headerColorInverted,s["--n-text-color"]=c.textColorInverted,s["--n-border-color"]=c.headerBorderColorInverted):(s["--n-color"]=c.headerColor,s["--n-text-color"]=c.textColor,s["--n-border-color"]=c.headerBorderColor),s}),l=t?se("layout-header",C(()=>e.inverted?"a":"b"),i,e):void 0;return{mergedClsPrefix:o,cssVars:t?void 0:i,themeClass:l==null?void 0:l.themeClass,onRender:l==null?void 0:l.onRender}},render(){var e;const{mergedClsPrefix:o}=this;return(e=this.onRender)===null||e===void 0||e.call(this),h("div",{class:[`${o}-layout-header`,this.themeClass,this.position&&`${o}-layout-header--${this.position}-positioned`,this.bordered&&`${o}-layout-header--bordered`],style:this.cssVars},this.$slots)}}),st=v("layout-sider",`
 flex-shrink: 0;
 box-sizing: border-box;
 position: relative;
 z-index: 1;
 color: var(--n-text-color);
 transition:
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 min-width .3s var(--n-bezier),
 max-width .3s var(--n-bezier),
 transform .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 background-color: var(--n-color);
 display: flex;
 justify-content: flex-end;
`,[N("bordered",[m("border",`
 content: "";
 position: absolute;
 top: 0;
 bottom: 0;
 width: 1px;
 background-color: var(--n-border-color);
 transition: background-color .3s var(--n-bezier);
 `)]),m("left-placement",[N("bordered",[m("border",`
 right: 0;
 `)])]),N("right-placement",`
 justify-content: flex-start;
 `,[N("bordered",[m("border",`
 left: 0;
 `)]),N("collapsed",[v("layout-toggle-button",[v("base-icon",`
 transform: rotate(180deg);
 `)]),v("layout-toggle-bar",[z("&:hover",[m("top",{transform:"rotate(-12deg) scale(1.15) translateY(-2px)"}),m("bottom",{transform:"rotate(12deg) scale(1.15) translateY(2px)"})])])]),v("layout-toggle-button",`
 left: 0;
 transform: translateX(-50%) translateY(-50%);
 `,[v("base-icon",`
 transform: rotate(0);
 `)]),v("layout-toggle-bar",`
 left: -28px;
 transform: rotate(180deg);
 `,[z("&:hover",[m("top",{transform:"rotate(12deg) scale(1.15) translateY(-2px)"}),m("bottom",{transform:"rotate(-12deg) scale(1.15) translateY(2px)"})])])]),N("collapsed",[v("layout-toggle-bar",[z("&:hover",[m("top",{transform:"rotate(-12deg) scale(1.15) translateY(-2px)"}),m("bottom",{transform:"rotate(12deg) scale(1.15) translateY(2px)"})])]),v("layout-toggle-button",[v("base-icon",`
 transform: rotate(0);
 `)])]),v("layout-toggle-button",`
 transition:
 color .3s var(--n-bezier),
 right .3s var(--n-bezier),
 left .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 cursor: pointer;
 width: 24px;
 height: 24px;
 position: absolute;
 top: 50%;
 right: 0;
 border-radius: 50%;
 display: flex;
 align-items: center;
 justify-content: center;
 font-size: 18px;
 color: var(--n-toggle-button-icon-color);
 border: var(--n-toggle-button-border);
 background-color: var(--n-toggle-button-color);
 box-shadow: 0 2px 4px 0px rgba(0, 0, 0, .06);
 transform: translateX(50%) translateY(-50%);
 z-index: 1;
 `,[v("base-icon",`
 transition: transform .3s var(--n-bezier);
 transform: rotate(180deg);
 `)]),v("layout-toggle-bar",`
 cursor: pointer;
 height: 72px;
 width: 32px;
 position: absolute;
 top: calc(50% - 36px);
 right: -28px;
 `,[m("top, bottom",`
 position: absolute;
 width: 4px;
 border-radius: 2px;
 height: 38px;
 left: 14px;
 transition: 
 background-color .3s var(--n-bezier),
 transform .3s var(--n-bezier);
 `),m("bottom",`
 position: absolute;
 top: 34px;
 `),z("&:hover",[m("top",{transform:"rotate(12deg) scale(1.15) translateY(-2px)"}),m("bottom",{transform:"rotate(-12deg) scale(1.15) translateY(2px)"})]),m("top, bottom",{backgroundColor:"var(--n-toggle-bar-color)"}),z("&:hover",[m("top, bottom",{backgroundColor:"var(--n-toggle-bar-color-hover)"})])]),m("border",`
 position: absolute;
 top: 0;
 right: 0;
 bottom: 0;
 width: 1px;
 transition: background-color .3s var(--n-bezier);
 `),v("layout-sider-scroll-container",`
 flex-grow: 1;
 flex-shrink: 0;
 box-sizing: border-box;
 height: 100%;
 opacity: 0;
 transition: opacity .3s var(--n-bezier);
 max-width: 100%;
 `),N("show-content",[v("layout-sider-scroll-container",{opacity:1})]),N("absolute-positioned",`
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 `)]),ct=F({name:"LayoutToggleButton",props:{clsPrefix:{type:String,required:!0},onClick:Function},render(){const{clsPrefix:e}=this;return h("div",{class:`${e}-layout-toggle-button`,onClick:this.onClick},h(De,{clsPrefix:e},{default:()=>h(So,null)}))}}),dt=F({props:{clsPrefix:{type:String,required:!0},onClick:Function},render(){const{clsPrefix:e}=this;return h("div",{onClick:this.onClick,class:`${e}-layout-toggle-bar`},h("div",{class:`${e}-layout-toggle-bar__top`}),h("div",{class:`${e}-layout-toggle-bar__bottom`}))}}),ut={position:Te,bordered:Boolean,collapsedWidth:{type:Number,default:48},width:{type:[Number,String],default:272},contentClass:String,contentStyle:{type:[String,Object],default:""},collapseMode:{type:String,default:"transform"},collapsed:{type:Boolean,default:void 0},defaultCollapsed:Boolean,showCollapsedContent:{type:Boolean,default:!0},showTrigger:{type:[Boolean,String],default:!1},nativeScrollbar:{type:Boolean,default:!0},inverted:Boolean,scrollbarProps:Object,triggerClass:String,triggerStyle:[String,Object],collapsedTriggerClass:String,collapsedTriggerStyle:[String,Object],"onUpdate:collapsed":[Function,Array],onUpdateCollapsed:[Function,Array],onAfterEnter:Function,onAfterLeave:Function,onExpand:[Function,Array],onCollapse:[Function,Array],onScroll:Function},ht=F({name:"LayoutSider",props:Object.assign(Object.assign({},G.props),ut),setup(e){const o=Y(oo),t=$(null),n=$(null),i=C(()=>pe(s.value?e.collapsedWidth:e.width)),l=C(()=>e.collapseMode!=="transform"?{}:{minWidth:pe(e.width)}),d=C(()=>o?o.siderPlacement:"left"),c=$(e.defaultCollapsed),s=xe(ie(e,"collapsed"),c);function f(T,R){if(e.nativeScrollbar){const{value:P}=t;P&&(R===void 0?P.scrollTo(T):P.scrollTo(T,R))}else{const{value:P}=n;P&&P.scrollTo(T,R)}}function b(){const{"onUpdate:collapsed":T,onUpdateCollapsed:R,onExpand:P,onCollapse:J}=e,{value:W}=s;R&&D(R,!W),T&&D(T,!W),c.value=!W,W?P&&D(P):J&&D(J)}let x=0,u=0;const y=T=>{var R;const P=T.target;x=P.scrollLeft,u=P.scrollTop,(R=e.onScroll)===null||R===void 0||R.call(e,T)};Ve(()=>{if(e.nativeScrollbar){const T=t.value;T&&(T.scrollTop=u,T.scrollLeft=x)}}),Z(eo,{collapsedRef:s,collapseModeRef:ie(e,"collapseMode")});const{mergedClsPrefixRef:S,inlineThemeDisabled:I}=ae(e),g=G("Layout","-layout-sider",st,Se,e,S);function w(T){var R,P;T.propertyName==="max-width"&&(s.value?(R=e.onAfterLeave)===null||R===void 0||R.call(e):(P=e.onAfterEnter)===null||P===void 0||P.call(e))}const K={scrollTo:f},V=C(()=>{const{common:{cubicBezierEaseInOut:T},self:R}=g.value,{siderToggleButtonColor:P,siderToggleButtonBorder:J,siderToggleBarColor:W,siderToggleBarColorHover:fe}=R,M={"--n-bezier":T,"--n-toggle-button-color":P,"--n-toggle-button-border":J,"--n-toggle-bar-color":W,"--n-toggle-bar-color-hover":fe};return e.inverted?(M["--n-color"]=R.siderColorInverted,M["--n-text-color"]=R.textColorInverted,M["--n-border-color"]=R.siderBorderColorInverted,M["--n-toggle-button-icon-color"]=R.siderToggleButtonIconColorInverted,M.__invertScrollbar=R.__invertScrollbar):(M["--n-color"]=R.siderColor,M["--n-text-color"]=R.textColor,M["--n-border-color"]=R.siderBorderColor,M["--n-toggle-button-icon-color"]=R.siderToggleButtonIconColor),M}),B=I?se("layout-sider",C(()=>e.inverted?"a":"b"),V,e):void 0;return Object.assign({scrollableElRef:t,scrollbarInstRef:n,mergedClsPrefix:S,mergedTheme:g,styleMaxWidth:i,mergedCollapsed:s,scrollContainerStyle:l,siderPlacement:d,handleNativeElScroll:y,handleTransitionend:w,handleTriggerClick:b,inlineThemeDisabled:I,cssVars:V,themeClass:B==null?void 0:B.themeClass,onRender:B==null?void 0:B.onRender},K)},render(){var e;const{mergedClsPrefix:o,mergedCollapsed:t,showTrigger:n}=this;return(e=this.onRender)===null||e===void 0||e.call(this),h("aside",{class:[`${o}-layout-sider`,this.themeClass,`${o}-layout-sider--${this.position}-positioned`,`${o}-layout-sider--${this.siderPlacement}-placement`,this.bordered&&`${o}-layout-sider--bordered`,t&&`${o}-layout-sider--collapsed`,(!t||this.showCollapsedContent)&&`${o}-layout-sider--show-content`],onTransitionend:this.handleTransitionend,style:[this.inlineThemeDisabled?void 0:this.cssVars,{maxWidth:this.styleMaxWidth,width:pe(this.width)}]},this.nativeScrollbar?h("div",{class:[`${o}-layout-sider-scroll-container`,this.contentClass],onScroll:this.handleNativeElScroll,style:[this.scrollContainerStyle,{overflow:"auto"},this.contentStyle],ref:"scrollableElRef"},this.$slots):h(Ie,Object.assign({},this.scrollbarProps,{onScroll:this.onScroll,ref:"scrollbarInstRef",style:this.scrollContainerStyle,contentStyle:this.contentStyle,contentClass:this.contentClass,theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar,builtinThemeOverrides:this.inverted&&this.cssVars.__invertScrollbar==="true"?{colorHover:"rgba(255, 255, 255, .4)",color:"rgba(255, 255, 255, .3)"}:void 0}),this.$slots),n?n==="bar"?h(dt,{clsPrefix:o,class:t?this.collapsedTriggerClass:this.triggerClass,style:t?this.collapsedTriggerStyle:this.triggerStyle,onClick:this.handleTriggerClick}):h(ct,{clsPrefix:o,class:t?this.collapsedTriggerClass:this.triggerClass,style:t?this.collapsedTriggerStyle:this.triggerStyle,onClick:this.handleTriggerClick}):null,this.bordered?h("div",{class:`${o}-layout-sider__border`}):null)}}),ce=ne("n-menu"),Ne=ne("n-submenu"),Ae=ne("n-menu-item-group"),ue=8;function $e(e){const o=Y(ce),{props:t,mergedCollapsedRef:n}=o,i=Y(Ne,null),l=Y(Ae,null),d=C(()=>t.mode==="horizontal"),c=C(()=>d.value?t.dropdownPlacement:"tmNodes"in e?"right-start":"right"),s=C(()=>{var u;return Math.max((u=t.collapsedIconSize)!==null&&u!==void 0?u:t.iconSize,t.iconSize)}),f=C(()=>{var u;return!d.value&&e.root&&n.value&&(u=t.collapsedIconSize)!==null&&u!==void 0?u:t.iconSize}),b=C(()=>{if(d.value||d.value)return;const{collapsedWidth:u,indent:y,rootIndent:S}=t,{root:I,isGroup:g}=e,w=S===void 0?y:S;return I?n.value?u/2-s.value/2:w:l&&typeof l.paddingLeftRef.value=="number"?y/2+l.paddingLeftRef.value:i&&typeof i.paddingLeftRef.value=="number"?(g?y/2:y)+i.paddingLeftRef.value:0}),x=C(()=>{const{collapsedWidth:u,indent:y,rootIndent:S}=t,{value:I}=s,{root:g}=e;return d.value||!g||!n.value?ue:(S===void 0?y:S)+I+ue-(u+I)/2});return{dropdownPlacement:c,activeIconSize:f,maxIconSize:s,paddingLeft:b,iconMarginRight:x,NMenu:o,NSubmenu:i}}const Ee={internalKey:{type:[String,Number],required:!0},root:Boolean,isGroup:Boolean,level:{type:Number,required:!0},title:[String,Function],extra:[String,Function]},ro=Object.assign(Object.assign({},Ee),{tmNode:{type:Object,required:!0},tmNodes:{type:Array,required:!0}}),vt=F({name:"MenuOptionGroup",props:ro,setup(e){Z(Ne,null);const o=$e(e);Z(Ae,{paddingLeftRef:o.paddingLeft});const{mergedClsPrefixRef:t,props:n}=Y(ce);return function(){const{value:i}=t,l=o.paddingLeft.value,{nodeProps:d}=n,c=d==null?void 0:d(e.tmNode.rawNode);return h("div",{class:`${i}-menu-item-group`,role:"group"},h("div",Object.assign({},c,{class:[`${i}-menu-item-group-title`,c==null?void 0:c.class],style:[(c==null?void 0:c.style)||"",l!==void 0?`padding-left: ${l}px;`:""]}),re(e.title),e.extra?h(ve,null," ",re(e.extra)):null),h("div",null,e.tmNodes.map(s=>Fe(s,n))))}}}),no=F({name:"MenuOptionContent",props:{collapsed:Boolean,disabled:Boolean,title:[String,Function],icon:Function,extra:[String,Function],showArrow:Boolean,childActive:Boolean,hover:Boolean,paddingLeft:Number,selected:Boolean,maxIconSize:{type:Number,required:!0},activeIconSize:{type:Number,required:!0},iconMarginRight:{type:Number,required:!0},clsPrefix:{type:String,required:!0},onClick:Function,tmNode:{type:Object,required:!0},isEllipsisPlaceholder:Boolean},setup(e){const{props:o}=Y(ce);return{menuProps:o,style:C(()=>{const{paddingLeft:t}=e;return{paddingLeft:t&&`${t}px`}}),iconStyle:C(()=>{const{maxIconSize:t,activeIconSize:n,iconMarginRight:i}=e;return{width:`${t}px`,height:`${t}px`,fontSize:`${n}px`,marginRight:`${i}px`}})}},render(){const{clsPrefix:e,tmNode:o,menuProps:{renderIcon:t,renderLabel:n,renderExtra:i,expandIcon:l}}=this,d=t?t(o.rawNode):re(this.icon);return h("div",{onClick:c=>{var s;(s=this.onClick)===null||s===void 0||s.call(this,c)},role:"none",class:[`${e}-menu-item-content`,{[`${e}-menu-item-content--selected`]:this.selected,[`${e}-menu-item-content--collapsed`]:this.collapsed,[`${e}-menu-item-content--child-active`]:this.childActive,[`${e}-menu-item-content--disabled`]:this.disabled,[`${e}-menu-item-content--hover`]:this.hover}],style:this.style},d&&h("div",{class:`${e}-menu-item-content__icon`,style:this.iconStyle,role:"none"},[d]),h("div",{class:`${e}-menu-item-content-header`,role:"none"},this.isEllipsisPlaceholder?this.title:n?n(o.rawNode):re(this.title),this.extra||i?h("span",{class:`${e}-menu-item-content-header__extra`}," ",i?i(o.rawNode):re(this.extra)):null),this.showArrow?h(De,{ariaHidden:!0,class:`${e}-menu-item-content__arrow`,clsPrefix:e},{default:()=>l?l(o.rawNode):h(Wo,null)}):null)}}),lo=Object.assign(Object.assign({},Ee),{rawNodes:{type:Array,default:()=>[]},tmNodes:{type:Array,default:()=>[]},tmNode:{type:Object,required:!0},disabled:Boolean,icon:Function,onClick:Function,domId:String,virtualChildActive:{type:Boolean,default:void 0},isEllipsisPlaceholder:Boolean}),ze=F({name:"Submenu",props:lo,setup(e){const o=$e(e),{NMenu:t,NSubmenu:n}=o,{props:i,mergedCollapsedRef:l,mergedThemeRef:d}=t,c=C(()=>{const{disabled:u}=e;return n!=null&&n.mergedDisabledRef.value||i.disabled?!0:u}),s=$(!1);Z(Ne,{paddingLeftRef:o.paddingLeft,mergedDisabledRef:c}),Z(Ae,null);function f(){const{onClick:u}=e;u&&u()}function b(){c.value||(l.value||t.toggleExpand(e.internalKey),f())}function x(u){s.value=u}return{menuProps:i,mergedTheme:d,doSelect:t.doSelect,inverted:t.invertedRef,isHorizontal:t.isHorizontalRef,mergedClsPrefix:t.mergedClsPrefixRef,maxIconSize:o.maxIconSize,activeIconSize:o.activeIconSize,iconMarginRight:o.iconMarginRight,dropdownPlacement:o.dropdownPlacement,dropdownShow:s,paddingLeft:o.paddingLeft,mergedDisabled:c,mergedValue:t.mergedValueRef,childActive:ye(()=>{var u;return(u=e.virtualChildActive)!==null&&u!==void 0?u:t.activePathRef.value.includes(e.internalKey)}),collapsed:C(()=>i.mode==="horizontal"?!1:l.value?!0:!t.mergedExpandedKeysRef.value.includes(e.internalKey)),dropdownEnabled:C(()=>!c.value&&(i.mode==="horizontal"||l.value)),handlePopoverShowChange:x,handleClick:b}},render(){var e;const{mergedClsPrefix:o,menuProps:{renderIcon:t,renderLabel:n}}=this,i=()=>{const{isHorizontal:d,paddingLeft:c,collapsed:s,mergedDisabled:f,maxIconSize:b,activeIconSize:x,title:u,childActive:y,icon:S,handleClick:I,menuProps:{nodeProps:g},dropdownShow:w,iconMarginRight:K,tmNode:V,mergedClsPrefix:B,isEllipsisPlaceholder:T,extra:R}=this,P=g==null?void 0:g(V.rawNode);return h("div",Object.assign({},P,{class:[`${B}-menu-item`,P==null?void 0:P.class],role:"menuitem"}),h(no,{tmNode:V,paddingLeft:c,collapsed:s,disabled:f,iconMarginRight:K,maxIconSize:b,activeIconSize:x,title:u,extra:R,showArrow:!d,childActive:y,clsPrefix:B,icon:S,hover:w,onClick:I,isEllipsisPlaceholder:T}))},l=()=>h(Io,null,{default:()=>{const{tmNodes:d,collapsed:c}=this;return c?null:h("div",{class:`${o}-submenu-children`,role:"menu"},d.map(s=>Fe(s,this.menuProps)))}});return this.root?h(me,Object.assign({size:"large",trigger:"hover"},(e=this.menuProps)===null||e===void 0?void 0:e.dropdownProps,{themeOverrides:this.mergedTheme.peerOverrides.Dropdown,theme:this.mergedTheme.peers.Dropdown,builtinThemeOverrides:{fontSizeLarge:"14px",optionIconSizeLarge:"18px"},value:this.mergedValue,disabled:!this.dropdownEnabled,placement:this.dropdownPlacement,keyField:this.menuProps.keyField,labelField:this.menuProps.labelField,childrenField:this.menuProps.childrenField,onUpdateShow:this.handlePopoverShowChange,options:this.rawNodes,onSelect:this.doSelect,inverted:this.inverted,renderIcon:t,renderLabel:n}),{default:()=>h("div",{class:`${o}-submenu`,role:"menuitem","aria-expanded":!this.collapsed,id:this.domId},i(),this.isHorizontal?null:l())}):h("div",{class:`${o}-submenu`,role:"menuitem","aria-expanded":!this.collapsed,id:this.domId},i(),l())}}),io=Object.assign(Object.assign({},Ee),{tmNode:{type:Object,required:!0},disabled:Boolean,icon:Function,onClick:Function}),mt=F({name:"MenuOption",props:io,setup(e){const o=$e(e),{NSubmenu:t,NMenu:n}=o,{props:i,mergedClsPrefixRef:l,mergedCollapsedRef:d}=n,c=t?t.mergedDisabledRef:{value:!1},s=C(()=>c.value||e.disabled);function f(x){const{onClick:u}=e;u&&u(x)}function b(x){s.value||(n.doSelect(e.internalKey,e.tmNode.rawNode),f(x))}return{mergedClsPrefix:l,dropdownPlacement:o.dropdownPlacement,paddingLeft:o.paddingLeft,iconMarginRight:o.iconMarginRight,maxIconSize:o.maxIconSize,activeIconSize:o.activeIconSize,mergedTheme:n.mergedThemeRef,menuProps:i,dropdownEnabled:ye(()=>e.root&&d.value&&i.mode!=="horizontal"&&!s.value),selected:ye(()=>n.mergedValueRef.value===e.internalKey),mergedDisabled:s,handleClick:b}},render(){const{mergedClsPrefix:e,mergedTheme:o,tmNode:t,menuProps:{renderLabel:n,nodeProps:i}}=this,l=i==null?void 0:i(t.rawNode);return h("div",Object.assign({},l,{role:"menuitem",class:[`${e}-menu-item`,l==null?void 0:l.class]}),h(Ro,{theme:o.peers.Tooltip,themeOverrides:o.peerOverrides.Tooltip,trigger:"hover",placement:this.dropdownPlacement,disabled:!this.dropdownEnabled||this.title===void 0,internalExtraClass:["menu-tooltip"]},{default:()=>n?n(t.rawNode):re(this.title),trigger:()=>h(no,{tmNode:t,clsPrefix:e,paddingLeft:this.paddingLeft,iconMarginRight:this.iconMarginRight,maxIconSize:this.maxIconSize,activeIconSize:this.activeIconSize,selected:this.selected,title:this.title,extra:this.extra,disabled:this.mergedDisabled,icon:this.icon,onClick:this.handleClick})}))}}),ft=F({name:"MenuDivider",setup(){const e=Y(ce),{mergedClsPrefixRef:o,isHorizontalRef:t}=e;return()=>t.value?null:h("div",{class:`${o.value}-menu-divider`})}}),pt=Re(ro),gt=Re(io),bt=Re(lo);function we(e){return e.type==="divider"||e.type==="render"}function xt(e){return e.type==="divider"}function Fe(e,o){const{rawNode:t}=e,{show:n}=t;if(n===!1)return null;if(we(t))return xt(t)?h(ft,Object.assign({key:e.key},t.props)):null;const{labelField:i}=o,{key:l,level:d,isGroup:c}=e,s=Object.assign(Object.assign({},t),{title:t.title||t[i],extra:t.titleExtra||t.extra,key:l,internalKey:l,level:d,root:d===0,isGroup:c});return e.children?e.isGroup?h(vt,ge(s,pt,{tmNode:e,tmNodes:e.children,key:l})):h(ze,ge(s,bt,{key:l,rawNodes:t[o.childrenField],tmNodes:e.children,tmNode:e})):h(mt,ge(s,gt,{key:l,tmNode:e}))}const He=[z("&::before","background-color: var(--n-item-color-hover);"),m("arrow",`
 color: var(--n-arrow-color-hover);
 `),m("icon",`
 color: var(--n-item-icon-color-hover);
 `),v("menu-item-content-header",`
 color: var(--n-item-text-color-hover);
 `,[z("a",`
 color: var(--n-item-text-color-hover);
 `),m("extra",`
 color: var(--n-item-text-color-hover);
 `)])],Be=[m("icon",`
 color: var(--n-item-icon-color-hover-horizontal);
 `),v("menu-item-content-header",`
 color: var(--n-item-text-color-hover-horizontal);
 `,[z("a",`
 color: var(--n-item-text-color-hover-horizontal);
 `),m("extra",`
 color: var(--n-item-text-color-hover-horizontal);
 `)])],yt=z([v("menu",`
 background-color: var(--n-color);
 color: var(--n-item-text-color);
 overflow: hidden;
 transition: background-color .3s var(--n-bezier);
 box-sizing: border-box;
 font-size: var(--n-font-size);
 padding-bottom: 6px;
 `,[N("horizontal",`
 max-width: 100%;
 width: 100%;
 display: flex;
 overflow: hidden;
 padding-bottom: 0;
 `,[v("submenu","margin: 0;"),v("menu-item","margin: 0;"),v("menu-item-content",`
 padding: 0 20px;
 border-bottom: 2px solid #0000;
 `,[z("&::before","display: none;"),N("selected","border-bottom: 2px solid var(--n-border-color-horizontal)")]),v("menu-item-content",[N("selected",[m("icon","color: var(--n-item-icon-color-active-horizontal);"),v("menu-item-content-header",`
 color: var(--n-item-text-color-active-horizontal);
 `,[z("a","color: var(--n-item-text-color-active-horizontal);"),m("extra","color: var(--n-item-text-color-active-horizontal);")])]),N("child-active",`
 border-bottom: 2px solid var(--n-border-color-horizontal);
 `,[v("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-horizontal);
 `,[z("a",`
 color: var(--n-item-text-color-child-active-horizontal);
 `),m("extra",`
 color: var(--n-item-text-color-child-active-horizontal);
 `)]),m("icon",`
 color: var(--n-item-icon-color-child-active-horizontal);
 `)]),le("disabled",[le("selected, child-active",[z("&:focus-within",Be)]),N("selected",[oe(null,[m("icon","color: var(--n-item-icon-color-active-hover-horizontal);"),v("menu-item-content-header",`
 color: var(--n-item-text-color-active-hover-horizontal);
 `,[z("a","color: var(--n-item-text-color-active-hover-horizontal);"),m("extra","color: var(--n-item-text-color-active-hover-horizontal);")])])]),N("child-active",[oe(null,[m("icon","color: var(--n-item-icon-color-child-active-hover-horizontal);"),v("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-hover-horizontal);
 `,[z("a","color: var(--n-item-text-color-child-active-hover-horizontal);"),m("extra","color: var(--n-item-text-color-child-active-hover-horizontal);")])])]),oe("border-bottom: 2px solid var(--n-border-color-horizontal);",Be)]),v("menu-item-content-header",[z("a","color: var(--n-item-text-color-horizontal);")])])]),le("responsive",[v("menu-item-content-header",`
 overflow: hidden;
 text-overflow: ellipsis;
 `)]),N("collapsed",[v("menu-item-content",[N("selected",[z("&::before",`
 background-color: var(--n-item-color-active-collapsed) !important;
 `)]),v("menu-item-content-header","opacity: 0;"),m("arrow","opacity: 0;"),m("icon","color: var(--n-item-icon-color-collapsed);")])]),v("menu-item",`
 height: var(--n-item-height);
 margin-top: 6px;
 position: relative;
 `),v("menu-item-content",`
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
 `,[z("> *","z-index: 1;"),z("&::before",`
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
 `),N("disabled",`
 opacity: .45;
 cursor: not-allowed;
 `),N("collapsed",[m("arrow","transform: rotate(0);")]),N("selected",[z("&::before","background-color: var(--n-item-color-active);"),m("arrow","color: var(--n-arrow-color-active);"),m("icon","color: var(--n-item-icon-color-active);"),v("menu-item-content-header",`
 color: var(--n-item-text-color-active);
 `,[z("a","color: var(--n-item-text-color-active);"),m("extra","color: var(--n-item-text-color-active);")])]),N("child-active",[v("menu-item-content-header",`
 color: var(--n-item-text-color-child-active);
 `,[z("a",`
 color: var(--n-item-text-color-child-active);
 `),m("extra",`
 color: var(--n-item-text-color-child-active);
 `)]),m("arrow",`
 color: var(--n-arrow-color-child-active);
 `),m("icon",`
 color: var(--n-item-icon-color-child-active);
 `)]),le("disabled",[le("selected, child-active",[z("&:focus-within",He)]),N("selected",[oe(null,[m("arrow","color: var(--n-arrow-color-active-hover);"),m("icon","color: var(--n-item-icon-color-active-hover);"),v("menu-item-content-header",`
 color: var(--n-item-text-color-active-hover);
 `,[z("a","color: var(--n-item-text-color-active-hover);"),m("extra","color: var(--n-item-text-color-active-hover);")])])]),N("child-active",[oe(null,[m("arrow","color: var(--n-arrow-color-child-active-hover);"),m("icon","color: var(--n-item-icon-color-child-active-hover);"),v("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-hover);
 `,[z("a","color: var(--n-item-text-color-child-active-hover);"),m("extra","color: var(--n-item-text-color-child-active-hover);")])])]),N("selected",[oe(null,[z("&::before","background-color: var(--n-item-color-active-hover);")])]),oe(null,He)]),m("icon",`
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
 `),m("arrow",`
 grid-area: arrow;
 font-size: 16px;
 color: var(--n-arrow-color);
 transform: rotate(180deg);
 opacity: 1;
 transition:
 color .3s var(--n-bezier),
 transform 0.2s var(--n-bezier),
 opacity 0.2s var(--n-bezier);
 `),v("menu-item-content-header",`
 grid-area: content;
 transition:
 color .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 opacity: 1;
 white-space: nowrap;
 color: var(--n-item-text-color);
 `,[z("a",`
 outline: none;
 text-decoration: none;
 transition: color .3s var(--n-bezier);
 color: var(--n-item-text-color);
 `,[z("&::before",`
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),m("extra",`
 font-size: .93em;
 color: var(--n-group-text-color);
 transition: color .3s var(--n-bezier);
 `)])]),v("submenu",`
 cursor: pointer;
 position: relative;
 margin-top: 6px;
 `,[v("menu-item-content",`
 height: var(--n-item-height);
 `),v("submenu-children",`
 overflow: hidden;
 padding: 0;
 `,[ko({duration:".2s"})])]),v("menu-item-group",[v("menu-item-group-title",`
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
 `)])]),v("menu-tooltip",[z("a",`
 color: inherit;
 text-decoration: none;
 `)]),v("menu-divider",`
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-divider-color);
 height: 1px;
 margin: 6px 18px;
 `)]);function oe(e,o){return[N("hover",e,o),z("&:hover",e,o)]}const Ct=Object.assign(Object.assign({},G.props),{options:{type:Array,default:()=>[]},collapsed:{type:Boolean,default:void 0},collapsedWidth:{type:Number,default:48},iconSize:{type:Number,default:20},collapsedIconSize:{type:Number,default:24},rootIndent:Number,indent:{type:Number,default:32},labelField:{type:String,default:"label"},keyField:{type:String,default:"key"},childrenField:{type:String,default:"children"},disabledField:{type:String,default:"disabled"},defaultExpandAll:Boolean,defaultExpandedKeys:Array,expandedKeys:Array,value:[String,Number],defaultValue:{type:[String,Number],default:null},mode:{type:String,default:"vertical"},watchProps:{type:Array,default:void 0},disabled:Boolean,show:{type:Boolean,default:!0},inverted:Boolean,"onUpdate:expandedKeys":[Function,Array],onUpdateExpandedKeys:[Function,Array],onUpdateValue:[Function,Array],"onUpdate:value":[Function,Array],expandIcon:Function,renderIcon:Function,renderLabel:Function,renderExtra:Function,dropdownProps:Object,accordion:Boolean,nodeProps:Function,dropdownPlacement:{type:String,default:"bottom"},responsive:Boolean,items:Array,onOpenNamesChange:[Function,Array],onSelect:[Function,Array],onExpandedNamesChange:[Function,Array],expandedNames:Array,defaultExpandedNames:Array}),_t=F({name:"Menu",props:Ct,setup(e){const{mergedClsPrefixRef:o,inlineThemeDisabled:t}=ae(e),n=G("Menu","-menu",yt,Po,e,o),i=Y(eo,null),l=C(()=>{var p;const{collapsed:k}=e;if(k!==void 0)return k;if(i){const{collapseModeRef:r,collapsedRef:_}=i;if(r.value==="width")return(p=_.value)!==null&&p!==void 0?p:!1}return!1}),d=C(()=>{const{keyField:p,childrenField:k,disabledField:r}=e;return be(e.items||e.options,{getIgnored(_){return we(_)},getChildren(_){return _[k]},getDisabled(_){return _[r]},getKey(_){var E;return(E=_[p])!==null&&E!==void 0?E:_.name}})}),c=C(()=>new Set(d.value.treeNodes.map(p=>p.key))),{watchProps:s}=e,f=$(null);s!=null&&s.includes("defaultValue")?he(()=>{f.value=e.defaultValue}):f.value=e.defaultValue;const b=ie(e,"value"),x=xe(b,f),u=$([]),y=()=>{u.value=e.defaultExpandAll?d.value.getNonLeafKeys():e.defaultExpandedNames||e.defaultExpandedKeys||d.value.getPath(x.value,{includeSelf:!1}).keyPath};s!=null&&s.includes("defaultExpandedKeys")?he(y):y();const S=To(e,["expandedNames","expandedKeys"]),I=xe(S,u),g=C(()=>d.value.treeNodes),w=C(()=>d.value.getPath(x.value).keyPath);Z(ce,{props:e,mergedCollapsedRef:l,mergedThemeRef:n,mergedValueRef:x,mergedExpandedKeysRef:I,activePathRef:w,mergedClsPrefixRef:o,isHorizontalRef:C(()=>e.mode==="horizontal"),invertedRef:ie(e,"inverted"),doSelect:K,toggleExpand:B});function K(p,k){const{"onUpdate:value":r,onUpdateValue:_,onSelect:E}=e;_&&D(_,p,k),r&&D(r,p,k),E&&D(E,p,k),f.value=p}function V(p){const{"onUpdate:expandedKeys":k,onUpdateExpandedKeys:r,onExpandedNamesChange:_,onOpenNamesChange:E}=e;k&&D(k,p),r&&D(r,p),_&&D(_,p),E&&D(E,p),u.value=p}function B(p){const k=Array.from(I.value),r=k.findIndex(_=>_===p);if(~r)k.splice(r,1);else{if(e.accordion&&c.value.has(p)){const _=k.findIndex(E=>c.value.has(E));_>-1&&k.splice(_,1)}k.push(p)}V(k)}const T=p=>{const k=d.value.getPath(p??x.value,{includeSelf:!1}).keyPath;if(!k.length)return;const r=Array.from(I.value),_=new Set([...r,...k]);e.accordion&&c.value.forEach(E=>{_.has(E)&&!k.includes(E)&&_.delete(E)}),V(Array.from(_))},R=C(()=>{const{inverted:p}=e,{common:{cubicBezierEaseInOut:k},self:r}=n.value,{borderRadius:_,borderColorHorizontal:E,fontSize:go,itemHeight:bo,dividerColor:xo}=r,a={"--n-divider-color":xo,"--n-bezier":k,"--n-font-size":go,"--n-border-color-horizontal":E,"--n-border-radius":_,"--n-item-height":bo};return p?(a["--n-group-text-color"]=r.groupTextColorInverted,a["--n-color"]=r.colorInverted,a["--n-item-text-color"]=r.itemTextColorInverted,a["--n-item-text-color-hover"]=r.itemTextColorHoverInverted,a["--n-item-text-color-active"]=r.itemTextColorActiveInverted,a["--n-item-text-color-child-active"]=r.itemTextColorChildActiveInverted,a["--n-item-text-color-child-active-hover"]=r.itemTextColorChildActiveInverted,a["--n-item-text-color-active-hover"]=r.itemTextColorActiveHoverInverted,a["--n-item-icon-color"]=r.itemIconColorInverted,a["--n-item-icon-color-hover"]=r.itemIconColorHoverInverted,a["--n-item-icon-color-active"]=r.itemIconColorActiveInverted,a["--n-item-icon-color-active-hover"]=r.itemIconColorActiveHoverInverted,a["--n-item-icon-color-child-active"]=r.itemIconColorChildActiveInverted,a["--n-item-icon-color-child-active-hover"]=r.itemIconColorChildActiveHoverInverted,a["--n-item-icon-color-collapsed"]=r.itemIconColorCollapsedInverted,a["--n-item-text-color-horizontal"]=r.itemTextColorHorizontalInverted,a["--n-item-text-color-hover-horizontal"]=r.itemTextColorHoverHorizontalInverted,a["--n-item-text-color-active-horizontal"]=r.itemTextColorActiveHorizontalInverted,a["--n-item-text-color-child-active-horizontal"]=r.itemTextColorChildActiveHorizontalInverted,a["--n-item-text-color-child-active-hover-horizontal"]=r.itemTextColorChildActiveHoverHorizontalInverted,a["--n-item-text-color-active-hover-horizontal"]=r.itemTextColorActiveHoverHorizontalInverted,a["--n-item-icon-color-horizontal"]=r.itemIconColorHorizontalInverted,a["--n-item-icon-color-hover-horizontal"]=r.itemIconColorHoverHorizontalInverted,a["--n-item-icon-color-active-horizontal"]=r.itemIconColorActiveHorizontalInverted,a["--n-item-icon-color-active-hover-horizontal"]=r.itemIconColorActiveHoverHorizontalInverted,a["--n-item-icon-color-child-active-horizontal"]=r.itemIconColorChildActiveHorizontalInverted,a["--n-item-icon-color-child-active-hover-horizontal"]=r.itemIconColorChildActiveHoverHorizontalInverted,a["--n-arrow-color"]=r.arrowColorInverted,a["--n-arrow-color-hover"]=r.arrowColorHoverInverted,a["--n-arrow-color-active"]=r.arrowColorActiveInverted,a["--n-arrow-color-active-hover"]=r.arrowColorActiveHoverInverted,a["--n-arrow-color-child-active"]=r.arrowColorChildActiveInverted,a["--n-arrow-color-child-active-hover"]=r.arrowColorChildActiveHoverInverted,a["--n-item-color-hover"]=r.itemColorHoverInverted,a["--n-item-color-active"]=r.itemColorActiveInverted,a["--n-item-color-active-hover"]=r.itemColorActiveHoverInverted,a["--n-item-color-active-collapsed"]=r.itemColorActiveCollapsedInverted):(a["--n-group-text-color"]=r.groupTextColor,a["--n-color"]=r.color,a["--n-item-text-color"]=r.itemTextColor,a["--n-item-text-color-hover"]=r.itemTextColorHover,a["--n-item-text-color-active"]=r.itemTextColorActive,a["--n-item-text-color-child-active"]=r.itemTextColorChildActive,a["--n-item-text-color-child-active-hover"]=r.itemTextColorChildActiveHover,a["--n-item-text-color-active-hover"]=r.itemTextColorActiveHover,a["--n-item-icon-color"]=r.itemIconColor,a["--n-item-icon-color-hover"]=r.itemIconColorHover,a["--n-item-icon-color-active"]=r.itemIconColorActive,a["--n-item-icon-color-active-hover"]=r.itemIconColorActiveHover,a["--n-item-icon-color-child-active"]=r.itemIconColorChildActive,a["--n-item-icon-color-child-active-hover"]=r.itemIconColorChildActiveHover,a["--n-item-icon-color-collapsed"]=r.itemIconColorCollapsed,a["--n-item-text-color-horizontal"]=r.itemTextColorHorizontal,a["--n-item-text-color-hover-horizontal"]=r.itemTextColorHoverHorizontal,a["--n-item-text-color-active-horizontal"]=r.itemTextColorActiveHorizontal,a["--n-item-text-color-child-active-horizontal"]=r.itemTextColorChildActiveHorizontal,a["--n-item-text-color-child-active-hover-horizontal"]=r.itemTextColorChildActiveHoverHorizontal,a["--n-item-text-color-active-hover-horizontal"]=r.itemTextColorActiveHoverHorizontal,a["--n-item-icon-color-horizontal"]=r.itemIconColorHorizontal,a["--n-item-icon-color-hover-horizontal"]=r.itemIconColorHoverHorizontal,a["--n-item-icon-color-active-horizontal"]=r.itemIconColorActiveHorizontal,a["--n-item-icon-color-active-hover-horizontal"]=r.itemIconColorActiveHoverHorizontal,a["--n-item-icon-color-child-active-horizontal"]=r.itemIconColorChildActiveHorizontal,a["--n-item-icon-color-child-active-hover-horizontal"]=r.itemIconColorChildActiveHoverHorizontal,a["--n-arrow-color"]=r.arrowColor,a["--n-arrow-color-hover"]=r.arrowColorHover,a["--n-arrow-color-active"]=r.arrowColorActive,a["--n-arrow-color-active-hover"]=r.arrowColorActiveHover,a["--n-arrow-color-child-active"]=r.arrowColorChildActive,a["--n-arrow-color-child-active-hover"]=r.arrowColorChildActiveHover,a["--n-item-color-hover"]=r.itemColorHover,a["--n-item-color-active"]=r.itemColorActive,a["--n-item-color-active-hover"]=r.itemColorActiveHover,a["--n-item-color-active-collapsed"]=r.itemColorActiveCollapsed),a}),P=t?se("menu",C(()=>e.inverted?"a":"b"),R,e):void 0,J=No(),W=$(null),fe=$(null);let M=!0;const Oe=()=>{var p;M?M=!1:(p=W.value)===null||p===void 0||p.sync({showAllItemsBeforeCalculate:!0})};function co(){return document.getElementById(J)}const de=$(-1);function uo(p){de.value=e.options.length-p}function ho(p){p||(de.value=-1)}const vo=C(()=>{const p=de.value;return{children:p===-1?[]:e.options.slice(p)}}),mo=C(()=>{const{childrenField:p,disabledField:k,keyField:r}=e;return be([vo.value],{getIgnored(_){return we(_)},getChildren(_){return _[p]},getDisabled(_){return _[k]},getKey(_){var E;return(E=_[r])!==null&&E!==void 0?E:_.name}})}),fo=C(()=>be([{}]).treeNodes[0]);function po(){var p;if(de.value===-1)return h(ze,{root:!0,level:0,key:"__ellpisisGroupPlaceholder__",internalKey:"__ellpisisGroupPlaceholder__",title:"···",tmNode:fo.value,domId:J,isEllipsisPlaceholder:!0});const k=mo.value.treeNodes[0],r=w.value,_=!!(!((p=k.children)===null||p===void 0)&&p.some(E=>r.includes(E.key)));return h(ze,{level:0,root:!0,key:"__ellpisisGroup__",internalKey:"__ellpisisGroup__",title:"···",virtualChildActive:_,tmNode:k,domId:J,rawNodes:k.rawNode.children||[],tmNodes:k.children||[],isEllipsisPlaceholder:!0})}return{mergedClsPrefix:o,controlledExpandedKeys:S,uncontrolledExpanededKeys:u,mergedExpandedKeys:I,uncontrolledValue:f,mergedValue:x,activePath:w,tmNodes:g,mergedTheme:n,mergedCollapsed:l,cssVars:t?void 0:R,themeClass:P==null?void 0:P.themeClass,overflowRef:W,counterRef:fe,updateCounter:()=>{},onResize:Oe,onUpdateOverflow:ho,onUpdateCount:uo,renderCounter:po,getCounter:co,onRender:P==null?void 0:P.onRender,showOption:T,deriveResponsiveState:Oe}},render(){const{mergedClsPrefix:e,mode:o,themeClass:t,onRender:n}=this;n==null||n();const i=()=>this.tmNodes.map(s=>Fe(s,this.$props)),d=o==="horizontal"&&this.responsive,c=()=>h("div",{role:o==="horizontal"?"menubar":"menu",class:[`${e}-menu`,t,`${e}-menu--${o}`,d&&`${e}-menu--responsive`,this.mergedCollapsed&&`${e}-menu--collapsed`],style:this.cssVars},d?h($o,{ref:"overflowRef",onUpdateOverflow:this.onUpdateOverflow,getCounter:this.getCounter,onUpdateCount:this.onUpdateCount,updateCounter:this.updateCounter,style:{width:"100%",display:"flex",overflow:"hidden"}},{default:i,counter:this.renderCounter}):i());return d?h(Ao,{onResize:this.onResize},{default:c}):c()}}),zt=Object.assign(Object.assign({},G.props),{trigger:String,xScrollable:Boolean,onScroll:Function,size:Number}),wt=F({name:"Scrollbar",props:zt,setup(){const e=$(null);return Object.assign(Object.assign({},{scrollTo:(...t)=>{var n;(n=e.value)===null||n===void 0||n.scrollTo(t[0],t[1])},scrollBy:(...t)=>{var n;(n=e.value)===null||n===void 0||n.scrollBy(t[0],t[1])}}),{scrollbarInstRef:e})},render(){return h(Ie,Object.assign({ref:"scrollbarInstRef"},this.$props),this.$slots)}}),St=wt,It=F({__name:"LayoutMenu",props:{isOpen:Boolean,inverted:Boolean},setup(e){const o=ke(),t=Ue(),n=C(()=>t.siderMenu);let i=$();he(()=>{i.value=o.path,t.activeMenuValue=o.path});const l=d=>{i.value=d};return(d,c)=>{const s=U,f=_t;return L(),ee(ve,null,[q("div",{class:Ce(["layout-sider__logo u__flex-c",{isHide:!e.isOpen}]),onClick:c[0]||(c[0]=b=>d.$router.push("/home"))},[A(s,{name:"vite"}),Eo(q("h1",null,"后台管理系统",512),[[Fo,e.isOpen]])],2),A(f,{inverted:e.inverted,indent:10,"root-indent":10,options:n.value,value:O(i),"onUpdate:value":l},null,8,["inverted","options","value"])],64)}}}),Rt=te(It,[["__scopeId","data-v-e1788f34"]]),kt={key:1},Pt=F({__name:"LayoutCrumbs",setup(e){const o=ke(),t=Pe(),n=qe([]),i=f=>f.split("/").reduce((b,x)=>{if(x){const u=b[b.length-1];u?b.push(u+"/"+x):b.push("/"+x)}return b},[]),l=f=>{const b=[];let x=t.getRoutes();return f.forEach(u=>{const y=x.find(S=>S.path===u);y&&b.push(y)}),b},d=(f,b="/")=>{if(!f)return;const x=[];return f.forEach(u=>{var S;const y={label:(S=u.meta)==null?void 0:S.title,key:Oo(u.path)||u.path.startsWith("/")?u.path:b+"/"+u.path,children:[]};u.children&&u.children.length>0?y.children=d(u.children,y.key):delete y.children,x.push(y)}),x},c=()=>{n.length=0;const f=l(i(o.path)),b=d(f);b&&n.push(...b)},s=f=>{t.push(f)};return he(()=>{o.path.startsWith("/redirect")||["/login","/404","/405","/403","/500"].includes(o.path)||c()}),(f,b)=>{const x=U,u=me;return L(),Q(O(Jo),null,{default:H(()=>[(L(!0),ee(ve,null,Ge(n,y=>(L(),Q(O(et),{class:"layout-crumbs-item",key:y.key},{default:H(()=>[y.children&&y.children.length>0?(L(),Q(u,{key:0,options:y.children,onSelect:s},{default:H(()=>[q("span",null,[We(_e(y.label)+" ",1),A(x,{name:"down",size:"18",style:{"margin-bottom":"2px"}})])]),_:2},1032,["options"])):(L(),ee("span",kt,_e(y.label),1))]),_:2},1024))),128))]),_:1})}}}),Tt=te(Pt,[["__scopeId","data-v-09b87012"]]),Nt=e=>(Ye("data-v-92463fb6"),e=e(),Xe(),e),At={class:"header-right_user-box"},$t={class:"header-right_user-avatar"},Et=["src"],Ft={class:"header-right_user-name"},Ot=Nt(()=>q("span",null,"admin",-1)),Lt=F({__name:"LayoutUser",setup(e){const o=Pe(),t=Lo();let n=C(()=>t.user?t.user.avatar:""),i=qe([{label:"修改密码",key:"editpassword"},{label:"退出系统",key:"logout"}]);const l=()=>{t.logout().then(()=>{o.push("/home"),window.$dialog.destroyAll(),window.location.reload()})};let d=()=>{window.$dialog.destroyAll()},c=s=>{["userinfo","editpassword"].includes(s)?o.push(`/userInfo/${s}`):window.$dialog.warning({closable:!1,showIcon:!1,style:{width:"20%"},title:()=>h("div",{style:{position:"absolute",top:0,left:0,right:0,textAlign:"center",height:"40px",lineHeight:"40px",background:"#cee6f0",color:"#1d69a3",fontWeight:"bold",fontSize:"16px"}},"退出登录"),content:()=>h("p",{style:{textAlign:"center",height:"80px",lineHeight:"108px",color:"#000",fontSize:"14px",fontWeight:"bolder",userSelect:"none"}},"是否退出当前账号？"),action:()=>h("div",{style:{width:"100%",display:"flex",justifyContent:"space-around"}},[h(Le,{onClick:d,style:{width:"40%"}},{default:()=>"取消"}),h(Le,{onClick:l,type:"info",style:{width:"40%"}},{default:()=>"退出"})])})};return(s,f)=>{const b=U,x=me;return L(),Q(x,{trigger:"click",options:O(i),onSelect:O(c),size:"small"},{default:H(()=>[q("div",At,[q("div",$t,[O(n)?(L(),ee("img",{key:0,class:"header-right_avatar",src:O(n)},null,8,Et)):(L(),Q(b,{key:1,name:"avatar",size:"35"}))]),q("div",Ft,[Ot,A(b,{name:"down",width:"10"})])])]),_:1},8,["options","onSelect"])}}}),Ht=te(Lt,[["__scopeId","data-v-92463fb6"]]),Bt=Je({id:"tag",state:()=>({tags:[],activeTagIndex:0,activeTag:"/home"}),getters:{tagsKey:e=>e.tags.map(o=>o.key)},actions:{addTag(e){this.tagsKey.includes(e.key)||this.tags.push(e),this.activeTag=e.key},removeTag(e){let o=this.tagsKey.indexOf(e);this.tags.splice(o,1),this.activeTag=this.tags[o-1].key},clearTag(){const e=Ho(this.tags);return this.tags=e.filter(o=>{if(o.key=="/home"||o.key==this.activeTag)return!0}),this.activeTag}}}),Mt={class:"layout-header__tag"},jt={class:"u__flex-ac",style:{height:"30px"}},Kt=F({__name:"LayoutTag",setup(e){const o=Pe(),t=ke(),n=Bt(),i=Ue();let l=C(()=>n.tags);Qe(()=>t.path,g=>{const w={title:t.meta.title,key:g};n.addTag(w)},{immediate:!0});const d=g=>{n.removeTag(g),i.activeMenuValue==g&&o.push(n.activeTag)},c=g=>{let{key:w}=g;o.push(w)},s=[{label:"关闭所有",key:"close",icon(){return h(U,{name:"menu"})}}],f=g=>{switch(g){case"close":let w=n.clearTag();o.push(w);break}},b=$(null),x=()=>{const g=b.value,w=g.$el.scrollLeft||0;g.scrollTo({left:w+200,debounce:!1,behavior:"smooth"},0),I()},u=()=>{var K;const g=b.value,w=((K=g.$el)==null?void 0:K.scrollLeft)||0;g.scrollTo({left:Math.max(0,w-200),debounce:!0,behavior:"smooth"},0),I()};let y=$(!1),S=$(!1);const I=()=>{setTimeout(()=>{const g=b.value,{scrollLeft:w,scrollWidth:K,clientWidth:V}=g.$el;S.value=w===0,y.value=w===K-V},100)};return(g,w)=>{const K=Bo,V=St,B=me;return L(),ee("div",Mt,[A(U,{class:Ce([{"arrow-wrapper__disabled":O(y)},"u__cursor"]),name:"arrow",onClick:u},null,8,["class"]),A(V,{ref_key:"scrollbar",ref:b,"x-scrollable":!0,size:0},{default:H(()=>[q("div",jt,[(L(!0),ee(ve,null,Ge(O(l),T=>(L(),Q(K,{key:T.key,class:"tag-item",closable:T.key!=="/home",type:T.key==O(i).activeMenuValue?"success":"default",size:"small",onClose:R=>d(T.key),onClick:R=>c(T)},{default:H(()=>[We(_e(T.title),1)]),_:2},1032,["closable","type","onClose","onClick"]))),128))])]),_:1},512),A(U,{class:Ce([{"arrow-wrapper__disabled":O(y)},"u__cursor"]),name:"arrow",style:{transform:"rotate(180deg)"},onClick:x},null,8,["class"]),A(B,{options:s,placement:"left-start",onSelect:f},{default:H(()=>[A(U,{class:"u__cursor",name:"menu",size:"18"})]),_:1})])}}}),Vt=te(Kt,[["__scopeId","data-v-95b60735"]]),ao=Je({id:"action",state:()=>({refreh:!0}),actions:{onRefreh(){this.refreh=!1;let e=null;e&&clearTimeout(e),e=setTimeout(()=>{this.refreh=!0},300)}}}),Dt={class:"layout-content"},Ut=F({__name:"LayoutContent",setup(e){const o=ao();let t=C(()=>o.refreh);return(n,i)=>{const l=Mo("RouterView");return L(),ee("div",Dt,[A(l,null,{default:H(({Component:d,route:c})=>[A(jo,{mode:"out-in",name:c.meta.transition||"mainFade"},{default:H(()=>[O(t)?(L(),Q(Ko(d),{key:c.path})):Vo("",!0)]),_:2},1032,["name"])]),_:1})])}}}),qt=te(Ut,[["__scopeId","data-v-633bd553"]]),Me=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]],X=(()=>{if(typeof document>"u")return!1;const e=Me[0],o={};for(const t of Me)if((t==null?void 0:t[1])in document){for(const[i,l]of t.entries())o[e[i]]=l;return o}return!1})(),je={change:X.fullscreenchange,error:X.fullscreenerror};let j={request(e=document.documentElement,o){return new Promise((t,n)=>{const i=()=>{j.off("change",i),t()};j.on("change",i);const l=e[X.requestFullscreen](o);l instanceof Promise&&l.then(i).catch(n)})},exit(){return new Promise((e,o)=>{if(!j.isFullscreen){e();return}const t=()=>{j.off("change",t),e()};j.on("change",t);const n=document[X.exitFullscreen]();n instanceof Promise&&n.then(t).catch(o)})},toggle(e,o){return j.isFullscreen?j.exit():j.request(e,o)},onchange(e){j.on("change",e)},onerror(e){j.on("error",e)},on(e,o){const t=je[e];t&&document.addEventListener(t,o,!1)},off(e,o){const t=je[e];t&&document.removeEventListener(t,o,!1)},raw:X};Object.defineProperties(j,{isFullscreen:{get:()=>!!document[X.fullscreenElement]},element:{enumerable:!0,get:()=>document[X.fullscreenElement]??void 0},isEnabled:{enumerable:!0,get:()=>!!document[X.fullscreenEnabled]}});X||(j={isEnabled:!1});const Ke=j,Gt={class:"action-items-wrapper"},Wt=F({__name:"LayoutAction",setup(e){const o=ao(),t=Do(),n=()=>{if(!Ke.isEnabled)return window.$msg.error("当前浏览器不支持全屏操作"),!1;Ke.toggle()},i=()=>{o.onRefreh()};let l=$(!1);return Qe(()=>l.value,()=>{t.changeTheme()}),(d,c)=>{const s=qo;return L(),ee("div",Gt,[A(U,{name:"reset",onClick:i,class:"action-item",size:"20"}),A(U,{name:"full",onClick:n,class:"action-item",size:"20"}),A(s,{class:"action-item",modelValue:O(l),"onUpdate:modelValue":c[0]||(c[0]=f=>Uo(l)?l.value=f:l=f)},{"checked-icon":H(()=>[A(U,{name:"dark"})]),"unchecked-icon":H(()=>[A(U,{name:"light"})]),_:1},8,["modelValue"])])}}}),Yt=te(Wt,[["__scopeId","data-v-23f23bf0"]]),so=e=>(Ye("data-v-78977b62"),e=e(),Xe(),e),Xt={class:"layout-header__box"},Jt=so(()=>q("div",{style:{flex:"1"}},null,-1)),Qt=so(()=>q("div",{class:"layout-header__shadow"},null,-1)),Zt=F({__name:"index",setup(e){let o=$(!0),t=$(!1),n=$(!1),i=$(50),l=$(155),d=$(!0);const c=f=>{f&&(d.value=!f)},s=()=>{d.value=!0};return(f,b)=>{const x=ht,u=at,y=nt,S=rt;return L(),Q(S,{"has-sider":"",class:"layout-box"},{default:H(()=>[A(x,{"collapse-mode":"width","show-trigger":"arrow-circle",bordered:O(o),inverted:O(t),"native-scrollbar":O(n),"collapsed-width":O(i),width:O(l),"onUpdate:collapsed":c,onAfterEnter:s},{default:H(()=>[A(Rt,{isOpen:O(d),inverted:O(t)},null,8,["isOpen","inverted"])]),_:1},8,["bordered","inverted","native-scrollbar","collapsed-width","width"]),A(S,null,{default:H(()=>[A(u,{bordered:O(o)},{default:H(()=>[q("div",Xt,[A(Tt),Jt,A(Yt),A(Ht)]),A(Vt),Qt]),_:1},8,["bordered"]),A(y,null,{default:H(()=>[A(qt)]),_:1}),A(Go,{color:"#18a058"})]),_:1})]),_:1})}}}),lr=te(Zt,[["__scopeId","data-v-78977b62"]]);export{lr as default};
