const listarProductos = async () => {
    const response = await fetch('https://fake-server-git-main-jose-s-projects-5e1abe99.vercel.app/Productos');
    const data = await response.json();
    return data;
}

const agregarProducto = async (producto) => {
    const response = await fetch('https://fake-server-git-main-jose-s-projects-5e1abe99.vercel.app/Productos', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(producto)
    });
    const data = await response.json();
    return data;
}


const eliminarProducto = async (id) => {
    const response = await fetch(`https://fake-server-git-main-jose-s-projects-5e1abe99.vercel.app/Productos/${id}`, {
        method: 'DELETE'
    });

    return await response.json
}


export const conneccionApi = {
    listarProductos,
    agregarProducto,
    eliminarProducto
}