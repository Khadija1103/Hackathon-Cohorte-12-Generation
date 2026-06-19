// ui.js - SOLO INTERFAZ (compatible con tu proyecto)

// -------------------------------
// RENDER DE PRODUCTOS
// -------------------------------
function renderProductos() {

    const contenedor = document.getElementById("contenedor-productos");

    if (!contenedor) return;

    contenedor.innerHTML = "";

    productos.forEach(producto => {

        const div = document.createElement("div");
        div.classList.add("col-md-4", "mb-4");

        div.innerHTML = `
            <div class="card h-100 shadow-sm">
                <img src="${producto.imagen}" class="card-img-top" alt="${producto.nombre}">
                
                <div class="card-body text-center">
                    <h5 class="card-title">${producto.nombre}</h5>
                    <p class="card-text">$${producto.precio}</p>

                    <button class="btn btn-primary btn-agregar">
                        Agregar al carrito
                    </button>
                </div>
            </div>
        `;

        div.querySelector(".btn-agregar").addEventListener("click", () => {
            agregarAlCarrito(producto.id);
        });

        contenedor.appendChild(div);
    });
}


// -------------------------------
// ACTUALIZAR CONTADOR DEL CARRITO
// -------------------------------
function actualizarContadorUI() {

    const contador = document.getElementById("contador-carrito");

    if (!contador) return;

    const carrito = JSON.parse(localStorage.getItem("carrito")) || [];

    const total = carrito.reduce((acc, item) => acc + item.cantidad, 0);

    contador.textContent = total;
}


// -------------------------------
// MOSTRAR CARRITO (SI EXISTE HTML)
// -------------------------------
function mostrarCarritoUI() {

    const contenedor = document.getElementById("contenedor-carrito");

    if (!contenedor) return;

    const carrito = JSON.parse(localStorage.getItem("carrito")) || [];

    contenedor.innerHTML = "";

    carrito.forEach(item => {

        const div = document.createElement("div");
        div.classList.add("d-flex", "justify-content-between", "mb-2");

        div.innerHTML = `
            <span>${item.nombre} (x${item.cantidad})</span>
            <span>$${item.precio * item.cantidad}</span>
            <button class="btn btn-danger btn-sm btn-eliminar">X</button>
        `;

        div.querySelector(".btn-eliminar").addEventListener("click", () => {
            eliminarDelCarrito(item.id);
            mostrarCarritoUI();
            actualizarContadorUI();
        });

        contenedor.appendChild(div);
    });

    actualizarTotalUI();
}


// -------------------------------
// TOTAL DEL CARRITO
// -------------------------------
function actualizarTotalUI() {

    const totalHTML = document.getElementById("total");

    if (!totalHTML) return;

    const carrito = JSON.parse(localStorage.getItem("carrito")) || [];

    const total = carrito.reduce(
        (acc, item) => acc + (item.precio * item.cantidad),
        0
    );

    totalHTML.textContent = `$${total}`;
}


// -------------------------------
// INICIALIZAR UI
// -------------------------------
document.addEventListener("DOMContentLoaded", () => {

    renderProductos();
    actualizarContadorUI();
    mostrarCarritoUI();

});