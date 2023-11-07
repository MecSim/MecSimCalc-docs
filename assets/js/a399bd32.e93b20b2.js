"use strict";(self.webpackChunkmec_sim_calc_docs=self.webpackChunkmec_sim_calc_docs||[]).push([[3691],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=s(a),d=r,h=m["".concat(p,".").concat(d)]||m[d]||c[d]||l;return a?n.createElement(h,o(o({ref:t},u),{},{components:a})):n.createElement(h,o({ref:t},u))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[m]="string"==typeof e?e:r,o[1]=i;for(var s=2;s<l;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},8232:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var n=a(7462),r=(a(7294),a(3905));const l={sidebar_label:"Table Group",sidebar_position:3},o="Table Group",i={unversionedId:"inputs/table-group",id:"inputs/table-group",title:"Table Group",description:"Similar to an Input Group, a Table Group allows the **developer** to visually group inputs. A Table Group can be created in the Inputs step by clicking on Add Table Group.",source:"@site/docs/inputs/table-group.md",sourceDirName:"inputs",slug:"/inputs/table-group",permalink:"/inputs/table-group",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_label:"Table Group",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Input Group",permalink:"/inputs/input-group"},next:{title:"Input Types",permalink:"/inputs/input-types"}},p={},s=[{value:"Table Group Layout",id:"table-group-layout",level:2},{value:"Editing a table group",id:"editing-a-table-group",level:3},{value:"Dynamic Table",id:"dynamic-table",level:3},{value:"Labeling Rows",id:"labeling-rows",level:3}],u={toc:s},m="wrapper";function c(e){let{components:t,...l}=e;return(0,r.kt)(m,(0,n.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"table-group"},"Table Group"),(0,r.kt)("p",null,"Similar to an ",(0,r.kt)("a",{parentName:"p",href:"input-group"},(0,r.kt)("strong",{parentName:"a"},"Input Group")),", a ",(0,r.kt)("strong",{parentName:"p"},"Table Group")," allows the ",(0,r.kt)("em",{parentName:"p"},(0,r.kt)("strong",{parentName:"em"},"developer"))," to visually group inputs. A ",(0,r.kt)("strong",{parentName:"p"},"Table Group")," can be created in the ",(0,r.kt)("strong",{parentName:"p"},"Inputs")," step by clicking on ",(0,r.kt)("strong",{parentName:"p"},"Add Table Group"),"."),(0,r.kt)("div",{style:{textAlign:"center"}},(0,r.kt)("p",null,(0,r.kt)("img",{alt:"img alt",src:a(7080).Z,width:"216",height:"605"}))),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"The different input types appear in the menu only if an ",(0,r.kt)("strong",{parentName:"p"},"Input Group")," or a ",(0,r.kt)("strong",{parentName:"p"},"Table Group")," has already been created.")),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"Table Group")," behaves similarly to an ",(0,r.kt)("a",{parentName:"p",href:"input-group"},(0,r.kt)("strong",{parentName:"a"},"Input Group"))," in that the ",(0,r.kt)("em",{parentName:"p"},(0,r.kt)("strong",{parentName:"em"},"developer"))," can create as many new ",(0,r.kt)("strong",{parentName:"p"},"Table Groups")," as needed, which are arranged vertically. Similarly a ",(0,r.kt)("strong",{parentName:"p"},"Table Group")," can be renamed, deleted, or dragged to change its vertical position relative to other ",(0,r.kt)("strong",{parentName:"p"},"Input Groups")," or ",(0,r.kt)("strong",{parentName:"p"},"Table Groups"),"."),(0,r.kt)("h2",{id:"table-group-layout"},"Table Group Layout"),(0,r.kt)("p",null,"The main differences between a ",(0,r.kt)("strong",{parentName:"p"},"Table Group")," and an ",(0,r.kt)("a",{parentName:"p",href:"input-group"},(0,r.kt)("strong",{parentName:"a"},"Input Group"))," is:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The inputs share the same fixed width and cannot be resized."),(0,r.kt)("li",{parentName:"ul"},"The Python variable available in the ",(0,r.kt)("strong",{parentName:"li"},"Code")," section is a two dimensional nested array (eg. ",(0,r.kt)("inlineCode",{parentName:"li"},"[[1,2],[3,4]]"),")."),(0,r.kt)("li",{parentName:"ul"},"The number of columns and the variable name are specified by the ",(0,r.kt)("em",{parentName:"li"},(0,r.kt)("strong",{parentName:"em"},"developer"))," in the edit table popup.")),(0,r.kt)("p",null,"There are also many similarities including:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"No restrictions on the type of input in each cell."),(0,r.kt)("li",{parentName:"ul"},"Cells can be left empty.")),(0,r.kt)("p",null,"For example, the following ",(0,r.kt)("strong",{parentName:"p"},"Table Group")," has three columns and 1 row. The header can be made using RichText input type and does NOT count as a row. The array name available for the ",(0,r.kt)("strong",{parentName:"p"},"Code")," step is ",(0,r.kt)("inlineCode",{parentName:"p"},"table"),"."),(0,r.kt)("div",{style:{textAlign:"center"}},(0,r.kt)("p",null,(0,r.kt)("img",{alt:"img alt",src:a(4257).Z,width:"839",height:"299"}))),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Drag the ",(0,r.kt)("strong",{parentName:"li"},"Table Group")," to order it vertically amongst the other groups"),(0,r.kt)("li",{parentName:"ol"},"Edit the ",(0,r.kt)("strong",{parentName:"li"},"Table Group")," properties (described below)"),(0,r.kt)("li",{parentName:"ol"},"Delete the ",(0,r.kt)("strong",{parentName:"li"},"Table Group")),(0,r.kt)("li",{parentName:"ol"},"Duplicate the last row in the current ",(0,r.kt)("strong",{parentName:"li"},"Table Group")," (similar to duplicate input but for the whole row)")),(0,r.kt)("h3",{id:"editing-a-table-group"},"Editing a table group"),(0,r.kt)("p",null,"To edit the table group, click the \u270f\ufe0f icon near the top right side of the table group. A popup will appear with the following options:"),(0,r.kt)("div",{style:{textAlign:"center"}},(0,r.kt)("p",null,(0,r.kt)("img",{alt:"img alt",src:a(1426).Z,width:"607",height:"602"}))),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Title")," ","\u2192"," the title of the table group"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Name")," ","\u2192"," this is the variable name of the table which will be used in the python code"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Columns")," ","\u2192"," the number of columns in the table")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\ud83c\udfc6 The following are ",(0,r.kt)("a",{parentName:"th",href:"https://mecsimcalc.com/pricing"},"premium")," features")))),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Dynamic Table")," ","\u2192"," check this box if you want the user to be able to add and delete rows from the table",(0,r.kt)("br",{parentName:"li"}),"After checking this box a list of options will appear:",(0,r.kt)("br",{parentName:"li"}),"a) ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("em",{parentName:"strong"},"Max Rows"))," ","\u2192"," The maximum number of rows that can be in the table (",(0,r.kt)("strong",{parentName:"li"},"NOT including the header row"),")",(0,r.kt)("br",{parentName:"li"}),"b) ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("em",{parentName:"strong"},"Min Rows"))," ","\u2192"," The minimum number of rows that can be in the table\n(",(0,r.kt)("strong",{parentName:"li"},"NOT including the header row"),")",(0,r.kt)("br",{parentName:"li"}),"c) ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("em",{parentName:"strong"},"Row Group Size"))," ","\u2192"," The number of lines that make a single row that can be added and deleted (",(0,r.kt)("em",{parentName:"li"},"This should almost always be set to 1 ...unless your row is comprised of multiple lines"),")"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Conditional Input Group")," ","\u2192"," ",(0,r.kt)("a",{parentName:"li",href:"/inputs/input-group#conditional-input-group"},"Learn more"))),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Don't forget to click on ",(0,r.kt)("strong",{parentName:"p"},"APPLY")," after editing the properties of the ",(0,r.kt)("strong",{parentName:"p"},"Table Group"))),(0,r.kt)("h3",{id:"dynamic-table"},"Dynamic Table"),(0,r.kt)("p",null,"The following embedded app demonstrates the ",(0,r.kt)("strong",{parentName:"p"},"Dynamic Table")," feature using the ",(0,r.kt)("strong",{parentName:"p"},"Table Group")," properties shown above. Enter the values and press submit to calculate the weighted GPA.",(0,r.kt)("br",{parentName:"p"}),"\n","Use the ",(0,r.kt)("a",{parentName:"p",href:"https://mecsimcalc.com/create"},"Dynamic Table template")," (under ",(0,r.kt)("strong",{parentName:"p"},"Advanced"),") to start creating a similar app!"),(0,r.kt)("div",{style:{width:"100%",height:"900px",overflow:"hidden"}},(0,r.kt)("iframe",{src:"https://mecsimcalc.com/app/7608416/premium_dynamic_table",width:"100%",height:"100%",title:"MecSimCalc",style:{position:"relative",left:"-45px",top:"-48px"},frameBorder:"0"})),(0,r.kt)("p",null,"The code simply loops through each row of the table to get the grade and weight values."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"import mecsimcalc as msc\n\n\ndef main(inputs):\n    # get input table (list of rows)\n    input_table = inputs['table']\n\n    # make the headers for the table\n    headers = ['Subject', 'Grade']\n\n    # transform the table into an html table using the mecsimcalc library\n    table = msc.print_table(headers, input_table)\n\n    # calculate the grade average\n    rows = len(input_table)\n    sum = 0\n    for i in range(0, rows):\n        sum += input_table[i][1]\n\n    average = sum / rows\n\n    # return the table in a dictionary\n    return {'table': table, 'average': f'{average:.2f}'}\n")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"The number of rows in the table will not be known beforehand, therefore using ",(0,r.kt)("inlineCode",{parentName:"p"},"len(tableName)")," in the python code is essential.\nThis will allow you to get the # of rows in the table and then you can use it how you like!  ")),(0,r.kt)("h3",{id:"labeling-rows"},"Labeling Rows"),(0,r.kt)("p",null,"If the Dynamic Table feature is enabled, the # of rows that will be used is unknown.\nIn order to have the rows labeled correctly, you can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"{{row}}")," placeholder.\nThis can be used in two different ways:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"In an input label")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"img alt",src:a(1120).Z,width:"742",height:"332"})),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"In a Rich Text input")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"img alt",src:a(3779).Z,width:"730",height:"425"})))}c.isMDXComponent=!0},7080:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/add_table_group-356c795e49285eb1154441222441aeaa.png"},1426:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/edit_table_group_dialog-36580a39375bdace85cc1d1c97af2f63.png"},1120:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/label_row_placeholder-becdb88d5446171deb60c2374b488199.png"},3779:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/richtext_row_placeholder-8541a56ec72d69afc054fa81e6ca67ce.png"},4257:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/table_group_numbered-3a6360ed1a3b6a03d8c8edbd0c81d23c.png"}}]);