// =========================
// UI TRENDYSHOP
// =========================

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
                    <button class="btn btn-primary">Agregar</button>
                </div>
            </div>
        `;

    div.querySelector("button").addEventListener("click", () => {
      agregarAlCarrito(p.id);
    });

    contenedor.appendChild(div);
  });
}

// CARRITO DROPDOWN
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
            <button class="btn btn-outline-danger btn-sm">Eliminar</button>
        `;

    div.querySelector("button").addEventListener("click", () => {
      eliminarDelCarrito(item.id);
    });

    contenedor.appendChild(div);
  });
}

// CONTADOR
function actualizarContador() {
  const contador = document.getElementById("contador-carrito");

  const carrito = JSON.parse(localStorage.getItem("carrito")) || [];

  const total = carrito.reduce((acc, item) => acc + item.cantidad, 0);

  contador.textContent = total;
}

// TOTAL
function actualizarTotal() {
  const total = document.getElementById("total");

  if (!total) return;

  total.textContent = "$" + totalCarrito();
}

// TODO EN UNO
function actualizarTodo() {
  mostrarCarrito();
  actualizarContador();
  actualizarTotal();
}

// INICIO
document.addEventListener("DOMContentLoaded", () => {
  renderProductos();
  actualizarTodo();
});
