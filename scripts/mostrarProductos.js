import { conneccionApi } from './conneccion.js';

const lista = document.querySelector("[data-lista]");

function crearCard(nombre, precio, imagen, id) {
    const card = document.createElement('li');
    card.dataset.id = id;
    card.classList.add('cards');
    card.innerHTML = ` <div class="card">
                        <img class="imagen-producto"
                            src="${imagen}" alt="${nombre}">
                        <p>${nombre}</p>
                        <div class="conten-info">
                            <p>$${precio}</p>
                          <i class="btn-eliminar icono-eliminar fa-solid fa-trash"></i>
                        </div>

                    </div>`

    return card;
}


async function mostrarProductos() {
    try {
        const productos = await conneccionApi.listarProductos();
        productos.forEach(producto => {
            lista.appendChild(crearCard(producto.nombre, producto.precio, producto.imagen, producto.id));
        });

    } catch (error) {
        console.log(error);
    }

}

mostrarProductos();