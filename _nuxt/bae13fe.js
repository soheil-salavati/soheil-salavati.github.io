(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{2055:function(e,t,n){"use strict";n.r(t);var r=n(54),o=n(20),i=(n(62),n(5),n(133),n(60),n(145),n(500),n(11),n(56),n(72),n(8),n(78),n(902),n(296),n(114),n(3)),a=n(22),s=n(24),c=n(104),l={};l.props={show:{key:"show",required:!0,type:Boolean}},l.setup=function(e,t){var n=t.emit,l=Object(s.b)(),p=Object(s.j)(),u=Object(s.d)(),m=Object(s.g)(c.g,[]),v=Object(s.g)(a.c,null),f=Object(i.o)(),d=Object(i.o)(),h=Object(i.a)((function(){return JSON.stringify(m.value,null,2)})),g=function(){var e=Object(o.a)(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(v.value){e.next=3;break}return p.error(u("profile.no_permission").toString()),e.abrupt("return");case 3:return e.prev=3,e.next=6,l.$post("https://api.github.com/gists",{files:{"hoppscotch-environments.json":{content:h.value}}},{headers:{Authorization:"token ".concat(v.value.accessToken),Accept:"application/vnd.github.v3+json"}});case 6:t=e.sent,p.success(u("export.gist_created").toString()),window.open(t.html_url),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(3),p.error(u("error.something_went_wrong").toString()),console.error(e.t0);case 15:case"end":return e.stop()}}),e,null,[[3,11]])})));return function(){return e.apply(this,arguments)}}(),b=function(){p.success(u("state.file_imported").toString())},_=function(){p.error(u("import.failed").toString())},y=function(){var e=Object(o.a)(regeneratorRuntime.mark((function e(){var t,n,r,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=prompt(u("import.gist_url").toString())){e.next=3;break}return e.abrupt("return");case 3:return e.prev=3,e.next=6,l.$get("https://api.github.com/gists/".concat(t.split("/").pop()),{headers:{Accept:"application/vnd.github.v3+json"}});case 6:n=e.sent,r=n.files,o=JSON.parse(Object.values(r)[0].content),Object(c.n)(o),b(),e.next=17;break;case 13:e.prev=13,e.t0=e.catch(3),_(),console.error(e.t0);case 17:case"end":return e.stop()}}),e,null,[[3,13]])})));return function(){return e.apply(this,arguments)}}(),w=function(e){Object(c.c)(e),b()},x=function(e){var t=e.name,n=e.values,r={name:t,variables:[]};n.forEach((function(e){var t=e.key,n=e.value;return r.variables.push({key:t,value:n})})),w([r])};return{t:u,currentUser:v,options:f,inputChooseFileToImportFrom:d,createEnvironmentGist:g,readEnvironmentGist:y,hideModal:function(){n("hide-modal")},openDialogChooseFileToImportFrom:function(){d.value&&d.value.click()},importFromJSON:function(){if(d.value)if(d.value.files&&0!==d.value.files.length){var e=new FileReader;e.onload=function(e){var t=e.target.result;if(t){var n=JSON.parse(t);if("environment"===n._postman_variable_scope||"globals"===n._postman_variable_scope)x(n);else if(n[0]){var o=Object.keys(n[0]),i=Object(r.a)(o,2);i[0],i[1];w(n)}else _()}else p.show(u("action.choose_file").toString())},e.readAsText(d.value.files[0]),d.value.value=""}else p.show(u("action.choose_file").toString())},exportJSON:function(){var e=h.value,t=new Blob([e],{type:"application/json"}),n=document.createElement("a"),r=URL.createObjectURL(t);n.href=r,n.download="".concat(r.split("/").pop().split("#")[0].split("?")[0],".json"),document.body.appendChild(n),n.click(),p.success(u("state.download_started").toString()),setTimeout((function(){document.body.removeChild(n),URL.revokeObjectURL(r)}),1e3)}}};var p=l,u=n(23),m=Object(u.a)(p,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.show?n("SmartModal",{attrs:{dialog:"",title:""+e.t("environment.title"),"max-width":"sm:max-w-md"},on:{close:e.hideModal},scopedSlots:e._u([{key:"actions",fn:function(){return[n("span",[n("tippy",{ref:"options",attrs:{interactive:"",trigger:"click",theme:"popover",arrow:""},scopedSlots:e._u([{key:"trigger",fn:function(){return[n("ButtonSecondary",{directives:[{name:"tippy",rawName:"v-tippy",value:{theme:"tooltip"},expression:"{ theme: 'tooltip' }"}],attrs:{title:e.t("action.more"),svg:"more-vertical"}})]},proxy:!0}],null,!1,3953414183)},[e._v(" "),n("div",{staticClass:"flex flex-col",attrs:{role:"menu"}},[n("SmartItem",{attrs:{icon:"assignment_returned",label:e.t("import.from_gist")},nativeOn:{click:function(t){return function(){e.readEnvironmentGist(),e.options.tippy().hide()}.apply(null,arguments)}}}),e._v(" "),n("span",{directives:[{name:"tippy",rawName:"v-tippy",value:{theme:"tooltip"},expression:"{ theme: 'tooltip' }"}],attrs:{title:e.currentUser?"github.com"!==e.currentUser.provider?""+e.t("export.require_github"):void 0:""+e.t("export.require_github")}},[n("SmartItem",{attrs:{disabled:!e.currentUser||"github.com"!==e.currentUser.provider,icon:"assignment_turned_in",label:e.t("export.create_secret_gist")},nativeOn:{click:function(t){return function(){e.createEnvironmentGist(),e.options.tippy().hide()}.apply(null,arguments)}}})],1)],1)])],1)]},proxy:!0},{key:"body",fn:function(){return[n("div",{staticClass:"flex flex-col px-2 space-y-2"},[n("SmartItem",{attrs:{svg:"folder-plus",label:e.t("import.from_json")},nativeOn:{click:function(t){return e.openDialogChooseFileToImportFrom.apply(null,arguments)}}}),e._v(" "),n("input",{ref:"inputChooseFileToImportFrom",staticClass:"input",attrs:{type:"file",accept:"application/json"},on:{change:e.importFromJSON}}),e._v(" "),n("hr"),e._v(" "),n("SmartItem",{directives:[{name:"tippy",rawName:"v-tippy",value:{theme:"tooltip"},expression:"{ theme: 'tooltip' }"}],attrs:{title:e.t("action.download_file"),svg:"download",label:e.t("export.as_json")},nativeOn:{click:function(t){return e.exportJSON.apply(null,arguments)}}})],1)]},proxy:!0}],null,!1,2754836477)}):e._e()}),[],!1,null,null,null);t.default=m.exports;installComponents(m,{ButtonSecondary:n(106).default,SmartItem:n(123).default,SmartModal:n(112).default})}}]);