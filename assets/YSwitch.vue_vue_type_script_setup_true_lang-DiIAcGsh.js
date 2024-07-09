import{b as A,f as t,b2 as E,d as K,an as s,aF as I,g as X,u as he,j as G,bf as be,r as P,ap as fe,ax as ve,h as C,k as m,b1 as U,b6 as c,l as ge,c0 as j,t as i,s as p,c1 as we,aZ as me,a_ as pe,ay as H,B as ye,C as ke,D as O,E as Y,F as L,N as xe,G as _e}from"./index-C89OI0f9.js";const Se=A("switch",`
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
 `),A("base-loading",`
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translateX(-50%) translateY(-50%);
 font-size: calc(var(--n-button-width) - 4px);
 color: var(--n-loading-color);
 transition: color .3s var(--n-bezier);
 `,[E({left:"50%",top:"50%",originalTransform:"translateX(-50%) translateY(-50%)"})]),t("checked, unchecked",`
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
 `),K("&:focus",[t("rail",`
 box-shadow: var(--n-box-shadow-focus);
 `)]),s("round",[t("rail","border-radius: calc(var(--n-rail-height) / 2);",[t("button","border-radius: calc(var(--n-button-height) / 2);")])]),I("disabled",[I("icon",[s("rubber-band",[s("pressed",[t("rail",[t("button","max-width: var(--n-button-width-pressed);")])]),t("rail",[K("&:active",[t("button","max-width: var(--n-button-width-pressed);")])]),s("active",[s("pressed",[t("rail",[t("button","left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));")])]),t("rail",[K("&:active",[t("button","left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));")])])])])])]),s("active",[t("rail",[t("button","left: calc(100% - var(--n-button-width) - var(--n-offset))")])]),t("rail",`
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
 `,[E()]),t("button",`
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
 `)])]),$e=Object.assign(Object.assign({},G.props),{size:{type:String,default:"medium"},value:{type:[String,Number,Boolean],default:void 0},loading:Boolean,defaultValue:{type:[String,Number,Boolean],default:!1},disabled:{type:Boolean,default:void 0},round:{type:Boolean,default:!0},"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],checkedValue:{type:[String,Number,Boolean],default:!0},uncheckedValue:{type:[String,Number,Boolean],default:!1},railStyle:Function,rubberBand:{type:Boolean,default:!0},onChange:[Function,Array]});let B;const Be=X({name:"Switch",props:$e,setup(e){B===void 0&&(typeof CSS<"u"?typeof CSS.supports<"u"?B=CSS.supports("width","max(1px)"):B=!1:B=!0);const{mergedClsPrefixRef:y,inlineThemeDisabled:f}=he(e),_=G("Switch","-switch",Se,we,e,y),o=be(e),{mergedSizeRef:l,mergedDisabledRef:r}=o,v=P(e.defaultValue),g=fe(e,"value"),w=ve(g,v),S=C(()=>w.value===e.checkedValue),k=P(!1),n=P(!1),d=C(()=>{const{railStyle:a}=e;if(a)return a({focused:n.value,checked:S.value})});function u(a){const{"onUpdate:value":V,onChange:R,onUpdateValue:z}=e,{nTriggerFormInput:F,nTriggerFormChange:T}=o;V&&H(V,a),z&&H(z,a),R&&H(R,a),v.value=a,F(),T()}function Z(){const{nTriggerFormFocus:a}=o;a()}function q(){const{nTriggerFormBlur:a}=o;a()}function J(){e.loading||r.value||(w.value!==e.checkedValue?u(e.checkedValue):u(e.uncheckedValue))}function Q(){n.value=!0,Z()}function ee(){n.value=!1,q(),k.value=!1}function te(a){e.loading||r.value||a.key===" "&&(w.value!==e.checkedValue?u(e.checkedValue):u(e.uncheckedValue),k.value=!1)}function ae(a){e.loading||r.value||a.key===" "&&(a.preventDefault(),k.value=!0)}const M=C(()=>{const{value:a}=l,{self:{opacityDisabled:V,railColor:R,railColorActive:z,buttonBoxShadow:F,buttonColor:T,boxShadowFocus:ne,loadingColor:ie,textColor:oe,iconColor:re,[m("buttonHeight",a)]:h,[m("buttonWidth",a)]:le,[m("buttonWidthPressed",a)]:se,[m("railHeight",a)]:b,[m("railWidth",a)]:$,[m("railBorderRadius",a)]:ce,[m("buttonBorderRadius",a)]:de},common:{cubicBezierEaseInOut:ue}}=_.value;let N,D,W;return B?(N=`calc((${b} - ${h}) / 2)`,D=`max(${b}, ${h})`,W=`max(${$}, calc(${$} + ${h} - ${b}))`):(N=U((c(b)-c(h))/2),D=U(Math.max(c(b),c(h))),W=c(b)>c(h)?$:U(c($)+c(h)-c(b))),{"--n-bezier":ue,"--n-button-border-radius":de,"--n-button-box-shadow":F,"--n-button-color":T,"--n-button-width":le,"--n-button-width-pressed":se,"--n-button-height":h,"--n-height":D,"--n-offset":N,"--n-opacity-disabled":V,"--n-rail-border-radius":ce,"--n-rail-color":R,"--n-rail-color-active":z,"--n-rail-height":b,"--n-rail-width":$,"--n-width":W,"--n-box-shadow-focus":ne,"--n-loading-color":ie,"--n-text-color":oe,"--n-icon-color":re}}),x=f?ge("switch",C(()=>l.value[0]),M,e):void 0;return{handleClick:J,handleBlur:ee,handleFocus:Q,handleKeyup:te,handleKeydown:ae,mergedRailStyle:d,pressed:k,mergedClsPrefix:y,mergedValue:w,checked:S,mergedDisabled:r,cssVars:f?void 0:M,themeClass:x==null?void 0:x.themeClass,onRender:x==null?void 0:x.onRender}},render(){const{mergedClsPrefix:e,mergedDisabled:y,checked:f,mergedRailStyle:_,onRender:o,$slots:l}=this;o==null||o();const{checked:r,unchecked:v,icon:g,"checked-icon":w,"unchecked-icon":S}=l,k=!(j(g)&&j(w)&&j(S));return i("div",{role:"switch","aria-checked":f,class:[`${e}-switch`,this.themeClass,k&&`${e}-switch--icon`,f&&`${e}-switch--active`,y&&`${e}-switch--disabled`,this.round&&`${e}-switch--round`,this.loading&&`${e}-switch--loading`,this.pressed&&`${e}-switch--pressed`,this.rubberBand&&`${e}-switch--rubber-band`],tabindex:this.mergedDisabled?void 0:0,style:this.cssVars,onClick:this.handleClick,onFocus:this.handleFocus,onBlur:this.handleBlur,onKeyup:this.handleKeyup,onKeydown:this.handleKeydown},i("div",{class:`${e}-switch__rail`,"aria-hidden":"true",style:_},p(r,n=>p(v,d=>n||d?i("div",{"aria-hidden":!0,class:`${e}-switch__children-placeholder`},i("div",{class:`${e}-switch__rail-placeholder`},i("div",{class:`${e}-switch__button-placeholder`}),n),i("div",{class:`${e}-switch__rail-placeholder`},i("div",{class:`${e}-switch__button-placeholder`}),d)):null)),i("div",{class:`${e}-switch__button`},p(g,n=>p(w,d=>p(S,u=>i(me,null,{default:()=>this.loading?i(pe,{key:"loading",clsPrefix:e,strokeWidth:20}):this.checked&&(d||n)?i("div",{class:`${e}-switch__button-icon`,key:d?"checked-icon":"icon"},d||n):!this.checked&&(u||n)?i("div",{class:`${e}-switch__button-icon`,key:u?"unchecked-icon":"icon"},u||n):null})))),p(r,n=>n&&i("div",{key:"checked",class:`${e}-switch__checked`},n)),p(v,n=>n&&i("div",{key:"unchecked",class:`${e}-switch__unchecked`},n)))))}}),Ve=X({__name:"YSwitch",props:{modelValue:{type:null}},emits:["update:modelValue"],setup(e,{emit:y}){const f=e;let _=y,o=C({get(){return f.modelValue},set(l){_("update:modelValue",l)}});return(l,r)=>{const v=Be;return ye(),ke(v,{value:L(o),"onUpdate:value":r[0]||(r[0]=g=>xe(o)?o.value=g:o=g),size:L(_e),clearable:""},{"checked-icon":O(()=>[Y(l.$slots,"checked-icon")]),"unchecked-icon":O(()=>[Y(l.$slots,"unchecked-icon")]),_:3},8,["value","size"])}}});export{Ve as _};
