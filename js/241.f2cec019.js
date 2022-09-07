"use strict";(self["webpackChunkping_wallet"]=self["webpackChunkping_wallet"]||[]).push([[241],{98241:function(t,e,n){n.r(e),n.d(e,{default:function(){return x}});var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container-md"},[n("b-card",[n("b-row",[n("b-col",[n("b-input-group",[n("b-form-input",{attrs:{placeholder:"Button on both side"},model:{value:t.rpc,callback:function(e){t.rpc=e},expression:"rpc"}}),n("b-input-group-append",[n("b-button",{attrs:{variant:"outline-primary"},on:{click:function(e){return t.onchange()}}},[t._v(" Moniter ")])],1)],1)],1)],1),200!==t.httpstatus?n("div",{staticClass:"text-danger"},[t._v(" "+t._s(t.httpstatus)+": "+t._s(t.httpStatusText)+" ")]):t._e()],1),t.roundState["height/round/step"]?n("b-card",[n("b-card-title",{staticClass:"d-flex justify-content-between"},[n("span",[t._v("Height/Round/Step: "+t._s(t.roundState["height/round/step"]))]),n("small",{staticClass:"text-danger"},[t._v("Updated at "+t._s(t.format(t.updatetime)))])]),t._l(t.roundState.height_vote_set,(function(e){return n("div",{key:e.round},[t._v(" Round: "+t._s(e.round)+" "+t._s(e.precommits_bit_array)+" "),n("b-card-body",{staticClass:"px-0"},t._l(e.precommits,(function(e,r){return n("b-button",{key:r,staticStyle:{margin:"2px"},attrs:{size:"sm",variant:t.color(r,e)}},[n("small",[t._v(t._s(t.showName(r,e)))])])})),1)],1)})),n("b-card-footer",[n("b-button",{attrs:{variant:"primary",size:"sm"}}),t._v(" Proposer Signed "),n("b-button",{attrs:{variant:"outline-primary",size:"sm"}}),t._v(" Proposer Not Signed "),n("b-button",{attrs:{variant:"success",size:"sm"}}),t._v(" Signed "),n("b-button",{attrs:{variant:"outline-secondary",size:"sm"}}),t._v(" Not Signed ")],1)],2):t._e(),n("b-alert",{attrs:{variant:"info",show:""}},[n("h4",{staticClass:"alert-heading"},[t._v(" Tips ")]),n("div",{staticClass:"alert-body"},[n("span",[t._v('If you want to change the default rpc endpoint. make sure that "https" and "CORS" are enabled on your server.')])])])],1)},i=[],o=n(73106),s=n(26253),a=n(50725),u=n(8775),c=n(40670),p=n(37674),l=n(4060),d=n(22183),h=n(22418),f=n(15193),b=n(75200),m=n(49379),v=n(83300),y=n.n(v),g=n(99546),O=n(19938),w=n.n(O),_={components:{BAlert:o.F,BRow:s.T,BCol:a.l,BCard:u._,BCardBody:c.O,BCardFooter:p.F,BInputGroup:l.w,BFormInput:d.e,BInputGroupAppend:h.B,BButton:f.T,BAvatar:b.SH,BCardTitle:m._,vSelect:w()},data(){const t=(0,g.getLocalChains)();return{showPrevote:!1,httpstatus:200,httpStatusText:"",roundState:{},chains:t,vals:[],positions:[],updatetime:new Date,rpc:""}},computed:{selected(){return this.$store.state.chains.selected.chain_name}},created(){this.validators(),this.rpc=`${this.chains[this.selected].rpc[0]}/consensus_state`,this.timer=setInterval(this.update,6e3)},beforeDestroy(){clearInterval(this.timer)},methods:{format:t=>(0,g.toDay)(t,"time"),color(t,e){return t===this.roundState.proposer.index?"nil-Vote"===e?"outline-primary":"primary":"nil-Vote"===e?"outline-secondary":"success"},update(){this.updatetime=new Date,200===this.httpstatus&&y()(this.rpc).then((t=>(this.httpstatus=t.status,this.httpStatusText=t.httpStatusText,t.json()))).then((t=>{this.roundState=t.result.round_state})).catch((t=>{this.httpstatus=500,this.httpStatusText=t}))},validators(){const t=this.chains[this.selected];let e=[];this.$http.getValidatorList(t).then((t=>{e=t})).catch((()=>{e=(0,g.getCachedValidators)(this.selected.chain_name)||[]})).finally((()=>{this.vals=e.map((t=>{const e=t;return e.hex=(0,g.consensusPubkeyToHexAddress)(t.consensus_pubkey),e}))}))},onchange(){this.httpstatus=200,this.httpStatusText="",this.roundState={}},showName(t,e){if("nil-Vote"===e){if(this.positions[t]){const e=this.vals.find((e=>e.hex===this.positions[t].address));return e?.description?.moniker||t}return t}const n=e.substring(e.indexOf(":")+1,e.indexOf(" ")),r=this.vals.find((t=>t.hex.startsWith(n)));return r?.description?.moniker||n}}},j=_,S=n(43736),P=(0,S.Z)(j,r,i,!1,null,null,null),x=P.exports},73106:function(t,e,n){n.d(e,{F:function(){return N}});var r,i=n(20144),o=n(1915),s=n(94689),a=n(63294),u=n(12299),c=n(90494),p=n(26410),l=n(33284),d=n(54602),h=n(93954),f=n(67040),b=n(20451),m=n(18280),v=n(91451),y=n(17100);function g(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function O(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?g(Object(n),!0).forEach((function(e){w(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function w(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var _=(0,d.l)("show",{type:u.jy,defaultValue:!1}),j=_.mixin,S=_.props,P=_.prop,x=_.event,D=function(t){return""===t||(0,l.jn)(t)?0:(t=(0,h.Z3)(t,0),t>0?t:0)},C=function(t){return""===t||!0===t||!((0,h.Z3)(t,0)<1)&&!!t},k=(0,b.y2)((0,f.GE)(O(O({},S),{},{dismissLabel:(0,b.pi)(u.N0,"Close"),dismissible:(0,b.pi)(u.U5,!1),fade:(0,b.pi)(u.U5,!1),variant:(0,b.pi)(u.N0,"info")})),s.YJ),N=i["default"].extend({name:s.YJ,mixins:[j,m.Z],props:k,data:function(){return{countDown:0,localShow:C(this[P])}},watch:(r={},w(r,P,(function(t){this.countDown=D(t),this.localShow=C(t)})),w(r,"countDown",(function(t){var e=this;this.clearCountDownInterval();var n=this[P];(0,l.kE)(n)&&(this.$emit(a.Mg,t),n!==t&&this.$emit(x,t),t>0?(this.localShow=!0,this.$_countDownTimeout=setTimeout((function(){e.countDown--}),1e3)):this.$nextTick((function(){(0,p.bz)((function(){e.localShow=!1}))})))})),w(r,"localShow",(function(t){var e=this[P];t||!this.dismissible&&!(0,l.kE)(e)||this.$emit(a.NN),(0,l.kE)(e)||e===t||this.$emit(x,t)})),r),created:function(){this.$_filterTimer=null;var t=this[P];this.countDown=D(t),this.localShow=C(t)},beforeDestroy:function(){this.clearCountDownInterval()},methods:{dismiss:function(){this.clearCountDownInterval(),this.countDown=0,this.localShow=!1},clearCountDownInterval:function(){clearTimeout(this.$_countDownTimeout),this.$_countDownTimeout=null}},render:function(t){var e=t();if(this.localShow){var n=this.dismissible,r=this.variant,i=t();n&&(i=t(v.Z,{attrs:{"aria-label":this.dismissLabel},on:{click:this.dismiss}},[this.normalizeSlot(c.CZ)])),e=t("div",{staticClass:"alert",class:w({"alert-dismissible":n},"alert-".concat(r),r),attrs:{role:"alert","aria-live":"polite","aria-atomic":!0},key:this[o.X$]},[i,this.normalizeSlot()])}return t(y.N,{props:{noFade:!this.fade}},[e])}})},74199:function(t,e,n){n.d(e,{B:function(){return p},N:function(){return c}});var r=n(20144),i=n(69558),o=n(94689),s=n(12299),a=n(20451),u=n(18222),c=(0,a.y2)({append:(0,a.pi)(s.U5,!1),id:(0,a.pi)(s.N0),isText:(0,a.pi)(s.U5,!1),tag:(0,a.pi)(s.N0,"div")},o.gb),p=r["default"].extend({name:o.gb,functional:!0,props:c,render:function(t,e){var n=e.props,r=e.data,o=e.children,s=n.append;return t(n.tag,(0,i.b)(r,{class:{"input-group-append":s,"input-group-prepend":!s},attrs:{id:n.id}}),n.isText?[t(u.e,o)]:o)}})},22418:function(t,e,n){n.d(e,{B:function(){return h}});var r=n(20144),i=n(69558),o=n(94689),s=n(67040),a=n(20451),u=n(74199);function c(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function p(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?c(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var d=(0,a.y2)((0,s.CE)(u.N,["append"]),o.Il),h=r["default"].extend({name:o.Il,functional:!0,props:d,render:function(t,e){var n=e.props,r=e.data,o=e.children;return t(u.B,(0,i.b)(r,{props:p(p({},n),{},{append:!0})}),o)}})},27754:function(t,e,n){n.d(e,{P:function(){return h}});var r=n(20144),i=n(69558),o=n(94689),s=n(67040),a=n(20451),u=n(74199);function c(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function p(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?c(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var d=(0,a.y2)((0,s.CE)(u.N,["append"]),o.iG),h=r["default"].extend({name:o.iG,functional:!0,props:d,render:function(t,e){var n=e.props,r=e.data,o=e.children;return t(u.B,(0,i.b)(r,{props:p(p({},n),{},{append:!1})}),o)}})},18222:function(t,e,n){n.d(e,{e:function(){return c}});var r=n(20144),i=n(69558),o=n(94689),s=n(12299),a=n(20451),u=(0,a.y2)({tag:(0,a.pi)(s.N0,"div")},o.HQ),c=r["default"].extend({name:o.HQ,functional:!0,props:u,render:function(t,e){var n=e.props,r=e.data,o=e.children;return t(n.tag,(0,i.b)(r,{staticClass:"input-group-text"}),o)}})},4060:function(t,e,n){n.d(e,{w:function(){return m}});var r=n(20144),i=n(69558),o=n(94689),s=n(12299),a=n(90494),u=n(18735),c=n(72345),p=n(20451),l=n(22418),d=n(27754),h=n(18222);function f(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var b=(0,p.y2)({append:(0,p.pi)(s.N0),appendHtml:(0,p.pi)(s.N0),id:(0,p.pi)(s.N0),prepend:(0,p.pi)(s.N0),prependHtml:(0,p.pi)(s.N0),size:(0,p.pi)(s.N0),tag:(0,p.pi)(s.N0,"div")},o.aZ),m=r["default"].extend({name:o.aZ,functional:!0,props:b,render:function(t,e){var n=e.props,r=e.data,o=e.slots,s=e.scopedSlots,p=n.prepend,b=n.prependHtml,m=n.append,v=n.appendHtml,y=n.size,g=s||{},O=o(),w={},_=t(),j=(0,c.Q)(a.kg,g,O);(j||p||b)&&(_=t(d.P,[j?(0,c.O)(a.kg,w,g,O):t(h.e,{domProps:(0,u.U)(b,p)})]));var S=t(),P=(0,c.Q)(a.G$,g,O);return(P||m||v)&&(S=t(l.B,[P?(0,c.O)(a.G$,w,g,O):t(h.e,{domProps:(0,u.U)(v,m)})])),t(n.tag,(0,i.b)(r,{staticClass:"input-group",class:f({},"input-group-".concat(y),y),attrs:{id:n.id||null,role:"group"}}),[_,(0,c.O)(a.Pq,w,g,O),S])}})}}]);