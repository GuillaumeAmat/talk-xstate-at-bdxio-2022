import{d as _,u as d,a as h,c as m,b as p,e as n,f as t,t as a,g as s,F as u,r as f,n as g,h as v,o as l,i as x,j as b,k as y,l as k,m as N,p as w,q as S}from"./index.2bb44118.js";import{_ as V}from"./NoteViewer.vue_vue_type_script_setup_true_lang.0925151d.js";const j={class:"m-4"},L={class:"mb-10"},T={class:"text-4xl font-bold mt-2"},B={class:"opacity-50"},C={class:"text-lg"},H={class:"font-bold flex gap-2"},z={class:"opacity-50"},D=t("div",{class:"flex-auto"},null,-1),F={key:0,class:"border-gray-400/50 mb-8"},q=_({__name:"PresenterPrint",setup(M){w(S),d(`
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
`),h({title:`Notes - ${m.title}`});const i=p(()=>v.slice(0,-1).map(o=>{var c;return(c=o.meta)==null?void 0:c.slide}).filter(o=>o!==void 0&&o.notesHTML!==""));return(o,c)=>(l(),n("div",{id:"page-root",style:g(s(N))},[t("div",j,[t("div",L,[t("h1",T,a(s(m).title),1),t("div",B,a(new Date().toLocaleString()),1)]),(l(!0),n(u,null,f(s(i),(e,r)=>(l(),n("div",{key:r,class:"flex flex-col gap-4 break-inside-avoid-page"},[t("div",null,[t("h2",C,[t("div",H,[t("div",z,a(e==null?void 0:e.no)+"/"+a(s(x)),1),b(" "+a(e==null?void 0:e.title)+" ",1),D])]),y(V,{"note-html":e.notesHTML,class:"max-w-full"},null,8,["note-html"])]),r<s(i).length-1?(l(),n("hr",F)):k("",!0)]))),128))])],4))}});export{q as default};
