(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-53fa9da3"],{"20a0":function(n,t,r){},2934:function(n,t,r){"use strict";r.d(t,"c",function(){return o}),r.d(t,"d",function(){return i}),r.d(t,"b",function(){return a}),r.d(t,"g",function(){return s}),r.d(t,"e",function(){return c}),r.d(t,"f",function(){return u}),r.d(t,"a",function(){return l});var e=r("c1fb");function o(n){return Object(e["a"])({baseURL:"//api.igoods.io/api/v1",url:"verification/code",method:"post",data:{number:n,scene:"forget-pass"}})}function i(n){return e["a"].post("/auth/login",n)}function a(){return e["a"].get("/info")}function s(n){return e["a"].put("/info",n)}function c(n){return e["a"].put("/login/password",n)}function u(n){return e["a"].patch("/pay/password",n)}function l(n){return e["a"].put("/find/login/password",n)}},"57de":function(n,t,r){"use strict";r.r(t);var e=function(){var n=this,t=n.$createElement,r=n._self._c||t;return r("div",{staticClass:"app-wrapper app-wrapper--login"},[r("div",{staticClass:"login-content__wrapper"},[r("div",{staticClass:"login-content"},[n._m(0),r("section",{staticClass:"login-main"},[r("h3",{staticClass:"login-title"},[n._v("管理员登陆")]),r("el-form",{ref:"loginForm",attrs:{"status-icon":"",model:n.loginForm,rules:n.loginRules},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&n._k(t.keyCode,"enter",13,t.key,"Enter")?null:n.loginFormSubmit()}}},[r("el-form-item",{attrs:{prop:"account"}},[r("el-input",{attrs:{placeholder:"手机号/邮箱"},model:{value:n.loginForm.account,callback:function(t){n.$set(n.loginForm,"account",t)},expression:"loginForm.account"}})],1),r("el-form-item",{attrs:{prop:"password"}},[r("el-input",{attrs:{type:"password",placeholder:"密码"},model:{value:n.loginForm.password,callback:function(t){n.$set(n.loginForm,"password",t)},expression:"loginForm.password"}})],1),r("span",{staticClass:"login__forget",on:{click:n.forgetHandle}},[n._v("忘记密码?")]),r("el-form-item",[r("el-button",{staticClass:"login-btn-submit",attrs:{type:"primary",disabled:!n.isCanSubmit,loading:n.loading},on:{click:n.loginFormSubmit}},[n._v("登录")])],1)],1)],1)])])])},o=[function(){var n=this,t=n.$createElement,r=n._self._c||t;return r("section",{staticClass:"brand-info"},[r("h2",{staticClass:"brand-info__title"},[n._v("链优品-商城管理系统")]),r("p",{staticClass:"brand-info__intro"},[n._v("\n          comc mall admin 基于vue、element-ui构建开发，实现 COMC\n          商城后台管理前端功能，提供一套更优的前端解决方案。\n        ")])])}],i=(r("a481"),r("2934")),a=r("61f7"),s={name:"Login",data:function(){var n=function(n,t,r){return t?Object(a["a"])(t)||Object(a["b"])(t)?void r():r(new Error("账号格式错误")):r(new Error("账号不能为空"))};return{loginForm:{account:"",password:""},loginRules:{account:[{validator:n,trigger:"blur"}],password:[{required:!0,message:"密码不能为空",trigger:"blur"},{min:6,message:"密码长度不能少于 6 位",trigger:"blur"}]},loading:!1}},computed:{isCanSubmit:function(){var n=this.loginForm,t=n.account,r=n.password;return t.length>=4&&r.length>=6}},methods:{forgetHandle:function(){this.$router.replace({name:"forget"})},loginFormSubmit:function(){var n=this;this.loading||this.$refs["loginForm"].validate(function(t){if(t){n.loading=!0;var r=n.loginForm,e=r.account,o=r.password,s={password:o};s[Object(a["b"])(e)?"phone":"email"]=e,Object(i["d"])(s).then(function(t){var r=t.data,e=r.token,o=r.message;n.$cookie.set("token",e),n.$router.replace({name:"order"}),n.$message.success(o),n.loading=!1}).catch(function(t){var r=t.response;r=void 0===r?{}:r;var e=r.data.message,o=void 0===e?"登录失败":e;n.loading=!1,n.$message.error(o)})}})}}},c=s,u=(r("d009"),r("2877")),l=Object(u["a"])(c,e,o,!1,null,null,null);t["default"]=l.exports},"61f7":function(n,t,r){"use strict";function e(n){var t=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return t.test(n)}function o(n){return/^1[0-9]{10}$/.test(n)}function i(n){var t=/^http[s]?:\/\/.*/;return t.test(n)}r.d(t,"a",function(){return e}),r.d(t,"b",function(){return o}),r.d(t,"c",function(){return i})},a481:function(n,t,r){"use strict";var e=r("cb7c"),o=r("4bf8"),i=r("9def"),a=r("4588"),s=r("0390"),c=r("5f1b"),u=Math.max,l=Math.min,d=Math.floor,f=/\$([$&`']|\d\d?|<[^>]*>)/g,g=/\$([$&`']|\d\d?)/g,p=function(n){return void 0===n?n:String(n)};r("214f")("replace",2,function(n,t,r,v){return[function(e,o){var i=n(this),a=void 0==e?void 0:e[t];return void 0!==a?a.call(e,i,o):r.call(String(i),e,o)},function(n,t){var o=v(r,n,this,t);if(o.done)return o.value;var d=e(n),f=String(this),g="function"===typeof t;g||(t=String(t));var h=d.global;if(h){var b=d.unicode;d.lastIndex=0}var w=[];while(1){var _=c(d,f);if(null===_)break;if(w.push(_),!h)break;var k=String(_[0]);""===k&&(d.lastIndex=s(f,i(d.lastIndex),b))}for(var $="",C=0,F=0;F<w.length;F++){_=w[F];for(var S=String(_[0]),y=u(l(a(_.index),f.length),0),x=[],O=1;O<_.length;O++)x.push(p(_[O]));var j=_.groups;if(g){var A=[S].concat(x,y,f);void 0!==j&&A.push(j);var E=String(t.apply(void 0,A))}else E=m(S,f,y,x,j,t);y>=C&&($+=f.slice(C,y)+E,C=y+S.length)}return $+f.slice(C)}];function m(n,t,e,i,a,s){var c=e+n.length,u=i.length,l=g;return void 0!==a&&(a=o(a),l=f),r.call(s,l,function(r,o){var s;switch(o.charAt(0)){case"$":return"$";case"&":return n;case"`":return t.slice(0,e);case"'":return t.slice(c);case"<":s=a[o.slice(1,-1)];break;default:var l=+o;if(0===l)return r;if(l>u){var f=d(l/10);return 0===f?r:f<=u?void 0===i[f-1]?o.charAt(1):i[f-1]+o.charAt(1):r}s=i[l-1]}return void 0===s?"":s})}})},d009:function(n,t,r){"use strict";var e=r("20a0"),o=r.n(e);o.a}}]);
//# sourceMappingURL=chunk-53fa9da3.ba115c39.js.map