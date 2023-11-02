import{d as _,u as d,a as p,c as m,b as u,r as h,o as a,e as n,f as t,t as s,g as l,F as f,h as g,n as v,i as y,j as x,k as b,l as N,m as k,_ as P}from"./index-71c7bc0d.js";import{N as w}from"./NoteDisplay-f0b32737.js";const V={class:"m-4"},L={class:"mb-10"},S={class:"text-4xl font-bold mt-2"},T={class:"opacity-50"},j={class:"text-lg"},z={class:"font-bold flex gap-2"},B={class:"opacity-50"},D=t("div",{class:"flex-auto"},null,-1),H={key:0,class:"border-gray-400/50 mb-8"},C=_({__name:"PresenterPrint",setup(F){d(`
@page {
  size: A4;
  margin-top: 1.5cm;
  margin-bottom: 1cm;
}
* {
  -webkit-print-color-adjust: exact;
}
html,
html body,
html #app,
html #page-root {
  height: auto;
  overflow: auto !important;
}
`),p({title:`Notes - ${m.title}`});const c=u(()=>h.map(o=>{var r;return(r=o.meta)==null?void 0:r.slide}).filter(o=>o!==void 0&&o.noteHTML!==""));return(o,r)=>(a(),n("div",{id:"page-root",style:v(l(y))},[t("div",V,[t("div",L,[t("h1",S,s(l(m).title),1),t("div",T,s(new Date().toLocaleString()),1)]),(a(!0),n(f,null,g(c.value,(e,i)=>(a(),n("div",{key:i,class:"flex flex-col gap-4 break-inside-avoid-page"},[t("div",null,[t("h2",j,[t("div",z,[t("div",B,s(e==null?void 0:e.no)+"/"+s(l(x)),1),b(" "+s(e==null?void 0:e.title)+" ",1),D])]),N(w,{"note-html":e.noteHTML,class:"max-w-full"},null,8,["note-html"])]),i<c.value.length-1?(a(),n("hr",H)):k("v-if",!0)]))),128))])],4))}}),E=P(C,[["__file","/Users/huzongyao/slidev-project/feiyang-1st-conference/node_modules/@slidev/client/internals/PresenterPrint.vue"]]);export{E as default};
