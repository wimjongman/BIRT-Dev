(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{130:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return h}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),c=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},b=function(e){var t=c(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),b=c(r),d=n,h=b["".concat(i,".").concat(d)]||b[d]||u[d]||o;return r?a.a.createElement(h,s(s({ref:t},l),{},{components:r})):a.a.createElement(h,s({ref:t},l))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},71:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return p})),r.d(t,"default",(function(){return c}));var n=r(3),a=r(7),o=(r(0),r(130)),i={id:"t_testing-reports",title:"Testing Reports",sidebar_label:"Testing Reports"},s={unversionedId:"t_testing-reports",id:"t_testing-reports",isDocsHomePage:!1,title:"Testing Reports",description:"We're now ready to test the report layout. We verified the data set earlier, so now we want to verify that the report is presenting the data as we expect.",source:"@site/docs/t_testing-reports.md",slug:"/t_testing-reports",permalink:"/birt-website/docs/t_testing-reports",editUrl:"/https://github.com/chloetz/docs/t_testing-reports.md",version:"current",sidebar_label:"Testing Reports",sidebar:"someSidebar",previous:{title:"Tables",permalink:"/birt-website/docs/t_tables"},next:{title:"Text Item",permalink:"/birt-website/docs/t_text-item"}},p=[{value:"Preview as HTML",id:"preview-as-html",children:[]},{value:"Preview as PDF",id:"preview-as-pdf",children:[]}],l={toc:p};function c(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"We're now ready to test the report layout. We verified the data set earlier, so now we want to verify that the report is presenting the data as we expect."),Object(o.b)("p",null,"We preview the report by clicking on the Preview tab in the lower left corner of the report editor. This report has no parameters, but if it did, they could be modified by selecting the Show Report Parameters button."),Object(o.b)("p",null,"The window that appears is an embedded web browser, which displays the report in HTML format. The report appears as a single page. This works best for smaller data sets. Since the sample database has quite a bit of data, we used a WHERE clause to limit the results. We could also use a report parameter or a data set filter to limit the amount of data displayed at any one time."),Object(o.b)("p",null,"There are a number of ways we can improve the report's appearance:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Add a title to the top of the report.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Add some color to enhance the column headings.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Shrink the size of the city and state columns.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Add some color to make the state and city group headers stand out.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Format the phone numbers.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Sort customers by name."))),Object(o.b)("p",null,"Before we apply these aesthetic enhancements, let's look at other ways to preview the report."),Object(o.b)("h2",{id:"preview-as-html"},"Preview as HTML"),Object(o.b)("p",null,"The Preview tab is handy for a quick review of your report. BIRT runs the report each time you switch to Preview. However, you can have either the Layout or the Preview tab open, but not both."),Object(o.b)("p",null,"Instead, we can preview the report in a separate window. Find the Preview button in the toolbar. Use the little arrow next to it to open the pull-down. You can then Preview as HTML in a separate window. This allows you to switch back and forth between your layout editor and your preview without rerunning the report.\nPreview in Web Viewer"),Object(o.b)("p",null,"This option is similar to the one above. It allows the report to be previewed as HTML in a separate browser window using the BIRT Web Viewer. The viewer provides powerful navigation capabilities such as TOC, Previous Page, Next Page, Goto Page as well as search and export capabilities."),Object(o.b)("p",null,"To preview the report in the Web Viewer use the toolbar Preview button and select the Web Viewer option or alternatively invoke File->Preview in Web Viewer."),Object(o.b)("h2",{id:"preview-as-pdf"},"Preview as PDF"),Object(o.b)("p",null,"You can also choose Preview as PDF. This converts the layout to a multi-page PDF format."))}c.isMDXComponent=!0}}]);