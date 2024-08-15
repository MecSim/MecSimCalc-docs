"use strict";(self.webpackChunkmec_sim_calc_docs=self.webpackChunkmec_sim_calc_docs||[]).push([[4809],{9772:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>a});var n=s(5893),i=s(1151);const r={sidebar_label:"Quiz Toolkit",sidebar_position:1},o="Quiz Toolkit",l={id:"advanced-applications/quiz-toolkit",title:"Quiz Toolkit",description:"| This is a premium feature |",source:"@site/docs/advanced-applications/quiz-toolkit.md",sourceDirName:"advanced-applications",slug:"/advanced-applications/quiz-toolkit",permalink:"/advanced-applications/quiz-toolkit",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"Quiz Toolkit",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"App Monetization",permalink:"/monetization"},next:{title:"OpenSeesPy",permalink:"/advanced-applications/openseespy"}},d={},a=[{value:"Create the Quiz App",id:"create-the-quiz-app",level:2},{value:"Numerical Question",id:"numerical-question",level:3},{value:"1) Create a NumberInput for Student to Input Answer",id:"1-create-a-numberinput-for-student-to-input-answer",level:4},{value:"2) How to randomize variables in question",id:"2-how-to-randomize-variables-in-question",level:4},{value:"3) Python Code for Compare Answer and Grade it",id:"3-python-code-for-compare-answer-and-grade-it",level:4},{value:"Algebraic Question",id:"algebraic-question",level:3},{value:"1) Create a TextInput for Student to Input Answer",id:"1-create-a-textinput-for-student-to-input-answer",level:4},{value:"2) How to compare two algebraic expressions",id:"2-how-to-compare-two-algebraic-expressions",level:4},{value:"3) Displaying Results",id:"3-displaying-results",level:4},{value:"Retrieving Quiz Results",id:"retrieving-quiz-results",level:2},{value:"Export Results to Google Sheets",id:"export-results-to-google-sheets",level:3},{value:"Arguments:",id:"arguments",level:4},{value:"How to Get Spreadsheet ID",id:"how-to-get-spreadsheet-id",level:4},{value:"How to Get Service Account Info",id:"how-to-get-service-account-info",level:4},{value:"Step 1: Enable the Google Sheets API",id:"step-1-enable-the-google-sheets-api",level:5},{value:"Step 2: Create Service Account Credentials",id:"step-2-create-service-account-credentials",level:5},{value:"Email Results to Student/Instructor",id:"email-results-to-studentinstructor",level:3},{value:"Arguments:",id:"arguments-1",level:4},{value:"How to Create a Google App Password",id:"how-to-create-a-google-app-password",level:4},{value:"Integration with Canvas Gradebook (Beta)",id:"integration-with-canvas-gradebook-beta",level:3},{value:"1) Create Essay Questions on Canvas",id:"1-create-essay-questions-on-canvas",level:4},{value:"Arguments:",id:"arguments-2",level:4},{value:"Returns:",id:"returns",level:4},{value:"2) For Students to Complete the Quiz",id:"2-for-students-to-complete-the-quiz",level:4},{value:"How to get student token",id:"how-to-get-student-token",level:5},{value:"3) For Professors to Set Up the Quiz",id:"3-for-professors-to-set-up-the-quiz",level:4},{value:"How to get teacher token",id:"how-to-get-teacher-token",level:5},{value:"How to get course and quiz id",id:"how-to-get-course-and-quiz-id",level:5},{value:"How to Embed the Quiz into Your Website",id:"how-to-embed-the-quiz-into-your-website",level:2},{value:"Find the Quiz URL",id:"find-the-quiz-url",level:3},{value:"Add HTML Code to Your Website",id:"add-html-code-to-your-website",level:3},{value:"Example",id:"example",level:2}];function c(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"quiz-toolkit",children:"Quiz Toolkit"})}),"\n",(0,n.jsx)(t.table,{children:(0,n.jsx)(t.thead,{children:(0,n.jsx)(t.tr,{children:(0,n.jsxs)(t.th,{children:["\ud83c\udfc6"," This is a ",(0,n.jsx)(t.a,{href:"https://mecsimcalc.com/pricing",children:"premium"})," feature"]})})})}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"MecSimCalc"})," supports online quizzes. We can ",(0,n.jsx)(t.strong,{children:"randomize"})," the given values in question, collect quiz results when student run Mecsimcalc App, and send them to your ",(0,n.jsx)(t.a,{href:"https://www.google.ca/sheets/about/",children:(0,n.jsx)(t.strong,{children:"Google Spreadsheet"})})," or ",(0,n.jsx)(t.a,{href:"https://www.google.com/gmail/about/",children:(0,n.jsx)(t.strong,{children:"send email notification"})}),". We also support integration with ",(0,n.jsx)(t.a,{href:"https://canvas.instructure.com/",children:(0,n.jsx)(t.strong,{children:"Canvas"})})," to collect quiz grades."]}),"\n",(0,n.jsx)(t.h2,{id:"create-the-quiz-app",children:"Create the Quiz App"}),"\n",(0,n.jsxs)(t.p,{children:["In this tutorial, you will learn how to create a quiz app using ",(0,n.jsx)(t.strong,{children:"MecSimCalc"})," with different types of questions."]}),"\n",(0,n.jsx)(t.h3,{id:"numerical-question",children:"Numerical Question"}),"\n",(0,n.jsx)(t.p,{children:"For example, you can create a quiz app that asks students to solve a math problem and input their answer. The app will then compare the student's answer with the correct answer and grade it."}),"\n",(0,n.jsx)(t.h4,{id:"1-create-a-numberinput-for-student-to-input-answer",children:"1) Create a NumberInput for Student to Input Answer"}),"\n",(0,n.jsxs)(t.p,{children:["Follow the steps below to create a ",(0,n.jsx)(t.code,{children:"NumberInput"})," as a variable in question and for students to input their answer:\n",(0,n.jsx)(t.img,{alt:"img alt",src:s(7454).Z+"",width:"2772",height:"1688"})]}),"\n",(0,n.jsx)(t.h4,{id:"2-how-to-randomize-variables-in-question",children:"2) How to randomize variables in question"}),"\n",(0,n.jsxs)(t.p,{children:["Click the ",(0,n.jsx)(t.strong,{children:"Blue Edit button"})," to edit the ",(0,n.jsx)(t.code,{children:"NumberInput"}),", click the ",(0,n.jsx)(t.strong,{children:"ADVANCED"})," menu, select ",(0,n.jsx)(t.strong,{children:"Randomize Input"}),".\nAfter you set up the ",(0,n.jsx)(t.strong,{children:"Step"}),", ",(0,n.jsx)(t.strong,{children:"Min"})," and ",(0,n.jsx)(t.strong,{children:"Max"})," for the ",(0,n.jsx)(t.code,{children:"NumberInput"}),", the value will be randomized everytime when the student runs the app.\n",(0,n.jsx)(t.img,{alt:"img alt",src:s(2023).Z+"",width:"2272",height:"906"})]}),"\n",(0,n.jsx)(t.h4,{id:"3-python-code-for-compare-answer-and-grade-it",children:"3) Python Code for Compare Answer and Grade it"}),"\n",(0,n.jsxs)(t.p,{children:["You can implement the logic to calculate the correct answer in the Python code. Click ",(0,n.jsx)(t.a,{href:"../code/overview",children:"here"})," to find out how to write Python code in MecSimCalc."]}),"\n",(0,n.jsx)(t.h3,{id:"algebraic-question",children:"Algebraic Question"}),"\n",(0,n.jsxs)(t.p,{children:["Mecsimcalc allows you to ",(0,n.jsx)(t.strong,{children:"verify if two algebraic expressions are mathematically equivalent"}),".\nAll you need to do is to ",(0,n.jsxs)(t.strong,{children:["install ",(0,n.jsx)(t.a,{href:"https://www.sympy.org/en/index.html",children:(0,n.jsx)(t.code,{children:"sympy"})})," library"]}),". Click ",(0,n.jsx)(t.a,{href:"../code/environments#step-2-add-python-packages",children:"here"})," to see how to install Python packages in your environment"]}),"\n",(0,n.jsx)(t.p,{children:"For example, assume that you want to compare if two expressions are the same or not, checkout this example:"}),"\n",(0,n.jsx)("div",{style:{width:"100%",height:"600px",overflow:"hidden"},children:(0,n.jsx)("iframe",{src:"https://mecsimcalc.com/app/8080021/algebraic_expression_comparison_demo",width:"100%",height:"100%",title:"MecSimCalc",style:{position:"relative",left:"-45px",top:"-48px"},frameBorder:"0"})}),"\n",(0,n.jsx)(t.h4,{id:"1-create-a-textinput-for-student-to-input-answer",children:"1) Create a TextInput for Student to Input Answer"}),"\n",(0,n.jsxs)(t.p,{children:["Follow the same steps before, creating a ",(0,n.jsx)(t.code,{children:"NumberInput"})," for students to input their answer:\n",(0,n.jsx)(t.img,{alt:"img alt",src:s(7424).Z+"",width:"2564",height:"1712"}),"\nThe algebraic expression input will be saved as a ",(0,n.jsx)(t.code,{children:"str"})," type. For example, you can input ",(0,n.jsx)(t.code,{children:"x^2 + 2*x + 1"})," as the algebraic expression."]}),"\n",(0,n.jsx)(t.h4,{id:"2-how-to-compare-two-algebraic-expressions",children:"2) How to compare two algebraic expressions"}),"\n",(0,n.jsx)(t.p,{children:"Here we demonstrate the code of above example. You can use the function below:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:"import sympy as sp\n\ndef check_expressions_equal(expr1_str, expr2_str):\n\n   # Convert the string representations to SymPy expressions\n   expr1 = sp.sympify(expr1_str)\n   expr2 = sp.sympify(expr2_str)\n\n   # Simplify the difference between the two expressions# and check if the result is equal to zero\n   # If the result is zero, the expressions are equal, otherwise they are not\n   return sp.simplify(expr1 - expr2) == 0, expr1, expr2\n\n"})}),"\n",(0,n.jsx)(t.p,{children:"And below is the main code part:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:'def main(inputs):\n   expr1=inputs[\'func_1\']\n   expr2=inputs[\'func_2\']\n\n   res, expr1, expr2 = check_expressions_equal(expr1,expr2)\n\n   # convert to latex expression\n   latex_expr1 = sp.latex(expr1)\n   latex_expr2 = sp.latex(expr2)\n\n   return {"result": res, "String1": latex_expr1, "String2": latex_expr2}\n'})}),"\n",(0,n.jsx)(t.h4,{id:"3-displaying-results",children:"3) Displaying Results"}),"\n",(0,n.jsxs)(t.p,{children:["Below is the ",(0,n.jsx)(t.strong,{children:"Output"})," code of above example to display the results in ",(0,n.jsx)(t.code,{children:"LaTex"})," format:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-text",children:"{% if outputs.result %}\nThese two equations are the same\n{% else %}\nThese two equations are not the same\n{% endif %}\n\nEquation 1: {{ outputs.String1 | katex}}\nEquation 2: {{ outputs.String2 | katex}}\n"})}),"\n",(0,n.jsxs)(t.p,{children:["Click ",(0,n.jsx)(t.a,{href:"../output/latex",children:"here"})," for more information about writing ",(0,n.jsx)(t.code,{children:"LaTex"})," in your output."]}),"\n",(0,n.jsx)(t.h2,{id:"retrieving-quiz-results",children:"Retrieving Quiz Results"}),"\n",(0,n.jsxs)(t.p,{children:["In this section, we will show you how to retrieve quiz results and send them to your ",(0,n.jsx)(t.strong,{children:"Google Spreadsheet"}),", ",(0,n.jsx)(t.strong,{children:"Gmail"})," and ",(0,n.jsx)(t.strong,{children:"Canvas"}),"."]}),"\n",(0,n.jsx)(t.h3,{id:"export-results-to-google-sheets",children:"Export Results to Google Sheets"}),"\n",(0,n.jsxs)(t.p,{children:["MecSimCalc has its own function that can be used. Users can append data to their own Google Sheets by calling ",(0,n.jsx)(t.a,{href:"/mecsimcalc-library/file-utils#append_to_google_sheet",children:(0,n.jsx)(t.code,{children:"append_to_google_sheet"})}),".\nCheck out the ",(0,n.jsx)(t.a,{href:"#google-spreadsheet-example",children:"example"})," first to see what the result will look like in the Google Sheet."]}),"\n",(0,n.jsx)(t.h4,{id:"arguments",children:"Arguments:"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Argument"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.code,{children:"service_account_info"})})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:"dict"})}),(0,n.jsx)(t.td,{children:"The credentials used for Google Sheets API authentication."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.code,{children:"spreadsheet_id"})})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:"str"})}),(0,n.jsx)(t.td,{children:"The unique identifier of your Google Spreadsheet."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.code,{children:"values"})})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:"list of lists"})}),(0,n.jsx)(t.td,{children:"The data to append. Each list element represents a row of data."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.code,{children:"range_name"})})}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.strong,{children:"str"})," (optional)"]}),(0,n.jsx)(t.td,{children:"The A1 notation of the range to start appending data (Defaults to 'Sheet1!A1'). Generally, there is no need to make changes.."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.code,{children:"include_timestamp"})})}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.strong,{children:"bool"})," (optional)"]}),(0,n.jsx)(t.td,{children:"If True, appends the current timestamp to each row of data (Defaults to True)."})]})]})]}),"\n",(0,n.jsx)(t.admonition,{type:"tip",children:(0,n.jsx)(t.p,{children:(0,n.jsxs)(t.strong,{children:["Learn how to get ",(0,n.jsx)(t.a,{href:"#how-to-get-spreadsheet-id",children:(0,n.jsx)(t.code,{children:"spreadsheet_id"})}),", ",(0,n.jsx)(t.a,{href:"#how-to-get-service-account-info",children:(0,n.jsx)(t.code,{children:"service account info"})}),"!"]})})}),"\n",(0,n.jsx)(t.p,{children:"All you need to do is add:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:"values = [\n    [ inputs['name'], inputs['id'], grade ],\n]\n\nmsc.append_to_google_sheet(service_account_info, spreadsheet_id, values)\n\n# if you don't want to include timestamp\nmsc.append_to_google_sheet(service_account_info, spreadsheet_id, values,\ninclude_timestamp=False)\n"})}),"\n",(0,n.jsxs)(t.p,{children:["Quiz values will append to your Google Sheet:\n",(0,n.jsx)(t.img,{alt:"img alt",src:s(1807).Z+"",width:"1196",height:"100"})]}),"\n",(0,n.jsx)(t.h4,{id:"how-to-get-spreadsheet-id",children:"How to Get Spreadsheet ID"}),"\n",(0,n.jsxs)(t.p,{children:["You need to create a Spreadsheet first.\nThe Spreadsheet ID is\xa0",(0,n.jsx)(t.strong,{children:"the last string of characters in the URL for your spreadsheet"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["For example, in the URL ",(0,n.jsx)(t.a,{href:"https://docs.google.com/spreadsheets/d/1qpyC0XzvTcKT6wQoFDE8p-Bll4hps/edit#gid=0",children:"https://docs.google.com/spreadsheets/d/1qpyC0XzvTcKT6wQoFDE8p-Bll4hps/edit#gid=0"})," , the spreadsheet ID is ",(0,n.jsx)(t.strong,{children:"1qpyC0XzvTcKT6wQoFDE8p-Bll4hps"})]}),"\n",(0,n.jsx)(t.h4,{id:"how-to-get-service-account-info",children:"How to Get Service Account Info"}),"\n",(0,n.jsx)(t.h5,{id:"step-1-enable-the-google-sheets-api",children:"Step 1: Enable the Google Sheets API"}),"\n",(0,n.jsx)(t.p,{children:"Before integrating Google APIs into your project, you must enable them within a Google Cloud project. This process allows you to activate one or multiple APIs under the same project umbrella."}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"First"}),", navigate to the Google Cloud Console and activate the Google Sheets API through the following link: ",(0,n.jsx)(t.a,{href:"https://console.cloud.google.com/flows/enableapi?apiid=sheets.googleapis.com",children:"Enable the Google Sheets API"}),"."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"img alt",src:s(2402).Z+"",width:"1704",height:"434"})}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Next"}),", you'll need to create a Google Cloud Project if you haven't done so already. Detailed instructions can be found here: ",(0,n.jsx)(t.a,{href:"https://developers.google.com/workspace/guides/create-project",children:"Create a Google Cloud Project"}),"."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"img alt",src:s(5579).Z+"",width:"2642",height:"1246"})}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.h5,{id:"step-2-create-service-account-credentials",children:["Step 2: ",(0,n.jsx)(t.a,{href:"https://developers.google.com/workspace/guides/create-credentials#create_credentials_for_a_service_account",children:"Create Service Account"})," Credentials"]}),"\n",(0,n.jsx)(t.p,{children:"To authenticate your application with Google's APIs, follow these steps to create and obtain service account credentials:"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["In the Google Cloud console, go to Menu > ",(0,n.jsx)(t.strong,{children:"IAM & Admin"})," > ",(0,n.jsx)(t.strong,{children:"Service Accounts"}),"."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"https://console.cloud.google.com/iam-admin/serviceaccounts",children:"Go to Service Accounts"})}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Choose your service account"}),". If you don't have one, create a new service account and assign it the Editor role for adequate permissions."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"img alt",src:s(9712).Z+"",width:"2568",height:"1428"})}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Navigate to ",(0,n.jsx)(t.strong,{children:"Keys"})," > ",(0,n.jsx)(t.strong,{children:"Add Key"})," > ",(0,n.jsx)(t.strong,{children:"Create New Key"}),", and select the ",(0,n.jsx)(t.strong,{children:"JSON"})," option. Upon clicking ",(0,n.jsx)(t.strong,{children:"Create"}),", a JSON file containing your new key pair will be downloaded."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"img alt",src:s(9263).Z+"",width:"2622",height:"1510"})}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Save the JSON file"})," as ",(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.code,{children:"credentials.json"})})," in your project directory. This file contains your service account's credentials, which you'll use to authenticate your application. Here's what the JSON file looks like:"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-json",children:'{\n  "type": "service_account",\n  "project_id": "your-project-id",\n  "private_key_id": "private_key_id",\n  "private_key": "-----BEGIN PRIVATE KEY-----\u2026-----END PRIVATE KEY-----\\n",\n  "client_email": "your-service-account-email",\n  "client_id": "your-client-id",\n  "auth_uri": "https://accounts.google.com/o/oauth2/auth",\n  "token_uri": "https://oauth2.googleapis.com/token",\n  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",\n  "client_x509_cert_url": "your-client-x509-cert-url"\n}\n'})}),"\n",(0,n.jsxs)(t.p,{children:["The contents of ",(0,n.jsx)(t.code,{children:"credentials.json"})," will be used as the ",(0,n.jsx)(t.code,{children:"service_account_info"})," parameter. Simply copy this information and pass it to the ",(0,n.jsx)(t.code,{children:"append_to_sheet()"})," function as the ",(0,n.jsx)(t.code,{children:"service_account_info"})," argument."]}),"\n",(0,n.jsx)(t.h3,{id:"email-results-to-studentinstructor",children:"Email Results to Student/Instructor"}),"\n",(0,n.jsxs)(t.p,{children:["You can use ",(0,n.jsx)(t.a,{href:"/mecsimcalc-library/file-utils#send_gmail",children:(0,n.jsx)(t.code,{children:"send_gmail"})})," function."]}),"\n",(0,n.jsx)(t.h4,{id:"arguments-1",children:"Arguments:"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Argument"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.code,{children:"sender_email"})})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:"str"})}),(0,n.jsx)(t.td,{children:"The email address of the sender."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.code,{children:"receiver_email"})})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:"str"})}),(0,n.jsx)(t.td,{children:"The email address of the receiver."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.code,{children:"subject"})})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:"str"})}),(0,n.jsx)(t.td,{children:"The subject line of the email."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.code,{children:"app_password"})})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:"str"})}),(0,n.jsx)(t.td,{children:"The app-specific password for the sender's email account."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.code,{children:"values"})})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:"list"})}),(0,n.jsx)(t.td,{children:"A list of lists. Each list contains data to be included in the email body."})]})]})]}),"\n",(0,n.jsx)(t.admonition,{type:"tip",children:(0,n.jsx)(t.p,{children:(0,n.jsxs)(t.strong,{children:["Learn how to get an ",(0,n.jsx)(t.a,{href:"#31-how-to-create-a-google-app-password",children:(0,n.jsx)(t.code,{children:"app_password"})}),"!"]})})}),"\n",(0,n.jsxs)(t.p,{children:["For example, you can retrieve the student's ",(0,n.jsx)(t.code,{children:"name"})," and ",(0,n.jsx)(t.code,{children:"id"})," from the input, calculate the ",(0,n.jsx)(t.code,{children:"grade"})," through code, and this information can be sent to the receiver's email. All you need to do is add :"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:'values = [\n        ["Joe", "186234", 85]\n]\nmsc.send_email(sender_email = "sender_email@gmail.com",\n               receiver_email = "receiver_email@example.ca",\n               subject = "Quiz Results",\n               app_password = "xxxx xxxx xxxx xxxx",\n               values = values)\n'})}),"\n",(0,n.jsx)(t.p,{children:"Then receiver will get an email like this:"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"img alt",src:s(8856).Z+"",width:"1212",height:"262"})}),"\n",(0,n.jsx)(t.h4,{id:"how-to-create-a-google-app-password",children:"How to Create a Google App Password"}),"\n",(0,n.jsxs)(t.p,{children:["Official Google support page: ",(0,n.jsx)(t.a,{href:"https://support.google.com/accounts/answer/185833?hl=en",children:"Create & use App Passwords"}),"."]}),"\n",(0,n.jsx)(t.p,{children:"An app password is a 16-digit code that allows less secure apps or devices to access your Google Account. This is especially useful if you have 2-Step Verification enabled and the app you're using doesn't support \"Sign in with Google.\" Here\u2019s how to create one:"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["Go to your\xa0",(0,n.jsx)(t.a,{href:"https://myaccount.google.com/",children:"Google Account"}),"."]}),"\n",(0,n.jsxs)(t.li,{children:["Select\xa0",(0,n.jsx)(t.strong,{children:"Security."})]}),"\n",(0,n.jsxs)(t.li,{children:['Under "Signing in to Google," select\xa0',(0,n.jsx)(t.strong,{children:"2-Step Verification"}),".\n",(0,n.jsx)(t.img,{alt:"img alt",src:s(6434).Z+"",width:"2476",height:"528"})]}),"\n",(0,n.jsxs)(t.li,{children:["At the bottom of the page, select\xa0",(0,n.jsx)(t.strong,{children:"App passwords"}),"."]}),"\n",(0,n.jsx)(t.li,{children:"Enter a name that helps you remember where you\u2019ll use the app password."}),"\n",(0,n.jsxs)(t.li,{children:["Click ",(0,n.jsx)(t.strong,{children:"Generate"})," to obtain the 16-digit app password."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Make sure to save the app password"})," (as you won't be able to see it later) and then copy it into your quiz app"]}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"integration-with-canvas-gradebook-beta",children:"Integration with Canvas Gradebook (Beta)"}),"\n",(0,n.jsx)(t.admonition,{type:"warning",children:(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"We are still working on this feature, and it is currently in beta."})})}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Mecsimcalc"})," integrates with ",(0,n.jsx)(t.a,{href:"https://canvas.instructure.com/",children:(0,n.jsx)(t.strong,{children:"Canvas"})}),", enabling professors to collect quiz grades."]}),"\n",(0,n.jsx)(t.h4,{id:"1-create-essay-questions-on-canvas",children:"1) Create Essay Questions on Canvas"}),"\n",(0,n.jsxs)(t.p,{children:["You need to create a quiz on Canvas that only have ",(0,n.jsx)(t.code,{children:"Essay Question"}),", which only use to collect grades:\n",(0,n.jsx)(t.img,{alt:"img alt",src:s(2435).Z+"",width:"2196",height:"910"}),"\nWe support user to create multiple question in Canvas, and the length of ",(0,n.jsx)(t.code,{children:"grade"})," list should be equal to the number of questions.\nAfter you run the code above, you will see following result:\n",(0,n.jsx)(t.img,{alt:"img alt",src:s(5565).Z+"",width:"2006",height:"1014"})]}),"\n",(0,n.jsxs)(t.p,{children:["You can use ",(0,n.jsx)(t.code,{children:"submit_canvas_quiz"})," function."]}),"\n",(0,n.jsx)(t.h4,{id:"arguments-2",children:"Arguments:"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Argument"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"teacher_token"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:"str"})}),(0,n.jsx)(t.td,{children:"Authorization token for the teacher."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"student_token"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:"str"})}),(0,n.jsx)(t.td,{children:"Authorization token for the student."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"course_id"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:"str"})}),(0,n.jsx)(t.td,{children:"The ID of the course containing the quiz."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"quiz_id"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:"str"})}),(0,n.jsx)(t.td,{children:"The ID of the quiz to be submitted."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"grades"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:"list of str"})}),(0,n.jsx)(t.td,{children:"A list of grades/answers to submit for the quiz."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"multiple_attempts"})}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.strong,{children:"bool"})," (optional)"]}),(0,n.jsx)(t.td,{children:"Whether to allow multiple attempts for the quiz. (Default to False)"})]})]})]}),"\n",(0,n.jsx)(t.h4,{id:"returns",children:"Returns:"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Return Type"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.code,{children:"dict"})})}),(0,n.jsx)(t.td,{children:"A dictionary containing the response from the final quiz submission completion request."})]})})]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:"# You should get student token from `inputs`\nstudent_token = inputs['student_token']\n\nteacher_token = 'teacher_token'\ncourse_id = 'course_id'\nquiz_id = 'quiz_id'\ngrades = [\"100\", \"90\"] # Assume you already calculate the grade for two questions\n\n# Execute the function\nmsc.submit_canvas_quiz(teacher_token, student_token, course_id, quiz_id, grades, multiple_attempts=False)\n"})}),"\n",(0,n.jsx)(t.h4,{id:"2-for-students-to-complete-the-quiz",children:"2) For Students to Complete the Quiz"}),"\n",(0,n.jsxs)(t.p,{children:["You need to generate a ",(0,n.jsx)(t.code,{children:"student_token"})," as the Quiz input access token."]}),"\n",(0,n.jsx)(t.h5,{id:"how-to-get-student-token",children:"How to get student token"}),"\n",(0,n.jsxs)(t.p,{children:["After sign in your Canvas account, click ",(0,n.jsx)(t.strong,{children:"Account/Settings"})," (",(0,n.jsx)(t.a,{href:"https://canvas.instructure.com/profile/settings",children:"link"}),")\n",(0,n.jsx)(t.img,{alt:"img alt",src:s(6364).Z+"",width:"2488",height:"616"})]}),"\n",(0,n.jsxs)(t.p,{children:["For student: this is the ",(0,n.jsx)(t.code,{children:"student_token"})," you need to submit Mecsimcalc-Canvas quiz\nFor professor: this is the ",(0,n.jsx)(t.code,{children:"teacher_token"})," you need to set up when you create the quiz app."]}),"\n",(0,n.jsx)(t.admonition,{type:"danger",children:(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Do NOT leak your Token to others!!!"})})}),"\n",(0,n.jsx)(t.h4,{id:"3-for-professors-to-set-up-the-quiz",children:"3) For Professors to Set Up the Quiz"}),"\n",(0,n.jsxs)(t.p,{children:["You need to find ",(0,n.jsx)(t.code,{children:"teacher_token"}),", ",(0,n.jsx)(t.code,{children:"course_id"}),", ",(0,n.jsx)(t.code,{children:"quiz_id"})]}),"\n",(0,n.jsx)(t.h5,{id:"how-to-get-teacher-token",children:"How to get teacher token"}),"\n",(0,n.jsxs)(t.p,{children:["Follow the same steps as ",(0,n.jsx)(t.a,{href:"#how-to-get-student-token",children:"above"}),", and you will find your ",(0,n.jsx)(t.code,{children:"teacher_token"})," in the same place as ",(0,n.jsx)(t.code,{children:"student_token"}),"."]}),"\n",(0,n.jsx)(t.h5,{id:"how-to-get-course-and-quiz-id",children:"How to get course and quiz id"}),"\n",(0,n.jsxs)(t.p,{children:["You can find both of them from the URL.\nFor example, if the URL looks like: ",(0,n.jsx)(t.a,{href:"https://canvas.instructure.com/courses/123/quizzes/456",children:"https://canvas.instructure.com/courses/123/quizzes/456"}),", then ",(0,n.jsx)(t.code,{children:"course_id"})," will be ",(0,n.jsx)(t.code,{children:"123"}),", ",(0,n.jsx)(t.code,{children:"quiz_id"})," will be ",(0,n.jsx)(t.code,{children:"456"})]}),"\n",(0,n.jsx)(t.h2,{id:"how-to-embed-the-quiz-into-your-website",children:"How to Embed the Quiz into Your Website"}),"\n",(0,n.jsxs)(t.p,{children:["You can embed your quiz into your website using an ",(0,n.jsx)(t.code,{children:"iframe"})," tag, just like the ",(0,n.jsx)(t.a,{href:"#example",children:(0,n.jsx)(t.code,{children:"Example"})})," part in this docs."]}),"\n",(0,n.jsx)(t.h3,{id:"find-the-quiz-url",children:"Find the Quiz URL"}),"\n",(0,n.jsxs)(t.p,{children:["Copy the URL of your quiz from the address bar of your browser. For example: ",(0,n.jsx)(t.code,{children:"https://mecsimcalc.com/app/6170581/thevenin_equivalent_circuit_calculator"})]}),"\n",(0,n.jsx)(t.h3,{id:"add-html-code-to-your-website",children:"Add HTML Code to Your Website"}),"\n",(0,n.jsxs)(t.p,{children:["Replace ",(0,n.jsx)(t.code,{children:"your_quiz_url"})," with the URL of your quiz."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-html",children:'<div style={{width: "100%", height: "600px", overflow: "hidden"}}><iframe src="your_quiz_url" width="100%" height="100%" title="MecSimCalc" style={{position:"relative", left:"-45px", top:"-48px"}} frameBorder="0"></iframe></div>\n\n'})}),"\n",(0,n.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,n.jsx)(t.p,{children:"Below showcases an app that collects quiz results and append them to a Google Spreadsheet."}),"\n",(0,n.jsx)("div",{style:{width:"100%",height:"600px",overflow:"hidden"},children:(0,n.jsx)("iframe",{src:"https://mecsimcalc.com/app/0554567/test_quiz_demo_google_sheet",width:"100%",height:"100%",title:"MecSimCalc",style:{position:"relative",left:"-45px",top:"-48px"},frameBorder:"0"})}),"\n",(0,n.jsxs)(t.p,{children:["As you can see, the results from the app above will ",(0,n.jsx)(t.strong,{children:"append"})," to the sheet. (We make delete previous result each time only for demonstration)"]}),"\n",(0,n.jsx)("iframe",{src:"https://docs.google.com/spreadsheets/d/1XX2gWauVwkACsIWUiF7cIpIlrL1eOjS3_Ub30tqet5o/edit?usp=sharing",style:{width:"100%",height:"400px",border:"0"},frameborder:"0"}),"\n",(0,n.jsxs)(t.p,{children:["For example, you can get student's ",(0,n.jsx)(t.code,{children:"name"})," and ",(0,n.jsx)(t.code,{children:"id"})," from the input, and calculate ",(0,n.jsx)(t.code,{children:"grade"})," through code. If you want this information to be exported to your own ",(0,n.jsx)(t.strong,{children:"Google Sheet"})," and ",(0,n.jsx)(t.strong,{children:"email"}),", you can do it like this:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:"\"\"\"\nAssume that inputs['name'] = \"Joe\", inputs['id'] = \"186234\", inputs['grade'] = 85\n\"\"\"\nimport mecsimcalc as msc\n\ndef main(inputs):\n    grade = ... #your logic here\n\n    #values you want to collect\n    values = [\n    [ inputs['name'], inputs['id'], grade ],\n    ]\n\n    # For Google Sheet:\n    service_account_info = {\n        # We will teach you how to get this later, don't worry\n    }\n    spreadsheet_id = 'your_spreadsheet_id_here'\n\n    msc.append_to_google_sheet(service_account_info, spreadsheet_id, values)\n\n\n    # For Gmail:\n    sender_email = 'sender@example.com'\n    receiver_email = 'receiver@example.com'\n    subject = 'Quiz Results'\n    app_password = 'your_app_password_here'\n\n    msc.send_gmail(sender_email, receiver_email, subject, app_password, values)\n    ...\n"})}),"\n",(0,n.jsxs)(t.p,{children:["The output will be like this:\n",(0,n.jsx)(t.img,{alt:"img alt",src:s(1807).Z+"",width:"1196",height:"100"}),"\n",(0,n.jsx)(t.img,{alt:"img alt",src:s(8856).Z+"",width:"1212",height:"262"})]})]})}function h(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},7424:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/algebraic_ex-19e4394dbcc2fd3075590b5d8b8f0c8e.png"},5565:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/canvas_ex-b50c8149042543da160ef40d40bd3f5b.png"},2435:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/canvas_ex2-b92586b7bc1cf2f8800e092494694ea7.png"},6364:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/canvas_token-cb5e45cee5d2029e0083c5f13424c88f.png"},8856:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/gmail_ex-9df9a6dc3318de8b29174e6e5f54195d.png"},6434:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/gmail_step_1-a2a7090dae865b80bb70fd946a93ffc1.png"},7454:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/numerical_ex-07bce923b230f90dd4cfb7471e757993.png"},2023:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/numerical_ex2-c3044c37f03924d131e874f55fd7fe0c.png"},1807:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/sheet_ex-ff85891e2850a2b5d672aed4dfc33603.png"},2402:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/sheet_step_1-66eedbb7521b1b2133fcddb4eb0d27fb.png"},5579:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/sheet_step_2-0a1c381072b5d638b1f9386ba648f01d.png"},9712:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/sheet_step_3-47fe65e827c7a8e187e9723ce6e34f97.png"},9263:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/sheet_step_4-b58776b11362568118ec820d9a773338.png"},1151:(e,t,s)=>{s.d(t,{Z:()=>l,a:()=>o});var n=s(7294);const i={},r=n.createContext(i);function o(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);