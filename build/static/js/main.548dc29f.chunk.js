(this["webpackJsonppokedex-app"]=this["webpackJsonppokedex-app"]||[]).push([[0],{10:function(e,t,a){},11:function(e,t,a){"use strict";a.r(t);var i=a(1),n=a(3),c=a.n(n),s=a(4),o=[{number:"001",name:"Bulbasaur",height:.7,weight:6.9,hability:"Espesura",category:"Semilla",image:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png"},{number:"004",name:"Charmander",height:.6,weight:8.5,hability:"Mar llamas",category:"Lagartijas",image:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png"},{number:"006",name:"Charizard",height:1.7,weight:90.5,hability:"Flames",category:"Llama",image:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png"},{number:"025",name:"Pikachu",height:.4,weight:6,hability:"Electricidad est\xe1tica",category:"Rat\xf3n",image:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png"}],r=Object(i.createContext)(null),m=a(0),l=function(e){var t=e.name,a=e.image,n=e.position,c=Object(i.useContext)(r).setPokemon;return Object(m.jsx)("div",{className:"a-card-pokemon",onClick:function(){c({active:n})},children:Object(m.jsx)("img",{alt:"Im\xe1gen de ".concat(t),src:a,className:"a-card-pokemon__image"})})},j=function(){return Object(m.jsx)("div",{className:"m-list-pokemon",children:o.map((function(e,t){return Object(m.jsx)(l,{image:e.image,name:e.name,position:t},e.number)}))})},p=function(){return Object(m.jsx)("footer",{className:"o-footer",children:Object(m.jsxs)("div",{className:"o-footer__container",children:[Object(m.jsx)("h2",{children:"OTHERS"}),Object(m.jsx)(j,{})]})})},d=a.p+"static/media/pokedex.8ad12527.png",b=a.p+"static/media/pokebola.8956d521.png",h=function(){return Object(m.jsxs)("header",{className:"o-header",children:[Object(m.jsx)("img",{src:b,alt:"logo pokedex",className:"o-header__pokebola"}),Object(m.jsx)("img",{src:d,alt:"logo pokedex",className:"o-header__image"})]})},g=function(e){var t=e.name;return Object(m.jsx)("div",{className:"a-image-pokemon__container",children:Object(m.jsx)("h1",{className:"a-image-pokemon__container--title",children:t.toUpperCase()})})},x=function(e){var t=e.name,a=void 0===t?"Default":t,i=e.image;e.icon;return Object(m.jsxs)("section",{className:"m-image-pokemon__container",children:[Object(m.jsx)(g,{name:a}),Object(m.jsx)("img",{alt:"pokemon ".concat(a),src:i,className:"m-image-pokemon__img"})]})},u=function(e){var t=e.title,a=e.description;return Object(m.jsxs)("div",{className:"a-description-pokemon__container",children:[Object(m.jsx)("h3",{children:t.toUpperCase()}),Object(m.jsx)("p",{children:a.toString().toUpperCase()})]})},O=function(e){var t=e.pokemon;return Object(m.jsx)("section",{className:"m-info-pokemon__container",children:Object(m.jsxs)("div",{className:"m-info-pokemon__container--description",children:[Object(m.jsx)(u,{title:"No.",description:t.number}),Object(m.jsx)(u,{title:"Level",description:t.height}),Object(m.jsx)(u,{title:"Type",description:t.category}),Object(m.jsx)(u,{title:"Hability",description:t.hability}),Object(m.jsx)(u,{title:"Height",description:"".concat(t.height," m")}),Object(m.jsx)(u,{title:"Weight",description:"".concat(t.weight," Kg")})]})})},k=function(){var e=Object(i.useContext)(r).pokemon,t=o[e.active];return Object(m.jsx)("main",{className:"o-main",children:Object(m.jsxs)("div",{className:"o-main__container",children:[Object(m.jsx)(x,{name:t.name,image:t.image}),Object(m.jsx)(O,{pokemon:t})]})})},f=function(){var e=Object(i.useState)({active:0}),t=Object(s.a)(e,2),a=t[0],n=t[1];return Object(m.jsx)(r.Provider,{value:{pokemon:a,setPokemon:n},children:Object(m.jsxs)("div",{className:"p-container",children:[Object(m.jsx)(h,{}),Object(m.jsx)(k,{}),Object(m.jsx)(p,{})]})})};a(10);c.a.render(Object(m.jsx)(f,{}),document.getElementById("root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.548dc29f.chunk.js.map