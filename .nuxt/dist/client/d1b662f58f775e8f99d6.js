(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{336:function(t,e){t.exports=[{value:"Alexandria",label:"الإسكندرية"},{value:"Ismailia",label:"الإسماعيلية"},{value:"Aswan",label:"أسوان"},{value:"Asyut",label:"أسيوط"},{value:"Luxor",label:"الأقصر"},{value:"Red Sea",label:"البحر الأحمر"},{value:"El Beheira",label:"البحيرة"},{value:"Beni Suef",label:"بني سويف"},{value:"Port Said",label:"بورسعيد"},{value:"South Sinai",label:"جنوب سيناء"},{value:"Giza",label:"الجيزة"},{value:"Dakahlia",label:"الدقهلية"},{value:"Damietta",label:"دمياط"},{value:"Sohag",label:"سوهاج"},{value:"Suez",label:"السويس"},{value:"Ash Sharqia",label:"الشرقية"},{value:"North Sinai",label:"شمال سيناء"},{value:"Gharbia",label:"الغربية"},{value:"Faiyum",label:"الفيوم"},{value:"Cairo",label:"القاهرة"},{value:"Al Qalyubia",label:"القليوبية"},{value:"Qena",label:"قنا"},{value:"Kafr El Sheikh",label:"كفر الشيخ"},{value:"Marsa Matruh",label:"مرسى مطروح"},{value:"Menofia",label:"المنوفية"},{value:"Minya",label:"المنيا"},{value:"New Valley",label:"الوادي الجديد"}]},348:function(t,e,l){"use strict";var n=[function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"profile-card__address-icon"},[e("img",{attrs:{src:l(342),alt:""}})])}],r=(l(84),l(56)),o={props:{userData:{type:Object,default:function(){return{}}}},data:function(){return{user:{}}},created:function(){var t=this;this.userData.name?this.user=this.userData:(Object(r.b)(),r.a.get("users/profile").then((function(e){t.user=e.data.profileData})).catch((function(e){var l="حدث خطأ ما";e.response&&e.response.data&&(l=e.response.data.message),t.Toast.fire({icon:"error",title:l})})))},methods:{uploadUnit:function(){this.$store.commit("uploadUnit",!0)}}},c=l(3),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"profile-card"},[n("div",{staticClass:"profile-card__setting-icon"}),t._v(" "),t.user.identificationStatus?n("div",{staticClass:"profile-card__mark"},[n("i",{staticClass:"el-icon-success"})]):t._e(),t._v(" "),n("div",{staticClass:"profile-card__profile-image"},[n("img",{staticClass:"profile-card__profile-image__img",attrs:{src:t.user.image,alt:""}})]),t._v(" "),n("div",{staticClass:"profile-card__name"},[n("span",[t._v(t._s(t.user.fullName))])]),t._v(" "),n("div",{staticClass:"profile-card__address"},[t._m(0),t._v(" "),n("span",{staticClass:"profile-card__address-name"},[t._v("\n       "+t._s(t.user.government)+"\n     ")])]),t._v(" "),n("div",{staticClass:"profile-card__upload"},[n("el-button",{staticClass:"profile-card__upload-button",on:{click:t.uploadUnit}},[n("img",{attrs:{src:l(125),alt:""}}),t._v(" "),n("span",[t._v("اضف اعلان")])])],1)])}),n,!1,null,null,null);e.a=component.exports},488:function(t,e,l){"use strict";function n(t){return function(t){if(Array.isArray(t)){for(var i=0,e=new Array(t.length);i<t.length;i++)e[i]=t[i];return e}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}l.d(e,"a",(function(){return n}))},540:function(t,e,l){var content=l(594);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,l(42).default)("3569882a",content,!0,{sourceMap:!1})},593:function(t,e,l){"use strict";var n=l(540);l.n(n).a},594:function(t,e,l){(e=l(41)(!1)).push([t.i,".noHostels{font-size:3rem;text-align:center}.hostelStatus .el-select{width:100%;direction:rtl}",""]),t.exports=e},646:function(t,e,l){"use strict";l.r(e);l(349);var n,r=l(488),o=(l(57),l(6)),c=l(56),d=l(477),h=l(336),v=l.n(h),_=l(486),f={props:{hostel:{type:Object,default:function(){return{}}},state:{type:String,default:"available"}},data:function(){return{addFavs:!1}},methods:{goToRoute:function(){this.$router.push("/hotel?id=".concat(this.hostel._id))},translateCurrency:function(t){return"usd"===t?"دولار":"جنية"},addFav:function(t){t.preventdefault(),this.addFavs=!this.addFavs},cancelledReasonsDialog:function(t){this.$store.commit("cancelledReasonsDialog",!0),this.$store.commit("rejectedNote",t)}}},m=l(3),C=Object(m.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{staticClass:"unit-card",on:{click:function(e){return e.preventDefault(),t.goToRoute(e)}}},["pending"===t.hostel.status?n("div",{staticClass:"unit-card__hold",on:{click:function(t){t.preventDefault()}}},[n("span",[t._v("قيد الانتظار")])]):t._e(),t._v(" "),"rejected"===t.hostel.status?n("div",{staticClass:"unit-card__cancelled-layout",on:{click:function(t){t.preventDefault()}}},["rejected"==t.hostel.status?n("el-button",{staticClass:"unit-card__cancelled-reasons",attrs:{round:""},on:{click:function(e){return e.preventDefault(),e.stopPropagation(),t.cancelledReasonsDialog(t.hostel.note)}}},[t._v("\n      عرض اسباب الرفض")]):t._e()],1):t._e(),t._v(" "),n("div",{staticClass:"unit-card__veiw",style:{backgroundImage:"url("+(t.hostel.image?t.hostel.image:"https://picsum.photos/1124")+")"}},[n("div",{staticClass:"unit-card__nav",staticStyle:{cursor:"pointer"}},[t.hostel.available?n("div",{staticClass:"unit-card__availability"},[t._v("\n        متاحة للحجز\n        "),t._m(0)]):t._e()])]),t._v(" "),n("div",{staticClass:"unit-card__data"},[n("div",{staticClass:"unit-card__row-data"},[n("div",{staticClass:"unit-card__title"},[n("h3",[t._v(t._s(t.hostel.name))])])]),t._v(" "),n("div",{staticClass:"unit-card__row-data"},[n("div",{staticClass:"unit-card__name"},[t._v("\n        "+t._s(t.hostel.address?t.hostel.address.government:"")+"\n      ")])]),t._v(" "),n("div",{staticClass:"unit-card__row-data unit-card__rate-user"},[n("div",{staticClass:"unit-card__users"},[n("span",[t._v(t._s(t.hostel.totalUsersRated))]),t._v(" مستخدم\n      ")]),t._v(" "),n("div",{staticClass:"unit-card__rate"},[n("el-rate",{attrs:{disabled:"","text-color":"#ff9900"},model:{value:t.hostel.rate,callback:function(e){t.$set(t.hostel,"rate",e)},expression:"hostel.rate"}})],1)]),t._v(" "),n("div",{staticClass:"unit-card__row-data unit-card__features"},[n("el-row",[n("el-col",{staticClass:"u-col-rtl",attrs:{span:8}},[n("div",{staticClass:"unit-card__feature"},[n("img",{staticClass:"unit-card__feature-img",attrs:{src:l(343),alt:""}}),t._v(" "),n("div",{staticClass:"unit-card__feature-name"},[n("span",[t._v(t._s(t.hostel.totalBooking||0))]),t._v(" حجز\n            ")])])]),t._v(" "),n("el-col",{staticClass:"u-col-rtl",attrs:{span:8}},[n("div",{staticClass:"unit-card__feature"},[n("img",{staticClass:"unit-card__feature-img",attrs:{src:l(344),alt:""}}),t._v(" "),n("div",{staticClass:"unit-card__feature-name"},[n("span",[t._v(t._s(t.hostel.totalRevenue))]),t._v("\n              "+t._s(t.translateCurrency(t.hostel.currency))+"\n            ")])])])],1)],1)])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("span",[e("div",{staticClass:"la-ball-scale-multiple la-sm"},[e("div"),this._v(" "),e("div"),this._v(" "),e("div")])])}],!1,null,null,null).exports,y=l(348),w={components:{unitCard:_.a,hostelCard:C,profileCard:y.a},data:function(){return{searchValue:"",lastSearchValue:"",unit:!0,office:!1,hotel:!1,units:[],hostelsCount:0,hostelsRevenue:0,hostelStatus:[{label:"قيد الانتظار",value:"pending"},{label:"تم القبول",value:"accepted"},{label:"تم الرفض",value:"rejected"}],hostels:[],userSearched:!1,hostelsLimit:20,lastHostelId:"000000000000",selectedHostelStatus:"pending",loadMoreHostels:!0,isLoading:!0,hasNext:!1,loading:!1}},created:function(){Object(c.b)(),this.loadData(),this.getHostelsCount()},mounted:function(){this.scroll()},methods:{getTotalRevenue:function(){return this.units&&this.units.length?this.units.reduce((function(t,e){return parseInt(e.totalRevenue,10)+t}),0):0},loadMore:function(){if(!this.loading&&this.hasNext&&this.units.length)return this.loadData(this.units[this.units.length-1]._id)},scroll:function(){var t=this;window.onscroll=function(){Math.max(window.pageYOffset,document.documentElement.scrollTop,document.body.scrollTop)+window.innerHeight===document.documentElement.offsetHeight&&t.loadMore()}},loadData:(n=Object(o.a)(regeneratorRuntime.mark((function t(){var e,path,l,n,data,o,h,_=arguments;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=_.length>0&&void 0!==_[0]?_[0]:void 0,t.prev=1,this.loading=!0,path="units/my-units?limit=6",e&&(path+="&lastId=".concat(e)),t.next=7,c.a.get(path);case 7:l=t.sent,this.loading=!1,n=l.data,data=n.data,o=n.hasNext,h=Object(d.d)(data,v.a),this.units.length?this.units=[].concat(Object(r.a)(this.units),Object(r.a)(h)):this.units=h,this.hasNext=o,t.next=18;break;case 15:t.prev=15,t.t0=t.catch(1),this.loading=!1;case 18:case"end":return t.stop()}}),t,this,[[1,15]])}))),function(){return n.apply(this,arguments)}),processUnits:function(t){return t.map((function(t){var e=v.a.find((function(e){return e.value===t.address.government}));return t.address.government=e?e.label:t.address.government,t.rentersType=d.e.find((function(e){return e.enValue===t.rentersType})).arValue,t.type=d.h.find((function(e){return e.enValue===t.type}))?d.h.find((function(e){return e.enValue===t.type})).arValue:t.type,t.dailyOrMonthly=d.b.find((function(e){return e.enValue===t.dailyOrMonthly}))?d.b.find((function(e){return e.enValue===t.dailyOrMonthly})).arValue:t.dailyOrMonthly,t}))},changeHostelStatus:function(){this.lastHostelId="000000000000",this.hostels=[],this.loadMoreHostels=!0,this.isLoading=!0,this.userSearched=!1,this.searchValue="",this.loadHostels()},hostelsSearch:function(){this.lastSearchValue!==this.searchValue&&(this.userSearched=!0,this.lastSearchValue=this.searchValue,this.lastHostelId="000000000000",this.hostels=[],this.loadMoreHostels=!0,this.isLoading=!0,this.loadHostels())},loadHostels:function(){var t=this;c.a.get("users/uploaded/hostels?lastId=".concat(this.lastHostelId,"&status=").concat(this.selectedHostelStatus,"&limit=").concat(this.hostelsLimit,"&key=").concat(this.searchValue)).then((function(e){t.isLoading=!1,e.data.hostels&&0!==e.data.hostels.length?(e.data.hostels.forEach((function(e){return t.hostels.push(e)})),t.lastHostelId=e.data.hostels[e.data.hostels.length-1]._id):(t.isLoading=!1,t.loadMoreHostels=!1)}))},getHostelsCount:function(){var t=this;c.a.get("users/uploaded/hostels/count").then((function(e){t.hostelsCount=e.data.hostelsData.count||0,t.hostelsRevenue=e.data.hostelsData.revenue||0})).catch((function(e){return t.hostelsCount=0,e}))},changeCategory:function(t){switch(t){case"unit":this.office=!1,this.hotel=!1,this.unit=!0;break;case"hotel":this.office=!1,this.unit=!1,this.hotel=!0,this.selectedHostelStatus="pending",this.changeHostelStatus();break;case"office":this.hotel=!1,this.unit=!1,this.office=!0}}}},x=(l(593),Object(m.a)(w,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"rents u-container"},[n("el-row",{attrs:{gutter:30}},[n("el-col",{attrs:{xs:24,sm:24,md:24,lg:18,xl:18}},[n("div",{staticClass:"rents__category "},[n("el-row",{attrs:{gutter:20,type:"flex"}},[n("el-col",{attrs:{xs:24,sm:24,md:6,lg:6,xl:6}},[n("div",{staticClass:"rents__search"},[t.hotel?n("el-input",{attrs:{"prefix-icon":"el-icon-search"},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.hostelsSearch(e)}},model:{value:t.searchValue,callback:function(e){t.searchValue=e},expression:"searchValue"}}):t._e()],1)]),t._v(" "),n("el-col",{attrs:{xs:24,sm:24,md:18,lg:18,xl:18}},[n("el-row",{attrs:{gutter:20}},[n("el-col",{staticClass:"u-col-rtl",attrs:{xs:24,sm:12,md:8,lg:8,xl:8}},[n("div",{staticClass:"rents__category-card",class:t.unit?"active-card":"",on:{click:function(e){return t.changeCategory("unit")}}},[n("div",{staticClass:"rents__category-icon"},[t.unit?t._e():n("img",{attrs:{src:l(346),alt:""}}),t._v(" "),t.unit?n("img",{attrs:{src:l(345),alt:""}}):t._e()]),t._v(" "),n("div",{staticClass:"rents__category-numbers"},[n("h3",[n("span",[t._v(t._s(t.units.length))]),t._v(" شقه\n                    ")]),t._v(" "),n("h6",[t._v("عدد الوحدات الخاصة بك")])])])]),t._v(" "),n("el-col",{staticClass:"u-col-rtl",attrs:{xs:24,sm:12,md:8,lg:8,xl:8}},[n("div",{staticClass:"rents__category-card",class:t.hotel?"active-card":"",on:{click:function(e){return t.changeCategory("hotel")}}},[n("div",{staticClass:"rents__category-icon"},[t.hotel?t._e():n("img",{attrs:{src:l(346),alt:""}}),t._v(" "),t.hotel?n("img",{attrs:{src:l(345),alt:""}}):t._e()]),t._v(" "),n("div",{staticClass:"rents__category-numbers"},[n("h3",[n("span",[t._v(t._s(t.hostelsCount))]),t._v(" فنادق\n                    ")]),t._v(" "),n("h6",[t._v("عدد الفنادق الخاصة بك")])])])])],1)],1)],1)],1),t._v(" "),n("el-row",{staticClass:"u-margin-bottom-medium"},[t.hotel?n("el-col",{staticClass:"hostelStatus",attrs:{xs:24,sm:24,md:12,lg:6,xl:6}},[n("el-select",{attrs:{placeholder:"حالة الطلب"},on:{change:t.changeHostelStatus},model:{value:t.selectedHostelStatus,callback:function(e){t.selectedHostelStatus=e},expression:"selectedHostelStatus"}},t._l(t.hostelStatus,(function(t){return n("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1):t._e()],1),t._v(" "),n("div",{staticClass:"rents__revenue"},[n("div",{staticClass:"rents__revenue-dollar-sign"},[t._v("$")]),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.unit,expression:"unit"}],staticClass:"rents__revenue-numbers"},[n("h2",[n("span",[t._v(t._s(t.getTotalRevenue()))]),t._v(" جنية\n          ")]),t._v(" "),n("h6",[t._v("مجموع الربح من كل الوحدات")])]),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.hotel,expression:"hotel"}],staticClass:"rents__revenue-numbers"},[n("h2",[n("span",[t._v(t._s(t.hostelsRevenue))]),t._v(" جنية\n          ")]),t._v(" "),n("h6",[t._v("مجموع الربح من كل الفنادق")])])]),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.office,expression:"office"}],staticClass:"rents__cards"},[n("el-row",{attrs:{gutter:30}},[n("el-col",{staticClass:"u-col-rtl",attrs:{span:8}},[n("unitCard",{attrs:{state:"hold",backgroundurl:"https://picsum.photos/1123"}})],1),t._v(" "),n("el-col",{staticClass:"u-col-rtl",attrs:{span:8}},[n("unitCard",{attrs:{state:"cancelled",backgroundurl:"https://picsum.photos/1146"}})],1),t._v(" "),n("el-col",{staticClass:"u-col-rtl",attrs:{span:8}},[n("unitCard",{attrs:{state:"availableRent"}})],1),t._v(" "),n("el-col",{staticClass:"u-col-rtl",attrs:{span:8}},[n("unitCard",{attrs:{state:"availableRent",backgroundurl:"https://picsum.photos/1134"}})],1),t._v(" "),n("el-col",{staticClass:"u-col-rtl",attrs:{span:8}},[n("unitCard",{attrs:{state:"availableRent",backgroundurl:"https://picsum.photos/1132"}})],1),t._v(" "),n("el-col",{staticClass:"u-col-rtl",attrs:{span:8}},[n("unitCard",{attrs:{state:"availableRent",backgroundurl:"https://picsum.photos/1156"}})],1)],1)],1),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.unit,expression:"unit"}],staticClass:"rents__cards"},[n("el-row",{attrs:{gutter:30}},[!t.units||t.units&&!t.units.length?n("el-col",{attrs:{span:24}},[n("div",{staticClass:"noHostels"},[n("div",{staticClass:"skn-alert"},[n("img",{attrs:{src:l(335),alt:"info"}}),t._v(" "),n("p",[t._v("\n                  لا يوجد وحدات بعد\n                ")])])])]):t._e(),t._v(" "),t._l(t.units,(function(t,e){return n("el-col",{key:e+"unit",staticClass:"u-col-rtl",attrs:{xs:24,sm:24,md:8,lg:8,xl:6}},[n("unitCard",{attrs:{unit:t,backgroundurl:t.image,"go-to":"/unit/requests/"+t._id,state:"availableRent"}})],1)}))],2),t._v(" "),t.loading?n("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticStyle:{width:"100%",height:"100px"}}):t._e()],1),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.hotel,expression:"hotel"}],staticClass:"rents__cards"},[n("el-row",{attrs:{gutter:30}},[t._l(t.hostels,(function(e,l){return n("el-col",{directives:[{name:"show",rawName:"v-show",value:t.hostels&&0!==t.hostels.length,expression:"hostels && hostels.length !== 0"}],key:l,staticClass:"u-col-rtl",attrs:{xs:24,sm:24,md:8,lg:8,xl:6}},[n("hostelCard",{attrs:{hostel:e}})],1)})),t._v(" "),0===t.hostels.length&&t.userSearched&&!t.isLoading?n("el-col",{attrs:{span:24}},[n("div",{staticClass:"noHostels"},[n("div",{staticClass:"skn-alert"},[n("img",{attrs:{src:l(335),alt:"info"}}),t._v(" "),n("p",[t._v("\n                  لا يوجد فنادق بهذة البيانات بعد\n                ")])])])]):t._e(),t._v(" "),0!==t.hostels.length||t.userSearched||t.isLoading?t._e():n("el-col",{attrs:{span:24}},[n("div",{staticClass:"noHostels"},[n("div",{staticClass:"skn-alert"},[n("img",{attrs:{src:l(335),alt:"info"}}),t._v(" "),n("p",[t._v("\n                  لا يوجد فنادق بعد\n                ")])])])])],2)],1)],1),t._v(" "),n("el-col",{attrs:{span:6,xs:24,sm:24,md:24,lg:6,xl:6}},[n("div",{staticClass:"rents__user-profile"},[n("profileCard")],1)])],1)],1)}),[],!1,null,null,null));e.default=x.exports}}]);