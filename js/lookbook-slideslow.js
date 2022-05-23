let row2Container = document.querySelector(".row2-container");
let rightBtn = document.querySelector(".right-btn");
let one = document.querySelector(".one");
let two = document.querySelector(".two");

rightBtn.addEventListener('click', function rightbtn(){
    if(rightBtn){
        row2Container.style.display = "block";
    }
})

two.addEventListener('click', function rightbtn(){
    if(two){
        row2Container.style.display = "block";
    }
})