(function(){var e={1622:function(e,t,n){"use strict";var r=n(9743),o=n(8473);const i={class:"main"};function a(e,t,n,r,a,s){const u=(0,o.up)("vHeader"),c=(0,o.up)("router-view"),l=(0,o.up)("vFooter");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.Wm)(u),(0,o._)("main",i,[(0,o.Wm)(c)]),(0,o.Wm)(l)],64)}var s=n(1254);const u={key:0,class:"header"},c={class:"container"},l={class:"header__inner"},d={class:"header__menu menu"},m={key:0,class:"header__menu-list menu__list"},p={class:"header__button-box"},f=(0,o.Uk)("Заказать");function g(e,t,n,r,i,a){const g=(0,o.up)("vLogo"),v=(0,o.up)("RouterLink"),_=(0,o.up)("BtnGreen");return!0===e.$route.meta.Header?((0,o.wg)(),(0,o.iD)("header",u,[(0,o._)("div",c,[(0,o._)("div",l,[(0,o.Wm)(g),(0,o._)("nav",d,[i.menuPage.length>0?((0,o.wg)(),(0,o.iD)("ul",m,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(i.menuPage,(e=>((0,o.wg)(),(0,o.iD)("li",{class:"header__menu-item menu__item",key:e.id},[(0,o.Wm)(v,{to:e.href,class:"header__menu-link"},{default:(0,o.w5)((()=>[(0,o.Uk)((0,s.zw)(e.name),1)])),_:2},1032,["to"])])))),128))])):(0,o.kq)("",!0)]),(0,o._)("div",p,[(0,o.Wm)(_,{class:"button-green"},{default:(0,o.w5)((()=>[f])),_:1})])])])])):(0,o.kq)("",!0)}const v=e=>((0,o.dD)("data-v-a7b062e6"),e=e(),(0,o.Cn)(),e),_=v((()=>(0,o._)("span",{class:"header__logo-title logo__title"},"STUDIO",-1))),h=v((()=>(0,o._)("span",{class:"header__logo-text logo__text"},"WEB",-1)));function w(e,t,n,r,i,a){const s=(0,o.up)("RouterLink");return(0,o.wg)(),(0,o.j4)(s,{to:"/home",class:"header__logo logo"},{default:(0,o.w5)((()=>[_,h])),_:1})}var b={name:"vLogo"},y=n(5312);const k=(0,y.Z)(b,[["render",w],["__scopeId","data-v-a7b062e6"]]);var j=k,x={name:"vHeader",components:{vLogo:j},data(){return{menuPage:[{id:1,name:"Главная",href:"/"}]}}};const D=(0,y.Z)(x,[["render",g],["__scopeId","data-v-e9a625ea"]]);var C=D;const O=e=>((0,o.dD)("data-v-6ee80cfc"),e=e(),(0,o.Cn)(),e),S={class:"footer"},E=O((()=>(0,o._)("div",{class:"container"},[(0,o._)("div",{class:"footer__inner"},[(0,o._)("h5",{class:"footer__title"},"© 2019–2022, WEB Studio - Разработка сайтов для предприятий"),(0,o._)("p",{class:"footer__text"},"Политика сайта и обработка персональных данных")])],-1))),I=[E];function B(e,t,n,r,i,a){return(0,o.wg)(),(0,o.iD)("footer",S,I)}var P={name:"vFooter",data(){return{}}};const A=(0,y.Z)(P,[["render",B],["__scopeId","data-v-6ee80cfc"]]);var H=A,T={name:"app-view",components:{vHeader:C,vFooter:H}};const F=(0,y.Z)(T,[["render",a]]);var N=F,L=n(299),M=(0,L.MT)({state:{contactsPathImage:"@/assets/image/icon/",contacts:[{id:1,name:"Facebook",path_image:"facebook.svg",url:"https://google.com"},{id:2,name:"Behance",path_image:"behance.svg",url:"https://google.com"},{id:3,name:"Telegram",path_image:"telegram.svg",url:"https://web.telegram.org"},{id:4,name:"Vk",path_image:"vk.svg",url:"https://vk.com/soslandoev"},{id:5,name:"Gmail",path_image:"gmail.svg",url:"https://www.google.com/intl/ru/gmail/about/"}]}}),W=n(6082);const Z=[{path:"/",component:()=>n.e(975).then(n.bind(n,7200)),name:"Home",meta:{guard:"all",title:"Главная",Header:!0,Footer:!0}},{path:"/:has(.*)*",component:n.e(105).then(n.bind(n,5105)),name:"NotFound",meta:{guard:"all",title:"Страница не найдена",Header:!1,Footer:!1}}],U=(0,W.p7)({history:(0,W.PO)(),routes:Z});var $=U;const q={class:"btn"};function z(e,t,n,r,i,a){return(0,o.wg)(),(0,o.iD)("button",q,[(0,o.WI)(e.$slots,"default")])}var G={name:"BtnGreen"};const K=(0,y.Z)(G,[["render",z]]);var Y=K;function V(e,t,n,r,i,a){return(0,o.wg)(),(0,o.iD)("input",{type:"text",class:"input__grey",onInput:t[0]||(t[0]=t=>e.$emit("update:modelValue",t.target.value))},null,32)}var R={data(){return{}}};const J=(0,y.Z)(R,[["render",V],["__scopeId","data-v-6a2a3966"]]);var Q=J;const X={key:0,class:"aside"},ee={class:"aside__inner"},te={class:"aside__list"},ne=["onClick"],re={class:"aside__item-text"};function oe(e,t,n,i,a,u){return n.list.length>0?((0,o.wg)(),(0,o.iD)("aside",X,[(0,o._)("div",ee,[(0,o._)("ul",te,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(n.list,(t=>((0,o.wg)(),(0,o.iD)("li",{class:(0,s.C_)(["aside__item",{"aside__item-active":t.name===a.actives}]),key:t.id},[(0,o._)("a",{href:"#",onClick:(0,r.iM)((n=>(a.actives=t.name,e.$emit("update",a.actives))),["prevent"]),class:"aside__item-link"},[(0,o._)("span",re,(0,s.zw)(t.id),1)],8,ne)],2)))),128))])])])):(0,o.kq)("",!0)}var ie={name:"vAside",props:{list:{type:Array},active:{type:String}},data(){return{actives:this.active}}};const ae=(0,y.Z)(ie,[["render",oe]]);var se=ae;const ue={class:"double__btn"};function ce(e,t,n,r,i,a){return(0,o.wg)(),(0,o.iD)("button",ue,[(0,o.WI)(e.$slots,"default",{},void 0,!0)])}var le={name:"BtnDouble",data(){return{}}};const de=(0,y.Z)(le,[["render",ce],["__scopeId","data-v-001e4bda"]]);var me=de;const pe=["src","alt"];function fe(e,t,r,i,a,s){const u=(0,o.up)("swiper-slide"),c=(0,o.up)("swiper");return(0,o.wg)(),(0,o.j4)(c,{breakpoints:a.breakpoints,modules:a.modules,autoplay:{delay:7e3},loop:!1},{default:(0,o.w5)((()=>[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(r.slider,(e=>((0,o.wg)(),(0,o.j4)(u,{key:e.id,class:"slide__item",ref_for:!0,ref:"slide__item",onMousemove:s.mouseMove},{default:(0,o.w5)((()=>[(0,o._)("img",{src:n(5076)(`./${e.path_image}`),alt:e.name,class:"slide__image",ref_for:!0,ref:"slide__image"},null,8,pe)])),_:2},1032,["onMousemove"])))),128))])),_:1},8,["breakpoints","modules"])}var ge=n(1967),ve=n(8209),_e={name:"vCarousel",components:{Swiper:ge.tq,SwiperSlide:ge.o5},data(){return{modules:[ve.pt],breakpoints:{250:{slidesPerView:1,spaceBetween:25},790:{slidesPerView:1.5,spaceBetween:10}}}},props:{slider:{type:Array}},methods:{mouseMove(e){console.log(e)}}};const he=(0,y.Z)(_e,[["render",fe],["__scopeId","data-v-557fe15a"]]);var we=he;const be={class:"slide__item-title title"},ye={class:"slide__item-text"},ke={class:"slide__item-info"},je={class:"slide__item-box"},xe={class:"slide__item-price"},De={class:"slide__item-time"},Ce=(0,o.Uk)("Подробнее");function Oe(e,t,n,r,i,a){const u=(0,o.up)("BtnGreen"),c=(0,o.up)("swiper-slide"),l=(0,o.up)("swiper");return(0,o.wg)(),(0,o.j4)(l,{effect:"coverflow",grabCursor:!0,centeredSlides:!0,slidesPerView:"auto",coverflowEffect:{rotate:50,stretch:0,depth:100,modifier:1,slideShadows:!0},pagination:!0,modules:i.modules,class:"mySwiper"},{default:(0,o.w5)((()=>[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(n.slider,(e=>((0,o.wg)(),(0,o.j4)(c,{key:e.id,class:"slider__item"},{default:(0,o.w5)((()=>[(0,o._)("h3",be,(0,s.zw)(e.name),1),(0,o._)("p",ye,(0,s.zw)(e.text),1),(0,o._)("div",ke,[(0,o._)("div",je,[(0,o._)("p",xe,"От "+(0,s.zw)(e.price),1),(0,o._)("p",De,"От "+(0,s.zw)(e.time),1)]),(0,o.Wm)(u,{class:"slide__item-btn"},{default:(0,o.w5)((()=>[Ce])),_:1})])])),_:2},1024)))),128))])),_:1},8,["modules"])}var Se={name:"vSliderCoverflow",components:{Swiper:ge.tq,SwiperSlide:ge.o5},props:{slider:{type:Array}},data(){return{modules:[ve.lI,ve.tl]}}};const Ee=(0,y.Z)(Se,[["render",Oe],["__scopeId","data-v-921fb0a8"]]);var Ie=Ee;const Be={class:"contacts__content"},Pe={class:"contacts__list"},Ae=["href"];function He(e,t,r,i,a,u){return(0,o.wg)(),(0,o.iD)("div",Be,[(0,o._)("ul",Pe,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.$store.state.contacts,(e=>((0,o.wg)(),(0,o.iD)("li",{class:"contacts__item",key:e.id},[(0,o._)("a",{class:"contacts__item-link",href:e.url,style:(0,s.j5)({"background-image":"url("+n(331)(`./${e.path_image}`)+")"})},null,12,Ae)])))),128))])])}var Te={name:"vContacts",data(){return{}}};const Fe=(0,y.Z)(Te,[["render",He],["__scopeId","data-v-3acf9ecc"]]);var Ne=Fe;(0,r.ri)(N).component("BtnGreen",Y).component("InputGrey",Q).component("vAside",se).component("BtnDouble",me).component("vCarousel",we).component("vSliderCoverflow",Ie).component("vContacts",Ne).use($).use(M).mount("#app")},331:function(e,t,n){var r={"./behance.svg":3830,"./facebook.svg":5277,"./globe.svg":8272,"./gmail.svg":67,"./phone.svg":8950,"./telegram.svg":1643,"./vk.svg":5041};function o(e){var t=i(e);return n(t)}function i(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}o.keys=function(){return Object.keys(r)},o.resolve=i,e.exports=o,o.id=331},5076:function(e,t,n){var r={"./img1.jpg":4742,"./img2.jpg":6521,"./img3.jpg":9153,"./img4.jpg":7138,"./img5.jpg":5530,"./img6.jpg":8863,"./img7.jpg":6520};function o(e){var t=i(e);return n(t)}function i(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}o.keys=function(){return Object.keys(r)},o.resolve=i,e.exports=o,o.id=5076},3830:function(e,t,n){"use strict";e.exports=n.p+"img/behance.1a335940.svg"},5277:function(e,t,n){"use strict";e.exports=n.p+"img/facebook.39b67426.svg"},8272:function(e,t,n){"use strict";e.exports=n.p+"img/globe.de62bb81.svg"},67:function(e,t,n){"use strict";e.exports=n.p+"img/gmail.dd32dacb.svg"},8950:function(e,t,n){"use strict";e.exports=n.p+"img/phone.eade315a.svg"},1643:function(e,t,n){"use strict";e.exports=n.p+"img/telegram.9f9032fd.svg"},5041:function(e,t,n){"use strict";e.exports=n.p+"img/vk.e028214d.svg"},4742:function(e,t,n){"use strict";e.exports=n.p+"img/img1.eb367f55.jpg"},6521:function(e,t,n){"use strict";e.exports=n.p+"img/img2.3e35f4b9.jpg"},9153:function(e,t,n){"use strict";e.exports=n.p+"img/img3.a40bf6d7.jpg"},7138:function(e,t,n){"use strict";e.exports=n.p+"img/img4.65aee80c.jpg"},5530:function(e,t,n){"use strict";e.exports=n.p+"img/img5.91ebe347.jpg"},8863:function(e,t,n){"use strict";e.exports=n.p+"img/img6.a553c1ca.jpg"},6520:function(e,t,n){"use strict";e.exports=n.p+"img/img7.2a649e56.jpg"}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={exports:{}};return e[r](i,i.exports,n),i.exports}n.m=e,function(){var e=[];n.O=function(t,r,o,i){if(!r){var a=1/0;for(l=0;l<e.length;l++){r=e[l][0],o=e[l][1],i=e[l][2];for(var s=!0,u=0;u<r.length;u++)(!1&i||a>=i)&&Object.keys(n.O).every((function(e){return n.O[e](r[u])}))?r.splice(u--,1):(s=!1,i<a&&(a=i));if(s){e.splice(l--,1);var c=o();void 0!==c&&(t=c)}}return t}i=i||0;for(var l=e.length;l>0&&e[l-1][2]>i;l--)e[l]=e[l-1];e[l]=[r,o,i]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,r){return n.f[r](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+"."+{105:"6a88b2ce",975:"43a4fdf1"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+e+".45193f9d.css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="studioweb:";n.l=function(r,o,i,a){if(e[r])e[r].push(o);else{var s,u;if(void 0!==i)for(var c=document.getElementsByTagName("script"),l=0;l<c.length;l++){var d=c[l];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==t+i){s=d;break}}s||(u=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,n.nc&&s.setAttribute("nonce",n.nc),s.setAttribute("data-webpack",t+i),s.src=r),e[r]=[o];var m=function(t,n){s.onerror=s.onload=null,clearTimeout(p);var o=e[r];if(delete e[r],s.parentNode&&s.parentNode.removeChild(s),o&&o.forEach((function(e){return e(n)})),t)return t(n)},p=setTimeout(m.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=m.bind(null,s.onerror),s.onload=m.bind(null,s.onload),u&&document.head.appendChild(s)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/vue/"}(),function(){if("undefined"!==typeof document){var e=function(e,t,n,r,o){var i=document.createElement("link");i.rel="stylesheet",i.type="text/css";var a=function(n){if(i.onerror=i.onload=null,"load"===n.type)r();else{var a=n&&("load"===n.type?"missing":n.type),s=n&&n.target&&n.target.href||t,u=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");u.code="CSS_CHUNK_LOAD_FAILED",u.type=a,u.request=s,i.parentNode.removeChild(i),o(u)}};return i.onerror=i.onload=a,i.href=t,n?n.parentNode.insertBefore(i,n.nextSibling):document.head.appendChild(i),i},t=function(e,t){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var o=n[r],i=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(i===e||i===t))return o}var a=document.getElementsByTagName("style");for(r=0;r<a.length;r++){o=a[r],i=o.getAttribute("data-href");if(i===e||i===t)return o}},r=function(r){return new Promise((function(o,i){var a=n.miniCssF(r),s=n.p+a;if(t(a,s))return o();e(r,s,null,o,i)}))},o={143:0};n.f.miniCss=function(e,t){var n={975:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=r(e).then((function(){o[e]=0}),(function(t){throw delete o[e],t})))}}}(),function(){var e={143:0};n.f.j=function(t,r){var o=n.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else{var i=new Promise((function(n,r){o=e[t]=[n,r]}));r.push(o[2]=i);var a=n.p+n.u(t),s=new Error,u=function(r){if(n.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var i=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;s.message="Loading chunk "+t+" failed.\n("+i+": "+a+")",s.name="ChunkLoadError",s.type=i,s.request=a,o[1](s)}};n.l(a,u,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,r){var o,i,a=r[0],s=r[1],u=r[2],c=0;if(a.some((function(t){return 0!==e[t]}))){for(o in s)n.o(s,o)&&(n.m[o]=s[o]);if(u)var l=u(n)}for(t&&t(r);c<a.length;c++)i=a[c],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(l)},r=self["webpackChunkstudioweb"]=self["webpackChunkstudioweb"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(1622)}));r=n.O(r)})();
//# sourceMappingURL=app.4114ed47.js.map