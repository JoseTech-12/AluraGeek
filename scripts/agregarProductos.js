import { conneccionApi } from './conneccion.js';

const inputNombre = document.getElementById('nombre');
const inputPrecio = document.getElementById('precio');
const inputImagen = document.getElementById('imagen');
const btnAgregar = document.getElementById('btn-submit');
const parrafo = document.querySelector('#condicion');
parrafo.style.display = 'none';




const agregarProductos = async () => {

    const producto = {
        nombre: inputNombre.value,
        precio: inputPrecio.value,
        imagen: inputImagen.value
    }
    try {
        await conneccionApi.agregarProducto(producto);
        alert('Producto agregado');
    } catch (error) {
        console.log(error);
    }

}

inputImagen.addEventListener('click', () => {
    parrafo.classList.add('condicion');
    parrafo.style.display = 'block';

});


btnAgregar.addEventListener('click', (e) => {
    parrafo.style.display = 'none';
    const regex = /(\.jpg|\.jpeg|\.png)$/i;
    if (!regex.test(inputImagen.value)) {
        e.preventDefault();
        parrafo.textContent = "url no valida";
        parrafo.style.display = 'block';

    } else {
        if (inputNombre.value === '' || inputPrecio.value === '' || inputImagen.value === '' || inputPrecio.value <= 0) {
            alert('Todos los campos son obligatorios');
        } else {
            e.preventDefault();
            agregarProductos();
        }
    }


});



