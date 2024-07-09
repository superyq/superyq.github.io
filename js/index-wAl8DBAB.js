import{g as E,t as d,r as $,h as C,p as ge,ah as Ve,ai as ee,d as x,aj as St,b as v,ak as It,al as R,f as g,am as Rt,an as Xe,ao as kt,ap as Ke,u as ae,j as Y,aq as $t,ar as Pt,o as Ze,as as Nt,k as Tt,l as se,m as At,at as Je,au as Et,q as Qe,av as Ot,aw as Bt,ae as te,c as ce,a7 as Ft,ax as Lt,v as Z,ay as $e,az as et,aA as Pe,aB as tt,aC as Ht,aD as ye,aE as we,aF as q,aG as le,M as me,aH as ze,aI as Mt,aJ as Ce,aK as Ne,aL as de,aM as jt,aN as Vt,aO as _e,w as pe,aP as Kt,aQ as Dt,V as Ut,aR as Yt,aS as Te,aT as ot,B as L,K as W,X as j,J as k,aU as qt,aV as Wt,aW as Se,F as O,a2 as U,a5 as oe,T as Ae,U as nt,C as G,D as B,L as Ee,P as ue,Q as ie,S as Gt,H as Ie,aX as rt,ad as Xt,aY as Zt,aZ as Jt,a_ as Qt,Y as eo,a$ as to,b0 as oo,b1 as no,b2 as ro,N as lo,b3 as io,a3 as ao,a4 as so}from"./index-D8FvNXUN.js";import{N as be,_ as co}from"./Dropdown-D7yZdgzE.js";import{i as uo}from"./validate-8Mdn0ZtA.js";import{_ as mo}from"./YSwitch.vue_vue_type_script_setup_true_lang-CpxiYOGJ.js";import{C as ho}from"./CopyRight-DSFsZjgo.js";import"./use-keyboard-cUwMenjY.js";const vo=E({name:"ChevronDownFilled",render(){return d("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},d("path",{d:"M3.20041 5.73966C3.48226 5.43613 3.95681 5.41856 4.26034 5.70041L8 9.22652L11.7397 5.70041C12.0432 5.41856 12.5177 5.43613 12.7996 5.73966C13.0815 6.0432 13.0639 6.51775 12.7603 6.7996L8.51034 10.7996C8.22258 11.0668 7.77743 11.0668 7.48967 10.7996L3.23966 6.7996C2.93613 6.51775 2.91856 6.0432 3.20041 5.73966Z",fill:"currentColor"}))}}),De=E({name:"SlotMachineNumber",props:{clsPrefix:{type:String,required:!0},value:{type:[Number,String],required:!0},oldOriginalNumber:{type:Number,default:void 0},newOriginalNumber:{type:Number,default:void 0}},setup(e){const t=$(null),o=$(e.value),n=$(e.value),l=$("up"),r=$(!1),a=C(()=>r.value?`${e.clsPrefix}-base-slot-machine-current-number--${l.value}-scroll`:null),m=C(()=>r.value?`${e.clsPrefix}-base-slot-machine-old-number--${l.value}-scroll`:null);ge(ee(e,"value"),(h,p)=>{o.value=p,n.value=h,Ve(s)});function s(){const h=e.newOriginalNumber,p=e.oldOriginalNumber;p===void 0||h===void 0||(h>p?f("up"):p>h&&f("down"))}function f(h){l.value=h,r.value=!1,Ve(()=>{var p;(p=t.value)===null||p===void 0||p.offsetWidth,r.value=!0})}return()=>{const{clsPrefix:h}=e;return d("span",{ref:t,class:`${h}-base-slot-machine-number`},o.value!==null?d("span",{class:[`${h}-base-slot-machine-old-number ${h}-base-slot-machine-old-number--top`,m.value]},o.value):null,d("span",{class:[`${h}-base-slot-machine-current-number`,a.value]},d("span",{ref:"numberWrapper",class:[`${h}-base-slot-machine-current-number__inner`,typeof e.value!="number"&&`${h}-base-slot-machine-current-number__inner--not-number`]},n.value)),o.value!==null?d("span",{class:[`${h}-base-slot-machine-old-number ${h}-base-slot-machine-old-number--bottom`,m.value]},o.value):null)}}}),{cubicBezierEaseOut:re}=St;function fo({duration:e=".2s"}={}){return[x("&.fade-up-width-expand-transition-leave-active",{transition:`
 opacity ${e} ${re},
 max-width ${e} ${re},
 transform ${e} ${re}
 `}),x("&.fade-up-width-expand-transition-enter-active",{transition:`
 opacity ${e} ${re},
 max-width ${e} ${re},
 transform ${e} ${re}
 `}),x("&.fade-up-width-expand-transition-enter-to",{opacity:1,transform:"translateX(0) translateY(0)"}),x("&.fade-up-width-expand-transition-enter-from",{maxWidth:"0 !important",opacity:0,transform:"translateY(60%)"}),x("&.fade-up-width-expand-transition-leave-from",{opacity:1,transform:"translateY(0)"}),x("&.fade-up-width-expand-transition-leave-to",{maxWidth:"0 !important",opacity:0,transform:"translateY(60%)"})]}const po=x([x("@keyframes n-base-slot-machine-fade-up-in",`
 from {
 transform: translateY(60%);
 opacity: 0;
 }
 to {
 transform: translateY(0);
 opacity: 1;
 }
 `),x("@keyframes n-base-slot-machine-fade-down-in",`
 from {
 transform: translateY(-60%);
 opacity: 0;
 }
 to {
 transform: translateY(0);
 opacity: 1;
 }
 `),x("@keyframes n-base-slot-machine-fade-up-out",`
 from {
 transform: translateY(0%);
 opacity: 1;
 }
 to {
 transform: translateY(-60%);
 opacity: 0;
 }
 `),x("@keyframes n-base-slot-machine-fade-down-out",`
 from {
 transform: translateY(0%);
 opacity: 1;
 }
 to {
 transform: translateY(60%);
 opacity: 0;
 }
 `),v("base-slot-machine",`
 overflow: hidden;
 white-space: nowrap;
 display: inline-block;
 height: 18px;
 line-height: 18px;
 `,[v("base-slot-machine-number",`
 display: inline-block;
 position: relative;
 height: 18px;
 width: .6em;
 max-width: .6em;
 `,[fo({duration:".2s"}),It({duration:".2s",delay:"0s"}),v("base-slot-machine-old-number",`
 display: inline-block;
 opacity: 0;
 position: absolute;
 left: 0;
 right: 0;
 `,[R("top",{transform:"translateY(-100%)"}),R("bottom",{transform:"translateY(100%)"}),R("down-scroll",{animation:"n-base-slot-machine-fade-down-out .2s cubic-bezier(0, 0, .2, 1)",animationIterationCount:1}),R("up-scroll",{animation:"n-base-slot-machine-fade-up-out .2s cubic-bezier(0, 0, .2, 1)",animationIterationCount:1})]),v("base-slot-machine-current-number",`
 display: inline-block;
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 right: 0;
 opacity: 1;
 transform: translateY(0);
 width: .6em;
 `,[R("down-scroll",{animation:"n-base-slot-machine-fade-down-in .2s cubic-bezier(0, 0, .2, 1)",animationIterationCount:1}),R("up-scroll",{animation:"n-base-slot-machine-fade-up-in .2s cubic-bezier(0, 0, .2, 1)",animationIterationCount:1}),g("inner",`
 display: inline-block;
 position: absolute;
 right: 0;
 top: 0;
 width: .6em;
 `,[R("not-number",`
 right: unset;
 left: 0;
 `)])])])])]),go=E({name:"BaseSlotMachine",props:{clsPrefix:{type:String,required:!0},value:{type:[Number,String],default:0},max:{type:Number,default:void 0},appeared:{type:Boolean,required:!0}},setup(e){Rt("-base-slot-machine",po,ee(e,"clsPrefix"));const t=$(),o=$(),n=C(()=>{if(typeof e.value=="string")return[];if(e.value<1)return[0];const l=[];let r=e.value;for(e.max!==void 0&&(r=Math.min(e.max,r));r>=1;)l.push(r%10),r/=10,r=Math.floor(r);return l.reverse(),l});return ge(ee(e,"value"),(l,r)=>{typeof l=="string"?(o.value=void 0,t.value=void 0):typeof r=="string"?(o.value=l,t.value=void 0):(o.value=l,t.value=r)}),()=>{const{value:l,clsPrefix:r}=e;return typeof l=="number"?d("span",{class:`${r}-base-slot-machine`},d(kt,{name:"fade-up-width-expand-transition",tag:"span"},{default:()=>n.value.map((a,m)=>d(De,{clsPrefix:r,key:n.value.length-m-1,oldOriginalNumber:t.value,newOriginalNumber:o.value,value:a}))}),d(Xe,{key:"+",width:!0},{default:()=>e.max!==void 0&&e.max<l?d(De,{clsPrefix:r,value:"+"}):null})):d("span",{class:`${r}-base-slot-machine`},l)}}}),bo=x([x("@keyframes badge-wave-spread",{from:{boxShadow:"0 0 0.5px 0px var(--n-ripple-color)",opacity:.6},to:{boxShadow:"0 0 0.5px 4.5px var(--n-ripple-color)",opacity:0}}),v("badge",`
 display: inline-flex;
 position: relative;
 vertical-align: middle;
 font-family: var(--n-font-family);
 `,[R("as-is",[v("badge-sup",{position:"static",transform:"translateX(0)"},[Ke({transformOrigin:"left bottom",originalTransform:"translateX(0)"})])]),R("dot",[v("badge-sup",`
 height: 8px;
 width: 8px;
 padding: 0;
 min-width: 8px;
 left: 100%;
 bottom: calc(100% - 4px);
 `,[x("::before","border-radius: 4px;")])]),v("badge-sup",`
 background: var(--n-color);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 color: #FFF;
 position: absolute;
 height: 18px;
 line-height: 18px;
 border-radius: 9px;
 padding: 0 6px;
 text-align: center;
 font-size: var(--n-font-size);
 transform: translateX(-50%);
 left: 100%;
 bottom: calc(100% - 9px);
 font-variant-numeric: tabular-nums;
 z-index: 1;
 display: flex;
 align-items: center;
 `,[Ke({transformOrigin:"left bottom",originalTransform:"translateX(-50%)"}),v("base-wave",{zIndex:1,animationDuration:"2s",animationIterationCount:"infinite",animationDelay:"1s",animationTimingFunction:"var(--n-ripple-bezier)",animationName:"badge-wave-spread"}),x("&::before",`
 opacity: 0;
 transform: scale(1);
 border-radius: 9px;
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)])])]),xo=Object.assign(Object.assign({},Y.props),{value:[String,Number],max:Number,dot:Boolean,type:{type:String,default:"default"},show:{type:Boolean,default:!0},showZero:Boolean,processing:Boolean,color:String,offset:Array}),yo=E({name:"Badge",props:xo,setup(e,{slots:t}){const{mergedClsPrefixRef:o,inlineThemeDisabled:n,mergedRtlRef:l}=ae(e),r=Y("Badge","-badge",bo,$t,e,o),a=$(!1),m=()=>{a.value=!0},s=()=>{a.value=!1},f=C(()=>e.show&&(e.dot||e.value!==void 0&&!(!e.showZero&&Number(e.value)<=0)||!Pt(t.value)));Ze(()=>{f.value&&(a.value=!0)});const h=Nt("Badge",l,o),p=C(()=>{const{type:z,color:w}=e,{common:{cubicBezierEaseInOut:b,cubicBezierEaseOut:S},self:{[Tt("color",z)]:H,fontFamily:V,fontSize:M}}=r.value;return{"--n-font-size":M,"--n-font-family":V,"--n-color":w||H,"--n-ripple-color":w||H,"--n-bezier":b,"--n-ripple-bezier":S}}),c=n?se("badge",C(()=>{let z="";const{type:w,color:b}=e;return w&&(z+=w[0]),b&&(z+=At(b)),z}),p,e):void 0,y=C(()=>{const{offset:z}=e;if(!z)return;const[w,b]=z,S=typeof w=="number"?`${w}px`:w,H=typeof b=="number"?`${b}px`:b;return{transform:`translate(calc(${h!=null&&h.value?"50%":"-50%"} + ${S}), ${H})`}});return{rtlEnabled:h,mergedClsPrefix:o,appeared:a,showBadge:f,handleAfterEnter:m,handleAfterLeave:s,cssVars:n?void 0:p,themeClass:c==null?void 0:c.themeClass,onRender:c==null?void 0:c.onRender,offsetStyle:y}},render(){var e;const{mergedClsPrefix:t,onRender:o,themeClass:n,$slots:l}=this;o==null||o();const r=(e=l.default)===null||e===void 0?void 0:e.call(l);return d("div",{class:[`${t}-badge`,this.rtlEnabled&&`${t}-badge--rtl`,n,{[`${t}-badge--dot`]:this.dot,[`${t}-badge--as-is`]:!r}],style:this.cssVars},r,d(Je,{name:"fade-in-scale-up-transition",onAfterEnter:this.handleAfterEnter,onAfterLeave:this.handleAfterLeave},{default:()=>this.showBadge?d("sup",{class:`${t}-badge-sup`,title:Et(this.value),style:this.offsetStyle},Qe(l.value,()=>[this.dot?null:d(go,{clsPrefix:t,appeared:this.appeared,max:this.max,value:this.value})]),this.processing?d(Ot,{clsPrefix:t}):null):null}))}}),Co=v("breadcrumb",`
 white-space: nowrap;
 cursor: default;
 line-height: var(--n-item-line-height);
`,[x("ul",`
 list-style: none;
 padding: 0;
 margin: 0;
 `),x("a",`
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
 `),x("&:not(:last-child)",[R("clickable",[g("link",`
 cursor: pointer;
 `,[x("&:hover",`
 background-color: var(--n-item-color-hover);
 `),x("&:active",`
 background-color: var(--n-item-color-pressed); 
 `)])])]),g("link",`
 padding: 4px;
 border-radius: var(--n-item-border-radius);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 color: var(--n-item-text-color);
 position: relative;
 `,[x("&:hover",`
 color: var(--n-item-text-color-hover);
 `,[v("icon",`
 color: var(--n-item-text-color-hover);
 `)]),x("&:active",`
 color: var(--n-item-text-color-pressed);
 `,[v("icon",`
 color: var(--n-item-text-color-pressed);
 `)])]),g("separator",`
 margin: 0 8px;
 color: var(--n-separator-color);
 transition: color .3s var(--n-bezier);
 user-select: none;
 -webkit-user-select: none;
 `),x("&:last-child",[g("link",`
 font-weight: var(--n-font-weight-active);
 cursor: unset;
 color: var(--n-item-text-color-active);
 `,[v("icon",`
 color: var(--n-item-text-color-active);
 `)]),g("separator",`
 display: none;
 `)])])]),lt=ce("n-breadcrumb"),_o=Object.assign(Object.assign({},Y.props),{separator:{type:String,default:"/"}}),wo=E({name:"Breadcrumb",props:_o,setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:o}=ae(e),n=Y("Breadcrumb","-breadcrumb",Co,Bt,e,t);te(lt,{separatorRef:ee(e,"separator"),mergedClsPrefixRef:t});const l=C(()=>{const{common:{cubicBezierEaseInOut:a},self:{separatorColor:m,itemTextColor:s,itemTextColorHover:f,itemTextColorPressed:h,itemTextColorActive:p,fontSize:c,fontWeightActive:y,itemBorderRadius:z,itemColorHover:w,itemColorPressed:b,itemLineHeight:S}}=n.value;return{"--n-font-size":c,"--n-bezier":a,"--n-item-text-color":s,"--n-item-text-color-hover":f,"--n-item-text-color-pressed":h,"--n-item-text-color-active":p,"--n-separator-color":m,"--n-item-color-hover":w,"--n-item-color-pressed":b,"--n-item-border-radius":z,"--n-font-weight-active":y,"--n-item-line-height":S}}),r=o?se("breadcrumb",void 0,l,e):void 0;return{mergedClsPrefix:t,cssVars:o?void 0:l,themeClass:r==null?void 0:r.themeClass,onRender:r==null?void 0:r.onRender}},render(){var e;return(e=this.onRender)===null||e===void 0||e.call(this),d("nav",{class:[`${this.mergedClsPrefix}-breadcrumb`,this.themeClass],style:this.cssVars,"aria-label":"Breadcrumb"},d("ul",null,this.$slots))}}),zo=(e=Lt?window:null)=>{const t=()=>{const{hash:l,host:r,hostname:a,href:m,origin:s,pathname:f,port:h,protocol:p,search:c}=(e==null?void 0:e.location)||{};return{hash:l,host:r,hostname:a,href:m,origin:s,pathname:f,port:h,protocol:p,search:c}},o=()=>{n.value=t()},n=$(t());return Ze(()=>{e&&(e.addEventListener("popstate",o),e.addEventListener("hashchange",o))}),Ft(()=>{e&&(e.removeEventListener("popstate",o),e.removeEventListener("hashchange",o))}),n},So={separator:String,href:String,clickable:{type:Boolean,default:!0},onClick:Function},Io=E({name:"BreadcrumbItem",props:So,setup(e,{slots:t}){const o=Z(lt,null);if(!o)return()=>null;const{separatorRef:n,mergedClsPrefixRef:l}=o,r=zo(),a=C(()=>e.href?"a":"span"),m=C(()=>r.value.href===e.href?"location":null);return()=>{const{value:s}=l;return d("li",{class:[`${s}-breadcrumb-item`,e.clickable&&`${s}-breadcrumb-item--clickable`]},d(a.value,{class:`${s}-breadcrumb-item__link`,"aria-current":m.value,href:e.href,onClick:e.onClick},t),d("span",{class:`${s}-breadcrumb-item__separator`,"aria-hidden":"true"},Qe(t.separator,()=>{var f;return[(f=e.separator)!==null&&f!==void 0?f:n.value]})))}}}),it=ce("n-layout-sider"),Oe={type:String,default:"static"},Ro=v("layout",`
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
 `),R("absolute-positioned",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),ko={embedded:Boolean,position:Oe,nativeScrollbar:{type:Boolean,default:!0},scrollbarProps:Object,onScroll:Function,contentClass:String,contentStyle:{type:[String,Object],default:""},hasSider:Boolean,siderPlacement:{type:String,default:"left"}},at=ce("n-layout");function st(e){return E({name:e?"LayoutContent":"Layout",props:Object.assign(Object.assign({},Y.props),ko),setup(t){const o=$(null),n=$(null),{mergedClsPrefixRef:l,inlineThemeDisabled:r}=ae(t),a=Y("Layout","-layout",Ro,$e,t,l);function m(w,b){if(t.nativeScrollbar){const{value:S}=o;S&&(b===void 0?S.scrollTo(w):S.scrollTo(w,b))}else{const{value:S}=n;S&&S.scrollTo(w,b)}}te(at,t);let s=0,f=0;const h=w=>{var b;const S=w.target;s=S.scrollLeft,f=S.scrollTop,(b=t.onScroll)===null||b===void 0||b.call(t,w)};et(()=>{if(t.nativeScrollbar){const w=o.value;w&&(w.scrollTop=f,w.scrollLeft=s)}});const p={display:"flex",flexWrap:"nowrap",width:"100%",flexDirection:"row"},c={scrollTo:m},y=C(()=>{const{common:{cubicBezierEaseInOut:w},self:b}=a.value;return{"--n-bezier":w,"--n-color":t.embedded?b.colorEmbedded:b.color,"--n-text-color":b.textColor}}),z=r?se("layout",C(()=>t.embedded?"e":""),y,t):void 0;return Object.assign({mergedClsPrefix:l,scrollableElRef:o,scrollbarInstRef:n,hasSiderStyle:p,mergedTheme:a,handleNativeElScroll:h,cssVars:r?void 0:y,themeClass:z==null?void 0:z.themeClass,onRender:z==null?void 0:z.onRender},c)},render(){var t;const{mergedClsPrefix:o,hasSider:n}=this;(t=this.onRender)===null||t===void 0||t.call(this);const l=n?this.hasSiderStyle:void 0,r=[this.themeClass,e&&`${o}-layout-content`,`${o}-layout`,`${o}-layout--${this.position}-positioned`];return d("div",{class:r,style:this.cssVars},this.nativeScrollbar?d("div",{ref:"scrollableElRef",class:[`${o}-layout-scroll-container`,this.contentClass],style:[this.contentStyle,l],onScroll:this.handleNativeElScroll},this.$slots):d(Pe,Object.assign({},this.scrollbarProps,{onScroll:this.onScroll,ref:"scrollbarInstRef",theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar,contentClass:this.contentClass,contentStyle:[this.contentStyle,l]}),this.$slots))}})}const $o=st(!1),Po=st(!0),No=v("layout-header",`
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 box-sizing: border-box;
 width: 100%;
 background-color: var(--n-color);
 color: var(--n-text-color);
`,[R("absolute-positioned",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 `),R("bordered",`
 border-bottom: solid 1px var(--n-border-color);
 `)]),To={position:Oe,inverted:Boolean,bordered:{type:Boolean,default:!1}},Ao=E({name:"LayoutHeader",props:Object.assign(Object.assign({},Y.props),To),setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:o}=ae(e),n=Y("Layout","-layout-header",No,$e,e,t),l=C(()=>{const{common:{cubicBezierEaseInOut:a},self:m}=n.value,s={"--n-bezier":a};return e.inverted?(s["--n-color"]=m.headerColorInverted,s["--n-text-color"]=m.textColorInverted,s["--n-border-color"]=m.headerBorderColorInverted):(s["--n-color"]=m.headerColor,s["--n-text-color"]=m.textColor,s["--n-border-color"]=m.headerBorderColor),s}),r=o?se("layout-header",C(()=>e.inverted?"a":"b"),l,e):void 0;return{mergedClsPrefix:t,cssVars:o?void 0:l,themeClass:r==null?void 0:r.themeClass,onRender:r==null?void 0:r.onRender}},render(){var e;const{mergedClsPrefix:t}=this;return(e=this.onRender)===null||e===void 0||e.call(this),d("div",{class:[`${t}-layout-header`,this.themeClass,this.position&&`${t}-layout-header--${this.position}-positioned`,this.bordered&&`${t}-layout-header--bordered`],style:this.cssVars},this.$slots)}}),Eo=v("layout-sider",`
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
`,[R("bordered",[g("border",`
 content: "";
 position: absolute;
 top: 0;
 bottom: 0;
 width: 1px;
 background-color: var(--n-border-color);
 transition: background-color .3s var(--n-bezier);
 `)]),g("left-placement",[R("bordered",[g("border",`
 right: 0;
 `)])]),R("right-placement",`
 justify-content: flex-start;
 `,[R("bordered",[g("border",`
 left: 0;
 `)]),R("collapsed",[v("layout-toggle-button",[v("base-icon",`
 transform: rotate(180deg);
 `)]),v("layout-toggle-bar",[x("&:hover",[g("top",{transform:"rotate(-12deg) scale(1.15) translateY(-2px)"}),g("bottom",{transform:"rotate(12deg) scale(1.15) translateY(2px)"})])])]),v("layout-toggle-button",`
 left: 0;
 transform: translateX(-50%) translateY(-50%);
 `,[v("base-icon",`
 transform: rotate(0);
 `)]),v("layout-toggle-bar",`
 left: -28px;
 transform: rotate(180deg);
 `,[x("&:hover",[g("top",{transform:"rotate(12deg) scale(1.15) translateY(-2px)"}),g("bottom",{transform:"rotate(-12deg) scale(1.15) translateY(2px)"})])])]),R("collapsed",[v("layout-toggle-bar",[x("&:hover",[g("top",{transform:"rotate(-12deg) scale(1.15) translateY(-2px)"}),g("bottom",{transform:"rotate(12deg) scale(1.15) translateY(2px)"})])]),v("layout-toggle-button",[v("base-icon",`
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
 `,[g("top, bottom",`
 position: absolute;
 width: 4px;
 border-radius: 2px;
 height: 38px;
 left: 14px;
 transition: 
 background-color .3s var(--n-bezier),
 transform .3s var(--n-bezier);
 `),g("bottom",`
 position: absolute;
 top: 34px;
 `),x("&:hover",[g("top",{transform:"rotate(12deg) scale(1.15) translateY(-2px)"}),g("bottom",{transform:"rotate(-12deg) scale(1.15) translateY(2px)"})]),g("top, bottom",{backgroundColor:"var(--n-toggle-bar-color)"}),x("&:hover",[g("top, bottom",{backgroundColor:"var(--n-toggle-bar-color-hover)"})])]),g("border",`
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
 `),R("show-content",[v("layout-sider-scroll-container",{opacity:1})]),R("absolute-positioned",`
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 `)]),Oo=E({name:"LayoutToggleButton",props:{clsPrefix:{type:String,required:!0},onClick:Function},render(){const{clsPrefix:e}=this;return d("div",{class:`${e}-layout-toggle-button`,onClick:this.onClick},d(tt,{clsPrefix:e},{default:()=>d(Ht,null)}))}}),Bo=E({props:{clsPrefix:{type:String,required:!0},onClick:Function},render(){const{clsPrefix:e}=this;return d("div",{onClick:this.onClick,class:`${e}-layout-toggle-bar`},d("div",{class:`${e}-layout-toggle-bar__top`}),d("div",{class:`${e}-layout-toggle-bar__bottom`}))}}),Fo={position:Oe,bordered:Boolean,collapsedWidth:{type:Number,default:48},width:{type:[Number,String],default:272},contentClass:String,contentStyle:{type:[String,Object],default:""},collapseMode:{type:String,default:"transform"},collapsed:{type:Boolean,default:void 0},defaultCollapsed:Boolean,showCollapsedContent:{type:Boolean,default:!0},showTrigger:{type:[Boolean,String],default:!1},nativeScrollbar:{type:Boolean,default:!0},inverted:Boolean,scrollbarProps:Object,triggerClass:String,triggerStyle:[String,Object],collapsedTriggerClass:String,collapsedTriggerStyle:[String,Object],"onUpdate:collapsed":[Function,Array],onUpdateCollapsed:[Function,Array],onAfterEnter:Function,onAfterLeave:Function,onExpand:[Function,Array],onCollapse:[Function,Array],onScroll:Function},Lo=E({name:"LayoutSider",props:Object.assign(Object.assign({},Y.props),Fo),setup(e){const t=Z(at),o=$(null),n=$(null),l=C(()=>ye(s.value?e.collapsedWidth:e.width)),r=C(()=>e.collapseMode!=="transform"?{}:{minWidth:ye(e.width)}),a=C(()=>t?t.siderPlacement:"left"),m=$(e.defaultCollapsed),s=we(ee(e,"collapsed"),m);function f(A,P){if(e.nativeScrollbar){const{value:T}=o;T&&(P===void 0?T.scrollTo(A):T.scrollTo(A,P))}else{const{value:T}=n;T&&T.scrollTo(A,P)}}function h(){const{"onUpdate:collapsed":A,onUpdateCollapsed:P,onExpand:T,onCollapse:Q}=e,{value:X}=s;P&&q(P,!X),A&&q(A,!X),m.value=!X,X?T&&q(T):Q&&q(Q)}let p=0,c=0;const y=A=>{var P;const T=A.target;p=T.scrollLeft,c=T.scrollTop,(P=e.onScroll)===null||P===void 0||P.call(e,A)};et(()=>{if(e.nativeScrollbar){const A=o.value;A&&(A.scrollTop=c,A.scrollLeft=p)}}),te(it,{collapsedRef:s,collapseModeRef:ee(e,"collapseMode")});const{mergedClsPrefixRef:z,inlineThemeDisabled:w}=ae(e),b=Y("Layout","-layout-sider",Eo,$e,e,z);function S(A){var P,T;A.propertyName==="max-width"&&(s.value?(P=e.onAfterLeave)===null||P===void 0||P.call(e):(T=e.onAfterEnter)===null||T===void 0||T.call(e))}const H={scrollTo:f},V=C(()=>{const{common:{cubicBezierEaseInOut:A},self:P}=b.value,{siderToggleButtonColor:T,siderToggleButtonBorder:Q,siderToggleBarColor:X,siderToggleBarColorHover:xe}=P,K={"--n-bezier":A,"--n-toggle-button-color":T,"--n-toggle-button-border":Q,"--n-toggle-bar-color":X,"--n-toggle-bar-color-hover":xe};return e.inverted?(K["--n-color"]=P.siderColorInverted,K["--n-text-color"]=P.textColorInverted,K["--n-border-color"]=P.siderBorderColorInverted,K["--n-toggle-button-icon-color"]=P.siderToggleButtonIconColorInverted,K.__invertScrollbar=P.__invertScrollbar):(K["--n-color"]=P.siderColor,K["--n-text-color"]=P.textColor,K["--n-border-color"]=P.siderBorderColor,K["--n-toggle-button-icon-color"]=P.siderToggleButtonIconColor),K}),M=w?se("layout-sider",C(()=>e.inverted?"a":"b"),V,e):void 0;return Object.assign({scrollableElRef:o,scrollbarInstRef:n,mergedClsPrefix:z,mergedTheme:b,styleMaxWidth:l,mergedCollapsed:s,scrollContainerStyle:r,siderPlacement:a,handleNativeElScroll:y,handleTransitionend:S,handleTriggerClick:h,inlineThemeDisabled:w,cssVars:V,themeClass:M==null?void 0:M.themeClass,onRender:M==null?void 0:M.onRender},H)},render(){var e;const{mergedClsPrefix:t,mergedCollapsed:o,showTrigger:n}=this;return(e=this.onRender)===null||e===void 0||e.call(this),d("aside",{class:[`${t}-layout-sider`,this.themeClass,`${t}-layout-sider--${this.position}-positioned`,`${t}-layout-sider--${this.siderPlacement}-placement`,this.bordered&&`${t}-layout-sider--bordered`,o&&`${t}-layout-sider--collapsed`,(!o||this.showCollapsedContent)&&`${t}-layout-sider--show-content`],onTransitionend:this.handleTransitionend,style:[this.inlineThemeDisabled?void 0:this.cssVars,{maxWidth:this.styleMaxWidth,width:ye(this.width)}]},this.nativeScrollbar?d("div",{class:[`${t}-layout-sider-scroll-container`,this.contentClass],onScroll:this.handleNativeElScroll,style:[this.scrollContainerStyle,{overflow:"auto"},this.contentStyle],ref:"scrollableElRef"},this.$slots):d(Pe,Object.assign({},this.scrollbarProps,{onScroll:this.onScroll,ref:"scrollbarInstRef",style:this.scrollContainerStyle,contentStyle:this.contentStyle,contentClass:this.contentClass,theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar,builtinThemeOverrides:this.inverted&&this.cssVars.__invertScrollbar==="true"?{colorHover:"rgba(255, 255, 255, .4)",color:"rgba(255, 255, 255, .3)"}:void 0}),this.$slots),n?n==="bar"?d(Bo,{clsPrefix:t,class:o?this.collapsedTriggerClass:this.triggerClass,style:o?this.collapsedTriggerStyle:this.triggerStyle,onClick:this.handleTriggerClick}):d(Oo,{clsPrefix:t,class:o?this.collapsedTriggerClass:this.triggerClass,style:o?this.collapsedTriggerStyle:this.triggerStyle,onClick:this.handleTriggerClick}):null,this.bordered?d("div",{class:`${t}-layout-sider__border`}):null)}}),he=ce("n-menu"),Be=ce("n-submenu"),Fe=ce("n-menu-item-group"),fe=8;function Le(e){const t=Z(he),{props:o,mergedCollapsedRef:n}=t,l=Z(Be,null),r=Z(Fe,null),a=C(()=>o.mode==="horizontal"),m=C(()=>a.value?o.dropdownPlacement:"tmNodes"in e?"right-start":"right"),s=C(()=>{var c;return Math.max((c=o.collapsedIconSize)!==null&&c!==void 0?c:o.iconSize,o.iconSize)}),f=C(()=>{var c;return!a.value&&e.root&&n.value&&(c=o.collapsedIconSize)!==null&&c!==void 0?c:o.iconSize}),h=C(()=>{if(a.value||a.value)return;const{collapsedWidth:c,indent:y,rootIndent:z}=o,{root:w,isGroup:b}=e,S=z===void 0?y:z;return w?n.value?c/2-s.value/2:S:r&&typeof r.paddingLeftRef.value=="number"?y/2+r.paddingLeftRef.value:l&&typeof l.paddingLeftRef.value=="number"?(b?y/2:y)+l.paddingLeftRef.value:0}),p=C(()=>{const{collapsedWidth:c,indent:y,rootIndent:z}=o,{value:w}=s,{root:b}=e;return a.value||!b||!n.value?fe:(z===void 0?y:z)+w+fe-(c+w)/2});return{dropdownPlacement:m,activeIconSize:f,maxIconSize:s,paddingLeft:h,iconMarginRight:p,NMenu:t,NSubmenu:l}}const He={internalKey:{type:[String,Number],required:!0},root:Boolean,isGroup:Boolean,level:{type:Number,required:!0},title:[String,Function],extra:[String,Function]},ct=Object.assign(Object.assign({},He),{tmNode:{type:Object,required:!0},tmNodes:{type:Array,required:!0}}),Ho=E({name:"MenuOptionGroup",props:ct,setup(e){te(Be,null);const t=Le(e);te(Fe,{paddingLeftRef:t.paddingLeft});const{mergedClsPrefixRef:o,props:n}=Z(he);return function(){const{value:l}=o,r=t.paddingLeft.value,{nodeProps:a}=n,m=a==null?void 0:a(e.tmNode.rawNode);return d("div",{class:`${l}-menu-item-group`,role:"group"},d("div",Object.assign({},m,{class:[`${l}-menu-item-group-title`,m==null?void 0:m.class],style:[(m==null?void 0:m.style)||"",r!==void 0?`padding-left: ${r}px;`:""]}),le(e.title),e.extra?d(me,null," ",le(e.extra)):null),d("div",null,e.tmNodes.map(s=>Me(s,n))))}}}),dt=E({name:"MenuOptionContent",props:{collapsed:Boolean,disabled:Boolean,title:[String,Function],icon:Function,extra:[String,Function],showArrow:Boolean,childActive:Boolean,hover:Boolean,paddingLeft:Number,selected:Boolean,maxIconSize:{type:Number,required:!0},activeIconSize:{type:Number,required:!0},iconMarginRight:{type:Number,required:!0},clsPrefix:{type:String,required:!0},onClick:Function,tmNode:{type:Object,required:!0},isEllipsisPlaceholder:Boolean},setup(e){const{props:t}=Z(he);return{menuProps:t,style:C(()=>{const{paddingLeft:o}=e;return{paddingLeft:o&&`${o}px`}}),iconStyle:C(()=>{const{maxIconSize:o,activeIconSize:n,iconMarginRight:l}=e;return{width:`${o}px`,height:`${o}px`,fontSize:`${n}px`,marginRight:`${l}px`}})}},render(){const{clsPrefix:e,tmNode:t,menuProps:{renderIcon:o,renderLabel:n,renderExtra:l,expandIcon:r}}=this,a=o?o(t.rawNode):le(this.icon);return d("div",{onClick:m=>{var s;(s=this.onClick)===null||s===void 0||s.call(this,m)},role:"none",class:[`${e}-menu-item-content`,{[`${e}-menu-item-content--selected`]:this.selected,[`${e}-menu-item-content--collapsed`]:this.collapsed,[`${e}-menu-item-content--child-active`]:this.childActive,[`${e}-menu-item-content--disabled`]:this.disabled,[`${e}-menu-item-content--hover`]:this.hover}],style:this.style},a&&d("div",{class:`${e}-menu-item-content__icon`,style:this.iconStyle,role:"none"},[a]),d("div",{class:`${e}-menu-item-content-header`,role:"none"},this.isEllipsisPlaceholder?this.title:n?n(t.rawNode):le(this.title),this.extra||l?d("span",{class:`${e}-menu-item-content-header__extra`}," ",l?l(t.rawNode):le(this.extra)):null),this.showArrow?d(tt,{ariaHidden:!0,class:`${e}-menu-item-content__arrow`,clsPrefix:e},{default:()=>r?r(t.rawNode):d(vo,null)}):null)}}),ut=Object.assign(Object.assign({},He),{rawNodes:{type:Array,default:()=>[]},tmNodes:{type:Array,default:()=>[]},tmNode:{type:Object,required:!0},disabled:Boolean,icon:Function,onClick:Function,domId:String,virtualChildActive:{type:Boolean,default:void 0},isEllipsisPlaceholder:Boolean}),Re=E({name:"Submenu",props:ut,setup(e){const t=Le(e),{NMenu:o,NSubmenu:n}=t,{props:l,mergedCollapsedRef:r,mergedThemeRef:a}=o,m=C(()=>{const{disabled:c}=e;return n!=null&&n.mergedDisabledRef.value||l.disabled?!0:c}),s=$(!1);te(Be,{paddingLeftRef:t.paddingLeft,mergedDisabledRef:m}),te(Fe,null);function f(){const{onClick:c}=e;c&&c()}function h(){m.value||(r.value||o.toggleExpand(e.internalKey),f())}function p(c){s.value=c}return{menuProps:l,mergedTheme:a,doSelect:o.doSelect,inverted:o.invertedRef,isHorizontal:o.isHorizontalRef,mergedClsPrefix:o.mergedClsPrefixRef,maxIconSize:t.maxIconSize,activeIconSize:t.activeIconSize,iconMarginRight:t.iconMarginRight,dropdownPlacement:t.dropdownPlacement,dropdownShow:s,paddingLeft:t.paddingLeft,mergedDisabled:m,mergedValue:o.mergedValueRef,childActive:ze(()=>{var c;return(c=e.virtualChildActive)!==null&&c!==void 0?c:o.activePathRef.value.includes(e.internalKey)}),collapsed:C(()=>l.mode==="horizontal"?!1:r.value?!0:!o.mergedExpandedKeysRef.value.includes(e.internalKey)),dropdownEnabled:C(()=>!m.value&&(l.mode==="horizontal"||r.value)),handlePopoverShowChange:p,handleClick:h}},render(){var e;const{mergedClsPrefix:t,menuProps:{renderIcon:o,renderLabel:n}}=this,l=()=>{const{isHorizontal:a,paddingLeft:m,collapsed:s,mergedDisabled:f,maxIconSize:h,activeIconSize:p,title:c,childActive:y,icon:z,handleClick:w,menuProps:{nodeProps:b},dropdownShow:S,iconMarginRight:H,tmNode:V,mergedClsPrefix:M,isEllipsisPlaceholder:A,extra:P}=this,T=b==null?void 0:b(V.rawNode);return d("div",Object.assign({},T,{class:[`${M}-menu-item`,T==null?void 0:T.class],role:"menuitem"}),d(dt,{tmNode:V,paddingLeft:m,collapsed:s,disabled:f,iconMarginRight:H,maxIconSize:h,activeIconSize:p,title:c,extra:P,showArrow:!a,childActive:y,clsPrefix:M,icon:z,hover:S,onClick:w,isEllipsisPlaceholder:A}))},r=()=>d(Xe,null,{default:()=>{const{tmNodes:a,collapsed:m}=this;return m?null:d("div",{class:`${t}-submenu-children`,role:"menu"},a.map(s=>Me(s,this.menuProps)))}});return this.root?d(be,Object.assign({size:"large",trigger:"hover"},(e=this.menuProps)===null||e===void 0?void 0:e.dropdownProps,{themeOverrides:this.mergedTheme.peerOverrides.Dropdown,theme:this.mergedTheme.peers.Dropdown,builtinThemeOverrides:{fontSizeLarge:"14px",optionIconSizeLarge:"18px"},value:this.mergedValue,disabled:!this.dropdownEnabled,placement:this.dropdownPlacement,keyField:this.menuProps.keyField,labelField:this.menuProps.labelField,childrenField:this.menuProps.childrenField,onUpdateShow:this.handlePopoverShowChange,options:this.rawNodes,onSelect:this.doSelect,inverted:this.inverted,renderIcon:o,renderLabel:n}),{default:()=>d("div",{class:`${t}-submenu`,role:"menuitem","aria-expanded":!this.collapsed,id:this.domId},l(),this.isHorizontal?null:r())}):d("div",{class:`${t}-submenu`,role:"menuitem","aria-expanded":!this.collapsed,id:this.domId},l(),r())}}),mt=Object.assign(Object.assign({},He),{tmNode:{type:Object,required:!0},disabled:Boolean,icon:Function,onClick:Function}),Mo=E({name:"MenuOption",props:mt,setup(e){const t=Le(e),{NSubmenu:o,NMenu:n}=t,{props:l,mergedClsPrefixRef:r,mergedCollapsedRef:a}=n,m=o?o.mergedDisabledRef:{value:!1},s=C(()=>m.value||e.disabled);function f(p){const{onClick:c}=e;c&&c(p)}function h(p){s.value||(n.doSelect(e.internalKey,e.tmNode.rawNode),f(p))}return{mergedClsPrefix:r,dropdownPlacement:t.dropdownPlacement,paddingLeft:t.paddingLeft,iconMarginRight:t.iconMarginRight,maxIconSize:t.maxIconSize,activeIconSize:t.activeIconSize,mergedTheme:n.mergedThemeRef,menuProps:l,dropdownEnabled:ze(()=>e.root&&a.value&&l.mode!=="horizontal"&&!s.value),selected:ze(()=>n.mergedValueRef.value===e.internalKey),mergedDisabled:s,handleClick:h}},render(){const{mergedClsPrefix:e,mergedTheme:t,tmNode:o,menuProps:{renderLabel:n,nodeProps:l}}=this,r=l==null?void 0:l(o.rawNode);return d("div",Object.assign({},r,{role:"menuitem",class:[`${e}-menu-item`,r==null?void 0:r.class]}),d(Mt,{theme:t.peers.Tooltip,themeOverrides:t.peerOverrides.Tooltip,trigger:"hover",placement:this.dropdownPlacement,disabled:!this.dropdownEnabled||this.title===void 0,internalExtraClass:["menu-tooltip"]},{default:()=>n?n(o.rawNode):le(this.title),trigger:()=>d(dt,{tmNode:o,clsPrefix:e,paddingLeft:this.paddingLeft,iconMarginRight:this.iconMarginRight,maxIconSize:this.maxIconSize,activeIconSize:this.activeIconSize,selected:this.selected,title:this.title,extra:this.extra,disabled:this.mergedDisabled,icon:this.icon,onClick:this.handleClick})}))}}),jo=E({name:"MenuDivider",setup(){const e=Z(he),{mergedClsPrefixRef:t,isHorizontalRef:o}=e;return()=>o.value?null:d("div",{class:`${t.value}-menu-divider`})}}),Vo=Ne(ct),Ko=Ne(mt),Do=Ne(ut);function ke(e){return e.type==="divider"||e.type==="render"}function Uo(e){return e.type==="divider"}function Me(e,t){const{rawNode:o}=e,{show:n}=o;if(n===!1)return null;if(ke(o))return Uo(o)?d(jo,Object.assign({key:e.key},o.props)):null;const{labelField:l}=t,{key:r,level:a,isGroup:m}=e,s=Object.assign(Object.assign({},o),{title:o.title||o[l],extra:o.titleExtra||o.extra,key:r,internalKey:r,level:a,root:a===0,isGroup:m});return e.children?e.isGroup?d(Ho,Ce(s,Vo,{tmNode:e,tmNodes:e.children,key:r})):d(Re,Ce(s,Do,{key:r,rawNodes:o[t.childrenField],tmNodes:e.children,tmNode:e})):d(Mo,Ce(s,Ko,{key:r,tmNode:e}))}const Ue=[x("&::before","background-color: var(--n-item-color-hover);"),g("arrow",`
 color: var(--n-arrow-color-hover);
 `),g("icon",`
 color: var(--n-item-icon-color-hover);
 `),v("menu-item-content-header",`
 color: var(--n-item-text-color-hover);
 `,[x("a",`
 color: var(--n-item-text-color-hover);
 `),g("extra",`
 color: var(--n-item-text-color-hover);
 `)])],Ye=[g("icon",`
 color: var(--n-item-icon-color-hover-horizontal);
 `),v("menu-item-content-header",`
 color: var(--n-item-text-color-hover-horizontal);
 `,[x("a",`
 color: var(--n-item-text-color-hover-horizontal);
 `),g("extra",`
 color: var(--n-item-text-color-hover-horizontal);
 `)])],Yo=x([v("menu",`
 background-color: var(--n-color);
 color: var(--n-item-text-color);
 overflow: hidden;
 transition: background-color .3s var(--n-bezier);
 box-sizing: border-box;
 font-size: var(--n-font-size);
 padding-bottom: 6px;
 `,[R("horizontal",`
 max-width: 100%;
 width: 100%;
 display: flex;
 overflow: hidden;
 padding-bottom: 0;
 `,[v("submenu","margin: 0;"),v("menu-item","margin: 0;"),v("menu-item-content",`
 padding: 0 20px;
 border-bottom: 2px solid #0000;
 `,[x("&::before","display: none;"),R("selected","border-bottom: 2px solid var(--n-border-color-horizontal)")]),v("menu-item-content",[R("selected",[g("icon","color: var(--n-item-icon-color-active-horizontal);"),v("menu-item-content-header",`
 color: var(--n-item-text-color-active-horizontal);
 `,[x("a","color: var(--n-item-text-color-active-horizontal);"),g("extra","color: var(--n-item-text-color-active-horizontal);")])]),R("child-active",`
 border-bottom: 2px solid var(--n-border-color-horizontal);
 `,[v("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-horizontal);
 `,[x("a",`
 color: var(--n-item-text-color-child-active-horizontal);
 `),g("extra",`
 color: var(--n-item-text-color-child-active-horizontal);
 `)]),g("icon",`
 color: var(--n-item-icon-color-child-active-horizontal);
 `)]),de("disabled",[de("selected, child-active",[x("&:focus-within",Ye)]),R("selected",[ne(null,[g("icon","color: var(--n-item-icon-color-active-hover-horizontal);"),v("menu-item-content-header",`
 color: var(--n-item-text-color-active-hover-horizontal);
 `,[x("a","color: var(--n-item-text-color-active-hover-horizontal);"),g("extra","color: var(--n-item-text-color-active-hover-horizontal);")])])]),R("child-active",[ne(null,[g("icon","color: var(--n-item-icon-color-child-active-hover-horizontal);"),v("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-hover-horizontal);
 `,[x("a","color: var(--n-item-text-color-child-active-hover-horizontal);"),g("extra","color: var(--n-item-text-color-child-active-hover-horizontal);")])])]),ne("border-bottom: 2px solid var(--n-border-color-horizontal);",Ye)]),v("menu-item-content-header",[x("a","color: var(--n-item-text-color-horizontal);")])])]),de("responsive",[v("menu-item-content-header",`
 overflow: hidden;
 text-overflow: ellipsis;
 `)]),R("collapsed",[v("menu-item-content",[R("selected",[x("&::before",`
 background-color: var(--n-item-color-active-collapsed) !important;
 `)]),v("menu-item-content-header","opacity: 0;"),g("arrow","opacity: 0;"),g("icon","color: var(--n-item-icon-color-collapsed);")])]),v("menu-item",`
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
 `),R("disabled",`
 opacity: .45;
 cursor: not-allowed;
 `),R("collapsed",[g("arrow","transform: rotate(0);")]),R("selected",[x("&::before","background-color: var(--n-item-color-active);"),g("arrow","color: var(--n-arrow-color-active);"),g("icon","color: var(--n-item-icon-color-active);"),v("menu-item-content-header",`
 color: var(--n-item-text-color-active);
 `,[x("a","color: var(--n-item-text-color-active);"),g("extra","color: var(--n-item-text-color-active);")])]),R("child-active",[v("menu-item-content-header",`
 color: var(--n-item-text-color-child-active);
 `,[x("a",`
 color: var(--n-item-text-color-child-active);
 `),g("extra",`
 color: var(--n-item-text-color-child-active);
 `)]),g("arrow",`
 color: var(--n-arrow-color-child-active);
 `),g("icon",`
 color: var(--n-item-icon-color-child-active);
 `)]),de("disabled",[de("selected, child-active",[x("&:focus-within",Ue)]),R("selected",[ne(null,[g("arrow","color: var(--n-arrow-color-active-hover);"),g("icon","color: var(--n-item-icon-color-active-hover);"),v("menu-item-content-header",`
 color: var(--n-item-text-color-active-hover);
 `,[x("a","color: var(--n-item-text-color-active-hover);"),g("extra","color: var(--n-item-text-color-active-hover);")])])]),R("child-active",[ne(null,[g("arrow","color: var(--n-arrow-color-child-active-hover);"),g("icon","color: var(--n-item-icon-color-child-active-hover);"),v("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-hover);
 `,[x("a","color: var(--n-item-text-color-child-active-hover);"),g("extra","color: var(--n-item-text-color-child-active-hover);")])])]),R("selected",[ne(null,[x("&::before","background-color: var(--n-item-color-active-hover);")])]),ne(null,Ue)]),g("icon",`
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
 `),g("arrow",`
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
 `)]),g("extra",`
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
 `,[jt({duration:".2s"})])]),v("menu-item-group",[v("menu-item-group-title",`
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
 `)])]),v("menu-tooltip",[x("a",`
 color: inherit;
 text-decoration: none;
 `)]),v("menu-divider",`
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-divider-color);
 height: 1px;
 margin: 6px 18px;
 `)]);function ne(e,t){return[R("hover",e,t),x("&:hover",e,t)]}const qo=Object.assign(Object.assign({},Y.props),{options:{type:Array,default:()=>[]},collapsed:{type:Boolean,default:void 0},collapsedWidth:{type:Number,default:48},iconSize:{type:Number,default:20},collapsedIconSize:{type:Number,default:24},rootIndent:Number,indent:{type:Number,default:32},labelField:{type:String,default:"label"},keyField:{type:String,default:"key"},childrenField:{type:String,default:"children"},disabledField:{type:String,default:"disabled"},defaultExpandAll:Boolean,defaultExpandedKeys:Array,expandedKeys:Array,value:[String,Number],defaultValue:{type:[String,Number],default:null},mode:{type:String,default:"vertical"},watchProps:{type:Array,default:void 0},disabled:Boolean,show:{type:Boolean,default:!0},inverted:Boolean,"onUpdate:expandedKeys":[Function,Array],onUpdateExpandedKeys:[Function,Array],onUpdateValue:[Function,Array],"onUpdate:value":[Function,Array],expandIcon:Function,renderIcon:Function,renderLabel:Function,renderExtra:Function,dropdownProps:Object,accordion:Boolean,nodeProps:Function,dropdownPlacement:{type:String,default:"bottom"},responsive:Boolean,items:Array,onOpenNamesChange:[Function,Array],onSelect:[Function,Array],onExpandedNamesChange:[Function,Array],expandedNames:Array,defaultExpandedNames:Array}),Wo=E({name:"Menu",props:qo,setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:o}=ae(e),n=Y("Menu","-menu",Yo,Vt,e,t),l=Z(it,null),r=C(()=>{var _;const{collapsed:N}=e;if(N!==void 0)return N;if(l){const{collapseModeRef:i,collapsedRef:I}=l;if(i.value==="width")return(_=I.value)!==null&&_!==void 0?_:!1}return!1}),a=C(()=>{const{keyField:_,childrenField:N,disabledField:i}=e;return _e(e.items||e.options,{getIgnored(I){return ke(I)},getChildren(I){return I[N]},getDisabled(I){return I[i]},getKey(I){var F;return(F=I[_])!==null&&F!==void 0?F:I.name}})}),m=C(()=>new Set(a.value.treeNodes.map(_=>_.key))),{watchProps:s}=e,f=$(null);s!=null&&s.includes("defaultValue")?pe(()=>{f.value=e.defaultValue}):f.value=e.defaultValue;const h=ee(e,"value"),p=we(h,f),c=$([]),y=()=>{c.value=e.defaultExpandAll?a.value.getNonLeafKeys():e.defaultExpandedNames||e.defaultExpandedKeys||a.value.getPath(p.value,{includeSelf:!1}).keyPath};s!=null&&s.includes("defaultExpandedKeys")?pe(y):y();const z=Kt(e,["expandedNames","expandedKeys"]),w=we(z,c),b=C(()=>a.value.treeNodes),S=C(()=>a.value.getPath(p.value).keyPath);te(he,{props:e,mergedCollapsedRef:r,mergedThemeRef:n,mergedValueRef:p,mergedExpandedKeysRef:w,activePathRef:S,mergedClsPrefixRef:t,isHorizontalRef:C(()=>e.mode==="horizontal"),invertedRef:ee(e,"inverted"),doSelect:H,toggleExpand:M});function H(_,N){const{"onUpdate:value":i,onUpdateValue:I,onSelect:F}=e;I&&q(I,_,N),i&&q(i,_,N),F&&q(F,_,N),f.value=_}function V(_){const{"onUpdate:expandedKeys":N,onUpdateExpandedKeys:i,onExpandedNamesChange:I,onOpenNamesChange:F}=e;N&&q(N,_),i&&q(i,_),I&&q(I,_),F&&q(F,_),c.value=_}function M(_){const N=Array.from(w.value),i=N.findIndex(I=>I===_);if(~i)N.splice(i,1);else{if(e.accordion&&m.value.has(_)){const I=N.findIndex(F=>m.value.has(F));I>-1&&N.splice(I,1)}N.push(_)}V(N)}const A=_=>{const N=a.value.getPath(_??p.value,{includeSelf:!1}).keyPath;if(!N.length)return;const i=Array.from(w.value),I=new Set([...i,...N]);e.accordion&&m.value.forEach(F=>{I.has(F)&&!N.includes(F)&&I.delete(F)}),V(Array.from(I))},P=C(()=>{const{inverted:_}=e,{common:{cubicBezierEaseInOut:N},self:i}=n.value,{borderRadius:I,borderColorHorizontal:F,fontSize:_t,itemHeight:wt,dividerColor:zt}=i,u={"--n-divider-color":zt,"--n-bezier":N,"--n-font-size":_t,"--n-border-color-horizontal":F,"--n-border-radius":I,"--n-item-height":wt};return _?(u["--n-group-text-color"]=i.groupTextColorInverted,u["--n-color"]=i.colorInverted,u["--n-item-text-color"]=i.itemTextColorInverted,u["--n-item-text-color-hover"]=i.itemTextColorHoverInverted,u["--n-item-text-color-active"]=i.itemTextColorActiveInverted,u["--n-item-text-color-child-active"]=i.itemTextColorChildActiveInverted,u["--n-item-text-color-child-active-hover"]=i.itemTextColorChildActiveInverted,u["--n-item-text-color-active-hover"]=i.itemTextColorActiveHoverInverted,u["--n-item-icon-color"]=i.itemIconColorInverted,u["--n-item-icon-color-hover"]=i.itemIconColorHoverInverted,u["--n-item-icon-color-active"]=i.itemIconColorActiveInverted,u["--n-item-icon-color-active-hover"]=i.itemIconColorActiveHoverInverted,u["--n-item-icon-color-child-active"]=i.itemIconColorChildActiveInverted,u["--n-item-icon-color-child-active-hover"]=i.itemIconColorChildActiveHoverInverted,u["--n-item-icon-color-collapsed"]=i.itemIconColorCollapsedInverted,u["--n-item-text-color-horizontal"]=i.itemTextColorHorizontalInverted,u["--n-item-text-color-hover-horizontal"]=i.itemTextColorHoverHorizontalInverted,u["--n-item-text-color-active-horizontal"]=i.itemTextColorActiveHorizontalInverted,u["--n-item-text-color-child-active-horizontal"]=i.itemTextColorChildActiveHorizontalInverted,u["--n-item-text-color-child-active-hover-horizontal"]=i.itemTextColorChildActiveHoverHorizontalInverted,u["--n-item-text-color-active-hover-horizontal"]=i.itemTextColorActiveHoverHorizontalInverted,u["--n-item-icon-color-horizontal"]=i.itemIconColorHorizontalInverted,u["--n-item-icon-color-hover-horizontal"]=i.itemIconColorHoverHorizontalInverted,u["--n-item-icon-color-active-horizontal"]=i.itemIconColorActiveHorizontalInverted,u["--n-item-icon-color-active-hover-horizontal"]=i.itemIconColorActiveHoverHorizontalInverted,u["--n-item-icon-color-child-active-horizontal"]=i.itemIconColorChildActiveHorizontalInverted,u["--n-item-icon-color-child-active-hover-horizontal"]=i.itemIconColorChildActiveHoverHorizontalInverted,u["--n-arrow-color"]=i.arrowColorInverted,u["--n-arrow-color-hover"]=i.arrowColorHoverInverted,u["--n-arrow-color-active"]=i.arrowColorActiveInverted,u["--n-arrow-color-active-hover"]=i.arrowColorActiveHoverInverted,u["--n-arrow-color-child-active"]=i.arrowColorChildActiveInverted,u["--n-arrow-color-child-active-hover"]=i.arrowColorChildActiveHoverInverted,u["--n-item-color-hover"]=i.itemColorHoverInverted,u["--n-item-color-active"]=i.itemColorActiveInverted,u["--n-item-color-active-hover"]=i.itemColorActiveHoverInverted,u["--n-item-color-active-collapsed"]=i.itemColorActiveCollapsedInverted):(u["--n-group-text-color"]=i.groupTextColor,u["--n-color"]=i.color,u["--n-item-text-color"]=i.itemTextColor,u["--n-item-text-color-hover"]=i.itemTextColorHover,u["--n-item-text-color-active"]=i.itemTextColorActive,u["--n-item-text-color-child-active"]=i.itemTextColorChildActive,u["--n-item-text-color-child-active-hover"]=i.itemTextColorChildActiveHover,u["--n-item-text-color-active-hover"]=i.itemTextColorActiveHover,u["--n-item-icon-color"]=i.itemIconColor,u["--n-item-icon-color-hover"]=i.itemIconColorHover,u["--n-item-icon-color-active"]=i.itemIconColorActive,u["--n-item-icon-color-active-hover"]=i.itemIconColorActiveHover,u["--n-item-icon-color-child-active"]=i.itemIconColorChildActive,u["--n-item-icon-color-child-active-hover"]=i.itemIconColorChildActiveHover,u["--n-item-icon-color-collapsed"]=i.itemIconColorCollapsed,u["--n-item-text-color-horizontal"]=i.itemTextColorHorizontal,u["--n-item-text-color-hover-horizontal"]=i.itemTextColorHoverHorizontal,u["--n-item-text-color-active-horizontal"]=i.itemTextColorActiveHorizontal,u["--n-item-text-color-child-active-horizontal"]=i.itemTextColorChildActiveHorizontal,u["--n-item-text-color-child-active-hover-horizontal"]=i.itemTextColorChildActiveHoverHorizontal,u["--n-item-text-color-active-hover-horizontal"]=i.itemTextColorActiveHoverHorizontal,u["--n-item-icon-color-horizontal"]=i.itemIconColorHorizontal,u["--n-item-icon-color-hover-horizontal"]=i.itemIconColorHoverHorizontal,u["--n-item-icon-color-active-horizontal"]=i.itemIconColorActiveHorizontal,u["--n-item-icon-color-active-hover-horizontal"]=i.itemIconColorActiveHoverHorizontal,u["--n-item-icon-color-child-active-horizontal"]=i.itemIconColorChildActiveHorizontal,u["--n-item-icon-color-child-active-hover-horizontal"]=i.itemIconColorChildActiveHoverHorizontal,u["--n-arrow-color"]=i.arrowColor,u["--n-arrow-color-hover"]=i.arrowColorHover,u["--n-arrow-color-active"]=i.arrowColorActive,u["--n-arrow-color-active-hover"]=i.arrowColorActiveHover,u["--n-arrow-color-child-active"]=i.arrowColorChildActive,u["--n-arrow-color-child-active-hover"]=i.arrowColorChildActiveHover,u["--n-item-color-hover"]=i.itemColorHover,u["--n-item-color-active"]=i.itemColorActive,u["--n-item-color-active-hover"]=i.itemColorActiveHover,u["--n-item-color-active-collapsed"]=i.itemColorActiveCollapsed),u}),T=o?se("menu",C(()=>e.inverted?"a":"b"),P,e):void 0,Q=Dt(),X=$(null),xe=$(null);let K=!0;const je=()=>{var _;K?K=!1:(_=X.value)===null||_===void 0||_.sync({showAllItemsBeforeCalculate:!0})};function ft(){return document.getElementById(Q)}const ve=$(-1);function pt(_){ve.value=e.options.length-_}function gt(_){_||(ve.value=-1)}const bt=C(()=>{const _=ve.value;return{children:_===-1?[]:e.options.slice(_)}}),xt=C(()=>{const{childrenField:_,disabledField:N,keyField:i}=e;return _e([bt.value],{getIgnored(I){return ke(I)},getChildren(I){return I[_]},getDisabled(I){return I[N]},getKey(I){var F;return(F=I[i])!==null&&F!==void 0?F:I.name}})}),yt=C(()=>_e([{}]).treeNodes[0]);function Ct(){var _;if(ve.value===-1)return d(Re,{root:!0,level:0,key:"__ellpisisGroupPlaceholder__",internalKey:"__ellpisisGroupPlaceholder__",title:"···",tmNode:yt.value,domId:Q,isEllipsisPlaceholder:!0});const N=xt.value.treeNodes[0],i=S.value,I=!!(!((_=N.children)===null||_===void 0)&&_.some(F=>i.includes(F.key)));return d(Re,{level:0,root:!0,key:"__ellpisisGroup__",internalKey:"__ellpisisGroup__",title:"···",virtualChildActive:I,tmNode:N,domId:Q,rawNodes:N.rawNode.children||[],tmNodes:N.children||[],isEllipsisPlaceholder:!0})}return{mergedClsPrefix:t,controlledExpandedKeys:z,uncontrolledExpanededKeys:c,mergedExpandedKeys:w,uncontrolledValue:f,mergedValue:p,activePath:S,tmNodes:b,mergedTheme:n,mergedCollapsed:r,cssVars:o?void 0:P,themeClass:T==null?void 0:T.themeClass,overflowRef:X,counterRef:xe,updateCounter:()=>{},onResize:je,onUpdateOverflow:gt,onUpdateCount:pt,renderCounter:Ct,getCounter:ft,onRender:T==null?void 0:T.onRender,showOption:A,deriveResponsiveState:je}},render(){const{mergedClsPrefix:e,mode:t,themeClass:o,onRender:n}=this;n==null||n();const l=()=>this.tmNodes.map(s=>Me(s,this.$props)),a=t==="horizontal"&&this.responsive,m=()=>d("div",{role:t==="horizontal"?"menubar":"menu",class:[`${e}-menu`,o,`${e}-menu--${t}`,a&&`${e}-menu--responsive`,this.mergedCollapsed&&`${e}-menu--collapsed`],style:this.cssVars},a?d(Yt,{ref:"overflowRef",onUpdateOverflow:this.onUpdateOverflow,getCounter:this.getCounter,onUpdateCount:this.onUpdateCount,updateCounter:this.updateCounter,style:{width:"100%",display:"flex",overflow:"hidden"}},{default:l,counter:this.renderCounter}):l());return a?d(Ut,{onResize:this.onResize},{default:m}):m()}}),Go=Object.assign(Object.assign({},Y.props),{trigger:String,xScrollable:Boolean,onScroll:Function,size:Number}),Xo=E({name:"Scrollbar",props:Go,setup(){const e=$(null);return Object.assign(Object.assign({},{scrollTo:(...o)=>{var n;(n=e.value)===null||n===void 0||n.scrollTo(o[0],o[1])},scrollBy:(...o)=>{var n;(n=e.value)===null||n===void 0||n.scrollBy(o[0],o[1])}}),{scrollbarInstRef:e})},render(){return d(Pe,Object.assign({ref:"scrollbarInstRef"},this.$props),this.$slots)}}),Zo=Xo,Jo=E({__name:"LayoutMenu",props:{isOpen:Boolean,inverted:Boolean},setup(e){const t=Te(),o=ot(),n=C(()=>o.siderMenu);let l=$();pe(()=>{l.value=t.path,o.activeMenuValue=t.path});const r=a=>{l.value=a};return(a,m)=>{const s=U,f=Wo;return L(),W(me,null,[j("div",{class:Se(["layout-sider__logo u__flex-c",{isHide:!e.isOpen}]),onClick:m[0]||(m[0]=h=>a.$router.push("/home"))},[k(s,{name:"vite"}),qt(j("h1",null,"后台管理系统",512),[[Wt,e.isOpen]])],2),k(f,{inverted:e.inverted,indent:10,"root-indent":10,options:n.value,value:O(l),"onUpdate:value":r},null,8,["inverted","options","value"])],64)}}}),Qo=oe(Jo,[["__scopeId","data-v-e1788f34"]]),en={key:1},tn=E({__name:"LayoutCrumbs",setup(e){const t=Te(),o=Ae(),n=nt([]),l=f=>f.split("/").reduce((h,p)=>{if(p){const c=h[h.length-1];c?h.push(c+"/"+p):h.push("/"+p)}return h},[]),r=f=>{const h=[];let p=o.getRoutes();return f.forEach(c=>{const y=p.find(z=>z.path===c);y&&h.push(y)}),h},a=(f,h="/")=>{if(!f)return;const p=[];return f.forEach(c=>{var z;const y={label:(z=c.meta)==null?void 0:z.title,key:uo(c.path)||c.path.startsWith("/")?c.path:h+"/"+c.path,children:[]};c.children&&c.children.length>0?y.children=a(c.children,y.key):delete y.children,p.push(y)}),p},m=()=>{n.length=0;const f=r(l(t.path)),h=a(f);h&&n.push(...h)},s=f=>{o.push(f)};return pe(()=>{t.path.startsWith("/redirect")||["/login","/404","/405","/403","/500"].includes(t.path)||m()}),(f,h)=>{const p=U,c=be;return L(),G(O(wo),null,{default:B(()=>[(L(!0),W(me,null,Ee(n,y=>(L(),G(O(Io),{class:"layout-crumbs-item",key:y.key},{default:B(()=>[y.children&&y.children.length>0?(L(),G(c,{key:0,options:y.children,onSelect:s},{default:B(()=>[j("span",null,[ue(ie(y.label)+" ",1),k(p,{name:"down",size:"18",style:{"margin-bottom":"2px"}})])]),_:2},1032,["options"])):(L(),W("span",en,ie(y.label),1))]),_:2},1024))),128))]),_:1})}}}),on=oe(tn,[["__scopeId","data-v-61322310"]]),nn={class:"header-right_user-box"},rn={class:"header-right_user-avatar"},ln=["src"],an={class:"header-right_user-name"},sn=E({__name:"LayoutUser",setup(e){const t=Ae(),o=Gt();let n=C(()=>o.user?o.user.avatar:""),l=C(()=>o.user?o.user.userName:""),r=nt([{label:"个人信息",key:"userinfo"},{label:"修改密码",key:"editpassword"},{label:"退出系统",key:"logout"}]);const a=()=>{o.logout().then(()=>{t.push("/home"),window.$dialog.destroyAll(),window.location.reload()})};let m=()=>{window.$dialog.destroyAll()},s=f=>{["userinfo","editpassword"].includes(f)?t.push(`/userInfo/${f}`):window.$dialog.warning({closable:!1,showIcon:!1,style:{width:"20%"},title:()=>d("div",{style:{position:"absolute",top:0,left:0,right:0,textAlign:"center",height:"40px",lineHeight:"40px",background:"#cee6f0",color:"#1d69a3",fontWeight:"bold",fontSize:"16px"}},"退出登录"),content:()=>d("p",{style:{textAlign:"center",height:"80px",lineHeight:"108px",color:"#000",fontSize:"14px",fontWeight:"bolder",userSelect:"none"}},"是否退出当前账号？"),action:()=>d("div",{style:{width:"100%",display:"flex",justifyContent:"space-around"}},[d(Ie,{onClick:m,style:{width:"40%"}},{default:()=>"取消"}),d(Ie,{onClick:a,type:"info",style:{width:"40%"}},{default:()=>"退出"})])})};return(f,h)=>{const p=U,c=be;return L(),G(c,{trigger:"click",options:O(r),onSelect:O(s),size:"small"},{default:B(()=>[j("div",nn,[j("div",rn,[O(n)?(L(),W("img",{key:0,class:"header-right_avatar",src:O(n)},null,8,ln)):(L(),G(p,{key:1,name:"avatar",size:"35"}))]),j("div",an,[j("span",null,ie(O(l)),1),k(p,{name:"down",width:"10"})])])]),_:1},8,["options","onSelect"])}}}),cn=oe(sn,[["__scopeId","data-v-91708b6e"]]),dn=rt({id:"tag",state:()=>({tags:[{title:"首页",key:"/home"}],activeTagIndex:0,activeTag:"/home"}),getters:{tagsKey:e=>e.tags.map(t=>t.key)},actions:{addTag(e){this.tagsKey.includes(e.key)||this.tags.push(e),this.activeTag=e.key},removeTag(e){let t=this.tagsKey.indexOf(e);this.tags.splice(t,1),this.activeTag=this.tags[t-1].key},clearTag(){const e=Xt(this.tags);return this.tags=e.filter(t=>{if(t.key=="/home"||t.key==this.activeTag)return!0}),this.activeTag}}}),un={class:"layout-header__tag"},mn={class:"u__flex-ac",style:{height:"30px"}},hn=E({__name:"LayoutTag",setup(e){const t=Ae(),o=Te(),n=dn(),l=ot();let r=C(()=>n.tags);ge(()=>o.path,b=>{const S={title:o.meta.title,key:b};n.addTag(S)},{immediate:!0});const a=b=>{n.removeTag(b),l.activeMenuValue==b&&t.push(n.activeTag)},m=b=>{let{key:S}=b;t.push(S)},s=[{label:"关闭所有",key:"close",icon(){return d(U,{name:"menu"})}}],f=b=>{switch(b){case"close":let S=n.clearTag();t.push(S);break}},h=$(null),p=()=>{const b=h.value,S=b.$el.scrollLeft||0;b.scrollTo({left:S+200,debounce:!1,behavior:"smooth"},0),w()},c=()=>{var H;const b=h.value,S=((H=b.$el)==null?void 0:H.scrollLeft)||0;b.scrollTo({left:Math.max(0,S-200),debounce:!0,behavior:"smooth"},0),w()};let y=$(!1),z=$(!1);const w=()=>{setTimeout(()=>{const b=h.value,{scrollLeft:S,scrollWidth:H,clientWidth:V}=b.$el;z.value=S===0,y.value=S===H-V},100)};return(b,S)=>{const H=Zt,V=Zo,M=be;return L(),W("div",un,[k(U,{class:Se([{"arrow-wrapper__disabled":O(y)},"u__cursor"]),name:"arrow",onClick:c},null,8,["class"]),k(V,{ref_key:"scrollbar",ref:h,"x-scrollable":!0,size:0},{default:B(()=>[j("div",mn,[(L(!0),W(me,null,Ee(O(r),A=>(L(),G(H,{key:A.key,class:"tag-item",closable:A.key!=="/home",type:A.key==O(l).activeMenuValue?"success":"default",size:"small",onClose:P=>a(A.key),onClick:P=>m(A)},{default:B(()=>[ue(ie(A.title),1)]),_:2},1032,["closable","type","onClose","onClick"]))),128))])]),_:1},512),k(U,{class:Se([{"arrow-wrapper__disabled":O(y)},"u__cursor"]),name:"arrow",style:{transform:"rotate(180deg)"},onClick:p},null,8,["class"]),k(M,{options:s,placement:"left-start",onSelect:f},{default:B(()=>[k(U,{class:"u__cursor",name:"menu",size:"18"})]),_:1})])}}}),vn=oe(hn,[["__scopeId","data-v-f6a60131"]]),ht=rt({id:"action",state:()=>({refreh:!0}),actions:{onRefreh(){this.refreh=!1;let e=null;e&&clearTimeout(e),e=setTimeout(()=>{this.refreh=!0},300)}}}),fn={class:"layout-content"},pn=E({__name:"LayoutContent",setup(e){const t=ht();let o=C(()=>t.refreh);return(n,l)=>{const r=Jt("RouterView");return L(),W("div",fn,[k(r,null,{default:B(({Component:a,route:m})=>[k(Je,{mode:"out-in",name:m.meta.transition||"mainFade"},{default:B(()=>[O(o)?(L(),G(Qt(a),{key:m.path})):eo("",!0)]),_:2},1032,["name"])]),_:1})])}}}),gn=oe(pn,[["__scopeId","data-v-633bd553"]]),bn={key:0},xn={class:"u__flex-shark-0"},yn={class:"text-sm font-medium"},Cn={class:"u__flex-c action-box"},_n=E({__name:"PopoverMessage",emits:["clear"],setup(e,{emit:t}){const o=t,n=to([{title:"您收到一个消息",desc:"来自好友张三的生日祝福"},{title:"您收到一个消息",desc:"来自好友张三的生日祝福来自好友张三的生日祝福"},{title:"您收到一个消息",desc:"来自好友张三的生日祝福来自好友张三的生日祝福"},{title:"您收到一个消息",desc:"来自好友张三的生日祝福来自好友张三的生日祝福来自好友张三的生日祝福来自好友张三的生日祝福"},{title:"您收到一个消息",desc:"来自好友张三的生日祝福"},{title:"您收到一个消息",desc:"来自好友张三的生日祝福"}]);function l(){n.length=0,o("clear")}return(r,a)=>{const m=U,s=co,f=oo,h=Ie,p=no;return L(),G(p,{"content-style":{padding:"0px"},"footer-style":{padding:"0px"},bordered:!1,segmented:!0},{footer:B(()=>[j("div",Cn,[k(h,{text:"",onClick:l},{default:B(()=>[ue("清空消息")]),_:1}),k(h,{text:""},{default:B(()=>[ue("查看更多")]),_:1})])]),default:B(()=>[O(n).length>0?(L(),W("div",bn,[(L(!0),W(me,null,Ee(O(n),(c,y)=>(L(),W("div",{class:"u__flex-ac",key:y},[j("div",xn,[k(m,{name:"message",size:"35"})]),j("div",null,[j("div",yn,ie(c.title),1),k(s,{"line-clamp":1,style:{color:"#6b7280"}},{default:B(()=>[ue(ie(c.desc),1)]),_:2},1024)])]))),128))])):(L(),G(f,{key:1,description:"暂无消息哦~",class:"u__pt-20 u__pb-20"}))]),_:1})}}}),wn=oe(_n,[["__scopeId","data-v-9fb56826"]]),qe=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]],J=(()=>{if(typeof document>"u")return!1;const e=qe[0],t={};for(const o of qe)if((o==null?void 0:o[1])in document){for(const[l,r]of o.entries())t[e[l]]=r;return t}return!1})(),We={change:J.fullscreenchange,error:J.fullscreenerror};let D={request(e=document.documentElement,t){return new Promise((o,n)=>{const l=()=>{D.off("change",l),o()};D.on("change",l);const r=e[J.requestFullscreen](t);r instanceof Promise&&r.then(l).catch(n)})},exit(){return new Promise((e,t)=>{if(!D.isFullscreen){e();return}const o=()=>{D.off("change",o),e()};D.on("change",o);const n=document[J.exitFullscreen]();n instanceof Promise&&n.then(o).catch(t)})},toggle(e,t){return D.isFullscreen?D.exit():D.request(e,t)},onchange(e){D.on("change",e)},onerror(e){D.on("error",e)},on(e,t){const o=We[e];o&&document.addEventListener(o,t,!1)},off(e,t){const o=We[e];o&&document.removeEventListener(o,t,!1)},raw:J};Object.defineProperties(D,{isFullscreen:{get:()=>!!document[J.fullscreenElement]},element:{enumerable:!0,get:()=>document[J.fullscreenElement]??void 0},isEnabled:{enumerable:!0,get:()=>!!document[J.fullscreenEnabled]}});J||(D={isEnabled:!1});const Ge=D,zn={class:"action-items-wrapper"},Sn=E({__name:"LayoutAction",setup(e){const t=ht(),o=ro(),n=$(3),l=()=>{if(!Ge.isEnabled)return window.$msg.error("当前浏览器不支持全屏操作"),!1;Ge.toggle()},r=()=>{t.onRefreh()};let a=$(!1);return ge(()=>a.value,()=>{o.changeTheme()}),(m,s)=>{const f=yo,h=wn,p=io,c=mo;return L(),W("div",zn,[k(p,{placement:"bottom",trigger:"click",width:300},{trigger:B(()=>[k(f,{value:n.value,class:"badge-action-item"},{default:B(()=>[k(U,{name:"message",size:"22"})]),_:1},8,["value"])]),default:B(()=>[k(h,{onClear:s[0]||(s[0]=y=>n.value=0)})]),_:1}),k(U,{name:"reset",onClick:r,class:"action-item",size:"20"}),k(U,{name:"full",onClick:l,class:"action-item",size:"20"}),k(c,{class:"action-item",modelValue:O(a),"onUpdate:modelValue":s[1]||(s[1]=y=>lo(a)?a.value=y:a=y)},{"checked-icon":B(()=>[k(U,{name:"dark"})]),"unchecked-icon":B(()=>[k(U,{name:"light"})]),_:1},8,["modelValue"])])}}}),In=oe(Sn,[["__scopeId","data-v-c9056e82"]]),vt=e=>(ao("data-v-78977b62"),e=e(),so(),e),Rn={class:"layout-header__box"},kn=vt(()=>j("div",{style:{flex:"1"}},null,-1)),$n=vt(()=>j("div",{class:"layout-header__shadow"},null,-1)),Pn=E({__name:"index",setup(e){let t=$(!0),o=$(!1),n=$(!1),l=$(50),r=$(155),a=$(!0);const m=f=>{f&&(a.value=!f)},s=()=>{a.value=!0};return(f,h)=>{const p=Lo,c=Ao,y=Po,z=$o;return L(),G(z,{"has-sider":"",class:"layout-box"},{default:B(()=>[k(p,{"collapse-mode":"width","show-trigger":"arrow-circle",bordered:O(t),inverted:O(o),"native-scrollbar":O(n),"collapsed-width":O(l),width:O(r),"onUpdate:collapsed":m,onAfterEnter:s},{default:B(()=>[k(Qo,{isOpen:O(a),inverted:O(o)},null,8,["isOpen","inverted"])]),_:1},8,["bordered","inverted","native-scrollbar","collapsed-width","width"]),k(z,null,{default:B(()=>[k(c,{bordered:O(t)},{default:B(()=>[j("div",Rn,[k(on),kn,k(In),k(cn)]),k(vn),$n]),_:1},8,["bordered"]),k(y,null,{default:B(()=>[k(gn)]),_:1}),k(ho,{color:"#18a058"})]),_:1})]),_:1})}}}),Fn=oe(Pn,[["__scopeId","data-v-78977b62"]]);export{Fn as default};
