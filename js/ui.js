

// INICIO APP


document.addEventListener("DOMContentLoaded", () => {
    renderProductos();
    actualizarTodo();
});


// MENU TOGGLE (LOGO)


window.toggleMenu = function (event) {

    if (event) event.stopPropagation();

    const menu = document.getElementById("menuDesplegable");

    if (menu) {
        menu.classList.toggle("active");
    }
};

// cerrar al hacer click afuera
document.addEventListener("click", function () {
    const menu = document.getElementById("menuDesplegable");
    if (menu) menu.classList.remove("active");
});


// PRODUCTOS


function renderProductos() {

    const contenedor = document.getElementById("contenedor-productos");
    if (!contenedor) return;

  contenedor.innerHTML = "";

  productos.forEach((p) => {
    const div = document.createElement("div");
    div.classList.add("col-md-4", "mb-4");

    div.innerHTML = `
            <div class="card h-100 shadow-sm">

                <img src="${p.imagen}" class="card-img-top">

                <div class="card-body text-center">

                    <h5>${p.nombre}</h5>
                    <p>$${p.precio}</p>

                    <button class="btn btn-primary btn-sm">
                        Agregar
                    </button>

                    <button class="btn btn-outline-danger btn-sm ms-2">
                        ❤️
                    </button>

                </div>

            </div>
        `;

        // carrito
        div.querySelector(".btn-primary").addEventListener("click", () => {
            agregarAlCarrito(p.id);
            actualizarTodo();
        });

        // favoritos
        div.querySelector(".btn-outline-danger").addEventListener("click", () => {
            toggleFavorito(p.id);
        });

    contenedor.appendChild(div);
  });
}


// CARRITO


function mostrarCarrito() {

    const contenedor = document.getElementById("contenedor-carrito");
    if (!contenedor) return;

  const carrito = JSON.parse(localStorage.getItem("carrito")) || [];

  contenedor.innerHTML = "";

  if (carrito.length === 0) {
    contenedor.innerHTML = "<p class='text-center mb-0'>Carrito vacío</p>";
    return;
  }

  carrito.forEach((item) => {
    const div = document.createElement("div");
    div.classList.add(
      "d-flex",
      "justify-content-between",
      "align-items-center",
      "mb-2",
    );

    div.innerHTML = `
            <small>${item.nombre} x${item.cantidad}</small>
            <button class="btn btn-outline-danger btn-sm">X</button>
        `;

        div.querySelector("button").addEventListener("click", () => {
            eliminarDelCarrito(item.id);
            actualizarTodo();
        });

    contenedor.appendChild(div);
  });
}



// CONTADOR


function actualizarContador() {

    const contador = document.getElementById("contador-carrito");
    if (!contador) return;

  const carrito = JSON.parse(localStorage.getItem("carrito")) || [];

  const total = carrito.reduce((acc, item) => acc + item.cantidad, 0);

  contador.textContent = total;
}



// TOTAL


function actualizarTotal() {

    const total = document.getElementById("total");
    if (!total) return;

    total.textContent = "$" + calcularTotal();
}



// FAVORITOS

let favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];

function toggleFavorito(id) {

    if (favoritos.includes(id)) {
        favoritos = favoritos.filter(f => f !== id);
    } else {
        favoritos.push(id);
    }

    localStorage.setItem("favoritos", JSON.stringify(favoritos));

    alert("❤️ Favoritos actualizados");
}



// ACTUALIZAR TODO


function actualizarTodo() {
  mostrarCarrito();
  actualizarContador();
  actualizarTotal();
}

//PARA OCULTAR BOTONES EN NAVBAR

document.addEventListener("DOMContentLoaded", () => {

    const logeado = localStorage.getItem("usuarioLogeado");

    const perfil = document.getElementById("perfil");
    const login = document.getElementById("login");
    const registro = document.getElementById("registro");

    if (logeado) {
        if (login) login.style.display = "none";
        if (registro) registro.style.display = "none";
        if (perfil) perfil.style.display = "block";
    } else {
        if (perfil) perfil.style.display = "none";
    }

});
