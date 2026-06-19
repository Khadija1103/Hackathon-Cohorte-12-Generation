// Obtener carrito guardado o crear uno vacío
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

// Agregar producto al carrito
function agregarAlCarrito(idProducto) {

    const producto = productos.find(
        producto => producto.id === idProducto
    );

    const productoExistente = carrito.find(
        item => item.id === idProducto
    );

    if (productoExistente) {

        productoExistente.cantidad++;

    } else {

        carrito.push({
            ...producto,
            cantidad: 1
        });

    }

    guardarCarrito();
    actualizarContadorCarrito();

    alert(`${producto.nombre} agregado al carrito`);
}

// Eliminar producto
function eliminarDelCarrito(idProducto) {

    carrito = carrito.filter(
        item => item.id !== idProducto
    );

    guardarCarrito();
    actualizarContadorCarrito();

    if (typeof mostrarCarrito === "function") {
        mostrarCarrito();
    }
}

// Guardar en localStorage
function guardarCarrito() {

    localStorage.setItem(
        "carrito",
        JSON.stringify(carrito)
    );
}

// Actualizar contador
function actualizarContadorCarrito() {

    const contador = document.getElementById(
        "contador-carrito"
    );

    if (contador) {

        const totalProductos = carrito.reduce(
            (total, producto) =>
                total + producto.cantidad,
            0
        );

        contador.textContent = totalProductos;
    }
}

// Calcular total de la compra
function calcularTotal() {

    return carrito.reduce(
        (total, producto) =>
            total + (producto.precio * producto.cantidad),
        0
    );
}