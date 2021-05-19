(self.webpackChunkmapillary_js_doc=self.webpackChunkmapillary_js_doc||[]).push([[6628],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return u},kt:function(){return d}});var i=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,o=function(e,n){if(null==e)return{};var t,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=i.createContext({}),s=function(e){var n=i.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=s(e.components);return i.createElement(p.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},c=i.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=s(t),d=o,f=c["".concat(p,".").concat(d)]||c[d]||m[d]||r;return t?i.createElement(f,a(a({ref:n},u),{},{components:t})):i.createElement(f,a({ref:n},u))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,a=new Array(r);a[0]=c;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var s=2;s<r;s++)a[s]=t[s];return i.createElement.apply(null,a)}return i.createElement.apply(null,t)}c.displayName="MDXCreateElement"},9766:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return a},metadata:function(){return l},toc:function(){return p},default:function(){return u}});var i=t(2122),o=t(9756),r=(t(7294),t(3905)),a={id:"component.originalpositionmode",title:"Enumeration: OriginalPositionMode",sidebar_label:"OriginalPositionMode",custom_edit_url:null},l={unversionedId:"enums/component.originalpositionmode",id:"enums/component.originalpositionmode",isDocsHomePage:!1,title:"Enumeration: OriginalPositionMode",description:"component.OriginalPositionMode",source:"@site/api/enums/component.originalpositionmode.md",sourceDirName:"enums",slug:"/enums/component.originalpositionmode",permalink:"/mapillary-js/api/enums/component.originalpositionmode",editUrl:null,version:"current",sidebar_label:"OriginalPositionMode",frontMatter:{id:"component.originalpositionmode",title:"Enumeration: OriginalPositionMode",sidebar_label:"OriginalPositionMode",custom_edit_url:null},sidebar:"api",previous:{title:"Enumeration: ComponentSize",permalink:"/mapillary-js/api/enums/component.componentsize"},next:{title:"Enumeration: SliderConfigurationMode",permalink:"/mapillary-js/api/enums/component.sliderconfigurationmode"}},p=[{value:"Enumeration members",id:"enumeration-members",children:[{value:"Altitude",id:"altitude",children:[]},{value:"Flat",id:"flat",children:[]},{value:"Hidden",id:"hidden",children:[]}]}],s={toc:p};function u(e){var n=e.components,t=(0,o.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,i.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/mapillary-js/api/modules/component"},"component"),".OriginalPositionMode"),(0,r.kt)("h2",{id:"enumeration-members"},"Enumeration members"),(0,r.kt)("h3",{id:"altitude"},"Altitude"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"Altitude"),": = 1"),(0,r.kt)("p",null,"Visualize original positions with altitude change."),(0,r.kt)("p",null,"Defined in: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/mapillary/mapillary-js/blob/50cd4088/src/component/spatial/enums/OriginalPositionMode.ts#L10"},"component/spatial/enums/OriginalPositionMode.ts:10")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"flat"},"Flat"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"Flat"),": = 2"),(0,r.kt)("p",null,"Visualize original positions without altitude change,\ni.e. as flat lines from the camera origin."),(0,r.kt)("p",null,"Defined in: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/mapillary/mapillary-js/blob/50cd4088/src/component/spatial/enums/OriginalPositionMode.ts#L16"},"component/spatial/enums/OriginalPositionMode.ts:16")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"hidden"},"Hidden"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"Hidden"),": = 0"),(0,r.kt)("p",null,"Original positions are hidden."),(0,r.kt)("p",null,"Defined in: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/mapillary/mapillary-js/blob/50cd4088/src/component/spatial/enums/OriginalPositionMode.ts#L5"},"component/spatial/enums/OriginalPositionMode.ts:5")))}u.isMDXComponent=!0}}]);