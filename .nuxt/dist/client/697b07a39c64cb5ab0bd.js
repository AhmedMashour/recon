(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{576:function(t,e,n){var content=n(581);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(6).default)("f7e6f252",content,!0,{sourceMap:!1})},577:function(t,e,n){var content=n(583);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(6).default)("e6ed15ac",content,!0,{sourceMap:!1})},578:function(t,e,n){"use strict";n(16);var r={props:{fullWidth:{type:Boolean,default:!1},offset:{type:[Number,String],default:0}},computed:{classes:function(){return{"v-offset--full-width":this.fullWidth}},styles:function(){return{top:"-".concat(this.offset,"px"),marginBottom:"-".concat(this.offset,"px")}}}},o=(n(580),n(22)),l={inheritAttrs:!1,components:{helperOffset:Object(o.a)(r,function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"v-offset",class:this.classes,style:this.styles},[this._t("default")],2)},[],!1,null,null,null).exports},props:{color:{type:String,default:"secondary"},elevation:{type:[Number,String],default:10},inline:{type:Boolean,default:!1},fullWidth:{type:Boolean,default:!1},offset:{type:[Number,String],default:24},title:{type:String,default:void 0},text:{type:String,default:void 0},headerAction:{type:String,default:void 0}},methods:{close:function(){this.$emit("close")}},computed:{hasOffset:function(){return this.$slots.header||this.$slots.offset||this.title||this.text},styles:function(){return this.hasOffset?{marginBottom:"".concat(this.offset,"px"),marginTop:"".concat(2*this.offset,"px")}:null}}},c=(n(582),n(34)),d=n.n(c),f=n(562),h=n(736),v=n(564),m=n(185),x=Object(o.a)(l,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",t._g(t._b({style:t.styles},"v-card",t.$attrs,!1),t.$listeners),[t.hasOffset?n("helper-offset",{attrs:{inline:t.inline,"full-width":t.fullWidth,offset:t.offset}},[t.$slots.offset?t._t("offset"):n("v-card",{staticClass:"v-card--material__header",class:"elevation-"+t.elevation,attrs:{color:t.color,dark:""}},[t.headerAction&&"close"===t.headerAction?n("v-icon",{staticClass:"mr-2 close",attrs:{small:""},on:{click:t.close}},[t._v("\n        mdi-close\n      ")]):t._e(),t._v(" "),t.title||t.text?n("span",[n("h4",{staticClass:"title font-weight-light mb-2",domProps:{textContent:t._s(t.title)}}),t._v(" "),n("p",{staticClass:"category font-weight-thin",domProps:{textContent:t._s(t.text)}})]):t._t("header")],2)],2):t._e(),t._v(" "),n("v-card-text",[t._t("default")],2),t._v(" "),t.$slots.actions?n("v-divider",{staticClass:"mx-3"}):t._e(),t._v(" "),t.$slots.actions?n("v-card-actions",[t._t("actions")],2):t._e()],1)},[],!1,null,null,null);e.a=x.exports;d()(x,{VCard:f.a,VCardActions:h.a,VCardText:h.b,VDivider:v.a,VIcon:m.a})},580:function(t,e,n){"use strict";var r=n(576);n.n(r).a},581:function(t,e,n){(t.exports=n(5)(!1)).push([t.i,".v-offset{margin:0 auto;position:relative}.v-offset--full-width{max-width:100%}.add-button{margin-right:39%;margin-left:50%;width:130px;height:30px;border-radius:25px!important}",""])},582:function(t,e,n){"use strict";var r=n(577);n.n(r).a},583:function(t,e,n){(t.exports=n(5)(!1)).push([t.i,".v-card--material__header.v-card{border-radius:4px}",""])},718:function(t,e,n){"use strict";var r=n(0);e.a=r.a.extend({name:"v-card-title",functional:!0,props:{primaryTitle:Boolean},render:function(t,e){var data=e.data,n=e.props,r=e.children;return data.staticClass=("v-card__title "+(data.staticClass||"")).trim(),n.primaryTitle&&(data.staticClass+=" v-card__title--primary"),t("div",data,r)}})},736:function(t,e,n){"use strict";var r=n(1),o=n(562),l=n(563),c=n(14),d=l.a.extend({name:"v-card-media",mounted:function(){Object(c.d)("v-card-media",this.src?"v-img":"v-responsive",this)}}),f=n(718);n.d(e,"a",function(){return h}),n.d(e,"b",function(){return v});var h=Object(r.f)("v-card__actions"),v=Object(r.f)("v-card__text");o.a,f.a},755:function(t,e,n){var content=n(809);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(6).default)("29ee278c",content,!0,{sourceMap:!1})},808:function(t,e,n){"use strict";var r=n(755);n.n(r).a},809:function(t,e,n){(t.exports=n(5)(!1)).push([t.i,".tim-note{bottom:10px;color:#c0c1c2;display:block;font-weight:400;font-size:13px;line-height:13px;left:0;margin-left:20px;width:260px}",""])},827:function(t,e,n){"use strict";n.r(e);var r=n(578),o="I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at.",l=o.slice(0,105)+"...",c="The Life of Material Dashboard",d={layout:"dashboard",components:{materialCard:r.a},data:function(){return{typography:{"heading-1":["Header 1",c,"h1"],"heading-2":["Header 2",c,"h2"],"heading-3":["Header 3",c,"h3"],"heading-4":["Header 4",c,"h4"],"heading-5":["Header 5",c,"h5"],"heading-6 text-uppercase":["Header 6",c,"h6"],"":["Paragraph",o,"p"],quote:["Quote",o,"blockquote"],"text--disabled":["Muted Text",l,"p"],"text-primary":["Primary Text",l,"p"],"text-info":["Info Text",l,"p"],"text-success":["Success Text",l,"p"],"text-warning":["Warning Text",l,"p"],"text-danger":["Danger Text",l,"p"],small:["Small Tag","Header with small subtitle","h2"]}}}},f=(n(808),n(22)),h=n(34),v=n.n(h),m=n(736),x=n(176),_=n(177),y=n(178),component=Object(f.a)(d,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{attrs:{"fill-height":"",fluid:""}},[n("v-layout",{attrs:{"justify-center":"","align-center":""}},[n("v-flex",{attrs:{xs12:""}},[n("material-card",{attrs:{color:"green",title:"Material Dashboard Heading",text:"Created using Roboto Font Family"}},[n("v-card-text",[n("h2",{staticClass:"font-weight-light mb-4"},[t._v("Typography")]),t._v(" "),n("v-container",{staticClass:"pa-0",attrs:{"grid-list-xl":"",fluid:""}},t._l(t.typography,function(e,i){return n("v-layout",{key:i,attrs:{"align-end":"",wrap:""}},[n("v-flex",{attrs:{xs1:"",md3:""}},[n("span",{staticClass:"tim-note",domProps:{textContent:t._s(e[0])}})]),t._v(" "),n("v-flex",{attrs:{xs8:""}},[n(e[2],{tag:"component",class:i},["quote"!==i?[t._v("\n                    "+t._s(e[1])+"\n                  ")]:t._e(),t._v(" "),"quote"===i?n("p",[t._v(t._s(e[1]))]):t._e(),t._v(" "),"quote"===i?n("small",[t._v("Kanye West, Musician")]):t._e(),t._v(" "),"small"===i?[n("br"),t._v(" "),n("small",[t._v("Use 'small' tag for the headers")])]:t._e()],2)],1)],1)}),1)],1)],1)],1)],1)],1)},[],!1,null,null,null);e.default=component.exports;v()(component,{VCardText:m.b,VContainer:x.a,VFlex:_.a,VLayout:y.a})}}]);