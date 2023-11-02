import{o as i,e as m,f as e,d as L,b as S,p as b,q as h,s as C,_ as A,v as k,w as F,x as I,c as z,a as R,y as U,z as N,A as E,B as j,C as q,D as O,E as W,G,H as J,I as K,J as Q,K as X,L as Y,M as ee,N as te,g as t,O as se,l as o,t as oe,n as v,i as M,P as V,S as H,m as B,Q as ne,R as P,T,U as le,j as ae,V as w,W as ie,X as re,F as ce,Y as ue,Z as de,$ as _e,a0 as me,a1 as pe,a2 as ve,a3 as he}from"./index-8dea90c4.js";import{N as fe}from"./NoteDisplay-8afdaa10.js";import ge from"./DrawingControls-fc08cc39.js";const xe={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},ye=e("path",{fill:"currentColor",d:"M8 12h10v2H8z"},null,-1),we=e("path",{fill:"currentColor",d:"M21.448 20A10.856 10.856 0 0 0 24 13a11 11 0 1 0-11 11a10.856 10.856 0 0 0 7-2.552L27.586 29L29 27.586ZM13 22a9 9 0 1 1 9-9a9.01 9.01 0 0 1-9 9Z"},null,-1),Se=[ye,we];function be(l,r){return i(),m("svg",xe,[...Se])}const Ce={name:"carbon-zoom-out",render:be},$e={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},ke=e("path",{fill:"currentColor",d:"M18 12h-4V8h-2v4H8v2h4v4h2v-4h4v-2z"},null,-1),ze=e("path",{fill:"currentColor",d:"M21.448 20A10.856 10.856 0 0 0 24 13a11 11 0 1 0-11 11a10.856 10.856 0 0 0 7-2.552L27.586 29L29 27.586ZM13 22a9 9 0 1 1 9-9a9.01 9.01 0 0 1-9 9Z"},null,-1),Ne=[ke,ze];function Me(l,r){return i(),m("svg",$e,[...Ne])}const Ve={name:"carbon-zoom-in",render:Me},He={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Be=e("path",{fill:"currentColor",d:"M12 10H6.78A11 11 0 0 1 27 16h2A13 13 0 0 0 6 7.68V4H4v8h8zm8 12h5.22A11 11 0 0 1 5 16H3a13 13 0 0 0 23 8.32V28h2v-8h-8z"},null,-1),Pe=[Be];function Te(l,r){return i(),m("svg",He,[...Pe])}const Le={name:"carbon-renew",render:Te},Ae={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Ze=e("path",{fill:"currentColor",d:"M16 30a14 14 0 1 1 14-14a14 14 0 0 1-14 14Zm0-26a12 12 0 1 0 12 12A12 12 0 0 0 16 4Z"},null,-1),De=e("path",{fill:"currentColor",d:"M20.59 22L15 16.41V7h2v8.58l5 5.01L20.59 22z"},null,-1),Fe=[Ze,De];function Ie(l,r){return i(),m("svg",Ae,[...Fe])}const Re={name:"carbon-time",render:Ie},Ue="/feiyang-1st-conference/dist/assets/logo-title-horizontal-96c3c915.png",Ee=L({__name:"NoteStatic",props:{class:{type:String,required:!1}},setup(l){const r=l,g=S(()=>{var c,u,n;return(n=(u=(c=b.value)==null?void 0:c.meta)==null?void 0:u.slide)==null?void 0:n.note}),x=S(()=>{var c,u,n;return(n=(u=(c=b.value)==null?void 0:c.meta)==null?void 0:u.slide)==null?void 0:n.noteHTML});return(c,u)=>(i(),h(fe,{class:C(r.class),note:g.value,"note-html":x.value},null,8,["class","note","note-html"]))}}),je=A(Ee,[["__file","/Users/huzongyao/slidev-project/feiyang-1st-conference/node_modules/@slidev/client/internals/NoteStatic.vue"]]),f=l=>(ve("data-v-574fd206"),l=l(),he(),l),qe={class:"bg-main h-full slidev-presenter"},Oe={class:"grid-section top flex"},We=f(()=>e("img",{src:Ue,class:"ml-2 my-auto h-10 py-1 lg:h-14 lg:py-2",style:{height:"3.5rem"},alt:"Slidev logo"},null,-1)),Ge=f(()=>e("div",{class:"flex-auto"},null,-1)),Je={class:"text-2xl pl-2 pr-6 my-auto tabular-nums"},Ke=f(()=>e("div",{class:"context"}," current ",-1)),Qe=f(()=>e("div",{class:"context"}," next ",-1)),Xe={key:1,class:"grid-section note grid grid-rows-[1fr_min-content]"},Ye={class:"border-t border-main py-1 px-2 text-sm"},et={class:"grid-section bottom"},tt={class:"progress-bar"},st=L({__name:"Presenter",setup(l){const r=k();F(),I(r);const g=z.titleTemplate.replace("%s",z.title||"Slidev");R({title:`Presenter - ${g}`});const{timer:x,resetTimer:c}=U(),u=k([]),n=S(()=>N.value<E.value?{route:b.value,clicks:N.value+1}:j.value?{route:q.value,clicks:0}:null);return O(),W(()=>{const $=r.value.querySelector("#slide-content"),s=G(J()),y=K();Q(()=>{if(!y.value||Y.value||!ee.value)return;const d=$.getBoundingClientRect(),_=(s.x-d.left)/d.width*100,p=(s.y-d.top)/d.height*100;if(!(_<0||_>100||p<0||p>100))return{x:_,y:p}},d=>{X.cursor=d})}),($,s)=>{const y=Re,d=Le,_=te("HiddenText"),p=Ve,Z=Ce;return i(),m(ce,null,[e("div",qe,[e("div",{class:C(["grid-container",`layout${t(se)}`])},[e("div",Oe,[We,Ge,e("div",{class:"timer-btn my-auto relative w-22px h-22px cursor-pointer text-lg",opacity:"50 hover:100",onClick:s[0]||(s[0]=(...a)=>t(c)&&t(c)(...a))},[o(y,{class:"absolute"}),o(d,{class:"absolute opacity-0"})]),e("div",Je,oe(t(x)),1)]),e("div",{ref_key:"main",ref:r,class:"relative grid-section main flex flex-col p-2 lg:p-4",style:v(t(M))},[o(H,{key:"main",class:"h-full w-full"},{default:V(()=>[o(ue,{"render-context":"presenter"})]),_:1}),Ke],4),e("div",{class:"relative grid-section next flex flex-col p-2 lg:p-4",style:v(t(M))},[n.value?(i(),h(H,{key:"next",class:"h-full w-full"},{default:V(()=>{var a;return[o(t(_e),{is:(a=n.value.route)==null?void 0:a.component,"clicks-elements":u.value,"onUpdate:clicksElements":s[1]||(s[1]=D=>u.value=D),clicks:n.value.clicks,"clicks-disabled":!1,class:C(t(de)(n.value.route)),route:n.value.route,"render-context":"previewNext"},null,8,["is","clicks-elements","clicks","class","route"])]}),_:1})):B("v-if",!0),Qe],4),B(" Notes "),(i(),m("div",Xe,[(i(),h(je,{key:1,class:"w-full max-w-full h-full overflow-auto p-2 lg:p-4",style:v({fontSize:`${t(ne)}em`})},null,8,["style"])),e("div",Ye,[e("button",{class:"slidev-icon-btn",onClick:s[2]||(s[2]=(...a)=>t(P)&&t(P)(...a))},[o(_,{text:"Increase font size"}),o(p)]),e("button",{class:"slidev-icon-btn",onClick:s[3]||(s[3]=(...a)=>t(T)&&t(T)(...a))},[o(_,{text:"Decrease font size"}),o(Z)])])])),e("div",et,[o(me,{persist:!0})]),(i(),h(ge,{key:2}))],2),e("div",tt,[e("div",{class:"progress h-2px bg-primary transition-all",style:v({width:`${(t(le)-1)/(t(ae)-1)*100}%`})},null,4)])]),o(pe),o(re,{modelValue:t(w),"onUpdate:modelValue":s[4]||(s[4]=a=>ie(w)?w.value=a:null)},null,8,["modelValue"])],64)}}});const at=A(st,[["__scopeId","data-v-574fd206"],["__file","/Users/huzongyao/slidev-project/feiyang-1st-conference/node_modules/@slidev/client/internals/Presenter.vue"]]);export{at as default};
