import{d as c,c as i,a as e,g as l,t as o,u as t,l as d,o as u,_}from"./index-J51-KWIi.js";import{u as m}from"./payment-kAXBouVU.js";const p={class:"processingItem scale-in"},f={class:"details flex-column-start-start"},v={class:"toNumber flex-row-between-center"},x={class:"telNumber"},b={class:"transferSum flex-row-between-center"},g={class:"sum"},w=c({__name:"ProcessingItem",setup(I){const{transactionId:n,amount:r,currency:a}=m();return(h,s)=>(u(),i("div",p,[s[2]||(s[2]=e("h2",null,"Обработка платежа",-1)),e("div",f,[e("div",v,[s[0]||(s[0]=e("h5",null,"Транзакция",-1)),e("div",x,o(t(n)),1)]),e("div",b,[s[1]||(s[1]=e("h3",null,"Сумма перевода:",-1)),e("div",g,o(t(r).toFixed(2).replace(".",","))+" "+o(t(a)),1)])]),l(t(d))]))}}),B=_(w,[["__scopeId","data-v-f18921ab"]]);export{B as default};
