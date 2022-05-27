let close = document.querySelector(".close");
let corinCard = document.querySelector(".corin-bed");

let bed1 = document.querySelector(".bed1");
let corinBed = document.querySelector(".corin-bed");

let blue = document.querySelector(".blue-color");
let elephant = document.querySelector(".el-color");
let creamWhite = document.querySelector(".cream-color");

let bedOne = document.querySelector(".bed-one");
let bedTwo = document.querySelector(".bed-two");
let bedThree = document.querySelector(".bed-three");

close.addEventListener('click', function close(){
    if(close){
        corinCard.style.display = "none";
    }
});

bed1.addEventListener('click', function open(){
    if(bed1){
        corinCard.style.display = "block";
        corinCard.style.animation = "openup 0.3s 1";
    }
});

blue.addEventListener('click', function blue(){
    if(blue){
        bedOne.style.display = "block";
        bedTwo.style.display = "none";
        bedThree.style.display = "none";
    }
});

elephant.addEventListener('click', function elephant(){
    if(elephant){
        bedOne.style.display = "none";
        bedTwo.style.display = "block";
        bedTwo.style.position = "relative";
        bedThree.style.display = "none";
    }
});

creamWhite.addEventListener('click', function creamWhite(){
    if(creamWhite){
        bedOne.style.display = "none";
        bedTwo.style.display = "none";
        bedThree.style.position = "relative";
        bedThree.style.display = "block";
    }
});

let mirandaClose = document.querySelector(".miranda-close");

let bedtwo = document.querySelector(".bed2");

let mirandaBed = document.querySelector(".miranda-bed");

let anthracite = document.querySelector(".anthracite-color");
let lime = document.querySelector(".lime-color");

let mirandaOne = document.querySelector(".miranda-one");
let mirandaTwo = document.querySelector(".miranda-two");

mirandaClose.addEventListener('click', function close(){
    if(mirandaClose){
        mirandaBed.style.display = "none";
    }
});

bedtwo.addEventListener('click', function mirandaOpen(){
    if(bedtwo){
        mirandaBed.style.display = "block";
        mirandaBed.style.animation = "openup 0.3s 1";
        mirandaTwo.style.display = "none";
    }
});

anthracite.addEventListener('click', function anthracite(){
    if(anthracite){
        mirandaOne.style.display = "block";
        mirandaTwo.style.display = "none";
    }
});

lime.addEventListener('click', function lime(){
    if(lime){
        mirandaOne.style.display = "none";
        mirandaTwo.style.display = "block";
    }
});

let miuzzaClose = document.querySelector(".miuzza-close");

let bedthree = document.querySelector(".bed3");

let miuzzaBed = document.querySelector(".miuzza-bed");

let cream = document.querySelector(".vienna-cream-color");
let deepBlue = document.querySelector(".deep-blue-color");

let miuzzaOne = document.querySelector(".miuzza-one");
let miuzzaTwo = document.querySelector(".miuzza-two");

miuzzaClose.addEventListener('click', function miuzzaClose(){
    if(mirandaClose){
        miuzzaBed.style.display = "none";
    }
});

bedthree.addEventListener('click', function mirandaOpen(){
    if(bedthree){
        miuzzaBed.style.display = "block";
        miuzzaBed.style.animation = "openup 0.3s 1";
        miuzzaTwo.style.display = "none";
    }
});

cream.addEventListener('click', function cream(){
    if(cream){
        miuzzaOne.style.display = "block";
        miuzzaTwo.style.display = "none";
    }
});

deepBlue.addEventListener('click', function deepBlue(){
    if(deepBlue){
        miuzzaOne.style.display = "none";
        miuzzaTwo.style.display = "block";
    }
});

let normaClose = document.querySelector(".norma-close");

let bedfour = document.querySelector(".bed4");

let normaBed = document.querySelector(".norma-bed");

let beige = document.querySelector(".vienna-Beige-color");
let viennadeepBlue = document.querySelector(".vienna-deep-blue-color");
let viennelephant = document.querySelector(".vienna-elephant-color");

let normaOne = document.querySelector(".norma-one");
let normaTwo = document.querySelector(".norma-two");
let normaThree = document.querySelector(".norma-three");

normaClose.addEventListener('click', function normaClose(){
    if(normaClose){
        normaBed.style.display = "none";
    }
});

bedfour.addEventListener('click', function normaOpen(){
    if(bedfour){
        normaBed.style.display = "block";
        normaOne.style.display = "block";
        normaBed.style.animation = "openup 0.3s 1";
        normaTwo.style.display = "none";
        normaThree.style.display = "none";
    }
});

beige.addEventListener('click', function beige(){
    if(beige){
        normaOne.style.display = "block";
        normaTwo.style.display = "none";
        normaThree.style.display = "none";
    }
});

viennadeepBlue.addEventListener('click', function viennadeepBlue(){
    if(viennadeepBlue){
        normaOne.style.display = "none";
        normaTwo.style.display = "block";
        normaThree.style.display = "none";
    }
});

viennelephant.addEventListener('click', function viennelephant(){
    if(viennelephant){
        normaOne.style.display = "none";
        normaTwo.style.display = "none";
        normaThree.style.display = "block";
    }
});

let alphaClose = document.querySelector(".alpha-close");

let bedSideOne = document.querySelector(".bedside1");

let alphaBedSide = document.querySelector(".alpha-bedside");

let lightOak = document.querySelector(".light-oak-color");
let wedge = document.querySelector(".wedge-color");


let alphaOne = document.querySelector(".alpha-one");
let alphaTwo = document.querySelector(".alpha-two");


alphaClose.addEventListener('click', function alphaClose(){
    if(alphaClose){
        alphaBedSide.style.display = "none";
    }
});

bedSideOne.addEventListener('click', function alphaOpen(){
    if(bedSideOne){
        alphaBedSide.style.display = "block";
        alphaBedSide.style.animation = "openup 0.3s 1";
        alphaOne.style.display = "block";
        alphaTwo.style.display = "none";
    }
});

lightOak.addEventListener('click', function lightOak(){
    if(lightOak){
        alphaOne.style.display = "block";
        alphaTwo.style.display = "none";
    }
});

wedge.addEventListener('click', function wedge(){
    if(wedge){
        alphaOne.style.display = "none";
        alphaTwo.style.display = "block";
    }
});

let cyrusClose = document.querySelector(".cyrus-close");

let bedSideTwo = document.querySelector(".bedside2");

let cyrusBedSide = document.querySelector(".cyrus-bedside");

let whiteOak = document.querySelector(".white-oak-color");
let cyrusWedge = document.querySelector(".cyrus-wedge-color");
let cyruslight = document.querySelector(".cyrus-light-oak-color");

let cyrusOne = document.querySelector(".cyrus-one");
let cyrusTwo = document.querySelector(".cyrus-two");
let cyrusThree = document.querySelector(".cyrus-three");


cyrusClose.addEventListener('click', function cyrusClose(){
    if(cyrusClose){
        cyrusBedSide.style.display = "none";
    }
});

bedSideTwo.addEventListener('click', function cyrusOpen(){
    if(bedSideTwo){
        cyrusBedSide.style.display = "block";
        cyrusBedSide.style.animation = "openup 0.3s 1";
        cyrusOne.style.display = "block";
        cyrusTwo.style.display = "none";
        cyrusThree.style.display = "none";
    }
});

cyrusWedge.addEventListener('click', function cyrusWedge(){
    if(cyrusWedge){
        cyrusOne.style.display = "block";
        cyrusTwo.style.display = "none";
        cyrusThree.style.display = "none";
    }
});

whiteOak.addEventListener('click', function whiteOak(){
    if(whiteOak){
        cyrusOne.style.display = "none";
        cyrusTwo.style.display = "block";
        cyrusThree.style.display = "none";
    }
});

cyruslight.addEventListener('click', function cyruslightOak(){
    if(cyruslight){
        cyrusOne.style.display = "none";
        cyrusTwo.style.display = "none";
        cyrusThree.style.display = "block";
    }
});

let gammaClose = document.querySelector(".gamma-close");

let bedSideThree = document.querySelector(".bedside3");

let gammaBedSide = document.querySelector(".gamma-bedside");

let gammawhiteOak = document.querySelector(".gamma-white-oak-color");
let gammaWedge = document.querySelector(".gamma-wedge-color");
let gammalight = document.querySelector(".gamma-light-oak-color");

let gammaOne = document.querySelector(".gamma-one");
let gammaTwo = document.querySelector(".gamma-two");
let gammaThree = document.querySelector(".gamma-three");


gammaClose.addEventListener('click', function gammaClose(){
    if(gammaClose){
        gammaBedSide.style.display = "none";
    }
});

bedSideThree.addEventListener('click', function gammaOpen(){
    if(bedSideThree){
        gammaBedSide.style.display = "block";
        gammaBedSide.style.animation = "openup 0.3s 1";
        gammaOne.style.display = "block";
        gammaTwo.style.display = "none";
        gammaThree.style.display = "none";
    }
});

gammaWedge.addEventListener('click', function gammaWedge(){
    if(gammaWedge){
        gammaOne.style.display = "none";
        gammaTwo.style.display = "block";
        gammaThree.style.display = "none";
    }
});

gammalight.addEventListener('click', function gammalight(){
    if(gammalight){
        gammaOne.style.display = "block";
        gammaTwo.style.display = "none";
        gammaThree.style.display = "none";
    }
});

gammawhiteOak.addEventListener('click', function gammawhiteOak(){
    if(gammawhiteOak){
        gammaOne.style.display = "none";
        gammaTwo.style.display = "none";
        gammaThree.style.display = "block";
    }
});


let gammaThreeClose = document.querySelector(".gamma3-close");

let bedSideFour = document.querySelector(".bedside4");

let gammaThreeBedSide = document.querySelector(".gamma3-bedside");

let gammaThreewalnut = document.querySelector(".gamma3-walnut-color");
let gammaThreeWedge = document.querySelector(".gamma3-wedge-color");
let gammaThreewhite = document.querySelector(".gamma3-white-color");

let gammaThreeOne = document.querySelector(".gamma3-one");
let gammaThreeTwo = document.querySelector(".gamma3-two");
let gammaThreeThree = document.querySelector(".gamma3-three");


gammaThreeClose.addEventListener('click', function gammaThreeClose(){
    if(gammaThreeClose){
        gammaThreeBedSide.style.display = "none";
    }
});

bedSideFour.addEventListener('click', function bedSideFour(){
    if(bedSideFour){
        gammaThreeBedSide.style.display = "block";
        gammaThreeBedSide.style.animation = "openup 0.3s 1";
        gammaThreeOne.style.display = "block";
        gammaThreeTwo.style.display = "none";
        gammaThreeThree.style.display = "none";
    }
});

gammaThreewalnut.addEventListener('click', function gammaThreewalnut(){
    if(gammaThreewalnut){
        gammaThreeOne.style.display = "block";
        gammaThreeTwo.style.display = "none";
        gammaThreeThree.style.display = "none";
    }
});

gammaThreeWedge.addEventListener('click', function gammaThreeWedge(){
    if(gammaThreeWedge){
        gammaThreeOne.style.display = "none";
        gammaThreeTwo.style.display = "block";
        gammaThreeThree.style.display = "none";
    }
});

gammaThreewhite.addEventListener('click', function gammaThreewhite(){
    if(gammaThreewhite){
        gammaThreeOne.style.display = "none";
        gammaThreeTwo.style.display = "none";
        gammaThreeThree.style.display = "block";
    }
});



let takkaClose = document.querySelector(".takka-close");

let bedSideFive = document.querySelector(".bedside5");

let takkaBedSide = document.querySelector(".takka-bedside");

let takkaWalnut = document.querySelector(".takka-mahogany-color");
let takkaMahogany = document.querySelector(".takka-walnut-color");

let takaOne = document.querySelector(".takka-one");
let takaTwo = document.querySelector(".takka-two");

takkaClose.addEventListener('click', function takkaClose(){
    if(takkaClose){
        takkaBedSide.style.display = "none";
    }
});

bedSideFive.addEventListener('click', function bedSideFive(){
    if(bedSideFive){
        takkaBedSide.style.display = "block";
        takkaBedSide.style.animation = "openup 0.3s 1";
        takaOne.style.display = "block";
        takaTwo.style.display = "none";
    }
});

takkaWalnut.addEventListener('click', function takkaWalnut(){
    if(takkaWalnut){
        takaOne.style.display = "block";
        takaTwo.style.display = "none";
    }
});

takkaMahogany.addEventListener('click', function takkaMahogany(){
    if(takkaMahogany){
        takaOne.style.display = "none";
        takaTwo.style.display = "block";
    }
});

let alexiaClose = document.querySelector(".alexia-close");

let chairOne = document.querySelector(".chair1");

let chairCardOne = document.querySelector(".alexia-chair");

let alexiaBlack = document.querySelector(".alexia-black-color");
let alexiaBrown = document.querySelector(".alexia-brown-color");

let alexiaOne = document.querySelector(".alexia-one");
let alexiaTwo = document.querySelector(".alexia-two");

alexiaClose.addEventListener('click', function alexiaClose(){
    if(alexiaClose){
        chairCardOne.style.display = "none";
    }
});

chairOne.addEventListener('click', function chairOne(){
    if(chairOne){
        chairCardOne.style.display = "block";
        chairCardOne.style.animation = "openup 0.3s 1";
        alexiaOne.style.display = "block";
        alexiaTwo.style.display = "none";
    }
});

alexiaBlack.addEventListener('click', function alexiaBlack(){
    if(alexiaBlack){
        alexiaOne.style.display = "block";
        alexiaTwo.style.display = "none";
    }
});

alexiaBrown.addEventListener('click', function alexiaBrown(){
    if(alexiaBrown){
        alexiaOne.style.display = "none";
        alexiaTwo.style.display = "block";
    }
});

let jeanClose = document.querySelector(".jean-close");

let chairTwo = document.querySelector(".chair2");

let chairCardTwo = document.querySelector(".jean-chair");

let jeanAntraciet = document.querySelector(".jean-antraciet-color");
let jeanTaupe = document.querySelector(".jean-taupe-color");

let jeanOne = document.querySelector(".jean-one");
let jeanTwo = document.querySelector(".jean-two");

jeanClose.addEventListener('click', function jeanClose(){
    if(jeanClose){
        chairCardTwo.style.display = "none";
    }
});

chairTwo.addEventListener('click', function chairTwo(){
    if(chairTwo){
        chairCardTwo.style.display = "block";
        chairCardTwo.style.animation = "openup 0.3s 1";
        jeanOne.style.display = "block";
        jeanTwo.style.display = "none";
    }
});

jeanAntraciet.addEventListener('click', function jeanAntraciet(){
    if(jeanAntraciet){
        jeanOne.style.display = "block";
        jeanTwo.style.display = "none";
    }
});

jeanTaupe.addEventListener('click', function jeanTaupe(){
    if(alexiaBrown){
        jeanOne.style.display = "none";
        jeanTwo.style.display = "block";
    }
});

let maximeClose = document.querySelector(".maxime-close");

let chairThree = document.querySelector(".chair3");

let chairCardThree = document.querySelector(".maxime-chair");

let maximeEcru = document.querySelector(".maxime-ecru-color");
let maximeLichtgrijs = document.querySelector(".maxime-lichtgrijs-color");

let maximeOne = document.querySelector(".maxime-one");
let maximeTwo = document.querySelector(".maxime-two");

maximeClose.addEventListener('click', function maximeClose(){
    if(maximeClose){
        chairCardThree.style.display = "none";
    }
});

chairThree.addEventListener('click', function chairThree(){
    if(chairThree){
        chairCardThree.style.display = "block";
        chairCardThree.style.animation = "openup 0.3s 1";
        maximeOne.style.display = "block";
        maximeTwo.style.display = "none";
    }
});

maximeEcru.addEventListener('click', function maximeEcru(){
    if(maximeEcru){
        maximeOne.style.display = "block";
        maximeTwo.style.display = "none";
    }
});

maximeLichtgrijs.addEventListener('click', function maximeLichtgrijs(){
    if(maximeLichtgrijs){
        maximeOne.style.display = "none";
        maximeTwo.style.display = "block";
    }
});
