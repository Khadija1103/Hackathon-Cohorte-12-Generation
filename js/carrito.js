// =========================
// CARRITO
// =========================

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

// AGREGAR
function agregarAlCarrito(id) {
  const producto = productos.find((p) => p.id === id);

  const existe = carrito.find((p) => p.id === id);

  if (existe) {
    existe.cantidad++;
  } else {
    carrito.push({ ...producto, cantidad: 1 });
  }

  guardar();

  alert(`🛒 ${producto.nombre} agregado al carrito`);

  if (typeof actualizarTodo === "function") actualizarTodo();
}

// ELIMINAR
function eliminarDelCarrito(id) {
  const producto = carrito.find((p) => p.id === id);

  carrito = carrito.filter((p) => p.id !== id);

  guardar();

  if (producto) {
    alert(`❌ ${producto.nombre} eliminado del carrito`);
  }

  if (typeof actualizarTodo === "function") actualizarTodo();
}

// GUARDAR
function guardar() {
  localStorage.setItem("carrito", JSON.stringify(carrito));
}

// TOTAL
function totalCarrito() {
  return carrito.reduce((acc, item) => acc + item.precio * item.cantidad, 0);
}

// =========================
// PÁGINA DE CARRITO
// =========================

function formatearPrecio(precio) {
  return "$" + precio.toLocaleString("es-CO");
}

function renderizarCarrito() {
  const carritoGuardado = JSON.parse(localStorage.getItem("carrito")) || [];
  const tbody = document.getElementById("tabla-items");
  const contador = document.getElementById("contador-carrito");
  const resumenCantidad = document.getElementById("resumen-cantidad");
  const resumenSubtotal = document.getElementById("resumen-subtotal");
  const resumenTotal = document.getElementById("resumen-total");
  const carritoVacio = document.getElementById("carrito-vacio");
  const carritoContenido = document.getElementById("carrito-contenido");

  // Actualizar contador del navbar
  const totalItems = carritoGuardado.reduce(
    (acc, item) => acc + item.cantidad,
    0,
  );
  contador.textContent = totalItems;

  // Si el carrito está vacío
  if (carritoGuardado.length === 0) {
    carritoVacio.classList.remove("d-none");
    carritoContenido.classList.add("d-none");
    return;
  }

  carritoVacio.classList.add("d-none");
  carritoContenido.classList.remove("d-none");

  // Renderizar filas de la tabla
  tbody.innerHTML = "";

  carritoGuardado.forEach((item) => {
    const subtotal = item.precio * item.cantidad;

    const fila = document.createElement("tr");
    fila.innerHTML = `
            <td>
              <div class="d-flex align-items-center gap-3">
                <img src="${item.imagen}" class="carrito-img" alt="${item.nombre}" />
                <span class="fw-semibold">${item.nombre}</span>
              </div>
            </td>
            <td class="text-center">${formatearPrecio(item.precio)}</td>
            <td class="text-center">
              <span class="badge bg-secondary fs-6 px-3 py-2">${item.cantidad}</span>
            </td>
            <td class="text-center fw-bold">${formatearPrecio(subtotal)}</td>
            <td class="text-center">
              <button class="btn btn-outline-danger btn-sm rounded-3" data-id="${item.id}">
                ✕
              </button>
            </td>
          `;

    // Botón eliminar
    fila.querySelector("button").addEventListener("click", () => {
      eliminarDelCarrito(item.id);
      renderizarCarrito();
    });

    tbody.appendChild(fila);
  });

  // Calcular totales
  const total = carritoGuardado.reduce(
    (acc, item) => acc + item.precio * item.cantidad,
    0,
  );

  resumenCantidad.textContent = totalItems;
  resumenSubtotal.textContent = formatearPrecio(total);
  resumenTotal.textContent = formatearPrecio(total);
}

// Botón vaciar carrito
document.getElementById("btn-vaciar").addEventListener("click", () => {
  if (confirm("¿Seguro que quieres vaciar el carrito?")) {
    localStorage.removeItem("carrito");
    renderizarCarrito();
  }
});

// Botón finalizar compra
document.getElementById("btn-pagar").addEventListener("click", () => {
  alert("✅ ¡Gracias por tu compra! Tu pedido está siendo procesado.");
  localStorage.removeItem("carrito");
  renderizarCarrito();
});

// Cargar al inicio
document.addEventListener("DOMContentLoaded", renderizarCarrito);