import{f as g,j as b,bO as R}from"./index-DRg9t0Vr.js";import{t as p}from"./Button-RSSq7IbU.js";function C(e,o,r){var n=-1,u=e.length;o<0&&(o=-o>u?0:u+o),r=r>u?u:r,r<0&&(r+=u),u=o>r?0:r-o>>>0,o>>>=0;for(var f=Array(u);++n<u;)f[n]=e[n+o];return f}function h(e,o,r){var n=e.length;return r=r===void 0?n:r,!o&&r>=n?e:C(e,o,r)}var A="\\ud800-\\udfff",S="\\u0300-\\u036f",$="\\ufe20-\\ufe2f",j="\\u20d0-\\u20ff",y=S+$+j,M="\\ufe0e\\ufe0f",O="\\u200d",k=RegExp("["+O+A+y+M+"]");function s(e){return k.test(e)}function x(e){return e.split("")}var t="\\ud800-\\udfff",U="\\u0300-\\u036f",F="\\ufe20-\\ufe2f",H="\\u20d0-\\u20ff",I=U+F+H,J="\\ufe0e\\ufe0f",T="["+t+"]",a="["+I+"]",i="\\ud83c[\\udffb-\\udfff]",V="(?:"+a+"|"+i+")",c="[^"+t+"]",l="(?:\\ud83c[\\udde6-\\uddff]){2}",d="[\\ud800-\\udbff][\\udc00-\\udfff]",E="\\u200d",v=V+"?",m="["+J+"]?",P="(?:"+E+"(?:"+[c,l,d].join("|")+")"+m+v+")*",W=m+v+P,Z="(?:"+[c+a+"?",a,l,d,T].join("|")+")",_=RegExp(i+"(?="+i+")|"+Z+W,"g");function q(e){return e.match(_)||[]}function w(e){return s(e)?q(e):x(e)}function z(e){return function(o){o=p(o);var r=s(o)?w(o):void 0,n=r?r[0]:o.charAt(0),u=r?h(r,1).join(""):o.slice(1);return n[e]()+u}}var K=z("toUpperCase");function D(e,o){return g({name:K(e),setup(){var r;const n=(r=b(R,null))===null||r===void 0?void 0:r.mergedIconsRef;return()=>{var u;const f=(u=n==null?void 0:n.value)===null||u===void 0?void 0:u[e];return f?f():o}}})}export{D as r};
