
// document.querySelector("#rsubtotalprice").append(total);
// let cartitems = JSON.parse(localStorage.getItem("cartdetails"))
// console.log('cartitems:', cartitems)
// appendcart(cartitems)
// let main=document.querySelector("#rcartdyanamic");
// let subtotalprice=document.querySelector("#rsubtotalprice")
var totalprice_cart



var currentUser = JSON.parse(localStorage.getItem('currentUser'))   // completed user ID

cartFetch();


async function cartFetch(){
    try{
        let response=await fetch(
                // `https://myapplication-nine-west.herokuapp.com/product/${item}`
                `https://blooming-refuge-71619.herokuapp.com/cart/${currentUser.user_data._id}`
            );
            data=await response.json();
                appendCart(data);
            console.log("Data: ",data);
        
    }        
    catch(error){
        console.log("Error : ",error);
    } 
}


let final=[]||JSON.parse(localStorage.getItem("finalprice"));


function appendCart(elem){
  console.log(elem)
  document.querySelector("#rcartdyanamic").innerHTML=null;
  if(elem.length==0){
    let imgempty= document.createElement("img");
    imgempty.src="https://community.servicenow.com/bbd560d3dbc0c41013b5fb24399619d2.iix"
    imgempty.setAttribute("class","rrempty")
    document.querySelector("#rcartdyanamic").append(imgempty);
    imgempty.addEventListener("click",function(){
      window.location.href="heelspage.html"
    })
  }
    totalprice_cart=0;
    elem.map((el,index)=>{
        
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

                let div1=document.createElement("div");
                let div11=document.createElement("div");
                div11.setAttribute("class","rdisplay");
                let div12=document.createElement("div");
                div12.setAttribute("class","rdisplay");
                let div13=document.createElement("div");
                div13.setAttribute("class","rdisplay");
                let div14=document.createElement("div");
                div14.setAttribute("class","rdisplay");

                let p1=document.createElement("p");
                p1.textContent=el.product_id.name;
                let p11=document.createElement("p");
                p11.textContent="Size : 5";
                let p12=document.createElement("p");
                p12.textContent="Width : M";
                let p13=document.createElement("p");
                p13.textContent="Color : Black";
                let p14=document.createElement("button");
                p14.textContent="Delete";
                p14.setAttribute("class","rdeleteButton")
                div11.append(p11);
                div12.append(p12);
                div13.append(p13);
                div14.append(p14);
            
                div1.append(p1,div11,div12,div13,div14);
                p14.addEventListener("click",function(){
                    deleteItem(el.product_id._id);
                })


                let img1=document.createElement("img");
                img1.src=el.product_id.image1;
                imgname.append(img1,div1);
                product.append(imgname);

                let p21=document.createElement("p");
                p21.textContent=`$ ${el.product_id.price}.00`;
                price.append(p21);

                let p31=document.createElement("button");
                p31.textContent="-";
                p31.addEventListener("click",function(){
                    subtoCart(el.product_id._id);
                })
                let p32=document.createElement("p");
                p32.textContent=el.qty;
                let p33=document.createElement("button");
                p33.textContent="+";
                p33.addEventListener("click",function(){
                    addtoCart(el.product_id._id);
                })
                quantity.append(p31,p32,p33);

                let p41=document.createElement("p");
                p41.textContent=`$${el.product_id.price*el.qty}.00`;
                total.append(p41);
                totalprice_cart+=(+el.product_id.price*el.qty);
                

                let divfinal=document.createElement("div");               
                divfinal.append(product,price,quantity,total);
                divfinal.setAttribute("id","divfinal");
                document.querySelector("#rcartdyanamic").append(divfinal);
    })
    document.querySelector("#rsubtotalprice").append(`$${totalprice_cart}.00`);   
}


document.querySelector(".rcheckout").addEventListener("click",function(){
    final.push(totalprice_cart);
    localStorage.setItem('finalprice', JSON.stringify(final))
    window.location.href="checkout.html"
})





async function addtoCart(productID){

    try{
    
    //   console.log("inside")
    //    e.preventDefault();
    
       var cart_data = {
         user_id:currentUser.user_data._id,         
         product_id:productID            
       }
    
    // console.log(cart_data)
       cart_data=JSON.stringify(cart_data)
       console.log("hey abcd:",cart_data)
    
    }catch(err){
    
    console.log(err)
    }
    
    let reg_api = `https://blooming-refuge-71619.herokuapp.com/cart/additem/${currentUser.user_data._id}`
    
    let responce = await fetch(reg_api,{
      method:"POST",
      body:cart_data,
      headers:{
        "Content-Type":"application/json",
      },
    });
    // let data = await responce.json();
    // appendCart(data);
    location.reload();   
    // console.log("data",data)
}


async function subtoCart(productID){

    try{
    
    //   console.log("inside")
    //    e.preventDefault();
    
       var cart_data = {
         user_id:currentUser.user_data._id,         
         product_id:productID            
       }
    
    // console.log(cart_data)
       cart_data=JSON.stringify(cart_data)
       console.log("hey abcd:",cart_data)
    
    }catch(err){
    
    console.log(err)
    }
    
    let reg_api = `https://blooming-refuge-71619.herokuapp.com/cart/additem/${currentUser.user_data._id}?operation=dec`
    
    let responce = await fetch(reg_api,{
      method:"POST",
      body:cart_data,
      headers:{
        "Content-Type":"application/json",
      },
    });
    // let data = await responce.json();
    // appendCart(data);
    location.reload();   
    // console.log("data",data)
}

async function deleteItem(productID){

    try{
    
    //   console.log("inside")
    //    e.preventDefault();
    
       var cart_data = {
         user_id:currentUser.user_data._id,         
         product_id:productID            
       }
    
    // console.log(cart_data)
       cart_data=JSON.stringify(cart_data)
       console.log("hey abcd:",cart_data)
    
    }catch(err){
    
    console.log(err)
    }
    
    let reg_api = `https://blooming-refuge-71619.herokuapp.com/cart/${productID}`
    
    let responce = await fetch(reg_api,{
      method:"DELETE",
      body:cart_data,
      headers:{
        "Content-Type":"application/json",
      },
    });
    // let data = await responce.json();
    // appendCart(data);
    location.reload();   
    // console.log("data",data)
}