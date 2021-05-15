(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{130:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return m}));var i=r(0),n=r.n(i);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,i,n=function(e,t){if(null==e)return{};var r,i,n={},a=Object.keys(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=n.a.createContext({}),p=function(e){var t=n.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=p(e.components);return n.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},b=n.a.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(r),b=i,m=u["".concat(o,".").concat(b)]||u[b]||d[b]||a;return r?n.a.createElement(m,s(s({ref:t},l),{},{components:r})):n.a.createElement(m,s({ref:t},l))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var l=2;l<a;l++)o[l]=r[l];return n.a.createElement.apply(null,o)}return n.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},186:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/BIRT-Image-04-3cce86d7c42f5580b53e2d3aaf734562.png"},98:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return p}));var i=r(3),n=r(7),a=(r(0),r(130)),o={id:"overview-extensibility",title:"Extensibility",sidebar_label:"Extensibility"},s={unversionedId:"overview-extensibility",id:"overview-extensibility",isDocsHomePage:!1,title:"Extensibility",description:"Extensibility",source:"@site/docs/overview-extensibility.md",slug:"/overview-extensibility",permalink:"/birt-website/docs/overview-extensibility",editUrl:"/https://github.com/chloetz/docs/overview-extensibility.md",version:"current",sidebar_label:"Extensibility",sidebar:"someSidebar",previous:{title:"Customization",permalink:"/birt-website/docs/overview-customization"},next:{title:"Contributors",permalink:"/birt-website/docs/contributors"}},c=[{value:"Extensibility",id:"extensibility",children:[]},{value:"Data Access",id:"data-access",children:[]},{value:"Report Items",id:"report-items",children:[]},{value:"Chart Types",id:"chart-types",children:[]},{value:"Output Formats",id:"output-formats",children:[]}],l={toc:c};function p(e){var t=e.components,o=Object(n.a)(e,["components"]);return Object(a.b)("wrapper",Object(i.a)({},l,o,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"extensibility"},"Extensibility"),Object(a.b)("p",null,"The spectrum of reporting applications is enormous, and the BIRT team can never provide every feature needed by every application. BIRT's scripting support is one way to extend BIRT. Another is to create BIRT extensions that plug into BIRT. The project provides many extension points that can be used to extend BIRT. Some of the more common ones are listed below."),Object(a.b)("h2",{id:"data-access"},"Data Access"),Object(a.b)("p",null,"BIRT uses the Data Tools Open Data Access (ODA) framework for adding custom data access methods. Data access extensions include a runtime component for getting the data. They can also include custom design-time UI for building a custom query. For example, a packaged application vendor can use ODA to build data access UI that works with the vendor's own data model."),Object(a.b)("p",null,Object(a.b)("img",{alt:"img",src:r(186).default})),Object(a.b)("h2",{id:"report-items"},"Report Items"),Object(a.b)("p",null,"BIRT provides a solid set of report items for presenting data. Applications that have specific needs can create additional report items that work within the designer and engine just like BIRT's own report items. For example, a performance management application might add report items that display stop lights, gauges and other visual indications of performance metrics."),Object(a.b)("h2",{id:"chart-types"},"Chart Types"),Object(a.b)("p",null,"The BIRT chart package provides a wide variety of chart types. However, some industries have developed very specific chart formats. Developers can create chart plug-ins that add these chart types into the BIRT charting engine."),Object(a.b)("h2",{id:"output-formats"},"Output Formats"),Object(a.b)("p",null,"BIRT provides output in HTML, Paginated HTML, PDF, XLS, DOC, PPT, ODS, ODP, ODT, and Postscript. Many other types of output are possible: ERich Text Format (RTF), Scalable Vector Graphic (SVG), images, and more. While BIRT will add some of these over time, others may have a more limited audience. Developers can use BIRT engine interfaces to add additional converters, including those specific to a given application."))}p.isMDXComponent=!0}}]);