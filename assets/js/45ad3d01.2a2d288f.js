(self.webpackChunkmapillary_js_doc=self.webpackChunkmapillary_js_doc||[]).push([[3830],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return s},kt:function(){return k}});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),m=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},s=function(e){var t=m(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=m(a),k=n,h=d["".concat(p,".").concat(k)]||d[k]||c[k]||i;return a?r.createElement(h,o(o({ref:t},s),{},{components:a})):r.createElement(h,o({ref:t},s))}));function k(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var m=2;m<i;m++)o[m]=a[m];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},7728:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return o},metadata:function(){return l},toc:function(){return p},default:function(){return s}});var r=a(2122),n=a(9756),i=(a(7294),a(3905)),o={id:"viewer.icustomcameracontrols",title:"Interface: ICustomCameraControls",sidebar_label:"ICustomCameraControls",custom_edit_url:null},l={unversionedId:"interfaces/viewer.icustomcameracontrols",id:"interfaces/viewer.icustomcameracontrols",isDocsHomePage:!1,title:"Interface: ICustomCameraControls",description:"viewer.ICustomCameraControls",source:"@site/api/interfaces/viewer.icustomcameracontrols.md",sourceDirName:"interfaces",slug:"/interfaces/viewer.icustomcameracontrols",permalink:"/mapillary-js/api/interfaces/viewer.icustomcameracontrols",editUrl:null,version:"current",sidebar_label:"ICustomCameraControls",frontMatter:{id:"viewer.icustomcameracontrols",title:"Interface: ICustomCameraControls",sidebar_label:"ICustomCameraControls",custom_edit_url:null},sidebar:"api",previous:{title:"Interface: FallbackOptions",permalink:"/mapillary-js/api/interfaces/viewer.fallbackoptions"},next:{title:"Interface: ICustomRenderer",permalink:"/mapillary-js/api/interfaces/viewer.icustomrenderer"}},p=[{value:"Methods",id:"methods",children:[{value:"onActivate",id:"onactivate",children:[]},{value:"onAnimationFrame",id:"onanimationframe",children:[]},{value:"onAttach",id:"onattach",children:[]},{value:"onDeactivate",id:"ondeactivate",children:[]},{value:"onDetach",id:"ondetach",children:[]},{value:"onReference",id:"onreference",children:[]},{value:"onResize",id:"onresize",children:[]}]}],m={toc:p};function s(e){var t=e.components,a=(0,n.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/mapillary-js/api/modules/viewer"},"viewer"),".ICustomCameraControls"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"interface"))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"description"))," Interface for custom camera controls.\nThis is a specification for implementers to model:\nit is not an exported method or class."),(0,i.kt)("p",null,"Custom camera controls allow the API user to freely\nmove the viewer's camera and define the camera\nprojection used. These camera properties are used\nto render the viewer 3D scene directly into the\nviewer's GL context."),(0,i.kt)("p",null,"Custom camera controls must implement the\nonActivate, onAnimationFrame, onAttach, onDeactivate,\nonDetach, onReference, and onResize methods."),(0,i.kt)("p",null,"Custom camera controls trigger rerendering\nautomatically when the camera properties or projection\nis changed through the projectionMatrix and\nviewMatrix callbacks."),(0,i.kt)("p",null,"See the ","[MDN WebGL model view projection documentation][https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/WebGL_model_view_projection]","(",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/WebGL_model_view_projection"},"https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/WebGL_model_view_projection"),")\nfor an introduction to view and projection matrices."),(0,i.kt)("p",null,"Custom camera controls can choose to make updates on\neach animation frame or only based on user input.\nInvoking updates on each camera frame is more resource\nintensive."),(0,i.kt)("p",null,"Only a single custom camera control instance can be\nattached to the viewer at any given time."),(0,i.kt)("h2",{id:"methods"},"Methods"),(0,i.kt)("h3",{id:"onactivate"},"onActivate"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"onActivate"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"viewer"),": ",(0,i.kt)("a",{parentName:"p",href:"/mapillary-js/api/interfaces/viewer.iviewer"},(0,i.kt)("em",{parentName:"a"},"IViewer")),", ",(0,i.kt)("inlineCode",{parentName:"p"},"viewMatrix"),": ",(0,i.kt)("em",{parentName:"p"},"number"),"[], ",(0,i.kt)("inlineCode",{parentName:"p"},"projectionMatrix"),": ",(0,i.kt)("em",{parentName:"p"},"number"),"[], ",(0,i.kt)("inlineCode",{parentName:"p"},"reference"),": ",(0,i.kt)("a",{parentName:"p",href:"/mapillary-js/api/interfaces/api.lnglatalt"},(0,i.kt)("em",{parentName:"a"},"LngLatAlt")),"): ",(0,i.kt)("em",{parentName:"p"},"void")),(0,i.kt)("p",null,"Method called when the camera controls has been\nactivated and is responsible for moving the\nviewer's camera and defining its projection. This\nnethod gives the camera controls a chance to initialize\nresources, perform any transitions, and determine\ninitial state."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"description"))," Use the {@link Viewer#getContainer} method\nto get the container for determining the viewer size\nand aspect as well as for attaching event handlers."),(0,i.kt)("p",null,"Use the view matrix to determine initial properties such\nas camera position, forward vector, and up vector."),(0,i.kt)("p",null,"Use the projection matrix to determine the initial\nprojection properties."),(0,i.kt)("p",null,"Store the reference coordiante translations\nduring future reference reference changes."),(0,i.kt)("h4",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"viewer")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/mapillary-js/api/interfaces/viewer.iviewer"},(0,i.kt)("em",{parentName:"a"},"IViewer"))),(0,i.kt)("td",{parentName:"tr",align:"left"},"The viewer this custom camera controls instance was just added to.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"viewMatrix")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"number"),"[]"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The viewer's view matrix.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"projectionMatrix")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"number"),"[]"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The viewers's projection matrix.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"reference")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/mapillary-js/api/interfaces/api.lnglatalt"},(0,i.kt)("em",{parentName:"a"},"LngLatAlt"))),(0,i.kt)("td",{parentName:"tr",align:"left"},"The viewer's reference.")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," ",(0,i.kt)("em",{parentName:"p"},"void")),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mapillary/mapillary-js/blob/50cd4088/src/viewer/interfaces/ICustomCameraControls.ts#L67"},"viewer/interfaces/ICustomCameraControls.ts:67")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"onanimationframe"},"onAnimationFrame"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"onAnimationFrame"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"viewer"),": ",(0,i.kt)("a",{parentName:"p",href:"/mapillary-js/api/interfaces/viewer.iviewer"},(0,i.kt)("em",{parentName:"a"},"IViewer")),", ",(0,i.kt)("inlineCode",{parentName:"p"},"frameId"),": ",(0,i.kt)("em",{parentName:"p"},"number"),"): ",(0,i.kt)("em",{parentName:"p"},"void")),(0,i.kt)("p",null,"Method called for each animation frame."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"desdcription"))," Custom camera controls can choose to\nmake updates on each animation frame or only based on\nuser input. Invoking updates on each camera frame is\nmore resource intensive."),(0,i.kt)("h4",{id:"parameters-1"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"viewer")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/mapillary-js/api/interfaces/viewer.iviewer"},(0,i.kt)("em",{parentName:"a"},"IViewer"))),(0,i.kt)("td",{parentName:"tr",align:"left"},"The viewer this custom camera controls instance is attached to.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"frameId")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"number")),(0,i.kt)("td",{parentName:"tr",align:"left"},"The request animation frame's id.")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," ",(0,i.kt)("em",{parentName:"p"},"void")),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mapillary/mapillary-js/blob/50cd4088/src/viewer/interfaces/ICustomCameraControls.ts#L86"},"viewer/interfaces/ICustomCameraControls.ts:86")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"onattach"},"onAttach"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"onAttach"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"viewer"),": ",(0,i.kt)("a",{parentName:"p",href:"/mapillary-js/api/interfaces/viewer.iviewer"},(0,i.kt)("em",{parentName:"a"},"IViewer")),", ",(0,i.kt)("inlineCode",{parentName:"p"},"viewMatrixCallback"),": (",(0,i.kt)("inlineCode",{parentName:"p"},"viewMatrix"),": ",(0,i.kt)("em",{parentName:"p"},"number"),"[]) => ",(0,i.kt)("em",{parentName:"p"},"void"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"projectionMatrixCallback"),": (",(0,i.kt)("inlineCode",{parentName:"p"},"projectionMatrix"),": ",(0,i.kt)("em",{parentName:"p"},"number"),"[]) => ",(0,i.kt)("em",{parentName:"p"},"void"),"): ",(0,i.kt)("em",{parentName:"p"},"void")),(0,i.kt)("p",null,"Method called when the camera controls has been\nattached to the viewer with {@link Viewer#attachCameraControls}.\nThis gives the camera controls a chance to initialize\nresources."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"description"))," Use the matrix callback functions\nto modify the camera pose and projection of the\nviewer's camera."),(0,i.kt)("p",null,"Invoking the matrix callbacks has no effect if the\ncustom camera controls has not been activated."),(0,i.kt)("h4",{id:"parameters-2"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"viewer")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/mapillary-js/api/interfaces/viewer.iviewer"},(0,i.kt)("em",{parentName:"a"},"IViewer"))),(0,i.kt)("td",{parentName:"tr",align:"left"},"The viewer this custom camera controls instance was just added to.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"viewMatrixCallback")),(0,i.kt)("td",{parentName:"tr",align:"left"},"(",(0,i.kt)("inlineCode",{parentName:"td"},"viewMatrix"),": ",(0,i.kt)("em",{parentName:"td"},"number"),"[]) => ",(0,i.kt)("em",{parentName:"td"},"void")),(0,i.kt)("td",{parentName:"tr",align:"left"},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"projectionMatrixCallback")),(0,i.kt)("td",{parentName:"tr",align:"left"},"(",(0,i.kt)("inlineCode",{parentName:"td"},"projectionMatrix"),": ",(0,i.kt)("em",{parentName:"td"},"number"),"[]) => ",(0,i.kt)("em",{parentName:"td"},"void")),(0,i.kt)("td",{parentName:"tr",align:"left"},"-")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," ",(0,i.kt)("em",{parentName:"p"},"void")),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mapillary/mapillary-js/blob/50cd4088/src/viewer/interfaces/ICustomCameraControls.ts#L106"},"viewer/interfaces/ICustomCameraControls.ts:106")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"ondeactivate"},"onDeactivate"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"onDeactivate"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"viewer"),": ",(0,i.kt)("a",{parentName:"p",href:"/mapillary-js/api/interfaces/viewer.iviewer"},(0,i.kt)("em",{parentName:"a"},"IViewer")),"): ",(0,i.kt)("em",{parentName:"p"},"void")),(0,i.kt)("p",null,"Method called when the camera controls has been deactivated.\nThis gives the camera controls a chance to clean up resources\nand event listeners."),(0,i.kt)("h4",{id:"parameters-3"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"viewer")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/mapillary-js/api/interfaces/viewer.iviewer"},(0,i.kt)("em",{parentName:"a"},"IViewer"))),(0,i.kt)("td",{parentName:"tr",align:"left"},"The viewer this custom camera controls instance is attached to.")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," ",(0,i.kt)("em",{parentName:"p"},"void")),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mapillary/mapillary-js/blob/50cd4088/src/viewer/interfaces/ICustomCameraControls.ts#L120"},"viewer/interfaces/ICustomCameraControls.ts:120")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"ondetach"},"onDetach"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"onDetach"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"viewer"),": ",(0,i.kt)("a",{parentName:"p",href:"/mapillary-js/api/interfaces/viewer.iviewer"},(0,i.kt)("em",{parentName:"a"},"IViewer")),"): ",(0,i.kt)("em",{parentName:"p"},"void")),(0,i.kt)("p",null,"Method called when the camera controls has been detached from\nthe viewer by calling {@link Viewer#detachCameraControls}.\nThis gives the camera controls a chance to clean up resources\nand event listeners."),(0,i.kt)("h4",{id:"parameters-4"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"viewer")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/mapillary-js/api/interfaces/viewer.iviewer"},(0,i.kt)("em",{parentName:"a"},"IViewer"))),(0,i.kt)("td",{parentName:"tr",align:"left"},"The viewer this custom camera controls instance was just detached from.")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," ",(0,i.kt)("em",{parentName:"p"},"void")),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mapillary/mapillary-js/blob/50cd4088/src/viewer/interfaces/ICustomCameraControls.ts#L131"},"viewer/interfaces/ICustomCameraControls.ts:131")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"onreference"},"onReference"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"onReference"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"viewer"),": ",(0,i.kt)("a",{parentName:"p",href:"/mapillary-js/api/interfaces/viewer.iviewer"},(0,i.kt)("em",{parentName:"a"},"IViewer")),", ",(0,i.kt)("inlineCode",{parentName:"p"},"reference"),": ",(0,i.kt)("a",{parentName:"p",href:"/mapillary-js/api/interfaces/api.lnglatalt"},(0,i.kt)("em",{parentName:"a"},"LngLatAlt")),"): ",(0,i.kt)("em",{parentName:"p"},"void")),(0,i.kt)("p",null,"Method called when the viewer's reference position has changed.\nThis gives the custom camera controls a chance to reposition\nthe camera."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"description"))," Calculate the updated topocentric positions\nfor scene objects using the previous reference, the\nnew provided reference as well as the\n",(0,i.kt)("a",{parentName:"p",href:"/mapillary-js/api/modules/api#geodetictoenu"},"geodeticToEnu")," and\n",(0,i.kt)("a",{parentName:"p",href:"/mapillary-js/api/modules/api#enutogeodetic"},"enuToGeodetic")," functions."),(0,i.kt)("h4",{id:"parameters-5"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"viewer")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/mapillary-js/api/interfaces/viewer.iviewer"},(0,i.kt)("em",{parentName:"a"},"IViewer"))),(0,i.kt)("td",{parentName:"tr",align:"left"},"The viewer this custom renderer is added to.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"reference")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/mapillary-js/api/interfaces/api.lnglatalt"},(0,i.kt)("em",{parentName:"a"},"LngLatAlt"))),(0,i.kt)("td",{parentName:"tr",align:"left"},"The viewer's current reference position.")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," ",(0,i.kt)("em",{parentName:"p"},"void")),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mapillary/mapillary-js/blob/50cd4088/src/viewer/interfaces/ICustomCameraControls.ts#L149"},"viewer/interfaces/ICustomCameraControls.ts:149")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"onresize"},"onResize"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"onResize"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"viewer"),": ",(0,i.kt)("a",{parentName:"p",href:"/mapillary-js/api/interfaces/viewer.iviewer"},(0,i.kt)("em",{parentName:"a"},"IViewer")),"): ",(0,i.kt)("em",{parentName:"p"},"void")),(0,i.kt)("p",null,"Method called when the viewer has been resized."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"description"))," Use this method to modify the projection."),(0,i.kt)("h4",{id:"parameters-6"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"viewer")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/mapillary-js/api/interfaces/viewer.iviewer"},(0,i.kt)("em",{parentName:"a"},"IViewer")))))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," ",(0,i.kt)("em",{parentName:"p"},"void")),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mapillary/mapillary-js/blob/50cd4088/src/viewer/interfaces/ICustomCameraControls.ts#L158"},"viewer/interfaces/ICustomCameraControls.ts:158")))}s.isMDXComponent=!0}}]);