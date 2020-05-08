(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages28"],{"37aa":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("cui-page",{staticClass:"page-task"},[a("cui-table",{attrs:{data:e.list,loading:e.loading}},[a("el-table-column",{attrs:{label:"id",prop:"id",width:"60px",align:"center"}}),a("el-table-column",{attrs:{label:"任务名",prop:"name",width:"150px","header-align":"center"}}),a("el-table-column",{attrs:{label:"任务描述",prop:"describe","min-width":"200px","header-align":"center"}}),a("el-table-column",{attrs:{label:"任务类型",prop:"type",width:"120px","header-align":"center"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.row.type;return[e._v(e._s("once"===a?"一次性任务":"每日任务"))]}}])}),a("el-table-column",{attrs:{label:"可完成次数",prop:"number",width:"110px",align:"center"}}),a("el-table-column",{attrs:{label:"奖励类型",prop:"reward_type",width:"100px",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.row.reward_type;return[e._v(e._s(e.rewardType[a]))]}}])}),a("el-table-column",{attrs:{label:"完成奖励",prop:"reward",width:"120px",align:"center"}}),a("el-table-column",{attrs:{label:"任务勾子",prop:"trigger",width:"140px","header-align":"center"}}),a("el-table-column",{attrs:{label:"状态",prop:"status",width:"80px",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.row.status;return[a("el-tag",{attrs:{type:e.statusOptions[r]["type"]}},[e._v(e._s(e.statusOptions[r]["name"]))])]}}])}),a("el-table-column",{attrs:{label:"排序",prop:"sort",width:"80px",align:"center"}}),a("el-table-column",{attrs:{label:"操作",width:"100px",align:"center",fixed:"right"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.row;return[a("el-button-group",[a("el-button",{attrs:{type:"primary",size:"mini",icon:"el-icon-edit"},on:{click:function(t){return e.updateTask(r)}}},[e._v("修改")])],1)]}}])})],1),e.addOrUpdateVisible?a("add-or-update",{ref:"addOrUpdate",on:{updataTableData:e.updataTableData}}):e._e()],1)},s=[],n=a("b199"),i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-dialog",{attrs:{title:"修改任务",visible:e.visible,width:"650px"},on:{"update:visible":function(t){e.visible=t}}},[a("el-form",{ref:"form",staticClass:"m-auto",staticStyle:{width:"550px"},attrs:{model:e.params,rules:e.rules,"label-width":"120px","label-suffix":"："}},[a("el-form-item",{staticClass:"d-none",attrs:{prop:"id",label:"ID"}},[a("el-input",{attrs:{type:"text"},model:{value:e.params.id,callback:function(t){e.$set(e.params,"id",t)},expression:"params.id"}})],1),a("el-form-item",{attrs:{label:"任务名字",prop:"name"}},[a("el-input",{attrs:{clearable:""},model:{value:e.params.name,callback:function(t){e.$set(e.params,"name",t)},expression:"params.name"}})],1),a("el-form-item",{attrs:{label:"任务描述",prop:"describe"}},[a("el-input",{attrs:{type:"textarea",autosize:{minRows:4}},model:{value:e.params.describe,callback:function(t){e.$set(e.params,"describe",t)},expression:"params.describe"}})],1),"once"!==e.type?a("el-form-item",{attrs:{label:"可完成次数",prop:"number"}},[a("el-input-number",{attrs:{min:0,precision:0},model:{value:e.params.number,callback:function(t){e.$set(e.params,"number",t)},expression:"params.number"}})],1):e._e(),a("el-form-item",{attrs:{label:"奖励数量",prop:"reward"}},[a("el-input-number",{attrs:{min:0,precision:0},model:{value:e.params.reward,callback:function(t){e.$set(e.params,"reward",t)},expression:"params.reward"}})],1),a("el-form-item",{attrs:{label:"任务排序",prop:"sort"}},[a("el-input-number",{attrs:{min:0,precision:0,"controls-position":"right"},model:{value:e.params.sort,callback:function(t){e.$set(e.params,"sort",t)},expression:"params.sort"}})],1),a("el-form-item",{attrs:{label:"任务状态",prop:"status"}},[a("el-switch",{attrs:{"active-value":0,"inactive-value":1},model:{value:e.params.status,callback:function(t){e.$set(e.params,"status",t)},expression:"params.status"}})],1)],1),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.visible=!1}}},[e._v("取消")]),a("el-button",{attrs:{type:"primary"},on:{click:e.submit}},[e._v("确认")])],1)],1)},l=[],o=(a("456d"),a("ac6a"),{name:"TaskAdd",data:function(){return{id:"",type:"",params:{name:"",describe:"",number:1,sort:0,status:0,reward:0},rules:{name:[{required:!0,message:"请输入任务名称",trigger:"blur"}],describe:[{required:!0,message:"请输入任务描述",trigger:"blur"}],number:[{required:!0,message:"请输入可完成次数",trigger:"blur"}],sort:[{required:!0,message:"请输入任务排序",trigger:"blur"}],status:[{required:!0,message:"请选择任务状态",trigger:"blur"}],reward:[{required:!0,message:"请输入任务奖励数量",trigger:"blur"}]},visible:!1}},methods:{init:function(e){var t=this;this.visible=!0,e&&e.id&&(this.id=e.id,Object.keys(this.params).forEach(function(a){t.params[a]=e[a]}),this.type=e.type)},submit:function(){var e=this;this.$refs["form"].validate(function(t){t&&e.$confirm("确认修改任务？","确认修改",{type:"warning"}).then(function(){Object(n["c"])({id:e.id,data:e.params}).then(function(){e.$message.success("修改成功！"),e.$emit("updataTableData"),e.visible=!1}).catch(function(t){var a=t.message;e.$message.error(a)})}).catch(function(){})})}}}),u=o,c=a("2877"),p=Object(c["a"])(u,i,l,!1,null,null,null),d=p.exports,m={name:"Task",components:{addOrUpdate:d},data:function(){return{list:[],loading:!1,addOrUpdateVisible:!1,statusOptions:[{type:"success",name:"开启"},{type:"danger",name:"关闭"}],rewardType:{comc:"COMC",ct:"CT(矿石)",power:"算力"}}},methods:{updateTask:function(e){var t=this;this.addOrUpdateVisible=!0,this.$nextTick(function(){t.$refs.addOrUpdate&&t.$refs.addOrUpdate.init(e)})},updataTableData:function(){var e=this,t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.loading||(this.loading=t,Object(n["b"])().then(function(t){var a=t.data;e.list=a,e.loading=!1}).catch(function(t){var a=t.message;e.message.error(a),e.loading=!1}))}},activated:function(){this.updataTableData()}},b=m,f=Object(c["a"])(b,r,s,!1,null,null,null);t["default"]=f.exports},"456d":function(e,t,a){var r=a("4bf8"),s=a("0d58");a("5eda")("keys",function(){return function(e){return s(r(e))}})},"5eda":function(e,t,a){var r=a("5ca1"),s=a("8378"),n=a("79e5");e.exports=function(e,t){var a=(s.Object||{})[e]||Object[e],i={};i[e]=t(a),r(r.S+r.F*n(function(){a(1)}),"Object",i)}},b199:function(e,t,a){"use strict";a.d(t,"b",function(){return s}),a.d(t,"a",function(){return n}),a.d(t,"c",function(){return i});var r=a("c1fb");function s(){return r["a"].get("task")}function n(e){return r["a"].get("plaza/task/choice",{params:e})}function i(e){var t=e.id,a=e.data,s={data:a,url:"task/".concat(t||""),method:t?"PUT":"POST"};return Object(r["a"])(s)}}}]);