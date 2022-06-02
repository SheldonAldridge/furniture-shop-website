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
    let cartItems = document.getElementsByClassName('cart-items')[0]
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

/**
const { createApp } = Vue;


createApp({
    data(){
        return{
            furnitureList:[
                new furniture(
                    furniture.id,
                    "../assets/lookbook/beds/Corin Bed-Vienna Dark Blue.png",
                    "Corin Bed",
                     8000,
                    "../assets/lookbook/beds/Corin Bed-Vienna Dark Blue.png"
                ),
                new furniture(
                    furniture.id,
                    "../assets/lookbook/beds/Miranda Bed - Elephant & Anthracite.png",
                    "Miranda Bed",
                     5000,
                    "../assets/lookbook/beds/Miranda Bed - Elephant & Anthracite.png"
                    ),
                new furniture(
                    furniture.id,
                    "../assets/lookbook/beds/Miuzza Bed - Vienna Cream.png",
                    "Miuzza Bed",
                     6000,
                    "../assets/lookbook/beds/Miuzza Bed - Vienna Cream.png"
                ),
                new furniture(
                    furniture.id,
                    "../assets/lookbook/beds/Miuzza Bed - Vienna Cream.png",
                    "Miuzza Bed",
                     6000,
                    "../assets/lookbook/beds/Miuzza Bed - Vienna Cream.png"
                ),

                new furniture(
                    furniture.id,
                    "../assets/lookbook/beds/Norma Bed - Vienna Beige.png",
                    "Norma Bed",
                     7000,
                    "../assets/lookbook/beds/Norma Bed - Vienna Beige.png"
                ),

                new furniture(
                    furniture.id,
                    "../assets/lookbook/bedside table/ALPHA 1 DRAWER PEDESTAL-light oak.jpg",
                    "Alpha Bedside  Table",
                     800,
                    "../assets/lookbook/bedside table/ALPHA 1 DRAWER PEDESTAL-light oak.jpg"
                ),

                new furniture(
                    furniture.id,
                    "../assets/lookbook/bedside table/CYRUS 1 DOOR PEDESTAL - wedge.jpg",
                    "Cyris Bedside Table",
                     800,
                    "../assets/lookbook/bedside table/CYRUS 1 DOOR PEDESTAL - wedge.jpg"
                ),

                new furniture(
                    furniture.id,
                    "../assets/lookbook/bedside table/GAMMA 2 DRAWER PEDESTAL-light oak.jpg",
                    "GAMMA 2 Bedside Table",
                     1200,
                    "../assets/lookbook/bedside table/GAMMA 2 DRAWER PEDESTAL-light oak.jpg"
                ),

                new furniture(
                    furniture.id,
                    "../assets/lookbook/bedside table/GAMMA 3 DRAWER PEDESTAL-walnut.jpg",
                    "Gamma 3 Bedside Table",
                     700,
                    "../assets/lookbook/bedside table/GAMMA 3 DRAWER PEDESTAL-walnut.jpg"
                ),

                new furniture(
                    furniture.id,
                    "../assets/lookbook/bedside table/TIKKA 1 DRAWER PEDESTAL-mahogany.jpg",
                    "Tikka Bedside Table",
                     700,
                    "../assets/lookbook/bedside table/TIKKA 1 DRAWER PEDESTAL-mahogany.jpg"
                ),

                new furniture(
                    furniture.id,
                    "../assets/lookbook/chair/ALEXA CHAIR - GRIJS.jpg",
                    "Alexia Chair",
                     1300,
                    "../assets/lookbook/chair/ALEXA CHAIR - GRIJS.jpg"
                ),

                new furniture(
                    furniture.id,
                    "../assets/lookbook/chair/JEAN STOOL - ANTRACIET.jpg",
                    "Jean Chair",
                     1000,
                    "../assets/lookbook/chair/JEAN STOOL - ANTRACIET.jpg"
                ),

                new furniture(
                    furniture.id,
                    "../assets/lookbook/chair/MAXIME CHAIR - ECRU.jpg",
                    "Maxime Chair",
                     1500,
                    "../assets/lookbook/chair/MAXIME CHAIR - ECRU.jpg"
                ),

                new furniture(
                    furniture.id,
                    "../assets/lookbook/chair/OSCAR CHAIR - ANTRACIET.jpg",
                    "Oscar Chair",
                     1300,
                    "../assets/lookbook/chair/OSCAR CHAIR - ANTRACIET.jpg"
                ),

                new furniture(
                    furniture.id,
                    "../assets/lookbook/coffee table/CADEN 120x60cm COFFEE TABLE-Light Oak.jpg",
                    "Caden Chair",
                     600,
                    "../assets/lookbook/coffee table/CADEN 120x60cm COFFEE TABLE-Light Oak.jpg"
                ),

                new furniture(
                    furniture.id,
                    "../assets/lookbook/coffee table/JUDY 100x55cm COFFEE TABLE-light oak.jpg",
                    "Judy Chair",
                     900,
                    "../assets/lookbook/coffee table/JUDY 100x55cm COFFEE TABLE-light oak.jpg"
                ),
            ],

            CartArray: [],
        };
    },
    
}).mount("#app");
*/