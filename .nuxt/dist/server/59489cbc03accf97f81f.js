exports.ids=[44],exports.modules={265:function(t,e,r){var content=r(279);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);var n=r(5).default;t.exports.__inject__=function(t){n("f7e6f252",content,!0,t)}},266:function(t,e,r){var content=r(281);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);var n=r(5).default;t.exports.__inject__=function(t){n("e6ed15ac",content,!0,t)}},269:function(t,e,r){"use strict";var n=r(0),o=r.n(n);e.a=o.a.extend({name:"v-card-title",functional:!0,props:{primaryTitle:Boolean},render:function(t,e){var data=e.data,r=e.props,n=e.children;return data.staticClass=("v-card__title "+(data.staticClass||"")).trim(),r.primaryTitle&&(data.staticClass+=" v-card__title--primary"),t("div",data,n)}})},270:function(t,e,r){"use strict";var n={props:{fullWidth:{type:Boolean,default:!1},offset:{type:[Number,String],default:0}},computed:{classes(){return{"v-offset--full-width":this.fullWidth}},styles(){return{top:`-${this.offset}px`,marginBottom:`-${this.offset}px`}}}},o=r(10);var l={inheritAttrs:!1,components:{helperOffset:Object(o.a)(n,function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"v-offset",class:this.classes,style:this.styles},[this._t("default")],2)},[],!1,function(t){var e=r(278);e.__inject__&&e.__inject__(t)},null,"2cf0020d").exports},props:{color:{type:String,default:"secondary"},elevation:{type:[Number,String],default:10},inline:{type:Boolean,default:!1},fullWidth:{type:Boolean,default:!1},offset:{type:[Number,String],default:24},title:{type:String,default:void 0},text:{type:String,default:void 0},headerAction:{type:String,default:void 0}},methods:{close(){this.$emit("close")}},computed:{hasOffset(){return this.$slots.header||this.$slots.offset||this.title||this.text},styles(){return this.hasOffset?{marginBottom:`${this.offset}px`,marginTop:`${2*this.offset}px`}:null}}},c=r(12),d=r.n(c),f=r(249),h=r(309),_=r(250),v=r(72);var m=Object(o.a)(l,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",t._g(t._b({style:t.styles},"v-card",t.$attrs,!1),t.$listeners),[t.hasOffset?r("helper-offset",{attrs:{inline:t.inline,"full-width":t.fullWidth,offset:t.offset}},[t.$slots.offset?t._t("offset"):r("v-card",{staticClass:"v-card--material__header",class:"elevation-"+t.elevation,attrs:{color:t.color,dark:""}},[t.headerAction&&"close"===t.headerAction?r("v-icon",{staticClass:"mr-2 close",attrs:{small:""},on:{click:t.close}},[t._v("\n        mdi-close\n      ")]):t._e(),t._v(" "),t.title||t.text?r("span",[r("h4",{staticClass:"title font-weight-light mb-2",domProps:{textContent:t._s(t.title)}}),t._v(" "),r("p",{staticClass:"category font-weight-thin",domProps:{textContent:t._s(t.text)}})]):t._t("header")],2)],2):t._e(),t._v(" "),r("v-card-text",[t._t("default")],2),t._v(" "),t.$slots.actions?r("v-divider",{staticClass:"mx-3"}):t._e(),t._v(" "),t.$slots.actions?r("v-card-actions",[t._t("actions")],2):t._e()],1)},[],!1,function(t){var e=r(280);e.__inject__&&e.__inject__(t)},null,"70552ac3");e.a=m.exports;d()(m,{VCard:f.a,VCardActions:h.a,VCardText:h.b,VDivider:_.a,VIcon:v.a})},278:function(t,e,r){"use strict";r.r(e);var n=r(265),o=r.n(n);for(var l in n)"default"!==l&&function(t){r.d(e,t,function(){return n[t]})}(l);e.default=o.a},279:function(t,e,r){(t.exports=r(4)(!1)).push([t.i,".v-offset{margin:0 auto;position:relative}.v-offset--full-width{max-width:100%}.add-button{margin-right:39%;margin-left:50%;width:130px;height:30px;border-radius:25px!important}",""])},280:function(t,e,r){"use strict";r.r(e);var n=r(266),o=r.n(n);for(var l in n)"default"!==l&&function(t){r.d(e,t,function(){return n[t]})}(l);e.default=o.a},281:function(t,e,r){(t.exports=r(4)(!1)).push([t.i,".v-card--material__header.v-card{border-radius:4px}",""])},309:function(t,e,r){"use strict";var n=r(1),o=r(249),l=r(252),c=r(8),d=l.a.extend({name:"v-card-media",mounted:function(){Object(c.d)("v-card-media",this.src?"v-img":"v-responsive",this)}}),f=r(269);r.d(e,"a",function(){return h}),r.d(e,"b",function(){return _});var h=Object(n.f)("v-card__actions"),_=Object(n.f)("v-card__text");o.a,f.a},347:function(t,e,r){var content=r(372);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);var n=r(5).default;t.exports.__inject__=function(t){n("29ee278c",content,!0,t)}},371:function(t,e,r){"use strict";r.r(e);var n=r(347),o=r.n(n);for(var l in n)"default"!==l&&function(t){r.d(e,t,function(){return n[t]})}(l);e.default=o.a},372:function(t,e,r){(t.exports=r(4)(!1)).push([t.i,".tim-note{bottom:10px;color:#c0c1c2;display:block;font-weight:400;font-size:13px;line-height:13px;left:0;margin-left:20px;width:260px}",""])},389:function(t,e,r){"use strict";r.r(e);var n=r(270);const o="I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at.",l=o.slice(0,105)+"...",c="The Life of Material Dashboard";var d={layout:"dashboard",middleware:["auth"],components:{materialCard:n.a},data:()=>({typography:{"heading-1":["Header 1",c,"h1"],"heading-2":["Header 2",c,"h2"],"heading-3":["Header 3",c,"h3"],"heading-4":["Header 4",c,"h4"],"heading-5":["Header 5",c,"h5"],"heading-6 text-uppercase":["Header 6",c,"h6"],"":["Paragraph",o,"p"],quote:["Quote",o,"blockquote"],"text--disabled":["Muted Text",l,"p"],"text-primary":["Primary Text",l,"p"],"text-info":["Info Text",l,"p"],"text-success":["Success Text",l,"p"],"text-warning":["Warning Text",l,"p"],"text-danger":["Danger Text",l,"p"],small:["Small Tag","Header with small subtitle","h2"]}})},f=r(10),h=r(12),_=r.n(h),v=r(309),m=r(63),x=r(64),y=r(65);var component=Object(f.a)(d,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",{attrs:{"fill-height":"",fluid:""}},[r("v-layout",{attrs:{"justify-center":"","align-center":""}},[r("v-flex",{attrs:{xs12:""}},[r("material-card",{attrs:{color:"green",title:"Material Dashboard Heading",text:"Created using Roboto Font Family"}},[r("v-card-text",[r("h2",{staticClass:"font-weight-light mb-4"},[t._v("Typography")]),t._v(" "),r("v-container",{staticClass:"pa-0",attrs:{"grid-list-xl":"",fluid:""}},t._l(t.typography,function(e,i){return r("v-layout",{key:i,attrs:{"align-end":"",wrap:""}},[r("v-flex",{attrs:{xs1:"",md3:""}},[r("span",{staticClass:"tim-note",domProps:{textContent:t._s(e[0])}})]),t._v(" "),r("v-flex",{attrs:{xs8:""}},[r(e[2],{tag:"component",class:i},["quote"!==i?[t._v("\n                    "+t._s(e[1])+"\n                  ")]:t._e(),t._v(" "),"quote"===i?r("p",[t._v(t._s(e[1]))]):t._e(),t._v(" "),"quote"===i?r("small",[t._v("Kanye West, Musician")]):t._e(),t._v(" "),"small"===i?[r("br"),t._v(" "),r("small",[t._v("Use 'small' tag for the headers")])]:t._e()],2)],1)],1)}),1)],1)],1)],1)],1)],1)},[],!1,function(t){var e=r(371);e.__inject__&&e.__inject__(t)},null,"357338d6");e.default=component.exports;_()(component,{VCardText:v.b,VContainer:m.a,VFlex:x.a,VLayout:y.a})}};
//# sourceMappingURL=59489cbc03accf97f81f.js.map