let listWaiting;
let check=document.querySelector("#check");


async function searchList(){
    
    // list_div.innerHTML="";
    let searched=document.querySelector("#searchinput").value;
    try{
        let response1 =await fetch(
            // `https://www.themealdb.com/api/json/v1/1/search.php?s=${searched}`
            `https://blooming-refuge-71619.herokuapp.com/productlist/${searched}`
            // `http://localhost:3125/productlist/${searched}`
        );
        let data1=await response1.json();
        console.log("Data1 : ",data1);
        appendList(data1);
    }
    catch(error){
        console.log("Error: ",error);
    }
}  

function appendList(product){
    
    product.forEach(elem=>{
        let divlist=document.createElement("div");
        divlist.setAttribute("class","divlist")
        let productname=document.createElement("p");
        productname.textContent=elem.name;
        productname.setAttribute("class","productname");
        let productprice=document.createElement("p");
        productprice.textContent=`$${elem.price}.00`;
        productprice.setAttribute("class","productprice");
        let divnameprice=document.createElement("div");
        divnameprice.setAttribute("class","divnameprice")
        divnameprice.append(productname,productprice)

        // divlist.addEventListener("click", function () {
        //     console.log("hey3: ",elem);
        //     showData(elem);
        // });
        // document.querySelector("#searchinput").addEventListener("keypress",function(){
        //     if(event.key=='Enter'){
        //             showData(elem);
        //         }
        // });
        let productimage=document.createElement("img");
        productimage.src=elem.image;
        productimage.setAttribute("class","productphoto");
        divlist.append(productimage,divnameprice);
        check.append(divlist);
        // console.log(elem)
    })
    // check.innerText="";

}

//Removing the already present movie poster in #inputdata
// function removemovie(){
//     document.querySelector("#inputdata").innerHTML="";
// }

//Removing previous API calls which is not required for fast typers
function debounce(func,delay){
    
    if(listWaiting){
        clearTimeout(listWaiting);
    }
    listWaiting=setTimeout(function(){
        func();
    },delay);
}