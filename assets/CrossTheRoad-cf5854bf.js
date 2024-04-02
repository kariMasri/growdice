var Ov=Object.defineProperty;var Lv=(n,t,r)=>t in n?Ov(n,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):n[t]=r;var Rt=(n,t,r)=>(Lv(n,typeof t!="symbol"?t+"":t,r),r);import{U as it,V as J,w as fe,W as Bv,O as Pi,o as Dl,R as or,j as vt,p as Uv,a as je,y as kv,I as Gv,b as zo,e as Dv,F as Jr,B as zv,m as sl}from"./index-c4efdbaa.js";import{G as Oi}from"./GameLayout-002d38fc.js";import{S as Ae,T as Hv,a as $v,b as zl,c as Sr,P as Vv,i as ol,k as Wv,n as Xv,w as qv,E as ba,A as jv,d as al,B as ul,e as Ho,f as Kv,h as hl,g as ll,C as xr,j as Yv,l as Zv,G as Jv}from"./remeGame-aedeb46d.js";import{S as Hi,B as Qv,G as t1}from"./sounds-9c08c2c5.js";import{i as Hl}from"./lib-48b45aac.js";import{L as e1}from"./LoginArea-9162a3ae.js";import{S as r1}from"./Select-da9a68d3.js";import{G as i1}from"./GamePopup-7296a12a.js";import{P as n1,S as s1}from"./SettingsButton-376f915e.js";import{G as o1}from"./GameRoundHistory-52697435.js";import{C as a1}from"./ClipLoader-f3413bad.js";import"./useCurrencySwap-36ff0733.js";import"./index.esm-fbfe0c4f.js";import"./GameInfoModal-4f555c8e.js";import"./index-7397ff98.js";import"./index.esm-39648bc1.js";const Li=new Vv;class Ir extends Ae{constructor(t,r=100,s=100){super(t),this.tileTransform=new Hv,this._width=r,this._height=s,this.uvMatrix=this.texture.uvMatrix||new $v(t),this.pluginName="tilingSprite",this.uvRespectAnchor=!1}get clampMargin(){return this.uvMatrix.clampMargin}set clampMargin(t){this.uvMatrix.clampMargin=t,this.uvMatrix.update(!0)}get tileScale(){return this.tileTransform.scale}set tileScale(t){this.tileTransform.scale.copyFrom(t)}get tilePosition(){return this.tileTransform.position}set tilePosition(t){this.tileTransform.position.copyFrom(t)}_onTextureUpdate(){this.uvMatrix&&(this.uvMatrix.texture=this._texture),this._cachedTint=16777215}_render(t){const r=this._texture;!r||!r.valid||(this.tileTransform.updateLocalTransform(),this.uvMatrix.update(),t.batch.setObjectRenderer(t.plugins[this.pluginName]),t.plugins[this.pluginName].render(this))}_calculateBounds(){const t=this._width*-this._anchor._x,r=this._height*-this._anchor._y,s=this._width*(1-this._anchor._x),a=this._height*(1-this._anchor._y);this._bounds.addFrame(this.transform,t,r,s,a)}getLocalBounds(t){return this.children.length===0?(this._bounds.minX=this._width*-this._anchor._x,this._bounds.minY=this._height*-this._anchor._y,this._bounds.maxX=this._width*(1-this._anchor._x),this._bounds.maxY=this._height*(1-this._anchor._y),t||(this._localBoundsRect||(this._localBoundsRect=new zl),t=this._localBoundsRect),this._bounds.getRectangle(t)):super.getLocalBounds.call(this,t)}containsPoint(t){this.worldTransform.applyInverse(t,Li);const r=this._width,s=this._height,a=-r*this.anchor._x;if(Li.x>=a&&Li.x<a+r){const u=-s*this.anchor._y;if(Li.y>=u&&Li.y<u+s)return!0}return!1}destroy(t){super.destroy(t),this.tileTransform=null,this.uvMatrix=null}static from(t,r){const s=t instanceof Sr?t:Sr.from(t,r);return new Ir(s,r.width,r.height)}get width(){return this._width}set width(t){this._width=t}get height(){return this._height}set height(t){this._height=t}}var Mr=(n=>(n[n.WEBGL_LEGACY=0]="WEBGL_LEGACY",n[n.WEBGL=1]="WEBGL",n[n.WEBGL2=2]="WEBGL2",n))(Mr||{}),$l=(n=>(n[n.UNKNOWN=0]="UNKNOWN",n[n.WEBGL=1]="WEBGL",n[n.CANVAS=2]="CANVAS",n))($l||{}),na=(n=>(n[n.COLOR=16384]="COLOR",n[n.DEPTH=256]="DEPTH",n[n.STENCIL=1024]="STENCIL",n))(na||{}),z=(n=>(n[n.NORMAL=0]="NORMAL",n[n.ADD=1]="ADD",n[n.MULTIPLY=2]="MULTIPLY",n[n.SCREEN=3]="SCREEN",n[n.OVERLAY=4]="OVERLAY",n[n.DARKEN=5]="DARKEN",n[n.LIGHTEN=6]="LIGHTEN",n[n.COLOR_DODGE=7]="COLOR_DODGE",n[n.COLOR_BURN=8]="COLOR_BURN",n[n.HARD_LIGHT=9]="HARD_LIGHT",n[n.SOFT_LIGHT=10]="SOFT_LIGHT",n[n.DIFFERENCE=11]="DIFFERENCE",n[n.EXCLUSION=12]="EXCLUSION",n[n.HUE=13]="HUE",n[n.SATURATION=14]="SATURATION",n[n.COLOR=15]="COLOR",n[n.LUMINOSITY=16]="LUMINOSITY",n[n.NORMAL_NPM=17]="NORMAL_NPM",n[n.ADD_NPM=18]="ADD_NPM",n[n.SCREEN_NPM=19]="SCREEN_NPM",n[n.NONE=20]="NONE",n[n.SRC_OVER=0]="SRC_OVER",n[n.SRC_IN=21]="SRC_IN",n[n.SRC_OUT=22]="SRC_OUT",n[n.SRC_ATOP=23]="SRC_ATOP",n[n.DST_OVER=24]="DST_OVER",n[n.DST_IN=25]="DST_IN",n[n.DST_OUT=26]="DST_OUT",n[n.DST_ATOP=27]="DST_ATOP",n[n.ERASE=26]="ERASE",n[n.SUBTRACT=28]="SUBTRACT",n[n.XOR=29]="XOR",n))(z||{}),ns=(n=>(n[n.POINTS=0]="POINTS",n[n.LINES=1]="LINES",n[n.LINE_LOOP=2]="LINE_LOOP",n[n.LINE_STRIP=3]="LINE_STRIP",n[n.TRIANGLES=4]="TRIANGLES",n[n.TRIANGLE_STRIP=5]="TRIANGLE_STRIP",n[n.TRIANGLE_FAN=6]="TRIANGLE_FAN",n))(ns||{}),N=(n=>(n[n.RGBA=6408]="RGBA",n[n.RGB=6407]="RGB",n[n.RG=33319]="RG",n[n.RED=6403]="RED",n[n.RGBA_INTEGER=36249]="RGBA_INTEGER",n[n.RGB_INTEGER=36248]="RGB_INTEGER",n[n.RG_INTEGER=33320]="RG_INTEGER",n[n.RED_INTEGER=36244]="RED_INTEGER",n[n.ALPHA=6406]="ALPHA",n[n.LUMINANCE=6409]="LUMINANCE",n[n.LUMINANCE_ALPHA=6410]="LUMINANCE_ALPHA",n[n.DEPTH_COMPONENT=6402]="DEPTH_COMPONENT",n[n.DEPTH_STENCIL=34041]="DEPTH_STENCIL",n))(N||{}),oi=(n=>(n[n.TEXTURE_2D=3553]="TEXTURE_2D",n[n.TEXTURE_CUBE_MAP=34067]="TEXTURE_CUBE_MAP",n[n.TEXTURE_2D_ARRAY=35866]="TEXTURE_2D_ARRAY",n[n.TEXTURE_CUBE_MAP_POSITIVE_X=34069]="TEXTURE_CUBE_MAP_POSITIVE_X",n[n.TEXTURE_CUBE_MAP_NEGATIVE_X=34070]="TEXTURE_CUBE_MAP_NEGATIVE_X",n[n.TEXTURE_CUBE_MAP_POSITIVE_Y=34071]="TEXTURE_CUBE_MAP_POSITIVE_Y",n[n.TEXTURE_CUBE_MAP_NEGATIVE_Y=34072]="TEXTURE_CUBE_MAP_NEGATIVE_Y",n[n.TEXTURE_CUBE_MAP_POSITIVE_Z=34073]="TEXTURE_CUBE_MAP_POSITIVE_Z",n[n.TEXTURE_CUBE_MAP_NEGATIVE_Z=34074]="TEXTURE_CUBE_MAP_NEGATIVE_Z",n))(oi||{}),Y=(n=>(n[n.UNSIGNED_BYTE=5121]="UNSIGNED_BYTE",n[n.UNSIGNED_SHORT=5123]="UNSIGNED_SHORT",n[n.UNSIGNED_SHORT_5_6_5=33635]="UNSIGNED_SHORT_5_6_5",n[n.UNSIGNED_SHORT_4_4_4_4=32819]="UNSIGNED_SHORT_4_4_4_4",n[n.UNSIGNED_SHORT_5_5_5_1=32820]="UNSIGNED_SHORT_5_5_5_1",n[n.UNSIGNED_INT=5125]="UNSIGNED_INT",n[n.UNSIGNED_INT_10F_11F_11F_REV=35899]="UNSIGNED_INT_10F_11F_11F_REV",n[n.UNSIGNED_INT_2_10_10_10_REV=33640]="UNSIGNED_INT_2_10_10_10_REV",n[n.UNSIGNED_INT_24_8=34042]="UNSIGNED_INT_24_8",n[n.UNSIGNED_INT_5_9_9_9_REV=35902]="UNSIGNED_INT_5_9_9_9_REV",n[n.BYTE=5120]="BYTE",n[n.SHORT=5122]="SHORT",n[n.INT=5124]="INT",n[n.FLOAT=5126]="FLOAT",n[n.FLOAT_32_UNSIGNED_INT_24_8_REV=36269]="FLOAT_32_UNSIGNED_INT_24_8_REV",n[n.HALF_FLOAT=36193]="HALF_FLOAT",n))(Y||{}),M=(n=>(n[n.FLOAT=0]="FLOAT",n[n.INT=1]="INT",n[n.UINT=2]="UINT",n))(M||{}),Oe=(n=>(n[n.NEAREST=0]="NEAREST",n[n.LINEAR=1]="LINEAR",n))(Oe||{}),Ca=(n=>(n[n.CLAMP=33071]="CLAMP",n[n.REPEAT=10497]="REPEAT",n[n.MIRRORED_REPEAT=33648]="MIRRORED_REPEAT",n))(Ca||{}),Nr=(n=>(n[n.OFF=0]="OFF",n[n.POW2=1]="POW2",n[n.ON=2]="ON",n[n.ON_MANUAL=3]="ON_MANUAL",n))(Nr||{}),Pr=(n=>(n[n.NPM=0]="NPM",n[n.UNPACK=1]="UNPACK",n[n.PMA=2]="PMA",n[n.NO_PREMULTIPLIED_ALPHA=0]="NO_PREMULTIPLIED_ALPHA",n[n.PREMULTIPLY_ON_UPLOAD=1]="PREMULTIPLY_ON_UPLOAD",n[n.PREMULTIPLIED_ALPHA=2]="PREMULTIPLIED_ALPHA",n))(Pr||{}),Tr=(n=>(n[n.NO=0]="NO",n[n.YES=1]="YES",n[n.AUTO=2]="AUTO",n[n.BLEND=0]="BLEND",n[n.CLEAR=1]="CLEAR",n[n.BLIT=2]="BLIT",n))(Tr||{}),Ea=(n=>(n[n.AUTO=0]="AUTO",n[n.MANUAL=1]="MANUAL",n))(Ea||{}),pe=(n=>(n.LOW="lowp",n.MEDIUM="mediump",n.HIGH="highp",n))(pe||{}),Mt=(n=>(n[n.NONE=0]="NONE",n[n.SCISSOR=1]="SCISSOR",n[n.STENCIL=2]="STENCIL",n[n.SPRITE=3]="SPRITE",n[n.COLOR=4]="COLOR",n))(Mt||{}),St=(n=>(n[n.NONE=0]="NONE",n[n.LOW=2]="LOW",n[n.MEDIUM=4]="MEDIUM",n[n.HIGH=8]="HIGH",n))(St||{}),Le=(n=>(n[n.ELEMENT_ARRAY_BUFFER=34963]="ELEMENT_ARRAY_BUFFER",n[n.ARRAY_BUFFER=34962]="ARRAY_BUFFER",n[n.UNIFORM_BUFFER=35345]="UNIFORM_BUFFER",n))(Le||{});const u1={createCanvas:(n,t)=>{const r=document.createElement("canvas");return r.width=n,r.height=t,r},getCanvasRenderingContext2D:()=>CanvasRenderingContext2D,getWebGLRenderingContext:()=>WebGLRenderingContext,getNavigator:()=>navigator,getBaseUrl:()=>document.baseURI??window.location.href,getFontFaceSet:()=>document.fonts,fetch:(n,t)=>fetch(n,t),parseXML:n=>new DOMParser().parseFromString(n,"text/xml")},tt={ADAPTER:u1,RESOLUTION:1,CREATE_IMAGE_BITMAP:!1,ROUND_PIXELS:!1},h1=ol.default??ol,ni=h1(globalThis.navigator);tt.RETINA_PREFIX=/@([0-9\.]+)x/;tt.FAIL_IF_MAJOR_PERFORMANCE_CAVEAT=!1;const cl={};function rt(n,t,r=3){if(cl[t])return;let s=new Error().stack;typeof s>"u"?console.warn("PixiJS Deprecation Warning: ",`${t}
Deprecated since v${n}`):(s=s.split(`
`).splice(r).join(`
`),console.groupCollapsed?(console.groupCollapsed("%cPixiJS Deprecation Warning: %c%s","color:#614108;background:#fffbe6","font-weight:normal;color:#614108;background:#fffbe6",`${t}
Deprecated since v${n}`),console.warn(s),console.groupEnd()):(console.warn("PixiJS Deprecation Warning: ",`${t}
Deprecated since v${n}`),console.warn(s))),cl[t]=!0}let $o;function l1(){return typeof $o>"u"&&($o=function(){var t;const n={stencil:!0,failIfMajorPerformanceCaveat:tt.FAIL_IF_MAJOR_PERFORMANCE_CAVEAT};try{if(!tt.ADAPTER.getWebGLRenderingContext())return!1;const r=tt.ADAPTER.createCanvas();let s=r.getContext("webgl",n)||r.getContext("experimental-webgl",n);const a=!!((t=s==null?void 0:s.getContextAttributes())!=null&&t.stencil);if(s){const u=s.getExtension("WEBGL_lose_context");u&&u.loseContext()}return s=null,a}catch{return!1}}()),$o}Wv([Xv]);const ei=class Jn{constructor(t=16777215){this._value=null,this._components=new Float32Array(4),this._components.fill(1),this._int=16777215,this.value=t}get red(){return this._components[0]}get green(){return this._components[1]}get blue(){return this._components[2]}get alpha(){return this._components[3]}setValue(t){return this.value=t,this}set value(t){if(t instanceof Jn)this._value=this.cloneSource(t._value),this._int=t._int,this._components.set(t._components);else{if(t===null)throw new Error("Cannot set PIXI.Color#value to null");(this._value===null||!this.isSourceEqual(this._value,t))&&(this.normalize(t),this._value=this.cloneSource(t))}}get value(){return this._value}cloneSource(t){return typeof t=="string"||typeof t=="number"||t instanceof Number||t===null?t:Array.isArray(t)||ArrayBuffer.isView(t)?t.slice(0):typeof t=="object"&&t!==null?{...t}:t}isSourceEqual(t,r){const s=typeof t;if(s!==typeof r)return!1;if(s==="number"||s==="string"||t instanceof Number)return t===r;if(Array.isArray(t)&&Array.isArray(r)||ArrayBuffer.isView(t)&&ArrayBuffer.isView(r))return t.length!==r.length?!1:t.every((a,u)=>a===r[u]);if(t!==null&&r!==null){const a=Object.keys(t),u=Object.keys(r);return a.length!==u.length?!1:a.every(l=>t[l]===r[l])}return t===r}toRgba(){const[t,r,s,a]=this._components;return{r:t,g:r,b:s,a}}toRgb(){const[t,r,s]=this._components;return{r:t,g:r,b:s}}toRgbaString(){const[t,r,s]=this.toUint8RgbArray();return`rgba(${t},${r},${s},${this.alpha})`}toUint8RgbArray(t){const[r,s,a]=this._components;return t=t??[],t[0]=Math.round(r*255),t[1]=Math.round(s*255),t[2]=Math.round(a*255),t}toRgbArray(t){t=t??[];const[r,s,a]=this._components;return t[0]=r,t[1]=s,t[2]=a,t}toNumber(){return this._int}toLittleEndianNumber(){const t=this._int;return(t>>16)+(t&65280)+((t&255)<<16)}multiply(t){const[r,s,a,u]=Jn.temp.setValue(t)._components;return this._components[0]*=r,this._components[1]*=s,this._components[2]*=a,this._components[3]*=u,this.refreshInt(),this._value=null,this}premultiply(t,r=!0){return r&&(this._components[0]*=t,this._components[1]*=t,this._components[2]*=t),this._components[3]=t,this.refreshInt(),this._value=null,this}toPremultiplied(t,r=!0){if(t===1)return(255<<24)+this._int;if(t===0)return r?0:this._int;let s=this._int>>16&255,a=this._int>>8&255,u=this._int&255;return r&&(s=s*t+.5|0,a=a*t+.5|0,u=u*t+.5|0),(t*255<<24)+(s<<16)+(a<<8)+u}toHex(){const t=this._int.toString(16);return`#${"000000".substring(0,6-t.length)+t}`}toHexa(){const t=Math.round(this._components[3]*255).toString(16);return this.toHex()+"00".substring(0,2-t.length)+t}setAlpha(t){return this._components[3]=this._clamp(t),this}round(t){const[r,s,a]=this._components;return this._components[0]=Math.round(r*t)/t,this._components[1]=Math.round(s*t)/t,this._components[2]=Math.round(a*t)/t,this.refreshInt(),this._value=null,this}toArray(t){t=t??[];const[r,s,a,u]=this._components;return t[0]=r,t[1]=s,t[2]=a,t[3]=u,t}normalize(t){let r,s,a,u;if((typeof t=="number"||t instanceof Number)&&t>=0&&t<=16777215){const l=t;r=(l>>16&255)/255,s=(l>>8&255)/255,a=(l&255)/255,u=1}else if((Array.isArray(t)||t instanceof Float32Array)&&t.length>=3&&t.length<=4)t=this._clamp(t),[r,s,a,u=1]=t;else if((t instanceof Uint8Array||t instanceof Uint8ClampedArray)&&t.length>=3&&t.length<=4)t=this._clamp(t,0,255),[r,s,a,u=255]=t,r/=255,s/=255,a/=255,u/=255;else if(typeof t=="string"||typeof t=="object"){if(typeof t=="string"){const d=Jn.HEX_PATTERN.exec(t);d&&(t=`#${d[2]}`)}const l=qv(t);l.isValid()&&({r,g:s,b:a,a:u}=l.rgba,r/=255,s/=255,a/=255)}if(r!==void 0)this._components[0]=r,this._components[1]=s,this._components[2]=a,this._components[3]=u,this.refreshInt();else throw new Error(`Unable to convert color ${t}`)}refreshInt(){this._clamp(this._components);const[t,r,s]=this._components;this._int=(t*255<<16)+(r*255<<8)+(s*255|0)}_clamp(t,r=0,s=1){return typeof t=="number"?Math.min(Math.max(t,r),s):(t.forEach((a,u)=>{t[u]=Math.min(Math.max(a,r),s)}),t)}};ei.shared=new ei,ei.temp=new ei,ei.HEX_PATTERN=/^(#|0x)?(([a-f0-9]{3}){1,2}([a-f0-9]{2})?)$/i;let hi=ei;function gs(n,t=[]){return rt("7.2.0","utils.hex2rgb is deprecated, use Color#toRgbArray instead"),hi.shared.setValue(n).toRgbArray(t)}function wa(n){return rt("7.2.0","utils.rgb2hex is deprecated, use Color#toNumber instead"),hi.shared.setValue(n).toNumber()}function c1(){const n=[],t=[];for(let s=0;s<32;s++)n[s]=s,t[s]=s;n[z.NORMAL_NPM]=z.NORMAL,n[z.ADD_NPM]=z.ADD,n[z.SCREEN_NPM]=z.SCREEN,t[z.NORMAL]=z.NORMAL_NPM,t[z.ADD]=z.ADD_NPM,t[z.SCREEN]=z.SCREEN_NPM;const r=[];return r.push(t),r.push(n),r}const d1=c1();function Vl(n){if(n.BYTES_PER_ELEMENT===4)return n instanceof Float32Array?"Float32Array":n instanceof Uint32Array?"Uint32Array":"Int32Array";if(n.BYTES_PER_ELEMENT===2){if(n instanceof Uint16Array)return"Uint16Array"}else if(n.BYTES_PER_ELEMENT===1&&n instanceof Uint8Array)return"Uint8Array";return null}function ss(n){return n+=n===0?1:0,--n,n|=n>>>1,n|=n>>>2,n|=n>>>4,n|=n>>>8,n|=n>>>16,n+1}function dl(n){return!(n&n-1)&&!!n}function fl(n){let t=(n>65535?1:0)<<4;n>>>=t;let r=(n>255?1:0)<<3;return n>>>=r,t|=r,r=(n>15?1:0)<<2,n>>>=r,t|=r,r=(n>3?1:0)<<1,n>>>=r,t|=r,t|n>>1}function f1(n,t,r){const s=n.length;let a;if(t>=s||r===0)return;r=t+r>s?s-t:r;const u=s-r;for(a=t;a<u;++a)n[a]=n[a+r];n.length=u}let p1=0;function Vi(){return++p1}const pl={},Pe=Object.create(null),sr=Object.create(null);function g1(n,t=globalThis.location){if(n.startsWith("data:"))return"";t=t||globalThis.location;const r=new URL(n,document.baseURI);return r.hostname!==t.hostname||r.port!==t.port||r.protocol!==t.protocol?"anonymous":""}function gl(n,t=1){var s;const r=(s=tt.RETINA_PREFIX)==null?void 0:s.exec(n);return r?parseFloat(r[1]):t}var et=(n=>(n.Renderer="renderer",n.Application="application",n.RendererSystem="renderer-webgl-system",n.RendererPlugin="renderer-webgl-plugin",n.CanvasRendererSystem="renderer-canvas-system",n.CanvasRendererPlugin="renderer-canvas-plugin",n.Asset="asset",n.LoadParser="load-parser",n.ResolveParser="resolve-parser",n.CacheParser="cache-parser",n.DetectionParser="detection-parser",n))(et||{});const sa=n=>{if(typeof n=="function"||typeof n=="object"&&n.extension){if(!n.extension)throw new Error("Extension class must have an extension object");n={...typeof n.extension!="object"?{type:n.extension}:n.extension,ref:n}}if(typeof n=="object")n={...n};else throw new Error("Invalid extension type");return typeof n.type=="string"&&(n.type=[n.type]),n},ml=(n,t)=>sa(n).priority??t,lt={_addHandlers:{},_removeHandlers:{},_queue:{},remove(...n){return n.map(sa).forEach(t=>{t.type.forEach(r=>{var s,a;return(a=(s=this._removeHandlers)[r])==null?void 0:a.call(s,t)})}),this},add(...n){return n.map(sa).forEach(t=>{t.type.forEach(r=>{var u,l;const s=this._addHandlers,a=this._queue;s[r]?(u=s[r])==null||u.call(s,t):(a[r]=a[r]||[],(l=a[r])==null||l.push(t))})}),this},handle(n,t,r){var l;const s=this._addHandlers,a=this._removeHandlers;if(s[n]||a[n])throw new Error(`Extension type ${n} already has a handler`);s[n]=t,a[n]=r;const u=this._queue;return u[n]&&((l=u[n])==null||l.forEach(d=>t(d)),delete u[n]),this},handleByMap(n,t){return this.handle(n,r=>{r.name&&(t[r.name]=r.ref)},r=>{r.name&&delete t[r.name]})},handleByList(n,t,r=-1){return this.handle(n,s=>{t.includes(s.ref)||(t.push(s.ref),t.sort((a,u)=>ml(u,r)-ml(a,r)))},s=>{const a=t.indexOf(s.ref);a!==-1&&t.splice(a,1)})}};class m1{constructor(t){typeof t=="number"?this.rawBinaryData=new ArrayBuffer(t):t instanceof Uint8Array?this.rawBinaryData=t.buffer:this.rawBinaryData=t,this.uint32View=new Uint32Array(this.rawBinaryData),this.float32View=new Float32Array(this.rawBinaryData)}get int8View(){return this._int8View||(this._int8View=new Int8Array(this.rawBinaryData)),this._int8View}get uint8View(){return this._uint8View||(this._uint8View=new Uint8Array(this.rawBinaryData)),this._uint8View}get int16View(){return this._int16View||(this._int16View=new Int16Array(this.rawBinaryData)),this._int16View}get uint16View(){return this._uint16View||(this._uint16View=new Uint16Array(this.rawBinaryData)),this._uint16View}get int32View(){return this._int32View||(this._int32View=new Int32Array(this.rawBinaryData)),this._int32View}view(t){return this[`${t}View`]}destroy(){this.rawBinaryData=null,this._int8View=null,this._uint8View=null,this._int16View=null,this._uint16View=null,this._int32View=null,this.uint32View=null,this.float32View=null}static sizeOf(t){switch(t){case"int8":case"uint8":return 1;case"int16":case"uint16":return 2;case"int32":case"uint32":case"float32":return 4;default:throw new Error(`${t} isn't a valid view type`)}}}const _1=["precision mediump float;","void main(void){","float test = 0.1;","%forloop%","gl_FragColor = vec4(0.0);","}"].join(`
`);function v1(n){let t="";for(let r=0;r<n;++r)r>0&&(t+=`
else `),r<n-1&&(t+=`if(test == ${r}.0){}`);return t}function x1(n,t){if(n===0)throw new Error("Invalid value of `0` passed to `checkMaxIfStatementsInShader`");const r=t.createShader(t.FRAGMENT_SHADER);for(;;){const s=_1.replace(/%forloop%/gi,v1(n));if(t.shaderSource(r,s),t.compileShader(r),!t.getShaderParameter(r,t.COMPILE_STATUS))n=n/2|0;else break}return n}const Vo=0,Wo=1,Xo=2,qo=3,jo=4,Ko=5;class li{constructor(){this.data=0,this.blendMode=z.NORMAL,this.polygonOffset=0,this.blend=!0,this.depthMask=!0}get blend(){return!!(this.data&1<<Vo)}set blend(t){!!(this.data&1<<Vo)!==t&&(this.data^=1<<Vo)}get offsets(){return!!(this.data&1<<Wo)}set offsets(t){!!(this.data&1<<Wo)!==t&&(this.data^=1<<Wo)}get culling(){return!!(this.data&1<<Xo)}set culling(t){!!(this.data&1<<Xo)!==t&&(this.data^=1<<Xo)}get depthTest(){return!!(this.data&1<<qo)}set depthTest(t){!!(this.data&1<<qo)!==t&&(this.data^=1<<qo)}get depthMask(){return!!(this.data&1<<Ko)}set depthMask(t){!!(this.data&1<<Ko)!==t&&(this.data^=1<<Ko)}get clockwiseFrontFace(){return!!(this.data&1<<jo)}set clockwiseFrontFace(t){!!(this.data&1<<jo)!==t&&(this.data^=1<<jo)}get blendMode(){return this._blendMode}set blendMode(t){this.blend=t!==z.NONE,this._blendMode=t}get polygonOffset(){return this._polygonOffset}set polygonOffset(t){this.offsets=!!t,this._polygonOffset=t}static for2d(){const t=new li;return t.depthTest=!1,t.blend=!0,t}}li.prototype.toString=function(){return`[@pixi/core:State blendMode=${this.blendMode} clockwiseFrontFace=${this.clockwiseFrontFace} culling=${this.culling} depthMask=${this.depthMask} polygonOffset=${this.polygonOffset}]`};const oa=[];function Wl(n,t){if(!n)return null;let r="";if(typeof n=="string"){const s=/\.(\w{3,4})(?:$|\?|#)/i.exec(n);s&&(r=s[1].toLowerCase())}for(let s=oa.length-1;s>=0;--s){const a=oa[s];if(a.test&&a.test(n,r))return new a(n,t)}throw new Error("Unrecognized source type to auto-detect Resource")}class Se{constructor(t){this.items=[],this._name=t,this._aliasCount=0}emit(t,r,s,a,u,l,d,g){if(arguments.length>8)throw new Error("max arguments reached");const{name:_,items:C}=this;this._aliasCount++;for(let b=0,R=C.length;b<R;b++)C[b][_](t,r,s,a,u,l,d,g);return C===this.items&&this._aliasCount--,this}ensureNonAliasedItems(){this._aliasCount>0&&this.items.length>1&&(this._aliasCount=0,this.items=this.items.slice(0))}add(t){return t[this._name]&&(this.ensureNonAliasedItems(),this.remove(t),this.items.push(t)),this}remove(t){const r=this.items.indexOf(t);return r!==-1&&(this.ensureNonAliasedItems(),this.items.splice(r,1)),this}contains(t){return this.items.includes(t)}removeAll(){return this.ensureNonAliasedItems(),this.items.length=0,this}destroy(){this.removeAll(),this.items.length=0,this._name=""}get empty(){return this.items.length===0}get name(){return this._name}}Object.defineProperties(Se.prototype,{dispatch:{value:Se.prototype.emit},run:{value:Se.prototype.emit}});class Wi{constructor(t=0,r=0){this._width=t,this._height=r,this.destroyed=!1,this.internal=!1,this.onResize=new Se("setRealSize"),this.onUpdate=new Se("update"),this.onError=new Se("onError")}bind(t){this.onResize.add(t),this.onUpdate.add(t),this.onError.add(t),(this._width||this._height)&&this.onResize.emit(this._width,this._height)}unbind(t){this.onResize.remove(t),this.onUpdate.remove(t),this.onError.remove(t)}resize(t,r){(t!==this._width||r!==this._height)&&(this._width=t,this._height=r,this.onResize.emit(t,r))}get valid(){return!!this._width&&!!this._height}update(){this.destroyed||this.onUpdate.emit()}load(){return Promise.resolve(this)}get width(){return this._width}get height(){return this._height}style(t,r,s){return!1}dispose(){}destroy(){this.destroyed||(this.destroyed=!0,this.dispose(),this.onError.removeAll(),this.onError=null,this.onResize.removeAll(),this.onResize=null,this.onUpdate.removeAll(),this.onUpdate=null)}static test(t,r){return!1}}class Xl extends Wi{constructor(t,r){const{width:s,height:a}=r||{};if(!s||!a)throw new Error("BufferResource width or height invalid");super(s,a),this.data=t,this.unpackAlignment=r.unpackAlignment??4}upload(t,r,s){const a=t.gl;a.pixelStorei(a.UNPACK_ALIGNMENT,this.unpackAlignment),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,r.alphaMode===Pr.UNPACK);const u=r.realWidth,l=r.realHeight;return s.width===u&&s.height===l?a.texSubImage2D(r.target,0,0,0,u,l,r.format,s.type,this.data):(s.width=u,s.height=l,a.texImage2D(r.target,0,s.internalFormat,u,l,0,r.format,s.type,this.data)),!0}dispose(){this.data=null}static test(t){return t===null||t instanceof Int8Array||t instanceof Uint8Array||t instanceof Uint8ClampedArray||t instanceof Int16Array||t instanceof Uint16Array||t instanceof Int32Array||t instanceof Uint32Array||t instanceof Float32Array}}const y1={scaleMode:Oe.NEAREST,alphaMode:Pr.NPM},aa=class ri extends ba{constructor(t=null,r=null){super(),r=Object.assign({},ri.defaultOptions,r);const{alphaMode:s,mipmap:a,anisotropicLevel:u,scaleMode:l,width:d,height:g,wrapMode:_,format:C,type:b,target:R,resolution:F,resourceOptions:V}=r;t&&!(t instanceof Wi)&&(t=Wl(t,V),t.internal=!0),this.resolution=F||tt.RESOLUTION,this.width=Math.round((d||0)*this.resolution)/this.resolution,this.height=Math.round((g||0)*this.resolution)/this.resolution,this._mipmap=a,this.anisotropicLevel=u,this._wrapMode=_,this._scaleMode=l,this.format=C,this.type=b,this.target=R,this.alphaMode=s,this.uid=Vi(),this.touched=0,this.isPowerOfTwo=!1,this._refreshPOT(),this._glTextures={},this.dirtyId=0,this.dirtyStyleId=0,this.cacheId=null,this.valid=d>0&&g>0,this.textureCacheIds=[],this.destroyed=!1,this.resource=null,this._batchEnabled=0,this._batchLocation=0,this.parentTextureArray=null,this.setResource(t)}get realWidth(){return Math.round(this.width*this.resolution)}get realHeight(){return Math.round(this.height*this.resolution)}get mipmap(){return this._mipmap}set mipmap(t){this._mipmap!==t&&(this._mipmap=t,this.dirtyStyleId++)}get scaleMode(){return this._scaleMode}set scaleMode(t){this._scaleMode!==t&&(this._scaleMode=t,this.dirtyStyleId++)}get wrapMode(){return this._wrapMode}set wrapMode(t){this._wrapMode!==t&&(this._wrapMode=t,this.dirtyStyleId++)}setStyle(t,r){let s;return t!==void 0&&t!==this.scaleMode&&(this.scaleMode=t,s=!0),r!==void 0&&r!==this.mipmap&&(this.mipmap=r,s=!0),s&&this.dirtyStyleId++,this}setSize(t,r,s){return s=s||this.resolution,this.setRealSize(t*s,r*s,s)}setRealSize(t,r,s){return this.resolution=s||this.resolution,this.width=Math.round(t)/this.resolution,this.height=Math.round(r)/this.resolution,this._refreshPOT(),this.update(),this}_refreshPOT(){this.isPowerOfTwo=dl(this.realWidth)&&dl(this.realHeight)}setResolution(t){const r=this.resolution;return r===t?this:(this.resolution=t,this.valid&&(this.width=Math.round(this.width*r)/t,this.height=Math.round(this.height*r)/t,this.emit("update",this)),this._refreshPOT(),this)}setResource(t){if(this.resource===t)return this;if(this.resource)throw new Error("Resource can be set only once");return t.bind(this),this.resource=t,this}update(){this.valid?(this.dirtyId++,this.dirtyStyleId++,this.emit("update",this)):this.width>0&&this.height>0&&(this.valid=!0,this.emit("loaded",this),this.emit("update",this))}onError(t){this.emit("error",this,t)}destroy(){this.resource&&(this.resource.unbind(this),this.resource.internal&&this.resource.destroy(),this.resource=null),this.cacheId&&(delete sr[this.cacheId],delete Pe[this.cacheId],this.cacheId=null),this.valid=!1,this.dispose(),ri.removeFromCache(this),this.textureCacheIds=null,this.destroyed=!0,this.emit("destroyed",this),this.removeAllListeners()}dispose(){this.emit("dispose",this)}castToBaseTexture(){return this}static from(t,r,s=tt.STRICT_TEXTURE_CACHE){const a=typeof t=="string";let u=null;if(a)u=t;else{if(!t._pixiId){const d=(r==null?void 0:r.pixiIdPrefix)||"pixiid";t._pixiId=`${d}_${Vi()}`}u=t._pixiId}let l=sr[u];if(a&&s&&!l)throw new Error(`The cacheId "${u}" does not exist in BaseTextureCache.`);return l||(l=new ri(t,r),l.cacheId=u,ri.addToCache(l,u)),l}static fromBuffer(t,r,s,a){t=t||new Float32Array(r*s*4);const u=new Xl(t,{width:r,height:s,...a==null?void 0:a.resourceOptions});let l,d;return t instanceof Float32Array?(l=N.RGBA,d=Y.FLOAT):t instanceof Int32Array?(l=N.RGBA_INTEGER,d=Y.INT):t instanceof Uint32Array?(l=N.RGBA_INTEGER,d=Y.UNSIGNED_INT):t instanceof Int16Array?(l=N.RGBA_INTEGER,d=Y.SHORT):t instanceof Uint16Array?(l=N.RGBA_INTEGER,d=Y.UNSIGNED_SHORT):t instanceof Int8Array?(l=N.RGBA,d=Y.BYTE):(l=N.RGBA,d=Y.UNSIGNED_BYTE),u.internal=!0,new ri(u,Object.assign({},y1,{type:d,format:l},a))}static addToCache(t,r){r&&(t.textureCacheIds.includes(r)||t.textureCacheIds.push(r),sr[r]&&sr[r]!==t&&console.warn(`BaseTexture added to the cache with an id [${r}] that already had an entry`),sr[r]=t)}static removeFromCache(t){if(typeof t=="string"){const r=sr[t];if(r){const s=r.textureCacheIds.indexOf(t);return s>-1&&r.textureCacheIds.splice(s,1),delete sr[t],r}}else if(t!=null&&t.textureCacheIds){for(let r=0;r<t.textureCacheIds.length;++r)delete sr[t.textureCacheIds[r]];return t.textureCacheIds.length=0,t}return null}};aa.defaultOptions={mipmap:Nr.POW2,anisotropicLevel:0,scaleMode:Oe.LINEAR,wrapMode:Ca.CLAMP,alphaMode:Pr.UNPACK,target:oi.TEXTURE_2D,format:N.RGBA,type:Y.UNSIGNED_BYTE},aa._globalBatch=0;let ht=aa;class T1{constructor(){this.texArray=null,this.blend=0,this.type=ns.TRIANGLES,this.start=0,this.size=0,this.data=null}}let b1=0;class $t{constructor(t,r=!0,s=!1){this.data=t||new Float32Array(1),this._glBuffers={},this._updateID=0,this.index=s,this.static=r,this.id=b1++,this.disposeRunner=new Se("disposeBuffer")}update(t){t instanceof Array&&(t=new Float32Array(t)),this.data=t||this.data,this._updateID++}dispose(){this.disposeRunner.emit(this,!1)}destroy(){this.dispose(),this.data=null}set index(t){this.type=t?Le.ELEMENT_ARRAY_BUFFER:Le.ARRAY_BUFFER}get index(){return this.type===Le.ELEMENT_ARRAY_BUFFER}static from(t){return t instanceof Array&&(t=new Float32Array(t)),new $t(t)}}class os{constructor(t,r=0,s=!1,a=Y.FLOAT,u,l,d,g=1){this.buffer=t,this.size=r,this.normalized=s,this.type=a,this.stride=u,this.start=l,this.instance=d,this.divisor=g}destroy(){this.buffer=null}static from(t,r,s,a,u){return new os(t,r,s,a,u)}}const C1={Float32Array,Uint32Array,Int32Array,Uint8Array};function E1(n,t){let r=0,s=0;const a={};for(let g=0;g<n.length;g++)s+=t[g],r+=n[g].length;const u=new ArrayBuffer(r*4);let l=null,d=0;for(let g=0;g<n.length;g++){const _=t[g],C=n[g],b=Vl(C);a[b]||(a[b]=new C1[b](u)),l=a[b];for(let R=0;R<C.length;R++){const F=(R/_|0)*s+d,V=R%_;l[F+V]=C[R]}d+=_}return new Float32Array(u)}const _l={5126:4,5123:2,5121:1};let w1=0;const A1={Float32Array,Uint32Array,Int32Array,Uint8Array,Uint16Array};class ui{constructor(t=[],r={}){this.buffers=t,this.indexBuffer=null,this.attributes=r,this.glVertexArrayObjects={},this.id=w1++,this.instanced=!1,this.instanceCount=1,this.disposeRunner=new Se("disposeGeometry"),this.refCount=0}addAttribute(t,r,s=0,a=!1,u,l,d,g=!1){if(!r)throw new Error("You must pass a buffer when creating an attribute");r instanceof $t||(r instanceof Array&&(r=new Float32Array(r)),r=new $t(r));const _=t.split("|");if(_.length>1){for(let b=0;b<_.length;b++)this.addAttribute(_[b],r,s,a,u);return this}let C=this.buffers.indexOf(r);return C===-1&&(this.buffers.push(r),C=this.buffers.length-1),this.attributes[t]=new os(C,s,a,u,l,d,g),this.instanced=this.instanced||g,this}getAttribute(t){return this.attributes[t]}getBuffer(t){return this.buffers[this.getAttribute(t).buffer]}addIndex(t){return t instanceof $t||(t instanceof Array&&(t=new Uint16Array(t)),t=new $t(t)),t.type=Le.ELEMENT_ARRAY_BUFFER,this.indexBuffer=t,this.buffers.includes(t)||this.buffers.push(t),this}getIndex(){return this.indexBuffer}interleave(){if(this.buffers.length===1||this.buffers.length===2&&this.indexBuffer)return this;const t=[],r=[],s=new $t;let a;for(a in this.attributes){const u=this.attributes[a],l=this.buffers[u.buffer];t.push(l.data),r.push(u.size*_l[u.type]/4),u.buffer=0}for(s.data=E1(t,r),a=0;a<this.buffers.length;a++)this.buffers[a]!==this.indexBuffer&&this.buffers[a].destroy();return this.buffers=[s],this.indexBuffer&&this.buffers.push(this.indexBuffer),this}getSize(){for(const t in this.attributes){const r=this.attributes[t];return this.buffers[r.buffer].data.length/(r.stride/4||r.size)}return 0}dispose(){this.disposeRunner.emit(this,!1)}destroy(){this.dispose(),this.buffers=null,this.indexBuffer=null,this.attributes=null}clone(){const t=new ui;for(let r=0;r<this.buffers.length;r++)t.buffers[r]=new $t(this.buffers[r].data.slice(0));for(const r in this.attributes){const s=this.attributes[r];t.attributes[r]=new os(s.buffer,s.size,s.normalized,s.type,s.stride,s.start,s.instance)}return this.indexBuffer&&(t.indexBuffer=t.buffers[this.buffers.indexOf(this.indexBuffer)],t.indexBuffer.type=Le.ELEMENT_ARRAY_BUFFER),t}static merge(t){const r=new ui,s=[],a=[],u=[];let l;for(let d=0;d<t.length;d++){l=t[d];for(let g=0;g<l.buffers.length;g++)a[g]=a[g]||0,a[g]+=l.buffers[g].data.length,u[g]=0}for(let d=0;d<l.buffers.length;d++)s[d]=new A1[Vl(l.buffers[d].data)](a[d]),r.buffers[d]=new $t(s[d]);for(let d=0;d<t.length;d++){l=t[d];for(let g=0;g<l.buffers.length;g++)s[g].set(l.buffers[g].data,u[g]),u[g]+=l.buffers[g].data.length}if(r.attributes=l.attributes,l.indexBuffer){r.indexBuffer=r.buffers[l.buffers.indexOf(l.indexBuffer)],r.indexBuffer.type=Le.ELEMENT_ARRAY_BUFFER;let d=0,g=0,_=0,C=0;for(let b=0;b<l.buffers.length;b++)if(l.buffers[b]!==l.indexBuffer){C=b;break}for(const b in l.attributes){const R=l.attributes[b];(R.buffer|0)===C&&(g+=R.size*_l[R.type]/4)}for(let b=0;b<t.length;b++){const R=t[b].indexBuffer.data;for(let F=0;F<R.length;F++)r.indexBuffer.data[F+_]+=d;d+=t[b].buffers[C].data.length/g,_+=R.length}}return r}}class R1 extends ui{constructor(t=!1){super(),this._buffer=new $t(null,t,!1),this._indexBuffer=new $t(null,t,!0),this.addAttribute("aVertexPosition",this._buffer,2,!1,Y.FLOAT).addAttribute("aTextureCoord",this._buffer,2,!1,Y.FLOAT).addAttribute("aColor",this._buffer,4,!0,Y.UNSIGNED_BYTE).addAttribute("aTextureId",this._buffer,1,!0,Y.FLOAT).addIndex(this._indexBuffer)}}const S1=Math.PI*2,as=Math.PI/180;var ql=(n=>(n[n.POLY=0]="POLY",n[n.RECT=1]="RECT",n[n.CIRC=2]="CIRC",n[n.ELIP=3]="ELIP",n[n.RREC=4]="RREC",n))(ql||{});class yt{constructor(t=0,r=0){this.x=0,this.y=0,this.x=t,this.y=r}clone(){return new yt(this.x,this.y)}copyFrom(t){return this.set(t.x,t.y),this}copyTo(t){return t.set(this.x,this.y),t}equals(t){return t.x===this.x&&t.y===this.y}set(t=0,r=t){return this.x=t,this.y=r,this}}yt.prototype.toString=function(){return`[@pixi/math:Point x=${this.x} y=${this.y}]`};const Hn=[new yt,new yt,new yt,new yt];class Et{constructor(t=0,r=0,s=0,a=0){this.x=Number(t),this.y=Number(r),this.width=Number(s),this.height=Number(a),this.type=ql.RECT}get left(){return this.x}get right(){return this.x+this.width}get top(){return this.y}get bottom(){return this.y+this.height}static get EMPTY(){return new Et(0,0,0,0)}clone(){return new Et(this.x,this.y,this.width,this.height)}copyFrom(t){return this.x=t.x,this.y=t.y,this.width=t.width,this.height=t.height,this}copyTo(t){return t.x=this.x,t.y=this.y,t.width=this.width,t.height=this.height,t}contains(t,r){return this.width<=0||this.height<=0?!1:t>=this.x&&t<this.x+this.width&&r>=this.y&&r<this.y+this.height}intersects(t,r){if(!r){const Ue=this.x<t.x?t.x:this.x;if((this.right>t.right?t.right:this.right)<=Ue)return!1;const hr=this.y<t.y?t.y:this.y;return(this.bottom>t.bottom?t.bottom:this.bottom)>hr}const s=this.left,a=this.right,u=this.top,l=this.bottom;if(a<=s||l<=u)return!1;const d=Hn[0].set(t.left,t.top),g=Hn[1].set(t.left,t.bottom),_=Hn[2].set(t.right,t.top),C=Hn[3].set(t.right,t.bottom);if(_.x<=d.x||g.y<=d.y)return!1;const b=Math.sign(r.a*r.d-r.b*r.c);if(b===0||(r.apply(d,d),r.apply(g,g),r.apply(_,_),r.apply(C,C),Math.max(d.x,g.x,_.x,C.x)<=s||Math.min(d.x,g.x,_.x,C.x)>=a||Math.max(d.y,g.y,_.y,C.y)<=u||Math.min(d.y,g.y,_.y,C.y)>=l))return!1;const R=b*(g.y-d.y),F=b*(d.x-g.x),V=R*s+F*u,U=R*a+F*u,B=R*s+F*l,mt=R*a+F*l;if(Math.max(V,U,B,mt)<=R*d.x+F*d.y||Math.min(V,U,B,mt)>=R*C.x+F*C.y)return!1;const ge=b*(d.y-_.y),Tt=b*(_.x-d.x),me=ge*s+Tt*u,kt=ge*a+Tt*u,_e=ge*s+Tt*l,Vt=ge*a+Tt*l;return!(Math.max(me,kt,_e,Vt)<=ge*d.x+Tt*d.y||Math.min(me,kt,_e,Vt)>=ge*C.x+Tt*C.y)}pad(t=0,r=t){return this.x-=t,this.y-=r,this.width+=t*2,this.height+=r*2,this}fit(t){const r=Math.max(this.x,t.x),s=Math.min(this.x+this.width,t.x+t.width),a=Math.max(this.y,t.y),u=Math.min(this.y+this.height,t.y+t.height);return this.x=r,this.width=Math.max(s-r,0),this.y=a,this.height=Math.max(u-a,0),this}ceil(t=1,r=.001){const s=Math.ceil((this.x+this.width-r)*t)/t,a=Math.ceil((this.y+this.height-r)*t)/t;return this.x=Math.floor((this.x+r)*t)/t,this.y=Math.floor((this.y+r)*t)/t,this.width=s-this.x,this.height=a-this.y,this}enlarge(t){const r=Math.min(this.x,t.x),s=Math.max(this.x+this.width,t.x+t.width),a=Math.min(this.y,t.y),u=Math.max(this.y+this.height,t.y+t.height);return this.x=r,this.width=s-r,this.y=a,this.height=u-a,this}}Et.prototype.toString=function(){return`[@pixi/math:Rectangle x=${this.x} y=${this.y} width=${this.width} height=${this.height}]`};class Pt{constructor(t=1,r=0,s=0,a=1,u=0,l=0){this.array=null,this.a=t,this.b=r,this.c=s,this.d=a,this.tx=u,this.ty=l}fromArray(t){this.a=t[0],this.b=t[1],this.c=t[3],this.d=t[4],this.tx=t[2],this.ty=t[5]}set(t,r,s,a,u,l){return this.a=t,this.b=r,this.c=s,this.d=a,this.tx=u,this.ty=l,this}toArray(t,r){this.array||(this.array=new Float32Array(9));const s=r||this.array;return t?(s[0]=this.a,s[1]=this.b,s[2]=0,s[3]=this.c,s[4]=this.d,s[5]=0,s[6]=this.tx,s[7]=this.ty,s[8]=1):(s[0]=this.a,s[1]=this.c,s[2]=this.tx,s[3]=this.b,s[4]=this.d,s[5]=this.ty,s[6]=0,s[7]=0,s[8]=1),s}apply(t,r){r=r||new yt;const s=t.x,a=t.y;return r.x=this.a*s+this.c*a+this.tx,r.y=this.b*s+this.d*a+this.ty,r}applyInverse(t,r){r=r||new yt;const s=1/(this.a*this.d+this.c*-this.b),a=t.x,u=t.y;return r.x=this.d*s*a+-this.c*s*u+(this.ty*this.c-this.tx*this.d)*s,r.y=this.a*s*u+-this.b*s*a+(-this.ty*this.a+this.tx*this.b)*s,r}translate(t,r){return this.tx+=t,this.ty+=r,this}scale(t,r){return this.a*=t,this.d*=r,this.c*=t,this.b*=r,this.tx*=t,this.ty*=r,this}rotate(t){const r=Math.cos(t),s=Math.sin(t),a=this.a,u=this.c,l=this.tx;return this.a=a*r-this.b*s,this.b=a*s+this.b*r,this.c=u*r-this.d*s,this.d=u*s+this.d*r,this.tx=l*r-this.ty*s,this.ty=l*s+this.ty*r,this}append(t){const r=this.a,s=this.b,a=this.c,u=this.d;return this.a=t.a*r+t.b*a,this.b=t.a*s+t.b*u,this.c=t.c*r+t.d*a,this.d=t.c*s+t.d*u,this.tx=t.tx*r+t.ty*a+this.tx,this.ty=t.tx*s+t.ty*u+this.ty,this}setTransform(t,r,s,a,u,l,d,g,_){return this.a=Math.cos(d+_)*u,this.b=Math.sin(d+_)*u,this.c=-Math.sin(d-g)*l,this.d=Math.cos(d-g)*l,this.tx=t-(s*this.a+a*this.c),this.ty=r-(s*this.b+a*this.d),this}prepend(t){const r=this.tx;if(t.a!==1||t.b!==0||t.c!==0||t.d!==1){const s=this.a,a=this.c;this.a=s*t.a+this.b*t.c,this.b=s*t.b+this.b*t.d,this.c=a*t.a+this.d*t.c,this.d=a*t.b+this.d*t.d}return this.tx=r*t.a+this.ty*t.c+t.tx,this.ty=r*t.b+this.ty*t.d+t.ty,this}decompose(t){const r=this.a,s=this.b,a=this.c,u=this.d,l=t.pivot,d=-Math.atan2(-a,u),g=Math.atan2(s,r),_=Math.abs(d+g);return _<1e-5||Math.abs(S1-_)<1e-5?(t.rotation=g,t.skew.x=t.skew.y=0):(t.rotation=0,t.skew.x=d,t.skew.y=g),t.scale.x=Math.sqrt(r*r+s*s),t.scale.y=Math.sqrt(a*a+u*u),t.position.x=this.tx+(l.x*r+l.y*a),t.position.y=this.ty+(l.x*s+l.y*u),t}invert(){const t=this.a,r=this.b,s=this.c,a=this.d,u=this.tx,l=t*a-r*s;return this.a=a/l,this.b=-r/l,this.c=-s/l,this.d=t/l,this.tx=(s*this.ty-a*u)/l,this.ty=-(t*this.ty-r*u)/l,this}identity(){return this.a=1,this.b=0,this.c=0,this.d=1,this.tx=0,this.ty=0,this}clone(){const t=new Pt;return t.a=this.a,t.b=this.b,t.c=this.c,t.d=this.d,t.tx=this.tx,t.ty=this.ty,t}copyTo(t){return t.a=this.a,t.b=this.b,t.c=this.c,t.d=this.d,t.tx=this.tx,t.ty=this.ty,t}copyFrom(t){return this.a=t.a,this.b=t.b,this.c=t.c,this.d=t.d,this.tx=t.tx,this.ty=t.ty,this}static get IDENTITY(){return new Pt}static get TEMP_MATRIX(){return new Pt}}Pt.prototype.toString=function(){return`[@pixi/math:Matrix a=${this.a} b=${this.b} c=${this.c} d=${this.d} tx=${this.tx} ty=${this.ty}]`};const br=[1,1,0,-1,-1,-1,0,1,1,1,0,-1,-1,-1,0,1],Cr=[0,1,1,1,0,-1,-1,-1,0,1,1,1,0,-1,-1,-1],Er=[0,-1,-1,-1,0,1,1,1,0,1,1,1,0,-1,-1,-1],wr=[1,1,0,-1,-1,-1,0,1,-1,-1,0,1,1,1,0,-1],ua=[],jl=[],$n=Math.sign;function I1(){for(let n=0;n<16;n++){const t=[];ua.push(t);for(let r=0;r<16;r++){const s=$n(br[n]*br[r]+Er[n]*Cr[r]),a=$n(Cr[n]*br[r]+wr[n]*Cr[r]),u=$n(br[n]*Er[r]+Er[n]*wr[r]),l=$n(Cr[n]*Er[r]+wr[n]*wr[r]);for(let d=0;d<16;d++)if(br[d]===s&&Cr[d]===a&&Er[d]===u&&wr[d]===l){t.push(d);break}}}for(let n=0;n<16;n++){const t=new Pt;t.set(br[n],Cr[n],Er[n],wr[n],0,0),jl.push(t)}}I1();const xt={E:0,SE:1,S:2,SW:3,W:4,NW:5,N:6,NE:7,MIRROR_VERTICAL:8,MAIN_DIAGONAL:10,MIRROR_HORIZONTAL:12,REVERSE_DIAGONAL:14,uX:n=>br[n],uY:n=>Cr[n],vX:n=>Er[n],vY:n=>wr[n],inv:n=>n&8?n&15:-n&7,add:(n,t)=>ua[n][t],sub:(n,t)=>ua[n][xt.inv(t)],rotate180:n=>n^4,isVertical:n=>(n&3)===2,byDirection:(n,t)=>Math.abs(n)*2<=Math.abs(t)?t>=0?xt.S:xt.N:Math.abs(t)*2<=Math.abs(n)?n>0?xt.E:xt.W:t>0?n>0?xt.SE:xt.SW:n>0?xt.NE:xt.NW,matrixAppendRotationInv:(n,t,r=0,s=0)=>{const a=jl[xt.inv(t)];a.tx=r,a.ty=s,n.append(a)}};class ar{constructor(t,r,s=0,a=0){this._x=s,this._y=a,this.cb=t,this.scope=r}clone(t=this.cb,r=this.scope){return new ar(t,r,this._x,this._y)}set(t=0,r=t){return(this._x!==t||this._y!==r)&&(this._x=t,this._y=r,this.cb.call(this.scope)),this}copyFrom(t){return(this._x!==t.x||this._y!==t.y)&&(this._x=t.x,this._y=t.y,this.cb.call(this.scope)),this}copyTo(t){return t.set(this._x,this._y),t}equals(t){return t.x===this._x&&t.y===this._y}get x(){return this._x}set x(t){this._x!==t&&(this._x=t,this.cb.call(this.scope))}get y(){return this._y}set y(t){this._y!==t&&(this._y=t,this.cb.call(this.scope))}}ar.prototype.toString=function(){return`[@pixi/math:ObservablePoint x=${this.x} y=${this.y} scope=${this.scope}]`};const ha=class{constructor(){this.worldTransform=new Pt,this.localTransform=new Pt,this.position=new ar(this.onChange,this,0,0),this.scale=new ar(this.onChange,this,1,1),this.pivot=new ar(this.onChange,this,0,0),this.skew=new ar(this.updateSkew,this,0,0),this._rotation=0,this._cx=1,this._sx=0,this._cy=0,this._sy=1,this._localID=0,this._currentLocalID=0,this._worldID=0,this._parentID=0}onChange(){this._localID++}updateSkew(){this._cx=Math.cos(this._rotation+this.skew.y),this._sx=Math.sin(this._rotation+this.skew.y),this._cy=-Math.sin(this._rotation-this.skew.x),this._sy=Math.cos(this._rotation-this.skew.x),this._localID++}updateLocalTransform(){const n=this.localTransform;this._localID!==this._currentLocalID&&(n.a=this._cx*this.scale.x,n.b=this._sx*this.scale.x,n.c=this._cy*this.scale.y,n.d=this._sy*this.scale.y,n.tx=this.position.x-(this.pivot.x*n.a+this.pivot.y*n.c),n.ty=this.position.y-(this.pivot.x*n.b+this.pivot.y*n.d),this._currentLocalID=this._localID,this._parentID=-1)}updateTransform(n){const t=this.localTransform;if(this._localID!==this._currentLocalID&&(t.a=this._cx*this.scale.x,t.b=this._sx*this.scale.x,t.c=this._cy*this.scale.y,t.d=this._sy*this.scale.y,t.tx=this.position.x-(this.pivot.x*t.a+this.pivot.y*t.c),t.ty=this.position.y-(this.pivot.x*t.b+this.pivot.y*t.d),this._currentLocalID=this._localID,this._parentID=-1),this._parentID!==n._worldID){const r=n.worldTransform,s=this.worldTransform;s.a=t.a*r.a+t.b*r.c,s.b=t.a*r.b+t.b*r.d,s.c=t.c*r.a+t.d*r.c,s.d=t.c*r.b+t.d*r.d,s.tx=t.tx*r.a+t.ty*r.c+r.tx,s.ty=t.tx*r.b+t.ty*r.d+r.ty,this._parentID=n._worldID,this._worldID++}}setFromMatrix(n){n.decompose(this),this._localID++}get rotation(){return this._rotation}set rotation(n){this._rotation!==n&&(this._rotation=n,this.updateSkew())}};ha.IDENTITY=new ha;let Kl=ha;Kl.prototype.toString=function(){return`[@pixi/math:Transform position=(${this.position.x}, ${this.position.y}) rotation=${this.rotation} scale=(${this.scale.x}, ${this.scale.y}) skew=(${this.skew.x}, ${this.skew.y}) ]`};var F1=`varying vec2 vTextureCoord;

uniform sampler2D uSampler;

void main(void){
   gl_FragColor *= texture2D(uSampler, vTextureCoord);
}`,N1=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void){
   gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
   vTextureCoord = aTextureCoord;
}
`;function vl(n,t,r){const s=n.createShader(t);return n.shaderSource(s,r),n.compileShader(s),s}function Yo(n){const t=new Array(n);for(let r=0;r<t.length;r++)t[r]=!1;return t}function Yl(n,t){switch(n){case"float":return 0;case"vec2":return new Float32Array(2*t);case"vec3":return new Float32Array(3*t);case"vec4":return new Float32Array(4*t);case"int":case"uint":case"sampler2D":case"sampler2DArray":return 0;case"ivec2":return new Int32Array(2*t);case"ivec3":return new Int32Array(3*t);case"ivec4":return new Int32Array(4*t);case"uvec2":return new Uint32Array(2*t);case"uvec3":return new Uint32Array(3*t);case"uvec4":return new Uint32Array(4*t);case"bool":return!1;case"bvec2":return Yo(2*t);case"bvec3":return Yo(3*t);case"bvec4":return Yo(4*t);case"mat2":return new Float32Array([1,0,0,1]);case"mat3":return new Float32Array([1,0,0,0,1,0,0,0,1]);case"mat4":return new Float32Array([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1])}return null}const ai=[{test:n=>n.type==="float"&&n.size===1&&!n.isArray,code:n=>`
            if(uv["${n}"] !== ud["${n}"].value)
            {
                ud["${n}"].value = uv["${n}"]
                gl.uniform1f(ud["${n}"].location, uv["${n}"])
            }
            `},{test:(n,t)=>(n.type==="sampler2D"||n.type==="samplerCube"||n.type==="sampler2DArray")&&n.size===1&&!n.isArray&&(t==null||t.castToBaseTexture!==void 0),code:n=>`t = syncData.textureCount++;

            renderer.texture.bind(uv["${n}"], t);

            if(ud["${n}"].value !== t)
            {
                ud["${n}"].value = t;
                gl.uniform1i(ud["${n}"].location, t);
; // eslint-disable-line max-len
            }`},{test:(n,t)=>n.type==="mat3"&&n.size===1&&!n.isArray&&t.a!==void 0,code:n=>`
            gl.uniformMatrix3fv(ud["${n}"].location, false, uv["${n}"].toArray(true));
            `,codeUbo:n=>`
                var ${n}_matrix = uv.${n}.toArray(true);

                data[offset] = ${n}_matrix[0];
                data[offset+1] = ${n}_matrix[1];
                data[offset+2] = ${n}_matrix[2];
        
                data[offset + 4] = ${n}_matrix[3];
                data[offset + 5] = ${n}_matrix[4];
                data[offset + 6] = ${n}_matrix[5];
        
                data[offset + 8] = ${n}_matrix[6];
                data[offset + 9] = ${n}_matrix[7];
                data[offset + 10] = ${n}_matrix[8];
            `},{test:(n,t)=>n.type==="vec2"&&n.size===1&&!n.isArray&&t.x!==void 0,code:n=>`
                cv = ud["${n}"].value;
                v = uv["${n}"];

                if(cv[0] !== v.x || cv[1] !== v.y)
                {
                    cv[0] = v.x;
                    cv[1] = v.y;
                    gl.uniform2f(ud["${n}"].location, v.x, v.y);
                }`,codeUbo:n=>`
                v = uv.${n};

                data[offset] = v.x;
                data[offset+1] = v.y;
            `},{test:n=>n.type==="vec2"&&n.size===1&&!n.isArray,code:n=>`
                cv = ud["${n}"].value;
                v = uv["${n}"];

                if(cv[0] !== v[0] || cv[1] !== v[1])
                {
                    cv[0] = v[0];
                    cv[1] = v[1];
                    gl.uniform2f(ud["${n}"].location, v[0], v[1]);
                }
            `},{test:(n,t)=>n.type==="vec4"&&n.size===1&&!n.isArray&&t.width!==void 0,code:n=>`
                cv = ud["${n}"].value;
                v = uv["${n}"];

                if(cv[0] !== v.x || cv[1] !== v.y || cv[2] !== v.width || cv[3] !== v.height)
                {
                    cv[0] = v.x;
                    cv[1] = v.y;
                    cv[2] = v.width;
                    cv[3] = v.height;
                    gl.uniform4f(ud["${n}"].location, v.x, v.y, v.width, v.height)
                }`,codeUbo:n=>`
                    v = uv.${n};

                    data[offset] = v.x;
                    data[offset+1] = v.y;
                    data[offset+2] = v.width;
                    data[offset+3] = v.height;
                `},{test:(n,t)=>n.type==="vec4"&&n.size===1&&!n.isArray&&t.red!==void 0,code:n=>`
                cv = ud["${n}"].value;
                v = uv["${n}"];

                if(cv[0] !== v.red || cv[1] !== v.green || cv[2] !== v.blue || cv[3] !== v.alpha)
                {
                    cv[0] = v.red;
                    cv[1] = v.green;
                    cv[2] = v.blue;
                    cv[3] = v.alpha;
                    gl.uniform4f(ud["${n}"].location, v.red, v.green, v.blue, v.alpha)
                }`,codeUbo:n=>`
                    v = uv.${n};

                    data[offset] = v.red;
                    data[offset+1] = v.green;
                    data[offset+2] = v.blue;
                    data[offset+3] = v.alpha;
                `},{test:(n,t)=>n.type==="vec3"&&n.size===1&&!n.isArray&&t.red!==void 0,code:n=>`
                cv = ud["${n}"].value;
                v = uv["${n}"];

                if(cv[0] !== v.red || cv[1] !== v.green || cv[2] !== v.blue || cv[3] !== v.a)
                {
                    cv[0] = v.red;
                    cv[1] = v.green;
                    cv[2] = v.blue;
    
                    gl.uniform3f(ud["${n}"].location, v.red, v.green, v.blue)
                }`,codeUbo:n=>`
                    v = uv.${n};

                    data[offset] = v.red;
                    data[offset+1] = v.green;
                    data[offset+2] = v.blue;
                `},{test:n=>n.type==="vec4"&&n.size===1&&!n.isArray,code:n=>`
                cv = ud["${n}"].value;
                v = uv["${n}"];

                if(cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2] || cv[3] !== v[3])
                {
                    cv[0] = v[0];
                    cv[1] = v[1];
                    cv[2] = v[2];
                    cv[3] = v[3];

                    gl.uniform4f(ud["${n}"].location, v[0], v[1], v[2], v[3])
                }`}],M1={float:`
    if (cv !== v)
    {
        cu.value = v;
        gl.uniform1f(location, v);
    }`,vec2:`
    if (cv[0] !== v[0] || cv[1] !== v[1])
    {
        cv[0] = v[0];
        cv[1] = v[1];

        gl.uniform2f(location, v[0], v[1])
    }`,vec3:`
    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2])
    {
        cv[0] = v[0];
        cv[1] = v[1];
        cv[2] = v[2];

        gl.uniform3f(location, v[0], v[1], v[2])
    }`,vec4:`
    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2] || cv[3] !== v[3])
    {
        cv[0] = v[0];
        cv[1] = v[1];
        cv[2] = v[2];
        cv[3] = v[3];

        gl.uniform4f(location, v[0], v[1], v[2], v[3]);
    }`,int:`
    if (cv !== v)
    {
        cu.value = v;

        gl.uniform1i(location, v);
    }`,ivec2:`
    if (cv[0] !== v[0] || cv[1] !== v[1])
    {
        cv[0] = v[0];
        cv[1] = v[1];

        gl.uniform2i(location, v[0], v[1]);
    }`,ivec3:`
    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2])
    {
        cv[0] = v[0];
        cv[1] = v[1];
        cv[2] = v[2];

        gl.uniform3i(location, v[0], v[1], v[2]);
    }`,ivec4:`
    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2] || cv[3] !== v[3])
    {
        cv[0] = v[0];
        cv[1] = v[1];
        cv[2] = v[2];
        cv[3] = v[3];

        gl.uniform4i(location, v[0], v[1], v[2], v[3]);
    }`,uint:`
    if (cv !== v)
    {
        cu.value = v;

        gl.uniform1ui(location, v);
    }`,uvec2:`
    if (cv[0] !== v[0] || cv[1] !== v[1])
    {
        cv[0] = v[0];
        cv[1] = v[1];

        gl.uniform2ui(location, v[0], v[1]);
    }`,uvec3:`
    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2])
    {
        cv[0] = v[0];
        cv[1] = v[1];
        cv[2] = v[2];

        gl.uniform3ui(location, v[0], v[1], v[2]);
    }`,uvec4:`
    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2] || cv[3] !== v[3])
    {
        cv[0] = v[0];
        cv[1] = v[1];
        cv[2] = v[2];
        cv[3] = v[3];

        gl.uniform4ui(location, v[0], v[1], v[2], v[3]);
    }`,bool:`
    if (cv !== v)
    {
        cu.value = v;
        gl.uniform1i(location, v);
    }`,bvec2:`
    if (cv[0] != v[0] || cv[1] != v[1])
    {
        cv[0] = v[0];
        cv[1] = v[1];

        gl.uniform2i(location, v[0], v[1]);
    }`,bvec3:`
    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2])
    {
        cv[0] = v[0];
        cv[1] = v[1];
        cv[2] = v[2];

        gl.uniform3i(location, v[0], v[1], v[2]);
    }`,bvec4:`
    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2] || cv[3] !== v[3])
    {
        cv[0] = v[0];
        cv[1] = v[1];
        cv[2] = v[2];
        cv[3] = v[3];

        gl.uniform4i(location, v[0], v[1], v[2], v[3]);
    }`,mat2:"gl.uniformMatrix2fv(location, false, v)",mat3:"gl.uniformMatrix3fv(location, false, v)",mat4:"gl.uniformMatrix4fv(location, false, v)",sampler2D:`
    if (cv !== v)
    {
        cu.value = v;

        gl.uniform1i(location, v);
    }`,samplerCube:`
    if (cv !== v)
    {
        cu.value = v;

        gl.uniform1i(location, v);
    }`,sampler2DArray:`
    if (cv !== v)
    {
        cu.value = v;

        gl.uniform1i(location, v);
    }`},P1={float:"gl.uniform1fv(location, v)",vec2:"gl.uniform2fv(location, v)",vec3:"gl.uniform3fv(location, v)",vec4:"gl.uniform4fv(location, v)",mat4:"gl.uniformMatrix4fv(location, false, v)",mat3:"gl.uniformMatrix3fv(location, false, v)",mat2:"gl.uniformMatrix2fv(location, false, v)",int:"gl.uniform1iv(location, v)",ivec2:"gl.uniform2iv(location, v)",ivec3:"gl.uniform3iv(location, v)",ivec4:"gl.uniform4iv(location, v)",uint:"gl.uniform1uiv(location, v)",uvec2:"gl.uniform2uiv(location, v)",uvec3:"gl.uniform3uiv(location, v)",uvec4:"gl.uniform4uiv(location, v)",bool:"gl.uniform1iv(location, v)",bvec2:"gl.uniform2iv(location, v)",bvec3:"gl.uniform3iv(location, v)",bvec4:"gl.uniform4iv(location, v)",sampler2D:"gl.uniform1iv(location, v)",samplerCube:"gl.uniform1iv(location, v)",sampler2DArray:"gl.uniform1iv(location, v)"};function O1(n,t){var s;const r=[`
        var v = null;
        var cv = null;
        var cu = null;
        var t = 0;
        var gl = renderer.gl;
    `];for(const a in n.uniforms){const u=t[a];if(!u){((s=n.uniforms[a])==null?void 0:s.group)===!0&&(n.uniforms[a].ubo?r.push(`
                        renderer.shader.syncUniformBufferGroup(uv.${a}, '${a}');
                    `):r.push(`
                        renderer.shader.syncUniformGroup(uv.${a}, syncData);
                    `));continue}const l=n.uniforms[a];let d=!1;for(let g=0;g<ai.length;g++)if(ai[g].test(u,l)){r.push(ai[g].code(a,l)),d=!0;break}if(!d){const g=(u.size===1&&!u.isArray?M1:P1)[u.type].replace("location",`ud["${a}"].location`);r.push(`
            cu = ud["${a}"];
            cv = cu.value;
            v = uv["${a}"];
            ${g};`)}}return new Function("ud","uv","renderer","syncData",r.join(`
`))}const Zl={};let Qr=Zl;function L1(){if(Qr===Zl||Qr!=null&&Qr.isContextLost()){const n=tt.ADAPTER.createCanvas();let t;tt.PREFER_ENV>=Mr.WEBGL2&&(t=n.getContext("webgl2",{})),t||(t=n.getContext("webgl",{})||n.getContext("experimental-webgl",{}),t?t.getExtension("WEBGL_draw_buffers"):t=null),Qr=t}return Qr}let Vn;function B1(){if(!Vn){Vn=pe.MEDIUM;const n=L1();if(n&&n.getShaderPrecisionFormat){const t=n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT);t&&(Vn=t.precision?pe.HIGH:pe.MEDIUM)}}return Vn}function xl(n,t){const r=n.getShaderSource(t).split(`
`).map((_,C)=>`${C}: ${_}`),s=n.getShaderInfoLog(t),a=s.split(`
`),u={},l=a.map(_=>parseFloat(_.replace(/^ERROR\: 0\:([\d]+)\:.*$/,"$1"))).filter(_=>_&&!u[_]?(u[_]=!0,!0):!1),d=[""];l.forEach(_=>{r[_-1]=`%c${r[_-1]}%c`,d.push("background: #FF0000; color:#FFFFFF; font-size: 10px","font-size: 10px")});const g=r.join(`
`);d[0]=g,console.error(s),console.groupCollapsed("click to view full shader code"),console.warn(...d),console.groupEnd()}function U1(n,t,r,s){n.getProgramParameter(t,n.LINK_STATUS)||(n.getShaderParameter(r,n.COMPILE_STATUS)||xl(n,r),n.getShaderParameter(s,n.COMPILE_STATUS)||xl(n,s),console.error("PixiJS Error: Could not initialize shader."),n.getProgramInfoLog(t)!==""&&console.warn("PixiJS Warning: gl.getProgramInfoLog()",n.getProgramInfoLog(t)))}const k1={float:1,vec2:2,vec3:3,vec4:4,int:1,ivec2:2,ivec3:3,ivec4:4,uint:1,uvec2:2,uvec3:3,uvec4:4,bool:1,bvec2:2,bvec3:3,bvec4:4,mat2:4,mat3:9,mat4:16,sampler2D:1};function Jl(n){return k1[n]}let Wn=null;const yl={FLOAT:"float",FLOAT_VEC2:"vec2",FLOAT_VEC3:"vec3",FLOAT_VEC4:"vec4",INT:"int",INT_VEC2:"ivec2",INT_VEC3:"ivec3",INT_VEC4:"ivec4",UNSIGNED_INT:"uint",UNSIGNED_INT_VEC2:"uvec2",UNSIGNED_INT_VEC3:"uvec3",UNSIGNED_INT_VEC4:"uvec4",BOOL:"bool",BOOL_VEC2:"bvec2",BOOL_VEC3:"bvec3",BOOL_VEC4:"bvec4",FLOAT_MAT2:"mat2",FLOAT_MAT3:"mat3",FLOAT_MAT4:"mat4",SAMPLER_2D:"sampler2D",INT_SAMPLER_2D:"sampler2D",UNSIGNED_INT_SAMPLER_2D:"sampler2D",SAMPLER_CUBE:"samplerCube",INT_SAMPLER_CUBE:"samplerCube",UNSIGNED_INT_SAMPLER_CUBE:"samplerCube",SAMPLER_2D_ARRAY:"sampler2DArray",INT_SAMPLER_2D_ARRAY:"sampler2DArray",UNSIGNED_INT_SAMPLER_2D_ARRAY:"sampler2DArray"};function Ql(n,t){if(!Wn){const r=Object.keys(yl);Wn={};for(let s=0;s<r.length;++s){const a=r[s];Wn[n[a]]=yl[a]}}return Wn[t]}function Tl(n,t,r){if(n.substring(0,9)!=="precision"){let s=t;return t===pe.HIGH&&r!==pe.HIGH&&(s=pe.MEDIUM),`precision ${s} float;
${n}`}else if(r!==pe.HIGH&&n.substring(0,15)==="precision highp")return n.replace("precision highp","precision mediump");return n}let Bi;function G1(){if(typeof Bi=="boolean")return Bi;try{Bi=new Function("param1","param2","param3","return param1[param2] === param3;")({a:"b"},"a","b")===!0}catch{Bi=!1}return Bi}let D1=0;const Xn={},la=class ii{constructor(t,r,s="pixi-shader",a={}){this.extra={},this.id=D1++,this.vertexSrc=t||ii.defaultVertexSrc,this.fragmentSrc=r||ii.defaultFragmentSrc,this.vertexSrc=this.vertexSrc.trim(),this.fragmentSrc=this.fragmentSrc.trim(),this.extra=a,this.vertexSrc.substring(0,8)!=="#version"&&(s=s.replace(/\s+/g,"-"),Xn[s]?(Xn[s]++,s+=`-${Xn[s]}`):Xn[s]=1,this.vertexSrc=`#define SHADER_NAME ${s}
${this.vertexSrc}`,this.fragmentSrc=`#define SHADER_NAME ${s}
${this.fragmentSrc}`,this.vertexSrc=Tl(this.vertexSrc,ii.defaultVertexPrecision,pe.HIGH),this.fragmentSrc=Tl(this.fragmentSrc,ii.defaultFragmentPrecision,B1())),this.glPrograms={},this.syncUniforms=null}static get defaultVertexSrc(){return N1}static get defaultFragmentSrc(){return F1}static from(t,r,s){const a=t+r;let u=pl[a];return u||(pl[a]=u=new ii(t,r,s)),u}};la.defaultVertexPrecision=pe.HIGH,la.defaultFragmentPrecision=ni.apple.device?pe.HIGH:pe.MEDIUM;let Fr=la,z1=0;class Be{constructor(t,r,s){this.group=!0,this.syncUniforms={},this.dirtyId=0,this.id=z1++,this.static=!!r,this.ubo=!!s,t instanceof $t?(this.buffer=t,this.buffer.type=Le.UNIFORM_BUFFER,this.autoManage=!1,this.ubo=!0):(this.uniforms=t,this.ubo&&(this.buffer=new $t(new Float32Array(1)),this.buffer.type=Le.UNIFORM_BUFFER,this.autoManage=!0))}update(){this.dirtyId++,!this.autoManage&&this.buffer&&this.buffer.update()}add(t,r,s){if(!this.ubo)this.uniforms[t]=new Be(r,s);else throw new Error("[UniformGroup] uniform groups in ubo mode cannot be modified, or have uniform groups nested in them")}static from(t,r,s){return new Be(t,r,s)}static uboFrom(t,r){return new Be(t,r??!0,!0)}}class ms{constructor(t,r){this.uniformBindCount=0,this.program=t,r?r instanceof Be?this.uniformGroup=r:this.uniformGroup=new Be(r):this.uniformGroup=new Be({}),this.disposeRunner=new Se("disposeShader")}checkUniformExists(t,r){if(r.uniforms[t])return!0;for(const s in r.uniforms){const a=r.uniforms[s];if(a.group===!0&&this.checkUniformExists(t,a))return!0}return!1}destroy(){this.uniformGroup=null,this.disposeRunner.emit(this),this.disposeRunner.destroy()}get uniforms(){return this.uniformGroup.uniforms}static from(t,r,s){const a=Fr.from(t,r);return new ms(a,s)}}class H1{constructor(t,r){if(this.vertexSrc=t,this.fragTemplate=r,this.programCache={},this.defaultGroupCache={},!r.includes("%count%"))throw new Error('Fragment template must contain "%count%".');if(!r.includes("%forloop%"))throw new Error('Fragment template must contain "%forloop%".')}generateShader(t){if(!this.programCache[t]){const s=new Int32Array(t);for(let u=0;u<t;u++)s[u]=u;this.defaultGroupCache[t]=Be.from({uSamplers:s},!0);let a=this.fragTemplate;a=a.replace(/%count%/gi,`${t}`),a=a.replace(/%forloop%/gi,this.generateSampleSrc(t)),this.programCache[t]=new Fr(this.vertexSrc,a)}const r={tint:new Float32Array([1,1,1,1]),translationMatrix:new Pt,default:this.defaultGroupCache[t]};return new ms(this.programCache[t],r)}generateSampleSrc(t){let r="";r+=`
`,r+=`
`;for(let s=0;s<t;s++)s>0&&(r+=`
else `),s<t-1&&(r+=`if(vTextureId < ${s}.5)`),r+=`
{`,r+=`
	color = texture2D(uSamplers[${s}], vTextureCoord);`,r+=`
}`;return r+=`
`,r+=`
`,r}}class $1{constructor(){this.elements=[],this.ids=[],this.count=0}clear(){for(let t=0;t<this.count;t++)this.elements[t]=null;this.count=0}}function V1(){return!ni.apple.device}function W1(n){let t=!0;const r=tt.ADAPTER.getNavigator();if(ni.tablet||ni.phone){if(ni.apple.device){const s=r.userAgent.match(/OS (\d+)_(\d+)?/);s&&parseInt(s[1],10)<11&&(t=!1)}if(ni.android.device){const s=r.userAgent.match(/Android\s([0-9.]*)/);s&&parseInt(s[1],10)<7&&(t=!1)}}return t?n:4}class tc{constructor(t){this.renderer=t}flush(){}destroy(){this.renderer=null}start(){}stop(){this.flush()}render(t){}}var X1=`varying vec2 vTextureCoord;
varying vec4 vColor;
varying float vTextureId;
uniform sampler2D uSamplers[%count%];

void main(void){
    vec4 color;
    %forloop%
    gl_FragColor = color * vColor;
}
`,q1=`precision highp float;
attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;
attribute vec4 aColor;
attribute float aTextureId;

uniform mat3 projectionMatrix;
uniform mat3 translationMatrix;
uniform vec4 tint;

varying vec2 vTextureCoord;
varying vec4 vColor;
varying float vTextureId;

void main(void){
    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);

    vTextureCoord = aTextureCoord;
    vTextureId = aTextureId;
    vColor = aColor * tint;
}
`;const ki=class Re extends tc{constructor(t){super(t),this.setShaderGenerator(),this.geometryClass=R1,this.vertexSize=6,this.state=li.for2d(),this.size=Re.defaultBatchSize*4,this._vertexCount=0,this._indexCount=0,this._bufferedElements=[],this._bufferedTextures=[],this._bufferSize=0,this._shader=null,this._packedGeometries=[],this._packedGeometryPoolSize=2,this._flushId=0,this._aBuffers={},this._iBuffers={},this.maxTextures=1,this.renderer.on("prerender",this.onPrerender,this),t.runners.contextChange.add(this),this._dcIndex=0,this._aIndex=0,this._iIndex=0,this._attributeBuffer=null,this._indexBuffer=null,this._tempBoundTextures=[]}static get defaultMaxTextures(){return this._defaultMaxTextures=this._defaultMaxTextures??W1(32),this._defaultMaxTextures}static set defaultMaxTextures(t){this._defaultMaxTextures=t}static get canUploadSameBuffer(){return this._canUploadSameBuffer=this._canUploadSameBuffer??V1(),this._canUploadSameBuffer}static set canUploadSameBuffer(t){this._canUploadSameBuffer=t}get MAX_TEXTURES(){return rt("7.1.0","BatchRenderer#MAX_TEXTURES renamed to BatchRenderer#maxTextures"),this.maxTextures}static get defaultVertexSrc(){return q1}static get defaultFragmentTemplate(){return X1}setShaderGenerator({vertex:t=Re.defaultVertexSrc,fragment:r=Re.defaultFragmentTemplate}={}){this.shaderGenerator=new H1(t,r)}contextChange(){const t=this.renderer.gl;tt.PREFER_ENV===Mr.WEBGL_LEGACY?this.maxTextures=1:(this.maxTextures=Math.min(t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),Re.defaultMaxTextures),this.maxTextures=x1(this.maxTextures,t)),this._shader=this.shaderGenerator.generateShader(this.maxTextures);for(let r=0;r<this._packedGeometryPoolSize;r++)this._packedGeometries[r]=new this.geometryClass;this.initFlushBuffers()}initFlushBuffers(){const{_drawCallPool:t,_textureArrayPool:r}=Re,s=this.size/4,a=Math.floor(s/this.maxTextures)+1;for(;t.length<s;)t.push(new T1);for(;r.length<a;)r.push(new $1);for(let u=0;u<this.maxTextures;u++)this._tempBoundTextures[u]=null}onPrerender(){this._flushId=0}render(t){t._texture.valid&&(this._vertexCount+t.vertexData.length/2>this.size&&this.flush(),this._vertexCount+=t.vertexData.length/2,this._indexCount+=t.indices.length,this._bufferedTextures[this._bufferSize]=t._texture.baseTexture,this._bufferedElements[this._bufferSize++]=t)}buildTexturesAndDrawCalls(){const{_bufferedTextures:t,maxTextures:r}=this,s=Re._textureArrayPool,a=this.renderer.batch,u=this._tempBoundTextures,l=this.renderer.textureGC.count;let d=++ht._globalBatch,g=0,_=s[0],C=0;a.copyBoundTextures(u,r);for(let b=0;b<this._bufferSize;++b){const R=t[b];t[b]=null,R._batchEnabled!==d&&(_.count>=r&&(a.boundArray(_,u,d,r),this.buildDrawCalls(_,C,b),C=b,_=s[++g],++d),R._batchEnabled=d,R.touched=l,_.elements[_.count++]=R)}_.count>0&&(a.boundArray(_,u,d,r),this.buildDrawCalls(_,C,this._bufferSize),++g,++d);for(let b=0;b<u.length;b++)u[b]=null;ht._globalBatch=d}buildDrawCalls(t,r,s){const{_bufferedElements:a,_attributeBuffer:u,_indexBuffer:l,vertexSize:d}=this,g=Re._drawCallPool;let _=this._dcIndex,C=this._aIndex,b=this._iIndex,R=g[_];R.start=this._iIndex,R.texArray=t;for(let F=r;F<s;++F){const V=a[F],U=V._texture.baseTexture,B=d1[U.alphaMode?1:0][V.blendMode];a[F]=null,r<F&&R.blend!==B&&(R.size=b-R.start,r=F,R=g[++_],R.texArray=t,R.start=b),this.packInterleavedGeometry(V,u,l,C,b),C+=V.vertexData.length/2*d,b+=V.indices.length,R.blend=B}r<s&&(R.size=b-R.start,++_),this._dcIndex=_,this._aIndex=C,this._iIndex=b}bindAndClearTexArray(t){const r=this.renderer.texture;for(let s=0;s<t.count;s++)r.bind(t.elements[s],t.ids[s]),t.elements[s]=null;t.count=0}updateGeometry(){const{_packedGeometries:t,_attributeBuffer:r,_indexBuffer:s}=this;Re.canUploadSameBuffer?(t[this._flushId]._buffer.update(r.rawBinaryData),t[this._flushId]._indexBuffer.update(s),this.renderer.geometry.updateBuffers()):(this._packedGeometryPoolSize<=this._flushId&&(this._packedGeometryPoolSize++,t[this._flushId]=new this.geometryClass),t[this._flushId]._buffer.update(r.rawBinaryData),t[this._flushId]._indexBuffer.update(s),this.renderer.geometry.bind(t[this._flushId]),this.renderer.geometry.updateBuffers(),this._flushId++)}drawBatches(){const t=this._dcIndex,{gl:r,state:s}=this.renderer,a=Re._drawCallPool;let u=null;for(let l=0;l<t;l++){const{texArray:d,type:g,size:_,start:C,blend:b}=a[l];u!==d&&(u=d,this.bindAndClearTexArray(d)),this.state.blendMode=b,s.set(this.state),r.drawElements(g,_,r.UNSIGNED_SHORT,C*2)}}flush(){this._vertexCount!==0&&(this._attributeBuffer=this.getAttributeBuffer(this._vertexCount),this._indexBuffer=this.getIndexBuffer(this._indexCount),this._aIndex=0,this._iIndex=0,this._dcIndex=0,this.buildTexturesAndDrawCalls(),this.updateGeometry(),this.drawBatches(),this._bufferSize=0,this._vertexCount=0,this._indexCount=0)}start(){this.renderer.state.set(this.state),this.renderer.texture.ensureSamplerType(this.maxTextures),this.renderer.shader.bind(this._shader),Re.canUploadSameBuffer&&this.renderer.geometry.bind(this._packedGeometries[this._flushId])}stop(){this.flush()}destroy(){for(let t=0;t<this._packedGeometryPoolSize;t++)this._packedGeometries[t]&&this._packedGeometries[t].destroy();this.renderer.off("prerender",this.onPrerender,this),this._aBuffers=null,this._iBuffers=null,this._packedGeometries=null,this._attributeBuffer=null,this._indexBuffer=null,this._shader&&(this._shader.destroy(),this._shader=null),super.destroy()}getAttributeBuffer(t){const r=ss(Math.ceil(t/8)),s=fl(r),a=r*8;this._aBuffers.length<=s&&(this._iBuffers.length=s+1);let u=this._aBuffers[a];return u||(this._aBuffers[a]=u=new m1(a*this.vertexSize*4)),u}getIndexBuffer(t){const r=ss(Math.ceil(t/12)),s=fl(r),a=r*12;this._iBuffers.length<=s&&(this._iBuffers.length=s+1);let u=this._iBuffers[s];return u||(this._iBuffers[s]=u=new Uint16Array(a)),u}packInterleavedGeometry(t,r,s,a,u){const{uint32View:l,float32View:d}=r,g=a/this.vertexSize,_=t.uvs,C=t.indices,b=t.vertexData,R=t._texture.baseTexture._batchLocation,F=Math.min(t.worldAlpha,1),V=hi.shared.setValue(t._tintRGB).toPremultiplied(F,t._texture.baseTexture.alphaMode>0);for(let U=0;U<b.length;U+=2)d[a++]=b[U],d[a++]=b[U+1],d[a++]=_[U],d[a++]=_[U+1],l[a++]=V,d[a++]=R;for(let U=0;U<C.length;U++)s[u++]=g+C[U]}};ki.defaultBatchSize=4096,ki.extension={name:"batch",type:et.RendererPlugin},ki._drawCallPool=[],ki._textureArrayPool=[];let Ar=ki;lt.add(Ar);var j1=`varying vec2 vTextureCoord;

uniform sampler2D uSampler;

void main(void){
   gl_FragColor = texture2D(uSampler, vTextureCoord);
}
`,K1=`attribute vec2 aVertexPosition;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

uniform vec4 inputSize;
uniform vec4 outputFrame;

vec4 filterVertexPosition( void )
{
    vec2 position = aVertexPosition * max(outputFrame.zw, vec2(0.)) + outputFrame.xy;

    return vec4((projectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);
}

vec2 filterTextureCoord( void )
{
    return aVertexPosition * (outputFrame.zw * inputSize.zw);
}

void main(void)
{
    gl_Position = filterVertexPosition();
    vTextureCoord = filterTextureCoord();
}
`;const ca=class Gi extends ms{constructor(t,r,s){const a=Fr.from(t||Gi.defaultVertexSrc,r||Gi.defaultFragmentSrc);super(a,s),this.padding=0,this.resolution=Gi.defaultResolution,this.multisample=Gi.defaultMultisample,this.enabled=!0,this.autoFit=!0,this.state=new li}apply(t,r,s,a,u){t.applyFilter(this,r,s,a)}get blendMode(){return this.state.blendMode}set blendMode(t){this.state.blendMode=t}get resolution(){return this._resolution}set resolution(t){this._resolution=t}static get defaultVertexSrc(){return K1}static get defaultFragmentSrc(){return j1}};ca.defaultResolution=1,ca.defaultMultisample=St.NONE;let ft=ca;class us{constructor(){this.clearBeforeRender=!0,this._backgroundColor=new hi(0),this.alpha=1}init(t){this.clearBeforeRender=t.clearBeforeRender;const{backgroundColor:r,background:s,backgroundAlpha:a}=t,u=s??r;u!==void 0&&(this.color=u),this.alpha=a}get color(){return this._backgroundColor.value}set color(t){this._backgroundColor.setValue(t)}get alpha(){return this._backgroundColor.alpha}set alpha(t){this._backgroundColor.setAlpha(t)}get backgroundColor(){return this._backgroundColor}destroy(){}}us.defaultOptions={backgroundAlpha:1,backgroundColor:0,clearBeforeRender:!0},us.extension={type:[et.RendererSystem,et.CanvasRendererSystem],name:"background"};lt.add(us);class ec{constructor(t){this.renderer=t,this.emptyRenderer=new tc(t),this.currentRenderer=this.emptyRenderer}setObjectRenderer(t){this.currentRenderer!==t&&(this.currentRenderer.stop(),this.currentRenderer=t,this.currentRenderer.start())}flush(){this.setObjectRenderer(this.emptyRenderer)}reset(){this.setObjectRenderer(this.emptyRenderer)}copyBoundTextures(t,r){const{boundTextures:s}=this.renderer.texture;for(let a=r-1;a>=0;--a)t[a]=s[a]||null,t[a]&&(t[a]._batchLocation=a)}boundArray(t,r,s,a){const{elements:u,ids:l,count:d}=t;let g=0;for(let _=0;_<d;_++){const C=u[_],b=C._batchLocation;if(b>=0&&b<a&&r[b]===C){l[_]=b;continue}for(;g<a;){const R=r[g];if(R&&R._batchEnabled===s&&R._batchLocation===g){g++;continue}l[_]=g,C._batchLocation=g,r[g]=C;break}}}destroy(){this.renderer=null}}ec.extension={type:et.RendererSystem,name:"batch"};lt.add(ec);let bl=0;class hs{constructor(t){this.renderer=t,this.webGLVersion=1,this.extensions={},this.supports={uint32Indices:!1},this.handleContextLost=this.handleContextLost.bind(this),this.handleContextRestored=this.handleContextRestored.bind(this)}get isLost(){return!this.gl||this.gl.isContextLost()}contextChange(t){this.gl=t,this.renderer.gl=t,this.renderer.CONTEXT_UID=bl++}init(t){if(t.context)this.initFromContext(t.context);else{const r=this.renderer.background.alpha<1,s=t.premultipliedAlpha;this.preserveDrawingBuffer=t.preserveDrawingBuffer,this.useContextAlpha=t.useContextAlpha,this.powerPreference=t.powerPreference,this.initFromOptions({alpha:r,premultipliedAlpha:s,antialias:t.antialias,stencil:!0,preserveDrawingBuffer:t.preserveDrawingBuffer,powerPreference:t.powerPreference})}}initFromContext(t){this.gl=t,this.validateContext(t),this.renderer.gl=t,this.renderer.CONTEXT_UID=bl++,this.renderer.runners.contextChange.emit(t);const r=this.renderer.view;r.addEventListener!==void 0&&(r.addEventListener("webglcontextlost",this.handleContextLost,!1),r.addEventListener("webglcontextrestored",this.handleContextRestored,!1))}initFromOptions(t){const r=this.createContext(this.renderer.view,t);this.initFromContext(r)}createContext(t,r){let s;if(tt.PREFER_ENV>=Mr.WEBGL2&&(s=t.getContext("webgl2",r)),s)this.webGLVersion=2;else if(this.webGLVersion=1,s=t.getContext("webgl",r)||t.getContext("experimental-webgl",r),!s)throw new Error("This browser does not support WebGL. Try using the canvas renderer");return this.gl=s,this.getExtensions(),this.gl}getExtensions(){const{gl:t}=this,r={loseContext:t.getExtension("WEBGL_lose_context"),anisotropicFiltering:t.getExtension("EXT_texture_filter_anisotropic"),floatTextureLinear:t.getExtension("OES_texture_float_linear"),s3tc:t.getExtension("WEBGL_compressed_texture_s3tc"),s3tc_sRGB:t.getExtension("WEBGL_compressed_texture_s3tc_srgb"),etc:t.getExtension("WEBGL_compressed_texture_etc"),etc1:t.getExtension("WEBGL_compressed_texture_etc1"),pvrtc:t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc"),atc:t.getExtension("WEBGL_compressed_texture_atc"),astc:t.getExtension("WEBGL_compressed_texture_astc"),bptc:t.getExtension("EXT_texture_compression_bptc")};this.webGLVersion===1?Object.assign(this.extensions,r,{drawBuffers:t.getExtension("WEBGL_draw_buffers"),depthTexture:t.getExtension("WEBGL_depth_texture"),vertexArrayObject:t.getExtension("OES_vertex_array_object")||t.getExtension("MOZ_OES_vertex_array_object")||t.getExtension("WEBKIT_OES_vertex_array_object"),uint32ElementIndex:t.getExtension("OES_element_index_uint"),floatTexture:t.getExtension("OES_texture_float"),floatTextureLinear:t.getExtension("OES_texture_float_linear"),textureHalfFloat:t.getExtension("OES_texture_half_float"),textureHalfFloatLinear:t.getExtension("OES_texture_half_float_linear")}):this.webGLVersion===2&&Object.assign(this.extensions,r,{colorBufferFloat:t.getExtension("EXT_color_buffer_float")})}handleContextLost(t){t.preventDefault(),setTimeout(()=>{this.gl.isContextLost()&&this.extensions.loseContext&&this.extensions.loseContext.restoreContext()},0)}handleContextRestored(){this.renderer.runners.contextChange.emit(this.gl)}destroy(){const t=this.renderer.view;this.renderer=null,t.removeEventListener!==void 0&&(t.removeEventListener("webglcontextlost",this.handleContextLost),t.removeEventListener("webglcontextrestored",this.handleContextRestored)),this.gl.useProgram(null),this.extensions.loseContext&&this.extensions.loseContext.loseContext()}postrender(){this.renderer.objectRenderer.renderingToScreen&&this.gl.flush()}validateContext(t){const r=t.getContextAttributes(),s="WebGL2RenderingContext"in globalThis&&t instanceof globalThis.WebGL2RenderingContext;s&&(this.webGLVersion=2),r&&!r.stencil&&console.warn("Provided WebGL context does not have a stencil buffer, masks may not render correctly");const a=s||!!t.getExtension("OES_element_index_uint");this.supports.uint32Indices=a,a||console.warn("Provided WebGL context does not support 32 index buffer, complex graphics may not render correctly")}}hs.defaultOptions={context:null,antialias:!1,premultipliedAlpha:!0,preserveDrawingBuffer:!1,powerPreference:"default"},hs.extension={type:et.RendererSystem,name:"context"};lt.add(hs);class da{constructor(t,r){if(this.width=Math.round(t),this.height=Math.round(r),!this.width||!this.height)throw new Error("Framebuffer width or height is zero");this.stencil=!1,this.depth=!1,this.dirtyId=0,this.dirtyFormat=0,this.dirtySize=0,this.depthTexture=null,this.colorTextures=[],this.glFramebuffers={},this.disposeRunner=new Se("disposeFramebuffer"),this.multisample=St.NONE}get colorTexture(){return this.colorTextures[0]}addColorTexture(t=0,r){return this.colorTextures[t]=r||new ht(null,{scaleMode:Oe.NEAREST,resolution:1,mipmap:Nr.OFF,width:this.width,height:this.height}),this.dirtyId++,this.dirtyFormat++,this}addDepthTexture(t){return this.depthTexture=t||new ht(null,{scaleMode:Oe.NEAREST,resolution:1,width:this.width,height:this.height,mipmap:Nr.OFF,format:N.DEPTH_COMPONENT,type:Y.UNSIGNED_SHORT}),this.dirtyId++,this.dirtyFormat++,this}enableDepth(){return this.depth=!0,this.dirtyId++,this.dirtyFormat++,this}enableStencil(){return this.stencil=!0,this.dirtyId++,this.dirtyFormat++,this}resize(t,r){if(t=Math.round(t),r=Math.round(r),!t||!r)throw new Error("Framebuffer width and height must not be zero");if(!(t===this.width&&r===this.height)){this.width=t,this.height=r,this.dirtyId++,this.dirtySize++;for(let s=0;s<this.colorTextures.length;s++){const a=this.colorTextures[s],u=a.resolution;a.setSize(t/u,r/u)}if(this.depthTexture){const s=this.depthTexture.resolution;this.depthTexture.setSize(t/s,r/s)}}}dispose(){this.disposeRunner.emit(this,!1)}destroyDepthTexture(){this.depthTexture&&(this.depthTexture.destroy(),this.depthTexture=null,++this.dirtyId,++this.dirtyFormat)}}class rc extends ht{constructor(t={}){if(typeof t=="number"){const r=arguments[0],s=arguments[1],a=arguments[2],u=arguments[3];t={width:r,height:s,scaleMode:a,resolution:u}}t.width=t.width??100,t.height=t.height??100,t.multisample??(t.multisample=St.NONE),super(null,t),this.mipmap=Nr.OFF,this.valid=!0,this._clear=new hi([0,0,0,0]),this.framebuffer=new da(this.realWidth,this.realHeight).addColorTexture(0,this),this.framebuffer.multisample=t.multisample,this.maskStack=[],this.filterStack=[{}]}set clearColor(t){this._clear.setValue(t)}get clearColor(){return this._clear.value}get clear(){return this._clear}get multisample(){return this.framebuffer.multisample}set multisample(t){this.framebuffer.multisample=t}resize(t,r){this.framebuffer.resize(t*this.resolution,r*this.resolution),this.setRealSize(this.framebuffer.width,this.framebuffer.height)}dispose(){this.framebuffer.dispose(),super.dispose()}destroy(){super.destroy(),this.framebuffer.destroyDepthTexture(),this.framebuffer=null}}class Ke extends Wi{constructor(t){const r=t,s=r.naturalWidth||r.videoWidth||r.displayWidth||r.width,a=r.naturalHeight||r.videoHeight||r.displayHeight||r.height;super(s,a),this.source=t,this.noSubImage=!1}static crossOrigin(t,r,s){s===void 0&&!r.startsWith("data:")?t.crossOrigin=g1(r):s!==!1&&(t.crossOrigin=typeof s=="string"?s:"anonymous")}upload(t,r,s,a){const u=t.gl,l=r.realWidth,d=r.realHeight;if(a=a||this.source,typeof HTMLImageElement<"u"&&a instanceof HTMLImageElement){if(!a.complete||a.naturalWidth===0)return!1}else if(typeof HTMLVideoElement<"u"&&a instanceof HTMLVideoElement&&a.readyState<=1)return!1;return u.pixelStorei(u.UNPACK_PREMULTIPLY_ALPHA_WEBGL,r.alphaMode===Pr.UNPACK),!this.noSubImage&&r.target===u.TEXTURE_2D&&s.width===l&&s.height===d?u.texSubImage2D(u.TEXTURE_2D,0,0,0,r.format,s.type,a):(s.width=l,s.height=d,u.texImage2D(r.target,0,s.internalFormat,r.format,s.type,a)),!0}update(){if(this.destroyed)return;const t=this.source,r=t.naturalWidth||t.videoWidth||t.width,s=t.naturalHeight||t.videoHeight||t.height;this.resize(r,s),super.update()}dispose(){this.source=null}}class ic extends Ke{constructor(t,r){if(r=r||{},typeof t=="string"){const s=new Image;Ke.crossOrigin(s,t,r.crossorigin),s.src=t,t=s}super(t),!t.complete&&this._width&&this._height&&(this._width=0,this._height=0),this.url=t.src,this._process=null,this.preserveBitmap=!1,this.createBitmap=(r.createBitmap??tt.CREATE_IMAGE_BITMAP)&&!!globalThis.createImageBitmap,this.alphaMode=typeof r.alphaMode=="number"?r.alphaMode:null,this.bitmap=null,this._load=null,r.autoLoad!==!1&&this.load()}load(t){return this._load?this._load:(t!==void 0&&(this.createBitmap=t),this._load=new Promise((r,s)=>{const a=this.source;this.url=a.src;const u=()=>{this.destroyed||(a.onload=null,a.onerror=null,this.update(),this._load=null,this.createBitmap?r(this.process()):r(this))};a.complete&&a.src?u():(a.onload=u,a.onerror=l=>{s(l),this.onError.emit(l)})}),this._load)}process(){const t=this.source;if(this._process!==null)return this._process;if(this.bitmap!==null||!globalThis.createImageBitmap)return Promise.resolve(this);const r=globalThis.createImageBitmap,s=!t.crossOrigin||t.crossOrigin==="anonymous";return this._process=fetch(t.src,{mode:s?"cors":"no-cors"}).then(a=>a.blob()).then(a=>r(a,0,0,t.width,t.height,{premultiplyAlpha:this.alphaMode===null||this.alphaMode===Pr.UNPACK?"premultiply":"none"})).then(a=>this.destroyed?Promise.reject():(this.bitmap=a,this.update(),this._process=null,Promise.resolve(this))),this._process}upload(t,r,s){if(typeof this.alphaMode=="number"&&(r.alphaMode=this.alphaMode),!this.createBitmap)return super.upload(t,r,s);if(!this.bitmap&&(this.process(),!this.bitmap))return!1;if(super.upload(t,r,s,this.bitmap),!this.preserveBitmap){let a=!0;const u=r._glTextures;for(const l in u){const d=u[l];if(d!==s&&d.dirtyId!==r.dirtyId){a=!1;break}}a&&(this.bitmap.close&&this.bitmap.close(),this.bitmap=null)}return!0}dispose(){this.source.onload=null,this.source.onerror=null,super.dispose(),this.bitmap&&(this.bitmap.close(),this.bitmap=null),this._process=null,this._load=null}static test(t){return typeof HTMLImageElement<"u"&&(typeof t=="string"||t instanceof HTMLImageElement)}}class Aa{constructor(){this.x0=0,this.y0=0,this.x1=1,this.y1=0,this.x2=1,this.y2=1,this.x3=0,this.y3=1,this.uvsFloat32=new Float32Array(8)}set(t,r,s){const a=r.width,u=r.height;if(s){const l=t.width/2/a,d=t.height/2/u,g=t.x/a+l,_=t.y/u+d;s=xt.add(s,xt.NW),this.x0=g+l*xt.uX(s),this.y0=_+d*xt.uY(s),s=xt.add(s,2),this.x1=g+l*xt.uX(s),this.y1=_+d*xt.uY(s),s=xt.add(s,2),this.x2=g+l*xt.uX(s),this.y2=_+d*xt.uY(s),s=xt.add(s,2),this.x3=g+l*xt.uX(s),this.y3=_+d*xt.uY(s)}else this.x0=t.x/a,this.y0=t.y/u,this.x1=(t.x+t.width)/a,this.y1=t.y/u,this.x2=(t.x+t.width)/a,this.y2=(t.y+t.height)/u,this.x3=t.x/a,this.y3=(t.y+t.height)/u;this.uvsFloat32[0]=this.x0,this.uvsFloat32[1]=this.y0,this.uvsFloat32[2]=this.x1,this.uvsFloat32[3]=this.y1,this.uvsFloat32[4]=this.x2,this.uvsFloat32[5]=this.y2,this.uvsFloat32[6]=this.x3,this.uvsFloat32[7]=this.y3}}Aa.prototype.toString=function(){return`[@pixi/core:TextureUvs x0=${this.x0} y0=${this.y0} x1=${this.x1} y1=${this.y1} x2=${this.x2} y2=${this.y2} x3=${this.x3} y3=${this.y3}]`};const Cl=new Aa;function qn(n){n.destroy=function(){},n.on=function(){},n.once=function(){},n.emit=function(){}}class ut extends ba{constructor(t,r,s,a,u,l,d){if(super(),this.noFrame=!1,r||(this.noFrame=!0,r=new Et(0,0,1,1)),t instanceof ut&&(t=t.baseTexture),this.baseTexture=t,this._frame=r,this.trim=a,this.valid=!1,this.destroyed=!1,this._uvs=Cl,this.uvMatrix=null,this.orig=s||r,this._rotate=Number(u||0),u===!0)this._rotate=2;else if(this._rotate%2!==0)throw new Error("attempt to use diamond-shaped UVs. If you are sure, set rotation manually");this.defaultAnchor=l?new yt(l.x,l.y):new yt(0,0),this.defaultBorders=d,this._updateID=0,this.textureCacheIds=[],t.valid?this.noFrame?t.valid&&this.onBaseTextureUpdated(t):this.frame=r:t.once("loaded",this.onBaseTextureUpdated,this),this.noFrame&&t.on("update",this.onBaseTextureUpdated,this)}update(){this.baseTexture.resource&&this.baseTexture.resource.update()}onBaseTextureUpdated(t){if(this.noFrame){if(!this.baseTexture.valid)return;this._frame.width=t.width,this._frame.height=t.height,this.valid=!0,this.updateUvs()}else this.frame=this._frame;this.emit("update",this)}destroy(t){if(this.baseTexture){if(t){const{resource:r}=this.baseTexture;r!=null&&r.url&&Pe[r.url]&&ut.removeFromCache(r.url),this.baseTexture.destroy()}this.baseTexture.off("loaded",this.onBaseTextureUpdated,this),this.baseTexture.off("update",this.onBaseTextureUpdated,this),this.baseTexture=null}this._frame=null,this._uvs=null,this.trim=null,this.orig=null,this.valid=!1,ut.removeFromCache(this),this.textureCacheIds=null,this.destroyed=!0,this.emit("destroyed",this),this.removeAllListeners()}clone(){var a;const t=this._frame.clone(),r=this._frame===this.orig?t:this.orig.clone(),s=new ut(this.baseTexture,!this.noFrame&&t,r,(a=this.trim)==null?void 0:a.clone(),this.rotate,this.defaultAnchor,this.defaultBorders);return this.noFrame&&(s._frame=t),s}updateUvs(){this._uvs===Cl&&(this._uvs=new Aa),this._uvs.set(this._frame,this.baseTexture,this.rotate),this._updateID++}static from(t,r={},s=tt.STRICT_TEXTURE_CACHE){const a=typeof t=="string";let u=null;if(a)u=t;else if(t instanceof ht){if(!t.cacheId){const d=(r==null?void 0:r.pixiIdPrefix)||"pixiid";t.cacheId=`${d}-${Vi()}`,ht.addToCache(t,t.cacheId)}u=t.cacheId}else{if(!t._pixiId){const d=(r==null?void 0:r.pixiIdPrefix)||"pixiid";t._pixiId=`${d}_${Vi()}`}u=t._pixiId}let l=Pe[u];if(a&&s&&!l)throw new Error(`The cacheId "${u}" does not exist in TextureCache.`);return!l&&!(t instanceof ht)?(r.resolution||(r.resolution=gl(t)),l=new ut(new ht(t,r)),l.baseTexture.cacheId=u,ht.addToCache(l.baseTexture,u),ut.addToCache(l,u)):!l&&t instanceof ht&&(l=new ut(t),ut.addToCache(l,u)),l}static fromURL(t,r){const s=Object.assign({autoLoad:!1},r==null?void 0:r.resourceOptions),a=ut.from(t,Object.assign({resourceOptions:s},r),!1),u=a.baseTexture.resource;return a.baseTexture.valid?Promise.resolve(a):u.load().then(()=>Promise.resolve(a))}static fromBuffer(t,r,s,a){return new ut(ht.fromBuffer(t,r,s,a))}static fromLoader(t,r,s,a){const u=new ht(t,Object.assign({scaleMode:ht.defaultOptions.scaleMode,resolution:gl(r)},a)),{resource:l}=u;l instanceof ic&&(l.url=r);const d=new ut(u);return s||(s=r),ht.addToCache(d.baseTexture,s),ut.addToCache(d,s),s!==r&&(ht.addToCache(d.baseTexture,r),ut.addToCache(d,r)),d.baseTexture.valid?Promise.resolve(d):new Promise(g=>{d.baseTexture.once("loaded",()=>g(d))})}static addToCache(t,r){r&&(t.textureCacheIds.includes(r)||t.textureCacheIds.push(r),Pe[r]&&Pe[r]!==t&&console.warn(`Texture added to the cache with an id [${r}] that already had an entry`),Pe[r]=t)}static removeFromCache(t){if(typeof t=="string"){const r=Pe[t];if(r){const s=r.textureCacheIds.indexOf(t);return s>-1&&r.textureCacheIds.splice(s,1),delete Pe[t],r}}else if(t!=null&&t.textureCacheIds){for(let r=0;r<t.textureCacheIds.length;++r)Pe[t.textureCacheIds[r]]===t&&delete Pe[t.textureCacheIds[r]];return t.textureCacheIds.length=0,t}return null}get resolution(){return this.baseTexture.resolution}get frame(){return this._frame}set frame(t){this._frame=t,this.noFrame=!1;const{x:r,y:s,width:a,height:u}=t,l=r+a>this.baseTexture.width,d=s+u>this.baseTexture.height;if(l||d){const g=l&&d?"and":"or",_=`X: ${r} + ${a} = ${r+a} > ${this.baseTexture.width}`,C=`Y: ${s} + ${u} = ${s+u} > ${this.baseTexture.height}`;throw new Error(`Texture Error: frame does not fit inside the base Texture dimensions: ${_} ${g} ${C}`)}this.valid=a&&u&&this.baseTexture.valid,!this.trim&&!this.rotate&&(this.orig=t),this.valid&&this.updateUvs()}get rotate(){return this._rotate}set rotate(t){this._rotate=t,this.valid&&this.updateUvs()}get width(){return this.orig.width}get height(){return this.orig.height}castToBaseTexture(){return this.baseTexture}static get EMPTY(){return ut._EMPTY||(ut._EMPTY=new ut(new ht),qn(ut._EMPTY),qn(ut._EMPTY.baseTexture)),ut._EMPTY}static get WHITE(){if(!ut._WHITE){const t=tt.ADAPTER.createCanvas(16,16),r=t.getContext("2d");t.width=16,t.height=16,r.fillStyle="white",r.fillRect(0,0,16,16),ut._WHITE=new ut(ht.from(t)),qn(ut._WHITE),qn(ut._WHITE.baseTexture)}return ut._WHITE}}class _s extends ut{constructor(t,r){super(t,r),this.valid=!0,this.filterFrame=null,this.filterPoolKey=null,this.updateUvs()}get framebuffer(){return this.baseTexture.framebuffer}get multisample(){return this.framebuffer.multisample}set multisample(t){this.framebuffer.multisample=t}resize(t,r,s=!0){const a=this.baseTexture.resolution,u=Math.round(t*a)/a,l=Math.round(r*a)/a;this.valid=u>0&&l>0,this._frame.width=this.orig.width=u,this._frame.height=this.orig.height=l,s&&this.baseTexture.resize(u,l),this.updateUvs()}setResolution(t){const{baseTexture:r}=this;r.resolution!==t&&(r.setResolution(t),this.resize(r.width,r.height,!1))}static create(t){return new _s(new rc(t))}}class nc{constructor(t){this.texturePool={},this.textureOptions=t||{},this.enableFullScreen=!1,this._pixelsWidth=0,this._pixelsHeight=0}createTexture(t,r,s=St.NONE){const a=new rc(Object.assign({width:t,height:r,resolution:1,multisample:s},this.textureOptions));return new _s(a)}getOptimalTexture(t,r,s=1,a=St.NONE){let u;t=Math.max(Math.ceil(t*s-1e-6),1),r=Math.max(Math.ceil(r*s-1e-6),1),!this.enableFullScreen||t!==this._pixelsWidth||r!==this._pixelsHeight?(t=ss(t),r=ss(r),u=((t&65535)<<16|r&65535)>>>0,a>1&&(u+=a*4294967296)):u=a>1?-a:-1,this.texturePool[u]||(this.texturePool[u]=[]);let l=this.texturePool[u].pop();return l||(l=this.createTexture(t,r,a)),l.filterPoolKey=u,l.setResolution(s),l}getFilterTexture(t,r,s){const a=this.getOptimalTexture(t.width,t.height,r||t.resolution,s||St.NONE);return a.filterFrame=t.filterFrame,a}returnTexture(t){const r=t.filterPoolKey;t.filterFrame=null,this.texturePool[r].push(t)}returnFilterTexture(t){this.returnTexture(t)}clear(t){if(t=t!==!1,t)for(const r in this.texturePool){const s=this.texturePool[r];if(s)for(let a=0;a<s.length;a++)s[a].destroy(!0)}this.texturePool={}}setScreenSize(t){if(!(t.width===this._pixelsWidth&&t.height===this._pixelsHeight)){this.enableFullScreen=t.width>0&&t.height>0;for(const r in this.texturePool){if(!(Number(r)<0))continue;const s=this.texturePool[r];if(s)for(let a=0;a<s.length;a++)s[a].destroy(!0);this.texturePool[r]=[]}this._pixelsWidth=t.width,this._pixelsHeight=t.height}}}nc.SCREEN_KEY=-1;class Y1 extends ui{constructor(){super(),this.addAttribute("aVertexPosition",new Float32Array([0,0,1,0,1,1,0,1])).addIndex([0,1,3,2])}}class Z1 extends ui{constructor(){super(),this.vertices=new Float32Array([-1,-1,1,-1,1,1,-1,1]),this.uvs=new Float32Array([0,0,1,0,1,1,0,1]),this.vertexBuffer=new $t(this.vertices),this.uvBuffer=new $t(this.uvs),this.addAttribute("aVertexPosition",this.vertexBuffer).addAttribute("aTextureCoord",this.uvBuffer).addIndex([0,1,2,0,2,3])}map(t,r){let s=0,a=0;return this.uvs[0]=s,this.uvs[1]=a,this.uvs[2]=s+r.width/t.width,this.uvs[3]=a,this.uvs[4]=s+r.width/t.width,this.uvs[5]=a+r.height/t.height,this.uvs[6]=s,this.uvs[7]=a+r.height/t.height,s=r.x,a=r.y,this.vertices[0]=s,this.vertices[1]=a,this.vertices[2]=s+r.width,this.vertices[3]=a,this.vertices[4]=s+r.width,this.vertices[5]=a+r.height,this.vertices[6]=s,this.vertices[7]=a+r.height,this.invalidate(),this}invalidate(){return this.vertexBuffer._updateID++,this.uvBuffer._updateID++,this}}class J1{constructor(){this.renderTexture=null,this.target=null,this.legacy=!1,this.resolution=1,this.multisample=St.NONE,this.sourceFrame=new Et,this.destinationFrame=new Et,this.bindingSourceFrame=new Et,this.bindingDestinationFrame=new Et,this.filters=[],this.transform=null}clear(){this.target=null,this.filters=null,this.renderTexture=null}}const jn=[new yt,new yt,new yt,new yt],Zo=new Pt;class sc{constructor(t){this.renderer=t,this.defaultFilterStack=[{}],this.texturePool=new nc,this.statePool=[],this.quad=new Y1,this.quadUv=new Z1,this.tempRect=new Et,this.activeState={},this.globalUniforms=new Be({outputFrame:new Et,inputSize:new Float32Array(4),inputPixel:new Float32Array(4),inputClamp:new Float32Array(4),resolution:1,filterArea:new Float32Array(4),filterClamp:new Float32Array(4)},!0),this.forceClear=!1,this.useMaxPadding=!1}init(){this.texturePool.setScreenSize(this.renderer.view)}push(t,r){const s=this.renderer,a=this.defaultFilterStack,u=this.statePool.pop()||new J1,l=s.renderTexture;let d,g;if(l.current){const B=l.current;d=B.resolution,g=B.multisample}else d=s.resolution,g=s.multisample;let _=r[0].resolution||d,C=r[0].multisample??g,b=r[0].padding,R=r[0].autoFit,F=r[0].legacy??!0;for(let B=1;B<r.length;B++){const mt=r[B];_=Math.min(_,mt.resolution||d),C=Math.min(C,mt.multisample??g),b=this.useMaxPadding?Math.max(b,mt.padding):b+mt.padding,R=R&&mt.autoFit,F=F||(mt.legacy??!0)}a.length===1&&(this.defaultFilterStack[0].renderTexture=l.current),a.push(u),u.resolution=_,u.multisample=C,u.legacy=F,u.target=t,u.sourceFrame.copyFrom(t.filterArea||t.getBounds(!0)),u.sourceFrame.pad(b);const V=this.tempRect.copyFrom(l.sourceFrame);s.projection.transform&&this.transformAABB(Zo.copyFrom(s.projection.transform).invert(),V),R?(u.sourceFrame.fit(V),(u.sourceFrame.width<=0||u.sourceFrame.height<=0)&&(u.sourceFrame.width=0,u.sourceFrame.height=0)):u.sourceFrame.intersects(V)||(u.sourceFrame.width=0,u.sourceFrame.height=0),this.roundFrame(u.sourceFrame,l.current?l.current.resolution:s.resolution,l.sourceFrame,l.destinationFrame,s.projection.transform),u.renderTexture=this.getOptimalFilterTexture(u.sourceFrame.width,u.sourceFrame.height,_,C),u.filters=r,u.destinationFrame.width=u.renderTexture.width,u.destinationFrame.height=u.renderTexture.height;const U=this.tempRect;U.x=0,U.y=0,U.width=u.sourceFrame.width,U.height=u.sourceFrame.height,u.renderTexture.filterFrame=u.sourceFrame,u.bindingSourceFrame.copyFrom(l.sourceFrame),u.bindingDestinationFrame.copyFrom(l.destinationFrame),u.transform=s.projection.transform,s.projection.transform=null,l.bind(u.renderTexture,u.sourceFrame,U),s.framebuffer.clear(0,0,0,0)}pop(){const t=this.defaultFilterStack,r=t.pop(),s=r.filters;this.activeState=r;const a=this.globalUniforms.uniforms;a.outputFrame=r.sourceFrame,a.resolution=r.resolution;const u=a.inputSize,l=a.inputPixel,d=a.inputClamp;if(u[0]=r.destinationFrame.width,u[1]=r.destinationFrame.height,u[2]=1/u[0],u[3]=1/u[1],l[0]=Math.round(u[0]*r.resolution),l[1]=Math.round(u[1]*r.resolution),l[2]=1/l[0],l[3]=1/l[1],d[0]=.5*l[2],d[1]=.5*l[3],d[2]=r.sourceFrame.width*u[2]-.5*l[2],d[3]=r.sourceFrame.height*u[3]-.5*l[3],r.legacy){const _=a.filterArea;_[0]=r.destinationFrame.width,_[1]=r.destinationFrame.height,_[2]=r.sourceFrame.x,_[3]=r.sourceFrame.y,a.filterClamp=a.inputClamp}this.globalUniforms.update();const g=t[t.length-1];if(this.renderer.framebuffer.blit(),s.length===1)s[0].apply(this,r.renderTexture,g.renderTexture,Tr.BLEND,r),this.returnFilterTexture(r.renderTexture);else{let _=r.renderTexture,C=this.getOptimalFilterTexture(_.width,_.height,r.resolution);C.filterFrame=_.filterFrame;let b=0;for(b=0;b<s.length-1;++b){b===1&&r.multisample>1&&(C=this.getOptimalFilterTexture(_.width,_.height,r.resolution),C.filterFrame=_.filterFrame),s[b].apply(this,_,C,Tr.CLEAR,r);const R=_;_=C,C=R}s[b].apply(this,_,g.renderTexture,Tr.BLEND,r),b>1&&r.multisample>1&&this.returnFilterTexture(r.renderTexture),this.returnFilterTexture(_),this.returnFilterTexture(C)}r.clear(),this.statePool.push(r)}bindAndClear(t,r=Tr.CLEAR){const{renderTexture:s,state:a}=this.renderer;if(t===this.defaultFilterStack[this.defaultFilterStack.length-1].renderTexture?this.renderer.projection.transform=this.activeState.transform:this.renderer.projection.transform=null,t==null?void 0:t.filterFrame){const l=this.tempRect;l.x=0,l.y=0,l.width=t.filterFrame.width,l.height=t.filterFrame.height,s.bind(t,t.filterFrame,l)}else t!==this.defaultFilterStack[this.defaultFilterStack.length-1].renderTexture?s.bind(t):this.renderer.renderTexture.bind(t,this.activeState.bindingSourceFrame,this.activeState.bindingDestinationFrame);const u=a.stateId&1||this.forceClear;(r===Tr.CLEAR||r===Tr.BLIT&&u)&&this.renderer.framebuffer.clear(0,0,0,0)}applyFilter(t,r,s,a){const u=this.renderer;u.state.set(t.state),this.bindAndClear(s,a),t.uniforms.uSampler=r,t.uniforms.filterGlobals=this.globalUniforms,u.shader.bind(t),t.legacy=!!t.program.attributeData.aTextureCoord,t.legacy?(this.quadUv.map(r._frame,r.filterFrame),u.geometry.bind(this.quadUv),u.geometry.draw(ns.TRIANGLES)):(u.geometry.bind(this.quad),u.geometry.draw(ns.TRIANGLE_STRIP))}calculateSpriteMatrix(t,r){const{sourceFrame:s,destinationFrame:a}=this.activeState,{orig:u}=r._texture,l=t.set(a.width,0,0,a.height,s.x,s.y),d=r.worldTransform.copyTo(Pt.TEMP_MATRIX);return d.invert(),l.prepend(d),l.scale(1/u.width,1/u.height),l.translate(r.anchor.x,r.anchor.y),l}destroy(){this.renderer=null,this.texturePool.clear(!1)}getOptimalFilterTexture(t,r,s=1,a=St.NONE){return this.texturePool.getOptimalTexture(t,r,s,a)}getFilterTexture(t,r,s){if(typeof t=="number"){const u=t;t=r,r=u}t=t||this.activeState.renderTexture;const a=this.texturePool.getOptimalTexture(t.width,t.height,r||t.resolution,s||St.NONE);return a.filterFrame=t.filterFrame,a}returnFilterTexture(t){this.texturePool.returnTexture(t)}emptyPool(){this.texturePool.clear(!0)}resize(){this.texturePool.setScreenSize(this.renderer.view)}transformAABB(t,r){const s=jn[0],a=jn[1],u=jn[2],l=jn[3];s.set(r.left,r.top),a.set(r.left,r.bottom),u.set(r.right,r.top),l.set(r.right,r.bottom),t.apply(s,s),t.apply(a,a),t.apply(u,u),t.apply(l,l);const d=Math.min(s.x,a.x,u.x,l.x),g=Math.min(s.y,a.y,u.y,l.y),_=Math.max(s.x,a.x,u.x,l.x),C=Math.max(s.y,a.y,u.y,l.y);r.x=d,r.y=g,r.width=_-d,r.height=C-g}roundFrame(t,r,s,a,u){if(!(t.width<=0||t.height<=0||s.width<=0||s.height<=0)){if(u){const{a:l,b:d,c:g,d:_}=u;if((Math.abs(d)>1e-4||Math.abs(g)>1e-4)&&(Math.abs(l)>1e-4||Math.abs(_)>1e-4))return}u=u?Zo.copyFrom(u):Zo.identity(),u.translate(-s.x,-s.y).scale(a.width/s.width,a.height/s.height).translate(a.x,a.y),this.transformAABB(u,t),t.ceil(r),this.transformAABB(u.invert(),t)}}}sc.extension={type:et.RendererSystem,name:"filter"};lt.add(sc);class Q1{constructor(t){this.framebuffer=t,this.stencil=null,this.dirtyId=-1,this.dirtyFormat=-1,this.dirtySize=-1,this.multisample=St.NONE,this.msaaBuffer=null,this.blitFramebuffer=null,this.mipLevel=0}}const tx=new Et;class oc{constructor(t){this.renderer=t,this.managedFramebuffers=[],this.unknownFramebuffer=new da(10,10),this.msaaSamples=null}contextChange(){this.disposeAll(!0);const t=this.gl=this.renderer.gl;if(this.CONTEXT_UID=this.renderer.CONTEXT_UID,this.current=this.unknownFramebuffer,this.viewport=new Et,this.hasMRT=!0,this.writeDepthTexture=!0,this.renderer.context.webGLVersion===1){let r=this.renderer.context.extensions.drawBuffers,s=this.renderer.context.extensions.depthTexture;tt.PREFER_ENV===Mr.WEBGL_LEGACY&&(r=null,s=null),r?t.drawBuffers=a=>r.drawBuffersWEBGL(a):(this.hasMRT=!1,t.drawBuffers=()=>{}),s||(this.writeDepthTexture=!1)}else this.msaaSamples=t.getInternalformatParameter(t.RENDERBUFFER,t.RGBA8,t.SAMPLES)}bind(t,r,s=0){const{gl:a}=this;if(t){const u=t.glFramebuffers[this.CONTEXT_UID]||this.initFramebuffer(t);this.current!==t&&(this.current=t,a.bindFramebuffer(a.FRAMEBUFFER,u.framebuffer)),u.mipLevel!==s&&(t.dirtyId++,t.dirtyFormat++,u.mipLevel=s),u.dirtyId!==t.dirtyId&&(u.dirtyId=t.dirtyId,u.dirtyFormat!==t.dirtyFormat?(u.dirtyFormat=t.dirtyFormat,u.dirtySize=t.dirtySize,this.updateFramebuffer(t,s)):u.dirtySize!==t.dirtySize&&(u.dirtySize=t.dirtySize,this.resizeFramebuffer(t)));for(let l=0;l<t.colorTextures.length;l++){const d=t.colorTextures[l];this.renderer.texture.unbind(d.parentTextureArray||d)}if(t.depthTexture&&this.renderer.texture.unbind(t.depthTexture),r){const l=r.width>>s,d=r.height>>s,g=l/r.width;this.setViewport(r.x*g,r.y*g,l,d)}else{const l=t.width>>s,d=t.height>>s;this.setViewport(0,0,l,d)}}else this.current&&(this.current=null,a.bindFramebuffer(a.FRAMEBUFFER,null)),r?this.setViewport(r.x,r.y,r.width,r.height):this.setViewport(0,0,this.renderer.width,this.renderer.height)}setViewport(t,r,s,a){const u=this.viewport;t=Math.round(t),r=Math.round(r),s=Math.round(s),a=Math.round(a),(u.width!==s||u.height!==a||u.x!==t||u.y!==r)&&(u.x=t,u.y=r,u.width=s,u.height=a,this.gl.viewport(t,r,s,a))}get size(){return this.current?{x:0,y:0,width:this.current.width,height:this.current.height}:{x:0,y:0,width:this.renderer.width,height:this.renderer.height}}clear(t,r,s,a,u=na.COLOR|na.DEPTH){const{gl:l}=this;l.clearColor(t,r,s,a),l.clear(u)}initFramebuffer(t){const{gl:r}=this,s=new Q1(r.createFramebuffer());return s.multisample=this.detectSamples(t.multisample),t.glFramebuffers[this.CONTEXT_UID]=s,this.managedFramebuffers.push(t),t.disposeRunner.add(this),s}resizeFramebuffer(t){const{gl:r}=this,s=t.glFramebuffers[this.CONTEXT_UID];if(s.stencil){r.bindRenderbuffer(r.RENDERBUFFER,s.stencil);let l;this.renderer.context.webGLVersion===1?l=r.DEPTH_STENCIL:t.depth&&t.stencil?l=r.DEPTH24_STENCIL8:t.depth?l=r.DEPTH_COMPONENT24:l=r.STENCIL_INDEX8,s.msaaBuffer?r.renderbufferStorageMultisample(r.RENDERBUFFER,s.multisample,l,t.width,t.height):r.renderbufferStorage(r.RENDERBUFFER,l,t.width,t.height)}const a=t.colorTextures;let u=a.length;r.drawBuffers||(u=Math.min(u,1));for(let l=0;l<u;l++){const d=a[l],g=d.parentTextureArray||d;this.renderer.texture.bind(g,0),l===0&&s.msaaBuffer&&(r.bindRenderbuffer(r.RENDERBUFFER,s.msaaBuffer),r.renderbufferStorageMultisample(r.RENDERBUFFER,s.multisample,g._glTextures[this.CONTEXT_UID].internalFormat,t.width,t.height))}t.depthTexture&&this.writeDepthTexture&&this.renderer.texture.bind(t.depthTexture,0)}updateFramebuffer(t,r){const{gl:s}=this,a=t.glFramebuffers[this.CONTEXT_UID],u=t.colorTextures;let l=u.length;s.drawBuffers||(l=Math.min(l,1)),a.multisample>1&&this.canMultisampleFramebuffer(t)?a.msaaBuffer=a.msaaBuffer||s.createRenderbuffer():a.msaaBuffer&&(s.deleteRenderbuffer(a.msaaBuffer),a.msaaBuffer=null,a.blitFramebuffer&&(a.blitFramebuffer.dispose(),a.blitFramebuffer=null));const d=[];for(let g=0;g<l;g++){const _=u[g],C=_.parentTextureArray||_;this.renderer.texture.bind(C,0),g===0&&a.msaaBuffer?(s.bindRenderbuffer(s.RENDERBUFFER,a.msaaBuffer),s.renderbufferStorageMultisample(s.RENDERBUFFER,a.multisample,C._glTextures[this.CONTEXT_UID].internalFormat,t.width,t.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,a.msaaBuffer)):(s.framebufferTexture2D(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+g,_.target,C._glTextures[this.CONTEXT_UID].texture,r),d.push(s.COLOR_ATTACHMENT0+g))}if(d.length>1&&s.drawBuffers(d),t.depthTexture&&this.writeDepthTexture){const g=t.depthTexture;this.renderer.texture.bind(g,0),s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,g._glTextures[this.CONTEXT_UID].texture,r)}if((t.stencil||t.depth)&&!(t.depthTexture&&this.writeDepthTexture)){a.stencil=a.stencil||s.createRenderbuffer();let g,_;this.renderer.context.webGLVersion===1?(g=s.DEPTH_STENCIL_ATTACHMENT,_=s.DEPTH_STENCIL):t.depth&&t.stencil?(g=s.DEPTH_STENCIL_ATTACHMENT,_=s.DEPTH24_STENCIL8):t.depth?(g=s.DEPTH_ATTACHMENT,_=s.DEPTH_COMPONENT24):(g=s.STENCIL_ATTACHMENT,_=s.STENCIL_INDEX8),s.bindRenderbuffer(s.RENDERBUFFER,a.stencil),a.msaaBuffer?s.renderbufferStorageMultisample(s.RENDERBUFFER,a.multisample,_,t.width,t.height):s.renderbufferStorage(s.RENDERBUFFER,_,t.width,t.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,g,s.RENDERBUFFER,a.stencil)}else a.stencil&&(s.deleteRenderbuffer(a.stencil),a.stencil=null)}canMultisampleFramebuffer(t){return this.renderer.context.webGLVersion!==1&&t.colorTextures.length<=1&&!t.depthTexture}detectSamples(t){const{msaaSamples:r}=this;let s=St.NONE;if(t<=1||r===null)return s;for(let a=0;a<r.length;a++)if(r[a]<=t){s=r[a];break}return s===1&&(s=St.NONE),s}blit(t,r,s){const{current:a,renderer:u,gl:l,CONTEXT_UID:d}=this;if(u.context.webGLVersion!==2||!a)return;const g=a.glFramebuffers[d];if(!g)return;if(!t){if(!g.msaaBuffer)return;const C=a.colorTextures[0];if(!C)return;g.blitFramebuffer||(g.blitFramebuffer=new da(a.width,a.height),g.blitFramebuffer.addColorTexture(0,C)),t=g.blitFramebuffer,t.colorTextures[0]!==C&&(t.colorTextures[0]=C,t.dirtyId++,t.dirtyFormat++),(t.width!==a.width||t.height!==a.height)&&(t.width=a.width,t.height=a.height,t.dirtyId++,t.dirtySize++)}r||(r=tx,r.width=a.width,r.height=a.height),s||(s=r);const _=r.width===s.width&&r.height===s.height;this.bind(t),l.bindFramebuffer(l.READ_FRAMEBUFFER,g.framebuffer),l.blitFramebuffer(r.left,r.top,r.right,r.bottom,s.left,s.top,s.right,s.bottom,l.COLOR_BUFFER_BIT,_?l.NEAREST:l.LINEAR),l.bindFramebuffer(l.READ_FRAMEBUFFER,t.glFramebuffers[this.CONTEXT_UID].framebuffer)}disposeFramebuffer(t,r){const s=t.glFramebuffers[this.CONTEXT_UID],a=this.gl;if(!s)return;delete t.glFramebuffers[this.CONTEXT_UID];const u=this.managedFramebuffers.indexOf(t);u>=0&&this.managedFramebuffers.splice(u,1),t.disposeRunner.remove(this),r||(a.deleteFramebuffer(s.framebuffer),s.msaaBuffer&&a.deleteRenderbuffer(s.msaaBuffer),s.stencil&&a.deleteRenderbuffer(s.stencil)),s.blitFramebuffer&&this.disposeFramebuffer(s.blitFramebuffer,r)}disposeAll(t){const r=this.managedFramebuffers;this.managedFramebuffers=[];for(let s=0;s<r.length;s++)this.disposeFramebuffer(r[s],t)}forceStencil(){const t=this.current;if(!t)return;const r=t.glFramebuffers[this.CONTEXT_UID];if(!r||r.stencil&&t.stencil)return;t.stencil=!0;const s=t.width,a=t.height,u=this.gl,l=r.stencil=u.createRenderbuffer();u.bindRenderbuffer(u.RENDERBUFFER,l);let d,g;this.renderer.context.webGLVersion===1?(d=u.DEPTH_STENCIL_ATTACHMENT,g=u.DEPTH_STENCIL):t.depth?(d=u.DEPTH_STENCIL_ATTACHMENT,g=u.DEPTH24_STENCIL8):(d=u.STENCIL_ATTACHMENT,g=u.STENCIL_INDEX8),r.msaaBuffer?u.renderbufferStorageMultisample(u.RENDERBUFFER,r.multisample,g,s,a):u.renderbufferStorage(u.RENDERBUFFER,g,s,a),u.framebufferRenderbuffer(u.FRAMEBUFFER,d,u.RENDERBUFFER,l)}reset(){this.current=this.unknownFramebuffer,this.viewport=new Et}destroy(){this.renderer=null}}oc.extension={type:et.RendererSystem,name:"framebuffer"};lt.add(oc);const Jo={5126:4,5123:2,5121:1};class ac{constructor(t){this.renderer=t,this._activeGeometry=null,this._activeVao=null,this.hasVao=!0,this.hasInstance=!0,this.canUseUInt32ElementIndex=!1,this.managedGeometries={}}contextChange(){this.disposeAll(!0);const t=this.gl=this.renderer.gl,r=this.renderer.context;if(this.CONTEXT_UID=this.renderer.CONTEXT_UID,r.webGLVersion!==2){let s=this.renderer.context.extensions.vertexArrayObject;tt.PREFER_ENV===Mr.WEBGL_LEGACY&&(s=null),s?(t.createVertexArray=()=>s.createVertexArrayOES(),t.bindVertexArray=a=>s.bindVertexArrayOES(a),t.deleteVertexArray=a=>s.deleteVertexArrayOES(a)):(this.hasVao=!1,t.createVertexArray=()=>null,t.bindVertexArray=()=>null,t.deleteVertexArray=()=>null)}if(r.webGLVersion!==2){const s=t.getExtension("ANGLE_instanced_arrays");s?(t.vertexAttribDivisor=(a,u)=>s.vertexAttribDivisorANGLE(a,u),t.drawElementsInstanced=(a,u,l,d,g)=>s.drawElementsInstancedANGLE(a,u,l,d,g),t.drawArraysInstanced=(a,u,l,d)=>s.drawArraysInstancedANGLE(a,u,l,d)):this.hasInstance=!1}this.canUseUInt32ElementIndex=r.webGLVersion===2||!!r.extensions.uint32ElementIndex}bind(t,r){r=r||this.renderer.shader.shader;const{gl:s}=this;let a=t.glVertexArrayObjects[this.CONTEXT_UID],u=!1;a||(this.managedGeometries[t.id]=t,t.disposeRunner.add(this),t.glVertexArrayObjects[this.CONTEXT_UID]=a={},u=!0);const l=a[r.program.id]||this.initGeometryVao(t,r,u);this._activeGeometry=t,this._activeVao!==l&&(this._activeVao=l,this.hasVao?s.bindVertexArray(l):this.activateVao(t,r.program)),this.updateBuffers()}reset(){this.unbind()}updateBuffers(){const t=this._activeGeometry,r=this.renderer.buffer;for(let s=0;s<t.buffers.length;s++){const a=t.buffers[s];r.update(a)}}checkCompatibility(t,r){const s=t.attributes,a=r.attributeData;for(const u in a)if(!s[u])throw new Error(`shader and geometry incompatible, geometry missing the "${u}" attribute`)}getSignature(t,r){const s=t.attributes,a=r.attributeData,u=["g",t.id];for(const l in s)a[l]&&u.push(l,a[l].location);return u.join("-")}initGeometryVao(t,r,s=!0){const a=this.gl,u=this.CONTEXT_UID,l=this.renderer.buffer,d=r.program;d.glPrograms[u]||this.renderer.shader.generateProgram(r),this.checkCompatibility(t,d);const g=this.getSignature(t,d),_=t.glVertexArrayObjects[this.CONTEXT_UID];let C=_[g];if(C)return _[d.id]=C,C;const b=t.buffers,R=t.attributes,F={},V={};for(const U in b)F[U]=0,V[U]=0;for(const U in R)!R[U].size&&d.attributeData[U]?R[U].size=d.attributeData[U].size:R[U].size||console.warn(`PIXI Geometry attribute '${U}' size cannot be determined (likely the bound shader does not have the attribute)`),F[R[U].buffer]+=R[U].size*Jo[R[U].type];for(const U in R){const B=R[U],mt=B.size;B.stride===void 0&&(F[B.buffer]===mt*Jo[B.type]?B.stride=0:B.stride=F[B.buffer]),B.start===void 0&&(B.start=V[B.buffer],V[B.buffer]+=mt*Jo[B.type])}C=a.createVertexArray(),a.bindVertexArray(C);for(let U=0;U<b.length;U++){const B=b[U];l.bind(B),s&&B._glBuffers[u].refCount++}return this.activateVao(t,d),_[d.id]=C,_[g]=C,a.bindVertexArray(null),l.unbind(Le.ARRAY_BUFFER),C}disposeGeometry(t,r){var d;if(!this.managedGeometries[t.id])return;delete this.managedGeometries[t.id];const s=t.glVertexArrayObjects[this.CONTEXT_UID],a=this.gl,u=t.buffers,l=(d=this.renderer)==null?void 0:d.buffer;if(t.disposeRunner.remove(this),!!s){if(l)for(let g=0;g<u.length;g++){const _=u[g]._glBuffers[this.CONTEXT_UID];_&&(_.refCount--,_.refCount===0&&!r&&l.dispose(u[g],r))}if(!r){for(const g in s)if(g[0]==="g"){const _=s[g];this._activeVao===_&&this.unbind(),a.deleteVertexArray(_)}}delete t.glVertexArrayObjects[this.CONTEXT_UID]}}disposeAll(t){const r=Object.keys(this.managedGeometries);for(let s=0;s<r.length;s++)this.disposeGeometry(this.managedGeometries[r[s]],t)}activateVao(t,r){const s=this.gl,a=this.CONTEXT_UID,u=this.renderer.buffer,l=t.buffers,d=t.attributes;t.indexBuffer&&u.bind(t.indexBuffer);let g=null;for(const _ in d){const C=d[_],b=l[C.buffer],R=b._glBuffers[a];if(r.attributeData[_]){g!==R&&(u.bind(b),g=R);const F=r.attributeData[_].location;if(s.enableVertexAttribArray(F),s.vertexAttribPointer(F,C.size,C.type||s.FLOAT,C.normalized,C.stride,C.start),C.instance)if(this.hasInstance)s.vertexAttribDivisor(F,C.divisor);else throw new Error("geometry error, GPU Instancing is not supported on this device")}}}draw(t,r,s,a){const{gl:u}=this,l=this._activeGeometry;if(l.indexBuffer){const d=l.indexBuffer.data.BYTES_PER_ELEMENT,g=d===2?u.UNSIGNED_SHORT:u.UNSIGNED_INT;d===2||d===4&&this.canUseUInt32ElementIndex?l.instanced?u.drawElementsInstanced(t,r||l.indexBuffer.data.length,g,(s||0)*d,a||1):u.drawElements(t,r||l.indexBuffer.data.length,g,(s||0)*d):console.warn("unsupported index buffer type: uint32")}else l.instanced?u.drawArraysInstanced(t,s,r||l.getSize(),a||1):u.drawArrays(t,s,r||l.getSize());return this}unbind(){this.gl.bindVertexArray(null),this._activeVao=null,this._activeGeometry=null}destroy(){this.renderer=null}}ac.extension={type:et.RendererSystem,name:"geometry"};lt.add(ac);const El=new Pt;class ex{constructor(t,r){this._texture=t,this.mapCoord=new Pt,this.uClampFrame=new Float32Array(4),this.uClampOffset=new Float32Array(2),this._textureID=-1,this._updateID=0,this.clampOffset=0,this.clampMargin=typeof r>"u"?.5:r,this.isSimple=!1}get texture(){return this._texture}set texture(t){this._texture=t,this._textureID=-1}multiplyUvs(t,r){r===void 0&&(r=t);const s=this.mapCoord;for(let a=0;a<t.length;a+=2){const u=t[a],l=t[a+1];r[a]=u*s.a+l*s.c+s.tx,r[a+1]=u*s.b+l*s.d+s.ty}return r}update(t){const r=this._texture;if(!r||!r.valid||!t&&this._textureID===r._updateID)return!1;this._textureID=r._updateID,this._updateID++;const s=r._uvs;this.mapCoord.set(s.x1-s.x0,s.y1-s.y0,s.x3-s.x0,s.y3-s.y0,s.x0,s.y0);const a=r.orig,u=r.trim;u&&(El.set(a.width/u.width,0,0,a.height/u.height,-u.x/u.width,-u.y/u.height),this.mapCoord.append(El));const l=r.baseTexture,d=this.uClampFrame,g=this.clampMargin/l.resolution,_=this.clampOffset;return d[0]=(r._frame.x+g+_)/l.width,d[1]=(r._frame.y+g+_)/l.height,d[2]=(r._frame.x+r._frame.width-g+_)/l.width,d[3]=(r._frame.y+r._frame.height-g+_)/l.height,this.uClampOffset[0]=_/l.realWidth,this.uClampOffset[1]=_/l.realHeight,this.isSimple=r._frame.width===l.width&&r._frame.height===l.height&&r.rotate===0,!0}}var rx=`varying vec2 vMaskCoord;
varying vec2 vTextureCoord;

uniform sampler2D uSampler;
uniform sampler2D mask;
uniform float alpha;
uniform float npmAlpha;
uniform vec4 maskClamp;

void main(void)
{
    float clip = step(3.5,
        step(maskClamp.x, vMaskCoord.x) +
        step(maskClamp.y, vMaskCoord.y) +
        step(vMaskCoord.x, maskClamp.z) +
        step(vMaskCoord.y, maskClamp.w));

    vec4 original = texture2D(uSampler, vTextureCoord);
    vec4 masky = texture2D(mask, vMaskCoord);
    float alphaMul = 1.0 - npmAlpha * (1.0 - masky.a);

    original *= (alphaMul * masky.r * alpha * clip);

    gl_FragColor = original;
}
`,ix=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;
uniform mat3 otherMatrix;

varying vec2 vMaskCoord;
varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);

    vTextureCoord = aTextureCoord;
    vMaskCoord = ( otherMatrix * vec3( aTextureCoord, 1.0)  ).xy;
}
`;class nx extends ft{constructor(t,r,s){let a=null;typeof t!="string"&&r===void 0&&s===void 0&&(a=t,t=void 0,r=void 0,s=void 0),super(t||ix,r||rx,s),this.maskSprite=a,this.maskMatrix=new Pt}get maskSprite(){return this._maskSprite}set maskSprite(t){this._maskSprite=t,this._maskSprite&&(this._maskSprite.renderable=!1)}apply(t,r,s,a){const u=this._maskSprite,l=u._texture;l.valid&&(l.uvMatrix||(l.uvMatrix=new ex(l,0)),l.uvMatrix.update(),this.uniforms.npmAlpha=l.baseTexture.alphaMode?0:1,this.uniforms.mask=l,this.uniforms.otherMatrix=t.calculateSpriteMatrix(this.maskMatrix,u).prepend(l.uvMatrix.mapCoord),this.uniforms.alpha=u.worldAlpha,this.uniforms.maskClamp=l.uvMatrix.uClampFrame,t.applyFilter(this,r,s,a))}}class sx{constructor(t=null){this.type=Mt.NONE,this.autoDetect=!0,this.maskObject=t||null,this.pooled=!1,this.isMaskData=!0,this.resolution=null,this.multisample=ft.defaultMultisample,this.enabled=!0,this.colorMask=15,this._filters=null,this._stencilCounter=0,this._scissorCounter=0,this._scissorRect=null,this._scissorRectLocal=null,this._colorMask=15,this._target=null}get filter(){return this._filters?this._filters[0]:null}set filter(t){t?this._filters?this._filters[0]=t:this._filters=[t]:this._filters=null}reset(){this.pooled&&(this.maskObject=null,this.type=Mt.NONE,this.autoDetect=!0),this._target=null,this._scissorRectLocal=null}copyCountersOrReset(t){t?(this._stencilCounter=t._stencilCounter,this._scissorCounter=t._scissorCounter,this._scissorRect=t._scissorRect):(this._stencilCounter=0,this._scissorCounter=0,this._scissorRect=null)}}class uc{constructor(t){this.renderer=t,this.enableScissor=!0,this.alphaMaskPool=[],this.maskDataPool=[],this.maskStack=[],this.alphaMaskIndex=0}setMaskStack(t){this.maskStack=t,this.renderer.scissor.setMaskStack(t),this.renderer.stencil.setMaskStack(t)}push(t,r){let s=r;if(!s.isMaskData){const u=this.maskDataPool.pop()||new sx;u.pooled=!0,u.maskObject=r,s=u}const a=this.maskStack.length!==0?this.maskStack[this.maskStack.length-1]:null;if(s.copyCountersOrReset(a),s._colorMask=a?a._colorMask:15,s.autoDetect&&this.detect(s),s._target=t,s.type!==Mt.SPRITE&&this.maskStack.push(s),s.enabled)switch(s.type){case Mt.SCISSOR:this.renderer.scissor.push(s);break;case Mt.STENCIL:this.renderer.stencil.push(s);break;case Mt.SPRITE:s.copyCountersOrReset(null),this.pushSpriteMask(s);break;case Mt.COLOR:this.pushColorMask(s);break}s.type===Mt.SPRITE&&this.maskStack.push(s)}pop(t){const r=this.maskStack.pop();if(!(!r||r._target!==t)){if(r.enabled)switch(r.type){case Mt.SCISSOR:this.renderer.scissor.pop(r);break;case Mt.STENCIL:this.renderer.stencil.pop(r.maskObject);break;case Mt.SPRITE:this.popSpriteMask(r);break;case Mt.COLOR:this.popColorMask(r);break}if(r.reset(),r.pooled&&this.maskDataPool.push(r),this.maskStack.length!==0){const s=this.maskStack[this.maskStack.length-1];s.type===Mt.SPRITE&&s._filters&&(s._filters[0].maskSprite=s.maskObject)}}}detect(t){const r=t.maskObject;r?r.isSprite?t.type=Mt.SPRITE:this.enableScissor&&this.renderer.scissor.testScissor(t)?t.type=Mt.SCISSOR:t.type=Mt.STENCIL:t.type=Mt.COLOR}pushSpriteMask(t){const{maskObject:r}=t,s=t._target;let a=t._filters;a||(a=this.alphaMaskPool[this.alphaMaskIndex],a||(a=this.alphaMaskPool[this.alphaMaskIndex]=[new nx])),a[0].resolution=t.resolution,a[0].multisample=t.multisample,a[0].maskSprite=r;const u=s.filterArea;s.filterArea=r.getBounds(!0),this.renderer.filter.push(s,a),s.filterArea=u,t._filters||this.alphaMaskIndex++}popSpriteMask(t){this.renderer.filter.pop(),t._filters?t._filters[0].maskSprite=null:(this.alphaMaskIndex--,this.alphaMaskPool[this.alphaMaskIndex][0].maskSprite=null)}pushColorMask(t){const r=t._colorMask,s=t._colorMask=r&t.colorMask;s!==r&&this.renderer.gl.colorMask((s&1)!==0,(s&2)!==0,(s&4)!==0,(s&8)!==0)}popColorMask(t){const r=t._colorMask,s=this.maskStack.length>0?this.maskStack[this.maskStack.length-1]._colorMask:15;s!==r&&this.renderer.gl.colorMask((s&1)!==0,(s&2)!==0,(s&4)!==0,(s&8)!==0)}destroy(){this.renderer=null}}uc.extension={type:et.RendererSystem,name:"mask"};lt.add(uc);class hc{constructor(t){this.renderer=t,this.maskStack=[],this.glConst=0}getStackLength(){return this.maskStack.length}setMaskStack(t){const{gl:r}=this.renderer,s=this.getStackLength();this.maskStack=t;const a=this.getStackLength();a!==s&&(a===0?r.disable(this.glConst):(r.enable(this.glConst),this._useCurrent()))}_useCurrent(){}destroy(){this.renderer=null,this.maskStack=null}}const wl=new Pt,Al=[],lc=class Qn extends hc{constructor(t){super(t),this.glConst=tt.ADAPTER.getWebGLRenderingContext().SCISSOR_TEST}getStackLength(){const t=this.maskStack[this.maskStack.length-1];return t?t._scissorCounter:0}calcScissorRect(t){if(t._scissorRectLocal)return;const r=t._scissorRect,{maskObject:s}=t,{renderer:a}=this,u=a.renderTexture,l=s.getBounds(!0,Al.pop()??new Et);this.roundFrameToPixels(l,u.current?u.current.resolution:a.resolution,u.sourceFrame,u.destinationFrame,a.projection.transform),r&&l.fit(r),t._scissorRectLocal=l}static isMatrixRotated(t){if(!t)return!1;const{a:r,b:s,c:a,d:u}=t;return(Math.abs(s)>1e-4||Math.abs(a)>1e-4)&&(Math.abs(r)>1e-4||Math.abs(u)>1e-4)}testScissor(t){const{maskObject:r}=t;if(!r.isFastRect||!r.isFastRect()||Qn.isMatrixRotated(r.worldTransform)||Qn.isMatrixRotated(this.renderer.projection.transform))return!1;this.calcScissorRect(t);const s=t._scissorRectLocal;return s.width>0&&s.height>0}roundFrameToPixels(t,r,s,a,u){Qn.isMatrixRotated(u)||(u=u?wl.copyFrom(u):wl.identity(),u.translate(-s.x,-s.y).scale(a.width/s.width,a.height/s.height).translate(a.x,a.y),this.renderer.filter.transformAABB(u,t),t.fit(a),t.x=Math.round(t.x*r),t.y=Math.round(t.y*r),t.width=Math.round(t.width*r),t.height=Math.round(t.height*r))}push(t){t._scissorRectLocal||this.calcScissorRect(t);const{gl:r}=this.renderer;t._scissorRect||r.enable(r.SCISSOR_TEST),t._scissorCounter++,t._scissorRect=t._scissorRectLocal,this._useCurrent()}pop(t){const{gl:r}=this.renderer;t&&Al.push(t._scissorRectLocal),this.getStackLength()>0?this._useCurrent():r.disable(r.SCISSOR_TEST)}_useCurrent(){const t=this.maskStack[this.maskStack.length-1]._scissorRect;let r;this.renderer.renderTexture.current?r=t.y:r=this.renderer.height-t.height-t.y,this.renderer.gl.scissor(t.x,r,t.width,t.height)}};lc.extension={type:et.RendererSystem,name:"scissor"};let ox=lc;lt.add(ox);class cc extends hc{constructor(t){super(t),this.glConst=tt.ADAPTER.getWebGLRenderingContext().STENCIL_TEST}getStackLength(){const t=this.maskStack[this.maskStack.length-1];return t?t._stencilCounter:0}push(t){const r=t.maskObject,{gl:s}=this.renderer,a=t._stencilCounter;a===0&&(this.renderer.framebuffer.forceStencil(),s.clearStencil(0),s.clear(s.STENCIL_BUFFER_BIT),s.enable(s.STENCIL_TEST)),t._stencilCounter++;const u=t._colorMask;u!==0&&(t._colorMask=0,s.colorMask(!1,!1,!1,!1)),s.stencilFunc(s.EQUAL,a,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.INCR),r.renderable=!0,r.render(this.renderer),this.renderer.batch.flush(),r.renderable=!1,u!==0&&(t._colorMask=u,s.colorMask((u&1)!==0,(u&2)!==0,(u&4)!==0,(u&8)!==0)),this._useCurrent()}pop(t){const r=this.renderer.gl;if(this.getStackLength()===0)r.disable(r.STENCIL_TEST);else{const s=this.maskStack.length!==0?this.maskStack[this.maskStack.length-1]:null,a=s?s._colorMask:15;a!==0&&(s._colorMask=0,r.colorMask(!1,!1,!1,!1)),r.stencilOp(r.KEEP,r.KEEP,r.DECR),t.renderable=!0,t.render(this.renderer),this.renderer.batch.flush(),t.renderable=!1,a!==0&&(s._colorMask=a,r.colorMask((a&1)!==0,(a&2)!==0,(a&4)!==0,(a&8)!==0)),this._useCurrent()}}_useCurrent(){const t=this.renderer.gl;t.stencilFunc(t.EQUAL,this.getStackLength(),4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP)}}cc.extension={type:et.RendererSystem,name:"stencil"};lt.add(cc);class dc{constructor(t){this.renderer=t,this.plugins={},Object.defineProperties(this.plugins,{extract:{enumerable:!1,get(){return rt("7.0.0","renderer.plugins.extract has moved to renderer.extract"),t.extract}},prepare:{enumerable:!1,get(){return rt("7.0.0","renderer.plugins.prepare has moved to renderer.prepare"),t.prepare}},interaction:{enumerable:!1,get(){return rt("7.0.0","renderer.plugins.interaction has been deprecated, use renderer.events"),t.events}}})}init(){const t=this.rendererPlugins;for(const r in t)this.plugins[r]=new t[r](this.renderer)}destroy(){for(const t in this.plugins)this.plugins[t].destroy(),this.plugins[t]=null}}dc.extension={type:[et.RendererSystem,et.CanvasRendererSystem],name:"_plugin"};lt.add(dc);class fc{constructor(t){this.renderer=t,this.destinationFrame=null,this.sourceFrame=null,this.defaultFrame=null,this.projectionMatrix=new Pt,this.transform=null}update(t,r,s,a){this.destinationFrame=t||this.destinationFrame||this.defaultFrame,this.sourceFrame=r||this.sourceFrame||t,this.calculateProjection(this.destinationFrame,this.sourceFrame,s,a),this.transform&&this.projectionMatrix.append(this.transform);const u=this.renderer;u.globalUniforms.uniforms.projectionMatrix=this.projectionMatrix,u.globalUniforms.update(),u.shader.shader&&u.shader.syncUniformGroup(u.shader.shader.uniforms.globals)}calculateProjection(t,r,s,a){const u=this.projectionMatrix,l=a?-1:1;u.identity(),u.a=1/r.width*2,u.d=l*(1/r.height*2),u.tx=-1-r.x*u.a,u.ty=-l-r.y*u.d}setTransform(t){}destroy(){this.renderer=null}}fc.extension={type:et.RendererSystem,name:"projection"};lt.add(fc);const ax=new Kl,Rl=new Et;class pc{constructor(t){this.renderer=t,this._tempMatrix=new Pt}generateTexture(t,r){const{region:s,...a}=r||{},u=(s==null?void 0:s.copyTo(Rl))||t.getLocalBounds(Rl,!0),l=a.resolution||this.renderer.resolution;u.width=Math.max(u.width,1/l),u.height=Math.max(u.height,1/l),a.width=u.width,a.height=u.height,a.resolution=l,a.multisample??(a.multisample=this.renderer.multisample);const d=_s.create(a);this._tempMatrix.tx=-u.x,this._tempMatrix.ty=-u.y;const g=t.transform;return t.transform=ax,this.renderer.render(t,{renderTexture:d,transform:this._tempMatrix,skipUpdateTransform:!!t.parent,blit:!0}),t.transform=g,d}destroy(){}}pc.extension={type:[et.RendererSystem,et.CanvasRendererSystem],name:"textureGenerator"};lt.add(pc);const yr=new Et,Ui=new Et;class gc{constructor(t){this.renderer=t,this.defaultMaskStack=[],this.current=null,this.sourceFrame=new Et,this.destinationFrame=new Et,this.viewportFrame=new Et}contextChange(){var r;const t=(r=this.renderer)==null?void 0:r.gl.getContextAttributes();this._rendererPremultipliedAlpha=!!(t&&t.alpha&&t.premultipliedAlpha)}bind(t=null,r,s){const a=this.renderer;this.current=t;let u,l,d;t?(u=t.baseTexture,d=u.resolution,r||(yr.width=t.frame.width,yr.height=t.frame.height,r=yr),s||(Ui.x=t.frame.x,Ui.y=t.frame.y,Ui.width=r.width,Ui.height=r.height,s=Ui),l=u.framebuffer):(d=a.resolution,r||(yr.width=a._view.screen.width,yr.height=a._view.screen.height,r=yr),s||(s=yr,s.width=r.width,s.height=r.height));const g=this.viewportFrame;g.x=s.x*d,g.y=s.y*d,g.width=s.width*d,g.height=s.height*d,t||(g.y=a.view.height-(g.y+g.height)),g.ceil(),this.renderer.framebuffer.bind(l,g),this.renderer.projection.update(s,r,d,!l),t?this.renderer.mask.setMaskStack(u.maskStack):this.renderer.mask.setMaskStack(this.defaultMaskStack),this.sourceFrame.copyFrom(r),this.destinationFrame.copyFrom(s)}clear(t,r){const s=this.current?this.current.baseTexture.clear:this.renderer.background.backgroundColor,a=hi.shared.setValue(t||s);(this.current&&this.current.baseTexture.alphaMode>0||!this.current&&this._rendererPremultipliedAlpha)&&a.premultiply(a.alpha);const u=this.destinationFrame,l=this.current?this.current.baseTexture:this.renderer._view.screen,d=u.width!==l.width||u.height!==l.height;if(d){let{x:g,y:_,width:C,height:b}=this.viewportFrame;g=Math.round(g),_=Math.round(_),C=Math.round(C),b=Math.round(b),this.renderer.gl.enable(this.renderer.gl.SCISSOR_TEST),this.renderer.gl.scissor(g,_,C,b)}this.renderer.framebuffer.clear(a.red,a.green,a.blue,a.alpha,r),d&&this.renderer.scissor.pop()}resize(){this.bind(null)}reset(){this.bind(null)}destroy(){this.renderer=null}}gc.extension={type:et.RendererSystem,name:"renderTexture"};lt.add(gc);class ux{constructor(t,r){this.program=t,this.uniformData=r,this.uniformGroups={},this.uniformDirtyGroups={},this.uniformBufferBindings={}}destroy(){this.uniformData=null,this.uniformGroups=null,this.uniformDirtyGroups=null,this.uniformBufferBindings=null,this.program=null}}function hx(n,t){const r={},s=t.getProgramParameter(n,t.ACTIVE_ATTRIBUTES);for(let a=0;a<s;a++){const u=t.getActiveAttrib(n,a);if(u.name.startsWith("gl_"))continue;const l=Ql(t,u.type),d={type:l,name:u.name,size:Jl(l),location:t.getAttribLocation(n,u.name)};r[u.name]=d}return r}function lx(n,t){const r={},s=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let a=0;a<s;a++){const u=t.getActiveUniform(n,a),l=u.name.replace(/\[.*?\]$/,""),d=!!u.name.match(/\[.*?\]$/),g=Ql(t,u.type);r[l]={name:l,index:a,type:g,size:u.size,isArray:d,value:Yl(g,u.size)}}return r}function cx(n,t){var d;const r=vl(n,n.VERTEX_SHADER,t.vertexSrc),s=vl(n,n.FRAGMENT_SHADER,t.fragmentSrc),a=n.createProgram();n.attachShader(a,r),n.attachShader(a,s);const u=(d=t.extra)==null?void 0:d.transformFeedbackVaryings;if(u&&(typeof n.transformFeedbackVaryings!="function"?console.warn("TransformFeedback is not supported but TransformFeedbackVaryings are given."):n.transformFeedbackVaryings(a,u.names,u.bufferMode==="separate"?n.SEPARATE_ATTRIBS:n.INTERLEAVED_ATTRIBS)),n.linkProgram(a),n.getProgramParameter(a,n.LINK_STATUS)||U1(n,a,r,s),t.attributeData=hx(a,n),t.uniformData=lx(a,n),!/^[ \t]*#[ \t]*version[ \t]+300[ \t]+es[ \t]*$/m.test(t.vertexSrc)){const g=Object.keys(t.attributeData);g.sort((_,C)=>_>C?1:-1);for(let _=0;_<g.length;_++)t.attributeData[g[_]].location=_,n.bindAttribLocation(a,_,g[_]);n.linkProgram(a)}n.deleteShader(r),n.deleteShader(s);const l={};for(const g in t.uniformData){const _=t.uniformData[g];l[g]={location:n.getUniformLocation(a,g),value:Yl(_.type,_.size)}}return new ux(a,l)}function dx(n,t,r,s,a){r.buffer.update(a)}const fx={float:`
        data[offset] = v;
    `,vec2:`
        data[offset] = v[0];
        data[offset+1] = v[1];
    `,vec3:`
        data[offset] = v[0];
        data[offset+1] = v[1];
        data[offset+2] = v[2];

    `,vec4:`
        data[offset] = v[0];
        data[offset+1] = v[1];
        data[offset+2] = v[2];
        data[offset+3] = v[3];
    `,mat2:`
        data[offset] = v[0];
        data[offset+1] = v[1];

        data[offset+4] = v[2];
        data[offset+5] = v[3];
    `,mat3:`
        data[offset] = v[0];
        data[offset+1] = v[1];
        data[offset+2] = v[2];

        data[offset + 4] = v[3];
        data[offset + 5] = v[4];
        data[offset + 6] = v[5];

        data[offset + 8] = v[6];
        data[offset + 9] = v[7];
        data[offset + 10] = v[8];
    `,mat4:`
        for(var i = 0; i < 16; i++)
        {
            data[offset + i] = v[i];
        }
    `},mc={float:4,vec2:8,vec3:12,vec4:16,int:4,ivec2:8,ivec3:12,ivec4:16,uint:4,uvec2:8,uvec3:12,uvec4:16,bool:4,bvec2:8,bvec3:12,bvec4:16,mat2:16*2,mat3:16*3,mat4:16*4};function px(n){const t=n.map(u=>({data:u,offset:0,dataLen:0,dirty:0}));let r=0,s=0,a=0;for(let u=0;u<t.length;u++){const l=t[u];if(r=mc[l.data.type],l.data.size>1&&(r=Math.max(r,16)*l.data.size),l.dataLen=r,s%r!==0&&s<16){const d=s%r%16;s+=d,a+=d}s+r>16?(a=Math.ceil(a/16)*16,l.offset=a,a+=r,s=r):(l.offset=a,s+=r,a+=r)}return a=Math.ceil(a/16)*16,{uboElements:t,size:a}}function gx(n,t){const r=[];for(const s in n)t[s]&&r.push(t[s]);return r.sort((s,a)=>s.index-a.index),r}function mx(n,t){if(!n.autoManage)return{size:0,syncFunc:dx};const r=gx(n.uniforms,t),{uboElements:s,size:a}=px(r),u=[`
    var v = null;
    var v2 = null;
    var cv = null;
    var t = 0;
    var gl = renderer.gl
    var index = 0;
    var data = buffer.data;
    `];for(let l=0;l<s.length;l++){const d=s[l],g=n.uniforms[d.data.name],_=d.data.name;let C=!1;for(let b=0;b<ai.length;b++){const R=ai[b];if(R.codeUbo&&R.test(d.data,g)){u.push(`offset = ${d.offset/4};`,ai[b].codeUbo(d.data.name,g)),C=!0;break}}if(!C)if(d.data.size>1){const b=Jl(d.data.type),R=Math.max(mc[d.data.type]/16,1),F=b/R,V=(4-F%4)%4;u.push(`
                cv = ud.${_}.value;
                v = uv.${_};
                offset = ${d.offset/4};

                t = 0;

                for(var i=0; i < ${d.data.size*R}; i++)
                {
                    for(var j = 0; j < ${F}; j++)
                    {
                        data[offset++] = v[t++];
                    }
                    offset += ${V};
                }

                `)}else{const b=fx[d.data.type];u.push(`
                cv = ud.${_}.value;
                v = uv.${_};
                offset = ${d.offset/4};
                ${b};
                `)}}return u.push(`
       renderer.buffer.update(buffer);
    `),{size:a,syncFunc:new Function("ud","uv","renderer","syncData","buffer",u.join(`
`))}}let _x=0;const Kn={textureCount:0,uboCount:0};class _c{constructor(t){this.destroyed=!1,this.renderer=t,this.systemCheck(),this.gl=null,this.shader=null,this.program=null,this.cache={},this._uboCache={},this.id=_x++}systemCheck(){if(!G1())throw new Error("Current environment does not allow unsafe-eval, please use @pixi/unsafe-eval module to enable support.")}contextChange(t){this.gl=t,this.reset()}bind(t,r){t.disposeRunner.add(this),t.uniforms.globals=this.renderer.globalUniforms;const s=t.program,a=s.glPrograms[this.renderer.CONTEXT_UID]||this.generateProgram(t);return this.shader=t,this.program!==s&&(this.program=s,this.gl.useProgram(a.program)),r||(Kn.textureCount=0,Kn.uboCount=0,this.syncUniformGroup(t.uniformGroup,Kn)),a}setUniforms(t){const r=this.shader.program,s=r.glPrograms[this.renderer.CONTEXT_UID];r.syncUniforms(s.uniformData,t,this.renderer)}syncUniformGroup(t,r){const s=this.getGlProgram();(!t.static||t.dirtyId!==s.uniformDirtyGroups[t.id])&&(s.uniformDirtyGroups[t.id]=t.dirtyId,this.syncUniforms(t,s,r))}syncUniforms(t,r,s){(t.syncUniforms[this.shader.program.id]||this.createSyncGroups(t))(r.uniformData,t.uniforms,this.renderer,s)}createSyncGroups(t){const r=this.getSignature(t,this.shader.program.uniformData,"u");return this.cache[r]||(this.cache[r]=O1(t,this.shader.program.uniformData)),t.syncUniforms[this.shader.program.id]=this.cache[r],t.syncUniforms[this.shader.program.id]}syncUniformBufferGroup(t,r){const s=this.getGlProgram();if(!t.static||t.dirtyId!==0||!s.uniformGroups[t.id]){t.dirtyId=0;const a=s.uniformGroups[t.id]||this.createSyncBufferGroup(t,s,r);t.buffer.update(),a(s.uniformData,t.uniforms,this.renderer,Kn,t.buffer)}this.renderer.buffer.bindBufferBase(t.buffer,s.uniformBufferBindings[r])}createSyncBufferGroup(t,r,s){const{gl:a}=this.renderer;this.renderer.buffer.bind(t.buffer);const u=this.gl.getUniformBlockIndex(r.program,s);r.uniformBufferBindings[s]=this.shader.uniformBindCount,a.uniformBlockBinding(r.program,u,this.shader.uniformBindCount),this.shader.uniformBindCount++;const l=this.getSignature(t,this.shader.program.uniformData,"ubo");let d=this._uboCache[l];if(d||(d=this._uboCache[l]=mx(t,this.shader.program.uniformData)),t.autoManage){const g=new Float32Array(d.size/4);t.buffer.update(g)}return r.uniformGroups[t.id]=d.syncFunc,r.uniformGroups[t.id]}getSignature(t,r,s){const a=t.uniforms,u=[`${s}-`];for(const l in a)u.push(l),r[l]&&u.push(r[l].type);return u.join("-")}getGlProgram(){return this.shader?this.shader.program.glPrograms[this.renderer.CONTEXT_UID]:null}generateProgram(t){const r=this.gl,s=t.program,a=cx(r,s);return s.glPrograms[this.renderer.CONTEXT_UID]=a,a}reset(){this.program=null,this.shader=null}disposeShader(t){this.shader===t&&(this.shader=null)}destroy(){this.renderer=null,this.destroyed=!0}}_c.extension={type:et.RendererSystem,name:"shader"};lt.add(_c);class ls{constructor(t){this.renderer=t}run(t){const{renderer:r}=this;r.runners.init.emit(r.options),t.hello&&console.log(`PixiJS 7.4.0 - ${r.rendererLogId} - https://pixijs.com`),r.resize(r.screen.width,r.screen.height)}destroy(){}}ls.defaultOptions={hello:!1},ls.extension={type:[et.RendererSystem,et.CanvasRendererSystem],name:"startup"};lt.add(ls);function vx(n,t=[]){return t[z.NORMAL]=[n.ONE,n.ONE_MINUS_SRC_ALPHA],t[z.ADD]=[n.ONE,n.ONE],t[z.MULTIPLY]=[n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA],t[z.SCREEN]=[n.ONE,n.ONE_MINUS_SRC_COLOR,n.ONE,n.ONE_MINUS_SRC_ALPHA],t[z.OVERLAY]=[n.ONE,n.ONE_MINUS_SRC_ALPHA],t[z.DARKEN]=[n.ONE,n.ONE_MINUS_SRC_ALPHA],t[z.LIGHTEN]=[n.ONE,n.ONE_MINUS_SRC_ALPHA],t[z.COLOR_DODGE]=[n.ONE,n.ONE_MINUS_SRC_ALPHA],t[z.COLOR_BURN]=[n.ONE,n.ONE_MINUS_SRC_ALPHA],t[z.HARD_LIGHT]=[n.ONE,n.ONE_MINUS_SRC_ALPHA],t[z.SOFT_LIGHT]=[n.ONE,n.ONE_MINUS_SRC_ALPHA],t[z.DIFFERENCE]=[n.ONE,n.ONE_MINUS_SRC_ALPHA],t[z.EXCLUSION]=[n.ONE,n.ONE_MINUS_SRC_ALPHA],t[z.HUE]=[n.ONE,n.ONE_MINUS_SRC_ALPHA],t[z.SATURATION]=[n.ONE,n.ONE_MINUS_SRC_ALPHA],t[z.COLOR]=[n.ONE,n.ONE_MINUS_SRC_ALPHA],t[z.LUMINOSITY]=[n.ONE,n.ONE_MINUS_SRC_ALPHA],t[z.NONE]=[0,0],t[z.NORMAL_NPM]=[n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA],t[z.ADD_NPM]=[n.SRC_ALPHA,n.ONE,n.ONE,n.ONE],t[z.SCREEN_NPM]=[n.SRC_ALPHA,n.ONE_MINUS_SRC_COLOR,n.ONE,n.ONE_MINUS_SRC_ALPHA],t[z.SRC_IN]=[n.DST_ALPHA,n.ZERO],t[z.SRC_OUT]=[n.ONE_MINUS_DST_ALPHA,n.ZERO],t[z.SRC_ATOP]=[n.DST_ALPHA,n.ONE_MINUS_SRC_ALPHA],t[z.DST_OVER]=[n.ONE_MINUS_DST_ALPHA,n.ONE],t[z.DST_IN]=[n.ZERO,n.SRC_ALPHA],t[z.DST_OUT]=[n.ZERO,n.ONE_MINUS_SRC_ALPHA],t[z.DST_ATOP]=[n.ONE_MINUS_DST_ALPHA,n.SRC_ALPHA],t[z.XOR]=[n.ONE_MINUS_DST_ALPHA,n.ONE_MINUS_SRC_ALPHA],t[z.SUBTRACT]=[n.ONE,n.ONE,n.ONE,n.ONE,n.FUNC_REVERSE_SUBTRACT,n.FUNC_ADD],t}const xx=0,yx=1,Tx=2,bx=3,Cx=4,Ex=5,vc=class fa{constructor(){this.gl=null,this.stateId=0,this.polygonOffset=0,this.blendMode=z.NONE,this._blendEq=!1,this.map=[],this.map[xx]=this.setBlend,this.map[yx]=this.setOffset,this.map[Tx]=this.setCullFace,this.map[bx]=this.setDepthTest,this.map[Cx]=this.setFrontFace,this.map[Ex]=this.setDepthMask,this.checks=[],this.defaultState=new li,this.defaultState.blend=!0}contextChange(t){this.gl=t,this.blendModes=vx(t),this.set(this.defaultState),this.reset()}set(t){if(t=t||this.defaultState,this.stateId!==t.data){let r=this.stateId^t.data,s=0;for(;r;)r&1&&this.map[s].call(this,!!(t.data&1<<s)),r=r>>1,s++;this.stateId=t.data}for(let r=0;r<this.checks.length;r++)this.checks[r](this,t)}forceState(t){t=t||this.defaultState;for(let r=0;r<this.map.length;r++)this.map[r].call(this,!!(t.data&1<<r));for(let r=0;r<this.checks.length;r++)this.checks[r](this,t);this.stateId=t.data}setBlend(t){this.updateCheck(fa.checkBlendMode,t),this.gl[t?"enable":"disable"](this.gl.BLEND)}setOffset(t){this.updateCheck(fa.checkPolygonOffset,t),this.gl[t?"enable":"disable"](this.gl.POLYGON_OFFSET_FILL)}setDepthTest(t){this.gl[t?"enable":"disable"](this.gl.DEPTH_TEST)}setDepthMask(t){this.gl.depthMask(t)}setCullFace(t){this.gl[t?"enable":"disable"](this.gl.CULL_FACE)}setFrontFace(t){this.gl.frontFace(this.gl[t?"CW":"CCW"])}setBlendMode(t){if(t===this.blendMode)return;this.blendMode=t;const r=this.blendModes[t],s=this.gl;r.length===2?s.blendFunc(r[0],r[1]):s.blendFuncSeparate(r[0],r[1],r[2],r[3]),r.length===6?(this._blendEq=!0,s.blendEquationSeparate(r[4],r[5])):this._blendEq&&(this._blendEq=!1,s.blendEquationSeparate(s.FUNC_ADD,s.FUNC_ADD))}setPolygonOffset(t,r){this.gl.polygonOffset(t,r)}reset(){this.gl.pixelStorei(this.gl.UNPACK_FLIP_Y_WEBGL,!1),this.forceState(this.defaultState),this._blendEq=!0,this.blendMode=-1,this.setBlendMode(0)}updateCheck(t,r){const s=this.checks.indexOf(t);r&&s===-1?this.checks.push(t):!r&&s!==-1&&this.checks.splice(s,1)}static checkBlendMode(t,r){t.setBlendMode(r.blendMode)}static checkPolygonOffset(t,r){t.setPolygonOffset(1,r.polygonOffset)}destroy(){this.gl=null}};vc.extension={type:et.RendererSystem,name:"state"};let wx=vc;lt.add(wx);class Ax extends ba{constructor(){super(...arguments),this.runners={},this._systemsHash={}}setup(t){this.addRunners(...t.runners);const r=(t.priority??[]).filter(a=>t.systems[a]),s=[...r,...Object.keys(t.systems).filter(a=>!r.includes(a))];for(const a of s)this.addSystem(t.systems[a],a)}addRunners(...t){t.forEach(r=>{this.runners[r]=new Se(r)})}addSystem(t,r){const s=new t(this);if(this[r])throw new Error(`Whoops! The name "${r}" is already in use`);this[r]=s,this._systemsHash[r]=s;for(const a in this.runners)this.runners[a].add(s);return this}emitWithCustomOptions(t,r){const s=Object.keys(this._systemsHash);t.items.forEach(a=>{const u=s.find(l=>this._systemsHash[l]===a);a[t.name](r[u])})}destroy(){Object.values(this.runners).forEach(t=>{t.destroy()}),this._systemsHash={}}}const Di=class ts{constructor(t){this.renderer=t,this.count=0,this.checkCount=0,this.maxIdle=ts.defaultMaxIdle,this.checkCountMax=ts.defaultCheckCountMax,this.mode=ts.defaultMode}postrender(){this.renderer.objectRenderer.renderingToScreen&&(this.count++,this.mode!==Ea.MANUAL&&(this.checkCount++,this.checkCount>this.checkCountMax&&(this.checkCount=0,this.run())))}run(){const t=this.renderer.texture,r=t.managedTextures;let s=!1;for(let a=0;a<r.length;a++){const u=r[a];u.resource&&this.count-u.touched>this.maxIdle&&(t.destroyTexture(u,!0),r[a]=null,s=!0)}if(s){let a=0;for(let u=0;u<r.length;u++)r[u]!==null&&(r[a++]=r[u]);r.length=a}}unload(t){const r=this.renderer.texture,s=t._texture;s&&!s.framebuffer&&r.destroyTexture(s);for(let a=t.children.length-1;a>=0;a--)this.unload(t.children[a])}destroy(){this.renderer=null}};Di.defaultMode=Ea.AUTO,Di.defaultMaxIdle=60*60,Di.defaultCheckCountMax=60*10,Di.extension={type:et.RendererSystem,name:"textureGC"};let Rr=Di;lt.add(Rr);class Qo{constructor(t){this.texture=t,this.width=-1,this.height=-1,this.dirtyId=-1,this.dirtyStyleId=-1,this.mipmap=!1,this.wrapMode=33071,this.type=Y.UNSIGNED_BYTE,this.internalFormat=N.RGBA,this.samplerType=0}}function Rx(n){let t;return"WebGL2RenderingContext"in globalThis&&n instanceof globalThis.WebGL2RenderingContext?t={[n.RGB]:M.FLOAT,[n.RGBA]:M.FLOAT,[n.ALPHA]:M.FLOAT,[n.LUMINANCE]:M.FLOAT,[n.LUMINANCE_ALPHA]:M.FLOAT,[n.R8]:M.FLOAT,[n.R8_SNORM]:M.FLOAT,[n.RG8]:M.FLOAT,[n.RG8_SNORM]:M.FLOAT,[n.RGB8]:M.FLOAT,[n.RGB8_SNORM]:M.FLOAT,[n.RGB565]:M.FLOAT,[n.RGBA4]:M.FLOAT,[n.RGB5_A1]:M.FLOAT,[n.RGBA8]:M.FLOAT,[n.RGBA8_SNORM]:M.FLOAT,[n.RGB10_A2]:M.FLOAT,[n.RGB10_A2UI]:M.FLOAT,[n.SRGB8]:M.FLOAT,[n.SRGB8_ALPHA8]:M.FLOAT,[n.R16F]:M.FLOAT,[n.RG16F]:M.FLOAT,[n.RGB16F]:M.FLOAT,[n.RGBA16F]:M.FLOAT,[n.R32F]:M.FLOAT,[n.RG32F]:M.FLOAT,[n.RGB32F]:M.FLOAT,[n.RGBA32F]:M.FLOAT,[n.R11F_G11F_B10F]:M.FLOAT,[n.RGB9_E5]:M.FLOAT,[n.R8I]:M.INT,[n.R8UI]:M.UINT,[n.R16I]:M.INT,[n.R16UI]:M.UINT,[n.R32I]:M.INT,[n.R32UI]:M.UINT,[n.RG8I]:M.INT,[n.RG8UI]:M.UINT,[n.RG16I]:M.INT,[n.RG16UI]:M.UINT,[n.RG32I]:M.INT,[n.RG32UI]:M.UINT,[n.RGB8I]:M.INT,[n.RGB8UI]:M.UINT,[n.RGB16I]:M.INT,[n.RGB16UI]:M.UINT,[n.RGB32I]:M.INT,[n.RGB32UI]:M.UINT,[n.RGBA8I]:M.INT,[n.RGBA8UI]:M.UINT,[n.RGBA16I]:M.INT,[n.RGBA16UI]:M.UINT,[n.RGBA32I]:M.INT,[n.RGBA32UI]:M.UINT,[n.DEPTH_COMPONENT16]:M.FLOAT,[n.DEPTH_COMPONENT24]:M.FLOAT,[n.DEPTH_COMPONENT32F]:M.FLOAT,[n.DEPTH_STENCIL]:M.FLOAT,[n.DEPTH24_STENCIL8]:M.FLOAT,[n.DEPTH32F_STENCIL8]:M.FLOAT}:t={[n.RGB]:M.FLOAT,[n.RGBA]:M.FLOAT,[n.ALPHA]:M.FLOAT,[n.LUMINANCE]:M.FLOAT,[n.LUMINANCE_ALPHA]:M.FLOAT,[n.DEPTH_STENCIL]:M.FLOAT},t}function Sx(n){let t;return"WebGL2RenderingContext"in globalThis&&n instanceof globalThis.WebGL2RenderingContext?t={[Y.UNSIGNED_BYTE]:{[N.RGBA]:n.RGBA8,[N.RGB]:n.RGB8,[N.RG]:n.RG8,[N.RED]:n.R8,[N.RGBA_INTEGER]:n.RGBA8UI,[N.RGB_INTEGER]:n.RGB8UI,[N.RG_INTEGER]:n.RG8UI,[N.RED_INTEGER]:n.R8UI,[N.ALPHA]:n.ALPHA,[N.LUMINANCE]:n.LUMINANCE,[N.LUMINANCE_ALPHA]:n.LUMINANCE_ALPHA},[Y.BYTE]:{[N.RGBA]:n.RGBA8_SNORM,[N.RGB]:n.RGB8_SNORM,[N.RG]:n.RG8_SNORM,[N.RED]:n.R8_SNORM,[N.RGBA_INTEGER]:n.RGBA8I,[N.RGB_INTEGER]:n.RGB8I,[N.RG_INTEGER]:n.RG8I,[N.RED_INTEGER]:n.R8I},[Y.UNSIGNED_SHORT]:{[N.RGBA_INTEGER]:n.RGBA16UI,[N.RGB_INTEGER]:n.RGB16UI,[N.RG_INTEGER]:n.RG16UI,[N.RED_INTEGER]:n.R16UI,[N.DEPTH_COMPONENT]:n.DEPTH_COMPONENT16},[Y.SHORT]:{[N.RGBA_INTEGER]:n.RGBA16I,[N.RGB_INTEGER]:n.RGB16I,[N.RG_INTEGER]:n.RG16I,[N.RED_INTEGER]:n.R16I},[Y.UNSIGNED_INT]:{[N.RGBA_INTEGER]:n.RGBA32UI,[N.RGB_INTEGER]:n.RGB32UI,[N.RG_INTEGER]:n.RG32UI,[N.RED_INTEGER]:n.R32UI,[N.DEPTH_COMPONENT]:n.DEPTH_COMPONENT24},[Y.INT]:{[N.RGBA_INTEGER]:n.RGBA32I,[N.RGB_INTEGER]:n.RGB32I,[N.RG_INTEGER]:n.RG32I,[N.RED_INTEGER]:n.R32I},[Y.FLOAT]:{[N.RGBA]:n.RGBA32F,[N.RGB]:n.RGB32F,[N.RG]:n.RG32F,[N.RED]:n.R32F,[N.DEPTH_COMPONENT]:n.DEPTH_COMPONENT32F},[Y.HALF_FLOAT]:{[N.RGBA]:n.RGBA16F,[N.RGB]:n.RGB16F,[N.RG]:n.RG16F,[N.RED]:n.R16F},[Y.UNSIGNED_SHORT_5_6_5]:{[N.RGB]:n.RGB565},[Y.UNSIGNED_SHORT_4_4_4_4]:{[N.RGBA]:n.RGBA4},[Y.UNSIGNED_SHORT_5_5_5_1]:{[N.RGBA]:n.RGB5_A1},[Y.UNSIGNED_INT_2_10_10_10_REV]:{[N.RGBA]:n.RGB10_A2,[N.RGBA_INTEGER]:n.RGB10_A2UI},[Y.UNSIGNED_INT_10F_11F_11F_REV]:{[N.RGB]:n.R11F_G11F_B10F},[Y.UNSIGNED_INT_5_9_9_9_REV]:{[N.RGB]:n.RGB9_E5},[Y.UNSIGNED_INT_24_8]:{[N.DEPTH_STENCIL]:n.DEPTH24_STENCIL8},[Y.FLOAT_32_UNSIGNED_INT_24_8_REV]:{[N.DEPTH_STENCIL]:n.DEPTH32F_STENCIL8}}:t={[Y.UNSIGNED_BYTE]:{[N.RGBA]:n.RGBA,[N.RGB]:n.RGB,[N.ALPHA]:n.ALPHA,[N.LUMINANCE]:n.LUMINANCE,[N.LUMINANCE_ALPHA]:n.LUMINANCE_ALPHA},[Y.UNSIGNED_SHORT_5_6_5]:{[N.RGB]:n.RGB},[Y.UNSIGNED_SHORT_4_4_4_4]:{[N.RGBA]:n.RGBA},[Y.UNSIGNED_SHORT_5_5_5_1]:{[N.RGBA]:n.RGBA}},t}class xc{constructor(t){this.renderer=t,this.boundTextures=[],this.currentLocation=-1,this.managedTextures=[],this._unknownBoundTextures=!1,this.unknownTexture=new ht,this.hasIntegerTextures=!1}contextChange(){const t=this.gl=this.renderer.gl;this.CONTEXT_UID=this.renderer.CONTEXT_UID,this.webGLVersion=this.renderer.context.webGLVersion,this.internalFormats=Sx(t),this.samplerTypes=Rx(t);const r=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS);this.boundTextures.length=r;for(let a=0;a<r;a++)this.boundTextures[a]=null;this.emptyTextures={};const s=new Qo(t.createTexture());t.bindTexture(t.TEXTURE_2D,s.texture),t.texImage2D(t.TEXTURE_2D,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,new Uint8Array(4)),this.emptyTextures[t.TEXTURE_2D]=s,this.emptyTextures[t.TEXTURE_CUBE_MAP]=new Qo(t.createTexture()),t.bindTexture(t.TEXTURE_CUBE_MAP,this.emptyTextures[t.TEXTURE_CUBE_MAP].texture);for(let a=0;a<6;a++)t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+a,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,null);t.texParameteri(t.TEXTURE_CUBE_MAP,t.TEXTURE_MAG_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_CUBE_MAP,t.TEXTURE_MIN_FILTER,t.LINEAR);for(let a=0;a<this.boundTextures.length;a++)this.bind(null,a)}bind(t,r=0){const{gl:s}=this;if(t=t==null?void 0:t.castToBaseTexture(),(t==null?void 0:t.valid)&&!t.parentTextureArray){t.touched=this.renderer.textureGC.count;const a=t._glTextures[this.CONTEXT_UID]||this.initTexture(t);this.boundTextures[r]!==t&&(this.currentLocation!==r&&(this.currentLocation=r,s.activeTexture(s.TEXTURE0+r)),s.bindTexture(t.target,a.texture)),a.dirtyId!==t.dirtyId?(this.currentLocation!==r&&(this.currentLocation=r,s.activeTexture(s.TEXTURE0+r)),this.updateTexture(t)):a.dirtyStyleId!==t.dirtyStyleId&&this.updateTextureStyle(t),this.boundTextures[r]=t}else this.currentLocation!==r&&(this.currentLocation=r,s.activeTexture(s.TEXTURE0+r)),s.bindTexture(s.TEXTURE_2D,this.emptyTextures[s.TEXTURE_2D].texture),this.boundTextures[r]=null}reset(){this._unknownBoundTextures=!0,this.hasIntegerTextures=!1,this.currentLocation=-1;for(let t=0;t<this.boundTextures.length;t++)this.boundTextures[t]=this.unknownTexture}unbind(t){const{gl:r,boundTextures:s}=this;if(this._unknownBoundTextures){this._unknownBoundTextures=!1;for(let a=0;a<s.length;a++)s[a]===this.unknownTexture&&this.bind(null,a)}for(let a=0;a<s.length;a++)s[a]===t&&(this.currentLocation!==a&&(r.activeTexture(r.TEXTURE0+a),this.currentLocation=a),r.bindTexture(t.target,this.emptyTextures[t.target].texture),s[a]=null)}ensureSamplerType(t){const{boundTextures:r,hasIntegerTextures:s,CONTEXT_UID:a}=this;if(s)for(let u=t-1;u>=0;--u){const l=r[u];l&&l._glTextures[a].samplerType!==M.FLOAT&&this.renderer.texture.unbind(l)}}initTexture(t){const r=new Qo(this.gl.createTexture());return r.dirtyId=-1,t._glTextures[this.CONTEXT_UID]=r,this.managedTextures.push(t),t.on("dispose",this.destroyTexture,this),r}initTextureType(t,r){var s;r.internalFormat=((s=this.internalFormats[t.type])==null?void 0:s[t.format])??t.format,r.samplerType=this.samplerTypes[r.internalFormat]??M.FLOAT,this.webGLVersion===2&&t.type===Y.HALF_FLOAT?r.type=this.gl.HALF_FLOAT:r.type=t.type}updateTexture(t){var a;const r=t._glTextures[this.CONTEXT_UID];if(!r)return;const s=this.renderer;if(this.initTextureType(t,r),(a=t.resource)==null?void 0:a.upload(s,t,r))r.samplerType!==M.FLOAT&&(this.hasIntegerTextures=!0);else{const u=t.realWidth,l=t.realHeight,d=s.gl;(r.width!==u||r.height!==l||r.dirtyId<0)&&(r.width=u,r.height=l,d.texImage2D(t.target,0,r.internalFormat,u,l,0,t.format,r.type,null))}t.dirtyStyleId!==r.dirtyStyleId&&this.updateTextureStyle(t),r.dirtyId=t.dirtyId}destroyTexture(t,r){const{gl:s}=this;if(t=t.castToBaseTexture(),t._glTextures[this.CONTEXT_UID]&&(this.unbind(t),s.deleteTexture(t._glTextures[this.CONTEXT_UID].texture),t.off("dispose",this.destroyTexture,this),delete t._glTextures[this.CONTEXT_UID],!r)){const a=this.managedTextures.indexOf(t);a!==-1&&f1(this.managedTextures,a,1)}}updateTextureStyle(t){var s;const r=t._glTextures[this.CONTEXT_UID];r&&((t.mipmap===Nr.POW2||this.webGLVersion!==2)&&!t.isPowerOfTwo?r.mipmap=!1:r.mipmap=t.mipmap>=1,this.webGLVersion!==2&&!t.isPowerOfTwo?r.wrapMode=Ca.CLAMP:r.wrapMode=t.wrapMode,(s=t.resource)!=null&&s.style(this.renderer,t,r)||this.setStyle(t,r),r.dirtyStyleId=t.dirtyStyleId)}setStyle(t,r){const s=this.gl;if(r.mipmap&&t.mipmap!==Nr.ON_MANUAL&&s.generateMipmap(t.target),s.texParameteri(t.target,s.TEXTURE_WRAP_S,r.wrapMode),s.texParameteri(t.target,s.TEXTURE_WRAP_T,r.wrapMode),r.mipmap){s.texParameteri(t.target,s.TEXTURE_MIN_FILTER,t.scaleMode===Oe.LINEAR?s.LINEAR_MIPMAP_LINEAR:s.NEAREST_MIPMAP_NEAREST);const a=this.renderer.context.extensions.anisotropicFiltering;if(a&&t.anisotropicLevel>0&&t.scaleMode===Oe.LINEAR){const u=Math.min(t.anisotropicLevel,s.getParameter(a.MAX_TEXTURE_MAX_ANISOTROPY_EXT));s.texParameterf(t.target,a.TEXTURE_MAX_ANISOTROPY_EXT,u)}}else s.texParameteri(t.target,s.TEXTURE_MIN_FILTER,t.scaleMode===Oe.LINEAR?s.LINEAR:s.NEAREST);s.texParameteri(t.target,s.TEXTURE_MAG_FILTER,t.scaleMode===Oe.LINEAR?s.LINEAR:s.NEAREST)}destroy(){this.renderer=null}}xc.extension={type:et.RendererSystem,name:"texture"};lt.add(xc);class yc{constructor(t){this.renderer=t}contextChange(){this.gl=this.renderer.gl,this.CONTEXT_UID=this.renderer.CONTEXT_UID}bind(t){const{gl:r,CONTEXT_UID:s}=this,a=t._glTransformFeedbacks[s]||this.createGLTransformFeedback(t);r.bindTransformFeedback(r.TRANSFORM_FEEDBACK,a)}unbind(){const{gl:t}=this;t.bindTransformFeedback(t.TRANSFORM_FEEDBACK,null)}beginTransformFeedback(t,r){const{gl:s,renderer:a}=this;r&&a.shader.bind(r),s.beginTransformFeedback(t)}endTransformFeedback(){const{gl:t}=this;t.endTransformFeedback()}createGLTransformFeedback(t){const{gl:r,renderer:s,CONTEXT_UID:a}=this,u=r.createTransformFeedback();t._glTransformFeedbacks[a]=u,r.bindTransformFeedback(r.TRANSFORM_FEEDBACK,u);for(let l=0;l<t.buffers.length;l++){const d=t.buffers[l];d&&(s.buffer.update(d),d._glBuffers[a].refCount++,r.bindBufferBase(r.TRANSFORM_FEEDBACK_BUFFER,l,d._glBuffers[a].buffer||null))}return r.bindTransformFeedback(r.TRANSFORM_FEEDBACK,null),t.disposeRunner.add(this),u}disposeTransformFeedback(t,r){const s=t._glTransformFeedbacks[this.CONTEXT_UID],a=this.gl;t.disposeRunner.remove(this);const u=this.renderer.buffer;if(u)for(let l=0;l<t.buffers.length;l++){const d=t.buffers[l];if(!d)continue;const g=d._glBuffers[this.CONTEXT_UID];g&&(g.refCount--,g.refCount===0&&!r&&u.dispose(d,r))}s&&(r||a.deleteTransformFeedback(s),delete t._glTransformFeedbacks[this.CONTEXT_UID])}destroy(){this.renderer=null}}yc.extension={type:et.RendererSystem,name:"transformFeedback"};lt.add(yc);class cs{constructor(t){this.renderer=t}init(t){this.screen=new Et(0,0,t.width,t.height),this.element=t.view||tt.ADAPTER.createCanvas(),this.resolution=t.resolution||tt.RESOLUTION,this.autoDensity=!!t.autoDensity}resizeView(t,r){this.element.width=Math.round(t*this.resolution),this.element.height=Math.round(r*this.resolution);const s=this.element.width/this.resolution,a=this.element.height/this.resolution;this.screen.width=s,this.screen.height=a,this.autoDensity&&(this.element.style.width=`${s}px`,this.element.style.height=`${a}px`),this.renderer.emit("resize",s,a),this.renderer.runners.resize.emit(this.screen.width,this.screen.height)}destroy(t){var r;t&&((r=this.element.parentNode)==null||r.removeChild(this.element)),this.renderer=null,this.element=null,this.screen=null}}cs.defaultOptions={width:800,height:600,resolution:void 0,autoDensity:!1},cs.extension={type:[et.RendererSystem,et.CanvasRendererSystem],name:"_view"};lt.add(cs);tt.PREFER_ENV=Mr.WEBGL2;tt.STRICT_TEXTURE_CACHE=!1;tt.RENDER_OPTIONS={...hs.defaultOptions,...us.defaultOptions,...cs.defaultOptions,...ls.defaultOptions};Object.defineProperties(tt,{WRAP_MODE:{get(){return ht.defaultOptions.wrapMode},set(n){rt("7.1.0","settings.WRAP_MODE is deprecated, use BaseTexture.defaultOptions.wrapMode"),ht.defaultOptions.wrapMode=n}},SCALE_MODE:{get(){return ht.defaultOptions.scaleMode},set(n){rt("7.1.0","settings.SCALE_MODE is deprecated, use BaseTexture.defaultOptions.scaleMode"),ht.defaultOptions.scaleMode=n}},MIPMAP_TEXTURES:{get(){return ht.defaultOptions.mipmap},set(n){rt("7.1.0","settings.MIPMAP_TEXTURES is deprecated, use BaseTexture.defaultOptions.mipmap"),ht.defaultOptions.mipmap=n}},ANISOTROPIC_LEVEL:{get(){return ht.defaultOptions.anisotropicLevel},set(n){rt("7.1.0","settings.ANISOTROPIC_LEVEL is deprecated, use BaseTexture.defaultOptions.anisotropicLevel"),ht.defaultOptions.anisotropicLevel=n}},FILTER_RESOLUTION:{get(){return rt("7.1.0","settings.FILTER_RESOLUTION is deprecated, use Filter.defaultResolution"),ft.defaultResolution},set(n){ft.defaultResolution=n}},FILTER_MULTISAMPLE:{get(){return rt("7.1.0","settings.FILTER_MULTISAMPLE is deprecated, use Filter.defaultMultisample"),ft.defaultMultisample},set(n){ft.defaultMultisample=n}},SPRITE_MAX_TEXTURES:{get(){return Ar.defaultMaxTextures},set(n){rt("7.1.0","settings.SPRITE_MAX_TEXTURES is deprecated, use BatchRenderer.defaultMaxTextures"),Ar.defaultMaxTextures=n}},SPRITE_BATCH_SIZE:{get(){return Ar.defaultBatchSize},set(n){rt("7.1.0","settings.SPRITE_BATCH_SIZE is deprecated, use BatchRenderer.defaultBatchSize"),Ar.defaultBatchSize=n}},CAN_UPLOAD_SAME_BUFFER:{get(){return Ar.canUploadSameBuffer},set(n){rt("7.1.0","settings.CAN_UPLOAD_SAME_BUFFER is deprecated, use BatchRenderer.canUploadSameBuffer"),Ar.canUploadSameBuffer=n}},GC_MODE:{get(){return Rr.defaultMode},set(n){rt("7.1.0","settings.GC_MODE is deprecated, use TextureGCSystem.defaultMode"),Rr.defaultMode=n}},GC_MAX_IDLE:{get(){return Rr.defaultMaxIdle},set(n){rt("7.1.0","settings.GC_MAX_IDLE is deprecated, use TextureGCSystem.defaultMaxIdle"),Rr.defaultMaxIdle=n}},GC_MAX_CHECK_COUNT:{get(){return Rr.defaultCheckCountMax},set(n){rt("7.1.0","settings.GC_MAX_CHECK_COUNT is deprecated, use TextureGCSystem.defaultCheckCountMax"),Rr.defaultCheckCountMax=n}},PRECISION_VERTEX:{get(){return Fr.defaultVertexPrecision},set(n){rt("7.1.0","settings.PRECISION_VERTEX is deprecated, use Program.defaultVertexPrecision"),Fr.defaultVertexPrecision=n}},PRECISION_FRAGMENT:{get(){return Fr.defaultFragmentPrecision},set(n){rt("7.1.0","settings.PRECISION_FRAGMENT is deprecated, use Program.defaultFragmentPrecision"),Fr.defaultFragmentPrecision=n}}});var ds=(n=>(n[n.INTERACTION=50]="INTERACTION",n[n.HIGH=25]="HIGH",n[n.NORMAL=0]="NORMAL",n[n.LOW=-25]="LOW",n[n.UTILITY=-50]="UTILITY",n))(ds||{});class ta{constructor(t,r=null,s=0,a=!1){this.next=null,this.previous=null,this._destroyed=!1,this.fn=t,this.context=r,this.priority=s,this.once=a}match(t,r=null){return this.fn===t&&this.context===r}emit(t){this.fn&&(this.context?this.fn.call(this.context,t):this.fn(t));const r=this.next;return this.once&&this.destroy(!0),this._destroyed&&(this.next=null),r}connect(t){this.previous=t,t.next&&(t.next.previous=this),this.next=t.next,t.next=this}destroy(t=!1){this._destroyed=!0,this.fn=null,this.context=null,this.previous&&(this.previous.next=this.next),this.next&&(this.next.previous=this.previous);const r=this.next;return this.next=t?null:r,this.previous=null,r}}const Tc=class ne{constructor(){this.autoStart=!1,this.deltaTime=1,this.lastTime=-1,this.speed=1,this.started=!1,this._requestId=null,this._maxElapsedMS=100,this._minElapsedMS=0,this._protected=!1,this._lastFrame=-1,this._head=new ta(null,null,1/0),this.deltaMS=1/ne.targetFPMS,this.elapsedMS=1/ne.targetFPMS,this._tick=t=>{this._requestId=null,this.started&&(this.update(t),this.started&&this._requestId===null&&this._head.next&&(this._requestId=requestAnimationFrame(this._tick)))}}_requestIfNeeded(){this._requestId===null&&this._head.next&&(this.lastTime=performance.now(),this._lastFrame=this.lastTime,this._requestId=requestAnimationFrame(this._tick))}_cancelIfNeeded(){this._requestId!==null&&(cancelAnimationFrame(this._requestId),this._requestId=null)}_startIfPossible(){this.started?this._requestIfNeeded():this.autoStart&&this.start()}add(t,r,s=ds.NORMAL){return this._addListener(new ta(t,r,s))}addOnce(t,r,s=ds.NORMAL){return this._addListener(new ta(t,r,s,!0))}_addListener(t){let r=this._head.next,s=this._head;if(!r)t.connect(s);else{for(;r;){if(t.priority>r.priority){t.connect(s);break}s=r,r=r.next}t.previous||t.connect(s)}return this._startIfPossible(),this}remove(t,r){let s=this._head.next;for(;s;)s.match(t,r)?s=s.destroy():s=s.next;return this._head.next||this._cancelIfNeeded(),this}get count(){if(!this._head)return 0;let t=0,r=this._head;for(;r=r.next;)t++;return t}start(){this.started||(this.started=!0,this._requestIfNeeded())}stop(){this.started&&(this.started=!1,this._cancelIfNeeded())}destroy(){if(!this._protected){this.stop();let t=this._head.next;for(;t;)t=t.destroy(!0);this._head.destroy(),this._head=null}}update(t=performance.now()){let r;if(t>this.lastTime){if(r=this.elapsedMS=t-this.lastTime,r>this._maxElapsedMS&&(r=this._maxElapsedMS),r*=this.speed,this._minElapsedMS){const u=t-this._lastFrame|0;if(u<this._minElapsedMS)return;this._lastFrame=t-u%this._minElapsedMS}this.deltaMS=r,this.deltaTime=this.deltaMS*ne.targetFPMS;const s=this._head;let a=s.next;for(;a;)a=a.emit(this.deltaTime);s.next||this._cancelIfNeeded()}else this.deltaTime=this.deltaMS=this.elapsedMS=0;this.lastTime=t}get FPS(){return 1e3/this.elapsedMS}get minFPS(){return 1e3/this._maxElapsedMS}set minFPS(t){const r=Math.min(this.maxFPS,t),s=Math.min(Math.max(0,r)/1e3,ne.targetFPMS);this._maxElapsedMS=1/s}get maxFPS(){return this._minElapsedMS?Math.round(1e3/this._minElapsedMS):0}set maxFPS(t){if(t===0)this._minElapsedMS=0;else{const r=Math.max(this.minFPS,t);this._minElapsedMS=1/(r/1e3)}}static get shared(){if(!ne._shared){const t=ne._shared=new ne;t.autoStart=!0,t._protected=!0}return ne._shared}static get system(){if(!ne._system){const t=ne._system=new ne;t.autoStart=!0,t._protected=!0}return ne._system}};Tc.targetFPMS=.06;let ur=Tc;Object.defineProperties(tt,{TARGET_FPMS:{get(){return ur.targetFPMS},set(n){rt("7.1.0","settings.TARGET_FPMS is deprecated, use Ticker.targetFPMS"),ur.targetFPMS=n}}});var bc=(n=>(n.Renderer="renderer",n.Application="application",n.RendererSystem="renderer-webgl-system",n.RendererPlugin="renderer-webgl-plugin",n.CanvasRendererSystem="renderer-canvas-system",n.CanvasRendererPlugin="renderer-canvas-plugin",n.Asset="asset",n.LoadParser="load-parser",n.ResolveParser="resolve-parser",n.CacheParser="cache-parser",n.DetectionParser="detection-parser",n))(bc||{});const pa=n=>{if(typeof n=="function"||typeof n=="object"&&n.extension){if(!n.extension)throw new Error("Extension class must have an extension object");n={...typeof n.extension!="object"?{type:n.extension}:n.extension,ref:n}}if(typeof n=="object")n={...n};else throw new Error("Invalid extension type");return typeof n.type=="string"&&(n.type=[n.type]),n},Sl=(n,t)=>pa(n).priority??t,Ix={_addHandlers:{},_removeHandlers:{},_queue:{},remove(...n){return n.map(pa).forEach(t=>{t.type.forEach(r=>{var s,a;return(a=(s=this._removeHandlers)[r])==null?void 0:a.call(s,t)})}),this},add(...n){return n.map(pa).forEach(t=>{t.type.forEach(r=>{var u,l;const s=this._addHandlers,a=this._queue;s[r]?(u=s[r])==null||u.call(s,t):(a[r]=a[r]||[],(l=a[r])==null||l.push(t))})}),this},handle(n,t,r){var l;const s=this._addHandlers,a=this._removeHandlers;if(s[n]||a[n])throw new Error(`Extension type ${n} already has a handler`);s[n]=t,a[n]=r;const u=this._queue;return u[n]&&((l=u[n])==null||l.forEach(d=>t(d)),delete u[n]),this},handleByMap(n,t){return this.handle(n,r=>{r.name&&(t[r.name]=r.ref)},r=>{r.name&&delete t[r.name]})},handleByList(n,t,r=-1){return this.handle(n,s=>{t.includes(s.ref)||(t.push(s.ref),t.sort((a,u)=>Sl(u,r)-Sl(a,r)))},s=>{const a=t.indexOf(s.ref);a!==-1&&t.splice(a,1)})}};class Cc{static init(t){t=Object.assign({autoStart:!0,sharedTicker:!1},t),Object.defineProperty(this,"ticker",{set(r){this._ticker&&this._ticker.remove(this.render,this),this._ticker=r,r&&r.add(this.render,this,ds.LOW)},get(){return this._ticker}}),this.stop=()=>{this._ticker.stop()},this.start=()=>{this._ticker.start()},this._ticker=null,this.ticker=t.sharedTicker?ur.shared:new ur,t.autoStart&&this.start()}static destroy(){if(this._ticker){const t=this._ticker;this.ticker=null,t.destroy()}}}Cc.extension=bc.Application;Ix.add(Cc);const Fx=[];lt.handleByList(et.Renderer,Fx);class Ec{constructor(t){this.renderer=t}contextChange(t){let r;if(this.renderer.context.webGLVersion===1){const s=t.getParameter(t.FRAMEBUFFER_BINDING);t.bindFramebuffer(t.FRAMEBUFFER,null),r=t.getParameter(t.SAMPLES),t.bindFramebuffer(t.FRAMEBUFFER,s)}else{const s=t.getParameter(t.DRAW_FRAMEBUFFER_BINDING);t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),r=t.getParameter(t.SAMPLES),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,s)}r>=St.HIGH?this.multisample=St.HIGH:r>=St.MEDIUM?this.multisample=St.MEDIUM:r>=St.LOW?this.multisample=St.LOW:this.multisample=St.NONE}destroy(){}}Ec.extension={type:et.RendererSystem,name:"_multisample"};lt.add(Ec);class Nx{constructor(t){this.buffer=t||null,this.updateID=-1,this.byteLength=-1,this.refCount=0}}class wc{constructor(t){this.renderer=t,this.managedBuffers={},this.boundBufferBases={}}destroy(){this.renderer=null}contextChange(){this.disposeAll(!0),this.gl=this.renderer.gl,this.CONTEXT_UID=this.renderer.CONTEXT_UID}bind(t){const{gl:r,CONTEXT_UID:s}=this,a=t._glBuffers[s]||this.createGLBuffer(t);r.bindBuffer(t.type,a.buffer)}unbind(t){const{gl:r}=this;r.bindBuffer(t,null)}bindBufferBase(t,r){const{gl:s,CONTEXT_UID:a}=this;if(this.boundBufferBases[r]!==t){const u=t._glBuffers[a]||this.createGLBuffer(t);this.boundBufferBases[r]=t,s.bindBufferBase(s.UNIFORM_BUFFER,r,u.buffer)}}bindBufferRange(t,r,s){const{gl:a,CONTEXT_UID:u}=this;s=s||0;const l=t._glBuffers[u]||this.createGLBuffer(t);a.bindBufferRange(a.UNIFORM_BUFFER,r||0,l.buffer,s*256,256)}update(t){const{gl:r,CONTEXT_UID:s}=this,a=t._glBuffers[s]||this.createGLBuffer(t);if(t._updateID!==a.updateID)if(a.updateID=t._updateID,r.bindBuffer(t.type,a.buffer),a.byteLength>=t.data.byteLength)r.bufferSubData(t.type,0,t.data);else{const u=t.static?r.STATIC_DRAW:r.DYNAMIC_DRAW;a.byteLength=t.data.byteLength,r.bufferData(t.type,t.data,u)}}dispose(t,r){if(!this.managedBuffers[t.id])return;delete this.managedBuffers[t.id];const s=t._glBuffers[this.CONTEXT_UID],a=this.gl;t.disposeRunner.remove(this),s&&(r||a.deleteBuffer(s.buffer),delete t._glBuffers[this.CONTEXT_UID])}disposeAll(t){const r=Object.keys(this.managedBuffers);for(let s=0;s<r.length;s++)this.dispose(this.managedBuffers[r[s]],t)}createGLBuffer(t){const{CONTEXT_UID:r,gl:s}=this;return t._glBuffers[r]=new Nx(s.createBuffer()),this.managedBuffers[t.id]=t,t.disposeRunner.add(this),t._glBuffers[r]}}wc.extension={type:et.RendererSystem,name:"buffer"};lt.add(wc);class Ac{constructor(t){this.renderer=t}render(t,r){const s=this.renderer;let a,u,l,d;if(r&&(a=r.renderTexture,u=r.clear,l=r.transform,d=r.skipUpdateTransform),this.renderingToScreen=!a,s.runners.prerender.emit(),s.emit("prerender"),s.projection.transform=l,!s.context.isLost){if(a||(this.lastObjectRendered=t),!d){const g=t.enableTempParent();t.updateTransform(),t.disableTempParent(g)}s.renderTexture.bind(a),s.batch.currentRenderer.start(),(u??s.background.clearBeforeRender)&&s.renderTexture.clear(),t.render(s),s.batch.currentRenderer.flush(),a&&(r.blit&&s.framebuffer.blit(),a.baseTexture.update()),s.runners.postrender.emit(),s.projection.transform=null,s.emit("postrender")}}destroy(){this.renderer=null,this.lastObjectRendered=null}}Ac.extension={type:et.RendererSystem,name:"objectRenderer"};lt.add(Ac);const es=class ga extends Ax{constructor(t){super(),this.type=$l.WEBGL,t=Object.assign({},tt.RENDER_OPTIONS,t),this.gl=null,this.CONTEXT_UID=0,this.globalUniforms=new Be({projectionMatrix:new Pt},!0);const r={runners:["init","destroy","contextChange","resolutionChange","reset","update","postrender","prerender","resize"],systems:ga.__systems,priority:["_view","textureGenerator","background","_plugin","startup","context","state","texture","buffer","geometry","framebuffer","transformFeedback","mask","scissor","stencil","projection","textureGC","filter","renderTexture","batch","objectRenderer","_multisample"]};this.setup(r),"useContextAlpha"in t&&(rt("7.0.0","options.useContextAlpha is deprecated, use options.premultipliedAlpha and options.backgroundAlpha instead"),t.premultipliedAlpha=t.useContextAlpha&&t.useContextAlpha!=="notMultiplied",t.backgroundAlpha=t.useContextAlpha===!1?1:t.backgroundAlpha),this._plugin.rendererPlugins=ga.__plugins,this.options=t,this.startup.run(this.options)}static test(t){return t!=null&&t.forceCanvas?!1:l1()}render(t,r){this.objectRenderer.render(t,r)}resize(t,r){this._view.resizeView(t,r)}reset(){return this.runners.reset.emit(),this}clear(){this.renderTexture.bind(),this.renderTexture.clear()}destroy(t=!1){this.runners.destroy.items.reverse(),this.emitWithCustomOptions(this.runners.destroy,{_view:t}),super.destroy()}get plugins(){return this._plugin.plugins}get multisample(){return this._multisample.multisample}get width(){return this._view.element.width}get height(){return this._view.element.height}get resolution(){return this._view.resolution}set resolution(t){this._view.resolution=t,this.runners.resolutionChange.emit(t)}get autoDensity(){return this._view.autoDensity}get view(){return this._view.element}get screen(){return this._view.screen}get lastObjectRendered(){return this.objectRenderer.lastObjectRendered}get renderingToScreen(){return this.objectRenderer.renderingToScreen}get rendererLogId(){return`WebGL ${this.context.webGLVersion}`}get clearBeforeRender(){return rt("7.0.0","renderer.clearBeforeRender has been deprecated, please use renderer.background.clearBeforeRender instead."),this.background.clearBeforeRender}get useContextAlpha(){return rt("7.0.0","renderer.useContextAlpha has been deprecated, please use renderer.context.premultipliedAlpha instead."),this.context.useContextAlpha}get preserveDrawingBuffer(){return rt("7.0.0","renderer.preserveDrawingBuffer has been deprecated, we cannot truly know this unless pixi created the context"),this.context.preserveDrawingBuffer}get backgroundColor(){return rt("7.0.0","renderer.backgroundColor has been deprecated, use renderer.background.color instead."),this.background.color}set backgroundColor(t){rt("7.0.0","renderer.backgroundColor has been deprecated, use renderer.background.color instead."),this.background.color=t}get backgroundAlpha(){return rt("7.0.0","renderer.backgroundAlpha has been deprecated, use renderer.background.alpha instead."),this.background.alpha}set backgroundAlpha(t){rt("7.0.0","renderer.backgroundAlpha has been deprecated, use renderer.background.alpha instead."),this.background.alpha=t}get powerPreference(){return rt("7.0.0","renderer.powerPreference has been deprecated, we can only know this if pixi creates the context"),this.context.powerPreference}generateTexture(t,r){return this.textureGenerator.generateTexture(t,r)}};es.extension={type:et.Renderer,priority:1},es.__plugins={},es.__systems={};let Ra=es;lt.handleByMap(et.RendererPlugin,Ra.__plugins);lt.handleByMap(et.RendererSystem,Ra.__systems);lt.add(Ra);class Rc extends Wi{constructor(t,r){const{width:s,height:a}=r||{};super(s,a),this.items=[],this.itemDirtyIds=[];for(let u=0;u<t;u++){const l=new ht;this.items.push(l),this.itemDirtyIds.push(-2)}this.length=t,this._load=null,this.baseTexture=null}initFromArray(t,r){for(let s=0;s<this.length;s++)t[s]&&(t[s].castToBaseTexture?this.addBaseTextureAt(t[s].castToBaseTexture(),s):t[s]instanceof Wi?this.addResourceAt(t[s],s):this.addResourceAt(Wl(t[s],r),s))}dispose(){for(let t=0,r=this.length;t<r;t++)this.items[t].destroy();this.items=null,this.itemDirtyIds=null,this._load=null}addResourceAt(t,r){if(!this.items[r])throw new Error(`Index ${r} is out of bounds`);return t.valid&&!this.valid&&this.resize(t.width,t.height),this.items[r].setResource(t),this}bind(t){if(this.baseTexture!==null)throw new Error("Only one base texture per TextureArray is allowed");super.bind(t);for(let r=0;r<this.length;r++)this.items[r].parentTextureArray=t,this.items[r].on("update",t.update,t)}unbind(t){super.unbind(t);for(let r=0;r<this.length;r++)this.items[r].parentTextureArray=null,this.items[r].off("update",t.update,t)}load(){if(this._load)return this._load;const t=this.items.map(r=>r.resource).filter(r=>r).map(r=>r.load());return this._load=Promise.all(t).then(()=>{const{realWidth:r,realHeight:s}=this.items[0];return this.resize(r,s),this.update(),Promise.resolve(this)}),this._load}}class Mx extends Rc{constructor(t,r){const{width:s,height:a}=r||{};let u,l;Array.isArray(t)?(u=t,l=t.length):l=t,super(l,{width:s,height:a}),u&&this.initFromArray(u,r)}addBaseTextureAt(t,r){if(t.resource)this.addResourceAt(t.resource,r);else throw new Error("ArrayResource does not support RenderTexture");return this}bind(t){super.bind(t),t.target=oi.TEXTURE_2D_ARRAY}upload(t,r,s){const{length:a,itemDirtyIds:u,items:l}=this,{gl:d}=t;s.dirtyId<0&&d.texImage3D(d.TEXTURE_2D_ARRAY,0,s.internalFormat,this._width,this._height,a,0,r.format,s.type,null);for(let g=0;g<a;g++){const _=l[g];u[g]<_.dirtyId&&(u[g]=_.dirtyId,_.valid&&d.texSubImage3D(d.TEXTURE_2D_ARRAY,0,0,0,g,_.resource.width,_.resource.height,1,r.format,s.type,_.resource.source))}return!0}}class Px extends Ke{constructor(t){super(t)}static test(t){const{OffscreenCanvas:r}=globalThis;return r&&t instanceof r?!0:globalThis.HTMLCanvasElement&&t instanceof HTMLCanvasElement}}const Sc=class zi extends Rc{constructor(t,r){const{width:s,height:a,autoLoad:u,linkBaseTexture:l}=r||{};if(t&&t.length!==zi.SIDES)throw new Error(`Invalid length. Got ${t.length}, expected 6`);super(6,{width:s,height:a});for(let d=0;d<zi.SIDES;d++)this.items[d].target=oi.TEXTURE_CUBE_MAP_POSITIVE_X+d;this.linkBaseTexture=l!==!1,t&&this.initFromArray(t,r),u!==!1&&this.load()}bind(t){super.bind(t),t.target=oi.TEXTURE_CUBE_MAP}addBaseTextureAt(t,r,s){if(s===void 0&&(s=this.linkBaseTexture),!this.items[r])throw new Error(`Index ${r} is out of bounds`);if(!this.linkBaseTexture||t.parentTextureArray||Object.keys(t._glTextures).length>0)if(t.resource)this.addResourceAt(t.resource,r);else throw new Error("CubeResource does not support copying of renderTexture.");else t.target=oi.TEXTURE_CUBE_MAP_POSITIVE_X+r,t.parentTextureArray=this.baseTexture,this.items[r]=t;return t.valid&&!this.valid&&this.resize(t.realWidth,t.realHeight),this.items[r]=t,this}upload(t,r,s){const a=this.itemDirtyIds;for(let u=0;u<zi.SIDES;u++){const l=this.items[u];(a[u]<l.dirtyId||s.dirtyId<r.dirtyId)&&(l.valid&&l.resource?(l.resource.upload(t,l,s),a[u]=l.dirtyId):a[u]<-1&&(t.gl.texImage2D(l.target,0,s.internalFormat,r.realWidth,r.realHeight,0,r.format,s.type,null),a[u]=-1))}return!0}static test(t){return Array.isArray(t)&&t.length===zi.SIDES}};Sc.SIDES=6;let Ox=Sc;class si extends Ke{constructor(t,r){r=r||{};let s,a,u;typeof t=="string"?(s=si.EMPTY,a=t,u=!0):(s=t,a=null,u=!1),super(s),this.url=a,this.crossOrigin=r.crossOrigin??!0,this.alphaMode=typeof r.alphaMode=="number"?r.alphaMode:null,this.ownsImageBitmap=r.ownsImageBitmap??u,this._load=null,r.autoLoad!==!1&&this.load()}load(){return this._load?this._load:(this._load=new Promise(async(t,r)=>{if(this.url===null){t(this);return}try{const s=await tt.ADAPTER.fetch(this.url,{mode:this.crossOrigin?"cors":"no-cors"});if(this.destroyed)return;const a=await s.blob();if(this.destroyed)return;const u=await createImageBitmap(a,{premultiplyAlpha:this.alphaMode===null||this.alphaMode===Pr.UNPACK?"premultiply":"none"});if(this.destroyed){u.close();return}this.source=u,this.update(),t(this)}catch(s){if(this.destroyed)return;r(s),this.onError.emit(s)}}),this._load)}upload(t,r,s){return this.source instanceof ImageBitmap?(typeof this.alphaMode=="number"&&(r.alphaMode=this.alphaMode),super.upload(t,r,s)):(this.load(),!1)}dispose(){this.ownsImageBitmap&&this.source instanceof ImageBitmap&&this.source.close(),super.dispose(),this._load=null}static test(t){return!!globalThis.createImageBitmap&&typeof ImageBitmap<"u"&&(typeof t=="string"||t instanceof ImageBitmap)}static get EMPTY(){return si._EMPTY=si._EMPTY??tt.ADAPTER.createCanvas(0,0),si._EMPTY}}const ma=class rs extends Ke{constructor(t,r){r=r||{},super(tt.ADAPTER.createCanvas()),this._width=0,this._height=0,this.svg=t,this.scale=r.scale||1,this._overrideWidth=r.width,this._overrideHeight=r.height,this._resolve=null,this._crossorigin=r.crossorigin,this._load=null,r.autoLoad!==!1&&this.load()}load(){return this._load?this._load:(this._load=new Promise(t=>{if(this._resolve=()=>{this.update(),t(this)},rs.SVG_XML.test(this.svg.trim())){if(!btoa)throw new Error("Your browser doesn't support base64 conversions.");this.svg=`data:image/svg+xml;base64,${btoa(unescape(encodeURIComponent(this.svg)))}`}this._loadSvg()}),this._load)}_loadSvg(){const t=new Image;Ke.crossOrigin(t,this.svg,this._crossorigin),t.src=this.svg,t.onerror=r=>{this._resolve&&(t.onerror=null,this.onError.emit(r))},t.onload=()=>{if(!this._resolve)return;const r=t.width,s=t.height;if(!r||!s)throw new Error("The SVG image must have width and height defined (in pixels), canvas API needs them.");let a=r*this.scale,u=s*this.scale;(this._overrideWidth||this._overrideHeight)&&(a=this._overrideWidth||this._overrideHeight/s*r,u=this._overrideHeight||this._overrideWidth/r*s),a=Math.round(a),u=Math.round(u);const l=this.source;l.width=a,l.height=u,l._pixiId=`canvas_${Vi()}`,l.getContext("2d").drawImage(t,0,0,r,s,0,0,a,u),this._resolve(),this._resolve=null}}static getSize(t){const r=rs.SVG_SIZE.exec(t),s={};return r&&(s[r[1]]=Math.round(parseFloat(r[3])),s[r[5]]=Math.round(parseFloat(r[7]))),s}dispose(){super.dispose(),this._resolve=null,this._crossorigin=null}static test(t,r){return r==="svg"||typeof t=="string"&&t.startsWith("data:image/svg+xml")||typeof t=="string"&&rs.SVG_XML.test(t)}};ma.SVG_XML=/^(<\?xml[^?]+\?>)?\s*(<!--[^(-->)]*-->)?\s*\<svg/m,ma.SVG_SIZE=/<svg[^>]*(?:\s(width|height)=('|")(\d*(?:\.\d+)?)(?:px)?('|"))[^>]*(?:\s(width|height)=('|")(\d*(?:\.\d+)?)(?:px)?('|"))[^>]*>/i;let Lx=ma;class Bx extends Ke{constructor(t){super(t)}static test(t){return!!globalThis.VideoFrame&&t instanceof globalThis.VideoFrame}}const _a=class va extends Ke{constructor(t,r){if(r=r||{},!(t instanceof HTMLVideoElement)){const s=document.createElement("video");r.autoLoad!==!1&&s.setAttribute("preload","auto"),r.playsinline!==!1&&(s.setAttribute("webkit-playsinline",""),s.setAttribute("playsinline","")),r.muted===!0&&(s.setAttribute("muted",""),s.muted=!0),r.loop===!0&&s.setAttribute("loop",""),r.autoPlay!==!1&&s.setAttribute("autoplay",""),typeof t=="string"&&(t=[t]);const a=t[0].src||t[0];Ke.crossOrigin(s,a,r.crossorigin);for(let u=0;u<t.length;++u){const l=document.createElement("source");let{src:d,mime:g}=t[u];if(d=d||t[u],d.startsWith("data:"))g=d.slice(5,d.indexOf(";"));else if(!d.startsWith("blob:")){const _=d.split("?").shift().toLowerCase(),C=_.slice(_.lastIndexOf(".")+1);g=g||va.MIME_TYPES[C]||`video/${C}`}l.src=d,g&&(l.type=g),s.appendChild(l)}t=s}super(t),this.noSubImage=!0,this._autoUpdate=!0,this._isConnectedToTicker=!1,this._updateFPS=r.updateFPS||0,this._msToNextUpdate=0,this.autoPlay=r.autoPlay!==!1,this._videoFrameRequestCallback=this._videoFrameRequestCallback.bind(this),this._videoFrameRequestCallbackHandle=null,this._load=null,this._resolve=null,this._reject=null,this._onCanPlay=this._onCanPlay.bind(this),this._onError=this._onError.bind(this),this._onPlayStart=this._onPlayStart.bind(this),this._onPlayStop=this._onPlayStop.bind(this),this._onSeeked=this._onSeeked.bind(this),r.autoLoad!==!1&&this.load()}update(t=0){if(!this.destroyed){if(this._updateFPS){const r=ur.shared.elapsedMS*this.source.playbackRate;this._msToNextUpdate=Math.floor(this._msToNextUpdate-r)}(!this._updateFPS||this._msToNextUpdate<=0)&&(super.update(),this._msToNextUpdate=this._updateFPS?Math.floor(1e3/this._updateFPS):0)}}_videoFrameRequestCallback(){this.update(),this.destroyed?this._videoFrameRequestCallbackHandle=null:this._videoFrameRequestCallbackHandle=this.source.requestVideoFrameCallback(this._videoFrameRequestCallback)}load(){if(this._load)return this._load;const t=this.source;return(t.readyState===t.HAVE_ENOUGH_DATA||t.readyState===t.HAVE_FUTURE_DATA)&&t.width&&t.height&&(t.complete=!0),t.addEventListener("play",this._onPlayStart),t.addEventListener("pause",this._onPlayStop),t.addEventListener("seeked",this._onSeeked),this._isSourceReady()?this._onCanPlay():(t.addEventListener("canplay",this._onCanPlay),t.addEventListener("canplaythrough",this._onCanPlay),t.addEventListener("error",this._onError,!0)),this._load=new Promise((r,s)=>{this.valid?r(this):(this._resolve=r,this._reject=s,t.load())}),this._load}_onError(t){this.source.removeEventListener("error",this._onError,!0),this.onError.emit(t),this._reject&&(this._reject(t),this._reject=null,this._resolve=null)}_isSourcePlaying(){const t=this.source;return!t.paused&&!t.ended}_isSourceReady(){return this.source.readyState>2}_onPlayStart(){this.valid||this._onCanPlay(),this._configureAutoUpdate()}_onPlayStop(){this._configureAutoUpdate()}_onSeeked(){this._autoUpdate&&!this._isSourcePlaying()&&(this._msToNextUpdate=0,this.update(),this._msToNextUpdate=0)}_onCanPlay(){const t=this.source;t.removeEventListener("canplay",this._onCanPlay),t.removeEventListener("canplaythrough",this._onCanPlay);const r=this.valid;this._msToNextUpdate=0,this.update(),this._msToNextUpdate=0,!r&&this._resolve&&(this._resolve(this),this._resolve=null,this._reject=null),this._isSourcePlaying()?this._onPlayStart():this.autoPlay&&t.play()}dispose(){this._configureAutoUpdate();const t=this.source;t&&(t.removeEventListener("play",this._onPlayStart),t.removeEventListener("pause",this._onPlayStop),t.removeEventListener("seeked",this._onSeeked),t.removeEventListener("canplay",this._onCanPlay),t.removeEventListener("canplaythrough",this._onCanPlay),t.removeEventListener("error",this._onError,!0),t.pause(),t.src="",t.load()),super.dispose()}get autoUpdate(){return this._autoUpdate}set autoUpdate(t){t!==this._autoUpdate&&(this._autoUpdate=t,this._configureAutoUpdate())}get updateFPS(){return this._updateFPS}set updateFPS(t){t!==this._updateFPS&&(this._updateFPS=t,this._configureAutoUpdate())}_configureAutoUpdate(){this._autoUpdate&&this._isSourcePlaying()?!this._updateFPS&&this.source.requestVideoFrameCallback?(this._isConnectedToTicker&&(ur.shared.remove(this.update,this),this._isConnectedToTicker=!1,this._msToNextUpdate=0),this._videoFrameRequestCallbackHandle===null&&(this._videoFrameRequestCallbackHandle=this.source.requestVideoFrameCallback(this._videoFrameRequestCallback))):(this._videoFrameRequestCallbackHandle!==null&&(this.source.cancelVideoFrameCallback(this._videoFrameRequestCallbackHandle),this._videoFrameRequestCallbackHandle=null),this._isConnectedToTicker||(ur.shared.add(this.update,this),this._isConnectedToTicker=!0,this._msToNextUpdate=0)):(this._videoFrameRequestCallbackHandle!==null&&(this.source.cancelVideoFrameCallback(this._videoFrameRequestCallbackHandle),this._videoFrameRequestCallbackHandle=null),this._isConnectedToTicker&&(ur.shared.remove(this.update,this),this._isConnectedToTicker=!1,this._msToNextUpdate=0))}static test(t,r){return globalThis.HTMLVideoElement&&t instanceof HTMLVideoElement||va.TYPES.includes(r)}};_a.TYPES=["mp4","m4v","webm","ogg","ogv","h264","avi","mov"],_a.MIME_TYPES={ogv:"video/ogg",mov:"video/quicktime",m4v:"video/mp4"};let Ux=_a;oa.push(si,ic,Px,Ux,Bx,Lx,Xl,Ox,Mx);var kx=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,Gx=`
varying vec2 vTextureCoord;
uniform sampler2D uSampler;

uniform vec2 uOffset;

void main(void)
{
    vec4 color = vec4(0.0);

    // Sample top left pixel
    color += texture2D(uSampler, vec2(vTextureCoord.x - uOffset.x, vTextureCoord.y + uOffset.y));

    // Sample top right pixel
    color += texture2D(uSampler, vec2(vTextureCoord.x + uOffset.x, vTextureCoord.y + uOffset.y));

    // Sample bottom right pixel
    color += texture2D(uSampler, vec2(vTextureCoord.x + uOffset.x, vTextureCoord.y - uOffset.y));

    // Sample bottom left pixel
    color += texture2D(uSampler, vec2(vTextureCoord.x - uOffset.x, vTextureCoord.y - uOffset.y));

    // Average
    color *= 0.25;

    gl_FragColor = color;
}`,Dx=`
varying vec2 vTextureCoord;
uniform sampler2D uSampler;

uniform vec2 uOffset;
uniform vec4 filterClamp;

void main(void)
{
    vec4 color = vec4(0.0);

    // Sample top left pixel
    color += texture2D(uSampler, clamp(vec2(vTextureCoord.x - uOffset.x, vTextureCoord.y + uOffset.y), filterClamp.xy, filterClamp.zw));

    // Sample top right pixel
    color += texture2D(uSampler, clamp(vec2(vTextureCoord.x + uOffset.x, vTextureCoord.y + uOffset.y), filterClamp.xy, filterClamp.zw));

    // Sample bottom right pixel
    color += texture2D(uSampler, clamp(vec2(vTextureCoord.x + uOffset.x, vTextureCoord.y - uOffset.y), filterClamp.xy, filterClamp.zw));

    // Sample bottom left pixel
    color += texture2D(uSampler, clamp(vec2(vTextureCoord.x - uOffset.x, vTextureCoord.y - uOffset.y), filterClamp.xy, filterClamp.zw));

    // Average
    color *= 0.25;

    gl_FragColor = color;
}
`;let fs=class extends ft{constructor(t=4,r=3,s=!1){super(kx,s?Dx:Gx),this._kernels=[],this._blur=4,this._quality=3,this.uniforms.uOffset=new Float32Array(2),this._pixelSize=new yt,this.pixelSize=1,this._clamp=s,Array.isArray(t)?this.kernels=t:(this._blur=t,this.quality=r)}apply(t,r,s,a){const u=this._pixelSize.x/r._frame.width,l=this._pixelSize.y/r._frame.height;let d;if(this._quality===1||this._blur===0)d=this._kernels[0]+.5,this.uniforms.uOffset[0]=d*u,this.uniforms.uOffset[1]=d*l,t.applyFilter(this,r,s,a);else{const g=t.getFilterTexture();let _=r,C=g,b;const R=this._quality-1;for(let F=0;F<R;F++)d=this._kernels[F]+.5,this.uniforms.uOffset[0]=d*u,this.uniforms.uOffset[1]=d*l,t.applyFilter(this,_,C,1),b=_,_=C,C=b;d=this._kernels[R]+.5,this.uniforms.uOffset[0]=d*u,this.uniforms.uOffset[1]=d*l,t.applyFilter(this,_,s,a),t.returnFilterTexture(g)}}_updatePadding(){this.padding=Math.ceil(this._kernels.reduce((t,r)=>t+r+.5,0))}_generateKernels(){const t=this._blur,r=this._quality,s=[t];if(t>0){let a=t;const u=t/r;for(let l=1;l<r;l++)a-=u,s.push(a)}this._kernels=s,this._updatePadding()}get kernels(){return this._kernels}set kernels(t){Array.isArray(t)&&t.length>0?(this._kernels=t,this._quality=t.length,this._blur=Math.max(...t)):(this._kernels=[0],this._quality=1)}get clamp(){return this._clamp}set pixelSize(t){typeof t=="number"?(this._pixelSize.x=t,this._pixelSize.y=t):Array.isArray(t)?(this._pixelSize.x=t[0],this._pixelSize.y=t[1]):t instanceof yt?(this._pixelSize.x=t.x,this._pixelSize.y=t.y):(this._pixelSize.x=1,this._pixelSize.y=1)}get pixelSize(){return this._pixelSize}get quality(){return this._quality}set quality(t){this._quality=Math.max(1,Math.round(t)),this._generateKernels()}get blur(){return this._blur}set blur(t){this._blur=t,this._generateKernels()}};var Ic=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,zx=`
uniform sampler2D uSampler;
varying vec2 vTextureCoord;

uniform float threshold;

void main() {
    vec4 color = texture2D(uSampler, vTextureCoord);

    // A simple & fast algorithm for getting brightness.
    // It's inaccuracy , but good enought for this feature.
    float _max = max(max(color.r, color.g), color.b);
    float _min = min(min(color.r, color.g), color.b);
    float brightness = (_max + _min) * 0.5;

    if(brightness > threshold) {
        gl_FragColor = color;
    } else {
        gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
    }
}
`;let Hx=class extends ft{constructor(t=.5){super(Ic,zx),this.threshold=t}get threshold(){return this.uniforms.threshold}set threshold(t){this.uniforms.threshold=t}};var $x=`uniform sampler2D uSampler;
varying vec2 vTextureCoord;

uniform sampler2D bloomTexture;
uniform float bloomScale;
uniform float brightness;

void main() {
    vec4 color = texture2D(uSampler, vTextureCoord);
    color.rgb *= brightness;
    vec4 bloomColor = vec4(texture2D(bloomTexture, vTextureCoord).rgb, 0.0);
    bloomColor.rgb *= bloomScale;
    gl_FragColor = color + bloomColor;
}
`;const Fc=class extends ft{constructor(t){super(Ic,$x),this.bloomScale=1,this.brightness=1,this._resolution=tt.FILTER_RESOLUTION,typeof t=="number"&&(t={threshold:t});const r=Object.assign(Fc.defaults,t);this.bloomScale=r.bloomScale,this.brightness=r.brightness;const{kernels:s,blur:a,quality:u,pixelSize:l,resolution:d}=r;this._extractFilter=new Hx(r.threshold),this._extractFilter.resolution=d,this._blurFilter=s?new fs(s):new fs(a,u),this.pixelSize=l,this.resolution=d}apply(t,r,s,a,u){const l=t.getFilterTexture();this._extractFilter.apply(t,r,l,1,u);const d=t.getFilterTexture();this._blurFilter.apply(t,l,d,1),this.uniforms.bloomScale=this.bloomScale,this.uniforms.brightness=this.brightness,this.uniforms.bloomTexture=d,t.applyFilter(this,r,s,a),t.returnFilterTexture(d),t.returnFilterTexture(l)}get resolution(){return this._resolution}set resolution(t){this._resolution=t,this._extractFilter&&(this._extractFilter.resolution=t),this._blurFilter&&(this._blurFilter.resolution=t)}get threshold(){return this._extractFilter.threshold}set threshold(t){this._extractFilter.threshold=t}get kernels(){return this._blurFilter.kernels}set kernels(t){this._blurFilter.kernels=t}get blur(){return this._blurFilter.blur}set blur(t){this._blurFilter.blur=t}get quality(){return this._blurFilter.quality}set quality(t){this._blurFilter.quality=t}get pixelSize(){return this._blurFilter.pixelSize}set pixelSize(t){this._blurFilter.pixelSize=t}};let Vx=Fc;Vx.defaults={threshold:.5,bloomScale:1,brightness:1,kernels:null,blur:8,quality:4,pixelSize:1,resolution:tt.FILTER_RESOLUTION};var Wx=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,Xx=`uniform float radius;
uniform float strength;
uniform vec2 center;
uniform sampler2D uSampler;
varying vec2 vTextureCoord;

uniform vec4 filterArea;
uniform vec4 filterClamp;
uniform vec2 dimensions;

void main()
{
    vec2 coord = vTextureCoord * filterArea.xy;
    coord -= center * dimensions.xy;
    float distance = length(coord);
    if (distance < radius) {
        float percent = distance / radius;
        if (strength > 0.0) {
            coord *= mix(1.0, smoothstep(0.0, radius / distance, percent), strength * 0.75);
        } else {
            coord *= mix(1.0, pow(percent, 1.0 + strength * 0.75) * radius / distance, 1.0 - percent);
        }
    }
    coord += center * dimensions.xy;
    coord /= filterArea.xy;
    vec2 clampedCoord = clamp(coord, filterClamp.xy, filterClamp.zw);
    vec4 color = texture2D(uSampler, clampedCoord);
    if (coord != clampedCoord) {
        color *= max(0.0, 1.0 - length(coord - clampedCoord));
    }

    gl_FragColor = color;
}
`;const Nc=class extends ft{constructor(t){super(Wx,Xx),this.uniforms.dimensions=new Float32Array(2),Object.assign(this,Nc.defaults,t)}apply(t,r,s,a){const{width:u,height:l}=r.filterFrame;this.uniforms.dimensions[0]=u,this.uniforms.dimensions[1]=l,t.applyFilter(this,r,s,a)}get radius(){return this.uniforms.radius}set radius(t){this.uniforms.radius=t}get strength(){return this.uniforms.strength}set strength(t){this.uniforms.strength=t}get center(){return this.uniforms.center}set center(t){this.uniforms.center=t}};let qx=Nc;qx.defaults={center:[.5,.5],radius:100,strength:1};var jx=`const float PI = 3.1415926538;
const float PI_2 = PI*2.;

varying vec2 vTextureCoord;
varying vec2 vFilterCoord;
uniform sampler2D uSampler;

const int TYPE_LINEAR = 0;
const int TYPE_RADIAL = 1;
const int TYPE_CONIC = 2;
const int MAX_STOPS = 32;

uniform int uNumStops;
uniform float uAlphas[3*MAX_STOPS];
uniform vec3 uColors[MAX_STOPS];
uniform float uOffsets[MAX_STOPS];
uniform int uType;
uniform float uAngle;
uniform float uAlpha;
uniform int uMaxColors;
uniform bool uReplace;

struct ColorStop {
    float offset;
    vec3 color;
    float alpha;
};

mat2 rotate2d(float angle){
    return mat2(cos(angle), -sin(angle),
    sin(angle), cos(angle));
}

float projectLinearPosition(vec2 pos, float angle){
    vec2 center = vec2(0.5);
    vec2 result = pos - center;
    result = rotate2d(angle) * result;
    result = result + center;
    return clamp(result.x, 0., 1.);
}

float projectRadialPosition(vec2 pos) {
    float r = distance(vFilterCoord, vec2(0.5));
    return clamp(2.*r, 0., 1.);
}

float projectAnglePosition(vec2 pos, float angle) {
    vec2 center = pos - vec2(0.5);
    float polarAngle=atan(-center.y, center.x);
    return mod(polarAngle + angle, PI_2) / PI_2;
}

float projectPosition(vec2 pos, int type, float angle) {
    if (type == TYPE_LINEAR) {
        return projectLinearPosition(pos, angle);
    } else if (type == TYPE_RADIAL) {
        return projectRadialPosition(pos);
    } else if (type == TYPE_CONIC) {
        return projectAnglePosition(pos, angle);
    }

    return pos.y;
}

void main(void) {
    // current/original color
    vec4 currentColor = texture2D(uSampler, vTextureCoord);

    // skip calculations if gradient alpha is 0
    if (0.0 == uAlpha) {
        gl_FragColor = currentColor;
        return;
    }

    // project position
    float y = projectPosition(vFilterCoord, uType, radians(uAngle));

    // check gradient bounds
    float offsetMin = uOffsets[0];
    float offsetMax = 0.0;

    for (int i = 0; i < MAX_STOPS; i++) {
        if (i == uNumStops-1){ // last index
            offsetMax = uOffsets[i];
        }
    }

    if (y  < offsetMin || y > offsetMax) {
        gl_FragColor = currentColor;
        return;
    }

    // limit colors
    if (uMaxColors > 0) {
        float stepSize = 1./float(uMaxColors);
        float stepNumber = float(floor(y/stepSize));
        y = stepSize * (stepNumber + 0.5);// offset by 0.5 to use color from middle of segment
    }

    // find color stops
    ColorStop from;
    ColorStop to;

    for (int i = 0; i < MAX_STOPS; i++) {
        if (y >= uOffsets[i]) {
            from = ColorStop(uOffsets[i], uColors[i], uAlphas[i]);
            to = ColorStop(uOffsets[i+1], uColors[i+1], uAlphas[i+1]);
        }

        if (i == uNumStops-1){ // last index
            break;
        }
    }

    // mix colors from stops
    vec4 colorFrom = vec4(from.color * from.alpha, from.alpha);
    vec4 colorTo = vec4(to.color * to.alpha, to.alpha);

    float segmentHeight = to.offset - from.offset;
    float relativePos = y - from.offset;// position from 0 to [segmentHeight]
    float relativePercent = relativePos / segmentHeight;// position in percent between [from.offset] and [to.offset].

    float gradientAlpha = uAlpha * currentColor.a;
    vec4 gradientColor = mix(colorFrom, colorTo, relativePercent) * gradientAlpha;

    if (uReplace == false) {
        // mix resulting color with current color
        gl_FragColor = gradientColor + currentColor*(1.-gradientColor.a);
    } else {
        // replace with gradient color
        gl_FragColor = gradientColor;
    }
}
`,Kx=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;
uniform vec4 inputSize;
uniform vec4 outputFrame;

varying vec2 vTextureCoord;
varying vec2 vFilterCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
    vFilterCoord = vTextureCoord * inputSize.xy / outputFrame.zw;
}
`,Or=Or||{};Or.stringify=function(){var n={"visit_linear-gradient":function(t){return n.visit_gradient(t)},"visit_repeating-linear-gradient":function(t){return n.visit_gradient(t)},"visit_radial-gradient":function(t){return n.visit_gradient(t)},"visit_repeating-radial-gradient":function(t){return n.visit_gradient(t)},visit_gradient:function(t){var r=n.visit(t.orientation);return r&&(r+=", "),t.type+"("+r+n.visit(t.colorStops)+")"},visit_shape:function(t){var r=t.value,s=n.visit(t.at),a=n.visit(t.style);return a&&(r+=" "+a),s&&(r+=" at "+s),r},"visit_default-radial":function(t){var r="",s=n.visit(t.at);return s&&(r+=s),r},"visit_extent-keyword":function(t){var r=t.value,s=n.visit(t.at);return s&&(r+=" at "+s),r},"visit_position-keyword":function(t){return t.value},visit_position:function(t){return n.visit(t.value.x)+" "+n.visit(t.value.y)},"visit_%":function(t){return t.value+"%"},visit_em:function(t){return t.value+"em"},visit_px:function(t){return t.value+"px"},visit_literal:function(t){return n.visit_color(t.value,t)},visit_hex:function(t){return n.visit_color("#"+t.value,t)},visit_rgb:function(t){return n.visit_color("rgb("+t.value.join(", ")+")",t)},visit_rgba:function(t){return n.visit_color("rgba("+t.value.join(", ")+")",t)},visit_color:function(t,r){var s=t,a=n.visit(r.length);return a&&(s+=" "+a),s},visit_angular:function(t){return t.value+"deg"},visit_directional:function(t){return"to "+t.value},visit_array:function(t){var r="",s=t.length;return t.forEach(function(a,u){r+=n.visit(a),u<s-1&&(r+=", ")}),r},visit:function(t){if(!t)return"";var r="";if(t instanceof Array)return n.visit_array(t,r);if(t.type){var s=n["visit_"+t.type];if(s)return s(t);throw Error("Missing visitor visit_"+t.type)}else throw Error("Invalid node.")}};return function(t){return n.visit(t)}}();var Or=Or||{};Or.parse=function(){var n={linearGradient:/^(\-(webkit|o|ms|moz)\-)?(linear\-gradient)/i,repeatingLinearGradient:/^(\-(webkit|o|ms|moz)\-)?(repeating\-linear\-gradient)/i,radialGradient:/^(\-(webkit|o|ms|moz)\-)?(radial\-gradient)/i,repeatingRadialGradient:/^(\-(webkit|o|ms|moz)\-)?(repeating\-radial\-gradient)/i,sideOrCorner:/^to (left (top|bottom)|right (top|bottom)|left|right|top|bottom)/i,extentKeywords:/^(closest\-side|closest\-corner|farthest\-side|farthest\-corner|contain|cover)/,positionKeywords:/^(left|center|right|top|bottom)/i,pixelValue:/^(-?(([0-9]*\.[0-9]+)|([0-9]+\.?)))px/,percentageValue:/^(-?(([0-9]*\.[0-9]+)|([0-9]+\.?)))\%/,emValue:/^(-?(([0-9]*\.[0-9]+)|([0-9]+\.?)))em/,angleValue:/^(-?(([0-9]*\.[0-9]+)|([0-9]+\.?)))deg/,startCall:/^\(/,endCall:/^\)/,comma:/^,/,hexColor:/^\#([0-9a-fA-F]+)/,literalColor:/^([a-zA-Z]+)/,rgbColor:/^rgb/i,rgbaColor:/^rgba/i,number:/^(([0-9]*\.[0-9]+)|([0-9]+\.?))/},t="";function r(L){var j=new Error(t+": "+L);throw j.source=t,j}function s(){var L=a();return t.length>0&&r("Invalid input not EOF"),L}function a(){return Tt(u)}function u(){return l("linear-gradient",n.linearGradient,g)||l("repeating-linear-gradient",n.repeatingLinearGradient,g)||l("radial-gradient",n.radialGradient,b)||l("repeating-radial-gradient",n.repeatingRadialGradient,b)}function l(L,j,bt){return d(j,function(Kt){var Yt=bt();return Yt&&(Ie(n.comma)||r("Missing comma before color stops")),{type:L,orientation:Yt,colorStops:Tt(me)}})}function d(L,j){var bt=Ie(L);if(bt){Ie(n.startCall)||r("Missing (");var Kt=j(bt);return Ie(n.endCall)||r("Missing )"),Kt}}function g(){return _()||C()}function _(){return Gt("directional",n.sideOrCorner,1)}function C(){return Gt("angular",n.angleValue,1)}function b(){var L,j=R(),bt;return j&&(L=[],L.push(j),bt=t,Ie(n.comma)&&(j=R(),j?L.push(j):t=bt)),L}function R(){var L=F()||V();if(L)L.at=B();else{var j=U();if(j){L=j;var bt=B();bt&&(L.at=bt)}else{var Kt=mt();Kt&&(L={type:"default-radial",at:Kt})}}return L}function F(){var L=Gt("shape",/^(circle)/i,0);return L&&(L.style=qi()||U()),L}function V(){var L=Gt("shape",/^(ellipse)/i,0);return L&&(L.style=Lr()||U()),L}function U(){return Gt("extent-keyword",n.extentKeywords,1)}function B(){if(Gt("position",/^at/,0)){var L=mt();return L||r("Missing positioning value"),L}}function mt(){var L=ge();if(L.x||L.y)return{type:"position",value:L}}function ge(){return{x:Lr(),y:Lr()}}function Tt(L){var j=L(),bt=[];if(j)for(bt.push(j);Ie(n.comma);)j=L(),j?bt.push(j):r("One extra comma");return bt}function me(){var L=kt();return L||r("Expected color definition"),L.length=Lr(),L}function kt(){return Vt()||hr()||Ue()||_e()}function _e(){return Gt("literal",n.literalColor,0)}function Vt(){return Gt("hex",n.hexColor,1)}function Ue(){return d(n.rgbColor,function(){return{type:"rgb",value:Tt(Xi)}})}function hr(){return d(n.rgbaColor,function(){return{type:"rgba",value:Tt(Xi)}})}function Xi(){return Ie(n.number)[1]}function Lr(){return Gt("%",n.percentageValue,1)||vs()||qi()}function vs(){return Gt("position-keyword",n.positionKeywords,1)}function qi(){return Gt("px",n.pixelValue,1)||Gt("em",n.emValue,1)}function Gt(L,j,bt){var Kt=Ie(j);if(Kt)return{type:L,value:Kt[bt]}}function Ie(L){var j,bt;return bt=/^[\n\r\t\s]+/.exec(t),bt&&ji(bt[0].length),j=L.exec(t),j&&ji(j[0].length),j}function ji(L){t=t.substr(L)}return function(L){return t=L.toString(),s()}}();var Yx=Or.parse;Or.stringify;var Il={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]},Fl={red:0,orange:60,yellow:120,green:180,blue:240,purple:300};function Zx(n){var t,r=[],s=1,a;if(typeof n=="string")if(Il[n])r=Il[n].slice(),a="rgb";else if(n==="transparent")s=0,a="rgb",r=[0,0,0];else if(/^#[A-Fa-f0-9]+$/.test(n)){var u=n.slice(1),l=u.length,d=l<=4;s=1,d?(r=[parseInt(u[0]+u[0],16),parseInt(u[1]+u[1],16),parseInt(u[2]+u[2],16)],l===4&&(s=parseInt(u[3]+u[3],16)/255)):(r=[parseInt(u[0]+u[1],16),parseInt(u[2]+u[3],16),parseInt(u[4]+u[5],16)],l===8&&(s=parseInt(u[6]+u[7],16)/255)),r[0]||(r[0]=0),r[1]||(r[1]=0),r[2]||(r[2]=0),a="rgb"}else if(t=/^((?:rgb|hs[lvb]|hwb|cmyk?|xy[zy]|gray|lab|lchu?v?|[ly]uv|lms)a?)\s*\(([^\)]*)\)/.exec(n)){var g=t[1],_=g==="rgb",u=g.replace(/a$/,"");a=u;var l=u==="cmyk"?4:u==="gray"?1:3;r=t[2].trim().split(/\s*[,\/]\s*|\s+/).map(function(R,F){if(/%$/.test(R))return F===l?parseFloat(R)/100:u==="rgb"?parseFloat(R)*255/100:parseFloat(R);if(u[F]==="h"){if(/deg$/.test(R))return parseFloat(R);if(Fl[R]!==void 0)return Fl[R]}return parseFloat(R)}),g===u&&r.push(1),s=_||r[l]===void 0?1:r[l],r=r.slice(0,l)}else n.length>10&&/[0-9](?:\s|\/)/.test(n)&&(r=n.match(/([0-9]+)/g).map(function(C){return parseFloat(C)}),a=n.match(/([a-z])/ig).join("").toLowerCase());else isNaN(n)?Array.isArray(n)||n.length?(r=[n[0],n[1],n[2]],a="rgb",s=n.length===4?n[3]:1):n instanceof Object&&(n.r!=null||n.red!=null||n.R!=null?(a="rgb",r=[n.r||n.red||n.R||0,n.g||n.green||n.G||0,n.b||n.blue||n.B||0]):(a="hsl",r=[n.h||n.hue||n.H||0,n.s||n.saturation||n.S||0,n.l||n.lightness||n.L||n.b||n.brightness]),s=n.a||n.alpha||n.opacity||1,n.opacity!=null&&(s/=100)):(a="rgb",r=[n>>>16,(n&65280)>>>8,n&255]);return{space:a,values:r,alpha:s}}var xa={name:"rgb",min:[0,0,0],max:[255,255,255],channel:["red","green","blue"],alias:["RGB"]},ea={name:"hsl",min:[0,0,0],max:[360,100,100],channel:["hue","saturation","lightness"],alias:["HSL"],rgb:function(n){var t=n[0]/360,r=n[1]/100,s=n[2]/100,a,u,l,d,g;if(r===0)return g=s*255,[g,g,g];s<.5?u=s*(1+r):u=s+r-s*r,a=2*s-u,d=[0,0,0];for(var _=0;_<3;_++)l=t+1/3*-(_-1),l<0?l++:l>1&&l--,6*l<1?g=a+(u-a)*6*l:2*l<1?g=u:3*l<2?g=a+(u-a)*(2/3-l)*6:g=a,d[_]=g*255;return d}};xa.hsl=function(n){var t=n[0]/255,r=n[1]/255,s=n[2]/255,a=Math.min(t,r,s),u=Math.max(t,r,s),l=u-a,d,g,_;return u===a?d=0:t===u?d=(r-s)/l:r===u?d=2+(s-t)/l:s===u&&(d=4+(t-r)/l),d=Math.min(d*60,360),d<0&&(d+=360),_=(a+u)/2,u===a?g=0:_<=.5?g=l/(u+a):g=l/(2-u-a),[d,g*100,_*100]};function Jx(n){Array.isArray(n)&&n.raw&&(n=String.raw(...arguments));var t,r=Zx(n);if(!r.space)return[];const s=r.space[0]==="h"?ea.min:xa.min,a=r.space[0]==="h"?ea.max:xa.max;return t=Array(3),t[0]=Math.min(Math.max(r.values[0],s[0]),a[0]),t[1]=Math.min(Math.max(r.values[1],s[1]),a[1]),t[2]=Math.min(Math.max(r.values[2],s[2]),a[2]),r.space[0]==="h"&&(t=ea.rgb(t)),t.push(Math.min(Math.max(r.alpha,0),1)),t}function Mc(n){switch(typeof n){case"string":return Qx(n);case"number":return gs(n);default:return n}}function Qx(n){const t=Jx(n);if(!t)throw new Error(`Unable to parse color "${n}" as RGBA.`);return[t[0]/255,t[1]/255,t[2]/255,t[3]]}function ty(n){const t=Yx(hy(n));if(t.length===0)throw new Error("Invalid CSS gradient.");if(t.length!==1)throw new Error("Unsupported CSS gradient (multiple gradients is not supported).");const r=t[0],s=ey(r.type),a=ry(r.colorStops),u=ay(r.orientation);return{type:s,stops:a,angle:u}}function ey(n){const t={"linear-gradient":0,"radial-gradient":1};if(!(n in t))throw new Error(`Unsupported gradient type "${n}"`);return t[n]}function ry(n){const t=sy(n),r=[];for(let s=0;s<n.length;s++){const a=iy(n[s]);r.push({offset:t[s],color:a.slice(0,3),alpha:a[3]})}return r}function iy(n){return Mc(ny(n))}function ny(n){switch(n.type){case"hex":return`#${n.value}`;case"literal":return n.value;default:return`${n.type}(${n.value.join(",")})`}}function sy(n){const t=[];for(let a=0;a<n.length;a++){const u=n[a];let l=-1;u.type==="literal"&&u.length&&"type"in u.length&&u.length.type==="%"&&"value"in u.length&&(l=parseFloat(u.length.value)/100),t.push(l)}const r=a=>{for(let u=a;u<t.length;u++)if(t[u]!==-1)return{indexDelta:u-a,offset:t[u]};return{indexDelta:t.length-1-a,offset:1}};let s=0;for(let a=0;a<t.length;a++){const u=t[a];if(u!==-1)s=u;else if(a===0)t[a]=0;else if(a+1===t.length)t[a]=1;else{const l=r(a),d=(l.offset-s)/(1+l.indexDelta);for(let g=0;g<=l.indexDelta;g++)t[a+g]=s+(g+1)*d;a+=l.indexDelta,s=t[a]}}return t.map(oy)}function oy(n){return n.toString().length>6?parseFloat(n.toString().substring(0,6)):n}function ay(n){if(typeof n>"u")return 0;if("type"in n&&"value"in n)switch(n.type){case"angular":return parseFloat(n.value);case"directional":return uy(n.value)}return 0}function uy(n){const t={left:270,top:0,bottom:180,right:90,"left top":315,"top left":315,"left bottom":225,"bottom left":225,"right top":45,"top right":45,"right bottom":135,"bottom right":135};if(!(n in t))throw new Error(`Unsupported directional value "${n}"`);return t[n]}function hy(n){let t=n.replace(/\s{2,}/gu," ");return t=t.replace(/;/g,""),t=t.replace(/ ,/g,","),t=t.replace(/\( /g,"("),t=t.replace(/ \)/g,")"),t.trim()}var ly=Object.defineProperty,cy=Object.defineProperties,dy=Object.getOwnPropertyDescriptors,Nl=Object.getOwnPropertySymbols,fy=Object.prototype.hasOwnProperty,py=Object.prototype.propertyIsEnumerable,Ml=(n,t,r)=>t in n?ly(n,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):n[t]=r,ra=(n,t)=>{for(var r in t||(t={}))fy.call(t,r)&&Ml(n,r,t[r]);if(Nl)for(var r of Nl(t))py.call(t,r)&&Ml(n,r,t[r]);return n},gy=(n,t)=>cy(n,dy(t));const Pl=90;function my(n){return[...n].sort((t,r)=>t.offset-r.offset)}const $i=class extends ft{constructor(n){var t,r;let s;if(n&&"css"in n?s=gy(ra({},ty(n.css||"")),{alpha:(t=n.alpha)!=null?t:$i.defaults.alpha,maxColors:(r=n.maxColors)!=null?r:$i.defaults.maxColors}):s=ra(ra({},$i.defaults),n),!s.stops||s.stops.length<2)throw new Error("ColorGradientFilter requires at least 2 color stops.");super(Kx,jx),this._stops=[],this.autoFit=!1,Object.assign(this,s)}get stops(){return this._stops}set stops(n){const t=my(n),r=new Float32Array(t.length*3),s=0,a=1,u=2;for(let l=0;l<t.length;l++){const d=Mc(t[l].color),g=l*3;r[g+s]=d[s],r[g+a]=d[a],r[g+u]=d[u]}this.uniforms.uColors=r,this.uniforms.uOffsets=t.map(l=>l.offset),this.uniforms.uAlphas=t.map(l=>l.alpha),this.uniforms.uNumStops=t.length,this._stops=t}set type(n){this.uniforms.uType=n}get type(){return this.uniforms.uType}set angle(n){this.uniforms.uAngle=n-Pl}get angle(){return this.uniforms.uAngle+Pl}set alpha(n){this.uniforms.uAlpha=n}get alpha(){return this.uniforms.uAlpha}set maxColors(n){this.uniforms.uMaxColors=n}get maxColors(){return this.uniforms.uMaxColors}set replace(n){this.uniforms.uReplace=n}get replace(){return this.uniforms.uReplace}};let Yn=$i;Yn.LINEAR=0,Yn.RADIAL=1,Yn.CONIC=2,Yn.defaults={type:$i.LINEAR,stops:[{offset:0,color:16711680,alpha:1},{offset:1,color:255,alpha:1}],alpha:1,angle:90,maxColors:0,replace:!1};var _y=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,vy=`varying vec2 vTextureCoord;
uniform sampler2D uSampler;

uniform vec4 filterArea;
uniform vec2 dimensions;

const float SQRT_2 = 1.414213;

const float light = 1.0;

uniform float curvature;
uniform float lineWidth;
uniform float lineContrast;
uniform bool verticalLine;
uniform float noise;
uniform float noiseSize;

uniform float vignetting;
uniform float vignettingAlpha;
uniform float vignettingBlur;

uniform float seed;
uniform float time;

float rand(vec2 co) {
    return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);
}

void main(void)
{
    vec2 pixelCoord = vTextureCoord.xy * filterArea.xy;
    vec2 dir = vec2(vTextureCoord.xy * filterArea.xy / dimensions - vec2(0.5, 0.5));
    
    gl_FragColor = texture2D(uSampler, vTextureCoord);
    vec3 rgb = gl_FragColor.rgb;

    if (noise > 0.0 && noiseSize > 0.0)
    {
        pixelCoord.x = floor(pixelCoord.x / noiseSize);
        pixelCoord.y = floor(pixelCoord.y / noiseSize);
        float _noise = rand(pixelCoord * noiseSize * seed) - 0.5;
        rgb += _noise * noise;
    }

    if (lineWidth > 0.0)
    {
        float _c = curvature > 0. ? curvature : 1.;
        float k = curvature > 0. ?(length(dir * dir) * 0.25 * _c * _c + 0.935 * _c) : 1.;
        vec2 uv = dir * k;

        float v = (verticalLine ? uv.x * dimensions.x : uv.y * dimensions.y) * min(1.0, 2.0 / lineWidth ) / _c;
        float j = 1. + cos(v * 1.2 - time) * 0.5 * lineContrast;
        rgb *= j;
        float segment = verticalLine ? mod((dir.x + .5) * dimensions.x, 4.) : mod((dir.y + .5) * dimensions.y, 4.);
        rgb *= 0.99 + ceil(segment) * 0.015;
    }

    if (vignetting > 0.0)
    {
        float outter = SQRT_2 - vignetting * SQRT_2;
        float darker = clamp((outter - length(dir) * SQRT_2) / ( 0.00001 + vignettingBlur * SQRT_2), 0.0, 1.0);
        rgb *= darker + (1.0 - darker) * (1.0 - vignettingAlpha);
    }

    gl_FragColor.rgb = rgb;
}
`;const Pc=class extends ft{constructor(t){super(_y,vy),this.time=0,this.seed=0,this.uniforms.dimensions=new Float32Array(2),Object.assign(this,Pc.defaults,t)}apply(t,r,s,a){const{width:u,height:l}=r.filterFrame;this.uniforms.dimensions[0]=u,this.uniforms.dimensions[1]=l,this.uniforms.seed=this.seed,this.uniforms.time=this.time,t.applyFilter(this,r,s,a)}set curvature(t){this.uniforms.curvature=t}get curvature(){return this.uniforms.curvature}set lineWidth(t){this.uniforms.lineWidth=t}get lineWidth(){return this.uniforms.lineWidth}set lineContrast(t){this.uniforms.lineContrast=t}get lineContrast(){return this.uniforms.lineContrast}set verticalLine(t){this.uniforms.verticalLine=t}get verticalLine(){return this.uniforms.verticalLine}set noise(t){this.uniforms.noise=t}get noise(){return this.uniforms.noise}set noiseSize(t){this.uniforms.noiseSize=t}get noiseSize(){return this.uniforms.noiseSize}set vignetting(t){this.uniforms.vignetting=t}get vignetting(){return this.uniforms.vignetting}set vignettingAlpha(t){this.uniforms.vignettingAlpha=t}get vignettingAlpha(){return this.uniforms.vignettingAlpha}set vignettingBlur(t){this.uniforms.vignettingBlur=t}get vignettingBlur(){return this.uniforms.vignettingBlur}};let xy=Pc;xy.defaults={curvature:1,lineWidth:1,lineContrast:.25,verticalLine:!1,noise:0,noiseSize:1,seed:0,vignetting:.3,vignettingAlpha:1,vignettingBlur:.3,time:0};var yy=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,Ty=`varying vec2 vTextureCoord;
uniform sampler2D uSampler;
uniform float alpha;
uniform vec3 color;

uniform vec2 shift;
uniform vec4 inputSize;

void main(void){
    vec4 sample = texture2D(uSampler, vTextureCoord - shift * inputSize.zw);

    // Premultiply alpha
    sample.rgb = color.rgb * sample.a;

    // alpha user alpha
    sample *= alpha;

    gl_FragColor = sample;
}`,by=Object.defineProperty,Ol=Object.getOwnPropertySymbols,Cy=Object.prototype.hasOwnProperty,Ey=Object.prototype.propertyIsEnumerable,Ll=(n,t,r)=>t in n?by(n,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):n[t]=r,Bl=(n,t)=>{for(var r in t||(t={}))Cy.call(t,r)&&Ll(n,r,t[r]);if(Ol)for(var r of Ol(t))Ey.call(t,r)&&Ll(n,r,t[r]);return n};const ya=class extends ft{constructor(t){super(),this.angle=45,this._distance=5,this._resolution=tt.FILTER_RESOLUTION;const r=t?Bl(Bl({},ya.defaults),t):ya.defaults,{kernels:s,blur:a,quality:u,pixelSize:l,resolution:d}=r;this._offset=new ar(this._updatePadding,this),this._tintFilter=new ft(yy,Ty),this._tintFilter.uniforms.color=new Float32Array(4),this._tintFilter.uniforms.shift=this._offset,this._tintFilter.resolution=d,this._blurFilter=s?new fs(s):new fs(a,u),this.pixelSize=l,this.resolution=d;const{shadowOnly:g,rotation:_,distance:C,offset:b,alpha:R,color:F}=r;this.shadowOnly=g,_!==void 0&&C!==void 0?(this.rotation=_,this.distance=C):this.offset=b,this.alpha=R,this.color=F}apply(t,r,s,a){const u=t.getFilterTexture();this._tintFilter.apply(t,r,u,1),this._blurFilter.apply(t,u,s,a),this.shadowOnly!==!0&&t.applyFilter(this,r,s,0),t.returnFilterTexture(u)}_updatePadding(){const t=Math.max(Math.abs(this._offset.x),Math.abs(this._offset.y));this.padding=t+this.blur*2}_updateShift(){this._tintFilter.uniforms.shift.set(this.distance*Math.cos(this.angle),this.distance*Math.sin(this.angle))}set offset(t){this._offset.copyFrom(t),this._updatePadding()}get offset(){return this._offset}get resolution(){return this._resolution}set resolution(t){this._resolution=t,this._tintFilter&&(this._tintFilter.resolution=t),this._blurFilter&&(this._blurFilter.resolution=t)}get distance(){return this._distance}set distance(t){rt("5.3.0","DropShadowFilter distance is deprecated, use offset"),this._distance=t,this._updatePadding(),this._updateShift()}get rotation(){return this.angle/as}set rotation(t){rt("5.3.0","DropShadowFilter rotation is deprecated, use offset"),this.angle=t*as,this._updateShift()}get alpha(){return this._tintFilter.uniforms.alpha}set alpha(t){this._tintFilter.uniforms.alpha=t}get color(){return wa(this._tintFilter.uniforms.color)}set color(t){gs(t,this._tintFilter.uniforms.color)}get kernels(){return this._blurFilter.kernels}set kernels(t){this._blurFilter.kernels=t}get blur(){return this._blurFilter.blur}set blur(t){this._blurFilter.blur=t,this._updatePadding()}get quality(){return this._blurFilter.quality}set quality(t){this._blurFilter.quality=t}get pixelSize(){return this._blurFilter.pixelSize}set pixelSize(t){this._blurFilter.pixelSize=t}};let Oc=ya;Oc.defaults={offset:{x:4,y:4},color:0,alpha:.5,shadowOnly:!1,kernels:null,blur:2,quality:3,pixelSize:1,resolution:tt.FILTER_RESOLUTION};var wy=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,Ay=`// precision highp float;

varying vec2 vTextureCoord;
uniform sampler2D uSampler;

uniform vec4 filterArea;
uniform vec4 filterClamp;
uniform vec2 dimensions;
uniform float aspect;

uniform sampler2D displacementMap;
uniform float offset;
uniform float sinDir;
uniform float cosDir;
uniform int fillMode;

uniform float seed;
uniform vec2 red;
uniform vec2 green;
uniform vec2 blue;

const int TRANSPARENT = 0;
const int ORIGINAL = 1;
const int LOOP = 2;
const int CLAMP = 3;
const int MIRROR = 4;

void main(void)
{
    vec2 coord = (vTextureCoord * filterArea.xy) / dimensions;

    if (coord.x > 1.0 || coord.y > 1.0) {
        return;
    }

    float cx = coord.x - 0.5;
    float cy = (coord.y - 0.5) * aspect;
    float ny = (-sinDir * cx + cosDir * cy) / aspect + 0.5;

    // displacementMap: repeat
    // ny = ny > 1.0 ? ny - 1.0 : (ny < 0.0 ? 1.0 + ny : ny);

    // displacementMap: mirror
    ny = ny > 1.0 ? 2.0 - ny : (ny < 0.0 ? -ny : ny);

    vec4 dc = texture2D(displacementMap, vec2(0.5, ny));

    float displacement = (dc.r - dc.g) * (offset / filterArea.x);

    coord = vTextureCoord + vec2(cosDir * displacement, sinDir * displacement * aspect);

    if (fillMode == CLAMP) {
        coord = clamp(coord, filterClamp.xy, filterClamp.zw);
    } else {
        if( coord.x > filterClamp.z ) {
            if (fillMode == TRANSPARENT) {
                discard;
            } else if (fillMode == LOOP) {
                coord.x -= filterClamp.z;
            } else if (fillMode == MIRROR) {
                coord.x = filterClamp.z * 2.0 - coord.x;
            }
        } else if( coord.x < filterClamp.x ) {
            if (fillMode == TRANSPARENT) {
                discard;
            } else if (fillMode == LOOP) {
                coord.x += filterClamp.z;
            } else if (fillMode == MIRROR) {
                coord.x *= -filterClamp.z;
            }
        }

        if( coord.y > filterClamp.w ) {
            if (fillMode == TRANSPARENT) {
                discard;
            } else if (fillMode == LOOP) {
                coord.y -= filterClamp.w;
            } else if (fillMode == MIRROR) {
                coord.y = filterClamp.w * 2.0 - coord.y;
            }
        } else if( coord.y < filterClamp.y ) {
            if (fillMode == TRANSPARENT) {
                discard;
            } else if (fillMode == LOOP) {
                coord.y += filterClamp.w;
            } else if (fillMode == MIRROR) {
                coord.y *= -filterClamp.w;
            }
        }
    }

    gl_FragColor.r = texture2D(uSampler, coord + red * (1.0 - seed * 0.4) / filterArea.xy).r;
    gl_FragColor.g = texture2D(uSampler, coord + green * (1.0 - seed * 0.3) / filterArea.xy).g;
    gl_FragColor.b = texture2D(uSampler, coord + blue * (1.0 - seed * 0.2) / filterArea.xy).b;
    gl_FragColor.a = texture2D(uSampler, coord).a;
}
`;const Ta=class extends ft{constructor(t){super(wy,Ay),this.offset=100,this.fillMode=Ta.TRANSPARENT,this.average=!1,this.seed=0,this.minSize=8,this.sampleSize=512,this._slices=0,this._offsets=new Float32Array(1),this._sizes=new Float32Array(1),this._direction=-1,this.uniforms.dimensions=new Float32Array(2),this._canvas=document.createElement("canvas"),this._canvas.width=4,this._canvas.height=this.sampleSize,this.texture=ut.from(this._canvas,{scaleMode:Oe.NEAREST}),Object.assign(this,Ta.defaults,t)}apply(t,r,s,a){const{width:u,height:l}=r.filterFrame;this.uniforms.dimensions[0]=u,this.uniforms.dimensions[1]=l,this.uniforms.aspect=l/u,this.uniforms.seed=this.seed,this.uniforms.offset=this.offset,this.uniforms.fillMode=this.fillMode,t.applyFilter(this,r,s,a)}_randomizeSizes(){const t=this._sizes,r=this._slices-1,s=this.sampleSize,a=Math.min(this.minSize/s,.9/this._slices);if(this.average){const u=this._slices;let l=1;for(let d=0;d<r;d++){const g=l/(u-d),_=Math.max(g*(1-Math.random()*.6),a);t[d]=_,l-=_}t[r]=l}else{let u=1;const l=Math.sqrt(1/this._slices);for(let d=0;d<r;d++){const g=Math.max(l*u*Math.random(),a);t[d]=g,u-=g}t[r]=u}this.shuffle()}shuffle(){const t=this._sizes,r=this._slices-1;for(let s=r;s>0;s--){const a=Math.random()*s>>0,u=t[s];t[s]=t[a],t[a]=u}}_randomizeOffsets(){for(let t=0;t<this._slices;t++)this._offsets[t]=Math.random()*(Math.random()<.5?-1:1)}refresh(){this._randomizeSizes(),this._randomizeOffsets(),this.redraw()}redraw(){const t=this.sampleSize,r=this.texture,s=this._canvas.getContext("2d");s.clearRect(0,0,8,t);let a,u=0;for(let l=0;l<this._slices;l++){a=Math.floor(this._offsets[l]*256);const d=this._sizes[l]*t,g=a>0?a:0,_=a<0?-a:0;s.fillStyle=`rgba(${g}, ${_}, 0, 1)`,s.fillRect(0,u>>0,t,d+1>>0),u+=d}r.baseTexture.update(),this.uniforms.displacementMap=r}set sizes(t){const r=Math.min(this._slices,t.length);for(let s=0;s<r;s++)this._sizes[s]=t[s]}get sizes(){return this._sizes}set offsets(t){const r=Math.min(this._slices,t.length);for(let s=0;s<r;s++)this._offsets[s]=t[s]}get offsets(){return this._offsets}get slices(){return this._slices}set slices(t){this._slices!==t&&(this._slices=t,this.uniforms.slices=t,this._sizes=this.uniforms.slicesWidth=new Float32Array(t),this._offsets=this.uniforms.slicesOffset=new Float32Array(t),this.refresh())}get direction(){return this._direction}set direction(t){if(this._direction===t)return;this._direction=t;const r=t*as;this.uniforms.sinDir=Math.sin(r),this.uniforms.cosDir=Math.cos(r)}get red(){return this.uniforms.red}set red(t){this.uniforms.red=t}get green(){return this.uniforms.green}set green(t){this.uniforms.green=t}get blue(){return this.uniforms.blue}set blue(t){this.uniforms.blue=t}destroy(){var t;(t=this.texture)==null||t.destroy(!0),this.texture=this._canvas=this.red=this.green=this.blue=this._sizes=this._offsets=null}};let ti=Ta;ti.defaults={slices:5,offset:100,direction:0,fillMode:0,average:!1,seed:0,red:[0,0],green:[0,0],blue:[0,0],minSize:8,sampleSize:512},ti.TRANSPARENT=0,ti.ORIGINAL=1,ti.LOOP=2,ti.CLAMP=3,ti.MIRROR=4;var Ry=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,Sy=`varying vec2 vTextureCoord;
varying vec4 vColor;

uniform sampler2D uSampler;

uniform float outerStrength;
uniform float innerStrength;

uniform vec4 glowColor;

uniform vec4 filterArea;
uniform vec4 filterClamp;
uniform bool knockout;
uniform float alpha;

const float PI = 3.14159265358979323846264;

const float DIST = __DIST__;
const float ANGLE_STEP_SIZE = min(__ANGLE_STEP_SIZE__, PI * 2.0);
const float ANGLE_STEP_NUM = ceil(PI * 2.0 / ANGLE_STEP_SIZE);

const float MAX_TOTAL_ALPHA = ANGLE_STEP_NUM * DIST * (DIST + 1.0) / 2.0;

void main(void) {
    vec2 px = vec2(1.0 / filterArea.x, 1.0 / filterArea.y);

    float totalAlpha = 0.0;

    vec2 direction;
    vec2 displaced;
    vec4 curColor;

    for (float angle = 0.0; angle < PI * 2.0; angle += ANGLE_STEP_SIZE) {
       direction = vec2(cos(angle), sin(angle)) * px;

       for (float curDistance = 0.0; curDistance < DIST; curDistance++) {
           displaced = clamp(vTextureCoord + direction * 
                   (curDistance + 1.0), filterClamp.xy, filterClamp.zw);

           curColor = texture2D(uSampler, displaced);

           totalAlpha += (DIST - curDistance) * curColor.a;
       }
    }
    
    curColor = texture2D(uSampler, vTextureCoord);

    float alphaRatio = (totalAlpha / MAX_TOTAL_ALPHA);

    float innerGlowAlpha = (1.0 - alphaRatio) * innerStrength * curColor.a;
    float innerGlowStrength = min(1.0, innerGlowAlpha);
    
    vec4 innerColor = mix(curColor, glowColor, innerGlowStrength);

    float outerGlowAlpha = alphaRatio * outerStrength * (1. - curColor.a);
    float outerGlowStrength = min(1.0 - innerColor.a, outerGlowAlpha);

    if (knockout) {
      float resultAlpha = (outerGlowAlpha + innerGlowAlpha) * alpha;
      gl_FragColor = vec4(glowColor.rgb * resultAlpha, resultAlpha);
    }
    else {
      vec4 outerGlowColor = outerGlowStrength * glowColor.rgba * alpha;
      gl_FragColor = innerColor + outerGlowColor;
    }
}
`;const Lc=class extends ft{constructor(n){const t=Object.assign({},Lc.defaults,n),{outerStrength:r,innerStrength:s,color:a,knockout:u,quality:l,alpha:d}=t,g=Math.round(t.distance);super(Ry,Sy.replace(/__ANGLE_STEP_SIZE__/gi,`${(1/l/g).toFixed(7)}`).replace(/__DIST__/gi,`${g.toFixed(0)}.0`)),this.uniforms.glowColor=new Float32Array([0,0,0,1]),this.uniforms.alpha=1,Object.assign(this,{color:a,outerStrength:r,innerStrength:s,padding:g,knockout:u,alpha:d})}get color(){return wa(this.uniforms.glowColor)}set color(n){gs(n,this.uniforms.glowColor)}get outerStrength(){return this.uniforms.outerStrength}set outerStrength(n){this.uniforms.outerStrength=n}get innerStrength(){return this.uniforms.innerStrength}set innerStrength(n){this.uniforms.innerStrength=n}get knockout(){return this.uniforms.knockout}set knockout(n){this.uniforms.knockout=n}get alpha(){return this.uniforms.alpha}set alpha(n){this.uniforms.alpha=n}};let Iy=Lc;Iy.defaults={distance:10,outerStrength:4,innerStrength:0,color:16777215,quality:.1,knockout:!1,alpha:1};var Fy=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,Ny=`vec3 mod289(vec3 x)
{
    return x - floor(x * (1.0 / 289.0)) * 289.0;
}
vec4 mod289(vec4 x)
{
    return x - floor(x * (1.0 / 289.0)) * 289.0;
}
vec4 permute(vec4 x)
{
    return mod289(((x * 34.0) + 1.0) * x);
}
vec4 taylorInvSqrt(vec4 r)
{
    return 1.79284291400159 - 0.85373472095314 * r;
}
vec3 fade(vec3 t)
{
    return t * t * t * (t * (t * 6.0 - 15.0) + 10.0);
}
// Classic Perlin noise, periodic variant
float pnoise(vec3 P, vec3 rep)
{
    vec3 Pi0 = mod(floor(P), rep); // Integer part, modulo period
    vec3 Pi1 = mod(Pi0 + vec3(1.0), rep); // Integer part + 1, mod period
    Pi0 = mod289(Pi0);
    Pi1 = mod289(Pi1);
    vec3 Pf0 = fract(P); // Fractional part for interpolation
    vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0
    vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
    vec4 iy = vec4(Pi0.yy, Pi1.yy);
    vec4 iz0 = Pi0.zzzz;
    vec4 iz1 = Pi1.zzzz;
    vec4 ixy = permute(permute(ix) + iy);
    vec4 ixy0 = permute(ixy + iz0);
    vec4 ixy1 = permute(ixy + iz1);
    vec4 gx0 = ixy0 * (1.0 / 7.0);
    vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;
    gx0 = fract(gx0);
    vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
    vec4 sz0 = step(gz0, vec4(0.0));
    gx0 -= sz0 * (step(0.0, gx0) - 0.5);
    gy0 -= sz0 * (step(0.0, gy0) - 0.5);
    vec4 gx1 = ixy1 * (1.0 / 7.0);
    vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;
    gx1 = fract(gx1);
    vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
    vec4 sz1 = step(gz1, vec4(0.0));
    gx1 -= sz1 * (step(0.0, gx1) - 0.5);
    gy1 -= sz1 * (step(0.0, gy1) - 0.5);
    vec3 g000 = vec3(gx0.x, gy0.x, gz0.x);
    vec3 g100 = vec3(gx0.y, gy0.y, gz0.y);
    vec3 g010 = vec3(gx0.z, gy0.z, gz0.z);
    vec3 g110 = vec3(gx0.w, gy0.w, gz0.w);
    vec3 g001 = vec3(gx1.x, gy1.x, gz1.x);
    vec3 g101 = vec3(gx1.y, gy1.y, gz1.y);
    vec3 g011 = vec3(gx1.z, gy1.z, gz1.z);
    vec3 g111 = vec3(gx1.w, gy1.w, gz1.w);
    vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));
    g000 *= norm0.x;
    g010 *= norm0.y;
    g100 *= norm0.z;
    g110 *= norm0.w;
    vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));
    g001 *= norm1.x;
    g011 *= norm1.y;
    g101 *= norm1.z;
    g111 *= norm1.w;
    float n000 = dot(g000, Pf0);
    float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));
    float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));
    float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));
    float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));
    float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));
    float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));
    float n111 = dot(g111, Pf1);
    vec3 fade_xyz = fade(Pf0);
    vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);
    vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);
    float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x);
    return 2.2 * n_xyz;
}
float turb(vec3 P, vec3 rep, float lacunarity, float gain)
{
    float sum = 0.0;
    float sc = 1.0;
    float totalgain = 1.0;
    for (float i = 0.0; i < 6.0; i++)
    {
        sum += totalgain * pnoise(P * sc, rep);
        sc *= lacunarity;
        totalgain *= gain;
    }
    return abs(sum);
}
`,My=`varying vec2 vTextureCoord;
uniform sampler2D uSampler;
uniform vec4 filterArea;
uniform vec2 dimensions;

uniform vec2 light;
uniform bool parallel;
uniform float aspect;

uniform float gain;
uniform float lacunarity;
uniform float time;
uniform float alpha;

\${perlin}

void main(void) {
    vec2 coord = vTextureCoord * filterArea.xy / dimensions.xy;

    float d;

    if (parallel) {
        float _cos = light.x;
        float _sin = light.y;
        d = (_cos * coord.x) + (_sin * coord.y * aspect);
    } else {
        float dx = coord.x - light.x / dimensions.x;
        float dy = (coord.y - light.y / dimensions.y) * aspect;
        float dis = sqrt(dx * dx + dy * dy) + 0.00001;
        d = dy / dis;
    }

    vec3 dir = vec3(d, d, 0.0);

    float noise = turb(dir + vec3(time, 0.0, 62.1 + time) * 0.05, vec3(480.0, 320.0, 480.0), lacunarity, gain);
    noise = mix(noise, 0.0, 0.3);
    //fade vertically.
    vec4 mist = vec4(noise, noise, noise, 1.0) * (1.0 - coord.y);
    mist.a = 1.0;
    // apply user alpha
    mist *= alpha;

    gl_FragColor = texture2D(uSampler, vTextureCoord) + mist;

}
`;const Bc=class extends ft{constructor(t){super(Fy,My.replace("${perlin}",Ny)),this.parallel=!0,this.time=0,this._angle=0,this.uniforms.dimensions=new Float32Array(2);const r=Object.assign(Bc.defaults,t);this._angleLight=new yt,this.angle=r.angle,this.gain=r.gain,this.lacunarity=r.lacunarity,this.alpha=r.alpha,this.parallel=r.parallel,this.center=r.center,this.time=r.time}apply(t,r,s,a){const{width:u,height:l}=r.filterFrame;this.uniforms.light=this.parallel?this._angleLight:this.center,this.uniforms.parallel=this.parallel,this.uniforms.dimensions[0]=u,this.uniforms.dimensions[1]=l,this.uniforms.aspect=l/u,this.uniforms.time=this.time,this.uniforms.alpha=this.alpha,t.applyFilter(this,r,s,a)}get angle(){return this._angle}set angle(t){this._angle=t;const r=t*as;this._angleLight.x=Math.cos(r),this._angleLight.y=Math.sin(r)}get gain(){return this.uniforms.gain}set gain(t){this.uniforms.gain=t}get lacunarity(){return this.uniforms.lacunarity}set lacunarity(t){this.uniforms.lacunarity=t}get alpha(){return this.uniforms.alpha}set alpha(t){this.uniforms.alpha=t}};let Py=Bc;Py.defaults={angle:30,gain:.5,lacunarity:2.5,time:0,parallel:!0,center:[0,0],alpha:1};var Oy=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,Ly=`precision mediump float;

varying vec2 vTextureCoord;
uniform sampler2D uSampler;
uniform float uHue;
uniform float uAlpha;
uniform bool uColorize;
uniform float uSaturation;
uniform float uLightness;

// https://en.wikipedia.org/wiki/Luma_(video)
const vec3 weight = vec3(0.299, 0.587, 0.114);

float getWeightedAverage(vec3 rgb) {
    return rgb.r * weight.r + rgb.g * weight.g + rgb.b * weight.b;
}

// https://gist.github.com/mairod/a75e7b44f68110e1576d77419d608786?permalink_comment_id=3195243#gistcomment-3195243
const vec3 k = vec3(0.57735, 0.57735, 0.57735);

vec3 hueShift(vec3 color, float angle) {
    float cosAngle = cos(angle);
    return vec3(
    color * cosAngle +
    cross(k, color) * sin(angle) +
    k * dot(k, color) * (1.0 - cosAngle)
    );
}

void main()
{
    vec4 color = texture2D(uSampler, vTextureCoord);
    vec4 result = color;

    // colorize
    if (uColorize) {
        result.rgb = vec3(getWeightedAverage(result.rgb), 0., 0.);
    }

    // hue
    result.rgb = hueShift(result.rgb, uHue);

    // saturation
    // https://github.com/evanw/glfx.js/blob/master/src/filters/adjust/huesaturation.js
    float average = (result.r + result.g + result.b) / 3.0;

    if (uSaturation > 0.) {
        result.rgb += (average - result.rgb) * (1. - 1. / (1.001 - uSaturation));
    } else {
        result.rgb -= (average - result.rgb) * uSaturation;
    }

    // lightness
    result.rgb = mix(result.rgb, vec3(ceil(uLightness)) * color.a, abs(uLightness));

    // alpha
    gl_FragColor = mix(color, result, uAlpha);
}
`;const Uc=class extends ft{constructor(n){super(Oy,Ly),this._hue=0;const t=Object.assign({},Uc.defaults,n);Object.assign(this,t)}get hue(){return this._hue}set hue(n){this._hue=n,this.uniforms.uHue=this._hue*(Math.PI/180)}get alpha(){return this.uniforms.uAlpha}set alpha(n){this.uniforms.uAlpha=n}get colorize(){return this.uniforms.uColorize}set colorize(n){this.uniforms.uColorize=n}get lightness(){return this.uniforms.uLightness}set lightness(n){this.uniforms.uLightness=n}get saturation(){return this.uniforms.uSaturation}set saturation(n){this.uniforms.uSaturation=n}};let By=Uc;By.defaults={hue:0,saturation:0,lightness:0,colorize:!1,alpha:1};var Uy=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,ky=`varying vec2 vTextureCoord;
uniform sampler2D uSampler;
uniform vec4 filterArea;
uniform vec2 dimensions;

uniform float sepia;
uniform float noise;
uniform float noiseSize;
uniform float scratch;
uniform float scratchDensity;
uniform float scratchWidth;
uniform float vignetting;
uniform float vignettingAlpha;
uniform float vignettingBlur;
uniform float seed;

const float SQRT_2 = 1.414213;
const vec3 SEPIA_RGB = vec3(112.0 / 255.0, 66.0 / 255.0, 20.0 / 255.0);

float rand(vec2 co) {
    return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);
}

vec3 Overlay(vec3 src, vec3 dst)
{
    // if (dst <= 0.5) then: 2 * src * dst
    // if (dst > 0.5) then: 1 - 2 * (1 - dst) * (1 - src)
    return vec3((dst.x <= 0.5) ? (2.0 * src.x * dst.x) : (1.0 - 2.0 * (1.0 - dst.x) * (1.0 - src.x)),
                (dst.y <= 0.5) ? (2.0 * src.y * dst.y) : (1.0 - 2.0 * (1.0 - dst.y) * (1.0 - src.y)),
                (dst.z <= 0.5) ? (2.0 * src.z * dst.z) : (1.0 - 2.0 * (1.0 - dst.z) * (1.0 - src.z)));
}


void main()
{
    gl_FragColor = texture2D(uSampler, vTextureCoord);
    vec3 color = gl_FragColor.rgb;

    if (sepia > 0.0)
    {
        float gray = (color.x + color.y + color.z) / 3.0;
        vec3 grayscale = vec3(gray);

        color = Overlay(SEPIA_RGB, grayscale);

        color = grayscale + sepia * (color - grayscale);
    }

    vec2 coord = vTextureCoord * filterArea.xy / dimensions.xy;

    if (vignetting > 0.0)
    {
        float outter = SQRT_2 - vignetting * SQRT_2;
        vec2 dir = vec2(vec2(0.5, 0.5) - coord);
        dir.y *= dimensions.y / dimensions.x;
        float darker = clamp((outter - length(dir) * SQRT_2) / ( 0.00001 + vignettingBlur * SQRT_2), 0.0, 1.0);
        color.rgb *= darker + (1.0 - darker) * (1.0 - vignettingAlpha);
    }

    if (scratchDensity > seed && scratch != 0.0)
    {
        float phase = seed * 256.0;
        float s = mod(floor(phase), 2.0);
        float dist = 1.0 / scratchDensity;
        float d = distance(coord, vec2(seed * dist, abs(s - seed * dist)));
        if (d < seed * 0.6 + 0.4)
        {
            highp float period = scratchDensity * 10.0;

            float xx = coord.x * period + phase;
            float aa = abs(mod(xx, 0.5) * 4.0);
            float bb = mod(floor(xx / 0.5), 2.0);
            float yy = (1.0 - bb) * aa + bb * (2.0 - aa);

            float kk = 2.0 * period;
            float dw = scratchWidth / dimensions.x * (0.75 + seed);
            float dh = dw * kk;

            float tine = (yy - (2.0 - dh));

            if (tine > 0.0) {
                float _sign = sign(scratch);

                tine = s * tine / period + scratch + 0.1;
                tine = clamp(tine + 1.0, 0.5 + _sign * 0.5, 1.5 + _sign * 0.5);

                color.rgb *= tine;
            }
        }
    }

    if (noise > 0.0 && noiseSize > 0.0)
    {
        vec2 pixelCoord = vTextureCoord.xy * filterArea.xy;
        pixelCoord.x = floor(pixelCoord.x / noiseSize);
        pixelCoord.y = floor(pixelCoord.y / noiseSize);
        // vec2 d = pixelCoord * noiseSize * vec2(1024.0 + seed * 512.0, 1024.0 - seed * 512.0);
        // float _noise = snoise(d) * 0.5;
        float _noise = rand(pixelCoord * noiseSize * seed) - 0.5;
        color += _noise * noise;
    }

    gl_FragColor.rgb = color;
}
`;const kc=class extends ft{constructor(t,r=0){super(Uy,ky),this.seed=0,this.uniforms.dimensions=new Float32Array(2),typeof t=="number"?(this.seed=t,t=void 0):this.seed=r,Object.assign(this,kc.defaults,t)}apply(t,r,s,a){var u,l;this.uniforms.dimensions[0]=(u=r.filterFrame)==null?void 0:u.width,this.uniforms.dimensions[1]=(l=r.filterFrame)==null?void 0:l.height,this.uniforms.seed=this.seed,t.applyFilter(this,r,s,a)}set sepia(t){this.uniforms.sepia=t}get sepia(){return this.uniforms.sepia}set noise(t){this.uniforms.noise=t}get noise(){return this.uniforms.noise}set noiseSize(t){this.uniforms.noiseSize=t}get noiseSize(){return this.uniforms.noiseSize}set scratch(t){this.uniforms.scratch=t}get scratch(){return this.uniforms.scratch}set scratchDensity(t){this.uniforms.scratchDensity=t}get scratchDensity(){return this.uniforms.scratchDensity}set scratchWidth(t){this.uniforms.scratchWidth=t}get scratchWidth(){return this.uniforms.scratchWidth}set vignetting(t){this.uniforms.vignetting=t}get vignetting(){return this.uniforms.vignetting}set vignettingAlpha(t){this.uniforms.vignettingAlpha=t}get vignettingAlpha(){return this.uniforms.vignettingAlpha}set vignettingBlur(t){this.uniforms.vignettingBlur=t}get vignettingBlur(){return this.uniforms.vignettingBlur}};let Gy=kc;Gy.defaults={sepia:.3,noise:.3,noiseSize:1,scratch:.5,scratchDensity:.3,scratchWidth:1,vignetting:.3,vignettingAlpha:1,vignettingBlur:.3};var Dy=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,zy=`varying vec2 vTextureCoord;
uniform sampler2D uSampler;
uniform vec4 filterClamp;

uniform float uAlpha;
uniform vec2 uThickness;
uniform vec4 uColor;
uniform bool uKnockout;

const float DOUBLE_PI = 2. * 3.14159265358979323846264;
const float ANGLE_STEP = \${angleStep};

float outlineMaxAlphaAtPos(vec2 pos) {
    if (uThickness.x == 0. || uThickness.y == 0.) {
        return 0.;
    }

    vec4 displacedColor;
    vec2 displacedPos;
    float maxAlpha = 0.;

    for (float angle = 0.; angle <= DOUBLE_PI; angle += ANGLE_STEP) {
        displacedPos.x = vTextureCoord.x + uThickness.x * cos(angle);
        displacedPos.y = vTextureCoord.y + uThickness.y * sin(angle);
        displacedColor = texture2D(uSampler, clamp(displacedPos, filterClamp.xy, filterClamp.zw));
        maxAlpha = max(maxAlpha, displacedColor.a);
    }

    return maxAlpha;
}

void main(void) {
    vec4 sourceColor = texture2D(uSampler, vTextureCoord);
    vec4 contentColor = sourceColor * float(!uKnockout);
    float outlineAlpha = uAlpha * outlineMaxAlphaAtPos(vTextureCoord.xy) * (1.-sourceColor.a);
    vec4 outlineColor = vec4(vec3(uColor) * outlineAlpha, outlineAlpha);
    gl_FragColor = contentColor + outlineColor;
}
`;const is=class extends ft{constructor(t=1,r=0,s=.1,a=1,u=!1){super(Dy,zy.replace(/\$\{angleStep\}/,is.getAngleStep(s))),this._thickness=1,this._alpha=1,this._knockout=!1,this.uniforms.uThickness=new Float32Array([0,0]),this.uniforms.uColor=new Float32Array([0,0,0,1]),this.uniforms.uAlpha=a,this.uniforms.uKnockout=u,Object.assign(this,{thickness:t,color:r,quality:s,alpha:a,knockout:u})}static getAngleStep(t){const r=Math.max(t*is.MAX_SAMPLES,is.MIN_SAMPLES);return(Math.PI*2/r).toFixed(7)}apply(t,r,s,a){this.uniforms.uThickness[0]=this._thickness/r._frame.width,this.uniforms.uThickness[1]=this._thickness/r._frame.height,this.uniforms.uAlpha=this._alpha,this.uniforms.uKnockout=this._knockout,t.applyFilter(this,r,s,a)}get alpha(){return this._alpha}set alpha(t){this._alpha=t}get color(){return wa(this.uniforms.uColor)}set color(t){gs(t,this.uniforms.uColor)}get knockout(){return this._knockout}set knockout(t){this._knockout=t}get thickness(){return this._thickness}set thickness(t){this._thickness=t,this.padding=t}};let Ul=is;Ul.MIN_SAMPLES=1,Ul.MAX_SAMPLES=100;var Hy=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,$y=`varying vec2 vTextureCoord;
uniform sampler2D uSampler;

uniform vec4 filterArea;
uniform vec4 filterClamp;
uniform vec2 dimensions;

uniform bool mirror;
uniform float boundary;
uniform vec2 amplitude;
uniform vec2 waveLength;
uniform vec2 alpha;
uniform float time;

float rand(vec2 co) {
    return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);
}

void main(void)
{
    vec2 pixelCoord = vTextureCoord.xy * filterArea.xy;
    vec2 coord = pixelCoord / dimensions;

    if (coord.y < boundary) {
        gl_FragColor = texture2D(uSampler, vTextureCoord);
        return;
    }

    float k = (coord.y - boundary) / (1. - boundary + 0.0001);
    float areaY = boundary * dimensions.y / filterArea.y;
    float v = areaY + areaY - vTextureCoord.y;
    float y = mirror ? v : vTextureCoord.y;

    float _amplitude = ((amplitude.y - amplitude.x) * k + amplitude.x ) / filterArea.x;
    float _waveLength = ((waveLength.y - waveLength.x) * k + waveLength.x) / filterArea.y;
    float _alpha = (alpha.y - alpha.x) * k + alpha.x;

    float x = vTextureCoord.x + cos(v * 6.28 / _waveLength - time) * _amplitude;
    x = clamp(x, filterClamp.x, filterClamp.z);

    vec4 color = texture2D(uSampler, vec2(x, y));

    gl_FragColor = color * _alpha;
}
`;const Gc=class extends ft{constructor(t){super(Hy,$y),this.time=0,this.uniforms.amplitude=new Float32Array(2),this.uniforms.waveLength=new Float32Array(2),this.uniforms.alpha=new Float32Array(2),this.uniforms.dimensions=new Float32Array(2),Object.assign(this,Gc.defaults,t)}apply(t,r,s,a){var u,l;this.uniforms.dimensions[0]=(u=r.filterFrame)==null?void 0:u.width,this.uniforms.dimensions[1]=(l=r.filterFrame)==null?void 0:l.height,this.uniforms.time=this.time,t.applyFilter(this,r,s,a)}set mirror(t){this.uniforms.mirror=t}get mirror(){return this.uniforms.mirror}set boundary(t){this.uniforms.boundary=t}get boundary(){return this.uniforms.boundary}set amplitude(t){this.uniforms.amplitude[0]=t[0],this.uniforms.amplitude[1]=t[1]}get amplitude(){return this.uniforms.amplitude}set waveLength(t){this.uniforms.waveLength[0]=t[0],this.uniforms.waveLength[1]=t[1]}get waveLength(){return this.uniforms.waveLength}set alpha(t){this.uniforms.alpha[0]=t[0],this.uniforms.alpha[1]=t[1]}get alpha(){return this.uniforms.alpha}};let Vy=Gc;Vy.defaults={mirror:!0,boundary:.5,amplitude:[0,20],waveLength:[30,100],alpha:[1,1],time:0};var Wy=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,Xy=`varying vec2 vTextureCoord;
uniform sampler2D uSampler;
uniform vec4 filterArea;
uniform vec4 filterClamp;

uniform vec2 center;

uniform float amplitude;
uniform float wavelength;
// uniform float power;
uniform float brightness;
uniform float speed;
uniform float radius;

uniform float time;

const float PI = 3.14159;

void main()
{
    float halfWavelength = wavelength * 0.5 / filterArea.x;
    float maxRadius = radius / filterArea.x;
    float currentRadius = time * speed / filterArea.x;

    float fade = 1.0;

    if (maxRadius > 0.0) {
        if (currentRadius > maxRadius) {
            gl_FragColor = texture2D(uSampler, vTextureCoord);
            return;
        }
        fade = 1.0 - pow(currentRadius / maxRadius, 2.0);
    }

    vec2 dir = vec2(vTextureCoord - center / filterArea.xy);
    dir.y *= filterArea.y / filterArea.x;
    float dist = length(dir);

    if (dist <= 0.0 || dist < currentRadius - halfWavelength || dist > currentRadius + halfWavelength) {
        gl_FragColor = texture2D(uSampler, vTextureCoord);
        return;
    }

    vec2 diffUV = normalize(dir);

    float diff = (dist - currentRadius) / halfWavelength;

    float p = 1.0 - pow(abs(diff), 2.0);

    // float powDiff = diff * pow(p, 2.0) * ( amplitude * fade );
    float powDiff = 1.25 * sin(diff * PI) * p * ( amplitude * fade );

    vec2 offset = diffUV * powDiff / filterArea.xy;

    // Do clamp :
    vec2 coord = vTextureCoord + offset;
    vec2 clampedCoord = clamp(coord, filterClamp.xy, filterClamp.zw);
    vec4 color = texture2D(uSampler, clampedCoord);
    if (coord != clampedCoord) {
        color *= max(0.0, 1.0 - length(coord - clampedCoord));
    }

    // No clamp :
    // gl_FragColor = texture2D(uSampler, vTextureCoord + offset);

    color.rgb *= 1.0 + (brightness - 1.0) * p * fade;

    gl_FragColor = color;
}
`;const Dc=class extends ft{constructor(t=[0,0],r,s=0){super(Wy,Xy),this.center=t,Object.assign(this,Dc.defaults,r),this.time=s}apply(t,r,s,a){this.uniforms.time=this.time,t.applyFilter(this,r,s,a)}get center(){return this.uniforms.center}set center(t){this.uniforms.center=t}get amplitude(){return this.uniforms.amplitude}set amplitude(t){this.uniforms.amplitude=t}get wavelength(){return this.uniforms.wavelength}set wavelength(t){this.uniforms.wavelength=t}get brightness(){return this.uniforms.brightness}set brightness(t){this.uniforms.brightness=t}get speed(){return this.uniforms.speed}set speed(t){this.uniforms.speed=t}get radius(){return this.uniforms.radius}set radius(t){this.uniforms.radius=t}};let qy=Dc;qy.defaults={amplitude:30,wavelength:160,brightness:1,speed:500,radius:-1};var jy=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,Ky=`varying vec2 vTextureCoord;

uniform sampler2D uSampler;
uniform float blur;
uniform float gradientBlur;
uniform vec2 start;
uniform vec2 end;
uniform vec2 delta;
uniform vec2 texSize;

float random(vec3 scale, float seed)
{
    return fract(sin(dot(gl_FragCoord.xyz + seed, scale)) * 43758.5453 + seed);
}

void main(void)
{
    vec4 color = vec4(0.0);
    float total = 0.0;

    float offset = random(vec3(12.9898, 78.233, 151.7182), 0.0);
    vec2 normal = normalize(vec2(start.y - end.y, end.x - start.x));
    float radius = smoothstep(0.0, 1.0, abs(dot(vTextureCoord * texSize - start, normal)) / gradientBlur) * blur;

    for (float t = -30.0; t <= 30.0; t++)
    {
        float percent = (t + offset - 0.5) / 30.0;
        float weight = 1.0 - abs(percent);
        vec4 sample = texture2D(uSampler, vTextureCoord + delta / texSize * percent * radius);
        sample.rgb *= sample.a;
        color += sample * weight;
        total += weight;
    }

    color /= total;
    color.rgb /= color.a + 0.00001;

    gl_FragColor = color;
}
`;let zc=class extends ft{constructor(t){var r,s;super(jy,Ky),this.uniforms.blur=t.blur,this.uniforms.gradientBlur=t.gradientBlur,this.uniforms.start=(r=t.start)!=null?r:new yt(0,window.innerHeight/2),this.uniforms.end=(s=t.end)!=null?s:new yt(600,window.innerHeight/2),this.uniforms.delta=new yt(30,30),this.uniforms.texSize=new yt(window.innerWidth,window.innerHeight),this.updateDelta()}updateDelta(){this.uniforms.delta.x=0,this.uniforms.delta.y=0}get blur(){return this.uniforms.blur}set blur(t){this.uniforms.blur=t}get gradientBlur(){return this.uniforms.gradientBlur}set gradientBlur(t){this.uniforms.gradientBlur=t}get start(){return this.uniforms.start}set start(t){this.uniforms.start=t,this.updateDelta()}get end(){return this.uniforms.end}set end(t){this.uniforms.end=t,this.updateDelta()}},Yy=class extends zc{updateDelta(){const t=this.uniforms.end.x-this.uniforms.start.x,r=this.uniforms.end.y-this.uniforms.start.y,s=Math.sqrt(t*t+r*r);this.uniforms.delta.x=t/s,this.uniforms.delta.y=r/s}},Zy=class extends zc{updateDelta(){const t=this.uniforms.end.x-this.uniforms.start.x,r=this.uniforms.end.y-this.uniforms.start.y,s=Math.sqrt(t*t+r*r);this.uniforms.delta.x=-r/s,this.uniforms.delta.y=t/s}};const Hc=class extends ft{constructor(t,r,s,a){super(),typeof t=="number"&&(rt("5.3.0","TiltShiftFilter constructor arguments is deprecated, use options."),t={blur:t,gradientBlur:r,start:s,end:a}),t=Object.assign({},Hc.defaults,t),this.tiltShiftXFilter=new Yy(t),this.tiltShiftYFilter=new Zy(t)}apply(t,r,s,a){const u=t.getFilterTexture();this.tiltShiftXFilter.apply(t,r,u,1),this.tiltShiftYFilter.apply(t,u,s,a),t.returnFilterTexture(u)}get blur(){return this.tiltShiftXFilter.blur}set blur(t){this.tiltShiftXFilter.blur=this.tiltShiftYFilter.blur=t}get gradientBlur(){return this.tiltShiftXFilter.gradientBlur}set gradientBlur(t){this.tiltShiftXFilter.gradientBlur=this.tiltShiftYFilter.gradientBlur=t}get start(){return this.tiltShiftXFilter.start}set start(t){this.tiltShiftXFilter.start=this.tiltShiftYFilter.start=t}get end(){return this.tiltShiftXFilter.end}set end(t){this.tiltShiftXFilter.end=this.tiltShiftYFilter.end=t}};let Jy=Hc;Jy.defaults={blur:100,gradientBlur:600,start:void 0,end:void 0};var Qy=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,tT=`varying vec2 vTextureCoord;

uniform sampler2D uSampler;
uniform float radius;
uniform float angle;
uniform vec2 offset;
uniform vec4 filterArea;

vec2 mapCoord( vec2 coord )
{
    coord *= filterArea.xy;
    coord += filterArea.zw;

    return coord;
}

vec2 unmapCoord( vec2 coord )
{
    coord -= filterArea.zw;
    coord /= filterArea.xy;

    return coord;
}

vec2 twist(vec2 coord)
{
    coord -= offset;

    float dist = length(coord);

    if (dist < radius)
    {
        float ratioDist = (radius - dist) / radius;
        float angleMod = ratioDist * ratioDist * angle;
        float s = sin(angleMod);
        float c = cos(angleMod);
        coord = vec2(coord.x * c - coord.y * s, coord.x * s + coord.y * c);
    }

    coord += offset;

    return coord;
}

void main(void)
{

    vec2 coord = mapCoord(vTextureCoord);

    coord = twist(coord);

    coord = unmapCoord(coord);

    gl_FragColor = texture2D(uSampler, coord );

}
`;const $c=class extends ft{constructor(n){super(Qy,tT),Object.assign(this,$c.defaults,n)}get offset(){return this.uniforms.offset}set offset(n){this.uniforms.offset=n}get radius(){return this.uniforms.radius}set radius(n){this.uniforms.radius=n}get angle(){return this.uniforms.angle}set angle(n){this.uniforms.angle=n}};let eT=$c;eT.defaults={radius:200,angle:4,padding:20,offset:new yt};var rT=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,iT=`varying vec2 vTextureCoord;
uniform sampler2D uSampler;
uniform vec4 filterArea;

uniform vec2 uCenter;
uniform float uStrength;
uniform float uInnerRadius;
uniform float uRadius;

const float MAX_KERNEL_SIZE = \${maxKernelSize};

// author: http://byteblacksmith.com/improvements-to-the-canonical-one-liner-glsl-rand-for-opengl-es-2-0/
highp float rand(vec2 co, float seed) {
    const highp float a = 12.9898, b = 78.233, c = 43758.5453;
    highp float dt = dot(co + seed, vec2(a, b)), sn = mod(dt, 3.14159);
    return fract(sin(sn) * c + seed);
}

void main() {

    float minGradient = uInnerRadius * 0.3;
    float innerRadius = (uInnerRadius + minGradient * 0.5) / filterArea.x;

    float gradient = uRadius * 0.3;
    float radius = (uRadius - gradient * 0.5) / filterArea.x;

    float countLimit = MAX_KERNEL_SIZE;

    vec2 dir = vec2(uCenter.xy / filterArea.xy - vTextureCoord);
    float dist = length(vec2(dir.x, dir.y * filterArea.y / filterArea.x));

    float strength = uStrength;

    float delta = 0.0;
    float gap;
    if (dist < innerRadius) {
        delta = innerRadius - dist;
        gap = minGradient;
    } else if (radius >= 0.0 && dist > radius) { // radius < 0 means it's infinity
        delta = dist - radius;
        gap = gradient;
    }

    if (delta > 0.0) {
        float normalCount = gap / filterArea.x;
        delta = (normalCount - delta) / normalCount;
        countLimit *= delta;
        strength *= delta;
        if (countLimit < 1.0)
        {
            gl_FragColor = texture2D(uSampler, vTextureCoord);
            return;
        }
    }

    // randomize the lookup values to hide the fixed number of samples
    float offset = rand(vTextureCoord, 0.0);

    float total = 0.0;
    vec4 color = vec4(0.0);

    dir *= strength;

    for (float t = 0.0; t < MAX_KERNEL_SIZE; t++) {
        float percent = (t + offset) / MAX_KERNEL_SIZE;
        float weight = 4.0 * (percent - percent * percent);
        vec2 p = vTextureCoord + dir * percent;
        vec4 sample = texture2D(uSampler, p);

        // switch to pre-multiplied alpha to correctly blur transparent images
        // sample.rgb *= sample.a;

        color += sample * weight;
        total += weight;

        if (t > countLimit){
            break;
        }
    }

    color /= total;
    // switch back from pre-multiplied alpha
    // color.rgb /= color.a + 0.00001;

    gl_FragColor = color;
}
`,kl=Object.getOwnPropertySymbols,nT=Object.prototype.hasOwnProperty,sT=Object.prototype.propertyIsEnumerable,oT=(n,t)=>{var r={};for(var s in n)nT.call(n,s)&&t.indexOf(s)<0&&(r[s]=n[s]);if(n!=null&&kl)for(var s of kl(n))t.indexOf(s)<0&&sT.call(n,s)&&(r[s]=n[s]);return r};const Vc=class extends ft{constructor(n){const t=Object.assign(Vc.defaults,n),{maxKernelSize:r}=t,s=oT(t,["maxKernelSize"]);super(rT,iT.replace("${maxKernelSize}",r.toFixed(1))),Object.assign(this,s)}get center(){return this.uniforms.uCenter}set center(n){this.uniforms.uCenter=n}get strength(){return this.uniforms.uStrength}set strength(n){this.uniforms.uStrength=n}get innerRadius(){return this.uniforms.uInnerRadius}set innerRadius(n){this.uniforms.uInnerRadius=n}get radius(){return this.uniforms.uRadius}set radius(n){(n<0||n===1/0)&&(n=-1),this.uniforms.uRadius=n}};let aT=Vc;aT.defaults={strength:.1,center:[0,0],innerRadius:0,radius:-1,maxKernelSize:32};const ie=150,Ee=160,Zn=160;let at=null;const Gl={animations:{chicken:["chicken","chicken_1","chicken_2"]},frames:{road:it.makeFrame(0,0,32,32),border:it.makeFrame(0,1,32,32),sidewalk:it.makeFrame(2,0,32,32),grass:it.makeFrame(1,0,32,32),bush:it.makeFrame(3,0,32,32),firehydrant:it.makeFrame(4,0,32,32),checkpoint:it.makeFrame(1,1,32,32),chicken_1:it.makeFrame(3,1,32,32),chicken_2:it.makeFrame(4,1,32,32),chicken:it.makeFrame(2,1,32,32),deadChicken:it.makeFrame(0,2,32,32),rose:it.makeFrame(1,2,32,32),poppy:it.makeFrame(2,2,32,32),grass_2:it.makeFrame(3,2,32,32),daisy:it.makeFrame(4,2,32,32),start:it.makeFrame(1,3,32,32),end:it.makeFrame(0,3,32,32),car1:it.makeFrame(0,4,32,32),car2:it.makeFrame(1,4,32,32),car3:it.makeFrame(2,4,32,32),car4:it.makeFrame(3,4,32,32)},meta:{image:"/games/cross-the-road/tiles.png",scale:1}};let ia=class{constructor(t){Rt(this,"roadCount",1);Rt(this,"shadowFilter",new Oc);Rt(this,"deadRoad",-1);Rt(this,"randomCarTick",0);Rt(this,"chickenDied",!1);Rt(this,"hasPendingPacket",!1);Rt(this,"cameraSpeed",5);Rt(this,"animateCamera",!1);Rt(this,"cameraTargetX",0);Rt(this,"chickenTargetX",0);Rt(this,"chickenSpeed",1);Rt(this,"parentElement");Rt(this,"app");Rt(this,"roads",[]);Rt(this,"cars",[]);Rt(this,"isDragging",!1);Rt(this,"previousX",0);Rt(this,"chicken",null);Rt(this,"chickenState",0);this.parentElement=t;const r={resizeTo:t,backgroundAlpha:0,antialias:!0};this.app=new jv(r),t.appendChild(this.app.view),this.roadCount=J.roadCount,this.init().then(()=>{J.hasBetPending&&this.moveChickenToRoad(J.progress-1,!1),this.enableDragging(),this.centerToChicken(!1)})}addHitEffect(){at.hitEffect&&(at.hitEffect.anchor.set(.5,.5),at.hitEffect.pivot.set(.5,.5),at.hitEffect.animationSpeed=.2,at.hitEffect.scale.set(10),at.hitEffect.loop=!1,at.hitEffect.onComplete=()=>{var t;(t=at.hitEffect)==null||t.gotoAndStop(0)},this.app.ticker.add(t=>{var r;(r=at.hitEffect)!=null&&r.playing&&(at.hitEffect.rotation+=.1*t)}),this.app.stage.addChild(at.hitEffect))}async init(){if(this.app.ticker.maxFPS=60,!at){at={},at.guiBox=Sr.from("/games/reme/box.png"),at.tileSheet=new al(ul.from(Gl.meta.image||"",{scaleMode:Ho.NEAREST}),Gl);const r=await at.tileSheet.parse();at.tiles=new Map;for(const[a,u]of Object.entries(r))at.tiles.set(a,u);await Kv.loader.load("/games/reme/gothic.woff");const s=new al(ul.from(hl.meta.image||"",{scaleMode:Ho.NEAREST}),hl);await s.parse(),at.hitEffect=new ll(s.animations.explode)}this.shadowFilter.alpha=.6,this.shadowFilter.blur=0,this.shadowFilter.offset.x=-4,this.shadowFilter.offset.y=4,this.shadowFilter.quality=0,this.app.stage.addChild(this.createLeftArea()),this.app.stage.addChild(this.createRightArea());for(let r=0;r<this.roadCount;r++){const s=this.createRoad(r);this.app.stage.addChild(s),this.roads.push(s)}this.app.ticker.add(r=>{this.onTick(r)}),this.addChicken(),this.resetChicken(),this.addHitEffect();const t=()=>{this.chickenState=0,this.deadRoad=-1,this.chickenDied=!1,this.resetChicken(),this.cameraSpeed=35,this.centerToChicken(!0)};fe.addListener("onBetChicken","crossTheRoadGamePlaceBet",r=>{r.success&&t()}),fe.addListener("onRevealChicken","crossTheRoadGameRevealObject",r=>{r.success&&(this.cameraSpeed=4,this.centerToChicken(),this.moveChickenToRoad(r.progress-1),r.object===Bv.Car?(this.deadRoad=r.progress-1,setTimeout(()=>{this.addCar(r.progress,7)},400)):setTimeout(()=>{Hi.ping.play()},400))}),fe.addListener("onCashoutChicken","crossTheRoadGameCashOut",r=>{r.success&&t()})}resetChicken(){this.setChickenPos(Ee/2-32,!1)}moveChickenToRoad(t,r=!0){let s=Ee;s+=t*ie,s+=ie/2,s-=15,this.setChickenPos(s,r,5)}safeGetTile(t){const r=at.tiles.get(t);return r||(console.error(`Tile ${t} not found`),Sr.WHITE)}checkCollision(t,r){const s=t.getBounds(),a=r.getBounds();return s.height-=50,a.height-=50,s.x<a.x+a.width&&s.x+s.width>a.x&&s.y<a.y+a.height&&s.y+s.height>a.y}onTick(t){var r;if(this.randomCarTick+=t,this.randomCarTick>=50){for(let s=0;s<this.roadCount;s++)s<=J.progress||this.deadRoad===s||Math.random()>.6&&!this.cars.find(a=>a.road-1===s)&&this.addCar(s+1,it.randomFloat(7,15));this.randomCarTick=0}if(this.animateCamera)if(this.app.stage.x!==this.cameraTargetX){const s=this.cameraTargetX-this.app.stage.x,a=this.cameraSpeed*t;Math.abs(s)<a?this.app.stage.x=this.cameraTargetX:this.app.stage.x+=Math.sign(s)*a}else this.animateCamera=!1;for(const s of this.cars){const a=s.speed*t;s.container.y+=Math.round(a),s.container.y>this.app.screen.height+64&&(this.app.stage.removeChild(s.container),this.cars=this.cars.filter(u=>u!=s)),!this.chickenDied&&this.chickenState!=1&&this.checkCollision(this.chicken,s.container)&&(this.chickenDied=!0,this.deadRoad=s.road-1,setTimeout(()=>{this.chickenState=1,Hi.chicken.play(),Hi.collide.play()},150),at.hitEffect.x=s.container.x,at.hitEffect.y=this.app.screen.height/2,(r=at.hitEffect)==null||r.gotoAndPlay(0))}if(this.chicken){const s=this.chicken.getChildByName("alive"),a=this.chicken.getChildByName("dead");switch(this.chickenState){case 0:s.alpha=1,a.alpha=0;break;case 1:a.alpha=1,s.alpha=0;break}const u=this.chicken.x!=this.chickenTargetX;if(s&&(u?s.playing||s.gotoAndPlay(0):s.playing&&s.gotoAndStop(0)),u){const l=this.chickenTargetX-this.chicken.x,d=this.chickenSpeed*t;Math.abs(l)<d?this.chicken.x=this.chickenTargetX:this.chicken.x+=Math.sign(l)*d,this.chicken.x=Math.round(this.chicken.x)}}}getFontSize(t){return Math.ceil(this.app.screen.width/970*t)}addChicken(){const t=new xr;if(!at.tileSheet)return;t.eventMode="passive";const r=new Ae(this.safeGetTile("deadChicken"));r.anchor.set(.25,.25),r.scale.set(2.5),r.alpha=0,r.name="dead",t.addChild(r);const s=new ll(at.tileSheet.animations.chicken);s.anchor.set(.5,.5),s.scale.set(2.95),t.x=Ee/2,t.y=this.app.screen.height/2-32,s.name="alive",t.addChild(s),s.loop=!0,s.animationSpeed=.2,t.filters=[this.shadowFilter],this.chicken=t,this.app.stage.addChild(t)}createTextBox(t){const r=new xr;let s=new Yv(t,{fontFamily:"Gothic",fontSize:it.clamp(this.getFontSize(17),14,22),letterSpacing:.75,fill:"white",fontWeight:"bold",align:"center"});const a=Zv.measureText(t,s.style);s.texture.baseTexture.scaleMode=Ho.NEAREST;const u=a.width,l=a.height,d=at.guiBox.baseTexture.width/3,g=at.guiBox.baseTexture.height/3,_=4,C=Math.ceil(d/2),b=Math.ceil(g/2);let R=new Jv;R.beginFill(2391453),R.drawRect(C,b,u+C+_,l+b+_),R.endFill(),r.addChild(R),s.position.set(R.width/2-u/2+C,R.height/2-l/2+b),r.addChild(s);for(let F=0;F<3;F++)for(let V=0;V<3;V++){let U=new Sr(at.guiBox.baseTexture,new zl(V*d,F*g,d,g)),B=new Ae(U);B.x=V*d,B.y=F*g,V===1&&(B.width=u+_),V===2&&(B.x=u+d+_),F===1&&(V===0||V===2)&&(B.height=l+_),F===2&&(B.y=l+g+_),B.y=F===0?0:B.y,B.tint=10607857,r.addChild(B)}return r}addCar(t,r){const s=new xr;s.eventMode="passive";const a=["car1","car2","car3","car4"],u=a[Math.floor(Math.random()*a.length)],l=new Ae(this.safeGetTile(u));l.anchor.set(.5,.5),l.scale.set(3.32),l.x=t*ie+Ee,l.x-=ie/2,l.y=-l.getLocalBounds().height,l.x=Math.floor(l.x),l.y=Math.floor(l.y),l.filters=[this.shadowFilter],s.addChild(l),this.cars.push({container:l,speed:r,road:t}),this.app.stage.addChild(l)}createLeftArea(){const t=new xr,r=new Ir(this.safeGetTile("grass"),Ee,this.app.screen.height);r.scale.set(3),t.addChild(r);const s=(a,u,l,d=1.75)=>{const g=new Ae(this.safeGetTile(a));g.x=u,g.y=l,g.scale.set(d),g.filters=[this.shadowFilter],t.addChild(g)};return s("bush",12,35),s("start",Ee/2-6,this.app.screen.height/2+18,2.5),s("poppy",100,80),s("grass_2",50,this.app.screen.height-80),s("grass_2",50+26*1.75,this.app.screen.height-80),s("daisy",30,this.app.screen.height-128),t}createRightArea(){const t=new xr,r=new Ir(this.safeGetTile("grass"),Zn,this.app.screen.height);r.scale.set(3),t.addChild(r);const s=(a,u,l,d=1.75)=>{const g=new Ae(this.safeGetTile(a));g.x=u,g.y=l,g.scale.set(d),g.filters=[this.shadowFilter],t.addChild(g)};return s("bush",14,60),s("rose",80,80),s("daisy",110,this.app.screen.height-120),s("bush",48,this.app.screen.height-100),s("end",6,this.app.screen.height/2+18,2.5),t.x=Ee+ie*this.roadCount,t}canClick(t){return J.hasDied||!J.hasBetPending||J.progress!==t?!1:!this.hasPendingPacket}centerToChicken(t=!0){this.cameraTargetX=-this.chicken.x+this.app.screen.width/2-this.chicken.width*2;const r=this.getStageBounds(this.cameraTargetX);r!==!1&&(this.cameraTargetX=r),this.animateCamera=t,t||(this.app.stage.x=this.cameraTargetX)}createRoad(t){const r=new xr;r.eventMode="dynamic";const s=new Ir(this.safeGetTile("road"),ie,this.app.screen.height);s.x=t*ie+Ee,r.addChild(s);const a=new Ir(this.safeGetTile("border"),32,this.app.screen.height);a.anchor.set(.5,0),a.x=s.x;const u=new Ae(a.texture);if(u.tint=0,u.alpha=.5,u.anchor.set(.5,0),u.x=s.x-2.5,u.y=0,u.width=32,u.height=this.app.screen.height,r.addChild(u),r.addChild(a),t==this.roadCount-1){const R=new Ir(this.safeGetTile("border"),32,this.app.screen.height);R.eventMode="passive",R.anchor.set(.5,0),R.x=s.x+ie;const F=new Ae(R.texture);F.tint=0,F.alpha=.5,F.anchor.set(.5,0),F.x=R.x-2.5,F.y=0,F.width=32,F.height=this.app.screen.height,r.addChild(F),r.addChild(R)}const l=new xr,d=new Ae(this.safeGetTile("checkpoint"));d.x=s.x+ie/2,d.y=s.height/2,d.anchor.set(.5,.5),d.scale.set(2),l.eventMode="dynamic",l.cursor="pointer";const g=()=>{this.canClick(t)&&(this.hasPendingPacket=!0,fe.sendWithCallback({ID:"crossTheRoadGameRevealObject",index:t+1},R=>{this.hasPendingPacket=!1}))};l.hitArea=d.getBounds(),l.onclick=g,l.ontap=g,l.addChild(d);const _=J.calcMultiplier(J.difficulty,t+1),C=`${it.formatNumber(_,!0)}x`,b=this.createTextBox(C);return b.name="multiplier",b.position.x=s.x+(ie/2-b.width/2),b.position.y=d.y+d.getLocalBounds().height/2+32,l.addChild(b),r.addChild(l),r}enableDragging(){const t=new Ae(Sr.EMPTY);t.width=Ee+ie*this.roadCount+Zn,t.height=150,t.eventMode="dynamic",this.app.stage.addChild(t);const r=new Ae(Sr.EMPTY);r.width=Ee+ie*this.roadCount+Zn,r.height=90,r.eventMode="dynamic",r.y=this.app.screen.height-r.height,this.app.stage.addChild(r);const s=l=>{this.app.view.style&&(this.app.view.style.cursor=l)},a=l=>{this.previousX=l.global.x,this.isDragging=!0,s("grabbing")},u=l=>{l.ontouchstart=a,l.onmousedown=a,l.onpointerdown=a;const d=()=>{this.isDragging=!1,s("auto")};l.onmouseup=()=>d(),l.ontouchend=()=>d(),l.onpointerup=()=>d(),l.onmouseupoutside=()=>d(),l.ontouchendoutside=()=>d(),l.onpointerupoutside=()=>d(),l.onmouseout=()=>d(),l.ontouchcancel=()=>d(),l.onpointerout=()=>d();const g=_=>{if(this.isDragging){this.animateCamera=!1;const C=_.global.x,b=C-this.previousX;this.app.stage.x+=b*1.75,this.checkStageBounds(),this.previousX=C}};l.onmousemove=g,l.ontouchmove=g,l.onpointermove=g};u(t),u(r)}getStageBounds(t){if(t>0)return 0;const s=Ee+ie*this.roadCount+Zn-this.app.screen.width;return-t>s?-s:!1}checkStageBounds(){const t=this.getStageBounds(this.app.stage.x);t!==!1&&(this.app.stage.x=t)}setChickenPos(t,r,s=2){this.chicken&&(r?(this.chickenTargetX=t,this.chickenSpeed=s):(this.chicken.x=t,this.chickenTargetX=t))}reset(){fe.removeListener("onBetChicken"),fe.removeListener("onRevealChicken"),fe.removeListener("onCashoutChicken"),this.app.destroy(!0)}};var ps={exports:{}};ps.exports;(function(n,t){(function(){var r,s="4.17.21",a=200,u="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",l="Expected a function",d="Invalid `variable` option passed into `_.template`",g="__lodash_hash_undefined__",_=500,C="__lodash_placeholder__",b=1,R=2,F=4,V=1,U=2,B=1,mt=2,ge=4,Tt=8,me=16,kt=32,_e=64,Vt=128,Ue=256,hr=512,Xi=30,Lr="...",vs=800,qi=16,Gt=1,Ie=2,ji=3,L=1/0,j=9007199254740991,bt=17976931348623157e292,Kt=0/0,Yt=4294967295,Wc=Yt-1,Xc=Yt>>>1,qc=[["ary",Vt],["bind",B],["bindKey",mt],["curry",Tt],["curryRight",me],["flip",hr],["partial",kt],["partialRight",_e],["rearg",Ue]],Br="[object Arguments]",Ki="[object Array]",jc="[object AsyncFunction]",ci="[object Boolean]",di="[object Date]",Kc="[object DOMException]",Yi="[object Error]",Zi="[object Function]",Sa="[object GeneratorFunction]",ve="[object Map]",fi="[object Number]",Yc="[object Null]",ke="[object Object]",Ia="[object Promise]",Zc="[object Proxy]",pi="[object RegExp]",xe="[object Set]",gi="[object String]",Ji="[object Symbol]",Jc="[object Undefined]",mi="[object WeakMap]",Qc="[object WeakSet]",_i="[object ArrayBuffer]",Ur="[object DataView]",xs="[object Float32Array]",ys="[object Float64Array]",Ts="[object Int8Array]",bs="[object Int16Array]",Cs="[object Int32Array]",Es="[object Uint8Array]",ws="[object Uint8ClampedArray]",As="[object Uint16Array]",Rs="[object Uint32Array]",td=/\b__p \+= '';/g,ed=/\b(__p \+=) '' \+/g,rd=/(__e\(.*?\)|\b__t\)) \+\n'';/g,Fa=/&(?:amp|lt|gt|quot|#39);/g,Na=/[&<>"']/g,id=RegExp(Fa.source),nd=RegExp(Na.source),sd=/<%-([\s\S]+?)%>/g,od=/<%([\s\S]+?)%>/g,Ma=/<%=([\s\S]+?)%>/g,ad=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,ud=/^\w*$/,hd=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Ss=/[\\^$.*+?()[\]{}|]/g,ld=RegExp(Ss.source),Is=/^\s+/,cd=/\s/,dd=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,fd=/\{\n\/\* \[wrapped with (.+)\] \*/,pd=/,? & /,gd=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,md=/[()=,{}\[\]\/\s]/,_d=/\\(\\)?/g,vd=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,Pa=/\w*$/,xd=/^[-+]0x[0-9a-f]+$/i,yd=/^0b[01]+$/i,Td=/^\[object .+?Constructor\]$/,bd=/^0o[0-7]+$/i,Cd=/^(?:0|[1-9]\d*)$/,Ed=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,Qi=/($^)/,wd=/['\n\r\u2028\u2029\\]/g,tn="\\ud800-\\udfff",Ad="\\u0300-\\u036f",Rd="\\ufe20-\\ufe2f",Sd="\\u20d0-\\u20ff",Oa=Ad+Rd+Sd,La="\\u2700-\\u27bf",Ba="a-z\\xdf-\\xf6\\xf8-\\xff",Id="\\xac\\xb1\\xd7\\xf7",Fd="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",Nd="\\u2000-\\u206f",Md=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",Ua="A-Z\\xc0-\\xd6\\xd8-\\xde",ka="\\ufe0e\\ufe0f",Ga=Id+Fd+Nd+Md,Fs="['’]",Pd="["+tn+"]",Da="["+Ga+"]",en="["+Oa+"]",za="\\d+",Od="["+La+"]",Ha="["+Ba+"]",$a="[^"+tn+Ga+za+La+Ba+Ua+"]",Ns="\\ud83c[\\udffb-\\udfff]",Ld="(?:"+en+"|"+Ns+")",Va="[^"+tn+"]",Ms="(?:\\ud83c[\\udde6-\\uddff]){2}",Ps="[\\ud800-\\udbff][\\udc00-\\udfff]",kr="["+Ua+"]",Wa="\\u200d",Xa="(?:"+Ha+"|"+$a+")",Bd="(?:"+kr+"|"+$a+")",qa="(?:"+Fs+"(?:d|ll|m|re|s|t|ve))?",ja="(?:"+Fs+"(?:D|LL|M|RE|S|T|VE))?",Ka=Ld+"?",Ya="["+ka+"]?",Ud="(?:"+Wa+"(?:"+[Va,Ms,Ps].join("|")+")"+Ya+Ka+")*",kd="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",Gd="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",Za=Ya+Ka+Ud,Dd="(?:"+[Od,Ms,Ps].join("|")+")"+Za,zd="(?:"+[Va+en+"?",en,Ms,Ps,Pd].join("|")+")",Hd=RegExp(Fs,"g"),$d=RegExp(en,"g"),Os=RegExp(Ns+"(?="+Ns+")|"+zd+Za,"g"),Vd=RegExp([kr+"?"+Ha+"+"+qa+"(?="+[Da,kr,"$"].join("|")+")",Bd+"+"+ja+"(?="+[Da,kr+Xa,"$"].join("|")+")",kr+"?"+Xa+"+"+qa,kr+"+"+ja,Gd,kd,za,Dd].join("|"),"g"),Wd=RegExp("["+Wa+tn+Oa+ka+"]"),Xd=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,qd=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],jd=-1,pt={};pt[xs]=pt[ys]=pt[Ts]=pt[bs]=pt[Cs]=pt[Es]=pt[ws]=pt[As]=pt[Rs]=!0,pt[Br]=pt[Ki]=pt[_i]=pt[ci]=pt[Ur]=pt[di]=pt[Yi]=pt[Zi]=pt[ve]=pt[fi]=pt[ke]=pt[pi]=pt[xe]=pt[gi]=pt[mi]=!1;var dt={};dt[Br]=dt[Ki]=dt[_i]=dt[Ur]=dt[ci]=dt[di]=dt[xs]=dt[ys]=dt[Ts]=dt[bs]=dt[Cs]=dt[ve]=dt[fi]=dt[ke]=dt[pi]=dt[xe]=dt[gi]=dt[Ji]=dt[Es]=dt[ws]=dt[As]=dt[Rs]=!0,dt[Yi]=dt[Zi]=dt[mi]=!1;var Kd={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},Yd={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Zd={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},Jd={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},Qd=parseFloat,tf=parseInt,Ja=typeof Pi=="object"&&Pi&&Pi.Object===Object&&Pi,ef=typeof self=="object"&&self&&self.Object===Object&&self,Ot=Ja||ef||Function("return this")(),Ls=t&&!t.nodeType&&t,lr=Ls&&!0&&n&&!n.nodeType&&n,Qa=lr&&lr.exports===Ls,Bs=Qa&&Ja.process,se=function(){try{var x=lr&&lr.require&&lr.require("util").types;return x||Bs&&Bs.binding&&Bs.binding("util")}catch{}}(),tu=se&&se.isArrayBuffer,eu=se&&se.isDate,ru=se&&se.isMap,iu=se&&se.isRegExp,nu=se&&se.isSet,su=se&&se.isTypedArray;function Zt(x,E,T){switch(T.length){case 0:return x.call(E);case 1:return x.call(E,T[0]);case 2:return x.call(E,T[0],T[1]);case 3:return x.call(E,T[0],T[1],T[2])}return x.apply(E,T)}function rf(x,E,T,P){for(var H=-1,nt=x==null?0:x.length;++H<nt;){var It=x[H];E(P,It,T(It),x)}return P}function oe(x,E){for(var T=-1,P=x==null?0:x.length;++T<P&&E(x[T],T,x)!==!1;);return x}function nf(x,E){for(var T=x==null?0:x.length;T--&&E(x[T],T,x)!==!1;);return x}function ou(x,E){for(var T=-1,P=x==null?0:x.length;++T<P;)if(!E(x[T],T,x))return!1;return!0}function Ye(x,E){for(var T=-1,P=x==null?0:x.length,H=0,nt=[];++T<P;){var It=x[T];E(It,T,x)&&(nt[H++]=It)}return nt}function rn(x,E){var T=x==null?0:x.length;return!!T&&Gr(x,E,0)>-1}function Us(x,E,T){for(var P=-1,H=x==null?0:x.length;++P<H;)if(T(E,x[P]))return!0;return!1}function gt(x,E){for(var T=-1,P=x==null?0:x.length,H=Array(P);++T<P;)H[T]=E(x[T],T,x);return H}function Ze(x,E){for(var T=-1,P=E.length,H=x.length;++T<P;)x[H+T]=E[T];return x}function ks(x,E,T,P){var H=-1,nt=x==null?0:x.length;for(P&&nt&&(T=x[++H]);++H<nt;)T=E(T,x[H],H,x);return T}function sf(x,E,T,P){var H=x==null?0:x.length;for(P&&H&&(T=x[--H]);H--;)T=E(T,x[H],H,x);return T}function Gs(x,E){for(var T=-1,P=x==null?0:x.length;++T<P;)if(E(x[T],T,x))return!0;return!1}var of=Ds("length");function af(x){return x.split("")}function uf(x){return x.match(gd)||[]}function au(x,E,T){var P;return T(x,function(H,nt,It){if(E(H,nt,It))return P=nt,!1}),P}function nn(x,E,T,P){for(var H=x.length,nt=T+(P?1:-1);P?nt--:++nt<H;)if(E(x[nt],nt,x))return nt;return-1}function Gr(x,E,T){return E===E?yf(x,E,T):nn(x,uu,T)}function hf(x,E,T,P){for(var H=T-1,nt=x.length;++H<nt;)if(P(x[H],E))return H;return-1}function uu(x){return x!==x}function hu(x,E){var T=x==null?0:x.length;return T?Hs(x,E)/T:Kt}function Ds(x){return function(E){return E==null?r:E[x]}}function zs(x){return function(E){return x==null?r:x[E]}}function lu(x,E,T,P,H){return H(x,function(nt,It,ct){T=P?(P=!1,nt):E(T,nt,It,ct)}),T}function lf(x,E){var T=x.length;for(x.sort(E);T--;)x[T]=x[T].value;return x}function Hs(x,E){for(var T,P=-1,H=x.length;++P<H;){var nt=E(x[P]);nt!==r&&(T=T===r?nt:T+nt)}return T}function $s(x,E){for(var T=-1,P=Array(x);++T<x;)P[T]=E(T);return P}function cf(x,E){return gt(E,function(T){return[T,x[T]]})}function cu(x){return x&&x.slice(0,gu(x)+1).replace(Is,"")}function Jt(x){return function(E){return x(E)}}function Vs(x,E){return gt(E,function(T){return x[T]})}function vi(x,E){return x.has(E)}function du(x,E){for(var T=-1,P=x.length;++T<P&&Gr(E,x[T],0)>-1;);return T}function fu(x,E){for(var T=x.length;T--&&Gr(E,x[T],0)>-1;);return T}function df(x,E){for(var T=x.length,P=0;T--;)x[T]===E&&++P;return P}var ff=zs(Kd),pf=zs(Yd);function gf(x){return"\\"+Jd[x]}function mf(x,E){return x==null?r:x[E]}function Dr(x){return Wd.test(x)}function _f(x){return Xd.test(x)}function vf(x){for(var E,T=[];!(E=x.next()).done;)T.push(E.value);return T}function Ws(x){var E=-1,T=Array(x.size);return x.forEach(function(P,H){T[++E]=[H,P]}),T}function pu(x,E){return function(T){return x(E(T))}}function Je(x,E){for(var T=-1,P=x.length,H=0,nt=[];++T<P;){var It=x[T];(It===E||It===C)&&(x[T]=C,nt[H++]=T)}return nt}function sn(x){var E=-1,T=Array(x.size);return x.forEach(function(P){T[++E]=P}),T}function xf(x){var E=-1,T=Array(x.size);return x.forEach(function(P){T[++E]=[P,P]}),T}function yf(x,E,T){for(var P=T-1,H=x.length;++P<H;)if(x[P]===E)return P;return-1}function Tf(x,E,T){for(var P=T+1;P--;)if(x[P]===E)return P;return P}function zr(x){return Dr(x)?Cf(x):of(x)}function ye(x){return Dr(x)?Ef(x):af(x)}function gu(x){for(var E=x.length;E--&&cd.test(x.charAt(E)););return E}var bf=zs(Zd);function Cf(x){for(var E=Os.lastIndex=0;Os.test(x);)++E;return E}function Ef(x){return x.match(Os)||[]}function wf(x){return x.match(Vd)||[]}var Af=function x(E){E=E==null?Ot:Hr.defaults(Ot.Object(),E,Hr.pick(Ot,qd));var T=E.Array,P=E.Date,H=E.Error,nt=E.Function,It=E.Math,ct=E.Object,Xs=E.RegExp,Rf=E.String,ae=E.TypeError,on=T.prototype,Sf=nt.prototype,$r=ct.prototype,an=E["__core-js_shared__"],un=Sf.toString,ot=$r.hasOwnProperty,If=0,mu=function(){var e=/[^.]+$/.exec(an&&an.keys&&an.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}(),hn=$r.toString,Ff=un.call(ct),Nf=Ot._,Mf=Xs("^"+un.call(ot).replace(Ss,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),ln=Qa?E.Buffer:r,Qe=E.Symbol,cn=E.Uint8Array,_u=ln?ln.allocUnsafe:r,dn=pu(ct.getPrototypeOf,ct),vu=ct.create,xu=$r.propertyIsEnumerable,fn=on.splice,yu=Qe?Qe.isConcatSpreadable:r,xi=Qe?Qe.iterator:r,cr=Qe?Qe.toStringTag:r,pn=function(){try{var e=mr(ct,"defineProperty");return e({},"",{}),e}catch{}}(),Pf=E.clearTimeout!==Ot.clearTimeout&&E.clearTimeout,Of=P&&P.now!==Ot.Date.now&&P.now,Lf=E.setTimeout!==Ot.setTimeout&&E.setTimeout,gn=It.ceil,mn=It.floor,qs=ct.getOwnPropertySymbols,Bf=ln?ln.isBuffer:r,Tu=E.isFinite,Uf=on.join,kf=pu(ct.keys,ct),Ft=It.max,Bt=It.min,Gf=P.now,Df=E.parseInt,bu=It.random,zf=on.reverse,js=mr(E,"DataView"),yi=mr(E,"Map"),Ks=mr(E,"Promise"),Vr=mr(E,"Set"),Ti=mr(E,"WeakMap"),bi=mr(ct,"create"),_n=Ti&&new Ti,Wr={},Hf=_r(js),$f=_r(yi),Vf=_r(Ks),Wf=_r(Vr),Xf=_r(Ti),vn=Qe?Qe.prototype:r,Ci=vn?vn.valueOf:r,Cu=vn?vn.toString:r;function f(e){if(Ct(e)&&!$(e)&&!(e instanceof Z)){if(e instanceof ue)return e;if(ot.call(e,"__wrapped__"))return Eh(e)}return new ue(e)}var Xr=function(){function e(){}return function(i){if(!_t(i))return{};if(vu)return vu(i);e.prototype=i;var o=new e;return e.prototype=r,o}}();function xn(){}function ue(e,i){this.__wrapped__=e,this.__actions__=[],this.__chain__=!!i,this.__index__=0,this.__values__=r}f.templateSettings={escape:sd,evaluate:od,interpolate:Ma,variable:"",imports:{_:f}},f.prototype=xn.prototype,f.prototype.constructor=f,ue.prototype=Xr(xn.prototype),ue.prototype.constructor=ue;function Z(e){this.__wrapped__=e,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=Yt,this.__views__=[]}function qf(){var e=new Z(this.__wrapped__);return e.__actions__=Wt(this.__actions__),e.__dir__=this.__dir__,e.__filtered__=this.__filtered__,e.__iteratees__=Wt(this.__iteratees__),e.__takeCount__=this.__takeCount__,e.__views__=Wt(this.__views__),e}function jf(){if(this.__filtered__){var e=new Z(this);e.__dir__=-1,e.__filtered__=!0}else e=this.clone(),e.__dir__*=-1;return e}function Kf(){var e=this.__wrapped__.value(),i=this.__dir__,o=$(e),h=i<0,c=o?e.length:0,p=ag(0,c,this.__views__),m=p.start,v=p.end,y=v-m,w=h?v:m-1,A=this.__iteratees__,S=A.length,I=0,O=Bt(y,this.__takeCount__);if(!o||!h&&c==y&&O==y)return qu(e,this.__actions__);var G=[];t:for(;y--&&I<O;){w+=i;for(var X=-1,D=e[w];++X<S;){var K=A[X],Q=K.iteratee,ee=K.type,Ht=Q(D);if(ee==Ie)D=Ht;else if(!Ht){if(ee==Gt)continue t;break t}}G[I++]=D}return G}Z.prototype=Xr(xn.prototype),Z.prototype.constructor=Z;function dr(e){var i=-1,o=e==null?0:e.length;for(this.clear();++i<o;){var h=e[i];this.set(h[0],h[1])}}function Yf(){this.__data__=bi?bi(null):{},this.size=0}function Zf(e){var i=this.has(e)&&delete this.__data__[e];return this.size-=i?1:0,i}function Jf(e){var i=this.__data__;if(bi){var o=i[e];return o===g?r:o}return ot.call(i,e)?i[e]:r}function Qf(e){var i=this.__data__;return bi?i[e]!==r:ot.call(i,e)}function tp(e,i){var o=this.__data__;return this.size+=this.has(e)?0:1,o[e]=bi&&i===r?g:i,this}dr.prototype.clear=Yf,dr.prototype.delete=Zf,dr.prototype.get=Jf,dr.prototype.has=Qf,dr.prototype.set=tp;function Ge(e){var i=-1,o=e==null?0:e.length;for(this.clear();++i<o;){var h=e[i];this.set(h[0],h[1])}}function ep(){this.__data__=[],this.size=0}function rp(e){var i=this.__data__,o=yn(i,e);if(o<0)return!1;var h=i.length-1;return o==h?i.pop():fn.call(i,o,1),--this.size,!0}function ip(e){var i=this.__data__,o=yn(i,e);return o<0?r:i[o][1]}function np(e){return yn(this.__data__,e)>-1}function sp(e,i){var o=this.__data__,h=yn(o,e);return h<0?(++this.size,o.push([e,i])):o[h][1]=i,this}Ge.prototype.clear=ep,Ge.prototype.delete=rp,Ge.prototype.get=ip,Ge.prototype.has=np,Ge.prototype.set=sp;function De(e){var i=-1,o=e==null?0:e.length;for(this.clear();++i<o;){var h=e[i];this.set(h[0],h[1])}}function op(){this.size=0,this.__data__={hash:new dr,map:new(yi||Ge),string:new dr}}function ap(e){var i=Mn(this,e).delete(e);return this.size-=i?1:0,i}function up(e){return Mn(this,e).get(e)}function hp(e){return Mn(this,e).has(e)}function lp(e,i){var o=Mn(this,e),h=o.size;return o.set(e,i),this.size+=o.size==h?0:1,this}De.prototype.clear=op,De.prototype.delete=ap,De.prototype.get=up,De.prototype.has=hp,De.prototype.set=lp;function fr(e){var i=-1,o=e==null?0:e.length;for(this.__data__=new De;++i<o;)this.add(e[i])}function cp(e){return this.__data__.set(e,g),this}function dp(e){return this.__data__.has(e)}fr.prototype.add=fr.prototype.push=cp,fr.prototype.has=dp;function Te(e){var i=this.__data__=new Ge(e);this.size=i.size}function fp(){this.__data__=new Ge,this.size=0}function pp(e){var i=this.__data__,o=i.delete(e);return this.size=i.size,o}function gp(e){return this.__data__.get(e)}function mp(e){return this.__data__.has(e)}function _p(e,i){var o=this.__data__;if(o instanceof Ge){var h=o.__data__;if(!yi||h.length<a-1)return h.push([e,i]),this.size=++o.size,this;o=this.__data__=new De(h)}return o.set(e,i),this.size=o.size,this}Te.prototype.clear=fp,Te.prototype.delete=pp,Te.prototype.get=gp,Te.prototype.has=mp,Te.prototype.set=_p;function Eu(e,i){var o=$(e),h=!o&&vr(e),c=!o&&!h&&nr(e),p=!o&&!h&&!c&&Yr(e),m=o||h||c||p,v=m?$s(e.length,Rf):[],y=v.length;for(var w in e)(i||ot.call(e,w))&&!(m&&(w=="length"||c&&(w=="offset"||w=="parent")||p&&(w=="buffer"||w=="byteLength"||w=="byteOffset")||Ve(w,y)))&&v.push(w);return v}function wu(e){var i=e.length;return i?e[oo(0,i-1)]:r}function vp(e,i){return Pn(Wt(e),pr(i,0,e.length))}function xp(e){return Pn(Wt(e))}function Ys(e,i,o){(o!==r&&!be(e[i],o)||o===r&&!(i in e))&&ze(e,i,o)}function Ei(e,i,o){var h=e[i];(!(ot.call(e,i)&&be(h,o))||o===r&&!(i in e))&&ze(e,i,o)}function yn(e,i){for(var o=e.length;o--;)if(be(e[o][0],i))return o;return-1}function yp(e,i,o,h){return tr(e,function(c,p,m){i(h,c,o(c),m)}),h}function Au(e,i){return e&&Ne(i,Nt(i),e)}function Tp(e,i){return e&&Ne(i,qt(i),e)}function ze(e,i,o){i=="__proto__"&&pn?pn(e,i,{configurable:!0,enumerable:!0,value:o,writable:!0}):e[i]=o}function Zs(e,i){for(var o=-1,h=i.length,c=T(h),p=e==null;++o<h;)c[o]=p?r:Mo(e,i[o]);return c}function pr(e,i,o){return e===e&&(o!==r&&(e=e<=o?e:o),i!==r&&(e=e>=i?e:i)),e}function he(e,i,o,h,c,p){var m,v=i&b,y=i&R,w=i&F;if(o&&(m=c?o(e,h,c,p):o(e)),m!==r)return m;if(!_t(e))return e;var A=$(e);if(A){if(m=hg(e),!v)return Wt(e,m)}else{var S=Ut(e),I=S==Zi||S==Sa;if(nr(e))return Yu(e,v);if(S==ke||S==Br||I&&!c){if(m=y||I?{}:gh(e),!v)return y?Jp(e,Tp(m,e)):Zp(e,Au(m,e))}else{if(!dt[S])return c?e:{};m=lg(e,S,v)}}p||(p=new Te);var O=p.get(e);if(O)return O;p.set(e,m),Vh(e)?e.forEach(function(D){m.add(he(D,i,o,D,e,p))}):Hh(e)&&e.forEach(function(D,K){m.set(K,he(D,i,o,K,e,p))});var G=w?y?vo:_o:y?qt:Nt,X=A?r:G(e);return oe(X||e,function(D,K){X&&(K=D,D=e[K]),Ei(m,K,he(D,i,o,K,e,p))}),m}function bp(e){var i=Nt(e);return function(o){return Ru(o,e,i)}}function Ru(e,i,o){var h=o.length;if(e==null)return!h;for(e=ct(e);h--;){var c=o[h],p=i[c],m=e[c];if(m===r&&!(c in e)||!p(m))return!1}return!0}function Su(e,i,o){if(typeof e!="function")throw new ae(l);return Ni(function(){e.apply(r,o)},i)}function wi(e,i,o,h){var c=-1,p=rn,m=!0,v=e.length,y=[],w=i.length;if(!v)return y;o&&(i=gt(i,Jt(o))),h?(p=Us,m=!1):i.length>=a&&(p=vi,m=!1,i=new fr(i));t:for(;++c<v;){var A=e[c],S=o==null?A:o(A);if(A=h||A!==0?A:0,m&&S===S){for(var I=w;I--;)if(i[I]===S)continue t;y.push(A)}else p(i,S,h)||y.push(A)}return y}var tr=eh(Fe),Iu=eh(Qs,!0);function Cp(e,i){var o=!0;return tr(e,function(h,c,p){return o=!!i(h,c,p),o}),o}function Tn(e,i,o){for(var h=-1,c=e.length;++h<c;){var p=e[h],m=i(p);if(m!=null&&(v===r?m===m&&!te(m):o(m,v)))var v=m,y=p}return y}function Ep(e,i,o,h){var c=e.length;for(o=W(o),o<0&&(o=-o>c?0:c+o),h=h===r||h>c?c:W(h),h<0&&(h+=c),h=o>h?0:Xh(h);o<h;)e[o++]=i;return e}function Fu(e,i){var o=[];return tr(e,function(h,c,p){i(h,c,p)&&o.push(h)}),o}function Lt(e,i,o,h,c){var p=-1,m=e.length;for(o||(o=dg),c||(c=[]);++p<m;){var v=e[p];i>0&&o(v)?i>1?Lt(v,i-1,o,h,c):Ze(c,v):h||(c[c.length]=v)}return c}var Js=rh(),Nu=rh(!0);function Fe(e,i){return e&&Js(e,i,Nt)}function Qs(e,i){return e&&Nu(e,i,Nt)}function bn(e,i){return Ye(i,function(o){return We(e[o])})}function gr(e,i){i=rr(i,e);for(var o=0,h=i.length;e!=null&&o<h;)e=e[Me(i[o++])];return o&&o==h?e:r}function Mu(e,i,o){var h=i(e);return $(e)?h:Ze(h,o(e))}function Dt(e){return e==null?e===r?Jc:Yc:cr&&cr in ct(e)?og(e):xg(e)}function to(e,i){return e>i}function wp(e,i){return e!=null&&ot.call(e,i)}function Ap(e,i){return e!=null&&i in ct(e)}function Rp(e,i,o){return e>=Bt(i,o)&&e<Ft(i,o)}function eo(e,i,o){for(var h=o?Us:rn,c=e[0].length,p=e.length,m=p,v=T(p),y=1/0,w=[];m--;){var A=e[m];m&&i&&(A=gt(A,Jt(i))),y=Bt(A.length,y),v[m]=!o&&(i||c>=120&&A.length>=120)?new fr(m&&A):r}A=e[0];var S=-1,I=v[0];t:for(;++S<c&&w.length<y;){var O=A[S],G=i?i(O):O;if(O=o||O!==0?O:0,!(I?vi(I,G):h(w,G,o))){for(m=p;--m;){var X=v[m];if(!(X?vi(X,G):h(e[m],G,o)))continue t}I&&I.push(G),w.push(O)}}return w}function Sp(e,i,o,h){return Fe(e,function(c,p,m){i(h,o(c),p,m)}),h}function Ai(e,i,o){i=rr(i,e),e=xh(e,i);var h=e==null?e:e[Me(ce(i))];return h==null?r:Zt(h,e,o)}function Pu(e){return Ct(e)&&Dt(e)==Br}function Ip(e){return Ct(e)&&Dt(e)==_i}function Fp(e){return Ct(e)&&Dt(e)==di}function Ri(e,i,o,h,c){return e===i?!0:e==null||i==null||!Ct(e)&&!Ct(i)?e!==e&&i!==i:Np(e,i,o,h,Ri,c)}function Np(e,i,o,h,c,p){var m=$(e),v=$(i),y=m?Ki:Ut(e),w=v?Ki:Ut(i);y=y==Br?ke:y,w=w==Br?ke:w;var A=y==ke,S=w==ke,I=y==w;if(I&&nr(e)){if(!nr(i))return!1;m=!0,A=!1}if(I&&!A)return p||(p=new Te),m||Yr(e)?dh(e,i,o,h,c,p):ng(e,i,y,o,h,c,p);if(!(o&V)){var O=A&&ot.call(e,"__wrapped__"),G=S&&ot.call(i,"__wrapped__");if(O||G){var X=O?e.value():e,D=G?i.value():i;return p||(p=new Te),c(X,D,o,h,p)}}return I?(p||(p=new Te),sg(e,i,o,h,c,p)):!1}function Mp(e){return Ct(e)&&Ut(e)==ve}function ro(e,i,o,h){var c=o.length,p=c,m=!h;if(e==null)return!p;for(e=ct(e);c--;){var v=o[c];if(m&&v[2]?v[1]!==e[v[0]]:!(v[0]in e))return!1}for(;++c<p;){v=o[c];var y=v[0],w=e[y],A=v[1];if(m&&v[2]){if(w===r&&!(y in e))return!1}else{var S=new Te;if(h)var I=h(w,A,y,e,i,S);if(!(I===r?Ri(A,w,V|U,h,S):I))return!1}}return!0}function Ou(e){if(!_t(e)||pg(e))return!1;var i=We(e)?Mf:Td;return i.test(_r(e))}function Pp(e){return Ct(e)&&Dt(e)==pi}function Op(e){return Ct(e)&&Ut(e)==xe}function Lp(e){return Ct(e)&&Gn(e.length)&&!!pt[Dt(e)]}function Lu(e){return typeof e=="function"?e:e==null?jt:typeof e=="object"?$(e)?ku(e[0],e[1]):Uu(e):il(e)}function io(e){if(!Fi(e))return kf(e);var i=[];for(var o in ct(e))ot.call(e,o)&&o!="constructor"&&i.push(o);return i}function Bp(e){if(!_t(e))return vg(e);var i=Fi(e),o=[];for(var h in e)h=="constructor"&&(i||!ot.call(e,h))||o.push(h);return o}function no(e,i){return e<i}function Bu(e,i){var o=-1,h=Xt(e)?T(e.length):[];return tr(e,function(c,p,m){h[++o]=i(c,p,m)}),h}function Uu(e){var i=yo(e);return i.length==1&&i[0][2]?_h(i[0][0],i[0][1]):function(o){return o===e||ro(o,e,i)}}function ku(e,i){return bo(e)&&mh(i)?_h(Me(e),i):function(o){var h=Mo(o,e);return h===r&&h===i?Po(o,e):Ri(i,h,V|U)}}function Cn(e,i,o,h,c){e!==i&&Js(i,function(p,m){if(c||(c=new Te),_t(p))Up(e,i,m,o,Cn,h,c);else{var v=h?h(Eo(e,m),p,m+"",e,i,c):r;v===r&&(v=p),Ys(e,m,v)}},qt)}function Up(e,i,o,h,c,p,m){var v=Eo(e,o),y=Eo(i,o),w=m.get(y);if(w){Ys(e,o,w);return}var A=p?p(v,y,o+"",e,i,m):r,S=A===r;if(S){var I=$(y),O=!I&&nr(y),G=!I&&!O&&Yr(y);A=y,I||O||G?$(v)?A=v:wt(v)?A=Wt(v):O?(S=!1,A=Yu(y,!0)):G?(S=!1,A=Zu(y,!0)):A=[]:Mi(y)||vr(y)?(A=v,vr(v)?A=qh(v):(!_t(v)||We(v))&&(A=gh(y))):S=!1}S&&(m.set(y,A),c(A,y,h,p,m),m.delete(y)),Ys(e,o,A)}function Gu(e,i){var o=e.length;if(o)return i+=i<0?o:0,Ve(i,o)?e[i]:r}function Du(e,i,o){i.length?i=gt(i,function(p){return $(p)?function(m){return gr(m,p.length===1?p[0]:p)}:p}):i=[jt];var h=-1;i=gt(i,Jt(k()));var c=Bu(e,function(p,m,v){var y=gt(i,function(w){return w(p)});return{criteria:y,index:++h,value:p}});return lf(c,function(p,m){return Yp(p,m,o)})}function kp(e,i){return zu(e,i,function(o,h){return Po(e,h)})}function zu(e,i,o){for(var h=-1,c=i.length,p={};++h<c;){var m=i[h],v=gr(e,m);o(v,m)&&Si(p,rr(m,e),v)}return p}function Gp(e){return function(i){return gr(i,e)}}function so(e,i,o,h){var c=h?hf:Gr,p=-1,m=i.length,v=e;for(e===i&&(i=Wt(i)),o&&(v=gt(e,Jt(o)));++p<m;)for(var y=0,w=i[p],A=o?o(w):w;(y=c(v,A,y,h))>-1;)v!==e&&fn.call(v,y,1),fn.call(e,y,1);return e}function Hu(e,i){for(var o=e?i.length:0,h=o-1;o--;){var c=i[o];if(o==h||c!==p){var p=c;Ve(c)?fn.call(e,c,1):ho(e,c)}}return e}function oo(e,i){return e+mn(bu()*(i-e+1))}function Dp(e,i,o,h){for(var c=-1,p=Ft(gn((i-e)/(o||1)),0),m=T(p);p--;)m[h?p:++c]=e,e+=o;return m}function ao(e,i){var o="";if(!e||i<1||i>j)return o;do i%2&&(o+=e),i=mn(i/2),i&&(e+=e);while(i);return o}function q(e,i){return wo(vh(e,i,jt),e+"")}function zp(e){return wu(Zr(e))}function Hp(e,i){var o=Zr(e);return Pn(o,pr(i,0,o.length))}function Si(e,i,o,h){if(!_t(e))return e;i=rr(i,e);for(var c=-1,p=i.length,m=p-1,v=e;v!=null&&++c<p;){var y=Me(i[c]),w=o;if(y==="__proto__"||y==="constructor"||y==="prototype")return e;if(c!=m){var A=v[y];w=h?h(A,y,v):r,w===r&&(w=_t(A)?A:Ve(i[c+1])?[]:{})}Ei(v,y,w),v=v[y]}return e}var $u=_n?function(e,i){return _n.set(e,i),e}:jt,$p=pn?function(e,i){return pn(e,"toString",{configurable:!0,enumerable:!1,value:Lo(i),writable:!0})}:jt;function Vp(e){return Pn(Zr(e))}function le(e,i,o){var h=-1,c=e.length;i<0&&(i=-i>c?0:c+i),o=o>c?c:o,o<0&&(o+=c),c=i>o?0:o-i>>>0,i>>>=0;for(var p=T(c);++h<c;)p[h]=e[h+i];return p}function Wp(e,i){var o;return tr(e,function(h,c,p){return o=i(h,c,p),!o}),!!o}function En(e,i,o){var h=0,c=e==null?h:e.length;if(typeof i=="number"&&i===i&&c<=Xc){for(;h<c;){var p=h+c>>>1,m=e[p];m!==null&&!te(m)&&(o?m<=i:m<i)?h=p+1:c=p}return c}return uo(e,i,jt,o)}function uo(e,i,o,h){var c=0,p=e==null?0:e.length;if(p===0)return 0;i=o(i);for(var m=i!==i,v=i===null,y=te(i),w=i===r;c<p;){var A=mn((c+p)/2),S=o(e[A]),I=S!==r,O=S===null,G=S===S,X=te(S);if(m)var D=h||G;else w?D=G&&(h||I):v?D=G&&I&&(h||!O):y?D=G&&I&&!O&&(h||!X):O||X?D=!1:D=h?S<=i:S<i;D?c=A+1:p=A}return Bt(p,Wc)}function Vu(e,i){for(var o=-1,h=e.length,c=0,p=[];++o<h;){var m=e[o],v=i?i(m):m;if(!o||!be(v,y)){var y=v;p[c++]=m===0?0:m}}return p}function Wu(e){return typeof e=="number"?e:te(e)?Kt:+e}function Qt(e){if(typeof e=="string")return e;if($(e))return gt(e,Qt)+"";if(te(e))return Cu?Cu.call(e):"";var i=e+"";return i=="0"&&1/e==-L?"-0":i}function er(e,i,o){var h=-1,c=rn,p=e.length,m=!0,v=[],y=v;if(o)m=!1,c=Us;else if(p>=a){var w=i?null:rg(e);if(w)return sn(w);m=!1,c=vi,y=new fr}else y=i?[]:v;t:for(;++h<p;){var A=e[h],S=i?i(A):A;if(A=o||A!==0?A:0,m&&S===S){for(var I=y.length;I--;)if(y[I]===S)continue t;i&&y.push(S),v.push(A)}else c(y,S,o)||(y!==v&&y.push(S),v.push(A))}return v}function ho(e,i){return i=rr(i,e),e=xh(e,i),e==null||delete e[Me(ce(i))]}function Xu(e,i,o,h){return Si(e,i,o(gr(e,i)),h)}function wn(e,i,o,h){for(var c=e.length,p=h?c:-1;(h?p--:++p<c)&&i(e[p],p,e););return o?le(e,h?0:p,h?p+1:c):le(e,h?p+1:0,h?c:p)}function qu(e,i){var o=e;return o instanceof Z&&(o=o.value()),ks(i,function(h,c){return c.func.apply(c.thisArg,Ze([h],c.args))},o)}function lo(e,i,o){var h=e.length;if(h<2)return h?er(e[0]):[];for(var c=-1,p=T(h);++c<h;)for(var m=e[c],v=-1;++v<h;)v!=c&&(p[c]=wi(p[c]||m,e[v],i,o));return er(Lt(p,1),i,o)}function ju(e,i,o){for(var h=-1,c=e.length,p=i.length,m={};++h<c;){var v=h<p?i[h]:r;o(m,e[h],v)}return m}function co(e){return wt(e)?e:[]}function fo(e){return typeof e=="function"?e:jt}function rr(e,i){return $(e)?e:bo(e,i)?[e]:Ch(st(e))}var Xp=q;function ir(e,i,o){var h=e.length;return o=o===r?h:o,!i&&o>=h?e:le(e,i,o)}var Ku=Pf||function(e){return Ot.clearTimeout(e)};function Yu(e,i){if(i)return e.slice();var o=e.length,h=_u?_u(o):new e.constructor(o);return e.copy(h),h}function po(e){var i=new e.constructor(e.byteLength);return new cn(i).set(new cn(e)),i}function qp(e,i){var o=i?po(e.buffer):e.buffer;return new e.constructor(o,e.byteOffset,e.byteLength)}function jp(e){var i=new e.constructor(e.source,Pa.exec(e));return i.lastIndex=e.lastIndex,i}function Kp(e){return Ci?ct(Ci.call(e)):{}}function Zu(e,i){var o=i?po(e.buffer):e.buffer;return new e.constructor(o,e.byteOffset,e.length)}function Ju(e,i){if(e!==i){var o=e!==r,h=e===null,c=e===e,p=te(e),m=i!==r,v=i===null,y=i===i,w=te(i);if(!v&&!w&&!p&&e>i||p&&m&&y&&!v&&!w||h&&m&&y||!o&&y||!c)return 1;if(!h&&!p&&!w&&e<i||w&&o&&c&&!h&&!p||v&&o&&c||!m&&c||!y)return-1}return 0}function Yp(e,i,o){for(var h=-1,c=e.criteria,p=i.criteria,m=c.length,v=o.length;++h<m;){var y=Ju(c[h],p[h]);if(y){if(h>=v)return y;var w=o[h];return y*(w=="desc"?-1:1)}}return e.index-i.index}function Qu(e,i,o,h){for(var c=-1,p=e.length,m=o.length,v=-1,y=i.length,w=Ft(p-m,0),A=T(y+w),S=!h;++v<y;)A[v]=i[v];for(;++c<m;)(S||c<p)&&(A[o[c]]=e[c]);for(;w--;)A[v++]=e[c++];return A}function th(e,i,o,h){for(var c=-1,p=e.length,m=-1,v=o.length,y=-1,w=i.length,A=Ft(p-v,0),S=T(A+w),I=!h;++c<A;)S[c]=e[c];for(var O=c;++y<w;)S[O+y]=i[y];for(;++m<v;)(I||c<p)&&(S[O+o[m]]=e[c++]);return S}function Wt(e,i){var o=-1,h=e.length;for(i||(i=T(h));++o<h;)i[o]=e[o];return i}function Ne(e,i,o,h){var c=!o;o||(o={});for(var p=-1,m=i.length;++p<m;){var v=i[p],y=h?h(o[v],e[v],v,o,e):r;y===r&&(y=e[v]),c?ze(o,v,y):Ei(o,v,y)}return o}function Zp(e,i){return Ne(e,To(e),i)}function Jp(e,i){return Ne(e,fh(e),i)}function An(e,i){return function(o,h){var c=$(o)?rf:yp,p=i?i():{};return c(o,e,k(h,2),p)}}function qr(e){return q(function(i,o){var h=-1,c=o.length,p=c>1?o[c-1]:r,m=c>2?o[2]:r;for(p=e.length>3&&typeof p=="function"?(c--,p):r,m&&zt(o[0],o[1],m)&&(p=c<3?r:p,c=1),i=ct(i);++h<c;){var v=o[h];v&&e(i,v,h,p)}return i})}function eh(e,i){return function(o,h){if(o==null)return o;if(!Xt(o))return e(o,h);for(var c=o.length,p=i?c:-1,m=ct(o);(i?p--:++p<c)&&h(m[p],p,m)!==!1;);return o}}function rh(e){return function(i,o,h){for(var c=-1,p=ct(i),m=h(i),v=m.length;v--;){var y=m[e?v:++c];if(o(p[y],y,p)===!1)break}return i}}function Qp(e,i,o){var h=i&B,c=Ii(e);function p(){var m=this&&this!==Ot&&this instanceof p?c:e;return m.apply(h?o:this,arguments)}return p}function ih(e){return function(i){i=st(i);var o=Dr(i)?ye(i):r,h=o?o[0]:i.charAt(0),c=o?ir(o,1).join(""):i.slice(1);return h[e]()+c}}function jr(e){return function(i){return ks(el(tl(i).replace(Hd,"")),e,"")}}function Ii(e){return function(){var i=arguments;switch(i.length){case 0:return new e;case 1:return new e(i[0]);case 2:return new e(i[0],i[1]);case 3:return new e(i[0],i[1],i[2]);case 4:return new e(i[0],i[1],i[2],i[3]);case 5:return new e(i[0],i[1],i[2],i[3],i[4]);case 6:return new e(i[0],i[1],i[2],i[3],i[4],i[5]);case 7:return new e(i[0],i[1],i[2],i[3],i[4],i[5],i[6])}var o=Xr(e.prototype),h=e.apply(o,i);return _t(h)?h:o}}function tg(e,i,o){var h=Ii(e);function c(){for(var p=arguments.length,m=T(p),v=p,y=Kr(c);v--;)m[v]=arguments[v];var w=p<3&&m[0]!==y&&m[p-1]!==y?[]:Je(m,y);if(p-=w.length,p<o)return uh(e,i,Rn,c.placeholder,r,m,w,r,r,o-p);var A=this&&this!==Ot&&this instanceof c?h:e;return Zt(A,this,m)}return c}function nh(e){return function(i,o,h){var c=ct(i);if(!Xt(i)){var p=k(o,3);i=Nt(i),o=function(v){return p(c[v],v,c)}}var m=e(i,o,h);return m>-1?c[p?i[m]:m]:r}}function sh(e){return $e(function(i){var o=i.length,h=o,c=ue.prototype.thru;for(e&&i.reverse();h--;){var p=i[h];if(typeof p!="function")throw new ae(l);if(c&&!m&&Nn(p)=="wrapper")var m=new ue([],!0)}for(h=m?h:o;++h<o;){p=i[h];var v=Nn(p),y=v=="wrapper"?xo(p):r;y&&Co(y[0])&&y[1]==(Vt|Tt|kt|Ue)&&!y[4].length&&y[9]==1?m=m[Nn(y[0])].apply(m,y[3]):m=p.length==1&&Co(p)?m[v]():m.thru(p)}return function(){var w=arguments,A=w[0];if(m&&w.length==1&&$(A))return m.plant(A).value();for(var S=0,I=o?i[S].apply(this,w):A;++S<o;)I=i[S].call(this,I);return I}})}function Rn(e,i,o,h,c,p,m,v,y,w){var A=i&Vt,S=i&B,I=i&mt,O=i&(Tt|me),G=i&hr,X=I?r:Ii(e);function D(){for(var K=arguments.length,Q=T(K),ee=K;ee--;)Q[ee]=arguments[ee];if(O)var Ht=Kr(D),re=df(Q,Ht);if(h&&(Q=Qu(Q,h,c,O)),p&&(Q=th(Q,p,m,O)),K-=re,O&&K<w){var At=Je(Q,Ht);return uh(e,i,Rn,D.placeholder,o,Q,At,v,y,w-K)}var Ce=S?o:this,qe=I?Ce[e]:e;return K=Q.length,v?Q=yg(Q,v):G&&K>1&&Q.reverse(),A&&y<K&&(Q.length=y),this&&this!==Ot&&this instanceof D&&(qe=X||Ii(qe)),qe.apply(Ce,Q)}return D}function oh(e,i){return function(o,h){return Sp(o,e,i(h),{})}}function Sn(e,i){return function(o,h){var c;if(o===r&&h===r)return i;if(o!==r&&(c=o),h!==r){if(c===r)return h;typeof o=="string"||typeof h=="string"?(o=Qt(o),h=Qt(h)):(o=Wu(o),h=Wu(h)),c=e(o,h)}return c}}function go(e){return $e(function(i){return i=gt(i,Jt(k())),q(function(o){var h=this;return e(i,function(c){return Zt(c,h,o)})})})}function In(e,i){i=i===r?" ":Qt(i);var o=i.length;if(o<2)return o?ao(i,e):i;var h=ao(i,gn(e/zr(i)));return Dr(i)?ir(ye(h),0,e).join(""):h.slice(0,e)}function eg(e,i,o,h){var c=i&B,p=Ii(e);function m(){for(var v=-1,y=arguments.length,w=-1,A=h.length,S=T(A+y),I=this&&this!==Ot&&this instanceof m?p:e;++w<A;)S[w]=h[w];for(;y--;)S[w++]=arguments[++v];return Zt(I,c?o:this,S)}return m}function ah(e){return function(i,o,h){return h&&typeof h!="number"&&zt(i,o,h)&&(o=h=r),i=Xe(i),o===r?(o=i,i=0):o=Xe(o),h=h===r?i<o?1:-1:Xe(h),Dp(i,o,h,e)}}function Fn(e){return function(i,o){return typeof i=="string"&&typeof o=="string"||(i=de(i),o=de(o)),e(i,o)}}function uh(e,i,o,h,c,p,m,v,y,w){var A=i&Tt,S=A?m:r,I=A?r:m,O=A?p:r,G=A?r:p;i|=A?kt:_e,i&=~(A?_e:kt),i&ge||(i&=~(B|mt));var X=[e,i,c,O,S,G,I,v,y,w],D=o.apply(r,X);return Co(e)&&yh(D,X),D.placeholder=h,Th(D,e,i)}function mo(e){var i=It[e];return function(o,h){if(o=de(o),h=h==null?0:Bt(W(h),292),h&&Tu(o)){var c=(st(o)+"e").split("e"),p=i(c[0]+"e"+(+c[1]+h));return c=(st(p)+"e").split("e"),+(c[0]+"e"+(+c[1]-h))}return i(o)}}var rg=Vr&&1/sn(new Vr([,-0]))[1]==L?function(e){return new Vr(e)}:ko;function hh(e){return function(i){var o=Ut(i);return o==ve?Ws(i):o==xe?xf(i):cf(i,e(i))}}function He(e,i,o,h,c,p,m,v){var y=i&mt;if(!y&&typeof e!="function")throw new ae(l);var w=h?h.length:0;if(w||(i&=~(kt|_e),h=c=r),m=m===r?m:Ft(W(m),0),v=v===r?v:W(v),w-=c?c.length:0,i&_e){var A=h,S=c;h=c=r}var I=y?r:xo(e),O=[e,i,o,h,c,A,S,p,m,v];if(I&&_g(O,I),e=O[0],i=O[1],o=O[2],h=O[3],c=O[4],v=O[9]=O[9]===r?y?0:e.length:Ft(O[9]-w,0),!v&&i&(Tt|me)&&(i&=~(Tt|me)),!i||i==B)var G=Qp(e,i,o);else i==Tt||i==me?G=tg(e,i,v):(i==kt||i==(B|kt))&&!c.length?G=eg(e,i,o,h):G=Rn.apply(r,O);var X=I?$u:yh;return Th(X(G,O),e,i)}function lh(e,i,o,h){return e===r||be(e,$r[o])&&!ot.call(h,o)?i:e}function ch(e,i,o,h,c,p){return _t(e)&&_t(i)&&(p.set(i,e),Cn(e,i,r,ch,p),p.delete(i)),e}function ig(e){return Mi(e)?r:e}function dh(e,i,o,h,c,p){var m=o&V,v=e.length,y=i.length;if(v!=y&&!(m&&y>v))return!1;var w=p.get(e),A=p.get(i);if(w&&A)return w==i&&A==e;var S=-1,I=!0,O=o&U?new fr:r;for(p.set(e,i),p.set(i,e);++S<v;){var G=e[S],X=i[S];if(h)var D=m?h(X,G,S,i,e,p):h(G,X,S,e,i,p);if(D!==r){if(D)continue;I=!1;break}if(O){if(!Gs(i,function(K,Q){if(!vi(O,Q)&&(G===K||c(G,K,o,h,p)))return O.push(Q)})){I=!1;break}}else if(!(G===X||c(G,X,o,h,p))){I=!1;break}}return p.delete(e),p.delete(i),I}function ng(e,i,o,h,c,p,m){switch(o){case Ur:if(e.byteLength!=i.byteLength||e.byteOffset!=i.byteOffset)return!1;e=e.buffer,i=i.buffer;case _i:return!(e.byteLength!=i.byteLength||!p(new cn(e),new cn(i)));case ci:case di:case fi:return be(+e,+i);case Yi:return e.name==i.name&&e.message==i.message;case pi:case gi:return e==i+"";case ve:var v=Ws;case xe:var y=h&V;if(v||(v=sn),e.size!=i.size&&!y)return!1;var w=m.get(e);if(w)return w==i;h|=U,m.set(e,i);var A=dh(v(e),v(i),h,c,p,m);return m.delete(e),A;case Ji:if(Ci)return Ci.call(e)==Ci.call(i)}return!1}function sg(e,i,o,h,c,p){var m=o&V,v=_o(e),y=v.length,w=_o(i),A=w.length;if(y!=A&&!m)return!1;for(var S=y;S--;){var I=v[S];if(!(m?I in i:ot.call(i,I)))return!1}var O=p.get(e),G=p.get(i);if(O&&G)return O==i&&G==e;var X=!0;p.set(e,i),p.set(i,e);for(var D=m;++S<y;){I=v[S];var K=e[I],Q=i[I];if(h)var ee=m?h(Q,K,I,i,e,p):h(K,Q,I,e,i,p);if(!(ee===r?K===Q||c(K,Q,o,h,p):ee)){X=!1;break}D||(D=I=="constructor")}if(X&&!D){var Ht=e.constructor,re=i.constructor;Ht!=re&&"constructor"in e&&"constructor"in i&&!(typeof Ht=="function"&&Ht instanceof Ht&&typeof re=="function"&&re instanceof re)&&(X=!1)}return p.delete(e),p.delete(i),X}function $e(e){return wo(vh(e,r,Rh),e+"")}function _o(e){return Mu(e,Nt,To)}function vo(e){return Mu(e,qt,fh)}var xo=_n?function(e){return _n.get(e)}:ko;function Nn(e){for(var i=e.name+"",o=Wr[i],h=ot.call(Wr,i)?o.length:0;h--;){var c=o[h],p=c.func;if(p==null||p==e)return c.name}return i}function Kr(e){var i=ot.call(f,"placeholder")?f:e;return i.placeholder}function k(){var e=f.iteratee||Bo;return e=e===Bo?Lu:e,arguments.length?e(arguments[0],arguments[1]):e}function Mn(e,i){var o=e.__data__;return fg(i)?o[typeof i=="string"?"string":"hash"]:o.map}function yo(e){for(var i=Nt(e),o=i.length;o--;){var h=i[o],c=e[h];i[o]=[h,c,mh(c)]}return i}function mr(e,i){var o=mf(e,i);return Ou(o)?o:r}function og(e){var i=ot.call(e,cr),o=e[cr];try{e[cr]=r;var h=!0}catch{}var c=hn.call(e);return h&&(i?e[cr]=o:delete e[cr]),c}var To=qs?function(e){return e==null?[]:(e=ct(e),Ye(qs(e),function(i){return xu.call(e,i)}))}:Go,fh=qs?function(e){for(var i=[];e;)Ze(i,To(e)),e=dn(e);return i}:Go,Ut=Dt;(js&&Ut(new js(new ArrayBuffer(1)))!=Ur||yi&&Ut(new yi)!=ve||Ks&&Ut(Ks.resolve())!=Ia||Vr&&Ut(new Vr)!=xe||Ti&&Ut(new Ti)!=mi)&&(Ut=function(e){var i=Dt(e),o=i==ke?e.constructor:r,h=o?_r(o):"";if(h)switch(h){case Hf:return Ur;case $f:return ve;case Vf:return Ia;case Wf:return xe;case Xf:return mi}return i});function ag(e,i,o){for(var h=-1,c=o.length;++h<c;){var p=o[h],m=p.size;switch(p.type){case"drop":e+=m;break;case"dropRight":i-=m;break;case"take":i=Bt(i,e+m);break;case"takeRight":e=Ft(e,i-m);break}}return{start:e,end:i}}function ug(e){var i=e.match(fd);return i?i[1].split(pd):[]}function ph(e,i,o){i=rr(i,e);for(var h=-1,c=i.length,p=!1;++h<c;){var m=Me(i[h]);if(!(p=e!=null&&o(e,m)))break;e=e[m]}return p||++h!=c?p:(c=e==null?0:e.length,!!c&&Gn(c)&&Ve(m,c)&&($(e)||vr(e)))}function hg(e){var i=e.length,o=new e.constructor(i);return i&&typeof e[0]=="string"&&ot.call(e,"index")&&(o.index=e.index,o.input=e.input),o}function gh(e){return typeof e.constructor=="function"&&!Fi(e)?Xr(dn(e)):{}}function lg(e,i,o){var h=e.constructor;switch(i){case _i:return po(e);case ci:case di:return new h(+e);case Ur:return qp(e,o);case xs:case ys:case Ts:case bs:case Cs:case Es:case ws:case As:case Rs:return Zu(e,o);case ve:return new h;case fi:case gi:return new h(e);case pi:return jp(e);case xe:return new h;case Ji:return Kp(e)}}function cg(e,i){var o=i.length;if(!o)return e;var h=o-1;return i[h]=(o>1?"& ":"")+i[h],i=i.join(o>2?", ":" "),e.replace(dd,`{
/* [wrapped with `+i+`] */
`)}function dg(e){return $(e)||vr(e)||!!(yu&&e&&e[yu])}function Ve(e,i){var o=typeof e;return i=i??j,!!i&&(o=="number"||o!="symbol"&&Cd.test(e))&&e>-1&&e%1==0&&e<i}function zt(e,i,o){if(!_t(o))return!1;var h=typeof i;return(h=="number"?Xt(o)&&Ve(i,o.length):h=="string"&&i in o)?be(o[i],e):!1}function bo(e,i){if($(e))return!1;var o=typeof e;return o=="number"||o=="symbol"||o=="boolean"||e==null||te(e)?!0:ud.test(e)||!ad.test(e)||i!=null&&e in ct(i)}function fg(e){var i=typeof e;return i=="string"||i=="number"||i=="symbol"||i=="boolean"?e!=="__proto__":e===null}function Co(e){var i=Nn(e),o=f[i];if(typeof o!="function"||!(i in Z.prototype))return!1;if(e===o)return!0;var h=xo(o);return!!h&&e===h[0]}function pg(e){return!!mu&&mu in e}var gg=an?We:Do;function Fi(e){var i=e&&e.constructor,o=typeof i=="function"&&i.prototype||$r;return e===o}function mh(e){return e===e&&!_t(e)}function _h(e,i){return function(o){return o==null?!1:o[e]===i&&(i!==r||e in ct(o))}}function mg(e){var i=Un(e,function(h){return o.size===_&&o.clear(),h}),o=i.cache;return i}function _g(e,i){var o=e[1],h=i[1],c=o|h,p=c<(B|mt|Vt),m=h==Vt&&o==Tt||h==Vt&&o==Ue&&e[7].length<=i[8]||h==(Vt|Ue)&&i[7].length<=i[8]&&o==Tt;if(!(p||m))return e;h&B&&(e[2]=i[2],c|=o&B?0:ge);var v=i[3];if(v){var y=e[3];e[3]=y?Qu(y,v,i[4]):v,e[4]=y?Je(e[3],C):i[4]}return v=i[5],v&&(y=e[5],e[5]=y?th(y,v,i[6]):v,e[6]=y?Je(e[5],C):i[6]),v=i[7],v&&(e[7]=v),h&Vt&&(e[8]=e[8]==null?i[8]:Bt(e[8],i[8])),e[9]==null&&(e[9]=i[9]),e[0]=i[0],e[1]=c,e}function vg(e){var i=[];if(e!=null)for(var o in ct(e))i.push(o);return i}function xg(e){return hn.call(e)}function vh(e,i,o){return i=Ft(i===r?e.length-1:i,0),function(){for(var h=arguments,c=-1,p=Ft(h.length-i,0),m=T(p);++c<p;)m[c]=h[i+c];c=-1;for(var v=T(i+1);++c<i;)v[c]=h[c];return v[i]=o(m),Zt(e,this,v)}}function xh(e,i){return i.length<2?e:gr(e,le(i,0,-1))}function yg(e,i){for(var o=e.length,h=Bt(i.length,o),c=Wt(e);h--;){var p=i[h];e[h]=Ve(p,o)?c[p]:r}return e}function Eo(e,i){if(!(i==="constructor"&&typeof e[i]=="function")&&i!="__proto__")return e[i]}var yh=bh($u),Ni=Lf||function(e,i){return Ot.setTimeout(e,i)},wo=bh($p);function Th(e,i,o){var h=i+"";return wo(e,cg(h,Tg(ug(h),o)))}function bh(e){var i=0,o=0;return function(){var h=Gf(),c=qi-(h-o);if(o=h,c>0){if(++i>=vs)return arguments[0]}else i=0;return e.apply(r,arguments)}}function Pn(e,i){var o=-1,h=e.length,c=h-1;for(i=i===r?h:i;++o<i;){var p=oo(o,c),m=e[p];e[p]=e[o],e[o]=m}return e.length=i,e}var Ch=mg(function(e){var i=[];return e.charCodeAt(0)===46&&i.push(""),e.replace(hd,function(o,h,c,p){i.push(c?p.replace(_d,"$1"):h||o)}),i});function Me(e){if(typeof e=="string"||te(e))return e;var i=e+"";return i=="0"&&1/e==-L?"-0":i}function _r(e){if(e!=null){try{return un.call(e)}catch{}try{return e+""}catch{}}return""}function Tg(e,i){return oe(qc,function(o){var h="_."+o[0];i&o[1]&&!rn(e,h)&&e.push(h)}),e.sort()}function Eh(e){if(e instanceof Z)return e.clone();var i=new ue(e.__wrapped__,e.__chain__);return i.__actions__=Wt(e.__actions__),i.__index__=e.__index__,i.__values__=e.__values__,i}function bg(e,i,o){(o?zt(e,i,o):i===r)?i=1:i=Ft(W(i),0);var h=e==null?0:e.length;if(!h||i<1)return[];for(var c=0,p=0,m=T(gn(h/i));c<h;)m[p++]=le(e,c,c+=i);return m}function Cg(e){for(var i=-1,o=e==null?0:e.length,h=0,c=[];++i<o;){var p=e[i];p&&(c[h++]=p)}return c}function Eg(){var e=arguments.length;if(!e)return[];for(var i=T(e-1),o=arguments[0],h=e;h--;)i[h-1]=arguments[h];return Ze($(o)?Wt(o):[o],Lt(i,1))}var wg=q(function(e,i){return wt(e)?wi(e,Lt(i,1,wt,!0)):[]}),Ag=q(function(e,i){var o=ce(i);return wt(o)&&(o=r),wt(e)?wi(e,Lt(i,1,wt,!0),k(o,2)):[]}),Rg=q(function(e,i){var o=ce(i);return wt(o)&&(o=r),wt(e)?wi(e,Lt(i,1,wt,!0),r,o):[]});function Sg(e,i,o){var h=e==null?0:e.length;return h?(i=o||i===r?1:W(i),le(e,i<0?0:i,h)):[]}function Ig(e,i,o){var h=e==null?0:e.length;return h?(i=o||i===r?1:W(i),i=h-i,le(e,0,i<0?0:i)):[]}function Fg(e,i){return e&&e.length?wn(e,k(i,3),!0,!0):[]}function Ng(e,i){return e&&e.length?wn(e,k(i,3),!0):[]}function Mg(e,i,o,h){var c=e==null?0:e.length;return c?(o&&typeof o!="number"&&zt(e,i,o)&&(o=0,h=c),Ep(e,i,o,h)):[]}function wh(e,i,o){var h=e==null?0:e.length;if(!h)return-1;var c=o==null?0:W(o);return c<0&&(c=Ft(h+c,0)),nn(e,k(i,3),c)}function Ah(e,i,o){var h=e==null?0:e.length;if(!h)return-1;var c=h-1;return o!==r&&(c=W(o),c=o<0?Ft(h+c,0):Bt(c,h-1)),nn(e,k(i,3),c,!0)}function Rh(e){var i=e==null?0:e.length;return i?Lt(e,1):[]}function Pg(e){var i=e==null?0:e.length;return i?Lt(e,L):[]}function Og(e,i){var o=e==null?0:e.length;return o?(i=i===r?1:W(i),Lt(e,i)):[]}function Lg(e){for(var i=-1,o=e==null?0:e.length,h={};++i<o;){var c=e[i];h[c[0]]=c[1]}return h}function Sh(e){return e&&e.length?e[0]:r}function Bg(e,i,o){var h=e==null?0:e.length;if(!h)return-1;var c=o==null?0:W(o);return c<0&&(c=Ft(h+c,0)),Gr(e,i,c)}function Ug(e){var i=e==null?0:e.length;return i?le(e,0,-1):[]}var kg=q(function(e){var i=gt(e,co);return i.length&&i[0]===e[0]?eo(i):[]}),Gg=q(function(e){var i=ce(e),o=gt(e,co);return i===ce(o)?i=r:o.pop(),o.length&&o[0]===e[0]?eo(o,k(i,2)):[]}),Dg=q(function(e){var i=ce(e),o=gt(e,co);return i=typeof i=="function"?i:r,i&&o.pop(),o.length&&o[0]===e[0]?eo(o,r,i):[]});function zg(e,i){return e==null?"":Uf.call(e,i)}function ce(e){var i=e==null?0:e.length;return i?e[i-1]:r}function Hg(e,i,o){var h=e==null?0:e.length;if(!h)return-1;var c=h;return o!==r&&(c=W(o),c=c<0?Ft(h+c,0):Bt(c,h-1)),i===i?Tf(e,i,c):nn(e,uu,c,!0)}function $g(e,i){return e&&e.length?Gu(e,W(i)):r}var Vg=q(Ih);function Ih(e,i){return e&&e.length&&i&&i.length?so(e,i):e}function Wg(e,i,o){return e&&e.length&&i&&i.length?so(e,i,k(o,2)):e}function Xg(e,i,o){return e&&e.length&&i&&i.length?so(e,i,r,o):e}var qg=$e(function(e,i){var o=e==null?0:e.length,h=Zs(e,i);return Hu(e,gt(i,function(c){return Ve(c,o)?+c:c}).sort(Ju)),h});function jg(e,i){var o=[];if(!(e&&e.length))return o;var h=-1,c=[],p=e.length;for(i=k(i,3);++h<p;){var m=e[h];i(m,h,e)&&(o.push(m),c.push(h))}return Hu(e,c),o}function Ao(e){return e==null?e:zf.call(e)}function Kg(e,i,o){var h=e==null?0:e.length;return h?(o&&typeof o!="number"&&zt(e,i,o)?(i=0,o=h):(i=i==null?0:W(i),o=o===r?h:W(o)),le(e,i,o)):[]}function Yg(e,i){return En(e,i)}function Zg(e,i,o){return uo(e,i,k(o,2))}function Jg(e,i){var o=e==null?0:e.length;if(o){var h=En(e,i);if(h<o&&be(e[h],i))return h}return-1}function Qg(e,i){return En(e,i,!0)}function tm(e,i,o){return uo(e,i,k(o,2),!0)}function em(e,i){var o=e==null?0:e.length;if(o){var h=En(e,i,!0)-1;if(be(e[h],i))return h}return-1}function rm(e){return e&&e.length?Vu(e):[]}function im(e,i){return e&&e.length?Vu(e,k(i,2)):[]}function nm(e){var i=e==null?0:e.length;return i?le(e,1,i):[]}function sm(e,i,o){return e&&e.length?(i=o||i===r?1:W(i),le(e,0,i<0?0:i)):[]}function om(e,i,o){var h=e==null?0:e.length;return h?(i=o||i===r?1:W(i),i=h-i,le(e,i<0?0:i,h)):[]}function am(e,i){return e&&e.length?wn(e,k(i,3),!1,!0):[]}function um(e,i){return e&&e.length?wn(e,k(i,3)):[]}var hm=q(function(e){return er(Lt(e,1,wt,!0))}),lm=q(function(e){var i=ce(e);return wt(i)&&(i=r),er(Lt(e,1,wt,!0),k(i,2))}),cm=q(function(e){var i=ce(e);return i=typeof i=="function"?i:r,er(Lt(e,1,wt,!0),r,i)});function dm(e){return e&&e.length?er(e):[]}function fm(e,i){return e&&e.length?er(e,k(i,2)):[]}function pm(e,i){return i=typeof i=="function"?i:r,e&&e.length?er(e,r,i):[]}function Ro(e){if(!(e&&e.length))return[];var i=0;return e=Ye(e,function(o){if(wt(o))return i=Ft(o.length,i),!0}),$s(i,function(o){return gt(e,Ds(o))})}function Fh(e,i){if(!(e&&e.length))return[];var o=Ro(e);return i==null?o:gt(o,function(h){return Zt(i,r,h)})}var gm=q(function(e,i){return wt(e)?wi(e,i):[]}),mm=q(function(e){return lo(Ye(e,wt))}),_m=q(function(e){var i=ce(e);return wt(i)&&(i=r),lo(Ye(e,wt),k(i,2))}),vm=q(function(e){var i=ce(e);return i=typeof i=="function"?i:r,lo(Ye(e,wt),r,i)}),xm=q(Ro);function ym(e,i){return ju(e||[],i||[],Ei)}function Tm(e,i){return ju(e||[],i||[],Si)}var bm=q(function(e){var i=e.length,o=i>1?e[i-1]:r;return o=typeof o=="function"?(e.pop(),o):r,Fh(e,o)});function Nh(e){var i=f(e);return i.__chain__=!0,i}function Cm(e,i){return i(e),e}function On(e,i){return i(e)}var Em=$e(function(e){var i=e.length,o=i?e[0]:0,h=this.__wrapped__,c=function(p){return Zs(p,e)};return i>1||this.__actions__.length||!(h instanceof Z)||!Ve(o)?this.thru(c):(h=h.slice(o,+o+(i?1:0)),h.__actions__.push({func:On,args:[c],thisArg:r}),new ue(h,this.__chain__).thru(function(p){return i&&!p.length&&p.push(r),p}))});function wm(){return Nh(this)}function Am(){return new ue(this.value(),this.__chain__)}function Rm(){this.__values__===r&&(this.__values__=Wh(this.value()));var e=this.__index__>=this.__values__.length,i=e?r:this.__values__[this.__index__++];return{done:e,value:i}}function Sm(){return this}function Im(e){for(var i,o=this;o instanceof xn;){var h=Eh(o);h.__index__=0,h.__values__=r,i?c.__wrapped__=h:i=h;var c=h;o=o.__wrapped__}return c.__wrapped__=e,i}function Fm(){var e=this.__wrapped__;if(e instanceof Z){var i=e;return this.__actions__.length&&(i=new Z(this)),i=i.reverse(),i.__actions__.push({func:On,args:[Ao],thisArg:r}),new ue(i,this.__chain__)}return this.thru(Ao)}function Nm(){return qu(this.__wrapped__,this.__actions__)}var Mm=An(function(e,i,o){ot.call(e,o)?++e[o]:ze(e,o,1)});function Pm(e,i,o){var h=$(e)?ou:Cp;return o&&zt(e,i,o)&&(i=r),h(e,k(i,3))}function Om(e,i){var o=$(e)?Ye:Fu;return o(e,k(i,3))}var Lm=nh(wh),Bm=nh(Ah);function Um(e,i){return Lt(Ln(e,i),1)}function km(e,i){return Lt(Ln(e,i),L)}function Gm(e,i,o){return o=o===r?1:W(o),Lt(Ln(e,i),o)}function Mh(e,i){var o=$(e)?oe:tr;return o(e,k(i,3))}function Ph(e,i){var o=$(e)?nf:Iu;return o(e,k(i,3))}var Dm=An(function(e,i,o){ot.call(e,o)?e[o].push(i):ze(e,o,[i])});function zm(e,i,o,h){e=Xt(e)?e:Zr(e),o=o&&!h?W(o):0;var c=e.length;return o<0&&(o=Ft(c+o,0)),Dn(e)?o<=c&&e.indexOf(i,o)>-1:!!c&&Gr(e,i,o)>-1}var Hm=q(function(e,i,o){var h=-1,c=typeof i=="function",p=Xt(e)?T(e.length):[];return tr(e,function(m){p[++h]=c?Zt(i,m,o):Ai(m,i,o)}),p}),$m=An(function(e,i,o){ze(e,o,i)});function Ln(e,i){var o=$(e)?gt:Bu;return o(e,k(i,3))}function Vm(e,i,o,h){return e==null?[]:($(i)||(i=i==null?[]:[i]),o=h?r:o,$(o)||(o=o==null?[]:[o]),Du(e,i,o))}var Wm=An(function(e,i,o){e[o?0:1].push(i)},function(){return[[],[]]});function Xm(e,i,o){var h=$(e)?ks:lu,c=arguments.length<3;return h(e,k(i,4),o,c,tr)}function qm(e,i,o){var h=$(e)?sf:lu,c=arguments.length<3;return h(e,k(i,4),o,c,Iu)}function jm(e,i){var o=$(e)?Ye:Fu;return o(e,kn(k(i,3)))}function Km(e){var i=$(e)?wu:zp;return i(e)}function Ym(e,i,o){(o?zt(e,i,o):i===r)?i=1:i=W(i);var h=$(e)?vp:Hp;return h(e,i)}function Zm(e){var i=$(e)?xp:Vp;return i(e)}function Jm(e){if(e==null)return 0;if(Xt(e))return Dn(e)?zr(e):e.length;var i=Ut(e);return i==ve||i==xe?e.size:io(e).length}function Qm(e,i,o){var h=$(e)?Gs:Wp;return o&&zt(e,i,o)&&(i=r),h(e,k(i,3))}var t0=q(function(e,i){if(e==null)return[];var o=i.length;return o>1&&zt(e,i[0],i[1])?i=[]:o>2&&zt(i[0],i[1],i[2])&&(i=[i[0]]),Du(e,Lt(i,1),[])}),Bn=Of||function(){return Ot.Date.now()};function e0(e,i){if(typeof i!="function")throw new ae(l);return e=W(e),function(){if(--e<1)return i.apply(this,arguments)}}function Oh(e,i,o){return i=o?r:i,i=e&&i==null?e.length:i,He(e,Vt,r,r,r,r,i)}function Lh(e,i){var o;if(typeof i!="function")throw new ae(l);return e=W(e),function(){return--e>0&&(o=i.apply(this,arguments)),e<=1&&(i=r),o}}var So=q(function(e,i,o){var h=B;if(o.length){var c=Je(o,Kr(So));h|=kt}return He(e,h,i,o,c)}),Bh=q(function(e,i,o){var h=B|mt;if(o.length){var c=Je(o,Kr(Bh));h|=kt}return He(i,h,e,o,c)});function Uh(e,i,o){i=o?r:i;var h=He(e,Tt,r,r,r,r,r,i);return h.placeholder=Uh.placeholder,h}function kh(e,i,o){i=o?r:i;var h=He(e,me,r,r,r,r,r,i);return h.placeholder=kh.placeholder,h}function Gh(e,i,o){var h,c,p,m,v,y,w=0,A=!1,S=!1,I=!0;if(typeof e!="function")throw new ae(l);i=de(i)||0,_t(o)&&(A=!!o.leading,S="maxWait"in o,p=S?Ft(de(o.maxWait)||0,i):p,I="trailing"in o?!!o.trailing:I);function O(At){var Ce=h,qe=c;return h=c=r,w=At,m=e.apply(qe,Ce),m}function G(At){return w=At,v=Ni(K,i),A?O(At):m}function X(At){var Ce=At-y,qe=At-w,nl=i-Ce;return S?Bt(nl,p-qe):nl}function D(At){var Ce=At-y,qe=At-w;return y===r||Ce>=i||Ce<0||S&&qe>=p}function K(){var At=Bn();if(D(At))return Q(At);v=Ni(K,X(At))}function Q(At){return v=r,I&&h?O(At):(h=c=r,m)}function ee(){v!==r&&Ku(v),w=0,h=y=c=v=r}function Ht(){return v===r?m:Q(Bn())}function re(){var At=Bn(),Ce=D(At);if(h=arguments,c=this,y=At,Ce){if(v===r)return G(y);if(S)return Ku(v),v=Ni(K,i),O(y)}return v===r&&(v=Ni(K,i)),m}return re.cancel=ee,re.flush=Ht,re}var r0=q(function(e,i){return Su(e,1,i)}),i0=q(function(e,i,o){return Su(e,de(i)||0,o)});function n0(e){return He(e,hr)}function Un(e,i){if(typeof e!="function"||i!=null&&typeof i!="function")throw new ae(l);var o=function(){var h=arguments,c=i?i.apply(this,h):h[0],p=o.cache;if(p.has(c))return p.get(c);var m=e.apply(this,h);return o.cache=p.set(c,m)||p,m};return o.cache=new(Un.Cache||De),o}Un.Cache=De;function kn(e){if(typeof e!="function")throw new ae(l);return function(){var i=arguments;switch(i.length){case 0:return!e.call(this);case 1:return!e.call(this,i[0]);case 2:return!e.call(this,i[0],i[1]);case 3:return!e.call(this,i[0],i[1],i[2])}return!e.apply(this,i)}}function s0(e){return Lh(2,e)}var o0=Xp(function(e,i){i=i.length==1&&$(i[0])?gt(i[0],Jt(k())):gt(Lt(i,1),Jt(k()));var o=i.length;return q(function(h){for(var c=-1,p=Bt(h.length,o);++c<p;)h[c]=i[c].call(this,h[c]);return Zt(e,this,h)})}),Io=q(function(e,i){var o=Je(i,Kr(Io));return He(e,kt,r,i,o)}),Dh=q(function(e,i){var o=Je(i,Kr(Dh));return He(e,_e,r,i,o)}),a0=$e(function(e,i){return He(e,Ue,r,r,r,i)});function u0(e,i){if(typeof e!="function")throw new ae(l);return i=i===r?i:W(i),q(e,i)}function h0(e,i){if(typeof e!="function")throw new ae(l);return i=i==null?0:Ft(W(i),0),q(function(o){var h=o[i],c=ir(o,0,i);return h&&Ze(c,h),Zt(e,this,c)})}function l0(e,i,o){var h=!0,c=!0;if(typeof e!="function")throw new ae(l);return _t(o)&&(h="leading"in o?!!o.leading:h,c="trailing"in o?!!o.trailing:c),Gh(e,i,{leading:h,maxWait:i,trailing:c})}function c0(e){return Oh(e,1)}function d0(e,i){return Io(fo(i),e)}function f0(){if(!arguments.length)return[];var e=arguments[0];return $(e)?e:[e]}function p0(e){return he(e,F)}function g0(e,i){return i=typeof i=="function"?i:r,he(e,F,i)}function m0(e){return he(e,b|F)}function _0(e,i){return i=typeof i=="function"?i:r,he(e,b|F,i)}function v0(e,i){return i==null||Ru(e,i,Nt(i))}function be(e,i){return e===i||e!==e&&i!==i}var x0=Fn(to),y0=Fn(function(e,i){return e>=i}),vr=Pu(function(){return arguments}())?Pu:function(e){return Ct(e)&&ot.call(e,"callee")&&!xu.call(e,"callee")},$=T.isArray,T0=tu?Jt(tu):Ip;function Xt(e){return e!=null&&Gn(e.length)&&!We(e)}function wt(e){return Ct(e)&&Xt(e)}function b0(e){return e===!0||e===!1||Ct(e)&&Dt(e)==ci}var nr=Bf||Do,C0=eu?Jt(eu):Fp;function E0(e){return Ct(e)&&e.nodeType===1&&!Mi(e)}function w0(e){if(e==null)return!0;if(Xt(e)&&($(e)||typeof e=="string"||typeof e.splice=="function"||nr(e)||Yr(e)||vr(e)))return!e.length;var i=Ut(e);if(i==ve||i==xe)return!e.size;if(Fi(e))return!io(e).length;for(var o in e)if(ot.call(e,o))return!1;return!0}function A0(e,i){return Ri(e,i)}function R0(e,i,o){o=typeof o=="function"?o:r;var h=o?o(e,i):r;return h===r?Ri(e,i,r,o):!!h}function Fo(e){if(!Ct(e))return!1;var i=Dt(e);return i==Yi||i==Kc||typeof e.message=="string"&&typeof e.name=="string"&&!Mi(e)}function S0(e){return typeof e=="number"&&Tu(e)}function We(e){if(!_t(e))return!1;var i=Dt(e);return i==Zi||i==Sa||i==jc||i==Zc}function zh(e){return typeof e=="number"&&e==W(e)}function Gn(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=j}function _t(e){var i=typeof e;return e!=null&&(i=="object"||i=="function")}function Ct(e){return e!=null&&typeof e=="object"}var Hh=ru?Jt(ru):Mp;function I0(e,i){return e===i||ro(e,i,yo(i))}function F0(e,i,o){return o=typeof o=="function"?o:r,ro(e,i,yo(i),o)}function N0(e){return $h(e)&&e!=+e}function M0(e){if(gg(e))throw new H(u);return Ou(e)}function P0(e){return e===null}function O0(e){return e==null}function $h(e){return typeof e=="number"||Ct(e)&&Dt(e)==fi}function Mi(e){if(!Ct(e)||Dt(e)!=ke)return!1;var i=dn(e);if(i===null)return!0;var o=ot.call(i,"constructor")&&i.constructor;return typeof o=="function"&&o instanceof o&&un.call(o)==Ff}var No=iu?Jt(iu):Pp;function L0(e){return zh(e)&&e>=-j&&e<=j}var Vh=nu?Jt(nu):Op;function Dn(e){return typeof e=="string"||!$(e)&&Ct(e)&&Dt(e)==gi}function te(e){return typeof e=="symbol"||Ct(e)&&Dt(e)==Ji}var Yr=su?Jt(su):Lp;function B0(e){return e===r}function U0(e){return Ct(e)&&Ut(e)==mi}function k0(e){return Ct(e)&&Dt(e)==Qc}var G0=Fn(no),D0=Fn(function(e,i){return e<=i});function Wh(e){if(!e)return[];if(Xt(e))return Dn(e)?ye(e):Wt(e);if(xi&&e[xi])return vf(e[xi]());var i=Ut(e),o=i==ve?Ws:i==xe?sn:Zr;return o(e)}function Xe(e){if(!e)return e===0?e:0;if(e=de(e),e===L||e===-L){var i=e<0?-1:1;return i*bt}return e===e?e:0}function W(e){var i=Xe(e),o=i%1;return i===i?o?i-o:i:0}function Xh(e){return e?pr(W(e),0,Yt):0}function de(e){if(typeof e=="number")return e;if(te(e))return Kt;if(_t(e)){var i=typeof e.valueOf=="function"?e.valueOf():e;e=_t(i)?i+"":i}if(typeof e!="string")return e===0?e:+e;e=cu(e);var o=yd.test(e);return o||bd.test(e)?tf(e.slice(2),o?2:8):xd.test(e)?Kt:+e}function qh(e){return Ne(e,qt(e))}function z0(e){return e?pr(W(e),-j,j):e===0?e:0}function st(e){return e==null?"":Qt(e)}var H0=qr(function(e,i){if(Fi(i)||Xt(i)){Ne(i,Nt(i),e);return}for(var o in i)ot.call(i,o)&&Ei(e,o,i[o])}),jh=qr(function(e,i){Ne(i,qt(i),e)}),zn=qr(function(e,i,o,h){Ne(i,qt(i),e,h)}),$0=qr(function(e,i,o,h){Ne(i,Nt(i),e,h)}),V0=$e(Zs);function W0(e,i){var o=Xr(e);return i==null?o:Au(o,i)}var X0=q(function(e,i){e=ct(e);var o=-1,h=i.length,c=h>2?i[2]:r;for(c&&zt(i[0],i[1],c)&&(h=1);++o<h;)for(var p=i[o],m=qt(p),v=-1,y=m.length;++v<y;){var w=m[v],A=e[w];(A===r||be(A,$r[w])&&!ot.call(e,w))&&(e[w]=p[w])}return e}),q0=q(function(e){return e.push(r,ch),Zt(Kh,r,e)});function j0(e,i){return au(e,k(i,3),Fe)}function K0(e,i){return au(e,k(i,3),Qs)}function Y0(e,i){return e==null?e:Js(e,k(i,3),qt)}function Z0(e,i){return e==null?e:Nu(e,k(i,3),qt)}function J0(e,i){return e&&Fe(e,k(i,3))}function Q0(e,i){return e&&Qs(e,k(i,3))}function t_(e){return e==null?[]:bn(e,Nt(e))}function e_(e){return e==null?[]:bn(e,qt(e))}function Mo(e,i,o){var h=e==null?r:gr(e,i);return h===r?o:h}function r_(e,i){return e!=null&&ph(e,i,wp)}function Po(e,i){return e!=null&&ph(e,i,Ap)}var i_=oh(function(e,i,o){i!=null&&typeof i.toString!="function"&&(i=hn.call(i)),e[i]=o},Lo(jt)),n_=oh(function(e,i,o){i!=null&&typeof i.toString!="function"&&(i=hn.call(i)),ot.call(e,i)?e[i].push(o):e[i]=[o]},k),s_=q(Ai);function Nt(e){return Xt(e)?Eu(e):io(e)}function qt(e){return Xt(e)?Eu(e,!0):Bp(e)}function o_(e,i){var o={};return i=k(i,3),Fe(e,function(h,c,p){ze(o,i(h,c,p),h)}),o}function a_(e,i){var o={};return i=k(i,3),Fe(e,function(h,c,p){ze(o,c,i(h,c,p))}),o}var u_=qr(function(e,i,o){Cn(e,i,o)}),Kh=qr(function(e,i,o,h){Cn(e,i,o,h)}),h_=$e(function(e,i){var o={};if(e==null)return o;var h=!1;i=gt(i,function(p){return p=rr(p,e),h||(h=p.length>1),p}),Ne(e,vo(e),o),h&&(o=he(o,b|R|F,ig));for(var c=i.length;c--;)ho(o,i[c]);return o});function l_(e,i){return Yh(e,kn(k(i)))}var c_=$e(function(e,i){return e==null?{}:kp(e,i)});function Yh(e,i){if(e==null)return{};var o=gt(vo(e),function(h){return[h]});return i=k(i),zu(e,o,function(h,c){return i(h,c[0])})}function d_(e,i,o){i=rr(i,e);var h=-1,c=i.length;for(c||(c=1,e=r);++h<c;){var p=e==null?r:e[Me(i[h])];p===r&&(h=c,p=o),e=We(p)?p.call(e):p}return e}function f_(e,i,o){return e==null?e:Si(e,i,o)}function p_(e,i,o,h){return h=typeof h=="function"?h:r,e==null?e:Si(e,i,o,h)}var Zh=hh(Nt),Jh=hh(qt);function g_(e,i,o){var h=$(e),c=h||nr(e)||Yr(e);if(i=k(i,4),o==null){var p=e&&e.constructor;c?o=h?new p:[]:_t(e)?o=We(p)?Xr(dn(e)):{}:o={}}return(c?oe:Fe)(e,function(m,v,y){return i(o,m,v,y)}),o}function m_(e,i){return e==null?!0:ho(e,i)}function __(e,i,o){return e==null?e:Xu(e,i,fo(o))}function v_(e,i,o,h){return h=typeof h=="function"?h:r,e==null?e:Xu(e,i,fo(o),h)}function Zr(e){return e==null?[]:Vs(e,Nt(e))}function x_(e){return e==null?[]:Vs(e,qt(e))}function y_(e,i,o){return o===r&&(o=i,i=r),o!==r&&(o=de(o),o=o===o?o:0),i!==r&&(i=de(i),i=i===i?i:0),pr(de(e),i,o)}function T_(e,i,o){return i=Xe(i),o===r?(o=i,i=0):o=Xe(o),e=de(e),Rp(e,i,o)}function b_(e,i,o){if(o&&typeof o!="boolean"&&zt(e,i,o)&&(i=o=r),o===r&&(typeof i=="boolean"?(o=i,i=r):typeof e=="boolean"&&(o=e,e=r)),e===r&&i===r?(e=0,i=1):(e=Xe(e),i===r?(i=e,e=0):i=Xe(i)),e>i){var h=e;e=i,i=h}if(o||e%1||i%1){var c=bu();return Bt(e+c*(i-e+Qd("1e-"+((c+"").length-1))),i)}return oo(e,i)}var C_=jr(function(e,i,o){return i=i.toLowerCase(),e+(o?Qh(i):i)});function Qh(e){return Oo(st(e).toLowerCase())}function tl(e){return e=st(e),e&&e.replace(Ed,ff).replace($d,"")}function E_(e,i,o){e=st(e),i=Qt(i);var h=e.length;o=o===r?h:pr(W(o),0,h);var c=o;return o-=i.length,o>=0&&e.slice(o,c)==i}function w_(e){return e=st(e),e&&nd.test(e)?e.replace(Na,pf):e}function A_(e){return e=st(e),e&&ld.test(e)?e.replace(Ss,"\\$&"):e}var R_=jr(function(e,i,o){return e+(o?"-":"")+i.toLowerCase()}),S_=jr(function(e,i,o){return e+(o?" ":"")+i.toLowerCase()}),I_=ih("toLowerCase");function F_(e,i,o){e=st(e),i=W(i);var h=i?zr(e):0;if(!i||h>=i)return e;var c=(i-h)/2;return In(mn(c),o)+e+In(gn(c),o)}function N_(e,i,o){e=st(e),i=W(i);var h=i?zr(e):0;return i&&h<i?e+In(i-h,o):e}function M_(e,i,o){e=st(e),i=W(i);var h=i?zr(e):0;return i&&h<i?In(i-h,o)+e:e}function P_(e,i,o){return o||i==null?i=0:i&&(i=+i),Df(st(e).replace(Is,""),i||0)}function O_(e,i,o){return(o?zt(e,i,o):i===r)?i=1:i=W(i),ao(st(e),i)}function L_(){var e=arguments,i=st(e[0]);return e.length<3?i:i.replace(e[1],e[2])}var B_=jr(function(e,i,o){return e+(o?"_":"")+i.toLowerCase()});function U_(e,i,o){return o&&typeof o!="number"&&zt(e,i,o)&&(i=o=r),o=o===r?Yt:o>>>0,o?(e=st(e),e&&(typeof i=="string"||i!=null&&!No(i))&&(i=Qt(i),!i&&Dr(e))?ir(ye(e),0,o):e.split(i,o)):[]}var k_=jr(function(e,i,o){return e+(o?" ":"")+Oo(i)});function G_(e,i,o){return e=st(e),o=o==null?0:pr(W(o),0,e.length),i=Qt(i),e.slice(o,o+i.length)==i}function D_(e,i,o){var h=f.templateSettings;o&&zt(e,i,o)&&(i=r),e=st(e),i=zn({},i,h,lh);var c=zn({},i.imports,h.imports,lh),p=Nt(c),m=Vs(c,p),v,y,w=0,A=i.interpolate||Qi,S="__p += '",I=Xs((i.escape||Qi).source+"|"+A.source+"|"+(A===Ma?vd:Qi).source+"|"+(i.evaluate||Qi).source+"|$","g"),O="//# sourceURL="+(ot.call(i,"sourceURL")?(i.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++jd+"]")+`
`;e.replace(I,function(D,K,Q,ee,Ht,re){return Q||(Q=ee),S+=e.slice(w,re).replace(wd,gf),K&&(v=!0,S+=`' +
__e(`+K+`) +
'`),Ht&&(y=!0,S+=`';
`+Ht+`;
__p += '`),Q&&(S+=`' +
((__t = (`+Q+`)) == null ? '' : __t) +
'`),w=re+D.length,D}),S+=`';
`;var G=ot.call(i,"variable")&&i.variable;if(!G)S=`with (obj) {
`+S+`
}
`;else if(md.test(G))throw new H(d);S=(y?S.replace(td,""):S).replace(ed,"$1").replace(rd,"$1;"),S="function("+(G||"obj")+`) {
`+(G?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(v?", __e = _.escape":"")+(y?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+S+`return __p
}`;var X=rl(function(){return nt(p,O+"return "+S).apply(r,m)});if(X.source=S,Fo(X))throw X;return X}function z_(e){return st(e).toLowerCase()}function H_(e){return st(e).toUpperCase()}function $_(e,i,o){if(e=st(e),e&&(o||i===r))return cu(e);if(!e||!(i=Qt(i)))return e;var h=ye(e),c=ye(i),p=du(h,c),m=fu(h,c)+1;return ir(h,p,m).join("")}function V_(e,i,o){if(e=st(e),e&&(o||i===r))return e.slice(0,gu(e)+1);if(!e||!(i=Qt(i)))return e;var h=ye(e),c=fu(h,ye(i))+1;return ir(h,0,c).join("")}function W_(e,i,o){if(e=st(e),e&&(o||i===r))return e.replace(Is,"");if(!e||!(i=Qt(i)))return e;var h=ye(e),c=du(h,ye(i));return ir(h,c).join("")}function X_(e,i){var o=Xi,h=Lr;if(_t(i)){var c="separator"in i?i.separator:c;o="length"in i?W(i.length):o,h="omission"in i?Qt(i.omission):h}e=st(e);var p=e.length;if(Dr(e)){var m=ye(e);p=m.length}if(o>=p)return e;var v=o-zr(h);if(v<1)return h;var y=m?ir(m,0,v).join(""):e.slice(0,v);if(c===r)return y+h;if(m&&(v+=y.length-v),No(c)){if(e.slice(v).search(c)){var w,A=y;for(c.global||(c=Xs(c.source,st(Pa.exec(c))+"g")),c.lastIndex=0;w=c.exec(A);)var S=w.index;y=y.slice(0,S===r?v:S)}}else if(e.indexOf(Qt(c),v)!=v){var I=y.lastIndexOf(c);I>-1&&(y=y.slice(0,I))}return y+h}function q_(e){return e=st(e),e&&id.test(e)?e.replace(Fa,bf):e}var j_=jr(function(e,i,o){return e+(o?" ":"")+i.toUpperCase()}),Oo=ih("toUpperCase");function el(e,i,o){return e=st(e),i=o?r:i,i===r?_f(e)?wf(e):uf(e):e.match(i)||[]}var rl=q(function(e,i){try{return Zt(e,r,i)}catch(o){return Fo(o)?o:new H(o)}}),K_=$e(function(e,i){return oe(i,function(o){o=Me(o),ze(e,o,So(e[o],e))}),e});function Y_(e){var i=e==null?0:e.length,o=k();return e=i?gt(e,function(h){if(typeof h[1]!="function")throw new ae(l);return[o(h[0]),h[1]]}):[],q(function(h){for(var c=-1;++c<i;){var p=e[c];if(Zt(p[0],this,h))return Zt(p[1],this,h)}})}function Z_(e){return bp(he(e,b))}function Lo(e){return function(){return e}}function J_(e,i){return e==null||e!==e?i:e}var Q_=sh(),tv=sh(!0);function jt(e){return e}function Bo(e){return Lu(typeof e=="function"?e:he(e,b))}function ev(e){return Uu(he(e,b))}function rv(e,i){return ku(e,he(i,b))}var iv=q(function(e,i){return function(o){return Ai(o,e,i)}}),nv=q(function(e,i){return function(o){return Ai(e,o,i)}});function Uo(e,i,o){var h=Nt(i),c=bn(i,h);o==null&&!(_t(i)&&(c.length||!h.length))&&(o=i,i=e,e=this,c=bn(i,Nt(i)));var p=!(_t(o)&&"chain"in o)||!!o.chain,m=We(e);return oe(c,function(v){var y=i[v];e[v]=y,m&&(e.prototype[v]=function(){var w=this.__chain__;if(p||w){var A=e(this.__wrapped__),S=A.__actions__=Wt(this.__actions__);return S.push({func:y,args:arguments,thisArg:e}),A.__chain__=w,A}return y.apply(e,Ze([this.value()],arguments))})}),e}function sv(){return Ot._===this&&(Ot._=Nf),this}function ko(){}function ov(e){return e=W(e),q(function(i){return Gu(i,e)})}var av=go(gt),uv=go(ou),hv=go(Gs);function il(e){return bo(e)?Ds(Me(e)):Gp(e)}function lv(e){return function(i){return e==null?r:gr(e,i)}}var cv=ah(),dv=ah(!0);function Go(){return[]}function Do(){return!1}function fv(){return{}}function pv(){return""}function gv(){return!0}function mv(e,i){if(e=W(e),e<1||e>j)return[];var o=Yt,h=Bt(e,Yt);i=k(i),e-=Yt;for(var c=$s(h,i);++o<e;)i(o);return c}function _v(e){return $(e)?gt(e,Me):te(e)?[e]:Wt(Ch(st(e)))}function vv(e){var i=++If;return st(e)+i}var xv=Sn(function(e,i){return e+i},0),yv=mo("ceil"),Tv=Sn(function(e,i){return e/i},1),bv=mo("floor");function Cv(e){return e&&e.length?Tn(e,jt,to):r}function Ev(e,i){return e&&e.length?Tn(e,k(i,2),to):r}function wv(e){return hu(e,jt)}function Av(e,i){return hu(e,k(i,2))}function Rv(e){return e&&e.length?Tn(e,jt,no):r}function Sv(e,i){return e&&e.length?Tn(e,k(i,2),no):r}var Iv=Sn(function(e,i){return e*i},1),Fv=mo("round"),Nv=Sn(function(e,i){return e-i},0);function Mv(e){return e&&e.length?Hs(e,jt):0}function Pv(e,i){return e&&e.length?Hs(e,k(i,2)):0}return f.after=e0,f.ary=Oh,f.assign=H0,f.assignIn=jh,f.assignInWith=zn,f.assignWith=$0,f.at=V0,f.before=Lh,f.bind=So,f.bindAll=K_,f.bindKey=Bh,f.castArray=f0,f.chain=Nh,f.chunk=bg,f.compact=Cg,f.concat=Eg,f.cond=Y_,f.conforms=Z_,f.constant=Lo,f.countBy=Mm,f.create=W0,f.curry=Uh,f.curryRight=kh,f.debounce=Gh,f.defaults=X0,f.defaultsDeep=q0,f.defer=r0,f.delay=i0,f.difference=wg,f.differenceBy=Ag,f.differenceWith=Rg,f.drop=Sg,f.dropRight=Ig,f.dropRightWhile=Fg,f.dropWhile=Ng,f.fill=Mg,f.filter=Om,f.flatMap=Um,f.flatMapDeep=km,f.flatMapDepth=Gm,f.flatten=Rh,f.flattenDeep=Pg,f.flattenDepth=Og,f.flip=n0,f.flow=Q_,f.flowRight=tv,f.fromPairs=Lg,f.functions=t_,f.functionsIn=e_,f.groupBy=Dm,f.initial=Ug,f.intersection=kg,f.intersectionBy=Gg,f.intersectionWith=Dg,f.invert=i_,f.invertBy=n_,f.invokeMap=Hm,f.iteratee=Bo,f.keyBy=$m,f.keys=Nt,f.keysIn=qt,f.map=Ln,f.mapKeys=o_,f.mapValues=a_,f.matches=ev,f.matchesProperty=rv,f.memoize=Un,f.merge=u_,f.mergeWith=Kh,f.method=iv,f.methodOf=nv,f.mixin=Uo,f.negate=kn,f.nthArg=ov,f.omit=h_,f.omitBy=l_,f.once=s0,f.orderBy=Vm,f.over=av,f.overArgs=o0,f.overEvery=uv,f.overSome=hv,f.partial=Io,f.partialRight=Dh,f.partition=Wm,f.pick=c_,f.pickBy=Yh,f.property=il,f.propertyOf=lv,f.pull=Vg,f.pullAll=Ih,f.pullAllBy=Wg,f.pullAllWith=Xg,f.pullAt=qg,f.range=cv,f.rangeRight=dv,f.rearg=a0,f.reject=jm,f.remove=jg,f.rest=u0,f.reverse=Ao,f.sampleSize=Ym,f.set=f_,f.setWith=p_,f.shuffle=Zm,f.slice=Kg,f.sortBy=t0,f.sortedUniq=rm,f.sortedUniqBy=im,f.split=U_,f.spread=h0,f.tail=nm,f.take=sm,f.takeRight=om,f.takeRightWhile=am,f.takeWhile=um,f.tap=Cm,f.throttle=l0,f.thru=On,f.toArray=Wh,f.toPairs=Zh,f.toPairsIn=Jh,f.toPath=_v,f.toPlainObject=qh,f.transform=g_,f.unary=c0,f.union=hm,f.unionBy=lm,f.unionWith=cm,f.uniq=dm,f.uniqBy=fm,f.uniqWith=pm,f.unset=m_,f.unzip=Ro,f.unzipWith=Fh,f.update=__,f.updateWith=v_,f.values=Zr,f.valuesIn=x_,f.without=gm,f.words=el,f.wrap=d0,f.xor=mm,f.xorBy=_m,f.xorWith=vm,f.zip=xm,f.zipObject=ym,f.zipObjectDeep=Tm,f.zipWith=bm,f.entries=Zh,f.entriesIn=Jh,f.extend=jh,f.extendWith=zn,Uo(f,f),f.add=xv,f.attempt=rl,f.camelCase=C_,f.capitalize=Qh,f.ceil=yv,f.clamp=y_,f.clone=p0,f.cloneDeep=m0,f.cloneDeepWith=_0,f.cloneWith=g0,f.conformsTo=v0,f.deburr=tl,f.defaultTo=J_,f.divide=Tv,f.endsWith=E_,f.eq=be,f.escape=w_,f.escapeRegExp=A_,f.every=Pm,f.find=Lm,f.findIndex=wh,f.findKey=j0,f.findLast=Bm,f.findLastIndex=Ah,f.findLastKey=K0,f.floor=bv,f.forEach=Mh,f.forEachRight=Ph,f.forIn=Y0,f.forInRight=Z0,f.forOwn=J0,f.forOwnRight=Q0,f.get=Mo,f.gt=x0,f.gte=y0,f.has=r_,f.hasIn=Po,f.head=Sh,f.identity=jt,f.includes=zm,f.indexOf=Bg,f.inRange=T_,f.invoke=s_,f.isArguments=vr,f.isArray=$,f.isArrayBuffer=T0,f.isArrayLike=Xt,f.isArrayLikeObject=wt,f.isBoolean=b0,f.isBuffer=nr,f.isDate=C0,f.isElement=E0,f.isEmpty=w0,f.isEqual=A0,f.isEqualWith=R0,f.isError=Fo,f.isFinite=S0,f.isFunction=We,f.isInteger=zh,f.isLength=Gn,f.isMap=Hh,f.isMatch=I0,f.isMatchWith=F0,f.isNaN=N0,f.isNative=M0,f.isNil=O0,f.isNull=P0,f.isNumber=$h,f.isObject=_t,f.isObjectLike=Ct,f.isPlainObject=Mi,f.isRegExp=No,f.isSafeInteger=L0,f.isSet=Vh,f.isString=Dn,f.isSymbol=te,f.isTypedArray=Yr,f.isUndefined=B0,f.isWeakMap=U0,f.isWeakSet=k0,f.join=zg,f.kebabCase=R_,f.last=ce,f.lastIndexOf=Hg,f.lowerCase=S_,f.lowerFirst=I_,f.lt=G0,f.lte=D0,f.max=Cv,f.maxBy=Ev,f.mean=wv,f.meanBy=Av,f.min=Rv,f.minBy=Sv,f.stubArray=Go,f.stubFalse=Do,f.stubObject=fv,f.stubString=pv,f.stubTrue=gv,f.multiply=Iv,f.nth=$g,f.noConflict=sv,f.noop=ko,f.now=Bn,f.pad=F_,f.padEnd=N_,f.padStart=M_,f.parseInt=P_,f.random=b_,f.reduce=Xm,f.reduceRight=qm,f.repeat=O_,f.replace=L_,f.result=d_,f.round=Fv,f.runInContext=x,f.sample=Km,f.size=Jm,f.snakeCase=B_,f.some=Qm,f.sortedIndex=Yg,f.sortedIndexBy=Zg,f.sortedIndexOf=Jg,f.sortedLastIndex=Qg,f.sortedLastIndexBy=tm,f.sortedLastIndexOf=em,f.startCase=k_,f.startsWith=G_,f.subtract=Nv,f.sum=Mv,f.sumBy=Pv,f.template=D_,f.times=mv,f.toFinite=Xe,f.toInteger=W,f.toLength=Xh,f.toLower=z_,f.toNumber=de,f.toSafeInteger=z0,f.toString=st,f.toUpper=H_,f.trim=$_,f.trimEnd=V_,f.trimStart=W_,f.truncate=X_,f.unescape=q_,f.uniqueId=vv,f.upperCase=j_,f.upperFirst=Oo,f.each=Mh,f.eachRight=Ph,f.first=Sh,Uo(f,function(){var e={};return Fe(f,function(i,o){ot.call(f.prototype,o)||(e[o]=i)}),e}(),{chain:!1}),f.VERSION=s,oe(["bind","bindKey","curry","curryRight","partial","partialRight"],function(e){f[e].placeholder=f}),oe(["drop","take"],function(e,i){Z.prototype[e]=function(o){o=o===r?1:Ft(W(o),0);var h=this.__filtered__&&!i?new Z(this):this.clone();return h.__filtered__?h.__takeCount__=Bt(o,h.__takeCount__):h.__views__.push({size:Bt(o,Yt),type:e+(h.__dir__<0?"Right":"")}),h},Z.prototype[e+"Right"]=function(o){return this.reverse()[e](o).reverse()}}),oe(["filter","map","takeWhile"],function(e,i){var o=i+1,h=o==Gt||o==ji;Z.prototype[e]=function(c){var p=this.clone();return p.__iteratees__.push({iteratee:k(c,3),type:o}),p.__filtered__=p.__filtered__||h,p}}),oe(["head","last"],function(e,i){var o="take"+(i?"Right":"");Z.prototype[e]=function(){return this[o](1).value()[0]}}),oe(["initial","tail"],function(e,i){var o="drop"+(i?"":"Right");Z.prototype[e]=function(){return this.__filtered__?new Z(this):this[o](1)}}),Z.prototype.compact=function(){return this.filter(jt)},Z.prototype.find=function(e){return this.filter(e).head()},Z.prototype.findLast=function(e){return this.reverse().find(e)},Z.prototype.invokeMap=q(function(e,i){return typeof e=="function"?new Z(this):this.map(function(o){return Ai(o,e,i)})}),Z.prototype.reject=function(e){return this.filter(kn(k(e)))},Z.prototype.slice=function(e,i){e=W(e);var o=this;return o.__filtered__&&(e>0||i<0)?new Z(o):(e<0?o=o.takeRight(-e):e&&(o=o.drop(e)),i!==r&&(i=W(i),o=i<0?o.dropRight(-i):o.take(i-e)),o)},Z.prototype.takeRightWhile=function(e){return this.reverse().takeWhile(e).reverse()},Z.prototype.toArray=function(){return this.take(Yt)},Fe(Z.prototype,function(e,i){var o=/^(?:filter|find|map|reject)|While$/.test(i),h=/^(?:head|last)$/.test(i),c=f[h?"take"+(i=="last"?"Right":""):i],p=h||/^find/.test(i);c&&(f.prototype[i]=function(){var m=this.__wrapped__,v=h?[1]:arguments,y=m instanceof Z,w=v[0],A=y||$(m),S=function(K){var Q=c.apply(f,Ze([K],v));return h&&I?Q[0]:Q};A&&o&&typeof w=="function"&&w.length!=1&&(y=A=!1);var I=this.__chain__,O=!!this.__actions__.length,G=p&&!I,X=y&&!O;if(!p&&A){m=X?m:new Z(this);var D=e.apply(m,v);return D.__actions__.push({func:On,args:[S],thisArg:r}),new ue(D,I)}return G&&X?e.apply(this,v):(D=this.thru(S),G?h?D.value()[0]:D.value():D)})}),oe(["pop","push","shift","sort","splice","unshift"],function(e){var i=on[e],o=/^(?:push|sort|unshift)$/.test(e)?"tap":"thru",h=/^(?:pop|shift)$/.test(e);f.prototype[e]=function(){var c=arguments;if(h&&!this.__chain__){var p=this.value();return i.apply($(p)?p:[],c)}return this[o](function(m){return i.apply($(m)?m:[],c)})}}),Fe(Z.prototype,function(e,i){var o=f[i];if(o){var h=o.name+"";ot.call(Wr,h)||(Wr[h]=[]),Wr[h].push({name:i,func:o})}}),Wr[Rn(r,mt).name]=[{name:"wrapper",func:r}],Z.prototype.clone=qf,Z.prototype.reverse=jf,Z.prototype.value=Kf,f.prototype.at=Em,f.prototype.chain=wm,f.prototype.commit=Am,f.prototype.next=Rm,f.prototype.plant=Im,f.prototype.reverse=Fm,f.prototype.toJSON=f.prototype.valueOf=f.prototype.value=Nm,f.prototype.first=f.prototype.head,xi&&(f.prototype[xi]=Sm),f},Hr=Af();lr?((lr.exports=Hr)._=Hr,Ls._=Hr):Ot._=Hr}).call(Pi)})(ps,ps.exports);var uT=ps.exports;let we=null;const hT=()=>{const n=or.useRef(null);return or.useEffect(()=>{we&&n.current&&(we.reset(),we=new ia(n.current))},[J.difficulty]),or.useEffect(()=>{const t=uT.debounce(()=>{we&&n.current&&(we.reset(),we=new ia(n.current))},100);return window.addEventListener("resize",t),()=>{window.removeEventListener("resize",t),we&&we.reset(),we=null}},[]),or.useEffect(()=>{n.current&&(we||(we=new ia(n.current)))},[n]),vt("div",{className:"absolute w-full h-full",ref:n,children:Hl&&vt("span",{className:"flex items-center justify-center",children:"You are on an unsupported browser, please use Chrome or Safari"})})},lT=Dl(hT),cT=()=>{const[n,t]=or.useState(it.convertCurrency(10)),[r,s]=or.useState(!1),a=J.calcMultiplier(J.difficulty,J.progress);or.useEffect(()=>(fe.addListener("onChickenCashout","crossTheRoadGameCashOut",b=>{b.success&&(Hi.win.play(),g({payout:b.profit+b.bet,multi:b.multiplier}))}),()=>{fe.removeListener("onChickenCashout")}));const u=J.calcPayout(J.bet,J.difficulty,J.progress)-J.bet,l=()=>{const b=it.betToWls(n);if(!sl.user)return["Place Bet",!0];if(r)return[vt(a1,{size:18}),!0];if(!J.hasBetPending){if(b>J.maxBet)return[vt(Jr,{children:"Bet is too high"}),!0];if(b>sl.user.balance)return[vt(Jr,{children:"Insufficient funds"}),!0]}return[vt(Jr,{children:vt("span",{children:J.hasBetPending?"Cash Out":"Place Bet"})}),!1]},[d,g]=or.useState(null),[_,C]=l();return je("div",{className:"max-w-page p-3 gap-3",children:[je(Oi.Container,{children:[je(Oi.Main,{className:"h-full w-full relative",children:[fe.isReady&&vt(lT,{}),vt(i1,{show:d!==null,onClose:()=>g(null),payout:(d==null?void 0:d.payout)||0,multiplier:(d==null?void 0:d.multi)||0})]}),je(Oi.Controls,{className:"p-3 flex flex-col gap-3",children:[je(e1,{forceDisable:J.hasBetPending,className:"flex flex-col gap-3",children:[vt(Qv,{bet:n,setBet:t,maxBet:J.maxBet}),vt(r1,{label:vt("span",{className:"flex gap-1 items-center",children:"Difficulty "}),options:[{value:"1",label:"Easy"},{value:"3",label:"Medium"},{value:"5",label:"Hard"},{value:"10",label:"Extreme"}],onChange:b=>{kv(()=>{J.difficulty=parseInt(b),J.roadCount=25-J.difficulty})},defaultValue:J.difficulty.toString()})]}),J.hasBetPending&&vt(Gv,{label:`Total Profit: ${a<1?"1.00":it.formatNumber(a,!0)}×`,leftContent:vt(zo,{size:18}),value:it.formatAndConvert(u<1?0:u),readOnly:!0,controlled:!0}),vt(Dv,{disabled:J.hasBetPending&&u<1||!!C||Hl,onClick:b=>{J.hasDied||(s(!0),J.hasBetPending?fe.sendWithCallback({ID:"crossTheRoadGameCashOut"},()=>{s(!1)}):fe.sendWithCallback({ID:"crossTheRoadGamePlaceBet",bet:it.betToWls(n),level:J.getDifficultyString()},()=>{Hi.placeBet.play(),s(!1)}))},children:_})]}),vt(Oi.Header,{children:vt(o1,{rounds:J.history,game:"crosstheroad"})}),je(Oi.Footer,{className:"p-3",children:[vt(n1,{game:"crosstheroad"}),vt(s1,{})]})]}),vt(t1,{gameName:"Cross the Road",description:"Our take on the popular Crossy Road game. In this game, you are a chicken who needs to cross the road. The further you go, the bigger the rewards!",infos:[{label:"House Edge",item:je(Jr,{children:[it.formatNumber(J.houseEdge,!0,!0),"%"]})},{label:"Max Bet",item:je(Jr,{children:[it.formatAndConvert(J.maxBet),vt(zo,{size:18})]})},{label:"Max Win",item:je(Jr,{children:[it.formatAndConvert(J.maxWin),vt(zo,{size:18})]})}]}),vt(zv,{})]})},XT=Uv(Dl(cT));export{XT as default};