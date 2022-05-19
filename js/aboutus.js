let benDetails = document.querySelector('.ben-details');
let ben = document.querySelector('.ben');
let benName = document.querySelector('.header-name-ben');


ben.addEventListener('mouseover', function mouseoverhandle(){
    if(ben){
        benDetails.style.display ="block";
        benDetails.style.cursor ="pointer";
        ben.style.display ="none";
        benName.style.display ="none";
    }
})

benDetails.addEventListener('mouseout', function mouseouthandle(){
    if(benDetails){
        benDetails.style.display ="none";
        ben.style.display ="block";
        benName.style.display ="block";
    }
})
