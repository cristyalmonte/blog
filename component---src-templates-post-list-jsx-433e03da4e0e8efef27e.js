(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{EEJ8:function(e,t,a){"use strict";var n=a("q1tI"),l=a.n(n),r=a("Wbzz"),o=a("ma3e");t.a=function(e){var t=e.pageContext,a=t.previousPagePath,n=t.nextPagePath;return l.a.createElement("div",null,a&&l.a.createElement(r.Link,{style:{float:"left",paddingBottom:"100px",paddingTop:"30px"},to:a},l.a.createElement(o.a,null)," Prev"," "),n&&l.a.createElement(r.Link,{style:{float:"right",paddingBottom:"100px",paddingTop:"30px"},to:n},"Next ",l.a.createElement(o.b,null)))}},GnX3:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),l=a.n(n),r=a("L12J"),o=a("JpBF"),c=a("EEJ8");t.default=function(e){var t=e.data,a=e.pageContext,n=t.allMarkdownRemark.edges;return l.a.createElement(r.a,null,l.a.createElement("h1",{style:{textAlign:"center",marginTop:"80px"}},"Articles"),n.map((function(e){var t=e.node;return l.a.createElement(o.a,{title:t.frontmatter.title,author:t.frontmatter.author,date:t.frontmatter.date,body:t.excerpt,slug:t.fields.slug,tags:t.frontmatter.tags,fluid:t.frontmatter.image.childImageSharp.fluid})})),l.a.createElement(c.a,{pageContext:a}))}},JpBF:function(e,t,a){"use strict";var n=a("q1tI"),l=a.n(n),r=a("Wbzz"),o=a("9eSz"),c=a.n(o),s=a("qWYD"),m=a.n(s),u=a("owIM");t.a=function(e){var t=e.title,a=e.author,n=e.date,o=e.body,s=e.slug,i=e.tags,p=e.fluid;return l.a.createElement("div",{className:m.a.card},l.a.createElement("div",{key:t,className:m.a.post},l.a.createElement("div",{className:m.a.cover},l.a.createElement(r.Link,{to:s,key:s},l.a.createElement(c.a,{fluid:p,title:o,alt:t}))),l.a.createElement(r.Link,{to:s,key:s},l.a.createElement("div",{className:m.a.content},l.a.createElement("h2",null,t),l.a.createElement("label",null,"by: ",a,", "),n?l.a.createElement("label",null,n):null,l.a.createElement("p",null,o),l.a.createElement("ul",{className:m.a.postTags},i.map((function(e){return l.a.createElement("li",null,l.a.createElement(r.Link,{to:"/"+Object(u.slugify)(e)},l.a.createElement("div",{className:m.a.badge},e)))})))))))}},owIM:function(e,t){e.exports={slugify:function(e){return e.toString().toLowerCase().replace(/\s+/g,"-").replace(/[^\w-]+/g,"").replace(/--+/g,"-").replace(/^-+/,"").replace(/-+$/,"")}}},qWYD:function(e,t,a){e.exports={container:"post-module--container--1GqoF",post:"post-module--post--3YYTK",cover:"post-module--cover--1sFCY",content:"post-module--content--2AklI",badge:"post-module--badge--3Xj_m",card:"post-module--card--2tdNb",postTags:"post-module--postTags--1TEhm",space:"post-module--space--1AOZh"}}}]);
//# sourceMappingURL=component---src-templates-post-list-jsx-433e03da4e0e8efef27e.js.map