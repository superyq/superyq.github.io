(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e9b21"],{"8f41":function(a,t,e){"use strict";e.r(t);var n=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"p-login"},[e("el-input",{attrs:{placeholder:"邮箱"},model:{value:a.dataForm.email,callback:function(t){a.$set(a.dataForm,"email",t)},expression:"dataForm.email"}}),e("el-input",{attrs:{placeholder:"密码"},model:{value:a.dataForm.password,callback:function(t){a.$set(a.dataForm,"password",t)},expression:"dataForm.password"}}),e("el-button",{on:{click:a.loginHandle}},[a._v("登录")])],1)},o=[],l=e("5f87"),s={name:"p-login",data:function(){return{dataForm:{email:"123@qq.com",password:"123456"}}},methods:{loginHandle:function(){var a=this;l["a"].login(this.dataForm).then(function(t){a.$message.success(t)}).catch(function(){})}}},i=s,c=e("2877"),r=Object(c["a"])(i,n,o,!1,null,null,null);t["default"]=r.exports}}]);
//# sourceMappingURL=chunk-2d0e9b21.ae283096.js.map