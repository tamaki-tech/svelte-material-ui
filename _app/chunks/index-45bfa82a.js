var e=Object.defineProperty,t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,c=(t,n,i)=>n in t?e(t,n,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[n]=i,s=(e,s)=>{for(var l in s||(s={}))n.call(s,l)&&c(e,l,s[l]);if(t)for(var l of t(s))i.call(s,l)&&c(e,l,s[l]);return e};"undefined"!=typeof require&&require;import{S as l,i as o,s as a,j as r,l as u,m as h,o as p,f as d,p as f,q as m,r as $,u as g,v as C,w as v,x as y,d as I,a4 as S,a5 as b,$ as A,E as x,y as M,A as _,b9 as k,B as E,ab as T,al as U,C as O,G as P,e as N,c as w,a as F,b as j,K as D,k as R,n as L,L as B,M as V,N as q,a0 as K,a1 as z,D as G,P as H,Q,a2 as W,a3 as J,ba as X,bb as Y,T as Z,U as ee,I as te,R as ne,b5 as ie,bc as ce}from"./vendor-d45173d4.js";import{c as se,f as le,d as oe,u as ae}from"./useActions-a8b3ee75.js";import{R as re,D as ue}from"./Ripple-16cbe826.js";import{C as he}from"./ContextFragment-e1f41568.js";import{p as pe,e as de}from"./prefixFilter-199a1594.js";function fe(e){let t;return{c(){t=N("div"),this.h()},l(e){t=w(e,"DIV",{class:!0}),F(t).forEach(I),this.h()},h(){j(t,"class","mdc-chip__ripple")},m(e,n){d(e,t,n)},d(e){e&&I(t)}}}function me(e){let t;return{c(){t=N("div"),this.h()},l(e){t=w(e,"DIV",{class:!0}),F(t).forEach(I),this.h()},h(){j(t,"class","mdc-chip__touch")},m(e,n){d(e,t,n)},d(e){e&&I(t)}}}function $e(e){let t,n,i,c,s=e[3]&&!e[13]&&fe();const l=e[31].default,o=D(l,e,e[44],null);let a=e[4]&&me();return{c(){s&&s.c(),t=R(),o&&o.c(),n=R(),a&&a.c(),i=u()},l(e){s&&s.l(e),t=L(e),o&&o.l(e),n=L(e),a&&a.l(e),i=u()},m(e,l){s&&s.m(e,l),d(e,t,l),o&&o.m(e,l),d(e,n,l),a&&a.m(e,l),d(e,i,l),c=!0},p(e,n){e[3]&&!e[13]?s||(s=fe(),s.c(),s.m(t.parentNode,t)):s&&(s.d(1),s=null),o&&o.p&&(!c||8192&n[1])&&B(o,l,e,e[44],c?q(l,e[44],n,null):V(e[44]),null),e[4]?a||(a=me(),a.c(),a.m(i.parentNode,i)):a&&(a.d(1),a=null)},i(e){c||(y(o,e),c=!0)},o(e){g(o,e),c=!1},d(e){s&&s.d(e),e&&I(t),o&&o.d(e),e&&I(n),a&&a.d(e),e&&I(i)}}}function ge(e){let t,n,i;const c=[{use:[[re,{ripple:e[3]&&!e[13],unbounded:!1,addClass:e[22],removeClass:e[23],addStyle:e[24]}],e[14],...e[0]]},{class:se(s({[e[1]]:!0,"mdc-chip":!0,"mdc-chip--selected":e[7],"mdc-chip--touch":e[4]},e[9]))},{style:Object.entries(e[10]).map(Ce).concat([e[2]]).join(" ")},{role:"row"},e[25]];var l=e[5];function o(e){let t={$$slots:{default:[$e]},$$scope:{ctx:e}};for(let n=0;n<c.length;n+=1)t=E(t,c[n]);return{props:t}}return l&&(t=new l(o(e)),e[32](t),t.$on("transitionend",e[33]),t.$on("click",e[34]),t.$on("keydown",e[35]),t.$on("focusin",e[36]),t.$on("focusout",e[37]),t.$on("MDCChipTrailingAction:interaction",e[38]),t.$on("MDCChipTrailingAction:navigation",e[39]),t.$on("SMUIChipsChipPrimaryAction:mount",e[40]),t.$on("SMUIChipsChipPrimaryAction:unmount",e[41]),t.$on("SMUIChipsChipTrailingAction:mount",e[42]),t.$on("SMUIChipsChipTrailingAction:unmount",e[43])),{c(){t&&r(t.$$.fragment),n=u()},l(e){t&&h(t.$$.fragment,e),n=u()},m(e,c){t&&p(t,e,c),d(e,n,c),i=!0},p(e,i){const a=62940831&i[0]?f(c,[29384713&i[0]&&{use:[[re,{ripple:e[3]&&!e[13],unbounded:!1,addClass:e[22],removeClass:e[23],addStyle:e[24]}],e[14],...e[0]]},658&i[0]&&{class:se(s({[e[1]]:!0,"mdc-chip":!0,"mdc-chip--selected":e[7],"mdc-chip--touch":e[4]},e[9]))},1028&i[0]&&{style:Object.entries(e[10]).map(Ce).concat([e[2]]).join(" ")},c[3],33554432&i[0]&&m(e[25])]):{};if(8216&i[0]|8192&i[1]&&(a.$$scope={dirty:i,ctx:e}),l!==(l=e[5])){if(t){$();const e=t;g(e.$$.fragment,1,0,(()=>{C(e,1)})),v()}l?(t=new l(o(e)),e[32](t),t.$on("transitionend",e[33]),t.$on("click",e[34]),t.$on("keydown",e[35]),t.$on("focusin",e[36]),t.$on("focusout",e[37]),t.$on("MDCChipTrailingAction:interaction",e[38]),t.$on("MDCChipTrailingAction:navigation",e[39]),t.$on("SMUIChipsChipPrimaryAction:mount",e[40]),t.$on("SMUIChipsChipPrimaryAction:unmount",e[41]),t.$on("SMUIChipsChipTrailingAction:mount",e[42]),t.$on("SMUIChipsChipTrailingAction:unmount",e[43]),r(t.$$.fragment),y(t.$$.fragment,1),p(t,n.parentNode,n)):t=null}else l&&t.$set(a)},i(e){i||(t&&y(t.$$.fragment,e),i=!0)},o(e){t&&g(t.$$.fragment,e),i=!1},d(i){e[32](null),i&&I(n),t&&C(t,i)}}}const Ce=([e,t])=>`${e}: ${t};`;function ve(e,t,n){const i=["use","class","style","chip","ripple","touch","shouldRemoveOnTrailingIconClick","shouldFocusPrimaryActionOnClick","component","getElement"];let c,s,l,o,a,r,u,h=S(t,i),{$$slots:p={},$$scope:d}=t;const f=le(b());let m,$,{use:g=[]}=t,{class:C=""}=t,{style:v=""}=t,{chip:y}=t,{ripple:I=!0}=t,{touch:N=!1}=t,{shouldRemoveOnTrailingIconClick:w=!0}=t,{shouldFocusPrimaryActionOnClick:F=!0}=t,j={},D={},R={};const L=A("SMUI:chips:chip:initialSelected");x(e,L,(e=>n(50,r=e)));let B,V,q=r;const K=A("SMUI:chips:nonInteractive");x(e,K,(e=>n(13,u=e)));const z=A("SMUI:chips:choice");x(e,z,(e=>n(46,s=e)));const G=A("SMUI:chips:chip:index");x(e,G,(e=>n(45,c=e)));let{component:H=ue}=t;const Q=O(w);x(e,Q,(e=>n(49,a=e))),M("SMUI:chips:chip:shouldRemoveOnTrailingIconClick",Q);const W=O(q);x(e,W,(e=>n(48,o=e))),M("SMUI:chips:chip:isSelected",W);const J=O(D);if(x(e,J,(e=>n(47,l=e))),M("SMUI:chips:chip:leadingIconClasses",J),M("SMUI:chips:chip:focusable",s&&q||0===c),!y)throw new Error("The chip property is required! It should be passed down from the Set to the Chip.");function X(e){return e in j?j[e]:he().classList.contains(e)}function Y(e){j[e]||n(9,j[e]=!0,j)}function Z(e){e in j&&!j[e]||n(9,j[e]=!1,j)}function ee(e){D[e]||n(30,D[e]=!0,D)}function te(e){e in D&&!D[e]||n(30,D[e]=!1,D)}function ne(e,t){R[e]!=t&&(""===t||null==t?(delete R[e],n(10,R)):n(10,R[e]=t,R))}function ie(e){return e in R?R[e]:getComputedStyle(he()).getPropertyValue(e)}function ce(e,t){n(7,q=e),$.setSelectedFromChipSet(q,t)}function se(){$.focusPrimaryAction()}function ae(){$.focusTrailingAction()}function re(){$.removeFocus()}function he(){return m.getElement()}_((()=>{n(6,$=new k({addClass:Y,addClassToLeadingIcon:ee,eventTargetHasClass:(e,t)=>!(!e||!("classList"in e))&&e.classList.contains(t),focusPrimaryAction:()=>{B&&B.focus()},focusTrailingAction:()=>{V&&V.focus()},getAttribute:e=>he().getAttribute(e),getCheckmarkBoundingClientRect:()=>{const e=he().querySelector(".mdc-chip__checkmark");return e?e.getBoundingClientRect():null},getComputedStyleValue:ie,getRootBoundingClientRect:()=>he().getBoundingClientRect(),hasClass:X,hasLeadingIcon:()=>!!he().querySelector(".mdc-chip__icon--leading"),isRTL:()=>"rtl"===getComputedStyle(he()).getPropertyValue("direction"),isTrailingActionNavigable:()=>!!V&&V.isNavigable(),notifyInteraction:()=>oe(he(),"MDCChip:interaction",{chipId:y}),notifyNavigation:(e,t)=>oe(he(),"MDCChip:navigation",{chipId:y,key:e,source:t}),notifyRemoval:e=>{oe(he(),"MDCChip:removal",{chipId:y,removedAnnouncement:e})},notifySelection:(e,t)=>oe(he(),"MDCChip:selection",{chipId:y,selected:e,shouldIgnore:t}),notifyTrailingIconInteraction:()=>oe(he(),"MDCChip:trailingIconInteraction",{chipId:y}),notifyEditStart:()=>{},notifyEditFinish:()=>{},removeClass:Z,removeClassFromLeadingIcon:te,removeTrailingActionFocus:()=>{V&&V.removeFocus()},setPrimaryActionAttr:(e,t)=>{B&&B.addAttr(e,t)},setStyleProperty:ne}));const e={chipId:y,get selected(){return q},focusPrimaryAction:se,focusTrailingAction:ae,removeFocus:re,setSelectedFromChipSet:ce};return oe(he(),"SMUIChipsChip:mount",e),$.init(),()=>{oe(he(),"SMUIChipsChip:unmount",e),$.destroy()}}));return e.$$set=e=>{t=E(E({},t),T(e)),n(25,h=S(t,i)),"use"in e&&n(0,g=e.use),"class"in e&&n(1,C=e.class),"style"in e&&n(2,v=e.style),"chip"in e&&n(26,y=e.chip),"ripple"in e&&n(3,I=e.ripple),"touch"in e&&n(4,N=e.touch),"shouldRemoveOnTrailingIconClick"in e&&n(27,w=e.shouldRemoveOnTrailingIconClick),"shouldFocusPrimaryActionOnClick"in e&&n(28,F=e.shouldFocusPrimaryActionOnClick),"component"in e&&n(5,H=e.component),"$$scope"in e&&n(44,d=e.$$scope)},e.$$.update=()=>{134217728&e.$$.dirty[0]&&U(Q,a=w,a),128&e.$$.dirty[0]&&U(W,o=q,o),1073741824&e.$$.dirty[0]&&U(J,l=D,l),134217792&e.$$.dirty[0]&&$&&$.getShouldRemoveOnTrailingIconClick()!==w&&$.setShouldRemoveOnTrailingIconClick(w),268435520&e.$$.dirty[0]&&$&&$.setShouldFocusPrimaryActionOnClick(F)},[g,C,v,I,N,H,$,q,m,j,R,B,V,u,f,L,K,z,G,Q,W,J,Y,Z,ne,h,y,w,F,he,D,p,function(e){P[e?"unshift":"push"]((()=>{m=e,n(8,m)}))},e=>$&&$.handleTransitionEnd(e),()=>$&&$.handleClick(),e=>$&&$.handleKeydown(e),e=>$&&$.handleFocusIn(e),e=>$&&$.handleFocusOut(e),()=>$&&$.handleTrailingActionInteraction(),e=>$&&$.handleTrailingActionNavigation(e),e=>n(11,B=e.detail),()=>n(11,B=void 0),e=>n(12,V=e.detail),()=>n(12,V=void 0),d]}class ye extends l{constructor(e){super(),o(this,e,ve,ge,a,{use:0,class:1,style:2,chip:26,ripple:3,touch:4,shouldRemoveOnTrailingIconClick:27,shouldFocusPrimaryActionOnClick:28,component:5,getElement:29},null,[-1,-1])}get getElement(){return this.$$.ctx[29]}}function Ie(e,t,n){const i=e.slice();return i[36]=t[n],i[38]=n,i}const Se=e=>({chip:1&e[0]}),be=e=>({chip:e[36]});function Ae(e){let t;const n=e[25].default,i=D(n,e,e[27],be);return{c(){i&&i.c()},l(e){i&&i.l(e)},m(e,n){i&&i.m(e,n),t=!0},p(e,c){i&&i.p&&(!t||134217729&c[0])&&B(i,n,e,e[27],t?q(n,e[27],c,Se):V(e[27]),be)},i(e){t||(y(i,e),t=!0)},o(e){g(i,e),t=!1},d(e){i&&i.d(e)}}}function xe(e){let t,n,i;return t=new he({props:{key:"SMUI:chips:chip:initialSelected",value:e[10][e[38]],$$slots:{default:[Ae]},$$scope:{ctx:e}}}),{c(){r(t.$$.fragment),n=R()},l(e){h(t.$$.fragment,e),n=L(e)},m(e,c){p(t,e,c),d(e,n,c),i=!0},p(e,n){const i={};1&n[0]&&(i.value=e[10][e[38]]),134217729&n[0]&&(i.$$scope={dirty:n,ctx:e}),t.$set(i)},i(e){i||(y(t.$$.fragment,e),i=!0)},o(e){g(t.$$.fragment,e),i=!1},d(e){C(t,e),e&&I(n)}}}function Me(e,t){let n,i,c;return i=new he({props:{key:"SMUI:chips:chip:index",value:t[38],$$slots:{default:[xe]},$$scope:{ctx:t}}}),{key:e,first:null,c(){n=u(),r(i.$$.fragment),this.h()},l(e){n=u(),h(i.$$.fragment,e),this.h()},h(){this.first=n},m(e,t){d(e,n,t),p(i,e,t),c=!0},p(e,n){t=e;const c={};1&n[0]&&(c.value=t[38]),134217729&n[0]&&(c.$$scope={dirty:n,ctx:t}),i.$set(c)},i(e){c||(y(i.$$.fragment,e),c=!0)},o(e){g(i.$$.fragment,e),c=!1},d(e){e&&I(n),C(i,e)}}}function _e(e){let t,n,i,c,s,l,o=[],a=new Map,r=e[0];const u=e=>e[3](e[36]);for(let d=0;d<r.length;d+=1){let t=Ie(e,r,d),n=u(t);a.set(n,o[d]=Me(n,t))}let h=[{class:n=se({[e[2]]:!0,"mdc-chip-set":!0,"smui-chip-set--non-interactive":e[4],"mdc-chip-set--choice":e[5],"mdc-chip-set--filter":e[6],"mdc-chip-set--input":e[7]})},{role:"grid"},e[20]],p={};for(let d=0;d<h.length;d+=1)p=E(p,h[d]);return{c(){t=N("div");for(let e=0;e<o.length;e+=1)o[e].c();this.h()},l(e){t=w(e,"DIV",{class:!0,role:!0});var n=F(t);for(let t=0;t<o.length;t+=1)o[t].l(n);n.forEach(I),this.h()},h(){K(t,p)},m(n,a){d(n,t,a);for(let e=0;e<o.length;e+=1)o[e].m(t,null);e[26](t),c=!0,s||(l=[z(i=ae.call(null,t,e[1])),z(e[9].call(null,t)),G(t,"SMUIChipsChip:mount",e[14]),G(t,"SMUIChipsChip:unmount",e[15]),G(t,"MDCChip:interaction",e[16]),G(t,"MDCChip:selection",e[17]),G(t,"MDCChip:removal",e[18]),G(t,"MDCChip:navigation",e[19])],s=!0)},p(e,s){134218761&s[0]&&(r=e[0],$(),o=H(o,s,u,1,e,r,a,t,Q,Me,null,Ie),v()),K(t,p=f(h,[(!c||244&s[0]&&n!==(n=se({[e[2]]:!0,"mdc-chip-set":!0,"smui-chip-set--non-interactive":e[4],"mdc-chip-set--choice":e[5],"mdc-chip-set--filter":e[6],"mdc-chip-set--input":e[7]})))&&{class:n},{role:"grid"},1048576&s[0]&&e[20]])),i&&W(i.update)&&2&s[0]&&i.update.call(null,e[1])},i(e){if(!c){for(let e=0;e<r.length;e+=1)y(o[e]);c=!0}},o(e){for(let t=0;t<o.length;t+=1)g(o[t]);c=!1},d(n){n&&I(t);for(let e=0;e<o.length;e+=1)o[e].d();e[26](null),s=!1,J(l)}}}function ke(e,t){let n=new Set(e);for(let i of t)n.delete(i);return n}function Ee(e,t,n){const i=["use","class","chips","key","selected","nonInteractive","choice","filter","input","getElement"];let c,s,l,o=S(t,i),{$$slots:a={},$$scope:r}=t;const u=le(b());let h,p,{use:d=[]}=t,{class:f=""}=t,{chips:m=[]}=t,{key:$=(e=>e)}=t,{selected:g}=t,{nonInteractive:C=!1}=t,{choice:v=!1}=t,{filter:y=!1}=t,{input:I=!1}=t,A={},k=new WeakMap,N=m.map((e=>v&&g===e||y&&-1!==g.indexOf(e)));const w=O(C);x(e,w,(e=>n(31,l=e))),M("SMUI:chips:nonInteractive",w);const F=O(v);x(e,F,(e=>n(30,s=e))),M("SMUI:chips:choice",F);const j=O(y);x(e,j,(e=>n(29,c=e))),M("SMUI:chips:filter",j);let D=y?new Set(g):g;function R(e){return e instanceof Object?k.get(e):A[e]}function L(){return h}return _((()=>{if(n(23,p=new X({announceMessage:e=>{Y(e)},focusChipPrimaryActionAtIndex:e=>{var t;null===(t=R(m[e]))||void 0===t||t.focusPrimaryAction()},focusChipTrailingActionAtIndex:e=>{var t;null===(t=R(m[e]))||void 0===t||t.focusTrailingAction()},getChipListCount:()=>m.length,getIndexOfChipById:e=>m.indexOf(e),hasClass:e=>L().classList.contains(e),isRTL:()=>"rtl"===getComputedStyle(L()).getPropertyValue("direction"),removeChipAtIndex:e=>{e>=0&&e<m.length&&(v&&g===m[e]?n(21,g=null):y&&-1!==g.indexOf(m[e])&&(g.splice(g.indexOf(m[e]),1),n(21,g)),m.splice(e,1),n(0,m))},removeFocusFromChipAtIndex:e=>{var t;null===(t=R(m[e]))||void 0===t||t.removeFocus()},selectChipAtIndex:(e,t,i)=>{var c;if(e>=0&&e<m.length){if(y){const i=g.indexOf(m[e]);t&&-1===i?(g.push(m[e]),n(21,g)):t||-1===i||(g.splice(i,1),n(21,g))}else v&&(t||g===m[e])&&n(21,g=t?m[e]:null);null===(c=R(m[e]))||void 0===c||c.setSelectedFromChipSet(t,i)}}})),p.init(),v&&null!=g)p.select(g);else if(y&&g.length)for(const e of g)p.select(e);return()=>{p.destroy()}})),e.$$set=e=>{t=E(E({},t),T(e)),n(20,o=S(t,i)),"use"in e&&n(1,d=e.use),"class"in e&&n(2,f=e.class),"chips"in e&&n(0,m=e.chips),"key"in e&&n(3,$=e.key),"selected"in e&&n(21,g=e.selected),"nonInteractive"in e&&n(4,C=e.nonInteractive),"choice"in e&&n(5,v=e.choice),"filter"in e&&n(6,y=e.filter),"input"in e&&n(7,I=e.input),"$$scope"in e&&n(27,r=e.$$scope)},e.$$.update=()=>{if(16&e.$$.dirty[0]&&U(w,l=C,l),32&e.$$.dirty[0]&&U(F,s=v,s),64&e.$$.dirty[0]&&U(j,c=y,c),27263008&e.$$.dirty[0]&&p&&v&&D!==g&&(n(24,D=g),p.select(g)),27263041&e.$$.dirty[0]&&p&&y){const e=new Set(g),t=ke(D,e),i=ke(e,D);if(t.size||i.size){n(24,D=e);for(let e of t)-1!==m.indexOf(e)&&p.handleChipSelection({chipId:e,selected:!1});for(let e of i)p.handleChipSelection({chipId:e,selected:!0})}}},[m,d,f,$,C,v,y,I,h,u,N,w,F,j,function(e){const t=e.detail;!function(e,t){e instanceof Object?k.set(e,t):A[e]=t}(t.chipId,t)},function(e){const t=e.detail;var n;(n=t.chipId)instanceof Object?k.delete(n):delete A[n]},function(e){p&&p.handleChipInteraction(e.detail)},function(e){p&&p.handleChipSelection(e.detail)},function(e){p&&p.handleChipRemoval(e.detail)},function(e){p&&p.handleChipNavigation(e.detail)},o,g,L,p,D,a,function(e){P[e?"unshift":"push"]((()=>{h=e,n(8,h)}))},r]}function Te(e){let t,n,i,c,s,l,o,a=[{class:c=se({[e[1]]:!0,"mdc-chip__checkmark":!0})},e[3]],r={};for(let u=0;u<a.length;u+=1)r=E(r,a[u]);return{c(){t=N("span"),n=Z("svg"),i=Z("path"),this.h()},l(e){t=w(e,"SPAN",{class:!0});var c=F(t);n=ee(c,"svg",{class:!0,viewBox:!0});var s=F(n);i=ee(s,"path",{class:!0,fill:!0,stroke:!0,d:!0}),F(i).forEach(I),s.forEach(I),c.forEach(I),this.h()},h(){j(i,"class","mdc-chip__checkmark-path"),j(i,"fill","none"),j(i,"stroke","black"),j(i,"d","M1.73,12.91 8.1,19.28 22.79,4.59"),j(n,"class","mdc-chip__checkmark-svg"),j(n,"viewBox","-2 -3 30 30"),K(t,r)},m(c,a){d(c,t,a),te(t,n),te(n,i),e[5](t),l||(o=z(s=ae.call(null,t,e[0])),l=!0)},p(e,[n]){K(t,r=f(a,[2&n&&c!==(c=se({[e[1]]:!0,"mdc-chip__checkmark":!0}))&&{class:c},8&n&&e[3]])),s&&W(s.update)&&1&n&&s.update.call(null,e[0])},i:ne,o:ne,d(n){n&&I(t),e[5](null),l=!1,o()}}}function Ue(e,t,n){const i=["use","class","getElement"];let c,s=S(t,i),{use:l=[]}=t,{class:o=""}=t;return e.$$set=e=>{t=E(E({},t),T(e)),n(3,s=S(t,i)),"use"in e&&n(0,l=e.use),"class"in e&&n(1,o=e.class)},[l,o,c,s,function(){return c},function(e){P[e?"unshift":"push"]((()=>{c=e,n(2,c)}))}]}class Oe extends l{constructor(e){super(),o(this,e,Ue,Te,a,{use:0,class:1,getElement:4})}get getElement(){return this.$$.ctx[4]}}function Pe(e){let t,n;return t=new Oe({props:{}}),e[22](t),{c(){r(t.$$.fragment)},l(e){h(t.$$.fragment,e)},m(e,i){p(t,e,i),n=!0},p(e,n){t.$set({})},i(e){n||(y(t.$$.fragment,e),n=!0)},o(e){g(t.$$.fragment,e),n=!1},d(n){e[22](null),C(t,n)}}}function Ne(e){let t,n,i,c,s;const l=e[21].default,o=D(l,e,e[20],null);let a=[{class:i=se({[e[1]]:!0,"mdc-chip__primary-action":!0})},{role:c=e[7]?"checkbox":e[9]?"radio":"button"},e[7]||e[9]?{"aria-selected":e[10]?"true":"false"}:{},{tabindex:e[2]},e[6],e[16]],r={};for(let u=0;u<a.length;u+=1)r=E(r,a[u]);return{c(){t=N("span"),n=N("span"),o&&o.c(),this.h()},l(e){t=w(e,"SPAN",{class:!0,role:!0,tabindex:!0});var i=F(t);n=w(i,"SPAN",{class:!0});var c=F(n);o&&o.l(c),c.forEach(I),i.forEach(I),this.h()},h(){j(n,"class","mdc-chip__text"),K(t,r)},m(i,c){d(i,t,c),te(t,n),o&&o.m(n,null),e[23](t),s=!0},p(e,n){o&&o.p&&(!s||1048576&n)&&B(o,l,e,e[20],s?q(l,e[20],n,null):V(e[20]),null),K(t,r=f(a,[(!s||2&n&&i!==(i=se({[e[1]]:!0,"mdc-chip__primary-action":!0})))&&{class:i},(!s||640&n&&c!==(c=e[7]?"checkbox":e[9]?"radio":"button"))&&{role:c},1664&n&&(e[7]||e[9]?{"aria-selected":e[10]?"true":"false"}:{}),(!s||4&n)&&{tabindex:e[2]},64&n&&e[6],65536&n&&e[16]]))},i(e){s||(y(o,e),s=!0)},o(e){g(o,e),s=!1},d(n){n&&I(t),o&&o.d(n),e[23](null)}}}function we(e){let t,n;const i=e[21].default,c=D(i,e,e[20],null);return{c(){t=N("span"),c&&c.c(),this.h()},l(e){t=w(e,"SPAN",{class:!0});var n=F(t);c&&c.l(n),n.forEach(I),this.h()},h(){j(t,"class","mdc-chip__text")},m(e,i){d(e,t,i),c&&c.m(t,null),n=!0},p(e,t){c&&c.p&&(!n||1048576&t)&&B(c,i,e,e[20],n?q(i,e[20],t,null):V(e[20]),null)},i(e){n||(y(c,e),n=!0)},o(e){g(c,e),n=!1},d(e){e&&I(t),c&&c.d(e)}}}function Fe(e){let t,n,i,c,s,l,o,a,r=e[7]&&Pe(e);const u=[we,Ne],h=[];function p(e,t){return e[8]?0:1}return i=p(e),c=h[i]=u[i](e),{c(){r&&r.c(),t=R(),n=N("span"),c.c(),this.h()},l(e){r&&r.l(e),t=L(e),n=w(e,"SPAN",{role:!0});var i=F(n);c.l(i),i.forEach(I),this.h()},h(){j(n,"role","gridcell")},m(c,u){r&&r.m(c,u),d(c,t,u),d(c,n,u),h[i].m(n,null),e[24](n),l=!0,o||(a=[z(s=ae.call(null,n,e[0])),z(e[11].call(null,n))],o=!0)},p(e,[l]){e[7]?r?(r.p(e,l),128&l&&y(r,1)):(r=Pe(e),r.c(),y(r,1),r.m(t.parentNode,t)):r&&($(),g(r,1,1,(()=>{r=null})),v());let o=i;i=p(e),i===o?h[i].p(e,l):($(),g(h[o],1,1,(()=>{h[o]=null})),v(),c=h[i],c?c.p(e,l):(c=h[i]=u[i](e),c.c()),y(c,1),c.m(n,null)),s&&W(s.update)&&1&l&&s.update.call(null,e[0])},i(e){l||(y(r),y(c),l=!0)},o(e){g(r),g(c),l=!1},d(c){r&&r.d(c),c&&I(t),c&&I(n),h[i].d(),e[24](null),o=!1,J(a)}}}function je(e,t,n){const i=["use","class","tabindex","focus","getInput","getElement"];let c,s,l,o,a=S(t,i),{$$slots:r={},$$scope:u}=t;const h=le(b());let p,d,f,{use:m=[]}=t,{class:$=""}=t,{tabindex:g=(A("SMUI:chips:chip:focusable")?0:-1)}=t,C={};const v=A("SMUI:chips:nonInteractive");x(e,v,(e=>n(8,s=e)));const y=A("SMUI:chips:choice");x(e,y,(e=>n(9,l=e)));const I=A("SMUI:chips:filter");x(e,I,(e=>n(7,c=e)));const M=A("SMUI:chips:chip:isSelected");function k(e,t){C[e]!==t&&n(6,C[e]=t,C)}function U(){var e;e=()=>{f&&f.focus()},C.tabindex!==p.getAttribute("tabindex")?ie().then(e):e()}function O(){return p}return x(e,M,(e=>n(10,o=e))),_((()=>{let e={focus:U,addAttr:k};return oe(O(),"SMUIChipsChipPrimaryAction:mount",e),()=>{oe(O(),"SMUIChipsChipPrimaryAction:unmount",e)}})),e.$$set=e=>{t=E(E({},t),T(e)),n(16,a=S(t,i)),"use"in e&&n(0,m=e.use),"class"in e&&n(1,$=e.class),"tabindex"in e&&n(2,g=e.tabindex),"$$scope"in e&&n(20,u=e.$$scope)},[m,$,g,p,d,f,C,c,s,l,o,h,v,y,I,M,a,U,function(){return d&&d.getElement()},O,u,r,function(e){P[e?"unshift":"push"]((()=>{d=e,n(4,d)}))},function(e){P[e?"unshift":"push"]((()=>{f=e,n(5,f)}))},function(e){P[e?"unshift":"push"]((()=>{p=e,n(3,p)}))}]}function De(e){let t,n,i,c,l,o;const a=e[13].default,r=D(a,e,e[12],null);let u=[{class:n=se(s({[e[1]]:!0,"mdc-chip__icon":!0,"mdc-chip__icon--leading":!0,"mdc-chip__icon--leading-hidden":e[3]&&e[4]},e[5]))},e[10]],h={};for(let s=0;s<u.length;s+=1)h=E(h,u[s]);return{c(){t=N("i"),r&&r.c(),this.h()},l(e){t=w(e,"I",{class:!0});var n=F(t);r&&r.l(n),n.forEach(I),this.h()},h(){K(t,h)},m(n,s){d(n,t,s),r&&r.m(t,null),e[14](t),c=!0,l||(o=[z(i=ae.call(null,t,e[0])),z(e[6].call(null,t))],l=!0)},p(e,[l]){r&&r.p&&(!c||4096&l)&&B(r,a,e,e[12],c?q(a,e[12],l,null):V(e[12]),null),K(t,h=f(u,[(!c||58&l&&n!==(n=se(s({[e[1]]:!0,"mdc-chip__icon":!0,"mdc-chip__icon--leading":!0,"mdc-chip__icon--leading-hidden":e[3]&&e[4]},e[5]))))&&{class:n},1024&l&&e[10]])),i&&W(i.update)&&1&l&&i.update.call(null,e[0])},i(e){c||(y(r,e),c=!0)},o(e){g(r,e),c=!1},d(n){n&&I(t),r&&r.d(n),e[14](null),l=!1,J(o)}}}function Re(e,t,n){const i=["use","class","getElement"];let c,s,l,o=S(t,i),{$$slots:a={},$$scope:r}=t;const u=le(b());let{use:h=[]}=t,{class:p=""}=t;const d=A("SMUI:chips:filter");x(e,d,(e=>n(3,c=e)));const f=A("SMUI:chips:chip:isSelected");x(e,f,(e=>n(4,s=e)));const m=A("SMUI:chips:chip:leadingIconClasses");let $;return x(e,m,(e=>n(5,l=e))),e.$$set=e=>{t=E(E({},t),T(e)),n(10,o=S(t,i)),"use"in e&&n(0,h=e.use),"class"in e&&n(1,p=e.class),"$$scope"in e&&n(12,r=e.$$scope)},[h,p,$,c,s,l,u,d,f,m,o,function(){return $},r,a,function(e){P[e?"unshift":"push"]((()=>{$=e,n(2,$)}))}]}function Le(e){let t,n,i,c,s,l,o;const a=e[7].default,r=D(a,e,e[6],null);let u=[{class:i=se({[e[1]]:!0,"mdc-chip__icon":!0,"mdc-chip__icon--trailing":!0})},e[4]],h={};for(let p=0;p<u.length;p+=1)h=E(h,u[p]);return{c(){t=N("span"),n=N("i"),r&&r.c(),this.h()},l(e){t=w(e,"SPAN",{role:!0});var i=F(t);n=w(i,"I",{class:!0});var c=F(n);r&&r.l(c),c.forEach(I),i.forEach(I),this.h()},h(){K(n,h),j(t,"role","gridcell")},m(i,a){d(i,t,a),te(t,n),r&&r.m(n,null),e[8](t),s=!0,l||(o=[z(c=ae.call(null,t,e[0])),z(e[3].call(null,t))],l=!0)},p(e,[t]){r&&r.p&&(!s||64&t)&&B(r,a,e,e[6],s?q(a,e[6],t,null):V(e[6]),null),K(n,h=f(u,[(!s||2&t&&i!==(i=se({[e[1]]:!0,"mdc-chip__icon":!0,"mdc-chip__icon--trailing":!0})))&&{class:i},16&t&&e[4]])),c&&W(c.update)&&1&t&&c.update.call(null,e[0])},i(e){s||(y(r,e),s=!0)},o(e){g(r,e),s=!1},d(n){n&&I(t),r&&r.d(n),e[8](null),l=!1,J(o)}}}function Be(e,t,n){const i=["use","class","getElement"];let c=S(t,i),{$$slots:s={},$$scope:l}=t;const o=le(b());let a,{use:r=[]}=t,{class:u=""}=t;return e.$$set=e=>{t=E(E({},t),T(e)),n(4,c=S(t,i)),"use"in e&&n(0,r=e.use),"class"in e&&n(1,u=e.class),"$$scope"in e&&n(6,l=e.$$scope)},[r,u,a,o,c,function(){return a},l,s,function(e){P[e?"unshift":"push"]((()=>{a=e,n(2,a)}))}]}function Ve(e){let t;return{c(){t=N("span"),this.h()},l(e){t=w(e,"SPAN",{class:!0}),F(t).forEach(I),this.h()},h(){j(t,"class","mdc-deprecated-chip-trailing-action__touch")},m(e,n){d(e,t,n)},d(e){e&&I(t)}}}function qe(e){let t,n,i,c,l,o,a,r,u,h,p,m,$,C,v,S=e[4]&&Ve();const b=e[23].default,A=D(b,e,e[22],null);let x=[{class:o=se({[e[7]]:!0,"mdc-deprecated-chip-trailing-action__icon":!0})},pe(e[17],"icon$")],M={};for(let s=0;s<x.length;s+=1)M=E(M,x[s]);let _=[{class:r=se(s({[e[1]]:!0,"mdc-deprecated-chip-trailing-action":!0},e[10]))},{style:u=Object.entries(e[11]).map(Ke).concat([e[2]]).join(" ")},{"aria-hidden":h=e[5]?"true":void 0},{tabindex:"-1"},e[12],de(e[17],["icon$"])],k={};for(let s=0;s<_.length;s+=1)k=E(k,_[s]);return{c(){t=N("button"),n=N("span"),i=R(),S&&S.c(),c=R(),l=N("span"),A&&A.c(),this.h()},l(e){t=w(e,"BUTTON",{class:!0,style:!0,"aria-hidden":!0,tabindex:!0});var s=F(t);n=w(s,"SPAN",{class:!0}),F(n).forEach(I),i=L(s),S&&S.l(s),c=L(s),l=w(s,"SPAN",{class:!0});var o=F(l);A&&A.l(o),o.forEach(I),s.forEach(I),this.h()},h(){j(n,"class","mdc-deprecated-chip-trailing-action__ripple"),K(l,M),K(t,k)},m(s,o){d(s,t,o),te(t,n),te(t,i),S&&S.m(t,null),te(t,c),te(t,l),A&&A.m(l,null),t.autofocus&&t.focus(),e[24](t),$=!0,C||(v=[z(a=ae.call(null,l,e[6])),z(p=re.call(null,t,{ripple:e[3],unbounded:!1,addClass:e[14],removeClass:e[15],addStyle:e[16]})),z(m=ae.call(null,t,e[0])),z(e[13].call(null,t)),G(t,"click",e[25]),G(t,"keydown",e[26])],C=!0)},p(e,[n]){e[4]?S||(S=Ve(),S.c(),S.m(t,c)):S&&(S.d(1),S=null),A&&A.p&&(!$||4194304&n)&&B(A,b,e,e[22],$?q(b,e[22],n,null):V(e[22]),null),K(l,M=f(x,[(!$||128&n&&o!==(o=se({[e[7]]:!0,"mdc-deprecated-chip-trailing-action__icon":!0})))&&{class:o},131072&n&&pe(e[17],"icon$")])),a&&W(a.update)&&64&n&&a.update.call(null,e[6]),K(t,k=f(_,[(!$||1026&n&&r!==(r=se(s({[e[1]]:!0,"mdc-deprecated-chip-trailing-action":!0},e[10]))))&&{class:r},(!$||2052&n&&u!==(u=Object.entries(e[11]).map(Ke).concat([e[2]]).join(" ")))&&{style:u},(!$||32&n&&h!==(h=e[5]?"true":void 0))&&{"aria-hidden":h},{tabindex:"-1"},4096&n&&e[12],131072&n&&de(e[17],["icon$"])])),p&&W(p.update)&&8&n&&p.update.call(null,{ripple:e[3],unbounded:!1,addClass:e[14],removeClass:e[15],addStyle:e[16]}),m&&W(m.update)&&1&n&&m.update.call(null,e[0])},i(e){$||(y(A,e),$=!0)},o(e){g(A,e),$=!1},d(n){n&&I(t),S&&S.d(),A&&A.d(n),e[24](null),C=!1,J(v)}}}const Ke=([e,t])=>`${e}: ${t};`;function ze(e,t,n){const i=["use","class","style","ripple","touch","nonNavigable","icon$use","icon$class","isNavigable","focus","removeFocus","getElement"];let c=S(t,i),{$$slots:s={},$$scope:l}=t;const o=le(b());let a,r,{use:u=[]}=t,{class:h=""}=t,{style:p=""}=t,{ripple:d=!0}=t,{touch:f=!1}=t,{nonNavigable:m=!1}=t,{icon$use:$=[]}=t,{icon$class:g=""}=t,C={},v={},y={};function I(e){var t;return e in y?null!==(t=y[e])&&void 0!==t?t:null:U().getAttribute(e)}function A(e,t){y[e]!==t&&n(12,y[e]=t,y)}function x(){return r.isNavigable()}function M(){r.focus()}function k(){r.removeFocus()}function U(){return a}_((()=>{n(9,r=new ce({focus:()=>{const e=U();var t;t=()=>{e.focus()},y.tabindex!==a.getAttribute("tabindex")?ie().then(t):t()},getAttribute:I,notifyInteraction:e=>oe(U(),"MDCChipTrailingAction:interaction",{trigger:e}),notifyNavigation:e=>{oe(U(),"MDCChipTrailingAction:navigation",{key:e})},setAttribute:A}));const e={isNavigable:x,focus:M,removeFocus:k};return oe(U(),"SMUIChipsChipTrailingAction:mount",e),r.init(),()=>{oe(U(),"SMUIChipsChipTrailingAction:unmount",e),r.destroy()}}));return e.$$set=e=>{t=E(E({},t),T(e)),n(17,c=S(t,i)),"use"in e&&n(0,u=e.use),"class"in e&&n(1,h=e.class),"style"in e&&n(2,p=e.style),"ripple"in e&&n(3,d=e.ripple),"touch"in e&&n(4,f=e.touch),"nonNavigable"in e&&n(5,m=e.nonNavigable),"icon$use"in e&&n(6,$=e.icon$use),"icon$class"in e&&n(7,g=e.icon$class),"$$scope"in e&&n(22,l=e.$$scope)},[u,h,p,d,f,m,$,g,a,r,C,v,y,o,function(e){C[e]||n(10,C[e]=!0,C)},function(e){e in C&&!C[e]||n(10,C[e]=!1,C)},function(e,t){v[e]!=t&&(""===t||null==t?(delete v[e],n(11,v)):n(11,v[e]=t,v))},c,x,M,k,U,l,s,function(e){P[e?"unshift":"push"]((()=>{a=e,n(8,a)}))},e=>r&&r.handleClick(e),e=>r&&r.handleKeydown(e)]}const Ge=class extends l{constructor(e){super(),o(this,e,Ee,_e,a,{use:1,class:2,chips:0,key:3,selected:21,nonInteractive:4,choice:5,filter:6,input:7,getElement:22},null,[-1,-1])}get getElement(){return this.$$.ctx[22]}},He=class extends l{constructor(e){super(),o(this,e,je,Fe,a,{use:0,class:1,tabindex:2,focus:17,getInput:18,getElement:19})}get focus(){return this.$$.ctx[17]}get getInput(){return this.$$.ctx[18]}get getElement(){return this.$$.ctx[19]}},Qe=class extends l{constructor(e){super(),o(this,e,Re,De,a,{use:0,class:1,getElement:11})}get getElement(){return this.$$.ctx[11]}},We=class extends l{constructor(e){super(),o(this,e,Be,Le,a,{use:0,class:1,getElement:5})}get getElement(){return this.$$.ctx[5]}},Je=class extends l{constructor(e){super(),o(this,e,ze,qe,a,{use:0,class:1,style:2,ripple:3,touch:4,nonNavigable:5,icon$use:6,icon$class:7,isNavigable:18,focus:19,removeFocus:20,getElement:21})}get isNavigable(){return this.$$.ctx[18]}get focus(){return this.$$.ctx[19]}get removeFocus(){return this.$$.ctx[20]}get getElement(){return this.$$.ctx[21]}};export{ye as C,Qe as L,Ge as S,He as T,We as a,Je as b};
