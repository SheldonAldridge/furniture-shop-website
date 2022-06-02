import { furniture } from "../classes/product.js";


const cartKey = "cart-storage-key";

let removeItems = document.getElementsByClassName("btn-danger");

//let addToCart = document.getElementsByClassName("btn-light");

function ready(){
    let addCartButton = document.getElementsByClassName('shop-item-button');
    for(let i = 0; i < addCartButton.length; i++){
        let button = addCartButton[i]
        button.addEventListener('click', addToCart)
    }
    console.log(button)
}

function addToCart(event){
    let button = event.target;
    let shopItem = button.parentElement.parentElement;
    let title = shopItem.getElementsByClassName('shop-item-title')[0].innerText;
    let price = shopItem.getElementsByClassName('shop-item-price')[0].innerText;
    let images = shopItem.getElementsByClassName('shop-item-image')[0].src;
    addItemToCart(title,price,images);
    updateCartTotal();

}

function addItemToCart(title,price,images){
    let cartRow = document.createElement('div');
    cartRow.classList.add('cart-row');
    let cartItems = document.getElementsByClassName('cart-items')[0];
    let cartItemNames = cartItems.getElementsByClassName('cart-item-title');
    for(let i = 0; i < cartItemNames.length; i++){
        alert("This item is already added to the cart")
        return
    }
}









let cart = document.querySelector(".cart");
let cartDisplay = document.querySelector(".content-section");
let close = document.querySelector(".exit");


cart.addEventListener('click', function showCart(){
    if(cart){
        cartDisplay.style.display = "block";
    }
})

close.addEventListener('click', function exitCart(){
    if(close){
        cartDisplay.style.display = "none";
    }
})

