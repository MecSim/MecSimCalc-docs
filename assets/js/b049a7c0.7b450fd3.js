"use strict";(self.webpackChunkmec_sim_calc_docs=self.webpackChunkmec_sim_calc_docs||[]).push([[2847],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>g});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},p=Object.keys(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,p=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),c=l(n),d=a,g=c["".concat(u,".").concat(d)]||c[d]||m[d]||p;return n?r.createElement(g,o(o({ref:t},s),{},{components:n})):r.createElement(g,o({ref:t},s))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=n.length,o=new Array(p);o[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[c]="string"==typeof e?e:a,o[1]=i;for(var l=2;l<p;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5646:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>m,frontMatter:()=>p,metadata:()=>i,toc:()=>l});var r=n(7462),a=(n(7294),n(3905));const p={sidebar_label:"Input Group",sidebar_position:2},o="Input Group",i={unversionedId:"inputs/input-group",id:"inputs/input-group",title:"Input Group",description:"In order to visually organize the inputs, MecSimCalc platform allows the **developer** to visually group inputs into either an Input Group or a Table Group. An Input Group can be created in the Inputs step by clicking on Add Input Group.",source:"@site/docs/inputs/input-group.md",sourceDirName:"inputs",slug:"/inputs/input-group",permalink:"/inputs/input-group",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_label:"Input Group",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/inputs/overview"},next:{title:"Table Group",permalink:"/inputs/table-group"}},u={},l=[{value:"Input Group Layout",id:"input-group-layout",level:2}],s={toc:l},c="wrapper";function m(e){let{components:t,...p}=e;return(0,a.kt)(c,(0,r.Z)({},s,p,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"input-group"},"Input Group"),(0,a.kt)("p",null,"In order to visually organize the inputs, ",(0,a.kt)("strong",{parentName:"p"},"MecSimCalc")," platform allows the ",(0,a.kt)("em",{parentName:"p"},(0,a.kt)("strong",{parentName:"em"},"developer"))," to visually group inputs into either an ",(0,a.kt)("strong",{parentName:"p"},"Input Group")," or a ",(0,a.kt)("a",{parentName:"p",href:"table-group"},(0,a.kt)("strong",{parentName:"a"},"Table Group")),". An ",(0,a.kt)("strong",{parentName:"p"},"Input Group")," can be created in the ",(0,a.kt)("strong",{parentName:"p"},"Inputs")," step by clicking on ",(0,a.kt)("strong",{parentName:"p"},"Add Input Group"),"."),(0,a.kt)("div",{style:{textAlign:"center"}},(0,a.kt)("p",null,(0,a.kt)("img",{alt:"img alt",src:n(7853).Z,width:"244",height:"616"}))),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"The different input types appear in the menu only if an ",(0,a.kt)("strong",{parentName:"p"},"Input Group")," or a ",(0,a.kt)("strong",{parentName:"p"},"Table Group")," has already been created.")),(0,a.kt)("p",null,"The ",(0,a.kt)("em",{parentName:"p"},(0,a.kt)("strong",{parentName:"em"},"developer"))," can create as many new ",(0,a.kt)("strong",{parentName:"p"},"Input Groups")," as needed, which are arranged vertically on top of each other. Each ",(0,a.kt)("strong",{parentName:"p"},"Input Group")," can be renamed, deleted, or dragged to change its vertical position relative to the other ",(0,a.kt)("strong",{parentName:"p"},"Input Groups"),". For example, the image below shows two ",(0,a.kt)("strong",{parentName:"p"},"Input Groups"),' named "Input Group 1" and `"Input Group 2".'),(0,a.kt)("div",{style:{textAlign:"center"}},(0,a.kt)("p",null,(0,a.kt)("img",{alt:"img alt",src:n(6889).Z,width:"937",height:"474"}))),(0,a.kt)("h2",{id:"input-group-layout"},"Input Group Layout"),(0,a.kt)("p",null,"In an ",(0,a.kt)("strong",{parentName:"p"},"Input Group"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("em",{parentName:"li"},(0,a.kt)("strong",{parentName:"em"},"developer"))," can add as many inputs as needed.."),(0,a.kt)("li",{parentName:"ul"},"The inputs can be resized and moved within the input group using the mouse."),(0,a.kt)("li",{parentName:"ul"},"A maximum of 10 inputs can appear on the same row."),(0,a.kt)("li",{parentName:"ul"},"There is no restriction on the number of rows to be used.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"The height of the ",(0,a.kt)("strong",{parentName:"li"},"Input Group")," will automatically adjust as more inputs are added, removed, or dragged.")))),(0,a.kt)("p",null,"As an example, the image below shows an input group with 5 different inputs (two numerical inputs, two text inputs, and one single select input)."),(0,a.kt)("div",{style:{textAlign:"center"}},(0,a.kt)("p",null,(0,a.kt)("img",{alt:"img alt",src:n(1950).Z,width:"866",height:"357"}))))}m.isMDXComponent=!0},7853:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/add_input_group-2a582a0b3cf81bbcb1c8faf2fce7d9ac.png"},1950:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/input_group-b8d47cf3d1ddb63abd99de4fefda6a44.png"},6889:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/input_group_actions-880f4ecd83ade64efe97ef66fb7e442a.png"}}]);