(function(){"use strict";var e={531:function(e,t,n){var a=n(9242),i=n(3396),r={__name:"App",setup(e){return(e,t)=>{const n=(0,i.up)("router-view");return(0,i.wg)(),(0,i.j4)(n)}}};const o=r;var l=o,s=n(678),c=n(4870);const d=e=>((0,i.dD)("data-v-8fcf82ee"),e=e(),(0,i.Cn)(),e),u={id:"navbar"},p={id:"links"},m=(0,i.Uk)("Home"),g=(0,i.Uk)("About"),v=(0,i.Uk)("Projects"),h=d((()=>(0,i._)("hr",{id:"dividor"},null,-1)));function _(e,t){const n=(0,i.up)("router-link");return(0,i.wg)(),(0,i.iD)("div",u,[(0,i._)("div",p,[(0,i.Wm)(n,{to:"/"},{default:(0,i.w5)((()=>[m])),_:1}),(0,i.Wm)(n,{to:"/about"},{default:(0,i.w5)((()=>[g])),_:1}),(0,i.Wm)(n,{to:"/project"},{default:(0,i.w5)((()=>[v])),_:1})]),h])}var f=n(89);const b={},w=(0,f.Z)(b,[["render",_],["__scopeId","data-v-8fcf82ee"]]);var k=w,y=n.p+"img/github.ef01f285.svg",S=n.p+"img/facebook.4d630db3.svg",j=n.p+"img/email.39ad9eb5.svg";const D=e=>((0,i.dD)("data-v-f467a394"),e=e(),(0,i.Cn)(),e),I=D((()=>(0,i._)("h1",null,"Hello, I am Daniel Mihalik",-1))),C=D((()=>(0,i._)("hr",null,null,-1))),U=D((()=>(0,i._)("h2",null,[(0,i.Uk)(" I am a student at "),(0,i._)("span",null,"Imperial"),(0,i.Uk)(" doing "),(0,i._)("span",null,"programming"),(0,i.Uk)(" and "),(0,i._)("span",null,"web development")],-1))),L={id:"socials"},O={href:"https://github.com/darida12321",target:"_blank"},H=["src"],x={href:"https://www.facebook.com/profile.php?id=100008449800227",target:"_blank"},W=["src"],P={href:"https://mail.google.com/mail/?view=cm&source=mailto&to=[dani.mihalik@gmail.com]",target:"_blank"},A=["src"];var Y={__name:"HomeView",setup(e){return(e,t)=>((0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i.Wm)(k),I,C,U,(0,i._)("div",L,[(0,i._)("a",O,[(0,i._)("img",{src:(0,c.SU)(y),alt:"",class:"icon"},null,8,H)]),(0,i._)("a",x,[(0,i._)("img",{src:(0,c.SU)(S),alt:"",class:"icon"},null,8,W)]),(0,i._)("a",P,[(0,i._)("img",{src:(0,c.SU)(j),alt:"",class:"icon"},null,8,A)])])],64))}};const T=(0,f.Z)(Y,[["__scopeId","data-v-f467a394"]]);var K=T,z=n(7139),V=n.p+"img/user.377b6216.svg";const M=e=>((0,i.dD)("data-v-266fb74e"),e=e(),(0,i.Cn)(),e),Z={id:"profile"},F={id:"picture"},J=["src"],q=M((()=>(0,i._)("div",{id:"about"},[(0,i._)("h1",null,"About me"),(0,i._)("hr"),(0,i._)("p",null,[(0,i.Uk)("I am a computer science student at Imperial College London."),(0,i._)("br"),(0,i._)("br"),(0,i.Uk)(" My passion for programming started at a young age, and I have been doing game design, web development and general hobby programming ever since.")])],-1))),N={id:"skills"},R=M((()=>(0,i._)("h1",null,"Skills",-1))),G=M((()=>(0,i._)("hr",null,null,-1))),B={id:"skill-list"},E=M((()=>(0,i._)("circle",{cx:"5rem",cy:"5rem",r:"4.6rem"},null,-1))),Q={class:"skill-percent"},X={class:"skill-language"},$={id:"tools"},ee=M((()=>(0,i._)("h1",null,"Other tools I know",-1))),te=M((()=>(0,i._)("hr",null,null,-1))),ne={id:"tool-list"},ae={class:"tool-name"},ie={class:"boxes"};var re={__name:"AboutView",setup(e){const t=[{name:"C++",percent:90},{name:"C",percent:80},{name:"Java",percent:80},{name:"Rust",percent:75}],n=[{name:"JS",val:3},{name:"Python",val:3},{name:"Haskell",val:2},{name:"Scala",val:2},{name:"HTML",val:2},{name:"CSS",val:2},{name:"Vue",val:1},{name:"express",val:1},{name:"React",val:1},{name:"Kotlin",val:0},{name:"Firebase",val:0}];return(e,a)=>((0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i.Wm)(k),(0,i._)("div",Z,[(0,i._)("div",F,[(0,i._)("img",{src:(0,c.SU)(V),alt:""},null,8,J)]),q]),(0,i._)("div",N,[R,G,(0,i._)("div",B,[((0,i.wg)(),(0,i.iD)(i.HY,null,(0,i.Ko)(t,(e=>(0,i._)("div",{key:e,class:"skill"},[((0,i.wg)(),(0,i.iD)("svg",null,[E,(0,i._)("circle",{cx:"5rem",cy:"5rem",r:"4.6rem",style:(0,z.j5)({"stroke-dashoffset":462-462*e.percent/100})},null,4)])),(0,i._)("p",Q,(0,z.zw)(e.percent)+"%",1),(0,i._)("p",X,(0,z.zw)(e.name),1)]))),64))])]),(0,i._)("div",$,[ee,te,(0,i._)("div",ne,[((0,i.wg)(),(0,i.iD)(i.HY,null,(0,i.Ko)(n,((e,t)=>(0,i._)("div",{key:t,class:"tool"},[(0,i._)("p",ae,(0,z.zw)(e.name),1),(0,i._)("div",ie,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)([...Array(e.val).keys()],(e=>((0,i.wg)(),(0,i.iD)("div",{key:e,class:"tool-box filled"})))),128)),((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)([...Array(3-e.val).keys()],(e=>((0,i.wg)(),(0,i.iD)("div",{key:e,class:"tool-box empty"})))),128))])]))),64))])])],64))}};const oe=(0,f.Z)(re,[["__scopeId","data-v-266fb74e"]]);var le=oe,se=n.p+"img/itch-io.903908cc.svg",ce=n.p+"img/right.c5dbfbfe.svg";const de=e=>((0,i.dD)("data-v-44786b9a"),e=e(),(0,i.Cn)(),e),ue={id:"project-box-outer"},pe={id:"project-box"},me={id:"title"},ge=de((()=>(0,i._)("div",{id:"seperation"},null,-1))),ve={id:"content"},he=["src"],_e={id:"desc"},fe={id:"tools"},be={id:"buttons"},we=["href"],ke={id:"code-button",class:"button"},ye=["src"],Se=["src"],je=["href"],De={id:"learn-button",class:"button"},Ie=de((()=>(0,i._)("p",null,"Learn more",-1))),Ce=["src"];var Ue={__name:"ProjectBox",props:{width:String,height:String,data:{title:String,desc:String,tools:[String],codeLink:String,learnLink:String}},setup(e){const t=e;return(0,a.sj)((e=>({"6e705cdd":t.width,"45cc44f0":t.height}))),(e,n)=>((0,i.wg)(),(0,i.iD)("div",ue,[(0,i._)("div",pe,[(0,i._)("h2",me,(0,z.zw)(t.data.title),1),ge,(0,i._)("div",ve,[(0,i._)("img",{id:"picture",src:t.data.image,alt:""},null,8,he),(0,i._)("p",_e,(0,z.zw)(t.data.desc),1),(0,i._)("div",fe,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(t.data.tools,((e,t)=>((0,i.wg)(),(0,i.iD)("p",{key:t},(0,z.zw)(e),1)))),128))]),(0,i._)("div",be,["none"!==t.data.srcIcon?((0,i.wg)(),(0,i.iD)("a",{key:0,href:t.data.codeLink,target:"_blank"},[(0,i._)("div",ke,["github"===t.data.srcIcon?((0,i.wg)(),(0,i.iD)("img",{key:0,src:(0,c.SU)(y),alt:""},null,8,ye)):((0,i.wg)(),(0,i.iD)("img",{key:1,src:(0,c.SU)(se),alt:""},null,8,Se))])],8,we)):(0,i.kq)("",!0),(0,i._)("a",{href:t.data.learnLink,target:"_blank"},[(0,i._)("div",De,[Ie,(0,i._)("img",{src:(0,c.SU)(ce),alt:""},null,8,Ce)])],8,je)])])])]))}};const Le=(0,f.Z)(Ue,[["__scopeId","data-v-44786b9a"]]);var Oe=Le,He=JSON.parse('{"q":[{"title":"Shortcutter","image":"project-images/shortcutter.png","desc":"Shortcutter is a website designed to teach people how to use shortcuts.","tools":["HTML","CSS","JavaScript","React","Firebase"],"srcIcon":"github","codeLink":"https://github.com/darida12321/drp","learnLink":"https://drp-project-2fb9b.web.app/"},{"title":"PintOs","image":"project-images/pintos.png","desc":"PintOs is an operating system, written in C. It was created for a university project.","tools":["C","Unit testing","Virtual memory"],"srcIcon":"none","codeLink":"","learnLink":"https://en.wikipedia.org/wiki/Pintos"},{"title":"WACC","image":"project-images/wacc.png","desc":"WACC is a programming language created for a university project","tools":["Scala","Parsers","Unit testing"],"srcIcon":"none","codeLink":"","learnLink":"https://gitlab.doc.ic.ac.uk/rd3918/wacc_examples/-/blob/707e234e4c7659d3efac2ab7c4b1c78bde568d74/The%20WACC%20Language%20Specification/WACCLangSpec.pdf"},{"title":"Website","image":"project-images/website.png","desc":"This website was designed and created by me.","tools":["Figma","Vue.js","npm"],"srcIcon":"github","codeLink":"https://github.com/darida12321/darida12321.github.io","learnLink":"https://darida12321.github.io/"},{"title":"UNIT","image":"project-images/unit.png","desc":"UNIT is a game made in 2 days for a game jam.","tools":["Game maker","Graphics"],"srcIcon":"none","codeLink":"","learnLink":"https://darida12321.itch.io/unit"}]}');const xe=e=>((0,i.dD)("data-v-7afab194"),e=e(),(0,i.Cn)(),e),We=xe((()=>(0,i._)("h1",null,"Some projects I worked on",-1))),Pe=xe((()=>(0,i._)("hr",{id:"underline"},null,-1))),Ae={id:"projects"},Ye={id:"top"},Te={id:"rest"};var Ke={__name:"ProjectView",setup(e){var t=He.q;return(e,n)=>((0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i.Wm)(k),We,Pe,(0,i._)("div",Ae,[(0,i._)("div",Ye,[(0,i.Wm)(Oe,{width:"23rem",height:"31rem",data:(0,c.SU)(t)[0]},null,8,["data"]),(0,i.Wm)(Oe,{width:"23rem",height:"31rem",data:(0,c.SU)(t)[1]},null,8,["data"])]),(0,i._)("div",Te,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)((0,c.SU)(t).slice(2),((e,t)=>((0,i.wg)(),(0,i.j4)(Oe,{key:t,width:"15rem",height:"20rem",data:e},null,8,["data"])))),128))])])],64))}};const ze=(0,f.Z)(Ke,[["__scopeId","data-v-7afab194"]]);var Ve=ze;const Me=[{path:"/",name:"home",component:K},{path:"/about",name:"about",component:le},{path:"/project",name:"project",component:Ve}],Ze=(0,s.p7)({history:(0,s.PO)("/"),routes:Me});var Fe=Ze;(0,a.ri)(l).use(Fe).mount("#app")}},t={};function n(a){var i=t[a];if(void 0!==i)return i.exports;var r=t[a]={exports:{}};return e[a](r,r.exports,n),r.exports}n.m=e,function(){var e=[];n.O=function(t,a,i,r){if(!a){var o=1/0;for(d=0;d<e.length;d++){a=e[d][0],i=e[d][1],r=e[d][2];for(var l=!0,s=0;s<a.length;s++)(!1&r||o>=r)&&Object.keys(n.O).every((function(e){return n.O[e](a[s])}))?a.splice(s--,1):(l=!1,r<o&&(o=r));if(l){e.splice(d--,1);var c=i();void 0!==c&&(t=c)}}return t}r=r||0;for(var d=e.length;d>0&&e[d-1][2]>r;d--)e[d]=e[d-1];e[d]=[a,i,r]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){n.p="/"}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,a){var i,r,o=a[0],l=a[1],s=a[2],c=0;if(o.some((function(t){return 0!==e[t]}))){for(i in l)n.o(l,i)&&(n.m[i]=l[i]);if(s)var d=s(n)}for(t&&t(a);c<o.length;c++)r=o[c],n.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return n.O(d)},a=self["webpackChunktest"]=self["webpackChunktest"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=n.O(void 0,[998],(function(){return n(531)}));a=n.O(a)})();
//# sourceMappingURL=app.e7b755e9.js.map