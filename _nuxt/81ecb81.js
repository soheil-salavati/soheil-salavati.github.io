(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{2381:function(e,t,o){"use strict";o.r(t);o(60),o(145),o(132),o(5),o(1246),o(1905),o(1882),o(1883),o(1884),o(1885),o(1886),o(1887),o(1888),o(1889),o(1890),o(1891),o(1892),o(1893),o(1894),o(1895),o(1896),o(1897),o(1898),o(1899),o(1900),o(1901),o(1902),o(1903),o(1904),o(78),o(72),o(902),o(296),o(114);var n=o(3),s=Object(n.c)({props:{response:{type:Object,default:function(){}}},data:function(){return{imageSource:"",downloadIcon:"download"}},computed:{responseType:function(){return(this.response.headers.find((function(e){return"content-type"===e.key.toLowerCase()})).value||"").split(";")[0].toLowerCase()}},watch:{response:{immediate:!0,handler:function(){var e=this;this.imageSource="";var t=this.response.body,o=new Uint8Array(t),n=new Blob([o.buffer]),s=new FileReader;s.onload=function(t){var o=t.target;e.imageSource=o.result},s.readAsDataURL(n)}}},mounted:function(){var e=this;this.imageSource="";var t=this.response.body,o=new Uint8Array(t),n=new Blob([o.buffer]),s=new FileReader;s.onload=function(t){var o=t.target;e.imageSource=o.result},s.readAsDataURL(n)},methods:{downloadResponse:function(){var e=this,t=this.response.body,o=new Blob([t],{type:this.responseType}),n=document.createElement("a"),s=URL.createObjectURL(o);n.href=s,n.download="".concat(s.split("/").pop().split("#")[0].split("?")[0]),document.body.appendChild(n),n.click(),this.downloadIcon="check",this.$toast.success(this.$t("state.download_started")),setTimeout((function(){document.body.removeChild(n),URL.revokeObjectURL(s),e.downloadIcon="download"}),1e3)}}}),a=o(23),r=Object(a.a)(s,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"flex flex-col flex-1"},[o("div",{staticClass:"sticky z-10 flex items-center justify-between pl-4 border-b bg-primary border-dividerLight top-lowerSecondaryStickyFold"},[o("label",{staticClass:"font-semibold text-secondaryLight"},[e._v("\n      "+e._s(e.$t("response.body"))+"\n    ")]),e._v(" "),o("div",{staticClass:"flex"},[e.response.body?o("ButtonSecondary",{directives:[{name:"tippy",rawName:"v-tippy",value:{theme:"tooltip"},expression:"{ theme: 'tooltip' }"}],ref:"downloadResponse",attrs:{title:e.$t("action.download_file"),svg:e.downloadIcon},nativeOn:{click:function(t){return e.downloadResponse.apply(null,arguments)}}}):e._e()],1)]),e._v(" "),o("img",{staticClass:"flex max-w-full border-b border-dividerLight",attrs:{src:e.imageSource,loading:"lazy",alt:e.imageSource}})])}),[],!1,null,null,null);t.default=r.exports;installComponents(r,{ButtonSecondary:o(106).default})}}]);