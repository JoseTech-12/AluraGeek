import { conneccionApi } from './conneccion.js';
import { lista, crearCard, mostrarProductos } from './mostrarProductos.js';

const inputNombre = document.getElementById('nombre');
const inputPrecio = document.getElementById('precio');
const inputImagen = document.getElementById('imagen');
const btnAgregar = document.getElementById('btn-submit');
const parrafo = document.querySelector('#condicion');
const formulario = document.querySelector('.formulario');
const btnLimpiar = document.querySelector('.btn-limpiar');

parrafo.style.display = 'none';

const agregarProductos = async () => {
    const producto = {
        nombre: inputNombre.value,
        precio: inputPrecio.value,
        imagen: inputImagen.value,
    };
    try {
        await conneccionApi.agregarProducto(producto);
        alert('Producto agregado');
        location.reload();
        formulario.reset();
        parrafo.style.display = 'none';
    } catch (error) {
        console.error(error.message || error);
    }
};

inputImagen.addEventListener('click', () => {
    parrafo.classList.add('condicion');
    parrafo.style.display = 'block';
});

btnAgregar.addEventListener('click', (e) => {
    e.preventDefault();
    parrafo.style.display = 'none';

    const regex = /(\.jpg|\.jpeg|\.png)$/i;

    if (!regex.test(inputImagen.value)) {
        parrafo.textContent = 'URL no válida. Debe terminar en .jpg, .jpeg o .png';
        parrafo.style.display = 'block';
        return;
    }

    if (
        inputNombre.value === '' || inputPrecio.value === '' || inputImagen.value === '' || inputPrecio.value <= 0
    ) {
        alert('Todos los campos son obligatorios y el precio debe ser mayor a 0');
        return;
    }

    agregarProductos();
});

btnLimpiar.addEventListener('click', () => {
    formulario.reset();
    parrafo.style.display = 'none';
});


