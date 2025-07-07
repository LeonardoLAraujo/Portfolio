(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const n of i)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function o(i){const n={};return i.integrity&&(n.integrity=i.integrity),i.referrerPolicy&&(n.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?n.credentials="include":i.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(i){if(i.ep)return;i.ep=!0;const n=o(i);fetch(i.href,n)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Pe=globalThis,Qe=Pe.ShadowRoot&&(Pe.ShadyCSS===void 0||Pe.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Je=Symbol(),fo=new WeakMap;let Lo=class{constructor(e,o,r){if(this._$cssResult$=!0,r!==Je)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=o}get styleSheet(){let e=this.o;const o=this.t;if(Qe&&e===void 0){const r=o!==void 0&&o.length===1;r&&(e=fo.get(o)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),r&&fo.set(o,e))}return e}toString(){return this.cssText}};const qo=t=>new Lo(typeof t=="string"?t:t+"",void 0,Je),D=(t,...e)=>{const o=t.length===1?t[0]:e.reduce((r,i,n)=>r+(a=>{if(a._$cssResult$===!0)return a.cssText;if(typeof a=="number")return a;throw Error("Value passed to 'css' function must be a 'css' function result: "+a+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[n+1],t[0]);return new Lo(o,t,Je)},Yo=(t,e)=>{if(Qe)t.adoptedStyleSheets=e.map(o=>o instanceof CSSStyleSheet?o:o.styleSheet);else for(const o of e){const r=document.createElement("style"),i=Pe.litNonce;i!==void 0&&r.setAttribute("nonce",i),r.textContent=o.cssText,t.appendChild(r)}},mo=Qe?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let o="";for(const r of e.cssRules)o+=r.cssText;return qo(o)})(t):t;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Go,defineProperty:Wo,getOwnPropertyDescriptor:Xo,getOwnPropertyNames:Qo,getOwnPropertySymbols:Jo,getPrototypeOf:Ko}=Object,ct=globalThis,go=ct.trustedTypes,Io=go?go.emptyScript:"",Me=ct.reactiveElementPolyfillSupport,_e=(t,e)=>t,Ee={toAttribute(t,e){switch(e){case Boolean:t=t?Io:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let o=t;switch(e){case Boolean:o=t!==null;break;case Number:o=t===null?null:Number(t);break;case Object:case Array:try{o=JSON.parse(t)}catch{o=null}}return o}},Ke=(t,e)=>!Go(t,e),yo={attribute:!0,type:String,converter:Ee,reflect:!1,useDefault:!1,hasChanged:Ke};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),ct.litPropertyMetadata??(ct.litPropertyMetadata=new WeakMap);let Pt=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,o=yo){if(o.state&&(o.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((o=Object.create(o)).wrapped=!0),this.elementProperties.set(e,o),!o.noAccessor){const r=Symbol(),i=this.getPropertyDescriptor(e,r,o);i!==void 0&&Wo(this.prototype,e,i)}}static getPropertyDescriptor(e,o,r){const{get:i,set:n}=Xo(this.prototype,e)??{get(){return this[o]},set(a){this[o]=a}};return{get:i,set(a){const h=i==null?void 0:i.call(this);n==null||n.call(this,a),this.requestUpdate(e,h,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??yo}static _$Ei(){if(this.hasOwnProperty(_e("elementProperties")))return;const e=Ko(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(_e("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(_e("properties"))){const o=this.properties,r=[...Qo(o),...Jo(o)];for(const i of r)this.createProperty(i,o[i])}const e=this[Symbol.metadata];if(e!==null){const o=litPropertyMetadata.get(e);if(o!==void 0)for(const[r,i]of o)this.elementProperties.set(r,i)}this._$Eh=new Map;for(const[o,r]of this.elementProperties){const i=this._$Eu(o,r);i!==void 0&&this._$Eh.set(i,o)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const o=[];if(Array.isArray(e)){const r=new Set(e.flat(1/0).reverse());for(const i of r)o.unshift(mo(i))}else e!==void 0&&o.push(mo(e));return o}static _$Eu(e,o){const r=o.attribute;return r===!1?void 0:typeof r=="string"?r:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(o=>this.enableUpdating=o),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(o=>o(this))}addController(e){var o;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((o=e.hostConnected)==null||o.call(e))}removeController(e){var o;(o=this._$EO)==null||o.delete(e)}_$E_(){const e=new Map,o=this.constructor.elementProperties;for(const r of o.keys())this.hasOwnProperty(r)&&(e.set(r,this[r]),delete this[r]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Yo(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(o=>{var r;return(r=o.hostConnected)==null?void 0:r.call(o)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(o=>{var r;return(r=o.hostDisconnected)==null?void 0:r.call(o)})}attributeChangedCallback(e,o,r){this._$AK(e,r)}_$ET(e,o){var n;const r=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,r);if(i!==void 0&&r.reflect===!0){const a=(((n=r.converter)==null?void 0:n.toAttribute)!==void 0?r.converter:Ee).toAttribute(o,r.type);this._$Em=e,a==null?this.removeAttribute(i):this.setAttribute(i,a),this._$Em=null}}_$AK(e,o){var n,a;const r=this.constructor,i=r._$Eh.get(e);if(i!==void 0&&this._$Em!==i){const h=r.getPropertyOptions(i),p=typeof h.converter=="function"?{fromAttribute:h.converter}:((n=h.converter)==null?void 0:n.fromAttribute)!==void 0?h.converter:Ee;this._$Em=i,this[i]=p.fromAttribute(o,h.type)??((a=this._$Ej)==null?void 0:a.get(i))??null,this._$Em=null}}requestUpdate(e,o,r){var i;if(e!==void 0){const n=this.constructor,a=this[e];if(r??(r=n.getPropertyOptions(e)),!((r.hasChanged??Ke)(a,o)||r.useDefault&&r.reflect&&a===((i=this._$Ej)==null?void 0:i.get(e))&&!this.hasAttribute(n._$Eu(e,r))))return;this.C(e,o,r)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,o,{useDefault:r,reflect:i,wrapped:n},a){r&&!(this._$Ej??(this._$Ej=new Map)).has(e)&&(this._$Ej.set(e,a??o??this[e]),n!==!0||a!==void 0)||(this._$AL.has(e)||(this.hasUpdated||r||(o=void 0),this._$AL.set(e,o)),i===!0&&this._$Em!==e&&(this._$Eq??(this._$Eq=new Set)).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(o){Promise.reject(o)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var r;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[n,a]of this._$Ep)this[n]=a;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[n,a]of i){const{wrapped:h}=a,p=this[n];h!==!0||this._$AL.has(n)||p===void 0||this.C(n,void 0,a,p)}}let e=!1;const o=this._$AL;try{e=this.shouldUpdate(o),e?(this.willUpdate(o),(r=this._$EO)==null||r.forEach(i=>{var n;return(n=i.hostUpdate)==null?void 0:n.call(i)}),this.update(o)):this._$EM()}catch(i){throw e=!1,this._$EM(),i}e&&this._$AE(o)}willUpdate(e){}_$AE(e){var o;(o=this._$EO)==null||o.forEach(r=>{var i;return(i=r.hostUpdated)==null?void 0:i.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&(this._$Eq=this._$Eq.forEach(o=>this._$ET(o,this[o]))),this._$EM()}updated(e){}firstUpdated(e){}};Pt.elementStyles=[],Pt.shadowRootOptions={mode:"open"},Pt[_e("elementProperties")]=new Map,Pt[_e("finalized")]=new Map,Me==null||Me({ReactiveElement:Pt}),(ct.reactiveElementVersions??(ct.reactiveElementVersions=[])).push("2.1.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ve=globalThis,Ve=ve.trustedTypes,bo=Ve?Ve.createPolicy("lit-html",{createHTML:t=>t}):void 0,Mo="$lit$",lt=`lit$${Math.random().toFixed(9).slice(2)}$`,Bo="?"+lt,Zo=`<${Bo}>`,$t=document,xe=()=>$t.createComment(""),$e=t=>t===null||typeof t!="object"&&typeof t!="function",Ie=Array.isArray,ti=t=>Ie(t)||typeof(t==null?void 0:t[Symbol.iterator])=="function",Be=`[ 	
\f\r]`,be=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,_o=/-->/g,vo=/>/g,_t=RegExp(`>|${Be}(?:([^\\s"'>=/]+)(${Be}*=${Be}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),xo=/'/g,$o=/"/g,Do=/^(?:script|style|textarea|title)$/i,ei=t=>(e,...o)=>({_$litType$:t,strings:e,values:o}),u=ei(1),Et=Symbol.for("lit-noChange"),B=Symbol.for("lit-nothing"),wo=new WeakMap,vt=$t.createTreeWalker($t,129);function No(t,e){if(!Ie(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return bo!==void 0?bo.createHTML(e):e}const oi=(t,e)=>{const o=t.length-1,r=[];let i,n=e===2?"<svg>":e===3?"<math>":"",a=be;for(let h=0;h<o;h++){const p=t[h];let f,m,g=-1,V=0;for(;V<p.length&&(a.lastIndex=V,m=a.exec(p),m!==null);)V=a.lastIndex,a===be?m[1]==="!--"?a=_o:m[1]!==void 0?a=vo:m[2]!==void 0?(Do.test(m[2])&&(i=RegExp("</"+m[2],"g")),a=_t):m[3]!==void 0&&(a=_t):a===_t?m[0]===">"?(a=i??be,g=-1):m[1]===void 0?g=-2:(g=a.lastIndex-m[2].length,f=m[1],a=m[3]===void 0?_t:m[3]==='"'?$o:xo):a===$o||a===xo?a=_t:a===_o||a===vo?a=be:(a=_t,i=void 0);const v=a===_t&&t[h+1].startsWith("/>")?" ":"";n+=a===be?p+Zo:g>=0?(r.push(f),p.slice(0,g)+Mo+p.slice(g)+lt+v):p+lt+(g===-2?h:v)}return[No(t,n+(t[o]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),r]};class we{constructor({strings:e,_$litType$:o},r){let i;this.parts=[];let n=0,a=0;const h=e.length-1,p=this.parts,[f,m]=oi(e,o);if(this.el=we.createElement(f,r),vt.currentNode=this.el.content,o===2||o===3){const g=this.el.content.firstChild;g.replaceWith(...g.childNodes)}for(;(i=vt.nextNode())!==null&&p.length<h;){if(i.nodeType===1){if(i.hasAttributes())for(const g of i.getAttributeNames())if(g.endsWith(Mo)){const V=m[a++],v=i.getAttribute(g).split(lt),P=/([.?@])?(.*)/.exec(V);p.push({type:1,index:n,name:P[2],strings:v,ctor:P[1]==="."?ri:P[1]==="?"?si:P[1]==="@"?ni:ze}),i.removeAttribute(g)}else g.startsWith(lt)&&(p.push({type:6,index:n}),i.removeAttribute(g));if(Do.test(i.tagName)){const g=i.textContent.split(lt),V=g.length-1;if(V>0){i.textContent=Ve?Ve.emptyScript:"";for(let v=0;v<V;v++)i.append(g[v],xe()),vt.nextNode(),p.push({type:2,index:++n});i.append(g[V],xe())}}}else if(i.nodeType===8)if(i.data===Bo)p.push({type:2,index:n});else{let g=-1;for(;(g=i.data.indexOf(lt,g+1))!==-1;)p.push({type:7,index:n}),g+=lt.length-1}n++}}static createElement(e,o){const r=$t.createElement("template");return r.innerHTML=e,r}}function Vt(t,e,o=t,r){var a,h;if(e===Et)return e;let i=r!==void 0?(a=o._$Co)==null?void 0:a[r]:o._$Cl;const n=$e(e)?void 0:e._$litDirective$;return(i==null?void 0:i.constructor)!==n&&((h=i==null?void 0:i._$AO)==null||h.call(i,!1),n===void 0?i=void 0:(i=new n(t),i._$AT(t,o,r)),r!==void 0?(o._$Co??(o._$Co=[]))[r]=i:o._$Cl=i),i!==void 0&&(e=Vt(t,i._$AS(t,e.values),i,r)),e}class ii{constructor(e,o){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=o}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:o},parts:r}=this._$AD,i=((e==null?void 0:e.creationScope)??$t).importNode(o,!0);vt.currentNode=i;let n=vt.nextNode(),a=0,h=0,p=r[0];for(;p!==void 0;){if(a===p.index){let f;p.type===2?f=new Ae(n,n.nextSibling,this,e):p.type===1?f=new p.ctor(n,p.name,p.strings,this,e):p.type===6&&(f=new ai(n,this,e)),this._$AV.push(f),p=r[++h]}a!==(p==null?void 0:p.index)&&(n=vt.nextNode(),a++)}return vt.currentNode=$t,i}p(e){let o=0;for(const r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(e,r,o),o+=r.strings.length-2):r._$AI(e[o])),o++}}class Ae{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,o,r,i){this.type=2,this._$AH=B,this._$AN=void 0,this._$AA=e,this._$AB=o,this._$AM=r,this.options=i,this._$Cv=(i==null?void 0:i.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const o=this._$AM;return o!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=o.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,o=this){e=Vt(this,e,o),$e(e)?e===B||e==null||e===""?(this._$AH!==B&&this._$AR(),this._$AH=B):e!==this._$AH&&e!==Et&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):ti(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==B&&$e(this._$AH)?this._$AA.nextSibling.data=e:this.T($t.createTextNode(e)),this._$AH=e}$(e){var n;const{values:o,_$litType$:r}=e,i=typeof r=="number"?this._$AC(e):(r.el===void 0&&(r.el=we.createElement(No(r.h,r.h[0]),this.options)),r);if(((n=this._$AH)==null?void 0:n._$AD)===i)this._$AH.p(o);else{const a=new ii(i,this),h=a.u(this.options);a.p(o),this.T(h),this._$AH=a}}_$AC(e){let o=wo.get(e.strings);return o===void 0&&wo.set(e.strings,o=new we(e)),o}k(e){Ie(this._$AH)||(this._$AH=[],this._$AR());const o=this._$AH;let r,i=0;for(const n of e)i===o.length?o.push(r=new Ae(this.O(xe()),this.O(xe()),this,this.options)):r=o[i],r._$AI(n),i++;i<o.length&&(this._$AR(r&&r._$AB.nextSibling,i),o.length=i)}_$AR(e=this._$AA.nextSibling,o){var r;for((r=this._$AP)==null?void 0:r.call(this,!1,!0,o);e&&e!==this._$AB;){const i=e.nextSibling;e.remove(),e=i}}setConnected(e){var o;this._$AM===void 0&&(this._$Cv=e,(o=this._$AP)==null||o.call(this,e))}}class ze{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,o,r,i,n){this.type=1,this._$AH=B,this._$AN=void 0,this.element=e,this.name=o,this._$AM=i,this.options=n,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=B}_$AI(e,o=this,r,i){const n=this.strings;let a=!1;if(n===void 0)e=Vt(this,e,o,0),a=!$e(e)||e!==this._$AH&&e!==Et,a&&(this._$AH=e);else{const h=e;let p,f;for(e=n[0],p=0;p<n.length-1;p++)f=Vt(this,h[r+p],o,p),f===Et&&(f=this._$AH[p]),a||(a=!$e(f)||f!==this._$AH[p]),f===B?e=B:e!==B&&(e+=(f??"")+n[p+1]),this._$AH[p]=f}a&&!i&&this.j(e)}j(e){e===B?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class ri extends ze{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===B?void 0:e}}class si extends ze{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==B)}}class ni extends ze{constructor(e,o,r,i,n){super(e,o,r,i,n),this.type=5}_$AI(e,o=this){if((e=Vt(this,e,o,0)??B)===Et)return;const r=this._$AH,i=e===B&&r!==B||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,n=e!==B&&(r===B||i);i&&this.element.removeEventListener(this.name,this,r),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var o;typeof this._$AH=="function"?this._$AH.call(((o=this.options)==null?void 0:o.host)??this.element,e):this._$AH.handleEvent(e)}}class ai{constructor(e,o,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=o,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){Vt(this,e)}}const De=ve.litHtmlPolyfillSupport;De==null||De(we,Ae),(ve.litHtmlVersions??(ve.litHtmlVersions=[])).push("3.3.0");const li=(t,e,o)=>{const r=(o==null?void 0:o.renderBefore)??e;let i=r._$litPart$;if(i===void 0){const n=(o==null?void 0:o.renderBefore)??null;r._$litPart$=i=new Ae(e.insertBefore(xe(),n),n,void 0,o??{})}return i._$AI(t),i};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const xt=globalThis;class S extends Pt{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var o;const e=super.createRenderRoot();return(o=this.renderOptions).renderBefore??(o.renderBefore=e.firstChild),e}update(e){const o=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=li(o,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return Et}}var jo;S._$litElement$=!0,S.finalized=!0,(jo=xt.litElementHydrateSupport)==null||jo.call(xt,{LitElement:S});const Ne=xt.litElementPolyfillSupport;Ne==null||Ne({LitElement:S});(xt.litElementVersions??(xt.litElementVersions=[])).push("4.2.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const C=t=>(e,o)=>{o!==void 0?o.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ci={attribute:!0,type:String,converter:Ee,reflect:!1,hasChanged:Ke},di=(t=ci,e,o)=>{const{kind:r,metadata:i}=o;let n=globalThis.litPropertyMetadata.get(i);if(n===void 0&&globalThis.litPropertyMetadata.set(i,n=new Map),r==="setter"&&((t=Object.create(t)).wrapped=!0),n.set(o.name,t),r==="accessor"){const{name:a}=o;return{set(h){const p=e.get.call(this);e.set.call(this,h),this.requestUpdate(a,p,t)},init(h){return h!==void 0&&this.C(a,void 0,t,h),h}}}if(r==="setter"){const{name:a}=o;return function(h){const p=this[a];e.call(this,h),this.requestUpdate(a,p,t)}}throw Error("Unsupported decorator location: "+r)};function c(t){return(e,o)=>typeof o=="object"?di(t,e,o):((r,i,n)=>{const a=i.hasOwnProperty(n);return i.constructor.createProperty(n,r),a?Object.getOwnPropertyDescriptor(i,n):void 0})(t,e,o)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function T(t){return c({...t,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ho=(t,e,o)=>(o.configurable=!0,o.enumerable=!0,Reflect.decorate&&typeof e!="object"&&Object.defineProperty(t,e,o),o);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function E(t,e){return(o,r,i)=>{const n=a=>{var h;return((h=a.renderRoot)==null?void 0:h.querySelector(t))??null};return Ho(o,r,{get(){return n(this)}})}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let pi;function Ze(t){return(e,o)=>Ho(e,o,{get(){return(this.renderRoot??pi??(pi=document.createDocumentFragment())).querySelectorAll(t)}})}var hi=Object.defineProperty,ui=Object.getOwnPropertyDescriptor,l=(t,e,o,r)=>{for(var i=r>1?void 0:r?ui(e,o):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(i=(r?a(e,o,i):a(i))||i);return r&&i&&hi(e,o,i),i},Fe=class extends S{connectedCallback(){super.connectedCallback()}render(){var t,e,o,r,i,n,a,h,p,f,m,g,V,v,P,j,z,N,L,M,H,k,F,q,J,Y,K,X,G,tt,et,W,I,gt,at,yt,s,d,y,b,A,O,$,Q,R,bt,Lt,Mt,Bt,Dt,Nt,Ht,Ft,Ut,Tt,qt,Yt,Gt,Wt,Xt,Qt,Jt,Kt,It,Zt,te,ee,oe,ie,re,se,ne,ae,le,ce,de,pe,he,ue,fe,me,ge,ye;return u`
            <style>
                :host{
                    display:                    ${((t=this.decoration)==null?void 0:t.visible)===void 0||(e=this.decoration)!=null&&e.visible?"block":"none"};
                    border-top:                 ${((o=this.decoration)==null?void 0:o.borderTop)===void 0?"0":(r=this.decoration)==null?void 0:r.borderTop};
                    border-right:               ${((i=this.decoration)==null?void 0:i.borderRight)===void 0?"0":(n=this.decoration)==null?void 0:n.borderRight};
                    border-bottom:              ${((a=this.decoration)==null?void 0:a.borderBottom)===void 0?"0":(h=this.decoration)==null?void 0:h.borderBottom};
                    border-left:                ${((p=this.decoration)==null?void 0:p.borderLeft)===void 0?"0":(f=this.decoration)==null?void 0:f.borderLeft};
                    border:                     ${((m=this.decoration)==null?void 0:m.borderAll)===void 0?"":(g=this.decoration)==null?void 0:g.borderAll};
                    border-top-right-radius:    ${((V=this.decoration)==null?void 0:V.borderAllRadius)===void 0?((v=this.decoration)==null?void 0:v.borderTopRightRadius)===void 0?"0":(P=this.decoration)==null?void 0:P.borderTopRightRadius:"0"};
                    border-top-left-radius:     ${((j=this.decoration)==null?void 0:j.borderAllRadius)===void 0?((z=this.decoration)==null?void 0:z.borderTopLeftRadius)===void 0?"0":(N=this.decoration)==null?void 0:N.borderTopLeftRadius:"0"};
                    border-bottom-right-radius: ${((L=this.decoration)==null?void 0:L.borderAllRadius)===void 0?((M=this.decoration)==null?void 0:M.borderBottomRightRadius)===void 0?"0":(H=this.decoration)==null?void 0:H.borderBottomRightRadius:"0"};
                    border-bottom-left-radius:  ${((k=this.decoration)==null?void 0:k.borderAllRadius)===void 0?((F=this.decoration)==null?void 0:F.borderBottomLeftRadius)===void 0?"0":(q=this.decoration)==null?void 0:q.borderBottomLeftRadius:"0"};
                    border-radius:              ${((J=this.decoration)==null?void 0:J.borderAllRadius)===void 0?"":(Y=this.decoration)==null?void 0:Y.borderAllRadius};
                    background-color:           ${((K=this.decoration)==null?void 0:K.backgroundColor)===void 0?"none":(X=this.decoration)==null?void 0:X.backgroundColor};
                    box-shadow:                 ${((G=this.decoration)==null?void 0:G.boxShadow)===void 0?"none":(tt=this.decoration)==null?void 0:tt.boxShadow};
                    width: ${((et=this.decoration)==null?void 0:et.width)===void 0&&((W=this.parentElement)==null?void 0:W.tagName)==="ECV-FLEX-BOX"?"-webkit-fill-available":((I=this.decoration)==null?void 0:I.width)===void 0?"auto":(gt=this.decoration)==null?void 0:gt.width};
                    height: ${((at=this.decoration)==null?void 0:at.height)===void 0&&((yt=this.parentElement)==null?void 0:yt.tagName)==="ECV-FLEX-BOX"?"-webkit-fill-available":((s=this.decoration)==null?void 0:s.height)===void 0?"auto":this.decoration.height};
                    background-image: ${((d=this.decoration)==null?void 0:d.backgroundImage)===void 0?(y=this.decoration)==null?void 0:y.backgroundGradientColor:((b=this.decoration)==null?void 0:b.backgroundImage)!=="none"&&((A=this.decoration)==null?void 0:A.backgroundGradientColor)===void 0?`url(${(O=this.decoration)==null?void 0:O.backgroundImage})`:($=this.decoration)==null?void 0:$.backgroundGradientColor};
                    background-size:            ${((Q=this.decoration)==null?void 0:Q.backgroundSize)===void 0?"":((R=this.decoration)==null?void 0:R.backgroundSize)!=="none"?"cover":"initial"};
                    background-repeat:          ${((bt=this.decoration)==null?void 0:bt.backgroundRepeat)===void 0?"":((Lt=this.decoration)==null?void 0:Lt.backgroundRepeat)!=="none"?"no-repeat":"initial"};
                    background-position:        ${((Mt=this.decoration)==null?void 0:Mt.backgroundPosition)===void 0?"relative":(Bt=this.decoration)==null?void 0:Bt.backgroundPosition};
                    opacity:                    ${((Dt=this.decoration)==null?void 0:Dt.opacity)===void 0?"1":(Nt=this.decoration)==null?void 0:Nt.opacity};
                    visibility:                 ${((Ht=this.decoration)==null?void 0:Ht.visibility)===void 0?"visible":(Ft=this.decoration)==null?void 0:Ft.visibility};
                    background-attachment:      ${((Ut=this.decoration)==null?void 0:Ut.backgroundAttachment)===void 0?"scroll":(Tt=this.decoration)==null?void 0:Tt.backgroundAttachment};
                    margin-left:                ${((qt=this.decoration)==null?void 0:qt.marginLeft)===void 0?"0":(Yt=this.decoration)==null?void 0:Yt.marginLeft};
                    margin-right:               ${((Gt=this.decoration)==null?void 0:Gt.marginRight)===void 0?"0":(Wt=this.decoration)==null?void 0:Wt.marginRight};
                    margin-top:                 ${((Xt=this.decoration)==null?void 0:Xt.marginTop)===void 0?"0":(Qt=this.decoration)==null?void 0:Qt.marginTop};
                    margin-bottom:              ${((Jt=this.decoration)==null?void 0:Jt.marginBottom)===void 0?"0":(Kt=this.decoration)==null?void 0:Kt.marginBottom};
                    margin:                     ${((It=this.decoration)==null?void 0:It.marginAll)===void 0?"none":(Zt=this.decoration)==null?void 0:Zt.marginAll};
                    max-height:                 ${((te=this.decoration)==null?void 0:te.maxHeight)===void 0?"none":(ee=this.decoration)==null?void 0:ee.maxHeight}; 
                    max-width:                  ${((oe=this.decoration)==null?void 0:oe.maxWidth)===void 0?"none":(ie=this.decoration)==null?void 0:ie.maxWidth}; 
                    min-height:                 ${((re=this.decoration)==null?void 0:re.minHeight)===void 0?"0":(se=this.decoration)==null?void 0:se.minHeight}; 
                    min-width:                  ${((ne=this.decoration)==null?void 0:ne.minWidth)===void 0?"0":(ae=this.decoration)==null?void 0:ae.minWidth}; 
                    padding-left:               ${((le=this.decoration)==null?void 0:le.paddingLeft)===void 0?"0":(ce=this.decoration)==null?void 0:ce.paddingLeft};
                    padding-right:              ${((de=this.decoration)==null?void 0:de.paddingRight)===void 0?"0":(pe=this.decoration)==null?void 0:pe.paddingRight};
                    padding-bottom:             ${((he=this.decoration)==null?void 0:he.paddingBottom)===void 0?"0":(ue=this.decoration)==null?void 0:ue.paddingBottom};
                    padding-top:                ${((fe=this.decoration)==null?void 0:fe.paddingTop)===void 0?"0":(me=this.decoration)==null?void 0:me.paddingTop};
                    padding:                    ${((ge=this.decoration)==null?void 0:ge.paddingAll)===void 0?"none":(ye=this.decoration)==null?void 0:ye.paddingAll};
                }
            </style>
            <slot></slot>
        `}};l([c({attribute:!1})],Fe.prototype,"decoration",2);Fe=l([C("ecv-box-decoration")],Fe);var dt=class extends S{constructor(){super(),this.label="",this.checked=!1,this.size=1}render(){var p,f,m,g,V,v,P,j,z,N,L,M,H,k,F,q,J,Y,K,X,G;let t,e,o,r,i,n,a,h;switch(this.size){case 0:t="27px",e="27px",o=20,h=7,n=8,r=6,i=16,a=1;break;case 2:t="35px",e="35px",o=36,n=9,r=12,i=22,a=1,h=6;break;default:t="30px",e="30px",o=23,n=9,a=2,r=8,i=18,h=7}return u`
            <style>
                .container {
                    position: relative;
                    cursor: pointer;
                    -webkit-user-select: none;
                    -moz-user-select: none;
                    -ms-user-select: none;
                    display: flex;
                    align-items: center;
                }

                .container input {
                    position: absolute;
                    opacity: 0;
                    cursor: pointer;
                    height: 0;
                    width: 0;
                }

                .checkmark {
                    position: relative;
                    top: 0;
                    left: 0;
                    margin-right: ${h}px;
                    height: ${e};
                    width: ${t};
                    background-color: ${((p=this.checkBoxStyle)==null?void 0:p.backgroundColor)===void 0?"#eee":(f=this.checkBoxStyle)==null?void 0:f.backgroundColor} ;
                }

                .container:hover input ~ .checkmark {
                    background-color: ${((m=this.checkBoxStyle)==null?void 0:m.backgroundColorHover)===void 0?"#ccc":(g=this.checkBoxStyle)==null?void 0:g.backgroundColorHover};
                }

                .container input:checked ~ .checkmark {
                    background-color:  ${((V=this.checkBoxStyle)==null?void 0:V.backgroundColorChecked)===void 0?"#2196F3":(v=this.checkBoxStyle)==null?void 0:v.backgroundColorChecked};
                }

                .checkmark:after {
                    content: "";
                    position: absolute;
                    display: none;
                }

                .container input:checked ~ .checkmark:after {
                    display: block;
                }

                .container .checkmark:after {
                    left:   ${n}px;
                    top:    ${a}px;
                    width:  ${r}px;
                    height: ${i}px;
                    border: ${((P=this.checkBoxStyle)==null?void 0:P.colorChecked)===void 0?"solid white":`solid ${(j=this.checkBoxStyle)==null?void 0:j.colorChecked}`} ;
                    border-width: 0 3px 3px 0;
                    -webkit-transform: rotate(45deg);
                    -ms-transform: rotate(45deg);
                    transform: rotate(45deg);
                }

                label{
                    width:              inherit;
                    font-size:          ${o}px;
                    font-weight:        ${(z=this.labelStyle)==null?void 0:z.weight};
                    color:              ${(N=this.labelStyle)==null?void 0:N.color};
                    font-weight:        ${(L=this.labelStyle)==null?void 0:L.weight};
                    font-family:        ${(M=this.labelStyle)==null?void 0:M.family};
                    text-shadow:        ${(H=this.labelStyle)==null?void 0:H.shadow};
                    letter-spacing:     ${(k=this.labelStyle)==null?void 0:k.letterSpacing};
                    word-spacing:       ${(F=this.labelStyle)==null?void 0:F.wordSpacing};
                    line-height:        ${(q=this.labelStyle)==null?void 0:q.lineHeight};
                    text-align:         ${(J=this.labelStyle)==null?void 0:J.textAlign};
                    text-transform:     ${(Y=this.labelStyle)==null?void 0:Y.textTransform};
                    box-shadow:         ${(K=this.labelStyle)==null?void 0:K.shadow};
                    text-indent:        ${(X=this.labelStyle)==null?void 0:X.textIdent};
                    font-style:         ${(G=this.labelStyle)==null?void 0:G.fontStyle};
                    white-space:        nowrap;
                }
            </style>
            
            <label class="container">
                <input type="checkbox" type="checkbox" ?checked=${this.checked} @change=${this.onChanged}>
                <span class="checkmark"></span>
                ${this.label}
            </label>
            
        `}};l([c()],dt.prototype,"label",2);l([c({type:Boolean})],dt.prototype,"checked",2);l([c({attribute:!1})],dt.prototype,"checkBoxStyle",2);l([c({attribute:!1})],dt.prototype,"labelStyle",2);l([c({attribute:!1})],dt.prototype,"onChanged",2);l([c({attribute:!1})],dt.prototype,"size",2);dt=l([C("ecv-checkbox")],dt);var Se=class extends S{constructor(){super(...arguments),this.size="48px",this.backgroundImage="none",this.color="transparent"}render(){return u`
            <style>
                :host{
                    display: block;
                    width: ${this.size};
                    height: ${this.size};
                    border-radius: 50%;
                    background-color: ${this.color};
                    background-image: ${this.backgroundImage!=="none"?`url(${this.backgroundImage})`:"none"};
                    background-size: ${this.backgroundImage!=="none"?"cover":"auto"};
                    background-repeat: no-repeat;
                }
            </style>
            <slot></slot>
        `}};l([c({type:String})],Se.prototype,"size",2);l([c({type:String})],Se.prototype,"backgroundImage",2);l([c({type:String})],Se.prototype,"color",2);Se=l([C("ecv-circle-box")],Se);var Oe=class extends S{constructor(){super(...arguments),this.width="100%"}render(){return u`
            <style>
                :host{
                    width: ${this.width}
                }
            </style>
            <hr>
        `}};Oe.styles=D`

        :host{
            display: block;
        }

        hr{
            border: none;
            border-bottom: 1px solid #e9e5e5;
            margin: 0.5rem 0;
            width: inherit;
        }
    `;l([c()],Oe.prototype,"width",2);Oe=l([C("ecv-divisor")],Oe);var Ue=class extends S{constructor(){super(...arguments),this.flex="1"}render(){var t,e;return u`
            <style>
                :host{
                    display: block;
                    flex: ${this.flex};
                    width: ${((t=this.parentElement)==null?void 0:t.tagName)==="ECV-FLEX-COLUMN"?"auto":"100%"};
                    height: ${((e=this.parentElement)==null?void 0:e.tagName)==="ECV-FLEX-COLUMN"?"100%":"auto"};
                }
            </style>
           <slot></slot> 
        `}};l([c({type:String})],Ue.prototype,"flex",2);Ue=l([C("ecv-flex-box")],Ue);var Te=class extends S{constructor(){super(...arguments),this._flexDirection="row",this.gap=""}connectedCallbac(){var t;super.connectedCallback(),((t=this.parentElement)==null?void 0:t.tagName)==="ECV-FLEX-COLUMN"&&(this._flexDirection="column")}render(){return u`
            <style>
                :host{
                display: flex;                flex-direction: ${this._flexDirection};
                justify-content: center;
                align-items: center;
                width: 100%;
                height: 100%;
                gap: ${this.gap}
            }
            </style>
            <slot></slot>
        `}};l([c()],Te.prototype,"gap",2);Te=l([C("ecv-flex-center")],Te);var ot=class extends S{constructor(){super(...arguments),this.flexJustify="flex-start",this.flexAlign="center",this.rowGap="normal",this.columnGap="normal",this.gap="normal",this.wrap="nowrap",this.axisSize="max",this.reverseDirection=!1,this._width="auto"}connectedCallback(){var t,e;super.connectedCallback(),(((t=this.parentElement)==null?void 0:t.tagName)==="ECV-BOX-DECORATION"||((e=this.parentElement)==null?void 0:e.tagName)==="ECV-FLEX-BOX")&&(this._width="100%")}render(){return u`
            ${this.gap!=="normal"?u`
                <style>
                    :host{
                        display: flex;
                        height: ${this.axisSize==="max"?"100%":"fit-content"};
                        width: ${this._width};
                        gap: ${this.gap};
                        flex-wrap: ${this.wrap};
                        justify-content: ${this.flexJustify};
                        align-items: ${this.flexAlign};
                        flex-direction: ${this.reverseDirection?"column-reverse":"column"};
                    }
                </style>
            `:u`
            <style>
                :host{
                    display: flex;
                    height: ${this.axisSize==="max"?"100%":"fit-content"};
                    width: ${this._width};
                    row-gap: ${this.rowGap};
                    column-gap: ${this.columnGap};
                    flex-wrap: ${this.wrap};
                    justify-content: ${this.flexJustify};
                    align-items: ${this.flexAlign};
                    flex-direction: ${this.reverseDirection?"column-reverse":"column"};
                }
            </style>`}
            <slot></slot>
        `}};l([c()],ot.prototype,"flexJustify",2);l([c()],ot.prototype,"flexAlign",2);l([c()],ot.prototype,"rowGap",2);l([c()],ot.prototype,"columnGap",2);l([c()],ot.prototype,"gap",2);l([c()],ot.prototype,"wrap",2);l([c()],ot.prototype,"axisSize",2);l([c({type:Boolean})],ot.prototype,"reverseDirection",2);ot=l([C("ecv-flex-column")],ot);var it=class extends S{constructor(){super(...arguments),this.flexJustify="flex-start",this.flexAlign="center",this.rowGap="normal",this.columnGap="normal",this.gap="normal",this.wrap="nowrap",this.axisSize="max",this.reverseDirection=!1,this._height="auto"}connectedCallback(){var t,e;super.connectedCallback(),(((t=this.parentElement)==null?void 0:t.tagName)==="ECV-BOX-DECORATION"||((e=this.parentElement)==null?void 0:e.tagName)==="ECV-FLEX-BOX")&&(this._height="-webkit-fill-available")}render(){return u`
            ${this.gap!=="normal"?u`
                <style>
                    :host{
                        display: flex;
                        width: ${this.axisSize==="max"?"100%":"fit-content"};
                        height: ${this._height};
                        gap: ${this.gap};
                        flex-wrap: ${this.wrap};
                        justify-content: ${this.flexJustify};
                        align-items: ${this.flexAlign};
                        flex-direction: ${this.reverseDirection?"row-reverse":"row"};
                    }
                </style>
            `:u`
            <style>
                :host{
                    display: flex;
                    width: ${this.axisSize==="max"?"100%":"fit-content"};
                    height: ${this._height};
                    row-gap: ${this.rowGap};
                    flex-wrap: ${this.wrap};
                    column-gap: ${this.columnGap};
                    justify-content: ${this.flexJustify};
                    align-items: ${this.flexAlign};
                    flex-direction: ${this.reverseDirection?"row-reverse":"row"};
                }
            </style>`}
            <slot></slot>
        `}};l([c()],it.prototype,"flexJustify",2);l([c()],it.prototype,"flexAlign",2);l([c()],it.prototype,"rowGap",2);l([c()],it.prototype,"columnGap",2);l([c()],it.prototype,"gap",2);l([c()],it.prototype,"wrap",2);l([c()],it.prototype,"axisSize",2);l([c({type:Boolean})],it.prototype,"reverseDirection",2);it=l([C("ecv-flex-row")],it);var pt=class extends S{constructor(){super(...arguments),this.columnGap="normal",this.rowGap="normal",this.gap="normal",this.columns="none",this.rows="none"}render(){return u`
        ${this.gap!=="normal"?u`<style>
            :host{
                display: grid;
                grid-template-columns: ${this.columns};
                grid-template-rows: ${this.rows};
                gap: ${this.gap};
           }
        </style>`:u`<style>
           :host{
                display: grid;
                grid-template-columns: ${this.columns};
                grid-template-rows: ${this.rows};
                column-gap: ${this.columnGap};
                row-gap: ${this.rowGap};
           }
        </style>`}
        <slot></slot>
        `}};pt.styles=D`

    `;l([c({type:String})],pt.prototype,"columnGap",2);l([c({type:String})],pt.prototype,"rowGap",2);l([c({type:String})],pt.prototype,"gap",2);l([c({type:String})],pt.prototype,"columns",2);l([c({type:String})],pt.prototype,"rows",2);pt=l([C("ecv-grid")],pt);var st=class extends S{constructor(){super(...arguments),this.link="",this.hasUnderline=!0,this.openOutside="false",this.size="16px"}render(){var t,e,o,r,i,n,a,h,p,f,m,g,V,v,P,j,z,N,L,M,H,k,F,q,J,Y,K,X,G,tt,et,W,I;return u`
            <style>
                :host{
                    display: inline-block;
                }

                a{
                    text-decoration: ${this.hasUnderline?"underline":"none"};
                    font-size: ${this.size};
                }

                a:visited{
                    color: ${(t=this.visitedState)==null?void 0:t.color};
                    font-size: ${(e=this.visitedState)==null?void 0:e.size};
                    font-weight: ${(o=this.visitedState)==null?void 0:o.weight};
                    font-family: ${(r=this.visitedState)==null?void 0:r.family};
                    letter-spacing: ${(i=this.visitedState)==null?void 0:i.letterSpacing};
                    line-height: ${(n=this.visitedState)==null?void 0:n.lineHeight};
                    text-align: ${(a=this.visitedState)==null?void 0:a.textAlign};
                    font-style: ${(h=this.visitedState)==null?void 0:h.fontStyle};
                    text-indent: ${(p=this.visitedState)==null?void 0:p.textIdent};
                    text-shadow: ${(f=this.visitedState)==null?void 0:f.shadow};
                    text-transform: ${(m=this.visitedState)==null?void 0:m.textTransform};
                }

                a:active{
                    color: ${(g=this.clickedState)==null?void 0:g.color};
                    font-size: ${(V=this.clickedState)==null?void 0:V.size};
                    font-weight: ${(v=this.clickedState)==null?void 0:v.weight};
                    font-family: ${(P=this.clickedState)==null?void 0:P.family};
                    letter-spacing: ${(j=this.clickedState)==null?void 0:j.letterSpacing};
                    line-height: ${(z=this.clickedState)==null?void 0:z.lineHeight};
                    text-align: ${(N=this.clickedState)==null?void 0:N.textAlign};
                    font-style: ${(L=this.clickedState)==null?void 0:L.fontStyle};
                    text-indent: ${(M=this.clickedState)==null?void 0:M.textIdent};
                    text-shadow: ${(H=this.clickedState)==null?void 0:H.shadow};
                    text-transform: ${(k=this.clickedState)==null?void 0:k.textTransform};
                }

                a:hover{
                    color: ${(F=this.hoverState)==null?void 0:F.color};
                    font-size: ${(q=this.hoverState)==null?void 0:q.size};
                    font-weight: ${(J=this.hoverState)==null?void 0:J.weight};
                    font-family: ${(Y=this.hoverState)==null?void 0:Y.family};
                    letter-spacing: ${(K=this.hoverState)==null?void 0:K.letterSpacing};
                    line-height: ${(X=this.hoverState)==null?void 0:X.lineHeight};
                    text-align: ${(G=this.hoverState)==null?void 0:G.textAlign};
                    font-style: ${(tt=this.hoverState)==null?void 0:tt.fontStyle};
                    text-indent: ${(et=this.hoverState)==null?void 0:et.textIdent};
                    text-shadow: ${(W=this.hoverState)==null?void 0:W.shadow};
                    text-transform: ${(I=this.hoverState)==null?void 0:I.textTransform};
                }

            </style>
            <a href=${this.link} target=${this.openOutside==="true"?"_blank":"_self"} ><slot></slot></a>
        `}};l([c()],st.prototype,"link",2);l([c({attribute:!1})],st.prototype,"visitedState",2);l([c({attribute:!1})],st.prototype,"clickedState",2);l([c({attribute:!1})],st.prototype,"hoverState",2);l([c({type:Boolean})],st.prototype,"hasUnderline",2);l([c()],st.prototype,"openOutside",2);l([c()],st.prototype,"size",2);st=l([C("ecv-hyperlink")],st);var Z={blue:{500:"#2196F3"},grey:{100:"#F5F5F5",200:"#EEEEEE",300:"#E0E0E0",500:"#9E9E9E",600:"#757575",900:"#212121"},shade:{white:"#FFFFFF"}},je=(t=>(t.AnimatedImages="animated_images",t.Apps="apps",t.ArrowBack="arrow_back",t.ArrowBackIos="arrow_back_ios",t.ArrowDropDown="arrow_drop_down",t.Book2="book_2",t.Book4Spark="book_4_spark",t.Cast="cast",t.CropFree="crop_free",t.DeployedCodeAccount="deployed_code_account",t.DesignServices="design_services",t.EditNote="edit_note",t.Engineering="engineering",t.FolderSpecial="folder_special",t.FullCoverage="full_coverage",t.Fullscreen="fullscreen",t.GridView="grid_view",t.InterpreterMode="interpreter_mode",t.LiveTV="live_tv",t.LockPerson="lock_person",t.NoSound="no_sound",t.PatientList="patient_list",t.Palette="palette",t.Pause="pause",t.PauseCircle="pause_circle",t.PictureAsPDF="picture_as_pdf",t.PlayArrow="play_arrow",t.PlayCircle="play_circle",t.Repeat="repeat",t.Replay="replay",t.Right="arrow_forward_ios",t.SettingsSlowMotion="settings_slow_motion",t.SettingsVideo="settings_video_camera",t.SkipNext="skip_next",t.SkipPrevious="skip_previous",t.SmartDisplay="smart_display",t.Speed1X="1x_mobiledata",t.Speed1_5X="speed_1_5x",t.Speed2X="speed_2x",t.Subtitle="subtitles",t.SubtitleOff="subtitles_off",t.TimeLine="timeline",t.TwoPager="two_pager",t.Visibility="visibility",t.VolumeUp="volume_up",t.VolumeDown="volume_down",t.VolumeMute="volume_mute",t.Webhook="webhook",t.Wysiwyg="wysiwyg",t.Youtube="youtube_activity",t.Accessible="accessible",t.AccessibilityNews="accessibility_news",t.Add="add",t.AddCircle="add_circle",t.Alarm="alarm",t.AlternateEmail="alternate_email",t.Android="android",t.ArrowCircleRight="arrow_circle_right",t.ArrowForward="arrow_forward",t.ArrowBackIoS="arrow_back_ios",t.ArrowForwardIoS="arrow_forward_ios",t.AttachFile="attach_file",t.AttachMoney="attach_money",t.BabyChangingStation="baby_changing_station",t.Bolt="bolt",t.Book="book",t.Bookmark="bookmark",t.Cake="cake",t.Celebration="celebration",t.Call="call",t.Chat="chat",t.Check="check",t.Close="close",t.Cloud="cloud",t.CreditCard="credit_card",t.CurrencyYen="currency_yen",t.Delete="delete",t.DesktopMac="desktop_mac",t.Diamond="diamond",t.DirectionsCar="directions_car",t.Download="download",t.Edit="edit",t.Emoticon="emoticon",t.ExpandLess="expand_less",t.ExpandMore="expand_more",t.Experiment="experiment",t.Favorite="favorite",t.Genetics="genetics",t.Group="group",t.HandShake="handshake",t.Home="home",t.HomeHealth="home_health",t.Hotel="hotel",t.Ios="ios",t.Label="label",t.Link="link",t.LocalATM="local_atm",t.Login="login",t.Logout="logout",t.Mail="mail",t.Manufacturing="manufacturing",t.Menu="menu",t.Mic="mic",t.Mystery="mystery",t.Mood="mood",t.MoreHoriz="more_horiz",t.Notifications="notifications",t.Oncology="oncology",t.OpenWith="open_with",t.OpenInFull="open_in_full",t.Person="person",t.Pets="pets",t.Print="print",t.Public="public",t.PushPin="push_pin",t.Recycling="recycling",t.Refresh="refresh",t.Remove="remove",t.Savings="savings",t.Search="search",t.Sell="sell",t.Send="send",t.SentimentSatisfied="sentiment_satisfied",t.Settings="settings",t.Share="share",t.ShoppingCart="shopping_cart",t.Smartphone="smartphone",t.Star="star",t.Store="store",t.Stethoscope="stethoscope",t.Target="target",t.ThumbUp="thumb_up",t.ThumbDown="thumb_down",t.ToggleOff="toggle_off",t.ToggleOn="toggle_on",t.Translate="translate",t.Travel="travel",t.UnfoldMore="unfold_more",t.Wifi="wifi",t.WC="wc",t))(je||{}),wt=class extends S{constructor(){super(...arguments),this.materailSymbolsAddress="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200",this.icon="add",this.filled=!1}_addMaterialSymbolsAddress(){if(this._checkedDocument===null){const t=document.createElement("link");t.href=`${this.materailSymbolsAddress}`,t.rel="stylesheet",document.head.appendChild(t)}}connectedCallback(){super.connectedCallback(),this._checkedDocument=document.querySelector(`[href="${this.materailSymbolsAddress}"]`),this._addMaterialSymbolsAddress()}render(){var t,e;return u`

            ${this.filled?u`<style>
            .material-symbols-outlined {
                font-family: 'Material Symbols Outlined';
                font-weight: 'normal';
                font-style: normal;
                font-size: ${((t=this.iconStyle)==null?void 0:t.size)??"24px"};
                display: inline-block;
                line-height: 1;
                text-transform: none;
                letter-spacing: normal;
                word-wrap: normal;
                white-space: nowrap;
                direction: ltr;
                font-variation-settings:
                'FILL' 1,
                'wght' 400,
                'GRAD' 0,
                'opsz' 24;
            }
            </style>`:u`
                <style>
                    .material-symbols-outlined {
                        font-family: 'Material Symbols Outlined';
                        font-weight: 'normal';
                        font-style: normal;
                        font-size: ${((e=this.iconStyle)==null?void 0:e.size)??"24px"};
                        display: inline-block;
                        line-height: 1;
                        text-transform: none;
                        letter-spacing: normal;
                        word-wrap: normal;
                        white-space: nowrap;
                        direction: ltr;
                    }
                </style>
            `}
            <ecv-text-span class="material-symbols-outlined" .textStyle=${this.iconStyle}>${this.icon}</ecv-text-span>
        `}};wt.styles=D`

        :host{
            display: flex;
            justify-content: center;
            align-items: center;
        }

    `;l([T()],wt.prototype,"materailSymbolsAddress",2);l([c()],wt.prototype,"icon",2);l([c({type:Boolean})],wt.prototype,"filled",2);l([c({attribute:!1})],wt.prototype,"iconStyle",2);wt=l([C("ecv-icon")],wt);var St=class extends S{constructor(){super(...arguments),this.icon="favorite",this.onPressed=()=>{}}render(){var t,e,o,r,i,n,a,h,p,f,m,g;return u`
            <style>
                :host{
                    display: block;
                    flex: 1;
                    user-select: none;
                }

                button{
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    cursor: ${((t=this.buttonStyle)==null?void 0:t.cursor)??"pointer"};
                    border: ${((e=this.buttonStyle)==null?void 0:e.borderAll)??`1px solid ${Z.grey[600]}`};
                    background-color: ${((o=this.buttonStyle)==null?void 0:o.backgroundColor)??`${Z.grey[100]}`};
                    padding: ${((r=this.buttonStyle)==null?void 0:r.paddingAll)??"10px"};
                    border-radius: ${((i=this.buttonStyle)==null?void 0:i.borderRadius)??"5px"};
                    box-shadow: ${((n=this.buttonStyle)==null?void 0:n.shadow)??"none"};
                    width: 100%;
                    min-width: max-content;
                }

                button:hover{
                    filter: ${(a=this.hoverState)==null?void 0:a.brightness};
                    color: ${(h=this.hoverState)==null?void 0:h.color};
                    background-color: ${((p=this.hoverState)==null?void 0:p.backgroundColor)??`${Z.grey[300]}`};
                    box-shadow: ${(f=this.hoverState)==null?void 0:f.shadow};
                    cursor: ${(m=this.hoverState)==null?void 0:m.cursor};
                }

                button:active{
                    background-color: ${((g=this.buttonStyle)==null?void 0:g.backgroundColor)??`${Z.grey[100]}`};
                }
            </style>
            
            <button @click=${this.onPressed}>
                <ecv-icon icon=${this.icon} .iconStyle=${this.iconStyle}></ecv-icon>
            </button>
        `}};l([c({attribute:!1})],St.prototype,"icon",2);l([c({attribute:!1})],St.prototype,"onPressed",2);l([c({attribute:!1})],St.prototype,"hoverState",2);l([c({attribute:!1})],St.prototype,"buttonStyle",2);l([c({attribute:!1})],St.prototype,"iconStyle",2);St=l([C("ecv-icon-button")],St);var Ot=class extends S{constructor(){super(...arguments),this.source="",this.description=""}render(){var t,e,o,r,i,n,a,h,p;return u`
            <style>

                :host{
                    height: ${(t=this.imageDecoration)==null?void 0:t.height};
                    width: ${(e=this.imageDecoration)==null?void 0:e.width};
                }

                img{
                    width: 100%;
                    height: auto;
                    max-width: ${(o=this.imageDecoration)==null?void 0:o.maxWidth};
                    max-height: ${(r=this.imageDecoration)==null?void 0:r.maxHeight};
                    filter: ${(i=this.imageDecoration)==null?void 0:i.filterEffect};
                    border: ${(n=this.imageDecoration)==null?void 0:n.borderAll};
                    border-radius: ${(a=this.imageDecoration)==null?void 0:a.borderAllRadius};
                    opacity: ${(h=this.imageDecoration)==null?void 0:h.opacity};
                    box-shadow: ${(p=this.imageDecoration)==null?void 0:p.opacity};
                    object-fit: contain;
                }

            </style>
            <img src=${this.source} alt=${this.description}>
        `}};Ot.styles=D`

        :host{
            display: flex;
        }

    `;l([c()],Ot.prototype,"source",2);l([c()],Ot.prototype,"description",2);l([c({attribute:!1})],Ot.prototype,"imageDecoration",2);Ot=l([C("ecv-image")],Ot);var ht=class extends S{constructor(){super(...arguments),this.top="0px",this.right="0px",this.left="0px",this.bottom="0px"}render(){const t=this.all!==void 0?`margin: ${this.all}`:`margin-left: ${this.left};margin-right: ${this.right}; margin-top: ${this.top}; margin-bottom: ${this.bottom}`;return u`
            <style>
                :host{
                    ${t};
                }
            </style>
            <slot></slot>
        `}};ht.styles=D`
        :host{
            display: block;
        }
    `;l([c()],ht.prototype,"all",2);l([c()],ht.prototype,"top",2);l([c()],ht.prototype,"right",2);l([c()],ht.prototype,"left",2);l([c()],ht.prototype,"bottom",2);ht=l([C("ecv-margin")],ht);var ut=class extends S{constructor(){super(...arguments),this.top="0px",this.right="0px",this.left="0px",this.bottom="0px"}render(){const t=this.all!==void 0?`padding: ${this.all}`:`padding-left: ${this.left};padding-right: ${this.right}; padding-top: ${this.top}; padding-bottom: ${this.bottom}`;return u`
            <style>
                :host{
                    ${t};
                }
            </style>
            <slot></slot>
        `}};ut.styles=D`
        :host{
            display: block;
        }
    `;l([c()],ut.prototype,"all",2);l([c()],ut.prototype,"top",2);l([c()],ut.prototype,"right",2);l([c()],ut.prototype,"left",2);l([c()],ut.prototype,"bottom",2);ut=l([C("ecv-padding")],ut);var rt=class extends S{constructor(){super(...arguments),this.position="relative",this.left="auto",this.right="auto",this.top="auto",this.bottom="auto",this.zIndex="auto",this.width="fit-content",this.height="fit-content"}render(){return u`
            <style>
                :host{
                    display: block;
                    position: ${this.position};
                    left: ${this.left};
                    right: ${this.right};
                    top: ${this.top};
                    bottom: ${this.bottom};
                    z-index: ${this.zIndex};
                    width: ${this.width};
                    height: ${this.height};
                }
            </style>
            <slot></slot>
        `}};l([c()],rt.prototype,"position",2);l([c({type:String})],rt.prototype,"left",2);l([c({type:String})],rt.prototype,"right",2);l([c({type:String})],rt.prototype,"top",2);l([c({type:String})],rt.prototype,"bottom",2);l([c({type:String})],rt.prototype,"zIndex",2);l([c({type:String})],rt.prototype,"width",2);l([c({type:String})],rt.prototype,"height",2);rt=l([C("ecv-positioned-box")],rt);var ft=class extends S{constructor(){super(...arguments),this.width="auto",this.height="auto",this.overflow="auto",this.overflowX="visible",this.overflowY="visible",this.behavior="auto"}render(){return u`
            ${this.overflowX!=="visible"||this.overflowY!=="visible"?u`
            <style>
                :host{
                    display: block;
                    width: ${this.width};
                    height: ${this.height};
                    overflow-x: ${this.overflowX};
                    overflow-y: ${this.overflowY};
                    scroll-behavior: ${this.behavior};
                }
            </style>
            `:u`
            <style>
                :host{
                    display: block;
                    width: ${this.width};
                    height: ${this.height};
                    overflow: ${this.overflow};
                    scroll-behavior: ${this.behavior};
                }
            </style>
            `}
            <slot></slot>
        `}};l([c()],ft.prototype,"width",2);l([c()],ft.prototype,"height",2);l([c()],ft.prototype,"overflow",2);l([c()],ft.prototype,"overflowX",2);l([c()],ft.prototype,"overflowY",2);l([c()],ft.prototype,"behavior",2);ft=l([C("ecv-scroll-view-box")],ft);var mt=class extends S{constructor(){super(...arguments),this.checked=!1,this.checkedColor=Z.blue[500],this.uncheckedColor=Z.grey[500],this.sliderColor=Z.shade.white,this.onChecked=()=>{},this.size=1}render(){let t,e,o,r,i;switch(this.size){case 0:t="40px",e="24px",o=18,r=2,i=18;break;case 2:t="70px",e="44px",o=36,r=4,i=25;break;default:t="60px",e="34px",o=26,r=4,i=26}return u`
            <style>
                
                :host{
                    display: block;
                }

                .switch{
                    position: relative;
                    display: inline-block;
                    width: ${t};
                    height: ${e};
                }

                .switch input{
                    opacity: 0;
                    width: 0;
                    height: 0;
                }

                .slider{
                    position: absolute;
                    cursor: pointer;
                    top: 0;
                    right: 0;
                    bottom: 0;
                    left: 0;
                    background-color: ${this.uncheckedColor};
                    -webkit-transition: .4s;
                    transition: .4s;
                }

                .slider::before {
                    position: absolute;
                    content: "";
                    height: ${o}px;
                    width:  ${o}px;
                    left: ${r}px;
                    bottom: 4px;
                    background-color: ${this.sliderColor};
                    -webkit-transition: .4s;
                    transition: .4s;
                }

                input:checked + .slider{
                    background-color: ${this.checkedColor};
                }

                input:focus + .slider {
                    box-shadow: 0 0 1px ${this.checkedColor};
                }

                input:checked + .slider:before{
                    -webkit-transform: translateX(${i}px);
                    -ms-transform: translateX(${i}px);
                    transform: translateX(${i}px);
                }

                /* Rounded sliders*/
                .slider.round{
                    border-radius: 34px;
                }

                .slider.round:before{
                    border-radius: 50%;
                }

            </style>
            <label class="switch">
                <input type="checkbox" ?checked=${this.checked} @change=${()=>{this.checked=!this.checked;const n=this;this.onChecked(n)}}>
                <span class="slider round"></span>
            </label>
        `}};l([c({type:Boolean})],mt.prototype,"checked",2);l([c()],mt.prototype,"checkedColor",2);l([c()],mt.prototype,"uncheckedColor",2);l([c()],mt.prototype,"sliderColor",2);l([c({attribute:!1})],mt.prototype,"onChecked",2);l([c({attribute:!1})],mt.prototype,"size",2);mt=l([C("ecv-switch")],mt);var nt=class extends S{constructor(){super(...arguments),this.onPressed=()=>{},this.icon="add",this.reversePosition=!1}render(){return u`
            <style>
                :host{
                    display: block;
                    width: 100%;
                }
            </style>

            <ecv-text-button .textStyle=${this.textStyle} .buttonStyle=${this.buttonStyle} .hoverState=${this.hoverState} .onPressed=${this.onPressed}>
                <ecv-flex-row flexAlign=${"center"} columnGap="5px" flexJustify=${"center"} ?reverseDirection=${this.reversePosition}>
                    <ecv-icon icon=${this.icon} .iconStyle=${this.iconStyle}></ecv-icon>
                    <slot></slot>
                </ecv-flex-row>
            </ecv-text-button>
        `}};l([c({attribute:!1})],nt.prototype,"onPressed",2);l([c({attribute:!1})],nt.prototype,"icon",2);l([c({type:Boolean})],nt.prototype,"reversePosition",2);l([c({attribute:!1})],nt.prototype,"buttonStyle",2);l([c({attribute:!1})],nt.prototype,"textStyle",2);l([c({attribute:!1})],nt.prototype,"hoverState",2);l([c({attribute:!1})],nt.prototype,"iconStyle",2);nt=l([C("ecv-text-button-icon")],nt);var Rt=class extends S{constructor(){super(...arguments),this.onPressed=()=>{}}render(){var t,e,o,r,i,n,a,h,p,f,m,g;return u`
            <style>

                :host{
                    display: block;
                    flex: 1;
                    user-select: none;
                }

                button{
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    cursor: ${((t=this.buttonStyle)==null?void 0:t.cursor)??"pointer"};
                    border: ${((e=this.buttonStyle)==null?void 0:e.borderAll)??`1px solid ${Z.grey[600]}`};
                    background-color: ${((o=this.buttonStyle)==null?void 0:o.backgroundColor)??`${Z.grey[100]}`};
                    padding: ${((r=this.buttonStyle)==null?void 0:r.paddingAll)??"10px"};
                    border-radius: ${((i=this.buttonStyle)==null?void 0:i.borderRadius)??"5px"};
                    box-shadow: ${((n=this.buttonStyle)==null?void 0:n.shadow)??"none"};
                    width: 100%;
                    min-width: max-content;
                }

                button:hover{
                    filter: ${(a=this.hoverState)==null?void 0:a.brightness};
                    color: ${(h=this.hoverState)==null?void 0:h.color};
                    background-color: ${((p=this.hoverState)==null?void 0:p.backgroundColor)??`${Z.grey[200]}`};
                    box-shadow: ${(f=this.hoverState)==null?void 0:f.shadow};
                    cursor: ${(m=this.hoverState)==null?void 0:m.cursor};
                }

                button:active{
                    background-color: ${((g=this.buttonStyle)==null?void 0:g.backgroundColor)??`${Z.grey[100]}`};
                }
            </style>
            
            <button @click=${this.onPressed}>
                <ecv-text .textStyle=${this.textStyle}><slot></slot></ecv-text>
            </button>
        `}};l([c({attribute:!1})],Rt.prototype,"onPressed",2);l([c({attribute:!1})],Rt.prototype,"hoverState",2);l([c({attribute:!1})],Rt.prototype,"buttonStyle",2);l([c({attribute:!1})],Rt.prototype,"textStyle",2);Rt=l([C("ecv-text-button")],Rt);var kt=class extends S{constructor(){super(...arguments),this.hint="",this.label=""}render(){var t,e,o,r,i,n,a,h,p,f,m,g,V,v,P,j,z,N,L,M,H,k,F;return u`
            <style>
                :host{
                    display: block;
                }

                label{
                    width: inherit;
                    font-size: ${(t=this.labelStyle)==null?void 0:t.size};
                    font-weight: ${(e=this.labelStyle)==null?void 0:e.weight};
                    color: ${(o=this.labelStyle)==null?void 0:o.color};
                    font-weight: ${(r=this.labelStyle)==null?void 0:r.weight};
                    font-family: ${(i=this.labelStyle)==null?void 0:i.family};
                    text-shadow: ${(n=this.labelStyle)==null?void 0:n.shadow};
                    white-space: nowrap;
                }

                input{
                    width: 100%;
                    border: ${((a=this.textFieldStyle)==null?void 0:a.borderAll)??`1px solid ${Z.grey[900]}`};
                    padding: 10px;
                    background-color: ${((h=this.textFieldStyle)==null?void 0:h.backgroundColor)??`${Z.grey[200]}`};
                    box-shadow: ${(p=this.textFieldStyle)==null?void 0:p.shadow};
                    border-radius: ${(f=this.textFieldStyle)==null?void 0:f.borderAllRadius};
                    font-size: ${(m=this.textFieldStyle)==null?void 0:m.textFieldSize};
                    color: ${(g=this.textFieldStyle)==null?void 0:g.textFieldColor};
                    display: inline-block;
                }

                input::placeholder{
                    font-size:          ${(V=this.hintSyle)==null?void 0:V.size};
                    font-weight:        ${(v=this.hintSyle)==null?void 0:v.weight};
                    color:              ${(P=this.hintSyle)==null?void 0:P.color};
                    font-weight:        ${(j=this.hintSyle)==null?void 0:j.weight};
                    font-family:        ${(z=this.hintSyle)==null?void 0:z.family};
                    text-shadow:        ${(N=this.hintSyle)==null?void 0:N.shadow};
                    letter-spacing:     ${(L=this.hintSyle)==null?void 0:L.letterSpacing};
                    text-align:         ${(M=this.hintSyle)==null?void 0:M.textAlign};
                    text-transform:     ${(H=this.hintSyle)==null?void 0:H.textTransform};
                    text-indent:        ${(k=this.hintSyle)==null?void 0:k.textIdent};
                    font-style:         ${(F=this.hintSyle)==null?void 0:F.fontStyle};
                }

                input:focus,
                input:active,
                input:focus-visible{
                    outline: none;
                }

            </style>
           
            <ecv-flex-row columnGap=${this.label!==""?"10px":"0"}>
                <label for="ecv-text-field">${this.label}</label>
                <input type="text" placeholder=${this.hint} name="ecv-text-field">
            </ecv-flex-row>
            
        `}};l([c()],kt.prototype,"hint",2);l([c()],kt.prototype,"label",2);l([c({attribute:!1})],kt.prototype,"textFieldStyle",2);l([c({attribute:!1})],kt.prototype,"labelStyle",2);l([c({attribute:!1})],kt.prototype,"hintSyle",2);kt=l([C("ecv-text-field")],kt);var qe=class extends S{render(){var t,e,o,r,i,n,a,h,p;return u`
            <style>
                :host{
                    display: inline-block;
                    font-family: ${(t=this.textStyle)==null?void 0:t.family};
                    font-size: ${(e=this.textStyle)==null?void 0:e.size};
                    color: ${(o=this.textStyle)==null?void 0:o.color};
                    margin: 0px;
                    overflow-wrap: anywhere;
                    letter-spacing: ${(r=this.textStyle)==null?void 0:r.letterSpacing};
                    word-spacing: ${(i=this.textStyle)==null?void 0:i.wordSpacing};
                    font-weight: ${(n=this.textStyle)==null?void 0:n.weight};
                    line-height: ${(a=this.textStyle)==null?void 0:a.lineHeight};
                    text-align: ${(h=this.textStyle)==null?void 0:h.textAlign};
                    text-shadow: ${(p=this.textStyle)==null?void 0:p.shadow};
                }

            </style>
            <span>
                <slot></slot>
            </span>
        `}};l([c({attribute:!1})],qe.prototype,"textStyle",2);qe=l([C("ecv-text-span")],qe);var Ye=class extends S{render(){var t,e,o,r,i,n,a,h,p,f;return u`
            <style>
                :host{
                    display: block;
                    font-family: ${(t=this.textStyle)==null?void 0:t.family};
                    font-size: ${(e=this.textStyle)==null?void 0:e.size};
                    color: ${(o=this.textStyle)==null?void 0:o.color};
                    margin: 0px;
                    overflow-wrap: anywhere;
                    letter-spacing: ${(r=this.textStyle)==null?void 0:r.letterSpacing};
                    word-spacing: ${(i=this.textStyle)==null?void 0:i.wordSpacing};
                    font-weight: ${(n=this.textStyle)==null?void 0:n.weight};
                    line-height: ${(a=this.textStyle)==null?void 0:a.lineHeight};
                    text-align: ${(h=this.textStyle)==null?void 0:h.textAlign};
                    text-transform: ${(p=this.textStyle)==null?void 0:p.textTransform};
                    text-shadow: ${(f=this.textStyle)==null?void 0:f.shadow};
                }
            </style>
            <slot></slot>
        `}};l([c({attribute:!1})],Ye.prototype,"textStyle",2);Ye=l([C("ecv-text")],Ye);var U=class extends S{constructor(){super(),this.rows="2",this.columns="2",this.hint="Placeholder",this.gap="",this.resizeble=!1}render(){var t,e,o,r,i,n,a,h,p,f,m,g,V,v,P,j,z,N,L,M,H,k,F,q,J,Y,K,X,G,tt,et,W,I,gt,at,yt,s,d,y,b,A,O,$,Q,R,bt,Lt,Mt,Bt,Dt,Nt,Ht,Ft,Ut,Tt,qt,Yt,Gt,Wt,Xt,Qt,Jt,Kt,It,Zt,te,ee,oe,ie,re,se,ne,ae,le,ce,de,pe,he,ue,fe,me,ge,ye,eo,oo,io,ro,so,no,ao,lo,co,po,ho,uo;return u`
            <style>
                    :host{
                        width: ${((t=this.textAreaStyle)==null?void 0:t.width)??"fit-content"};
                        height: ${((e=this.textAreaStyle)==null?void 0:e.height)??"fit-content"};
                    }
                    
                    textarea{
                        display:                    ${((o=this.textAreaStyle)==null?void 0:o.visible)===void 0||(r=this.textAreaStyle)!=null&&r.visible?"block":"none"};
                        border-top:                 ${((i=this.textAreaStyle)==null?void 0:i.borderTop)===void 0?"0":(n=this.textAreaStyle)==null?void 0:n.borderTop};
                        border-right:               ${((a=this.textAreaStyle)==null?void 0:a.borderRight)===void 0?"0":(h=this.textAreaStyle)==null?void 0:h.borderRight};
                        border-bottom:              ${((p=this.textAreaStyle)==null?void 0:p.borderBottom)===void 0?"0":(f=this.textAreaStyle)==null?void 0:f.borderBottom};
                        border-left:                ${((m=this.textAreaStyle)==null?void 0:m.borderLeft)===void 0?"0":(g=this.textAreaStyle)==null?void 0:g.borderLeft};
                        border:                     ${((V=this.textAreaStyle)==null?void 0:V.borderAll)===void 0?"1px solid #000":(v=this.textAreaStyle)==null?void 0:v.borderAll};
                        border-top-right-radius:    ${((P=this.textAreaStyle)==null?void 0:P.borderTopRightRadius)===void 0?"0":(j=this.textAreaStyle)==null?void 0:j.borderTopRightRadius};
                        border-top-left-radius:     ${((z=this.textAreaStyle)==null?void 0:z.borderTopLeftRadius)===void 0?"0":(N=this.textAreaStyle)==null?void 0:N.borderTopLeftRadius};
                        border-bottom-right-radius: ${((L=this.textAreaStyle)==null?void 0:L.borderBottomRightRadius)===void 0?"0":(M=this.textAreaStyle)==null?void 0:M.borderBottomRightRadius};
                        border-bottom-left-radius:  ${((H=this.textAreaStyle)==null?void 0:H.borderBottomLeftRadius)===void 0?"0":(k=this.textAreaStyle)==null?void 0:k.borderBottomLeftRadius};
                        background-color:           ${((F=this.textAreaStyle)==null?void 0:F.backgroundColor)===void 0?"none":(q=this.textAreaStyle)==null?void 0:q.backgroundColor};
                        box-shadow:                 ${((J=this.textAreaStyle)==null?void 0:J.boxShadow)===void 0?"none":(Y=this.textAreaStyle)==null?void 0:Y.boxShadow};
                        width:                      -webkit-fill-available;
                        height:                     -webkit-fill-available;
                        background-position:        ${((K=this.textAreaStyle)==null?void 0:K.backgroundPosition)===void 0?"relative":(X=this.textAreaStyle)==null?void 0:X.backgroundPosition};
                        opacity:                    ${((G=this.textAreaStyle)==null?void 0:G.opacity)===void 0?"1":(tt=this.textAreaStyle)==null?void 0:tt.opacity};
                        visibility:                 ${((et=this.textAreaStyle)==null?void 0:et.visibility)===void 0?"visible":(W=this.textAreaStyle)==null?void 0:W.visibility};
                        background-attachment:      ${((I=this.textAreaStyle)==null?void 0:I.backgroundAttachment)===void 0?"scroll":(gt=this.textAreaStyle)==null?void 0:gt.backgroundAttachment};
                        margin-left:                ${((at=this.textAreaStyle)==null?void 0:at.marginLeft)===void 0?"0":(yt=this.textAreaStyle)==null?void 0:yt.marginLeft};
                        margin-right:               ${((s=this.textAreaStyle)==null?void 0:s.marginRight)===void 0?"0":(d=this.textAreaStyle)==null?void 0:d.marginRight};
                        margin-top:                 ${((y=this.textAreaStyle)==null?void 0:y.marginTop)===void 0?"0":(b=this.textAreaStyle)==null?void 0:b.marginTop};
                        margin-bottom:              ${((A=this.textAreaStyle)==null?void 0:A.marginBottom)===void 0?"0":(O=this.textAreaStyle)==null?void 0:O.marginBottom};
                        margin:                     ${(($=this.textAreaStyle)==null?void 0:$.marginAll)===void 0?"none":(Q=this.textAreaStyle)==null?void 0:Q.marginAll};
                        padding-left:               ${((R=this.textAreaStyle)==null?void 0:R.paddingLeft)===void 0?"0":(bt=this.textAreaStyle)==null?void 0:bt.paddingLeft};
                        padding-right:              ${((Lt=this.textAreaStyle)==null?void 0:Lt.paddingRight)===void 0?"0":(Mt=this.textAreaStyle)==null?void 0:Mt.paddingRight};
                        padding-bottom:             ${((Bt=this.textAreaStyle)==null?void 0:Bt.paddingBottom)===void 0?"0":(Dt=this.textAreaStyle)==null?void 0:Dt.paddingBottom};
                        padding-top:                ${((Nt=this.textAreaStyle)==null?void 0:Nt.paddingTop)===void 0?"0":(Ht=this.textAreaStyle)==null?void 0:Ht.paddingTop};
                        padding:                    ${((Ft=this.textAreaStyle)==null?void 0:Ft.paddingAll)===void 0?"none":(Ut=this.textAreaStyle)==null?void 0:Ut.paddingAll};

                        font-size:                  ${(Tt=this.textStyle)==null?void 0:Tt.size};
                        font-weight:                ${(qt=this.textStyle)==null?void 0:qt.weight};
                        color:                      ${(Yt=this.textStyle)==null?void 0:Yt.color};
                        font-weight:                ${(Gt=this.textStyle)==null?void 0:Gt.weight};
                        font-family:                ${(Wt=this.textStyle)==null?void 0:Wt.family};
                        text-shadow:                ${(Xt=this.textStyle)==null?void 0:Xt.shadow};
                        letter-spacing:             ${(Qt=this.textStyle)==null?void 0:Qt.letterSpacing};
                        word-spacing:               ${(Jt=this.textStyle)==null?void 0:Jt.wordSpacing};
                        line-height:                ${(Kt=this.textStyle)==null?void 0:Kt.lineHeight};
                        text-align:                 ${(It=this.textStyle)==null?void 0:It.textAlign};
                        text-transform:             ${(Zt=this.textStyle)==null?void 0:Zt.textTransform};
                        box-shadow:                 ${(te=this.textStyle)==null?void 0:te.shadow};
                        text-indent:                ${(ee=this.textStyle)==null?void 0:ee.textIdent};
                        font-style:                 ${(oe=this.textStyle)==null?void 0:oe.fontStyle};
                        resize:                     ${this.resizeble===!1?"none":"auto"};
                    }

                    textarea::placeholder{
                        font-size:          ${(ie=this.hintSyle)==null?void 0:ie.size};
                        font-weight:        ${(re=this.hintSyle)==null?void 0:re.weight};
                        color:              ${(se=this.hintSyle)==null?void 0:se.color};
                        font-weight:        ${(ne=this.hintSyle)==null?void 0:ne.weight};
                        font-family:        ${(ae=this.hintSyle)==null?void 0:ae.family};
                        text-shadow:        ${(le=this.hintSyle)==null?void 0:le.shadow};
                        letter-spacing:     ${(ce=this.hintSyle)==null?void 0:ce.letterSpacing};
                        text-align:         ${(de=this.hintSyle)==null?void 0:de.textAlign};
                        text-transform:     ${(pe=this.hintSyle)==null?void 0:pe.textTransform};
                        text-indent:        ${(he=this.hintSyle)==null?void 0:he.textIdent};
                        font-style:         ${(ue=this.hintSyle)==null?void 0:ue.fontStyle};
                    }

                    label{
                        width:              inherit;
                        font-size:          ${(fe=this.labelStyle)==null?void 0:fe.size};
                        font-weight:        ${(me=this.labelStyle)==null?void 0:me.weight};
                        color:              ${(ge=this.labelStyle)==null?void 0:ge.color};
                        font-weight:        ${(ye=this.labelStyle)==null?void 0:ye.weight};
                        font-family:        ${(eo=this.labelStyle)==null?void 0:eo.family};
                        text-shadow:        ${(oo=this.labelStyle)==null?void 0:oo.shadow};
                        letter-spacing:     ${(io=this.labelStyle)==null?void 0:io.letterSpacing};
                        word-spacing:       ${(ro=this.labelStyle)==null?void 0:ro.wordSpacing};
                        line-height:        ${(so=this.labelStyle)==null?void 0:so.lineHeight};
                        text-align:         ${(no=this.labelStyle)==null?void 0:no.textAlign};
                        text-transform:     ${(ao=this.labelStyle)==null?void 0:ao.textTransform};
                        box-shadow:         ${(lo=this.labelStyle)==null?void 0:lo.shadow};
                        text-indent:        ${(co=this.labelStyle)==null?void 0:co.textIdent};
                        font-style:         ${(po=this.labelStyle)==null?void 0:po.fontStyle};
                        white-space:        nowrap;
                    }
            </style>

            ${this.label!==void 0&&this.positionLabelRow===void 0&&this.positionLabelColumn===void 0?u`${this._rowTextAreaBlock()}`:this.label!==void 0&&this.positionLabelColumn===void 0?u`${this._positionLabelRow()}`:this.label!==void 0&&this.positionLabelRow===void 0?u`${this._positionLabelColumn()}`:u`<ecv-box-decoration .decoration=${{width:(ho=this.textAreaStyle)==null?void 0:ho.width,height:(uo=this.textAreaStyle)==null?void 0:uo.height}}>
                        <textarea rows=${Number(this.rows)} cols=${Number(this.columns)} placeholder=${this.hint} @change=${this.onChanged}></textarea>
                    </ecv-box-decoration>`}`}_rowTextAreaBlock(t=!1,e="start",o="max"){var r,i;return u`<ecv-box-decoration .decoration=${{width:(r=this.textAreaStyle)==null?void 0:r.width,height:(i=this.textAreaStyle)==null?void 0:i.height}}>
                        <ecv-flex-row gap=${this.gap} ?reverseDirection=${t} flexAlign=${e} axisSize=${o}>
                            <label for="ecv-text-field">${this.label}</label>
                            <textarea rows=${Number(this.rows)} cols=${Number(this.columns)} placeholder=${this.hint} @change=${this.onChanged}></textarea>
                        </ecv-flex-row>
                    </ecv-box-decoration>`}_columnTextAreaBlock(t=!1,e="start",o="max"){var r,i;return u`<ecv-box-decoration .decoration=${{width:(r=this.textAreaStyle)==null?void 0:r.width,height:(i=this.textAreaStyle)==null?void 0:i.height}}>
                        <ecv-flex-column gap=${this.gap} ?reverseDirection=${t} flexAlign=${e} axisSize=${o}>
                            <label for="ecv-text-field">${this.label}</label>
                            <textarea rows=${Number(this.rows)} cols=${Number(this.columns)} placeholder=${this.hint} @change=${this.onChanged}></textarea>
                        </ecv-flex-column>
                    </ecv-box-decoration>`}_positionLabelRow(){switch(this.positionLabelRow){case 1:this._currentTextAreaBlock=this._rowTextAreaBlock(!0);break;case 2:this._currentTextAreaBlock=this._rowTextAreaBlock(!1,"end");break;case 3:this._currentTextAreaBlock=this._rowTextAreaBlock(!1,"start");break;case 4:this._currentTextAreaBlock=this._rowTextAreaBlock(!0,"end");break;case 5:this._currentTextAreaBlock=this._rowTextAreaBlock(!0,"start");break;default:this._currentTextAreaBlock=this._rowTextAreaBlock();break}return this._currentTextAreaBlock}_positionLabelColumn(){switch(this.positionLabelColumn){case 1:this._currentTextAreaBlock=this._columnTextAreaBlock(!0);break;case 2:this._currentTextAreaBlock=this._columnTextAreaBlock(!1,"start");break;case 3:this._currentTextAreaBlock=this._columnTextAreaBlock(!1,"end");break;case 4:this._currentTextAreaBlock=this._columnTextAreaBlock(!0,"start");break;case 5:this._currentTextAreaBlock=this._columnTextAreaBlock(!0,"end");break;default:this._currentTextAreaBlock=this._columnTextAreaBlock(!1,"center","min");break}return this._currentTextAreaBlock}};l([c({type:String})],U.prototype,"rows",2);l([c({type:String})],U.prototype,"columns",2);l([c({type:String})],U.prototype,"hint",2);l([c()],U.prototype,"gap",2);l([c()],U.prototype,"label",2);l([c({type:Boolean})],U.prototype,"resizeble",2);l([c({type:Number})],U.prototype,"positionLabelRow",2);l([c({type:Number})],U.prototype,"positionLabelColumn",2);l([c({attribute:!1})],U.prototype,"textAreaStyle",2);l([c({attribute:!1})],U.prototype,"hintSyle",2);l([c({attribute:!1})],U.prototype,"labelStyle",2);l([c({attribute:!1})],U.prototype,"textStyle",2);l([c({attribute:!1})],U.prototype,"onChanged",2);l([T()],U.prototype,"_currentTextAreaBlock",2);U=l([C("ecv-textarea")],U);var fi=Object.defineProperty,mi=Object.getOwnPropertyDescriptor,Le=(t,e,o,r)=>{for(var i=r>1?void 0:r?mi(e,o):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(i=(r?a(e,o,i):a(i))||i);return r&&i&&fi(e,o,i),i};let ke=class extends S{constructor(){super(...arguments),this.isOpenMenu=!1}static get styles(){return D`
            .container{
                display: flex;
                flex-direction: column;
                position: fixed;
                width: 100%;
                z-index: 2;
            }

            .menu,
            .menu__links{
                display: flex;
                align-items: center;
            }

            .menu{
                justify-content: space-evenly;
                background-color: var(--light-blue);
                border-bottom: 2px solid #fff;
            }

            h1{
                color: #fff;
                transition: transform 1s;
                font-family: PoppinsBold;
            }

            h1:hover{
                transform: scale(1.1);
            }

            .menu__icon{
                cursor: pointer;
            }

            .menu__links{
                display: none;
                gap: 20px;
            }

            .animation{
                width: 100%;
                clip-path: polygon(50% 0%, 100% 0, 100% 100%, 0 100%, 0 0);
                height: 179px;
                position: absolute;
                top: 77px;
            }

            .animation__links{
                display: flex;
                width: calc(100% - 14px);
                position: absolute;
                flex-direction: column;
                align-items: center;
                gap: 10px;
                transform: translateY(-200px);
                background-color: var(--light-blue);
                margin: 0;
                padding: 7px;
                z-index: 1;
            }

            @keyframes openMenuMobileAnimation{
                0%{
                    transform: translateY(-200px);
                }
                100%{
                    transform: translateY(0px);
                }
            }

            @keyframes closeMenuMobileAnimation{
                0%{
                    transform: translateY(0px);
                }
                10%{
                    transform: translateY(-20px);
                }
                100%{
                    transform: translateY(-200px);
                }
            }

            li{
                list-style: none;
            }

            a{
                color: #fff;
                text-decoration: none;
                cursor: pointer;
            }

            a:hover{
                color: var(--dark-blue);
            }

            @media (min-width: 1024px){
                .menu__icon{
                    display: none;
                }

                .menu__links{
                    display: flex;
                }
            }

        `}generateLinkMenu(t,e){return u`<li>
                        <a @click=${e}>${t}</a>
                    </li>`}openMenu(){this.isOpenMenu=!this.isOpenMenu,this.isOpenMenu?this._containerAnimationLinks.style.animation="openMenuMobileAnimation 700ms cubic-bezier(0, 0, 0.04, 1) forwards":this._containerAnimationLinks.style.animation="closeMenuMobileAnimation 700ms cubic-bezier(0, 0, 0.04, 1) forwards"}render(){return u`
            <div class="container">
                <nav class="menu">
                    <h1>Leonardo Leal</h1>
                    <div class="menu__icon" @click=${this.openMenu}>
                        <ecv-icon .icon=${je.Menu} .iconStyle=${{color:"#fff",size:"40px"}}></ecv-icon>
                    </div>
                    <ul class="menu__links">
                        ${this.generateLinkMenu("Home",()=>{var t;(t=this.referencePortfolio.lHome)==null||t.scrollIntoView({behavior:"smooth"})})}
                        ${this.generateLinkMenu("About Me",()=>{var t;(t=this.referencePortfolio.lAbout)==null||t.scrollIntoView({behavior:"smooth"})})}
                        ${this.generateLinkMenu("Projects",()=>{var t;(t=this.referencePortfolio.lProject)==null||t.scrollIntoView({behavior:"smooth"})})}
                        ${this.generateLinkMenu("Curriculum",()=>{var t;(t=this.referencePortfolio.lCurriculum)==null||t.scrollIntoView({behavior:"smooth"})})}
                        ${this.generateLinkMenu("Contact",()=>{var t;(t=this.referencePortfolio.lContact)==null||t.scrollIntoView({behavior:"smooth"})})}
                    </ul>
                </nav>

                <div class="animation">
                    <ul class="animation__links">
                        ${this.generateLinkMenu("Home",()=>{var t;(t=this.referencePortfolio.lHome)==null||t.scrollIntoView({behavior:"smooth"}),this.openMenu()})}
                        ${this.generateLinkMenu("About Me",()=>{var t;(t=this.referencePortfolio.lAbout)==null||t.scrollIntoView({behavior:"smooth"}),this.openMenu()})}
                        ${this.generateLinkMenu("Projects",()=>{var t;(t=this.referencePortfolio.lProject)==null||t.scrollIntoView({behavior:"smooth"}),this.openMenu()})}
                        ${this.generateLinkMenu("Curriculum",()=>{var t;(t=this.referencePortfolio.lCurriculum)==null||t.scrollIntoView({behavior:"smooth"}),this.openMenu()})}
                        ${this.generateLinkMenu("Contact",()=>{var t;(t=this.referencePortfolio.lContact)==null||t.scrollIntoView({behavior:"smooth"}),this.openMenu()})}
                    </ul>
                </div>
            </div>
        `}};Le([T()],ke.prototype,"isOpenMenu",2);Le([E(".animation__links")],ke.prototype,"_containerAnimationLinks",2);Le([c({attribute:!1})],ke.prototype,"referencePortfolio",2);ke=Le([C("l-menu")],ke);const So="/assets/me-K1MXJC9B.jpg",gi="/assets/github-mark-white-BsLkggKK.png",yi="/assets/LI-Logo-LVNV0rlE.png",bi="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20576%20512'%3e%3c!--!Font%20Awesome%20Free%206.7.2%20by%20@fontawesome%20-%20https://fontawesome.com%20License%20-%20https://fontawesome.com/license/free%20Copyright%202025%20Fonticons,%20Inc.--%3e%3cpath%20d='M288%20288h-32v-64h32v64zm288-128v192H288v32H160v-32H0V160h576zm-416%2032H32v128h64v-96h32v96h32V192zm160%200H192v160h64v-32h64V192zm224%200H352v128h64v-96h32v96h32v-96h32v96h32V192z'/%3e%3c/svg%3e";var _i=Object.getOwnPropertyDescriptor,vi=(t,e,o,r)=>{for(var i=r>1?void 0:r?_i(e,o):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(i=a(i)||i);return i};let ko=class extends S{static get styles(){return D`
            .home{
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                height: 100%;
                padding: 9rem 1rem 4rem 1rem;
                gap: 30px;
                background-color: var(--dark-blue);
                color: #fff;
            }

            .home__image{
                width: 300px;
                height: 300px;
                border-radius: 50%;
                background-repeat: no-repeat;
                background-size: cover;
                background-position: center;
                box-shadow: 2px 1px 134px -48px rgba(0,0,0,0.68);
            }

            .home__detail{
                display: flex;
                flex-direction: column;
                gap: 38px;
            }

            .detail__title{
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                gap: 10px;
            }

            .detail__title h1{
                margin: 0;
                font-family: PoppinsBlack;
                text-align: center;
            }

            .detail__title p{
                text-align: center;
                margin: 0;
                padding: 0;
                max-width: 700px;
            }

            .detail__assets{
                display: flex;
                justify-content: center;
                flex-wrap: wrap;
                gap: 20px;
            }

            .assets__logo{
                display: flex;
                align-items: center;
                gap: 10px;
                cursor: pointer;
                width: fit-content;
                padding: 8px;
                border-radius: 7px;
                transition: transform 1s;
                border: 1px solid var(--dark-blue);
            }

            .assets__logo:hover{
                transform: scale(1.1);
            }

            .assets__logo img{
                width: 55px;
                object-fit: cover;
            }

            @media (min-width: 1024px){
                .home{
                    align-items: center;
                    flex-direction: row;
                    justify-content: space-evenly;
                    gap: 30px;
                    padding: 1rem;
                    height: calc(100% + 75px);
                }

                .home__image{
                    width: 400px;
                    height: 400px;
                }
                
                .home__detail{
                    gap: 86px;
                }

                .detail__assets{
                    justify-content: flex-start;
                }
                
                .detail__title{
                    align-items: flex-start;
                }

                .detail__title h1{
                    font-family: PoppinsBlack;
                    font-size: 50px;
                }

                .detail__title p{
                    text-align: left;
                    font-size: 18px;
                }
            }

            @media (min-width: 1200px){
                .home{
                    gap: 0px;
                }
            }
        `}goToPage(t){window.open(t,"_blank")}generateAssets(t,e,o,r,i){return u`
            <div class="assets__logo" style="background-color: ${e}" @click=${()=>{this.goToPage(r)}}>
                ${i!=null?u`<img src=${i}>`:""}
                <img src=${t} style="width: ${o}">
            </div>
        `}render(){return u`        
            <style>
                .home__image{
                    background-image: url(${So});
                }
            </style>
            <div class="home">  
                <!-- <div class="home__image"></div> -->
                 <img class="home__image" src=${So}> 
                <div class="home__detail">
                    <div class="detail__title">
                        <h1>Desenvolvedor Web</h1>
                        <p>Construo interfaces modernas, rápidas e intuitivas, sempre focadas em performance, acessibilidade e boas práticas. Transformo ideias em projetos reais com código limpo, organização e atenção aos detalhes que fazem a diferença na experiência do usuário.</p>
                    </div>
                    <div class="detail__assets">
                        ${this.generateAssets(gi,"#000","43px","https://github.com/LeonardoLAraujo")}
                        ${this.generateAssets(yi,"#fff","123px","https://www.linkedin.com/in/leonardo-leal-ara%C3%BAjo-2653b91b9/")}
                        ${this.generateAssets(bi,"#fff","50px","https://www.npmjs.com/~leonardo_leal")}
                    </div>
                </div>
            </div>
        `}};ko=vi([C("l-home")],ko);const xi="/assets/pdf_icon-DxRu4FJM.png",Ao="/assets/curriculum-Bqy0u5v3.pdf";var $i=Object.defineProperty,wi=Object.getOwnPropertyDescriptor,Fo=(t,e,o,r)=>{for(var i=r>1?void 0:r?wi(e,o):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(i=(r?a(e,o,i):a(i))||i);return r&&i&&$i(e,o,i),i};let Ge=class extends S{constructor(){super(...arguments),this.body=document.querySelector("body")}static get styles(){return D`
            .curriculum{
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                height: 100%;
                gap: 20px;
            }

            .curriculum h1{
                color: #000;
                font-family: PoppinsBold;
            }

            .curriculum img{
                width: 180px;
                transition: transform 300ms;
            }

            .curriculum img:hover{
                transform: scale(1.05);
            }

            .curriculum__buttons{
                display: flex;
                width: 100%;
                flex-wrap: wrap;
                justify-content: center;
                gap: 10px;
            }

            button{
                width: 200px;
                font-family: PoppinsLight;
                border: none;
                font-size: 22px;
                padding: 5px 1.2rem 5px 1.2rem;
                cursor: pointer;
                color: #fff;
                border-radius: 4px;
                box-shadow: 2px 1px 119px 2px rgba(0,0,0,0.48);
            }

            .buttons__view{
                background-color: var(--dark-orange);
            }

            .buttons__view:hover{
                background-color: var(--light-orange);
            }

            .buttons__download{
                background-color: var(--light-blue);
            }

            .buttons__download:hover{
                background-color: var(--blue);
            }

            .modal{
                position: fixed;
                top: 0;
                background-color: #0000009d;
                height: 100%;
                width: calc(100% - 64px);
                display: none;
                flex-direction: column;
                gap: 10px;
                align-items: center;
                padding: 1rem 2rem 2rem 2rem;
                z-index: 3;
            }

            .modal__close{
                display: flex;
                justify-content: center;
                align-items: center;
                width: 40px;
                height: 40px;
                background-color: var(--light-blue);
                border-radius: 50%;
                cursor: pointer;
                align-self: flex-end;
                box-shadow: 2px 1px 134px -48px rgba(0,0,0,0.68);
            }

            .modal__close:hover{
                background-color: var(--dark-blue);
            }

            iframe{
                width: 90%;
                height: 90%;
                padding-bottom: 1rem;
            }

            @media (min-width: 1024px){
                .curriculum{
                    height: calc(100% + 75px);
                }

                .curriculum h1{
                    font-size: 50px;
                }
            }
        `}openModalView(){this.body.style.overflow="hidden",this.modal.style.display="flex"}closeModalView(){this.body.style.overflowY="auto",this.modal.style.display="none"}viewCurriculum(){return u`
            <div class="modal">
                <div class="modal__close" @click=${this.closeModalView}>
                    <ecv-icon .icon=${je.Close} .iconStyle=${{color:"#fff",size:"30px"}}></ecv-icon>
                </div>
                <iframe src=${Ao} frameborder="0" scrolling="no" marginheight="0"></iframe>
            </div>
        `}render(){return u`
            <div class="curriculum" id="curriculum">
                <h1>Currículo</h1>
                <img src=${xi}>
                <div class="curriculum__buttons">
                    <button class="buttons__view" @click=${this.openModalView}>Visualizar</button>
                    <a href=${Ao} download="Curriculo-Leonardo-Leal.pdf">
                        <button class="buttons__download">Baixar</button>
                    </a>
                </div>
            </div>

            ${this.viewCurriculum()}
        `}};Fo([E(".modal")],Ge.prototype,"modal",2);Ge=Fo([C("l-curriculum")],Ge);var Si=Object.defineProperty,ki=Object.getOwnPropertyDescriptor,Uo=(t,e,o,r)=>{for(var i=r>1?void 0:r?ki(e,o):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(i=(r?a(e,o,i):a(i))||i);return r&&i&&Si(e,o,i),i};let We=class extends S{static get styles(){return D`
            p{
                margin: 0;
            }

            .card,
            .card__detail,
            .detail__information{
                display: flex;
                flex-direction: column;
                gap: 10px;
            }

            .card{
                background-color: var(--dark-blue);
                border-radius: 5px;
                padding: 1rem;
                color: #fff;
                font-family: PoppinsLight;
                box-shadow: 0px 2px 27px -7px rgba(0,0,0,0.48);
            }   

            .card__detail{
                gap: 20px;
            }

            .card__time{
                display: flex;
                gap: 10px;
            
            }

            .card__time p{
                color: #bebebe;
                font-family: PoppinsBold;
            }

            .information__title{
                font-size: 20px;
            }

            .information__description{
                font-size: 15px;
            }
            
            .detail__technology{
                display: flex;
                flex-wrap: wrap;
                gap: 10px;
            }

            .technology__tag{
                background-color: var(--light-blue);
                padding: 4px;
                border-radius: 10px;
                font-size: 14px;
                cursor: default;
                box-shadow: 0px 2px 27px -7px rgba(0,0,0,0.48);
            }

            .technology__tag:hover{
                background-color: #fff;
                color: var(--dark-blue);
            }

            @media (min-width: 748px){
                .card{
                    width: 542px;
                }
            }

            @media (min-width: 1024px){
                .card{
                    width: 600px;
                    flex-direction: row;
                    gap: 30px;
                    transition: transform 400ms;
                }

                 .card:hover{
                    transform: scale(1.02);
                }
                
                .card__time p{
                    text-align: center;
                }
            }

        `}generateTechnology(){var t;return(t=this.card.technology)==null?void 0:t.map(e=>u`<div class="technology__tag">${e}</div>`)}render(){return u`
            <div class="card">
                <div class="card__time">
                    <p>${this.card.yearStart}</p>
                    <p>-</p>
                    ${this.card.yearEnd==null?u`<p>Atualmente</p>`:u`<p>${this.card.yearEnd}</p>`}
                </div>
                <div class="card__detail">
                    <div class="detail__information">
                        <p class="information__title">${this.card.title}</p>
                        ${this.card.description!=null?u`<p class="information__description">
                                    ${this.card.description}
                                </p>`:""}
                    </div>
                    <div class="detail__technology">
                        ${this.generateTechnology()}
                    </div>
                </div>
            </div>
        `}};Uo([c({attribute:!1})],We.prototype,"card",2);We=Uo([C("l-card-about")],We);const Ai={education:[{title:"Pós-graduação em Data Science e Analytics (Cursando)",yearStart:"2025",description:`Pós-graduação voltada para ciência de dados, análise estatística, inteligência artificial, 
                        machine learning, visualização de dados e tomada de decisão baseada em dados.`},{title:"Tecnólogo em Análise e Desenvolvimento de Sistemas",yearStart:"2020",yearEnd:"2023",description:`Curso superior focado em desenvolvimento de software, 
                        incluindo programação, bancos de dados, engenharia de software e arquitetura de sistemas.`},{title:"Bacharelado em Ciência da Computação",yearStart:"2020",yearEnd:"2023",description:`Graduação que aborda fundamentos teóricos e práticos da computação, 
                        como algoritmos, estruturas de dados, programação orientada a objetos,
                        inteligência artificial e banco de dados`},{title:"Técnico Em Manutenção E Suporte Em Informática",yearStart:"2019",yearEnd:"2021",description:`Curso técnico que forma profissionais para instalar, configurar e realizar manutenção de computadores e redes, 
                        além de prestar suporte técnico a usuários e empresas.`}],experience:[{title:"Desenvolvedor Web",yearStart:"Julho 2024",description:`Atuo no desenvolvimento de sistemas completos, criando dashboards, aplicações web 
            e participando da implementação de projetos de desenvolvimento de jogos. Trabalho com front-end 
            baseado nos designs da equipe de designers e também com back-end e banco de dados, evoluindo 
            como Full Stack. Desenvolvo seguindo os princípios de orientação a objetos para garantir 
            organização e manutenibilidade do código.`,technology:["Typescript","Mysql","Lit Element","Node JS","Socket Io","PHP"]},{title:"Estagiário em Desenvolvimento Web – Front End",yearStart:"Fevereiro 2023",yearEnd:"Julho 2024",description:`Atuei no desenvolvimento de projetos front-end com foco em Web Components e 
                        TypeScript, aplicando orientação a objetos para garantir modularidade e 
                        manutenibilidade do código. Desenvolvi uma biblioteca própria de Web Components 
                        para padronizar interfaces, otimizar a performance e acelerar o desenvolvimento de 
                        aplicações web.`,technology:["Javascript","Typescript","Babylon","Lit Element","Node JS"]}]};var Ci=Object.getOwnPropertyDescriptor,Pi=(t,e,o,r)=>{for(var i=r>1?void 0:r?Ci(e,o):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(i=a(i)||i);return i};let Co=class extends S{constructor(){super(...arguments),this._dataAboutMe=Ai}static get styles(){return D`
            .about{
                display: flex;
                flex-direction: column;
                padding: 4rem 1rem 2rem 1rem;
                gap: 20px;
            }

            .about h1{
                font-size: 40px;
                margin: 0;
                font-family: PoppinsBlack;
            }

            .about__me p{
                text-align: left;
            }

            p{
                margin: 0;
                margin: 0;
            }

             .about__detail{
                display: flex;
                flex-direction: column;
                gap: 20px;
            }

            .detail__education,
            .detail__experience{
                display: flex;
                flex-direction: column;
                gap: 30px;
            }

            .detail__education h2,
            .detail__experience h2{  
                font-size: 30px;
                margin: 0;
                padding: 0;
            }

            .education__cards,
            .experience__cards{
                display: flex;
                flex-direction: column;
                gap: 10px;
            }

            @media (min-width: 1024px){
                .about{
                    padding: 5rem 1rem 2rem 1rem;
                }
                .about__detail{
                    flex-direction: row;
                    flex-wrap: wrap;
                    justify-content: space-around;
                    gap: 20px;
                }

                .about__me{
                    margin-bottom: 1rem;
                }

                .about__me p{
                    max-width: 80%;
                    font-size: 18px;
                }

            }
        `}generateEducationCard(){return this._dataAboutMe.education.map(t=>u`<l-card-about .card=${t}></l-card-about>`)}generateExperienceCard(){return this._dataAboutMe.experience.map(t=>u`<l-card-about .card=${t}></l-card-about>`)}render(){return u`
            <div class="about">
                <h1>Sobre Mim</h1>
                <div class="about__me">
                    <p>Profissional com graduação em Ciência da Computação e em Análise e Desenvolvimento de Sistemas, 
                        atualmente cursando pós-graduação em Data Science e Analytics. Possuo 2 anos de experiência em 
                        desenvolvimento web, sempre atuando com comprometimento, foco em resultados e constante busca
                        por atualização e aprimoramento técnico para entregar soluções de qualidade.</p>
                </div>
                <div class="about__detail">
                    <div class="detail__education">
                        <h2>Formação</h2>
                        <div class="education__cards">
                            ${this.generateEducationCard()}
                        </div>
                    </div>
                    <div class="detail__experience">
                        <h2>Experiência</h2>
                        <div class="experience__cards">
                            ${this.generateExperienceCard()}
                        </div>
                    </div>
                </div>
            </div>
        `}};Co=Pi([C("l-about")],Co);function Ei(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var He={exports:{}},w={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Po;function Vi(){if(Po)return w;Po=1;var t=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),i=Symbol.for("react.profiler"),n=Symbol.for("react.consumer"),a=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),f=Symbol.for("react.memo"),m=Symbol.for("react.lazy"),g=Symbol.iterator;function V(s){return s===null||typeof s!="object"?null:(s=g&&s[g]||s["@@iterator"],typeof s=="function"?s:null)}var v={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},P=Object.assign,j={};function z(s,d,y){this.props=s,this.context=d,this.refs=j,this.updater=y||v}z.prototype.isReactComponent={},z.prototype.setState=function(s,d){if(typeof s!="object"&&typeof s!="function"&&s!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,s,d,"setState")},z.prototype.forceUpdate=function(s){this.updater.enqueueForceUpdate(this,s,"forceUpdate")};function N(){}N.prototype=z.prototype;function L(s,d,y){this.props=s,this.context=d,this.refs=j,this.updater=y||v}var M=L.prototype=new N;M.constructor=L,P(M,z.prototype),M.isPureReactComponent=!0;var H=Array.isArray,k={H:null,A:null,T:null,S:null,V:null},F=Object.prototype.hasOwnProperty;function q(s,d,y,b,A,O){return y=O.ref,{$$typeof:t,type:s,key:d,ref:y!==void 0?y:null,props:O}}function J(s,d){return q(s.type,d,void 0,void 0,void 0,s.props)}function Y(s){return typeof s=="object"&&s!==null&&s.$$typeof===t}function K(s){var d={"=":"=0",":":"=2"};return"$"+s.replace(/[=:]/g,function(y){return d[y]})}var X=/\/+/g;function G(s,d){return typeof s=="object"&&s!==null&&s.key!=null?K(""+s.key):d.toString(36)}function tt(){}function et(s){switch(s.status){case"fulfilled":return s.value;case"rejected":throw s.reason;default:switch(typeof s.status=="string"?s.then(tt,tt):(s.status="pending",s.then(function(d){s.status==="pending"&&(s.status="fulfilled",s.value=d)},function(d){s.status==="pending"&&(s.status="rejected",s.reason=d)})),s.status){case"fulfilled":return s.value;case"rejected":throw s.reason}}throw s}function W(s,d,y,b,A){var O=typeof s;(O==="undefined"||O==="boolean")&&(s=null);var $=!1;if(s===null)$=!0;else switch(O){case"bigint":case"string":case"number":$=!0;break;case"object":switch(s.$$typeof){case t:case e:$=!0;break;case m:return $=s._init,W($(s._payload),d,y,b,A)}}if($)return A=A(s),$=b===""?"."+G(s,0):b,H(A)?(y="",$!=null&&(y=$.replace(X,"$&/")+"/"),W(A,d,y,"",function(bt){return bt})):A!=null&&(Y(A)&&(A=J(A,y+(A.key==null||s&&s.key===A.key?"":(""+A.key).replace(X,"$&/")+"/")+$)),d.push(A)),1;$=0;var Q=b===""?".":b+":";if(H(s))for(var R=0;R<s.length;R++)b=s[R],O=Q+G(b,R),$+=W(b,d,y,O,A);else if(R=V(s),typeof R=="function")for(s=R.call(s),R=0;!(b=s.next()).done;)b=b.value,O=Q+G(b,R++),$+=W(b,d,y,O,A);else if(O==="object"){if(typeof s.then=="function")return W(et(s),d,y,b,A);throw d=String(s),Error("Objects are not valid as a React child (found: "+(d==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":d)+"). If you meant to render a collection of children, use an array instead.")}return $}function I(s,d,y){if(s==null)return s;var b=[],A=0;return W(s,b,"","",function(O){return d.call(y,O,A++)}),b}function gt(s){if(s._status===-1){var d=s._result;d=d(),d.then(function(y){(s._status===0||s._status===-1)&&(s._status=1,s._result=y)},function(y){(s._status===0||s._status===-1)&&(s._status=2,s._result=y)}),s._status===-1&&(s._status=0,s._result=d)}if(s._status===1)return s._result.default;throw s._result}var at=typeof reportError=="function"?reportError:function(s){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var d=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof s=="object"&&s!==null&&typeof s.message=="string"?String(s.message):String(s),error:s});if(!window.dispatchEvent(d))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",s);return}console.error(s)};function yt(){}return w.Children={map:I,forEach:function(s,d,y){I(s,function(){d.apply(this,arguments)},y)},count:function(s){var d=0;return I(s,function(){d++}),d},toArray:function(s){return I(s,function(d){return d})||[]},only:function(s){if(!Y(s))throw Error("React.Children.only expected to receive a single React element child.");return s}},w.Component=z,w.Fragment=o,w.Profiler=i,w.PureComponent=L,w.StrictMode=r,w.Suspense=p,w.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=k,w.__COMPILER_RUNTIME={__proto__:null,c:function(s){return k.H.useMemoCache(s)}},w.cache=function(s){return function(){return s.apply(null,arguments)}},w.cloneElement=function(s,d,y){if(s==null)throw Error("The argument must be a React element, but you passed "+s+".");var b=P({},s.props),A=s.key,O=void 0;if(d!=null)for($ in d.ref!==void 0&&(O=void 0),d.key!==void 0&&(A=""+d.key),d)!F.call(d,$)||$==="key"||$==="__self"||$==="__source"||$==="ref"&&d.ref===void 0||(b[$]=d[$]);var $=arguments.length-2;if($===1)b.children=y;else if(1<$){for(var Q=Array($),R=0;R<$;R++)Q[R]=arguments[R+2];b.children=Q}return q(s.type,A,void 0,void 0,O,b)},w.createContext=function(s){return s={$$typeof:a,_currentValue:s,_currentValue2:s,_threadCount:0,Provider:null,Consumer:null},s.Provider=s,s.Consumer={$$typeof:n,_context:s},s},w.createElement=function(s,d,y){var b,A={},O=null;if(d!=null)for(b in d.key!==void 0&&(O=""+d.key),d)F.call(d,b)&&b!=="key"&&b!=="__self"&&b!=="__source"&&(A[b]=d[b]);var $=arguments.length-2;if($===1)A.children=y;else if(1<$){for(var Q=Array($),R=0;R<$;R++)Q[R]=arguments[R+2];A.children=Q}if(s&&s.defaultProps)for(b in $=s.defaultProps,$)A[b]===void 0&&(A[b]=$[b]);return q(s,O,void 0,void 0,null,A)},w.createRef=function(){return{current:null}},w.forwardRef=function(s){return{$$typeof:h,render:s}},w.isValidElement=Y,w.lazy=function(s){return{$$typeof:m,_payload:{_status:-1,_result:s},_init:gt}},w.memo=function(s,d){return{$$typeof:f,type:s,compare:d===void 0?null:d}},w.startTransition=function(s){var d=k.T,y={};k.T=y;try{var b=s(),A=k.S;A!==null&&A(y,b),typeof b=="object"&&b!==null&&typeof b.then=="function"&&b.then(yt,at)}catch(O){at(O)}finally{k.T=d}},w.unstable_useCacheRefresh=function(){return k.H.useCacheRefresh()},w.use=function(s){return k.H.use(s)},w.useActionState=function(s,d,y){return k.H.useActionState(s,d,y)},w.useCallback=function(s,d){return k.H.useCallback(s,d)},w.useContext=function(s){return k.H.useContext(s)},w.useDebugValue=function(){},w.useDeferredValue=function(s,d){return k.H.useDeferredValue(s,d)},w.useEffect=function(s,d,y){var b=k.H;if(typeof y=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return b.useEffect(s,d)},w.useId=function(){return k.H.useId()},w.useImperativeHandle=function(s,d,y){return k.H.useImperativeHandle(s,d,y)},w.useInsertionEffect=function(s,d){return k.H.useInsertionEffect(s,d)},w.useLayoutEffect=function(s,d){return k.H.useLayoutEffect(s,d)},w.useMemo=function(s,d){return k.H.useMemo(s,d)},w.useOptimistic=function(s,d){return k.H.useOptimistic(s,d)},w.useReducer=function(s,d,y){return k.H.useReducer(s,d,y)},w.useRef=function(s){return k.H.useRef(s)},w.useState=function(s){return k.H.useState(s)},w.useSyncExternalStore=function(s,d,y){return k.H.useSyncExternalStore(s,d,y)},w.useTransition=function(){return k.H.useTransition()},w.version="19.1.0",w}var Eo;function Oi(){return Eo||(Eo=1,He.exports=Vi()),He.exports}var Ri=Oi();const zi=Ei(Ri);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ji=new Set(["children","localName","ref","style","className"]),Vo=new WeakMap,Oo=(t,e,o,r,i)=>{const n=i==null?void 0:i[e];n===void 0?(t[e]=o,o==null&&e in HTMLElement.prototype&&t.removeAttribute(e)):o!==r&&((a,h,p)=>{let f=Vo.get(a);f===void 0&&Vo.set(a,f=new Map);let m=f.get(h);p!==void 0?m===void 0?(f.set(h,m={handleEvent:p}),a.addEventListener(h,m)):m.handleEvent=p:m!==void 0&&(f.delete(h),a.removeEventListener(h,m))})(t,n,o)},Li=({react:t,tagName:e,elementClass:o,events:r,displayName:i})=>{const n=new Set(Object.keys(r??{})),a=t.forwardRef((h,p)=>{const f=t.useRef(new Map),m=t.useRef(null),g={},V={};for(const[v,P]of Object.entries(h))ji.has(v)?g[v==="className"?"class":v]=P:n.has(v)||v in o.prototype?V[v]=P:g[v]=P;return t.useLayoutEffect(()=>{if(m.current===null)return;const v=new Map;for(const P in V)Oo(m.current,P,h[P],f.current.get(P),r),f.current.delete(P),v.set(P,h[P]);for(const[P,j]of f.current)Oo(m.current,P,void 0,j,r);f.current=v}),t.useLayoutEffect(()=>{var v;(v=m.current)==null||v.removeAttribute("defer-hydration")},[]),g.suppressHydrationWarning=!0,t.createElement(e,{...g,ref:t.useCallback(v=>{m.current=v,typeof p=="function"?p(v):p!==null&&(p.current=v)},[p])})});return a.displayName=i??o.name,a};var Mi=Object.defineProperty,Bi=Object.getOwnPropertyDescriptor,_=(t,e,o,r)=>{for(var i=r>1?void 0:r?Bi(e,o):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(i=(r?a(e,o,i):a(i))||i);return r&&i&&Mi(e,o,i),i},At=class extends S{constructor(){super(...arguments),this.filled=!1,this.size=24,this.color="black"}connectedCallback(){super.connectedCallback(),this.ensureFontLoaded()}ensureFontLoaded(){if(!document.getElementById("material-symbols-font")){const t=document.createElement("link");t.id="material-symbols-font",t.rel="stylesheet",t.href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,1,0",document.head.appendChild(t)}}hiddenIcon(){this.style.display="none"}showIcon(){this.style.display="block"}render(){return u`
            <style>

                .material-symbols-outlined{
                    font-variation-settings:
                     'FILL' 1,
                    'wght' 700,
                    'GRAD' 0,
                    'opsz' 24;
                    font-size: ${this.size}px!important;
                    color: ${this.color};
                }

            </style>
            <span class="material-symbols-outlined">${this.icon}</span>
        `}};At.styles=[D`

            @font-face {
                font-family: 'Material Symbols Outlined';
                font-style: normal;
                font-weight: 100 700;
                font-display: block;
                src: url(../fonts/MaterialIcons/material_symbols.woff2) format('woff2');
            }

            :host{
                display: block;
                width: fit-content;
                box-sizing: border-box;
                margin: 0;
                padding: 0;
                -webkit-user-select: none;
                user-select: none;
            }
    
            .material-symbols-outlined {
                font-family: 'Material Symbols Outlined';
                font-weight: normal;
                font-style: normal;
                font-size: 24px;
                line-height: 2;
                letter-spacing: normal;
                text-transform: none;
                display: inline-block;
                white-space: nowrap;
                word-wrap: normal;
                direction: ltr;
                -webkit-font-feature-settings: 'liga';
                font-feature-settings: "liga";
                -webkit-font-smoothing: antialiased;
                user-select: none;
                -webkit-user-select: none;
            }
        `];_([c({attribute:!1})],At.prototype,"icon",2);_([c({type:Boolean})],At.prototype,"filled",2);_([c({type:Number})],At.prototype,"size",2);_([c()],At.prototype,"color",2);At=_([C("lit-youtube-icon")],At);var Ro=3600,x=class extends S{constructor(){if(super(),this._videoDoId="",this._isPlaying=!1,this._muted=!1,this._fullScreen=!0,this._numberProgressBar=0,this._openControllerPlayer=!1,this._activeSubtitle=!1,this._playbackNumber=1,this._playerbackQuality="auto",this._isOpenOptions=!1,this.video="",!document.querySelector('script[src="https://www.youtube.com/iframe_api"]')){const t=document.createElement("script");t.src="https://www.youtube.com/iframe_api";const e=document.getElementsByTagName("script")[0];e.parentNode.insertBefore(t,e)}window._youtubeApiReadySet||(window.onYouTubeIframeAPIReady=()=>{document.dispatchEvent(new CustomEvent("YouTubeIframeAPIReady"))},window._youtubeApiReadySet=!0),document.addEventListener("YouTubeIframeAPIReady",()=>{this.onYouTubeIframeAPIReady()})}static get styles(){return D`
            :host{
                display: inline-block;
                width: 100%;
                height: 100%;
                position: relative;
            }

            .connectionVideo{
                width: 100%;
                height: 100%;
                position: relative;
                display: flex;
                align-items: center;
                justify-content: center;
            }

            .connectionVideo__fade{
                width: 100%;
                height: 100%;
                position: absolute;
                background-color: transparent;
                opacity: 0.7;
                z-index: 2;
            }

            #player{
                width: 100%;
                height: 100%;
            }

            .connectionVideo__players{
                width: 100%;
                height: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                position: absolute;
                top: 0;
                right: 50;
            }

            .players__pauseVideo{
                display: none;
            }

            .player__icon{
                width: 160px;
                height: 160px;
                background: linear-gradient(to top, #d7e4ff, transparent);;
                border-radius: 50%;
                display: flex;
                justify-content: center;
                align-items: center;
                box-shadow: 4px 2px 98px 5px rgba(0,0,0,0.75);
                cursor: pointer;
            }

            .connectionVideo__animationControls{
                position: absolute;
                bottom: 0;
                width: 100%;
                height: 80px;
                border: 0;
                clip-path: polygon(0 0, 100% 0%, 100% 100%, 0% 100%);
                z-index: 3;
            }

            .connectionVideo__controls{
                position: absolute;
                bottom: 0;
                background-color: var(--cinza);
                width: 100%;
                display: flex;
                align-items: center;
                justify-content: space-between;
                border: 1px solid var(--cinza);
            }

            .players__playerVideo,
            .players__pauseVideo{
                z-index: 2;
            }

            .controls__container{
                display: flex;
                align-items: center;
                width: 100%;
            }

            .controls__fullscreen{
                display: flex;
            }

            .controls__fullscreen,
            .controls__container{
                background-color: #000000dc;
            }

            .control__volume{
                display: none; 
            }

            lit-youtube-icon{
                margin: 0rem 1rem 0rem 1rem;
                cursor: pointer;
            }

            .container__pauseVideo{
                display: none;
            }
            

            .players__progressVideo{
                width: 100%;
                background-color: #fff;
                height: 8px;
                border-radius: 0px;
                cursor: pointer;
                position: absolute;
                bottom: 60px;
                z-index: 2;
            }

            .progressVideo__timer{
                position: relative;
                width: 0.1%;


                transition: width cubic-bezier(0.95, 0.05, 0.795, 0.035);
                height: 100%;
                background-color: #E11111;
                max-width: 100%;
            }

            .timer__circle{
                display: none;
                width: 15px;
                height: 15px;
                position: absolute;
                background-color: red;
                border-radius: 50%;
                bottom: -3px;
                left: -1px;
            }

            .container__duration{
                color: #fff;
                margin-left: 10px;
                font-size: 14px;
            }

            span{
                font-family: PoppinsRegular, sans-serif;
            }


            .settingsVideo{
                display: none;
                flex-direction: column;
                width: 100%;
                align-items: flex-end;
                justify-content: flex-end;
                position: fixed;
                bottom: 0;
                z-index: 3;
            }

            .settingsVideo__legend{
                border-top-left-radius: 6px;
            }

            .settingsVideo__quality{
                border-bottom-right-radius: 6px;
            }

            .settingsVideo__legend,
            .settingsVideo__reproduction,
            .settingsVideo__quality{
                width: 100%;
                display: flex;
                justify-content: space-between;
                background-color: #000000dc;
                color: #fff;
                cursor: pointer;
                font-family: PoppinsRegular, sans-serif;
                z-index: 55; 
            }

            .settingsVideo__legend:hover,
            .settingsVideo__reproduction:hover,
            .settingsVideo__quality:hover{
                background-color: #272424f4;
             
            }

            .reproduction__options{
                width: 100%;
                background-color: #000000dc;
                display: none;
            }

            .playbackSpeed{
                cursor: pointer;
                padding: 0.5rem 1rem 0.5rem 2rem;
              
                color: #fff;
                transition: background-color 300ms cubic-bezier(0.645, 0.045, 0.355, 1);
                font-family: PoppinsRegular, sans-serif;
            }

            .playbackSpeed[speed="1"]{
                background-color: #E11111;
            }

            .playbackSpeed:hover{
                background-color: #353a45;
            }

            .options__reproduction{
                display: none;
                width: 100%;
            }

            .options__quality{
                width: 100%;
            }

            .quality{
                color: #fff;
                cursor: pointer;
                padding: 0.5rem 1rem 0.5rem 2rem;
                background-color: #000000dc;
                transition: background-color 300ms cubic-bezier(0.645, 0.045, 0.355, 1);
                font-family: PoppinsRegular, sans-serif;
            }

            .quality:hover{
                background-color: #353a45;
            }

            .quality[quality="auto"]{
                background-color: #E11111;
            }

            .fade{
                width: 100%;
                height: 100%;
                position: fixed;
                background-color: #000000dc;
                top: 0;
                z-index: 3;
                display: none;
            }

            @media (min-width: 1024px){
                .settingsVideo{
                    display: none;
                    flex-direction: column;
                    width: 26%;
                    position: absolute;
                    align-items: flex-end;
                    bottom: 4.8rem;
                    z-index: 2;
                    right: 0.5rem;
                }

                .settingsVideo__legend,
                .settingsVideo__reproduction,
                .settingsVideo__quality{
                    width: 100%;
                    display: flex;
                    justify-content: space-between;
                    background-color: #000000dc;
                    color: #fff;
                    cursor: pointer;
                    font-family: PoppinsRegular, sans-serif;
                    z-index: 5; 
                    padding-left: 1rem;
                    
                }

                .fade{
                    position: absolute;
                    z-index: 2;
                }

                .options__reproduction{
                    width: 100%;
                }

                .options__quality{
                    width: 100%;
                }
                
                /**Volume do Controle */
                .control__volume{
                    display: flex;
                    align-items: center;
                    position: relative;
                }

                .control__volume input{
                    display: block;
                    cursor: pointer;
                    width: 65px;
                    height: 3px;
                    margin-left: -0.70rem;
                    border: none;
                    -webkit-appearance: none;
                    appearance: none;
                    position: relative;
                    outline: none;
                    background-color: transparent;
                    z-index: 2;
                }

                /**Bolinha do Input */
                .control__volume input::-webkit-slider-thumb{
                    -webkit-appearance: none;
                    appearance: none;
                    width: 12px;
                    height: 12px;
                    border-radius: 50%;
                    background-color: #fff;
                    box-shadow: 0 0 0 0 black;
                }

                .progressAudio{
                    display: block;
                    position: absolute;
                    width: 60px;
                    height: 3px;
                    z-index: 1;
                    background: linear-gradient(to top, var(--preto), transparent);
                    left: 2.9rem;
                    overflow: hidden;
                }

                .progressAudioFill{
                    display: block;
                    width: 20%;
                    height: 100%;
                    background-color: #fff;
                }

                .animationAudioVideo{
                    display: flex;
                    align-items: center;
                    height: 20px;
            
                }
                
                #playerVideo:fullscreen .connectionVideo{
                    width: 100vw;
                    height: 100vh;
                }

                .connectionVideo__controls{
                    transform: translateX(400px);
                    animation: animationControl 400ms cubic-bezier(0, 0, 0.04, 1) forwards;
                }
                    
                @keyframes animationControl{
                    0%{
                        transform: translateY(400px);
                    }
                    100%{
                        transform: translateY(0px);
                    }
                }
                
            }
        `}firstUpdated(){this._videoDoId=this._youTubeGetID(this.video),this.controlFillVolumeAudio(),this.iconPlayerVolumeCurrent()}onYouTubeIframeAPIReady(){try{window.YT.ready(()=>{this._player=new window.YT.Player(this._containerPlayer,{videoId:this._videoDoId,playerVars:{cc_load_policy:this._activeSubtitle?1:0,modestbranding:1,rel:0,showinfo:0,playersinline:0,autoplay:0,controls:0,disablekb:1,fs:1,loop:0,allowfullscreen:1,enablejsapi:1,hl:"pt-br",cc_lang_pref:"pt-br"},events:{onReady:this.onPlayerReady.bind(this)}}),window.player=this._player})}catch(t){console.log(t)}}onPlayerReady(t){this.durationEnd.textContent=this.durationEndVideo(t.target.playerInfo.duration),window.addEventListener("message",()=>{this.progressVideoTimer.style.width=`${this.progressBarVideo.clientWidth*(this._player.playerInfo.currentTime/(t.target.playerInfo.duration-1))}px`,this.durationEnd.textContent=this.durationEndVideo(t.target.playerInfo.duration),this.durationStart.textContent=this.durationStartVideo(t.target.playerInfo.currentTime),this._player.setPlaybackRate(this._playbackNumber),this._player.setPlaybackQuality(this._playerbackQuality)})}setUrlVideo(t,e=0){this._videoDoId=this._youTubeGetID(t),this._player.loadVideoById(this._videoDoId,e),this._player.clearVideo(),this.hiddenContainerPauseVideoAndShowContainerPlayerVideo()}_youTubeGetID(t){let e="",o,r,i,n;return n=new RegExp(new RegExp("(?<=list=).*(?=[\\&])|(?<=list=).*"),"gi"),i=t.search(n),i!=-1?t.includes("&",i)?e=t.substring(t.search(n),t.lastIndexOf("&")):e=t.substring(t.search(n),t.lastIndexOf("")):(r=t.replace(/(>|<)/gi,"").split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/),r[2]!==void 0?(o=r[2].split(/[^0-9a-z_\-]/i),e=o[0]):e=t),e}hiddenOptions(){this.settingsVideoReproducation.style.display="none",this.settingsVideoQuality.style.display="none",this.caption.style.display="none"}openOptions(){this.settingsVideoReproducation.style.display="flex",this.settingsVideoQuality.style.display="flex",this.caption.style.display="flex"}stateIsPlaying(){return this._isPlaying=!this._isPlaying}playerVideo(){this.currentContainerPlayer(),this._player.playVideo()}pauseVideo(){this.currentContainerPlayer(),this._player.pauseVideo()}stopVideo(){this._isPlaying=!1,this._player.pauseVideo(),this.hiddenContainerPauseVideoAndShowContainerPlayerVideo()}hiddenContainerPlayerVideoAndShowPauseVideo(){this._containerPlayerVideo.style.display="none",this.containerPlayerVideo.style.display="none",this._containerPauseVideo.style.display="flex",this.containerPauseVideo.style.display="flex"}hiddenContainerPauseVideoAndShowContainerPlayerVideo(){this._containerPlayerVideo.style.display="flex",this.containerPlayerVideo.style.display="flex",this._containerPauseVideo.style.display="none",this.containerPauseVideo.style.display="none"}currentContainerPlayer(){this._isPlaying?this.hiddenContainerPlayerVideoAndShowPauseVideo():this.hiddenContainerPauseVideoAndShowContainerPlayerVideo()}onMouseLeave(){this._containerPlayers.style.display="none",this.containerControls.style.display="none",this._isOpenOptions=!1,this.closeOptions()}onMouseOver(){this._containerPlayers.style.display="flex",this.containerControls.style.display="flex"}durationEndVideo(t){return t<Ro?new Date(t*1e3).toISOString().slice(14,19):new Date(t*1e3).toISOString().slice(11,19)}durationStartVideo(t){return t<Ro?new Date(t*1e3).toISOString().slice(14,19):new Date(t*1e3).toISOString().slice(11,19)}controlFillVolumeAudio(){var t,e;((t=this.progressAudioFill)==null?void 0:t.style)==null||((e=this.progressAudioFill)==null?void 0:e.style)==null||(this.progressAudioFill.style.width=`${this.audioVolume.value}%`)}stateMute(){return this._muted=!this._muted}iconPlayerVolumeCurrent(){var t,e,o,r,i;((t=this.audioVolume)==null?void 0:t.value)<=String(0)?this.volumeIcon.icon="no_sound":((e=this.audioVolume)==null?void 0:e.value)>String(0)&&((o=this.audioVolume)==null?void 0:o.value)<=String(65)?this.volumeIcon.icon="volume_down":(((r=this.audioVolume)==null?void 0:r.value)>String(70)||((i=this.audioVolume)==null?void 0:i.value)==String(100))&&(this.volumeIcon.icon="volume_up")}muteVolume(){this.stateMute(),this._muted?(this._player.mute(),this.audioVolume.value="0"):(this._player.unMute(),this.audioVolume.value="50"),this.controlFillVolumeAudio(),this.iconPlayerVolumeCurrent()}controlVolumeAudioVideo(){this._player.isMuted()?this.muteVolume():this.audioVolume.value,this.audioVolume.value<="0"&&this.muteVolume(),this.controlFillVolumeAudio(),this.iconPlayerVolumeCurrent(),this._player.setVolume(Number(this.audioVolume.value))}stateFullScreen(){return this._fullScreen=!this._fullScreen}fullScreen(){this.stateFullScreen(),this._fullScreen?(document.fullscreenElement===null&&this.openFullScreen(),this.openFullScreen()):(document.fullscreenElement===null&&this.openFullScreen(),this.closeFullScreen())}openFullScreen(){this._containerMain.requestFullscreen?this._containerMain.requestFullscreen():this._containerMain.webkitRequestFullscreen?this._containerMain.webkitRequestFullscreen():this._containerMain.msRequestFullscreen&&this._containerMain.msRequestFullscreen()}closeFullScreen(){document.exitFullscreen?document.exitFullscreen():document.webkitExitFullscreen?document.webkitExitFullscreen():document.msExitFullscreen&&document.msExitFullscreen()}alterTimerVideo(t){this._numberProgressBar=t.offsetX/this.progressBarVideo.offsetWidth*this._player.playerInfo.duration-1,this._player.seekTo(this._numberProgressBar,!0),this.hiddenContainerPlayerVideoAndShowPauseVideo()}stateControllerPlayer(){return this._openControllerPlayer=!this._openControllerPlayer}openPopPupControllerPlayer(){this._openControllerPlayer?this.onMouseLeave():this.onMouseOver()}stateSubtitle(){return this._activeSubtitle=!this._activeSubtitle}activeSubtitle(){this.stateSubtitle(),this._activeSubtitle?this.caption.style.backgroundColor="#E11111":this.caption.style.backgroundColor="#000000dc"}closeOptions(){this.settingsVideo.style.display="none",this.fadeContainer.style.display="none"}stateOptions(){return this._isOpenOptions=!this._isOpenOptions}openSettingsVideo(){this._isOpenOptions?(this.settingsVideo.style.display="flex",this.fadeContainer.style.display="block"):this.closeOptions()}playbackSpeed(){return[.25,.5,1,1.5,2].map(e=>u`<div @click=${this.playbackRate} speed=${e} class="playbackSpeed">
                                                                ${e==1?"Normal":e}
                                                            </div>`)}playbackRate(t){const e=t.target;this._listPlaybackSpeed.forEach(o=>{o.style.backgroundColor="#000000dc"}),e.style.backgroundColor="#E11111",this._playbackNumber=Number(e.getAttribute("speed"))}openOptionsReproduction(){this.hiddenOptions(),this.reproductionOptions.style.display="flex",this.optinsReproduction.style.display="block",this.optionsQuality.style.display="none"}openOptionsQuality(){this.hiddenOptions(),this.reproductionOptions.style.display="flex",this.optinsReproduction.style.display="none",this.optionsQuality.style.display="block"}backOptions(){this.reproductionOptions.style.display="none",this.optinsReproduction.style.display="none",this.optionsQuality.style.display="none",this.openOptions()}playbackQuality(){const t=["hd1080","hd720","large","medium","small","tiny","auto"];return t==null?void 0:t.map(e=>u`<div quality=${e} class="quality" @click=${this.playbackQualityVideo}>
                                                            ${e=="hd1080"?"1080p":e=="hd720"?"720p":e=="large"?"480p":e=="medium"?"360p":e=="small"?"240p":e=="tiny"?"144p":e=="auto"?"automático":e}
                                                        </div>`)}playbackQualityVideo(t){const e=t.target;this._listPlaybackQuality.forEach(o=>{o.style.backgroundColor="#000000dc"}),e.style.backgroundColor="#E11111",this._playerbackQuality=String(e.getAttribute("quality"))}settingVideoYoutube(){return u`
            <div class="fade" @click=${this.closeOptions}></div>
            <div class="settingsVideo" >
                <div class="settingsVideo__legend" @click=${this.activeSubtitle}>
                    <p>Active Subtitle</p>
                    <lit-youtube-icon .icon=${this._activeSubtitle?"subtitles_off":"subtitles"} color="#fff"></lit-youtube-icon>
                </div>  
                <div class="settingsVideo__reproduction" @click=${this.openOptionsReproduction}>
                    <p>Playback speed</p>
                    <lit-youtube-icon .icon=${"arrow_forward_ios"} color="#fff"></lit-youtube-icon>
                </div>
                <div class="settingsVideo__quality" @click=${this.openOptionsQuality}>
                    <p>Quality</p>
                     <lit-youtube-icon .icon=${"arrow_forward_ios"} color="#fff"></lit-youtube-icon>
                </div>

                <div class="reproduction__options">
                    <lit-youtube-icon .icon=${"arrow_back_ios"} color="#fff" @click=${this.backOptions}></lit-youtube-icon>
                    <div class="options__reproduction">
                        ${this.playbackSpeed()}
                    </div>
                    <div class="options__quality">
                        ${this.playbackQuality()}
                    </div>
                </div>
            </div>

            
        `}render(){return u`
            <div id="containerMain" class="connectionVideo" @mouseleave=${this.onMouseLeave} @mouseover=${this.onMouseOver}  >
                <div class="connectionVideo__fade" @click=${()=>{this.stateControllerPlayer(),this.openPopPupControllerPlayer()}}></div>
                <div id="player"></div>
                <div class="connectionVideo__players">
                   
                    <div class="players__playerVideo" @click=${()=>{this.stateIsPlaying(),this.playerVideo()}}>
                        <lit-youtube-icon class="player__icon" .icon=${"play_arrow"} color="#fff" size=100 ?filled=${!0}></lit-youtube-icon>
                    </div>
                    <div class="players__pauseVideo" @click=${()=>{this.stateIsPlaying(),this.pauseVideo()}}>
                        <lit-youtube-icon class="player__icon" .icon=${"pause"} color="#fff" size=100 ?filled=${!0}></lit-youtube-icon>
                    </div>
                </div>
                <div class="connectionVideo__animationControls">
                    <div class="connectionVideo__controls">
                        <div class="players__progressVideo" @click=${this.alterTimerVideo}>
                            <div class="progressVideo__timer">
                                <div class="timer__circle"></div>
                            </div>
                        </div>
                        <div class="controls__container">
                            <lit-youtube-icon .icon=${"play_arrow"} ?filled=${!0} color="#fff" size=30 class="container__playerVideo"  @click=${()=>{this.stateIsPlaying(),this.playerVideo()}}></lit-youtube-icon>
                            <lit-youtube-icon .icon=${"pause"} ?filled=${!0} color="#fff" size=30 class="container__pauseVideo" @click=${()=>{this.stateIsPlaying(),this.pauseVideo()}}></lit-youtube-icon>
                            <div class="control__volume">
                                <lit-youtube-icon class="volume__icon" size=26 color="#fff" ?filled=${!0} @click=${this.muteVolume}></lit-youtube-icon>
                                <div class="animationAudioVideo">
                                    <input type="range" max="95" class="audio__volume" @input=${this.controlVolumeAudioVideo}>
                                    <span class="progressAudio"><span class="progressAudioFill"></span></span>
                                </div>
                            </div>
                    
                            <div class="container__duration">
                                <span class="duration__start">00:00</span>/<span class="duration__end">00:00</span>
                            </div>
                        </div>
                        <div class="controls__fullscreen">
                            <lit-youtube-icon .icon=${"settings"} color="#fff" size=30 @click=${()=>{this.backOptions(),this.stateOptions(),this.openSettingsVideo()}}></lit-youtube-icon>
                            <lit-youtube-icon .icon=${"fullscreen"} color="#fff" size=30 @click=${this.fullScreen}></lit-youtube-icon>
                        </div>
                    </div>
                </div>
                
                ${this.settingVideoYoutube()}
            </div>


           
        `}};_([T()],x.prototype,"_player",2);_([T()],x.prototype,"_videoDoId",2);_([T()],x.prototype,"_isPlaying",2);_([T()],x.prototype,"_muted",2);_([T()],x.prototype,"_fullScreen",2);_([T()],x.prototype,"_numberProgressBar",2);_([T()],x.prototype,"_openControllerPlayer",2);_([T()],x.prototype,"_activeSubtitle",2);_([T()],x.prototype,"_playbackNumber",2);_([T()],x.prototype,"_playerbackQuality",2);_([T()],x.prototype,"_isOpenOptions",2);_([E("#player")],x.prototype,"_containerPlayer",2);_([E("#containerMain")],x.prototype,"_containerMain",2);_([E(".players__playerVideo")],x.prototype,"_containerPlayerVideo",2);_([E(".players__pauseVideo")],x.prototype,"_containerPauseVideo",2);_([E(".connectionVideo__players")],x.prototype,"_containerPlayers",2);_([E(".progressAudioFill")],x.prototype,"progressAudioFill",2);_([E(".progressAudio")],x.prototype,"progressAudio",2);_([E(".audio__volume")],x.prototype,"audioVolume",2);_([E(".volume__icon")],x.prototype,"volumeIcon",2);_([E(".playerVideo__player")],x.prototype,"playerVideoPlayerContainer",2);_([E(".connectionVideo__controls")],x.prototype,"containerControls",2);_([E(".container__playerVideo")],x.prototype,"containerPlayerVideo",2);_([E(".container__pauseVideo")],x.prototype,"containerPauseVideo",2);_([E(".players__progressVideo")],x.prototype,"progressBarVideo",2);_([E(".progressVideo__timer")],x.prototype,"progressVideoTimer",2);_([E(".timer__circle")],x.prototype,"timerCircle",2);_([E(".duration__start")],x.prototype,"durationStart",2);_([E(".duration__end")],x.prototype,"durationEnd",2);_([E(".settingsVideo__legend")],x.prototype,"caption",2);_([E(".settingsVideo")],x.prototype,"settingsVideo",2);_([E(".settingsVideo__reproduction")],x.prototype,"settingsVideoReproducation",2);_([E(".settingsVideo__quality")],x.prototype,"settingsVideoQuality",2);_([E(".options__reproduction")],x.prototype,"optinsReproduction",2);_([E(".reproduction__options")],x.prototype,"reproductionOptions",2);_([E(".options__quality")],x.prototype,"optionsQuality",2);_([E(".fade")],x.prototype,"fadeContainer",2);_([Ze(".playbackSpeed")],x.prototype,"_listPlaybackSpeed",2);_([Ze(".quality")],x.prototype,"_listPlaybackQuality",2);_([c({type:String})],x.prototype,"video",2);x=_([C("lit-player-youtube")],x);Li({react:zi,tagName:"lit-player-youtube",elementClass:x});var Di=Object.defineProperty,Ni=Object.getOwnPropertyDescriptor,Ce=(t,e,o,r)=>{for(var i=r>1?void 0:r?Ni(e,o):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(i=(r?a(e,o,i):a(i))||i);return r&&i&&Di(e,o,i),i};let zt=class extends S{constructor(){super(...arguments),this._body=document.querySelector("body"),this._isAbout=!1}static get styles(){return D`
            :host{
                display: none;
                height: 100%;
                width: 100%;
            }

            p{
                margin: 0;
                padding: 0;
            }
            
            .fade{
                position: fixed;
                background-color: #000000d8;
                width: calc(100% - 32px);
                height: 100%;
                top: 0;
                z-index: 40;
                left: 0;
                padding: 1rem 1rem 3rem 1rem;
                display: flex;
                flex-direction: column;
                align-items: center;
                box-shadow: 0px 2px 27px -7px rgba(0,0,0,0.48);
                overflow: auto;
            }

            .container{
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 10px;
                width: fit-content;
            }

            .fade__close{
                background-color: var(--dark-blue);
                border-radius: 50%;
                padding: 0.5rem;
                cursor: pointer; 
                align-self: flex-end;
            }

            .fade__close:hover{
                background-color: var(--light-blue);
            }

            .fade__content{
                display: flex;
                flex-direction: column;
                gap: 20px;
                background-color: #fff;
                color: #000;
                padding: 1rem;
            }

            .content__button{
                display: flex;
                gap: 5px;
                flex-wrap: wrap;
            }

            button{
                width: 100%;
                font-size: 18px;
                border: none;
                background-color: var(--dark-blue);
                color: #fff;
                font-family: PoppinsLight;
                text-transform: uppercase;
                padding: 0.5rem;
                border-radius: 4px;
                cursor: pointer;
            }

            button:hover{
                background-color: var(--light-blue);
            }

            button[actual]{
                background-color: var(--light-blue);
            }

            .content__title{
                font-size: 23px;
                font-family: PoppinsBold;
            }

            .content__about{
                display: flex;
                flex-direction: column;
                gap: 20px;
            }

            .about__description{
                text-align: left;
            }

            .about__links{
                display: flex;
                flex-direction: column;
                gap: 5px;
            }

            .links__title{
                font-size: 18px;
            }

            .about__links div{
                display: flex;
                flex-wrap: wrap;
                gap: 20px;
            }

            .about__links div a{
                color: var(--dark-orange);
                font-family: PoppinsBlack;
            }

            .about__links div a:hover{
                 color: var(--light-orange);
            }

            .content__video{
                display: flex;
                flex-direction: column;
                gap: 20px;
            }

            lit-player-youtube{
                width: 100%;
                height: 300px;
            }

            @media (min-width: 1024px){
                .fade__content{
                    width: 590px;
                }

                .content__button{
                    flex-wrap: nowrap;
                }

                lit-player-youtube{
                    height: 450px;
                }
            }
        `}generateAbout(){return u`
            <div class="content__about">
                <p class="about__description">
                    ${this.project.descriptionProject}
                </p>
                <div class="about__links">
                    <p class="links__title">Links</p>
                    <div>
                        <a href=${this.project.links[0]} target="_blank">Documentação</a>
                        <a href=${this.project.links[1]} target="_blank">NPM</a>
                        <a href=${this.project.links[2]} target="_blank">Repositório</a>
                    </div>
                </div>
            </div>
        `}generateVideo(){return u`
            <div class="content__video">
                <p class="about__description">
                    ${this.project.descriptionVideo}
                </p>
            </div>
        `}close(){this._body.style.overflow="auto",this.style.display="none",this._isAbout=!1,this._containerButton[0].setAttribute("actual",""),this._containerButton[1].removeAttribute("actual")}alterCurrentButton(t){const e=t.target;this._isAbout=!this._isAbout,this._containerButton.forEach(o=>{o.removeAttribute("actual")}),e.setAttribute("actual","")}render(){return u`
            <div class="fade">
                <div class="container">
                    <div class="fade__close" @click=${this.close}>
                        <ecv-icon .icon=${je.Close}></ecv-icon>
                    </div>
                    <div class="fade__content">
                        <div class="content__button">
                            <button actual @click=${this.alterCurrentButton}>Sobre</button>
                            <button @click=${this.alterCurrentButton}>Vídeo</button>
                        </div>
                        <p class="content__title">${this.project.title}</p>
                        <lit-player-youtube video=${this.project.sourceVideo} style="display: ${this._isAbout?"block":"none"}"></lit-player-youtube>
                        ${this._isAbout?u`${this.generateVideo()}`:u`${this.generateAbout()}`}
                    </div>
                </div>
            </div>
        `}};Ce([T()],zt.prototype,"_isAbout",2);Ce([E("lit-player-youtube")],zt.prototype,"playerYoutube",2);Ce([Ze("button")],zt.prototype,"_containerButton",2);Ce([c({attribute:!1})],zt.prototype,"project",2);zt=Ce([C("l-modal-project")],zt);var Hi=Object.defineProperty,Fi=Object.getOwnPropertyDescriptor,to=(t,e,o,r)=>{for(var i=r>1?void 0:r?Fi(e,o):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(i=(r?a(e,o,i):a(i))||i);return r&&i&&Hi(e,o,i),i};let Re=class extends S{constructor(){super(...arguments),this._body=document.querySelector("body")}static get styles(){return D`
            .card{
                width: calc(100% - 32px);
                border: 2px solid var(--light-blue);
                border-radius: 10px;
                padding: 1rem;
                display: flex;
                flex-direction: column;
                align-items: center;
                background-color: var(--white);
                color: #000;
                box-shadow: 0px 2px 27px -7px rgba(0,0,0,0.48);
            }

            p{
                margin: 0;
                padding: 0;
            }

            .card__title{
                align-self: flex-start;
                font-family: PoppinsBold;
                font-size: 20px;
            }

            .card__image{
                width: 200px;
            }

            .card__description{
                width: 100%;
                text-align: left;
                margin-bottom: 1rem;
                font-size: 15px;
            }

            .card__button{
                width: 100%;
                font-size: 18px;
                border: none;
                background-color: var(--dark-orange);
                color: #fff;
                font-family: PoppinsLight;
                text-transform: uppercase;
                padding: 0.5rem;
                border-radius: 4px;
                cursor: pointer;
            }

            .card__button:hover{
                background-color: var(--light-orange);
            }

            @media (min-width: 655px){
                .card{
                    width: 560px;
                }
            }
        `}openModalProject(){this._body.style.overflow="hidden",this.lModalProject.style.display="flex"}render(){return u`
            <div class="card">
                <p class="card__title">${this.project.title}</p>
                <img class="card__image" src=${this.project.image}> 
                <p class="card__description">
                    ${this.project.descriptionCard}
                </p>
                <button class="card__button" @click=${this.openModalProject}>Abrir</button>
            </div>

            <l-modal-project .project=${this.project}></l-modal-project>
        `}};to([E("l-modal-project")],Re.prototype,"lModalProject",2);to([c({attribute:!1})],Re.prototype,"project",2);Re=to([C("l-card-project")],Re);const Ui="/assets/icon_ecv-BeFJJLmH.png",Ti="/assets/logo_lit_player-IDR7OvwI.png",qi=[{title:"ECV Component",descriptionCard:`Biblioteca de Web Components desenvolvida em TypeScript para 
                    facilitar a criação de componentes reutilizáveis em aplicações web.`,descriptionProject:`Biblioteca de Web Components desenvolvida em TypeScript para 
                    facilitar a criação de componentes reutilizáveis em aplicações web. 
                    Criada com foco em otimizar o desenvolvimento de sites, garantindo organização, modularidade e 
                    rapidez na implementação de interfaces padronizadas. Atualmente, já conta com downloads pela 
                    comunidade via npm, demonstrando sua aplicação prática em projetos reais.`,descriptionVideo:`Este vídeo demonstra na prática como utilizar a biblioteca ECV Component em 
                        um projeto. Nele, apresento um exemplo de aplicação real utilizando os Web Components criados, 
                        mostrando como implementar, configurar e integrar os componentes de forma rápida e padronizada no 
                        desenvolvimento web.`,image:Ui,links:["https://leonardolaraujo.github.io/ecv-component/","https://www.npmjs.com/package/ecv-component","https://github.com/LeonardoLAraujo/ecv-component"],sourceVideo:"https://www.youtube.com/watch?v=tPBbeszlIXw"},{title:"Lit Player Youtube",descriptionCard:`Player de YouTube criado com Lit e Web Components para integrar vídeos de forma rápida, 
                        responsiva e customizável em projetos web.`,descriptionProject:`Biblioteca criada utilizando Lit e Web Components para facilitar a implementação de 
                        players do YouTube em aplicações web. Com este pacote, é possível inserir vídeos de forma rápida, 
                        customizável e responsiva, sem a necessidade de configurar iframes manualmente. Foi desenvolvido 
                        para agilizar o processo de integração de vídeos e garantir compatibilidade com projetos modernos 
                        baseados em Web Components.`,descriptionVideo:`Este vídeo demonstra como utilizar o Lit Player YouTube, mostrando na 
                            prática a implementação do player em um projeto web. Nele, apresento como integrar
                            facilmente vídeos do YouTube usando o componente, além de explicar sua configuração
                            e personalização para criar players responsivos de forma rápida.`,image:Ti,links:["https://leonardolaraujo.github.io/lit-player-youtube/","https://www.npmjs.com/package/lit-player-youtube","https://github.com/LeonardoLAraujo/lit-player-youtube"],sourceVideo:"https://www.youtube.com/watch?v=L-hQnWvCWpg"}];var Yi=Object.defineProperty,Gi=Object.getOwnPropertyDescriptor,To=(t,e,o,r)=>{for(var i=r>1?void 0:r?Gi(e,o):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(i=(r?a(e,o,i):a(i))||i);return r&&i&&Yi(e,o,i),i};let Xe=class extends S{constructor(){super(...arguments),this._projects=qi}static get styles(){return D`
            h1, p{
                margin: 0;
                padding: 0;
            }

            .project{
                display: flex;
                flex-direction: column; 
                align-items: center;
                gap: 10px;
                padding: 5rem 1rem 2rem 1rem;
                background-color: var(--dark-blue);
                color: #fff;
                height: auto;
            }
            
            .project h1{
                font-size: 40px;
                margin: 0;
                font-family: PoppinsBlack;
                align-self: flex-start;
            }

            .project__cards{
                display: flex;
                flex-wrap: wrap;
                gap: 20px;
                justify-content: center;
            }

            .project__button{
                font-family: PoppinsBold;
                font-size: 20px;
                background-color: var(--dark-orange);
                border: none;
                padding: 0.5rem;
                width: 100%;
                border-radius: 6px;
                color: #fff;
                cursor: pointer;
            }

            .project__button:hover{
                background-color: var(--light-orange);
            }

            @media (min-width: 1024px){
                .project{
                    padding: 5rem 1rem 2rem 1rem;
                }

                .project__button{
                    width: 500px;
                }

                .project__introduction p{
                    max-width: 80%;
                    font-size: 18px;
                }
            }

            @media (min-width: 1256px){
                .project{
                    height: 100%;
                }
               
                .project__cards{
                    margin-top: 4rem;
                }

                .project__button{
                    margin-top: 5rem;
                }
            }
        `}generateCardProject(){return this._projects.map(t=>u`<l-card-project .project=${t}></l-card-project>`)}goToAllProjects(){window.open("https://github.com/LeonardoLAraujo","_blank")}render(){return u`
            <div class="project">
                <h1>Projetos</h1>
                <div class="project__introduction">
                    <p>Aqui estão dois dos meus projetos mais recentes, 
                        escolhidos para manter esta seção objetiva e agradável de visualizar.
                        Se quiser conhecer todos os meus outros projetos, incluindo estudos 
                        e experimentos que compartilho, clique no botão abaixo e explore 
                        meu GitHub.
                    </p>
                </div>
                <div class="project__cards">
                   ${this.generateCardProject()}
                </div>
                <button class="project__button" @click=${this.goToAllProjects}>Ver Todos Projetos</button>
            </div>
        `}};To([T()],Xe.prototype,"_projects",2);Xe=To([C("l-project")],Xe);const Wi="/assets/whatsapp-BtCgz4Tn.png",Xi="/assets/gmail-5foEKrqW.png";var Qi=Object.getOwnPropertyDescriptor,Ji=(t,e,o,r)=>{for(var i=r>1?void 0:r?Qi(e,o):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(i=a(i)||i);return i};let zo=class extends S{static get styles(){return D`
            p{
                margin: 0;
                padding: 0;
            }

            .contact{
                display: flex;
                flex-direction: column;
                align-items: center;
                padding: 2rem 1rem 2rem 1rem;
                gap: 40px;
                background-color: var(--dark-blue);
                color: #fff;
            }

            .contact__information{
                display: flex;
                flex-wrap: wrap;
                gap: 20px;
            }

            .information__data{
                display: flex;
                align-items: center;
                flex-wrap: wrap;
                gap: 5px;
                font-size: 20px;
            }

            .information__data div{
                width: 40px;
                height: 40px;
                background-repeat: no-repeat;
                background-size: contain;
            }

            .data__complement{
               font-family: PoppinsBold;
            }

            .contact__footer{
                text-align: center;
                font-size: 18px;
            }

            @media (min-width: 1024px){
                .contact__information{
                    gap: 50px;
                }
            }

        `}generateInformationData(t,e,o){return u`
            <div class="information__data">
                <div  style="background-image: url(${t})"></div>
                <p>${e}: <strong class="data__complement">${o}</strong></p>
            </div>
        `}render(){return u`
            <div class="contact">
                <div class="contact__information">
                    ${this.generateInformationData(Wi,"Whatsapp","(55) 11977510233")}
                    ${this.generateInformationData(Xi,"E-Mail","leonardoleal017@gmail.com")}
                </div>
                <div class="contact__footer">
                    <p>&copy; 2025 Leonardo Leal. Todos os direitos reservados.</p>
                </div>
            </div>
        `}};zo=Ji([C("l-contact")],zo);var Ki=Object.defineProperty,Ii=Object.getOwnPropertyDescriptor,jt=(t,e,o,r)=>{for(var i=r>1?void 0:r?Ii(e,o):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(i=(r?a(e,o,i):a(i))||i);return r&&i&&Ki(e,o,i),i};let Ct=class extends S{static get styles(){return D``}render(){return u`
            <l-menu .referencePortfolio=${this}></l-menu>
            <l-home></l-home>
            <l-about></l-about>
            <l-project></l-project>
            <l-curriculum></l-curriculum>
            <l-contact></l-contact>
        `}};jt([E("l-curriculum")],Ct.prototype,"lCurriculum",2);jt([E("l-home")],Ct.prototype,"lHome",2);jt([E("l-about")],Ct.prototype,"lAbout",2);jt([E("l-project")],Ct.prototype,"lProject",2);jt([E("l-contact")],Ct.prototype,"lContact",2);Ct=jt([C("l-portfolio")],Ct);
