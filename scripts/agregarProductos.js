import { conneccionApi } from './conneccion.js';

const inputNombre = document.getElementById('nombre');
const inputPrecio = document.getElementById('precio');
const inputImagen = document.getElementById('imagen');
const btnAgregar = document.getElementById('btn-submit');
const parrafo = document.querySelector('#condicion');
const formulario = document.querySelector('.formulario');
const btnLimpiar = document.querySelector('.btn-limpiar');

parrafo.style.display = 'none';

// Función para agregar productos
const agregarProductos = async () => {
    const producto = {
        nombre: inputNombre.value,
        precio: inputPrecio.value,
        imagen: inputImagen.value,
    };
    try {
        await conneccionApi.agregarProducto(producto);
        alert('Producto agregado');
        formulario.reset(); // Resetea el formulario después de agregar
        parrafo.style.display = 'none'; // Esconde el mensaje de error
    } catch (error) {
        console.error('Error al agregar producto:', error);
    }
};

// Mostrar parrafo de ayuda al hacer clic en el campo de la imagen
inputImagen.addEventListener('click', () => {
    parrafo.classList.add('condicion');
    parrafo.style.display = 'block';
});

// Validación y envío del formulario
btnAgregar.addEventListener('click', (e) => {
    e.preventDefault(); // Evitar recarga del formulario
    parrafo.style.display = 'none'; // Esconde el mensaje de error previo

    const regex = /(\.jpg|\.jpeg|\.png)$/i;

    if (!regex.test(inputImagen.value)) {
        parrafo.textContent = 'URL no válida. Debe terminar en .jpg, .jpeg o .png';
        parrafo.style.display = 'block';
        return;
    }

    if (
        inputNombre.value.trim() === '' ||
        inputPrecio.value.trim() === '' ||
        inputImagen.value.trim() === '' ||
        inputPrecio.value <= 0
    ) {
        alert('Todos los campos son obligatorios y el precio debe ser mayor a 0');
        return;
    }

    // Si todo es válido, agrega el producto
    agregarProductos();
});

// Reseteo del formulario
btnLimpiar.addEventListener('click', () => {
    formulario.reset();
    parrafo.style.display = 'none';
});


