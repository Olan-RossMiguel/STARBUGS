// Seleccionamos los elementos del menú y los botones
const abrirMenu = document.getElementById('abrir');
const cerrarMenu = document.getElementById('cerrar');
const nav = document.getElementById('nav');

// Función para mostrar el menú
function mostrarMenu() {
    nav.classList.add('visible');
}

// Función para ocultar el menú
function ocultarMenu() {
    nav.classList.remove('visible');
}

// Event listeners para los botones
abrirMenu.addEventListener('click', mostrarMenu);
cerrarMenu.addEventListener('click', ocultarMenu);

