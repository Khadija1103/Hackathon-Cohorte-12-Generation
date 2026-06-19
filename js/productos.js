const productos = [
  {
    id: 1,
    nombre: "Camiseta Oversize",
    precio: 65000,
    imagen: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
  },
  {
    id: 2,
    nombre: "Chaqueta Denim",
    precio: 120000,
    imagen: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246",
  },
  {
    id: 3,
    nombre: "Tenis Urbanos",
    precio: 180000,
    imagen: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
  },
  {
    id: 4,
    nombre: "Bolso Casual",
    precio: 85000,
    imagen: "https://images.unsplash.com/photo-1584917865442-de89df76afd3",
  },
  {
    id: 5,
    nombre: "Gorra Trendy",
    precio: 35000,
    imagen: "https://images.unsplash.com/photo-1521369909029-2afed882baee",
  },
  {
    id: 6,
    nombre: "Reloj Moderno",
    precio: 95000,
    imagen: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49",
  },
];


// ================= AGREGAR AL CARRITO =================

function agregarAlCarrito(id) {

    const sesion = localStorage.getItem("sesionActiva");

    if (sesion !== "true") {
        alert("Debes iniciar sesión para comprar");
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

    alert("Producto agregado 🛒");
}


// ================= ELIMINAR =================

function eliminarDelCarrito(id) {

    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

    carrito = carrito.filter(p => p.id !== id);

    localStorage.setItem("carrito", JSON.stringify(carrito));
}


// ================= TOTAL =================

function calcularTotal() {

    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

    return carrito.reduce((total, item) => {
        return total + (item.precio * item.cantidad);
    }, 0);
}