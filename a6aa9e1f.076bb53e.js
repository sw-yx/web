(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{111:function(e,a,t){"use strict";var n=t(0),r=t.n(n),l=t(106),m=t(102),c=t(108),o=t(107),i=t(118),s=t(104),g=t(46),E=t.n(g);const u=["January","February","March","April","May","June","July","August","September","October","November","December"];a.a=function(e){const{children:a,frontMatter:t,metadata:n,truncated:g,isBlogPostPage:d=!1}=e,{date:p,permalink:v,tags:_,readingTime:b}=n,{author:h,title:N,image:f,keywords:k}=t,w=t.author_url||t.authorURL,y=t.author_title||t.authorTitle,M=t.author_image_url||t.authorImageURL,P=Object(s.a)(f,{absolute:!0});return r.a.createElement(r.a.Fragment,null,r.a.createElement(c.a,null,k&&k.length&&r.a.createElement("meta",{name:"keywords",content:k.join(",")}),f&&r.a.createElement("meta",{property:"og:image",content:P}),f&&r.a.createElement("meta",{property:"twitter:image",content:P}),f&&r.a.createElement("meta",{name:"twitter:image:alt",content:"Image for "+N})),r.a.createElement("article",{className:d?void 0:"margin-bottom--xl"},(()=>{const e=d?"h1":"h2",a=p.substring(0,10).split("-"),t=a[0],n=u[parseInt(a[1],10)-1],m=parseInt(a[2],10);return r.a.createElement("header",null,r.a.createElement(e,{className:Object(l.a)("margin-bottom--sm",E.a.blogPostTitle)},d?N:r.a.createElement(o.a,{to:v},N)),r.a.createElement("div",{className:"margin-vert--md"},r.a.createElement("time",{dateTime:p,className:E.a.blogPostDate},n," ",m,", ",t," ",b&&r.a.createElement(r.a.Fragment,null," \xb7 ",Math.ceil(b)," min read"))),r.a.createElement("div",{className:"avatar margin-vert--md"},M&&r.a.createElement("a",{className:"avatar__photo-link avatar__photo",href:w,target:"_blank",rel:"noreferrer noopener"},r.a.createElement("img",{src:M,alt:h})),r.a.createElement("div",{className:"avatar__intro"},h&&r.a.createElement(r.a.Fragment,null,r.a.createElement("h4",{className:"avatar__name"},r.a.createElement("a",{href:w,target:"_blank",rel:"noreferrer noopener"},h)),r.a.createElement("small",{className:"avatar__subtitle"},y)))))})(),r.a.createElement("section",{className:"markdown"},r.a.createElement(m.a,{components:i.a},a)),(_.length>0||g)&&r.a.createElement("footer",{className:"row margin-vert--lg"},_.length>0&&r.a.createElement("div",{className:"col"},r.a.createElement("strong",null,"Tags:"),_.map((({label:e,permalink:a})=>r.a.createElement(o.a,{key:a,className:"margin-horiz--sm",to:a},e)))),g&&r.a.createElement("div",{className:"col text--right"},r.a.createElement(o.a,{to:n.permalink,"aria-label":"Read more about "+N},r.a.createElement("strong",null,"Read More"))))))}},99:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(103),m=t(109),c=t(111),o=t(107);var i=function(e){const{metadata:a}=e,{previousPage:t,nextPage:n}=a;return r.a.createElement("nav",{className:"pagination-nav","aria-label":"Blog list page navigation"},r.a.createElement("div",{className:"pagination-nav__item"},t&&r.a.createElement(o.a,{className:"pagination-nav__link",to:t},r.a.createElement("h4",{className:"pagination-nav__label"},"\xab Newer Entries"))),r.a.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},n&&r.a.createElement(o.a,{className:"pagination-nav__link",to:n},r.a.createElement("h4",{className:"pagination-nav__label"},"Older Entries \xbb"))))};a.default=function(e){const{metadata:a,items:t}=e,{siteConfig:{title:n}}=Object(l.a)(),o="/"===a.permalink?n:"Blog",{blogDescription:s}=a;return r.a.createElement(m.a,{title:o,description:s},r.a.createElement("div",{className:"container margin-vert--lg"},r.a.createElement("div",{className:"row"},r.a.createElement("main",{className:"col col--8 col--offset-2"},t.map((({content:e})=>r.a.createElement(c.a,{key:e.metadata.permalink,frontMatter:e.frontMatter,metadata:e.metadata,truncated:e.metadata.truncated},r.a.createElement(e,null)))),r.a.createElement(i,{metadata:a})))))}}}]);