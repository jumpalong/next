import{d as p}from"./ProvideEventLine-DRQ1icxU.js";import{f as n,k as m,o as u,m as c,w as a,n as f,y as i,z as k,q as e,a6 as y}from"./index-DRg9t0Vr.js";import{a as _}from"./metadata-DEzis7Hx.js";import{b as d}from"./Button-RSSq7IbU.js";const h=n({__name:"PubkeyLink",props:{pubkey:{}},setup(s){const t=s,o=m(()=>typeof t.pubkey=="string"?p.fromHex(t.pubkey):t.pubkey),r=_(o);return(b,l)=>(u(),c(e(y),{to:`/profile/${e(o)}`},{default:a(()=>[f(e(d),{text:""},{default:a(()=>[i(k(e(r)),1)]),_:1})]),_:1},8,["to"]))}});export{h as _};