import{d as I,r as c,b,e as h,w as N,c as S,a as e,f as r,t as s,g,u as n,h as y,o as T,_ as P}from"./index-BVy_tzJE.js";import{I as k}from"./IconInfoSign-BUoPbbWP.js";import{u as B}from"./payment-BrHwJPbt.js";const C={class:"clientPaymentItem scale-in"},L={class:"header flex-column-start-start"},V={class:"headerTop flex-row-between-center"},$={class:"timerPlace flex-row-end-start"},E={class:"headerInfo flex-row-start-center"},M={class:"headerInfoIcon flex-column-start-start"},D={class:"details flex-column-start-start"},F={class:"detailsLine flex-row-between-center"},R={class:"telNumber"},U={class:"detailsLine flex-row-between-center"},j={class:"telNumber"},q={class:"toNumber flex-row-between-center"},z={class:"telNumber"},A={class:"transferSum flex-row-between-center"},G={class:"sum"},H={class:"warningInfo flex-column-start-start"},J=I({__name:"ClientPaymentItem",setup(K){const i=y(),{bankName:m,transactionId:f,number:v,amount:_,currency:p}=B(),o=c(600),d=c("00:00"),u=()=>{const a=Math.floor(o.value/60),t=o.value%60;d.value=`${String(a).padStart(2,"0")}:${String(t).padStart(2,"0")}`};let l;const x=()=>{l=setInterval(()=>{o.value>0?(o.value--,u()):clearInterval(l)},1e3)};b(()=>{u(),x()}),h(()=>{clearInterval(l)}),N(o,a=>{a===0&&(clearInterval(l),w())});const w=()=>{i.push({name:"timeisover"})};return(a,t)=>(T(),S("div",C,[e("div",L,[e("div",V,[t[1]||(t[1]=e("h2",null,[r("Переведите средства "),e("br"),r("по указанному реквизиту")],-1)),e("div",$,s(d.value),1)]),e("div",E,[e("div",M,[g(k)]),t[2]||(t[2]=e("div",{class:"headerInfoText"},[e("h5",{class:"fw-400 infotext"},[e("span",{class:"text-green"},[e("span",{class:"fw-600"},"Не закрывайте страницу"),r(" до окончания операции!")]),e("br"),r('После перевода денежных средств, нажмите "Я оплатил" ')])],-1))])]),e("div",D,[e("div",F,[t[3]||(t[3]=e("h5",null,"Транзакция",-1)),e("div",R,s(n(f)),1)]),e("div",U,[t[4]||(t[4]=e("h5",null,"Банк",-1)),e("div",j,s(n(m)),1)]),e("div",q,[t[5]||(t[5]=e("h5",null,"Перевод сделан на номер",-1)),e("div",z,s(n(v)),1)]),e("div",A,[t[6]||(t[6]=e("h3",null,"Сумма перевода:",-1)),e("div",G,s(n(_).toFixed(2).replace(".",","))+" "+s(n(p)),1)]),e("div",H,[t[7]||(t[7]=e("h5",null,"Внимание! Ознакомьтесь с информацией",-1)),t[8]||(t[8]=e("ul",null,[e("li",null,[e("span",null," При переводе платежа я соглашаюсь с суммой перевода, в которую входит комиссия по его обработке.  ")]),e("li",null,[e("span",null," В случае перевода любой другой суммы, платеж не может быть зачислен автоматически и потребует дополнительного времени. ")]),e("li",null,[e("span",null,"Писать комментарий к платежу не нужно!")])],-1)),e("button",{onClick:t[0]||(t[0]=O=>n(i).push("/payment/confirmation"))},"Окей, я оплатил")])])]))}}),Y=P(J,[["__scopeId","data-v-deb96774"]]);export{Y as default};
