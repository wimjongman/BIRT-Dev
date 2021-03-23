(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{123:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return p}));var a=r(3),n=r(7),i=(r(0),r(133)),o={id:"overview-designer",title:"Designer",sidebar_label:"Designer"},s={unversionedId:"overview-designer",id:"overview-designer",isDocsHomePage:!1,title:"Designer",description:"Report Designer",source:"@site/docs/overview-designer.md",slug:"/overview-designer",permalink:"/docs/overview-designer",editUrl:"/docs/overview-designer.md",version:"current",sidebar_label:"Designer",sidebar:"someSidebar",previous:{title:"Archticture",permalink:"/docs/overview-architecture"},next:{title:"Customization",permalink:"/docs/overview-customization"}},c=[{value:"Report Designer",id:"report-designer",children:[]}],l={toc:c};function p(e){var t=e.components,o=Object(n.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},l,o,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"report-designer"},"Report Designer"),Object(i.b)("p",null,"Application development with BIRT starts with the report designer. This Eclipse-based set of plug-ins offers a variety of tools to build reports quickly. Some of these are listed below."),Object(i.b)("p",null,Object(i.b)("img",{alt:"img",src:r(193).default})),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Data Explorer - Organizes your data sources (connections) and data sets (queries). The data set editor allows you to test your data set to ensure the report receives the correct data. Within this view multi dimensional cubes can be created using existing data sets. Cubes are currently used when building dynamic cross tables. This view also is used to design report parameters.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Navigator - Shows the projects and files that are in your workspace. You can also create projects, designs, and other BIRT files here.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Layout View - WYSIWYG editor that provides drag & drop creation of the presentation portion of your report.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Palette - Contains the standard BIRT report elements such as labels, tables, and charts and is used in conjunction with the Layout View to design reports.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Property Editor - Presents the most commonly used properties in a convenient format that makes editing quick and easy. BIRT also integrates with the standard Eclipse property view to provide a detailed listing of all properties for an item.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Script Editor - Scripting adds business logic to reports during data access, during report generation, or during viewing. The code editor provides standard Eclipse features for editing your scripts: syntax coloring, auto-complete and more. An interesting new feature, for BIRT 2.3 is the ability to debug scripts while the report is running."))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Outline - BIRT reports are organized as a tree structure with the overall report as the root, and separate categories for styles, report content, data sources, data sets, report parameters and more. The Outline view provides a compact overview of your entire report structure."))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Cheat Sheets - Learning a new tool is always a challenge, but Eclipse offers an innovative solution: cheat sheets. These are short bits of documentation that walk you through new tasks.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Resource Explorer - BIRT allows the reuse of report objects, such as tables, data sources and styles. Objects created for reuse are stored in a library file. To browse the contents of report libraries BIRT supplies a Resource Explorer view. This view list all libraries within the resource folder, in addition other shared content such as images and JavaScript files.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Chart Builder - Adding Charts to BIRT designs is expedited with the Chart Builder. Chart creation is separated into three phases: Select Chart Type, Select Data, and Format Chart.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Expression Builder - BIRT expressions are really just simple scripts that return a value. Expressions are used for assigning data values to report elements, building image locations, hyperlinks, parameter default values and many other places. Expressions are constructed within BIRT using the Expression Builder."))))}p.isMDXComponent=!0},133:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return m}));var a=r(0),n=r.n(a);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=n.a.createContext({}),p=function(e){var t=n.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=p(e.components);return n.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},b=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(r),b=a,m=u["".concat(o,".").concat(b)]||u[b]||d[b]||i;return r?n.a.createElement(m,s(s({ref:t},l),{},{components:r})):n.a.createElement(m,s({ref:t},l))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=r[l];return n.a.createElement.apply(null,o)}return n.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},193:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/BIRT-Image-02-72b42f53ce212c66f8ab7dd1ea1947d1.png"}}]);