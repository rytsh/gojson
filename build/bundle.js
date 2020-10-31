var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function r(t){return"function"==typeof t}function c(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function a(t,e){t.appendChild(e)}function i(t,e,n){t.insertBefore(e,n||null)}function s(t){t.parentNode.removeChild(t)}function u(t){return document.createElement(t)}function l(t){return document.createTextNode(t)}function f(){return l(" ")}function d(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}let p;function $(t){p=t}const g=[],h=[],m=[],b=[],y=Promise.resolve();let x=!1;function v(t){m.push(t)}let _=!1;const k=new Set;function w(){if(!_){_=!0;do{for(let t=0;t<g.length;t+=1){const e=g[t];$(e),C(e.$$)}for($(null),g.length=0;h.length;)h.pop()();for(let t=0;t<m.length;t+=1){const e=m[t];k.has(e)||(k.add(e),e())}m.length=0}while(g.length);for(;b.length;)b.pop()();x=!1,_=!1,k.clear()}}function C(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(v)}}const E=new Set;function T(t,e){t&&t.i&&(E.delete(t),t.i(e))}function S(t,e,n,o){if(t&&t.o){if(E.has(t))return;E.add(t),undefined.c.push((()=>{E.delete(t),o&&(n&&t.d(1),o())})),t.o(e)}}function j(t){t&&t.c()}function A(t,n,c){const{fragment:a,on_mount:i,on_destroy:s,after_update:u}=t.$$;a&&a.m(n,c),v((()=>{const n=i.map(e).filter(r);s?s.push(...n):o(n),t.$$.on_mount=[]})),u.forEach(v)}function O(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function P(t,e){-1===t.$$.dirty[0]&&(g.push(t),x||(x=!0,y.then(w)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function G(e,r,c,a,i,u,l=[-1]){const f=p;$(e);const d=r.props||{},g=e.$$={fragment:null,ctx:null,props:u,update:t,not_equal:i,bound:n(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(f?f.$$.context:[]),callbacks:n(),dirty:l,skip_bound:!1};let h=!1;if(g.ctx=c?c(e,d,((t,n,...o)=>{const r=o.length?o[0]:n;return g.ctx&&i(g.ctx[t],g.ctx[t]=r)&&(!g.skip_bound&&g.bound[t]&&g.bound[t](r),h&&P(e,t)),n})):[],g.update(),h=!0,o(g.before_update),g.fragment=!!a&&a(g.ctx),r.target){if(r.hydrate){const t=function(t){return Array.from(t.childNodes)}(r.target);g.fragment&&g.fragment.l(t),t.forEach(s)}else g.fragment&&g.fragment.c();r.intro&&T(e.$$.fragment),A(e,r.target,r.anchor),w()}$(f)}class L{$destroy(){O(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function N(e){let n,o,r,c,f;return{c(){n=u("pre"),o=u("code"),o.textContent="$",r=l("\n    "),c=u("code"),f=l(e[0]),d(o,"class","select-none pre svelte-1hdayrb"),d(n,"class","code svelte-1hdayrb")},m(t,e){i(t,n,e),a(n,o),a(n,r),a(n,c),a(c,f)},p(t,[e]){1&e&&function(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}(f,t[0])},i:t,o:t,d(t){t&&s(n)}}}function I(t,e,n){let{code:o}=e;return t.$$set=t=>{"code"in t&&n(0,o=t.code)},[o]}class q extends L{constructor(t){super(),G(this,t,I,N,c,{code:0})}}function z(e){let n,o,r,c,l,p,$,g,h,m,b,y,x,v,_,k,w,C,E,P,G,L,N,I,z,H,M;return g=new q({props:{code:`curl -fsSL https://github.com/rytsh/indigo/releases/latest/download/indigo-linux-amd64-${e[0]}.tar.gz | tar -zx -C /usr/local/bin/`}}),y=new q({props:{code:"indigo https://api.punkapi.com/v2/beers/1/"}}),k=new q({props:{code:"curl localhost:3000/1/name"}}),P=new q({props:{code:"indigo --folder /mnt/usb --no-api"}}),H=new q({props:{code:"docker run --rm -it -p 3000:3000 docker.pkg.github.com/rytsh/indigo/indigo:latest https://api.punkapi.com/v2/beers/1/"}}),{c(){n=u("main"),o=u("p"),o.textContent=""+D,r=f(),c=u("p"),c.textContent="Serve any json file with GET, POST, PUT, PATCH or DELETE request data, even most inner object and root path.",l=f(),p=u("p"),p.innerHTML='Get in Linux, for other OS <a href="https://github.com/rytsh/indigo/releases/latest" target="_blank">click here</a>',$=f(),j(g.$$.fragment),h=f(),m=u("p"),m.textContent="Give any json file to serve",b=f(),j(y.$$.fragment),x=f(),v=u("p"),v.textContent="Use REST API to get and change data event most inner",_=f(),j(k.$$.fragment),w=f(),C=u("p"),C.textContent="Share a folder",E=f(),j(P.$$.fragment),G=f(),L=u("hr"),N=f(),I=u("p"),I.textContent="Run in docker",z=f(),j(H.$$.fragment),d(o,"class","title svelte-1gbw9v0"),d(n,"class","svelte-1gbw9v0")},m(t,e){i(t,n,e),a(n,o),a(n,r),a(n,c),a(n,l),a(n,p),a(n,$),A(g,n,null),a(n,h),a(n,m),a(n,b),A(y,n,null),a(n,x),a(n,v),a(n,_),A(k,n,null),a(n,w),a(n,C),a(n,E),A(P,n,null),a(n,G),a(n,L),a(n,N),a(n,I),a(n,z),A(H,n,null),M=!0},p:t,i(t){M||(T(g.$$.fragment,t),T(y.$$.fragment,t),T(k.$$.fragment,t),T(P.$$.fragment,t),T(H.$$.fragment,t),M=!0)},o(t){S(g.$$.fragment,t),S(y.$$.fragment,t),S(k.$$.fragment,t),S(P.$$.fragment,t),S(H.$$.fragment,t),M=!1},d(t){t&&s(n),O(g),O(y),O(k),O(P),O(H)}}}let D="INDIGO";function H(t){return["v0.3.2"]}return new class extends L{constructor(t){super(),G(this,t,H,z,c,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map