(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{745:function(t,e,r){var content=r(746);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(7).default)("08d4b84c",content,!0,{sourceMap:!1})},746:function(t,e,r){(t.exports=r(6)(!1)).push([t.i,".v-form>.container{padding:16px}.v-form>.container>.layout>.flex{padding:8px}.v-form>.container>.layout:only-child{margin:-8px}.v-form>.container>.layout:not(:only-child){margin:auto -8px}",""])},788:function(t,e,r){"use strict";r(51),r(35),r(18),r(202),r(26),r(40),r(745);var n=r(56);e.a={name:"v-form",mixins:[Object(n.b)("form")],inheritAttrs:!1,props:{value:Boolean,lazyValidation:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(){var t=Object.values(this.errorBag).includes(!0);this.$emit("input",!t)},deep:!0,immediate:!0}},methods:{watchInput:function(input){var t=this,e=function(input){return input.$watch("hasError",function(e){t.$set(t.errorBag,input._uid,e)},{immediate:!0})},r={_uid:input._uid,valid:void 0,shouldValidate:void 0};return this.lazyValidation?r.shouldValidate=input.$watch("shouldValidate",function(n){n&&(t.errorBag.hasOwnProperty(input._uid)||(r.valid=e(input)))}):r.valid=e(input),r},validate:function(){return!this.inputs.filter(function(input){return!input.validate(!0)}).length},reset:function(){for(var t=this,i=this.inputs.length;i--;)this.inputs[i].reset();this.lazyValidation&&setTimeout(function(){t.errorBag={}},0)},resetValidation:function(){for(var t=this,i=this.inputs.length;i--;)this.inputs[i].resetValidation();this.lazyValidation&&setTimeout(function(){t.errorBag={}},0)},register:function(input){var t=this.watchInput(input);this.inputs.push(input),this.watchers.push(t)},unregister:function(input){var t=this.inputs.find(function(i){return i._uid===input._uid});if(t){var e=this.watchers.find(function(i){return i._uid===t._uid});e.valid&&e.valid(),e.shouldValidate&&e.shouldValidate(),this.watchers=this.watchers.filter(function(i){return i._uid!==t._uid}),this.inputs=this.inputs.filter(function(i){return i._uid!==t._uid}),this.$delete(this.errorBag,t._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:Object.assign({novalidate:!0},this.$attrs),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}}},920:function(t,e,r){"use strict";r.r(e);r(44);var n=r(11),o=r(14),c=r(27),d=r(52),l=r(581),h={components:{materialCard:r(578).a},mounted:function(){window.addEventListener("keypress",this.doCommand)},destroyed:function(){window.removeEventListener("keypress",this.doCommand)},data:function(){return{isLoading:!1,username:void 0,password:void 0,defaultUserPassword:void 0}},computed:{isDisabled:function(){return this.isLoading}},middleware:["auth","isLoggedIn"],methods:Object(o.a)({},Object(c.b)({setUser:"localStorage/setUser"}),{doCommand:function(t){if(13===t.keyCode)return this.authenticate()},authenticate:function(){var t=Object(n.a)(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(this.isDisabled){t.next=16;break}return this.isLoading=!0,t.next=4,this.login();case 4:if(e=t.sent,this.isLoading=!1,!e.error){t.next=11;break}console.log("the error",e.error),l.b.fire({icon:"error",title:e.error,timer:3e3,showConfirmButton:!1}),t.next=16;break;case 11:return localStorage.setItem("reconToken",e.token),localStorage.setItem("user",JSON.stringify(e)),t.next=15,this.setUser(e);case 15:this.$router.push({path:"/dashboard"});case 16:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),login:function(){var t=Object(n.a)(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(d.e)("/users/login",{username:this.username,password:this.password});case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()})},f=r(22),m=r(34),v=r.n(m),w=r(184),y=r(792),x=r(176),k=r(179),_=r(177),V=r(788),O=r(178),$=r(573),component=Object(f.a)(h,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-content",{attrs:{dir:"auto"}},[r("v-container",{attrs:{fluid:"","fill-height":""}},[r("v-layout",{attrs:{"align-center":"","justify-center":""}},[r("v-flex",{attrs:{xs12:"",sm8:"",md4:""}},[r("material-card",{attrs:{color:"success",elevation:"12",title:t.$t("RECON_LOGIN"),dark:""}},[r("v-form",{nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.authenticate(e)}}},[r("v-card-text",[r("v-text-field",{attrs:{type:"text","prepend-icon":"person",name:"username",label:t.$t("USERNAME"),placeholder:t.username},model:{value:t.username,callback:function(e){t.username=e},expression:"username"}}),t._v(" "),r("v-text-field",{attrs:{type:"password","prepend-icon":"lock",name:"password",label:t.$t("PASSWORD"),placeholder:t.defaultUserPassword},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1),t._v(" "),r("v-card-actions",[r("v-layout",{attrs:{"justify-center":"","align-center":""}},[r("v-btn",{attrs:{color:"success",disabled:t.isDisabled},on:{click:function(e){return e.preventDefault(),t.authenticate(e)}}},[t._v(t._s(t.$t("LOGIN")))])],1)],1)],1)],1)],1)],1)],1)],1)},[],!1,null,null,null);e.default=component.exports;v()(component,{VBtn:w.a,VCardActions:y.a,VCardText:y.b,VContainer:x.a,VContent:k.a,VFlex:_.a,VForm:V.a,VLayout:O.a,VTextField:$.a})}}]);