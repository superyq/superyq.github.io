import{g as C,h as K,r as c,B as U,K as E,J as s,W as R,M as O,U as $,C as I,F as e,t as P,ai as L,o as N,D as b,a3 as W,aj as A,N as D,ak as B,al as Y,am as j}from"./index-_v_ROuBL.js";import{_ as M}from"./YSelect.vue_vue_type_script_setup_true_lang-BhcyAp_T.js";import{_ as T}from"./YInput.vue_vue_type_script_setup_true_lang-C2uzhNBd.js";import{_ as z}from"./YTable.vue_vue_type_script_setup_true_lang-BQ6OwsLK.js";import{c as H,d as F,g as J,a as G,b as Q}from"./dict-Ozh2n2X6.js";import{u as X,a as Z,b as ee,c as te}from"./table-a_mX3Frg.js";import{_ as ae}from"./YSwitch.vue_vue_type_script_setup_true_lang-CEa3yXqL.js";import{_ as le}from"./YRadio.vue_vue_type_script_setup_true_lang-B28a7mRJ.js";import{N as S,_ as oe}from"./FormItem-BtzGq-Ay.js";import"./Checkbox-CY6MvvVb.js";import"./RadioGroup-C0TaMrjb.js";import"./Dropdown-Ct-AoJJL.js";import"./use-keyboard-Bv3MiPgx.js";const se=C({__name:"Search",props:{modelValue:{type:Object,required:!0}},emits:["update:modelaValue","search"],setup(x,{expose:n,emit:g}){const r=x,p=g,t=K({get(){return r.modelValue},set(i){p("update:modelaValue",i)}}),f=[{label:"启用",value:1},{label:"禁用",value:0}];let w=c(null);const h=()=>{p("search")};return n({resetSearch:()=>{w.value=null}}),(i,l)=>{const a=T,u=M;return U(),E(O,null,[s(a,{modelValue:t.value.dictLabel,"onUpdate:modelValue":l[0]||(l[0]=_=>t.value.dictLabel=_),onKeyup:R(h,["enter"]),placeholder:"请输入字典标签"},null,8,["modelValue"]),s(u,{modelValue:t.value.status,"onUpdate:modelValue":l[1]||(l[1]=_=>t.value.status=_),options:f,onKeyup:R(h,["enter"]),placeholder:"请选择数据状态"},null,8,["modelValue"])],64)}}}),ne=C({__name:"Table",props:{params:{type:Object,required:!0}},emits:["edit","delarr"],setup(x,{expose:n,emit:g}){const r=x,p=g,t=X(),f=ee("dictCode"),w=Z([t.selectionColumn,{title:"字典编号",key:"dictCode",width:80},{title:"字典标签",key:"dictLabel",minWidth:120},{title:"字典键值",key:"dictValue",minWidth:120},{title:"字典排序",key:"dictSort",minWidth:120},{title:"状态",key:"status",width:80,render(o){return P(ae,{defaultValue:o.status,checkedValue:1,uncheckedValue:0,onUpdateValue:k=>{H({id:o.id,status:k}).then(V=>{window.$msg.success(V.data)})}})}},{title:"备注",key:"remark",minWidth:120},{title:"创建时间",key:"createTime",minWidth:120},{title:"操作",key:"action",fixed:"right",width:160,render(o){return te([{label:"修改",icon:"edit",onClick:h.bind(null,o)},{label:"删除",icon:"delete",onClick:y.bind(null,o)}])}}],{align:"center"}),h=o=>{p("edit",o)},y=o=>{window.$dialog.warning({title:"警告",content:`确定删除 '${o.dictLabel}' ?`,positiveText:"确定",negativeText:"取消",onPositiveClick:()=>{F(o.dictId).then(()=>{window.$msg.success("删除成功"),a()})}})};let i=c(!1),l=$([]);const a=()=>(i.value=!0,new Promise(o=>{J(r.params).then(k=>{i.value=!1,l=k.data.data,o(k.data.total)})})),u=[],_=o=>{u.length=0,u.push(...o)};return n({getTable:a,delArr:()=>{if(!u.length)return window.$msg.info("请选择删除项");window.$dialog.warning({title:"警告",content:"确定批量删除?",positiveText:"确定",negativeText:"取消",onPositiveClick:()=>{F().then(()=>{window.$msg.success("删除成功"),a()})}})}}),(o,k)=>{const V=z;return U(),I(V,{loading:e(i),columns:e(w),data:e(l),"row-key":e(f),"onUpdate:checkedRowKeys":_},null,8,["loading","columns","data","row-key"])}}}),re=C({__name:"Form",props:{formId:[Number,String]},setup(x,{expose:n}){const g=x,r=[{label:"启动",value:1},{label:"停用",value:0}];let p={dictCode:void 0,dictLabel:void 0,dictValue:void 0,listClass:"default",dictSort:0,status:0,remark:void 0},t=c(L(p));const f={dictLabel:[{required:!0,message:"数据标签不能为空",trigger:"blur"}],dictValue:[{required:!0,message:"数据键值不能为空",trigger:"blur"}],dictSort:{required:!0,message:"数据顺序不能为空"}},w=()=>{G(g.formId).then(l=>{t.value=l.data})};let h=c(null);const y=()=>{t.value=L(p)};return n({validateForm:()=>new Promise((l,a)=>{h.value.validate(u=>{u?a(!1):Q(t.value).then(()=>{window.$msg.success(`${t.value.userId?"修改":"新增"}字典数据成功！`),l(!0)}).catch(()=>{a(!1)})})})}),N(()=>{y(),g.formId&&w()}),(l,a)=>{const u=le,_=oe;return U(),I(_,{ref_key:"formRef",ref:h,model:e(t),rules:f,"label-placement":"left","require-mark-placement":"left","label-width":"80"},{default:b(()=>[s(e(S),{path:"dictType",label:"字典类型"},{default:b(()=>[s(T,{modelValue:e(t).dictType,"onUpdate:modelValue":a[0]||(a[0]=d=>e(t).dictType=d)},null,8,["modelValue"])]),_:1}),s(e(S),{path:"dictLabel",label:"数据标签"},{default:b(()=>[s(T,{modelValue:e(t).dictLabel,"onUpdate:modelValue":a[1]||(a[1]=d=>e(t).dictLabel=d)},null,8,["modelValue"])]),_:1}),s(e(S),{path:"dictValue",label:"数据键值"},{default:b(()=>[s(T,{modelValue:e(t).dictValue,"onUpdate:modelValue":a[2]||(a[2]=d=>e(t).dictValue=d)},null,8,["modelValue"])]),_:1}),s(e(S),{path:"dictSort",label:"显示排序"},{default:b(()=>[s(T,{isNumber:"",modelValue:e(t).dictSort,"onUpdate:modelValue":a[3]||(a[3]=d=>e(t).dictSort=d),min:0},null,8,["modelValue"])]),_:1}),s(e(S),{path:"status",label:"状态"},{default:b(()=>[s(u,{modelValue:e(t).status,"onUpdate:modelValue":a[4]||(a[4]=d=>e(t).status=d),options:r},null,8,["modelValue"])]),_:1}),s(e(S),{path:"remark",label:"备注",style:{"grid-area":"6 / 1 / 10 / 3"}},{default:b(()=>[s(T,{width:"auto",type:"textarea",modelValue:e(t).remark,"onUpdate:modelValue":a[5]||(a[5]=d=>e(t).remark=d)},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])}}}),de=W(re,[["__scopeId","data-v-36272151"]]),ye=C({__name:"index",setup(x){let n=$({dictLabel:"",status:null}),g=c(null),r=$(j),p=K(()=>Object.assign({},n,r));const t=c(null),f=(V=1)=>{r.page=V,t.value.getTable().then(m=>{r.total=m})},w=$({del:!0,export:!0,import:!1}),h=()=>{n.dictLabel="",n.status=null,g.value.resetSearch(),n.params&&delete n.params,r.page=1,r.pageSize=20,f()};let y=c(""),i=c(!1),l=c(!1),a=c(null),u=c("");const _=(V=null)=>{const m=!!V;u.value=m?V.dictCode:"",y.value=`${m?"编辑":"新增"}字典数据`,l.value=!0},d=()=>{i.value=!0,a.value.validateForm().then(()=>{l.value=!1}).catch(()=>{}).finally(()=>{i.value=!1})},o=()=>{t.value.delArr()},k=()=>{B("system/user/export",{...p},`user_${new Date().getTime()}.xlsx`)};return A("btnload",i),N(()=>{f()}),(V,m)=>{const q=Y;return U(),I(q,{title:e(y),controlShow:w,modelValue:e(r),"onUpdate:modelValue":m[1]||(m[1]=v=>D(r)?r.value=v:r=v),show:e(l),"onUpdate:show":m[2]||(m[2]=v=>D(l)?l.value=v:l=v),onAdd:_,onSearch:f,onReset:h,onDel:o,onSubmit:d,onExport:k},{search:b(()=>[s(se,{ref_key:"searchRef",ref:g,modelValue:e(n),"onUpdate:modelValue":m[0]||(m[0]=v=>D(n)?n.value=v:n=v),onSearch:f},null,8,["modelValue"])]),table:b(()=>[s(ne,{ref_key:"table",ref:t,params:e(p),onEdit:_},null,8,["params"])]),form:b(()=>[s(de,{ref_key:"form",ref:a,formId:e(u)},null,8,["formId"])]),_:1},8,["title","controlShow","modelValue","show"])}}});export{ye as default};
