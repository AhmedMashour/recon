(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{544:function(t,e,r){var n=r(20),meta=r(280).onFreeze;r(281)("freeze",(function(t){return function(e){return t&&n(e)?t(meta(e)):e}}))},548:function(t,e,r){"use strict";function n(t){return function(t){if(Array.isArray(t)){for(var i=0,e=new Array(t.length);i<t.length;i++)e[i]=t[i];return e}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}r.d(e,"a",(function(){return n}))},694:function(t,e,r){"use strict";var n=r(703),o=r.n(n),c={props:{images:{type:Array},rebuild:{type:Boolean,default:!1},trigger:{},options:{type:Object}},data:function(){return{}},computed:{},methods:{onChange:function(){this.rebuild?this.rebuildViewer():this.updateViewer()},rebuildViewer:function(){this.destroyViewer(),this.createViewer()},updateViewer:function(){this.$viewer?(this.$viewer.update(),this.$emit("inited",this.$viewer)):this.createViewer()},destroyViewer:function(){this.$viewer&&this.$viewer.destroy()},createViewer:function(){this.$viewer=new o.a(this.$el,this.options),this.$emit("inited",this.$viewer)}},watch:{images:function(){var t=this;this.$nextTick((function(){t.onChange()}))},trigger:{handler:function(){var t=this;this.$nextTick((function(){t.onChange()}))},deep:!0},options:{handler:function(){var t=this;this.$nextTick((function(){t.rebuildViewer()}))},deep:!0}},mounted:function(){this.createViewer()},destroyed:function(){this.destroyViewer()}},l=r(4),component=Object(l.a)(c,(function(){var t=this.$createElement;return(this._self._c||t)("div",[this._t("default",null,{images:this.images,options:this.options})],2)}),[],!1,null,null,null);e.a=component.exports},778:function(t,e,r){var map={"./air_conditioning.svg":712,"./bathroom.svg":713,"./bathtub.svg":714,"./bed.svg":715,"./butane.svg":716,"./closet.svg":717,"./coffe_machine.svg":718,"./desk.svg":719,"./dishwasher.svg":720,"./fridge.svg":721,"./garage.svg":722,"./heater.svg":723,"./microwave.svg":724,"./tv.svg":725,"./washing_machine.svg":726,"./wifi.svg":727};function n(t){var e=o(t);return r(e)}function o(t){if(!r.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}n.keys=function(){return Object.keys(map)},n.resolve=o,t.exports=n,n.id=778},783:function(t,e,r){"use strict";r.r(e);r(46);var n,o,c,l=r(7),d=r(540),v=r.n(d),_=r(14),m=(r(547),r(543)),f={data:function(){return{checked:!1,unAvailableTimes:[],data:{date:"",code:""},form:{date1:"",date2:"",code:""},validRangeTime:!1,rate:3,Toast:v.a.mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:3e3})}},created:(c=Object(l.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return Object(_.b)(),t.next=3,this.loadData(!0);case 3:case"end":return t.stop()}}),t,this)}))),function(){return c.apply(this,arguments)}),methods:{rentTermsDialog:function(){this.$store.commit("rentTermsDialog",!0)},reserveNow:(o=Object(l.a)(regeneratorRuntime.mark((function t(){var e,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(this.validRangeTime){t.next=3;break}return m.a.fire({icon:"error",title:"من فضلك اختر فترة زمنية غير مشغولة"}),t.abrupt("return",!1);case 3:if(this.checked){t.next=6;break}return m.a.fire({icon:"error",title:"يجب الموافقة على جميع الشروط و سياسات الموقع"}),t.abrupt("return",!1);case 6:return e=+this.data.date[0],r=+this.data.date[1],t.prev=8,t.next=11,_.a.post("unit-reservation/reservation/",{from:e,to:r,unit:this.$route.params.id});case 11:t.sent.data&&(this.Toast.fire({icon:"success",title:"تم حجز الوحدة بنحاج"}),location&&(location.href="/units")),t.next=19;break;case 15:t.prev=15,t.t0=t.catch(8),this.Toast.fire({icon:"error",title:"خطأ في حجز الوحدة"}),location&&(location.href="/units");case 19:case"end":return t.stop()}}),t,this,[[8,15]])}))),function(){return o.apply(this,arguments)}),changeValue:function(t){for(var e=+t[0],r=+t[1],n=!0,i=0;i<this.unAvailableTimes.length;i++){var time=this.unAvailableTimes[i];if(e<time.to&&time.from<r){n=!1;break}}this.validRangeTime=n},disabledDate:function(time){var t=this.unAvailableTimes,e=!0,r=time.getTime();if(r<+new Date)return!0;for(var i=0;i<t.length;i++){var n=t[i];if(!(r<n.from||r>n.to)){e=!1;break}}return!e},loadData:(n=Object(l.a)(regeneratorRuntime.mark((function t(){var path,e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,path="unit-reservation/reservation/un-available-times/".concat(this.$route.params.id),t.next=4,_.a.get(path);case 4:e=t.sent,this.unAvailableTimes=e.data.result,t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,this,[[0,8]])}))),function(){return n.apply(this,arguments)})}},h=r(4),component=Object(h.a)(f,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"unit-details__form"},[r("el-form",{ref:"form",attrs:{model:t.form}},[r("el-form-item",[r("el-date-picker",{attrs:{"picker-options":{disabledDate:t.disabledDate},type:"daterange","range-separator":"","start-placeholder":"بدأ الحجز  من","end-placeholder":"الحجز الي"},on:{change:t.changeValue},model:{value:t.data.date,callback:function(e){t.$set(t.data,"date",e)},expression:"data.date"}})],1),t._v(" "),r("el-form-item",[r("el-input",{attrs:{placeholder:"كود الخصم (ان وجد)"},model:{value:t.data.code,callback:function(e){t.$set(t.data,"code",e)},expression:"data.code"}})],1),t._v(" "),r("el-form-item",{staticStyle:{"padding-left":"5px","padding-right":"5px","margin-bottom":"0px"}},[r("el-row",{staticClass:"check-terms",staticStyle:{"margin-bottom":"5px"},attrs:{gutter:10,dir:"rtl"}},[r("el-checkbox",{staticStyle:{display:"block",float:"right"},model:{value:t.checked,callback:function(e){t.checked=e},expression:"checked"}}),t._v(" "),r("span",{staticStyle:{"margin-right":"1rem"}},[t._v("\n          أوافق على\n          "),r("span",{staticClass:"signup-field_checkbox-text",on:{click:t.rentTermsDialog}},[t._v("عقد الايجار")])])],1)],1),t._v(" "),r("el-form-item",[r("el-button",{staticClass:"btn",attrs:{disabled:!t.checked,type:"primary"},on:{click:t.reserveNow}},[t._v("احجز الان")])],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports},904:function(t,e,r){"use strict";r.r(e);var n,o,c,l,d=r(548),v=(r(46),r(7)),component=(r(702),r(694)),_=r(540),m=r.n(_),f=r(14),h=r(543),w=r(539),k=r(697),C=r(783),x=(r(547),{components:{unitCard:k.a,ReservationForm:C.default,Viewer:component.a},data:function(){return{RoomImages:[],fullscreenLoading:!1,Options:{inline:!1,button:!0,navbar:!0,title:!1,toolbar:!0,tooltip:!0,movable:!0,zoomable:!0,rotatable:!0,scalable:!0,transition:!0,fullscreen:!0,keyboard:!0,url:"data-source"},unitId:this.$route.params.id,loading:!1,unAvailableTimes:[{from:15850872e5,to:15855192e5}],validRangeTime:!1,rate:3,Toast:m.a.mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:3e3}),addFavs:!1}},asyncData:(l=Object(v.a)(regeneratorRuntime.mark((function t(e){var r,n,o,path,c,data;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.params,n=e.redirect,o=e.app,t.prev=1,Object(f.b)(o.$cookies.get("sknToken")),path="units/unit/".concat(r.id),t.next=6,f.a.get(path);case 6:if(c=t.sent,data=c.data){t.next=10;break}return t.abrupt("return",{unit:{},error:"unable to find unit"});case 10:return t.abrupt("return",{unit:Object(w.c)(data.unit)});case 13:t.prev=13,t.t0=t.catch(1),n("/units");case 16:case"end":return t.stop()}}),t,null,[[1,13]])}))),function(t){return l.apply(this,arguments)}),methods:{getProperLanguage:h.c,getServiceText:w.a,inited:function(t){this.$viewer=t},show:function(){var t=this;this.RoomImages=[],this.fullscreenLoading=!0,setTimeout((function(){var e;t.RoomImages.push(t.unit.image),(e=t.RoomImages).push.apply(e,Object(d.a)(t.unit.gallery)),console.log(t.RoomImages),t.$viewer.show(),t.fullscreenLoading=!1}),2e3)},addFav:(c=Object(v.a)(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!this.updating){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,this.updateFavorite("post",e);case 4:t.sent.success&&(this.unit.favorite=!this.unit.favorite);case 6:case"end":return t.stop()}}),t,this)}))),function(t){return c.apply(this,arguments)}),removeFav:(o=Object(v.a)(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!this.updating){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,this.updateFavorite("delete",e);case 4:t.sent.success&&(this.unit.favorite=!this.unit.favorite);case 6:case"end":return t.stop()}}),t,this)}))),function(t){return o.apply(this,arguments)}),updateFavorite:(n=Object(v.a)(regeneratorRuntime.mark((function t(e,r,n){var path,o,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,this.updating=!0,path="users/favorite/units/".concat(r),o="delete"===e?e:"post",t.next=6,f.a[o](path);case 6:return c=t.sent,this.updating=!1,t.abrupt("return",{success:!0,message:c.data.message});case 11:return t.prev=11,t.t0=t.catch(0),this.updating=!1,h.a&&h.a.fire({icon:"error",title:t.t0.response.data.message}),t.abrupt("return",{});case 16:case"end":return t.stop()}}),t,this,[[0,11]])}))),function(t,e,r){return n.apply(this,arguments)})}}),y=r(4),R=Object(y.a)(x,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"unit-details u-container"},[n("el-row",{attrs:{gutter:10}},[n("el-col",{attrs:{xs:24,sm:24,md:7,lg:6,xl:6}},[t.unit.available?n("div",{staticClass:"skn-alert"},[n("img",{attrs:{src:r(545),alt:"info"}}),t._v(" "),n("p",[t._v("هذا المسكن "+t._s(t.unit.available?"":"غير")+" متاح للحجز")])]):t._e(),t._v(" "),n("ReservationForm"),t._v(" "),n("div",{staticClass:"unit-details__condations"},[n("div",{staticClass:"unit-details__condations-title"},[t._v("شروط مالك الوحدة")]),t._v(" "),n("ul",{staticClass:"unit-details__condations-list"},t._l(t.unit.conditions,(function(e,r){return n("li",{key:"condition"+r},[t._v("\n            "+t._s(e)+"\n          ")])})),0)])],1),t._v(" "),n("el-col",{attrs:{xs:24,sm:24,md:17,lg:18,xl:18}},[n("div",{staticClass:"unit-details__carousel"},[n("el-row",{attrs:{gutter:10}},[n("el-col",{attrs:{xs:24,sm:24,md:17,lg:18,xl:18}},[n("div",{staticClass:"unit-details__horizontal-carousel"},[n("div",{directives:[{name:"loading",rawName:"v-loading.fullscreen.lock",value:t.fullscreenLoading,expression:"fullscreenLoading",modifiers:{fullscreen:!0,lock:!0}}],staticClass:"el-carousel__item",style:{backgroundImage:"url('"+encodeURI(t.unit.image)+"')"},on:{click:t.show}})])]),t._v(" "),n("el-col",{attrs:{xs:24,sm:24,md:7,lg:6,xl:6}},[n("div",{staticClass:"unit-details__vertical-carousel"},t._l(t.unit.gallery,(function(e,r){return n("div",{directives:[{name:"loading",rawName:"v-loading.fullscreen.lock",value:t.fullscreenLoading,expression:"fullscreenLoading",modifiers:{fullscreen:!0,lock:!0}}],key:r+"-galleryImage",staticClass:"el-carousel__item",style:{backgroundImage:"url('"+encodeURI(e)+"')"},on:{click:t.show}})})),0)])],1)],1),t._v(" "),n("div",{staticClass:"unit-details__header"},[n("div",{staticClass:"unit-details__price"},[n("span",[n("i",{staticClass:"el-icon-warning-outline"}),t._v(" ج.م/"+t._s(t.unit.dailyOrMonthly)+"\n          ")]),t._v("\n          "+t._s(t.unit.pricePerPerson)+"\n        ")]),t._v(" "),n("div",{staticClass:"unit-details__header-actions"},[n("div",{staticClass:"unit-details__share"},[n("img",{attrs:{src:r(728),alt:""}})]),t._v(" "),t.unit.displayFavorite?n("div",{staticClass:"unit-details__like",on:{click:function(e){t.unit.favorite?t.removeFav(t.unit._id):t.addFav(t.unit._id)}}},[t.unit.favorite?t._e():n("img",{attrs:{src:r(711),alt:""}}),t._v(" "),t.unit.favorite?n("img",{attrs:{src:r(682),alt:""}}):t._e()]):t._e()]),t._v(" "),n("div",{staticClass:"unit-details__header-title"},[t._v("\n          "+t._s(t.unit.address.street)+"\n          "),n("span",{staticClass:"unit-details__header-city"},[t._v("\n            ,"+t._s(t.unit.address.government)+"\n          ")])])]),t._v(" "),n("div",{staticClass:"unit-details__rate"},[n("div",{staticClass:"unit-details__rate-users"},[n("span",[t._v(t._s(t.unit.totalUsersRated))]),t._v(" "),n("span",{staticClass:"word"},[t._v(" مستخدم ")])]),t._v(" "),n("div",{staticClass:"rate"},[n("el-rate",{attrs:{disabled:"","text-color":"#ff9900"},model:{value:t.unit.rate,callback:function(e){t.$set(t.unit,"rate",e)},expression:"unit.rate"}})],1)]),t._v(" "),t.unit.alert?n("div",{staticClass:"unit-details__alert"},[n("div",{staticClass:"skn-alert"},[n("img",{attrs:{src:r(545),alt:"info"}}),t._v(" "),n("p",[t._v("\n            "+t._s(t.unit.alert||"")+"\n          ")])])]):t._e(),t._v(" "),n("div",{staticClass:"unit-details__discretion"},[n("h4",{staticClass:"unit-details__title"},[t._v("وصف السكن")]),t._v(" "),n("p",[t._v("\n          "+t._s(t.unit.description)+"\n        ")])]),t._v(" "),n("div",{staticClass:"unit-details__contain"},[n("h4",{staticClass:"unit-details__title"},[t._v("محتويات السكن")]),t._v(" "),n("el-row",[n("el-col",{attrs:{span:8}},[n("div",{staticClass:"unit-card__feature"},[n("img",{staticClass:"unit-card__feature-img",attrs:{src:r(680),alt:""}}),t._v(" "),n("div",{staticClass:"unit-card__feature-name"},[n("span",[t._v(t._s(t.unit.availableCountNow))]),t._v(" متاح\n              ")])])]),t._v(" "),n("el-col",{attrs:{span:8}},[n("div",{staticClass:"unit-card__feature"},[n("img",{staticClass:"unit-card__feature-img",attrs:{src:r(681),alt:""}}),t._v(" "),n("div",{staticClass:"unit-card__feature-name"},[n("span",[t._v(t._s(t.unit.numberOfRooms))]),t._v("\n                "+t._s(t.getProperLanguage("rooms",t.unit.numberOfRooms))+"\n              ")])])]),t._v(" "),n("el-col",{attrs:{span:8}},[n("div",{staticClass:"unit-card__feature"},[n("img",{staticClass:"unit-card__feature-img",attrs:{src:r(730),alt:""}}),t._v(" "),n("div",{staticClass:"unit-card__feature-name"},[n("span",[t._v(t._s(t.unit.numberOfPeople))]),t._v("\n                "+t._s(t.getProperLanguage("people",t.unit.numberOfPeople))+"\n              ")])])]),t._v(" "),n("el-col",{attrs:{span:8}},[t._v("\n             \n          ")]),t._v(" "),n("el-col",{attrs:{span:8}},[n("div",{staticClass:"unit-card__feature"},[n("img",{staticClass:"unit-card__feature-img",attrs:{src:r(780)("./"+(t.unit.rentersIcon||"boys")+".svg"),alt:""}}),t._v(" "),n("div",{staticClass:"unit-card__feature-name"},[t._v("\n                "+t._s(t.unit.rentersType)+"\n              ")])])]),t._v(" "),n("el-col",{attrs:{span:8}},[n("div",{staticClass:"unit-card__feature"},[n("img",{staticClass:"unit-card__feature-img",attrs:{src:r(738),alt:""}}),t._v(" "),n("div",{staticClass:"unit-card__feature-name"},[t._v("مفروش")])])])],1)],1),t._v(" "),n("div",{staticClass:"unit-details__features"},[n("h4",{staticClass:"unit-details__title"},[t._v("مميزات السكن")]),t._v(" "),n("el-row",{attrs:{gutter:20}},t._l(t.unit.services,(function(e,o){return n("el-col",{key:"services"+o,staticClass:"u-col-rtl",attrs:{span:3,xs:6,sm:6,md:3,lg:3,xl:3}},[n("div",{staticClass:"unit-details__feature"},[n("img",{attrs:{src:r(778)("./"+e+".svg"),alt:e}}),t._v(" "),n("h6",[t._v(t._s(t.getServiceText(e)))])])])})),1)],1)])],1),t._v(" "),t.unit.similarUnits&&t.unit.similarUnits.length?n("div",{staticClass:"unit-details__similar"},[n("h4",{staticClass:"unit-details__title"},[t._v("سكن مشابه")]),t._v(" "),n("el-row",{attrs:{gutter:30}},t._l(t.unit.similarUnits,(function(t,e){return n("el-col",{key:"similar"+e,staticClass:"u-col-rtl",attrs:{xs:24,sm:24,md:8,lg:6,xl:6}},[n("unitCard",{attrs:{unit:t,backgroundurl:t.image,"go-to":"/unitDetails/"+t._id,state:"availableRent"}})],1)})),1)],1):t._e(),t._v(" "),n("viewer",{ref:"viewer",staticClass:"viewer",attrs:{options:t.Options,images:t.RoomImages},on:{inited:t.inited},scopedSlots:t._u([{key:"default",fn:function(e){return t._l(e.images,(function(t){return n("img",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],key:t,attrs:{src:t}})}))}}])})],1)}),[],!1,null,null,null);e.default=R.exports}}]);