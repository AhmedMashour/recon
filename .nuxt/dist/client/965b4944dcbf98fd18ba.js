(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{346:function(e,t){e.exports=[{value:"Alexandria",label:"الإسكندرية"},{value:"Ismailia",label:"الإسماعيلية"},{value:"Aswan",label:"أسوان"},{value:"Asyut",label:"أسيوط"},{value:"Luxor",label:"الأقصر"},{value:"Red Sea",label:"البحر الأحمر"},{value:"El Beheira",label:"البحيرة"},{value:"Beni Suef",label:"بني سويف"},{value:"Port Said",label:"بورسعيد"},{value:"South Sinai",label:"جنوب سيناء"},{value:"Giza",label:"الجيزة"},{value:"Dakahlia",label:"الدقهلية"},{value:"Damietta",label:"دمياط"},{value:"Sohag",label:"سوهاج"},{value:"Suez",label:"السويس"},{value:"Ash Sharqia",label:"الشرقية"},{value:"North Sinai",label:"شمال سيناء"},{value:"Gharbia",label:"الغربية"},{value:"Faiyum",label:"الفيوم"},{value:"Cairo",label:"القاهرة"},{value:"Al Qalyubia",label:"القليوبية"},{value:"Qena",label:"قنا"},{value:"Kafr El Sheikh",label:"كفر الشيخ"},{value:"Marsa Matruh",label:"مرسى مطروح"},{value:"Menofia",label:"المنوفية"},{value:"Minya",label:"المنيا"},{value:"New Valley",label:"الوادي الجديد"}]},348:function(e,t,r){"use strict";var l=r(4),n=r(24),o=r(36),c=r(200),d=r(86),m=r(13),h=r(58).f,v=r(87).f,f=r(11).f,_=r(350).trim,V=l.Number,S=V,y=V.prototype,k="Number"==o(r(128)(y)),x="trim"in String.prototype,w=function(e){var t=d(e,!1);if("string"==typeof t&&t.length>2){var r,l,n,o=(t=x?t.trim():_(t,3)).charCodeAt(0);if(43===o||45===o){if(88===(r=t.charCodeAt(2))||120===r)return NaN}else if(48===o){switch(t.charCodeAt(1)){case 66:case 98:l=2,n=49;break;case 79:case 111:l=8,n=55;break;default:return+t}for(var code,c=t.slice(2),i=0,m=c.length;i<m;i++)if((code=c.charCodeAt(i))<48||code>n)return NaN;return parseInt(c,l)}}return+t};if(!V(" 0o1")||!V("0b1")||V("+0x1")){V=function(e){var t=arguments.length<1?0:e,r=this;return r instanceof V&&(k?m((function(){y.valueOf.call(r)})):"Number"!=o(r))?c(new S(w(t)),r,V):w(t)};for(var N,C=r(9)?h(S):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),E=0;C.length>E;E++)n(S,N=C[E])&&!n(V,N)&&f(V,N,v(S,N));V.prototype=y,y.constructor=V,r(14)(l,"Number",V)}},350:function(e,t,r){var l=r(7),n=r(35),o=r(13),c=r(351),d="["+c+"]",m=RegExp("^"+d+d+"*"),h=RegExp(d+d+"*$"),v=function(e,t,r){var n={},d=o((function(){return!!c[e]()||"​"!="​"[e]()})),m=n[e]=d?t(f):c[e];r&&(n[r]=m),l(l.P+l.F*d,"String",n)},f=v.trim=function(e,t){return e=String(n(e)),1&t&&(e=e.replace(m,"")),2&t&&(e=e.replace(h,"")),e};e.exports=v},351:function(e,t){e.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},487:function(e,t,r){"use strict";r.d(t,"a",(function(){return c})),r.d(t,"b",(function(){return d})),r.d(t,"d",(function(){return m})),r.d(t,"g",(function(){return h})),r.d(t,"f",(function(){return v})),r.d(t,"c",(function(){return _})),r.d(t,"e",(function(){return V}));r(495),r(25),r(17),r(89),r(88),r(85),r(129);var l=r(347),n=r.n(l),o={AR:{ROOMS:"غرف",UNITS:"وحدات",PEOPLE:"افراد"},EN:{ROOMS:"rooms",UNITS:"units",PEOPLE:"people"},TWICE:{ROOMS:"غرفتين",UNITS:"وحدات",PEOPLE:"فردين"},LESS_THAN_TEN:{ROOMS:"غرف",UNITS:"وحدات",PEOPLE:"افراد"},MORE_THAN_TEN:{ROOMS:"غرفة",UNITS:"وحدة",PEOPLE:"فرد"},REQUEST_STATUS:{PENDING:"pending",ACCEPTED:"accepted",REJECTED:"rejected"},IMAGE_MIMETYPES:{PNG:"image/png",JPE:"image/jpeg",JPEG:"image/jpeg",JPG:"image/jpeg",SVG:"image/svg+xml"}},c=n.a.mixin({position:"center"}),d=n.a.mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:2e3}),m=function(path){this.$router.push(path)},h=function(e){var t=String(e.type).split("/")[1]||String(e.name).split(".")[1];return console.log("file tpye",t,e,e.type),Object.keys(o.IMAGE_MIMETYPES).find((function(e){return e.toLowerCase()===t.toLowerCase()}))},v=function(e,t,r){return new Promise((function(l){var image=new Image,n=0,o=0;image.src=window.URL.createObjectURL(e),image.onload=function(){n=this.width,o=this.height,n>=r&&o>=t&&l(!0),l(!1)}}))},f=function(e,t){return t?e.join(" "):e[1]},_=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]&&arguments[2],l=parseInt(t,10);return 2===l?f([l,o.TWICE[e.toUpperCase()]],r):l>2&&l<10?f([l,o.LESS_THAN_TEN[e.toUpperCase()]],r):l>10||1===l?f([l,o.MORE_THAN_TEN[e.toUpperCase()]],r):void 0},V=function(e){Object.keys(e.response.data.error).map((function(t){var r=e.response.data.error[t];if("string"==typeof r)return d.fire({icon:"error",title:r});r.map((function(p){return d.fire({icon:"error",title:t+" "+p})}))})),Object.keys(e.response.data.error).map((function(t){var r=e.response.data.error[t];if("string"==typeof r)return d.fire({icon:"error",title:r});r.map((function(p){return d.fire({icon:"error",title:t+" "+p})}))}))};Object.freeze(o.REQUEST_STATUS)},488:function(e,t){e.exports.freeServices=[{enValue:"free_airport_transfers",arValue:"انتقالات مجانية للمطار",icon:"el-icon-monitor",checked:!1},{enValue:"free_parking",arValue:"موقف سيارات مجاني",icon:"el-icon-monitor",checked:!1},{enValue:"luggage_storage",arValue:"تخزين الأمتعة",icon:"el-icon-monitor",checked:!1},{enValue:"free_city_maps",arValue:"خرائط مجانية",icon:"el-icon-monitor",checked:!1},{enValue:"free_wifi",arValue:"واي فاي مجاني",icon:"el-icon-monitor",checked:!1},{enValue:"towels_included",arValue:"يشمل المناشف",icon:"el-icon-monitor",checked:!1},{enValue:"free_city_tour",arValue:"جولة مجانية بالمدينة",icon:"el-icon-monitor",checked:!1},{enValue:"free_internet_access",arValue:"واى فاى مجانى    ",icon:"el-icon-monitor",checked:!1},{enValue:"lockers",arValue:"خزائن",icon:"el-icon-monitor",checked:!1}],e.exports.generalServices=[{enValue:"airport_transfers",arValue:"انتقالات المطار",icon:"el-icon-monitor",checked:!1},{enValue:"beauty_salon",arValue:"صالون تجميل",icon:"el-icon-monitor",checked:!1},{enValue:"direct_dial_telephone",arValue:"هاتف",icon:"el-icon-monitor",checked:!1},{enValue:"gym",arValue:"جيم",icon:"el-icon-monitor",checked:!1},{enValue:"internet_cafe",arValue:"مقهى انترنت",icon:"el-icon-monitor",checked:!1},{enValue:"laundry_facilities",arValue:"مرافق غسيل الملابس",icon:"el-icon-monitor",checked:!1},{enValue:"dishwasher",arValue:"غسالة أطباق",icon:"el-icon-monitor",checked:!1},{enValue:"hairdryers",arValue:"مجففات الشعر",icon:"el-icon-monitor",checked:!1},{enValue:"adaptors",arValue:"محولات",icon:"el-icon-monitor",checked:!1},{enValue:"bar",arValue:"ملهي ليلي",icon:"el-icon-monitor",checked:!1},{enValue:"free_city_tour",arValue:"جولة مجانية للمدينة",icon:"el-icon-monitor",checked:!1},{enValue:"fridge_freezer",arValue:"ثلاجة التجميد    ",icon:"el-icon-monitor",checked:!1},{enValue:"air_conditioning",arValue:"تكييف",icon:"el-icon-monitor",checked:!1},{enValue:"dryer",arValue:"مرافق غسيل الملابس",icon:"el-icon-monitor",checked:!1}],e.exports.hostelServices=[{enValue:"airport_transfers",arValue:"انتقالات المطار",icon:"el-icon-monitor",checked:!1},{enValue:"breakfast_included",arValue:"يوجد إفطار",icon:"el-icon-monitor",checked:!1},{enValue:"cafe",arValue:"كافيه",icon:"el-icon-monitor",checked:!1},{enValue:"direct_dial_telephone",arValue:"هاتف",icon:"el-icon-monitor",checked:!1},{enValue:"dvds",arValue:"أقراص فيديو رقمية",icon:"el-icon-monitor",checked:!1},{enValue:"gym",arValue:"جيم",icon:"el-icon-monitor",checked:!1},{enValue:"internet_cafe",arValue:"مقهى انترنت",icon:"el-icon-monitor",checked:!1},{enValue:"atm",arValue:"ماكينة الصراف الآلي",icon:"el-icon-monitor",checked:!1},{enValue:"elevator",arValue:"مصعد",icon:"el-icon-monitor",checked:!1},{enValue:"bar",arValue:"ملهي ليلي",icon:"el-icon-monitor",checked:!1},{enValue:"bicycle_parking",arValue:"مكان مخصص لركن الدرجات",icon:"el-icon-monitor",checked:!1},{enValue:"free_city_tour",arValue:"جولة مجانية للمدينة",icon:"el-icon-monitor",checked:!1},{enValue:"hairdryers_for_hire",arValue:"مجففات الشعر",icon:"el-icon-monitor",checked:!1},{enValue:"currency_exchange",arValue:"تحويل العملات",icon:"el-icon-monitor",checked:!1},{enValue:"fax_service",arValue:"خدمة الفاكس",icon:"el-icon-monitor",checked:!1},{enValue:"laundry_facilities",arValue:"مرافق غسيل الملابس",icon:"el-icon-monitor",checked:!1},{enValue:"luggage_storage",arValue:"تخزين الأمتعة",icon:"el-icon-monitor",checked:!1},{enValue:"mini_supermarket",arValue:"سوبرماركت صغير",icon:"el-icon-monitor",checked:!1},{enValue:"parking",arValue:"موقف سيارات",icon:"el-icon-monitor",checked:!1},{enValue:"reception_limited_hours",arValue:"ساعات استقبال محدوده",icon:"el-icon-monitor",checked:!1},{enValue:"safe_deposit_box",arValue:"صندوق الإيداع الآمن",icon:"el-icon-monitor",checked:!1},{enValue:"meals_available",arValue:"متاح وجبات",icon:"el-icon-monitor",checked:!1},{enValue:"pool_table",arValue:"طاولة بلياردو",icon:"el-icon-monitor",checked:!1},{enValue:"towels_included",arValue:"يشمل المناشف",icon:"el-icon-monitor",checked:!1}],e.exports.entertainmentServices=[{enValue:"board_games",arValue:"ألعاب الطاولة",icon:"el-icon-monitor",checked:!1},{enValue:"games_room",arValue:"غرفة الألعاب",icon:"el-icon-monitor",checked:!1},{enValue:"dvds",arValue:"أقراص فيديو رقمية",icon:"el-icon-monitor",checked:!1},{enValue:"pool_table",arValue:"طاولة بلياردو",icon:"el-icon-monitor",checked:!1}],e.exports.foodServices=[{enValue:"breakfast",arValue:"وجبة افطار",icon:"el-icon-monitor",checked:!1},{enValue:"launch",arValue:"وجبة غداء",icon:"el-icon-monitor",checked:!1},{enValue:"dinner",arValue:"وجبة عشاء",icon:"el-icon-monitor",checked:!1},{enValue:"all_inclusive",arValue:"شامل جميع الوجبات",icon:"el-icon-monitor",checked:!1},{enValue:"tea_coffee",arValue:"شاى و قهوة",icon:"el-icon-monitor",checked:!1},{enValue:"all_not_included",arValue:"لا يشمل اي وجبه",icon:"el-icon-monitor",checked:!1}]},489:function(e,t,r){var l=r(7);l(l.S,"Number",{isInteger:r(490)})},490:function(e,t,r){var l=r(12),n=Math.floor;e.exports=function(e){return!l(e)&&isFinite(e)&&n(e)===e}},495:function(e,t,r){var l=r(12),meta=r(201).onFreeze;r(203)("freeze",(function(e){return function(t){return e&&l(t)?e(meta(t)):t}}))},558:function(e,t,r){var l=r(7);l(l.S,"Math",{trunc:function(e){return(e>0?Math.floor:Math.ceil)(e)}})},559:function(e,t,r){var content=r(638);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(34).default)("4360ed30",content,!0,{sourceMap:!1})},568:function(e,t,r){"use strict";r(558),r(85),r(348);var l=r(16),n=function(e,t){var r=t||document.body;r.insertBefore(e,r.firstChild)},o={name:"ViewUpload",props:{active:{default:!1,type:Boolean},src:{default:null,type:String}},mounted:function(){n(this.$refs.view)},upload:function(){n(this.$refs.view)},methods:{closeView:function(e){"IMG"!==e.target.tagName&&(this.$parent.viewActive=!1)}}},c=r(3),d=Object(c.a)(o,(function(){var e=this.$createElement,t=this._self._c||e;return t("transition",{attrs:{name:"view-upload"}},[t("div",{ref:"view",staticClass:"view-upload",on:{click:this.closeView}},[t("img",{attrs:{src:this.src,alt:"image"}})])])}),[],!1,null,null,null).exports,m=0,h={name:"VsUpload",components:{viewUpload:d},inheritAttrs:!1,props:{fileName:{default:null,type:String},text:{default:"Upload File",type:String},textMax:{default:"Maximum of files reached",type:String},limit:{default:null,type:[Number,String]},action:{default:null,type:String},headers:{default:null,type:Object},data:{default:null,type:Object},automatic:{default:!1,type:Boolean},showUploadButton:{default:!0,type:Boolean},singleUpload:{default:!1,type:Boolean},value:{default:function(){return[]},type:Array}},data:function(){return{inputValue:null,type:null,srcs:[],filesx:[],itemRemove:[],percent:0,viewActive:!1,viewSrc:null}},computed:{getFilesFilter:function(){return this.srcs.filter((function(e){return!e.remove}))},getFilesxFilter:function(){return this.srcs.filter((function(e){return e.wanted}))},postFiles:function(){var e=Array.prototype.slice.call(this.filesx);return e=e.filter((function(e){return!e.hasOwnProperty("remove")})),e.length}},watch:{percent:function(){var e=this;this.percent>=100&&(this.srcs.forEach((function(e){e.percent=100})),setTimeout((function(){e.percent=0}),1e3))}},created:function(){Object(l.b)()},methods:{viewImage:function(e,t){if("click"===("ontouchstart"in window||window.DocumentTouch&&document instanceof window.DocumentTouch?"touchstart":"click"))this.viewActive=!0,this.viewSrc=e;else if("touchend"===t.type){var r=(new Date).getTime(),l=r-m;clearTimeout(void 0),l<500&&l>0&&(this.viewActive=!0,this.viewSrc=e,event.preventDefault()),m=r}},removeFile:function(e){var t=this;this.itemRemove.push(e),this.$emit("on-delete",this.filesx[e]),setTimeout((function(){t.filesx[e].remove=!0,t.srcs[e].wanted=!1,t.$emit("input",t.getFilesxFilter)}),301)},getFiles:function(e){this.$emit("update:vsFile",e.target.value);var t=this;function r(e){var r="h",image=new Image;image.src=e.target.result,image.onload=function(){this.width>this.height&&(r="w"),function(image,e){t.srcs.push({src:image.src,orientation:e,type:t.typex,url:null,percent:null,error:!1,remove:null,wanted:!0})}(this,r)}}var l=e.target.files,n=this.srcs.length-this.itemRemove.length;for(var o in l)if(l.hasOwnProperty(o)){if(this.limit&&++n>Number(this.limit))break;var c=new FileReader,d=l[o];/image.*/.test(d.type)?(this.typex="image",this.filesx.push(d),c.onload=r,c.readAsDataURL(d)):/video.*/.test(d.type)?(this.typex="video",this.filesx.push(d),t.srcs.push({src:null,name:d.name,type:"video",url:null,percent:null,error:!1,remove:null,wanted:!0})):(this.filesx.push(d),t.srcs.push({src:null,name:d.name,url:null,percent:null,error:!1,remove:null,wanted:!0})),this.$emit("change",e.target.value,this.filesx),this.$emit("input",this.getFilesxFilter)}var input=this.$refs.fileInput;input.type="text",input.type="file",this.automatic&&this.upload("all")},upload:function(e){var t=this,r=new FormData,l=Array.prototype.slice.call(this.filesx);"number"==typeof e?l=[l[e]]:"all"===e&&(l=l.filter((function(e){return!e.hasOwnProperty("remove")})));var data=this.data||{};for(var n in data)r.append(n,data[n]);l.forEach((function(r,i){var l=new FormData;for(var n in data)l.append(n,data[n]);l.append(t.fileName,r,r.name),t.sign(r.name,r.type).then((function(l){var n=l.presignedURL,o=l.url,c=l.contentType;console.log("seeting source ",e,"or",i),"number"==typeof e?(t.srcs[e].url=o,t.filesx[e].url=o):(t.srcs[i].url=o,t.filesx[i].url=o);var d={presignedURL:n,url:o,contentType:c,fileType:r.type,fileName:r.name};t.uploadx(e,r,d)}))}))},sign:function(e,t){return l.a.get("uploader/sign?file-name=".concat(e,"&default-ext=").concat(t)).then((function(e){return e.data})).catch((function(e){return{error:"unable to get signed url",message:e.message}}))},uploadx:function(e,t,r){var l=this,n=new XMLHttpRequest;n.onerror=function(t){l.$emit("on-error",t),"number"==typeof e&&(l.srcs[e].error=!0),this.$emit("input",this.getFilesxFilter)},n.onload=function(t){n.status<200||n.status>=300?(l.$emit("on-error",t),"number"==typeof e&&(l.srcs[e].error=!0),this.$emit("input",this.getFilesxFilter)):(l.$emit("on-success",t),l.$emit("input",l.getFilesxFilter))},n.upload&&(n.upload.onprogress=function(t){if(t.total>0){var r=t.loaded/t.total*100;"number"==typeof e?l.srcs[e].percent=Math.trunc(r):l.percent=Math.trunc(r)}}),console.log("putting",r),n.open("PUT",r.presignedURL,!0);var o=this.headers||{"Content-Type":r.contentType||"image/".concat(r.fileType),"content-disposition":"inline; ".concat(r.fileName),"x-amz-acl":"public-read"};for(var head in o)o.hasOwnProperty(head)&&null!==o[head]&&n.setRequestHeader(head,o[head]);n.send(t)}}},v=Object(c.a)(h,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"con-upload"},[e.viewActive?r("view-upload",{attrs:{src:e.viewSrc}}):e._e(),e._v(" "),r("div",{staticClass:"con-img-upload"},[e._l(e.getFilesFilter,(function(img,t){return r("div",{key:t,staticClass:"img-upload",class:{fileError:img.error,removeItem:e.itemRemove.includes(t)}},[r("button",{staticClass:"btn-x-file",attrs:{type:"button"},on:{click:function(r){return e.removeFile(t)}}},[r("i",{staticClass:"material-icons notranslate",attrs:{translate:"no"}},[e._v("\n          clear\n        ")])]),e._v(" "),e.showUploadButton?r("button",{staticClass:"btn-upload-file",class:{"on-progress":img.percent,"ready-progress":img.percent>=100},style:{height:img.percent+"%"},on:{click:function(r){return e.upload(t)}}},[r("i",{staticClass:"material-icons notranslate",attrs:{translate:"no"}},[e._v("\n          "+e._s(img.percent>=100?img.error?"report_problem":"cloud_done":"cloud_upload")+"\n        ")]),e._v(" "),r("span",[e._v(e._s(img.percent)+" %")])]):e._e(),e._v(" "),img.src?r("img",{key:t,style:{maxWidth:"h"==img.orientation?"100%":"none",maxHeight:"w"==img.orientation?"100%":"none"},attrs:{src:img.src},on:{touchend:function(t){return e.viewImage(img.src,t)},click:function(t){return e.viewImage(img.src,t)}}}):e._e(),e._v(" "),img.src?e._e():r("h4",{staticClass:"text-archive"},[r("i",{staticClass:"material-icons notranslate",attrs:{translate:"no"}},[e._v("\n          description\n        ")]),e._v(" "),r("span",[e._v("\n          "+e._s(img.name)+"\n        ")])])])})),e._v(" "),r("div",{staticClass:"con-input-upload",class:{"on-progress-all-upload":0!=e.percent,"is-ready-all-upload":e.percent>=100,"disabled-upload":!(!e.$attrs.hasOwnProperty("disabled")&&!e.limit)&&e.srcs.length-e.itemRemove.length>=Number(e.limit)}},[r("input",e._b({ref:"fileInput",attrs:{disabled:!(!e.$attrs.disabled&&!e.limit)&&e.srcs.length-e.itemRemove.length>=Number(e.limit),type:"file"},on:{change:e.getFiles}},"input",e.$attrs,!1)),e._v(" "),r("span",{staticClass:"text-input"},[e._v("\n        "+e._s(e.text)+"\n      ")]),e._v(" "),r("span",{staticClass:"input-progress",style:{width:e.percent+"%"}}),e._v(" "),e.showUploadButton?r("button",{staticClass:"btn-upload-all vs-upload--button-upload",attrs:{disabled:0==e.filesx.length,type:"button",title:"Upload"},on:{click:function(t){return e.upload("all")}}},[r("i",{staticClass:"material-icons notranslate",attrs:{translate:"no"}},[e._v("\n          cloud_upload\n        ")])]):e._e()])],2)],1)}),[],!1,null,null,null);t.a=v.exports},637:function(e,t,r){"use strict";var l=r(559);r.n(l).a},638:function(e,t,r){(t=r(33)(!1)).push([e.i,".emptyServices[data-v-c0703396]{padding-top:4px;position:absolute}.emptyImage[data-v-c0703396],.emptyServices[data-v-c0703396]{color:#f56c6c;font-size:12px;line-height:1}",""]),e.exports=t},670:function(e,t,r){"use strict";r.r(t);r(129),r(202),r(348),r(489);var l=r(347),n=r.n(l),o=r(499),c=r.n(o),d=(r(500),r(488)),m=r.n(d),h=r(346),v=r.n(h),f=r(487),_=r(16),V=(r(349),r(568)),S={components:{VuePhoneNumberInput:c.a,vsUpload:V.a},middleware:["auth","isHouseOwner"],data:function(){var e=function(e,t,r){Number.isInteger(t)?t<1?r(new Error("يجب ان يكون على الاقل 1")):r():r(new Error("يجب ان يكون عدد"))},t=function(e,t,r){var l=String(t).trim().length;l<10||l>200?r(new Error("يجب أن يكون بين 10 و 200 أحرف")):r()};return{Toast:n.a.mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:3e3}),testImage:{},advantagesDialogVisible:!1,currentServices:{name:"",allServices:[]},rules:{email:[{required:!0,message:"يجب إدخال البريد الإلكتروني",trigger:"blur"},{type:"email",message:"يجب إدخال البريد الإلكتروني صالح",trigger:["blur","change"]}],name:[{required:!0,message:"يجب إدخال الاسم",trigger:"blur"},{min:2,max:50,message:"يجب أن يكون اسمك بين 2 و 50 أحرف",trigger:"blur"}],phone:[{required:!0,message:"يجب إدخال رقم الهاتف",trigger:"blur"},{min:10,max:11,message:"يجب إدخال رقم هاتف صالح",trigger:"blur"},{validator:function(e,t,r){""===t||11!==t.length||String(t).startsWith("01")?""!==t&&10===t.length&&String(t).startsWith("01")?r(new Error("يجب إدخال رقم هاتف صالح")):""===t||10!==t.length||String(t).startsWith("1")?r():r(new Error("يجب إدخال رقم هاتف صالح")):r(new Error("يجب إدخال رقم هاتف صالح"))},trigger:"blur"}],currency:[{required:!0,message:"يجب اختيار العملة",trigger:"change"}],description:[{required:!0,message:"يجب ادخال وصف الفندق",trigger:"blur"},{min:5,max:500,message:"يجب أن يكون وصف الفندق بين 5 و 500 أحرف",trigger:"blur"}],addressGovernment:[{required:!0,message:"يجب إدخال المحافظة",trigger:"change"}],addressStreet:[{required:!0,message:"يجب ادخال اسم الشارع",trigger:"blur"},{validator:t,trigger:"blur"}],addressNearTo:[{required:!0,message:"يجب ادخال قريب من",trigger:"blur"},{validator:t,trigger:"blur"}],addressHighlight:[{required:!0,message:"يجب ادخال علامة مميزة",trigger:"blur"},{validator:t,trigger:"blur"}],addressHouseNumber:[{required:!0,message:"يجب ادخال رقم المنزل",trigger:"blur"},{validator:e,trigger:"blur"}],addressApartmentNumber:[{required:!0,message:"يجب ادخال رقم الشقة",trigger:"blur"},{validator:e,trigger:"blur"}],addressFloorNumber:[{required:!0,message:"يجب ادخال رقم الدور",trigger:"blur"},{validator:e,trigger:"blur"}],freeServices:[{required:!0,message:"يجب اختيار بعض الخدمات المجانية",trigger:"change"}],generalServices:[{required:!0,message:"يجب اختيار بعض الخدمات المجانية",trigger:"change"}],hostelServices:[{required:!0,message:"يجب اختيار بعض الخدمات الفندقيه",trigger:"change"}],entertainmentServices:[{required:!0,message:"يجب اختيار بعض الخدمات الترفيهية",trigger:"change"}],foodServices:[{required:!0,message:"يجب اختيار بعض خدمات الطعام",trigger:"change"}],checked:[{validator:function(e,t,r){t?r():r(new Error("يجب الموافقة على جميع الشروط و سياسات الموقع"))},trigger:"change"}]},condition:"",egyptCities:[],allFreeServices:[],allGeneralServices:[],allHostelServices:[],allEntertainmentServices:[],allFoodServices:[],currencies:[{lcValue:"le",ucValue:"جنيه"},{lcValue:"usd",ucValue:"دولار"}],value:"",hostel:{name:"",image:"",phone:"",email:"",managerEmail:"",description:"",currency:"",address:{government:"",street:"",nearTo:"",highlight:"",houseNumber:"",apartmentNumber:"",floorNumber:""},addressGovernment:"",addressStreet:"",addressNearTo:"",addressHighlight:"",addressHouseNumber:"",addressApartmentNumber:"",addressFloorNumber:"",freeServices:[],generalServices:[],hostelServices:[],entertainmentServices:[],foodServices:[]},checked:!1,emptyFreeServices:!1,emptyGeneralServices:!1,emptyHostelServices:!1,emptyEntertainmentServices:!1,emptyFoodServices:!1,emptyImage:!1,lastFileId:"",selectedFile:"",fileList:[],formatNational:"",imageUpload:[],imageUploadDone:!1,translations:{phoneNumberLabel:"01205954032"}}},created:function(){Object(_.b)(),v.a&&0!==v.a.length&&(this.egyptCities=v.a),m.a&&(m.a.freeServices&&(this.allFreeServices=m.a.freeServices),m.a.generalServices&&(this.allGeneralServices=m.a.generalServices),m.a.hostelServices&&(this.allHostelServices=m.a.hostelServices),m.a.entertainmentServices&&(this.allEntertainmentServices=m.a.entertainmentServices),m.a.foodServices&&(this.allFoodServices=m.a.foodServices))},methods:{showModal:function(e,t){this.currentServices={name:e,allServices:t},this.advantagesDialogVisible=!0},addTimeSlot:function(){this.unit.availability.push({from:"",to:""})},addCondition:function(){this.unit.conditions.push(this.condition),this.condition=""},handlePreview:function(){},handleRemove:function(){},updatePhone:function(e){e.formatNational&&(this.hostel.phone=e.formatNational.split(" ").join("")),this.formattedNumber=e.formattedNumber||""},submitForm:function(e){var t=this;this.hostel.phone=this.hostel.phone.split(" ").join(""),this.$refs[e].validate((function(e){if(t.hostel.image=t.imageUpload[0]&&t.imageUpload[0].url?t.imageUpload[0].url:void 0,!e||!t.hostel.image)return!(!e||t.hostel.image)&&(f.a.fire({icon:"error",title:"يجب إدخال صورة رئيسية للقندق"}),!1);t.checked?(t.hostel.address.government=t.hostel.addressGovernment,t.hostel.address.street=t.hostel.addressStreet,t.hostel.address.nearTo=t.hostel.addressNearTo,t.hostel.address.highlight=t.hostel.addressHighlight,t.hostel.address.houseNumber=t.hostel.addressHouseNumber,t.hostel.address.apartmentNumber=t.hostel.addressApartmentNumber,t.hostel.address.floorNumber=t.hostel.addressFloorNumber,t.hostel.phone="0"+t.hostel.phone,t.hostel.image&&_.a.post("hostels",t.hostel).then((function(e){window.location.href="/hotelGroups?id=".concat(e.data.hostelId)})).catch((function(e){var r="حدث خطأ ما";return e.response&&e.response.data&&(r=e.response.data.message),t.Toast.fire({icon:"error",title:r}),e}))):t.Toast.fire({icon:"error",title:"يجب الموافقة على جميع الشروط و سياسات الموقع!!"})}))},policeDialog:function(){this.$store.commit("policeDialog",!0)},cancelAdd:function(){this.$router.push("/dashboard")}}},y=(r(637),r(3)),component=Object(y.a)(S,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"add-hotal u-margin-top-big u-margin-bottom-medium u-container"},[r("el-row",{staticClass:"unitsFormMargin",attrs:{gutter:20,dir:"rtl"}},[r("el-form",{ref:"hostel",attrs:{model:e.hostel,rules:e.rules,"label-position":"top","label-width":"100px",dir:"rtl"}},[r("el-col",{staticClass:"u-col-rtl",attrs:{xs:24,span:12}},[r("div",{staticClass:"grid-content bg-purple-light"},[r("p",{staticClass:"rightText formTitle"},[e._v("\n              إضافة الفندق\n            ")]),e._v(" "),r("el-row",{staticClass:"unitsFormMargin",attrs:{gutter:10,dir:"rtl"}},[r("el-col",{staticClass:"u-col-rtl",attrs:{xs:24,span:12}},[r("el-form-item",{attrs:{label:"الاسم",prop:"name"}},[r("el-input",{attrs:{placeholder:"sara Inn"},model:{value:e.hostel.name,callback:function(t){e.$set(e.hostel,"name",t)},expression:"hostel.name"}})],1)],1),e._v(" "),r("el-col",{staticClass:"u-col-rtl",attrs:{xs:24,span:12}},[r("el-form-item",{attrs:{label:"الايميل",prop:"email"}},[r("el-input",{attrs:{placeholder:"sarainn@gmail.com"},model:{value:e.hostel.email,callback:function(t){e.$set(e.hostel,"email",t)},expression:"hostel.email"}})],1)],1)],1),e._v(" "),r("el-row",{staticClass:"unitsFormMargin",attrs:{gutter:20,dir:"rtl"}},[r("el-col",{staticClass:"u-col-rtl",attrs:{xs:24,span:16}},[r("el-form-item",{staticClass:"PhoneNumberInput",attrs:{label:"رقم التليفون",prop:"phone"}},[r("VuePhoneNumberInput",{staticClass:"PhoneNumberInput",attrs:{translations:e.translations,"default-country-code":"EG","valid-color":"#DCDFE6",color:"#DCDFE6","error-color":"#DCDFE6"},on:{update:e.updatePhone},model:{value:e.hostel.phone,callback:function(t){e.$set(e.hostel,"phone",t)},expression:"hostel.phone"}})],1)],1),e._v(" "),r("el-col",{staticClass:"u-col-rtl",attrs:{xs:24,span:8}},[r("el-form-item",{attrs:{label:"العملة",prop:"currency"}},[r("el-select",{attrs:{placeholder:"العملة"},model:{value:e.hostel.currency,callback:function(t){e.$set(e.hostel,"currency",t)},expression:"hostel.currency"}},e._l(e.currencies,(function(e){return r("el-option",{key:e.lcValue,attrs:{label:e.ucValue,value:e.lcValue}})})),1)],1)],1),e._v(" "),r("el-col",{staticClass:"u-col-rtl",attrs:{xs:24,span:24}},[r("el-form-item",{attrs:{label:"الايميل (المدير)",prop:"email"}},[r("el-input",{attrs:{placeholder:"mr.Ahmed@gmail.com"},model:{value:e.hostel.managerEmail,callback:function(t){e.$set(e.hostel,"managerEmail",t)},expression:"hostel.managerEmail"}})],1)],1)],1),e._v(" "),r("el-row",{staticClass:"unitsFormMargin",attrs:{gutter:20,dir:"rtl"}},[r("el-col",{staticClass:"u-col-rtl",attrs:{xs:24,span:24}},[r("el-form-item",{attrs:{label:"وصف الوحدة",prop:"description"}},[r("el-input",{attrs:{rows:6,type:"textarea",placeholder:"* نحن في الطابق الثاني والرابع مع مكتبين للاستقبال.\n* يعمل مكتب الاستقبال على مدار 24 ساعة في اليوم ، ولا يوجد حظر تجول.\n* تسجيل الوصول هو من الساعة 12:30 مساءً\n* آخر مرة تحقق من الساعة 12:00 مساءً\n"},model:{value:e.hostel.description,callback:function(t){e.$set(e.hostel,"description",t)},expression:"hostel.description"}})],1)],1)],1),e._v(" "),r("el-divider",{attrs:{"content-position":"right"}},[e._v("العنوان")]),e._v(" "),r("el-row",{staticClass:"unitsFormMargin",attrs:{gutter:20,dir:"rtl"}},[r("el-col",{staticClass:"u-col-rtl",attrs:{xs:24,span:7}},[r("el-form-item",{attrs:{label:"المحافظة",prop:"addressGovernment"}},[r("el-select",{attrs:{placeholder:"القاهره"},model:{value:e.hostel.addressGovernment,callback:function(t){e.$set(e.hostel,"addressGovernment",t)},expression:"hostel.addressGovernment"}},e._l(e.egyptCities,(function(e){return r("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1)],1),e._v(" "),r("el-col",{staticClass:"u-col-rtl",attrs:{xs:24,span:17}},[r("el-form-item",{attrs:{label:"الشارع",prop:"addressStreet"}},[r("el-input",{attrs:{type:"string",placeholder:"شارع عابدين"},model:{value:e.hostel.addressStreet,callback:function(t){e.$set(e.hostel,"addressStreet",t)},expression:"hostel.addressStreet"}})],1)],1)],1),e._v(" "),r("el-row",{staticClass:"unitsFormMargin",attrs:{gutter:20,dir:"rtl"}},[r("el-col",{staticClass:"u-col-rtl",attrs:{xs:24,span:12}},[r("el-form-item",{attrs:{label:"قريباً من",prop:"addressNearTo"}},[r("el-input",{attrs:{type:"string",placeholder:"محطه مترو السادات"},model:{value:e.hostel.addressNearTo,callback:function(t){e.$set(e.hostel,"addressNearTo",t)},expression:"hostel.addressNearTo"}})],1)],1),e._v(" "),r("el-col",{staticClass:"u-col-rtl",attrs:{xs:24,span:12}},[r("el-form-item",{attrs:{label:"علامة مميزة",prop:"addressHighlight"}},[r("el-input",{attrs:{type:"string",placeholder:"امام البنك الاهلي"},model:{value:e.hostel.addressHighlight,callback:function(t){e.$set(e.hostel,"addressHighlight",t)},expression:"hostel.addressHighlight"}})],1)],1)],1),e._v(" "),r("el-row",{staticClass:"unitsFormMargin",attrs:{gutter:20,dir:"rtl"}},[r("el-col",{staticClass:"u-col-rtl",attrs:{xs:24,span:8}},[r("el-form-item",{attrs:{label:"رقم المنزل",prop:"addressHouseNumber"}},[r("el-input",{attrs:{placeholder:"65"},model:{value:e.hostel.addressHouseNumber,callback:function(t){e.$set(e.hostel,"addressHouseNumber",e._n(t))},expression:"hostel.addressHouseNumber"}})],1)],1),e._v(" "),r("el-col",{staticClass:"u-col-rtl",attrs:{xs:24,span:8}},[r("el-form-item",{attrs:{label:"رقم الشقة",prop:"addressApartmentNumber"}},[r("el-input",{attrs:{placeholder:"41"},model:{value:e.hostel.addressApartmentNumber,callback:function(t){e.$set(e.hostel,"addressApartmentNumber",e._n(t))},expression:"hostel.addressApartmentNumber"}})],1)],1),e._v(" "),r("el-col",{staticClass:"u-col-rtl",attrs:{xs:24,span:8}},[r("el-form-item",{attrs:{label:"الدور",prop:"addressFloorNumber"}},[r("el-input",{attrs:{placeholder:"4"},model:{value:e.hostel.addressFloorNumber,callback:function(t){e.$set(e.hostel,"addressFloorNumber",e._n(t))},expression:"hostel.addressFloorNumber"}})],1)],1)],1),e._v(" "),r("el-divider",{attrs:{"content-position":"right"}},[e._v("الخدمات المجانية")]),e._v(" "),r("el-row",{staticClass:"unitsFormMargin",attrs:{gutter:20,dir:"rtl"}},[r("el-col",{staticClass:"u-col-rtl",attrs:{xs:24,span:24}},[r("el-form-item",{attrs:{prop:"freeServices"}},[r("el-select",{attrs:{multiple:"",placeholder:"المميزات"},model:{value:e.hostel.freeServices,callback:function(t){e.$set(e.hostel,"freeServices",t)},expression:"hostel.freeServices"}},e._l(e.allFreeServices,(function(e){return r("el-option",{key:e.enValue,attrs:{label:e.arValue,value:e.enValue}})})),1)],1)],1)],1),e._v(" "),r("el-divider",{attrs:{"content-position":"right"}},[e._v("الخدمات الرئيسية")]),e._v(" "),r("el-row",{staticClass:"unitsFormMargin",attrs:{gutter:20,dir:"rtl"}},[r("el-col",{staticClass:"u-col-rtl",attrs:{xs:24,span:24}},[r("el-form-item",{attrs:{prop:"generalServices"}},[r("el-select",{attrs:{multiple:"",placeholder:"المميزات"},model:{value:e.hostel.generalServices,callback:function(t){e.$set(e.hostel,"generalServices",t)},expression:"hostel.generalServices"}},e._l(e.allGeneralServices,(function(e){return r("el-option",{key:e.enValue,attrs:{label:e.arValue,value:e.enValue}})})),1)],1)],1)],1)],1)]),e._v(" "),r("el-col",{staticClass:"u-col-rtl",attrs:{xs:24,span:12}},[r("div",{staticClass:"grid-content unitsFormMargin floatRight bg-purple"},[r("div",{staticClass:"upload-component-main"},[r("vsUpload",{attrs:{id:"input",limit:1,data:e.testImage,text:"اسحب الصور و القها هنا او تصفح لاختيار الصور من جهازك",multiple:"",automatic:"",accept:"image/png",action:"https://jsonplaceholder.typicode.com/posts/"},model:{value:e.imageUpload,callback:function(t){e.imageUpload=t},expression:"imageUpload"}})],1),e._v(" "),e.imageUpload[0]&&e.imageUpload[0].error?r("p",{staticClass:"emptyImage"},[e._v("\n              حدث خطاً اثناء رفع الصورة\n            ")]):e._e(),e._v(" "),r("el-divider",{staticStyle:{"margin-top":"30px"},attrs:{"content-position":"right"}},[e._v("الخدمات الفندقية")]),e._v(" "),r("el-row",{staticClass:"unitsFormMargin",attrs:{gutter:20,dir:"rtl"}},[r("el-col",{staticClass:"u-col-rtl",attrs:{xs:24,span:24}},[r("el-form-item",{attrs:{prop:"hostelServices"}},[r("el-select",{attrs:{multiple:"",placeholder:"المميزات"},model:{value:e.hostel.hostelServices,callback:function(t){e.$set(e.hostel,"hostelServices",t)},expression:"hostel.hostelServices"}},e._l(e.allHostelServices,(function(e){return r("el-option",{key:e.enValue,attrs:{label:e.arValue,value:e.enValue}})})),1)],1)],1)],1),e._v(" "),r("el-divider",{attrs:{"content-position":"right"}},[e._v("الخدمات الترفيهية")]),e._v(" "),r("el-row",{staticClass:"unitsFormMargin",attrs:{gutter:20,dir:"rtl"}},[r("el-col",{staticClass:"u-col-rtl",attrs:{xs:24,span:24}},[r("el-form-item",{attrs:{prop:"entertainmentServices"}},[r("el-select",{attrs:{multiple:"",placeholder:"المميزات"},model:{value:e.hostel.entertainmentServices,callback:function(t){e.$set(e.hostel,"entertainmentServices",t)},expression:"hostel.entertainmentServices"}},e._l(e.allEntertainmentServices,(function(e){return r("el-option",{key:e.enValue,attrs:{label:e.arValue,value:e.enValue}})})),1)],1)],1)],1),e._v(" "),r("el-divider",{attrs:{"content-position":"right"}},[e._v("خدمات الطعام")]),e._v(" "),r("el-row",{staticClass:"unitsFormMargin",attrs:{gutter:20,dir:"rtl"}},[r("el-col",{staticClass:"u-col-rtl",attrs:{xs:24,span:24}},[r("el-form-item",{attrs:{prop:"foodServices"}},[r("el-select",{attrs:{multiple:"",placeholder:"المميزات"},model:{value:e.hostel.foodServices,callback:function(t){e.$set(e.hostel,"foodServices",t)},expression:"hostel.foodServices"}},e._l(e.allFoodServices,(function(e){return r("el-option",{key:e.enValue,attrs:{label:e.arValue,value:e.enValue}})})),1)],1)],1)],1)],1)]),e._v(" "),r("el-col",{attrs:{span:24}},[r("el-form-item",[r("el-checkbox",{staticStyle:{"margin-top":"10px",display:"block",float:"right"},model:{value:e.checked,callback:function(t){e.checked=t},expression:"checked"}}),e._v(" "),r("span",{staticStyle:{margin:"1rem","margin-right":"2rem",display:"flex"}},[e._v("\n              أوافق على جميع\n              "),r("span",{staticClass:"signup-field_checkbox-text",on:{click:e.policeDialog}},[e._v("شروط و سياسات")]),e._v("\n              الموقع\n            ")])],1)],1)],1)],1),e._v(" "),r("div",{staticClass:"unitsFormMargin",attrs:{dir:"rtl"}},[r("el-button",{staticClass:"actionButton gradirent-bg",on:{click:function(t){return e.submitForm("hostel")}}},[e._v("\n        أضافة فندق\n      ")]),e._v(" "),r("el-button",{staticClass:"actionButton",attrs:{type:"danger",plain:""},on:{click:e.cancelAdd}},[e._v("\n        الغاء\n      ")])],1)],1)}),[],!1,null,"c0703396",null);t.default=component.exports}}]);