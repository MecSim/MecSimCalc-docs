"use strict";(self.webpackChunkmec_sim_calc_docs=self.webpackChunkmec_sim_calc_docs||[]).push([[2847],{3905:(t,e,n)=>{n.d(e,{Zo:()=>s,kt:()=>g});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function p(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?p(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},p=Object.keys(t);for(r=0;r<p.length;r++)n=p[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(t);for(r=0;r<p.length;r++)n=p[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var u=r.createContext({}),l=function(t){var e=r.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},s=function(t){var e=l(t.components);return r.createElement(u.Provider,{value:e},t.children)},c="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,p=t.originalType,u=t.parentName,s=i(t,["components","mdxType","originalType","parentName"]),c=l(n),d=a,g=c["".concat(u,".").concat(d)]||c[d]||m[d]||p;return n?r.createElement(g,o(o({ref:e},s),{},{components:n})):r.createElement(g,o({ref:e},s))}));function g(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var p=n.length,o=new Array(p);o[0]=d;var i={};for(var u in e)hasOwnProperty.call(e,u)&&(i[u]=e[u]);i.originalType=t,i[c]="string"==typeof t?t:a,o[1]=i;for(var l=2;l<p;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5646:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>u,contentTitle:()=>o,default:()=>m,frontMatter:()=>p,metadata:()=>i,toc:()=>l});var r=n(7462),a=(n(7294),n(3905));const p={sidebar_label:"Input Group",sidebar_position:2},o="Input Group",i={unversionedId:"inputs/input-group",id:"inputs/input-group",title:"Input Group",description:"In order to visually organize the inputs, MecSimCalc platform allows the **developer** to visually group inputs into either an Input Group or a Table Group. An Input Group can be created in the Inputs step by clicking on Add Input Group.",source:"@site/docs/inputs/input-group.md",sourceDirName:"inputs",slug:"/inputs/input-group",permalink:"/inputs/input-group",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_label:"Input Group",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/inputs/overview"},next:{title:"Table Group",permalink:"/inputs/table-group"}},u={},l=[{value:"Input Group Layout",id:"input-group-layout",level:2},{value:"Conditional Input Group",id:"conditional-input-group",level:3}],s={toc:l},c="wrapper";function m(t){let{components:e,...p}=t;return(0,a.kt)(c,(0,r.Z)({},s,p,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"input-group"},"Input Group"),(0,a.kt)("p",null,"In order to visually organize the inputs, ",(0,a.kt)("strong",{parentName:"p"},"MecSimCalc")," platform allows the ",(0,a.kt)("em",{parentName:"p"},(0,a.kt)("strong",{parentName:"em"},"developer"))," to visually group inputs into either an ",(0,a.kt)("strong",{parentName:"p"},"Input Group")," or a ",(0,a.kt)("a",{parentName:"p",href:"table-group"},(0,a.kt)("strong",{parentName:"a"},"Table Group")),". An ",(0,a.kt)("strong",{parentName:"p"},"Input Group")," can be created in the ",(0,a.kt)("strong",{parentName:"p"},"Inputs")," step by clicking on ",(0,a.kt)("strong",{parentName:"p"},"Add Input Group"),"."),(0,a.kt)("div",{style:{textAlign:"center"}},(0,a.kt)("p",null,(0,a.kt)("img",{alt:"img alt",src:n(7853).Z,width:"244",height:"616"}))),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"The different input types appear in the menu only if an ",(0,a.kt)("strong",{parentName:"p"},"Input Group")," or a ",(0,a.kt)("strong",{parentName:"p"},"Table Group")," has already been created.")),(0,a.kt)("p",null,"The ",(0,a.kt)("em",{parentName:"p"},(0,a.kt)("strong",{parentName:"em"},"developer"))," can create as many new ",(0,a.kt)("strong",{parentName:"p"},"Input Groups")," as needed, which are arranged vertically one above the other. Each ",(0,a.kt)("strong",{parentName:"p"},"Input Group")," can be renamed, deleted, or dragged to change its vertical position relative to the other ",(0,a.kt)("strong",{parentName:"p"},"Input Groups"),". For example, the image below shows two ",(0,a.kt)("strong",{parentName:"p"},"Input Groups"),' named "Input Group 1" and `"Input Group 2".'),(0,a.kt)("div",{style:{textAlign:"center"}},(0,a.kt)("p",null,(0,a.kt)("img",{alt:"img alt",src:n(6889).Z,width:"937",height:"474"}))),(0,a.kt)("h2",{id:"input-group-layout"},"Input Group Layout"),(0,a.kt)("p",null,"In an ",(0,a.kt)("strong",{parentName:"p"},"Input Group"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("em",{parentName:"li"},(0,a.kt)("strong",{parentName:"em"},"developer"))," can add as many inputs as needed.."),(0,a.kt)("li",{parentName:"ul"},"The inputs can be resized and moved within the input group using the mouse."),(0,a.kt)("li",{parentName:"ul"},"A maximum of 10 inputs can appear on the same row."),(0,a.kt)("li",{parentName:"ul"},"There is no restriction on the number of rows to be used."),(0,a.kt)("li",{parentName:"ul"},"The height of the ",(0,a.kt)("strong",{parentName:"li"},"Input Group")," will automatically adjust as more inputs are added, removed, or dragged.")),(0,a.kt)("p",null,"As an example, the image below shows an input group with 5 different inputs (two numerical inputs, two text inputs, and one single select input)."),(0,a.kt)("div",{style:{textAlign:"center"}},(0,a.kt)("p",null,(0,a.kt)("img",{alt:"img alt",src:n(1950).Z,width:"866",height:"357"}))),(0,a.kt)("h3",{id:"conditional-input-group"},"Conditional Input Group"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\ud83c\udfc6 This is a ",(0,a.kt)("a",{parentName:"th",href:"https://mecsimcalc.com/pricing"},"premium")," feature")))),(0,a.kt)("p",null,"Click the \u270f\ufe0f icon near the top right of an input group and the ",(0,a.kt)("strong",{parentName:"p"},"Edit Input Group")," popup will appear.",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("strong",{parentName:"p"},"Conditional Input Group")," is similar to the ",(0,a.kt)("a",{parentName:"p",href:"/inputs/conditional-input"},"Conditional Input")," feature, but instead effects the entire ",(0,a.kt)("strong",{parentName:"p"},"Input Group"),"."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"The conditions for the ",(0,a.kt)("strong",{parentName:"p"},"Input Group")," will effect the entire section (including all the inputs within it)")),(0,a.kt)("div",{style:{textAlign:"center"}},(0,a.kt)("p",null,(0,a.kt)("img",{alt:"img alt",src:n(6052).Z,width:"604",height:"545"}))),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"Don't forget to click on ",(0,a.kt)("strong",{parentName:"p"},"APPLY")," after editing the properties of the ",(0,a.kt)("strong",{parentName:"p"},"Input Group"))),(0,a.kt)("p",null,"The following embedded app demonstrates the ",(0,a.kt)("strong",{parentName:"p"},"Conditional Input Group")," feature!\nUse the ",(0,a.kt)("a",{parentName:"p",href:"https://mecsimcalc.com/create"},"Conditional Input Group template")," (under ",(0,a.kt)("strong",{parentName:"p"},"Advanced"),") to start creating a similar app!\nDepending on the shape you pick, a different ",(0,a.kt)("strong",{parentName:"p"},"Input Group")," is shown!"),(0,a.kt)("div",{style:{width:"100%",height:"900px",overflow:"hidden"}},(0,a.kt)("iframe",{src:"https://mecsimcalc.com/app/8348786/premium_conditional_input_group",width:"100%",height:"100%",title:"MecSimCalc",style:{position:"relative",left:"-45px",top:"-48px"},frameBorder:"0"})))}m.isMDXComponent=!0},7853:(t,e,n)=>{n.d(e,{Z:()=>r});const r=n.p+"assets/images/add_input_group-2a582a0b3cf81bbcb1c8faf2fce7d9ac.png"},6052:(t,e,n)=>{n.d(e,{Z:()=>r});const r=n.p+"assets/images/edit_input_group_dialog-53320151bc1603bcf0a0097f8fddbd0a.png"},1950:(t,e,n)=>{n.d(e,{Z:()=>r});const r=n.p+"assets/images/input_group-b8d47cf3d1ddb63abd99de4fefda6a44.png"},6889:(t,e,n)=>{n.d(e,{Z:()=>r});const r=n.p+"assets/images/input_group_actions-880f4ecd83ade64efe97ef66fb7e442a.png"}}]);