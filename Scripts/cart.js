let price=document.createElement("div");
price.setAttribute("id","rprice");
let product=document.createElement("div");
product.setAttribute("id","rproducts");
let quantity=document.createElement("div");
quantity.setAttribute("id","rquantity");
let total=document.createElement("div");
total.setAttribute("id","rtotal");
let imgname=document.createElement("div");
imgname.setAttribute("class","rimgname");



// function
let div1=document.createElement("div");
let div11=document.createElement("div");
div11.setAttribute("class","rdisplay");
let div12=document.createElement("div");
div12.setAttribute("class","rdisplay");
let div13=document.createElement("div");
div13.setAttribute("class","rdisplay");

let p1=document.createElement("p");
p1.textContent="Speakup Almond toe Flats";
let p11=document.createElement("p");
p11.textContent="Size : 5";
let p12=document.createElement("p");
p12.textContent="Width : M";
let p13=document.createElement("p");
p13.textContent="Color : Black";
div11.append(p11);
div12.append(p12);
div13.append(p13);
div1.append(p1,div11,div12,div13);

let img1=document.createElement("img");
img1.src="https://cdn.shopify.com/s/files/1/0267/3737/7324/products/PG.NWSPEAKUP.JJ0CCB1.RZ_3fc02bfb-aef0-47ec-9c63-82a34d1d2431_200x.jpg?v=1582668528";
imgname.append(img1,div1);
product.append(imgname);

let p21=document.createElement("p");
p21.textContent="$635";
price.append(p21);

let p31=document.createElement("button");
p31.textContent="-";
let p32=document.createElement("p");
p32.textContent="1";
let p33=document.createElement("button");
p33.textContent="+";
quantity.append(p31,p32,p33);

let p41=document.createElement("p");
p41.textContent="$635";
total.append(p41); 
document.querySelector("#rcartdyanamic").append(product,price,quantity,total);

document.querySelector("#rsubtotalprice").append(total);
