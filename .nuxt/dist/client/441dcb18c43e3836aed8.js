(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{537:function(e,t,r){"use strict";t.a=[{value:"alexandria",label:"الإسكندرية"},{value:"ismailia",label:"الإسماعيلية"},{value:"aswan",label:"أسوان"},{value:"asyut",label:"أسيوط"},{value:"luxor",label:"الأقصر"},{value:"red sea",label:"البحر الأحمر"},{value:"el beheira",label:"البحيرة"},{value:"beni suef",label:"بني سويف"},{value:"port said",label:"بورسعيد"},{value:"south sinai",label:"جنوب سيناء"},{value:"giza",label:"الجيزة"},{value:"dakahlia",label:"الدقهلية"},{value:"damietta",label:"دمياط"},{value:"sohag",label:"سوهاج"},{value:"suez",label:"السويس"},{value:"ash sharqia",label:"الشرقية"},{value:"north sinai",label:"شمال سيناء"},{value:"gharbia",label:"الغربية"},{value:"faiyum",label:"الفيوم"},{value:"cairo",label:"القاهرة"},{value:"al qalyubia",label:"القليوبية"},{value:"qena",label:"قنا"},{value:"kafr el sheikh",label:"كفر الشيخ"},{value:"marsa matruh",label:"مرسى مطروح"},{value:"menofia",label:"المنوفية"},{value:"minya",label:"المنيا"},{value:"new valley",label:"الوادي الجديد"}]},538:function(e,t,r){"use strict";var n=r(8),o=r(35),l=r(48),c=r(280),d=r(113),f=r(22),m=r(79).f,h=r(114).f,v=r(20).f,_=r(541).trim,x=n.Number,y=x,w=x.prototype,S="Number"==l(r(171)(w)),k="trim"in String.prototype,N=function(e){var t=d(e,!1);if("string"==typeof t&&t.length>2){var r,n,o,l=(t=k?t.trim():_(t,3)).charCodeAt(0);if(43===l||45===l){if(88===(r=t.charCodeAt(2))||120===r)return NaN}else if(48===l){switch(t.charCodeAt(1)){case 66:case 98:n=2,o=49;break;case 79:case 111:n=8,o=55;break;default:return+t}for(var code,c=t.slice(2),i=0,f=c.length;i<f;i++)if((code=c.charCodeAt(i))<48||code>o)return NaN;return parseInt(c,n)}}return+t};if(!x(" 0o1")||!x("0b1")||x("+0x1")){x=function(e){var t=arguments.length<1?0:e,r=this;return r instanceof x&&(S?f((function(){w.valueOf.call(r)})):"Number"!=l(r))?c(new y(N(t)),r,x):N(t)};for(var I,V=r(14)?m(y):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),E=0;V.length>E;E++)o(y,I=V[E])&&!o(x,I)&&v(x,I,h(y,I));x.prototype=w,w.constructor=x,r(23)(n,"Number",x)}},541:function(e,t,r){var n=r(12),o=r(47),l=r(22),c=r(542),d="["+c+"]",f=RegExp("^"+d+d+"*"),m=RegExp(d+d+"*$"),h=function(e,t,r){var o={},d=l((function(){return!!c[e]()||"​"!="​"[e]()})),f=o[e]=d?t(v):c[e];r&&(o[r]=f),n(n.P+n.F*d,"String",o)},v=h.trim=function(e,t){return e=String(o(e)),1&t&&(e=e.replace(f,"")),2&t&&(e=e.replace(m,"")),e};e.exports=h},542:function(e,t){e.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},543:function(e,t,r){"use strict";r.d(t,"a",(function(){return c})),r.d(t,"b",(function(){return d})),r.d(t,"e",(function(){return f})),r.d(t,"i",(function(){return m})),r.d(t,"h",(function(){return h})),r.d(t,"c",(function(){return _})),r.d(t,"d",(function(){return x})),r.d(t,"g",(function(){return y})),r.d(t,"f",(function(){return w}));r(545),r(34),r(26),r(111),r(112),r(110),r(172);var n=r(540),o=r.n(n),l={AR:{ROOMS:"غرف",UNITS:"وحدات",PEOPLE:"افراد"},EN:{ROOMS:"rooms",UNITS:"units",PEOPLE:"people"},TWICE:{ROOMS:"غرفتين",UNITS:"وحدات",PEOPLE:"فردين"},LESS_THAN_TEN:{ROOMS:"غرف",UNITS:"وحدات",PEOPLE:"افراد"},MORE_THAN_TEN:{ROOMS:"غرفة",UNITS:"وحدة",PEOPLE:"فرد"},REQUEST_STATUS:{PENDING:"pending",ACCEPTED:"accepted",REJECTED:"rejected"},IMAGE_MIMETYPES:{PNG:"image/png",JPE:"image/jpeg",JPEG:"image/jpeg",JPG:"image/jpeg",SVG:"image/svg+xml"}},c=o.a.mixin({position:"center"}),d=o.a.mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:2e3}),f=function(path){console.log("changing url",path),this.$router.push(path)},m=function(e){var t=String(e.type).split("/")[1]||String(e.name).split(".")[1];return console.log("file tpye",t,e,e.type),Object.keys(l.IMAGE_MIMETYPES).find((function(e){return e.toLowerCase()===t.toLowerCase()}))},h=function(e,t,r){return new Promise((function(n){var image=new Image,o=0,l=0;image.src=window.URL.createObjectURL(e),image.onload=function(){o=this.width,l=this.height,o>=r&&l>=t&&n(!0),n(!1)}}))},v=function(e,t){return t?e.join(" "):e[1]},_=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=parseInt(t,10);return 2===n?v([n,l.TWICE[e.toUpperCase()]],r):n>2&&n<10?v([n,l.LESS_THAN_TEN[e.toUpperCase()]],r):n>10||1===n?v([n,l.MORE_THAN_TEN[e.toUpperCase()]],r):void 0},x=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:16,r=e||"";return r.length>=t?r.slice(0,t)+"...":r},y=function(e){Object.keys(e.response.data.error).map((function(t){var r=e.response.data.error[t];if("string"==typeof r)return d.fire({icon:"error",title:r});r.map((function(p){return d.fire({icon:"error",title:t+" "+p})}))})),Object.keys(e.response.data.error).map((function(t){var r=e.response.data.error[t];if("string"==typeof r)return d.fire({icon:"error",title:r});r.map((function(p){return d.fire({icon:"error",title:t+" "+p})}))}))},w=function(e){window.onscroll=function(){Math.max(window.pageYOffset,document.documentElement.scrollTop,document.body.scrollTop)+window.innerHeight===document.documentElement.offsetHeight&&e&&e()}};Object.freeze(l.REQUEST_STATUS)},545:function(e,t,r){var n=r(19),meta=r(281).onFreeze;r(282)("freeze",(function(e){return function(t){return e&&n(t)?e(meta(t)):t}}))},683:function(e,t,r){var n=r(12);n(n.S,"Number",{isInteger:r(684)})},684:function(e,t,r){var n=r(19),o=Math.floor;e.exports=function(e){return!n(e)&&isFinite(e)&&o(e)===e}},685:function(e,t,r){var n=r(12);n(n.S,"Math",{trunc:function(e){return(e>0?Math.floor:Math.ceil)(e)}})},686:function(e,t,r){"use strict";r(685),r(110),r(538);var n=r(21),o=function(e,t){var r=t||document.body;r.insertBefore(e,r.firstChild)},l={name:"ViewUpload",props:{active:{default:!1,type:Boolean},src:{default:null,type:String}},mounted:function(){o(this.$refs.view)},upload:function(){o(this.$refs.view)},methods:{closeView:function(e){"IMG"!==e.target.tagName&&(this.$parent.viewActive=!1)}}},c=r(4),d=Object(c.a)(l,(function(){var e=this.$createElement,t=this._self._c||e;return t("transition",{attrs:{name:"view-upload"}},[t("div",{ref:"view",staticClass:"view-upload",on:{click:this.closeView}},[t("img",{attrs:{src:this.src,alt:"image"}})])])}),[],!1,null,null,null).exports,f=0,m={name:"VsUpload",components:{viewUpload:d},inheritAttrs:!1,props:{fileName:{default:null,type:String},text:{default:"Upload File",type:String},textMax:{default:"Maximum of files reached",type:String},limit:{default:null,type:[Number,String]},action:{default:null,type:String},headers:{default:null,type:Object},data:{default:null,type:Object},automatic:{default:!1,type:Boolean},showUploadButton:{default:!0,type:Boolean},singleUpload:{default:!1,type:Boolean},value:{default:function(){return[]},type:Array},store:{default:function(){return[]},type:Array}},data:function(){return{inputValue:null,type:null,srcs:[],filesx:[],itemRemove:[],percent:0,viewActive:!1,viewSrc:null}},computed:{getFilesFilter:function(){return this.srcs.filter((function(e){return!e.remove}))},getFilesxFilter:function(){return this.srcs.filter((function(e){return e.wanted}))},postFiles:function(){var e=Array.prototype.slice.call(this.filesx);return e=e.filter((function(e){return!e.hasOwnProperty("remove")})),e.length}},watch:{percent:function(){var e=this;this.percent>=100&&(this.srcs.forEach((function(e){e.percent=100})),setTimeout((function(){e.percent=0}),1e3))},store:function(e,t){var r=e&&0!==e.length,n=!t||t&&!t.length;r&&n&&(this.srcs=this.store,this.srcs=this.srcs.filter((function(e){return e})).map((function(e){return{src:e,orientation:"h",type:"image/jpg",url:e,percent:100,error:!1,remove:null,wanted:!0}})),this.filesx=this.srcs.map((function(e){return{src:e.src,name:encodeURIComponent(e.url),url:e.url,percent:100,error:!1,remove:null,wanted:!0}})),this.$emit("input",this.getFilesxFilter))}},created:function(){},methods:{viewImage:function(e,t){if("click"===("ontouchstart"in window||window.DocumentTouch&&document instanceof window.DocumentTouch?"touchstart":"click"))this.viewActive=!0,this.viewSrc=e;else if("touchend"===t.type){var r=(new Date).getTime(),n=r-f;clearTimeout(void 0),n<500&&n>0&&(this.viewActive=!0,this.viewSrc=e,event.preventDefault()),f=r}},removeFile:function(e){var t=this;this.itemRemove.push(e),this.$emit("on-delete",this.filesx[e]),setTimeout((function(){t.srcs[e].wanted=!1,t.filesx[e].remove=!0,t.$emit("input",t.getFilesxFilter)}),301)},getFiles:function(e){this.$emit("update:vsFile",e.target.value);var t=this;function r(e){var r="h",image=new Image;image.src=e.target.result,image.onload=function(){this.width>this.height&&(r="w"),function(image,e){t.srcs.push({src:image.src,orientation:e,type:t.typex,url:null,percent:null,error:!1,remove:null,wanted:!0})}(this,r)}}var n=e.target.files,o=this.srcs.length-this.itemRemove.length;for(var l in n)if(n.hasOwnProperty(l)){if(this.limit&&++o>Number(this.limit))break;var c=new FileReader,d=n[l];/image.*/.test(d.type)?(this.typex="image",this.filesx.push(d),c.onload=r,c.readAsDataURL(d)):/video.*/.test(d.type)?(this.typex="video",this.filesx.push(d),t.srcs.push({src:null,name:d.name,type:"video",url:null,percent:null,error:!1,remove:null,wanted:!0})):(this.filesx.push(d),t.srcs.push({src:null,name:d.name,url:null,percent:null,error:!1,remove:null,wanted:!0})),this.$emit("change",e.target.value,this.filesx),this.$emit("input",this.getFilesxFilter)}var input=this.$refs.fileInput;input.type="text",input.type="file",this.automatic&&this.upload("all")},upload:function(e){var t=this,r=new FormData,n=Array.prototype.slice.call(this.filesx);"number"==typeof e?n=[n[e]]:"all"===e&&(n=n.filter((function(e){return!e.hasOwnProperty("remove")})));var data=this.data||{};for(var o in data)r.append(o,data[o]);n.forEach((function(r,i){var n=new FormData;for(var o in data)n.append(o,data[o]);if(n.append(t.fileName,r,r.name),t.srcs[e]&&t.srcs[e].url)return!1;t.sign(r.name,r.type).then((function(n){var o=n.presignedURL,l=n.url,c=n.contentType;"number"==typeof e?(t.srcs[e].url=l,t.filesx[e].url=l):(t.srcs[i].url=l,t.filesx[i].url=l);var d={presignedURL:o,url:l,contentType:c,fileType:r.type,fileName:r.name};t.uploadx(e,r,d)}))}))},sign:function(e,t){return n.a.get("uploader/sign?file-name=".concat(e,"&default-ext=").concat(t)).then((function(e){return e.data})).catch((function(e){return{error:"unable to get signed url",message:e.message}}))},uploadx:function(e,t,r){var n=this,o=new XMLHttpRequest;o.onerror=function(t){n.$emit("on-error",t),"number"==typeof e&&(n.srcs[e].error=!0),n.$emit("input",this.getFilesxFilter)},o.onload=function(t){o.status<200||o.status>=300?(n.$emit("on-error",t),"number"==typeof e&&(n.srcs[e].error=!0),this.$emit("input",this.getFilesxFilter)):(n.$emit("on-success",t),n.$emit("input",n.getFilesxFilter))},o.upload&&(o.upload.onprogress=function(t){if(t.total>0){var r=t.loaded/t.total*100;"number"==typeof e?n.srcs[e].percent=Math.trunc(r):n.percent=Math.trunc(r)}}),console.log("putting",r),o.open("PUT",r.presignedURL,!0);var l=this.headers||{"Content-Type":r.contentType||"image/".concat(r.fileType),"content-disposition":"inline; ".concat(r.fileName),"x-amz-acl":"public-read"};for(var head in l)l.hasOwnProperty(head)&&null!==l[head]&&o.setRequestHeader(head,l[head]);o.send(t)}}},h=Object(c.a)(m,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"con-upload"},[e.viewActive?r("view-upload",{attrs:{src:e.viewSrc}}):e._e(),e._v(" "),r("div",{staticClass:"con-img-upload"},[e._l(e.getFilesFilter,(function(img,t){return r("div",{key:t,staticClass:"img-upload",class:{fileError:img.error,removeItem:e.itemRemove.includes(t)}},[r("button",{staticClass:"btn-x-file",attrs:{type:"button"},on:{click:function(r){return e.removeFile(t)}}},[r("i",{staticClass:"material-icons notranslate",attrs:{translate:"no"}},[e._v("\n          clear\n        ")])]),e._v(" "),e.showUploadButton?r("button",{staticClass:"btn-upload-file",class:{"on-progress":img.percent,"ready-progress":img.percent>=100},style:{height:img.percent+"%"},on:{click:function(r){return e.upload(t)}}},[r("i",{staticClass:"material-icons notranslate",attrs:{translate:"no"}},[e._v("\n          "+e._s(img.percent>=100?img.error?"report_problem":"cloud_done":"cloud_upload")+"\n        ")]),e._v(" "),r("span",[e._v(e._s(img.percent)+" %")])]):e._e(),e._v(" "),img.src?r("img",{key:t,style:{maxWidth:"h"==img.orientation?"100%":"none",maxHeight:"w"==img.orientation?"100%":"none"},attrs:{src:img.src},on:{touchend:function(t){return e.viewImage(img.src,t)},click:function(t){return e.viewImage(img.src,t)}}}):e._e(),e._v(" "),img.src?e._e():r("h4",{staticClass:"text-archive"},[r("i",{staticClass:"material-icons notranslate",attrs:{translate:"no"}},[e._v("\n          description\n        ")]),e._v(" "),r("span",[e._v("\n          "+e._s(img.name)+"\n        ")])])])})),e._v(" "),r("div",{staticClass:"con-input-upload",class:{"on-progress-all-upload":0!=e.percent,"is-ready-all-upload":e.percent>=100,"disabled-upload":!(!e.$attrs.hasOwnProperty("disabled")&&!e.limit)&&e.srcs.length-e.itemRemove.length>=Number(e.limit)}},[r("input",e._b({ref:"fileInput",attrs:{disabled:!(!e.$attrs.disabled&&!e.limit)&&e.srcs.length-e.itemRemove.length>=Number(e.limit),type:"file"},on:{change:e.getFiles}},"input",e.$attrs,!1)),e._v(" "),r("span",{staticClass:"text-input"},[e._v("\n        "+e._s(e.text)+"\n      ")]),e._v(" "),r("span",{staticClass:"input-progress",style:{width:e.percent+"%"}}),e._v(" "),e.showUploadButton?r("button",{staticClass:"btn-upload-all vs-upload--button-upload",attrs:{disabled:0==e.filesx.length,type:"button",title:"Upload"},on:{click:function(t){return e.upload("all")}}},[r("i",{staticClass:"material-icons notranslate",attrs:{translate:"no"}},[e._v("\n          cloud_upload\n        ")])]):e._e()])],2)],1)}),[],!1,null,null,null);t.a=h.exports},705:function(e,t,r){"use strict";r.d(t,"c",(function(){return n})),r.d(t,"d",(function(){return o})),r.d(t,"e",(function(){return l})),r.d(t,"b",(function(){return c}));var n=[{enValue:"free_parking",arValue:"موقف سيارات مجاني",icon:"el-icon-monitor",checked:!1},{enValue:"tea_coffee",arValue:"شاى و قهوة",icon:"el-icon-monitor",checked:!1},{enValue:"free_wifi",arValue:"واي فاي مجاني",icon:"el-icon-monitor",checked:!1},{enValue:"towels_included",arValue:"يشمل المناشف",icon:"el-icon-monitor",checked:!1},{enValue:"call_center",arValue:"مركز الاتصال",icon:"el-icon-monitor",checked:!1}],o=[{enValue:"security_lockers",arValue:"خزائن الأمن",icon:"el-icon-monitor",checked:!1},{enValue:"safe_deposit_box",arValue:"صندوق الإيداع الآمن",icon:"el-icon-monitor",checked:!1},{enValue:"fridge_freezer",arValue:"ثلاجة التجميد    ",icon:"el-icon-monitor",checked:!1},{enValue:"air_conditioning",arValue:"تكييف",icon:"el-icon-monitor",checked:!1},{enValue:"cooker",arValue:"فرن",icon:"el-icon-monitor",checked:!1},{enValue:"mini_supermarket",arValue:"سوبرماركت صغير",icon:"el-icon-monitor",checked:!1},{enValue:"tea_coffee",arValue:"شاى و قهوة",icon:"el-icon-monitor",checked:!1},{enValue:"self_catering_facilities",arValue:"مرافق الخدمة الذاتية",icon:"el-icon-monitor",checked:!1}],l=[{enValue:"office_cleaning_and_maintenance",arValue:"تنظيف وصيانة المكاتب",icon:"el-icon-monitor",checked:!1},{enValue:"communal_kitchen_with_tea_and_coffee",arValue:"مع الشاي والقهوة",icon:"el-icon-monitor",checked:!1},{enValue:"business_lounge_and_smaller_break_out_area",arValue:"ردهة الأعمال ومنطقة استراحة صغيرة",icon:"el-icon-monitor",checked:!1},{enValue:"access_to_a_printer",arValue:"الوصول إلى طابعة",icon:"el-icon-monitor",checked:!1},{enValue:"scanner_and_photocopier",arValue:"الماسح الضوئي وآلة التصوير",icon:"el-icon-monitor",checked:!1},{enValue:"staffed_reception_and_mail_handling_included",arValue:"يشمل استقبال الموظفين ومعالجة البريد",icon:"el-icon-monitor",checked:!1},{enValue:"self_catering_facilities",arValue:"مرافق الخدمة الذاتية",icon:"el-icon-monitor",checked:!1},{enValue:"receptionist_to_greet_guests",arValue:"موظف استقبال لتحية الضيوف",icon:"el-icon-monitor",checked:!1},{enValue:"all_utility_costs_included",arValue:"شامل جميع تكاليف المرافق",icon:"el-icon-monitor",checked:!1},{enValue:"convenient_locations_in_the_places_you_do_business",arValue:"مواقع ملائمة في الأماكن التي تمارس فيها الأعمال",icon:"el-icon-monitor",checked:!1},{enValue:"use_of_community_meeting_rooms_by_the_hour",arValue:"استخدام قاعات اجتماعات المجتمع بالساعة",icon:"el-icon-monitor",checked:!1}],c=[{enValue:"board_games",arValue:"ألعاب الطاولة",icon:"el-icon-monitor",checked:!1},{enValue:"games_room",arValue:"غرفة الألعاب",icon:"el-icon-monitor",checked:!1},{enValue:"dvds",arValue:"أقراص فيديو رقمية",icon:"el-icon-monitor",checked:!1},{enValue:"pool_table",arValue:"طاولة بلياردو",icon:"el-icon-monitor",checked:!1}];t.a={freeServices:n,generalServices:o,officeServices:l,entertainmentServices:c}},781:function(e,t,r){var content=r(888);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(45).default)("722defa9",content,!0,{sourceMap:!1})},782:function(e,t,r){var content=r(890);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(45).default)("767aafef",content,!0,{sourceMap:!1})},887:function(e,t,r){"use strict";var n=r(781);r.n(n).a},888:function(e,t,r){(t=r(44)(!1)).push([e.i,".emptyServices[data-v-0a23c6a2]{color:#f56c6c;font-size:12px;line-height:1;padding-top:4px;position:absolute}.emptyImage[data-v-0a23c6a2]{color:#f56c6c;font-size:14px;padding:7px}",""]),e.exports=t},889:function(e,t,r){"use strict";var n=r(782);r.n(n).a},890:function(e,t,r){(t=r(44)(!1)).push([e.i,".PhoneNumberInput .vue-phone-number-input .select-country-container{-webkit-box-flex:0!important;flex:0 0 77px!important;min-width:0!important;max-width:none!important;padding-right:5px;width:120px}.country-selector{font-family:Roboto,-apple-system,BlinkMacSystemFont,Segoe UI,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;position:relative;height:40px;min-height:40px;z-index:0;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.country-selector__country-flag{margin:auto 0;position:absolute;top:21px;left:11px;z-index:1;cursor:pointer}.iti-flag.eg{height:14px;background-position:-1489px 0}.country-selector.has-hint .country-selector__input,.country-selector.has-value .country-selector__input{padding-top:14px}.PhoneNumberInput .country-selector.has-hint .country-selector__input,.PhoneNumberInput .country-selector.has-value .country-selector__input{border:#29bbc1!important;box-shadow:none!important;padding-right:14px}.country-selector__input{cursor:pointer;background-color:#fff;position:relative;width:100%;height:40px;min-height:40px;padding-right:22px;font-weight:400;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none;border:1px solid #ccc;font-size:13px;z-index:0;padding-left:8px;color:#000}.PhoneNumberInput .country-selector__input{padding-left:29px!important;padding-bottom:13px!important}.country-selector__toggle{position:absolute;right:5px;top:calc(50% - 10px);-webkit-transition:all .25s cubic-bezier(.645,.045,.355,1);transition:all .25s cubic-bezier(.645,.045,.355,1);text-align:center;display:inline-block;cursor:pointer;height:24px}.PhoneNumberInput .country-selector__toggle{right:-6px!important;top:calc(50% - 12px)!important}.country-selector__toggle__arrow{color:#747474}.country-selector__toggle__arrow path.arrow{fill:#747474}.country-selector.has-hint .country-selector__label,.country-selector.has-value .country-selector__label{opacity:1;-webkit-transform:translateY(0);transform:translateY(0);font-size:11px}.country-selector__label{position:absolute;top:3px;cursor:pointer;left:11px;-webkit-transform:translateY(25%);transform:translateY(25%);opacity:0;-webkit-transition:all .25s cubic-bezier(.645,.045,.355,1);transition:all .25s cubic-bezier(.645,.045,.355,1);font-size:11px;color:#747474}.PhoneNumberInput .country-selector__label{display:none}.country-selector__list{max-width:100%;top:100%;width:100%;min-width:230px;position:absolute;background-color:#fff;overflow:hidden;box-shadow:0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12);z-index:9;list-style:none;overflow-y:auto;overflow-x:hidden;padding:0;margin:0}.flex.align-center{-webkit-box-align:center;align-items:center}.PhoneNumberInput .flex{display:-webkit-box;display:flex;width:100%;border-radius:3px;background-color:#fff;text-align:right;font-size:1.3rem;float:right;font-family:inherit!important;border:1px solid #dcdfe6;color:#606266}.country-selector__list__item{padding:0 10px;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;font-size:12px;cursor:pointer;background-color:transparent;width:100%;border:0;outline:none}.flex-1{-webkit-box-flex:1;flex:1}.PhoneNumberInput .input-tel{font-family:inherit!important}.input-tel{position:relative;font-family:Roboto,-apple-system,BlinkMacSystemFont,Segoe UI,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;height:40px;min-height:40px}.PhoneNumberInput .input-tel__input:not(.no-country-selector){border:#29bbc1!important;box-shadow:none!important}.PhoneNumberInput .flex-1 .input-tel__label{display:none}.input-tel__label{position:absolute;top:4px;cursor:pointer;left:13px;-webkit-transform:translateY(25%);transform:translateY(25%);opacity:0;-webkit-transition:all .25s cubic-bezier(.645,.045,.355,1);transition:all .25s cubic-bezier(.645,.045,.355,1);font-size:11px;color:#747474}",""]),e.exports=t},936:function(e,t,r){"use strict";r.r(t);r(172),r(283),r(538),r(683);var n=r(540),o=r.n(n),l=r(701),c=r.n(l),d=(r(284),r(705)),f=r(537),m=r(21),h=(r(547),r(543)),v=r(686),_={components:{VuePhoneNumberInput:c.a,vsUpload:v.a},middleware:["auth","isHouseOwner"],data:function(){var e=function(e,t,r){Number.isInteger(t)?t<1?r(new Error("يجب ان يكون على الاقل 1")):r():r(new Error("يجب ان يكون عدد"))},t=function(e,t,r){var n=String(t).trim().length;n<2||n>200?r(new Error("يجب أن يكون بين 2 و 200 أحرف")):r()};return{Toast:o.a.mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:3e3}),testImage:{},advantagesDialogVisible:!1,currentServices:{name:"",allServices:[]},rules:{email:[{required:!0,message:"يجب إدخال البريد الإلكتروني",trigger:"blur"},{type:"email",message:"يجب إدخال البريد الإلكتروني صالح",trigger:["blur","change"]}],name:[{required:!0,message:"يجب إدخال الاسم",trigger:"blur"},{min:2,max:50,message:"يجب أن يكون اسمك بين 2 و 50 أحرف",trigger:"blur"}],phone:[{required:!0,message:"يجب إدخال رقم الهاتف",trigger:"blur"},{min:10,max:11,message:"يجب إدخال رقم هاتف صالح",trigger:"blur"},{validator:function(e,t,r){""===t||11!==t.length||String(t).startsWith("01")?""!==t&&10===t.length&&String(t).startsWith("01")?r(new Error("يجب إدخال رقم هاتف صالح")):""===t||10!==t.length||String(t).startsWith("1")?r():r(new Error("يجب إدخال رقم هاتف صالح")):r(new Error("يجب إدخال رقم هاتف صالح"))},trigger:"blur"}],currency:[{required:!0,message:"يجب اختيار العملة",trigger:"change"}],description:[{required:!0,message:"يجب ادخال وصف المكتب",trigger:"blur"},{min:5,max:500,message:"يجب أن يكون وصف المكتب بين 5 و 500 أحرف",trigger:"blur"}],addressGovernment:[{required:!0,message:"يجب إدخال المحافظة",trigger:"change"}],addressStreet:[{required:!0,message:"يجب ادخال اسم الشارع",trigger:"blur"},{validator:t,trigger:"blur"}],addressNearTo:[{required:!0,message:"يجب ادخال قريب من",trigger:"blur"},{validator:t,trigger:"blur"}],addressHighlight:[{required:!0,message:"يجب ادخال علامة مميزة",trigger:"blur"},{validator:t,trigger:"blur"}],addressHouseNumber:[{required:!0,message:"يجب ادخال رقم المنزل",trigger:"blur"},{validator:e,trigger:"blur"}],addressApartmentNumber:[{required:!0,message:"يجب ادخال رقم الشقة",trigger:"blur"},{validator:e,trigger:"blur"}],addressFloorNumber:[{required:!0,message:"يجب ادخال رقم الدور",trigger:"blur"},{validator:e,trigger:"blur"}],freeServices:[{required:!0,message:"يجب اختيار بعض الخدمات المجانية",trigger:"change"}],generalServices:[{required:!0,message:"يجب اختيار بعض الخدمات المجانية",trigger:"change"}],officeServices:[{required:!0,message:"يجب اختيار بعض الخدمات المكتبية",trigger:"change"}],entertainmentServices:[{required:!0,message:"يجب اختيار بعض الخدمات الترفيهية",trigger:"change"}],checked:[{validator:function(e,t,r){t?r():r(new Error("يجب الموافقة على جميع الشروط و سياسات الموقع"))},trigger:"change"}]},condition:"",egyptCities:[],allFreeServices:[],allGeneralServices:[],allOfficeServices:[],allEntertainmentServices:[],currencies:[{lcValue:"le",ucValue:"جنيه"},{lcValue:"usd",ucValue:"دولار"}],value:"",office:{name:"",image:"",phone:"",email:"",managerEmail:"",description:"",currency:"",address:{government:"",street:"",nearTo:"",highlight:"",houseNumber:"",apartmentNumber:"",floorNumber:""},addressGovernment:"",addressStreet:"",addressNearTo:"",addressHighlight:"",addressHouseNumber:"",addressApartmentNumber:"",addressFloorNumber:"",freeServices:[],generalServices:[],officeServices:[],entertainmentServices:[]},checked:!1,emptyFreeServices:!1,emptyGeneralServices:!1,emptyOfficeServices:!1,emptyEntertainmentServices:!1,selectedImage:[],emptyImage:!1,imageError:!1,imageLoading:!1,lastFileId:"",fileList:[],formatNational:"",imageUploadDone:!1,translations:{phoneNumberLabel:"01205954032"}}},created:function(){f.a&&0!==f.a.length&&(this.egyptCities=f.a),d.a&&(d.a.freeServices&&(this.allFreeServices=d.a.freeServices),d.a.generalServices&&(this.allGeneralServices=d.a.generalServices),d.a.officeServices&&(this.allOfficeServices=d.a.officeServices),d.a.entertainmentServices&&(this.allEntertainmentServices=d.a.entertainmentServices))},methods:{uploadImage:function(){console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaa"),console.log(this.selectedImage),console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaa"),this.emptyImage=!1},deleteImage:function(){console.log("bbbbbbbbbbbbbbbbbbbbbbbbbbbb"),console.log(this.selectedImage),console.log("bbbbbbbbbbbbbbbbbbbbbbbbbbbb"),this.emptyImage=!0},successUpload:function(e,t){},showModal:function(e,t){this.currentServices={name:e,allServices:t},this.advantagesDialogVisible=!0},addTimeSlot:function(){this.unit.availability.push({from:"",to:""})},addCondition:function(){this.unit.conditions.push(this.condition),this.condition=""},handlePreview:function(){},handleRemove:function(){},updatePhone:function(e){e.formatNational&&(this.office.phone=e.formatNational.split(" ").join("")),this.formattedNumber=e.formattedNumber||""},submitForm:function(e){var t=this;this.office.phone=this.office.phone.split(" ").join(""),this.selectedImage&&0!==this.selectedImage.length?0!==this.selectedImage.length&&100!==this.selectedImage[0].percent?(this.emptyImage=!1,this.imageLoading=!0,this.imageError=!1):0!==this.selectedImage.length&&this.selectedImage[0].error?(this.emptyImage=!1,this.imageLoading=!1,this.imageError=!0):(this.office.image=this.selectedImage[0].url,this.emptyImage=!1,this.imageError=!1,this.imageLoading=!1):(this.emptyImage=!0,this.imageLoading=!1,this.imageError=!1),this.$refs[e].validate((function(e){if(!e||t.emptyImage)return!1;t.checked?(t.office.address.government=t.office.addressGovernment,t.office.address.street=t.office.addressStreet,t.office.address.nearTo=t.office.addressNearTo,t.office.address.highlight=t.office.addressHighlight,t.office.address.houseNumber=t.office.addressHouseNumber,t.office.address.apartmentNumber=t.office.addressApartmentNumber,t.office.address.floorNumber=t.office.addressFloorNumber,String(t.office.phone).startsWith("01")||(t.office.phone="0"+t.office.phone),t.emptyImage||t.imageError||t.imageLoading||m.a.post("offices",t.office).then((function(e){window.location.href="/officeGroups?id=".concat(e.data.officeId)})).catch((function(e){var r="حدث خطأ ما";return e.response&&e.response.data&&e.response.data.message&&(r=e.response.data.message),t.Toast.fire({icon:"error",title:r}),e}))):h.a.fire({icon:"error",title:"يجب الموافقة على جميع الشروط و سياسات الموقع!!"})}))},policeDialog:function(){this.$store.commit("policeDialog",!0)},cancelAdd:function(){this.$router.push("/dashboard")}}},x=(r(887),r(889),r(4)),component=Object(x.a)(_,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"add-hotal u-margin-top-big u-margin-bottom-medium u-container"},[r("el-row",{staticClass:"unitsFormMargin",attrs:{gutter:20,dir:"rtl"}},[r("el-form",{ref:"office",attrs:{model:e.office,rules:e.rules,"label-position":"top","label-width":"100px",dir:"rtl"}},[r("el-col",{staticClass:"u-col-rtl",attrs:{xs:24,span:12}},[r("div",{staticClass:"grid-content bg-purple-light"},[r("p",{staticClass:"rightText formTitle"},[e._v("\n              إضافة مكتب\n            ")]),e._v(" "),r("el-row",{staticClass:"unitsFormMargin",attrs:{gutter:10,dir:"rtl"}},[r("el-col",{staticClass:"u-col-rtl",attrs:{xs:24,span:12}},[r("el-form-item",{attrs:{label:"الاسم",prop:"name"}},[r("el-input",{attrs:{placeholder:"sara Inn"},model:{value:e.office.name,callback:function(t){e.$set(e.office,"name",t)},expression:"office.name"}})],1)],1),e._v(" "),r("el-col",{staticClass:"u-col-rtl",attrs:{xs:24,span:12}},[r("el-form-item",{attrs:{label:"الايميل",prop:"email"}},[r("el-input",{attrs:{placeholder:"sarainn@gmail.com"},model:{value:e.office.email,callback:function(t){e.$set(e.office,"email",t)},expression:"office.email"}})],1)],1)],1),e._v(" "),r("el-row",{staticClass:"unitsFormMargin",attrs:{gutter:20,dir:"rtl"}},[r("el-col",{staticClass:"u-col-rtl",attrs:{xs:24,span:16}},[r("el-form-item",{staticClass:"PhoneNumberInput",attrs:{label:"رقم التليفون",prop:"phone"}},[r("VuePhoneNumberInput",{staticClass:"PhoneNumberInput",attrs:{translations:e.translations,"default-country-code":"EG","valid-color":"#DCDFE6",color:"#DCDFE6","error-color":"#DCDFE6"},on:{update:e.updatePhone},model:{value:e.office.phone,callback:function(t){e.$set(e.office,"phone",t)},expression:"office.phone"}})],1)],1),e._v(" "),r("el-col",{staticClass:"u-col-rtl",attrs:{xs:24,span:8}},[r("el-form-item",{attrs:{label:"العملة",prop:"currency"}},[r("el-select",{attrs:{placeholder:"العملة"},model:{value:e.office.currency,callback:function(t){e.$set(e.office,"currency",t)},expression:"office.currency"}},e._l(e.currencies,(function(e){return r("el-option",{key:e.lcValue,staticStyle:{"text-align":"end"},attrs:{label:e.ucValue,value:e.lcValue,"popper-class":"select__rtl"}})})),1)],1)],1),e._v(" "),r("el-col",{staticClass:"u-col-rtl",attrs:{xs:24,span:24}},[r("el-form-item",{attrs:{label:"الايميل (المدير)",prop:"email"}},[r("el-input",{attrs:{placeholder:"mr.Ahmed@gmail.com"},model:{value:e.office.managerEmail,callback:function(t){e.$set(e.office,"managerEmail",t)},expression:"office.managerEmail"}})],1)],1)],1),e._v(" "),r("el-row",{staticClass:"unitsFormMargin",attrs:{gutter:20,dir:"rtl"}},[r("el-col",{staticClass:"u-col-rtl",attrs:{xs:24,span:24}},[r("el-form-item",{attrs:{label:"وصف المكتب",prop:"description"}},[r("el-input",{attrs:{rows:6,type:"textarea",placeholder:"* نحن في الطابق الثاني والرابع مع مكتبين للاستقبال.\n* يعمل مكتب الاستقبال على مدار 24 ساعة في اليوم ، ولا يوجد حظر تجول.\n* تسجيل الوصول هو من الساعة 12:30 مساءً\n* آخر مرة تحقق من الساعة 12:00 مساءً\n"},model:{value:e.office.description,callback:function(t){e.$set(e.office,"description",t)},expression:"office.description"}})],1)],1)],1),e._v(" "),r("el-divider",{attrs:{"content-position":"right"}},[e._v("العنوان")]),e._v(" "),r("el-row",{staticClass:"unitsFormMargin",attrs:{gutter:20,dir:"rtl"}},[r("el-col",{staticClass:"u-col-rtl",attrs:{xs:24,span:12}},[r("el-form-item",{attrs:{label:"المحافظة",prop:"addressGovernment"}},[r("el-select",{attrs:{"popper-class":"select__rtl",placeholder:"القاهره"},model:{value:e.office.addressGovernment,callback:function(t){e.$set(e.office,"addressGovernment",t)},expression:"office.addressGovernment"}},e._l(e.egyptCities,(function(e){return r("el-option",{key:e.value,staticStyle:{"text-align":"end"},attrs:{label:e.label,value:e.value}})})),1)],1)],1),e._v(" "),r("el-col",{staticClass:"u-col-rtl",attrs:{xs:24,span:12}},[r("el-form-item",{attrs:{label:"الشارع",prop:"addressStreet"}},[r("el-input",{attrs:{type:"string",placeholder:"شارع عابدين"},model:{value:e.office.addressStreet,callback:function(t){e.$set(e.office,"addressStreet",t)},expression:"office.addressStreet"}})],1)],1)],1),e._v(" "),r("el-row",{staticClass:"unitsFormMargin",attrs:{gutter:20,dir:"rtl"}},[r("el-col",{staticClass:"u-col-rtl",attrs:{xs:24,span:12}},[r("el-form-item",{attrs:{label:"قريباً من",prop:"addressNearTo"}},[r("el-input",{attrs:{type:"string",placeholder:"محطه مترو السادات"},model:{value:e.office.addressNearTo,callback:function(t){e.$set(e.office,"addressNearTo",t)},expression:"office.addressNearTo"}})],1)],1),e._v(" "),r("el-col",{staticClass:"u-col-rtl",attrs:{xs:24,span:12}},[r("el-form-item",{attrs:{label:"علامة مميزة",prop:"addressHighlight"}},[r("el-input",{attrs:{type:"string",placeholder:"امام البنك الاهلي"},model:{value:e.office.addressHighlight,callback:function(t){e.$set(e.office,"addressHighlight",t)},expression:"office.addressHighlight"}})],1)],1)],1),e._v(" "),r("el-row",{staticClass:"unitsFormMargin",attrs:{gutter:20,dir:"rtl"}},[r("el-col",{staticClass:"u-col-rtl",attrs:{xs:24,span:8}},[r("el-form-item",{attrs:{label:"رقم المنزل",prop:"addressHouseNumber"}},[r("el-input",{attrs:{placeholder:"65"},model:{value:e.office.addressHouseNumber,callback:function(t){e.$set(e.office,"addressHouseNumber",e._n(t))},expression:"office.addressHouseNumber"}})],1)],1),e._v(" "),r("el-col",{staticClass:"u-col-rtl",attrs:{xs:24,span:8}},[r("el-form-item",{attrs:{label:"رقم الشقة",prop:"addressApartmentNumber"}},[r("el-input",{attrs:{placeholder:"41"},model:{value:e.office.addressApartmentNumber,callback:function(t){e.$set(e.office,"addressApartmentNumber",e._n(t))},expression:"office.addressApartmentNumber"}})],1)],1),e._v(" "),r("el-col",{staticClass:"u-col-rtl",attrs:{xs:24,span:8}},[r("el-form-item",{attrs:{label:"الدور",prop:"addressFloorNumber"}},[r("el-input",{attrs:{placeholder:"4"},model:{value:e.office.addressFloorNumber,callback:function(t){e.$set(e.office,"addressFloorNumber",e._n(t))},expression:"office.addressFloorNumber"}})],1)],1)],1),e._v(" "),r("el-divider",{attrs:{"content-position":"right"}},[e._v("الخدمات المجانية")]),e._v(" "),r("el-row",{staticClass:"unitsFormMargin",attrs:{gutter:20,dir:"rtl"}},[r("el-col",{staticClass:"u-col-rtl",attrs:{xs:24,span:24}},[r("el-form-item",{attrs:{prop:"freeServices"}},[r("el-select",{attrs:{multiple:"","popper-class":"select__rtl",placeholder:"المميزات"},model:{value:e.office.freeServices,callback:function(t){e.$set(e.office,"freeServices",t)},expression:"office.freeServices"}},e._l(e.allFreeServices,(function(e){return r("el-option",{key:e.enValue,staticStyle:{"text-align":"end"},attrs:{label:e.arValue,value:e.enValue}})})),1)],1)],1)],1),e._v(" "),r("el-divider",{attrs:{"content-position":"right"}},[e._v("الخدمات الرئيسية")]),e._v(" "),r("el-row",{staticClass:"unitsFormMargin",attrs:{gutter:20,dir:"rtl"}},[r("el-col",{staticClass:"u-col-rtl",attrs:{xs:24,span:24}},[r("el-form-item",{attrs:{prop:"generalServices"}},[r("el-select",{attrs:{multiple:"","popper-class":"select__rtl",placeholder:"المميزات"},model:{value:e.office.generalServices,callback:function(t){e.$set(e.office,"generalServices",t)},expression:"office.generalServices"}},e._l(e.allGeneralServices,(function(e){return r("el-option",{key:e.enValue,staticStyle:{"text-align":"end"},attrs:{label:e.arValue,value:e.enValue}})})),1)],1)],1)],1)],1)]),e._v(" "),r("el-col",{staticClass:"u-col-rtl",attrs:{xs:24,span:12}},[r("div",{staticClass:"grid-content unitsFormMargin floatRight bg-purple"},[r("div",{staticClass:"upload-component-main"},[r("vsUpload",{attrs:{id:"input",accept:["image/png","image.jpg","image/jpeg","image/svg"],"on-delete":e.deleteImage,limit:1,data:e.testImage,text:"اسحب الصور و القها هنا او تصفح لاختيار الصور من جهازك",multiple:"",automatic:"",action:"https://jsonplaceholder.typicode.com/posts/"},on:{change:e.uploadImage},model:{value:e.selectedImage,callback:function(t){e.selectedImage=t},expression:"selectedImage"}})],1),e._v(" "),e.emptyImage?r("p",{staticClass:"emptyImage"},[e._v("\n              يجب اختيار صورة للمكتب\n            ")]):e._e(),e._v(" "),e.imageError?r("p",{staticClass:"emptyImage"},[e._v("\n              حدث خطأ اثناء إضافة صورة للمكتب\n            ")]):e._e(),e._v(" "),e.imageLoading?r("p",{staticClass:"emptyImage"},[e._v("\n              من فضلك انتظر اضافة صورة للمكتب\n            ")]):e._e(),e._v(" "),r("el-divider",{staticStyle:{"margin-top":"30px"},attrs:{"content-position":"right"}},[e._v("الخدمات المكتبية")]),e._v(" "),r("el-row",{staticClass:"unitsFormMargin",attrs:{gutter:20,dir:"rtl"}},[r("el-col",{staticClass:"u-col-rtl",attrs:{xs:24,span:24}},[r("el-form-item",{attrs:{prop:"officeServices"}},[r("el-select",{attrs:{multiple:"","popper-class":"select__rtl",placeholder:"المميزات"},model:{value:e.office.officeServices,callback:function(t){e.$set(e.office,"officeServices",t)},expression:"office.officeServices"}},e._l(e.allOfficeServices,(function(e){return r("el-option",{key:e.enValue,staticStyle:{"text-align":"end"},attrs:{label:e.arValue,value:e.enValue}})})),1)],1)],1)],1),e._v(" "),r("el-divider",{attrs:{"content-position":"right"}},[e._v("الخدمات الترفيهية")]),e._v(" "),r("el-row",{staticClass:"unitsFormMargin",attrs:{gutter:20,dir:"rtl"}},[r("el-col",{staticClass:"u-col-rtl",attrs:{xs:24,span:24}},[r("el-form-item",{attrs:{prop:"entertainmentServices"}},[r("el-select",{attrs:{multiple:"","popper-class":"select__rtl",placeholder:"المميزات"},model:{value:e.office.entertainmentServices,callback:function(t){e.$set(e.office,"entertainmentServices",t)},expression:"office.entertainmentServices"}},e._l(e.allEntertainmentServices,(function(e){return r("el-option",{key:e.enValue,staticStyle:{"text-align":"end"},attrs:{label:e.arValue,value:e.enValue}})})),1)],1)],1)],1)],1)]),e._v(" "),r("el-col",{attrs:{span:24}},[r("el-form-item",[r("el-checkbox",{staticStyle:{"margin-top":"10px",display:"block",float:"right"},model:{value:e.checked,callback:function(t){e.checked=t},expression:"checked"}}),e._v(" "),r("span",{staticStyle:{margin:"1rem","margin-right":"2rem",display:"flex"}},[e._v("\n              أوافق على جميع\n              "),r("span",{staticClass:"signup-field_checkbox-text",on:{click:e.policeDialog}},[e._v("شروط و سياسات")]),e._v("\n              الموقع\n            ")])],1)],1)],1)],1),e._v(" "),r("div",{attrs:{dir:"rtl"}},[r("el-button",{staticClass:"actionButton gradirent-bg",on:{click:function(t){return e.submitForm("office")}}},[e._v("\n        أضافة مكتب\n      ")]),e._v(" "),r("el-button",{staticClass:"actionButton",attrs:{type:"danger",plain:""},on:{click:e.cancelAdd}},[e._v("\n        الغاء\n      ")])],1)],1)}),[],!1,null,"0a23c6a2",null);t.default=component.exports}}]);