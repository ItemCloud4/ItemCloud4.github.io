import{_ as i,c as a,i as l,b as t,d as _,f as r,j as f,g as s,R as p,t as o,h as w}from"./index-C1Ed7aB4.js";import{u as v}from"./payment-DxuhHoRe.js";const x={},h={width:"42",height:"24",viewBox:"0 0 42 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"};function k(c,n){return l(),a("svg",h,n[0]||(n[0]=[t("path",{d:"M2 12H40M2 12L12.022 22M2 12L10.3516 3.66667L12.022 2",stroke:"#2D9372","stroke-width":"1.5","stroke-linecap":"round"},null,-1)]))}const b=i(x,[["render",k]]),g={class:"confirmationItem scale-in"},L={class:"linkPackPlace"},y={class:"details flex-column-start-start"},C={class:"toNumber flex-row-between-center"},I={class:"telNumber"},B={class:"transferSum flex-row-between-center"},N={class:"sum"},M=_({__name:"ConfirmationItem",setup(c){const n=w(),{number:d,amount:u,currency:m}=v();return(P,e)=>(l(),a("div",g,[t("div",L,[r(s(p),{to:"/payment",class:"flex-row-start-center backLink"},{default:f(()=>[r(b),e[1]||(e[1]=t("h5",null,"Назад",-1))]),_:1})]),e[4]||(e[4]=t("h2",null,"Подтверждение",-1)),t("div",y,[t("div",C,[e[2]||(e[2]=t("h5",null,"Перевод сделан на номер",-1)),t("div",I,o(s(d)),1)]),t("div",B,[e[3]||(e[3]=t("h3",null,"Сумма перевода:",-1)),t("div",N,o(s(u).toFixed(2).replace(".",","))+" "+o(s(m)),1)]),t("button",{onClick:e[0]||(e[0]=R=>s(n).push("/payment/processing/pending"))},"Я подтверждаю оплату")])]))}}),D=i(M,[["__scopeId","data-v-593cb1c6"]]);export{D as default};
