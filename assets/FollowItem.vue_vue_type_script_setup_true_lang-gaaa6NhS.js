import{d as q,u as X,y as Y,ai as J}from"./ProvideEventLine-DRQ1icxU.js";import{p as Q}from"./profile-2-400x400-D2vuwnc_.js";import{E as B}from"./Ellipsis-XSauCKhw.js";import{i as Z,c as H,ay as ee,b as P,az as oe,d as T,f as A,u as te,L as k,j as $,k as z,g as K,bx as re,l as ne,O as se,R as ae,I as ie,H as le,h as R,ao as de,W as ce,o as V,m as I,w as F,E as w,n as M,q as n,y as N,z as W,A as ue,r as fe}from"./index-DRg9t0Vr.js";import{o as me,i as ve}from"./utils-BVc1TVEx.js";import{t as he}from"./Tag-D1OTqkWA.js";import{u as ge}from"./use-css-vars-class-CabheA3r.js";import{l as be,a as pe,r as ye}from"./Button-RSSq7IbU.js";import{V as ze}from"./Scrollbar-TYg6DoVg.js";import{a as xe}from"./ListItem-BFp5E04E.js";const _e=Z("n-avatar-group"),Oe=H("avatar",`
 width: var(--n-merged-size);
 height: var(--n-merged-size);
 color: #FFF;
 font-size: var(--n-font-size);
 display: inline-flex;
 position: relative;
 overflow: hidden;
 text-align: center;
 border: var(--n-border);
 border-radius: var(--n-border-radius);
 --n-merged-color: var(--n-color);
 background-color: var(--n-merged-color);
 transition:
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
`,[ee(P("&","--n-merged-color: var(--n-color-modal);")),oe(P("&","--n-merged-color: var(--n-color-popover);")),P("img",`
 width: 100%;
 height: 100%;
 `),T("text",`
 white-space: nowrap;
 display: inline-block;
 position: absolute;
 left: 50%;
 top: 50%;
 `),H("icon",`
 vertical-align: bottom;
 font-size: calc(var(--n-merged-size) - 6px);
 `),T("text","line-height: 1.25")]),ke=Object.assign(Object.assign({},K.props),{size:[String,Number],src:String,circle:{type:Boolean,default:void 0},objectFit:String,round:{type:Boolean,default:void 0},bordered:{type:Boolean,default:void 0},onError:Function,fallbackSrc:String,intersectionObserverOptions:Object,lazy:Boolean,onLoad:Function,renderPlaceholder:Function,renderFallback:Function,imgProps:Object,color:String}),Re=A({name:"Avatar",props:ke,setup(o){const{mergedClsPrefixRef:m,inlineThemeDisabled:s}=te(o),p=k(!1);let v=null;const h=k(null),c=k(null),x=()=>{const{value:e}=h;if(e&&(v===null||v!==e.innerHTML)){v=e.innerHTML;const{value:t}=c;if(t){const{offsetWidth:r,offsetHeight:b}=t,{offsetWidth:d,offsetHeight:S}=e,E=.9,j=Math.min(r/d*E,b/S*E,1);e.style.transform=`translateX(-50%) translateY(-50%) scale(${j})`}}},y=$(_e,null),u=z(()=>{const{size:e}=o;if(e)return e;const{size:t}=y||{};return t||"medium"}),a=K("Avatar","-avatar",Oe,re,o,m),l=$(he,null),i=z(()=>{if(y)return!0;const{round:e,circle:t}=o;return e!==void 0||t!==void 0?e||t:l?l.roundRef.value:!1}),g=z(()=>y?!0:o.bordered||!1),L=z(()=>{const e=u.value,t=i.value,r=g.value,{color:b}=o,{self:{borderRadius:d,fontSize:S,color:E,border:j,colorModal:G,colorPopover:D},common:{cubicBezierEaseInOut:U}}=a.value;let C;return typeof e=="number"?C=`${e}px`:C=a.value.self[ne("height",e)],{"--n-font-size":S,"--n-border":r?j:"none","--n-border-radius":t?"50%":d,"--n-color":b||E,"--n-color-modal":b||G,"--n-color-popover":b||D,"--n-bezier":U,"--n-merged-size":`var(--n-avatar-size-override, ${C})`}}),f=s?ge("avatar",z(()=>{const e=u.value,t=i.value,r=g.value,{color:b}=o;let d="";return e&&(typeof e=="number"?d+=`a${e}`:d+=e[0]),t&&(d+="b"),r&&(d+="c"),b&&(d+=be(b)),d}),L,o):void 0,_=k(!o.lazy);se(()=>{if(o.lazy&&o.intersectionObserverOptions){let e;const t=ae(()=>{e==null||e(),e=void 0,o.lazy&&(e=me(c.value,o.intersectionObserverOptions,_))});ie(()=>{t(),e==null||e()})}}),le(()=>{var e;return o.src||((e=o.imgProps)===null||e===void 0?void 0:e.src)},()=>{p.value=!1});const O=k(!o.lazy);return{textRef:h,selfRef:c,mergedRoundRef:i,mergedClsPrefix:m,fitTextTransform:x,cssVars:s?void 0:L,themeClass:f==null?void 0:f.themeClass,onRender:f==null?void 0:f.onRender,hasLoadError:p,shouldStartLoading:_,loaded:O,mergedOnError:e=>{if(!_.value)return;p.value=!0;const{onError:t,imgProps:{onError:r}={}}=o;t==null||t(e),r==null||r(e)},mergedOnLoad:e=>{const{onLoad:t,imgProps:{onLoad:r}={}}=o;t==null||t(e),r==null||r(e),O.value=!0}}},render(){var o,m;const{$slots:s,src:p,mergedClsPrefix:v,lazy:h,onRender:c,loaded:x,hasLoadError:y,imgProps:u={}}=this;c==null||c();let a;const l=!x&&!y&&(this.renderPlaceholder?this.renderPlaceholder():(m=(o=this.$slots).placeholder)===null||m===void 0?void 0:m.call(o));return this.hasLoadError?a=this.renderFallback?this.renderFallback():pe(s.fallback,()=>[R("img",{src:this.fallbackSrc,style:{objectFit:this.objectFit}})]):a=ye(s.default,i=>{if(i)return R(ze,{onResize:this.fitTextTransform},{default:()=>R("span",{ref:"textRef",class:`${v}-avatar__text`},i)});if(p||u.src){const g=this.src||u.src;return R("img",Object.assign(Object.assign({},u),{loading:ve&&!this.intersectionObserverOptions&&h?"lazy":"eager",src:h&&this.intersectionObserverOptions?this.shouldStartLoading?g:void 0:g,"data-image-src":g,onLoad:this.mergedOnLoad,onError:this.mergedOnError,style:[u.style||"",{objectFit:this.objectFit},l?{height:"0",width:"0",visibility:"hidden",position:"absolute"}:""]}))}}),R("span",{ref:"selfRef",class:[`${v}-avatar`,this.themeClass],style:this.cssVars},a,h&&l)}}),Le={class:"flex flex-col ml-4 flex-1 shrink-1 w-full"},Ee={class:"flex-shrink-0 ml-2"},Ve=A({__name:"FollowItem",props:{pubkey:{},name:{},about:{}},setup(o){const m=o,{pubkey:s,name:p,about:v}=de(m),h=z(()=>q.fromHex(s.value)),c=X(Y),x=ce(),[y,u]=J(()=>c.getUserMetadataLineByPubkey(h.value)),a=z(()=>{var l;return(l=y.value)==null?void 0:l.getMetadata()});return(l,i)=>{const g=Re,L=xe;return V(),I(L,{class:"cursor-pointer overflow-hidden"},{default:F(()=>{var f,_;return[w("div",{ref_key:"target",ref:u,class:"flex items-center"},[M(g,{class:"ml-4",size:"small",src:((f=n(a))==null?void 0:f.picture)??n(Q),round:"",onClick:i[0]||(i[0]=()=>n(x).push(`/profile/${n(s)}`))},null,8,["src"]),w("div",Le,[M(B,{class:"text-xl",onClick:i[1]||(i[1]=()=>n(x).push(`/profile/${n(s)}`))},{default:F(()=>{var O;return[N(W(n(p)??((O=n(a))==null?void 0:O.name)??n(s).slice(0,10)),1)]}),_:1}),(_=n(a))!=null&&_.about?(V(),I(B,{key:0,style:{fontSize:"10px"}},{default:F(()=>[N(W(n(v)??n(a).about),1)]),_:1})):ue("",!0)]),w("div",Ee,[fe(l.$slots,"right",{pubkey:n(s)})])],512)]}),_:3})}}});export{Ve as _,Re as a};
