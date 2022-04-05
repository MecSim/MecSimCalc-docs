"use strict";(self.webpackChunkmec_sim_calc_docs=self.webpackChunkmec_sim_calc_docs||[]).push([[907],{3905:function(A,e,t){t.d(e,{Zo:function(){return l},kt:function(){return g}});var n=t(7294);function r(A,e,t){return e in A?Object.defineProperty(A,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):A[e]=t,A}function a(A,e){var t=Object.keys(A);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(A);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(A,e).enumerable}))),t.push.apply(t,n)}return t}function i(A){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?a(Object(t),!0).forEach((function(e){r(A,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(A,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(e){Object.defineProperty(A,e,Object.getOwnPropertyDescriptor(t,e))}))}return A}function p(A,e){if(null==A)return{};var t,n,r=function(A,e){if(null==A)return{};var t,n,r={},a=Object.keys(A);for(n=0;n<a.length;n++)t=a[n],e.indexOf(t)>=0||(r[t]=A[t]);return r}(A,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(A);for(n=0;n<a.length;n++)t=a[n],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(A,t)&&(r[t]=A[t])}return r}var o=n.createContext({}),u=function(A){var e=n.useContext(o),t=e;return A&&(t="function"==typeof A?A(e):i(i({},e),A)),t},l=function(A){var e=u(A.components);return n.createElement(o.Provider,{value:e},A.children)},m={inlineCode:"code",wrapper:function(A){var e=A.children;return n.createElement(n.Fragment,{},e)}},s=n.forwardRef((function(A,e){var t=A.components,r=A.mdxType,a=A.originalType,o=A.parentName,l=p(A,["components","mdxType","originalType","parentName"]),s=u(t),g=r,c=s["".concat(o,".").concat(g)]||s[g]||m[g]||a;return t?n.createElement(c,i(i({ref:e},l),{},{components:t})):n.createElement(c,i({ref:e},l))}));function g(A,e){var t=arguments,r=e&&e.mdxType;if("string"==typeof A||r){var a=t.length,i=new Array(a);i[0]=s;var p={};for(var o in e)hasOwnProperty.call(e,o)&&(p[o]=e[o]);p.originalType=A,p.mdxType="string"==typeof A?A:r,i[1]=p;for(var u=2;u<a;u++)i[u]=t[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}s.displayName="MDXCreateElement"},7629:function(A,e,t){t.r(e),t.d(e,{frontMatter:function(){return p},contentTitle:function(){return o},metadata:function(){return u},toc:function(){return l},default:function(){return s}});var n=t(7462),r=t(3366),a=(t(7294),t(3905)),i=["components"],p={sidebar_label:"Code Output",sidebar_position:2},o="Code Output",u={unversionedId:"Code/Code-output",id:"Code/Code-output",title:"Code Output",description:"Overview",source:"@site/docs/Code/Code-output.md",sourceDirName:"Code",slug:"/Code/Code-output",permalink:"/Code/Code-output",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_label:"Code Output",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/Code/Quick-overview"},next:{title:"Tools",permalink:"/Code/Tools"}},l=[{value:"Overview",id:"overview",children:[],level:2},{value:"Number Output",id:"number-output",children:[],level:2},{value:"String Output",id:"string-output",children:[],level:2},{value:"HTML Output",id:"html-output",children:[],level:2},{value:"File Data Output",id:"file-data-output",children:[],level:2}],m={toc:l};function s(A){var e=A.components,p=(0,r.Z)(A,i);return(0,a.kt)("wrapper",(0,n.Z)({},m,p,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"code-output"},"Code Output"),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"The outputs of the function ",(0,a.kt)("inlineCode",{parentName:"p"},"main")," are available to be inserted in the ",(0,a.kt)("strong",{parentName:"p"},"Output")," step. ",(0,a.kt)("strong",{parentName:"p"},"MecsimCalc")," platform expects the function ",(0,a.kt)("inlineCode",{parentName:"p"},"main")," to return a ",(0,a.kt)("a",{parentName:"p",href:"https://www.w3schools.com/python/python_dictionaries.asp"},"dictionary")," whose keys can be inserted in the ",(0,a.kt)("strong",{parentName:"p"},"Output")," editor. When the ",(0,a.kt)("em",{parentName:"p"},(0,a.kt)("strong",{parentName:"em"},"app"))," is run by the ",(0,a.kt)("em",{parentName:"p"},(0,a.kt)("strong",{parentName:"em"},"user")),", the corresponding values are then displayed. As described in the ",(0,a.kt)("a",{parentName:"p",href:"/Getting-Started/Example1"},"Distance Converter Example"),", the following figure shows the overall layout of the inputs, code, and output editor. The function ",(0,a.kt)("inlineCode",{parentName:"p"},"main")," returned a dictionary with three keys: ",(0,a.kt)("inlineCode",{parentName:"p"},'"Feet"'),", ",(0,a.kt)("inlineCode",{parentName:"p"},'"Inches"'),", and ",(0,a.kt)("inlineCode",{parentName:"p"},'"Metre"')," with the corresponding variables which were defined within the function itself: ",(0,a.kt)("inlineCode",{parentName:"p"},"ft"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"inches"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"m"),". The dictionary keys were then inserted in the output editor as ",(0,a.kt)("inlineCode",{parentName:"p"},"{{outputs.Feet}}"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"{{outputs.Inches}}"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"{{outputs.Metre}}"),". When a ",(0,a.kt)("em",{parentName:"p"},(0,a.kt)("strong",{parentName:"em"},"user"))," runs the ",(0,a.kt)("em",{parentName:"p"},(0,a.kt)("strong",{parentName:"em"},"app")),", the corresponding values are displayed."),(0,a.kt)("div",{style:{textAlign:"center"}},(0,a.kt)("p",null,(0,a.kt)("img",{alt:"img alt",src:t(579).Z}))),(0,a.kt)("p",null,"Below is an instance of running the ",(0,a.kt)("a",{parentName:"p",href:"https://mecsimcalc.com/app/4022206/distance_converter"},(0,a.kt)("em",{parentName:"a"},(0,a.kt)("strong",{parentName:"em"},"app")))," with an input of 10m."),(0,a.kt)("div",{style:{textAlign:"center"}},(0,a.kt)("p",null,(0,a.kt)("img",{alt:"img alt",src:t(3338).Z}))),(0,a.kt)("h2",{id:"number-output"},"Number Output"),(0,a.kt)("p",null,"The ",(0,a.kt)("em",{parentName:"p"},(0,a.kt)("strong",{parentName:"em"},"developer"))," can chose to return any numerical variables defined within the ",(0,a.kt)("inlineCode",{parentName:"p"},"main")," function. The numerical value can be output as is, or the ",(0,a.kt)("em",{parentName:"p"},(0,a.kt)("strong",{parentName:"em"},"developer"))," can chose to use any rounding or formatting function to ensure the number has a particular form. As shown in the figure above, the variable ",(0,a.kt)("inlineCode",{parentName:"p"},"ft")," was defined as an integer value while the value ",(0,a.kt)("inlineCode",{parentName:"p"},"inches")," was defined using the ",(0,a.kt)("inlineCode",{parentName:"p"},"round")," function. One can also use the ",(0,a.kt)("inlineCode",{parentName:"p"},".format()")," ",(0,a.kt)("a",{parentName:"p",href:"https://queirozf.com/entries/python-number-formatting-examples"},"python function")," for formatting numbers. For example, the following code outputs the variable ",(0,a.kt)("inlineCode",{parentName:"p"},"payment")," as a dollar value with two decimal places:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"def main(inputs):\n    ...\n    payment=......\n    return{\"Payment\",'${:,.2f}'.format(payment)}\n")),(0,a.kt)("p",null,"Please see the ",(0,a.kt)("a",{parentName:"p",href:"https://mecsimcalc.com/app/3333910/mortgage_calculator"},"Mortgage Calculator ",(0,a.kt)("em",{parentName:"a"},(0,a.kt)("strong",{parentName:"em"},"app")))," for an example whose output is in currency format."),(0,a.kt)("h2",{id:"string-output"},"String Output"),(0,a.kt)("p",null,"The ",(0,a.kt)("em",{parentName:"p"},(0,a.kt)("strong",{parentName:"em"},"developer"))," can choose to have the function ",(0,a.kt)("inlineCode",{parentName:"p"},"main")," return string variables. For example, the following code returns the string variable ",(0,a.kt)("inlineCode",{parentName:"p"},"t")," which is input by the user. The ",(0,a.kt)("inlineCode",{parentName:"p"},".replace()")," method is used to strip any spaces and create the string variable ",(0,a.kt)("inlineCode",{parentName:"p"},"s")," which is also returned by the functon ",(0,a.kt)("inlineCode",{parentName:"p"},"main"),". The two output strings are available in the output editor as: ",(0,a.kt)("inlineCode",{parentName:"p"},'{{ outputs["Original Text"] }}')," and ",(0,a.kt)("inlineCode",{parentName:"p"},'{{ outputs["Stripped Text"] }}'),". You can see this ",(0,a.kt)("em",{parentName:"p"},(0,a.kt)("strong",{parentName:"em"},"app"))," in action ",(0,a.kt)("a",{parentName:"p",href:"https://mecsimcalc.com/app/6796205/strip_spaces_function"},"here"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'def main(inputs):\n    t=inputs[\'input_0\']\n    s=t.replace(" ","")\n    return {"Original Text": t,"Stripped Text":s}\n')),(0,a.kt)("h2",{id:"html-output"},"HTML Output"),(0,a.kt)("p",null,"As described in ",(0,a.kt)("a",{parentName:"p",href:"../Getting-Started/Quick-overview#step-4-output"},"Step 4: Output"),", the ",(0,a.kt)("em",{parentName:"p"},(0,a.kt)("strong",{parentName:"em"},"developer"))," can design a ",(0,a.kt)("strong",{parentName:"p"},"smart")," output page using an ",(0,a.kt)("strong",{parentName:"p"},"Output")," editor which accepts html content. The ",(0,a.kt)("em",{parentName:"p"},(0,a.kt)("strong",{parentName:"em"},"developer"))," can choose to output any string of html format which can then be embedded in the ",(0,a.kt)("strong",{parentName:"p"},"Output")," editor. Please review ",(0,a.kt)("a",{parentName:"p",href:"/Getting-Started/Example3"},"Example 3")," which provides the details of outputting a table using html."),(0,a.kt)("h2",{id:"file-data-output"},"File Data Output"),(0,a.kt)("p",null,"The ",(0,a.kt)("em",{parentName:"p"},(0,a.kt)("strong",{parentName:"em"},"developer"))," can also choose to output file data as a string. The data can then be available for the ",(0,a.kt)("em",{parentName:"p"},(0,a.kt)("strong",{parentName:"em"},"user"))," to download as a file. More details are provided at a later section detailing managing files input and output through ",(0,a.kt)("strong",{parentName:"p"},"MecsimCalc"),"."))}s.isMDXComponent=!0},579:function(A,e,t){e.Z=t.p+"assets/images/appelements-a078b7b99fa11fe4029a3fcbe8562f62.png"},3338:function(A,e){e.Z="data:image/png;base64,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AQC4kgmIAAAMBEQAAAYCIgAAAwERAICBgAgAwEBABABgICACADAQEAEAGAiIAAAMBEQAAAYCIgAAAwERAICBgAgAwGCbA+L+/fvvueeeV199ddpf9/TTT19zXranVgAA3hXbGRCTC9+/rg+ISYQ33nhjguNsGwCAd8e2BcT2MmEfENfW1u6///5HHnmkdiPb/S4AAJfb9gTESoe71vUBsV5T7N9WzvbsJUYAAC6rbXsFscwC4v79+2+//fb+PWXvMgMAvMsERAAABgIiAAADAREA4IqTdPTMM88cP34824lkzz//fEJR7SakJRr94Ac/OHLkyHrfS+/KCojZyG6uv3Yj230HAIClt7Ky8vnPf/6rX/3q3Xff/Xd/93ef+tSndu/e/eijj95xxx1Jig8++ODf/u3ffvvb377pppv61HQJXVkB0a+5AQD43ve+9+yzzz7zzDPXXnvtF7/4xXPnzqVx//79N95444c//OHDhw9ndzE1XUJXVkCMBOFrzv8BlXz0/jIAsKMkDj7xxBNJR08++eTNN9/88ssvV/tzzz133XXXtZcM0+GOO+74+te/XruX1hUXEKMyYml3AQBg50gMe2BdNqolqemWW25pwSx58frrr3/22Wdr99La5oAIAMCilZWV2267rb1AWHnx/vvvX1tby26i2pe//OW77rrrtddeqw6XloAIAHDFqTeUn3nmmdqdvaGcXJh0mIx47ty5r371q/VdiZeQgAgAcMV58sknZ28o93nx+eef/7Vf+7U07t+//ytf+Ur9FMslJCACAFxZEsP+9E//9NOf/nTCWLV861vfuu222w4ePFi7Kysr99577x/90R89+OCD2a7GS0hABAC44qytrbV0GOfOnVtdXZ121qXl2LFjCWzT/iUlIAIAMBAQAQAYCIgAAAwERAAABgIiAACDbQiInwcA4JKaYtYl4hVEAAAGAiIAAAMBEQCAgYAIAMBAQAQAYCAgAgAwEBABABgIiAAADAREAAAGAiIAAAMBEQCAgYAIAMBAQAQAYCAgAgAwEBABABgIiAAADAREAAAGAiIAAAMBEQCAgYAIAMBAQAQAYCAgAgAwEBABABgIiAAADAREAAAGAiIAAAMBEQCAgYAIAMBAQAQAYHCBgLi6uiogAgDsKIl/CYECIgAAkwsHxIMHD1YrAAA7QeLfpgHx7NmzFRDbAQAAlluCXwXERMGNA+LJkycPHTp0/PjxOgAAwHJL8Ev8SwjcOCCeO3dubW1tZWXlxRdfzG4dAwBgWSXyJfgl/iUEJgoOATH/y05aT58+/frrrx84cGDv3r0///nP01I9AABYJol5CXuJfAl+iX8JgWlp6TCmgJjMWO8yHz58eN++fXv27Nm1a9cTTzzxOAAASyQBLzEvYS+RL8Fv8f3lmAJiZcTkxxMnThw5cuSFF15IqPzxuucBAFgKle4S8xL2EvkS/BL/Kh1GpcN4MyBGtebwmTNnEiSPHTt29OjRlVFmAQDgqjOFufMS8xL2Evnab7eJyoRlCohRx9Lp7LrEyTgFAMASqYxXeW/DdBhvBcSoHpHeAAAssSn2LaTDGAJiM3UHAGBJTbFvIxsHRAAAdiwBEQCAgYAIAMBAQAQAYCAgAgAw2DggTj/cAgDAkppi30aGgDh193sQAQCW3RT7tv49iNUjvc+tq9+vfQYAgCVSGa/yXouJUxw8bwqIdazSYUbWH9lbG50EAOAqNIW58+oP7iXybZYR3wyI1ZrD9ZLhP+9/7bZH911z/7/+x4/8SCmllFJKLVkl5iXsJfLVC4qLGXEKiO21w+//26uioVJKKaXU0lciX4Jf/zpipcOYAmKlw5MnT976pb2zwUoppZRSaikrwS/xrzLiEBDby4enTp06duzYr/zBc7ORSimllFJqKSvBL/EvIXD2IuIUEM+ePbu2traysjIbppRSSimllrgS/xIC23cizgPi6urqoUOHZmOUUkoppdQSV+JfQuDGAfHMmTM5dvDgwdkYpZRSSim1xJX4lxCYKLhpQHzllVdmY5RSSiml1BJX4p+AqJRSSiml3qoLBMQTJ04IiEoppZRSO6oS/xICBUSllFJKKTWVgKiUUkoppYYSEJVSSiml1FAColJqqeqxH7xa/5DFmXNvPPR/pl/U9V//5/97+bUzOdp6prJ7/NS//7f/daC2p2HnpX9GVc+fvHKq323Vt7fZ6lzTLJ12LqWUusJLQFRKLU/1ga928y9aPmb7YgJiHwGrf/Jf7WYjPX/00snardr9b8cz/2JAnPVpkyil1NVSAqJSankqUWyWxlrL2w2IqT7bZeNnK6fzseW/9ExLSkBUSi1fCYhKqeWppLH+beW+3m5ArPzXpkrIS2X+NkMOpcM//2xVQFRKLV8JiEqppaqksfqHLPpkdjEBcRrWaf0rICYUtneZk/yqBESl1PKVgKiUWsKqOFj/olXIu5iA2KJeVYJda6mAmO18TP9s1OuLAqJSailLQFRKLXO1AJd6uwEx+S9H613mCojZyISpen85nQVEpdRSloColFqSSjJLPtsiAiaoJa71R2fxbjEgrpw428ZWzqto+M8/W62pBESl1FKWgKiUWp5KGlv83YeV5FIJcP3RCpT90VlAbKGw36452zwColJqKUtAVEotVSWl1T9kJbv90aS6ZLvp2Hh0NjD6vNiHxT4UCohKqaUsAVEppZRSSg0lICqllFJKqaEERKWUUkopNZSAqJRSSimlhhIQlVJKKaXUUAKiUkoppZQaSkBUSimllFJDXSAgrq6uCohKKaWUUjuqEv8SAgVEpZRSSik11YUD4sGD05+lUkoppZRSO6ES/zYNiGfPnq2A+Ct/8NxsmFJKKaWUWspK8KuAmCi4cUA8efLkoUOHbvof/zobqZRSSimllrIS/BL/EgI3Dojnzp1bW1tbWVn53/+49z9/bD5YKaWUUkotWSXyJfgl/iUEJgoOATH/y05aT58+/frrrx84cOAb//df/sun//E//fd/mc2ilFJKKaWWoBLzEvYS+RL8Ev8SAhMFWzqMKSC2d5kPHz68b9++PXv27Nq164knnngcAIAlkoCXmJewl8iX4Lf4/nJMAbEyYvLjiRMnjhw58sILL+zdu/fH654HAGApVLpLzEvYS+RL8Ev8q3QYlQ7jzYAY1ZrDZ86cSZA8duzY0aNHV0aZBQCAq84U5s5LzEvYS+Rrv90mKhOWKSBGHUuns+sSJ+MUAABLpDJe5b0N02G8FRCjekR6AwCwxKbYt5AOYwiIzdQdAIAlNcW+jWwcEAEA2LEERAAABgIiAAADAREAgIGACADAQEAEAGAgIAIAMBAQAQAYCIgAAAwERAAABgIiAAADAREAgIGACADAQEAEAGAgIAIAMBAQAQAYCIgAAAwERAAABgIiAAADAREAgIGACADAQEAEAGAgIAIAMBAQAQAYCIgAAAwERAAABgIiAAADAREAgIGACADAQEAEAGAgIAIAMBAQAQAYCIgAAAwERAAABgIiAAADAREAgIGACADAQEAEAGAgIAIAMBAQAQAYCIgAAAwERAAABgIiAAADAREAgIGACADAQEAEAGAgIAIAMBAQAQAYCIgA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"}}]);