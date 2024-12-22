const listarProductos = async () => {
    const response = await fetch('https://67684145cbf3d7cefd377df4.mockapi.io/Productos');
    const data = await response.json();
    return data;
}

const agregarProducto = async (producto) => {
    const response = await fetch('https://67684145cbf3d7cefd377df4.mockapi.io/Productos', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(producto)
    });

    if (!response.ok) {
        throw new Error('Error al agregar el producto');
    }
    return await response.json();

}
const eliminarProducto = async (id) => {
    const response = await fetch(`https://67684145cbf3d7cefd377df4.mockapi.io/Productos/${id}`, {
        method: 'DELETE'
    });

    return await response.json
}


export const conneccionApi = {
    listarProductos,
    agregarProducto,
    eliminarProducto
}