"use strict";(self.webpackChunkmec_sim_calc_docs=self.webpackChunkmec_sim_calc_docs||[]).push([[6103],{9209:(e,t,n)=>{n.r(t),n.d(t,{default:()=>j});n(7294);var s=n(512),a=n(1667),r=n(5281),i=n(3548),o=n(1059),l=n(4530),c=n(5999),d=n(2244),m=n(5893);function u(e){const{nextItem:t,prevItem:n}=e;return(0,m.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,c.I)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"}),children:[n&&(0,m.jsx)(d.Z,{...n,subLabel:(0,m.jsx)(c.Z,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post",children:"Newer post"})}),t&&(0,m.jsx)(d.Z,{...t,subLabel:(0,m.jsx)(c.Z,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post",children:"Older post"}),isNext:!0})]})}function h(){const{assets:e,metadata:t}=(0,i.nO)(),{title:n,description:s,date:r,tags:o,authors:l,frontMatter:c}=t,{keywords:d}=c,u=e.image??c.image;return(0,m.jsxs)(a.d,{title:n,description:s,keywords:d,image:u,children:[(0,m.jsx)("meta",{property:"og:type",content:"article"}),(0,m.jsx)("meta",{property:"article:published_time",content:r}),l.some((e=>e.url))&&(0,m.jsx)("meta",{property:"article:author",content:l.map((e=>e.url)).filter(Boolean).join(",")}),o.length>0&&(0,m.jsx)("meta",{property:"article:tag",content:o.map((e=>e.label)).join(",")})]})}var g=n(5742);function x(){const e=(0,i.iZ)();return(0,m.jsx)(g.Z,{children:(0,m.jsx)("script",{type:"application/ld+json",children:JSON.stringify(e)})})}var f=n(9407),p=n(7662);function v(e){let{sidebar:t,children:n}=e;const{metadata:s,toc:a}=(0,i.nO)(),{nextItem:r,prevItem:c,frontMatter:d}=s,{hide_table_of_contents:h,toc_min_heading_level:g,toc_max_heading_level:x}=d;return(0,m.jsxs)(o.Z,{sidebar:t,toc:!h&&a.length>0?(0,m.jsx)(f.Z,{toc:a,minHeadingLevel:g,maxHeadingLevel:x}):void 0,children:[(0,m.jsx)(p.Z,{metadata:s}),(0,m.jsx)(l.Z,{children:n}),(r||c)&&(0,m.jsx)(u,{nextItem:r,prevItem:c})]})}function j(e){const t=e.content;return(0,m.jsx)(i.n4,{content:e.content,isBlogPostPage:!0,children:(0,m.jsxs)(a.FG,{className:(0,s.Z)(r.k.wrapper.blogPages,r.k.page.blogPostPage),children:[(0,m.jsx)(h,{}),(0,m.jsx)(x,{}),(0,m.jsx)(v,{sidebar:e.sidebar,children:(0,m.jsx)(t,{})})]})})}},3230:(e,t,n)=>{n.d(t,{Z:()=>c});n(7294);var s=n(512),a=n(4061),r=n(5281),i=n(9047),o=n(5893);function l(e){let{className:t}=e;return(0,o.jsx)(i.Z,{type:"caution",title:(0,o.jsx)(a.cI,{}),className:(0,s.Z)(t,r.k.common.unlistedBanner),children:(0,o.jsx)(a.eU,{})})}function c(e){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(a.T$,{}),(0,o.jsx)(l,{...e})]})}},7662:(e,t,n)=>{n.d(t,{Z:()=>d});n(7294);var s=n(512),a=n(4061),r=n(5281),i=n(9047),o=n(5893);function l(e){let{className:t}=e;return(0,o.jsx)(i.Z,{type:"caution",title:(0,o.jsx)(a.ht,{}),className:(0,s.Z)(t,r.k.common.draftBanner),children:(0,o.jsx)(a.xo,{})})}var c=n(3230);function d(e){let{metadata:t}=e;const{unlisted:n,frontMatter:s}=t;return(0,o.jsxs)(o.Fragment,{children:[(n||s.unlisted)&&(0,o.jsx)(c.Z,{}),s.draft&&(0,o.jsx)(l,{})]})}},9407:(e,t,n)=>{n.d(t,{Z:()=>c});n(7294);var s=n(512),a=n(3743);const r={tableOfContents:"tableOfContents_bqdL",docItemContainer:"docItemContainer_F8PC"};var i=n(5893);const o="table-of-contents__link toc-highlight",l="table-of-contents__link--active";function c(e){let{className:t,...n}=e;return(0,i.jsx)("div",{className:(0,s.Z)(r.tableOfContents,"thin-scrollbar",t),children:(0,i.jsx)(a.Z,{...n,linkClassName:o,linkActiveClassName:l})})}},3743:(e,t,n)=>{n.d(t,{Z:()=>x});var s=n(7294),a=n(6668);function r(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const s=n.slice(2,e.level);e.parentIndex=Math.max(...s),n[e.level]=t}));const s=[];return t.forEach((e=>{const{parentIndex:n,...a}=e;n>=0?t[n].children.push(a):s.push(a)})),s}function i(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:s}=e;return t.flatMap((e=>{const t=i({toc:e.children,minHeadingLevel:n,maxHeadingLevel:s});return function(e){return e.level>=n&&e.level<=s}(e)?[{...e,children:t}]:t}))}function o(e){const t=e.getBoundingClientRect();return t.top===t.bottom?o(e.parentNode):t}function l(e,t){let{anchorTopOffset:n}=t;const s=e.find((e=>o(e).top>=n));if(s){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(o(s))?s:e[e.indexOf(s)-1]??null}return e[e.length-1]??null}function c(){const e=(0,s.useRef)(0),{navbar:{hideOnScroll:t}}=(0,a.L)();return(0,s.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function d(e){const t=(0,s.useRef)(void 0),n=c();(0,s.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:s,linkActiveClassName:a,minHeadingLevel:r,maxHeadingLevel:i}=e;function o(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(s),o=function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e;const s=[];for(let a=t;a<=n;a+=1)s.push(`h${a}.anchor`);return Array.from(document.querySelectorAll(s.join()))}({minHeadingLevel:r,maxHeadingLevel:i}),c=l(o,{anchorTopOffset:n.current}),d=e.find((e=>c&&c.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(a),e.classList.add(a),t.current=e):e.classList.remove(a)}(e,e===d)}))}return document.addEventListener("scroll",o),document.addEventListener("resize",o),o(),()=>{document.removeEventListener("scroll",o),document.removeEventListener("resize",o)}}),[e,n])}var m=n(3692),u=n(5893);function h(e){let{toc:t,className:n,linkClassName:s,isChild:a}=e;return t.length?(0,u.jsx)("ul",{className:a?void 0:n,children:t.map((e=>(0,u.jsxs)("li",{children:[(0,u.jsx)(m.Z,{to:`#${e.id}`,className:s??void 0,dangerouslySetInnerHTML:{__html:e.value}}),(0,u.jsx)(h,{isChild:!0,toc:e.children,className:n,linkClassName:s})]},e.id)))}):null}const g=s.memo(h);function x(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:o="table-of-contents__link",linkActiveClassName:l,minHeadingLevel:c,maxHeadingLevel:m,...h}=e;const x=(0,a.L)(),f=c??x.tableOfContents.minHeadingLevel,p=m??x.tableOfContents.maxHeadingLevel,v=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return(0,s.useMemo)((()=>i({toc:r(t),minHeadingLevel:n,maxHeadingLevel:a})),[t,n,a])}({toc:t,minHeadingLevel:f,maxHeadingLevel:p});return d((0,s.useMemo)((()=>{if(o&&l)return{linkClassName:o,linkActiveClassName:l,minHeadingLevel:f,maxHeadingLevel:p}}),[o,l,f,p])),(0,u.jsx)(g,{toc:v,className:n,linkClassName:o,...h})}},4061:(e,t,n)=>{n.d(t,{T$:()=>l,cI:()=>i,eU:()=>o,ht:()=>c,xo:()=>d});n(7294);var s=n(5999),a=n(5742),r=n(5893);function i(){return(0,r.jsx)(s.Z,{id:"theme.contentVisibility.unlistedBanner.title",description:"The unlisted content banner title",children:"Unlisted page"})}function o(){return(0,r.jsx)(s.Z,{id:"theme.contentVisibility.unlistedBanner.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function l(){return(0,r.jsx)(a.Z,{children:(0,r.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}function c(){return(0,r.jsx)(s.Z,{id:"theme.contentVisibility.draftBanner.title",description:"The draft content banner title",children:"Draft page"})}function d(){return(0,r.jsx)(s.Z,{id:"theme.contentVisibility.draftBanner.message",description:"The draft content banner message",children:"This page is a draft. It will only be visible in dev and be excluded from the production build."})}},6649:(e,t,n)=>{n.d(t,{Z:()=>r});var s=n(7294),a=n(5893);function r(){return(0,s.useEffect)((()=>{window.DiscourseEmbed={discourseUrl:"https://community.mecsimcalc.com/",discourseEmbedUrl:window.location.href};var e=document.createElement("script");e.type="text/javascript",e.async=!0,e.src=window.DiscourseEmbed.discourseUrl+"javascripts/embed.js",(document.getElementsByTagName("head")[0]||document.getElementsByTagName("body")[0]).appendChild(e)}),[]),(0,a.jsx)("div",{id:"discourse-comments",style:{marginTop:"50px"}})}},4530:(e,t,n)=>{n.d(t,{Z:()=>A});n(7294);var s=n(512),a=n(3548),r=n(5893);function i(e){let{children:t,className:n}=e;return(0,r.jsx)("article",{className:n,children:t})}var o=n(3692);const l={title:"title_f1Hy"};function c(e){let{className:t}=e;const{metadata:n,isBlogPostPage:i}=(0,a.nO)(),{permalink:c,title:d}=n,m=i?"h1":"h2";return(0,r.jsx)(m,{className:(0,s.Z)(l.title,t),children:i?d:(0,r.jsx)(o.Z,{to:c,children:d})})}var d=n(5999),m=n(8824),u=n(9788);const h={container:"container_mt6G"};function g(e){let{readingTime:t}=e;const n=function(){const{selectMessage:e}=(0,m.c)();return t=>{const n=Math.ceil(t);return e(n,(0,d.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:n}))}}();return(0,r.jsx)(r.Fragment,{children:n(t)})}function x(e){let{date:t,formattedDate:n}=e;return(0,r.jsx)("time",{dateTime:t,children:n})}function f(){return(0,r.jsx)(r.Fragment,{children:" \xb7 "})}function p(e){let{className:t}=e;const{metadata:n}=(0,a.nO)(),{date:i,readingTime:o}=n,l=(0,u.P)({day:"numeric",month:"long",year:"numeric",timeZone:"UTC"});return(0,r.jsxs)("div",{className:(0,s.Z)(h.container,"margin-vert--md",t),children:[(0,r.jsx)(x,{date:i,formattedDate:(c=i,l.format(new Date(c)))}),void 0!==o&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(f,{}),(0,r.jsx)(g,{readingTime:o})]})]});var c}var v=n(6788);const j={authorCol:"authorCol_Hf19",imageOnlyAuthorRow:"imageOnlyAuthorRow_pa_O",imageOnlyAuthorCol:"imageOnlyAuthorCol_G86a"};function b(e){let{className:t}=e;const{metadata:{authors:n},assets:i}=(0,a.nO)();if(0===n.length)return null;const o=n.every((e=>{let{name:t}=e;return!t})),l=1===n.length;return(0,r.jsx)("div",{className:(0,s.Z)("margin-top--md margin-bottom--sm",o?j.imageOnlyAuthorRow:"row",t),children:n.map(((e,t)=>(0,r.jsx)("div",{className:(0,s.Z)(!o&&(l?"col col--12":"col col--6"),o?j.imageOnlyAuthorCol:j.authorCol),children:(0,r.jsx)(v.Z,{author:{...e,imageURL:i.authorsImageUrls[t]??e.imageURL}})},t)))})}function N(){return(0,r.jsxs)("header",{children:[(0,r.jsx)(c,{}),(0,r.jsx)(p,{}),(0,r.jsx)(b,{})]})}var Z=n(8780),y=n(4332);function L(e){let{children:t,className:n}=e;const{isBlogPostPage:i}=(0,a.nO)();return(0,r.jsx)("div",{id:i?Z.uR:void 0,className:(0,s.Z)("markdown",n),children:(0,r.jsx)(y.Z,{children:t})})}var _=n(5281),C=n(7265),k=n(1526);function w(){return(0,r.jsx)("b",{children:(0,r.jsx)(d.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts",children:"Read more"})})}function T(e){const{blogPostTitle:t,...n}=e;return(0,r.jsx)(o.Z,{"aria-label":(0,d.I)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:t}),...n,children:(0,r.jsx)(w,{})})}function H(){const{metadata:e,isBlogPostPage:t}=(0,a.nO)(),{tags:n,title:i,editUrl:o,hasTruncateMarker:l,lastUpdatedBy:c,lastUpdatedAt:d}=e,m=!t&&l,u=n.length>0;if(!(u||m||o))return null;if(t){const e=!!(o||d||c);return(0,r.jsxs)("footer",{className:"docusaurus-mt-lg",children:[u&&(0,r.jsx)("div",{className:(0,s.Z)("row","margin-top--sm",_.k.blog.blogFooterEditMetaRow),children:(0,r.jsx)("div",{className:"col",children:(0,r.jsx)(k.Z,{tags:n})})}),e&&(0,r.jsx)(C.Z,{className:(0,s.Z)("margin-top--sm",_.k.blog.blogFooterEditMetaRow),editUrl:o,lastUpdatedAt:d,lastUpdatedBy:c})]})}return(0,r.jsxs)("footer",{className:"row docusaurus-mt-lg",children:[u&&(0,r.jsx)("div",{className:(0,s.Z)("col",{"col--9":m}),children:(0,r.jsx)(k.Z,{tags:n})}),m&&(0,r.jsx)("div",{className:(0,s.Z)("col text--right",{"col--3":u}),children:(0,r.jsx)(T,{blogPostTitle:i,to:e.permalink})})]})}function O(e){let{children:t,className:n}=e;const o=function(){const{isBlogPostPage:e}=(0,a.nO)();return e?void 0:"margin-bottom--xl"}();return(0,r.jsxs)(i,{className:(0,s.Z)(o,n),children:[(0,r.jsx)(N,{}),(0,r.jsx)(L,{children:t}),(0,r.jsx)(H,{})]})}var I=n(6649);function A(e){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(O,{...e}),(0,r.jsx)(I.Z,{})]})}}}]);