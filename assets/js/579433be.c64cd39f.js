(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{133:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),s=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(n),m=r,d=p["".concat(i,".").concat(m)]||p[m]||b[m]||a;return n?o.a.createElement(d,l(l({ref:t},u),{},{components:n})):o.a.createElement(d,l({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},96:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return s}));var r=n(3),o=n(7),a=(n(0),n(133)),i={id:"t_text-item",title:"Text Item",sidebar_label:"Text Item"},l={unversionedId:"t_text-item",id:"t_text-item",isDocsHomePage:!1,title:"Text Item",description:"the final step in our report is to create the actual header text. We want it to look something like this:",source:"@site/docs/t_text-item.md",slug:"/t_text-item",permalink:"/docs/t_text-item",editUrl:"/docs/t_text-item.md",version:"current",sidebar_label:"Text Item",sidebar:"someSidebar",previous:{title:"Testing Reports",permalink:"/docs/t_testing-reports"},next:{title:"Tools",permalink:"/docs/t_tools"}},c=[{value:"Customer Listing",id:"customer-listing",children:[]},{value:"Create a Text Item",id:"create-a-text-item",children:[]},{value:"Dynamic Text",id:"dynamic-text",children:[]},{value:"Final Test",id:"final-test",children:[]}],u={toc:c};function s(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"the final step in our report is to create the actual header text. We want it to look something like this:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},'        <CENTER>\n        <FONT size="6" color=blue>\n        Customer Listing\n        </FONT>\n        <BR>\n        <I>For internal use only</I>\n        </CENTER>\n')),Object(a.b)("h2",{id:"customer-listing"},"Customer Listing"),Object(a.b)("p",null,"For internal use only "),Object(a.b)("p",null,"We could create this with two labels. But, we'll take this opportunity to try out the Text element which allows us to use HTML formatting within the text."),Object(a.b)("h2",{id:"create-a-text-item"},"Create a Text Item"),Object(a.b)("p",null,"Let's create our text item. To do this:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Drag a Text Element from the palette and drop it into the center cell within our grid.")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"The Edit Text Item dialog appears.")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"In the top combo box, choose HTML/Dynamic Text. The dialog displays a variety of HTML tags we can insert.")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Using the button next to Formatting, pull down the list and choose Layout.")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Click the \\<CENTER",">"," tag to add it.")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"From the list near the top of the dialog, insert a \\<FONT",">"," element.")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"In the attributes provided, set the size to 6 and the color to blue. Erase the face attribute. The text should now look like this:"))),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},'        <CENTER>\n        <FONT size="6" color=blue>\n\n        </FONT>\n        </CENTER>\n')),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Continue using the editor to create the text below:")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},'        <CENTER>\n        <FONT size="6" color=blue>\n        Customer Listing\n        </FONT>\n        <BR>\n        <I>For internal use only</I>\n        </CENTER>\n')),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Click OK and save your changes.")),Object(a.b)("h2",{id:"dynamic-text"},"Dynamic Text"),Object(a.b)("p",null,"While we won't use it in this tutorial, there is one other feature of Text Elements to note. Select the Dynamic Text category and you'll see a tag. This allows you to insert expressions directly into your HTML. For example, to display an address line in US format, we could type:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},'<value-of>row["city"]</value-of>,\n<value-of>row["state"]</value-of>\n<value-of format="@@@@@-@@@@">row["zip"]<value-of> \n')),Object(a.b)("p",null,"The row values correspond to the name column within the Binding Editor for the given report container element. So for example if we added a Text Element to our Table, we could use row",'["CUSTOMERNAME"]'," within the value-of tag."),Object(a.b)("h2",{id:"final-test"},"Final Test"),Object(a.b)("p",null,"We're now ready to give the report a final test. Click the Preview tab to see the report with formatting applied."))}s.isMDXComponent=!0}}]);