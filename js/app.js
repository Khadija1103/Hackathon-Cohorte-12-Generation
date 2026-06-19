document.addEventListener("DOMContentLoaded", () => {
    renderProductos();
    actualizarTodo();
    verificarSesion();
});

function renderProductos() {

    const cont = document.getElementById("contenedor-productos");
    if (!cont) return;

    cont.innerHTML = "";

    productos.forEach(p => {

        const div = document.createElement("div");
        div.className = "col-md-4 mb-4";

        div.innerHTML = `
            <div class="card shadow-sm">
                <img src="${p.imagen}">
                <div class="card-body text-center">
                    <h5>${p.nombre}</h5>
                    <p>$${p.precio}</p>
                    <button class="btn btn-primary">Agregar</button>
                </div>
            </div>
        `;

        div.querySelector("button").addEventListener("click", () => {
            agregarAlCarrito(p.id);
            actualizarTodo();
        });

        cont.appendChild(div);
    });
}

function actualizarContador() {
    const c = document.getElementById("contador-carrito");
    if (!c) return;

    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    c.textContent = carrito.reduce((a, b) => a + b.cantidad, 0);
}

function actualizarTodo() {
    actualizarContador();
}

function verificarSesion() {

    const sesion = localStorage.getItem("sesionActiva");

    const login = document.getElementById("login-nav");
    const registro = document.getElementById("registro-nav");
    const perfil = document.getElementById("perfil-nav");
    const logout = document.getElementById("logout-nav");

    if (sesion === "true") {

        if (login) login.style.display = "none";
        if (registro) registro.style.display = "none";
        if (perfil) perfil.style.display = "block";
        if (logout) logout.style.display = "block";

    } else {

        if (perfil) perfil.style.display = "none";
        if (logout) logout.style.display = "none";
    }
}