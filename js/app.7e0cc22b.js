(function(t){function e(e){for(var s,o,i=e[0],c=e[1],u=e[2],l=0,f=[];l<i.length;l++)o=i[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&f.push(a[o][0]),a[o]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);d&&d(e);while(f.length)f.shift()();return n.push.apply(n,u||[]),r()}function r(){for(var t,e=0;e<n.length;e++){for(var r=n[e],s=!0,i=1;i<r.length;i++){var c=r[i];0!==a[c]&&(s=!1)}s&&(n.splice(e--,1),t=o(o.s=r[0]))}return t}var s={},a={app:0},n=[];function o(e){if(s[e])return s[e].exports;var r=s[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=t,o.c=s,o.d=function(t,e,r){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)o.d(r,s,function(e){return t[e]}.bind(null,s));return r},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/tour-front/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var u=0;u<i.length;u++)e(i[u]);var d=c;n.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("cd49")},"08eb":function(t,e,r){"use strict";var s=r("6da4"),a=r.n(s);a.a},4678:function(t,e,r){var s={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-SG":"cdab","./en-SG.js":"cdab","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function a(t){var e=n(t);return r(e)}function n(t){if(!r.o(s,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return s[t]}a.keys=function(){return Object.keys(s)},a.resolve=n,t.exports=a,a.id="4678"},"5c0b":function(t,e,r){"use strict";var s=r("9c0c"),a=r.n(s);a.a},"67bf":function(t,e,r){"use strict";var s=r("bcee"),a=r.n(s);a.a},"698d":function(t,e,r){"use strict";var s=r("cbb4"),a=r.n(s);a.a},"6da4":function(t,e,r){},"7da5":function(t,e,r){"use strict";var s=r("a537"),a=r.n(s);a.a},8567:function(t,e,r){"use strict";var s=r("ef32"),a=r.n(s);a.a},"98c6":function(t,e,r){},"9c0c":function(t,e,r){},a537:function(t,e,r){},a807:function(t,e,r){},ac0f:function(t,e,r){"use strict";var s=r("a807"),a=r.n(s);a.a},bcee:function(t,e,r){},cbb4:function(t,e,r){},cd49:function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var s=r("2b0e"),a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("router-view")],1)},n=[],o=s["a"].extend({name:"app",components:{}}),i=o,c=(r("5c0b"),r("2877")),u=Object(c["a"])(i,a,n,!1,null,null,null),d=u.exports,l=r("8c4f"),f=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"home"},[r("h1",[t._v("List of tours")]),t.error.status?r("span",[t._v(t._s(t.error.msg))]):t._e(),t.error.empty||!t.error.status?r("router-link",{staticClass:"add-card",attrs:{to:"/create/tour"}},[t._v("Add a new tour")]):t._e(),t._l(t.tours,(function(t,e){return r("Card",{key:e,attrs:{title:t.name,img:t.image,id:t.id}})}))],2)},m=[],p=(r("26e9"),function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("router-link",{staticClass:"tour-card",attrs:{to:void 0!=t.id?"/tour/"+t.id:""}},[r("img",{attrs:{src:t.img,alt:"Tour image"}}),r("h3",[t._v(t._s(t.title))])])}),h=[],b=(r("a9e3"),s["a"].extend({name:"tour-card",props:{id:Number,img:String,title:String}})),j=b,g=(r("67bf"),Object(c["a"])(j,p,h,!1,null,"6b7c7fda",null)),v=g.exports,_={name:"home",data:function(){return{tours:[],error:{status:!1,empty:!1,msg:""}}},components:{Card:v},methods:{getTours:function(){var t=this;this.error.status=!1,this.$axios.get(this.$url).then((function(e){t.tours=e.data.reverse(),0===e.data.length&&(t.error.status=!0,t.error.empty=!0,t.error.msg="There are no tours to show")})).catch((function(e){t.error.status=!0,t.error.empty=!1,t.error.msg="Something wrong happend..."}))}},created:function(){this.getTours()}},y=_,w=(r("7da5"),Object(c["a"])(y,f,m,!1,null,"46b14a8f",null)),k=w.exports,x=function(){var t=this,e=this,r=e.$createElement,s=e._self._c||r;return s("div",{staticClass:"d-flex justify-between",attrs:{id:"tour-page"}},[e.modal?s("Modal",{on:{remove:e.removeTour,hide:function(){return t.modal=!1}}}):e._e(),s("h1",{staticClass:"main-item"},[e._v(e._s(e.tour.name))]),s("div",{staticClass:"aside-item"},[e.tour.image?s("img",{attrs:{src:e.tour.image,alt:"Tour image"}}):e._e()]),s("div",{staticClass:"box main-item description"},[s("span",{staticClass:"title d-block"},[e._v("Description")]),e.tour.description?s("p",[e._v(e._s(e.tour.description))]):e._e()]),s("div",{staticClass:"box aside-item info"},[s("span",{staticClass:"title d-block"},[e._v("Info")]),s("span",{staticClass:"d-flex justify-between"},[e._v("Created: "),e.tour.createdAt?s("span",[e._v(e._s(e.dateToString(e.tour.createdAt)))]):e._e()]),s("span",{staticClass:"d-flex justify-between"},[e._v("Modified: "),e.tour.lastModified?s("span",[e._v(e._s(e.dateToString(e.tour.lastModified)))]):e._e()])]),s("div",{staticClass:"d-flex flex-column",attrs:{id:"btn-actions-container"}},[s("router-link",{attrs:{to:"/edit/"+e.id}},[e._v("Edit tour")]),s("button",{attrs:{id:"remove"},on:{click:function(){return t.modal=!0}}},[e._v("Remove tour")])],1)],1)},$=[],T=(r("99af"),r("fb6a"),r("0d03"),r("ac1f"),r("5319"),r("1276"),r("c1df")),O=r.n(T),z=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"remove-modal-container"}},[r("div",{attrs:{id:"remove-modal"}},[r("span",{attrs:{id:"modal-title"}},[t._v("Do you want to delete this tour?")]),r("div",{attrs:{id:"responses"}},[r("span",{on:{click:function(e){return t.$emit("hide")}}},[t._v("No")]),r("span",{on:{click:function(e){return t.$emit("remove")}}},[t._v("Yes")])])])])},C=[],S=(r("ac0f"),{}),E=Object(c["a"])(S,z,C,!1,null,"170b908c",null),M=E.exports,q={name:"tour-page",data:function(){return{tour:"",id:"",modal:!1}},methods:{getTour:function(){var t=this;this.$axios.get("".concat(this.$url,"/").concat(this.id)).then((function(e){return t.tour=e.data})).catch((function(){return t.$router.replace("/")}))},removeTour:function(){var t=this;this.$axios.delete("".concat(this.$url,"/").concat(this.id)).then((function(){return t.$router.replace("/")}))},dateToString:function(t){var e=new Date(t);return O()(e,"YYYYMMDD").fromNow()}},created:function(){this.id=window.location.hash.split("/").slice(-1)[0],this.getTour()},components:{Modal:M}},N=q,D=(r("08eb"),Object(c["a"])(N,x,$,!1,null,"0271e7de",null)),F=D.exports,P=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"create-tour"}},[r("h1",[t._v("Create a new tour")]),t.error.status?r("span",{attrs:{id:"error"}},[t._v(t._s(t.error.msg))]):t._e(),r("Form",{attrs:{tour:t.tour,btnName:"Create"},on:{create:t.createTour}})],1)},R=[],I=(r("a4d3"),r("e01a"),r("b0c0"),r("96cf"),r("89ba")),L=function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.tour?r("div",{attrs:{id:"form-container"}},[r("div",{staticClass:"form-section"},[r("label",{attrs:{for:"title"}},[t._v("Title*")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.tour.name,expression:"tour.name"}],attrs:{type:"text",id:"title",placeholder:"Title of the tour",required:""},domProps:{value:t.tour.name},on:{input:function(e){e.target.composing||t.$set(t.tour,"name",e.target.value)}}})]),r("div",{staticClass:"form-section"},[r("label",{attrs:{for:"image"}},[t._v("Image")]),r("input",{ref:"file",attrs:{type:"file",id:"image"},on:{change:t.changeFile}})]),r("div",{staticClass:"form-section"},[r("label",{attrs:{for:"description"}},[t._v("Description*")]),r("textarea",{directives:[{name:"model",rawName:"v-model",value:t.tour.description,expression:"tour.description"}],attrs:{rows:"10",id:"description",placeholder:"Description of the tour",required:""},domProps:{value:t.tour.description},on:{input:function(e){e.target.composing||t.$set(t.tour,"description",e.target.value)}}})]),r("button",{on:{click:t.emitEvent}},[t._v(t._s(t.btnName))])]):t._e()},Y=[],X={name:"tour-form",props:{btnName:String,tour:{name:String,description:String}},data:function(){return{image:""}},methods:{changeFile:function(){this.image=this.$refs.file.files[0]},emitEvent:function(){this.$emit(this.btnName.toLowerCase(),this.image)}}},A=X,G=(r("8567"),Object(c["a"])(A,L,Y,!1,null,"101f6a78",null)),H=G.exports,J={data:function(){return{tour:{name:"",image:"",description:""},error:{status:!1,msg:""}}},methods:{uploadImg:function(t){var e=this,r=new FormData;return r.append("upload_preset","qzlyjodo"),r.append("tags","browser_upload"),r.append("file",t),this.$axios.post("https://api.cloudinary.com/v1_1/df9pnnowd/upload",r,{headers:{"X-Requested-With":"XMLHttpRequest"}}).then((function(t){return e.tour.image=t.data.secure_url})).catch((function(){e.error.status=!0,e.error.msg="Something wrong happend. Try it again."}))},createTour:function(){var t=Object(I["a"])(regeneratorRuntime.mark((function t(e){var r=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.error.status=!1,t.next=3,this.uploadImg(e);case 3:this.tour.name&&this.tour.description&&this.tour.image?this.$axios.post(this.$url,this.tour).then((function(t){return r.$router.replace("/")})).catch((function(){r.error.status=!0,r.error.msg="Something wrong happend. Try it again."})):(this.error.status=!0,this.error.msg="Title, image and description required");case 4:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}()},components:{Form:H}},U=J,W=(r("e653"),Object(c["a"])(U,P,R,!1,null,"8489a004",null)),B=W.exports,K=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"edit-tour"}},[r("h1",[t._v("Edit tour")]),t.message.status?r("span",{style:t.message.res?"color: #2dad2b;":"",attrs:{id:"message"}},[t._v(t._s(t.message.msg))]):t._e(),r("Form",{attrs:{tour:t.tour,btnName:"Edit"},on:{edit:t.editTour}})],1)},Q=[],V={data:function(){return{tour:{},message:{status:!1,res:!1,msg:""}}},methods:{uploadImg:function(t){var e=this,r=new FormData;return r.append("upload_preset","qzlyjodo"),r.append("tags","browser_upload"),r.append("file",t),this.$axios.post("https://api.cloudinary.com/v1_1/df9pnnowd/upload",r,{headers:{"X-Requested-With":"XMLHttpRequest"}}).then((function(t){return e.tour.image=t.data.secure_url})).catch((function(){e.error.status=!0,e.message.res=!1,e.error.msg="Something wrong happend. Try it again."}))},editTour:function(){var t=Object(I["a"])(regeneratorRuntime.mark((function t(e){var r=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.message.status=!1,t.next=3,this.uploadImg(e);case 3:this.tour.name&&this.tour.description&&this.tour.image?this.$axios.put("".concat(this.$url,"/").concat(this.tour.id),this.tour).then((function(t){r.message.status=!0,r.message.msg="Saved correctly",r.message.res=!0})).catch((function(){r.message.status=!0,r.message.res=!1,r.message.msg="Something wrong happend. Try it again."})):(this.message.status=!0,this.message.res=!1,this.message.msg="Title, image and description required");case 4:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}()},created:function(){var t=this,e=window.location.hash.split("/").slice(-1)[0];this.$axios.get("".concat(this.$url,"/").concat(e)).then((function(e){return t.tour=e.data})).catch((function(){return t.$router.go(-1)}))},components:{Form:H}},Z=V,tt=(r("698d"),Object(c["a"])(Z,K,Q,!1,null,"2576a798",null)),et=tt.exports;s["a"].use(l["a"]);var rt=[{path:"/",name:"home",component:k},{path:"/tour/:id",name:"tour",component:F},{path:"/create/tour",name:"addtour",component:B},{path:"/edit/:id",name:"editTour",component:et}],st=new l["a"]({routes:rt}),at=st,nt=r("bc3a"),ot=r.n(nt);s["a"].prototype.$axios=ot.a,s["a"].prototype.$url="https://localhost:5001/Tours",s["a"].config.productionTip=!1,new s["a"]({router:at,render:function(t){return t(d)}}).$mount("#app")},e653:function(t,e,r){"use strict";var s=r("98c6"),a=r.n(s);a.a},ef32:function(t,e,r){}});
//# sourceMappingURL=app.7e0cc22b.js.map