(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{537:function(e,t,r){"use strict";t.a=[{value:"alexandria",label:"الإسكندرية"},{value:"ismailia",label:"الإسماعيلية"},{value:"aswan",label:"أسوان"},{value:"asyut",label:"أسيوط"},{value:"luxor",label:"الأقصر"},{value:"red sea",label:"البحر الأحمر"},{value:"el beheira",label:"البحيرة"},{value:"beni suef",label:"بني سويف"},{value:"port said",label:"بورسعيد"},{value:"south sinai",label:"جنوب سيناء"},{value:"giza",label:"الجيزة"},{value:"dakahlia",label:"الدقهلية"},{value:"damietta",label:"دمياط"},{value:"sohag",label:"سوهاج"},{value:"suez",label:"السويس"},{value:"ash sharqia",label:"الشرقية"},{value:"north sinai",label:"شمال سيناء"},{value:"gharbia",label:"الغربية"},{value:"faiyum",label:"الفيوم"},{value:"cairo",label:"القاهرة"},{value:"al qalyubia",label:"القليوبية"},{value:"qena",label:"قنا"},{value:"kafr el sheikh",label:"كفر الشيخ"},{value:"marsa matruh",label:"مرسى مطروح"},{value:"menofia",label:"المنوفية"},{value:"minya",label:"المنيا"},{value:"new valley",label:"الوادي الجديد"}]},538:function(e,t,r){"use strict";var l=r(8),n=r(36),o=r(48),c=r(282),d=r(113),m=r(22),h=r(79).f,f=r(114).f,v=r(21).f,_=r(541).trim,x=l.Number,y=x,V=x.prototype,k="Number"==o(r(171)(V)),w="trim"in String.prototype,S=function(e){var t=d(e,!1);if("string"==typeof t&&t.length>2){var r,l,n,o=(t=w?t.trim():_(t,3)).charCodeAt(0);if(43===o||45===o){if(88===(r=t.charCodeAt(2))||120===r)return NaN}else if(48===o){switch(t.charCodeAt(1)){case 66:case 98:l=2,n=49;break;case 79:case 111:l=8,n=55;break;default:return+t}for(var code,c=t.slice(2),i=0,m=c.length;i<m;i++)if((code=c.charCodeAt(i))<48||code>n)return NaN;return parseInt(c,l)}}return+t};if(!x(" 0o1")||!x("0b1")||x("+0x1")){x=function(e){var t=arguments.length<1?0:e,r=this;return r instanceof x&&(k?m((function(){V.valueOf.call(r)})):"Number"!=o(r))?c(new y(S(t)),r,x):S(t)};for(var N,I=r(15)?h(y):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),C=0;I.length>C;C++)n(y,N=I[C])&&!n(x,N)&&v(x,N,f(y,N));x.prototype=V,V.constructor=x,r(23)(l,"Number",x)}},541:function(e,t,r){var l=r(12),n=r(47),o=r(22),c=r(542),d="["+c+"]",m=RegExp("^"+d+d+"*"),h=RegExp(d+d+"*$"),f=function(e,t,r){var n={},d=o((function(){return!!c[e]()||"​"!="​"[e]()})),m=n[e]=d?t(v):c[e];r&&(n[r]=m),l(l.P+l.F*d,"String",n)},v=f.trim=function(e,t){return e=String(n(e)),1&t&&(e=e.replace(m,"")),2&t&&(e=e.replace(h,"")),e};e.exports=f},542:function(e,t){e.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},689:function(e,t,r){"use strict";r.d(t,"d",(function(){return l})),r.d(t,"e",(function(){return n})),r.d(t,"f",(function(){return o})),r.d(t,"b",(function(){return c})),r.d(t,"c",(function(){return d}));var l=[{enValue:"free_airport_transfers",arValue:"انتقالات مجانية للمطار",icon:"el-icon-monitor",checked:!1},{enValue:"free_parking",arValue:"موقف سيارات مجاني",icon:"el-icon-monitor",checked:!1},{enValue:"luggage_storage",arValue:"تخزين الأمتعة",icon:"el-icon-monitor",checked:!1},{enValue:"free_city_maps",arValue:"خرائط مجانية",icon:"el-icon-monitor",checked:!1},{enValue:"free_wifi",arValue:"واي فاي مجاني",icon:"el-icon-monitor",checked:!1},{enValue:"towels_included",arValue:"يشمل المناشف",icon:"el-icon-monitor",checked:!1},{enValue:"free_city_tour",arValue:"جولة مجانية بالمدينة",icon:"el-icon-monitor",checked:!1},{enValue:"free_internet_access",arValue:"واى فاى مجانى    ",icon:"el-icon-monitor",checked:!1},{enValue:"lockers",arValue:"خزائن",icon:"el-icon-monitor",checked:!1}],n=[{enValue:"airport_transfers",arValue:"انتقالات المطار",icon:"el-icon-monitor",checked:!1},{enValue:"beauty_salon",arValue:"صالون تجميل",icon:"el-icon-monitor",checked:!1},{enValue:"direct_dial_telephone",arValue:"هاتف",icon:"el-icon-monitor",checked:!1},{enValue:"gym",arValue:"جيم",icon:"el-icon-monitor",checked:!1},{enValue:"internet_cafe",arValue:"مقهى انترنت",icon:"el-icon-monitor",checked:!1},{enValue:"laundry_facilities",arValue:"مرافق غسيل الملابس",icon:"el-icon-monitor",checked:!1},{enValue:"dishwasher",arValue:"غسالة أطباق",icon:"el-icon-monitor",checked:!1},{enValue:"hairdryers",arValue:"مجففات الشعر",icon:"el-icon-monitor",checked:!1},{enValue:"adaptors",arValue:"محولات",icon:"el-icon-monitor",checked:!1},{enValue:"bar",arValue:"ملهي ليلي",icon:"el-icon-monitor",checked:!1},{enValue:"free_city_tour",arValue:"جولة مجانية للمدينة",icon:"el-icon-monitor",checked:!1},{enValue:"fridge_freezer",arValue:"ثلاجة التجميد    ",icon:"el-icon-monitor",checked:!1},{enValue:"air_conditioning",arValue:"تكييف",icon:"el-icon-monitor",checked:!1},{enValue:"dryer",arValue:"مرافق غسيل الملابس",icon:"el-icon-monitor",checked:!1}],o=[{enValue:"airport_transfers",arValue:"انتقالات المطار",icon:"el-icon-monitor",checked:!1},{enValue:"breakfast_included",arValue:"يوجد إفطار",icon:"el-icon-monitor",checked:!1},{enValue:"cafe",arValue:"كافيه",icon:"el-icon-monitor",checked:!1},{enValue:"direct_dial_telephone",arValue:"هاتف",icon:"el-icon-monitor",checked:!1},{enValue:"dvds",arValue:"أقراص فيديو رقمية",icon:"el-icon-monitor",checked:!1},{enValue:"gym",arValue:"جيم",icon:"el-icon-monitor",checked:!1},{enValue:"internet_cafe",arValue:"مقهى انترنت",icon:"el-icon-monitor",checked:!1},{enValue:"atm",arValue:"ماكينة الصراف الآلي",icon:"el-icon-monitor",checked:!1},{enValue:"elevator",arValue:"مصعد",icon:"el-icon-monitor",checked:!1},{enValue:"bar",arValue:"ملهي ليلي",icon:"el-icon-monitor",checked:!1},{enValue:"bicycle_parking",arValue:"مكان مخصص لركن الدرجات",icon:"el-icon-monitor",checked:!1},{enValue:"free_city_tour",arValue:"جولة مجانية للمدينة",icon:"el-icon-monitor",checked:!1},{enValue:"hairdryers_for_hire",arValue:"مجففات الشعر",icon:"el-icon-monitor",checked:!1},{enValue:"currency_exchange",arValue:"تحويل العملات",icon:"el-icon-monitor",checked:!1},{enValue:"fax_service",arValue:"خدمة الفاكس",icon:"el-icon-monitor",checked:!1},{enValue:"laundry_facilities",arValue:"مرافق غسيل الملابس",icon:"el-icon-monitor",checked:!1},{enValue:"luggage_storage",arValue:"تخزين الأمتعة",icon:"el-icon-monitor",checked:!1},{enValue:"mini_supermarket",arValue:"سوبرماركت صغير",icon:"el-icon-monitor",checked:!1},{enValue:"parking",arValue:"موقف سيارات",icon:"el-icon-monitor",checked:!1},{enValue:"reception_limited_hours",arValue:"ساعات استقبال محدوده",icon:"el-icon-monitor",checked:!1},{enValue:"safe_deposit_box",arValue:"صندوق الإيداع الآمن",icon:"el-icon-monitor",checked:!1},{enValue:"meals_available",arValue:"متاح وجبات",icon:"el-icon-monitor",checked:!1},{enValue:"pool_table",arValue:"طاولة بلياردو",icon:"el-icon-monitor",checked:!1},{enValue:"towels_included",arValue:"يشمل المناشف",icon:"el-icon-monitor",checked:!1}],c=[{enValue:"board_games",arValue:"ألعاب الطاولة",icon:"el-icon-monitor",checked:!1},{enValue:"games_room",arValue:"غرفة الألعاب",icon:"el-icon-monitor",checked:!1},{enValue:"dvds",arValue:"أقراص فيديو رقمية",icon:"el-icon-monitor",checked:!1},{enValue:"pool_table",arValue:"طاولة بلياردو",icon:"el-icon-monitor",checked:!1}],d=[{enValue:"breakfast",arValue:"وجبة افطار",icon:"el-icon-monitor",checked:!1},{enValue:"launch",arValue:"وجبة غداء",icon:"el-icon-monitor",checked:!1},{enValue:"dinner",arValue:"وجبة عشاء",icon:"el-icon-monitor",checked:!1},{enValue:"all_inclusive",arValue:"شامل جميع الوجبات",icon:"el-icon-monitor",checked:!1},{enValue:"tea_coffee",arValue:"شاى و قهوة",icon:"el-icon-monitor",checked:!1},{enValue:"all_not_included",arValue:"لا يشمل اي وجبه",icon:"el-icon-monitor",checked:!1}];t.a={freeServices:l,generalServices:n,hostelServices:o,entertainmentServices:c,foodServices:d}},690:function(e,t,r){var l=r(12);l(l.S,"Number",{isInteger:r(691)})},691:function(e,t,r){var l=r(20),n=Math.floor;e.exports=function(e){return!l(e)&&isFinite(e)&&n(e)===e}},692:function(e,t,r){var l=r(12);l(l.S,"Math",{trunc:function(e){return(e>0?Math.floor:Math.ceil)(e)}})},693:function(e,t,r){"use strict";r(692),r(111),r(538);var l=r(14),n=function(e,t){var r=t||document.body;r.insertBefore(e,r.firstChild)},o={name:"ViewUpload",props:{active:{default:!1,type:Boolean},src:{default:null,type:String}},mounted:function(){n(this.$refs.view)},upload:function(){n(this.$refs.view)},methods:{closeView:function(e){"IMG"!==e.target.tagName&&(this.$parent.viewActive=!1)}}},c=r(4),d=Object(c.a)(o,(function(){var e=this.$createElement,t=this._self._c||e;return t("transition",{attrs:{name:"view-upload"}},[t("div",{ref:"view",staticClass:"view-upload",on:{click:this.closeView}},[t("img",{attrs:{src:this.src,alt:"image"}})])])}),[],!1,null,null,null).exports,m=0,h={name:"VsUpload",components:{viewUpload:d},inheritAttrs:!1,props:{fileName:{default:null,type:String},text:{default:"Upload File",type:String},textMax:{default:"Maximum of files reached",type:String},limit:{default:null,type:[Number,String]},action:{default:null,type:String},headers:{default:null,type:Object},data:{default:null,type:Object},automatic:{default:!1,type:Boolean},showUploadButton:{default:!0,type:Boolean},singleUpload:{default:!1,type:Boolean},value:{default:function(){return[]},type:Array},store:{default:function(){return[]},type:Array}},data:function(){return{inputValue:null,type:null,srcs:[],filesx:[],itemRemove:[],percent:0,viewActive:!1,viewSrc:null}},computed:{getFilesFilter:function(){return this.srcs.filter((function(e){return!e.remove}))},getFilesxFilter:function(){return this.srcs.filter((function(e){return e.wanted}))},postFiles:function(){var e=Array.prototype.slice.call(this.filesx);return e=e.filter((function(e){return!e.hasOwnProperty("remove")})),e.length}},watch:{percent:function(){var e=this;this.percent>=100&&(this.srcs.forEach((function(e){e.percent=100})),setTimeout((function(){e.percent=0}),1e3))},store:function(e,t){var r=e&&0!==e.length,l=!t||t&&!t.length;r&&l&&(this.srcs=this.store,this.srcs=this.srcs.filter((function(e){return e})).map((function(e){return{src:e,orientation:"h",type:"image/jpg",url:e,percent:100,error:!1,remove:null,wanted:!0}})),this.filesx=this.srcs.map((function(e){return{src:e.src,name:encodeURIComponent(e.url),url:e.url,percent:100,error:!1,remove:null,wanted:!0}})),this.$emit("input",this.getFilesxFilter))}},created:function(){Object(l.b)()},methods:{viewImage:function(e,t){if("click"===("ontouchstart"in window||window.DocumentTouch&&document instanceof window.DocumentTouch?"touchstart":"click"))this.viewActive=!0,this.viewSrc=e;else if("touchend"===t.type){var r=(new Date).getTime(),l=r-m;clearTimeout(void 0),l<500&&l>0&&(this.viewActive=!0,this.viewSrc=e,event.preventDefault()),m=r}},removeFile:function(e){var t=this;this.itemRemove.push(e),this.$emit("on-delete",this.filesx[e]),setTimeout((function(){t.srcs[e].wanted=!1,t.filesx[e].remove=!0,t.$emit("input",t.getFilesxFilter)}),301)},getFiles:function(e){this.$emit("update:vsFile",e.target.value);var t=this;function r(e){var r="h",image=new Image;image.src=e.target.result,image.onload=function(){this.width>this.height&&(r="w"),function(image,e){t.srcs.push({src:image.src,orientation:e,type:t.typex,url:null,percent:null,error:!1,remove:null,wanted:!0})}(this,r)}}var l=e.target.files,n=this.srcs.length-this.itemRemove.length;for(var o in l)if(l.hasOwnProperty(o)){if(this.limit&&++n>Number(this.limit))break;var c=new FileReader,d=l[o];/image.*/.test(d.type)?(this.typex="image",this.filesx.push(d),c.onload=r,c.readAsDataURL(d)):/video.*/.test(d.type)?(this.typex="video",this.filesx.push(d),t.srcs.push({src:null,name:d.name,type:"video",url:null,percent:null,error:!1,remove:null,wanted:!0})):(this.filesx.push(d),t.srcs.push({src:null,name:d.name,url:null,percent:null,error:!1,remove:null,wanted:!0})),this.$emit("change",e.target.value,this.filesx),this.$emit("input",this.getFilesxFilter)}var input=this.$refs.fileInput;input.type="text",input.type="file",this.automatic&&this.upload("all")},upload:function(e){var t=this,r=new FormData,l=Array.prototype.slice.call(this.filesx);"number"==typeof e?l=[l[e]]:"all"===e&&(l=l.filter((function(e){return!e.hasOwnProperty("remove")})));var data=this.data||{};for(var n in data)r.append(n,data[n]);l.forEach((function(r,i){var l=new FormData;for(var n in data)l.append(n,data[n]);if(l.append(t.fileName,r,r.name),t.srcs[e]&&t.srcs[e].url)return!1;t.sign(r.name,r.type).then((function(l){var n=l.presignedURL,o=l.url,c=l.contentType;"number"==typeof e?(t.srcs[e].url=o,t.filesx[e].url=o):(t.srcs[i].url=o,t.filesx[i].url=o);var d={presignedURL:n,url:o,contentType:c,fileType:r.type,fileName:r.name};t.uploadx(e,r,d)}))}))},sign:function(e,t){return l.a.get("uploader/sign?file-name=".concat(e,"&default-ext=").concat(t)).then((function(e){return e.data})).catch((function(e){return{error:"unable to get signed url",message:e.message}}))},uploadx:function(e,t,r){var l=this,n=new XMLHttpRequest;n.onerror=function(t){l.$emit("on-error",t),"number"==typeof e&&(l.srcs[e].error=!0),l.$emit("input",this.getFilesxFilter)},n.onload=function(t){n.status<200||n.status>=300?(l.$emit("on-error",t),"number"==typeof e&&(l.srcs[e].error=!0),this.$emit("input",this.getFilesxFilter)):(l.$emit("on-success",t),l.$emit("input",l.getFilesxFilter))},n.upload&&(n.upload.onprogress=function(t){if(t.total>0){var r=t.loaded/t.total*100;"number"==typeof e?l.srcs[e].percent=Math.trunc(r):l.percent=Math.trunc(r)}}),console.log("putting",r),n.open("PUT",r.presignedURL,!0);var o=this.headers||{"Content-Type":r.contentType||"image/".concat(r.fileType),"content-disposition":"inline; ".concat(r.fileName),"x-amz-acl":"public-read"};for(var head in o)o.hasOwnProperty(head)&&null!==o[head]&&n.setRequestHeader(head,o[head]);n.send(t)}}},f=Object(c.a)(h,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"con-upload"},[e.viewActive?r("view-upload",{attrs:{src:e.viewSrc}}):e._e(),e._v(" "),r("div",{staticClass:"con-img-upload"},[e._l(e.getFilesFilter,(function(img,t){return r("div",{key:t,staticClass:"img-upload",class:{fileError:img.error,removeItem:e.itemRemove.includes(t)}},[r("button",{staticClass:"btn-x-file",attrs:{type:"button"},on:{click:function(r){return e.removeFile(t)}}},[r("i",{staticClass:"material-icons notranslate",attrs:{translate:"no"}},[e._v("\n          clear\n        ")])]),e._v(" "),e.showUploadButton?r("button",{staticClass:"btn-upload-file",class:{"on-progress":img.percent,"ready-progress":img.percent>=100},style:{height:img.percent+"%"},on:{click:function(r){return e.upload(t)}}},[r("i",{staticClass:"material-icons notranslate",attrs:{translate:"no"}},[e._v("\n          "+e._s(img.percent>=100?img.error?"report_problem":"cloud_done":"cloud_upload")+"\n        ")]),e._v(" "),r("span",[e._v(e._s(img.percent)+" %")])]):e._e(),e._v(" "),img.src?r("img",{key:t,style:{maxWidth:"h"==img.orientation?"100%":"none",maxHeight:"w"==img.orientation?"100%":"none"},attrs:{src:img.src},on:{touchend:function(t){return e.viewImage(img.src,t)},click:function(t){return e.viewImage(img.src,t)}}}):e._e(),e._v(" "),img.src?e._e():r("h4",{staticClass:"text-archive"},[r("i",{staticClass:"material-icons notranslate",attrs:{translate:"no"}},[e._v("\n          description\n        ")]),e._v(" "),r("span",[e._v("\n          "+e._s(img.name)+"\n        ")])])])})),e._v(" "),r("div",{staticClass:"con-input-upload",class:{"on-progress-all-upload":0!=e.percent,"is-ready-all-upload":e.percent>=100,"disabled-upload":!(!e.$attrs.hasOwnProperty("disabled")&&!e.limit)&&e.srcs.length-e.itemRemove.length>=Number(e.limit)}},[r("input",e._b({ref:"fileInput",attrs:{disabled:!(!e.$attrs.disabled&&!e.limit)&&e.srcs.length-e.itemRemove.length>=Number(e.limit),type:"file"},on:{change:e.getFiles}},"input",e.$attrs,!1)),e._v(" "),r("span",{staticClass:"text-input"},[e._v("\n        "+e._s(e.text)+"\n      ")]),e._v(" "),r("span",{staticClass:"input-progress",style:{width:e.percent+"%"}}),e._v(" "),e.showUploadButton?r("button",{staticClass:"btn-upload-all vs-upload--button-upload",attrs:{disabled:0==e.filesx.length,type:"button",title:"Upload"},on:{click:function(t){return e.upload("all")}}},[r("i",{staticClass:"material-icons notranslate",attrs:{translate:"no"}},[e._v("\n          cloud_upload\n        ")])]):e._e()])],2)],1)}),[],!1,null,null,null);t.a=f.exports},770:function(e,t,r){var content=r(857);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(45).default)("1c93b3cb",content,!0,{sourceMap:!1})},771:function(e,t,r){var content=r(859);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(45).default)("b60e2a96",content,!0,{sourceMap:!1})},856:function(e,t,r){"use strict";var l=r(770);r.n(l).a},857:function(e,t,r){(t=r(44)(!1)).push([e.i,".emptyServices[data-v-47f10e36]{color:#f56c6c;font-size:12px;line-height:1;padding-top:4px;position:absolute}.emptyImage[data-v-47f10e36]{color:#f56c6c;font-size:14px;padding:7px}",""]),e.exports=t},858:function(e,t,r){"use strict";var l=r(771);r.n(l).a},859:function(e,t,r){(t=r(44)(!1)).push([e.i,".PhoneNumberInput .vue-phone-number-input .select-country-container{-webkit-box-flex:0!important;flex:0 0 77px!important;min-width:0!important;max-width:none!important;padding-right:5px;width:120px}.country-selector{font-family:Roboto,-apple-system,BlinkMacSystemFont,Segoe UI,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;position:relative;height:40px;min-height:40px;z-index:0;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.country-selector__country-flag{margin:auto 0;position:absolute;top:21px;left:11px;z-index:1;cursor:pointer}.iti-flag.eg{height:14px;background-position:-1489px 0}.country-selector.has-hint .country-selector__input,.country-selector.has-value .country-selector__input{padding-top:14px}.PhoneNumberInput .country-selector.has-hint .country-selector__input,.PhoneNumberInput .country-selector.has-value .country-selector__input{border:#29bbc1!important;box-shadow:none!important;padding-right:14px}.country-selector__input{cursor:pointer;background-color:#fff;position:relative;width:100%;height:40px;min-height:40px;padding-right:22px;font-weight:400;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none;border:1px solid #ccc;font-size:13px;z-index:0;padding-left:8px;color:#000}.PhoneNumberInput .country-selector__input{padding-left:29px!important;padding-bottom:13px!important}.country-selector__toggle{position:absolute;right:5px;top:calc(50% - 10px);-webkit-transition:all .25s cubic-bezier(.645,.045,.355,1);transition:all .25s cubic-bezier(.645,.045,.355,1);text-align:center;display:inline-block;cursor:pointer;height:24px}.PhoneNumberInput .country-selector__toggle{right:-6px!important;top:calc(50% - 12px)!important}.country-selector__toggle__arrow{color:#747474}.country-selector__toggle__arrow path.arrow{fill:#747474}.country-selector.has-hint .country-selector__label,.country-selector.has-value .country-selector__label{opacity:1;-webkit-transform:translateY(0);transform:translateY(0);font-size:11px}.country-selector__label{position:absolute;top:3px;cursor:pointer;left:11px;-webkit-transform:translateY(25%);transform:translateY(25%);opacity:0;-webkit-transition:all .25s cubic-bezier(.645,.045,.355,1);transition:all .25s cubic-bezier(.645,.045,.355,1);font-size:11px;color:#747474}.PhoneNumberInput .country-selector__label{display:none}.country-selector__list{max-width:100%;top:100%;width:100%;min-width:230px;position:absolute;background-color:#fff;overflow:hidden;box-shadow:0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12);z-index:9;list-style:none;overflow-y:auto;overflow-x:hidden;padding:0;margin:0}.flex.align-center{-webkit-box-align:center;align-items:center}.PhoneNumberInput .flex{display:-webkit-box;display:flex;width:100%;border-radius:3px;background-color:#fff;text-align:right;font-size:1.3rem;float:right;font-family:inherit!important;border:1px solid #dcdfe6;color:#606266}.country-selector__list__item{padding:0 10px;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;font-size:12px;cursor:pointer;background-color:transparent;width:100%;border:0;outline:none}.flex-1{-webkit-box-flex:1;flex:1}.PhoneNumberInput .input-tel{font-family:inherit!important}.input-tel{position:relative;font-family:Roboto,-apple-system,BlinkMacSystemFont,Segoe UI,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;height:40px;min-height:40px}.PhoneNumberInput .input-tel__input:not(.no-country-selector){border:#29bbc1!important;box-shadow:none!important}.PhoneNumberInput .flex-1 .input-tel__label{display:none}.input-tel__label{position:absolute;top:4px;cursor:pointer;left:13px;-webkit-transform:translateY(25%);transform:translateY(25%);opacity:0;-webkit-transition:all .25s cubic-bezier(.645,.045,.355,1);transition:all .25s cubic-bezier(.645,.045,.355,1);font-size:11px;color:#747474}",""]),e.exports=t},895:function(e,t,r){"use strict";r.r(t);r(172),r(283),r(538),r(690);var l=r(540),n=r.n(l),o=r(701),c=r.n(o),d=(r(284),r(689)),m=r(537),h=r(14),f=(r(547),r(693)),v={components:{VuePhoneNumberInput:c.a,vsUpload:f.a},middleware:["auth","isHouseOwner"],data:function(){var e=function(e,t,r){Number.isInteger(t)?t<1?r(new Error("يجب ان يكون على الاقل 1")):r():r(new Error("يجب ان يكون عدد"))},t=function(e,t,r){var l=String(t).trim().length;l<2||l>200?r(new Error("يجب أن يكون بين 2 و 200 أحرف")):r()};return{Toast:n.a.mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:3e3}),testImage:{},advantagesDialogVisible:!1,currentServices:{name:"",allServices:[]},rules:{email:[{required:!0,message:"يجب إدخال البريد الإلكتروني",trigger:"blur"},{type:"email",message:"يجب إدخال البريد الإلكتروني صالح",trigger:["blur","change"]}],name:[{required:!0,message:"يجب إدخال الاسم",trigger:"blur"},{min:2,max:50,message:"يجب أن يكون اسمك بين 2 و 50 أحرف",trigger:"blur"}],phone:[{required:!0,message:"يجب إدخال رقم الهاتف",trigger:"blur"},{min:10,max:11,message:"يجب إدخال رقم هاتف صالح",trigger:"blur"},{validator:function(e,t,r){""===t||11!==t.length||String(t).startsWith("01")?""!==t&&10===t.length&&String(t).startsWith("01")?r(new Error("يجب إدخال رقم هاتف صالح")):""===t||10!==t.length||String(t).startsWith("1")?r():r(new Error("يجب إدخال رقم هاتف صالح")):r(new Error("يجب إدخال رقم هاتف صالح"))},trigger:"blur"}],currency:[{required:!0,message:"يجب اختيار العملة",trigger:"change"}],description:[{required:!0,message:"يجب ادخال وصف الفندق",trigger:"blur"},{min:5,max:500,message:"يجب أن يكون وصف الفندق بين 5 و 500 أحرف",trigger:"blur"}],addressGovernment:[{required:!0,message:"يجب إدخال المحافظة",trigger:"change"}],addressStreet:[{required:!0,message:"يجب ادخال اسم الشارع",trigger:"blur"},{validator:t,trigger:"blur"}],addressNearTo:[{required:!0,message:"يجب ادخال قريب من",trigger:"blur"},{validator:t,trigger:"blur"}],addressHighlight:[{required:!0,message:"يجب ادخال علامة مميزة",trigger:"blur"},{validator:t,trigger:"blur"}],addressHouseNumber:[{required:!0,message:"يجب ادخال رقم المنزل",trigger:"blur"},{validator:e,trigger:"blur"}],addressApartmentNumber:[{required:!0,message:"يجب ادخال رقم الشقة",trigger:"blur"},{validator:e,trigger:"blur"}],addressFloorNumber:[{required:!0,message:"يجب ادخال رقم الدور",trigger:"blur"},{validator:e,trigger:"blur"}],freeServices:[{required:!0,message:"يجب اختيار بعض الخدمات المجانية",trigger:"change"}],generalServices:[{required:!0,message:"يجب اختيار بعض الخدمات المجانية",trigger:"change"}],hostelServices:[{required:!0,message:"يجب اختيار بعض الخدمات الفندقيه",trigger:"change"}],entertainmentServices:[{required:!0,message:"يجب اختيار بعض الخدمات الترفيهية",trigger:"change"}],foodServices:[{required:!0,message:"يجب اختيار بعض خدمات الطعام",trigger:"change"}],checked:[{validator:function(e,t,r){t?r():r(new Error("يجب الموافقة على جميع الشروط و سياسات الموقع"))},trigger:"change"}]},condition:"",egyptCities:[],allFreeServices:[],allGeneralServices:[],allHostelServices:[],allEntertainmentServices:[],allFoodServices:[],currencies:[{lcValue:"le",ucValue:"جنيه"},{lcValue:"usd",ucValue:"دولار"}],value:"",hostel:{name:"",image:"",phone:"",email:"",managerEmail:"",description:"",currency:"",address:{government:"",street:"",nearTo:"",highlight:"",houseNumber:"",apartmentNumber:"",floorNumber:""},addressGovernment:"",addressStreet:"",addressNearTo:"",addressHighlight:"",addressHouseNumber:"",addressApartmentNumber:"",addressFloorNumber:"",freeServices:[],generalServices:[],hostelServices:[],entertainmentServices:[],foodServices:[]},checked:!1,emptyFreeServices:!1,emptyGeneralServices:!1,emptyHostelServices:!1,emptyEntertainmentServices:!1,emptyFoodServices:!1,selectedImage:[],emptyImage:!1,imageError:!1,imageLoading:!1,lastFileId:"",fileList:[],formatNational:"",imageUploadDone:!1,translations:{phoneNumberLabel:"01205954032"}}},created:function(){Object(h.b)(),m.a&&0!==m.a.length&&(this.egyptCities=m.a),d.a&&(d.a.freeServices&&(this.allFreeServices=d.a.freeServices),d.a.generalServices&&(this.allGeneralServices=d.a.generalServices),d.a.hostelServices&&(this.allHostelServices=d.a.hostelServices),d.a.entertainmentServices&&(this.allEntertainmentServices=d.a.entertainmentServices),d.a.foodServices&&(this.allFoodServices=d.a.foodServices))},methods:{uploadImage:function(){console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaa"),console.log(this.selectedImage),console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaa"),this.emptyImage=!1},deleteImage:function(){console.log("bbbbbbbbbbbbbbbbbbbbbbbbbbbb"),console.log(this.selectedImage),console.log("bbbbbbbbbbbbbbbbbbbbbbbbbbbb"),this.emptyImage=!0},successUpload:function(e,t){},showModal:function(e,t){this.currentServices={name:e,allServices:t},this.advantagesDialogVisible=!0},addTimeSlot:function(){this.unit.availability.push({from:"",to:""})},addCondition:function(){this.unit.conditions.push(this.condition),this.condition=""},handlePreview:function(){},handleRemove:function(){},updatePhone:function(e){e.formatNational&&(this.hostel.phone=e.formatNational.split(" ").join("")),this.formattedNumber=e.formattedNumber||""},submitForm:function(e){var t=this;this.hostel.phone=this.hostel.phone.split(" ").join(""),this.selectedImage&&0!==this.selectedImage.length?0!==this.selectedImage.length&&100!==this.selectedImage[0].percent?(this.emptyImage=!1,this.imageLoading=!0,this.imageError=!1):0!==this.selectedImage.length&&this.selectedImage[0].error?(this.emptyImage=!1,this.imageLoading=!1,this.imageError=!0):(this.hostel.image=this.selectedImage[0].url,this.emptyImage=!1,this.imageError=!1,this.imageLoading=!1):(this.emptyImage=!0,this.imageLoading=!1,this.imageError=!1),this.$refs[e].validate((function(e){if(!e||t.emptyImage)return!1;t.checked?(t.hostel.address.government=t.hostel.addressGovernment,t.hostel.address.street=t.hostel.addressStreet,t.hostel.address.nearTo=t.hostel.addressNearTo,t.hostel.address.highlight=t.hostel.addressHighlight,t.hostel.address.houseNumber=t.hostel.addressHouseNumber,t.hostel.address.apartmentNumber=t.hostel.addressApartmentNumber,t.hostel.address.floorNumber=t.hostel.addressFloorNumber,String(t.hostel.phone).startsWith("01")||(t.hostel.phone="0"+t.hostel.phone),t.emptyImage||t.imageError||t.imageLoading||h.a.post("hostels",t.hostel).then((function(e){window.location.href="/hotelGroups?id=".concat(e.data.hostelId)})).catch((function(e){var r="حدث خطأ ما";return e.response&&e.response.data&&e.response.data.message&&(r=e.response.data.message),t.Toast.fire({icon:"error",title:r}),e}))):t.Toast.fire({icon:"error",title:"يجب الموافقة على جميع الشروط و سياسات الموقع!!"})}))},policeDialog:function(){this.$store.commit("policeDialog",!0)},cancelAdd:function(){this.$router.push("/dashboard")}}},_=(r(856),r(858),r(4)),component=Object(_.a)(v,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"add-hotal u-margin-top-big u-margin-bottom-medium u-container"},[r("el-row",{staticClass:"unitsFormMargin",attrs:{gutter:20,dir:"rtl"}},[r("el-form",{ref:"hostel",attrs:{model:e.hostel,rules:e.rules,"label-position":"top","label-width":"100px",dir:"rtl"}},[r("el-col",{staticClass:"u-col-rtl",attrs:{xs:24,span:12}},[r("div",{staticClass:"grid-content bg-purple-light"},[r("p",{staticClass:"rightText formTitle"},[e._v("\n              إضافة الفندق\n            ")]),e._v(" "),r("el-row",{staticClass:"unitsFormMargin",attrs:{gutter:10,dir:"rtl"}},[r("el-col",{staticClass:"u-col-rtl",attrs:{xs:24,span:12}},[r("el-form-item",{attrs:{label:"الاسم",prop:"name"}},[r("el-input",{attrs:{placeholder:"sara Inn"},model:{value:e.hostel.name,callback:function(t){e.$set(e.hostel,"name",t)},expression:"hostel.name"}})],1)],1),e._v(" "),r("el-col",{staticClass:"u-col-rtl",attrs:{xs:24,span:12}},[r("el-form-item",{attrs:{label:"الايميل",prop:"email"}},[r("el-input",{attrs:{placeholder:"sarainn@gmail.com"},model:{value:e.hostel.email,callback:function(t){e.$set(e.hostel,"email",t)},expression:"hostel.email"}})],1)],1)],1),e._v(" "),r("el-row",{staticClass:"unitsFormMargin",attrs:{gutter:20,dir:"rtl"}},[r("el-col",{staticClass:"u-col-rtl",attrs:{xs:24,span:16}},[r("el-form-item",{staticClass:"PhoneNumberInput",attrs:{label:"رقم التليفون",prop:"phone"}},[r("VuePhoneNumberInput",{staticClass:"PhoneNumberInput",attrs:{translations:e.translations,"default-country-code":"EG","valid-color":"#DCDFE6",color:"#DCDFE6","error-color":"#DCDFE6"},on:{update:e.updatePhone},model:{value:e.hostel.phone,callback:function(t){e.$set(e.hostel,"phone",t)},expression:"hostel.phone"}})],1)],1),e._v(" "),r("el-col",{staticClass:"u-col-rtl",attrs:{xs:24,span:8}},[r("el-form-item",{attrs:{label:"العملة",prop:"currency"}},[r("el-select",{attrs:{placeholder:"العملة"},model:{value:e.hostel.currency,callback:function(t){e.$set(e.hostel,"currency",t)},expression:"hostel.currency"}},e._l(e.currencies,(function(e){return r("el-option",{key:e.lcValue,staticStyle:{"text-align":"end"},attrs:{label:e.ucValue,value:e.lcValue,"popper-class":"select__rtl"}})})),1)],1)],1),e._v(" "),r("el-col",{staticClass:"u-col-rtl",attrs:{xs:24,span:24}},[r("el-form-item",{attrs:{label:"الايميل (المدير)",prop:"email"}},[r("el-input",{attrs:{placeholder:"mr.Ahmed@gmail.com"},model:{value:e.hostel.managerEmail,callback:function(t){e.$set(e.hostel,"managerEmail",t)},expression:"hostel.managerEmail"}})],1)],1)],1),e._v(" "),r("el-row",{staticClass:"unitsFormMargin",attrs:{gutter:20,dir:"rtl"}},[r("el-col",{staticClass:"u-col-rtl",attrs:{xs:24,span:24}},[r("el-form-item",{attrs:{label:"وصف الفندق",prop:"description"}},[r("el-input",{attrs:{rows:6,type:"textarea",placeholder:"* نحن في الطابق الثاني والرابع مع مكتبين للاستقبال.\n* يعمل مكتب الاستقبال على مدار 24 ساعة في اليوم ، ولا يوجد حظر تجول.\n* تسجيل الوصول هو من الساعة 12:30 مساءً\n* آخر مرة تحقق من الساعة 12:00 مساءً\n"},model:{value:e.hostel.description,callback:function(t){e.$set(e.hostel,"description",t)},expression:"hostel.description"}})],1)],1)],1),e._v(" "),r("el-divider",{attrs:{"content-position":"right"}},[e._v("العنوان")]),e._v(" "),r("el-row",{staticClass:"unitsFormMargin",attrs:{gutter:20,dir:"rtl"}},[r("el-col",{staticClass:"u-col-rtl",attrs:{xs:24,span:12}},[r("el-form-item",{attrs:{label:"المحافظة",prop:"addressGovernment"}},[r("el-select",{attrs:{"popper-class":"select__rtl",placeholder:"القاهره"},model:{value:e.hostel.addressGovernment,callback:function(t){e.$set(e.hostel,"addressGovernment",t)},expression:"hostel.addressGovernment"}},e._l(e.egyptCities,(function(e){return r("el-option",{key:e.value,staticStyle:{"text-align":"end"},attrs:{label:e.label,value:e.value}})})),1)],1)],1),e._v(" "),r("el-col",{staticClass:"u-col-rtl",attrs:{xs:24,span:12}},[r("el-form-item",{attrs:{label:"الشارع",prop:"addressStreet"}},[r("el-input",{attrs:{type:"string",placeholder:"شارع عابدين"},model:{value:e.hostel.addressStreet,callback:function(t){e.$set(e.hostel,"addressStreet",t)},expression:"hostel.addressStreet"}})],1)],1)],1),e._v(" "),r("el-row",{staticClass:"unitsFormMargin",attrs:{gutter:20,dir:"rtl"}},[r("el-col",{staticClass:"u-col-rtl",attrs:{xs:24,span:12}},[r("el-form-item",{attrs:{label:"قريباً من",prop:"addressNearTo"}},[r("el-input",{attrs:{type:"string",placeholder:"محطه مترو السادات"},model:{value:e.hostel.addressNearTo,callback:function(t){e.$set(e.hostel,"addressNearTo",t)},expression:"hostel.addressNearTo"}})],1)],1),e._v(" "),r("el-col",{staticClass:"u-col-rtl",attrs:{xs:24,span:12}},[r("el-form-item",{attrs:{label:"علامة مميزة",prop:"addressHighlight"}},[r("el-input",{attrs:{type:"string",placeholder:"امام البنك الاهلي"},model:{value:e.hostel.addressHighlight,callback:function(t){e.$set(e.hostel,"addressHighlight",t)},expression:"hostel.addressHighlight"}})],1)],1)],1),e._v(" "),r("el-row",{staticClass:"unitsFormMargin",attrs:{gutter:20,dir:"rtl"}},[r("el-col",{staticClass:"u-col-rtl",attrs:{xs:24,span:8}},[r("el-form-item",{attrs:{label:"رقم المنزل",prop:"addressHouseNumber"}},[r("el-input",{attrs:{placeholder:"65"},model:{value:e.hostel.addressHouseNumber,callback:function(t){e.$set(e.hostel,"addressHouseNumber",e._n(t))},expression:"hostel.addressHouseNumber"}})],1)],1),e._v(" "),r("el-col",{staticClass:"u-col-rtl",attrs:{xs:24,span:8}},[r("el-form-item",{attrs:{label:"رقم الشقة",prop:"addressApartmentNumber"}},[r("el-input",{attrs:{placeholder:"41"},model:{value:e.hostel.addressApartmentNumber,callback:function(t){e.$set(e.hostel,"addressApartmentNumber",e._n(t))},expression:"hostel.addressApartmentNumber"}})],1)],1),e._v(" "),r("el-col",{staticClass:"u-col-rtl",attrs:{xs:24,span:8}},[r("el-form-item",{attrs:{label:"الدور",prop:"addressFloorNumber"}},[r("el-input",{attrs:{placeholder:"4"},model:{value:e.hostel.addressFloorNumber,callback:function(t){e.$set(e.hostel,"addressFloorNumber",e._n(t))},expression:"hostel.addressFloorNumber"}})],1)],1)],1),e._v(" "),r("el-divider",{attrs:{"content-position":"right"}},[e._v("الخدمات المجانية")]),e._v(" "),r("el-row",{staticClass:"unitsFormMargin",attrs:{gutter:20,dir:"rtl"}},[r("el-col",{staticClass:"u-col-rtl",attrs:{xs:24,span:24}},[r("el-form-item",{attrs:{prop:"freeServices"}},[r("el-select",{attrs:{multiple:"","popper-class":"select__rtl",placeholder:"المميزات"},model:{value:e.hostel.freeServices,callback:function(t){e.$set(e.hostel,"freeServices",t)},expression:"hostel.freeServices"}},e._l(e.allFreeServices,(function(e){return r("el-option",{key:e.enValue,staticStyle:{"text-align":"end"},attrs:{label:e.arValue,value:e.enValue}})})),1)],1)],1)],1),e._v(" "),r("el-divider",{attrs:{"content-position":"right"}},[e._v("الخدمات الرئيسية")]),e._v(" "),r("el-row",{staticClass:"unitsFormMargin",attrs:{gutter:20,dir:"rtl"}},[r("el-col",{staticClass:"u-col-rtl",attrs:{xs:24,span:24}},[r("el-form-item",{attrs:{prop:"generalServices"}},[r("el-select",{attrs:{multiple:"","popper-class":"select__rtl",placeholder:"المميزات"},model:{value:e.hostel.generalServices,callback:function(t){e.$set(e.hostel,"generalServices",t)},expression:"hostel.generalServices"}},e._l(e.allGeneralServices,(function(e){return r("el-option",{key:e.enValue,staticStyle:{"text-align":"end"},attrs:{label:e.arValue,value:e.enValue}})})),1)],1)],1)],1)],1)]),e._v(" "),r("el-col",{staticClass:"u-col-rtl",attrs:{xs:24,span:12}},[r("div",{staticClass:"grid-content unitsFormMargin floatRight bg-purple"},[r("div",{staticClass:"upload-component-main"},[r("vsUpload",{attrs:{id:"input",accept:["image/png","image.jpg","image/jpeg","image/svg"],"on-delete":e.deleteImage,limit:1,data:e.testImage,text:"اسحب الصور و القها هنا او تصفح لاختيار الصور من جهازك",multiple:"",automatic:"",action:"https://jsonplaceholder.typicode.com/posts/"},on:{change:e.uploadImage},model:{value:e.selectedImage,callback:function(t){e.selectedImage=t},expression:"selectedImage"}})],1),e._v(" "),e.emptyImage?r("p",{staticClass:"emptyImage"},[e._v("\n              يجب اختيار صورة للفندق\n            ")]):e._e(),e._v(" "),e.imageError?r("p",{staticClass:"emptyImage"},[e._v("\n              حدث خطأ اثناء إضافة صورة للفندق\n            ")]):e._e(),e._v(" "),e.imageLoading?r("p",{staticClass:"emptyImage"},[e._v("\n              من فضلك انتظر اضافة صورة للفندق\n            ")]):e._e(),e._v(" "),r("el-divider",{staticStyle:{"margin-top":"30px"},attrs:{"content-position":"right"}},[e._v("الخدمات الفندقية")]),e._v(" "),r("el-row",{staticClass:"unitsFormMargin",attrs:{gutter:20,dir:"rtl"}},[r("el-col",{staticClass:"u-col-rtl",attrs:{xs:24,span:24}},[r("el-form-item",{attrs:{prop:"hostelServices"}},[r("el-select",{attrs:{multiple:"","popper-class":"select__rtl",placeholder:"المميزات"},model:{value:e.hostel.hostelServices,callback:function(t){e.$set(e.hostel,"hostelServices",t)},expression:"hostel.hostelServices"}},e._l(e.allHostelServices,(function(e){return r("el-option",{key:e.enValue,staticStyle:{"text-align":"end"},attrs:{label:e.arValue,value:e.enValue}})})),1)],1)],1)],1),e._v(" "),r("el-divider",{attrs:{"content-position":"right"}},[e._v("الخدمات الترفيهية")]),e._v(" "),r("el-row",{staticClass:"unitsFormMargin",attrs:{gutter:20,dir:"rtl"}},[r("el-col",{staticClass:"u-col-rtl",attrs:{xs:24,span:24}},[r("el-form-item",{attrs:{prop:"entertainmentServices"}},[r("el-select",{attrs:{multiple:"","popper-class":"select__rtl",placeholder:"المميزات"},model:{value:e.hostel.entertainmentServices,callback:function(t){e.$set(e.hostel,"entertainmentServices",t)},expression:"hostel.entertainmentServices"}},e._l(e.allEntertainmentServices,(function(e){return r("el-option",{key:e.enValue,staticStyle:{"text-align":"end"},attrs:{label:e.arValue,value:e.enValue}})})),1)],1)],1)],1),e._v(" "),r("el-divider",{attrs:{"content-position":"right"}},[e._v("خدمات الطعام")]),e._v(" "),r("el-row",{staticClass:"unitsFormMargin",attrs:{gutter:20,dir:"rtl"}},[r("el-col",{staticClass:"u-col-rtl",attrs:{xs:24,span:24}},[r("el-form-item",{attrs:{prop:"foodServices"}},[r("el-select",{attrs:{multiple:"","popper-class":"select__rtl",placeholder:"المميزات"},model:{value:e.hostel.foodServices,callback:function(t){e.$set(e.hostel,"foodServices",t)},expression:"hostel.foodServices"}},e._l(e.allFoodServices,(function(e){return r("el-option",{key:e.enValue,staticStyle:{"text-align":"end"},attrs:{label:e.arValue,value:e.enValue}})})),1)],1)],1)],1)],1)]),e._v(" "),r("el-col",{attrs:{span:24}},[r("el-form-item",[r("el-checkbox",{staticStyle:{"margin-top":"10px",display:"block",float:"right"},model:{value:e.checked,callback:function(t){e.checked=t},expression:"checked"}}),e._v(" "),r("span",{staticStyle:{margin:"1rem","margin-right":"2rem",display:"flex"}},[e._v("\n              أوافق على جميع\n              "),r("span",{staticClass:"signup-field_checkbox-text",on:{click:e.policeDialog}},[e._v("شروط و سياسات")]),e._v("\n              الموقع\n            ")])],1)],1)],1)],1),e._v(" "),r("div",{attrs:{dir:"rtl"}},[r("el-button",{staticClass:"actionButton gradirent-bg",on:{click:function(t){return e.submitForm("hostel")}}},[e._v("\n        أضافة فندق\n      ")]),e._v(" "),r("el-button",{staticClass:"actionButton",attrs:{type:"danger",plain:""},on:{click:e.cancelAdd}},[e._v("\n        الغاء\n      ")])],1)],1)}),[],!1,null,"47f10e36",null);t.default=component.exports}}]);