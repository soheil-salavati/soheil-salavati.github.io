(window.webpackJsonp=window.webpackJsonp||[]).push([[110],{984:function(e,t,n){"use strict";n.r(t);var a=n(3),i={};i.props={label:{type:String,default:null},info:{type:String,default:null},indicator:{type:Boolean,default:!1},icon:{type:String,default:null},id:{type:String,default:null,required:!0},selected:{type:Boolean,default:!1}},i.setup=function(e,t){var n=e,i=Object(a.a)((function(){return{icon:n.icon,indicator:n.indicator,info:n.info,label:n.label}})),l=Object(a.e)("tabs-system"),u=l.activeTabID,c=l.addTabEntry,r=l.updateTabEntry,o=l.removeTabEntry,d=Object(a.a)((function(){return u.value===n.id}));return Object(a.j)((function(){c(n.id,i.value)})),Object(a.y)(i,(function(e){r(n.id,e)})),Object(a.i)((function(){o(n.id)})),{active:d}};var l=i,u=n(23),c=Object(u.a)(l,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{directives:[{name:"show",rawName:"v-show",value:e.active,expression:"active"}],staticClass:"flex flex-col flex-1"},[e._t("default")],2)}),[],!1,null,null,null);t.default=c.exports}}]);