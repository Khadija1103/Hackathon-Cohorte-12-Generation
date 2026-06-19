
// =========================
// CARRITO
// =========================

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];


// =========================
// AGREGAR AL CARRITO
// =========================

function agregarAlCarrito(idProducto) {

    if (localStorage.getItem("usuarioLogeado") !== "true") {
        alert("🔒 Debes iniciar sesión para comprar");
        window.location.href = "inicio.html";
        return;
    }

    const producto = productos.find(p => p.id === idProducto);

    const existe = carrito.find(item => item.id === idProducto);

    if (existe) {
        existe.cantidad++;
    } else {
        carrito.push({
            ...producto,
            cantidad: 1
        });
    }

    guardarCarrito();
    actualizarContadorCarrito();
    mostrarCarrito();

    alert("🛒 Producto agregado al carrito");
}


// =========================
// ELIMINAR DEL CARRITO
// =========================

function eliminarDelCarrito(idProducto) {

    carrito = carrito.filter(item => item.id !== idProducto);

    guardarCarrito();
    actualizarContadorCarrito();
    mostrarCarrito();
}


// =========================
// GUARDAR LOCALSTORAGE
// =========================

function guardarCarrito() {
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
// =========================

function calcularTotal() {

    return carrito.reduce((acc, item) =>
        acc + item.precio * item.cantidad, 0
    );
}