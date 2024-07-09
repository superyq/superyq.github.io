import{g as C,h as P,r as f,B as R,K as E,J as n,W as U,F as a,N as K,M as O,aW as A,aX as Y,cs as I,t as W,U as N,C as $,ai as D,o as B,D as V,a3 as j,am as z,aj as M,ak as H,al as J}from"./index-C89OI0f9.js";import{_ as L}from"./YDate.vue_vue_type_script_setup_true_lang-Bt38y7wV.js";import{_ as X}from"./YSelect.vue_vue_type_script_setup_true_lang-DeiVfF0l.js";import{_ as x}from"./YInput.vue_vue_type_script_setup_true_lang-Dl0ZddmA.js";import{_ as G}from"./YTable.vue_vue_type_script_setup_true_lang-BEU5Wls0.js";import{u as Q,a as Z,c as ee,b as te}from"./table-DQ5GbIjj.js";import{_ as le}from"./YSwitch.vue_vue_type_script_setup_true_lang-DiIAcGsh.js";import{_ as ae}from"./YRadio.vue_vue_type_script_setup_true_lang-DDDAGbL0.js";import{N as T,_ as oe}from"./FormItem-7-0DUW0z.js";import"./use-keyboard-CzUaIFAX.js";import"./Checkbox-CDa4N757.js";import"./RadioGroup-CzrGAwm-.js";import"./Dropdown-B4qkqsJv.js";const re=C({__name:"Search",props:{modelValue:{type:Object,required:!0}},emits:["update:modelaValue","search"],setup(m,{expose:o,emit:v}){const u=m,i=v,t=P({get(){return u.modelValue},set(r){i("update:modelaValue",r)}}),_=[{label:"启用",value:1},{label:"禁用",value:0}];let p=f(null);const g=()=>{i("search")},h=r=>{let e=t.value;if(r){let s=r.map(y=>A(y,"{y}-{m}-{d}"));e=Y(t.value,s)}else e.params&&delete e.params;i("update:modelaValue",e)};return o({resetSearch:()=>{p.value=null}}),(r,e)=>{const s=x,y=X,d=L;return R(),E(O,null,[n(s,{modelValue:t.value.roleName,"onUpdate:modelValue":e[0]||(e[0]=l=>t.value.roleName=l),onKeyup:U(g,["enter"]),placeholder:"请输入角色名称"},null,8,["modelValue"]),n(s,{modelValue:t.value.roleKey,"onUpdate:modelValue":e[1]||(e[1]=l=>t.value.roleKey=l),onKeyup:U(g,["enter"]),placeholder:"请输入权限字符"},null,8,["modelValue"]),n(y,{modelValue:t.value.status,"onUpdate:modelValue":e[2]||(e[2]=l=>t.value.status=l),options:_,onKeyup:U(g,["enter"]),placeholder:"请选择用户状态"},null,8,["modelValue"]),n(d,{width:"300px",modelValue:a(p),"onUpdate:modelValue":e[3]||(e[3]=l=>K(p)?p.value=l:p=l),"onUpdate:value":h,"start-placeholder":"创建开始时间","end-placeholder":"创建结束时间"},null,8,["modelValue"])],64)}}}),ne={total:50,page:1,pageSize:10,data:[{createBy:null,createTime:"2023-04-23 16:11:46",updateBy:null,updateTime:null,remark:"超级管理员",roleId:1,roleName:"超级管理员",roleKey:"admin",roleSort:1,dataScope:"1",menuCheckStrictly:!0,deptCheckStrictly:!0,status:1,delFlag:"0",flag:!1,menuIds:null,deptIds:null,permissions:null,admin:!0}]},se={createBy:null,createTime:"2023-04-23 16:11:46",updateBy:null,updateTime:null,remark:"普通角色",roleId:2,roleName:"普通角色",roleKey:"common",roleSort:2,dataScope:"2",menuCheckStrictly:!0,deptCheckStrictly:!0,status:1,delFlag:"0",flag:!1,menuIds:null,deptIds:null,permissions:null,admin:!1},ue=m=>new Promise(o=>{setTimeout(()=>{o(I(ne))},300)}),de=m=>new Promise(o=>{setTimeout(()=>{o(I(se))},300)}),me=m=>new Promise(o=>{setTimeout(()=>{o(I("新增成功"))},300)}),F=m=>new Promise(o=>{setTimeout(()=>{o(I(m))},300)}),ie=m=>new Promise(o=>{setTimeout(()=>{o(I("修改成功"))},300)}),pe=C({__name:"Table",props:{params:{type:Object,required:!0}},emits:["edit","delarr"],setup(m,{expose:o,emit:v}){const u=m,i=v,t=Q(),_=te("roleId"),p=Z([t.selectionColumn,{title:"角色编号",key:"roleId",width:80},{title:"角色名称",key:"roleName",minWidth:200},{title:"权限字符",key:"roleKey",width:120},{title:"显示顺序",key:"roleSort",width:120},{title:"状态",key:"status",width:80,render(l){return W(le,{defaultValue:l.status,checkedValue:1,uncheckedValue:0,onUpdateValue:S=>{ie({id:l.id,status:S}).then(b=>{window.$msg.success(b.data)})}})}},{title:"创建时间",key:"createTime",minWidth:200},{title:"操作",key:"action",fixed:"right",width:160,render(l){return ee([{label:"修改",icon:"edit",onClick:g.bind(null,l)},{label:"删除",icon:"delete",onClick:h.bind(null,l)},{label:"数据权限",icon:"resetpassword",onClick:h.bind(null,l)},{label:"分配用户",icon:"assignrole",onClick:h.bind(null,l)}])}}],{align:"center"}),g=l=>{i("edit",l)},h=l=>{window.$dialog.warning({title:"警告",content:`确定删除 '${l.roleName}' ?`,positiveText:"确定",negativeText:"取消",onPositiveClick:()=>{F(l.id).then(()=>{window.$msg.success("删除成功"),e()})}})};let w=f(!1),r=N([]);const e=()=>(w.value=!0,new Promise(l=>{ue(u.params).then(S=>{w.value=!1,r=S.data.data,l(S.data.total)})})),s=[],y=l=>{s.length=0,s.push(...l)};return o({getTable:e,delArr:()=>{if(!s.length)return window.$msg.info("请选择删除项");window.$dialog.warning({title:"警告",content:"确定批量删除?",positiveText:"确定",negativeText:"取消",onPositiveClick:()=>{F(s).then(()=>{window.$msg.success("删除成功"),e()})}})}}),(l,S)=>{const b=G;return R(),$(b,{loading:a(w),columns:a(p),data:a(r),"row-key":a(_),"onUpdate:checkedRowKeys":y},null,8,["loading","columns","data","row-key"])}}}),ce=C({__name:"Form",props:{formId:[Number,String]},setup(m,{expose:o}){const v=m,u=[{label:"启动",value:1},{label:"停用",value:0}];let i={roleId:void 0,roleName:void 0,roleKey:void 0,roleSort:0,status:"0",menuIds:[],deptIds:[],menuCheckStrictly:!0,deptCheckStrictly:!0,remark:void 0},t=f(D(i));const _={roleName:[{required:!0,message:"角色名称不能为空",trigger:"blur"}],roleKey:[{required:!0,message:"权限字符不能为空",trigger:"blur"}],roleSort:{required:!0,message:"角色顺序不能为空"}},p=()=>{de(v.formId).then(r=>{t.value=r.data})};let g=f(null);const h=()=>{t.value=D(i)};return o({validateForm:()=>new Promise((r,e)=>{g.value.validate(s=>{s?e(!1):me(t.value).then(()=>{window.$msg.success(`${t.value.userId?"修改":"新增"}角色成功！`),r(!0)}).catch(()=>{e(!1)})})})}),B(()=>{h(),v.formId&&p()}),(r,e)=>{const s=ae,y=oe;return R(),$(y,{ref_key:"formRef",ref:g,model:a(t),rules:_,"label-placement":"left","require-mark-placement":"left","label-width":"80"},{default:V(()=>[n(a(T),{path:"roleName",label:"角色名称"},{default:V(()=>[n(x,{modelValue:a(t).roleName,"onUpdate:modelValue":e[0]||(e[0]=d=>a(t).roleName=d)},null,8,["modelValue"])]),_:1}),n(a(T),{path:"roleKey",label:"权限字符"},{default:V(()=>[n(x,{modelValue:a(t).roleKey,"onUpdate:modelValue":e[1]||(e[1]=d=>a(t).roleKey=d)},null,8,["modelValue"])]),_:1}),n(a(T),{path:"roleSort",label:"角色顺序"},{default:V(()=>[n(x,{isNumber:"",min:0,modelValue:a(t).roleSort,"onUpdate:modelValue":e[2]||(e[2]=d=>a(t).roleSort=d)},null,8,["modelValue"])]),_:1}),n(a(T),{path:"status",label:"状态"},{default:V(()=>[n(s,{modelValue:a(t).status,"onUpdate:modelValue":e[3]||(e[3]=d=>a(t).status=d),options:u},null,8,["modelValue"])]),_:1}),n(a(T),{path:"remark",label:"备注",style:{"grid-area":"6 / 1 / 10 / 3"}},{default:V(()=>[n(x,{width:"auto",type:"textarea",modelValue:a(t).remark,"onUpdate:modelValue":e[4]||(e[4]=d=>a(t).remark=d)},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])}}}),fe=j(ce,[["__scopeId","data-v-79336d5e"]]),Ke=C({__name:"index",setup(m){let o=N({roleName:"",roleKey:"",status:null}),v=f(null),u=N(z),i=P(()=>Object.assign({},o,u));const t=f(null),_=(b=1)=>{u.page=b,t.value.getTable().then(c=>{u.total=c})},p=N({del:!0,export:!0,import:!1}),g=()=>{o.roleName="",o.roleKey="",o.status=null,v.value.resetSearch(),o.params&&delete o.params,u.page=1,u.pageSize=20,_()};let h=f(""),w=f(!1),r=f(!1),e=f(null),s=f("");const y=(b=null)=>{const c=!!b;s.value=c?b.roleId:"",h.value=`${c?"编辑":"新增"}角色`,r.value=!0},d=()=>{w.value=!0,e.value.validateForm().then(()=>{r.value=!1}).catch(()=>{}).finally(()=>{w.value=!1})},l=()=>{t.value.delArr()},S=()=>{H("system/user/export",{...i},`user_${new Date().getTime()}.xlsx`)};return M("btnload",w),B(()=>{_()}),(b,c)=>{const q=J;return R(),$(q,{title:a(h),controlShow:p,uploadTitle:"导入用户列表",modelValue:a(u),"onUpdate:modelValue":c[1]||(c[1]=k=>K(u)?u.value=k:u=k),show:a(r),"onUpdate:show":c[2]||(c[2]=k=>K(r)?r.value=k:r=k),onAdd:y,onSearch:_,onReset:g,onDel:l,onSubmit:d,onExport:S},{search:V(()=>[n(re,{ref_key:"searchRef",ref:v,modelValue:a(o),"onUpdate:modelValue":c[0]||(c[0]=k=>K(o)?o.value=k:o=k),onSearch:_},null,8,["modelValue"])]),table:V(()=>[n(pe,{ref_key:"table",ref:t,params:a(i),onEdit:y},null,8,["params"])]),form:V(()=>[n(fe,{ref_key:"form",ref:e,formId:a(s)},null,8,["formId"])]),_:1},8,["title","controlShow","modelValue","show"])}}});export{Ke as default};
