const listaProductos = () => fetch('http://localhost:3000/productos').then(respuesta => respuesta.json());

const creaProducto = (name, price, imagenURL, desciption) = {
    return fetch('http://localhost:3000/productos',{
        method: 'POST',
        headers: {
            contentType: 'application/json'
        },
        body: JSON.stringify(
            name,
            price,
            imagenURL,
            desciption,
        )
    }).then(respuesta => {
        if(respuesta.ok){
            return respuesta.body;
        }
        throw new Error('No fue posible crear el producto')
    })
}

export const productoServices = {
    listaProductos,
    creaProducto,
}