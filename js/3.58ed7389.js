(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[3],{HEM2:function(t,s,a){"use strict";a.r(s);var i=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("q-page",{staticClass:"relative-position",attrs:{padding:""}},[a("q-card",{staticClass:"q-mt-md relative-position"},[a("q-card-title",[t._v("\n      玩家概况\n    ")]),a("q-card-separator"),a("q-card-main",[t.address?a("p",[t._v("地址： "+t._s(t.address))]):a("div",[a("p",{staticClass:"text-red"},[t._v("\n         请先安装"),a("a",{attrs:{href:"https://github.com/nebulasio/WebExtensionWallet/blob/master/README.md",target:"_blank"}},[t._v("钱包插件")]),t._v("，或"),a("a",{attrs:{href:"https://nano.nebulas.io/index.html",target:"_blank"}},[t._v("手机NAS钱包 ")])]),a("p",{staticClass:"text-red"},[t._v("\n         若已经安装，请前往首页出牌成功后返回查看")]),a("p")]),a("p",[t._v("已投入： "+t._s((t.player.depositedNAS||0)/Math.pow(10,18))+" NAS")]),a("p",[t._v("共收割： "+t._s((t.player.trades||[]).length)+" 次")]),a("p",[t._v("已赢得： "+t._s((t.player.earnedNAS||0)/Math.pow(10,18))+" NAS")])])],1),a("q-card",{staticClass:"q-mt-md relative-position"},[a("q-card-title",[t._v("\n      收割记录\n    ")]),a("q-card-separator"),a("q-card-main",t._l(t.trades,function(s,i){return a("div",[a("p",[t._v("#"+t._s(i+1)+", "+t._s(new Date(1e3*s.created).toLocaleString()))]),a("p",[t._v("共收割"+t._s(s.cardsNum)+"张牌，"+t._s(s.NAS/Math.pow(10,18))+" NAS")]),a("div",{staticClass:"q-my-md row "},t._l(s.cards,function(s,i){return a("div",{staticClass:"column q-ma-sm q-pa-sm shadow-4 relative-position card",style:{background:s.playerAddress==t.address?"lightblue":""}},[a("div",{staticClass:"absolute shadow-1 bg-yellow",staticStyle:{top:"-10px",left:"-10px"}},[t._v("\n              #"+t._s(i+1)+"\n            ")]),a("img",{attrs:{src:"../statics/cards/PNG/"+s.type+"-"+s.symbol+".png",width:"60px"}}),a("div",{staticClass:"cardFoot q-pt-sm row justify-center "},[a("span",{staticClass:"text-weight-bolder q-mx-sm "},[t._v(t._s(s.betNAS/Math.pow(10,18))+" ")]),a("span",{staticClass:"text-faded "},[t._v("NAS")])])])})),a("hr")])}))],1),a("div",{staticClass:"q-caption float-right text-faded"},[t._v("*仅显示最近10条")]),a("q-card",{staticClass:"q-mt-md relative-position"},[a("q-card-title",[t._v("\n      出牌记录\n    ")]),a("q-card-separator"),a("q-card-main",[a("div",{staticClass:"q-my-md row "},t._l(t.cards,function(s,i){return a("div",{staticClass:"column q-ma-sm q-pa-sm shadow-4 relative-position card",style:{background:s.playerAddress==t.address?"lightblue":""}},[a("div",{staticClass:"absolute shadow-1 bg-yellow",staticStyle:{top:"-10px",left:"-10px"}},[t._v("\n            #"+t._s(i+1)+"\n          ")]),a("img",{attrs:{src:"../statics/cards/PNG/"+s.type+"-"+s.symbol+".png",width:"60px"}}),a("div",{staticClass:"cardFoot q-pt-sm row justify-center "},[a("span",{staticClass:"text-weight-bolder q-mx-sm "},[t._v(t._s(s.betNAS/Math.pow(10,18))+" ")]),a("span",{staticClass:"text-faded "},[t._v("NAS")])])])}))])],1),a("div",{staticClass:"q-caption float-right text-faded"},[t._v("*仅显示最近10条")]),a("q-inner-loading",{attrs:{visible:t.loading}},[a("q-spinner-gears",{attrs:{size:"50px",color:"primary"}})],1)],1)},e=[];i._withStripped=!0;a("9VmF");var r={data:function(){return{isMobile:!1,isDesktop:!1,isIOS:!1,isAndroid:!1,blockchain:{},contract:"",address:"",loading:!1,player:{},cards:[],trades:[]}},mounted:function(){this.isMobile=this.$q.platform.is.mobile,this.isDesktop=this.$q.platform.is.desktop,this.isIOS=this.$q.platform.is.ios,this.isAndroid=this.$q.platform.is.android,this.blockchain=this.$store.state.blockchain.blockchain,this.contract=this.$store.state.blockchain.contract,this.address=this.$store.state.blockchain.address,!this.address&&this.isMobile&&(this.address=this.$q.localStorage.get.item("address")),this.loading=!0,setTimeout(this.getPlayer,1e3)},methods:{getPlayer:function(){var t=this,s=this.address;if(s){var a="0",i="0",e="1000000",r="2000000",o="getPlayer",d='["10","10","10"]',l={function:o,args:d},n=t.contract;t.loading=!0,t.meta={},t.cards=[],t.blockchain.neb.api.call(s,n,a,i,e,r,l).then(function(s){if(t.loading=!1,!s.result.startsWith("Error")&&JSON.parse(s.result)){var a=JSON.parse(s.result);t.player=a,t.cards=a.cards,t.trades=a.trades}}).catch(function(s){t.loading=!1,console.log("error:"+s.message)})}else this.loading=!1}}},o=r,d=(a("qqmF"),a("KHd+")),l=Object(d["a"])(o,i,e,!1,null,null,null);s["default"]=l.exports},Qkta:function(t,s,a){},qqmF:function(t,s,a){"use strict";var i=a("Qkta"),e=a.n(i);e.a}}]);