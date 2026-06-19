function mostrarCarrito() {

    const contenedor = document.getElementById("contenedor-carrito");
    if (!contenedor) return;

    const carrito = JSON.parse(localStorage.getItem("carrito")) || [];

    contenedor.innerHTML = "";

    carrito.forEach(item => {

        const div = document.createElement("div");

        div.innerHTML = `
            <p>${item.nombre} x${item.cantidad}</p>
            <button onclick="eliminarDelCarrito(${item.id})">Eliminar</button>
        `;

        contenedor.appendChild(div);
    });
}

function actualizarContador() {

    const contador = document.getElementById("contador-carrito");
    if (!contador) return;

    const carrito = JSON.parse(localStorage.getItem("carrito")) || [];

    contador.textContent = carrito.reduce((a, b) => a + b.cantidad, 0);
}

function actualizarTotal() {

    const total = document.getElementById("total");
    if (!total) return;

    total.textContent = "$" + calcularTotal();
}

function actualizarTodo() {
    mostrarCarrito();
    actualizarContador();
    actualizarTotal();
}