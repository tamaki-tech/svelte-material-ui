var e=Object.defineProperty,s=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable,a=(s,t,n)=>t in s?e(s,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):s[t]=n,r=(e,r)=>{for(var c in r||(r={}))t.call(r,c)&&a(e,c,r[c]);if(s)for(var c of s(r))n.call(r,c)&&a(e,c,r[c]);return e};"undefined"!=typeof require&&require;import{S as c,i,s as o,K as l,B as d,e as u,c as m,a as p,d as f,a0 as $,f as v,a1 as w,D as h,L as g,M as b,N as x,p as y,a2 as S,x as E,u as _,a3 as O,a4 as D,a5 as I,y as k,A as C,ad as M,ae as F,af as j,ab as U,ag as L,G as q,j as A,l as N,m as H,o as P,q as T,r as K,v as B,w as G}from"./vendor-d45173d4.js";import{c as R,u as z,f as J,d as Q,a as V}from"./useActions-a8b3ee75.js";import{D as W,H as X,b as Y}from"./Ripple-16cbe826.js";function Z(e){let s,t,n,a,c,i;const o=e[15].default,D=l(o,e,e[14],null);let I=[{class:t=R(r({[e[1]]:!0,"mdc-drawer":!0,"mdc-drawer--dismissible":"dismissible"===e[2],"mdc-drawer--modal":"modal"===e[2],"smui-drawer__absolute":"modal"===e[2]&&!e[3]},e[6]))},e[8]],k={};for(let r=0;r<I.length;r+=1)k=d(k,I[r]);return{c(){s=u("aside"),D&&D.c(),this.h()},l(e){s=m(e,"ASIDE",{class:!0});var t=p(s);D&&D.l(t),t.forEach(f),this.h()},h(){$(s,k)},m(t,r){v(t,s,r),D&&D.m(s,null),e[16](s),a=!0,c||(i=[w(n=z.call(null,s,e[0])),w(e[7].call(null,s)),h(s,"keydown",e[17]),h(s,"transitionend",e[18])],c=!0)},p(e,[c]){D&&D.p&&(!a||16384&c)&&g(D,o,e,e[14],a?x(o,e[14],c,null):b(e[14]),null),$(s,k=y(I,[(!a||78&c&&t!==(t=R(r({[e[1]]:!0,"mdc-drawer":!0,"mdc-drawer--dismissible":"dismissible"===e[2],"mdc-drawer--modal":"modal"===e[2],"smui-drawer__absolute":"modal"===e[2]&&!e[3]},e[6]))))&&{class:t},256&c&&e[8]])),n&&S(n.update)&&1&c&&n.update.call(null,e[0])},i(e){a||(E(D,e),a=!0)},o(e){_(D,e),a=!1},d(t){t&&f(s),D&&D.d(t),e[16](null),c=!1,O(i)}}}function ee(e,s,t){const n=["use","class","variant","open","fixed","setOpen","isOpen","getElement"];let a=D(s,n),{$$slots:r={},$$scope:c}=s;const{FocusTrap:i}=L,o=J(I());let l,u,m,{use:p=[]}=s,{class:f=""}=s,{variant:$}=s,{open:v=!1}=s,{fixed:w=!0}=s,h={},g=null,b=!1;k("SMUI:list:nav",!0),k("SMUI:list:item:nav",!0),k("SMUI:list:wrapFocus",!0);let x=$;function y(){var e,s;b&&b.removeEventListener("SMUIDrawerScrim:click",O),"modal"===$&&(b=null!==(s=null===(e=l.parentNode)||void 0===e?void 0:e.querySelector(".mdc-drawer-scrim"))&&void 0!==s&&s,b&&b.addEventListener("SMUIDrawerScrim:click",O));const n="dismissible"===$?F:"modal"===$?j:void 0;return n?new n({addClass:E,removeClass:_,hasClass:S,elementHasClass:(e,s)=>e.classList.contains(s),saveFocus:()=>g=document.activeElement,restoreFocus:()=>{g&&"focus"in g&&l.contains(document.activeElement)&&g.focus()},focusActiveNavigationItem:()=>{const e=l.querySelector(".mdc-list-item--activated,.mdc-deprecated-list-item--activated");e&&e.focus()},notifyClose:()=>{t(9,v=!1),Q(l,"MDCDrawer:closed")},notifyOpen:()=>{t(9,v=!0),Q(l,"MDCDrawer:opened")},trapFocus:()=>m.trapFocus(),releaseFocus:()=>m.releaseFocus()}):void 0}function S(e){return e in h?h[e]:A().classList.contains(e)}function E(e){h[e]||t(6,h[e]=!0,h)}function _(e){e in h&&!h[e]||t(6,h[e]=!1,h)}function O(){u&&"handleScrimClick"in u&&u.handleScrimClick()}function A(){return l}C((()=>{m=new i(l,{skipInitialFocus:!0}),t(4,u=y()),u&&u.init()})),M((()=>{u&&u.destroy(),b&&b.removeEventListener("SMUIDrawerScrim:click",O)}));return e.$$set=e=>{s=d(d({},s),U(e)),t(8,a=D(s,n)),"use"in e&&t(0,p=e.use),"class"in e&&t(1,f=e.class),"variant"in e&&t(2,$=e.variant),"open"in e&&t(9,v=e.open),"fixed"in e&&t(3,w=e.fixed),"$$scope"in e&&t(14,c=e.$$scope)},e.$$.update=()=>{8212&e.$$.dirty&&x!==$&&(t(13,x=$),u&&u.destroy(),t(6,h={}),t(4,u=y()),u&&u.init()),528&e.$$.dirty&&u&&u.isOpen()!==v&&(v?u.open():u.close())},[p,f,$,w,u,l,h,o,a,v,function(e){t(9,v=e)},function(){return v},A,x,c,r,function(e){q[e?"unshift":"push"]((()=>{l=e,t(5,l)}))},e=>u&&u.handleKeydown(e),e=>u&&u.handleTransitionEnd(e)]}class se extends c{constructor(e){super(),i(this,e,ee,Z,o,{use:0,class:1,variant:2,open:9,fixed:3,setOpen:10,isOpen:11,getElement:12})}get setOpen(){return this.$$.ctx[10]}get isOpen(){return this.$$.ctx[11]}get getElement(){return this.$$.ctx[12]}}var te=V({class:"mdc-drawer-app-content",component:W}),ne=V({class:"mdc-drawer__content",component:W}),ae=V({class:"mdc-drawer__header",component:W}),re=V({class:"mdc-drawer__title",component:X}),ce=V({class:"mdc-drawer__subtitle",component:Y});function ie(e){let s;const t=e[8].default,n=l(t,e,e[11],null);return{c(){n&&n.c()},l(e){n&&n.l(e)},m(e,t){n&&n.m(e,t),s=!0},p(e,a){n&&n.p&&(!s||2048&a)&&g(n,t,e,e[11],s?x(t,e[11],a,null):b(e[11]),null)},i(e){s||(E(n,e),s=!0)},o(e){_(n,e),s=!1},d(e){n&&n.d(e)}}}function oe(e){let s,t,n;const a=[{use:[e[6],...e[0]]},{class:R({[e[1]]:!0,"mdc-drawer-scrim":!0,"smui-drawer-scrim__absolute":!e[2]})},e[7]];var r=e[3];function c(e){let s={$$slots:{default:[ie]},$$scope:{ctx:e}};for(let t=0;t<a.length;t+=1)s=d(s,a[t]);return{props:s}}return r&&(s=new r(c(e)),e[9](s),s.$on("click",e[10])),{c(){s&&A(s.$$.fragment),t=N()},l(e){s&&H(s.$$.fragment,e),t=N()},m(e,a){s&&P(s,e,a),v(e,t,a),n=!0},p(e,[n]){const i=199&n?y(a,[65&n&&{use:[e[6],...e[0]]},6&n&&{class:R({[e[1]]:!0,"mdc-drawer-scrim":!0,"smui-drawer-scrim__absolute":!e[2]})},128&n&&T(e[7])]):{};if(2048&n&&(i.$$scope={dirty:n,ctx:e}),r!==(r=e[3])){if(s){K();const e=s;_(e.$$.fragment,1,0,(()=>{B(e,1)})),G()}r?(s=new r(c(e)),e[9](s),s.$on("click",e[10]),A(s.$$.fragment),E(s.$$.fragment,1),P(s,t.parentNode,t)):s=null}else r&&s.$set(i)},i(e){n||(s&&E(s.$$.fragment,e),n=!0)},o(e){s&&_(s.$$.fragment,e),n=!1},d(n){e[9](null),n&&f(t),s&&B(s,n)}}}function le(e,s,t){const n=["use","class","fixed","component","getElement"];let a=D(s,n),{$$slots:r={},$$scope:c}=s;const i=J(I());let o,{use:l=[]}=s,{class:u=""}=s,{fixed:m=!0}=s,{component:p=W}=s;function f(){return o.getElement()}return e.$$set=e=>{s=d(d({},s),U(e)),t(7,a=D(s,n)),"use"in e&&t(0,l=e.use),"class"in e&&t(1,u=e.class),"fixed"in e&&t(2,m=e.fixed),"component"in e&&t(3,p=e.component),"$$scope"in e&&t(11,c=e.$$scope)},[l,u,m,p,f,o,i,a,r,function(e){q[e?"unshift":"push"]((()=>{o=e,t(5,o)}))},e=>Q(f(),"SMUIDrawerScrim:click",e),c]}const de=class extends c{constructor(e){super(),i(this,e,le,oe,o,{use:0,class:1,fixed:2,component:3,getElement:4})}get getElement(){return this.$$.ctx[4]}};export{te as A,ne as C,se as D,ae as H,de as S,re as T,ce as a};
