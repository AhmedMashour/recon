exports.ids=[25],exports.modules={357:function(e,t,r){"use strict";r.r(t);var n=r(11),o=r(14),l={middleware({beforeNuxtRender:e,nuxtState:t}){e(({nuxtState:e})=>{e.reconToken=void 0,e.user=void 0,e.permissions=void 0})},created(){this.logout({nuxtState:this.$})},methods:{...Object(n.mapActions)({setUser:"localStorage/setUser"}),async logout(){await Object(o.c)("users/logout");await this.setUser({username:null,fullName:null,permissions:[],branch:null,rank:null}),this.$router.push({path:"/login"})}}},c=r(10),component=Object(c.a)(l,function(){var e=this.$createElement;return(this._self._c||e)("div")},[],!1,null,null,"62abd331");t.default=component.exports}};
//# sourceMappingURL=2cfeda05f5f6c2b65bee.js.map