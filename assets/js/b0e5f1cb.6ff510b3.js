(self.webpackChunkmapillary_js_doc=self.webpackChunkmapillary_js_doc||[]).push([[4847],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return k},kt:function(){return c}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},p=Object.keys(e);for(a=0;a<p.length;a++)n=p[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(a=0;a<p.length;a++)n=p[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),i=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):m(m({},t),e)),n},k=function(e){var t=i(e.components);return a.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,p=e.originalType,l=e.parentName,k=o(e,["components","mdxType","originalType","parentName"]),d=i(n),c=r,N=d["".concat(l,".").concat(c)]||d[c]||s[c]||p;return n?a.createElement(N,m(m({ref:t},k),{},{components:n})):a.createElement(N,m({ref:t},k))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var p=n.length,m=new Array(p);m[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,m[1]=o;for(var i=2;i<p;i++)m[i]=n[i];return a.createElement.apply(null,m)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3895:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return m},metadata:function(){return o},toc:function(){return l},default:function(){return k}});var a=n(2122),r=n(9756),p=(n(7294),n(3905)),m={id:"component.markercomponent",title:"Class: MarkerComponent",sidebar_label:"MarkerComponent",custom_edit_url:null},o={unversionedId:"classes/component.markercomponent",id:"classes/component.markercomponent",isDocsHomePage:!1,title:"Class: MarkerComponent",description:"component.MarkerComponent",source:"@site/api/classes/component.markercomponent.md",sourceDirName:"classes",slug:"/classes/component.markercomponent",permalink:"/mapillary-js/api/classes/component.markercomponent",editUrl:null,version:"current",sidebar_label:"MarkerComponent",frontMatter:{id:"component.markercomponent",title:"Class: MarkerComponent",sidebar_label:"MarkerComponent",custom_edit_url:null},sidebar:"api",previous:{title:"Class: Marker",permalink:"/mapillary-js/api/classes/component.marker"},next:{title:"Class: MouseComponent",permalink:"/mapillary-js/api/classes/component.mousecomponent"}},l=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Events",id:"events",children:[{value:"on",id:"on",children:[]}]},{value:"Properties",id:"properties",children:[{value:"componentName",id:"componentname",children:[]}]},{value:"Accessors",id:"accessors",children:[{value:"activated",id:"activated",children:[]},{value:"defaultConfiguration",id:"defaultconfiguration",children:[]},{value:"name",id:"name",children:[]}]},{value:"Methods",id:"methods",children:[{value:"add",id:"add",children:[]},{value:"configure",id:"configure",children:[]},{value:"fire",id:"fire",children:[]},{value:"get",id:"get",children:[]},{value:"getAll",id:"getall",children:[]},{value:"getMarkerIdAt",id:"getmarkeridat",children:[]},{value:"has",id:"has",children:[]},{value:"off",id:"off",children:[]},{value:"remove",id:"remove",children:[]},{value:"removeAll",id:"removeall",children:[]}]}],i={toc:l};function k(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,p.kt)("wrapper",(0,a.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"/mapillary-js/api/modules/component"},"component"),".MarkerComponent"),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},(0,p.kt)("inlineCode",{parentName:"strong"},"classdesc"))," Component for showing and editing 3D marker objects."),(0,p.kt)("p",null,"The ",(0,p.kt)("inlineCode",{parentName:"p"},"add")," method is used for adding new markers or replacing\nmarkers already in the set."),(0,p.kt)("p",null,"If a marker already in the set has the same\nid as one of the markers added, the old marker will be removed and\nthe added marker will take its place."),(0,p.kt)("p",null,"It is not possible to update markers in the set by updating any properties\ndirectly on the marker object. Markers need to be replaced by\nre-adding them for updates to geographic position or configuration\nto be reflected."),(0,p.kt)("p",null,"Markers added to the marker component can be either interactive\nor non-interactive. Different marker types define their behavior.\nMarkers with interaction support can be configured with options\nto respond to dragging inside the viewer and be detected when\nretrieving markers from pixel points with the ",(0,p.kt)("inlineCode",{parentName:"p"},"getMarkerIdAt")," method."),(0,p.kt)("p",null,"To retrive and use the marker component"),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},(0,p.kt)("inlineCode",{parentName:"strong"},"example"))),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-js"},'var viewer = new Viewer({ component: { marker: true }, ... });\n\nvar markerComponent = viewer.getComponent("marker");\n')),(0,p.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("a",{parentName:"p",href:"/mapillary-js/api/classes/component.component-1"},(0,p.kt)("em",{parentName:"a"},"Component")),"<MarkerConfiguration",">"),(0,p.kt)("p",{parentName:"li"},"\u21b3 ",(0,p.kt)("strong",{parentName:"p"},"MarkerComponent")))),(0,p.kt)("h2",{id:"events"},"Events"),(0,p.kt)("h3",{id:"on"},"on"),(0,p.kt)("p",null,"\u2022 ",(0,p.kt)("strong",{parentName:"p"},"on"),"(",(0,p.kt)("inlineCode",{parentName:"p"},"type"),": ",(0,p.kt)("inlineCode",{parentName:"p"},'"markerdragend"'),", ",(0,p.kt)("inlineCode",{parentName:"p"},"handler"),": (",(0,p.kt)("inlineCode",{parentName:"p"},"event"),": ",(0,p.kt)("a",{parentName:"p",href:"/mapillary-js/api/modules/component#componentmarkerevent"},(0,p.kt)("em",{parentName:"a"},"ComponentMarkerEvent")),") => ",(0,p.kt)("em",{parentName:"p"},"void"),"): ",(0,p.kt)("em",{parentName:"p"},"void")),(0,p.kt)("p",null,"Fired when a marker drag interaction ends."),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},(0,p.kt)("inlineCode",{parentName:"strong"},"example"))),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-js"},"// Initialize the viewer\nvar viewer = new Viewer({ // viewer options });\nvar component = viewer.getComponent('<component-name>');\n// Set an event listener\ncomponent.on('markerdragend', function() {\n  console.log(\"A markerdragend event has occurred.\");\n});\n")),(0,p.kt)("h4",{id:"parameters"},"Parameters"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,p.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"type")),(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},'"markerdragend"'))),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"handler")),(0,p.kt)("td",{parentName:"tr",align:"left"},"(",(0,p.kt)("inlineCode",{parentName:"td"},"event"),": ",(0,p.kt)("a",{parentName:"td",href:"/mapillary-js/api/modules/component#componentmarkerevent"},(0,p.kt)("em",{parentName:"a"},"ComponentMarkerEvent")),") => ",(0,p.kt)("em",{parentName:"td"},"void"))))),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Returns:")," ",(0,p.kt)("em",{parentName:"p"},"void")),(0,p.kt)("p",null,"Overrides: ",(0,p.kt)("a",{parentName:"p",href:"/mapillary-js/api/classes/component.component-1"},"Component")),(0,p.kt)("p",null,"Defined in: ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/mapillary/mapillary-js/blob/15b7798c/src/component/marker/MarkerComponent.ts#L272"},"component/marker/MarkerComponent.ts:272")),(0,p.kt)("p",null,"\u2022 ",(0,p.kt)("strong",{parentName:"p"},"on"),"(",(0,p.kt)("inlineCode",{parentName:"p"},"type"),": ",(0,p.kt)("inlineCode",{parentName:"p"},'"markerdragstart"'),", ",(0,p.kt)("inlineCode",{parentName:"p"},"handler"),": (",(0,p.kt)("inlineCode",{parentName:"p"},"event"),": ",(0,p.kt)("a",{parentName:"p",href:"/mapillary-js/api/modules/component#componentmarkerevent"},(0,p.kt)("em",{parentName:"a"},"ComponentMarkerEvent")),") => ",(0,p.kt)("em",{parentName:"p"},"void"),"): ",(0,p.kt)("em",{parentName:"p"},"void")),(0,p.kt)("p",null,"Fired when a marker drag interaction starts."),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},(0,p.kt)("inlineCode",{parentName:"strong"},"example"))),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-js"},"// Initialize the viewer\nvar viewer = new Viewer({ // viewer options });\nvar component = viewer.getComponent('<component-name>');\n// Set an event listener\ncomponent.on('markerdragstart', function() {\n  console.log(\"A markerdragstart event has occurred.\");\n});\n")),(0,p.kt)("h4",{id:"parameters-1"},"Parameters"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,p.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"type")),(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},'"markerdragstart"'))),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"handler")),(0,p.kt)("td",{parentName:"tr",align:"left"},"(",(0,p.kt)("inlineCode",{parentName:"td"},"event"),": ",(0,p.kt)("a",{parentName:"td",href:"/mapillary-js/api/modules/component#componentmarkerevent"},(0,p.kt)("em",{parentName:"a"},"ComponentMarkerEvent")),") => ",(0,p.kt)("em",{parentName:"td"},"void"))))),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Returns:")," ",(0,p.kt)("em",{parentName:"p"},"void")),(0,p.kt)("p",null,"Defined in: ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/mapillary/mapillary-js/blob/15b7798c/src/component/marker/MarkerComponent.ts#L291"},"component/marker/MarkerComponent.ts:291")),(0,p.kt)("p",null,"\u2022 ",(0,p.kt)("strong",{parentName:"p"},"on"),"(",(0,p.kt)("inlineCode",{parentName:"p"},"type"),": ",(0,p.kt)("inlineCode",{parentName:"p"},'"markerposition"'),", ",(0,p.kt)("inlineCode",{parentName:"p"},"handler"),": (",(0,p.kt)("inlineCode",{parentName:"p"},"event"),": ",(0,p.kt)("a",{parentName:"p",href:"/mapillary-js/api/modules/component#componentmarkerevent"},(0,p.kt)("em",{parentName:"a"},"ComponentMarkerEvent")),") => ",(0,p.kt)("em",{parentName:"p"},"void"),"): ",(0,p.kt)("em",{parentName:"p"},"void")),(0,p.kt)("p",null,"Fired when the position of a marker is changed."),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},(0,p.kt)("inlineCode",{parentName:"strong"},"example"))),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-js"},"// Initialize the viewer\nvar viewer = new Viewer({ // viewer options });\nvar component = viewer.getComponent('<component-name>');\n// Set an event listener\ncomponent.on('markerposition', function() {\n  console.log(\"A markerposition event has occurred.\");\n});\n")),(0,p.kt)("h4",{id:"parameters-2"},"Parameters"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,p.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"type")),(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},'"markerposition"'))),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"handler")),(0,p.kt)("td",{parentName:"tr",align:"left"},"(",(0,p.kt)("inlineCode",{parentName:"td"},"event"),": ",(0,p.kt)("a",{parentName:"td",href:"/mapillary-js/api/modules/component#componentmarkerevent"},(0,p.kt)("em",{parentName:"a"},"ComponentMarkerEvent")),") => ",(0,p.kt)("em",{parentName:"td"},"void"))))),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Returns:")," ",(0,p.kt)("em",{parentName:"p"},"void")),(0,p.kt)("p",null,"Defined in: ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/mapillary/mapillary-js/blob/15b7798c/src/component/marker/MarkerComponent.ts#L310"},"component/marker/MarkerComponent.ts:310")),(0,p.kt)("h2",{id:"properties"},"Properties"),(0,p.kt)("h3",{id:"componentname"},"componentName"),(0,p.kt)("p",null,"\u25aa ",(0,p.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,p.kt)("strong",{parentName:"p"},"componentName"),": ",(0,p.kt)("a",{parentName:"p",href:"/mapillary-js/api/modules/component#componentname"},(0,p.kt)("em",{parentName:"a"},"ComponentName")),'= "marker"'),(0,p.kt)("p",null,"Overrides: ",(0,p.kt)("a",{parentName:"p",href:"/mapillary-js/api/classes/component.component-1"},"Component"),".",(0,p.kt)("a",{parentName:"p",href:"/mapillary-js/api/classes/component.component-1#componentname"},"componentName")),(0,p.kt)("p",null,"Defined in: ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/mapillary/mapillary-js/blob/15b7798c/src/component/marker/MarkerComponent.ts#L82"},"component/marker/MarkerComponent.ts:82")),(0,p.kt)("h2",{id:"accessors"},"Accessors"),(0,p.kt)("h3",{id:"activated"},"activated"),(0,p.kt)("p",null,"\u2022 get ",(0,p.kt)("strong",{parentName:"p"},"activated"),"(): ",(0,p.kt)("em",{parentName:"p"},"boolean")),(0,p.kt)("p",null,"Get activated."),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Returns:")," ",(0,p.kt)("em",{parentName:"p"},"boolean")),(0,p.kt)("p",null,"Value indicating if the component is\ncurrently active."),(0,p.kt)("p",null,"Defined in: ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/mapillary/mapillary-js/blob/15b7798c/src/component/Component.ts#L78"},"component/Component.ts:78")),(0,p.kt)("hr",null),(0,p.kt)("h3",{id:"defaultconfiguration"},"defaultConfiguration"),(0,p.kt)("p",null,"\u2022 get ",(0,p.kt)("strong",{parentName:"p"},"defaultConfiguration"),"(): TConfiguration"),(0,p.kt)("p",null,"Get default configuration."),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Returns:")," TConfiguration"),(0,p.kt)("p",null,"Default configuration for component."),(0,p.kt)("p",null,"Defined in: ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/mapillary/mapillary-js/blob/15b7798c/src/component/Component.ts#L92"},"component/Component.ts:92")),(0,p.kt)("hr",null),(0,p.kt)("h3",{id:"name"},"name"),(0,p.kt)("p",null,"\u2022 get ",(0,p.kt)("strong",{parentName:"p"},"name"),"(): ",(0,p.kt)("em",{parentName:"p"},"string")),(0,p.kt)("p",null,"Get name."),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},(0,p.kt)("inlineCode",{parentName:"strong"},"description"))," The name of the component. Used when interacting with the\ncomponent through the Viewer's API."),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Returns:")," ",(0,p.kt)("em",{parentName:"p"},"string")),(0,p.kt)("p",null,"Defined in: ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/mapillary/mapillary-js/blob/15b7798c/src/component/Component.ts#L107"},"component/Component.ts:107")),(0,p.kt)("h2",{id:"methods"},"Methods"),(0,p.kt)("h3",{id:"add"},"add"),(0,p.kt)("p",null,"\u25b8 ",(0,p.kt)("strong",{parentName:"p"},"add"),"(",(0,p.kt)("inlineCode",{parentName:"p"},"markers"),": ",(0,p.kt)("a",{parentName:"p",href:"/mapillary-js/api/classes/component.marker"},(0,p.kt)("em",{parentName:"a"},"Marker")),"[]): ",(0,p.kt)("em",{parentName:"p"},"void")),(0,p.kt)("p",null,"Add markers to the marker set or replace markers in the marker set."),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},(0,p.kt)("inlineCode",{parentName:"strong"},"description"))," If a marker already in the set has the same\nid as one of the markers added, the old marker will be removed\nthe added marker will take its place."),(0,p.kt)("p",null,"Any marker inside the visible bounding bbox\nwill be initialized and placed in the viewer."),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},(0,p.kt)("inlineCode",{parentName:"strong"},"example"))),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-js"},"markerComponent.add([marker1, marker2]);\n")),(0,p.kt)("h4",{id:"parameters-3"},"Parameters"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,p.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,p.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"markers")),(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("a",{parentName:"td",href:"/mapillary-js/api/classes/component.marker"},(0,p.kt)("em",{parentName:"a"},"Marker")),"[]"),(0,p.kt)("td",{parentName:"tr",align:"left"},"Markers to add.")))),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Returns:")," ",(0,p.kt)("em",{parentName:"p"},"void")),(0,p.kt)("p",null,"Defined in: ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/mapillary/mapillary-js/blob/15b7798c/src/component/marker/MarkerComponent.ts#L124"},"component/marker/MarkerComponent.ts:124")),(0,p.kt)("hr",null),(0,p.kt)("h3",{id:"configure"},"configure"),(0,p.kt)("p",null,"\u25b8 ",(0,p.kt)("strong",{parentName:"p"},"configure"),"(",(0,p.kt)("inlineCode",{parentName:"p"},"configuration"),": MarkerConfiguration): ",(0,p.kt)("em",{parentName:"p"},"void")),(0,p.kt)("p",null,"Configure the component."),(0,p.kt)("h4",{id:"parameters-4"},"Parameters"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,p.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,p.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"configuration")),(0,p.kt)("td",{parentName:"tr",align:"left"},"MarkerConfiguration"),(0,p.kt)("td",{parentName:"tr",align:"left"},"Component configuration.")))),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Returns:")," ",(0,p.kt)("em",{parentName:"p"},"void")),(0,p.kt)("p",null,"Inherited from: ",(0,p.kt)("a",{parentName:"p",href:"/mapillary-js/api/classes/component.component-1"},"Component")),(0,p.kt)("p",null,"Defined in: ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/mapillary/mapillary-js/blob/15b7798c/src/component/Component.ts#L131"},"component/Component.ts:131")),(0,p.kt)("hr",null),(0,p.kt)("h3",{id:"fire"},"fire"),(0,p.kt)("p",null,"\u25b8 ",(0,p.kt)("strong",{parentName:"p"},"fire"),"(",(0,p.kt)("inlineCode",{parentName:"p"},"type"),": ",(0,p.kt)("inlineCode",{parentName:"p"},'"markerdragend"')," ","|"," ",(0,p.kt)("inlineCode",{parentName:"p"},'"markerdragstart"')," ","|"," ",(0,p.kt)("inlineCode",{parentName:"p"},'"markerposition"'),", ",(0,p.kt)("inlineCode",{parentName:"p"},"event"),": ",(0,p.kt)("a",{parentName:"p",href:"/mapillary-js/api/modules/component#componentmarkerevent"},(0,p.kt)("em",{parentName:"a"},"ComponentMarkerEvent")),"): ",(0,p.kt)("em",{parentName:"p"},"void")),(0,p.kt)("h4",{id:"parameters-5"},"Parameters"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,p.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"type")),(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},'"markerdragend"')," ","|"," ",(0,p.kt)("inlineCode",{parentName:"td"},'"markerdragstart"')," ","|"," ",(0,p.kt)("inlineCode",{parentName:"td"},'"markerposition"'))),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"event")),(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("a",{parentName:"td",href:"/mapillary-js/api/modules/component#componentmarkerevent"},(0,p.kt)("em",{parentName:"a"},"ComponentMarkerEvent")))))),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Returns:")," ",(0,p.kt)("em",{parentName:"p"},"void")),(0,p.kt)("p",null,"Overrides: ",(0,p.kt)("a",{parentName:"p",href:"/mapillary-js/api/classes/component.component-1"},"Component")),(0,p.kt)("p",null,"Defined in: ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/mapillary/mapillary-js/blob/15b7798c/src/component/marker/MarkerComponent.ts#L128"},"../doc/component/marker/MarkerComponent.ts:128")),(0,p.kt)("hr",null),(0,p.kt)("h3",{id:"get"},"get"),(0,p.kt)("p",null,"\u25b8 ",(0,p.kt)("strong",{parentName:"p"},"get"),"(",(0,p.kt)("inlineCode",{parentName:"p"},"markerId"),": ",(0,p.kt)("em",{parentName:"p"},"string"),"): ",(0,p.kt)("a",{parentName:"p",href:"/mapillary-js/api/classes/component.marker"},(0,p.kt)("em",{parentName:"a"},"Marker"))),(0,p.kt)("p",null,"Returns the marker in the marker set with the specified id, or\nundefined if the id matches no marker."),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},(0,p.kt)("inlineCode",{parentName:"strong"},"example"))),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-js"},'var marker = markerComponent.get("markerId");\n')),(0,p.kt)("h4",{id:"parameters-6"},"Parameters"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,p.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,p.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"markerId")),(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("em",{parentName:"td"},"string")),(0,p.kt)("td",{parentName:"tr",align:"left"},"Id of the marker.")))),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Returns:")," ",(0,p.kt)("a",{parentName:"p",href:"/mapillary-js/api/classes/component.marker"},(0,p.kt)("em",{parentName:"a"},"Marker"))),(0,p.kt)("p",null,"Defined in: ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/mapillary/mapillary-js/blob/15b7798c/src/component/marker/MarkerComponent.ts#L159"},"component/marker/MarkerComponent.ts:159")),(0,p.kt)("hr",null),(0,p.kt)("h3",{id:"getall"},"getAll"),(0,p.kt)("p",null,"\u25b8 ",(0,p.kt)("strong",{parentName:"p"},"getAll"),"(): ",(0,p.kt)("a",{parentName:"p",href:"/mapillary-js/api/classes/component.marker"},(0,p.kt)("em",{parentName:"a"},"Marker")),"[]"),(0,p.kt)("p",null,"Returns an array of all markers."),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},(0,p.kt)("inlineCode",{parentName:"strong"},"example"))),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-js"},"var markers = markerComponent.getAll();\n")),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Returns:")," ",(0,p.kt)("a",{parentName:"p",href:"/mapillary-js/api/classes/component.marker"},(0,p.kt)("em",{parentName:"a"},"Marker")),"[]"),(0,p.kt)("p",null,"Defined in: ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/mapillary/mapillary-js/blob/15b7798c/src/component/marker/MarkerComponent.ts#L171"},"component/marker/MarkerComponent.ts:171")),(0,p.kt)("hr",null),(0,p.kt)("h3",{id:"getmarkeridat"},"getMarkerIdAt"),(0,p.kt)("p",null,"\u25b8 ",(0,p.kt)("strong",{parentName:"p"},"getMarkerIdAt"),"(",(0,p.kt)("inlineCode",{parentName:"p"},"pixelPoint"),": ",(0,p.kt)("em",{parentName:"p"},"number"),"[]): ",(0,p.kt)("em",{parentName:"p"},"Promise"),"<string",">"),(0,p.kt)("p",null,"Returns the id of the interactive marker closest to the current camera\nposition at the specified point."),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},(0,p.kt)("inlineCode",{parentName:"strong"},"description"))," Notice that the pixelPoint argument requires x, y\ncoordinates from pixel space."),(0,p.kt)("p",null,"With this function, you can use the coordinates provided by mouse\nevents to get information out of the marker component."),(0,p.kt)("p",null,"If no interactive geometry of an interactive marker exist at the pixel\npoint, ",(0,p.kt)("inlineCode",{parentName:"p"},"null")," will be returned."),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},(0,p.kt)("inlineCode",{parentName:"strong"},"example"))),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-js"},"markerComponent.getMarkerIdAt([100, 100])\n    .then((markerId) => { console.log(markerId); });\n")),(0,p.kt)("h4",{id:"parameters-7"},"Parameters"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,p.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,p.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"pixelPoint")),(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("em",{parentName:"td"},"number"),"[]"),(0,p.kt)("td",{parentName:"tr",align:"left"},"Pixel coordinates on the viewer element.")))),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Returns:")," ",(0,p.kt)("em",{parentName:"p"},"Promise"),"<string",">"),(0,p.kt)("p",null,"Id of the interactive marker closest to the camera. If no\ninteractive marker exist at the pixel point, ",(0,p.kt)("inlineCode",{parentName:"p"},"null")," will be returned."),(0,p.kt)("p",null,"Defined in: ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/mapillary/mapillary-js/blob/15b7798c/src/component/marker/MarkerComponent.ts#L198"},"component/marker/MarkerComponent.ts:198")),(0,p.kt)("hr",null),(0,p.kt)("h3",{id:"has"},"has"),(0,p.kt)("p",null,"\u25b8 ",(0,p.kt)("strong",{parentName:"p"},"has"),"(",(0,p.kt)("inlineCode",{parentName:"p"},"markerId"),": ",(0,p.kt)("em",{parentName:"p"},"string"),"): ",(0,p.kt)("em",{parentName:"p"},"boolean")),(0,p.kt)("p",null,"Check if a marker exist in the marker set."),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},(0,p.kt)("inlineCode",{parentName:"strong"},"example"))),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-js"},'var markerExists = markerComponent.has("markerId");\n')),(0,p.kt)("h4",{id:"parameters-8"},"Parameters"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,p.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,p.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"markerId")),(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("em",{parentName:"td"},"string")),(0,p.kt)("td",{parentName:"tr",align:"left"},"Id of the marker.")))),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Returns:")," ",(0,p.kt)("em",{parentName:"p"},"boolean")),(0,p.kt)("p",null,"Defined in: ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/mapillary/mapillary-js/blob/15b7798c/src/component/marker/MarkerComponent.ts#L234"},"component/marker/MarkerComponent.ts:234")),(0,p.kt)("hr",null),(0,p.kt)("h3",{id:"off"},"off"),(0,p.kt)("p",null,"\u25b8 ",(0,p.kt)("strong",{parentName:"p"},"off"),"(",(0,p.kt)("inlineCode",{parentName:"p"},"type"),": ",(0,p.kt)("inlineCode",{parentName:"p"},'"markerdragend"')," ","|"," ",(0,p.kt)("inlineCode",{parentName:"p"},'"markerdragstart"')," ","|"," ",(0,p.kt)("inlineCode",{parentName:"p"},'"markerposition"'),", ",(0,p.kt)("inlineCode",{parentName:"p"},"handler"),": (",(0,p.kt)("inlineCode",{parentName:"p"},"event"),": ",(0,p.kt)("a",{parentName:"p",href:"/mapillary-js/api/modules/component#componentmarkerevent"},(0,p.kt)("em",{parentName:"a"},"ComponentMarkerEvent")),") => ",(0,p.kt)("em",{parentName:"p"},"void"),"): ",(0,p.kt)("em",{parentName:"p"},"void")),(0,p.kt)("h4",{id:"parameters-9"},"Parameters"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,p.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"type")),(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},'"markerdragend"')," ","|"," ",(0,p.kt)("inlineCode",{parentName:"td"},'"markerdragstart"')," ","|"," ",(0,p.kt)("inlineCode",{parentName:"td"},'"markerposition"'))),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"handler")),(0,p.kt)("td",{parentName:"tr",align:"left"},"(",(0,p.kt)("inlineCode",{parentName:"td"},"event"),": ",(0,p.kt)("a",{parentName:"td",href:"/mapillary-js/api/modules/component#componentmarkerevent"},(0,p.kt)("em",{parentName:"a"},"ComponentMarkerEvent")),") => ",(0,p.kt)("em",{parentName:"td"},"void"))))),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Returns:")," ",(0,p.kt)("em",{parentName:"p"},"void")),(0,p.kt)("p",null,"Overrides: ",(0,p.kt)("a",{parentName:"p",href:"/mapillary-js/api/classes/component.component-1"},"Component")),(0,p.kt)("p",null,"Defined in: ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/mapillary/mapillary-js/blob/15b7798c/src/component/marker/MarkerComponent.ts#L238"},"../doc/component/marker/MarkerComponent.ts:238")),(0,p.kt)("hr",null),(0,p.kt)("h3",{id:"remove"},"remove"),(0,p.kt)("p",null,"\u25b8 ",(0,p.kt)("strong",{parentName:"p"},"remove"),"(",(0,p.kt)("inlineCode",{parentName:"p"},"markerIds"),": ",(0,p.kt)("em",{parentName:"p"},"string"),"[]): ",(0,p.kt)("em",{parentName:"p"},"void")),(0,p.kt)("p",null,"Remove markers with the specified ids from the marker set."),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},(0,p.kt)("inlineCode",{parentName:"strong"},"example"))),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-js"},'markerComponent.remove(["id-1", "id-2"]);\n')),(0,p.kt)("h4",{id:"parameters-10"},"Parameters"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,p.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,p.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"markerIds")),(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("em",{parentName:"td"},"string"),"[]"),(0,p.kt)("td",{parentName:"tr",align:"left"},"Ids for markers to remove.")))),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Returns:")," ",(0,p.kt)("em",{parentName:"p"},"void")),(0,p.kt)("p",null,"Defined in: ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/mapillary/mapillary-js/blob/15b7798c/src/component/marker/MarkerComponent.ts#L331"},"component/marker/MarkerComponent.ts:331")),(0,p.kt)("hr",null),(0,p.kt)("h3",{id:"removeall"},"removeAll"),(0,p.kt)("p",null,"\u25b8 ",(0,p.kt)("strong",{parentName:"p"},"removeAll"),"(): ",(0,p.kt)("em",{parentName:"p"},"void")),(0,p.kt)("p",null,"Remove all markers from the marker set."),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},(0,p.kt)("inlineCode",{parentName:"strong"},"example"))),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-js"},"markerComponent.removeAll();\n")),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Returns:")," ",(0,p.kt)("em",{parentName:"p"},"void")),(0,p.kt)("p",null,"Defined in: ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/mapillary/mapillary-js/blob/15b7798c/src/component/marker/MarkerComponent.ts#L343"},"component/marker/MarkerComponent.ts:343")))}k.isMDXComponent=!0}}]);