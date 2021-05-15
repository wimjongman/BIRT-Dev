(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{130:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return d}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=o.a.createContext({}),s=function(e){var t=o.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=s(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(r),m=n,d=p["".concat(i,".").concat(m)]||p[m]||b[m]||a;return r?o.a.createElement(d,c(c({ref:t},u),{},{components:r})):o.a.createElement(d,c({ref:t},u))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var u=2;u<a;u++)i[u]=r[u];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},97:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return s}));var n=r(3),o=r(7),a=(r(0),r(130)),i={id:"community",title:"Community",sidebar_label:"Community"},c={unversionedId:"community",id:"community",isDocsHomePage:!1,title:"Community",description:"Mail List",source:"@site/docs/community.md",slug:"/community",permalink:"/birt-website/docs/community",editUrl:"/https://github.com/chloetz/docs/community.md",version:"current",sidebar_label:"Community",sidebar:"someSidebar",previous:{title:"My first Report",permalink:"/birt-website/docs/my-first-report"},next:{title:"Brief Editor Tour",permalink:"/birt-website/docs/t_brief-editor-tour"}},l=[{value:"Mail List",id:"mail-list",children:[]},{value:"Bugzilla",id:"bugzilla",children:[]}],u={toc:l};function s(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"mail-list"},"Mail List"),Object(a.b)("p",null,"While the Working Group is for people who use BIRT, the mailing list is for those who help develop BIRT."),Object(a.b)("h2",{id:"bugzilla"},"Bugzilla"),Object(a.b)("p",null,"BIRT uses Bugzilla to track bugs and enhancements."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},Object(a.b)("a",{parentName:"strong",href:"https://bugs.eclipse.org/bugs/"},"Sign Up"))," - Create a Bugzilla account. Learn how to use Bugzilla.")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},Object(a.b)("a",{parentName:"strong",href:"https://bugs.eclipse.org/bugs/enter_bug.cgi?product=BIRT"},"Report a Bug or Enhancement"))," - When reporting a bug, please give the exact steps to reproduce the problem. Please explain what went wrong, and what you expected to happen. For an enhancement, please explain how you'd use the new feature.")),Object(a.b)("div",{class:"alert alert--warning",role:"alert"},"BIRT bugs are often associated with a report design. Please attach your design to your Bugzilla entry."),Object(a.b)("p",null,'If you encounter a problem such as "An error occurred", or failure to open views or editors, please attach your Eclipse log file. To see the exception, use Window -> Show View -> Other. Open the PDE Runtime group and choose Error Log. Within the error log window, find the BIRT exception (if any) that just occurred. Double click on the error in question and you\'ll see a stack trace. Paste that into your bug report, preferably as a file attachment.'),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},Object(a.b)("a",{parentName:"strong",href:"https://bugs.eclipse.org/bugs/query.cgi?product=BIRT"},"Search Bugs"))," - Find BIRT-related bugs using the Bugzilla search facility.")))}s.isMDXComponent=!0}}]);