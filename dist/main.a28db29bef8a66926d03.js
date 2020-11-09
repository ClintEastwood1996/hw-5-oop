!function(e){var r={};function n(t){if(r[t])return r[t].exports;var i=r[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=r,n.d=function(e,r,t){n.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:t})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,r){if(1&r&&(e=n(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(n.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var i in e)n.d(t,i,function(r){return e[r]}.bind(null,i));return t},n.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(r,"a",r),r},n.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},n.p="",n(n.s=2)}([function(e,r,n){},function(e,r,n){},function(e,r,n){"use strict";n.r(r);n(0),n(1);function t(e){this.name=e.name,this.price=e.price,this.calories=e.calories}function i(e,r){this.name=e.name+" with "+r.name,this.price=e.price+r.price,this.calories=e.calories+r.calories}function o(){}function a(){}t.prototype.calculatePrice=function(){return this.price},t.prototype.calculateCalories=function(){return this.calories},i.prototype=Object.create(t.prototype),i.prototype.getStuffing=function(){return stuffing.name},i.prototype.getSize=function(){return size.name},i.SIZE_SMALL={name:"Small hamburger",price:50,calories:20},i.SIZE_LARGE={name:"Large hamburger",price:100,calories:40},i.STUFFING_CHEESE={name:"cheese",price:10,calories:20},i.STUFFING_SALAD={name:"salad",price:20,calories:5},i.STUFFING_POTATO={name:"potato",price:15,calories:10},o.CAESAR={name:"Caesar",price:100,calories:20},o.OLIVIE={name:"Olivie",price:50,calories:80},a.COLA={name:"Cola",price:50,calories:40},a.COFFEE={name:"Coffee",price:80,calories:20};var c=document.querySelectorAll(".plus-button");for(let e of c)e.onclick=function(){e.parentElement.previousElementSibling.innerHTML=Number.parseInt(e.parentElement.previousElementSibling.innerHTML)+1};var l=document.querySelectorAll(".minus-button");for(let e of l)e.onclick=function(){let r=e.parentElement.previousElementSibling,n=Number.parseInt(r.innerHTML);n>0&&(n--,r.innerHTML=n)};var u=document.querySelectorAll(".item__count"),s=document.querySelectorAll(".LargeHamburgerStuff"),m=document.querySelectorAll(".SmallHamburgerStuff");function p(e){return function(){var r=0,n=0,c=[];for(var l of(c.push("Your order: <br><br>"),s))if(l.checked)switch(l.getAttribute("value")){case"cheese":var p=new i(i.SIZE_LARGE,i.STUFFING_CHEESE);break;case"salad":p=new i(i.SIZE_LARGE,i.STUFFING_SALAD);break;case"potato":p=new i(i.SIZE_LARGE,i.STUFFING_POTATO)}for(var f of m)if(f.checked)switch(f.getAttribute("value")){case"cheese":var b=new i(i.SIZE_SMALL,i.STUFFING_CHEESE);break;case"salad":b=new i(i.SIZE_SMALL,i.STUFFING_SALAD);break;case"potato":b=new i(i.SIZE_SMALL,i.STUFFING_POTATO)}for(var S of u)switch(S.getAttribute("id")){case"LargeHamburgerAmount":var T=new t(p);r+=T.price*S.innerHTML,n+=T.calories*S.innerHTML,c.push(`${T.name} * ${S.innerHTML}<br>`);break;case"SmallHamburgerAmount":var d=new t(b);r+=d.price*S.innerHTML,n+=d.calories*S.innerHTML,c.push(`${d.name} * ${S.innerHTML}<br>`);break;case"SaladCaesarAmount":var L=new t(o.CAESAR);r+=L.price*S.innerHTML,n+=L.calories*S.innerHTML,c.push(`${L.name} * ${S.innerHTML}<br>`);break;case"SaladOlivieAmount":var E=new t(o.OLIVIE);r+=E.price*S.innerHTML,n+=E.calories*S.innerHTML,c.push(`${E.name} * ${S.innerHTML}<br>`);break;case"DrinkColaAmount":var A=new t(a.COLA);r+=A.price*S.innerHTML,n+=A.calories*S.innerHTML,c.push(`${A.name} * ${S.innerHTML}<br>`);break;case"DrinkCoffeeAmount":var g=new t(a.COFFEE);r+=g.price*S.innerHTML,n+=g.calories*S.innerHTML,c.push(`${g.name} * ${S.innerHTML}<br>`)}"TotalPrice"==e&&(document.getElementById(e).innerHTML=r),"TotalCalories"==e&&(document.getElementById(e).innerHTML=n),"TotalOrder"==e&&(c.push(`<br><br>Price: ${r}<br>`),c.push("Calories: "+n),document.getElementById("cover").innerHTML=c,document.getElementById("cover").style.visibility="visible")}}document.getElementById("get-price").onclick=p("TotalPrice"),document.getElementById("get-calories").onclick=p("TotalCalories"),document.getElementById("finish-order").onclick=p("TotalOrder")}]);