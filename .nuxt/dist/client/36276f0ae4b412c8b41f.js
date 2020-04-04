(window.webpackJsonp=window.webpackJsonp||[]).push([[33,34],{351:function(t,e){t.exports=[{value:"Alexandria",label:"الإسكندرية"},{value:"Ismailia",label:"الإسماعيلية"},{value:"Aswan",label:"أسوان"},{value:"Asyut",label:"أسيوط"},{value:"Luxor",label:"الأقصر"},{value:"Red Sea",label:"البحر الأحمر"},{value:"El Beheira",label:"البحيرة"},{value:"Beni Suef",label:"بني سويف"},{value:"Port Said",label:"بورسعيد"},{value:"South Sinai",label:"جنوب سيناء"},{value:"Giza",label:"الجيزة"},{value:"Dakahlia",label:"الدقهلية"},{value:"Damietta",label:"دمياط"},{value:"Sohag",label:"سوهاج"},{value:"Suez",label:"السويس"},{value:"Ash Sharqia",label:"الشرقية"},{value:"North Sinai",label:"شمال سيناء"},{value:"Gharbia",label:"الغربية"},{value:"Faiyum",label:"الفيوم"},{value:"Cairo",label:"القاهرة"},{value:"Al Qalyubia",label:"القليوبية"},{value:"Qena",label:"قنا"},{value:"Kafr El Sheikh",label:"كفر الشيخ"},{value:"Marsa Matruh",label:"مرسى مطروح"},{value:"Menofia",label:"المنوفية"},{value:"Minya",label:"المنيا"},{value:"New Valley",label:"الوادي الجديد"}]},568:function(t,e,n){var map={"./air_conditioning.svg":518,"./bathroom.svg":519,"./bathtub.svg":520,"./bed.svg":521,"./butane.svg":522,"./closet.svg":523,"./coffe_machine.svg":524,"./desk.svg":525,"./dishwasher.svg":526,"./fridge.svg":527,"./garage.svg":528,"./heater.svg":529,"./microwave.svg":530,"./tv.svg":531,"./washing_machine.svg":532,"./wifi.svg":533};function r(t){var e=l(t);return n(e)}function l(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}r.keys=function(){return Object.keys(map)},r.resolve=l,t.exports=r,r.id=568},580:function(t,e,n){"use strict";n.r(e);n(58);var r,l,o,c=n(6),v=n(352),d=n.n(v),_=n(16),m=(n(353),{data:function(){return{unAvailableTimes:[],data:{date:"",code:""},validRangeTime:!1,rate:3,Toast:d.a.mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:3e3})}},created:(o=Object(c.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return Object(_.b)(),t.next=3,this.loadData(!0);case 3:case"end":return t.stop()}}),t,this)}))),function(){return o.apply(this,arguments)}),methods:{reserveNow:(l=Object(c.a)(regeneratorRuntime.mark((function t(){var e,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(this.validRangeTime){t.next=4;break}this.Toast.fire({icon:"error",title:"من فضلك اختر فترة زمنية غير مشغولة"}),t.next=17;break;case 4:return e=+this.data.date[0],n=+this.data.date[1],t.prev=6,t.next=9,_.a.post("unit-reservation/reservation/",{from:e,to:n,unit:this.$route.params.id});case 9:t.sent.data&&(this.Toast.fire({icon:"success",title:"تم حجز الوحدة بنحاج"}),this.$route.push("/units")),t.next=17;break;case 13:t.prev=13,t.t0=t.catch(6),this.Toast.fire({icon:"error",title:"خطأ في حجز الوحدة"}),this.$route.push("/units");case 17:case"end":return t.stop()}}),t,this,[[6,13]])}))),function(){return l.apply(this,arguments)}),changeValue:function(t){for(var e=+t[0],n=+t[1],r=!0,i=0;i<this.unAvailableTimes.length;i++){var time=this.unAvailableTimes[i];if(e<time.to&&time.from<n){r=!1;break}}this.validRangeTime=r},disabledDate:function(time){var t=this.unAvailableTimes,e=!0,n=time.getTime();if(n<+new Date)return!0;for(var i=0;i<t.length;i++){var r=t[i];if(!(n<r.from||n>r.to)){e=!1;break}}return!e},loadData:(r=Object(c.a)(regeneratorRuntime.mark((function t(){var path,e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,path="unit-reservation/reservation/un-available-times/".concat(this.$route.params.id),t.next=4,_.a.get(path);case 4:e=t.sent,this.unAvailableTimes=e.data.result,t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,this,[[0,8]])}))),function(){return r.apply(this,arguments)})}}),f=n(3),component=Object(f.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"unit-details__form"},[n("el-form",{ref:"form",attrs:{model:t.form}},[n("el-form-item",[n("el-date-picker",{attrs:{"picker-options":{disabledDate:t.disabledDate},size:"mini",type:"daterange","range-separator":"","start-placeholder":"بدأ الحجز  من","end-placeholder":"الحجز الي"},on:{change:t.changeValue},model:{value:t.data.date,callback:function(e){t.$set(t.data,"date",e)},expression:"data.date"}})],1),t._v(" "),n("el-form-item",[n("el-input",{attrs:{placeholder:"كود الخصم (ان وجد)"},model:{value:t.data.code,callback:function(e){t.$set(t.data,"code",e)},expression:"data.code"}})],1),t._v(" "),n("el-form-item",[n("el-button",{staticClass:"btn",attrs:{type:"primary"},on:{click:t.reserveNow}},[t._v("احجز الان")])],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports},677:function(t,e,n){"use strict";n.r(e);n(58);var r,l=n(6),o=n(352),c=n.n(o),v=n(16),d=n(501),_=n(491),m=n(351),f=n.n(m),h=n(502),C=n(580),k=(n(353),{components:{unitCard:h.a,ReservationForm:C.default},data:function(){return{unitId:this.$route.params.id,loading:!1,unAvailableTimes:[{from:15850872e5,to:15855192e5}],form:{date1:"",date2:"",code:""},validRangeTime:!1,rate:3,Toast:c.a.mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:3e3})}},asyncData:(r=Object(l.a)(regeneratorRuntime.mark((function t(e){var n,r,path,l,data;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.params,r=e.redirect,t.prev=1,path="units/unit/".concat(n.id),t.next=5,v.a.get(path);case 5:if(l=t.sent,data=l.data){t.next=9;break}return t.abrupt("return",{unit:{},error:"unable to find unit"});case 9:return t.abrupt("return",{unit:Object(_.c)(data.unit,f.a)});case 12:t.prev=12,t.t0=t.catch(1),r("/units");case 15:case"end":return t.stop()}}),t,null,[[1,12]])}))),function(t){return r.apply(this,arguments)}),methods:{getProperLanguage:d.c,getServiceText:_.a}}),w=n(3),component=Object(w.a)(k,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"unit-details u-container"},[r("el-row",{attrs:{gutter:20}},[r("el-col",{attrs:{span:6}},[r("div",{staticClass:"skn-alert"},[r("img",{attrs:{src:n(349),alt:"info"}}),t._v(" "),r("p",[t._v("\n          هذه الوحدة متاحة للحجز ابتدأً من\n          "),r("span",[t._v("1/2/2020")])])]),t._v(" "),r("ReservationForm"),t._v(" "),r("div",{staticClass:"unit-details__condations"},[r("div",{staticClass:"unit-details__condations-title"},[t._v("شروط مالك الوحدة")]),t._v(" "),r("ul",{staticClass:"unit-details__condations-list"},t._l(t.unit.conditions,(function(e,n){return r("li",{key:"condition"+n},[t._v("\n            "+t._s(e)+"\n          ")])})),0)])],1),t._v(" "),r("el-col",{attrs:{span:18}},[r("div",{staticClass:"unit-details__carousel"},[r("el-carousel",{attrs:{"indicator-position":"outside"}},[r("el-carousel-item",{style:{backgroundImage:"url("+t.unit.image+")"}}),t._v(" "),t._l(t.unit.gallery,(function(image,t){return r("el-carousel-item",{key:t+"image",style:{backgroundImage:"url("+image+")"}})}))],2)],1),t._v(" "),r("div",{staticClass:"unit-details__header"},[r("div",{staticClass:"unit-details__price"},[r("span",[r("i",{staticClass:"el-icon-warning-outline"}),t._v(" ج.م/"+t._s(t.unit.dailyOrMonthly)+"\n          ")]),t._v("\n          "+t._s(t.unit.pricePerPerson)+"\n        ")]),t._v(" "),r("div",{staticClass:"unit-details__header-actions"},[r("div",{staticClass:"unit-details__share"},[r("img",{attrs:{src:n(578),alt:""}})]),t._v(" "),r("div",{staticClass:"unit-details__like"},[r("img",{attrs:{src:n(577),alt:""}})])]),t._v(" "),r("div",{staticClass:"unit-details__header-title"},[t._v("\n          "+t._s(t.unit.address.street)+"\n          "),r("span",{staticClass:"unit-details__header-city"},[t._v("\n            ,"+t._s(t.unit.address.government))])])]),t._v(" "),r("div",{staticClass:"unit-details__rate"},[r("div",{staticClass:"unit-details__rate-users"},[r("span",[t._v(t._s(t.unit.totalUsersRated))]),t._v(" "),r("span",{staticClass:"word"},[t._v(" مستخدم ")])]),t._v(" "),r("div",{staticClass:"rate"},[r("el-rate",{attrs:{disabled:"","text-color":"#ff9900"},model:{value:t.unit.rate,callback:function(e){t.$set(t.unit,"rate",e)},expression:"unit.rate"}})],1)]),t._v(" "),t.unit.alert?r("div",{staticClass:"unit-details__alert"},[r("div",{staticClass:"skn-alert"},[r("img",{attrs:{src:n(349),alt:"info"}}),t._v(" "),r("p",[t._v("\n            "+t._s(t.unit.alert||"")+"\n          ")])])]):t._e(),t._v(" "),r("div",{staticClass:"unit-details__discretion"},[r("h4",{staticClass:"unit-details__title"},[t._v("وصف السكن")]),t._v(" "),r("p",[t._v("\n          "+t._s(t.unit.description)+"\n        ")])]),t._v(" "),r("div",{staticClass:"unit-details__contain"},[r("h4",{staticClass:"unit-details__title"},[t._v("محتويات السكن")]),t._v(" "),r("el-row",[r("el-col",{attrs:{span:8}},[r("div",{staticClass:"unit-card__feature"},[r("img",{staticClass:"unit-card__feature-img",attrs:{src:n(358),alt:""}}),t._v(" "),r("div",{staticClass:"unit-card__feature-name"},[r("span",[t._v(t._s(t.unit.availableCountNow))]),t._v(" متاح\n              ")])])]),t._v(" "),r("el-col",{attrs:{span:8}},[r("div",{staticClass:"unit-card__feature"},[r("img",{staticClass:"unit-card__feature-img",attrs:{src:n(359),alt:""}}),t._v(" "),r("div",{staticClass:"unit-card__feature-name"},[r("span",[t._v(t._s(t.unit.numberOfRooms))]),t._v("\n                "+t._s(t.getProperLanguage("rooms",t.unit.numberOfRooms))+"\n              ")])])]),t._v(" "),r("el-col",{attrs:{span:8}},[r("div",{staticClass:"unit-card__feature"},[r("img",{staticClass:"unit-card__feature-img",attrs:{src:n(535),alt:""}}),t._v(" "),r("div",{staticClass:"unit-card__feature-name"},[r("span",[t._v(t._s(t.unit.numberOfPeople))]),t._v("\n                "+t._s(t.getProperLanguage("people",t.unit.numberOfPeople))+"\n              ")])])]),t._v(" "),r("el-col",{attrs:{span:8}},[t._v("\n             \n          ")]),t._v(" "),r("el-col",{attrs:{span:8}},[r("div",{staticClass:"unit-card__feature"},[r("img",{staticClass:"unit-card__feature-img",attrs:{src:n(575)("./"+(t.unit.rentersIcon||"boys")+".svg"),alt:""}}),t._v(" "),r("div",{staticClass:"unit-card__feature-name"},[t._v("\n                "+t._s(t.unit.rentersType)+"\n              ")])])]),t._v(" "),r("el-col",{attrs:{span:8}},[r("div",{staticClass:"unit-card__feature"},[r("img",{staticClass:"unit-card__feature-img",attrs:{src:n(536),alt:""}}),t._v(" "),r("div",{staticClass:"unit-card__feature-name"},[t._v("مفروش")])])])],1)],1),t._v(" "),r("div",{staticClass:"unit-details__features"},[r("h4",{staticClass:"unit-details__title"},[t._v("مميزات السكن")]),t._v(" "),r("el-row",{attrs:{gutter:20}},t._l(t.unit.services,(function(e,l){return r("el-col",{key:"services"+l,staticClass:"u-col-rtl",attrs:{span:3}},[r("div",{staticClass:"unit-details__feature"},[r("img",{attrs:{src:n(568)("./"+e+".svg"),alt:e}}),t._v(" "),r("h6",[t._v(t._s(t.getServiceText(e)))])])])})),1)],1)])],1),t._v(" "),t.unit.similarUnits&&t.unit.similarUnits.length?r("div",{staticClass:"unit-details__similar"},[r("h4",{staticClass:"unit-details__title"},[t._v("سكن مشابه")]),t._v(" "),r("el-row",{attrs:{gutter:30}},t._l(t.unit.similarUnits,(function(t,e){return r("el-col",{key:"similar"+e,staticClass:"u-col-rtl",attrs:{span:6}},[r("unitCard",{attrs:{unit:t,backgroundurl:t.image,"go-to":"/unitDetails/"+t._id,state:"availableRent"}})],1)})),1)],1):t._e()],1)}),[],!1,null,null,null);e.default=component.exports}}]);