(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{1804:function(e,t,n){"use strict";n.r(t);var l=n(3),a=n(61),o=n(101),i=Object(l.c)({props:{show:Boolean},data:()=>({name:null}),methods:{addNewCollection(){this.name?(Object(o.a)(Object(a.makeCollection)({name:this.name,folders:[],requests:[]})),this.hideModal()):this.$toast.error("".concat(this.$t("collection.invalid_name")))},hideModal(){this.name=null,this.$emit("hide-modal")}}}),c=n(16),r=Object(c.a)(i,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.show?n("SmartModal",{attrs:{dialog:"",title:""+e.$t("collection.new")},on:{close:e.hideModal},scopedSlots:e._u([{key:"body",fn:function(){return[n("div",{staticClass:"flex flex-col px-2"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"},{name:"focus",rawName:"v-focus"}],staticClass:"input floating-input",attrs:{id:"selectLabelGqlAdd",placeholder:" ",type:"text",autocomplete:"off"},domProps:{value:e.name},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.addNewCollection.apply(null,arguments)},input:function(t){t.target.composing||(e.name=t.target.value)}}}),e._v(" "),n("label",{attrs:{for:"selectLabelGqlAdd"}},[e._v("\n        "+e._s(e.$t("action.label"))+"\n      ")])])]},proxy:!0},{key:"footer",fn:function(){return[n("span",[n("ButtonPrimary",{attrs:{label:""+e.$t("action.save")},nativeOn:{click:function(t){return e.addNewCollection.apply(null,arguments)}}}),e._v(" "),n("ButtonSecondary",{attrs:{label:""+e.$t("action.cancel")},nativeOn:{click:function(t){return e.hideModal.apply(null,arguments)}}})],1)]},proxy:!0}],null,!1,1521622023)}):e._e()}),[],!1,null,null,null);t.default=r.exports;installComponents(r,{ButtonPrimary:n(142).default,ButtonSecondary:n(86).default,SmartModal:n(91).default})}}]);