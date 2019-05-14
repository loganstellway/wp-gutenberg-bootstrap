!function(e){var t={};function l(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,l),o.l=!0,o.exports}l.m=e,l.c=t,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)l.d(n,o,function(t){return e[t]}.bind(null,o));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="",l(l.s=20)}([function(e,t){!function(){e.exports=this.wp.element}()},function(e,t){!function(){e.exports=this.wp.i18n}()},function(e,t){!function(){e.exports=this.wp.components}()},function(e,t){!function(){e.exports=this.wp.editor}()},function(e,t){!function(){e.exports=this.wp.compose}()},function(e,t,l){var n=l(15);e.exports=function(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{},o=Object.keys(l);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(l).filter(function(e){return Object.getOwnPropertyDescriptor(l,e).enumerable}))),o.forEach(function(t){n(e,t,l[t])})}return e}},function(e,t){!function(){e.exports=this.wp.data}()},function(e,t,l){var n;
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
!function(){"use strict";var l={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var a=typeof n;if("string"===a||"number"===a)e.push(n);else if(Array.isArray(n)&&n.length){var c=o.apply(null,n);c&&e.push(c)}else if("object"===a)for(var r in n)l.call(n,r)&&n[r]&&e.push(r)}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(n=function(){return o}.apply(t,[]))||(e.exports=n)}()},function(e){e.exports={name:"loganstellway/bootstrap-column",category:"common",attributes:{bgUrl:{type:"string"},bgType:{type:"string"},bgId:{type:"number"},bgAttachment:{type:"string",default:"scroll"},bgPosition:{type:"string",default:"50% 50%"},addBgColor:{type:"boolean",default:!1},bgColor:{type:"object",default:{hex:"transparent"}},addMaskColor:{type:"boolean",default:!1},maskColor:{type:"object",default:{hex:"transparent"}},addTextColor:{type:"boolean",default:!1},textColor:{type:"object",default:{hex:"inherit"}},textAlign:{type:"string",default:""},xs:{type:"number",default:6},sm:{type:"number",default:0},md:{type:"number",default:0},lg:{type:"number",default:0},xl:{type:"number",default:0},xsAlign:{type:"string"},smAlign:{type:"string"},mdAlign:{type:"string"},lgAlign:{type:"string"},xlAlign:{type:"string"},xsContent:{type:"string"},smContent:{type:"string"},mdContent:{type:"string"},lgContent:{type:"string"},xlContent:{type:"string"}}}},function(e){e.exports={name:"loganstellway/bootstrap-grid",category:"layout",attributes:{bgUrl:{type:"string"},bgType:{type:"string"},bgId:{type:"number"},bgAttachment:{type:"string",default:"scroll"},bgPosition:{type:"string",default:"50% 50%"},addBgColor:{type:"boolean",default:!1},bgColor:{type:"object",default:{hex:"transparent"}},addMaskColor:{type:"boolean",default:!1},maskColor:{type:"object",default:{hex:"transparent"}},addTextColor:{type:"boolean",default:!1},textColor:{type:"object",default:{hex:"inherit"}},columns:{type:"number",default:2},width:{type:"string",default:"container"},gutter:{type:"boolean",default:!0},rowClass:{type:"string"},xsDir:{type:"string"},smDir:{type:"string"},mdDir:{type:"string"},lgDir:{type:"string"},xlDir:{type:"string"},xsAlign:{type:"string"},smAlign:{type:"string"},mdAlign:{type:"string"},lgAlign:{type:"string"},xlAlign:{type:"string"},xsJustify:{type:"string"},smJustify:{type:"string"},mdJustify:{type:"string"},lgJustify:{type:"string"},xlJustify:{type:"string"}}}},function(e){e.exports={name:"loganstellway/bootstrap-embed",category:"embed",attributes:{ratio:{type:"string",default:"16by9"},customX:{type:"number",default:1},customY:{type:"number",default:1},grow:{type:"boolean",default:!1},bgId:{type:"number"},bgAttachment:{type:"string",default:"scroll"},bgPosition:{type:"string",default:"50% 50%"},addBgColor:{type:"boolean",default:!1},bgColor:{type:"object",default:{hex:"transparent"}},addMaskColor:{type:"boolean",default:!1},maskColor:{type:"object",default:{hex:"transparent"}},addTextColor:{type:"boolean",default:!1},textColor:{type:"object",default:{hex:"inherit"}},textAlign:{type:"string",default:""},verticalAlign:{type:"string",default:"top"}}}},function(e,t){!function(){e.exports=this.wp.blocks}()},function(e,t,l){e.exports=function(e,t){var l,n,o,a=0;function c(){var t,c,r=n,i=arguments.length;e:for(;r;){if(r.args.length===arguments.length){for(c=0;c<i;c++)if(r.args[c]!==arguments[c]){r=r.next;continue e}return r!==n&&(r===o&&(o=r.prev),r.prev.next=r.next,r.next&&(r.next.prev=r.prev),r.next=n,r.prev=null,n.prev=r,n=r),r.val}r=r.next}for(t=new Array(i),c=0;c<i;c++)t[c]=arguments[c];return r={args:t,val:e.apply(null,t)},n?(n.prev=r,r.next=n):o=r,a===l?(o=o.prev).next=null:a++,n=r,r.val}return t&&t.maxSize&&(l=t.maxSize),c.clear=function(){n=null,o=null,a=0},c}},function(e,t){e.exports=React},function(e,t){!function(){e.exports=this.wp.hooks}()},function(e,t){e.exports=function(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}},,,,,function(e,t,l){"use strict";l.r(t);var n={};l.r(n),l.d(n,"metadata",function(){return Y}),l.d(n,"name",function(){return V}),l.d(n,"settings",function(){return q});var o={};l.r(o),l.d(o,"metadata",function(){return ie}),l.d(o,"name",function(){return be}),l.d(o,"settings",function(){return ue});var a={};l.r(a),l.d(a,"metadata",function(){return je}),l.d(a,"name",function(){return Oe}),l.d(a,"settings",function(){return ve});var c=l(11),r=l(0),i=l(3),b=l(1),s=l(6),u=l(4),m=l(2),d=(l(14),l(7)),g=l.n(d),p=l(12),j=l.n(p)()(function(e){for(var t=[];e>0;)t.push(["loganstellway/bootstrap-column"]),e--;return t}),O=function(e){return{top:"align-items-start",middle:"align-items-center",bottom:"align-items-end"}[e]||""},f=function(e,t,l){var n=[];return["xs","sm","md","lg","xl"].forEach(function(o,a){(a=e["".concat(o).concat(l||"")]||null)&&a.length&&n.push("".concat(t,"-").concat("xs"==o?"":"".concat(o,"-")).concat(a))}),n},v=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,l=e.width,n=e.columns;return g()(t,"position-relative has-".concat(n,"-columns"),l)},C=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,l=e.gutter,n=e.rowClass,o=f(e,"flex","Dir"),a=f(e,"align-items","Align"),c=f(e,"justify-content","Justify");return g()("row",t,n,o,a,c,l?"":"no-gutters")},_=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,l=e.textAlign,n=f(e,"align-items","Align"),o=f(e,"align-content","Content"),a=f(e,"col","");return g()(t,n,o,a,"position-relative",l?"text-".concat(l):null)},y=function(e,t){var l=e.ratio,n=l||"custom";return"custom"==n&&(n="".concat(e.customX,"by").concat(e.customY)),g()(t,"embed-responsive","custom"==l?"":"embed-responsive-".concat(n))},E=function(e){var t=e.ratio,l=e.customX,n=e.customY;if("custom"==t)return Object(r.createElement)("div",{style:{paddingTop:"".concat(n/l*100,"%")}})},h=function(e){return e&&e.rgb?"rgba(".concat([e.rgb.r,e.rgb.g,e.rgb.b,e.rgb.a].join(","),")"):"transparent"},k=function(e){var t=e.addTextColor,l=e.textColor,n=e.bgAttachment,o=e.bgUrl,a=e.addBgColor,c=e.bgColor,r=e.bgPosition;return{color:t&&l?l.hex:null,backgroundSize:"cover",backgroundAttachment:n,backgroundImage:o?"url(".concat(o,")"):"",backgroundColor:a&&c?h(c):null,backgroundPosition:r}},x=function(e,t){return Object(r.createElement)("span",{className:"editor-panel-".concat(e,"-settings__panel-title")},t)},B=l(5),A=l.n(B),w=[{size:1,title:"1/12"},{size:2,title:"1/6"},{size:3,title:"1/4"},{size:4,title:"1/3"},{size:5,title:"5/12"},{size:6,title:"1/2"},{size:7,title:"7/12"},{size:8,title:"2/3"},{size:9,title:"3/4"},{size:10,title:"5/6"},{size:11,title:"11/12"},{size:12,title:Object(b.__)("Full Width")}],T={xs:"smartphone",sm:"image-rotate-right",md:"tablet",lg:"laptop",xl:"desktop",all:"welcome-view-site"},S={xs:Object(b.__)("Smart Phone"),sm:Object(b.__)("Landscape Smart Phone"),md:Object(b.__)("Tablet"),lg:Object(b.__)("Laptop"),xl:Object(b.__)("Desktop"),all:Object(b.__)("All Breakpoints")},P=Object(u.withState)({size:1})(function(e){var t=e.icon,l=void 0!==t&&t,n=e.breakpoint,o=e.isCollapsed,a=void 0===o||o,c=e.value,i=e.onChange,b=JSON.parse(JSON.stringify(w));return"xs"!==n&&b.unshift({size:0,title:"Default"}),Object(r.createElement)(m.Toolbar,{isCollapsed:a,icon:l||T[n],label:S[n],controls:b.map(function(e){var t=e.size;return A()({},e,{isActive:c===t,onClick:function(){i(t)}})})})}),N=[{value:"",title:"Default"},{value:"start",title:"Start"},{value:"end",title:"End"},{value:"center",title:"Center"},{value:"baseline",title:"Baseline"},{value:"stretch",title:"Stretch"}],I={xs:"smartphone",sm:"image-rotate-right",md:"tablet",lg:"laptop",xl:"desktop",all:"welcome-view-site"},D={xs:Object(b.__)("Smart Phone"),sm:Object(b.__)("Landscape Smart Phone"),md:Object(b.__)("Tablet"),lg:Object(b.__)("Laptop"),xl:Object(b.__)("Desktop"),all:Object(b.__)("All Breakpoints")},M=Object(u.withState)({value:""})(function(e){var t=e.icon,l=void 0!==t&&t,n=e.breakpoint,o=e.isCollapsed,a=void 0===o||o,c=(e.value,e.onChange),i=e.dirOptions,b=void 0===i?N:i;return Object(r.createElement)(m.Toolbar,{isCollapsed:a,icon:l||I[n],label:D[n],controls:b.map(function(e){var t=e.value;return A()({},e,{isActive:t==t,onClick:function(){c(t)}})})})}),L=[{value:"",title:"Default"},{value:"start",title:"Start"},{value:"end",title:"End"},{value:"center",title:"Center"},{value:"between",title:"Between"},{value:"around",title:"Around"},{value:"stretch",title:"Stretch"}],R={xs:"smartphone",sm:"image-rotate-right",md:"tablet",lg:"laptop",xl:"desktop",all:"welcome-view-site"},F={xs:Object(b.__)("Smart Phone"),sm:Object(b.__)("Landscape Smart Phone"),md:Object(b.__)("Tablet"),lg:Object(b.__)("Laptop"),xl:Object(b.__)("Desktop"),all:Object(b.__)("All Breakpoints")},z=Object(u.withState)({value:""})(function(e){var t=e.icon,l=void 0!==t&&t,n=e.breakpoint,o=e.isCollapsed,a=void 0===o||o,c=(e.value,e.onChange),i=e.dirOptions,b=void 0===i?L:i;return Object(r.createElement)(m.Toolbar,{isCollapsed:a,icon:l||R[n],label:F[n],controls:b.map(function(e){var t=e.value;return A()({},e,{isActive:t==t,onClick:function(){c(t)}})})})}),U=["image"],J=Object(r.createElement)("p",null,Object(b.__)("To edit the background image, you need permission to upload media.")),X=["xs","sm","md","lg","xl"],G=Object(u.compose)(Object(s.withSelect)(function(e,t){var l=t.clientId,n=(e("core/editor"),e("core/editor"));n.getBlocksByClientId;return{parentColumnsBlockClientId:(0,n.getBlockRootClientId)(l)}}))(function(e){var t=e.attributes,l=e.setAttributes,n=e.className,o=t.bgUrl,a=t.bgId,c=t.bgAttachment,s=t.addBgColor,u=t.bgColor,d=t.addMaskColor,g=t.maskColor,p=t.bgPosition,j=t.addTextColor,O=t.textColor,f=t.textAlign,v=function(e){if(e&&e.url){var t=e.media_type||e.type;U.indexOf(t)<0||l({bgUrl:e.url,bgId:e.id,bgType:t})}else l({bgUrl:void 0,bgId:void 0})};return Object(r.createElement)(r.Fragment,null,Object(r.createElement)(i.InspectorControls,null,Object(r.createElement)(m.PanelBody,{className:"editor-panel-alignment-settings",title:x("alignment",Object(b.__)("Alignment"))},Object(r.createElement)(m.BaseControl,{label:Object(b.__)("Column Size")},Object(r.createElement)("div",{style:{overflowX:"auto"}},Object(r.createElement)("table",{style:{width:"100%"}},Object(r.createElement)("tbody",null,Object(r.createElement)("tr",null,X.map(function(e){return Object(r.createElement)("td",{key:e},Object(r.createElement)(P,{breakpoint:e,value:t[e],onChange:function(t){var n={};n[e]=t,l(n)}}))}),Object(r.createElement)("td",{key:"all"},Object(r.createElement)(P,{breakpoint:"all",onChange:function(e){var t={sm:e,md:e,lg:e,xl:e};t.xs=e||6,l(t)}}))))))),Object(r.createElement)(m.BaseControl,{label:Object(b.__)("Vertical Align")},Object(r.createElement)("div",{style:{overflowX:"auto"}},Object(r.createElement)("table",{style:{width:"100%"}},Object(r.createElement)("tbody",null,Object(r.createElement)("tr",null,X.map(function(e){return Object(r.createElement)("td",{key:e},Object(r.createElement)(M,{breakpoint:e,value:t["".concat(e,"Align")],onChange:function(t){var n={};n["".concat(e,"Align")]=t,l(n)}}))}),Object(r.createElement)("td",{key:"all"},Object(r.createElement)(M,{breakpoint:"all",onChange:function(e){l({xsAlign:e,smAlign:e,mdAlign:e,lgAlign:e,xlAlign:e})}}))))))),Object(r.createElement)(m.BaseControl,{label:Object(b.__)("Align Content")},Object(r.createElement)("div",{style:{overflowX:"auto"}},Object(r.createElement)("table",{style:{width:"100%"}},Object(r.createElement)("tbody",null,Object(r.createElement)("tr",null,X.map(function(e){return Object(r.createElement)("td",{key:e},Object(r.createElement)(z,{breakpoint:e,value:t["".concat(e,"Content")],onChange:function(t){var n={};n["".concat(e,"Content")]=t,l(n)}}))}),Object(r.createElement)("td",{key:"all"},Object(r.createElement)(z,{breakpoint:"all",onChange:function(e){l({xsContent:e,smContent:e,mdContent:e,lgContent:e,xlContent:e})}})))))))),Object(r.createElement)(m.PanelBody,{className:"editor-panel-background-settings",title:x("background",Object(b.__)("Background"))},Object(r.createElement)(m.BaseControl,{label:Object(b.__)("Background Image")},Object(r.createElement)(i.MediaUploadCheck,{fallback:J},Object(r.createElement)(i.MediaUpload,{title:Object(b.__)("Select Background Image"),onSelect:v,allowedTypes:U,value:a,render:function(e){var t=e.open;return Object(r.createElement)(r.Fragment,null,!o&&Object(r.createElement)(m.Button,{isDefault:!0,onClick:t},Object(r.createElement)("span",null,Object(b.__)("Select Background Image"))),o&&Object(r.createElement)(r.Fragment,null,Object(r.createElement)(m.Button,{isLink:!0,onClick:t},Object(r.createElement)("img",{src:o,alt:""})),Object(r.createElement)(m.ButtonGroup,null,Object(r.createElement)(m.Button,{isDefault:!0,onClick:v},Object(b.__)("Remove"))," ",Object(r.createElement)(m.Button,{isPrimary:!0,onClick:t},Object(b.__)("Change")))))}}))),o&&Object(r.createElement)(r.Fragment,null,Object(r.createElement)(m.SelectControl,{label:Object(b.__)("Background Position"),value:p,onChange:function(e){l({bgPosition:e})},options:[{label:Object(b.__)("Left Top"),value:"0 0"},{label:Object(b.__)("Left Middle"),value:"0 50%"},{label:Object(b.__)("Left Bottom"),value:"0 100%"},{label:Object(b.__)("Center Top"),value:"50% 0"},{label:Object(b.__)("Center Middle"),value:"50% 50%"},{label:Object(b.__)("Center Bottom"),value:"50% 100%"},{label:Object(b.__)("Right Top"),value:"100% 0"},{label:Object(b.__)("Right Middle"),value:"100% 50%"},{label:Object(b.__)("Right Bottom"),value:"100% 100%"}]}),Object(r.createElement)(m.SelectControl,{label:Object(b.__)("Background Scroll Behavior"),value:c,onChange:function(e){l({bgAttachment:e})},options:[{label:Object(b.__)("Scroll (Default)"),value:"scroll"},{label:Object(b.__)("Fixed (Parallax)"),value:"fixed"}]}))),Object(r.createElement)(m.PanelBody,{className:"editor-panel-color-settings",title:x("color",Object(b.__)("Color"))},Object(r.createElement)(m.ToggleControl,{label:Object(b.__)("Add Text Color?"),checked:j,onChange:function(e){l({addTextColor:e})}}),j&&Object(r.createElement)(m.ColorPicker,{color:O,onChangeComplete:function(e){l({textColor:e})},disableAlpha:!0}),Object(r.createElement)(m.ToggleControl,{label:Object(b.__)("Add Background Color?"),checked:s,onChange:function(e){l({addBgColor:e})}}),s&&Object(r.createElement)(m.ColorPicker,{color:u,onChangeComplete:function(e){l({bgColor:e})}}),Object(r.createElement)(m.ToggleControl,{label:Object(b.__)("Add Mask Color?"),checked:d,onChange:function(e){l({addMaskColor:e})}}),d&&Object(r.createElement)(m.ColorPicker,{color:g,onChangeComplete:function(e){l({maskColor:e})}}))),Object(r.createElement)(i.BlockControls,null,Object(r.createElement)(i.AlignmentToolbar,{value:f,onChange:function(e){l({textAlign:e=e===f?"":e})}})),Object(r.createElement)("div",{className:_(t,"".concat(n," overflow-visible")),style:k(t)},Object(r.createElement)("div",{className:"bootstrap-grid--mask",style:{backgroundColor:h(d?g:null)}}),Object(r.createElement)("div",{className:"bootstrap-grid--content"},Object(r.createElement)(i.InnerBlocks,{templateLock:!1}))))}),Y=l(8),V=Y.name,W=Y.attributes,q={title:Object(b.__)("Bootstrap Column"),parent:["loganstellway/bootstrap-grid"],category:"layout",description:Object(b.__)("A single Twitter Bootstrap column within a grid block."),supports:{inserter:!1,reusable:!1,html:!1},attributes:W,edit:G,save:function(e){var t=e.attributes,l=e.className,n=t.addMaskColor,o=t.maskColor;return Object(r.createElement)("div",{className:_(t,l),style:k(t)},Object(r.createElement)("div",{className:"bootstrap-grid--mask",style:{backgroundColor:h(n?o:null)}}),Object(r.createElement)("div",{className:"bootstrap-grid--content"},Object(r.createElement)(i.InnerBlocks.Content,null)))}},H=[{value:"",title:"Default"},{value:"row",title:"Row"},{value:"row-reverse",title:"Row Reverse"},{value:"column",title:"Column"},{value:"column-reverse",title:"Column Reverse"}],K={xs:"smartphone",sm:"image-rotate-right",md:"tablet",lg:"laptop",xl:"desktop",all:"welcome-view-site"},Q={xs:Object(b.__)("Smart Phone"),sm:Object(b.__)("Landscape Smart Phone"),md:Object(b.__)("Tablet"),lg:Object(b.__)("Laptop"),xl:Object(b.__)("Desktop"),all:Object(b.__)("All Breakpoints")},Z=Object(u.withState)({value:""})(function(e){var t=e.icon,l=void 0!==t&&t,n=e.breakpoint,o=e.isCollapsed,a=void 0===o||o,c=(e.value,e.onChange),i=e.dirOptions,b=void 0===i?H:i;return Object(r.createElement)(m.Toolbar,{isCollapsed:a,icon:l||K[n],label:Q[n],controls:b.map(function(e){var t=e.value;return A()({},e,{isActive:t==t,onClick:function(){c(t)}})})})}),$=[{value:"",title:"Default"},{value:"start",title:"Start"},{value:"end",title:"End"},{value:"center",title:"Center"},{value:"between",title:"Between"},{value:"around",title:"Around"}],ee={xs:"smartphone",sm:"image-rotate-right",md:"tablet",lg:"laptop",xl:"desktop",all:"welcome-view-site"},te={xs:Object(b.__)("Smart Phone"),sm:Object(b.__)("Landscape Smart Phone"),md:Object(b.__)("Tablet"),lg:Object(b.__)("Laptop"),xl:Object(b.__)("Desktop"),all:Object(b.__)("All Breakpoints")},le=Object(u.withState)({value:""})(function(e){var t=e.icon,l=void 0!==t&&t,n=e.breakpoint,o=e.isCollapsed,a=void 0===o||o,c=(e.value,e.onChange),i=e.dirOptions,b=void 0===i?$:i;return Object(r.createElement)(m.Toolbar,{isCollapsed:a,icon:l||ee[n],label:te[n],controls:b.map(function(e){var t=e.value;return A()({},e,{isActive:t==t,onClick:function(){c(t)}})})})}),ne=["image"],oe=Object(r.createElement)("p",null,Object(b.__)("To edit the background image, you need permission to upload media.")),ae=["xs","sm","md","lg","xl"],ce=["loganstellway/bootstrap-column"],re=Object(u.compose)(Object(s.withSelect)(function(e,t){var l=t.clientId,n=(0,e("core/editor").getBlocksByClientId)(l)[0];return{childColumns:n?n.innerBlocks:[]}}))(function(e){var t=e.attributes,l=e.setAttributes,n=e.className,o=t.columns,a=t.width,c=t.gutter,s=t.rowClass,u=t.bgUrl,d=t.bgId,g=t.bgAttachment,p=t.bgPosition,O=t.addBgColor,f=t.bgColor,_=t.addMaskColor,y=t.maskColor,E=t.addTextColor,B=t.textColor,A=function(e){if(e&&e.url){var t=e.media_type||e.type;ne.indexOf(t)<0||l({bgUrl:e.url,bgId:e.id,bgType:t})}else l({bgUrl:void 0,bgId:void 0})};return Object(r.createElement)(r.Fragment,null,Object(r.createElement)(i.InspectorControls,null,Object(r.createElement)(m.PanelBody,{className:"editor-panel-grid-settings",title:x("grid",Object(b.__)("Grid"))},Object(r.createElement)(m.SelectControl,{label:Object(b.__)("Container Width"),value:a,onChange:function(e){l({width:e})},options:[{label:"Fixed",value:"container"},{label:"Fluid (Full-Width)",value:"container-fluid"}]}),Object(r.createElement)(m.RangeControl,{label:Object(b.__)("Columns"),value:o,onChange:function(e){l({columns:parseInt(e)})},min:1,max:12}),Object(r.createElement)(m.ToggleControl,{label:Object(b.__)("Gutter"),checked:c,onChange:function(e){l({gutter:e})}}),Object(r.createElement)(m.TextControl,{label:Object(b.__)("Additional Row Classes"),value:s,onChange:function(e){l({rowClass:e})}})),Object(r.createElement)(m.PanelBody,{className:"editor-panel-alignment-settings",title:x("alignment",Object(b.__)("Alignment"))},Object(r.createElement)(m.BaseControl,{label:Object(b.__)("Flex Direction")},Object(r.createElement)("div",{style:{overflowX:"auto"}},Object(r.createElement)("table",{style:{width:"100%"}},Object(r.createElement)("tbody",null,Object(r.createElement)("tr",null,ae.map(function(e){return Object(r.createElement)("td",{key:e},Object(r.createElement)(Z,{breakpoint:e,value:t["".concat(e,"Dir")],onChange:function(t){var n={};n["".concat(e,"Dir")]=t,l(n)}}))}),Object(r.createElement)("td",{key:"all"},Object(r.createElement)(Z,{breakpoint:"all",onChange:function(e){l({xsDir:e,smDir:e,mdDir:e,lgDir:e,xlDir:e})}}))))))),Object(r.createElement)(m.BaseControl,{label:Object(b.__)("Justify Content")},Object(r.createElement)("div",{style:{overflowX:"auto"}},Object(r.createElement)("table",{style:{width:"100%"}},Object(r.createElement)("tbody",null,Object(r.createElement)("tr",null,ae.map(function(e){return Object(r.createElement)("td",{key:e},Object(r.createElement)(le,{breakpoint:e,value:t["".concat(e,"Justify")],onChange:function(t){var n={};n["".concat(e,"Justify")]=t,l(n)}}))}),Object(r.createElement)("td",{key:"all"},Object(r.createElement)(le,{breakpoint:"all",onChange:function(e){l({xsJustify:e,smJustify:e,mdJustify:e,lgJustify:e,xlJustify:e})}}))))))),Object(r.createElement)(m.BaseControl,{label:Object(b.__)("Vertical Align")},Object(r.createElement)("div",{style:{overflowX:"auto"}},Object(r.createElement)("table",{style:{width:"100%"}},Object(r.createElement)("tbody",null,Object(r.createElement)("tr",null,ae.map(function(e){return Object(r.createElement)("td",{key:e},Object(r.createElement)(M,{breakpoint:e,value:t["".concat(e,"Align")],onChange:function(t){var n={};n["".concat(e,"Align")]=t,l(n)}}))}),Object(r.createElement)("td",{key:"all"},Object(r.createElement)(M,{breakpoint:"all",onChange:function(e){l({xsAlign:e,smAlign:e,mdAlign:e,lgAlign:e,xlAlign:e})}})))))))),Object(r.createElement)(m.PanelBody,{className:"editor-panel-background-settings",title:x("background",Object(b.__)("Background"))},Object(r.createElement)(m.BaseControl,{label:Object(b.__)("Background Image")},Object(r.createElement)(i.MediaUploadCheck,{fallback:oe},Object(r.createElement)(i.MediaUpload,{title:Object(b.__)("Select Background Image"),onSelect:A,allowedTypes:ne,value:d,render:function(e){var t=e.open;return Object(r.createElement)(r.Fragment,null,!u&&Object(r.createElement)(m.Button,{isDefault:!0,onClick:t},Object(r.createElement)("span",null,Object(b.__)("Select Background Image"))),u&&Object(r.createElement)(r.Fragment,null,Object(r.createElement)(m.Button,{isLink:!0,onClick:t},Object(r.createElement)("img",{src:u,alt:""})),Object(r.createElement)(m.ButtonGroup,null,Object(r.createElement)(m.Button,{isDefault:!0,onClick:A},Object(b.__)("Remove"))," ",Object(r.createElement)(m.Button,{isPrimary:!0,onClick:t},Object(b.__)("Change")))))}}))),u&&Object(r.createElement)(r.Fragment,null,Object(r.createElement)(m.SelectControl,{label:Object(b.__)("Background Position"),value:p,onChange:function(e){l({bgPosition:e})},options:[{label:Object(b.__)("Left Top"),value:"0 0"},{label:Object(b.__)("Left Middle"),value:"0 50%"},{label:Object(b.__)("Left Bottom"),value:"0 100%"},{label:Object(b.__)("Center Top"),value:"50% 0"},{label:Object(b.__)("Center Middle"),value:"50% 50%"},{label:Object(b.__)("Center Bottom"),value:"50% 100%"},{label:Object(b.__)("Right Top"),value:"100% 0"},{label:Object(b.__)("Right Middle"),value:"100% 50%"},{label:Object(b.__)("Right Bottom"),value:"100% 100%"}]}),Object(r.createElement)(m.SelectControl,{label:Object(b.__)("Background Scroll Behavior"),value:g,onChange:function(e){l({bgAttachment:e})},options:[{label:Object(b.__)("Scroll (Default)"),value:"scroll"},{label:Object(b.__)("Fixed (Parallax)"),value:"fixed"}]}))),Object(r.createElement)(m.PanelBody,{className:"editor-panel-color-settings",title:x("color",Object(b.__)("Color"))},Object(r.createElement)(m.ToggleControl,{label:Object(b.__)("Add Text Color?"),checked:E,onChange:function(e){l({addTextColor:e})}}),E&&Object(r.createElement)(m.ColorPicker,{color:B,onChangeComplete:function(e){l({textColor:e})},disableAlpha:!0}),Object(r.createElement)(m.ToggleControl,{label:Object(b.__)("Add Background Color?"),checked:O,onChange:function(e){l({addBgColor:e})}}),O&&Object(r.createElement)(m.ColorPicker,{color:f,onChangeComplete:function(e){l({bgColor:e})}}),Object(r.createElement)(m.ToggleControl,{label:Object(b.__)("Add Mask Color?"),checked:_,onChange:function(e){l({addMaskColor:e})}}),_&&Object(r.createElement)(m.ColorPicker,{color:y,onChangeComplete:function(e){l({maskColor:e})}}))),Object(r.createElement)("div",{className:v(t,"".concat(n," overflow-visible")),style:k(t)},Object(r.createElement)("div",{className:"bootstrap-grid--mask",style:{backgroundColor:h(_?y:null)}}),Object(r.createElement)("div",{className:"bootstrap-grid--column"},Object(r.createElement)("div",{className:C(t)},Object(r.createElement)(i.InnerBlocks,{template:j(o),templateLock:"all",allowedBlocks:ce})))))}),ie=l(9),be=ie.name,se=ie.attributes,ue={title:Object(b.__)("Bootstrap Grid"),icon:"layout",category:"layout",description:Object(b.__)("Create a Twitter Bootstrap grid."),attributes:se,edit:re,save:function(e){var t=e.attributes,l=e.className;return Object(r.createElement)("div",{className:v(t,l),style:k(t)},Object(r.createElement)("div",{className:"bootstrap-grid--mask",style:{backgroundColor:h(t.maskColor)}}),Object(r.createElement)("div",{className:"bootstrap-grid--content"},Object(r.createElement)("div",{className:C(t)},Object(r.createElement)(i.InnerBlocks.Content,null))))}},me=["image"],de=Object(r.createElement)("p",null,Object(b.__)("To edit the background image, you need permission to upload media.")),ge=Object(u.compose)(Object(s.withSelect)(function(e,t){var l=t.clientId,n=(e("core/editor"),e("core/editor"));n.getBlocksByClientId;return{parentColumnsBlockClientId:(0,n.getBlockRootClientId)(l)}}))(function(e){var t=e.attributes,l=e.setAttributes,n=e.className,o=t.bgUrl,a=t.bgId,c=t.bgAttachment,s=t.addBgColor,u=t.bgColor,d=t.addMaskColor,g=t.maskColor,p=t.bgPosition,j=t.addTextColor,f=t.textColor,v=t.textAlign,C=t.ratio,_=t.customX,B=t.customY,A=t.grow,w=t.verticalAlign,T=function(e){if(e&&e.url){var t=e.media_type||e.type;me.indexOf(t)<0||l({bgUrl:e.url,bgId:e.id,bgType:t})}else l({bgUrl:void 0,bgId:void 0})};return Object(r.createElement)(r.Fragment,null,Object(r.createElement)(i.InspectorControls,null,Object(r.createElement)(m.PanelBody,{className:"editor-panel-embed-settings",title:x("embed",Object(b.__)("Embed"))},Object(r.createElement)(m.ToggleControl,{label:Object(b.__)("Container grows with content (beyond ratio)?"),checked:A,onChange:function(e){l({grow:e})}}),Object(r.createElement)(m.SelectControl,{label:Object(b.__)("Ratio"),value:C,onChange:function(e){l({ratio:e})},options:[{label:"21by9",value:"21by9"},{label:"16by9",value:"16by9"},{label:"4by3",value:"4by3"},{label:"1by1",value:"1by1"},{label:Object(b.__)("Custom"),value:"custom"}]}),"custom"==C&&Object(r.createElement)("table",null,Object(r.createElement)("tbody",null,Object(r.createElement)("tr",null,Object(r.createElement)("td",null,Object(r.createElement)(m.TextControl,{value:_,onChange:function(e){l({customX:e})}})),Object(r.createElement)("td",null," by "),Object(r.createElement)("td",null,Object(r.createElement)(m.TextControl,{value:B,onChange:function(e){l({customY:e})}}))))),Object(r.createElement)(m.SelectControl,{label:Object(b.__)("Vertical Align"),value:w,onChange:function(e){l({verticalAlign:e})},options:[{label:"Default",value:""},{label:"Top",value:"top"},{label:"Middle",value:"middle"},{label:"Bottom",value:"bottom"}]})),Object(r.createElement)(m.PanelBody,{className:"editor-panel-background-settings",title:x("background",Object(b.__)("Background"))},Object(r.createElement)(m.BaseControl,{label:Object(b.__)("Background Image")},Object(r.createElement)(i.MediaUploadCheck,{fallback:de},Object(r.createElement)(i.MediaUpload,{title:Object(b.__)("Select Background Image"),onSelect:T,allowedTypes:me,value:a,render:function(e){var t=e.open;return Object(r.createElement)(r.Fragment,null,!o&&Object(r.createElement)(m.Button,{isDefault:!0,onClick:t},Object(r.createElement)("span",null,Object(b.__)("Select Background Image"))),o&&Object(r.createElement)(r.Fragment,null,Object(r.createElement)(m.Button,{isLink:!0,onClick:t},Object(r.createElement)("img",{src:o,alt:""})),Object(r.createElement)(m.ButtonGroup,null,Object(r.createElement)(m.Button,{isDefault:!0,onClick:T},Object(b.__)("Remove"))," ",Object(r.createElement)(m.Button,{isPrimary:!0,onClick:t},Object(b.__)("Change")))))}}))),o&&Object(r.createElement)(r.Fragment,null,Object(r.createElement)(m.SelectControl,{label:Object(b.__)("Background Position"),value:p,onChange:function(e){l({bgPosition:e})},options:[{label:Object(b.__)("Left Top"),value:"0 0"},{label:Object(b.__)("Left Middle"),value:"0 50%"},{label:Object(b.__)("Left Bottom"),value:"0 100%"},{label:Object(b.__)("Center Top"),value:"50% 0"},{label:Object(b.__)("Center Middle"),value:"50% 50%"},{label:Object(b.__)("Center Bottom"),value:"50% 100%"},{label:Object(b.__)("Right Top"),value:"100% 0"},{label:Object(b.__)("Right Middle"),value:"100% 50%"},{label:Object(b.__)("Right Bottom"),value:"100% 100%"}]}),Object(r.createElement)(m.SelectControl,{label:Object(b.__)("Background Scroll Behavior"),value:c,onChange:function(e){l({bgAttachment:e})},options:[{label:Object(b.__)("Scroll (Default)"),value:"scroll"},{label:Object(b.__)("Fixed (Parallax)"),value:"fixed"}]}))),Object(r.createElement)(m.PanelBody,{className:"editor-panel-color-settings",title:x("color",Object(b.__)("Color"))},Object(r.createElement)(m.ToggleControl,{label:Object(b.__)("Add Text Color?"),checked:j,onChange:function(e){l({addTextColor:e})}}),j&&Object(r.createElement)(m.ColorPicker,{color:f,onChangeComplete:function(e){l({textColor:e})},disableAlpha:!0}),Object(r.createElement)(m.ToggleControl,{label:Object(b.__)("Add Background Color?"),checked:s,onChange:function(e){l({addBgColor:e})}}),s&&Object(r.createElement)(m.ColorPicker,{color:u,onChangeComplete:function(e){l({bgColor:e})}}),Object(r.createElement)(m.ToggleControl,{label:Object(b.__)("Add Mask Color?"),checked:d,onChange:function(e){l({addMaskColor:e})}}),d&&Object(r.createElement)(m.ColorPicker,{color:g,onChangeComplete:function(e){l({maskColor:e})}}))),Object(r.createElement)(i.BlockControls,null,Object(r.createElement)(i.AlignmentToolbar,{value:v,onChange:function(e){l({textAlign:e=e===v?"":e})}})),Object(r.createElement)("div",{style:{background:"rgba(0, 0, 0, 0.03)"}},A&&Object(r.createElement)("div",{className:"tallest embed-responsive ".concat(n," ").concat(w?"align-".concat(w):""),style:k(t)},Object(r.createElement)("div",{className:"bootstrap-grid--mask",style:{backgroundColor:h(d?g:null)}}),Object(r.createElement)("div",{className:"tallest-item ".concat(y(t))},E(t)),Object(r.createElement)("div",{className:"tallest-item bootstrap-grid--content ".concat(v?"text-".concat(v):"")},Object(r.createElement)(i.InnerBlocks,{templateLock:!1}))),!A&&Object(r.createElement)("div",{className:y(t,n),style:k(t)},E(t),Object(r.createElement)("div",{className:"embed-responsive-item d-flex ".concat(O(w)," ").concat(v?"text-".concat(v):""),style:{backgroundColor:h(d?g:null)}},Object(r.createElement)("div",{style:{width:"100%"}},Object(r.createElement)(i.InnerBlocks,{templateLock:!1}))))))}),pe=l(13),je=l(10),Oe=je.name,fe=je.attributes,ve={title:Object(b.__)("Bootstrap Embed"),icon:"editor-contract",category:"embed",description:Object(b.__)("Create responsive video or slideshow embeds based on the width of the parent by creating an intrinsic ratio that scales on any device."),attributes:fe,edit:ge,save:function(e){var t=e.attributes,l=e.className,n=t.addMaskColor,o=t.maskColor,a=t.grow,c=t.textAlign,b=t.verticalAlign;return Object(r.createElement)(pe.Fragment,null,a&&Object(r.createElement)("div",{className:"tallest embed-responsive ".concat(l," ").concat(b?"align-".concat(b):""),style:k(t)},Object(r.createElement)("div",{className:"bootstrap-grid--mask",style:{backgroundColor:h(n?o:null)}}),Object(r.createElement)("div",{className:"tallest-item ".concat(y(t))},E(t)),Object(r.createElement)("div",{className:"tallest-item bootstrap-grid--content ".concat(c?"text-".concat(c):"")},Object(r.createElement)(i.InnerBlocks.Content,null))),!a&&Object(r.createElement)("div",{className:y(t,l),style:k(t)},E(t),Object(r.createElement)("div",{className:"embed-responsive-item d-flex ".concat(O(b)," ").concat(c?"text-".concat(c):""),style:{backgroundColor:h(n?o:null)}},Object(r.createElement)("div",{style:{width:"100%"}},Object(r.createElement)(i.InnerBlocks.Content,null)))))}};[n,o,a].forEach(function(e){if(e){e.metadata;var t=e.settings,l=e.name;Object(c.registerBlockType)(l,t)}})}]);