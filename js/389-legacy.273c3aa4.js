"use strict";(self["webpackChunkping_wallet"]=self["webpackChunkping_wallet"]||[]).push([[389],{14660:function(t,e,n){n.r(e),n.d(e,{default:function(){return g}});var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("b-alert",{attrs:{variant:"danger",show:t.syncing}},[n("div",{staticClass:"alert-body"},[n("span",[t._v("No new blocks have been produced since "),n("strong",[t._v(t._s(t.latestTime))])])])]),n("b-row",[n("b-col",[n("parameters-module-component",{attrs:{data:t.chain}})],1)],1),n("b-row",[n("b-col",[n("parameters-module-component",{attrs:{data:t.mint}})],1)],1),n("b-row",[n("b-col",[n("parameters-module-component",{attrs:{data:t.staking}})],1)],1),t.gov.items.length>0?n("b-row",[n("b-col",[n("parameters-module-component",{attrs:{data:t.gov}})],1)],1):t._e(),n("b-row",[n("b-col",[n("parameters-module-component",{attrs:{data:t.distribution}})],1)],1),n("b-row",[n("b-col",[n("parameters-module-component",{attrs:{data:t.slashing}})],1)],1),n("b-card",{attrs:{title:"Application Version"}},[n("object-field-component",{attrs:{tablefield:t.appVersion}})],1),n("b-card",{attrs:{title:"Node Information"}},[n("object-field-component",{attrs:{tablefield:t.nodeVersion}})],1)],1)},o=[],r=n(3336),a=(n(34553),n(41539),n(78783),n(33948),n(92222),n(54747),n(21249),n(47941),n(69720),n(56977),n(26253)),s=n(50725),l=n(73106),c=n(8775),u=n(99546),d=n(33980),h=n(77778),m={components:{BRow:a.T,BCol:s.l,BAlert:l.F,BCard:c._,ParametersModuleComponent:d.Z,ObjectFieldComponent:h.Z},data:function(){return{syncing:!1,latestTime:"",marketData:null,chain:{title:"",class:"border-primary",items:[{subtitle:"height",icon:"BoxIcon",color:"light-success"},{subtitle:"bonded_and_supply",icon:"DollarSignIcon",color:"light-danger"},{subtitle:"bonded_ratio",icon:"PercentIcon",color:"light-warning"},{subtitle:"inflation",icon:"TrendingUpIcon",color:"light-primary"}]},staking:{title:"Staking Parameters",items:[]},distribution:{title:"Distribution Parameters",items:[]},slashing:{title:"Slashing Parameters",items:null},mint:{title:"Mint Parameters",items:null},gov:{title:"Governance Parameters",items:[]},appVersion:null,nodeVersion:null}},created:function(){var t=this;this.$http.getLatestBlock().then((function(e){var n=t.chain.items.findIndex((function(t){return"height"===t.subtitle}));t.$set(t.chain,"title","Chain ID: ".concat(e.block.header.chain_id)),t.$set(t.chain.items[n],"title",e.block.header.height),(0,u.timeIn)(e.block.header.time,3,"m")?t.syncing=!0:t.syncing=!1,t.latestTime=(0,u.toDay)(e.block.header.time,"long")})),this.$http.getStakingParameters().then((function(e){t.staking=t.normalize(e,"Staking Parameters"),Promise.all([t.$http.getStakingPool(),t.$http.getBankTotal(e.bond_denom)]).then((function(n){var i=t.chain.items.findIndex((function(t){return"bonded_and_supply"===t.subtitle}));t.$set(t.chain.items[i],"title","".concat((0,u.formatNumber)((0,u.formatTokenAmount)(n[0].bondedToken,2,e.bond_denom,!1),!0,0),"/").concat((0,u.formatNumber)((0,u.formatTokenAmount)(n[1].amount,2,e.bond_denom,!1),!0,0)));var o=t.chain.items.findIndex((function(t){return"bonded_ratio"===t.subtitle}));t.$set(t.chain.items[o],"title","".concat((0,u.percent)(n[0].bondedToken/n[1].amount),"%"))}))})),this.$http.getSlashingParameters().then((function(e){t.slashing=t.normalize(e,"Slashing Parameters")}));var e=this.$http.getSelectedConfig();e.excludes&&e.excludes.indexOf("mint")>-1?this.mint=null:(this.$http.getMintingInflation().then((function(e){var n=t.chain.items.findIndex((function(t){return"inflation"===t.subtitle}));t.$set(t.chain.items[n],"title","".concat((0,u.percent)(e),"%"))})),this.$http.getMintParameters().then((function(e){t.mint=t.normalize(e,"Minting Parameters")}))),this.$http.getDistributionParameters().then((function(e){t.distribution=t.normalize(e,"Distribution Parameters")})),e.excludes&&e.excludes.indexOf("governance")>-1?this.gov.items=[]:Promise.all([this.$http.getGovernanceParameterDeposit(),this.$http.getGovernanceParameterTallying(),this.$http.getGovernanceParameterVoting()]).then((function(e){var n=[];e.forEach((function(e){var i=t.normalize(e,"").items;n=n.concat(i)})),t.gov.items=n,t.$set(t.gov,"items",n)})),this.$http.getNodeInfo().then((function(e){t.appVersion=e.application_version,t.nodeVersion=e.default_node_info}))},methods:{normalize:function(t,e){if(!t)return null;var n=this.makeItems(t);return{title:e,items:n}},makeItems:function(t){var e=this;return Object.keys(t).map((function(n){return(0,u.isToken)(t[n])?{title:(0,u.tokenFormatter)(t[n]),subtitle:n}:"boolean"===typeof t[n]?{title:t[n],subtitle:n}:{title:e.convert(t[n]),subtitle:n}}))},convert:function(t){var e=this;if("object"===(0,r.Z)(t)){var n={};return Object.entries(t).forEach((function(t){var i=t[0],o=t[1];n[i]=e.convert(o)})),n}var i=parseFloat(t);return 0===i?"0":i<1.01?"".concat((0,u.percent)(i),"%"):i>1e9?"".concat((0,u.toDuration)(i/1e6)):i>0?i.toFixed():t}}},p=m,f=n(43736),b=(0,f.Z)(p,i,o,!1,null,null,null),g=b.exports},73106:function(t,e,n){n.d(e,{F:function(){return T}});var i,o=n(20144),r=n(1915),a=n(94689),s=n(63294),l=n(12299),c=n(90494),u=n(26410),d=n(33284),h=n(54602),m=n(93954),p=n(67040),f=n(20451),b=n(18280),g=n(91451),v=n(17100);function w(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function y(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?w(Object(n),!0).forEach((function(e){k(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):w(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function k(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var P=(0,h.l)("show",{type:l.jy,defaultValue:!1}),D=P.mixin,$=P.props,O=P.prop,_=P.event,x=function(t){return""===t||(0,d.jn)(t)?0:(t=(0,m.Z3)(t,0),t>0?t:0)},j=function(t){return""===t||!0===t||!((0,m.Z3)(t,0)<1)&&!!t},S=(0,f.y2)((0,p.GE)(y(y({},$),{},{dismissLabel:(0,f.pi)(l.N0,"Close"),dismissible:(0,f.pi)(l.U5,!1),fade:(0,f.pi)(l.U5,!1),variant:(0,f.pi)(l.N0,"info")})),a.YJ),T=o["default"].extend({name:a.YJ,mixins:[D,b.Z],props:S,data:function(){return{countDown:0,localShow:j(this[O])}},watch:(i={},k(i,O,(function(t){this.countDown=x(t),this.localShow=j(t)})),k(i,"countDown",(function(t){var e=this;this.clearCountDownInterval();var n=this[O];(0,d.kE)(n)&&(this.$emit(s.Mg,t),n!==t&&this.$emit(_,t),t>0?(this.localShow=!0,this.$_countDownTimeout=setTimeout((function(){e.countDown--}),1e3)):this.$nextTick((function(){(0,u.bz)((function(){e.localShow=!1}))})))})),k(i,"localShow",(function(t){var e=this[O];t||!this.dismissible&&!(0,d.kE)(e)||this.$emit(s.NN),(0,d.kE)(e)||e===t||this.$emit(_,t)})),i),created:function(){this.$_filterTimer=null;var t=this[O];this.countDown=x(t),this.localShow=j(t)},beforeDestroy:function(){this.clearCountDownInterval()},methods:{dismiss:function(){this.clearCountDownInterval(),this.countDown=0,this.localShow=!1},clearCountDownInterval:function(){clearTimeout(this.$_countDownTimeout),this.$_countDownTimeout=null}},render:function(t){var e=t();if(this.localShow){var n=this.dismissible,i=this.variant,o=t();n&&(o=t(g.Z,{attrs:{"aria-label":this.dismissLabel},on:{click:this.dismiss}},[this.normalizeSlot(c.CZ)])),e=t("div",{staticClass:"alert",class:k({"alert-dismissible":n},"alert-".concat(i),i),attrs:{role:"alert","aria-live":"polite","aria-atomic":!0},key:this[r.X$]},[o,this.normalizeSlot()])}return t(v.N,{props:{noFade:!this.fade}},[e])}})},64206:function(t,e,n){n.d(e,{j:function(){return c}});var i=n(20144),o=n(69558),r=n(94689),a=n(12299),s=n(20451),l=(0,s.y2)({textTag:(0,s.pi)(a.N0,"p")},r.zv),c=i["default"].extend({name:r.zv,functional:!0,props:l,render:function(t,e){var n=e.props,i=e.data,r=e.children;return t(n.textTag,(0,o.b)(i,{staticClass:"card-text"}),r)}})},87272:function(t,e,n){n.d(e,{D:function(){return u}});var i=n(20144),o=n(69558),r=n(94689),a=n(12299),s=n(20451);function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var c=(0,s.y2)({right:(0,s.pi)(a.U5,!1),tag:(0,s.pi)(a.N0,"div"),verticalAlign:(0,s.pi)(a.N0,"top")},r.u7),u=i["default"].extend({name:r.u7,functional:!0,props:c,render:function(t,e){var n=e.props,i=e.data,r=e.children,a=n.verticalAlign,s="top"===a?"start":"bottom"===a?"end":a;return t(n.tag,(0,o.b)(i,{staticClass:"media-aside",class:l({"media-aside-right":n.right},"align-self-".concat(s),s)}),r)}})},81843:function(t,e,n){n.d(e,{D:function(){return c}});var i=n(20144),o=n(69558),r=n(94689),a=n(12299),s=n(20451),l=(0,s.y2)({tag:(0,s.pi)(a.N0,"div")},r.Ub),c=i["default"].extend({name:r.Ub,functional:!0,props:l,render:function(t,e){var n=e.props,i=e.data,r=e.children;return t(n.tag,(0,o.b)(i,{staticClass:"media-body"}),r)}})},72775:function(t,e,n){n.d(e,{P:function(){return m}});var i=n(20144),o=n(69558),r=n(94689),a=n(12299),s=n(90494),l=n(72345),c=n(20451),u=n(87272),d=n(81843),h=(0,c.y2)({noBody:(0,c.pi)(a.U5,!1),rightAlign:(0,c.pi)(a.U5,!1),tag:(0,c.pi)(a.N0,"div"),verticalAlign:(0,c.pi)(a.N0,"top")},r.vF),m=i["default"].extend({name:r.vF,functional:!0,props:h,render:function(t,e){var n=e.props,i=e.data,r=e.slots,a=e.scopedSlots,c=e.children,h=n.noBody,m=n.rightAlign,p=n.verticalAlign,f=h?c:[];if(!h){var b={},g=r(),v=a||{};f.push(t(d.D,(0,l.O)(s.Pq,b,v,g)));var w=(0,l.O)(s.Q2,b,v,g);w&&f[m?"push":"unshift"](t(u.D,{props:{right:m,verticalAlign:p}},w))}return t(n.tag,(0,o.b)(i,{staticClass:"media"}),f)}})}}]);