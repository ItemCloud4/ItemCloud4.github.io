import{j as e,a,b as l,A as c,c as n,P as t}from"./index-DEtPMvCz.js";import{B as h}from"./index-D_-CSE0F.js";const _="_deliveryCard_1jih0_1",j="_header_1jih0_10",x="_textBlock_1jih0_19",g="_moreInfo_1jih0_26",v="_body_1jih0_36",m="_goodsImg_1jih0_47",p="_goodsInfo_1jih0_56",r={deliveryCard:_,header:j,textBlock:x,moreInfo:g,body:v,goodsImg:m,goodsInfo:p},b=({item:s,onClick:i})=>e.jsxs("div",{className:r.deliveryCard,children:[e.jsxs("div",{className:r.header,children:[e.jsxs("div",{className:r.textBlock,children:[e.jsx(a,{children:s.title}),e.jsx(l,{children:s.details})]}),e.jsx("div",{className:r.moreInfo,onClick:i,children:e.jsx(c,{})})]}),e.jsxs("div",{className:r.body,children:[e.jsx("div",{className:r.goodsImg,style:{backgroundImage:"url('images/"+s.img+".png')"}}),e.jsxs("div",{className:r.goodsInfo,children:[e.jsx(n,{children:s.brand}),e.jsx(n,{children:s.description}),e.jsx(l,{children:s.size}),e.jsxs(a,{children:[s.price," "]})]})]})]}),f="_profileDeliveries_1baho_1",y="_header_1baho_10",k="_body_1baho_21",I="_deliveryCard_1baho_29",o={profileDeliveries:f,header:y,body:k,deliveryCard:I},N=[{id:0,title:"Собираем и готовим к отправке",details:"Будет в пункте выдачи 28 декабря",img:"nike",brand:"Nike",description:"Кроссовки The Powerpuff Girls x Nike SBDunk Low «Buttercup»",size:"Размер 43 EU",price:"24 690₽"},{id:1,title:"Уже у вас",details:"Доставлено 12 октября",img:"vans",brand:"Vans",description:"Кроссовки Peaches x Vans Knu Skool «Black Pink»",size:"Размер 38 EU",price:"15 390₽"}],C=({title:s,onClickBack:i})=>e.jsxs("div",{className:o.profileDeliveries,children:[e.jsxs("div",{className:o.header,children:[e.jsx(h,{onClick:i}),e.jsx(t,{children:s}),e.jsx("div",{})]}),e.jsx("div",{className:o.body,children:N.map(d=>e.jsx(b,{item:d},d.id))})]});export{C as default};
