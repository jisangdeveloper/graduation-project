'use strict';var aa=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function ba(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}
var ca=ba(this);function da(a,b){if(b)a:{var c=ca;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];if(!(e in c))break a;c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&b!=null&&aa(c,a,{configurable:!0,writable:!0,value:b})}}
function ea(a){function b(d){return a.next(d)}
function c(d){return a.throw(d)}
return new Promise(function(d,e){function f(g){g.done?d(g.value):Promise.resolve(g.value).then(b,c).then(f,e)}
f(a.next())})}
function r(a){return ea(a())}
da("Symbol.dispose",function(a){return a?a:Symbol("Symbol.dispose")});
da("globalThis",function(a){return a||ca});
da("Object.values",function(a){return a?a:function(b){var c=[],d;for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&c.push(b[d]);return c}});
da("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var e=d.length;c=c||0;for(c<0&&(c=Math.max(c+e,0));c<e;c++){var f=d[c];if(f===b||Object.is(f,b))return!0}return!1}});
da("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&c.push([d,b[d]]);return c}});
function fa(a,b){a instanceof String&&(a+="");var c=0,d=!1,e={next:function(){if(!d&&c<a.length){var f=c++;return{value:b(f,a[f]),done:!1}}d=!0;return{done:!0,value:void 0}}};
e[Symbol.iterator]=function(){return e};
return e}
da("Array.prototype.values",function(a){return a?a:function(){return fa(this,function(b,c){return c})}});
da("String.prototype.matchAll",function(a){return a?a:function(b){if(b instanceof RegExp&&!b.global)throw new TypeError("RegExp passed into String.prototype.matchAll() must have global tag.");var c=new RegExp(b,b instanceof RegExp?void 0:"g"),d=this,e=!1,f={next:function(){if(e)return{value:void 0,done:!0};var g=c.exec(d);if(!g)return e=!0,{value:void 0,done:!0};g[0]===""&&(c.lastIndex+=1);return{value:g,done:!1}}};
f[Symbol.iterator]=function(){return f};
return f}});
da("Promise.prototype.finally",function(a){return a?a:function(b){return this.then(function(c){return Promise.resolve(b()).then(function(){return c})},function(c){return Promise.resolve(b()).then(function(){throw c;
})})}});/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var t=this||self;function u(a,b){a=a.split(".");b=b||t;for(var c=0;c<a.length;c++)if(b=b[a[c]],b==null)return null;return b}
function ha(a){var b=typeof a;b=b!="object"?b:a?Array.isArray(a)?"array":b:"null";return b=="array"||b=="object"&&typeof a.length=="number"}
function ia(a,b,c){return a.call.apply(a.bind,arguments)}
function ja(a,b,c){if(!a)throw Error();if(arguments.length>2){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function ka(a,b,c){ka=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?ia:ja;return ka.apply(null,arguments)}
function w(a,b){a=a.split(".");var c=t;a[0]in c||typeof c.execScript=="undefined"||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||b===void 0?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b}
function la(a){return a}
function ma(a,b){function c(){}
c.prototype=b.prototype;a.Ka=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.sb=function(d,e,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[e].apply(d,g)}}
;function na(a,b){if(Error.captureStackTrace)Error.captureStackTrace(this,na);else{const c=Error().stack;c&&(this.stack=c)}a&&(this.message=String(a));b!==void 0&&(this.cause=b)}
ma(na,Error);na.prototype.name="CustomError";var oa=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};/*

 Copyright Google LLC
 SPDX-License-Identifier: Apache-2.0
*/
let pa=globalThis.trustedTypes,qa;function ra(){let a=null;if(!pa)return a;try{const b=c=>c;
a=pa.createPolicy("goog#html",{createHTML:b,createScript:b,createScriptURL:b})}catch(b){}return a}
;var sa=class{constructor(a){this.h=a}toString(){return this.h+""}};function ua(a,b=`unexpected value ${a}!`){throw Error(b);}
;function va(a,b){Array.prototype.forEach.call(a,b,void 0)}
function wa(a,b){return Array.prototype.map.call(a,b,void 0)}
function xa(a,b){b=Array.prototype.indexOf.call(a,b,void 0);b>=0&&Array.prototype.splice.call(a,b,1)}
function ya(a,b){for(let c=1;c<arguments.length;c++){const d=arguments[c];if(ha(d)){const e=a.length||0,f=d.length||0;a.length=e+f;for(let g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
;function za(a,b){a.__closure__error__context__984382||(a.__closure__error__context__984382={});a.__closure__error__context__984382.severity=b}
;function Aa(a){var b=u("window.location.href");a==null&&(a='Unknown Error of type "null/undefined"');if(typeof a==="string")return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};var c=!1;try{var d=a.lineNumber||a.line||"Not available"}catch(g){d="Not available",c=!0}try{var e=a.fileName||a.filename||a.sourceURL||t.$googDebugFname||b}catch(g){e="Not available",c=!0}b=Ba(a);if(!(!c&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name)){c=a.message;if(c==
null){if(a.constructor&&a.constructor instanceof Function){if(a.constructor.name)c=a.constructor.name;else if(c=a.constructor,Ca[c])c=Ca[c];else{c=String(c);if(!Ca[c]){var f=/function\s+([^\(]+)/m.exec(c);Ca[c]=f?f[1]:"[Anonymous]"}c=Ca[c]}c='Unknown Error of type "'+c+'"'}else c="Unknown Error of unknown type";typeof a.toString==="function"&&Object.prototype.toString!==a.toString&&(c+=": "+a.toString())}return{message:c,name:a.name||"UnknownError",lineNumber:d,fileName:e,stack:b||"Not available"}}return{message:a.message,
name:a.name,lineNumber:a.lineNumber,fileName:a.fileName,stack:b}}
function Ba(a,b){b||(b={});b[Da(a)]=!0;var c=a.stack||"",d=a.cause;d&&!b[Da(d)]&&(c+="\nCaused by: ",d.stack&&d.stack.indexOf(d.toString())==0||(c+=typeof d==="string"?d:d.message+"\n"),c+=Ba(d,b));a=a.errors;if(Array.isArray(a)){d=1;for(var e=0;e<a.length&&!(d>4);e++)b[Da(a[e])]||(c+="\nInner error "+d++ +": ",a[e].stack&&a[e].stack.indexOf(a[e].toString())==0||(c+=typeof a[e]==="string"?a[e]:a[e].message+"\n"),c+=Ba(a[e],b));e<a.length&&(c+="\n... "+(a.length-e)+" more inner errors")}return c}
function Da(a){var b="";typeof a.toString==="function"&&(b=""+a);return b+a.stack}
var Ca={};var Ea=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Fa(a){return a?decodeURI(a):a}
function Ga(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)Ga(a,String(b[d]),c);else b!=null&&c.push(a+(b===""?"":"="+encodeURIComponent(String(b))))}
function Ha(a){var b=[],c;for(c in a)Ga(c,a[c],b);return b.join("&")}
;function Ia(){throw Error("Invalid UTF8");}
function Ja(a,b){b=String.fromCharCode.apply(null,b);return a==null?b:a+b}
let Ka=void 0,La;const Ma=typeof TextDecoder!=="undefined";function Na(a){t.setTimeout(()=>{throw a;},0)}
;var Oa,Pa=u("CLOSURE_FLAGS"),Qa=Pa&&Pa[610401301];Oa=Qa!=null?Qa:!1;function Ra(){var a=t.navigator;return a&&(a=a.userAgent)?a:""}
var Sa;const Ta=t.navigator;Sa=Ta?Ta.userAgentData||null:null;function Ua(a){return Oa?Sa?Sa.brands.some(({brand:b})=>b&&b.indexOf(a)!=-1):!1:!1}
function x(a){return Ra().indexOf(a)!=-1}
;function Va(){return Oa?!!Sa&&Sa.brands.length>0:!1}
function Wa(){return Va()?Ua("Chromium"):(x("Chrome")||x("CriOS"))&&!(Va()?0:x("Edge"))||x("Silk")}
;var Xa=Va()?!1:x("Trident")||x("MSIE");!x("Android")||Wa();Wa();var Ya=x("Safari")&&!(Wa()||(Va()?0:x("Coast"))||(Va()?0:x("Opera"))||(Va()?0:x("Edge"))||(Va()?Ua("Microsoft Edge"):x("Edg/"))||(Va()?Ua("Opera"):x("OPR"))||x("Firefox")||x("FxiOS")||x("Silk")||x("Android"))&&!(x("iPhone")&&!x("iPod")&&!x("iPad")||x("iPad")||x("iPod"));var Za={},$a=null;function ab(a,b){b===void 0&&(b=0);bb();b=Za[b];const c=Array(Math.floor(a.length/3)),d=b[64]||"";let e=0,f=0;for(;e<a.length-2;e+=3){var g=a[e],h=a[e+1],k=a[e+2],l=b[g>>2];g=b[(g&3)<<4|h>>4];h=b[(h&15)<<2|k>>6];k=b[k&63];c[f++]=""+l+g+h+k}l=0;k=d;switch(a.length-e){case 2:l=a[e+1],k=b[(l&15)<<2]||d;case 1:a=a[e],c[f]=""+b[a>>2]+b[(a&3)<<4|l>>4]+k+d}return c.join("")}
function cb(a){var b=a.length,c=b*3/4;c%3?c=Math.floor(c):"=.".indexOf(a[b-1])!=-1&&(c="=.".indexOf(a[b-2])!=-1?c-2:c-1);var d=new Uint8Array(c),e=0;db(a,function(f){d[e++]=f});
return e!==c?d.subarray(0,e):d}
function db(a,b){function c(k){for(;d<a.length;){var l=a.charAt(d++),n=$a[l];if(n!=null)return n;if(!/^[\s\xa0]*$/.test(l))throw Error("Unknown base64 encoding at char: "+l);}return k}
bb();for(var d=0;;){var e=c(-1),f=c(0),g=c(64),h=c(64);if(h===64&&e===-1)break;b(e<<2|f>>4);g!=64&&(b(f<<4&240|g>>2),h!=64&&b(g<<6&192|h))}}
function bb(){if(!$a){$a={};for(var a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),b=["+/=","+/","-_=","-_.","-_"],c=0;c<5;c++){var d=a.concat(b[c].split(""));Za[c]=d;for(var e=0;e<d.length;e++){var f=d[e];$a[f]===void 0&&($a[f]=e)}}}}
;var eb=typeof Uint8Array!=="undefined",fb=!Xa&&typeof btoa==="function";function gb(a){if(!fb)return ab(a);let b="",c=0;const d=a.length-10240;for(;c<d;)b+=String.fromCharCode.apply(null,a.subarray(c,c+=10240));b+=String.fromCharCode.apply(null,c?a.subarray(c):a);return btoa(b)}
const hb=/[-_.]/g,ib={"-":"+",_:"/",".":"="};function jb(a){return ib[a]||""}
function kb(a){if(!fb)return cb(a);hb.test(a)&&(a=a.replace(hb,jb));a=atob(a);const b=new Uint8Array(a.length);for(let c=0;c<a.length;c++)b[c]=a.charCodeAt(c);return b}
function lb(a){return eb&&a!=null&&a instanceof Uint8Array}
var mb={};let nb;function ob(a){if(a!==mb)throw Error("illegal external caller");}
function pb(){return nb||(nb=new qb(null,mb))}
function rb(a){ob(mb);var b=a.h;b=b==null||lb(b)?b:typeof b==="string"?kb(b):null;return b==null?b:a.h=b}
var qb=class{constructor(a,b){ob(b);this.h=a;if(a!=null&&a.length===0)throw Error("ByteString should be constructed with non-empty values");}sizeBytes(){const a=rb(this);return a?a.length:0}};let sb;function tb(){const a=Error();za(a,"incident");Na(a)}
function ub(a){a=Error(a);za(a,"warning");return a}
;function vb(){return typeof BigInt==="function"}
;function wb(a){return Array.prototype.slice.call(a)}
;var xb=typeof Symbol==="function"&&typeof Symbol()==="symbol";function yb(a){return typeof Symbol==="function"&&typeof Symbol()==="symbol"?Symbol():a}
var zb=yb(),Ab=yb("2ex"),Bb=yb("1oa");[...Object.values({cb:1,ab:2,Za:4,ib:8,hb:16,gb:32,Qa:64,nb:128,Ya:256,Xa:512,bb:1024,Va:2048,mb:4096,Wa:8192,Ta:16384})];var Cb=xb?(a,b)=>{a[zb]|=b}:(a,b)=>{a.C!==void 0?a.C|=b:Object.defineProperties(a,{C:{value:b,
configurable:!0,writable:!0,enumerable:!1}})},Db=xb?(a,b)=>{a[zb]&=~b}:(a,b)=>{a.C!==void 0&&(a.C&=~b)},y=xb?a=>a[zb]|0:a=>a.C|0,A=xb?a=>a[zb]:a=>a.C,C=xb?(a,b)=>{a[zb]=b}:(a,b)=>{a.C!==void 0?a.C=b:Object.defineProperties(a,{C:{value:b,
configurable:!0,writable:!0,enumerable:!1}})};
function Eb(a,b){C(b,(a|0)&-14591)}
function Fb(a,b){C(b,(a|34)&-14557)}
;var Gb={},Hb={};function Ib(a){return!(!a||typeof a!=="object"||a.h!==Hb)}
function Jb(a){return a!==null&&typeof a==="object"&&!Array.isArray(a)&&a.constructor===Object}
function Kb(a){return!Array.isArray(a)||a.length?!1:y(a)&1?!0:!1}
var Lb;const Mb=[];C(Mb,55);Lb=Object.freeze(Mb);function Nb(a){if(a&2)throw Error();}
let Ob;function Pb(a,b){(b=Ob?b[Ob]:void 0)&&(a[Ob]=wb(b))}
var Qb=Object.freeze({});function Rb(a){a.yb=!0;return a}
;var Sb=Rb(a=>typeof a==="number"),Tb=Rb(a=>typeof a==="string"),Ub=Rb(a=>typeof a==="boolean");var Vb=typeof t.BigInt==="function"&&typeof t.BigInt(0)==="bigint";var ac=Rb(a=>Vb?a>=Wb&&a<=Xb:a[0]==="-"?Yb(a,Zb):Yb(a,$b));
const Zb=Number.MIN_SAFE_INTEGER.toString(),Wb=Vb?BigInt(Number.MIN_SAFE_INTEGER):void 0,$b=Number.MAX_SAFE_INTEGER.toString(),Xb=Vb?BigInt(Number.MAX_SAFE_INTEGER):void 0;function Yb(a,b){if(a.length>b.length)return!1;if(a.length<b.length||a===b)return!0;for(let c=0;c<a.length;c++){const d=a[c],e=b[c];if(d>e)return!1;if(d<e)return!0}}
;const bc=typeof Uint8Array.prototype.slice==="function";let E=0,F=0;function cc(a){const b=a>>>0;E=b;F=(a-b)/4294967296>>>0}
function dc(a){if(a<0){cc(0-a);const [b,c]=ec(E,F);E=b>>>0;F=c>>>0}else cc(a)}
function fc(a,b){b>>>=0;a>>>=0;if(b<=2097151)var c=""+(4294967296*b+a);else vb()?c=""+(BigInt(b)<<BigInt(32)|BigInt(a)):(c=(a>>>24|b<<8)&16777215,b=b>>16&65535,a=(a&16777215)+c*6777216+b*6710656,c+=b*8147497,b*=2,a>=1E7&&(c+=a/1E7>>>0,a%=1E7),c>=1E7&&(b+=c/1E7>>>0,c%=1E7),c=b+gc(c)+gc(a));return c}
function gc(a){a=String(a);return"0000000".slice(a.length)+a}
function ec(a,b){b=~b;a?a=~a+1:b+=1;return[a,b]}
;function hc(a){return a.displayName||a.name||"unknown type name"}
const ic=/^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;function jc(a){const b=typeof a;switch(b){case "bigint":return!0;case "number":return Number.isFinite(a)}return b!=="string"?!1:ic.test(a)}
function kc(a){if(a==null)return a;if(typeof a==="string"){if(!a)return;a=+a}if(typeof a==="number")return Number.isFinite(a)?a|0:void 0}
function lc(a){if(!jc(a))throw ub("int64");switch(typeof a){case "string":jc(a);var b=Math.trunc(Number(a));if(Number.isSafeInteger(b))a=String(b);else if(b=a.indexOf("."),b!==-1&&(a=a.substring(0,b)),!(a[0]==="-"?a.length<20||a.length===20&&Number(a.substring(0,7))>-922337:a.length<19||a.length===19&&Number(a.substring(0,6))<922337)){if(a.length<16)dc(Number(a));else if(vb())a=BigInt(a),E=Number(a&BigInt(4294967295))>>>0,F=Number(a>>BigInt(32)&BigInt(4294967295));else{b=+(a[0]==="-");F=E=0;var c=
a.length;for(let d=0+b,e=(c-b)%6+b;e<=c;d=e,e+=6){const f=Number(a.slice(d,e));F*=1E6;E=E*1E6+f;E>=4294967296&&(F+=Math.trunc(E/4294967296),F>>>=0,E>>>=0)}if(b){const [d,e]=ec(E,F);E=d;F=e}}a=E;b=F;if(b&2147483648)if(vb())a=""+(BigInt(b|0)<<BigInt(32)|BigInt(a>>>0));else{const [d,e]=ec(a,b);a="-"+fc(d,e)}else a=fc(a,b)}return a;case "bigint":b=a=BigInt.asIntN(64,a);if(Tb(b)){if(!/^\s*(?:-?[1-9]\d*|0)?\s*$/.test(b))throw Error(String(b));}else if(Sb(b)&&!Number.isSafeInteger(b))throw Error(String(b));
Vb?a=BigInt(a):a=Ub(a)?a?"1":"0":Tb(a)?a.trim()||"0":String(a);return a;default:jc(a);a=Math.trunc(a);if(!Number.isSafeInteger(a)){dc(a);b=E;c=F;if(a=c&2147483648)b=~b+1>>>0,c=~c>>>0,b==0&&(c=c+1>>>0);b=c*4294967296+(b>>>0);a=a?-b:b}return a}}
function mc(a){if(a!=null&&typeof a!=="string")throw Error();return a}
function nc(a,b){if(!(a instanceof b))throw Error(`Expected instanceof ${hc(b)} but got ${a&&hc(a.constructor)}`);return a}
function oc(a,b,c){if(a!=null&&typeof a==="object"&&a.T===Gb)return a;if(Array.isArray(a)){var d=y(a),e=d;e===0&&(e|=c&32);e|=c&2;e!==d&&C(a,e);return new b(a)}}
;function pc(a){qc===void 0&&(qc=typeof Proxy==="function"?rc(Proxy):null);if(!qc||!sc())return a;let b=tc(a);if(b)return b;if(Math.random()>.01)return a;uc(a);b=new qc(a,{set(c,d,e){vc();c[d]=e;return!0}});wc(a,b);return b}
function vc(){tb()}
let xc=void 0,yc=void 0;function tc(a){let b;return(b=xc)==null?void 0:b.get(a)}
function wc(a,b){(xc||(xc=new zc)).set(a,b);(yc||(yc=new zc)).set(b,a)}
let qc=void 0,zc=void 0;function sc(){zc===void 0&&(zc=typeof WeakMap==="function"?rc(WeakMap):null);return zc}
function rc(a){try{return a.toString().indexOf("[native code]")!==-1?a:null}catch(b){return null}}
let Ac=void 0;function uc(a){if(Ac===void 0){const b=new qc([],{});Ac=Array.prototype.concat.call([],b).length===1}Ac&&typeof Symbol==="function"&&Symbol.isConcatSpreadable&&(a[Symbol.isConcatSpreadable]=!0)}
function Bc(a,b){const c=Cc(a,b);c&&!Dc(a,c)&&(Ec(),Fc(a,b))}
function Dc(a,b){if(a.length!==b.length)return!1;for(const e in b){var c=Number(e),d;if(d=Number.isInteger(c))d=a[c],c=b[c],d=!(Number.isNaN(d)?Number.isNaN(c):d===c);if(d)return!1}return!0}
function Gc(a){var b;if(a&&(b=Hc)!=null&&b.has(a)&&(b=a.o))for(let c=0;c<b.length;c++){const d=b[c];if(c===b.length-1&&Jb(d))for(const e in d){const f=d[e];Array.isArray(f)&&Bc(f,a)}else Array.isArray(d)&&Bc(d,a)}}
function Ec(){tb()}
let Hc=void 0;function Cc(a,b){let c,d;return(c=Hc)==null?void 0:(d=c.get(b))==null?void 0:d.get(a)}
function Fc(a,b){let c,d;(c=Hc)==null||(d=c.get(b))==null||d.delete(a)}
;let Ic,Jc,Kc;function Lc(a){switch(typeof a){case "boolean":return Jc||(Jc=[0,void 0,!0]);case "number":return a>0?void 0:a===0?Kc||(Kc=[0,void 0]):[-a,void 0];case "string":return[0,a];case "object":return a}}
function Mc(a,b){a=Nc(a,b[0],b[1]);Cb(a,16384);return a}
function Nc(a,b,c){a==null&&(a=Ic);Ic=void 0;if(a==null){var d=96;c?(a=[c],d|=512):a=[];b&&(d=d&-33521665|(b&1023)<<15)}else{if(!Array.isArray(a))throw Error("narr");d=y(a);if(d&2048)throw Error("farr");if(d&64)return a;d|=64;if(c&&(d|=512,c!==a[0]))throw Error("mid");a:{c=a;const e=c.length;if(e){const f=e-1;if(Jb(c[f])){d|=256;b=f-(+!!(d&512)-1);if(b>=1024)throw Error("pvtlmt");d=d&-33521665|(b&1023)<<15;break a}}if(b){b=Math.max(b,e-(+!!(d&512)-1));if(b>1024)throw Error("spvt");d=d&-33521665|(b&
1023)<<15}}}C(a,d);return a}
;function Oc(a,b){return Pc(b)}
function Pc(a){switch(typeof a){case "number":return isFinite(a)?a:String(a);case "bigint":return ac(a)?Number(a):String(a);case "boolean":return a?1:0;case "object":if(a)if(Array.isArray(a)){if(Kb(a))return}else{if(lb(a))return gb(a);if(a instanceof qb){const b=a.h;return b==null?"":typeof b==="string"?b:a.h=gb(b)}}}return a}
;function Qc(a,b,c){const d=wb(a);var e=d.length;const f=b&256?d[e-1]:void 0;e+=f?-1:0;for(b=b&512?1:0;b<e;b++)d[b]=c(d[b]);if(f){b=d[b]={};for(const g in f)b[g]=c(f[g])}Pb(d,a);return d}
function Rc(a,b,c,d,e){if(a!=null){if(Array.isArray(a))a=Kb(a)?void 0:e&&y(a)&2?a:Sc(a,b,c,d!==void 0,e);else if(Jb(a)){const f={};for(let g in a)f[g]=Rc(a[g],b,c,d,e);a=f}else a=b(a,d);return a}}
function Sc(a,b,c,d,e){const f=d||c?y(a):0;d=d?!!(f&32):void 0;const g=wb(a);for(let h=0;h<g.length;h++)g[h]=Rc(g[h],b,c,d,e);c&&(Pb(g,a),c(f,g));return g}
function Tc(a){return a.T===Gb?a.toJSON():Pc(a)}
;function Uc(a,b,c=Fb){if(a!=null){if(eb&&a instanceof Uint8Array)return b?a:new Uint8Array(a);if(Array.isArray(a)){var d=y(a);if(d&2)return a;b&&(b=d===0||!!(d&32)&&!(d&64||!(d&16)));return b?(C(a,(d|34)&-12293),a):Sc(a,Uc,d&4?Fb:c,!0,!0)}a.T===Gb&&(c=a.o,d=A(c),a=d&2?a:Vc(a,c,d,!0));return a}}
function Vc(a,b,c,d){Gc(a);a=a.constructor;Ic=b=Wc(b,c,d);b=new a(b);Ic=void 0;return b}
function Wc(a,b,c){const d=c||b&2?Fb:Eb,e=!!(b&32);a=Qc(a,b,f=>Uc(f,e,d));
Cb(a,32|(c?2:0));return a}
function Xc(a){const b=a.o,c=A(b);return c&2?Vc(a,b,c,!1):a}
;function Yc(a,b){a=a.o;return Zc(a,A(a),b)}
function $c(a,b,c,d){b=d+(+!!(b&512)-1);if(!(b<0||b>=a.length||b>=c))return a[b]}
function Zc(a,b,c,d){if(c===-1)return null;const e=b>>15&1023||536870912;if(c>=e){if(b&256)return a[a.length-1][c]}else{var f=a.length;if(d&&b&256&&(d=a[f-1][c],d!=null)){if($c(a,b,e,c)&&Ab!=null){var g;a=(g=sb)!=null?g:sb={};g=a[Ab]||0;g>=4||(a[Ab]=g+1,tb())}return d}return $c(a,b,e,c)}}
function ad(a,b,c){const d=a.o;let e=A(d);Nb(e);G(d,e,b,c);return a}
function G(a,b,c,d){const e=b>>15&1023||536870912;if(c>=e){let f,g=b;if(b&256)f=a[a.length-1];else{if(d==null)return g;f=a[e+(+!!(b&512)-1)]={};g|=256}f[c]=d;c<e&&(a[c+(+!!(b&512)-1)]=void 0);g!==b&&C(a,g);return g}a[c+(+!!(b&512)-1)]=d;b&256&&(a=a[a.length-1],c in a&&delete a[c]);return b}
function bd(a){return!!(2&a)&&!!(4&a)||!!(2048&a)}
function cd(a,b,c,d){const e=a.o;var f=A(e);Nb(f);if(d==null){var g=dd(e);if(ed(g,e,f,c)===b)g.set(c,0);else return a}else{c.includes(b);g=dd(e);const h=ed(g,e,f,c);h!==b&&(h&&(f=G(e,f,h)),g.set(c,b))}G(e,f,b,d);return a}
function dd(a){if(xb){var b;return(b=a[Bb])!=null?b:a[Bb]=new Map}if(Bb in a)return a[Bb];b=new Map;Object.defineProperty(a,Bb,{value:b});return b}
function ed(a,b,c,d){let e=a.get(d);if(e!=null)return e;e=0;for(let f=0;f<d.length;f++){const g=d[f];Zc(b,c,g)!=null&&(e!==0&&(c=G(b,c,e)),e=g)}a.set(d,e);return e}
function fd(a,b,c,d){let e=A(a);d=Zc(a,e,c,d);let f;if(d!=null&&d.T===Gb)return b=Xc(d),b!==d&&G(a,e,c,b),b.o;if(Array.isArray(d)){const g=y(d);g&2?f=Wc(d,g,!1):f=d;f=Mc(f,b)}else f=Mc(void 0,b);f!==d&&G(a,e,c,f);return f}
function gd(a,b,c){var d=a.o,e=A(d),f=Zc(d,e,c,!1);b=oc(f,b,e);b!==f&&b!=null&&G(d,e,c,b);d=b;if(d==null)return d;a=a.o;e=A(a);e&2||(f=Xc(d),f!==d&&(d=f,G(a,e,c,d)));return d}
function hd(a,b,c,d,e,f,g){var h=a.o,k=!!(2&b);e=k?1:e;f=!!f;g&&(g=!k);k=Zc(h,b,d);k=Array.isArray(k)?k:Lb;var l=y(k),n=k;Bc(n,a);e!==2&&e!==1||Fc(n,a);n=!!(4&l);if(!n){var p=l;p===0&&(p=id(p,b));l=k;p|=1;var q=b;const z=!!(2&p);z&&(q|=2);let D=!z,B=!0,I=0,ta=0;for(;I<l.length;I++){const vd=oc(l[I],c,q);if(vd instanceof c){if(!z){const gg=!!(y(vd.o)&2);D&&(D=!gg);B&&(B=gg)}l[ta++]=vd}}ta<I&&(l.length=ta);p|=4;p=B?p|16:p&-17;p=D?p|8:p&-9;C(l,p);z&&Object.freeze(l);l=p}if(g&&!(8&l||!k.length&&(e===
1||e===4&&32&l))){bd(l)?(k=wb(k),l=id(l,b),b=G(h,b,d,k)):Fc(k,a);c=k;g=l;for(l=0;l<c.length;l++)p=c[l],q=Xc(p),p!==q&&(c[l]=q);g|=8;g=c.length?g&-17:g|16;C(c,g);l=g}let m;if(e===1||e===4&&32&l)bd(l)||(a=l,b=!!(32&l),l|=!k.length||16&l&&(!n||b)?2:2048,l!==a&&C(k,l),Object.freeze(k));else if(n=e!==5?!1:!!(32&l)||bd(l)||!!tc(k),(e===2||n)&&bd(l)&&(k=wb(k),l=id(l,b),l=jd(l,b,f),C(k,l),b=G(h,b,d,k)),bd(l)||(d=l,l=jd(l,b,f),l!==d&&C(k,l)),n){if(m=pc(k),b=k,sc()&&!Cc(b,a)&&!(Math.random()>.01)){var v=b.length;
f={length:v};for(d=0;d<Math.min(v,10);d++)v<=10?h=d:(h=v/10,e=Math.floor(d*h),h=e+Math.floor(Math.random()*(Math.floor((d+1)*h)-e))),f[h]=b[h];Dc(b,f)?(v=Hc||(Hc=new zc),d=v.get(a),d||(d=new zc,v.set(a,d)),d.set(b,f)):(tb(),Fc(b,a))}}else e!==2||f||(v=xc)==null||v.delete(k);return m||k}
function H(a,b,c,d){d!=null?nc(d,b):d=void 0;return ad(a,c,d)}
function id(a,b){a=(2&b?a|2:a&-3)|32;return a&=-2049}
function jd(a,b,c){32&b&&c||(a&=-33);return a}
function kd(a,b,c,d){const e=A(a.o);Nb(e);a=hd(a,e,c,b,2,!0);d=d!=null?nc(d,c):new c;a.push(d);y(d.o)&2?Db(a,8):Db(a,16)}
function ld(a,b){a=Yc(a,b);return a==null||typeof a==="string"?a:void 0}
function md(a,b){a=ld(a,b);return a!=null?a:""}
function nd(a,b){var c=od;const d=a.o;c=ed(dd(d),d,A(d),c);return ld(a,c===b?b:-1)}
function pd(a,b,c){if(c!=null){if(typeof c!=="number")throw ub("int32");if(!Number.isFinite(c))throw ub("int32");c|=0}ad(a,b,c)}
function J(a,b,c){return ad(a,b,mc(c))}
function qd(a,b,c){if(c!=null){if(!Number.isFinite(c))throw ub("enum");c|=0}return ad(a,b,c)}
;function rd(a,b){return Error(`Invalid wire type: ${a} (at position ${b})`)}
function sd(){return Error("Failed to read varint, encoding is invalid.")}
function td(a,b){return Error(`Tried to read past the end of the data ${b} > ${a}`)}
;function ud(a){if(typeof a==="string")return{buffer:kb(a),J:!1};if(Array.isArray(a))return{buffer:new Uint8Array(a),J:!1};if(a.constructor===Uint8Array)return{buffer:a,J:!1};if(a.constructor===ArrayBuffer)return{buffer:new Uint8Array(a),J:!1};if(a.constructor===qb)return{buffer:rb(a)||new Uint8Array(0),J:!0};if(a instanceof Uint8Array)return{buffer:new Uint8Array(a.buffer,a.byteOffset,a.byteLength),J:!1};throw Error("Type not convertible to a Uint8Array, expected a Uint8Array, an ArrayBuffer, a base64 encoded string, a ByteString or an Array of numbers");
}
;function wd(a){const b=a.j;let c=a.h,d=b[c++],e=d&127;if(d&128&&(d=b[c++],e|=(d&127)<<7,d&128&&(d=b[c++],e|=(d&127)<<14,d&128&&(d=b[c++],e|=(d&127)<<21,d&128&&(d=b[c++],e|=d<<28,d&128&&b[c++]&128&&b[c++]&128&&b[c++]&128&&b[c++]&128&&b[c++]&128)))))throw sd();xd(a,c);return e}
function xd(a,b){a.h=b;if(b>a.i)throw td(a.i,b);}
function yd(a,b){if(b<0)throw Error(`Tried to read a negative byte length: ${b}`);const c=a.h,d=c+b;if(d>a.i)throw td(b,a.i-c);a.h=d;return c}
var zd=class{constructor(a,b){this.j=null;this.m=!1;this.h=this.i=this.l=0;this.init(a,void 0,void 0,b)}init(a,b,c,{Y:d=!1}={}){this.Y=d;a&&(a=ud(a),this.j=a.buffer,this.m=a.J,this.l=b||0,this.i=c!==void 0?this.l+c:this.j.length,this.h=this.l)}clear(){this.j=null;this.m=!1;this.h=this.i=this.l=0;this.Y=!1}reset(){this.h=this.l}},Ad=[];function Bd(a,{ha:b=!1}={}){a.ha=b}
function Cd(a){var b=a.h;if(b.h==b.i)return!1;a.j=a.h.h;var c=wd(a.h)>>>0;b=c>>>3;c&=7;if(!(c>=0&&c<=5))throw rd(c,a.j);if(b<1)throw Error(`Invalid field number: ${b} (at position ${a.j})`);a.l=b;a.i=c;return!0}
function Dd(a){switch(a.i){case 0:if(a.i!=0)Dd(a);else a:{a=a.h;var b=a.h;const c=b+10,d=a.j;for(;b<c;)if((d[b++]&128)===0){xd(a,b);break a}throw sd();}break;case 1:a=a.h;xd(a,a.h+8);break;case 2:a.i!=2?Dd(a):(b=wd(a.h)>>>0,a=a.h,xd(a,a.h+b));break;case 5:a=a.h;xd(a,a.h+4);break;case 3:b=a.l;do{if(!Cd(a))throw Error("Unmatched start-group tag: stream EOF");if(a.i==4){if(a.l!=b)throw Error("Unmatched end-group tag");break}Dd(a)}while(1);break;default:throw rd(a.i,a.j);}}
function Ed(a,b,c){const d=a.h.i,e=wd(a.h)>>>0,f=a.h.h+e;let g=f-d;g<=0&&(a.h.i=f,c(b,a,void 0,void 0,void 0),g=f-a.h.h);if(g)throw Error("Message parsing ended unexpectedly. Expected to read "+`${e} bytes, instead read ${e-g} bytes, either the `+"data ended unexpectedly or the message misreported its own length");a.h.h=f;a.h.i=d}
var Fd=class{constructor(a,b){if(Ad.length){const c=Ad.pop();c.init(a,void 0,void 0,b);a=c}else a=new zd(a,b);this.h=a;this.j=this.h.h;this.i=this.l=-1;Bd(this,b)}reset(){this.h.reset();this.j=this.h.h;this.i=this.l=-1}},Gd=[];let Hd;var K=class{constructor(a,b,c){this.o=Nc(a,b,c)}toJSON(){return Id(this)}clone(){const a=this.o;return Vc(this,a,A(a),!1)}J(){return!!(y(this.o)&2)}};K.prototype.T=Gb;
function Id(a){Gc(a);a=Hd?a.o:Sc(a.o,Tc,void 0,void 0,!1);{var b=!Hd;let l=a.length;if(l){var c=a[l-1],d=Jb(c);d?l--:c=void 0;var e=a;if(d){b:{var f=c;var g;var h=!1;if(f)for(let n in f)if(isNaN(+n)){let p;((p=g)!=null?p:g={})[n]=f[n]}else if(d=f[n],Array.isArray(d)&&(Kb(d)||Ib(d)&&d.size===0)&&(d=null),d==null&&(h=!0),d!=null){let p;((p=g)!=null?p:g={})[n]=d}h||(g=f);if(g)for(let n in g){h=g;break b}h=null}f=h==null?c!=null:h!==c}for(;l>0;l--){g=e[l-1];if(!(g==null||Kb(g)||Ib(g)&&g.size===0))break;
var k=!0}if(e!==a||f||k){if(!b)e=Array.prototype.slice.call(e,0,l);else if(k||f||h)e.length=l;h&&e.push(h)}k=e}else k=a}return k}
;function Jd(){const a=class{constructor(){}};new a;return a}
var Kd=Jd();var Ld=class{constructor(a,b){this.W=a;a=la(Kd);this.h=!!a&&b===a||!1}};const Md=new Ld(function(a,b,c,d,e){if(a.i!==2)return!1;Ed(a,fd(b,d,c),e);return!0},Kd),Nd=new Ld(function(a,b,c,d,e){if(a.i!==2)return!1;
Ed(a,fd(b,d,c,!0),e);return!0},Kd);
var Od=Symbol(),Pd=Symbol();let Qd,Rd;
function Sd(a){var b=Td,c=Ud,d=a[Od];if(d)return d;d={};d.la=Lc(a[0]);var e=a[1];let f=1;e&&e.constructor===Object&&(d.extensions=e,e=a[++f],typeof e==="function"&&(d.Fa=!0,Qd!=null||(Qd=e),Rd!=null||(Rd=a[f+1]),e=a[f+=2]));const g={};for(;e&&Array.isArray(e)&&e.length&&typeof e[0]==="number"&&e[0]>0;){for(var h=0;h<e.length;h++)g[e[h]]=e;e=a[++f]}for(h=1;e!==void 0;){typeof e==="number"&&(h+=e,e=a[++f]);let n;var k=void 0;e instanceof Ld?n=e:(n=Md,f--);let p;if((p=n)==null?0:p.h){e=a[++f];k=a;var l=
f;typeof e==="function"&&(e=e(),k[l]=e);k=e}e=a[++f];l=h+1;typeof e==="number"&&e<0&&(l-=e,e=a[++f]);for(;h<l;h++){const q=g[h];k?c(d,h,n,k,q):b(d,h,n,q)}}return a[Od]=d}
;function Td(a,b,c,d){const e=c.W;a[b]=d?(f,g,h)=>e(f,g,h,d):e}
function Ud(a,b,c,d,e){const f=c.W;let g,h;a[b]=(k,l,n)=>f(k,l,n,h||(h=Sd(d).la),g||(g=Vd(d)),e)}
function Vd(a){let b=a[Pd];if(b!=null)return b;const c=Sd(a);b=c.Fa?(d,e)=>Qd(d,e,c):(d,e)=>{for(;Cd(e)&&e.i!=4;){var f=e.l,g=c[f];
if(g==null){var h=c.extensions;h&&(h=h[f])&&(h=Wd(h),h!=null&&(g=c[f]=h))}if(g==null||!g(e,d,f)){g=e;f=g.j;Dd(g);if(g.ha)g=void 0;else{h=g.h.h-f;g.h.h=f;b:{g=g.h;f=h;if(f==0){g=pb();break b}const k=yd(g,f);g.Y&&g.m?f=g.j.subarray(k,k+f):(g=g.j,h=k,f=k+f,f=h===f?new Uint8Array(0):bc?g.slice(h,f):new Uint8Array(g.subarray(h,f)));g=f.length==0?pb():new qb(f,mb)}}f=d;g&&(Ob||(Ob=Symbol()),(h=f[Ob])?h.push(g):f[Ob]=[g])}}return!0};
return a[Pd]=b}
function Wd(a){a=Array.isArray(a)?a[0]instanceof Ld?a:[Nd,a]:[a,void 0];const b=a[0].W;if(a=a[1]){const c=Vd(a),d=Sd(a).la;return(e,f,g)=>b(e,f,g,d,c)}return b}
;var Xd;
Xd=new Ld(function(a,b,c){if(a.i!==2)return!1;var d=wd(a.h)>>>0;a=a.h;var e=yd(a,d);a=a.j;if(Ma){var f=a,g;(g=La)||(g=La=new TextDecoder("utf-8",{fatal:!0}));d=e+d;f=e===0&&d===f.length?f:f.subarray(e,d);try{var h=g.decode(f)}catch(l){if(Ka===void 0){try{g.decode(new Uint8Array([128]))}catch(n){}try{g.decode(new Uint8Array([97])),Ka=!0}catch(n){Ka=!1}}!Ka&&(La=void 0);throw l;}}else{h=e;d=h+d;e=[];let l=null;let n;for(;h<d;){var k=a[h++];k<128?e.push(k):k<224?h>=d?Ia():(n=a[h++],k<194||(n&192)!==
128?(h--,Ia()):e.push((k&31)<<6|n&63)):k<240?h>=d-1?Ia():(n=a[h++],(n&192)!==128||k===224&&n<160||k===237&&n>=160||((g=a[h++])&192)!==128?(h--,Ia()):e.push((k&15)<<12|(n&63)<<6|g&63)):k<=244?h>=d-2?Ia():(n=a[h++],(n&192)!==128||(k<<28)+(n-144)>>30!==0||((g=a[h++])&192)!==128||((f=a[h++])&192)!==128?(h--,Ia()):(k=(k&7)<<18|(n&63)<<12|(g&63)<<6|f&63,k-=65536,e.push((k>>10&1023)+55296,(k&1023)+56320))):Ia();e.length>=8192&&(l=Ja(l,e),e.length=0)}h=Ja(l,e)}G(b,A(b),c,h);return!0},Jd());
var Yd=function(a,b,c=Kd){return new Ld(a,c)}(function(a,b,c,d,e){if(a.i!==2)return!1;
d=Mc(void 0,d);var f=A(b);Nb(f);var g=f;const h=g&2;f=Zc(b,g,c);Array.isArray(f)||(f=Lb);var k=y(f);k===0&&g&32&&!h?(k|=33,C(f,k)):k&1||(k|=1,C(f,k));h&&(g=!1,k&2||(Cb(f,34),g=!!(4&k)),g&&Object.freeze(f));k=f;f=A(b);y(k)&4&&(k=wb(k),C(k,(y(k)|1)&-2079),G(b,f,c,k));k.push(d);Ed(a,d,e);return!0},function(a,b,c,d,e){if(Array.isArray(b))for(let n=0;n<b.length;n++){var f=e,g=a,h=g.h;
var k=b[n];var l=d;k instanceof K?(Gc(k),k=k.o):k=Array.isArray(k)?Mc(k,l):void 0;h.call(g,c,k,f)}});function Zd(){}
;function $d(a){for(const b in a)return!1;return!0}
function ae(a){if(!a||typeof a!=="object")return a;if(typeof a.clone==="function")return a.clone();if(typeof Map!=="undefined"&&a instanceof Map)return new Map(a);if(typeof Set!=="undefined"&&a instanceof Set)return new Set(a);if(a instanceof Date)return new Date(a.getTime());const b=Array.isArray(a)?[]:typeof ArrayBuffer!=="function"||typeof ArrayBuffer.isView!=="function"||!ArrayBuffer.isView(a)||a instanceof DataView?{}:new a.constructor(a.length);for(const c in a)b[c]=ae(a[c]);return b}
const be="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ce(a,b){let c,d;for(let e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(let f=0;f<be.length;f++)c=be[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;function de(a,b){this.h=a===ee&&b||""}
de.prototype.toString=function(){return this.h};
var ee={};new de(ee,"");function fe(a){if(!a)return"";if(/^about:(?:blank|srcdoc)$/.test(a))return window.origin||"";a.indexOf("blob:")===0&&(a=a.substring(5));a=a.split("#")[0].split("?")[0];a=a.toLowerCase();a.indexOf("//")==0&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");c!=-1&&(b=b.substring(0,c));c=a.substring(0,a.indexOf("://"));if(!c)throw Error("URI is missing protocol: "+a);if(c!=="http"&&c!=="https"&&c!=="chrome-extension"&&
c!=="moz-extension"&&c!=="file"&&c!=="android-app"&&c!=="chrome-search"&&c!=="chrome-untrusted"&&c!=="chrome"&&c!=="app"&&c!=="devtools")throw Error("Invalid URI scheme in origin: "+c);a="";var d=b.indexOf(":");if(d!=-1){var e=b.substring(d+1);b=b.substring(0,d);if(c==="http"&&e!=="80"||c==="https"&&e!=="443")a=":"+e}return c+"://"+b+a}
;function ge(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;n=l=0}
function b(p){for(var q=g,m=0;m<64;m+=4)q[m/4]=p[m]<<24|p[m+1]<<16|p[m+2]<<8|p[m+3];for(m=16;m<80;m++)p=q[m-3]^q[m-8]^q[m-14]^q[m-16],q[m]=(p<<1|p>>>31)&4294967295;p=e[0];var v=e[1],z=e[2],D=e[3],B=e[4];for(m=0;m<80;m++){if(m<40)if(m<20){var I=D^v&(z^D);var ta=1518500249}else I=v^z^D,ta=1859775393;else m<60?(I=v&z|D&(v|z),ta=2400959708):(I=v^z^D,ta=3395469782);I=((p<<5|p>>>27)&4294967295)+I+B+ta+q[m]&4294967295;B=D;D=z;z=(v<<30|v>>>2)&4294967295;v=p;p=I}e[0]=e[0]+p&4294967295;e[1]=e[1]+v&4294967295;
e[2]=e[2]+z&4294967295;e[3]=e[3]+D&4294967295;e[4]=e[4]+B&4294967295}
function c(p,q){if(typeof p==="string"){p=unescape(encodeURIComponent(p));for(var m=[],v=0,z=p.length;v<z;++v)m.push(p.charCodeAt(v));p=m}q||(q=p.length);m=0;if(l==0)for(;m+64<q;)b(p.slice(m,m+64)),m+=64,n+=64;for(;m<q;)if(f[l++]=p[m++],n++,l==64)for(l=0,b(f);m+64<q;)b(p.slice(m,m+64)),m+=64,n+=64}
function d(){var p=[],q=n*8;l<56?c(h,56-l):c(h,64-(l-56));for(var m=63;m>=56;m--)f[m]=q&255,q>>>=8;b(f);for(m=q=0;m<5;m++)for(var v=24;v>=0;v-=8)p[q++]=e[m]>>v&255;return p}
for(var e=[],f=[],g=[],h=[128],k=1;k<64;++k)h[k]=0;var l,n;a();return{reset:a,update:c,digest:d,ya:function(){for(var p=d(),q="",m=0;m<p.length;m++)q+="0123456789ABCDEF".charAt(Math.floor(p[m]/16))+"0123456789ABCDEF".charAt(p[m]%16);return q}}}
;function he(a,b,c){var d=String(t.location.href);return d&&a&&b?[b,ie(fe(d),a,c||null)].join(" "):null}
function ie(a,b,c){var d=[],e=[];if((Array.isArray(c)?2:1)==1)return e=[b,a],va(d,function(h){e.push(h)}),je(e.join(" "));
var f=[],g=[];va(c,function(h){g.push(h.key);f.push(h.value)});
c=Math.floor((new Date).getTime()/1E3);e=f.length==0?[c,b,a]:[f.join(":"),c,b,a];va(d,function(h){e.push(h)});
a=je(e.join(" "));a=[c,a];g.length==0||a.push(g.join(""));return a.join("_")}
function je(a){var b=ge();b.update(a);return b.ya().toLowerCase()}
;const ke={};function le(){this.h=document||{cookie:""}}
le.prototype.isEnabled=function(){if(!t.navigator.cookieEnabled)return!1;if(this.h.cookie)return!0;this.set("TESTCOOKIESENABLED","1",{ka:60});if(this.get("TESTCOOKIESENABLED")!=="1")return!1;this.remove("TESTCOOKIESENABLED");return!0};
le.prototype.set=function(a,b,c){let d,e,f,g=!1,h;typeof c==="object"&&(h=c.Lb,g=c.Mb||!1,f=c.domain||void 0,e=c.path||void 0,d=c.ka);if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');d===void 0&&(d=-1);this.h.cookie=a+"="+b+(f?";domain="+f:"")+(e?";path="+e:"")+(d<0?"":d==0?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(Date.now()+d*1E3)).toUTCString())+(g?";secure":"")+(h!=null?";samesite="+h:"")};
le.prototype.get=function(a,b){const c=a+"=",d=(this.h.cookie||"").split(";");for(let e=0,f;e<d.length;e++){f=oa(d[e]);if(f.lastIndexOf(c,0)==0)return f.slice(c.length);if(f==a)return""}return b};
le.prototype.remove=function(a,b,c){const d=this.get(a)!==void 0;this.set(a,"",{ka:0,path:b,domain:c});return d};
le.prototype.clear=function(){var a=(this.h.cookie||"").split(";");const b=[],c=[];let d,e;for(let f=0;f<a.length;f++)e=oa(a[f]),d=e.indexOf("="),d==-1?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));for(a=b.length-1;a>=0;a--)this.remove(b[a])};function me(){return!!ke.FPA_SAMESITE_PHASE2_MOD||!1}
function ne(a,b,c,d){(a=t[a])||typeof document==="undefined"||(a=(new le).get(b));return a?he(a,c,d):null}
;function oe(){this.l=this.l;this.i=this.i}
oe.prototype.l=!1;oe.prototype.dispose=function(){this.l||(this.l=!0,this.m())};
oe.prototype[Symbol.dispose]=function(){this.dispose()};
oe.prototype.addOnDisposeCallback=function(a,b){this.l?b!==void 0?a.call(b):a():(this.i||(this.i=[]),b&&(a=a.bind(b)),this.i.push(a))};
oe.prototype.m=function(){if(this.i)for(;this.i.length;)this.i.shift()()};function pe(a,b){a.l(b);a.i<100&&(a.i++,b.next=a.h,a.h=b)}
class qe{constructor(a,b){this.j=a;this.l=b;this.i=0;this.h=null}get(){let a;this.i>0?(this.i--,a=this.h,this.h=a.next,a.next=null):a=this.j();return a}};class re{constructor(){this.i=this.h=null}add(a,b){const c=se.get();c.set(a,b);this.i?this.i.next=c:this.h=c;this.i=c}remove(){let a=null;this.h&&(a=this.h,this.h=this.h.next,this.h||(this.i=null),a.next=null);return a}}var se=new qe(()=>new te,a=>a.reset());
class te{constructor(){this.next=this.scope=this.h=null}set(a,b){this.h=a;this.scope=b;this.next=null}reset(){this.next=this.scope=this.h=null}};let ue,ve=!1,we=new re,ye=(a,b)=>{ue||xe();ve||(ue(),ve=!0);we.add(a,b)},xe=()=>{const a=t.Promise.resolve(void 0);
ue=()=>{a.then(ze)}};
function ze(){let a;for(;a=we.remove();){try{a.h.call(a.scope)}catch(b){Na(b)}pe(se,a)}ve=!1}
;function L(a){this.h=0;this.v=void 0;this.l=this.i=this.j=null;this.m=this.s=!1;if(a!=Zd)try{var b=this;a.call(void 0,function(c){Ae(b,2,c)},function(c){Ae(b,3,c)})}catch(c){Ae(this,3,c)}}
function Be(){this.next=this.context=this.i=this.j=this.h=null;this.l=!1}
Be.prototype.reset=function(){this.context=this.i=this.j=this.h=null;this.l=!1};
var Ce=new qe(function(){return new Be},function(a){a.reset()});
function De(a,b,c){var d=Ce.get();d.j=a;d.i=b;d.context=c;return d}
function Ee(a){if(a instanceof L)return a;var b=new L(Zd);Ae(b,2,a);return b}
L.prototype.then=function(a,b,c){return Fe(this,typeof a==="function"?a:null,typeof b==="function"?b:null,c)};
L.prototype.$goog_Thenable=!0;L.prototype.D=function(a,b){return Fe(this,null,a,b)};
L.prototype.catch=L.prototype.D;L.prototype.cancel=function(a){if(this.h==0){var b=new Ge(a);ye(function(){He(this,b)},this)}};
function He(a,b){if(a.h==0)if(a.j){var c=a.j;if(c.i){for(var d=0,e=null,f=null,g=c.i;g&&(g.l||(d++,g.h==a&&(e=g),!(e&&d>1)));g=g.next)e||(f=g);e&&(c.h==0&&d==1?He(c,b):(f?(d=f,d.next==c.l&&(c.l=d),d.next=d.next.next):Ie(c),Je(c,e,3,b)))}a.j=null}else Ae(a,3,b)}
function Ke(a,b){a.i||a.h!=2&&a.h!=3||Le(a);a.l?a.l.next=b:a.i=b;a.l=b}
function Fe(a,b,c,d){var e=De(null,null,null);e.h=new L(function(f,g){e.j=b?function(h){try{var k=b.call(d,h);f(k)}catch(l){g(l)}}:f;
e.i=c?function(h){try{var k=c.call(d,h);k===void 0&&h instanceof Ge?g(h):f(k)}catch(l){g(l)}}:g});
e.h.j=a;Ke(a,e);return e.h}
L.prototype.I=function(a){this.h=0;Ae(this,2,a)};
L.prototype.K=function(a){this.h=0;Ae(this,3,a)};
function Ae(a,b,c){if(a.h==0){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.h=1;a:{var d=c,e=a.I,f=a.K;if(d instanceof L){Ke(d,De(e||Zd,f||null,a));var g=!0}else{if(d)try{var h=!!d.$goog_Thenable}catch(l){h=!1}else h=!1;if(h)d.then(e,f,a),g=!0;else{h=typeof d;if(h=="object"&&d!=null||h=="function")try{var k=d.then;if(typeof k==="function"){Me(d,k,e,f,a);g=!0;break a}}catch(l){f.call(a,l);g=!0;break a}g=!1}}}g||(a.v=c,a.h=b,a.j=null,Le(a),b!=3||c instanceof Ge||Ne(a,c))}}
function Me(a,b,c,d,e){function f(k){h||(h=!0,d.call(e,k))}
function g(k){h||(h=!0,c.call(e,k))}
var h=!1;try{b.call(a,g,f)}catch(k){f(k)}}
function Le(a){a.s||(a.s=!0,ye(a.A,a))}
function Ie(a){var b=null;a.i&&(b=a.i,a.i=b.next,b.next=null);a.i||(a.l=null);return b}
L.prototype.A=function(){for(var a;a=Ie(this);)Je(this,a,this.h,this.v);this.s=!1};
function Je(a,b,c,d){if(c==3&&b.i&&!b.l)for(;a&&a.m;a=a.j)a.m=!1;if(b.h)b.h.j=null,Oe(b,c,d);else try{b.l?b.j.call(b.context):Oe(b,c,d)}catch(e){Pe.call(null,e)}pe(Ce,b)}
function Oe(a,b,c){b==2?a.j.call(a.context,c):a.i&&a.i.call(a.context,c)}
function Ne(a,b){a.m=!0;ye(function(){a.m&&Pe.call(null,b)})}
var Pe=Na;function Ge(a){na.call(this,a)}
ma(Ge,na);Ge.prototype.name="cancel";const Qe=self;class Re{constructor(){this.promise=new Promise((a,b)=>{this.resolve=a;this.reject=b})}}
;function M(a){oe.call(this);this.I=1;this.s=[];this.v=0;this.h=[];this.j={};this.X=!!a}
ma(M,oe);M.prototype.K=function(a,b,c){var d=this.j[a];d||(d=this.j[a]=[]);var e=this.I;this.h[e]=a;this.h[e+1]=b;this.h[e+2]=c;this.I=e+3;d.push(e);return e};
M.prototype.D=function(a){var b=this.h[a];if(b){var c=this.j[b];this.v!=0?(this.s.push(a),this.h[a+1]=()=>{}):(c&&xa(c,a),delete this.h[a],delete this.h[a+1],delete this.h[a+2])}return!!b};
M.prototype.A=function(a,b){var c=this.j[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.X)for(e=0;e<c.length;e++){var g=c[e];Se(this.h[g+1],this.h[g+2],d)}else{this.v++;try{for(e=0,f=c.length;e<f&&!this.l;e++)g=c[e],this.h[g+1].apply(this.h[g+2],d)}finally{if(this.v--,this.s.length>0&&this.v==0)for(;c=this.s.pop();)this.D(c)}}return e!=0}return!1};
function Se(a,b,c){ye(function(){a.apply(b,c)})}
M.prototype.clear=function(a){if(a){var b=this.j[a];b&&(b.forEach(this.D,this),delete this.j[a])}else this.h.length=0,this.j={}};
M.prototype.m=function(){M.Ka.m.call(this);this.clear();this.s.length=0};/*

 (The MIT License)

 Copyright (C) 2014 by Vitaly Puzrin

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.

 -----------------------------------------------------------------------------
 Ported from zlib, which is under the following license
 https://github.com/madler/zlib/blob/master/zlib.h

 zlib.h -- interface of the 'zlib' general purpose compression library
   version 1.2.8, April 28th, 2013
   Copyright (C) 1995-2013 Jean-loup Gailly and Mark Adler
   This software is provided 'as-is', without any express or implied
   warranty.  In no event will the authors be held liable for any damages
   arising from the use of this software.
   Permission is granted to anyone to use this software for any purpose,
   including commercial applications, and to alter it and redistribute it
   freely, subject to the following restrictions:
   1. The origin of this software must not be misrepresented; you must not
      claim that you wrote the original software. If you use this software
      in a product, an acknowledgment in the product documentation would be
      appreciated but is not required.
   2. Altered source versions must be plainly marked as such, and must not be
      misrepresented as being the original software.
   3. This notice may not be removed or altered from any source distribution.
   Jean-loup Gailly        Mark Adler
   jloup@gzip.org          madler@alumni.caltech.edu
   The data format used by the zlib library is described by RFCs (Request for
   Comments) 1950 to 1952 in the files http://tools.ietf.org/html/rfc1950
   (zlib format), rfc1951 (deflate format) and rfc1952 (gzip format).
*/
let N={};var Te=typeof Uint8Array!=="undefined"&&typeof Uint16Array!=="undefined"&&typeof Int32Array!=="undefined";N.assign=function(a){for(var b=Array.prototype.slice.call(arguments,1);b.length;){var c=b.shift();if(c){if(typeof c!=="object")throw new TypeError(c+"must be non-object");for(var d in c)Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d])}}return a};
N.Pb=function(a,b){if(a.length===b)return a;if(a.subarray)return a.subarray(0,b);a.length=b;return a};
var Ue={va:function(a,b,c,d,e){if(b.subarray&&a.subarray)a.set(b.subarray(c,c+d),e);else for(var f=0;f<d;f++)a[e+f]=b[c+f]},
za:function(a){var b,c;var d=c=0;for(b=a.length;d<b;d++)c+=a[d].length;var e=new Uint8Array(c);d=c=0;for(b=a.length;d<b;d++){var f=a[d];e.set(f,c);c+=f.length}return e}},Ve={va:function(a,b,c,d,e){for(var f=0;f<d;f++)a[e+f]=b[c+f]},
za:function(a){return[].concat.apply([],a)}};
N.Ja=function(){Te?(N.qa=Uint8Array,N.oa=Uint16Array,N.pa=Int32Array,N.assign(N,Ue)):(N.qa=Array,N.oa=Array,N.pa=Array,N.assign(N,Ve))};
N.Ja();try{new Uint8Array(1)}catch(a){};function We(a){for(var b=a.length;--b>=0;)a[b]=0}
We(Array(576));We(Array(60));We(Array(512));We(Array(256));We(Array(29));We(Array(30));/*

Math.uuid.js (v1.4)
http://www.broofa.com
mailto:robert@broofa.com
Copyright (c) 2010 Robert Kieffer
Dual licensed under the MIT and GPL licenses.
*/
var Xe="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");var Ye=class{constructor(a){this.name=a}};var Ze=new Ye("rawColdConfigGroup");var $e=new Ye("rawHotConfigGroup");var af=class extends K{constructor(a){super(a)}};var bf=class extends K{constructor(a){super(a)}};var cf=class extends K{constructor(a){super(a)}};var df=class extends K{constructor(a){super(a)}getPlayerType(){var a=Yc(this,36);a=a==null?a:Number.isFinite(a)?a|0:void 0;return a!=null?a:0}setHomeGroupInfo(a){return H(this,cf,81,a)}clearLocationPlayabilityToken(){return ad(this,89)}};var ef=class extends K{constructor(a){super(a)}getKey(){return md(this,1)}},ff=[2,3,4,5,6];var gf=class extends K{constructor(a){super(a)}setTrackingParams(a){if(a!=null)if(typeof a==="string")a=a?new qb(a,mb):pb();else if(a.constructor!==qb)if(lb(a))a=a.length?new qb(new Uint8Array(a),mb):pb();else throw Error();return ad(this,1,a)}};var hf=class extends K{constructor(a){super(a)}};var jf=class extends K{constructor(a){super(a)}};var kf=class extends K{constructor(a){super(a)}};var lf=class extends K{constructor(a){super(a)}setSafetyMode(a){return qd(this,5,a)}};var mf=class extends K{constructor(a){super(a)}j(a){return H(this,df,1,a)}};var nf=class extends K{constructor(a){super(a,497)}};var of=class extends K{constructor(a){super(a)}};var pf=class extends K{constructor(a){super(a)}setVideoId(a){return cd(this,1,od,mc(a))}getPlaylistId(){return nd(this,2)}},od=[1,2];var qf=class extends K{constructor(){super()}};var rf=new Ye("recordNotificationInteractionsEndpoint");var sf=["notification/convert_endpoint_to_url"],tf=["notification/record_interactions"],uf=["notification_registration/set_registration"];var vf=a=>self.btoa(String.fromCharCode.apply(null,Array.from(new Uint8Array(a)))).replace(/\+/g,"-").replace(/\//g,"_");var wf=["notifications_register","notifications_check_registration"];var xf=class extends Error{constructor(a,...b){super(a);this.args=[...b]}};let yf=null;function O(a,b){const c={};c.key=a;c.value=b;return zf().then(d=>new Promise((e,f)=>{try{const g=d.transaction("swpushnotificationsstore","readwrite").objectStore("swpushnotificationsstore").put(c);g.onsuccess=()=>{e()};
g.onerror=()=>{f()}}catch(g){f(g)}}))}
function Af(){return O("IndexedDBCheck","testing IndexedDB").then(()=>Bf("IndexedDBCheck")).then(a=>a==="testing IndexedDB"?Promise.resolve():Promise.reject()).then(()=>!0).catch(()=>!1)}
function Bf(a){const b=new xf("Error accessing DB");return zf().then(c=>new Promise((d,e)=>{try{const f=c.transaction("swpushnotificationsstore").objectStore("swpushnotificationsstore").get(a);f.onsuccess=()=>{const g=f.result;d(g?g.value:null)};
f.onerror=()=>{b.params={key:a,source:"onerror"};e(b)}}catch(f){b.params={key:a,
thrownError:String(f)},e(b)}}),()=>null)}
function zf(){return yf?Promise.resolve(yf):new Promise((a,b)=>{const c=self.indexedDB.open("swpushnotificationsdb");c.onerror=b;c.onsuccess=()=>{const d=c.result;if(d.objectStoreNames.contains("swpushnotificationsstore"))yf=d,a(yf);else return self.indexedDB.deleteDatabase("swpushnotificationsdb"),zf()};
c.onupgradeneeded=Cf})}
function Cf(a){a=a.target.result;a.objectStoreNames.contains("swpushnotificationsstore")&&a.deleteObjectStore("swpushnotificationsstore");a.createObjectStore("swpushnotificationsstore",{keyPath:"key"})}
;const Df={WEB_UNPLUGGED:"^unplugged/",WEB_UNPLUGGED_ONBOARDING:"^unplugged/",WEB_UNPLUGGED_OPS:"^unplugged/",WEB_UNPLUGGED_PUBLIC:"^unplugged/",WEB_CREATOR:"^creator/",WEB_KIDS:"^kids/",WEB_EXPERIMENTS:"^experiments/",WEB_MUSIC:"^music/",WEB_REMIX:"^music/",WEB_MUSIC_EMBEDDED_PLAYER:"^music/",WEB_MUSIC_EMBEDDED_PLAYER:"^main_app/|^sfv/"};
function Ef(a){if(a.length===1)return a[0];var b=Df.UNKNOWN_INTERFACE;if(b){b=new RegExp(b);for(var c of a)if(b.exec(c))return c}const d=[];Object.entries(Df).forEach(([e,f])=>{"UNKNOWN_INTERFACE"!==e&&d.push(f)});
c=new RegExp(d.join("|"));a.sort((e,f)=>e.length-f.length);
for(const e of a)if(!c.exec(e))return e;return a[0]}
function Ff(a){return`/youtubei/v1/${Ef(a)}`}
;var Gf=class extends K{constructor(a){super(a)}};var Hf=class extends K{constructor(a){super(a,0,"yt.sw.adr")}};const If=t.window;let Jf,Kf;const Lf=(If==null?void 0:(Jf=If.yt)==null?void 0:Jf.config_)||(If==null?void 0:(Kf=If.ytcfg)==null?void 0:Kf.data_)||{};w("yt.config_",Lf);function P(...a){a=arguments;a.length>1?Lf[a[0]]=a[1]:a.length===1&&Object.assign(Lf,a[0])}
function Q(a,b){return a in Lf?Lf[a]:b}
;const Mf=[];function Nf(a){Mf.forEach(b=>b(a))}
function R(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){Of(b)}}:a}
function Of(a){var b=u("yt.logging.errors.log");b?b(a,"ERROR",void 0,void 0,void 0,void 0,void 0):(b=Q("ERRORS",[]),b.push([a,"ERROR",void 0,void 0,void 0,void 0,void 0]),P("ERRORS",b));Nf(a)}
function Pf(a){var b=u("yt.logging.errors.log");b?b(a,"WARNING",void 0,void 0,void 0,void 0,void 0):(b=Q("ERRORS",[]),b.push([a,"WARNING",void 0,void 0,void 0,void 0,void 0]),P("ERRORS",b))}
;const Qf=/^[\w.]*$/,Rf={q:!0,search_query:!0};function Sf(a,b){b=a.split(b);const c={};for(let f=0,g=b.length;f<g;f++){const h=b[f].split("=");if(h.length===1&&h[0]||h.length===2)try{const k=Tf(h[0]||""),l=Tf(h[1]||"");if(k in c){const n=c[k];Array.isArray(n)?ya(n,l):c[k]=[n,l]}else c[k]=l}catch(k){var d=k,e=h[0];const l=String(Sf);d.args=[{key:e,value:h[1],query:a,method:Uf===l?"unchanged":l}];Rf.hasOwnProperty(e)||Pf(d)}}return c}
const Uf=String(Sf);function Vf(a){a.charAt(0)==="?"&&(a=a.substring(1));return Sf(a,"&")}
function Wf(a,b,c){var d=a.split("#",2);a=d[0];d=d.length>1?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=Vf(e[1]||"");for(var f in b)!c&&e!==null&&f in e||(e[f]=b[f]);b=a;a=Ha(e);a?(c=b.indexOf("#"),c<0&&(c=b.length),f=b.indexOf("?"),f<0||f>c?(f=c,e=""):e=b.substring(f+1,c),b=[b.slice(0,f),e,b.slice(c)],c=b[1],b[1]=a?c?c+"&"+a:a:c,a=b[0]+(b[1]?"?"+b[1]:"")+b[2]):a=b;return a+d}
function Xf(a){if(!b)var b=window.location.href;const c=a.match(Ea)[1]||null,d=Fa(a.match(Ea)[3]||null);c&&d?(a=a.match(Ea),b=b.match(Ea),a=a[3]==b[3]&&a[1]==b[1]&&a[4]==b[4]):a=d?Fa(b.match(Ea)[3]||null)===d&&(Number(b.match(Ea)[4]||null)||null)===(Number(a.match(Ea)[4]||null)||null):!0;return a}
function Tf(a){return a&&a.match(Qf)?a:decodeURIComponent(a.replace(/\+/g," "))}
;function Yf(a,b){typeof a==="function"&&(a=R(a));return window.setTimeout(a,b)}
;var Zf="client_dev_domain client_dev_expflag client_dev_regex_map client_dev_root_url client_rollout_override expflag forcedCapability jsfeat jsmode mods".split(" "),$f=[...Zf,"client_dev_set_cookie"];function S(a){a=ag(a);return typeof a==="string"&&a==="false"?!1:!!a}
function T(a,b){a=ag(a);return a===void 0&&b!==void 0?b:Number(a||0)}
function bg(){return Q("EXPERIMENTS_TOKEN","")}
function ag(a){return Q("EXPERIMENT_FLAGS",{})[a]}
function cg(){const a=[],b=Q("EXPERIMENTS_FORCED_FLAGS",{});for(var c of Object.keys(b))a.push({key:c,value:String(b[c])});c=Q("EXPERIMENT_FLAGS",{});for(const d of Object.keys(c))d.startsWith("force_")&&b[d]===void 0&&a.push({key:d,value:String(c[d])});return a}
;[...Zf];let dg=!1;function eg(a,b){const c={method:b.method||"GET",credentials:"same-origin"};b.headers&&(c.headers=b.headers);b.priority&&(c.priority=b.priority);a=fg(a,b);const d=hg(a,b);d&&(c.body=d);b.withCredentials&&(c.credentials="include");const e=b.context||t;let f=!1,g;fetch(a,c).then(h=>{if(!f){f=!0;g&&window.clearTimeout(g);var k=h.ok,l=n=>{n=n||{};k?b.onSuccess&&b.onSuccess.call(e,n,h):b.onError&&b.onError.call(e,n,h);b.onFinish&&b.onFinish.call(e,n,h)};
(b.format||"JSON")==="JSON"&&(k||h.status>=400&&h.status<500)?h.json().then(l,()=>{l(null)}):l(null)}}).catch(()=>{b.onError&&b.onError.call(e,{},{})});
a=b.timeout||0;b.onFetchTimeout&&a>0&&(g=Yf(()=>{f||(f=!0,window.clearTimeout(g),b.onFetchTimeout.call(b.context||t))},a))}
function fg(a,b){b.includeDomain&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);const c=Q("XSRF_FIELD_NAME");if(b=b.urlParams)b[c]&&delete b[c],a=Wf(a,b||{},!0);return a}
function hg(a,b){const c=Q("XSRF_FIELD_NAME"),d=Q("XSRF_TOKEN");var e=b.postBody||"",f=b.postParams;const g=Q("XSRF_FIELD_NAME");let h;b.headers&&(h=b.headers["Content-Type"]);b.excludeXsrf||Fa(a.match(Ea)[3]||null)&&!b.withCredentials&&Fa(a.match(Ea)[3]||null)!==document.location.hostname||b.method!=="POST"||h&&h!=="application/x-www-form-urlencoded"||b.postParams&&b.postParams[g]||(f||(f={}),f[c]=d);(S("ajax_parse_query_data_only_when_filled")&&f&&Object.keys(f).length>0||f)&&typeof e==="string"&&
(e=Vf(e),ce(e,f),e=b.postBodyFormat&&b.postBodyFormat==="JSON"?JSON.stringify(e):Ha(e));f=e||f&&!$d(f);!dg&&f&&b.method!=="POST"&&(dg=!0,Of(Error("AJAX request with postData should use POST")));return e}
;const ig=[{ba:a=>`Cannot read property '${a.key}'`,
U:{Error:[{u:/(Permission denied) to access property "([^']+)"/,groups:["reason","key"]}],TypeError:[{u:/Cannot read property '([^']+)' of (null|undefined)/,groups:["key","value"]},{u:/\u65e0\u6cd5\u83b7\u53d6\u672a\u5b9a\u4e49\u6216 (null|undefined) \u5f15\u7528\u7684\u5c5e\u6027\u201c([^\u201d]+)\u201d/,groups:["value","key"]},{u:/\uc815\uc758\ub418\uc9c0 \uc54a\uc74c \ub610\ub294 (null|undefined) \ucc38\uc870\uc778 '([^']+)' \uc18d\uc131\uc744 \uac00\uc838\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4./,
groups:["value","key"]},{u:/No se puede obtener la propiedad '([^']+)' de referencia nula o sin definir/,groups:["key"]},{u:/Unable to get property '([^']+)' of (undefined or null) reference/,groups:["key","value"]},{u:/(null) is not an object \(evaluating '(?:([^.]+)\.)?([^']+)'\)/,groups:["value","base","key"]}]}},{ba:a=>`Cannot call '${a.key}'`,
U:{TypeError:[{u:/(?:([^ ]+)?\.)?([^ ]+) is not a function/,groups:["base","key"]},{u:/([^ ]+) called on (null or undefined)/,groups:["key","value"]},{u:/Object (.*) has no method '([^ ]+)'/,groups:["base","key"]},{u:/Object doesn't support property or method '([^ ]+)'/,groups:["key"]},{u:/\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f '([^']+)' \u30d7\u30ed\u30d1\u30c6\u30a3\u307e\u305f\u306f\u30e1\u30bd\u30c3\u30c9\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093/,groups:["key"]},{u:/\uac1c\uccb4\uac00 '([^']+)' \uc18d\uc131\uc774\ub098 \uba54\uc11c\ub4dc\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4./,
groups:["key"]}]}},{ba:a=>`${a.key} is not defined`,
U:{ReferenceError:[{u:/(.*) is not defined/,groups:["key"]},{u:/Can't find variable: (.*)/,groups:["key"]}]}}];var kg={G:[],F:[{callback:jg,weight:500}]};function jg(a){if(a.name==="JavaException")return!0;a=a.stack;return a.includes("chrome://")||a.includes("chrome-extension://")||a.includes("moz-extension://")}
;function lg(){if(!mg){var a=mg=new ng;a.G.length=0;a.F.length=0;og(a,kg)}return mg}
function og(a,b){b.G&&a.G.push.apply(a.G,b.G);b.F&&a.F.push.apply(a.F,b.F)}
var ng=class{constructor(){this.F=[];this.G=[]}},mg;const pg=new M;function qg(a){const b=a.length;let c=0;const d=()=>a.charCodeAt(c++);
do{var e=rg(d);if(e===Infinity)break;const f=e>>3;switch(e&7){case 0:e=rg(d);if(f===2)return e;break;case 1:if(f===2)return;c+=8;break;case 2:e=rg(d);if(f===2)return a.substr(c,e);c+=e;break;case 5:if(f===2)return;c+=4;break;default:return}}while(c<b)}
function rg(a){let b=a(),c=b&127;if(b<128)return c;b=a();c|=(b&127)<<7;if(b<128)return c;b=a();c|=(b&127)<<14;if(b<128)return c;b=a();return b<128?c|(b&127)<<21:Infinity}
;function sg(a,b,c,d){if(a)if(Array.isArray(a)){var e=d;for(d=0;d<a.length&&!(a[d]&&(e+=tg(d,a[d],b,c),e>500));d++);d=e}else if(typeof a==="object")for(e in a){if(a[e]){var f=e;var g=a[e],h=b,k=c;f=typeof g!=="string"||f!=="clickTrackingParams"&&f!=="trackingParams"?0:(g=qg(atob(g.replace(/-/g,"+").replace(/_/g,"/"))))?tg(`${f}.ve`,g,h,k):0;d+=f;d+=tg(e,a[e],b,c);if(d>500)break}}else c[b]=ug(a),d+=c[b].length;else c[b]=ug(a),d+=c[b].length;return d}
function tg(a,b,c,d){c+=`.${a}`;a=ug(b);d[c]=a;return c.length+a.length}
function ug(a){try{return(typeof a==="string"?a:String(JSON.stringify(a))).substr(0,500)}catch(b){return`unable to serialize ${typeof a} (${b.message})`}}
;function vg(){wg.h||(wg.h=new wg);return wg.h}
function xg(a,b){a={};var c=[],d=S("enable_first_party_auth_v2");"USER_SESSION_ID"in Lf&&d&&c.push({key:"u",value:Q("USER_SESSION_ID")});var e=fe(String(t.location.href));d=[];var f=t.__SAPISID||t.__APISID||t.__3PSAPISID||t.__OVERRIDE_SID;me()&&(f=f||t.__1PSAPISID);if(f)f=!0;else{if(typeof document!=="undefined"){const g=new le;f=g.get("SAPISID")||g.get("APISID")||g.get("__Secure-3PAPISID");me()&&(f=f||g.get("__Secure-1PAPISID"))}f=!!f}f&&(f=(e=e.indexOf("https:")==0||e.indexOf("chrome-extension:")==
0||e.indexOf("chrome-untrusted://new-tab-page")==0||e.indexOf("moz-extension:")==0)?t.__SAPISID:t.__APISID,f||typeof document==="undefined"||(f=new le,f=f.get(e?"SAPISID":"APISID")||f.get("__Secure-3PAPISID")),(f=f?he(f,e?"SAPISIDHASH":"APISIDHASH",c):null)&&d.push(f),e&&me()&&((e=ne("__1PSAPISID","__Secure-1PAPISID","SAPISID1PHASH",c))&&d.push(e),(c=ne("__3PSAPISID","__Secure-3PAPISID","SAPISID3PHASH",c))&&d.push(c)));if(c=d.length==0?null:d.join(" "))a.Authorization=c,c=b=b==null?void 0:b.sessionIndex,
c===void 0&&(c=Number(Q("SESSION_INDEX",0)),c=isNaN(c)?0:c),S("voice_search_auth_header_removal")||(a["X-Goog-AuthUser"]=c.toString()),"INNERTUBE_HOST_OVERRIDE"in Lf||(a["X-Origin"]=window.location.origin),b===void 0&&"DELEGATED_SESSION_ID"in Lf&&(a["X-Goog-PageId"]=Q("DELEGATED_SESSION_ID"));return a}
var wg=class{constructor(){this.La=!0}};var yg={identityType:"UNAUTHENTICATED_IDENTITY_TYPE_UNKNOWN"};function zg(a){switch(a){case "DESKTOP":return 1;case "UNKNOWN_PLATFORM":return 0;case "TV":return 2;case "GAME_CONSOLE":return 3;case "MOBILE":return 4;case "TABLET":return 5}}
;w("ytglobal.prefsUserPrefsPrefs_",u("ytglobal.prefsUserPrefsPrefs_")||{});function Ag(){if(Q("DATASYNC_ID")!==void 0)return Q("DATASYNC_ID");throw new xf("Datasync ID not set","unknown");}
;function Bg(a,b){return Cg(a,0,b)}
function Dg(a){const b=u("yt.scheduler.instance.addImmediateJob");b?b(a):a()}
var Eg=class{h(a){Cg(a,1)}};function Fg(){Gg.h||(Gg.h=new Gg);return Gg.h}
function Cg(a,b,c){c!==void 0&&Number.isNaN(Number(c))&&(c=void 0);const d=u("yt.scheduler.instance.addJob");return d?d(a,b,c):c===void 0?(a(),NaN):Yf(a,c||0)}
var Gg=class extends Eg{R(a){if(a===void 0||!Number.isNaN(Number(a))){var b=u("yt.scheduler.instance.cancelJob");b?b(a):window.clearTimeout(a)}}start(){const a=u("yt.scheduler.instance.start");a&&a()}},Hg=Fg();const Ig=[];let Jg,Kg=!1;function Lg(a){Kg||(Jg?Jg.handleError(a):(Ig.push({type:"ERROR",payload:a}),Ig.length>10&&Ig.shift()))}
function Mg(a,b){Kg||(Jg?Jg.S(a,b):(Ig.push({type:"EVENT",eventType:a,payload:b}),Ig.length>10&&Ig.shift()))}
;function Ng(a){if(a.indexOf(":")>=0)throw Error("Database name cannot contain ':'");}
function Og(a){return a.substr(0,a.indexOf(":"))||a}
;const Pg={AUTH_INVALID:"No user identifier specified.",EXPLICIT_ABORT:"Transaction was explicitly aborted.",IDB_NOT_SUPPORTED:"IndexedDB is not supported.",MISSING_INDEX:"Index not created.",MISSING_OBJECT_STORES:"Object stores not created.",DB_DELETED_BY_MISSING_OBJECT_STORES:"Database is deleted because expected object stores were not created.",DB_REOPENED_BY_MISSING_OBJECT_STORES:"Database is reopened because expected object stores were not created.",UNKNOWN_ABORT:"Transaction was aborted for unknown reasons.",
QUOTA_EXCEEDED:"The current transaction exceeded its quota limitations.",QUOTA_MAYBE_EXCEEDED:"The current transaction may have failed because of exceeding quota limitations.",EXECUTE_TRANSACTION_ON_CLOSED_DB:"Can't start a transaction on a closed database",INCOMPATIBLE_DB_VERSION:"The binary is incompatible with the database version"},Qg={AUTH_INVALID:"ERROR",EXECUTE_TRANSACTION_ON_CLOSED_DB:"WARNING",EXPLICIT_ABORT:"IGNORED",IDB_NOT_SUPPORTED:"ERROR",MISSING_INDEX:"WARNING",MISSING_OBJECT_STORES:"ERROR",
DB_DELETED_BY_MISSING_OBJECT_STORES:"WARNING",DB_REOPENED_BY_MISSING_OBJECT_STORES:"WARNING",QUOTA_EXCEEDED:"WARNING",QUOTA_MAYBE_EXCEEDED:"WARNING",UNKNOWN_ABORT:"WARNING",INCOMPATIBLE_DB_VERSION:"WARNING"},Rg={AUTH_INVALID:!1,EXECUTE_TRANSACTION_ON_CLOSED_DB:!1,EXPLICIT_ABORT:!1,IDB_NOT_SUPPORTED:!1,MISSING_INDEX:!1,MISSING_OBJECT_STORES:!1,DB_DELETED_BY_MISSING_OBJECT_STORES:!1,DB_REOPENED_BY_MISSING_OBJECT_STORES:!1,QUOTA_EXCEEDED:!1,QUOTA_MAYBE_EXCEEDED:!0,UNKNOWN_ABORT:!0,INCOMPATIBLE_DB_VERSION:!1};
var U=class extends xf{constructor(a,b={},c=Pg[a],d=Qg[a],e=Rg[a]){super(c,Object.assign({},{name:"YtIdbKnownError",isSw:self.document===void 0,isIframe:self!==self.top,type:a},b));this.type=a;this.message=c;this.level=d;this.h=e;Object.setPrototypeOf(this,U.prototype)}},Sg=class extends U{constructor(a,b){super("MISSING_OBJECT_STORES",{expectedObjectStores:b,foundObjectStores:a},Pg.MISSING_OBJECT_STORES);Object.setPrototypeOf(this,Sg.prototype)}},Tg=class extends Error{constructor(a,b){super();this.index=
a;this.objectStore=b;Object.setPrototypeOf(this,Tg.prototype)}};const Ug=["The database connection is closing","Can't start a transaction on a closed database","A mutation operation was attempted on a database that did not allow mutations"];
function Vg(a,b,c,d){b=Og(b);let e;e=a instanceof Error?a:Error(`Unexpected error: ${a}`);if(e instanceof U)return e;a={objectStoreNames:c,dbName:b,dbVersion:d};if(e.name==="QuotaExceededError")return new U("QUOTA_EXCEEDED",a);if(Ya&&e.name==="UnknownError")return new U("QUOTA_MAYBE_EXCEEDED",a);if(e instanceof Tg)return new U("MISSING_INDEX",Object.assign({},a,{objectStore:e.objectStore,index:e.index}));if(e.name==="InvalidStateError"&&Ug.some(f=>e.message.includes(f)))return new U("EXECUTE_TRANSACTION_ON_CLOSED_DB",
a);
if(e.name==="AbortError")return new U("UNKNOWN_ABORT",a,e.message);e.args=[Object.assign({},a,{name:"IdbError",Cb:e.name})];e.level="WARNING";return e}
function Wg(a,b,c){return new U("IDB_NOT_SUPPORTED",{context:{caller:a,publicName:b,version:c,hasSucceededOnce:void 0}})}
;function Xg(a){if(!a)throw Error();throw a;}
function Yg(a){return a}
var Zg=class{constructor(a){this.h=a}};function $g(a,b,c,d,e){try{if(a.state.status!=="FULFILLED")throw Error("calling handleResolve before the promise is fulfilled.");const f=c(a.state.value);f instanceof ah?bh(a,b,f,d,e):d(f)}catch(f){e(f)}}
function ch(a,b,c,d,e){try{if(a.state.status!=="REJECTED")throw Error("calling handleReject before the promise is rejected.");const f=c(a.state.reason);f instanceof ah?bh(a,b,f,d,e):d(f)}catch(f){e(f)}}
function bh(a,b,c,d,e){b===c?e(new TypeError("Circular promise chain detected.")):c.then(f=>{f instanceof ah?bh(a,b,f,d,e):d(f)},f=>{e(f)})}
var ah=class{constructor(a){this.state={status:"PENDING"};this.h=[];this.i=[];a=a.h;const b=d=>{if(this.state.status==="PENDING"){this.state={status:"FULFILLED",value:d};for(const e of this.h)e()}},c=d=>{if(this.state.status==="PENDING"){this.state={status:"REJECTED",
reason:d};for(const e of this.i)e()}};
try{a(b,c)}catch(d){c(d)}}static all(a){return new ah(new Zg((b,c)=>{const d=[];let e=a.length;e===0&&b(d);for(let f=0;f<a.length;++f)ah.resolve(a[f]).then(g=>{d[f]=g;e--;e===0&&b(d)}).catch(g=>{c(g)})}))}static resolve(a){return new ah(new Zg((b,c)=>{a instanceof ah?a.then(b,c):b(a)}))}static reject(a){return new ah(new Zg((b,c)=>{c(a)}))}then(a,b){const c=a!=null?a:Yg,d=b!=null?b:Xg;
return new ah(new Zg((e,f)=>{this.state.status==="PENDING"?(this.h.push(()=>{$g(this,this,c,e,f)}),this.i.push(()=>{ch(this,this,d,e,f)})):this.state.status==="FULFILLED"?$g(this,this,c,e,f):this.state.status==="REJECTED"&&ch(this,this,d,e,f)}))}catch(a){return this.then(void 0,a)}};function dh(a,b,c){const d=()=>{try{a.removeEventListener("success",e),a.removeEventListener("error",f)}catch(g){}},e=()=>{b(a.result);
d()},f=()=>{c(a.error);
d()};
a.addEventListener("success",e);a.addEventListener("error",f)}
function eh(a){return new Promise((b,c)=>{dh(a,b,c)})}
function V(a){return new ah(new Zg((b,c)=>{dh(a,b,c)}))}
;function fh(a,b){return new ah(new Zg((c,d)=>{const e=()=>{const f=a?b(a):null;f?f.then(g=>{a=g;e()},d):c()};
e()}))}
;const gh=window;var W=gh.ytcsi&&gh.ytcsi.now?gh.ytcsi.now:gh.performance&&gh.performance.timing&&gh.performance.now&&gh.performance.timing.navigationStart?()=>gh.performance.timing.navigationStart+gh.performance.now():()=>(new Date).getTime();function X(a,b,c,d){return r(function*(){const e={mode:"readonly",B:!1,tag:"IDB_TRANSACTION_TAG_UNKNOWN"};typeof c==="string"?e.mode=c:Object.assign(e,c);a.transactionCount++;const f=e.B?3:1;let g=0,h;for(;!h;){g++;const n=Math.round(W());try{var k=a.h.transaction(b,e.mode),l=d;const p=new hh(k),q=yield ih(p,l),m=Math.round(W());jh(a,n,m,g,void 0,b.join(),e);return q}catch(p){l=Math.round(W());const q=Vg(p,a.h.name,b.join(),a.h.version);if(q instanceof U&&!q.h||g>=f)jh(a,n,l,g,q,b.join(),e),h=q}}return Promise.reject(h)})}
function kh(a,b,c){a=a.h.createObjectStore(b,c);return new lh(a)}
function mh(a,b,c,d){return X(a,[b],{mode:"readwrite",B:!0},e=>{e=e.objectStore(b);return V(e.h.put(c,d))})}
function jh(a,b,c,d,e,f,g){b=c-b;e?(e instanceof U&&(e.type==="QUOTA_EXCEEDED"||e.type==="QUOTA_MAYBE_EXCEEDED")&&Mg("QUOTA_EXCEEDED",{dbName:Og(a.h.name),objectStoreNames:f,transactionCount:a.transactionCount,transactionMode:g.mode}),e instanceof U&&e.type==="UNKNOWN_ABORT"&&(c-=a.j,c<0&&c>=2147483648&&(c=0),Mg("TRANSACTION_UNEXPECTEDLY_ABORTED",{objectStoreNames:f,transactionDuration:b,transactionCount:a.transactionCount,dbDuration:c}),a.i=!0),nh(a,!1,d,f,b,g.tag),Lg(e)):nh(a,!0,d,f,b,g.tag)}
function nh(a,b,c,d,e,f="IDB_TRANSACTION_TAG_UNKNOWN"){Mg("TRANSACTION_ENDED",{objectStoreNames:d,connectionHasUnknownAbortedTransaction:a.i,duration:e,isSuccessful:b,tryCount:c,tag:f})}
var oh=class{constructor(a,b){this.h=a;this.options=b;this.transactionCount=0;this.j=Math.round(W());this.i=!1}add(a,b,c){return X(this,[a],{mode:"readwrite",B:!0},d=>d.objectStore(a).add(b,c))}clear(a){return X(this,[a],{mode:"readwrite",
B:!0},b=>b.objectStore(a).clear())}close(){this.h.close();
let a;((a=this.options)==null?0:a.closed)&&this.options.closed()}count(a,b){return X(this,[a],{mode:"readonly",B:!0},c=>c.objectStore(a).count(b))}delete(a,b){return X(this,[a],{mode:"readwrite",
B:!0},c=>c.objectStore(a).delete(b))}get(a,b){return X(this,[a],{mode:"readonly",
B:!0},c=>c.objectStore(a).get(b))}getAll(a,b,c){return X(this,[a],{mode:"readonly",
B:!0},d=>d.objectStore(a).getAll(b,c))}objectStoreNames(){return Array.from(this.h.objectStoreNames)}getName(){return this.h.name}};
function ph(a,b,c){a=a.h.openCursor(b.query,b.direction);return qh(a).then(d=>fh(d,c))}
function rh(a,b){return ph(a,{query:b},c=>c.delete().then(()=>sh(c))).then(()=>{})}
function th(a,b,c){const d=[];return ph(a,{query:b},e=>{if(!(c!==void 0&&d.length>=c))return d.push(e.cursor.value),sh(e)}).then(()=>d)}
var lh=class{constructor(a){this.h=a}add(a,b){return V(this.h.add(a,b))}autoIncrement(){return this.h.autoIncrement}clear(){return V(this.h.clear()).then(()=>{})}count(a){return V(this.h.count(a))}delete(a){return a instanceof IDBKeyRange?rh(this,a):V(this.h.delete(a))}get(a){return V(this.h.get(a))}getAll(a,b){return"getAll"in IDBObjectStore.prototype?V(this.h.getAll(a,b)):th(this,a,b)}index(a){try{return new uh(this.h.index(a))}catch(b){if(b instanceof Error&&b.name==="NotFoundError")throw new Tg(a,
this.h.name);
throw b;}}getName(){return this.h.name}keyPath(){return this.h.keyPath}};function ih(a,b){const c=new Promise((d,e)=>{try{b(a).then(f=>{d(f)}).catch(e)}catch(f){e(f),a.abort()}});
return Promise.all([c,a.done]).then(([d])=>d)}
var hh=class{constructor(a){this.h=a;this.j=new Map;this.i=!1;this.done=new Promise((b,c)=>{this.h.addEventListener("complete",()=>{b()});
this.h.addEventListener("error",d=>{d.currentTarget===d.target&&c(this.h.error)});
this.h.addEventListener("abort",()=>{var d=this.h.error;if(d)c(d);else if(!this.i){d=U;var e=this.h.objectStoreNames;const f=[];for(let g=0;g<e.length;g++){const h=e.item(g);if(h===null)throw Error("Invariant: item in DOMStringList is null");f.push(h)}d=new d("UNKNOWN_ABORT",{objectStoreNames:f.join(),dbName:this.h.db.name,mode:this.h.mode});c(d)}})})}abort(){this.h.abort();
this.i=!0;throw new U("EXPLICIT_ABORT");}objectStore(a){a=this.h.objectStore(a);let b=this.j.get(a);b||(b=new lh(a),this.j.set(a,b));return b}};function vh(a,b,c){const {query:d=null,direction:e="next"}=b;a=a.h.openCursor(d,e);return qh(a).then(f=>fh(f,c))}
function wh(a,b,c){const d=[];return vh(a,{query:b},e=>{if(!(c!==void 0&&d.length>=c))return d.push(e.cursor.value),sh(e)}).then(()=>d)}
var uh=class{constructor(a){this.h=a}count(a){return V(this.h.count(a))}delete(a){return vh(this,{query:a},b=>b.delete().then(()=>sh(b)))}get(a){return V(this.h.get(a))}getAll(a,b){return"getAll"in IDBIndex.prototype?V(this.h.getAll(a,b)):wh(this,a,b)}getKey(a){return V(this.h.getKey(a))}keyPath(){return this.h.keyPath}unique(){return this.h.unique}};
function qh(a){return V(a).then(b=>b?new xh(a,b):null)}
function sh(a){a.cursor.continue(void 0);return qh(a.request)}
function yh(a){a.cursor.advance(5);return qh(a.request)}
var xh=class{constructor(a,b){this.request=a;this.cursor=b}delete(){return V(this.cursor.delete()).then(()=>{})}getKey(){return this.cursor.key}update(a){return V(this.cursor.update(a))}};function zh(a,b,c){return new Promise((d,e)=>{let f;f=b!==void 0?self.indexedDB.open(a,b):self.indexedDB.open(a);const g=c.wa,h=c.blocking,k=c.Ma,l=c.upgrade,n=c.closed;let p;const q=()=>{p||(p=new oh(f.result,{closed:n}));return p};
f.addEventListener("upgradeneeded",m=>{try{if(m.newVersion===null)throw Error("Invariant: newVersion on IDbVersionChangeEvent is null");if(f.transaction===null)throw Error("Invariant: transaction on IDbOpenDbRequest is null");m.dataLoss&&m.dataLoss!=="none"&&Mg("IDB_DATA_CORRUPTED",{reason:m.dataLossMessage||"unknown reason",dbName:Og(a)});const v=q(),z=new hh(f.transaction);l&&l(v,D=>m.oldVersion<D&&m.newVersion>=D,z);
z.done.catch(D=>{e(D)})}catch(v){e(v)}});
f.addEventListener("success",()=>{const m=f.result;h&&m.addEventListener("versionchange",()=>{h(q())});
m.addEventListener("close",()=>{Mg("IDB_UNEXPECTEDLY_CLOSED",{dbName:Og(a),dbVersion:m.version});k&&k()});
d(q())});
f.addEventListener("error",()=>{e(f.error)});
g&&f.addEventListener("blocked",()=>{g()})})}
function Ah(a,b,c={}){return zh(a,b,c)}
function Bh(a,b={}){return r(function*(){try{const c=self.indexedDB.deleteDatabase(a),d=b.wa;d&&c.addEventListener("blocked",()=>{d()});
yield eh(c)}catch(c){throw Vg(c,a,"",-1);}})}
;function Ch(a,b){return new U("INCOMPATIBLE_DB_VERSION",{dbName:a.name,oldVersion:a.options.version,newVersion:b})}
function Dh(a,b){if(!b)throw Wg("openWithToken",Og(a.name));return a.open()}
var Eh=class{constructor(a,b){this.name=a;this.options=b;this.j=!0;this.m=this.l=0}i(a,b,c={}){return Ah(a,b,c)}delete(a={}){return Bh(this.name,a)}open(){if(!this.j)throw Ch(this);if(this.h)return this.h;let a;const b=()=>{this.h===a&&(this.h=void 0)},c={blocking:e=>{e.close()},
closed:b,Ma:b,upgrade:this.options.upgrade},d=()=>{const e=this;return r(function*(){var f,g=(f=Error().stack)!=null?f:"";try{const k=yield e.i(e.name,e.options.version,c);f=k;var h=e.options;const l=[];for(const n of Object.keys(h.M)){const {L:p,Hb:q=Number.MAX_VALUE}=h.M[n];!(f.h.version>=p)||f.h.version>=q||f.h.objectStoreNames.contains(n)||l.push(n)}if(l.length!==0){const n=Object.keys(e.options.M),p=k.objectStoreNames();if(e.m<T("ytidb_reopen_db_retries",0))return e.m++,k.close(),Lg(new U("DB_REOPENED_BY_MISSING_OBJECT_STORES",
{dbName:e.name,expectedObjectStores:n,foundObjectStores:p})),d();if(e.l<T("ytidb_remake_db_retries",1))return e.l++,yield e.delete(),Lg(new U("DB_DELETED_BY_MISSING_OBJECT_STORES",{dbName:e.name,expectedObjectStores:n,foundObjectStores:p})),d();throw new Sg(p,n);}return k}catch(k){if(k instanceof DOMException?k.name==="VersionError":"DOMError"in self&&k instanceof DOMError?k.name==="VersionError":k instanceof Object&&"message"in k&&k.message==="An attempt was made to open a database using a lower version than the existing version."){g=
yield e.i(e.name,void 0,Object.assign({},c,{upgrade:void 0}));h=g.h.version;if(e.options.version!==void 0&&h>e.options.version+1)throw g.close(),e.j=!1,Ch(e,h);return g}b();k instanceof Error&&!S("ytidb_async_stack_killswitch")&&(k.stack=`${k.stack}\n${g.substring(g.indexOf("\n")+1)}`);let l;throw Vg(k,e.name,"",(l=e.options.version)!=null?l:-1);}})};
return this.h=a=d()}};const Fh=new Eh("YtIdbMeta",{M:{databases:{L:1}},upgrade(a,b){b(1)&&kh(a,"databases",{keyPath:"actualName"})}});function Gh(a,b){return r(function*(){return X(yield Dh(Fh,b),["databases"],{B:!0,mode:"readwrite"},c=>{const d=c.objectStore("databases");return d.get(a.actualName).then(e=>{if(e?a.actualName!==e.actualName||a.publicName!==e.publicName||a.userIdentifier!==e.userIdentifier:1)return V(d.h.put(a,void 0)).then(()=>{})})})})}
function Hh(a,b){return r(function*(){if(a)return(yield Dh(Fh,b)).delete("databases",a)})}
;let Ih;const Jh=new class{constructor(){}}(new class{constructor(){}});function Kh(){return r(function*(){return!0})}
function Lh(){if(Ih!==void 0)return Ih;Kg=!0;return Ih=Kh().then(a=>{Kg=!1;return a})}
function Mh(){return u("ytglobal.idbToken_")||void 0}
function Nh(){const a=Mh();return a?Promise.resolve(a):Lh().then(b=>{(b=b?Jh:void 0)&&w("ytglobal.idbToken_",b);return b})}
;new Re;function Oh(a){try{Ag();var b=!0}catch(c){b=!1}if(!b)throw a=new U("AUTH_INVALID",{dbName:a}),Lg(a),a;b=Ag();return{actualName:`${a}:${b}`,publicName:a,userIdentifier:b}}
function Ph(a,b,c,d){return r(function*(){var e,f=(e=Error().stack)!=null?e:"";e=yield Nh();if(!e)throw e=Wg("openDbImpl",a,b),S("ytidb_async_stack_killswitch")||(e.stack=`${e.stack}\n${f.substring(f.indexOf("\n")+1)}`),Lg(e),e;Ng(a);f=c?{actualName:a,publicName:a,userIdentifier:void 0}:Oh(a);try{return yield Gh(f,e),yield Ah(f.actualName,b,d)}catch(g){try{yield Hh(f.actualName,e)}catch(h){}throw g;}})}
function Qh(a,b,c={}){return Ph(a,b,!1,c)}
function Rh(a,b,c={}){return Ph(a,b,!0,c)}
function Sh(a,b={}){return r(function*(){const c=yield Nh();if(c){Ng(a);var d=Oh(a);yield Bh(d.actualName,b);yield Hh(d.actualName,c)}})}
function Th(a,b={}){return r(function*(){const c=yield Nh();c&&(Ng(a),yield Bh(a,b),yield Hh(a,c))})}
;function Uh(a,b){let c;return()=>{c||(c=new Vh(a,b));return c}}
var Vh=class extends Eh{constructor(a,b){super(a,b);this.options=b;Ng(a)}i(a,b,c={}){return(this.options.shared?Rh:Qh)(a,b,Object.assign({},c))}delete(a={}){return(this.options.shared?Th:Sh)(this.name,a)}};function Wh(a,b){return Uh(a,b)}
;var Xh=Wh("ytGcfConfig",{M:{coldConfigStore:{L:1},hotConfigStore:{L:1}},shared:!1,upgrade(a,b){b(1)&&(kh(a,"hotConfigStore",{keyPath:"key",autoIncrement:!0}).h.createIndex("hotTimestampIndex","timestamp",{unique:!1}),kh(a,"coldConfigStore",{keyPath:"key",autoIncrement:!0}).h.createIndex("coldTimestampIndex","timestamp",{unique:!1}))},version:1});function Yh(a){return Dh(Xh(),a)}
function Zh(a,b,c){return r(function*(){const d={config:a,hashData:b,timestamp:W()},e=yield Yh(c);yield e.clear("hotConfigStore");return yield mh(e,"hotConfigStore",d)})}
function $h(a,b,c,d){return r(function*(){const e={config:a,hashData:b,configData:c,timestamp:W()},f=yield Yh(d);yield f.clear("coldConfigStore");return yield mh(f,"coldConfigStore",e)})}
function ai(a){return r(function*(){let b=void 0;yield X(yield Yh(a),["coldConfigStore"],{mode:"readwrite",B:!0},c=>vh(c.objectStore("coldConfigStore").index("coldTimestampIndex"),{direction:"prev"},d=>{b=d.cursor.value}));
return b})}
function bi(a){return r(function*(){let b=void 0;yield X(yield Yh(a),["hotConfigStore"],{mode:"readwrite",B:!0},c=>vh(c.objectStore("hotConfigStore").index("hotTimestampIndex"),{direction:"prev"},d=>{b=d.cursor.value}));
return b})}
;var ci=class extends oe{constructor(){super();this.j=[];this.h=[];const a=u("yt.gcf.config.hotUpdateCallbacks");a?(this.j=[...a],this.h=a):(this.h=[],w("yt.gcf.config.hotUpdateCallbacks",this.h))}m(){for(const b of this.j){var a=this.h;const c=a.indexOf(b);c>=0&&a.splice(c,1)}this.j.length=0;super.m()}};function di(a,b,c){return r(function*(){if(S("start_client_gcf")){c&&(a.j=c,w("yt.gcf.config.hotConfigGroup",a.j||null));a.hotHashData=b;w("yt.gcf.config.hotHashData",a.hotHashData||null);var d=Mh();if(d){if(!c){var e;c=(e=yield bi(d))==null?void 0:e.config}yield Zh(c,b,d)}if(c){d=a.i;e=c;for(const f of d.h)f(e)}}})}
function ei(a,b,c){return r(function*(){if(S("start_client_gcf")){a.coldHashData=b;w("yt.gcf.config.coldHashData",a.coldHashData||null);const d=Mh();if(d){if(!c){let e;c=(e=yield ai(d))==null?void 0:e.config}c&&(yield $h(c,b,c.configData,d))}}})}
var fi=class{constructor(){this.h=0;this.i=new ci}};function gi(){return"INNERTUBE_API_KEY"in Lf&&"INNERTUBE_API_VERSION"in Lf}
function hi(){return{innertubeApiKey:Q("INNERTUBE_API_KEY"),innertubeApiVersion:Q("INNERTUBE_API_VERSION"),Z:Q("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),Aa:Q("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),Ba:Q("INNERTUBE_CONTEXT_CLIENT_NAME",1),innertubeContextClientVersion:Q("INNERTUBE_CONTEXT_CLIENT_VERSION"),ja:Q("INNERTUBE_CONTEXT_HL"),ia:Q("INNERTUBE_CONTEXT_GL"),Ca:Q("INNERTUBE_HOST_OVERRIDE")||"",Ea:!!Q("INNERTUBE_USE_THIRD_PARTY_AUTH",!1),Da:!!Q("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT",
!1),appInstallData:Q("SERIALIZED_CLIENT_CONFIG_DATA")}}
function ii(a){const b={client:{hl:a.ja,gl:a.ia,clientName:a.Aa,clientVersion:a.innertubeContextClientVersion,configInfo:a.Z}};navigator.userAgent&&(b.client.userAgent=String(navigator.userAgent));var c=t.devicePixelRatio;c&&c!=1&&(b.client.screenDensityFloat=String(c));c=bg();c!==""&&(b.client.experimentsToken=c);c=cg();c.length>0&&(b.request={internalExperimentFlags:c});ji(void 0,b);ki(a,void 0,b);S("start_client_gcf")&&li(void 0,b);Q("DELEGATED_SESSION_ID")&&!S("pageid_as_header_web")&&(b.user=
{onBehalfOfUser:Q("DELEGATED_SESSION_ID")});!S("fill_delegate_context_in_gel_killswitch")&&(a=Q("INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT"))&&(b.user=Object.assign({},b.user,{serializedDelegationContext:a}));a=Object;c=a.assign;var d=b.client,e=Q("DEVICE","");const f={};for(const [g,h]of Object.entries(Vf(e))){e=g;const k=h;e==="cbrand"?f.deviceMake=k:e==="cmodel"?f.deviceModel=k:e==="cbr"?f.browserName=k:e==="cbrver"?f.browserVersion=k:e==="cos"?f.osName=k:e==="cosver"?f.osVersion=k:e==="cplatform"&&
(f.platform=k)}b.client=c.call(a,d,f);return b}
function ji(a,b){const c=u("yt.embedded_player.embed_url");c&&(a?(b=gd(a,jf,7)||new jf,J(b,4,c),H(a,jf,7,b)):b&&(b.thirdParty={embedUrl:c}))}
function ki(a,b,c){if(a.appInstallData)if(b){let d;c=(d=gd(b,bf,62))!=null?d:new bf;J(c,6,a.appInstallData);H(b,bf,62,c)}else c&&(c.client.configInfo=c.client.configInfo||{},c.client.configInfo.appInstallData=a.appInstallData)}
function mi(a,b,c={}){let d={};Q("EOM_VISITOR_DATA")?d={"X-Goog-EOM-Visitor-Id":Q("EOM_VISITOR_DATA")}:d={"X-Goog-Visitor-Id":c.visitorData||Q("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;b=c.rb||Q("AUTHORIZATION");b||(a?b=`Bearer ${u("gapi.auth.getToken")().qb}`:(a=xg(vg()),S("pageid_as_header_web")||delete a["X-Goog-PageId"],d=Object.assign({},d,a)));b&&(d.Authorization=b);return d}
function li(a,b){if(!fi.h){var c=new fi;fi.h=c}c=fi.h;var d=W()-c.h;if(c.h!==0&&d<T("send_config_hash_timer"))c=void 0;else{d=u("yt.gcf.config.coldConfigData");var e=u("yt.gcf.config.hotHashData"),f=u("yt.gcf.config.coldHashData");d&&e&&f&&(c.h=W());c={coldConfigData:d,hotHashData:e,coldHashData:f}}if(d=c)if(e=d.coldConfigData,c=d.coldHashData,d=d.hotHashData,a){var g;b=(g=gd(a,bf,62))!=null?g:new bf;g=J(b,1,e);g=J(g,3,c);J(g,5,d);H(a,bf,62,b)}else b&&(b.client.configInfo=b.client.configInfo||{},
e&&(b.client.configInfo.coldConfigData=e),c&&(b.client.configInfo.coldHashData=c),d&&(b.client.configInfo.hotHashData=d))}
;typeof TextEncoder!=="undefined"&&new TextEncoder;function ni(a){this.version=1;this.args=a}
;function oi(){var a=pi;this.topic="screen-created";this.h=a}
oi.prototype.toString=function(){return this.topic};const qi=u("ytPubsub2Pubsub2Instance")||new M;M.prototype.subscribe=M.prototype.K;M.prototype.unsubscribeByKey=M.prototype.D;M.prototype.publish=M.prototype.A;M.prototype.clear=M.prototype.clear;w("ytPubsub2Pubsub2Instance",qi);const ri=u("ytPubsub2Pubsub2SubscribedKeys")||{};w("ytPubsub2Pubsub2SubscribedKeys",ri);const si=u("ytPubsub2Pubsub2TopicToKeys")||{};w("ytPubsub2Pubsub2TopicToKeys",si);const ti=u("ytPubsub2Pubsub2IsAsync")||{};w("ytPubsub2Pubsub2IsAsync",ti);
w("ytPubsub2Pubsub2SkipSubKey",null);function ui(a,b){const c=vi();c&&c.publish.call(c,a.toString(),a,b)}
function wi(a){var b=xi;const c=vi();if(!c)return 0;const d=c.subscribe(b.toString(),(e,f)=>{var g=u("ytPubsub2Pubsub2SkipSubKey");g&&g==d||(g=()=>{if(ri[d])try{if(f&&b instanceof oi&&b!=e)try{var h=b.h,k=f;if(!k.args||!k.version)throw Error("yt.pubsub2.Data.deserialize(): serializedData is incomplete.");try{if(!h.na){const m=new h;h.na=m.version}var l=h.na}catch(m){}if(!l||k.version!=l)throw Error("yt.pubsub2.Data.deserialize(): serializedData version is incompatible.");try{l=Reflect;var n=l.construct;
{var p=k.args;const m=p.length;if(m>0){const v=Array(m);for(k=0;k<m;k++)v[k]=p[k];var q=v}else q=[]}f=n.call(l,h,q)}catch(m){throw m.message="yt.pubsub2.Data.deserialize(): "+m.message,m;}}catch(m){throw m.message="yt.pubsub2.pubsub2 cross-binary conversion error for "+b.toString()+": "+m.message,m;}a.call(window,f)}catch(m){Of(m)}},ti[b.toString()]?u("yt.scheduler.instance")?Hg.h(g):Yf(g,0):g())});
ri[d]=!0;si[b.toString()]||(si[b.toString()]=[]);si[b.toString()].push(d);return d}
function yi(){var a=zi;const b=wi(function(c){a.apply(void 0,arguments);Ai(b)});
return b}
function Ai(a){const b=vi();b&&(typeof a==="number"&&(a=[a]),va(a,c=>{b.unsubscribeByKey(c);delete ri[c]}))}
function vi(){return u("ytPubsub2Pubsub2Instance")}
;let Bi=void 0,Ci=void 0;var Di={accountStateChangeSignedIn:23,accountStateChangeSignedOut:24,delayedEventMetricCaptured:11,latencyActionBaselined:6,latencyActionInfo:7,latencyActionTicked:5,offlineTransferStatusChanged:2,offlineImageDownload:335,playbackStartStateChanged:9,systemHealthCaptured:3,mangoOnboardingCompleted:10,mangoPushNotificationReceived:230,mangoUnforkDbMigrationError:121,mangoUnforkDbMigrationSummary:122,mangoUnforkDbMigrationPreunforkDbVersionNumber:133,mangoUnforkDbMigrationPhoneMetadata:134,mangoUnforkDbMigrationPhoneStorage:135,
mangoUnforkDbMigrationStep:142,mangoAsyncApiMigrationEvent:223,mangoDownloadVideoResult:224,mangoHomepageVideoCount:279,mangoHomeV3State:295,mangoImageClientCacheHitEvent:273,sdCardStatusChanged:98,framesDropped:12,thumbnailHovered:13,deviceRetentionInfoCaptured:14,thumbnailLoaded:15,backToAppEvent:318,streamingStatsCaptured:17,offlineVideoShared:19,appCrashed:20,youThere:21,offlineStateSnapshot:22,mdxSessionStarted:25,mdxSessionConnected:26,mdxSessionDisconnected:27,bedrockResourceConsumptionSnapshot:28,
nextGenWatchWatchSwiped:29,kidsAccountsSnapshot:30,zeroStepChannelCreated:31,tvhtml5SearchCompleted:32,offlineSharePairing:34,offlineShareUnlock:35,mdxRouteDistributionSnapshot:36,bedrockRepetitiveActionTimed:37,unpluggedDegradationInfo:229,uploadMp4HeaderMoved:38,uploadVideoTranscoded:39,uploadProcessorStarted:46,uploadProcessorEnded:47,uploadProcessorReady:94,uploadProcessorRequirementPending:95,uploadProcessorInterrupted:96,uploadFrontendEvent:241,assetPackDownloadStarted:41,assetPackDownloaded:42,
assetPackApplied:43,assetPackDeleted:44,appInstallAttributionEvent:459,playbackSessionStopped:45,adBlockerMessagingShown:48,distributionChannelCaptured:49,dataPlanCpidRequested:51,detailedNetworkTypeCaptured:52,sendStateUpdated:53,receiveStateUpdated:54,sendDebugStateUpdated:55,receiveDebugStateUpdated:56,kidsErrored:57,mdxMsnSessionStatsFinished:58,appSettingsCaptured:59,mdxWebSocketServerHttpError:60,mdxWebSocketServer:61,startupCrashesDetected:62,coldStartInfo:435,offlinePlaybackStarted:63,liveChatMessageSent:225,
liveChatUserPresent:434,liveChatBeingModerated:457,liveCreationCameraUpdated:64,liveCreationEncodingCaptured:65,liveCreationError:66,liveCreationHealthUpdated:67,liveCreationVideoEffectsCaptured:68,liveCreationStageOccured:75,liveCreationBroadcastScheduled:123,liveCreationArchiveReplacement:149,liveCreationCostreamingConnection:421,liveCreationStreamWebrtcStats:288,mdxSessionRecoveryStarted:69,mdxSessionRecoveryCompleted:70,mdxSessionRecoveryStopped:71,visualElementShown:72,visualElementHidden:73,
visualElementGestured:78,visualElementStateChanged:208,screenCreated:156,playbackAssociated:202,visualElementAttached:215,playbackContextEvent:214,cloudCastingPlaybackStarted:74,webPlayerApiCalled:76,tvhtml5AccountDialogOpened:79,foregroundHeartbeat:80,foregroundHeartbeatScreenAssociated:111,kidsOfflineSnapshot:81,mdxEncryptionSessionStatsFinished:82,playerRequestCompleted:83,liteSchedulerStatistics:84,mdxSignIn:85,spacecastMetadataLookupRequested:86,spacecastBatchLookupRequested:87,spacecastSummaryRequested:88,
spacecastPlayback:89,spacecastDiscovery:90,tvhtml5LaunchUrlComponentChanged:91,mdxBackgroundPlaybackRequestCompleted:92,mdxBrokenAdditionalDataDeviceDetected:93,tvhtml5LocalStorage:97,tvhtml5DeviceStorageStatus:147,autoCaptionsAvailable:99,playbackScrubbingEvent:339,flexyState:100,interfaceOrientationCaptured:101,mainAppBrowseFragmentCache:102,offlineCacheVerificationFailure:103,offlinePlaybackExceptionDigest:217,vrCopresenceStats:104,vrCopresenceSyncStats:130,vrCopresenceCommsStats:137,vrCopresencePartyStats:153,
vrCopresenceEmojiStats:213,vrCopresenceEvent:141,vrCopresenceFlowTransitEvent:160,vrCowatchPartyEvent:492,vrCowatchUserStartOrJoinEvent:504,vrPlaybackEvent:345,kidsAgeGateTracking:105,offlineDelayAllowedTracking:106,mainAppAutoOfflineState:107,videoAsThumbnailDownload:108,videoAsThumbnailPlayback:109,liteShowMore:110,renderingError:118,kidsProfilePinGateTracking:119,abrTrajectory:124,scrollEvent:125,streamzIncremented:126,kidsProfileSwitcherTracking:127,kidsProfileCreationTracking:129,buyFlowStarted:136,
mbsConnectionInitiated:138,mbsPlaybackInitiated:139,mbsLoadChildren:140,liteProfileFetcher:144,mdxRemoteTransaction:146,reelPlaybackError:148,reachabilityDetectionEvent:150,mobilePlaybackEvent:151,courtsidePlayerStateChanged:152,musicPersistentCacheChecked:154,musicPersistentCacheCleared:155,playbackInterrupted:157,playbackInterruptionResolved:158,fixFopFlow:159,anrDetection:161,backstagePostCreationFlowEnded:162,clientError:163,gamingAccountLinkStatusChanged:164,liteHousewarming:165,buyFlowEvent:167,
kidsParentalGateTracking:168,kidsSignedOutSettingsStatus:437,kidsSignedOutPauseHistoryFixStatus:438,tvhtml5WatchdogViolation:444,ypcUpgradeFlow:169,yongleStudy:170,ypcUpdateFlowStarted:171,ypcUpdateFlowCancelled:172,ypcUpdateFlowSucceeded:173,ypcUpdateFlowFailed:174,liteGrowthkitPromo:175,paymentFlowStarted:341,transactionFlowShowPaymentDialog:405,transactionFlowStarted:176,transactionFlowSecondaryDeviceStarted:222,transactionFlowSecondaryDeviceSignedOutStarted:383,transactionFlowCancelled:177,transactionFlowPaymentCallBackReceived:387,
transactionFlowPaymentSubmitted:460,transactionFlowPaymentSucceeded:329,transactionFlowSucceeded:178,transactionFlowFailed:179,transactionFlowPlayBillingConnectionStartEvent:428,transactionFlowSecondaryDeviceSuccess:458,transactionFlowErrorEvent:411,liteVideoQualityChanged:180,watchBreakEnablementSettingEvent:181,watchBreakFrequencySettingEvent:182,videoEffectsCameraPerformanceMetrics:183,adNotify:184,startupTelemetry:185,playbackOfflineFallbackUsed:186,outOfMemory:187,ypcPauseFlowStarted:188,ypcPauseFlowCancelled:189,
ypcPauseFlowSucceeded:190,ypcPauseFlowFailed:191,uploadFileSelected:192,ypcResumeFlowStarted:193,ypcResumeFlowCancelled:194,ypcResumeFlowSucceeded:195,ypcResumeFlowFailed:196,adsClientStateChange:197,ypcCancelFlowStarted:198,ypcCancelFlowCancelled:199,ypcCancelFlowSucceeded:200,ypcCancelFlowFailed:201,ypcCancelFlowGoToPaymentProcessor:402,ypcDeactivateFlowStarted:320,ypcRedeemFlowStarted:203,ypcRedeemFlowCancelled:204,ypcRedeemFlowSucceeded:205,ypcRedeemFlowFailed:206,ypcFamilyCreateFlowStarted:258,
ypcFamilyCreateFlowCancelled:259,ypcFamilyCreateFlowSucceeded:260,ypcFamilyCreateFlowFailed:261,ypcFamilyManageFlowStarted:262,ypcFamilyManageFlowCancelled:263,ypcFamilyManageFlowSucceeded:264,ypcFamilyManageFlowFailed:265,restoreContextEvent:207,embedsAdEvent:327,autoplayTriggered:209,clientDataErrorEvent:210,experimentalVssValidation:211,tvhtml5TriggeredEvent:212,tvhtml5FrameworksFieldTrialResult:216,tvhtml5FrameworksFieldTrialStart:220,musicOfflinePreferences:218,watchTimeSegment:219,appWidthLayoutError:221,
accountRegistryChange:226,userMentionAutoCompleteBoxEvent:227,downloadRecommendationEnablementSettingEvent:228,musicPlaybackContentModeChangeEvent:231,offlineDbOpenCompleted:232,kidsFlowEvent:233,kidsFlowCorpusSelectedEvent:234,videoEffectsEvent:235,unpluggedOpsEogAnalyticsEvent:236,playbackAudioRouteEvent:237,interactionLoggingDebugModeError:238,offlineYtbRefreshed:239,kidsFlowError:240,musicAutoplayOnLaunchAttempted:242,deviceContextActivityEvent:243,deviceContextEvent:244,templateResolutionException:245,
musicSideloadedPlaylistServiceCalled:246,embedsStorageAccessNotChecked:247,embedsHasStorageAccessResult:248,embedsItpPlayedOnReload:249,embedsRequestStorageAccessResult:250,embedsShouldRequestStorageAccessResult:251,embedsRequestStorageAccessState:256,embedsRequestStorageAccessFailedState:257,embedsItpWatchLaterResult:266,searchSuggestDecodingPayloadFailure:252,siriShortcutActivated:253,tvhtml5KeyboardPerformance:254,latencyActionSpan:255,elementsLog:267,ytbFileOpened:268,tfliteModelError:269,apiTest:270,
yongleUsbSetup:271,touStrikeInterstitialEvent:272,liteStreamToSave:274,appBundleClientEvent:275,ytbFileCreationFailed:276,adNotifyFailure:278,ytbTransferFailed:280,blockingRequestFailed:281,liteAccountSelector:282,liteAccountUiCallbacks:283,dummyPayload:284,browseResponseValidationEvent:285,entitiesError:286,musicIosBackgroundFetch:287,mdxNotificationEvent:289,layersValidationError:290,musicPwaInstalled:291,liteAccountCleanup:292,html5PlayerHealthEvent:293,watchRestoreAttempt:294,liteAccountSignIn:296,
notaireEvent:298,kidsVoiceSearchEvent:299,adNotifyFilled:300,delayedEventDropped:301,analyticsSearchEvent:302,systemDarkThemeOptOutEvent:303,flowEvent:304,networkConnectivityBaselineEvent:305,ytbFileImported:306,downloadStreamUrlExpired:307,directSignInEvent:308,lyricImpressionEvent:309,accessibilityStateEvent:310,tokenRefreshEvent:311,genericAttestationExecution:312,tvhtml5VideoSeek:313,unpluggedAutoPause:314,scrubbingEvent:315,bedtimeReminderEvent:317,tvhtml5UnexpectedRestart:319,tvhtml5StabilityTraceEvent:478,
tvhtml5OperationHealth:467,tvhtml5WatchKeyEvent:321,voiceLanguageChanged:322,tvhtml5LiveChatStatus:323,parentToolsCorpusSelectedEvent:324,offerAdsEnrollmentInitiated:325,networkQualityIntervalEvent:326,deviceStartupMetrics:328,heartbeatActionPlayerTransitioned:330,tvhtml5Lifecycle:331,heartbeatActionPlayerHalted:332,adaptiveInlineMutedSettingEvent:333,mainAppLibraryLoadingState:334,thirdPartyLogMonitoringEvent:336,appShellAssetLoadReport:337,tvhtml5AndroidAttestation:338,tvhtml5StartupSoundEvent:340,
iosBackgroundRefreshTask:342,iosBackgroundProcessingTask:343,sliEventBatch:344,postImpressionEvent:346,musicSideloadedPlaylistExport:347,idbUnexpectedlyClosed:348,voiceSearchEvent:349,mdxSessionCastEvent:350,idbQuotaExceeded:351,idbTransactionEnded:352,idbTransactionAborted:353,tvhtml5KeyboardLogging:354,idbIsSupportedCompleted:355,creatorStudioMobileEvent:356,idbDataCorrupted:357,parentToolsAppChosenEvent:358,webViewBottomSheetResized:359,activeStateControllerScrollPerformanceSummary:360,navigatorValidation:361,
mdxSessionHeartbeat:362,clientHintsPolyfillDiagnostics:363,clientHintsPolyfillEvent:364,proofOfOriginTokenError:365,kidsAddedAccountSummary:366,musicWearableDevice:367,ypcRefundFlowEvent:368,tvhtml5PlaybackMeasurementEvent:369,tvhtml5WatermarkMeasurementEvent:370,clientExpGcfPropagationEvent:371,mainAppReferrerIntent:372,leaderLockEnded:373,leaderLockAcquired:374,googleHatsEvent:375,persistentLensLaunchEvent:376,parentToolsChildWelcomeChosenEvent:378,browseThumbnailPreloadEvent:379,finalPayload:380,
mdxDialAdditionalDataUpdateEvent:381,webOrchestrationTaskLifecycleRecord:382,startupSignalEvent:384,accountError:385,gmsDeviceCheckEvent:386,accountSelectorEvent:388,accountUiCallbacks:389,mdxDialAdditionalDataProbeEvent:390,downloadsSearchIcingApiStats:391,downloadsSearchIndexUpdatedEvent:397,downloadsSearchIndexSnapshot:398,dataPushClientEvent:392,kidsCategorySelectedEvent:393,mdxDeviceManagementSnapshotEvent:394,prefetchRequested:395,prefetchableCommandExecuted:396,gelDebuggingEvent:399,webLinkTtsPlayEnd:400,
clipViewInvalid:401,persistentStorageStateChecked:403,cacheWipeoutEvent:404,playerEvent:410,sfvEffectPipelineStartedEvent:412,sfvEffectPipelinePausedEvent:429,sfvEffectPipelineEndedEvent:413,sfvEffectChosenEvent:414,sfvEffectLoadedEvent:415,sfvEffectUserInteractionEvent:465,sfvEffectFirstFrameProcessedLatencyEvent:416,sfvEffectAggregatedFramesProcessedLatencyEvent:417,sfvEffectAggregatedFramesDroppedEvent:418,sfvEffectPipelineErrorEvent:430,sfvEffectGraphFrozenEvent:419,sfvEffectGlThreadBlockedEvent:420,
mdeVideoChangedEvent:442,mdePlayerPerformanceMetrics:472,mdeExporterEvent:497,genericClientExperimentEvent:423,homePreloadTaskScheduled:424,homePreloadTaskExecuted:425,homePreloadCacheHit:426,polymerPropertyChangedInObserver:427,applicationStarted:431,networkCronetRttBatch:432,networkCronetRttSummary:433,repeatChapterLoopEvent:436,seekCancellationEvent:462,lockModeTimeoutEvent:483,externalVideoShareToYoutubeAttempt:501,parentCodeEvent:502,offlineTransferStarted:4,musicOfflineMixtapePreferencesChanged:16,
mangoDailyNewVideosNotificationAttempt:40,mangoDailyNewVideosNotificationError:77,dtwsPlaybackStarted:112,dtwsTileFetchStarted:113,dtwsTileFetchCompleted:114,dtwsTileFetchStatusChanged:145,dtwsKeyframeDecoderBufferSent:115,dtwsTileUnderflowedOnNonkeyframe:116,dtwsBackfillFetchStatusChanged:143,dtwsBackfillUnderflowed:117,dtwsAdaptiveLevelChanged:128,blockingVisitorIdTimeout:277,liteSocial:18,mobileJsInvocation:297,biscottiBasedDetection:439,coWatchStateChange:440,embedsVideoDataDidChange:441,shortsFirst:443,
cruiseControlEvent:445,qoeClientLoggingContext:446,atvRecommendationJobExecuted:447,tvhtml5UserFeedback:448,producerProjectCreated:449,producerProjectOpened:450,producerProjectDeleted:451,producerProjectElementAdded:453,producerProjectElementRemoved:454,tvhtml5ShowClockEvent:455,deviceCapabilityCheckMetrics:456,youtubeClearcutEvent:461,offlineBrowseFallbackEvent:463,getCtvTokenEvent:464,startupDroppedFramesSummary:466,screenshotEvent:468,miniAppPlayEvent:469,elementsDebugCounters:470,fontLoadEvent:471,
webKillswitchReceived:473,webKillswitchExecuted:474,cameraOpenEvent:475,manualSmoothnessMeasurement:476,tvhtml5AppQualityEvent:477,polymerPropertyAccessEvent:479,miniAppSdkUsage:480,cobaltTelemetryEvent:481,crossDevicePlayback:482,channelCreatedWithObakeImage:484,channelEditedWithObakeImage:485,offlineDeleteEvent:486,crossDeviceNotificationTransfer:487,androidIntentEvent:488,unpluggedAmbientInterludesCounterfactualEvent:489,keyPlaysPlayback:490,shortsCreationFallbackEvent:493,vssData:491,castMatch:494,
miniAppPerformanceMetrics:495,userFeedbackEvent:496,kidsGuestSessionMismatch:498,musicSideloadedPlaylistMigrationEvent:499,sleepTimerSessionFinishEvent:500,watchEpPromoConflict:503,innertubeResponseCacheMetrics:505};const Ei=["client.name","client.version"];function Fi(a){if(!a.errorMetadata||!a.errorMetadata.kvPairs)return a;a.errorMetadata.kvPairs=a.errorMetadata.kvPairs.filter(b=>b.key?Ei.includes(b.key):!1);
return a}
;var Gi=Wh("ServiceWorkerLogsDatabase",{M:{SWHealthLog:{L:1}},shared:!0,upgrade:(a,b)=>{b(1)&&kh(a,"SWHealthLog",{keyPath:"id",autoIncrement:!0}).h.createIndex("swHealthNewRequest",["interface","timestamp"],{unique:!1})},
version:1});function Hi(a,b){return r(function*(){var c=yield Dh(Gi(),b),d=Q("INNERTUBE_CONTEXT_CLIENT_NAME",0);const e=Object.assign({},a);e.clientError&&(e.clientError=Fi(e.clientError));e.interface=d;return mh(c,"SWHealthLog",e)})}
;w("ytNetworklessLoggingInitializationOptions",t.ytNetworklessLoggingInitializationOptions||{isNwlInitialized:!1});function Ii(a,b,c,d){!Q("VISITOR_DATA")&&b!=="visitor_id"&&Math.random()<.01&&Pf(new xf("Missing VISITOR_DATA when sending innertube request.",b,c,d));if(!a.isReady())throw a=new xf("innertube xhrclient not ready",b,c,d),Of(a),a;c={headers:d.headers||{},method:"POST",postParams:c,postBody:d.postBody,postBodyFormat:d.postBodyFormat||"JSON",onTimeout:()=>{d.onTimeout()},
onFetchTimeout:d.onTimeout,onSuccess:(k,l)=>{if(d.onSuccess)d.onSuccess(l)},
onFetchSuccess:k=>{if(d.onSuccess)d.onSuccess(k)},
onError:(k,l)=>{if(d.onError)d.onError(l)},
onFetchError:k=>{if(d.onError)d.onError(k)},
timeout:d.timeout,withCredentials:!0,compress:d.compress};c.headers["Content-Type"]||(c.headers["Content-Type"]="application/json");let e="";var f=a.config_.Ca;f&&(e=f);var g=a.config_.Ea||!1;f=mi(g,e,d);Object.assign(c.headers,f);(f=c.headers.Authorization)&&!e&&g&&(c.headers["x-origin"]=window.location.origin);b=`/${"youtubei"}/${a.config_.innertubeApiVersion}/${b}`;g={alt:"json"};let h=!(!a.config_.Da||!f);h=h&&f.startsWith("Bearer");S("web_yt_net_omit_api_key")&&(h=!0);h||(g.key=a.config_.innertubeApiKey);
a=Wf(`${e}${b}`,g||{},!0);try{eg(a,c)}catch(k){if(k.name==="InvalidAccessError")Pf(Error("An extension is blocking network request."));else throw k;}}
var Ji=class{constructor(a){this.config_=null;a?this.config_=a:gi()&&(this.config_=hi())}isReady(){!this.config_&&gi()&&(this.config_=hi());return!!this.config_}};let Ki=0;w("ytDomDomGetNextId",u("ytDomDomGetNextId")||(()=>++Ki));w("ytEventsEventsListeners",t.ytEventsEventsListeners||{});w("ytEventsEventsCounter",t.ytEventsEventsCounter||{count:0});t.ytPubsubPubsubInstance||new M;var Li=Symbol("injectionDeps"),Mi=class{constructor(){this.name="INNERTUBE_TRANSPORT_TOKEN"}toString(){return`InjectionToken(${this.name})`}},Ni=class{constructor(){this.key=fi}};function Oi(a){var b={ca:Pi,ma:Qi.h};a.i.set(b.ca,b);const c=a.j.get(b.ca);if(c)try{c.Jb(a.resolve(b.ca))}catch(d){c.Gb(d)}}
function Ri(a,b,c,d=!1){if(c.indexOf(b)>-1)throw Error(`Deps cycle for: ${b}`);if(a.h.has(b))return a.h.get(b);if(!a.i.has(b)){if(d)return;throw Error(`No provider for: ${b}`);}d=a.i.get(b);c.push(b);if(d.ma!==void 0)var e=d.ma;else if(d.Oa)e=d[Li]?Si(a,d[Li],c):[],e=d.Oa(...e);else if(d.Na){e=d.Na;const f=e[Li]?Si(a,e[Li],c):[];e=new e(...f)}else throw Error(`Could not resolve providers for: ${b}`);c.pop();d.Qb||a.h.set(b,e);return e}
function Si(a,b,c){return b?b.map(d=>d instanceof Ni?Ri(a,d.key,c,!0):Ri(a,d,c)):[]}
var Ti=class{constructor(){this.i=new Map;this.j=new Map;this.h=new Map}resolve(a){return a instanceof Ni?Ri(this,a.key,[],!0):Ri(this,a,[])}};let Ui;function Vi(){Ui||(Ui=new Ti);return Ui}
;let Wi=window;function Xi(){let a,b;return"h5vcc"in Wi&&((a=Wi.h5vcc.traceEvent)==null?0:a.traceBegin)&&((b=Wi.h5vcc.traceEvent)==null?0:b.traceEnd)?1:"performance"in Wi&&Wi.performance.mark&&Wi.performance.measure?2:0}
function Yi(a){const b=Xi();switch(b){case 1:Wi.h5vcc.traceEvent.traceBegin("YTLR",a);break;case 2:Wi.performance.mark(`${a}-start`);break;case 0:break;default:ua(b,"unknown trace type")}}
function Zi(a){var b=Xi();switch(b){case 1:Wi.h5vcc.traceEvent.traceEnd("YTLR",a);break;case 2:b=`${a}-start`;const c=`${a}-end`;Wi.performance.mark(c);Wi.performance.measure(a,b,c);break;case 0:break;default:ua(b,"unknown trace type")}}
;var $i=S("web_enable_lifecycle_monitoring")&&Xi()!==0,aj=S("web_enable_lifecycle_monitoring");function bj(a){let b;return(b=a.priority)!=null?b:0}
function cj(a){var b=Array.from(a.h.keys()).sort((c,d)=>bj(a.h[d])-bj(a.h[c]));
for(const c of b)b=a.h[c],b.jobId===void 0||b.V||(a.scheduler.R(b.jobId),Cg(b.aa,10))}
var dj=class{constructor(a){this.scheduler=Fg();this.i=new Re;this.h=a;for(let b=0;b<this.h.length;b++){const c=this.h[b];a=()=>{c.aa();this.h[b].V=!0;this.h.every(e=>e.V===!0)&&this.i.resolve()};
const d=Cg(a,bj(c));this.h[b]=Object.assign({},c,{aa:a,jobId:d})}}cancel(){for(const a of this.h)a.jobId===void 0||a.V||this.scheduler.R(a.jobId),a.V=!0;this.i.resolve()}};function ej(a,b,c){aj&&console.groupCollapsed&&console.groupEnd&&(console.groupCollapsed(`[${a.constructor.name}] '${a.state}' to '${b}'`),console.log("with message: ",c),console.groupEnd())}
function fj(a,b){const c=b.filter(e=>gj(a,e)===10),d=b.filter(e=>gj(a,e)!==10);
return a.l.Ob?(...e)=>r(function*(){yield hj(c,...e);ij(a,d,...e)}):(...e)=>{jj(c,...e);
ij(a,d,...e)}}
function gj(a,b){let c,d;return(d=(c=a.j)!=null?c:b.priority)!=null?d:0}
function hj(a,...b){return r(function*(){Fg();for(const c of a){let d;Dg(()=>{kj(c.name);const e=c.callback(...b);typeof(e==null?void 0:e.then)==="function"?d=e.then(()=>{lj(c.name)}):lj(c.name)});
d&&(yield d)}})}
function ij(a,b,...c){b=b.map(d=>({aa:()=>{kj(d.name);d.callback(...c);lj(d.name)},
priority:gj(a,d)}));
b.length&&(a.i=new dj(b))}
function jj(a,...b){Fg();for(const c of a)Dg(()=>{kj(c.name);c.callback(...b);lj(c.name)})}
function kj(a){$i&&a&&Yi(a)}
function lj(a){$i&&a&&Zi(a)}
var mj=class{constructor(){this.state="none";this.plugins=[];this.j=void 0;this.l={};$i&&Yi(this.state)}get currentState(){return this.state}install(a){this.plugins.push(a);return this}transition(a,b){$i&&Zi(this.state);var c=this.transitions.find(d=>Array.isArray(d.from)?d.from.find(e=>e===this.state&&d.P===a):d.from===this.state&&d.P===a);
if(c){this.i&&(cj(this.i),this.i=void 0);ej(this,a,b);this.state=a;$i&&Yi(this.state);c=c.action.bind(this);const d=this.plugins.filter(e=>e[a]).map(e=>e[a]);
c(fj(this,d),b)}else throw Error(`no transition specified from ${this.state} to ${a}`);}};function nj(){oj||(oj=new pj);return oj}
var pj=class extends mj{constructor(){super();this.h=null;this.j=10;this.transitions=[{from:"none",P:"application_navigating",action:this.m},{from:"application_navigating",P:"none",action:this.s},{from:"application_navigating",P:"application_navigating",action:()=>{}},
{from:"none",P:"none",action:()=>{}}]}m(a,b){this.h=Bg(()=>{this.currentState==="application_navigating"&&this.transition("none")},5E3);
a(b==null?void 0:b.event)}s(a,b){this.h&&(Hg.R(this.h),this.h=null);a(b==null?void 0:b.event)}},oj;let qj=[];w("yt.logging.transport.getScrapedGelPayloads",function(){return qj});function rj(a,b){const c=sj(b);if(a.h[c])return a.h[c];const d=Object.keys(a.store)||[];if(d.length<=1&&sj(b)===d[0])return d;const e=[];for(let g=0;g<d.length;g++){const h=d[g].split("/");if(tj(b.auth,h[0])){var f=b.isJspb;tj(f===void 0?"undefined":f?"true":"false",h[1])&&tj(b.cttAuthInfo,h[2])&&(f=b.tier,f=f===void 0?"undefined":JSON.stringify(f),tj(f,h[3])&&e.push(d[g]))}}return a.h[c]=e}
function tj(a,b){return a===void 0||a==="undefined"?!0:a===b}
var uj=class{constructor(){this.store={};this.h={}}storePayload(a,b){a=sj(a);this.store[a]?this.store[a].push(b):(this.h={},this.store[a]=[b]);S("more_accurate_gel_parser")&&(b=new CustomEvent("TRANSPORTING_NEW_EVENT"),window.dispatchEvent(b));return a}smartExtractMatchingEntries(a){if(!a.keys.length)return[];const b=rj(this,a.keys.splice(0,1)[0]),c=[];for(let d=0;d<b.length;d++)this.store[b[d]]&&a.sizeLimit&&(this.store[b[d]].length<=a.sizeLimit?(c.push(...this.store[b[d]]),delete this.store[b[d]]):
c.push(...this.store[b[d]].splice(0,a.sizeLimit)));(a==null?0:a.sizeLimit)&&c.length<(a==null?void 0:a.sizeLimit)&&(a.sizeLimit-=c.length,c.push(...this.smartExtractMatchingEntries(a)));return c}extractMatchingEntries(a){a=rj(this,a);const b=[];for(let c=0;c<a.length;c++)this.store[a[c]]&&(b.push(...this.store[a[c]]),delete this.store[a[c]]);return b}getSequenceCount(a){a=rj(this,a);let b=0;for(let c=0;c<a.length;c++){let d;b+=((d=this.store[a[c]])==null?void 0:d.length)||0}return b}};
uj.prototype.getSequenceCount=uj.prototype.getSequenceCount;uj.prototype.extractMatchingEntries=uj.prototype.extractMatchingEntries;uj.prototype.smartExtractMatchingEntries=uj.prototype.smartExtractMatchingEntries;uj.prototype.storePayload=uj.prototype.storePayload;function sj(a){return[a.auth===void 0?"undefined":a.auth,a.isJspb===void 0?"undefined":a.isJspb,a.cttAuthInfo===void 0?"undefined":a.cttAuthInfo,a.tier===void 0?"undefined":a.tier].join("/")}
;function vj(a,b){if(a)return a[b.name]}
;const wj=T("initial_gel_batch_timeout",2E3),xj=T("gel_queue_timeout_max_ms",6E4),yj=T("gel_min_batch_size",5);let zj=void 0;class Aj{constructor(){this.l=this.h=this.i=0;this.j=!1}}const Bj=new Aj,Cj=new Aj,Dj=new Aj,Ej=new Aj;let Fj,Gj=!0,Hj=1;const Ij=new Map,Jj=t.ytLoggingTransportTokensToCttTargetIds_||{},Kj=t.ytLoggingTransportTokensToJspbCttTargetIds_||{};let Lj={};function Y(){let a=u("yt.logging.ims");a||(a=new uj,w("yt.logging.ims",a));return a}
function Mj(a,b){if(a.endpoint==="log_event"){Nj();var c=Oj(a),d=Pj(a.payload)||"";a:{if(S("enable_web_tiered_gel")){var e=Di[d||""];var f,g;if(Vi().resolve(new Ni)==null)var h=void 0;else{let k;h=(k=u("yt.gcf.config.hotConfigGroup"))!=null?k:Q("RAW_HOT_CONFIG_GROUP");h=h==null?void 0:(f=h.loggingHotConfig)==null?void 0:(g=f.eventLoggingConfig)==null?void 0:g.payloadPolicies}if(f=h)for(g=0;g<f.length;g++)if(f[g].payloadNumber===e){e=f[g];break a}}e=void 0}f=200;if(e){if(e.enabled===!1&&!S("web_payload_policy_disabled_killswitch"))return;
f=Qj(e.tier);if(f===400){Rj(a,b);return}}Lj[c]=!0;e={cttAuthInfo:c,isJspb:!1,tier:f};Y().storePayload(e,a.payload);Sj(b,c,e,d==="gelDebuggingEvent")}}
function Sj(a,b,c,d=!1){a&&(zj=new a);a=T("tvhtml5_logging_max_batch_ads_fork")||T("tvhtml5_logging_max_batch")||T("web_logging_max_batch")||100;const e=W(),f=Tj(!1,c.tier),g=f.l;d&&(f.j=!0);d=0;c&&(d=Y().getSequenceCount(c));const h=()=>{Uj({writeThenSend:!0},S("flush_only_full_queue")?b:void 0,!1,c.tier)};
d>=1E3?h():d>=a?Fj||(Fj=Vj(()=>{h();Fj=void 0},0)):e-g>=10&&(Wj(!1,c.tier),f.l=e)}
function Rj(a,b){if(a.endpoint==="log_event"){S("more_accurate_gel_parser")&&Y().storePayload({isJspb:!1},a.payload);Nj();var c=Oj(a),d=new Map;d.set(c,[a.payload]);var e=Pj(a.payload)||"";b&&(zj=new b);return new L((f,g)=>{zj&&zj.isReady()?Xj(d,zj,f,g,{bypassNetworkless:!0},!0,e==="gelDebuggingEvent"):f()})}}
function Oj(a){var b="";if(a.dangerousLogToVisitorSession)b="visitorOnlyApprovedKey";else if(a.cttAuthInfo){b=a.cttAuthInfo;const c={};b.videoId?c.videoId=b.videoId:b.playlistId&&(c.playlistId=b.playlistId);Jj[a.cttAuthInfo.token]=c;b=a.cttAuthInfo.token}return b}
function Uj(a={},b,c=!1,d){new L((e,f)=>{const g=Tj(c,d),h=g.j;g.j=!1;Yj(g.i);Yj(g.h);g.h=0;zj&&zj.isReady()?d===void 0&&S("enable_web_tiered_gel")?Zj(e,f,a,b,c,300,h):Zj(e,f,a,b,c,d,h):(Wj(c,d),e())})}
function Zj(a,b,c={},d,e=!1,f=200,g=!1){var h=zj,k=new Map;const l=new Map,n={isJspb:e,cttAuthInfo:d,tier:f},p={isJspb:e,cttAuthInfo:d};if(d!==void 0)e?(b=S("enable_web_tiered_gel")?Y().smartExtractMatchingEntries({keys:[n,p],sizeLimit:1E3}):Y().extractMatchingEntries(p),k.set(d,b),ak(k,h,a,c,g)):(k=S("enable_web_tiered_gel")?Y().smartExtractMatchingEntries({keys:[n,p],sizeLimit:1E3}):Y().extractMatchingEntries(p),l.set(d,k),Xj(l,h,a,b,c,!1,g));else if(e){for(const q of Object.keys(Lj))b=S("enable_web_tiered_gel")?
Y().smartExtractMatchingEntries({keys:[n,p],sizeLimit:1E3}):Y().extractMatchingEntries({isJspb:!0,cttAuthInfo:q}),b.length>0&&k.set(q,b),(S("web_fp_via_jspb_and_json")&&c.writeThenSend||!S("web_fp_via_jspb_and_json"))&&delete Lj[q];ak(k,h,a,c,g)}else{for(const q of Object.keys(Lj))d=S("enable_web_tiered_gel")?Y().smartExtractMatchingEntries({keys:[{isJspb:!1,cttAuthInfo:q,tier:f},{isJspb:!1,cttAuthInfo:q}],sizeLimit:1E3}):Y().extractMatchingEntries({isJspb:!1,cttAuthInfo:q}),d.length>0&&l.set(q,d),
(S("web_fp_via_jspb_and_json")&&c.writeThenSend||!S("web_fp_via_jspb_and_json"))&&delete Lj[q];Xj(l,h,a,b,c,!1,g)}}
function Wj(a=!1,b=200){const c=()=>{Uj({writeThenSend:!0},void 0,a,b)},d=Tj(a,b);
var e=d===Ej||d===Dj?5E3:xj;S("web_gel_timeout_cap")&&!d.h&&(e=Vj(()=>{c()},e),d.h=e);
Yj(d.i);e=Q("LOGGING_BATCH_TIMEOUT",T("web_gel_debounce_ms",1E4));S("shorten_initial_gel_batch_timeout")&&Gj&&(e=wj);e=Vj(()=>{T("gel_min_batch_size")>0?Y().getSequenceCount({cttAuthInfo:void 0,isJspb:a,tier:b})>=yj&&c():c()},e);
d.i=e}
function Xj(a,b,c,d,e={},f,g){const h=Math.round(W());let k=a.size;const l=bk(g);for(const [n,p]of a){a=n;g=p;const q=ae({context:ii(b.config_||hi())});if(!ha(g)&&!S("throw_err_when_logevent_malformed_killswitch")){d();break}q.events=g;(g=Jj[a])&&ck(q,a,g);delete Jj[a];const m=a==="visitorOnlyApprovedKey";dk(q,h,m);ek(e);const v=B=>{S("start_client_gcf")&&Hg.h(()=>r(function*(){yield fk(B)}));
k--;k||c()};
let z=0;const D=()=>{z++;if(e.bypassNetworkless&&z===1)try{Ii(b,l,q,gk({writeThenSend:!0},m,v,D,f)),Gj=!1}catch(B){Of(B),d()}k--;k||c()};
try{Ii(b,l,q,gk(e,m,v,D,f)),Gj=!1}catch(B){Of(B),d()}}}
function ak(a,b,c,d={},e){const f=Math.round(W()),g={value:a.size};var h=new Map([...a]);for(const [D]of h){var k=D,l=a.get(k);h=new qf;var n=b.config_||hi(),p=new mf,q=new df;J(q,1,n.ja);J(q,2,n.ia);qd(q,16,n.Ba);J(q,17,n.innertubeContextClientVersion);if(n.Z){var m=n.Z,v=new bf;m.coldConfigData&&J(v,1,m.coldConfigData);m.appInstallData&&J(v,6,m.appInstallData);m.coldHashData&&J(v,3,m.coldHashData);m.hotHashData&&J(v,5,m.hotHashData);H(q,bf,62,v)}if((m=t.devicePixelRatio)&&m!=1){if(m!=null&&typeof m!==
"number")throw Error(`Value of float/double field must be a number, found ${typeof m}: ${m}`);ad(q,65,m)}m=bg();m!==""&&J(q,54,m);m=cg();if(m.length>0){v=new hf;for(let B=0;B<m.length;B++){const I=new ef;J(I,1,m[B].key);cd(I,2,ff,mc(m[B].value));kd(v,15,ef,I)}H(p,hf,5,v)}ji(p);ki(n,q);S("start_client_gcf")&&li(q);Q("DELEGATED_SESSION_ID")&&!S("pageid_as_header_web")&&(n=new lf,J(n,3,Q("DELEGATED_SESSION_ID")));!S("fill_delegate_context_in_gel_killswitch")&&(m=Q("INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT"))&&
(v=gd(p,lf,3)||new lf,n=p,m=J(v,18,m),H(n,lf,3,m));n=q;m=Q("DEVICE","");for(const [B,I]of Object.entries(Vf(m)))m=B,v=I,m==="cbrand"?J(n,12,v):m==="cmodel"?J(n,13,v):m==="cbr"?J(n,87,v):m==="cbrver"?J(n,88,v):m==="cos"?J(n,18,v):m==="cosver"?J(n,19,v):m==="cplatform"&&qd(n,42,zg(v));p.j(q);H(h,mf,1,p);if(q=Kj[k])a:{if(nd(q,1))p=1;else if(q.getPlaylistId())p=2;else break a;H(h,pf,4,q);q=gd(h,mf,1)||new mf;n=gd(q,lf,3)||new lf;m=new kf;J(m,2,k);qd(m,1,p);kd(n,12,kf,m);H(q,lf,3,n)}delete Kj[k];k=k===
"visitorOnlyApprovedKey";hk()||ad(h,2,f==null?f:lc(f));!k&&(p=Q("EVENT_ID"))&&(q=ik(),n=new of,J(n,1,p),ad(n,2,q==null?q:lc(q)),H(h,of,5,n));ek(d);if(S("jspb_serialize_with_worker")){Ci||((p=Q("WORKER_SERIALIZATION_URL"))?((p=p.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue)?(qa===void 0&&(qa=ra()),q=qa,p=new sa(q?q.createScriptURL(p):p)):p=null,Ci=p):Ci=null);q=Ci||void 0;if(!Bi&&q!==void 0){p=Worker;if(q instanceof sa)q=q.h;else throw Error("");Bi=new p(q,void 0)}if((p=Bi)&&d.writeThenSend){Ij.set(Hj,
{client:b,resolve:c,networklessOptions:d,isIsolated:!1,useVSSEndpoint:e,dangerousLogToVisitorSession:k,requestsOutstanding:g});a=p;b=a.postMessage;c=Id(h);b.call(a,{op:"gelBatchToSerialize",batchRequest:c,clientEvents:l,key:Hj});Hj++;break}}if(l){p=[];for(q=0;q<l.length;q++)try{p.push(new nf(l[q]))}catch(B){Of(new xf("Transport failed to deserialize "+String(l[q])))}l=p}else l=[];for(const B of l)kd(h,3,nf,B);l={startTime:W(),ticks:{},infos:{}};try{Hd=!0;var z=JSON.stringify(Id(h),Oc)}finally{Hd=
!1}h=z;l.ticks.geljspc=W();S("log_jspb_serialize_latency")&&Math.random()<.001&&ui("meta_logging_csi_event",{timerName:"gel_jspb_serialize",Rb:l});jk(h,b,c,d,e,k,g)}}
function jk(a,b,c,d={},e,f,g={value:0}){e=bk(e);d=gk(d,f,h=>{S("start_client_gcf")&&Hg.h(()=>r(function*(){yield fk(h)}));
g.value--;g.value||c()},()=>{g.value--;
g.value||c()},!1);
d.headers["Content-Type"]="application/json+protobuf";d.postBodyFormat="JSPB";d.postBody=a;Ii(b,e,"",d);Gj=!1}
function ek(a){S("always_send_and_write")&&(a.writeThenSend=!1)}
function gk(a,b,c,d,e){a={retry:!0,onSuccess:c,onError:d,networklessOptions:a,dangerousLogToVisitorSession:b,tb:!!e,headers:{},postBodyFormat:"",postBody:"",compress:S("compress_gel")||S("compress_gel_lr")};hk()&&(a.headers["X-Goog-Request-Time"]=JSON.stringify(Math.round(W())));return a}
function dk(a,b,c){hk()||(a.requestTimeMs=String(b));S("unsplit_gel_payloads_in_logs")&&(a.unsplitGelPayloadsInLogs=!0);!c&&(b=Q("EVENT_ID"))&&(c=ik(),a.serializedClientEventId={serializedEventId:b,clientCounter:String(c)})}
function ik(){let a=Q("BATCH_CLIENT_COUNTER")||0;a||(a=Math.floor(Math.random()*65535/2));a++;a>65535&&(a=1);P("BATCH_CLIENT_COUNTER",a);return a}
function ck(a,b,c){let d;if(c.videoId)d="VIDEO";else if(c.playlistId)d="PLAYLIST";else return;a.credentialTransferTokenTargetId=c;a.context=a.context||{};a.context.user=a.context.user||{};a.context.user.credentialTransferTokens=[{token:b,scope:d}]}
function Nj(){var a;(a=u("yt.logging.transport.enableScrapingForTest"))||(a=ag("il_payload_scraping"),a=(a!==void 0?String(a):"")!=="enable_il_payload_scraping");a||(qj=[],w("yt.logging.transport.enableScrapingForTest",!0),w("yt.logging.transport.scrapedPayloadsForTesting",qj),w("yt.logging.transport.payloadToScrape","visualElementShown visualElementHidden visualElementAttached screenCreated visualElementGestured visualElementStateChanged".split(" ")),w("yt.logging.transport.getScrapedPayloadFromClientEventsFunction"),
w("yt.logging.transport.scrapeClientEvent",!0))}
function hk(){return S("use_request_time_ms_header")||S("lr_use_request_time_ms_header")}
function Vj(a,b){return S("transport_use_scheduler")===!1?Yf(a,b):S("logging_avoid_blocking_during_navigation")||S("lr_logging_avoid_blocking_during_navigation")?Bg(()=>{nj().currentState==="none"?a():nj().install({none:{callback:a}})},b):Bg(a,b)}
function Yj(a){S("transport_use_scheduler")?Hg.R(a):window.clearTimeout(a)}
function fk(a){return r(function*(){var b,c=a==null?void 0:(b=a.responseContext)==null?void 0:b.globalConfigGroup;b=vj(c,$e);const d=c==null?void 0:c.hotHashData,e=vj(c,Ze);c=c==null?void 0:c.coldHashData;const f=Vi().resolve(new Ni);f&&(d&&(b?yield di(f,d,b):yield di(f,d)),c&&(e?yield ei(f,c,e):yield ei(f,c)))})}
function Tj(a,b=200){return a?b===300?Ej:Cj:b===300?Dj:Bj}
function Pj(a){a=Object.keys(a);for(const b of a)if(Di[b])return b}
function Qj(a){switch(a){case "DELAYED_EVENT_TIER_UNSPECIFIED":return 0;case "DELAYED_EVENT_TIER_DEFAULT":return 100;case "DELAYED_EVENT_TIER_DISPATCH_TO_EMPTY":return 200;case "DELAYED_EVENT_TIER_FAST":return 300;case "DELAYED_EVENT_TIER_IMMEDIATE":return 400;default:return 200}}
function bk(a=!1){return a&&S("vss_through_gel_video_stats")?"video_stats":"log_event"}
;const kk=t.ytLoggingGelSequenceIdObj_||{};
function lk(a,b,c,d={}){const e={},f=Math.round(d.timestamp||W());e.eventTimeMs=f<Number.MAX_SAFE_INTEGER?f:0;e[a]=b;a=u("_lact",window);a=a==null?-1:Math.max(Date.now()-a,0);e.context={lastActivityMs:String(d.timestamp||!isFinite(a)?-1:a)};d.sequenceGroup&&!S("web_gel_sequence_info_killswitch")&&(a=e.context,b=d.sequenceGroup,kk[b]=b in kk?kk[b]+1:0,a.sequence={index:kk[b],groupKey:b},d.endOfSequence&&delete kk[d.sequenceGroup]);(d.sendIsolatedPayload?Rj:Mj)({endpoint:"log_event",payload:e,cttAuthInfo:d.cttAuthInfo,
dangerousLogToVisitorSession:d.dangerousLogToVisitorSession},c)}
function mk(a=!1){Uj(void 0,void 0,a)}
;let nk=[];function Z(a,b,c={}){let d=Ji;Q("ytLoggingEventsDefaultDisabled",!1)&&Ji===Ji&&(d=null);lk(a,b,d,c)}
;var ok=new Set,pk=0,qk=0,rk=0,sk=[];const tk=["PhantomJS","Googlebot","TO STOP THIS SECURITY SCAN go/scan"];function uk(a){vk(a)}
function wk(a){vk(a,"WARNING")}
function vk(a,b="ERROR"){var c={};c.name=Q("INNERTUBE_CONTEXT_CLIENT_NAME",1);c.version=Q("INNERTUBE_CONTEXT_CLIENT_VERSION");xk(a,c,b)}
function xk(a,b,c="ERROR"){if(a){a.hasOwnProperty("level")&&a.level&&(c=a.level);if(S("console_log_js_exceptions")){var d=[];d.push(`Name: ${a.name}`);d.push(`Message: ${a.message}`);a.hasOwnProperty("params")&&d.push(`Error Params: ${JSON.stringify(a.params)}`);a.hasOwnProperty("args")&&d.push(`Error args: ${JSON.stringify(a.args)}`);d.push(`File name: ${a.fileName}`);d.push(`Stacktrace: ${a.stack}`);window.console.log(d.join("\n"),a)}if(!(pk>=5)){var e=Aa(a);d=e.message||"Unknown Error";const p=
e.name||"UnknownError";var f=e.stack||a.i||"Not available";if(f.startsWith(`${p}: ${d}`)){var g=f.split("\n");g.shift();f=g.join("\n")}g=e.lineNumber||"Not available";e=e.fileName||"Not available";let q=0;if(a.hasOwnProperty("args")&&a.args&&a.args.length)for(var h=0;h<a.args.length&&!(q=sg(a.args[h],`params.${h}`,b,q),q>=500);h++);else if(a.hasOwnProperty("params")&&a.params){const m=a.params;if(typeof a.params==="object")for(h in m){if(!m[h])continue;const v=`params.${h}`,z=ug(m[h]);b[v]=z;q+=v.length+
z.length;if(q>500)break}else b.params=ug(m)}if(sk.length)for(h=0;h<sk.length&&!(q=sg(sk[h],`params.context.${h}`,b,q),q>=500);h++);navigator.vendor&&!b.hasOwnProperty("vendor")&&(b["device.vendor"]=navigator.vendor);b={message:d,name:p,lineNumber:g,fileName:e,stack:f,params:b,sampleWeight:1};d=Number(a.columnNumber);isNaN(d)||(b.lineNumber=`${b.lineNumber}:${d}`);if(a.level==="IGNORED")var k=0;else a:{a=lg();for(k of a.G)if(b.message&&b.message.match(k.Ga)){k=k.weight;break a}for(var l of a.F)if(l.callback(b)){k=
l.weight;break a}k=1}b.sampleWeight=k;k=b;for(var n of ig)if(n.U[k.name]){l=n.U[k.name];for(const m of l)if(l=k.message.match(m.u)){k.params["params.error.original"]=l[0];a=m.groups;b={};for(d=0;d<a.length;d++)b[a[d]]=l[d+1],k.params[`params.error.${a[d]}`]=l[d+1];k.message=n.ba(b);break}}k.params||(k.params={});n=lg();k.params["params.errorServiceSignature"]=`msg=${n.G.length}&cb=${n.F.length}`;k.params["params.serviceWorker"]="true";t.document&&t.document.querySelectorAll&&(k.params["params.fscripts"]=
String(document.querySelectorAll("script:not([nonce])").length));(new de(ee,"sample")).constructor!==de&&(k.params["params.fconst"]="true");window.yterr&&typeof window.yterr==="function"&&window.yterr(k);k.sampleWeight===0||ok.has(k.message)||yk(k,c)}}}
function yk(a,b="ERROR"){if(b==="ERROR"){pg.A("handleError",a);if(S("record_app_crashed_web")&&rk===0&&a.sampleWeight===1){rk++;var c={appCrashType:"APP_CRASH_TYPE_BREAKPAD"};S("report_client_error_with_app_crash_ks")||(c.systemHealth={crashData:{clientError:{logMessage:{message:a.message}}}});Z("appCrashed",c)}qk++}else b==="WARNING"&&pg.A("handleWarning",a);c={};b:{for(e of tk){var d=Ra();if(d&&d.toLowerCase().indexOf(e.toLowerCase())>=0){var e=!0;break b}}e=!1}if(e)c=void 0;else{d={stackTrace:a.stack};
a.fileName&&(d.filename=a.fileName);e=a.lineNumber&&a.lineNumber.split?a.lineNumber.split(":"):[];e.length!==0&&(e.length!==1||isNaN(Number(e[0]))?e.length!==2||isNaN(Number(e[0]))||isNaN(Number(e[1]))||(d.lineNumber=Number(e[0]),d.columnNumber=Number(e[1])):d.lineNumber=Number(e[0]));e={level:"ERROR_LEVEL_UNKNOWN",message:a.message,errorClassName:a.name,sampleWeight:a.sampleWeight};b==="ERROR"?e.level="ERROR_LEVEL_ERROR":b==="WARNING"&&(e.level="ERROR_LEVEL_WARNNING");d={isObfuscated:!0,browserStackInfo:d};
c.pageUrl=window.location.href;c.kvPairs=[];Q("FEXP_EXPERIMENTS")&&(c.experimentIds=Q("FEXP_EXPERIMENTS"));var f=Q("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS");const k=Lf.EXPERIMENT_FLAGS;if((!k||!k.web_disable_gel_stp_ecatcher_killswitch)&&f)for(var g of Object.keys(f))c.kvPairs.push({key:g,value:String(f[g])});if(g=a.params)for(var h of Object.keys(g))c.kvPairs.push({key:`client.${h}`,value:String(g[h])});h=Q("SERVER_NAME");g=Q("SERVER_VERSION");h&&g&&(c.kvPairs.push({key:"server.name",value:h}),
c.kvPairs.push({key:"server.version",value:g}));c={errorMetadata:c,stackTrace:d,logMessage:e}}if(c&&(Z("clientError",c),b==="ERROR"||S("errors_flush_gel_always_killswitch")))a:{if(S("web_fp_via_jspb")){b=nk;nk=[];if(b)for(const k of b)lk(k.N,k.payload,Ji,k.options);mk(!0);if(!S("web_fp_via_jspb_and_json"))break a}mk()}try{ok.add(a.message)}catch(k){}pk++}
function zk(a,...b){a.args||(a.args=[]);a.args.push(...b)}
;function Ak(a){return r(function*(){var b=yield t.fetch(a.i);if(b.status!==200)return Promise.reject("Server error when retrieving AmbientData");b=yield b.text();if(!b.startsWith(")]}'\n"))return Promise.reject("Incorrect JSPB formatting");a:{b=JSON.parse(b.substring(5));for(let c=0;c<b.length;c++)if(b[c][0]==="yt.sw.adr"){b=new Hf(b[c]);break a}b=null}return b?b:Promise.reject("AmbientData missing from response")})}
function Bk(a=!1){const b=Ck.h;return r(function*(){if(a||!b.h)b.h=Ak(b).then(b.j).catch(c=>{delete b.h;vk(c)});
return b.h})}
var Ck=class{constructor(){this.i=Dk("/sw.js_data")}j(a){const b=gd(a,Gf,2);if(b){var c=md(b,5);c&&(t.__SAPISID=c);ld(b,10)!=null?P("EOM_VISITOR_DATA",md(b,10)):ld(b,7)!=null&&P("VISITOR_DATA",md(b,7));if(kc(Yc(b,4))!=null){c=String;var d=kc(Yc(b,4));P("SESSION_INDEX",c(d!=null?d:0))}ld(b,8)!=null&&P("DELEGATED_SESSION_ID",md(b,8));ld(b,12)!=null&&P("USER_SESSION_ID",md(b,12));ld(b,11)!=null&&P("INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT",md(b,11))}return a}};function Ek(a,b){b.encryptedTokenJarContents&&(a.h[b.encryptedTokenJarContents]=b,typeof b.expirationSeconds==="string"&&setTimeout(()=>{delete a.h[b.encryptedTokenJarContents]},Number(b.expirationSeconds)*1E3))}
var Fk=class{constructor(){this.h={}}handleResponse(a,b){if(!b)throw Error("request needs to be passed into ConsistencyService");let c,d;b=((c=b.H.context)==null?void 0:(d=c.request)==null?void 0:d.consistencyTokenJars)||[];let e;if(a=(e=a.responseContext)==null?void 0:e.consistencyTokenJar){for(const f of b)delete this.h[f.encryptedTokenJarContents];Ek(this,a)}}};let Gk=Date.now().toString();function Hk(){if(window.crypto&&window.crypto.getRandomValues)try{var a=Array(16),b=new Uint8Array(16);window.crypto.getRandomValues(b);for(var c=0;c<a.length;c++)a[c]=b[c];return a}catch(d){}a=Array(16);for(b=0;b<16;b++){c=Date.now();for(let d=0;d<c%23;d++)a[b]=Math.random();a[b]=Math.floor(Math.random()*256)}if(Gk)for(b=1,c=0;c<Gk.length;c++)a[b%16]=a[b%16]^a[(b-1)%16]/4^Gk.charCodeAt(c),b++;return a}
;var Ik;let Jk=t.ytLoggingDocDocumentNonce_;if(!Jk){const a=Hk(),b=[];for(let c=0;c<a.length;c++)b.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(a[c]&63));Jk=b.join("")}Ik=Jk;var Kk={Sa:0,Pa:1,Ra:2,eb:3,Ua:4,pb:5,fb:6,lb:7,jb:8,kb:9,ob:10,0:"DEFAULT",1:"CHAT",2:"CONVERSATIONS",3:"MINIPLAYER",4:"DIALOG",5:"VOZ",6:"MUSIC_WATCH_TABS",7:"SHARE",8:"PUSH_NOTIFICATIONS",9:"RICH_GRID_WATCH",10:"UNPLUGGED_BROWSE"};let Lk=1;function Mk(a){return new Nk({trackingParams:a})}
function Ok(a){const b=Lk++;return new Nk({veType:a,veCounter:b,elementIndex:void 0,dataElement:void 0,youtubeData:void 0,jspbYoutubeData:void 0,loggingDirectives:void 0})}
var Nk=class{constructor(a){this.h=a}getAsJson(){const a={};this.h.trackingParams!==void 0?a.trackingParams=this.h.trackingParams:(a.veType=this.h.veType,this.h.veCounter!==void 0&&(a.veCounter=this.h.veCounter),this.h.elementIndex!==void 0&&(a.elementIndex=this.h.elementIndex));this.h.dataElement!==void 0&&(a.dataElement=this.h.dataElement.getAsJson());this.h.youtubeData!==void 0&&(a.youtubeData=this.h.youtubeData);this.h.isCounterfactual&&(a.isCounterfactual=!0);return a}getAsJspb(){const a=new gf;
this.h.trackingParams!==void 0?a.setTrackingParams(this.h.trackingParams):(this.h.veType!==void 0&&pd(a,2,this.h.veType),this.h.veCounter!==void 0&&pd(a,6,this.h.veCounter),this.h.elementIndex!==void 0&&pd(a,3,this.h.elementIndex),this.h.isCounterfactual&&ad(a,5,!0));if(this.h.dataElement!==void 0){var b=this.h.dataElement.getAsJspb();H(a,gf,7,b)}this.h.youtubeData!==void 0&&H(a,af,8,this.h.jspbYoutubeData);return a}toString(){return JSON.stringify(this.getAsJson())}isClientVe(){return!this.h.trackingParams&&
!!this.h.veType}getLoggingDirectives(){return this.h.loggingDirectives}};function Pk(a=0){return Q("client-screen-nonce-store",{})[a]}
function Qk(a,b=0){let c=Q("client-screen-nonce-store");c||(c={},P("client-screen-nonce-store",c));c[b]=a}
function Rk(a=0){return a===0?"ROOT_VE_TYPE":`${"ROOT_VE_TYPE"}.${a}`}
function Sk(a=0){return Q(Rk(a))}
function Tk(a=0){return(a=Sk(a))?new Nk({veType:a,youtubeData:void 0,jspbYoutubeData:void 0}):null}
function Uk(){let a=Q("csn-to-ctt-auth-info");a||(a={},P("csn-to-ctt-auth-info",a));return a}
function Vk(){return Object.values(Q("client-screen-nonce-store",{})).filter(a=>a!==void 0)}
function Wk(a=0){a=Pk(a);if(!a&&!Q("USE_CSN_FALLBACK",!0))return null;a||(a="UNDEFINED_CSN");return a?a:null}
function Xk(a){for(const b of Object.values(Kk))if(Wk(b)===a)return!0;return!1}
function Yk(a,b,c){const d=Uk();(c=Wk(c))&&delete d[c];b&&(d[a]=b)}
function Zk(a){return Uk()[a]}
function $k(a,b,c=0,d){if(a!==Pk(c)||b!==Q(Rk(c)))if(Yk(a,d,c),Qk(a,c),P(Rk(c),b),b=()=>{setTimeout(()=>{a&&Z("foregroundHeartbeatScreenAssociated",{clientDocumentNonce:Ik,clientScreenNonce:a})},0)},"requestAnimationFrame"in window)try{window.requestAnimationFrame(b)}catch(e){b()}else b()}
;function al(){var a=Q("INNERTUBE_CONTEXT");if(!a)return vk(Error("Error: No InnerTubeContext shell provided in ytconfig.")),{};a=ae(a);S("web_no_tracking_params_in_shell_killswitch")||delete a.clickTracking;a.client||(a.client={});var b=a.client;b.utcOffsetMinutes=-Math.floor((new Date).getTimezoneOffset());var c=bg();c?b.experimentsToken=c:delete b.experimentsToken;Fk.h||(Fk.h=new Fk);b=Fk.h.h;c=[];let d=0;for(var e in b)c[d++]=b[e];a.request=Object.assign({},a.request,{consistencyTokenJars:c});
a.user=Object.assign({},a.user);if(e=Q("INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT"))a.user.serializedDelegationContext=e;return a}
;function bl(a){var b=a;if(a=Q("INNERTUBE_HOST_OVERRIDE")){a=String(a);var c=String,d=b.match(Ea);b=d[5];var e=d[6];d=d[7];var f="";b&&(f+=b);e&&(f+="?"+e);d&&(f+="#"+d);b=a+c(f)}return b}
;function cl(a){const b={"Content-Type":"application/json"};Q("EOM_VISITOR_DATA")?b["X-Goog-EOM-Visitor-Id"]=Q("EOM_VISITOR_DATA"):Q("VISITOR_DATA")&&(b["X-Goog-Visitor-Id"]=Q("VISITOR_DATA"));b["X-Youtube-Bootstrap-Logged-In"]=Q("LOGGED_IN",!1);Q("DEBUG_SETTINGS_METADATA")&&(b["X-Debug-Settings-Metadata"]=Q("DEBUG_SETTINGS_METADATA"));a!=="cors"&&((a=Q("INNERTUBE_CONTEXT_CLIENT_NAME"))&&(b["X-Youtube-Client-Name"]=a),(a=Q("INNERTUBE_CONTEXT_CLIENT_VERSION"))&&(b["X-Youtube-Client-Version"]=a),(a=
Q("CHROME_CONNECTED_HEADER"))&&(b["X-Youtube-Chrome-Connected"]=a),(a=Q("DOMAIN_ADMIN_STATE"))&&(b["X-Youtube-Domain-Admin-State"]=a));return b}
;var dl=class{constructor(){this.h={}}get(a){if(Object.prototype.hasOwnProperty.call(this.h,a))return this.h[a]}set(a,b){this.h[a]=b}remove(a){delete this.h[a]}};new class{constructor(){this.mappings=new dl}get(a){a:{var b=this.mappings.get(a.toString());switch(b.type){case "mapping":a=b.value;break a;case "factory":b=b.value();this.mappings.set(a.toString(),{type:"mapping",value:b});a=b;break a;default:a=ua(b,void 0)}}return a}};var el=class{},fl=class extends el{};const gl={GET_DATASYNC_IDS:function(a){return()=>new a}(class extends fl{})};class pi extends ni{constructor(a){super(arguments);this.csn=a}}const xi=new oi,hl=[];let jl=il,kl=0;const ll=new Map,ml=new Map,nl=new Map;
function ol(a,b,c,d,e,f,g,h){const k=jl(),l=new Nk({veType:b,youtubeData:f,jspbYoutubeData:void 0});f=pl({},k);e&&(f.cttAuthInfo=e);e={csn:k,pageVe:l.getAsJson()};S("expectation_logging")&&h&&h.screenCreatedLoggingExpectations&&(e.screenCreatedLoggingExpectations=h.screenCreatedLoggingExpectations);c&&c.visualElement?(e.implicitGesture={parentCsn:c.clientScreenNonce,gesturedVe:c.visualElement.getAsJson()},g&&(e.implicitGesture.gestureType=g)):c&&wk(new xf("newScreen() parent element does not have a VE - rootVe",
b));d&&(e.cloneCsn=d);a?lk("screenCreated",e,a,f):Z("screenCreated",e,f);ui(xi,new pi(k));ll.clear();ml.clear();nl.clear();return k}
function ql(a,b,c,d,e=!1){rl(a,b,c,[d],e)}
function rl(a,b,c,d,e=!1){const f=pl({cttAuthInfo:Zk(b)||void 0},b);for(const h of d){var g=h.getAsJson();($d(g)||!g.trackingParams&&!g.veType)&&wk(Error("Child VE logged with no data"));if(S("no_client_ve_attach_unless_shown")){const k=sl(h,b);if(g.veType&&!ml.has(k)&&!nl.has(k)&&!e){if(!S("il_attach_cache_limit")||ll.size<1E3){ll.set(k,[a,b,c,h]);return}S("il_attach_cache_limit")&&ll.size>1E3&&wk(new xf("IL Attach cache exceeded limit"))}g=sl(c,b);ll.has(g)?tl(c,b):nl.set(g,!0)}}d=d.filter(h=>{h.csn!==
b?(h.csn=b,h=!0):h=!1;return h});
c={csn:b,parentVe:c.getAsJson(),childVes:wa(d,h=>h.getAsJson())};
b==="UNDEFINED_CSN"?ul("visualElementAttached",f,c):a?lk("visualElementAttached",c,a,f):Z("visualElementAttached",c,f)}
function vl(a,b,c,d,e){wl(a,b,c,e)}
function wl(a,b,c,d){xl(c,b);const e=pl({cttAuthInfo:Zk(b)||void 0},b);c={csn:b,ve:c.getAsJson(),eventType:1};d&&(c.clientData=d);b==="UNDEFINED_CSN"?ul("visualElementShown",e,c):a?lk("visualElementShown",c,a,e):Z("visualElementShown",c,e)}
function yl(a,b,c,d=!1){const e=d?16:8;d=pl({cttAuthInfo:Zk(b)||void 0,endOfSequence:d},b);c={csn:b,ve:c.getAsJson(),eventType:e};b==="UNDEFINED_CSN"?ul("visualElementHidden",d,c):a?lk("visualElementHidden",c,a,d):Z("visualElementHidden",c,d)}
function zl(a,b,c,d){var e=void 0;xl(c,b);e=e||"INTERACTION_LOGGING_GESTURE_TYPE_GENERIC_CLICK";const f=pl({cttAuthInfo:Zk(b)||void 0},b);c={csn:b,ve:c.getAsJson(),gestureType:e};d&&(c.clientData=d);b==="UNDEFINED_CSN"?ul("visualElementGestured",f,c):a?lk("visualElementGestured",c,a,f):Z("visualElementGestured",c,f)}
function il(){let a;a=Hk();const b=[];for(let c=0;c<a.length;c++)b.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(a[c]&63));return b.join("")}
function ul(a,b,c){hl.push({N:a,payload:c,zb:void 0,options:b});kl||(kl=yi())}
function zi(a){if(hl){for(const b of hl)b.payload&&(b.payload.csn=a.csn,Z(b.N,b.payload,b.options));hl.length=0}kl=0}
function sl(a,b){return`${a.getAsJson().veType}${a.getAsJson().veCounter}${b}`}
function xl(a,b){if(S("no_client_ve_attach_unless_shown")){var c=sl(a,b);ml.set(c,!0);tl(a,b)}}
function tl(a,b){a=sl(a,b);ll.has(a)&&(b=ll.get(a)||[],ql(b[0],b[1],b[2],b[3],!0),ll.delete(a))}
function pl(a,b){S("log_sequence_info_on_gel_web")&&(a.sequenceGroup=b);return a}
;Object.assign({auto_search:"LATENCY_ACTION_AUTO_SEARCH",ad_to_ad:"LATENCY_ACTION_AD_TO_AD",ad_to_video:"LATENCY_ACTION_AD_TO_VIDEO",app_startup:"LATENCY_ACTION_APP_STARTUP",browse:"LATENCY_ACTION_BROWSE",cast_splash:"LATENCY_ACTION_CAST_SPLASH",channel_activity:"LATENCY_ACTION_KIDS_CHANNEL_ACTIVITY",channels:"LATENCY_ACTION_CHANNELS",chips:"LATENCY_ACTION_CHIPS",commerce_transaction:"LATENCY_ACTION_COMMERCE_TRANSACTION",direct_playback:"LATENCY_ACTION_DIRECT_PLAYBACK",editor:"LATENCY_ACTION_EDITOR",
embed:"LATENCY_ACTION_EMBED",entity_key_serialization_perf:"LATENCY_ACTION_ENTITY_KEY_SERIALIZATION_PERF",entity_key_deserialization_perf:"LATENCY_ACTION_ENTITY_KEY_DESERIALIZATION_PERF",explore:"LATENCY_ACTION_EXPLORE",favorites:"LATENCY_ACTION_FAVORITES",home:"LATENCY_ACTION_HOME",inboarding:"LATENCY_ACTION_INBOARDING",library:"LATENCY_ACTION_LIBRARY",live:"LATENCY_ACTION_LIVE",live_pagination:"LATENCY_ACTION_LIVE_PAGINATION",management:"LATENCY_ACTION_MANAGEMENT",mini_app:"LATENCY_ACTION_MINI_APP_PLAY",
notification_settings:"LATENCY_ACTION_KIDS_NOTIFICATION_SETTINGS",onboarding:"LATENCY_ACTION_ONBOARDING",parent_profile_settings:"LATENCY_ACTION_KIDS_PARENT_PROFILE_SETTINGS",parent_tools_collection:"LATENCY_ACTION_PARENT_TOOLS_COLLECTION",parent_tools_dashboard:"LATENCY_ACTION_PARENT_TOOLS_DASHBOARD",player_att:"LATENCY_ACTION_PLAYER_ATTESTATION",prebuffer:"LATENCY_ACTION_PREBUFFER",prefetch:"LATENCY_ACTION_PREFETCH",profile_settings:"LATENCY_ACTION_KIDS_PROFILE_SETTINGS",profile_switcher:"LATENCY_ACTION_LOGIN",
projects:"LATENCY_ACTION_PROJECTS",reel_watch:"LATENCY_ACTION_REEL_WATCH",results:"LATENCY_ACTION_RESULTS",red:"LATENCY_ACTION_PREMIUM_PAGE_GET_BROWSE",premium:"LATENCY_ACTION_PREMIUM_PAGE_GET_BROWSE",privacy_policy:"LATENCY_ACTION_KIDS_PRIVACY_POLICY",search_overview_answer:"LATENCY_ACTION_SEARCH_OVERVIEW_ANSWER",search_ui:"LATENCY_ACTION_SEARCH_UI",search_suggest:"LATENCY_ACTION_SUGGEST",search_zero_state:"LATENCY_ACTION_SEARCH_ZERO_STATE",secret_code:"LATENCY_ACTION_KIDS_SECRET_CODE",seek:"LATENCY_ACTION_PLAYER_SEEK",
settings:"LATENCY_ACTION_SETTINGS",store:"LATENCY_ACTION_STORE",supervision_dashboard:"LATENCY_ACTION_KIDS_SUPERVISION_DASHBOARD",tenx:"LATENCY_ACTION_TENX",video_to_ad:"LATENCY_ACTION_VIDEO_TO_AD",watch:"LATENCY_ACTION_WATCH",watch_it_again:"LATENCY_ACTION_KIDS_WATCH_IT_AGAIN","watch,watch7":"LATENCY_ACTION_WATCH","watch,watch7_html5":"LATENCY_ACTION_WATCH","watch,watch7ad":"LATENCY_ACTION_WATCH","watch,watch7ad_html5":"LATENCY_ACTION_WATCH",wn_comments:"LATENCY_ACTION_LOAD_COMMENTS",ww_rqs:"LATENCY_ACTION_WHO_IS_WATCHING",
voice_assistant:"LATENCY_ACTION_VOICE_ASSISTANT",cast_load_by_entity_to_watch:"LATENCY_ACTION_CAST_LOAD_BY_ENTITY_TO_WATCH",networkless_performance:"LATENCY_ACTION_NETWORKLESS_PERFORMANCE",gel_compression:"LATENCY_ACTION_GEL_COMPRESSION",gel_jspb_serialize:"LATENCY_ACTION_GEL_JSPB_SERIALIZE"},{"analytics.explore":"LATENCY_ACTION_CREATOR_ANALYTICS_EXPLORE","artist.analytics":"LATENCY_ACTION_CREATOR_ARTIST_ANALYTICS","artist.events":"LATENCY_ACTION_CREATOR_ARTIST_CONCERTS","artist.presskit":"LATENCY_ACTION_CREATOR_ARTIST_PROFILE",
"asset.claimed_videos":"LATENCY_ACTION_CREATOR_CMS_ASSET_CLAIMED_VIDEOS","asset.composition":"LATENCY_ACTION_CREATOR_CMS_ASSET_COMPOSITION","asset.composition_ownership":"LATENCY_ACTION_CREATOR_CMS_ASSET_COMPOSITION_OWNERSHIP","asset.composition_policy":"LATENCY_ACTION_CREATOR_CMS_ASSET_COMPOSITION_POLICY","asset.embeds":"LATENCY_ACTION_CREATOR_CMS_ASSET_EMBEDS","asset.history":"LATENCY_ACTION_CREATOR_CMS_ASSET_HISTORY","asset.issues":"LATENCY_ACTION_CREATOR_CMS_ASSET_ISSUES","asset.licenses":"LATENCY_ACTION_CREATOR_CMS_ASSET_LICENSES",
"asset.metadata":"LATENCY_ACTION_CREATOR_CMS_ASSET_METADATA","asset.ownership":"LATENCY_ACTION_CREATOR_CMS_ASSET_OWNERSHIP","asset.policy":"LATENCY_ACTION_CREATOR_CMS_ASSET_POLICY","asset.references":"LATENCY_ACTION_CREATOR_CMS_ASSET_REFERENCES","asset.shares":"LATENCY_ACTION_CREATOR_CMS_ASSET_SHARES","asset.sound_recordings":"LATENCY_ACTION_CREATOR_CMS_ASSET_SOUND_RECORDINGS","asset_group.assets":"LATENCY_ACTION_CREATOR_CMS_ASSET_GROUP_ASSETS","asset_group.campaigns":"LATENCY_ACTION_CREATOR_CMS_ASSET_GROUP_CAMPAIGNS",
"asset_group.claimed_videos":"LATENCY_ACTION_CREATOR_CMS_ASSET_GROUP_CLAIMED_VIDEOS","asset_group.metadata":"LATENCY_ACTION_CREATOR_CMS_ASSET_GROUP_METADATA","song.analytics":"LATENCY_ACTION_CREATOR_SONG_ANALYTICS",creator_channel_dashboard:"LATENCY_ACTION_CREATOR_CHANNEL_DASHBOARD","channel.analytics":"LATENCY_ACTION_CREATOR_CHANNEL_ANALYTICS","channel.comments":"LATENCY_ACTION_CREATOR_CHANNEL_COMMENTS","channel.content":"LATENCY_ACTION_CREATOR_POST_LIST","channel.content.promotions":"LATENCY_ACTION_CREATOR_PROMOTION_LIST",
"channel.copyright":"LATENCY_ACTION_CREATOR_CHANNEL_COPYRIGHT","channel.editing":"LATENCY_ACTION_CREATOR_CHANNEL_EDITING","channel.monetization":"LATENCY_ACTION_CREATOR_CHANNEL_MONETIZATION","channel.music":"LATENCY_ACTION_CREATOR_CHANNEL_MUSIC","channel.music_storefront":"LATENCY_ACTION_CREATOR_CHANNEL_MUSIC_STOREFRONT","channel.playlists":"LATENCY_ACTION_CREATOR_CHANNEL_PLAYLISTS","channel.translations":"LATENCY_ACTION_CREATOR_CHANNEL_TRANSLATIONS","channel.videos":"LATENCY_ACTION_CREATOR_CHANNEL_VIDEOS",
"channel.live_streaming":"LATENCY_ACTION_CREATOR_LIVE_STREAMING","dialog.copyright_strikes":"LATENCY_ACTION_CREATOR_DIALOG_COPYRIGHT_STRIKES","dialog.video_copyright":"LATENCY_ACTION_CREATOR_DIALOG_VIDEO_COPYRIGHT","dialog.uploads":"LATENCY_ACTION_CREATOR_DIALOG_UPLOADS",owner:"LATENCY_ACTION_CREATOR_CMS_DASHBOARD","owner.allowlist":"LATENCY_ACTION_CREATOR_CMS_ALLOWLIST","owner.analytics":"LATENCY_ACTION_CREATOR_CMS_ANALYTICS","owner.art_tracks":"LATENCY_ACTION_CREATOR_CMS_ART_TRACKS","owner.assets":"LATENCY_ACTION_CREATOR_CMS_ASSETS",
"owner.asset_groups":"LATENCY_ACTION_CREATOR_CMS_ASSET_GROUPS","owner.bulk":"LATENCY_ACTION_CREATOR_CMS_BULK_HISTORY","owner.campaigns":"LATENCY_ACTION_CREATOR_CMS_CAMPAIGNS","owner.channel_invites":"LATENCY_ACTION_CREATOR_CMS_CHANNEL_INVITES","owner.channels":"LATENCY_ACTION_CREATOR_CMS_CHANNELS","owner.claimed_videos":"LATENCY_ACTION_CREATOR_CMS_CLAIMED_VIDEOS","owner.claims":"LATENCY_ACTION_CREATOR_CMS_MANUAL_CLAIMING","owner.claims.manual":"LATENCY_ACTION_CREATOR_CMS_MANUAL_CLAIMING","owner.delivery":"LATENCY_ACTION_CREATOR_CMS_CONTENT_DELIVERY",
"owner.delivery_templates":"LATENCY_ACTION_CREATOR_CMS_DELIVERY_TEMPLATES","owner.issues":"LATENCY_ACTION_CREATOR_CMS_ISSUES","owner.licenses":"LATENCY_ACTION_CREATOR_CMS_LICENSES","owner.pitch_music":"LATENCY_ACTION_CREATOR_CMS_PITCH_MUSIC","owner.policies":"LATENCY_ACTION_CREATOR_CMS_POLICIES","owner.releases":"LATENCY_ACTION_CREATOR_CMS_RELEASES","owner.reports":"LATENCY_ACTION_CREATOR_CMS_REPORTS","owner.videos":"LATENCY_ACTION_CREATOR_CMS_VIDEOS","playlist.videos":"LATENCY_ACTION_CREATOR_PLAYLIST_VIDEO_LIST",
"post.comments":"LATENCY_ACTION_CREATOR_POST_COMMENTS","post.edit":"LATENCY_ACTION_CREATOR_POST_EDIT","promotion.edit":"LATENCY_ACTION_CREATOR_PROMOTION_EDIT","video.analytics":"LATENCY_ACTION_CREATOR_VIDEO_ANALYTICS","video.claims":"LATENCY_ACTION_CREATOR_VIDEO_CLAIMS","video.comments":"LATENCY_ACTION_CREATOR_VIDEO_COMMENTS","video.copyright":"LATENCY_ACTION_CREATOR_VIDEO_COPYRIGHT","video.edit":"LATENCY_ACTION_CREATOR_VIDEO_EDIT","video.editor":"LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR","video.editor_async":"LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR_ASYNC",
"video.live_settings":"LATENCY_ACTION_CREATOR_VIDEO_LIVE_SETTINGS","video.live_streaming":"LATENCY_ACTION_CREATOR_VIDEO_LIVE_STREAMING","video.monetization":"LATENCY_ACTION_CREATOR_VIDEO_MONETIZATION","video.policy":"LATENCY_ACTION_CREATOR_VIDEO_POLICY","video.rights_management":"LATENCY_ACTION_CREATOR_VIDEO_RIGHTS_MANAGEMENT","video.translations":"LATENCY_ACTION_CREATOR_VIDEO_TRANSLATIONS"});w("ytLoggingLatencyUsageStats_",t.ytLoggingLatencyUsageStats_||{});const Al=window;class Bl{constructor(){this.timing={};this.clearResourceTimings=()=>{};
this.webkitClearResourceTimings=()=>{};
this.mozClearResourceTimings=()=>{};
this.msClearResourceTimings=()=>{};
this.oClearResourceTimings=()=>{}}}
var Cl=Al.performance||Al.mozPerformance||Al.msPerformance||Al.webkitPerformance||new Bl;ka(Cl.clearResourceTimings||Cl.webkitClearResourceTimings||Cl.mozClearResourceTimings||Cl.msClearResourceTimings||Cl.oClearResourceTimings||Zd,Cl);const Dl=["type.googleapis.com/youtube.api.pfiinnertube.YoutubeApiInnertube.BrowseResponse","type.googleapis.com/youtube.api.pfiinnertube.YoutubeApiInnertube.PlayerResponse"];function El(a){var b={vb:{}},c=vg();if(Qi.h!==void 0){const d=Qi.h;a=[b!==d.m,a!==d.l,c!==d.j,!1,!1,!1,void 0!==d.i];if(a.some(e=>e))throw new xf("InnerTubeTransportService is already initialized",a);
}else Qi.h=new Qi(b,a,c)}
function Fl(a,b){return r(function*(){var c;const d=a==null?void 0:(c=a.ea)==null?void 0:c.sessionIndex;c=yield Ee(xg(0,{sessionIndex:d}));return Promise.resolve(Object.assign({},cl(b),c))})}
function Gl(a,b,c,d=()=>{}){return r(function*(){var e;
if(b==null?0:(e=b.H)==null?0:e.context){e=b.H.context;for(var f of[])yield f.Fb(e)}var g;if((g=a.i)==null?0:g.Nb(b.input,b.H))return yield a.i.Bb(b.input,b.H);var h;if((g=(h=b.config)==null?void 0:h.Ib)&&a.h.has(g))var k=a.h.get(g);else{h=JSON.stringify(b.H);let q;f=(q=(k=b.O)==null?void 0:k.headers)!=null?q:{};b.O=Object.assign({},b.O,{headers:Object.assign({},f,c)});k=Object.assign({},b.O);b.O.method==="POST"&&(k=Object.assign({},k,{body:h}));k=a.l.fetch(b.input,k,b.config);g&&a.h.set(g,k)}k=yield k;
var l;let n;if(k&&"error"in k&&((l=k)==null?0:(n=l.error)==null?0:n.details)){l=k.error.details;for(const q of l)(l=q["@type"])&&Dl.indexOf(l)>-1&&(delete q["@type"],k=q)}g&&a.h.has(g)&&a.h.delete(g);let p;!k&&((p=a.i)==null?0:p.ub(b.input,b.H))&&(k=yield a.i.Ab(b.input,b.H));d();return k||void 0})}
function Hl(a,b,c){var d={ea:{identity:yg}};let e=()=>{};
b.context||(b.context=al());return new L(f=>r(function*(){var g=bl(c);g=Xf(g)?"same-origin":"cors";if(a.j.La){var h,k=d==null?void 0:(h=d.ea)==null?void 0:h.sessionIndex;h=xg(0,{sessionIndex:k});g=Object.assign({},cl(g),h)}else g=yield Fl(d,g);h=bl(c);k={};S("web_api_key_killswitch")&&(Q("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT")&&(g==null?0:g.Authorization)||(k.key=Q("INNERTUBE_API_KEY")));S("json_condensed_response")&&(k.prettyPrint="false");h=Wf(h,k||{},!1);k={method:"POST",mode:Xf(h)?
"same-origin":"cors",credentials:Xf(h)?"same-origin":"include"};var l={};const n={};for(const p of Object.keys(l))l[p]&&(n[p]=l[p]);Object.keys(n).length>0&&(k.headers=n);f(Gl(a,{input:h,O:k,H:b,config:d},g,e))}))}
var Qi=class{constructor(a,b,c){this.m=a;this.l=b;this.j=c;this.i=void 0;this.h=new Map;a.da||(a.da={});a.da=Object.assign({},gl,a.da)}};var Pi=new Mi;let Il;function Jl(){if(!Il){const a=Vi();El({fetch:(b,c)=>Ee(fetch(new Request(b,c)))});
Oi(a);Il=a.resolve(Pi)}return Il}
;function Kl(a){return r(function*(){yield Ll();wk(a)})}
function Ml(a){return r(function*(){yield Ll();vk(a)})}
function Nl(a){r(function*(){var b=yield Nh();b?yield Hi(a,b):(yield Bk(),b={timestamp:a.timestamp},b=a.appShellAssetLoadReport?{N:"appShellAssetLoadReport",payload:a.appShellAssetLoadReport,options:b}:a.clientError?{N:"clientError",payload:a.clientError,options:b}:void 0,b&&Z(b.N,b.payload))})}
function Ll(){return r(function*(){try{yield Bk()}catch(a){}})}
;var Ol=Symbol("trackingData"),Pl=new WeakMap;function Ql(){Rl.h||(Rl.h=new Rl);return Rl.h}
function Sl(a,b,c){const d=Wk(c);return a.csn===null||d===a.csn||c?d:(a=new xf("VisibilityLogger called before newScreen",{caller:b.tagName,previous_csn:a.csn,current_csn:d}),wk(a),null)}
function Tl(a){let b;return!((b=Ul(a))==null||!b.loggingDirectives)}
function Vl(a){a=Ul(a);return Math.floor(Number(a&&a.loggingDirectives&&a.loggingDirectives.visibility&&a.loggingDirectives.visibility.types||""))||1}
function Ul(a){let b,c=a.data||((b=a.props)==null?void 0:b.data);if(!c&&a.isWebComponentWrapper&&S("read_data_from_web_component_wrapper")){let d;c=(d=Pl.get(a))==null?void 0:d[Ol]}return c}
var Rl=class{constructor(){this.m=new Set;this.l=new Set;this.h=new Map;this.client=void 0;this.csn=null}j(a){this.client=a}s(){this.clear();this.csn=Wk()}clear(){this.m.clear();this.l.clear();this.h.clear();this.csn=null}A(a,b,c){var d=this.i(a),e=a.visualElement?a.visualElement:d;b=this.m.has(e);var f=this.h.get(e);this.m.add(e);this.h.set(e,!0);a.impressionLog&&!b&&a.impressionLog();if(d||a.visualElement)if(c=Sl(this,a,c)){var g=Tl(a);if(Vl(a)||g)e=a.visualElement?a.visualElement:Mk(d),d=a.interactionLoggingClientData,
g||b?Vl(a)&4?f||(a=this.client,xl(e,c),b=pl({cttAuthInfo:Zk(c)||void 0},c),f={csn:c,ve:e.getAsJson(),eventType:4},d&&(f.clientData=d),c==="UNDEFINED_CSN"?ul("visualElementShown",b,f):a?lk("visualElementShown",f,a,b):Z("visualElementShown",f,b)):Vl(a)&1&&!b&&wl(this.client,c,e,d):wl(this.client,c,e,d)}}v(a,b,c){var d=this.i(a);const e=a.visualElement?a.visualElement:d;b=this.l.has(e);const f=this.h.get(e);this.l.add(e);this.h.set(e,!1);if(f===!1)return!0;if(!d&&!a.visualElement)return!1;c=Sl(this,
a,c);if(!c||!Vl(a)&&Tl(a))return!1;d=a.visualElement?a.visualElement:Mk(d);Vl(a)&8?yl(this.client,c,d):Vl(a)&2&&!b&&(a=this.client,b=pl({cttAuthInfo:Zk(c)||void 0},c),d={csn:c,ve:d.getAsJson(),eventType:2},c==="UNDEFINED_CSN"?ul("visualElementHidden",b,d):a?lk("visualElementHidden",d,a,b):Z("visualElementHidden",d,b));return!0}i(a){const b=Ul(a);let c,d;if(S("il_use_view_model_logging_context")&&(b==null?0:(c=b.context)==null?0:(d=c.loggingContext)==null?0:d.loggingDirectives))return b.context.loggingContext.loggingDirectives.trackingParams||
"";let e,f;if(b==null?0:(e=b.rendererContext)==null?0:(f=e.loggingContext)==null?0:f.loggingDirectives)return b.rendererContext.loggingContext.loggingDirectives.trackingParams||"";if(b==null?0:b.loggingDirectives)return b.loggingDirectives.trackingParams||"";let g;return((g=a.veContainer)==null?0:g.trackingParams)?a.veContainer.trackingParams:(b==null?void 0:b.trackingParams)||""}};function Wl(){Xl.h||(Xl.h=new Xl)}
function Yl(a){Wl();R(Ql().A).bind(Ql())(a,void 0,8)}
function Zl(a){Wl();R(Ql().v).bind(Ql())(a,void 0,8)}
var Xl=class{j(a){R(Ql().j).bind(Ql())(a)}clear(){R(Ql().clear).bind(Ql())()}};function $l(){am.h||(am.h=new am);return am.h}
function bm(a,b,c={}){a.i.add(c.layer||0);a.m=()=>{cm(a,b,c);const d=Tk(c.layer);if(d){for(const e of a.A)dm(a,e[0],e[1]||d,c.layer);for(const e of a.D)em(a,e[0],e[1])}};
Wk(c.layer)||a.m();if(c.ga)for(const d of c.ga)fm(a,d,c.layer);else vk(Error("Delayed screen needs a data promise."))}
function cm(a,b,c={}){var d=void 0;c.layer||(c.layer=0);d=c.Ha!==void 0?c.Ha:c.layer;const e=Wk(d);d=Tk(d);let f;d&&(c.parentCsn!==void 0?f={clientScreenNonce:c.parentCsn,visualElement:d}:e&&e!=="UNDEFINED_CSN"&&(f={clientScreenNonce:e,visualElement:d}));let g;const h=Q("EVENT_ID");e==="UNDEFINED_CSN"&&h&&(g={servletData:{serializedServletEventId:h}});S("combine_ve_grafts")&&e&&gm(a,e);S("no_client_ve_attach_unless_shown")&&d&&e&&tl(d,e);let k;try{k=ol(a.client,b,f,c.fa,c.cttAuthInfo,g,c.xb,c.loggingExpectations)}catch(p){zk(p,
{Kb:b,rootVe:d,Eb:void 0,wb:e,Db:f,fa:c.fa});vk(p);return}$k(k,b,c.layer,c.cttAuthInfo);e&&e!=="UNDEFINED_CSN"&&d&&!Xk(e)&&yl(a.client,e,d,!0);a.h[a.h.length-1]&&!a.h[a.h.length-1].csn&&(a.h[a.h.length-1].csn=k||"");Wl();R(Ql().s).bind(Ql())();const l=Tk(c.layer);e&&e!=="UNDEFINED_CSN"&&l&&(S("web_mark_root_visible")||S("music_web_mark_root_visible"))&&R(vl)(void 0,k,l,void 0,void 0,void 0);a.i.delete(c.layer||0);a.m=void 0;let n;(n=a.X.get(c.layer))==null||n.forEach((p,q)=>{p?dm(a,q,p,c.layer):l&&
dm(a,q,l,c.layer)});
hm(a)}
function im(a){var b=28631,c={layer:8};R(()=>{[28631].includes(b)||(wk(new xf("createClientScreen() called with a non-page VE",b)),b=83769);c.isHistoryNavigation||a.h.push({rootVe:b,key:c.key||""});a.A=[];a.D=[];c.ga?bm(a,b,c):cm(a,b,c)})()}
function fm(a,b,c=0){R(()=>{b.then(d=>{a.i.has(c)&&a.m&&a.m();const e=Wk(c),f=Tk(c);if(e&&f){var g;(d==null?0:(g=d.response)==null?0:g.trackingParams)&&ql(a.client,e,f,Mk(d.response.trackingParams));var h;(d==null?0:(h=d.playerResponse)==null?0:h.trackingParams)&&ql(a.client,e,f,Mk(d.playerResponse.trackingParams))}})})()}
function dm(a,b,c,d=0){R(()=>{if(a.i.has(d))return a.A.push([b,c]),!0;const e=Wk(d),f=c||Tk(d);if(e&&f){if(S("combine_ve_grafts")){const g=a.l.get(f.toString());g?g.push(b):(a.v.set(f.toString(),f),a.l.set(f.toString(),[b]));a.K||(a.K=Bg(()=>{gm(a,e)},1200))}else ql(a.client,e,f,b);
return!0}return!1})()}
function jm(a,b){return R(()=>{const c=Mk(b);dm(a,c,void 0,8);return c})()}
function gm(a,b){if(b===void 0){const c=Vk();for(let d=0;d<c.length;d++)c[d]!==void 0&&gm(a,c[d])}else a.l.forEach((c,d)=>{(d=a.v.get(d))&&rl(a.client,b,d,c)}),a.l.clear(),a.v.clear(),a.K=void 0}
function km(a,b,c=0){(c=Wk(c))&&zl(a.client,c,b)}
function lm(a,b,c,d=0){if(!b)return!1;d=Wk(d);if(!d)return!1;zl(a.client,d,Mk(b),c);return!0}
function mm(a,b){const c=b.getScreenLayer&&b.getScreenLayer();b.visualElement?km(a,b.visualElement,c):(Wl(),b=R(Ql().i).bind(Ql())(b),lm(a,b,void 0,c))}
function em(a,b,c,d=0){const e=Wk(d);b=b||Tk(d);e&&b&&(a=a.client,d=pl({cttAuthInfo:Zk(e)||void 0},e),c={csn:e,ve:b.getAsJson(),clientData:c},e==="UNDEFINED_CSN"?ul("visualElementStateChanged",d,c):a?lk("visualElementStateChanged",c,a,d):Z("visualElementStateChanged",c,d))}
function hm(a){for(var b=0;b<a.s.length;b++){var c=a.s[b];try{c()}catch(d){vk(d)}}a.s.length=0;for(b=0;b<a.I.length;b++){c=a.I[b];try{c()}catch(d){vk(d)}}}
var am=class{constructor(){this.A=[];this.D=[];this.h=[];this.s=[];this.I=[];this.l=new Map;this.v=new Map;this.i=new Set;this.X=new Map}j(a){this.client=a}clickCommand(a,b,c=0){return lm(this,a.clickTrackingParams,b,c)}stateChanged(a,b,c=0){this.visualElementStateChanged(Mk(a),b,c)}visualElementStateChanged(a,b,c=0){c===0&&this.i.has(c)?this.D.push([a,b]):em(this,a,b,c)}};const nm={granted:"GRANTED",denied:"DENIED",unknown:"UNKNOWN"},om=RegExp("^(?:[a-z]+:)?//","i");function pm(a){var b=a.data;a=b.type;b=b.data;a==="notifications_register"?(O("IDToken",b),qm()):a==="notifications_check_registration"&&rm(b)}
function sm(){return self.clients.matchAll({type:"window",includeUncontrolled:!0}).then(a=>{if(a)for(const b of a)b.postMessage({type:"update_unseen_notifications_count_signal"})})}
function tm(a){const b=[];a.forEach(c=>{b.push({key:c.key,value:c.value})});
return b}
function um(a){return r(function*(){const b=tm(a.payload.chrome.extraUrlParams),c={recipientId:a.recipientId,endpoint:a.payload.chrome.endpoint,extraUrlParams:b},d=Ff(sf);return vm().then(e=>Hl(e,c,d).then(f=>{f.json().then(g=>g&&g.endpointUrl?wm(a,g.endpointUrl):Promise.resolve()).catch(g=>{Ml(g);
Promise.reject(g)})}))})}
function xm(a,b){var c=Wk(8);if(c==null||!b)return a;a=om.test(a)?new URL(a):new URL(a,self.registration.scope);a.searchParams.set("parentCsn",c);a.searchParams.set("parentTrackingParams",b);return a.toString()}
function wm(a,b){a.deviceId&&O("DeviceId",a.deviceId);a.timestampSec&&O("TimestampLowerBound",a.timestampSec);const c=a.payload.chrome,d=$l();im(d);var e;const f=(e=c.postedEndpoint)==null?void 0:e.clickTrackingParams;e=c.title;const g={body:c.body,icon:c.iconUrl,data:{nav:xm(b,f),id:c.notificationId,attributionTag:c.attributionTag,clickEndpoint:c.clickEndpoint,postedEndpoint:c.postedEndpoint,clickTrackingParams:f,isDismissed:!0},tag:c.notificationTag||c.title+c.body+c.iconUrl,requireInteraction:!0};
return self.registration.showNotification(e,g).then(()=>{var h;((h=g.data)==null?0:h.postedEndpoint)&&ym(g.data.postedEndpoint);let k;if((k=g.data)==null?0:k.clickTrackingParams)h={screenLayer:8,visualElement:jm(d,g.data.clickTrackingParams)},Yl(h);zm(a.displayCap)}).catch(()=>{})}
function ym(a){if(!vj(a,rf))return Promise.reject();const b={serializedRecordNotificationInteractionsRequest:vj(a,rf).serializedInteractionsRequest},c=Ff(tf);return vm().then(d=>Hl(d,b,c)).then(d=>d)}
function zm(a){a!==-1&&self.registration.getNotifications().then(b=>{for(let d=0;d<b.length-a;d++){b[d].data.isDismissed=!1;b[d].close();let e;if((e=b[d].data)==null?0:e.clickTrackingParams){let f;var c=Mk((f=b[d].data)==null?void 0:f.clickTrackingParams);const g={screenLayer:8,visualElement:c},h=Ok(82046),k=$l();dm(k,h,c,8);c={screenLayer:8,visualElement:h};Yl(c);mm(k,c);Zl(g)}}})}
function rm(a){const b=[Am(a),Bf("RegistrationTimestamp").then(Bm),Cm(),Dm(),Em()];Promise.all(b).catch(()=>{O("IDToken",a);qm();return Promise.resolve()})}
function Bm(a){return Date.now()-(a||0)<=9E7?Promise.resolve():Promise.reject()}
function Am(a){return Bf("IDToken").then(b=>a===b?Promise.resolve():Promise.reject())}
function Cm(){return Bf("Permission").then(a=>Notification.permission===a?Promise.resolve():Promise.reject())}
function Dm(){return Bf("Endpoint").then(a=>Fm().then(b=>a===b?Promise.resolve():Promise.reject()))}
function Em(){return Bf("application_server_key").then(a=>Gm().then(b=>a===b?Promise.resolve():Promise.reject()))}
function Hm(){var a=Notification.permission;if(nm[a])return nm[a]}
function qm(){O("RegistrationTimestamp",0);Promise.all([Fm(),Im(),Jm(),Gm()]).then(([a,b,c,d])=>{b=b?vf(b):null;c=c?vf(c):null;d=d?ab(new Uint8Array(d),4):null;Km(a,b,c,d)}).catch(()=>{Km()})}
function Km(a=null,b=null,c=null,d=null){Af().then(e=>{e&&(O("Endpoint",a),O("P256dhKey",b),O("AuthKey",c),O("application_server_key",d),O("Permission",Notification.permission),Promise.all([Bf("DeviceId"),Bf("NotificationsDisabled")]).then(([f,g])=>{if(f!=null)var h=f;else{f=[];var k;h=h||Xe.length;for(k=0;k<256;k++)f[k]=Xe[0|Math.random()*h];h=f.join("")}Lm(h,a!=null?a:void 0,b!=null?b:void 0,c!=null?c:void 0,d!=null?d:void 0,g!=null?g:void 0)}))})}
function Lm(a,b,c,d,e,f){r(function*(){const g={notificationRegistration:{chromeRegistration:{deviceId:a,pushParams:{applicationServerKey:e,authKey:d,p256dhKey:c,browserEndpoint:b},notificationsDisabledInApp:f,permission:Hm()}}},h=Ff(uf);return vm().then(k=>Hl(k,g,h).then(()=>{O("DeviceId",a);O("RegistrationTimestamp",Date.now());O("TimestampLowerBound",Date.now())},l=>{Kl(l)}))})}
function Fm(){return self.registration.pushManager.getSubscription().then(a=>a?Promise.resolve(a.endpoint):Promise.resolve(null))}
function Im(){return self.registration.pushManager.getSubscription().then(a=>a&&a.getKey?Promise.resolve(a.getKey("p256dh")):Promise.resolve(null))}
function Jm(){return self.registration.pushManager.getSubscription().then(a=>a&&a.getKey?Promise.resolve(a.getKey("auth")):Promise.resolve(null))}
function Gm(){return self.registration.pushManager.getSubscription().then(a=>a?Promise.resolve(a.options.applicationServerKey):Promise.resolve(null))}
function vm(){return r(function*(){try{return yield Bk(!0),Jl()}catch(a){return yield Kl(a),Promise.reject(a)}})}
;let Mm=self.location.origin+"/";function Dk(a){let b=typeof ServiceWorkerGlobalScope!=="undefined"&&self instanceof ServiceWorkerGlobalScope?Qe.registration.scope:Mm;b.endsWith("/")&&(b=b.slice(0,-1));return b+a}
;let Nm=void 0;function Om(a){return r(function*(){Nm||(Nm=yield a.open("yt-appshell-assets"));return Nm})}
function Pm(a,b){return r(function*(){const c=yield Om(a),d=b.map(e=>Qm(c,e));
return Promise.all(d)})}
function Rm(a,b){return r(function*(){let c;try{c=yield a.match(b,{cacheName:"yt-appshell-assets"})}catch(d){}return c})}
function Sm(a,b){return r(function*(){const c=yield Om(a),d=(yield c.keys()).filter(e=>!b.includes(e.url)).map(e=>c.delete(e));
return Promise.all(d)})}
function Tm(a,b,c){return r(function*(){yield(yield Om(a)).put(b,c)})}
function Um(a,b){r(function*(){yield(yield Om(a)).delete(b)})}
function Qm(a,b){return r(function*(){return(yield a.match(b))?Promise.resolve():a.add(b)})}
;var Vm=Wh("yt-serviceworker-metadata",{M:{auth:{L:1},["resource-manifest-assets"]:{L:2}},shared:!0,upgrade(a,b){b(1)&&kh(a,"resource-manifest-assets");b(2)&&kh(a,"auth")},version:2});let Wm=null;function Xm(a){return Dh(Vm(),a)}
function Ym(){return r(function*(){const a=yield Nh();if(a)return Zm.h||(Zm.h=new Zm(a)),Zm.h})}
function $m(a,b){return r(function*(){yield X(yield Xm(a.token),["resource-manifest-assets"],"readwrite",c=>{const d=c.objectStore("resource-manifest-assets"),e=Date.now();return V(d.h.put(b,e)).then(()=>{Wm=e;let f=!0;return ph(d,{query:IDBKeyRange.bound(0,Date.now()),direction:"prev"},g=>f?(f=!1,yh(g)):d.delete(g.getKey()).then(()=>sh(g)))})})})}
function an(a,b){return r(function*(){let c=!1,d=0;yield X(yield Xm(a.token),["resource-manifest-assets"],"readonly",e=>ph(e.objectStore("resource-manifest-assets"),{query:IDBKeyRange.bound(0,Date.now()),direction:"prev"},f=>{if(f.cursor.value.includes(b))c=!0;else return d+=1,sh(f)}));
return c?d:-1})}
function bn(a){return r(function*(){Wm||(yield X(yield Xm(a.token),["resource-manifest-assets"],"readonly",b=>ph(b.objectStore("resource-manifest-assets"),{query:IDBKeyRange.bound(0,Date.now()),direction:"prev"},c=>{Wm=c.getKey()})));
return Wm})}
var Zm=class{constructor(a){this.token=a}};function cn(){return r(function*(){const a=yield Nh();if(a)return dn.h||(dn.h=new dn(a)),dn.h})}
function en(a,b){return r(function*(){yield mh(yield Xm(a.token),"auth",b,"shell_identifier_key")})}
function fn(a){return r(function*(){return(yield(yield Xm(a.token)).get("auth","shell_identifier_key"))||""})}
function gn(a){return r(function*(){yield(yield Xm(a.token)).clear("auth")})}
var dn=class{constructor(a){this.token=a}};function hn(){r(function*(){const a=yield cn();a&&(yield gn(a))})}
;var jn=class extends K{constructor(a){super(a)}hasUrl(){return ld(this,1)!=null}};function kn(a){var b;void 0===Qb?b=2:b=5;const c=A(a.o);return hd(a,c,jn,1,b,!1,!(2&c))}
var ln=function(a,b){return(c,d)=>{if(Gd.length){const f=Gd.pop();Bd(f,d);f.h.init(c,void 0,void 0,d);c=f}else c=new Fd(c,d);try{const f=new a,g=f.o;Vd(b)(g,c);var e=f}finally{c.h.clear(),c.l=-1,c.i=-1,Gd.length<100&&Gd.push(c)}return e}}(class extends K{constructor(a){super(a)}},[0,
Yd,[0,Xd]]);function mn(a){return r(function*(){const b=a.headers.get("X-Resource-Manifest");return b?Promise.resolve(nn(b)):Promise.reject(Error("No resource manifest header"))})}
function nn(a){return kn(ln(decodeURIComponent(a))).reduce((b,c)=>{(c=md(c,1))&&b.push(c);return b},[])}
;function on(a){return r(function*(){const b=yield Bk();if(b&&ld(b,3)!=null){var c=yield cn();c&&(c=yield fn(c),ld(b,3)!==c&&(Um(a.caches,a.h),hn()))}})}
function pn(a){return r(function*(){let b,c;try{c=yield qn(a.i),b=yield mn(c),yield Pm(a.caches,b)}catch(d){return Promise.reject(d)}try{yield rn(),yield Tm(a.caches,a.h,c)}catch(d){return Promise.reject(d)}if(b)try{yield sn(a,b,a.h)}catch(d){}return Promise.resolve()})}
function tn(a){return r(function*(){yield on(a);return pn(a)})}
function qn(a){return r(function*(){try{return yield t.fetch(new Request(a))}catch(b){return Promise.reject(b)}})}
function rn(){return r(function*(){var a=yield Bk();let b;a&&ld(a,3)!=null&&(b=md(a,3));return b?(a=yield cn())?Promise.resolve(en(a,b)):Promise.reject(Error("Could not get AuthMonitor instance")):Promise.reject(Error("Could not get datasync ID"))})}
function sn(a,b,c){return r(function*(){const d=yield Ym();if(d)try{yield $m(d,b)}catch(e){yield Kl(e)}b.push(c);try{yield Sm(a.caches,b)}catch(e){yield Kl(e)}return Promise.resolve()})}
function un(a,b){return r(function*(){return Rm(a.caches,b)})}
function vn(a){return r(function*(){return Rm(a.caches,a.h)})}
var wn=class{constructor(){var a=self.caches;let b=Dk("/app_shell");S("service_worker_forward_exp_params")&&(b+=self.location.search);var c=Dk("/app_shell_home");this.caches=a;this.i=b;this.h=c}};var xn=class{constructor(){const a=this;this.stream=new ReadableStream({start(b){a.close=()=>void b.close();
a.h=c=>{const d=c.getReader();return d.read().then(function h({done:f,value:g}){if(f)return Promise.resolve();b.enqueue(g);return d.read().then(h)})};
a.i=()=>{const c=(new TextEncoder).encode("<script>if (window.fetchInitialData) { window.fetchInitialData(); } else { window.getInitialData = undefined; }\x3c/script>");b.enqueue(c)}}})}};function yn(a,b){return r(function*(){const c=b.request,d=yield un(a.h,c.url);if(d)return a.i&&Nl({appShellAssetLoadReport:{assetPath:c.url,cacheHit:!0},timestamp:W()}),d;zn(a,c);return An(b)})}
function Bn(a,b){return r(function*(){const c=yield Cn(b);if(c.response&&(c.response.ok||c.response.type==="opaqueredirect"||c.response.status===429||c.response.status===303||c.response.status>=300&&c.response.status<400))return c.response;const d=yield vn(a.h);if(d)return Dn(a),En(d,b);Fn(a);return c.response?c.response:Promise.reject(c.error)})}
function Gn(a,b){b=new URL(b);if(!a.config.ra.includes(b.pathname))return!1;if(!b.search)return!0;b=new URLSearchParams(b.search);for(const c of a.config.ta)if(a=b.get(c.key),c.value===void 0||a===c.value)if(b.delete(c.key),!b.toString())return!0;return!1}
function Hn(a,b){return r(function*(){const c=yield vn(a.h);if(!c)return Fn(a),An(b);Dn(a);var d;a:{if(c.headers&&(d=c.headers.get("date"))&&(d=Date.parse(d),!isNaN(d))){d=Math.round(W()-d);break a}d=-1}if(!(d>-1&&d/864E5>=7))return En(c,b);d=yield Cn(b);return d.response&&d.response.ok?d.response:En(c,b)})}
function An(a){return Promise.resolve(a.preloadResponse).then(b=>b&&!In(b)?b:t.fetch(a.request))}
function zn(a,b){if(a.i){var c={assetPath:b.url,cacheHit:!1};Ym().then(d=>{if(d){var e=bn(d).then(f=>{f&&(c.currentAppBundleTimestampSec=String(Math.floor(f/1E3)))});
d=an(d,b.url).then(f=>{c.appBundleVersionDiffCount=f});
Promise.all([e,d]).catch(f=>{Kl(f)}).finally(()=>{Nl({appShellAssetLoadReport:c,
timestamp:W()})})}else Nl({appShellAssetLoadReport:c,
timestamp:W()})})}}
function Dn(a){a.i&&Nl({appShellAssetLoadReport:{assetPath:a.h.h,cacheHit:!0},timestamp:W()})}
function Fn(a){a.i&&Nl({appShellAssetLoadReport:{assetPath:a.h.h,cacheHit:!1},timestamp:W()})}
function En(a,b){if(!S("sw_nav_preload_pbj"))return a;const c=new xn,d=c.h(a.body);Promise.resolve(b.preloadResponse).then(e=>{if(!e||!In(e))throw Error("no pbj preload response available");d.then(()=>c.h(e.body)).then(()=>void c.close())}).catch(()=>{d.then(()=>{c.i();
c.close()})});
return new Response(c.stream,{status:a.status,statusText:a.statusText,headers:a.headers})}
function Cn(a){return r(function*(){try{return{response:yield An(a)}}catch(b){return{error:b}}})}
function In(a){return a.headers.get("x-navigation-preload-response-type")==="pbj"}
var Rn=class{constructor(){var a=Jn;var b={xa:Kn,Ia:Ln([Mn,/\/signin/,/\/logout/]),ra:["/","/feed/downloads"],ta:Nn([{key:"feature",value:"ytca"}]),sa:On(S("kevlar_sw_app_wide_fallback")?Pn:Qn)};this.h=a;this.config=b;a=T("app_shell_asset_log_fraction");this.i=!0;a&&(this.i=Math.random()<a)}};const Sn=/^\/$/,Qn=[Sn,/^\/feed\/downloads$/],Pn=[Sn,/^\/feed\/\w*/,/^\/results$/,/^\/playlist$/,/^\/watch$/,/^\/channel\/\w*/];function On(a){return new RegExp(a.map(b=>b.source).join("|"))}
const Tn=/^https:\/\/([\w-]*\.)*youtube\.com.*/;function Ln(a){a=On(a);return new RegExp(`${Tn.source}(${a.source})`)}
const Un=On([/\.css$/,/\.js$/,/\.ico$/,/\/ytmweb\/_\/js\//,/\/ytmweb\/_\/ss\//,/\/kabuki\/_\/js\//,/\/kabuki\/_\/ss\//,/\/ytmainappweb\/_\/ss\//]),Kn=new RegExp(`${Tn.source}(${Un.source})`),Mn=/purge_shell=1/;function Nn(a=[]){const b=[];for(const c of $f)b.push({key:c});for(const c of a)b.push(c);return b}
Ln([Mn]);Nn();var Wn=class{constructor(){var a=Jn,b=Vn,c=self;if(t.URLPattern){var d=[];S("service_worker_static_routing_exclude_embed")&&d.push({condition:{urlPattern:new URLPattern({pathname:"/embed*"})},source:"network"});S("service_worker_static_routing_exclude_innertube")&&d.push({condition:{urlPattern:new URLPattern({pathname:"/youtubei/v1/*"})},source:"network"})}else d=[];this.h=c;this.i=a;this.s=b;this.D=wf;this.j=d}init(){this.h.oninstall=this.v.bind(this);this.h.onactivate=this.l.bind(this);this.h.onfetch=
this.m.bind(this);this.h.onmessage=this.A.bind(this)}v(a){this.h.skipWaiting();if(S("service_worker_static_routing_registration")&&this.j.length>0&&a.addRoutes)try{a.addRoutes(this.j)}catch(c){}const b=tn(this.i).catch(c=>{Kl(c);return Promise.resolve()});
a.waitUntil(b)}l(a){const b=[this.h.clients.claim()],c=this.h.registration;c.navigationPreload&&(b.push(c.navigationPreload.enable()),S("sw_nav_preload_pbj")&&b.push(c.navigationPreload.setHeaderValue("pbj")));a.waitUntil(Promise.all(b))}m(a){const b=this;return r(function*(){var c=b.s,d=!!b.h.registration.navigationPreload;const e=a.request;if(c.config.Ia.test(e.url))Ck.h&&(delete Ck.h.h,t.__SAPISID=void 0,P("VISITOR_DATA",void 0),P("SESSION_INDEX",void 0),P("DELEGATED_SESSION_ID",void 0),P("USER_SESSION_ID",
void 0),P("INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT",void 0)),d=a.respondWith,c=c.h,Um(c.caches,c.h),hn(),c=An(a),d.call(a,c);else if(c.config.xa.test(e.url))a.respondWith(yn(c,a));else if(e.mode==="navigate"){const f=new URL(e.url);c.config.sa.test(f.pathname)?a.respondWith(Bn(c,a)):Gn(c,e.url)?a.respondWith(Hn(c,a)):d&&a.respondWith(An(a))}})}A(a){const b=a.data;
this.D.includes(b.type)?pm(a):b.type==="refresh_shell"&&pn(this.i).catch(c=>{Kl(c)})}};function Xn(){let a=u("ytglobal.storage_");a||(a=new Yn,w("ytglobal.storage_",a));return a}
var Yn=class{estimate(){return r(function*(){const a=navigator;let b;if((b=a.storage)==null?0:b.estimate)return a.storage.estimate();let c;if((c=a.webkitTemporaryStorage)==null?0:c.queryUsageAndQuota)return Zn()})}};
function Zn(){const a=navigator;return new Promise((b,c)=>{let d;(d=a.webkitTemporaryStorage)!=null&&d.queryUsageAndQuota?a.webkitTemporaryStorage.queryUsageAndQuota((e,f)=>{b({usage:e,quota:f})},e=>{c(e)}):c(Error("webkitTemporaryStorage is not supported."))})}
w("ytglobal.storageClass_",Yn);function $n(a,b){Xn().estimate().then(c=>{c=Object.assign({},b,{isSw:self.document===void 0,isIframe:self!==self.top,deviceStorageUsageMbytes:ao(c==null?void 0:c.usage),deviceStorageQuotaMbytes:ao(c==null?void 0:c.quota)});a.h("idbQuotaExceeded",c)})}
class bo{constructor(){var a=co;this.handleError=eo;this.h=a;this.i=!1;self.document===void 0||self.addEventListener("beforeunload",()=>{this.i=!0});
this.j=Math.random()<=.2}S(a,b){switch(a){case "IDB_DATA_CORRUPTED":S("idb_data_corrupted_killswitch")||this.h("idbDataCorrupted",b);break;case "IDB_UNEXPECTEDLY_CLOSED":this.h("idbUnexpectedlyClosed",b);break;case "IS_SUPPORTED_COMPLETED":S("idb_is_supported_completed_killswitch")||this.h("idbIsSupportedCompleted",b);break;case "QUOTA_EXCEEDED":$n(this,b);break;case "TRANSACTION_ENDED":this.j&&Math.random()<=.1&&this.h("idbTransactionEnded",b);break;case "TRANSACTION_UNEXPECTEDLY_ABORTED":a=Object.assign({},
b,{hasWindowUnloaded:this.i}),this.h("idbTransactionAborted",a)}}}function ao(a){return typeof a==="undefined"?"-1":String(Math.ceil(a/1048576))}
;og(lg(),{G:[{Ga:/Failed to fetch/,weight:500}],F:[]});({handleError:eo=uk,S:co=Z}={handleError:Ml,S:function(a,b){return r(function*(){yield Ll();Z(a,b)})}});
var co,eo;for(Jg=new bo;Ig.length>0;){const a=Ig.shift();switch(a.type){case "ERROR":Jg.handleError(a.payload);break;case "EVENT":Jg.S(a.eventType,a.payload)}}Ck.h=new Ck;self.onnotificationclick=function(a){a.notification.close();const b=a.notification.data;b.isDismissed=!1;const c=self.clients.matchAll({type:"window",includeUncontrolled:!0});c.then(d=>{a:{var e=b.nav;for(const f of d)if(f.url===e){f.focus();break a}self.clients.openWindow(e)}});
a.waitUntil(c);a.waitUntil(ym(b.clickEndpoint))};
self.onnotificationclose=function(a){var b=a.notification.data;if(b==null?0:b.clickTrackingParams){var c=Mk(b.clickTrackingParams);a={screenLayer:8,visualElement:c};if(b.isDismissed){const d=Ok(74726);b=$l();dm(b,d,c,8);c={screenLayer:8,visualElement:d};Yl(c);mm(b,c)}Zl(a)}};
self.onpush=function(a){a.waitUntil(Bf("NotificationsDisabled").then(b=>{if(b)return Promise.resolve();if(a.data&&a.data.text().length)try{return um(a.data.json())}catch(c){return Promise.resolve(c.message)}return Promise.resolve()}));
a.waitUntil(sm())};
self.onpushsubscriptionchange=function(){qm()};
const Jn=new wn,Vn=new Rn;(new Wn).init();
