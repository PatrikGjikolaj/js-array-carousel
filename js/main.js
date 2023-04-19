let carouselElement = document.getElementById("carousel");


let x = document.createElement("img");
x.src = "./img/01.webp";
x.className = "slide show";
carouselElement.append(x);

let y = ["./img/02.webp","./img/03.webp", "./img/04.webp", "./img/05.webp"]



for (let c = 0; c < y.length; c++) {

    y[c] = document.createElement("img");
    y[c].src = y[c]
    carouselElement.append(y[c]);
    y.className = "slide hidden";
}


console.log(y);