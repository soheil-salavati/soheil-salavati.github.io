(window.webpackJsonp=window.webpackJsonp||[]).push([[67,86,105],{1853:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var a,r,i,o,c,l,s;n(92),n(60),n(180),n(13);function u(e){a=e,r=e.length,i=o=c=-1,g(),O();try{var t=p();return m("EOF"),t}catch(e){var n=f();return m("EOF"),n}}function p(){var e=i,t=[];if(m("{"),!h("}")){do{t.push(d())}while(h(","));m("}")}return{kind:"Object",start:e,end:c,members:t}}function d(){var e=i,t="String"===s?y():null;m("String"),m(":");var n=v();return{kind:"Member",start:e,end:c,key:t,value:n}}function f(){var e=i,t=[];if(m("["),!h("]")){do{t.push(v())}while(h(","));m("]")}return{kind:"Array",start:e,end:c,values:t}}function v(){switch(s){case"[":return f();case"{":return p();case"String":case"Number":case"Boolean":case"Null":var e=y();return O(),e}return m("Value")}function y(){return{kind:s,start:i,end:o,value:JSON.parse(a.slice(i,o))}}function m(e){if(s!==e){var t;if("EOF"===s)t="[end of file]";else if(o-i>1)t="`".concat(a.slice(i,o),"`");else{var n=a.slice(i).match(/^.+?\b/);t="`".concat(n?n[0]:a[i],"`")}throw b("Expected ".concat(e," but found ").concat(t,"."))}O()}function b(e){return{message:e,start:i,end:o}}function h(e){if(s===e)return O(),!0}function g(){o<r&&(o++,l=o===r?0:a.charCodeAt(o))}function O(){for(c=o;9===l||10===l||13===l||32===l;)g();if(0!==l){switch(i=o,l){case 34:return s="String",function(){g();for(;34!==l&&l>31;)if(92===l)switch(g(),l){case 34:case 47:case 92:case 98:case 102:case 110:case 114:case 116:g();break;case 117:g(),x(),x(),x(),x();break;default:throw b("Bad character escape sequence.")}else{if(o===r)throw b("Unterminated string.");g()}if(34===l)return void g();throw b("Unterminated string.")}();case 45:case 48:case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:return s="Number",function(){45===l&&g();48===l?g():w();46===l&&(g(),w());69!==l&&101!==l||(g(),43!==l&&45!==l||g(),w())}();case 102:if("false"!==a.slice(i,i+5))break;return o+=4,g(),void(s="Boolean");case 110:if("null"!==a.slice(i,i+4))break;return o+=3,g(),void(s="Null");case 116:if("true"!==a.slice(i,i+4))break;return o+=3,g(),void(s="Boolean")}s=a[i],g()}else s="EOF"}function x(){if(l>=48&&l<=57||l>=65&&l<=70||l>=97&&l<=102)return g();throw b("Expected hexadecimal digit.")}function w(){if(l<48||l>57)throw b("Expected decimal digit.");do{g()}while(l>=48&&l<=57)}},1866:function(e,t,n){var a=n(1979);a.__esModule&&(a=a.default),"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);(0,n(116).default)("208e67fa",a,!0,{sourceMap:!1})},1954:function(e,t,n){var a=n(2022);a.__esModule&&(a=a.default),"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);(0,n(116).default)("755a98b0",a,!0,{sourceMap:!1})},1955:function(e,t,n){"use strict";n(5);var a=n(1243),r=n(1853);t.a=function(e){try{return Object(r.a)(e),Promise.resolve([])}catch(t){return Promise.resolve([{from:Object(a.a)(e,t.start),to:Object(a.a)(e,t.end),message:t.message,severity:"error"}])}}},1978:function(e,t,n){"use strict";n(1866)},1979:function(e,t,n){var a=n(115)(!1);a.push([e.i,".chip[data-v-b459a34e] {\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: -webkit-inline-flex;\n  display: inline-flex;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  -webkit-align-items: center;\n  align-items: center;\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n  -webkit-justify-content: center;\n  justify-content: center;\n  border-radius: 0.25rem;\n  padding-left: 0.5rem;\n  padding-right: 0.125rem;\n  background-color: var(--primary-dark-color);\n}",""]),e.exports=a},2019:function(e,t,n){"use strict";n.r(t);n(1978);var a=n(23),r=Object(a.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",{staticClass:"chip"},[n("i",{staticClass:"opacity-75 material-icons"},[e._v("attachment")]),e._v(" "),n("span",{staticClass:"px-2 truncate max-w-32"},[e._t("default")],2)])}),[],!1,null,"b459a34e",null);t.default=r.exports},2021:function(e,t,n){"use strict";n(1954)},2022:function(e,t,n){var a=n(115)(!1);a.push([e.i,".file-chips-container[data-v-24103cd6] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-flex: 1;\n  -ms-flex: 1 1 0%;\n  -webkit-flex: 1 1 0%;\n  flex: 1 1 0%;\n  white-space: nowrap;\n  overflow: auto;\n  background-color: transparent;\n}\n.file-chips-container .file-chips-wrapper[data-v-24103cd6] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: -webkit-flex;\n  display: flex;\n  padding: 0.25rem;\n  width: 0px;\n}",""]),e.exports=a},2048:function(e,t,n){"use strict";n.r(t);var a=n(20),r=(n(62),n(5),n(133),n(114),n(3)),i=n(986),o=n(1),c=n(939),l={"text/plain":"text/x-yaml","text/html":"htmlmixed","application/xml":"application/xml","application/hal+json":"application/ld+json","application/vnd.api+json":"application/ld+json","application/json":"application/ld+json"};var s=n(24),u=n(945),p=n(113),d=n(1955),f=function(e){return i.g((function(){return new Promise((function(t,n){var a=new FileReader;a.onload=function(){t(a.result)},a.onerror=function(){n(new Error("File err"))},a.readAsText(e)}))}))},v={props:{contentType:{key:"contentType",required:!0,type:null}}};v.setup=function(e,t){var n=Object(s.d)(),v=e,y=Object(s.j)(),m=Object(s.a)(Object(p.D)(),"body"),b=Object(r.o)("wand"),h=Object(r.a)((function(){return e=v.contentType,l[e]||"text/x-yaml";var e})),g=Object(r.a)((function(){return Object(u.a)(v.contentType)?d.a:null})),O=Object(r.o)(!0),x=Object(r.o)(null);Object(c.a)(x,m,Object(r.m)({extendedEditorConfig:{lineWrapping:O,mode:h,placeholder:n("request.raw_body").toString()},linter:g,completer:null,environmentHighlights:!0}));var w=function(){var e=Object(a.a)(regeneratorRuntime.mark((function e(t){var a;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(o.pipe)(null===(a=t.target.files)||void 0===a?void 0:a[0],i.f,i.a(i.c((function(e){return void 0!==e}))),i.a(f),i.e((function(){return y.error("".concat(n("action.choose_file")))}),(function(e){m.value=e,y.success("".concat(n("state.file_imported")))})))();case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return{t:n,prettifyIcon:b,linewrapEnabled:O,rawBodyParameters:x,clearContent:function(){m.value=""},uploadPayload:w,prettifyRequestBody:function(){try{var e=JSON.parse(m.value);m.value=JSON.stringify(e,null,2),b.value="check"}catch(e){console.error(e),b.value="info",y.error("".concat(n("error.json_prettify_invalid_body")))}setTimeout((function(){return b.value="wand"}),1e3)}}};var y=v,m=n(23),b=Object(m.a)(y,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"flex flex-col flex-1"},[n("div",{staticClass:"sticky z-10 flex items-center justify-between pl-4 border-b bg-primary border-dividerLight top-upperMobileRawStickyFold sm:top-upperMobileRawTertiaryStickyFold"},[n("label",{staticClass:"font-semibold text-secondaryLight"},[e._v("\n      "+e._s(e.t("request.raw_body"))+"\n    ")]),e._v(" "),n("div",{staticClass:"flex"},[n("ButtonSecondary",{directives:[{name:"tippy",rawName:"v-tippy",value:{theme:"tooltip"},expression:"{ theme: 'tooltip' }"}],attrs:{to:"https://docs.hoppscotch.io/features/body",blank:"",title:e.t("app.wiki"),svg:"help-circle"}}),e._v(" "),n("ButtonSecondary",{directives:[{name:"tippy",rawName:"v-tippy",value:{theme:"tooltip"},expression:"{ theme: 'tooltip' }"}],class:{"!text-accent":e.linewrapEnabled},attrs:{title:e.t("state.linewrap"),svg:"wrap-text"},nativeOn:{click:function(t){t.preventDefault(),e.linewrapEnabled=!e.linewrapEnabled}}}),e._v(" "),n("ButtonSecondary",{directives:[{name:"tippy",rawName:"v-tippy",value:{theme:"tooltip"},expression:"{ theme: 'tooltip' }"}],attrs:{title:e.t("action.clear"),svg:"trash-2"},nativeOn:{click:function(t){return e.clearContent.apply(null,arguments)}}}),e._v(" "),e.contentType&&e.contentType.endsWith("json")?n("ButtonSecondary",{directives:[{name:"tippy",rawName:"v-tippy",value:{theme:"tooltip"},expression:"{ theme: 'tooltip' }"}],ref:"prettifyRequest",attrs:{title:e.t("action.prettify"),svg:e.prettifyIcon},nativeOn:{click:function(t){return e.prettifyRequestBody.apply(null,arguments)}}}):e._e(),e._v(" "),n("label",{attrs:{for:"payload"}},[n("ButtonSecondary",{directives:[{name:"tippy",rawName:"v-tippy",value:{theme:"tooltip"},expression:"{ theme: 'tooltip' }"}],attrs:{title:e.t("import.title"),svg:"file-plus"},nativeOn:{click:function(t){return e.$refs.payload.click()}}})],1),e._v(" "),n("input",{ref:"payload",staticClass:"input",attrs:{name:"payload",type:"file"},on:{change:e.uploadPayload}})],1)]),e._v(" "),n("div",{ref:"rawBodyParameters",staticClass:"flex flex-col flex-1"})])}),[],!1,null,null,null);t.default=b.exports;installComponents(b,{ButtonSecondary:n(106).default})},2049:function(e,t,n){"use strict";n.r(t);n(11),n(10),n(15),n(8),n(14);var a=n(34),r=(n(12),n(5),n(61),n(181),n(98),n(78),n(3)),i=n(363),o=n.n(i),c=n(232),l=n(1231),s=n.n(l),u=n(24),p=n(113);function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){Object(a.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var v={setup:function(e,t){var n=Object(u.d)(),a=Object(u.j)(),i=Object(r.o)(null),l=Object(u.a)(Object(p.D)(),"body"),s=Object(r.o)([{key:"",value:"",active:!0,isFile:!1}]);Object(r.y)(s,(function(e){e.length>0&&""!==e[e.length-1].key&&s.value.push({key:"",value:"",active:!0,isFile:!1})})),Object(r.y)(l,(function(e){var t=s.value.filter((function(e){return""!==e.key}));o()(e,t)||(s.value=e)}),{immediate:!0}),Object(r.y)(s,(function(e){var t=e.filter((function(e){return""!==e.key}));o()(l.value,t)||(l.value=t)}));var d=function(e,t){s.value=s.value.map((function(n,a){return a===e?t:n}))};return{workingParams:s,addBodyParam:function(){s.value.push({key:"",value:"",active:!0,isFile:!1})},updateBodyParam:d,deleteBodyParam:function(e){var t=Object(c.clone)(s.value);t.length>0&&e===t.length-1||(i.value&&(i.value.goAway(0),i.value=null),i.value=a.success("".concat(n("state.deleted")),{action:[{text:"".concat(n("action.undo")),onClick:function(e,n){s.value=t,n.goAway(0),i.value=null}}],onComplete:function(){i.value=null}})),s.value.splice(e,1)},clearContent:function(){s.value=[{key:"",value:"",active:!0,isFile:!1}]},setRequestAttachment:function(e,t,n){var a;if(0!==(null===(a=n.target.files)||void 0===a?void 0:a.length)){var r=f(f({},t),{},{isFile:!0,value:Array.from(n.target.files)});d(e,r)}else d(e,f(f({},t),{},{isFile:!1,value:""}))}}}};v.components=Object.assign({draggable:s.a},v.components);var y=v,m=(n(2021),n(23)),b=Object(m.a)(y,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"sticky z-10 flex items-center justify-between pl-4 border-b bg-primary border-dividerLight top-upperMobileRawStickyFold sm:top-upperMobileRawTertiaryStickyFold"},[n("label",{staticClass:"font-semibold text-secondaryLight"},[e._v("\n      "+e._s(e.$t("request.body"))+"\n    ")]),e._v(" "),n("div",{staticClass:"flex"},[n("ButtonSecondary",{directives:[{name:"tippy",rawName:"v-tippy",value:{theme:"tooltip"},expression:"{ theme: 'tooltip' }"}],attrs:{to:"https://docs.hoppscotch.io/features/body",blank:"",title:e.$t("app.wiki"),svg:"help-circle"}}),e._v(" "),n("ButtonSecondary",{directives:[{name:"tippy",rawName:"v-tippy",value:{theme:"tooltip"},expression:"{ theme: 'tooltip' }"}],attrs:{title:e.$t("action.clear_all"),svg:"trash-2"},nativeOn:{click:function(t){return e.clearContent.apply(null,arguments)}}}),e._v(" "),n("ButtonSecondary",{directives:[{name:"tippy",rawName:"v-tippy",value:{theme:"tooltip"},expression:"{ theme: 'tooltip' }"}],attrs:{title:e.$t("add.new"),svg:"plus"},nativeOn:{click:function(t){return e.addBodyParam.apply(null,arguments)}}})],1)]),e._v(" "),n("draggable",{attrs:{animation:"250",handle:".draggable-handle",draggable:".draggable-content","ghost-class":"cursor-move","chosen-class":"bg-primaryLight","drag-class":"cursor-grabbing"},model:{value:e.workingParams,callback:function(t){e.workingParams=t},expression:"workingParams"}},e._l(e.workingParams,(function(t,a){var r;return n("div",{key:"param-"+a,staticClass:"flex border-b divide-x divide-dividerLight border-dividerLight draggable-content group"},[n("span",[n("ButtonSecondary",{staticClass:"cursor-auto text-primary hover:text-primary",class:{"draggable-handle group-hover:text-secondaryLight !cursor-grab":a!==(null===(r=e.workingParams)||void 0===r?void 0:r.length)-1},attrs:{svg:"grip-vertical",tabindex:"-1"}})],1),e._v(" "),n("SmartEnvInput",{attrs:{placeholder:""+e.$t("count.parameter",{count:a+1})},on:{change:function(n){return e.updateBodyParam(a,{key:n,value:t.value,active:t.active,isFile:t.isFile})}},model:{value:t.key,callback:function(n){e.$set(t,"key",n)},expression:"param.key"}}),e._v(" "),t.isFile?n("div",{staticClass:"file-chips-container hide-scrollbar"},[n("div",{staticClass:"space-x-2 file-chips-wrapper"},e._l(t.value,(function(t,r){return n("SmartFileChip",{key:"param-"+a+"-file-"+r},[e._v(e._s(t.name))])})),1)]):n("span",{staticClass:"flex flex-1"},[n("SmartEnvInput",{attrs:{placeholder:""+e.$t("count.value",{count:a+1})},on:{change:function(n){return e.updateBodyParam(a,{key:t.key,value:n,active:t.active,isFile:t.isFile})}},model:{value:t.value,callback:function(n){e.$set(t,"value",n)},expression:"param.value"}})],1),e._v(" "),n("span",[n("label",{staticClass:"p-0",attrs:{for:"attachment"+a}},[n("input",{ref:"attachment"+a,refInFor:!0,staticClass:"p-1 cursor-pointer transition file:transition file:cursor-pointer text-secondaryLight hover:text-secondaryDark file:mr-2 file:py-1 file:px-4 file:rounded file:border-0 file:text-tiny text-tiny file:text-secondary hover:file:text-secondaryDark file:bg-primaryLight hover:file:bg-primaryDark",attrs:{id:"attachment"+a,name:"attachment"+a,type:"file",multiple:""},on:{change:function(n){return e.setRequestAttachment(a,t,n)}}})])]),e._v(" "),n("span",[n("ButtonSecondary",{directives:[{name:"tippy",rawName:"v-tippy",value:{theme:"tooltip"},expression:"{ theme: 'tooltip' }"}],attrs:{title:t.hasOwnProperty("active")?t.active?e.$t("action.turn_off"):e.$t("action.turn_on"):e.$t("action.turn_off"),svg:t.hasOwnProperty("active")?t.active?"check-circle":"circle":"check-circle",color:"green"},nativeOn:{click:function(n){e.updateBodyParam(a,{key:t.key,value:t.value,active:!!t.hasOwnProperty("active")&&!t.active,isFile:t.isFile})}}})],1),e._v(" "),n("span",[n("ButtonSecondary",{directives:[{name:"tippy",rawName:"v-tippy",value:{theme:"tooltip"},expression:"{ theme: 'tooltip' }"}],attrs:{title:e.$t("action.remove"),svg:"trash",color:"red"},nativeOn:{click:function(t){return e.deleteBodyParam(a)}}})],1)],1)})),0),e._v(" "),0===e.workingParams.length?n("div",{staticClass:"flex flex-col items-center justify-center p-4 text-secondaryLight"},[n("img",{staticClass:"inline-flex flex-col object-contain object-center w-16 h-16 my-4",attrs:{src:"/images/states/"+e.$colorMode.value+"/upload_single_file.svg",loading:"lazy",alt:""+e.$t("empty.body")}}),e._v(" "),n("span",{staticClass:"pb-4 text-center"},[e._v(e._s(e.$t("empty.body")))]),e._v(" "),n("ButtonSecondary",{staticClass:"mb-4",attrs:{label:""+e.$t("add.new"),filled:"",svg:"plus"},nativeOn:{click:function(t){return e.addBodyParam.apply(null,arguments)}}})],1):e._e()],1)}),[],!1,null,"24103cd6",null);t.default=b.exports;installComponents(b,{ButtonSecondary:n(106).default,SmartEnvInput:n(940).default,SmartFileChip:n(2019).default})},2050:function(e,t,n){"use strict";n.r(t);n(11),n(10),n(12),n(5),n(15),n(8),n(14);var a=n(34),r=(n(61),n(3)),i=n(363),o=n.n(i),c=n(74),l=n(1),s=n(87),u=n(53),p=n(58),d=n(16),f=n(232),v=n(1231),y=n.n(v),m=n(939),b=n(1918),h=n(113),g=n(24),O=n(983),x=n(975);function w(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}var k={};k.setup=function(e,t){var n=Object(g.d)(),i=Object(g.j)(),v=Object(r.o)(0),y=Object(r.o)(!1),k=Object(r.o)(""),j=Object(r.o)(null),_=Object(r.o)(null);Object(m.a)(j,k,{extendedEditorConfig:{mode:"text/x-yaml",placeholder:"".concat(n("state.bulk_mode_placeholder"))},linter:b.a,completer:null,environmentHighlights:!0});var C=Object(g.a)(Object(h.D)(),"body"),P=Object(r.a)({get:function(){return Object(c.parseRawKeyValueEntries)(C.value)},set:function(e){C.value=Object(c.rawKeyValueEntriesToString)(e)}}),S=Object(r.o)([{id:v.value++,key:"",value:"",active:!0}]);Object(r.y)(S,(function(e){e.length>0&&""!==e[e.length-1].key&&S.value.push({id:v.value++,key:"",value:"",active:!0})})),Object(r.y)(P,(function(e){var t=Object(l.pipe)(S.value,s.filterMap(Object(l.flow)(u.fromPredicate((function(e){return""!==e.key})),u.map(Object(O.d)("id"))))),n=Object(l.pipe)(Object(c.parseRawKeyValueEntriesE)(k.value),d.map(Object(l.flow)(p.filter((function(e){return""!==e.key})),p.toArray)));o()(e,t)||(S.value=Object(l.pipe)(e,s.map((function(e){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?w(Object(n),!0).forEach((function(t){Object(a.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):w(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({id:v.value++},e)})))),o()(e,n)||(k.value=Object(c.rawKeyValueEntriesToString)(e))}),{immediate:!0}),Object(r.y)(S,(function(e){var t=Object(l.pipe)(e,s.filterMap(Object(l.flow)(u.fromPredicate((function(e){return""!==e.key})),u.map(Object(O.d)("id")))));o()(P.value,t)||(P.value=t)})),Object(r.y)(k,(function(e){var t=Object(l.pipe)(Object(c.parseRawKeyValueEntriesE)(e),d.map(Object(l.flow)(p.filter((function(e){return""!==e.key})),p.toArray)),d.getOrElse((function(){return[]})));o()(P.value,t)||(P.value=t)}));return{t:n,bulkMode:y,bulkEditor:j,workingUrlEncodedParams:S,addUrlEncodedParam:function(){S.value.push({id:v.value++,key:"",value:"",active:!0})},updateUrlEncodedParam:function(e,t){S.value=S.value.map((function(n,a){return a===e?t:n}))},deleteUrlEncodedParam:function(e){var t=Object(f.cloneDeep)(S.value);t.length>0&&e===t.length-1||(_.value&&(_.value.goAway(0),_.value=null),_.value=i.success("".concat(n("state.deleted")),{action:[{text:"".concat(n("action.undo")),onClick:function(e,n){S.value=t,n.goAway(0),_.value=null}}],onComplete:function(){_.value=null}})),S.value=Object(l.pipe)(S.value,s.deleteAt(e),u.getOrElseW((function(){return Object(x.a)("Working URL Encoded Params Deletion Out of Bounds")})))},clearContent:function(){S.value=[{id:v.value++,key:"",value:"",active:!0}],k.value=""}}},k.components=Object.assign({draggable:y.a},k.components);var j=k,_=n(23),C=Object(_.a)(j,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"flex flex-col flex-1"},[n("div",{staticClass:"sticky z-10 flex items-center justify-between pl-4 border-b bg-primary border-dividerLight top-upperMobileRawStickyFold sm:top-upperMobileRawTertiaryStickyFold"},[n("label",{staticClass:"font-semibold text-secondaryLight"},[e._v("\n      "+e._s(e.t("request.body"))+"\n    ")]),e._v(" "),n("div",{staticClass:"flex"},[n("ButtonSecondary",{directives:[{name:"tippy",rawName:"v-tippy",value:{theme:"tooltip"},expression:"{ theme: 'tooltip' }"}],attrs:{to:"https://docs.hoppscotch.io/features/body",blank:"",title:e.t("app.wiki"),svg:"help-circle"}}),e._v(" "),n("ButtonSecondary",{directives:[{name:"tippy",rawName:"v-tippy",value:{theme:"tooltip"},expression:"{ theme: 'tooltip' }"}],attrs:{title:e.t("action.clear_all"),svg:"trash-2"},nativeOn:{click:function(t){return e.clearContent()}}}),e._v(" "),n("ButtonSecondary",{directives:[{name:"tippy",rawName:"v-tippy",value:{theme:"tooltip"},expression:"{ theme: 'tooltip' }"}],class:{"!text-accent":e.bulkMode},attrs:{title:e.t("state.bulk_mode"),svg:"edit"},nativeOn:{click:function(t){e.bulkMode=!e.bulkMode}}}),e._v(" "),n("ButtonSecondary",{directives:[{name:"tippy",rawName:"v-tippy",value:{theme:"tooltip"},expression:"{ theme: 'tooltip' }"}],attrs:{title:e.t("add.new"),svg:"plus",disabled:e.bulkMode},nativeOn:{click:function(t){return e.addUrlEncodedParam.apply(null,arguments)}}})],1)]),e._v(" "),e.bulkMode?n("div",{ref:"bulkEditor",staticClass:"flex flex-col flex-1"}):n("div",[n("draggable",{attrs:{animation:"250",handle:".draggable-handle",draggable:".draggable-content","ghost-class":"cursor-move","chosen-class":"bg-primaryLight","drag-class":"cursor-grabbing"},model:{value:e.workingUrlEncodedParams,callback:function(t){e.workingUrlEncodedParams=t},expression:"workingUrlEncodedParams"}},e._l(e.workingUrlEncodedParams,(function(t,a){var r;return n("div",{key:"param-"+t.id+"-"+a,staticClass:"flex border-b divide-x divide-dividerLight border-dividerLight draggable-content group"},[n("span",[n("ButtonSecondary",{staticClass:"cursor-auto text-primary hover:text-primary",class:{"draggable-handle group-hover:text-secondaryLight !cursor-grab":a!==(null===(r=e.workingUrlEncodedParams)||void 0===r?void 0:r.length)-1},attrs:{svg:"grip-vertical",tabindex:"-1"}})],1),e._v(" "),n("SmartEnvInput",{attrs:{placeholder:""+e.t("count.parameter",{count:a+1})},on:{change:function(n){return e.updateUrlEncodedParam(a,{id:t.id,key:n,value:t.value,active:t.active})}},model:{value:t.key,callback:function(n){e.$set(t,"key",n)},expression:"param.key"}}),e._v(" "),n("SmartEnvInput",{attrs:{placeholder:""+e.t("count.value",{count:a+1})},on:{change:function(n){return e.updateUrlEncodedParam(a,{id:t.id,key:t.key,value:n,active:t.active})}},model:{value:t.value,callback:function(n){e.$set(t,"value",n)},expression:"param.value"}}),e._v(" "),n("span",[n("ButtonSecondary",{directives:[{name:"tippy",rawName:"v-tippy",value:{theme:"tooltip"},expression:"{ theme: 'tooltip' }"}],attrs:{title:t.hasOwnProperty("active")?t.active?e.t("action.turn_off"):e.t("action.turn_on"):e.t("action.turn_off"),svg:t.hasOwnProperty("active")?t.active?"check-circle":"circle":"check-circle",color:"green"},nativeOn:{click:function(n){return e.updateUrlEncodedParam(a,{id:t.id,key:t.key,value:t.value,active:!t.active})}}})],1),e._v(" "),n("span",[n("ButtonSecondary",{directives:[{name:"tippy",rawName:"v-tippy",value:{theme:"tooltip"},expression:"{ theme: 'tooltip' }"}],attrs:{title:e.t("action.remove"),svg:"trash",color:"red"},nativeOn:{click:function(t){return e.deleteUrlEncodedParam(a)}}})],1)],1)})),0),e._v(" "),0===e.workingUrlEncodedParams.length?n("div",{staticClass:"flex flex-col items-center justify-center p-4 text-secondaryLight"},[n("img",{staticClass:"inline-flex flex-col object-contain object-center w-16 h-16 my-4",attrs:{src:"/images/states/"+e.$colorMode.value+"/add_category.svg",loading:"lazy",alt:""+e.t("empty.body")}}),e._v(" "),n("span",{staticClass:"pb-4 text-center"},[e._v("\n        "+e._s(e.t("empty.body"))+"\n      ")]),e._v(" "),n("ButtonSecondary",{staticClass:"mb-4",attrs:{filled:"",label:""+e.t("add.new"),svg:"plus"},nativeOn:{click:function(t){return e.addUrlEncodedParam.apply(null,arguments)}}})],1):e._e()],1)])}),[],!1,null,null,null);t.default=C.exports;installComponents(C,{ButtonSecondary:n(106).default,SmartEnvInput:n(940).default})},2247:function(e,t,n){"use strict";n.r(t);n(11);var a=n(3),r=n(1),i=n(87),o=n(53),c=n(24),l=n(945),s=n(113),u={setup:function(e,t){var n=t.emit,u=Object.keys(l.b),p=Object(c.h)(s.j,null,s.t),d=Object(c.h)(s.l,[],s.v),f=Object(a.a)((function(){return Object(r.pipe)(d.value,i.findLast((function(e){return"content-type"===e.key.toLowerCase()&&e.active})),o.map((function(e){return e.value})),o.getOrElse((function(){return""})))})),v=function(){return Object(r.pipe)(d.value,i.some((function(e){return"content-type"===e.key.toLowerCase()})))};return{validContentTypes:u,contentType:p,overridenContentType:f,contentTypeOverride:function(e){n("change-tab",e),v()||Object(s.a)({key:"Content-Type",value:"",active:!0})}}}},p=u,d=n(23),f=Object(d.a)(p,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"flex flex-col flex-1"},[n("div",{staticClass:"sticky z-10 flex items-center justify-between pl-4 border-b bg-primary border-dividerLight top-upperMobileSecondaryStickyFold sm:top-upperSecondaryStickyFold"},[n("span",{staticClass:"flex items-center"},[n("label",{staticClass:"font-semibold text-secondaryLight"},[e._v("\n        "+e._s(e.$t("request.content_type"))+"\n      ")]),e._v(" "),n("tippy",{ref:"contentTypeOptions",attrs:{interactive:"",trigger:"click",theme:"popover",arrow:""},scopedSlots:e._u([{key:"trigger",fn:function(){return[n("span",{staticClass:"select-wrapper"},[n("ButtonSecondary",{staticClass:"pr-8 ml-2 rounded-none",attrs:{label:e.contentType||e.$t("state.none").toLowerCase()}})],1)]},proxy:!0}])},[e._v(" "),n("div",{staticClass:"flex flex-col",attrs:{role:"menu"}},[n("SmartItem",{attrs:{label:e.$t("state.none").toLowerCase(),"info-icon":null===e.contentType?"done":"","active-info-icon":null===e.contentType},nativeOn:{click:function(t){return function(){e.contentType=null,e.$refs.contentTypeOptions.tippy().hide()}.apply(null,arguments)}}}),e._v(" "),e._l(e.validContentTypes,(function(t,a){return n("SmartItem",{key:"contentTypeItem-"+a,attrs:{label:t,"info-icon":t===e.contentType?"done":"","active-info-icon":t===e.contentType},nativeOn:{click:function(n){return function(){e.contentType=t,e.$refs.contentTypeOptions.tippy().hide()}.apply(null,arguments)}}})}))],2)]),e._v(" "),n("ButtonSecondary",{directives:[{name:"tippy",rawName:"v-tippy",value:{theme:"tooltip",allowHTML:!0},expression:"{ theme: 'tooltip', allowHTML: true }"}],class:["!px-1 !py-0.5",{"text-yellow-500 hover:text-yellow-500":e.overridenContentType}],attrs:{title:e.$t("request.override_help"),label:e.overridenContentType?e.$t("request.overriden")+": "+e.overridenContentType:e.$t("request.override"),svg:e.overridenContentType?"info":"refresh-cw",filled:"",outline:""},nativeOn:{click:function(t){return e.contentTypeOverride("headers")}}})],1)]),e._v(" "),"multipart/form-data"===e.contentType?n("HttpBodyParameters"):"application/x-www-form-urlencoded"===e.contentType?n("HttpURLEncodedParams"):null!==e.contentType?n("HttpRawBody",{attrs:{"content-type":e.contentType}}):e._e(),e._v(" "),null==e.contentType?n("div",{staticClass:"flex flex-col items-center justify-center p-4 text-secondaryLight"},[n("img",{staticClass:"inline-flex flex-col object-contain object-center w-16 h-16 my-4",attrs:{src:"/images/states/"+e.$colorMode.value+"/upload_single_file.svg",loading:"lazy",alt:""+e.$t("empty.body")}}),e._v(" "),n("span",{staticClass:"pb-4 text-center"},[e._v(e._s(e.$t("empty.body")))]),e._v(" "),n("ButtonSecondary",{staticClass:"mb-4",attrs:{outline:"",label:""+e.$t("app.documentation"),to:"https://docs.hoppscotch.io/features/body",blank:"",svg:"external-link",reverse:""}})],1):e._e()],1)}),[],!1,null,null,null);t.default=f.exports;installComponents(f,{ButtonSecondary:n(106).default,SmartItem:n(123).default,HttpBodyParameters:n(2049).default,HttpURLEncodedParams:n(2050).default,HttpRawBody:n(2048).default})},986:function(e,t,n){"use strict";n.d(t,"c",(function(){return E})),n.d(t,"b",(function(){return B})),n.d(t,"e",(function(){return T})),n.d(t,"g",(function(){return $})),n.d(t,"d",(function(){return F})),n.d(t,"f",(function(){return L})),n.d(t,"a",(function(){return N}));var a=n(36),r=(n(59),n(184)),i=n(203),o=(n(146),n(239),n(1)),c=n(49),l=n(9),s=n(53);function u(e){return Object(o.flow)(s.some,e.of)}function p(e){return Object(o.constant)(e.of(s.none))}function d(e){return function(t){return e.map(t,s.some)}}function f(e){return Object(o.flow)(s.fromNullable,e.of)}function v(e){var t=f(e);return function(e){return Object(o.flow)(e,t)}}function y(e){var t=_(e),n=v(e);return function(e){return t(n(e))}}function m(e){return function(t){return Object(o.flow)(t,e.of)}}function b(e){var t=_(e),n=m(e);return function(e){return t(n(e))}}function h(e){return function(t){return function(n){return e.of(s.fromPredicate(t)(n))}}}function g(e){return Object(o.flow)(s.fromEither,e.of)}function O(e){return function(t,n){return function(a){return e.map(a,s.match(t,n))}}}function x(e){return function(t,n){return function(a){return e.chain(a,s.match(t,n))}}}function w(e){return function(t){return function(n){return e.chain(n,s.match(t,e.of))}}}function k(e){return Object(c.d)(e,s.Functor)}function j(e){return Object(a.a)(e,s.Apply)}function _(e){var t=p(e);return function(n){return function(a){return e.chain(a,s.match((function(){return t()}),n))}}}function C(e){var t=u(e);return function(n){return function(a){return e.chain(a,s.match(n,t))}}}var P=n(43),S=(n(183),u(P.g)),E=h(P.g),B=P.k,T=(P.g,P.e,s.fromEither,O(P.e)),$=(P.d,P.f,P.g,function(e){return function(){return e().then((function(e){return s.some(e)}),(function(){return s.none}))}}),F=(P.g,P.f,P.g,P.f,k(P.e)),L=(P.b,S),N=_(P.f),M=(o.identity,P.f,P.g,P.e,s.Compactable,P.e,s.Compactable,s.Functor,P.e,s.Filterable,P.e,s.Filterable,P.e,s.Filterable,P.e,s.Filterable,l.b,L(l.a)),R=function(e){var t=function(e){return Object(o.flow)(P.m(e),P.j(s.traverseReadonlyNonEmptyArrayWithIndex(o.SK)))}(e);return function(e){return l.g(e)?t(e):M}},U=function(e){var t=function(e){return function(t){return function(){return l.p(t).reduce((function(t,n,a){return t.then((function(r){return l.h(r)?t:e(a+1,n)().then((function(e){return l.h(e)?e:(r.value.push(e.value),r)}))}))}),e(0,l.e(t))().then(s.map(l.n)))}}}(e);return function(e){return l.g(e)?t(e):M}};o.identity,o.identity}}]);