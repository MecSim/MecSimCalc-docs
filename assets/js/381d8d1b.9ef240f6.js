"use strict";(self.webpackChunkmec_sim_calc_docs=self.webpackChunkmec_sim_calc_docs||[]).push([[77],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return d}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function A(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,l=A(e,["components","mdxType","originalType","parentName"]),c=s(n),d=r,f=c["".concat(p,".").concat(d)]||c[d]||u[d]||i;return n?a.createElement(f,o(o({ref:t},l),{},{components:n})):a.createElement(f,o({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=c;var A={};for(var p in t)hasOwnProperty.call(t,p)&&(A[p]=t[p]);A.originalType=e,A.mdxType="string"==typeof e?e:r,o[1]=A;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},6259:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return A},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return l},default:function(){return c}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=["components"],A={sidebar_label:"Conditionals",sidebar_position:3},p="Conditionals",s={unversionedId:"Output/Conditionals",id:"Output/Conditionals",title:"Conditionals",description:"MecsimCalc platform is built upon Jinja; a full-featured template engine for python. Jinja operations, including if and for statements, can be performed within curly brackets {}. Output variables and their operations are inserted using two sets of curly brackets {{}} while conditionals should be typed within {% %}. Conditionals can be typed in the editor or inserted using the icons.",source:"@site/docs/Output/Conditionals.md",sourceDirName:"Output",slug:"/Output/Conditionals",permalink:"/Output/Conditionals",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_label:"Conditionals",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Latex",permalink:"/Output/Latex"},next:{title:"Overview",permalink:"/Objects/Overview"}},l=[{value:"If Statement",id:"if-statement",children:[{value:"Example",id:"example",children:[],level:3}],level:2},{value:"For Statement",id:"for-statement",children:[{value:"Example",id:"example-1",children:[],level:3}],level:2}],u={toc:l};function c(e){var t=e.components,A=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},u,A,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"conditionals"},"Conditionals"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"MecsimCalc")," platform is built upon ",(0,i.kt)("a",{parentName:"p",href:"https://jinja.palletsprojects.com/en/3.1.x/"},(0,i.kt)("strong",{parentName:"a"},"Jinja")),"; a full-featured template engine for python. ",(0,i.kt)("a",{parentName:"p",href:"https://palletsprojects.com/p/jinja/"},(0,i.kt)("strong",{parentName:"a"},"Jinja"))," operations, including ",(0,i.kt)("inlineCode",{parentName:"p"},"if")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"for")," statements, can be performed within curly brackets ",(0,i.kt)("inlineCode",{parentName:"p"},"{}"),". Output variables and their operations are inserted using two sets of curly brackets ",(0,i.kt)("inlineCode",{parentName:"p"},"{{}}")," while conditionals should be typed within ",(0,i.kt)("inlineCode",{parentName:"p"},"{% %}"),". Conditionals can be typed in the editor or inserted using the icons."),(0,i.kt)("h2",{id:"if-statement"},"If Statement"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"if")," statement in the following form can be used in the output editor:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"{% if test1 %}\n#output if test1 is true\n{% elif test2 %}\n#output if test2 is true\n{% else test2 %}\n#output if all previous tests  are false\n{%  endif %}\n")),(0,i.kt)("h3",{id:"example"},"Example"),(0,i.kt)("p",null,"In this published ",(0,i.kt)("a",{parentName:"p",href:"https://mecsimcalc.com/app/9164993/pressure_design_of_pipeline_according_to_csa_z_662"},(0,i.kt)("em",{parentName:"a"},(0,i.kt)("strong",{parentName:"em"},"app"))),", the CSA Z662.19 design equations are used to calculate the design pressure of a pipe. The ",(0,i.kt)("em",{parentName:"p"},(0,i.kt)("strong",{parentName:"em"},"app"))," then compares the design pressure with the operating pressure and the ",(0,i.kt)("inlineCode",{parentName:"p"},"if")," condition is used in the output to indicate whether the pipe is safe or unsafe."),(0,i.kt)("p",null,"There are seven inputs used. Four are ",(0,i.kt)("a",{parentName:"p",href:"/Inputs/Input-Types"},(0,i.kt)("strong",{parentName:"a"},"numerical inputs")),": the Diameter ",(0,i.kt)("inlineCode",{parentName:"p"},"d"),", the Wall Thickness ",(0,i.kt)("inlineCode",{parentName:"p"},"t"),", the Grade ",(0,i.kt)("inlineCode",{parentName:"p"},"sy"),", and the Operating Pressure ",(0,i.kt)("inlineCode",{parentName:"p"},"p")," while three are ",(0,i.kt)("a",{parentName:"p",href:"/Inputs/Input-Types"},(0,i.kt)("strong",{parentName:"a"},"Single Select")),": the Location Factor ",(0,i.kt)("inlineCode",{parentName:"p"},"l"),", the Temperature Factor ",(0,i.kt)("inlineCode",{parentName:"p"},"tf"),", and the Joint Factor ",(0,i.kt)("inlineCode",{parentName:"p"},"j"),". The layout of the inputs page is shown in the figure below."),(0,i.kt)("div",{style:{textAlign:"center"}},(0,i.kt)("p",null,(0,i.kt)("img",{alt:"img alt",src:n(7761).Z}))),(0,i.kt)("p",null,"The code for this app is given below"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'def main(inputs):\n    d=inputs[\'d\']\n    t=inputs[\'t\']\n    sy=inputs[\'sy\']\n    p=inputs[\'p\']\n    lf=inputs[\'l\']\n    ldic={"1.0":1.0,"0.9":0.90,"0.8":0.80, "0.75":0.75, "0.7":0.7, "0.625":0.625, "0.55":0.55, "0.5":0.5 }\n    ln=ldic[lf]\n    jf=inputs[\'j\']\n    jdic={"Seamless (1.00)":1.0, "Electric Welded (1.00)":1.0, "Submerged arc welded (1.00)":1.0, "Continuous welded (0.60)":0.6}\n    jn=jdic[jf]\n    tf=inputs[\'tf\']\n    tdic={"Up to 120 (1.00)": 1.0, "150 (0.97)":0.97, "180 (0.93)":0.93, "200 (0.91)":0.91, "230 (0.87)":0.87}\n    tn=tdic[tf]\n    dp=2*sy*t/d*0.8*ln*jn*tn\n    dp=round(dp,2)\n    return {"Operating Pressure": p, "Design Pressure":dp}\n')),(0,i.kt)("p",null,"Notice how the ",(0,i.kt)("strong",{parentName:"p"},"Single Select")," variables which are strings are treated differently from the ",(0,i.kt)("strong",{parentName:"p"},"Numerical Inputs"),". A dictionary is used to find the factors corresponding to the options selected by the ",(0,i.kt)("em",{parentName:"p"},(0,i.kt)("strong",{parentName:"em"},"user")),". The code returns a dictionary with two keys: ",(0,i.kt)("inlineCode",{parentName:"p"},"Operating Pressure")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Design Pressure"),". The ",(0,i.kt)("inlineCode",{parentName:"p"},"if")," condition compares the two variables with each other to display a different message based on this comparison. The following is the text in the ",(0,i.kt)("strong",{parentName:"p"},"Output")," editor (Notice that the output variables were used in the ",(0,i.kt)("inlineCode",{parentName:"p"},"if")," statement without the curly brackets):"),(0,i.kt)("div",{style:{textAlign:"center"}},(0,i.kt)("p",null,(0,i.kt)("img",{alt:"img alt",src:n(9455).Z}))),(0,i.kt)("h2",{id:"for-statement"},"For Statement"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"for")," statement in the following form can be used in the output editor:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"{% for i in foo %}\n#output for every i\n{% endfor %}\n")),(0,i.kt)("h3",{id:"example-1"},"Example"),(0,i.kt)("p",null,"In this published ",(0,i.kt)("a",{parentName:"p",href:"https://mecsimcalc.com/app/1535961/using_for_loop"},(0,i.kt)("em",{parentName:"a"},(0,i.kt)("strong",{parentName:"em"},"app"))),", the user inputs an integer value. The ",(0,i.kt)("em",{parentName:"p"},(0,i.kt)("strong",{parentName:"em"},"app"))," then outputs a table of all the numbers up to the integer value along with their squares."),(0,i.kt)("p",null,"The ",(0,i.kt)("em",{parentName:"p"},(0,i.kt)("strong",{parentName:"em"},"user"))," is required to input an integer value ",(0,i.kt)("inlineCode",{parentName:"p"},"a"),"."),(0,i.kt)("div",{style:{textAlign:"center"}},(0,i.kt)("p",null,(0,i.kt)("img",{alt:"img alt",src:n(1226).Z}))),(0,i.kt)("p",null,"The code simply outputs a dictionary with one key ",(0,i.kt)("inlineCode",{parentName:"p"},"Count"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"def main(inputs):\n    a = inputs['a']\n    return {\"Count\": a}\n")),(0,i.kt)("p",null,"In the output editor, a condition along with the HTML table tags are used to generate a table based on the value of ",(0,i.kt)("inlineCode",{parentName:"p"},"Count"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"<table>\n<th>Number</th><th>It's square</th>\n\n{% for i in range(outputs.Count) %}\n<tr>\n<td>\n{{i+1}}\n</td>\n<td>\n{{(i+1)**2}}\n</td>\n</tr>\n{% endfor %}\n\n</table>\n")),(0,i.kt)("p",null,"Notice how the python function ",(0,i.kt)("inlineCode",{parentName:"p"},"range")," was used in the ",(0,i.kt)("inlineCode",{parentName:"p"},"for")," statement and that inside the ",(0,i.kt)("inlineCode",{parentName:"p"},"for")," statement, the output variable ",(0,i.kt)("inlineCode",{parentName:"p"},"outputs.Count")," was used without any curly brackets. Notice as well how arithmetic operations (adding of the value of 1 and squaring the numbers) are done within two sets of curly brackets."))}c.isMDXComponent=!0},1226:function(e,t){t.Z="data:image/png;base64,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"},7761:function(e,t,n){t.Z=n.p+"assets/images/examplepipe-0ef35b839c0798af07c2f25b64c75070.png"},9455:function(e,t,n){t.Z=n.p+"assets/images/examplepipeoutput-ba354a7165cdf14082b6bf8070aa873d.png"}}]);