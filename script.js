// Array para almacenar los productos
let productos = [];

// Referencias a elementos del DOM
const form = document.getElementById('formProducto');
const inputNombre = document.getElementById('nombre');
const inputPrecio = document.getElementById('precio');
const btnLimpiar = document.getElementById('btnLimpiar');
const listaProductos = document.getElementById('listaProductos');

// Cargar productos desde localStorage al iniciar
function cargarProductos() {
    const productosGuardados = localStorage.getItem('productos');
    if (productosGuardados) {
        productos = JSON.parse(productosGuardados);
    }
    mostrarProductos();
}

// Guardar productos en localStorage
function guardarProductos() {
    localStorage.setItem('productos', JSON.stringify(productos));
}

// Mostrar productos en la pantalla
function mostrarProductos() {
    listaProductos.innerHTML = '';
    
    if (productos.length === 0) {
        listaProductos.innerHTML = '<p>No hay productos guardados</p>';
        return;
    }
    
    productos.forEach((producto, index) => {
        const card = document.createElement('div');
        card.className = 'producto-card';
        card.innerHTML = `
            <h3>${producto.nombre}</h3>
            <p>Precio: $${producto.precio}</p>
            <button onclick="eliminarProducto(${index})">Eliminar</button>
        `;
        listaProductos.appendChild(card);
    });
}

// Agregar nuevo producto
function agregarProducto(event) {
    event.preventDefault(); // Evitar que se recargue la página
    
    const nombre = inputNombre.value.trim();
    const precio = parseFloat(inputPrecio.value);
    
    if (nombre === '' || isNaN(precio)) {
        alert('Por favor, completa todos los campos');
        return;
    }
    
    const nuevoProducto = {
        nombre: nombre,
        precio: precio
    };
    
    productos.push(nuevoProducto);
    guardarProductos();
    mostrarProductos();
    
    // Limpiar el formulario
    form.reset();
    inputNombre.focus();
}

// Eliminar producto
function eliminarProducto(index) {
    if (confirm('¿Eliminar este producto?')) {
        productos.splice(index, 1);
        guardarProductos();
        mostrarProductos();
    }
}

// Limpiar todos los productos
function limpiarTodo() {
    if (productos.length === 0) {
        alert('No hay productos para eliminar');
        return;
    }
    
    if (confirm('¿Eliminar todos los productos?')) {
        productos = [];
        localStorage.removeItem('productos');
        mostrarProductos();
    }
}

// Event Listeners
form.addEventListener('submit', agregarProducto);
btnLimpiar.addEventListener('click', limpiarTodo);

// Cargar productos al iniciar la página
cargarProductos();
