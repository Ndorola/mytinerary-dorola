(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{36:function(e,i,t){},50:function(e,i,t){"use strict";t.r(i);var c=t(1),n=t.n(c),a=t(13),s=t.n(a),r=(t(35),t(36),t(14)),l=t(15),j=t(17),o=t(16),d=t(3),b=t(0),O=function(){return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("div",{className:"hero",style:{backgroundImage:"url('/assets/hero.png')"},children:[Object(b.jsxs)("div",{className:"containerHeader",children:[Object(b.jsxs)("nav",{id:"navBar",children:[Object(b.jsx)(d.c,{to:"/",children:Object(b.jsx)("p",{children:"Home"})}),Object(b.jsx)(d.c,{to:"/CITIES",children:Object(b.jsx)("p",{children:"Cities"})}),Object(b.jsx)(d.c,{to:"/LOGIN",children:Object(b.jsx)("p",{children:"Sign up"})}),Object(b.jsx)(d.c,{to:"/LOGOUT",children:Object(b.jsx)("p",{children:"Log in"})})]}),Object(b.jsx)(d.c,{to:"/USER",children:Object(b.jsx)("img",{id:"user",src:"/assets/iconUser.png",alt:"iconUser"})})]}),Object(b.jsxs)("div",{className:"boxTitle",children:[Object(b.jsxs)("div",{className:"title",children:[Object(b.jsx)("img",{id:"logo",src:"/assets/logo.png",alt:"logo"}),Object(b.jsx)("h4",{children:"Find your perfect trip, designed by insiders who know and love their cities!"})]}),Object(b.jsx)("div",{className:"boxHeroImg",children:Object(b.jsx)("img",{id:"heroImg",src:"/assets/travel.png",alt:"plane"})})]})]})})},m=function(){return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("div",{className:"mainFooter",children:Object(b.jsxs)("div",{className:"boxFooter",children:[Object(b.jsx)("div",{children:Object(b.jsxs)("nav",{id:"linksFooter",children:[Object(b.jsx)(d.c,{exact:!0,to:"/",children:Object(b.jsx)("p",{children:"HOME"})}),Object(b.jsx)(d.c,{to:"/CITIES",children:Object(b.jsx)("p",{children:"CITIES"})}),Object(b.jsx)(d.c,{to:"/LOGIN",children:Object(b.jsx)("p",{children:"LOGIN"})}),Object(b.jsx)(d.c,{to:"/LOGOUT",children:Object(b.jsx)("p",{children:"LOGOUT"})})]})}),Object(b.jsx)("div",{className:"allRightReserves",children:"miTinerary Proyect 2021 - All Rights Reserved"}),Object(b.jsxs)("div",{className:"socialMedia",children:[Object(b.jsx)(d.b,{to:"/NotFound",children:Object(b.jsx)("img",{src:"/assets/instagram.png",alt:"instagram"})}),Object(b.jsx)(d.b,{to:"/NotFound",children:Object(b.jsx)("img",{src:"/assets/facebook.png",alt:"facebook"})}),Object(b.jsx)(d.b,{to:"/NotFound",children:Object(b.jsx)("img",{src:"/assets/mail.png",alt:"mail"})})]})]})})})},g=function(){return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("div",{className:"buttonSection",children:[Object(b.jsx)("img",{src:"/assets/CallToAction.png",alt:"imgButton"}),Object(b.jsxs)("div",{className:"buttonContainer",children:[Object(b.jsx)("h2",{children:"What are you waiting for?"}),Object(b.jsx)("h4",{children:"Feel free to check our itineraries and activities!"}),Object(b.jsx)(d.c,{to:"/Cities",children:Object(b.jsx)("button",{children:"GO THERE!"})})]})]})})},x=t(23),h=t(30),u=t(52),p=t(53),v=t(54),f=[{images:[{img:"bangkok.png",citie:"Bangkok"},{img:"london.png",citie:"London"},{img:"paris.png",citie:"Paris"},{img:"bali.png",citie:"Bali"}]},{images:[{img:"iguazu.png",citie:"Puerto Iguaz\xfa"},{img:"cafayate.png",citie:"Cafayate"},{img:"calafate.png",citie:"Calafate"},{img:"villaLaAngostura.png",citie:"Villa la Angostura"}]},{images:[{img:"rioDeJaneiro.png",citie:"Rio de Janeiro"},{img:"roma.png",citie:"Rome"},{img:"newYork.png",citie:"New York"},{img:"miami.png",citie:"Miami"}]}],N=function(e){var i=Object(c.useState)(0),t=Object(x.a)(i,2),n=t[0],a=t[1],s=Object(c.useState)(!1),r=Object(x.a)(s,2),l=r[0],j=r[1],o=function(){if(!l){var e=n===f.length-1?0:n+1;a(e)}},d=function(){if(!l){var e=0===n?f.length-1:n-1;a(e)}},O=f.map((function(e,i){return Object(b.jsx)(h.a,{onExiting:function(){return j(!0)},onExited:function(){return j(!1)},children:Object(b.jsx)("div",{className:"carrouselSection",children:Object(b.jsx)("div",{className:"boxSlider",children:e.images.map((function(e){return Object(b.jsxs)("div",{className:"sliderImage",style:{backgroundImage:'url("/assets/'.concat(e.img,'")')},children:[" ",Object(b.jsx)("p",{children:e.citie})]},e.citie)}))})})},i)}));return Object(b.jsxs)(u.a,{activeIndex:n,next:o,previous:d,children:[Object(b.jsx)(p.a,{items:O,activeIndex:n,onClickHandler:function(e){l||a(e)}}),O,Object(b.jsx)(v.a,{direction:"prev",directionText:" ",onClickHandler:d}),Object(b.jsx)(v.a,{direction:"next",directionText:" ",onClickHandler:o})]})},k=function(){return Object(b.jsxs)("div",{className:"mainCarrousel",children:[Object(b.jsx)("h2",{className:"titleSlider",children:"Popular myTineraries"}),Object(b.jsx)(N,{})]})},C=function(e){Object(j.a)(t,e);var i=Object(o.a)(t);function t(){return Object(r.a)(this,t),i.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){return Object(b.jsxs)("div",{className:"mainBox",children:[Object(b.jsx)(O,{}),Object(b.jsx)(g,{}),Object(b.jsx)(k,{}),Object(b.jsx)(m,{})]})}}]),t}(n.a.Component),I=function(){return Object(b.jsx)("header",{children:Object(b.jsxs)("div",{className:"headerCities",style:{backgroundImage:"url('/assets/HeaderCities.jpg')"},children:[Object(b.jsxs)("nav",{id:"navBar",children:[Object(b.jsx)(d.c,{to:"/",children:Object(b.jsx)("p",{children:"Home"})}),Object(b.jsx)(d.c,{to:"/CITIES",children:Object(b.jsx)("p",{children:"Cities"})}),Object(b.jsx)(d.c,{to:"/LOGIN",children:Object(b.jsx)("p",{children:"Sign up"})}),Object(b.jsx)(d.c,{to:"/LOGOUT",children:Object(b.jsx)("p",{children:"Log in"})})]}),Object(b.jsx)(d.c,{to:"/USER",children:Object(b.jsx)("img",{id:"user",src:"/assets/iconUser.png",alt:"iconUser"})})]})})},y=[{img:"Bangkok.jpg",name:"Bangkok",description:"lalalalala"},{img:"London.png",name:"London",description:"lalalalala"},{img:"Paris.png",name:"Paris",description:"lalalalala"},{img:"Bali.png",name:"Bali",description:"lalalalala"},{img:"Iguazu.png",name:"Puerto Iguaz\xfa",description:"lalalalala"},{img:"Cafayate.png",name:"Cafayate",description:"lalalalala"},{img:"Calafate.png",name:"Calafate",description:"lalalalala"},{img:"VillaLaAngostura.png",name:"Villa la Angostura",description:"lalalalala"},{img:"RioDeJaneiro.png",name:"Rio de Janeiro",description:"lalalalala"},{img:"Roma.png",name:"Rome",description:"lalalalala"},{img:"NewYork.png",name:"New York",description:"lalalalala"},{img:"Miami.png",name:"Miami",description:"lalalalala"}],L=function(){return Object(b.jsx)("div",{className:"citiesBox",children:y.map((function(e){return Object(b.jsxs)("div",{className:"photoGrid",style:{backgroundImage:'url("/assets/fotos/'.concat(e.img,'")')},children:[Object(b.jsx)("h3",{children:e.name}),Object(b.jsx)("h4",{children:e.description})]},e.name)}))})},T=function(){return Object(b.jsx)("div",{className:"",children:Object(b.jsx)(L,{})})},E=function(e){Object(j.a)(t,e);var i=Object(o.a)(t);function t(){return Object(r.a)(this,t),i.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){return Object(b.jsxs)("div",{className:"mainCities",children:[Object(b.jsx)(I,{}),Object(b.jsx)(T,{}),Object(b.jsx)(m,{})]})}}]),t}(n.a.Component),F=function(){return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("div",{className:"imgError",children:Object(b.jsx)("img",{src:"/assets/error_404.png",alt:"Error 404"})})})},S=t(4),R=function(){return Object(b.jsx)(d.a,{children:Object(b.jsxs)(S.d,{children:[Object(b.jsx)(S.b,{exact:!0,path:"/",component:C}),Object(b.jsx)(S.b,{path:"/Cities",component:E}),Object(b.jsx)(S.b,{path:"/NotFound",component:F}),Object(b.jsx)(S.a,{to:"/NotFound"})]})})};s.a.render(Object(b.jsx)(R,{}),document.getElementById("root"))}},[[50,1,2]]]);
//# sourceMappingURL=main.4a6112ea.chunk.js.map