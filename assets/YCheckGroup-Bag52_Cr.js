import{K as k,L as V,g as N,u as L,j as G,M,h as R,y as P,N as T,O as C,P as A,q as w,Q as I,B,C as _,D as z,J as O,E as b,R as U,S as q,T as D,U as F,G as W}from"./index-BkQ_KyLE.js";import{a as H,_ as J}from"./Checkbox-B9Lk1QK0.js";import{g as K}from"./get-slot-Bk_rJcZu.js";const Q=()=>k,Y={name:"Space",self:Q},X=Y;let x;const Z=()=>{if(!V)return!0;if(x===void 0){const e=document.createElement("div");e.style.display="flex",e.style.flexDirection="column",e.style.rowGap="1px",e.appendChild(document.createElement("div")),e.appendChild(document.createElement("div")),document.body.appendChild(e);const n=e.scrollHeight===1;return document.body.removeChild(e),x=n}return x},ee=Object.assign(Object.assign({},G.props),{align:String,justify:{type:String,default:"start"},inline:Boolean,vertical:Boolean,reverse:Boolean,size:{type:[String,Number,Array],default:"medium"},wrapItem:{type:Boolean,default:!0},itemClass:String,itemStyle:[String,Object],wrap:{type:Boolean,default:!0},internalUseGap:{type:Boolean,default:void 0}}),te=N({name:"Space",props:ee,setup(e){const{mergedClsPrefixRef:n,mergedRtlRef:u}=L(e),p=G("Space","-space",void 0,X,e,n),t=M("Space",u,n);return{useGap:Z(),rtlEnabled:t,mergedClsPrefix:n,margin:R(()=>{const{size:a}=e;if(Array.isArray(a))return{horizontal:a[0],vertical:a[1]};if(typeof a=="number")return{horizontal:a,vertical:a};const{self:{[P("gap",a)]:o}}=p.value,{row:r,col:c}=T(o);return{horizontal:C(c),vertical:C(r)}})}},render(){const{vertical:e,reverse:n,align:u,inline:p,justify:t,itemClass:a,itemStyle:o,margin:r,wrap:c,mergedClsPrefix:f,rtlEnabled:l,useGap:m,wrapItem:$,internalUseGap:E}=this,g=A(K(this),!1);if(!g.length)return null;const S=`${r.horizontal}px`,y=`${r.horizontal/2}px`,j=`${r.vertical}px`,i=`${r.vertical/2}px`,d=g.length-1,v=t.startsWith("space-");return w("div",{role:"none",class:[`${f}-space`,l&&`${f}-space--rtl`],style:{display:p?"inline-flex":"flex",flexDirection:e&&!n?"column":e&&n?"column-reverse":!e&&n?"row-reverse":"row",justifyContent:["start","end"].includes(t)?"flex-"+t:t,flexWrap:!c||e?"nowrap":"wrap",marginTop:m||e?"":`-${i}`,marginBottom:m||e?"":`-${i}`,alignItems:u,gap:m?`${r.vertical}px ${r.horizontal}px`:""}},!$&&(m||E)?g:g.map((h,s)=>h.type===I?h:w("div",{role:"none",class:a,style:[o,{maxWidth:"100%"},m?"":e?{marginBottom:s!==d?j:""}:l?{marginLeft:v?t==="space-between"&&s===d?"":y:s!==d?S:"",marginRight:v?t==="space-between"&&s===0?"":y:"",paddingTop:i,paddingBottom:i}:{marginRight:v?t==="space-between"&&s===d?"":y:s!==d?S:"",marginLeft:v?t==="space-between"&&s===0?"":y:"",paddingTop:i,paddingBottom:i}]},h)))}}),le=N({__name:"YCheckGroup",props:{modelValue:{type:null,required:!0},options:{type:Array,required:!0},valueName:{type:String,default:"value"},labelName:{type:String,default:"label"},disabledName:{type:String,default:"disabled"}},emits:["update:modelValue"],setup(e,{emit:n}){const u=e,p=n;let t=R({get(){return u.modelValue},set(a){p("update:modelValue",a)}});return(a,o)=>{const r=J,c=te,f=H;return b(),B(f,{value:z(t),"onUpdate:value":o[0]||(o[0]=l=>O(t)?t.value=l:t=l),size:z(W)},{default:_(()=>[U(c,{"item-style":"display: flex;"},{default:_(()=>[(b(!0),q(F,null,D(e.options,l=>(b(),B(r,{key:l[e.valueName],value:l[e.valueName],label:l[e.labelName],disabled:l[e.disabledName]},null,8,["value","label","disabled"]))),128))]),_:1})]),_:1},8,["value","size"])}}});export{le as default};
