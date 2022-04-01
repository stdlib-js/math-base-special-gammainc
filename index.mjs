// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-gammaln@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-floor@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-gamma@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-abs@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-exp@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-pow@esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-ln@esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-sqrt-eps@esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-max@esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-sqrt-two-pi@esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-max-ln@esm/index.mjs";import c from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-pinf@esm/index.mjs";import j from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-erfc@esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-sqrt@esm/index.mjs";import h from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-pi@esm/index.mjs";import f from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-min-ln@esm/index.mjs";import u from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-tools-evalpoly@esm/index.mjs";import b from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-two-pi@esm/index.mjs";import v from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-tools-sum-series@esm/index.mjs";import g from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-gamma-lanczos-sum-expg-scaled@esm/index.mjs";import x from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-log1p@esm/index.mjs";import k from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-max@esm/index.mjs";import w from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-min@esm/index.mjs";import q from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-gamma-lanczos-g@esm/index.mjs";import z from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-e@esm/index.mjs";import N from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-powm1@esm/index.mjs";import V from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-gamma1pm1@esm/index.mjs";import y from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-tools-continued-fraction@esm/index.mjs";var A=r;var B=j,C=p,D=r,E=h;var F=r,G=i,H=m,I=l,J=f;var K=u,L=j,M=p,O=r,P=m,Q=b,R=function(t){return 0===t?-.3333333333333333:t*(.08333333333333333+t*(t*(.0011574074074074073+t*(.0003527336860670194+t*(t*(3919263178522438e-20+t*(t*(t*(8.296711340953087e-7+t*(t*(6.707853543401498e-9+t*(1.0261809784240309e-8+t*(9.14769958223679e-10*t-4.382036018453353e-9)))-1.7665952736826078e-7))-185406221071516e-20)-21854485106799924e-22))-.0001787551440329218)))-.014814814814814815))-.3333333333333333},S=function(t){return 0===t?-.001851851851851852:t*(t*(.0026455026455026454+t*(t*(.00020576131687242798+t*(t*(t*(764916091608111e-20+t*(t*(4.647127802807434e-9+t*(1.378633446915721e-7+t*(1.1951628599778148e-8*t-5.752545603517705e-8)))-16120900894563446e-22))-18098550334489977e-21)-4.018775720164609e-7))-.0009902263374485596))-.003472222222222222)-.001851851851851852},T=function(t){return 0===t?.004133597883597883:.004133597883597883+t*(t*(.0007716049382716049+t*(20093878600823047e-22+t*(t*(52923448829120125e-21+t*(t*(3.423578734096138e-8+t*(13721957309062932e-22+t*(1.4280614206064242e-7*t-6.298992138380055e-7)))-12760635188618728e-21))-.00010736653226365161)))-.0026813271604938273)},U=function(t){return 0===t?.0006494341563786008:.0006494341563786008+t*(.00022947209362139917+t*(t*(.00026772063206283885+t*(t*(t*(11082654115347302e-21+t*(14230900732435883e-22*t-56749528269915965e-22))-2.396505113867297e-7)-7561801671883977e-20))-.0004691894943952557))},W=function(t){return 0===t?-.0008618882909167117:t*(.0007840392217200666+t*(t*(t*(6641498215465122e-20+t*(11375726970678419e-21*t-3968365047179435e-20))-14638452578843418e-22)-.0002990724803031902))-.0008618882909167117},X=function(t){return 0===t?-.00033679855336635813:t*(t*(.0002772753244959392+t*(t*(6797780477937208e-20+t*(1.419062920643967e-7+t*(t*(8018470256334202e-21+-2291481176508095e-21*t)-13594048189768693e-21)))-.00019932570516188847))-6972813758365858e-20)-.00033679855336635813},Y=function(t){return 0===t?.0005313079364639922:.0005313079364639922+t*(t*(.0002708782096718045+t*(7.902353232660328e-7+t*(t*(561168275310625e-19+-18329116582843375e-21*t)-8153969367561969e-20)))-.0005921664373536939)},Z=function(t){return 0===t?.00034436760689237765:.00034436760689237765+t*(5171790908260592e-20+t*(t*(.0002812695154763237+-.00010976582244684731*t)-.00033493161081142234))},$=function(t){return 0===t?-.0006526239185953094:t*(.0008394987206720873+-.000438297098541721*t)-.0006526239185953094},_=[0,0,0,0,0,0,0,0,0,0];var tt=v,st=function(t,s){var e=1,n=t,r=s;return function(){var t=e;return e*=r/(n+=1),t}};var et=g,nt=t,rt=e,it=x,mt=p,at=n,ot=r,dt=i,lt=k,ct=w,jt=m,pt=l,ht=f,ft=q,ut=z;var bt=N,vt=v,gt=V,xt=function(t,s){var e,n,r,i;return e=-s,s=-s,n=t+1,r=1,function(){return i=e/n,e*=s,e/=r+=1,n+=1,i}};var kt=y,wt=function(t,s){var e=s-t+1,n=t,r=0;return function(){return[(r+=1)*(n-r),e+=2]}};var qt=t,zt=s,Nt=e,Vt=n,yt=r,At=i,Bt=m,Ct=a,Dt=o,Et=d,Ft=l,Gt=c,Ht=function(t,s){var e,n,r;if(0!==(n=A(-s)))for(e=n,r=1;r<t;++r)e/=r,n+=e*=s;return n},It=function(t,s){var e,n,r,i;if(0!==(r=B(C(s)))&&t>1){for(e=D(-s)/C(E*s),e*=s,.5,n=e/=.5,i=2;i<t;++i)e/=i-.5,n+=e*=s;r+=n}return r},Jt=function(t,s){var e;return e=t*H(s),s>=1?e<I&&-s>J?G(s,t)*F(-s):t>=1?G(s/F(s/t),t):F(e-s):e>J?G(s,t)*F(-s):s/t<I?G(s/F(s/t),t):F(e-s)},Kt=function(t,s){var e,n,r,i,m;return i=t*(r=-P(1+(n=(s-t)/t))+n),m=M(2*r),s<t&&(m=-m),_[0]=R(m),_[1]=S(m),_[2]=T(m),_[3]=U(m),_[4]=W(m),_[5]=X(m),_[6]=Y(m),_[7]=Z(m),_[8]=$(m),_[9]=-.0005967612901927463,e=K(_,1/t),e*=O(-i)/M(Q*t),s<t&&(e=-e),e+=L(M(i))/2},Lt=function(t,s,e){var n;return e=e||0,n=st(t,s),tt(n,{initialValue:e})},Mt=function(t,s){var e,n,r,i,m,a,o;return o=(s-t-ft+.5)/(r=t+ft-.5),t<1?s<=ht?ot(t*jt(s)-s-nt(t)):dt(s,t)*ot(-s)/rt(t):(at(o*o*t)<=100&&t>150?(e=t*(it(o)-o)+s*(.5-ft)/r,e=ot(e)):(i=t*jt(s/r),ct(i,m=t-s)<=ht||lt(i,m)>=pt?(n=m/t,ct(i,m)/2>ht&&lt(i,m)/2<pt?e=(a=dt(s/r,t/2)*ot(m/2))*a:ct(i,m)/4>ht&&lt(i,m)/4<pt&&s>t?(e=(a=dt(s/r,t/4)*ot(m/4))*a,e*=e):e=n>ht&&n<pt?dt(s*ot(n)/r,t):ot(i+m)):e=dt(s/r,t)*ot(m)),e*=mt(r/ut)/et(t))},Ot=function(t,s,e){var n,r,i,m;return r=((n=gt(t))+1)/t,n-=i=bt(s,t),n/=t,m=xt(t,s),n=-(i+=1)*vt(m,{initialValue:((e?r:0)-n)/i}),e&&(n=-n),[n,r]},Pt=function(t,s){var e=wt(t,s);return 1/(s-t+1+kt(e))};var Qt=function t(s,e,n,r){var i,m,a,o,d,l,c,j,p,h,f,u,b;if(s<0||e<=0)return NaN;if(m=void 0===n||n,c=r,j=0,e>=170&&!m)return c&&4*e<s?(j=e*Bt(s)-s,j+=Bt(Pt(e,s))):!c&&e>4*s?(j=e*Bt(s)-s,j+=Bt(Lt(e,s,o=0)/e)):0===(j=t(e,s,!0,c))?c?(j=Bt(j=1+1/(12*e)+1/(288*e*e))-e+(e-.5)*Bt(e),j+=Bt(Et)):(j=e*Bt(s)-s,j+=Bt(Lt(e,s,o=0)/e)):j=Bt(j)+qt(e),j>Ft?Gt:yt(j);switch(e<30&&e<=s+1&&s<Ft?d=!(p=(u=zt(e))===e)&&.5===Vt(u-e):p=d=!1,p&&s>.6?(c=!c,a=0):d&&s>.2?(c=!c,a=1):s<Ct&&e>1?a=6:s<.5?a=-.4/Bt(s)<e?2:3:s<1.1?a=.75*s<e?2:3:(l=!1,m&&e>20&&(h=Vt((s-e)/e),e>200?20/e>h*h&&(l=!0):h<.4&&(l=!0)),l?a=5:s-1/(3*s)<e?a=2:(a=4,c=!c)),a){case 0:j=Ht(e,s),!1===m&&(j*=Nt(e));break;case 1:j=It(e,s),!1===m&&(j*=Nt(e));break;case 2:0!==(j=m?Mt(e,s):Jt(e,s))&&(o=0,i=!1,c&&(o=m?1:Nt(e),m||j>=1||Dt*j>o?(o/=j,m||e<1||Dt/e>o?(o*=-e,i=!0):o=0):o=0)),j*=Lt(e,s,o)/e,i&&(c=!1,j=-j);break;case 3:j=(f=Ot(e,s,c=!c))[0],b=f[1],c=!1,m&&(j/=b);break;case 4:0!==(j=m?Mt(e,s):Jt(e,s))&&(j*=Pt(e,s));break;case 5:j=Kt(e,s),s>=e&&(c=!c);break;case 6:j=m?At(s,e)/Nt(e+1):At(s,e)/e,j*=1-e*s/(e+1)}return m&&j>1&&(j=1),c&&(j=(m?1:Nt(e))-j),j},Rt=Qt;export{Rt as default};
//# sourceMappingURL=index.mjs.map
