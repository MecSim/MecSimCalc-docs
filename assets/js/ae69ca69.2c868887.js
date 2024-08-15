"use strict";(self.webpackChunkmec_sim_calc_docs=self.webpackChunkmec_sim_calc_docs||[]).push([[6049],{4877:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>a,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var i=n(5893),s=n(1151);const l={sidebar_label:"Overview",sidebar_position:1},r="Overview",o={id:"inputs/overview",title:"Overview",description:"The Inputs step enables the developer**_ to use a variety of different types of user_ inputs that you would commonly find on a webpage. The values of these user inputs will become available as Python variables in the main function when writing the Code step.",source:"@site/docs/inputs/overview.md",sourceDirName:"inputs",slug:"/inputs/overview",permalink:"/inputs/overview",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"Overview",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Example 3",permalink:"/getting-started/example-3"},next:{title:"Input Group",permalink:"/inputs/input-group"}},d={},c=[{value:"Input actions",id:"input-actions",level:2},{value:"Input group vs. Table group",id:"input-group-vs-table-group",level:2},{value:"Input types",id:"input-types",level:2}];function h(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"overview",children:"Overview"})}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.strong,{children:"Inputs"})," step enables the ",(0,i.jsx)(t.em,{children:(0,i.jsx)(t.strong,{children:"developer"})})," to use a variety of different types of ",(0,i.jsx)(t.em,{children:(0,i.jsx)(t.strong,{children:"user"})})," inputs that you would commonly find on a webpage. The values of these user inputs will become available as Python variables in the ",(0,i.jsx)(t.code,{children:"main"})," function when writing the ",(0,i.jsx)(t.strong,{children:"Code"})," step."]}),"\n",(0,i.jsxs)(t.p,{children:["Any combination of inputs can be arranged within either an ",(0,i.jsx)(t.strong,{children:"Input Group"})," or a ",(0,i.jsx)(t.strong,{children:"Table Group"}),", which the ",(0,i.jsx)(t.em,{children:(0,i.jsx)(t.strong,{children:"developer"})})," has to create before adding inputs. An input cell can be resized and moved within an ",(0,i.jsx)(t.strong,{children:"Input Group"})," box, which allows a maximum of 10 inputs on the same row. A single input can occupy the whole or part of the ",(0,i.jsx)(t.strong,{children:"Input Group"})," width."]}),"\n",(0,i.jsx)(t.h2,{id:"input-actions",children:"Input actions"}),"\n",(0,i.jsx)(t.p,{children:"Hover over each input to show the following actions:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Moving: click and drag the six dots on the far left to move the input."}),"\n",(0,i.jsx)(t.li,{children:"Re-sizing: click and drag the bottom-right corner to re-size the input."}),"\n",(0,i.jsxs)(t.li,{children:["Edit settings: click on the ",(0,i.jsx)(t.img,{alt:"img alt",src:n(2479).Z+"",width:"25",height:"26"})," button to edit input settings, such as its default value, label, and variable name."]}),"\n",(0,i.jsxs)(t.li,{children:["Delete/duplicate: click the three dots on the far right to open the overflow menu with options to delete or duplicate the input.","\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"When an input is duplicated, the duplicate copy maintains all the settings of the original copy except for the variable name which will automatically be appended by a number that differentiates the duplicate from the original."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["Variable name: the ",(0,i.jsx)(t.code,{children:"name"})," value of the input is shown at the bottom left."]}),"\n"]}),"\n",(0,i.jsx)("div",{style:{textAlign:"center"},children:(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"img alt",src:n(3606).Z+"",width:"775",height:"265"})})}),"\n",(0,i.jsxs)(t.admonition,{type:"tip",children:[(0,i.jsxs)(t.p,{children:["The layout of the inputs page can be adjusted for ",(0,i.jsx)(t.strong,{children:"both"})," desktop and mobile apps by choosing the appropriate icon at the top of the inputs page. Use this to make your app mobile-friendly!"]}),(0,i.jsx)("div",{style:{textAlign:"center"},children:(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"img alt",src:n(2233).Z+"",width:"483",height:"114"})})})]}),"\n",(0,i.jsx)(t.h2,{id:"input-group-vs-table-group",children:"Input group vs. Table group"}),"\n",(0,i.jsxs)(t.p,{children:["The inputs inside an ",(0,i.jsx)(t.strong,{children:"Input Group"})," are available individually for the ",(0,i.jsx)(t.code,{children:"main"})," function in the ",(0,i.jsx)(t.strong,{children:"Code"})," step. The ",(0,i.jsx)(t.strong,{children:"Table Group"})," on the other hand differs from the ",(0,i.jsx)(t.strong,{children:"Input Group"})," in two different aspects:"]}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["The ",(0,i.jsx)(t.em,{children:(0,i.jsx)(t.strong,{children:"developer"})})," has to specify the ",(0,i.jsx)(t.em,{children:"number of columns"})," in a ",(0,i.jsx)(t.strong,{children:"Table Group"})," and the width of each input is then fixed accordingly."]}),"\n",(0,i.jsxs)(t.li,{children:["The inputs from the ",(0,i.jsx)(t.strong,{children:"Table Group"})," are available for the ",(0,i.jsx)(t.code,{children:"main"})," function inside a nested array, whose name is specified by the ",(0,i.jsx)(t.em,{children:(0,i.jsx)(t.strong,{children:"developer"})}),", as will be shown in the examples later in this manual."]}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["Use a ",(0,i.jsx)(t.strong,{children:"Table Group"})," when you have multiple user inputs that you want condensed into a single nested array variable in the Code step."]}),"\n",(0,i.jsxs)(t.p,{children:["Below is a description of the different inputs that are currently available or you can visit the ",(0,i.jsx)(t.a,{href:"input-types",children:"Input Types"})," page for more details. You can also explore the behaviour of many of these inputs in our published ",(0,i.jsx)(t.a,{href:"https://mecsimcalc.com/app/0325014/all_inputs",children:"All Inputs App"}),":"]}),"\n",(0,i.jsx)(t.h2,{id:"input-types",children:"Input types"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Input Type"}),(0,i.jsx)(t.th,{style:{textAlign:"center"},children:"Variable Type"}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.strong,{children:"NumberInput"})}),(0,i.jsxs)(t.td,{style:{textAlign:"center"},children:[(0,i.jsx)(t.code,{children:"integer"})," or ",(0,i.jsx)(t.code,{children:"float"})]}),(0,i.jsxs)(t.td,{style:{textAlign:"left"},children:["This input type allows the ",(0,i.jsx)(t.em,{children:(0,i.jsx)(t.strong,{children:"user"})})," to input a number. The range and precision of the number can be specified by the ",(0,i.jsx)(t.em,{children:(0,i.jsx)(t.strong,{children:"developer"})})]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.strong,{children:"TextInput"})}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:(0,i.jsx)(t.code,{children:"string"})}),(0,i.jsxs)(t.td,{style:{textAlign:"left"},children:["This input type allows the ",(0,i.jsx)(t.em,{children:(0,i.jsx)(t.strong,{children:"user"})})," to input a text. There are many instances where a text field is useful as an input. For example, the text input can be useful when a particular message from the user is needed in the output page, or the ",(0,i.jsx)(t.em,{children:(0,i.jsx)(t.strong,{children:"developer"})})," can allow the ",(0,i.jsx)(t.em,{children:(0,i.jsx)(t.strong,{children:"user"})})," to input a general math function that can later be recognized using Python"]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.strong,{children:"FileInput"})}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:(0,i.jsx)(t.code,{children:"string"})}),(0,i.jsxs)(t.td,{style:{textAlign:"left"},children:["The ",(0,i.jsx)(t.em,{children:(0,i.jsx)(t.strong,{children:"developer"})})," can allow the ",(0,i.jsx)(t.em,{children:(0,i.jsx)(t.strong,{children:"user"})})," to upload a file"]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.strong,{children:"SingleSelect"})}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:(0,i.jsx)(t.code,{children:"string"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"This input type allows selecting one option out of a list of options"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.strong,{children:"MultipleSelect"})}),(0,i.jsxs)(t.td,{style:{textAlign:"center"},children:["list of ",(0,i.jsx)(t.code,{children:"strings"})]}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"This input type allows selecting multiple options out of a list of options"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.strong,{children:"Checkbox"})}),(0,i.jsxs)(t.td,{style:{textAlign:"center"},children:[(0,i.jsx)(t.code,{children:"boolean"})," (",(0,i.jsx)(t.code,{children:"True"})," or ",(0,i.jsx)(t.code,{children:"False"}),")"]}),(0,i.jsxs)(t.td,{style:{textAlign:"left"},children:["This input type returns either ",(0,i.jsx)(t.code,{children:"True"})," or ",(0,i.jsx)(t.code,{children:"False"})]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.strong,{children:"Slider"})}),(0,i.jsxs)(t.td,{style:{textAlign:"center"},children:[(0,i.jsx)(t.code,{children:"integer"})," or ",(0,i.jsx)(t.code,{children:"float"})]}),(0,i.jsxs)(t.td,{style:{textAlign:"left"},children:["This input type allows the ",(0,i.jsx)(t.em,{children:(0,i.jsx)(t.strong,{children:"user"})})," to select a number using a slider"]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.strong,{children:"RangeSlider"})}),(0,i.jsxs)(t.td,{style:{textAlign:"center"},children:["list of two ",(0,i.jsx)(t.code,{children:"integer"})," or ",(0,i.jsx)(t.code,{children:"float"})," elements"]}),(0,i.jsxs)(t.td,{style:{textAlign:"left"},children:["This input type allows the ",(0,i.jsx)(t.em,{children:(0,i.jsx)(t.strong,{children:"user"})})," to select a range or a list of two numbers using a range slider"]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.strong,{children:"ColorPicker"})}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:(0,i.jsx)(t.code,{children:"string"})}),(0,i.jsxs)(t.td,{style:{textAlign:"left"},children:["This input type allows the ",(0,i.jsx)(t.em,{children:(0,i.jsx)(t.strong,{children:"user"})})," to select a colour from a color picker"]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.strong,{children:"DateTimePicker"})}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:(0,i.jsx)(t.code,{children:"string"})}),(0,i.jsxs)(t.td,{style:{textAlign:"left"},children:["This input type allows the ",(0,i.jsx)(t.em,{children:(0,i.jsx)(t.strong,{children:"user"})})," to select a date, time, or both"]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.strong,{children:"RichText"})}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"N/A"}),(0,i.jsxs)(t.td,{style:{textAlign:"left"},children:["This is a field that the ",(0,i.jsx)(t.em,{children:(0,i.jsx)(t.strong,{children:"developer"})})," can use to add information within the input page"]})]})]})]})]})}function a(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},2479:(e,t,n)=>{n.d(t,{Z:()=>i});const i="data:image/png;base64,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"},3606:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/input_actions-2c8ca34ec1ee6630988e7f68de4865a3.png"},2233:(e,t,n)=>{n.d(t,{Z:()=>i});const i="data:image/png;base64,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"},1151:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>r});var i=n(7294);const s={},l=i.createContext(s);function r(e){const t=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(l.Provider,{value:t},e.children)}}}]);