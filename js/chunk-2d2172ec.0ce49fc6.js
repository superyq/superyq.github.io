(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d2172ec"],{c647:function(e,n,t){"use strict";t.r(n);var s=function(){var e=this,n=e.$createElement,t=e._self._c||n;return e.isDirectory?1===e.subMenus.length?t("c-menu-item",{attrs:{menu:e.subMenus[0]}}):t("el-submenu",{attrs:{index:e.menuIndex,"popper-append-to-body":!1}},[t("template",{slot:"title"},[e.menu.icon?t("svg-icon",{staticClass:"el-icon--xxx",attrs:{name:e.menu.icon}}):t("i",{staticClass:"el-icon--xxx"},[e._v(e._s(e.menu.name[0].toUpperCase()))]),t("span",{attrs:{slot:"title"},slot:"title"},[e._v(e._s(e.menu.name))])],1),e._l(e.subMenus,function(e){return t("c-menu-item",{key:e.id,attrs:{menu:e}})})],2):t("el-menu-item",{attrs:{index:e.menuIndex},on:{click:function(n){return e.gotoRouteHandle(e.menu)}}},[e.menu.icon?t("svg-icon",{staticClass:"el-icon--xxx",attrs:{name:e.menu.icon}}):t("i",{staticClass:"el-icon--xxx"},[e._v(e._s(e.menu.name[0].toUpperCase()))]),t("span",{attrs:{slot:"title"},slot:"title"},[e._v(e._s(e.menu.name))])],1)},u=[],i=(t("7f7f"),{name:"CMenuItem",inject:["gotoRouteHandle"],props:{menu:{type:Object,required:!0}},computed:{menuIndex:function(){var e=this.menu.name;return"".concat(e)},isDirectory:function(){return 0===this.menu.type},subMenus:function(){var e=this.menu.list,n=void 0===e?[]:e;return n||[]}}}),o=i,a=t("2877"),c=Object(a["a"])(o,s,u,!1,null,null,null);n["default"]=c.exports}}]);
//# sourceMappingURL=chunk-2d2172ec.0ce49fc6.js.map