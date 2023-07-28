"use strict";(self.webpackChunkmec_sim_calc_docs=self.webpackChunkmec_sim_calc_docs||[]).push([[3691],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>d});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=s(a),d=r,h=c["".concat(p,".").concat(d)]||c[d]||m[d]||o;return a?n.createElement(h,i(i({ref:t},u),{},{components:a})):n.createElement(h,i({ref:t},u))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},8232:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=a(7462),r=(a(7294),a(3905));const o={sidebar_label:"Table Group",sidebar_position:3},i="Table Group",l={unversionedId:"inputs/table-group",id:"inputs/table-group",title:"Table Group",description:"Similar to an Input Group, a Table Group allows the **developer** to visually group inputs. A Table Group can be created in the Inputs step by clicking on Add Table Group.",source:"@site/docs/inputs/table-group.md",sourceDirName:"inputs",slug:"/inputs/table-group",permalink:"/inputs/table-group",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_label:"Table Group",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Input Group",permalink:"/inputs/input-group"},next:{title:"Input Types",permalink:"/inputs/input-types"}},p={},s=[{value:"Table Group Layout",id:"table-group-layout",level:2},{value:"Editing a table group",id:"editing-a-table-group",level:3},{value:"Dynamic Rows",id:"dynamic-rows",level:3}],u={toc:s};function m(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"table-group"},"Table Group"),(0,r.kt)("p",null,"Similar to an ",(0,r.kt)("a",{parentName:"p",href:"input-group"},(0,r.kt)("strong",{parentName:"a"},"Input Group")),", a ",(0,r.kt)("strong",{parentName:"p"},"Table Group")," allows the ",(0,r.kt)("em",{parentName:"p"},(0,r.kt)("strong",{parentName:"em"},"developer"))," to visually group inputs. A ",(0,r.kt)("strong",{parentName:"p"},"Table Group")," can be created in the ",(0,r.kt)("strong",{parentName:"p"},"Inputs")," step by clicking on ",(0,r.kt)("strong",{parentName:"p"},"Add Table Group"),"."),(0,r.kt)("div",{style:{textAlign:"center"}},(0,r.kt)("p",null,(0,r.kt)("img",{alt:"img alt",src:a(7080).Z,width:"216",height:"605"}))),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"The different input types appear in the menu only if an ",(0,r.kt)("strong",{parentName:"p"},"Input Group")," or a ",(0,r.kt)("strong",{parentName:"p"},"Table Group")," has already been created.")),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"Table Group")," behaves similarly to an ",(0,r.kt)("a",{parentName:"p",href:"input-group"},(0,r.kt)("strong",{parentName:"a"},"Input Group"))," in that the ",(0,r.kt)("em",{parentName:"p"},(0,r.kt)("strong",{parentName:"em"},"developer"))," can create as many new ",(0,r.kt)("strong",{parentName:"p"},"Table Groups")," as needed, which are arranged vertically. Similarly a ",(0,r.kt)("strong",{parentName:"p"},"Table Group")," can be renamed, deleted, or dragged to change its vertical position relative to other ",(0,r.kt)("strong",{parentName:"p"},"Input Groups")," or ",(0,r.kt)("strong",{parentName:"p"},"Table Groups"),"."),(0,r.kt)("h2",{id:"table-group-layout"},"Table Group Layout"),(0,r.kt)("p",null,"The main differences between a ",(0,r.kt)("strong",{parentName:"p"},"Table Group")," and an ",(0,r.kt)("a",{parentName:"p",href:"input-group"},(0,r.kt)("strong",{parentName:"a"},"Input Group"))," is:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The inputs share the same fixed width and cannot be resized."),(0,r.kt)("li",{parentName:"ul"},"The Python variable available in the ",(0,r.kt)("strong",{parentName:"li"},"Code")," section is a two dimensional nested array (eg. ",(0,r.kt)("inlineCode",{parentName:"li"},"[[1,2],[3,4]]"),")."),(0,r.kt)("li",{parentName:"ul"},"The number of columns and the variable name are specified by the ",(0,r.kt)("em",{parentName:"li"},(0,r.kt)("strong",{parentName:"em"},"developer"))," in the edit table popup.")),(0,r.kt)("p",null,"There are also many similarities including:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"No restrictions on the type of input in each cell."),(0,r.kt)("li",{parentName:"ul"},"Cells can be left empty.")),(0,r.kt)("p",null,"For example, the following ",(0,r.kt)("strong",{parentName:"p"},"Table Group")," has three columns and 1 row. The header can be made using RichText input type and does NOT count as a row. The array name available for the ",(0,r.kt)("strong",{parentName:"p"},"Code")," step is ",(0,r.kt)("inlineCode",{parentName:"p"},"table"),"."),(0,r.kt)("div",{style:{textAlign:"center"}},(0,r.kt)("p",null,(0,r.kt)("img",{alt:"img alt",src:a(4257).Z,width:"839",height:"299"}))),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Drag the ",(0,r.kt)("strong",{parentName:"li"},"Table Group")," to arrange it vertically"),(0,r.kt)("li",{parentName:"ol"},"Specify a ",(0,r.kt)("em",{parentName:"li"},(0,r.kt)("strong",{parentName:"em"},"Title"))," that will be visible to the users"),(0,r.kt)("li",{parentName:"ol"},"Edit the ",(0,r.kt)("strong",{parentName:"li"},"Table Group")," properties (described below)"),(0,r.kt)("li",{parentName:"ol"},"Delete the ",(0,r.kt)("strong",{parentName:"li"},"Table Group")),(0,r.kt)("li",{parentName:"ol"},"Duplicate the last row in the current ",(0,r.kt)("strong",{parentName:"li"},"Table Group")," (similar to duplicate input but for the whole row)")),(0,r.kt)("h3",{id:"editing-a-table-group"},"Editing a table group"),(0,r.kt)("p",null,"To edit the table group, click the pencil icon near the top right side of the table group. A popup will appear with the following options:"),(0,r.kt)("div",{style:{textAlign:"center"}},(0,r.kt)("p",null,(0,r.kt)("img",{alt:"img alt",src:a(1426).Z,width:"603",height:"541"}))),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Name")," -> this is the variable name of the table which will be used in the python code"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Columns")," -> the number of columns in the table")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\ud83c\udfc6 The following are ",(0,r.kt)("a",{parentName:"th",href:"https://mecsimcalc.com/premium"},"premium")," features")))),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Dynamic Rows")," -> check this box if you want the user to be able to add and delete rows from the table",(0,r.kt)("br",{parentName:"li"}),"After checking this box a list of options will appear:",(0,r.kt)("br",{parentName:"li"}),"a) ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("em",{parentName:"strong"},"Max Rows"))," -> The maximum number of rows that can be in the table (",(0,r.kt)("strong",{parentName:"li"},"NOT including the header row"),")",(0,r.kt)("br",{parentName:"li"}),"b) ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("em",{parentName:"strong"},"Min Rows"))," -> The minimum number of rows that can be in the table\n(",(0,r.kt)("strong",{parentName:"li"},"NOT including the header row"),")",(0,r.kt)("br",{parentName:"li"}),"c) ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("em",{parentName:"strong"},"Row Group Size"))," -> The number of rows that are 'combined' together when the user 'Adds' or 'Deletes' rows. (",(0,r.kt)("em",{parentName:"li"},"This should almost always be set to 1"),")"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Conditional Input Group")," -> Similar to the ",(0,r.kt)("a",{parentName:"li",href:"https://docs.mecsimcalc.com//inputs/conditional-input"},"Conditional Input")," feature but for the entire ",(0,r.kt)("strong",{parentName:"li"},"Input Group / Table Group"))),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Don't forget to click on ",(0,r.kt)("strong",{parentName:"p"},"APPLY")," after editing the properties of the ",(0,r.kt)("strong",{parentName:"p"},"Table Group"))),(0,r.kt)("h3",{id:"dynamic-rows"},"Dynamic Rows"),(0,r.kt)("p",null,"The following embedded app demonstrates the Dynamic Rows feature using the ",(0,r.kt)("strong",{parentName:"p"},"Table Group")," properties shown above. Enter the values and press submit to calculate the weighted GPA. Try adding and deleting rows to see the output change!"),(0,r.kt)("div",{style:{width:"100%",height:"900px",overflow:"hidden"}},(0,r.kt)("iframe",{src:"https://mecsimcalc.com/app/7646727/weighted_gpa_calculator_mobile_friendly",width:"100%",height:"100%",title:"MecSimCalc",style:{position:"relative",left:"-45px",top:"-48px"},frameBorder:"0"})),(0,r.kt)("p",null,"The code simply loops through each row of the table to get the grade and weight values."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"def main(inputs):\n    # get input table (list of rows)\n    input_table = inputs['table']\n\n    # calculate the grade average\n    rows = len(input_table)\n    weight = 0\n    gpa_sum = 0\n    for i in range(0, rows):\n        gpa_sum += input_table[i][1] * input_table[i][2]\n        weight += input_table[i][2]\n\n    average = gpa_sum / weight\n\n    # return the table in a dictionary\n    return {'average': f'{average:.2f}'}\n")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"The number of rows in the table will not be known beforehand, therefore using ",(0,r.kt)("inlineCode",{parentName:"p"},"len('tableName')")," in the python code is essential.\nThis will allow you to get the # of rows in the table and then you can use it how you like!",(0,r.kt)("br",{parentName:"p"}),"\n","Try it out for yourself using the ",(0,r.kt)("a",{parentName:"p",href:"https://mecsimcalc.com/create"},"dynamic table template"))))}m.isMDXComponent=!0},7080:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/add_table_group-356c795e49285eb1154441222441aeaa.png"},1426:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/edit_table_group_dialog-ad033a402db903831a019716b875dd63.png"},4257:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/table_group_numbered-9598378acb88677b0c0c5bd6dedbe625.png"}}]);