import{b as M,f as t,bj as A,d as j,al as s,aL as I,g as X,u as he,j as G,bs as be,r as K,ai as fe,aE as ve,h as C,k as m,bi as P,bl as c,l as ge,ar as U,t as n,s as p,ce as we,be as me,bf as pe,aF as E,B as ke,C as ye,D as L,E as O,F as Y,N as xe,G as Se}from"./index-D8FvNXUN.js";const _e=M("switch",`
 height: var(--n-height);
 min-width: var(--n-width);
 vertical-align: middle;
 user-select: none;
 -webkit-user-select: none;
 display: inline-flex;
 outline: none;
 justify-content: center;
 align-items: center;
`,[t("children-placeholder",`
 height: var(--n-rail-height);
 display: flex;
 flex-direction: column;
 overflow: hidden;
 pointer-events: none;
 visibility: hidden;
 `),t("rail-placeholder",`
 display: flex;
 flex-wrap: none;
 `),t("button-placeholder",`
 width: calc(1.75 * var(--n-rail-height));
 height: var(--n-rail-height);
 `),M("base-loading",`
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translateX(-50%) translateY(-50%);
 font-size: calc(var(--n-button-width) - 4px);
 color: var(--n-loading-color);
 transition: color .3s var(--n-bezier);
 `,[A({left:"50%",top:"50%",originalTransform:"translateX(-50%) translateY(-50%)"})]),t("checked, unchecked",`
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 box-sizing: border-box;
 position: absolute;
 white-space: nowrap;
 top: 0;
 bottom: 0;
 display: flex;
 align-items: center;
 line-height: 1;
 `),t("checked",`
 right: 0;
 padding-right: calc(1.25 * var(--n-rail-height) - var(--n-offset));
 `),t("unchecked",`
 left: 0;
 justify-content: flex-end;
 padding-left: calc(1.25 * var(--n-rail-height) - var(--n-offset));
 `),j("&:focus",[t("rail",`
 box-shadow: var(--n-box-shadow-focus);
 `)]),s("round",[t("rail","border-radius: calc(var(--n-rail-height) / 2);",[t("button","border-radius: calc(var(--n-button-height) / 2);")])]),I("disabled",[I("icon",[s("rubber-band",[s("pressed",[t("rail",[t("button","max-width: var(--n-button-width-pressed);")])]),t("rail",[j("&:active",[t("button","max-width: var(--n-button-width-pressed);")])]),s("active",[s("pressed",[t("rail",[t("button","left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));")])]),t("rail",[j("&:active",[t("button","left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));")])])])])])]),s("active",[t("rail",[t("button","left: calc(100% - var(--n-button-width) - var(--n-offset))")])]),t("rail",`
 overflow: hidden;
 height: var(--n-rail-height);
 min-width: var(--n-rail-width);
 border-radius: var(--n-rail-border-radius);
 cursor: pointer;
 position: relative;
 transition:
 opacity .3s var(--n-bezier),
 background .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 background-color: var(--n-rail-color);
 `,[t("button-icon",`
 color: var(--n-icon-color);
 transition: color .3s var(--n-bezier);
 font-size: calc(var(--n-button-height) - 4px);
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 display: flex;
 justify-content: center;
 align-items: center;
 line-height: 1;
 `,[A()]),t("button",`
 align-items: center; 
 top: var(--n-offset);
 left: var(--n-offset);
 height: var(--n-button-height);
 width: var(--n-button-width-pressed);
 max-width: var(--n-button-width);
 border-radius: var(--n-button-border-radius);
 background-color: var(--n-button-color);
 box-shadow: var(--n-button-box-shadow);
 box-sizing: border-box;
 cursor: inherit;
 content: "";
 position: absolute;
 transition:
 background-color .3s var(--n-bezier),
 left .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 max-width .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 `)]),s("active",[t("rail","background-color: var(--n-rail-color-active);")]),s("loading",[t("rail",`
 cursor: wait;
 `)]),s("disabled",[t("rail",`
 cursor: not-allowed;
 opacity: .5;
 `)])]),$e=Object.assign(Object.assign({},G.props),{size:{type:String,default:"medium"},value:{type:[String,Number,Boolean],default:void 0},loading:Boolean,defaultValue:{type:[String,Number,Boolean],default:!1},disabled:{type:Boolean,default:void 0},round:{type:Boolean,default:!0},"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],checkedValue:{type:[String,Number,Boolean],default:!0},uncheckedValue:{type:[String,Number,Boolean],default:!1},railStyle:Function,rubberBand:{type:Boolean,default:!0},onChange:[Function,Array]});let B;const Be=X({name:"Switch",props:$e,setup(e){B===void 0&&(typeof CSS<"u"?typeof CSS.supports<"u"?B=CSS.supports("width","max(1px)"):B=!1:B=!0);const{mergedClsPrefixRef:k,inlineThemeDisabled:f}=he(e),S=G("Switch","-switch",_e,we,e,k),o=be(e),{mergedSizeRef:l,mergedDisabledRef:r}=o,v=K(e.defaultValue),g=fe(e,"value"),w=ve(g,v),_=C(()=>w.value===e.checkedValue),y=K(!1),i=K(!1),d=C(()=>{const{railStyle:a}=e;if(a)return a({focused:i.value,checked:_.value})});function u(a){const{"onUpdate:value":V,onChange:R,onUpdateValue:z}=e,{nTriggerFormInput:F,nTriggerFormChange:T}=o;V&&E(V,a),z&&E(z,a),R&&E(R,a),v.value=a,F(),T()}function q(){const{nTriggerFormFocus:a}=o;a()}function J(){const{nTriggerFormBlur:a}=o;a()}function Q(){e.loading||r.value||(w.value!==e.checkedValue?u(e.checkedValue):u(e.uncheckedValue))}function Z(){i.value=!0,q()}function ee(){i.value=!1,J(),y.value=!1}function te(a){e.loading||r.value||a.key===" "&&(w.value!==e.checkedValue?u(e.checkedValue):u(e.uncheckedValue),y.value=!1)}function ae(a){e.loading||r.value||a.key===" "&&(a.preventDefault(),y.value=!0)}const H=C(()=>{const{value:a}=l,{self:{opacityDisabled:V,railColor:R,railColorActive:z,buttonBoxShadow:F,buttonColor:T,boxShadowFocus:ie,loadingColor:ne,textColor:oe,iconColor:re,[m("buttonHeight",a)]:h,[m("buttonWidth",a)]:le,[m("buttonWidthPressed",a)]:se,[m("railHeight",a)]:b,[m("railWidth",a)]:$,[m("railBorderRadius",a)]:ce,[m("buttonBorderRadius",a)]:de},common:{cubicBezierEaseInOut:ue}}=S.value;let N,D,W;return B?(N=`calc((${b} - ${h}) / 2)`,D=`max(${b}, ${h})`,W=`max(${$}, calc(${$} + ${h} - ${b}))`):(N=P((c(b)-c(h))/2),D=P(Math.max(c(b),c(h))),W=c(b)>c(h)?$:P(c($)+c(h)-c(b))),{"--n-bezier":ue,"--n-button-border-radius":de,"--n-button-box-shadow":F,"--n-button-color":T,"--n-button-width":le,"--n-button-width-pressed":se,"--n-button-height":h,"--n-height":D,"--n-offset":N,"--n-opacity-disabled":V,"--n-rail-border-radius":ce,"--n-rail-color":R,"--n-rail-color-active":z,"--n-rail-height":b,"--n-rail-width":$,"--n-width":W,"--n-box-shadow-focus":ie,"--n-loading-color":ne,"--n-text-color":oe,"--n-icon-color":re}}),x=f?ge("switch",C(()=>l.value[0]),H,e):void 0;return{handleClick:Q,handleBlur:ee,handleFocus:Z,handleKeyup:te,handleKeydown:ae,mergedRailStyle:d,pressed:y,mergedClsPrefix:k,mergedValue:w,checked:_,mergedDisabled:r,cssVars:f?void 0:H,themeClass:x==null?void 0:x.themeClass,onRender:x==null?void 0:x.onRender}},render(){const{mergedClsPrefix:e,mergedDisabled:k,checked:f,mergedRailStyle:S,onRender:o,$slots:l}=this;o==null||o();const{checked:r,unchecked:v,icon:g,"checked-icon":w,"unchecked-icon":_}=l,y=!(U(g)&&U(w)&&U(_));return n("div",{role:"switch","aria-checked":f,class:[`${e}-switch`,this.themeClass,y&&`${e}-switch--icon`,f&&`${e}-switch--active`,k&&`${e}-switch--disabled`,this.round&&`${e}-switch--round`,this.loading&&`${e}-switch--loading`,this.pressed&&`${e}-switch--pressed`,this.rubberBand&&`${e}-switch--rubber-band`],tabindex:this.mergedDisabled?void 0:0,style:this.cssVars,onClick:this.handleClick,onFocus:this.handleFocus,onBlur:this.handleBlur,onKeyup:this.handleKeyup,onKeydown:this.handleKeydown},n("div",{class:`${e}-switch__rail`,"aria-hidden":"true",style:S},p(r,i=>p(v,d=>i||d?n("div",{"aria-hidden":!0,class:`${e}-switch__children-placeholder`},n("div",{class:`${e}-switch__rail-placeholder`},n("div",{class:`${e}-switch__button-placeholder`}),i),n("div",{class:`${e}-switch__rail-placeholder`},n("div",{class:`${e}-switch__button-placeholder`}),d)):null)),n("div",{class:`${e}-switch__button`},p(g,i=>p(w,d=>p(_,u=>n(me,null,{default:()=>this.loading?n(pe,{key:"loading",clsPrefix:e,strokeWidth:20}):this.checked&&(d||i)?n("div",{class:`${e}-switch__button-icon`,key:d?"checked-icon":"icon"},d||i):!this.checked&&(u||i)?n("div",{class:`${e}-switch__button-icon`,key:u?"unchecked-icon":"icon"},u||i):null})))),p(r,i=>i&&n("div",{key:"checked",class:`${e}-switch__checked`},i)),p(v,i=>i&&n("div",{key:"unchecked",class:`${e}-switch__unchecked`},i)))))}}),Ve=X({__name:"YSwitch",props:{modelValue:{type:null}},emits:["update:modelValue"],setup(e,{emit:k}){const f=e;let S=k,o=C({get(){return f.modelValue},set(l){S("update:modelValue",l)}});return(l,r)=>{const v=Be;return ke(),ye(v,{value:Y(o),"onUpdate:value":r[0]||(r[0]=g=>xe(o)?o.value=g:o=g),size:Y(Se),clearable:""},{"checked-icon":L(()=>[O(l.$slots,"checked-icon")]),"unchecked-icon":L(()=>[O(l.$slots,"unchecked-icon")]),_:3},8,["value","size"])}}});export{Ve as _};
