(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-94f015a4"],{a4c2:function(e,t,a){"use strict";a.r(t);var n=a("7a23"),l={class:"user"};function o(e,t,a,o,i,r){var d=Object(n["resolveComponent"])("page-search"),c=Object(n["resolveComponent"])("page-content"),p=Object(n["resolveComponent"])("page-modal");return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",l,[Object(n["createVNode"])(d,{configSearchForm:e.configSearchForm,onResetBtnClick:e.handleResetBtnClick,onQueryBtnClick:e.handleQueryBtnClick},null,8,["configSearchForm","onResetBtnClick","onQueryBtnClick"]),Object(n["createVNode"])(c,{ref:"pageDataRef",configTableData:e.configTableData,pageName:"users",onAddBtnClick:e.handleAddData,onEditBtnClick:e.handleEditData},null,8,["configTableData","onAddBtnClick","onEditBtnClick"]),Object(n["createVNode"])(p,{initInfo:e.initInfo,ref:"pageModalRef",pageName:"users",modalConfig:e.modalConfigRef},null,8,["initInfo","modalConfig"])])}var i=a("3835"),r=(a("7db0"),a("d3b7"),a("d81d"),a("b0c0"),{labelWidth:"130px",itemStyle:{padding:"20px 10px",marginBottom:0},formItemList:[{type:"input",label:"用户名",field:"name",placeholder:"请输入用户名"},{type:"input",label:"真实姓名",field:"realname",placeholder:"请输入真实姓名"},{type:"input",label:"电话号码",field:"cellphone",placeholder:"请输入电话号码"},{type:"select",label:"用户状态",field:"enable",placeholder:"请选择用户状态",options:[{label:"启用",value:1},{label:"禁用",value:0}]},{type:"datepicker",label:"时间段",field:"createAt",otherOpts:{type:"daterange",startPlaceholder:"开始时间",endPlaceholder:"结束时间"}}]}),d={showIndexColumn:!0,showSelectedColumn:!0,title:"用户列表",propList:[{prop:"name",label:"用户名",minWidth:100},{prop:"realname",label:"真实姓名",minWidth:100},{prop:"cellphone",label:"电话号码",minWidth:110},{prop:"createAt",label:"创建时间",minWidth:155,slotName:"createAt"},{prop:"updateAt",label:"更新时间",minWidth:155,slotName:"updateAt"},{prop:"enable",label:"状态",minWidth:90,slotName:"status"},{prop:"departmentId",label:"部门",minWidth:100},{prop:"",label:"操作",minWidth:130,slotName:"handler"}]},c={formItemList:[{type:"input",label:"用户名",field:"name",placeholder:"请输入用户名"},{type:"input",label:"真实姓名",field:"realname",placeholder:"请输入真实姓名"},{type:"input",label:"用户密码",field:"password",placeholder:"请输入密码",isHidden:!0},{type:"input",label:"电话号码",field:"cellphone",placeholder:"请输入电话号码"},{type:"select",label:"选择部门",field:"departmentId",placeholder:"请选择部门",options:[]},{type:"select",label:"选择角色",field:"roleId",placeholder:"请选择角色",options:[]}],colLayout:{span:24},itemStyle:{}};function p(){var e=Object(n["ref"])(),t=function(e){console.log(e)},a=function(){var t;null===(t=e.value)||void 0===t||t.getPageData()},l=function(t){var a;null===(a=e.value)||void 0===a||a.getPageData(t)};return[t,a,l,e]}var f=a("d8f6"),s=a("fe8c"),u=a("3573"),m=a("9d1a"),b=a("0613"),h=Object(n["defineComponent"])({name:"users",components:{PageSearch:s["a"],PageContent:u["a"],PageModal:m["a"]},setup:function(){var e=p(),t=Object(i["a"])(e,4),a=t[0],l=t[1],o=t[2],s=t[3],u=function(){var e=c.formItemList.find((function(e){return"password"===e.field}));e.isHidden=!1},m=function(){var e=c.formItemList.find((function(e){return"password"===e.field}));e&&(e.isHidden=!0)},h=Object(b["c"])(),g=Object(n["computed"])((function(){var e=c.formItemList.find((function(e){return"departmentId"===e.field}));e.options=h.state.entireDepartment.map((function(e){return{label:e.name,value:e.id}}));var t=c.formItemList.find((function(e){return"roleId"===e.field}));return t.options=h.state.entireRole.map((function(e){return{label:e.name,value:e.id}})),c})),v=Object(f["a"])(u,m),C=Object(i["a"])(v,4),y=C[0],k=C[1],I=C[2],O=C[3];return{configSearchForm:r,selectionList:a,configTableData:d,handleResetBtnClick:l,handleQueryBtnClick:o,pageDataRef:s,modalConfigRef:g,handleAddData:I,handleEditData:O,pageModalRef:y,initInfo:k}}}),g=a("6b0d"),v=a.n(g);const C=v()(h,[["render",o]]);t["default"]=C},d81d:function(e,t,a){"use strict";var n=a("23e7"),l=a("b727").map,o=a("1dde"),i=o("map");n({target:"Array",proto:!0,forced:!i},{map:function(e){return l(this,e,arguments.length>1?arguments[1]:void 0)}})}}]);
//# sourceMappingURL=chunk-94f015a4.526a6ce9.js.map