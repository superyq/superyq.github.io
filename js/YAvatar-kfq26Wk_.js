import{c as A,b as C,i as M,d as E,e as W,f as k,g as T,u as N,r as p,h as y,j as w,k as V,l as G,m as K,o as D,w as Y,n as q,p as U,q as X,s as J,t as O,v as B,x as Q,y as Z,V as ee,z as re,A as oe,B as te,C as ne,D as ae,E as se,F as ie,G as le}from"./index-D8FvNXUN.js";const de=A("n-avatar-group"),ce=C("avatar",`
 width: var(--n-merged-size);
 height: var(--n-merged-size);
 color: #FFF;
 font-size: var(--n-font-size);
 display: inline-flex;
 position: relative;
 overflow: hidden;
 text-align: center;
 border: var(--n-border);
 border-radius: var(--n-border-radius);
 --n-merged-color: var(--n-color);
 background-color: var(--n-merged-color);
 transition:
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
`,[M(E("&","--n-merged-color: var(--n-color-modal);")),W(E("&","--n-merged-color: var(--n-color-popover);")),E("img",`
 width: 100%;
 height: 100%;
 `),k("text",`
 white-space: nowrap;
 display: inline-block;
 position: absolute;
 left: 50%;
 top: 50%;
 `),C("icon",`
 vertical-align: bottom;
 font-size: calc(var(--n-merged-size) - 6px);
 `),k("text","line-height: 1.25")]),ue=Object.assign(Object.assign({},w.props),{size:[String,Number],src:String,circle:{type:Boolean,default:void 0},objectFit:String,round:{type:Boolean,default:void 0},bordered:{type:Boolean,default:void 0},onError:Function,fallbackSrc:String,intersectionObserverOptions:Object,lazy:Boolean,onLoad:Function,renderPlaceholder:Function,renderFallback:Function,imgProps:Object,color:String}),fe=T({name:"Avatar",props:ue,setup(r){const{mergedClsPrefixRef:a,inlineThemeDisabled:c}=N(r),i=p(!1);let u=null;const f=p(null),l=p(null),R=()=>{const{value:e}=f;if(e&&(u===null||u!==e.innerHTML)){u=e.innerHTML;const{value:o}=l;if(o){const{offsetWidth:t,offsetHeight:s}=o,{offsetWidth:n,offsetHeight:_}=e,x=.9,L=Math.min(t/n*x,s/_*x,1);e.style.transform=`translateX(-50%) translateY(-50%) scale(${L})`}}},b=B(de,null),d=y(()=>{const{size:e}=r;if(e)return e;const{size:o}=b||{};return o||"medium"}),v=w("Avatar","-avatar",ce,Q,r,a),z=B(Z,null),h=y(()=>{if(b)return!0;const{round:e,circle:o}=r;return e!==void 0||o!==void 0?e||o:z?z.roundRef.value:!1}),m=y(()=>b?!0:r.bordered||!1),F=y(()=>{const e=d.value,o=h.value,t=m.value,{color:s}=r,{self:{borderRadius:n,fontSize:_,color:x,border:L,colorModal:H,colorPopover:$},common:{cubicBezierEaseInOut:I}}=v.value;let j;return typeof e=="number"?j=`${e}px`:j=v.value.self[V("height",e)],{"--n-font-size":_,"--n-border":t?L:"none","--n-border-radius":o?"50%":n,"--n-color":s||x,"--n-color-modal":s||H,"--n-color-popover":s||$,"--n-bezier":I,"--n-merged-size":`var(--n-avatar-size-override, ${j})`}}),g=c?G("avatar",y(()=>{const e=d.value,o=h.value,t=m.value,{color:s}=r;let n="";return e&&(typeof e=="number"?n+=`a${e}`:n+=e[0]),o&&(n+="b"),t&&(n+="c"),s&&(n+=K(s)),n}),F,r):void 0,S=p(!r.lazy);D(()=>{if(r.lazy&&r.intersectionObserverOptions){let e;const o=Y(()=>{e==null||e(),e=void 0,r.lazy&&(e=oe(l.value,r.intersectionObserverOptions,S))});q(()=>{o(),e==null||e()})}}),U(()=>{var e;return r.src||((e=r.imgProps)===null||e===void 0?void 0:e.src)},()=>{i.value=!1});const P=p(!r.lazy);return{textRef:f,selfRef:l,mergedRoundRef:h,mergedClsPrefix:a,fitTextTransform:R,cssVars:c?void 0:F,themeClass:g==null?void 0:g.themeClass,onRender:g==null?void 0:g.onRender,hasLoadError:i,shouldStartLoading:S,loaded:P,mergedOnError:e=>{if(!S.value)return;i.value=!0;const{onError:o,imgProps:{onError:t}={}}=r;o==null||o(e),t==null||t(e)},mergedOnLoad:e=>{const{onLoad:o,imgProps:{onLoad:t}={}}=r;o==null||o(e),t==null||t(e),P.value=!0}}},render(){var r,a;const{$slots:c,src:i,mergedClsPrefix:u,lazy:f,onRender:l,loaded:R,hasLoadError:b,imgProps:d={}}=this;l==null||l();let v;const z=!R&&!b&&(this.renderPlaceholder?this.renderPlaceholder():(a=(r=this.$slots).placeholder)===null||a===void 0?void 0:a.call(r));return this.hasLoadError?v=this.renderFallback?this.renderFallback():X(c.fallback,()=>[O("img",{src:this.fallbackSrc,style:{objectFit:this.objectFit}})]):v=J(c.default,h=>{if(h)return O(ee,{onResize:this.fitTextTransform},{default:()=>O("span",{ref:"textRef",class:`${u}-avatar__text`},h)});if(i||d.src){const m=this.src||d.src;return O("img",Object.assign(Object.assign({},d),{loading:re&&!this.intersectionObserverOptions&&f?"lazy":"eager",src:f&&this.intersectionObserverOptions?this.shouldStartLoading?m:void 0:m,"data-image-src":m,onLoad:this.mergedOnLoad,onError:this.mergedOnError,style:[d.style||"",{objectFit:this.objectFit},z?{height:"0",width:"0",visibility:"hidden",position:"absolute"}:""]}))}}),O("span",{ref:"selfRef",class:[`${u}-avatar`,this.themeClass],style:this.cssVars},v,f&&z)}}),he=T({__name:"YAvatar",setup(r){return(a,c)=>{const i=fe;return te(),ne(i,{size:ie(le),circle:""},{default:ae(()=>[se(a.$slots,"default")]),_:3},8,["size"])}}});export{he as default};
