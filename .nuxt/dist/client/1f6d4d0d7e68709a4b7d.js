(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{576:function(t,n,e){var content=e(581);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(6).default)("f7e6f252",content,!0,{sourceMap:!1})},577:function(t,n,e){var content=e(583);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(6).default)("e6ed15ac",content,!0,{sourceMap:!1})},578:function(t,n,e){"use strict";e(16);var o={props:{fullWidth:{type:Boolean,default:!1},offset:{type:[Number,String],default:0}},computed:{classes:function(){return{"v-offset--full-width":this.fullWidth}},styles:function(){return{top:"-".concat(this.offset,"px"),marginBottom:"-".concat(this.offset,"px")}}}},r=(e(580),e(22)),c={inheritAttrs:!1,components:{helperOffset:Object(r.a)(o,function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"v-offset",class:this.classes,style:this.styles},[this._t("default")],2)},[],!1,null,null,null).exports},props:{color:{type:String,default:"secondary"},elevation:{type:[Number,String],default:10},inline:{type:Boolean,default:!1},fullWidth:{type:Boolean,default:!1},offset:{type:[Number,String],default:24},title:{type:String,default:void 0},text:{type:String,default:void 0},headerAction:{type:String,default:void 0}},methods:{close:function(){this.$emit("close")}},computed:{hasOffset:function(){return this.$slots.header||this.$slots.offset||this.title||this.text},styles:function(){return this.hasOffset?{marginBottom:"".concat(this.offset,"px"),marginTop:"".concat(2*this.offset,"px")}:null}}},l=(e(582),e(34)),v=e.n(l),f=e(562),d=e(736),h=e(564),m=e(185),_=Object(r.a)(c,function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-card",t._g(t._b({style:t.styles},"v-card",t.$attrs,!1),t.$listeners),[t.hasOffset?e("helper-offset",{attrs:{inline:t.inline,"full-width":t.fullWidth,offset:t.offset}},[t.$slots.offset?t._t("offset"):e("v-card",{staticClass:"v-card--material__header",class:"elevation-"+t.elevation,attrs:{color:t.color,dark:""}},[t.headerAction&&"close"===t.headerAction?e("v-icon",{staticClass:"mr-2 close",attrs:{small:""},on:{click:t.close}},[t._v("\n        mdi-close\n      ")]):t._e(),t._v(" "),t.title||t.text?e("span",[e("h4",{staticClass:"title font-weight-light mb-2",domProps:{textContent:t._s(t.title)}}),t._v(" "),e("p",{staticClass:"category font-weight-thin",domProps:{textContent:t._s(t.text)}})]):t._t("header")],2)],2):t._e(),t._v(" "),e("v-card-text",[t._t("default")],2),t._v(" "),t.$slots.actions?e("v-divider",{staticClass:"mx-3"}):t._e(),t._v(" "),t.$slots.actions?e("v-card-actions",[t._t("actions")],2):t._e()],1)},[],!1,null,null,null);n.a=_.exports;v()(_,{VCard:f.a,VCardActions:d.a,VCardText:d.b,VDivider:h.a,VIcon:m.a})},580:function(t,n,e){"use strict";var o=e(576);e.n(o).a},581:function(t,n,e){(t.exports=e(5)(!1)).push([t.i,".v-offset{margin:0 auto;position:relative}.v-offset--full-width{max-width:100%}.add-button{margin-right:39%;margin-left:50%;width:130px;height:30px;border-radius:25px!important}",""])},582:function(t,n,e){"use strict";var o=e(577);e.n(o).a},583:function(t,n,e){(t.exports=e(5)(!1)).push([t.i,".v-card--material__header.v-card{border-radius:4px}",""])},718:function(t,n,e){"use strict";var o=e(0);n.a=o.default.extend({name:"v-card-title",functional:!0,props:{primaryTitle:Boolean},render:function(t,n){var data=n.data,e=n.props,o=n.children;return data.staticClass=("v-card__title "+(data.staticClass||"")).trim(),e.primaryTitle&&(data.staticClass+=" v-card__title--primary"),t("div",data,o)}})},736:function(t,n,e){"use strict";var o=e(1),r=e(562),c=e(563),l=e(14),v=c.a.extend({name:"v-card-media",mounted:function(){Object(l.d)("v-card-media",this.src?"v-img":"v-responsive",this)}}),f=e(718);e.d(n,"a",function(){return d}),e.d(n,"b",function(){return h});var d=Object(o.f)("v-card__actions"),h=Object(o.f)("v-card__text");r.a,f.a},755:function(t,n,e){var content=e(805);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(6).default)("1b9c58d0",content,!0,{sourceMap:!1})},804:function(t,n,e){"use strict";var o=e(755);e.n(o).a},805:function(t,n,e){(t.exports=e(5)(!1)).push([t.i,".v-alert--notification{border-radius:4px!important;border-top:none!important}",""])},806:function(t,n,e){var content=e(807);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(6).default)("0ea34708",content,!0,{sourceMap:!1})},807:function(t,n,e){(t.exports=e(5)(!1)).push([t.i,".v-alert{border-radius:0;border-width:4px 0 0;border-style:solid;color:#fff;display:flex;font-size:14px;margin:4px auto;padding:16px;position:relative;transition:.3s cubic-bezier(.25,.8,.5,1)}.v-alert .v-alert__icon.v-icon,.v-alert__dismissible .v-icon{align-self:center;color:rgba(0,0,0,.3);font-size:24px}.v-alert--outline .v-icon{color:inherit!important}.v-alert__icon{margin-right:16px}.v-alert__dismissible{align-self:flex-start;color:inherit;margin-left:16px;margin-right:0;text-decoration:none;transition:.3s cubic-bezier(.25,.8,.5,1);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-alert__dismissible:hover{opacity:.8}.v-alert--no-icon .v-alert__icon{display:none}.v-alert>div{align-self:center;flex:1 1}@media screen and (max-width:600px){.v-alert__icon{display:none}}.v-alert.v-alert{border-color:rgba(0,0,0,.12)!important}.v-alert.v-alert--outline{border:1px solid!important}",""])},808:function(t,n,e){var content=e(809);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(6).default)("6264767a",content,!0,{sourceMap:!1})},809:function(t,n,e){(t.exports=e(5)(!1)).push([t.i,".application--is-rtl .v-snack__content .v-btn{margin:0 24px 0 0}.v-snack{position:fixed;display:flex;align-items:center;color:#fff;pointer-events:none;z-index:1000;font-size:14px;left:0;right:0}.v-snack--absolute{position:absolute}.v-snack--top{top:0}.v-snack--bottom{bottom:0}.v-snack__wrapper{background-color:#323232;pointer-events:auto;box-shadow:0 3px 5px -1px rgba(0,0,0,.2),0 6px 10px 0 rgba(0,0,0,.14),0 1px 18px 0 rgba(0,0,0,.12)}.v-snack__content,.v-snack__wrapper{display:flex;align-items:center;width:100%}.v-snack__content{height:48px;padding:14px 24px;justify-content:space-between;overflow:hidden}.v-snack__content .v-btn{color:#fff;flex:0 0 auto;padding:8px;margin:0 0 0 24px;height:auto;min-width:auto;width:auto}.v-snack__content .v-btn__content{margin:-2px}.v-snack__content .v-btn:before{display:none}.v-snack--multi-line .v-snack__content{height:80px;padding:24px}.v-snack--vertical .v-snack__content{height:112px;padding:24px 24px 14px;flex-direction:column;align-items:stretch}.v-snack--vertical .v-snack__content .v-btn.v-btn{justify-content:flex-end;padding:0;margin-left:0;margin-top:24px}.v-snack--vertical .v-snack__content .v-btn__content{flex:0 0 auto;margin:0}.v-snack--auto-height .v-snack__content{height:auto}@media only screen and (min-width:600px){.application--is-rtl .v-snack__content .v-btn:first-of-type{margin-left:0;margin-right:42px}}@media only screen and (min-width:600px){.v-snack__wrapper{width:auto;max-width:568px;min-width:288px;margin:0 auto;border-radius:2px}.v-snack--left .v-snack__wrapper{margin-left:0}.v-snack--right .v-snack__wrapper{margin-right:0}.v-snack--left,.v-snack--right{margin:0 24px}.v-snack--left.v-snack--top,.v-snack--right.v-snack--top{-webkit-transform:translateY(24px);transform:translateY(24px)}.v-snack--left.v-snack--bottom,.v-snack--right.v-snack--bottom{-webkit-transform:translateY(-24px);transform:translateY(-24px)}.v-snack__content .v-btn:first-of-type{margin-left:42px}}.v-snack-transition-enter-active,.v-snack-transition-leave-active{transition:-webkit-transform .4s cubic-bezier(.25,.8,.5,1);transition:transform .4s cubic-bezier(.25,.8,.5,1);transition:transform .4s cubic-bezier(.25,.8,.5,1),-webkit-transform .4s cubic-bezier(.25,.8,.5,1)}.v-snack-transition-enter-active .v-snack__content,.v-snack-transition-leave-active .v-snack__content{transition:opacity .3s linear .1s}.v-snack-transition-enter .v-snack__content{opacity:0}.v-snack-transition-enter-to .v-snack__content,.v-snack-transition-leave .v-snack__content{opacity:1}.v-snack-transition-enter.v-snack.v-snack--top,.v-snack-transition-leave-to.v-snack.v-snack--top{-webkit-transform:translateY(calc(-100% - 8px));transform:translateY(calc(-100% - 8px))}.v-snack-transition-enter.v-snack.v-snack--bottom,.v-snack-transition-leave-to.v-snack.v-snack--bottom{-webkit-transform:translateY(100%);transform:translateY(100%)}",""])},820:function(t,n,e){"use strict";e.r(n);var o=e(578),r=(e(16),{inheritAttrs:!1,props:{elevation:{type:[Number,String],default:6},value:{type:Boolean,default:!0}}}),c=(e(804),e(22)),l=e(34),v=e.n(l),f=(e(24),e(35),e(806),e(72)),d=e(15),h=e(53),m=e(0).default.extend({name:"transitionable",props:{mode:String,origin:String,transition:String}}),_=e(4),x=Object(_.a)(d.a,h.a,m).extend({name:"v-alert",props:{dismissible:Boolean,icon:String,outline:Boolean,type:{type:String,validator:function(t){return["info","error","success","warning"].includes(t)}}},computed:{computedColor:function(){return this.type&&!this.color?this.type:this.color||"error"},computedIcon:function(){if(this.icon||!this.type)return this.icon;switch(this.type){case"info":return"$vuetify.icons.info";case"error":return"$vuetify.icons.error";case"success":return"$vuetify.icons.success";case"warning":return"$vuetify.icons.warning"}}},methods:{genIcon:function(){return this.computedIcon?this.$createElement(f.a,{class:"v-alert__icon"},this.computedIcon):null},genDismissible:function(){var t=this;return this.dismissible?this.$createElement("a",{class:"v-alert__dismissible",on:{click:function(){t.isActive=!1}}},[this.$createElement(f.a,{props:{right:!0}},"$vuetify.icons.cancel")]):null}},render:function(t){var n=[this.genIcon(),t("div",this.$slots.default),this.genDismissible()],e=t("div",(this.outline?this.setTextColor:this.setBackgroundColor)(this.computedColor,{staticClass:"v-alert",class:{"v-alert--outline":this.outline},directives:[{name:"show",value:this.isActive}],on:this.$listeners}),n);return this.transition?t("transition",{props:{name:this.transition,origin:this.origin,mode:this.mode}},[e]):e}}),component=Object(c.a)(r,function(){var t=this.$createElement;return(this._self._c||t)("v-alert",this._g(this._b({staticClass:"v-alert--notification",class:["elevation-"+this.elevation],attrs:{value:this.value}},"v-alert",this.$attrs,!1),this.$listeners),[this._t("default")],2)},[],!1,null,null,null),k=component.exports;v()(component,{VAlert:x});var w={layout:"dashboard",components:{materialCard:o.a,materialNotification:k},data:function(){return{color:null,colors:["purple","info","success","warning","error"],top:!0,bottom:!1,left:!1,right:!1,snackbar:!1}},methods:{snack:function(){this.top=!1,this.bottom=!1,this.left=!1,this.right=!1;for(var t=arguments.length,n=new Array(t),e=0;e<t;e++)n[e]=arguments[e];for(var o=0,r=n;o<r.length;o++){this[r[o]]=!0}this.color=this.colors[Math.floor(Math.random()*this.colors.length)],this.snackbar=!0}}},y=e(184),C=e(736),T=e(176),$=e(177),S=e(185),A=e(178),B=(e(808),e(78)),j=Object(_.a)(d.a,h.a,Object(B.b)(["absolute","top","bottom","left","right"])).extend({name:"v-snackbar",props:{autoHeight:Boolean,multiLine:Boolean,timeout:{type:Number,default:6e3},vertical:Boolean},data:function(){return{activeTimeout:-1}},computed:{classes:function(){return{"v-snack--active":this.isActive,"v-snack--absolute":this.absolute,"v-snack--auto-height":this.autoHeight,"v-snack--bottom":this.bottom||!this.top,"v-snack--left":this.left,"v-snack--multi-line":this.multiLine&&!this.vertical,"v-snack--right":this.right,"v-snack--top":this.top,"v-snack--vertical":this.vertical}}},watch:{isActive:function(){this.setTimeout()}},mounted:function(){this.setTimeout()},methods:{setTimeout:function(){var t=this;window.clearTimeout(this.activeTimeout),this.isActive&&this.timeout&&(this.activeTimeout=window.setTimeout(function(){t.isActive=!1},this.timeout))}},render:function(t){return t("transition",{attrs:{name:"v-snack-transition"}},this.isActive&&[t("div",{staticClass:"v-snack",class:this.classes,on:this.$listeners},[t("div",this.setBackgroundColor(this.color,{staticClass:"v-snack__wrapper"}),[t("div",{staticClass:"v-snack__content"},this.$slots.default)])])])}}),O=Object(c.a)(w,function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-container",{attrs:{fluid:"","grid-list-xl":"","fill-height":""}},[e("v-layout",{attrs:{"justify-center":"","align-center":""}},[e("v-flex",{attrs:{xs12:""}},[e("material-card",{attrs:{color:"green"}},[e("div",{attrs:{slot:"header"},slot:"header"},[e("div",{staticClass:"title font-weight-light mb-2"},[t._v("Notifications")]),t._v(" "),e("div",{staticClass:"category"},[t._v("\n            Handcrafted by us with\n            "),e("v-icon",{attrs:{size:"17"}},[t._v("\n              mdi-heart\n            ")])],1)]),t._v(" "),e("v-card-text",[e("v-layout",{attrs:{row:"",wrap:""}},[e("v-flex",{attrs:{md6:"",sm12:""}},[e("h2",{staticClass:"title font-weight-light mb-3"},[t._v("Notifications Style")]),t._v(" "),e("material-notification",{staticClass:"mb-3",attrs:{color:"info"}},[t._v("\n                This is a plain notification\n              ")]),t._v(" "),e("material-notification",{staticClass:"mb-3",attrs:{color:"info",dismissible:""}},[t._v("\n                This is a notification with close button.\n              ")]),t._v(" "),e("material-notification",{staticClass:"mb-3",attrs:{color:"info",dismissible:"",icon:"mdi-bell-plus"}},[t._v("\n\n                This is a notification with close button and icon.\n              ")]),t._v(" "),e("material-notification",{staticClass:"mb-3",attrs:{color:"info",dismissible:"",icon:"mdi-bell-plus"}},[t._v("\n\n                This is a notification with close button and icon and have many lines. You can see that the icon and the close button are always vertically aligned. This is a beautiful notification. So you don't have to worry about the style.\n              ")])],1),t._v(" "),e("v-flex",{attrs:{md6:"",sm12:""}},[e("h2",{staticClass:"title font-weight-light"},[t._v("Notifcation States")]),t._v(" "),e("material-notification",{staticClass:"mb-3",attrs:{color:"info",dismissible:""}},[e("strong",[t._v("INFO")]),t._v(' - This is a regular notification made with `color="info"`\n              ')]),t._v(" "),e("material-notification",{staticClass:"mb-3",attrs:{color:"success",dismissible:""}},[e("strong",[t._v("SUCCESS")]),t._v(' - This is a regular notification made with `color="success"`\n              ')]),t._v(" "),e("material-notification",{staticClass:"mb-3",attrs:{color:"warning",dismissible:""}},[e("strong",[t._v("WARNING")]),t._v(' - This is a regular notification made with `color="warning"`\n              ')]),t._v(" "),e("material-notification",{staticClass:"mb-3",attrs:{color:"error",dismissible:""}},[e("strong",[t._v("DANGER")]),t._v(' - This is a regular notification made with `color="error"`\n              ')]),t._v(" "),e("material-notification",{staticClass:"mb-3",attrs:{color:"purple",dismissible:""}},[e("strong",[t._v("PRIMARY")]),t._v(' - This is a regular notification made with `color="purple"`\n              ')])],1)],1),t._v(" "),e("div",{staticClass:"text-xs-center"},[e("h2",{staticClass:"title font-weight-light mb-2"},[t._v("Notification Places")]),t._v(" "),e("span",{staticClass:" subheading font-weight-light grey--text"},[t._v("Click to view notifications")])]),t._v(" "),e("v-container",{attrs:{"grid-list-lg":""}},[e("v-layout",{attrs:{"justify-center":"",row:"",wrap:""}},[e("v-flex",{attrs:{xs12:"",sm4:""}},[e("v-btn",{attrs:{block:"",color:"success"},on:{click:function(n){return t.snack("top","left")}}},[t._v("\n                  Top Left\n                ")])],1),t._v(" "),e("v-flex",{attrs:{xs12:"",sm4:""}},[e("v-btn",{attrs:{block:"",color:"success"},on:{click:function(n){return t.snack("top")}}},[t._v("\n                  Top Center\n                ")])],1)],1),t._v(" "),e("v-layout",{attrs:{"justify-center":"",row:"",wrap:""}},[e("v-flex",{attrs:{xs12:"",sm4:""}},[e("v-btn",{attrs:{block:"",color:"success"},on:{click:function(n){return t.snack("top","right")}}},[t._v("\n                  Top Right\n                ")])],1),t._v(" "),e("v-flex",{attrs:{xs12:"",sm4:""}},[e("v-btn",{attrs:{block:"",color:"success"},on:{click:function(n){return t.snack("bottom","left")}}},[t._v("\n                  Bottom Left\n                ")])],1)],1),t._v(" "),e("v-layout",{attrs:{"justify-center":"",row:"",wrap:""}},[e("v-flex",{attrs:{xs12:"",sm4:""}},[e("v-btn",{attrs:{block:"",color:"success"},on:{click:function(n){return t.snack("bottom")}}},[t._v("\n                  Bottom Center\n                ")])],1),t._v(" "),e("v-flex",{attrs:{xs12:"",sm4:""}},[e("v-btn",{attrs:{block:"",color:"success"},on:{click:function(n){return t.snack("bottom","right")}}},[t._v("\n                  Bottom Right\n                ")])],1)],1)],1),t._v(" "),e("v-snackbar",{attrs:{color:t.color,bottom:t.bottom,top:t.top,left:t.left,right:t.right,dark:""},model:{value:t.snackbar,callback:function(n){t.snackbar=n},expression:"snackbar"}},[e("v-icon",{staticClass:"mr-3",attrs:{color:"white"}},[t._v("\n              mdi-bell-plus\n            ")]),t._v(" "),e("div",[t._v("Welcome to "),e("b",[t._v("Vue Material Dashboard")]),t._v(" - a beautiful freebie for every web developer.")]),t._v(" "),e("v-icon",{attrs:{size:"16"},on:{click:function(n){t.snackbar=!1}}},[t._v("\n              mdi-close-circle\n            ")])],1)],1)],1)],1)],1)],1)},[],!1,null,null,null);n.default=O.exports;v()(O,{VBtn:y.a,VCardText:C.b,VContainer:T.a,VFlex:$.a,VIcon:S.a,VLayout:A.a,VSnackbar:j})}}]);