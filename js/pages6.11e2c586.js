(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages6"],{"11c1":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"cui-page"},[t.$slots["header"]?a("div",{staticClass:"cui-page-header"},[t._t("header")],2):t._e(),t._t("default",null,null,{data:t.data}),t.pages&&!t.scroll?a("div",{staticClass:"cui-page-footer"},[a("cui-pagination",{attrs:{total:t.total,limit:t.limit,current:t.page},on:{"size-change":t.limitChangeHandle,"current-change":t.pageChangeHandle}})],1):t._e()],2)},s=[],i=(a("96cf"),a("3b8d")),r=a("cebc"),l=a("20ca"),c={name:"listWithSearch",props:{scroll:Boolean,pages:Boolean,searchParams:Object,remoteMethod:{type:Function,required:!0},formatResponse:Function},data:function(){return{data:[],page:1,total:0,limit:20,loading:!1,isBottom:!1}},methods:{changeItem:function(t,e){this.$set(this.data,t,Object(r["a"])({},this.data[t],e))},deleteItem:function(t){this.data.splice(t,1)},searchHandle:function(){this.data=[],this.page=1,this.updateDataHandle()},updateDataHandle:function(){var t=Object(i["a"])(regeneratorRuntime.mark(function t(){var e,a;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(!this.loading){t.next=2;break}return t.abrupt("return");case 2:return this.loading=!0,t.next=5,this.formatSearchParams();case 5:return e=t.sent,t.prev=6,t.next=9,this.remoteMethod(e).then(this.formatSearchResult);case 9:a=t.sent,this.$emit("updateSuccess",a),t.next=16;break;case 13:t.prev=13,t.t0=t["catch"](6),this.$emit("updateFailed",t.t0);case 16:this.loading=!1;case 17:case"end":return t.stop()}},t,this,[[6,13]])}));function e(){return t.apply(this,arguments)}return e}(),formatSearchParams:function(){var t={};return this.pages&&Object.assign(t,{page:this.page,limit:this.limit}),this.searchParams&&Object.assign(t,this.searchParams),t},formatSearchResult:function(){var t=Object(i["a"])(regeneratorRuntime.mark(function t(e){var a,n,s,i;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(!this.formatResponse){t.next=4;break}return t.next=3,this.formatResponse(e);case 3:e=t.sent;case 4:return a=e,n=a.data,this.pages?(s=n.total,i=n.data,this.scroll?(this.isBottom=i.length<this.limit,this.data=this.data.concat(i)):this.data=i,this.total=s):this.data=n,t.abrupt("return",e);case 7:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}(),limitChangeHandle:function(t){this.limit=t,this.updateDataHandle()},pageChangeHandle:function(t){this.page=t,this.updateDataHandle()},scrollHandle:Object(l["a"])(function(){if(!this.isBottom){var t=document.documentElement.offsetHeight-document.documentElement.scrollTop-window.innerHeight<=200;t&&(this.page+=1,this.updateDataHandle())}},1e3),resetScroll:function(){var t=this;window.removeEventListener("scroll",this.scrollHandle,!1),this.$nextTick(function(){window.addEventListener("scroll",t.scrollHandle,!1)})}},mounted:function(){this.scroll&&window.addEventListener("scroll",this.scrollHandle,!1),this.updateDataHandle()},destroyed:function(){this.scroll&&window.removeEventListener("scroll",this.scrollHandle,!1)}},o=c,u=a("2877"),d=Object(u["a"])(o,n,s,!1,null,null,null);e["a"]=d.exports},e70a:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("list-with-search",{ref:"listWithSearch",attrs:{remoteMethod:t.getFeedbackList,pages:!0},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.data;return[a("cui-table",{attrs:{data:n}},[a("el-table-column",{attrs:{prop:"id",label:"ID",width:"80px",align:"center"}}),a("el-table-column",{attrs:{prop:"content",label:"反馈详情","header-align":"center"}}),a("el-table-column",{attrs:{label:"反馈人",width:"200px"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.row.user,s=n.name,i=n.id;return a("div",{staticClass:"cui-userbox"},[a("b",{staticClass:"cui-userbox__name"},[t._v(t._s(s))]),t._v("(#"+t._s(i)+")")])}}],null,!0)}),a("el-table-column",{attrs:{prop:"contact",label:"联系方式",width:"180px",align:"center"}}),a("el-table-column",{attrs:{prop:"created_at",label:"创建时间",width:"180px",align:"center"}})],1)]}}])})},s=[],i=a("cebc"),r=a("c1fb");function l(t,e){return r["a"].get("feedback",{params:Object(i["a"])({page:t},e)})}var c=a("11c1"),o={name:"FeedBack",components:{listWithSearch:c["a"]},methods:{getFeedbackList:l,updateDataHandle:function(){this.$refs["listWithSearch"]&&this.$refs["listWithSearch"].updateDataHandle()}}},u=o,d=a("2877"),h=Object(d["a"])(u,n,s,!1,null,null,null);e["default"]=h.exports}}]);