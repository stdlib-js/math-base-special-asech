// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function t(t){return t!=t}function r(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}var n=r();var o=Object.prototype.toString;var e=Object.prototype.hasOwnProperty;var a="function"==typeof Symbol?Symbol:void 0,i="function"==typeof a?a.toStringTag:"";var u=n&&"symbol"==typeof Symbol.toStringTag?function(t){var r,n,a,u,c;if(null==t)return o.call(t);n=t[i],c=i,r=null!=(u=t)&&e.call(u,c);try{t[i]=void 0}catch(r){return o.call(t)}return a=o.call(t),r?t[i]=n:delete t[i],a}:function(t){return o.call(t)},c="function"==typeof Uint32Array;var f="function"==typeof Uint32Array?Uint32Array:null;var l,y="function"==typeof Uint32Array?Uint32Array:void 0;l=function(){var t,r,n;if("function"!=typeof f)return!1;try{r=new f(r=[1,3.14,-3.14,4294967296,4294967297]),n=r,t=(c&&n instanceof Uint32Array||"[object Uint32Array]"===u(n))&&1===r[0]&&3===r[1]&&4294967293===r[2]&&0===r[3]&&1===r[4]}catch(r){t=!1}return t}()?y:function(){throw new Error("not implemented")};var v=l,p=r();var A=Object.prototype.toString;var b=Object.prototype.hasOwnProperty;var m="function"==typeof a?a.toStringTag:"";var w=p&&"symbol"==typeof Symbol.toStringTag?function(t){var r,n,o,e,a;if(null==t)return A.call(t);n=t[m],a=m,r=null!=(e=t)&&b.call(e,a);try{t[m]=void 0}catch(r){return A.call(t)}return o=A.call(t),r?t[m]=n:delete t[m],o}:function(t){return A.call(t)},g="function"==typeof Float64Array;var S="function"==typeof Float64Array?Float64Array:null;var d,h="function"==typeof Float64Array?Float64Array:void 0;d=function(){var t,r,n;if("function"!=typeof S)return!1;try{r=new S([1,3.14,-3.14,NaN]),n=r,t=(g&&n instanceof Float64Array||"[object Float64Array]"===w(n))&&1===r[0]&&3.14===r[1]&&-3.14===r[2]&&r[3]!=r[3]}catch(r){t=!1}return t}()?h:function(){throw new Error("not implemented")};var U=d,s=r();var N=Object.prototype.toString;var F=Object.prototype.hasOwnProperty;var O="function"==typeof a?a.toStringTag:"";var j=s&&"symbol"==typeof Symbol.toStringTag?function(t){var r,n,o,e,a;if(null==t)return N.call(t);n=t[O],a=O,r=null!=(e=t)&&F.call(e,a);try{t[O]=void 0}catch(r){return N.call(t)}return o=N.call(t),r?t[O]=n:delete t[O],o}:function(t){return N.call(t)},T="function"==typeof Uint8Array;var I="function"==typeof Uint8Array?Uint8Array:null;var E,P="function"==typeof Uint8Array?Uint8Array:void 0;E=function(){var t,r,n;if("function"!=typeof I)return!1;try{r=new I(r=[1,3.14,-3.14,256,257]),n=r,t=(T&&n instanceof Uint8Array||"[object Uint8Array]"===j(n))&&1===r[0]&&3===r[1]&&253===r[2]&&0===r[3]&&1===r[4]}catch(r){t=!1}return t}()?P:function(){throw new Error("not implemented")};var x=E,V=r();var Y=Object.prototype.toString;var _=Object.prototype.hasOwnProperty;var q="function"==typeof a?a.toStringTag:"";var G=V&&"symbol"==typeof Symbol.toStringTag?function(t){var r,n,o,e,a;if(null==t)return Y.call(t);n=t[q],a=q,r=null!=(e=t)&&_.call(e,a);try{t[q]=void 0}catch(r){return Y.call(t)}return o=Y.call(t),r?t[q]=n:delete t[q],o}:function(t){return Y.call(t)},M="function"==typeof Uint16Array;var k="function"==typeof Uint16Array?Uint16Array:null;var z,B="function"==typeof Uint16Array?Uint16Array:void 0;z=function(){var t,r,n;if("function"!=typeof k)return!1;try{r=new k(r=[1,3.14,-3.14,65536,65537]),n=r,t=(M&&n instanceof Uint16Array||"[object Uint16Array]"===G(n))&&1===r[0]&&3===r[1]&&65533===r[2]&&0===r[3]&&1===r[4]}catch(r){t=!1}return t}()?B:function(){throw new Error("not implemented")};var C,D={uint16:z,uint8:x};(C=new D.uint16(1))[0]=4660;var H=52===new D.uint8(C.buffer)[0],J=!0===H?1:0,K=new U(1),L=new v(K.buffer);function Q(t){return K[0]=t,L[J]}var R=r();var W=Object.prototype.toString;var X=Object.prototype.hasOwnProperty;var Z="function"==typeof a?a.toStringTag:"";var $=R&&"symbol"==typeof Symbol.toStringTag?function(t){var r,n,o,e,a;if(null==t)return W.call(t);n=t[Z],a=Z,r=null!=(e=t)&&X.call(e,a);try{t[Z]=void 0}catch(r){return W.call(t)}return o=W.call(t),r?t[Z]=n:delete t[Z],o}:function(t){return W.call(t)},tt="function"==typeof Float64Array;var rt="function"==typeof Float64Array?Float64Array:null;var nt,ot="function"==typeof Float64Array?Float64Array:void 0;nt=function(){var t,r,n;if("function"!=typeof rt)return!1;try{r=new rt([1,3.14,-3.14,NaN]),n=r,t=(tt&&n instanceof Float64Array||"[object Float64Array]"===$(n))&&1===r[0]&&3.14===r[1]&&-3.14===r[2]&&r[3]!=r[3]}catch(r){t=!1}return t}()?ot:function(){throw new Error("not implemented")};var et=!0===H?1:0,at=new nt(1),it=new v(at.buffer);function ut(t,r){return at[0]=t,it[et]=r>>>0,at[0]}var ct=Number.POSITIVE_INFINITY,ft=Number.NEGATIVE_INFINITY;var lt=.6931471803691238,yt=1.9082149292705877e-10;var vt=Math.sqrt;var pt=.6931471803691238,At=1.9082149292705877e-10;function bt(r){var n,o,e,a,i,u,c,f,l,y,v,p;return 0===r?ft:t(r)||r<0?NaN:(i=0,(o=Q(r))<1048576&&(i-=54,o=Q(r*=0x40000000000000)),o>=2146435072?r+r:(i+=(o>>20)-1023|0,i+=(f=(o&=1048575)+614244&1048576|0)>>20|0,c=(r=ut(r,o|1072693248^f))-1,(1048575&2+o)<3?0===c?0===i?0:i*pt+i*At:(u=c*c*(.5-.3333333333333333*c),0===i?c-u:i*pt-(u-i*At-c)):(f=o-398458|0,l=440401-o|0,a=(v=(p=(y=c/(2+c))*y)*p)*function(t){return 0===t?.3999999999940942:.3999999999940942+t*(.22222198432149784+.15313837699209373*t)}(v),e=p*function(t){return 0===t?.6666666666666735:.6666666666666735+t*(.2857142874366239+t*(.1818357216161805+.14798198605116586*t))}(v),u=e+a,(f|=l)>0?(n=.5*c*c,0===i?c-(n-y*(n+u)):i*pt-(n-(y*(n+u)+i*At)-c)):0===i?c-y*(c-u):i*pt-(y*(c-u)-i*At-c))))}function mt(r){var n;return t(r)||r<1?NaN:1===r?0:r>=268435456?bt(r)+.6931471805599453:r>2?bt(2*r-1/(r+vt(r*r-1))):function(r){var n,o,e,a,i,u,c,f,l,y;if(r<-1||t(r))return NaN;if(-1===r)return ft;if(r===ct)return r;if(0===r)return r;if(y=1,(e=r<0?-r:r)<.41421356237309503){if(e<1.862645149230957e-9)return e<5551115123125783e-32?r:r-r*r*.5;r>-.2928932188134525&&(y=0,a=r,o=1)}return 0!==y&&(e<9007199254740992?(i=(y=((o=Q(l=1+r))>>20)-1023)>0?1-(l-r):r-(l-1),i/=l):(y=((o=Q(l=r))>>20)-1023,i=0),(o&=1048575)<434334?l=ut(l,1072693248|o):(y+=1,l=ut(l,1071644672|o),o=1048576-o>>2),a=l-1),n=.5*a*a,0===o?0===a?y*lt+(i+=y*yt):y*lt-((f=n*(1-.6666666666666666*a))-(y*yt+i)-a):(f=(c=(u=a/(2+a))*u)*function(t){return 0===t?.6666666666666735:.6666666666666735+t*(.3999999999940942+t*(.2857142874366239+t*(.22222198432149784+t*(.1818357216161805+t*(.15313837699209373+.14798198605116586*t)))))}(c),0===y?a-(n-u*(n+f)):y*lt-(n-(u*(n+f)+(y*yt+i))-a))}((n=r-1)+vt(2*n+n*n))}function wt(t){return mt(1/t)}export{wt as default};
//# sourceMappingURL=mod.js.map
