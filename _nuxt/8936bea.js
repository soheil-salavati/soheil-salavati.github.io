(window.webpackJsonp=window.webpackJsonp||[]).push([[26,107,110,111],{1065:function(e,t,n){"use strict";n(944)},1066:function(e,t,n){var a=n(115)(!1);a.push([e.i,'.tabs[data-v-0c695c31] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: -webkit-flex;\n  display: flex;\n  white-space: nowrap;\n  overflow: auto;\n  -ms-flex-negative: 0;\n  -webkit-flex-shrink: 0;\n  flex-shrink: 0;\n}\n.tabs .tab[data-v-0c695c31] {\n  position: relative;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: -webkit-flex;\n  display: flex;\n  -ms-flex-negative: 0;\n  -webkit-flex-shrink: 0;\n  flex-shrink: 0;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  -webkit-align-items: center;\n  align-items: center;\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n  -webkit-justify-content: center;\n  justify-content: center;\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n  padding-left: 1rem;\n  padding-right: 1rem;\n  color: var(--secondary-color);\n  font-weight: 600;\n  cursor: pointer;\n}\n.tabs .tab[data-v-0c695c31]:hover {\n  color: var(--secondary-dark-color);\n}\n.tabs .tab[data-v-0c695c31]:focus {\n  outline: 2px solid transparent;\n  outline-offset: 2px;\n}\n.tabs .tab[data-v-0c695c31]:focus-visible {\n  color: var(--secondary-dark-color);\n}\n.tabs .tab .tab-info[data-v-0c695c31] {\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: -webkit-inline-flex;\n  display: inline-flex;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  -webkit-align-items: center;\n  align-items: center;\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n  -webkit-justify-content: center;\n  justify-content: center;\n  width: 1.25rem;\n  height: 1rem;\n  margin-left: 0.5rem;\n  font-size: 8px;\n  line-height: 1;\n  border-color: var(--divider-color);\n  border-width: 1px;\n  border-radius: 0.25rem;\n  color: var(--secondary-light-color);\n}\n.tabs .tab[data-v-0c695c31]::after {\n  position: absolute;\n  left: 1rem;\n  right: 1rem;\n  bottom: 0px;\n  background-color: transparent;\n  z-index: 2;\n  height: 0.125rem;\n  content: "";\n}\n.tabs .tab[data-v-0c695c31]:focus::after {\n  background-color: var(--divider-color);\n}\n.tabs .tab.active[data-v-0c695c31] {\n  color: var(--secondary-dark-color);\n}\n.tabs .tab.active .tab-info[data-v-0c695c31] {\n  color: var(--secondary-color);\n  border-color: var(--divider-dark-color);\n}\n.tabs .tab.active[data-v-0c695c31]::after {\n  background-color: var(--accent-color);\n}\n.tabs .tab.vertical[data-v-0c695c31] {\n  padding: 0.5rem;\n  border-radius: 0.25rem;\n}\n.tabs .tab.vertical[data-v-0c695c31]:focus::after {\n  display: none;\n}\n.tabs .tab.vertical.active[data-v-0c695c31] {\n  color: var(--accent-color);\n}\n.tabs .tab.vertical.active .tab-info[data-v-0c695c31] {\n  color: var(--secondary-color);\n  border-color: var(--divider-dark-color);\n}\n.tabs .tab.vertical.active[data-v-0c695c31]::after {\n  display: none;\n}',""]),e.exports=a},1244:function(e,t,n){"use strict";n.r(t);var a=n(54),l=n(3),c=Object(l.c)({data:function(){return{observer:null}},mounted:function(){var e=this;this.observer=new IntersectionObserver((function(t){var n=Object(a.a)(t,1)[0];n&&n.isIntersecting&&e.$emit("intersecting",n)})),this.observer.observe(this.$refs.container)},beforeDestroy:function(){var e;null===(e=this.observer)||void 0===e||e.disconnect()}}),i=n(23),r=Object(i.a)(c,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{ref:"container"},[e._t("default")],2)}),[],!1,null,null,null);t.default=r.exports},1817:function(e,t,n){"use strict";n.r(t);n(132),n(5);var a=n(3),l=n(22),c=n(371),i=n(372),r=n(24),o=n(304),s={};s.props={doc:{key:"doc",required:!0,type:Boolean},show:{key:"show",required:!0,type:Boolean},collectionsType:{key:"collectionsType",required:!0,type:Object}},s.setup=function(e,t){var n=Object(a.o)("my-collections"),s=t.emit,u=Object(r.g)(c.a,null),d=new i.a(!0),b=Object(r.g)(d.teamList$,null),f=Object(o.c)("REMEMBERED_TEAM_ID"),v=!1;Object(a.y)(b,(function(e){if(e&&!v&&(v=!0,f.value&&u)){var t=e.find((function(e){return e.id===f.value}));t&&m(t)}})),Object(l.i)((function(){d.initialize()}));var p=Object(a.o)(null),m=function(e){f.value=null==e?void 0:e.id,s("update-selected-team",e)};return Object(a.y)(n,(function(e){s("update-collection-type",e)})),{selectedCollectionTab:n,currentUser:u,myTeams:b,onTeamSelectIntersect:function(){d.fetchList()},options:p,updateSelectedTeam:m}};var u=s,d=n(23),b=Object(d.a)(u,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.show?n("div",[n("SmartTabs",{attrs:{id:"collections_tab"},model:{value:e.selectedCollectionTab,callback:function(t){e.selectedCollectionTab=t},expression:"selectedCollectionTab"}},[n("SmartTab",{attrs:{id:"my-collections",label:""+e.$t("collection.my_collections")}}),e._v(" "),e.currentUser&&!e.doc?n("SmartTab",{attrs:{id:"team-collections",label:""+e.$t("collection.team_collections")}},[n("SmartIntersection",{on:{intersecting:e.onTeamSelectIntersect}},[n("tippy",{ref:"options",attrs:{interactive:"",trigger:"click",theme:"popover",arrow:"",placement:"bottom"},scopedSlots:e._u([{key:"trigger",fn:function(){return[n("span",{directives:[{name:"tippy",rawName:"v-tippy",value:{theme:"tooltip"},expression:"{ theme: 'tooltip' }"}],staticClass:"bg-transparent border-t border-dividerLight select-wrapper",attrs:{title:""+e.$t("collection.select_team")}},[e.collectionsType.selectedTeam?n("ButtonSecondary",{staticClass:"flex-1 !justify-start pr-8 rounded-none",attrs:{svg:"users",label:e.collectionsType.selectedTeam.name}}):n("ButtonSecondary",{staticClass:"flex-1 !justify-start pr-8 rounded-none",attrs:{label:""+e.$t("collection.select_team")}})],1)]},proxy:!0}],null,!1,3305228278)},[e._v(" "),n("div",{staticClass:"flex flex-col",attrs:{role:"menu"}},e._l(e.myTeams,(function(t,a){var l,c;return n("SmartItem",{key:"team-"+a,attrs:{label:t.name,"info-icon":t.id===(null===(l=e.collectionsType.selectedTeam)||void 0===l?void 0:l.id)?"done":"","active-info-icon":t.id===(null===(c=e.collectionsType.selectedTeam)||void 0===c?void 0:c.id),svg:"users"},nativeOn:{click:function(n){return function(){e.updateSelectedTeam(t),e.options.tippy().hide()}.apply(null,arguments)}}})})),1)])],1)],1):e._e()],1)],1):e._e()}),[],!1,null,null,null);t.default=b.exports;installComponents(b,{SmartTab:n(984).default,ButtonSecondary:n(106).default,SmartItem:n(123).default,SmartIntersection:n(1244).default,SmartTabs:n(985).default})},944:function(e,t,n){var a=n(1066);a.__esModule&&(a=a.default),"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);(0,n(116).default)("bd8f5368",a,!0,{sourceMap:!1})},975:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var a=function(e){throw new Error(e)}},984:function(e,t,n){"use strict";n.r(t);var a=n(3),l={};l.props={label:{type:String,default:null},info:{type:String,default:null},indicator:{type:Boolean,default:!1},icon:{type:String,default:null},id:{type:String,default:null,required:!0},selected:{type:Boolean,default:!1}},l.setup=function(e,t){var n=e,l=Object(a.a)((function(){return{icon:n.icon,indicator:n.indicator,info:n.info,label:n.label}})),c=Object(a.e)("tabs-system"),i=c.activeTabID,r=c.addTabEntry,o=c.updateTabEntry,s=c.removeTabEntry,u=Object(a.a)((function(){return i.value===n.id}));return Object(a.j)((function(){r(n.id,l.value)})),Object(a.y)(l,(function(e){o(n.id,e)})),Object(a.i)((function(){s(n.id)})),{active:u}};var c=l,i=n(23),r=Object(i.a)(c,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{directives:[{name:"show",rawName:"v-show",value:e.active,expression:"active"}],staticClass:"flex flex-col flex-1"},[e._t("default")],2)}),[],!1,null,null,null);t.default=r.exports},985:function(e,t,n){"use strict";n.r(t);var a=n(54),l=n(1),c=n(200),i=n(87),r=n(53),o=n(3),s=n(975),u={};u.props={styles:{type:String,default:""},vertical:{type:Boolean,default:!1},value:{type:String,required:!0}},u.setup=function(e,t){var n=e,u=t.emit,d=Object(o.o)([]);Object(o.l)("tabs-system",{activeTabID:Object(o.a)((function(){return n.value})),addTabEntry:function(e,t){d.value=Object(l.pipe)(d.value,r.fromPredicate(Object(c.not)(i.exists((function(t){return Object(a.a)(t,1)[0]===e})))),r.map(i.append([e,t])),r.getOrElseW((function(){return Object(s.a)("Tab with duplicate ID created: '".concat(e,"'"))})))},updateTabEntry:function(e,t){d.value=Object(l.pipe)(d.value,i.findIndex((function(t){return Object(a.a)(t,1)[0]===e})),r.chain((function(n){return Object(l.pipe)(d.value,i.updateAt(n,[e,t]))})),r.getOrElseW((function(){return Object(s.a)("Failed to update tab entry: ".concat(e))})))},removeTabEntry:function(e){d.value=Object(l.pipe)(d.value,i.findIndex((function(t){return Object(a.a)(t,1)[0]===e})),r.chain((function(e){return Object(l.pipe)(d.value,i.deleteAt(e))})),r.getOrElseW((function(){return Object(s.a)("Failed to remove tab entry: ".concat(e))}))),n.value===e&&d.value.length>0&&b(d.value[0][0])}});var b=function(e){u("input",e)};return{tabEntries:d,selectTab:b}};var d=u,b=(n(1065),n(23)),f=Object(b.a)(d,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"flex flex-1 h-full flex-nowrap",class:{"flex-col h-auto":!e.vertical}},[n("div",{staticClass:"relative tabs hide-scrollbar",class:[{"border-r border-dividerLight":e.vertical},e.styles]},[n("div",{staticClass:"flex flex-1"},[n("div",{staticClass:"flex justify-between flex-1",class:{"flex-col":e.vertical}},[n("div",{staticClass:"flex",class:{"flex-col space-y-2 p-2":e.vertical}},e._l(e.tabEntries,(function(t,a){var l=t[0],c=t[1];return n("button",{key:"tab-"+a,staticClass:"tab",class:[{active:e.value===l},{vertical:e.vertical}],attrs:{"aria-label":c.label||"",role:"button"},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.selectTab(l)},click:function(t){return e.selectTab(l)}}},[c.icon?n("SmartIcon",{staticClass:"svg-icons",attrs:{name:c.icon}}):e._e(),e._v(" "),e.vertical&&c.label?n("tippy",{attrs:{placement:"left",theme:"tooltip",content:c.label}}):c.label?n("span",[e._v(e._s(c.label))]):e._e(),e._v(" "),c.info&&"null"!==c.info?n("span",{staticClass:"tab-info"},[e._v("\n              "+e._s(c.info)+"\n            ")]):e._e(),e._v(" "),c.indicator?n("span",{staticClass:"w-1 h-1 ml-2 rounded-full bg-accentLight"}):e._e()],1)})),0),e._v(" "),n("div",{staticClass:"flex items-center justify-center"},[e._t("actions")],2)])])]),e._v(" "),n("div",{staticClass:"w-full h-full contents",class:{"!flex flex-col flex-1 overflow-y-auto hide-scrollbar":e.vertical}},[e._t("default")],2)])}),[],!1,null,"0c695c31",null);t.default=f.exports;installComponents(f,{SmartIcon:n(111).default})}}]);