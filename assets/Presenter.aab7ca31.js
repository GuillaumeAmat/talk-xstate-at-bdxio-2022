import{o as _,e as $,f as e,v as y,w as P,x as h,d as B,p as z,q as H,y as k,z as v,s as N,g as t,A,B as I,c as b,a as R,C as D,D as L,E,G as F,H as U,k as u,t as W,n as g,I as C,_ as V,l as Z,J as j,K as w,L as q,F as O,M as G,N as J,O as T,P as K,Q,R as X,S as Y,T as ee,U as te,m as M,V as se,W as oe,X as ne,Y as ae,Z as le,i as ce,$ as ie,a0 as re}from"./index.2bb44118.js";import{_ as ue}from"./NoteViewer.vue_vue_type_script_setup_true_lang.0925151d.js";import{_ as _e}from"./DrawingControls.vue_vue_type_script_setup_true_lang.8455e518.js";const de={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},me=e("path",{fill:"currentColor",d:"M12 10H6.78A11 11 0 0 1 27 16h2A13 13 0 0 0 6 7.68V4H4v8h8zm8 12h5.22A11 11 0 0 1 5 16H3a13 13 0 0 0 23 8.32V28h2v-8h-8z"},null,-1),pe=[me];function ve(n,l){return _(),$("svg",de,pe)}const he={name:"carbon-renew",render:ve},fe={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},xe=e("path",{fill:"currentColor",d:"M16 30a14 14 0 1 1 14-14a14 14 0 0 1-14 14Zm0-26a12 12 0 1 0 12 12A12 12 0 0 0 16 4Z"},null,-1),ge=e("path",{fill:"currentColor",d:"M20.59 22L15 16.41V7h2v8.58l5 5.01L20.59 22z"},null,-1),we=[xe,ge];function ye(n,l){return _(),$("svg",fe,we)}const ke={name:"carbon-time",render:ye},$e="/talk-xstate-at-bdxio-2022/assets/logo-title-horizontal.96c3c915.png";function Se(){const n=y(Date.now()),l=P({interval:1e3}),d=h(()=>{const s=(l.value-n.value)/1e3,a=Math.floor(s%60).toString().padStart(2,"0");return`${Math.floor(s/60).toString().padStart(2,"0")}:${a}`});function m(){n.value=l.value}return{timer:d,resetTimer:m}}const be=B({__name:"NoteStatic",props:{class:null},setup(n){const l=n;z(H);const d=h(()=>{var s,a,o;return(o=(a=(s=k.value)==null?void 0:s.meta)==null?void 0:a.slide)==null?void 0:o.note}),m=h(()=>{var s,a,o;return(o=(a=(s=k.value)==null?void 0:s.meta)==null?void 0:a.slide)==null?void 0:o.notesHTML});return(s,a)=>(_(),v(ue,{class:N(l.class),note:t(d),"note-html":t(m)},null,8,["class","note","note-html"]))}}),f=n=>(G("data-v-a70c4689"),n=n(),J(),n),Ce={class:"bg-main h-full slidev-presenter"},Ve={class:"grid-container"},Te={class:"grid-section top flex"},Me=f(()=>e("img",{src:$e,class:"ml-2 my-auto h-10 py-1 lg:h-14 lg:py-2"},null,-1)),Be=f(()=>e("div",{class:"flex-auto"},null,-1)),ze={class:"text-2xl pl-2 pr-6 my-auto tabular-nums"},He=f(()=>e("div",{class:"context"}," current ",-1)),Ne=f(()=>e("div",{class:"context"}," next ",-1)),Pe={class:"grid-section note overflow-auto"},Ae={class:"grid-section bottom"},Ie={class:"progress-bar"},Re=B({__name:"Presenter",setup(n){z(H);const l=y();A(),I(l);const d=b.titleTemplate.replace("%s",b.title||"Slidev");R({title:`Presenter - ${d}`});const{timer:m,resetTimer:s}=Se(),a=y([]),o=h(()=>T.value<K.value?{route:k.value,clicks:T.value+1}:Q.value?{route:X.value,clicks:0}:null);return D(()=>{const S=l.value.querySelector("#slide-content"),i=L(E()),x=F();U(()=>{if(!x.value||ee.value||!te.value)return;const r=S.getBoundingClientRect(),c=(i.x-r.left)/r.width*100,p=(i.y-r.top)/r.height*100;if(!(c<0||c>100||p<0||p>100))return{x:c,y:p}},r=>{Y.cursor=r})}),(S,i)=>{const x=ke,r=he;return _(),$(O,null,[e("div",Ce,[e("div",Ve,[e("div",Te,[Me,Be,e("div",{class:"timer-btn my-auto relative w-22px h-22px cursor-pointer text-lg",opacity:"50 hover:100",onClick:i[0]||(i[0]=(...c)=>t(s)&&t(s)(...c))},[u(x,{class:"absolute"}),u(r,{class:"absolute opacity-0"})]),e("div",ze,W(t(m)),1)]),e("div",{ref_key:"main",ref:l,class:"relative grid-section main flex flex-col p-2 lg:p-4",style:g(t(M))},[u(V,{key:"main",class:"h-full w-full"},{default:C(()=>[u(se,{context:"presenter"})]),_:1}),He],4),e("div",{class:"relative grid-section next flex flex-col p-2 lg:p-4",style:g(t(M))},[t(o)?(_(),v(V,{key:"next",class:"h-full w-full"},{default:C(()=>{var c;return[u(t(ne),{is:(c=t(o).route)==null?void 0:c.component,"clicks-elements":a.value,"onUpdate:clicks-elements":i[1]||(i[1]=p=>a.value=p),clicks:t(o).clicks,"clicks-disabled":!1,class:N(t(oe)(t(o).route)),route:t(o).route,context:"previewNext"},null,8,["is","clicks-elements","clicks","class","route"])]}),_:1})):Z("",!0),Ne],4),e("div",Pe,[(_(),v(be,{key:1,class:"w-full h-full overflow-auto p-2 lg:p-4"}))]),e("div",Ae,[u(ae,{persist:!0})]),(_(),v(_e,{key:0}))]),e("div",Ie,[e("div",{class:"progress h-2px bg-primary transition-all",style:g({width:`${(t(le)-1)/(t(ce)-1)*100}%`})},null,4)])]),u(ie),u(q,{modelValue:t(w),"onUpdate:modelValue":i[2]||(i[2]=c=>j(w)?w.value=c:null)},null,8,["modelValue"])],64)}}});const Fe=re(Re,[["__scopeId","data-v-a70c4689"]]);export{Fe as default};
