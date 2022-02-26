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
        let list_arr=data1.Search;
        appendList(list_arr);
    }
    catch(error){
        console.log("Error: ",error);
    }
}  

function appendList(product){
    
    product.forEach(elem=>{
        let divlist=document.createElement("div");
        divlist.setAttribute("class","divlist")
        let dishlistname=document.createElement("p");
        dishlistname.textContent=elem.strMeal;
        dishlistname.setAttribute("class","dishlistname");

        divlist.addEventListener("click", function () {
            console.log("hey3: ",elem);
            showData(elem);
        });
        document.querySelector("#searchinput").addEventListener("keypress",function(){
            if(event.key=='Enter'){
                    showData(elem);
                }
        });
        let listimage=document.createElement("img");
        listimage.src=elem.strMealThumb;
        listimage.setAttribute("class","dishlistphoto");
        divlist.append(listimage,dishlistname);
        check.append(divlist);
        // console.log(elem)
    })
    p.innerText="";

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