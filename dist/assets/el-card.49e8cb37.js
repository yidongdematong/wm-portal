import{av as c,aw as v,d as i,A as y,o,e as u,n as r,u as a,a5 as n,i as h,t as _,a7 as S,g as b,a6 as f,K as m,af as g,v as p,a4 as C,M as $,w as k,au as R}from"./index.3a3e9074.js";import{r as E}from"./el-col.9a9c4700.js";const j=c({header:{type:String,default:""},bodyStyle:{type:v([String,Object,Array]),default:""},shadow:{type:String,values:["always","hover","never"],default:"always"}}),N={name:"ElCard"},B=i({...N,props:j,setup(l){const s=y("card");return(e,d)=>(o(),u("div",{class:r([a(s).b(),a(s).is(`${e.shadow}-shadow`)])},[e.$slots.header||e.header?(o(),u("div",{key:0,class:r(a(s).e("header"))},[n(e.$slots,"header",{},()=>[h(_(e.header),1)])],2)):S("v-if",!0),b("div",{class:r(a(s).e("body")),style:f(e.bodyStyle)},[n(e.$slots,"default")],6)],2))}});var P=m(B,[["__file","/home/runner/work/element-plus/element-plus/packages/components/card/src/card.vue"]]);const M=g(P),A=["start","center","end","space-around","space-between","space-evenly"],V=["top","middle","bottom"],z=c({tag:{type:String,default:"div"},gutter:{type:Number,default:0},justify:{type:String,values:A,default:"start"},align:{type:String,values:V,default:"top"}}),D={name:"ElRow"},K=i({...D,props:z,setup(l){const s=l,e=y("row"),d=p(()=>s.gutter);C(E,{gutter:d});const w=p(()=>{const t={};return s.gutter&&(t.marginRight=t.marginLeft=`-${s.gutter/2}px`),t});return(t,I)=>(o(),$(R(t.tag),{class:r([a(e).b(),a(e).is(`justify-${s.justify}`,t.justify!=="start"),a(e).is(`align-${s.align}`,t.align!=="top")]),style:f(a(w))},{default:k(()=>[n(t.$slots,"default")]),_:3},8,["class","style"]))}});var T=m(K,[["__file","/home/runner/work/element-plus/element-plus/packages/components/row/src/row.vue"]]);const O=g(T);export{M as E,O as a};
