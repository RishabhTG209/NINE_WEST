let subtotal=JSON.parse(localStorage.getItem("subtotal"));
let discount=JSON.parse(localStorage.getItem("discount"));
let finalprice=JSON.parse(localStorage.getItem("finalamount"));
console.log(subtotal);

document.querySelector(".rcdiscount").append(discount[discount.length-1]);
document.querySelector("#rctotal").append(subtotal[subtotal.length-1]);
document.querySelector("#rfinaltotal").append(finalprice[finalprice.length-1]);