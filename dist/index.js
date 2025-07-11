"use strict";var f=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var E=f(function(le,H){
function H0(r,e){var i=1,s=r,a=e;return t;function t(){var u=i;return i*=s/a,s-=1,u}}H.exports=H0
});var V=f(function(me,R){
var E0=require('@stdlib/math-base-tools-sum-series/dist'),R0=E();function V0(r,e){var i,s;return s=R0(r,e),i=E0(s),i}R.exports=V0
});var W=f(function(oe,U){
var U0=require('@stdlib/math-base-special-exp/dist');function W0(r,e){var i,s,a,t;if(a=U0(-e),s=a,s!==0)for(i=s,t=1;t<r;++t)i/=t,i*=e,s+=i;return s}U.exports=W0
});var D=f(function(pe,B){
var j0=require('@stdlib/math-base-special-erfc/dist'),j=require('@stdlib/math-base-special-sqrt/dist'),B0=require('@stdlib/math-base-special-exp/dist'),D0=require('@stdlib/constants-float64-pi/dist');function J0(r,e){var i,s,a,t,u;if(t=j0(j(e)),t!==0&&r>1){for(s=B0(-e)/j(D0*e),s*=e,i=.5,s/=i,a=s,u=2;u<r;++u)s/=u-i,s*=e,a+=s;t+=a}return t}B.exports=J0
});var Z=f(function(qe,Y){
var c=require('@stdlib/math-base-special-exp/dist'),L=require('@stdlib/math-base-special-pow/dist'),K0=require('@stdlib/math-base-special-ln/dist'),J=require('@stdlib/constants-float64-max-ln/dist'),K=require('@stdlib/constants-float64-min-ln/dist');function Y0(r,e){var i,s;return s=r*K0(e),e>=1?s<J&&-e>K?i=L(e,r)*c(-e):r>=1?i=L(e/c(e/r),r):i=c(s-e):s>K?i=L(e,r)*c(-e):e/r<J?i=L(e/c(e/r),r):i=c(s-e),i}Y.exports=Y0
});var d=f(function(ce,$){
function Z0(r){return r===0?-.3333333333333333:-.3333333333333333+r*(.08333333333333333+r*(-.014814814814814815+r*(.0011574074074074073+r*(.0003527336860670194+r*(-.0001787551440329218+r*(3919263178522438e-20+r*(-21854485106799924e-22+r*(-185406221071516e-20+r*(8296711340953087e-22+r*(-17665952736826078e-23+r*(6707853543401498e-24+r*(10261809784240309e-24+r*(-4382036018453353e-24+r*914769958223679e-24)))))))))))))}$.exports=Z0
});var x=f(function(Ge,z){
function $0(r){return r===0?-.001851851851851852:-.001851851851851852+r*(-.003472222222222222+r*(.0026455026455026454+r*(-.0009902263374485596+r*(.00020576131687242798+r*(-4018775720164609e-22+r*(-18098550334489977e-21+r*(764916091608111e-20+r*(-16120900894563446e-22+r*(4647127802807434e-24+r*(1378633446915721e-22+r*(-5752545603517705e-23+r*11951628599778148e-24)))))))))))}z.exports=$0
});var e0=f(function(Ie,r0){
function d0(r){return r===0?.004133597883597883:.004133597883597883+r*(-.0026813271604938273+r*(.0007716049382716049+r*(20093878600823047e-22+r*(-.00010736653226365161+r*(52923448829120125e-21+r*(-12760635188618728e-21+r*(3423578734096138e-23+r*(13721957309062932e-22+r*(-6298992138380055e-22+r*14280614206064242e-23)))))))))}r0.exports=d0
});var a0=f(function(ye,i0){
function z0(r){return r===0?.0006494341563786008:.0006494341563786008+r*(.00022947209362139917+r*(-.0004691894943952557+r*(.00026772063206283885+r*(-7561801671883977e-20+r*(-2396505113867297e-22+r*(11082654115347302e-21+r*(-56749528269915965e-22+r*14230900732435883e-22)))))))}i0.exports=z0
});var u0=f(function(Se,t0){
function x0(r){return r===0?-.0008618882909167117:-.0008618882909167117+r*(.0007840392217200666+r*(-.0002990724803031902+r*(-14638452578843418e-22+r*(6641498215465122e-20+r*(-3968365047179435e-20+r*11375726970678419e-21)))))}t0.exports=x0
});var v0=f(function(ge,s0){
function rr(r){return r===0?-.00033679855336635813:-.00033679855336635813+r*(-6972813758365858e-20+r*(.0002772753244959392+r*(-.00019932570516188847+r*(6797780477937208e-20+r*(1419062920643967e-22+r*(-13594048189768693e-21+r*(8018470256334202e-21+r*-2291481176508095e-21)))))))}s0.exports=rr
});var f0=f(function(Le,n0){
function er(r){return r===0?.0005313079364639922:.0005313079364639922+r*(-.0005921664373536939+r*(.0002708782096718045+r*(7902353232660328e-22+r*(-8153969367561969e-20+r*(561168275310625e-19+r*-18329116582843375e-21)))))}n0.exports=er
});var m0=f(function(_e,l0){
function ir(r){return r===0?.00034436760689237765:.00034436760689237765+r*(5171790908260592e-20+r*(-.00033493161081142234+r*(.0002812695154763237+r*-.00010976582244684731)))}l0.exports=ir
});var p0=f(function(Ae,o0){
function ar(r){return r===0?-.0006526239185953094:-.0006526239185953094+r*(.0008394987206720873+r*-.000438297098541721)}o0.exports=ar
});var c0=f(function(Fe,q0){
var tr=require('@stdlib/math-base-tools-evalpoly/dist'),ur=require('@stdlib/math-base-special-log1pmx/dist'),sr=require('@stdlib/math-base-special-erfc/dist'),N=require('@stdlib/math-base-special-sqrt/dist'),vr=require('@stdlib/math-base-special-exp/dist'),nr=require('@stdlib/constants-float64-two-pi/dist'),fr=d(),lr=x(),mr=e0(),or=a0(),pr=u0(),qr=v0(),cr=f0(),Gr=m0(),Ir=p0(),m=[0,0,0,0,0,0,0,0,0,0];function yr(r,e){var i,s,a,t,u;return s=(e-r)/r,a=-ur(s),t=r*a,u=N(2*a),e<r&&(u=-u),m[0]=fr(u),m[1]=lr(u),m[2]=mr(u),m[3]=or(u),m[4]=pr(u),m[5]=qr(u),m[6]=cr(u),m[7]=Gr(u),m[8]=Ir(u),m[9]=-.0005967612901927463,i=tr(m,1/r),i*=vr(-t)/N(nr*r),e<r&&(i=-i),i+=sr(N(t))/2,i}q0.exports=yr
});var I0=f(function(Ne,G0){
function Sr(r,e){var i=1,s=r,a=e;return t;function t(){var u=i;return s+=1,i*=a/s,u}}G0.exports=Sr
});var T=f(function(Te,y0){
var gr=require('@stdlib/math-base-tools-sum-series/dist'),Lr=I0();function _r(r,e,i){var s,a;return i=i||0,a=Lr(r,e),s=gr(a,{initialValue:i}),s}y0.exports=_r
});var L0=f(function(we,g0){
var Ar=require('@stdlib/math-base-special-gamma-lanczos-sum-expg-scaled/dist'),Fr=require('@stdlib/math-base-special-gammaln/dist'),Nr=require('@stdlib/math-base-special-gamma/dist'),Tr=require('@stdlib/math-base-special-log1pmx/dist'),wr=require('@stdlib/math-base-special-sqrt/dist'),Pr=require('@stdlib/math-base-special-abs/dist'),q=require('@stdlib/math-base-special-exp/dist'),G=require('@stdlib/math-base-special-pow/dist'),w=require('@stdlib/math-base-special-max/dist'),P=require('@stdlib/math-base-special-min/dist'),S0=require('@stdlib/math-base-special-ln/dist'),Xr=require('@stdlib/constants-float64-max/dist'),_=require('@stdlib/constants-float64-max-ln/dist'),I=require('@stdlib/constants-float64-min-ln/dist'),X=require('@stdlib/constants-float64-gamma-lanczos-g/dist'),br=require('@stdlib/constants-float64-e/dist');function kr(r,e){var i,s,a,t,u,v,p;return a=r+X-.5,p=(e-r-X+.5)/a,r<1?e<=I||r<1/Xr?q(r*S0(e)-e-Fr(r)):G(e,r)*q(-e)/Nr(r):(Pr(p*p*r)<=100&&r>150?(i=r*Tr(p)+e*(.5-X)/a,i=q(i)):(t=r*S0(e/a),u=r-e,P(t,u)<=I||w(t,u)>=_?(s=u/r,P(t,u)/2>I&&w(t,u)/2<_?(v=G(e/a,r/2)*q(u/2),i=v*v):P(t,u)/4>I&&w(t,u)/4<_&&e>r?(v=G(e/a,r/4)*q(u/4),i=v*v,i*=i):s>I&&s<_?i=G(e*q(s)/a,r):i=q(t+u)):i=G(e/a,r)*q(u)),i*=wr(a/br)/Ar(r),i)}g0.exports=kr
});var A0=f(function(Pe,_0){
function Cr(r,e){var i,s,a,t;return i=-e,e=-e,s=r+1,a=1,u;function u(){return t=i/s,i*=e,a+=1,i/=a,s+=1,t}}_0.exports=Cr
});var N0=f(function(Xe,F0){
var Mr=require('@stdlib/math-base-special-powm1/dist'),Or=require('@stdlib/math-base-tools-sum-series/dist'),Qr=require('@stdlib/math-base-special-gamma1pm1/dist'),hr=A0();function Hr(r,e,i){var s,a,t,u,v;return a=Qr(r),t=(a+1)/r,u=Mr(e,r),a-=u,a/=r,v=hr(r,e),u+=1,s=i?t:0,a=-u*Or(v,{initialValue:(s-a)/u}),i&&(a=-a),[a,t]}F0.exports=Hr
});var w0=f(function(be,T0){
function Er(r,e){var i=e-r+1,s=r,a=0;return t;function t(){return a+=1,i+=2,[a*(s-a),i]}}T0.exports=Er
});var b=f(function(ke,P0){
var Rr=require('@stdlib/math-base-tools-continued-fraction/dist'),Vr=w0();function Ur(r,e){var i=Vr(r,e);return 1/(e-r+1+Rr(i))}P0.exports=Ur
});var C0=f(function(Ce,k0){
var Wr=require('@stdlib/math-base-special-floor/dist'),y=require('@stdlib/math-base-special-gamma/dist'),k=require('@stdlib/math-base-special-abs/dist'),X0=require('@stdlib/math-base-special-pow/dist'),jr=require('@stdlib/math-base-special-ln/dist'),Br=require('@stdlib/constants-float64-sqrt-eps/dist'),b0=require('@stdlib/constants-float64-max/dist'),Dr=require('@stdlib/constants-float64-max-ln/dist'),Jr=V(),Kr=W(),Yr=D(),C=Z(),Zr=c0(),$r=T(),M=L0(),dr=N0(),zr=b();function xr(r,e,i,s){var a,t,u,v,p,O,n,l,S,g,A,Q,F,h;switch(n=0,l=s,O=e<30&&e<=r+1&&r<Dr,O?(F=Wr(e),S=F===e,u=S?!1:k(F-e)===.5):(S=!1,u=!1),S&&r>.6?(l=!l,t=0):u&&r>.2?(l=!l,t=1):r<Br&&e>1?t=6:r>1e3&&(e<r||k(e-50)/r<1)?(l=!l,t=7):r<.5?-.4/jr(r)<e?t=2:t=3:r<1.1?r*.75<e?t=2:t=3:(p=!1,i&&e>20&&(g=k((r-e)/e),e>200?20/e>g*g&&(p=!0):g<.4&&(p=!0)),p?t=5:r-1/(3*r)<e?t=2:(t=4,l=!l)),t){case 0:n=Kr(e,r),i===!1&&(n*=y(e));break;case 1:n=Yr(e,r),i===!1&&(n*=y(e));break;case 2:n=i?M(e,r):C(e,r),n!==0&&(v=0,a=!1,l&&(v=i?1:y(e),i||n>=1||b0*n>v?(v/=n,i||e<1||b0/e>v?(v*=-e,a=!0):v=0):v=0),n*=$r(e,r,v)/e,a&&(l=!1,n=-n));break;case 3:l=!l,A=dr(e,r,l),n=A[0],h=A[1],l=!1,i&&(n/=h);break;case 4:n=i?M(e,r):C(e,r),n!==0&&(n*=zr(e,r));break;case 5:n=Zr(e,r),r>=e&&(l=!l);break;case 6:n=i?X0(r,e)/y(e+1):X0(r,e)/e,n*=1-e*r/(e+1);break;case 7:n=i?M(e,r):C(e,r),n/=r,n!==0&&(n*=Jr(e,r));break}return i&&n>1&&(n=1),l&&(Q=i?1:y(e),n=Q-n),n}k0.exports=xr
});var h0=f(function(Me,Q0){
var re=require('@stdlib/math-base-special-gammaln/dist'),ee=require('@stdlib/math-base-special-exp/dist'),o=require('@stdlib/math-base-special-ln/dist'),ie=require('@stdlib/constants-float64-sqrt-two-pi/dist'),ae=require('@stdlib/constants-float64-max-ln/dist'),te=require('@stdlib/constants-float64-pinf/dist'),ue=require('@stdlib/constants-float64-max-nth-factorial/dist'),M0=C0(),O0=T(),se=b();function ve(r,e,i,s){var a,t,u,v;return r<0||e<=0?NaN:(a=i===void 0?!0:i,u=s,e>=ue&&!a?(u&&e*4<r?(v=e*o(r)-r,v+=o(se(e,r))):!u&&e>4*r?(v=e*o(r)-r,t=0,v+=o(O0(e,r,t)/e)):(v=M0(r,e,!0,u),v===0?u?(v=1+1/(12*e)+1/(288*e*e),v=o(v)-e+(e-.5)*o(e),v+=o(ie)):(v=e*o(r)-r,t=0,v+=o(O0(e,r,t)/e)):v=o(v)+re(e)),v>ae?te:ee(v)):M0(r,e,a,u))}Q0.exports=ve
});var ne=h0();module.exports=ne;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
/** @license Apache-2.0 */
/** @license Apache-2.0 */
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
