(window.webpackJsonp=window.webpackJsonp||[]).push([[106],{847:function(o,r,e){"use strict";e.d(r,"b",(function(){return h})),e.d(r,"d",(function(){return k})),e.d(r,"a",(function(){return C})),e.d(r,"c",(function(){return w}));e(37),e(42);var t=e(807),a=e(873),c=e(1015),l=e(814),n=e(1014),i=e(833),d=e(1002),s=e(879),u=e(1008),v=e(1016),m=e(1018),p=e(877),g=e(1019),b=e(1017),f=e(880),h=t.d.theme({"&":{fontSize:"var(--font-size-body)",height:"100%",width:"100%",flex:"1"},".cm-content":{caretColor:"var(--secondary-dark-color)",fontFamily:"var(--font-mono)",backgroundColor:"var(--primary-color)"},".cm-cursor":{borderColor:"var(--secondary-color)"},".cm-widgetBuffer":{position:"absolute"},".cm-selectionBackground":{backgroundColor:"var(--accent-dark-color)",color:"var(--accent-contrast-color)"},".cm-panels":{backgroundColor:"var(--primary-light-color)",color:"var(--secondary-light-color)"},".cm-panels.cm-panels-top":{borderBottom:"1px solid var(--divider-light-color)"},".cm-panels.cm-panels-bottom":{borderTop:"1px solid var(--divider-light-color)"},".cm-search":{display:"flex",alignItems:"center",flexWrap:"nowrap",flexShrink:0,overflow:"auto"},".cm-search label":{display:"inline-flex",alignItems:"center"},".cm-textfield":{backgroundColor:"var(--primary-dark-color)",color:"var(--secondary-dark-color)",borderColor:"var(--divider-light-color)",borderRadius:"3px"},".cm-button":{backgroundColor:"var(--primary-dark-color)",color:"var(--secondary-dark-color)",backgroundImage:"none",border:"none"},".cm-completionLabel":{color:"var(--secondary-color)"},".cm-tooltip":{backgroundColor:"var(--primary-dark-color)",color:"var(--secondary-light-color)",border:"none",borderRadius:"3px"},".cm-tooltip-arrow:after":{borderColor:"transparent !important"},".cm-tooltip-arrow:before":{borderColor:"transparent !important"},".cm-tooltip.cm-tooltip-autocomplete > ul":{fontFamily:"var(--font-mono)"},".cm-tooltip-autocomplete ul li[aria-selected]":{backgroundColor:"var(--accent-dark-color)",color:"var(--accent-contrast-color)"},".cm-tooltip-autocomplete ul li[aria-selected] .cm-completionLabel":{color:"var(--accent-contrast-color)"},".cm-activeLine":{backgroundColor:"transparent"},".cm-searchMatch":{outline:"1px solid var(--accent-dark-color)",backgroundColor:"var(--divider-dark-color)"},".cm-selectionMatch":{outline:"1px solid var(--accent-dark-color)",backgroundColor:"var(--divider-light-color)"},".cm-matchingBracket, .cm-nonmatchingBracket":{backgroundColor:"var(--divider-color)",outline:"1px solid var(--accent-dark-color)"},".cm-gutters":{fontFamily:"var(--font-mono)",backgroundColor:"var(--primary-color)",borderColor:"var(--divider-light-color)"},".cm-lineNumbers":{minWidth:"3em",color:"var(--secondary-light-color)"},".cm-foldGutter":{minWidth:"2em",color:"var(--secondary-light-color)"},".cm-foldGutter .cm-gutterElement":{textAlign:"center"},".cm-line":{paddingLeft:"0.5em",paddingRight:"0.5em"},".cm-activeLineGutter":{backgroundColor:"transparent"},".cm-scroller::-webkit-scrollbar":{display:"none"},".cm-foldPlaceholder":{backgroundColor:"var(--divider-light-color)",color:"var(--secondary-dark-color)",borderColor:"var(--divider-dark-color)"}}),k=t.d.theme({"&":{fontSize:"var(--font-size-body)",height:"100%",width:"100%",flex:"1"},".cm-content":{caretColor:"var(--secondary-dark-color)",fontFamily:"var(--font-sans)",color:"var(--secondary-dark-color)",backgroundColor:"transparent"},".cm-cursor":{borderColor:"var(--secondary-color)"},".cm-widgetBuffer":{position:"absolute"},".cm-selectionBackground":{backgroundColor:"var(--accent-dark-color)",color:"var(--accent-contrast-color)"},".cm-panels":{backgroundColor:"var(--primary-light-color)",color:"var(--secondary-light-color)"},".cm-panels.cm-panels-top":{borderBottom:"1px solid var(--divider-light-color)"},".cm-panels.cm-panels-bottom":{borderTop:"1px solid var(--divider-light-color)"},".cm-search":{display:"flex",alignItems:"center",flexWrap:"nowrap",flexShrink:0,overflow:"auto"},".cm-search label":{display:"inline-flex",alignItems:"center"},".cm-textfield":{backgroundColor:"var(--primary-dark-color)",color:"var(--secondary-dark-color)",borderColor:"var(--divider-light-color)",borderRadius:"3px"},".cm-button":{backgroundColor:"var(--primary-dark-color)",color:"var(--secondary-dark-color)",backgroundImage:"none",border:"none"},".cm-completionLabel":{color:"var(--secondary-color)"},".cm-tooltip":{backgroundColor:"var(--primary-dark-color)",color:"var(--secondary-light-color)",border:"none",borderRadius:"3px"},".cm-tooltip-arrow:after":{borderColor:"transparent !important"},".cm-tooltip-arrow:before":{borderColor:"transparent !important"},".cm-tooltip.cm-tooltip-autocomplete > ul":{fontFamily:"var(--font-mono)"},".cm-tooltip-autocomplete ul li[aria-selected]":{backgroundColor:"var(--accent-dark-color)",color:"var(--accent-contrast-color)"},".cm-tooltip-autocomplete ul li[aria-selected] .cm-completionLabel":{color:"var(--accent-contrast-color)"},".cm-activeLine":{backgroundColor:"transparent"},".cm-searchMatch":{outline:"1px solid var(--accent-dark-color)",backgroundColor:"var(--divider-dark-color)"},".cm-selectionMatch":{outline:"1px solid var(--accent-dark-color)",backgroundColor:"var(--divider-light-color)"},".cm-matchingBracket, .cm-nonmatchingBracket":{backgroundColor:"var(--divider-color)",outline:"1px solid var(--accent-dark-color)"},".cm-gutters":{fontFamily:"var(--font-mono)",backgroundColor:"var(--primary-color)",borderColor:"var(--divider-light-color)"},".cm-lineNumbers":{minWidth:"3em",color:"var(--secondary-light-color)"},".cm-foldGutter":{minWidth:"2em",color:"var(--secondary-light-color)"},".cm-foldGutter .cm-gutterElement":{textAlign:"center"},".cm-line":{paddingLeft:"1rem",paddingRight:"1rem",paddingTop:"0.2rem",paddingBottom:"0.2rem"},".cm-activeLineGutter":{backgroundColor:"transparent"},".cm-scroller::-webkit-scrollbar":{display:"none"},".cm-foldPlaceholder":{backgroundColor:"var(--divider-light-color)",color:"var(--secondary-dark-color)",borderColor:"var(--divider-dark-color)"}}),y="var(--editor-name-color)",x="var(--editor-constant-color)",C=a.a.define([{tag:a.d.keyword,color:"var(--editor-keyword-color)"},{tag:[a.d.name,a.d.deleted,a.d.character,a.d.propertyName,a.d.macroName],color:y},{tag:[a.d.function(a.d.variableName),a.d.labelName],color:"var(--editor-variable-color)"},{tag:[a.d.color,a.d.constant(a.d.name),a.d.standard(a.d.name)],color:x},{tag:[a.d.definition(a.d.name),a.d.separator],color:"var(--editor-separator-color)"},{tag:[a.d.typeName,a.d.className,a.d.number,a.d.changed,a.d.annotation,a.d.modifier,a.d.self,a.d.namespace],color:"var(--editor-type-color)"},{tag:[a.d.operator,a.d.operatorKeyword,a.d.url,a.d.escape,a.d.regexp,a.d.link,a.d.special(a.d.string)],color:"var(--editor-operator-color)"},{tag:[a.d.meta,a.d.comment],color:"var(--editor-meta-color)"},{tag:a.d.strong,fontWeight:"bold"},{tag:a.d.emphasis,fontStyle:"italic"},{tag:a.d.strikethrough,textDecoration:"line-through"},{tag:a.d.link,color:"var(--editor-link-color)",textDecoration:"underline"},{tag:a.d.heading,fontWeight:"bold",color:y},{tag:[a.d.atom,a.d.bool,a.d.special(a.d.variableName)],color:x},{tag:[a.d.processingInstruction,a.d.string,a.d.inserted],color:"var(--editor-process-color)"},{tag:a.d.invalid,color:"var(--editor-invalid-color)"}]),w=[Object(d.d)(),Object(d.c)(),Object(t.l)(),Object(n.a)(),Object(c.a)({openText:"▾",closedText:"▸"}),Object(t.i)(),Object(t.j)(),l.g.allowMultipleSelections.of(!0),Object(i.p)(),a.b.fallback,Object(u.a)(),Object(v.a)(),Object(p.a)(),Object(b.b)(),Object(b.a)(),Object(t.k)(),Object(m.a)(),t.m.of([...v.b,...s.a,...m.c,...n.b,...c.b,...g.a,...p.c,...f.a]),Object(m.b)()]},848:function(o,r,e){"use strict";e.d(r,"a",(function(){return p})),e.d(r,"b",(function(){return g}));e(63);var t=e(3),a=e(814),c=e(878),l=e(807),n=e(8),i=e(61),d=e(84),s=/(<<\w+>>)/g,u=o=>Object(c.b)(((r,e,t)=>{for(var a,c,l,d,{from:u,to:v,text:m}=r.state.doc.lineAt(e),p=e,g=e;p>u&&/\w/.test(m[p-u-1]);)p--;for(;g<v&&/\w/.test(m[g-u]);)g++;if(p===e&&t<0||g===e&&t>0||!s.test(m.slice(p-u-2,g-u+2)))return null;var b=null!==(c=null===(a=o.find((o=>o.key===m.slice(p-u,g-u))))||void 0===a?void 0:a.sourceEnv)&&void 0!==c?c:"choose an environment",f=null!==(d=null===(l=o.find((o=>o.key===m.slice(p-u,g-u))))||void 0===l?void 0:l.value)&&void 0!==d?d:"not found",h=Object(i.parseTemplateStringE)(f,o),k=n.isLeft(h)?"error":h.right;return{pos:p,end:v,above:!0,arrow:!0,create(){var o=document.createElement("span"),r=document.createElement("xmp");return r.textContent=k,o.appendChild(document.createTextNode("".concat(b," "))),o.appendChild(r),o.className="tooltip-theme",{dom:o}}}}),{hoverTime:1});var v=o=>new l.e({regexp:s,decoration:r=>function(o,r){var e=r.find((r=>r.key===o.slice(2,-2)))?"bg-accentDark text-accentContrast hover:bg-accent":"bg-red-500 text-accentContrast hover:bg-red-600";return l.b.mark({class:"".concat("cursor-help transition rounded px-1 focus:outline-none mx-0.5 env-highlight"," ").concat(e)})}(r[0],o)}),m=o=>{var r=v(o);return l.g.define((o=>({decorations:r.createDeco(o),update(o){this.decorations=r.updateDeco(o,this.decorations)}})),{decorations:o=>o.decorations})};class p{constructor(o,r){this.editorView=r,this.compartment=new a.e,this.envs=[],this.envs=Object(d.i)(),o(d.b,(o=>{var r;this.envs=o,null===(r=this.editorView.value)||void 0===r||r.dispatch({effects:this.compartment.reconfigure([u(this.envs),m(this.envs)])})}))}get extension(){return this.compartment.of([u(this.envs),m(this.envs)])}}class g{constructor(o,r){this.editorView=r,this.compartment=new a.e,this.envs=[],Object(t.y)(o,(o=>{var r;this.envs=o,null===(r=this.editorView.value)||void 0===r||r.dispatch({effects:this.compartment.reconfigure([u(this.envs),m(this.envs)])})}),{immediate:!0})}get extension(){return this.compartment.of([u(this.envs),m(this.envs)])}}},870:function(o,r,e){"use strict";e.r(r);e(63),e(129),e(916),e(993);var t=e(3),a=e(807),c=e(814),l=e(193),n=e.n(l),i=e(878),d=e(847),s=e(848),u=e(17),v=e(84),m={};m.props={value:{key:"value",required:!1,type:String,default:""},placeholder:{key:"placeholder",required:!1,type:String,default:""},styles:{key:"styles",required:!1,type:String,default:""},envs:{key:"envs",required:!1,type:[Array,null],default:null},focus:{key:"focus",required:!1,type:Boolean,default:!1}},m.setup=(o,r)=>{var e=o,l=r.emit,m=Object(t.o)(e.value),p=Object(t.o)(),g=Object(t.o)(null);Object(t.y)((()=>e.value),(o=>{var r,e,t=o.replaceAll("\n",""),a=null===(r=p.value)||void 0===r?void 0:r.state.doc.toJSON().join(p.value.state.lineBreak);m.value===t&&o===a||(m.value=t,null===(e=p.value)||void 0===e||e.dispatch({filter:!1,changes:{from:0,to:p.value.state.doc.length,insert:t}}))}),{immediate:!0,flush:"sync"});var b=null,f=null,h=Object(u.g)(v.b,[]),k=Object(t.a)((()=>e.envs?e.envs.map((o=>({key:o.key,value:o.value,sourceEnv:o.source}))):h.value)),y=new s.b(k,p),x=o=>{var r=[d.d,Object(i.d)({position:"absolute"}),y,Object(a.o)(e.placeholder),a.d.domEventHandlers({paste(o){var r,e;b=o,f=null!==(e=null===(r=o.clipboardData)||void 0===r?void 0:r.getData("text"))&&void 0!==e?e:""},drop(o){o.preventDefault()}}),a.g.fromClass(class{update(o){if(o.docChanged){var r=n()(m.value);m.value=o.state.doc.toJSON().join(o.state.lineBreak);var e=n()(m.value).replaceAll("\n","");if(l("input",e),l("change",e),!!o.transactions.find((o=>o.isUserEvent("input.paste")))&&b){var a=f;Object(t.g)((()=>{l("paste",{pastedValue:a,prevValue:r})}))}else b=null,f=null}}})];p.value=new a.d({parent:o,state:c.g.create({doc:e.value,extensions:r})})};return Object(t.j)((()=>{g.value&&(p.value||x(g.value))})),Object(t.y)(g,(()=>{var o;g.value?p.value||x(g.value):(null===(o=p.value)||void 0===o||o.destroy(),p.value=void 0)})),{emit:l,editor:g}};var p=m,g=e(16),b=Object(g.a)(p,(function(){var o=this,r=o.$createElement,e=o._self._c||r;return e("div",{staticClass:"flex items-center flex-1 flex-shrink-0 overflow-auto whitespace-nowrap hide-scrollbar"},[e("div",{ref:"editor",staticClass:"flex flex-1",class:o.styles,attrs:{placeholder:o.placeholder},on:{keydown:[function(r){return!r.type.indexOf("key")&&o._k(r.keyCode,"enter",13,r.key,"Enter")?null:(r.preventDefault(),o.emit("enter",r))},function(r){return o.emit("keydown",r)}],keyup:function(r){return o.emit("keyup",r)},click:function(r){return o.emit("click",r)}}})])}),[],!1,null,null,null);r.default=b.exports},916:function(o,r,e){e(999)},999:function(o,r,e){"use strict";var t=e(25),a=e(24),c=e(43),l=e(44),n=e(95),i=e(60),d=e(244),s=e(75),u=e(131),v=e(245),m=e(439),p=e(65),g=e(111),b=p("replace"),f=RegExp.prototype,h=a.TypeError,k=l(v),y=l("".indexOf),x=l("".replace),C=l("".slice),w=Math.max,j=function(o,r,e){return e>o.length?-1:""===r?e:y(o,r,e)};t({target:"String",proto:!0},{replaceAll:function(o,r){var e,t,a,l,v,p,O,B,E,N=n(this),S=0,L=0,D="";if(null!=o){if((e=d(o))&&(t=s(n("flags"in f?o.flags:k(o))),!~y(t,"g")))throw h("`.replaceAll` does not allow non-global regexes");if(a=u(o,b))return c(a,o,N,r);if(g&&e)return x(s(N),o,r)}for(l=s(N),v=s(o),(p=i(r))||(r=s(r)),O=v.length,B=w(1,O),S=j(l,v,0);-1!==S;)E=p?s(r(v,S,l)):m(v,l,S,[],void 0,r),D+=C(l,L,S)+E,L=S+O,S=j(l,v,S+B);return L<l.length&&(D+=C(l,L)),D}})}}]);