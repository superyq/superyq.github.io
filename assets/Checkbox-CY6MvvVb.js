import{t as s,g as j,u as N,bf as E,r as U,h as B,ax as H,aj as se,ap as P,c as be,ay as i,d as h,b as n,an as S,f as y,b2 as ue,i as he,e as fe,v as ve,aA as ke,j as V,b3 as me,k as K,l as ge,aK as xe,s as pe,aZ as ye,bv as Ce,bw as we}from"./index-_v_ROuBL.js";const Re=s("svg",{viewBox:"0 0 64 64",class:"check-icon"},s("path",{d:"M50.42,16.76L22.34,39.45l-8.1-11.46c-1.12-1.58-3.3-1.96-4.88-0.84c-1.58,1.12-1.95,3.3-0.84,4.88l10.26,14.51  c0.56,0.79,1.42,1.31,2.38,1.45c0.16,0.02,0.32,0.03,0.48,0.03c0.8,0,1.57-0.27,2.2-0.78l30.99-25.03c1.5-1.21,1.74-3.42,0.52-4.92  C54.13,15.78,51.93,15.55,50.42,16.76z"})),ze=s("svg",{viewBox:"0 0 100 100",class:"line-icon"},s("path",{d:"M80.2,55.5H21.4c-2.8,0-5.1-2.5-5.1-5.5l0,0c0-3,2.3-5.5,5.1-5.5h58.7c2.8,0,5.1,2.5,5.1,5.5l0,0C85.2,53.1,82.9,55.5,80.2,55.5z"})),G=be("n-checkbox-group"),Se={min:Number,max:Number,size:String,value:Array,defaultValue:{type:Array,default:null},disabled:{type:Boolean,default:void 0},"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onChange:[Function,Array]},$e=j({name:"CheckboxGroup",props:Se,setup(o){const{mergedClsPrefixRef:C}=N(o),x=E(o),{mergedSizeRef:w,mergedDisabledRef:T}=x,b=U(o.defaultValue),R=B(()=>o.value),u=H(R,b),c=B(()=>{var f;return((f=u.value)===null||f===void 0?void 0:f.length)||0}),a=B(()=>Array.isArray(u.value)?new Set(u.value):new Set);function A(f,r){const{nTriggerFormInput:p,nTriggerFormChange:v}=x,{onChange:l,"onUpdate:value":k,onUpdateValue:m}=o;if(Array.isArray(u.value)){const t=Array.from(u.value),M=t.findIndex(I=>I===r);f?~M||(t.push(r),m&&i(m,t,{actionType:"check",value:r}),k&&i(k,t,{actionType:"check",value:r}),p(),v(),b.value=t,l&&i(l,t)):~M&&(t.splice(M,1),m&&i(m,t,{actionType:"uncheck",value:r}),k&&i(k,t,{actionType:"uncheck",value:r}),l&&i(l,t),b.value=t,p(),v())}else f?(m&&i(m,[r],{actionType:"check",value:r}),k&&i(k,[r],{actionType:"check",value:r}),l&&i(l,[r]),b.value=[r],p(),v()):(m&&i(m,[],{actionType:"uncheck",value:r}),k&&i(k,[],{actionType:"uncheck",value:r}),l&&i(l,[]),b.value=[],p(),v())}return se(G,{checkedCountRef:c,maxRef:P(o,"max"),minRef:P(o,"min"),valueSetRef:a,disabledRef:T,mergedSizeRef:w,toggleCheckbox:A}),{mergedClsPrefix:C}},render(){return s("div",{class:`${this.mergedClsPrefix}-checkbox-group`,role:"group"},this.$slots)}}),Te=h([n("checkbox",`
 font-size: var(--n-font-size);
 outline: none;
 cursor: pointer;
 display: inline-flex;
 flex-wrap: nowrap;
 align-items: flex-start;
 word-break: break-word;
 line-height: var(--n-size);
 --n-merged-color-table: var(--n-color-table);
 `,[S("show-label","line-height: var(--n-label-line-height);"),h("&:hover",[n("checkbox-box",[y("border","border: var(--n-border-checked);")])]),h("&:focus:not(:active)",[n("checkbox-box",[y("border",`
 border: var(--n-border-focus);
 box-shadow: var(--n-box-shadow-focus);
 `)])]),S("inside-table",[n("checkbox-box",`
 background-color: var(--n-merged-color-table);
 `)]),S("checked",[n("checkbox-box",`
 background-color: var(--n-color-checked);
 `,[n("checkbox-icon",[h(".check-icon",`
 opacity: 1;
 transform: scale(1);
 `)])])]),S("indeterminate",[n("checkbox-box",[n("checkbox-icon",[h(".check-icon",`
 opacity: 0;
 transform: scale(.5);
 `),h(".line-icon",`
 opacity: 1;
 transform: scale(1);
 `)])])]),S("checked, indeterminate",[h("&:focus:not(:active)",[n("checkbox-box",[y("border",`
 border: var(--n-border-checked);
 box-shadow: var(--n-box-shadow-focus);
 `)])]),n("checkbox-box",`
 background-color: var(--n-color-checked);
 border-left: 0;
 border-top: 0;
 `,[y("border",{border:"var(--n-border-checked)"})])]),S("disabled",{cursor:"not-allowed"},[S("checked",[n("checkbox-box",`
 background-color: var(--n-color-disabled-checked);
 `,[y("border",{border:"var(--n-border-disabled-checked)"}),n("checkbox-icon",[h(".check-icon, .line-icon",{fill:"var(--n-check-mark-color-disabled-checked)"})])])]),n("checkbox-box",`
 background-color: var(--n-color-disabled);
 `,[y("border",`
 border: var(--n-border-disabled);
 `),n("checkbox-icon",[h(".check-icon, .line-icon",`
 fill: var(--n-check-mark-color-disabled);
 `)])]),y("label",`
 color: var(--n-text-color-disabled);
 `)]),n("checkbox-box-wrapper",`
 position: relative;
 width: var(--n-size);
 flex-shrink: 0;
 flex-grow: 0;
 user-select: none;
 -webkit-user-select: none;
 `),n("checkbox-box",`
 position: absolute;
 left: 0;
 top: 50%;
 transform: translateY(-50%);
 height: var(--n-size);
 width: var(--n-size);
 display: inline-block;
 box-sizing: border-box;
 border-radius: var(--n-border-radius);
 background-color: var(--n-color);
 transition: background-color 0.3s var(--n-bezier);
 `,[y("border",`
 transition:
 border-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 border-radius: inherit;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border: var(--n-border);
 `),n("checkbox-icon",`
 display: flex;
 align-items: center;
 justify-content: center;
 position: absolute;
 left: 1px;
 right: 1px;
 top: 1px;
 bottom: 1px;
 `,[h(".check-icon, .line-icon",`
 width: 100%;
 fill: var(--n-check-mark-color);
 opacity: 0;
 transform: scale(0.5);
 transform-origin: center;
 transition:
 fill 0.3s var(--n-bezier),
 transform 0.3s var(--n-bezier),
 opacity 0.3s var(--n-bezier),
 border-color 0.3s var(--n-bezier);
 `),ue({left:"1px",top:"1px"})])]),y("label",`
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 user-select: none;
 -webkit-user-select: none;
 padding: var(--n-label-padding);
 font-weight: var(--n-label-font-weight);
 `,[h("&:empty",{display:"none"})])]),he(n("checkbox",`
 --n-merged-color-table: var(--n-color-table-modal);
 `)),fe(n("checkbox",`
 --n-merged-color-table: var(--n-color-table-popover);
 `))]),_e=Object.assign(Object.assign({},V.props),{size:String,checked:{type:[Boolean,String,Number],default:void 0},defaultChecked:{type:[Boolean,String,Number],default:!1},value:[String,Number],disabled:{type:Boolean,default:void 0},indeterminate:Boolean,label:String,focusable:{type:Boolean,default:!0},checkedValue:{type:[Boolean,String,Number],default:!0},uncheckedValue:{type:[Boolean,String,Number],default:!1},"onUpdate:checked":[Function,Array],onUpdateChecked:[Function,Array],privateInsideTable:Boolean,onChange:[Function,Array]}),Ae=j({name:"Checkbox",props:_e,setup(o){const C=U(null),{mergedClsPrefixRef:x,inlineThemeDisabled:w,mergedRtlRef:T}=N(o),b=E(o,{mergedSize(e){const{size:g}=o;if(g!==void 0)return g;if(c){const{value:d}=c.mergedSizeRef;if(d!==void 0)return d}if(e){const{mergedSize:d}=e;if(d!==void 0)return d.value}return"medium"},mergedDisabled(e){const{disabled:g}=o;if(g!==void 0)return g;if(c){if(c.disabledRef.value)return!0;const{maxRef:{value:d},checkedCountRef:z}=c;if(d!==void 0&&z.value>=d&&!r.value)return!0;const{minRef:{value:D}}=c;if(D!==void 0&&z.value<=D&&r.value)return!0}return e?e.disabled.value:!1}}),{mergedDisabledRef:R,mergedSizeRef:u}=b,c=ve(G,null),a=U(o.defaultChecked),A=P(o,"checked"),f=H(A,a),r=ke(()=>{if(c){const e=c.valueSetRef.value;return e&&o.value!==void 0?e.has(o.value):!1}else return f.value===o.checkedValue}),p=V("Checkbox","-checkbox",Te,we,o,x);function v(e){if(c&&o.value!==void 0)c.toggleCheckbox(!r.value,o.value);else{const{onChange:g,"onUpdate:checked":d,onUpdateChecked:z}=o,{nTriggerFormInput:D,nTriggerFormChange:F}=b,$=r.value?o.uncheckedValue:o.checkedValue;d&&i(d,$,e),z&&i(z,$,e),g&&i(g,$,e),D(),F(),a.value=$}}function l(e){R.value||v(e)}function k(e){if(!R.value)switch(e.key){case" ":case"Enter":v(e)}}function m(e){switch(e.key){case" ":e.preventDefault()}}const t={focus:()=>{var e;(e=C.value)===null||e===void 0||e.focus()},blur:()=>{var e;(e=C.value)===null||e===void 0||e.blur()}},M=me("Checkbox",T,x),I=B(()=>{const{value:e}=u,{common:{cubicBezierEaseInOut:g},self:{borderRadius:d,color:z,colorChecked:D,colorDisabled:F,colorTableHeader:$,colorTableHeaderModal:L,colorTableHeaderPopover:O,checkMarkColor:W,checkMarkColorDisabled:Y,border:Z,borderFocus:q,borderDisabled:J,borderChecked:Q,boxShadowFocus:X,textColor:ee,textColorDisabled:oe,checkMarkColorDisabledChecked:re,colorDisabledChecked:ne,borderDisabledChecked:ae,labelPadding:ce,labelLineHeight:le,labelFontWeight:ie,[K("fontSize",e)]:te,[K("size",e)]:de}}=p.value;return{"--n-label-line-height":le,"--n-label-font-weight":ie,"--n-size":de,"--n-bezier":g,"--n-border-radius":d,"--n-border":Z,"--n-border-checked":Q,"--n-border-focus":q,"--n-border-disabled":J,"--n-border-disabled-checked":ae,"--n-box-shadow-focus":X,"--n-color":z,"--n-color-checked":D,"--n-color-table":$,"--n-color-table-modal":L,"--n-color-table-popover":O,"--n-color-disabled":F,"--n-color-disabled-checked":ne,"--n-text-color":ee,"--n-text-color-disabled":oe,"--n-check-mark-color":W,"--n-check-mark-color-disabled":Y,"--n-check-mark-color-disabled-checked":re,"--n-font-size":te,"--n-label-padding":ce}}),_=w?ge("checkbox",B(()=>u.value[0]),I,o):void 0;return Object.assign(b,t,{rtlEnabled:M,selfRef:C,mergedClsPrefix:x,mergedDisabled:R,renderedChecked:r,mergedTheme:p,labelId:xe(),handleClick:l,handleKeyUp:k,handleKeyDown:m,cssVars:w?void 0:I,themeClass:_==null?void 0:_.themeClass,onRender:_==null?void 0:_.onRender})},render(){var o;const{$slots:C,renderedChecked:x,mergedDisabled:w,indeterminate:T,privateInsideTable:b,cssVars:R,labelId:u,label:c,mergedClsPrefix:a,focusable:A,handleKeyUp:f,handleKeyDown:r,handleClick:p}=this;(o=this.onRender)===null||o===void 0||o.call(this);const v=pe(C.default,l=>c||l?s("span",{class:`${a}-checkbox__label`,id:u},c||l):null);return s("div",{ref:"selfRef",class:[`${a}-checkbox`,this.themeClass,this.rtlEnabled&&`${a}-checkbox--rtl`,x&&`${a}-checkbox--checked`,w&&`${a}-checkbox--disabled`,T&&`${a}-checkbox--indeterminate`,b&&`${a}-checkbox--inside-table`,v&&`${a}-checkbox--show-label`],tabindex:w||!A?void 0:0,role:"checkbox","aria-checked":T?"mixed":x,"aria-labelledby":u,style:R,onKeyup:f,onKeydown:r,onClick:p,onMousedown:()=>{Ce("selectstart",window,l=>{l.preventDefault()},{once:!0})}},s("div",{class:`${a}-checkbox-box-wrapper`}," ",s("div",{class:`${a}-checkbox-box`},s(ye,null,{default:()=>this.indeterminate?s("div",{key:"indeterminate",class:`${a}-checkbox-icon`},ze):s("div",{key:"check",class:`${a}-checkbox-icon`},Re)}),s("div",{class:`${a}-checkbox-box__border`}))),v)}});export{$e as _,Ae as a};
