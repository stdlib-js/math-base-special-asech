// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var n,t;n=this,t=function(){"use strict";function n(n){return n!=n}var t,r="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),o=Object.prototype.toString,e=Object.prototype.hasOwnProperty,i="function"==typeof Symbol?Symbol:void 0,f="function"==typeof i?i.toStringTag:"",u=r&&"symbol"==typeof Symbol.toStringTag?function(n){var t,r,i,u,a;if(null==n)return o.call(n);r=n[f],a=f,t=null!=(u=n)&&e.call(u,a);try{n[f]=void 0}catch(t){return o.call(n)}return i=o.call(n),t?n[f]=r:delete n[f],i}:function(n){return o.call(n)},a="function"==typeof Uint32Array,c="function"==typeof Uint32Array?Uint32Array:null,y="function"==typeof Uint32Array?Uint32Array:void 0;t=function(){var n,t,r;if("function"!=typeof c)return!1;try{t=new c(t=[1,3.14,-3.14,4294967296,4294967297]),r=t,n=(a&&r instanceof Uint32Array||"[object Uint32Array]"===u(r))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){n=!1}return n}()?y:function(){throw new Error("not implemented")};var l,p=t,A="function"==typeof Float64Array,v="function"==typeof Float64Array?Float64Array:null,b="function"==typeof Float64Array?Float64Array:void 0;l=function(){var n,t,r;if("function"!=typeof v)return!1;try{t=new v([1,3.14,-3.14,NaN]),r=t,n=(A&&r instanceof Float64Array||"[object Float64Array]"===u(r))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){n=!1}return n}()?b:function(){throw new Error("not implemented")};var d,U=l,m="function"==typeof Uint8Array,w="function"==typeof Uint8Array?Uint8Array:null,s="function"==typeof Uint8Array?Uint8Array:void 0;d=function(){var n,t,r;if("function"!=typeof w)return!1;try{t=new w(t=[1,3.14,-3.14,256,257]),r=t,n=(m&&r instanceof Uint8Array||"[object Uint8Array]"===u(r))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){n=!1}return n}()?s:function(){throw new Error("not implemented")};var h,N=d,F="function"==typeof Uint16Array,I="function"==typeof Uint16Array?Uint16Array:null,S="function"==typeof Uint16Array?Uint16Array:void 0;h=function(){var n,t,r;if("function"!=typeof I)return!1;try{t=new I(t=[1,3.14,-3.14,65536,65537]),r=t,n=(F&&r instanceof Uint16Array||"[object Uint16Array]"===u(r))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){n=!1}return n}()?S:function(){throw new Error("not implemented")};var T,g={uint16:h,uint8:N};(T=new g.uint16(1))[0]=4660;var j=52===new g.uint8(T.buffer)[0],E=!0===j?1:0,O=new U(1),x=new p(O.buffer);function P(n){return O[0]=n,x[E]}var V=!0===j?1:0,Y=new U(1),_=new p(Y.buffer);function q(n,t){return Y[0]=n,_[V]=t>>>0,Y[0]}var G=Number.POSITIVE_INFINITY,M=Number.NEGATIVE_INFINITY,k=1023,z=.6931471803691238,B=1.9082149292705877e-10,C=.41421356237309503,D=-.2928932188134525,H=1.862645149230957e-9,J=5551115123125783e-32,K=9007199254740992,L=.6666666666666666,Q=Math.sqrt,R=.6931471805599453,W=.6931471803691238,X=1.9082149292705877e-10,Z=0x40000000000000,$=.3333333333333333,nn=1048575,tn=2146435072,rn=1048576,on=1072693248;function en(t){var r,o,e,i,f,u,a,c,y,l,p,A;return 0===t?M:n(t)||t<0?NaN:(f=0,(o=P(t))<rn&&(f-=54,o=P(t*=Z)),o>=tn?t+t:(f+=(o>>20)-k|0,f+=(c=614244+(o&=nn)&1048576|0)>>20|0,a=(t=q(t,o|c^on))-1,(nn&2+o)<3?0===a?0===f?0:f*W+f*X:(u=a*a*(.5-$*a),0===f?a-u:f*W-(u-f*X-a)):(c=o-398458|0,y=440401-o|0,i=(p=(A=(l=a/(2+a))*l)*A)*function(n){return 0===n?.3999999999940942:.3999999999940942+n*(.22222198432149784+.15313837699209373*n)}(p),e=A*function(n){return 0===n?.6666666666666735:.6666666666666735+n*(.2857142874366239+n*(.1818357216161805+.14798198605116586*n))}(p),u=e+i,(c|=y)>0?(r=.5*a*a,0===f?a-(r-l*(r+u)):f*W-(r-(l*(r+u)+f*X)-a)):0===f?a-l*(a-u):f*W-(l*(a-u)-f*X-a))))}var fn=1<<28;function un(t){var r;return n(t)||t<1?NaN:1===t?0:t>=fn?en(t)+R:t>2?en(2*t-1/(t+Q(t*t-1))):function(t){var r,o,e,i,f,u,a,c,y,l;if(t<-1||n(t))return NaN;if(-1===t)return M;if(t===G)return t;if(0===t)return t;if(l=1,(e=t<0?-t:t)<C){if(e<H)return e<J?t:t-t*t*.5;t>D&&(l=0,i=t,o=1)}return 0!==l&&(e<K?(f=(l=((o=P(y=1+t))>>20)-k)>0?1-(y-t):t-(y-1),f/=y):(l=((o=P(y=t))>>20)-k,f=0),(o&=1048575)<434334?y=q(y,1072693248|o):(l+=1,y=q(y,1071644672|o),o=1048576-o>>2),i=y-1),r=.5*i*i,0===o?0===i?l*z+(f+=l*B):l*z-((c=r*(1-L*i))-(l*B+f)-i):(c=(a=(u=i/(2+i))*u)*function(n){return 0===n?.6666666666666735:.6666666666666735+n*(.3999999999940942+n*(.2857142874366239+n*(.22222198432149784+n*(.1818357216161805+n*(.15313837699209373+.14798198605116586*n)))))}(a),0===l?i-(r-u*(r+c)):l*z-(r-(u*(r+c)+(l*B+f))-i))}((r=t-1)+Q(2*r+r*r))}return function(n){return un(1/n)}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(n="undefined"!=typeof globalThis?globalThis:n||self).asech=t();
//# sourceMappingURL=index.js.map
