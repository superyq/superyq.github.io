(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages26"],{"11c1":function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"cui-page"},[e.$slots["header"]?a("div",{staticClass:"cui-page-header"},[e._t("header")],2):e._e(),e._t("default",null,null,{data:e.data}),e.pages&&!e.scroll?a("div",{staticClass:"cui-page-footer"},[a("cui-pagination",{attrs:{total:e.total,limit:e.limit,current:e.page},on:{"size-change":e.limitChangeHandle,"current-change":e.pageChangeHandle}})],1):e._e()],2)},n=[],r=(a("96cf"),a("3b8d")),s=a("cebc"),o=a("20ca"),l={name:"listWithSearch",props:{scroll:Boolean,pages:Boolean,searchParams:Object,remoteMethod:{type:Function,required:!0},formatResponse:Function},data:function(){return{data:[],page:1,total:0,limit:20,loading:!1,isBottom:!1}},methods:{changeItem:function(e,t){this.$set(this.data,e,Object(s["a"])({},this.data[e],t))},deleteItem:function(e){this.data.splice(e,1)},searchHandle:function(){this.data=[],this.page=1,this.updateDataHandle()},updateDataHandle:function(){var e=Object(r["a"])(regeneratorRuntime.mark(function e(){var t,a;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(!this.loading){e.next=2;break}return e.abrupt("return");case 2:return this.loading=!0,e.next=5,this.formatSearchParams();case 5:return t=e.sent,e.prev=6,e.next=9,this.remoteMethod(t).then(this.formatSearchResult);case 9:a=e.sent,this.$emit("updateSuccess",a),e.next=16;break;case 13:e.prev=13,e.t0=e["catch"](6),this.$emit("updateFailed",e.t0);case 16:this.loading=!1;case 17:case"end":return e.stop()}},e,this,[[6,13]])}));function t(){return e.apply(this,arguments)}return t}(),formatSearchParams:function(){var e={};return this.pages&&Object.assign(e,{page:this.page,limit:this.limit}),this.searchParams&&Object.assign(e,this.searchParams),e},formatSearchResult:function(){var e=Object(r["a"])(regeneratorRuntime.mark(function e(t){var a,i,n,r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(!this.formatResponse){e.next=4;break}return e.next=3,this.formatResponse(t);case 3:t=e.sent;case 4:return a=t,i=a.data,this.pages?(n=i.total,r=i.data,this.scroll?(this.isBottom=r.length<this.limit,this.data=this.data.concat(r)):this.data=r,this.total=n):this.data=i,e.abrupt("return",t);case 7:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}(),limitChangeHandle:function(e){this.limit=e,this.updateDataHandle()},pageChangeHandle:function(e){this.page=e,this.updateDataHandle()},scrollHandle:Object(o["a"])(function(){if(!this.isBottom){var e=document.documentElement.offsetHeight-document.documentElement.scrollTop-window.innerHeight<=200;e&&(this.page+=1,this.updateDataHandle())}},1e3),resetScroll:function(){var e=this;window.removeEventListener("scroll",this.scrollHandle,!1),this.$nextTick(function(){window.addEventListener("scroll",e.scrollHandle,!1)})}},mounted:function(){this.scroll&&window.addEventListener("scroll",this.scrollHandle,!1),this.updateDataHandle()},destroyed:function(){this.scroll&&window.removeEventListener("scroll",this.scrollHandle,!1)}},c=l,u=a("2877"),d=Object(u["a"])(c,i,n,!1,null,null,null);t["a"]=d.exports},2339:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("list-with-search",{ref:"wrapper",attrs:{remoteMethod:e.getStarList,pages:""},scopedSlots:e._u([{key:"default",fn:function(t){var i=t.data;return[a("cui-table",{attrs:{data:i}},[a("el-table-column",{attrs:{prop:"id",label:"ID",align:"center",width:"80"}}),a("el-table-column",{attrs:{prop:"icon",label:"星球信息","header-align":"center"},scopedSlots:e._u([{key:"default",fn:function(t){var i=t.row,n=i.icon,r=i.name;return a("div",{staticClass:"cui-userbox cui-userbox--large"},[a("img",{directives:[{name:"pic",rawName:"v-pic",value:{img:n},expression:"{ img: icon }"}],staticClass:"cui-userbox__avatar",attrs:{alt:r}}),a("span",{staticClass:"cui-userbox__name"},[a("b",[e._v(e._s(r))])])])}}],null,!0)}),a("el-table-column",{attrs:{prop:"describe",label:"slogan","header-align":"center"}}),a("el-table-column",{attrs:{prop:"intro",label:"星球介绍","header-align":"center",width:"400"},scopedSlots:e._u([{key:"default",fn:function(t){var i=t.row;return[a("el-input",{attrs:{type:"textarea",rows:4,disabled:""},model:{value:i.intro,callback:function(t){e.$set(i,"intro",t)},expression:"row.intro"}})]}}],null,!0)}),a("el-table-column",{attrs:{prop:"intro",label:"官方社群",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){var i=t.row.group;return i?a("div",{staticClass:"cui-userbox cui-userbox--large"},[a("img",{directives:[{name:"pic",rawName:"v-pic",value:{img:i.avatar},expression:"{ img: group.avatar }"}],staticClass:"cui-userbox__avatar",attrs:{alt:i.name}}),a("span",{staticClass:"cui-userbox__name"},[a("b",[e._v(e._s(i.name))]),a("br"),a("b",[e._v(e._s(i.id))])])]):a("span",[e._v("--")])}}],null,!0)}),a("el-table-column",{attrs:{prop:"down_link",label:"下载链接",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){var i=t.row.down_link;return[a("a",{attrs:{href:i,target:"_blank"}},[e._v(e._s(i))])]}}],null,!0)}),a("el-table-column",{attrs:{prop:"images",label:"星球图片展示",align:"center",width:"240"},scopedSlots:e._u([{key:"default",fn:function(e){var t=e.row.images;return[a("image-dialog-wrapper",{attrs:{images:t||[]}})]}}],null,!0)}),a("el-table-column",{attrs:{prop:"sort",label:"排序",align:"center",width:"80"}}),a("el-table-column",{attrs:{fixed:"right",label:"操作",align:"center",width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){var i=t.row;return[a("el-button-group",[a("el-button",{attrs:{type:"primary",size:"mini",icon:"el-icon-edit"},on:{click:function(t){return e.addOrUpdateHandle(i)}}},[e._v("编辑")]),a("el-button",{attrs:{type:"danger",size:"mini",icon:"el-icon-delete"},on:{click:function(t){return e.deleteHandle(i)}}},[e._v("删除")])],1)]}}],null,!0)})],1),e.updateVisible?a("add-or-update",{ref:"addOrUpdate"}):e._e()]}}])},[a("template",{slot:"header"},[a("el-form",{attrs:{size:"mini"}},[a("el-form-item",[a("el-button",{attrs:{type:"warning",icon:"el-icon-plus"},on:{click:function(t){return e.addOrUpdateHandle()}}},[e._v("新增")])],1)],1)],1)],2)},n=[],r=(a("7f7f"),a("a8db")),s=a("c1fb");function o(){return s["a"].get("star")}function l(e){var t=e.id,a=Object(r["a"])(e,["id"]),i={data:a,url:"star/".concat(t||""),method:t?"PUT":"POST"};return Object(s["a"])(i)}function c(e){return s["a"].delete("star/".concat(e))}var u=a("ed08"),d=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-dialog",{attrs:{title:e.active+"星球",center:!0,"close-on-click-modal":!1,visible:e.visible,width:"800px"},on:{"update:visible":function(t){e.visible=t}}},[a("el-form",{ref:"dataForm",staticClass:"m-auto",staticStyle:{width:"600px"},attrs:{model:e.dataForm,rules:e.dataRules,"label-width":"120px","label-suffix":":"}},[a("el-form-item",{staticClass:"d-none",attrs:{prop:"id"}}),a("el-form-item",{attrs:{prop:"icon",label:"星球图标"}},[a("image-upload-wrapper",{attrs:{url:e.dataForm.icon},on:{click:function(t){return e.toggleUploadBrowse("icon")}}})],1),a("el-form-item",{attrs:{prop:"name",label:"星球名称"}},[a("el-input",{model:{value:e.dataForm.name,callback:function(t){e.$set(e.dataForm,"name",t)},expression:"dataForm.name"}})],1),a("el-form-item",{attrs:{prop:"intro",label:"星球介绍"}},[a("el-input",{attrs:{type:"textarea",rows:4,autosize:{minRows:4}},model:{value:e.dataForm.intro,callback:function(t){e.$set(e.dataForm,"intro",t)},expression:"dataForm.intro"}})],1),a("el-form-item",{attrs:{prop:"down_link",label:"下载链接"}},[a("el-input",{model:{value:e.dataForm.down_link,callback:function(t){e.$set(e.dataForm,"down_link",t)},expression:"dataForm.down_link"}})],1),a("el-form-item",{attrs:{prop:"sort",label:"星球排序"}},[a("el-input-number",{attrs:{"controls-position":"right",min:0,precision:0},model:{value:e.dataForm.sort,callback:function(t){e.$set(e.dataForm,"sort",t)},expression:"dataForm.sort"}})],1),a("el-form-item",{attrs:{prop:"describe",label:"slogan"}},[a("el-input",{attrs:{type:"textarea",rows:4},model:{value:e.dataForm.describe,callback:function(t){e.$set(e.dataForm,"describe",t)},expression:"dataForm.describe"}})],1),a("el-form-item",{attrs:{prop:"group_id",label:"社群ID"}},[a("el-input",{on:{change:function(t){return e.fieldChangeHandle("group_id")}},model:{value:e.dataForm.group_id,callback:function(t){e.$set(e.dataForm,"group_id",t)},expression:"dataForm.group_id"}})],1),a("el-form-item",{attrs:{prop:"images",label:"图片展示"}},[e.dataForm.images.length?e._l(e.dataForm.images,function(t,i){return a("image-upload-wrapper",{key:i,staticClass:"f-left",attrs:{url:t.filename,canDelete:"",width:"90px",paddingTop:"160%"},on:{click:function(t){return e.toggleUploadBrowse("images",i)},delete:function(t){return e.deleteImage(i)}}})}):e._e(),a("image-upload-wrapper",{staticClass:"f-left",attrs:{width:"90px",paddingTop:"160%"},on:{click:function(t){return e.toggleUploadBrowse("images",e.dataForm.images.length)}}})],2),a("el-form-item",[a("div",{staticClass:"u-help"},[e._v("图片建议尺寸 360px * 640px")])])],1),a("span",{attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.visible=!1}}},[e._v("取消")]),a("el-button",{attrs:{type:"primary",disabled:e.submitting,loading:e.submitting},on:{click:function(t){return e.dataFormSubmit()}}},[e._v("确定")])],1),a("cui-upload",{ref:"cui-upload",attrs:{listType:"picture"},on:{"on-upload-success":e.imageChangeHandle}})],1)},p=[],m=(a("6762"),a("2fdb"),a("cebc")),f=a("9dac"),h={name:"addOrUpdate",inject:["updateTableHandle"],components:{cuiUpload:f["a"]},data:function(){return{visible:!1,submitting:!1,dataForm:{id:0,name:"",describe:"",intro:"",down_link:"",sort:0,icon:"",group_id:"",images:[]},dataRules:{name:[{required:!0,message:"等级名称不能为空",trigger:"blur"}],icon:[{required:!0,message:"星球图标不能为空",trigger:"blur"}],describe:[{required:!0,message:"星球描述不能为空",trigger:"blur"}],intro:[{required:!0,message:"星球介绍不能为空",trigger:"blur"}]},active:"新增",imgType:"icon",index:0,paramsKeys:["id","name","describe","intro","down_link","sort","icon","images"]}},methods:{init:function(e){var t=this;this.visible=!0,this.active="新增",this.$nextTick(function(){t.$refs["dataForm"].resetFields(),e&&e.id&&(t.active="修改",Object(u["a"])(t.dataForm,e))})},deleteImage:function(e){var t=this;this.$confirm("是否删除展示图片第".concat(e+1,"图片?"),"提示",{type:"warning"}).then(function(){t.dataForm.images.splice(e,1)}).catch(u["i"])},toggleUploadBrowse:function(e,t){this.imgType=e,this.index=t,this.$refs["cui-upload"]["toggleBrowse"]()},imageChangeHandle:function(e){this.$message.success("图片上传成功！");var t=e.filename;switch(this.$refs["cui-upload"]["toggleBrowse"](),this.imgType){case"images":this.dataForm.images.splice(this.index,1,Object(m["a"])({},e,{filename:t}));break;case"icon":this.dataForm.icon=t;break}},dataFormSubmit:function(){var e=this;this.submitting||(this.submitting=!0,this.$refs["dataForm"].validate(function(t){if(t){var a=Object(u["k"])(e.dataForm,e.paramsKeys);l(a).then(function(t){var a=t.message,i=void 0===a?"操作成功！":a;e.visible=!1,e.$message.success(i),e.updateTableHandle()}).catch(function(t){var a=t.message,i=void 0===a?"操作失败！":a;e.$message.error(i)}).finally(function(){e.submitting=!1})}else e.submitting=!1}))},fieldChangeHandle:function(e){this.paramsKeys.includes(e)||this.paramsKeys.push(e)}}},g=h,b=a("2877"),v=Object(b["a"])(g,d,p,!1,null,null,null),w=v.exports,_=a("11c1"),x=a("054f"),y={name:"Star",components:{addOrUpdate:w,listWithSearch:_["a"]},provide:function(){return{updateTableHandle:this.updateTableHandle}},data:function(){return{updateVisible:!1}},methods:{getStarList:o,getImageUrlByKey:x["b"],updateTableHandle:function(){this.$refs["wrapper"]&&this.$refs["wrapper"].updateDataHandle()},addOrUpdateHandle:function(e){var t=this;this.updateVisible=!0,this.$nextTick(function(){t.$refs.addOrUpdate&&t.$refs.addOrUpdate.init(e)})},deleteHandle:function(e){var t=this,a=e.name,i=e.id;this.$confirm("确认删除星球「".concat(a,"」？"),"删除星球").then(function(){c(i).then(function(e){var a=e.message,i=void 0===a?"删除成功！":a;t.$message.success(i),t.updateTableHandle()}).catch(function(e){var a=e.message,i=void 0===a?"删除失败！":a;t.$message.error(i)})}).catch(u["i"])}}},k=y,F=Object(b["a"])(k,i,n,!1,null,null,null);t["default"]=F.exports},"2fdb":function(e,t,a){"use strict";var i=a("5ca1"),n=a("d2c8"),r="includes";i(i.P+i.F*a("5147")(r),"String",{includes:function(e){return!!~n(this,e,r).indexOf(e,arguments.length>1?arguments[1]:void 0)}})},"456d":function(e,t,a){var i=a("4bf8"),n=a("0d58");a("5eda")("keys",function(){return function(e){return n(i(e))}})},5147:function(e,t,a){var i=a("2b4c")("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(a){try{return t[i]=!1,!"/./"[e](t)}catch(n){}}return!0}},"5eda":function(e,t,a){var i=a("5ca1"),n=a("8378"),r=a("79e5");e.exports=function(e,t){var a=(n.Object||{})[e]||Object[e],s={};s[e]=t(a),i(i.S+i.F*r(function(){a(1)}),"Object",s)}},6762:function(e,t,a){"use strict";var i=a("5ca1"),n=a("c366")(!0);i(i.P,"Array",{includes:function(e){return n(this,e,arguments.length>1?arguments[1]:void 0)}}),a("9c6c")("includes")},"9dac":function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-dialog",{attrs:{center:"",width:"500px",title:"文件上传",visible:e.visible,"append-to-body":"","show-close":!1,"close-on-click-modal":!1,"close-on-press-escape":!1,"custom-class":"cui-upload"},on:{"update:visible":function(t){e.visible=t},close:function(t){return e.afterDialogCloseHandle()}}},[a("el-upload",e._g(e._b({ref:"upload",staticClass:"cui-upload__wrapper",attrs:{limit:e.limit,accept:e.accept,multiple:e.multiple,action:e.uploadUrl,"auto-upload":!1,"list-type":e.listType,"on-exceed":e.exceedHandle,"on-preview":e.previewHandle,"on-success":e.successHandle,"before-upload":e.beforeUpload,"before-remove":e.beforeRemoveHandle,"http-request":e.uploadFileWithQiniu}},"el-upload",e.$attrs,!1),e.$listeners),[a("el-button",{ref:"browse",attrs:{slot:"trigger",size:"small",type:"warning",icon:"el-icon-upload"},slot:"trigger"},[e._v("选取文件")]),a("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[e._t("tip",[e._v(e._s(e.tip||"只能上传jpg/png文件，且不超过500kb"))])],2)],1),a("el-dialog",{attrs:{title:e.previewTitle,visible:e.previewVisible,top:"5vh","append-to-body":""},on:{"update:visible":function(t){e.previewVisible=t}}},[a("img",{attrs:{width:"100%",src:e.previewUrl,alt:e.previewTitle}})]),a("template",{slot:"footer"},[a("el-button",{attrs:{type:"default"},on:{click:function(t){return e.beforeDialogCloseHandle()}}},[e._v("关闭")]),a("el-button",{attrs:{type:"primary",loading:e.submitting},on:{click:e.submitUpload}},[e._v("上传")])],1)],2)},n=[],r=(a("96cf"),a("3b8d")),s=(a("7f7f"),a("ac6a"),a("456d"),a("c5f6"),a("ed08")),o=a("054f"),l=a("5f87"),c=a("3786"),u={name:"cui-upload",props:{multiple:Boolean,listType:{type:String,default:"text"},accept:{type:String,default:"image/jpeg,image/gif,image/png"},tip:String,limit:Number,beforeUpload:Function,validFile:Function},data:function(){return{uploadUrl:"",previewUrl:"",previewTitle:"图片预览",visible:!1,previewVisible:!1,reqs:{},uploadToken:""}},computed:{submitting:function(){return Object.keys(this.reqs).length>0}},methods:{isImage:function(e){return-1!==e.indexOf("image")},toggleBrowse:function(){this.visible=!this.visible},afterDialogCloseHandle:function(){this.$refs["upload"].clearFiles()},beforeDialogCloseHandle:function(){var e=this;if(this.submitting)return this.$confirm("文件上传中，是否取消上传？","提示",{type:"warning",confirmButtonText:"继续上传",cancelButtonText:"取消上传并退出"}).then(s["i"]).catch(function(){e.clearReqs(null,function(){e.visible=!1})}),!1;this.visible=!1},exceedHandle:function(){this.$alert("超过最大文件数，请移除多余文件！","提示",{type:"warning"}).catch(s["i"])},beforeRemoveHandle:function(e){return this.$confirm("确定移除文件[".concat(e.name,"]？"),"移除文件")},clearReqs:function(e,t){if(e)this.reqs[e]["abort"](),this.$delete(this.reqs,e);else for(var a in this.reqs)this.reqs[a].abort();t()},previewHandle:function(e){var t=this,a=e.raw.type,i=e.url,n=e.name;this.isImage(a)&&i&&(this.previewUrl=i,this.previewTitle=n||this.previewTitle,this.$nextTick(function(){t.previewVisible=!0}))},successHandle:function(e,t,a){this.$emit("on-upload-success",e,t,a)},submitUpload:function(){if(!this.submitting){var e=this.$refs["upload"];e&&(e.uploadFiles.length?this.$refs["upload"].submit():this.$alert("请选择需要上传的文件！","提示",{type:"warning"}).catch(s["i"]))}},uploadFileWithQiniu:function(e){var t=this,a=e.file,i=e.onSuccess,n=e.onError,r=e.onProgress,s=a.uid,c=function(){t.$delete(t.reqs,s)},u=function(){c(),i.apply(void 0,arguments)},d=function(){c();for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];401===t[0].code&&l["a"].logout("登录失效，是否前往登录页重新登录？","重新登录",{confirmButtonText:"重新登录",showCancelButton:!1}),n.apply(void 0,t)},p=function(e){var t=e.total;r(t)},m=Object(o["a"])(this.uploadToken,a,u,d,p);return this.$set(this.reqs,s,m),m.abort=function(){c(),m.unsubscribe()},m},refreshUploadToken:function(){var e=Object(r["a"])(regeneratorRuntime.mark(function e(){var t,a;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(c["b"])();case 2:t=e.sent,a=t.data,this.uploadToken=a;case 5:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()},created:function(){this.refreshUploadToken()}},d=u,p=a("2877"),m=Object(p["a"])(d,i,n,!1,null,null,null);t["a"]=m.exports},a8db:function(e,t,a){"use strict";var i=a("e265"),n=a.n(i),r=a("a4bb"),s=a.n(r);function o(e,t){if(null==e)return{};var a,i,n={},r=s()(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}function l(e,t){if(null==e)return{};var a,i,r=o(e,t);if(n.a){var s=n()(e);for(i=0;i<s.length;i++)a=s[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}a.d(t,"a",function(){return l})},d2c8:function(e,t,a){var i=a("aae3"),n=a("be13");e.exports=function(e,t,a){if(i(t))throw TypeError("String#"+a+" doesn't accept regex!");return String(n(e))}}}]);