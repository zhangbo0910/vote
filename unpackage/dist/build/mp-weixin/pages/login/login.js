(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/login/login"],{"7c95":function(e,n,t){"use strict";(function(e,o){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var c=a(t("a34a"));function a(e){return e&&e.__esModule?e:{default:e}}function r(e,n,t,o,c,a,r){try{var u=e[a](r),i=u.value}catch(s){return void t(s)}u.done?n(i):Promise.resolve(i).then(o,c)}function u(e){return function(){var n=this,t=arguments;return new Promise((function(o,c){var a=e.apply(n,t);function u(e){r(a,o,c,u,i,"next",e)}function i(e){r(a,o,c,u,i,"throw",e)}u(void 0)}))}}var i={data:function(){return{code:""}},methods:{getCode:function(n){var t=this;return u(c.default.mark((function a(){return c.default.wrap((function(c){while(1)switch(c.prev=c.next){case 0:e.showLoading({title:"登录中"}),t,e.login({provider:"weixin",success:function(t){console.log(t),e.getUserInfo({provider:"weixin",lang:"zh_CN",success:function(c){console.log(c);var a={code:t.code,signature:c.signature,encrypted_data:c.encryptedData,iv:c.iv,userInfo:n};console.log(a),o.callFunction({name:"wx_login",data:a}).then((function(n){console.log("微信授权成功",n),e.hideLoading(),e.showToast({title:n.result.msg,duration:2e3,icon:"none"}),1==n.result.status&&(setTimeout((function(){e.switchTab({url:"/pages/index/index"})}),500),e.setStorageSync("token",n.result.token),e.setStorageSync("userInfo",n.result.userInfo))}))}})},fail:function(n){e.hideLoading(),console.log(n),e.showToast({title:"登录失败",duration:2e3,icon:"none"})}});case 3:case"end":return c.stop()}}),a)})))()},getUserProfile:function(){var n=this;wx.canIUse("getUserProfile")&&wx.getUserProfile({lang:"zh_CN",desc:"获取用户相关信息",success:function(e){var t=e.userInfo;console.log("用户同意了授权"),console.log("userInfo：",t),n.getCode(t)},fail:function(){console.log("用户拒绝了授权"),e.showToast({title:"登录失败",duration:2e3,icon:"none"})}})},onAuthSuccess:function(e){var n=this;return u(c.default.mark((function e(){return c.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:n;case 1:case"end":return e.stop()}}),e)})))()},onEmitSuccess:function(e){var n=this;return u(c.default.mark((function t(){var o;return c.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return o=n,t.t0=o,t.next=4,o.getCode();case 4:t.t1=t.sent,t.t2=e,t.t3={oauth:"MP-WEIXIN",code:t.t1,userInfo:t.t2},t.t0.$emit.call(t.t0,"success",t.t3);case 8:case"end":return t.stop()}}),t)})))()},handleCancel:function(){this.onNavigateBack()},onNavigateBack:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;e.navigateBack({delta:Number(n)})}}};n.default=i}).call(this,t("543d")["default"],t("a9ff")["default"])},9932:function(e,n,t){},a427:function(e,n,t){"use strict";t.r(n);var o=t("7c95"),c=t.n(o);for(var a in o)"default"!==a&&function(e){t.d(n,e,(function(){return o[e]}))}(a);n["default"]=c.a},bf2d:function(e,n,t){"use strict";(function(e){t("0d4b");o(t("66fd"));var n=o(t("e63a"));function o(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,t("543d")["createPage"])},dc6d:function(e,n,t){"use strict";var o=t("9932"),c=t.n(o);c.a},e63a:function(e,n,t){"use strict";t.r(n);var o=t("fce3"),c=t("a427");for(var a in c)"default"!==a&&function(e){t.d(n,e,(function(){return c[e]}))}(a);t("dc6d");var r,u=t("f0c5"),i=Object(u["a"])(c["default"],o["b"],o["c"],!1,null,"251c9f8c",null,!1,o["a"],r);n["default"]=i.exports},fce3:function(e,n,t){"use strict";var o;t.d(n,"b",(function(){return c})),t.d(n,"c",(function(){return a})),t.d(n,"a",(function(){return o}));var c=function(){var e=this,n=e.$createElement;e._self._c},a=[]}},[["bf2d","common/runtime","common/vendor"]]]);