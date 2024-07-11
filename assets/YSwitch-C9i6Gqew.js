import{aJ as he,aU as be,aV as fe,b as L,f as t,aW as A,d as N,a8 as u,aa as H,g as X,u as ve,j as J,ac as ge,r as O,ad as me,ae as we,h as R,k as pe,aX as U,q as n,p as y,aY as ye,aZ as xe,av as K,y as x,a_ as M,O as h,B as ke,C as E,D as I,J as Se,E as Ce,F as Y,G as Be}from"./index-BkQ_KyLE.js";const _e=e=>{const{primaryColor:l,opacityDisabled:d,borderRadius:r,textColor3:i}=e;return Object.assign(Object.assign({},be),{iconColor:i,textColor:"white",loadingColor:l,opacityDisabled:d,railColor:"rgba(0, 0, 0, .14)",railColorActive:l,buttonBoxShadow:"0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)",buttonColor:"#FFF",railBorderRadiusSmall:r,railBorderRadiusMedium:r,railBorderRadiusLarge:r,buttonBorderRadiusSmall:r,buttonBorderRadiusMedium:r,buttonBorderRadiusLarge:r,boxShadowFocus:`0 0 0 2px ${fe(l,{alpha:.2})}`})},Re={name:"Switch",common:he,self:_e},$e=Re,Ve=L("switch",`
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
 `),L("base-loading",`
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
 `),N("&:focus",[t("rail",`
 box-shadow: var(--n-box-shadow-focus);
 `)]),u("round",[t("rail","border-radius: calc(var(--n-rail-height) / 2);",[t("button","border-radius: calc(var(--n-button-height) / 2);")])]),H("disabled",[H("icon",[u("rubber-band",[u("pressed",[t("rail",[t("button","max-width: var(--n-button-width-pressed);")])]),t("rail",[N("&:active",[t("button","max-width: var(--n-button-width-pressed);")])]),u("active",[u("pressed",[t("rail",[t("button","left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));")])]),t("rail",[N("&:active",[t("button","left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));")])])])])])]),u("active",[t("rail",[t("button","left: calc(100% - var(--n-button-width) - var(--n-offset))")])]),t("rail",`
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
 `)]),u("active",[t("rail","background-color: var(--n-rail-color-active);")]),u("loading",[t("rail",`
 cursor: wait;
 `)]),u("disabled",[t("rail",`
 cursor: not-allowed;
 opacity: .5;
 `)])]),ze=Object.assign(Object.assign({},J.props),{size:{type:String,default:"medium"},value:{type:[String,Number,Boolean],default:void 0},loading:Boolean,defaultValue:{type:[String,Number,Boolean],default:!1},disabled:{type:Boolean,default:void 0},round:{type:Boolean,default:!0},"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],checkedValue:{type:[String,Number,Boolean],default:!0},uncheckedValue:{type:[String,Number,Boolean],default:!1},railStyle:Function,rubberBand:{type:Boolean,default:!0},onChange:[Function,Array]});let _;const Fe=X({name:"Switch",props:ze,setup(e){_===void 0&&(typeof CSS<"u"?typeof CSS.supports<"u"?_=CSS.supports("width","max(1px)"):_=!1:_=!0);const{mergedClsPrefixRef:l,inlineThemeDisabled:d}=ve(e),r=J("Switch","-switch",Ve,$e,e,l),i=ge(e),{mergedSizeRef:s,mergedDisabledRef:c}=i,m=O(e.defaultValue),w=me(e,"value"),p=we(w,m),C=R(()=>p.value===e.checkedValue),k=O(!1),o=O(!1),b=R(()=>{const{railStyle:a}=e;if(a)return a({focused:o.value,checked:C.value})});function f(a){const{"onUpdate:value":$,onChange:V,onUpdateValue:z}=e,{nTriggerFormInput:F,nTriggerFormChange:T}=i;$&&K($,a),z&&K(z,a),V&&K(V,a),m.value=a,F(),T()}function q(){const{nTriggerFormFocus:a}=i;a()}function G(){const{nTriggerFormBlur:a}=i;a()}function Z(){e.loading||c.value||(p.value!==e.checkedValue?f(e.checkedValue):f(e.uncheckedValue))}function Q(){o.value=!0,q()}function ee(){o.value=!1,G(),k.value=!1}function te(a){e.loading||c.value||a.key===" "&&(p.value!==e.checkedValue?f(e.checkedValue):f(e.uncheckedValue),k.value=!1)}function ae(a){e.loading||c.value||a.key===" "&&(a.preventDefault(),k.value=!0)}const P=R(()=>{const{value:a}=s,{self:{opacityDisabled:$,railColor:V,railColorActive:z,buttonBoxShadow:F,buttonColor:T,boxShadowFocus:oe,loadingColor:ie,textColor:ne,iconColor:re,[x("buttonHeight",a)]:v,[x("buttonWidth",a)]:le,[x("buttonWidthPressed",a)]:se,[x("railHeight",a)]:g,[x("railWidth",a)]:B,[x("railBorderRadius",a)]:ce,[x("buttonBorderRadius",a)]:de},common:{cubicBezierEaseInOut:ue}}=r.value;let D,W,j;return _?(D=`calc((${g} - ${v}) / 2)`,W=`max(${g}, ${v})`,j=`max(${B}, calc(${B} + ${v} - ${g}))`):(D=M((h(g)-h(v))/2),W=M(Math.max(h(g),h(v))),j=h(g)>h(v)?B:M(h(B)+h(v)-h(g))),{"--n-bezier":ue,"--n-button-border-radius":de,"--n-button-box-shadow":F,"--n-button-color":T,"--n-button-width":le,"--n-button-width-pressed":se,"--n-button-height":v,"--n-height":W,"--n-offset":D,"--n-opacity-disabled":$,"--n-rail-border-radius":ce,"--n-rail-color":V,"--n-rail-color-active":z,"--n-rail-height":g,"--n-rail-width":B,"--n-width":j,"--n-box-shadow-focus":oe,"--n-loading-color":ie,"--n-text-color":ne,"--n-icon-color":re}}),S=d?pe("switch",R(()=>s.value[0]),P,e):void 0;return{handleClick:Z,handleBlur:ee,handleFocus:Q,handleKeyup:te,handleKeydown:ae,mergedRailStyle:b,pressed:k,mergedClsPrefix:l,mergedValue:p,checked:C,mergedDisabled:c,cssVars:d?void 0:P,themeClass:S==null?void 0:S.themeClass,onRender:S==null?void 0:S.onRender}},render(){const{mergedClsPrefix:e,mergedDisabled:l,checked:d,mergedRailStyle:r,onRender:i,$slots:s}=this;i==null||i();const{checked:c,unchecked:m,icon:w,"checked-icon":p,"unchecked-icon":C}=s,k=!(U(w)&&U(p)&&U(C));return n("div",{role:"switch","aria-checked":d,class:[`${e}-switch`,this.themeClass,k&&`${e}-switch--icon`,d&&`${e}-switch--active`,l&&`${e}-switch--disabled`,this.round&&`${e}-switch--round`,this.loading&&`${e}-switch--loading`,this.pressed&&`${e}-switch--pressed`,this.rubberBand&&`${e}-switch--rubber-band`],tabindex:this.mergedDisabled?void 0:0,style:this.cssVars,onClick:this.handleClick,onFocus:this.handleFocus,onBlur:this.handleBlur,onKeyup:this.handleKeyup,onKeydown:this.handleKeydown},n("div",{class:`${e}-switch__rail`,"aria-hidden":"true",style:r},y(c,o=>y(m,b=>o||b?n("div",{"aria-hidden":!0,class:`${e}-switch__children-placeholder`},n("div",{class:`${e}-switch__rail-placeholder`},n("div",{class:`${e}-switch__button-placeholder`}),o),n("div",{class:`${e}-switch__rail-placeholder`},n("div",{class:`${e}-switch__button-placeholder`}),b)):null)),n("div",{class:`${e}-switch__button`},y(w,o=>y(p,b=>y(C,f=>n(ye,null,{default:()=>this.loading?n(xe,{key:"loading",clsPrefix:e,strokeWidth:20}):this.checked&&(b||o)?n("div",{class:`${e}-switch__button-icon`,key:b?"checked-icon":"icon"},b||o):!this.checked&&(f||o)?n("div",{class:`${e}-switch__button-icon`,key:f?"unchecked-icon":"icon"},f||o):null})))),y(c,o=>o&&n("div",{key:"checked",class:`${e}-switch__checked`},o)),y(m,o=>o&&n("div",{key:"unchecked",class:`${e}-switch__unchecked`},o)))))}}),De=X({__name:"YSwitch",props:{modelValue:{type:null}},emits:["update:modelValue"],setup(e,{emit:l}){const d=e;let r=l,i=R({get(){return d.modelValue},set(s){r("update:modelValue",s)}});return(s,c)=>{const m=Fe;return Ce(),ke(m,{value:I(i),"onUpdate:value":c[0]||(c[0]=w=>Se(i)?i.value=w:i=w),size:I(Be),clearable:""},{"checked-icon":E(()=>[Y(s.$slots,"checked-icon")]),"unchecked-icon":E(()=>[Y(s.$slots,"unchecked-icon")]),_:3},8,["value","size"])}}});export{De as default};
