let carouselElement = document.getElementById("carousel");
let slideCorrente = 0;
let ultimaSlideConTastoNext = 4
let slideEls = document.getElementsByClassName("slide");
let btnBack = document.getElementById("back");
let bntForward = document.getElementById("forward");
let x = document.createElement("img");

let y = ["./img/01.webp", "./img/02.webp","./img/03.webp", "./img/04.webp", "./img/05.webp"]

for (let c = 0; c < y.length; c++) {
    const a = y[c]
    let e = document.createElement("img");
    e.src = a;
    e.className = "slide hidden";    
    carouselElement.append(e);

}

btnBack.addEventListener("click", function(){

    if(slideCorrente>0) {
        for (let c = 0; c < slideEls.length; c++) {
                const slide = slideEls[c];

            if(c == slideCorrente-1 ) {
                slide.classList.remove("hidden");
            } else {
                slide.classList.add("hidden");
            }
        }
        
        slideCorrente--;
    }
});

bntForward.addEventListener("click", function(){

    console.log("Current Slide: ", slideCorrente);

    if(slideCorrente < ultimaSlideConTastoNext) {
        for (let c = 0; c < slideEls.length; c++) {
            const slide = slideEls[c];

            if(c == slideCorrente+1 ) {
                slide.classList.remove("hidden");
            } else {
                slide.classList.add("hidden");
            }
        }
        slideCorrente++;
    }

});