var t=Object.defineProperty,e=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,n=(e,a,s)=>a in e?t(e,a,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[a]=s,o=(t,o)=>{for(var r in o||(o={}))a.call(o,r)&&n(t,r,o[r]);if(e)for(var r of e(o))s.call(o,r)&&n(t,r,o[r]);return t};"undefined"!=typeof require&&require;import{S as r,i as l,s as p,K as c,B as i,e as u,c as d,a as m,d as $,a0 as f,f as b,D as g,a1 as h,L as y,M as v,N as x,p as _,a2 as E,x as j,u as w,a3 as A,a4 as S,a5 as T,a6 as C,A as B,a7 as O,a8 as I,a9 as P,aa as M,ab as N,F as R,G as q,y as D,j as L,l as H,m as U,o as k,q as z,r as Y,v as F,w as G,ac as K,R as V}from"./vendor-d45173d4.js";import{c as W,u as J,f as Q,d as X,a as Z}from"./useActions-a8b3ee75.js";import{D as tt,a as et,M as at}from"./Ripple-16cbe826.js";const{window:st}=R;function nt(t){let e,a,s,n,r,l,p;const S=t[22].default,T=c(S,t,t[21],null);let C=[{class:a=W(o({[t[2]]:!0,"mdc-top-app-bar":!0,"mdc-top-app-bar--short":"short"===t[4],"mdc-top-app-bar--short-collapsed":t[0],"mdc-top-app-bar--fixed":"fixed"===t[4],"smui-top-app-bar--static":"static"===t[4],"smui-top-app-bar--color-secondary":"secondary"===t[5],"mdc-top-app-bar--prominent":t[6],"mdc-top-app-bar--dense":t[7]},t[11]))},{style:s=Object.entries(t[12]).map(ot).concat([t[3]]).join(" ")},t[15]],B={};for(let o=0;o<C.length;o+=1)B=i(B,C[o]);return{c(){e=u("header"),T&&T.c(),this.h()},l(t){e=d(t,"HEADER",{class:!0,style:!0});var a=m(e);T&&T.l(a),a.forEach($),this.h()},h(){f(e,B)},m(a,s){b(a,e,s),T&&T.m(e,null),t[25](e),r=!0,l||(p=[g(st,"resize",t[23]),g(st,"scroll",t[24]),h(n=J.call(null,e,t[1])),h(t[13].call(null,e)),g(e,"SMUITopAppBarIconButton:nav",t[26])],l=!0)},p(t,l){T&&T.p&&(!r||2097152&l[0])&&y(T,S,t,t[21],r?x(S,t[21],l,null):v(t[21]),null),f(e,B=_(C,[(!r||2293&l[0]&&a!==(a=W(o({[t[2]]:!0,"mdc-top-app-bar":!0,"mdc-top-app-bar--short":"short"===t[4],"mdc-top-app-bar--short-collapsed":t[0],"mdc-top-app-bar--fixed":"fixed"===t[4],"smui-top-app-bar--static":"static"===t[4],"smui-top-app-bar--color-secondary":"secondary"===t[5],"mdc-top-app-bar--prominent":t[6],"mdc-top-app-bar--dense":t[7]},t[11]))))&&{class:a},(!r||4104&l[0]&&s!==(s=Object.entries(t[12]).map(ot).concat([t[3]]).join(" ")))&&{style:s},32768&l[0]&&t[15]])),n&&E(n.update)&&2&l[0]&&n.update.call(null,t[1])},i(t){r||(j(T,t),r=!0)},o(t){w(T,t),r=!1},d(a){a&&$(e),T&&T.d(a),t[25](null),l=!1,A(p)}}}const ot=([t,e])=>`${t}: ${e};`;function rt(t,e,a){const s=["use","class","style","variant","color","collapsed","prominent","dense","scrollTarget","getPropStore","getElement"];let n=S(e,s),{$$slots:o={},$$scope:r}=e;const l=Q(T());let p=()=>{};function c(t){return t===p}let{use:u=[]}=e,{class:d=""}=e,{style:m=""}=e,{variant:$="standard"}=e,{color:f="primary"}=e,{collapsed:b=p}=e;const g=!c(b)&&!!b;c(b)&&(b=!1);let h,y,v,x,{prominent:_=!1}=e,{dense:E=!1}=e,{scrollTarget:j}=e,w={},A={},R=C({variant:$,prominent:_,dense:E},(t=>{a(18,v=t)})),D=$;function L(){return new({static:O,short:I,fixed:P}[$]||M)({hasClass:H,addClass:U,removeClass:k,setStyle:z,getTopAppBarHeight:()=>h.clientHeight,notifyNavigationIconClicked:()=>X(h,"MDCTopAppBar:nav"),getViewportScrollY:()=>null==j?window.pageYOffset:j.scrollTop,getTotalActionItems:()=>h.querySelectorAll(".mdc-top-app-bar__action-item").length})}function H(t){return t in w?w[t]:F().classList.contains(t)}function U(t){w[t]||a(11,w[t]=!0,w)}function k(t){t in w&&!w[t]||a(11,w[t]=!1,w)}function z(t,e){A[t]!=e&&(""===e||null==e?(delete A[t],a(12,A),a(20,D),a(4,$),a(9,y)):a(12,A[t]=e,A))}function Y(){y&&(y.handleTargetScroll(),"short"===$&&a(0,b="isCollapsed"in y&&y.isCollapsed))}function F(){return h}B((()=>(a(9,y=L()),y.init(),()=>{y.destroy()})));return t.$$set=t=>{e=i(i({},e),N(t)),a(15,n=S(e,s)),"use"in t&&a(1,u=t.use),"class"in t&&a(2,d=t.class),"style"in t&&a(3,m=t.style),"variant"in t&&a(4,$=t.variant),"color"in t&&a(5,f=t.color),"collapsed"in t&&a(0,b=t.collapsed),"prominent"in t&&a(6,_=t.prominent),"dense"in t&&a(7,E=t.dense),"scrollTarget"in t&&a(8,j=t.scrollTarget),"$$scope"in t&&a(21,r=t.$$scope)},t.$$.update=()=>{262352&t.$$.dirty[0]&&v&&v({variant:$,prominent:_,dense:E}),1049104&t.$$.dirty[0]&&D!==$&&y&&(a(20,D=$),y.destroy(),a(11,w={}),a(12,A={}),a(9,y=L()),y.init()),528&t.$$.dirty[0]&&y&&"short"===$&&"setAlwaysCollapsed"in y&&y.setAlwaysCollapsed(g),524544&t.$$.dirty[0]&&x!==j&&(x&&x.removeEventListener("scroll",Y),j&&j.addEventListener("scroll",Y),a(19,x=j))},[b,u,d,m,$,f,_,E,j,y,h,w,A,l,Y,n,function(){return R},F,v,x,D,r,o,()=>"short"!==$&&"fixed"!==$&&y&&y.handleWindowResize(),()=>null==j&&Y(),function(t){q[t?"unshift":"push"]((()=>{h=t,a(10,h)}))},()=>y&&y.handleNavigationClick()]}class lt extends r{constructor(t){super(),l(this,t,rt,nt,p,{use:1,class:2,style:3,variant:4,color:5,collapsed:0,prominent:6,dense:7,scrollTarget:8,getPropStore:16,getElement:17},null,[-1,-1])}get getPropStore(){return this.$$.ctx[16]}get getElement(){return this.$$.ctx[17]}}var pt=Z({class:"mdc-top-app-bar__row",component:tt});function ct(t){let e,a,s,n,o,r;const l=t[9].default,p=c(l,t,t[8],null);let g=[{class:a=W({[t[1]]:!0,"mdc-top-app-bar__section":!0,"mdc-top-app-bar__section--align-start":"start"===t[2],"mdc-top-app-bar__section--align-end":"end"===t[2]})},t[3]?{role:"toolbar"}:{},t[6]],S={};for(let c=0;c<g.length;c+=1)S=i(S,g[c]);return{c(){e=u("section"),p&&p.c(),this.h()},l(t){e=d(t,"SECTION",{class:!0});var a=m(e);p&&p.l(a),a.forEach($),this.h()},h(){f(e,S)},m(a,l){b(a,e,l),p&&p.m(e,null),t[10](e),n=!0,o||(r=[h(s=J.call(null,e,t[0])),h(t[5].call(null,e))],o=!0)},p(t,[o]){p&&p.p&&(!n||256&o)&&y(p,l,t,t[8],n?x(l,t[8],o,null):v(t[8]),null),f(e,S=_(g,[(!n||6&o&&a!==(a=W({[t[1]]:!0,"mdc-top-app-bar__section":!0,"mdc-top-app-bar__section--align-start":"start"===t[2],"mdc-top-app-bar__section--align-end":"end"===t[2]})))&&{class:a},8&o&&(t[3]?{role:"toolbar"}:{}),64&o&&t[6]])),s&&E(s.update)&&1&o&&s.update.call(null,t[0])},i(t){n||(j(p,t),n=!0)},o(t){w(p,t),n=!1},d(a){a&&$(e),p&&p.d(a),t[10](null),o=!1,A(r)}}}function it(t,e,a){const s=["use","class","align","toolbar","getElement"];let n=S(e,s),{$$slots:o={},$$scope:r}=e;const l=Q(T());let p,{use:c=[]}=e,{class:u=""}=e,{align:d="start"}=e,{toolbar:m=!1}=e;return D("SMUI:icon-button:context",m?"top-app-bar:action":"top-app-bar:navigation"),D("SMUI:button:context",m?"top-app-bar:action":"top-app-bar:navigation"),t.$$set=t=>{e=i(i({},e),N(t)),a(6,n=S(e,s)),"use"in t&&a(0,c=t.use),"class"in t&&a(1,u=t.class),"align"in t&&a(2,d=t.align),"toolbar"in t&&a(3,m=t.toolbar),"$$scope"in t&&a(8,r=t.$$scope)},[c,u,d,m,p,l,n,function(){return p},r,o,function(t){q[t?"unshift":"push"]((()=>{p=t,a(4,p)}))}]}var ut=Z({class:"mdc-top-app-bar__title",component:et});function dt(t){let e;const a=t[11].default,s=c(a,t,t[13],null);return{c(){s&&s.c()},l(t){s&&s.l(t)},m(t,a){s&&s.m(t,a),e=!0},p(t,n){s&&s.p&&(!e||8192&n)&&y(s,a,t,t[13],e?x(a,t[13],n,null):v(t[13]),null)},i(t){e||(j(s,t),e=!0)},o(t){w(s,t),e=!1},d(t){s&&s.d(t)}}}function mt(t){let e,a,s;const n=[{use:[t[6],...t[0]]},{class:W({[t[1]]:!0,[t[5]]:!0})},t[7]];var o=t[2];function r(t){let e={$$slots:{default:[dt]},$$scope:{ctx:t}};for(let a=0;a<n.length;a+=1)e=i(e,n[a]);return{props:e}}return o&&(e=new o(r(t)),t[12](e)),{c(){e&&L(e.$$.fragment),a=H()},l(t){e&&U(e.$$.fragment,t),a=H()},m(t,n){e&&k(e,t,n),b(t,a,n),s=!0},p(t,[s]){const l=227&s?_(n,[65&s&&{use:[t[6],...t[0]]},34&s&&{class:W({[t[1]]:!0,[t[5]]:!0})},128&s&&z(t[7])]):{};if(8192&s&&(l.$$scope={dirty:s,ctx:t}),o!==(o=t[2])){if(e){Y();const t=e;w(t.$$.fragment,1,0,(()=>{F(t,1)})),G()}o?(e=new o(r(t)),t[12](e),L(e.$$.fragment),j(e.$$.fragment,1),k(e,a.parentNode,a)):e=null}else o&&e.$set(l)},i(t){s||(e&&j(e.$$.fragment,t),s=!0)},o(t){e&&w(e.$$.fragment,t),s=!1},d(s){t[12](null),s&&$(a),e&&F(e,s)}}}function $t(t,e,a){let s,n;const o=["use","class","topAppBar","component","getElement"];let r,l=S(e,o),p=V;t.$$.on_destroy.push((()=>p()));let{$$slots:c={},$$scope:u}=e;const d=Q(T());let m,{use:$=[]}=e,{class:f=""}=e,{topAppBar:b}=e,{component:g=at}=e;return t.$$set=t=>{e=i(i({},e),N(t)),a(7,l=S(e,o)),"use"in t&&a(0,$=t.use),"class"in t&&a(1,f=t.class),"topAppBar"in t&&a(8,b=t.topAppBar),"component"in t&&a(2,g=t.component),"$$scope"in t&&a(13,u=t.$$scope)},t.$$.update=()=>{256&t.$$.dirty&&(a(3,s=b&&b.getPropStore()),p(),p=K(s,(t=>a(10,r=t)))),1032&t.$$.dirty&&a(5,n=s&&"static"!==r.variant?"short"===r.variant?"mdc-top-app-bar--short-fixed-adjust":r.prominent&&r.dense?"mdc-top-app-bar--dense-prominent-fixed-adjust":r.prominent?"mdc-top-app-bar--prominent-fixed-adjust":r.dense?"mdc-top-app-bar--dense-fixed-adjust":"mdc-top-app-bar--fixed-adjust":"")},[$,f,g,s,m,n,d,l,b,function(){return m.getElement()},r,c,function(t){q[t?"unshift":"push"]((()=>{m=t,a(4,m)}))},u]}const ft=class extends r{constructor(t){super(),l(this,t,it,ct,p,{use:0,class:1,align:2,toolbar:3,getElement:7})}get getElement(){return this.$$.ctx[7]}},bt=class extends r{constructor(t){super(),l(this,t,$t,mt,p,{use:0,class:1,topAppBar:8,component:2,getElement:9})}get getElement(){return this.$$.ctx[9]}};export{bt as A,pt as R,ft as S,lt as T,ut as a};
