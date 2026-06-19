document.addEventListener("DOMContentLoaded", () => {
  renderProductos();
  actualizarTodo();
  verificarSesion();
});

function renderProductos() {
  const contenedor = document.getElementById("contenedor-productos");
  if (!contenedor) return;

  contenedor.innerHTML = "";

  productos.forEach((p) => {
    const div = document.createElement("div");
    div.classList.add("col-md-4", "mb-4");

    div.innerHTML = `
        <div class="card shadow-sm">
            <img src="${p.imagen}" class="card-img-top">
            <div class="card-body text-center">
                <h5>${p.nombre}</h5>
                <p>$${p.precio}</p>

                <button class="btn btn-primary btn-sm">Agregar</button>
            </div>
        </div>
        `;

    div.querySelector("button").addEventListener("click", () => {
      agregarAlCarrito(p.id);
      actualizarTodo();
    });

    contenedor.appendChild(div);
  });

  const contenedorDos = document.getElementById("contenedor-productosDos");
  if (!contenedorDos) return;

  contenedorDos.innerHTML = "";

  productos2.forEach((p) => {
    const div = document.createElement("div");
    div.classList.add("col-md-4", "mb-4");

    div.innerHTML = `
        <div class="card shadow-sm">
            <img src="${p.imagen}" class="card-img-top">
            <div class="card-body text-center">
                <h5>${p.nombre}</h5>
                <p>$${p.precio}</p>

                <button class="btn btn-primary btn-sm">Agregar</button>
            </div>
        </div>
        `;

    div.querySelector("button").addEventListener("click", () => {
      agregarAlCarrito(p.id);
      actualizarTodo();
    });

    contenedorDos.appendChild(div);
  });
}

function mostrarCarrito() {
  const contenedor = document.getElementById("contenedor-carrito");
  if (!contenedor) return;

  const carrito = JSON.parse(localStorage.getItem("carrito")) || [];

  contenedor.innerHTML = "";

  carrito.forEach((item) => {
    const div = document.createElement("div");

    div.innerHTML = `
        <p>${item.nombre} x${item.cantidad}</p>
        <button>Eliminar</button>
        `;

    div.querySelector("button").addEventListener("click", () => {
      eliminarDelCarrito(item.id);
      actualizarTodo();
    });

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

function verificarSesion() {
  const sesion = localStorage.getItem("sesionActiva");

  const perfil = document.getElementById("perfil");
  const login = document.getElementById("login");
  const registro = document.getElementById("registro");

  if (sesion === "true") {
    if (login) login.style.display = "none";
    if (registro) registro.style.display = "none";
    if (perfil) perfil.style.display = "block";
  } else {
    if (perfil) perfil.style.display = "none";
  }
}
