"use strict";(self.webpackChunkmec_sim_calc_docs=self.webpackChunkmec_sim_calc_docs||[]).push([[4013],{8665:(e,t,a)=>{a.d(t,{Z:()=>E});var l=a(7294),n=a(6010),s=a(2582),c=a(9960);const r="sidebar_q+wC",m="sidebarItemTitle_9G5K",i="sidebarItemList_6T4b",o="sidebarItem_cjdF",g="sidebarItemLink_zyXk",d="sidebarItemLinkActive_wcJs";var u=a(5999);function b(e){let{sidebar:t}=e;return 0===t.items.length?null:l.createElement("nav",{className:(0,n.Z)(r,"thin-scrollbar"),"aria-label":(0,u.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},l.createElement("div",{className:(0,n.Z)(m,"margin-bottom--md")},t.title),l.createElement("ul",{className:i},t.items.map((e=>l.createElement("li",{key:e.permalink,className:o},l.createElement(c.Z,{isNavLink:!0,to:e.permalink,className:g,activeClassName:d},e.title))))))}const E=function(e){const{sidebar:t,toc:a,children:c,...r}=e,m=t&&t.items.length>0;return l.createElement(s.Z,r,l.createElement("div",{className:"container margin-vert--lg"},l.createElement("div",{className:"row"},m&&l.createElement("aside",{className:"col col--3"},l.createElement(b,{sidebar:t})),l.createElement("main",{className:(0,n.Z)("col",{"col--7":m,"col--9 col--offset-1":!m}),itemScope:!0,itemType:"http://schema.org/Blog"},c),a&&l.createElement("div",{className:"col col--2"},a))))}},497:(e,t,a)=>{a.r(t),a.d(t,{default:()=>o});var l=a(7294),n=a(8665),s=a(7774),c=a(3810);const r="tag_7kA+";function m(e){let{letterEntry:t}=e;return l.createElement("article",null,l.createElement("h2",null,t.letter),l.createElement("ul",{className:"padding--none"},t.tags.map((e=>l.createElement("li",{key:e.permalink,className:r},l.createElement(s.Z,e))))),l.createElement("hr",null))}const i=function(e){let{tags:t}=e;const a=(0,c.PZ)(t);return l.createElement("section",{className:"margin-vert--lg"},a.map((e=>l.createElement(m,{key:e.letter,letterEntry:e}))))};const o=function(e){const{tags:t,sidebar:a}=e,s=(0,c.MA)();return l.createElement(n.Z,{title:s,wrapperClassName:c.kM.wrapper.blogPages,pageClassName:c.kM.page.blogTagsListPage,searchMetadata:{tag:"blog_tags_list"},sidebar:a},l.createElement("h1",null,s),l.createElement(i,{tags:Object.values(t)}))}},7774:(e,t,a)=>{a.d(t,{Z:()=>i});var l=a(7294),n=a(6010),s=a(9960);const c="tag_WK-t",r="tagRegular_LXbV",m="tagWithCount_S5Zl";const i=function(e){const{permalink:t,name:a,count:i}=e;return l.createElement(s.Z,{href:t,className:(0,n.Z)(c,{[r]:!i,[m]:i})},a,i&&l.createElement("span",null,i))}}}]);