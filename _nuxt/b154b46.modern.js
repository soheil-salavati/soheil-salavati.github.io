(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{1806:function(e,t,n){"use strict";n.r(t);var l=n(3),a=Object(l.c)({props:{show:Boolean,folderPath:{type:String,default:null},collectionIndex:{type:Number,default:null}},data:()=>({name:null}),methods:{addFolder(){this.$emit("add-folder",{name:this.name,path:this.folderPath||"".concat(this.collectionIndex)}),this.hideModal()},hideModal(){this.name=null,this.$emit("hide-modal")}}}),o=n(16),d=Object(o.a)(a,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.show?n("SmartModal",{attrs:{dialog:"",title:e.$t("folder.new")},on:{close:function(t){return e.$emit("hide-modal")}},scopedSlots:e._u([{key:"body",fn:function(){return[n("div",{staticClass:"flex flex-col px-2"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"},{name:"focus",rawName:"v-focus"}],staticClass:"input floating-input",attrs:{id:"selectLabelGqlAddFolder",placeholder:" ",type:"text",autocomplete:"off"},domProps:{value:e.name},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.addFolder.apply(null,arguments)},input:function(t){t.target.composing||(e.name=t.target.value)}}}),e._v(" "),n("label",{attrs:{for:"selectLabelGqlAddFolder"}},[e._v("\n        "+e._s(e.$t("action.label"))+"\n      ")])])]},proxy:!0},{key:"footer",fn:function(){return[n("span",[n("ButtonPrimary",{attrs:{label:e.$t("action.save")},nativeOn:{click:function(t){return e.addFolder.apply(null,arguments)}}}),e._v(" "),n("ButtonSecondary",{attrs:{label:e.$t("action.cancel")},nativeOn:{click:function(t){return e.hideModal.apply(null,arguments)}}})],1)]},proxy:!0}],null,!1,3721494695)}):e._e()}),[],!1,null,null,null);t.default=d.exports;installComponents(d,{ButtonPrimary:n(142).default,ButtonSecondary:n(86).default,SmartModal:n(91).default})}}]);