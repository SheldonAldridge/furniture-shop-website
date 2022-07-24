let carts = document.querySelectorAll('.shop-item-button');

let products = [
    {
    name: 'Corin Bed',
    tag: 'Corin Bed-Vienna Dark Blue.jpg',
    price: 3500,
    inCart:0
},
{
    name: 'Miranda Bed',
    tag: 'Miranda Bed - Elephant & Anthracite.jpg',
    price: 2500,
    inCart:0
},
{
    name: 'Miuzza Bed',
    tag: 'Miuzza Bed - Vienna Cream.jpg',
    price: 2000,
    inCart:0
},
{
    name: 'Norma Bed',
    tag: 'Norma Bed - Vienna Beige.jpg',
    price: 3000,
    inCart:0
},
{
    name: 'Alpha Bedside',
    tag: 'ALPHA 1 DRAWER PEDESTAL-light oak.jpg',
    price: 1200,
    inCart:0
},
{
    name: 'Cyrus Bedside',
    tag: 'CYRUS 1 DOOR PEDESTAL - wedge.jpg',
    price: 1567,
    inCart:0
},
{
    name: 'Gamma Bedside',
    tag: 'GAMMA 2 DRAWER PEDESTAL-light oak.jpg',
    price: 900,
    inCart:0
},
{
    name: 'Gamma 3 Bedside',
    tag: 'GAMMA 3 DRAWER PEDESTAL-walnut.jpg',
    price: 1100,
    inCart:0
},
{
    name: 'Takka Bedside',
    tag: 'TIKKA 1 DRAWER PEDESTAL-mahogany.jpg',
    price: 800,
    inCart:0
},
{
    name: 'Alexia Chair',
    tag: 'ALEXA CHAIR - GRIJS.jpg',
    price: 1500,
    inCart:0
},
{
    name: 'Jean Chair',
    tag: 'JEAN STOOL - ANTRACIET.jpg',
    price: 1050,
    inCart:0
},
{
    name: 'Maxime Chair',
    tag: 'MAXIME CHAIR - ECRU.jpg',
    price: 1300,
    inCart:0
},
{
    name: 'Oscar Chair',
    tag: 'OSCAR CHAIR - ANTRACIET.jpg',
    price: 700,
    inCart:0
},
{
    name: 'Caden Coffee Table',
    tag: 'CADEN 120x60cm COFFEE TABLE-Light Oak.jpg',
    price: 1500,
    inCart:0
},
{
    name: 'Judy Coffee Table',
    tag: 'JUDY 100x55cm COFFEE TABLE-light oak.jpg',
    price: 1300,
    inCart:0
},
]

for(let i = 0; i < carts.length; i++){
    carts[i].addEventListener('click', () =>{
        cartNumbers(products[i]);
        totalCost(products[i])
    })
}

function onloadCartNumbers(){
    let productNumbers = localStorage.getItem('cartNumbers');

    if(productNumbers){
        document.querySelector('.cart span').textContent = productNumbers;
    }
}

function cartNumbers(products){
    let productNumbers = localStorage.getItem('cartNumbers');

    productNumbers = parseInt(productNumbers);

    if( productNumbers ){
        localStorage.setItem('cartNumbers', productNumbers + 1);
        document.querySelector('.cart span').textContent = productNumbers + 1;
    }
    else{
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.cart span').textContent = 1;
    }
    
    setItem(products)
}

function setItem(products){
   let cartItems = localStorage.getItem('productsIncart')
   cartItems = JSON.parse(cartItems);

   
    if(cartItems != null) {

        if(cartItems[products.tag] == undefined){
            cartItems = {
                ...cartItems,
                [products.tag]:products
            }
        }
        cartItems[products.tag].inCart += 1;
       }
       else{
           products.incart = 1;
           cartItems = {
               [products.tag]: products
           }
       }

    localStorage.setItem("productsIncart",JSON.stringify (cartItems));
}

function totalCost(products){
//console.log("the product price is", products.price);
let cartCost = localStorage.getItem("totalCost");



console.log("the product price is", cartCost);

if(cartCost != null){
    cartCost = parseInt(cartCost);
    localStorage.setItem("totalCost", cartCost + products.price);
}
else{
    localStorage.setItem("totalCost", products.price);
}
}

function displayCart(){
    let cartItems = localStorage.getItem("productsIncart");
    cartItems = JSON.parse(cartItems);

let productContainer = document.querySelector(".products")
let cartCost = localStorage.getItem("totalCost");
    if(cartItems && productContainer){
        productContainer.innerHTML = '';
        Object.values(cartItems).map(item => {
            productContainer.innerHTML += `
            <div class = "product">
            <svg class="remove" clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m12.002 2.005c5.518 0 9.998 4.48 9.998 9.997 0 5.518-4.48 9.998-9.998 9.998-5.517 0-9.997-4.48-9.997-9.998 0-5.517 4.48-9.997 9.997-9.997zm0 8.933-2.721-2.722c-.146-.146-.339-.219-.531-.219-.404 0-.75.324-.75.749 0 .193.073.384.219.531l2.722 2.722-2.728 2.728c-.147.147-.22.34-.22.531 0 .427.35.75.751.75.192 0 .384-.073.53-.219l2.728-2.728 2.729 2.728c.146.146.338.219.53.219.401 0 .75-.323.75-.75 0-.191-.073-.384-.22-.531l-2.727-2.728 2.717-2.717c.146-.147.219-.338.219-.531 0-.425-.346-.75-.75-.75-.192 0-.385.073-.531.22z" fill-rule="nonzero"/></svg>
                <img src="../assets/lookbook/${item.tag}">
                <span>${item.name}</span>
            </div>
            <div class="cost">${item.price}</div> 
            <div class="itemVolume">
            <svg clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m22 12.002c0-5.517-4.48-9.997-9.998-9.997-5.517 0-9.997 4.48-9.997 9.997 0 5.518 4.48 9.998 9.997 9.998 5.518 0 9.998-4.48 9.998-9.998zm-8.211-4.843c.141-.108.3-.157.456-.157.389 0 .755.306.755.749v8.501c0 .445-.367.75-.755.75-.157 0-.316-.05-.457-.159-1.554-1.203-4.199-3.252-5.498-4.258-.184-.142-.29-.36-.29-.592 0-.23.107-.449.291-.591z" fill-rule="nonzero"/></svg>
            <svg clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m2.009 12.002c0-5.517 4.48-9.997 9.998-9.997s9.998 4.48 9.998 9.997c0 5.518-4.48 9.998-9.998 9.998s-9.998-4.48-9.998-9.998zm8.211-4.843c-.141-.108-.3-.157-.456-.157-.389 0-.755.306-.755.749v8.501c0 .445.367.75.755.75.157 0 .316-.05.457-.159 1.554-1.203 4.199-3.252 5.498-4.258.184-.142.29-.36.29-.592 0-.23-.107-.449-.291-.591z" fill-rule="nonzero"/></svg>
            </div>
            <div class="volume"><span>${item.inCart}</span></div> 
            <div class="totalCost">
            <span class ="total">R${item.inCart * item.price}</span>
            </div> 
            `
        });

        productContainer.innerHTML += `
        <div class="basketTotalContainer">
        <h4 class="basketTotalTitle">
          Cart Total
        </h4>
        <h4 class="basketTotal">
            R${cartCost}
        </h4>
      </div>
        `
    }

    let remove = document.querySelector(".remove")

    remove.addEventListener("click",()=>{
        localStorage.removeItem("productsIncart");
        localStorage.removeItem("totalCost");
        localStorage.removeItem("cartNumbers");

        alert("button was clicked")
    })
}

onloadCartNumbers()
displayCart()
