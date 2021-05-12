(self.webpackChunkmapillary_js_doc=self.webpackChunkmapillary_js_doc||[]).push([[510],{3905:function(e,a,t){"use strict";t.d(a,{Zo:function(){return o},kt:function(){return k}});var n=t(7294);function i(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function p(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){i(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,n,i=function(e,a){if(null==e)return{};var t,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(i[t]=e[t]);return i}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var m=n.createContext({}),s=function(e){var a=n.useContext(m),t=a;return e&&(t="function"==typeof e?e(a):p(p({},a),e)),t},o=function(e){var a=s(e.components);return n.createElement(m.Provider,{value:a},e.children)},c={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},u=n.forwardRef((function(e,a){var t=e.components,i=e.mdxType,r=e.originalType,m=e.parentName,o=l(e,["components","mdxType","originalType","parentName"]),u=s(t),k=i,h=u["".concat(m,".").concat(k)]||u[k]||c[k]||r;return t?n.createElement(h,p(p({ref:a},o),{},{components:t})):n.createElement(h,p({ref:a},o))}));function k(e,a){var t=arguments,i=a&&a.mdxType;if("string"==typeof e||i){var r=t.length,p=new Array(r);p[0]=u;var l={};for(var m in a)hasOwnProperty.call(a,m)&&(l[m]=a[m]);l.originalType=e,l.mdxType="string"==typeof e?e:i,p[1]=l;for(var s=2;s<r;s++)p[s]=t[s];return n.createElement.apply(null,p)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},3658:function(e,a,t){"use strict";t.r(a),t.d(a,{frontMatter:function(){return p},metadata:function(){return l},toc:function(){return m},default:function(){return o}});var n=t(2122),i=t(9756),r=(t(7294),t(3905)),p={id:"api.imageent",title:"Interface: ImageEnt",sidebar_label:"ImageEnt",custom_edit_url:null},l={unversionedId:"interfaces/api.imageent",id:"interfaces/api.imageent",isDocsHomePage:!1,title:"Interface: ImageEnt",description:"api.ImageEnt",source:"@site/api/interfaces/api.imageent.md",sourceDirName:"interfaces",slug:"/interfaces/api.imageent",permalink:"/mapillary-js/api/interfaces/api.imageent",editUrl:null,version:"current",sidebar_label:"ImageEnt",frontMatter:{id:"api.imageent",title:"Interface: ImageEnt",sidebar_label:"ImageEnt",custom_edit_url:null},sidebar:"api",previous:{title:"Interface: IDEnt",permalink:"/mapillary-js/api/interfaces/api.ident"},next:{title:"Interface: ImageTileEnt",permalink:"/mapillary-js/api/interfaces/api.imagetileent"}},m=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Properties",id:"properties",children:[{value:"altitude",id:"altitude",children:[]},{value:"atomic_scale",id:"atomic_scale",children:[]},{value:"camera_parameters",id:"camera_parameters",children:[]},{value:"camera_type",id:"camera_type",children:[]},{value:"captured_at",id:"captured_at",children:[]},{value:"cluster",id:"cluster",children:[]},{value:"compass_angle",id:"compass_angle",children:[]},{value:"computed_altitude",id:"computed_altitude",children:[]},{value:"computed_compass_angle",id:"computed_compass_angle",children:[]},{value:"computed_geometry",id:"computed_geometry",children:[]},{value:"computed_rotation",id:"computed_rotation",children:[]},{value:"creator",id:"creator",children:[]},{value:"exif_orientation",id:"exif_orientation",children:[]},{value:"geometry",id:"geometry",children:[]},{value:"height",id:"height",children:[]},{value:"id",id:"id",children:[]},{value:"merge_id",id:"merge_id",children:[]},{value:"mesh",id:"mesh",children:[]},{value:"owner",id:"owner",children:[]},{value:"private",id:"private",children:[]},{value:"quality_score",id:"quality_score",children:[]},{value:"sequence",id:"sequence",children:[]},{value:"thumb",id:"thumb",children:[]},{value:"width",id:"width",children:[]}]}],s={toc:m};function o(e){var a=e.components,t=(0,i.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,n.Z)({},s,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/mapillary-js/api/modules/api"},"api"),".ImageEnt"),(0,r.kt)("p",null,"Interface that describes the raw image properties."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"interface"))," ImageEnt"),(0,r.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"/mapillary-js/api/interfaces/api.coreimageent"},(0,r.kt)("em",{parentName:"a"},"CoreImageEnt")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"/mapillary-js/api/interfaces/api.spatialimageent"},(0,r.kt)("em",{parentName:"a"},"SpatialImageEnt"))),(0,r.kt)("p",{parentName:"li"},"\u21b3 ",(0,r.kt)("strong",{parentName:"p"},"ImageEnt")))),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("h3",{id:"altitude"},"altitude"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"altitude"),": ",(0,r.kt)("em",{parentName:"p"},"number")),(0,r.kt)("p",null,"Original EXIF altitude above sea level, in meters."),(0,r.kt)("p",null,"Inherited from: ",(0,r.kt)("a",{parentName:"p",href:"/mapillary-js/api/interfaces/api.spatialimageent"},"SpatialImageEnt"),".",(0,r.kt)("a",{parentName:"p",href:"/mapillary-js/api/interfaces/api.spatialimageent#altitude"},"altitude")),(0,r.kt)("p",null,"Defined in: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/mapillary/mapillary-js/blob/15b7798c/src/api/ents/SpatialImageEnt.ts#L15"},"api/ents/SpatialImageEnt.ts:15")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"atomic_scale"},"atomic","_","scale"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,r.kt)("strong",{parentName:"p"},"atomic","_","scale"),": ",(0,r.kt)("em",{parentName:"p"},"number")),(0,r.kt)("p",null,"Scale of atomic reconstruction."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"description"))," Optional - no 3D interaction available\nif unset."),(0,r.kt)("p",null,"Inherited from: ",(0,r.kt)("a",{parentName:"p",href:"/mapillary-js/api/interfaces/api.spatialimageent"},"SpatialImageEnt"),".",(0,r.kt)("a",{parentName:"p",href:"/mapillary-js/api/interfaces/api.spatialimageent#atomic_scale"},"atomic_scale")),(0,r.kt)("p",null,"Defined in: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/mapillary/mapillary-js/blob/15b7798c/src/api/ents/SpatialImageEnt.ts#L23"},"api/ents/SpatialImageEnt.ts:23")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"camera_parameters"},"camera","_","parameters"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"camera","_","parameters"),": ",(0,r.kt)("em",{parentName:"p"},"number"),"[]"),(0,r.kt)("p",null,"Camera type dependent camera parameters."),(0,r.kt)("p",null,"For perspective and fisheye camera types,\nthe camera parameters array should be\nconstructed according to"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"[focal, k1, k2]")),(0,r.kt)("p",null,"where focal is the camera focal length,\nand k1, k2 are radial distortion parameters."),(0,r.kt)("p",null,"For spherical camera type the camera\nparameters should be an emtpy array."),(0,r.kt)("p",null,"Inherited from: ",(0,r.kt)("a",{parentName:"p",href:"/mapillary-js/api/interfaces/api.spatialimageent"},"SpatialImageEnt"),".",(0,r.kt)("a",{parentName:"p",href:"/mapillary-js/api/interfaces/api.spatialimageent#camera_parameters"},"camera_parameters")),(0,r.kt)("p",null,"Defined in: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/mapillary/mapillary-js/blob/15b7798c/src/api/ents/CameraEnt.ts#L22"},"api/ents/CameraEnt.ts:22")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"camera_type"},"camera","_","type"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"camera","_","type"),": ",(0,r.kt)("em",{parentName:"p"},"string")),(0,r.kt)("p",null,"Projection type of the camera."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"description"))," Supported camera types are:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"  'spherical'\n  'fisheye'\n  'perspective'\n")),(0,r.kt)("p",null,"Other camera types will be treated as\nperspective images."),(0,r.kt)("p",null,"Inherited from: ",(0,r.kt)("a",{parentName:"p",href:"/mapillary-js/api/interfaces/api.spatialimageent"},"SpatialImageEnt"),".",(0,r.kt)("a",{parentName:"p",href:"/mapillary-js/api/interfaces/api.spatialimageent#camera_type"},"camera_type")),(0,r.kt)("p",null,"Defined in: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/mapillary/mapillary-js/blob/15b7798c/src/api/ents/CameraEnt.ts#L38"},"api/ents/CameraEnt.ts:38")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"captured_at"},"captured","_","at"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"captured","_","at"),": ",(0,r.kt)("em",{parentName:"p"},"number")),(0,r.kt)("p",null,"Timestamp when the image was captured."),(0,r.kt)("p",null,"Inherited from: ",(0,r.kt)("a",{parentName:"p",href:"/mapillary-js/api/interfaces/api.spatialimageent"},"SpatialImageEnt"),".",(0,r.kt)("a",{parentName:"p",href:"/mapillary-js/api/interfaces/api.spatialimageent#captured_at"},"captured_at")),(0,r.kt)("p",null,"Defined in: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/mapillary/mapillary-js/blob/15b7798c/src/api/ents/SpatialImageEnt.ts#L28"},"api/ents/SpatialImageEnt.ts:28")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"cluster"},"cluster"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"cluster"),": ",(0,r.kt)("a",{parentName:"p",href:"/mapillary-js/api/interfaces/api.urlent"},(0,r.kt)("em",{parentName:"a"},"URLEnt"))),(0,r.kt)("p",null,"Cluster reconstruction to which the image belongs."),(0,r.kt)("p",null,"Inherited from: ",(0,r.kt)("a",{parentName:"p",href:"/mapillary-js/api/interfaces/api.spatialimageent"},"SpatialImageEnt"),".",(0,r.kt)("a",{parentName:"p",href:"/mapillary-js/api/interfaces/api.spatialimageent#cluster"},"cluster")),(0,r.kt)("p",null,"Defined in: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/mapillary/mapillary-js/blob/15b7798c/src/api/ents/SpatialImageEnt.ts#L62"},"api/ents/SpatialImageEnt.ts:62")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"compass_angle"},"compass","_","angle"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"compass","_","angle"),": ",(0,r.kt)("em",{parentName:"p"},"number")),(0,r.kt)("p",null,"Original EXIF compass angle, measured in degrees."),(0,r.kt)("p",null,"Inherited from: ",(0,r.kt)("a",{parentName:"p",href:"/mapillary-js/api/interfaces/api.spatialimageent"},"SpatialImageEnt"),".",(0,r.kt)("a",{parentName:"p",href:"/mapillary-js/api/interfaces/api.spatialimageent#compass_angle"},"compass_angle")),(0,r.kt)("p",null,"Defined in: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/mapillary/mapillary-js/blob/15b7798c/src/api/ents/SpatialImageEnt.ts#L33"},"api/ents/SpatialImageEnt.ts:33")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"computed_altitude"},"computed","_","altitude"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,r.kt)("strong",{parentName:"p"},"computed","_","altitude"),": ",(0,r.kt)("em",{parentName:"p"},"number")),(0,r.kt)("p",null,"Computed altitude, in meters."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"description"))," Optional - no 3D interaction available\nif unset."),(0,r.kt)("p",null,"Inherited from: ",(0,r.kt)("a",{parentName:"p",href:"/mapillary-js/api/interfaces/api.spatialimageent"},"SpatialImageEnt"),".",(0,r.kt)("a",{parentName:"p",href:"/mapillary-js/api/interfaces/api.spatialimageent#computed_altitude"},"computed_altitude")),(0,r.kt)("p",null,"Defined in: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/mapillary/mapillary-js/blob/15b7798c/src/api/ents/SpatialImageEnt.ts#L41"},"api/ents/SpatialImageEnt.ts:41")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"computed_compass_angle"},"computed","_","compass","_","angle"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,r.kt)("strong",{parentName:"p"},"computed","_","compass","_","angle"),": ",(0,r.kt)("em",{parentName:"p"},"number")),(0,r.kt)("p",null,"SfM computed compass angle, measured in degrees."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"description"))," Optional - no 3D interaction available\nif unset."),(0,r.kt)("p",null,"Inherited from: ",(0,r.kt)("a",{parentName:"p",href:"/mapillary-js/api/interfaces/api.spatialimageent"},"SpatialImageEnt"),".",(0,r.kt)("a",{parentName:"p",href:"/mapillary-js/api/interfaces/api.spatialimageent#computed_compass_angle"},"computed_compass_angle")),(0,r.kt)("p",null,"Defined in: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/mapillary/mapillary-js/blob/15b7798c/src/api/ents/SpatialImageEnt.ts#L49"},"api/ents/SpatialImageEnt.ts:49")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"computed_geometry"},"computed","_","geometry"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,r.kt)("strong",{parentName:"p"},"computed","_","geometry"),": ",(0,r.kt)("a",{parentName:"p",href:"/mapillary-js/api/interfaces/api.lnglat"},(0,r.kt)("em",{parentName:"a"},"LngLat"))),(0,r.kt)("p",null,"SfM computed longitude, latitude in WGS84 datum, measured in degrees."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"description"))," Optional - no 3D interaction available\nif unset."),(0,r.kt)("p",null,"Inherited from: ",(0,r.kt)("a",{parentName:"p",href:"/mapillary-js/api/interfaces/api.coreimageent"},"CoreImageEnt"),".",(0,r.kt)("a",{parentName:"p",href:"/mapillary-js/api/interfaces/api.coreimageent#computed_geometry"},"computed_geometry")),(0,r.kt)("p",null,"Defined in: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/mapillary/mapillary-js/blob/15b7798c/src/api/ents/CoreImageEnt.ts#L16"},"api/ents/CoreImageEnt.ts:16")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"computed_rotation"},"computed","_","rotation"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,r.kt)("strong",{parentName:"p"},"computed","_","rotation"),": ",(0,r.kt)("em",{parentName:"p"},"number"),"[]"),(0,r.kt)("p",null,"Rotation vector in angle axis representation."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"description"))," Optional - no 3D interaction available\nif unset."),(0,r.kt)("p",null,"Inherited from: ",(0,r.kt)("a",{parentName:"p",href:"/mapillary-js/api/interfaces/api.spatialimageent"},"SpatialImageEnt"),".",(0,r.kt)("a",{parentName:"p",href:"/mapillary-js/api/interfaces/api.spatialimageent#computed_rotation"},"computed_rotation")),(0,r.kt)("p",null,"Defined in: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/mapillary/mapillary-js/blob/15b7798c/src/api/ents/SpatialImageEnt.ts#L57"},"api/ents/SpatialImageEnt.ts:57")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"creator"},"creator"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"creator"),": ",(0,r.kt)("a",{parentName:"p",href:"/mapillary-js/api/interfaces/api.creatorent"},(0,r.kt)("em",{parentName:"a"},"CreatorEnt"))),(0,r.kt)("p",null,"Image creator."),(0,r.kt)("p",null,"Inherited from: ",(0,r.kt)("a",{parentName:"p",href:"/mapillary-js/api/interfaces/api.spatialimageent"},"SpatialImageEnt"),".",(0,r.kt)("a",{parentName:"p",href:"/mapillary-js/api/interfaces/api.spatialimageent#creator"},"creator")),(0,r.kt)("p",null,"Defined in: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/mapillary/mapillary-js/blob/15b7798c/src/api/ents/SpatialImageEnt.ts#L67"},"api/ents/SpatialImageEnt.ts:67")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"exif_orientation"},"exif","_","orientation"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"exif","_","orientation"),": ",(0,r.kt)("em",{parentName:"p"},"number")),(0,r.kt)("p",null,"EXIF orientation of original image."),(0,r.kt)("p",null,"Inherited from: ",(0,r.kt)("a",{parentName:"p",href:"/mapillary-js/api/interfaces/api.spatialimageent"},"SpatialImageEnt"),".",(0,r.kt)("a",{parentName:"p",href:"/mapillary-js/api/interfaces/api.spatialimageent#exif_orientation"},"exif_orientation")),(0,r.kt)("p",null,"Defined in: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/mapillary/mapillary-js/blob/15b7798c/src/api/ents/SpatialImageEnt.ts#L72"},"api/ents/SpatialImageEnt.ts:72")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"geometry"},"geometry"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"geometry"),": ",(0,r.kt)("a",{parentName:"p",href:"/mapillary-js/api/interfaces/api.lnglat"},(0,r.kt)("em",{parentName:"a"},"LngLat"))),(0,r.kt)("p",null,"Original EXIF longitude, latitude in WGS84 datum, measured in degrees."),(0,r.kt)("p",null,"Inherited from: ",(0,r.kt)("a",{parentName:"p",href:"/mapillary-js/api/interfaces/api.coreimageent"},"CoreImageEnt"),".",(0,r.kt)("a",{parentName:"p",href:"/mapillary-js/api/interfaces/api.coreimageent#geometry"},"geometry")),(0,r.kt)("p",null,"Defined in: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/mapillary/mapillary-js/blob/15b7798c/src/api/ents/CoreImageEnt.ts#L21"},"api/ents/CoreImageEnt.ts:21")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"height"},"height"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"height"),": ",(0,r.kt)("em",{parentName:"p"},"number")),(0,r.kt)("p",null,"Height of original image, not adjusted for orientation."),(0,r.kt)("p",null,"Inherited from: ",(0,r.kt)("a",{parentName:"p",href:"/mapillary-js/api/interfaces/api.spatialimageent"},"SpatialImageEnt"),".",(0,r.kt)("a",{parentName:"p",href:"/mapillary-js/api/interfaces/api.spatialimageent#height"},"height")),(0,r.kt)("p",null,"Defined in: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/mapillary/mapillary-js/blob/15b7798c/src/api/ents/SpatialImageEnt.ts#L77"},"api/ents/SpatialImageEnt.ts:77")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"id"},"id"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"id"),": ",(0,r.kt)("em",{parentName:"p"},"string")),(0,r.kt)("p",null,"Unique id."),(0,r.kt)("p",null,"Inherited from: ",(0,r.kt)("a",{parentName:"p",href:"/mapillary-js/api/interfaces/api.spatialimageent"},"SpatialImageEnt"),".",(0,r.kt)("a",{parentName:"p",href:"/mapillary-js/api/interfaces/api.spatialimageent#id"},"id")),(0,r.kt)("p",null,"Defined in: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/mapillary/mapillary-js/blob/15b7798c/src/api/ents/IDEnt.ts#L10"},"api/ents/IDEnt.ts:10")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"merge_id"},"merge","_","id"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,r.kt)("strong",{parentName:"p"},"merge","_","id"),": ",(0,r.kt)("em",{parentName:"p"},"string")),(0,r.kt)("p",null,"SfM connected component id to which the image belongs."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"description"))," Optional - no 3D interaction available\nif unset."),(0,r.kt)("p",null,"Inherited from: ",(0,r.kt)("a",{parentName:"p",href:"/mapillary-js/api/interfaces/api.spatialimageent"},"SpatialImageEnt"),".",(0,r.kt)("a",{parentName:"p",href:"/mapillary-js/api/interfaces/api.spatialimageent#merge_id"},"merge_id")),(0,r.kt)("p",null,"Defined in: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/mapillary/mapillary-js/blob/15b7798c/src/api/ents/SpatialImageEnt.ts#L85"},"api/ents/SpatialImageEnt.ts:85")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"mesh"},"mesh"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"mesh"),": ",(0,r.kt)("a",{parentName:"p",href:"/mapillary-js/api/interfaces/api.urlent"},(0,r.kt)("em",{parentName:"a"},"URLEnt"))),(0,r.kt)("p",null,"3D mesh resource."),(0,r.kt)("p",null,"Inherited from: ",(0,r.kt)("a",{parentName:"p",href:"/mapillary-js/api/interfaces/api.spatialimageent"},"SpatialImageEnt"),".",(0,r.kt)("a",{parentName:"p",href:"/mapillary-js/api/interfaces/api.spatialimageent#mesh"},"mesh")),(0,r.kt)("p",null,"Defined in: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/mapillary/mapillary-js/blob/15b7798c/src/api/ents/SpatialImageEnt.ts#L90"},"api/ents/SpatialImageEnt.ts:90")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"owner"},"owner"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"owner"),": ",(0,r.kt)("a",{parentName:"p",href:"/mapillary-js/api/interfaces/api.ident"},(0,r.kt)("em",{parentName:"a"},"IDEnt"))),(0,r.kt)("p",null,"Owner to which the image belongs."),(0,r.kt)("p",null,"Inherited from: ",(0,r.kt)("a",{parentName:"p",href:"/mapillary-js/api/interfaces/api.spatialimageent"},"SpatialImageEnt"),".",(0,r.kt)("a",{parentName:"p",href:"/mapillary-js/api/interfaces/api.spatialimageent#owner"},"owner")),(0,r.kt)("p",null,"Defined in: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/mapillary/mapillary-js/blob/15b7798c/src/api/ents/SpatialImageEnt.ts#L95"},"api/ents/SpatialImageEnt.ts:95")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"private"},"private"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,r.kt)("strong",{parentName:"p"},"private"),": ",(0,r.kt)("em",{parentName:"p"},"boolean")),(0,r.kt)("p",null,"Value specifying if image is accessible to organization members only\nor to everyone."),(0,r.kt)("p",null,"Inherited from: ",(0,r.kt)("a",{parentName:"p",href:"/mapillary-js/api/interfaces/api.spatialimageent"},"SpatialImageEnt"),".",(0,r.kt)("a",{parentName:"p",href:"/mapillary-js/api/interfaces/api.spatialimageent#private"},"private")),(0,r.kt)("p",null,"Defined in: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/mapillary/mapillary-js/blob/15b7798c/src/api/ents/SpatialImageEnt.ts#L101"},"api/ents/SpatialImageEnt.ts:101")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"quality_score"},"quality","_","score"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,r.kt)("strong",{parentName:"p"},"quality","_","score"),": ",(0,r.kt)("em",{parentName:"p"},"number")),(0,r.kt)("p",null,"Image quality score on the interval ","[0, 1]","."),(0,r.kt)("p",null,"Inherited from: ",(0,r.kt)("a",{parentName:"p",href:"/mapillary-js/api/interfaces/api.spatialimageent"},"SpatialImageEnt"),".",(0,r.kt)("a",{parentName:"p",href:"/mapillary-js/api/interfaces/api.spatialimageent#quality_score"},"quality_score")),(0,r.kt)("p",null,"Defined in: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/mapillary/mapillary-js/blob/15b7798c/src/api/ents/SpatialImageEnt.ts#L106"},"api/ents/SpatialImageEnt.ts:106")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"sequence"},"sequence"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"sequence"),": ",(0,r.kt)("a",{parentName:"p",href:"/mapillary-js/api/interfaces/api.ident"},(0,r.kt)("em",{parentName:"a"},"IDEnt"))),(0,r.kt)("p",null,"Sequence that the image is part of."),(0,r.kt)("p",null,"Inherited from: ",(0,r.kt)("a",{parentName:"p",href:"/mapillary-js/api/interfaces/api.coreimageent"},"CoreImageEnt"),".",(0,r.kt)("a",{parentName:"p",href:"/mapillary-js/api/interfaces/api.coreimageent#sequence"},"sequence")),(0,r.kt)("p",null,"Defined in: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/mapillary/mapillary-js/blob/15b7798c/src/api/ents/CoreImageEnt.ts#L26"},"api/ents/CoreImageEnt.ts:26")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"thumb"},"thumb"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"thumb"),": ",(0,r.kt)("a",{parentName:"p",href:"/mapillary-js/api/interfaces/api.urlent"},(0,r.kt)("em",{parentName:"a"},"URLEnt"))),(0,r.kt)("p",null,"Image thumbnail resource."),(0,r.kt)("p",null,"Inherited from: ",(0,r.kt)("a",{parentName:"p",href:"/mapillary-js/api/interfaces/api.spatialimageent"},"SpatialImageEnt"),".",(0,r.kt)("a",{parentName:"p",href:"/mapillary-js/api/interfaces/api.spatialimageent#thumb"},"thumb")),(0,r.kt)("p",null,"Defined in: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/mapillary/mapillary-js/blob/15b7798c/src/api/ents/SpatialImageEnt.ts#L111"},"api/ents/SpatialImageEnt.ts:111")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"width"},"width"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"width"),": ",(0,r.kt)("em",{parentName:"p"},"number")),(0,r.kt)("p",null,"Width of original image, not adjusted for orientation."),(0,r.kt)("p",null,"Inherited from: ",(0,r.kt)("a",{parentName:"p",href:"/mapillary-js/api/interfaces/api.spatialimageent"},"SpatialImageEnt"),".",(0,r.kt)("a",{parentName:"p",href:"/mapillary-js/api/interfaces/api.spatialimageent#width"},"width")),(0,r.kt)("p",null,"Defined in: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/mapillary/mapillary-js/blob/15b7798c/src/api/ents/SpatialImageEnt.ts#L116"},"api/ents/SpatialImageEnt.ts:116")))}o.isMDXComponent=!0}}]);