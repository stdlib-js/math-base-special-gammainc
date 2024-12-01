// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-gammaln@v0.2.2-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-floor@v0.2.3-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-gamma@v0.3.0-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-abs@v0.2.2-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-exp@v0.2.4-esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-pow@v0.3.0-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-ln@v0.2.4-esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-sqrt-eps@v0.2.2-esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-max@v0.2.2-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-sqrt-two-pi@v0.2.2-esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-max-ln@v0.2.2-esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-pinf@v0.2.2-esm/index.mjs";import j from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-erfc@v0.2.4-esm/index.mjs";import c from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-sqrt@v0.2.2-esm/index.mjs";import h from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-exp@esm/index.mjs";import f from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-pi@v0.2.2-esm/index.mjs";import b from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-pow@esm/index.mjs";import v from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-ln@esm/index.mjs";import u from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-max-ln@esm/index.mjs";import g from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-min-ln@esm/index.mjs";import x from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-tools-evalpoly@esm/index.mjs";import k from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-log1pmx@esm/index.mjs";import w from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-erfc@esm/index.mjs";import q from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-sqrt@esm/index.mjs";import z from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-two-pi@esm/index.mjs";import N from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-tools-sum-series@esm/index.mjs";import V from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-gamma-lanczos-sum-expg-scaled@esm/index.mjs";import y from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-gammaln@esm/index.mjs";import A from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-gamma@esm/index.mjs";import B from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-log1p@esm/index.mjs";import C from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-abs@esm/index.mjs";import D from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-max@esm/index.mjs";import E from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-min@esm/index.mjs";import F from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-gamma-lanczos-g@esm/index.mjs";import G from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-e@esm/index.mjs";import H from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-powm1@esm/index.mjs";import I from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-gamma1pm1@esm/index.mjs";import J from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-tools-continued-fraction@esm/index.mjs";function K(s,t){var e;return e=s*v(t),t>=1?e<u&&-t>g?b(t,s)*h(-t):s>=1?b(t/h(t/s),s):h(e-t):e>g?b(t,s)*h(-t):t/s<u?b(t/h(t/s),s):h(e-t)}var L=[0,0,0,0,0,0,0,0,0,0];function M(s,t,e){var n;return e=e||0,n=function(s,t){var e=1,n=s,i=t;return function(){var s=e;return e*=i/(n+=1),s}}(s,t),N(n,{initialValue:e})}function O(s,t){var e,n,i,m,r,a,d;return d=(t-s-F+.5)/(i=s+F-.5),s<1?t<=g?h(s*v(t)-t-y(s)):b(t,s)*h(-t)/A(s):(C(d*d*s)<=100&&s>150?(e=s*(B(d)-d)+t*(.5-F)/i,e=h(e)):(m=s*v(t/i),E(m,r=s-t)<=g||D(m,r)>=u?(n=r/s,E(m,r)/2>g&&D(m,r)/2<u?e=(a=b(t/i,s/2)*h(r/2))*a:E(m,r)/4>g&&D(m,r)/4<u&&t>s?(e=(a=b(t/i,s/4)*h(r/4))*a,e*=e):e=n>g&&n<u?b(t*h(n)/i,s):h(m+r)):e=b(t/i,s)*h(r)),e*=q(i/G)/V(s))}function P(s,t){var e=function(s,t){var e=t-s+1,n=s,i=0;return function(){return[(i+=1)*(n-i),e+=2]}}(s,t);return 1/(t-s+1+J(e))}function Q(b,v,u,g){var V,y,A,B,C,D,E,F,G,J,R,S,T;if(b<0||v<=0)return NaN;if(y=void 0===u||u,E=g,F=0,v>=170&&!y)return E&&4*v<b?(F=v*r(b)-b,F+=r(P(v,b))):!E&&v>4*b?(F=v*r(b)-b,F+=r(M(v,b,B=0)/v)):0===(F=Q(v,b,!0,E))?E?(F=r(F=1+1/(12*v)+1/(288*v*v))-v+(v-.5)*r(v),F+=r(o)):(F=v*r(b)-b,F+=r(M(v,b,B=0)/v)):F=r(F)+s(v),F>l?p:i(F);switch(v<30&&v<=b+1&&b<l?C=!(G=(S=t(v))===v)&&.5===n(S-v):G=C=!1,G&&b>.6?(E=!E,A=0):C&&b>.2?(E=!E,A=1):b<a&&v>1?A=6:b<.5?A=-.4/r(b)<v?2:3:b<1.1?A=.75*b<v?2:3:(D=!1,y&&v>20&&(J=n((b-v)/v),v>200?20/v>J*J&&(D=!0):J<.4&&(D=!0)),D?A=5:b-1/(3*b)<v?A=2:(A=4,E=!E)),A){case 0:F=function(s,t){var e,n,m;if(0!==(n=i(-t)))for(e=n,m=1;m<s;++m)e/=m,n+=e*=t;return n}(v,b),!1===y&&(F*=e(v));break;case 1:F=function(s,t){var e,n,i,m;if(0!==(i=j(c(t)))&&s>1){for(e=h(-t)/c(f*t),e*=t,n=e/=.5,m=2;m<s;++m)e/=m-.5,n+=e*=t;i+=n}return i}(v,b),!1===y&&(F*=e(v));break;case 2:0!==(F=y?O(v,b):K(v,b))&&(B=0,V=!1,E&&(B=y?1:e(v),y||F>=1||d*F>B?(B/=F,y||v<1||d/v>B?(B*=-v,V=!0):B=0):B=0)),F*=M(v,b,B)/v,V&&(E=!1,F=-F);break;case 3:R=function(s,t,e){var n,i,m,r;return i=((n=I(s))+1)/s,n-=m=H(t,s),n/=s,r=function(s,t){var e,n,i,m;return e=-t,t=-t,n=s+1,i=1,function(){return m=e/n,e*=t,e/=i+=1,n+=1,m}}(s,t),n=-(m+=1)*N(r,{initialValue:((e?i:0)-n)/m}),e&&(n=-n),[n,i]}(v,b,E=!E),F=R[0],T=R[1],E=!1,y&&(F/=T);break;case 4:0!==(F=y?O(v,b):K(v,b))&&(F*=P(v,b));break;case 5:F=function(s,t){var e,n,i,m;return i=s*(n=-k((t-s)/s)),m=q(2*n),t<s&&(m=-m),L[0]=function(s){return 0===s?-.3333333333333333:s*(.08333333333333333+s*(s*(.0011574074074074073+s*(.0003527336860670194+s*(s*(3919263178522438e-20+s*(s*(s*(8.296711340953087e-7+s*(s*(6.707853543401498e-9+s*(1.0261809784240309e-8+s*(9.14769958223679e-10*s-4.382036018453353e-9)))-1.7665952736826078e-7))-185406221071516e-20)-21854485106799924e-22))-.0001787551440329218)))-.014814814814814815))-.3333333333333333}(m),L[1]=function(s){return 0===s?-.001851851851851852:s*(s*(.0026455026455026454+s*(s*(.00020576131687242798+s*(s*(s*(764916091608111e-20+s*(s*(4.647127802807434e-9+s*(1.378633446915721e-7+s*(1.1951628599778148e-8*s-5.752545603517705e-8)))-16120900894563446e-22))-18098550334489977e-21)-4.018775720164609e-7))-.0009902263374485596))-.003472222222222222)-.001851851851851852}(m),L[2]=function(s){return 0===s?.004133597883597883:.004133597883597883+s*(s*(.0007716049382716049+s*(20093878600823047e-22+s*(s*(52923448829120125e-21+s*(s*(3.423578734096138e-8+s*(13721957309062932e-22+s*(1.4280614206064242e-7*s-6.298992138380055e-7)))-12760635188618728e-21))-.00010736653226365161)))-.0026813271604938273)}(m),L[3]=function(s){return 0===s?.0006494341563786008:.0006494341563786008+s*(.00022947209362139917+s*(s*(.00026772063206283885+s*(s*(s*(11082654115347302e-21+s*(14230900732435883e-22*s-56749528269915965e-22))-2.396505113867297e-7)-7561801671883977e-20))-.0004691894943952557))}(m),L[4]=function(s){return 0===s?-.0008618882909167117:s*(.0007840392217200666+s*(s*(s*(6641498215465122e-20+s*(11375726970678419e-21*s-3968365047179435e-20))-14638452578843418e-22)-.0002990724803031902))-.0008618882909167117}(m),L[5]=function(s){return 0===s?-.00033679855336635813:s*(s*(.0002772753244959392+s*(s*(6797780477937208e-20+s*(1.419062920643967e-7+s*(s*(8018470256334202e-21+-2291481176508095e-21*s)-13594048189768693e-21)))-.00019932570516188847))-6972813758365858e-20)-.00033679855336635813}(m),L[6]=function(s){return 0===s?.0005313079364639922:.0005313079364639922+s*(s*(.0002708782096718045+s*(7.902353232660328e-7+s*(s*(561168275310625e-19+-18329116582843375e-21*s)-8153969367561969e-20)))-.0005921664373536939)}(m),L[7]=function(s){return 0===s?.00034436760689237765:.00034436760689237765+s*(5171790908260592e-20+s*(s*(.0002812695154763237+-.00010976582244684731*s)-.00033493161081142234))}(m),L[8]=function(s){return 0===s?-.0006526239185953094:s*(.0008394987206720873+-.000438297098541721*s)-.0006526239185953094}(m),L[9]=-.0005967612901927463,e=x(L,1/s),e*=h(-i)/q(z*s),t<s&&(e=-e),e+w(q(i))/2}(v,b),b>=v&&(E=!E);break;case 6:F=y?m(b,v)/e(v+1):m(b,v)/v,F*=1-v*b/(v+1)}return y&&F>1&&(F=1),E&&(F=(y?1:e(v))-F),F}export{Q as default};
//# sourceMappingURL=index.mjs.map
