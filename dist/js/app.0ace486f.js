(function(e){function t(t){for(var r,i,a=t[0],s=t[1],u=t[2],d=0,b=[];d<a.length;d++)i=a[d],Object.prototype.hasOwnProperty.call(c,i)&&c[i]&&b.push(c[i][0]),c[i]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);l&&l(t);while(b.length)b.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,a=1;a<n.length;a++){var s=n[a];0!==c[s]&&(r=!1)}r&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},c={app:0},o=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/supabase-geodb/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],s=a.push.bind(a);a.push=t,a=a.slice();for(var u=0;u<a.length;u++)t(a[u]);var l=s;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0e39":function(e,t,n){"use strict";n("edbf")},"17e0":function(e,t,n){"use strict";n("5557")},2387:function(e,t,n){"use strict";n("fe30")},"40d7":function(e,t,n){},5557:function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),c={class:"container mt-3 bg-white rounded h-75 overflow-auto pt-4"},o={key:0},i={class:"text-center border-bottom mt-2"};function a(e,t,n,a,s,u){var l=Object(r["o"])("TitleBar"),d=Object(r["o"])("UserDashboard"),b=Object(r["o"])("Home"),f=Object(r["o"])("Auth");return Object(r["i"])(),Object(r["e"])(r["a"],null,[Object(r["h"])(l),Object(r["f"])("div",c,[s.showLogin?(Object(r["i"])(),Object(r["c"])(f,{key:1})):(Object(r["i"])(),Object(r["e"])("div",o,[a.store.user?(Object(r["i"])(),Object(r["c"])(d,{key:0})):(Object(r["i"])(),Object(r["c"])(b,{key:1}))]))]),Object(r["f"])("p",i,[a.store.user||s.showLogin?Object(r["d"])("",!0):(Object(r["i"])(),Object(r["e"])("button",{key:0,class:"btn btn-secondary m-2 float-right",onClick:t[0]||(t[0]=function(){return u.showLoginFunc&&u.showLoginFunc.apply(u,arguments)})}," Login to Add/Manage listing ")),a.store.user?(Object(r["i"])(),Object(r["e"])("button",{key:1,class:"btn btn-danger m-2 float-right",onClick:t[1]||(t[1]=function(){return u.signOut&&u.signOut.apply(u,arguments)})}," Sign out ")):Object(r["d"])("",!0),s.showLogin?(Object(r["i"])(),Object(r["e"])("button",{key:2,class:"btn btn-secondary m-2 float-right",onClick:t[2]||(t[2]=function(e){return s.showLogin=!s.showLogin})}," Home ")):Object(r["d"])("",!0)])],64)}var s=n("1da1"),u=(n("96cf"),function(e){return Object(r["k"])("data-v-132cc341"),e=e(),Object(r["j"])(),e}),l={class:"title"},d=u((function(){return Object(r["f"])("h1",{class:"mx-2"},"Supabase GeoDB",-1)})),b=[d];function f(e,t,n,c,o,i){return Object(r["i"])(),Object(r["e"])("div",l,b)}var O={name:"TitleBar",props:{msg:String}},j=(n("2387"),n("6b0d")),g=n.n(j);const p=g()(O,[["render",f],["__scopeId","data-v-132cc341"]]);var h=p,m=Object(r["l"])({user:{}}),v=n("940b"),y={},w=Object(v["a"])("https://rhsugtnhvfojipiyrizv.supabase.co","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYyOTg3MjU0NCwiZXhwIjoxOTQ1NDQ4NTQ0fQ.dCZFzVF9B4CUIkXNPsdXHKDGr9YoT1EOXlxG7yyQaJg",y),k={class:"row justify-content-md-center"},L={class:"col-sm-6 px-3 border-end"},x={class:"col-sm-6 px-5"};function _(e,t,n,c,o,i){var a=Object(r["o"])("GetUserListings"),s=Object(r["o"])("PostLocation");return Object(r["i"])(),Object(r["e"])("div",k,[Object(r["f"])("div",L,[Object(r["h"])(a)]),Object(r["f"])("div",x,[Object(r["h"])(s)])])}n("b0c0"),n("a4d3"),n("e01a");var C=function(e){return Object(r["k"])("data-v-45a5e16c"),e=e(),Object(r["j"])(),e},I={key:0,class:"alert alert-success"},A={key:1,class:"alert alert-warning"},P={class:""},S=C((function(){return Object(r["f"])("h3",{class:"text-dark mb-3"},"Post Listing",-1)})),U={class:"text-end"};function R(e,t,n,c,o,i){return Object(r["i"])(),Object(r["e"])(r["a"],null,[o.successAlert?(Object(r["i"])(),Object(r["e"])("p",I," Added Listing successfully ! ")):Object(r["d"])("",!0),o.errorAlert?(Object(r["i"])(),Object(r["e"])("p",A," Error Adding Listing ! Please try again. ")):Object(r["d"])("",!0),Object(r["f"])("div",P,[S,Object(r["r"])(Object(r["f"])("input",{class:"form-control my-3","onUpdate:modelValue":t[0]||(t[0]=function(e){return o.name=e}),placeholder:"Enter name"},null,512),[[r["q"],o.name]]),Object(r["r"])(Object(r["f"])("input",{class:"form-control my-3","onUpdate:modelValue":t[1]||(t[1]=function(e){return o.loc_string=e}),placeholder:"Paste google maps url"},null,512),[[r["q"],o.loc_string]]),Object(r["r"])(Object(r["f"])("textarea",{class:"form-control my-3","onUpdate:modelValue":t[2]||(t[2]=function(e){return o.description=e}),placeholder:"Description",rows:"5"},"\n    ",512),[[r["q"],o.description]]),Object(r["f"])("div",U,[Object(r["f"])("button",{class:"btn action-btn m-2 float-right",onClick:t[3]||(t[3]=function(){return i.postListing&&i.postListing.apply(i,arguments)})}," Add Listing ")])])],64)}n("ac1f"),n("466d"),n("4de4"),n("caad"),n("2532");var B={name:"PostLocation",data:function(){return{name:"",loc_string:"",description:"",successAlert:!1,errorAlert:!1}},methods:{postListing:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var n,r,c,o,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.getLatLong(e.loc_string),r=new Date,c={name:e.name,location:"SRID=4326;POINT("+n.lat+" "+n.long+")",description:e.description,tags:"xyz abc",coords:JSON.stringify(n),created_at:r,updated_at:r,added_by:m.user.id},e.successAlert=!1,t.next=6,w.from("all_locations").insert([c]).single();case 6:o=t.sent,i=o.error,i?e.errorAlert=!0:e.successAlert=!0;case 9:case"end":return t.stop()}}),t)})))()},getLatLong:function(e){var t=/[+-]?\d+(\.\d+)?/g,n=e.match(t);return n=n.filter((function(e){return e.length>4&&e.includes(".")})),{lat:n[0],long:n[1]}}}};n("0e39");const D=g()(B,[["render",R],["__scopeId","data-v-45a5e16c"]]);var T=D,G={class:"my-1"},M=Object(r["f"])("h3",{class:"text-dark mb-3"},"Your Listings",-1),N={key:0},J={key:1},V=Object(r["f"])("div",{class:"alert alert-warning text-center",role:"alert"},[Object(r["f"])("h5",null,"You don't have any listings yet!")],-1),Y=[V];function q(e,t,n,c,o,i){var a=Object(r["o"])("ListingCard");return Object(r["i"])(),Object(r["e"])("div",G,[M,o.items.length>0?(Object(r["i"])(),Object(r["e"])("div",N,[(Object(r["i"])(!0),Object(r["e"])(r["a"],null,Object(r["n"])(o.items,(function(e){return Object(r["i"])(),Object(r["e"])("div",{key:e.id},[Object(r["h"])(a,{loc:e,showDeleteBtn:!0,showActionBtn:!1},null,8,["loc"])])})),128))])):(Object(r["i"])(),Object(r["e"])("div",J,Y))])}var E={class:"card w-100 my-2"},F={class:"card-body"},H={class:"card-title"},Q={class:"card-text"},X={class:"text-end"},z=["href"];function K(e,t,n,c,o,i){return Object(r["i"])(),Object(r["e"])("div",E,[Object(r["f"])("div",F,[Object(r["f"])("h5",H,Object(r["p"])(n.loc.name),1),Object(r["f"])("p",Q,Object(r["p"])(n.loc.description),1),Object(r["f"])("p",X,[n.showActionBtn?(Object(r["i"])(),Object(r["e"])("a",{key:0,href:"https://www.google.com/maps/place/"+n.loc.coords.lat+","+n.loc.coords.long,target:"_blank",class:"btn directions-btn text-white mx-2"}," Open in maps ",8,z)):Object(r["d"])("",!0),n.showDeleteBtn?(Object(r["i"])(),Object(r["e"])("button",{key:1,class:"btn btn-danger mx-2",onClick:t[0]||(t[0]=function(e){return i.deleteListing(n.loc.id)})}," Delete Listing ")):Object(r["d"])("",!0)])])])}var Z={name:"ListingCard",props:{loc:Object,showDeleteBtn:Boolean,showActionBtn:Boolean},methods:{deleteListing:function(e){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function n(){var r,c;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return console.log(e),n.next=3,w.from("all_locations").delete().match({id:e});case 3:r=n.sent,c=r.error,c||t.$parent.getUserListings(m.user.id);case 6:case"end":return n.stop()}}),n)})))()}}};n("ee55");const W=g()(Z,[["render",K],["__scopeId","data-v-265ace8d"]]);var $=W,ee={name:"GetUserListings",components:{ListingCard:$},created:function(){this.getUserListings(m.user.id)},data:function(){return{navigatorError:!1,coords:{},items:[],radii:20}},methods:{getUserListings:function(e){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function n(){var r,c,o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,w.from("all_locations").select().eq("added_by",e);case 2:if(r=n.sent,c=r.data,o=r.error,!o){n.next=8;break}return console.log("error",o),n.abrupt("return");case 8:if(console.log(c),null!==c){n.next=12;break}return c.value=[],n.abrupt("return");case 12:t.items=c;case 13:case"end":return n.stop()}}),n)})))()}}};const te=g()(ee,[["render",q]]);var ne=te,re={name:"UserDashboard",components:{PostLocation:T,GetUserListings:ne}};const ce=g()(re,[["render",_]]);var oe=ce,ie={class:"row justify-content-center bg-white"},ae={class:"col-12 px-5"};function se(e,t,n,c,o,i){var a=Object(r["o"])("GetLocations");return Object(r["i"])(),Object(r["e"])("div",ie,[Object(r["f"])("div",ae,[Object(r["h"])(a)])])}var ue={class:"my-1"},le={class:"float-end"},de={key:0},be=Object(r["f"])("h4",{class:"text-secondary mb-3"},"Found following things around you",-1),fe={key:1},Oe=Object(r["f"])("div",{class:"alert alert-warning text-center",role:"alert"},[Object(r["f"])("h5",null,"Sorry ! No listings found aroud you.")],-1),je=[Oe];function ge(e,t,n,c,o,i){var a=Object(r["o"])("ListingCard");return Object(r["i"])(),Object(r["e"])("div",ue,[Object(r["f"])("p",null,"You're at : "+Object(r["p"])(o.coords.latitude)+", "+Object(r["p"])(o.coords.longitude),1),Object(r["f"])("label",le," looking in "+Object(r["p"])(o.radii)+" KMs radius ",1),Object(r["r"])(Object(r["f"])("input",{type:"range",class:"form-range",min:"2",max:"102",step:"10",id:"kmsRange","onUpdate:modelValue":t[0]||(t[0]=function(e){return o.radii=e}),onChange:t[1]||(t[1]=function(){return i.radiusChange&&i.radiusChange.apply(i,arguments)})},null,544),[[r["q"],o.radii]]),o.items.length>0?(Object(r["i"])(),Object(r["e"])("div",de,[be,(Object(r["i"])(!0),Object(r["e"])(r["a"],null,Object(r["n"])(o.items,(function(e){return Object(r["i"])(),Object(r["e"])("div",{key:e.id},[Object(r["h"])(a,{loc:e,showDeleteBtn:!1,showActionBtn:!0},null,8,["loc"])])})),128))])):(Object(r["i"])(),Object(r["e"])("div",fe,je))])}n("159b");var pe={name:"GetUserListings",components:{ListingCard:$},data:function(){return{navigatorError:!1,coords:{},items:[],radii:20}},created:function(){navigator.geolocation?navigator.geolocation.getCurrentPosition(this.showPosition):console.log("Geolocation is not supported by this browser.")},methods:{radiusChange:function(){console.log(this.radii),this.getLocations(this.coords,this.radii)},showPosition:function(e){this.coords=e.coords,this.getLocations(this.coords,100)},getLocations:function(e){var t=arguments,n=this;return Object(s["a"])(regeneratorRuntime.mark((function r(){var c,o,i,a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return c=t.length>1&&void 0!==t[1]?t[1]:100,r.next=3,w.rpc("get_listings",{radius:c,point:"SRID=4326;POINT("+e.latitude+" "+e.longitude+")"});case 3:if(o=r.sent,i=o.data,a=o.error,!a){r.next=9;break}return console.log("error",a),r.abrupt("return");case 9:if(null!==i){r.next=12;break}return i.value=[],r.abrupt("return");case 12:n.items=i,n.items.forEach((function(e){e.coords=JSON.parse(e.coords)}));case 14:case"end":return r.stop()}}),r)})))()}}};const he=g()(pe,[["render",ge]]);var me=he,ve={name:"Home",components:{GetLocations:me}};const ye=g()(ve,[["render",se]]);var we=ye,ke=function(e){return Object(r["k"])("data-v-5e53dbbf"),e=e(),Object(r["j"])(),e},Le={class:"mt-4"},xe=ke((function(){return Object(r["f"])("h3",{class:"header text-dark"},"Sign in to Add/Manage your listing",-1)})),_e=ke((function(){return Object(r["f"])("p",{class:"description text-secondary"}," Sign in via magic link with your email below ",-1)})),Ce={key:0,class:"alert alert-success"},Ie=Object(r["g"])(" Magic link sent to your email successfully! "),Ae=ke((function(){return Object(r["f"])("br",null,null,-1)})),Pe=Object(r["g"])(" Please check your email to login "),Se=[Ie,Ae,Pe],Ue=["value","disabled"];function Re(e,t,n,c,o,i){return Object(r["i"])(),Object(r["e"])("form",{class:"d-flex justify-content-center mt-5 mx-3",onSubmit:t[1]||(t[1]=Object(r["s"])((function(){return c.handleLogin&&c.handleLogin.apply(c,arguments)}),["prevent"]))},[Object(r["f"])("div",Le,[xe,_e,c.emailSent?(Object(r["i"])(),Object(r["e"])("p",Ce,Se)):Object(r["d"])("",!0),Object(r["f"])("div",null,[Object(r["r"])(Object(r["f"])("input",{class:"form-control my-2",type:"email",placeholder:"Your email","onUpdate:modelValue":t[0]||(t[0]=function(e){return c.email=e})},null,512),[[r["q"],c.email]])]),Object(r["f"])("div",null,[Object(r["f"])("input",{type:"submit",class:"btn action-btn float-end my-2",value:c.loading?"Loading":"Send Magic link",disabled:c.loading},null,8,Ue)])])],32)}var Be={data:function(){return{}},setup:function(){var e=Object(r["m"])(!1),t=Object(r["m"])(""),n=Object(r["m"])(!1),c=function(){var r=Object(s["a"])(regeneratorRuntime.mark((function r(){var c,o;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,e.value=!0,n.value=!1,r.next=5,w.auth.signIn({email:t.value});case 5:if(c=r.sent,o=c.error,!o){r.next=9;break}throw o;case 9:n.value=!0,r.next=15;break;case 12:r.prev=12,r.t0=r["catch"](0),alert(r.t0.error_description||r.t0.message);case 15:return r.prev=15,e.value=!1,r.finish(15);case 18:case"end":return r.stop()}}),r,null,[[0,12,15,18]])})));return function(){return r.apply(this,arguments)}}();return{loading:e,email:t,handleLogin:c,emailSent:n}}};n("17e0");const De=g()(Be,[["render",Re],["__scopeId","data-v-5e53dbbf"]]);var Te=De,Ge={name:"App",data:function(){return{showLogin:!1}},components:{TitleBar:h,Home:we,UserDashboard:oe,Auth:Te},setup:function(){return m.user=null,w.auth.onAuthStateChange((function(e,t){t&&t.user?m.user=t.user:m.user=null})),{store:m}},methods:{showLoginFunc:function(){this.showLogin=!0},signOut:function(){return Object(s["a"])(regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,w.auth.signOut();case 2:t=e.sent,n=t.error,n||console.log("Logged out successfully!");case 5:case"end":return e.stop()}}),e)})))()}}};n("befd");const Me=g()(Ge,[["render",a]]);var Ne=Me;n("ab8b"),n("7b17");Object(r["b"])(Ne).mount("#app")},8185:function(e,t,n){},befd:function(e,t,n){"use strict";n("8185")},edbf:function(e,t,n){},ee55:function(e,t,n){"use strict";n("40d7")},fe30:function(e,t,n){}});
//# sourceMappingURL=app.0ace486f.js.map