var app=function(){"use strict";function e(){}function t(e){return e()}function n(){return Object.create(null)}function o(e){e.forEach(t)}function r(e){return"function"==typeof e}function s(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}function a(e,t,n,o){return e[1]&&o?function(e,t){for(const n in t)e[n]=t[n];return e}(n.ctx.slice(),e[1](o(t))):n.ctx}function i(e,t,n,o,r,s,i){const c=function(e,t,n,o){if(e[2]&&o){const r=e[2](o(n));if(void 0===t.dirty)return r;if("object"==typeof r){const e=[],n=Math.max(t.dirty.length,r.length);for(let o=0;o<n;o+=1)e[o]=t.dirty[o]|r[o];return e}return t.dirty|r}return t.dirty}(t,o,r,s);if(c){const r=a(t,n,o,i);e.p(r,c)}}function c(e){return null==e?"":e}function l(e,t){e.appendChild(t)}function u(e,t,n){e.insertBefore(t,n||null)}function d(e){e.parentNode.removeChild(e)}function p(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function $(e){return document.createElement(e)}function f(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}function m(e){return document.createTextNode(e)}function h(){return m(" ")}function g(e,t,n,o){return e.addEventListener(t,n,o),()=>e.removeEventListener(t,n,o)}function v(e){return function(t){return t.stopPropagation(),e.call(this,t)}}function b(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function w(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function x(e,t,n){e.classList[n?"add":"remove"](t)}let y;function C(e){y=e}const k=[],L=[],_=[],S=[],E=Promise.resolve();let j=!1;function z(e){_.push(e)}let I=!1;const T=new Set;function q(){if(!I){I=!0;do{for(let e=0;e<k.length;e+=1){const t=k[e];C(t),H(t.$$)}for(C(null),k.length=0;L.length;)L.pop()();for(let e=0;e<_.length;e+=1){const t=_[e];T.has(t)||(T.add(t),t())}_.length=0}while(k.length);for(;S.length;)S.pop()();j=!1,I=!1,T.clear()}}function H(e){if(null!==e.fragment){e.update(),o(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(z)}}const N=new Set;let P;function A(e,t){e&&e.i&&(N.delete(e),e.i(t))}function M(e,t,n,o){if(e&&e.o){if(N.has(e))return;N.add(e),P.c.push((()=>{N.delete(e),o&&(n&&e.d(1),o())})),e.o(t)}}function R(e){e&&e.c()}function D(e,n,s){const{fragment:a,on_mount:i,on_destroy:c,after_update:l}=e.$$;a&&a.m(n,s),z((()=>{const n=i.map(t).filter(r);c?c.push(...n):o(n),e.$$.on_mount=[]})),l.forEach(z)}function O(e,t){const n=e.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function G(e,t){-1===e.$$.dirty[0]&&(k.push(e),j||(j=!0,E.then(q)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function U(t,r,s,a,i,c,l=[-1]){const u=y;C(t);const p=r.props||{},$=t.$$={fragment:null,ctx:null,props:c,update:e,not_equal:i,bound:n(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:n(),dirty:l,skip_bound:!1};let f=!1;if($.ctx=s?s(t,p,((e,n,...o)=>{const r=o.length?o[0]:n;return $.ctx&&i($.ctx[e],$.ctx[e]=r)&&(!$.skip_bound&&$.bound[e]&&$.bound[e](r),f&&G(t,e)),n})):[],$.update(),f=!0,o($.before_update),$.fragment=!!a&&a($.ctx),r.target){if(r.hydrate){const e=function(e){return Array.from(e.childNodes)}(r.target);$.fragment&&$.fragment.l(e),e.forEach(d)}else $.fragment&&$.fragment.c();r.intro&&A(t.$$.fragment),D(t,r.target,r.anchor),q()}C(u)}class B{$destroy(){O(this,1),this.$destroy=e}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(e){var t;this.$$set&&(t=e,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}function V(e){let t,n,o;function r(e,t){return e[3]?F:X}let s=r(e),a=s(e);return{c(){t=$("button"),a.c(),b(t,"class","svelte-1uyj0gb")},m(r,s){u(r,t,s),a.m(t,null),n||(o=g(t,"click",e[4]),n=!0)},p(e,n){s!==(s=r(e))&&(a.d(1),a=s(e),a&&(a.c(),a.m(t,null)))},d(e){e&&d(t),a.d(),n=!1,o()}}}function X(e){let t,n;return{c(){t=f("svg"),n=f("path"),b(n,"d","M2 13h4v1H2v-1zm5-6H2v1h5V7zm2 3V8l-3 3 3 3v-2h5v-2H9zM4.5 9H2v1h2.5V9zM2 12h2.5v-1H2v1zm9 1h1v2c-.02.28-.11.52-.3.7-.19.18-.42.28-.7.3H1c-.55 0-1-.45-1-1V4c0-.55.45-1 1-1h3c0-1.11.89-2 2-2 1.11 0 2 .89 2 2h3c.55 0 1 .45 1 1v5h-1V6H1v9h10v-2zM2 5h8c0-.55-.45-1-1-1H8c-.55 0-1-.45-1-1s-.45-1-1-1-1 .45-1 1-.45 1-1 1H3c-.55 0-1 .45-1 1z"),b(n,"fill-rule","evenodd"),b(t,"aria-hidden","true"),b(t,"height","16"),b(t,"version","1.1"),b(t,"viewBox","0 0 14 16"),b(t,"width","14"),b(t,"class","octicon octicon-clippy svelte-1uyj0gb")},m(e,o){u(e,t,o),l(t,n)},d(e){e&&d(t)}}}function F(e){let t,n;return{c(){t=f("svg"),n=f("path"),b(n,"fill-rule","evenodd"),b(n,"d","M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"),b(t,"version","1.1"),b(t,"viewBox","0 0 12 16"),b(t,"width","12"),b(t,"height","16"),b(t,"aria-hidden","true"),b(t,"class","octicon octicon-check svelte-1uyj0gb")},m(e,o){u(e,t,o),l(t,n)},d(e){e&&d(t)}}}function Y(t){let n,o,r,s=t[1]&&V(t);return{c(){n=$("pre"),s&&s.c(),o=m("\n    "),r=$("code"),b(r,"class","svelte-1uyj0gb"),b(n,"class","svelte-1uyj0gb"),x(n,"wrap",t[2])},m(e,a){u(e,n,a),s&&s.m(n,null),l(n,o),l(n,r),r.innerHTML=t[0]},p(e,[t]){e[1]?s?s.p(e,t):(s=V(e),s.c(),s.m(n,o)):s&&(s.d(1),s=null),1&t&&(r.innerHTML=e[0]),4&t&&x(n,"wrap",e[2])},i:e,o:e,d(e){e&&d(n),s&&s.d()}}}function Z(e,t,n){let{code:o}=t,{button:r=!1}=t,{wrap:s=!1}=t,a=!1;return e.$$set=e=>{"code"in e&&n(0,o=e.code),"button"in e&&n(1,r=e.button),"wrap"in e&&n(2,s=e.wrap)},e.$$.update=()=>{if(35&e.$$.dirty&&!r){let e=o.replace(/&/g,"&amp;").replace(/>/g,"&gt;").replace(/</g,"&lt;").replace(/"/g,"&quot;").split("\n");n(0,o="");for(var t=0;t<e.length;n(5,t++,t))"$"===e[t][0]?n(0,o+='<span class="color">'+e[t]+"</span>\n"):n(0,o+=e[t]+"\n")}},[o,r,s,a,()=>{navigator.clipboard.writeText(o).then((()=>{n(3,a=!0),setTimeout((()=>n(3,a=!1)),500)}),(()=>{console.warn("failed copy")}))}]}class J extends B{constructor(e){super(),U(this,e,Z,Y,s,{code:0,button:1,wrap:2})}}function K(e){let t,n,o,r,s,p,f,m;const g=e[3].default,v=function(e,t,n,o){if(e){const r=a(e,t,n,o);return e[0](r)}}(g,e,e[2],null);return{c(){t=$("span"),n=$("a"),o=$("span"),v&&v.c(),r=h(),s=$("span"),s.textContent="#",b(o,"class","title svelte-1frfd25"),b(s,"class","hash svelte-1frfd25"),b(n,"aria-hidden","true"),b(n,"tabindex","-1"),b(n,"class","hash-link"),b(n,"href",p="#"+e[0]),b(n,"title","Direct link to heading"),b(t,"class",f=c("header "+e[1])+" svelte-1frfd25"),b(t,"id",e[0])},m(e,a){u(e,t,a),l(t,n),l(n,o),v&&v.m(o,null),l(n,r),l(n,s),m=!0},p(e,[o]){v&&v.p&&4&o&&i(v,g,e,e[2],o,null,null),(!m||1&o&&p!==(p="#"+e[0]))&&b(n,"href",p),(!m||2&o&&f!==(f=c("header "+e[1])+" svelte-1frfd25"))&&b(t,"class",f),(!m||1&o)&&b(t,"id",e[0])},i(e){m||(A(v,e),m=!0)},o(e){M(v,e),m=!1},d(e){e&&d(t),v&&v.d(e)}}}function Q(e,t,n){let{$$slots:o={},$$scope:r}=t,{id:s}=t,{className:a="t1"}=t;return e.$$set=e=>{"id"in e&&n(0,s=e.id),"className"in e&&n(1,a=e.className),"$$scope"in e&&n(2,r=e.$$scope)},[s,a,r,o]}class W extends B{constructor(e){super(),U(this,e,Q,K,s,{id:0,className:1})}}function ee(t){let n,o,r,s,a,i,c,l,p,f,m,g,v,b,w,x,y,C,k,L,_,S,E,j;return r=new J({props:{code:"$ indigo https://api.punkapi.com/v2/beers/1/"}}),c=new J({props:{code:"$ curl localhost:3000/1/name\n\nBuzz"}}),m=new J({props:{code:"$ indigo --auth-basic user:pass db.json"}}),w=new J({props:{code:"$ indigo --folder ./public --no-api --no-ui"}}),k=new J({props:{code:"$ indigo --folder ./public --no-api --no-ui --spa"}}),E=new J({props:{code:"$ indigo --folder ./public --no-api --no-ui --browsable --no-index"}}),{c(){n=$("p"),n.textContent="Give any json file to serve, could be a file or a URL",o=h(),R(r.$$.fragment),s=h(),a=$("p"),a.textContent="Use REST API to get and change data event most inner object",i=h(),R(c.$$.fragment),l=h(),p=$("p"),p.textContent="Serve api with basic auth",f=h(),R(m.$$.fragment),g=h(),v=$("p"),v.textContent="Share just a folder",b=h(),R(w.$$.fragment),x=h(),y=$("p"),y.textContent="Share just a folder with SPA",C=h(),R(k.$$.fragment),L=h(),_=$("p"),_.textContent="Share just a folder with just browsable support",S=h(),R(E.$$.fragment)},m(e,t){u(e,n,t),u(e,o,t),D(r,e,t),u(e,s,t),u(e,a,t),u(e,i,t),D(c,e,t),u(e,l,t),u(e,p,t),u(e,f,t),D(m,e,t),u(e,g,t),u(e,v,t),u(e,b,t),D(w,e,t),u(e,x,t),u(e,y,t),u(e,C,t),D(k,e,t),u(e,L,t),u(e,_,t),u(e,S,t),D(E,e,t),j=!0},p:e,i(e){j||(A(r.$$.fragment,e),A(c.$$.fragment,e),A(m.$$.fragment,e),A(w.$$.fragment,e),A(k.$$.fragment,e),A(E.$$.fragment,e),j=!0)},o(e){M(r.$$.fragment,e),M(c.$$.fragment,e),M(m.$$.fragment,e),M(w.$$.fragment,e),M(k.$$.fragment,e),M(E.$$.fragment,e),j=!1},d(e){e&&d(n),e&&d(o),O(r,e),e&&d(s),e&&d(a),e&&d(i),O(c,e),e&&d(l),e&&d(p),e&&d(f),O(m,e),e&&d(g),e&&d(v),e&&d(b),O(w,e),e&&d(x),e&&d(y),e&&d(C),O(k,e),e&&d(L),e&&d(_),e&&d(S),O(E,e)}}}class te extends B{constructor(e){super(),U(this,e,null,ee,s,{})}}function ne(e){let t;return{c(){t=m("Get Request")},m(e,n){u(e,t,n)},d(e){e&&d(t)}}}function oe(e){let t;return{c(){t=m("Post Request")},m(e,n){u(e,t,n)},d(e){e&&d(t)}}}function re(e){let t;return{c(){t=m("Put Request")},m(e,n){u(e,t,n)},d(e){e&&d(t)}}}function se(e){let t;return{c(){t=m("Patch Request")},m(e,n){u(e,t,n)},d(e){e&&d(t)}}}function ae(e){let t;return{c(){t=m("Delete Request")},m(e,n){u(e,t,n)},d(e){e&&d(t)}}}function ie(e){let t,n,o,r,s,a,i,c,l,p,f,m,g,v,b,w,x,y,C,k,L,_,S,E,j,z,I,T;return o=new J({props:{code:"$ indigo https://rytsh.github.io/indigo/test/users.json"}}),s=new W({props:{id:"request-get",className:"t2",$$slots:{default:[ne]},$$scope:{ctx:e}}}),i=new J({props:{wrap:!0,code:'$ curl http://localhost:3000\n\n{"users":[{"age":22,"hobies":["traveller","movies","sport","kahveci"],"id":1,"name":"Selin"},{"age":55,"hobies":["games","sci-fi","kamyoncu"],"id":"xx","name":"Eray"},{"age":52,"hobies":["cars","camping","fishing","job changer"],"id":2,"name":"Ali"},{"age":50,"hobies":["photography","scout","cooking","siemens"],"id":3,"name":"Sinem"},{"age":53,"hobies":["theater","costume","star","professional interviewer"],"id":4,"name":"Yasin"},{"age":44,"hobies":["mushrooms","swiming","planes","no hello no mello"],"id":5,"name":"Aysun"},{"age":67,"hobies":["cars","mars","koç koç"],"id":67,"name":"Utku"},{"age":49,"hobies":["gastronomi","literature","ege\'nin incisi"],"id":6,"name":"Zeynep"},{"age":50,"hobies":["books","games","fast write"],"id":7,"name":"Cagatay"},{"age":50,"hobies":["painting","presentation","pasta"],"id":8,"name":"Cansu"}]}\n\n$ curl http://localhost:3000/users/1\n\n{"age":50,"hobies":["traveller","movies","sport"],"id":1,"name":"Selin"}\n\n$ curl http://localhost:3000/users/1/name\n\nSelin\n\n$ curl -s -H "Accept-Encoding: gzip" http://localhost:3000/users/5 | zcat\n\n{"age":44,"hobies":["mushrooms","swiming","planes"],"id":5,"name":"Aysun"}\n'}}),l=new W({props:{id:"request-post",className:"t2",$$slots:{default:[oe]},$$scope:{ctx:e}}}),g=new J({props:{wrap:!0,code:'$ curl http://localhost:3000/users/1/hobies\n\n["traveller","movies","sport"]\n\n$ curl -d \'running\' -X POST http://localhost:3000/users/1/hobies\n\n{"msg":"success"}\n\n$ curl http://localhost:3000/users/1/hobies\n\n["traveller","movies","sport","running"]\n'}}),b=new W({props:{id:"request-put",className:"t2",$$slots:{default:[re]},$$scope:{ctx:e}}}),x=new J({props:{wrap:!0,code:'$ curl http://localhost:3000/users/7\n\n{"age":50,"hobies":["books","games","fast write"],"id":7,"name":"Cagatay"}\n\n$ curl -d \'{"outside": ["running"], "inside": ["movies"]}\' -X PUT http://localhost:3000/users/7/hobies\n\n{"msg":"success"}\n\n$ curl http://localhost:3000/users/7\n\n{"age":50,"hobies":{"inside":["movies"],"outside":["running"]},"id":7,"name":"Cagatay"}\n\n$ curl http://localhost:3000/users/7/hobies/inside\n\n["movies"]\n'}}),C=new W({props:{id:"request-patch",className:"t2",$$slots:{default:[se]},$$scope:{ctx:e}}}),S=new J({props:{wrap:!0,code:'$ curl http://localhost:3000/users/xx\n\n{"age":55,"hobies":["games","sci-fi","driver"],"id":"xx","name":"Eray"}\n\n$ curl -d \'{"id": 100}\' -X PATCH http://localhost:3000/users/xx\n\n{"msg":"success"}\n\n$ curl http://localhost:3000/users/xx\n\n{"err": "Not found!"}\n\n$ curl http://localhost:3000/users/100\n\n{"age":55,"hobies":["games","sci-fi","driver"],"id":100,"name":"Eray"}\n'}}),j=new W({props:{id:"request-delete",className:"t2",$$slots:{default:[ae]},$$scope:{ctx:e}}}),I=new J({props:{wrap:!0,code:'$ curl http://localhost:3000/users/8\n\n{"age":50,"hobies":["painting","presentation","pasta"],"id":8,"name":"Cansu"}\n\n$ curl -X DELETE http://localhost:3000/users/8/hobies\n\n{"msg":"success"}\n\n$ curl http://localhost:3000/users/8\n\n{"age":50,"id":8,"name":"Cansu"}\n\n$ curl -X DELETE http://localhost:3000\n\n{"msg":"success"}\n\n$ curl http://localhost:3000\n\nnull\n'}}),{c(){t=$("p"),t.textContent="Open a test json file",n=h(),R(o.$$.fragment),r=h(),R(s.$$.fragment),a=h(),R(i.$$.fragment),c=h(),R(l.$$.fragment),p=h(),f=$("p"),f.textContent="Append a new data to field. Post location should be an array.",m=h(),R(g.$$.fragment),v=h(),R(b.$$.fragment),w=h(),R(x.$$.fragment),y=h(),R(C.$$.fragment),k=h(),L=$("p"),L.textContent="Patch location and given data must be an object.",_=h(),R(S.$$.fragment),E=h(),R(j.$$.fragment),z=h(),R(I.$$.fragment)},m(e,d){u(e,t,d),u(e,n,d),D(o,e,d),u(e,r,d),D(s,e,d),u(e,a,d),D(i,e,d),u(e,c,d),D(l,e,d),u(e,p,d),u(e,f,d),u(e,m,d),D(g,e,d),u(e,v,d),D(b,e,d),u(e,w,d),D(x,e,d),u(e,y,d),D(C,e,d),u(e,k,d),u(e,L,d),u(e,_,d),D(S,e,d),u(e,E,d),D(j,e,d),u(e,z,d),D(I,e,d),T=!0},p(e,[t]){const n={};1&t&&(n.$$scope={dirty:t,ctx:e}),s.$set(n);const o={};1&t&&(o.$$scope={dirty:t,ctx:e}),l.$set(o);const r={};1&t&&(r.$$scope={dirty:t,ctx:e}),b.$set(r);const a={};1&t&&(a.$$scope={dirty:t,ctx:e}),C.$set(a);const i={};1&t&&(i.$$scope={dirty:t,ctx:e}),j.$set(i)},i(e){T||(A(o.$$.fragment,e),A(s.$$.fragment,e),A(i.$$.fragment,e),A(l.$$.fragment,e),A(g.$$.fragment,e),A(b.$$.fragment,e),A(x.$$.fragment,e),A(C.$$.fragment,e),A(S.$$.fragment,e),A(j.$$.fragment,e),A(I.$$.fragment,e),T=!0)},o(e){M(o.$$.fragment,e),M(s.$$.fragment,e),M(i.$$.fragment,e),M(l.$$.fragment,e),M(g.$$.fragment,e),M(b.$$.fragment,e),M(x.$$.fragment,e),M(C.$$.fragment,e),M(S.$$.fragment,e),M(j.$$.fragment,e),M(I.$$.fragment,e),T=!1},d(e){e&&d(t),e&&d(n),O(o,e),e&&d(r),O(s,e),e&&d(a),O(i,e),e&&d(c),O(l,e),e&&d(p),e&&d(f),e&&d(m),O(g,e),e&&d(v),O(b,e),e&&d(w),O(x,e),e&&d(y),O(C,e),e&&d(k),e&&d(L),e&&d(_),O(S,e),e&&d(E),O(j,e),e&&d(z),O(I,e)}}}class ce extends B{constructor(e){super(),U(this,e,null,ie,s,{})}}function le(e){let t;return{c(){t=m("Run it")},m(e,n){u(e,t,n)},d(e){e&&d(t)}}}function ue(e){let t,n;return{c(){t=m("Build own docker image with "),n=$("b"),n.textContent="INDIGO"},m(e,o){u(e,t,o),u(e,n,o)},d(e){e&&d(t),e&&d(n)}}}function de(e){let t,n,o,r,s,a,i,c,l,p,f,m,g,v,b,w,x,y,C,k,L,_,S,E;return s=new W({props:{id:"docker-run",className:"t2",$$slots:{default:[le]},$$scope:{ctx:e}}}),i=new J({props:{wrap:!0,code:`$ docker run -d --name myawesomeapp -v $(pwd)/public:/public -p 3000:3000 ryts/indigo:${e[0]} --folder /public --no-api --no-ui --spa`}}),f=new W({props:{id:"docker-build",className:"t2",$$slots:{default:[ue]},$$scope:{ctx:e}}}),b=new J({props:{wrap:!0,code:'FROM ryts/indigo:v0.4.3\n\nCOPY public .\n\nCMD ["--folder", ".", "--no-api", "--no-ui", "--spa"]\n'}}),C=new J({props:{code:"$ docker build -t awesomeapp:v1 -f Dockerfile ."}}),S=new J({props:{code:"$ docker run --rm -it -p 3000:3000 awesomeapp:v1"}}),{c(){t=$("p"),t.innerHTML="You can serve your exported React,Svelte any other static site with <b>INDIGO</b>",n=h(),o=$("p"),o.textContent="Just mount your folder in anywere in our docker image, this is a scratch image just indigo executable inside.",r=h(),R(s.$$.fragment),a=h(),R(i.$$.fragment),c=h(),l=$("p"),l.innerHTML="Now open your <b>http://localhost:3000</b> and use it",p=h(),R(f.$$.fragment),m=h(),g=$("p"),g.textContent="First create dockerfile",v=h(),R(b.$$.fragment),w=h(),x=$("p"),x.textContent="After that build that file with",y=h(),R(C.$$.fragment),k=h(),L=$("p"),L.textContent="And run your application everywhere, in your machine like that",_=h(),R(S.$$.fragment)},m(e,d){u(e,t,d),u(e,n,d),u(e,o,d),u(e,r,d),D(s,e,d),u(e,a,d),D(i,e,d),u(e,c,d),u(e,l,d),u(e,p,d),D(f,e,d),u(e,m,d),u(e,g,d),u(e,v,d),D(b,e,d),u(e,w,d),u(e,x,d),u(e,y,d),D(C,e,d),u(e,k,d),u(e,L,d),u(e,_,d),D(S,e,d),E=!0},p(e,[t]){const n={};2&t&&(n.$$scope={dirty:t,ctx:e}),s.$set(n);const o={};1&t&&(o.code=`$ docker run -d --name myawesomeapp -v $(pwd)/public:/public -p 3000:3000 ryts/indigo:${e[0]} --folder /public --no-api --no-ui --spa`),i.$set(o);const r={};2&t&&(r.$$scope={dirty:t,ctx:e}),f.$set(r)},i(e){E||(A(s.$$.fragment,e),A(i.$$.fragment,e),A(f.$$.fragment,e),A(b.$$.fragment,e),A(C.$$.fragment,e),A(S.$$.fragment,e),E=!0)},o(e){M(s.$$.fragment,e),M(i.$$.fragment,e),M(f.$$.fragment,e),M(b.$$.fragment,e),M(C.$$.fragment,e),M(S.$$.fragment,e),E=!1},d(e){e&&d(t),e&&d(n),e&&d(o),e&&d(r),O(s,e),e&&d(a),O(i,e),e&&d(c),e&&d(l),e&&d(p),O(f,e),e&&d(m),e&&d(g),e&&d(v),O(b,e),e&&d(w),e&&d(x),e&&d(y),O(C,e),e&&d(k),e&&d(L),e&&d(_),O(S,e)}}}function pe(e,t,n){let{version:o}=t;return e.$$set=e=>{"version"in e&&n(0,o=e.version)},[o]}class $e extends B{constructor(e){super(),U(this,e,pe,de,s,{version:0})}}function fe(e){let t,n,r,s,a,i,p,f,w,x,y,C,k,L,_,S,E,j,z,I,T,q,H,N,P,G,U,B;return S=new te({}),I=new ce({}),N=new $e({props:{version:e[0]}}),{c(){t=$("div"),n=$("div"),r=$("button"),s=m("Command Line"),i=h(),p=$("button"),f=m("Requests"),x=h(),y=$("button"),C=m("Docker Image Build"),L=h(),_=$("div"),R(S.$$.fragment),j=h(),z=$("div"),R(I.$$.fragment),q=h(),H=$("div"),R(N.$$.fragment),b(r,"class",a=c("CLI"==e[1]?"selected":void 0)+" svelte-1a5zkiu"),b(p,"class",w=c("Req"==e[1]?"selected":void 0)+" svelte-1a5zkiu"),b(y,"class",k=c("Docker"==e[1]?"selected":void 0)+" svelte-1a5zkiu"),b(n,"class","button-group svelte-1a5zkiu"),b(_,"class",E=c("CLI"==e[1]?void 0:"invisible")+" svelte-1a5zkiu"),b(z,"class",T=c("Req"==e[1]?void 0:"invisible")+" svelte-1a5zkiu"),b(H,"class",P=c("Docker"==e[1]?void 0:"invisible")+" svelte-1a5zkiu")},m(o,a){u(o,t,a),l(t,n),l(n,r),l(r,s),l(n,i),l(n,p),l(p,f),l(n,x),l(n,y),l(y,C),l(t,L),l(t,_),D(S,_,null),l(t,j),l(t,z),D(I,z,null),l(t,q),l(t,H),D(N,H,null),G=!0,U||(B=[g(r,"click",v(e[2])),g(p,"click",v(e[3])),g(y,"click",v(e[4]))],U=!0)},p(e,[t]){(!G||2&t&&a!==(a=c("CLI"==e[1]?"selected":void 0)+" svelte-1a5zkiu"))&&b(r,"class",a),(!G||2&t&&w!==(w=c("Req"==e[1]?"selected":void 0)+" svelte-1a5zkiu"))&&b(p,"class",w),(!G||2&t&&k!==(k=c("Docker"==e[1]?"selected":void 0)+" svelte-1a5zkiu"))&&b(y,"class",k),(!G||2&t&&E!==(E=c("CLI"==e[1]?void 0:"invisible")+" svelte-1a5zkiu"))&&b(_,"class",E),(!G||2&t&&T!==(T=c("Req"==e[1]?void 0:"invisible")+" svelte-1a5zkiu"))&&b(z,"class",T);const n={};1&t&&(n.version=e[0]),N.$set(n),(!G||2&t&&P!==(P=c("Docker"==e[1]?void 0:"invisible")+" svelte-1a5zkiu"))&&b(H,"class",P)},i(e){G||(A(S.$$.fragment,e),A(I.$$.fragment,e),A(N.$$.fragment,e),G=!0)},o(e){M(S.$$.fragment,e),M(I.$$.fragment,e),M(N.$$.fragment,e),G=!1},d(e){e&&d(t),O(S),O(I),O(N),U=!1,o(B)}}}function me(e,t,n){let o=window.location.href.split("#").pop().split("-")[0];switch(o){case"request":o="Req";break;case"docker":o="Docker";break;default:o="CLI"}let{version:r}=t;let s;return e.$$set=e=>{"version"in e&&n(0,r=e.version)},e.$$.update=()=>{32&e.$$.dirty&&n(1,s=o)},[r,s,()=>n(1,s="CLI"),()=>n(1,s="Req"),()=>n(1,s="Docker")]}class he extends B{constructor(e){super(),U(this,e,me,fe,s,{version:0})}}function ge(e,t,n){const o=e.slice();return o[6]=t[n].browser_download_url,o[7]=t[n].name,o[9]=n,o}function ve(e,t,n){const o=e.slice();return o[2]=t[n][0],o[3]=t[n][1],o}function be(e){let t;return{c(){t=m("Installation")},m(e,n){u(e,t,n)},d(e){e&&d(t)}}}function we(e){let t,n,o,r,s=e[7]+"",a=e[3].length-1>e[9]?" | ":"";return{c(){t=$("a"),n=m(s),r=m(a),b(t,"href",o=e[6])},m(e,o){u(e,t,o),l(t,n),u(e,r,o)},p(e,i){1&i&&s!==(s=e[7]+"")&&w(n,s),1&i&&o!==(o=e[6])&&b(t,"href",o),1&i&&a!==(a=e[3].length-1>e[9]?" | ":"")&&w(r,a)},d(e){e&&d(t),e&&d(r)}}}function xe(e){let t,n,o,r,s,a,i=e[2].padEnd(10,"-")+"",c=e[3],f=[];for(let t=0;t<c.length;t+=1)f[t]=we(ge(e,c,t));return{c(){t=$("li"),n=$("span"),o=m(i),r=m("|"),s=h();for(let e=0;e<f.length;e+=1)f[e].c();a=h(),b(n,"class","font-code svelte-lptvmc"),b(t,"class","svelte-lptvmc")},m(e,i){u(e,t,i),l(t,n),l(n,o),l(n,r),l(t,s);for(let e=0;e<f.length;e+=1)f[e].m(t,null);l(t,a)},p(e,n){if(1&n&&i!==(i=e[2].padEnd(10,"-")+"")&&w(o,i),1&n){let o;for(c=e[3],o=0;o<c.length;o+=1){const r=ge(e,c,o);f[o]?f[o].p(r,n):(f[o]=we(r),f[o].c(),f[o].m(t,a))}for(;o<f.length;o+=1)f[o].d(1);f.length=c.length}},d(e){e&&d(t),p(f,e)}}}function ye(e){let t,n,o,r;return o=new J({props:{button:!0,code:`curl -fsSL ${e[0].linux.find(Le).browser_download_url} | sudo tar --overwrite -zx -C /usr/local/bin/`}}),{c(){t=$("p"),t.textContent="Get in Linux amd64",n=h(),R(o.$$.fragment)},m(e,s){u(e,t,s),u(e,n,s),D(o,e,s),r=!0},p(e,t){const n={};1&t&&(n.code=`curl -fsSL ${e[0].linux.find(Le).browser_download_url} | sudo tar --overwrite -zx -C /usr/local/bin/`),o.$set(n)},i(e){r||(A(o.$$.fragment,e),r=!0)},o(e){M(o.$$.fragment,e),r=!1},d(e){e&&d(t),e&&d(n),O(o,e)}}}function Ce(e){let t;return{c(){t=m("Options")},m(e,n){u(e,t,n)},d(e){e&&d(t)}}}function ke(e){let t,n,r,s,a,i,c,f,g,v,x,y,C,k,L,_,S,E,j,z,I,T,q,H,N,G,U,B,V,X,F,Y,Z,K,Q,ee,te,ne,oe,re;a=new W({props:{id:"installation",$$slots:{default:[be]},$$scope:{ctx:e}}});let se=Object.entries(e[0]),ae=[];for(let t=0;t<se.length;t+=1)ae[t]=xe(ve(e,se,t));let ie=e[0].linux&&ye(e);return I=new J({props:{button:!0,code:"docker run --rm -it -p 3000:3000 ryts/indigo:latest https://rytsh.github.io/indigo/test/users.json"}}),q=new W({props:{id:"options",$$slots:{default:[Ce]},$$scope:{ctx:e}}}),N=new J({props:{code:"indigo [OPTIONS] <file_or_URL>\nGenerate RestAPI with JSON file and serve folder\n\nOptions:\n  --port, -P <3000>\n    Set port, tool default is '3000'\n  --host, -H <localhost>\n    Set host, tool default is 'localhost'\n\n  --location <./data.json>\n    Change save location\n  --api-path <api_url_path>\n    Set API path prefix\n  --ui-path <ui_url_path>\n    Set UI path default '/indigo'\n\n  --folder <./public>\n    Serve folder\n  --folder-path <folder_path>\n    Set Folder path, works with folder option\n  --browsable\n    Enable folder browsable\n  --spa\n    Enable SPA mode\n  --no-index\n    Stop redirect to index\n\n  --no-api\n    Close API server, use just serve folder\n  --no-ui\n    Close UI server\n\n  --auth-basic <username:password>\n    Enable basic authentication with username and password\n\n  --no-color\n    Disable color output\n\n  -v, --version\n    Show version number\n  -h, --help\n    Show help\n"}}),Q=new he({props:{version:e[1]}}),{c(){t=$("p"),t.textContent="Serve any json file with GET, POST, PUT, PATCH or DELETE request data, even most inner object and root path.",n=h(),r=$("p"),r.textContent="Serve folder with SPA, browsable support options.",s=h(),R(a.$$.fragment),i=h(),c=$("p"),f=m("The most recent version of "),g=$("b"),g.textContent="indigo",v=m(" is "),x=m(e[1]),y=m(". Downloads are available on "),C=$("a"),C.textContent="GitHub",k=m(":"),L=h(),_=$("ul");for(let e=0;e<ae.length;e+=1)ae[e].c();S=h(),ie&&ie.c(),E=h(),j=$("p"),j.innerHTML='Run in <a href="https://hub.docker.com/r/ryts/indigo" target="_blank">docker</a>',z=h(),R(I.$$.fragment),T=h(),R(q.$$.fragment),H=h(),R(N.$$.fragment),G=h(),U=$("p"),U.textContent="s + enter will create a snapshot of the db on a new file.",B=h(),V=$("p"),V.textContent="If same URL uses, order is UI > API > FILE",X=h(),F=$("p"),F.innerHTML='Gzip compress can usable with <span class="color">Accept-Encoding: gzip</span> header set.',Y=h(),Z=$("hr"),K=h(),R(Q.$$.fragment),ee=h(),te=$("hr"),ne=h(),oe=$("p"),oe.innerHTML='<a href="https://github.com/rytsh/indigo/blob/master/LICENSE" target="_blank">MIT Licensed</a> | <a href="mailto:rytsh@devusage.com">rytsh@devusage.com</a>',b(C,"href","https://github.com/rytsh/indigo/releases/latest"),b(C,"target","_blank"),b(oe,"class","mail svelte-lptvmc")},m(e,o){u(e,t,o),u(e,n,o),u(e,r,o),u(e,s,o),D(a,e,o),u(e,i,o),u(e,c,o),l(c,f),l(c,g),l(c,v),l(c,x),l(c,y),l(c,C),l(c,k),u(e,L,o),u(e,_,o);for(let e=0;e<ae.length;e+=1)ae[e].m(_,null);u(e,S,o),ie&&ie.m(e,o),u(e,E,o),u(e,j,o),u(e,z,o),D(I,e,o),u(e,T,o),D(q,e,o),u(e,H,o),D(N,e,o),u(e,G,o),u(e,U,o),u(e,B,o),u(e,V,o),u(e,X,o),u(e,F,o),u(e,Y,o),u(e,Z,o),u(e,K,o),D(Q,e,o),u(e,ee,o),u(e,te,o),u(e,ne,o),u(e,oe,o),re=!0},p(e,[t]){const n={};if(1024&t&&(n.$$scope={dirty:t,ctx:e}),a.$set(n),(!re||2&t)&&w(x,e[1]),1&t){let n;for(se=Object.entries(e[0]),n=0;n<se.length;n+=1){const o=ve(e,se,n);ae[n]?ae[n].p(o,t):(ae[n]=xe(o),ae[n].c(),ae[n].m(_,null))}for(;n<ae.length;n+=1)ae[n].d(1);ae.length=se.length}e[0].linux?ie?(ie.p(e,t),1&t&&A(ie,1)):(ie=ye(e),ie.c(),A(ie,1),ie.m(E.parentNode,E)):ie&&(P={r:0,c:[],p:P},M(ie,1,1,(()=>{ie=null})),P.r||o(P.c),P=P.p);const r={};1024&t&&(r.$$scope={dirty:t,ctx:e}),q.$set(r);const s={};2&t&&(s.version=e[1]),Q.$set(s)},i(e){re||(A(a.$$.fragment,e),A(ie),A(I.$$.fragment,e),A(q.$$.fragment,e),A(N.$$.fragment,e),A(Q.$$.fragment,e),re=!0)},o(e){M(a.$$.fragment,e),M(ie),M(I.$$.fragment,e),M(q.$$.fragment,e),M(N.$$.fragment,e),M(Q.$$.fragment,e),re=!1},d(e){e&&d(t),e&&d(n),e&&d(r),e&&d(s),O(a,e),e&&d(i),e&&d(c),e&&d(L),e&&d(_),p(ae,e),e&&d(S),ie&&ie.d(e),e&&d(E),e&&d(j),e&&d(z),O(I,e),e&&d(T),O(q,e),e&&d(H),O(N,e),e&&d(G),e&&d(U),e&&d(B),e&&d(V),e&&d(X),e&&d(F),e&&d(Y),e&&d(Z),e&&d(K),O(Q,e),e&&d(ee),e&&d(te),e&&d(ne),e&&d(oe)}}}const Le=e=>"amd64"==e.arch;function _e(e,t,n){let o,r;return(async()=>{const e=await(async(e="https://api.github.com/repos/rytsh/indigo/releases/latest")=>{const t=await fetch(e);return await t.json()})();n(1,r=e.tag_name),e.assets.forEach((e=>{const t=e.name.split("-"),[r,s]=[t[1],t[2]],a={name:e.name,arch:s,browser_download_url:e.browser_download_url};o[r]||n(0,o[r]=[],o),o[r].push(a)}))})(),n(0,o={}),n(1,r=""),[o,r]}class Se extends B{constructor(e){super(),U(this,e,_e,ke,s,{})}}function Ee(t){let n,o,r,s,a,i,c,p,f;return p=new Se({}),{c(){n=$("div"),o=$("a"),o.innerHTML='<svg width="80" height="80" viewBox="0 0 250 250" style="fill:#151513; color:#fff; position: absolute; top: 0; border: 0; right: 0;" aria-hidden="true"><path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"></path><path d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2" fill="currentColor" style="transform-origin: 130px 106px;" class="octo-arm"></path><path d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z" fill="currentColor" class="octo-body"></path></svg>',r=$("style"),r.textContent=".github-corner:hover .octo-arm{animation:octocat-wave 560ms ease-in-out}@keyframes octocat-wave{0%,100%{transform:rotate(0)}20%,60%{transform:rotate(-25deg)}40%,80%{transform:rotate(10deg)}}@media (max-width:500px){.github-corner:hover .octo-arm{animation:none}.github-corner .octo-arm{animation:octocat-wave 560ms ease-in-out}}",s=h(),a=$("div"),a.innerHTML='<div class="container svelte-cwqvle"><p class="title svelte-cwqvle">INDIGO</p></div>',i=h(),c=$("div"),R(p.$$.fragment),b(o,"href","https://github.com/rytsh/indigo"),b(o,"target","_blank"),b(o,"class","github-corner"),b(o,"aria-label","View source on GitHub"),b(a,"class","top-bar svelte-cwqvle"),b(c,"class","main container svelte-cwqvle"),b(n,"class","landing-page svelte-cwqvle")},m(e,t){u(e,n,t),l(n,o),l(n,r),l(n,s),l(n,a),l(n,i),l(n,c),D(p,c,null),f=!0},p:e,i(e){f||(A(p.$$.fragment,e),f=!0)},o(e){M(p.$$.fragment,e),f=!1},d(e){e&&d(n),O(p)}}}return new class extends B{constructor(e){super(),U(this,e,null,Ee,s,{})}}({target:document.body})}();