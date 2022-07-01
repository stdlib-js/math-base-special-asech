// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r=function(r){return r!=r};var n=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var t=function(){return n&&"symbol"==typeof Symbol.toStringTag},o=Object.prototype.toString,e=o;var i=function(r){return e.call(r)},u=Object.prototype.hasOwnProperty;var a=function(r,n){return null!=r&&u.call(r,n)},f="function"==typeof Symbol?Symbol.toStringTag:"",c=a,y=f,l=o;var v=i,p=function(r){var n,t,o;if(null==r)return l.call(r);t=r[y],n=c(r,y);try{r[y]=void 0}catch(n){return l.call(r)}return o=l.call(r),n?r[y]=t:delete r[y],o},A=t()?p:v,U=A,w="function"==typeof Uint32Array;var b="function"==typeof Uint32Array?Uint32Array:null,m=function(r){return w&&r instanceof Uint32Array||"[object Uint32Array]"===U(r)},N=b;var d=function(){var r,n;if("function"!=typeof N)return!1;try{n=new N(n=[1,3.14,-3.14,4294967296,4294967297]),r=m(n)&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r};var h="function"==typeof Uint32Array?Uint32Array:void 0,s=function(){throw new Error("not implemented")},F=d()?h:s,I=A,S="function"==typeof Float64Array;var E="function"==typeof Float64Array?Float64Array:null,j=function(r){return S&&r instanceof Float64Array||"[object Float64Array]"===I(r)},T=E;var g=function(){var r,n;if("function"!=typeof T)return!1;try{n=new T([1,3.14,-3.14,NaN]),r=j(n)&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r};var O="function"==typeof Float64Array?Float64Array:void 0,x=function(){throw new Error("not implemented")},P=g()?O:x,V=A,Y="function"==typeof Uint8Array;var _="function"==typeof Uint8Array?Uint8Array:null,q=function(r){return Y&&r instanceof Uint8Array||"[object Uint8Array]"===V(r)},G=_;var M=function(){var r,n;if("function"!=typeof G)return!1;try{n=new G(n=[1,3.14,-3.14,256,257]),r=q(n)&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r};var k="function"==typeof Uint8Array?Uint8Array:void 0,z=function(){throw new Error("not implemented")},B=M()?k:z,C=A,D="function"==typeof Uint16Array;var H="function"==typeof Uint16Array?Uint16Array:null,J=function(r){return D&&r instanceof Uint16Array||"[object Uint16Array]"===C(r)},K=H;var L=function(){var r,n;if("function"!=typeof K)return!1;try{n=new K(n=[1,3.14,-3.14,65536,65537]),r=J(n)&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r};var Q,R="function"==typeof Uint16Array?Uint16Array:void 0,W=function(){throw new Error("not implemented")},X={uint16:L()?R:W,uint8:B};(Q=new X.uint16(1))[0]=4660;var Z=52===new X.uint8(Q.buffer)[0],$=F,rr=!0===Z?1:0,nr=new P(1),tr=new $(nr.buffer);var or=function(r){return nr[0]=r,tr[rr]},er=F,ir=!0===Z?1:0,ur=new P(1),ar=new er(ur.buffer);var fr=function(r,n){return ur[0]=r,ar[ir]=n>>>0,ur[0]},cr=fr,yr=Number.POSITIVE_INFINITY,lr=Number.NEGATIVE_INFINITY;var vr=r,pr=or,Ar=cr,Ur=yr,wr=lr,br=function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.3999999999940942+r*(.2857142874366239+r*(.22222198432149784+r*(.1818357216161805+r*(.15313837699209373+.14798198605116586*r)))))},mr=.6931471803691238,Nr=1.9082149292705877e-10;var dr=function(r){var n,t,o,e,i,u,a,f,c,y;if(r<-1||vr(r))return NaN;if(-1===r)return wr;if(r===Ur)return r;if(0===r)return r;if(y=1,(o=r<0?-r:r)<.41421356237309503){if(o<1.862645149230957e-9)return o<5551115123125783e-32?r:r-r*r*.5;r>-.2928932188134525&&(y=0,e=r,t=1)}return 0!==y&&(o<9007199254740992?(i=(y=((t=pr(c=1+r))>>20)-1023)>0?1-(c-r):r-(c-1),i/=c):(y=((t=pr(c=r))>>20)-1023,i=0),(t&=1048575)<434334?c=Ar(c,1072693248|t):(y+=1,c=Ar(c,1071644672|t),t=1048576-t>>2),e=c-1),n=.5*e*e,0===t?0===e?y*mr+(i+=y*Nr):y*mr-((f=n*(1-.6666666666666666*e))-(y*Nr+i)-e):(f=(a=(u=e/(2+e))*u)*br(a),0===y?e-(n-u*(n+f)):y*mr-(n-(u*(n+f)+(y*Nr+i))-e))},hr=Math.sqrt;var sr=or,Fr=cr,Ir=r,Sr=lr,Er=function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)},jr=function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))},Tr=.6931471803691238,gr=1.9082149292705877e-10;var Or=r,xr=dr,Pr=hr,Vr=function(r){var n,t,o,e,i,u,a,f,c,y,l;return 0===r?Sr:Ir(r)||r<0?NaN:(e=0,(t=sr(r))<1048576&&(e-=54,t=sr(r*=0x40000000000000)),t>=2146435072?r+r:(e+=(t>>20)-1023|0,e+=(a=(t&=1048575)+614244&1048576|0)>>20|0,u=(r=Fr(r,t|1072693248^a))-1,(1048575&2+t)<3?0===u?0===e?0:e*Tr+e*gr:(i=u*u*(.5-.3333333333333333*u),0===e?u-i:e*Tr-(i-e*gr-u)):(a=t-398458|0,f=440401-t|0,o=(y=(l=(c=u/(2+u))*c)*l)*Er(y),i=l*jr(y)+o,(a|=f)>0?(n=.5*u*u,0===e?u-(n-c*(n+i)):e*Tr-(n-(c*(n+i)+e*gr)-u)):0===e?u-c*(u-i):e*Tr-(c*(u-i)-e*gr-u))))};var Yr=function(r){var n;return Or(r)||r<1?NaN:1===r?0:r>=268435456?Vr(r)+.6931471805599453:r>2?Vr(2*r-1/(r+Pr(r*r-1))):xr((n=r-1)+Pr(2*n+n*n))};function _r(r){return Yr(1/r)}export{_r as default};
//# sourceMappingURL=mod.js.map
