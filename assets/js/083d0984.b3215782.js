(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{132:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return m}));var a=r(0),n=r.n(a);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=n.a.createContext({}),u=function(e){var t=n.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=u(e.components);return n.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},b=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(r),b=a,m=p["".concat(i,".").concat(b)]||p[b]||d[b]||o;return r?n.a.createElement(m,s(s({ref:t},l),{},{components:r})):n.a.createElement(m,s({ref:t},l))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},74:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return u}));var a=r(3),n=r(7),o=(r(0),r(132)),i={id:"overview-design",title:"Design",sidebar_label:"Design"},s={unversionedId:"overview-design",id:"overview-design",isDocsHomePage:!1,title:"Design",description:"Introduction",source:"@site/docs/overview-design.md",slug:"/overview-design",permalink:"/docs/overview-design",editUrl:"https://github.com/chloetz/BIRT-Dev/edit/master/website/docs/overview-design.md",version:"current",sidebar_label:"Design",sidebar:"someSidebar",previous:{title:"What is BIRT?",permalink:"/docs/what-is-birt"},next:{title:"Archticture",permalink:"/docs/overview-architecture"}},c=[{value:"Introduction",id:"introduction",children:[]},{value:"The Anatomy of a Report",id:"the-anatomy-of-a-report",children:[]}],l={toc:c};function u(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"introduction"},"Introduction"),Object(o.b)("p",null,"BIRT is an Eclipse-based open source reporting tool for web applications, especially those based on Java. BIRT has two main components: "),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"a report designer based on Eclipse, and "),Object(o.b)("li",{parentName:"ul"},"a runtime component that you can add to your app server. ")),Object(o.b)("p",null,"BIRT also offers a charting engine that lets you add charts to your own application."),Object(o.b)("p",null,"We encourage you to download BIRT, try it, and give us your feedback though the forums, newsgroup and Bugzilla."),Object(o.b)("p",null,"With BIRT, you can add a rich variety of reports to your application."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Lists - The simplest reports are lists of data. As the lists get longer, you can add grouping to organize related data together (orders grouped by customer, products grouped by supplier). If your data is numeric, you can easily add totals, averages and other summaries.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Charts - Numeric data is much easier to understand when presented as a chart. BIRT provides pie charts, line & bar charts and many more. BIRT charts can be rendered in SVG and support events to allow user interaction.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Crosstabs - Crosstabs (also called a cross-tabulation or matrix) shows data in two dimensions: sales per quarter or hits per web page.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Letters & Documents - Notices, form letters, and other textual documents are easy to create with BIRT. Documents can include text, formatting, lists, charts and more.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Compound Reports - Many reports need to combine the above into a single document. For example, a customer statement may list the information for the customer, provide text about current promotions, and provide side-by-side lists of payments and charges. A financial report may include disclaimers, charts, tables all with extensive formatting that matches corporate color schemes."))),Object(o.b)("h2",{id:"the-anatomy-of-a-report"},"The Anatomy of a Report"),Object(o.b)("p",null,"BIRT reports consist of four main parts: data, data transforms, business logic and presentation."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Data - Databases, web services, Java objects all can supply data to your BIRT report. BIRT provides JDBC, XML, Web Services, and Flat File support, as well as support for using code to get at other sources of data. BIRT's use of the Open Data Access (ODA) framework allows anyone to build new UI and runtime support for any kind of tabular data. Further, a single report can include data from any number of data sources. BIRT also supplies a feature that allows disparate data sources to be combined using inner and outer joins.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},'Data Transforms - Reports present data sorted, summarized, filtered and grouped to fit the user\'s needs. While databases can do some of this work, BIRT must do it for "simple" data sources such as flat files or Java objects. BIRT allows sophisticated operations such as grouping on sums, percentages of overall totals and more.')),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Business Logic - Real-world data is seldom structured exactly as you'd like for a report. Many reports require business-specific logic to convert raw data into information useful for the user. If the logic is just for the report, you can script it using BIRT's JavaScript support. If your application already contains the logic, you can call into your existing Java code.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Presentation - Once the data is ready, you have a wide range of options for presenting it to the user. Tables, charts, text and more. A single data set can appear in multiple ways, and a single report can present data from multiple data sets."))))}u.isMDXComponent=!0}}]);