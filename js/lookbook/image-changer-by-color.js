let close = document.querySelector(".close");
let card = document.querySelector(".card");

let bed1 = document.querySelector(".bed1");
let corinBed = document.querySelector(".Corin-Bed");

let blue = document.querySelector(".blue-color");
let elephant = document.querySelector(".el-color");
let creamWhite = document.querySelector(".cream-color");

let bedOne = document.querySelector(".bed-one");
let bedTwo = document.querySelector(".bed-two");
let bedThree = document.querySelector(".bed-three");


close.addEventListener('click', function close(){
    if(close){
        card.style.display = "none";
    }
})

bed1.addEventListener('click', function open(){
    if(bed1){
        corinBed.style.display = "block";
        corinBed.style.animation = "openup 0.3s 1"
    }
})

blue.addEventListener('click', function blue(){
    if(blue){
        bedOne.style.display = "block";
        bedTwo.style.display = "none";
        bedThree.style.display = "none";
    }
})

elephant.addEventListener('click', function elephant(){
    if(elephant){
        bedOne.style.display = "none";
        bedTwo.style.display = "block";
        bedTwo.style.position = "relative";
        bedThree.style.display = "none";
    }
})

creamWhite.addEventListener('click', function creamWhite(){
    if(creamWhite){
        bedOne.style.display = "none";
        bedTwo.style.display = "none";
        bedThree.style.position = "relative";
        bedThree.style.display = "block";
    }
})
