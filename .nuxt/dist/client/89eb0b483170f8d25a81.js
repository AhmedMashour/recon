(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{582:function(e,t,r){"use strict";r.d(t,"c",function(){return l}),r.d(t,"b",function(){return n}),r.d(t,"a",function(){return o}),r.d(t,"d",function(){return c});var l=[{ar:"الرقم العسكرى",value:"militaryId",type:"text-field"},{ar:"رقم السجل",value:"recordId",type:"text-field"},{ar:"الرقم الثلاثى",value:"tripleNumber.value",type:"text-field"},{ar:"منطقة التجنيد",value:"recruitmentArea",type:"select",sourceObj:"locations",sourceKey:"recruitmentAreas"},{ar:"الإسم",value:"fullName",type:"text-field"},{ar:"السلاح",value:"force",type:"select",sourceObj:"defaults",sourceKey:"FORCES_LIST"},{ar:"الوحدة الحالية",value:"unit.unitId.name",type:"select"},{ar:"الفرقة",value:"unit.divisionId.name",type:"select"},{ar:"الجيش/المنطفة",value:"army",type:"select"},{ar:"المؤهل",value:"educationRank",type:"select",sourceObj:"defaults",sourceKey:"EDUCATION_RANKS"},{ar:"الموقف",value:"situation",type:"select"},{ar:"المعاملة التجنيدية",value:"treatment",type:"select"},{ar:"تاريخ الميلاد",value:"birthDate",type:"date"},{ar:"تاريخ الالتحاق",value:"joinDate",type:"date"},{ar:"تاريخ التسريح",value:"releaseDate",type:"date"},{ar:"المرحلة التجنيدية",value:"recruitmentLevel",type:"select"},{ar:"المحافظة",value:"address.governate",type:"select",sourceObj:"locations",sourceKey:"governates"},{ar:"المركز",value:"address.centre",type:"combobox"},{ar:"القرية",value:"address.village",type:"combobox"},{ar:"ملاحظات",value:"notes"}],n=function(e){return{icon:"mdi-folder-edit",text:e.$i18n.t("Edit"),call:e.showEditDialog}},o=function(e){return{icon:"mdi-folder-move",call:function(t){e.showSoldierDialog("changeOfUnit",t)},text:e.$i18n.t("Soldier_Change_Of_Unit")}},c=function(e){return{icon:"mdi-folder-remove",call:function(t){e.showRemoveDialog(t)},text:e.$i18n.t("Remove")}}},583:function(e,t,r){"use strict";r.d(t,"d",function(){return l}),r.d(t,"b",function(){return n}),r.d(t,"a",function(){return o}),r.d(t,"c",function(){return c});var l=[{ar:"الرقم العسكرى",value:"militaryId",type:"text-field"},{ar:"رقم الفرد",value:"individualId",type:"text-field"},{ar:"الفئة",value:"category",type:"select",sourceObj:"defaults",sourceKey:"STAFF_CATEGORIES"},{ar:"الدرجة",value:"rank",type:"select",sourceObj:"defaults",sourceKey:"STAFF_RANKS"},{ar:"الإسم",value:"fullName",type:"text-field"},{ar:"السلاح",value:"force",type:"text-field"},{ar:"الوحدة الحالية",value:"unit.unitId.name",type:"select"},{ar:"الفرقة",value:"unit.divisionId.name",type:"select"},{ar:"الجيش/المنطفة",value:"army",type:"select"},{ar:"المحافظة",value:"address.governate",type:"select",sourceObj:"locations",sourceKey:"governates"},{ar:"المركز",value:"address.centre",type:"combobox"},{ar:"القرية",value:"address.village",type:"combobox"},{ar:"المؤهل",value:"education",type:"text-field"},{ar:"المستوى الطبى",value:"medicalSituation",type:"text-field"},{ar:"تاريخ الميلاد",value:"birthDate",type:"date"},{ar:"تاريخ الضم",value:"joinDate",type:"date"},{ar:"تاريخ الترقى",value:"rankingDate",type:"date"},{ar:"رقم التليفون",value:"phoneNumber",type:"text-field"},{ar:"البطاقة العلاجية",value:"medicalCard",type:"select",sourceObj:"defaults",sourceKey:"MEDICAL_CARDS"},{ar:"الوزن",value:"weight",type:"text-field"},{ar:"الطول",value:"height",type:"text-field"},{ar:"الديانة",value:"religion",type:"text-field"}],n=function(e){return{icon:"mdi-folder-edit",text:e.$i18n.t("Edit"),call:e.showEditDialog}},o=function(e){return{icon:"mdi-folder-move",call:function(t){e.showSoldierDialog("changeOfUnit",t)},text:e.$i18n.t("Soldier_Change_Of_Unit")}},c=function(e){return{icon:"mdi-folder-remove",call:function(t){e.showRemoveDialog(t)},text:e.$i18n.t("Remove")}}},585:function(e,t){},592:function(e,t,r){"use strict";var l=[{ar:"الإسم بالكامل",value:"fullName",Branch:"الفرع",type:"text-field"},{ar:"اسم المستخدم",value:"username",type:"text-field"},{ar:"الدرجة/الرتبة",value:"rank",type:"text-field"},{ar:"الفرع",value:"branch",type:"text-field"},{ar:"الصلاحيات",value:"permissions",type:"text-field"}],n=r(582),o=r(583),c=[{ar:"رقم المكاتبة",value:"number_ar",type:"text-field"},{ar:"الجهة الواردة منها المكاتبة",value:"direction",type:"text-field",sourceObj:"defaults",sourceKey:"DIRECTIONS"},{ar:"الموضوع",value:"subject",type:"text-field"},{ar:"المرفقات",value:"attachments",type:"links-array",icon:"📎"},{ar:"نوع المكاتبة",value:"mailType",type:"select",sourceObj:"defaults",sourceKey:"MAILTYPES"},{ar:"تاريخ المكاتبة",value:"date",type:"text-field"},{ar:"رقم التسجيل بالأرشيف",value:"adminNo_ar",type:"text-field"},{ar:"الفرع المختص",value:"branch",type:"text-field"},{ar:"الأفرع للعلم",value:"branches",type:"array"},{ar:"قرار السيد رئيس الجهاز",value:"decision",type:"text-field"},{ar:"المستلم",value:"wordMule",type:"text-field"},{ar:"تاريخ إدخال المكاتبة",value:"createdAtDate",type:"date"},{ar:"التصنيف",value:"category",type:"select",sourceObj:"defaults",sourceKey:"CATEGORIES"}],d=[{ar:"رقم المكاتبة",value:"number_ar",type:"text-field"},{ar:"الجهة الصادر إليها المكاتبة",value:"direction",type:"text-field",sourceObj:"defaults",sourceKey:"DIRECTIONS"},{ar:"الموضوع",value:"subject",type:"text-field"},{ar:"المرفقات",value:"attachments",type:"links-array",icon:"📎"},{ar:"نوع المكاتبة",value:"mailType",type:"select",sourceObj:"defaults",sourceKey:"MAILTYPES"},{ar:"تاريخ المكاتبة",value:"date",type:"text-field"},{ar:"رقم التسجيل بالأرشيف",value:"adminNo_ar",type:"text-field"},{ar:"الفرع المرسل",value:"branch",type:"text-field"},{ar:"القائم بالتنفيذ",value:"wordMule",type:"text-field"},{ar:"القائم بالتسجيل من الجهة",value:"directionWordMule",type:"text-field"},{ar:"تاريخ إدخال المكاتبة",value:"createdAtDate",type:"date"},{ar:"التصنيف",value:"category",type:"select",sourceObj:"defaults",sourceKey:"CATEGORIES"}],f=[{ar:"الإسم",value:"name",type:"text-field"},{ar:"النوع",value:"type",type:"text-field",sourceObj:"defaults",sourceKey:"FORCES_LIST"},{ar:"السلاح",value:"force",type:"text-field",sourceObj:"defaults",sourceKey:"FORCES_LIST"},{ar:"الجيش",value:"army",type:"text-field",sourceObj:"defaults",sourceKey:"ARMY_LIST"},{ar:"الفرقة",value:"divisionId.name",type:"text-field"},{ar:"اللواء",value:"brigdeId.name",type:"text-field"},{ar:"الكتيبة",value:"battalionId.name",type:"text-field"}],v=[{ar:"رقم إخطار الهروب",value:"noticeNumber",type:"text-field"},{ar:"تاريخ الغياب",value:"abscenseDate",type:"text-field"},{ar:"تاريخ الشطب",value:"removalDate",type:"text-field"},{ar:"تاريخ إخطار الهروب",value:"noticeDate",type:"text-field"},{ar:"تاريخ وصول إخطار الهروب",value:"noticeArrivalDate",type:"text-field"}],y=[{ar:"رقم إخطار الهروب",value:"noticeNumber",type:"text-field"},{ar:"تاريخ الغياب",value:"abscenseDate",type:"text-field"},{ar:"تاريخ الشطب",value:"removalDate",type:"text-field"},{ar:"تاريخ إخطار الهروب",value:"noticeDate",type:"text-field"},{ar:"تاريخ وصول إخطار الهروب",value:"noticeArrivalDate",type:"text-field"},{ar:"تاريخ العودة",value:"comebackDate",type:"text-field"}],x=[{ar:"نوع المؤثر",value:"type",type:"select",sourceObj:"defaults",sourceKey:"INFLUENCES_TYPES"},{ar:"رقم إخطار الهروب",value:"noticeNumber",type:"text-field"},{ar:"تاريخ الغياب",value:"abscenseDate",type:"text-field"},{ar:"تاريخ الشطب",value:"removalDate",type:"text-field"},{ar:"تاريخ إخطار الهروب",value:"noticeDate",type:"text-field"},{ar:"تاريخ وصول إخطار الهروب",value:"noticeArrivalDate",type:"text-field"},{ar:"تاريخ العودة",value:"comebackDate",type:"text-field"}],m=[{ar:"الدورة",value:"courseType",type:"select",sourceObj:"defaults",sourceKey:"COURSETYPES"},{ar:"رقم الفرقة/الدورة",value:"courseNumber",type:"text-field"},{ar:"إسم الفرقة/الدورة",value:"courseName",type:"text-field"},{ar:"المعهد/المركز",value:"courseCollege",type:"select",sourceObj:"defaults",sourceKey:"COLLEGES"},{ar:"من تاريخ",value:"from",type:"text-field"},{ar:"إلي تاريخ",value:"to",type:"text-field"},{ar:"بند الأوامر",value:"orderNumber",type:"text-field"},{ar:"تاريخ بند الأوامر",value:"orderDate",type:"text-field"},{ar:"التقدير",value:"score",type:"text-field"}],h=[{ar:"البلد",value:"country",type:"select",sourceObj:"defaults",sourceKey:"COUNTRIES"},{ar:"تاريخ السفر",value:"travelDate",type:"text-field"},{ar:"تاريخ العودة",value:"comebackDate",type:"text-field"},{ar:"سبب السفر",value:"travelType",type:"select",sourceObj:"defaults",sourceKey:"TRAVELTYPES"},{ar:"جهة التصديق",value:"confirmationDirection",type:"text-field"},{ar:"تاريخ تصديق السفر",value:"confirmationDate",type:"text-field"},{ar:"تاريخ تصديق العودة",value:"comebackDate",type:"text-field"},{ar:"رقم تصديق السفر",value:"confirmationNumber",type:"text-field"},{ar:"رقم تصديق العودة",value:"confirmationComebackNumber",type:"text-field"}],O=[{ar:"المحافظة",value:"governate",type:"select",sourceObj:"locations",sourceKey:"governates"},{ar:"دور التخرج",value:"graduationLevel",type:"select",sourceObj:"defaults",sourceKey:"GRADUATION_LEVELS"},{ar:"تاريخ الحصول على الدرجة",value:"date",type:"text-field"},{ar:"الشهادة",value:"degree",type:"select",sourceObj:"defaults",sourceKey:"DEGREES"},{ar:"رقم التسجيل",value:"literacyNumber",type:"text-field"},{ar:"رقم الجلوس",value:"seatNumber",type:"text-field"},{ar:"المجموع الكلي",value:"score",type:"text-field"}],D=[{ar:"الدرجة الجديدة",value:"lowerRank",type:"select",sourceObj:"defaults",sourceKey:"RANKS"},{ar:"الدرجة القديمة",value:"higherRank",type:"select",sourceObj:"defaults",sourceKey:"RANKS"},{ar:"تاريخ الترقي",value:"date",type:"text-field"},{ar:"بند الأوامر",value:"orderNumber",type:"text-field"},{ar:"تاريخ بند الأوامر",value:"orderDate",type:"text-field"}],S=[{ar:"الدرجة الجديدة",value:"lowerRank",type:"select",sourceObj:"defaults",sourceKey:"RANKS"},{ar:"الدرجة القديمة",value:"higherRank",type:"select",sourceObj:"defaults",sourceKey:"RANKS"},{ar:"تاريخ الترقي",value:"date",type:"text-field"},{ar:"بند الأوامر",value:"orderNumber",type:"text-field"},{ar:"تاريخ بند الأوامر",value:"orderDate",type:"text-field"}],_=[{ar:"نوع المؤثر",value:"type",type:"select",sourceObj:"defaults",sourceKey:"INFLUENCES_TYPES"},{ar:"الدرجة الجديدة",value:"higherRank",type:"select",sourceObj:"defaults",sourceKey:"RANKS"},{ar:"الدرجة القديمة",value:"lowerRank",type:"select",sourceObj:"defaults",sourceKey:"RANKS"},{ar:"التاريخ",value:"date",type:"text-field"},{ar:"بند الأوامر",value:"orderNumber",type:"text-field"},{ar:"تاريخ بند الأوامر",value:"orderDate",type:"text-field"}],j=[{ar:"رقم الرخصة الأولى",value:"firstLicenseNumber",type:"text-field"},{ar:"رقم الرخصة الثانية",value:"secondLicenseNumber",type:"text-field"},{ar:"تاريخ الرخصة الأولى",value:"firstLicenseDate",type:"text-field"},{ar:"تاريخ الرخصة الثانية",value:"secondLicenseDate",type:"text-field"},{ar:"تاريخ اخر كشف بالكومسيون الطبي",value:"lastCommissionDate",type:"text-field"}],N=[{ar:"العقوبة",value:"title",type:"select",sourceObj:"defaults",sourceKey:"PUNISHMENTS"},{ar:"الأمر بالعقوبة",value:"orderMaker",type:"select",sourceObj:"defaults",sourceKey:"ORDERMAKERS"},{ar:"تاريخ بداية العقوبة",value:"startDate",type:"text-field"},{ar:"مده العقوبة",value:"period",type:"text-field"},{ar:"بند أوامر الوحدة",value:"orderNumber",type:"text-field"},{ar:"تاريخ بند أوامر الوحدة",value:"orderDate",type:"text-field"},{ar:"تاريخ الغياب من",value:"abscenseDate",type:"text-field"},{ar:"تاريخ الغياب إلى",value:"comebackDate",type:"text-field"},{ar:"نص الجريمة/القانون/المادة",value:"crimeMajorLaw",sourceObj:"defaults",sourceKey:"CRIMEMAJORLAWS"},{ar:"نوع الجريمة",value:"dishonored",type:"text-field"},{ar:"بيان",value:"statement",type:"text-field"},{ar:"المحكمة",value:"sentenceCourt",type:"text-field"},{ar:"مكان انعقاد المحكمة",value:"courtPlace",type:"text-field"},{ar:"رقم القضية",value:"caseNumber",type:"text-field"},{ar:"تاريخ القضية",value:"caseDate",type:"text-field"},{ar:"الغرامة",value:"fine",type:"text-field"},{ar:"جهة رد الأعتبار",value:"answerDirection",type:"text-field"},{ar:"تاريخ رد الأعتبار",value:"answerDate",type:"text-field"}],R=[{ar:"نوع الكود",value:"type",type:"text-field"},{ar:"الإسم",value:"ar",type:"text-field"}],K=[{ar:"جهات عسكرية",value:"directions",type:"text-field"},{ar:"قائمين بالتسجيل",value:"word_mules",type:"text-field"},{ar:"أفرع",value:"branches",type:"text-field"},{ar:"تصنيفات",value:"categories",type:"text-field"}],w=[{ar:"الرقم العسكرى",value:"soldierId",type:"text-field"},{ar:"إسم المجند",value:"fullName",type:"text-field"},{ar:"الوحدة المحول منها",value:"pastUnit",type:"text-field"},{ar:"الوحدة المحول إليها",value:"unitName",type:"text-field"},{ar:"إسم المستخدم",value:"username",type:"text-field"},{ar:"التاريخ",value:"createdAt",type:"text-field"}];r(585);r.d(t,"t",function(){return l}),r.d(t,"h",function(){return n.c}),r.d(t,"p",function(){return o.d}),r.d(t,"s",function(){return f}),r.d(t,"m",function(){return d}),r.d(t,"k",function(){return c}),r.d(t,"c",function(){return R}),r.d(t,"d",function(){return K}),r.d(t,"a",function(){return w}),r.d(t,"i",function(){return v}),r.d(t,"b",function(){return y}),r.d(t,"j",function(){return x}),r.d(t,"q",function(){return m}),r.d(t,"r",function(){return h}),r.d(t,"l",function(){return O}),r.d(t,"o",function(){return _}),r.d(t,"e",function(){return D}),r.d(t,"g",function(){return S}),r.d(t,"f",function(){return j}),r.d(t,"n",function(){return N})},931:function(e,t,r){"use strict";r.r(t);r(41),r(44);var l=r(11),n=(r(51),r(14)),o=r(578),c=r(27),d=r(52),f=r(581),v=r(592),y={layout:"dashboard",components:{materialCard:o.a},computed:Object(n.a)({},Object(c.c)({locations:"app/getLocations",defaults:"app/getDefaults"}),{headers:function(){var e=this,t=[];return this.fields.map(function(r){e.fieldsValue.find(function(e){return r.value===e})&&t.push({sortable:!0,text:r.ar,value:r.value,width:r.width})}),t},user:function(){try{return JSON.parse(localStorage.getItem("user"))}catch(e){return{}}}}),data:function(){return{isLoading:!1,isAdvancedSearch:!1,view:!1,status:"accepted",search:"",type:"branches",constant:{ar:void 0,value:void 0,type:void 0,extra:{rank:void 0}},types:v.d,fields:v.c,fieldsValue:v.c.map(function(e){return e.value}),data:[],pagination:{rowsPerPage:10,sortBy:"createdAt",descending:!0},searchFields:[]}},methods:{getKeyPair:f.e,filterAllNumbers:f.c,translateType:function(e){var t=v.d.find(function(t){return t.value===e.type});if(t)return t.ar},slice:function(text){if(text){var e=text.slice(0,50);return e.length<50?e:[e,"..."].join("")}},renderConstants:function(data){this.data=data,this.pagination.totalItems=this.data.length,this.isLoading=!0},init:function(){var e=Object(l.a)(regeneratorRuntime.mark(function e(){var data;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return this.isLoading=!0,this.data=[],e.next=4,this.loadData();case 4:data=e.sent,console.log("constants data",data),this.data=data,this.isLoading=!0;case 8:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),loadData:function(){var e=Object(l.a)(regeneratorRuntime.mark(function e(){var t,r,l=arguments;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return(t=(t=l.length>0&&void 0!==l[0]&&l[0])||{}).type=this.type,"/constant",e.next=6,Object(d.d)("/constant",t);case 6:if(!(r=e.sent).error){e.next=10;break}return console.log("error fetching soldiers",r.error),e.abrupt("return",[]);case 10:return e.abrupt("return",r.constants);case 11:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),submit:function(){var e=Object(l.a)(regeneratorRuntime.mark(function e(){var t,r=this;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.constant.ar){e.next=11;break}return"/constant",this.constant.type=this.type,this.constant.value=this.constant.ar,e.next=6,Object(d.e)("/constant",this.constant);case 6:if(!(t=e.sent).error){e.next=9;break}return e.abrupt("return",f.b.fire({icon:"error",title:t.error,timer:4e3,showConfirmButton:!1}));case 9:f.b.fire({icon:"success",title:this.$i18n.t("Added_".concat(this.type.replace(/\-/g,"_").toUpperCase(),"_Success")),timer:4e3,showConfirmButton:!1}),setTimeout(function(){r.init()},2e3);case 11:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},created:function(){var e=Object(l.a)(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:this.init();case 1:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),middleware:["auth","isNotLoggedIn","isAuthorized"]},x=r(22),m=r(34),h=r.n(m),O=r(184),D=r(739),S=r(176),_=r(915),j=r(177),N=r(178),R=r(786),K=r(573),component=Object(x.a)(y,function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",{attrs:{"fill-height":"",fluid:"","grid-list-xl":"",dir:"rtl",dark:""}},[r("v-layout",{attrs:{"justify-center":"",wrap:""}},[r("v-flex",{attrs:{md12:""}},[r("material-card",{attrs:{color:"primary",title:e.$t("List_Codes"),dir:"rtl"}},[r("v-card-title",[r("v-layout",{attrs:{wrap:""}},[r("v-flex",{attrs:{xs12:"",md2:""}},[r("v-select",{staticClass:"form-select soldier-fields",attrs:{"no-data-text":e.$t("No_Selections"),items:e.types,"item-text":"ar","item-value":"value",label:e.$t("Code_Type")},on:{change:e.init},model:{value:e.type,callback:function(t){e.type=t},expression:"type"}})],1),e._v(" "),r("v-flex",{attrs:{xs12:"",md4:""}},[r("v-text-field",{attrs:{"append-icon":"mdi-magnify",label:e.$t("Search"),"single-line":""},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})],1),e._v(" "),r("v-flex",{attrs:{xs12:"",md4:""}},[r("v-text-field",{attrs:{label:e.$t("ADD_"+this.type.replace(/\-/g,"_").toUpperCase()),"single-line":""},model:{value:e.constant.ar,callback:function(t){e.$set(e.constant,"ar",t)},expression:"constant.ar"}})],1),e._v(" "),r("v-flex",{attrs:{xs12:"",md2:"","text-xs-right":""}},[r("v-btn",{staticClass:"font-weight-light filter-table-button v-btn-facebook",on:{click:e.submit}},[e._v("\n                "+e._s(e.$t("Add"))+"\n              ")])],1)],1)],1),e._v(" "),r("v-data-table",{ref:"soldiersTable",attrs:{"calculate-widths":"",id:"printMe",headers:e.headers,items:e.data,search:e.search,"no-data-text":e.$t("No_Data_Available"),"no-results-text":e.$t("No_Results_Available"),"rows-per-page-text":e.$t("Rows_Per_Page"),pagination:e.pagination,loading:e.isLoading,filter:e.filterAllNumbers,"prev-icon":"mdi-menu-right","next-icon":"mdi-menu-left"},on:{"update:pagination":function(t){e.pagination=t}},scopedSlots:e._u([{key:"headerCell",fn:function(t){var header=t.header;return[r("span",{staticClass:"subheading font-weight-light text-label text--darken-3",domProps:{textContent:e._s(header.text)}})]}},{key:"items",fn:function(t){var l=t.item;return[r("tr",{attrs:{active:l.delievered&&!l.delievered.includes(e.user.id)||l.selected}},e._l(e.headers,function(header){return r("td",{key:header.value},["type"===header.value?[r("span",[e._v(" "+e._s(e.translateType(l)))])]:[r("span",[e._v("\n                    "+e._s(e.getKeyPair(header.value.split("."),l)))])]],2)}),0)]}},{key:"pageText",fn:function(t){return[e._v("\n            الحالى "+e._s(t.pageStart)+" - "+e._s(t.pageStop)+" من عدد كلى\n            "+e._s(t.itemsLength)+"\n          ")]}}])})],1)],1)],1)],1)},[],!1,null,null,null);t.default=component.exports;h()(component,{VBtn:O.a,VCardTitle:D.a,VContainer:S.a,VDataTable:_.a,VFlex:j.a,VLayout:N.a,VSelect:R.a,VTextField:K.a})}}]);