function agregarAlCarrito(id) {

    if (localStorage.getItem("sesionActiva") !== "true") {
        alert("Debes iniciar sesión");
        window.location.href = "inicio.html";
        return;
    }

    const producto = productos.find(p => p.id === id);

    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

    const existe = carrito.find(p => p.id === id);

    if (existe) {
        existe.cantidad++;
    } else {
        carrito.push({
            id: producto.id,
            nombre: producto.nombre,
            precio: producto.precio,
            imagen: producto.imagen,
            cantidad: 1
        });
    }

    localStorage.setItem("carrito", JSON.stringify(carrito));

    actualizarTodo();
}

function eliminarDelCarrito(id) {

    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

    carrito = carrito.filter(p => p.id !== id);

    localStorage.setItem("carrito", JSON.stringify(carrito));

    actualizarTodo();
}

function calcularTotal() {

    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

    return carrito.reduce((t, p) => t + (p.precio * p.cantidad), 0);
}
