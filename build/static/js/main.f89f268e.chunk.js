(this["webpackJsonppokedex-app"]=this["webpackJsonppokedex-app"]||[]).push([[0],{10:function(e,t,a){"use strict";a.r(t);a(1);var i=a(3),s=a.n(i),n=[{number:"001",name:"Bulbasaur",height:.7,weight:6.9,hability:"Espesura",category:"Semilla",image:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png"},{number:"004",name:"Charmander",height:.6,weight:8.5,hability:"Mar llamas",category:"Lagartijas",image:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png"},{number:"006",name:"Charizard",height:1.7,weight:90.5,hability:"Flames",category:"Llama",image:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png"},{number:"025",name:"Pikachu",height:.4,weight:6,hability:"Electricidad est\xe1tica",category:"Rat\xf3n",image:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png"}],c=a(0),o=function(e){var t=e.name,a=e.image;return Object(c.jsx)("div",{className:"a-card-pokemon",children:Object(c.jsx)("img",{alt:"Im\xe1gen de ".concat(t),src:a,className:"a-card-pokemon__image"})})},m=function(){return Object(c.jsx)("div",{className:"m-list-pokemon",children:n.map((function(e){return Object(c.jsx)(o,{image:e.image,name:e.name},e.number)}))})},r=function(){return Object(c.jsx)("footer",{className:"o-footer",children:Object(c.jsxs)("div",{className:"o-footer__container",children:[Object(c.jsx)("h2",{children:"OTHERS"}),Object(c.jsx)(m,{})]})})},l=a.p+"static/media/pokedex.8ad12527.png",j=a.p+"static/media/pokebola.8956d521.png",p=function(){return Object(c.jsxs)("header",{className:"o-header",children:[Object(c.jsx)("img",{src:j,alt:"logo pokedex",className:"o-header__pokebola"}),Object(c.jsx)("img",{src:l,alt:"logo pokedex",className:"o-header__image"})]})},d=function(e){var t=e.name;return Object(c.jsx)("div",{className:"a-image-pokemon__container",children:Object(c.jsx)("h1",{className:"a-image-pokemon__container--title",children:t.toUpperCase()})})},h=function(e){var t=e.name,a=void 0===t?"Default":t,i=e.image;e.icon;return Object(c.jsxs)("section",{className:"m-image-pokemon__container",children:[Object(c.jsx)(d,{name:a}),Object(c.jsx)("img",{alt:"pokemon ".concat(a),src:i,className:"m-image-pokemon__img"})]})},g=function(e){var t=e.title,a=e.description;return Object(c.jsxs)("div",{className:"a-description-pokemon__container",children:[Object(c.jsx)("h3",{children:t.toUpperCase()}),Object(c.jsx)("p",{children:a.toString().toUpperCase()})]})},b=function(e){var t=e.pokemon;return Object(c.jsx)("section",{className:"m-info-pokemon__container",children:Object(c.jsxs)("div",{className:"m-info-pokemon__container--description",children:[Object(c.jsx)(g,{title:"No.",description:t.number}),Object(c.jsx)(g,{title:"Level",description:t.height}),Object(c.jsx)(g,{title:"Type",description:t.category}),Object(c.jsx)(g,{title:"Hability",description:t.hability}),Object(c.jsx)(g,{title:"Height",description:"".concat(t.height," m")}),Object(c.jsx)(g,{title:"Weight",description:"".concat(t.weight," Kg")})]})})},x=function(){var e=n[3];return Object(c.jsx)("main",{className:"o-main",children:Object(c.jsxs)("div",{className:"o-main__container",children:[Object(c.jsx)(h,{name:e.name,image:e.image}),Object(c.jsx)(b,{pokemon:e})]})})},u=function(){return Object(c.jsxs)("div",{className:"p-container",children:[Object(c.jsx)(p,{}),Object(c.jsx)(x,{}),Object(c.jsx)(r,{})]})};a(9);s.a.render(Object(c.jsx)(u,{}),document.getElementById("root"))},9:function(e,t,a){}},[[10,1,2]]]);
//# sourceMappingURL=main.f89f268e.chunk.js.map