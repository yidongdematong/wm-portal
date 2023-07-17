import{ah as ge,ai as z,aj as xe,D as ye,ak as Ce,al as _,am as Ie,U as Ee,v as x,an as ee,ae as W,a3 as j,ao as q,ap as K,q as A,a2 as D,aq as Se,x as ne,ar as ae,s as te,B as le,d as M,as as oe,A as O,o as y,M as se,w as ie,g as X,P as G,at as T,u as a,e as E,C as F,n as g,a5 as R,N as Le,i as re,t as ue,a7 as w,au as de,K as U,a6 as Be,a4 as Ge,z as Te,af as Fe,ag as ce}from"./index.3a3e9074.js";import{U as $}from"./event.776e7e11.js";var $e=/\s/;function Ve(e){for(var n=e.length;n--&&$e.test(e.charAt(n)););return n}var Ne=/^\s+/;function ze(e){return e&&e.slice(0,Ve(e)+1).replace(Ne,"")}var J=0/0,Ae=/^[-+]0x[0-9a-f]+$/i,De=/^0b[01]+$/i,we=/^0o[0-7]+$/i,Me=parseInt;function Q(e){if(typeof e=="number")return e;if(ge(e))return J;if(z(e)){var n=typeof e.valueOf=="function"?e.valueOf():e;e=z(n)?n+"":n}if(typeof e!="string")return e===0?e:+e;e=ze(e);var t=De.test(e);return t||we.test(e)?Me(e.slice(2),t?2:8):Ae.test(e)?J:+e}var Oe=function(){return xe.Date.now()};const N=Oe;var Re="Expected a function",Ue=Math.max,He=Math.min;function bn(e,n,t){var i,d,f,b,c,r,u=0,o=!1,h=!1,m=!0;if(typeof e!="function")throw new TypeError(Re);n=Q(n)||0,z(t)&&(o=!!t.leading,h="maxWait"in t,f=h?Ue(Q(t.maxWait)||0,n):f,m="trailing"in t?!!t.trailing:m);function s(k){var C=i,L=d;return i=d=void 0,u=k,b=e.apply(L,C),b}function l(k){return u=k,c=setTimeout(B,n),o?s(k):b}function v(k){var C=k-r,L=k-u,P=n-C;return h?He(P,f-L):P}function p(k){var C=k-r,L=k-u;return r===void 0||C>=n||C<0||h&&L>=f}function B(){var k=N();if(p(k))return H(k);c=setTimeout(B,v(k))}function H(k){return c=void 0,m&&i?s(k):(i=d=void 0,b)}function he(){c!==void 0&&clearTimeout(c),u=0,i=r=d=c=void 0}function ke(){return c===void 0?b:H(N())}function V(){var k=N(),C=p(k);if(i=arguments,d=this,r=k,C){if(c===void 0)return l(r);if(h)return clearTimeout(c),c=setTimeout(B,n),s(r)}return c===void 0&&(c=setTimeout(B,n)),b}return V.cancel=he,V.flush=ke,V}const I=new Map;let Y;ye&&(document.addEventListener("mousedown",e=>Y=e),document.addEventListener("mouseup",e=>{for(const n of I.values())for(const{documentHandler:t}of n)t(e,Y)}));function Z(e,n){let t=[];return Array.isArray(n.arg)?t=n.arg:Ce(n.arg)&&t.push(n.arg),function(i,d){const f=n.instance.popperRef,b=i.target,c=d==null?void 0:d.target,r=!n||!n.instance,u=!b||!c,o=e.contains(b)||e.contains(c),h=e===b,m=t.length&&t.some(l=>l==null?void 0:l.contains(b))||t.length&&t.includes(c),s=f&&(f.contains(b)||f.contains(c));r||u||o||h||m||s||n.value(i,d)}}const mn={beforeMount(e,n){I.has(e)||I.set(e,[]),I.get(e).push({documentHandler:Z(e,n),bindingFn:n.value})},updated(e,n){I.has(e)||I.set(e,[]);const t=I.get(e),i=t.findIndex(f=>f.bindingFn===n.oldValue),d={documentHandler:Z(e,n),bindingFn:n.value};i>=0?t.splice(i,1,d):t.push(d)},unmounted(e){I.delete(e)}},Pe={modelValue:{type:Array,default:()=>[]},disabled:Boolean,min:{type:Number,default:void 0},max:{type:Number,default:void 0},size:_,id:{type:String,default:void 0},label:{type:String,default:void 0},fill:{type:String,default:void 0},textColor:{type:String,default:void 0},tag:{type:String,default:"div"},validateEvent:{type:Boolean,default:!0}},be={modelValue:{type:[Number,String,Boolean],default:()=>{}},label:{type:[String,Boolean,Number,Object]},indeterminate:Boolean,disabled:Boolean,checked:Boolean,name:{type:String,default:void 0},trueLabel:{type:[String,Number],default:void 0},falseLabel:{type:[String,Number],default:void 0},id:{type:String,default:void 0},controls:{type:String,default:void 0},border:Boolean,size:_,tabindex:[String,Number],validateEvent:{type:Boolean,default:!0}},S=()=>{const{form:e,formItem:n}=Ie(),t=Ee("CheckboxGroup",{}),i=x(()=>t&&(t==null?void 0:t.name)==="ElCheckboxGroup"),d=x(()=>n==null?void 0:n.size);return{isGroup:i,checkboxGroup:t,elForm:e,elFormItemSize:d,elFormItem:n}},We=(e,{elFormItem:n})=>{const{inputId:t,isLabeledByFormItem:i}=ee(e,{formItemContext:n});return{isLabeledByFormItem:i,groupId:t}},je=e=>{const n=A(!1),{emit:t}=te(),{isGroup:i,checkboxGroup:d,elFormItem:f}=S(),b=A(!1);return{model:x({get(){var r,u;return i.value?(r=d.modelValue)==null?void 0:r.value:(u=e.modelValue)!=null?u:n.value},set(r){var u;i.value&&Array.isArray(r)?(b.value=d.max!==void 0&&r.length>d.max.value,b.value===!1&&((u=d==null?void 0:d.changeEvent)==null||u.call(d,r))):(t($,r),n.value=r)}}),isGroup:i,isLimitExceeded:b,elFormItem:f}},qe=(e,n,{model:t})=>{const{isGroup:i,checkboxGroup:d}=S(),f=A(!1),b=D(d==null?void 0:d.checkboxGroupSize,{prop:!0}),c=x(()=>{const o=t.value;return Se(o)==="[object Boolean]"?o:Array.isArray(o)?o.includes(e.label):o!=null?o===e.trueLabel:!!o}),r=D(x(()=>{var o;return i.value?(o=d==null?void 0:d.checkboxGroupSize)==null?void 0:o.value:void 0})),u=x(()=>!!(n.default||e.label));return{isChecked:c,focus:f,size:b,checkboxSize:r,hasOwnLabel:u}},Ke=(e,{model:n,isChecked:t})=>{const{elForm:i,isGroup:d,checkboxGroup:f}=S(),b=x(()=>{var r,u;const o=(r=f.max)==null?void 0:r.value,h=(u=f.min)==null?void 0:u.value;return!!(o||h)&&n.value.length>=o&&!t.value||n.value.length<=h&&t.value});return{isDisabled:x(()=>{var r,u;const o=e.disabled||(i==null?void 0:i.disabled);return(u=d.value?((r=f.disabled)==null?void 0:r.value)||o||b.value:o)!=null?u:!1}),isLimitDisabled:b}},Xe=(e,{model:n})=>{function t(){Array.isArray(n.value)&&!n.value.includes(e.label)?n.value.push(e.label):n.value=e.trueLabel||!0}e.checked&&t()},Je=(e,{model:n,isLimitExceeded:t,hasOwnLabel:i,isDisabled:d,isLabeledByFormItem:f})=>{const{elFormItem:b,checkboxGroup:c}=S(),{emit:r}=te();function u(l){var v,p;return l===e.trueLabel||l===!0?(v=e.trueLabel)!=null?v:!0:(p=e.falseLabel)!=null?p:!1}function o(l,v){r("change",u(l),v)}function h(l){if(t.value)return;const v=l.target;r("change",u(v.checked),l)}async function m(l){t.value||!i.value&&!d.value&&f.value&&(n.value=u([!1,e.falseLabel].includes(n.value)),await le(),o(n.value,l))}const s=x(()=>{var l;return((l=c.validateEvent)==null?void 0:l.value)||e.validateEvent});return ne(()=>e.modelValue,()=>{s.value&&(b==null||b.validate("change").catch(l=>ae()))}),{handleChange:h,onClickRoot:m}},me={[$]:e=>W(e)||j(e)||q(e),change:e=>W(e)||j(e)||q(e)},Qe={[$]:e=>K(e),change:e=>K(e)},fe=(e,n)=>{const{model:t,isGroup:i,isLimitExceeded:d,elFormItem:f}=je(e),{focus:b,size:c,isChecked:r,checkboxSize:u,hasOwnLabel:o}=qe(e,n,{model:t}),{isDisabled:h}=Ke(e,{model:t,isChecked:r}),{inputId:m,isLabeledByFormItem:s}=ee(e,{formItemContext:f,disableIdGeneration:o,disableIdManagement:i}),{handleChange:l,onClickRoot:v}=Je(e,{model:t,isLimitExceeded:d,hasOwnLabel:o,isDisabled:h,isLabeledByFormItem:s});return Xe(e,{model:t}),{elFormItem:f,inputId:m,isLabeledByFormItem:s,isChecked:r,isDisabled:h,isGroup:i,checkboxSize:u,hasOwnLabel:o,model:t,handleChange:l,onClickRoot:v,focus:b,size:c}},Ye=["tabindex","role","aria-checked"],Ze=["id","aria-hidden","name","tabindex","disabled","true-value","false-value"],_e=["id","aria-hidden","disabled","value","name","tabindex"],en={name:"ElCheckbox"},nn=M({...en,props:be,emits:me,setup(e){const n=e,t=oe(),{inputId:i,isLabeledByFormItem:d,isChecked:f,isDisabled:b,checkboxSize:c,hasOwnLabel:r,model:u,handleChange:o,onClickRoot:h,focus:m}=fe(n,t),s=O("checkbox");return(l,v)=>(y(),se(de(!a(r)&&a(d)?"span":"label"),{class:g([a(s).b(),a(s).m(a(c)),a(s).is("disabled",a(b)),a(s).is("bordered",l.border),a(s).is("checked",a(f))]),"aria-controls":l.indeterminate?l.controls:null,onClick:a(h)},{default:ie(()=>[X("span",{class:g([a(s).e("input"),a(s).is("disabled",a(b)),a(s).is("checked",a(f)),a(s).is("indeterminate",l.indeterminate),a(s).is("focus",a(m))]),tabindex:l.indeterminate?0:void 0,role:l.indeterminate?"checkbox":void 0,"aria-checked":l.indeterminate?"mixed":void 0},[l.trueLabel||l.falseLabel?G((y(),E("input",{key:0,id:a(i),"onUpdate:modelValue":v[0]||(v[0]=p=>F(u)?u.value=p:null),class:g(a(s).e("original")),type:"checkbox","aria-hidden":l.indeterminate?"true":"false",name:l.name,tabindex:l.tabindex,disabled:a(b),"true-value":l.trueLabel,"false-value":l.falseLabel,onChange:v[1]||(v[1]=(...p)=>a(o)&&a(o)(...p)),onFocus:v[2]||(v[2]=p=>m.value=!0),onBlur:v[3]||(v[3]=p=>m.value=!1)},null,42,Ze)),[[T,a(u)]]):G((y(),E("input",{key:1,id:a(i),"onUpdate:modelValue":v[4]||(v[4]=p=>F(u)?u.value=p:null),class:g(a(s).e("original")),type:"checkbox","aria-hidden":l.indeterminate?"true":"false",disabled:a(b),value:l.label,name:l.name,tabindex:l.tabindex,onChange:v[5]||(v[5]=(...p)=>a(o)&&a(o)(...p)),onFocus:v[6]||(v[6]=p=>m.value=!0),onBlur:v[7]||(v[7]=p=>m.value=!1)},null,42,_e)),[[T,a(u)]]),X("span",{class:g(a(s).e("inner"))},null,2)],10,Ye),a(r)?(y(),E("span",{key:0,class:g(a(s).e("label"))},[R(l.$slots,"default"),l.$slots.default?w("v-if",!0):(y(),E(Le,{key:0},[re(ue(l.label),1)],64))],2)):w("v-if",!0)]),_:3},8,["class","aria-controls","onClick"]))}});var an=U(nn,[["__file","/home/runner/work/element-plus/element-plus/packages/components/checkbox/src/checkbox.vue"]]);const tn=["name","tabindex","disabled","true-value","false-value"],ln=["name","tabindex","disabled","value"],on={name:"ElCheckboxButton"},sn=M({...on,props:be,emits:me,setup(e){const n=e,t=oe(),{focus:i,isChecked:d,isDisabled:f,size:b,model:c,handleChange:r}=fe(n,t),{checkboxGroup:u}=S(),o=O("checkbox"),h=x(()=>{var m,s,l,v;const p=(s=(m=u==null?void 0:u.fill)==null?void 0:m.value)!=null?s:"";return{backgroundColor:p,borderColor:p,color:(v=(l=u==null?void 0:u.textColor)==null?void 0:l.value)!=null?v:"",boxShadow:p?`-1px 0 0 0 ${p}`:void 0}});return(m,s)=>(y(),E("label",{class:g([a(o).b("button"),a(o).bm("button",a(b)),a(o).is("disabled",a(f)),a(o).is("checked",a(d)),a(o).is("focus",a(i))])},[m.trueLabel||m.falseLabel?G((y(),E("input",{key:0,"onUpdate:modelValue":s[0]||(s[0]=l=>F(c)?c.value=l:null),class:g(a(o).be("button","original")),type:"checkbox",name:m.name,tabindex:m.tabindex,disabled:a(f),"true-value":m.trueLabel,"false-value":m.falseLabel,onChange:s[1]||(s[1]=(...l)=>a(r)&&a(r)(...l)),onFocus:s[2]||(s[2]=l=>i.value=!0),onBlur:s[3]||(s[3]=l=>i.value=!1)},null,42,tn)),[[T,a(c)]]):G((y(),E("input",{key:1,"onUpdate:modelValue":s[4]||(s[4]=l=>F(c)?c.value=l:null),class:g(a(o).be("button","original")),type:"checkbox",name:m.name,tabindex:m.tabindex,disabled:a(f),value:m.label,onChange:s[5]||(s[5]=(...l)=>a(r)&&a(r)(...l)),onFocus:s[6]||(s[6]=l=>i.value=!0),onBlur:s[7]||(s[7]=l=>i.value=!1)},null,42,ln)),[[T,a(c)]]),m.$slots.default||m.label?(y(),E("span",{key:2,class:g(a(o).be("button","inner")),style:Be(a(d)?a(h):void 0)},[R(m.$slots,"default",{},()=>[re(ue(m.label),1)])],6)):w("v-if",!0)],2))}});var ve=U(sn,[["__file","/home/runner/work/element-plus/element-plus/packages/components/checkbox/src/checkbox-button.vue"]]);const rn={name:"ElCheckboxGroup"},un=M({...rn,props:Pe,emits:Qe,setup(e,{emit:n}){const t=e,{elFormItem:i}=S(),{groupId:d,isLabeledByFormItem:f}=We(t,{elFormItem:i}),b=D(),c=O("checkbox"),r=o=>{n($,o),le(()=>{n("change",o)})},u=x({get(){return t.modelValue},set(o){r(o)}});return Ge("CheckboxGroup",{name:"ElCheckboxGroup",...Te(t),modelValue:u,checkboxGroupSize:b,changeEvent:r}),ne(()=>t.modelValue,()=>{t.validateEvent&&(i==null||i.validate("change").catch(o=>ae()))}),(o,h)=>{var m;return y(),se(de(o.tag),{id:a(d),class:g(a(c).b("group")),role:"group","aria-label":a(f)?void 0:o.label||"checkbox-group","aria-labelledby":a(f)?(m=a(i))==null?void 0:m.labelId:void 0},{default:ie(()=>[R(o.$slots,"default")]),_:3},8,["id","class","aria-label","aria-labelledby"])}}});var pe=U(un,[["__file","/home/runner/work/element-plus/element-plus/packages/components/checkbox/src/checkbox-group.vue"]]);const fn=Fe(an,{CheckboxButton:ve,CheckboxGroup:pe});ce(ve);const vn=ce(pe);export{mn as C,fn as E,vn as a,bn as d};
