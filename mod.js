// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function r(r){return r!=r}var n=Number.POSITIVE_INFINITY,e=Number.NEGATIVE_INFINITY;function t(r){return r===n||r===e}function u(r){return Math.abs(r)}var i="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");var f=Object.prototype.toString;var o=Object.prototype.hasOwnProperty;var a,c="function"==typeof Symbol?Symbol.toStringTag:"";a=i&&"symbol"==typeof Symbol.toStringTag?function(r){var n,e,t,u,i;if(null==r)return f.call(r);e=r[c],i=c,n=null!=(u=r)&&o.call(u,i);try{r[c]=void 0}catch(n){return f.call(r)}return t=f.call(r),n?r[c]=e:delete r[c],t}:function(r){return f.call(r)};var l=a,v="function"==typeof Uint32Array;var y="function"==typeof Uint32Array?Uint32Array:null;var s,p="function"==typeof Uint32Array?Uint32Array:void 0;s=function(){var r,n,e;if("function"!=typeof y)return!1;try{n=new y(n=[1,3.14,-3.14,4294967296,4294967297]),e=n,r=(v&&e instanceof Uint32Array||"[object Uint32Array]"===l(e))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?p:function(){throw new Error("not implemented")};var w=s,b="function"==typeof Float64Array;var h="function"==typeof Float64Array?Float64Array:null;var N,d="function"==typeof Float64Array?Float64Array:void 0;N=function(){var r,n,e;if("function"!=typeof h)return!1;try{n=new h([1,3.14,-3.14,NaN]),e=n,r=(b&&e instanceof Float64Array||"[object Float64Array]"===l(e))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?d:function(){throw new Error("not implemented")};var m=N,A="function"==typeof Uint8Array;var _="function"==typeof Uint8Array?Uint8Array:null;var g,U="function"==typeof Uint8Array?Uint8Array:void 0;g=function(){var r,n,e;if("function"!=typeof _)return!1;try{n=new _(n=[1,3.14,-3.14,256,257]),e=n,r=(A&&e instanceof Uint8Array||"[object Uint8Array]"===l(e))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?U:function(){throw new Error("not implemented")};var x=g,j="function"==typeof Uint16Array;var I="function"==typeof Uint16Array?Uint16Array:null;var k,O="function"==typeof Uint16Array?Uint16Array:void 0;k=function(){var r,n,e;if("function"!=typeof I)return!1;try{n=new I(n=[1,3.14,-3.14,65536,65537]),e=n,r=(j&&e instanceof Uint16Array||"[object Uint16Array]"===l(e))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?O:function(){throw new Error("not implemented")};var S,F={uint16:k,uint8:x};(S=new F.uint16(1))[0]=4660;var E=52===new F.uint8(S.buffer)[0],T=!0===E?1:0,H=new m(1),V=new w(H.buffer);function G(r){return H[0]=r,V[T]}var P=!0===E?1:0,L=new m(1),M=new w(L.buffer);function W(r,n){return L[0]=r,M[P]=n>>>0,L[0]}var Y=.6931471803691238,q=1.9082149292705877e-10;function C(n){var t,u,i,f,o,a,c,l,v,y,s,p;return 0===n?e:r(n)||n<0?NaN:(o=0,(u=G(n))<1048576&&(o-=54,u=G(n*=0x40000000000000)),u>=2146435072?n+n:(o+=(u>>20)-1023|0,o+=(l=(u&=1048575)+614244&1048576|0)>>20|0,c=(n=W(n,u|1072693248^l))-1,(1048575&2+u)<3?0===c?0===o?0:o*Y+o*q:(a=c*c*(.5-.3333333333333333*c),0===o?c-a:o*Y-(a-o*q-c)):(l=u-398458|0,v=440401-u|0,f=(s=(p=(y=c/(2+c))*y)*p)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(s),i=p*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(s),a=i+f,(l|=v)>0?(t=.5*c*c,0===o?c-(t-y*(t+a)):o*Y-(t-(y*(t+a)+o*q)-c)):0===o?c-y*(c-a):o*Y-(y*(c-a)-o*q-c))))}var R=Math.floor,z=Math.ceil;function B(r){return r<0?z(r):R(r)}function D(r,n){var e,t,u,i;return u=(i=r*r)*i,t=i*function(r){return 0===r?.0416666666666666:.0416666666666666+r*(2480158728947673e-20*r-.001388888888887411)}(i),t+=u*u*function(r){return 0===r?-2.7557314351390663e-7:r*(2.087572321298175e-9+-11359647557788195e-27*r)-2.7557314351390663e-7}(i),(u=1-(e=.5*i))+(1-u-e+(i*t-r*n))}var J=-.16666666666666632;function K(r,n){var e,t,u;return e=.00833333333332249+(u=r*r)*(27557313707070068e-22*u-.0001984126982985795)+u*(u*u)*(1.58969099521155e-10*u-2.5050760253406863e-8),t=u*r,0===n?r+t*(J+u*e):r-(u*(.5*n-t*e)-n-t*J)}var Q,X,Z=!0===E?0:1,$=new m(1),rr=new w($.buffer);!0===E?(Q=1,X=0):(Q=0,X=1);var nr={HIGH:Q,LOW:X},er=new m(1),tr=new w(er.buffer),ur=nr.HIGH,ir=nr.LOW;function fr(r,n){return tr[ur]=r,tr[ir]=n,er[0]}var or,ar;!0===E?(or=1,ar=0):(or=0,ar=1);var cr={HIGH:or,LOW:ar},lr=new m(1),vr=new w(lr.buffer),yr=cr.HIGH,sr=cr.LOW;function pr(r,n){return lr[0]=n,r[0]=vr[yr],r[1]=vr[sr],r}function wr(r,n){return 1===arguments.length?pr([0,0],r):pr(r,n)}var br=[0,0];function hr(r,n){var e,t;return wr(br,r),e=br[0],e&=2147483647,t=G(n),fr(e|=t&=2147483648,br[1])}function Nr(n,e){return r(e)||t(e)?(n[0]=e,n[1]=0,n):0!==e&&u(e)<22250738585072014e-324?(n[0]=4503599627370496*e,n[1]=-52,n):(n[0]=e,n[1]=0,n)}var dr=[0,0],mr=[0,0];function Ar(u,i){var f,o;return 0===i||0===u||r(u)||t(u)?u:(function(r,n){1===arguments.length?Nr([0,0],r):Nr(r,n)}(dr,u),i+=dr[1],i+=function(r){var n=G(r);return(n=(2146435072&n)>>>20)-1023|0}(u=dr[0]),i<-1074?hr(0,u):i>1023?u<0?e:n:(i<=-1023?(i+=52,o=2220446049250313e-31):o=1,wr(mr,u),f=mr[0],f&=2148532223,o*fr(f|=i+1023<<20,mr[1])))}function _r(r){return function(r,n){var e,t;for(e=[],t=0;t<n;t++)e.push(r);return e}(0,r)}var gr=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],Ur=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],xr=5.960464477539063e-8,jr=_r(20),Ir=_r(20),kr=_r(20),Or=_r(20);function Sr(r,n,e,t,u,i,f,o,a){var c,l,v,y,s,p,w,b,h;for(y=i,h=t[e],b=e,s=0;b>0;s++)l=xr*h|0,Or[s]=h-16777216*l|0,h=t[b-1]+l,b-=1;if(h=Ar(h,u),h-=8*R(.125*h),h-=w=0|h,v=0,u>0?(w+=s=Or[e-1]>>24-u,Or[e-1]-=s<<24-u,v=Or[e-1]>>23-u):0===u?v=Or[e-1]>>23:h>=.5&&(v=2),v>0){for(w+=1,c=0,s=0;s<e;s++)b=Or[s],0===c?0!==b&&(c=1,Or[s]=16777216-b):Or[s]=16777215-b;if(u>0)switch(u){case 1:Or[e-1]&=8388607;break;case 2:Or[e-1]&=4194303}2===v&&(h=1-h,0!==c&&(h-=Ar(1,u)))}if(0===h){for(b=0,s=e-1;s>=i;s--)b|=Or[s];if(0===b){for(p=1;0===Or[i-p];p++);for(s=e+1;s<=e+p;s++){for(a[o+s]=gr[f+s],l=0,b=0;b<=o;b++)l+=r[b]*a[o+(s-b)];t[s]=l}return Sr(r,n,e+=p,t,u,i,f,o,a)}}if(0===h)for(e-=1,u-=24;0===Or[e];)e-=1,u-=24;else(h=Ar(h,-u))>=16777216?(l=xr*h|0,Or[e]=h-16777216*l|0,u+=24,Or[e+=1]=l):Or[e]=0|h;for(l=Ar(1,u),s=e;s>=0;s--)t[s]=l*Or[s],l*=xr;for(s=e;s>=0;s--){for(l=0,p=0;p<=y&&p<=e-s;p++)l+=Ur[p]*t[s+p];kr[e-s]=l}for(l=0,s=e;s>=0;s--)l+=kr[s];for(n[0]=0===v?l:-l,l=kr[0]-l,s=1;s<=e;s++)l+=kr[s];return n[1]=0===v?l:-l,7&w}function Fr(r,n,e,t){var u,i,f,o,a,c,l;for(4,(i=(e-3)/24|0)<0&&(i=0),o=e-24*(i+1),c=i-(f=t-1),l=f+4,a=0;a<=l;a++)jr[a]=c<0?0:gr[c],c+=1;for(a=0;a<=4;a++){for(u=0,c=0;c<=f;c++)u+=r[c]*jr[f+(a-c)];Ir[a]=u}return 4,Sr(r,n,4,Ir,o,4,i,f,jr)}var Er=Math.round;function Tr(r,n,e){var t,u,i,f,o;return i=r-1.5707963267341256*(t=Er(.6366197723675814*r)),f=6077100506506192e-26*t,o=n>>20|0,e[0]=i-f,o-(G(e[0])>>20&2047)>16&&(f=20222662487959506e-37*t-((u=i)-(i=u-(f=6077100506303966e-26*t))-f),e[0]=i-f,o-(G(e[0])>>20&2047)>49&&(f=84784276603689e-45*t-((u=i)-(i=u-(f=20222662487111665e-37*t))-f),e[0]=i-f)),e[1]=i-e[0]-f,t}var Hr=1.5707963267341256,Vr=6077100506506192e-26,Gr=2*Vr,Pr=4*Vr,Lr=[0,0,0],Mr=[0,0];function Wr(r,n){var e,t,u,i,f,o,a;if((u=2147483647&G(r)|0)<=1072243195)return n[0]=r,n[1]=0,0;if(u<=1074752122)return 598523==(1048575&u)?Tr(r,u,n):u<=1073928572?r>0?(a=r-Hr,n[0]=a-Vr,n[1]=a-n[0]-Vr,1):(a=r+Hr,n[0]=a+Vr,n[1]=a-n[0]+Vr,-1):r>0?(a=r-2*Hr,n[0]=a-Gr,n[1]=a-n[0]-Gr,2):(a=r+2*Hr,n[0]=a+Gr,n[1]=a-n[0]+Gr,-2);if(u<=1075594811)return u<=1075183036?1074977148===u?Tr(r,u,n):r>0?(a=r-3*Hr,n[0]=a-1.8231301519518578e-10,n[1]=a-n[0]-1.8231301519518578e-10,3):(a=r+3*Hr,n[0]=a+1.8231301519518578e-10,n[1]=a-n[0]+1.8231301519518578e-10,-3):1075388923===u?Tr(r,u,n):r>0?(a=r-4*Hr,n[0]=a-Pr,n[1]=a-n[0]-Pr,4):(a=r+4*Hr,n[0]=a+Pr,n[1]=a-n[0]+Pr,-4);if(u<1094263291)return Tr(r,u,n);if(u>=2146435072)return n[0]=NaN,n[1]=NaN,0;for(e=function(r){return $[0]=r,rr[Z]}(r),a=fr(u-((t=(u>>20)-1046)<<20|0),e),f=0;f<2;f++)Lr[f]=0|a,a=16777216*(a-Lr[f]);for(Lr[2]=a,i=3;0===Lr[i-1];)i-=1;return o=Fr(Lr,Mr,t,i),r<0?(n[0]=-Mr[0],n[1]=-Mr[1],-o):(n[0]=Mr[0],n[1]=Mr[1],o)}var Yr=[0,0];function qr(r){var n;if(n=G(r),(n&=2147483647)<=1072243195)return n<1044381696?1:D(r,0);if(n>=2146435072)return NaN;switch(3&Wr(r,Yr)){case 0:return D(Yr[0],Yr[1]);case 1:return-K(Yr[0],Yr[1]);case 2:return-D(Yr[0],Yr[1]);default:return K(Yr[0],Yr[1])}}var Cr=[0,0];function Rr(r){var n;if(n=G(r),(n&=2147483647)<=1072243195)return n<1045430272?r:K(r,0);if(n>=2146435072)return NaN;switch(3&Wr(r,Cr)){case 0:return K(Cr[0],Cr[1]);case 1:return D(Cr[0],Cr[1]);case 2:return-K(Cr[0],Cr[1]);default:return-D(Cr[0],Cr[1])}}var zr=3.141592653589793;var Br=1.4616321449683622,Dr=1.4616321449683622;function Jr(e){var i,f,o,a,c,l,v,y,s,p,w,b,h;if(r(e)||t(e))return e;if(0===e)return n;if(e<0?(i=!0,e=-e):i=!1,e<8470329472543003e-37)return-C(e);if(i){if(e>=4503599627370496)return n;if(s=function(n){var e,i;return r(n)||t(n)?NaN:0===(e=u(i=n%2))||1===e?hr(0,i):e<.25?Rr(zr*i):e<.75?hr(qr(zr*(e=.5-e)),i):e<1.25?(i=hr(1,i)-i,Rr(zr*i)):e<1.75?-hr(qr(zr*(e-=1.5)),i):(i-=hr(2,i),Rr(zr*i))}(e),0===s)return n;f=C(zr/u(s*e))}if(1===e||2===e)return 0;if(e<2)switch(e<=.9?(h=-C(e),e>=Br-1+.27?(w=1-e,o=0):e>=Br-1-.27?(w=e-(Dr-1),o=1):(w=e,o=2)):(h=0,e>=Br+.27?(w=2-e,o=0):e>=Br-.27?(w=e-Dr,o=1):(w=e-1,o=2)),o){case 0:l=.07721566490153287+(b=w*w)*function(r){return 0===r?.06735230105312927:.06735230105312927+r*(.007385550860814029+r*(.0011927076318336207+r*(.00022086279071390839+25214456545125733e-21*r)))}(b),c=b*(.3224670334241136+b*function(r){return 0===r?.020580808432516733:.020580808432516733+r*(.0028905138367341563+r*(.0005100697921535113+r*(.00010801156724758394+44864094961891516e-21*r)))}(b)),h+=(v=w*l+c)-.5*w;break;case 1:l=.48383612272381005+(p=(b=w*w)*w)*function(r){return 0===r?-.032788541075985965:r*(.006100538702462913+r*(.00031563207090362595*r-.0014034646998923284))-.032788541075985965}(p),c=p*function(r){return 0===r?.01797067508118204:.01797067508118204+r*(r*(.000881081882437654+-.00031275416837512086*r)-.0036845201678113826)}(p)-.1475877229945939,a=.06462494023913339+p*function(r){return 0===r?-.010314224129834144:r*(.0022596478090061247+r*(.0003355291926355191*r-.0005385953053567405))-.010314224129834144}(p),h+=-.12148629053584961+(v=b*l-(-3638676997039505e-33-p*(c+w*a)));break;case 2:l=w*(w*function(r){return 0===r?.6328270640250934:.6328270640250934+r*(1.4549225013723477+r*(.9777175279633727+r*(.22896372806469245+.013381091853678766*r)))}(w)-.07721566490153287),c=1+w*function(r){return 0===r?2.4559779371304113:2.4559779371304113+r*(2.128489763798934+r*(.7692851504566728+r*(.10422264559336913+.003217092422824239*r)))}(w),h+=-.5*w+l/c}else if(e<8)switch(v=(w=e-(o=B(e)))*(w*function(r){return 0===r?.21498241596060885:.21498241596060885+r*(.325778796408931+r*(.14635047265246445+r*(.02664227030336386+r*(.0018402845140733772+3194753265841009e-20*r))))}(w)-.07721566490153287),y=1+w*function(r){return 0===r?1.3920053346762105:1.3920053346762105+r*(.7219355475671381+r*(.17193386563280308+r*(.01864591917156529+r*(.0007779424963818936+7326684307446256e-21*r))))}(w),h=.5*w+v/y,b=1,o){case 7:b*=w+6;case 6:b*=w+5;case 5:b*=w+4;case 4:b*=w+3;case 3:h+=C(b*=w+2)}else e<0x400000000000000?(s=C(e),p=.4189385332046727+(b=1/e)*function(r){return 0===r?.08333333333333297:.08333333333333297+r*(r*(.0007936505586430196+r*(r*(.0008363399189962821+-.0016309293409657527*r)-.00059518755745034))-.0027777777772877554)}(w=b*b),h=(e-.5)*(s-1)+p):h=e*(C(e)-1);return i&&(h=f-h),h}function Kr(r){return R(r)===r}function Qr(r){return 0===r&&1/r===e}function Xr(r){return Kr(r/2)}function Zr(r){return Xr(r>0?r-1:r+1)}var $r=Math.sqrt,rn=!0===E?0:1,nn=new m(1),en=new w(nn.buffer);function tn(r,n){return nn[0]=r,en[rn]=n>>>0,nn[0]}function un(r){return 0|r}var fn=[1,1.5],on=[0,.5849624872207642],an=[0,1.350039202129749e-8];var cn=1e300,ln=[0,0],vn=[0,0];function yn(i,f){var o,a,c,l,v,y,s,p,w,b,h,N,d,m;if(r(i)||r(f))return NaN;if(wr(ln,f),v=ln[0],0===ln[1]){if(0===f)return 1;if(1===f)return i;if(-1===f)return 1/i;if(.5===f)return $r(i);if(-.5===f)return 1/$r(i);if(2===f)return i*i;if(3===f)return i*i*i;if(4===f)return(i*=i)*i;if(t(f))return function(r,e){return-1===r?(r-r)/(r-r):1===r?1:u(r)<1==(e===n)?0:n}(i,f)}if(wr(ln,i),l=ln[0],0===ln[1]){if(0===l)return function(r,t){return t===e?n:t===n?0:t>0?Zr(t)?r:0:Zr(t)?hr(n,r):n}(i,f);if(1===i)return 1;if(-1===i&&Zr(f))return-1;if(t(i))return i===e?yn(-0,-f):f<0?0:n}if(i<0&&!1===Kr(f))return(i-i)/(i-i);if(c=u(i),o=2147483647&l|0,a=2147483647&v|0,s=v>>>31|0,y=(y=l>>>31|0)&&Zr(f)?-1:1,a>1105199104){if(a>1139802112)return function(r,n){return(2147483647&G(r))<=1072693247?n<0?1/0:0:n>0?1/0:0}(i,f);if(o<1072693247)return 1===s?y*cn*cn:1e-300*y*1e-300;if(o>1072693248)return 0===s?y*cn*cn:1e-300*y*1e-300;h=function(r,n){var e,t,u,i,f,o;return e=(f=1.9259629911266175e-8*(u=n-1)-u*u*(0===(o=u)?.5:.5+o*(.25*o-.3333333333333333))*1.4426950408889634)-((t=tn(t=(i=1.4426950216293335*u)+f,0))-i),r[0]=t,r[1]=e,r}(vn,c)}else h=function(r,n,e){var t,u,i,f,o,a,c,l,v,y,s,p,w,b,h,N,d,m,A,_,g;return m=0,e<1048576&&(m-=53,e=G(n*=9007199254740992)),m+=(e>>20)-1023|0,e=1072693248|(A=1048575&e|0),A<=235662?_=0:A<767610?_=1:(_=0,m+=1,e-=1048576),f=tn(u=(N=(n=W(n,e))-(c=fn[_]))*(d=1/(n+c)),0),t=524288+(e>>1|536870912),a=W(0,t+=_<<18),h=(i=u*u)*i*(0===(g=i)?.5999999999999946:.5999999999999946+g*(.4285714285785502+g*(.33333332981837743+g*(.272728123808534+g*(.23066074577556175+.20697501780033842*g))))),a=tn(a=3+(i=f*f)+(h+=(o=d*(N-f*a-f*(n-(a-c))))*(f+u)),0),w=(s=-7.028461650952758e-9*(v=tn(v=(N=f*a)+(d=o*a+(h-(a-3-i))*u),0))+.9617966939259756*(d-(v-N))+an[_])-((p=tn(p=(y=.9617967009544373*v)+s+(l=on[_])+(b=m),0))-b-l-y),r[0]=p,r[1]=w,r}(vn,c,o);if(b=(f-(p=tn(f,0)))*h[0]+f*h[1],w=p*h[0],wr(ln,N=b+w),d=un(ln[0]),m=un(ln[1]),d>=1083179008){if(0!=(d-1083179008|m))return y*cn*cn;if(b+8008566259537294e-32>N-w)return y*cn*cn}else if((2147483647&d)>=1083231232){if(0!=(d-3230714880|m))return 1e-300*y*1e-300;if(b<=N-w)return 1e-300*y*1e-300}return N=function(r,n,e){var t,u,i,f,o,a,c,l,v,y,s;return y=((v=2147483647&r|0)>>20)-1023|0,l=0,v>1071644672&&(t=((l=r+(1048576>>y+1)>>>0)&~(1048575>>(y=((2147483647&l)>>20)-1023|0)))>>>0,l=(1048575&l|1048576)>>20-y>>>0,r<0&&(l=-l),n-=i=W(0,t)),r=un(r=G(c=1-((c=(f=.6931471824645996*(i=tn(i=e+n,0)))+(o=.6931471805599453*(e-(i-n))+-1.904654299957768e-9*i))*(u=c-(i=c*c)*(0===(s=i)?.16666666666666602:.16666666666666602+s*(s*(6613756321437934e-20+s*(4.1381367970572385e-8*s-16533902205465252e-22))-.0027777777777015593)))/(u-2)-((a=o-(c-f))+c*a)-c))),(r+=l<<20>>>0)>>20<=0?Ar(c,l):W(c,r)}(d,w,b),y*N}function sn(t){var u;return r(t)||t===n?t:t===e?0:t>709.782712893384?n:t<-745.1332191019411?0:t>-3.725290298461914e-9&&t<3.725290298461914e-9?1+t:function(r,n,e){var t,u,i,f;return Ar(1-(n-(t=r-n)*(i=t-(u=t*t)*(0===(f=u)?.16666666666666602:.16666666666666602+f*(f*(6613756321437934e-20+f*(4.1381367970572385e-8*f-16533902205465252e-22))-.0027777777777015593)))/(2-i)-r),e)}(t-.6931471803691238*(u=B(t<0?1.4426950408889634*t-.5:1.4426950408889634*t+.5)),1.9082149292705877e-10*u,u)}function pn(r){var n,e,t;return n=1+(n=1/r)*function(r){return 0===r?.08333333333334822:.08333333333334822+r*(.0034722222160545866+r*(r*(.0007873113957930937*r-.00022954996161337813)-.0026813261780578124))}(n),e=sn(r),2.5066282746310007*(e=r>143.01608?(t=yn(r,.5*r-.25))*(t/e):yn(r,r-.5)/e)*n}function wn(r,n){return n/((1+.5772156649015329*r)*r)}function bn(t){var i,f,o,a;if(Kr(t)&&t<0||t===e||r(t))return NaN;if(0===t)return Qr(t)?e:n;if(t>171.61447887182297)return n;if(t<-170.5674972726612)return 0;if((f=u(t))>33)return t>=0?pn(t):(i=0==(1&(o=R(f)))?-1:1,(a=f-o)>.5&&(a=f-(o+=1)),a=f*Rr(zr*a),i*zr/(u(a)*pn(f)));for(a=1;t>=3;)a*=t-=1;for(;t<0;){if(t>-1e-9)return wn(t,a);a/=t,t+=1}for(;t<2;){if(t<1e-9)return wn(t,a);a/=t,t+=1}return 2===t?a:a*function(r){var n,e;return 0===r?1:((r<0?-r:r)<=1?(n=1+r*(.4942148268014971+r*(.20744822764843598+r*(.04763678004571372+r*(.010421379756176158+r*(.0011913514700658638+r*(.00016011952247675185+0*r)))))),e=1+r*(.0714304917030273+r*(r*(.035823639860549865+r*(.011813978522206043+r*(r*(.0005396055804933034+-23158187332412014e-21*r)-.004456419138517973)))-.23459179571824335))):(n=0+(r=1/r)*(.00016011952247675185+r*(.0011913514700658638+r*(.010421379756176158+r*(.04763678004571372+r*(.20744822764843598+r*(.4942148268014971+1*r)))))),e=r*(.0005396055804933034+r*(r*(.011813978522206043+r*(.035823639860549865+r*(r*(.0714304917030273+1*r)-.23459179571824335)))-.004456419138517973))-23158187332412014e-21),n/e)}(t-=2)}var hn=17976931348623157e292;var Nn=.8450629115104675;function dn(t){var u,i,f,o,a,c,l,v;if(r(t))return NaN;if(t===n)return 0;if(t===e)return 2;if(0===t)return 1;if(t<0?(u=!0,i=-t):(u=!1,i=t),i<.84375)return i<13877787807814457e-33?1-t:(o=.12837916709551256+(f=t*t)*function(r){return 0===r?-.3250421072470015:r*(r*(-23763016656650163e-21*r-.005770270296489442)-.02848174957559851)-.3250421072470015}(f),a=1+f*function(r){return 0===r?.39791722395915535:.39791722395915535+r*(.0650222499887673+r*(.005081306281875766+r*(.00013249473800432164+-3960228278775368e-21*r)))}(f),c=o/a,t<.25?1-(t+t*c):(o=t*c,.5-(o+=t-.5)));if(i<1.25)return l=(a=i-1)*function(r){return 0===r?.41485611868374833:.41485611868374833+r*(r*(.31834661990116175+r*(r*(.035478304325618236+-.002166375594868791*r)-.11089469428239668))-.3722078760357013)}(a)-.0023621185607526594,v=1+a*function(r){return 0===r?.10642088040084423:.10642088040084423+r*(.540397917702171+r*(.07182865441419627+r*(.12617121980876164+r*(.01363708391202905+.011984499846799107*r))))}(a),u?1+Nn+l/v:1-Nn-l/v;if(i<28){if(a=1/(i*i),i<2.857142857142857)o=a*function(r){return 0===r?-.6938585727071818:r*(r*(r*(r*(r*(-9.814329344169145*r-81.2874355063066)-184.60509290671104)-162.39666946257347)-62.375332450326006)-10.558626225323291)-.6938585727071818}(a)-.009864944034847148,a=1+a*function(r){return 0===r?19.651271667439257:19.651271667439257+r*(137.65775414351904+r*(434.56587747522923+r*(645.3872717332679+r*(429.00814002756783+r*(108.63500554177944+r*(6.570249770319282+-.0604244152148581*r))))))}(a);else{if(t<-6)return 2;o=a*function(r){return 0===r?-.799283237680523:r*(r*(r*(r*(-483.5191916086514*r-1025.0951316110772)-637.5664433683896)-160.63638485582192)-17.757954917754752)-.799283237680523}(a)-.0098649429247001,a=1+a*function(r){return 0===r?30.33806074348246:30.33806074348246+r*(325.7925129965739+r*(1536.729586084437+r*(3199.8582195085955+r*(2553.0504064331644+r*(474.52854120695537+-22.44095244658582*r)))))}(a)}return o=sn(-(f=tn(i,0))*f-.5625)*sn((f-i)*(f+i)+o/a),u?2-o/i:o/i}return u?2:0}function mn(r,n){var e;return e=r*C(n),n>=1?e<709.782712893384&&-n>-708.3964185322641?yn(n,r)*sn(-n):r>=1?yn(n/sn(n/r),r):sn(e-n):e>-708.3964185322641?yn(n,r)*sn(-n):n/r<709.782712893384?yn(n/sn(n/r),r):sn(e-n)}var An="function"==typeof Object.defineProperty?Object.defineProperty:null;var _n,gn=Object.defineProperty,Un=Object.prototype,xn=Un.toString,jn=Un.__defineGetter__,In=Un.__defineSetter__,kn=Un.__lookupGetter__,On=Un.__lookupSetter__;function Sn(r,n){var e,t;if((t=r.length)<2||0===n)return 0===t?0:r[0];for(e=r[t-=1]*n+r[t-1],t-=2;t>=0;)e=e*n+r[t],t-=1;return e}_n=function(){try{return An({},"x",{}),!0}catch(r){return!1}}()?gn:function(r,n,e){var t,u,i,f;if("object"!=typeof r||null===r||"[object Array]"===xn.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof e||null===e||"[object Array]"===xn.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((u="value"in e)&&(kn.call(r,n)||On.call(r,n)?(t=r.__proto__,r.__proto__=Un,delete r[n],r[n]=e.value,r.__proto__=t):r[n]=e.value),i="get"in e,f="set"in e,u&&(i||f))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&jn&&jn.call(r,n,e.get),f&&In&&In.call(r,n,e.set),r},_n(Sn,"factory",{configurable:!1,enumerable:!1,writable:!1,value:function(r){var n,e,t,u;if(r.length>500)return function(n){return Sn(r,n)};if(n="return function evalpoly(x){",0===(e=r.length))n+="return 0.0;";else if(1===e)n+="return "+r[0]+";";else{for(n+="if(x===0.0){return "+r[0]+";}",n+="return "+r[0],t=e-1,u=1;u<e;u++)n+="+x*",u<t&&(n+="("),n+=r[u];for(u=0;u<t-1;u++)n+=")";n+=";"}return n+="}",n+="//# sourceURL=evalpoly.factory.js",new Function(n)()}});var Fn=[0,0,0,0,0,0,0,0,0,0];var En=eval;function Tn(){var r;try{En('"use strict"; (function* () {})'),r=!0}catch(n){r=!1}return r}var Hn=2220446049250313e-31;var Vn=Tn()?function(r,n){var e,t,i,f,o;if(o={},arguments.length>1&&(o=n),e=o.tolerance||Hn,i=o.maxTerms||1e6,f=o.initialValue||0,!0==("function"==typeof r.next)){for(t of r)if(u(e*(f+=t))>=u(t)||0==--i)break}else do{f+=t=r()}while(u(e*f)<u(t)&&--i);return f}:function(r,n){var e,t,i,f,o;o={},arguments.length>1&&(o=n),e=o.tolerance||Hn,i=o.maxTerms||1e6,f=o.initialValue||0;do{f+=t=r()}while(u(e*f)<u(t)&&--i);return f};function Gn(r,n,e){var t;return e=e||0,t=function(r,n){var e=1,t=r,u=n;return function(){var r=e;return e*=u/(t+=1),r}}(r,n),Vn(t,{initialValue:e})}var Pn=.6931471803691238,Ln=1.9082149292705877e-10;function Mn(t){var u,i,f,o,a,c,l,v,y,s;if(t<-1||r(t))return NaN;if(-1===t)return e;if(t===n)return t;if(0===t)return t;if(s=1,(f=t<0?-t:t)<.41421356237309503){if(f<1.862645149230957e-9)return f<5551115123125783e-32?t:t-t*t*.5;t>-.2928932188134525&&(s=0,o=t,i=1)}return 0!==s&&(f<9007199254740992?(a=(s=((i=G(y=1+t))>>20)-1023)>0?1-(y-t):t-(y-1),a/=y):(s=((i=G(y=t))>>20)-1023,a=0),(i&=1048575)<434334?y=W(y,1072693248|i):(s+=1,y=W(y,1071644672|i),i=1048576-i>>2),o=y-1),u=.5*o*o,0===i?0===o?s*Pn+(a+=s*Ln):s*Pn-((v=u*(1-.6666666666666666*o))-(s*Ln+a)-o):(v=(l=(c=o/(2+o))*c)*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.3999999999940942+r*(.2857142874366239+r*(.22222198432149784+r*(.1818357216161805+r*(.15313837699209373+.14798198605116586*r)))))}(l),0===s?o-(u-c*(u+v)):s*Pn-(u-(c*(u+v)+(s*Ln+a))-o))}function Wn(r){return 0===r&&1/r===n}function Yn(t,u){var i,f,o,a;if(2===(i=arguments.length))return r(t)||r(u)?NaN:t===n||u===n?n:t===u&&0===t?Wn(t)?t:u:t>u?t:u;for(f=e,a=0;a<i;a++){if(r(o=arguments[a])||o===n)return o;(o>f||o===f&&0===o&&Wn(o))&&(f=o)}return f}function qn(t,u){var i,f,o,a;if(2===(i=arguments.length))return r(t)||r(u)?NaN:t===e||u===e?e:t===u&&0===t?Qr(t)?t:u:t<u?t:u;for(f=n,a=0;a<i;a++){if(r(o=arguments[a])||o===e)return o;(o<f||o===f&&0===o&&Qr(o))&&(f=o)}return f}function Cn(r,n){var e,t,i,f,o,a,c,l,v,y;return c=(n-r-10.900511+.5)/(i=r+10.900511-.5),r<1?n<=-708.3964185322641?sn(r*C(n)-n-Jr(r)):yn(n,r)*sn(-n)/bn(r):(u(c*c*r)<=100&&r>150?e=sn(e=r*(Mn(c)-c)+-10.400511*n/i):qn(f=r*C(n/i),o=r-n)<=-708.3964185322641||Yn(f,o)>=709.782712893384?(t=o/r,qn(f,o)/2>-708.3964185322641&&Yn(f,o)/2<709.782712893384?e=(a=yn(n/i,r/2)*sn(o/2))*a:qn(f,o)/4>-708.3964185322641&&Yn(f,o)/4<709.782712893384&&n>r?(e=(a=yn(n/i,r/4)*sn(o/4))*a,e*=e):e=t>-708.3964185322641&&t<709.782712893384?yn(n*sn(t)/i,r):sn(f+o)):e=yn(n/i,r)*sn(o),e*=$r(i/2.718281828459045)/(0===(l=r)?1/0:((l<0?-l:l)<=1?(v=709811.662581658+l*(679979.8474157227+l*(293136.7857211597+l*(74887.54032914672+l*(12555.290582413863+l*(1443.4299244417066+l*(115.24194596137347+l*(6.309239205732627+l*(.22668404630224365+l*(.004826466289237662+4624429436045379e-20*l))))))))),y=0+l*(362880+l*(1026576+l*(1172700+l*(723680+l*(269325+l*(63273+l*(9450+l*(870+l*(45+1*l)))))))))):(v=4624429436045379e-20+(l=1/l)*(.004826466289237662+l*(.22668404630224365+l*(6.309239205732627+l*(115.24194596137347+l*(1443.4299244417066+l*(12555.290582413863+l*(74887.54032914672+l*(293136.7857211597+l*(679979.8474157227+709811.662581658*l))))))))),y=1+l*(45+l*(870+l*(9450+l*(63273+l*(269325+l*(723680+l*(1172700+l*(1026576+l*(362880+0*l)))))))))),v/y)))}var Rn=.6931471803691238,zn=1.9082149292705877e-10;function Bn(t){var u,i,f,o,a,c,l,v,y,s,p,w;if(t===n||r(t))return t;if(t===e)return-1;if(0===t)return t;if(t<0?(i=!0,l=-t):(i=!1,l=t),l>=38.816242111356935){if(i)return-1;if(l>=709.782712893384)return n}if(a=0|G(l),l>.34657359027997264)l<1.0397207708399179?i?(f=t+Rn,o=-zn,w=-1):(f=t-Rn,o=zn,w=1):(w=i?1.4426950408889634*t-.5:1.4426950408889634*t+.5,f=t-(s=w|=0)*Rn,o=s*zn),y=f-(t=f-o)-o;else{if(a<1016070144)return t;w=0}return c=1+(v=t*(u=.5*t))*function(r){return 0===r?-.03333333333333313:r*(.0015873015872548146+r*(r*(4008217827329362e-21+-2.0109921818362437e-7*r)-793650757867488e-19))-.03333333333333313}(v),p=v*((c-(s=3-c*u))/(6-t*s)),0===w?t-(t*p-v):(p=t*(p-y)-y,p-=v,-1===w?.5*(t-p)-.5:1===w?t<-.25?-2*(p-(t+.5)):1+2*(t-p):w<=-2||w>56?(l=W(l=1-(p-t),f=G(l)+(w<<20)|0))-1:(s=1,w<20?l=(s=W(s,f=1072693248-(2097152>>w)|0))-(p-t):(l=t-(p+(s=W(s,f=1023-w<<20|0))),l+=1),W(l,f=G(l)+(w<<20)|0)))}function Dn(r,n,e){var t,u,i,f,o,a,c;if(r<Hn)return-C(r);if(0===n||0===e)return 0;if(u=0,r>2){if(r>=3){do{e-=1,u+=C(r-=1)}while(r>=3);e=r-2}return u+=.15896368026733398*(i=e*(r+1))+i*(f=0===(o=e)?-.01803556856784494:((o<0?-o:o)<=1?(a=o*(.02512664961998968+o*(.049410315156753225+o*(.0172491608709614+o*(o*(o*(0*o-3245886498259485e-20)-.0005410098692152044)-.0002594535632054381))))-.01803556856784494,c=1+o*(1.962029871977952+o*(1.4801966942423133+o*(.5413914320717209+o*(.09885042511280101+o*(.008213096746488934+o*(.00022493629192211576+-2.2335276320861708e-7*o))))))):(a=0+(o=1/o)*(o*(o*(o*(.0172491608709614+o*(.049410315156753225+o*(.02512664961998968+-.01803556856784494*o)))-.0002594535632054381)-.0005410098692152044)-3245886498259485e-20),c=o*(.00022493629192211576+o*(.008213096746488934+o*(.09885042511280101+o*(.5413914320717209+o*(1.4801966942423133+o*(1.962029871977952+1*o))))))-2.2335276320861708e-7),a/c))}return r<1&&(u+=-C(r),e=n,n=r,r+=1),r<=1.5?(i=function(r){var n,e;return 0===r?.04906224540690395:((r<0?-r:r)<=1?(n=.04906224540690395+r*(r*(r*(r*(r*(-.0010034668769627955*r-.024014982064857155)-.1584135863906922)-.4065671242119384)-.4149833583594954)-.09691175301595212),e=1+r*(3.0234982984646304+r*(3.4873958536072385+r*(1.9141558827442668+r*(.5071377386143635+r*(.05770397226904519+.001957681026011072*r)))))):(n=(r=1/r)*(r*(r*(r*(r*(.04906224540690395*r-.09691175301595212)-.4149833583594954)-.4065671242119384)-.1584135863906922)-.024014982064857155)-.0010034668769627955,e=.001957681026011072+r*(.05770397226904519+r*(.5071377386143635+r*(1.9141558827442668+r*(3.4873958536072385+r*(3.0234982984646304+1*r)))))),n/e)}(n),u+=.5281534194946289*(t=n*e)+t*i):(i=e*n,f=function(r){var n,e;return 0===r?-.029232972183027003:((r<0?-r:r)<=1?(n=r*(.14421626775719232+r*(r*(.05428096940550536+r*(r*(.0004311713426792973+0*r)-.008505359768683364))-.14244039073863127))-.029232972183027003,e=1+r*(r*(.846973248876495+r*(r*(.02558279715597587+r*(-8.271935218912905e-7*r-.0010066679553914337))-.22009515181499575))-1.5016935605448505)):(n=0+(r=1/r)*(.0004311713426792973+r*(r*(.05428096940550536+r*(r*(.14421626775719232+-.029232972183027003*r)-.14244039073863127))-.008505359768683364)),e=r*(r*(.02558279715597587+r*(r*(.846973248876495+r*(1*r-1.5016935605448505))-.22009515181499575))-.0010066679553914337)-8.271935218912905e-7),n/e)}(-e),u+=.45201730728149414*i+i*f)}function Jn(n,e,t){var i,f,o,a;return i=function(n){return r(n)?NaN:n<0?n<-.5?bn(1+n)-1:Bn(-Mn(n)+Dn(n+2,n+1,n)):n<2?Bn(Dn(n+1,n,n-1)):bn(1+n)-1}(n),f=(i+1)/n,o=function(n,e){var t;if(r(n)||r(e))return NaN;if(0===e)return 0;if(0===n)return-1;if(n<0&&e%2==0&&(n=-n),n>0){if((u(e*(n-1))<.5||u(e)<.2)&&(t=C(n)*e)<.5)return Bn(t)}else if(B(e)!==e)return NaN;return yn(n,e)-1}(e,n),i-=o,i/=n,a=function(r,n){var e,t,u,i;return e=-n,n=-n,t=r+1,u=1,function(){return i=e/t,e*=n,e/=u+=1,t+=1,i}}(n,e),i=-(o+=1)*Vn(a,{initialValue:((t?f:0)-i)/o}),t&&(i=-i),[i,f]}function Kn(r,n,e){var t,i,f,o,a,c,l;if(o=(l=(t="function"==typeof r.next)?r.next().value:r())[1],f=l[0],0===o&&(o=11754943508222875e-54),a=o,c=0,!0===t)do{(l=r.next().value)&&(0===(c=l[1]+l[0]*c)&&(c=11754943508222875e-54),0===(a=l[1]+l[0]/a)&&(a=11754943508222875e-54),o*=i=a*(c=1/c))}while(u(i-1)>n&&--e);else do{(l=r())&&(0===(c=l[1]+l[0]*c)&&(c=11754943508222875e-54),0===(a=l[1]+l[0]/a)&&(a=11754943508222875e-54),o*=i=a*(c=1/c))}while(l&&u(i-1)>n&&--e);return f/o}function Qn(r,n,e){var t,i,f,o,a,c;if(0===(f=(c=(t="function"==typeof r.next)?r.next().value:r())[1])&&(f=11754943508222875e-54),o=f,a=0,!0===t)do{(c=r.next().value)&&(0===(a=c[1]+c[0]*a)&&(a=11754943508222875e-54),0===(o=c[1]+c[0]/o)&&(o=11754943508222875e-54),f*=i=o*(a=1/a))}while(c&&u(i-1)>n&&--e);else do{(c=r())&&(0===(a=c[1]+c[0]*a)&&(a=11754943508222875e-54),0===(o=c[1]+c[0]/o)&&(o=11754943508222875e-54),f*=i=o*(a=1/a))}while(c&&u(i-1)>n&&--e);return f}function Xn(r,n,e){var t,i,f,o,a,c;a=(c=r())[1],i=c[0],0===a&&(a=11754943508222875e-54),f=a,o=0;do{(c=r())&&(0===(o=c[1]+c[0]*o)&&(o=11754943508222875e-54),0===(f=c[1]+c[0]/f)&&(f=11754943508222875e-54),a*=t=f*(o=1/o))}while(c&&u(t-1)>n&&--e);return i/a}function Zn(r,n,e){var t,i,f,o,a;0===(o=(a=r())[1])&&(o=11754943508222875e-54),i=o,f=0;do{(a=r())&&(0===(f=a[1]+a[0]*f)&&(f=11754943508222875e-54),0===(i=a[1]+a[0]/i)&&(i=11754943508222875e-54),o*=t=i*(f=1/f))}while(a&&u(t-1)>n&&--e);return o}var $n=Tn()?function(r,n){var e,t,u;return t={},arguments.length>1&&(t=n),e=t.maxIter||1e6,u=t.tolerance||Hn,t.keep?Qn(r,u,e):Kn(r,u,e)}:function(r,n){var e,t,u;return t={},arguments.length>1&&(t=n),u=t.tolerance||Hn,e=t.maxIter||1e6,t.keep?Zn(r,u,e):Xn(r,u,e)};function re(r,n){var e=function(r,n){var e=n-r+1,t=r,u=0;return function(){return[(u+=1)*(t-u),e+=2]}}(r,n);return 1/(n-r+1+$n(e))}function ne(r,e,t,i){var f,o,a,c,l,v,y,s,p,w,b,h,N;if(r<0||e<=0)return NaN;if(o=void 0===t||t,y=i,s=0,e>=170&&!o)return y&&4*e<r?(s=e*C(r)-r,s+=C(re(e,r))):!y&&e>4*r?(s=e*C(r)-r,s+=C(Gn(e,r,c=0)/e)):0===(s=ne(e,r,!0,y))?y?(s=C(s=1+1/(12*e)+1/(288*e*e))-e+(e-.5)*C(e),s+=C(2.5066282746310007)):(s=e*C(r)-r,s+=C(Gn(e,r,c=0)/e)):s=C(s)+Jr(e),s>709.782712893384?n:sn(s);switch(e<30&&e<=r+1&&r<709.782712893384?l=!(p=(h=R(e))===e)&&.5===u(h-e):p=l=!1,p&&r>.6?(y=!y,a=0):l&&r>.2?(y=!y,a=1):r<1.4901161193847656e-8&&e>1?a=6:r<.5?a=-.4/C(r)<e?2:3:r<1.1?a=.75*r<e?2:3:(v=!1,o&&e>20&&(w=u((r-e)/e),e>200?20/e>w*w&&(v=!0):w<.4&&(v=!0)),v?a=5:r-1/(3*r)<e?a=2:(a=4,y=!y)),a){case 0:s=function(r,n){var e,t,u;if(0!==(t=sn(-n)))for(e=t,u=1;u<r;++u)e/=u,t+=e*=n;return t}(e,r),!1===o&&(s*=bn(e));break;case 1:s=function(r,n){var e,t,u,i;if(0!==(u=dn($r(n)))&&r>1){for(e=sn(-n)/$r(zr*n),e*=n,t=e/=.5,i=2;i<r;++i)e/=i-.5,t+=e*=n;u+=t}return u}(e,r),!1===o&&(s*=bn(e));break;case 2:0!==(s=o?Cn(e,r):mn(e,r))&&(c=0,f=!1,y&&(c=o?1:bn(e),o||s>=1||hn*s>c?(c/=s,o||e<1||hn/e>c?(c*=-e,f=!0):c=0):c=0)),s*=Gn(e,r,c)/e,f&&(y=!1,s=-s);break;case 3:s=(b=Jn(e,r,y=!y))[0],N=b[1],y=!1,o&&(s/=N);break;case 4:0!==(s=o?Cn(e,r):mn(e,r))&&(s*=re(e,r));break;case 5:s=function(r,n){var e,t,u,i,f;return i=r*(u=-C(1+(t=(n-r)/r))+t),f=$r(2*u),n<r&&(f=-f),Fn[0]=function(r){return 0===r?-.3333333333333333:r*(.08333333333333333+r*(r*(.0011574074074074073+r*(.0003527336860670194+r*(r*(3919263178522438e-20+r*(r*(r*(8.296711340953087e-7+r*(r*(6.707853543401498e-9+r*(1.0261809784240309e-8+r*(9.14769958223679e-10*r-4.382036018453353e-9)))-1.7665952736826078e-7))-185406221071516e-20)-21854485106799924e-22))-.0001787551440329218)))-.014814814814814815))-.3333333333333333}(f),Fn[1]=function(r){return 0===r?-.001851851851851852:r*(r*(.0026455026455026454+r*(r*(.00020576131687242798+r*(r*(r*(764916091608111e-20+r*(r*(4.647127802807434e-9+r*(1.378633446915721e-7+r*(1.1951628599778148e-8*r-5.752545603517705e-8)))-16120900894563446e-22))-18098550334489977e-21)-4.018775720164609e-7))-.0009902263374485596))-.003472222222222222)-.001851851851851852}(f),Fn[2]=function(r){return 0===r?.004133597883597883:.004133597883597883+r*(r*(.0007716049382716049+r*(20093878600823047e-22+r*(r*(52923448829120125e-21+r*(r*(3.423578734096138e-8+r*(13721957309062932e-22+r*(1.4280614206064242e-7*r-6.298992138380055e-7)))-12760635188618728e-21))-.00010736653226365161)))-.0026813271604938273)}(f),Fn[3]=function(r){return 0===r?.0006494341563786008:.0006494341563786008+r*(.00022947209362139917+r*(r*(.00026772063206283885+r*(r*(r*(11082654115347302e-21+r*(14230900732435883e-22*r-56749528269915965e-22))-2.396505113867297e-7)-7561801671883977e-20))-.0004691894943952557))}(f),Fn[4]=function(r){return 0===r?-.0008618882909167117:r*(.0007840392217200666+r*(r*(r*(6641498215465122e-20+r*(11375726970678419e-21*r-3968365047179435e-20))-14638452578843418e-22)-.0002990724803031902))-.0008618882909167117}(f),Fn[5]=function(r){return 0===r?-.00033679855336635813:r*(r*(.0002772753244959392+r*(r*(6797780477937208e-20+r*(1.419062920643967e-7+r*(r*(8018470256334202e-21+-2291481176508095e-21*r)-13594048189768693e-21)))-.00019932570516188847))-6972813758365858e-20)-.00033679855336635813}(f),Fn[6]=function(r){return 0===r?.0005313079364639922:.0005313079364639922+r*(r*(.0002708782096718045+r*(7.902353232660328e-7+r*(r*(561168275310625e-19+-18329116582843375e-21*r)-8153969367561969e-20)))-.0005921664373536939)}(f),Fn[7]=function(r){return 0===r?.00034436760689237765:.00034436760689237765+r*(5171790908260592e-20+r*(r*(.0002812695154763237+-.00010976582244684731*r)-.00033493161081142234))}(f),Fn[8]=function(r){return 0===r?-.0006526239185953094:r*(.0008394987206720873+-.000438297098541721*r)-.0006526239185953094}(f),Fn[9]=-.0005967612901927463,e=Sn(Fn,1/r),e*=sn(-i)/$r(6.283185307179586*r),n<r&&(e=-e),e+dn($r(i))/2}(e,r),r>=e&&(y=!y);break;case 6:s=o?yn(r,e)/bn(e+1):yn(r,e)/e,s*=1-e*r/(e+1)}return o&&s>1&&(s=1),y&&(s=(o?1:bn(e))-s),s}export{ne as default};
//# sourceMappingURL=mod.js.map
