// =========================
// CARRITO
// =========================

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

// AGREGAR
function agregarAlCarrito(id) {

    const producto = productos.find(p => p.id === id);

    const existe = carrito.find(p => p.id === id);

    if (existe) {
        existe.cantidad++;
    } else {
        carrito.push({ ...producto, cantidad: 1 });
    }

    guardar();

    alert(`🛒 ${producto.nombre} agregado al carrito`);

    actualizarTodo();
}

// ELIMINAR
function eliminarDelCarrito(id) {

    const producto = carrito.find(p => p.id === id);

    carrito = carrito.filter(p => p.id !== id);

    guardar();

    if (producto) {
        alert(`❌ ${producto.nombre} eliminado del carrito`);
    }

    actualizarTodo();
}

// GUARDAR
function guardar() {
    localStorage.setItem("carrito", JSON.stringify(carrito));
}

// TOTAL
function totalCarrito() {
    return carrito.reduce((acc, item) => acc + item.precio * item.cantidad, 0);
}
