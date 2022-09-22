import { productoServices } from "../servicios/productos-servicios.js";

const form = document.querySelector("[data-form]");

form.addEventListener("submit", (evento)=> {
    evento.preventDefault();
    const nombre = document.querySelector("[data-name]").value;
    const url = document.querySelector("[data-url]").value;
    const description = document.querySelector("[data-description]").value;
    const price = document.querySelector("[data-price]").value;

    productoServices.creaProducto(nombre, url, description, price).then (respuesta =>{
        window.location.href = "/index.html";
        alert("el producto fue creado con exito");
        console.log(respuesta);
    }).catch (error =>{
        console.log(error);
    })



});