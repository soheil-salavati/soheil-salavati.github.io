(window.webpackJsonp=window.webpackJsonp||[]).push([[68,103,105],{1069:function(e,t,r){"use strict";var o=r(26),a=r(28),n=r(46),c=r(42),l=r(107),i=r(66),d=r(299),s=r(82),u=r(159),v=r(300),p=r(505),m=r(65),f=r(126),b=m("replace"),g=RegExp.prototype,y=a.TypeError,h=c(v),k=c("".indexOf),x=c("".replace),w=c("".slice),O=Math.max,j=function(e,t,r){return r>e.length?-1:""===t?r:k(e,t,r)};o({target:"String",proto:!0},{replaceAll:function(e,t){var r,o,a,c,v,m,C,_,B,S=l(this),P=0,F=0,E="";if(null!=e){if((r=d(e))&&(o=s(l("flags"in g?e.flags:h(e))),!~k(o,"g")))throw y("`.replaceAll` does not allow non-global regexes");if(a=u(e,b))return n(a,e,S,t);if(f&&r)return x(s(S),e,t)}for(c=s(S),v=s(e),(m=i(t))||(t=s(t)),C=v.length,_=O(1,C),P=j(c,v,0);-1!==P;)B=m?s(t(v,P,c)):p(v,c,P,[],void 0,t),E+=w(c,F,P)+B,F=P+C,P=j(c,v,P+_);return F<c.length&&(E+=w(c,F)),E}})},1866:function(e,t,r){var o=r(1979);o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);(0,r(116).default)("208e67fa",o,!0,{sourceMap:!1})},1954:function(e,t,r){var o=r(2022);o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);(0,r(116).default)("755a98b0",o,!0,{sourceMap:!1})},1978:function(e,t,r){"use strict";r(1866)},1979:function(e,t,r){var o=r(115)(!1);o.push([e.i,".chip[data-v-b459a34e] {\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: -webkit-inline-flex;\n  display: inline-flex;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  -webkit-align-items: center;\n  align-items: center;\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n  -webkit-justify-content: center;\n  justify-content: center;\n  border-radius: 0.25rem;\n  padding-left: 0.5rem;\n  padding-right: 0.125rem;\n  background-color: var(--primary-dark-color);\n}",""]),e.exports=o},2019:function(e,t,r){"use strict";r.r(t);r(1978);var o=r(23),a=Object(o.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("span",{staticClass:"chip"},[r("i",{staticClass:"opacity-75 material-icons"},[e._v("attachment")]),e._v(" "),r("span",{staticClass:"px-2 truncate max-w-32"},[e._t("default")],2)])}),[],!1,null,"b459a34e",null);t.default=a.exports},2021:function(e,t,r){"use strict";r(1954)},2022:function(e,t,r){var o=r(115)(!1);o.push([e.i,".file-chips-container[data-v-24103cd6] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-flex: 1;\n  -ms-flex: 1 1 0%;\n  -webkit-flex: 1 1 0%;\n  flex: 1 1 0%;\n  white-space: nowrap;\n  overflow: auto;\n  background-color: transparent;\n}\n.file-chips-container .file-chips-wrapper[data-v-24103cd6] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: -webkit-flex;\n  display: flex;\n  padding: 0.25rem;\n  width: 0px;\n}",""]),e.exports=o},2049:function(e,t,r){"use strict";r.r(t);r(11),r(10),r(15),r(8),r(14);var o=r(34),a=(r(12),r(5),r(61),r(181),r(98),r(78),r(3)),n=r(363),c=r.n(n),l=r(232),i=r(1231),d=r.n(i),s=r(24),u=r(113);function v(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?v(Object(r),!0).forEach((function(t){Object(o.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):v(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var m={setup:function(e,t){var r=Object(s.d)(),o=Object(s.j)(),n=Object(a.o)(null),i=Object(s.a)(Object(u.D)(),"body"),d=Object(a.o)([{key:"",value:"",active:!0,isFile:!1}]);Object(a.y)(d,(function(e){e.length>0&&""!==e[e.length-1].key&&d.value.push({key:"",value:"",active:!0,isFile:!1})})),Object(a.y)(i,(function(e){var t=d.value.filter((function(e){return""!==e.key}));c()(e,t)||(d.value=e)}),{immediate:!0}),Object(a.y)(d,(function(e){var t=e.filter((function(e){return""!==e.key}));c()(i.value,t)||(i.value=t)}));var v=function(e,t){d.value=d.value.map((function(r,o){return o===e?t:r}))};return{workingParams:d,addBodyParam:function(){d.value.push({key:"",value:"",active:!0,isFile:!1})},updateBodyParam:v,deleteBodyParam:function(e){var t=Object(l.clone)(d.value);t.length>0&&e===t.length-1||(n.value&&(n.value.goAway(0),n.value=null),n.value=o.success("".concat(r("state.deleted")),{action:[{text:"".concat(r("action.undo")),onClick:function(e,r){d.value=t,r.goAway(0),n.value=null}}],onComplete:function(){n.value=null}})),d.value.splice(e,1)},clearContent:function(){d.value=[{key:"",value:"",active:!0,isFile:!1}]},setRequestAttachment:function(e,t,r){var o;if(0!==(null===(o=r.target.files)||void 0===o?void 0:o.length)){var a=p(p({},t),{},{isFile:!0,value:Array.from(r.target.files)});v(e,a)}else v(e,p(p({},t),{},{isFile:!1,value:""}))}}}};m.components=Object.assign({draggable:d.a},m.components);var f=m,b=(r(2021),r(23)),g=Object(b.a)(f,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{staticClass:"sticky z-10 flex items-center justify-between pl-4 border-b bg-primary border-dividerLight top-upperMobileRawStickyFold sm:top-upperMobileRawTertiaryStickyFold"},[r("label",{staticClass:"font-semibold text-secondaryLight"},[e._v("\n      "+e._s(e.$t("request.body"))+"\n    ")]),e._v(" "),r("div",{staticClass:"flex"},[r("ButtonSecondary",{directives:[{name:"tippy",rawName:"v-tippy",value:{theme:"tooltip"},expression:"{ theme: 'tooltip' }"}],attrs:{to:"https://docs.hoppscotch.io/features/body",blank:"",title:e.$t("app.wiki"),svg:"help-circle"}}),e._v(" "),r("ButtonSecondary",{directives:[{name:"tippy",rawName:"v-tippy",value:{theme:"tooltip"},expression:"{ theme: 'tooltip' }"}],attrs:{title:e.$t("action.clear_all"),svg:"trash-2"},nativeOn:{click:function(t){return e.clearContent.apply(null,arguments)}}}),e._v(" "),r("ButtonSecondary",{directives:[{name:"tippy",rawName:"v-tippy",value:{theme:"tooltip"},expression:"{ theme: 'tooltip' }"}],attrs:{title:e.$t("add.new"),svg:"plus"},nativeOn:{click:function(t){return e.addBodyParam.apply(null,arguments)}}})],1)]),e._v(" "),r("draggable",{attrs:{animation:"250",handle:".draggable-handle",draggable:".draggable-content","ghost-class":"cursor-move","chosen-class":"bg-primaryLight","drag-class":"cursor-grabbing"},model:{value:e.workingParams,callback:function(t){e.workingParams=t},expression:"workingParams"}},e._l(e.workingParams,(function(t,o){var a;return r("div",{key:"param-"+o,staticClass:"flex border-b divide-x divide-dividerLight border-dividerLight draggable-content group"},[r("span",[r("ButtonSecondary",{staticClass:"cursor-auto text-primary hover:text-primary",class:{"draggable-handle group-hover:text-secondaryLight !cursor-grab":o!==(null===(a=e.workingParams)||void 0===a?void 0:a.length)-1},attrs:{svg:"grip-vertical",tabindex:"-1"}})],1),e._v(" "),r("SmartEnvInput",{attrs:{placeholder:""+e.$t("count.parameter",{count:o+1})},on:{change:function(r){return e.updateBodyParam(o,{key:r,value:t.value,active:t.active,isFile:t.isFile})}},model:{value:t.key,callback:function(r){e.$set(t,"key",r)},expression:"param.key"}}),e._v(" "),t.isFile?r("div",{staticClass:"file-chips-container hide-scrollbar"},[r("div",{staticClass:"space-x-2 file-chips-wrapper"},e._l(t.value,(function(t,a){return r("SmartFileChip",{key:"param-"+o+"-file-"+a},[e._v(e._s(t.name))])})),1)]):r("span",{staticClass:"flex flex-1"},[r("SmartEnvInput",{attrs:{placeholder:""+e.$t("count.value",{count:o+1})},on:{change:function(r){return e.updateBodyParam(o,{key:t.key,value:r,active:t.active,isFile:t.isFile})}},model:{value:t.value,callback:function(r){e.$set(t,"value",r)},expression:"param.value"}})],1),e._v(" "),r("span",[r("label",{staticClass:"p-0",attrs:{for:"attachment"+o}},[r("input",{ref:"attachment"+o,refInFor:!0,staticClass:"p-1 cursor-pointer transition file:transition file:cursor-pointer text-secondaryLight hover:text-secondaryDark file:mr-2 file:py-1 file:px-4 file:rounded file:border-0 file:text-tiny text-tiny file:text-secondary hover:file:text-secondaryDark file:bg-primaryLight hover:file:bg-primaryDark",attrs:{id:"attachment"+o,name:"attachment"+o,type:"file",multiple:""},on:{change:function(r){return e.setRequestAttachment(o,t,r)}}})])]),e._v(" "),r("span",[r("ButtonSecondary",{directives:[{name:"tippy",rawName:"v-tippy",value:{theme:"tooltip"},expression:"{ theme: 'tooltip' }"}],attrs:{title:t.hasOwnProperty("active")?t.active?e.$t("action.turn_off"):e.$t("action.turn_on"):e.$t("action.turn_off"),svg:t.hasOwnProperty("active")?t.active?"check-circle":"circle":"check-circle",color:"green"},nativeOn:{click:function(r){e.updateBodyParam(o,{key:t.key,value:t.value,active:!!t.hasOwnProperty("active")&&!t.active,isFile:t.isFile})}}})],1),e._v(" "),r("span",[r("ButtonSecondary",{directives:[{name:"tippy",rawName:"v-tippy",value:{theme:"tooltip"},expression:"{ theme: 'tooltip' }"}],attrs:{title:e.$t("action.remove"),svg:"trash",color:"red"},nativeOn:{click:function(t){return e.deleteBodyParam(o)}}})],1)],1)})),0),e._v(" "),0===e.workingParams.length?r("div",{staticClass:"flex flex-col items-center justify-center p-4 text-secondaryLight"},[r("img",{staticClass:"inline-flex flex-col object-contain object-center w-16 h-16 my-4",attrs:{src:"/images/states/"+e.$colorMode.value+"/upload_single_file.svg",loading:"lazy",alt:""+e.$t("empty.body")}}),e._v(" "),r("span",{staticClass:"pb-4 text-center"},[e._v(e._s(e.$t("empty.body")))]),e._v(" "),r("ButtonSecondary",{staticClass:"mb-4",attrs:{label:""+e.$t("add.new"),filled:"",svg:"plus"},nativeOn:{click:function(t){return e.addBodyParam.apply(null,arguments)}}})],1):e._e()],1)}),[],!1,null,"24103cd6",null);t.default=g.exports;installComponents(g,{ButtonSecondary:r(106).default,SmartEnvInput:r(940).default,SmartFileChip:r(2019).default})},917:function(e,t,r){"use strict";r.d(t,"b",(function(){return h})),r.d(t,"d",(function(){return k})),r.d(t,"a",(function(){return O})),r.d(t,"c",(function(){return j}));var o=r(39),a=(r(56),r(1085),r(13),r(880)),n=r(946),c=r(1087),l=r(885),i=r(1086),d=r(904),s=r(1072),u=r(979),v=r(1078),p=r(1088),m=r(1090),f=r(974),b=r(1091),g=r(1089),y=r(980),h=a.d.theme({"&":{fontSize:"var(--font-size-body)",height:"100%",width:"100%",flex:"1"},".cm-content":{caretColor:"var(--secondary-dark-color)",fontFamily:"var(--font-mono)",backgroundColor:"var(--primary-color)"},".cm-cursor":{borderColor:"var(--secondary-color)"},".cm-widgetBuffer":{position:"absolute"},".cm-selectionBackground":{backgroundColor:"var(--accent-dark-color)",color:"var(--accent-contrast-color)"},".cm-panels":{backgroundColor:"var(--primary-light-color)",color:"var(--secondary-light-color)"},".cm-panels.cm-panels-top":{borderBottom:"1px solid var(--divider-light-color)"},".cm-panels.cm-panels-bottom":{borderTop:"1px solid var(--divider-light-color)"},".cm-search":{display:"flex",alignItems:"center",flexWrap:"nowrap",flexShrink:0,overflow:"auto"},".cm-search label":{display:"inline-flex",alignItems:"center"},".cm-textfield":{backgroundColor:"var(--primary-dark-color)",color:"var(--secondary-dark-color)",borderColor:"var(--divider-light-color)",borderRadius:"3px"},".cm-button":{backgroundColor:"var(--primary-dark-color)",color:"var(--secondary-dark-color)",backgroundImage:"none",border:"none"},".cm-completionLabel":{color:"var(--secondary-color)"},".cm-tooltip":{backgroundColor:"var(--primary-dark-color)",color:"var(--secondary-light-color)",border:"none",borderRadius:"3px"},".cm-tooltip-arrow:after":{borderColor:"transparent !important"},".cm-tooltip-arrow:before":{borderColor:"transparent !important"},".cm-tooltip.cm-tooltip-autocomplete > ul":{fontFamily:"var(--font-mono)"},".cm-tooltip-autocomplete ul li[aria-selected]":{backgroundColor:"var(--accent-dark-color)",color:"var(--accent-contrast-color)"},".cm-tooltip-autocomplete ul li[aria-selected] .cm-completionLabel":{color:"var(--accent-contrast-color)"},".cm-activeLine":{backgroundColor:"transparent"},".cm-searchMatch":{outline:"1px solid var(--accent-dark-color)",backgroundColor:"var(--divider-dark-color)"},".cm-selectionMatch":{outline:"1px solid var(--accent-dark-color)",backgroundColor:"var(--divider-light-color)"},".cm-matchingBracket, .cm-nonmatchingBracket":{backgroundColor:"var(--divider-color)",outline:"1px solid var(--accent-dark-color)"},".cm-gutters":{fontFamily:"var(--font-mono)",backgroundColor:"var(--primary-color)",borderColor:"var(--divider-light-color)"},".cm-lineNumbers":{minWidth:"3em",color:"var(--secondary-light-color)"},".cm-foldGutter":{minWidth:"2em",color:"var(--secondary-light-color)"},".cm-foldGutter .cm-gutterElement":{textAlign:"center"},".cm-line":{paddingLeft:"0.5em",paddingRight:"0.5em"},".cm-activeLineGutter":{backgroundColor:"transparent"},".cm-scroller::-webkit-scrollbar":{display:"none"},".cm-foldPlaceholder":{backgroundColor:"var(--divider-light-color)",color:"var(--secondary-dark-color)",borderColor:"var(--divider-dark-color)"}}),k=a.d.theme({"&":{fontSize:"var(--font-size-body)",height:"100%",width:"100%",flex:"1"},".cm-content":{caretColor:"var(--secondary-dark-color)",fontFamily:"var(--font-sans)",color:"var(--secondary-dark-color)",backgroundColor:"transparent"},".cm-cursor":{borderColor:"var(--secondary-color)"},".cm-widgetBuffer":{position:"absolute"},".cm-selectionBackground":{backgroundColor:"var(--accent-dark-color)",color:"var(--accent-contrast-color)"},".cm-panels":{backgroundColor:"var(--primary-light-color)",color:"var(--secondary-light-color)"},".cm-panels.cm-panels-top":{borderBottom:"1px solid var(--divider-light-color)"},".cm-panels.cm-panels-bottom":{borderTop:"1px solid var(--divider-light-color)"},".cm-search":{display:"flex",alignItems:"center",flexWrap:"nowrap",flexShrink:0,overflow:"auto"},".cm-search label":{display:"inline-flex",alignItems:"center"},".cm-textfield":{backgroundColor:"var(--primary-dark-color)",color:"var(--secondary-dark-color)",borderColor:"var(--divider-light-color)",borderRadius:"3px"},".cm-button":{backgroundColor:"var(--primary-dark-color)",color:"var(--secondary-dark-color)",backgroundImage:"none",border:"none"},".cm-completionLabel":{color:"var(--secondary-color)"},".cm-tooltip":{backgroundColor:"var(--primary-dark-color)",color:"var(--secondary-light-color)",border:"none",borderRadius:"3px"},".cm-tooltip-arrow:after":{borderColor:"transparent !important"},".cm-tooltip-arrow:before":{borderColor:"transparent !important"},".cm-tooltip.cm-tooltip-autocomplete > ul":{fontFamily:"var(--font-mono)"},".cm-tooltip-autocomplete ul li[aria-selected]":{backgroundColor:"var(--accent-dark-color)",color:"var(--accent-contrast-color)"},".cm-tooltip-autocomplete ul li[aria-selected] .cm-completionLabel":{color:"var(--accent-contrast-color)"},".cm-activeLine":{backgroundColor:"transparent"},".cm-searchMatch":{outline:"1px solid var(--accent-dark-color)",backgroundColor:"var(--divider-dark-color)"},".cm-selectionMatch":{outline:"1px solid var(--accent-dark-color)",backgroundColor:"var(--divider-light-color)"},".cm-matchingBracket, .cm-nonmatchingBracket":{backgroundColor:"var(--divider-color)",outline:"1px solid var(--accent-dark-color)"},".cm-gutters":{fontFamily:"var(--font-mono)",backgroundColor:"var(--primary-color)",borderColor:"var(--divider-light-color)"},".cm-lineNumbers":{minWidth:"3em",color:"var(--secondary-light-color)"},".cm-foldGutter":{minWidth:"2em",color:"var(--secondary-light-color)"},".cm-foldGutter .cm-gutterElement":{textAlign:"center"},".cm-line":{paddingLeft:"1rem",paddingRight:"1rem",paddingTop:"0.2rem",paddingBottom:"0.2rem"},".cm-activeLineGutter":{backgroundColor:"transparent"},".cm-scroller::-webkit-scrollbar":{display:"none"},".cm-foldPlaceholder":{backgroundColor:"var(--divider-light-color)",color:"var(--secondary-dark-color)",borderColor:"var(--divider-dark-color)"}}),x="var(--editor-name-color)",w="var(--editor-constant-color)",O=n.a.define([{tag:n.d.keyword,color:"var(--editor-keyword-color)"},{tag:[n.d.name,n.d.deleted,n.d.character,n.d.propertyName,n.d.macroName],color:x},{tag:[n.d.function(n.d.variableName),n.d.labelName],color:"var(--editor-variable-color)"},{tag:[n.d.color,n.d.constant(n.d.name),n.d.standard(n.d.name)],color:w},{tag:[n.d.definition(n.d.name),n.d.separator],color:"var(--editor-separator-color)"},{tag:[n.d.typeName,n.d.className,n.d.number,n.d.changed,n.d.annotation,n.d.modifier,n.d.self,n.d.namespace],color:"var(--editor-type-color)"},{tag:[n.d.operator,n.d.operatorKeyword,n.d.url,n.d.escape,n.d.regexp,n.d.link,n.d.special(n.d.string)],color:"var(--editor-operator-color)"},{tag:[n.d.meta,n.d.comment],color:"var(--editor-meta-color)"},{tag:n.d.strong,fontWeight:"bold"},{tag:n.d.emphasis,fontStyle:"italic"},{tag:n.d.strikethrough,textDecoration:"line-through"},{tag:n.d.link,color:"var(--editor-link-color)",textDecoration:"underline"},{tag:n.d.heading,fontWeight:"bold",color:x},{tag:[n.d.atom,n.d.bool,n.d.special(n.d.variableName)],color:w},{tag:[n.d.processingInstruction,n.d.string,n.d.inserted],color:"var(--editor-process-color)"},{tag:n.d.invalid,color:"var(--editor-invalid-color)"}]),j=[Object(s.d)(),Object(s.c)(),Object(a.l)(),Object(i.a)(),Object(c.a)({openText:"▾",closedText:"▸"}),Object(a.i)(),Object(a.j)(),l.g.allowMultipleSelections.of(!0),Object(d.p)(),n.b.fallback,Object(v.a)(),Object(p.a)(),Object(f.a)(),Object(g.b)(),Object(g.a)(),Object(a.k)(),Object(m.a)(),a.m.of([].concat(Object(o.a)(p.b),Object(o.a)(u.a),Object(o.a)(m.c),Object(o.a)(i.b),Object(o.a)(c.b),Object(o.a)(b.a),Object(o.a)(f.c),Object(o.a)(y.a))),Object(m.b)()]},918:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return g}));var o=r(174),a=r(175),n=(r(60),r(92),r(132),r(5),r(3)),c=r(885),l=r(947),i=r(880),d=r(16),s=r(74),u=r(104),v=/(<<\w+>>)/g,p=function(e){return Object(l.b)((function(t,r,o){for(var a,n,c,l,i=t.state.doc.lineAt(r),u=i.from,p=i.to,m=i.text,f=r,b=r;f>u&&/\w/.test(m[f-u-1]);)f--;for(;b<p&&/\w/.test(m[b-u]);)b++;if(f===r&&o<0||b===r&&o>0||!v.test(m.slice(f-u-2,b-u+2)))return null;var g=null!==(n=null===(a=e.find((function(e){return e.key===m.slice(f-u,b-u)})))||void 0===a?void 0:a.sourceEnv)&&void 0!==n?n:"choose an environment",y=null!==(l=null===(c=e.find((function(e){return e.key===m.slice(f-u,b-u)})))||void 0===c?void 0:c.value)&&void 0!==l?l:"not found",h=Object(s.parseTemplateStringE)(y,e),k=d.isLeft(h)?"error":h.right;return{pos:f,end:p,above:!0,arrow:!0,create:function(){var e=document.createElement("span"),t=document.createElement("xmp");return t.textContent=k,e.appendChild(document.createTextNode("".concat(g," "))),e.appendChild(t),e.className="tooltip-theme",{dom:e}}}}),{hoverTime:1})};var m=function(e){return new i.e({regexp:v,decoration:function(t){return function(e,t){var r=t.find((function(t){return t.key===e.slice(2,-2)}))?"bg-accentDark text-accentContrast hover:bg-accent":"bg-red-500 text-accentContrast hover:bg-red-600";return i.b.mark({class:"".concat("cursor-help transition rounded px-1 focus:outline-none mx-0.5 env-highlight"," ").concat(r)})}(t[0],e)}})},f=function(e){var t=m(e);return i.g.define((function(e){return{decorations:t.createDeco(e),update:function(e){this.decorations=t.updateDeco(e,this.decorations)}}}),{decorations:function(e){return e.decorations}})},b=function(){function e(t,r){var a=this;Object(o.a)(this,e),this.editorView=r,this.compartment=new c.e,this.envs=[],this.envs=Object(u.i)(),t(u.b,(function(e){var t;a.envs=e,null===(t=a.editorView.value)||void 0===t||t.dispatch({effects:a.compartment.reconfigure([p(a.envs),f(a.envs)])})}))}return Object(a.a)(e,[{key:"extension",get:function(){return this.compartment.of([p(this.envs),f(this.envs)])}}]),e}(),g=function(){function e(t,r){var a=this;Object(o.a)(this,e),this.editorView=r,this.compartment=new c.e,this.envs=[],Object(n.y)(t,(function(e){var t;a.envs=e,null===(t=a.editorView.value)||void 0===t||t.dispatch({effects:a.compartment.reconfigure([p(a.envs),f(a.envs)])})}),{immediate:!0})}return Object(a.a)(e,[{key:"extension",get:function(){return this.compartment.of([p(this.envs),f(this.envs)])}}]),e}()},940:function(e,t,r){"use strict";r.r(t);var o=r(174),a=r(175),n=(r(60),r(157),r(987),r(173),r(1068),r(61),r(132),r(5),r(3)),c=r(880),l=r(885),i=r(233),d=r.n(i),s=r(947),u=r(917),v=r(918),p=r(24),m=r(104),f={};f.props={value:{key:"value",required:!1,type:String,default:""},placeholder:{key:"placeholder",required:!1,type:String,default:""},styles:{key:"styles",required:!1,type:String,default:""},envs:{key:"envs",required:!1,type:[Array,null],default:null},focus:{key:"focus",required:!1,type:Boolean,default:!1}},f.setup=function(e,t){var r=e,i=t.emit,f=Object(n.o)(r.value),b=Object(n.o)(),g=Object(n.o)(null);Object(n.y)((function(){return r.value}),(function(e){var t,r,o=e.replaceAll("\n",""),a=null===(t=b.value)||void 0===t?void 0:t.state.doc.toJSON().join(b.value.state.lineBreak);f.value===o&&e===a||(f.value=o,null===(r=b.value)||void 0===r||r.dispatch({filter:!1,changes:{from:0,to:b.value.state.doc.length,insert:o}}))}),{immediate:!0,flush:"sync"});var y=null,h=null,k=Object(p.g)(m.b,[]),x=Object(n.a)((function(){return r.envs?r.envs.map((function(e){return{key:e.key,value:e.value,sourceEnv:e.source}})):k.value})),w=new v.b(x,b),O=function(e){var t=[u.d,Object(s.d)({position:"absolute"}),w,Object(c.o)(r.placeholder),c.d.domEventHandlers({paste:function(e){var t,r;y=e,h=null!==(r=null===(t=e.clipboardData)||void 0===t?void 0:t.getData("text"))&&void 0!==r?r:""},drop:function(e){e.preventDefault()}}),c.g.fromClass(function(){function e(){Object(o.a)(this,e)}return Object(a.a)(e,[{key:"update",value:function(e){if(e.docChanged){var t=d()(f.value);f.value=e.state.doc.toJSON().join(e.state.lineBreak);var r=d()(f.value).replaceAll("\n","");if(i("input",r),i("change",r),!!e.transactions.find((function(e){return e.isUserEvent("input.paste")}))&&y){var o=h;Object(n.g)((function(){i("paste",{pastedValue:o,prevValue:t})}))}else y=null,h=null}}}]),e}())];b.value=new c.d({parent:e,state:l.g.create({doc:r.value,extensions:t})})};return Object(n.j)((function(){g.value&&(b.value||O(g.value))})),Object(n.y)(g,(function(){var e;g.value?b.value||O(g.value):(null===(e=b.value)||void 0===e||e.destroy(),b.value=void 0)})),{emit:i,editor:g}};var b=f,g=r(23),y=Object(g.a)(b,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"flex items-center flex-1 flex-shrink-0 overflow-auto whitespace-nowrap hide-scrollbar"},[r("div",{ref:"editor",staticClass:"flex flex-1",class:e.styles,attrs:{placeholder:e.placeholder},on:{keydown:[function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:(t.preventDefault(),e.emit("enter",t))},function(t){return e.emit("keydown",t)}],keyup:function(t){return e.emit("keyup",t)},click:function(t){return e.emit("click",t)}}})])}),[],!1,null,null,null);t.default=y.exports},987:function(e,t,r){r(1069)}}]);