(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{130:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return d})),n.d(t,"metadata",(function(){return m})),n.d(t,"toc",(function(){return b})),n.d(t,"Highlight",(function(){return y})),n.d(t,"default",(function(){return O}));var r=n(3),o=n(7),a=n(0),c=n.n(a),i=n(133),l=n(134),u=n(85),p=n.n(u);function s({toc:e,isChild:t}){return e.length?c.a.createElement("ul",{className:t?"":"table-of-contents"},e.map((e=>c.a.createElement("li",{key:e.id},c.a.createElement("a",{href:`#${e.id}`,dangerouslySetInnerHTML:{__html:e.value}}),c.a.createElement(s,{isChild:!0,toc:e.children}))))):null}var f=function({toc:e}){return c.a.createElement("div",{className:Object(l.a)(p.a.tableOfContentsInline)},c.a.createElement(s,{toc:e}))},d={id:"mdx",title:"Powered Compex FEATURES"},m={unversionedId:"mdx",id:"mdx",isDocsHomePage:!1,title:"Powered Compex FEATURES",description:";",source:"@site/docs/interactiveDoc.md",slug:"/mdx",permalink:"/docs/mdx",editUrl:"/docs/interactiveDoc.md",version:"current"},b=[],y=function(e){var t=e.children,n=e.color;return Object(i.b)("span",{style:{backgroundColor:n,borderRadius:"2px",color:"#fff",padding:"0.2rem"},onClick:function(){return alert("Highlight pressed!")}},t)},g={toc:b,Highlight:y};function O(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},g,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)(f,{toc:b,mdxType:"TOCInline"}),"; You can write JSX and use React components within your Markdown thanks to [MDX](https://mdxjs.com/).",Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},".mdx")," extension is not required, but will enable better support from tooling (IDE, Prettier...)."),Object(i.b)(y,{color:"#25c2a0",mdxType:"Highlight"},"Docusaurus green")," and ",Object(i.b)(y,{color:"#1877F2",mdxType:"Highlight"},"Facebook blue")," are my favorite colors.",Object(i.b)("p",null,"I can write ",Object(i.b)("strong",{parentName:"p"},"Markdown")," alongside my ",Object(i.b)("em",{parentName:"p"},"JSX"),"!"))}O.isMDXComponent=!0},133:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),p=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=p(n),d=r,m=s["".concat(c,".").concat(d)]||s[d]||f[d]||a;return n?o.a.createElement(m,i(i({ref:t},u),{},{components:n})):o.a.createElement(m,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var u=2;u<a;u++)c[u]=n[u];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},134:function(e,t,n){"use strict";function r(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}t.a=function(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(o&&(o+=" "),o+=t);return o}}}]);