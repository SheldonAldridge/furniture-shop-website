//get vairaibles for slide
let row = document.querySelector(".row");
let rowSlide = document.querySelectorAll(".rowslide");
let row2Container = document.querySelector(".row2-container");
let rightBtn = document.querySelector(".right-btn");
let leftBtn = document.querySelector(".left-btn");
let one = document.querySelector(".one");
let two = document.querySelector(".two");

//event listener for pressing right button

rightBtn.addEventListener('click', function rightbtn(){
    if(rightBtn){
        row2Container.style.display = "block";
        leftBtn.style.display = "block";
    }
})

//event listener for pressing 2
two.addEventListener('click', function rightbtn(){
    if(two){
        row2Container.style.display = "block";
        leftBtn.style.display = "block";
    }
})

leftBtn.addEventListener('click',function leftbtn(){
    if(leftBtn){
        row.style.display="flex";
        rowSlide.style.animation="slideleft 1s 1 forwards";
        row2Container.style.display="none";
        leftBtn.style.display = "none";
    }
})
