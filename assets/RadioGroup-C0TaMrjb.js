import{c as ne,bf as G,r as F,v as ae,ap as A,ax as N,aA as O,u as H,ay as I,b as _,an as f,f as s,d as R,aF as j,g as M,j as D,bX as K,h as $,k as V,b3 as L,l as W,t as y,s as ie,aj as de,bY as se,bZ as le}from"./index-_v_ROuBL.js";const ce={name:String,value:{type:[String,Number,Boolean],default:"on"},checked:{type:Boolean,default:void 0},defaultChecked:Boolean,disabled:{type:Boolean,default:void 0},label:String,size:String,onUpdateChecked:[Function,Array],"onUpdate:checked":[Function,Array],checkedValue:{type:Boolean,default:void 0}},Y=ne("n-radio-group");function ue(e){const o=G(e,{mergedSize(a){const{size:l}=e;if(l!==void 0)return l;if(t){const{mergedSizeRef:{value:u}}=t;if(u!==void 0)return u}return a?a.mergedSize.value:"medium"},mergedDisabled(a){return!!(e.disabled||t!=null&&t.disabledRef.value||a!=null&&a.disabled.value)}}),{mergedSizeRef:r,mergedDisabledRef:i}=o,n=F(null),g=F(null),t=ae(Y,null),b=F(e.defaultChecked),d=A(e,"checked"),p=N(d,b),m=O(()=>t?t.valueRef.value===e.value:p.value),w=O(()=>{const{name:a}=e;if(a!==void 0)return a;if(t)return t.nameRef.value}),v=F(!1);function C(){if(t){const{doUpdateValue:a}=t,{value:l}=e;I(a,l)}else{const{onUpdateChecked:a,"onUpdate:checked":l}=e,{nTriggerFormInput:u,nTriggerFormChange:c}=o;a&&I(a,!0),l&&I(l,!0),u(),c(),b.value=!0}}function x(){i.value||m.value||C()}function k(){x(),n.value&&(n.value.checked=m.value)}function z(){v.value=!1}function S(){v.value=!0}return{mergedClsPrefix:t?t.mergedClsPrefixRef:H(e).mergedClsPrefixRef,inputRef:n,labelRef:g,mergedName:w,mergedDisabled:i,renderSafeChecked:m,focus:v,mergedSize:r,handleRadioInputChange:k,handleRadioInputBlur:z,handleRadioInputFocus:S}}const be=_("radio",`
 line-height: var(--n-label-line-height);
 outline: none;
 position: relative;
 user-select: none;
 -webkit-user-select: none;
 display: inline-flex;
 align-items: flex-start;
 flex-wrap: nowrap;
 font-size: var(--n-font-size);
 word-break: break-word;
`,[f("checked",[s("dot",`
 background-color: var(--n-color-active);
 `)]),s("dot-wrapper",`
 position: relative;
 flex-shrink: 0;
 flex-grow: 0;
 width: var(--n-radio-size);
 `),_("radio-input",`
 position: absolute;
 border: 0;
 border-radius: inherit;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 opacity: 0;
 z-index: 1;
 cursor: pointer;
 `),s("dot",`
 position: absolute;
 top: 50%;
 left: 0;
 transform: translateY(-50%);
 height: var(--n-radio-size);
 width: var(--n-radio-size);
 background: var(--n-color);
 box-shadow: var(--n-box-shadow);
 border-radius: 50%;
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 `,[R("&::before",`
 content: "";
 opacity: 0;
 position: absolute;
 left: 4px;
 top: 4px;
 height: calc(100% - 8px);
 width: calc(100% - 8px);
 border-radius: 50%;
 transform: scale(.8);
 background: var(--n-dot-color-active);
 transition: 
 opacity .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 transform .3s var(--n-bezier);
 `),f("checked",{boxShadow:"var(--n-box-shadow-active)"},[R("&::before",`
 opacity: 1;
 transform: scale(1);
 `)])]),s("label",`
 color: var(--n-text-color);
 padding: var(--n-label-padding);
 font-weight: var(--n-label-font-weight);
 display: inline-block;
 transition: color .3s var(--n-bezier);
 `),j("disabled",`
 cursor: pointer;
 `,[R("&:hover",[s("dot",{boxShadow:"var(--n-box-shadow-hover)"})]),f("focus",[R("&:not(:active)",[s("dot",{boxShadow:"var(--n-box-shadow-focus)"})])])]),f("disabled",`
 cursor: not-allowed;
 `,[s("dot",{boxShadow:"var(--n-box-shadow-disabled)",backgroundColor:"var(--n-color-disabled)"},[R("&::before",{backgroundColor:"var(--n-dot-color-disabled)"}),f("checked",`
 opacity: 1;
 `)]),s("label",{color:"var(--n-text-color-disabled)"}),_("radio-input",`
 cursor: not-allowed;
 `)])]),he=Object.assign(Object.assign({},D.props),ce),me=M({name:"Radio",props:he,setup(e){const o=ue(e),r=D("Radio","-radio",be,K,e,o.mergedClsPrefix),i=$(()=>{const{mergedSize:{value:p}}=o,{common:{cubicBezierEaseInOut:m},self:{boxShadow:w,boxShadowActive:v,boxShadowDisabled:C,boxShadowFocus:x,boxShadowHover:k,color:z,colorDisabled:S,colorActive:a,textColor:l,textColorDisabled:u,dotColorActive:c,dotColorDisabled:h,labelPadding:B,labelLineHeight:T,labelFontWeight:E,[V("fontSize",p)]:P,[V("radioSize",p)]:U}}=r.value;return{"--n-bezier":m,"--n-label-line-height":T,"--n-label-font-weight":E,"--n-box-shadow":w,"--n-box-shadow-active":v,"--n-box-shadow-disabled":C,"--n-box-shadow-focus":x,"--n-box-shadow-hover":k,"--n-color":z,"--n-color-active":a,"--n-color-disabled":S,"--n-dot-color-active":c,"--n-dot-color-disabled":h,"--n-font-size":P,"--n-radio-size":U,"--n-text-color":l,"--n-text-color-disabled":u,"--n-label-padding":B}}),{inlineThemeDisabled:n,mergedClsPrefixRef:g,mergedRtlRef:t}=H(e),b=L("Radio",t,g),d=n?W("radio",$(()=>o.mergedSize.value[0]),i,e):void 0;return Object.assign(o,{rtlEnabled:b,cssVars:n?void 0:i,themeClass:d==null?void 0:d.themeClass,onRender:d==null?void 0:d.onRender})},render(){const{$slots:e,mergedClsPrefix:o,onRender:r,label:i}=this;return r==null||r(),y("label",{class:[`${o}-radio`,this.themeClass,this.rtlEnabled&&`${o}-radio--rtl`,this.mergedDisabled&&`${o}-radio--disabled`,this.renderSafeChecked&&`${o}-radio--checked`,this.focus&&`${o}-radio--focus`],style:this.cssVars},y("input",{ref:"inputRef",type:"radio",class:`${o}-radio-input`,value:this.value,name:this.mergedName,checked:this.renderSafeChecked,disabled:this.mergedDisabled,onChange:this.handleRadioInputChange,onFocus:this.handleRadioInputFocus,onBlur:this.handleRadioInputBlur}),y("div",{class:`${o}-radio__dot-wrapper`}," ",y("div",{class:[`${o}-radio__dot`,this.renderSafeChecked&&`${o}-radio__dot--checked`]})),ie(e.default,n=>!n&&!i?null:y("div",{ref:"labelRef",class:`${o}-radio__label`},n||i)))}}),ve=_("radio-group",`
 display: inline-block;
 font-size: var(--n-font-size);
`,[s("splitor",`
 display: inline-block;
 vertical-align: bottom;
 width: 1px;
 transition:
 background-color .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 background: var(--n-button-border-color);
 `,[f("checked",{backgroundColor:"var(--n-button-border-color-active)"}),f("disabled",{opacity:"var(--n-opacity-disabled)"})]),f("button-group",`
 white-space: nowrap;
 height: var(--n-height);
 line-height: var(--n-height);
 `,[_("radio-button",{height:"var(--n-height)",lineHeight:"var(--n-height)"}),s("splitor",{height:"var(--n-height)"})]),_("radio-button",`
 vertical-align: bottom;
 outline: none;
 position: relative;
 user-select: none;
 -webkit-user-select: none;
 display: inline-block;
 box-sizing: border-box;
 padding-left: 14px;
 padding-right: 14px;
 white-space: nowrap;
 transition:
 background-color .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 background: var(--n-button-color);
 color: var(--n-button-text-color);
 border-top: 1px solid var(--n-button-border-color);
 border-bottom: 1px solid var(--n-button-border-color);
 `,[_("radio-input",`
 pointer-events: none;
 position: absolute;
 border: 0;
 border-radius: inherit;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 opacity: 0;
 z-index: 1;
 `),s("state-border",`
 z-index: 1;
 pointer-events: none;
 position: absolute;
 box-shadow: var(--n-button-box-shadow);
 transition: box-shadow .3s var(--n-bezier);
 left: -1px;
 bottom: -1px;
 right: -1px;
 top: -1px;
 `),R("&:first-child",`
 border-top-left-radius: var(--n-button-border-radius);
 border-bottom-left-radius: var(--n-button-border-radius);
 border-left: 1px solid var(--n-button-border-color);
 `,[s("state-border",`
 border-top-left-radius: var(--n-button-border-radius);
 border-bottom-left-radius: var(--n-button-border-radius);
 `)]),R("&:last-child",`
 border-top-right-radius: var(--n-button-border-radius);
 border-bottom-right-radius: var(--n-button-border-radius);
 border-right: 1px solid var(--n-button-border-color);
 `,[s("state-border",`
 border-top-right-radius: var(--n-button-border-radius);
 border-bottom-right-radius: var(--n-button-border-radius);
 `)]),j("disabled",`
 cursor: pointer;
 `,[R("&:hover",[s("state-border",`
 transition: box-shadow .3s var(--n-bezier);
 box-shadow: var(--n-button-box-shadow-hover);
 `),j("checked",{color:"var(--n-button-text-color-hover)"})]),f("focus",[R("&:not(:active)",[s("state-border",{boxShadow:"var(--n-button-box-shadow-focus)"})])])]),f("checked",`
 background: var(--n-button-color-active);
 color: var(--n-button-text-color-active);
 border-color: var(--n-button-border-color-active);
 `),f("disabled",`
 cursor: not-allowed;
 opacity: var(--n-opacity-disabled);
 `)])]);function fe(e,o,r){var i;const n=[];let g=!1;for(let t=0;t<e.length;++t){const b=e[t],d=(i=b.type)===null||i===void 0?void 0:i.name;d==="RadioButton"&&(g=!0);const p=b.props;if(d!=="RadioButton"){n.push(b);continue}if(t===0)n.push(b);else{const m=n[n.length-1].props,w=o===m.value,v=m.disabled,C=o===p.value,x=p.disabled,k=(w?2:0)+(v?0:1),z=(C?2:0)+(x?0:1),S={[`${r}-radio-group__splitor--disabled`]:v,[`${r}-radio-group__splitor--checked`]:w},a={[`${r}-radio-group__splitor--disabled`]:x,[`${r}-radio-group__splitor--checked`]:C},l=k<z?a:S;n.push(y("div",{class:[`${r}-radio-group__splitor`,l]}),b)}}return{children:n,isButtonGroup:g}}const ge=Object.assign(Object.assign({},D.props),{name:String,value:[String,Number,Boolean],defaultValue:{type:[String,Number,Boolean],default:null},size:String,disabled:{type:Boolean,default:void 0},"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array]}),xe=M({name:"RadioGroup",props:ge,setup(e){const o=F(null),{mergedSizeRef:r,mergedDisabledRef:i,nTriggerFormChange:n,nTriggerFormInput:g,nTriggerFormBlur:t,nTriggerFormFocus:b}=G(e),{mergedClsPrefixRef:d,inlineThemeDisabled:p,mergedRtlRef:m}=H(e),w=D("Radio","-radio-group",ve,K,e,d),v=F(e.defaultValue),C=A(e,"value"),x=N(C,v);function k(c){const{onUpdateValue:h,"onUpdate:value":B}=e;h&&I(h,c),B&&I(B,c),v.value=c,n(),g()}function z(c){const{value:h}=o;h&&(h.contains(c.relatedTarget)||b())}function S(c){const{value:h}=o;h&&(h.contains(c.relatedTarget)||t())}de(Y,{mergedClsPrefixRef:d,nameRef:A(e,"name"),valueRef:x,disabledRef:i,mergedSizeRef:r,doUpdateValue:k});const a=L("Radio",m,d),l=$(()=>{const{value:c}=r,{common:{cubicBezierEaseInOut:h},self:{buttonBorderColor:B,buttonBorderColorActive:T,buttonBorderRadius:E,buttonBoxShadow:P,buttonBoxShadowFocus:U,buttonBoxShadowHover:X,buttonColor:Z,buttonColorActive:q,buttonTextColor:J,buttonTextColorActive:Q,buttonTextColorHover:ee,opacityDisabled:oe,[V("buttonHeight",c)]:te,[V("fontSize",c)]:re}}=w.value;return{"--n-font-size":re,"--n-bezier":h,"--n-button-border-color":B,"--n-button-border-color-active":T,"--n-button-border-radius":E,"--n-button-box-shadow":P,"--n-button-box-shadow-focus":U,"--n-button-box-shadow-hover":X,"--n-button-color":Z,"--n-button-color-active":q,"--n-button-text-color":J,"--n-button-text-color-hover":ee,"--n-button-text-color-active":Q,"--n-height":te,"--n-opacity-disabled":oe}}),u=p?W("radio-group",$(()=>r.value[0]),l,e):void 0;return{selfElRef:o,rtlEnabled:a,mergedClsPrefix:d,mergedValue:x,handleFocusout:S,handleFocusin:z,cssVars:p?void 0:l,themeClass:u==null?void 0:u.themeClass,onRender:u==null?void 0:u.onRender}},render(){var e;const{mergedValue:o,mergedClsPrefix:r,handleFocusin:i,handleFocusout:n}=this,{children:g,isButtonGroup:t}=fe(se(le(this)),o,r);return(e=this.onRender)===null||e===void 0||e.call(this),y("div",{onFocusin:i,onFocusout:n,ref:"selfElRef",class:[`${r}-radio-group`,this.rtlEnabled&&`${r}-radio-group--rtl`,this.themeClass,t&&`${r}-radio-group--button-group`],style:this.cssVars},g)}});export{xe as _,me as a};
