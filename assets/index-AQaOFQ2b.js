import{a3 as F,B as m,K as x,E as p,a7 as f,Q as B,J as y,D as T,a4 as k,a8 as N,X as a,a9 as M,P as v,aa as _,ab as O,a1 as P,a2 as q,g as L,C as z,F as u,ac as Y,S as j,h as H,U as E,r as W,ad as X,M as S,ae as D,af as U,ag as V,a0 as G}from"./index-_v_ROuBL.js";import{v as K}from"./validate-CN3mN64R.js";const J="vue-img-cutter",Q="3.0.4",Z="A image crop plug-in for Vue,you can use it to rotate、zoom images and cut any size",$="acccccccb <tabzhang@foxmail.com>",tt={serve:"vue-cli-service serve",build:"vue-cli-service build",lint:"vue-cli-service lint"},et={"core-js":"^3.20.3",vue:"^3.2.29","vue-i18n":"^9.1.10"},ot={"@vue/cli-plugin-babel":"~4.5.15","@vue/cli-plugin-eslint":"~4.5.15","@vue/cli-service":"~4.5.15","@vue/compiler-sfc":"^3.2.29","babel-eslint":"^10.1.0",eslint:"^6.8.0","eslint-plugin-vue":"^7.20.0"},it="./src/index.js",st={type:"git",url:"git+https://github.com/acccccccb/vue-img-cutter.git"},lt=["image","crop","cutter","vue","裁剪"],rt="Apache2.0",at={url:"https://github.com/acccccccb/vue-img-cutter/issues"},ht="https://ihtmlcss.com/demo/dist/#/croptool",nt={root:!0,env:{node:!0},extends:["plugin:vue/vue3-essential","eslint:recommended"],parserOptions:{parser:"babel-eslint"},rules:{}},dt=["> 1%","last 2 versions","not dead"],gt={name:J,version:Q,description:Z,author:$,private:!1,scripts:tt,dependencies:et,devDependencies:ot,main:it,repository:st,keywords:lt,license:rt,bugs:at,homepage:ht,eslintConfig:nt,browserslist:dt},mt={name:"ImgCutter",props:{crossOrigin:{type:Boolean,default:!1,required:!1},crossOriginHeader:{type:String,default:"*",required:!1},label:{type:String,default:"选择图片",required:!1},isModal:{type:Boolean,default:!0,required:!1},lockScroll:{type:Boolean,default:!0,required:!1},showChooseBtn:{type:Boolean,default:!0,required:!1},boxWidth:{type:Number,default:800,required:!1},boxHeight:{type:Number,default:400,required:!1},cutWidth:{type:Number,default:200,required:!1},cutHeight:{type:Number,default:200,required:!1},rate:{type:String,default:null,required:!1},tool:{type:Boolean,default:!0,required:!1},toolBgc:{type:String,default:"#fff",required:!1},imgMove:{type:Boolean,default:!0,required:!1},sizeChange:{type:Boolean,default:!0,required:!1},originalGraph:{type:Boolean,default:!1,required:!1},moveAble:{type:Boolean,default:!0,required:!1},previewMode:{type:Boolean,default:!0,required:!1},CuttingOriginal:{type:Boolean,default:!1,required:!1},WatermarkText:{type:String,default:"",required:!1},WatermarkTextFont:{type:String,default:"12px Sans-serif",required:!1},WatermarkTextColor:{type:String,default:"#fff",required:!1},WatermarkTextX:{type:Number,default:.95,required:!1},WatermarkTextY:{type:Number,default:.95,required:!1},smallToUpload:{type:Boolean,default:!1,required:!1},saveCutPosition:{type:Boolean,default:!1,required:!1},scaleAble:{type:Boolean,default:!0,required:!1},index:{default:null,required:!1},fileType:{default:"png",required:!1,type:String},toolBoxOverflow:{type:Boolean,default:!0,required:!1},DoNotDisplayCopyright:{type:Boolean,default:!1,required:!1},quality:{type:Number,default:1,required:!1},accept:{type:String,default:"image/gif, image/jpeg ,image/png",required:!1}},model:["label","boxWidth","boxHeight","rate","tool","DoNotDisplayCopyright"],data(){let i,t;return i=this.boxWidth/2,t=this.boxHeight/2,{version:"",visible:!1,fileName:"",cutImageObj:null,onPrintImgTimmer:null,toolBoxPosition:{x:0,y:0},drawImg:{img:null,sx:0,sy:0,swidth:0,sheight:0,x:0,y:0,width:0,height:0},toolBox:{disable:!0,width:i,height:t,x:0,y:0,boxMove:{start:{x:0,y:0},moveTo:{x:0,y:0}}},dropImg:{active:!1,pageX:0,pageY:0,params:{}},rotateImg:{angle:0},rotateControl:{active:!1,start:{x:0,y:0},position:100},scaleImg:{rate:0,params:{}},controlBox:{disable:!0,btnName:"",start:{x:0,y:0,width:0,height:0}},selectBox:!1,selectBoxColor:"rgba(0,0,0,0.6)",isFlipHorizontal:!1,isFlipVertically:!1}},mounted(){this.version=gt.version,this.isModal===!1&&(this.visible=!0,this.$nextTick(()=>{this.$refs.toolBox&&(this.$refs.toolBox.onmousewheel=this.scaleImgWheel,this.$refs.toolBox.addEventListener("DOMMouseScroll",this.scaleImgWheel))}))},methods:{handleOpen(i){let t=e=>{if(this.$refs.toolBox&&(this.$refs.toolBox.onmousewheel=this.scaleImgWheel,this.$refs.toolBox.addEventListener("DOMMouseScroll",this.scaleImgWheel)),this.isModal===!0){this.lockScroll===!0&&(document.body.style.overflowY="hidden");let l=this.$refs.dialogMainModalRef.offsetHeight+200,r=window.innerHeight,o=this.$refs.mask;l>r?o.style.overflowY="scroll":o.style.overflowY="hidden"}e&&typeof e=="function"&&e()};if(i&&typeof i=="object"&&i.src)if(i.name){let e=new Image;this.crossOrigin===!0&&(e.crossOrigin=this.crossOriginHeader),e.name=i.name,e.style.position="fixed",e.style.top="-5000px",e.style.opacity=0,e.onerror=l=>{console.error("图片加载失败"),this.$emit("error",{index:this.index,event:l,msg:"图片加载失败"}),this.clearCutImageObj()},e.onload=()=>{if(e.complete===!0)this.visible=!0,this.$nextTick(()=>{t(()=>{this.importImgToCanv(e)})});else throw new Error("图片加载失败")},e.src=i.src,this.cutImageObj=e,document.body.appendChild(e),this.$emit("onChooseImg",i,this.index)}else throw new Error("传入参数必须包含：src,name");else this.visible=!0,this.$nextTick(()=>{t()})},handleClose(){this.clearAll(),this.isModal===!0&&(this.lockScroll===!0&&(document.body.style.overflowY="scroll"),this.$nextTick(()=>{this.visible=!1}))},chooseImg(){this.$refs.inputFile.click()},importImgToCanv(i){let t=i.height,e=i.width,l=this.boxWidth,r=this.boxHeight,o,s={...this.drawImg};this.fileName=i.name,s.img=i,this.scaleImg.rate=e/t,t<r&&e<l?(o=1,s.x=(l-e)/2,s.y=(r-t)/2):e/t<=l/r?(o=r/t,s.x=(l-e*o)/2):(o=l/e,s.y=(r-t*o)/2),s.swidth=e,s.sheight=t,s.width=e*o,s.height=t*o,s.x=(l-s.width)/2,s.y=(r-s.height)/2,this.drawImg=s,this.printImg(),this.putToolBox()},putImgToCanv(i){let t;if(i.target.files)t=i.target.files[0]||null;else return console.error("IE9及以下需要自己传入image对象"),!1;if(t){this.fileName=t.name;let e=new FileReader;e.readAsDataURL(t),e.onload=l=>{let r=l.target.result,o=document.createElement("img");o.src=r;let s=setInterval(()=>{if(e.readyState===2){if(clearInterval(s),!this.sizeChange&&this.smallToUpload&&o.width<=this.cutWidth&&o.height<=this.cutHeight){this.handleClose(),t.name=this.changeFileName(t.name,this.fileType),this.$emit("cutDown",{filename:this.changeFileName(t.name,this.fileType),file:t,index:this.index});return}let h=o.height,d=o.width,n=this.boxWidth,c=this.boxHeight,g,w={...this.drawImg};w.img=o,this.scaleImg.rate=d/h,h<c&&d<n?(g=1,w.x=(n-d)/2,w.y=(c-h)/2):d/h<=n/c?(g=c/h,w.x=(n-d*g)/2):(g=n/d,w.y=(c-h*g)/2),w.swidth=d,w.sheight=h,w.width=d*g,w.height=h*g,w.x=(n-w.width)/2,w.y=(c-w.height)/2,this.drawImg=w,this.printImg(),this.putToolBox()}},200)},this.$emit("onChooseImg",t,this.index)}},putToolBox(){(this.toolBox.width===this.boxWidth/2||this.toolBox.height===this.boxHeight/2||this.saveCutPosition===!1)&&(this.toolBox.width=this.cutWidth>this.boxWidth?this.boxWidth:this.cutWidth,this.toolBox.height=this.cutHeight>this.boxHeight?this.boxHeight:this.cutHeight),(this.toolBox.x===0&&this.toolBox.y===0||this.saveCutPosition===!1)&&(this.toolBox.x=this.boxWidth/2-this.toolBox.width/2,this.toolBox.y=this.boxHeight/2-this.toolBox.height/2),this.checkToolBoxOverflow().then(()=>{this.printImg()}),this.drawControlBox(this.toolBox.width,this.toolBox.height,this.toolBox.x,this.toolBox.y)},checkToolBoxOverflow(){return new Promise(i=>{if(!this.toolBoxOverflow){if(this.drawImg.width<this.toolBox.width||this.drawImg.height<this.toolBox.height){const t=this.drawImg.width/this.drawImg.height;this.drawImg.width<this.toolBox.width&&(this.drawImg.width=this.toolBox.width,this.drawImg.height=this.drawImg.width/t),this.drawImg.height<this.toolBox.height&&(this.drawImg.height=this.toolBox.height,this.drawImg.width=this.drawImg.height*t),this.drawImg.x=(this.boxWidth-this.drawImg.width)/2,this.drawImg.y=(this.boxHeight-this.drawImg.height)/2}console.log("this.drawImg.y > this.toolBox.y",this.drawImg.y+this.drawImg.height,this.toolBox.y+this.toolBox.height),this.drawImg.x>this.toolBox.x&&(this.drawImg.x=this.toolBox.x),this.drawImg.x+this.drawImg.width<this.toolBox.x+this.toolBox.width&&(this.drawImg.x=this.toolBox.x+this.toolBox.width-this.drawImg.width),this.drawImg.y>this.toolBox.y&&(this.drawImg.y=this.toolBox.y),this.drawImg.y+this.drawImg.height<this.toolBox.y+this.toolBox.height&&(this.drawImg.y=this.toolBox.y+this.toolBox.height-this.drawImg.height)}i()})},isSupportFileApi(){return!!(window.File&&window.FileList&&window.FileReader&&window.Blob&&navigator.userAgent.indexOf("Edge")===-1&&navigator.userAgent.indexOf("MSIE")===-1&&navigator.userAgent.indexOf("Trident")===-1)},dataURLtoFile(i,t){let e=i.split(","),l=e[0].match(/:(.*?);/)[1],r=atob(e[1]),o=r.length,s=new Uint8Array(o);for(;o--;)s[o]=r.charCodeAt(o);return this.isSupportFileApi()?new File([s],t,{type:l}):"不支持File对象"},clearAll(){let i=this,t=i.$refs.canvas;t.getContext("2d").clearRect(0,0,t.width,t.height);let l=i.$refs.canvasSelectBox;l.getContext("2d").clearRect(0,0,l.width,l.height);let o=i.drawImg.sx,s=i.drawImg.sy;this.drawImg={img:null,sx:o,sy:s,swidth:0,sheight:0,x:0,y:0,width:0,height:0},this.isFlipHorizontal=!1,this.isFlipVertically=!1,this.$refs.inputFile.value="",this.rotateImg.angle=0,this.drawImg.img=null,this.turnReset(),this.clearCutImageObj(),this.$emit("onClearAll",this.index)},clearCutImageObj(){this.cutImageObj!==null&&this.cutImageObj!==void 0&&(typeof this.cutImageObj.remove=="function"?this.cutImageObj.remove():this.cutImageObj.removeNode()),this.cutImageObj=null},drawControlBox(i,t,e,l){this.toolBoxOverflow||(i<1&&(i=1),t<1&&(t=1),i>this.drawImg.width&&(i=this.drawImg.width),t>this.drawImg.height&&(t=this.drawImg.height),e<this.drawImg.x&&(e=this.drawImg.x),l<this.drawImg.y&&(l=this.drawImg.y),e>this.drawImg.x+this.drawImg.width-i&&(e=this.drawImg.x+this.drawImg.width-i),l>this.drawImg.y+this.drawImg.height-t&&(l=this.drawImg.y+this.drawImg.height-t)),i>this.boxWidth&&(i=this.boxWidth),t>this.boxHeight&&(t=this.boxHeight),e<0&&(e=0),l<0&&(l=0);let r=this.$refs.toolBoxControl,o=this.$refs.canvasSelectBox,s=o.getContext("2d");s.fillStyle=this.selectBoxColor,s.clearRect(0,0,o.width,o.height),s.fillRect(0,0,o.width,o.height);let h,d;if(this.rate&&this.rate!==""){let n=this.rate.split(":")[0]/this.rate.split(":")[1];n>=1?(h=i,d=i/n,d+l>this.drawImg.y+this.drawImg.height&&(d=this.drawImg.y+this.drawImg.height-l,h=d*n)):(h=t*n,d=t)}else h=i,d=t;this.toolBox.width=Math.abs(h),this.toolBox.height=Math.abs(d),r.style.width=Math.abs(h)+"px",r.style.height=Math.abs(d)+"px",this.toolBox.boxMove.moveTo.x=e,this.toolBox.boxMove.moveTo.y=l,h<0&&(e=e+h),d<0&&(l=l+d),e+this.toolBox.width>this.boxWidth&&(e=this.boxWidth-this.toolBox.width),e<0&&(e=0),l+this.toolBox.height>this.boxHeight&&(l=this.boxHeight-this.toolBox.height),l<0&&(l=0),this.toolBoxPosition.x=e,this.toolBoxPosition.y=l,r.style.left=e+"px",r.style.top=l+"px",s.clearRect(e,l,Math.abs(h),Math.abs(d)),this.onPrintImgTimmer&&clearTimeout(this.onPrintImgTimmer),this.onPrintImgTimmer=setTimeout(()=>{this.cropPicture(!0)},100)},resetToolBox(){this.toolBox.width<0&&(this.toolBox.boxMove.moveTo.x=this.toolBox.x-this.toolBox.width),this.toolBox.height<0&&(this.toolBox.boxMove.moveTo.y=this.toolBox.y-this.toolBox.height),this.toolBox.width=Math.abs(this.toolBox.width),this.toolBox.height=Math.abs(this.toolBox.height)},toolBoxMouseDown(i){let t=this.$refs.toolBoxControl;this.toolBox.x=parseInt(t.style.left.split("px")[0]),this.toolBox.y=parseInt(t.style.top.split("px")[0]),this.toolBox.disable=!1,this.dropImg.active=!1,this.toolBox.boxMove.start={x:i.pageX,y:i.pageY}},toolBoxMouseMove(i){if(this.dropImg.active&&this.dropImgMove(i),this.toolBox.disable===!1&&this.moveAble===!0){let t=i.pageX-this.toolBox.boxMove.start.x,e=i.pageY-this.toolBox.boxMove.start.y,l=this.toolBox.x+t,r=this.toolBox.y+e;this.drawControlBox(this.toolBox.width,this.toolBox.height,l,r)}},toolBoxMouseLeave(){this.toolBox.disable=!0,this.onPrintImgTimmer&&clearTimeout(this.onPrintImgTimmer),this.onPrintImgTimmer=setTimeout(()=>{this.cropPicture(!0)},100),this.resetToolBox()},toolBoxMouseUp(){this.toolBox.x=parseInt(this.toolBoxPosition.x),this.toolBox.y=parseInt(this.toolBoxPosition.y),this.toolBox.disable=!0,this.dropImg.active=!1,this.resetToolBox()},printImg(){if(this.drawImg.img){let i=this.$refs.canvas,t=i.getContext("2d");t.font="18px bold 黑体",t.fillStyle="#ff0",t.textAlign="center",t.textBaseline="middle",t.save(),t.clearRect(0,0,i.width,i.height),t.translate(this.drawImg.x+this.drawImg.width/2,this.drawImg.y+this.drawImg.height/2),t.rotate(this.rotateImg.angle*Math.PI/180),t.translate(-(this.drawImg.x+this.drawImg.width/2),-(this.drawImg.y+this.drawImg.height/2)),t.translate(this.drawImg.x,this.drawImg.y),t.scale(this.isFlipHorizontal?-1:1,this.isFlipVertically?-1:1),t.drawImage(this.drawImg.img,this.drawImg.sx,this.drawImg.sy,this.drawImg.swidth,this.drawImg.sheight,this.isFlipHorizontal?-this.drawImg.width:0,this.isFlipVertically?-this.drawImg.height:0,this.drawImg.width,this.drawImg.height),t.translate(-this.drawImg.x,this.drawImg.y),t.restore(),this.onPrintImgTimmer&&clearTimeout(this.onPrintImgTimmer),this.onPrintImgTimmer=setTimeout(()=>{this.cropPicture(!0)},100)}},dropImgOn(i){this.imgMove===!0&&(this.dropImg.active=!0,this.dropImg.params={...this.drawImg},this.dropImg.pageX=i.pageX,this.dropImg.pageY=i.pageY)},dropImgOff(){this.dropImg.active=!1,this.onPrintImgTimmer&&clearTimeout(this.onPrintImgTimmer),this.onPrintImgTimmer=setTimeout(()=>{this.cropPicture(!0)},100)},dropImgMove(i){if(this.dropImg.active&&this.drawImg.img){let t={...this.drawImg};t.x=this.dropImg.params.x-(this.dropImg.pageX-i.pageX),t.y=this.dropImg.params.y-(this.dropImg.pageY-i.pageY),this.toolBoxOverflow||(t.x>this.toolBox.x&&(t.x=this.toolBox.x),t.x<this.toolBox.x+this.toolBox.width-t.width&&(t.x=this.toolBox.x+this.toolBox.width-t.width),t.y>this.toolBox.y&&(t.y=this.toolBox.y),t.y<this.toolBox.y+this.toolBox.height-t.height&&(t.y=this.toolBox.y+this.toolBox.height-t.height)),this.drawImg=t,this.printImg(),i.stopPropagation()}},scaleReset(){this.drawImg.width=this.drawImg.swidth,this.drawImg.height=this.drawImg.sheight,this.printImg()},scaleImgWheel(i){if(this.drawImg.img&&this.scaleAble===!0){let t,e=i||window.event;e.wheelDelta?t=-(e.wheelDelta/40):e.detail&&(t=e.detail);let l=50;this.drawImg.x=this.drawImg.width-t*9>l?this.drawImg.x+t*3:this.drawImg.x,this.drawImg.y=this.drawImg.width-t*9>l?this.drawImg.y+t*3:this.drawImg.y,this.drawImg.width=this.drawImg.width-t*9>l?this.drawImg.width-t*9:l,this.drawImg.height=this.drawImg.width/this.scaleImg.rate,this.checkToolBoxOverflow().then(()=>{this.printImg(),this.onPrintImgTimmer&&clearTimeout(this.onPrintImgTimmer),this.onPrintImgTimmer=setTimeout(()=>{this.cropPicture(!0)},100)})}return i.preventDefault(),i.returnValue=!1,!1},flipHorizontal(){this.drawImg.img&&(this.isFlipHorizontal==!1?this.isFlipHorizontal=!0:this.isFlipHorizontal=!1,this.printImg())},flipVertically(){this.drawImg.img&&(this.isFlipVertically==!1?this.isFlipVertically=!0:this.isFlipVertically=!1,this.printImg())},turnImg(i){let e=this.rotateImg.angle+i;e>=-180&&e<=180&&(this.rotateImg.angle=e,this.rotateControl.position=e/180*100+100,this.printImg("rotate"))},turnReset(){this.rotateImg.angle=0,this.rotateControl.position=100,this.printImg("rotate")},controlBtnMouseDown(i,t){this.controlBox.disable=!1,this.controlBox.btnName=t,this.controlBox.start.x=i.clientX,this.controlBox.start.y=i.clientY,this.controlBox.start.width=this.toolBox.width,this.controlBox.start.height=this.toolBox.height,i.stopPropagation()},controlBtnMouseUp(i){this.controlBox.disable=!0,this.dropImgOff(),this.resetToolBox(),this.toolBoxMouseUp(),i.stopPropagation()},controlBtnMouseMove(i){if(this.controlBox.disable===!1){let t=i.clientX-this.controlBox.start.x,e=i.clientY-this.controlBox.start.y,l,r;if(this.controlBox.btnName=="leftUp"){if(!this.rate)l=this.toolBox.x+t,r=this.toolBox.y+e;else{let o=this.rate.split(":")[0]/this.rate.split(":")[1];o>=1?(l=this.toolBox.x+t,r=this.toolBox.y+t/o):(l=this.toolBox.x+e*o,r=this.toolBox.y+e)}this.toolBox.width=this.controlBox.start.width-t,this.toolBox.height=this.controlBox.start.height-e}if(this.controlBox.btnName=="rightUp"){if(!this.rate)l=this.toolBox.x,r=this.toolBox.y+e;else{let o=this.rate.split(":")[0]/this.rate.split(":")[1];o>=1?(l=this.toolBox.x,r=this.toolBox.y-t/o):(l=this.toolBox.x,r=this.toolBox.y+e)}this.toolBox.width=this.controlBox.start.width+t,this.toolBox.height=this.controlBox.start.height-e}if(this.controlBox.btnName=="rightDown"&&(l=this.toolBox.x,r=this.toolBox.y,this.toolBox.width=this.controlBox.start.width+t,this.toolBox.height=this.controlBox.start.height+e),this.controlBox.btnName=="leftDown"){if(!this.rate)l=this.toolBox.x+t,r=this.toolBox.y;else{let o=this.rate.split(":")[0]/this.rate.split(":")[1];o>=1?(l=this.toolBox.x+t,r=this.toolBox.y):(l=this.toolBox.x+-e*o,r=this.toolBox.y)}this.toolBox.width=this.controlBox.start.width-t,this.toolBox.height=this.controlBox.start.height+e}this.controlBox.btnName=="topCenter"&&(l=this.toolBox.x,r=this.toolBox.y+e,this.toolBox.width=this.controlBox.start.width,this.toolBox.height=this.controlBox.start.height-e),this.controlBox.btnName=="downCenter"&&(l=this.toolBox.x,r=this.toolBox.y,this.toolBox.width=this.controlBox.start.width,this.toolBox.height=this.controlBox.start.height+e),this.controlBox.btnName=="leftCenter"&&(l=this.toolBox.x+t,r=this.toolBox.y,this.toolBox.width=this.controlBox.start.width-t,this.toolBox.height=this.controlBox.start.height),this.controlBox.btnName=="rightCenter"&&(l=this.toolBox.x,r=this.toolBox.y,this.toolBox.width=this.controlBox.start.width+t,this.toolBox.height=this.controlBox.start.height),this.drawControlBox(this.toolBox.width,this.toolBox.height,l,r)}i.stopPropagation()},changeFileName(i,t){let e=i.lastIndexOf(".");return i.substr(0,e+1)+(t==="jpeg"?"jpg":t)},cropPicture(i){let t=this;if(this.drawImg.img){let e=this.$refs.canvas;if(this.WatermarkText&&!i){let r=e.getContext("2d");r.font=this.WatermarkTextFont,r.fillStyle=this.WatermarkTextColor,r.textAlign="right",r.textBaseline="bottom",r.fillText(this.WatermarkText,this.toolBox.x+this.toolBox.width*this.WatermarkTextX,this.toolBox.y+this.toolBox.height*this.WatermarkTextY)}let l=new Image;this.crossOrigin===!0&&(l.crossOrigin=this.crossOriginHeader),l.src=e.toDataURL(`image/${this.fileType}`,t.quality),HTMLCanvasElement.prototype.toBlob||Object.defineProperty(HTMLCanvasElement.prototype,"toBlob",{value:(r,o,s)=>{window.atob?setTimeout(()=>{let h=atob(e.toDataURL(o,s).split(",")[1]),d=h.length,n=new Uint8Array(d),c;for(let g=0;g<d;g++)n[g]=h.charCodeAt(g);try{c=new Blob([n],{type:`image/${t.fileType}`})}catch(g){if(window.BlobBuilder=window.BlobBuilder||window.WebKitBlobBuilder||window.MozBlobBuilder||window.MSBlobBuilder,g.name=="TypeError"&&window.BlobBuilder){const w=window.BlobBuilder;let I=new w;I.append(n.buffer),c=I.getBlob(`image/${t.fileType}`)}g.name=="InvalidStateError"&&(c=new Blob([n.buffer],{type:`image/${t.fileType}`}))}r(c)},200):r(!1,{type:`image/${t.fileType}`})}}),e.toBlob(r=>{if(r){let o=new FileReader;o.readAsDataURL(r),o.onload=()=>{let s=setInterval(()=>{if(o.readyState==2){clearInterval(s);let h=document.createElement("canvas"),d=h.getContext("2d");if(t.originalGraph==!0){let n=t.drawImg.width/t.drawImg.swidth,c=t.toolBox.width/n,g=t.toolBox.height/n;h.width=c,h.height=g;let w=(t.toolBox.x-t.drawImg.x)/n,I=(t.toolBox.y-t.drawImg.y)/n,R=t.drawImg.swidth,A=t.drawImg.sheight;d.translate(-w,-I),d.drawImage(t.drawImg.img,0,0,R,A)}else{h.width=t.toolBox.width,h.height=t.toolBox.height;let n=t.toolBox;if(t.rate){let c=t.rate.split(":")[0]/t.rate.split(":")[1],g=t.rate.split(":")[0],w=t.rate.split(":")[1];g>=w?d.drawImage(l,n.x,n.y,n.width,n.width*c,0,0,n.width,n.width*c):d.drawImage(l,n.x,n.y,n.width,n.width/c,0,0,n.width,n.width/c)}else d.drawImage(l,n.x,n.y,n.width,n.height,0,0,n.width,n.height)}h.toBlob(n=>{let c=t.changeFileName(t.fileName,t.fileType);i?t.previewMode&&t.$emit("onPrintImg",{index:t.index,fileName:c,blob:n,file:t.dataURLtoFile(h.toDataURL(`image/${t.fileType}`,t.quality),c),dataURL:h.toDataURL(`image/${t.fileType}`,t.quality)}):(t.handleClose(),t.$emit("cutDown",{index:t.index,fileName:c,blob:n,file:t.dataURLtoFile(h.toDataURL(`image/${t.fileType}`,t.quality),c),dataURL:h.toDataURL(`image/${t.fileType}`,t.quality)}))},`image/${t.fileType}`,t.quality)}},200)}}else{let o=document.createElement("canvas");o.width=t.toolBox.width,o.height=t.toolBox.height;let s=o.getContext("2d"),h=t.toolBox;if(t.rate){let n=t.rate.split(":")[0]/t.rate.split(":")[1];s.drawImage(l,h.x,h.y,h.width,h.width*n,0,0,h.width,h.width*n)}else s.drawImage(l,h.x,h.y,h.width,h.height,0,0,h.width,h.height);let d=t.changeFileName(t.fileName,t.fileType);i?t.$emit("onPrintImg",{fileName:d,dataURL:o.toDataURL(`image/${t.fileType}`,t.quality)}):(t.handleClose(),t.$emit("cutDown",{fileName:d,dataURL:o.toDataURL(`image/${t.fileType}`,t.quality)}))}}),`${t.fileType}`,t.quality}else i||(console.warn("No picture selected"),t.$emit("error",{err:1,msg:"No picture selected"}))},scrollBarControlMove(i){if(this.rotateControl.active){let t=i.pageX-this.rotateControl.start.x,e=this.rotateControl.start.position+t;e<=0&&(e=0),e>=200&&(e=200),this.rotateControl.position=e,this.rotateImg.angle=(e-100)/100*180,this.printImg()}},scrollBarControlOn(i){this.rotateControl.active=!0,this.rotateControl.start.x=i.pageX,this.rotateControl.start.y=i.pageY,this.rotateControl.start.position=this.rotateControl.position},scrollBarControlOff(){this.rotateControl.active=!1}},computed:{showToolBoxWidth(){let i;return this.originalGraph?i=this.toolBox.width/(this.drawImg.width/this.drawImg.swidth):i=this.toolBox.width,Number(i).toFixed(0)},showToolBoxHeight(){let i;return this.originalGraph?i=this.toolBox.height/(this.drawImg.width/this.drawImg.swidth):i=this.toolBox.height,Number(i).toFixed(0)},showToolBoxX(){let i;return i=this.toolBoxPosition.x,Number(i).toFixed(0)},showToolBoxY(){let i;return i=this.toolBoxPosition.y,Number(i).toFixed(0)}}},b=i=>(P("data-v-4f2772ea"),i=i(),q(),i),ut={class:"toolMain"},xt={key:0,class:"tool-title"},ct={class:"tips"},ft={key:0,class:"dockBtn"},wt={key:4,class:"dockBtnScrollBar"},Bt={class:"toolBoxControlBox"},vt={class:"controlBox"},It=b(()=>a("div",{class:"controlBoxInnerLine controlBoxInnerLineTop"},null,-1)),pt=b(()=>a("div",{class:"controlBoxInnerLine controlBoxInnerLineBottom"},null,-1)),yt=b(()=>a("div",{class:"controlBoxInnerLine controlBoxInnerLineLeft"},null,-1)),bt=b(()=>a("div",{class:"controlBoxInnerLine controlBoxInnerLineRight"},null,-1)),Ct={class:"selectArea"},Mt=b(()=>a("div",{class:"toolBoxControlLine toolBoxControlLineItem-1"},null,-1)),Tt=b(()=>a("div",{class:"toolBoxControlLine toolBoxControlLineItem-2"},null,-1)),kt=b(()=>a("div",{class:"toolBoxControlLine toolBoxControlLineItem-3"},null,-1)),_t=b(()=>a("div",{class:"toolBoxControlLine toolBoxControlLineItem-4"},null,-1)),Ot={class:"copyright"},Dt={key:0,target:"_blank",href:"https://github.com/acccccccb/vue-img-cutter",rel:"nofollow"},Ut=["width","height"],Nt=["width","height"],Ht={class:"i-dialog-footer",style:{height:"40px"}},Wt=["accept"],St={key:0,class:"btn btn-primary btn-primary-plain"},Ft={class:"btn-group fr"},Pt=b(()=>a("button",{type:"button",class:"btn btn-default"},"取消",-1)),qt=["disabled"],Lt=b(()=>a("div",{style:{clear:"both"}},null,-1));function zt(i,t,e,l,r,o){return m(),x("div",null,[e.showChooseBtn===!0&&e.isModal===!0?(m(),x("div",{key:0,onClick:t[0]||(t[0]=(...s)=>o.handleOpen&&o.handleOpen(...s))},[p(i.$slots,"openImgCutter",{},void 0,!0),p(i.$slots,"open",{},void 0,!0)])):f("",!0),!i.$slots.openImgCutter&&!i.$slots.open&&e.isModal===!0?(m(),x("button",{key:1,type:"button",class:"btn btn-primary",onClick:t[1]||(t[1]=(...s)=>o.handleOpen&&o.handleOpen(...s))},B(e.label),1)):f("",!0),y(N,{name:"fade"},{default:T(()=>[r.visible?(m(),x("div",{key:0,class:k(e.isModal===!0?"mask vue-img-cutter":""),ref:"mask"},[r.visible?(m(),x("div",{key:0,class:k(e.isModal===!0?"dialogBoxModal":"dialogBox")},[y(N,{name:"fade","enter-class":"fade-in-enter","enter-active-class":"fade-in-active","leave-class":"fade-out-enter","leave-active-class":"fade-out-active"},{default:T(()=>[a("div",{ref:"dialogMainModalRef",class:k(e.isModal===!0?"dialogMainModal":"dialogMain"),style:M("width:"+(e.isModal===!0?e.boxWidth+32:e.boxWidth)+"px")},[a("div",ut,[e.isModal===!0?(m(),x("div",xt,[v(" 图片裁剪 "),a("span",{class:"closeIcon",onClick:t[2]||(t[2]=(...s)=>o.handleClose&&o.handleClose(...s))},"×")])):f("",!0),a("div",{ref:"toolBox",style:M("height:"+e.boxHeight+"px;width:"+e.boxWidth+"px"),onMousemove:t[30]||(t[30]=(...s)=>o.controlBtnMouseMove&&o.controlBtnMouseMove(...s)),onMouseup:t[31]||(t[31]=(...s)=>o.controlBtnMouseUp&&o.controlBtnMouseUp(...s)),onMouseleave:t[32]||(t[32]=(...s)=>o.controlBtnMouseUp&&o.controlBtnMouseUp(...s)),class:"toolBox"},[_(a("div",ct,[a("div",{class:"btn btn-warning btn-xs",onClick:t[3]||(t[3]=(...s)=>o.chooseImg&&o.chooseImg(...s))},B(e.label),1)],512),[[O,!r.drawImg.img&&e.showChooseBtn===!0]]),e.tool==!0?_((m(),x("div",{key:0,class:"dockMain",style:M("background:"+e.toolBgc),onMouseenter:t[14]||(t[14]=(...s)=>o.dropImgOff&&o.dropImgOff(...s))},[e.rate?(m(),x("div",ft,[p(i.$slots,"ratio",{},()=>[v(" Ratio: ")],!0),v(" "+B(e.rate),1)])):f("",!0),a("div",{class:"dockBtn",onClick:t[4]||(t[4]=(...s)=>o.scaleReset&&o.scaleReset(...s))},[p(i.$slots,"scaleReset",{},()=>[v(" Scale: ")],!0),v(" "+B(r.drawImg.swidth>0?(r.drawImg.width/r.drawImg.swidth).toFixed(2):"-"),1)]),e.originalGraph===!1?(m(),x("div",{key:1,onClick:t[5]||(t[5]=s=>o.turnImg(-90)),class:"dockBtn"},[p(i.$slots,"turnLeft",{},()=>[v(" ↳ ")],!0)])):f("",!0),e.originalGraph===!1?(m(),x("div",{key:2,onClick:t[6]||(t[6]=s=>o.turnImg(90)),class:"dockBtn"},[p(i.$slots,"turnRight",{},()=>[v(" ↲ ")],!0)])):f("",!0),e.originalGraph===!1?(m(),x("div",{key:3,onClick:t[7]||(t[7]=s=>o.turnReset()),class:"dockBtn"},[p(i.$slots,"reset",{},()=>[v(" ↻ ")],!0)])):f("",!0),e.originalGraph===!1?(m(),x("div",wt,[a("div",{ref:"dockBtnScrollControl",onMousemove:t[8]||(t[8]=(...s)=>o.scrollBarControlMove&&o.scrollBarControlMove(...s)),onMousedown:t[9]||(t[9]=(...s)=>o.scrollBarControlOn&&o.scrollBarControlOn(...s)),onMouseleave:t[10]||(t[10]=(...s)=>o.scrollBarControlOff&&o.scrollBarControlOff(...s)),onMouseup:t[11]||(t[11]=(...s)=>o.scrollBarControlOff&&o.scrollBarControlOff(...s)),style:M("left:"+r.rotateControl.position+"px"),class:"scrollBarControl"},null,36),r.rotateControl.active==!0?(m(),x("div",{key:0,class:"scrollBarText",style:M("left:"+r.rotateControl.position+"px")},B(r.rotateImg.angle.toFixed(0)+"°"),5)):f("",!0)])):f("",!0),e.originalGraph===!1?(m(),x("div",{key:5,onClick:t[12]||(t[12]=(...s)=>o.flipHorizontal&&o.flipHorizontal(...s)),class:"dockBtn"},[p(i.$slots,"flipHorizontal",{},()=>[v(" ⇆ ")],!0)])):f("",!0),e.originalGraph===!1?(m(),x("div",{key:6,onClick:t[13]||(t[13]=(...s)=>o.flipVertically&&o.flipVertically(...s)),class:"dockBtn"},[p(i.$slots,"flipVertically",{},()=>[v(" ⇅ ")],!0)])):f("",!0)],36)),[[O,r.drawImg.img&&r.dropImg.active!==!0&&r.controlBox.disable==!0&&r.toolBox.disable==!0]]):f("",!0),_(a("div",{ref:"toolBoxControl",onMousedown:t[23]||(t[23]=(...s)=>o.toolBoxMouseDown&&o.toolBoxMouseDown(...s)),onMouseup:t[24]||(t[24]=(...s)=>o.toolBoxMouseUp&&o.toolBoxMouseUp(...s)),onMousemove:t[25]||(t[25]=(...s)=>o.toolBoxMouseMove&&o.toolBoxMouseMove(...s)),onMouseleave:t[26]||(t[26]=(...s)=>o.toolBoxMouseLeave&&o.toolBoxMouseLeave(...s)),class:"toolBoxControl",style:M({pointerEvents:e.moveAble?"auto":"none"})},[a("div",Bt,[a("div",vt,[It,pt,yt,bt,a("div",Ct," 宽:"+B(o.showToolBoxWidth)+" 高:"+B(o.showToolBoxHeight)+" (x:"+B(o.showToolBoxX)+",y:"+B(o.showToolBoxY)+") ",1),e.sizeChange===!0?(m(),x("div",{key:0,"data-name":"leftUp",onMousedown:t[15]||(t[15]=s=>o.controlBtnMouseDown(s,"leftUp")),class:"leftUp controlBtn"},null,32)):f("",!0),e.sizeChange===!0?(m(),x("div",{key:1,"data-name":"leftDown",onMousedown:t[16]||(t[16]=s=>o.controlBtnMouseDown(s,"leftDown")),class:"leftDown controlBtn"},null,32)):f("",!0),e.sizeChange===!0?(m(),x("div",{key:2,"data-name":"rightUp",onMousedown:t[17]||(t[17]=s=>o.controlBtnMouseDown(s,"rightUp")),class:"rightUp controlBtn"},null,32)):f("",!0),e.sizeChange===!0?(m(),x("div",{key:3,"data-name":"rightDown",onMousedown:t[18]||(t[18]=s=>o.controlBtnMouseDown(s,"rightDown")),class:"rightDown controlBtn"},null,32)):f("",!0),e.sizeChange===!0&&!e.rate&&r.toolBox.width>20?(m(),x("div",{key:4,"data-name":"topCenter",onMousedown:t[19]||(t[19]=s=>o.controlBtnMouseDown(s,"topCenter")),class:"topCenter controlBtn"},null,32)):f("",!0),e.sizeChange===!0&&!e.rate&&r.toolBox.width>20?(m(),x("div",{key:5,"data-name":"downCenter",onMousedown:t[20]||(t[20]=s=>o.controlBtnMouseDown(s,"downCenter")),class:"downCenter controlBtn"},null,32)):f("",!0),e.sizeChange===!0&&!e.rate&&r.toolBox.height>20?(m(),x("div",{key:6,"data-name":"leftCenter",onMousedown:t[21]||(t[21]=s=>o.controlBtnMouseDown(s,"leftCenter")),class:"leftCenter controlBtn"},null,32)):f("",!0),e.sizeChange===!0&&!e.rate&&r.toolBox.height>20?(m(),x("div",{key:7,"data-name":"rightCenter",onMousedown:t[22]||(t[22]=s=>o.controlBtnMouseDown(s,"rightCenter")),class:"rightCenter controlBtn"},null,32)):f("",!0)]),Mt,Tt,kt,_t])],36),[[O,r.drawImg.img!=null]]),a("div",Ot,[e.DoNotDisplayCopyright?f("",!0):(m(),x("a",Dt," vue-img-cutter "+B(r.version),1))]),a("canvas",{class:"canvasSelectBox",ref:"canvasSelectBox",width:e.boxWidth,onMousedown:t[27]||(t[27]=(...s)=>o.dropImgOn&&o.dropImgOn(...s)),onMouseup:t[28]||(t[28]=(...s)=>o.dropImgOff&&o.dropImgOff(...s)),onMousemove:t[29]||(t[29]=(...s)=>o.dropImgMove&&o.dropImgMove(...s)),height:e.boxHeight},null,40,Ut),a("canvas",{class:"canvas",ref:"canvas",width:e.boxWidth,height:e.boxHeight},null,8,Nt)],36)]),a("div",Ht,[a("input",{onChange:t[33]||(t[33]=(...s)=>o.putImgToCanv&&o.putImgToCanv(...s)),ref:"inputFile",type:"file",accept:e.accept,style:{width:"1px",height:"1px",border:"none",opacity:"0"}},null,40,Wt),a("span",{onClick:t[34]||(t[34]=(...s)=>o.chooseImg&&o.chooseImg(...s))},[p(i.$slots,"choose",{},()=>[e.showChooseBtn===!0?(m(),x("div",St,B(e.label),1)):f("",!0)],!0)]),a("div",Ft,[a("span",{onClick:t[35]||(t[35]=(...s)=>o.handleClose&&o.handleClose(...s))},[p(i.$slots,"cancel",{},()=>[Pt],!0)]),a("span",{onClick:t[36]||(t[36]=s=>o.cropPicture(!1))},[p(i.$slots,"confirm",{},()=>[a("button",{type:"button",class:"btn btn-primary",style:{"margin-left":"15px"},disabled:!r.drawImg.img}," 确定 ",8,qt)],!0)])])])],6)]),_:3}),Lt],2)):f("",!0)],2)):f("",!0)]),_:3})])}const Rt=F(mt,[["render",zt],["__scopeId","data-v-4f2772ea"]]),At=L({__name:"ImgCutter",emits:["getUrl"],setup(i,{emit:t}){let e=t,l=r=>{let o=new FormData,{file:s}=r;console.log(r),o.append("file",s),Y().then(h=>{e("getUrl",h)})};return(r,o)=>(m(),z(u(Rt),{class:"img-cutter",ref:"imgCutterModal",label:"修改头像","file-type":"jpeg","cross-origin":!0,"tool-bgc":"none","is-modal":!0,"show-choose-btn":!0,"lock-scroll":!0,"box-width":616,"box-height":458,"cut-width":250,"cut-height":250,"size-change":!0,"move-able":!0,"img-move":!0,"original-graph":!1,"watermark-text":"vue-img-cutter","watermark-text-font":"12px Sans-serif","watermark-text-color":"#00ff00","watermark-text-x":.95,"watermark-text-y":.95,"small-to-upload":!0,"save-cut-position":!0,"scale-able":!0,"preview-mode":!0,quality:1,"tool-box-overflow":!0,onCutDown:u(l)},null,8,["onCutDown"]))}}),C=i=>(P("data-v-4330dde2"),i=i(),q(),i),Yt={class:"c-contain"},jt={class:"user-box"},Et=C(()=>a("div",{class:"user-box_header"},"个人信息",-1)),Xt={class:"user-box_content"},Vt={class:"user-box_content-item"},Gt=C(()=>a("div",{class:"item-label"},"头像：",-1)),Kt={class:"item-value user-avatar-box"},Jt=["src"],Qt={class:"edit__info-box"},Zt={class:"edit__info"},$t={class:"user-box_content-item"},te=C(()=>a("div",{class:"item-label"},"用户名：",-1)),ee={class:"item-value"},oe={class:"user-box_content-item"},ie=C(()=>a("div",{class:"item-label"},"真实姓名：",-1)),se={class:"item-value"},le={class:"user-box_content-item"},re=C(()=>a("div",{class:"item-label"},"手机号码：",-1)),ae={class:"item-value"},he={class:"user-box_content-item"},ne=C(()=>a("div",{class:"item-label"},"邮箱：",-1)),de={class:"item-value"},ge={class:"btn__box"},me={class:"user-box_content-item"},ue=C(()=>a("div",{class:"item-label"},"用户名：",-1)),xe={class:"item-value"},ce={class:"user-box_content-item"},fe=C(()=>a("div",{class:"item-label"},"用户姓名：",-1)),we={class:"user-box_content-item"},Be=C(()=>a("div",{class:"item-label"},"手机号码：",-1)),ve={class:"user-box_content-item"},Ie=C(()=>a("div",{class:"item-label"},"邮箱：",-1)),pe={class:"btn__box"},ye=L({__name:"index",setup(i){let t=j(),e=H(()=>t.user),l=E({...e.value}),r=c=>{t.user.avatar=c.imgUrl},o=W(!1),s=W(!1),h=H(()=>K(l.phoneNumber)),d=()=>{s.value=!0},n=c=>{if(c){if(!h.value)return window.$msg.error("请正确输入手机号");o.value=!0,delete l._id,V().then(g=>{if(g.code!=200){o.value=!1;return}o.value=!1,s.value=!1,t.getInfo(),window.$msg.success("修改成功！")})}else s.value=!1};return(c,g)=>{const w=G;return m(),x("div",Yt,[a("div",jt,[Et,a("div",Xt,[a("div",Vt,[Gt,a("div",Kt,[u(e).avatar?(m(),x("img",{key:0,src:u(e).avatar},null,8,Jt)):(m(),z(w,{key:1,name:"avatar",size:"100"}))]),y(At,{onGetUrl:u(r)},null,8,["onGetUrl"])]),y(u(X)),a("div",Qt,[a("div",Zt,[u(s)?(m(),x(S,{key:1},[a("div",me,[ue,a("div",xe,B(u(l).userName),1)]),a("div",ce,[fe,y(u(U),{class:"info-input--width item-value",size:"small",value:u(l).realName,"onUpdate:value":g[0]||(g[0]=I=>u(l).realName=I)},null,8,["value"])]),a("div",we,[Be,y(u(U),{class:"info-input--width item-value",size:"small",value:u(l).phoneNumber,"onUpdate:value":g[1]||(g[1]=I=>u(l).phoneNumber=I)},null,8,["value"])]),a("div",ve,[Ie,y(u(U),{class:"info-input--width item-value",size:"small",value:u(l).email,"onUpdate:value":g[2]||(g[2]=I=>u(l).email=I)},null,8,["value"])]),a("div",pe,[y(u(D),{style:{"margin-right":"20px"},onClick:g[3]||(g[3]=I=>u(n)(!0)),type:"primary",size:"small",loading:u(o)},{default:T(()=>[v("修 改")]),_:1},8,["loading"]),y(u(D),{onClick:g[4]||(g[4]=I=>u(n)(!1)),size:"small",disabled:u(o)},{default:T(()=>[v("取 消")]),_:1},8,["disabled"])])],64)):(m(),x(S,{key:0},[a("div",$t,[te,a("div",ee,B(u(e).userName),1)]),a("div",oe,[ie,a("div",se,B(u(e).realName),1)]),a("div",le,[re,a("div",ae,B(u(e).phoneNumber),1)]),a("div",he,[ne,a("div",de,B(u(e).email),1)]),a("div",ge,[y(u(D),{onClick:u(d),size:"small"},{default:T(()=>[v("修改个人信息")]),_:1},8,["onClick"])])],64))])])])])])}}}),Me=F(ye,[["__scopeId","data-v-4330dde2"]]);export{Me as default};