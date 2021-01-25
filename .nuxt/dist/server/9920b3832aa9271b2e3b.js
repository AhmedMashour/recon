exports.ids=[34],exports.modules={260:function(t,e,r){var content=r(272);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);var n=r(5).default;t.exports.__inject__=function(t){n("f7e6f252",content,!0,t)}},261:function(t,e,r){var content=r(274);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);var n=r(5).default;t.exports.__inject__=function(t){n("e6ed15ac",content,!0,t)}},263:function(t,e,r){"use strict";var n={props:{fullWidth:{type:Boolean,default:!1},offset:{type:[Number,String],default:0}},computed:{classes(){return{"v-offset--full-width":this.fullWidth}},styles(){return{top:`-${this.offset}px`,marginBottom:`-${this.offset}px`}}}},l=r(10);var o={inheritAttrs:!1,components:{helperOffset:Object(l.a)(n,function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"v-offset",class:this.classes,style:this.styles},[this._t("default")],2)},[],!1,function(t){var e=r(271);e.__inject__&&e.__inject__(t)},null,"2cf0020d").exports},props:{color:{type:String,default:"secondary"},elevation:{type:[Number,String],default:10},inline:{type:Boolean,default:!1},fullWidth:{type:Boolean,default:!1},offset:{type:[Number,String],default:24},title:{type:String,default:void 0},text:{type:String,default:void 0},headerAction:{type:String,default:void 0}},methods:{close(){this.$emit("close")}},computed:{hasOffset(){return this.$slots.header||this.$slots.offset||this.title||this.text},styles(){return this.hasOffset?{marginBottom:`${this.offset}px`,marginTop:`${2*this.offset}px`}:null}}},c=r(12),d=r.n(c),f=r(246),v=r(301),h=r(248),m=r(72);var _=Object(l.a)(o,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",t._g(t._b({style:t.styles},"v-card",t.$attrs,!1),t.$listeners),[t.hasOffset?r("helper-offset",{attrs:{inline:t.inline,"full-width":t.fullWidth,offset:t.offset}},[t.$slots.offset?t._t("offset"):r("v-card",{staticClass:"v-card--material__header",class:"elevation-"+t.elevation,attrs:{color:t.color,dark:""}},[t.headerAction&&"close"===t.headerAction?r("v-icon",{staticClass:"mr-2 close",attrs:{small:""},on:{click:t.close}},[t._v("\n        mdi-close\n      ")]):t._e(),t._v(" "),t.title||t.text?r("span",[r("h4",{staticClass:"title font-weight-light mb-2",domProps:{textContent:t._s(t.title)}}),t._v(" "),r("p",{staticClass:"category font-weight-thin",domProps:{textContent:t._s(t.text)}})]):t._t("header")],2)],2):t._e(),t._v(" "),r("v-card-text",[t._t("default")],2),t._v(" "),t.$slots.actions?r("v-divider",{staticClass:"mx-3"}):t._e(),t._v(" "),t.$slots.actions?r("v-card-actions",[t._t("actions")],2):t._e()],1)},[],!1,function(t){var e=r(273);e.__inject__&&e.__inject__(t)},null,"70552ac3");e.a=_.exports;d()(_,{VCard:f.a,VCardActions:v.a,VCardText:v.b,VDivider:h.a,VIcon:m.a})},264:function(t,e,r){"use strict";var n=r(0),l=r.n(n);e.a=l.a.extend({name:"v-card-title",functional:!0,props:{primaryTitle:Boolean},render:function(t,e){var data=e.data,r=e.props,n=e.children;return data.staticClass=("v-card__title "+(data.staticClass||"")).trim(),r.primaryTitle&&(data.staticClass+=" v-card__title--primary"),t("div",data,n)}})},271:function(t,e,r){"use strict";r.r(e);var n=r(260),l=r.n(n);for(var o in n)"default"!==o&&function(t){r.d(e,t,function(){return n[t]})}(o);e.default=l.a},272:function(t,e,r){(t.exports=r(4)(!1)).push([t.i,".v-offset{margin:0 auto;position:relative}.v-offset--full-width{max-width:100%}.add-button{margin-right:39%;margin-left:50%;width:130px;height:30px;border-radius:25px!important}",""])},273:function(t,e,r){"use strict";r.r(e);var n=r(261),l=r.n(n);for(var o in n)"default"!==o&&function(t){r.d(e,t,function(){return n[t]})}(o);e.default=l.a},274:function(t,e,r){(t.exports=r(4)(!1)).push([t.i,".v-card--material__header.v-card{border-radius:4px}",""])},277:function(t,e,r){var content=r(278);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals),r(5).default("08d4b84c",content,!0)},278:function(t,e,r){(t.exports=r(4)(!1)).push([t.i,".v-form>.container{padding:16px}.v-form>.container>.layout>.flex{padding:8px}.v-form>.container>.layout:only-child{margin:-8px}.v-form>.container>.layout:not(:only-child){margin:auto -8px}",""])},301:function(t,e,r){"use strict";var n=r(1),l=r(246),o=r(250),c=r(8),d=o.a.extend({name:"v-card-media",mounted:function(){Object(c.d)("v-card-media",this.src?"v-img":"v-responsive",this)}}),f=r(264);r.d(e,"a",function(){return v}),r.d(e,"b",function(){return h});var v=Object(n.f)("v-card__actions"),h=Object(n.f)("v-card__text");l.a,f.a},306:function(t,e,r){"use strict";r(277);var n=r(16);e.a={name:"v-form",mixins:[Object(n.b)("form")],inheritAttrs:!1,props:{value:Boolean,lazyValidation:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(){var t=Object.values(this.errorBag).includes(!0);this.$emit("input",!t)},deep:!0,immediate:!0}},methods:{watchInput:function(input){var t=this,e=function(input){return input.$watch("hasError",function(e){t.$set(t.errorBag,input._uid,e)},{immediate:!0})},r={_uid:input._uid,valid:void 0,shouldValidate:void 0};return this.lazyValidation?r.shouldValidate=input.$watch("shouldValidate",function(n){n&&(t.errorBag.hasOwnProperty(input._uid)||(r.valid=e(input)))}):r.valid=e(input),r},validate:function(){return!this.inputs.filter(function(input){return!input.validate(!0)}).length},reset:function(){for(var t=this,i=this.inputs.length;i--;)this.inputs[i].reset();this.lazyValidation&&setTimeout(function(){t.errorBag={}},0)},resetValidation:function(){for(var t=this,i=this.inputs.length;i--;)this.inputs[i].resetValidation();this.lazyValidation&&setTimeout(function(){t.errorBag={}},0)},register:function(input){var t=this.watchInput(input);this.inputs.push(input),this.watchers.push(t)},unregister:function(input){var t=this.inputs.find(function(i){return i._uid===input._uid});if(t){var e=this.watchers.find(function(i){return i._uid===t._uid});e.valid&&e.valid(),e.shouldValidate&&e.shouldValidate(),this.watchers=this.watchers.filter(function(i){return i._uid!==t._uid}),this.inputs=this.inputs.filter(function(i){return i._uid!==t._uid}),this.$delete(this.errorBag,t._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:Object.assign({novalidate:!0},this.$attrs),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}}},349:function(t,e,r){t.exports=r.p+"img/69ea9f9.jpg"},362:function(t,e,r){"use strict";r.r(e);var n=r(11),l={layout:"dashboard",components:{materialCard:r(263).a},computed:{...Object(n.mapGetters)({user:"app/getUser",fullname:"user/getFullname"})}},o=r(10),c=r(12),d=r.n(c),f=r(62),v=r(71),h=r(301),m=r(63),_=r(64),x=r(306),y=r(65),C=r(259),w=r(105),component=Object(o.a)(l,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{attrs:{"fill-height":"",fluid:"","grid-list-xl":""}},[n("v-layout",{attrs:{"justify-center":"",wrap:""}},[n("v-flex",{attrs:{xs12:"",md8:""}},[n("material-card",{attrs:{color:"green",title:"Edit Profile",text:"Complete your profile"}},[n("v-form",[n("v-container",{attrs:{"py-0":""}},[n("v-layout",{attrs:{wrap:""}},[n("v-flex",{attrs:{xs12:"",md4:""}},[n("v-text-field",{attrs:{label:"Company (disabled)",disabled:""}})],1),t._v(" "),n("v-flex",{attrs:{xs12:"",md4:""}},[n("v-text-field",{staticClass:"purple-input",attrs:{label:"User Name"}})],1),t._v(" "),n("v-flex",{attrs:{xs12:"",md4:""}},[n("v-text-field",{staticClass:"purple-input",attrs:{label:"Email Address"}})],1),t._v(" "),n("v-flex",{attrs:{xs12:"",md6:""}},[n("v-text-field",{staticClass:"purple-input",attrs:{label:"First Name"}})],1),t._v(" "),n("v-flex",{attrs:{xs12:"",md6:""}},[n("v-text-field",{staticClass:"purple-input",attrs:{label:"Last Name"}})],1),t._v(" "),n("v-flex",{attrs:{xs12:"",md12:""}},[n("v-text-field",{staticClass:"purple-input",attrs:{label:"Adress"}})],1),t._v(" "),n("v-flex",{attrs:{xs12:"",md4:""}},[n("v-text-field",{staticClass:"purple-input",attrs:{label:"City"}})],1),t._v(" "),n("v-flex",{attrs:{xs12:"",md4:""}},[n("v-text-field",{staticClass:"purple-input",attrs:{label:"Country"}})],1),t._v(" "),n("v-flex",{attrs:{xs12:"",md4:""}},[n("v-text-field",{staticClass:"purple-input",attrs:{label:"Postal Code",type:"number"}})],1),t._v(" "),n("v-flex",{attrs:{xs12:""}},[n("v-textarea",{staticClass:"purple-input",attrs:{label:"About Me",value:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}})],1),t._v(" "),n("v-flex",{attrs:{xs12:"","text-xs-right":""}},[n("v-btn",{staticClass:"mx-0 font-weight-light",attrs:{color:"success"}},[t._v("\n                  Update Profile\n                ")])],1)],1)],1)],1)],1)],1),t._v(" "),n("v-flex",{attrs:{xs12:"",md4:""}},[n("material-card",{staticClass:"v-card-profile"},[n("v-avatar",{staticClass:"mx-auto d-block",attrs:{slot:"offset",size:"130"},slot:"offset"},[n("img",{attrs:{src:r(349)}})]),t._v(" "),n("v-card-text",{staticClass:"text-xs-center"},[n("h6",{staticClass:"category text-gray font-weight-thin mb-3"},[t._v("\n            "+t._s(t.user.function)+"\n          ")]),t._v(" "),n("h4",{staticClass:"card-title font-weight-light"},[t._v(t._s(t.fullname))]),t._v(" "),n("p",{staticClass:"card-description font-weight-light"},[t._v("\n            "+t._s(t.user.description)+"\n          ")]),t._v(" "),n("blockquote",{staticClass:"blockquote"},[t._v(t._s(t.user.citation))]),t._v(" "),n("v-btn",{staticClass:"font-weight-light",attrs:{color:"success",round:""}},[t._v("Follow")])],1)],1)],1)],1)],1)},[],!1,null,null,"ebbd84e4");e.default=component.exports;d()(component,{VAvatar:f.a,VBtn:v.a,VCardText:h.b,VContainer:m.a,VFlex:_.a,VForm:x.a,VLayout:y.a,VTextField:C.a,VTextarea:w.a})}};
//# sourceMappingURL=9920b3832aa9271b2e3b.js.map