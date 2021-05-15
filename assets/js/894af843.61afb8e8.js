(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{105:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return n})),a.d(t,"metadata",(function(){return o})),a.d(t,"toc",(function(){return i})),a.d(t,"default",(function(){return b}));var s=a(3),l=a(7),r=(a(0),a(130)),n={id:"template-sample-database",title:"Sample Database",sidebar_label:"Sample Database"},o={unversionedId:"template-sample-database",id:"template-sample-database",isDocsHomePage:!1,title:"Sample Database",description:"The BIRT sample database provides a simple set of tables and data that form the basis for BIRT sample reports. The schema is for Classic Models, a retailer of scale models of classic cars. The database contains typical business data such as customers, orders, order line items, products and so on. It was designed to illustrate many of the features of the BIRT report designer.",source:"@site/docs/template-sample-database.md",slug:"/template-sample-database",permalink:"/birt-website/docs/template-sample-database",editUrl:"/https://github.com/chloetz/docs/template-sample-database.md",version:"current",sidebar_label:"Sample Database",sidebar:"someSidebar",previous:{title:"Templates & Examples",permalink:"/birt-website/docs/template-introduction"}},i=[{value:"Schema",id:"schema",children:[]},{value:"Install",id:"install",children:[]},{value:"MySQL Version",id:"mysql-version",children:[]},{value:"Localized Version of the Sample Database",id:"localized-version-of-the-sample-database",children:[]},{value:"Usage",id:"usage",children:[]},{value:"Apache Derby",id:"apache-derby",children:[]},{value:"MySQL",id:"mysql",children:[]}],c={toc:i};function b(e){var t=e.components,a=Object(l.a)(e,["components"]);return Object(r.b)("wrapper",Object(s.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"The BIRT sample database provides a simple set of tables and data that form the basis for BIRT sample reports. The schema is for Classic Models, a retailer of scale models of classic cars. The database contains typical business data such as customers, orders, order line items, products and so on. It was designed to illustrate many of the features of the BIRT report designer."),Object(r.b)("p",null,"The sample database is open source; you are free to use it for your own use to experiment with other tools; to create samples for other tools, etc. The sample database is provided under the terms Eclipse."),Object(r.b)("h2",{id:"schema"},"Schema"),Object(r.b)("p",null,"The database consists of eight tables:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Offices: sales offices")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Employees: All employees, including sales reps who work with customers.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Customers")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Orders: Orders placed by customers")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Order Details: Line items within an order.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Payments: Payments made by customers against their account")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Products: The list of scale model cars")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Product Lines: The list of product line classifcation"))),Object(r.b)("p",null,"This ",Object(r.b)("a",{parentName:"p",href:"https://www.eclipse.org/birt/resources/documentation/sample-database/ClassicModelsDBSchema.pdf"},"ER-diagram (PDF version)")," shows the table structure and relationships. "),Object(r.b)("h2",{id:"install"},"Install"),Object(r.b)("p",null,"The sample database is available in two forms:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Apache Derby database, which is included in the BIRT download")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Scripts to load a MySQL database (Instructions below)\nThe scripts to load a MySQL database are contained in the sample database zip file. This zip also has documentation and logos for the sample database."))),Object(r.b)("h2",{id:"mysql-version"},"MySQL Version"),Object(r.b)("p",null,"To install the MySQL version of the sample database, you must have MySQL installed. See mysql.com for instructions."),Object(r.b)("p",null,"Install the MySQL JDBC driver into BIRT:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Download and unzip MySQL Connector/J 3.1 JDBC driver located at:")),Object(r.b)("p",null,Object(r.b)("a",{parentName:"p",href:"http://dev.mysql.com/downloads/"},"http://dev.mysql.com/downloads/")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Install the JDBC driver using the instructions on the install page. Enter the following for the URL template:")),Object(r.b)("p",null,"jdbc:mysql://","[host][,failoverhost...]","[:port]","/","[database]","..."),Object(r.b)("p",null,"You are now ready to create the Classic Models database:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Download the zip file containing the MySQL database scripts.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Expand the zip file into a convenient location.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Expanding the zip file created the ClassicModels/mysql directory with some MySQL scripts. From the command line, move to the this directory:"))),Object(r.b)("p",null,"% cd /ClassicModels/mysql"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Start the mysql utility, giving the name (and password, if needed) of a user permission to create databases. For example, to use the default root user:")),Object(r.b)("p",null,"% mysql --user=root"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Create the ClassicModels database and load the schema. (Loading the schema the schema the first time will give error messages as it attemps to empty any existing tables, just ignore these.)")),Object(r.b)("p",null,"mysql> create database ClassicModels;\nmysql> use ClassicModels;\nmysql> source create_classicmodels.sql;"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Load the table contents:")),Object(r.b)("p",null,"mysql> source load_classicmodels.sql;"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Exit from mysql:")),Object(r.b)("p",null,"mysql> quit;"),Object(r.b)("h2",{id:"localized-version-of-the-sample-database"},"Localized Version of the Sample Database"),Object(r.b)("p",null,"Following is the Derby Database localized into French, German, Spanish, Japanese, Korean, and Simplified Chinese."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Localized Derby Sample Database")),Object(r.b)("h2",{id:"usage"},"Usage"),Object(r.b)("p",null,"You can now use the sample database within BIRT to create reports. The key information you need to get started is how to create a data source for the database. The details vary depending on the database system you selected."),Object(r.b)("h2",{id:"apache-derby"},"Apache Derby"),Object(r.b)("p",null,'The Apache Derby version of the database is included in the BIRT download as a built-in data source. To access it, simply select the "Classic Models Inc. Sample Database" entry in the new data source dialog.'),Object(r.b)("h2",{id:"mysql"},"MySQL"),Object(r.b)("p",null,"Data source properties for the MySQL sample database:"),Object(r.b)("p",null,"Driver Class:\tcom.mysql.jdbc.Driver\nURL:\tjdbc:mysql://localhost/classicmodels\nUser Name:\troot\nPassword:\t"))}b.isMDXComponent=!0},130:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return u}));var s=a(0),l=a.n(s);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,s)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,s,l=function(e,t){if(null==e)return{};var a,s,l={},r=Object.keys(e);for(s=0;s<r.length;s++)a=r[s],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(s=0;s<r.length;s++)a=r[s],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var c=l.a.createContext({}),b=function(e){var t=l.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=b(e.components);return l.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return l.a.createElement(l.a.Fragment,{},t)}},m=l.a.forwardRef((function(e,t){var a=e.components,s=e.mdxType,r=e.originalType,n=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=b(a),m=s,u=p["".concat(n,".").concat(m)]||p[m]||d[m]||r;return a?l.a.createElement(u,o(o({ref:t},c),{},{components:a})):l.a.createElement(u,o({ref:t},c))}));function u(e,t){var a=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=a.length,n=new Array(r);n[0]=m;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:s,n[1]=o;for(var c=2;c<r;c++)n[c]=a[c];return l.a.createElement.apply(null,n)}return l.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);