(self.webpackChunkmapillary_js_doc=self.webpackChunkmapillary_js_doc||[]).push([[9291],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return m},kt:function(){return y}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),u=s(n),y=o,d=u["".concat(l,".").concat(y)]||u[y]||c[y]||a;return n?r.createElement(d,i(i({ref:t},m),{},{components:n})):r.createElement(d,i({ref:t},m))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2393:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return p},toc:function(){return l},default:function(){return m}});var r=n(2122),o=n(9756),a=(n(7294),n(3905)),i={id:"component.pointgeometry",title:"Class: PointGeometry",sidebar_label:"PointGeometry",custom_edit_url:null},p={unversionedId:"classes/component.pointgeometry",id:"classes/component.pointgeometry",isDocsHomePage:!1,title:"Class: PointGeometry",description:"component.PointGeometry",source:"@site/api/classes/component.pointgeometry.md",sourceDirName:"classes",slug:"/classes/component.pointgeometry",permalink:"/mapillary-js/api/classes/component.pointgeometry",editUrl:null,version:"current",sidebar_label:"PointGeometry",frontMatter:{id:"component.pointgeometry",title:"Class: PointGeometry",sidebar_label:"PointGeometry",custom_edit_url:null},sidebar:"api",previous:{title:"Class: OutlineTag",permalink:"/mapillary-js/api/classes/component.outlinetag"},next:{title:"Class: PointsGeometry",permalink:"/mapillary-js/api/classes/component.pointsgeometry"}},l=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Constructors",id:"constructors",children:[{value:"constructor",id:"constructor",children:[]}]},{value:"Accessors",id:"accessors",children:[{value:"point",id:"point",children:[]}]}],s={toc:l};function m(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/mapillary-js/api/modules/component"},"component"),".PointGeometry"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"classdesc"))," Represents a point geometry in the 2D basic image coordinate system."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"example"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"var basicPoint = [0.5, 0.7];\nvar pointGeometry = new PointGeometry(basicPoint);\n")),(0,a.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"/mapillary-js/api/classes/component.geometry"},(0,a.kt)("em",{parentName:"a"},"Geometry"))),(0,a.kt)("p",{parentName:"li"},"\u21b3 ",(0,a.kt)("strong",{parentName:"p"},"PointGeometry")))),(0,a.kt)("h2",{id:"constructors"},"Constructors"),(0,a.kt)("h3",{id:"constructor"},"constructor"),(0,a.kt)("p",null,"+"," ",(0,a.kt)("strong",{parentName:"p"},"new PointGeometry"),"(",(0,a.kt)("inlineCode",{parentName:"p"},"point"),": ",(0,a.kt)("em",{parentName:"p"},"number"),"[]): ",(0,a.kt)("a",{parentName:"p",href:"/mapillary-js/api/classes/component.pointgeometry"},(0,a.kt)("em",{parentName:"a"},"PointGeometry"))),(0,a.kt)("p",null,"Create a point geometry."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"throws"))," {GeometryTagError} Point coordinates must be valid basic coordinates."),(0,a.kt)("h4",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"point")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("em",{parentName:"td"},"number"),"[]"),(0,a.kt)("td",{parentName:"tr",align:"left"},"An array representing the basic coordinates of the point.")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returns:")," ",(0,a.kt)("a",{parentName:"p",href:"/mapillary-js/api/classes/component.pointgeometry"},(0,a.kt)("em",{parentName:"a"},"PointGeometry"))),(0,a.kt)("p",null,"Overrides: Geometry.constructor"),(0,a.kt)("p",null,"Defined in: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/mapillary/mapillary-js/blob/15b7798c/src/component/tag/geometry/PointGeometry.ts#L16"},"component/tag/geometry/PointGeometry.ts:16")),(0,a.kt)("h2",{id:"accessors"},"Accessors"),(0,a.kt)("h3",{id:"point"},"point"),(0,a.kt)("p",null,"\u2022 get ",(0,a.kt)("strong",{parentName:"p"},"point"),"(): ",(0,a.kt)("em",{parentName:"p"},"number"),"[]"),(0,a.kt)("p",null,"Get point property."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returns:")," ",(0,a.kt)("em",{parentName:"p"},"number"),"[]"),(0,a.kt)("p",null,"Array representing the basic coordinates of the point."),(0,a.kt)("p",null,"Defined in: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/mapillary/mapillary-js/blob/15b7798c/src/component/tag/geometry/PointGeometry.ts#L44"},"component/tag/geometry/PointGeometry.ts:44")))}m.isMDXComponent=!0}}]);