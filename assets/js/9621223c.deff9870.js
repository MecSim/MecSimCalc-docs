"use strict";(self.webpackChunkmec_sim_calc_docs=self.webpackChunkmec_sim_calc_docs||[]).push([[9560],{3967:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>r,toc:()=>h});var t=i(5893),l=i(1151);const s={sidebar_label:"Large Files",sidebar_position:3},o="Working with large files",r={id:"files/large-files",title:"Working with large files",description:"If you have a very large file that is used in your Python code, it's not recommended to copy and paste the file contents directly into your code.",source:"@site/docs/files/large-files.md",sourceDirName:"files",slug:"/files/large-files",permalink:"/files/large-files",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_label:"Large Files",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Text Files",permalink:"/files/text-files"},next:{title:"Overview",permalink:"/maps/overview"}},a={},h=[{value:"Option 1: Custom code environment",id:"option-1-custom-code-environment",level:2},{value:"Step 1: Create a new custom code environment",id:"step-1-create-a-new-custom-code-environment",level:3},{value:"Calling functions from an uploaded Python file",id:"calling-functions-from-an-uploaded-python-file",level:4},{value:"Option 2: Fetching the file",id:"option-2-fetching-the-file",level:2},{value:"Step 1: Hosting the file",id:"step-1-hosting-the-file",level:3},{value:"Github",id:"github",level:4},{value:"Step 2: Getting the url",id:"step-2-getting-the-url",level:3},{value:"Github",id:"github-1",level:5},{value:"Step 3: Fetching the file",id:"step-3-fetching-the-file",level:3},{value:"Text files",id:"text-files",level:4},{value:"Excel spreadsheet files",id:"excel-spreadsheet-files",level:4},{value:"Image files",id:"image-files",level:4}];function c(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"working-with-large-files",children:"Working with large files"}),"\n",(0,t.jsxs)(n.p,{children:["If you have a ",(0,t.jsx)(n.em,{children:"very large file"})," that is used in your Python code, it's not recommended to copy and paste the file contents directly into your code."]}),"\n",(0,t.jsx)(n.p,{children:"Instead, it's recommended to either:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Create a new custom code environment that contains the file."}),"\n",(0,t.jsx)(n.li,{children:"Host the file on an external website and then fetch it in the code at runtime."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"The following instructions works for all file types."}),"\n",(0,t.jsx)(n.h2,{id:"option-1-custom-code-environment",children:"Option 1: Custom code environment"}),"\n",(0,t.jsx)(n.p,{children:"This is the recommended way to load in large files because the file will be available instantly without having to fetch it."}),"\n",(0,t.jsx)(n.h3,{id:"step-1-create-a-new-custom-code-environment",children:"Step 1: Create a new custom code environment"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Follow ",(0,t.jsx)(n.a,{href:"/code/environments",children:"these instructions"})," on building a custom environment.","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Add the large files in the ",(0,t.jsx)(n.a,{href:"/code/environments#step-4-add-files",children:"Add files"})," section."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.li,{children:"Once the environment is built and selected, read the file into the Python code:"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'with open("/home/hello.png", "r") as f:\n   data = f.read()\nprint(data)\n'})}),"\n",(0,t.jsx)(n.p,{children:"Follow the example in this video that explains how to upload an ANN .h5 file using a custom environment:"}),"\n",(0,t.jsx)("div",{style:{textAlign:"center"},children:(0,t.jsx)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/qpGAe80n4Io?si=0UnDCpg0uiDE1eE5&start=158",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0})}),"\n",(0,t.jsx)(n.h4,{id:"calling-functions-from-an-uploaded-python-file",children:"Calling functions from an uploaded Python file"}),"\n",(0,t.jsx)(n.p,{children:"You can upload a Python file to your custom environment and use the functions in your Python code!\nTo access the functions from the Python module simply append '/home/' to sys.path and then import all (*) from your module"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"import sys\nsys.path.append('/home/')\nfrom pythonModule import * // import all the functions from the external Python file\n\ndef main(inputs):\n   result = pythonFunction() // use a function\n"})}),"\n",(0,t.jsx)(n.p,{children:"Check out the following short video that explains exactly how to do this!"}),"\n",(0,t.jsx)("div",{style:{textAlign:"center"},children:(0,t.jsx)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/3oogJI3g3PM?si=pBZfMl1zrEEBMsVZ",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0})}),"\n",(0,t.jsx)(n.h2,{id:"option-2-fetching-the-file",children:"Option 2: Fetching the file"}),"\n",(0,t.jsx)(n.p,{children:"This option is useful if you do not want to create a new custom code environment, or if you want to use a file that is already hosted on the internet. However, this option will take longer to run the code because it needs to download the file from the internet."}),"\n",(0,t.jsx)(n.h3,{id:"step-1-hosting-the-file",children:"Step 1: Hosting the file"}),"\n",(0,t.jsx)(n.p,{children:"First, you must upload your file to a file-hosting service. You may skip this step if the file is already publicly available on the internet."}),"\n",(0,t.jsx)(n.h4,{id:"github",children:"Github"}),"\n",(0,t.jsx)(n.p,{children:"Github is a very popular free-to-use website that can host your files."}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Go to ",(0,t.jsx)(n.a,{href:"https://github.com",children:"github.com"}),"."]}),"\n",(0,t.jsx)(n.li,{children:"Create an account (if you don't already have one)."}),"\n",(0,t.jsxs)(n.li,{children:["On the homepage, click on ",(0,t.jsx)(n.strong,{children:"New"})," in the top left corner to create a new repository.","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Repositories are similar to folders that store your files."}),"\n",(0,t.jsx)(n.li,{children:"You can have more than one repositories. on your Github account."}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.img,{alt:"new repo",src:i(9605).Z+"",width:"377",height:"108"})}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["Create a new repository:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:'Give your repository a name in "Repository name".'}),"\n",(0,t.jsxs)(n.li,{children:["Select ",(0,t.jsx)(n.strong,{children:"Public"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Finally, click on ",(0,t.jsx)(n.strong,{children:"Create repository"}),"."]}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.img,{alt:"new repo",src:i(7081).Z+"",width:"916",height:"551"})}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["Upload files:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["If you see this screen, click on ",(0,t.jsx)(n.strong,{children:"uploading an existing file"}),"."]}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.img,{alt:"click upload",src:i(795).Z+"",width:"1297",height:"342"})}),"\n",(0,t.jsxs)(n.li,{children:["If you see this screen, click on ",(0,t.jsx)(n.strong,{children:"Add file"})," and then ",(0,t.jsx)(n.strong,{children:"Upload files"}),"."]}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.img,{alt:"click upload",src:i(4250).Z+"",width:"1302",height:"347"})}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["Upload your files:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Upload one or more files and then click on ",(0,t.jsx)(n.strong,{children:"Commit changes"})," to submit the files."]}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.img,{alt:"upload files",src:i(7095).Z+"",width:"1863",height:"920"})}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["Your uploaded files should now show up on the homepage of your repository.","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Your uploaded files are viewable at this url: ",(0,t.jsx)(n.code,{children:"github.com/<username>/<repo name>/"}),", where ",(0,t.jsx)(n.code,{children:"<username>"})," is your Github username, and ",(0,t.jsx)(n.code,{children:"<repo name>"})," is the name of the Gihub repository that your files are in."]}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.img,{alt:"uploaded files",src:i(1124).Z+"",width:"1300",height:"448"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"step-2-getting-the-url",children:"Step 2: Getting the url"}),"\n",(0,t.jsx)(n.p,{children:"Before you can fetch the file, you need to know the url of the file, which must be publicly accessible.\nThis url can be from any website (does not have to be from Github), the following instructions will use Github."}),"\n",(0,t.jsx)(n.admonition,{type:"caution",children:(0,t.jsxs)(n.p,{children:["The url must ",(0,t.jsx)(n.strong,{children:"only"})," contain the file you want, and can not be a webpage that contains the file along with other assets, such as text and images."]})}),"\n",(0,t.jsx)(n.h5,{id:"github-1",children:"Github"}),"\n",(0,t.jsx)(n.p,{children:"To fetch the url of files hosted on Github:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Go to the Github repository with the files.","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.img,{alt:"uploaded files",src:i(1124).Z+"",width:"1300",height:"448"})}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["Click on the filename to go to the file. For example, clicking on ",(0,t.jsx)(n.em,{children:"excel_file.xlsx"}),":","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.img,{alt:"excel file",src:i(3499).Z+"",width:"1706",height:"522"})}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["Copy the url of the webpage.","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["For example, ",(0,t.jsx)(n.code,{children:"https://github.com/w3ichen/static/blob/main/excel_file.xlsx"})]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["Add ",(0,t.jsx)(n.code,{children:"?raw=true"})," to the end of the url, which references the raw data of the file.","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["For example, ",(0,t.jsx)(n.code,{children:"https://github.com/w3ichen/static/blob/main/excel_file.xlsx?raw=true"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{type:"danger",children:(0,t.jsxs)(n.p,{children:["You ",(0,t.jsx)(n.strong,{children:"must"})," add ",(0,t.jsx)(n.code,{children:"?raw=true"})," to the end of the url for Github files"]})}),"\n",(0,t.jsx)(n.h3,{id:"step-3-fetching-the-file",children:"Step 3: Fetching the file"}),"\n",(0,t.jsx)(n.p,{children:"Once your file can be accessed on the web at a public url, you must first fetch the file into your Python code before you can use it.\nThere are many different functions available depending on the type of file, that will read in a file given an url."}),"\n",(0,t.jsx)(n.h4,{id:"text-files",children:"Text files"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'from urllib.request import urlopen\n\ndef main(inputs):\n    # Fetch file\n    url = "https://github.com/w3ichen/static/blob/main/text_file.txt?raw=true"\n    text_file = urlopen(url)\n\n    # Read entire file\n    lines = text_file.read().decode("utf-8")\n    print(lines)\n\n    return {"lines": lines}\n'})}),"\n",(0,t.jsx)(n.h4,{id:"excel-spreadsheet-files",children:"Excel spreadsheet files"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'import pandas as pd\n\ndef main(inputs):\n    url = "https://github.com/w3ichen/static/blob/main/excel_file.xlsx?raw=true"\n    dataframe = pd.read_excel(url)\n    print(dataframe)\n\n    return {"dataframe": dataframe}\n'})}),"\n",(0,t.jsx)(n.h4,{id:"image-files",children:"Image files"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'from PIL import Image\nfrom urllib.request import urlopen\n\ndef main(inputs):\n    img1_url = "https://github.com/w3ichen/static/blob/main/image_file.jpg?raw=true"\n    img1 = Image.open(urlopen(img1_url))\n\n    img2_url = "https://source.unsplash.com/random"\n    img2 = Image.open(urlopen(img2_url))\n\n    return {"img1": img1, "img2": img2}\n'})})]})}function d(e={}){const{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},795:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/click_upload_1-4aa3b0dc006a19e6cee622afffc8c46f.png"},4250:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/click_upload_2-595742fb65282f7095536ceae0440145.png"},7081:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/create_repo-3666e5605afce0d8e4e60cb64ec5115a.png"},3499:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/excel_file-42671a9220660d7612d11de1a57c441f.png"},9605:(e,n,i)=>{i.d(n,{Z:()=>t});const t="data:image/png;base64,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"},7095:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/upload_files-4bc18d9c7c4db273040c91fd40fd476c.png"},1124:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/uploaded_files-0c0beb89a1da4cb7a16ea81b15fb44c9.png"},1151:(e,n,i)=>{i.d(n,{Z:()=>r,a:()=>o});var t=i(7294);const l={},s=t.createContext(l);function o(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:o(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);