import{f as k,L as O,bh as B,O as I,ag as M,h as R,r as T}from"./index-DRg9t0Vr.js";import{d as $,e as N}from"./Scrollbar-TYg6DoVg.js";const n="v-hidden",V=N("[v-hidden]",{display:"none!important"}),L=k({name:"Overflow",props:{getCounter:Function,getTail:Function,updateCounter:Function,onUpdateCount:Function,onUpdateOverflow:Function},setup(t,{slots:v}){const m=O(null),A=O(null);function b(U){const{value:r}=m,{getCounter:p,getTail:a}=t;let o;if(p!==void 0?o=p():o=A.value,!r||!o)return;o.hasAttribute(n)&&o.removeAttribute(n);const{children:C}=r;if(U.showAllItemsBeforeCalculate)for(const e of C)e.hasAttribute(n)&&e.removeAttribute(n);const c=r.offsetWidth,W=[],i=v.tail?a==null?void 0:a():null;let f=i?i.offsetWidth:0,d=!1;const w=r.children.length-(v.tail?1:0);for(let e=0;e<w-1;++e){if(e<0)continue;const l=C[e];if(d){l.hasAttribute(n)||l.setAttribute(n,"");continue}else l.hasAttribute(n)&&l.removeAttribute(n);const y=l.offsetWidth;if(f+=y,W[e]=y,f>c){const{updateCounter:x}=t;for(let s=e;s>=0;--s){const h=w-1-s;x!==void 0?x(h):o.textContent=`${h}`;const g=o.offsetWidth;if(f-=W[s],f+g<=c||s===0){d=!0,e=s-1,i&&(e===-1?(i.style.maxWidth=`${c-g}px`,i.style.boxSizing="border-box"):i.style.maxWidth="");const{onUpdateCount:F}=t;F&&F(h);break}}}}const{onUpdateOverflow:u}=t;d?u!==void 0&&u(!0):(u!==void 0&&u(!1),o.setAttribute(n,""))}const S=B();return V.mount({id:"vueuc/overflow",head:!0,anchorMetaName:$,ssr:S}),I(()=>b({showAllItemsBeforeCalculate:!1})),{selfRef:m,counterRef:A,sync:b}},render(){const{$slots:t}=this;return M(()=>this.sync({showAllItemsBeforeCalculate:!1})),R("div",{class:"v-overflow",ref:"selfRef"},[T(t,"default"),t.counter?t.counter():R("span",{style:{display:"inline-block"},ref:"counterRef"}),t.tail?t.tail():null])}});export{L as V};
