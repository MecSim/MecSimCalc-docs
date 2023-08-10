"use strict";(self.webpackChunkmec_sim_calc_docs=self.webpackChunkmec_sim_calc_docs||[]).push([[2125],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,f=u["".concat(l,".").concat(d)]||u[d]||m[d]||o;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[u]="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3191:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const o={id:"home",slug:"/",sidebar_position:0},i="Welcome",c={unversionedId:"home",id:"home",title:"Welcome",description:"Documentation for MecSimCalc",source:"@site/docs/home.md",sourceDirName:".",slug:"/",permalink:"/",draft:!1,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"home",slug:"/",sidebar_position:0},sidebar:"tutorialSidebar",next:{title:"Quick Overview",permalink:"/getting-started/quick-overview"}},l={},p=[{value:"Documentation for MecSimCalc",id:"documentation-for-mecsimcalc",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"Blog",id:"blog",level:2},{value:"How apps work",id:"how-apps-work",level:2}],s={toc:p},u="wrapper";function m(e){let{components:t,...o}=e;return(0,a.kt)(u,(0,r.Z)({},s,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"welcome"},"Welcome"),(0,a.kt)("h2",{id:"documentation-for-mecsimcalc"},"Documentation for ",(0,a.kt)("a",{parentName:"h2",href:"https://mecsimcalc.com/"},"MecSimCalc")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"The simplest way to build and share computational tools on the web. Create and share your Python apps in minutes using our intuitive and simple platform.")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://docs.mecsimcalc.com/"},"docs.mecsimcalc.com")," contains ",(0,a.kt)("em",{parentName:"p"},"detailed")," documentation on how to use ",(0,a.kt)("a",{parentName:"p",href:"https://mecsimcalc.com/"},"mecsimcalc.com"),".\nThese pages contain a rich collection of examples with images and code."),(0,a.kt)("h2",{id:"getting-started"},"Getting Started"),(0,a.kt)("p",null,"Get started with your first app within minutes by following our ",(0,a.kt)("a",{parentName:"p",href:"/getting-started/quick-overview"},"step-by-step guide"),". \ud83d\ude0a"),(0,a.kt)("h2",{id:"blog"},"Blog"),(0,a.kt)("p",null,"Check out how other users are using MecSimCalc and for curated lists of apps on our ",(0,a.kt)("a",{parentName:"p",href:"/blog"},"blog"),"! \ud83d\ude0d"),(0,a.kt)("h2",{id:"how-apps-work"},"How apps work"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Input"),": the value for ",(0,a.kt)("inlineCode",{parentName:"li"},"input_0")," is inputted by the user."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Code"),": the user input is accessed in the code using ",(0,a.kt)("inlineCode",{parentName:"li"},"inputs['input_0']"),". Calculations are executed using the popular Python language, and computed outputs are returned."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Output"),": the three outputs returned from ",(0,a.kt)("em",{parentName:"li"},"Code")," are embedded in rich text using ",(0,a.kt)("inlineCode",{parentName:"li"},"{{outputs.Metre}}"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"{{outputs.Feet}}"),", and ",(0,a.kt)("inlineCode",{parentName:"li"},"{{outputs.Inches}}"),".")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"This diagram is based on the ",(0,a.kt)("a",{parentName:"em",href:"https://www.mecsimcalc.com/app/4022206/distance_converter"},"distance converter")," app.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"img alt",src:n(4309).Z,width:"1299",height:"847"})),(0,a.kt)("p",null,"Check out our ",(0,a.kt)("a",{parentName:"p",href:"getting-started/quick-overview"},"quick guide")," to learn more."),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Please send any suggestions, questions, or inquiries to ",(0,a.kt)("a",{parentName:"em",href:"mailto:info@mecsimcalc.com"},"info@mecsimcalc.com"))))}m.isMDXComponent=!0},4309:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/app_flow-a078b7b99fa11fe4029a3fcbe8562f62.png"}}]);