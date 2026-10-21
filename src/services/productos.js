
const API_URL = "https://fakestoreapi.com/products";

export async function obtenerProductos() {
    const respuesta = await fetch(API_URL);

    if (!respuesta.ok) {
        throw new Error("Error al obtener los productos");
    }

    const datos = await respuesta.json();

    return datos.map((producto) => ({
        id: producto.id,
        nombre: producto.title,
        precio: producto.price,
        imagen: producto.image,
        descripcion: producto.description,
        categoria: producto.category,
    }));
}
