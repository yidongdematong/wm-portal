import{v as c,by as Ke,s as $e,q as V,a3 as Se,av as We,al as je,aw as J,aY as Ce,ax as Ue,ae as Q,d as _e,aV as Xe,as as Ye,am as qe,an as Ze,a2 as Ge,bz as Je,A as Ie,aL as ee,bA as Qe,bB as et,bC as tt,bD as at,a1 as ot,x as te,B as k,ar as Ee,R as st,S as nt,bE as lt,P as rt,a8 as it,o as d,e as x,a7 as v,N as ae,n as y,u as t,a5 as W,g as N,M as w,w as F,au as j,b as L,aW as oe,f as ut,aB as dt,aM as ct,bg as pt,t as U,a6 as ft,K as vt,D as mt,ay as ze,af as yt}from"./index.3a3e9074.js";import{U as se}from"./event.776e7e11.js";const ht=o=>/([(\uAC00-\uD7AF)|(\u3130-\u318F)])+/gi.test(o),bt=["class","style"],gt=/^on[A-Z]/,xt=(o={})=>{const{excludeListeners:m=!1,excludeKeys:l}=o,a=c(()=>((l==null?void 0:l.value)||[]).concat(bt)),i=$e();return i?c(()=>{var p;return Ke(Object.entries((p=i.proxy)==null?void 0:p.$attrs).filter(([r])=>!a.value.includes(r)&&!(m&&gt.test(r))))}):c(()=>({}))};function wt(o){const m=V();function l(){if(o.value==null)return;const{selectionStart:i,selectionEnd:p,value:r}=o.value;if(i==null||p==null)return;const g=r.slice(0,Math.max(0,i)),u=r.slice(Math.max(0,p));m.value={selectionStart:i,selectionEnd:p,value:r,beforeTxt:g,afterTxt:u}}function a(){if(o.value==null||m.value==null)return;const{value:i}=o.value,{beforeTxt:p,afterTxt:r,selectionStart:g}=m.value;if(p==null||r==null||g==null)return;let u=i.length;if(i.endsWith(r))u=i.length-r.length;else if(i.startsWith(p))u=p.length;else{const h=p[g-1],S=i.indexOf(h,g-1);S!==-1&&(u=S+1)}o.value.setSelectionRange(u,u)}return[l,a]}let b;const St=`
  height:0 !important;
  visibility:hidden !important;
  overflow:hidden !important;
  position:absolute !important;
  z-index:-1000 !important;
  top:0 !important;
  right:0 !important;
`,Ct=["letter-spacing","line-height","padding-top","padding-bottom","font-family","font-weight","font-size","text-rendering","text-transform","width","text-indent","padding-left","padding-right","border-width","box-sizing"];function It(o){const m=window.getComputedStyle(o),l=m.getPropertyValue("box-sizing"),a=Number.parseFloat(m.getPropertyValue("padding-bottom"))+Number.parseFloat(m.getPropertyValue("padding-top")),i=Number.parseFloat(m.getPropertyValue("border-bottom-width"))+Number.parseFloat(m.getPropertyValue("border-top-width"));return{contextStyle:Ct.map(r=>`${r}:${m.getPropertyValue(r)}`).join(";"),paddingSize:a,borderSize:i,boxSizing:l}}function Pe(o,m=1,l){var a;b||(b=document.createElement("textarea"),document.body.appendChild(b));const{paddingSize:i,borderSize:p,boxSizing:r,contextStyle:g}=It(o);b.setAttribute("style",`${g};${St}`),b.value=o.value||o.placeholder||"";let u=b.scrollHeight;const h={};r==="border-box"?u=u+p:r==="content-box"&&(u=u-i),b.value="";const S=b.scrollHeight-i;if(Se(m)){let f=S*m;r==="border-box"&&(f=f+i+p),u=Math.max(f,u),h.minHeight=`${f}px`}if(Se(l)){let f=S*l;r==="border-box"&&(f=f+i+p),u=Math.min(f,u)}return h.height=`${u}px`,(a=b.parentNode)==null||a.removeChild(b),b=void 0,h}const Et=We({id:{type:String,default:void 0},size:je,disabled:Boolean,modelValue:{type:J([String,Number,Object]),default:""},type:{type:String,default:"text"},resize:{type:String,values:["none","both","horizontal","vertical"]},autosize:{type:J([Boolean,Object]),default:!1},autocomplete:{type:String,default:"off"},formatter:{type:Function},parser:{type:Function},placeholder:{type:String},form:{type:String,default:""},readonly:{type:Boolean,default:!1},clearable:{type:Boolean,default:!1},showPassword:{type:Boolean,default:!1},showWordLimit:{type:Boolean,default:!1},suffixIcon:{type:Ce,default:""},prefixIcon:{type:Ce,default:""},containerRole:{type:String,default:void 0},label:{type:String,default:void 0},tabindex:{type:[String,Number],default:0},validateEvent:{type:Boolean,default:!0},inputStyle:{type:J([Object,Array,String]),default:()=>Ue({})}}),zt={[se]:o=>Q(o),input:o=>Q(o),change:o=>Q(o),focus:o=>o instanceof FocusEvent,blur:o=>o instanceof FocusEvent,clear:()=>!0,mouseleave:o=>o instanceof MouseEvent,mouseenter:o=>o instanceof MouseEvent,keydown:o=>o instanceof Event,compositionstart:o=>o instanceof CompositionEvent,compositionupdate:o=>o instanceof CompositionEvent,compositionend:o=>o instanceof CompositionEvent},Pt=["role"],$t=["id","type","disabled","formatter","parser","readonly","autocomplete","tabindex","aria-label","placeholder"],kt=["id","tabindex","disabled","readonly","autocomplete","aria-label","placeholder"],Nt={name:"ElInput",inheritAttrs:!1},Vt=_e({...Nt,props:Et,emits:zt,setup(o,{expose:m,emit:l}){const a=o,i={suffix:"append",prefix:"prepend"},p=$e(),r=Xe(),g=Ye(),u=c(()=>{const e={};return a.containerRole==="combobox"&&(e["aria-haspopup"]=r["aria-haspopup"],e["aria-owns"]=r["aria-owns"],e["aria-expanded"]=r["aria-expanded"]),e}),h=xt({excludeKeys:c(()=>Object.keys(u.value))}),{form:S,formItem:f}=qe(),{inputId:ne}=Ze(a,{formItemContext:f}),ke=Ge(),z=Je(),s=Ie("input"),le=Ie("textarea"),D=ee(),P=ee(),A=V(!1),_=V(!1),T=V(!1),R=V(!1),re=V(),X=ee(a.inputStyle),M=c(()=>D.value||P.value),ie=c(()=>{var e;return(e=S==null?void 0:S.statusIcon)!=null?e:!1}),B=c(()=>(f==null?void 0:f.validateState)||""),ue=c(()=>B.value&&Qe[B.value]),Ne=c(()=>R.value?et:tt),Ve=c(()=>[r.style,a.inputStyle]),de=c(()=>[a.inputStyle,X.value,{resize:a.resize}]),C=c(()=>at(a.modelValue)?"":String(a.modelValue)),O=c(()=>a.clearable&&!z.value&&!a.readonly&&!!C.value&&(A.value||_.value)),Y=c(()=>a.showPassword&&!z.value&&!a.readonly&&!!C.value&&(!!C.value||A.value)),$=c(()=>a.showWordLimit&&!!h.value.maxlength&&(a.type==="text"||a.type==="textarea")&&!z.value&&!a.readonly&&!a.showPassword),q=c(()=>Array.from(C.value).length),Ae=c(()=>!!$.value&&q.value>Number(h.value.maxlength)),Te=c(()=>!!g.suffix||!!a.suffixIcon||O.value||a.showPassword||$.value||!!B.value&&ie.value),[Me,Be]=wt(D);ot(P,e=>{if(!$.value||a.resize!=="both")return;const n=e[0],{width:I}=n.contentRect;re.value={right:`calc(100% - ${I+15+6}px)`}});const H=()=>{const{type:e,autosize:n}=a;if(!(!mt||e!=="textarea"))if(n){const I=ze(n)?n.minRows:void 0,E=ze(n)?n.maxRows:void 0;X.value={...Pe(P.value,I,E)}}else X.value={minHeight:Pe(P.value).minHeight}},K=()=>{const e=M.value;!e||e.value===C.value||(e.value=C.value)},ce=e=>{const{el:n}=p.vnode;if(!n)return;const E=Array.from(n.querySelectorAll(`.${s.e(e)}`)).find(He=>He.parentNode===n);if(!E)return;const we=i[e];g[we]?E.style.transform=`translateX(${e==="suffix"?"-":""}${n.querySelector(`.${s.be("group",we)}`).offsetWidth}px)`:E.removeAttribute("style")},Z=()=>{ce("prefix"),ce("suffix")},G=async e=>{Me();let{value:n}=e.target;a.formatter&&(n=a.parser?a.parser(n):n,n=a.formatter(n)),!T.value&&n!==C.value&&(l(se,n),l("input",n),await k(),K(),Be())},pe=e=>{l("change",e.target.value)},fe=e=>{l("compositionstart",e),T.value=!0},ve=e=>{var n;l("compositionupdate",e);const I=(n=e.target)==null?void 0:n.value,E=I[I.length-1]||"";T.value=!ht(E)},me=e=>{l("compositionend",e),T.value&&(T.value=!1,G(e))},Fe=()=>{R.value=!R.value,ye()},ye=async()=>{var e;await k(),(e=M.value)==null||e.focus()},Le=()=>{var e;return(e=M.value)==null?void 0:e.blur()},he=e=>{A.value=!0,l("focus",e)},be=e=>{var n;A.value=!1,l("blur",e),a.validateEvent&&((n=f==null?void 0:f.validate)==null||n.call(f,"blur").catch(I=>Ee()))},De=e=>{_.value=!1,l("mouseleave",e)},Re=e=>{_.value=!0,l("mouseenter",e)},ge=e=>{l("keydown",e)},Oe=()=>{var e;(e=M.value)==null||e.select()},xe=()=>{l(se,""),l("change",""),l("clear"),l("input","")};return te(()=>a.modelValue,()=>{var e;k(()=>H()),a.validateEvent&&((e=f==null?void 0:f.validate)==null||e.call(f,"change").catch(n=>Ee()))}),te(C,()=>K()),te(()=>a.type,async()=>{await k(),K(),H(),Z()}),st(async()=>{!a.formatter&&a.parser,K(),Z(),await k(),H()}),nt(async()=>{await k(),Z()}),m({input:D,textarea:P,ref:M,textareaStyle:de,autosize:lt(a,"autosize"),focus:ye,blur:Le,select:Oe,clear:xe,resizeTextarea:H}),(e,n)=>rt((d(),x("div",oe(t(u),{class:[e.type==="textarea"?t(le).b():t(s).b(),t(s).m(t(ke)),t(s).is("disabled",t(z)),t(s).is("exceed",t(Ae)),{[t(s).b("group")]:e.$slots.prepend||e.$slots.append,[t(s).bm("group","append")]:e.$slots.append,[t(s).bm("group","prepend")]:e.$slots.prepend,[t(s).m("prefix")]:e.$slots.prefix||e.prefixIcon,[t(s).m("suffix")]:e.$slots.suffix||e.suffixIcon||e.clearable||e.showPassword,[t(s).bm("suffix","password-clear")]:t(O)&&t(Y)},e.$attrs.class],style:t(Ve),role:e.containerRole,onMouseenter:Re,onMouseleave:De}),[v(" input "),e.type!=="textarea"?(d(),x(ae,{key:0},[v(" prepend slot "),e.$slots.prepend?(d(),x("div",{key:0,class:y(t(s).be("group","prepend"))},[W(e.$slots,"prepend")],2)):v("v-if",!0),N("div",{class:y([t(s).e("wrapper"),t(s).is("focus",A.value)])},[v(" prefix slot "),e.$slots.prefix||e.prefixIcon?(d(),x("span",{key:0,class:y(t(s).e("prefix"))},[N("span",{class:y(t(s).e("prefix-inner"))},[W(e.$slots,"prefix"),e.prefixIcon?(d(),w(t(L),{key:0,class:y(t(s).e("icon"))},{default:F(()=>[(d(),w(j(e.prefixIcon)))]),_:1},8,["class"])):v("v-if",!0)],2)],2)):v("v-if",!0),N("input",oe({id:t(ne),ref_key:"input",ref:D,class:t(s).e("inner")},t(h),{type:e.showPassword?R.value?"text":"password":e.type,disabled:t(z),formatter:e.formatter,parser:e.parser,readonly:e.readonly,autocomplete:e.autocomplete,tabindex:e.tabindex,"aria-label":e.label,placeholder:e.placeholder,style:e.inputStyle,onCompositionstart:fe,onCompositionupdate:ve,onCompositionend:me,onInput:G,onFocus:he,onBlur:be,onChange:pe,onKeydown:ge}),null,16,$t),v(" suffix slot "),t(Te)?(d(),x("span",{key:1,class:y(t(s).e("suffix"))},[N("span",{class:y(t(s).e("suffix-inner"))},[!t(O)||!t(Y)||!t($)?(d(),x(ae,{key:0},[W(e.$slots,"suffix"),e.suffixIcon?(d(),w(t(L),{key:0,class:y(t(s).e("icon"))},{default:F(()=>[(d(),w(j(e.suffixIcon)))]),_:1},8,["class"])):v("v-if",!0)],64)):v("v-if",!0),t(O)?(d(),w(t(L),{key:1,class:y([t(s).e("icon"),t(s).e("clear")]),onMousedown:ct(t(pt),["prevent"]),onClick:xe},{default:F(()=>[ut(t(dt))]),_:1},8,["class","onMousedown"])):v("v-if",!0),t(Y)?(d(),w(t(L),{key:2,class:y([t(s).e("icon"),t(s).e("password")]),onClick:Fe},{default:F(()=>[(d(),w(j(t(Ne))))]),_:1},8,["class"])):v("v-if",!0),t($)?(d(),x("span",{key:3,class:y(t(s).e("count"))},[N("span",{class:y(t(s).e("count-inner"))},U(t(q))+" / "+U(t(h).maxlength),3)],2)):v("v-if",!0),t(B)&&t(ue)&&t(ie)?(d(),w(t(L),{key:4,class:y([t(s).e("icon"),t(s).e("validateIcon"),t(s).is("loading",t(B)==="validating")])},{default:F(()=>[(d(),w(j(t(ue))))]),_:1},8,["class"])):v("v-if",!0)],2)],2)):v("v-if",!0)],2),v(" append slot "),e.$slots.append?(d(),x("div",{key:1,class:y(t(s).be("group","append"))},[W(e.$slots,"append")],2)):v("v-if",!0)],64)):(d(),x(ae,{key:1},[v(" textarea "),N("textarea",oe({id:t(ne),ref_key:"textarea",ref:P,class:t(le).e("inner")},t(h),{tabindex:e.tabindex,disabled:t(z),readonly:e.readonly,autocomplete:e.autocomplete,style:t(de),"aria-label":e.label,placeholder:e.placeholder,onCompositionstart:fe,onCompositionupdate:ve,onCompositionend:me,onInput:G,onFocus:he,onBlur:be,onChange:pe,onKeydown:ge}),null,16,kt),t($)?(d(),x("span",{key:0,style:ft(re.value),class:y(t(s).e("count"))},U(t(q))+" / "+U(t(h).maxlength),7)):v("v-if",!0)],64))],16,Pt)),[[it,e.type!=="hidden"]])}});var At=vt(Vt,[["__file","/home/runner/work/element-plus/element-plus/packages/components/input/src/input.vue"]]);const Bt=yt(At);export{Bt as E,ht as i,xt as u};
