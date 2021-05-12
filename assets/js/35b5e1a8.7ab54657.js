(self.webpackChunkmapillary_js_doc=self.webpackChunkmapillary_js_doc||[]).push([[3428],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return p},kt:function(){return g}});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),c=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(r),g=n,f=d["".concat(l,".").concat(g)]||d[g]||u[g]||i;return r?a.createElement(f,o(o({ref:t},p),{},{components:r})):a.createElement(f,o({ref:t},p))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var c=2;c<i;c++)o[c]=r[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1641:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return o},metadata:function(){return s},toc:function(){return l},default:function(){return p}});var a=r(2122),n=r(9756),i=(r(7294),r(3905)),o={id:"viewer.navigationedgestatus",title:"Interface: NavigationEdgeStatus",sidebar_label:"NavigationEdgeStatus",custom_edit_url:null},s={unversionedId:"interfaces/viewer.navigationedgestatus",id:"interfaces/viewer.navigationedgestatus",isDocsHomePage:!1,title:"Interface: NavigationEdgeStatus",description:"viewer.NavigationEdgeStatus",source:"@site/api/interfaces/viewer.navigationedgestatus.md",sourceDirName:"interfaces",slug:"/interfaces/viewer.navigationedgestatus",permalink:"/mapillary-js/api/interfaces/viewer.navigationedgestatus",editUrl:null,version:"current",sidebar_label:"NavigationEdgeStatus",frontMatter:{id:"viewer.navigationedgestatus",title:"Interface: NavigationEdgeStatus",sidebar_label:"NavigationEdgeStatus",custom_edit_url:null},sidebar:"api",previous:{title:"Interface: NavigationEdgeData",permalink:"/mapillary-js/api/interfaces/viewer.navigationedgedata"},next:{title:"Interface: PointOfView",permalink:"/mapillary-js/api/interfaces/viewer.pointofview"}},l=[{value:"Properties",id:"properties",children:[{value:"cached",id:"cached",children:[]},{value:"edges",id:"edges",children:[]}]}],c={toc:l};function p(e){var t=e.components,r=(0,n.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/mapillary-js/api/modules/viewer"},"viewer"),".NavigationEdgeStatus"),(0,i.kt)("p",null,"Interface that indicates edge status."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"interface"))," NavigationEdgeStatus"),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"cached"},"cached"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"cached"),": ",(0,i.kt)("em",{parentName:"p"},"boolean")),(0,i.kt)("p",null,"Value indicating whether the edges have been cached."),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mapillary/mapillary-js/blob/15b7798c/src/graph/interfaces/NavigationEdgeStatus.ts#L12"},"graph/interfaces/NavigationEdgeStatus.ts:12")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"edges"},"edges"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"edges"),": ",(0,i.kt)("a",{parentName:"p",href:"/mapillary-js/api/interfaces/viewer.navigationedge"},(0,i.kt)("em",{parentName:"a"},"NavigationEdge")),"[]"),(0,i.kt)("p",null,"The edges."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"description"))," If the cached property is false the edges\nproperty will always be an empty array. If the cached\nproperty is true, there will exist edges in the the\narray if the image has edges."),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mapillary/mapillary-js/blob/15b7798c/src/graph/interfaces/NavigationEdgeStatus.ts#L22"},"graph/interfaces/NavigationEdgeStatus.ts:22")))}p.isMDXComponent=!0}}]);