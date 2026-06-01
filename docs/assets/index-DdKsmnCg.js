(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function mf(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const dt={},Kr=[],jn=()=>{},bv=()=>!1,Qa=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),gf=n=>n.startsWith("onUpdate:"),It=Object.assign,_f=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},Ev=Object.prototype.hasOwnProperty,at=(n,e)=>Ev.call(n,e),He=Array.isArray,Zr=n=>el(n)==="[object Map]",Um=n=>el(n)==="[object Set]",We=n=>typeof n=="function",Mt=n=>typeof n=="string",ji=n=>typeof n=="symbol",mt=n=>n!==null&&typeof n=="object",Om=n=>(mt(n)||We(n))&&We(n.then)&&We(n.catch),Fm=Object.prototype.toString,el=n=>Fm.call(n),Tv=n=>el(n).slice(8,-1),Bm=n=>el(n)==="[object Object]",vf=n=>Mt(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,qs=mf(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),tl=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},Av=/-(\w)/g,bn=tl(n=>n.replace(Av,(e,t)=>t?t.toUpperCase():"")),wv=/\B([A-Z])/g,Tr=tl(n=>n.replace(wv,"-$1").toLowerCase()),nl=tl(n=>n.charAt(0).toUpperCase()+n.slice(1)),Cl=tl(n=>n?`on${nl(n)}`:""),Gi=(n,e)=>!Object.is(n,e),Pl=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},km=(n,e,t,i=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:i,value:t})},Rv=n=>{const e=parseFloat(n);return isNaN(e)?n:e},Cv=n=>{const e=Mt(n)?Number(n):NaN;return isNaN(e)?n:e};let Th;const il=()=>Th||(Th=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Ao(n){if(He(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],r=Mt(i)?Dv(i):Ao(i);if(r)for(const s in r)e[s]=r[s]}return e}else if(Mt(n)||mt(n))return n}const Pv=/;(?![^(]*\))/g,Iv=/:([^]+)/,Lv=/\/\*[^]*?\*\//g;function Dv(n){const e={};return n.replace(Lv,"").split(Pv).forEach(t=>{if(t){const i=t.split(Iv);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function xf(n){let e="";if(Mt(n))e=n;else if(He(n))for(let t=0;t<n.length;t++){const i=xf(n[t]);i&&(e+=i+" ")}else if(mt(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const Nv="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Uv=mf(Nv);function Hm(n){return!!n||n===""}const zm=n=>!!(n&&n.__v_isRef===!0),ci=n=>Mt(n)?n:n==null?"":He(n)||mt(n)&&(n.toString===Fm||!We(n.toString))?zm(n)?ci(n.value):JSON.stringify(n,Vm,2):String(n),Vm=(n,e)=>zm(e)?Vm(n,e.value):Zr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,r],s)=>(t[Il(i,s)+" =>"]=r,t),{})}:Um(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>Il(t))}:ji(e)?Il(e):mt(e)&&!He(e)&&!Bm(e)?String(e):e,Il=(n,e="")=>{var t;return ji(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let $t;class Gm{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=$t,!e&&$t&&(this.index=($t.scopes||($t.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=$t;try{return $t=this,e()}finally{$t=t}}}on(){$t=this}off(){$t=this.parent}stop(e){if(this._active){this._active=!1;let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(this.effects.length=0,t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function Ov(n){return new Gm(n)}function Wm(){return $t}function Fv(n,e=!1){$t&&$t.cleanups.push(n)}let pt;const Ll=new WeakSet;class Xm{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,$t&&$t.active&&$t.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Ll.has(this)&&(Ll.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||qm(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Ah(this),$m(this);const e=pt,t=Ln;pt=this,Ln=!0;try{return this.fn()}finally{Ym(this),pt=e,Ln=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Sf(e);this.deps=this.depsTail=void 0,Ah(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Ll.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Hc(this)&&this.run()}get dirty(){return Hc(this)}}let jm=0,$s,Ys;function qm(n,e=!1){if(n.flags|=8,e){n.next=Ys,Ys=n;return}n.next=$s,$s=n}function yf(){jm++}function Mf(){if(--jm>0)return;if(Ys){let e=Ys;for(Ys=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;$s;){let e=$s;for($s=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){n||(n=i)}e=t}}if(n)throw n}function $m(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Ym(n){let e,t=n.depsTail,i=t;for(;i;){const r=i.prevDep;i.version===-1?(i===t&&(t=r),Sf(i),Bv(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=r}n.deps=e,n.depsTail=t}function Hc(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Km(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function Km(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===lo))return;n.globalVersion=lo;const e=n.dep;if(n.flags|=2,e.version>0&&!n.isSSR&&n.deps&&!Hc(n)){n.flags&=-3;return}const t=pt,i=Ln;pt=n,Ln=!0;try{$m(n);const r=n.fn(n._value);(e.version===0||Gi(r,n._value))&&(n._value=r,e.version++)}catch(r){throw e.version++,r}finally{pt=t,Ln=i,Ym(n),n.flags&=-3}}function Sf(n,e=!1){const{dep:t,prevSub:i,nextSub:r}=n;if(i&&(i.nextSub=r,n.prevSub=void 0),r&&(r.prevSub=i,n.nextSub=void 0),t.subs===n&&(t.subs=i,!i&&t.computed)){t.computed.flags&=-5;for(let s=t.computed.deps;s;s=s.nextDep)Sf(s,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function Bv(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let Ln=!0;const Zm=[];function qi(){Zm.push(Ln),Ln=!1}function $i(){const n=Zm.pop();Ln=n===void 0?!0:n}function Ah(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=pt;pt=void 0;try{e()}finally{pt=t}}}let lo=0;class kv{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class bf{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!pt||!Ln||pt===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==pt)t=this.activeLink=new kv(pt,this),pt.deps?(t.prevDep=pt.depsTail,pt.depsTail.nextDep=t,pt.depsTail=t):pt.deps=pt.depsTail=t,Jm(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const i=t.nextDep;i.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=i),t.prevDep=pt.depsTail,t.nextDep=void 0,pt.depsTail.nextDep=t,pt.depsTail=t,pt.deps===t&&(pt.deps=i)}return t}trigger(e){this.version++,lo++,this.notify(e)}notify(e){yf();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{Mf()}}}function Jm(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)Jm(i)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const zc=new WeakMap,yr=Symbol(""),Vc=Symbol(""),co=Symbol("");function kt(n,e,t){if(Ln&&pt){let i=zc.get(n);i||zc.set(n,i=new Map);let r=i.get(t);r||(i.set(t,r=new bf),r.map=i,r.key=t),r.track()}}function di(n,e,t,i,r,s){const o=zc.get(n);if(!o){lo++;return}const a=l=>{l&&l.trigger()};if(yf(),e==="clear")o.forEach(a);else{const l=He(n),c=l&&vf(t);if(l&&t==="length"){const u=Number(i);o.forEach((f,h)=>{(h==="length"||h===co||!ji(h)&&h>=u)&&a(f)})}else switch((t!==void 0||o.has(void 0))&&a(o.get(t)),c&&a(o.get(co)),e){case"add":l?c&&a(o.get("length")):(a(o.get(yr)),Zr(n)&&a(o.get(Vc)));break;case"delete":l||(a(o.get(yr)),Zr(n)&&a(o.get(Vc)));break;case"set":Zr(n)&&a(o.get(yr));break}}Mf()}function Cr(n){const e=tt(n);return e===n?e:(kt(e,"iterate",co),Mn(n)?e:e.map(Ht))}function rl(n){return kt(n=tt(n),"iterate",co),n}const Hv={__proto__:null,[Symbol.iterator](){return Dl(this,Symbol.iterator,Ht)},concat(...n){return Cr(this).concat(...n.map(e=>He(e)?Cr(e):e))},entries(){return Dl(this,"entries",n=>(n[1]=Ht(n[1]),n))},every(n,e){return ei(this,"every",n,e,void 0,arguments)},filter(n,e){return ei(this,"filter",n,e,t=>t.map(Ht),arguments)},find(n,e){return ei(this,"find",n,e,Ht,arguments)},findIndex(n,e){return ei(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return ei(this,"findLast",n,e,Ht,arguments)},findLastIndex(n,e){return ei(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return ei(this,"forEach",n,e,void 0,arguments)},includes(...n){return Nl(this,"includes",n)},indexOf(...n){return Nl(this,"indexOf",n)},join(n){return Cr(this).join(n)},lastIndexOf(...n){return Nl(this,"lastIndexOf",n)},map(n,e){return ei(this,"map",n,e,void 0,arguments)},pop(){return ws(this,"pop")},push(...n){return ws(this,"push",n)},reduce(n,...e){return wh(this,"reduce",n,e)},reduceRight(n,...e){return wh(this,"reduceRight",n,e)},shift(){return ws(this,"shift")},some(n,e){return ei(this,"some",n,e,void 0,arguments)},splice(...n){return ws(this,"splice",n)},toReversed(){return Cr(this).toReversed()},toSorted(n){return Cr(this).toSorted(n)},toSpliced(...n){return Cr(this).toSpliced(...n)},unshift(...n){return ws(this,"unshift",n)},values(){return Dl(this,"values",Ht)}};function Dl(n,e,t){const i=rl(n),r=i[e]();return i!==n&&!Mn(n)&&(r._next=r.next,r.next=()=>{const s=r._next();return s.value&&(s.value=t(s.value)),s}),r}const zv=Array.prototype;function ei(n,e,t,i,r,s){const o=rl(n),a=o!==n&&!Mn(n),l=o[e];if(l!==zv[e]){const f=l.apply(n,s);return a?Ht(f):f}let c=t;o!==n&&(a?c=function(f,h){return t.call(this,Ht(f),h,n)}:t.length>2&&(c=function(f,h){return t.call(this,f,h,n)}));const u=l.call(o,c,i);return a&&r?r(u):u}function wh(n,e,t,i){const r=rl(n);let s=t;return r!==n&&(Mn(n)?t.length>3&&(s=function(o,a,l){return t.call(this,o,a,l,n)}):s=function(o,a,l){return t.call(this,o,Ht(a),l,n)}),r[e](s,...i)}function Nl(n,e,t){const i=tt(n);kt(i,"iterate",co);const r=i[e](...t);return(r===-1||r===!1)&&Af(t[0])?(t[0]=tt(t[0]),i[e](...t)):r}function ws(n,e,t=[]){qi(),yf();const i=tt(n)[e].apply(n,t);return Mf(),$i(),i}const Vv=mf("__proto__,__v_isRef,__isVue"),Qm=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(ji));function Gv(n){ji(n)||(n=String(n));const e=tt(this);return kt(e,"has",n),e.hasOwnProperty(n)}class eg{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){if(t==="__v_skip")return e.__v_skip;const r=this._isReadonly,s=this._isShallow;if(t==="__v_isReactive")return!r;if(t==="__v_isReadonly")return r;if(t==="__v_isShallow")return s;if(t==="__v_raw")return i===(r?s?Qv:rg:s?ig:ng).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=He(e);if(!r){let l;if(o&&(l=Hv[t]))return l;if(t==="hasOwnProperty")return Gv}const a=Reflect.get(e,t,Vt(e)?e:i);return(ji(t)?Qm.has(t):Vv(t))||(r||kt(e,"get",t),s)?a:Vt(a)?o&&vf(t)?a:a.value:mt(a)?r?og(a):Yi(a):a}}class tg extends eg{constructor(e=!1){super(!1,e)}set(e,t,i,r){let s=e[t];if(!this._isShallow){const l=Mr(s);if(!Mn(i)&&!Mr(i)&&(s=tt(s),i=tt(i)),!He(e)&&Vt(s)&&!Vt(i))return l?!1:(s.value=i,!0)}const o=He(e)&&vf(t)?Number(t)<e.length:at(e,t),a=Reflect.set(e,t,i,Vt(e)?e:r);return e===tt(r)&&(o?Gi(i,s)&&di(e,"set",t,i):di(e,"add",t,i)),a}deleteProperty(e,t){const i=at(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&i&&di(e,"delete",t,void 0),r}has(e,t){const i=Reflect.has(e,t);return(!ji(t)||!Qm.has(t))&&kt(e,"has",t),i}ownKeys(e){return kt(e,"iterate",He(e)?"length":yr),Reflect.ownKeys(e)}}class Wv extends eg{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const Xv=new tg,jv=new Wv,qv=new tg(!0);const Gc=n=>n,ko=n=>Reflect.getPrototypeOf(n);function $v(n,e,t){return function(...i){const r=this.__v_raw,s=tt(r),o=Zr(s),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,c=r[n](...i),u=t?Gc:e?Wc:Ht;return!e&&kt(s,"iterate",l?Vc:yr),{next(){const{value:f,done:h}=c.next();return h?{value:f,done:h}:{value:a?[u(f[0]),u(f[1])]:u(f),done:h}},[Symbol.iterator](){return this}}}}function Ho(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function Yv(n,e){const t={get(r){const s=this.__v_raw,o=tt(s),a=tt(r);n||(Gi(r,a)&&kt(o,"get",r),kt(o,"get",a));const{has:l}=ko(o),c=e?Gc:n?Wc:Ht;if(l.call(o,r))return c(s.get(r));if(l.call(o,a))return c(s.get(a));s!==o&&s.get(r)},get size(){const r=this.__v_raw;return!n&&kt(tt(r),"iterate",yr),Reflect.get(r,"size",r)},has(r){const s=this.__v_raw,o=tt(s),a=tt(r);return n||(Gi(r,a)&&kt(o,"has",r),kt(o,"has",a)),r===a?s.has(r):s.has(r)||s.has(a)},forEach(r,s){const o=this,a=o.__v_raw,l=tt(a),c=e?Gc:n?Wc:Ht;return!n&&kt(l,"iterate",yr),a.forEach((u,f)=>r.call(s,c(u),c(f),o))}};return It(t,n?{add:Ho("add"),set:Ho("set"),delete:Ho("delete"),clear:Ho("clear")}:{add(r){!e&&!Mn(r)&&!Mr(r)&&(r=tt(r));const s=tt(this);return ko(s).has.call(s,r)||(s.add(r),di(s,"add",r,r)),this},set(r,s){!e&&!Mn(s)&&!Mr(s)&&(s=tt(s));const o=tt(this),{has:a,get:l}=ko(o);let c=a.call(o,r);c||(r=tt(r),c=a.call(o,r));const u=l.call(o,r);return o.set(r,s),c?Gi(s,u)&&di(o,"set",r,s):di(o,"add",r,s),this},delete(r){const s=tt(this),{has:o,get:a}=ko(s);let l=o.call(s,r);l||(r=tt(r),l=o.call(s,r)),a&&a.call(s,r);const c=s.delete(r);return l&&di(s,"delete",r,void 0),c},clear(){const r=tt(this),s=r.size!==0,o=r.clear();return s&&di(r,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=$v(r,n,e)}),t}function Ef(n,e){const t=Yv(n,e);return(i,r,s)=>r==="__v_isReactive"?!n:r==="__v_isReadonly"?n:r==="__v_raw"?i:Reflect.get(at(t,r)&&r in i?t:i,r,s)}const Kv={get:Ef(!1,!1)},Zv={get:Ef(!1,!0)},Jv={get:Ef(!0,!1)};const ng=new WeakMap,ig=new WeakMap,rg=new WeakMap,Qv=new WeakMap;function ex(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function tx(n){return n.__v_skip||!Object.isExtensible(n)?0:ex(Tv(n))}function Yi(n){return Mr(n)?n:Tf(n,!1,Xv,Kv,ng)}function sg(n){return Tf(n,!1,qv,Zv,ig)}function og(n){return Tf(n,!0,jv,Jv,rg)}function Tf(n,e,t,i,r){if(!mt(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const s=r.get(n);if(s)return s;const o=tx(n);if(o===0)return n;const a=new Proxy(n,o===2?i:t);return r.set(n,a),a}function Jr(n){return Mr(n)?Jr(n.__v_raw):!!(n&&n.__v_isReactive)}function Mr(n){return!!(n&&n.__v_isReadonly)}function Mn(n){return!!(n&&n.__v_isShallow)}function Af(n){return n?!!n.__v_raw:!1}function tt(n){const e=n&&n.__v_raw;return e?tt(e):n}function ag(n){return!at(n,"__v_skip")&&Object.isExtensible(n)&&km(n,"__v_skip",!0),n}const Ht=n=>mt(n)?Yi(n):n,Wc=n=>mt(n)?og(n):n;function Vt(n){return n?n.__v_isRef===!0:!1}function Ct(n){return lg(n,!1)}function nx(n){return lg(n,!0)}function lg(n,e){return Vt(n)?n:new ix(n,e)}class ix{constructor(e,t){this.dep=new bf,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:tt(e),this._value=t?e:Ht(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,i=this.__v_isShallow||Mn(e)||Mr(e);e=i?e:tt(e),Gi(e,t)&&(this._rawValue=e,this._value=i?e:Ht(e),this.dep.trigger())}}function Tt(n){return Vt(n)?n.value:n}const rx={get:(n,e,t)=>e==="__v_raw"?n:Tt(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const r=n[e];return Vt(r)&&!Vt(t)?(r.value=t,!0):Reflect.set(n,e,t,i)}};function cg(n){return Jr(n)?n:new Proxy(n,rx)}class sx{constructor(e,t,i){this.fn=e,this.setter=t,this._value=void 0,this.dep=new bf(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=lo-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&pt!==this)return qm(this,!0),!0}get value(){const e=this.dep.track();return Km(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function ox(n,e,t=!1){let i,r;return We(n)?i=n:(i=n.get,r=n.set),new sx(i,r,t)}const zo={},Fa=new WeakMap;let hr;function ax(n,e=!1,t=hr){if(t){let i=Fa.get(t);i||Fa.set(t,i=[]),i.push(n)}}function lx(n,e,t=dt){const{immediate:i,deep:r,once:s,scheduler:o,augmentJob:a,call:l}=t,c=v=>r?v:Mn(v)||r===!1||r===0?pi(v,1):pi(v);let u,f,h,d,g=!1,_=!1;if(Vt(n)?(f=()=>n.value,g=Mn(n)):Jr(n)?(f=()=>c(n),g=!0):He(n)?(_=!0,g=n.some(v=>Jr(v)||Mn(v)),f=()=>n.map(v=>{if(Vt(v))return v.value;if(Jr(v))return c(v);if(We(v))return l?l(v,2):v()})):We(n)?e?f=l?()=>l(n,2):n:f=()=>{if(h){qi();try{h()}finally{$i()}}const v=hr;hr=u;try{return l?l(n,3,[d]):n(d)}finally{hr=v}}:f=jn,e&&r){const v=f,P=r===!0?1/0:r;f=()=>pi(v(),P)}const m=Wm(),p=()=>{u.stop(),m&&m.active&&_f(m.effects,u)};if(s&&e){const v=e;e=(...P)=>{v(...P),p()}}let b=_?new Array(n.length).fill(zo):zo;const y=v=>{if(!(!(u.flags&1)||!u.dirty&&!v))if(e){const P=u.run();if(r||g||(_?P.some((w,C)=>Gi(w,b[C])):Gi(P,b))){h&&h();const w=hr;hr=u;try{const C=[P,b===zo?void 0:_&&b[0]===zo?[]:b,d];l?l(e,3,C):e(...C),b=P}finally{hr=w}}}else u.run()};return a&&a(y),u=new Xm(f),u.scheduler=o?()=>o(y,!1):y,d=v=>ax(v,!1,u),h=u.onStop=()=>{const v=Fa.get(u);if(v){if(l)l(v,4);else for(const P of v)P();Fa.delete(u)}},e?i?y(!0):b=u.run():o?o(y.bind(null,!0),!0):u.run(),p.pause=u.pause.bind(u),p.resume=u.resume.bind(u),p.stop=p,p}function pi(n,e=1/0,t){if(e<=0||!mt(n)||n.__v_skip||(t=t||new Set,t.has(n)))return n;if(t.add(n),e--,Vt(n))pi(n.value,e,t);else if(He(n))for(let i=0;i<n.length;i++)pi(n[i],e,t);else if(Um(n)||Zr(n))n.forEach(i=>{pi(i,e,t)});else if(Bm(n)){for(const i in n)pi(n[i],e,t);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&pi(n[i],e,t)}return n}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function wo(n,e,t,i){try{return i?n(...i):n()}catch(r){sl(r,e,t)}}function On(n,e,t,i){if(We(n)){const r=wo(n,e,t,i);return r&&Om(r)&&r.catch(s=>{sl(s,e,t)}),r}if(He(n)){const r=[];for(let s=0;s<n.length;s++)r.push(On(n[s],e,t,i));return r}}function sl(n,e,t,i=!0){const r=e?e.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||dt;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${t}`;for(;a;){const u=a.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](n,l,c)===!1)return}a=a.parent}if(s){qi(),wo(s,null,10,[n,l,c]),$i();return}}cx(n,t,r,i,o)}function cx(n,e,t,i=!0,r=!1){if(r)throw n;console.error(n)}const Yt=[];let Vn=-1;const Qr=[];let Di=null,jr=0;const ug=Promise.resolve();let Ba=null;function ol(n){const e=Ba||ug;return n?e.then(this?n.bind(this):n):e}function ux(n){let e=Vn+1,t=Yt.length;for(;e<t;){const i=e+t>>>1,r=Yt[i],s=uo(r);s<n||s===n&&r.flags&2?e=i+1:t=i}return e}function wf(n){if(!(n.flags&1)){const e=uo(n),t=Yt[Yt.length-1];!t||!(n.flags&2)&&e>=uo(t)?Yt.push(n):Yt.splice(ux(e),0,n),n.flags|=1,fg()}}function fg(){Ba||(Ba=ug.then(dg))}function fx(n){He(n)?Qr.push(...n):Di&&n.id===-1?Di.splice(jr+1,0,n):n.flags&1||(Qr.push(n),n.flags|=1),fg()}function Rh(n,e,t=Vn+1){for(;t<Yt.length;t++){const i=Yt[t];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;Yt.splice(t,1),t--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function hg(n){if(Qr.length){const e=[...new Set(Qr)].sort((t,i)=>uo(t)-uo(i));if(Qr.length=0,Di){Di.push(...e);return}for(Di=e,jr=0;jr<Di.length;jr++){const t=Di[jr];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}Di=null,jr=0}}const uo=n=>n.id==null?n.flags&2?-1:1/0:n.id;function dg(n){try{for(Vn=0;Vn<Yt.length;Vn++){const e=Yt[Vn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),wo(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Vn<Yt.length;Vn++){const e=Yt[Vn];e&&(e.flags&=-2)}Vn=-1,Yt.length=0,hg(),Ba=null,(Yt.length||Qr.length)&&dg()}}let sn=null,pg=null;function ka(n){const e=sn;return sn=n,pg=n&&n.type.__scopeId||null,e}function mg(n,e=sn,t){if(!e||n._n)return n;const i=(...r)=>{i._d&&zh(-1);const s=ka(e);let o;try{o=n(...r)}finally{ka(s),i._d&&zh(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function Ch(n,e){if(sn===null)return n;const t=hl(sn),i=n.dirs||(n.dirs=[]);for(let r=0;r<e.length;r++){let[s,o,a,l=dt]=e[r];s&&(We(s)&&(s={mounted:s,updated:s}),s.deep&&pi(o),i.push({dir:s,instance:t,value:o,oldValue:void 0,arg:a,modifiers:l}))}return n}function Qi(n,e,t,i){const r=n.dirs,s=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let l=a.dir[i];l&&(qi(),On(l,t,8,[n.el,a,n,e]),$i())}}const hx=Symbol("_vte"),gg=n=>n.__isTeleport,Ni=Symbol("_leaveCb"),Vo=Symbol("_enterCb");function dx(){const n={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Ar(()=>{n.isMounted=!0}),Tg(()=>{n.isUnmounting=!0}),n}const _n=[Function,Array],_g={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:_n,onEnter:_n,onAfterEnter:_n,onEnterCancelled:_n,onBeforeLeave:_n,onLeave:_n,onAfterLeave:_n,onLeaveCancelled:_n,onBeforeAppear:_n,onAppear:_n,onAfterAppear:_n,onAppearCancelled:_n},vg=n=>{const e=n.subTree;return e.component?vg(e.component):e},px={name:"BaseTransition",props:_g,setup(n,{slots:e}){const t=fl(),i=dx();return()=>{const r=e.default&&Mg(e.default(),!0);if(!r||!r.length)return;const s=xg(r),o=tt(n),{mode:a}=o;if(i.isLeaving)return Ul(s);const l=Ph(s);if(!l)return Ul(s);let c=Xc(l,o,i,t,f=>c=f);l.type!==rn&&fo(l,c);let u=t.subTree&&Ph(t.subTree);if(u&&u.type!==rn&&!mr(l,u)&&vg(t).type!==rn){let f=Xc(u,o,i,t);if(fo(u,f),a==="out-in"&&l.type!==rn)return i.isLeaving=!0,f.afterLeave=()=>{i.isLeaving=!1,t.job.flags&8||t.update(),delete f.afterLeave,u=void 0},Ul(s);a==="in-out"&&l.type!==rn?f.delayLeave=(h,d,g)=>{const _=yg(i,u);_[String(u.key)]=u,h[Ni]=()=>{d(),h[Ni]=void 0,delete c.delayedLeave,u=void 0},c.delayedLeave=()=>{g(),delete c.delayedLeave,u=void 0}}:u=void 0}else u&&(u=void 0);return s}}};function xg(n){let e=n[0];if(n.length>1){for(const t of n)if(t.type!==rn){e=t;break}}return e}const mx=px;function yg(n,e){const{leavingVNodes:t}=n;let i=t.get(e.type);return i||(i=Object.create(null),t.set(e.type,i)),i}function Xc(n,e,t,i,r){const{appear:s,mode:o,persisted:a=!1,onBeforeEnter:l,onEnter:c,onAfterEnter:u,onEnterCancelled:f,onBeforeLeave:h,onLeave:d,onAfterLeave:g,onLeaveCancelled:_,onBeforeAppear:m,onAppear:p,onAfterAppear:b,onAppearCancelled:y}=e,v=String(n.key),P=yg(t,n),w=(T,M)=>{T&&On(T,i,9,M)},C=(T,M)=>{const L=M[1];w(T,M),He(T)?T.every(U=>U.length<=1)&&L():T.length<=1&&L()},D={mode:o,persisted:a,beforeEnter(T){let M=l;if(!t.isMounted)if(s)M=m||l;else return;T[Ni]&&T[Ni](!0);const L=P[v];L&&mr(n,L)&&L.el[Ni]&&L.el[Ni](),w(M,[T])},enter(T){let M=c,L=u,U=f;if(!t.isMounted)if(s)M=p||c,L=b||u,U=y||f;else return;let O=!1;const W=T[Vo]=Q=>{O||(O=!0,Q?w(U,[T]):w(L,[T]),D.delayedLeave&&D.delayedLeave(),T[Vo]=void 0)};M?C(M,[T,W]):W()},leave(T,M){const L=String(n.key);if(T[Vo]&&T[Vo](!0),t.isUnmounting)return M();w(h,[T]);let U=!1;const O=T[Ni]=W=>{U||(U=!0,M(),W?w(_,[T]):w(g,[T]),T[Ni]=void 0,P[L]===n&&delete P[L])};P[L]=n,d?C(d,[T,O]):O()},clone(T){const M=Xc(T,e,t,i,r);return r&&r(M),M}};return D}function Ul(n){if(al(n))return n=Xi(n),n.children=null,n}function Ph(n){if(!al(n))return gg(n.type)&&n.children?xg(n.children):n;const{shapeFlag:e,children:t}=n;if(t){if(e&16)return t[0];if(e&32&&We(t.default))return t.default()}}function fo(n,e){n.shapeFlag&6&&n.component?(n.transition=e,fo(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function Mg(n,e=!1,t){let i=[],r=0;for(let s=0;s<n.length;s++){let o=n[s];const a=t==null?o.key:String(t)+String(o.key!=null?o.key:s);o.type===nn?(o.patchFlag&128&&r++,i=i.concat(Mg(o.children,e,a))):(e||o.type!==rn)&&i.push(a!=null?Xi(o,{key:a}):o)}if(r>1)for(let s=0;s<i.length;s++)i[s].patchFlag=-2;return i}/*! #__NO_SIDE_EFFECTS__ */function Yn(n,e){return We(n)?It({name:n.name},e,{setup:n}):n}function Sg(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function Ha(n,e,t,i,r=!1){if(He(n)){n.forEach((g,_)=>Ha(g,e&&(He(e)?e[_]:e),t,i,r));return}if(Ks(i)&&!r){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&Ha(n,e,t,i.component.subTree);return}const s=i.shapeFlag&4?hl(i.component):i.el,o=r?null:s,{i:a,r:l}=n,c=e&&e.r,u=a.refs===dt?a.refs={}:a.refs,f=a.setupState,h=tt(f),d=f===dt?()=>!1:g=>at(h,g);if(c!=null&&c!==l&&(Mt(c)?(u[c]=null,d(c)&&(f[c]=null)):Vt(c)&&(c.value=null)),We(l))wo(l,a,12,[o,u]);else{const g=Mt(l),_=Vt(l);if(g||_){const m=()=>{if(n.f){const p=g?d(l)?f[l]:u[l]:l.value;r?He(p)&&_f(p,s):He(p)?p.includes(s)||p.push(s):g?(u[l]=[s],d(l)&&(f[l]=u[l])):(l.value=[s],n.k&&(u[n.k]=l.value))}else g?(u[l]=o,d(l)&&(f[l]=o)):_&&(l.value=o,n.k&&(u[n.k]=o))};o?(m.id=-1,fn(m,t)):m()}}}il().requestIdleCallback;il().cancelIdleCallback;const Ks=n=>!!n.type.__asyncLoader,al=n=>n.type.__isKeepAlive;function gx(n,e){bg(n,"a",e)}function _x(n,e){bg(n,"da",e)}function bg(n,e,t=Nt){const i=n.__wdc||(n.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return n()});if(ll(e,i,t),t){let r=t.parent;for(;r&&r.parent;)al(r.parent.vnode)&&vx(i,e,t,r),r=r.parent}}function vx(n,e,t,i){const r=ll(e,n,i,!0);Rf(()=>{_f(i[e],r)},t)}function ll(n,e,t=Nt,i=!1){if(t){const r=t[n]||(t[n]=[]),s=e.__weh||(e.__weh=(...o)=>{qi();const a=Ro(t),l=On(e,t,n,o);return a(),$i(),l});return i?r.unshift(s):r.push(s),s}}const Si=n=>(e,t=Nt)=>{(!po||n==="sp")&&ll(n,(...i)=>e(...i),t)},xx=Si("bm"),Ar=Si("m"),yx=Si("bu"),Eg=Si("u"),Tg=Si("bum"),Rf=Si("um"),Mx=Si("sp"),Sx=Si("rtg"),bx=Si("rtc");function Ex(n,e=Nt){ll("ec",n,e)}const Ag="components",Tx="directives";function Ax(n,e){return wg(Ag,n,!0,e)||n}const wx=Symbol.for("v-ndc");function Ih(n){return wg(Tx,n)}function wg(n,e,t=!0,i=!1){const r=sn||Nt;if(r){const s=r.type;if(n===Ag){const a=gy(s,!1);if(a&&(a===e||a===bn(e)||a===nl(bn(e))))return s}const o=Lh(r[n]||s[n],e)||Lh(r.appContext[n],e);return!o&&i?s:o}}function Lh(n,e){return n&&(n[e]||n[bn(e)]||n[nl(bn(e))])}function Ol(n,e,t,i){let r;const s=t,o=He(n);if(o||Mt(n)){const a=o&&Jr(n);let l=!1;a&&(l=!Mn(n),n=rl(n)),r=new Array(n.length);for(let c=0,u=n.length;c<u;c++)r[c]=e(l?Ht(n[c]):n[c],c,void 0,s)}else if(typeof n=="number"){r=new Array(n);for(let a=0;a<n;a++)r[a]=e(a+1,a,void 0,s)}else if(mt(n))if(n[Symbol.iterator])r=Array.from(n,(a,l)=>e(a,l,void 0,s));else{const a=Object.keys(n);r=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];r[l]=e(n[u],u,l,s)}}else r=[];return r}const jc=n=>n?Yg(n)?hl(n):jc(n.parent):null,Zs=It(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>jc(n.parent),$root:n=>jc(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>Pg(n),$forceUpdate:n=>n.f||(n.f=()=>{wf(n.update)}),$nextTick:n=>n.n||(n.n=ol.bind(n.proxy)),$watch:n=>Yx.bind(n)}),Fl=(n,e)=>n!==dt&&!n.__isScriptSetup&&at(n,e),Rx={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:i,data:r,props:s,accessCache:o,type:a,appContext:l}=n;let c;if(e[0]!=="$"){const d=o[e];if(d!==void 0)switch(d){case 1:return i[e];case 2:return r[e];case 4:return t[e];case 3:return s[e]}else{if(Fl(i,e))return o[e]=1,i[e];if(r!==dt&&at(r,e))return o[e]=2,r[e];if((c=n.propsOptions[0])&&at(c,e))return o[e]=3,s[e];if(t!==dt&&at(t,e))return o[e]=4,t[e];qc&&(o[e]=0)}}const u=Zs[e];let f,h;if(u)return e==="$attrs"&&kt(n.attrs,"get",""),u(n);if((f=a.__cssModules)&&(f=f[e]))return f;if(t!==dt&&at(t,e))return o[e]=4,t[e];if(h=l.config.globalProperties,at(h,e))return h[e]},set({_:n},e,t){const{data:i,setupState:r,ctx:s}=n;return Fl(r,e)?(r[e]=t,!0):i!==dt&&at(i,e)?(i[e]=t,!0):at(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(s[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:r,propsOptions:s}},o){let a;return!!t[o]||n!==dt&&at(n,o)||Fl(e,o)||(a=s[0])&&at(a,o)||at(i,o)||at(Zs,o)||at(r.config.globalProperties,o)},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:at(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function Rg(){return Cx().slots}function Cx(){const n=fl();return n.setupContext||(n.setupContext=Zg(n))}function Dh(n){return He(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let qc=!0;function Px(n){const e=Pg(n),t=n.proxy,i=n.ctx;qc=!1,e.beforeCreate&&Nh(e.beforeCreate,n,"bc");const{data:r,computed:s,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:f,mounted:h,beforeUpdate:d,updated:g,activated:_,deactivated:m,beforeDestroy:p,beforeUnmount:b,destroyed:y,unmounted:v,render:P,renderTracked:w,renderTriggered:C,errorCaptured:D,serverPrefetch:T,expose:M,inheritAttrs:L,components:U,directives:O,filters:W}=e;if(c&&Ix(c,i,null),o)for(const ee in o){const z=o[ee];We(z)&&(i[ee]=z.bind(t))}if(r){const ee=r.call(t,t);mt(ee)&&(n.data=Yi(ee))}if(qc=!0,s)for(const ee in s){const z=s[ee],de=We(z)?z.bind(t,t):We(z.get)?z.get.bind(t,t):jn,_e=!We(z)&&We(z.set)?z.set.bind(t):jn,Ee=Et({get:de,set:_e});Object.defineProperty(i,ee,{enumerable:!0,configurable:!0,get:()=>Ee.value,set:Ce=>Ee.value=Ce})}if(a)for(const ee in a)Cg(a[ee],i,t,ee);if(l){const ee=We(l)?l.call(t):l;Reflect.ownKeys(ee).forEach(z=>{ya(z,ee[z])})}u&&Nh(u,n,"c");function j(ee,z){He(z)?z.forEach(de=>ee(de.bind(t))):z&&ee(z.bind(t))}if(j(xx,f),j(Ar,h),j(yx,d),j(Eg,g),j(gx,_),j(_x,m),j(Ex,D),j(bx,w),j(Sx,C),j(Tg,b),j(Rf,v),j(Mx,T),He(M))if(M.length){const ee=n.exposed||(n.exposed={});M.forEach(z=>{Object.defineProperty(ee,z,{get:()=>t[z],set:de=>t[z]=de})})}else n.exposed||(n.exposed={});P&&n.render===jn&&(n.render=P),L!=null&&(n.inheritAttrs=L),U&&(n.components=U),O&&(n.directives=O),T&&Sg(n)}function Ix(n,e,t=jn){He(n)&&(n=$c(n));for(const i in n){const r=n[i];let s;mt(r)?"default"in r?s=Sn(r.from||i,r.default,!0):s=Sn(r.from||i):s=Sn(r),Vt(s)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):e[i]=s}}function Nh(n,e,t){On(He(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function Cg(n,e,t,i){let r=i.includes(".")?Wg(t,i):()=>t[i];if(Mt(n)){const s=e[n];We(s)&&Gt(r,s)}else if(We(n))Gt(r,n.bind(t));else if(mt(n))if(He(n))n.forEach(s=>Cg(s,e,t,i));else{const s=We(n.handler)?n.handler.bind(t):e[n.handler];We(s)&&Gt(r,s,n)}}function Pg(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=n.appContext,a=s.get(e);let l;return a?l=a:!r.length&&!t&&!i?l=e:(l={},r.length&&r.forEach(c=>za(l,c,o,!0)),za(l,e,o)),mt(e)&&s.set(e,l),l}function za(n,e,t,i=!1){const{mixins:r,extends:s}=e;s&&za(n,s,t,!0),r&&r.forEach(o=>za(n,o,t,!0));for(const o in e)if(!(i&&o==="expose")){const a=Lx[o]||t&&t[o];n[o]=a?a(n[o],e[o]):e[o]}return n}const Lx={data:Uh,props:Oh,emits:Oh,methods:Ws,computed:Ws,beforeCreate:jt,created:jt,beforeMount:jt,mounted:jt,beforeUpdate:jt,updated:jt,beforeDestroy:jt,beforeUnmount:jt,destroyed:jt,unmounted:jt,activated:jt,deactivated:jt,errorCaptured:jt,serverPrefetch:jt,components:Ws,directives:Ws,watch:Nx,provide:Uh,inject:Dx};function Uh(n,e){return e?n?function(){return It(We(n)?n.call(this,this):n,We(e)?e.call(this,this):e)}:e:n}function Dx(n,e){return Ws($c(n),$c(e))}function $c(n){if(He(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function jt(n,e){return n?[...new Set([].concat(n,e))]:e}function Ws(n,e){return n?It(Object.create(null),n,e):e}function Oh(n,e){return n?He(n)&&He(e)?[...new Set([...n,...e])]:It(Object.create(null),Dh(n),Dh(e??{})):e}function Nx(n,e){if(!n)return e;if(!e)return n;const t=It(Object.create(null),n);for(const i in e)t[i]=jt(n[i],e[i]);return t}function Ig(){return{app:null,config:{isNativeTag:bv,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Ux=0;function Ox(n,e){return function(i,r=null){We(i)||(i=It({},i)),r!=null&&!mt(r)&&(r=null);const s=Ig(),o=new WeakSet,a=[];let l=!1;const c=s.app={_uid:Ux++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:vy,get config(){return s.config},set config(u){},use(u,...f){return o.has(u)||(u&&We(u.install)?(o.add(u),u.install(c,...f)):We(u)&&(o.add(u),u(c,...f))),c},mixin(u){return s.mixins.includes(u)||s.mixins.push(u),c},component(u,f){return f?(s.components[u]=f,c):s.components[u]},directive(u,f){return f?(s.directives[u]=f,c):s.directives[u]},mount(u,f,h){if(!l){const d=c._ceVNode||yt(i,r);return d.appContext=s,h===!0?h="svg":h===!1&&(h=void 0),n(d,u,h),l=!0,c._container=u,u.__vue_app__=c,hl(d.component)}},onUnmount(u){a.push(u)},unmount(){l&&(On(a,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(u,f){return s.provides[u]=f,c},runWithContext(u){const f=es;es=c;try{return u()}finally{es=f}}};return c}}let es=null;function ya(n,e){if(Nt){let t=Nt.provides;const i=Nt.parent&&Nt.parent.provides;i===t&&(t=Nt.provides=Object.create(i)),t[n]=e}}function Sn(n,e,t=!1){const i=Nt||sn;if(i||es){const r=es?es._context.provides:i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(r&&n in r)return r[n];if(arguments.length>1)return t&&We(e)?e.call(i&&i.proxy):e}}const Lg={},Dg=()=>Object.create(Lg),Ng=n=>Object.getPrototypeOf(n)===Lg;function Fx(n,e,t,i=!1){const r={},s=Dg();n.propsDefaults=Object.create(null),Ug(n,e,r,s);for(const o in n.propsOptions[0])o in r||(r[o]=void 0);t?n.props=i?r:sg(r):n.type.props?n.props=r:n.props=s,n.attrs=s}function Bx(n,e,t,i){const{props:r,attrs:s,vnode:{patchFlag:o}}=n,a=tt(r),[l]=n.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=n.vnode.dynamicProps;for(let f=0;f<u.length;f++){let h=u[f];if(cl(n.emitsOptions,h))continue;const d=e[h];if(l)if(at(s,h))d!==s[h]&&(s[h]=d,c=!0);else{const g=bn(h);r[g]=Yc(l,a,g,d,n,!1)}else d!==s[h]&&(s[h]=d,c=!0)}}}else{Ug(n,e,r,s)&&(c=!0);let u;for(const f in a)(!e||!at(e,f)&&((u=Tr(f))===f||!at(e,u)))&&(l?t&&(t[f]!==void 0||t[u]!==void 0)&&(r[f]=Yc(l,a,f,void 0,n,!0)):delete r[f]);if(s!==a)for(const f in s)(!e||!at(e,f))&&(delete s[f],c=!0)}c&&di(n.attrs,"set","")}function Ug(n,e,t,i){const[r,s]=n.propsOptions;let o=!1,a;if(e)for(let l in e){if(qs(l))continue;const c=e[l];let u;r&&at(r,u=bn(l))?!s||!s.includes(u)?t[u]=c:(a||(a={}))[u]=c:cl(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(s){const l=tt(t),c=a||dt;for(let u=0;u<s.length;u++){const f=s[u];t[f]=Yc(r,l,f,c[f],n,!at(c,f))}}return o}function Yc(n,e,t,i,r,s){const o=n[t];if(o!=null){const a=at(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&We(l)){const{propsDefaults:c}=r;if(t in c)i=c[t];else{const u=Ro(r);i=c[t]=l.call(null,e),u()}}else i=l;r.ce&&r.ce._setProp(t,i)}o[0]&&(s&&!a?i=!1:o[1]&&(i===""||i===Tr(t))&&(i=!0))}return i}const kx=new WeakMap;function Og(n,e,t=!1){const i=t?kx:e.propsCache,r=i.get(n);if(r)return r;const s=n.props,o={},a=[];let l=!1;if(!We(n)){const u=f=>{l=!0;const[h,d]=Og(f,e,!0);It(o,h),d&&a.push(...d)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!s&&!l)return mt(n)&&i.set(n,Kr),Kr;if(He(s))for(let u=0;u<s.length;u++){const f=bn(s[u]);Fh(f)&&(o[f]=dt)}else if(s)for(const u in s){const f=bn(u);if(Fh(f)){const h=s[u],d=o[f]=He(h)||We(h)?{type:h}:It({},h),g=d.type;let _=!1,m=!0;if(He(g))for(let p=0;p<g.length;++p){const b=g[p],y=We(b)&&b.name;if(y==="Boolean"){_=!0;break}else y==="String"&&(m=!1)}else _=We(g)&&g.name==="Boolean";d[0]=_,d[1]=m,(_||at(d,"default"))&&a.push(f)}}const c=[o,a];return mt(n)&&i.set(n,c),c}function Fh(n){return n[0]!=="$"&&!qs(n)}const Fg=n=>n[0]==="_"||n==="$stable",Cf=n=>He(n)?n.map(Gn):[Gn(n)],Hx=(n,e,t)=>{if(e._n)return e;const i=mg((...r)=>Cf(e(...r)),t);return i._c=!1,i},Bg=(n,e,t)=>{const i=n._ctx;for(const r in n){if(Fg(r))continue;const s=n[r];if(We(s))e[r]=Hx(r,s,i);else if(s!=null){const o=Cf(s);e[r]=()=>o}}},kg=(n,e)=>{const t=Cf(e);n.slots.default=()=>t},Hg=(n,e,t)=>{for(const i in e)(t||i!=="_")&&(n[i]=e[i])},zx=(n,e,t)=>{const i=n.slots=Dg();if(n.vnode.shapeFlag&32){const r=e._;r?(Hg(i,e,t),t&&km(i,"_",r,!0)):Bg(e,i)}else e&&kg(n,e)},Vx=(n,e,t)=>{const{vnode:i,slots:r}=n;let s=!0,o=dt;if(i.shapeFlag&32){const a=e._;a?t&&a===1?s=!1:Hg(r,e,t):(s=!e.$stable,Bg(e,r)),o=e}else e&&(kg(n,e),o={default:1});if(s)for(const a in r)!Fg(a)&&o[a]==null&&delete r[a]},fn=ny;function Gx(n){return Wx(n)}function Wx(n,e){const t=il();t.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:h,setScopeId:d=jn,insertStaticContent:g}=n,_=(R,I,S,te=null,Y=null,q=null,ne=void 0,ae=null,J=!!I.dynamicChildren)=>{if(R===I)return;R&&!mr(R,I)&&(te=F(R),Ce(R,Y,q,!0),R=null),I.patchFlag===-2&&(J=!1,I.dynamicChildren=null);const{type:E,ref:x,shapeFlag:N}=I;switch(E){case ul:m(R,I,S,te);break;case rn:p(R,I,S,te);break;case Ma:R==null&&b(I,S,te,ne);break;case nn:U(R,I,S,te,Y,q,ne,ae,J);break;default:N&1?P(R,I,S,te,Y,q,ne,ae,J):N&6?O(R,I,S,te,Y,q,ne,ae,J):(N&64||N&128)&&E.process(R,I,S,te,Y,q,ne,ae,J,ue)}x!=null&&Y&&Ha(x,R&&R.ref,q,I||R,!I)},m=(R,I,S,te)=>{if(R==null)i(I.el=a(I.children),S,te);else{const Y=I.el=R.el;I.children!==R.children&&c(Y,I.children)}},p=(R,I,S,te)=>{R==null?i(I.el=l(I.children||""),S,te):I.el=R.el},b=(R,I,S,te)=>{[R.el,R.anchor]=g(R.children,I,S,te,R.el,R.anchor)},y=({el:R,anchor:I},S,te)=>{let Y;for(;R&&R!==I;)Y=h(R),i(R,S,te),R=Y;i(I,S,te)},v=({el:R,anchor:I})=>{let S;for(;R&&R!==I;)S=h(R),r(R),R=S;r(I)},P=(R,I,S,te,Y,q,ne,ae,J)=>{I.type==="svg"?ne="svg":I.type==="math"&&(ne="mathml"),R==null?w(I,S,te,Y,q,ne,ae,J):T(R,I,Y,q,ne,ae,J)},w=(R,I,S,te,Y,q,ne,ae)=>{let J,E;const{props:x,shapeFlag:N,transition:G,dirs:$}=R;if(J=R.el=o(R.type,q,x&&x.is,x),N&8?u(J,R.children):N&16&&D(R.children,J,null,te,Y,Bl(R,q),ne,ae),$&&Qi(R,null,te,"created"),C(J,R,R.scopeId,ne,te),x){for(const me in x)me!=="value"&&!qs(me)&&s(J,me,null,x[me],q,te);"value"in x&&s(J,"value",null,x.value,q),(E=x.onVnodeBeforeMount)&&kn(E,te,R)}$&&Qi(R,null,te,"beforeMount");const X=Xx(Y,G);X&&G.beforeEnter(J),i(J,I,S),((E=x&&x.onVnodeMounted)||X||$)&&fn(()=>{E&&kn(E,te,R),X&&G.enter(J),$&&Qi(R,null,te,"mounted")},Y)},C=(R,I,S,te,Y)=>{if(S&&d(R,S),te)for(let q=0;q<te.length;q++)d(R,te[q]);if(Y){let q=Y.subTree;if(I===q||jg(q.type)&&(q.ssContent===I||q.ssFallback===I)){const ne=Y.vnode;C(R,ne,ne.scopeId,ne.slotScopeIds,Y.parent)}}},D=(R,I,S,te,Y,q,ne,ae,J=0)=>{for(let E=J;E<R.length;E++){const x=R[E]=ae?Ui(R[E]):Gn(R[E]);_(null,x,I,S,te,Y,q,ne,ae)}},T=(R,I,S,te,Y,q,ne)=>{const ae=I.el=R.el;let{patchFlag:J,dynamicChildren:E,dirs:x}=I;J|=R.patchFlag&16;const N=R.props||dt,G=I.props||dt;let $;if(S&&er(S,!1),($=G.onVnodeBeforeUpdate)&&kn($,S,I,R),x&&Qi(I,R,S,"beforeUpdate"),S&&er(S,!0),(N.innerHTML&&G.innerHTML==null||N.textContent&&G.textContent==null)&&u(ae,""),E?M(R.dynamicChildren,E,ae,S,te,Bl(I,Y),q):ne||z(R,I,ae,null,S,te,Bl(I,Y),q,!1),J>0){if(J&16)L(ae,N,G,S,Y);else if(J&2&&N.class!==G.class&&s(ae,"class",null,G.class,Y),J&4&&s(ae,"style",N.style,G.style,Y),J&8){const X=I.dynamicProps;for(let me=0;me<X.length;me++){const ce=X[me],ge=N[ce],Le=G[ce];(Le!==ge||ce==="value")&&s(ae,ce,ge,Le,Y,S)}}J&1&&R.children!==I.children&&u(ae,I.children)}else!ne&&E==null&&L(ae,N,G,S,Y);(($=G.onVnodeUpdated)||x)&&fn(()=>{$&&kn($,S,I,R),x&&Qi(I,R,S,"updated")},te)},M=(R,I,S,te,Y,q,ne)=>{for(let ae=0;ae<I.length;ae++){const J=R[ae],E=I[ae],x=J.el&&(J.type===nn||!mr(J,E)||J.shapeFlag&70)?f(J.el):S;_(J,E,x,null,te,Y,q,ne,!0)}},L=(R,I,S,te,Y)=>{if(I!==S){if(I!==dt)for(const q in I)!qs(q)&&!(q in S)&&s(R,q,I[q],null,Y,te);for(const q in S){if(qs(q))continue;const ne=S[q],ae=I[q];ne!==ae&&q!=="value"&&s(R,q,ae,ne,Y,te)}"value"in S&&s(R,"value",I.value,S.value,Y)}},U=(R,I,S,te,Y,q,ne,ae,J)=>{const E=I.el=R?R.el:a(""),x=I.anchor=R?R.anchor:a("");let{patchFlag:N,dynamicChildren:G,slotScopeIds:$}=I;$&&(ae=ae?ae.concat($):$),R==null?(i(E,S,te),i(x,S,te),D(I.children||[],S,x,Y,q,ne,ae,J)):N>0&&N&64&&G&&R.dynamicChildren?(M(R.dynamicChildren,G,S,Y,q,ne,ae),(I.key!=null||Y&&I===Y.subTree)&&zg(R,I,!0)):z(R,I,S,x,Y,q,ne,ae,J)},O=(R,I,S,te,Y,q,ne,ae,J)=>{I.slotScopeIds=ae,R==null?I.shapeFlag&512?Y.ctx.activate(I,S,te,ne,J):W(I,S,te,Y,q,ne,J):Q(R,I,J)},W=(R,I,S,te,Y,q,ne)=>{const ae=R.component=hy(R,te,Y);if(al(R)&&(ae.ctx.renderer=ue),dy(ae,!1,ne),ae.asyncDep){if(Y&&Y.registerDep(ae,j,ne),!R.el){const J=ae.subTree=yt(rn);p(null,J,I,S)}}else j(ae,R,I,S,Y,q,ne)},Q=(R,I,S)=>{const te=I.component=R.component;if(ey(R,I,S))if(te.asyncDep&&!te.asyncResolved){ee(te,I,S);return}else te.next=I,te.update();else I.el=R.el,te.vnode=I},j=(R,I,S,te,Y,q,ne)=>{const ae=()=>{if(R.isMounted){let{next:N,bu:G,u:$,parent:X,vnode:me}=R;{const xe=Vg(R);if(xe){N&&(N.el=me.el,ee(R,N,ne)),xe.asyncDep.then(()=>{R.isUnmounted||ae()});return}}let ce=N,ge;er(R,!1),N?(N.el=me.el,ee(R,N,ne)):N=me,G&&Pl(G),(ge=N.props&&N.props.onVnodeBeforeUpdate)&&kn(ge,X,N,me),er(R,!0);const Le=kh(R),fe=R.subTree;R.subTree=Le,_(fe,Le,f(fe.el),F(fe),R,Y,q),N.el=Le.el,ce===null&&ty(R,Le.el),$&&fn($,Y),(ge=N.props&&N.props.onVnodeUpdated)&&fn(()=>kn(ge,X,N,me),Y)}else{let N;const{el:G,props:$}=I,{bm:X,m:me,parent:ce,root:ge,type:Le}=R,fe=Ks(I);er(R,!1),X&&Pl(X),!fe&&(N=$&&$.onVnodeBeforeMount)&&kn(N,ce,I),er(R,!0);{ge.ce&&ge.ce._injectChildStyle(Le);const xe=R.subTree=kh(R);_(null,xe,S,te,R,Y,q),I.el=xe.el}if(me&&fn(me,Y),!fe&&(N=$&&$.onVnodeMounted)){const xe=I;fn(()=>kn(N,ce,xe),Y)}(I.shapeFlag&256||ce&&Ks(ce.vnode)&&ce.vnode.shapeFlag&256)&&R.a&&fn(R.a,Y),R.isMounted=!0,I=S=te=null}};R.scope.on();const J=R.effect=new Xm(ae);R.scope.off();const E=R.update=J.run.bind(J),x=R.job=J.runIfDirty.bind(J);x.i=R,x.id=R.uid,J.scheduler=()=>wf(x),er(R,!0),E()},ee=(R,I,S)=>{I.component=R;const te=R.vnode.props;R.vnode=I,R.next=null,Bx(R,I.props,te,S),Vx(R,I.children,S),qi(),Rh(R),$i()},z=(R,I,S,te,Y,q,ne,ae,J=!1)=>{const E=R&&R.children,x=R?R.shapeFlag:0,N=I.children,{patchFlag:G,shapeFlag:$}=I;if(G>0){if(G&128){_e(E,N,S,te,Y,q,ne,ae,J);return}else if(G&256){de(E,N,S,te,Y,q,ne,ae,J);return}}$&8?(x&16&&ye(E,Y,q),N!==E&&u(S,N)):x&16?$&16?_e(E,N,S,te,Y,q,ne,ae,J):ye(E,Y,q,!0):(x&8&&u(S,""),$&16&&D(N,S,te,Y,q,ne,ae,J))},de=(R,I,S,te,Y,q,ne,ae,J)=>{R=R||Kr,I=I||Kr;const E=R.length,x=I.length,N=Math.min(E,x);let G;for(G=0;G<N;G++){const $=I[G]=J?Ui(I[G]):Gn(I[G]);_(R[G],$,S,null,Y,q,ne,ae,J)}E>x?ye(R,Y,q,!0,!1,N):D(I,S,te,Y,q,ne,ae,J,N)},_e=(R,I,S,te,Y,q,ne,ae,J)=>{let E=0;const x=I.length;let N=R.length-1,G=x-1;for(;E<=N&&E<=G;){const $=R[E],X=I[E]=J?Ui(I[E]):Gn(I[E]);if(mr($,X))_($,X,S,null,Y,q,ne,ae,J);else break;E++}for(;E<=N&&E<=G;){const $=R[N],X=I[G]=J?Ui(I[G]):Gn(I[G]);if(mr($,X))_($,X,S,null,Y,q,ne,ae,J);else break;N--,G--}if(E>N){if(E<=G){const $=G+1,X=$<x?I[$].el:te;for(;E<=G;)_(null,I[E]=J?Ui(I[E]):Gn(I[E]),S,X,Y,q,ne,ae,J),E++}}else if(E>G)for(;E<=N;)Ce(R[E],Y,q,!0),E++;else{const $=E,X=E,me=new Map;for(E=X;E<=G;E++){const ve=I[E]=J?Ui(I[E]):Gn(I[E]);ve.key!=null&&me.set(ve.key,E)}let ce,ge=0;const Le=G-X+1;let fe=!1,xe=0;const Pe=new Array(Le);for(E=0;E<Le;E++)Pe[E]=0;for(E=$;E<=N;E++){const ve=R[E];if(ge>=Le){Ce(ve,Y,q,!0);continue}let Be;if(ve.key!=null)Be=me.get(ve.key);else for(ce=X;ce<=G;ce++)if(Pe[ce-X]===0&&mr(ve,I[ce])){Be=ce;break}Be===void 0?Ce(ve,Y,q,!0):(Pe[Be-X]=E+1,Be>=xe?xe=Be:fe=!0,_(ve,I[Be],S,null,Y,q,ne,ae,J),ge++)}const Oe=fe?jx(Pe):Kr;for(ce=Oe.length-1,E=Le-1;E>=0;E--){const ve=X+E,Be=I[ve],ze=ve+1<x?I[ve+1].el:te;Pe[E]===0?_(null,Be,S,ze,Y,q,ne,ae,J):fe&&(ce<0||E!==Oe[ce]?Ee(Be,S,ze,2):ce--)}}},Ee=(R,I,S,te,Y=null)=>{const{el:q,type:ne,transition:ae,children:J,shapeFlag:E}=R;if(E&6){Ee(R.component.subTree,I,S,te);return}if(E&128){R.suspense.move(I,S,te);return}if(E&64){ne.move(R,I,S,ue);return}if(ne===nn){i(q,I,S);for(let N=0;N<J.length;N++)Ee(J[N],I,S,te);i(R.anchor,I,S);return}if(ne===Ma){y(R,I,S);return}if(te!==2&&E&1&&ae)if(te===0)ae.beforeEnter(q),i(q,I,S),fn(()=>ae.enter(q),Y);else{const{leave:N,delayLeave:G,afterLeave:$}=ae,X=()=>i(q,I,S),me=()=>{N(q,()=>{X(),$&&$()})};G?G(q,X,me):me()}else i(q,I,S)},Ce=(R,I,S,te=!1,Y=!1)=>{const{type:q,props:ne,ref:ae,children:J,dynamicChildren:E,shapeFlag:x,patchFlag:N,dirs:G,cacheIndex:$}=R;if(N===-2&&(Y=!1),ae!=null&&Ha(ae,null,S,R,!0),$!=null&&(I.renderCache[$]=void 0),x&256){I.ctx.deactivate(R);return}const X=x&1&&G,me=!Ks(R);let ce;if(me&&(ce=ne&&ne.onVnodeBeforeUnmount)&&kn(ce,I,R),x&6)he(R.component,S,te);else{if(x&128){R.suspense.unmount(S,te);return}X&&Qi(R,null,I,"beforeUnmount"),x&64?R.type.remove(R,I,S,ue,te):E&&!E.hasOnce&&(q!==nn||N>0&&N&64)?ye(E,I,S,!1,!0):(q===nn&&N&384||!Y&&x&16)&&ye(J,I,S),te&&Xe(R)}(me&&(ce=ne&&ne.onVnodeUnmounted)||X)&&fn(()=>{ce&&kn(ce,I,R),X&&Qi(R,null,I,"unmounted")},S)},Xe=R=>{const{type:I,el:S,anchor:te,transition:Y}=R;if(I===nn){re(S,te);return}if(I===Ma){v(R);return}const q=()=>{r(S),Y&&!Y.persisted&&Y.afterLeave&&Y.afterLeave()};if(R.shapeFlag&1&&Y&&!Y.persisted){const{leave:ne,delayLeave:ae}=Y,J=()=>ne(S,q);ae?ae(R.el,q,J):J()}else q()},re=(R,I)=>{let S;for(;R!==I;)S=h(R),r(R),R=S;r(I)},he=(R,I,S)=>{const{bum:te,scope:Y,job:q,subTree:ne,um:ae,m:J,a:E}=R;Bh(J),Bh(E),te&&Pl(te),Y.stop(),q&&(q.flags|=8,Ce(ne,R,I,S)),ae&&fn(ae,I),fn(()=>{R.isUnmounted=!0},I),I&&I.pendingBranch&&!I.isUnmounted&&R.asyncDep&&!R.asyncResolved&&R.suspenseId===I.pendingId&&(I.deps--,I.deps===0&&I.resolve())},ye=(R,I,S,te=!1,Y=!1,q=0)=>{for(let ne=q;ne<R.length;ne++)Ce(R[ne],I,S,te,Y)},F=R=>{if(R.shapeFlag&6)return F(R.component.subTree);if(R.shapeFlag&128)return R.suspense.next();const I=h(R.anchor||R.el),S=I&&I[hx];return S?h(S):I};let oe=!1;const se=(R,I,S)=>{R==null?I._vnode&&Ce(I._vnode,null,null,!0):_(I._vnode||null,R,I,null,null,null,S),I._vnode=R,oe||(oe=!0,Rh(),hg(),oe=!1)},ue={p:_,um:Ce,m:Ee,r:Xe,mt:W,mc:D,pc:z,pbc:M,n:F,o:n};return{render:se,hydrate:void 0,createApp:Ox(se)}}function Bl({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function er({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function Xx(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function zg(n,e,t=!1){const i=n.children,r=e.children;if(He(i)&&He(r))for(let s=0;s<i.length;s++){const o=i[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=Ui(r[s]),a.el=o.el),!t&&a.patchFlag!==-2&&zg(o,a)),a.type===ul&&(a.el=o.el)}}function jx(n){const e=n.slice(),t=[0];let i,r,s,o,a;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(r=t[t.length-1],n[r]<c){e[i]=r,t.push(i);continue}for(s=0,o=t.length-1;s<o;)a=s+o>>1,n[t[a]]<c?s=a+1:o=a;c<n[t[s]]&&(s>0&&(e[i]=t[s-1]),t[s]=i)}}for(s=t.length,o=t[s-1];s-- >0;)t[s]=o,o=e[o];return t}function Vg(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Vg(e)}function Bh(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}const qx=Symbol.for("v-scx"),$x=()=>Sn(qx);function Gt(n,e,t){return Gg(n,e,t)}function Gg(n,e,t=dt){const{immediate:i,deep:r,flush:s,once:o}=t,a=It({},t),l=e&&i||!e&&s!=="post";let c;if(po){if(s==="sync"){const d=$x();c=d.__watcherHandles||(d.__watcherHandles=[])}else if(!l){const d=()=>{};return d.stop=jn,d.resume=jn,d.pause=jn,d}}const u=Nt;a.call=(d,g,_)=>On(d,u,g,_);let f=!1;s==="post"?a.scheduler=d=>{fn(d,u&&u.suspense)}:s!=="sync"&&(f=!0,a.scheduler=(d,g)=>{g?d():wf(d)}),a.augmentJob=d=>{e&&(d.flags|=4),f&&(d.flags|=2,u&&(d.id=u.uid,d.i=u))};const h=lx(n,e,a);return po&&(c?c.push(h):l&&h()),h}function Yx(n,e,t){const i=this.proxy,r=Mt(n)?n.includes(".")?Wg(i,n):()=>i[n]:n.bind(i,i);let s;We(e)?s=e:(s=e.handler,t=e);const o=Ro(this),a=Gg(r,s.bind(i),t);return o(),a}function Wg(n,e){const t=e.split(".");return()=>{let i=n;for(let r=0;r<t.length&&i;r++)i=i[t[r]];return i}}const Kx=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${bn(e)}Modifiers`]||n[`${Tr(e)}Modifiers`];function Zx(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||dt;let r=t;const s=e.startsWith("update:"),o=s&&Kx(i,e.slice(7));o&&(o.trim&&(r=t.map(u=>Mt(u)?u.trim():u)),o.number&&(r=t.map(Rv)));let a,l=i[a=Cl(e)]||i[a=Cl(bn(e))];!l&&s&&(l=i[a=Cl(Tr(e))]),l&&On(l,n,6,r);const c=i[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,On(c,n,6,r)}}function Xg(n,e,t=!1){const i=e.emitsCache,r=i.get(n);if(r!==void 0)return r;const s=n.emits;let o={},a=!1;if(!We(n)){const l=c=>{const u=Xg(c,e,!0);u&&(a=!0,It(o,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!s&&!a?(mt(n)&&i.set(n,null),null):(He(s)?s.forEach(l=>o[l]=null):It(o,s),mt(n)&&i.set(n,o),o)}function cl(n,e){return!n||!Qa(e)?!1:(e=e.slice(2).replace(/Once$/,""),at(n,e[0].toLowerCase()+e.slice(1))||at(n,Tr(e))||at(n,e))}function kh(n){const{type:e,vnode:t,proxy:i,withProxy:r,propsOptions:[s],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:f,data:h,setupState:d,ctx:g,inheritAttrs:_}=n,m=ka(n);let p,b;try{if(t.shapeFlag&4){const v=r||i,P=v;p=Gn(c.call(P,v,u,f,d,h,g)),b=a}else{const v=e;p=Gn(v.length>1?v(f,{attrs:a,slots:o,emit:l}):v(f,null)),b=e.props?a:Jx(a)}}catch(v){Js.length=0,sl(v,n,1),p=yt(rn)}let y=p;if(b&&_!==!1){const v=Object.keys(b),{shapeFlag:P}=y;v.length&&P&7&&(s&&v.some(gf)&&(b=Qx(b,s)),y=Xi(y,b,!1,!0))}return t.dirs&&(y=Xi(y,null,!1,!0),y.dirs=y.dirs?y.dirs.concat(t.dirs):t.dirs),t.transition&&fo(y,t.transition),p=y,ka(m),p}const Jx=n=>{let e;for(const t in n)(t==="class"||t==="style"||Qa(t))&&((e||(e={}))[t]=n[t]);return e},Qx=(n,e)=>{const t={};for(const i in n)(!gf(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function ey(n,e,t){const{props:i,children:r,component:s}=n,{props:o,children:a,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?Hh(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const h=u[f];if(o[h]!==i[h]&&!cl(c,h))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?Hh(i,o,c):!0:!!o;return!1}function Hh(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(e[s]!==n[s]&&!cl(t,s))return!0}return!1}function ty({vnode:n,parent:e},t){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===n&&(i.el=n.el),i===n)(n=e.vnode).el=t,e=e.parent;else break}}const jg=n=>n.__isSuspense;function ny(n,e){e&&e.pendingBranch?He(n)?e.effects.push(...n):e.effects.push(n):fx(n)}const nn=Symbol.for("v-fgt"),ul=Symbol.for("v-txt"),rn=Symbol.for("v-cmt"),Ma=Symbol.for("v-stc"),Js=[];let dn=null;function Bt(n=!1){Js.push(dn=n?null:[])}function iy(){Js.pop(),dn=Js[Js.length-1]||null}let ho=1;function zh(n,e=!1){ho+=n,n<0&&dn&&e&&(dn.hasOnce=!0)}function qg(n){return n.dynamicChildren=ho>0?dn||Kr:null,iy(),ho>0&&dn&&dn.push(n),n}function hn(n,e,t,i,r,s){return qg(Fe(n,e,t,i,r,s,!0))}function Pf(n,e,t,i,r){return qg(yt(n,e,t,i,r,!0))}function Va(n){return n?n.__v_isVNode===!0:!1}function mr(n,e){return n.type===e.type&&n.key===e.key}const $g=({key:n})=>n??null,Sa=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?Mt(n)||Vt(n)||We(n)?{i:sn,r:n,k:e,f:!!t}:n:null);function Fe(n,e=null,t=null,i=0,r=null,s=n===nn?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&$g(e),ref:e&&Sa(e),scopeId:pg,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:sn};return a?(If(l,t),s&128&&n.normalize(l)):t&&(l.shapeFlag|=Mt(t)?8:16),ho>0&&!o&&dn&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&dn.push(l),l}const yt=ry;function ry(n,e=null,t=null,i=0,r=null,s=!1){if((!n||n===wx)&&(n=rn),Va(n)){const a=Xi(n,e,!0);return t&&If(a,t),ho>0&&!s&&dn&&(a.shapeFlag&6?dn[dn.indexOf(n)]=a:dn.push(a)),a.patchFlag=-2,a}if(_y(n)&&(n=n.__vccOpts),e){e=sy(e);let{class:a,style:l}=e;a&&!Mt(a)&&(e.class=xf(a)),mt(l)&&(Af(l)&&!He(l)&&(l=It({},l)),e.style=Ao(l))}const o=Mt(n)?1:jg(n)?128:gg(n)?64:mt(n)?4:We(n)?2:0;return Fe(n,e,t,i,r,o,s,!0)}function sy(n){return n?Af(n)||Ng(n)?It({},n):n:null}function Xi(n,e,t=!1,i=!1){const{props:r,ref:s,patchFlag:o,children:a,transition:l}=n,c=e?cy(r||{},e):r,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&$g(c),ref:e&&e.ref?t&&s?He(s)?s.concat(Sa(e)):[s,Sa(e)]:Sa(e):s,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==nn?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&Xi(n.ssContent),ssFallback:n.ssFallback&&Xi(n.ssFallback),el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&fo(u,l.clone(u)),u}function oy(n=" ",e=0){return yt(ul,null,n,e)}function ay(n,e){const t=yt(Ma,null,n);return t.staticCount=e,t}function ly(n="",e=!1){return e?(Bt(),Pf(rn,null,n)):yt(rn,null,n)}function Gn(n){return n==null||typeof n=="boolean"?yt(rn):He(n)?yt(nn,null,n.slice()):Va(n)?Ui(n):yt(ul,null,String(n))}function Ui(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:Xi(n)}function If(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(He(e))t=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),If(n,r()),r._c&&(r._d=!0));return}else{t=32;const r=e._;!r&&!Ng(e)?e._ctx=sn:r===3&&sn&&(sn.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else We(e)?(e={default:e,_ctx:sn},t=32):(e=String(e),i&64?(t=16,e=[oy(e)]):t=8);n.children=e,n.shapeFlag|=t}function cy(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=xf([e.class,i.class]));else if(r==="style")e.style=Ao([e.style,i.style]);else if(Qa(r)){const s=e[r],o=i[r];o&&s!==o&&!(He(s)&&s.includes(o))&&(e[r]=s?[].concat(s,o):o)}else r!==""&&(e[r]=i[r])}return e}function kn(n,e,t,i=null){On(n,e,7,[t,i])}const uy=Ig();let fy=0;function hy(n,e,t){const i=n.type,r=(e?e.appContext:n.appContext)||uy,s={uid:fy++,vnode:n,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Gm(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Og(i,r),emitsOptions:Xg(i,r),emit:null,emitted:null,propsDefaults:dt,inheritAttrs:i.inheritAttrs,ctx:dt,data:dt,props:dt,attrs:dt,slots:dt,refs:dt,setupState:dt,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=Zx.bind(null,s),n.ce&&n.ce(s),s}let Nt=null;const fl=()=>Nt||sn;let Ga,Kc;{const n=il(),e=(t,i)=>{let r;return(r=n[t])||(r=n[t]=[]),r.push(i),s=>{r.length>1?r.forEach(o=>o(s)):r[0](s)}};Ga=e("__VUE_INSTANCE_SETTERS__",t=>Nt=t),Kc=e("__VUE_SSR_SETTERS__",t=>po=t)}const Ro=n=>{const e=Nt;return Ga(n),n.scope.on(),()=>{n.scope.off(),Ga(e)}},Vh=()=>{Nt&&Nt.scope.off(),Ga(null)};function Yg(n){return n.vnode.shapeFlag&4}let po=!1;function dy(n,e=!1,t=!1){e&&Kc(e);const{props:i,children:r}=n.vnode,s=Yg(n);Fx(n,i,s,e),zx(n,r,t);const o=s?py(n,e):void 0;return e&&Kc(!1),o}function py(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,Rx);const{setup:i}=t;if(i){qi();const r=n.setupContext=i.length>1?Zg(n):null,s=Ro(n),o=wo(i,n,0,[n.props,r]),a=Om(o);if($i(),s(),(a||n.sp)&&!Ks(n)&&Sg(n),a){if(o.then(Vh,Vh),e)return o.then(l=>{Gh(n,l)}).catch(l=>{sl(l,n,0)});n.asyncDep=o}else Gh(n,o)}else Kg(n)}function Gh(n,e,t){We(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:mt(e)&&(n.setupState=cg(e)),Kg(n)}function Kg(n,e,t){const i=n.type;n.render||(n.render=i.render||jn);{const r=Ro(n);qi();try{Px(n)}finally{$i(),r()}}}const my={get(n,e){return kt(n,"get",""),n[e]}};function Zg(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,my),slots:n.slots,emit:n.emit,expose:e}}function hl(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(cg(ag(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in Zs)return Zs[t](n)},has(e,t){return t in e||t in Zs}})):n.proxy}function gy(n,e=!0){return We(n)?n.displayName||n.name:n.name||e&&n.__name}function _y(n){return We(n)&&"__vccOpts"in n}const Et=(n,e)=>ox(n,e,po);function Sr(n,e,t){const i=arguments.length;return i===2?mt(e)&&!He(e)?Va(e)?yt(n,null,[e]):yt(n,e):yt(n,null,e):(i>3?t=Array.prototype.slice.call(arguments,2):i===3&&Va(t)&&(t=[t]),yt(n,e,t))}const vy="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Zc;const Wh=typeof window<"u"&&window.trustedTypes;if(Wh)try{Zc=Wh.createPolicy("vue",{createHTML:n=>n})}catch{}const Jg=Zc?n=>Zc.createHTML(n):n=>n,xy="http://www.w3.org/2000/svg",yy="http://www.w3.org/1998/Math/MathML",fi=typeof document<"u"?document:null,Xh=fi&&fi.createElement("template"),My={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const r=e==="svg"?fi.createElementNS(xy,n):e==="mathml"?fi.createElementNS(yy,n):t?fi.createElement(n,{is:t}):fi.createElement(n);return n==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:n=>fi.createTextNode(n),createComment:n=>fi.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>fi.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,r,s){const o=t?t.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),t),!(r===s||!(r=r.nextSibling)););else{Xh.innerHTML=Jg(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const a=Xh.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},Ei="transition",Rs="animation",mo=Symbol("_vtc"),Qg={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Sy=It({},_g,Qg),by=n=>(n.displayName="Transition",n.props=Sy,n),Ey=by((n,{slots:e})=>Sr(mx,Ty(n),e)),tr=(n,e=[])=>{He(n)?n.forEach(t=>t(...e)):n&&n(...e)},jh=n=>n?He(n)?n.some(e=>e.length>1):n.length>1:!1;function Ty(n){const e={};for(const U in n)U in Qg||(e[U]=n[U]);if(n.css===!1)return e;const{name:t="v",type:i,duration:r,enterFromClass:s=`${t}-enter-from`,enterActiveClass:o=`${t}-enter-active`,enterToClass:a=`${t}-enter-to`,appearFromClass:l=s,appearActiveClass:c=o,appearToClass:u=a,leaveFromClass:f=`${t}-leave-from`,leaveActiveClass:h=`${t}-leave-active`,leaveToClass:d=`${t}-leave-to`}=n,g=Ay(r),_=g&&g[0],m=g&&g[1],{onBeforeEnter:p,onEnter:b,onEnterCancelled:y,onLeave:v,onLeaveCancelled:P,onBeforeAppear:w=p,onAppear:C=b,onAppearCancelled:D=y}=e,T=(U,O,W,Q)=>{U._enterCancelled=Q,nr(U,O?u:a),nr(U,O?c:o),W&&W()},M=(U,O)=>{U._isLeaving=!1,nr(U,f),nr(U,d),nr(U,h),O&&O()},L=U=>(O,W)=>{const Q=U?C:b,j=()=>T(O,U,W);tr(Q,[O,j]),qh(()=>{nr(O,U?l:s),ti(O,U?u:a),jh(Q)||$h(O,i,_,j)})};return It(e,{onBeforeEnter(U){tr(p,[U]),ti(U,s),ti(U,o)},onBeforeAppear(U){tr(w,[U]),ti(U,l),ti(U,c)},onEnter:L(!1),onAppear:L(!0),onLeave(U,O){U._isLeaving=!0;const W=()=>M(U,O);ti(U,f),U._enterCancelled?(ti(U,h),Zh()):(Zh(),ti(U,h)),qh(()=>{U._isLeaving&&(nr(U,f),ti(U,d),jh(v)||$h(U,i,m,W))}),tr(v,[U,W])},onEnterCancelled(U){T(U,!1,void 0,!0),tr(y,[U])},onAppearCancelled(U){T(U,!0,void 0,!0),tr(D,[U])},onLeaveCancelled(U){M(U),tr(P,[U])}})}function Ay(n){if(n==null)return null;if(mt(n))return[kl(n.enter),kl(n.leave)];{const e=kl(n);return[e,e]}}function kl(n){return Cv(n)}function ti(n,e){e.split(/\s+/).forEach(t=>t&&n.classList.add(t)),(n[mo]||(n[mo]=new Set)).add(e)}function nr(n,e){e.split(/\s+/).forEach(i=>i&&n.classList.remove(i));const t=n[mo];t&&(t.delete(e),t.size||(n[mo]=void 0))}function qh(n){requestAnimationFrame(()=>{requestAnimationFrame(n)})}let wy=0;function $h(n,e,t,i){const r=n._endId=++wy,s=()=>{r===n._endId&&i()};if(t!=null)return setTimeout(s,t);const{type:o,timeout:a,propCount:l}=Ry(n,e);if(!o)return i();const c=o+"end";let u=0;const f=()=>{n.removeEventListener(c,h),s()},h=d=>{d.target===n&&++u>=l&&f()};setTimeout(()=>{u<l&&f()},a+1),n.addEventListener(c,h)}function Ry(n,e){const t=window.getComputedStyle(n),i=g=>(t[g]||"").split(", "),r=i(`${Ei}Delay`),s=i(`${Ei}Duration`),o=Yh(r,s),a=i(`${Rs}Delay`),l=i(`${Rs}Duration`),c=Yh(a,l);let u=null,f=0,h=0;e===Ei?o>0&&(u=Ei,f=o,h=s.length):e===Rs?c>0&&(u=Rs,f=c,h=l.length):(f=Math.max(o,c),u=f>0?o>c?Ei:Rs:null,h=u?u===Ei?s.length:l.length:0);const d=u===Ei&&/\b(transform|all)(,|$)/.test(i(`${Ei}Property`).toString());return{type:u,timeout:f,propCount:h,hasTransform:d}}function Yh(n,e){for(;n.length<e.length;)n=n.concat(n);return Math.max(...e.map((t,i)=>Kh(t)+Kh(n[i])))}function Kh(n){return n==="auto"?0:Number(n.slice(0,-1).replace(",","."))*1e3}function Zh(){return document.body.offsetHeight}function Cy(n,e,t){const i=n[mo];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const Jh=Symbol("_vod"),Py=Symbol("_vsh"),Iy=Symbol(""),Ly=/(^|;)\s*display\s*:/;function Dy(n,e,t){const i=n.style,r=Mt(t);let s=!1;if(t&&!r){if(e)if(Mt(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();t[a]==null&&ba(i,a,"")}else for(const o in e)t[o]==null&&ba(i,o,"");for(const o in t)o==="display"&&(s=!0),ba(i,o,t[o])}else if(r){if(e!==t){const o=i[Iy];o&&(t+=";"+o),i.cssText=t,s=Ly.test(t)}}else e&&n.removeAttribute("style");Jh in n&&(n[Jh]=s?i.display:"",n[Py]&&(i.display="none"))}const Qh=/\s*!important$/;function ba(n,e,t){if(He(t))t.forEach(i=>ba(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=Ny(n,e);Qh.test(t)?n.setProperty(Tr(i),t.replace(Qh,""),"important"):n[i]=t}}const ed=["Webkit","Moz","ms"],Hl={};function Ny(n,e){const t=Hl[e];if(t)return t;let i=bn(e);if(i!=="filter"&&i in n)return Hl[e]=i;i=nl(i);for(let r=0;r<ed.length;r++){const s=ed[r]+i;if(s in n)return Hl[e]=s}return e}const td="http://www.w3.org/1999/xlink";function nd(n,e,t,i,r,s=Uv(e)){i&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(td,e.slice(6,e.length)):n.setAttributeNS(td,e,t):t==null||s&&!Hm(t)?n.removeAttribute(e):n.setAttribute(e,s?"":ji(t)?String(t):t)}function id(n,e,t,i,r){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?Jg(t):t);return}const s=n.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const a=s==="OPTION"?n.getAttribute("value")||"":n.value,l=t==null?n.type==="checkbox"?"on":"":String(t);(a!==l||!("_value"in n))&&(n.value=l),t==null&&n.removeAttribute(e),n._value=t;return}let o=!1;if(t===""||t==null){const a=typeof n[e];a==="boolean"?t=Hm(t):t==null&&a==="string"?(t="",o=!0):a==="number"&&(t=0,o=!0)}try{n[e]=t}catch{}o&&n.removeAttribute(r||e)}function Uy(n,e,t,i){n.addEventListener(e,t,i)}function Oy(n,e,t,i){n.removeEventListener(e,t,i)}const rd=Symbol("_vei");function Fy(n,e,t,i,r=null){const s=n[rd]||(n[rd]={}),o=s[e];if(i&&o)o.value=i;else{const[a,l]=By(e);if(i){const c=s[e]=zy(i,r);Uy(n,a,c,l)}else o&&(Oy(n,a,o,l),s[e]=void 0)}}const sd=/(?:Once|Passive|Capture)$/;function By(n){let e;if(sd.test(n)){e={};let i;for(;i=n.match(sd);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):Tr(n.slice(2)),e]}let zl=0;const ky=Promise.resolve(),Hy=()=>zl||(ky.then(()=>zl=0),zl=Date.now());function zy(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;On(Vy(i,t.value),e,5,[i])};return t.value=n,t.attached=Hy(),t}function Vy(n,e){if(He(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const od=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,Gy=(n,e,t,i,r,s)=>{const o=r==="svg";e==="class"?Cy(n,i,o):e==="style"?Dy(n,t,i):Qa(e)?gf(e)||Fy(n,e,t,i,s):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Wy(n,e,i,o))?(id(n,e,i),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&nd(n,e,i,o,s,e!=="value")):n._isVueCE&&(/[A-Z]/.test(e)||!Mt(i))?id(n,bn(e),i,s,e):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),nd(n,e,i,o))};function Wy(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&od(e)&&We(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=n.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return od(e)&&Mt(t)?!1:e in n}const Xy=It({patchProp:Gy},My);let ad;function jy(){return ad||(ad=Gx(Xy))}const qy=(...n)=>{const e=jy().createApp(...n),{mount:t}=e;return e.mount=i=>{const r=Yy(i);if(!r)return;const s=e._component;!We(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const o=t(r,!1,$y(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function $y(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function Yy(n){return Mt(n)?document.querySelector(n):n}/*!
 * pinia v2.3.0
 * (c) 2024 Eduardo San Martin Morote
 * @license MIT
 */const Ky=Symbol();var ld;(function(n){n.direct="direct",n.patchObject="patch object",n.patchFunction="patch function"})(ld||(ld={}));function Zy(){const n=Ov(!0),e=n.run(()=>Ct({}));let t=[],i=[];const r=ag({install(s){r._a=s,s.provide(Ky,r),s.config.globalProperties.$pinia=r,i.forEach(o=>t.push(o)),i=[]},use(s){return this._a?t.push(s):i.push(s),this},_p:t,_a:null,_e:n,_s:new Map,state:e});return r}function Vl(n){if(n===null||typeof n!="object")return!1;const e=Object.getPrototypeOf(n);return e!==null&&e!==Object.prototype&&Object.getPrototypeOf(e)!==null||Symbol.iterator in n?!1:Symbol.toStringTag in n?Object.prototype.toString.call(n)==="[object Module]":!0}function Jc(n,e,t=".",i){if(!Vl(e))return Jc(n,{},t,i);const r={...e};for(const s of Object.keys(n)){if(s==="__proto__"||s==="constructor")continue;const o=n[s];o!=null&&(i&&i(r,s,o,t)||(Array.isArray(o)&&Array.isArray(r[s])?r[s]=[...o,...r[s]]:Vl(o)&&Vl(r[s])?r[s]=Jc(o,r[s],(t?`${t}.`:"")+s.toString(),i):r[s]=o))}return r}function Jy(n){return(...e)=>e.reduce((t,i)=>Jc(t,i,"",n),{})}const e_=Jy();function t_(n){return Wm()?(Fv(n),!0):!1}function Lf(n){return typeof n=="function"?n():Tt(n)}const Qy=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const eM=n=>n!=null,tM=Object.prototype.toString,Wa=n=>tM.call(n)==="[object Object]",Ea=()=>{};function nM(n){return fl()}function iM(n,e){nM()&&Rf(n,e)}function Qs(n){var e;const t=Lf(n);return(e=t==null?void 0:t.$el)!=null?e:t}const n_=Qy?window:void 0;function Hn(...n){let e,t,i,r;if(typeof n[0]=="string"||Array.isArray(n[0])?([t,i,r]=n,e=n_):[e,t,i,r]=n,!e)return Ea;Array.isArray(t)||(t=[t]),Array.isArray(i)||(i=[i]);const s=[],o=()=>{s.forEach(u=>u()),s.length=0},a=(u,f,h,d)=>(u.addEventListener(f,h,d),()=>u.removeEventListener(f,h,d)),l=Gt(()=>[Qs(e),Lf(r)],([u,f])=>{if(o(),!u)return;const h=Wa(f)?{...f}:f;s.push(...t.flatMap(d=>i.map(g=>a(u,d,g,h))))},{immediate:!0,flush:"post"}),c=()=>{l(),o()};return t_(c),c}function rM(){const n=Ct(!1),e=fl();return e&&Ar(()=>{n.value=!0},e),n}function sM(n){const e=rM();return Et(()=>(e.value,!!n()))}function oM(n,e,t={}){const{root:i,rootMargin:r="0px",threshold:s=.1,window:o=n_,immediate:a=!0}=t,l=sM(()=>o&&"IntersectionObserver"in o),c=Et(()=>{const g=Lf(n);return(Array.isArray(g)?g:[g]).map(Qs).filter(eM)});let u=Ea;const f=Ct(a),h=l.value?Gt(()=>[c.value,Qs(i),f.value],([g,_])=>{if(u(),!f.value||!g.length)return;const m=new IntersectionObserver(e,{root:Qs(_),rootMargin:r,threshold:s});g.forEach(p=>p&&m.observe(p)),u=()=>{m.disconnect(),u=Ea}},{immediate:a,flush:"post"}):Ea,d=()=>{u(),h(),f.value=!1};return t_(d),{isSupported:l,isActive:f,pause(){u(),f.value=!1},resume(){f.value=!0},stop:d}}const i_=1/60*1e3,aM=typeof performance<"u"?()=>performance.now():()=>Date.now(),r_=typeof window<"u"?n=>window.requestAnimationFrame(n):n=>setTimeout(()=>n(aM()),i_);function lM(n){let e=[],t=[],i=0,r=!1,s=!1;const o=new WeakSet,a={schedule:(l,c=!1,u=!1)=>{const f=u&&r,h=f?e:t;return c&&o.add(l),h.indexOf(l)===-1&&(h.push(l),f&&r&&(i=e.length)),l},cancel:l=>{const c=t.indexOf(l);c!==-1&&t.splice(c,1),o.delete(l)},process:l=>{if(r){s=!0;return}if(r=!0,[e,t]=[t,e],t.length=0,i=e.length,i)for(let c=0;c<i;c++){const u=e[c];u(l),o.has(u)&&(a.schedule(u),n())}r=!1,s&&(s=!1,a.process(l))}};return a}const cM=40;let Qc=!0,go=!1,eu=!1;const ts={delta:0,timestamp:0},Co=["read","update","preRender","render","postRender"],dl=Co.reduce((n,e)=>(n[e]=lM(()=>go=!0),n),{}),tu=Co.reduce((n,e)=>{const t=dl[e];return n[e]=(i,r=!1,s=!1)=>(go||hM(),t.schedule(i,r,s)),n},{}),uM=Co.reduce((n,e)=>(n[e]=dl[e].cancel,n),{});Co.reduce((n,e)=>(n[e]=()=>dl[e].process(ts),n),{});const fM=n=>dl[n].process(ts),s_=n=>{go=!1,ts.delta=Qc?i_:Math.max(Math.min(n-ts.timestamp,cM),1),ts.timestamp=n,eu=!0,Co.forEach(fM),eu=!1,go&&(Qc=!1,r_(s_))},hM=()=>{go=!0,Qc=!0,eu||r_(s_)},o_=()=>ts;function a_(n,e){var t={};for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&e.indexOf(i)<0&&(t[i]=n[i]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,i=Object.getOwnPropertySymbols(n);r<i.length;r++)e.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(n,i[r])&&(t[i[r]]=n[i[r]]);return t}var cd=function(){};const nu=(n,e,t)=>Math.min(Math.max(t,n),e),Gl=.001,dM=.01,pM=10,mM=.05,gM=1;function _M({duration:n=800,bounce:e=.25,velocity:t=0,mass:i=1}){let r,s,o=1-e;o=nu(mM,gM,o),n=nu(dM,pM,n/1e3),o<1?(r=c=>{const u=c*o,f=u*n,h=u-t,d=iu(c,o),g=Math.exp(-f);return Gl-h/d*g},s=c=>{const f=c*o*n,h=f*t+t,d=Math.pow(o,2)*Math.pow(c,2)*n,g=Math.exp(-f),_=iu(Math.pow(c,2),o);return(-r(c)+Gl>0?-1:1)*((h-d)*g)/_}):(r=c=>{const u=Math.exp(-c*n),f=(c-t)*n+1;return-Gl+u*f},s=c=>{const u=Math.exp(-c*n),f=(t-c)*(n*n);return u*f});const a=5/n,l=xM(r,s,a);if(n=n*1e3,isNaN(l))return{stiffness:100,damping:10,duration:n};{const c=Math.pow(l,2)*i;return{stiffness:c,damping:o*2*Math.sqrt(i*c),duration:n}}}const vM=12;function xM(n,e,t){let i=t;for(let r=1;r<vM;r++)i=i-n(i)/e(i);return i}function iu(n,e){return n*Math.sqrt(1-e*e)}const yM=["duration","bounce"],MM=["stiffness","damping","mass"];function ud(n,e){return e.some(t=>n[t]!==void 0)}function SM(n){let e=Object.assign({velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1},n);if(!ud(n,MM)&&ud(n,yM)){const t=_M(n);e=Object.assign(Object.assign(Object.assign({},e),t),{velocity:0,mass:1}),e.isResolvedFromDuration=!0}return e}function Df(n){var{from:e=0,to:t=1,restSpeed:i=2,restDelta:r}=n,s=a_(n,["from","to","restSpeed","restDelta"]);const o={done:!1,value:e};let{stiffness:a,damping:l,mass:c,velocity:u,duration:f,isResolvedFromDuration:h}=SM(s),d=fd,g=fd;function _(){const m=u?-(u/1e3):0,p=t-e,b=l/(2*Math.sqrt(a*c)),y=Math.sqrt(a/c)/1e3;if(r===void 0&&(r=Math.min(Math.abs(t-e)/100,.4)),b<1){const v=iu(y,b);d=P=>{const w=Math.exp(-b*y*P);return t-w*((m+b*y*p)/v*Math.sin(v*P)+p*Math.cos(v*P))},g=P=>{const w=Math.exp(-b*y*P);return b*y*w*(Math.sin(v*P)*(m+b*y*p)/v+p*Math.cos(v*P))-w*(Math.cos(v*P)*(m+b*y*p)-v*p*Math.sin(v*P))}}else if(b===1)d=v=>t-Math.exp(-y*v)*(p+(m+y*p)*v);else{const v=y*Math.sqrt(b*b-1);d=P=>{const w=Math.exp(-b*y*P),C=Math.min(v*P,300);return t-w*((m+b*y*p)*Math.sinh(C)+v*p*Math.cosh(C))/v}}}return _(),{next:m=>{const p=d(m);if(h)o.done=m>=f;else{const b=g(m)*1e3,y=Math.abs(b)<=i,v=Math.abs(t-p)<=r;o.done=y&&v}return o.value=o.done?t:p,o},flipTarget:()=>{u=-u,[e,t]=[t,e],_()}}}Df.needsInterpolation=(n,e)=>typeof n=="string"||typeof e=="string";const fd=n=>0,l_=(n,e,t)=>{const i=e-n;return i===0?1:(t-n)/i},Nf=(n,e,t)=>-t*n+t*e+n,c_=(n,e)=>t=>Math.max(Math.min(t,e),n),eo=n=>n%1?Number(n.toFixed(5)):n,_o=/(-)?([\d]*\.?[\d])+/g,ru=/(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,bM=/^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;function Po(n){return typeof n=="string"}const Io={test:n=>typeof n=="number",parse:parseFloat,transform:n=>n},to=Object.assign(Object.assign({},Io),{transform:c_(0,1)}),Go=Object.assign(Object.assign({},Io),{default:1}),Uf=n=>({test:e=>Po(e)&&e.endsWith(n)&&e.split(" ").length===1,parse:parseFloat,transform:e=>`${e}${n}`}),ir=Uf("deg"),no=Uf("%"),$e=Uf("px"),hd=Object.assign(Object.assign({},no),{parse:n=>no.parse(n)/100,transform:n=>no.transform(n*100)}),Of=(n,e)=>t=>!!(Po(t)&&bM.test(t)&&t.startsWith(n)||e&&Object.prototype.hasOwnProperty.call(t,e)),u_=(n,e,t)=>i=>{if(!Po(i))return i;const[r,s,o,a]=i.match(_o);return{[n]:parseFloat(r),[e]:parseFloat(s),[t]:parseFloat(o),alpha:a!==void 0?parseFloat(a):1}},xr={test:Of("hsl","hue"),parse:u_("hue","saturation","lightness"),transform:({hue:n,saturation:e,lightness:t,alpha:i=1})=>"hsla("+Math.round(n)+", "+no.transform(eo(e))+", "+no.transform(eo(t))+", "+eo(to.transform(i))+")"},EM=c_(0,255),Wl=Object.assign(Object.assign({},Io),{transform:n=>Math.round(EM(n))}),Bi={test:Of("rgb","red"),parse:u_("red","green","blue"),transform:({red:n,green:e,blue:t,alpha:i=1})=>"rgba("+Wl.transform(n)+", "+Wl.transform(e)+", "+Wl.transform(t)+", "+eo(to.transform(i))+")"};function TM(n){let e="",t="",i="",r="";return n.length>5?(e=n.substr(1,2),t=n.substr(3,2),i=n.substr(5,2),r=n.substr(7,2)):(e=n.substr(1,1),t=n.substr(2,1),i=n.substr(3,1),r=n.substr(4,1),e+=e,t+=t,i+=i,r+=r),{red:parseInt(e,16),green:parseInt(t,16),blue:parseInt(i,16),alpha:r?parseInt(r,16)/255:1}}const su={test:Of("#"),parse:TM,transform:Bi.transform},tn={test:n=>Bi.test(n)||su.test(n)||xr.test(n),parse:n=>Bi.test(n)?Bi.parse(n):xr.test(n)?xr.parse(n):su.parse(n),transform:n=>Po(n)?n:n.hasOwnProperty("red")?Bi.transform(n):xr.transform(n)},f_="${c}",h_="${n}";function AM(n){var e,t,i,r;return isNaN(n)&&Po(n)&&((t=(e=n.match(_o))===null||e===void 0?void 0:e.length)!==null&&t!==void 0?t:0)+((r=(i=n.match(ru))===null||i===void 0?void 0:i.length)!==null&&r!==void 0?r:0)>0}function d_(n){typeof n=="number"&&(n=`${n}`);const e=[];let t=0;const i=n.match(ru);i&&(t=i.length,n=n.replace(ru,f_),e.push(...i.map(tn.parse)));const r=n.match(_o);return r&&(n=n.replace(_o,h_),e.push(...r.map(Io.parse))),{values:e,numColors:t,tokenised:n}}function p_(n){return d_(n).values}function m_(n){const{values:e,numColors:t,tokenised:i}=d_(n),r=e.length;return s=>{let o=i;for(let a=0;a<r;a++)o=o.replace(a<t?f_:h_,a<t?tn.transform(s[a]):eo(s[a]));return o}}const wM=n=>typeof n=="number"?0:n;function RM(n){const e=p_(n);return m_(n)(e.map(wM))}const Lo={test:AM,parse:p_,createTransformer:m_,getAnimatableNone:RM},CM=new Set(["brightness","contrast","saturate","opacity"]);function PM(n){let[e,t]=n.slice(0,-1).split("(");if(e==="drop-shadow")return n;const[i]=t.match(_o)||[];if(!i)return n;const r=t.replace(i,"");let s=CM.has(e)?1:0;return i!==t&&(s*=100),e+"("+s+r+")"}const IM=/([a-z-]*)\(.*?\)/g,ou=Object.assign(Object.assign({},Lo),{getAnimatableNone:n=>{const e=n.match(IM);return e?e.map(PM).join(" "):n}});function Xl(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*(2/3-t)*6:n}function dd({hue:n,saturation:e,lightness:t,alpha:i}){n/=360,e/=100,t/=100;let r=0,s=0,o=0;if(!e)r=s=o=t;else{const a=t<.5?t*(1+e):t+e-t*e,l=2*t-a;r=Xl(l,a,n+1/3),s=Xl(l,a,n),o=Xl(l,a,n-1/3)}return{red:Math.round(r*255),green:Math.round(s*255),blue:Math.round(o*255),alpha:i}}const LM=(n,e,t)=>{const i=n*n,r=e*e;return Math.sqrt(Math.max(0,t*(r-i)+i))},DM=[su,Bi,xr],pd=n=>DM.find(e=>e.test(n)),g_=(n,e)=>{let t=pd(n),i=pd(e),r=t.parse(n),s=i.parse(e);t===xr&&(r=dd(r),t=Bi),i===xr&&(s=dd(s),i=Bi);const o=Object.assign({},r);return a=>{for(const l in o)l!=="alpha"&&(o[l]=LM(r[l],s[l],a));return o.alpha=Nf(r.alpha,s.alpha,a),t.transform(o)}},NM=n=>typeof n=="number",UM=(n,e)=>t=>e(n(t)),__=(...n)=>n.reduce(UM);function v_(n,e){return NM(n)?t=>Nf(n,e,t):tn.test(n)?g_(n,e):y_(n,e)}const x_=(n,e)=>{const t=[...n],i=t.length,r=n.map((s,o)=>v_(s,e[o]));return s=>{for(let o=0;o<i;o++)t[o]=r[o](s);return t}},OM=(n,e)=>{const t=Object.assign(Object.assign({},n),e),i={};for(const r in t)n[r]!==void 0&&e[r]!==void 0&&(i[r]=v_(n[r],e[r]));return r=>{for(const s in i)t[s]=i[s](r);return t}};function md(n){const e=Lo.parse(n),t=e.length;let i=0,r=0,s=0;for(let o=0;o<t;o++)i||typeof e[o]=="number"?i++:e[o].hue!==void 0?s++:r++;return{parsed:e,numNumbers:i,numRGB:r,numHSL:s}}const y_=(n,e)=>{const t=Lo.createTransformer(e),i=md(n),r=md(e);return i.numHSL===r.numHSL&&i.numRGB===r.numRGB&&i.numNumbers>=r.numNumbers?__(x_(i.parsed,r.parsed),t):o=>`${o>0?e:n}`},FM=(n,e)=>t=>Nf(n,e,t);function BM(n){if(typeof n=="number")return FM;if(typeof n=="string")return tn.test(n)?g_:y_;if(Array.isArray(n))return x_;if(typeof n=="object")return OM}function kM(n,e,t){const i=[],r=t||BM(n[0]),s=n.length-1;for(let o=0;o<s;o++){let a=r(n[o],n[o+1]);if(e){const l=Array.isArray(e)?e[o]:e;a=__(l,a)}i.push(a)}return i}function HM([n,e],[t]){return i=>t(l_(n,e,i))}function zM(n,e){const t=n.length,i=t-1;return r=>{let s=0,o=!1;if(r<=n[0]?o=!0:r>=n[i]&&(s=i-1,o=!0),!o){let l=1;for(;l<t&&!(n[l]>r||l===i);l++);s=l-1}const a=l_(n[s],n[s+1],r);return e[s](a)}}function M_(n,e,{clamp:t=!0,ease:i,mixer:r}={}){const s=n.length;cd(s===e.length),cd(!i||!Array.isArray(i)||i.length===s-1),n[0]>n[s-1]&&(n=[].concat(n),e=[].concat(e),n.reverse(),e.reverse());const o=kM(e,i,r),a=s===2?HM(n,o):zM(n,o);return t?l=>a(nu(n[0],n[s-1],l)):a}const pl=n=>e=>1-n(1-e),Ff=n=>e=>e<=.5?n(2*e)/2:(2-n(2*(1-e)))/2,VM=n=>e=>Math.pow(e,n),S_=n=>e=>e*e*((n+1)*e-n),GM=n=>{const e=S_(n);return t=>(t*=2)<1?.5*e(t):.5*(2-Math.pow(2,-10*(t-1)))},b_=1.525,WM=4/11,XM=8/11,jM=9/10,E_=n=>n,Bf=VM(2),qM=pl(Bf),T_=Ff(Bf),A_=n=>1-Math.sin(Math.acos(n)),w_=pl(A_),$M=Ff(w_),kf=S_(b_),YM=pl(kf),KM=Ff(kf),ZM=GM(b_),JM=4356/361,QM=35442/1805,eS=16061/1805,Xa=n=>{if(n===1||n===0)return n;const e=n*n;return n<WM?7.5625*e:n<XM?9.075*e-9.9*n+3.4:n<jM?JM*e-QM*n+eS:10.8*n*n-20.52*n+10.72},tS=pl(Xa),nS=n=>n<.5?.5*(1-Xa(1-n*2)):.5*Xa(n*2-1)+.5;function iS(n,e){return n.map(()=>e||T_).splice(0,n.length-1)}function rS(n){const e=n.length;return n.map((t,i)=>i!==0?i/(e-1):0)}function sS(n,e){return n.map(t=>t*e)}function Ta({from:n=0,to:e=1,ease:t,offset:i,duration:r=300}){const s={done:!1,value:n},o=Array.isArray(e)?e:[n,e],a=sS(i&&i.length===o.length?i:rS(o),r);function l(){return M_(a,o,{ease:Array.isArray(t)?t:iS(o,t)})}let c=l();return{next:u=>(s.value=c(u),s.done=u>=r,s),flipTarget:()=>{o.reverse(),c=l()}}}function oS({velocity:n=0,from:e=0,power:t=.8,timeConstant:i=350,restDelta:r=.5,modifyTarget:s}){const o={done:!1,value:e};let a=t*n;const l=e+a,c=s===void 0?l:s(l);return c!==l&&(a=c-e),{next:u=>{const f=-a*Math.exp(-u/i);return o.done=!(f>r||f<-r),o.value=o.done?c:c+f,o},flipTarget:()=>{}}}const gd={keyframes:Ta,spring:Df,decay:oS};function aS(n){if(Array.isArray(n.to))return Ta;if(gd[n.type])return gd[n.type];const e=new Set(Object.keys(n));return e.has("ease")||e.has("duration")&&!e.has("dampingRatio")?Ta:e.has("dampingRatio")||e.has("stiffness")||e.has("mass")||e.has("damping")||e.has("restSpeed")||e.has("restDelta")?Df:Ta}function R_(n,e,t=0){return n-e-t}function lS(n,e,t=0,i=!0){return i?R_(e+-n,e,t):e-(n-e)+t}function cS(n,e,t,i){return i?n>=e+t:n<=-t}const uS=n=>{const e=({delta:t})=>n(t);return{start:()=>tu.update(e,!0),stop:()=>uM.update(e)}};function C_(n){var e,t,{from:i,autoplay:r=!0,driver:s=uS,elapsed:o=0,repeat:a=0,repeatType:l="loop",repeatDelay:c=0,onPlay:u,onStop:f,onComplete:h,onRepeat:d,onUpdate:g}=n,_=a_(n,["from","autoplay","driver","elapsed","repeat","repeatType","repeatDelay","onPlay","onStop","onComplete","onRepeat","onUpdate"]);let{to:m}=_,p,b=0,y=_.duration,v,P=!1,w=!0,C;const D=aS(_);!((t=(e=D).needsInterpolation)===null||t===void 0)&&t.call(e,i,m)&&(C=M_([0,100],[i,m],{clamp:!1}),i=0,m=100);const T=D(Object.assign(Object.assign({},_),{from:i,to:m}));function M(){b++,l==="reverse"?(w=b%2===0,o=lS(o,y,c,w)):(o=R_(o,y,c),l==="mirror"&&T.flipTarget()),P=!1,d&&d()}function L(){p.stop(),h&&h()}function U(W){if(w||(W=-W),o+=W,!P){const Q=T.next(Math.max(0,o));v=Q.value,C&&(v=C(v)),P=w?Q.done:o<=0}g==null||g(v),P&&(b===0&&(y??(y=o)),b<a?cS(o,y,c,w)&&M():L())}function O(){u==null||u(),p=s(U),p.start()}return r&&O(),{stop:()=>{f==null||f(),p.stop()}}}function P_(n,e){return e?n*(1e3/e):0}function fS({from:n=0,velocity:e=0,min:t,max:i,power:r=.8,timeConstant:s=750,bounceStiffness:o=500,bounceDamping:a=10,restDelta:l=1,modifyTarget:c,driver:u,onUpdate:f,onComplete:h,onStop:d}){let g;function _(y){return t!==void 0&&y<t||i!==void 0&&y>i}function m(y){return t===void 0?i:i===void 0||Math.abs(t-y)<Math.abs(i-y)?t:i}function p(y){g==null||g.stop(),g=C_(Object.assign(Object.assign({},y),{driver:u,onUpdate:v=>{var P;f==null||f(v),(P=y.onUpdate)===null||P===void 0||P.call(y,v)},onComplete:h,onStop:d}))}function b(y){p(Object.assign({type:"spring",stiffness:o,damping:a,restDelta:l},y))}if(_(n))b({from:n,velocity:e,to:m(n)});else{let y=r*e+n;typeof c<"u"&&(y=c(y));const v=m(y),P=v===t?-1:1;let w,C;const D=T=>{w=C,C=T,e=P_(T-w,o_().delta),(P===1&&T>v||P===-1&&T<v)&&b({from:T,to:v,velocity:e})};p({type:"decay",from:n,velocity:e,timeConstant:s,power:r,restDelta:l,modifyTarget:c,onUpdate:_(y)?D:void 0})}return{stop:()=>g==null?void 0:g.stop()}}const I_=(n,e)=>1-3*e+3*n,L_=(n,e)=>3*e-6*n,D_=n=>3*n,ja=(n,e,t)=>((I_(e,t)*n+L_(e,t))*n+D_(e))*n,N_=(n,e,t)=>3*I_(e,t)*n*n+2*L_(e,t)*n+D_(e),hS=1e-7,dS=10;function pS(n,e,t,i,r){let s,o,a=0;do o=e+(t-e)/2,s=ja(o,i,r)-n,s>0?t=o:e=o;while(Math.abs(s)>hS&&++a<dS);return o}const mS=8,gS=.001;function _S(n,e,t,i){for(let r=0;r<mS;++r){const s=N_(e,t,i);if(s===0)return e;const o=ja(e,t,i)-n;e-=o/s}return e}const Aa=11,Wo=1/(Aa-1);function vS(n,e,t,i){if(n===e&&t===i)return E_;const r=new Float32Array(Aa);for(let o=0;o<Aa;++o)r[o]=ja(o*Wo,n,t);function s(o){let a=0,l=1;const c=Aa-1;for(;l!==c&&r[l]<=o;++l)a+=Wo;--l;const u=(o-r[l])/(r[l+1]-r[l]),f=a+u*Wo,h=N_(f,n,t);return h>=gS?_S(o,f,n,t):h===0?f:pS(o,a,a+Wo,n,t)}return o=>o===0||o===1?o:ja(s(o),e,i)}const jl={};var xS=Object.defineProperty,yS=(n,e,t)=>e in n?xS(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,MS=(n,e,t)=>(yS(n,e+"",t),t);class SS{constructor(){MS(this,"subscriptions",new Set)}add(e){return this.subscriptions.add(e),()=>this.subscriptions.delete(e)}notify(e,t,i){if(this.subscriptions.size)for(const r of this.subscriptions)r(e,t,i)}clear(){this.subscriptions.clear()}}var bS=Object.defineProperty,ES=(n,e,t)=>e in n?bS(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,zn=(n,e,t)=>(ES(n,typeof e!="symbol"?e+"":e,t),t);function _d(n){return!Number.isNaN(Number.parseFloat(n))}class TS{constructor(e){zn(this,"current"),zn(this,"prev"),zn(this,"timeDelta",0),zn(this,"lastUpdated",0),zn(this,"updateSubscribers",new SS),zn(this,"stopAnimation"),zn(this,"canTrackVelocity",!1),zn(this,"updateAndNotify",t=>{this.prev=this.current,this.current=t;const{delta:i,timestamp:r}=o_();this.lastUpdated!==r&&(this.timeDelta=i,this.lastUpdated=r),tu.postRender(this.scheduleVelocityCheck),this.updateSubscribers.notify(this.current)}),zn(this,"scheduleVelocityCheck",()=>tu.postRender(this.velocityCheck)),zn(this,"velocityCheck",({timestamp:t})=>{this.canTrackVelocity||(this.canTrackVelocity=_d(this.current)),t!==this.lastUpdated&&(this.prev=this.current)}),this.prev=this.current=e,this.canTrackVelocity=_d(this.current)}onChange(e){return this.updateSubscribers.add(e)}clearListeners(){this.updateSubscribers.clear()}set(e){this.updateAndNotify(e)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){return this.canTrackVelocity?P_(Number.parseFloat(this.current)-Number.parseFloat(this.prev),this.timeDelta):0}start(e){return this.stop(),new Promise(t=>{const{stop:i}=e(t);this.stopAnimation=i}).then(()=>this.clearAnimation())}stop(){this.stopAnimation&&this.stopAnimation(),this.clearAnimation()}isAnimating(){return!!this.stopAnimation}clearAnimation(){this.stopAnimation=null}destroy(){this.updateSubscribers.clear(),this.stop()}}function AS(n){return new TS(n)}const{isArray:wS}=Array;function RS(){const n=Ct({}),e=i=>{const r=s=>{n.value[s]&&(n.value[s].stop(),n.value[s].destroy(),delete n.value[s])};i?wS(i)?i.forEach(r):r(i):Object.keys(n.value).forEach(r)},t=(i,r,s)=>{if(n.value[i])return n.value[i];const o=AS(r);return o.onChange(a=>s[i]=a),n.value[i]=o,o};return iM(e),{motionValues:n,get:t,stop:e}}function CS(n){return Array.isArray(n)}function rr(){return{type:"spring",stiffness:500,damping:25,restDelta:.5,restSpeed:10}}function ql(n){return{type:"spring",stiffness:550,damping:n===0?2*Math.sqrt(550):30,restDelta:.01,restSpeed:10}}function PS(n){return{type:"spring",stiffness:550,damping:n===0?100:30,restDelta:.01,restSpeed:10}}function $l(){return{type:"keyframes",ease:"linear",duration:300}}function IS(n){return{type:"keyframes",duration:800,values:n}}const vd={default:PS,x:rr,y:rr,z:rr,rotate:rr,rotateX:rr,rotateY:rr,rotateZ:rr,scaleX:ql,scaleY:ql,scale:ql,backgroundColor:$l,color:$l,opacity:$l};function U_(n,e){let t;return CS(e)?t=IS:t=vd[n]||vd.default,{to:e,...t(e)}}const xd={...Io,transform:Math.round},O_={color:tn,backgroundColor:tn,outlineColor:tn,fill:tn,stroke:tn,borderColor:tn,borderTopColor:tn,borderRightColor:tn,borderBottomColor:tn,borderLeftColor:tn,borderWidth:$e,borderTopWidth:$e,borderRightWidth:$e,borderBottomWidth:$e,borderLeftWidth:$e,borderRadius:$e,radius:$e,borderTopLeftRadius:$e,borderTopRightRadius:$e,borderBottomRightRadius:$e,borderBottomLeftRadius:$e,width:$e,maxWidth:$e,height:$e,maxHeight:$e,size:$e,top:$e,right:$e,bottom:$e,left:$e,padding:$e,paddingTop:$e,paddingRight:$e,paddingBottom:$e,paddingLeft:$e,margin:$e,marginTop:$e,marginRight:$e,marginBottom:$e,marginLeft:$e,rotate:ir,rotateX:ir,rotateY:ir,rotateZ:ir,scale:Go,scaleX:Go,scaleY:Go,scaleZ:Go,skew:ir,skewX:ir,skewY:ir,distance:$e,translateX:$e,translateY:$e,translateZ:$e,x:$e,y:$e,z:$e,perspective:$e,transformPerspective:$e,opacity:to,originX:hd,originY:hd,originZ:$e,zIndex:xd,filter:ou,WebkitFilter:ou,fillOpacity:to,strokeOpacity:to,numOctaves:xd},Hf=n=>O_[n];function au(n,e){return e&&typeof n=="number"&&e.transform?e.transform(n):n}function LS(n,e){let t=Hf(n);return t!==ou&&(t=Lo),t.getAnimatableNone?t.getAnimatableNone(e):void 0}const DS={linear:E_,easeIn:Bf,easeInOut:T_,easeOut:qM,circIn:A_,circInOut:$M,circOut:w_,backIn:kf,backInOut:KM,backOut:YM,anticipate:ZM,bounceIn:tS,bounceInOut:nS,bounceOut:Xa};function yd(n){if(Array.isArray(n)){const[e,t,i,r]=n;return vS(e,t,i,r)}else if(typeof n=="string")return DS[n];return n}function NS(n){return Array.isArray(n)&&typeof n[0]!="number"}function Md(n,e){return n==="zIndex"?!1:!!(typeof e=="number"||Array.isArray(e)||typeof e=="string"&&Lo.test(e)&&!e.startsWith("url("))}function US(n){return Array.isArray(n.to)&&n.to[0]===null&&(n.to=[...n.to],n.to[0]=n.from),n}function OS({ease:n,times:e,delay:t,...i}){const r={...i};return e&&(r.offset=e),n&&(r.ease=NS(n)?n.map(yd):yd(n)),t&&(r.elapsed=-t),r}function FS(n,e,t){return Array.isArray(e.to)&&(n.duration||(n.duration=800)),US(e),BS(n)||(n={...n,...U_(t,e.to)}),{...e,...OS(n)}}function BS({delay:n,repeat:e,repeatType:t,repeatDelay:i,from:r,...s}){return!!Object.keys(s).length}function kS(n,e){return n[e]||n.default||n}function HS(n,e,t,i,r){const s=kS(i,n);let o=s.from===null||s.from===void 0?e.get():s.from;const a=Md(n,t);o==="none"&&a&&typeof t=="string"&&(o=LS(n,t));const l=Md(n,o);function c(f){const h={from:o,to:t,velocity:i.velocity?i.velocity:e.getVelocity(),onUpdate:d=>e.set(d)};return s.type==="inertia"||s.type==="decay"?fS({...h,...s}):C_({...FS(s,h,n),onUpdate:d=>{h.onUpdate(d),s.onUpdate&&s.onUpdate(d)},onComplete:()=>{r&&r(),f&&f()}})}function u(f){return e.set(t),r&&r(),f&&f(),{stop:()=>{}}}return!l||!a||s.type===!1?u:c}function zS(){const{motionValues:n,stop:e,get:t}=RS();return{motionValues:n,stop:e,push:(r,s,o,a={},l)=>{const c=o[r],u=t(r,c,o);if(a&&a.immediate){u.set(s);return}const f=HS(r,u,s,a,l);u.start(f)}}}function VS(n,e={},{motionValues:t,push:i,stop:r}=zS()){const s=Tt(e),o=Ct(!1);Gt(t,f=>{o.value=Object.values(f).filter(h=>h.isAnimating()).length>0},{immediate:!0,deep:!0});const a=f=>{if(!s||!s[f])throw new Error(`The variant ${f} does not exist.`);return s[f]},l=f=>{typeof f=="string"&&(f=a(f));const h=Object.entries(f).map(([g,_])=>{if(g!=="transition")return new Promise(m=>i(g,_,n,f.transition||U_(g,f[g]),m))}).filter(Boolean);async function d(){var g,_;await Promise.all(h),(_=(g=f.transition)==null?void 0:g.onComplete)==null||_.call(g)}return Promise.all([d()])};return{isAnimating:o,apply:l,set:f=>{const h=Wa(f)?f:a(f);Object.entries(h).forEach(([d,g])=>{d!=="transition"&&i(d,g,n,{immediate:!0})})},leave:async f=>{let h;if(s&&(s.leave&&(h=s.leave),!s.leave&&s.initial&&(h=s.initial)),!h){f();return}await l(h),f()},stop:r}}const zf=typeof window<"u",GS=()=>zf&&(window.onpointerdown===null||void 0),WS=()=>zf&&(window.ontouchstart===null||void 0),XS=()=>zf&&(window.onmousedown===null||void 0);function jS({target:n,state:e,variants:t,apply:i}){const r=Tt(t),s=Ct(!1),o=Ct(!1),a=Ct(!1),l=Et(()=>{let u=[...Object.keys(e.value||{})];return r&&(r.hovered&&(u=[...u,...Object.keys(r.hovered)]),r.tapped&&(u=[...u,...Object.keys(r.tapped)]),r.focused&&(u=[...u,...Object.keys(r.focused)])),u}),c=Et(()=>{const u={};Object.assign(u,e.value),s.value&&r.hovered&&Object.assign(u,r.hovered),o.value&&r.tapped&&Object.assign(u,r.tapped),a.value&&r.focused&&Object.assign(u,r.focused);for(const f in u)l.value.includes(f)||delete u[f];return u});r.hovered&&(Hn(n,"mouseenter",()=>s.value=!0),Hn(n,"mouseleave",()=>{s.value=!1,o.value=!1})),r.tapped&&(XS()&&(Hn(n,"mousedown",()=>o.value=!0),Hn(n,"mouseup",()=>o.value=!1)),GS()&&(Hn(n,"pointerdown",()=>o.value=!0),Hn(n,"pointerup",()=>o.value=!1)),WS()&&(Hn(n,"touchstart",()=>o.value=!0),Hn(n,"touchend",()=>o.value=!1))),r.focused&&(Hn(n,"focus",()=>a.value=!0),Hn(n,"blur",()=>a.value=!1)),Gt([s,o,a],()=>{i(c.value)})}function qS({set:n,target:e,variants:t,variant:i}){const r=Tt(t);Gt(()=>e,()=>{r&&(r.initial&&(n("initial"),i.value="initial"),r.enter&&(i.value="enter"))},{immediate:!0,flush:"pre"})}function $S({state:n,apply:e}){Gt(n,t=>{t&&e(t)},{immediate:!0})}function F_({target:n,variants:e,variant:t}){const i=Tt(e);i&&(i.visible||i.visibleOnce)&&oM(n,([{isIntersecting:r}])=>{i.visible?r?t.value="visible":t.value="initial":i.visibleOnce&&(r&&t.value!=="visibleOnce"?t.value="visibleOnce":t.value||(t.value="initial"))})}function YS(n,e={syncVariants:!0,lifeCycleHooks:!0,visibilityHooks:!0,eventListeners:!0}){e.lifeCycleHooks&&qS(n),e.syncVariants&&$S(n),e.visibilityHooks&&F_(n),e.eventListeners&&jS(n)}function B_(n={}){const e=Yi({...n}),t=Ct({});return Gt(e,()=>{const i={};for(const[r,s]of Object.entries(e)){const o=Hf(r),a=au(s,o);i[r]=a}t.value=i},{immediate:!0,deep:!0}),{state:e,style:t}}function Vf(n,e){Gt(()=>Qs(n),t=>{t&&e(t)},{immediate:!0})}const KS={x:"translateX",y:"translateY",z:"translateZ"};function k_(n={},e=!0){const t=Yi({...n}),i=Ct("");return Gt(t,r=>{let s="",o=!1;if(e&&(r.x||r.y||r.z)){const a=[r.x||0,r.y||0,r.z||0].map(l=>au(l,$e)).join(",");s+=`translate3d(${a}) `,o=!0}for(const[a,l]of Object.entries(r)){if(e&&(a==="x"||a==="y"||a==="z"))continue;const c=Hf(a),u=au(l,c);s+=`${KS[a]||a}(${u}) `}e&&!o&&(s+="translateZ(0px) "),i.value=s.trim()},{immediate:!0,deep:!0}),{state:t,transform:i}}const ZS=["","X","Y","Z"],JS=["perspective","translate","scale","rotate","skew"],H_=["transformPerspective","x","y","z"];JS.forEach(n=>{ZS.forEach(e=>{const t=n+e;H_.push(t)})});const QS=new Set(H_);function Gf(n){return QS.has(n)}const eb=new Set(["originX","originY","originZ"]);function z_(n){return eb.has(n)}function tb(n){const e={},t={};return Object.entries(n).forEach(([i,r])=>{Gf(i)||z_(i)?e[i]=r:t[i]=r}),{transform:e,style:t}}function ml(n){const{transform:e,style:t}=tb(n),{transform:i}=k_(e),{style:r}=B_(t);return i.value&&(r.value.transform=i.value),r.value}function nb(n,e){let t,i;const{state:r,style:s}=B_();return Vf(n,o=>{i=o;for(const a of Object.keys(O_))o.style[a]===null||o.style[a]===""||Gf(a)||z_(a)||(r[a]=o.style[a]);t&&Object.entries(t).forEach(([a,l])=>o.style[a]=l),e&&e(r)}),Gt(s,o=>{if(!i){t=o;return}for(const a in o)i.style[a]=o[a]},{immediate:!0}),{style:r}}function ib(n){const e=n.trim().split(/\) |\)/);if(e.length===1)return{};const t=i=>i.endsWith("px")||i.endsWith("deg")?Number.parseFloat(i):Number.isNaN(Number(i))?Number(i):i;return e.reduce((i,r)=>{if(!r)return i;const[s,o]=r.split("("),l=o.split(",").map(u=>t(u.endsWith(")")?u.replace(")",""):u.trim())),c=l.length===1?l[0]:l;return{...i,[s]:c}},{})}function rb(n,e){Object.entries(ib(e)).forEach(([t,i])=>{const r=["x","y","z"];if(t==="translate3d"){if(i===0){r.forEach(s=>n[s]=0);return}i.forEach((s,o)=>n[r[o]]=s);return}if(i=Number.parseFloat(`${i}`),t==="translateX"){n.x=i;return}if(t==="translateY"){n.y=i;return}if(t==="translateZ"){n.z=i;return}n[t]=i})}function sb(n,e){let t,i;const{state:r,transform:s}=k_();return Vf(n,o=>{i=o,o.style.transform&&rb(r,o.style.transform),t&&(o.style.transform=t),e&&e(r)}),Gt(s,o=>{if(!i){t=o;return}i.style.transform=o},{immediate:!0}),{transform:r}}function ob(n){return Object.entries(n)}function ab(n,e){const t=Yi({}),i=o=>Object.entries(o).forEach(([a,l])=>t[a]=l),{style:r}=nb(n,i),{transform:s}=sb(n,i);return Gt(t,o=>{ob(o).forEach(([a,l])=>{const c=Gf(a)?s:r;c[a]&&c[a]===l||(c[a]=l)})},{immediate:!0,deep:!0}),Vf(n,()=>e),{motionProperties:t,style:r,transform:s}}function lb(n={}){const e=Tt(n),t=Ct();return{state:Et(()=>{if(t.value)return e[t.value]}),variant:t}}function V_(n,e={},t){const{motionProperties:i}=ab(n),{variant:r,state:s}=lb(e),o=VS(i,e),a={target:n,variant:r,variants:e,state:s,motionProperties:i,...o};return YS(a,t),a}const G_=["delay","duration"],cb=["initial","enter","leave","visible","visible-once","visibleOnce","hovered","tapped","focused",...G_];function ub(n){return G_.includes(n)}function fb(n,e){const t=n.props?n.props:n.data&&n.data.attrs?n.data.attrs:{};if(t){t.variants&&Wa(t.variants)&&(e.value={...e.value,...t.variants});for(let i of cb)if(!(!t||!t[i])){if(ub(i)&&typeof t[i]=="number"){for(const r of["enter","visible","visibleOnce"]){const s=e.value[r];s!=null&&(s.transition??(s.transition={}),s.transition[i]=t[i])}continue}if(Wa(t[i])){const r=t[i];i==="visible-once"&&(i="visibleOnce"),e.value[i]=r}}}}function Yl(n,e=!1){return{created:(r,s,o)=>{const a=s.value&&typeof s.value=="string"?s.value:o.key;a&&jl[a]&&jl[a].stop();const l=e?structuredClone(tt(n)||{}):n||{},c=Ct(l);typeof s.value=="object"&&(c.value=s.value),fb(o,c);const f=V_(r,c,{eventListeners:!0,lifeCycleHooks:!0,syncVariants:!0,visibilityHooks:!1});r.motionInstance=f,a&&(jl[a]=f)},mounted:(r,s,o)=>{r.motionInstance&&F_(r.motionInstance)},getSSRProps(r,s){let{initial:o}=r.value||s&&(s==null?void 0:s.props)||{};o=Tt(o);const a=e_({},(n==null?void 0:n.initial)||{},o||{});return!a||Object.keys(a).length===0?void 0:{style:ml(a)}}}}const hb={initial:{opacity:0},enter:{opacity:1}},db={initial:{opacity:0},visible:{opacity:1}},pb={initial:{opacity:0},visibleOnce:{opacity:1}},mb={initial:{scale:0,opacity:0},enter:{scale:1,opacity:1}},gb={initial:{scale:0,opacity:0},visible:{scale:1,opacity:1}},_b={initial:{scale:0,opacity:0},visibleOnce:{scale:1,opacity:1}},vb={initial:{x:-100,rotate:90,opacity:0},enter:{x:0,rotate:0,opacity:1}},xb={initial:{x:-100,rotate:90,opacity:0},visible:{x:0,rotate:0,opacity:1}},yb={initial:{x:-100,rotate:90,opacity:0},visibleOnce:{x:0,rotate:0,opacity:1}},Mb={initial:{x:100,rotate:-90,opacity:0},enter:{x:0,rotate:0,opacity:1}},Sb={initial:{x:100,rotate:-90,opacity:0},visible:{x:0,rotate:0,opacity:1}},bb={initial:{x:100,rotate:-90,opacity:0},visibleOnce:{x:0,rotate:0,opacity:1}},Eb={initial:{y:-100,rotate:-90,opacity:0},enter:{y:0,rotate:0,opacity:1}},Tb={initial:{y:-100,rotate:-90,opacity:0},visible:{y:0,rotate:0,opacity:1}},Ab={initial:{y:-100,rotate:-90,opacity:0},visibleOnce:{y:0,rotate:0,opacity:1}},wb={initial:{y:100,rotate:90,opacity:0},enter:{y:0,rotate:0,opacity:1}},Rb={initial:{y:100,rotate:90,opacity:0},visible:{y:0,rotate:0,opacity:1}},Cb={initial:{y:100,rotate:90,opacity:0},visibleOnce:{y:0,rotate:0,opacity:1}},Pb={initial:{x:-100,opacity:0},enter:{x:0,opacity:1}},Ib={initial:{x:-100,opacity:0},visible:{x:0,opacity:1}},Lb={initial:{x:-100,opacity:0},visibleOnce:{x:0,opacity:1}},Db={initial:{x:100,opacity:0},enter:{x:0,opacity:1}},Nb={initial:{x:100,opacity:0},visible:{x:0,opacity:1}},Ub={initial:{x:100,opacity:0},visibleOnce:{x:0,opacity:1}},Ob={initial:{y:-100,opacity:0},enter:{y:0,opacity:1}},Fb={initial:{y:-100,opacity:0},visible:{y:0,opacity:1}},Bb={initial:{y:-100,opacity:0},visibleOnce:{y:0,opacity:1}},kb={initial:{y:100,opacity:0},enter:{y:0,opacity:1}},Hb={initial:{y:100,opacity:0},visible:{y:0,opacity:1}},zb={initial:{y:100,opacity:0},visibleOnce:{y:0,opacity:1}},gr={__proto__:null,fade:hb,fadeVisible:db,fadeVisibleOnce:pb,pop:mb,popVisible:gb,popVisibleOnce:_b,rollBottom:wb,rollLeft:vb,rollRight:Mb,rollTop:Eb,rollVisibleBottom:Rb,rollVisibleLeft:xb,rollVisibleOnceBottom:Cb,rollVisibleOnceLeft:yb,rollVisibleOnceRight:bb,rollVisibleOnceTop:Ab,rollVisibleRight:Sb,rollVisibleTop:Tb,slideBottom:kb,slideLeft:Pb,slideRight:Db,slideTop:Ob,slideVisibleBottom:Hb,slideVisibleLeft:Ib,slideVisibleOnceBottom:zb,slideVisibleOnceLeft:Lb,slideVisibleOnceRight:Ub,slideVisibleOnceTop:Bb,slideVisibleRight:Nb,slideVisibleTop:Fb};function Vb(n){const e="àáâäæãåāăąçćčđďèéêëēėęěğǵḧîïíīįìłḿñńǹňôöòóœøōõőṕŕřßśšşșťțûüùúūǘůűųẃẍÿýžźż·/_,:;",t="aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------",i=new RegExp(e.split("").join("|"),"g");return n.toString().replace(/[A-Z]/g,r=>`-${r}`).toLowerCase().replace(/\s+/g,"-").replace(i,r=>t.charAt(e.indexOf(r))).replace(/&/g,"-and-").replace(/[^\w\-]+/g,"").replace(/-{2,}/g,"-").replace(/^-+/,"").replace(/-+$/,"")}const W_=Symbol(import.meta.dev?"motionCustomPresets":""),X_={preset:{type:String,required:!1},instance:{type:Object,required:!1},variants:{type:Object,required:!1},initial:{type:Object,required:!1},enter:{type:Object,required:!1},leave:{type:Object,required:!1},visible:{type:Object,required:!1},visibleOnce:{type:Object,required:!1},hovered:{type:Object,required:!1},tapped:{type:Object,required:!1},focused:{type:Object,required:!1},delay:{type:[Number,String],required:!1},duration:{type:[Number,String],required:!1}};function Gb(n){return Object.prototype.toString.call(n)==="[object Object]"}function lu(n){if(Array.isArray(n))return n.map(lu);if(Gb(n)){const e={};for(const t in n)e[t]=lu(n[t]);return e}return n}function j_(n){const e=Yi({}),t=Sn(W_,{}),i=Et(()=>n.preset==null?{}:t!=null&&n.preset in t?structuredClone(tt(t)[n.preset]):n.preset in gr?structuredClone(gr[n.preset]):{}),r=Et(()=>({initial:n.initial,enter:n.enter,leave:n.leave,visible:n.visible,visibleOnce:n.visibleOnce,hovered:n.hovered,tapped:n.tapped,focused:n.focused}));function s(l,c){for(const u of["delay","duration"]){if(c[u]==null)continue;const f=Number.parseInt(c[u]);for(const h of["enter","visible","visibleOnce"]){const d=l[h];d!=null&&(d.transition??(d.transition={}),d.transition[u]=f)}}return l}const o=Et(()=>{const l=e_({},r.value,i.value,n.variants||{});return s({...l},n)});if(import.meta.dev){n.preset!=null&&(gr==null?void 0:gr[n.preset])==null&&(t==null?void 0:t[n.preset])==null&&console.warn(`[@vueuse/motion]: Preset \`${n.preset}\` not found.`);const l=c=>{var u;(u=c.variants)!=null&&u.initial&&c.set("initial"),ol(()=>{var f,h,d;(f=c.variants)!=null&&f.enter&&c.apply("enter"),(h=c.variants)!=null&&h.visible&&c.apply("visible"),(d=c.variants)!=null&&d.visibleOnce&&c.apply("visibleOnce")})};Eg(()=>{for(const c in e)l(e[c])})}function a(l,c,u){var f;l.props??(l.props={}),(f=l.props).style??(f.style={}),l.props.style={...l.props.style,...u};const h=s(lu(o.value),l.props);return l.props.onVnodeMounted=({el:d})=>{e[c]=V_(d,h)},l.props.onVnodeUpdated=({el:d})=>{const g=ml(e[c].state);for(const[_,m]of Object.entries(g))d.style[_]=m},l}return{motionConfig:o,setNodeInstance:a}}const Wb=Yn({name:"Motion",props:{...X_,is:{type:[String,Object],default:"div"}},setup(n){const e=Rg(),{motionConfig:t,setNodeInstance:i}=j_(n);return()=>{const r=ml(t.value.initial||{}),s=Sr(n.is,void 0,e);return i(s,0,r),s}}}),Xb=Yn({name:"MotionGroup",props:{...X_,is:{type:[String,Object],required:!1}},setup(n){const e=Rg(),{motionConfig:t,setNodeInstance:i}=j_(n);return()=>{var o;const r=ml(t.value.initial||{}),s=((o=e.default)==null?void 0:o.call(e))||[];for(let a=0;a<s.length;a++){const l=s[a];l.type===nn&&Array.isArray(l.children)?l.children.forEach(function c(u,f){if(u!=null){if(Array.isArray(u)){c(u,f);return}typeof u=="object"&&i(u,f,r)}}):i(l,a,r)}return n.is?Sr(n.is,void 0,s):s}}}),jb={install(n,e){if(n.directive("motion",Yl()),!e||e&&!e.excludePresets)for(const t in gr){const i=gr[t];n.directive(`motion-${Vb(t)}`,Yl(i,!0))}if(e&&e.directives)for(const t in e.directives){const i=e.directives[t];!i.initial&&import.meta.dev&&console.warn(`Your directive v-motion-${t} is missing initial variant!`),n.directive(`motion-${t}`,Yl(i,!0))}n.provide(W_,e==null?void 0:e.directives),n.component("Motion",Wb),n.component("MotionGroup",Xb)}},Do=(n,e)=>{const t=n.__vccOpts||n;for(const[i,r]of e)t[i]=r;return t},qb={};function $b(n,e){const t=Ax("RouterView");return Bt(),Pf(t)}const Yb=Do(qb,[["render",$b]]),Sd="/spes_logo.svg";/*!
  * vue-router v4.5.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const qr=typeof document<"u";function q_(n){return typeof n=="object"||"displayName"in n||"props"in n||"__vccOpts"in n}function Kb(n){return n.__esModule||n[Symbol.toStringTag]==="Module"||n.default&&q_(n.default)}const ot=Object.assign;function Kl(n,e){const t={};for(const i in e){const r=e[i];t[i]=Fn(r)?r.map(n):n(r)}return t}const io=()=>{},Fn=Array.isArray,$_=/#/g,Zb=/&/g,Jb=/\//g,Qb=/=/g,eE=/\?/g,Y_=/\+/g,tE=/%5B/g,nE=/%5D/g,K_=/%5E/g,iE=/%60/g,Z_=/%7B/g,rE=/%7C/g,J_=/%7D/g,sE=/%20/g;function Wf(n){return encodeURI(""+n).replace(rE,"|").replace(tE,"[").replace(nE,"]")}function oE(n){return Wf(n).replace(Z_,"{").replace(J_,"}").replace(K_,"^")}function cu(n){return Wf(n).replace(Y_,"%2B").replace(sE,"+").replace($_,"%23").replace(Zb,"%26").replace(iE,"`").replace(Z_,"{").replace(J_,"}").replace(K_,"^")}function aE(n){return cu(n).replace(Qb,"%3D")}function lE(n){return Wf(n).replace($_,"%23").replace(eE,"%3F")}function cE(n){return n==null?"":lE(n).replace(Jb,"%2F")}function vo(n){try{return decodeURIComponent(""+n)}catch{}return""+n}const uE=/\/$/,fE=n=>n.replace(uE,"");function Zl(n,e,t="/"){let i,r={},s="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(i=e.slice(0,l),s=e.slice(l+1,a>-1?a:e.length),r=n(s)),a>-1&&(i=i||e.slice(0,a),o=e.slice(a,e.length)),i=mE(i??e,t),{fullPath:i+(s&&"?")+s+o,path:i,query:r,hash:vo(o)}}function hE(n,e){const t=e.query?n(e.query):"";return e.path+(t&&"?")+t+(e.hash||"")}function bd(n,e){return!e||!n.toLowerCase().startsWith(e.toLowerCase())?n:n.slice(e.length)||"/"}function dE(n,e,t){const i=e.matched.length-1,r=t.matched.length-1;return i>-1&&i===r&&os(e.matched[i],t.matched[r])&&Q_(e.params,t.params)&&n(e.query)===n(t.query)&&e.hash===t.hash}function os(n,e){return(n.aliasOf||n)===(e.aliasOf||e)}function Q_(n,e){if(Object.keys(n).length!==Object.keys(e).length)return!1;for(const t in n)if(!pE(n[t],e[t]))return!1;return!0}function pE(n,e){return Fn(n)?Ed(n,e):Fn(e)?Ed(e,n):n===e}function Ed(n,e){return Fn(e)?n.length===e.length&&n.every((t,i)=>t===e[i]):n.length===1&&n[0]===e}function mE(n,e){if(n.startsWith("/"))return n;if(!n)return e;const t=e.split("/"),i=n.split("/"),r=i[i.length-1];(r===".."||r===".")&&i.push("");let s=t.length-1,o,a;for(o=0;o<i.length;o++)if(a=i[o],a!==".")if(a==="..")s>1&&s--;else break;return t.slice(0,s).join("/")+"/"+i.slice(o).join("/")}const Ti={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var xo;(function(n){n.pop="pop",n.push="push"})(xo||(xo={}));var ro;(function(n){n.back="back",n.forward="forward",n.unknown=""})(ro||(ro={}));function gE(n){if(!n)if(qr){const e=document.querySelector("base");n=e&&e.getAttribute("href")||"/",n=n.replace(/^\w+:\/\/[^\/]+/,"")}else n="/";return n[0]!=="/"&&n[0]!=="#"&&(n="/"+n),fE(n)}const _E=/^[^#]+#/;function vE(n,e){return n.replace(_E,"#")+e}function xE(n,e){const t=document.documentElement.getBoundingClientRect(),i=n.getBoundingClientRect();return{behavior:e.behavior,left:i.left-t.left-(e.left||0),top:i.top-t.top-(e.top||0)}}const gl=()=>({left:window.scrollX,top:window.scrollY});function yE(n){let e;if("el"in n){const t=n.el,i=typeof t=="string"&&t.startsWith("#"),r=typeof t=="string"?i?document.getElementById(t.slice(1)):document.querySelector(t):t;if(!r)return;e=xE(r,n)}else e=n;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Td(n,e){return(history.state?history.state.position-e:-1)+n}const uu=new Map;function ME(n,e){uu.set(n,e)}function SE(n){const e=uu.get(n);return uu.delete(n),e}let bE=()=>location.protocol+"//"+location.host;function e0(n,e){const{pathname:t,search:i,hash:r}=e,s=n.indexOf("#");if(s>-1){let a=r.includes(n.slice(s))?n.slice(s).length:1,l=r.slice(a);return l[0]!=="/"&&(l="/"+l),bd(l,"")}return bd(t,n)+i+r}function EE(n,e,t,i){let r=[],s=[],o=null;const a=({state:h})=>{const d=e0(n,location),g=t.value,_=e.value;let m=0;if(h){if(t.value=d,e.value=h,o&&o===g){o=null;return}m=_?h.position-_.position:0}else i(d);r.forEach(p=>{p(t.value,g,{delta:m,type:xo.pop,direction:m?m>0?ro.forward:ro.back:ro.unknown})})};function l(){o=t.value}function c(h){r.push(h);const d=()=>{const g=r.indexOf(h);g>-1&&r.splice(g,1)};return s.push(d),d}function u(){const{history:h}=window;h.state&&h.replaceState(ot({},h.state,{scroll:gl()}),"")}function f(){for(const h of s)h();s=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:l,listen:c,destroy:f}}function Ad(n,e,t,i=!1,r=!1){return{back:n,current:e,forward:t,replaced:i,position:window.history.length,scroll:r?gl():null}}function TE(n){const{history:e,location:t}=window,i={value:e0(n,t)},r={value:e.state};r.value||s(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function s(l,c,u){const f=n.indexOf("#"),h=f>-1?(t.host&&document.querySelector("base")?n:n.slice(f))+l:bE()+n+l;try{e[u?"replaceState":"pushState"](c,"",h),r.value=c}catch(d){console.error(d),t[u?"replace":"assign"](h)}}function o(l,c){const u=ot({},e.state,Ad(r.value.back,l,r.value.forward,!0),c,{position:r.value.position});s(l,u,!0),i.value=l}function a(l,c){const u=ot({},r.value,e.state,{forward:l,scroll:gl()});s(u.current,u,!0);const f=ot({},Ad(i.value,l,null),{position:u.position+1},c);s(l,f,!1),i.value=l}return{location:i,state:r,push:a,replace:o}}function AE(n){n=gE(n);const e=TE(n),t=EE(n,e.state,e.location,e.replace);function i(s,o=!0){o||t.pauseListeners(),history.go(s)}const r=ot({location:"",base:n,go:i,createHref:vE.bind(null,n)},e,t);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function wE(n){return n=location.host?n||location.pathname+location.search:"",n.includes("#")||(n+="#"),AE(n)}function RE(n){return typeof n=="string"||n&&typeof n=="object"}function t0(n){return typeof n=="string"||typeof n=="symbol"}const n0=Symbol("");var wd;(function(n){n[n.aborted=4]="aborted",n[n.cancelled=8]="cancelled",n[n.duplicated=16]="duplicated"})(wd||(wd={}));function as(n,e){return ot(new Error,{type:n,[n0]:!0},e)}function ni(n,e){return n instanceof Error&&n0 in n&&(e==null||!!(n.type&e))}const Rd="[^/]+?",CE={sensitive:!1,strict:!1,start:!0,end:!0},PE=/[.+*?^${}()[\]/\\]/g;function IE(n,e){const t=ot({},CE,e),i=[];let r=t.start?"^":"";const s=[];for(const c of n){const u=c.length?[]:[90];t.strict&&!c.length&&(r+="/");for(let f=0;f<c.length;f++){const h=c[f];let d=40+(t.sensitive?.25:0);if(h.type===0)f||(r+="/"),r+=h.value.replace(PE,"\\$&"),d+=40;else if(h.type===1){const{value:g,repeatable:_,optional:m,regexp:p}=h;s.push({name:g,repeatable:_,optional:m});const b=p||Rd;if(b!==Rd){d+=10;try{new RegExp(`(${b})`)}catch(v){throw new Error(`Invalid custom RegExp for param "${g}" (${b}): `+v.message)}}let y=_?`((?:${b})(?:/(?:${b}))*)`:`(${b})`;f||(y=m&&c.length<2?`(?:/${y})`:"/"+y),m&&(y+="?"),r+=y,d+=20,m&&(d+=-8),_&&(d+=-20),b===".*"&&(d+=-50)}u.push(d)}i.push(u)}if(t.strict&&t.end){const c=i.length-1;i[c][i[c].length-1]+=.7000000000000001}t.strict||(r+="/?"),t.end?r+="$":t.strict&&!r.endsWith("/")&&(r+="(?:/|$)");const o=new RegExp(r,t.sensitive?"":"i");function a(c){const u=c.match(o),f={};if(!u)return null;for(let h=1;h<u.length;h++){const d=u[h]||"",g=s[h-1];f[g.name]=d&&g.repeatable?d.split("/"):d}return f}function l(c){let u="",f=!1;for(const h of n){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const d of h)if(d.type===0)u+=d.value;else if(d.type===1){const{value:g,repeatable:_,optional:m}=d,p=g in c?c[g]:"";if(Fn(p)&&!_)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const b=Fn(p)?p.join("/"):p;if(!b)if(m)h.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${g}"`);u+=b}}return u||"/"}return{re:o,score:i,keys:s,parse:a,stringify:l}}function LE(n,e){let t=0;for(;t<n.length&&t<e.length;){const i=e[t]-n[t];if(i)return i;t++}return n.length<e.length?n.length===1&&n[0]===80?-1:1:n.length>e.length?e.length===1&&e[0]===80?1:-1:0}function i0(n,e){let t=0;const i=n.score,r=e.score;for(;t<i.length&&t<r.length;){const s=LE(i[t],r[t]);if(s)return s;t++}if(Math.abs(r.length-i.length)===1){if(Cd(i))return 1;if(Cd(r))return-1}return r.length-i.length}function Cd(n){const e=n[n.length-1];return n.length>0&&e[e.length-1]<0}const DE={type:0,value:""},NE=/[a-zA-Z0-9_]/;function UE(n){if(!n)return[[]];if(n==="/")return[[DE]];if(!n.startsWith("/"))throw new Error(`Invalid path "${n}"`);function e(d){throw new Error(`ERR (${t})/"${c}": ${d}`)}let t=0,i=t;const r=[];let s;function o(){s&&r.push(s),s=[]}let a=0,l,c="",u="";function f(){c&&(t===0?s.push({type:0,value:c}):t===1||t===2||t===3?(s.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function h(){c+=l}for(;a<n.length;){if(l=n[a++],l==="\\"&&t!==2){i=t,t=4;continue}switch(t){case 0:l==="/"?(c&&f(),o()):l===":"?(f(),t=1):h();break;case 4:h(),t=i;break;case 1:l==="("?t=2:NE.test(l)?h():(f(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:t=3:u+=l;break;case 3:f(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return t===2&&e(`Unfinished custom RegExp for param "${c}"`),f(),o(),r}function OE(n,e,t){const i=IE(UE(n.path),t),r=ot(i,{record:n,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function FE(n,e){const t=[],i=new Map;e=Dd({strict:!1,end:!0,sensitive:!1},e);function r(f){return i.get(f)}function s(f,h,d){const g=!d,_=Id(f);_.aliasOf=d&&d.record;const m=Dd(e,f),p=[_];if("alias"in f){const v=typeof f.alias=="string"?[f.alias]:f.alias;for(const P of v)p.push(Id(ot({},_,{components:d?d.record.components:_.components,path:P,aliasOf:d?d.record:_})))}let b,y;for(const v of p){const{path:P}=v;if(h&&P[0]!=="/"){const w=h.record.path,C=w[w.length-1]==="/"?"":"/";v.path=h.record.path+(P&&C+P)}if(b=OE(v,h,m),d?d.alias.push(b):(y=y||b,y!==b&&y.alias.push(b),g&&f.name&&!Ld(b)&&o(f.name)),r0(b)&&l(b),_.children){const w=_.children;for(let C=0;C<w.length;C++)s(w[C],b,d&&d.children[C])}d=d||b}return y?()=>{o(y)}:io}function o(f){if(t0(f)){const h=i.get(f);h&&(i.delete(f),t.splice(t.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=t.indexOf(f);h>-1&&(t.splice(h,1),f.record.name&&i.delete(f.record.name),f.children.forEach(o),f.alias.forEach(o))}}function a(){return t}function l(f){const h=HE(f,t);t.splice(h,0,f),f.record.name&&!Ld(f)&&i.set(f.record.name,f)}function c(f,h){let d,g={},_,m;if("name"in f&&f.name){if(d=i.get(f.name),!d)throw as(1,{location:f});m=d.record.name,g=ot(Pd(h.params,d.keys.filter(y=>!y.optional).concat(d.parent?d.parent.keys.filter(y=>y.optional):[]).map(y=>y.name)),f.params&&Pd(f.params,d.keys.map(y=>y.name))),_=d.stringify(g)}else if(f.path!=null)_=f.path,d=t.find(y=>y.re.test(_)),d&&(g=d.parse(_),m=d.record.name);else{if(d=h.name?i.get(h.name):t.find(y=>y.re.test(h.path)),!d)throw as(1,{location:f,currentLocation:h});m=d.record.name,g=ot({},h.params,f.params),_=d.stringify(g)}const p=[];let b=d;for(;b;)p.unshift(b.record),b=b.parent;return{name:m,path:_,params:g,matched:p,meta:kE(p)}}n.forEach(f=>s(f));function u(){t.length=0,i.clear()}return{addRoute:s,resolve:c,removeRoute:o,clearRoutes:u,getRoutes:a,getRecordMatcher:r}}function Pd(n,e){const t={};for(const i of e)i in n&&(t[i]=n[i]);return t}function Id(n){const e={path:n.path,redirect:n.redirect,name:n.name,meta:n.meta||{},aliasOf:n.aliasOf,beforeEnter:n.beforeEnter,props:BE(n),children:n.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in n?n.components||null:n.component&&{default:n.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function BE(n){const e={},t=n.props||!1;if("component"in n)e.default=t;else for(const i in n.components)e[i]=typeof t=="object"?t[i]:t;return e}function Ld(n){for(;n;){if(n.record.aliasOf)return!0;n=n.parent}return!1}function kE(n){return n.reduce((e,t)=>ot(e,t.meta),{})}function Dd(n,e){const t={};for(const i in n)t[i]=i in e?e[i]:n[i];return t}function HE(n,e){let t=0,i=e.length;for(;t!==i;){const s=t+i>>1;i0(n,e[s])<0?i=s:t=s+1}const r=zE(n);return r&&(i=e.lastIndexOf(r,i-1)),i}function zE(n){let e=n;for(;e=e.parent;)if(r0(e)&&i0(n,e)===0)return e}function r0({record:n}){return!!(n.name||n.components&&Object.keys(n.components).length||n.redirect)}function VE(n){const e={};if(n===""||n==="?")return e;const i=(n[0]==="?"?n.slice(1):n).split("&");for(let r=0;r<i.length;++r){const s=i[r].replace(Y_," "),o=s.indexOf("="),a=vo(o<0?s:s.slice(0,o)),l=o<0?null:vo(s.slice(o+1));if(a in e){let c=e[a];Fn(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function Nd(n){let e="";for(let t in n){const i=n[t];if(t=aE(t),i==null){i!==void 0&&(e+=(e.length?"&":"")+t);continue}(Fn(i)?i.map(s=>s&&cu(s)):[i&&cu(i)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+t,s!=null&&(e+="="+s))})}return e}function GE(n){const e={};for(const t in n){const i=n[t];i!==void 0&&(e[t]=Fn(i)?i.map(r=>r==null?null:""+r):i==null?i:""+i)}return e}const WE=Symbol(""),Ud=Symbol(""),_l=Symbol(""),Xf=Symbol(""),fu=Symbol("");function Cs(){let n=[];function e(i){return n.push(i),()=>{const r=n.indexOf(i);r>-1&&n.splice(r,1)}}function t(){n=[]}return{add:e,list:()=>n.slice(),reset:t}}function Oi(n,e,t,i,r,s=o=>o()){const o=i&&(i.enterCallbacks[r]=i.enterCallbacks[r]||[]);return()=>new Promise((a,l)=>{const c=h=>{h===!1?l(as(4,{from:t,to:e})):h instanceof Error?l(h):RE(h)?l(as(2,{from:e,to:h})):(o&&i.enterCallbacks[r]===o&&typeof h=="function"&&o.push(h),a())},u=s(()=>n.call(i&&i.instances[r],e,t,c));let f=Promise.resolve(u);n.length<3&&(f=f.then(c)),f.catch(h=>l(h))})}function Jl(n,e,t,i,r=s=>s()){const s=[];for(const o of n)for(const a in o.components){let l=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(q_(l)){const u=(l.__vccOpts||l)[e];u&&s.push(Oi(u,t,i,o,a,r))}else{let c=l();s.push(()=>c.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const f=Kb(u)?u.default:u;o.mods[a]=u,o.components[a]=f;const d=(f.__vccOpts||f)[e];return d&&Oi(d,t,i,o,a,r)()}))}}return s}function Od(n){const e=Sn(_l),t=Sn(Xf),i=Et(()=>{const l=Tt(n.to);return e.resolve(l)}),r=Et(()=>{const{matched:l}=i.value,{length:c}=l,u=l[c-1],f=t.matched;if(!u||!f.length)return-1;const h=f.findIndex(os.bind(null,u));if(h>-1)return h;const d=Fd(l[c-2]);return c>1&&Fd(u)===d&&f[f.length-1].path!==d?f.findIndex(os.bind(null,l[c-2])):h}),s=Et(()=>r.value>-1&&YE(t.params,i.value.params)),o=Et(()=>r.value>-1&&r.value===t.matched.length-1&&Q_(t.params,i.value.params));function a(l={}){if($E(l)){const c=e[Tt(n.replace)?"replace":"push"](Tt(n.to)).catch(io);return n.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>c),c}return Promise.resolve()}return{route:i,href:Et(()=>i.value.href),isActive:s,isExactActive:o,navigate:a}}function XE(n){return n.length===1?n[0]:n}const jE=Yn({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Od,setup(n,{slots:e}){const t=Yi(Od(n)),{options:i}=Sn(_l),r=Et(()=>({[Bd(n.activeClass,i.linkActiveClass,"router-link-active")]:t.isActive,[Bd(n.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:t.isExactActive}));return()=>{const s=e.default&&XE(e.default(t));return n.custom?s:Sr("a",{"aria-current":t.isExactActive?n.ariaCurrentValue:null,href:t.href,onClick:t.navigate,class:r.value},s)}}}),qE=jE;function $E(n){if(!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)&&!n.defaultPrevented&&!(n.button!==void 0&&n.button!==0)){if(n.currentTarget&&n.currentTarget.getAttribute){const e=n.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return n.preventDefault&&n.preventDefault(),!0}}function YE(n,e){for(const t in e){const i=e[t],r=n[t];if(typeof i=="string"){if(i!==r)return!1}else if(!Fn(r)||r.length!==i.length||i.some((s,o)=>s!==r[o]))return!1}return!0}function Fd(n){return n?n.aliasOf?n.aliasOf.path:n.path:""}const Bd=(n,e,t)=>n??e??t,KE=Yn({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(n,{attrs:e,slots:t}){const i=Sn(fu),r=Et(()=>n.route||i.value),s=Sn(Ud,0),o=Et(()=>{let c=Tt(s);const{matched:u}=r.value;let f;for(;(f=u[c])&&!f.components;)c++;return c}),a=Et(()=>r.value.matched[o.value]);ya(Ud,Et(()=>o.value+1)),ya(WE,a),ya(fu,r);const l=Ct();return Gt(()=>[l.value,a.value,n.name],([c,u,f],[h,d,g])=>{u&&(u.instances[f]=c,d&&d!==u&&c&&c===h&&(u.leaveGuards.size||(u.leaveGuards=d.leaveGuards),u.updateGuards.size||(u.updateGuards=d.updateGuards))),c&&u&&(!d||!os(u,d)||!h)&&(u.enterCallbacks[f]||[]).forEach(_=>_(c))},{flush:"post"}),()=>{const c=r.value,u=n.name,f=a.value,h=f&&f.components[u];if(!h)return kd(t.default,{Component:h,route:c});const d=f.props[u],g=d?d===!0?c.params:typeof d=="function"?d(c):d:null,m=Sr(h,ot({},g,e,{onVnodeUnmounted:p=>{p.component.isUnmounted&&(f.instances[u]=null)},ref:l}));return kd(t.default,{Component:m,route:c})||m}}});function kd(n,e){if(!n)return null;const t=n(e);return t.length===1?t[0]:t}const ZE=KE;function JE(n){const e=FE(n.routes,n),t=n.parseQuery||VE,i=n.stringifyQuery||Nd,r=n.history,s=Cs(),o=Cs(),a=Cs(),l=nx(Ti);let c=Ti;qr&&n.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Kl.bind(null,F=>""+F),f=Kl.bind(null,cE),h=Kl.bind(null,vo);function d(F,oe){let se,ue;return t0(F)?(se=e.getRecordMatcher(F),ue=oe):ue=F,e.addRoute(ue,se)}function g(F){const oe=e.getRecordMatcher(F);oe&&e.removeRoute(oe)}function _(){return e.getRoutes().map(F=>F.record)}function m(F){return!!e.getRecordMatcher(F)}function p(F,oe){if(oe=ot({},oe||l.value),typeof F=="string"){const S=Zl(t,F,oe.path),te=e.resolve({path:S.path},oe),Y=r.createHref(S.fullPath);return ot(S,te,{params:h(te.params),hash:vo(S.hash),redirectedFrom:void 0,href:Y})}let se;if(F.path!=null)se=ot({},F,{path:Zl(t,F.path,oe.path).path});else{const S=ot({},F.params);for(const te in S)S[te]==null&&delete S[te];se=ot({},F,{params:f(S)}),oe.params=f(oe.params)}const ue=e.resolve(se,oe),Ie=F.hash||"";ue.params=u(h(ue.params));const R=hE(i,ot({},F,{hash:oE(Ie),path:ue.path})),I=r.createHref(R);return ot({fullPath:R,hash:Ie,query:i===Nd?GE(F.query):F.query||{}},ue,{redirectedFrom:void 0,href:I})}function b(F){return typeof F=="string"?Zl(t,F,l.value.path):ot({},F)}function y(F,oe){if(c!==F)return as(8,{from:oe,to:F})}function v(F){return C(F)}function P(F){return v(ot(b(F),{replace:!0}))}function w(F){const oe=F.matched[F.matched.length-1];if(oe&&oe.redirect){const{redirect:se}=oe;let ue=typeof se=="function"?se(F):se;return typeof ue=="string"&&(ue=ue.includes("?")||ue.includes("#")?ue=b(ue):{path:ue},ue.params={}),ot({query:F.query,hash:F.hash,params:ue.path!=null?{}:F.params},ue)}}function C(F,oe){const se=c=p(F),ue=l.value,Ie=F.state,R=F.force,I=F.replace===!0,S=w(se);if(S)return C(ot(b(S),{state:typeof S=="object"?ot({},Ie,S.state):Ie,force:R,replace:I}),oe||se);const te=se;te.redirectedFrom=oe;let Y;return!R&&dE(i,ue,se)&&(Y=as(16,{to:te,from:ue}),Ee(ue,ue,!0,!1)),(Y?Promise.resolve(Y):M(te,ue)).catch(q=>ni(q)?ni(q,2)?q:_e(q):z(q,te,ue)).then(q=>{if(q){if(ni(q,2))return C(ot({replace:I},b(q.to),{state:typeof q.to=="object"?ot({},Ie,q.to.state):Ie,force:R}),oe||te)}else q=U(te,ue,!0,I,Ie);return L(te,ue,q),q})}function D(F,oe){const se=y(F,oe);return se?Promise.reject(se):Promise.resolve()}function T(F){const oe=re.values().next().value;return oe&&typeof oe.runWithContext=="function"?oe.runWithContext(F):F()}function M(F,oe){let se;const[ue,Ie,R]=QE(F,oe);se=Jl(ue.reverse(),"beforeRouteLeave",F,oe);for(const S of ue)S.leaveGuards.forEach(te=>{se.push(Oi(te,F,oe))});const I=D.bind(null,F,oe);return se.push(I),ye(se).then(()=>{se=[];for(const S of s.list())se.push(Oi(S,F,oe));return se.push(I),ye(se)}).then(()=>{se=Jl(Ie,"beforeRouteUpdate",F,oe);for(const S of Ie)S.updateGuards.forEach(te=>{se.push(Oi(te,F,oe))});return se.push(I),ye(se)}).then(()=>{se=[];for(const S of R)if(S.beforeEnter)if(Fn(S.beforeEnter))for(const te of S.beforeEnter)se.push(Oi(te,F,oe));else se.push(Oi(S.beforeEnter,F,oe));return se.push(I),ye(se)}).then(()=>(F.matched.forEach(S=>S.enterCallbacks={}),se=Jl(R,"beforeRouteEnter",F,oe,T),se.push(I),ye(se))).then(()=>{se=[];for(const S of o.list())se.push(Oi(S,F,oe));return se.push(I),ye(se)}).catch(S=>ni(S,8)?S:Promise.reject(S))}function L(F,oe,se){a.list().forEach(ue=>T(()=>ue(F,oe,se)))}function U(F,oe,se,ue,Ie){const R=y(F,oe);if(R)return R;const I=oe===Ti,S=qr?history.state:{};se&&(ue||I?r.replace(F.fullPath,ot({scroll:I&&S&&S.scroll},Ie)):r.push(F.fullPath,Ie)),l.value=F,Ee(F,oe,se,I),_e()}let O;function W(){O||(O=r.listen((F,oe,se)=>{if(!he.listening)return;const ue=p(F),Ie=w(ue);if(Ie){C(ot(Ie,{replace:!0,force:!0}),ue).catch(io);return}c=ue;const R=l.value;qr&&ME(Td(R.fullPath,se.delta),gl()),M(ue,R).catch(I=>ni(I,12)?I:ni(I,2)?(C(ot(b(I.to),{force:!0}),ue).then(S=>{ni(S,20)&&!se.delta&&se.type===xo.pop&&r.go(-1,!1)}).catch(io),Promise.reject()):(se.delta&&r.go(-se.delta,!1),z(I,ue,R))).then(I=>{I=I||U(ue,R,!1),I&&(se.delta&&!ni(I,8)?r.go(-se.delta,!1):se.type===xo.pop&&ni(I,20)&&r.go(-1,!1)),L(ue,R,I)}).catch(io)}))}let Q=Cs(),j=Cs(),ee;function z(F,oe,se){_e(F);const ue=j.list();return ue.length?ue.forEach(Ie=>Ie(F,oe,se)):console.error(F),Promise.reject(F)}function de(){return ee&&l.value!==Ti?Promise.resolve():new Promise((F,oe)=>{Q.add([F,oe])})}function _e(F){return ee||(ee=!F,W(),Q.list().forEach(([oe,se])=>F?se(F):oe()),Q.reset()),F}function Ee(F,oe,se,ue){const{scrollBehavior:Ie}=n;if(!qr||!Ie)return Promise.resolve();const R=!se&&SE(Td(F.fullPath,0))||(ue||!se)&&history.state&&history.state.scroll||null;return ol().then(()=>Ie(F,oe,R)).then(I=>I&&yE(I)).catch(I=>z(I,F,oe))}const Ce=F=>r.go(F);let Xe;const re=new Set,he={currentRoute:l,listening:!0,addRoute:d,removeRoute:g,clearRoutes:e.clearRoutes,hasRoute:m,getRoutes:_,resolve:p,options:n,push:v,replace:P,go:Ce,back:()=>Ce(-1),forward:()=>Ce(1),beforeEach:s.add,beforeResolve:o.add,afterEach:a.add,onError:j.add,isReady:de,install(F){const oe=this;F.component("RouterLink",qE),F.component("RouterView",ZE),F.config.globalProperties.$router=oe,Object.defineProperty(F.config.globalProperties,"$route",{enumerable:!0,get:()=>Tt(l)}),qr&&!Xe&&l.value===Ti&&(Xe=!0,v(r.location).catch(Ie=>{}));const se={};for(const Ie in Ti)Object.defineProperty(se,Ie,{get:()=>l.value[Ie],enumerable:!0});F.provide(_l,oe),F.provide(Xf,sg(se)),F.provide(fu,l);const ue=F.unmount;re.add(F),F.unmount=function(){re.delete(F),re.size<1&&(c=Ti,O&&O(),O=null,l.value=Ti,Xe=!1,ee=!1),ue()}}};function ye(F){return F.reduce((oe,se)=>oe.then(()=>T(se)),Promise.resolve())}return he}function QE(n,e){const t=[],i=[],r=[],s=Math.max(e.matched.length,n.matched.length);for(let o=0;o<s;o++){const a=e.matched[o];a&&(n.matched.find(c=>os(c,a))?i.push(a):t.push(a));const l=n.matched[o];l&&(e.matched.find(c=>os(c,l))||r.push(l))}return[t,i,r]}function eT(){return Sn(_l)}function s0(n){return Sn(Xf)}const o0=/^[a-z0-9]+(-[a-z0-9]+)*$/,vl=(n,e,t,i="")=>{const r=n.split(":");if(n.slice(0,1)==="@"){if(r.length<2||r.length>3)return null;i=r.shift().slice(1)}if(r.length>3||!r.length)return null;if(r.length>1){const a=r.pop(),l=r.pop(),c={provider:r.length>0?r[0]:i,prefix:l,name:a};return e&&!wa(c)?null:c}const s=r[0],o=s.split("-");if(o.length>1){const a={provider:i,prefix:o.shift(),name:o.join("-")};return e&&!wa(a)?null:a}if(t&&i===""){const a={provider:i,prefix:"",name:s};return e&&!wa(a,t)?null:a}return null},wa=(n,e)=>n?!!((e&&n.prefix===""||n.prefix)&&n.name):!1,a0=Object.freeze({left:0,top:0,width:16,height:16}),qa=Object.freeze({rotate:0,vFlip:!1,hFlip:!1}),xl=Object.freeze({...a0,...qa}),hu=Object.freeze({...xl,body:"",hidden:!1});function tT(n,e){const t={};!n.hFlip!=!e.hFlip&&(t.hFlip=!0),!n.vFlip!=!e.vFlip&&(t.vFlip=!0);const i=((n.rotate||0)+(e.rotate||0))%4;return i&&(t.rotate=i),t}function Hd(n,e){const t=tT(n,e);for(const i in hu)i in qa?i in n&&!(i in t)&&(t[i]=qa[i]):i in e?t[i]=e[i]:i in n&&(t[i]=n[i]);return t}function nT(n,e){const t=n.icons,i=n.aliases||Object.create(null),r=Object.create(null);function s(o){if(t[o])return r[o]=[];if(!(o in r)){r[o]=null;const a=i[o]&&i[o].parent,l=a&&s(a);l&&(r[o]=[a].concat(l))}return r[o]}return Object.keys(t).concat(Object.keys(i)).forEach(s),r}function iT(n,e,t){const i=n.icons,r=n.aliases||Object.create(null);let s={};function o(a){s=Hd(i[a]||r[a],s)}return o(e),t.forEach(o),Hd(n,s)}function l0(n,e){const t=[];if(typeof n!="object"||typeof n.icons!="object")return t;n.not_found instanceof Array&&n.not_found.forEach(r=>{e(r,null),t.push(r)});const i=nT(n);for(const r in i){const s=i[r];s&&(e(r,iT(n,r,s)),t.push(r))}return t}const rT={provider:"",aliases:{},not_found:{},...a0};function Ql(n,e){for(const t in e)if(t in n&&typeof n[t]!=typeof e[t])return!1;return!0}function c0(n){if(typeof n!="object"||n===null)return null;const e=n;if(typeof e.prefix!="string"||!n.icons||typeof n.icons!="object"||!Ql(n,rT))return null;const t=e.icons;for(const r in t){const s=t[r];if(!r||typeof s.body!="string"||!Ql(s,hu))return null}const i=e.aliases||Object.create(null);for(const r in i){const s=i[r],o=s.parent;if(!r||typeof o!="string"||!t[o]&&!i[o]||!Ql(s,hu))return null}return e}const zd=Object.create(null);function sT(n,e){return{provider:n,prefix:e,icons:Object.create(null),missing:new Set}}function br(n,e){const t=zd[n]||(zd[n]=Object.create(null));return t[e]||(t[e]=sT(n,e))}function jf(n,e){return c0(e)?l0(e,(t,i)=>{i?n.icons[t]=i:n.missing.add(t)}):[]}function oT(n,e,t){try{if(typeof t.body=="string")return n.icons[e]={...t},!0}catch{}return!1}let yo=!1;function u0(n){return typeof n=="boolean"&&(yo=n),yo}function aT(n){const e=typeof n=="string"?vl(n,!0,yo):n;if(e){const t=br(e.provider,e.prefix),i=e.name;return t.icons[i]||(t.missing.has(i)?null:void 0)}}function lT(n,e){const t=vl(n,!0,yo);if(!t)return!1;const i=br(t.provider,t.prefix);return e?oT(i,t.name,e):(i.missing.add(t.name),!0)}function cT(n,e){if(typeof n!="object")return!1;if(typeof e!="string"&&(e=n.provider||""),yo&&!e&&!n.prefix){let r=!1;return c0(n)&&(n.prefix="",l0(n,(s,o)=>{lT(s,o)&&(r=!0)})),r}const t=n.prefix;if(!wa({prefix:t,name:"a"}))return!1;const i=br(e,t);return!!jf(i,n)}const f0=Object.freeze({width:null,height:null}),h0=Object.freeze({...f0,...qa}),uT=/(-?[0-9.]*[0-9]+[0-9.]*)/g,fT=/^-?[0-9.]*[0-9]+[0-9.]*$/g;function Vd(n,e,t){if(e===1)return n;if(t=t||100,typeof n=="number")return Math.ceil(n*e*t)/t;if(typeof n!="string")return n;const i=n.split(uT);if(i===null||!i.length)return n;const r=[];let s=i.shift(),o=fT.test(s);for(;;){if(o){const a=parseFloat(s);isNaN(a)?r.push(s):r.push(Math.ceil(a*e*t)/t)}else r.push(s);if(s=i.shift(),s===void 0)return r.join("");o=!o}}function hT(n,e="defs"){let t="";const i=n.indexOf("<"+e);for(;i>=0;){const r=n.indexOf(">",i),s=n.indexOf("</"+e);if(r===-1||s===-1)break;const o=n.indexOf(">",s);if(o===-1)break;t+=n.slice(r+1,s).trim(),n=n.slice(0,i).trim()+n.slice(o+1)}return{defs:t,content:n}}function dT(n,e){return n?"<defs>"+n+"</defs>"+e:e}function pT(n,e,t){const i=hT(n);return dT(i.defs,e+i.content+t)}const mT=n=>n==="unset"||n==="undefined"||n==="none";function gT(n,e){const t={...xl,...n},i={...h0,...e},r={left:t.left,top:t.top,width:t.width,height:t.height};let s=t.body;[t,i].forEach(_=>{const m=[],p=_.hFlip,b=_.vFlip;let y=_.rotate;p?b?y+=2:(m.push("translate("+(r.width+r.left).toString()+" "+(0-r.top).toString()+")"),m.push("scale(-1 1)"),r.top=r.left=0):b&&(m.push("translate("+(0-r.left).toString()+" "+(r.height+r.top).toString()+")"),m.push("scale(1 -1)"),r.top=r.left=0);let v;switch(y<0&&(y-=Math.floor(y/4)*4),y=y%4,y){case 1:v=r.height/2+r.top,m.unshift("rotate(90 "+v.toString()+" "+v.toString()+")");break;case 2:m.unshift("rotate(180 "+(r.width/2+r.left).toString()+" "+(r.height/2+r.top).toString()+")");break;case 3:v=r.width/2+r.left,m.unshift("rotate(-90 "+v.toString()+" "+v.toString()+")");break}y%2===1&&(r.left!==r.top&&(v=r.left,r.left=r.top,r.top=v),r.width!==r.height&&(v=r.width,r.width=r.height,r.height=v)),m.length&&(s=pT(s,'<g transform="'+m.join(" ")+'">',"</g>"))});const o=i.width,a=i.height,l=r.width,c=r.height;let u,f;o===null?(f=a===null?"1em":a==="auto"?c:a,u=Vd(f,l/c)):(u=o==="auto"?l:o,f=a===null?Vd(u,c/l):a==="auto"?c:a);const h={},d=(_,m)=>{mT(m)||(h[_]=m.toString())};d("width",u),d("height",f);const g=[r.left,r.top,l,c];return h.viewBox=g.join(" "),{attributes:h,viewBox:g,body:s}}const _T=/\sid="(\S+)"/g,vT="IconifyId"+Date.now().toString(16)+(Math.random()*16777216|0).toString(16);let xT=0;function yT(n,e=vT){const t=[];let i;for(;i=_T.exec(n);)t.push(i[1]);if(!t.length)return n;const r="suffix"+(Math.random()*16777216|Date.now()).toString(16);return t.forEach(s=>{const o=typeof e=="function"?e(s):e+(xT++).toString(),a=s.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");n=n.replace(new RegExp('([#;"])('+a+')([")]|\\.[a-z])',"g"),"$1"+o+r+"$3")}),n=n.replace(new RegExp(r,"g"),""),n}const du=Object.create(null);function MT(n,e){du[n]=e}function pu(n){return du[n]||du[""]}function qf(n){let e;if(typeof n.resources=="string")e=[n.resources];else if(e=n.resources,!(e instanceof Array)||!e.length)return null;return{resources:e,path:n.path||"/",maxURL:n.maxURL||500,rotate:n.rotate||750,timeout:n.timeout||5e3,random:n.random===!0,index:n.index||0,dataAfterTimeout:n.dataAfterTimeout!==!1}}const $f=Object.create(null),Ps=["https://api.simplesvg.com","https://api.unisvg.com"],Ra=[];for(;Ps.length>0;)Ps.length===1||Math.random()>.5?Ra.push(Ps.shift()):Ra.push(Ps.pop());$f[""]=qf({resources:["https://api.iconify.design"].concat(Ra)});function ST(n,e){const t=qf(e);return t===null?!1:($f[n]=t,!0)}function Yf(n){return $f[n]}const bT=()=>{let n;try{if(n=fetch,typeof n=="function")return n}catch{}};let Gd=bT();function ET(n,e){const t=Yf(n);if(!t)return 0;let i;if(!t.maxURL)i=0;else{let r=0;t.resources.forEach(o=>{r=Math.max(r,o.length)});const s=e+".json?icons=";i=t.maxURL-r-t.path.length-s.length}return i}function TT(n){return n===404}const AT=(n,e,t)=>{const i=[],r=ET(n,e),s="icons";let o={type:s,provider:n,prefix:e,icons:[]},a=0;return t.forEach((l,c)=>{a+=l.length+1,a>=r&&c>0&&(i.push(o),o={type:s,provider:n,prefix:e,icons:[]},a=l.length),o.icons.push(l)}),i.push(o),i};function wT(n){if(typeof n=="string"){const e=Yf(n);if(e)return e.path}return"/"}const RT=(n,e,t)=>{if(!Gd){t("abort",424);return}let i=wT(e.provider);switch(e.type){case"icons":{const s=e.prefix,a=e.icons.join(","),l=new URLSearchParams({icons:a});i+=s+".json?"+l.toString();break}case"custom":{const s=e.uri;i+=s.slice(0,1)==="/"?s.slice(1):s;break}default:t("abort",400);return}let r=503;Gd(n+i).then(s=>{const o=s.status;if(o!==200){setTimeout(()=>{t(TT(o)?"abort":"next",o)});return}return r=501,s.json()}).then(s=>{if(typeof s!="object"||s===null){setTimeout(()=>{s===404?t("abort",s):t("next",r)});return}setTimeout(()=>{t("success",s)})}).catch(()=>{t("next",r)})},CT={prepare:AT,send:RT};function PT(n){const e={loaded:[],missing:[],pending:[]},t=Object.create(null);n.sort((r,s)=>r.provider!==s.provider?r.provider.localeCompare(s.provider):r.prefix!==s.prefix?r.prefix.localeCompare(s.prefix):r.name.localeCompare(s.name));let i={provider:"",prefix:"",name:""};return n.forEach(r=>{if(i.name===r.name&&i.prefix===r.prefix&&i.provider===r.provider)return;i=r;const s=r.provider,o=r.prefix,a=r.name,l=t[s]||(t[s]=Object.create(null)),c=l[o]||(l[o]=br(s,o));let u;a in c.icons?u=e.loaded:o===""||c.missing.has(a)?u=e.missing:u=e.pending;const f={provider:s,prefix:o,name:a};u.push(f)}),e}function d0(n,e){n.forEach(t=>{const i=t.loaderCallbacks;i&&(t.loaderCallbacks=i.filter(r=>r.id!==e))})}function IT(n){n.pendingCallbacksFlag||(n.pendingCallbacksFlag=!0,setTimeout(()=>{n.pendingCallbacksFlag=!1;const e=n.loaderCallbacks?n.loaderCallbacks.slice(0):[];if(!e.length)return;let t=!1;const i=n.provider,r=n.prefix;e.forEach(s=>{const o=s.icons,a=o.pending.length;o.pending=o.pending.filter(l=>{if(l.prefix!==r)return!0;const c=l.name;if(n.icons[c])o.loaded.push({provider:i,prefix:r,name:c});else if(n.missing.has(c))o.missing.push({provider:i,prefix:r,name:c});else return t=!0,!0;return!1}),o.pending.length!==a&&(t||d0([n],s.id),s.callback(o.loaded.slice(0),o.missing.slice(0),o.pending.slice(0),s.abort))})}))}let LT=0;function DT(n,e,t){const i=LT++,r=d0.bind(null,t,i);if(!e.pending.length)return r;const s={id:i,icons:e,callback:n,abort:r};return t.forEach(o=>{(o.loaderCallbacks||(o.loaderCallbacks=[])).push(s)}),r}function NT(n,e=!0,t=!1){const i=[];return n.forEach(r=>{const s=typeof r=="string"?vl(r,e,t):r;s&&i.push(s)}),i}var UT={resources:[],index:0,timeout:2e3,rotate:750,random:!1,dataAfterTimeout:!1};function OT(n,e,t,i){const r=n.resources.length,s=n.random?Math.floor(Math.random()*r):n.index;let o;if(n.random){let w=n.resources.slice(0);for(o=[];w.length>1;){const C=Math.floor(Math.random()*w.length);o.push(w[C]),w=w.slice(0,C).concat(w.slice(C+1))}o=o.concat(w)}else o=n.resources.slice(s).concat(n.resources.slice(0,s));const a=Date.now();let l="pending",c=0,u,f=null,h=[],d=[];typeof i=="function"&&d.push(i);function g(){f&&(clearTimeout(f),f=null)}function _(){l==="pending"&&(l="aborted"),g(),h.forEach(w=>{w.status==="pending"&&(w.status="aborted")}),h=[]}function m(w,C){C&&(d=[]),typeof w=="function"&&d.push(w)}function p(){return{startTime:a,payload:e,status:l,queriesSent:c,queriesPending:h.length,subscribe:m,abort:_}}function b(){l="failed",d.forEach(w=>{w(void 0,u)})}function y(){h.forEach(w=>{w.status==="pending"&&(w.status="aborted")}),h=[]}function v(w,C,D){const T=C!=="success";switch(h=h.filter(M=>M!==w),l){case"pending":break;case"failed":if(T||!n.dataAfterTimeout)return;break;default:return}if(C==="abort"){u=D,b();return}if(T){u=D,h.length||(o.length?P():b());return}if(g(),y(),!n.random){const M=n.resources.indexOf(w.resource);M!==-1&&M!==n.index&&(n.index=M)}l="completed",d.forEach(M=>{M(D)})}function P(){if(l!=="pending")return;g();const w=o.shift();if(w===void 0){if(h.length){f=setTimeout(()=>{g(),l==="pending"&&(y(),b())},n.timeout);return}b();return}const C={status:"pending",resource:w,callback:(D,T)=>{v(C,D,T)}};h.push(C),c++,f=setTimeout(P,n.rotate),t(w,e,C.callback)}return setTimeout(P),p}function p0(n){const e={...UT,...n};let t=[];function i(){t=t.filter(a=>a().status==="pending")}function r(a,l,c){const u=OT(e,a,l,(f,h)=>{i(),c&&c(f,h)});return t.push(u),u}function s(a){return t.find(l=>a(l))||null}return{query:r,find:s,setIndex:a=>{e.index=a},getIndex:()=>e.index,cleanup:i}}function Wd(){}const ec=Object.create(null);function FT(n){if(!ec[n]){const e=Yf(n);if(!e)return;const t=p0(e),i={config:e,redundancy:t};ec[n]=i}return ec[n]}function BT(n,e,t){let i,r;if(typeof n=="string"){const s=pu(n);if(!s)return t(void 0,424),Wd;r=s.send;const o=FT(n);o&&(i=o.redundancy)}else{const s=qf(n);if(s){i=p0(s);const o=n.resources?n.resources[0]:"",a=pu(o);a&&(r=a.send)}}return!i||!r?(t(void 0,424),Wd):i.query(e,r,t)().abort}const Xd="iconify2",Mo="iconify",m0=Mo+"-count",jd=Mo+"-version",g0=36e5,kT=168,HT=50;function mu(n,e){try{return n.getItem(e)}catch{}}function Kf(n,e,t){try{return n.setItem(e,t),!0}catch{}}function qd(n,e){try{n.removeItem(e)}catch{}}function gu(n,e){return Kf(n,m0,e.toString())}function _u(n){return parseInt(mu(n,m0))||0}const yl={local:!0,session:!0},_0={local:new Set,session:new Set};let Zf=!1;function zT(n){Zf=n}let Xo=typeof window>"u"?{}:window;function v0(n){const e=n+"Storage";try{if(Xo&&Xo[e]&&typeof Xo[e].length=="number")return Xo[e]}catch{}yl[n]=!1}function x0(n,e){const t=v0(n);if(!t)return;const i=mu(t,jd);if(i!==Xd){if(i){const a=_u(t);for(let l=0;l<a;l++)qd(t,Mo+l.toString())}Kf(t,jd,Xd),gu(t,0);return}const r=Math.floor(Date.now()/g0)-kT,s=a=>{const l=Mo+a.toString(),c=mu(t,l);if(typeof c=="string"){try{const u=JSON.parse(c);if(typeof u=="object"&&typeof u.cached=="number"&&u.cached>r&&typeof u.provider=="string"&&typeof u.data=="object"&&typeof u.data.prefix=="string"&&e(u,a))return!0}catch{}qd(t,l)}};let o=_u(t);for(let a=o-1;a>=0;a--)s(a)||(a===o-1?(o--,gu(t,o)):_0[n].add(a))}function y0(){if(!Zf){zT(!0);for(const n in yl)x0(n,e=>{const t=e.data,i=e.provider,r=t.prefix,s=br(i,r);if(!jf(s,t).length)return!1;const o=t.lastModified||-1;return s.lastModifiedCached=s.lastModifiedCached?Math.min(s.lastModifiedCached,o):o,!0})}}function VT(n,e){const t=n.lastModifiedCached;if(t&&t>=e)return t===e;if(n.lastModifiedCached=e,t)for(const i in yl)x0(i,r=>{const s=r.data;return r.provider!==n.provider||s.prefix!==n.prefix||s.lastModified===e});return!0}function GT(n,e){Zf||y0();function t(i){let r;if(!yl[i]||!(r=v0(i)))return;const s=_0[i];let o;if(s.size)s.delete(o=Array.from(s).shift());else if(o=_u(r),o>=HT||!gu(r,o+1))return;const a={cached:Math.floor(Date.now()/g0),provider:n.provider,data:e};return Kf(r,Mo+o.toString(),JSON.stringify(a))}e.lastModified&&!VT(n,e.lastModified)||Object.keys(e.icons).length&&(e.not_found&&(e=Object.assign({},e),delete e.not_found),t("local")||t("session"))}function $d(){}function WT(n){n.iconsLoaderFlag||(n.iconsLoaderFlag=!0,setTimeout(()=>{n.iconsLoaderFlag=!1,IT(n)}))}function XT(n){const e=[],t=[];return n.forEach(i=>{(i.match(o0)?e:t).push(i)}),{valid:e,invalid:t}}function Is(n,e,t,i){function r(){const s=n.pendingIcons;e.forEach(o=>{s&&s.delete(o),n.icons[o]||n.missing.add(o)})}if(t&&typeof t=="object")try{if(!jf(n,t).length){r();return}i&&GT(n,t)}catch(s){console.error(s)}r(),WT(n)}function Yd(n,e){n instanceof Promise?n.then(t=>{e(t)}).catch(()=>{e(null)}):e(n)}function jT(n,e){n.iconsToLoad?n.iconsToLoad=n.iconsToLoad.concat(e).sort():n.iconsToLoad=e,n.iconsQueueFlag||(n.iconsQueueFlag=!0,setTimeout(()=>{n.iconsQueueFlag=!1;const{provider:t,prefix:i}=n,r=n.iconsToLoad;if(delete n.iconsToLoad,!r||!r.length)return;const s=n.loadIcon;if(n.loadIcons&&(r.length>1||!s)){Yd(n.loadIcons(r,i,t),u=>{Is(n,r,u,!1)});return}if(s){r.forEach(u=>{const f=s(u,i,t);Yd(f,h=>{const d=h?{prefix:i,icons:{[u]:h}}:null;Is(n,[u],d,!1)})});return}const{valid:o,invalid:a}=XT(r);if(a.length&&Is(n,a,null,!1),!o.length)return;const l=i.match(o0)?pu(t):null;if(!l){Is(n,o,null,!1);return}l.prepare(t,i,o).forEach(u=>{BT(t,u,f=>{Is(n,u.icons,f,!0)})})}))}const qT=(n,e)=>{const t=NT(n,!0,u0()),i=PT(t);if(!i.pending.length){let l=!0;return e&&setTimeout(()=>{l&&e(i.loaded,i.missing,i.pending,$d)}),()=>{l=!1}}const r=Object.create(null),s=[];let o,a;return i.pending.forEach(l=>{const{provider:c,prefix:u}=l;if(u===a&&c===o)return;o=c,a=u,s.push(br(c,u));const f=r[c]||(r[c]=Object.create(null));f[u]||(f[u]=[])}),i.pending.forEach(l=>{const{provider:c,prefix:u,name:f}=l,h=br(c,u),d=h.pendingIcons||(h.pendingIcons=new Set);d.has(f)||(d.add(f),r[c][u].push(f))}),s.forEach(l=>{const c=r[l.provider][l.prefix];c.length&&jT(l,c)}),e?DT(e,i,s):$d};function $T(n,e){const t={...n};for(const i in e){const r=e[i],s=typeof r;i in f0?(r===null||r&&(s==="string"||s==="number"))&&(t[i]=r):s===typeof t[i]&&(t[i]=i==="rotate"?r%4:r)}return t}const YT=/[\s,]+/;function KT(n,e){e.split(YT).forEach(t=>{switch(t.trim()){case"horizontal":n.hFlip=!0;break;case"vertical":n.vFlip=!0;break}})}function ZT(n,e=0){const t=n.replace(/^-?[0-9.]*/,"");function i(r){for(;r<0;)r+=4;return r%4}if(t===""){const r=parseInt(n);return isNaN(r)?0:i(r)}else if(t!==n){let r=0;switch(t){case"%":r=25;break;case"deg":r=90}if(r){let s=parseFloat(n.slice(0,n.length-t.length));return isNaN(s)?0:(s=s/r,s%1===0?i(s):0)}}return e}function JT(n,e){let t=n.indexOf("xlink:")===-1?"":' xmlns:xlink="http://www.w3.org/1999/xlink"';for(const i in e)t+=" "+i+'="'+e[i]+'"';return'<svg xmlns="http://www.w3.org/2000/svg"'+t+">"+n+"</svg>"}function QT(n){return n.replace(/"/g,"'").replace(/%/g,"%25").replace(/#/g,"%23").replace(/</g,"%3C").replace(/>/g,"%3E").replace(/\s+/g," ")}function eA(n){return"data:image/svg+xml,"+QT(n)}function tA(n){return'url("'+eA(n)+'")'}const Kd={...h0,inline:!1},nA={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","aria-hidden":!0,role:"img"},iA={display:"inline-block"},vu={backgroundColor:"currentColor"},M0={backgroundColor:"transparent"},Zd={Image:"var(--svg)",Repeat:"no-repeat",Size:"100% 100%"},Jd={webkitMask:vu,mask:vu,background:M0};for(const n in Jd){const e=Jd[n];for(const t in Zd)e[n+t]=Zd[t]}const Ca={};["horizontal","vertical"].forEach(n=>{const e=n.slice(0,1)+"Flip";Ca[n+"-flip"]=e,Ca[n.slice(0,1)+"-flip"]=e,Ca[n+"Flip"]=e});function Qd(n){return n+(n.match(/^[-0-9.]+$/)?"px":"")}const ep=(n,e)=>{const t=$T(Kd,e),i={...nA},r=e.mode||"svg",s={},o=e.style,a=typeof o=="object"&&!(o instanceof Array)?o:{};for(let _ in e){const m=e[_];if(m!==void 0)switch(_){case"icon":case"style":case"onLoad":case"mode":case"ssr":break;case"inline":case"hFlip":case"vFlip":t[_]=m===!0||m==="true"||m===1;break;case"flip":typeof m=="string"&&KT(t,m);break;case"color":s.color=m;break;case"rotate":typeof m=="string"?t[_]=ZT(m):typeof m=="number"&&(t[_]=m);break;case"ariaHidden":case"aria-hidden":m!==!0&&m!=="true"&&delete i["aria-hidden"];break;default:{const p=Ca[_];p?(m===!0||m==="true"||m===1)&&(t[p]=!0):Kd[_]===void 0&&(i[_]=m)}}}const l=gT(n,t),c=l.attributes;if(t.inline&&(s.verticalAlign="-0.125em"),r==="svg"){i.style={...s,...a},Object.assign(i,c);let _=0,m=e.id;return typeof m=="string"&&(m=m.replace(/-/g,"_")),i.innerHTML=yT(l.body,m?()=>m+"ID"+_++:"iconifyVue"),Sr("svg",i)}const{body:u,width:f,height:h}=n,d=r==="mask"||(r==="bg"?!1:u.indexOf("currentColor")!==-1),g=JT(u,{...c,width:f+"",height:h+""});return i.style={...s,"--svg":tA(g),width:Qd(c.width),height:Qd(c.height),...iA,...d?vu:M0,...a},Sr("span",i)};u0(!0);MT("",CT);if(typeof document<"u"&&typeof window<"u"){y0();const n=window;if(n.IconifyPreload!==void 0){const e=n.IconifyPreload,t="Invalid IconifyPreload syntax.";typeof e=="object"&&e!==null&&(e instanceof Array?e:[e]).forEach(i=>{try{(typeof i!="object"||i===null||i instanceof Array||typeof i.icons!="object"||typeof i.prefix!="string"||!cT(i))&&console.error(t)}catch{console.error(t)}})}if(n.IconifyProviders!==void 0){const e=n.IconifyProviders;if(typeof e=="object"&&e!==null)for(let t in e){const i="IconifyProviders["+t+"] is invalid.";try{const r=e[t];if(typeof r!="object"||!r||r.resources===void 0)continue;ST(t,r)||console.error(i)}catch{console.error(i)}}}}const rA={...xl,body:""},xu=Yn({inheritAttrs:!1,data(){return{_name:"",_loadingIcon:null,iconMounted:!1,counter:0}},mounted(){this.iconMounted=!0},unmounted(){this.abortLoading()},methods:{abortLoading(){this._loadingIcon&&(this._loadingIcon.abort(),this._loadingIcon=null)},getIcon(n,e,t){if(typeof n=="object"&&n!==null&&typeof n.body=="string")return this._name="",this.abortLoading(),{data:n};let i;if(typeof n!="string"||(i=vl(n,!1,!0))===null)return this.abortLoading(),null;let r=aT(i);if(!r)return(!this._loadingIcon||this._loadingIcon.name!==n)&&(this.abortLoading(),this._name="",r!==null&&(this._loadingIcon={name:n,abort:qT([i],()=>{this.counter++})})),null;if(this.abortLoading(),this._name!==n&&(this._name=n,e&&e(n)),t){r=Object.assign({},r);const o=t(r.body,i.name,i.prefix,i.provider);typeof o=="string"&&(r.body=o)}const s=["iconify"];return i.prefix!==""&&s.push("iconify--"+i.prefix),i.provider!==""&&s.push("iconify--"+i.provider),{data:r,classes:s}}},render(){this.counter;const n=this.$attrs,e=this.iconMounted||n.ssr?this.getIcon(n.icon,n.onLoad,n.customise):null;if(!e)return ep(rA,n);let t=n;return e.classes&&(t={...n,class:(typeof n.class=="string"?n.class+" ":"")+e.classes.join(" ")}),ep({...xl,...e.data},t)}}),sA={class:"container"},oA={style:{display:"flex",height:"100%",background:"var(--bg-color)",transition:"all var(--transition-time)"}},aA={style:{display:"flex",flex:"1 1 auto","flex-direction":"column",gap:"2em",padding:"1em"}},lA=Yn({__name:"NavBar",emits:["close"],setup(n,{emit:e}){const t=e;function i(r){var s;(s=document.getElementById(r))==null||s.scrollIntoView({behavior:"smooth"}),t("close")}return(r,s)=>(Bt(),hn("div",sA,[Fe("div",oA,[s[5]||(s[5]=Fe("div",{class:"border"},null,-1)),Fe("div",aA,[Fe("p",{class:"link",onClick:s[0]||(s[0]=()=>i("about"))}," About "),Fe("p",{class:"link",onClick:s[1]||(s[1]=()=>i("projects"))}," Projects "),Fe("p",{class:"link",onClick:s[2]||(s[2]=()=>i("contact"))}," Contact "),Fe("a",{class:"link",target:"_blank",rel:"noopener noreferrer",href:"https://www.linkedin.com/in/jcredmond/",style:{"text-decoration":"none"},onClick:s[3]||(s[3]=()=>t("close"))}," Resume ")]),yt(Tt(xu),{icon:"material-symbols:close",class:"icon",width:"2em",style:{padding:"1em"},onClick:s[4]||(s[4]=o=>t("close"))})])]))}}),cA=Do(lA,[["__scopeId","data-v-97f6be2a"]]);var tc={},Ls={},tp;function uA(){if(tp)return Ls;tp=1,Object.defineProperty(Ls,"__esModule",{value:!0}),Ls.makeNoise2D=void 0;var n=(3-Math.sqrt(3))/6,e=[[1,1],[-1,1],[1,-1],[-1,-1],[1,0],[-1,0],[1,0],[-1,0],[0,1],[0,-1],[0,1],[0,-1]];function t(i){i===void 0&&(i=Math.random);for(var r=new Uint8Array(256),s=0;s<256;s++)r[s]=s;for(var o,a,s=255;s>0;s--)o=Math.floor((s+1)*i()),a=r[s],r[s]=r[o],r[o]=a;for(var l=new Uint8Array(512),c=new Uint8Array(512),s=0;s<512;s++)l[s]=r[s&255],c[s]=l[s]%12;return function(u,f){var h=(u+f)*.5*(Math.sqrt(3)-1),d=Math.floor(u+h),g=Math.floor(f+h),_=(d+g)*n,m=d-_,p=g-_,b=u-m,y=f-p,v=b>y?1:0,P=b>y?0:1,w=b-v+n,C=y-P+n,D=b-1+2*n,T=y-1+2*n,M=d&255,L=g&255,U=e[c[M+l[L]]],O=e[c[M+v+l[L+P]]],W=e[c[M+1+l[L+1]]],Q=.5-b*b-y*y,j=Q<0?0:Math.pow(Q,4)*(U[0]*b+U[1]*y),ee=.5-w*w-C*C,z=ee<0?0:Math.pow(ee,4)*(O[0]*w+O[1]*C),de=.5-D*D-T*T,_e=de<0?0:Math.pow(de,4)*(W[0]*D+W[1]*T);return 70.14805770653952*(j+z+_e)}}return Ls.makeNoise2D=t,Ls}var Ds={},np;function fA(){if(np)return Ds;np=1,Object.defineProperty(Ds,"__esModule",{value:!0}),Ds.makeNoise3D=void 0;var n=1/6,e=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,-1],[0,1,-1],[0,-1,-1]];function t(i){i===void 0&&(i=Math.random);for(var r=new Uint8Array(256),s=0;s<256;s++)r[s]=s;for(var o,a,s=255;s>0;s--)o=Math.floor((s+1)*i()),a=r[s],r[s]=r[o],r[o]=a;for(var l=new Uint8Array(512),c=new Uint8Array(512),s=0;s<512;s++)l[s]=r[s&255],c[s]=l[s]%12;return function(u,f,h){var d=(u+f+h)/3,g=Math.floor(u+d),_=Math.floor(f+d),m=Math.floor(h+d),p=(g+_+m)*n,b=g-p,y=_-p,v=m-p,P=u-b,w=f-y,C=h-v,D,T,M,L,U,O;P>=w?w>=C?(D=L=U=1,T=M=O=0):P>=C?(D=L=O=1,T=M=U=0):(M=L=O=1,D=T=U=0):w<C?(M=U=O=1,D=T=L=0):P<C?(T=U=O=1,D=M=L=0):(T=L=U=1,D=M=O=0);var W=P-D+n,Q=w-T+n,j=C-M+n,ee=P-L+2*n,z=w-U+2*n,de=C-O+2*n,_e=P-1+3*n,Ee=w-1+3*n,Ce=C-1+3*n,Xe=g&255,re=_&255,he=m&255,ye=e[c[Xe+l[re+l[he]]]],F=e[c[Xe+D+l[re+T+l[he+M]]]],oe=e[c[Xe+L+l[re+U+l[he+O]]]],se=e[c[Xe+1+l[re+1+l[he+1]]]],ue=.5-P*P-w*w-C*C,Ie=ue<0?0:Math.pow(ue,4)*(ye[0]*P+ye[1]*w+ye[2]*C),R=.5-W*W-Q*Q-j*j,I=R<0?0:Math.pow(R,4)*(F[0]*W+F[1]*Q+F[2]*j),S=.5-ee*ee-z*z-de*de,te=S<0?0:Math.pow(S,4)*(oe[0]*ee+oe[1]*z+oe[2]*de),Y=.5-_e*_e-Ee*Ee-Ce*Ce,q=Y<0?0:Math.pow(Y,4)*(se[0]*_e+se[1]*Ee+se[2]*Ce);return 94.68493150681972*(Ie+I+te+q)}}return Ds.makeNoise3D=t,Ds}var Ns={},ip;function hA(){if(ip)return Ns;ip=1,Object.defineProperty(Ns,"__esModule",{value:!0}),Ns.makeNoise4D=void 0;var n=(5-Math.sqrt(5))/20,e=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]];function t(i){i===void 0&&(i=Math.random);for(var r=new Uint8Array(256),s=0;s<256;s++)r[s]=s;for(var o,a,s=255;s>0;s--)o=Math.floor((s+1)*i()),a=r[s],r[s]=r[o],r[o]=a;for(var l=new Uint8Array(512),c=new Uint8Array(512),s=0;s<512;s++)l[s]=r[s&255],c[s]=l[s]%12;return function(u,f,h,d){var g=(u+f+h+d)*(Math.sqrt(5)-1)/4,_=Math.floor(u+g),m=Math.floor(f+g),p=Math.floor(h+g),b=Math.floor(d+g),y=(_+m+p+b)*n,v=_-y,P=m-y,w=p-y,C=b-y,D=u-v,T=f-P,M=h-w,L=d-C,U=0,O=0,W=0,Q=0;D>T?U++:O++,D>M?U++:W++,D>L?U++:Q++,T>M?O++:W++,T>L?O++:Q++,M>L?W++:Q++;var j=U>=3?1:0,ee=O>=3?1:0,z=W>=3?1:0,de=Q>=3?1:0,_e=U>=2?1:0,Ee=O>=2?1:0,Ce=W>=2?1:0,Xe=Q>=2?1:0,re=U>=1?1:0,he=O>=1?1:0,ye=W>=1?1:0,F=Q>=1?1:0,oe=D-j+n,se=T-ee+n,ue=M-z+n,Ie=L-de+n,R=D-_e+2*n,I=T-Ee+2*n,S=M-Ce+2*n,te=L-Xe+2*n,Y=D-re+3*n,q=T-he+3*n,ne=M-ye+3*n,ae=L-F+3*n,J=D-1+4*n,E=T-1+4*n,x=M-1+4*n,N=L-1+4*n,G=_&255,$=m&255,X=p&255,me=b&255,ce=e[l[G+l[$+l[X+l[me]]]]%32],ge=e[l[G+j+l[$+ee+l[X+z+l[me+de]]]]%32],Le=e[l[G+_e+l[$+Ee+l[X+Ce+l[me+Xe]]]]%32],fe=e[l[G+re+l[$+he+l[X+ye+l[me+F]]]]%32],xe=e[l[G+1+l[$+1+l[X+1+l[me+1]]]]%32],Pe=.5-D*D-T*T-M*M-L*L,Oe=Pe<0?0:Math.pow(Pe,4)*(ce[0]*D+ce[1]*T+ce[2]*M+ce[3]*L),ve=.5-oe*oe-se*se-ue*ue-Ie*Ie,Be=ve<0?0:Math.pow(ve,4)*(ge[0]*oe+ge[1]*se+ge[2]*ue+ge[3]*Ie),ze=.5-R*R-I*I-S*S-te*te,ht=ze<0?0:Math.pow(ze,4)*(Le[0]*R+Le[1]*I+Le[2]*S+Le[3]*te),B=.5-Y*Y-q*q-ne*ne-ae*ae,Se=B<0?0:Math.pow(B,4)*(fe[0]*Y+fe[1]*q+fe[2]*ne+fe[3]*ae),ie=.5-J*J-E*E-x*x-N*N,le=ie<0?0:Math.pow(ie,4)*(xe[0]*J+xe[1]*E+xe[2]*x+xe[3]*N);return 72.37855765153665*(Oe+Be+ht+Se+le)}}return Ns.makeNoise4D=t,Ns}var rp;function dA(){return rp||(rp=1,(function(n){Object.defineProperty(n,"__esModule",{value:!0}),n.makeNoise4D=n.makeNoise3D=n.makeNoise2D=void 0;var e=uA();Object.defineProperty(n,"makeNoise2D",{enumerable:!0,get:function(){return e.makeNoise2D}});var t=fA();Object.defineProperty(n,"makeNoise3D",{enumerable:!0,get:function(){return t.makeNoise3D}});var i=hA();Object.defineProperty(n,"makeNoise4D",{enumerable:!0,get:function(){return i.makeNoise4D}})})(tc)),tc}var S0=dA();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Jf="171",pA=0,sp=1,mA=2,b0=1,gA=2,ui=3,yi=0,an=1,Xn=2,_i=0,ns=1,yu=2,op=3,ap=4,_A=5,_r=100,vA=101,xA=102,yA=103,MA=104,SA=200,bA=201,EA=202,TA=203,Mu=204,Su=205,AA=206,wA=207,RA=208,CA=209,PA=210,IA=211,LA=212,DA=213,NA=214,bu=0,Eu=1,Tu=2,ls=3,Au=4,wu=5,Ru=6,Cu=7,E0=0,UA=1,OA=2,Wi=0,T0=1,A0=2,w0=3,R0=4,FA=5,C0=6,P0=7,lp="attached",BA="detached",I0=300,cs=301,us=302,Pu=303,Iu=304,Ml=306,fs=1e3,ki=1001,$a=1002,Zt=1003,L0=1004,Xs=1005,pn=1006,Pa=1007,mi=1008,Mi=1009,D0=1010,N0=1011,So=1012,Qf=1013,Er=1014,In=1015,vi=1016,eh=1017,th=1018,hs=1020,U0=35902,O0=1021,F0=1022,yn=1023,B0=1024,k0=1025,is=1026,ds=1027,nh=1028,ih=1029,H0=1030,rh=1031,sh=1033,Ia=33776,La=33777,Da=33778,Na=33779,Lu=35840,Du=35841,Nu=35842,Uu=35843,Ou=36196,Fu=37492,Bu=37496,ku=37808,Hu=37809,zu=37810,Vu=37811,Gu=37812,Wu=37813,Xu=37814,ju=37815,qu=37816,$u=37817,Yu=37818,Ku=37819,Zu=37820,Ju=37821,Ua=36492,Qu=36494,ef=36495,z0=36283,tf=36284,nf=36285,rf=36286,bo=2300,Eo=2301,nc=2302,cp=2400,up=2401,fp=2402,kA=2500,HA=0,V0=1,sf=2,zA=3200,VA=3201,G0=0,GA=1,Fi="",Dt="srgb",Qt="srgb-linear",Ya="linear",ct="srgb",Pr=7680,hp=519,WA=512,XA=513,jA=514,W0=515,qA=516,$A=517,YA=518,KA=519,of=35044,dp="300 es",gi=2e3,Ka=2001;class Ms{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Ot=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let pp=1234567;const so=Math.PI/180,ps=180/Math.PI;function Dn(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ot[n&255]+Ot[n>>8&255]+Ot[n>>16&255]+Ot[n>>24&255]+"-"+Ot[e&255]+Ot[e>>8&255]+"-"+Ot[e>>16&15|64]+Ot[e>>24&255]+"-"+Ot[t&63|128]+Ot[t>>8&255]+"-"+Ot[t>>16&255]+Ot[t>>24&255]+Ot[i&255]+Ot[i>>8&255]+Ot[i>>16&255]+Ot[i>>24&255]).toLowerCase()}function Ze(n,e,t){return Math.max(e,Math.min(t,n))}function oh(n,e){return(n%e+e)%e}function ZA(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function JA(n,e,t){return n!==e?(t-n)/(e-n):0}function oo(n,e,t){return(1-t)*n+t*e}function QA(n,e,t,i){return oo(n,e,1-Math.exp(-t*i))}function ew(n,e=1){return e-Math.abs(oh(n,e*2)-e)}function tw(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function nw(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function iw(n,e){return n+Math.floor(Math.random()*(e-n+1))}function rw(n,e){return n+Math.random()*(e-n)}function sw(n){return n*(.5-Math.random())}function ow(n){n!==void 0&&(pp=n);let e=pp+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function aw(n){return n*so}function lw(n){return n*ps}function cw(n){return(n&n-1)===0&&n!==0}function uw(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function fw(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function hw(n,e,t,i,r){const s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+i)/2),u=o((e+i)/2),f=s((e-i)/2),h=o((e-i)/2),d=s((i-e)/2),g=o((i-e)/2);switch(r){case"XYX":n.set(a*u,l*f,l*h,a*c);break;case"YZY":n.set(l*h,a*u,l*f,a*c);break;case"ZXZ":n.set(l*f,l*h,a*u,a*c);break;case"XZX":n.set(a*u,l*g,l*d,a*c);break;case"YXY":n.set(l*d,a*u,l*g,a*c);break;case"ZYZ":n.set(l*g,l*d,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Cn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function ut(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const af={DEG2RAD:so,RAD2DEG:ps,generateUUID:Dn,clamp:Ze,euclideanModulo:oh,mapLinear:ZA,inverseLerp:JA,lerp:oo,damp:QA,pingpong:ew,smoothstep:tw,smootherstep:nw,randInt:iw,randFloat:rw,randFloatSpread:sw,seededRandom:ow,degToRad:aw,radToDeg:lw,isPowerOfTwo:cw,ceilPowerOfTwo:uw,floorPowerOfTwo:fw,setQuaternionFromProperEuler:hw,normalize:ut,denormalize:Cn};class Ue{constructor(e=0,t=0){Ue.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ze(this.x,e.x,t.x),this.y=Ze(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ze(this.x,e,t),this.y=Ze(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ze(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ze(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ye{constructor(e,t,i,r,s,o,a,l,c){Ye.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c)}set(e,t,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],f=i[7],h=i[2],d=i[5],g=i[8],_=r[0],m=r[3],p=r[6],b=r[1],y=r[4],v=r[7],P=r[2],w=r[5],C=r[8];return s[0]=o*_+a*b+l*P,s[3]=o*m+a*y+l*w,s[6]=o*p+a*v+l*C,s[1]=c*_+u*b+f*P,s[4]=c*m+u*y+f*w,s[7]=c*p+u*v+f*C,s[2]=h*_+d*b+g*P,s[5]=h*m+d*y+g*w,s[8]=h*p+d*v+g*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,h=a*l-u*s,d=c*s-o*l,g=t*f+i*h+r*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=f*_,e[1]=(r*c-u*i)*_,e[2]=(a*i-r*o)*_,e[3]=h*_,e[4]=(u*t-r*l)*_,e[5]=(r*s-a*t)*_,e[6]=d*_,e[7]=(i*l-c*t)*_,e[8]=(o*t-i*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(ic.makeScale(e,t)),this}rotate(e){return this.premultiply(ic.makeRotation(-e)),this}translate(e,t){return this.premultiply(ic.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ic=new Ye;function X0(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function To(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function dw(){const n=To("canvas");return n.style.display="block",n}const mp={};function $r(n){n in mp||(mp[n]=!0,console.warn(n))}function pw(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}function mw(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function gw(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const gp=new Ye().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),_p=new Ye().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function _w(){const n={enabled:!0,workingColorSpace:Qt,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===ct&&(r.r=xi(r.r),r.g=xi(r.g),r.b=xi(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ct&&(r.r=rs(r.r),r.g=rs(r.g),r.b=rs(r.b))),r},fromWorkingColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},toWorkingColorSpace:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Fi?Ya:this.spaces[r].transfer},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Qt]:{primaries:e,whitePoint:i,transfer:Ya,toXYZ:gp,fromXYZ:_p,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Dt},outputColorSpaceConfig:{drawingBufferColorSpace:Dt}},[Dt]:{primaries:e,whitePoint:i,transfer:ct,toXYZ:gp,fromXYZ:_p,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Dt}}}),n}const Qe=_w();function xi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function rs(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Ir;class vw{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ir===void 0&&(Ir=To("canvas")),Ir.width=e.width,Ir.height=e.height;const i=Ir.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Ir}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=To("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=xi(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(xi(t[i]/255)*255):t[i]=xi(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let xw=0;class j0{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:xw++}),this.uuid=Dn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(rc(r[o].image)):s.push(rc(r[o]))}else s=rc(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function rc(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?vw.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let yw=0;class Pt extends Ms{constructor(e=Pt.DEFAULT_IMAGE,t=Pt.DEFAULT_MAPPING,i=ki,r=ki,s=pn,o=mi,a=yn,l=Mi,c=Pt.DEFAULT_ANISOTROPY,u=Fi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:yw++}),this.uuid=Dn(),this.name="",this.source=new j0(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ue(0,0),this.repeat=new Ue(1,1),this.center=new Ue(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ye,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==I0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case fs:e.x=e.x-Math.floor(e.x);break;case ki:e.x=e.x<0?0:1;break;case $a:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case fs:e.y=e.y-Math.floor(e.y);break;case ki:e.y=e.y<0?0:1;break;case $a:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Pt.DEFAULT_IMAGE=null;Pt.DEFAULT_MAPPING=I0;Pt.DEFAULT_ANISOTROPY=1;class it{constructor(e=0,t=0,i=0,r=1){it.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],d=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(c+1)/2,v=(d+1)/2,P=(p+1)/2,w=(u+h)/4,C=(f+_)/4,D=(g+m)/4;return y>v&&y>P?y<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(y),r=w/i,s=C/i):v>P?v<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(v),i=w/r,s=D/r):P<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(P),i=C/s,r=D/s),this.set(i,r,s,t),this}let b=Math.sqrt((m-g)*(m-g)+(f-_)*(f-_)+(h-u)*(h-u));return Math.abs(b)<.001&&(b=1),this.x=(m-g)/b,this.y=(f-_)/b,this.z=(h-u)/b,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ze(this.x,e.x,t.x),this.y=Ze(this.y,e.y,t.y),this.z=Ze(this.z,e.z,t.z),this.w=Ze(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ze(this.x,e,t),this.y=Ze(this.y,e,t),this.z=Ze(this.z,e,t),this.w=Ze(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ze(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Mw extends Ms{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new it(0,0,e,t),this.scissorTest=!1,this.viewport=new it(0,0,e,t);const r={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:pn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new Pt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new j0(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Nn extends Mw{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class q0 extends Pt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Zt,this.minFilter=Zt,this.wrapR=ki,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Sw extends Pt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Zt,this.minFilter=Zt,this.wrapR=ki,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ki{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3];const h=s[o+0],d=s[o+1],g=s[o+2],_=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(a===1){e[t+0]=h,e[t+1]=d,e[t+2]=g,e[t+3]=_;return}if(f!==_||l!==h||c!==d||u!==g){let m=1-a;const p=l*h+c*d+u*g+f*_,b=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){const P=Math.sqrt(y),w=Math.atan2(P,p*b);m=Math.sin(m*w)/P,a=Math.sin(a*w)/P}const v=a*b;if(l=l*m+h*v,c=c*m+d*v,u=u*m+g*v,f=f*m+_*v,m===1-a){const P=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=P,c*=P,u*=P,f*=P}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[o],h=s[o+1],d=s[o+2],g=s[o+3];return e[t]=a*g+u*f+l*d-c*h,e[t+1]=l*g+u*h+c*f-a*d,e[t+2]=c*g+u*d+a*h-l*f,e[t+3]=u*g-a*f-l*h-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),f=a(s/2),h=l(i/2),d=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=h*u*f+c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f-h*d*g;break;case"YXZ":this._x=h*u*f+c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f+h*d*g;break;case"ZXY":this._x=h*u*f-c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f-h*d*g;break;case"ZYX":this._x=h*u*f-c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f+h*d*g;break;case"YZX":this._x=h*u*f+c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f-h*d*g;break;case"XZY":this._x=h*u*f-c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f+h*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],f=t[10],h=i+a+f;if(h>0){const d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(u-l)*d,this._y=(s-c)*d,this._z=(o-r)*d}else if(i>a&&i>f){const d=2*Math.sqrt(1+i-a-f);this._w=(u-l)/d,this._x=.25*d,this._y=(r+o)/d,this._z=(s+c)/d}else if(a>f){const d=2*Math.sqrt(1+a-i-f);this._w=(s-c)/d,this._x=(r+o)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+f-i-a);this._w=(o-r)/d,this._x=(s+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ze(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-t;return this._w=d*o+t*this._w,this._x=d*i+t*this._x,this._y=d*r+t*this._y,this._z=d*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=o*f+this._w*h,this._x=i*f+this._x*h,this._y=r*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class k{constructor(e=0,t=0,i=0){k.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(vp.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(vp.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*t-s*r),f=2*(s*i-o*t);return this.x=t+l*c+o*f-a*u,this.y=i+l*u+a*c-s*f,this.z=r+l*f+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ze(this.x,e.x,t.x),this.y=Ze(this.y,e.y,t.y),this.z=Ze(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ze(this.x,e,t),this.y=Ze(this.y,e,t),this.z=Ze(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ze(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return sc.copy(this).projectOnVector(e),this.sub(sc)}reflect(e){return this.sub(sc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ze(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const sc=new k,vp=new Ki;class bi{constructor(e=new k(1/0,1/0,1/0),t=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(An.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(An.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=An.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,An):An.fromBufferAttribute(s,o),An.applyMatrix4(e.matrixWorld),this.expandByPoint(An);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),jo.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),jo.copy(i.boundingBox)),jo.applyMatrix4(e.matrixWorld),this.union(jo)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,An),An.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Us),qo.subVectors(this.max,Us),Lr.subVectors(e.a,Us),Dr.subVectors(e.b,Us),Nr.subVectors(e.c,Us),Ai.subVectors(Dr,Lr),wi.subVectors(Nr,Dr),sr.subVectors(Lr,Nr);let t=[0,-Ai.z,Ai.y,0,-wi.z,wi.y,0,-sr.z,sr.y,Ai.z,0,-Ai.x,wi.z,0,-wi.x,sr.z,0,-sr.x,-Ai.y,Ai.x,0,-wi.y,wi.x,0,-sr.y,sr.x,0];return!oc(t,Lr,Dr,Nr,qo)||(t=[1,0,0,0,1,0,0,0,1],!oc(t,Lr,Dr,Nr,qo))?!1:($o.crossVectors(Ai,wi),t=[$o.x,$o.y,$o.z],oc(t,Lr,Dr,Nr,qo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,An).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(An).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ii[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ii[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ii[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ii[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ii[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ii[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ii[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ii[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ii),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ii=[new k,new k,new k,new k,new k,new k,new k,new k],An=new k,jo=new bi,Lr=new k,Dr=new k,Nr=new k,Ai=new k,wi=new k,sr=new k,Us=new k,qo=new k,$o=new k,or=new k;function oc(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){or.fromArray(n,s);const a=r.x*Math.abs(or.x)+r.y*Math.abs(or.y)+r.z*Math.abs(or.z),l=e.dot(or),c=t.dot(or),u=i.dot(or);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const bw=new bi,Os=new k,ac=new k;class Kn{constructor(e=new k,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):bw.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Os.subVectors(e,this.center);const t=Os.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Os,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ac.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Os.copy(e.center).add(ac)),this.expandByPoint(Os.copy(e.center).sub(ac))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ri=new k,lc=new k,Yo=new k,Ri=new k,cc=new k,Ko=new k,uc=new k;class No{constructor(e=new k,t=new k(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ri)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ri.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ri.copy(this.origin).addScaledVector(this.direction,t),ri.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){lc.copy(e).add(t).multiplyScalar(.5),Yo.copy(t).sub(e).normalize(),Ri.copy(this.origin).sub(lc);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Yo),a=Ri.dot(this.direction),l=-Ri.dot(Yo),c=Ri.lengthSq(),u=Math.abs(1-o*o);let f,h,d,g;if(u>0)if(f=o*l-a,h=o*a-l,g=s*u,f>=0)if(h>=-g)if(h<=g){const _=1/u;f*=_,h*=_,d=f*(f+o*h+2*a)+h*(o*f+h+2*l)+c}else h=s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;else h<=-g?(f=Math.max(0,-(-o*s+a)),h=f>0?-s:Math.min(Math.max(-s,-l),s),d=-f*f+h*(h+2*l)+c):h<=g?(f=0,h=Math.min(Math.max(-s,-l),s),d=h*(h+2*l)+c):(f=Math.max(0,-(o*s+a)),h=f>0?s:Math.min(Math.max(-s,-l),s),d=-f*f+h*(h+2*l)+c);else h=o>0?-s:s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(lc).addScaledVector(Yo,h),d}intersectSphere(e,t){ri.subVectors(e.center,this.origin);const i=ri.dot(this.direction),r=ri.dot(ri)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,ri)!==null}intersectTriangle(e,t,i,r,s){cc.subVectors(t,e),Ko.subVectors(i,e),uc.crossVectors(cc,Ko);let o=this.direction.dot(uc),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ri.subVectors(this.origin,e);const l=a*this.direction.dot(Ko.crossVectors(Ri,Ko));if(l<0)return null;const c=a*this.direction.dot(cc.cross(Ri));if(c<0||l+c>o)return null;const u=-a*Ri.dot(uc);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class je{constructor(e,t,i,r,s,o,a,l,c,u,f,h,d,g,_,m){je.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c,u,f,h,d,g,_,m)}set(e,t,i,r,s,o,a,l,c,u,f,h,d,g,_,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=f,p[14]=h,p[3]=d,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new je().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Ur.setFromMatrixColumn(e,0).length(),s=1/Ur.setFromMatrixColumn(e,1).length(),o=1/Ur.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=o*u,d=o*f,g=a*u,_=a*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=d+g*c,t[5]=h-_*c,t[9]=-a*l,t[2]=_-h*c,t[6]=g+d*c,t[10]=o*l}else if(e.order==="YXZ"){const h=l*u,d=l*f,g=c*u,_=c*f;t[0]=h+_*a,t[4]=g*a-d,t[8]=o*c,t[1]=o*f,t[5]=o*u,t[9]=-a,t[2]=d*a-g,t[6]=_+h*a,t[10]=o*l}else if(e.order==="ZXY"){const h=l*u,d=l*f,g=c*u,_=c*f;t[0]=h-_*a,t[4]=-o*f,t[8]=g+d*a,t[1]=d+g*a,t[5]=o*u,t[9]=_-h*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const h=o*u,d=o*f,g=a*u,_=a*f;t[0]=l*u,t[4]=g*c-d,t[8]=h*c+_,t[1]=l*f,t[5]=_*c+h,t[9]=d*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const h=o*l,d=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=_-h*f,t[8]=g*f+d,t[1]=f,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=d*f+g,t[10]=h-_*f}else if(e.order==="XZY"){const h=o*l,d=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=h*f+_,t[5]=o*u,t[9]=d*f-g,t[2]=g*f-d,t[6]=a*u,t[10]=_*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ew,e,Tw)}lookAt(e,t,i){const r=this.elements;return cn.subVectors(e,t),cn.lengthSq()===0&&(cn.z=1),cn.normalize(),Ci.crossVectors(i,cn),Ci.lengthSq()===0&&(Math.abs(i.z)===1?cn.x+=1e-4:cn.z+=1e-4,cn.normalize(),Ci.crossVectors(i,cn)),Ci.normalize(),Zo.crossVectors(cn,Ci),r[0]=Ci.x,r[4]=Zo.x,r[8]=cn.x,r[1]=Ci.y,r[5]=Zo.y,r[9]=cn.y,r[2]=Ci.z,r[6]=Zo.z,r[10]=cn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],f=i[5],h=i[9],d=i[13],g=i[2],_=i[6],m=i[10],p=i[14],b=i[3],y=i[7],v=i[11],P=i[15],w=r[0],C=r[4],D=r[8],T=r[12],M=r[1],L=r[5],U=r[9],O=r[13],W=r[2],Q=r[6],j=r[10],ee=r[14],z=r[3],de=r[7],_e=r[11],Ee=r[15];return s[0]=o*w+a*M+l*W+c*z,s[4]=o*C+a*L+l*Q+c*de,s[8]=o*D+a*U+l*j+c*_e,s[12]=o*T+a*O+l*ee+c*Ee,s[1]=u*w+f*M+h*W+d*z,s[5]=u*C+f*L+h*Q+d*de,s[9]=u*D+f*U+h*j+d*_e,s[13]=u*T+f*O+h*ee+d*Ee,s[2]=g*w+_*M+m*W+p*z,s[6]=g*C+_*L+m*Q+p*de,s[10]=g*D+_*U+m*j+p*_e,s[14]=g*T+_*O+m*ee+p*Ee,s[3]=b*w+y*M+v*W+P*z,s[7]=b*C+y*L+v*Q+P*de,s[11]=b*D+y*U+v*j+P*_e,s[15]=b*T+y*O+v*ee+P*Ee,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],d=e[14],g=e[3],_=e[7],m=e[11],p=e[15];return g*(+s*l*f-r*c*f-s*a*h+i*c*h+r*a*d-i*l*d)+_*(+t*l*d-t*c*h+s*o*h-r*o*d+r*c*u-s*l*u)+m*(+t*c*f-t*a*d-s*o*f+i*o*d+s*a*u-i*c*u)+p*(-r*a*u-t*l*f+t*a*h+r*o*f-i*o*h+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],d=e[11],g=e[12],_=e[13],m=e[14],p=e[15],b=f*m*c-_*h*c+_*l*d-a*m*d-f*l*p+a*h*p,y=g*h*c-u*m*c-g*l*d+o*m*d+u*l*p-o*h*p,v=u*_*c-g*f*c+g*a*d-o*_*d-u*a*p+o*f*p,P=g*f*l-u*_*l-g*a*h+o*_*h+u*a*m-o*f*m,w=t*b+i*y+r*v+s*P;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/w;return e[0]=b*C,e[1]=(_*h*s-f*m*s-_*r*d+i*m*d+f*r*p-i*h*p)*C,e[2]=(a*m*s-_*l*s+_*r*c-i*m*c-a*r*p+i*l*p)*C,e[3]=(f*l*s-a*h*s-f*r*c+i*h*c+a*r*d-i*l*d)*C,e[4]=y*C,e[5]=(u*m*s-g*h*s+g*r*d-t*m*d-u*r*p+t*h*p)*C,e[6]=(g*l*s-o*m*s-g*r*c+t*m*c+o*r*p-t*l*p)*C,e[7]=(o*h*s-u*l*s+u*r*c-t*h*c-o*r*d+t*l*d)*C,e[8]=v*C,e[9]=(g*f*s-u*_*s-g*i*d+t*_*d+u*i*p-t*f*p)*C,e[10]=(o*_*s-g*a*s+g*i*c-t*_*c-o*i*p+t*a*p)*C,e[11]=(u*a*s-o*f*s-u*i*c+t*f*c+o*i*d-t*a*d)*C,e[12]=P*C,e[13]=(u*_*r-g*f*r+g*i*h-t*_*h-u*i*m+t*f*m)*C,e[14]=(g*a*r-o*_*r-g*i*l+t*_*l+o*i*m-t*a*m)*C,e[15]=(o*f*r-u*a*r+u*i*l-t*f*l-o*i*h+t*a*h)*C,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,f=a+a,h=s*c,d=s*u,g=s*f,_=o*u,m=o*f,p=a*f,b=l*c,y=l*u,v=l*f,P=i.x,w=i.y,C=i.z;return r[0]=(1-(_+p))*P,r[1]=(d+v)*P,r[2]=(g-y)*P,r[3]=0,r[4]=(d-v)*w,r[5]=(1-(h+p))*w,r[6]=(m+b)*w,r[7]=0,r[8]=(g+y)*C,r[9]=(m-b)*C,r[10]=(1-(h+_))*C,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=Ur.set(r[0],r[1],r[2]).length();const o=Ur.set(r[4],r[5],r[6]).length(),a=Ur.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],wn.copy(this);const c=1/s,u=1/o,f=1/a;return wn.elements[0]*=c,wn.elements[1]*=c,wn.elements[2]*=c,wn.elements[4]*=u,wn.elements[5]*=u,wn.elements[6]*=u,wn.elements[8]*=f,wn.elements[9]*=f,wn.elements[10]*=f,t.setFromRotationMatrix(wn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=gi){const l=this.elements,c=2*s/(t-e),u=2*s/(i-r),f=(t+e)/(t-e),h=(i+r)/(i-r);let d,g;if(a===gi)d=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===Ka)d=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=gi){const l=this.elements,c=1/(t-e),u=1/(i-r),f=1/(o-s),h=(t+e)*c,d=(i+r)*u;let g,_;if(a===gi)g=(o+s)*f,_=-2*f;else if(a===Ka)g=s*f,_=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Ur=new k,wn=new je,Ew=new k(0,0,0),Tw=new k(1,1,1),Ci=new k,Zo=new k,cn=new k,xp=new je,yp=new Ki;class $n{constructor(e=0,t=0,i=0,r=$n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],f=r[2],h=r[6],d=r[10];switch(t){case"XYZ":this._y=Math.asin(Ze(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ze(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ze(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ze(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ze(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Ze(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return xp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(xp,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return yp.setFromEuler(this),this.setFromQuaternion(yp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}$n.DEFAULT_ORDER="XYZ";class ah{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Aw=0;const Mp=new k,Or=new Ki,si=new je,Jo=new k,Fs=new k,ww=new k,Rw=new Ki,Sp=new k(1,0,0),bp=new k(0,1,0),Ep=new k(0,0,1),Tp={type:"added"},Cw={type:"removed"},Fr={type:"childadded",child:null},fc={type:"childremoved",child:null};class _t extends Ms{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Aw++}),this.uuid=Dn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=_t.DEFAULT_UP.clone();const e=new k,t=new $n,i=new Ki,r=new k(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new je},normalMatrix:{value:new Ye}}),this.matrix=new je,this.matrixWorld=new je,this.matrixAutoUpdate=_t.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=_t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ah,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Or.setFromAxisAngle(e,t),this.quaternion.multiply(Or),this}rotateOnWorldAxis(e,t){return Or.setFromAxisAngle(e,t),this.quaternion.premultiply(Or),this}rotateX(e){return this.rotateOnAxis(Sp,e)}rotateY(e){return this.rotateOnAxis(bp,e)}rotateZ(e){return this.rotateOnAxis(Ep,e)}translateOnAxis(e,t){return Mp.copy(e).applyQuaternion(this.quaternion),this.position.add(Mp.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Sp,e)}translateY(e){return this.translateOnAxis(bp,e)}translateZ(e){return this.translateOnAxis(Ep,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(si.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Jo.copy(e):Jo.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Fs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?si.lookAt(Fs,Jo,this.up):si.lookAt(Jo,Fs,this.up),this.quaternion.setFromRotationMatrix(si),r&&(si.extractRotation(r.matrixWorld),Or.setFromRotationMatrix(si),this.quaternion.premultiply(Or.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Tp),Fr.child=e,this.dispatchEvent(Fr),Fr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Cw),fc.child=e,this.dispatchEvent(fc),fc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),si.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),si.multiply(e.parent.matrixWorld)),e.applyMatrix4(si),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Tp),Fr.child=e,this.dispatchEvent(Fr),Fr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fs,e,ww),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fs,Rw,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),h=o(e.skeletons),d=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),d.length>0&&(i.animations=d),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}_t.DEFAULT_UP=new k(0,1,0);_t.DEFAULT_MATRIX_AUTO_UPDATE=!0;_t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Rn=new k,oi=new k,hc=new k,ai=new k,Br=new k,kr=new k,Ap=new k,dc=new k,pc=new k,mc=new k,gc=new it,_c=new it,vc=new it;class Pn{constructor(e=new k,t=new k,i=new k){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Rn.subVectors(e,t),r.cross(Rn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Rn.subVectors(r,t),oi.subVectors(i,t),hc.subVectors(e,t);const o=Rn.dot(Rn),a=Rn.dot(oi),l=Rn.dot(hc),c=oi.dot(oi),u=oi.dot(hc),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;const h=1/f,d=(c*l-a*u)*h,g=(o*u-a*l)*h;return s.set(1-d-g,g,d)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,ai)===null?!1:ai.x>=0&&ai.y>=0&&ai.x+ai.y<=1}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,ai)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,ai.x),l.addScaledVector(o,ai.y),l.addScaledVector(a,ai.z),l)}static getInterpolatedAttribute(e,t,i,r,s,o){return gc.setScalar(0),_c.setScalar(0),vc.setScalar(0),gc.fromBufferAttribute(e,t),_c.fromBufferAttribute(e,i),vc.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(gc,s.x),o.addScaledVector(_c,s.y),o.addScaledVector(vc,s.z),o}static isFrontFacing(e,t,i,r){return Rn.subVectors(i,t),oi.subVectors(e,t),Rn.cross(oi).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Rn.subVectors(this.c,this.b),oi.subVectors(this.a,this.b),Rn.cross(oi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Pn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Pn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return Pn.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return Pn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Pn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;Br.subVectors(r,i),kr.subVectors(s,i),dc.subVectors(e,i);const l=Br.dot(dc),c=kr.dot(dc);if(l<=0&&c<=0)return t.copy(i);pc.subVectors(e,r);const u=Br.dot(pc),f=kr.dot(pc);if(u>=0&&f<=u)return t.copy(r);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(Br,o);mc.subVectors(e,s);const d=Br.dot(mc),g=kr.dot(mc);if(g>=0&&d<=g)return t.copy(s);const _=d*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(i).addScaledVector(kr,a);const m=u*g-d*f;if(m<=0&&f-u>=0&&d-g>=0)return Ap.subVectors(s,r),a=(f-u)/(f-u+(d-g)),t.copy(r).addScaledVector(Ap,a);const p=1/(m+_+h);return o=_*p,a=h*p,t.copy(i).addScaledVector(Br,o).addScaledVector(kr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const $0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Pi={h:0,s:0,l:0},Qo={h:0,s:0,l:0};function xc(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class ke{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Dt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Qe.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=Qe.workingColorSpace){return this.r=e,this.g=t,this.b=i,Qe.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=Qe.workingColorSpace){if(e=oh(e,1),t=Ze(t,0,1),i=Ze(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=xc(o,s,e+1/3),this.g=xc(o,s,e),this.b=xc(o,s,e-1/3)}return Qe.toWorkingColorSpace(this,r),this}setStyle(e,t=Dt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Dt){const i=$0[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=xi(e.r),this.g=xi(e.g),this.b=xi(e.b),this}copyLinearToSRGB(e){return this.r=rs(e.r),this.g=rs(e.g),this.b=rs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Dt){return Qe.fromWorkingColorSpace(Ft.copy(this),e),Math.round(Ze(Ft.r*255,0,255))*65536+Math.round(Ze(Ft.g*255,0,255))*256+Math.round(Ze(Ft.b*255,0,255))}getHexString(e=Dt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Qe.workingColorSpace){Qe.fromWorkingColorSpace(Ft.copy(this),t);const i=Ft.r,r=Ft.g,s=Ft.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Qe.workingColorSpace){return Qe.fromWorkingColorSpace(Ft.copy(this),t),e.r=Ft.r,e.g=Ft.g,e.b=Ft.b,e}getStyle(e=Dt){Qe.fromWorkingColorSpace(Ft.copy(this),e);const t=Ft.r,i=Ft.g,r=Ft.b;return e!==Dt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Pi),this.setHSL(Pi.h+e,Pi.s+t,Pi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Pi),e.getHSL(Qo);const i=oo(Pi.h,Qo.h,t),r=oo(Pi.s,Qo.s,t),s=oo(Pi.l,Qo.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ft=new ke;ke.NAMES=$0;let Pw=0;class qn extends Ms{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Pw++}),this.uuid=Dn(),this.name="",this.type="Material",this.blending=ns,this.side=yi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Mu,this.blendDst=Su,this.blendEquation=_r,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ke(0,0,0),this.blendAlpha=0,this.depthFunc=ls,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=hp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Pr,this.stencilZFail=Pr,this.stencilZPass=Pr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ns&&(i.blending=this.blending),this.side!==yi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Mu&&(i.blendSrc=this.blendSrc),this.blendDst!==Su&&(i.blendDst=this.blendDst),this.blendEquation!==_r&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ls&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==hp&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Pr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Pr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Pr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Hi extends qn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $n,this.combine=E0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const bt=new k,ea=new Ue;class Jt{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=of,this.updateRanges=[],this.gpuType=In,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)ea.fromBufferAttribute(this,t),ea.applyMatrix3(e),this.setXY(t,ea.x,ea.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)bt.fromBufferAttribute(this,t),bt.applyMatrix3(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)bt.fromBufferAttribute(this,t),bt.applyMatrix4(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)bt.fromBufferAttribute(this,t),bt.applyNormalMatrix(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)bt.fromBufferAttribute(this,t),bt.transformDirection(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Cn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=ut(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Cn(t,this.array)),t}setX(e,t){return this.normalized&&(t=ut(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Cn(t,this.array)),t}setY(e,t){return this.normalized&&(t=ut(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Cn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ut(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Cn(t,this.array)),t}setW(e,t){return this.normalized&&(t=ut(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=ut(t,this.array),i=ut(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=ut(t,this.array),i=ut(i,this.array),r=ut(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=ut(t,this.array),i=ut(i,this.array),r=ut(r,this.array),s=ut(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==of&&(e.usage=this.usage),e}}class Y0 extends Jt{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class K0 extends Jt{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Un extends Jt{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Iw=0;const vn=new je,yc=new _t,Hr=new k,un=new bi,Bs=new bi,Rt=new k;class Bn extends Ms{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Iw++}),this.uuid=Dn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(X0(e)?K0:Y0)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ye().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return vn.makeRotationFromQuaternion(e),this.applyMatrix4(vn),this}rotateX(e){return vn.makeRotationX(e),this.applyMatrix4(vn),this}rotateY(e){return vn.makeRotationY(e),this.applyMatrix4(vn),this}rotateZ(e){return vn.makeRotationZ(e),this.applyMatrix4(vn),this}translate(e,t,i){return vn.makeTranslation(e,t,i),this.applyMatrix4(vn),this}scale(e,t,i){return vn.makeScale(e,t,i),this.applyMatrix4(vn),this}lookAt(e){return yc.lookAt(e),yc.updateMatrix(),this.applyMatrix4(yc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Hr).negate(),this.translate(Hr.x,Hr.y,Hr.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Un(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new bi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];un.setFromBufferAttribute(s),this.morphTargetsRelative?(Rt.addVectors(this.boundingBox.min,un.min),this.boundingBox.expandByPoint(Rt),Rt.addVectors(this.boundingBox.max,un.max),this.boundingBox.expandByPoint(Rt)):(this.boundingBox.expandByPoint(un.min),this.boundingBox.expandByPoint(un.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Kn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(e){const i=this.boundingSphere.center;if(un.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Bs.setFromBufferAttribute(a),this.morphTargetsRelative?(Rt.addVectors(un.min,Bs.min),un.expandByPoint(Rt),Rt.addVectors(un.max,Bs.max),un.expandByPoint(Rt)):(un.expandByPoint(Bs.min),un.expandByPoint(Bs.max))}un.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Rt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Rt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Rt.fromBufferAttribute(a,c),l&&(Hr.fromBufferAttribute(e,c),Rt.add(Hr)),r=Math.max(r,i.distanceToSquared(Rt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Jt(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let D=0;D<i.count;D++)a[D]=new k,l[D]=new k;const c=new k,u=new k,f=new k,h=new Ue,d=new Ue,g=new Ue,_=new k,m=new k;function p(D,T,M){c.fromBufferAttribute(i,D),u.fromBufferAttribute(i,T),f.fromBufferAttribute(i,M),h.fromBufferAttribute(s,D),d.fromBufferAttribute(s,T),g.fromBufferAttribute(s,M),u.sub(c),f.sub(c),d.sub(h),g.sub(h);const L=1/(d.x*g.y-g.x*d.y);isFinite(L)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(f,-d.y).multiplyScalar(L),m.copy(f).multiplyScalar(d.x).addScaledVector(u,-g.x).multiplyScalar(L),a[D].add(_),a[T].add(_),a[M].add(_),l[D].add(m),l[T].add(m),l[M].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let D=0,T=b.length;D<T;++D){const M=b[D],L=M.start,U=M.count;for(let O=L,W=L+U;O<W;O+=3)p(e.getX(O+0),e.getX(O+1),e.getX(O+2))}const y=new k,v=new k,P=new k,w=new k;function C(D){P.fromBufferAttribute(r,D),w.copy(P);const T=a[D];y.copy(T),y.sub(P.multiplyScalar(P.dot(T))).normalize(),v.crossVectors(w,T);const L=v.dot(l[D])<0?-1:1;o.setXYZW(D,y.x,y.y,y.z,L)}for(let D=0,T=b.length;D<T;++D){const M=b[D],L=M.start,U=M.count;for(let O=L,W=L+U;O<W;O+=3)C(e.getX(O+0)),C(e.getX(O+1)),C(e.getX(O+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Jt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,d=i.count;h<d;h++)i.setXYZ(h,0,0,0);const r=new k,s=new k,o=new k,a=new k,l=new k,c=new k,u=new k,f=new k;if(e)for(let h=0,d=e.count;h<d;h+=3){const g=e.getX(h+0),_=e.getX(h+1),m=e.getX(h+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,d=t.count;h<d;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Rt.fromBufferAttribute(e,t),Rt.normalize(),e.setXYZ(t,Rt.x,Rt.y,Rt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,h=new c.constructor(l.length*u);let d=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?d=l[_]*a.data.stride+a.offset:d=l[_]*u;for(let p=0;p<u;p++)h[g++]=c[d++]}return new Jt(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Bn,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,f=c.length;u<f;u++){const h=c[u],d=e(h,i);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const d=c[f];u.push(d.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let h=0,d=f.length;h<d;h++)u.push(f[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const wp=new je,ar=new No,ta=new Kn,Rp=new k,na=new k,ia=new k,ra=new k,Mc=new k,sa=new k,Cp=new k,oa=new k;class on extends _t{constructor(e=new Bn,t=new Hi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){sa.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],f=s[l];u!==0&&(Mc.fromBufferAttribute(f,e),o?sa.addScaledVector(Mc,u):sa.addScaledVector(Mc.sub(t),u))}t.add(sa)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ta.copy(i.boundingSphere),ta.applyMatrix4(s),ar.copy(e.ray).recast(e.near),!(ta.containsPoint(ar.origin)===!1&&(ar.intersectSphere(ta,Rp)===null||ar.origin.distanceToSquared(Rp)>(e.far-e.near)**2))&&(wp.copy(s).invert(),ar.copy(e.ray).applyMatrix4(wp),!(i.boundingBox!==null&&ar.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,ar)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,h=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=h.length;g<_;g++){const m=h[g],p=o[m.materialIndex],b=Math.max(m.start,d.start),y=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let v=b,P=y;v<P;v+=3){const w=a.getX(v),C=a.getX(v+1),D=a.getX(v+2);r=aa(this,p,e,i,c,u,f,w,C,D),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const b=a.getX(m),y=a.getX(m+1),v=a.getX(m+2);r=aa(this,o,e,i,c,u,f,b,y,v),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=h.length;g<_;g++){const m=h[g],p=o[m.materialIndex],b=Math.max(m.start,d.start),y=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let v=b,P=y;v<P;v+=3){const w=v,C=v+1,D=v+2;r=aa(this,p,e,i,c,u,f,w,C,D),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const b=m,y=m+1,v=m+2;r=aa(this,o,e,i,c,u,f,b,y,v),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function Lw(n,e,t,i,r,s,o,a){let l;if(e.side===an?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===yi,a),l===null)return null;oa.copy(a),oa.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(oa);return c<t.near||c>t.far?null:{distance:c,point:oa.clone(),object:n}}function aa(n,e,t,i,r,s,o,a,l,c){n.getVertexPosition(a,na),n.getVertexPosition(l,ia),n.getVertexPosition(c,ra);const u=Lw(n,e,t,i,na,ia,ra,Cp);if(u){const f=new k;Pn.getBarycoord(Cp,na,ia,ra,f),r&&(u.uv=Pn.getInterpolatedAttribute(r,a,l,c,f,new Ue)),s&&(u.uv1=Pn.getInterpolatedAttribute(s,a,l,c,f,new Ue)),o&&(u.normal=Pn.getInterpolatedAttribute(o,a,l,c,f,new k),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new k,materialIndex:0};Pn.getNormal(na,ia,ra,h.normal),u.face=h,u.barycoord=f}return u}class Uo extends Bn{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],f=[];let h=0,d=0;g("z","y","x",-1,-1,i,t,e,o,s,0),g("z","y","x",1,-1,i,t,-e,o,s,1),g("x","z","y",1,1,e,i,t,r,o,2),g("x","z","y",1,-1,e,i,-t,r,o,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Un(c,3)),this.setAttribute("normal",new Un(u,3)),this.setAttribute("uv",new Un(f,2));function g(_,m,p,b,y,v,P,w,C,D,T){const M=v/C,L=P/D,U=v/2,O=P/2,W=w/2,Q=C+1,j=D+1;let ee=0,z=0;const de=new k;for(let _e=0;_e<j;_e++){const Ee=_e*L-O;for(let Ce=0;Ce<Q;Ce++){const Xe=Ce*M-U;de[_]=Xe*b,de[m]=Ee*y,de[p]=W,c.push(de.x,de.y,de.z),de[_]=0,de[m]=0,de[p]=w>0?1:-1,u.push(de.x,de.y,de.z),f.push(Ce/C),f.push(1-_e/D),ee+=1}}for(let _e=0;_e<D;_e++)for(let Ee=0;Ee<C;Ee++){const Ce=h+Ee+Q*_e,Xe=h+Ee+Q*(_e+1),re=h+(Ee+1)+Q*(_e+1),he=h+(Ee+1)+Q*_e;l.push(Ce,Xe,he),l.push(Xe,re,he),z+=6}a.addGroup(d,z,T),d+=z,h+=ee}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Uo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ms(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function qt(n){const e={};for(let t=0;t<n.length;t++){const i=ms(n[t]);for(const r in i)e[r]=i[r]}return e}function Dw(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Z0(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Qe.workingColorSpace}const gs={clone:ms,merge:qt};var Nw=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Uw=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class zt extends qn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Nw,this.fragmentShader=Uw,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ms(e.uniforms),this.uniformsGroups=Dw(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class J0 extends _t{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new je,this.projectionMatrix=new je,this.projectionMatrixInverse=new je,this.coordinateSystem=gi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ii=new k,Pp=new Ue,Ip=new Ue;class Kt extends J0{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ps*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(so*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ps*2*Math.atan(Math.tan(so*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Ii.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ii.x,Ii.y).multiplyScalar(-e/Ii.z),Ii.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ii.x,Ii.y).multiplyScalar(-e/Ii.z)}getViewSize(e,t){return this.getViewBounds(e,Pp,Ip),t.subVectors(Ip,Pp)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(so*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const zr=-90,Vr=1;class Ow extends _t{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Kt(zr,Vr,e,t);r.layers=this.layers,this.add(r);const s=new Kt(zr,Vr,e,t);s.layers=this.layers,this.add(s);const o=new Kt(zr,Vr,e,t);o.layers=this.layers,this.add(o);const a=new Kt(zr,Vr,e,t);a.layers=this.layers,this.add(a);const l=new Kt(zr,Vr,e,t);l.layers=this.layers,this.add(l);const c=new Kt(zr,Vr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===gi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ka)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(f,h,d),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Q0 extends Pt{constructor(e,t,i,r,s,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:cs,super(e,t,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Fw extends Nn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Q0(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:pn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Uo(5,5,5),s=new zt({name:"CubemapFromEquirect",uniforms:ms(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:an,blending:_i});s.uniforms.tEquirect.value=t;const o=new on(r,s),a=t.minFilter;return t.minFilter===mi&&(t.minFilter=pn),new Ow(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}class Bw extends _t{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new $n,this.environmentIntensity=1,this.environmentRotation=new $n,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class kw{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=of,this.updateRanges=[],this.version=0,this.uuid=Dn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[i+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Dn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Dn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Xt=new k;class lh{constructor(e,t,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Xt.fromBufferAttribute(this,t),Xt.applyMatrix4(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Xt.fromBufferAttribute(this,t),Xt.applyNormalMatrix(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Xt.fromBufferAttribute(this,t),Xt.transformDirection(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=Cn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=ut(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=ut(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ut(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ut(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ut(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Cn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Cn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Cn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Cn(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=ut(t,this.array),i=ut(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=ut(t,this.array),i=ut(i,this.array),r=ut(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=ut(t,this.array),i=ut(i,this.array),r=ut(r,this.array),s=ut(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new Jt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new lh(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Lp=new k,Dp=new it,Np=new it,Hw=new k,Up=new je,la=new k,Sc=new Kn,Op=new je,bc=new No;class zw extends on{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=lp,this.bindMatrix=new je,this.bindMatrixInverse=new je,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new bi),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,la),this.boundingBox.expandByPoint(la)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Kn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,la),this.boundingSphere.expandByPoint(la)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const i=this.material,r=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Sc.copy(this.boundingSphere),Sc.applyMatrix4(r),e.ray.intersectsSphere(Sc)!==!1&&(Op.copy(r).invert(),bc.copy(e.ray).applyMatrix4(Op),!(this.boundingBox!==null&&bc.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,bc)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new it,t=this.geometry.attributes.skinWeight;for(let i=0,r=t.count;i<r;i++){e.fromBufferAttribute(t,i);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===lp?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===BA?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const i=this.skeleton,r=this.geometry;Dp.fromBufferAttribute(r.attributes.skinIndex,e),Np.fromBufferAttribute(r.attributes.skinWeight,e),Lp.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const o=Np.getComponent(s);if(o!==0){const a=Dp.getComponent(s);Up.multiplyMatrices(i.bones[a].matrixWorld,i.boneInverses[a]),t.addScaledVector(Hw.copy(Lp).applyMatrix4(Up),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class ev extends _t{constructor(){super(),this.isBone=!0,this.type="Bone"}}class tv extends Pt{constructor(e=null,t=1,i=1,r,s,o,a,l,c=Zt,u=Zt,f,h){super(null,o,a,l,c,u,r,s,f,h),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Fp=new je,Vw=new je;class ch{constructor(e=[],t=[]){this.uuid=Dn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,r=this.bones.length;i<r;i++)this.boneInverses.push(new je)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const i=new je;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){const e=this.bones,t=this.boneInverses,i=this.boneMatrices,r=this.boneTexture;for(let s=0,o=e.length;s<o;s++){const a=e[s]?e[s].matrixWorld:Vw;Fp.multiplyMatrices(a,t[s]),Fp.toArray(i,s*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new ch(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const i=new tv(t,e,e,yn,In);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){const r=this.bones[t];if(r.name===e)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,r=e.bones.length;i<r;i++){const s=e.bones[i];let o=t[s];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),o=new ev),this.bones.push(o),this.boneInverses.push(new je().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,i=this.boneInverses;for(let r=0,s=t.length;r<s;r++){const o=t[r];e.bones.push(o.uuid);const a=i[r];e.boneInverses.push(a.toArray())}return e}}class lf extends Jt{constructor(e,t,i,r=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Gr=new je,Bp=new je,ca=[],kp=new bi,Gw=new je,ks=new on,Hs=new Kn;class Ww extends on{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new lf(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,Gw)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new bi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Gr),kp.copy(e.boundingBox).applyMatrix4(Gr),this.boundingBox.union(kp)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Kn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Gr),Hs.copy(e.boundingSphere).applyMatrix4(Gr),this.boundingSphere.union(Hs)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=i.length+1,o=e*s+1;for(let a=0;a<i.length;a++)i[a]=r[o+a]}raycast(e,t){const i=this.matrixWorld,r=this.count;if(ks.geometry=this.geometry,ks.material=this.material,ks.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Hs.copy(this.boundingSphere),Hs.applyMatrix4(i),e.ray.intersectsSphere(Hs)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,Gr),Bp.multiplyMatrices(i,Gr),ks.matrixWorld=Bp,ks.raycast(e,ca);for(let o=0,a=ca.length;o<a;o++){const l=ca[o];l.instanceId=s,l.object=this,t.push(l)}ca.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new lf(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const i=t.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new tv(new Float32Array(r*this.count),r,this.count,nh,In));const s=this.morphTexture.source.data.data;let o=0;for(let c=0;c<i.length;c++)o+=i[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=r*e;s[l]=a,s.set(i,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}const Ec=new k,Xw=new k,jw=new Ye;class dr{constructor(e=new k(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Ec.subVectors(i,t).cross(Xw.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Ec),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||jw.getNormalMatrix(e),r=this.coplanarPoint(Ec).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const lr=new Kn,ua=new k;class uh{constructor(e=new dr,t=new dr,i=new dr,r=new dr,s=new dr,o=new dr){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=gi){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],f=r[6],h=r[7],d=r[8],g=r[9],_=r[10],m=r[11],p=r[12],b=r[13],y=r[14],v=r[15];if(i[0].setComponents(l-s,h-c,m-d,v-p).normalize(),i[1].setComponents(l+s,h+c,m+d,v+p).normalize(),i[2].setComponents(l+o,h+u,m+g,v+b).normalize(),i[3].setComponents(l-o,h-u,m-g,v-b).normalize(),i[4].setComponents(l-a,h-f,m-_,v-y).normalize(),t===gi)i[5].setComponents(l+a,h+f,m+_,v+y).normalize();else if(t===Ka)i[5].setComponents(a,f,_,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),lr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),lr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(lr)}intersectsSprite(e){return lr.center.set(0,0,0),lr.radius=.7071067811865476,lr.applyMatrix4(e.matrixWorld),this.intersectsSphere(lr)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(ua.x=r.normal.x>0?e.max.x:e.min.x,ua.y=r.normal.y>0?e.max.y:e.min.y,ua.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ua)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class nv extends qn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ke(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Za=new k,Ja=new k,Hp=new je,zs=new No,fa=new Kn,Tc=new k,zp=new k;class fh extends _t{constructor(e=new Bn,t=new nv){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)Za.fromBufferAttribute(t,r-1),Ja.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=Za.distanceTo(Ja);e.setAttribute("lineDistance",new Un(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),fa.copy(i.boundingSphere),fa.applyMatrix4(r),fa.radius+=s,e.ray.intersectsSphere(fa)===!1)return;Hp.copy(r).invert(),zs.copy(e.ray).applyMatrix4(Hp);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=i.index,h=i.attributes.position;if(u!==null){const d=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let _=d,m=g-1;_<m;_+=c){const p=u.getX(_),b=u.getX(_+1),y=ha(this,e,zs,l,p,b);y&&t.push(y)}if(this.isLineLoop){const _=u.getX(g-1),m=u.getX(d),p=ha(this,e,zs,l,_,m);p&&t.push(p)}}else{const d=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let _=d,m=g-1;_<m;_+=c){const p=ha(this,e,zs,l,_,_+1);p&&t.push(p)}if(this.isLineLoop){const _=ha(this,e,zs,l,g-1,d);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function ha(n,e,t,i,r,s){const o=n.geometry.attributes.position;if(Za.fromBufferAttribute(o,r),Ja.fromBufferAttribute(o,s),t.distanceSqToSegment(Za,Ja,Tc,zp)>i)return;Tc.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(Tc);if(!(l<e.near||l>e.far))return{distance:l,point:zp.clone().applyMatrix4(n.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:n}}const Vp=new k,Gp=new k;class qw extends fh{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let r=0,s=t.count;r<s;r+=2)Vp.fromBufferAttribute(t,r),Gp.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+Vp.distanceTo(Gp);e.setAttribute("lineDistance",new Un(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class $w extends fh{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class iv extends qn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ke(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Wp=new je,cf=new No,da=new Kn,pa=new k;class Yw extends _t{constructor(e=new Bn,t=new iv){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),da.copy(i.boundingSphere),da.applyMatrix4(r),da.radius+=s,e.ray.intersectsSphere(da)===!1)return;Wp.copy(r).invert(),cf.copy(e.ray).applyMatrix4(Wp);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,f=i.attributes.position;if(c!==null){const h=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let g=h,_=d;g<_;g++){const m=c.getX(g);pa.fromBufferAttribute(f,m),Xp(pa,m,l,r,e,t,this)}}else{const h=Math.max(0,o.start),d=Math.min(f.count,o.start+o.count);for(let g=h,_=d;g<_;g++)pa.fromBufferAttribute(f,g),Xp(pa,g,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Xp(n,e,t,i,r,s,o){const a=cf.distanceSqToPoint(n);if(a<t){const l=new k;cf.closestPointToPoint(n,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class zi extends _t{constructor(){super(),this.isGroup=!0,this.type="Group"}}class rv extends Pt{constructor(e,t,i,r,s,o,a,l,c,u=is){if(u!==is&&u!==ds)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===is&&(i=Er),i===void 0&&u===ds&&(i=hs),super(null,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Zt,this.minFilter=l!==void 0?l:Zt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Sl extends Bn{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,f=e/a,h=t/l,d=[],g=[],_=[],m=[];for(let p=0;p<u;p++){const b=p*h-o;for(let y=0;y<c;y++){const v=y*f-s;g.push(v,-b,0),_.push(0,0,1),m.push(y/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let b=0;b<a;b++){const y=b+c*p,v=b+c*(p+1),P=b+1+c*(p+1),w=b+1+c*p;d.push(y,v,w),d.push(v,P,w)}this.setIndex(d),this.setAttribute("position",new Un(g,3)),this.setAttribute("normal",new Un(_,3)),this.setAttribute("uv",new Un(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Sl(e.width,e.height,e.widthSegments,e.heightSegments)}}class Kw extends zt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class hh extends qn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ke(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=G0,this.normalScale=new Ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $n,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Zn extends hh{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ue(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ze(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ke(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ke(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ke(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Zw extends qn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=zA,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Jw extends qn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function ma(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function Qw(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function e1(n){function e(r,s){return n[r]-n[s]}const t=n.length,i=new Array(t);for(let r=0;r!==t;++r)i[r]=r;return i.sort(e),i}function jp(n,e,t){const i=n.length,r=new n.constructor(i);for(let s=0,o=0;o!==i;++s){const a=t[s]*e;for(let l=0;l!==e;++l)r[o++]=n[a+l]}return r}function sv(n,e,t,i){let r=1,s=n[0];for(;s!==void 0&&s[i]===void 0;)s=n[r++];if(s===void 0)return;let o=s[i];if(o!==void 0)if(Array.isArray(o))do o=s[i],o!==void 0&&(e.push(s.time),t.push.apply(t,o)),s=n[r++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[i],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=n[r++];while(s!==void 0);else do o=s[i],o!==void 0&&(e.push(s.time),t.push(o)),s=n[r++];while(s!==void 0)}class Oo{constructor(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let i=this._cachedIndex,r=t[i],s=t[i-1];n:{e:{let o;t:{i:if(!(e<r)){for(let a=i+2;;){if(r===void 0){if(e<s)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(s=r,r=t[++i],e<r)break e}o=t.length;break t}if(!(e>=s)){const a=t[1];e<a&&(i=2,s=a);for(let l=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(r=s,s=t[--i-1],e>=s)break e}o=i,i=0;break t}break n}for(;i<o;){const a=i+o>>>1;e<t[a]?o=a:i=a+1}if(r=t[i],s=t[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,r)}return this.interpolate_(i,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r;for(let o=0;o!==r;++o)t[o]=i[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class t1 extends Oo{constructor(e,t,i,r){super(e,t,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:cp,endingEnd:cp}}intervalChanged_(e,t,i){const r=this.parameterPositions;let s=e-2,o=e+1,a=r[s],l=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case up:s=e,a=2*t-i;break;case fp:s=r.length-2,a=t+r[s]-r[s+1];break;default:s=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case up:o=e,l=2*i-t;break;case fp:o=1,l=i+r[1]-r[0];break;default:o=e-1,l=t}const c=(i-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-i),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(e,t,i,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,f=this._offsetNext,h=this._weightPrev,d=this._weightNext,g=(i-t)/(r-t),_=g*g,m=_*g,p=-h*m+2*h*_-h*g,b=(1+h)*m+(-1.5-2*h)*_+(-.5+h)*g+1,y=(-1-d)*m+(1.5+d)*_+.5*g,v=d*m-d*_;for(let P=0;P!==a;++P)s[P]=p*o[u+P]+b*o[c+P]+y*o[l+P]+v*o[f+P];return s}}class n1 extends Oo{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(i-t)/(r-t),f=1-u;for(let h=0;h!==a;++h)s[h]=o[c+h]*f+o[l+h]*u;return s}}class i1 extends Oo{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}}class Jn{constructor(e,t,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ma(t,this.TimeBufferType),this.values=ma(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:ma(e.times,Array),values:ma(e.values,Array)};const r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new i1(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new n1(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new t1(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case bo:t=this.InterpolantFactoryMethodDiscrete;break;case Eo:t=this.InterpolantFactoryMethodLinear;break;case nc:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return bo;case this.InterpolantFactoryMethodLinear:return Eo;case this.InterpolantFactoryMethodSmooth:return nc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e}return this}trim(e,t){const i=this.times,r=i.length;let s=0,o=r-1;for(;s!==r&&i[s]<e;)++s;for(;o!==-1&&i[o]>t;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);const a=this.getValueSize();this.times=i.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const i=this.times,r=this.values,s=i.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){const l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(r!==void 0&&Qw(r))for(let a=0,l=r.length;a!==l;++a){const c=r[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===nc,s=e.length-1;let o=1;for(let a=1;a<s;++a){let l=!1;const c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(r)l=!0;else{const f=a*i,h=f-i,d=f+i;for(let g=0;g!==i;++g){const _=t[f+g];if(_!==t[h+g]||_!==t[d+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const f=a*i,h=o*i;for(let d=0;d!==i;++d)t[h+d]=t[f+d]}++o}}if(s>0){e[o]=e[s];for(let a=s*i,l=o*i,c=0;c!==i;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),i=this.constructor,r=new i(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}}Jn.prototype.TimeBufferType=Float32Array;Jn.prototype.ValueBufferType=Float32Array;Jn.prototype.DefaultInterpolation=Eo;class Ss extends Jn{constructor(e,t,i){super(e,t,i)}}Ss.prototype.ValueTypeName="bool";Ss.prototype.ValueBufferType=Array;Ss.prototype.DefaultInterpolation=bo;Ss.prototype.InterpolantFactoryMethodLinear=void 0;Ss.prototype.InterpolantFactoryMethodSmooth=void 0;class ov extends Jn{}ov.prototype.ValueTypeName="color";class _s extends Jn{}_s.prototype.ValueTypeName="number";class r1 extends Oo{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(r-t);let c=e*a;for(let u=c+a;c!==u;c+=4)Ki.slerpFlat(s,0,o,c-a,o,c,l);return s}}class vs extends Jn{InterpolantFactoryMethodLinear(e){return new r1(this.times,this.values,this.getValueSize(),e)}}vs.prototype.ValueTypeName="quaternion";vs.prototype.InterpolantFactoryMethodSmooth=void 0;class bs extends Jn{constructor(e,t,i){super(e,t,i)}}bs.prototype.ValueTypeName="string";bs.prototype.ValueBufferType=Array;bs.prototype.DefaultInterpolation=bo;bs.prototype.InterpolantFactoryMethodLinear=void 0;bs.prototype.InterpolantFactoryMethodSmooth=void 0;class xs extends Jn{}xs.prototype.ValueTypeName="vector";class s1{constructor(e="",t=-1,i=[],r=kA){this.name=e,this.tracks=i,this.duration=t,this.blendMode=r,this.uuid=Dn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],i=e.tracks,r=1/(e.fps||1);for(let o=0,a=i.length;o!==a;++o)t.push(a1(i[o]).scale(r));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],i=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,o=i.length;s!==o;++s)t.push(Jn.toJSON(i[s]));return r}static CreateFromMorphTargetSequence(e,t,i,r){const s=t.length,o=[];for(let a=0;a<s;a++){let l=[],c=[];l.push((a+s-1)%s,a,(a+1)%s),c.push(0,1,0);const u=e1(l);l=jp(l,1,u),c=jp(c,1,u),!r&&l[0]===0&&(l.push(s),c.push(c[0])),o.push(new _s(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/i))}return new this(e,-1,o)}static findByName(e,t){let i=e;if(!Array.isArray(e)){const r=e;i=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<i.length;r++)if(i[r].name===t)return i[r];return null}static CreateClipsFromMorphTargetSequences(e,t,i){const r={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],u=c.name.match(s);if(u&&u.length>1){const f=u[1];let h=r[f];h||(r[f]=h=[]),h.push(c)}}const o=[];for(const a in r)o.push(this.CreateFromMorphTargetSequence(a,r[a],t,i));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const i=function(f,h,d,g,_){if(d.length!==0){const m=[],p=[];sv(d,m,p,g),m.length!==0&&_.push(new f(h,m,p))}},r=[],s=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let f=0;f<c.length;f++){const h=c[f].keys;if(!(!h||h.length===0))if(h[0].morphTargets){const d={};let g;for(g=0;g<h.length;g++)if(h[g].morphTargets)for(let _=0;_<h[g].morphTargets.length;_++)d[h[g].morphTargets[_]]=-1;for(const _ in d){const m=[],p=[];for(let b=0;b!==h[g].morphTargets.length;++b){const y=h[g];m.push(y.time),p.push(y.morphTarget===_?1:0)}r.push(new _s(".morphTargetInfluence["+_+"]",m,p))}l=d.length*o}else{const d=".bones["+t[f].name+"]";i(xs,d+".position",h,"pos",r),i(vs,d+".quaternion",h,"rot",r),i(xs,d+".scale",h,"scl",r)}}return r.length===0?null:new this(s,l,r,a)}resetDuration(){const e=this.tracks;let t=0;for(let i=0,r=e.length;i!==r;++i){const s=this.tracks[i];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function o1(n){switch(n.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return _s;case"vector":case"vector2":case"vector3":case"vector4":return xs;case"color":return ov;case"quaternion":return vs;case"bool":case"boolean":return Ss;case"string":return bs}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+n)}function a1(n){if(n.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=o1(n.type);if(n.times===void 0){const t=[],i=[];sv(n.keys,t,i,"value"),n.times=t,n.values=i}return e.parse!==void 0?e.parse(n):new e(n.name,n.times,n.values,n.interpolation)}const Vi={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class l1{constructor(e,t,i){const r=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){const f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=c.length;f<h;f+=2){const d=c[f],g=c[f+1];if(d.global&&(d.lastIndex=0),d.test(u))return g}return null}}}const av=new l1;class Es{constructor(e){this.manager=e!==void 0?e:av,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Es.DEFAULT_MATERIAL_NAME="__DEFAULT";const li={};class c1 extends Error{constructor(e,t){super(e),this.response=t}}class lv extends Es{constructor(e){super(e)}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=Vi.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(li[e]!==void 0){li[e].push({onLoad:t,onProgress:i,onError:r});return}li[e]=[],li[e].push({onLoad:t,onProgress:i,onError:r});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=li[e],f=c.body.getReader(),h=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),d=h?parseInt(h):0,g=d!==0;let _=0;const m=new ReadableStream({start(p){b();function b(){f.read().then(({done:y,value:v})=>{if(y)p.close();else{_+=v.byteLength;const P=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:d});for(let w=0,C=u.length;w<C;w++){const D=u[w];D.onProgress&&D.onProgress(P)}p.enqueue(v),b()}},y=>{p.error(y)})}}});return new Response(m)}else throw new c1(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{const f=/charset="?([^;"\s]*)"?/i.exec(a),h=f&&f[1]?f[1].toLowerCase():void 0,d=new TextDecoder(h);return c.arrayBuffer().then(g=>d.decode(g))}}}).then(c=>{Vi.add(e,c);const u=li[e];delete li[e];for(let f=0,h=u.length;f<h;f++){const d=u[f];d.onLoad&&d.onLoad(c)}}).catch(c=>{const u=li[e];if(u===void 0)throw this.manager.itemError(e),c;delete li[e];for(let f=0,h=u.length;f<h;f++){const d=u[f];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class u1 extends Es{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Vi.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=To("img");function l(){u(),Vi.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(f){u(),r&&r(f),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class f1 extends Es{constructor(e){super(e)}load(e,t,i,r){const s=new Pt,o=new u1(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},i,r),s}}class dh extends _t{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ke(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const Ac=new je,qp=new k,$p=new k;class ph{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ue(512,512),this.map=null,this.mapPass=null,this.matrix=new je,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new uh,this._frameExtents=new Ue(1,1),this._viewportCount=1,this._viewports=[new it(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;qp.setFromMatrixPosition(e.matrixWorld),t.position.copy(qp),$p.setFromMatrixPosition(e.target.matrixWorld),t.lookAt($p),t.updateMatrixWorld(),Ac.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ac),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Ac)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class h1 extends ph{constructor(){super(new Kt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,i=ps*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(i!==t.fov||r!==t.aspect||s!==t.far)&&(t.fov=i,t.aspect=r,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class d1 extends dh{constructor(e,t,i=0,r=Math.PI/3,s=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(_t.DEFAULT_UP),this.updateMatrix(),this.target=new _t,this.distance=i,this.angle=r,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new h1}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Yp=new je,Vs=new k,wc=new k;class p1 extends ph{constructor(){super(new Kt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ue(4,2),this._viewportCount=6,this._viewports=[new it(2,1,1,1),new it(0,1,1,1),new it(3,1,1,1),new it(1,1,1,1),new it(3,0,1,1),new it(1,0,1,1)],this._cubeDirections=[new k(1,0,0),new k(-1,0,0),new k(0,0,1),new k(0,0,-1),new k(0,1,0),new k(0,-1,0)],this._cubeUps=[new k(0,1,0),new k(0,1,0),new k(0,1,0),new k(0,1,0),new k(0,0,1),new k(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),Vs.setFromMatrixPosition(e.matrixWorld),i.position.copy(Vs),wc.copy(i.position),wc.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(wc),i.updateMatrixWorld(),r.makeTranslation(-Vs.x,-Vs.y,-Vs.z),Yp.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Yp)}}class m1 extends dh{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new p1}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class bl extends J0{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class g1 extends ph{constructor(){super(new bl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class uf extends dh{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(_t.DEFAULT_UP),this.updateMatrix(),this.target=new _t,this.shadow=new g1}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class ao{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let i=0,r=e.length;i<r;i++)t+=String.fromCharCode(e[i]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class _1 extends Es{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Vi.get(e);if(o!==void 0){if(s.manager.itemStart(e),o.then){o.then(c=>{t&&t(c),s.manager.itemEnd(e)}).catch(c=>{r&&r(c)});return}return setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(c){return Vi.add(e,c),t&&t(c),s.manager.itemEnd(e),c}).catch(function(c){r&&r(c),Vi.remove(e),s.manager.itemError(e),s.manager.itemEnd(e)});Vi.add(e,l),s.manager.itemStart(e)}}class v1 extends Kt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class cv{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Kp(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Kp();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Kp(){return performance.now()}const mh="\\[\\]\\.:\\/",x1=new RegExp("["+mh+"]","g"),gh="[^"+mh+"]",y1="[^"+mh.replace("\\.","")+"]",M1=/((?:WC+[\/:])*)/.source.replace("WC",gh),S1=/(WCOD+)?/.source.replace("WCOD",y1),b1=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",gh),E1=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",gh),T1=new RegExp("^"+M1+S1+b1+E1+"$"),A1=["material","materials","bones","map"];class w1{constructor(e,t,i){const r=i||ft.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();const i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,t)}setValue(e,t){const i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=i.length;r!==s;++r)i[r].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}}class ft{constructor(e,t,i){this.path=t,this.parsedPath=i||ft.parseTrackName(t),this.node=ft.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new ft.Composite(e,t,i):new ft(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(x1,"")}static parseTrackName(e){const t=T1.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=i.nodeName&&i.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){const s=i.nodeName.substring(r+1);A1.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,r),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){const i=function(s){for(let o=0;o<s.length;o++){const a=s[o];if(a.name===t||a.uuid===t)return a;const l=i(a.children);if(l)return l}return null},r=i(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)e[t++]=i[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,i=t.objectName,r=t.propertyName;let s=t.propertyIndex;if(e||(e=ft.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[r];if(o===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}ft.Composite=w1;ft.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ft.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ft.prototype.GetterByBindingType=[ft.prototype._getValue_direct,ft.prototype._getValue_array,ft.prototype._getValue_arrayElement,ft.prototype._getValue_toArray];ft.prototype.SetterByBindingTypeAndVersioning=[[ft.prototype._setValue_direct,ft.prototype._setValue_direct_setNeedsUpdate,ft.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ft.prototype._setValue_array,ft.prototype._setValue_array_setNeedsUpdate,ft.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ft.prototype._setValue_arrayElement,ft.prototype._setValue_arrayElement_setNeedsUpdate,ft.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ft.prototype._setValue_fromArray,ft.prototype._setValue_fromArray_setNeedsUpdate,ft.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const Zp=new je;class R1{constructor(e,t,i=0,r=1/0){this.ray=new No(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new ah,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Zp.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Zp),this}intersectObject(e,t=!0,i=[]){return ff(e,this,i,t),i.sort(Jp),i}intersectObjects(e,t=!0,i=[]){for(let r=0,s=e.length;r<s;r++)ff(e[r],this,i,t);return i.sort(Jp),i}}function Jp(n,e){return n.distance-e.distance}function ff(n,e,t,i){let r=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(r=!1),r===!0&&i===!0){const s=n.children;for(let o=0,a=s.length;o<a;o++)ff(s[o],e,t,!0)}}function Qp(n,e,t,i){const r=C1(i);switch(t){case O0:return n*e;case B0:return n*e;case k0:return n*e*2;case nh:return n*e/r.components*r.byteLength;case ih:return n*e/r.components*r.byteLength;case H0:return n*e*2/r.components*r.byteLength;case rh:return n*e*2/r.components*r.byteLength;case F0:return n*e*3/r.components*r.byteLength;case yn:return n*e*4/r.components*r.byteLength;case sh:return n*e*4/r.components*r.byteLength;case Ia:case La:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Da:case Na:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Du:case Uu:return Math.max(n,16)*Math.max(e,8)/4;case Lu:case Nu:return Math.max(n,8)*Math.max(e,8)/2;case Ou:case Fu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Bu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ku:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Hu:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case zu:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Vu:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Gu:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Wu:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Xu:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case ju:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case qu:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case $u:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Yu:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Ku:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Zu:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Ju:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Ua:case Qu:case ef:return Math.ceil(n/4)*Math.ceil(e/4)*16;case z0:case tf:return Math.ceil(n/4)*Math.ceil(e/4)*8;case nf:case rf:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function C1(n){switch(n){case Mi:case D0:return{byteLength:1,components:1};case So:case N0:case vi:return{byteLength:2,components:1};case eh:case th:return{byteLength:2,components:4};case Er:case Qf:case In:return{byteLength:4,components:1};case U0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Jf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Jf);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function uv(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function P1(n){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,f=c.byteLength,h=n.createBuffer();n.bindBuffer(l,h),n.bufferData(l,c,u),a.onUploadCallback();let d;if(c instanceof Float32Array)d=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=n.SHORT;else if(c instanceof Uint32Array)d=n.UNSIGNED_INT;else if(c instanceof Int32Array)d=n.INT;else if(c instanceof Int8Array)d=n.BYTE;else if(c instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,c){const u=l.array,f=l.updateRanges;if(n.bindBuffer(c,a),f.length===0)n.bufferSubData(c,0,u);else{f.sort((d,g)=>d.start-g.start);let h=0;for(let d=1;d<f.length;d++){const g=f[h],_=f[d];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++h,f[h]=_)}f.length=h+1;for(let d=0,g=f.length;d<g;d++){const _=f[d];n.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var I1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,L1=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,D1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,N1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,U1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,O1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,F1=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,B1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,k1=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,H1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,z1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,V1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,G1=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,W1=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,X1=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,j1=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,q1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,$1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Y1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,K1=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Z1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,J1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Q1=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,eR=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,tR=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,nR=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,iR=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,rR=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,sR=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,oR=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,aR="gl_FragColor = linearToOutputTexel( gl_FragColor );",lR=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,cR=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,uR=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,fR=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,hR=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,dR=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,pR=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,mR=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,gR=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,_R=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,vR=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,xR=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,yR=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,MR=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,SR=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,bR=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,ER=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,TR=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,AR=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,wR=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,RR=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,CR=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,PR=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,IR=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,LR=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,DR=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,NR=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,UR=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,OR=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,FR=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,BR=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,kR=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,HR=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,zR=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,VR=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,GR=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,WR=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,XR=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,jR=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,qR=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$R=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,YR=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,KR=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ZR=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,JR=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,QR=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,eC=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,tC=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,nC=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iC=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,rC=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,sC=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,oC=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,aC=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,lC=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,cC=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,uC=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,fC=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,hC=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,dC=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,pC=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,mC=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,gC=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,_C=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,vC=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,xC=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,yC=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,MC=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,SC=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,bC=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,EC=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,TC=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,AC=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,wC=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,RC=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,CC=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const PC=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,IC=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,LC=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,DC=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,NC=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,UC=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,OC=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,FC=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,BC=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,kC=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,HC=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,zC=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,VC=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,GC=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,WC=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,XC=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jC=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,qC=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$C=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,YC=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,KC=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,ZC=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,JC=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,QC=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,eP=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,tP=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,nP=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,iP=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rP=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,sP=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,oP=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,aP=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,lP=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,cP=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ke={alphahash_fragment:I1,alphahash_pars_fragment:L1,alphamap_fragment:D1,alphamap_pars_fragment:N1,alphatest_fragment:U1,alphatest_pars_fragment:O1,aomap_fragment:F1,aomap_pars_fragment:B1,batching_pars_vertex:k1,batching_vertex:H1,begin_vertex:z1,beginnormal_vertex:V1,bsdfs:G1,iridescence_fragment:W1,bumpmap_pars_fragment:X1,clipping_planes_fragment:j1,clipping_planes_pars_fragment:q1,clipping_planes_pars_vertex:$1,clipping_planes_vertex:Y1,color_fragment:K1,color_pars_fragment:Z1,color_pars_vertex:J1,color_vertex:Q1,common:eR,cube_uv_reflection_fragment:tR,defaultnormal_vertex:nR,displacementmap_pars_vertex:iR,displacementmap_vertex:rR,emissivemap_fragment:sR,emissivemap_pars_fragment:oR,colorspace_fragment:aR,colorspace_pars_fragment:lR,envmap_fragment:cR,envmap_common_pars_fragment:uR,envmap_pars_fragment:fR,envmap_pars_vertex:hR,envmap_physical_pars_fragment:bR,envmap_vertex:dR,fog_vertex:pR,fog_pars_vertex:mR,fog_fragment:gR,fog_pars_fragment:_R,gradientmap_pars_fragment:vR,lightmap_pars_fragment:xR,lights_lambert_fragment:yR,lights_lambert_pars_fragment:MR,lights_pars_begin:SR,lights_toon_fragment:ER,lights_toon_pars_fragment:TR,lights_phong_fragment:AR,lights_phong_pars_fragment:wR,lights_physical_fragment:RR,lights_physical_pars_fragment:CR,lights_fragment_begin:PR,lights_fragment_maps:IR,lights_fragment_end:LR,logdepthbuf_fragment:DR,logdepthbuf_pars_fragment:NR,logdepthbuf_pars_vertex:UR,logdepthbuf_vertex:OR,map_fragment:FR,map_pars_fragment:BR,map_particle_fragment:kR,map_particle_pars_fragment:HR,metalnessmap_fragment:zR,metalnessmap_pars_fragment:VR,morphinstance_vertex:GR,morphcolor_vertex:WR,morphnormal_vertex:XR,morphtarget_pars_vertex:jR,morphtarget_vertex:qR,normal_fragment_begin:$R,normal_fragment_maps:YR,normal_pars_fragment:KR,normal_pars_vertex:ZR,normal_vertex:JR,normalmap_pars_fragment:QR,clearcoat_normal_fragment_begin:eC,clearcoat_normal_fragment_maps:tC,clearcoat_pars_fragment:nC,iridescence_pars_fragment:iC,opaque_fragment:rC,packing:sC,premultiplied_alpha_fragment:oC,project_vertex:aC,dithering_fragment:lC,dithering_pars_fragment:cC,roughnessmap_fragment:uC,roughnessmap_pars_fragment:fC,shadowmap_pars_fragment:hC,shadowmap_pars_vertex:dC,shadowmap_vertex:pC,shadowmask_pars_fragment:mC,skinbase_vertex:gC,skinning_pars_vertex:_C,skinning_vertex:vC,skinnormal_vertex:xC,specularmap_fragment:yC,specularmap_pars_fragment:MC,tonemapping_fragment:SC,tonemapping_pars_fragment:bC,transmission_fragment:EC,transmission_pars_fragment:TC,uv_pars_fragment:AC,uv_pars_vertex:wC,uv_vertex:RC,worldpos_vertex:CC,background_vert:PC,background_frag:IC,backgroundCube_vert:LC,backgroundCube_frag:DC,cube_vert:NC,cube_frag:UC,depth_vert:OC,depth_frag:FC,distanceRGBA_vert:BC,distanceRGBA_frag:kC,equirect_vert:HC,equirect_frag:zC,linedashed_vert:VC,linedashed_frag:GC,meshbasic_vert:WC,meshbasic_frag:XC,meshlambert_vert:jC,meshlambert_frag:qC,meshmatcap_vert:$C,meshmatcap_frag:YC,meshnormal_vert:KC,meshnormal_frag:ZC,meshphong_vert:JC,meshphong_frag:QC,meshphysical_vert:eP,meshphysical_frag:tP,meshtoon_vert:nP,meshtoon_frag:iP,points_vert:rP,points_frag:sP,shadow_vert:oP,shadow_frag:aP,sprite_vert:lP,sprite_frag:cP},Me={common:{diffuse:{value:new ke(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ye}},envmap:{envMap:{value:null},envMapRotation:{value:new Ye},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ye}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ye}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ye},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ye},normalScale:{value:new Ue(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ye},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ye}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ye}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ye}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ke(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ke(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0},uvTransform:{value:new Ye}},sprite:{diffuse:{value:new ke(16777215)},opacity:{value:1},center:{value:new Ue(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}}},Wn={basic:{uniforms:qt([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.fog]),vertexShader:Ke.meshbasic_vert,fragmentShader:Ke.meshbasic_frag},lambert:{uniforms:qt([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new ke(0)}}]),vertexShader:Ke.meshlambert_vert,fragmentShader:Ke.meshlambert_frag},phong:{uniforms:qt([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new ke(0)},specular:{value:new ke(1118481)},shininess:{value:30}}]),vertexShader:Ke.meshphong_vert,fragmentShader:Ke.meshphong_frag},standard:{uniforms:qt([Me.common,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.roughnessmap,Me.metalnessmap,Me.fog,Me.lights,{emissive:{value:new ke(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag},toon:{uniforms:qt([Me.common,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.gradientmap,Me.fog,Me.lights,{emissive:{value:new ke(0)}}]),vertexShader:Ke.meshtoon_vert,fragmentShader:Ke.meshtoon_frag},matcap:{uniforms:qt([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,{matcap:{value:null}}]),vertexShader:Ke.meshmatcap_vert,fragmentShader:Ke.meshmatcap_frag},points:{uniforms:qt([Me.points,Me.fog]),vertexShader:Ke.points_vert,fragmentShader:Ke.points_frag},dashed:{uniforms:qt([Me.common,Me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ke.linedashed_vert,fragmentShader:Ke.linedashed_frag},depth:{uniforms:qt([Me.common,Me.displacementmap]),vertexShader:Ke.depth_vert,fragmentShader:Ke.depth_frag},normal:{uniforms:qt([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,{opacity:{value:1}}]),vertexShader:Ke.meshnormal_vert,fragmentShader:Ke.meshnormal_frag},sprite:{uniforms:qt([Me.sprite,Me.fog]),vertexShader:Ke.sprite_vert,fragmentShader:Ke.sprite_frag},background:{uniforms:{uvTransform:{value:new Ye},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ke.background_vert,fragmentShader:Ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ye}},vertexShader:Ke.backgroundCube_vert,fragmentShader:Ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ke.cube_vert,fragmentShader:Ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ke.equirect_vert,fragmentShader:Ke.equirect_frag},distanceRGBA:{uniforms:qt([Me.common,Me.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ke.distanceRGBA_vert,fragmentShader:Ke.distanceRGBA_frag},shadow:{uniforms:qt([Me.lights,Me.fog,{color:{value:new ke(0)},opacity:{value:1}}]),vertexShader:Ke.shadow_vert,fragmentShader:Ke.shadow_frag}};Wn.physical={uniforms:qt([Wn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ye},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ye},clearcoatNormalScale:{value:new Ue(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ye},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ye},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ye},sheen:{value:0},sheenColor:{value:new ke(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ye},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ye},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ye},transmissionSamplerSize:{value:new Ue},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ye},attenuationDistance:{value:0},attenuationColor:{value:new ke(0)},specularColor:{value:new ke(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ye},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ye},anisotropyVector:{value:new Ue},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ye}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag};const ga={r:0,b:0,g:0},cr=new $n,uP=new je;function fP(n,e,t,i,r,s,o){const a=new ke(0);let l=s===!0?0:1,c,u,f=null,h=0,d=null;function g(y){let v=y.isScene===!0?y.background:null;return v&&v.isTexture&&(v=(y.backgroundBlurriness>0?t:e).get(v)),v}function _(y){let v=!1;const P=g(y);P===null?p(a,l):P&&P.isColor&&(p(P,1),v=!0);const w=n.xr.getEnvironmentBlendMode();w==="additive"?i.buffers.color.setClear(0,0,0,1,o):w==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||v)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(y,v){const P=g(v);P&&(P.isCubeTexture||P.mapping===Ml)?(u===void 0&&(u=new on(new Uo(1,1,1),new zt({name:"BackgroundCubeMaterial",uniforms:ms(Wn.backgroundCube.uniforms),vertexShader:Wn.backgroundCube.vertexShader,fragmentShader:Wn.backgroundCube.fragmentShader,side:an,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(w,C,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),cr.copy(v.backgroundRotation),cr.x*=-1,cr.y*=-1,cr.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(cr.y*=-1,cr.z*=-1),u.material.uniforms.envMap.value=P,u.material.uniforms.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(uP.makeRotationFromEuler(cr)),u.material.toneMapped=Qe.getTransfer(P.colorSpace)!==ct,(f!==P||h!==P.version||d!==n.toneMapping)&&(u.material.needsUpdate=!0,f=P,h=P.version,d=n.toneMapping),u.layers.enableAll(),y.unshift(u,u.geometry,u.material,0,0,null)):P&&P.isTexture&&(c===void 0&&(c=new on(new Sl(2,2),new zt({name:"BackgroundMaterial",uniforms:ms(Wn.background.uniforms),vertexShader:Wn.background.vertexShader,fragmentShader:Wn.background.fragmentShader,side:yi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=P,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=Qe.getTransfer(P.colorSpace)!==ct,P.matrixAutoUpdate===!0&&P.updateMatrix(),c.material.uniforms.uvTransform.value.copy(P.matrix),(f!==P||h!==P.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,f=P,h=P.version,d=n.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function p(y,v){y.getRGB(ga,Z0(n)),i.buffers.color.setClear(ga.r,ga.g,ga.b,v,o)}function b(){u!==void 0&&(u.geometry.dispose(),u.material.dispose()),c!==void 0&&(c.geometry.dispose(),c.material.dispose())}return{getClearColor:function(){return a},setClearColor:function(y,v=1){a.set(y),l=v,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,p(a,l)},render:_,addToRenderList:m,dispose:b}}function hP(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,o=!1;function a(M,L,U,O,W){let Q=!1;const j=f(O,U,L);s!==j&&(s=j,c(s.object)),Q=d(M,O,U,W),Q&&g(M,O,U,W),W!==null&&e.update(W,n.ELEMENT_ARRAY_BUFFER),(Q||o)&&(o=!1,v(M,L,U,O),W!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function l(){return n.createVertexArray()}function c(M){return n.bindVertexArray(M)}function u(M){return n.deleteVertexArray(M)}function f(M,L,U){const O=U.wireframe===!0;let W=i[M.id];W===void 0&&(W={},i[M.id]=W);let Q=W[L.id];Q===void 0&&(Q={},W[L.id]=Q);let j=Q[O];return j===void 0&&(j=h(l()),Q[O]=j),j}function h(M){const L=[],U=[],O=[];for(let W=0;W<t;W++)L[W]=0,U[W]=0,O[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:U,attributeDivisors:O,object:M,attributes:{},index:null}}function d(M,L,U,O){const W=s.attributes,Q=L.attributes;let j=0;const ee=U.getAttributes();for(const z in ee)if(ee[z].location>=0){const _e=W[z];let Ee=Q[z];if(Ee===void 0&&(z==="instanceMatrix"&&M.instanceMatrix&&(Ee=M.instanceMatrix),z==="instanceColor"&&M.instanceColor&&(Ee=M.instanceColor)),_e===void 0||_e.attribute!==Ee||Ee&&_e.data!==Ee.data)return!0;j++}return s.attributesNum!==j||s.index!==O}function g(M,L,U,O){const W={},Q=L.attributes;let j=0;const ee=U.getAttributes();for(const z in ee)if(ee[z].location>=0){let _e=Q[z];_e===void 0&&(z==="instanceMatrix"&&M.instanceMatrix&&(_e=M.instanceMatrix),z==="instanceColor"&&M.instanceColor&&(_e=M.instanceColor));const Ee={};Ee.attribute=_e,_e&&_e.data&&(Ee.data=_e.data),W[z]=Ee,j++}s.attributes=W,s.attributesNum=j,s.index=O}function _(){const M=s.newAttributes;for(let L=0,U=M.length;L<U;L++)M[L]=0}function m(M){p(M,0)}function p(M,L){const U=s.newAttributes,O=s.enabledAttributes,W=s.attributeDivisors;U[M]=1,O[M]===0&&(n.enableVertexAttribArray(M),O[M]=1),W[M]!==L&&(n.vertexAttribDivisor(M,L),W[M]=L)}function b(){const M=s.newAttributes,L=s.enabledAttributes;for(let U=0,O=L.length;U<O;U++)L[U]!==M[U]&&(n.disableVertexAttribArray(U),L[U]=0)}function y(M,L,U,O,W,Q,j){j===!0?n.vertexAttribIPointer(M,L,U,W,Q):n.vertexAttribPointer(M,L,U,O,W,Q)}function v(M,L,U,O){_();const W=O.attributes,Q=U.getAttributes(),j=L.defaultAttributeValues;for(const ee in Q){const z=Q[ee];if(z.location>=0){let de=W[ee];if(de===void 0&&(ee==="instanceMatrix"&&M.instanceMatrix&&(de=M.instanceMatrix),ee==="instanceColor"&&M.instanceColor&&(de=M.instanceColor)),de!==void 0){const _e=de.normalized,Ee=de.itemSize,Ce=e.get(de);if(Ce===void 0)continue;const Xe=Ce.buffer,re=Ce.type,he=Ce.bytesPerElement,ye=re===n.INT||re===n.UNSIGNED_INT||de.gpuType===Qf;if(de.isInterleavedBufferAttribute){const F=de.data,oe=F.stride,se=de.offset;if(F.isInstancedInterleavedBuffer){for(let ue=0;ue<z.locationSize;ue++)p(z.location+ue,F.meshPerAttribute);M.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=F.meshPerAttribute*F.count)}else for(let ue=0;ue<z.locationSize;ue++)m(z.location+ue);n.bindBuffer(n.ARRAY_BUFFER,Xe);for(let ue=0;ue<z.locationSize;ue++)y(z.location+ue,Ee/z.locationSize,re,_e,oe*he,(se+Ee/z.locationSize*ue)*he,ye)}else{if(de.isInstancedBufferAttribute){for(let F=0;F<z.locationSize;F++)p(z.location+F,de.meshPerAttribute);M.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let F=0;F<z.locationSize;F++)m(z.location+F);n.bindBuffer(n.ARRAY_BUFFER,Xe);for(let F=0;F<z.locationSize;F++)y(z.location+F,Ee/z.locationSize,re,_e,Ee*he,Ee/z.locationSize*F*he,ye)}}else if(j!==void 0){const _e=j[ee];if(_e!==void 0)switch(_e.length){case 2:n.vertexAttrib2fv(z.location,_e);break;case 3:n.vertexAttrib3fv(z.location,_e);break;case 4:n.vertexAttrib4fv(z.location,_e);break;default:n.vertexAttrib1fv(z.location,_e)}}}}b()}function P(){D();for(const M in i){const L=i[M];for(const U in L){const O=L[U];for(const W in O)u(O[W].object),delete O[W];delete L[U]}delete i[M]}}function w(M){if(i[M.id]===void 0)return;const L=i[M.id];for(const U in L){const O=L[U];for(const W in O)u(O[W].object),delete O[W];delete L[U]}delete i[M.id]}function C(M){for(const L in i){const U=i[L];if(U[M.id]===void 0)continue;const O=U[M.id];for(const W in O)u(O[W].object),delete O[W];delete U[M.id]}}function D(){T(),o=!0,s!==r&&(s=r,c(s.object))}function T(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:D,resetDefaultState:T,dispose:P,releaseStatesOfGeometry:w,releaseStatesOfProgram:C,initAttributes:_,enableAttribute:m,disableUnusedAttributes:b}}function dP(n,e,t){let i;function r(c){i=c}function s(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function o(c,u,f){f!==0&&(n.drawArraysInstanced(i,c,u,f),t.update(u,i,f))}function a(c,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,f);let d=0;for(let g=0;g<f;g++)d+=u[g];t.update(d,i,1)}function l(c,u,f,h){if(f===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<c.length;g++)o(c[g],u[g],h[g]);else{d.multiDrawArraysInstancedWEBGL(i,c,0,u,0,h,0,f);let g=0;for(let _=0;_<f;_++)g+=u[_]*h[_];t.update(g,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function pP(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(C){return!(C!==yn&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){const D=C===vi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==Mi&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==In&&!D)}function l(C){if(C==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=t.logarithmicDepthBuffer===!0,h=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),b=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),y=n.getParameter(n.MAX_VARYING_VECTORS),v=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),P=g>0,w=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:h,maxTextures:d,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:b,maxVaryings:y,maxFragmentUniforms:v,vertexTextures:P,maxSamples:w}}function mP(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new dr,a=new Ye,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const d=f.length!==0||h||i!==0||r;return r=h,i=f.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){t=u(f,h,0)},this.setState=function(f,h,d){const g=f.clippingPlanes,_=f.clipIntersection,m=f.clipShadows,p=n.get(f);if(!r||g===null||g.length===0||s&&!m)s?u(null):c();else{const b=s?0:i,y=b*4;let v=p.clippingState||null;l.value=v,v=u(g,h,y,d);for(let P=0;P!==y;++P)v[P]=t[P];p.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,h,d,g){const _=f!==null?f.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=d+_*4,b=h.matrixWorldInverse;a.getNormalMatrix(b),(m===null||m.length<p)&&(m=new Float32Array(p));for(let y=0,v=d;y!==_;++y,v+=4)o.copy(f[y]).applyMatrix4(b,a),o.normal.toArray(m,v),m[v+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function gP(n){let e=new WeakMap;function t(o,a){return a===Pu?o.mapping=cs:a===Iu&&(o.mapping=us),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Pu||a===Iu)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Fw(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const Yr=4,em=[.125,.215,.35,.446,.526,.582],vr=20,Rc=new bl,tm=new ke;let Cc=null,Pc=0,Ic=0,Lc=!1;const pr=(1+Math.sqrt(5))/2,Wr=1/pr,nm=[new k(-pr,Wr,0),new k(pr,Wr,0),new k(-Wr,0,pr),new k(Wr,0,pr),new k(0,pr,-Wr),new k(0,pr,Wr),new k(-1,1,-1),new k(1,1,-1),new k(-1,1,1),new k(1,1,1)];class im{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){Cc=this._renderer.getRenderTarget(),Pc=this._renderer.getActiveCubeFace(),Ic=this._renderer.getActiveMipmapLevel(),Lc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=om(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=sm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Cc,Pc,Ic),this._renderer.xr.enabled=Lc,e.scissorTest=!1,_a(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===cs||e.mapping===us?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Cc=this._renderer.getRenderTarget(),Pc=this._renderer.getActiveCubeFace(),Ic=this._renderer.getActiveMipmapLevel(),Lc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:pn,minFilter:pn,generateMipmaps:!1,type:vi,format:yn,colorSpace:Qt,depthBuffer:!1},r=rm(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=rm(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=_P(s)),this._blurMaterial=vP(s,e,t)}return r}_compileMaterial(e){const t=new on(this._lodPlanes[0],e);this._renderer.compile(t,Rc)}_sceneToCubeUV(e,t,i,r){const a=new Kt(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,h=u.toneMapping;u.getClearColor(tm),u.toneMapping=Wi,u.autoClear=!1;const d=new Hi({name:"PMREM.Background",side:an,depthWrite:!1,depthTest:!1}),g=new on(new Uo,d);let _=!1;const m=e.background;m?m.isColor&&(d.color.copy(m),e.background=null,_=!0):(d.color.copy(tm),_=!0);for(let p=0;p<6;p++){const b=p%3;b===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):b===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const y=this._cubeSize;_a(r,b*y,p>2?y:0,y,y),u.setRenderTarget(r),_&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=h,u.autoClear=f,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===cs||e.mapping===us;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=om()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=sm());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new on(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;_a(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Rc)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=nm[(r-s-1)%nm.length];this._blur(e,s-1,s,o,a)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new on(this._lodPlanes[r],c),h=c.uniforms,d=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*vr-1),_=s/g,m=isFinite(s)?1+Math.floor(u*_):vr;m>vr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${vr}`);const p=[];let b=0;for(let C=0;C<vr;++C){const D=C/_,T=Math.exp(-D*D/2);p.push(T),C===0?b+=T:C<m&&(b+=2*T)}for(let C=0;C<p.length;C++)p[C]=p[C]/b;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=p,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:y}=this;h.dTheta.value=g,h.mipInt.value=y-i;const v=this._sizeLods[r],P=3*v*(r>y-Yr?r-y+Yr:0),w=4*(this._cubeSize-v);_a(t,P,w,3*v,2*v),l.setRenderTarget(t),l.render(f,Rc)}}function _P(n){const e=[],t=[],i=[];let r=n;const s=n-Yr+1+em.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>n-Yr?l=em[o-n+Yr-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],d=6,g=6,_=3,m=2,p=1,b=new Float32Array(_*g*d),y=new Float32Array(m*g*d),v=new Float32Array(p*g*d);for(let w=0;w<d;w++){const C=w%3*2/3-1,D=w>2?0:-1,T=[C,D,0,C+2/3,D,0,C+2/3,D+1,0,C,D,0,C+2/3,D+1,0,C,D+1,0];b.set(T,_*g*w),y.set(h,m*g*w);const M=[w,w,w,w,w,w];v.set(M,p*g*w)}const P=new Bn;P.setAttribute("position",new Jt(b,_)),P.setAttribute("uv",new Jt(y,m)),P.setAttribute("faceIndex",new Jt(v,p)),e.push(P),r>Yr&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function rm(n,e,t){const i=new Nn(n,e,t);return i.texture.mapping=Ml,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function _a(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function vP(n,e,t){const i=new Float32Array(vr),r=new k(0,1,0);return new zt({name:"SphericalGaussianBlur",defines:{n:vr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:_h(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:_i,depthTest:!1,depthWrite:!1})}function sm(){return new zt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:_h(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:_i,depthTest:!1,depthWrite:!1})}function om(){return new zt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:_h(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:_i,depthTest:!1,depthWrite:!1})}function _h(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function xP(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Pu||l===Iu,u=l===cs||l===us;if(c||u){let f=e.get(a);const h=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return t===null&&(t=new im(n)),f=c?t.fromEquirectangular(a,f):t.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{const d=a.image;return c&&d&&d.height>0||u&&d&&r(d)?(t===null&&(t=new im(n)),f=c?t.fromEquirectangular(a):t.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function yP(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&$r("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function MP(n,e,t,i){const r={},s=new WeakMap;function o(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);h.removeEventListener("dispose",o),delete r[h.id];const d=s.get(h);d&&(e.remove(d),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(f,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const d in h)e.update(h[d],n.ARRAY_BUFFER)}function c(f){const h=[],d=f.index,g=f.attributes.position;let _=0;if(d!==null){const b=d.array;_=d.version;for(let y=0,v=b.length;y<v;y+=3){const P=b[y+0],w=b[y+1],C=b[y+2];h.push(P,w,w,C,C,P)}}else if(g!==void 0){const b=g.array;_=g.version;for(let y=0,v=b.length/3-1;y<v;y+=3){const P=y+0,w=y+1,C=y+2;h.push(P,w,w,C,C,P)}}else return;const m=new(X0(h)?K0:Y0)(h,1);m.version=_;const p=s.get(f);p&&e.remove(p),s.set(f,m)}function u(f){const h=s.get(f);if(h){const d=f.index;d!==null&&h.version<d.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function SP(n,e,t){let i;function r(h){i=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function l(h,d){n.drawElements(i,d,s,h*o),t.update(d,i,1)}function c(h,d,g){g!==0&&(n.drawElementsInstanced(i,d,s,h*o,g),t.update(d,i,g))}function u(h,d,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,s,h,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];t.update(m,i,1)}function f(h,d,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<h.length;p++)c(h[p]/o,d[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(i,d,0,s,h,0,_,0,g);let p=0;for(let b=0;b<g;b++)p+=d[b]*_[b];t.update(p,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function bP(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function EP(n,e,t){const i=new WeakMap,r=new it;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0;let h=i.get(a);if(h===void 0||h.count!==f){let T=function(){C.dispose(),i.delete(a),a.removeEventListener("dispose",T)};h!==void 0&&h.texture.dispose();const d=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],b=a.morphAttributes.color||[];let y=0;d===!0&&(y=1),g===!0&&(y=2),_===!0&&(y=3);let v=a.attributes.position.count*y,P=1;v>e.maxTextureSize&&(P=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);const w=new Float32Array(v*P*4*f),C=new q0(w,v,P,f);C.type=In,C.needsUpdate=!0;const D=y*4;for(let M=0;M<f;M++){const L=m[M],U=p[M],O=b[M],W=v*P*4*M;for(let Q=0;Q<L.count;Q++){const j=Q*D;d===!0&&(r.fromBufferAttribute(L,Q),w[W+j+0]=r.x,w[W+j+1]=r.y,w[W+j+2]=r.z,w[W+j+3]=0),g===!0&&(r.fromBufferAttribute(U,Q),w[W+j+4]=r.x,w[W+j+5]=r.y,w[W+j+6]=r.z,w[W+j+7]=0),_===!0&&(r.fromBufferAttribute(O,Q),w[W+j+8]=r.x,w[W+j+9]=r.y,w[W+j+10]=r.z,w[W+j+11]=O.itemSize===4?r.w:1)}}h={count:f,texture:C,size:new Ue(v,P)},i.set(a,h),a.addEventListener("dispose",T)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let d=0;for(let _=0;_<c.length;_++)d+=c[_];const g=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:s}}function TP(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return f}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}const fv=new Pt,am=new rv(1,1),hv=new q0,dv=new Sw,pv=new Q0,lm=[],cm=[],um=new Float32Array(16),fm=new Float32Array(9),hm=new Float32Array(4);function Ts(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=lm[r];if(s===void 0&&(s=new Float32Array(r),lm[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function At(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function wt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function El(n,e){let t=cm[e];t===void 0&&(t=new Int32Array(e),cm[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function AP(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function wP(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(At(t,e))return;n.uniform2fv(this.addr,e),wt(t,e)}}function RP(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(At(t,e))return;n.uniform3fv(this.addr,e),wt(t,e)}}function CP(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(At(t,e))return;n.uniform4fv(this.addr,e),wt(t,e)}}function PP(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(At(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),wt(t,e)}else{if(At(t,i))return;hm.set(i),n.uniformMatrix2fv(this.addr,!1,hm),wt(t,i)}}function IP(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(At(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),wt(t,e)}else{if(At(t,i))return;fm.set(i),n.uniformMatrix3fv(this.addr,!1,fm),wt(t,i)}}function LP(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(At(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),wt(t,e)}else{if(At(t,i))return;um.set(i),n.uniformMatrix4fv(this.addr,!1,um),wt(t,i)}}function DP(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function NP(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(At(t,e))return;n.uniform2iv(this.addr,e),wt(t,e)}}function UP(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(At(t,e))return;n.uniform3iv(this.addr,e),wt(t,e)}}function OP(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(At(t,e))return;n.uniform4iv(this.addr,e),wt(t,e)}}function FP(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function BP(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(At(t,e))return;n.uniform2uiv(this.addr,e),wt(t,e)}}function kP(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(At(t,e))return;n.uniform3uiv(this.addr,e),wt(t,e)}}function HP(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(At(t,e))return;n.uniform4uiv(this.addr,e),wt(t,e)}}function zP(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(am.compareFunction=W0,s=am):s=fv,t.setTexture2D(e||s,r)}function VP(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||dv,r)}function GP(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||pv,r)}function WP(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||hv,r)}function XP(n){switch(n){case 5126:return AP;case 35664:return wP;case 35665:return RP;case 35666:return CP;case 35674:return PP;case 35675:return IP;case 35676:return LP;case 5124:case 35670:return DP;case 35667:case 35671:return NP;case 35668:case 35672:return UP;case 35669:case 35673:return OP;case 5125:return FP;case 36294:return BP;case 36295:return kP;case 36296:return HP;case 35678:case 36198:case 36298:case 36306:case 35682:return zP;case 35679:case 36299:case 36307:return VP;case 35680:case 36300:case 36308:case 36293:return GP;case 36289:case 36303:case 36311:case 36292:return WP}}function jP(n,e){n.uniform1fv(this.addr,e)}function qP(n,e){const t=Ts(e,this.size,2);n.uniform2fv(this.addr,t)}function $P(n,e){const t=Ts(e,this.size,3);n.uniform3fv(this.addr,t)}function YP(n,e){const t=Ts(e,this.size,4);n.uniform4fv(this.addr,t)}function KP(n,e){const t=Ts(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function ZP(n,e){const t=Ts(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function JP(n,e){const t=Ts(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function QP(n,e){n.uniform1iv(this.addr,e)}function eI(n,e){n.uniform2iv(this.addr,e)}function tI(n,e){n.uniform3iv(this.addr,e)}function nI(n,e){n.uniform4iv(this.addr,e)}function iI(n,e){n.uniform1uiv(this.addr,e)}function rI(n,e){n.uniform2uiv(this.addr,e)}function sI(n,e){n.uniform3uiv(this.addr,e)}function oI(n,e){n.uniform4uiv(this.addr,e)}function aI(n,e,t){const i=this.cache,r=e.length,s=El(t,r);At(i,s)||(n.uniform1iv(this.addr,s),wt(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||fv,s[o])}function lI(n,e,t){const i=this.cache,r=e.length,s=El(t,r);At(i,s)||(n.uniform1iv(this.addr,s),wt(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||dv,s[o])}function cI(n,e,t){const i=this.cache,r=e.length,s=El(t,r);At(i,s)||(n.uniform1iv(this.addr,s),wt(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||pv,s[o])}function uI(n,e,t){const i=this.cache,r=e.length,s=El(t,r);At(i,s)||(n.uniform1iv(this.addr,s),wt(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||hv,s[o])}function fI(n){switch(n){case 5126:return jP;case 35664:return qP;case 35665:return $P;case 35666:return YP;case 35674:return KP;case 35675:return ZP;case 35676:return JP;case 5124:case 35670:return QP;case 35667:case 35671:return eI;case 35668:case 35672:return tI;case 35669:case 35673:return nI;case 5125:return iI;case 36294:return rI;case 36295:return sI;case 36296:return oI;case 35678:case 36198:case 36298:case 36306:case 35682:return aI;case 35679:case 36299:case 36307:return lI;case 35680:case 36300:case 36308:case 36293:return cI;case 36289:case 36303:case 36311:case 36292:return uI}}class hI{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=XP(t.type)}}class dI{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=fI(t.type)}}class pI{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const Dc=/(\w+)(\])?(\[|\.)?/g;function dm(n,e){n.seq.push(e),n.map[e.id]=e}function mI(n,e,t){const i=n.name,r=i.length;for(Dc.lastIndex=0;;){const s=Dc.exec(i),o=Dc.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){dm(t,c===void 0?new hI(a,n,e):new dI(a,n,e));break}else{let f=t.map[a];f===void 0&&(f=new pI(a),dm(t,f)),t=f}}}class Oa{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);mI(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function pm(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const gI=37297;let _I=0;function vI(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const mm=new Ye;function xI(n){Qe._getMatrix(mm,Qe.workingColorSpace,n);const e=`mat3( ${mm.elements.map(t=>t.toFixed(4))} )`;switch(Qe.getTransfer(n)){case Ya:return[e,"LinearTransferOETF"];case ct:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function gm(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+vI(n.getShaderSource(e),o)}else return r}function yI(n,e){const t=xI(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function MI(n,e){let t;switch(e){case T0:t="Linear";break;case A0:t="Reinhard";break;case w0:t="Cineon";break;case R0:t="ACESFilmic";break;case C0:t="AgX";break;case P0:t="Neutral";break;case FA:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const va=new k;function SI(){Qe.getLuminanceCoefficients(va);const n=va.x.toFixed(4),e=va.y.toFixed(4),t=va.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function bI(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(js).join(`
`)}function EI(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function TI(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function js(n){return n!==""}function _m(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function vm(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const AI=/^[ \t]*#include +<([\w\d./]+)>/gm;function hf(n){return n.replace(AI,RI)}const wI=new Map;function RI(n,e){let t=Ke[e];if(t===void 0){const i=wI.get(e);if(i!==void 0)t=Ke[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return hf(t)}const CI=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function xm(n){return n.replace(CI,PI)}function PI(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function ym(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function II(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===b0?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===gA?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===ui&&(e="SHADOWMAP_TYPE_VSM"),e}function LI(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case cs:case us:e="ENVMAP_TYPE_CUBE";break;case Ml:e="ENVMAP_TYPE_CUBE_UV";break}return e}function DI(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case us:e="ENVMAP_MODE_REFRACTION";break}return e}function NI(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case E0:e="ENVMAP_BLENDING_MULTIPLY";break;case UA:e="ENVMAP_BLENDING_MIX";break;case OA:e="ENVMAP_BLENDING_ADD";break}return e}function UI(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function OI(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=II(t),c=LI(t),u=DI(t),f=NI(t),h=UI(t),d=bI(t),g=EI(s),_=r.createProgram();let m,p,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(js).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(js).join(`
`),p.length>0&&(p+=`
`)):(m=[ym(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(js).join(`
`),p=[ym(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Wi?"#define TONE_MAPPING":"",t.toneMapping!==Wi?Ke.tonemapping_pars_fragment:"",t.toneMapping!==Wi?MI("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ke.colorspace_pars_fragment,yI("linearToOutputTexel",t.outputColorSpace),SI(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(js).join(`
`)),o=hf(o),o=_m(o,t),o=vm(o,t),a=hf(a),a=_m(a,t),a=vm(a,t),o=xm(o),a=xm(a),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===dp?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===dp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const y=b+m+o,v=b+p+a,P=pm(r,r.VERTEX_SHADER,y),w=pm(r,r.FRAGMENT_SHADER,v);r.attachShader(_,P),r.attachShader(_,w),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function C(L){if(n.debug.checkShaderErrors){const U=r.getProgramInfoLog(_).trim(),O=r.getShaderInfoLog(P).trim(),W=r.getShaderInfoLog(w).trim();let Q=!0,j=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(Q=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,_,P,w);else{const ee=gm(r,P,"vertex"),z=gm(r,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+U+`
`+ee+`
`+z)}else U!==""?console.warn("THREE.WebGLProgram: Program Info Log:",U):(O===""||W==="")&&(j=!1);j&&(L.diagnostics={runnable:Q,programLog:U,vertexShader:{log:O,prefix:m},fragmentShader:{log:W,prefix:p}})}r.deleteShader(P),r.deleteShader(w),D=new Oa(r,_),T=TI(r,_)}let D;this.getUniforms=function(){return D===void 0&&C(this),D};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=r.getProgramParameter(_,gI)),M},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=_I++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=P,this.fragmentShader=w,this}let FI=0;class BI{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new kI(e),t.set(e,i)),i}}class kI{constructor(e){this.id=FI++,this.code=e,this.usedTimes=0}}function HI(n,e,t,i,r,s,o){const a=new ah,l=new BI,c=new Set,u=[],f=r.logarithmicDepthBuffer,h=r.vertexTextures;let d=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(T){return c.add(T),T===0?"uv":`uv${T}`}function m(T,M,L,U,O){const W=U.fog,Q=O.geometry,j=T.isMeshStandardMaterial?U.environment:null,ee=(T.isMeshStandardMaterial?t:e).get(T.envMap||j),z=ee&&ee.mapping===Ml?ee.image.height:null,de=g[T.type];T.precision!==null&&(d=r.getMaxPrecision(T.precision),d!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",d,"instead."));const _e=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,Ee=_e!==void 0?_e.length:0;let Ce=0;Q.morphAttributes.position!==void 0&&(Ce=1),Q.morphAttributes.normal!==void 0&&(Ce=2),Q.morphAttributes.color!==void 0&&(Ce=3);let Xe,re,he,ye;if(de){const lt=Wn[de];Xe=lt.vertexShader,re=lt.fragmentShader}else Xe=T.vertexShader,re=T.fragmentShader,l.update(T),he=l.getVertexShaderID(T),ye=l.getFragmentShaderID(T);const F=n.getRenderTarget(),oe=n.state.buffers.depth.getReversed(),se=O.isInstancedMesh===!0,ue=O.isBatchedMesh===!0,Ie=!!T.map,R=!!T.matcap,I=!!ee,S=!!T.aoMap,te=!!T.lightMap,Y=!!T.bumpMap,q=!!T.normalMap,ne=!!T.displacementMap,ae=!!T.emissiveMap,J=!!T.metalnessMap,E=!!T.roughnessMap,x=T.anisotropy>0,N=T.clearcoat>0,G=T.dispersion>0,$=T.iridescence>0,X=T.sheen>0,me=T.transmission>0,ce=x&&!!T.anisotropyMap,ge=N&&!!T.clearcoatMap,Le=N&&!!T.clearcoatNormalMap,fe=N&&!!T.clearcoatRoughnessMap,xe=$&&!!T.iridescenceMap,Pe=$&&!!T.iridescenceThicknessMap,Oe=X&&!!T.sheenColorMap,ve=X&&!!T.sheenRoughnessMap,Be=!!T.specularMap,ze=!!T.specularColorMap,ht=!!T.specularIntensityMap,B=me&&!!T.transmissionMap,Se=me&&!!T.thicknessMap,ie=!!T.gradientMap,le=!!T.alphaMap,Ae=T.alphaTest>0,Te=!!T.alphaHash,qe=!!T.extensions;let vt=Wi;T.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(vt=n.toneMapping);const Ut={shaderID:de,shaderType:T.type,shaderName:T.name,vertexShader:Xe,fragmentShader:re,defines:T.defines,customVertexShaderID:he,customFragmentShaderID:ye,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:d,batching:ue,batchingColor:ue&&O._colorsTexture!==null,instancing:se,instancingColor:se&&O.instanceColor!==null,instancingMorph:se&&O.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:F===null?n.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:Qt,alphaToCoverage:!!T.alphaToCoverage,map:Ie,matcap:R,envMap:I,envMapMode:I&&ee.mapping,envMapCubeUVHeight:z,aoMap:S,lightMap:te,bumpMap:Y,normalMap:q,displacementMap:h&&ne,emissiveMap:ae,normalMapObjectSpace:q&&T.normalMapType===GA,normalMapTangentSpace:q&&T.normalMapType===G0,metalnessMap:J,roughnessMap:E,anisotropy:x,anisotropyMap:ce,clearcoat:N,clearcoatMap:ge,clearcoatNormalMap:Le,clearcoatRoughnessMap:fe,dispersion:G,iridescence:$,iridescenceMap:xe,iridescenceThicknessMap:Pe,sheen:X,sheenColorMap:Oe,sheenRoughnessMap:ve,specularMap:Be,specularColorMap:ze,specularIntensityMap:ht,transmission:me,transmissionMap:B,thicknessMap:Se,gradientMap:ie,opaque:T.transparent===!1&&T.blending===ns&&T.alphaToCoverage===!1,alphaMap:le,alphaTest:Ae,alphaHash:Te,combine:T.combine,mapUv:Ie&&_(T.map.channel),aoMapUv:S&&_(T.aoMap.channel),lightMapUv:te&&_(T.lightMap.channel),bumpMapUv:Y&&_(T.bumpMap.channel),normalMapUv:q&&_(T.normalMap.channel),displacementMapUv:ne&&_(T.displacementMap.channel),emissiveMapUv:ae&&_(T.emissiveMap.channel),metalnessMapUv:J&&_(T.metalnessMap.channel),roughnessMapUv:E&&_(T.roughnessMap.channel),anisotropyMapUv:ce&&_(T.anisotropyMap.channel),clearcoatMapUv:ge&&_(T.clearcoatMap.channel),clearcoatNormalMapUv:Le&&_(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:fe&&_(T.clearcoatRoughnessMap.channel),iridescenceMapUv:xe&&_(T.iridescenceMap.channel),iridescenceThicknessMapUv:Pe&&_(T.iridescenceThicknessMap.channel),sheenColorMapUv:Oe&&_(T.sheenColorMap.channel),sheenRoughnessMapUv:ve&&_(T.sheenRoughnessMap.channel),specularMapUv:Be&&_(T.specularMap.channel),specularColorMapUv:ze&&_(T.specularColorMap.channel),specularIntensityMapUv:ht&&_(T.specularIntensityMap.channel),transmissionMapUv:B&&_(T.transmissionMap.channel),thicknessMapUv:Se&&_(T.thicknessMap.channel),alphaMapUv:le&&_(T.alphaMap.channel),vertexTangents:!!Q.attributes.tangent&&(q||x),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!Q.attributes.uv&&(Ie||le),fog:!!W,useFog:T.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:T.flatShading===!0,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:oe,skinning:O.isSkinnedMesh===!0,morphTargets:Q.morphAttributes.position!==void 0,morphNormals:Q.morphAttributes.normal!==void 0,morphColors:Q.morphAttributes.color!==void 0,morphTargetsCount:Ee,morphTextureStride:Ce,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:T.dithering,shadowMapEnabled:n.shadowMap.enabled&&L.length>0,shadowMapType:n.shadowMap.type,toneMapping:vt,decodeVideoTexture:Ie&&T.map.isVideoTexture===!0&&Qe.getTransfer(T.map.colorSpace)===ct,decodeVideoTextureEmissive:ae&&T.emissiveMap.isVideoTexture===!0&&Qe.getTransfer(T.emissiveMap.colorSpace)===ct,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Xn,flipSided:T.side===an,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:qe&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(qe&&T.extensions.multiDraw===!0||ue)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Ut.vertexUv1s=c.has(1),Ut.vertexUv2s=c.has(2),Ut.vertexUv3s=c.has(3),c.clear(),Ut}function p(T){const M=[];if(T.shaderID?M.push(T.shaderID):(M.push(T.customVertexShaderID),M.push(T.customFragmentShaderID)),T.defines!==void 0)for(const L in T.defines)M.push(L),M.push(T.defines[L]);return T.isRawShaderMaterial===!1&&(b(M,T),y(M,T),M.push(n.outputColorSpace)),M.push(T.customProgramCacheKey),M.join()}function b(T,M){T.push(M.precision),T.push(M.outputColorSpace),T.push(M.envMapMode),T.push(M.envMapCubeUVHeight),T.push(M.mapUv),T.push(M.alphaMapUv),T.push(M.lightMapUv),T.push(M.aoMapUv),T.push(M.bumpMapUv),T.push(M.normalMapUv),T.push(M.displacementMapUv),T.push(M.emissiveMapUv),T.push(M.metalnessMapUv),T.push(M.roughnessMapUv),T.push(M.anisotropyMapUv),T.push(M.clearcoatMapUv),T.push(M.clearcoatNormalMapUv),T.push(M.clearcoatRoughnessMapUv),T.push(M.iridescenceMapUv),T.push(M.iridescenceThicknessMapUv),T.push(M.sheenColorMapUv),T.push(M.sheenRoughnessMapUv),T.push(M.specularMapUv),T.push(M.specularColorMapUv),T.push(M.specularIntensityMapUv),T.push(M.transmissionMapUv),T.push(M.thicknessMapUv),T.push(M.combine),T.push(M.fogExp2),T.push(M.sizeAttenuation),T.push(M.morphTargetsCount),T.push(M.morphAttributeCount),T.push(M.numDirLights),T.push(M.numPointLights),T.push(M.numSpotLights),T.push(M.numSpotLightMaps),T.push(M.numHemiLights),T.push(M.numRectAreaLights),T.push(M.numDirLightShadows),T.push(M.numPointLightShadows),T.push(M.numSpotLightShadows),T.push(M.numSpotLightShadowsWithMaps),T.push(M.numLightProbes),T.push(M.shadowMapType),T.push(M.toneMapping),T.push(M.numClippingPlanes),T.push(M.numClipIntersection),T.push(M.depthPacking)}function y(T,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),T.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),T.push(a.mask)}function v(T){const M=g[T.type];let L;if(M){const U=Wn[M];L=gs.clone(U.uniforms)}else L=T.uniforms;return L}function P(T,M){let L;for(let U=0,O=u.length;U<O;U++){const W=u[U];if(W.cacheKey===M){L=W,++L.usedTimes;break}}return L===void 0&&(L=new OI(n,M,T,s),u.push(L)),L}function w(T){if(--T.usedTimes===0){const M=u.indexOf(T);u[M]=u[u.length-1],u.pop(),T.destroy()}}function C(T){l.remove(T)}function D(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:v,acquireProgram:P,releaseProgram:w,releaseShaderCache:C,programs:u,dispose:D}}function zI(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,l){n.get(o)[a]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function VI(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Mm(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Sm(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(f,h,d,g,_,m){let p=n[e];return p===void 0?(p={id:f.id,object:f,geometry:h,material:d,groupOrder:g,renderOrder:f.renderOrder,z:_,group:m},n[e]=p):(p.id=f.id,p.object=f,p.geometry=h,p.material=d,p.groupOrder=g,p.renderOrder=f.renderOrder,p.z=_,p.group=m),e++,p}function a(f,h,d,g,_,m){const p=o(f,h,d,g,_,m);d.transmission>0?i.push(p):d.transparent===!0?r.push(p):t.push(p)}function l(f,h,d,g,_,m){const p=o(f,h,d,g,_,m);d.transmission>0?i.unshift(p):d.transparent===!0?r.unshift(p):t.unshift(p)}function c(f,h){t.length>1&&t.sort(f||VI),i.length>1&&i.sort(h||Mm),r.length>1&&r.sort(h||Mm)}function u(){for(let f=e,h=n.length;f<h;f++){const d=n[f];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function GI(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new Sm,n.set(i,[o])):r>=s.length?(o=new Sm,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function WI(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new k,color:new ke};break;case"SpotLight":t={position:new k,direction:new k,color:new ke,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new k,color:new ke,distance:0,decay:0};break;case"HemisphereLight":t={direction:new k,skyColor:new ke,groundColor:new ke};break;case"RectAreaLight":t={color:new ke,position:new k,halfWidth:new k,halfHeight:new k};break}return n[e.id]=t,t}}}function XI(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let jI=0;function qI(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function $I(n){const e=new WI,t=XI(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new k);const r=new k,s=new je,o=new je;function a(c){let u=0,f=0,h=0;for(let T=0;T<9;T++)i.probe[T].set(0,0,0);let d=0,g=0,_=0,m=0,p=0,b=0,y=0,v=0,P=0,w=0,C=0;c.sort(qI);for(let T=0,M=c.length;T<M;T++){const L=c[T],U=L.color,O=L.intensity,W=L.distance,Q=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)u+=U.r*O,f+=U.g*O,h+=U.b*O;else if(L.isLightProbe){for(let j=0;j<9;j++)i.probe[j].addScaledVector(L.sh.coefficients[j],O);C++}else if(L.isDirectionalLight){const j=e.get(L);if(j.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const ee=L.shadow,z=t.get(L);z.shadowIntensity=ee.intensity,z.shadowBias=ee.bias,z.shadowNormalBias=ee.normalBias,z.shadowRadius=ee.radius,z.shadowMapSize=ee.mapSize,i.directionalShadow[d]=z,i.directionalShadowMap[d]=Q,i.directionalShadowMatrix[d]=L.shadow.matrix,b++}i.directional[d]=j,d++}else if(L.isSpotLight){const j=e.get(L);j.position.setFromMatrixPosition(L.matrixWorld),j.color.copy(U).multiplyScalar(O),j.distance=W,j.coneCos=Math.cos(L.angle),j.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),j.decay=L.decay,i.spot[_]=j;const ee=L.shadow;if(L.map&&(i.spotLightMap[P]=L.map,P++,ee.updateMatrices(L),L.castShadow&&w++),i.spotLightMatrix[_]=ee.matrix,L.castShadow){const z=t.get(L);z.shadowIntensity=ee.intensity,z.shadowBias=ee.bias,z.shadowNormalBias=ee.normalBias,z.shadowRadius=ee.radius,z.shadowMapSize=ee.mapSize,i.spotShadow[_]=z,i.spotShadowMap[_]=Q,v++}_++}else if(L.isRectAreaLight){const j=e.get(L);j.color.copy(U).multiplyScalar(O),j.halfWidth.set(L.width*.5,0,0),j.halfHeight.set(0,L.height*.5,0),i.rectArea[m]=j,m++}else if(L.isPointLight){const j=e.get(L);if(j.color.copy(L.color).multiplyScalar(L.intensity),j.distance=L.distance,j.decay=L.decay,L.castShadow){const ee=L.shadow,z=t.get(L);z.shadowIntensity=ee.intensity,z.shadowBias=ee.bias,z.shadowNormalBias=ee.normalBias,z.shadowRadius=ee.radius,z.shadowMapSize=ee.mapSize,z.shadowCameraNear=ee.camera.near,z.shadowCameraFar=ee.camera.far,i.pointShadow[g]=z,i.pointShadowMap[g]=Q,i.pointShadowMatrix[g]=L.shadow.matrix,y++}i.point[g]=j,g++}else if(L.isHemisphereLight){const j=e.get(L);j.skyColor.copy(L.color).multiplyScalar(O),j.groundColor.copy(L.groundColor).multiplyScalar(O),i.hemi[p]=j,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Me.LTC_FLOAT_1,i.rectAreaLTC2=Me.LTC_FLOAT_2):(i.rectAreaLTC1=Me.LTC_HALF_1,i.rectAreaLTC2=Me.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=h;const D=i.hash;(D.directionalLength!==d||D.pointLength!==g||D.spotLength!==_||D.rectAreaLength!==m||D.hemiLength!==p||D.numDirectionalShadows!==b||D.numPointShadows!==y||D.numSpotShadows!==v||D.numSpotMaps!==P||D.numLightProbes!==C)&&(i.directional.length=d,i.spot.length=_,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=v,i.spotShadowMap.length=v,i.directionalShadowMatrix.length=b,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=v+P-w,i.spotLightMap.length=P,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=C,D.directionalLength=d,D.pointLength=g,D.spotLength=_,D.rectAreaLength=m,D.hemiLength=p,D.numDirectionalShadows=b,D.numPointShadows=y,D.numSpotShadows=v,D.numSpotMaps=P,D.numLightProbes=C,i.version=jI++)}function l(c,u){let f=0,h=0,d=0,g=0,_=0;const m=u.matrixWorldInverse;for(let p=0,b=c.length;p<b;p++){const y=c[p];if(y.isDirectionalLight){const v=i.directional[f];v.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(m),f++}else if(y.isSpotLight){const v=i.spot[d];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(m),d++}else if(y.isRectAreaLight){const v=i.rectArea[g];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(m),o.identity(),s.copy(y.matrixWorld),s.premultiply(m),o.extractRotation(s),v.halfWidth.set(y.width*.5,0,0),v.halfHeight.set(0,y.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),g++}else if(y.isPointLight){const v=i.point[h];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(m),h++}else if(y.isHemisphereLight){const v=i.hemi[_];v.direction.setFromMatrixPosition(y.matrixWorld),v.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:i}}function bm(n){const e=new $I(n),t=[],i=[];function r(u){c.camera=u,t.length=0,i.length=0}function s(u){t.push(u)}function o(u){i.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function YI(n){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new bm(n),e.set(r,[a])):s>=o.length?(a=new bm(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}const KI=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ZI=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function JI(n,e,t){let i=new uh;const r=new Ue,s=new Ue,o=new it,a=new Zw({depthPacking:VA}),l=new Jw,c={},u=t.maxTextureSize,f={[yi]:an,[an]:yi,[Xn]:Xn},h=new zt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ue},radius:{value:4}},vertexShader:KI,fragmentShader:ZI}),d=h.clone();d.defines.HORIZONTAL_PASS=1;const g=new Bn;g.setAttribute("position",new Jt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new on(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=b0;let p=this.type;this.render=function(w,C,D){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;const T=n.getRenderTarget(),M=n.getActiveCubeFace(),L=n.getActiveMipmapLevel(),U=n.state;U.setBlending(_i),U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const O=p!==ui&&this.type===ui,W=p===ui&&this.type!==ui;for(let Q=0,j=w.length;Q<j;Q++){const ee=w[Q],z=ee.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",ee,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;r.copy(z.mapSize);const de=z.getFrameExtents();if(r.multiply(de),s.copy(z.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/de.x),r.x=s.x*de.x,z.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/de.y),r.y=s.y*de.y,z.mapSize.y=s.y)),z.map===null||O===!0||W===!0){const Ee=this.type!==ui?{minFilter:Zt,magFilter:Zt}:{};z.map!==null&&z.map.dispose(),z.map=new Nn(r.x,r.y,Ee),z.map.texture.name=ee.name+".shadowMap",z.camera.updateProjectionMatrix()}n.setRenderTarget(z.map),n.clear();const _e=z.getViewportCount();for(let Ee=0;Ee<_e;Ee++){const Ce=z.getViewport(Ee);o.set(s.x*Ce.x,s.y*Ce.y,s.x*Ce.z,s.y*Ce.w),U.viewport(o),z.updateMatrices(ee,Ee),i=z.getFrustum(),v(C,D,z.camera,ee,this.type)}z.isPointLightShadow!==!0&&this.type===ui&&b(z,D),z.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(T,M,L)};function b(w,C){const D=e.update(_);h.defines.VSM_SAMPLES!==w.blurSamples&&(h.defines.VSM_SAMPLES=w.blurSamples,d.defines.VSM_SAMPLES=w.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Nn(r.x,r.y)),h.uniforms.shadow_pass.value=w.map.texture,h.uniforms.resolution.value=w.mapSize,h.uniforms.radius.value=w.radius,n.setRenderTarget(w.mapPass),n.clear(),n.renderBufferDirect(C,null,D,h,_,null),d.uniforms.shadow_pass.value=w.mapPass.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,n.setRenderTarget(w.map),n.clear(),n.renderBufferDirect(C,null,D,d,_,null)}function y(w,C,D,T){let M=null;const L=D.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(L!==void 0)M=L;else if(M=D.isPointLight===!0?l:a,n.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const U=M.uuid,O=C.uuid;let W=c[U];W===void 0&&(W={},c[U]=W);let Q=W[O];Q===void 0&&(Q=M.clone(),W[O]=Q,C.addEventListener("dispose",P)),M=Q}if(M.visible=C.visible,M.wireframe=C.wireframe,T===ui?M.side=C.shadowSide!==null?C.shadowSide:C.side:M.side=C.shadowSide!==null?C.shadowSide:f[C.side],M.alphaMap=C.alphaMap,M.alphaTest=C.alphaTest,M.map=C.map,M.clipShadows=C.clipShadows,M.clippingPlanes=C.clippingPlanes,M.clipIntersection=C.clipIntersection,M.displacementMap=C.displacementMap,M.displacementScale=C.displacementScale,M.displacementBias=C.displacementBias,M.wireframeLinewidth=C.wireframeLinewidth,M.linewidth=C.linewidth,D.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const U=n.properties.get(M);U.light=D}return M}function v(w,C,D,T,M){if(w.visible===!1)return;if(w.layers.test(C.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&M===ui)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,w.matrixWorld);const O=e.update(w),W=w.material;if(Array.isArray(W)){const Q=O.groups;for(let j=0,ee=Q.length;j<ee;j++){const z=Q[j],de=W[z.materialIndex];if(de&&de.visible){const _e=y(w,de,T,M);w.onBeforeShadow(n,w,C,D,O,_e,z),n.renderBufferDirect(D,null,O,_e,w,z),w.onAfterShadow(n,w,C,D,O,_e,z)}}}else if(W.visible){const Q=y(w,W,T,M);w.onBeforeShadow(n,w,C,D,O,Q,null),n.renderBufferDirect(D,null,O,Q,w,null),w.onAfterShadow(n,w,C,D,O,Q,null)}}const U=w.children;for(let O=0,W=U.length;O<W;O++)v(U[O],C,D,T,M)}function P(w){w.target.removeEventListener("dispose",P);for(const D in c){const T=c[D],M=w.target.uuid;M in T&&(T[M].dispose(),delete T[M])}}}const QI={[bu]:Eu,[Tu]:Ru,[Au]:Cu,[ls]:wu,[Eu]:bu,[Ru]:Tu,[Cu]:Au,[wu]:ls};function eL(n,e){function t(){let B=!1;const Se=new it;let ie=null;const le=new it(0,0,0,0);return{setMask:function(Ae){ie!==Ae&&!B&&(n.colorMask(Ae,Ae,Ae,Ae),ie=Ae)},setLocked:function(Ae){B=Ae},setClear:function(Ae,Te,qe,vt,Ut){Ut===!0&&(Ae*=vt,Te*=vt,qe*=vt),Se.set(Ae,Te,qe,vt),le.equals(Se)===!1&&(n.clearColor(Ae,Te,qe,vt),le.copy(Se))},reset:function(){B=!1,ie=null,le.set(-1,0,0,0)}}}function i(){let B=!1,Se=!1,ie=null,le=null,Ae=null;return{setReversed:function(Te){if(Se!==Te){const qe=e.get("EXT_clip_control");Se?qe.clipControlEXT(qe.LOWER_LEFT_EXT,qe.ZERO_TO_ONE_EXT):qe.clipControlEXT(qe.LOWER_LEFT_EXT,qe.NEGATIVE_ONE_TO_ONE_EXT);const vt=Ae;Ae=null,this.setClear(vt)}Se=Te},getReversed:function(){return Se},setTest:function(Te){Te?F(n.DEPTH_TEST):oe(n.DEPTH_TEST)},setMask:function(Te){ie!==Te&&!B&&(n.depthMask(Te),ie=Te)},setFunc:function(Te){if(Se&&(Te=QI[Te]),le!==Te){switch(Te){case bu:n.depthFunc(n.NEVER);break;case Eu:n.depthFunc(n.ALWAYS);break;case Tu:n.depthFunc(n.LESS);break;case ls:n.depthFunc(n.LEQUAL);break;case Au:n.depthFunc(n.EQUAL);break;case wu:n.depthFunc(n.GEQUAL);break;case Ru:n.depthFunc(n.GREATER);break;case Cu:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}le=Te}},setLocked:function(Te){B=Te},setClear:function(Te){Ae!==Te&&(Se&&(Te=1-Te),n.clearDepth(Te),Ae=Te)},reset:function(){B=!1,ie=null,le=null,Ae=null,Se=!1}}}function r(){let B=!1,Se=null,ie=null,le=null,Ae=null,Te=null,qe=null,vt=null,Ut=null;return{setTest:function(lt){B||(lt?F(n.STENCIL_TEST):oe(n.STENCIL_TEST))},setMask:function(lt){Se!==lt&&!B&&(n.stencilMask(lt),Se=lt)},setFunc:function(lt,En,Qn){(ie!==lt||le!==En||Ae!==Qn)&&(n.stencilFunc(lt,En,Qn),ie=lt,le=En,Ae=Qn)},setOp:function(lt,En,Qn){(Te!==lt||qe!==En||vt!==Qn)&&(n.stencilOp(lt,En,Qn),Te=lt,qe=En,vt=Qn)},setLocked:function(lt){B=lt},setClear:function(lt){Ut!==lt&&(n.clearStencil(lt),Ut=lt)},reset:function(){B=!1,Se=null,ie=null,le=null,Ae=null,Te=null,qe=null,vt=null,Ut=null}}}const s=new t,o=new i,a=new r,l=new WeakMap,c=new WeakMap;let u={},f={},h=new WeakMap,d=[],g=null,_=!1,m=null,p=null,b=null,y=null,v=null,P=null,w=null,C=new ke(0,0,0),D=0,T=!1,M=null,L=null,U=null,O=null,W=null;const Q=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let j=!1,ee=0;const z=n.getParameter(n.VERSION);z.indexOf("WebGL")!==-1?(ee=parseFloat(/^WebGL (\d)/.exec(z)[1]),j=ee>=1):z.indexOf("OpenGL ES")!==-1&&(ee=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),j=ee>=2);let de=null,_e={};const Ee=n.getParameter(n.SCISSOR_BOX),Ce=n.getParameter(n.VIEWPORT),Xe=new it().fromArray(Ee),re=new it().fromArray(Ce);function he(B,Se,ie,le){const Ae=new Uint8Array(4),Te=n.createTexture();n.bindTexture(B,Te),n.texParameteri(B,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(B,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let qe=0;qe<ie;qe++)B===n.TEXTURE_3D||B===n.TEXTURE_2D_ARRAY?n.texImage3D(Se,0,n.RGBA,1,1,le,0,n.RGBA,n.UNSIGNED_BYTE,Ae):n.texImage2D(Se+qe,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Ae);return Te}const ye={};ye[n.TEXTURE_2D]=he(n.TEXTURE_2D,n.TEXTURE_2D,1),ye[n.TEXTURE_CUBE_MAP]=he(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ye[n.TEXTURE_2D_ARRAY]=he(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ye[n.TEXTURE_3D]=he(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),F(n.DEPTH_TEST),o.setFunc(ls),Y(!1),q(sp),F(n.CULL_FACE),S(_i);function F(B){u[B]!==!0&&(n.enable(B),u[B]=!0)}function oe(B){u[B]!==!1&&(n.disable(B),u[B]=!1)}function se(B,Se){return f[B]!==Se?(n.bindFramebuffer(B,Se),f[B]=Se,B===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=Se),B===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=Se),!0):!1}function ue(B,Se){let ie=d,le=!1;if(B){ie=h.get(Se),ie===void 0&&(ie=[],h.set(Se,ie));const Ae=B.textures;if(ie.length!==Ae.length||ie[0]!==n.COLOR_ATTACHMENT0){for(let Te=0,qe=Ae.length;Te<qe;Te++)ie[Te]=n.COLOR_ATTACHMENT0+Te;ie.length=Ae.length,le=!0}}else ie[0]!==n.BACK&&(ie[0]=n.BACK,le=!0);le&&n.drawBuffers(ie)}function Ie(B){return g!==B?(n.useProgram(B),g=B,!0):!1}const R={[_r]:n.FUNC_ADD,[vA]:n.FUNC_SUBTRACT,[xA]:n.FUNC_REVERSE_SUBTRACT};R[yA]=n.MIN,R[MA]=n.MAX;const I={[SA]:n.ZERO,[bA]:n.ONE,[EA]:n.SRC_COLOR,[Mu]:n.SRC_ALPHA,[PA]:n.SRC_ALPHA_SATURATE,[RA]:n.DST_COLOR,[AA]:n.DST_ALPHA,[TA]:n.ONE_MINUS_SRC_COLOR,[Su]:n.ONE_MINUS_SRC_ALPHA,[CA]:n.ONE_MINUS_DST_COLOR,[wA]:n.ONE_MINUS_DST_ALPHA,[IA]:n.CONSTANT_COLOR,[LA]:n.ONE_MINUS_CONSTANT_COLOR,[DA]:n.CONSTANT_ALPHA,[NA]:n.ONE_MINUS_CONSTANT_ALPHA};function S(B,Se,ie,le,Ae,Te,qe,vt,Ut,lt){if(B===_i){_===!0&&(oe(n.BLEND),_=!1);return}if(_===!1&&(F(n.BLEND),_=!0),B!==_A){if(B!==m||lt!==T){if((p!==_r||v!==_r)&&(n.blendEquation(n.FUNC_ADD),p=_r,v=_r),lt)switch(B){case ns:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case yu:n.blendFunc(n.ONE,n.ONE);break;case op:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case ap:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case ns:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case yu:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case op:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case ap:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}b=null,y=null,P=null,w=null,C.set(0,0,0),D=0,m=B,T=lt}return}Ae=Ae||Se,Te=Te||ie,qe=qe||le,(Se!==p||Ae!==v)&&(n.blendEquationSeparate(R[Se],R[Ae]),p=Se,v=Ae),(ie!==b||le!==y||Te!==P||qe!==w)&&(n.blendFuncSeparate(I[ie],I[le],I[Te],I[qe]),b=ie,y=le,P=Te,w=qe),(vt.equals(C)===!1||Ut!==D)&&(n.blendColor(vt.r,vt.g,vt.b,Ut),C.copy(vt),D=Ut),m=B,T=!1}function te(B,Se){B.side===Xn?oe(n.CULL_FACE):F(n.CULL_FACE);let ie=B.side===an;Se&&(ie=!ie),Y(ie),B.blending===ns&&B.transparent===!1?S(_i):S(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),o.setFunc(B.depthFunc),o.setTest(B.depthTest),o.setMask(B.depthWrite),s.setMask(B.colorWrite);const le=B.stencilWrite;a.setTest(le),le&&(a.setMask(B.stencilWriteMask),a.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),a.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),ae(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?F(n.SAMPLE_ALPHA_TO_COVERAGE):oe(n.SAMPLE_ALPHA_TO_COVERAGE)}function Y(B){M!==B&&(B?n.frontFace(n.CW):n.frontFace(n.CCW),M=B)}function q(B){B!==pA?(F(n.CULL_FACE),B!==L&&(B===sp?n.cullFace(n.BACK):B===mA?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):oe(n.CULL_FACE),L=B}function ne(B){B!==U&&(j&&n.lineWidth(B),U=B)}function ae(B,Se,ie){B?(F(n.POLYGON_OFFSET_FILL),(O!==Se||W!==ie)&&(n.polygonOffset(Se,ie),O=Se,W=ie)):oe(n.POLYGON_OFFSET_FILL)}function J(B){B?F(n.SCISSOR_TEST):oe(n.SCISSOR_TEST)}function E(B){B===void 0&&(B=n.TEXTURE0+Q-1),de!==B&&(n.activeTexture(B),de=B)}function x(B,Se,ie){ie===void 0&&(de===null?ie=n.TEXTURE0+Q-1:ie=de);let le=_e[ie];le===void 0&&(le={type:void 0,texture:void 0},_e[ie]=le),(le.type!==B||le.texture!==Se)&&(de!==ie&&(n.activeTexture(ie),de=ie),n.bindTexture(B,Se||ye[B]),le.type=B,le.texture=Se)}function N(){const B=_e[de];B!==void 0&&B.type!==void 0&&(n.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function G(){try{n.compressedTexImage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function $(){try{n.compressedTexImage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function X(){try{n.texSubImage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function me(){try{n.texSubImage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ce(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ge(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Le(){try{n.texStorage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function fe(){try{n.texStorage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function xe(){try{n.texImage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Pe(){try{n.texImage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Oe(B){Xe.equals(B)===!1&&(n.scissor(B.x,B.y,B.z,B.w),Xe.copy(B))}function ve(B){re.equals(B)===!1&&(n.viewport(B.x,B.y,B.z,B.w),re.copy(B))}function Be(B,Se){let ie=c.get(Se);ie===void 0&&(ie=new WeakMap,c.set(Se,ie));let le=ie.get(B);le===void 0&&(le=n.getUniformBlockIndex(Se,B.name),ie.set(B,le))}function ze(B,Se){const le=c.get(Se).get(B);l.get(Se)!==le&&(n.uniformBlockBinding(Se,le,B.__bindingPointIndex),l.set(Se,le))}function ht(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},de=null,_e={},f={},h=new WeakMap,d=[],g=null,_=!1,m=null,p=null,b=null,y=null,v=null,P=null,w=null,C=new ke(0,0,0),D=0,T=!1,M=null,L=null,U=null,O=null,W=null,Xe.set(0,0,n.canvas.width,n.canvas.height),re.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:F,disable:oe,bindFramebuffer:se,drawBuffers:ue,useProgram:Ie,setBlending:S,setMaterial:te,setFlipSided:Y,setCullFace:q,setLineWidth:ne,setPolygonOffset:ae,setScissorTest:J,activeTexture:E,bindTexture:x,unbindTexture:N,compressedTexImage2D:G,compressedTexImage3D:$,texImage2D:xe,texImage3D:Pe,updateUBOMapping:Be,uniformBlockBinding:ze,texStorage2D:Le,texStorage3D:fe,texSubImage2D:X,texSubImage3D:me,compressedTexSubImage2D:ce,compressedTexSubImage3D:ge,scissor:Oe,viewport:ve,reset:ht}}function tL(n,e,t,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ue,u=new WeakMap;let f;const h=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(E,x){return d?new OffscreenCanvas(E,x):To("canvas")}function _(E,x,N){let G=1;const $=J(E);if(($.width>N||$.height>N)&&(G=N/Math.max($.width,$.height)),G<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){const X=Math.floor(G*$.width),me=Math.floor(G*$.height);f===void 0&&(f=g(X,me));const ce=x?g(X,me):f;return ce.width=X,ce.height=me,ce.getContext("2d").drawImage(E,0,0,X,me),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+X+"x"+me+")."),ce}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),E;return E}function m(E){return E.generateMipmaps}function p(E){n.generateMipmap(E)}function b(E){return E.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?n.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function y(E,x,N,G,$=!1){if(E!==null){if(n[E]!==void 0)return n[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let X=x;if(x===n.RED&&(N===n.FLOAT&&(X=n.R32F),N===n.HALF_FLOAT&&(X=n.R16F),N===n.UNSIGNED_BYTE&&(X=n.R8)),x===n.RED_INTEGER&&(N===n.UNSIGNED_BYTE&&(X=n.R8UI),N===n.UNSIGNED_SHORT&&(X=n.R16UI),N===n.UNSIGNED_INT&&(X=n.R32UI),N===n.BYTE&&(X=n.R8I),N===n.SHORT&&(X=n.R16I),N===n.INT&&(X=n.R32I)),x===n.RG&&(N===n.FLOAT&&(X=n.RG32F),N===n.HALF_FLOAT&&(X=n.RG16F),N===n.UNSIGNED_BYTE&&(X=n.RG8)),x===n.RG_INTEGER&&(N===n.UNSIGNED_BYTE&&(X=n.RG8UI),N===n.UNSIGNED_SHORT&&(X=n.RG16UI),N===n.UNSIGNED_INT&&(X=n.RG32UI),N===n.BYTE&&(X=n.RG8I),N===n.SHORT&&(X=n.RG16I),N===n.INT&&(X=n.RG32I)),x===n.RGB_INTEGER&&(N===n.UNSIGNED_BYTE&&(X=n.RGB8UI),N===n.UNSIGNED_SHORT&&(X=n.RGB16UI),N===n.UNSIGNED_INT&&(X=n.RGB32UI),N===n.BYTE&&(X=n.RGB8I),N===n.SHORT&&(X=n.RGB16I),N===n.INT&&(X=n.RGB32I)),x===n.RGBA_INTEGER&&(N===n.UNSIGNED_BYTE&&(X=n.RGBA8UI),N===n.UNSIGNED_SHORT&&(X=n.RGBA16UI),N===n.UNSIGNED_INT&&(X=n.RGBA32UI),N===n.BYTE&&(X=n.RGBA8I),N===n.SHORT&&(X=n.RGBA16I),N===n.INT&&(X=n.RGBA32I)),x===n.RGB&&N===n.UNSIGNED_INT_5_9_9_9_REV&&(X=n.RGB9_E5),x===n.RGBA){const me=$?Ya:Qe.getTransfer(G);N===n.FLOAT&&(X=n.RGBA32F),N===n.HALF_FLOAT&&(X=n.RGBA16F),N===n.UNSIGNED_BYTE&&(X=me===ct?n.SRGB8_ALPHA8:n.RGBA8),N===n.UNSIGNED_SHORT_4_4_4_4&&(X=n.RGBA4),N===n.UNSIGNED_SHORT_5_5_5_1&&(X=n.RGB5_A1)}return(X===n.R16F||X===n.R32F||X===n.RG16F||X===n.RG32F||X===n.RGBA16F||X===n.RGBA32F)&&e.get("EXT_color_buffer_float"),X}function v(E,x){let N;return E?x===null||x===Er||x===hs?N=n.DEPTH24_STENCIL8:x===In?N=n.DEPTH32F_STENCIL8:x===So&&(N=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Er||x===hs?N=n.DEPTH_COMPONENT24:x===In?N=n.DEPTH_COMPONENT32F:x===So&&(N=n.DEPTH_COMPONENT16),N}function P(E,x){return m(E)===!0||E.isFramebufferTexture&&E.minFilter!==Zt&&E.minFilter!==pn?Math.log2(Math.max(x.width,x.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?x.mipmaps.length:1}function w(E){const x=E.target;x.removeEventListener("dispose",w),D(x),x.isVideoTexture&&u.delete(x)}function C(E){const x=E.target;x.removeEventListener("dispose",C),M(x)}function D(E){const x=i.get(E);if(x.__webglInit===void 0)return;const N=E.source,G=h.get(N);if(G){const $=G[x.__cacheKey];$.usedTimes--,$.usedTimes===0&&T(E),Object.keys(G).length===0&&h.delete(N)}i.remove(E)}function T(E){const x=i.get(E);n.deleteTexture(x.__webglTexture);const N=E.source,G=h.get(N);delete G[x.__cacheKey],o.memory.textures--}function M(E){const x=i.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),i.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let G=0;G<6;G++){if(Array.isArray(x.__webglFramebuffer[G]))for(let $=0;$<x.__webglFramebuffer[G].length;$++)n.deleteFramebuffer(x.__webglFramebuffer[G][$]);else n.deleteFramebuffer(x.__webglFramebuffer[G]);x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer[G])}else{if(Array.isArray(x.__webglFramebuffer))for(let G=0;G<x.__webglFramebuffer.length;G++)n.deleteFramebuffer(x.__webglFramebuffer[G]);else n.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&n.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let G=0;G<x.__webglColorRenderbuffer.length;G++)x.__webglColorRenderbuffer[G]&&n.deleteRenderbuffer(x.__webglColorRenderbuffer[G]);x.__webglDepthRenderbuffer&&n.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const N=E.textures;for(let G=0,$=N.length;G<$;G++){const X=i.get(N[G]);X.__webglTexture&&(n.deleteTexture(X.__webglTexture),o.memory.textures--),i.remove(N[G])}i.remove(E)}let L=0;function U(){L=0}function O(){const E=L;return E>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+r.maxTextures),L+=1,E}function W(E){const x=[];return x.push(E.wrapS),x.push(E.wrapT),x.push(E.wrapR||0),x.push(E.magFilter),x.push(E.minFilter),x.push(E.anisotropy),x.push(E.internalFormat),x.push(E.format),x.push(E.type),x.push(E.generateMipmaps),x.push(E.premultiplyAlpha),x.push(E.flipY),x.push(E.unpackAlignment),x.push(E.colorSpace),x.join()}function Q(E,x){const N=i.get(E);if(E.isVideoTexture&&ne(E),E.isRenderTargetTexture===!1&&E.version>0&&N.__version!==E.version){const G=E.image;if(G===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(G.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{re(N,E,x);return}}t.bindTexture(n.TEXTURE_2D,N.__webglTexture,n.TEXTURE0+x)}function j(E,x){const N=i.get(E);if(E.version>0&&N.__version!==E.version){re(N,E,x);return}t.bindTexture(n.TEXTURE_2D_ARRAY,N.__webglTexture,n.TEXTURE0+x)}function ee(E,x){const N=i.get(E);if(E.version>0&&N.__version!==E.version){re(N,E,x);return}t.bindTexture(n.TEXTURE_3D,N.__webglTexture,n.TEXTURE0+x)}function z(E,x){const N=i.get(E);if(E.version>0&&N.__version!==E.version){he(N,E,x);return}t.bindTexture(n.TEXTURE_CUBE_MAP,N.__webglTexture,n.TEXTURE0+x)}const de={[fs]:n.REPEAT,[ki]:n.CLAMP_TO_EDGE,[$a]:n.MIRRORED_REPEAT},_e={[Zt]:n.NEAREST,[L0]:n.NEAREST_MIPMAP_NEAREST,[Xs]:n.NEAREST_MIPMAP_LINEAR,[pn]:n.LINEAR,[Pa]:n.LINEAR_MIPMAP_NEAREST,[mi]:n.LINEAR_MIPMAP_LINEAR},Ee={[WA]:n.NEVER,[KA]:n.ALWAYS,[XA]:n.LESS,[W0]:n.LEQUAL,[jA]:n.EQUAL,[YA]:n.GEQUAL,[qA]:n.GREATER,[$A]:n.NOTEQUAL};function Ce(E,x){if(x.type===In&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===pn||x.magFilter===Pa||x.magFilter===Xs||x.magFilter===mi||x.minFilter===pn||x.minFilter===Pa||x.minFilter===Xs||x.minFilter===mi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(E,n.TEXTURE_WRAP_S,de[x.wrapS]),n.texParameteri(E,n.TEXTURE_WRAP_T,de[x.wrapT]),(E===n.TEXTURE_3D||E===n.TEXTURE_2D_ARRAY)&&n.texParameteri(E,n.TEXTURE_WRAP_R,de[x.wrapR]),n.texParameteri(E,n.TEXTURE_MAG_FILTER,_e[x.magFilter]),n.texParameteri(E,n.TEXTURE_MIN_FILTER,_e[x.minFilter]),x.compareFunction&&(n.texParameteri(E,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(E,n.TEXTURE_COMPARE_FUNC,Ee[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Zt||x.minFilter!==Xs&&x.minFilter!==mi||x.type===In&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){const N=e.get("EXT_texture_filter_anisotropic");n.texParameterf(E,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,r.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function Xe(E,x){let N=!1;E.__webglInit===void 0&&(E.__webglInit=!0,x.addEventListener("dispose",w));const G=x.source;let $=h.get(G);$===void 0&&($={},h.set(G,$));const X=W(x);if(X!==E.__cacheKey){$[X]===void 0&&($[X]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,N=!0),$[X].usedTimes++;const me=$[E.__cacheKey];me!==void 0&&($[E.__cacheKey].usedTimes--,me.usedTimes===0&&T(x)),E.__cacheKey=X,E.__webglTexture=$[X].texture}return N}function re(E,x,N){let G=n.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(G=n.TEXTURE_2D_ARRAY),x.isData3DTexture&&(G=n.TEXTURE_3D);const $=Xe(E,x),X=x.source;t.bindTexture(G,E.__webglTexture,n.TEXTURE0+N);const me=i.get(X);if(X.version!==me.__version||$===!0){t.activeTexture(n.TEXTURE0+N);const ce=Qe.getPrimaries(Qe.workingColorSpace),ge=x.colorSpace===Fi?null:Qe.getPrimaries(x.colorSpace),Le=x.colorSpace===Fi||ce===ge?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Le);let fe=_(x.image,!1,r.maxTextureSize);fe=ae(x,fe);const xe=s.convert(x.format,x.colorSpace),Pe=s.convert(x.type);let Oe=y(x.internalFormat,xe,Pe,x.colorSpace,x.isVideoTexture);Ce(G,x);let ve;const Be=x.mipmaps,ze=x.isVideoTexture!==!0,ht=me.__version===void 0||$===!0,B=X.dataReady,Se=P(x,fe);if(x.isDepthTexture)Oe=v(x.format===ds,x.type),ht&&(ze?t.texStorage2D(n.TEXTURE_2D,1,Oe,fe.width,fe.height):t.texImage2D(n.TEXTURE_2D,0,Oe,fe.width,fe.height,0,xe,Pe,null));else if(x.isDataTexture)if(Be.length>0){ze&&ht&&t.texStorage2D(n.TEXTURE_2D,Se,Oe,Be[0].width,Be[0].height);for(let ie=0,le=Be.length;ie<le;ie++)ve=Be[ie],ze?B&&t.texSubImage2D(n.TEXTURE_2D,ie,0,0,ve.width,ve.height,xe,Pe,ve.data):t.texImage2D(n.TEXTURE_2D,ie,Oe,ve.width,ve.height,0,xe,Pe,ve.data);x.generateMipmaps=!1}else ze?(ht&&t.texStorage2D(n.TEXTURE_2D,Se,Oe,fe.width,fe.height),B&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,fe.width,fe.height,xe,Pe,fe.data)):t.texImage2D(n.TEXTURE_2D,0,Oe,fe.width,fe.height,0,xe,Pe,fe.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){ze&&ht&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Se,Oe,Be[0].width,Be[0].height,fe.depth);for(let ie=0,le=Be.length;ie<le;ie++)if(ve=Be[ie],x.format!==yn)if(xe!==null)if(ze){if(B)if(x.layerUpdates.size>0){const Ae=Qp(ve.width,ve.height,x.format,x.type);for(const Te of x.layerUpdates){const qe=ve.data.subarray(Te*Ae/ve.data.BYTES_PER_ELEMENT,(Te+1)*Ae/ve.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ie,0,0,Te,ve.width,ve.height,1,xe,qe)}x.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ie,0,0,0,ve.width,ve.height,fe.depth,xe,ve.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ie,Oe,ve.width,ve.height,fe.depth,0,ve.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ze?B&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ie,0,0,0,ve.width,ve.height,fe.depth,xe,Pe,ve.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ie,Oe,ve.width,ve.height,fe.depth,0,xe,Pe,ve.data)}else{ze&&ht&&t.texStorage2D(n.TEXTURE_2D,Se,Oe,Be[0].width,Be[0].height);for(let ie=0,le=Be.length;ie<le;ie++)ve=Be[ie],x.format!==yn?xe!==null?ze?B&&t.compressedTexSubImage2D(n.TEXTURE_2D,ie,0,0,ve.width,ve.height,xe,ve.data):t.compressedTexImage2D(n.TEXTURE_2D,ie,Oe,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ze?B&&t.texSubImage2D(n.TEXTURE_2D,ie,0,0,ve.width,ve.height,xe,Pe,ve.data):t.texImage2D(n.TEXTURE_2D,ie,Oe,ve.width,ve.height,0,xe,Pe,ve.data)}else if(x.isDataArrayTexture)if(ze){if(ht&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Se,Oe,fe.width,fe.height,fe.depth),B)if(x.layerUpdates.size>0){const ie=Qp(fe.width,fe.height,x.format,x.type);for(const le of x.layerUpdates){const Ae=fe.data.subarray(le*ie/fe.data.BYTES_PER_ELEMENT,(le+1)*ie/fe.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,le,fe.width,fe.height,1,xe,Pe,Ae)}x.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,fe.width,fe.height,fe.depth,xe,Pe,fe.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Oe,fe.width,fe.height,fe.depth,0,xe,Pe,fe.data);else if(x.isData3DTexture)ze?(ht&&t.texStorage3D(n.TEXTURE_3D,Se,Oe,fe.width,fe.height,fe.depth),B&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,fe.width,fe.height,fe.depth,xe,Pe,fe.data)):t.texImage3D(n.TEXTURE_3D,0,Oe,fe.width,fe.height,fe.depth,0,xe,Pe,fe.data);else if(x.isFramebufferTexture){if(ht)if(ze)t.texStorage2D(n.TEXTURE_2D,Se,Oe,fe.width,fe.height);else{let ie=fe.width,le=fe.height;for(let Ae=0;Ae<Se;Ae++)t.texImage2D(n.TEXTURE_2D,Ae,Oe,ie,le,0,xe,Pe,null),ie>>=1,le>>=1}}else if(Be.length>0){if(ze&&ht){const ie=J(Be[0]);t.texStorage2D(n.TEXTURE_2D,Se,Oe,ie.width,ie.height)}for(let ie=0,le=Be.length;ie<le;ie++)ve=Be[ie],ze?B&&t.texSubImage2D(n.TEXTURE_2D,ie,0,0,xe,Pe,ve):t.texImage2D(n.TEXTURE_2D,ie,Oe,xe,Pe,ve);x.generateMipmaps=!1}else if(ze){if(ht){const ie=J(fe);t.texStorage2D(n.TEXTURE_2D,Se,Oe,ie.width,ie.height)}B&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,xe,Pe,fe)}else t.texImage2D(n.TEXTURE_2D,0,Oe,xe,Pe,fe);m(x)&&p(G),me.__version=X.version,x.onUpdate&&x.onUpdate(x)}E.__version=x.version}function he(E,x,N){if(x.image.length!==6)return;const G=Xe(E,x),$=x.source;t.bindTexture(n.TEXTURE_CUBE_MAP,E.__webglTexture,n.TEXTURE0+N);const X=i.get($);if($.version!==X.__version||G===!0){t.activeTexture(n.TEXTURE0+N);const me=Qe.getPrimaries(Qe.workingColorSpace),ce=x.colorSpace===Fi?null:Qe.getPrimaries(x.colorSpace),ge=x.colorSpace===Fi||me===ce?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge);const Le=x.isCompressedTexture||x.image[0].isCompressedTexture,fe=x.image[0]&&x.image[0].isDataTexture,xe=[];for(let le=0;le<6;le++)!Le&&!fe?xe[le]=_(x.image[le],!0,r.maxCubemapSize):xe[le]=fe?x.image[le].image:x.image[le],xe[le]=ae(x,xe[le]);const Pe=xe[0],Oe=s.convert(x.format,x.colorSpace),ve=s.convert(x.type),Be=y(x.internalFormat,Oe,ve,x.colorSpace),ze=x.isVideoTexture!==!0,ht=X.__version===void 0||G===!0,B=$.dataReady;let Se=P(x,Pe);Ce(n.TEXTURE_CUBE_MAP,x);let ie;if(Le){ze&&ht&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Se,Be,Pe.width,Pe.height);for(let le=0;le<6;le++){ie=xe[le].mipmaps;for(let Ae=0;Ae<ie.length;Ae++){const Te=ie[Ae];x.format!==yn?Oe!==null?ze?B&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,Ae,0,0,Te.width,Te.height,Oe,Te.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,Ae,Be,Te.width,Te.height,0,Te.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ze?B&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,Ae,0,0,Te.width,Te.height,Oe,ve,Te.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,Ae,Be,Te.width,Te.height,0,Oe,ve,Te.data)}}}else{if(ie=x.mipmaps,ze&&ht){ie.length>0&&Se++;const le=J(xe[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Se,Be,le.width,le.height)}for(let le=0;le<6;le++)if(fe){ze?B&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,xe[le].width,xe[le].height,Oe,ve,xe[le].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,Be,xe[le].width,xe[le].height,0,Oe,ve,xe[le].data);for(let Ae=0;Ae<ie.length;Ae++){const qe=ie[Ae].image[le].image;ze?B&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,Ae+1,0,0,qe.width,qe.height,Oe,ve,qe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,Ae+1,Be,qe.width,qe.height,0,Oe,ve,qe.data)}}else{ze?B&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,Oe,ve,xe[le]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,Be,Oe,ve,xe[le]);for(let Ae=0;Ae<ie.length;Ae++){const Te=ie[Ae];ze?B&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,Ae+1,0,0,Oe,ve,Te.image[le]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,Ae+1,Be,Oe,ve,Te.image[le])}}}m(x)&&p(n.TEXTURE_CUBE_MAP),X.__version=$.version,x.onUpdate&&x.onUpdate(x)}E.__version=x.version}function ye(E,x,N,G,$,X){const me=s.convert(N.format,N.colorSpace),ce=s.convert(N.type),ge=y(N.internalFormat,me,ce,N.colorSpace),Le=i.get(x),fe=i.get(N);if(fe.__renderTarget=x,!Le.__hasExternalTextures){const xe=Math.max(1,x.width>>X),Pe=Math.max(1,x.height>>X);$===n.TEXTURE_3D||$===n.TEXTURE_2D_ARRAY?t.texImage3D($,X,ge,xe,Pe,x.depth,0,me,ce,null):t.texImage2D($,X,ge,xe,Pe,0,me,ce,null)}t.bindFramebuffer(n.FRAMEBUFFER,E),q(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,G,$,fe.__webglTexture,0,Y(x)):($===n.TEXTURE_2D||$>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,G,$,fe.__webglTexture,X),t.bindFramebuffer(n.FRAMEBUFFER,null)}function F(E,x,N){if(n.bindRenderbuffer(n.RENDERBUFFER,E),x.depthBuffer){const G=x.depthTexture,$=G&&G.isDepthTexture?G.type:null,X=v(x.stencilBuffer,$),me=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ce=Y(x);q(x)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ce,X,x.width,x.height):N?n.renderbufferStorageMultisample(n.RENDERBUFFER,ce,X,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,X,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,me,n.RENDERBUFFER,E)}else{const G=x.textures;for(let $=0;$<G.length;$++){const X=G[$],me=s.convert(X.format,X.colorSpace),ce=s.convert(X.type),ge=y(X.internalFormat,me,ce,X.colorSpace),Le=Y(x);N&&q(x)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Le,ge,x.width,x.height):q(x)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Le,ge,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,ge,x.width,x.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function oe(E,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,E),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const G=i.get(x.depthTexture);G.__renderTarget=x,(!G.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),Q(x.depthTexture,0);const $=G.__webglTexture,X=Y(x);if(x.depthTexture.format===is)q(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,$,0,X):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,$,0);else if(x.depthTexture.format===ds)q(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,$,0,X):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,$,0);else throw new Error("Unknown depthTexture format")}function se(E){const x=i.get(E),N=E.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==E.depthTexture){const G=E.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),G){const $=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,G.removeEventListener("dispose",$)};G.addEventListener("dispose",$),x.__depthDisposeCallback=$}x.__boundDepthTexture=G}if(E.depthTexture&&!x.__autoAllocateDepthBuffer){if(N)throw new Error("target.depthTexture not supported in Cube render targets");oe(x.__webglFramebuffer,E)}else if(N){x.__webglDepthbuffer=[];for(let G=0;G<6;G++)if(t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[G]),x.__webglDepthbuffer[G]===void 0)x.__webglDepthbuffer[G]=n.createRenderbuffer(),F(x.__webglDepthbuffer[G],E,!1);else{const $=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,X=x.__webglDepthbuffer[G];n.bindRenderbuffer(n.RENDERBUFFER,X),n.framebufferRenderbuffer(n.FRAMEBUFFER,$,n.RENDERBUFFER,X)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=n.createRenderbuffer(),F(x.__webglDepthbuffer,E,!1);else{const G=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,$=x.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,$),n.framebufferRenderbuffer(n.FRAMEBUFFER,G,n.RENDERBUFFER,$)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function ue(E,x,N){const G=i.get(E);x!==void 0&&ye(G.__webglFramebuffer,E,E.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),N!==void 0&&se(E)}function Ie(E){const x=E.texture,N=i.get(E),G=i.get(x);E.addEventListener("dispose",C);const $=E.textures,X=E.isWebGLCubeRenderTarget===!0,me=$.length>1;if(me||(G.__webglTexture===void 0&&(G.__webglTexture=n.createTexture()),G.__version=x.version,o.memory.textures++),X){N.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)if(x.mipmaps&&x.mipmaps.length>0){N.__webglFramebuffer[ce]=[];for(let ge=0;ge<x.mipmaps.length;ge++)N.__webglFramebuffer[ce][ge]=n.createFramebuffer()}else N.__webglFramebuffer[ce]=n.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){N.__webglFramebuffer=[];for(let ce=0;ce<x.mipmaps.length;ce++)N.__webglFramebuffer[ce]=n.createFramebuffer()}else N.__webglFramebuffer=n.createFramebuffer();if(me)for(let ce=0,ge=$.length;ce<ge;ce++){const Le=i.get($[ce]);Le.__webglTexture===void 0&&(Le.__webglTexture=n.createTexture(),o.memory.textures++)}if(E.samples>0&&q(E)===!1){N.__webglMultisampledFramebuffer=n.createFramebuffer(),N.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let ce=0;ce<$.length;ce++){const ge=$[ce];N.__webglColorRenderbuffer[ce]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,N.__webglColorRenderbuffer[ce]);const Le=s.convert(ge.format,ge.colorSpace),fe=s.convert(ge.type),xe=y(ge.internalFormat,Le,fe,ge.colorSpace,E.isXRRenderTarget===!0),Pe=Y(E);n.renderbufferStorageMultisample(n.RENDERBUFFER,Pe,xe,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ce,n.RENDERBUFFER,N.__webglColorRenderbuffer[ce])}n.bindRenderbuffer(n.RENDERBUFFER,null),E.depthBuffer&&(N.__webglDepthRenderbuffer=n.createRenderbuffer(),F(N.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(X){t.bindTexture(n.TEXTURE_CUBE_MAP,G.__webglTexture),Ce(n.TEXTURE_CUBE_MAP,x);for(let ce=0;ce<6;ce++)if(x.mipmaps&&x.mipmaps.length>0)for(let ge=0;ge<x.mipmaps.length;ge++)ye(N.__webglFramebuffer[ce][ge],E,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,ge);else ye(N.__webglFramebuffer[ce],E,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0);m(x)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(me){for(let ce=0,ge=$.length;ce<ge;ce++){const Le=$[ce],fe=i.get(Le);t.bindTexture(n.TEXTURE_2D,fe.__webglTexture),Ce(n.TEXTURE_2D,Le),ye(N.__webglFramebuffer,E,Le,n.COLOR_ATTACHMENT0+ce,n.TEXTURE_2D,0),m(Le)&&p(n.TEXTURE_2D)}t.unbindTexture()}else{let ce=n.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(ce=E.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ce,G.__webglTexture),Ce(ce,x),x.mipmaps&&x.mipmaps.length>0)for(let ge=0;ge<x.mipmaps.length;ge++)ye(N.__webglFramebuffer[ge],E,x,n.COLOR_ATTACHMENT0,ce,ge);else ye(N.__webglFramebuffer,E,x,n.COLOR_ATTACHMENT0,ce,0);m(x)&&p(ce),t.unbindTexture()}E.depthBuffer&&se(E)}function R(E){const x=E.textures;for(let N=0,G=x.length;N<G;N++){const $=x[N];if(m($)){const X=b(E),me=i.get($).__webglTexture;t.bindTexture(X,me),p(X),t.unbindTexture()}}}const I=[],S=[];function te(E){if(E.samples>0){if(q(E)===!1){const x=E.textures,N=E.width,G=E.height;let $=n.COLOR_BUFFER_BIT;const X=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,me=i.get(E),ce=x.length>1;if(ce)for(let ge=0;ge<x.length;ge++)t.bindFramebuffer(n.FRAMEBUFFER,me.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ge,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,me.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ge,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,me.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,me.__webglFramebuffer);for(let ge=0;ge<x.length;ge++){if(E.resolveDepthBuffer&&(E.depthBuffer&&($|=n.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&($|=n.STENCIL_BUFFER_BIT)),ce){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,me.__webglColorRenderbuffer[ge]);const Le=i.get(x[ge]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Le,0)}n.blitFramebuffer(0,0,N,G,0,0,N,G,$,n.NEAREST),l===!0&&(I.length=0,S.length=0,I.push(n.COLOR_ATTACHMENT0+ge),E.depthBuffer&&E.resolveDepthBuffer===!1&&(I.push(X),S.push(X),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,S)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,I))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ce)for(let ge=0;ge<x.length;ge++){t.bindFramebuffer(n.FRAMEBUFFER,me.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ge,n.RENDERBUFFER,me.__webglColorRenderbuffer[ge]);const Le=i.get(x[ge]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,me.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ge,n.TEXTURE_2D,Le,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,me.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&l){const x=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[x])}}}function Y(E){return Math.min(r.maxSamples,E.samples)}function q(E){const x=i.get(E);return E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function ne(E){const x=o.render.frame;u.get(E)!==x&&(u.set(E,x),E.update())}function ae(E,x){const N=E.colorSpace,G=E.format,$=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||N!==Qt&&N!==Fi&&(Qe.getTransfer(N)===ct?(G!==yn||$!==Mi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",N)),x}function J(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(c.width=E.naturalWidth||E.width,c.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(c.width=E.displayWidth,c.height=E.displayHeight):(c.width=E.width,c.height=E.height),c}this.allocateTextureUnit=O,this.resetTextureUnits=U,this.setTexture2D=Q,this.setTexture2DArray=j,this.setTexture3D=ee,this.setTextureCube=z,this.rebindTextures=ue,this.setupRenderTarget=Ie,this.updateRenderTargetMipmap=R,this.updateMultisampleRenderTarget=te,this.setupDepthRenderbuffer=se,this.setupFrameBufferTexture=ye,this.useMultisampledRTT=q}function nL(n,e){function t(i,r=Fi){let s;const o=Qe.getTransfer(r);if(i===Mi)return n.UNSIGNED_BYTE;if(i===eh)return n.UNSIGNED_SHORT_4_4_4_4;if(i===th)return n.UNSIGNED_SHORT_5_5_5_1;if(i===U0)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===D0)return n.BYTE;if(i===N0)return n.SHORT;if(i===So)return n.UNSIGNED_SHORT;if(i===Qf)return n.INT;if(i===Er)return n.UNSIGNED_INT;if(i===In)return n.FLOAT;if(i===vi)return n.HALF_FLOAT;if(i===O0)return n.ALPHA;if(i===F0)return n.RGB;if(i===yn)return n.RGBA;if(i===B0)return n.LUMINANCE;if(i===k0)return n.LUMINANCE_ALPHA;if(i===is)return n.DEPTH_COMPONENT;if(i===ds)return n.DEPTH_STENCIL;if(i===nh)return n.RED;if(i===ih)return n.RED_INTEGER;if(i===H0)return n.RG;if(i===rh)return n.RG_INTEGER;if(i===sh)return n.RGBA_INTEGER;if(i===Ia||i===La||i===Da||i===Na)if(o===ct)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Ia)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===La)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Da)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Na)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Ia)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===La)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Da)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Na)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Lu||i===Du||i===Nu||i===Uu)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Lu)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Du)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Nu)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Uu)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Ou||i===Fu||i===Bu)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Ou||i===Fu)return o===ct?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Bu)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===ku||i===Hu||i===zu||i===Vu||i===Gu||i===Wu||i===Xu||i===ju||i===qu||i===$u||i===Yu||i===Ku||i===Zu||i===Ju)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===ku)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Hu)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===zu)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Vu)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Gu)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Wu)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Xu)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===ju)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===qu)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===$u)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Yu)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Ku)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Zu)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Ju)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ua||i===Qu||i===ef)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Ua)return o===ct?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Qu)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===ef)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===z0||i===tf||i===nf||i===rf)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Ua)return s.COMPRESSED_RED_RGTC1_EXT;if(i===tf)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===nf)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===rf)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===hs?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const iL={type:"move"};class Nc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new zi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new zi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new zi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,i),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),d=.02,g=.005;c.inputState.pinching&&h>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(iL)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new zi;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const rL=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,sL=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class oL{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const r=new Pt,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new zt({vertexShader:rL,fragmentShader:sL,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new on(new Sl(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class aL extends Ms{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,h=null,d=null,g=null;const _=new oL,m=t.getContextAttributes();let p=null,b=null;const y=[],v=[],P=new Ue;let w=null;const C=new Kt;C.viewport=new it;const D=new Kt;D.viewport=new it;const T=[C,D],M=new v1;let L=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(re){let he=y[re];return he===void 0&&(he=new Nc,y[re]=he),he.getTargetRaySpace()},this.getControllerGrip=function(re){let he=y[re];return he===void 0&&(he=new Nc,y[re]=he),he.getGripSpace()},this.getHand=function(re){let he=y[re];return he===void 0&&(he=new Nc,y[re]=he),he.getHandSpace()};function O(re){const he=v.indexOf(re.inputSource);if(he===-1)return;const ye=y[he];ye!==void 0&&(ye.update(re.inputSource,re.frame,c||o),ye.dispatchEvent({type:re.type,data:re.inputSource}))}function W(){r.removeEventListener("select",O),r.removeEventListener("selectstart",O),r.removeEventListener("selectend",O),r.removeEventListener("squeeze",O),r.removeEventListener("squeezestart",O),r.removeEventListener("squeezeend",O),r.removeEventListener("end",W),r.removeEventListener("inputsourceschange",Q);for(let re=0;re<y.length;re++){const he=v[re];he!==null&&(v[re]=null,y[re].disconnect(he))}L=null,U=null,_.reset(),e.setRenderTarget(p),d=null,h=null,f=null,r=null,b=null,Xe.stop(),i.isPresenting=!1,e.setPixelRatio(w),e.setSize(P.width,P.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(re){s=re,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(re){a=re,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(re){c=re},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(re){if(r=re,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",O),r.addEventListener("selectstart",O),r.addEventListener("selectend",O),r.addEventListener("squeeze",O),r.addEventListener("squeezestart",O),r.addEventListener("squeezeend",O),r.addEventListener("end",W),r.addEventListener("inputsourceschange",Q),m.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(P),r.renderState.layers===void 0){const he={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,t,he),r.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),b=new Nn(d.framebufferWidth,d.framebufferHeight,{format:yn,type:Mi,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let he=null,ye=null,F=null;m.depth&&(F=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,he=m.stencil?ds:is,ye=m.stencil?hs:Er);const oe={colorFormat:t.RGBA8,depthFormat:F,scaleFactor:s};f=new XRWebGLBinding(r,t),h=f.createProjectionLayer(oe),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),b=new Nn(h.textureWidth,h.textureHeight,{format:yn,type:Mi,depthTexture:new rv(h.textureWidth,h.textureHeight,ye,void 0,void 0,void 0,void 0,void 0,void 0,he),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Xe.setContext(r),Xe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function Q(re){for(let he=0;he<re.removed.length;he++){const ye=re.removed[he],F=v.indexOf(ye);F>=0&&(v[F]=null,y[F].disconnect(ye))}for(let he=0;he<re.added.length;he++){const ye=re.added[he];let F=v.indexOf(ye);if(F===-1){for(let se=0;se<y.length;se++)if(se>=v.length){v.push(ye),F=se;break}else if(v[se]===null){v[se]=ye,F=se;break}if(F===-1)break}const oe=y[F];oe&&oe.connect(ye)}}const j=new k,ee=new k;function z(re,he,ye){j.setFromMatrixPosition(he.matrixWorld),ee.setFromMatrixPosition(ye.matrixWorld);const F=j.distanceTo(ee),oe=he.projectionMatrix.elements,se=ye.projectionMatrix.elements,ue=oe[14]/(oe[10]-1),Ie=oe[14]/(oe[10]+1),R=(oe[9]+1)/oe[5],I=(oe[9]-1)/oe[5],S=(oe[8]-1)/oe[0],te=(se[8]+1)/se[0],Y=ue*S,q=ue*te,ne=F/(-S+te),ae=ne*-S;if(he.matrixWorld.decompose(re.position,re.quaternion,re.scale),re.translateX(ae),re.translateZ(ne),re.matrixWorld.compose(re.position,re.quaternion,re.scale),re.matrixWorldInverse.copy(re.matrixWorld).invert(),oe[10]===-1)re.projectionMatrix.copy(he.projectionMatrix),re.projectionMatrixInverse.copy(he.projectionMatrixInverse);else{const J=ue+ne,E=Ie+ne,x=Y-ae,N=q+(F-ae),G=R*Ie/E*J,$=I*Ie/E*J;re.projectionMatrix.makePerspective(x,N,G,$,J,E),re.projectionMatrixInverse.copy(re.projectionMatrix).invert()}}function de(re,he){he===null?re.matrixWorld.copy(re.matrix):re.matrixWorld.multiplyMatrices(he.matrixWorld,re.matrix),re.matrixWorldInverse.copy(re.matrixWorld).invert()}this.updateCamera=function(re){if(r===null)return;let he=re.near,ye=re.far;_.texture!==null&&(_.depthNear>0&&(he=_.depthNear),_.depthFar>0&&(ye=_.depthFar)),M.near=D.near=C.near=he,M.far=D.far=C.far=ye,(L!==M.near||U!==M.far)&&(r.updateRenderState({depthNear:M.near,depthFar:M.far}),L=M.near,U=M.far),C.layers.mask=re.layers.mask|2,D.layers.mask=re.layers.mask|4,M.layers.mask=C.layers.mask|D.layers.mask;const F=re.parent,oe=M.cameras;de(M,F);for(let se=0;se<oe.length;se++)de(oe[se],F);oe.length===2?z(M,C,D):M.projectionMatrix.copy(C.projectionMatrix),_e(re,M,F)};function _e(re,he,ye){ye===null?re.matrix.copy(he.matrixWorld):(re.matrix.copy(ye.matrixWorld),re.matrix.invert(),re.matrix.multiply(he.matrixWorld)),re.matrix.decompose(re.position,re.quaternion,re.scale),re.updateMatrixWorld(!0),re.projectionMatrix.copy(he.projectionMatrix),re.projectionMatrixInverse.copy(he.projectionMatrixInverse),re.isPerspectiveCamera&&(re.fov=ps*2*Math.atan(1/re.projectionMatrix.elements[5]),re.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(h===null&&d===null))return l},this.setFoveation=function(re){l=re,h!==null&&(h.fixedFoveation=re),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=re)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(M)};let Ee=null;function Ce(re,he){if(u=he.getViewerPose(c||o),g=he,u!==null){const ye=u.views;d!==null&&(e.setRenderTargetFramebuffer(b,d.framebuffer),e.setRenderTarget(b));let F=!1;ye.length!==M.cameras.length&&(M.cameras.length=0,F=!0);for(let se=0;se<ye.length;se++){const ue=ye[se];let Ie=null;if(d!==null)Ie=d.getViewport(ue);else{const I=f.getViewSubImage(h,ue);Ie=I.viewport,se===0&&(e.setRenderTargetTextures(b,I.colorTexture,h.ignoreDepthValues?void 0:I.depthStencilTexture),e.setRenderTarget(b))}let R=T[se];R===void 0&&(R=new Kt,R.layers.enable(se),R.viewport=new it,T[se]=R),R.matrix.fromArray(ue.transform.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale),R.projectionMatrix.fromArray(ue.projectionMatrix),R.projectionMatrixInverse.copy(R.projectionMatrix).invert(),R.viewport.set(Ie.x,Ie.y,Ie.width,Ie.height),se===0&&(M.matrix.copy(R.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),F===!0&&M.cameras.push(R)}const oe=r.enabledFeatures;if(oe&&oe.includes("depth-sensing")){const se=f.getDepthInformation(ye[0]);se&&se.isValid&&se.texture&&_.init(e,se,r.renderState)}}for(let ye=0;ye<y.length;ye++){const F=v[ye],oe=y[ye];F!==null&&oe!==void 0&&oe.update(F,he,c||o)}Ee&&Ee(re,he),he.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:he}),g=null}const Xe=new uv;Xe.setAnimationLoop(Ce),this.setAnimationLoop=function(re){Ee=re},this.dispose=function(){}}}const ur=new $n,lL=new je;function cL(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Z0(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,b,y,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),f(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p)):p.isMeshStandardMaterial?(s(m,p),h(m,p),p.isMeshPhysicalMaterial&&d(m,p,v)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),_(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,b,y):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===an&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===an&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const b=e.get(p),y=b.envMap,v=b.envMapRotation;y&&(m.envMap.value=y,ur.copy(v),ur.x*=-1,ur.y*=-1,ur.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(ur.y*=-1,ur.z*=-1),m.envMapRotation.value.setFromMatrix4(lL.makeRotationFromEuler(ur)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,b,y){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*b,m.scale.value=y*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,b){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===an&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const b=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function uL(n,e,t,i){let r={},s={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,y){const v=y.program;i.uniformBlockBinding(b,v)}function c(b,y){let v=r[b.id];v===void 0&&(g(b),v=u(b),r[b.id]=v,b.addEventListener("dispose",m));const P=y.program;i.updateUBOMapping(b,P);const w=e.render.frame;s[b.id]!==w&&(h(b),s[b.id]=w)}function u(b){const y=f();b.__bindingPointIndex=y;const v=n.createBuffer(),P=b.__size,w=b.usage;return n.bindBuffer(n.UNIFORM_BUFFER,v),n.bufferData(n.UNIFORM_BUFFER,P,w),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,y,v),v}function f(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(b){const y=r[b.id],v=b.uniforms,P=b.__cache;n.bindBuffer(n.UNIFORM_BUFFER,y);for(let w=0,C=v.length;w<C;w++){const D=Array.isArray(v[w])?v[w]:[v[w]];for(let T=0,M=D.length;T<M;T++){const L=D[T];if(d(L,w,T,P)===!0){const U=L.__offset,O=Array.isArray(L.value)?L.value:[L.value];let W=0;for(let Q=0;Q<O.length;Q++){const j=O[Q],ee=_(j);typeof j=="number"||typeof j=="boolean"?(L.__data[0]=j,n.bufferSubData(n.UNIFORM_BUFFER,U+W,L.__data)):j.isMatrix3?(L.__data[0]=j.elements[0],L.__data[1]=j.elements[1],L.__data[2]=j.elements[2],L.__data[3]=0,L.__data[4]=j.elements[3],L.__data[5]=j.elements[4],L.__data[6]=j.elements[5],L.__data[7]=0,L.__data[8]=j.elements[6],L.__data[9]=j.elements[7],L.__data[10]=j.elements[8],L.__data[11]=0):(j.toArray(L.__data,W),W+=ee.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,U,L.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(b,y,v,P){const w=b.value,C=y+"_"+v;if(P[C]===void 0)return typeof w=="number"||typeof w=="boolean"?P[C]=w:P[C]=w.clone(),!0;{const D=P[C];if(typeof w=="number"||typeof w=="boolean"){if(D!==w)return P[C]=w,!0}else if(D.equals(w)===!1)return D.copy(w),!0}return!1}function g(b){const y=b.uniforms;let v=0;const P=16;for(let C=0,D=y.length;C<D;C++){const T=Array.isArray(y[C])?y[C]:[y[C]];for(let M=0,L=T.length;M<L;M++){const U=T[M],O=Array.isArray(U.value)?U.value:[U.value];for(let W=0,Q=O.length;W<Q;W++){const j=O[W],ee=_(j),z=v%P,de=z%ee.boundary,_e=z+de;v+=de,_e!==0&&P-_e<ee.storage&&(v+=P-_e),U.__data=new Float32Array(ee.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=v,v+=ee.storage}}}const w=v%P;return w>0&&(v+=P-w),b.__size=v,b.__cache={},this}function _(b){const y={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(y.boundary=4,y.storage=4):b.isVector2?(y.boundary=8,y.storage=8):b.isVector3||b.isColor?(y.boundary=16,y.storage=12):b.isVector4?(y.boundary=16,y.storage=16):b.isMatrix3?(y.boundary=48,y.storage=48):b.isMatrix4?(y.boundary=64,y.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),y}function m(b){const y=b.target;y.removeEventListener("dispose",m);const v=o.indexOf(y.__bindingPointIndex);o.splice(v,1),n.deleteBuffer(r[y.id]),delete r[y.id],delete s[y.id]}function p(){for(const b in r)n.deleteBuffer(r[b]);o=[],r={},s={}}return{bind:l,update:c,dispose:p}}class fL{constructor(e={}){const{canvas:t=dw(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:h=!1}=e;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const b=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Dt,this.toneMapping=Wi,this.toneMappingExposure=1;const v=this;let P=!1,w=0,C=0,D=null,T=-1,M=null;const L=new it,U=new it;let O=null;const W=new ke(0);let Q=0,j=t.width,ee=t.height,z=1,de=null,_e=null;const Ee=new it(0,0,j,ee),Ce=new it(0,0,j,ee);let Xe=!1;const re=new uh;let he=!1,ye=!1;const F=new je,oe=new je,se=new k,ue=new it,Ie={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let R=!1;function I(){return D===null?z:1}let S=i;function te(A,H){return t.getContext(A,H)}try{const A={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Jf}`),t.addEventListener("webglcontextlost",le,!1),t.addEventListener("webglcontextrestored",Ae,!1),t.addEventListener("webglcontextcreationerror",Te,!1),S===null){const H="webgl2";if(S=te(H,A),S===null)throw te(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let Y,q,ne,ae,J,E,x,N,G,$,X,me,ce,ge,Le,fe,xe,Pe,Oe,ve,Be,ze,ht,B;function Se(){Y=new yP(S),Y.init(),ze=new nL(S,Y),q=new pP(S,Y,e,ze),ne=new eL(S,Y),q.reverseDepthBuffer&&h&&ne.buffers.depth.setReversed(!0),ae=new bP(S),J=new zI,E=new tL(S,Y,ne,J,q,ze,ae),x=new gP(v),N=new xP(v),G=new P1(S),ht=new hP(S,G),$=new MP(S,G,ae,ht),X=new TP(S,$,G,ae),Oe=new EP(S,q,E),fe=new mP(J),me=new HI(v,x,N,Y,q,ht,fe),ce=new cL(v,J),ge=new GI,Le=new YI(Y),Pe=new fP(v,x,N,ne,X,d,l),xe=new JI(v,X,q),B=new uL(S,ae,q,ne),ve=new dP(S,Y,ae),Be=new SP(S,Y,ae),ae.programs=me.programs,v.capabilities=q,v.extensions=Y,v.properties=J,v.renderLists=ge,v.shadowMap=xe,v.state=ne,v.info=ae}Se();const ie=new aL(v,S);this.xr=ie,this.getContext=function(){return S},this.getContextAttributes=function(){return S.getContextAttributes()},this.forceContextLoss=function(){const A=Y.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Y.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(A){A!==void 0&&(z=A,this.setSize(j,ee,!1))},this.getSize=function(A){return A.set(j,ee)},this.setSize=function(A,H,K=!0){if(ie.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}j=A,ee=H,t.width=Math.floor(A*z),t.height=Math.floor(H*z),K===!0&&(t.style.width=A+"px",t.style.height=H+"px"),this.setViewport(0,0,A,H)},this.getDrawingBufferSize=function(A){return A.set(j*z,ee*z).floor()},this.setDrawingBufferSize=function(A,H,K){j=A,ee=H,z=K,t.width=Math.floor(A*K),t.height=Math.floor(H*K),this.setViewport(0,0,A,H)},this.getCurrentViewport=function(A){return A.copy(L)},this.getViewport=function(A){return A.copy(Ee)},this.setViewport=function(A,H,K,Z){A.isVector4?Ee.set(A.x,A.y,A.z,A.w):Ee.set(A,H,K,Z),ne.viewport(L.copy(Ee).multiplyScalar(z).round())},this.getScissor=function(A){return A.copy(Ce)},this.setScissor=function(A,H,K,Z){A.isVector4?Ce.set(A.x,A.y,A.z,A.w):Ce.set(A,H,K,Z),ne.scissor(U.copy(Ce).multiplyScalar(z).round())},this.getScissorTest=function(){return Xe},this.setScissorTest=function(A){ne.setScissorTest(Xe=A)},this.setOpaqueSort=function(A){de=A},this.setTransparentSort=function(A){_e=A},this.getClearColor=function(A){return A.copy(Pe.getClearColor())},this.setClearColor=function(){Pe.setClearColor.apply(Pe,arguments)},this.getClearAlpha=function(){return Pe.getClearAlpha()},this.setClearAlpha=function(){Pe.setClearAlpha.apply(Pe,arguments)},this.clear=function(A=!0,H=!0,K=!0){let Z=0;if(A){let V=!1;if(D!==null){const pe=D.texture.format;V=pe===sh||pe===rh||pe===ih}if(V){const pe=D.texture.type,be=pe===Mi||pe===Er||pe===So||pe===hs||pe===eh||pe===th,we=Pe.getClearColor(),Re=Pe.getClearAlpha(),Ve=we.r,Ge=we.g,De=we.b;be?(g[0]=Ve,g[1]=Ge,g[2]=De,g[3]=Re,S.clearBufferuiv(S.COLOR,0,g)):(_[0]=Ve,_[1]=Ge,_[2]=De,_[3]=Re,S.clearBufferiv(S.COLOR,0,_))}else Z|=S.COLOR_BUFFER_BIT}H&&(Z|=S.DEPTH_BUFFER_BIT),K&&(Z|=S.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),S.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",le,!1),t.removeEventListener("webglcontextrestored",Ae,!1),t.removeEventListener("webglcontextcreationerror",Te,!1),Pe.dispose(),ge.dispose(),Le.dispose(),J.dispose(),x.dispose(),N.dispose(),X.dispose(),ht.dispose(),B.dispose(),me.dispose(),ie.dispose(),ie.removeEventListener("sessionstart",vh),ie.removeEventListener("sessionend",xh),Zi.stop()};function le(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function Ae(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;const A=ae.autoReset,H=xe.enabled,K=xe.autoUpdate,Z=xe.needsUpdate,V=xe.type;Se(),ae.autoReset=A,xe.enabled=H,xe.autoUpdate=K,xe.needsUpdate=Z,xe.type=V}function Te(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function qe(A){const H=A.target;H.removeEventListener("dispose",qe),vt(H)}function vt(A){Ut(A),J.remove(A)}function Ut(A){const H=J.get(A).programs;H!==void 0&&(H.forEach(function(K){me.releaseProgram(K)}),A.isShaderMaterial&&me.releaseShaderCache(A))}this.renderBufferDirect=function(A,H,K,Z,V,pe){H===null&&(H=Ie);const be=V.isMesh&&V.matrixWorld.determinant()<0,we=vv(A,H,K,Z,V);ne.setMaterial(Z,be);let Re=K.index,Ve=1;if(Z.wireframe===!0){if(Re=$.getWireframeAttribute(K),Re===void 0)return;Ve=2}const Ge=K.drawRange,De=K.attributes.position;let et=Ge.start*Ve,rt=(Ge.start+Ge.count)*Ve;pe!==null&&(et=Math.max(et,pe.start*Ve),rt=Math.min(rt,(pe.start+pe.count)*Ve)),Re!==null?(et=Math.max(et,0),rt=Math.min(rt,Re.count)):De!=null&&(et=Math.max(et,0),rt=Math.min(rt,De.count));const St=rt-et;if(St<0||St===1/0)return;ht.setup(V,Z,we,K,Re);let xt,nt=ve;if(Re!==null&&(xt=G.get(Re),nt=Be,nt.setIndex(xt)),V.isMesh)Z.wireframe===!0?(ne.setLineWidth(Z.wireframeLinewidth*I()),nt.setMode(S.LINES)):nt.setMode(S.TRIANGLES);else if(V.isLine){let Ne=Z.linewidth;Ne===void 0&&(Ne=1),ne.setLineWidth(Ne*I()),V.isLineSegments?nt.setMode(S.LINES):V.isLineLoop?nt.setMode(S.LINE_LOOP):nt.setMode(S.LINE_STRIP)}else V.isPoints?nt.setMode(S.POINTS):V.isSprite&&nt.setMode(S.TRIANGLES);if(V.isBatchedMesh)if(V._multiDrawInstances!==null)nt.renderMultiDrawInstances(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount,V._multiDrawInstances);else if(Y.get("WEBGL_multi_draw"))nt.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{const Ne=V._multiDrawStarts,Lt=V._multiDrawCounts,st=V._multiDrawCount,Tn=Re?G.get(Re).bytesPerElement:1,Rr=J.get(Z).currentProgram.getUniforms();for(let ln=0;ln<st;ln++)Rr.setValue(S,"_gl_DrawID",ln),nt.render(Ne[ln]/Tn,Lt[ln])}else if(V.isInstancedMesh)nt.renderInstances(et,St,V.count);else if(K.isInstancedBufferGeometry){const Ne=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,Lt=Math.min(K.instanceCount,Ne);nt.renderInstances(et,St,Lt)}else nt.render(et,St)};function lt(A,H,K){A.transparent===!0&&A.side===Xn&&A.forceSinglePass===!1?(A.side=an,A.needsUpdate=!0,Bo(A,H,K),A.side=yi,A.needsUpdate=!0,Bo(A,H,K),A.side=Xn):Bo(A,H,K)}this.compile=function(A,H,K=null){K===null&&(K=A),p=Le.get(K),p.init(H),y.push(p),K.traverseVisible(function(V){V.isLight&&V.layers.test(H.layers)&&(p.pushLight(V),V.castShadow&&p.pushShadow(V))}),A!==K&&A.traverseVisible(function(V){V.isLight&&V.layers.test(H.layers)&&(p.pushLight(V),V.castShadow&&p.pushShadow(V))}),p.setupLights();const Z=new Set;return A.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;const pe=V.material;if(pe)if(Array.isArray(pe))for(let be=0;be<pe.length;be++){const we=pe[be];lt(we,K,V),Z.add(we)}else lt(pe,K,V),Z.add(pe)}),y.pop(),p=null,Z},this.compileAsync=function(A,H,K=null){const Z=this.compile(A,H,K);return new Promise(V=>{function pe(){if(Z.forEach(function(be){J.get(be).currentProgram.isReady()&&Z.delete(be)}),Z.size===0){V(A);return}setTimeout(pe,10)}Y.get("KHR_parallel_shader_compile")!==null?pe():setTimeout(pe,10)})};let En=null;function Qn(A){En&&En(A)}function vh(){Zi.stop()}function xh(){Zi.start()}const Zi=new uv;Zi.setAnimationLoop(Qn),typeof self<"u"&&Zi.setContext(self),this.setAnimationLoop=function(A){En=A,ie.setAnimationLoop(A),A===null?Zi.stop():Zi.start()},ie.addEventListener("sessionstart",vh),ie.addEventListener("sessionend",xh),this.render=function(A,H){if(H!==void 0&&H.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),ie.enabled===!0&&ie.isPresenting===!0&&(ie.cameraAutoUpdate===!0&&ie.updateCamera(H),H=ie.getCamera()),A.isScene===!0&&A.onBeforeRender(v,A,H,D),p=Le.get(A,y.length),p.init(H),y.push(p),oe.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),re.setFromProjectionMatrix(oe),ye=this.localClippingEnabled,he=fe.init(this.clippingPlanes,ye),m=ge.get(A,b.length),m.init(),b.push(m),ie.enabled===!0&&ie.isPresenting===!0){const pe=v.xr.getDepthSensingMesh();pe!==null&&wl(pe,H,-1/0,v.sortObjects)}wl(A,H,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(de,_e),R=ie.enabled===!1||ie.isPresenting===!1||ie.hasDepthSensing()===!1,R&&Pe.addToRenderList(m,A),this.info.render.frame++,he===!0&&fe.beginShadows();const K=p.state.shadowsArray;xe.render(K,A,H),he===!0&&fe.endShadows(),this.info.autoReset===!0&&this.info.reset();const Z=m.opaque,V=m.transmissive;if(p.setupLights(),H.isArrayCamera){const pe=H.cameras;if(V.length>0)for(let be=0,we=pe.length;be<we;be++){const Re=pe[be];Mh(Z,V,A,Re)}R&&Pe.render(A);for(let be=0,we=pe.length;be<we;be++){const Re=pe[be];yh(m,A,Re,Re.viewport)}}else V.length>0&&Mh(Z,V,A,H),R&&Pe.render(A),yh(m,A,H);D!==null&&(E.updateMultisampleRenderTarget(D),E.updateRenderTargetMipmap(D)),A.isScene===!0&&A.onAfterRender(v,A,H),ht.resetDefaultState(),T=-1,M=null,y.pop(),y.length>0?(p=y[y.length-1],he===!0&&fe.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,b.pop(),b.length>0?m=b[b.length-1]:m=null};function wl(A,H,K,Z){if(A.visible===!1)return;if(A.layers.test(H.layers)){if(A.isGroup)K=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(H);else if(A.isLight)p.pushLight(A),A.castShadow&&p.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||re.intersectsSprite(A)){Z&&ue.setFromMatrixPosition(A.matrixWorld).applyMatrix4(oe);const be=X.update(A),we=A.material;we.visible&&m.push(A,be,we,K,ue.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||re.intersectsObject(A))){const be=X.update(A),we=A.material;if(Z&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),ue.copy(A.boundingSphere.center)):(be.boundingSphere===null&&be.computeBoundingSphere(),ue.copy(be.boundingSphere.center)),ue.applyMatrix4(A.matrixWorld).applyMatrix4(oe)),Array.isArray(we)){const Re=be.groups;for(let Ve=0,Ge=Re.length;Ve<Ge;Ve++){const De=Re[Ve],et=we[De.materialIndex];et&&et.visible&&m.push(A,be,et,K,ue.z,De)}}else we.visible&&m.push(A,be,we,K,ue.z,null)}}const pe=A.children;for(let be=0,we=pe.length;be<we;be++)wl(pe[be],H,K,Z)}function yh(A,H,K,Z){const V=A.opaque,pe=A.transmissive,be=A.transparent;p.setupLightsView(K),he===!0&&fe.setGlobalState(v.clippingPlanes,K),Z&&ne.viewport(L.copy(Z)),V.length>0&&Fo(V,H,K),pe.length>0&&Fo(pe,H,K),be.length>0&&Fo(be,H,K),ne.buffers.depth.setTest(!0),ne.buffers.depth.setMask(!0),ne.buffers.color.setMask(!0),ne.setPolygonOffset(!1)}function Mh(A,H,K,Z){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[Z.id]===void 0&&(p.state.transmissionRenderTarget[Z.id]=new Nn(1,1,{generateMipmaps:!0,type:Y.has("EXT_color_buffer_half_float")||Y.has("EXT_color_buffer_float")?vi:Mi,minFilter:mi,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Qe.workingColorSpace}));const pe=p.state.transmissionRenderTarget[Z.id],be=Z.viewport||L;pe.setSize(be.z,be.w);const we=v.getRenderTarget();v.setRenderTarget(pe),v.getClearColor(W),Q=v.getClearAlpha(),Q<1&&v.setClearColor(16777215,.5),v.clear(),R&&Pe.render(K);const Re=v.toneMapping;v.toneMapping=Wi;const Ve=Z.viewport;if(Z.viewport!==void 0&&(Z.viewport=void 0),p.setupLightsView(Z),he===!0&&fe.setGlobalState(v.clippingPlanes,Z),Fo(A,K,Z),E.updateMultisampleRenderTarget(pe),E.updateRenderTargetMipmap(pe),Y.has("WEBGL_multisampled_render_to_texture")===!1){let Ge=!1;for(let De=0,et=H.length;De<et;De++){const rt=H[De],St=rt.object,xt=rt.geometry,nt=rt.material,Ne=rt.group;if(nt.side===Xn&&St.layers.test(Z.layers)){const Lt=nt.side;nt.side=an,nt.needsUpdate=!0,Sh(St,K,Z,xt,nt,Ne),nt.side=Lt,nt.needsUpdate=!0,Ge=!0}}Ge===!0&&(E.updateMultisampleRenderTarget(pe),E.updateRenderTargetMipmap(pe))}v.setRenderTarget(we),v.setClearColor(W,Q),Ve!==void 0&&(Z.viewport=Ve),v.toneMapping=Re}function Fo(A,H,K){const Z=H.isScene===!0?H.overrideMaterial:null;for(let V=0,pe=A.length;V<pe;V++){const be=A[V],we=be.object,Re=be.geometry,Ve=Z===null?be.material:Z,Ge=be.group;we.layers.test(K.layers)&&Sh(we,H,K,Re,Ve,Ge)}}function Sh(A,H,K,Z,V,pe){A.onBeforeRender(v,H,K,Z,V,pe),A.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),V.onBeforeRender(v,H,K,Z,A,pe),V.transparent===!0&&V.side===Xn&&V.forceSinglePass===!1?(V.side=an,V.needsUpdate=!0,v.renderBufferDirect(K,H,Z,V,A,pe),V.side=yi,V.needsUpdate=!0,v.renderBufferDirect(K,H,Z,V,A,pe),V.side=Xn):v.renderBufferDirect(K,H,Z,V,A,pe),A.onAfterRender(v,H,K,Z,V,pe)}function Bo(A,H,K){H.isScene!==!0&&(H=Ie);const Z=J.get(A),V=p.state.lights,pe=p.state.shadowsArray,be=V.state.version,we=me.getParameters(A,V.state,pe,H,K),Re=me.getProgramCacheKey(we);let Ve=Z.programs;Z.environment=A.isMeshStandardMaterial?H.environment:null,Z.fog=H.fog,Z.envMap=(A.isMeshStandardMaterial?N:x).get(A.envMap||Z.environment),Z.envMapRotation=Z.environment!==null&&A.envMap===null?H.environmentRotation:A.envMapRotation,Ve===void 0&&(A.addEventListener("dispose",qe),Ve=new Map,Z.programs=Ve);let Ge=Ve.get(Re);if(Ge!==void 0){if(Z.currentProgram===Ge&&Z.lightsStateVersion===be)return Eh(A,we),Ge}else we.uniforms=me.getUniforms(A),A.onBeforeCompile(we,v),Ge=me.acquireProgram(we,Re),Ve.set(Re,Ge),Z.uniforms=we.uniforms;const De=Z.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(De.clippingPlanes=fe.uniform),Eh(A,we),Z.needsLights=yv(A),Z.lightsStateVersion=be,Z.needsLights&&(De.ambientLightColor.value=V.state.ambient,De.lightProbe.value=V.state.probe,De.directionalLights.value=V.state.directional,De.directionalLightShadows.value=V.state.directionalShadow,De.spotLights.value=V.state.spot,De.spotLightShadows.value=V.state.spotShadow,De.rectAreaLights.value=V.state.rectArea,De.ltc_1.value=V.state.rectAreaLTC1,De.ltc_2.value=V.state.rectAreaLTC2,De.pointLights.value=V.state.point,De.pointLightShadows.value=V.state.pointShadow,De.hemisphereLights.value=V.state.hemi,De.directionalShadowMap.value=V.state.directionalShadowMap,De.directionalShadowMatrix.value=V.state.directionalShadowMatrix,De.spotShadowMap.value=V.state.spotShadowMap,De.spotLightMatrix.value=V.state.spotLightMatrix,De.spotLightMap.value=V.state.spotLightMap,De.pointShadowMap.value=V.state.pointShadowMap,De.pointShadowMatrix.value=V.state.pointShadowMatrix),Z.currentProgram=Ge,Z.uniformsList=null,Ge}function bh(A){if(A.uniformsList===null){const H=A.currentProgram.getUniforms();A.uniformsList=Oa.seqWithValue(H.seq,A.uniforms)}return A.uniformsList}function Eh(A,H){const K=J.get(A);K.outputColorSpace=H.outputColorSpace,K.batching=H.batching,K.batchingColor=H.batchingColor,K.instancing=H.instancing,K.instancingColor=H.instancingColor,K.instancingMorph=H.instancingMorph,K.skinning=H.skinning,K.morphTargets=H.morphTargets,K.morphNormals=H.morphNormals,K.morphColors=H.morphColors,K.morphTargetsCount=H.morphTargetsCount,K.numClippingPlanes=H.numClippingPlanes,K.numIntersection=H.numClipIntersection,K.vertexAlphas=H.vertexAlphas,K.vertexTangents=H.vertexTangents,K.toneMapping=H.toneMapping}function vv(A,H,K,Z,V){H.isScene!==!0&&(H=Ie),E.resetTextureUnits();const pe=H.fog,be=Z.isMeshStandardMaterial?H.environment:null,we=D===null?v.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:Qt,Re=(Z.isMeshStandardMaterial?N:x).get(Z.envMap||be),Ve=Z.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,Ge=!!K.attributes.tangent&&(!!Z.normalMap||Z.anisotropy>0),De=!!K.morphAttributes.position,et=!!K.morphAttributes.normal,rt=!!K.morphAttributes.color;let St=Wi;Z.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(St=v.toneMapping);const xt=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,nt=xt!==void 0?xt.length:0,Ne=J.get(Z),Lt=p.state.lights;if(he===!0&&(ye===!0||A!==M)){const Wt=A===M&&Z.id===T;fe.setState(Z,A,Wt)}let st=!1;Z.version===Ne.__version?(Ne.needsLights&&Ne.lightsStateVersion!==Lt.state.version||Ne.outputColorSpace!==we||V.isBatchedMesh&&Ne.batching===!1||!V.isBatchedMesh&&Ne.batching===!0||V.isBatchedMesh&&Ne.batchingColor===!0&&V.colorTexture===null||V.isBatchedMesh&&Ne.batchingColor===!1&&V.colorTexture!==null||V.isInstancedMesh&&Ne.instancing===!1||!V.isInstancedMesh&&Ne.instancing===!0||V.isSkinnedMesh&&Ne.skinning===!1||!V.isSkinnedMesh&&Ne.skinning===!0||V.isInstancedMesh&&Ne.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&Ne.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&Ne.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&Ne.instancingMorph===!1&&V.morphTexture!==null||Ne.envMap!==Re||Z.fog===!0&&Ne.fog!==pe||Ne.numClippingPlanes!==void 0&&(Ne.numClippingPlanes!==fe.numPlanes||Ne.numIntersection!==fe.numIntersection)||Ne.vertexAlphas!==Ve||Ne.vertexTangents!==Ge||Ne.morphTargets!==De||Ne.morphNormals!==et||Ne.morphColors!==rt||Ne.toneMapping!==St||Ne.morphTargetsCount!==nt)&&(st=!0):(st=!0,Ne.__version=Z.version);let Tn=Ne.currentProgram;st===!0&&(Tn=Bo(Z,H,V));let Rr=!1,ln=!1,As=!1;const gt=Tn.getUniforms(),mn=Ne.uniforms;if(ne.useProgram(Tn.program)&&(Rr=!0,ln=!0,As=!0),Z.id!==T&&(T=Z.id,ln=!0),Rr||M!==A){ne.buffers.depth.getReversed()?(F.copy(A.projectionMatrix),mw(F),gw(F),gt.setValue(S,"projectionMatrix",F)):gt.setValue(S,"projectionMatrix",A.projectionMatrix),gt.setValue(S,"viewMatrix",A.matrixWorldInverse);const en=gt.map.cameraPosition;en!==void 0&&en.setValue(S,se.setFromMatrixPosition(A.matrixWorld)),q.logarithmicDepthBuffer&&gt.setValue(S,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&gt.setValue(S,"isOrthographic",A.isOrthographicCamera===!0),M!==A&&(M=A,ln=!0,As=!0)}if(V.isSkinnedMesh){gt.setOptional(S,V,"bindMatrix"),gt.setOptional(S,V,"bindMatrixInverse");const Wt=V.skeleton;Wt&&(Wt.boneTexture===null&&Wt.computeBoneTexture(),gt.setValue(S,"boneTexture",Wt.boneTexture,E))}V.isBatchedMesh&&(gt.setOptional(S,V,"batchingTexture"),gt.setValue(S,"batchingTexture",V._matricesTexture,E),gt.setOptional(S,V,"batchingIdTexture"),gt.setValue(S,"batchingIdTexture",V._indirectTexture,E),gt.setOptional(S,V,"batchingColorTexture"),V._colorsTexture!==null&&gt.setValue(S,"batchingColorTexture",V._colorsTexture,E));const gn=K.morphAttributes;if((gn.position!==void 0||gn.normal!==void 0||gn.color!==void 0)&&Oe.update(V,K,Tn),(ln||Ne.receiveShadow!==V.receiveShadow)&&(Ne.receiveShadow=V.receiveShadow,gt.setValue(S,"receiveShadow",V.receiveShadow)),Z.isMeshGouraudMaterial&&Z.envMap!==null&&(mn.envMap.value=Re,mn.flipEnvMap.value=Re.isCubeTexture&&Re.isRenderTargetTexture===!1?-1:1),Z.isMeshStandardMaterial&&Z.envMap===null&&H.environment!==null&&(mn.envMapIntensity.value=H.environmentIntensity),ln&&(gt.setValue(S,"toneMappingExposure",v.toneMappingExposure),Ne.needsLights&&xv(mn,As),pe&&Z.fog===!0&&ce.refreshFogUniforms(mn,pe),ce.refreshMaterialUniforms(mn,Z,z,ee,p.state.transmissionRenderTarget[A.id]),Oa.upload(S,bh(Ne),mn,E)),Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&(Oa.upload(S,bh(Ne),mn,E),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&gt.setValue(S,"center",V.center),gt.setValue(S,"modelViewMatrix",V.modelViewMatrix),gt.setValue(S,"normalMatrix",V.normalMatrix),gt.setValue(S,"modelMatrix",V.matrixWorld),Z.isShaderMaterial||Z.isRawShaderMaterial){const Wt=Z.uniformsGroups;for(let en=0,Rl=Wt.length;en<Rl;en++){const Ji=Wt[en];B.update(Ji,Tn),B.bind(Ji,Tn)}}return Tn}function xv(A,H){A.ambientLightColor.needsUpdate=H,A.lightProbe.needsUpdate=H,A.directionalLights.needsUpdate=H,A.directionalLightShadows.needsUpdate=H,A.pointLights.needsUpdate=H,A.pointLightShadows.needsUpdate=H,A.spotLights.needsUpdate=H,A.spotLightShadows.needsUpdate=H,A.rectAreaLights.needsUpdate=H,A.hemisphereLights.needsUpdate=H}function yv(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(A,H,K){J.get(A.texture).__webglTexture=H,J.get(A.depthTexture).__webglTexture=K;const Z=J.get(A);Z.__hasExternalTextures=!0,Z.__autoAllocateDepthBuffer=K===void 0,Z.__autoAllocateDepthBuffer||Y.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Z.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,H){const K=J.get(A);K.__webglFramebuffer=H,K.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(A,H=0,K=0){D=A,w=H,C=K;let Z=!0,V=null,pe=!1,be=!1;if(A){const Re=J.get(A);if(Re.__useDefaultFramebuffer!==void 0)ne.bindFramebuffer(S.FRAMEBUFFER,null),Z=!1;else if(Re.__webglFramebuffer===void 0)E.setupRenderTarget(A);else if(Re.__hasExternalTextures)E.rebindTextures(A,J.get(A.texture).__webglTexture,J.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const De=A.depthTexture;if(Re.__boundDepthTexture!==De){if(De!==null&&J.has(De)&&(A.width!==De.image.width||A.height!==De.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");E.setupDepthRenderbuffer(A)}}const Ve=A.texture;(Ve.isData3DTexture||Ve.isDataArrayTexture||Ve.isCompressedArrayTexture)&&(be=!0);const Ge=J.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Ge[H])?V=Ge[H][K]:V=Ge[H],pe=!0):A.samples>0&&E.useMultisampledRTT(A)===!1?V=J.get(A).__webglMultisampledFramebuffer:Array.isArray(Ge)?V=Ge[K]:V=Ge,L.copy(A.viewport),U.copy(A.scissor),O=A.scissorTest}else L.copy(Ee).multiplyScalar(z).floor(),U.copy(Ce).multiplyScalar(z).floor(),O=Xe;if(ne.bindFramebuffer(S.FRAMEBUFFER,V)&&Z&&ne.drawBuffers(A,V),ne.viewport(L),ne.scissor(U),ne.setScissorTest(O),pe){const Re=J.get(A.texture);S.framebufferTexture2D(S.FRAMEBUFFER,S.COLOR_ATTACHMENT0,S.TEXTURE_CUBE_MAP_POSITIVE_X+H,Re.__webglTexture,K)}else if(be){const Re=J.get(A.texture),Ve=H||0;S.framebufferTextureLayer(S.FRAMEBUFFER,S.COLOR_ATTACHMENT0,Re.__webglTexture,K||0,Ve)}T=-1},this.readRenderTargetPixels=function(A,H,K,Z,V,pe,be){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let we=J.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&be!==void 0&&(we=we[be]),we){ne.bindFramebuffer(S.FRAMEBUFFER,we);try{const Re=A.texture,Ve=Re.format,Ge=Re.type;if(!q.textureFormatReadable(Ve)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!q.textureTypeReadable(Ge)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=A.width-Z&&K>=0&&K<=A.height-V&&S.readPixels(H,K,Z,V,ze.convert(Ve),ze.convert(Ge),pe)}finally{const Re=D!==null?J.get(D).__webglFramebuffer:null;ne.bindFramebuffer(S.FRAMEBUFFER,Re)}}},this.readRenderTargetPixelsAsync=async function(A,H,K,Z,V,pe,be){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let we=J.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&be!==void 0&&(we=we[be]),we){const Re=A.texture,Ve=Re.format,Ge=Re.type;if(!q.textureFormatReadable(Ve))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!q.textureTypeReadable(Ge))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(H>=0&&H<=A.width-Z&&K>=0&&K<=A.height-V){ne.bindFramebuffer(S.FRAMEBUFFER,we);const De=S.createBuffer();S.bindBuffer(S.PIXEL_PACK_BUFFER,De),S.bufferData(S.PIXEL_PACK_BUFFER,pe.byteLength,S.STREAM_READ),S.readPixels(H,K,Z,V,ze.convert(Ve),ze.convert(Ge),0);const et=D!==null?J.get(D).__webglFramebuffer:null;ne.bindFramebuffer(S.FRAMEBUFFER,et);const rt=S.fenceSync(S.SYNC_GPU_COMMANDS_COMPLETE,0);return S.flush(),await pw(S,rt,4),S.bindBuffer(S.PIXEL_PACK_BUFFER,De),S.getBufferSubData(S.PIXEL_PACK_BUFFER,0,pe),S.deleteBuffer(De),S.deleteSync(rt),pe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,H=null,K=0){A.isTexture!==!0&&($r("WebGLRenderer: copyFramebufferToTexture function signature has changed."),H=arguments[0]||null,A=arguments[1]);const Z=Math.pow(2,-K),V=Math.floor(A.image.width*Z),pe=Math.floor(A.image.height*Z),be=H!==null?H.x:0,we=H!==null?H.y:0;E.setTexture2D(A,0),S.copyTexSubImage2D(S.TEXTURE_2D,K,0,0,be,we,V,pe),ne.unbindTexture()};const Mv=S.createFramebuffer(),Sv=S.createFramebuffer();this.copyTextureToTexture=function(A,H,K=null,Z=null,V=0,pe=null){A.isTexture!==!0&&($r("WebGLRenderer: copyTextureToTexture function signature has changed."),Z=arguments[0]||null,A=arguments[1],H=arguments[2],pe=arguments[3]||0,K=null),pe===null&&(V!==0?($r("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),pe=V,V=0):pe=0);let be,we,Re,Ve,Ge,De,et,rt,St;const xt=A.isCompressedTexture?A.mipmaps[pe]:A.image;if(K!==null)be=K.max.x-K.min.x,we=K.max.y-K.min.y,Re=K.isBox3?K.max.z-K.min.z:1,Ve=K.min.x,Ge=K.min.y,De=K.isBox3?K.min.z:0;else{const gn=Math.pow(2,-V);be=Math.floor(xt.width*gn),we=Math.floor(xt.height*gn),A.isDataArrayTexture?Re=xt.depth:A.isData3DTexture?Re=Math.floor(xt.depth*gn):Re=1,Ve=0,Ge=0,De=0}Z!==null?(et=Z.x,rt=Z.y,St=Z.z):(et=0,rt=0,St=0);const nt=ze.convert(H.format),Ne=ze.convert(H.type);let Lt;H.isData3DTexture?(E.setTexture3D(H,0),Lt=S.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(E.setTexture2DArray(H,0),Lt=S.TEXTURE_2D_ARRAY):(E.setTexture2D(H,0),Lt=S.TEXTURE_2D),S.pixelStorei(S.UNPACK_FLIP_Y_WEBGL,H.flipY),S.pixelStorei(S.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),S.pixelStorei(S.UNPACK_ALIGNMENT,H.unpackAlignment);const st=S.getParameter(S.UNPACK_ROW_LENGTH),Tn=S.getParameter(S.UNPACK_IMAGE_HEIGHT),Rr=S.getParameter(S.UNPACK_SKIP_PIXELS),ln=S.getParameter(S.UNPACK_SKIP_ROWS),As=S.getParameter(S.UNPACK_SKIP_IMAGES);S.pixelStorei(S.UNPACK_ROW_LENGTH,xt.width),S.pixelStorei(S.UNPACK_IMAGE_HEIGHT,xt.height),S.pixelStorei(S.UNPACK_SKIP_PIXELS,Ve),S.pixelStorei(S.UNPACK_SKIP_ROWS,Ge),S.pixelStorei(S.UNPACK_SKIP_IMAGES,De);const gt=A.isDataArrayTexture||A.isData3DTexture,mn=H.isDataArrayTexture||H.isData3DTexture;if(A.isDepthTexture){const gn=J.get(A),Wt=J.get(H),en=J.get(gn.__renderTarget),Rl=J.get(Wt.__renderTarget);ne.bindFramebuffer(S.READ_FRAMEBUFFER,en.__webglFramebuffer),ne.bindFramebuffer(S.DRAW_FRAMEBUFFER,Rl.__webglFramebuffer);for(let Ji=0;Ji<Re;Ji++)gt&&(S.framebufferTextureLayer(S.READ_FRAMEBUFFER,S.COLOR_ATTACHMENT0,J.get(A).__webglTexture,V,De+Ji),S.framebufferTextureLayer(S.DRAW_FRAMEBUFFER,S.COLOR_ATTACHMENT0,J.get(H).__webglTexture,pe,St+Ji)),S.blitFramebuffer(Ve,Ge,be,we,et,rt,be,we,S.DEPTH_BUFFER_BIT,S.NEAREST);ne.bindFramebuffer(S.READ_FRAMEBUFFER,null),ne.bindFramebuffer(S.DRAW_FRAMEBUFFER,null)}else if(V!==0||A.isRenderTargetTexture||J.has(A)){const gn=J.get(A),Wt=J.get(H);ne.bindFramebuffer(S.READ_FRAMEBUFFER,Mv),ne.bindFramebuffer(S.DRAW_FRAMEBUFFER,Sv);for(let en=0;en<Re;en++)gt?S.framebufferTextureLayer(S.READ_FRAMEBUFFER,S.COLOR_ATTACHMENT0,gn.__webglTexture,V,De+en):S.framebufferTexture2D(S.READ_FRAMEBUFFER,S.COLOR_ATTACHMENT0,S.TEXTURE_2D,gn.__webglTexture,V),mn?S.framebufferTextureLayer(S.DRAW_FRAMEBUFFER,S.COLOR_ATTACHMENT0,Wt.__webglTexture,pe,St+en):S.framebufferTexture2D(S.DRAW_FRAMEBUFFER,S.COLOR_ATTACHMENT0,S.TEXTURE_2D,Wt.__webglTexture,pe),V!==0?S.blitFramebuffer(Ve,Ge,be,we,et,rt,be,we,S.COLOR_BUFFER_BIT,S.NEAREST):mn?S.copyTexSubImage3D(Lt,pe,et,rt,St+en,Ve,Ge,be,we):S.copyTexSubImage2D(Lt,pe,et,rt,Ve,Ge,be,we);ne.bindFramebuffer(S.READ_FRAMEBUFFER,null),ne.bindFramebuffer(S.DRAW_FRAMEBUFFER,null)}else mn?A.isDataTexture||A.isData3DTexture?S.texSubImage3D(Lt,pe,et,rt,St,be,we,Re,nt,Ne,xt.data):H.isCompressedArrayTexture?S.compressedTexSubImage3D(Lt,pe,et,rt,St,be,we,Re,nt,xt.data):S.texSubImage3D(Lt,pe,et,rt,St,be,we,Re,nt,Ne,xt):A.isDataTexture?S.texSubImage2D(S.TEXTURE_2D,pe,et,rt,be,we,nt,Ne,xt.data):A.isCompressedTexture?S.compressedTexSubImage2D(S.TEXTURE_2D,pe,et,rt,xt.width,xt.height,nt,xt.data):S.texSubImage2D(S.TEXTURE_2D,pe,et,rt,be,we,nt,Ne,xt);S.pixelStorei(S.UNPACK_ROW_LENGTH,st),S.pixelStorei(S.UNPACK_IMAGE_HEIGHT,Tn),S.pixelStorei(S.UNPACK_SKIP_PIXELS,Rr),S.pixelStorei(S.UNPACK_SKIP_ROWS,ln),S.pixelStorei(S.UNPACK_SKIP_IMAGES,As),pe===0&&H.generateMipmaps&&S.generateMipmap(Lt),ne.unbindTexture()},this.copyTextureToTexture3D=function(A,H,K=null,Z=null,V=0){return A.isTexture!==!0&&($r("WebGLRenderer: copyTextureToTexture3D function signature has changed."),K=arguments[0]||null,Z=arguments[1]||null,A=arguments[2],H=arguments[3],V=arguments[4]||0),$r('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(A,H,K,Z,V)},this.initRenderTarget=function(A){J.get(A).__webglFramebuffer===void 0&&E.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?E.setTextureCube(A,0):A.isData3DTexture?E.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?E.setTexture2DArray(A,0):E.setTexture2D(A,0),ne.unbindTexture()},this.resetState=function(){w=0,C=0,D=null,ne.reset(),ht.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return gi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=Qe._getDrawingBufferColorSpace(e),t.unpackColorSpace=Qe._getUnpackColorSpace()}}function Em(n,e){if(e===HA)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),n;if(e===sf||e===V0){let t=n.getIndex();if(t===null){const o=[],a=n.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);n.setIndex(o),t=n.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),n}const i=t.count-2,r=[];if(e===sf)for(let o=1;o<=i;o++)r.push(t.getX(0)),r.push(t.getX(o)),r.push(t.getX(o+1));else for(let o=0;o<i;o++)o%2===0?(r.push(t.getX(o)),r.push(t.getX(o+1)),r.push(t.getX(o+2))):(r.push(t.getX(o+2)),r.push(t.getX(o+1)),r.push(t.getX(o)));r.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=n.clone();return s.setIndex(r),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),n}class hL extends Es{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new _L(t)}),this.register(function(t){return new vL(t)}),this.register(function(t){return new wL(t)}),this.register(function(t){return new RL(t)}),this.register(function(t){return new CL(t)}),this.register(function(t){return new yL(t)}),this.register(function(t){return new ML(t)}),this.register(function(t){return new SL(t)}),this.register(function(t){return new bL(t)}),this.register(function(t){return new gL(t)}),this.register(function(t){return new EL(t)}),this.register(function(t){return new xL(t)}),this.register(function(t){return new AL(t)}),this.register(function(t){return new TL(t)}),this.register(function(t){return new pL(t)}),this.register(function(t){return new PL(t)}),this.register(function(t){return new IL(t)})}load(e,t,i,r){const s=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const c=ao.extractUrlBase(e);o=ao.resolveURL(c,this.path)}else o=ao.extractUrlBase(e);this.manager.itemStart(e);const a=function(c){r?r(c):console.error(c),s.manager.itemError(e),s.manager.itemEnd(e)},l=new lv(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{s.parse(c,o,function(u){t(u),s.manager.itemEnd(e)},a)}catch(u){a(u)}},i,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,r){let s;const o={},a={},l=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===mv){try{o[Je.KHR_BINARY_GLTF]=new LL(e)}catch(f){r&&r(f);return}s=JSON.parse(o[Je.KHR_BINARY_GLTF].content)}else s=JSON.parse(l.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){r&&r(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new XL(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const f=this.pluginCallbacks[u](c);f.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[f.name]=f,o[f.name]=!0}if(s.extensionsUsed)for(let u=0;u<s.extensionsUsed.length;++u){const f=s.extensionsUsed[u],h=s.extensionsRequired||[];switch(f){case Je.KHR_MATERIALS_UNLIT:o[f]=new mL;break;case Je.KHR_DRACO_MESH_COMPRESSION:o[f]=new DL(s,this.dracoLoader);break;case Je.KHR_TEXTURE_TRANSFORM:o[f]=new NL;break;case Je.KHR_MESH_QUANTIZATION:o[f]=new UL;break;default:h.indexOf(f)>=0&&a[f]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+f+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(i,r)}parseAsync(e,t){const i=this;return new Promise(function(r,s){i.parse(e,t,r,s)})}}function dL(){let n={};return{get:function(e){return n[e]},add:function(e,t){n[e]=t},remove:function(e){delete n[e]},removeAll:function(){n={}}}}const Je={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class pL{constructor(e){this.parser=e,this.name=Je.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let i=0,r=t.length;i<r;i++){const s=t[i];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,i="light:"+e;let r=t.cache.get(i);if(r)return r;const s=t.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let c;const u=new ke(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],Qt);const f=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new uf(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new m1(u),c.distance=f;break;case"spot":c=new d1(u),c.distance=f,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,hi(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),r=Promise.resolve(c),t.cache.add(i,r),r}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,i=this.parser,s=i.json.nodes[e],a=(s.extensions&&s.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return i._getNodeRef(t.cache,a,l)})}}class mL{constructor(){this.name=Je.KHR_MATERIALS_UNLIT}getMaterialType(){return Hi}extendParams(e,t,i){const r=[];e.color=new ke(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const o=s.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Qt),e.opacity=o[3]}s.baseColorTexture!==void 0&&r.push(i.assignTexture(e,"map",s.baseColorTexture,Dt))}return Promise.all(r)}}class gL{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=r.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}}class _L{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Zn}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&s.push(i.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&s.push(i.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(s.push(i.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Ue(a,a)}return Promise.all(s)}}class vL{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_DISPERSION}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Zn}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=r.extensions[this.name];return t.dispersion=s.dispersion!==void 0?s.dispersion:0,Promise.resolve()}}class xL{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Zn}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&s.push(i.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&s.push(i.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(s)}}class yL{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_SHEEN}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Zn}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new ke(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=r.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],Qt)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&s.push(i.assignTexture(t,"sheenColorMap",o.sheenColorTexture,Dt)),o.sheenRoughnessTexture!==void 0&&s.push(i.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(s)}}class ML{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Zn}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&s.push(i.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(s)}}class SL{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_VOLUME}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Zn}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&s.push(i.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new ke().setRGB(a[0],a[1],a[2],Qt),Promise.all(s)}}class bL{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_IOR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Zn}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=r.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class EL{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_SPECULAR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Zn}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&s.push(i.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new ke().setRGB(a[0],a[1],a[2],Qt),o.specularColorTexture!==void 0&&s.push(i.assignTexture(t,"specularColorMap",o.specularColorTexture,Dt)),Promise.all(s)}}class TL{constructor(e){this.parser=e,this.name=Je.EXT_MATERIALS_BUMP}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Zn}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&s.push(i.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(s)}}class AL{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Zn}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&s.push(i.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(s)}}class wL{constructor(e){this.parser=e,this.name=Je.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,i=t.json,r=i.textures[e];if(!r.extensions||!r.extensions[this.name])return null;const s=r.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,o)}}class RL{constructor(e){this.parser=e,this.name=Je.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,i=this.parser,r=i.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=r.images[o.source];let l=i.textureLoader;if(a.uri){const c=i.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return i.loadTextureImage(e,o.source,l);if(r.extensionsRequired&&r.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class CL{constructor(e){this.parser=e,this.name=Je.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,i=this.parser,r=i.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=r.images[o.source];let l=i.textureLoader;if(a.uri){const c=i.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return i.loadTextureImage(e,o.source,l);if(r.extensionsRequired&&r.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class PL{constructor(e){this.name=Je.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){const r=i.extensions[this.name],s=this.parser.getDependency("buffer",r.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(a){const l=r.byteOffset||0,c=r.byteLength||0,u=r.count,f=r.byteStride,h=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,f,h,r.mode,r.filter).then(function(d){return d.buffer}):o.ready.then(function(){const d=new ArrayBuffer(u*f);return o.decodeGltfBuffer(new Uint8Array(d),u,f,h,r.mode,r.filter),d})})}else return null}}class IL{constructor(e){this.name=Je.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;const r=t.meshes[i.mesh];for(const c of r.primitives)if(c.mode!==xn.TRIANGLES&&c.mode!==xn.TRIANGLE_STRIP&&c.mode!==xn.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=i.extensions[this.name].attributes,a=[],l={};for(const c in o)a.push(this.parser.getDependency("accessor",o[c]).then(u=>(l[c]=u,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{const u=c.pop(),f=u.isGroup?u.children:[u],h=c[0].count,d=[];for(const g of f){const _=new je,m=new k,p=new Ki,b=new k(1,1,1),y=new Ww(g.geometry,g.material,h);for(let v=0;v<h;v++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,v),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,v),l.SCALE&&b.fromBufferAttribute(l.SCALE,v),y.setMatrixAt(v,_.compose(m,p,b));for(const v in l)if(v==="_COLOR_0"){const P=l[v];y.instanceColor=new lf(P.array,P.itemSize,P.normalized)}else v!=="TRANSLATION"&&v!=="ROTATION"&&v!=="SCALE"&&g.geometry.setAttribute(v,l[v]);_t.prototype.copy.call(y,g),this.parser.assignFinalMaterial(y),d.push(y)}return u.isGroup?(u.clear(),u.add(...d),u):d[0]}))}}const mv="glTF",Gs=12,Tm={JSON:1313821514,BIN:5130562};class LL{constructor(e){this.name=Je.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Gs),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==mv)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const r=this.header.length-Gs,s=new DataView(e,Gs);let o=0;for(;o<r;){const a=s.getUint32(o,!0);o+=4;const l=s.getUint32(o,!0);if(o+=4,l===Tm.JSON){const c=new Uint8Array(e,Gs+o,a);this.content=i.decode(c)}else if(l===Tm.BIN){const c=Gs+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class DL{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Je.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const i=this.json,r=this.dracoLoader,s=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(const u in o){const f=df[u]||u.toLowerCase();a[f]=o[u]}for(const u in e.attributes){const f=df[u]||u.toLowerCase();if(o[u]!==void 0){const h=i.accessors[e.attributes[u]],d=ss[h.componentType];c[f]=d.name,l[f]=h.normalized===!0}}return t.getDependency("bufferView",s).then(function(u){return new Promise(function(f,h){r.decodeDracoFile(u,function(d){for(const g in d.attributes){const _=d.attributes[g],m=l[g];m!==void 0&&(_.normalized=m)}f(d)},a,c,Qt,h)})})}}class NL{constructor(){this.name=Je.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class UL{constructor(){this.name=Je.KHR_MESH_QUANTIZATION}}class gv extends Oo{constructor(e,t,i,r){super(e,t,i,r)}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r*3+r;for(let o=0;o!==r;o++)t[o]=i[s+o];return t}interpolate_(e,t,i,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,u=r-t,f=(i-t)/u,h=f*f,d=h*f,g=e*c,_=g-c,m=-2*d+3*h,p=d-h,b=1-m,y=p-h+f;for(let v=0;v!==a;v++){const P=o[_+v+a],w=o[_+v+l]*u,C=o[g+v+a],D=o[g+v]*u;s[v]=b*P+y*w+m*C+p*D}return s}}const OL=new Ki;class FL extends gv{interpolate_(e,t,i,r){const s=super.interpolate_(e,t,i,r);return OL.fromArray(s).normalize().toArray(s),s}}const xn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},ss={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Am={9728:Zt,9729:pn,9984:L0,9985:Pa,9986:Xs,9987:mi},wm={33071:ki,33648:$a,10497:fs},Uc={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},df={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Li={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},BL={CUBICSPLINE:void 0,LINEAR:Eo,STEP:bo},Oc={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function kL(n){return n.DefaultMaterial===void 0&&(n.DefaultMaterial=new hh({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:yi})),n.DefaultMaterial}function fr(n,e,t){for(const i in t.extensions)n[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=t.extensions[i])}function hi(n,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(n.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function HL(n,e,t){let i=!1,r=!1,s=!1;for(let c=0,u=e.length;c<u;c++){const f=e[c];if(f.POSITION!==void 0&&(i=!0),f.NORMAL!==void 0&&(r=!0),f.COLOR_0!==void 0&&(s=!0),i&&r&&s)break}if(!i&&!r&&!s)return Promise.resolve(n);const o=[],a=[],l=[];for(let c=0,u=e.length;c<u;c++){const f=e[c];if(i){const h=f.POSITION!==void 0?t.getDependency("accessor",f.POSITION):n.attributes.position;o.push(h)}if(r){const h=f.NORMAL!==void 0?t.getDependency("accessor",f.NORMAL):n.attributes.normal;a.push(h)}if(s){const h=f.COLOR_0!==void 0?t.getDependency("accessor",f.COLOR_0):n.attributes.color;l.push(h)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const u=c[0],f=c[1],h=c[2];return i&&(n.morphAttributes.position=u),r&&(n.morphAttributes.normal=f),s&&(n.morphAttributes.color=h),n.morphTargetsRelative=!0,n})}function zL(n,e){if(n.updateMorphTargets(),e.weights!==void 0)for(let t=0,i=e.weights.length;t<i;t++)n.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(n.morphTargetInfluences.length===t.length){n.morphTargetDictionary={};for(let i=0,r=t.length;i<r;i++)n.morphTargetDictionary[t[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function VL(n){let e;const t=n.extensions&&n.extensions[Je.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Fc(t.attributes):e=n.indices+":"+Fc(n.attributes)+":"+n.mode,n.targets!==void 0)for(let i=0,r=n.targets.length;i<r;i++)e+=":"+Fc(n.targets[i]);return e}function Fc(n){let e="";const t=Object.keys(n).sort();for(let i=0,r=t.length;i<r;i++)e+=t[i]+":"+n[t[i]]+";";return e}function pf(n){switch(n){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function GL(n){return n.search(/\.jpe?g($|\?)/i)>0||n.search(/^data\:image\/jpeg/)===0?"image/jpeg":n.search(/\.webp($|\?)/i)>0||n.search(/^data\:image\/webp/)===0?"image/webp":n.search(/\.ktx2($|\?)/i)>0||n.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const WL=new je;class XL{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new dL,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,r=-1,s=!1,o=-1;if(typeof navigator<"u"){const a=navigator.userAgent;i=/^((?!chrome|android).)*safari/i.test(a)===!0;const l=a.match(/Version\/(\d+)/);r=i&&l?parseInt(l[1],10):-1,s=a.indexOf("Firefox")>-1,o=s?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||i&&r<17||s&&o<98?this.textureLoader=new f1(this.options.manager):this.textureLoader=new _1(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new lv(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const i=this,r=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(o){const a={scene:o[0][r.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:r.asset,parser:i,userData:{}};return fr(s,a,r),hi(a,r),Promise.all(i._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(const l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let r=0,s=t.length;r<s;r++){const o=t[r].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let r=0,s=e.length;r<s;r++){const o=e[r];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(i[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;const r=i.clone(),s=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,u]of o.children.entries())s(u,a.children[c])};return s(i,r),r.name+="_instance_"+e.uses[t]++,r}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){const r=e(t[i]);if(r)return r}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const i=[];for(let r=0;r<t.length;r++){const s=e(t[r]);s&&i.push(s)}return i}getDependency(e,t){const i=e+":"+t;let r=this.cache.get(i);if(!r){switch(e){case"scene":r=this.loadScene(t);break;case"node":r=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":r=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":r=this.loadAccessor(t);break;case"bufferView":r=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":r=this.loadBuffer(t);break;case"material":r=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":r=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":r=this.loadSkin(t);break;case"animation":r=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":r=this.loadCamera(t);break;default:if(r=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!r)throw new Error("Unknown type: "+e);break}this.cache.add(i,r)}return r}getDependencies(e){let t=this.cache.get(e);if(!t){const i=this,r=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(r.map(function(s,o){return i.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Je.KHR_BINARY_GLTF].body);const r=this.options;return new Promise(function(s,o){i.load(ao.resolveURL(t.uri,r.path),s,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){const r=t.byteLength||0,s=t.byteOffset||0;return i.slice(s,s+r)})}loadAccessor(e){const t=this,i=this.json,r=this.json.accessors[e];if(r.bufferView===void 0&&r.sparse===void 0){const o=Uc[r.type],a=ss[r.componentType],l=r.normalized===!0,c=new a(r.count*o);return Promise.resolve(new Jt(c,o,l))}const s=[];return r.bufferView!==void 0?s.push(this.getDependency("bufferView",r.bufferView)):s.push(null),r.sparse!==void 0&&(s.push(this.getDependency("bufferView",r.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",r.sparse.values.bufferView))),Promise.all(s).then(function(o){const a=o[0],l=Uc[r.type],c=ss[r.componentType],u=c.BYTES_PER_ELEMENT,f=u*l,h=r.byteOffset||0,d=r.bufferView!==void 0?i.bufferViews[r.bufferView].byteStride:void 0,g=r.normalized===!0;let _,m;if(d&&d!==f){const p=Math.floor(h/d),b="InterleavedBuffer:"+r.bufferView+":"+r.componentType+":"+p+":"+r.count;let y=t.cache.get(b);y||(_=new c(a,p*d,r.count*d/u),y=new kw(_,d/u),t.cache.add(b,y)),m=new lh(y,l,h%d/u,g)}else a===null?_=new c(r.count*l):_=new c(a,h,r.count*l),m=new Jt(_,l,g);if(r.sparse!==void 0){const p=Uc.SCALAR,b=ss[r.sparse.indices.componentType],y=r.sparse.indices.byteOffset||0,v=r.sparse.values.byteOffset||0,P=new b(o[1],y,r.sparse.count*p),w=new c(o[2],v,r.sparse.count*l);a!==null&&(m=new Jt(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let C=0,D=P.length;C<D;C++){const T=P[C];if(m.setX(T,w[C*l]),l>=2&&m.setY(T,w[C*l+1]),l>=3&&m.setZ(T,w[C*l+2]),l>=4&&m.setW(T,w[C*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){const t=this.json,i=this.options,s=t.textures[e].source,o=t.images[s];let a=this.textureLoader;if(o.uri){const l=i.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,s,a)}loadTextureImage(e,t,i){const r=this,s=this.json,o=s.textures[e],a=s.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,i).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);const h=(s.samplers||{})[o.sampler]||{};return u.magFilter=Am[h.magFilter]||pn,u.minFilter=Am[h.minFilter]||mi,u.wrapS=wm[h.wrapS]||fs,u.wrapT=wm[h.wrapT]||fs,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==Zt&&u.minFilter!==pn,r.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const i=this,r=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(f=>f.clone());const o=r.images[e],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=i.getDependency("bufferView",o.bufferView).then(function(f){c=!0;const h=new Blob([f],{type:o.mimeType});return l=a.createObjectURL(h),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(f){return new Promise(function(h,d){let g=h;t.isImageBitmapLoader===!0&&(g=function(_){const m=new Pt(_);m.needsUpdate=!0,h(m)}),t.load(ao.resolveURL(f,s.path),g,void 0,d)})}).then(function(f){return c===!0&&a.revokeObjectURL(l),hi(f,o),f.userData.mimeType=o.mimeType||GL(o.uri),f}).catch(function(f){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),f});return this.sourceCache[e]=u,u}assignTexture(e,t,i,r){const s=this;return this.getDependency("texture",i.index).then(function(o){if(!o)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(o=o.clone(),o.channel=i.texCoord),s.extensions[Je.KHR_TEXTURE_TRANSFORM]){const a=i.extensions!==void 0?i.extensions[Je.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=s.associations.get(o);o=s.extensions[Je.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),s.associations.set(o,l)}}return r!==void 0&&(o.colorSpace=r),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let i=e.material;const r=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+i.uuid;let l=this.cache.get(a);l||(l=new iv,qn.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,l.sizeAttenuation=!1,this.cache.add(a,l)),i=l}else if(e.isLine){const a="LineBasicMaterial:"+i.uuid;let l=this.cache.get(a);l||(l=new nv,qn.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,this.cache.add(a,l)),i=l}if(r||s||o){let a="ClonedMaterial:"+i.uuid+":";r&&(a+="derivative-tangents:"),s&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=i.clone(),s&&(l.vertexColors=!0),o&&(l.flatShading=!0),r&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(i))),i=l}e.material=i}getMaterialType(){return hh}loadMaterial(e){const t=this,i=this.json,r=this.extensions,s=i.materials[e];let o;const a={},l=s.extensions||{},c=[];if(l[Je.KHR_MATERIALS_UNLIT]){const f=r[Je.KHR_MATERIALS_UNLIT];o=f.getMaterialType(),c.push(f.extendParams(a,s,t))}else{const f=s.pbrMetallicRoughness||{};if(a.color=new ke(1,1,1),a.opacity=1,Array.isArray(f.baseColorFactor)){const h=f.baseColorFactor;a.color.setRGB(h[0],h[1],h[2],Qt),a.opacity=h[3]}f.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",f.baseColorTexture,Dt)),a.metalness=f.metallicFactor!==void 0?f.metallicFactor:1,a.roughness=f.roughnessFactor!==void 0?f.roughnessFactor:1,f.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",f.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",f.metallicRoughnessTexture))),o=this._invokeOne(function(h){return h.getMaterialType&&h.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(h){return h.extendMaterialParams&&h.extendMaterialParams(e,a)})))}s.doubleSided===!0&&(a.side=Xn);const u=s.alphaMode||Oc.OPAQUE;if(u===Oc.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===Oc.MASK&&(a.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&o!==Hi&&(c.push(t.assignTexture(a,"normalMap",s.normalTexture)),a.normalScale=new Ue(1,1),s.normalTexture.scale!==void 0)){const f=s.normalTexture.scale;a.normalScale.set(f,f)}if(s.occlusionTexture!==void 0&&o!==Hi&&(c.push(t.assignTexture(a,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&o!==Hi){const f=s.emissiveFactor;a.emissive=new ke().setRGB(f[0],f[1],f[2],Qt)}return s.emissiveTexture!==void 0&&o!==Hi&&c.push(t.assignTexture(a,"emissiveMap",s.emissiveTexture,Dt)),Promise.all(c).then(function(){const f=new o(a);return s.name&&(f.name=s.name),hi(f,s),t.associations.set(f,{materials:e}),s.extensions&&fr(r,f,s),f})}createUniqueName(e){const t=ft.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,i=this.extensions,r=this.primitiveCache;function s(a){return i[Je.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return Rm(l,a,t)})}const o=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],u=VL(c),f=r[u];if(f)o.push(f.promise);else{let h;c.extensions&&c.extensions[Je.KHR_DRACO_MESH_COMPRESSION]?h=s(c):h=Rm(new Bn,c,t),r[u]={primitive:c,promise:h},o.push(h)}}return Promise.all(o)}loadMesh(e){const t=this,i=this.json,r=this.extensions,s=i.meshes[e],o=s.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const u=o[l].material===void 0?kL(this.cache):this.getDependency("material",o[l].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],f=[];for(let d=0,g=u.length;d<g;d++){const _=u[d],m=o[d];let p;const b=c[d];if(m.mode===xn.TRIANGLES||m.mode===xn.TRIANGLE_STRIP||m.mode===xn.TRIANGLE_FAN||m.mode===void 0)p=s.isSkinnedMesh===!0?new zw(_,b):new on(_,b),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===xn.TRIANGLE_STRIP?p.geometry=Em(p.geometry,V0):m.mode===xn.TRIANGLE_FAN&&(p.geometry=Em(p.geometry,sf));else if(m.mode===xn.LINES)p=new qw(_,b);else if(m.mode===xn.LINE_STRIP)p=new fh(_,b);else if(m.mode===xn.LINE_LOOP)p=new $w(_,b);else if(m.mode===xn.POINTS)p=new Yw(_,b);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&zL(p,s),p.name=t.createUniqueName(s.name||"mesh_"+e),hi(p,s),m.extensions&&fr(r,p,m),t.assignFinalMaterial(p),f.push(p)}for(let d=0,g=f.length;d<g;d++)t.associations.set(f[d],{meshes:e,primitives:d});if(f.length===1)return s.extensions&&fr(r,f[0],s),f[0];const h=new zi;s.extensions&&fr(r,h,s),t.associations.set(h,{meshes:e});for(let d=0,g=f.length;d<g;d++)h.add(f[d]);return h})}loadCamera(e){let t;const i=this.json.cameras[e],r=i[i.type];if(!r){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new Kt(af.radToDeg(r.yfov),r.aspectRatio||1,r.znear||1,r.zfar||2e6):i.type==="orthographic"&&(t=new bl(-r.xmag,r.xmag,r.ymag,-r.ymag,r.znear,r.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),hi(t,i),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],i=[];for(let r=0,s=t.joints.length;r<s;r++)i.push(this._loadNodeShallow(t.joints[r]));return t.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",t.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(r){const s=r.pop(),o=r,a=[],l=[];for(let c=0,u=o.length;c<u;c++){const f=o[c];if(f){a.push(f);const h=new je;s!==null&&h.fromArray(s.array,c*16),l.push(h)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new ch(a,l)})}loadAnimation(e){const t=this.json,i=this,r=t.animations[e],s=r.name?r.name:"animation_"+e,o=[],a=[],l=[],c=[],u=[];for(let f=0,h=r.channels.length;f<h;f++){const d=r.channels[f],g=r.samplers[d.sampler],_=d.target,m=_.node,p=r.parameters!==void 0?r.parameters[g.input]:g.input,b=r.parameters!==void 0?r.parameters[g.output]:g.output;_.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",b)),c.push(g),u.push(_))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(f){const h=f[0],d=f[1],g=f[2],_=f[3],m=f[4],p=[];for(let b=0,y=h.length;b<y;b++){const v=h[b],P=d[b],w=g[b],C=_[b],D=m[b];if(v===void 0)continue;v.updateMatrix&&v.updateMatrix();const T=i._createAnimationTracks(v,P,w,C,D);if(T)for(let M=0;M<T.length;M++)p.push(T[M])}return new s1(s,void 0,p)})}createNodeMesh(e){const t=this.json,i=this,r=t.nodes[e];return r.mesh===void 0?null:i.getDependency("mesh",r.mesh).then(function(s){const o=i._getNodeRef(i.meshCache,r.mesh,s);return r.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=r.weights.length;l<c;l++)a.morphTargetInfluences[l]=r.weights[l]}),o})}loadNode(e){const t=this.json,i=this,r=t.nodes[e],s=i._loadNodeShallow(e),o=[],a=r.children||[];for(let c=0,u=a.length;c<u;c++)o.push(i.getDependency("node",a[c]));const l=r.skin===void 0?Promise.resolve(null):i.getDependency("skin",r.skin);return Promise.all([s,Promise.all(o),l]).then(function(c){const u=c[0],f=c[1],h=c[2];h!==null&&u.traverse(function(d){d.isSkinnedMesh&&d.bind(h,WL)});for(let d=0,g=f.length;d<g;d++)u.add(f[d]);return u})}_loadNodeShallow(e){const t=this.json,i=this.extensions,r=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],o=s.name?r.createUniqueName(s.name):"",a=[],l=r._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),s.camera!==void 0&&a.push(r.getDependency("camera",s.camera).then(function(c){return r._getNodeRef(r.cameraCache,s.camera,c)})),r._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let u;if(s.isBone===!0?u=new ev:c.length>1?u=new zi:c.length===1?u=c[0]:u=new _t,u!==c[0])for(let f=0,h=c.length;f<h;f++)u.add(c[f]);if(s.name&&(u.userData.name=s.name,u.name=o),hi(u,s),s.extensions&&fr(i,u,s),s.matrix!==void 0){const f=new je;f.fromArray(s.matrix),u.applyMatrix4(f)}else s.translation!==void 0&&u.position.fromArray(s.translation),s.rotation!==void 0&&u.quaternion.fromArray(s.rotation),s.scale!==void 0&&u.scale.fromArray(s.scale);return r.associations.has(u)||r.associations.set(u,{}),r.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,i=this.json.scenes[e],r=this,s=new zi;i.name&&(s.name=r.createUniqueName(i.name)),hi(s,i),i.extensions&&fr(t,s,i);const o=i.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(r.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let u=0,f=l.length;u<f;u++)s.add(l[u]);const c=u=>{const f=new Map;for(const[h,d]of r.associations)(h instanceof qn||h instanceof Pt)&&f.set(h,d);return u.traverse(h=>{const d=r.associations.get(h);d!=null&&f.set(h,d)}),f};return r.associations=c(s),s})}_createAnimationTracks(e,t,i,r,s){const o=[],a=e.name?e.name:e.uuid,l=[];Li[s.path]===Li.weights?e.traverse(function(h){h.morphTargetInfluences&&l.push(h.name?h.name:h.uuid)}):l.push(a);let c;switch(Li[s.path]){case Li.weights:c=_s;break;case Li.rotation:c=vs;break;case Li.position:case Li.scale:c=xs;break;default:switch(i.itemSize){case 1:c=_s;break;case 2:case 3:default:c=xs;break}break}const u=r.interpolation!==void 0?BL[r.interpolation]:Eo,f=this._getArrayFromAccessor(i);for(let h=0,d=l.length;h<d;h++){const g=new c(l[h]+"."+Li[s.path],t.array,f,u);r.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const i=pf(t.constructor),r=new Float32Array(t.length);for(let s=0,o=t.length;s<o;s++)r[s]=t[s]*i;t=r}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(i){const r=this instanceof vs?FL:gv;return new r(this.times,this.values,this.getValueSize()/3,i)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function jL(n,e,t){const i=e.attributes,r=new bi;if(i.POSITION!==void 0){const a=t.json.accessors[i.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(r.set(new k(l[0],l[1],l[2]),new k(c[0],c[1],c[2])),a.normalized){const u=pf(ss[a.componentType]);r.min.multiplyScalar(u),r.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const a=new k,l=new k;for(let c=0,u=s.length;c<u;c++){const f=s[c];if(f.POSITION!==void 0){const h=t.json.accessors[f.POSITION],d=h.min,g=h.max;if(d!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(d[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(d[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(d[2]),Math.abs(g[2]))),h.normalized){const _=pf(ss[h.componentType]);l.multiplyScalar(_)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}r.expandByVector(a)}n.boundingBox=r;const o=new Kn;r.getCenter(o.center),o.radius=r.min.distanceTo(r.max)/2,n.boundingSphere=o}function Rm(n,e,t){const i=e.attributes,r=[];function s(o,a){return t.getDependency("accessor",o).then(function(l){n.setAttribute(a,l)})}for(const o in i){const a=df[o]||o.toLowerCase();a in n.attributes||r.push(s(i[o],a))}if(e.indices!==void 0&&!n.index){const o=t.getDependency("accessor",e.indices).then(function(a){n.setIndex(a)});r.push(o)}return Qe.workingColorSpace!==Qt&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Qe.workingColorSpace}" not supported.`),hi(n,e),jL(n,e,t),Promise.all(r).then(function(){return e.targets!==void 0?HL(n,e.targets,t):n})}const _v={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class wr{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const qL=new bl(-1,1,1,-1,0,1);class $L extends Bn{constructor(){super(),this.setAttribute("position",new Un([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Un([0,2,0,0,2,0],2))}}const YL=new $L;class Tl{constructor(e){this._mesh=new on(YL,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,qL)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class KL extends wr{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof zt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=gs.clone(e.uniforms),this.material=new zt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Tl(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Cm extends wr{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){const r=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),s.buffers.stencil.setFunc(r.ALWAYS,o,4294967295),s.buffers.stencil.setClear(a),s.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(r.EQUAL,1,4294967295),s.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),s.buffers.stencil.setLocked(!0)}}class ZL extends wr{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class JL{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const i=e.getSize(new Ue);this._width=i.width,this._height=i.height,t=new Nn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:vi}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new KL(_v),this.copyPass.material.blending=_i,this.clock=new cv}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let i=!1;for(let r=0,s=this.passes.length;r<s;r++){const o=this.passes[r];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),o.needsSwap){if(i){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Cm!==void 0&&(o instanceof Cm?i=!0:o instanceof ZL&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new Ue);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const i=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(i,r),this.renderTarget2.setSize(i,r);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(i,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class QL extends wr{constructor(e,t,i=null,r=null,s=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=r,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new ke}render(e,t,i){const r=e.autoClear;e.autoClear=!1;let s,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=r}}const Bc={uniforms:{tDiffuse:{value:null},shape:{value:1},radius:{value:4},rotateR:{value:Math.PI/12*1},rotateG:{value:Math.PI/12*2},rotateB:{value:Math.PI/12*3},scatter:{value:0},width:{value:1},height:{value:1},blending:{value:1},blendingMode:{value:1},greyscale:{value:!1},disable:{value:!1}},vertexShader:`

		varying vec2 vUV;

		void main() {

			vUV = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);

		}`,fragmentShader:`

		#define SQRT2_MINUS_ONE 0.41421356
		#define SQRT2_HALF_MINUS_ONE 0.20710678
		#define PI2 6.28318531
		#define SHAPE_DOT 1
		#define SHAPE_ELLIPSE 2
		#define SHAPE_LINE 3
		#define SHAPE_SQUARE 4
		#define BLENDING_LINEAR 1
		#define BLENDING_MULTIPLY 2
		#define BLENDING_ADD 3
		#define BLENDING_LIGHTER 4
		#define BLENDING_DARKER 5
		uniform sampler2D tDiffuse;
		uniform float radius;
		uniform float rotateR;
		uniform float rotateG;
		uniform float rotateB;
		uniform float scatter;
		uniform float width;
		uniform float height;
		uniform int shape;
		uniform bool disable;
		uniform float blending;
		uniform int blendingMode;
		varying vec2 vUV;
		uniform bool greyscale;
		const int samples = 8;

		float blend( float a, float b, float t ) {

		// linear blend
			return a * ( 1.0 - t ) + b * t;

		}

		float hypot( float x, float y ) {

		// vector magnitude
			return sqrt( x * x + y * y );

		}

		float rand( vec2 seed ){

		// get pseudo-random number
			return fract( sin( dot( seed.xy, vec2( 12.9898, 78.233 ) ) ) * 43758.5453 );

		}

		float distanceToDotRadius( float channel, vec2 coord, vec2 normal, vec2 p, float angle, float rad_max ) {

		// apply shape-specific transforms
			float dist = hypot( coord.x - p.x, coord.y - p.y );
			float rad = channel;

			if ( shape == SHAPE_DOT ) {

				rad = pow( abs( rad ), 1.125 ) * rad_max;

			} else if ( shape == SHAPE_ELLIPSE ) {

				rad = pow( abs( rad ), 1.125 ) * rad_max;

				if ( dist != 0.0 ) {
					float dot_p = abs( ( p.x - coord.x ) / dist * normal.x + ( p.y - coord.y ) / dist * normal.y );
					dist = ( dist * ( 1.0 - SQRT2_HALF_MINUS_ONE ) ) + dot_p * dist * SQRT2_MINUS_ONE;
				}

			} else if ( shape == SHAPE_LINE ) {

				rad = pow( abs( rad ), 1.5) * rad_max;
				float dot_p = ( p.x - coord.x ) * normal.x + ( p.y - coord.y ) * normal.y;
				dist = hypot( normal.x * dot_p, normal.y * dot_p );

			} else if ( shape == SHAPE_SQUARE ) {

				float theta = atan( p.y - coord.y, p.x - coord.x ) - angle;
				float sin_t = abs( sin( theta ) );
				float cos_t = abs( cos( theta ) );
				rad = pow( abs( rad ), 1.4 );
				rad = rad_max * ( rad + ( ( sin_t > cos_t ) ? rad - sin_t * rad : rad - cos_t * rad ) );

			}

			return rad - dist;

		}

		struct Cell {

		// grid sample positions
			vec2 normal;
			vec2 p1;
			vec2 p2;
			vec2 p3;
			vec2 p4;
			float samp2;
			float samp1;
			float samp3;
			float samp4;

		};

		vec4 getSample( vec2 point ) {

		// multi-sampled point
			vec4 tex = texture2D( tDiffuse, vec2( point.x / width, point.y / height ) );
			float base = rand( vec2( floor( point.x ), floor( point.y ) ) ) * PI2;
			float step = PI2 / float( samples );
			float dist = radius * 0.66;

			for ( int i = 0; i < samples; ++i ) {

				float r = base + step * float( i );
				vec2 coord = point + vec2( cos( r ) * dist, sin( r ) * dist );
				tex += texture2D( tDiffuse, vec2( coord.x / width, coord.y / height ) );

			}

			tex /= float( samples ) + 1.0;
			return tex;

		}

		float getDotColour( Cell c, vec2 p, int channel, float angle, float aa ) {

		// get colour for given point
			float dist_c_1, dist_c_2, dist_c_3, dist_c_4, res;

			if ( channel == 0 ) {

				c.samp1 = getSample( c.p1 ).r;
				c.samp2 = getSample( c.p2 ).r;
				c.samp3 = getSample( c.p3 ).r;
				c.samp4 = getSample( c.p4 ).r;

			} else if (channel == 1) {

				c.samp1 = getSample( c.p1 ).g;
				c.samp2 = getSample( c.p2 ).g;
				c.samp3 = getSample( c.p3 ).g;
				c.samp4 = getSample( c.p4 ).g;

			} else {

				c.samp1 = getSample( c.p1 ).b;
				c.samp3 = getSample( c.p3 ).b;
				c.samp2 = getSample( c.p2 ).b;
				c.samp4 = getSample( c.p4 ).b;

			}

			dist_c_1 = distanceToDotRadius( c.samp1, c.p1, c.normal, p, angle, radius );
			dist_c_2 = distanceToDotRadius( c.samp2, c.p2, c.normal, p, angle, radius );
			dist_c_3 = distanceToDotRadius( c.samp3, c.p3, c.normal, p, angle, radius );
			dist_c_4 = distanceToDotRadius( c.samp4, c.p4, c.normal, p, angle, radius );
			res = ( dist_c_1 > 0.0 ) ? clamp( dist_c_1 / aa, 0.0, 1.0 ) : 0.0;
			res += ( dist_c_2 > 0.0 ) ? clamp( dist_c_2 / aa, 0.0, 1.0 ) : 0.0;
			res += ( dist_c_3 > 0.0 ) ? clamp( dist_c_3 / aa, 0.0, 1.0 ) : 0.0;
			res += ( dist_c_4 > 0.0 ) ? clamp( dist_c_4 / aa, 0.0, 1.0 ) : 0.0;
			res = clamp( res, 0.0, 1.0 );

			return res;

		}

		Cell getReferenceCell( vec2 p, vec2 origin, float grid_angle, float step ) {

		// get containing cell
			Cell c;

		// calc grid
			vec2 n = vec2( cos( grid_angle ), sin( grid_angle ) );
			float threshold = step * 0.5;
			float dot_normal = n.x * ( p.x - origin.x ) + n.y * ( p.y - origin.y );
			float dot_line = -n.y * ( p.x - origin.x ) + n.x * ( p.y - origin.y );
			vec2 offset = vec2( n.x * dot_normal, n.y * dot_normal );
			float offset_normal = mod( hypot( offset.x, offset.y ), step );
			float normal_dir = ( dot_normal < 0.0 ) ? 1.0 : -1.0;
			float normal_scale = ( ( offset_normal < threshold ) ? -offset_normal : step - offset_normal ) * normal_dir;
			float offset_line = mod( hypot( ( p.x - offset.x ) - origin.x, ( p.y - offset.y ) - origin.y ), step );
			float line_dir = ( dot_line < 0.0 ) ? 1.0 : -1.0;
			float line_scale = ( ( offset_line < threshold ) ? -offset_line : step - offset_line ) * line_dir;

		// get closest corner
			c.normal = n;
			c.p1.x = p.x - n.x * normal_scale + n.y * line_scale;
			c.p1.y = p.y - n.y * normal_scale - n.x * line_scale;

		// scatter
			if ( scatter != 0.0 ) {

				float off_mag = scatter * threshold * 0.5;
				float off_angle = rand( vec2( floor( c.p1.x ), floor( c.p1.y ) ) ) * PI2;
				c.p1.x += cos( off_angle ) * off_mag;
				c.p1.y += sin( off_angle ) * off_mag;

			}

		// find corners
			float normal_step = normal_dir * ( ( offset_normal < threshold ) ? step : -step );
			float line_step = line_dir * ( ( offset_line < threshold ) ? step : -step );
			c.p2.x = c.p1.x - n.x * normal_step;
			c.p2.y = c.p1.y - n.y * normal_step;
			c.p3.x = c.p1.x + n.y * line_step;
			c.p3.y = c.p1.y - n.x * line_step;
			c.p4.x = c.p1.x - n.x * normal_step + n.y * line_step;
			c.p4.y = c.p1.y - n.y * normal_step - n.x * line_step;

			return c;

		}

		float blendColour( float a, float b, float t ) {

		// blend colours
			if ( blendingMode == BLENDING_LINEAR ) {
				return blend( a, b, 1.0 - t );
			} else if ( blendingMode == BLENDING_ADD ) {
				return blend( a, min( 1.0, a + b ), t );
			} else if ( blendingMode == BLENDING_MULTIPLY ) {
				return blend( a, max( 0.0, a * b ), t );
			} else if ( blendingMode == BLENDING_LIGHTER ) {
				return blend( a, max( a, b ), t );
			} else if ( blendingMode == BLENDING_DARKER ) {
				return blend( a, min( a, b ), t );
			} else {
				return blend( a, b, 1.0 - t );
			}

		}

		void main() {

			if ( ! disable ) {

		// setup
				vec2 p = vec2( vUV.x * width, vUV.y * height );
				vec2 origin = vec2( 0, 0 );
				float aa = ( radius < 2.5 ) ? radius * 0.5 : 1.25;

		// get channel samples
				Cell cell_r = getReferenceCell( p, origin, rotateR, radius );
				Cell cell_g = getReferenceCell( p, origin, rotateG, radius );
				Cell cell_b = getReferenceCell( p, origin, rotateB, radius );
				float r = getDotColour( cell_r, p, 0, rotateR, aa );
				float g = getDotColour( cell_g, p, 1, rotateG, aa );
				float b = getDotColour( cell_b, p, 2, rotateB, aa );

		// blend with original
				vec4 colour = texture2D( tDiffuse, vUV );
				r = blendColour( r, colour.r, blending );
				g = blendColour( g, colour.g, blending );
				b = blendColour( b, colour.b, blending );

				if ( greyscale ) {
					r = g = b = (r + b + g) / 3.0;
				}

				gl_FragColor = vec4( r, g, b, 1.0 );

			} else {

				gl_FragColor = texture2D( tDiffuse, vUV );

			}

		}`};class eD extends wr{constructor(e,t,i){super(),this.uniforms=gs.clone(Bc.uniforms),this.material=new zt({uniforms:this.uniforms,fragmentShader:Bc.fragmentShader,vertexShader:Bc.vertexShader}),this.uniforms.width.value=e,this.uniforms.height.value=t;for(const r in i)i.hasOwnProperty(r)&&this.uniforms.hasOwnProperty(r)&&(this.uniforms[r].value=i[r]);this.fsQuad=new Tl(this.material)}render(e,t,i){this.material.uniforms.tDiffuse.value=i.texture,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(),this.fsQuad.render(e))}setSize(e,t){this.uniforms.width.value=e,this.uniforms.height.value=t}dispose(){this.material.dispose(),this.fsQuad.dispose()}}const tD={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new ke(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class ys extends wr{constructor(e,t,i,r){super(),this.strength=t!==void 0?t:1,this.radius=i,this.threshold=r,this.resolution=e!==void 0?new Ue(e.x,e.y):new Ue(256,256),this.clearColor=new ke(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Nn(s,o,{type:vi}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let f=0;f<this.nMips;f++){const h=new Nn(s,o,{type:vi});h.texture.name="UnrealBloomPass.h"+f,h.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(h);const d=new Nn(s,o,{type:vi});d.texture.name="UnrealBloomPass.v"+f,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),s=Math.round(s/2),o=Math.round(o/2)}const a=tD;this.highPassUniforms=gs.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=r,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new zt({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let f=0;f<this.nMips;f++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[f])),this.separableBlurMaterials[f].uniforms.invSize.value=new Ue(1/s,1/o),s=Math.round(s/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new k(1,1,1),new k(1,1,1),new k(1,1,1),new k(1,1,1),new k(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const u=_v;this.copyUniforms=gs.clone(u.uniforms),this.blendMaterial=new zt({uniforms:this.copyUniforms,vertexShader:u.vertexShader,fragmentShader:u.fragmentShader,blending:yu,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new ke,this.oldClearAlpha=1,this.basic=new Hi,this.fsQuad=new Tl(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let i=Math.round(e/2),r=Math.round(t/2);this.renderTargetBright.setSize(i,r);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(i,r),this.renderTargetsVertical[s].setSize(i,r),this.separableBlurMaterials[s].uniforms.invSize.value=new Ue(1/i,1/r),i=Math.round(i/2),r=Math.round(r/2)}render(e,t,i,r,s){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),s&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=i.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=ys.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=ys.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(i),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}getSeperableBlurMaterial(e){const t=[];for(let i=0;i<e;i++)t.push(.39894*Math.exp(-.5*i*i/(e*e))/e);return new zt({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new Ue(.5,.5)},direction:{value:new Ue(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(e){return new zt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}ys.BlurDirectionX=new Ue(1,0);ys.BlurDirectionY=new Ue(0,1);const nD={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
	
		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class iD extends wr{constructor(){super();const e=nD;this.uniforms=gs.clone(e.uniforms),this.material=new Kw({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new Tl(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},Qe.getTransfer(this._outputColorSpace)===ct&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===T0?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===A0?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===w0?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===R0?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===C0?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===P0&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}const rD={id:"mascot-container"},Pm=.1,Im=2,xa=.5,Lm=12,sD=Yn({__name:"Spes3D",setup(n){var e=window.innerWidth,t=window.innerHeight,i=new Ue,r=new k(0,-1.25,1);const s={shape:1,radius:9*Math.min(e,t)/1200,rotateR:Math.PI/12,rotateB:Math.PI/12*2,rotateG:Math.PI/12*3,scatter:.5,blending:1,blendingMode:1,greyscale:!1,disable:!1};let o=0,a=1/12;const l=new Bw,c=new Kt(75,e/t,.1,1e3),u=new fL({alpha:!0}),f=new cv;u.setSize(e,t),c.position.z=5;const h=new R1,d=new Ue,g=new k,_=new Ue(0,0),m=new Ue(0,0),p=new hL;var b=new zi;p.load("/spes3d.glb",function(U){b=U.scene,M(window.innerWidth),l.add(b)},void 0,function(U){console.error(U)});const y=new uf(16772829,2),v=new uf(16768426,.1);y.position.set(0,0,1),v.position.set(0,0,-1),l.add(y),l.add(v);const P=new JL(u),w=new QL(l,c),C=new eD(e,t,s),D=new ys(new Ue(e,t),.9,1,.3),T=new iD;P.addPass(w),P.addPass(D),P.addPass(C),P.addPass(T);function M(U){e<500?b.scale.set(U/500,U/500,U/500):b.scale.set(1,1,1)}function L(U,O){let W=1,Q=1;e<800&&(W=2),t<800&&(Q=2),i.set(W*O(U*Im,0),Q*O(0,U*Im)),h.setFromCamera(i,c),g.copy(h.ray.origin).add(h.ray.direction.clone().multiplyScalar(5)),r.copy(g)}if(matchMedia("(pointer:fine)").matches)document.addEventListener("mousemove",U=>{d.set(U.clientX/e*2-1,-(U.clientY/t)*2+1),h.setFromCamera(d,c),g.copy(h.ray.origin).add(h.ray.direction.clone().multiplyScalar(5)),r.copy(g)},!1);else{let U=0;const O=S0.makeNoise2D();setInterval(()=>{L(U,O),U+=12/1e3},1e3/12)}return Ar(()=>{const U=document.getElementById("mascot-container");if(U==null){console.log("No mascot-container");return}U.appendChild(u.domElement),av.onLoad=function(){U.style.filter="opacity(100)"},window.addEventListener("resize",()=>{e=U.getBoundingClientRect().width,t=U.getBoundingClientRect().height,M(window.innerWidth),C.uniforms.radius.value=9*Math.min(e,t)/1200,D.resolution.set(e,t),u.setSize(e,t),P.setSize(e,t),c.aspect=e/t,c.updateProjectionMatrix()}),f.start();function O(){const W=f.getDelta();o+=W;const Q=new Ue(r.x*Pm,r.y*Pm),j=new Ue((Q.x-_.x)*Lm,(Q.y-_.y)*Lm);m.x+=j.x*W,m.y+=j.y*W,m.multiplyScalar(Math.exp(-8*W)),_.x+=m.x*W,_.y+=m.y*W,_.x=af.clamp(_.x,-xa,xa),_.y=af.clamp(_.y,-xa,xa),b.rotation.x=_.y,b.rotation.y=-_.x,b.rotation.z-=W*1,y.position.set(r.x,r.y,r.z+1),o>a&&(P.render(),C.uniforms.scatter.value=Math.random()*.5+.25,o=o%a)}u.setAnimationLoop(O)}),(U,O)=>(Bt(),hn("div",rD))}}),oD=Do(sD,[["__scopeId","data-v-28433e94"]]),aD={id:"container"},Dm=1,lD=1,cD=1.5,uD=.7,Xr=.5,fD=12,hD=Yn({__name:"MetaBalls",setup(n){let e=l("#ff00ff"),t=255,i=.5,r=.1;r=1;let s=`filter: blur(${r}em);`;s=`filter: blur(${r}em) brightness(calc(100% + 50%)) contrast(1000%);`;const o=S0.makeNoise3D();function a(f){return{x:o(f,0,0),y:o(0,f,0),z:o(0,0,f)}}function l(f){f=f.replace("#","");const h=parseInt(f.slice(0,2),16),d=parseInt(f.slice(2,4),16),g=parseInt(f.slice(4,6),16);return[h,d,g]}function c(f,h,d){return typeof h=="number"?d.push({radius:f*h,noiseOffset:Dm*(2*Math.random()-1)}):h.forEach(g=>{d.push({radius:f*g,noiseOffset:Dm*(2*Math.random()-1)})}),d}function u(f,h,d,g,_){const m=g;if(f){const p=f.createRadialGradient(m+h,m+d,0,m+h,m+d,g);p.addColorStop(0,`rgba(${_[0]}, ${_[1]}, ${_[2]}, ${_[3]})`),p.addColorStop(1,`rgba(${_[0]}, ${_[1]}, ${_[2]}, 0)`),f.fillStyle=p,f.fillRect(h,d,g*2,g*2)}}return Ar(()=>{const f=document.getElementById("metaballs-canvas");if(f==null){console.log("No metaballs-canvas");return}let h;window.addEventListener("resize",()=>{clearTimeout(h),h=setTimeout(()=>{f.width=f.getBoundingClientRect().width,f.height=f.getBoundingClientRect().height,d=Math.max(800,f.width)},100)}),f.width=f.getBoundingClientRect().width,f.height=f.getBoundingClientRect().height;let d=Math.max(800,f.width);const g=f.getContext("2d",{willReadFrequently:!0});g&&(g.globalCompositeOperation="lighter");var _=[];_=c(d,[.25,.125,.125,.0625,.0625,.0625,.05,.05,.05,.05,.05],_);let m,p,b,y=l(getComputedStyle(document.documentElement).getPropertyValue("--accent-color")),v;const P=[1,.9,.7];let w="";function C(){const O=getComputedStyle(document.documentElement).getPropertyValue("--accent-color");O!==w&&(e=l(O),w=O)}const D=[0,0,0,0];function T(O){if(g==null){console.log("No metaballs-canvas context");return}g.clearRect(0,0,f.width,f.height),C(),_.forEach(ee=>{P.forEach(z=>{const de=uD*ee.radius/100;b=a(O/de+ee.noiseOffset-lD*(1-z/4)),v=cD*.5*(b.z+1.1),v<.5&&(v=.5),m=f.width/2-ee.radius/2+b.x*d/8,p=f.height/2-ee.radius/2+b.y*d/8,z==P[0]&&(y=[Xr*Math.min(Math.max(e[0]+b.x*t,0),255)+(1-Xr)*y[0],Xr*Math.min(Math.max(e[1]+b.y*t,0),255)+(1-Xr)*y[1],Xr*Math.min(Math.max(e[2]+b.z*t,0),255)+(1-Xr)*y[2]]),D[0]=y[0],D[1]=y[1],D[2]=y[2],D[3]=z==P[0]?z:z/2,u(g,m,p,ee.radius*v,D)})});const W=g.getImageData(0,0,f.width,f.height),Q=new Uint32Array(W.data.buffer),j=i*255;for(let ee=0;ee<Q.length;ee++){const z=Q[ee];z>>>24<j&&(Q[ee]=z&4278190080)}g.putImageData(W,0,0)}const M=Date.now();let L=M;function U(){const O=Date.now();O-L>=1e3/fD&&(T((O-M)/1e4),L=O),requestAnimationFrame(U)}U()}),(f,h)=>(Bt(),hn("div",aD,[Fe("canvas",{id:"metaballs-canvas",style:Ao(Tt(s))},null,4)]))}}),dD=Do(hD,[["__scopeId","data-v-ed658696"]]),kc=[{id:0,title:"Product Design",projects:[{id:0,title:"Home Server",slug:"home-server",category:"Product Design",date:"2025",description:"Proxmox server",resources:["/product_design/de_1.jpg","/product_design/de_2.jpg","/product_design/de_3.jpg"]},{id:1,title:"TTRPG Dice Trays",slug:"ttrpg-dice-trays",category:"Product Design",date:"2024",description:"For D&D and stuff",resources:["/product_design/de_4.jpg"]}]},{id:1,title:"Graphic Design",projects:[{id:2,title:"Poster",slug:"poster",category:"Graphic Design",date:"2025",description:"poster.",resources:["/graphic_design/digital_light.png","/graphic_design/digital_dark.png"]},{id:3,title:"Poster Alt",slug:"poster-alt",category:"Graphic Design",date:"2025",description:"poster alt.",resources:["/graphic_design/digital_dark_alt.png","/graphic_design/digital_light_alt.png"]}]},{id:2,title:"Visual Art",projects:[{id:4,title:"Comic",slug:"comic",category:"Visual Art",date:"2026",description:"comic.",resources:["/art/page_1.jpg"]},{id:5,title:"Time Warp",slug:"time-warp",category:"Visual Art",date:"2023",description:"warp",resources:["/art/time_warp.jpg"]}]}],pD={id:"project-gallery"},mD={key:0,class:"project-page"},gD={style:{overflow:"auto","z-index":"1"}},_D={style:{display:"flex","padding-left":"1em","padding-top":"1em"}},vD={class:"overlay-section",style:{width:"fit-content"}},xD={style:{"padding-top":"1.1em"}},yD={style:{"padding-top":"1.1em","padding-right":"1em","flex-grow":"1","text-align":"end"}},MD={class:"resource-grid"},SD=["href"],bD=["src","alt"],ED={style:{"flex-grow":"1","text-align":"end",padding:"2em","padding-top":"1em"}},TD={id:"page-number"},AD={key:1},wD={class:"category"},RD={class:"overlay-section"},CD=["id"],PD=["id"],ID=["id","onClick"],LD=["id"],DD=["id","src","alt"],ND=["id"],UD=Yn({__name:"ProjectGallery",setup(n){const e=s0(),t=eT(),i=kc.flatMap(c=>c.projects),r=Et(()=>{const c=e.params.slug;return c?i.find(u=>u.slug===c)??null:null}),s=i.length?i[i.length-1].id:0;function o(c){var u;t.push(`/#/${c.slug}`),(u=document.getElementById("projects"))==null||u.scrollIntoView({behavior:"smooth"})}function a(){var c;t.push("/"),(c=document.getElementById("projects"))==null||c.scrollIntoView({behavior:"smooth"})}function l(c=!0){if(r.value==null)return;const u=c?r.value.id-1:r.value.id+1;u<0?o(i[i.length-1]):u>i.length-1?o(i[0]):o(i[u])}return Ar(()=>{for(const c of kc){const u=document.getElementById(`category-${c.id}`),f=document.getElementById(`next-${c.id}`),h=document.getElementById(`prev-${c.id}`);f&&h&&u&&(f.onclick=()=>{u.scrollBy({left:u.clientWidth,behavior:"smooth"})},h.onclick=()=>{u.scrollBy({left:-u.clientWidth,behavior:"smooth"})})}}),(c,u)=>(Bt(),hn("div",pD,[r.value!==null?(Bt(),hn("div",mD,[Fe("p",{onClick:u[0]||(u[0]=f=>l(!0)),id:"prev",class:"prev"},"❮"),Fe("p",{onClick:u[1]||(u[1]=f=>l(!1)),id:"next",class:"next"},"❯"),Fe("div",gD,[Fe("p",{onClick:a,class:"x-button"},"x"),Fe("div",_D,[Fe("p",vD,ci(r.value.title),1),Fe("p",xD,ci(r.value.category),1),Fe("p",yD,ci(r.value.date),1)]),Fe("div",MD,[(Bt(!0),hn(nn,null,Ol(r.value.resources,(f,h)=>(Bt(),hn("a",{href:`/projects${f}`,target:"_blank",rel:"noopener noreferrer"},[Fe("img",{src:`/projects${f}`,alt:`${r.value.title}-${h}`},null,8,bD)],8,SD))),256))]),Fe("p",ED,ci(r.value.description),1)]),Fe("p",TD,ci(r.value.id+1)+"/"+ci(Tt(s)+1),1)])):(Bt(),hn("div",AD,[(Bt(!0),hn(nn,null,Ol(Tt(kc),f=>(Bt(),hn("div",wD,[Fe("p",RD,ci(f.title),1),Fe("p",{id:`prev-${f.id}`,class:"prev"},"❮",8,CD),Fe("div",{id:`category-${f.id}`,class:"row"},[(Bt(!0),hn(nn,null,Ol(f.projects,h=>(Bt(),hn("div",{id:`project-${h.id}`,class:"project",onClick:d=>o(h)},[Fe("p",{id:`title-${h.id}`,class:"project-title overlay-section"},ci(h.title),9,LD),Fe("img",{id:`thumbnail-${h.id}`,src:`/projects${h.resources[0]}`,alt:h.title,class:"project-thumbnail"},null,8,DD)],8,ID))),256))],8,PD),Fe("p",{id:`next-${f.id}`,class:"next"},"❯",8,ND)]))),256))]))]))}}),OD=Do(UD,[["__scopeId","data-v-15432a3d"]]),FD={id:"home-page"},BD={id:"metaball-container"},kD={class:"section",id:"landing-page",style:{height:"100vh"}},HD={style:{width:"calc(100% - 2em)",display:"flex","justify-content":"end",padding:"1em"}},zD={style:{display:"flex",flex:"1 1 auto","justify-content":"center"}},VD={style:{display:"flex","flex-direction":"column","align-items":"center","justify-content":"center","margin-top":"30vh"}},GD={id:"mascot-container"},WD={class:"section",id:"projects",style:{width:"100%","padding-bottom":"5em"}},XD={style:{width:"100%",display:"flex","flex-direction":"column","align-items":"center","justify-content":"center","padding-top":"1em"}},jD={style:{width:"100%","max-width":"1168px"}},qD={class:"section",id:"contact",style:{width:"calc(100% - 6em)",background:"var(--fg-color)",color:"var(--bg-color)",padding:"3em"}},Nm=Yn({__name:"HomePage",setup(n){const e=s0(),t=["Designer","Maker","Software Developer","Clothing Designer","Painter","Video Editor","Actor/Director","Toy Designer","Engineer","Hobbiest","Graphic Designer","Homelabber","Musician"];let i,r;const s=Ct(!1),o=Ct(!1),a=Ct(!1),l=Ct(500),c=Ct(window.innerWidth);function u(){let d=document.getElementById("logo");if(d==null){console.log("No logo");return}d.style.transform="rotate(15deg) translateY(-1em)"}function f(){let d=document.getElementById("logo");if(d==null){console.log("No logo");return}d.style.transform="rotate(0deg) translateY(-1em)"}function h(d,g,_,m){if(window.scrollY<d)return _;if(window.scrollY<g){const p=(window.scrollY-d)/(g-d)*(m[0]-_[0])+_[0],b=(window.scrollY-d)/(g-d)*(m[1]-_[1])+_[1];return[p,b]}else return m}return Ar(async()=>{var C;let d=document.getElementById("role");const g=document.getElementById("landing-page"),_=document.getElementById("noise-container"),m=document.getElementById("metaball-container"),p=document.getElementById("mascot-container"),b=document.getElementById("arrow-icon"),y=document.getElementById("about-header"),v=document.getElementById("about-text-1"),P=document.getElementById("about-text-2");window.addEventListener("scroll",w,{passive:!0});function w(){if(c.value=window.innerWidth,window.scrollY>document.body.scrollHeight/2?(m&&(m.style.opacity="1"),a.value=!0,document.documentElement.style.setProperty("--fg-color","#110707"),document.documentElement.style.setProperty("--bg-color","#fbf5f5"),document.documentElement.style.setProperty("--accent-color","#8cc77c")):g&&window.scrollY<g.getBoundingClientRect().height/2?(_&&(_.style.opacity="0"),m&&(m.style.opacity="0"),a.value=!1,document.documentElement.style.setProperty("--fg-color","#ffffff"),document.documentElement.style.setProperty("--bg-color","#842806"),document.documentElement.style.setProperty("--accent-color","#f5be09")):(_&&(_.style.opacity="1"),m&&(m.style.opacity="1"),a.value=!0,document.documentElement.style.setProperty("--fg-color","#ffffff"),document.documentElement.style.setProperty("--bg-color","#020202"),document.documentElement.style.setProperty("--accent-color","#ff00ff")),i=-window.scrollY*3/4,r=-window.scrollY*1/4,p&&(p.style.transform=`translateY(${r}px)`),b&&(b.style.transform=`translateY(${i}px)`),m){const D=m.getBoundingClientRect();m.style.transform=`translateY(${h(0,document.body.scrollHeight+window.innerHeight,[0,0],[0,-D.height])[1]}px)`}if(y){const D=y.getBoundingClientRect();y.style.transform=`translateX(${h(D.top-window.innerHeight/2,D.top,[-D.width-36,0],[0,0])[0]}px)`}if(v){const D=v.getBoundingClientRect();v.style.transform=`translateX(${h(D.top-window.innerHeight/2,D.top,[D.width,0],[0,0])[0]}px)`}if(P){const D=P.getBoundingClientRect();P.style.transform=`translateX(${h(D.top-window.innerHeight/2,D.top,[-D.width,0],[0,0])[0]}px)`}}setInterval(()=>{d&&!s.value&&(d.textContent=t[Math.floor(Math.random()*t.length)])},1e3/6),await ol(),e.path!=="/"&&((C=document.getElementById("projects"))==null||C.scrollIntoView({behavior:"smooth"}))}),(d,g)=>{const _=Ih("motion-fade-visible"),m=Ih("motion-slide-visible-once-bottom");return Bt(),hn("div",FD,[yt(Tt(xu),{id:"navBarIcon",icon:"streamline:interface-setting-menu-1-button-parallel-horizontal-lines-menu-navigation-three-hamburger",width:"2em",class:"icon",style:{flex:"0 1 auto",display:"flex",transform:"rotate(45deg)"},onClick:g[0]||(g[0]=p=>o.value=!0)}),yt(Ey,{name:"slide-in-from-left"},{default:mg(()=>[o.value?(Bt(),Pf(cA,{key:0,onClose:g[1]||(g[1]=p=>o.value=!1)})):ly("",!0)]),_:1}),g[7]||(g[7]=Fe("div",{id:"noise-container"},[Fe("div",{id:"noise-texture"})],-1)),Fe("div",BD,[Ch(yt(dD,{duration:l.value*2},null,8,["duration"]),[[_]])]),Fe("div",kD,[Fe("div",HD,[Fe("div",zD,[Fe("img",{id:"logo",src:Sd,width:"64px",onMouseover:u,onMouseout:f},null,32)])]),Fe("div",VD,[g[4]||(g[4]=Fe("p",{class:"overlay-header"}," Hello, my name is JC and I am a ",-1)),Fe("p",{id:"role",class:"overlay-header",style:{"font-style":"italic","text-align":"right"},onMouseover:g[2]||(g[2]=()=>{s.value=!0}),onMouseout:g[3]||(g[3]=()=>{s.value=!1})}," Designer ",32)]),Ch(yt(Tt(xu),{duration:l.value,icon:"material-symbols:arrow-circle-down",id:"arrow-icon",class:"overlay-header",style:{width:"1em",position:"absolute",bottom:"1.5em",right:"20%"}},null,8,["duration"]),[[m]]),Fe("div",GD,[yt(oD)])]),g[8]||(g[8]=ay('<div class="section" id="about" style="width:100%;padding-bottom:5em;"><div style="width:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;padding-top:3em;"><div class="overlay-header" style="display:flex;justify-content:start;"><p id="about-header"> About </p></div><div class="overlay-section" style="display:flex;flex-direction:column;align-items:end;padding-top:1em;"><p id="about-text-1" style="text-align:right;max-width:30em;"> JC Redmond III is a multidisciplinary artist and designer with a focus in <i>product design &amp; prototyping</i>, <i>software develoment</i>, <i>painting &amp; drawing</i>, <i>music</i>, and <i>film</i> - particullarly when they align with one of arguablly too many hobbies. <br><br><i>He is currently based in Glasgow, Scotland but is originally from Atlanta, Ga.</i></p></div><br><div class="overlay-section" style="display:flex;flex-direction:column;align-items:start;"><p id="about-text-2" style="max-width:25em;"> In 2024 he graduated from the University of Glasgow with a <i>First Class BEng Mechatronics</i> degree, along with awards from the <i>Hammermen of Glasgow</i> and the <i>IMechE</i>, and is currently working as a <i>Sr. R&amp;D Engineer</i> at Synopsys. </p></div></div></div>',1)),Fe("div",WD,[Fe("div",XD,[g[5]||(g[5]=Fe("div",{class:"overlay-header",style:{display:"flex","justify-content":"center","padding-bottom":"0.5em"}},[Fe("p",{id:"projects-header"}," Projects ")],-1)),Fe("div",jD,[yt(OD)])])]),Fe("div",qD,[Fe("div",{class:"overlay-header",style:Ao([{"max-width":"100%",display:"flex","justify-content":"center","align-items":"center","font-size":"1.5em",gap:"1em","text-align":"center"},`flex-direction: ${c.value<700?"column":"row"}; `])},g[6]||(g[6]=[Fe("img",{src:Sd,width:"32px"},null,-1),Fe("p",null," email: sanctusspes@gmail.com ",-1),Fe("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/jcr3/portfolio_site",style:{color:"var(--bg-color)"}},"Site Source Code",-1),Fe("p",null," © 2026 JC Redmond III ",-1)]),4)])])}}}),$D=JE({history:wE("/"),routes:[{path:"/",component:Nm},{path:"/#/:slug",component:Nm}]}),Al=qy(Yb);Al.use(Zy());Al.use($D);Al.use(jb);Al.mount("#app");
