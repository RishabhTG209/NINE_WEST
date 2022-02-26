var item = JSON.parse(localStorage.getItem('IndividualProduct'))
console.log("hey hey ",item[item.length-1])
fetchdata(item[item.length-1])
    

    async function fetchdata(item){
        try{
            let response=await fetch(
                    // `https://myapplication-nine-west.herokuapp.com/product/${item}`
                    `https://blooming-refuge-71619.herokuapp.com/products/${item}`
                );
                data=await response.json();
                // localData.push(data);
                product(data);
                console.log("Data: ",data);
            
        }        
        catch(error){
            console.log("Error : ",error);
        }       
}


function product(data){

    var pic1 = document.createElement('img')
    pic1.src = data.image1
    // console.log(pic1)
    var pic2 = document.createElement('img')
    pic2.src = data.image2
    var pic3 = document.createElement('img')
    pic3.src = data.image3

    var imageduplicate = document.createElement('img')
    imageduplicate.src = data.image1

    var title = document.createElement('h2')
    title.textContent = data.name

    var price = document.createElement('p')
    price.textContent = data.price


    var img1 = document.querySelector('.r-small-box1')
    img1.append(pic1)

    var img2 = document.querySelector('.r-small-box2')
    img2.append(pic2)

    var img3 = document.querySelector('.r-small-box3')
    img3.append(pic3)


    var bigimage = document.querySelector('#r-r-right')
    bigimage.append(imageduplicate)


    var name = document.querySelector('#r-r-name')
    name.append(title)

    var priceshow = document.querySelector('#printPricer')
    priceshow.append(price)


    let butt = document.querySelector('#add-to-bag')
    butt.addEventListener('click', function(){
        cartdata(data)
    })
    

}


function cartdata(data){
    cart.push(data)
    localStorage.setItem('cartdetails', JSON.stringify(cart))
    console.log(cart)
}


let go = document.getElementById('buy-it-now')
    go.addEventListener('click' ,function(){
        window.location.href = 'cart.html'
    })
