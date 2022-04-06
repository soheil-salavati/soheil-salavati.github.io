(window.webpackJsonp=window.webpackJsonp||[]).push([[45,46,47],{1076:function(e,t,n){"use strict";n.r(t);n(496);var o=n(3),i=n(74),r=n(24),l=n(113),c=Object(o.c)({props:{request:{type:Object,default:function(){}},collectionIndex:{type:Number,default:null},folderIndex:{type:Number,default:null},folderName:{type:String,default:null},requestIndex:[Number,String],doc:Boolean,saveRequest:Boolean,collectionsType:{type:Object,default:function(){}},picked:{type:Object,default:function(){}},collectionID:{type:String,default:null}},setup:function(){return{active:Object(r.g)(l.q,null),tippyActions:Object(o.o)(null),options:Object(o.o)(null),edit:Object(o.o)(null),deleteAction:Object(o.o)(null),duplicate:Object(o.o)(null)}},data:function(){return{dragging:!1,requestMethodLabels:{get:"text-green-500",post:"text-yellow-500",put:"text-blue-500",delete:"text-red-500",default:"text-gray-500"},confirmRemove:!1}},computed:{isSelected:function(){return this.picked&&"teams-request"===this.picked.pickedType&&this.picked.requestID===this.requestIndex}},methods:{selectRequest:function(){this.active&&"team-collection"===this.active.originLocation&&this.active.requestID===this.requestIndex?Object(l.y)(null):this.$props.saveRequest?this.$emit("select",{picked:{pickedType:"teams-request",requestID:this.requestIndex}}):Object(l.x)(Object(i.safelyExtractRESTRequest)(Object(i.translateToNewRequest)(this.request),Object(l.c)()),{originLocation:"team-collection",requestID:this.requestIndex})},dragStart:function(e){var t=e.dataTransfer;this.dragging=!this.dragging,t.setData("requestIndex",this.requestIndex)},removeRequest:function(){this.$emit("remove-request",{collectionIndex:this.$props.collectionIndex,folderName:this.$props.folderName,requestIndex:this.$props.requestIndex})},getRequestLabelColor:function(e){return this.requestMethodLabels[e.toLowerCase()]||this.requestMethodLabels.default}}}),s=n(23),a=Object(s.a)(c,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"flex flex-col",class:[{"bg-primaryLight":e.dragging}]},[n("div",{staticClass:"flex items-stretch group",attrs:{draggable:"true"},on:{dragstart:e.dragStart,dragover:function(e){e.stopPropagation()},dragleave:function(t){e.dragging=!1},dragend:function(t){e.dragging=!1},contextmenu:function(t){t.preventDefault(),e.options.tippy().show()}}},[n("span",{staticClass:"flex items-center justify-center w-16 px-2 truncate cursor-pointer",class:e.getRequestLabelColor(e.request.method),on:{click:function(t){e.doc||e.selectRequest()}}},[e.isSelected?n("SmartIcon",{staticClass:"svg-icons",class:{"text-accent":e.isSelected},attrs:{name:"check-circle"}}):n("span",{staticClass:"truncate"},[e._v("\n        "+e._s(e.request.method)+"\n      ")])],1),e._v(" "),n("span",{staticClass:"flex items-center flex-1 min-w-0 py-2 pr-2 cursor-pointer transition group-hover:text-secondaryDark",on:{click:function(t){e.doc||e.selectRequest()}}},[n("span",{staticClass:"truncate",class:{"text-accent":e.isSelected}},[e._v("\n        "+e._s(e.request.name)+"\n      ")]),e._v(" "),e.active&&"team-collection"===e.active.originLocation&&e.active.requestID===e.requestIndex?n("span",{directives:[{name:"tippy",rawName:"v-tippy",value:{theme:"tooltip"},expression:"{ theme: 'tooltip' }"}],staticClass:"relative h-1.5 w-1.5 flex flex-shrink-0 mx-3",attrs:{title:""+e.$t("collection.request_in_use")}},[n("span",{staticClass:"absolute inline-flex flex-shrink-0 w-full h-full bg-green-500 rounded-full opacity-75 animate-ping"}),e._v(" "),n("span",{staticClass:"relative inline-flex flex-shrink-0 rounded-full h-1.5 w-1.5 bg-green-500"})]):e._e()]),e._v(" "),n("div",{staticClass:"flex"},[e.saveRequest||e.doc?e._e():n("ButtonSecondary",{directives:[{name:"tippy",rawName:"v-tippy",value:{theme:"tooltip"},expression:"{ theme: 'tooltip' }"}],staticClass:"hidden group-hover:inline-flex",attrs:{svg:"rotate-ccw",title:e.$t("action.restore")},nativeOn:{click:function(t){e.doc||e.selectRequest()}}}),e._v(" "),n("span",["VIEWER"!==e.collectionsType.selectedTeam.myRole?n("tippy",{ref:"options",attrs:{interactive:"",trigger:"click",theme:"popover",arrow:"","on-shown":function(){return e.tippyActions.focus()}},scopedSlots:e._u([{key:"trigger",fn:function(){return[n("ButtonSecondary",{directives:[{name:"tippy",rawName:"v-tippy",value:{theme:"tooltip"},expression:"{ theme: 'tooltip' }"}],attrs:{title:e.$t("action.more"),svg:"more-vertical"}})]},proxy:!0}],null,!1,236607011)},[e._v(" "),n("div",{ref:"tippyActions",staticClass:"flex flex-col focus:outline-none",attrs:{tabindex:"0",role:"menu"},on:{keyup:[function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"e",void 0,t.key,void 0)?null:e.edit.$el.click()},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"d",void 0,t.key,void 0)?null:e.duplicate.$el.click()},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"delete",[8,46],t.key,["Backspace","Delete","Del"])?null:e.deleteAction.$el.click()},function(t){if(!t.type.indexOf("key")&&e._k(t.keyCode,"escape",void 0,t.key,void 0))return null;e.options.tippy().hide()}]}},[n("SmartItem",{ref:"edit",attrs:{svg:"edit",label:e.$t("action.edit"),shortcut:["E"]},nativeOn:{click:function(t){return function(){e.$emit("edit-request",{collectionIndex:e.collectionIndex,folderIndex:e.folderIndex,folderName:e.folderName,request:e.request,requestIndex:e.requestIndex}),e.options.tippy().hide()}.apply(null,arguments)}}}),e._v(" "),n("SmartItem",{ref:"duplicate",attrs:{svg:"copy",label:e.$t("action.duplicate"),shortcut:["D"]},nativeOn:{click:function(t){return function(){e.$emit("duplicate-request",{request:e.request,requestIndex:e.requestIndex,collectionID:e.collectionID}),e.options.tippy().hide()}.apply(null,arguments)}}}),e._v(" "),n("SmartItem",{ref:"deleteAction",attrs:{svg:"trash-2",label:e.$t("action.delete"),shortcut:["⌫"]},nativeOn:{click:function(t){return function(){e.confirmRemove=!0,e.options.tippy().hide()}.apply(null,arguments)}}})],1)]):e._e()],1)],1)]),e._v(" "),n("SmartConfirmModal",{attrs:{show:e.confirmRemove,title:e.$t("confirm.remove_request")},on:{"hide-modal":function(t){e.confirmRemove=!1},resolve:e.removeRequest}})],1)}),[],!1,null,null,null);t.default=a.exports;installComponents(a,{SmartIcon:n(111).default,ButtonSecondary:n(106).default,SmartItem:n(123).default,SmartConfirmModal:n(361).default})},1079:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return v}));var o=n(39),i=n(20),r=(n(62),n(61),n(87)),l=n(16),c=n(63),s=n(1),a=n(74),u=n(81),d=n(64),p=function(){var e=Object(i.a)(regeneratorRuntime.mark((function e(t){var n,i;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=[];case 1:return e.next=4,Object(u.a)({query:d.m,variables:{collectionID:t,cursor:n.length>0?n[n.length-1]:void 0}});case 4:if(i=e.sent,!l.isLeft(i)){e.next=7;break}return e.abrupt("return",l.left(i.left));case 7:if(n.push.apply(n,Object(o.a)(i.right.collection.children.map((function(e){return e.id})))),10===i.right.collection.children.length){e.next=10;break}return e.abrupt("break",12);case 10:e.next=1;break;case 12:return e.abrupt("return",l.right(n));case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=Object(i.a)(regeneratorRuntime.mark((function e(t){var n,i;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=[];case 1:return e.next=4,Object(u.a)({query:d.n,variables:{collectionID:t,cursor:n.length>0?n[n.length-1].id:void 0}});case 4:if(i=e.sent,!l.isLeft(i)){e.next=7;break}return e.abrupt("return",l.left(i.left));case 7:if(n.push.apply(n,Object(o.a)(i.right.requestsInCollection.map((function(e){return{id:e.id,request:Object(a.translateToNewRequest)(JSON.parse(e.request)),collectionID:t,title:e.title}})))),10===i.right.requestsInCollection.length){e.next=10;break}return e.abrupt("break",12);case 10:e.next=1;break;case 12:return e.abrupt("return",l.right(n));case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=function e(t){return Object(s.pipe)(c.a,c.b("title",(function(){return Object(s.pipe)((function(){return Object(u.a)({query:d.o,variables:{collectionID:t}})}),c.m((function(e){return e.collection.title})))})),c.b("children",(function(){return Object(s.pipe)((function(){return p(t)}),c.c(Object(s.flow)(r.map(e),c.t)))})),c.b("requests",(function(){return function(){return f(t)}})),c.m((function(e){var n=e.title,o=e.children,i=e.requests;return{id:t,children:o,requests:i,title:n}})))},v=function e(t){var n,o,i,r;return Object(a.makeCollection)({name:t.title,folders:null!==(o=null===(n=t.children)||void 0===n?void 0:n.map(e))&&void 0!==o?o:[],requests:null!==(r=null===(i=t.requests)||void 0===i?void 0:i.map((function(e){return e.request})))&&void 0!==r?r:[]})}},1080:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var o=n(81),i=n(64),r=function(e,t){return Object(o.c)(i.w,{requestID:e,collectionID:t})}},1082:function(e,t,n){"use strict";n.r(t);var o=n(20),i=(n(62),n(496),n(5),n(133),n(78),n(72),n(902),n(296),n(56),n(114),n(3)),r=n(16),l=n(81),c=n(64),s=n(1079),a=n(1080),u=Object(i.c)({name:"Folder",props:{folder:{type:Object,default:function(){}},folderIndex:{type:Number,default:null},collectionIndex:{type:Number,default:null},folderPath:{type:String,default:null},doc:Boolean,saveRequest:Boolean,isFiltered:Boolean,collectionsType:{type:Object,default:function(){}},picked:{type:Object,default:function(){}},loadingCollectionIDs:{type:Array,default:function(){return[]}}},setup:function(){return{tippyActions:Object(i.o)(null),options:Object(i.o)(null),folderAction:Object(i.o)(null),edit:Object(i.o)(null),deleteAction:Object(i.o)(null),exportAction:Object(i.o)(null),exportLoading:Object(i.o)(!1)}},data:function(){return{showChildren:!1,dragging:!1,confirmRemove:!1,prevCursor:"",cursor:""}},computed:{isSelected:function(){return this.picked&&"teams-folder"===this.picked.pickedType&&this.picked.folderID===this.folder.id},getCollectionIcon:function(){return this.isSelected?"check-circle":(this.showChildren||this.isFiltered)&&(this.showChildren||this.isFiltered)?"folder-open":"folder"}},methods:{exportFolder:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var n,o,i,l,c,a;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.exportLoading=!0,t.next=3,Object(s.a)(e.folder.id)();case 3:if(n=t.sent,!r.isLeft(n)){t.next=10;break}return e.$toast.error(e.$t("error.something_went_wrong").toString()),n.left,e.exportLoading=!1,e.options.tippy().hide(),t.abrupt("return");case 10:o=Object(s.b)(n.right),i=JSON.stringify(o),l=new Blob([i],{type:"application/json"}),c=document.createElement("a"),a=URL.createObjectURL(l),c.href=a,c.download="".concat(o.name,".json"),document.body.appendChild(c),c.click(),e.$toast.success(e.$t("state.download_started").toString()),setTimeout((function(){document.body.removeChild(c),URL.revokeObjectURL(a)}),1e3),e.exportLoading=!1,e.options.tippy().hide();case 23:case"end":return t.stop()}}),t)})))()},toggleShowChildren:function(){this.$props.saveRequest&&this.$emit("select",{picked:{pickedType:"teams-folder",folderID:this.folder.id}}),this.$emit("expand-collection",this.$props.folder.id),this.showChildren=!this.showChildren},removeFolder:function(){var e=this;"VIEWER"!==this.collectionsType.selectedTeam.myRole&&(this.picked&&"teams-folder"===this.picked.pickedType&&this.picked.folderID===this.folder.id&&this.$emit("select",{picked:null}),Object(l.c)(c.h,{collectionID:this.folder.id})().then((function(t){r.isLeft(t)?(e.$toast.error("".concat(e.$t("error.something_went_wrong"))),console.error(t.left)):(e.$toast.success("".concat(e.$t("state.deleted"))),e.$emit("update-team-collections"))})),this.$emit("update-team-collections"))},expandCollection:function(e){this.$emit("expand-collection",e)},dropEvent:function(e){var t=this;return Object(o.a)(regeneratorRuntime.mark((function n(){var o,i,l;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return o=e.dataTransfer,t.dragging=!t.dragging,i=o.getData("requestIndex"),n.next=5,Object(a.a)(i,t.folder.id)();case 5:l=n.sent,r.isLeft(l)&&t.$toast.error("".concat(t.$t("error.something_went_wrong")));case 7:case"end":return n.stop()}}),n)})))()},removeRequest:function(e){var t=e.collectionIndex,n=e.folderName,o=e.requestIndex;this.$emit("remove-request",{collectionIndex:t,folderName:n,requestIndex:o})}}}),d=n(23),p=Object(d.a)(u,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"flex flex-col",class:[{"bg-primaryLight":e.dragging}]},[n("div",{staticClass:"flex items-stretch group",on:{dragover:[function(e){e.preventDefault()},function(t){e.dragging=!0}],drop:[function(t){return t.preventDefault(),e.dropEvent.apply(null,arguments)},function(t){e.dragging=!1}],dragleave:function(t){e.dragging=!1},dragend:function(t){e.dragging=!1},contextmenu:function(t){t.preventDefault(),e.options.tippy().show()}}},[n("span",{staticClass:"flex items-center justify-center px-4 cursor-pointer",on:{click:function(t){return e.toggleShowChildren()}}},[n("SmartIcon",{staticClass:"svg-icons",class:{"text-accent":e.isSelected},attrs:{name:e.getCollectionIcon}})],1),e._v(" "),n("span",{staticClass:"flex flex-1 min-w-0 py-2 pr-2 cursor-pointer transition group-hover:text-secondaryDark",on:{click:function(t){return e.toggleShowChildren()}}},[n("span",{staticClass:"truncate",class:{"text-accent":e.isSelected}},[e._v("\n        "+e._s(e.folder.name?e.folder.name:e.folder.title)+"\n      ")])]),e._v(" "),n("div",{staticClass:"flex"},["VIEWER"!==e.collectionsType.selectedTeam.myRole?n("ButtonSecondary",{directives:[{name:"tippy",rawName:"v-tippy",value:{theme:"tooltip"},expression:"{ theme: 'tooltip' }"}],staticClass:"hidden group-hover:inline-flex",attrs:{svg:"folder-plus",title:e.$t("folder.new")},nativeOn:{click:function(t){return e.$emit("add-folder",{folder:e.folder,path:e.folderPath})}}}):e._e(),e._v(" "),n("span",["VIEWER"!==e.collectionsType.selectedTeam.myRole?n("tippy",{ref:"options",attrs:{interactive:"",trigger:"click",theme:"popover",arrow:"","on-shown":function(){return e.tippyActions.focus()}},scopedSlots:e._u([{key:"trigger",fn:function(){return[n("ButtonSecondary",{directives:[{name:"tippy",rawName:"v-tippy",value:{theme:"tooltip"},expression:"{ theme: 'tooltip' }"}],attrs:{title:e.$t("action.more"),svg:"more-vertical"}})]},proxy:!0}],null,!1,236607011)},[e._v(" "),n("div",{ref:"tippyActions",staticClass:"flex flex-col focus:outline-none",attrs:{tabindex:"0",role:"menu"},on:{keyup:[function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"n",void 0,t.key,void 0)?null:e.folderAction.$el.click()},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"e",void 0,t.key,void 0)?null:e.edit.$el.click()},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"delete",[8,46],t.key,["Backspace","Delete","Del"])?null:e.deleteAction.$el.click()},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"x",void 0,t.key,void 0)?null:e.exportAction.$el.click()},function(t){if(!t.type.indexOf("key")&&e._k(t.keyCode,"escape",void 0,t.key,void 0))return null;e.options.tippy().hide()}]}},[n("SmartItem",{ref:"folderAction",attrs:{svg:"folder-plus",label:e.$t("folder.new"),shortcut:["N"]},nativeOn:{click:function(t){return function(){e.$emit("add-folder",{folder:e.folder,path:e.folderPath}),e.options.tippy().hide()}.apply(null,arguments)}}}),e._v(" "),n("SmartItem",{ref:"edit",attrs:{svg:"edit",label:e.$t("action.edit"),shortcut:["E"]},nativeOn:{click:function(t){return function(){e.$emit("edit-folder",{folder:e.folder,folderIndex:e.folderIndex,collectionIndex:e.collectionIndex,folderPath:""}),e.options.tippy().hide()}.apply(null,arguments)}}}),e._v(" "),n("SmartItem",{ref:"exportAction",attrs:{svg:"download",label:e.$t("export.title"),shortcut:["X"],loading:e.exportLoading},nativeOn:{click:function(t){return e.exportFolder.apply(null,arguments)}}}),e._v(" "),n("SmartItem",{ref:"deleteAction",attrs:{svg:"trash-2",label:e.$t("action.delete"),shortcut:["⌫"]},nativeOn:{click:function(t){return function(){e.confirmRemove=!0,e.options.tippy().hide()}.apply(null,arguments)}}})],1)]):e._e()],1)],1)]),e._v(" "),e.showChildren||e.isFiltered?n("div",{staticClass:"flex"},[n("div",{staticClass:"bg-dividerLight cursor-nsResize flex ml-5.5 transform transition w-1 hover:bg-dividerDark hover:scale-x-125",on:{click:function(t){return e.toggleShowChildren()}}}),e._v(" "),n("div",{staticClass:"flex flex-col flex-1 truncate"},[e._l(e.folder.children,(function(t,o){return n("CollectionsTeamsFolder",{key:"subFolder-"+o,attrs:{folder:t,"folder-index":o,"collection-index":e.collectionIndex,doc:e.doc,"save-request":e.saveRequest,"collections-type":e.collectionsType,"folder-path":e.folderPath+"/"+o,picked:e.picked,"loading-collection-i-ds":e.loadingCollectionIDs},on:{"add-folder":function(t){return e.$emit("add-folder",t)},"edit-folder":function(t){return e.$emit("edit-folder",t)},"edit-request":function(t){return e.$emit("edit-request",t)},"update-team-collections":function(t){return e.$emit("update-team-collections")},select:function(t){return e.$emit("select",t)},"expand-collection":e.expandCollection,"remove-request":e.removeRequest,"duplicate-request":function(t){return e.$emit("duplicate-request",t)}}})})),e._v(" "),e._l(e.folder.requests,(function(t,o){return n("CollectionsTeamsRequest",{key:"request-"+o,attrs:{request:t.request,"collection-index":e.collectionIndex,"folder-index":e.folderIndex,"folder-name":e.folder.name,"request-index":t.id,doc:e.doc,"save-request":e.saveRequest,"collections-type":e.collectionsType,picked:e.picked,"collection-i-d":e.folder.id},on:{"edit-request":function(t){return e.$emit("edit-request",t)},select:function(t){return e.$emit("select",t)},"remove-request":e.removeRequest,"duplicate-request":function(t){return e.$emit("duplicate-request",t)}}})})),e._v(" "),e.loadingCollectionIDs.includes(e.folder.id)?n("div",{staticClass:"flex flex-col items-center justify-center p-4"},[n("SmartSpinner",{staticClass:"my-4"}),e._v(" "),n("span",{staticClass:"text-secondaryLight"},[e._v(e._s(e.$t("state.loading")))])],1):null!=e.folder.children&&0!==e.folder.children.length||null!=e.folder.requests&&0!==e.folder.requests.length?e._e():n("div",{staticClass:"flex flex-col items-center justify-center p-4 text-secondaryLight"},[n("img",{staticClass:"inline-flex flex-col object-contain object-center w-16 h-16 mb-4",attrs:{src:"/images/states/"+e.$colorMode.value+"/pack.svg",loading:"lazy",alt:""+e.$t("empty.folder")}}),e._v(" "),n("span",{staticClass:"text-center"},[e._v("\n          "+e._s(e.$t("empty.folder"))+"\n        ")])])],2)]):e._e(),e._v(" "),n("SmartConfirmModal",{attrs:{show:e.confirmRemove,title:e.$t("confirm.remove_folder")},on:{"hide-modal":function(t){e.confirmRemove=!1},resolve:e.removeFolder}})],1)}),[],!1,null,null,null);t.default=p.exports;installComponents(p,{SmartIcon:n(111).default,ButtonSecondary:n(106).default,SmartItem:n(123).default,CollectionsTeamsFolder:n(1082).default,CollectionsTeamsRequest:n(1076).default,SmartSpinner:n(176).default,SmartConfirmModal:n(361).default})},1816:function(e,t,n){"use strict";n.r(t);var o=n(20),i=(n(62),n(496),n(5),n(133),n(78),n(72),n(902),n(296),n(56),n(114),n(3)),r=n(16),l=n(1079),c=n(1080),s=n(24),a=Object(i.c)({props:{collectionIndex:{type:Number,default:null},collection:{type:Object,default:function(){}},doc:Boolean,isFiltered:Boolean,selected:Boolean,saveRequest:Boolean,collectionsType:{type:Object,default:function(){}},picked:{type:Object,default:function(){}},loadingCollectionIDs:{type:Array,default:function(){return[]}}},setup:function(){var e=Object(s.d)();return{tippyActions:Object(i.o)(null),options:Object(i.o)(null),folderAction:Object(i.o)(null),edit:Object(i.o)(null),deleteAction:Object(i.o)(null),exportAction:Object(i.o)(null),exportLoading:Object(i.o)(!1),t:e}},data:function(){return{showChildren:!1,dragging:!1,selectedFolder:{},confirmRemove:!1,prevCursor:"",cursor:"",pageNo:0}},computed:{isSelected:function(){return this.picked&&"teams-collection"===this.picked.pickedType&&this.picked.collectionID===this.collection.id},getCollectionIcon:function(){return this.isSelected?"check-circle":(this.showChildren||this.isFiltered)&&(this.showChildren||this.isFiltered)?"folder-open":"folder"}},methods:{exportCollection:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var n,o,i,c,s,a;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.exportLoading=!0,t.next=3,Object(l.a)(e.collection.id)();case 3:if(n=t.sent,!r.isLeft(n)){t.next=10;break}return e.$toast.error(e.$t("error.something_went_wrong").toString()),n.left,e.exportLoading=!1,e.options.tippy().hide(),t.abrupt("return");case 10:o=Object(l.b)(n.right),i=JSON.stringify(o),c=new Blob([i],{type:"application/json"}),s=document.createElement("a"),a=URL.createObjectURL(c),s.href=a,s.download="".concat(o.name,".json"),document.body.appendChild(s),s.click(),e.$toast.success(e.$t("state.download_started").toString()),setTimeout((function(){document.body.removeChild(s),URL.revokeObjectURL(a)}),1e3),e.exportLoading=!1,e.options.tippy().hide();case 23:case"end":return t.stop()}}),t)})))()},editRequest:function(e){this.$emit("edit-request",e),this.$props.saveRequest&&this.$emit("select",{picked:{pickedType:"teams-collection",collectionID:this.collection.id}})},toggleShowChildren:function(){this.$props.saveRequest&&this.$emit("select",{picked:{pickedType:"teams-collection",collectionID:this.collection.id}}),this.$emit("expand-collection",this.collection.id),this.showChildren=!this.showChildren},removeCollection:function(){this.$emit("remove-collection",{collectionsType:this.collectionsType,collectionIndex:this.collectionIndex,collectionID:this.collection.id})},expandCollection:function(e){this.$emit("expand-collection",e)},dropEvent:function(e){var t=this;return Object(o.a)(regeneratorRuntime.mark((function n(){var o,i,l;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return o=e.dataTransfer,t.dragging=!t.dragging,i=o.getData("requestIndex"),n.next=5,Object(c.a)(i,t.collection.id)();case 5:l=n.sent,r.isLeft(l)&&t.$toast.error("".concat(t.$t("error.something_went_wrong")));case 7:case"end":return n.stop()}}),n)})))()},removeRequest:function(e){var t=e.collectionIndex,n=e.folderName,o=e.requestIndex;this.$emit("remove-request",{collectionIndex:t,folderName:n,requestIndex:o})}}}),u=n(23),d=Object(u.a)(a,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"flex flex-col"},[n("div",{staticClass:"flex items-stretch group",on:{dragover:[function(e){e.preventDefault()},function(t){e.dragging=!0}],drop:[function(t){return t.preventDefault(),e.dropEvent.apply(null,arguments)},function(t){e.dragging=!1}],dragleave:function(t){e.dragging=!1},dragend:function(t){e.dragging=!1},contextmenu:function(t){t.preventDefault(),e.options.tippy().show()}}},[n("span",{staticClass:"flex items-center justify-center px-4 cursor-pointer",on:{click:function(t){return e.toggleShowChildren()}}},[n("SmartIcon",{staticClass:"svg-icons",class:{"text-accent":e.isSelected},attrs:{name:e.getCollectionIcon}})],1),e._v(" "),n("span",{staticClass:"flex flex-1 min-w-0 py-2 pr-2 cursor-pointer transition group-hover:text-secondaryDark",on:{click:function(t){return e.toggleShowChildren()}}},[n("span",{staticClass:"truncate",class:{"text-accent":e.isSelected}},[e._v("\n        "+e._s(e.collection.title)+"\n      ")])]),e._v(" "),n("div",{staticClass:"flex"},[e.doc&&!e.selected?n("ButtonSecondary",{directives:[{name:"tippy",rawName:"v-tippy",value:{theme:"tooltip"},expression:"{ theme: 'tooltip' }"}],attrs:{title:e.t("import.title"),svg:"circle",color:"green"},nativeOn:{click:function(t){return e.$emit("select-collection")}}}):e._e(),e._v(" "),e.doc&&e.selected?n("ButtonSecondary",{directives:[{name:"tippy",rawName:"v-tippy",value:{theme:"tooltip"},expression:"{ theme: 'tooltip' }"}],attrs:{title:e.t("action.remove"),svg:"check-circle",color:"green"},nativeOn:{click:function(t){return e.$emit("unselect-collection")}}}):e._e(),e._v(" "),"VIEWER"!==e.collectionsType.selectedTeam.myRole?n("ButtonSecondary",{directives:[{name:"tippy",rawName:"v-tippy",value:{theme:"tooltip"},expression:"{ theme: 'tooltip' }"}],staticClass:"hidden group-hover:inline-flex",attrs:{svg:"folder-plus",title:e.t("folder.new")},nativeOn:{click:function(t){return e.$emit("add-folder",{folder:e.collection,path:""+e.collectionIndex})}}}):e._e(),e._v(" "),n("span",["VIEWER"!==e.collectionsType.selectedTeam.myRole?n("tippy",{ref:"options",attrs:{interactive:"",trigger:"click",theme:"popover",arrow:"","on-shown":function(){return e.tippyActions.focus()}},scopedSlots:e._u([{key:"trigger",fn:function(){return[n("ButtonSecondary",{directives:[{name:"tippy",rawName:"v-tippy",value:{theme:"tooltip"},expression:"{ theme: 'tooltip' }"}],attrs:{title:e.t("action.more"),svg:"more-vertical"}})]},proxy:!0}],null,!1,3953414183)},[e._v(" "),n("div",{ref:"tippyActions",staticClass:"flex flex-col focus:outline-none",attrs:{tabindex:"0",role:"menu"},on:{keyup:[function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"n",void 0,t.key,void 0)?null:e.folderAction.$el.click()},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"e",void 0,t.key,void 0)?null:e.edit.$el.click()},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"delete",[8,46],t.key,["Backspace","Delete","Del"])?null:e.deleteAction.$el.click()},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"x",void 0,t.key,void 0)?null:e.exportAction.$el.click()},function(t){if(!t.type.indexOf("key")&&e._k(t.keyCode,"escape",void 0,t.key,void 0))return null;e.options.tippy().hide()}]}},[n("SmartItem",{ref:"folderAction",attrs:{svg:"folder-plus",label:e.t("folder.new"),shortcut:["N"]},nativeOn:{click:function(t){return function(){e.$emit("add-folder",{folder:e.collection,path:""+e.collectionIndex}),e.options.tippy().hide()}.apply(null,arguments)}}}),e._v(" "),n("SmartItem",{ref:"edit",attrs:{svg:"edit",label:e.t("action.edit"),shortcut:["E"]},nativeOn:{click:function(t){return function(){e.$emit("edit-collection"),e.options.tippy().hide()}.apply(null,arguments)}}}),e._v(" "),n("SmartItem",{ref:"exportAction",attrs:{svg:"download",label:e.$t("export.title"),shortcut:["X"],loading:e.exportLoading},nativeOn:{click:function(t){return e.exportCollection.apply(null,arguments)}}}),e._v(" "),n("SmartItem",{ref:"deleteAction",attrs:{svg:"trash-2",label:e.t("action.delete"),shortcut:["⌫"]},nativeOn:{click:function(t){return function(){e.confirmRemove=!0,e.options.tippy().hide()}.apply(null,arguments)}}})],1)]):e._e()],1)],1)]),e._v(" "),e.showChildren||e.isFiltered?n("div",{staticClass:"flex"},[n("div",{staticClass:"bg-dividerLight cursor-nsResize flex ml-5.5 transform transition w-1 hover:bg-dividerDark hover:scale-x-125",on:{click:function(t){return e.toggleShowChildren()}}}),e._v(" "),n("div",{staticClass:"flex flex-col flex-1 truncate"},[e._l(e.collection.children,(function(t,o){return n("CollectionsTeamsFolder",{key:"folder-"+o,attrs:{folder:t,"folder-index":o,"folder-path":e.collectionIndex+"/"+o,"collection-index":e.collectionIndex,doc:e.doc,"save-request":e.saveRequest,"collections-type":e.collectionsType,"is-filtered":e.isFiltered,picked:e.picked,"loading-collection-i-ds":e.loadingCollectionIDs},on:{"add-folder":function(t){return e.$emit("add-folder",t)},"edit-folder":function(t){return e.$emit("edit-folder",t)},"edit-request":function(t){return e.$emit("edit-request",t)},select:function(t){return e.$emit("select",t)},"expand-collection":e.expandCollection,"remove-request":e.removeRequest,"duplicate-request":function(t){return e.$emit("duplicate-request",t)}}})})),e._v(" "),e._l(e.collection.requests,(function(t,o){return n("CollectionsTeamsRequest",{key:"request-"+o,attrs:{request:t.request,"collection-index":e.collectionIndex,"folder-index":-1,"folder-name":e.collection.name,"request-index":t.id,doc:e.doc,"save-request":e.saveRequest,"collection-i-d":e.collection.id,"collections-type":e.collectionsType,picked:e.picked},on:{"edit-request":function(t){return e.editRequest(t)},select:function(t){return e.$emit("select",t)},"remove-request":e.removeRequest,"duplicate-request":function(t){return e.$emit("duplicate-request",t)}}})})),e._v(" "),e.loadingCollectionIDs.includes(e.collection.id)?n("div",{staticClass:"flex flex-col items-center justify-center p-4"},[n("SmartSpinner",{staticClass:"my-4"}),e._v(" "),n("span",{staticClass:"text-secondaryLight"},[e._v(e._s(e.$t("state.loading")))])],1):null!=e.collection.children&&0!==e.collection.children.length||null!=e.collection.requests&&0!==e.collection.requests.length?e._e():n("div",{staticClass:"flex flex-col items-center justify-center p-4 text-secondaryLight"},[n("img",{staticClass:"inline-flex flex-col object-contain object-center w-16 h-16 mb-4",attrs:{src:"/images/states/"+e.$colorMode.value+"/pack.svg",loading:"lazy",alt:""+e.t("empty.collection")}}),e._v(" "),n("span",{staticClass:"text-center"},[e._v("\n          "+e._s(e.t("empty.collection"))+"\n        ")])])],2)]):e._e(),e._v(" "),n("SmartConfirmModal",{attrs:{show:e.confirmRemove,title:e.t("confirm.remove_collection")},on:{"hide-modal":function(t){e.confirmRemove=!1},resolve:e.removeCollection}})],1)}),[],!1,null,null,null);t.default=d.exports;installComponents(d,{SmartIcon:n(111).default,ButtonSecondary:n(106).default,SmartItem:n(123).default,CollectionsTeamsFolder:n(1082).default,CollectionsTeamsRequest:n(1076).default,SmartSpinner:n(176).default,SmartConfirmModal:n(361).default})}}]);