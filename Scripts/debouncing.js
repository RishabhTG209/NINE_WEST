let listWaiting;
async function searchList(){
    
    // list_div.innerHTML="";
    let searched=document.querySelector("#searchinput").value;
    try{
        let response1 =await fetch(
            // `https://www.themealdb.com/api/json/v1/1/search.php?s=${searched}`
            `https://blooming-refuge-71619.herokuapp.com/productlist?category=${searched}`
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
        // p=document.createElement("p");
        // p.innerText=elem.Title;
        // p.setAttribute("class","listP");
        // // p.addEventListener("click", function () {
        // //     console.log("hey3: ",elem);
        // //   removemovie()  
        // //   searchList(elem);
        // // });
        // let poster1=document.createElement("img");
        // poster1.src=elem.Poster;
        // poster1.setAttribute("class","listPoster");
        // // poster1.addEventListener("click", function () {
        // //     console.log("hey3: ",elem);
        // //   removemovie()  
        // //   fetchdata(elem);
        // // });
        // divflex=document.createElement("div")
        // divflex.setAttribute("class","divflex");
        // divflex.append(poster1,p);
        // movies_div.append(divflex);
        // document.querySelector("#check").append(movies_div);
        console.log(elem)
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