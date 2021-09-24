import{S as n,i as s,s as a,e as t,t as e,k as p,c as o,a as c,g as l,d as u,n as i,b as r,f as k,I as h,R as m,j as d,aw as g,m as f,o as w,x as y,u as v,v as E}from"../chunks/vendor-d45173d4.js";function S(n){let s,a,d,g,f,w,y,v,E,S,T,b,x,M,P,I,q,L,j,O,R,H,C,$,A,D,U,N,_,B,z,Y,F,G,J,K,Q,V,W,X,Z,nn,sn,an,tn,en,pn,on,cn,ln,un,rn,kn,hn,mn,dn,gn,fn,wn,yn,vn,En,Sn,Tn,bn,xn,Mn,Pn,In,qn,Ln,jn,On,Rn,Hn,Cn,$n,An,Dn,Un,Nn,_n;return{c(){s=t("h1"),a=e("Integration for Sapper"),d=p(),g=t("sub"),f=e("\\* As of 2021-Apr-06, these instructions will now work without a flash of unstyled content!"),w=p(),y=t("p"),v=t("strong"),E=e("These instructions are for the Advanced Styling Method. If you don’t need the advantages of this method, it’s much easier to use the "),S=t("a"),T=e("Easy Styling Method"),b=e("."),x=p(),M=t("p"),P=e("Install the following packages as dev dependencies."),I=p(),q=t("pre"),L=p(),j=t("p"),O=e("Create the "),R=t("code"),H=e("src/theme/_smui-theme.scss"),C=e(" file."),$=p(),A=t("pre"),D=p(),U=t("p"),N=e("Update "),_=t("code"),B=e("rollup.config.js"),z=e(" with the following configuration."),Y=p(),F=t("pre"),G=p(),J=t("p"),K=e("In the "),Q=t("code"),V=e("template.html"),W=e(" file, in the "),X=t("code"),Z=e("<head>"),nn=e(" section right after "),sn=t("code"),an=e("%sapper.base%"),tn=e(", paste the following."),en=p(),pn=t("pre"),on=p(),cn=t("p"),ln=e("You’re now ready to use SMUI packages. Here’s some example code."),un=p(),rn=t("pre"),kn=p(),hn=t("h2"),mn=e("Dark Mode"),dn=p(),gn=t("p"),fn=e("The best way to implement a dark mode is to recompile the Sass with a different theme. This involves running the same code through your bundler again with a different Sass configuration. The website accomplishes this within Sapper by using the following modified code from the Sapper installation instructions."),wn=p(),yn=t("pre"),vn=p(),En=t("p"),Sn=e("This requires a separate ”_smui-theme.scss” file in a new directory under your “theme” directory named “dark”. This file should contain your dark theme configuration."),Tn=p(),bn=t("p"),xn=e("If you followed the Sapper installation instructions, and modified the function above, you will now get an additional output file named “smui-dark.css”. This is your compiled dark theme."),Mn=p(),Pn=t("p"),In=e("Now let’s get it on your page. In your template, where you included the “smui.css” file, instead use the following."),qn=p(),Ln=t("pre"),jn=p(),On=t("p"),Rn=e("This will get your dark theme working if the user has expressed a preference in their OS. To let the user choose which theme while on your site, you can do something like the following."),Hn=p(),Cn=t("pre"),$n=p(),An=t("p"),Dn=e("Now just call "),Un=t("code"),Nn=e("switchTheme()"),_n=e(" from a toggle button or something, and the theme will be switched to the other one."),this.h()},l(n){s=o(n,"H1",{id:!0});var t=c(s);a=l(t,"Integration for Sapper"),t.forEach(u),d=i(n),g=o(n,"SUB",{});var e=c(g);f=l(e,"\\* As of 2021-Apr-06, these instructions will now work without a flash of unstyled content!"),e.forEach(u),w=i(n),y=o(n,"P",{});var p=c(y);v=o(p,"STRONG",{});var r=c(v);E=l(r,"These instructions are for the Advanced Styling Method. If you don’t need the advantages of this method, it’s much easier to use the "),S=o(r,"A",{href:!0});var k=c(S);T=l(k,"Easy Styling Method"),k.forEach(u),b=l(r,"."),r.forEach(u),p.forEach(u),x=i(n),M=o(n,"P",{});var h=c(M);P=l(h,"Install the following packages as dev dependencies."),h.forEach(u),I=i(n),q=o(n,"PRE",{class:!0}),c(q).forEach(u),L=i(n),j=o(n,"P",{});var m=c(j);O=l(m,"Create the "),R=o(m,"CODE",{});var Bn=c(R);H=l(Bn,"src/theme/_smui-theme.scss"),Bn.forEach(u),C=l(m," file."),m.forEach(u),$=i(n),A=o(n,"PRE",{class:!0}),c(A).forEach(u),D=i(n),U=o(n,"P",{});var zn=c(U);N=l(zn,"Update "),_=o(zn,"CODE",{});var Yn=c(_);B=l(Yn,"rollup.config.js"),Yn.forEach(u),z=l(zn," with the following configuration."),zn.forEach(u),Y=i(n),F=o(n,"PRE",{class:!0}),c(F).forEach(u),G=i(n),J=o(n,"P",{});var Fn=c(J);K=l(Fn,"In the "),Q=o(Fn,"CODE",{});var Gn=c(Q);V=l(Gn,"template.html"),Gn.forEach(u),W=l(Fn," file, in the "),X=o(Fn,"CODE",{});var Jn=c(X);Z=l(Jn,"<head>"),Jn.forEach(u),nn=l(Fn," section right after "),sn=o(Fn,"CODE",{});var Kn=c(sn);an=l(Kn,"%sapper.base%"),Kn.forEach(u),tn=l(Fn,", paste the following."),Fn.forEach(u),en=i(n),pn=o(n,"PRE",{class:!0}),c(pn).forEach(u),on=i(n),cn=o(n,"P",{});var Qn=c(cn);ln=l(Qn,"You’re now ready to use SMUI packages. Here’s some example code."),Qn.forEach(u),un=i(n),rn=o(n,"PRE",{class:!0}),c(rn).forEach(u),kn=i(n),hn=o(n,"H2",{id:!0});var Vn=c(hn);mn=l(Vn,"Dark Mode"),Vn.forEach(u),dn=i(n),gn=o(n,"P",{});var Wn=c(gn);fn=l(Wn,"The best way to implement a dark mode is to recompile the Sass with a different theme. This involves running the same code through your bundler again with a different Sass configuration. The website accomplishes this within Sapper by using the following modified code from the Sapper installation instructions."),Wn.forEach(u),wn=i(n),yn=o(n,"PRE",{class:!0}),c(yn).forEach(u),vn=i(n),En=o(n,"P",{});var Xn=c(En);Sn=l(Xn,"This requires a separate ”_smui-theme.scss” file in a new directory under your “theme” directory named “dark”. This file should contain your dark theme configuration."),Xn.forEach(u),Tn=i(n),bn=o(n,"P",{});var Zn=c(bn);xn=l(Zn,"If you followed the Sapper installation instructions, and modified the function above, you will now get an additional output file named “smui-dark.css”. This is your compiled dark theme."),Zn.forEach(u),Mn=i(n),Pn=o(n,"P",{});var ns=c(Pn);In=l(ns,"Now let’s get it on your page. In your template, where you included the “smui.css” file, instead use the following."),ns.forEach(u),qn=i(n),Ln=o(n,"PRE",{class:!0}),c(Ln).forEach(u),jn=i(n),On=o(n,"P",{});var ss=c(On);Rn=l(ss,"This will get your dark theme working if the user has expressed a preference in their OS. To let the user choose which theme while on your site, you can do something like the following."),ss.forEach(u),Hn=i(n),Cn=o(n,"PRE",{class:!0}),c(Cn).forEach(u),$n=i(n),An=o(n,"P",{});var as=c(An);Dn=l(as,"Now just call "),Un=o(as,"CODE",{});var ts=c(Un);Nn=l(ts,"switchTheme()"),ts.forEach(u),_n=l(as," from a toggle button or something, and the theme will be switched to the other one."),as.forEach(u),this.h()},h(){r(s,"id","integration-for-sapper"),r(S,"href","/SASS.md#easy-styling-method"),r(q,"class","language-sh"),r(A,"class","language-sh"),r(F,"class","language-js"),r(pn,"class","language-html"),r(rn,"class","language-svelte"),r(hn,"id","dark-mode"),r(yn,"class","language-js"),r(Ln,"class","language-html"),r(Cn,"class","language-js")},m(n,t){k(n,s,t),h(s,a),k(n,d,t),k(n,g,t),h(g,f),k(n,w,t),k(n,y,t),h(y,v),h(v,E),h(v,S),h(S,T),h(v,b),k(n,x,t),k(n,M,t),h(M,P),k(n,I,t),k(n,q,t),q.innerHTML='<code class="language-sh">npm install --save-dev rollup-plugin-postcss sass</code>',k(n,L,t),k(n,j,t),h(j,O),h(j,R),h(R,H),h(j,C),k(n,$,t),k(n,A,t),A.innerHTML='<code class="language-sh">npx smui-theme template src/theme</code>',k(n,D,t),k(n,U,t),h(U,N),h(U,_),h(_,B),h(U,z),k(n,Y,t),k(n,F,t),F.innerHTML='<code class="language-js"><span class="token comment">// ...</span>\n<span class="token comment">// Put this along with the other imports.</span>\n<span class="token keyword">import</span> postcss <span class="token keyword">from</span> <span class="token string">"rollup-plugin-postcss"</span><span class="token punctuation">;</span>\n\n<span class="token comment">// ...</span>\n\n<span class="token comment">// Insert the following right before the "export default &#123;" line:</span>\n<span class="token keyword">const</span> <span class="token function-variable function">postcssOptions</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">extract</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">&#123;</span>\n  extensions<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">\'.scss\'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n  extract<span class="token operator">:</span> extract <span class="token operator">?</span> <span class="token string">\'smui.css\'</span> <span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n  minimize<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n  use<span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token punctuation">[</span>\n      <span class="token string">\'sass\'</span><span class="token punctuation">,</span>\n      <span class="token punctuation">&#123;</span>\n        includePaths<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">\'./src/theme\'</span><span class="token punctuation">,</span> <span class="token string">\'./node_modules\'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n      <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>\n    <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">]</span><span class="token punctuation">,</span>\n<span class="token punctuation">&#125;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// Right after the "svelte" plugin in the "client:" section, paste the following plugin.</span>\n<span class="token function">postcss</span><span class="token punctuation">(</span><span class="token function">postcssOptions</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n\n<span class="token comment">// Right after the "svelte" plugin in the "server:" section, paste the following plugin.</span>\n<span class="token function">postcss</span><span class="token punctuation">(</span><span class="token function">postcssOptions</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n\n<span class="token comment">// Don\'t touch the "serviceworker:" section.</span>\n<span class="token comment">// ...</span></code>',k(n,G,t),k(n,J,t),h(J,K),h(J,Q),h(Q,V),h(J,W),h(J,X),h(X,Z),h(J,nn),h(J,sn),h(sn,an),h(J,tn),k(n,en,t),k(n,pn,t),pn.innerHTML='<code class="language-html"><span class="token comment">&lt;!-- SMUI Styles --\x3e</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>stylesheet<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>client/smui.css<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n<span class="token comment">&lt;!-- Material Icons --\x3e</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span>\n  <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>stylesheet<span class="token punctuation">"</span></span>\n  <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://fonts.googleapis.com/icon?family=Material+Icons<span class="token punctuation">"</span></span>\n<span class="token punctuation">/></span></span>\n<span class="token comment">&lt;!-- Roboto --\x3e</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span>\n  <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>stylesheet<span class="token punctuation">"</span></span>\n  <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://fonts.googleapis.com/css?family=Roboto:300,400,500,600,700<span class="token punctuation">"</span></span>\n<span class="token punctuation">/></span></span></code>',k(n,on,t),k(n,cn,t),h(cn,ln),k(n,un,t),k(n,rn,t),rn.innerHTML='<code class="language-svelte">&lt;Button on:click=&#123;() => alert(\'Clicked!\')&#125;>Click Me!<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">\n  <span class="token keyword">import</span> Button <span class="token keyword">from</span> <span class="token string">\'@smui/button\'</span><span class="token punctuation">;</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></code>',k(n,kn,t),k(n,hn,t),h(hn,mn),k(n,dn,t),k(n,gn,t),h(gn,fn),k(n,wn,t),k(n,yn,t),yn.innerHTML='<code class="language-js"><span class="token keyword">import</span> fs <span class="token keyword">from</span> <span class="token string">\'fs\'</span><span class="token punctuation">;</span>\n\n<span class="token comment">// ...</span>\n\n<span class="token keyword">const</span> <span class="token function-variable function">postcssOptions</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">light</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">&#123;</span>\n  extensions<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">\'.scss\'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n  extract<span class="token operator">:</span> <span class="token string">\'smui.css\'</span><span class="token punctuation">,</span>\n  minimize<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n  onExtract<span class="token operator">:</span> light\n    <span class="token operator">?</span> <span class="token function-variable function">null</span>\n    <span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">getExtracted</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>\n        <span class="token keyword">let</span> <span class="token punctuation">&#123;</span> code <span class="token punctuation">&#125;</span> <span class="token operator">=</span> <span class="token function">getExtracted</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'cssnano\'</span><span class="token punctuation">)</span>\n          <span class="token punctuation">.</span><span class="token function">process</span><span class="token punctuation">(</span>code<span class="token punctuation">,</span> <span class="token punctuation">&#123;</span> from<span class="token operator">:</span> <span class="token keyword">undefined</span> <span class="token punctuation">&#125;</span><span class="token punctuation">)</span>\n          <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">&#123;</span> css <span class="token punctuation">&#125;</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>\n            <span class="token keyword">const</span> filename <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>config<span class="token punctuation">.</span>client<span class="token punctuation">.</span><span class="token function">output</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>dir<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string">/smui-dark.css</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">;</span>\n            fs<span class="token punctuation">.</span><span class="token function">writeFileSync</span><span class="token punctuation">(</span>filename<span class="token punctuation">,</span> css<span class="token punctuation">)</span><span class="token punctuation">;</span>\n          <span class="token punctuation">&#125;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>\n      <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>\n  use<span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token punctuation">[</span>\n      <span class="token string">\'sass\'</span><span class="token punctuation">,</span>\n      <span class="token punctuation">&#123;</span>\n        includePaths<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">./src/theme</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>light <span class="token operator">?</span> <span class="token string">\'\'</span> <span class="token operator">:</span> <span class="token string">\'/dark\'</span><span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">,</span> <span class="token string">\'./node_modules\'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n      <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>\n    <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">]</span><span class="token punctuation">,</span>\n<span class="token punctuation">&#125;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code>',k(n,vn,t),k(n,En,t),h(En,Sn),k(n,Tn,t),k(n,bn,t),h(bn,xn),k(n,Mn,t),k(n,Pn,t),h(Pn,In),k(n,qn,t),k(n,Ln,t),Ln.innerHTML='<code class="language-html"><span class="token comment">&lt;!-- SMUI Styles --\x3e</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span>\n  <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>stylesheet<span class="token punctuation">"</span></span>\n  <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>client/smui.css<span class="token punctuation">"</span></span>\n  <span class="token attr-name">media</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>(prefers-color-scheme: light)<span class="token punctuation">"</span></span>\n<span class="token punctuation">/></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span>\n  <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>stylesheet<span class="token punctuation">"</span></span>\n  <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>client/smui-dark.css<span class="token punctuation">"</span></span>\n  <span class="token attr-name">media</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>screen and (prefers-color-scheme: dark)<span class="token punctuation">"</span></span>\n<span class="token punctuation">/></span></span></code>',k(n,jn,t),k(n,On,t),h(On,Rn),k(n,Hn,t),k(n,Cn,t),Cn.innerHTML='<code class="language-js"><span class="token keyword">let</span> lightTheme <span class="token operator">=</span>\n  <span class="token keyword">typeof</span> window <span class="token operator">===</span> <span class="token string">\'undefined\'</span> <span class="token operator">||</span>\n  window<span class="token punctuation">.</span><span class="token function">matchMedia</span><span class="token punctuation">(</span><span class="token string">\'(prefers-color-scheme: light)\'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>matches<span class="token punctuation">;</span>\n<span class="token keyword">function</span> <span class="token function">switchTheme</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>\n  lightTheme <span class="token operator">=</span> <span class="token operator">!</span>lightTheme<span class="token punctuation">;</span>\n  <span class="token keyword">let</span> themeLink <span class="token operator">=</span> document<span class="token punctuation">.</span>head<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">\'#theme\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>themeLink<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>\n    themeLink <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">\'link\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    themeLink<span class="token punctuation">.</span>rel <span class="token operator">=</span> <span class="token string">\'stylesheet\'</span><span class="token punctuation">;</span>\n    themeLink<span class="token punctuation">.</span>id <span class="token operator">=</span> <span class="token string">\'theme\'</span><span class="token punctuation">;</span>\n  <span class="token punctuation">&#125;</span>\n  themeLink<span class="token punctuation">.</span>href <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">client/smui</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>lightTheme <span class="token operator">?</span> <span class="token string">\'\'</span> <span class="token operator">:</span> <span class="token string">\'-dark\'</span><span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string">.css</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">;</span>\n  document<span class="token punctuation">.</span>head\n    <span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">\'link[href="client/smui-dark.css"]\'</span><span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">insertAdjacentElement</span><span class="token punctuation">(</span><span class="token string">\'afterend\'</span><span class="token punctuation">,</span> themeLink<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">&#125;</span></code>',k(n,$n,t),k(n,An,t),h(An,Dn),h(An,Un),h(Un,Nn),h(An,_n)},p:m,i:m,o:m,d(n){n&&u(s),n&&u(d),n&&u(g),n&&u(w),n&&u(y),n&&u(x),n&&u(M),n&&u(I),n&&u(q),n&&u(L),n&&u(j),n&&u($),n&&u(A),n&&u(D),n&&u(U),n&&u(Y),n&&u(F),n&&u(G),n&&u(J),n&&u(en),n&&u(pn),n&&u(on),n&&u(cn),n&&u(un),n&&u(rn),n&&u(kn),n&&u(hn),n&&u(dn),n&&u(gn),n&&u(wn),n&&u(yn),n&&u(vn),n&&u(En),n&&u(Tn),n&&u(bn),n&&u(Mn),n&&u(Pn),n&&u(qn),n&&u(Ln),n&&u(jn),n&&u(On),n&&u(Hn),n&&u(Cn),n&&u($n),n&&u(An)}}}class T extends n{constructor(n){super(),s(this,n,null,S,a,{})}}function b(n){let s,a,e,l;return e=new T({}),{c(){s=p(),a=t("section"),d(e.$$.fragment),this.h()},l(n){g('[data-svelte="svelte-12erzwb"]',document.head).forEach(u),s=i(n),a=o(n,"SECTION",{class:!0});var t=c(a);f(e.$$.fragment,t),t.forEach(u),this.h()},h(){document.title="Sapper - SMUI",r(a,"class","markdown")},m(n,t){k(n,s,t),k(n,a,t),w(e,a,null),l=!0},p:m,i(n){l||(y(e.$$.fragment,n),l=!0)},o(n){v(e.$$.fragment,n),l=!1},d(n){n&&u(s),n&&u(a),E(e)}}}class x extends n{constructor(n){super(),s(this,n,null,b,a,{})}}export{x as default};
