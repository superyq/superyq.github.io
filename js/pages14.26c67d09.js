(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages14"],{"11c1":function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"cui-page"},[e.$slots["header"]?a("div",{staticClass:"cui-page-header"},[e._t("header")],2):e._e(),e._t("default",null,null,{data:e.data}),e.pages&&!e.scroll?a("div",{staticClass:"cui-page-footer"},[a("cui-pagination",{attrs:{total:e.total,limit:e.limit,current:e.page},on:{"size-change":e.limitChangeHandle,"current-change":e.pageChangeHandle}})],1):e._e()],2)},r=[],i=(a("96cf"),a("3b8d")),o=a("cebc"),l=a("20ca"),s={name:"listWithSearch",props:{scroll:Boolean,pages:Boolean,searchParams:Object,remoteMethod:{type:Function,required:!0},formatResponse:Function},data:function(){return{data:[],page:1,total:0,limit:20,loading:!1,isBottom:!1}},methods:{changeItem:function(e,t){this.$set(this.data,e,Object(o["a"])({},this.data[e],t))},deleteItem:function(e){this.data.splice(e,1)},searchHandle:function(){this.data=[],this.page=1,this.updateDataHandle()},updateDataHandle:function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(){var t,a;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(!this.loading){e.next=2;break}return e.abrupt("return");case 2:return this.loading=!0,e.next=5,this.formatSearchParams();case 5:return t=e.sent,e.prev=6,e.next=9,this.remoteMethod(t).then(this.formatSearchResult);case 9:a=e.sent,this.$emit("updateSuccess",a),e.next=16;break;case 13:e.prev=13,e.t0=e["catch"](6),this.$emit("updateFailed",e.t0);case 16:this.loading=!1;case 17:case"end":return e.stop()}},e,this,[[6,13]])}));function t(){return e.apply(this,arguments)}return t}(),formatSearchParams:function(){var e={};return this.pages&&Object.assign(e,{page:this.page,limit:this.limit}),this.searchParams&&Object.assign(e,this.searchParams),e},formatSearchResult:function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(t){var a,n,r,i;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(!this.formatResponse){e.next=4;break}return e.next=3,this.formatResponse(t);case 3:t=e.sent;case 4:return a=t,n=a.data,this.pages?(r=n.total,i=n.data,this.scroll?(this.isBottom=i.length<this.limit,this.data=this.data.concat(i)):this.data=i,this.total=r):this.data=n,e.abrupt("return",t);case 7:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}(),limitChangeHandle:function(e){this.limit=e,this.updateDataHandle()},pageChangeHandle:function(e){this.page=e,this.updateDataHandle()},scrollHandle:Object(l["a"])(function(){if(!this.isBottom){var e=document.documentElement.offsetHeight-document.documentElement.scrollTop-window.innerHeight<=200;e&&(this.page+=1,this.updateDataHandle())}},1e3),resetScroll:function(){var e=this;window.removeEventListener("scroll",this.scrollHandle,!1),this.$nextTick(function(){window.addEventListener("scroll",e.scrollHandle,!1)})}},mounted:function(){this.scroll&&window.addEventListener("scroll",this.scrollHandle,!1),this.updateDataHandle()},destroyed:function(){this.scroll&&window.removeEventListener("scroll",this.scrollHandle,!1)}},c=s,u=a("2877"),d=Object(u["a"])(c,n,r,!1,null,null,null);t["a"]=d.exports},"1f27":function(e,t,a){"use strict";a.d(t,"b",function(){return i}),a.d(t,"c",function(){return o}),a.d(t,"a",function(){return l});var n=a("a8db"),r=a("c1fb");function i(e){return r["a"].get("menus",{params:e})}function o(e){var t=e.id,a=Object(n["a"])(e,["id"]),i={data:a,url:"menus/".concat(t||""),method:t?"PUT":"POST"};return Object(r["a"])(i)}function l(e){var t=e.id;return r["a"].delete("select-menu-error-shell/".concat(t))}},"7d7f":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("list-with-search",{ref:"wrapper",attrs:{"search-params":e.search,"remote-method":e.remoteMethod},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.data;return[a("cui-table",{attrs:{data:n,"tree-props":{children:"children"},"row-key":"id"}},[a("el-table-column",{attrs:{prop:"id",label:"ID",align:"center",width:"100"}}),a("el-table-column",{attrs:{prop:"name",label:"名称","header-align":"center"}}),a("el-table-column",{attrs:{prop:"parent",label:"所属栏目",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.row.parent;void 0===a&&(a={name:"根目录"});var n=a.name;return[e._v(e._s(n))]}}],null,!0)}),a("el-table-column",{attrs:{prop:"icon",label:"图标",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.row.icon;return void 0===n&&(n=""),[n?a("svg-icon",{attrs:{name:n}}):e._e()]}}],null,!0)}),a("el-table-column",{attrs:{prop:"type",label:"类型",align:"center","filter-method":e.filterHandler,filters:e.tableFilters.types},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.row.type;return[a("el-tag",{attrs:{size:"small",type:e.menuTypesMap.get(n)["tag"]}},[e._v(e._s(e.menuTypesMap.get(n)["name"]))])]}}],null,!0)}),a("el-table-column",{attrs:{prop:"show",label:"状态",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.row,r=n.show,i=n.type;return[2!==i?a("span",{class:"c-"+["danger","info"][r]},[e._v(e._s(["隐藏","显示"][r]))]):e._e()]}}],null,!0)},[a("template",{slot:"header"},[a("span",[e._v("状态")]),a("el-tooltip",{attrs:{placement:"top"}},[a("span",{attrs:{slot:"content"},slot:"content"},[e._v("标识是否显示于侧边菜单栏")]),a("i",{staticClass:"el-icon-question",staticStyle:{"margin-left":"0.5em","margin-right":"-1em"}})])],1)],2),a("el-table-column",{attrs:{prop:"order",label:"排序",align:"center",sortable:""}}),a("el-table-column",{attrs:{prop:"url",label:"菜单URL","header-align":"center"}}),a("el-table-column",{attrs:{prop:"alias",label:"标识",align:"center"}}),a("el-table-column",{attrs:{label:"操作",align:"center",fixed:"right",width:"170"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.row;t.$index;return[a("el-button-group",[a("el-button",{attrs:{type:"primary",size:"mini",icon:"el-icon-edit"},on:{click:function(t){return e.addOrUpdateHandle(n)}}},[e._v("修改")]),a("el-button",{attrs:{type:"danger",size:"mini",icon:"el-icon-delete"},on:{click:function(t){return e.deleteHandle(n)}}},[e._v("删除")])],1)]}}],null,!0)})],1),e.showAddOrUpdate?a("add-or-update",{ref:"addOrUpdate"}):e._e()]}}])},[a("template",{slot:"header"},[a("el-form",{attrs:{size:"mini",inline:"",model:e.search}},[a("el-form-item",{attrs:{prop:"name"}},[a("el-input",{attrs:{type:"text",placeholder:"支持模糊查询",clearable:""},model:{value:e.search.name,callback:function(t){e.$set(e.search,"name",t)},expression:"search.name"}},[a("span",{attrs:{slot:"prepend"},slot:"prepend"},[e._v("名称")])])],1),a("el-form-item",[a("el-button",{attrs:{type:"primary",icon:"el-icon-search"},on:{click:function(t){return e.updateTableHandle()}}},[e._v("查询")]),a("el-button",{attrs:{type:"warning",icon:"el-icon-plus"},on:{click:function(t){return e.addOrUpdateHandle()}}},[e._v("新增")])],1)],1)],1)],2)},r=[],i=a("cebc"),o=(a("7f7f"),a("ac6a"),a("11c1")),l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-dialog",{attrs:{title:e.action+"菜单","close-on-click-modal":!1,visible:e.visible,width:"800px"},on:{"update:visible":function(t){e.visible=t},close:function(t){return e.restFormHandle()}}},[a("el-form",{ref:"dataForm",staticClass:"m-auto",staticStyle:{width:"550px"},attrs:{model:e.dataForm,rules:e.dataRule,"label-width":"95px","label-suffix":"：","status-icon":""},nativeOn:{submit:function(e){e.preventDefault()}}},[a("el-form-item",{staticClass:"d-none",attrs:{prop:"id",label:"ID"}},[a("el-input",{attrs:{type:"text"},model:{value:e.dataForm.id,callback:function(t){e.$set(e.dataForm,"id",t)},expression:"dataForm.id"}})],1),a("el-form-item",{attrs:{prop:"type",label:"类型"}},[a("el-radio-group",{attrs:{disabled:!e.typeEditable},model:{value:e.dataForm.type,callback:function(t){e.$set(e.dataForm,"type",t)},expression:"dataForm.type"}},e._l(e.menuTypesMap,function(t){var n=t[0],r=t[1];return a("el-radio",{key:n,attrs:{label:n}},[e._v(e._s(r.name))])}),1)],1),a("el-form-item",{attrs:{prop:"name",label:e.labelSuffix+"名称"}},[a("el-input",{attrs:{type:"text",placeholder:"名称"},model:{value:e.dataForm.name,callback:function(t){e.$set(e.dataForm,"name",t)},expression:"dataForm.name"}})],1),a("el-form-item",{attrs:{prop:"alias",label:e.labelSuffix+"标识"}},[a("el-input",{attrs:{type:"text",placeholder:"标识"},model:{value:e.dataForm.alias,callback:function(t){e.$set(e.dataForm,"alias",t)},expression:"dataForm.alias"}})],1),2!==e.dataForm.type?a("el-form-item",{attrs:{prop:"icon",label:e.labelSuffix+"图标"}},[a("el-popover",{ref:"cui-icons-popover",attrs:{placement:"bottom-start",trigger:"click","popper-class":"page-menu__popper","visible-arrow":!1}},[a("div",{staticClass:"cui-icons__wrapper"},[a("div",{staticClass:"cui-icons__inner"},[a("div",{staticClass:"cui-icons"},e._l(e.icons,function(t,n){return a("el-button",{key:n,class:{"is-active":e.dataForm.icon===t},attrs:{circle:"",title:t},on:{click:function(a){return e.menuIconChangeHandle(t)}}},[a("svg-icon",{attrs:{name:t}})],1)}),1)])])]),a("el-input",{directives:[{name:"popover",rawName:"v-popover:cui-icons-popover",arg:"cui-icons-popover"}],attrs:{readonly:"",value:e.dataForm.icon,placeholder:"点击选择图标"}})],1):e._e(),1===e.dataForm.type?a("el-form-item",{attrs:{prop:"url",label:"菜单URL"}},[a("el-input",{attrs:{type:"text",placeholder:"url"},model:{value:e.dataForm.url,callback:function(t){e.$set(e.dataForm,"url",t)},expression:"dataForm.url"}})],1):e._e(),a("el-form-item",{attrs:{prop:"pid",label:"所属栏目"}},[a("el-popover",{ref:"cui-menus-popover",attrs:{placement:"bottom-start",trigger:"click","popper-class":"page-menu__popper","visible-arrow":!1}},[a("el-tree",{attrs:{"node-key":"id",data:e.formattedTreeData,"highlight-current":!0,"default-expand-all":!0,"expand-on-click-node":!1,props:{label:"name",children:"children"}},on:{"current-change":e.menuParentChangeHandle}})],1),a("el-input",{directives:[{name:"popover",rawName:"v-popover:cui-menus-popover",arg:"cui-menus-popover"}],attrs:{value:e.parent?e.parent.name:"",placeholder:"点击选择所属栏目"}})],1),2!==e.dataForm.type?a("el-form-item",{attrs:{prop:"order",label:e.labelSuffix+"排序"}},[a("el-input-number",{staticClass:"w-100 t-left",attrs:{controls:!1,min:0,placeholder:"菜单栏按数值大小排列"},model:{value:e.dataForm.order,callback:function(t){e.$set(e.dataForm,"order",t)},expression:"dataForm.order"}})],1):e._e(),2!==e.dataForm.type?a("el-form-item",{attrs:{prop:"show",label:"是否隐藏"}},[a("el-switch",{attrs:{"active-value":0,"inactive-value":1},model:{value:e.dataForm.show,callback:function(t){e.$set(e.dataForm,"show",t)},expression:"dataForm.show"}}),a("span",{staticClass:"u-help"},[e._v("注：标识是否为"),a("el-tooltip",{attrs:{placement:"top"}},[a("span",{attrs:{slot:"content"},slot:"content"},[e._v("不显示于侧边菜单栏的"+e._s(e.labelSuffix))]),a("b",{staticStyle:{margin:"0 3px",cursor:"pointer"}},[e._v("隐藏"+e._s(e.labelSuffix))])]),a("span",[e._v("；默认"),a("b",[e._v("否")])])],1)],1):e._e()],1),a("template",{slot:"footer"},[a("el-button",{on:{click:function(t){e.visible=!1}}},[e._v("取消")]),a("el-button",{attrs:{type:"primary",disabled:!e.isCanSubmit,loading:e.submitting},on:{click:function(t){return e.beforeSubmitHandle()}}},[e._v(e._s(e.action))])],1)],2)},s=[],c=a("75fc"),u=a("f121"),d=a("1f27"),p=a("c0a5"),m=a("ed08"),f={name:"addOrUpdate",inject:["updateTableHandle"],data:function(){return{menuTypesMap:u["o"],dataForm:{id:0,type:0,name:"",alias:"",url:"",pid:0,order:"",show:1,icon:""},dataRule:{url:[{required:!0,trigger:"blur",message:"URL不能为空"}],type:[{required:!0,trigger:"blur",message:"类型不能为空"}],name:[{required:!0,trigger:"blur",message:"名称不能为空"}],icon:[{required:!0,trigger:[],message:"请选择图标"}],alias:[{required:!0,trigger:"blur",message:"标识不能为空"}]},action:"新增",visible:!1,loading:!1,submitting:!1,typeEditable:!0,formattedTreeData:[],parent:{id:0,name:"根目录"}}},computed:{isCanSubmit:function(){return this.dataForm.name&&!this.submitting&&!this.loading},labelSuffix:function(){return this.menuTypesMap.get(this.dataForm.type)["name"]},icons:function(){return this.$getIcons&&this.$getIcons()}},methods:{init:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.visible=!0,this.action="新增",Object(d["b"])().then(function(a){var n=a.data;e.formattedTreeData=[{id:0,name:"根目录"}].concat(Object(c["a"])(Object(p["a"])(Object(m["j"])(n,function(e){return delete e.children,e.id!==t.id&&0===e.type})[0])))}),this.$nextTick(function(){t.id&&(e.action="修改",e.typeEditable=!1,t.parent&&(e.parent=t.parent),Object(m["a"])(e.dataForm,t))})},restFormHandle:function(){this.typeEditable=!0,this.parent={id:0,name:"根目录"},this.$refs["dataForm"].resetFields(),this.dataForm.url=""},menuIconChangeHandle:function(e){var t=this;this.dataForm.icon=e,this.$nextTick(function(){t.$refs["cui-icons-popover"].doClose(),t.$refs["dataForm"].validateField("icon")})},menuParentChangeHandle:function(e){var t=this;this.parent=e,this.dataForm.pid=e.id,this.$nextTick(function(){t.$refs["cui-menus-popover"].doClose()})},beforeSubmitHandle:function(){var e=this;this.submitting||(this.submitting=!0,this.$refs["dataForm"].validate(function(t){t?e.submitHandle():e.submitting=!1}))},submitHandle:function(){var e=this;this.$confirm("确认".concat(this.action,"?"),this.action,{type:"info"}).then(function(){var t=Object(m["k"])(e.dataForm,u["o"].get(e.dataForm.type)["keys"]);e.dataForm.id&&(t.id=e.dataForm.id,delete t.type),Object(d["c"])(t).then(function(){e.$message({duration:1e3,type:"success",message:"".concat(e.action,"成功！"),onClose:function(){e.submitting=!1,e.updateTableHandle(),e.$nextTick(function(){e.visible=!1})}})}).catch(function(t){var a=t.message,n=void 0===a?"".concat(e.action,"失败！"):a;e.submitting=!1,e.$message.error(n)})}).catch(function(){e.submitting=!1})}}},h=f,b=a("2877"),v=Object(b["a"])(h,l,s,!1,null,null,null),g=v.exports,y={name:"pageMenu",components:{listWithSearch:o["a"],addOrUpdate:g},provide:function(){return{updateTableHandle:this.updateTableHandle}},data:function(){return{menuTypesMap:u["o"],search:{name:""},showAddOrUpdate:!1}},computed:{tableFilters:function(){var e=[];return u["o"].forEach(function(t,a){var n=t.name;e.push({text:n,value:a})}),{types:e}}},methods:{remoteMethod:function(e){return Object(d["b"])(e).then(function(e){var t=Object(p["a"])(Object(m["j"])(e.data,function(){return!0})[0]);return Object(i["a"])({},e,{data:t})})},updateTableHandle:function(){this.$refs["wrapper"].updateDataHandle()},addOrUpdateHandle:function(e){var t=this;this.showAddOrUpdate=!0,this.$nextTick(function(){t.$refs["addOrUpdate"]&&t.$refs["addOrUpdate"].init(e)})},deleteHandle:function(e){var t=this;this.$confirm("确认删除".concat(e.name,"?"),"删除",{type:"warning"}).then(function(){Object(d["a"])(e).then(function(){t.$message({type:"success",message:"删除成功！",duration:1e3,onClose:function(){t.updateTableHandle()}})}).catch(function(e){var a=e.message,n=void 0===a?"删除失败！":a;t.$message.error(n)})}).catch(m["i"])},filterHandler:function(e,t,a){var n=a["property"];return t[n]===e}}},_=y,w=Object(b["a"])(_,n,r,!1,null,null,null);t["default"]=w.exports},a8db:function(e,t,a){"use strict";var n=a("e265"),r=a.n(n),i=a("a4bb"),o=a.n(i);function l(e,t){if(null==e)return{};var a,n,r={},i=o()(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}function s(e,t){if(null==e)return{};var a,n,i=l(e,t);if(r.a){var o=r()(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}a.d(t,"a",function(){return s})},c0a5:function(e,t,a){"use strict";function n(e){for(var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"id",a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"pid",n=[],r={},i=0;i<e.length;i++)r[e[i][t]]=e[i];for(var o=0;o<e.length;o++)r[e[o][a]]&&e[o][t]!==e[o][a]?(r[e[o][a]]["children"]||(r[e[o][a]]["children"]=[]),r[e[o][a]]["_level"]||(r[e[o][a]]["_level"]=1),e[o]["parent"]=r[e[o][a]],e[o]["_level"]=r[e[o][a]]._level+1,r[e[o][a]]["children"].push(e[o])):n.push(e[o]);return n}a.d(t,"a",function(){return n})}}]);