/*! For license information please see 2772.9bbe9fd6.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_frontend=self.webpackChunkreact_frontend||[]).push([[2772],{48556:(t,e,i)=>{var s;i.d(e,{Jb:()=>P,Ld:()=>x,YP:()=>C,dy:()=>w,sY:()=>Y});const n=window,o=n.trustedTypes,r=o?o.createPolicy("lit-html",{createHTML:t=>t}):void 0,l="$lit$",h="lit$".concat((Math.random()+"").slice(9),"$"),a="?"+h,d="<".concat(a,">"),c=document,u=()=>c.createComment(""),p=t=>null===t||"object"!=typeof t&&"function"!=typeof t,v=Array.isArray,$=t=>v(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]),_="[ \t\n\f\r]",f=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,A=/-->/g,y=/>/g,g=RegExp(">|".concat(_,"(?:([^\\s\"'>=/]+)(").concat(_,"*=").concat(_,"*(?:[^ \t\n\f\r\"'`<>=]|(\"|')|))|$)"),"g"),m=/'/g,E=/"/g,S=/^(?:script|style|textarea|title)$/i,b=t=>function(e){for(var i=arguments.length,s=new Array(i>1?i-1:0),n=1;n<i;n++)s[n-1]=arguments[n];return{_$litType$:t,strings:e,values:s}},w=b(1),C=b(2),P=Symbol.for("lit-noChange"),x=Symbol.for("lit-nothing"),U=new WeakMap,H=c.createTreeWalker(c,129,null,!1);function k(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==r?r.createHTML(e):e}const N=(t,e)=>{const i=t.length-1,s=[];let n,o=2===e?"<svg>":"",r=f;for(let a=0;a<i;a++){const e=t[a];let i,c,u=-1,p=0;for(;p<e.length&&(r.lastIndex=p,c=r.exec(e),null!==c);)p=r.lastIndex,r===f?"!--"===c[1]?r=A:void 0!==c[1]?r=y:void 0!==c[2]?(S.test(c[2])&&(n=RegExp("</"+c[2],"g")),r=g):void 0!==c[3]&&(r=g):r===g?">"===c[0]?(r=null!=n?n:f,u=-1):void 0===c[1]?u=-2:(u=r.lastIndex-c[2].length,i=c[1],r=void 0===c[3]?g:'"'===c[3]?E:m):r===E||r===m?r=g:r===A||r===y?r=f:(r=g,n=void 0);const v=r===g&&t[a+1].startsWith("/>")?" ":"";o+=r===f?e+d:u>=0?(s.push(i),e.slice(0,u)+l+e.slice(u)+h+v):e+h+(-2===u?(s.push(void 0),a):v)}return[k(t,o+(t[i]||"<?>")+(2===e?"</svg>":"")),s]};class T{constructor(t,e){let i,{strings:s,_$litType$:n}=t;this.parts=[];let r=0,d=0;const c=s.length-1,p=this.parts,[v,$]=N(s,n);if(this.el=T.createElement(v,e),H.currentNode=this.el.content,2===n){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(i=H.nextNode())&&p.length<c;){if(1===i.nodeType){if(i.hasAttributes()){const t=[];for(const e of i.getAttributeNames())if(e.endsWith(l)||e.startsWith(h)){const s=$[d++];if(t.push(e),void 0!==s){const t=i.getAttribute(s.toLowerCase()+l).split(h),e=/([.?@])?(.*)/.exec(s);p.push({type:1,index:r,name:e[2],strings:t,ctor:"."===e[1]?z:"?"===e[1]?B:"@"===e[1]?D:L})}else p.push({type:6,index:r})}for(const e of t)i.removeAttribute(e)}if(S.test(i.tagName)){const t=i.textContent.split(h),e=t.length-1;if(e>0){i.textContent=o?o.emptyScript:"";for(let s=0;s<e;s++)i.append(t[s],u()),H.nextNode(),p.push({type:2,index:++r});i.append(t[e],u())}}}else if(8===i.nodeType)if(i.data===a)p.push({type:2,index:r});else{let t=-1;for(;-1!==(t=i.data.indexOf(h,t+1));)p.push({type:7,index:r}),t+=h.length-1}r++}}static createElement(t,e){const i=c.createElement("template");return i.innerHTML=t,i}}function O(t,e){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:t,s=arguments.length>3?arguments[3]:void 0;var n,o,r,l;if(e===P)return e;let h=void 0!==s?null===(n=i._$Co)||void 0===n?void 0:n[s]:i._$Cl;const a=p(e)?void 0:e._$litDirective$;return(null==h?void 0:h.constructor)!==a&&(null===(o=null==h?void 0:h._$AO)||void 0===o||o.call(h,!1),void 0===a?h=void 0:(h=new a(t),h._$AT(t,i,s)),void 0!==s?(null!==(r=(l=i)._$Co)&&void 0!==r?r:l._$Co=[])[s]=h:i._$Cl=h),void 0!==h&&(e=O(t,h._$AS(t,e.values),h,s)),e}class R{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;const{el:{content:i},parts:s}=this._$AD,n=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:c).importNode(i,!0);H.currentNode=n;let o=H.nextNode(),r=0,l=0,h=s[0];for(;void 0!==h;){if(r===h.index){let e;2===h.type?e=new M(o,o.nextSibling,this,t):1===h.type?e=new h.ctor(o,h.name,h.strings,this,t):6===h.type&&(e=new I(o,this,t)),this._$AV.push(e),h=s[++l]}r!==(null==h?void 0:h.index)&&(o=H.nextNode(),r++)}return H.currentNode=c,n}v(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class M{constructor(t,e,i,s){var n;this.type=2,this._$AH=x,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cp=null===(n=null==s?void 0:s.isConnected)||void 0===n||n}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===(null==t?void 0:t.nodeType)&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t){t=O(this,t,arguments.length>1&&void 0!==arguments[1]?arguments[1]:this),p(t)?t===x||null==t||""===t?(this._$AH!==x&&this._$AR(),this._$AH=x):t!==this._$AH&&t!==P&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):$(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==x&&p(this._$AH)?this._$AA.nextSibling.data=t:this.$(c.createTextNode(t)),this._$AH=t}g(t){var e;const{values:i,_$litType$:s}=t,n="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=T.createElement(k(s.h,s.h[0]),this.options)),s);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===n)this._$AH.v(i);else{const t=new R(n,this),e=t.u(this.options);t.v(i),this.$(e),this._$AH=t}}_$AC(t){let e=U.get(t.strings);return void 0===e&&U.set(t.strings,e=new T(t)),e}T(t){v(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const n of t)s===e.length?e.push(i=new M(this.k(u()),this.k(u()),this,this.options)):i=e[s],i._$AI(n),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this._$AA.nextSibling,e=arguments.length>1?arguments[1]:void 0;var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cp=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class L{constructor(t,e,i,s,n){this.type=1,this._$AH=x,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=n,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=x}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this,i=arguments.length>2?arguments[2]:void 0,s=arguments.length>3?arguments[3]:void 0;const n=this.strings;let o=!1;if(void 0===n)t=O(this,t,e,0),o=!p(t)||t!==this._$AH&&t!==P,o&&(this._$AH=t);else{const s=t;let r,l;for(t=n[0],r=0;r<n.length-1;r++)l=O(this,s[i+r],e,r),l===P&&(l=this._$AH[r]),o||(o=!p(l)||l!==this._$AH[r]),l===x?t=x:t!==x&&(t+=(null!=l?l:"")+n[r+1]),this._$AH[r]=l}o&&!s&&this.j(t)}j(t){t===x?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class z extends L{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===x?void 0:t}}const j=o?o.emptyScript:"";class B extends L{constructor(){super(...arguments),this.type=4}j(t){t&&t!==x?this.element.setAttribute(this.name,j):this.element.removeAttribute(this.name)}}class D extends L{constructor(t,e,i,s,n){super(t,e,i,s,n),this.type=5}_$AI(t){var e;if((t=null!==(e=O(this,t,arguments.length>1&&void 0!==arguments[1]?arguments[1]:this,0))&&void 0!==e?e:x)===P)return;const i=this._$AH,s=t===x&&i!==x||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,n=t!==x&&(i===x||s);s&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==i?i:this.element,t):this._$AH.handleEvent(t)}}class I{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){O(this,t)}}const V=n.litHtmlPolyfillSupport;null==V||V(T,M),(null!==(s=n.litHtmlVersions)&&void 0!==s?s:n.litHtmlVersions=[]).push("2.8.0");const Y=(t,e,i)=>{var s,n;const o=null!==(s=null==i?void 0:i.renderBefore)&&void 0!==s?s:e;let r=o._$litPart$;if(void 0===r){const t=null!==(n=null==i?void 0:i.renderBefore)&&void 0!==n?n:null;o._$litPart$=r=new M(e.insertBefore(u(),t),t,void 0,null!=i?i:{})}return r._$AI(t),r}},72107:(t,e,i)=>{i.d(e,{Mo:()=>s,Cb:()=>r,SB:()=>l});const s=t=>e=>"function"==typeof e?((t,e)=>(customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:i,elements:s}=e;return{kind:i,elements:s,finisher(e){customElements.define(t,e)}}})(t,e),n=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(i){i.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(i){i.createProperty(e.key,t)}},o=(t,e,i)=>{e.constructor.createProperty(i,t)};function r(t){return(e,i)=>void 0!==i?o(t,e,i):n(t,e)}function l(t){return r({...t,state:!0})}var h;null===(h=window.HTMLSlotElement)||void 0===h||h.prototype.assignedElements},19135:(t,e,i)=>{i.d(e,{oi:()=>S,fl:()=>y,iv:()=>h,dy:()=>E.dy,sY:()=>E.sY,YP:()=>E.YP});const s=window,n=s.ShadowRoot&&(void 0===s.ShadyCSS||s.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,o=Symbol(),r=new WeakMap;class l{constructor(t,e,i){if(this._$cssResult$=!0,i!==o)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(n&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=r.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&r.set(e,t))}return t}toString(){return this.cssText}}const h=function(t){for(var e=arguments.length,i=new Array(e>1?e-1:0),s=1;s<e;s++)i[s-1]=arguments[s];const n=1===t.length?t[0]:i.reduce(((e,i,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1]),t[0]);return new l(n,t,o)},a=n?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new l("string"==typeof t?t:t+"",void 0,o))(e)})(t):t;var d;const c=window,u=c.trustedTypes,p=u?u.emptyScript:"",v=c.reactiveElementPolyfillSupport,$={toAttribute(t,e){switch(e){case Boolean:t=t?p:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},_=(t,e)=>e!==t&&(e==e||t==t),f={attribute:!0,type:String,converter:$,reflect:!1,hasChanged:_},A="finalized";class y extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(t){var e;this.finalize(),(null!==(e=this.h)&&void 0!==e?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,i)=>{const s=this._$Ep(i,e);void 0!==s&&(this._$Ev.set(s,i),t.push(s))})),t}static createProperty(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:f;if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i="symbol"==typeof t?Symbol():"__"+t,s=this.getPropertyDescriptor(t,i,e);void 0!==s&&Object.defineProperty(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(s){const n=this[t];this[e]=s,this.requestUpdate(t,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||f}static finalize(){if(this.hasOwnProperty(A))return!1;this[A]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),void 0!==t.h&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const i of e)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(a(t))}else void 0!==t&&e.push(a(t));return e}static _$Ep(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,i;(null!==(e=this._$ES)&&void 0!==e?e:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(i=t.hostConnected)||void 0===i||i.call(t))}removeController(t){var e;null===(e=this._$ES)||void 0===e||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])}))}createRenderRoot(){var t;const e=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return((t,e)=>{n?t.adoptedStyleSheets=e.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):e.forEach((e=>{const i=document.createElement("style"),n=s.litNonce;void 0!==n&&i.setAttribute("nonce",n),i.textContent=e.cssText,t.appendChild(i)}))})(e,this.constructor.elementStyles),e}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:f;var s;const n=this.constructor._$Ep(t,i);if(void 0!==n&&!0===i.reflect){const o=(void 0!==(null===(s=i.converter)||void 0===s?void 0:s.toAttribute)?i.converter:$).toAttribute(e,i.type);this._$El=t,null==o?this.removeAttribute(n):this.setAttribute(n,o),this._$El=null}}_$AK(t,e){var i;const s=this.constructor,n=s._$Ev.get(t);if(void 0!==n&&this._$El!==n){const t=s.getPropertyOptions(n),o="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(i=t.converter)||void 0===i?void 0:i.fromAttribute)?t.converter:$;this._$El=n,this[n]=o.fromAttribute(e,t.type),this._$El=null}}requestUpdate(t,e,i){let s=!0;void 0!==t&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||_)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,i))):s=!1),!this.isUpdatePending&&s&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((t,e)=>this[e]=t)),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(i)):this._$Ek()}catch(t){throw e=!1,this._$Ek(),t}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;null===(e=this._$ES)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,e)=>this._$EO(e,this[e],t))),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}}y[A]=!0,y.elementProperties=new Map,y.elementStyles=[],y.shadowRootOptions={mode:"open"},null==v||v({ReactiveElement:y}),(null!==(d=c.reactiveElementVersions)&&void 0!==d?d:c.reactiveElementVersions=[]).push("1.6.3");var g,m,E=i(48556);class S extends y{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=(0,E.sY)(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1)}render(){return E.Jb}}S.finalized=!0,S._$litElement$=!0,null===(g=globalThis.litElementHydrateSupport)||void 0===g||g.call(globalThis,{LitElement:S});const b=globalThis.litElementPolyfillSupport;null==b||b({LitElement:S});(null!==(m=globalThis.litElementVersions)&&void 0!==m?m:globalThis.litElementVersions=[]).push("3.3.3")}}]);
//# sourceMappingURL=2772.9bbe9fd6.chunk.js.map