(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{739:function(t,e,n){"use strict";n(741),n(51),n(87),n(88),n(18),n(768);var r=n(736),o=n(737),l=n(1);e.a={name:"v-combobox",extends:o.a,props:{delimiters:{type:Array,default:function(){return[]}},returnObject:{type:Boolean,default:!0}},data:function(){return{editingIndex:-1}},computed:{counterValue:function(){return this.multiple?this.selectedItems.length:(this.internalSearch||"").toString().length},hasSlot:function(){return r.a.options.computed.hasSlot.call(this)||this.multiple},isAnyValueAllowed:function(){return!0},menuCanShow:function(){return!!this.isFocused&&(this.hasDisplayedItems||!!this.$slots["no-data"]&&!this.hideNoData)}},methods:{onFilteredItemsChanged:function(){},onInternalSearchChanged:function(t){if(t&&this.multiple&&this.delimiters.length){var e=this.delimiters.find(function(e){return t.endsWith(e)});null!=e&&(this.internalSearch=t.slice(0,t.length-e.length),this.updateTags())}this.updateMenuDimensions()},genChipSelection:function(t,e){var n=this,o=r.a.options.methods.genChipSelection.call(this,t,e);return this.multiple&&(o.componentOptions.listeners.dblclick=function(){n.editingIndex=e,n.internalSearch=n.getText(t),n.selectedIndex=-1}),o},onChipInput:function(t){r.a.options.methods.onChipInput.call(this,t),this.editingIndex=-1},onEnterDown:function(t){t.preventDefault(),r.a.options.methods.onEnterDown.call(this),this.getMenuIndex()>-1||this.updateSelf()},onKeyDown:function(t){var e=t.keyCode;r.a.options.methods.onKeyDown.call(this,t),this.multiple&&e===l.q.left&&0===this.$refs.input.selectionStart&&this.updateSelf(),this.changeSelectedIndex(e)},onTabDown:function(t){if(this.multiple&&this.internalSearch&&-1===this.getMenuIndex())return t.preventDefault(),t.stopPropagation(),this.updateTags();o.a.options.methods.onTabDown.call(this,t)},selectItem:function(t){this.editingIndex>-1?this.updateEditing():r.a.options.methods.selectItem.call(this,t)},setSelectedItems:function(){null==this.internalValue||""===this.internalValue?this.selectedItems=[]:this.selectedItems=this.multiple?this.internalValue:[this.internalValue]},setValue:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.internalSearch;r.a.options.methods.setValue.call(this,t)},updateEditing:function(){var t=this.internalValue.slice();t[this.editingIndex]=this.internalSearch,this.setValue(t),this.editingIndex=-1},updateCombobox:function(){var t=Boolean(this.$scopedSlots.selection)||this.hasChips;t&&!this.searchIsDirty||(this.internalSearch!==this.getText(this.internalValue)&&this.setValue(),t&&(this.internalSearch=void 0))},updateSelf:function(){this.multiple?this.updateTags():this.updateCombobox()},updateTags:function(){var t=this.getMenuIndex();if(!(t<0)||this.searchIsDirty){if(this.editingIndex>-1)return this.updateEditing();var e=this.selectedItems.indexOf(this.internalSearch);if(e>-1){var n=this.internalValue.slice();n.splice(e,1),this.setValue(n)}if(t>-1)return this.internalSearch=null;this.selectItem(this.internalSearch),this.internalSearch=null}}}}},741:function(t,e,n){"use strict";var r=n(19),o=n(54),l=n(201),f="".endsWith;r(r.P+r.F*n(202)("endsWith"),"String",{endsWith:function(t){var e=l(this,t,"endsWith"),n=arguments.length>1?arguments[1]:void 0,r=o(e.length),c=void 0===n?r:Math.min(o(n),r),d=String(t);return f?f.call(e,d,c):e.slice(c-d.length,c)===d}})},842:function(t,e,n){"use strict";n.r(e);n(51),n(26),n(40);var r=n(14),o=(n(44),n(11)),l=n(63),f=n.n(l),c=n(27),d=n(582),h=n(52),v=n(578),m=n.n(v),x=n(579),I=["40","10","29","66","16","32","20","19"],y={isDuplicate:!1,address:{},militaryId:void 0,individualId:void 0,fullName:void 0,religion:"مسلم",category:void 0,force:void 0,army:void 0,medicalSituation:"fit",joinDate:m()().month(2).startOf("month").toISOString().substr(0,10),birthDate:m()().subtract(20,"year").toDate().toISOString().substr(0,10),education:void 0,treatment:"without_extra_year",notes:"",influences:[]},_={layout:"dashboard",data:function(){var t=this;return{militaryIdLength:13,nationalIdLength:14,militaryIdErrorMessages:[],staff:f.a.cloneDeep(y),forces:[],address:{governate:void 0,centre:void 0,village:void 0},governates:[],rules:{militaryId:[function(e){return!!e||t.$t("MilitaryId_Required")},function(e){return t.validateMilitaryId(e)}],nationalId:[function(e){return t.validateNationalId(e)}],name:[function(e){return!!e||t.$t("Name_Required")}],rank:[function(e){return!!e||t.$t("Rank_Required")}],category:[function(e){return!!e||t.$t("Category_Required")}],force:[function(e){return!!e||t.$t("Force_Required")}],rankingDate:[function(e){return!!e||t.$t("Ranking_Date_Required")}],governate:[function(e){return!!e||t.$t("Governate_Required")}],centre:[function(e){return!!e||t.$t("Centre_Required")}],village:[function(e){return!!e||t.$t("Village_Required")}]},divisions:[],unitId:void 0,divisionId:void 0,edit:!1,birthDateModal:!1,joinDateModal:!1,rankingDateModal:!1,recruitmentLevel:"first",educationRank:void 0,treatment:"without_extra_year",situation:"without",joinDate:m()().month(2).startOf("month").toISOString().substr(0,10)}},created:function(){var t=Object(o.a)(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.getDivisions();case 2:t.sent,this.edit?(this.processMilitaryId(this.staff.militaryId),this.joinDate=this.staff.joinDate,this.rankingDate=this.staff.rankingDate,this.birthDate=this.staff.birthDate):this.staff=f.a.cloneDeep(y);case 4:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),middleware:["auth","isNotLoggedIn","isAuthorized"],meta:{branches:["recon_force_people"],permissions:["recon_staff_creator"]},components:{materialCard:x.a},computed:Object(r.a)({},Object(c.c)({user:"app/getUser",locations:"app/getLocations",defaults:"app/getDefaults",fullname:"user/getFullname"}),{divisionsComputed:function(){var t=this;return this.staff.army?this.divisions.filter(function(e){return e.army===t.staff.army&&["division"].includes(e.type)}):this.divisions.filter(function(t){return["division"].includes(t.type)})},unitsComputed:function(){var t=this;console.log("computing units");var e=this.divisionId?this.divisions.filter(function(t){return["battalion","company"].includes(t.type)}).filter(function(e){return e.divisionId===t.divisionId||e.divisionId&&e.divisionId._id===t.divisionId}):this.divisions.filter(function(t){return["battalion","company"].includes(t.type)});return!this.divisionId&&this.staff.army&&(e=e.filter(function(e){return e.army===t.staff.army})),e}}),methods:{moment:m.a,getRightMonths:function(time){return[0,3,6,9].includes(m()(time).month())},reset:function(){this.joinDateBack=this.joinDate,this.staff=f.a.cloneDeep(y),this.treatment=this.staff.treatment,this.educationRank=this.staff.educationRank,this.recruitmentLevel=this.staff.recruitmentLevel,this.joinDate=this.joinDateBack,this.militaryIdErrorMessages=[]},command:function(t){if(13===t.keyCode)return this.submit()},getDivisions:function(){var t=Object(o.a)(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return"/divisions",t.next=3,Object(h.d)("/divisions");case 3:if(!(e=t.sent).error){t.next=7;break}return console.log("error getting divisions",e.error),t.abrupt("return");case 7:this.divisions=e.divisions;case 8:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),submit:function(){var t=Object(o.a)(regeneratorRuntime.mark(function t(){var e,path,n;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(e=this.edit?"Edited":"Added",!this.$refs.form.validate()){t.next=10;break}return path=this.edit?"/staffs/edit/".concat(this.staffId):"/staffs",t.next=6,Object(h.e)(path,this.staff);case 6:if(!(n=t.sent).error){t.next=9;break}return t.abrupt("return",d.b.fire({icon:"error",title:n.error,timer:4e3,showConfirmButton:!1}));case 9:d.b.fire({icon:"success",title:this.$i18n.t("".concat(e,"_Staff_Success")),timer:4e3,showConfirmButton:!1});case 10:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),isDuplicate:function(){var t=Object(o.a)(regeneratorRuntime.mark(function t(e){var n,r,o,l;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.key,r=e.value,"/staffs/is-duplicate",o={key:n,value:r},t.next=5,Object(h.d)("/staffs/is-duplicate",o);case 5:if(!(l=t.sent).error){t.next=8;break}return t.abrupt("return",!1);case 8:return t.abrupt("return",l.isDuplicate);case 9:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}(),setAll:function(t){this.staff.unitId=void 0,this.staff.divisionId=void 0},setUnits:function(t){var e=this.divisions.find(function(e){return e._id===t});this.divisionId=t,e&&(this.staff.army=e.army,this.staff.unitId=void 0)},setDivision:function(t){var e=this.unitsComputed.find(function(e){return e._id===t});e&&(this.staff.unitId=e._id,this.staff.divisionId=e.divisionId?e.divisionId._id:e.divisionId,this.staff.army=e.army)},processMilitaryId:function(){var t=Object(o.a)(regeneratorRuntime.mark(function t(e){var n,r,code,o,l;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(this.forces=f.a.cloneDeep(this.defaults.FORCES_LIST),(n=e.substr(0,4)).length>=4&&parseInt(n,10)<=(new Date).getFullYear()&&((r=new Date(this.joinDate)).setFullYear(parseInt(n,10)),this.joinDate=r.toISOString().substr(0,10),this.joinDate=r.toISOString().substr(0,10)),e.length>=8&&(code="".concat(e[6]).concat(e[7]),(o=this.defaults.STAFF_CATEGORIES.find(function(t){return t.code==code}))&&(this.staff.category=o.value,"47"===o.value&&(this.forces=f.a.cloneDeep(this.defaults.FORCES_LIST).filter(function(t){return I.includes(t.value)})))),13!==e.length||this.edit){t.next=17;break}return t.prev=5,t.next=8,this.isDuplicate({key:"militaryId",value:e});case 8:l=t.sent,this.staff.isDuplicate=l,this.staff.isDuplicate?this.militaryIdErrorMessages=[this.$i18n.t("MillitaryId_Duplicate")]:this.militaryIdErrorMessages=[],t.next=15;break;case 13:t.prev=13,t.t0=t.catch(5);case 15:t.next=18;break;case 17:this.militaryIdErrorMessages=[];case 18:case"end":return t.stop()}},t,this,[[5,13]])}));return function(e){return t.apply(this,arguments)}}(),onlyNumber:function(t){var e=t.keyCode?t.keyCode:t.which;(e<48||e>57)&&46!==e&&t.preventDefault()},validateMilitaryId:function(t){if(void 0===t)return!0;if(t.length<4)return this.$i18n.t("MillitaryId_Invalid");var e=t.substr(0,4);if(!(e.length>=4&&parseInt(e)<=(new Date).getFullYear()))return this.$i18n.t("MillitaryId_Invalid");if(t.length>=8){var code="".concat(t[6]).concat(t[7]);if(!this.defaults.STAFF_CATEGORIES.find(function(t){return t.code==code}))return this.$i18n.t("MillitaryId_Invalid")}return t.length<13?this.$i18n.t("MillitaryId_Incomplete"):(13===t.length&&(this.staff.individualId=t.substr(t.length-4)),!1)},validateNationalId:function(t){if(void 0===t)return!1;if(t.length>=1){var e=t[0];if(!["2","3"].includes(e))return this.$i18n.t("NationalId_Invalid")}if(t.length>=5){var n=parseInt("".concat(t[3]).concat(t[4]),10);if(n>12||n<1)return this.$i18n.t("NationalId_Invalid")}if(t.length>=7){var r=parseInt("".concat(t[5]).concat(t[6]),10);if(r>31||r<1)return this.$i18n.t("NationalId_Invalid")}if(t.length>=9){var o="".concat(t[7]).concat(t[8]);if(!this.locations.governates.find(function(t){return t.code===o}))return this.$i18n.t("NationalId_Invalid")}return!!(t.length&&t.length<14)&&this.$i18n.t("NationalId_Incomplete")}},mounted:function(){window.addEventListener("keypress",this.command),this.staffId&&this.processMilitaryId(this.staff.militaryId)},destroyed:function(){window.removeEventListener("keypress",this.command)},asyncData:function(){var t=Object(o.a)(regeneratorRuntime.mark(function t(e){var n,r,path,o;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(n=e.route,r=n.path.substr(n.path.lastIndexOf("/")+1),n.path.includes("edit")){t.next=4;break}return t.abrupt("return",{});case 4:return path="/staffs/data/".concat(r),t.next=7,Object(h.d)(path);case 7:if(!(o=t.sent).error){t.next=11;break}return d.b.fire({icon:"error",title:o.error,timer:4e3,showConfirmButton:!1}),t.abrupt("return",{});case 11:return o.birthDate=m()(o.birthDate).toISOString().substr(0,10),o.joinDate=m()(o.joinDate).toISOString().substr(0,10),o.rankingDate=m()(o.rankingDate).toISOString().substr(0,10),t.abrupt("return",{staffId:r,staff:o,edit:!0});case 15:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},k=n(22),D=n(34),$=n.n(D),S=n(737),w=n(185),C=n(739),M=n(177),R=n(913),j=n(178),N=n(791),O=n(179),E=n(568),V=n(574),component=Object(k.a)(_,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticStyle:{direction:"rtl"},attrs:{"fill-height":"",fluid:"","grid-list-xl":""}},[n("v-layout",{attrs:{"justify-center":"",wrap:""}},[n("v-flex",{attrs:{xs12:"",md12:""}},[n("material-card",{attrs:{dark:"",color:"deep",title:t.edit?t.$t("Edit_Staff"):t.$t("Add_Staff")}},[n("v-form",{ref:"form"},[n("v-container",{attrs:{"py-0":""}},[n("v-layout",{attrs:{wrap:""}},[n("v-flex",{attrs:{xs12:"",md3:""}},[n("v-text-field",{staticClass:"white-input",attrs:{maxlength:t.militaryIdLength,minlength:t.militaryIdLength,label:t.$t("Military_ID"),rules:t.rules.militaryId,"error-messages":t.militaryIdErrorMessages},on:{keypress:t.onlyNumber,input:t.processMilitaryId},model:{value:t.staff.militaryId,callback:function(e){t.$set(t.staff,"militaryId",e)},expression:"staff.militaryId"}})],1),t._v(" "),n("v-flex",{attrs:{xs12:"",md3:""}},[n("v-text-field",{staticClass:"white-input",attrs:{label:t.$t("Name"),rules:t.rules.name},model:{value:t.staff.fullName,callback:function(e){t.$set(t.staff,"fullName",e)},expression:"staff.fullName"}})],1),t._v(" "),n("v-flex",{attrs:{xs12:"",md3:""}},[n("v-text-field",{staticClass:"white-input",attrs:{maxlength:t.nationalIdLength,minLength:t.nationalIdLength,label:t.$t("National_ID"),rules:t.rules.nationalId},model:{value:t.staff.nationalId,callback:function(e){t.$set(t.staff,"nationalId",e)},expression:"staff.nationalId"}})],1),t._v(" "),n("v-flex",{attrs:{xs12:"",md3:""}},[n("v-text-field",{staticClass:"white-input",attrs:{label:t.$t("Individual_ID"),readonly:""},model:{value:t.staff.individualId,callback:function(e){t.$set(t.staff,"individualId",e)},expression:"staff.individualId"}})],1)],1),t._v(" "),n("v-layout",{attrs:{wrap:""}},[n("v-flex",{attrs:{xs12:"",md3:""}},[n("v-text-field",{staticClass:"white-input",attrs:{label:t.$t("Batch_ID")},model:{value:t.staff.batchId,callback:function(e){t.$set(t.staff,"batchId",e)},expression:"staff.batchId"}})],1),t._v(" "),n("v-flex",{attrs:{xs12:"",md3:""}},[n("v-autocomplete",{staticClass:"form-select",attrs:{"no-data-text":t.$t("No_Selections"),items:t.defaults.MEDICAL_SITUATIONS,"item-text":"ar","item-value":"value",label:t.$t("Medical_Situation")},model:{value:t.staff.medicalSituation,callback:function(e){t.$set(t.staff,"medicalSituation",e)},expression:"staff.medicalSituation"}})],1),t._v(" "),n("v-flex",{attrs:{xs12:"",md3:""}},[n("v-autocomplete",{staticClass:"form-select",attrs:{"no-data-text":t.$t("No_Selections"),items:t.defaults.STAFF_RANKS,"item-text":"ar","item-value":"value",label:t.$t("Rank_Only"),rules:t.rules.rank},model:{value:t.staff.rank,callback:function(e){t.$set(t.staff,"rank",e)},expression:"staff.rank"}})],1),t._v(" "),n("v-flex",{attrs:{xs12:"",md3:""}},[n("v-autocomplete",{staticClass:"form-select",attrs:{"no-data-text":t.$t("No_Selections"),items:t.defaults.STAFF_CATEGORIES,"item-text":"ar","item-value":"value",label:t.$t("Category"),disabled:""},model:{value:t.staff.category,callback:function(e){t.$set(t.staff,"category",e)},expression:"staff.category"}})],1)],1),t._v(" "),n("v-layout",{attrs:{wrap:""}},[n("v-flex",{attrs:{xs12:"",md3:""}},[n("v-autocomplete",{staticClass:"form-select",attrs:{"no-data-text":t.$t("No_Selections"),items:t.forces,"item-text":"ar","item-value":"value",label:t.$t("Force"),rules:t.rules.force},model:{value:t.staff.force,callback:function(e){t.$set(t.staff,"force",e)},expression:"staff.force"}})],1),t._v(" "),n("v-flex",{attrs:{xs12:"",md3:""}},[n("v-autocomplete",{staticClass:"form-select",attrs:{"no-data-text":t.$t("No_Selections"),items:t.locations?t.locations.governates:[],label:t.$t("Governate"),"item-text":"ar","item-value":"value",rules:t.rules.governate},model:{value:t.staff.address.governate,callback:function(e){t.$set(t.staff.address,"governate",e)},expression:"staff.address.governate"}})],1),t._v(" "),n("v-flex",{attrs:{xs12:"",md3:""}},[n("v-combobox",{staticClass:"form-select",attrs:{items:t.staff.address.centre&&t.defaults.villages?t.defaults.villages[t.staff.address.centre]:[],label:t.$t("Centre"),rules:t.rules.centre},model:{value:t.staff.address.centre,callback:function(e){t.$set(t.staff.address,"centre",e)},expression:"staff.address.centre"}})],1),t._v(" "),n("v-flex",{attrs:{xs12:"",md3:""}},[n("v-combobox",{attrs:{items:t.staff.address.centre&&t.defaults.villages?t.defaults.villages[t.staff.address.centre]:[],label:t.$t("Village"),rules:t.rules.village},model:{value:t.staff.address.village,callback:function(e){t.$set(t.staff.address,"village",e)},expression:"staff.address.village"}})],1)],1),t._v(" "),n("v-layout",{attrs:{wrap:""}},[n("v-flex",{attrs:{xs12:"",md3:""}},[n("v-text-field",{staticClass:"form-select",attrs:{"no-data-text":t.$t("No_Selections"),label:t.$t("Eductional_Rank")},model:{value:t.staff.education,callback:function(e){t.$set(t.staff,"education",e)},expression:"staff.education"}})],1),t._v(" "),n("v-flex",{attrs:{xs12:"",md3:""}},[n("v-autocomplete",{staticClass:"form-select",attrs:{"no-data-text":t.$t("No_Selections"),items:t.defaults.ARMY_LIST,"item-text":"ar","item-value":"value",label:t.$t("Army"),rules:t.rules.army},on:{change:t.setAll},model:{value:t.staff.army,callback:function(e){t.$set(t.staff,"army",e)},expression:"staff.army"}})],1),t._v(" "),n("v-flex",{attrs:{xs12:"",md3:""}},[n("v-autocomplete",{staticClass:"form-select",attrs:{"no-data-text":t.$t("No_Selections"),"item-text":"name","item-value":"_id",items:t.divisionsComputed,label:t.$t("Division"),disabled:0===t.divisionsComputed.length,clearable:!0},on:{change:t.setUnits},model:{value:t.staff.divisionId,callback:function(e){t.$set(t.staff,"divisionId",e)},expression:"staff.divisionId"}})],1),t._v(" "),n("v-flex",{attrs:{xs12:"",md3:""}},[n("v-autocomplete",{staticClass:"form-select",attrs:{"no-data-text":t.$t("No_Selections"),"item-text":"name","item-value":"_id",items:t.unitsComputed,label:t.$t("Unit"),rules:t.rules.unitId,clearable:!0},on:{change:t.setDivision},model:{value:t.staff.unitId,callback:function(e){t.$set(t.staff,"unitId",e)},expression:"staff.unitId"}})],1)],1),t._v(" "),n("v-layout",{attrs:{wrap:""}},[n("v-flex",{attrs:{xs12:"",md3:""}},[n("v-menu",{attrs:{"close-on-content-click":!1,"nudge-left":50,"nudge-bottom":5,transition:"scale-transition","offset-y":"","min-width":"290px"},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,o=e.attrs;return[n("v-text-field",t._g(t._b({attrs:{label:t.$t("Birth_Date"),"prepend-icon":"event",readonly:""},model:{value:t.staff.birthDate,callback:function(e){t.$set(t.staff,"birthDate",e)},expression:"staff.birthDate"}},"v-text-field",o,!1),r))]}}]),model:{value:t.birthDateModal,callback:function(e){t.birthDateModal=e},expression:"birthDateModal"}},[t._v(" "),n("v-date-picker",{attrs:{"allowed-dates":function(time){return t.moment().diff(t.moment(time),"year")>=19},locale:"ar",dark:""},on:{input:function(e){t.birthDateModal=!1}},model:{value:t.staff.birthDate,callback:function(e){t.$set(t.staff,"birthDate",e)},expression:"staff.birthDate"}})],1)],1),t._v(" "),n("v-flex",{attrs:{xs12:"",md3:""}},[n("v-menu",{attrs:{"close-on-content-click":!1,"nudge-left":50,"nudge-bottom":5,transition:"scale-transition","offset-y":"","min-width":"290px"},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,o=e.attrs;return[n("v-text-field",t._g(t._b({attrs:{label:t.$t("Staff_Join_Date"),"prepend-icon":"event",readonly:""},model:{value:t.staff.joinDate,callback:function(e){t.$set(t.staff,"joinDate",e)},expression:"staff.joinDate"}},"v-text-field",o,!1),r))]}}]),model:{value:t.joinDateModal,callback:function(e){t.joinDateModal=e},expression:"joinDateModal"}},[t._v(" "),n("v-date-picker",{attrs:{"allowed-dates":function(time){return t.moment(time).diff(t.moment())<0},locale:"ar",dark:""},on:{input:function(e){t.joinDateModal=!1}},model:{value:t.staff.joinDate,callback:function(e){t.$set(t.staff,"joinDate",e)},expression:"staff.joinDate"}})],1)],1),t._v(" "),n("v-flex",{attrs:{xs12:"",md3:""}},[n("v-menu",{attrs:{"close-on-content-click":!1,"nudge-left":50,"nudge-bottom":5,transition:"scale-transition","offset-y":"","min-width":"290px"},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,o=e.attrs;return[n("v-text-field",t._g(t._b({attrs:{label:t.$t("Staff_Ranking_Date"),"prepend-icon":"event",readonly:"",rules:t.rules.rankingDate},model:{value:t.staff.rankingDate,callback:function(e){t.$set(t.staff,"rankingDate",e)},expression:"staff.rankingDate"}},"v-text-field",o,!1),r))]}}]),model:{value:t.rankingDateModal,callback:function(e){t.rankingDateModal=e},expression:"rankingDateModal"}},[t._v(" "),n("v-date-picker",{attrs:{"allowed-dates":function(time){return t.moment(time).diff(t.moment())<0},locale:"ar",dark:""},on:{input:function(e){t.rankingDateModal=!1}},model:{value:t.staff.rankingDate,callback:function(e){t.$set(t.staff,"rankingDate",e)},expression:"staff.rankingDate"}})],1)],1),t._v(" "),n("v-flex",{attrs:{xs12:"",md3:""}},[n("v-autocomplete",{staticClass:"form-select",attrs:{"no-data-text":t.$t("No_Selections"),items:t.defaults.BLOOD_TYPES,"item-text":"ar","item-value":"value",label:t.$t("Blood_Type")},model:{value:t.staff.blood,callback:function(e){t.$set(t.staff,"blood",e)},expression:"staff.blood"}})],1)],1),t._v(" "),n("v-layout",{attrs:{wrap:""}},[n("v-flex",{attrs:{xs12:"",md3:""}},[n("v-text-field",{staticClass:"form-select",attrs:{label:t.$t("Phone_Number")},model:{value:t.staff.phoneNumber,callback:function(e){t.$set(t.staff,"phoneNumber",e)},expression:"staff.phoneNumber"}})],1),t._v(" "),n("v-flex",{attrs:{xs12:"",md3:""}},[n("v-autocomplete",{staticClass:"form-select",attrs:{"no-data-text":t.$t("No_Selections"),items:t.defaults.MEDICAL_CARDS,"item-text":"ar","item-value":"value",label:t.$t("Medical_Card"),clearable:""},model:{value:t.staff.medicalCard,callback:function(e){t.$set(t.staff,"medicalCard",e)},expression:"staff.medicalCard"}})],1),t._v(" "),n("v-flex",{attrs:{xs12:"",md3:""}},[n("v-autocomplete",{staticClass:"form-select",attrs:{"no-data-text":t.$t("No_Selections"),items:t.defaults.RELIGIONS,"item-text":"ar","item-value":"value",label:t.$t("Religion")},model:{value:t.staff.religion,callback:function(e){t.$set(t.staff,"religion",e)},expression:"staff.religion"}})],1),t._v(" "),n("v-flex",{attrs:{xs12:"",md3:""}},[n("v-text-field",{staticClass:"form-select",attrs:{label:t.$t("Weight")},model:{value:t.staff.weight,callback:function(e){t.$set(t.staff,"weight",e)},expression:"staff.weight"}})],1)],1),t._v(" "),n("v-layout",{attrs:{wrap:""}},[n("v-flex",{attrs:{xs12:"",md3:""}},[n("v-text-field",{staticClass:"form-select",attrs:{label:t.$t("Height")},model:{value:t.staff.height,callback:function(e){t.$set(t.staff,"height",e)},expression:"staff.height"}})],1)],1),t._v(" "),n("v-layout",{attrs:{wrap:""}},[n("v-flex",{attrs:{md6:"","text-xs-right":""}},[n("v-btn",{staticClass:"font-weight-light add-button v-btn-add",on:{click:t.submit}},[t._v("\n                  "+t._s(t.edit?t.$t("Edit"):t.$t("Add"))+"\n                ")])],1),t._v(" "),t.edit?t._e():n("v-flex",{attrs:{md6:"","text-xs-right":""}},[n("v-btn",{staticClass:"font-weight-light add-button v-btn-youtube",attrs:{color:"yellow"},on:{click:t.reset}},[t._v("\n                  "+t._s(t.$t("RESET"))+"\n                ")])],1)],1)],1)],1)],1)],1)],1)],1)},[],!1,null,null,null);e.default=component.exports;$()(component,{VAutocomplete:S.a,VBtn:w.a,VCombobox:C.a,VContainer:M.a,VDatePicker:R.a,VFlex:j.a,VForm:N.a,VLayout:O.a,VMenu:E.a,VTextField:V.a})}}]);