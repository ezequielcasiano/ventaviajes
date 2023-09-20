
import {barcelona,roma,paris,londres} from './ciudades.js'

let enlaces = document.querySelectorAll("a")
let tituloELemento = document.getElementById("titulo")
let subTituloELemento = document.getElementById("titulo")
let parrafoELemento = document.getElementById("parrafo")
let precioELemento = document.getElementById("precio")



enlaces.forEach(function(enlace){
    enlace.addEventListener('click', function(){
        enlaces.forEach(function (enlace){
            enlace.classList.remove('active')
        });

        this.classList.add('active')

        let contenido = obtenerContenido(this.textContent)

        tituloELemento.innerHTML = contenido.titulo
        subTituloELemento.innerHTML = contenido.subtitulo
        parrafoELemento.innerHTML = contenido.parrafo
        precioELemento.innerHTML = contenido.precio
    });
});

function obtenerContenido(enlace){
    let contenido = {
        'Barcelona': barcelona,
        'Roma': roma,
        'París': paris,
        'Londres': londres,
    };
    return contenido[enlace];
}