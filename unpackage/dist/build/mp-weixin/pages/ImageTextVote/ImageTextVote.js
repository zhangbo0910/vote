(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/ImageTextVote/ImageTextVote"],{"0bc7":function(e,t,o){"use strict";o.r(t);var n=o("6b21"),i=o.n(n);for(var a in n)"default"!==a&&function(e){o.d(t,e,(function(){return n[e]}))}(a);t["default"]=i.a},1439:function(e,t,o){},"367d":function(e,t,o){"use strict";(function(e){o("0d4b");n(o("66fd"));var t=n(o("76d9"));function n(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,o("543d")["createPage"])},"6b21":function(e,t,o){"use strict";(function(e,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(o("a34a"));function a(e){return e&&e.__esModule?e:{default:e}}function u(e,t,o,n,i,a,u){try{var l=e[a](u),r=l.value}catch(s){return void o(s)}l.done?t(r):Promise.resolve(r).then(n,i)}function l(e){return function(){var t=this,o=arguments;return new Promise((function(n,i){var a=e.apply(t,o);function l(e){u(a,n,i,l,r,"next",e)}function r(e){u(a,n,i,l,r,"throw",e)}l(void 0)}))}}var r=o("8a12"),s={data:function(){return{params:{year:!0,month:!0,day:!0,hour:!0,minute:!0},startTimeShow:!1,endTimeShow:!1,nunShow:!1,numlist:[{value:1,label:"每天",children:[{value:1,label:"1次"},{value:2,label:"2次"},{value:3,label:"3次"},{value:4,label:"4次"},{value:5,label:"5次"},{value:6,label:"6次"},{value:7,label:"7次"},{value:8,label:"8次"},{value:9,label:"9次"},{value:10,label:"10次"},{value:11,label:"11次"},{value:12,label:"12次"},{value:13,label:"13次"},{value:14,label:"14次"},{value:15,label:"15次"},{value:16,label:"16次"},{value:17,label:"17次"},{value:18,label:"18次"},{value:19,label:"19次"},{value:20,label:"20次"}]},{value:2,label:"总共",children:[{value:1,label:"1次"},{value:2,label:"2次"},{value:3,label:"3次"},{value:4,label:"4次"},{value:5,label:"5次"},{value:6,label:"6次"},{value:7,label:"7次"},{value:8,label:"8次"},{value:9,label:"9次"},{value:10,label:"10次"},{value:11,label:"11次"},{value:12,label:"12次"},{value:13,label:"13次"},{value:14,label:"14次"},{value:15,label:"15次"},{value:16,label:"16次"},{value:17,label:"17次"},{value:18,label:"18次"},{value:19,label:"19次"},{value:20,label:"20次"}]}],obj:{pageview:0,activityTitle:"",voteIntroduce:"",voteItemlist:[{index:1,vote:0,updateInfo:[],content:"",imgList:[]},{vote:0,index:2,updateInfo:[],content:"",imgList:[]}],startTime:r().format("YYYY-MM-DD HH:mm"),endTime:r().add({y:0,M:0,d:1,h:0,m:0}).format("YYYY-MM-DD HH:mm"),voteMoreTxt:"总共1次",voteMore:"1",switchVal:!0,status:1,openid:"",creatUserInfo:"",voteType:"ImageTextVote"}}},onLoad:function(){},methods:{addItem:function(){this.obj.voteItemlist.push({vote:0,index:this.obj.voteItemlist.length+1,updateInfo:[],content:"",imgList:[]})},deleteItem:function(e){if(2==this.obj.voteItemlist.length)return this.$refs.uToast.show({title:"至少要有两个投票选项",type:"error",position:"top"}),!1;this.obj.voteItemlist.splice(e,1)},ShowStart:function(){this.startTimeShow=!0},ShowEnd:function(){this.endTimeShow=!0},ShowNun:function(){this.nunShow=!0},confirmStartTime:function(e){this.obj.startTime="".concat(e.year,"-").concat(e.month,"-").concat(e.day," ").concat(e.hour,":").concat(e.minute)},confirmEndTime:function(e){this.obj.endTime="".concat(e.year,"-").concat(e.month,"-").concat(e.day," ").concat(e.hour,":").concat(e.minute)},confirmNum:function(e){this.obj.voteMoreTxt="".concat(e[0].label).concat(e[1].label),this.obj.voteMore=e[1].value},formVerify:function(){for(var e=0;e<this.obj.voteItemlist.length;e++){if(0==this.obj.voteItemlist[e].imgList.length)return this.$refs.uToast.show({title:"请上传第".concat(e+1,"项的图片"),type:"error",position:"top"}),!1;if(""==this.obj.voteItemlist[e].content)return this.$refs.uToast.show({title:"请填写第".concat(e+1,"个投票选项"),type:"error",position:"top"}),!1}return""==this.obj.activityTitle?(this.$refs.uToast.show({title:"请填写活动标题",type:"error",position:"top"}),!1):""==this.obj.voteIntroduce?(this.$refs.uToast.show({title:"请填写投票介绍",type:"error",position:"top"}),!1):0!=this.compare(this.obj.startTime,this.obj.endTime)||(this.$refs.uToast.show({title:"投票开始时间不能大于结束时间",type:"error",position:"top"}),!1)},compare:function(e,t){var o=new Date(e),n=new Date(t);return!(o.getTime()>n.getTime())},ChooseImage:function(t){var o=this;e.chooseImage({count:4,sizeType:["compressed"],sourceType:["camera","album"],success:function(e){0!=o.obj.voteItemlist[t].imgList.length?o.obj.voteItemlist[t].imgList=o.obj.voteItemlist[t].imgList.concat(e.tempFilePaths):o.obj.voteItemlist[t].imgList=e.tempFilePaths}})},ViewImage:function(t){e.previewImage({urls:this.obj.voteItemlist[t].imgList,current:0})},DelImg:function(t){var o=this;e.showModal({title:"提示",content:"是否要删除这张图片",success:function(e){e.confirm&&o.obj.voteItemlist[t].imgList.splice(0,1)}})},uploadingImg:function(){var e=this;return l(i.default.mark((function t(){var o,a,u,l;return i.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:o=e.obj.voteItemlist,a=e,u=0;case 3:if(!(u<o.length)){t.next=11;break}return t.next=6,n.uploadFile({filePath:e.obj.voteItemlist[u].imgList[0],cloudPath:e.obj.voteItemlist[u].imgList[0]});case 6:l=t.sent,l&&(a.obj.voteItemlist[u].imgList=[],a.obj.voteItemlist[u].imgList.push(l.fileID),console.log(l));case 8:u++,t.next=3;break;case 11:case"end":return t.stop()}}),t)})))()},submitData:function(){var t=this;return l(i.default.mark((function o(){var a;return i.default.wrap((function(o){while(1)switch(o.prev=o.next){case 0:if(e.showLoading({title:"发布中"}),!t.formVerify()){o.next=12;break}return o.next=4,t.uploadingImg();case 4:return t.obj.creatUserInfo=e.getStorageSync("userInfo"),t.obj.openid=e.getStorageSync("userInfo").openid,1==t.compare(t.obj.startTime,r().format("YYYY-MM-DD HH:mm"))&&(t.obj.status=2),a=t,o.next=10,n.callFunction({name:"add_vote",data:t.obj,success:function(t){console.log(t),e.hideLoading(),200==t.result.code?(e.showToast({title:t.result.msg,duration:2e3}),setTimeout((function(){a.clearData(),e.switchTab({url:"/pages/index/index"})}),500)):a.$refs.uToast.show({title:t.result.msg,type:"error",position:"top"})},fail:function(t){e.hideLoading(),a.$refs.uToast.show({title:"发布失败,请稍后重试！",type:"error",position:"top"})}});case 10:o.next=13;break;case 12:e.hideLoading();case 13:case"end":return o.stop()}}),o)})))()},clearData:function(){this.obj={activityTitle:"",voteIntroduce:"",voteItemlist:[{index:1,vote:0,updateInfo:[],content:"",imgList:[]},{index:1,vote:0,updateInfo:[],content:"",imgList:[]}],startTime:r().format("YYYY-MM-DD HH:mm"),endTime:r().add({y:0,M:0,d:1,h:0,m:0}).format("YYYY-MM-DD HH:mm"),voteMoreTxt:"总共1次",voteMore:"1",switchVal:!0,status:1,openid:"",creatUserInfo:"",voteType:"ImageTextVote"}}}};t.default=s}).call(this,o("543d")["default"],o("a9ff")["default"])},"6ba1":function(e,t,o){"use strict";o.d(t,"b",(function(){return i})),o.d(t,"c",(function(){return a})),o.d(t,"a",(function(){return n}));var n={uForm:function(){return o.e("node-modules/uview-ui/components/u-form/u-form").then(o.bind(null,"54b4"))},uFormItem:function(){return Promise.all([o.e("common/vendor"),o.e("node-modules/uview-ui/components/u-form-item/u-form-item")]).then(o.bind(null,"8241"))},uInput:function(){return Promise.all([o.e("common/vendor"),o.e("node-modules/uview-ui/components/u-input/u-input")]).then(o.bind(null,"2c58"))},uIcon:function(){return o.e("node-modules/uview-ui/components/u-icon/u-icon").then(o.bind(null,"645a"))},uSwitch:function(){return o.e("node-modules/uview-ui/components/u-switch/u-switch").then(o.bind(null,"5be5"))},uButton:function(){return o.e("node-modules/uview-ui/components/u-button/u-button").then(o.bind(null,"1407"))},uToast:function(){return o.e("node-modules/uview-ui/components/u-toast/u-toast").then(o.bind(null,"9920"))},uPicker:function(){return Promise.all([o.e("common/vendor"),o.e("node-modules/uview-ui/components/u-picker/u-picker")]).then(o.bind(null,"7b28"))},uSelect:function(){return o.e("node-modules/uview-ui/components/u-select/u-select").then(o.bind(null,"1a76"))}},i=function(){var e=this,t=e.$createElement;e._self._c},a=[]},"76d9":function(e,t,o){"use strict";o.r(t);var n=o("6ba1"),i=o("0bc7");for(var a in i)"default"!==a&&function(e){o.d(t,e,(function(){return i[e]}))}(a);o("8081");var u,l=o("f0c5"),r=Object(l["a"])(i["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],u);t["default"]=r.exports},8081:function(e,t,o){"use strict";var n=o("1439"),i=o.n(n);i.a}},[["367d","common/runtime","common/vendor"]]]);