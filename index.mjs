// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-gammaln@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-floor@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-gamma@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-abs@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-exp@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-pow@v0.0.7-esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-ln@esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-sqrt-eps@v0.0.8-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-max@v0.0.8-esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-sqrt-two-pi@v0.0.8-esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-max-ln@v0.0.8-esm/index.mjs";import c from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-pinf@v0.0.8-esm/index.mjs";import j from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-erfc@esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-sqrt@esm/index.mjs";import h from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-pi@v0.0.8-esm/index.mjs";import f from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-min-ln@v0.0.8-esm/index.mjs";import u from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-tools-evalpoly@esm/index.mjs";import v from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-two-pi@v0.0.8-esm/index.mjs";import b from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-tools-sum-series@esm/index.mjs";import g from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-gamma-lanczos-sum-expg-scaled@esm/index.mjs";import x from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-log1p@esm/index.mjs";import k from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-max@esm/index.mjs";import w from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-min@esm/index.mjs";import q from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-gamma-lanczos-g@v0.0.8-esm/index.mjs";import z from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-e@v0.0.8-esm/index.mjs";import N from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-powm1@esm/index.mjs";import V from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-gamma1pm1@esm/index.mjs";import y from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-tools-continued-fraction@esm/index.mjs";function A(t,s){var e;return e=t*m(s),s>=1?e<l&&-s>f?r(s,t)*i(-s):t>=1?r(s/i(s/t),t):i(e-s):e>f?r(s,t)*i(-s):s/t<l?r(s/i(s/t),t):i(e-s)}var B=[0,0,0,0,0,0,0,0,0,0];function C(t,s,e){var n;return e=e||0,n=function(t,s){var e=1,n=t,i=s;return function(){var t=e;return e*=i/(n+=1),t}}(t,s),b(n,{initialValue:e})}function D(s,a){var o,d,c,j,h,u,v;return v=(a-s-q+.5)/(c=s+q-.5),s<1?a<=f?i(s*m(a)-a-t(s)):r(a,s)*i(-a)/e(s):(n(v*v*s)<=100&&s>150?(o=s*(x(v)-v)+a*(.5-q)/c,o=i(o)):(j=s*m(a/c),w(j,h=s-a)<=f||k(j,h)>=l?(d=h/s,w(j,h)/2>f&&k(j,h)/2<l?o=(u=r(a/c,s/2)*i(h/2))*u:w(j,h)/4>f&&k(j,h)/4<l&&a>s?(o=(u=r(a/c,s/4)*i(h/4))*u,o*=o):o=d>f&&d<l?r(a*i(d)/c,s):i(j+h)):o=r(a/c,s)*i(h)),o*=p(c/z)/g(s))}function E(t,s){var e=function(t,s){var e=s-t+1,n=t,i=0;return function(){return[(i+=1)*(n-i),e+=2]}}(t,s);return 1/(s-t+1+y(e))}function F(f,g,x,k){var w,q,z,y,G,H,I,J,K,L,M,O,P;if(f<0||g<=0)return NaN;if(q=void 0===x||x,I=k,J=0,g>=170&&!q)return I&&4*g<f?(J=g*m(f)-f,J+=m(E(g,f))):!I&&g>4*f?(J=g*m(f)-f,J+=m(C(g,f,y=0)/g)):0===(J=F(g,f,!0,I))?I?(J=m(J=1+1/(12*g)+1/(288*g*g))-g+(g-.5)*m(g),J+=m(d)):(J=g*m(f)-f,J+=m(C(g,f,y=0)/g)):J=m(J)+t(g),J>l?c:i(J);switch(g<30&&g<=f+1&&f<l?G=!(K=(O=s(g))===g)&&.5===n(O-g):K=G=!1,K&&f>.6?(I=!I,z=0):G&&f>.2?(I=!I,z=1):f<a&&g>1?z=6:f<.5?z=-.4/m(f)<g?2:3:f<1.1?z=.75*f<g?2:3:(H=!1,q&&g>20&&(L=n((f-g)/g),g>200?20/g>L*L&&(H=!0):L<.4&&(H=!0)),H?z=5:f-1/(3*f)<g?z=2:(z=4,I=!I)),z){case 0:J=function(t,s){var e,n,r;if(0!==(n=i(-s)))for(e=n,r=1;r<t;++r)e/=r,n+=e*=s;return n}(g,f),!1===q&&(J*=e(g));break;case 1:J=function(t,s){var e,n,r,m;if(0!==(r=j(p(s)))&&t>1){for(e=i(-s)/p(h*s),e*=s,n=e/=.5,m=2;m<t;++m)e/=m-.5,n+=e*=s;r+=n}return r}(g,f),!1===q&&(J*=e(g));break;case 2:0!==(J=q?D(g,f):A(g,f))&&(y=0,w=!1,I&&(y=q?1:e(g),q||J>=1||o*J>y?(y/=J,q||g<1||o/g>y?(y*=-g,w=!0):y=0):y=0)),J*=C(g,f,y)/g,w&&(I=!1,J=-J);break;case 3:M=function(t,s,e){var n,i,r,m;return i=((n=V(t))+1)/t,n-=r=N(s,t),n/=t,m=function(t,s){var e,n,i,r;return e=-s,s=-s,n=t+1,i=1,function(){return r=e/n,e*=s,e/=i+=1,n+=1,r}}(t,s),n=-(r+=1)*b(m,{initialValue:((e?i:0)-n)/r}),e&&(n=-n),[n,i]}(g,f,I=!I),J=M[0],P=M[1],I=!1,q&&(J/=P);break;case 4:0!==(J=q?D(g,f):A(g,f))&&(J*=E(g,f));break;case 5:J=function(t,s){var e,n,r,a,o;return a=t*(r=-m(1+(n=(s-t)/t))+n),o=p(2*r),s<t&&(o=-o),B[0]=function(t){return 0===t?-.3333333333333333:t*(.08333333333333333+t*(t*(.0011574074074074073+t*(.0003527336860670194+t*(t*(3919263178522438e-20+t*(t*(t*(8.296711340953087e-7+t*(t*(6.707853543401498e-9+t*(1.0261809784240309e-8+t*(9.14769958223679e-10*t-4.382036018453353e-9)))-1.7665952736826078e-7))-185406221071516e-20)-21854485106799924e-22))-.0001787551440329218)))-.014814814814814815))-.3333333333333333}(o),B[1]=function(t){return 0===t?-.001851851851851852:t*(t*(.0026455026455026454+t*(t*(.00020576131687242798+t*(t*(t*(764916091608111e-20+t*(t*(4.647127802807434e-9+t*(1.378633446915721e-7+t*(1.1951628599778148e-8*t-5.752545603517705e-8)))-16120900894563446e-22))-18098550334489977e-21)-4.018775720164609e-7))-.0009902263374485596))-.003472222222222222)-.001851851851851852}(o),B[2]=function(t){return 0===t?.004133597883597883:.004133597883597883+t*(t*(.0007716049382716049+t*(20093878600823047e-22+t*(t*(52923448829120125e-21+t*(t*(3.423578734096138e-8+t*(13721957309062932e-22+t*(1.4280614206064242e-7*t-6.298992138380055e-7)))-12760635188618728e-21))-.00010736653226365161)))-.0026813271604938273)}(o),B[3]=function(t){return 0===t?.0006494341563786008:.0006494341563786008+t*(.00022947209362139917+t*(t*(.00026772063206283885+t*(t*(t*(11082654115347302e-21+t*(14230900732435883e-22*t-56749528269915965e-22))-2.396505113867297e-7)-7561801671883977e-20))-.0004691894943952557))}(o),B[4]=function(t){return 0===t?-.0008618882909167117:t*(.0007840392217200666+t*(t*(t*(6641498215465122e-20+t*(11375726970678419e-21*t-3968365047179435e-20))-14638452578843418e-22)-.0002990724803031902))-.0008618882909167117}(o),B[5]=function(t){return 0===t?-.00033679855336635813:t*(t*(.0002772753244959392+t*(t*(6797780477937208e-20+t*(1.419062920643967e-7+t*(t*(8018470256334202e-21+-2291481176508095e-21*t)-13594048189768693e-21)))-.00019932570516188847))-6972813758365858e-20)-.00033679855336635813}(o),B[6]=function(t){return 0===t?.0005313079364639922:.0005313079364639922+t*(t*(.0002708782096718045+t*(7.902353232660328e-7+t*(t*(561168275310625e-19+-18329116582843375e-21*t)-8153969367561969e-20)))-.0005921664373536939)}(o),B[7]=function(t){return 0===t?.00034436760689237765:.00034436760689237765+t*(5171790908260592e-20+t*(t*(.0002812695154763237+-.00010976582244684731*t)-.00033493161081142234))}(o),B[8]=function(t){return 0===t?-.0006526239185953094:t*(.0008394987206720873+-.000438297098541721*t)-.0006526239185953094}(o),B[9]=-.0005967612901927463,e=u(B,1/t),e*=i(-a)/p(v*t),s<t&&(e=-e),e+j(p(a))/2}(g,f),f>=g&&(I=!I);break;case 6:J=q?r(f,g)/e(g+1):r(f,g)/g,J*=1-g*f/(g+1)}return q&&J>1&&(J=1),I&&(J=(q?1:e(g))-J),J}export{F as default};
//# sourceMappingURL=index.mjs.map