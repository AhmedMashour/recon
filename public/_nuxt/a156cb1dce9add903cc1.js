(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{332:function(t,e,l){t.exports=l.p+"img/a1d6266.svg"},334:function(t,e,l){t.exports=l.p+"img/5c2f807.svg"},335:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMS4xMjEiIGhlaWdodD0iMzAuMTczIiB2aWV3Qm94PSIwIDAgMjEuMTIxIDMwLjE3MyI+CiAgICA8ZGVmcz4KICAgICAgICA8c3R5bGU+CiAgICAgICAgICAgIC5jbHMtMXtmaWxsOiM2ZTZlNmV9CiAgICAgICAgPC9zdHlsZT4KICAgIDwvZGVmcz4KICAgIDxnIGlkPSJpY19sb2NhdGlvbl9vbl80OHB4IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTAgLTQpIj4KICAgICAgICA8cGF0aCBpZD0iUGF0aF8yMTMiIGQ9Ik0yMC41NjEgNEExMC41NjIgMTAuNTYyIDAgMCAwIDEwIDE0LjU2MWMwIDcuOTIgMTAuNTYxIDE5LjYxMiAxMC41NjEgMTkuNjEyczEwLjU2LTExLjY5MiAxMC41Ni0xOS42MTJBMTAuNTYyIDEwLjU2MiAwIDAgMCAyMC41NjEgNHptMCAxNC4zMzJhMy43NzIgMy43NzIgMCAxIDEgMy43NzItMy43NzIgMy43NzMgMy43NzMgMCAwIDEtMy43NzIgMy43NzJ6IiBjbGFzcz0iY2xzLTEiIGRhdGEtbmFtZT0iUGF0aCAyMTMiLz4KICAgIDwvZz4KPC9zdmc+Cg=="},338:function(t,e){t.exports=[{value:"Alexandria",label:"الإسكندرية"},{value:"Ismailia",label:"الإسماعيلية"},{value:"Aswan",label:"أسوان"},{value:"Asyut",label:"أسيوط"},{value:"Luxor",label:"الأقصر"},{value:"Red Sea",label:"البحر الأحمر"},{value:"El Beheira",label:"البحيرة"},{value:"Beni Suef",label:"بني سويف"},{value:"Port Said",label:"بورسعيد"},{value:"South Sinai",label:"جنوب سيناء"},{value:"Giza",label:"الجيزة"},{value:"Dakahlia",label:"الدقهلية"},{value:"Damietta",label:"دمياط"},{value:"Sohag",label:"سوهاج"},{value:"Suez",label:"السويس"},{value:"Ash Sharqia",label:"الشرقية"},{value:"North Sinai",label:"شمال سيناء"},{value:"Gharbia",label:"الغربية"},{value:"Faiyum",label:"الفيوم"},{value:"Cairo",label:"القاهرة"},{value:"Al Qalyubia",label:"القليوبية"},{value:"Qena",label:"قنا"},{value:"Kafr El Sheikh",label:"كفر الشيخ"},{value:"Marsa Matruh",label:"مرسى مطروح"},{value:"Menofia",label:"المنوفية"},{value:"Minya",label:"المنيا"},{value:"New Valley",label:"الوادي الجديد"}]},339:function(t,e,l){"use strict";var r=l(4),n=l(22),c=l(30),o=l(191),v=l(84),m=l(12),d=l(57).f,_=l(85).f,h=l(11).f,C=l(340).trim,f=r.Number,x=f,I=f.prototype,y="Number"==c(l(122)(I)),A="trim"in String.prototype,T=function(t){var e=v(t,!1);if("string"==typeof e&&e.length>2){var l,r,n,c=(e=A?e.trim():C(e,3)).charCodeAt(0);if(43===c||45===c){if(88===(l=e.charCodeAt(2))||120===l)return NaN}else if(48===c){switch(e.charCodeAt(1)){case 66:case 98:r=2,n=49;break;case 79:case 111:r=8,n=55;break;default:return+e}for(var code,o=e.slice(2),i=0,m=o.length;i<m;i++)if((code=o.charCodeAt(i))<48||code>n)return NaN;return parseInt(o,r)}}return+e};if(!f(" 0o1")||!f("0b1")||f("+0x1")){f=function(t){var e=arguments.length<1?0:t,l=this;return l instanceof f&&(y?m((function(){I.valueOf.call(l)})):"Number"!=c(l))?o(new x(T(e)),l,f):T(e)};for(var w,M=l(9)?d(x):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),N=0;M.length>N;N++)n(x,w=M[N])&&!n(f,w)&&h(f,w,_(x,w));f.prototype=I,I.constructor=f,l(13)(r,"Number",f)}},340:function(t,e,l){var r=l(8),n=l(29),c=l(12),o=l(341),v="["+o+"]",m=RegExp("^"+v+v+"*"),d=RegExp(v+v+"*$"),_=function(t,e,l){var n={},v=c((function(){return!!o[t]()||"​"!="​"[t]()})),m=n[t]=v?e(h):o[t];l&&(n[l]=m),r(r.P+r.F*v,"String",n)},h=_.trim=function(t,e){return t=String(n(t)),1&e&&(t=t.replace(m,"")),2&e&&(t=t.replace(d,"")),t};t.exports=_},341:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},356:function(t,e,l){"use strict";var r={props:{hostel:{type:Object,default:function(){return{}}},state:{type:String,default:"available"}},data:function(){return{addFavs:!1}},methods:{goToRoute:function(){this.$router.push("/hoteldetails?id="+this.hostel._id)},addFav:function(){this.addFavs=!this.addFavs},cancelledReasonsDialog:function(){this.$store.commit("cancelledReasonsDialog",!0)}}},n=l(3),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("a",{staticClass:"unit-card",attrs:{href:"/hoteldetails?id="+t.hostel._id},on:{click:function(e){return e.preventDefault(),t.goToRoute(e)}}},[r("div",{staticClass:"unit-card__veiw",style:{backgroundImage:"url("+(t.hostel.image?t.hostel.image:"https://picsum.photos/1124")+")"}},[r("div",{staticClass:"unit-card__nav"},[t.hostel.available?r("div",{staticClass:"unit-card__availability"},[t._v("\n        متاحة للحجز\n        "),t._m(0)]):t._e()])]),t._v(" "),r("div",{staticClass:"unit-card__data"},[r("div",{staticClass:"unit-card__row-data"},[r("div",{staticClass:"unit-card__title"},[r("h3",[t._v(t._s(t.hostel.name))])])]),t._v(" "),r("div",{staticClass:"unit-card__row-data"},[r("div",{staticClass:"unit-card__name"},[t._v("\n        "+t._s(t.hostel.address?t.hostel.address.government:"")+"\n      ")])]),t._v(" "),r("div",{staticClass:"unit-card__row-data unit-card__rate-user"},[r("div",{staticClass:"unit-card__users"},[r("span",[t._v(t._s(t.hostel.totalUsersRated))]),t._v(" مستخدم\n      ")]),t._v(" "),r("div",{staticClass:"unit-card__rate"},[r("el-rate",{attrs:{disabled:"","text-color":"#ff9900"},model:{value:t.hostel.rate,callback:function(e){t.$set(t.hostel,"rate",e)},expression:"hostel.rate"}})],1)]),t._v(" "),r("div",{staticClass:"unit-card__row-data unit-card__features"},[r("el-row",[r("el-col",{staticClass:"u-col-rtl",attrs:{span:8}},[r("div",{staticClass:"unit-card__feature"},[r("img",{staticClass:"unit-card__feature-img",attrs:{src:l(334),alt:""}}),t._v(" "),r("div",{staticClass:"unit-card__feature-name"},[r("span",[t._v(t._s(t.hostel.totalAvailableRooms))]),t._v(" متاح\n            ")])])]),t._v(" "),r("el-col",{staticClass:"u-col-rtl",attrs:{span:8}},[r("div",{staticClass:"unit-card__feature"},[r("img",{staticClass:"unit-card__feature-img",attrs:{src:l(332),alt:""}}),t._v(" "),r("div",{staticClass:"unit-card__feature-name"},[r("span",[t._v(t._s(t.hostel.totalRooms))]),t._v(" غرفة\n            ")])])])],1)],1)])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("span",[e("div",{staticClass:"la-ball-scale-multiple la-sm"},[e("div"),this._v(" "),e("div"),this._v(" "),e("div")])])}],!1,null,null,null);e.a=component.exports},363:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOS40NDIiIGhlaWdodD0iMTkuNDQyIiB2aWV3Qm94PSIwIDAgMTkuNDQyIDE5LjQ0MiI+CiAgICA8ZGVmcz4KICAgICAgICA8c3R5bGU+CiAgICAgICAgICAgIC5jbHMtMXtvcGFjaXR5Oi4zM30uY2xzLTJ7ZmlsbDojNTk1OTU5fQogICAgICAgIDwvc3R5bGU+CiAgICA8L2RlZnM+CiAgICA8ZyBpZD0iaWNfYXJyb3dfZm9yd2FyZF80OHB4IiBjbGFzcz0iY2xzLTEiIHRyYW5zZm9ybT0icm90YXRlKDE4MCA5LjcyMSA5LjcyMSkiPgogICAgICAgIDxwYXRoIGlkPSJQYXRoXzE1NyIgZD0iTTkuNzIxIDBMOCAxLjcxOWw2Ljc4NyA2Ljc4N0gwdjIuNDNoMTQuNzg4TDggMTcuNzIzbDEuNzE5IDEuNzE5IDkuNzIxLTkuNzIxeiIgY2xhc3M9ImNscy0yIiBkYXRhLW5hbWU9IlBhdGggMTU3Ii8+CiAgICA8L2c+Cjwvc3ZnPgo="},364:function(t,e,l){"use strict";l(339);var r=l(338),n=l.n(r),c={props:{from:{type:String,default:""},selectedAvailableFrom:{type:Number,default:0},selectedAvailableTo:{type:Number,default:0},selectedGovernment:{type:String,default:""},selectedType2:{type:String,default:""},slectedNumberOfPersons:{type:Number,default:0}},data:function(){return{government:"",Type:"",Types:[{label:"فردى",value:"single"},{label:"زوجى",value:"double"},{label:"ثلاثى",value:"triple"}],selectedType:"",numberOfPersons:0,cities:[],pickerOptions:{shortcuts:[{text:"Last week",onClick:function(t){var e=new Date,l=new Date;l.setTime(l.getTime()-6048e5),t.$emit("pick",[l,e])}},{text:"Last month",onClick:function(t){var e=new Date,l=new Date;l.setTime(l.getTime()-2592e6),t.$emit("pick",[l,e])}},{text:"Last 3 months",onClick:function(t){var e=new Date,l=new Date;l.setTime(l.getTime()-7776e6),t.$emit("pick",[l,e])}}]},typeChanged:!1,numberOfPersonsChanged:!1,availableFrom:"",availableTo:"",value1:[],value2:""}},created:function(){n.a&&0!==n.a.length&&(this.cities=n.a),this.selectedGovernment&&(this.government=this.selectedGovernment),this.selectedAvailableFrom&&(this.value1[0]=this.selectedAvailableFrom),this.selectedAvailableTo&&(this.value1[1]=this.selectedAvailableTo),this.selectedType2&&(this.Type=this.selectedType2),this.slectedNumberOfPersons&&(this.numberOfPersons=this.slectedNumberOfPersons,this.numberOfPersonsChanged=!0)},methods:{onSubmit:function(){},selectCity:function(){"home"!==this.from&&(this.$parent.government=this.government,this.$parent.selectCity(this.government))},selectDates:function(){this.$parent.availableFrom=new Date(this.value1[0]).getTime(),this.availableFrom=new Date(this.value1[0]).getTime(),this.$parent.availableTo=new Date(this.value1[1]).getTime(),this.availableTo=new Date(this.value1[1]).getTime()},handleChange:function(t){this.numberOfPersonsChanged=!0,this.$parent.numberOfPersons=this.numberOfPersons},selectType:function(){var t=this;this.typeChanged=!0;var e=this.Types.filter((function(e){return String(e.value).toLowerCase()===String(t.Type).toLowerCase()}));this.selectedType=e[0].label||"فردى",this.$parent.Type=this.Type},searchHostels:function(){if(this.government||this.value1||this.numberOfPersonsChanged||this.Type)if(this.$parent.numberOfPersons=this.numberOfPersons,this.from&&"home"===this.from){var t,e="government=".concat(this.government),l="availableFrom=".concat(this.availableFrom,"&availableTo=").concat(this.availableTo),r="numberOfPersons=".concat(this.numberOfPersons),n="Type=".concat(this.Type);this.government&&(t=e),t&&this.availableFrom?t+="&"+l:!t&&this.availableFrom&&(t=l),t&&this.numberOfPersonsChanged?t+="&"+r:!t&&this.numberOfPersonsChanged&&(t=r),t&&this.Type?t+="&"+n:!t&&this.Type&&(t=n),t&&this.$router.push({path:"/hotels?".concat(t)})}else this.$parent.searchHostels(this.numberOfPersons)}}},o=l(3),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"search"},[r("el-row",{staticClass:"search__tab-form",attrs:{gutter:20}},[r("el-col",{staticClass:"u-col-rtl top-input mob-input where-input",attrs:{xs:24,sm:12,md:5,lg:6,xl:6}},[r("el-row",[r("el-col",{staticClass:"u-col-rtl",attrs:{span:3}},[r("i",{staticClass:"el-icon-location"})]),t._v(" "),r("el-col",{staticClass:"u-col-rtl",attrs:{span:21}},[r("el-select",{staticClass:"search__el",attrs:{filterable:"",placeholder:"اين ستقيم؟","popper-class":"search__popper"},on:{change:t.selectCity},model:{value:t.government,callback:function(e){t.government=e},expression:"government"}},t._l(t.cities,(function(e){return r("el-option",{key:e.value,attrs:{label:e.label,value:e.value}},[r("div",[r("span",{staticClass:"search__el-option-city-name"},[t._v(t._s(e.label))])]),t._v(" "),r("img",{attrs:{src:l(335),alt:""}})])})),1)],1)],1)],1),t._v(" "),r("el-col",{staticClass:"u-col-rtl hidden-sm-and-down",attrs:{md:1,lg:1,xl:1}},[r("div",{staticClass:"search__separator"})]),t._v(" "),r("el-col",{staticClass:"u-col-rtl top-input mob-input",attrs:{xs:24,sm:12,md:6,lg:6,xl:6}},[r("el-date-picker",{staticClass:"search__el",attrs:{type:"daterange","range-separator":"-","start-placeholder":"تاريخ البدء","end-placeholder":"تاريخ الانتهاء"},on:{change:t.selectDates},model:{value:t.value1,callback:function(e){t.value1=e},expression:"value1"}})],1),t._v(" "),r("el-col",{staticClass:"u-col-rtl hidden-sm-and-down",attrs:{md:1,lg:1,xl:1}},[r("div",{staticClass:"search__separator"})]),t._v(" "),r("el-col",{staticClass:"u-col-rtl mob-input",attrs:{xs:24,sm:12,md:7,lg:6,xl:6}},[r("el-dropdown",{staticClass:"search__el",attrs:{trigger:"click"}},[r("span",{staticClass:"el-dropdown-link"},[r("span",[t.numberOfPersonsChanged?r("span",[t._v("\n                عدد لاشخاص  \n                "+t._s(t.numberOfPersons)+"\n              ")]):t._e(),t._v(" "),t.numberOfPersonsChanged?t._e():r("span",[t._v("\n                عدد لاشخاص  \n              ")]),t._v(" "),r("span",[t._v("  -  ")]),t._v(" "),r("span",[t._v("\n                نوع الوحدة  \n                "+t._s(t.selectedType)+"\n              ")])]),t._v(" "),r("img",{staticClass:"el-icon-arrow-down el-icon--right search__drodown-img",attrs:{src:l(332)}})]),t._v(" "),r("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[r("el-dropdown-item",[r("div",{staticClass:"search__type-select"},[r("el-select",{attrs:{"popper-class":"search__type-pop",placeholder:""},on:{change:t.selectType},model:{value:t.Type,callback:function(e){t.Type=e},expression:"Type"}},t._l(t.Types,(function(t){return r("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1),t._v(" "),r("label",{staticClass:"search__dropdown-label",attrs:{for:""}},[t._v("\n                  نوع الغرفة")])],1)]),t._v(" "),r("el-dropdown-item",[r("div",{staticClass:"search__type-select"},[r("el-input-number",{attrs:{min:1,max:100},on:{change:t.handleChange},model:{value:t.numberOfPersons,callback:function(e){t.numberOfPersons=e},expression:"numberOfPersons"}}),t._v(" "),r("label",{staticClass:"search__dropdown-label",attrs:{for:""}},[t._v("\n                  عدد لاشخاص")])],1)])],1)],1)],1),t._v(" "),r("el-col",{staticClass:"u-col-rtl",attrs:{xs:24,sm:12,md:4,lg:4,xl:4}},[r("el-button",{staticClass:"btn search__el search__btn",attrs:{size:"medium"},on:{click:t.searchHostels}},[t._v("\n          ابحث الان\n        ")])],1)],1)],1)])}),[],!1,null,null,null);e.a=component.exports},369:function(t,e,l){t.exports=l.p+"img/b50666a.svg"},370:function(t,e,l){t.exports=l.p+"img/c6c186e.svg"},382:function(t,e,l){t.exports=l.p+"img/ca4ec08.svg"},383:function(t,e,l){t.exports=l.p+"img/4db9b22.svg"},560:function(t,e,l){t.exports=l.p+"img/e5722ea.png"},561:function(t,e,l){t.exports=l.p+"img/fe39120.svg"},562:function(t,e,l){t.exports=l.p+"img/30ef48f.svg"},563:function(t,e,l){t.exports=l.p+"img/d3ff817.png"},564:function(t,e,l){t.exports=l.p+"img/c4b0d74.jpg"},565:function(t,e,l){t.exports=l.p+"img/c7401f5.png"},566:function(t,e,l){t.exports=l.p+"img/ede1a04.png"},567:function(t,e,l){t.exports=l.p+"img/d3f53ac.png"},568:function(t,e,l){t.exports=l.p+"img/3c1ef6b.png"},569:function(t,e,l){t.exports=l.p+"img/039d32e.png"},570:function(t,e,l){t.exports=l.p+"img/0fb71d9.png"},571:function(t,e,l){t.exports=l.p+"img/0dad75f.png"},572:function(t,e,l){t.exports=l.p+"img/2cc49d6.png"},573:function(t,e,l){t.exports=l.p+"img/0dbcd0d.png"},574:function(t,e,l){t.exports=l.p+"img/dd761f6.png"},575:function(t,e,l){t.exports=l.p+"img/f64852d.png"},576:function(t,e,l){t.exports=l.p+"img/029045d.png"},598:function(t,e,l){"use strict";l.r(e);var r=l(336),n=l.n(r),c=l(331),o=(l(337),l(364)),v=l(356),m={components:{search:o.a,hostelCard:v.a},data:function(){return{Toast:n.a.mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:3e3}),recentAddedHostels:null,specialHostels:null,isLoading:!0}},created:function(){var t=this;Object(c.b)(),c.a.get("hostels/recommended").then((function(e){t.isLoading=!1,0!==e.data.hostels.length&&(t.recentAddedHostels=e.data.hostels,t.specialHostels=e.data.hostels.slice(0,4))})).catch((function(e){t.isLoading=!1;var l="حدث خطأ ما";e.response&&e.response.data&&e.response.data.message&&(l=e.response.data.message),t.Toast.fire({icon:"error",title:l})}))}},d=l(3),component=Object(d.a)(m,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t._m(0),t._v(" "),r("section",[r("search",{attrs:{from:"home"}})],1),t._v(" "),r("section",{staticClass:"home-features"},[r("el-row",{attrs:{gutter:20}},[r("el-col",{attrs:{xs:24,sm:24,md:24,lg:24,xl:24}},[r("h1",{staticClass:"home__tittle"},[t._v("خدماتنا")]),t._v(" "),r("p",{staticClass:"home__paragraph"},[t._v("\n          الخدمات التى نقدمها لعملائنا لمساعدتهم فى الاعلان عن مسكنهم.\n        ")])]),t._v(" "),r("el-col",{attrs:{xs:24,sm:24,md:8,lg:8,xl:8}},[r("div",{staticClass:"home-features__feature"},[r("img",{attrs:{src:l(560),alt:""}}),t._v(" "),r("h3",[t._v("تصوير المسكن")]),t._v(" "),r("p",[t._v("\n            يمكن لمصورينا مساعدة إعلانك على التميز، بغض النظر عن الحجم أو\n            النمط. إنهم خبراء في التصوير الفوتوغرافي للإعلانات ويعرفون بالضبط\n            ما يبحث عنه الضيوف.\n          ")])])]),t._v(" "),r("el-col",{attrs:{xs:24,sm:24,md:8,lg:8,xl:8}},[r("div",{staticClass:"home-features__feature"},[r("img",{attrs:{src:l(561),alt:""}}),t._v(" "),r("h3",[t._v("تحصيل الايجار")]),t._v(" "),r("p",[t._v("\n            نقدم لك خدمة تحصيل الايجار لتسهيل تحصيل الإيجار والدفع، إذ تسمح لك\n            بمتابعة وضع كلّ دفعة وإرسال إشعارات تلقائية للتذكير بالسداد\n          ")])])]),t._v(" "),r("el-col",{attrs:{xs:24,sm:24,md:8,lg:8,xl:8}},[r("div",{staticClass:"home-features__feature"},[r("img",{attrs:{src:l(562),alt:""}}),t._v(" "),r("h3",[t._v("اداره الممتلكات")]),t._v(" "),r("p",[t._v("\n            لأنك تستحق أن تدير ممتلكاتك بطريقة بسيطة وميسرة، ولأن مستأجريك\n            يستحقون سداد الأجار بإجراءات بسيطة وميسرة، تمنحك خدمه أجار الأدوات\n            الضرورية والمعلومات الثاقبة بإرضاء مستأجريك وتعظيم أرباحك.\n          ")])])])],1)],1),t._v(" "),r("section",{staticClass:"home-steps"},[r("div",{staticClass:"u-container"},[r("h1",{staticClass:"home__tittle"},[t._v("كل ما انت بحاجته للقيام بحجز اقامة")]),t._v(" "),r("p",{staticClass:"home__paragraph"}),t._v(" "),r("el-row",{staticClass:"hidden-md-and-down",attrs:{type:"flex",justify:"center"}},[r("el-col",{staticClass:"u-col-rtl",attrs:{xs:24,sm:24,md:4,lg:4,xl:4}},[r("div",{staticClass:"home-step"},[r("img",{attrs:{src:l(382),alt:""}}),t._v(" "),r("h3",[t._v("استلم الوحدة")]),t._v(" "),r("p",[t._v("\n              هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما\n            ")])])]),t._v(" "),r("el-col",{staticClass:" u-col-rtl",attrs:{xs:24,sm:24,md:2,lg:2,xl:2}},[r("img",{staticClass:"home-step-arrow",attrs:{src:l(363),alt:""}})]),t._v(" "),r("el-col",{staticClass:"u-col-rtl",attrs:{xs:24,sm:24,md:4,lg:4,xl:4}},[r("div",{staticClass:"home-step"},[r("img",{attrs:{src:l(369),alt:""}}),t._v(" "),r("h3",[t._v("ادفع")]),t._v(" "),r("p",[t._v("\n              نوفر لك كافه الطرق الامنه لاتمام عمليه الدفع وندعم سياسه استرداد\n              الاموال\n            ")])])]),t._v(" "),r("el-col",{staticClass:" u-col-rtl",attrs:{xs:24,sm:24,md:2,lg:2,xl:2}},[r("img",{staticClass:"home-step-arrow",attrs:{src:l(363),alt:""}})]),t._v(" "),r("el-col",{staticClass:"u-col-rtl",attrs:{xs:24,sm:24,md:4,lg:4,xl:4}},[r("div",{staticClass:"home-step"},[r("img",{attrs:{src:l(370),alt:""}}),t._v(" "),r("h3",[t._v("احجز")]),t._v(" "),r("p",[t._v("\n              يمكنك حجز اماكن للاقامه والسياحه والاستاجار\n            ")])])]),t._v(" "),r("el-col",{staticClass:" u-col-rtl",attrs:{xs:24,sm:24,md:4,lg:2,xl:2}},[r("img",{staticClass:"home-step-arrow",attrs:{src:l(363),alt:""}})]),t._v(" "),r("el-col",{staticClass:"u-col-rtl",attrs:{xs:24,sm:24,md:4,lg:4,xl:4}},[r("div",{staticClass:"home-step"},[r("img",{attrs:{src:l(383),alt:""}}),t._v(" "),r("h3",[t._v("سجل")]),t._v(" "),r("p",[t._v("\n              قم بانشاء حساب جديد وانضم اللي مجتمع سكن واستكشف افضل اماكن\n              الاقامه\n            ")])])])],1),t._v(" "),r("el-row",{staticClass:"hidden-lg-and-up"},[r("el-col",{attrs:{xs:24,sm:24,md:24,lg:24,xl:24}},[r("div",{staticClass:"home-step"},[r("img",{attrs:{src:l(383),alt:""}}),t._v(" "),r("h3",[t._v("سجل")]),t._v(" "),r("p",[t._v("\n              قم بانشاء حساب جديد وانضم اللي مجتمع سكن واستكشف افضل اماكن\n              الاقامه\n            ")])])]),t._v(" "),r("el-col",{attrs:{xs:24,sm:24,md:24,lg:4,xl:4}},[r("div",{staticClass:"home-step"},[r("img",{attrs:{src:l(370),alt:""}}),t._v(" "),r("h3",[t._v("احجز")]),t._v(" "),r("p",[t._v("\n              يمكنك حجز اماكن للاقامه والسياحه والاستاجار\n            ")])])]),t._v(" "),r("el-col",{attrs:{xs:24,sm:24,md:24,lg:4,xl:4}},[r("div",{staticClass:"home-step"},[r("img",{attrs:{src:l(369),alt:""}}),t._v(" "),r("h3",[t._v("ادفع")]),t._v(" "),r("p",[t._v("\n              نوفر لك كافه الطرق الامنه لاتمام عمليه الدفع وندعم سياسه استرداد\n              الاموال\n            ")])])]),t._v(" "),r("el-col",{attrs:{xs:24,sm:24,md:24,lg:4,xl:4}},[r("div",{staticClass:"home-step"},[r("img",{attrs:{src:l(382),alt:""}}),t._v(" "),r("h3",[t._v("استلم")]),t._v(" "),r("p",[t._v("\n              الان يمكنك الوصول لاستلام مكان اقامتك\n            ")])])])],1)],1)]),t._v(" "),r("section",{staticClass:"home-new-unit"},[t.recentAddedHostels?r("div",{staticClass:"u-container"},[r("h1",{staticClass:"home__tittle"},[t._v("احدث الفنادق المضافة")]),t._v(" "),r("p",{staticClass:"home__paragraph"},[t._v("\n        تصفح أماكن إقامة جميلة تضم كل وسائل راحة البيت، بالإضافة إلى المزيد.\n      ")]),t._v(" "),r("el-row",{attrs:{gutter:30}},t._l(t.recentAddedHostels,(function(t,e){return r("el-col",{key:e,staticClass:"u-col-rtl",attrs:{xs:24,sm:24,md:8,lg:6,xl:6}},[r("hostelCard",{attrs:{hostel:t,status:t.available}})],1)})),1)],1):t.isLoading?t._e():r("div",{staticClass:"u-container"},[r("h1",{staticClass:"home__tittle"},[t._v("انتظر احدث الفنادق")])])]),t._v(" "),r("section",{staticClass:"home-steps steps home-steps-upload"},[r("div",{staticClass:"u-container"},[r("h1",{staticClass:"home__tittle"},[t._v("ازاى ترفع مسكنك")]),t._v(" "),r("p",{staticClass:"home__paragraph"},[t._v("\n        هل أنت مستعد لربح الأموال؟\n      ")]),t._v(" "),r("el-row",{staticClass:"hidden-md-and-down",attrs:{type:"flex",justify:"center"}},[r("el-col",{staticClass:"u-col-rtl",attrs:{xs:24,sm:24,md:6,lg:6,xl:6}},[r("div",{staticClass:"home-step"},[r("img",{attrs:{src:l(370),alt:""}}),t._v(" "),r("h3",[t._v("استعد لاستقبال الضيوف")]),t._v(" "),r("p",[t._v("\n              بمجرد أن يكون إعلانك مباشرًا، يمكن للضيوف المؤهلين الوصول إليه.\n            ")])])]),t._v(" "),r("el-col",{staticClass:" u-col-rtl",attrs:{xs:24,sm:24,md:2,lg:2,xl:2}},[r("img",{staticClass:"home-step-arrow",attrs:{src:l(363),alt:""}})]),t._v(" "),r("el-col",{staticClass:"u-col-rtl",attrs:{xs:24,sm:24,md:6,lg:6,xl:6}},[r("div",{staticClass:"home-step"},[r("img",{attrs:{src:l(369),alt:""}}),t._v(" "),r("h3",[t._v("راجع طلبات الحجز")]),t._v(" "),r("p",[t._v("\n              يمكنك الان مراجعه طلبات الضيوف وفحص ملفاتهم الشخصيه واختيار\n              المناسب\n            ")])])]),t._v(" "),r("el-col",{staticClass:" u-col-rtl",attrs:{xs:24,sm:24,md:2,lg:2,xl:2}},[r("img",{staticClass:"home-step-arrow",attrs:{src:l(363),alt:""}})]),t._v(" "),r("el-col",{staticClass:"u-col-rtl",attrs:{xs:24,sm:24,md:6,lg:6,xl:6}},[r("div",{staticClass:"home-step"},[r("img",{attrs:{src:l(382),alt:""}}),t._v(" "),r("h3",[t._v("تسجيل مسكنك مجانًا")]),t._v(" "),r("p",[t._v("\n              يمكنك مشاركة أي مسكن دون رسوم الاشتراك، من غرفة المعيشة المشتركة\n              إلى بيتك الثاني وكل ما يمكن مشاركته.\n            ")])])])],1),t._v(" "),r("el-row",{staticClass:"hidden-lg-and-up"},[r("el-col",{attrs:{xs:24,sm:24,md:24,lg:24,xl:24}},[r("div",{staticClass:"home-step"},[r("img",{attrs:{src:l(383),alt:""}}),t._v(" "),r("h3",[t._v("تسجيل مسكنك مجانًا")]),t._v(" "),r("p",[t._v("\n              يمكنك مشاركة أي مسكن دون رسوم الاشتراك، من غرفة المعيشة المشتركة\n              إلى بيتك الثاني وكل ما يمكن مشاركته.\n            ")])])]),t._v(" "),r("el-col",{attrs:{xs:24,sm:24,md:24,lg:4,xl:4}},[r("div",{staticClass:"home-step"},[r("img",{attrs:{src:l(370),alt:""}}),t._v(" "),r("h3",[t._v("راجع طلبات الحجز")]),t._v(" "),r("p",[t._v("\n              يمكنك الان مراجعه طلبات الضيوف وفحص ملفاتهم الشخصيه واختيار\n              المناسب\n            ")])])]),t._v(" "),r("el-col",{attrs:{xs:24,sm:24,md:24,lg:4,xl:4}},[r("div",{staticClass:"home-step"},[r("img",{attrs:{src:l(369),alt:""}}),t._v(" "),r("h3",[t._v("استعد لاستقبال الضيوف")]),t._v(" "),r("p",[t._v("\n              بمجرد أن يكون إعلانك مباشرًا، يمكن للضيوف المؤهلين الوصول إليه.\n            ")])])])],1)],1)]),t._v(" "),r("section",{staticClass:"home-steps"},[r("div",{staticClass:"u-container"},[r("h1",{staticClass:"home__tittle u-margin-bottom-medium"},[t._v("شركائنا")]),t._v(" "),r("el-carousel",{attrs:{interval:2e3,height:"200px"}},[r("el-carousel-item",[r("div",{staticClass:"home-partner"},[r("img",{attrs:{src:l(563),alt:""}})])]),t._v(" "),r("el-carousel-item",[r("div",{staticClass:"home-partner"},[r("img",{staticClass:"home-partner",attrs:{src:l(564),alt:""}})])]),t._v(" "),r("el-carousel-item",[r("div",{staticClass:"home-partner"},[r("img",{staticClass:"home-partner",attrs:{src:l(565),alt:""}})])]),t._v(" "),r("el-carousel-item",[r("div",{staticClass:"home-partner"},[r("img",{staticClass:"home-partner",attrs:{src:l(566),alt:""}})])]),t._v(" "),r("el-carousel-item",[r("div",{staticClass:"home-partner"},[r("img",{staticClass:"home-partner",attrs:{src:l(567),alt:""}})])]),t._v(" "),r("el-carousel-item",[r("div",{staticClass:"home-partner"},[r("img",{staticClass:"home-partner",attrs:{src:l(568),alt:""}})])]),t._v(" "),r("el-carousel-item",[r("div",{staticClass:"home-partner"},[r("img",{attrs:{src:l(569),alt:""}})])]),t._v(" "),r("el-carousel-item",[r("div",{staticClass:"home-partner"},[r("img",{staticClass:"home-partner",attrs:{src:l(570),alt:""}})])]),t._v(" "),r("el-carousel-item",[r("div",{staticClass:"home-partner"},[r("img",{staticClass:"home-partner",attrs:{src:l(571),alt:""}})])]),t._v(" "),r("el-carousel-item",[r("div",{staticClass:"home-partner"},[r("img",{staticClass:"home-partner",attrs:{src:l(572),alt:""}})])]),t._v(" "),r("el-carousel-item",[r("div",{staticClass:"home-partner"},[r("img",{staticClass:"home-partner",attrs:{src:l(573),alt:""}})])]),t._v(" "),r("el-carousel-item",[r("div",{staticClass:"home-partner"},[r("img",{staticClass:"home-partner",attrs:{src:l(574),alt:""}})])]),t._v(" "),r("el-carousel-item",[r("div",{staticClass:"home-partner"},[r("img",{staticClass:"home-partner",attrs:{src:l(575),alt:""}})])]),t._v(" "),r("el-carousel-item",[r("div",{staticClass:"home-partner"},[r("img",{staticClass:"home-partner",attrs:{src:l(576),alt:""}})])])],1)],1)]),t._v(" "),r("section",{staticClass:"home-new-unit"},[t.specialHostels?r("div",{staticClass:"u-container"},[r("h1",{staticClass:"home__tittle"},[t._v("فنادق مميزة")]),t._v(" "),r("p",{staticClass:"home__paragraph"},[t._v("\n        مجموعة مختارة من أماكن الإقامة التي تم التحقق من جودتها وتصميمها.\n      ")]),t._v(" "),r("el-row",{attrs:{gutter:30}},t._l(t.specialHostels,(function(t,e){return r("el-col",{key:e,staticClass:"u-col-rtl",attrs:{xs:24,sm:24,md:8,lg:6,xl:6}},[r("hostelCard",{attrs:{hostel:t,status:t.available}})],1)})),1)],1):t._e()])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("header",{staticClass:"header"},[e("h1",[this._v("\n      استكشف عروض "),e("br"),this._v("\n      الفندق والبيوت وغيرها الكثير ...\n    ")])])}],!1,null,null,null);e.default=component.exports}}]);