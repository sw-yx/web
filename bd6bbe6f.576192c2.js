(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{102:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return d}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=o.a.createContext({}),p=function(e){var t=o.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=p(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),s=p(r),b=n,d=s["".concat(i,".").concat(b)]||s[b]||f[b]||a;return r?o.a.createElement(d,c(c({ref:t},l),{},{components:r})):o.a.createElement(d,c({ref:t},l))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=b;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var l=2;l<a;l++)i[l]=r[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},81:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return u})),r.d(t,"default",(function(){return p}));var n=r(2),o=r(6),a=(r(0),r(102)),i={title:"Hello Wasp!",author:"Martin Sosic",author_title:"Co-founder @ Wasp",author_url:"https://github.com/martinsos",tags:["wasp"]},c={permalink:"/blog/2019/09/01/hello-wasp",source:"@site/blog/2019-09-01-hello-wasp.md",description:"About a year or so ago, brother and I started discussing how awesome it would be to have a programming language that would understand what \u201cweb app\u201d means. Such language would, on one hand, serve as an expressive specification of the web app, while on the other hand, it would take care of \u201cboring\u201d work for us, while we could focus on the business logic specific for our web app.",date:"2019-09-01T00:00:00.000Z",tags:[{label:"wasp",permalink:"/blog/tags/wasp"}],title:"Hello Wasp!",readingTime:5.335,truncated:!0,prevItem:{title:"Journey to YCombinator",permalink:"/blog/2021/02/23/journey-to-ycombinator"}},u=[],l={rightToc:u};function p(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"About a year or so ago, brother and I started discussing how awesome it would be to have a programming language that would understand what \u201cweb app\u201d means. Such language would, on one hand, serve as an expressive specification of the web app, while on the other hand, it would take care of \u201cboring\u201d work for us, while we could focus on the business logic specific for our web app."),Object(a.b)("p",null,"Step by step, the idea has started to take a more concrete shape, and Wasp (Web Application SPecification language) came to life! While still very early, we are writing this blog post to explain why are we building Wasp, what is the current status and what the future may hold."))}p.isMDXComponent=!0}}]);