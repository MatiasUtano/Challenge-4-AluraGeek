import { productoServices } from "../servicios/productos-servicios.js";

const nuevoProducto = (name, price, imagenURL) => {

    const card = document.createElement("div");
    const contenido = `
        <div class="card">
            <img src="${imagenURL}" alt="">
            <h3>${name}</h3>
            <p>${price}</p>
            <a href="">Ver producto</a>
        </div>
    `;

    card.innerHTML = contenido;
    card.classList.add("card");

    return card;

};

const productos = document.querySelector("[datos-productos]");

const render = async () => {
    try {
        const listaProductos = await productosServices.listaProductos()
        listaProductos.forEach((producto) => {
            productos.appendChild(nuevoProducto(producto.name, producto.price, producto.imagenURL))
        });
    }catch(error){
        console.log(error)
    }
}

render();