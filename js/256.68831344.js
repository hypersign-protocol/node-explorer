"use strict";(self["webpackChunkping_wallet"]=self["webpackChunkping_wallet"]||[]).push([[256],{15656:function(t,e,o){o.r(e),o.d(e,{default:function(){return S}});var a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("b-row",{staticClass:"match-height"},t._l(t.proposals,(function(t){return o("b-col",{key:t.id,attrs:{lg:"6",md:"12"}},[o("proposal-summary-component",{attrs:{p:t}})],1)})),1),t.next?o("b-row",[o("b-col",[o("b-button",{attrs:{block:"",variant:"outline-primary",disabled:t.loading},on:{click:function(e){return t.getList()}}},[t._v(" Load More ")])],1)],1):t._e(),o("operation-modal",{attrs:{type:t.operationModalType,"proposal-id":t.selectedProposalId,"proposal-title":t.selectedTitle}})],1)},i=[],n=o(15193),r=o(37674),s=o(22981),l=o(45752),p=o(26034),c=o(49379),d=o(18365),u=o(26253),h=o(50725),b=o(82653),v=o(20266),f=o(8086),m=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("b-card",[o("b-card-title",{staticClass:"mb-0",staticStyle:{"min-height":"55px"}},[t._v(" #"+t._s(t.p.id)+". "),o("b-badge",{attrs:{pill:"",variant:"light-primary"}},[t._v(" "+t._s(t.formatType(t.p.contents["@type"]))+" ")]),o("router-link",{attrs:{to:"./gov/"+t.p.id}},[t._v(" "+t._s(t.p.title)+" ")])],1),o("div",{staticClass:"gov-wrapper flex-wrap my-1"},[o("div",{staticClass:"gov"},[o("p",{staticClass:"card-text mb-25"},[t._v(" Status ")]),o("h6",{staticClass:"mb-0"},[1==t.p.status?o("span",[t._v(" Deposit ")]):2==t.p.status?o("span",[t._v(" Voting ")]):3==t.p.status?o("span",[t._v(" Passed ")]):4==t.p.status?o("span",[t._v(" Rejected ")]):o("span",[t._v(t._s(t.p.status))])])]),o("div",{staticClass:"gov"},[o("p",{staticClass:"card-text mb-25"},[t._v(" Start Date ")]),o("h6",{staticClass:"mb-0"},[t._v(" "+t._s(t.formatDate(t.p.voting_start_time))+" ")])]),o("div",{staticClass:"gov"},[o("p",{staticClass:"card-text mb-25"},[t._v(" End Date ")]),o("h6",{staticClass:"mb-0"},[t._v(" "+t._s(t.formatDate(t.p.voting_end_time))+" ")])]),o("div",{staticClass:"gov"},[o("p",{staticClass:"card-text mb-25"},[t._v(" Deposit ")]),o("h6",{staticClass:"mb-0"},[t._v(" "+t._s(t.formatToken(t.p.total_deposit)||"-")+" ")])])]),o("b-progress",{staticClass:"mb-2",attrs:{max:100,height:"2rem","show-progress":""}},[o("b-progress-bar",{attrs:{id:"vote-yes"+t.p.id,variant:"success",value:t.percent(t.p.tally.yes),"show-progress":"",label:t.percent(t.p.tally.yes).toFixed()+"%"}}),o("b-progress-bar",{attrs:{id:"vote-no"+t.p.id,variant:"warning",value:t.percent(t.p.tally.no),label:t.percent(t.p.tally.no).toFixed()+"%","show-progress":""}}),o("b-progress-bar",{attrs:{id:"vote-veto"+t.p.id,variant:"danger",value:t.percent(t.p.tally.veto),label:t.percent(t.p.tally.veto).toFixed()+"%","show-progress":""}}),o("b-progress-bar",{attrs:{id:"vote-abstain"+t.p.id,variant:"info",value:t.percent(t.p.tally.abstain),label:t.percent(t.p.tally.abstain).toFixed()+"%","show-progress":""}})],1),o("b-tooltip",{attrs:{target:"vote-yes"+t.p.id}},[t._v(" "+t._s(t.percent(t.p.tally.yes))+"% voted Yes ")]),o("b-tooltip",{attrs:{target:"vote-no"+t.p.id}},[t._v(" "+t._s(t.percent(t.p.tally.no))+"% voted No ")]),o("b-tooltip",{attrs:{target:"vote-veto"+t.p.id}},[t._v(" "+t._s(t.percent(t.p.tally.veto))+"% voted No With Veto ")]),o("b-tooltip",{attrs:{target:"vote-abstain"+t.p.id}},[t._v(" "+t._s(t.percent(t.p.tally.abstain))+"% voted Abstain ")]),o("b-card-footer",{staticClass:"pb-0"},[o("router-link",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{to:"./gov/"+t.p.id,variant:"outline-primary"}},[o("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{href:"./gov/"+t.p.id,variant:"outline-primary"}},[t._v(" "+t._s(t.$t("btn_detail"))+" ")])],1),1===t.p.status?o("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.operation-modal",modifiers:{"operation-modal":!0}}],staticClass:"btn float-right mg-2",attrs:{variant:"primary"},on:{click:function(e){return t.selectProposal("GovDeposit",t.p.id,t.p.title)}}},[t._v(" "+t._s(t.$t("btn_deposit"))+" ")]):t._e(),2===t.p.status?o("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.operation-modal",modifiers:{"operation-modal":!0}}],staticClass:"btn float-right mg-2",attrs:{variant:"primary"},on:{click:function(e){return t.selectProposal("Vote",t.p.id,t.p.title)}}},[t._v(" "+t._s(t.$t("btn_vote"))+" ")]):t._e()],1)],1)},g=[],y=o(8775),_=o(99546),$=o(27484),w=o.n($),C={components:{BCard:y._,BButton:n.T,BCardFooter:r.F,BProgressBar:s.Q,BProgress:l.D,BBadge:p.k,BCardTitle:c._,BTooltip:d.T,BRow:u.T,BCol:h.l,OperationModal:f.Z},directives:{"b-modal":b.T,Ripple:v.Z},props:{p:{type:Object,default:()=>({})}},methods:{selectProposal(t,e,o){this.$parent.operationModalType=t,this.$parent.selectedProposalId=Number(e),this.$parent.selectedTitle=o},formatType(t){const e=String(t).replace("Proposal",""),o=e.lastIndexOf(".");return o>0?e.substring(o+1):e},percent:t=>(0,_.percent)(t),formatDate:t=>w()(t).format("YYYY-MM-DD"),formatToken:t=>(0,_.tokenFormatter)(t,{})}},O=C,P=o(43736),T=(0,P.Z)(O,m,g,!1,null,"17d462bf",null),D=T.exports,j={components:{BButton:n.T,BCardFooter:r.F,BProgressBar:s.Q,BProgress:l.D,BBadge:p.k,BCardTitle:c._,BTooltip:d.T,BRow:u.T,BCol:h.l,OperationModal:f.Z,ProposalSummaryComponent:D},directives:{"b-modal":b.T,Ripple:v.Z},data(){return{selectedProposalId:0,selectedTitle:"",proposals:[],max:1,operationModalType:"",next:""}},mounted(){this.getList()},methods:{getList(){this.loading=!0,this.$http.getGovernanceList(this.next).then((t=>{this.proposals=this.proposals.concat(t.proposals),this.updateTally(this.proposals),this.next=t.pagination.next_key,this.loading=!1}))},updateTally(t){const e=t.filter((t=>2===t.status));e.length>0&&e.forEach((t=>this.$http.getGovernanceTally(t.id,0).then((e=>{this.$set(t,"tally",e)}))))}}},x=j,k=(0,P.Z)(x,a,i,!1,null,"72d7669c",null),S=k.exports},26034:function(t,e,o){o.d(e,{k:function(){return f}});var a=o(20144),i=o(69558),n=o(94689),r=o(12299),s=o(67040),l=o(20451),p=o(30488),c=o(67347);function d(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,a)}return o}function u(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?d(Object(o),!0).forEach((function(e){h(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):d(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}function h(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}var b=(0,s.CE)(c.NQ,["event","routerTag"]);delete b.href.default,delete b.to.default;var v=(0,l.y2)((0,s.GE)(u(u({},b),{},{pill:(0,l.pi)(r.U5,!1),tag:(0,l.pi)(r.N0,"span"),variant:(0,l.pi)(r.N0,"secondary")})),n.dJ),f=a["default"].extend({name:n.dJ,functional:!0,props:v,render:function(t,e){var o=e.props,a=e.data,n=e.children,r=o.active,s=o.disabled,d=(0,p.u$)(o),u=d?c.we:o.tag,h=o.variant||"secondary";return t(u,(0,i.b)(a,{staticClass:"badge",class:["badge-".concat(h),{"badge-pill":o.pill,active:r,disabled:s}],props:d?(0,l.uj)(b,o):{}}),n)}})},18365:function(t,e,o){o.d(e,{N:function(){return C},T:function(){return O}});var a,i,n=o(20144),r=o(94689),s=o(63294),l=o(12299),p=o(28112),c=o(13597),d=o(33284),u=o(67040),h=o(20451),b=o(18280),v=o(40960);function f(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,a)}return o}function m(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?f(Object(o),!0).forEach((function(e){g(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):f(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}function g(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}var y="disabled",_=s.j7+y,$="show",w=s.j7+$,C=(0,h.y2)((a={boundary:(0,h.pi)([p.mv,l.aR,l.N0],"scrollParent"),boundaryPadding:(0,h.pi)(l.fE,50),container:(0,h.pi)([p.mv,l.aR,l.N0]),customClass:(0,h.pi)(l.N0),delay:(0,h.pi)(l.$k,50)},g(a,y,(0,h.pi)(l.U5,!1)),g(a,"fallbackPlacement",(0,h.pi)(l.Mu,"flip")),g(a,"id",(0,h.pi)(l.N0)),g(a,"noFade",(0,h.pi)(l.U5,!1)),g(a,"noninteractive",(0,h.pi)(l.U5,!1)),g(a,"offset",(0,h.pi)(l.fE,0)),g(a,"placement",(0,h.pi)(l.N0,"top")),g(a,$,(0,h.pi)(l.U5,!1)),g(a,"target",(0,h.pi)([p.mv,p.t_,l.Sx,l.aR,l.N0],void 0,!0)),g(a,"title",(0,h.pi)(l.N0)),g(a,"triggers",(0,h.pi)(l.Mu,"hover focus")),g(a,"variant",(0,h.pi)(l.N0)),a),r.qv),O=n["default"].extend({name:r.qv,mixins:[b.Z],inheritAttrs:!1,props:C,data:function(){return{localShow:this[$],localTitle:"",localContent:""}},computed:{templateData:function(){return m({title:this.localTitle,content:this.localContent,interactive:!this.noninteractive},(0,u.ei)(this.$props,["boundary","boundaryPadding","container","customClass","delay","fallbackPlacement","id","noFade","offset","placement","target","target","triggers","variant",y]))},templateTitleContent:function(){var t=this.title,e=this.content;return{title:t,content:e}}},watch:(i={},g(i,$,(function(t,e){t!==e&&t!==this.localShow&&this.$_toolpop&&(t?this.$_toolpop.show():this.$_toolpop.forceHide())})),g(i,y,(function(t){t?this.doDisable():this.doEnable()})),g(i,"localShow",(function(t){this.$emit(w,t)})),g(i,"templateData",(function(){var t=this;this.$nextTick((function(){t.$_toolpop&&t.$_toolpop.updateData(t.templateData)}))})),g(i,"templateTitleContent",(function(){this.$nextTick(this.updateContent)})),i),created:function(){this.$_toolpop=null},updated:function(){this.$nextTick(this.updateContent)},beforeDestroy:function(){this.$off(s.oJ,this.doOpen),this.$off(s.Cc,this.doClose),this.$off(s.MH,this.doDisable),this.$off(s.wV,this.doEnable),this.$_toolpop&&(this.$_toolpop.$destroy(),this.$_toolpop=null)},mounted:function(){var t=this;this.$nextTick((function(){var e=t.getComponent();t.updateContent();var o=(0,c.P)(t)||(0,c.P)(t.$parent),a=t.$_toolpop=new e({parent:t,_scopeId:o||void 0});a.updateData(t.templateData),a.$on(s.l0,t.onShow),a.$on(s.AS,t.onShown),a.$on(s.yM,t.onHide),a.$on(s.v6,t.onHidden),a.$on(s.gi,t.onDisabled),a.$on(s.VU,t.onEnabled),t[y]&&t.doDisable(),t.$on(s.oJ,t.doOpen),t.$on(s.Cc,t.doClose),t.$on(s.MH,t.doDisable),t.$on(s.wV,t.doEnable),t.localShow&&a.show()}))},methods:{getComponent:function(){return v.j},updateContent:function(){this.setTitle(this.normalizeSlot()||this.title)},setTitle:function(t){t=(0,d.Jp)(t)?"":t,this.localTitle!==t&&(this.localTitle=t)},setContent:function(t){t=(0,d.Jp)(t)?"":t,this.localContent!==t&&(this.localContent=t)},onShow:function(t){this.$emit(s.l0,t),t&&(this.localShow=!t.defaultPrevented)},onShown:function(t){this.localShow=!0,this.$emit(s.AS,t)},onHide:function(t){this.$emit(s.yM,t)},onHidden:function(t){this.$emit(s.v6,t),this.localShow=!1},onDisabled:function(t){t&&t.type===s.gi&&(this.$emit(_,!0),this.$emit(s.gi,t))},onEnabled:function(t){t&&t.type===s.VU&&(this.$emit(_,!1),this.$emit(s.VU,t))},doOpen:function(){!this.localShow&&this.$_toolpop&&this.$_toolpop.show()},doClose:function(){this.localShow&&this.$_toolpop&&this.$_toolpop.hide()},doDisable:function(){this.$_toolpop&&this.$_toolpop.disable()},doEnable:function(){this.$_toolpop&&this.$_toolpop.enable()}},render:function(t){return t()}})}}]);