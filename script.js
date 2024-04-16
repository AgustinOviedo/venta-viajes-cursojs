import { barcelona, roma, paris, londres } from "./ciudades.js";

// obtener los elementos del DOM

let enlaces = document.querySelectorAll("a"); // nos devuelve 4 nodos

let tituloElemento = document.getElementById("titulo");
let subtituloElemento = document.getElementById("subtitulo");
let parrafoElemento = document.getElementById("parrafo");
let precioElemento = document.getElementById("precio")

// Agregar un evento CLICK a cada enlace
enlaces.forEach(function (enlace) {
  enlace.addEventListener("click", function () {
    // REMOVER CLASE ACTIVE
    enlaces.forEach(function (enlace) {
      enlace.classList.remove("active");
    });

    // AGREGAR CLASE ACTIVE AL QUE CORRESPONDA
    this.classList.add("active");

    // TRAER LA INFO DEL OBJETO CORRESPONDIENTE A LA ELECCION
    let contenido = obtenerContenido(this.textContent);

    // MOSTRAR EL CONTENIDO EN EL DOM
    tituloElemento.innerHTML = contenido.titulo;
    subtituloElemento.innerHTML = contenido.subtitulo;
    parrafoElemento.innerHTML = contenido.parrafo;
    precioElemento.innerHTML = "$" + contenido.precio + " USD";
  });
});

// Funcion para traer la informacion correcta desde ciudades.js

function obtenerContenido(enlace) {
  let contenido = {
    Barcelona: barcelona,
    Roma: roma,
    París: paris,
    Londres: londres,
  };
  return contenido[enlace];
}
