
//get ben dtails from HTML elemental
let benDetails = document.querySelector('.ben-details');
let ben = document.querySelector('.ben');
let benName = document.querySelector('.header-name-ben');

//mouse hover event for ben-details to appear
ben.addEventListener('mouseover', function mouseoverBen(){
    if(ben){
        benDetails.style.display ="block";
        benDetails.style.cursor ="pointer";
        ben.style.display ="none";
        benName.style.display ="none";
    }
})

//mouse out event for ben-details to disappear
benDetails.addEventListener('mouseout', function mouseoutBen(){
    if(benDetails){
        benDetails.style.display ="none";
        ben.style.display ="block";
        benName.style.display ="block";
    }
})

//get lucy dtails from HTML elemental
let lucyDetails = document.querySelector('.lucy-details');
let lucy = document.querySelector('.lucy');
let lucyName = document.querySelector('.header-name-lucy');

//mouse hover event for lucy-details to appear
lucy.addEventListener('mouseover', function mouseoverLucy(){
    if(lucy){
        lucyDetails.style.display ="block";
        lucyDetails.style.cursor ="pointer";
        lucy.style.display ="none";
        lucyName.style.display ="none";
    }
})

//mouse out event for lucy-details to disappear
lucyDetails.addEventListener('mouseout', function mouseoutLucy(){
    if(lucyDetails){
        lucyDetails.style.display ="none";
        lucy.style.display ="block";
        lucyName.style.display ="block";
    }
})

//get castle dtails from HTML elemental
let castleDetails = document.querySelector('.castle-details');
let castle = document.querySelector('.castle');
let castleName = document.querySelector('.header-name-castle');

//mouse hover event for castle-details to appear
castle.addEventListener('mouseover', function mouseoverCastle(){
    if(castle){
        castleDetails.style.display ="block";
        castleDetails.style.cursor ="pointer";
        castle.style.display ="none";
        castleName.style.display ="none";
    }
})

//mouse out event for castle-details to disappear
castleDetails.addEventListener('mouseout', function mouseoutCastle(){
    if(castleDetails){
        castleDetails.style.display ="none";
        castle.style.display ="block";
        castleName.style.display ="block";
    }
})

//get brett dtails from HTML elemental
let brettDetails = document.querySelector('.brett-details');
let brett = document.querySelector('.brett');
let brettName = document.querySelector('.header-name-brett');

//mouse hover event for brett-details to appear
brett.addEventListener('mouseover', function mouseoverBrett(){
    if(brett){
        brettDetails.style.display ="block";
        brettDetails.style.cursor ="pointer";
        brett.style.display ="none";
        brettName.style.display ="none";
    }
})

//mouse out event for brett-details to disappear
brettDetails.addEventListener('mouseout', function mouseoutBrett(){
    if(brettDetails){
        brettDetails.style.display ="none";
        brett.style.display ="block";
        brettName.style.display ="block";
    }
})

//get matthew dtails from HTML elemental
let matthewDetails = document.querySelector('.matthew-details');
let matthew = document.querySelector('.matthew');
let mathewName = document.querySelector('.header-name-matthew');

//mouse hover event for matthew-details to appear
matthew.addEventListener('mouseover', function mouseoverMatthew(){
    if(matthew){
        matthewDetails.style.display ="block";
        matthewDetails.style.cursor ="pointer";
        matthew.style.display ="none";
        mathewName.style.display ="none";
    }
})

//mouse out event for mathew-details to disappear
matthewDetails.addEventListener('mouseout', function mouseoutMatthew(){
    if(matthewDetails){
        matthewDetails.style.display ="none";
        matthew.style.display ="block";
        mathewName.style.display ="block";
    }
})
