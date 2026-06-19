
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


// =========================
// CONTADOR
// =========================

function actualizarContadorCarrito() {

    const contador = document.getElementById("contador-carrito");

    if (!contador) return;

    const total = carrito.reduce((acc, item) => acc + item.cantidad, 0);

    contador.textContent = total;
}


// =========================
// MOSTRAR CARRITO
// =========================

function mostrarCarrito() {

    const contenedor = document.getElementById("contenedor-carrito");

    if (!contenedor) return;

    contenedor.innerHTML = "";

    if (carrito.length === 0) {
        contenedor.innerHTML = "<p class='text-center'>Carrito vacío</p>";
        return;
    }

    carrito.forEach(item => {

        const div = document.createElement("div");
        div.classList.add("d-flex", "justify-content-between", "mb-2");

        div.innerHTML = `
            <small>${item.nombre} x${item.cantidad}</small>
            <button class="btn btn-danger btn-sm">X</button>
        `;

        div.querySelector("button").addEventListener("click", () => {
            eliminarDelCarrito(item.id);
        });

        contenedor.appendChild(div);
    });
}


// =========================
// TOTAL
function totalCarrito() {
    return carrito.reduce((acc, item) => acc + item.precio * item.cantidad, 0);
}
