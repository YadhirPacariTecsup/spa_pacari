// Script para el Menu
function llamar(){
    let botonera = document.querySelector(".botonera");
    if (botonera) {
        botonera.classList.toggle("botonera-open");
        botonera.style.transition = "0.5s";
    }
}

// Script para la Galeria
let img = document.getElementById("img");
let num = 1;

function adelante(){
    num++;
    if (num > 8) num = 1;
    if (img) img.src = "img/spa0" + num + ".jpg";
}

function atras(){
    num--;
    if (num < 1) num = 8;
    if (img) img.src = "img/spa0" + num + ".jpg"; 
}

// Script del preloader
let preloader = document.getElementById("preloader");
setTimeout(function(){
    if (preloader) {
        preloader.style.transition = "0.5s";
        preloader.style.visibility = "hidden";
        preloader.style.opacity = "0"; // Añadido para que la transición de ocultado sea suave
    }
}, 2000);

// Script del Header
function Scroll(){
    let header = document.getElementById("header");
    let subir = document.getElementById("subir");
    let posy = window.pageYOffset;
    
    if (header) {
        header.style.transition = "0.5s";
        if (posy > 300) {
            header.style.background = "purple";
        } else {
            header.style.background = "none";
        }
    }
    
    if (subir) {
        subir.style.display = posy > 300 ? "block" : "none";
    }
}
window.addEventListener("scroll", Scroll);

// Script para Clientes
let imagenes = ["img/shakira.jpeg", "img/thalia.jpeg", "img/jennifer.jpg"];
let CambioImagenes = 0;

function Cambiar(){
    let imgCliente = document.images["imagen"] || document.querySelector("img[name='imagen']");
    if (imgCliente) {
        imgCliente.src = imagenes[CambioImagenes];
    }
    
    if (CambioImagenes < imagenes.length - 1) {
        CambioImagenes++;
    } else {
        CambioImagenes = 0;
    }
}

setInterval(Cambiar, 3000);
window.addEventListener("load", Cambiar);