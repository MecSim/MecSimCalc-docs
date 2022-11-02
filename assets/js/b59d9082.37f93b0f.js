"use strict";(self.webpackChunkmec_sim_calc_docs=self.webpackChunkmec_sim_calc_docs||[]).push([[2457],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,h=m["".concat(l,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(h,i(i({ref:t},c),{},{components:n})):r.createElement(h,i({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9003:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const o={slug:"JohnYu-apps2",title:"Johns Yu's Apps 2",authors:["jyu","dtrinh"],tags:["MecSimCalc","Engineering","Math","Linear Algebra"]},i="John Yu Apps (August 19, 2022)",s={permalink:"/blog/JohnYu-apps2",source:"@site/blog/2022-08-22-John-apps2.md",title:"Johns Yu's Apps 2",description:"The following blogposts were written by John Yu for apps he had created on MecSimCalc. John Yu was a student researcher working with MecSimCalc for 8 months. We will miss you John!",date:"2022-08-22T00:00:00.000Z",formattedDate:"August 22, 2022",tags:[{label:"MecSimCalc",permalink:"/blog/tags/mec-sim-calc"},{label:"Engineering",permalink:"/blog/tags/engineering"},{label:"Math",permalink:"/blog/tags/math"},{label:"Linear Algebra",permalink:"/blog/tags/linear-algebra"}],readingTime:1.54,hasTruncateMarker:!1,authors:[{name:"John Yu",title:"University Researcher",key:"jyu"},{name:"Daren Trinh",title:"MecSimCalc COO",url:"https://www.linkedin.com/in/daren-trinh-3816b0187/",key:"dtrinh"}],frontMatter:{slug:"JohnYu-apps2",title:"Johns Yu's Apps 2",authors:["jyu","dtrinh"],tags:["MecSimCalc","Engineering","Math","Linear Algebra"]},prevItem:{title:"MecSimCalc Build-A-Thon (October 8th - October 15th, 2022) Winners",permalink:"/blog/Comp07092022-Winners"},nextItem:{title:"Vivid Hacks v1.5 MecSimCalc Workshop",permalink:"/blog/Vivid-Hacks-1.5-MecSimCalc-Workshop"}},l={authorsImageUrls:[void 0,void 0]},p=[{value:"<strong>Algebraic Operation on Complex Numbers</strong>",id:"algebraic-operation-on-complex-numbers",level:2},{value:"<strong><em>About the app</em></strong>",id:"about-the-app",level:3},{value:"<strong>Understanding Vector Fields</strong>",id:"understanding-vector-fields",level:2},{value:"<strong><em>About the app</em></strong>",id:"about-the-app-1",level:3}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The following blogposts were written by John Yu for apps he had created on MecSimCalc. John Yu was a student researcher working with MecSimCalc for 8 months. We will miss you John!"),(0,a.kt)("h2",{id:"algebraic-operation-on-complex-numbers"},(0,a.kt)("strong",{parentName:"h2"},"Algebraic Operation on Complex Numbers")),(0,a.kt)("p",null,"This blog post is dedicated to the ",(0,a.kt)("a",{parentName:"p",href:"https://mecsimcalc.com/app/3941579/algebraic_operations_on_complex_numbers"},"Algebraic Operation on Complex Numbers")," app created by John Yu."),(0,a.kt)("h3",{id:"about-the-app"},(0,a.kt)("strong",{parentName:"h3"},(0,a.kt)("em",{parentName:"strong"},"About the app"))),(0,a.kt)("p",null,"The Algebraic Operation on Complex Numbers app is intended for students taking a linear\nalgebra course. This app helps students better grasp how operations are performed with\ncomplex numbers. The app lets you perform 4 types of operations: addition, subtraction,\nmultiplication, and division. Addition and subtraction using complex numbers is best performed\nusing vectors and the app walks users through the steps using visual aids. Multiplication and\ndivision using complex numbers is best performed using euler form and the app provides\nexcellent visual aids to assist students in learning the step-by-step process. Learning how to\nperform operations on complex numbers is very important for any engineering student.\nComplex numbers have many practical applications particularly in electrical and computer\nengineering where these skills will be invaluable. Students who use this app will find themselves\nbetter prepared for their future engineering courses."),(0,a.kt)("h2",{id:"understanding-vector-fields"},(0,a.kt)("strong",{parentName:"h2"},"Understanding Vector Fields")),(0,a.kt)("p",null,"This blog post is dedicated to the ",(0,a.kt)("a",{parentName:"p",href:"https://mecsimcalc.com/app/9890961/understanding_vector_fields"},"Understanding Vector Fields")," app created by John Yu."),(0,a.kt)("h3",{id:"about-the-app-1"},(0,a.kt)("strong",{parentName:"h3"},(0,a.kt)("em",{parentName:"strong"},"About the app"))),(0,a.kt)("p",null,"The Understanding Vector Fields app lets you visually generate a vector field. The app takes in\nan equation representing your vector field and plots each vector on a graph. It is useful in a\nvariety of applications. Vector calculus is a very important skill and many engineering students\ntake a calculus class dedicated to this subject. You can plot simple equations like the flow of a\nriver with the equation . You can plot more complicated vector fields like a magnetic field using\nthe equation ."))}u.isMDXComponent=!0}}]);