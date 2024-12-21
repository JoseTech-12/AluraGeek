import { conneccionApi } from './conneccion.js';

const lista = document.querySelector("[data-lista]");



lista.addEventListener('click', async (e) => {
    if (e.target.classList.contains('btn-eliminar')) {
        const card = e.target.closest('.cards');
        const id = card.dataset.id;


        try {
            await conneccionApi.eliminarProducto(id);
            card.remove();
            alert('Producto eliminado correctamente');
        } catch (error) {
            console.error('Error al eliminar el producto:', error);
            alert('Ocurrió un error al eliminar el producto.');
        }

    }
});



