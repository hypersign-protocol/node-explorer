"use strict";(self["webpackChunkping_wallet"]=self["webpackChunkping_wallet"]||[]).push([[111],{78111:function(t,e,r){r.r(e),r.d(e,{default:function(){return k}});var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("b-card",{staticClass:"text-truncate",attrs:{"no-body":""}},[r("b-tabs",{staticClass:"mt-1",attrs:{pills:""}},[r("b-tab",{attrs:{title:"Recent",disabled:""}}),r("b-tab",{attrs:{title:"Blocks",active:""}},[r("b-table",{attrs:{items:t.blocks,fields:t.list_fields,"sort-desc":!0,"sort-by":"tokens",striped:"",hover:"",stacked:"sm"},scopedSlots:t._u([{key:"cell(height)",fn:function(e){return[r("router-link",{attrs:{to:"./blocks/"+e.item.block.header.height}},[t._v(" "+t._s(e.item.block.header.height)+" ")])]}},{key:"cell(hash)",fn:function(e){return[r("small",[t._v(t._s(e.item.block_id.hash))])]}},{key:"cell(time)",fn:function(e){return[t._v(" "+t._s(t.formatTime(e.item.block.header.time))+" ")]}},{key:"cell(proposer)",fn:function(e){return[t._v(" "+t._s(t.formatProposer(e.item.block.header.proposer_address))+" ")]}},{key:"cell(txs)",fn:function(e){return[t._v(" "+t._s(t.length(e.item.block.data.txs))+" ")]}}])})],1),r("b-tab",{attrs:{title:"Transactions"}},[r("b-table",{attrs:{items:t.txs,fields:t.txFields,responsive:"sm"},scopedSlots:t._u([{key:"cell(hash)",fn:function(e){return[r("router-link",{attrs:{to:"./tx/"+e.value}},[t._v(" "+t._s(t.shortHash(e.value))+" ")])]}}])})],1)],1)],1)],1)},a=[],i=(r(41539),r(34553),r(51015)),o=r(58887),s=r(8775),l=r(13170),c=r(87047),u=r(49379),f=r(5870),h=r(99546),d=r(74087),b=r(28972),m=r(33643),v={components:{BTab:i.L,BTabs:o.M,BCard:s._,BTable:l.h,BCardHeader:c.p,BCardTitle:u._},directives:{"b-tooltip":f.o},data:function(){return{islive:!0,blocks:[],txs:[],list_fields:[{key:"height",sortable:!0},{key:"hash",thClass:"d-none d-lg-block",tdClass:"d-none d-lg-block text-truncate"},{key:"proposer",tdClass:"text-truncate"},{key:"txs"},{key:"time",thClass:"d-none d-md-block",tdClass:"d-none d-md-block"}],txFields:[{key:"hash"},{key:"time",formatter:function(t){return(0,h.toDay)(t,"from")}},{key:"fee",formatter:function(t){return(0,h.tokenFormatter)(t)}},{key:"messages",formatter:function(t){return(0,h.abbrMessage)(t)}},{key:"memo"}]}},created:function(){var t=this;this.$http.getLatestBlock().then((function(e){t.blocks.push(e);for(var r=[],n=e.block.header.height,a=1;a<10;a+=1)r.push(n-a);(0,h.getCachedValidators)()||t.$http.getValidatorList();var i=Promise.resolve();r.forEach((function(e){i=i.then((function(){return new Promise((function(r){t.$http.getBlockByHeight(e).then((function(e){r(),t.blocks.push(e),t.txs.length<20&&t.extractTx(e,"tail")}))}))}))})),t.timer=setInterval(t.fetch,6e3)}))},beforeDestroy:function(){this.islive=!1,clearInterval(this.timer)},methods:{length:function(t){return Array.isArray(t)?t.length:0},shortHash:function(t){return(0,h.abbr)(t)},formatTime:function(t){return(0,h.toDay)(t,"from")},formatProposer:function(t){return(0,h.getStakingValidatorByHex)(this.$http.config.chain_name,t)},fetch:function(){var t=this;this.$http.getLatestBlock().then((function(e){var r=t.blocks.findIndex((function(t){return t.block.header.height===e.block.header.height}));r<0&&(t.blocks.unshift(e),t.extractTx(e)),t.blocks.length>200&&t.blocks.pop()}))},extractTx:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"head",r=t.block.data.txs;if(null!==r)for(var n=0;n<r.length;n+=1){var a=new m.Z;try{var i=(0,d.decodeTxRaw)((0,b.fromBase64)(r[n]));a=m.Z.create(i),a.time=t.block.header.time}catch(o){}a.setHash(r[n]),"head"===e?(this.txs.unshift(a),this.txs.length>200&&this.txs.pop()):this.txs.length<100&&this.txs.push(a)}}}},p=v,g=r(43736),y=(0,g.Z)(p,n,a,!1,null,null,null),k=y.exports},5870:function(t,e,r){r.d(e,{o:function(){return J}});var n=r(94689),a=r(43935),i=r(63294),o=r(11572),s=r(79968),l=r(13597),c=r(68265),u=r(33284),f=r(3058),h=r(93954),d=r(67040),b=r(40960);function m(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function v(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?m(Object(r),!0).forEach((function(e){p(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):m(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function p(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var g="__BV_Tooltip__",y="hover focus",k={focus:!0,hover:!0,click:!0,blur:!0,manual:!0},_=/^html$/i,x=/^noninteractive$/i,w=/^nofade$/i,P=/^(auto|top(left|right)?|bottom(left|right)?|left(top|bottom)?|right(top|bottom)?)$/i,C=/^(window|viewport|scrollParent)$/i,O=/^d\d+$/i,$=/^ds\d+$/i,j=/^dh\d+$/i,B=/^o-?\d+$/i,Z=/^v-.+$/i,T=/\s+/,D=function(t,e){var r={title:void 0,trigger:"",placement:"top",fallbackPlacement:"flip",container:!1,animation:!0,offset:0,id:null,html:!1,interactive:!0,disabled:!1,delay:(0,s.wJ)(n.qv,"delay",50),boundary:String((0,s.wJ)(n.qv,"boundary","scrollParent")),boundaryPadding:(0,h.Z3)((0,s.wJ)(n.qv,"boundaryPadding",5),0),variant:(0,s.wJ)(n.qv,"variant"),customClass:(0,s.wJ)(n.qv,"customClass")};if((0,u.HD)(t.value)||(0,u.hj)(t.value)||(0,u.mf)(t.value)?r.title=t.value:(0,u.PO)(t.value)&&(r=v(v({},r),t.value)),(0,u.o8)(r.title)){var a=e.data||{};r.title=a.attrs&&!(0,u.Jp)(a.attrs.title)?a.attrs.title:void 0}(0,u.PO)(r.delay)||(r.delay={show:(0,h.Z3)(r.delay,0),hide:(0,h.Z3)(r.delay,0)}),t.arg&&(r.container="#".concat(t.arg)),(0,d.XP)(t.modifiers).forEach((function(t){if(_.test(t))r.html=!0;else if(x.test(t))r.interactive=!1;else if(w.test(t))r.animation=!1;else if(P.test(t))r.placement=t;else if(C.test(t))t="scrollparent"===t?"scrollParent":t,r.boundary=t;else if(O.test(t)){var e=(0,h.Z3)(t.slice(1),0);r.delay.show=e,r.delay.hide=e}else $.test(t)?r.delay.show=(0,h.Z3)(t.slice(2),0):j.test(t)?r.delay.hide=(0,h.Z3)(t.slice(2),0):B.test(t)?r.offset=(0,h.Z3)(t.slice(1),0):Z.test(t)&&(r.variant=t.slice(2)||null)}));var i={};return(0,o.zo)(r.trigger||"").filter(c.y).join(" ").trim().toLowerCase().split(T).forEach((function(t){k[t]&&(i[t]=!0)})),(0,d.XP)(t.modifiers).forEach((function(t){t=t.toLowerCase(),k[t]&&(i[t]=!0)})),r.trigger=(0,d.XP)(i).join(" "),"blur"===r.trigger&&(r.trigger="focus"),r.trigger||(r.trigger=y),r},H=function(t,e,r){if(a.Qg){var n=D(e,r);if(!t[g]){var o=r.context;t[g]=new b.j({parent:o,_scopeId:(0,l.P)(o,void 0)}),t[g].__bv_prev_data__={},t[g].$on(i.l0,(function(){(0,u.mf)(n.title)&&t[g].updateData({title:n.title(t)})}))}var s={title:n.title,triggers:n.trigger,placement:n.placement,fallbackPlacement:n.fallbackPlacement,variant:n.variant,customClass:n.customClass,container:n.container,boundary:n.boundary,delay:n.delay,offset:n.offset,noFade:!n.animation,id:n.id,interactive:n.interactive,disabled:n.disabled,html:n.html},c=t[g].__bv_prev_data__;if(t[g].__bv_prev_data__=s,!(0,f.W)(s,c)){var h={target:t};(0,d.XP)(s).forEach((function(e){s[e]!==c[e]&&(h[e]="title"===e&&(0,u.mf)(s[e])?s[e](t):s[e])})),t[g].updateData(h)}}},E=function(t){t[g]&&(t[g].$destroy(),t[g]=null),delete t[g]},J={bind:function(t,e,r){H(t,e,r)},componentUpdated:function(t,e,r){r.context.$nextTick((function(){H(t,e,r)}))},unbind:function(t){E(t)}}},33643:function(t,e,r){r.d(e,{Z:function(){return l}});var n=r(13087),a=r(62833),i=r(79562),o=r(28972),s=r(4799),l=function(){function t(){(0,n.Z)(this,t),this.hash="",this.fee=[new s.Z],this.memo="",this.messages=[],this.signatures=[],this.time=null}return(0,a.Z)(t,[{key:"setHash",value:function(t){this.hash=(0,o.toHex)((0,i.sha256)((0,o.fromBase64)(t))).toUpperCase()}}],[{key:"create",value:function(e){var r=new t;return r.hash="",r.fee=e.authInfo.fee.amount,r.memo=e.body.memo,r.messages=e.body.messages,r.signatures=e.signatures,r}}]),t}()}}]);