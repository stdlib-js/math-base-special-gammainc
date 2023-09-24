// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-gammaln@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-floor@v0.1.0-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-gamma@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-abs@v0.1.0-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-exp@v0.1.0-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-pow@v0.1.0-esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-ln@esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-sqrt-eps@v0.1.0-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-max@v0.1.0-esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-sqrt-two-pi@v0.1.0-esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-max-ln@v0.1.0-esm/index.mjs";import c from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-pinf@v0.1.0-esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-erfc@v0.1.0-esm/index.mjs";import j from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-sqrt@v0.1.0-esm/index.mjs";import h from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-pi@v0.1.0-esm/index.mjs";import f from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-min-ln@v0.1.0-esm/index.mjs";import v from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-tools-evalpoly@v0.1.0-esm/index.mjs";import u from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-log1pmx@esm/index.mjs";import b from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-two-pi@v0.1.0-esm/index.mjs";import g from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-tools-sum-series@v0.1.0-esm/index.mjs";import x from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-gamma-lanczos-sum-expg-scaled@esm/index.mjs";import k from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-log1p@esm/index.mjs";import w from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-max@v0.1.0-esm/index.mjs";import q from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-min@v0.1.0-esm/index.mjs";import z from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-gamma-lanczos-g@v0.1.0-esm/index.mjs";import N from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-e@v0.1.0-esm/index.mjs";import V from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-powm1@v0.1.0-esm/index.mjs";import y from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-gamma1pm1@esm/index.mjs";import A from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-tools-continued-fraction@v0.1.0-esm/index.mjs";function B(t,s){var e;return e=t*m(s),s>=1?e<l&&-s>f?r(s,t)*i(-s):t>=1?r(s/i(s/t),t):i(e-s):e>f?r(s,t)*i(-s):s/t<l?r(s/i(s/t),t):i(e-s)}var C=[0,0,0,0,0,0,0,0,0,0];function D(t,s,e){var n;return e=e||0,n=function(t,s){var e=1,n=t,i=s;return function(){var t=e;return e*=i/(n+=1),t}}(t,s),g(n,{initialValue:e})}function E(s,a){var o,d,c,p,h,v,u;return u=(a-s-z+.5)/(c=s+z-.5),s<1?a<=f?i(s*m(a)-a-t(s)):r(a,s)*i(-a)/e(s):(n(u*u*s)<=100&&s>150?(o=s*(k(u)-u)+a*(.5-z)/c,o=i(o)):(p=s*m(a/c),q(p,h=s-a)<=f||w(p,h)>=l?(d=h/s,q(p,h)/2>f&&w(p,h)/2<l?o=(v=r(a/c,s/2)*i(h/2))*v:q(p,h)/4>f&&w(p,h)/4<l&&a>s?(o=(v=r(a/c,s/4)*i(h/4))*v,o*=o):o=d>f&&d<l?r(a*i(d)/c,s):i(p+h)):o=r(a/c,s)*i(h)),o*=j(c/N)/x(s))}function F(t,s){var e=function(t,s){var e=s-t+1,n=t,i=0;return function(){return[(i+=1)*(n-i),e+=2]}}(t,s);return 1/(s-t+1+A(e))}function G(f,x,k,w){var q,z,N,A,H,I,J,K,L,M,O,P,Q;if(f<0||x<=0)return NaN;if(z=void 0===k||k,J=w,K=0,x>=170&&!z)return J&&4*x<f?(K=x*m(f)-f,K+=m(F(x,f))):!J&&x>4*f?(K=x*m(f)-f,K+=m(D(x,f,A=0)/x)):0===(K=G(x,f,!0,J))?J?(K=m(K=1+1/(12*x)+1/(288*x*x))-x+(x-.5)*m(x),K+=m(d)):(K=x*m(f)-f,K+=m(D(x,f,A=0)/x)):K=m(K)+t(x),K>l?c:i(K);switch(x<30&&x<=f+1&&f<l?H=!(L=(P=s(x))===x)&&.5===n(P-x):L=H=!1,L&&f>.6?(J=!J,N=0):H&&f>.2?(J=!J,N=1):f<a&&x>1?N=6:f<.5?N=-.4/m(f)<x?2:3:f<1.1?N=.75*f<x?2:3:(I=!1,z&&x>20&&(M=n((f-x)/x),x>200?20/x>M*M&&(I=!0):M<.4&&(I=!0)),I?N=5:f-1/(3*f)<x?N=2:(N=4,J=!J)),N){case 0:K=function(t,s){var e,n,r;if(0!==(n=i(-s)))for(e=n,r=1;r<t;++r)e/=r,n+=e*=s;return n}(x,f),!1===z&&(K*=e(x));break;case 1:K=function(t,s){var e,n,r,m;if(0!==(r=p(j(s)))&&t>1){for(e=i(-s)/j(h*s),e*=s,n=e/=.5,m=2;m<t;++m)e/=m-.5,n+=e*=s;r+=n}return r}(x,f),!1===z&&(K*=e(x));break;case 2:0!==(K=z?E(x,f):B(x,f))&&(A=0,q=!1,J&&(A=z?1:e(x),z||K>=1||o*K>A?(A/=K,z||x<1||o/x>A?(A*=-x,q=!0):A=0):A=0)),K*=D(x,f,A)/x,q&&(J=!1,K=-K);break;case 3:O=function(t,s,e){var n,i,r,m;return i=((n=y(t))+1)/t,n-=r=V(s,t),n/=t,m=function(t,s){var e,n,i,r;return e=-s,s=-s,n=t+1,i=1,function(){return r=e/n,e*=s,e/=i+=1,n+=1,r}}(t,s),n=-(r+=1)*g(m,{initialValue:((e?i:0)-n)/r}),e&&(n=-n),[n,i]}(x,f,J=!J),K=O[0],Q=O[1],J=!1,z&&(K/=Q);break;case 4:0!==(K=z?E(x,f):B(x,f))&&(K*=F(x,f));break;case 5:K=function(t,s){var e,n,r,m;return r=t*(n=-u((s-t)/t)),m=j(2*n),s<t&&(m=-m),C[0]=function(t){return 0===t?-.3333333333333333:t*(.08333333333333333+t*(t*(.0011574074074074073+t*(.0003527336860670194+t*(t*(3919263178522438e-20+t*(t*(t*(8.296711340953087e-7+t*(t*(6.707853543401498e-9+t*(1.0261809784240309e-8+t*(9.14769958223679e-10*t-4.382036018453353e-9)))-1.7665952736826078e-7))-185406221071516e-20)-21854485106799924e-22))-.0001787551440329218)))-.014814814814814815))-.3333333333333333}(m),C[1]=function(t){return 0===t?-.001851851851851852:t*(t*(.0026455026455026454+t*(t*(.00020576131687242798+t*(t*(t*(764916091608111e-20+t*(t*(4.647127802807434e-9+t*(1.378633446915721e-7+t*(1.1951628599778148e-8*t-5.752545603517705e-8)))-16120900894563446e-22))-18098550334489977e-21)-4.018775720164609e-7))-.0009902263374485596))-.003472222222222222)-.001851851851851852}(m),C[2]=function(t){return 0===t?.004133597883597883:.004133597883597883+t*(t*(.0007716049382716049+t*(20093878600823047e-22+t*(t*(52923448829120125e-21+t*(t*(3.423578734096138e-8+t*(13721957309062932e-22+t*(1.4280614206064242e-7*t-6.298992138380055e-7)))-12760635188618728e-21))-.00010736653226365161)))-.0026813271604938273)}(m),C[3]=function(t){return 0===t?.0006494341563786008:.0006494341563786008+t*(.00022947209362139917+t*(t*(.00026772063206283885+t*(t*(t*(11082654115347302e-21+t*(14230900732435883e-22*t-56749528269915965e-22))-2.396505113867297e-7)-7561801671883977e-20))-.0004691894943952557))}(m),C[4]=function(t){return 0===t?-.0008618882909167117:t*(.0007840392217200666+t*(t*(t*(6641498215465122e-20+t*(11375726970678419e-21*t-3968365047179435e-20))-14638452578843418e-22)-.0002990724803031902))-.0008618882909167117}(m),C[5]=function(t){return 0===t?-.00033679855336635813:t*(t*(.0002772753244959392+t*(t*(6797780477937208e-20+t*(1.419062920643967e-7+t*(t*(8018470256334202e-21+-2291481176508095e-21*t)-13594048189768693e-21)))-.00019932570516188847))-6972813758365858e-20)-.00033679855336635813}(m),C[6]=function(t){return 0===t?.0005313079364639922:.0005313079364639922+t*(t*(.0002708782096718045+t*(7.902353232660328e-7+t*(t*(561168275310625e-19+-18329116582843375e-21*t)-8153969367561969e-20)))-.0005921664373536939)}(m),C[7]=function(t){return 0===t?.00034436760689237765:.00034436760689237765+t*(5171790908260592e-20+t*(t*(.0002812695154763237+-.00010976582244684731*t)-.00033493161081142234))}(m),C[8]=function(t){return 0===t?-.0006526239185953094:t*(.0008394987206720873+-.000438297098541721*t)-.0006526239185953094}(m),C[9]=-.0005967612901927463,e=v(C,1/t),e*=i(-r)/j(b*t),s<t&&(e=-e),e+p(j(r))/2}(x,f),f>=x&&(J=!J);break;case 6:K=z?r(f,x)/e(x+1):r(f,x)/x,K*=1-x*f/(x+1)}return z&&K>1&&(K=1),J&&(K=(z?1:e(x))-K),K}export{G as default};
//# sourceMappingURL=index.mjs.map
