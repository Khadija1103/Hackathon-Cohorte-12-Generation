
// INICIO DE LA APP


document.addEventListener("DOMContentLoaded", () => {

    // carrito
    if (typeof actualizarTodo === "function") {
        actualizarTodo();
    }

    // productos
    if (typeof renderProductos === "function") {
        renderProductos();
    }

    // notificaciones iniciales
    notificarDescuentoFavoritos();
});



// MENU (LOGO)


window.toggleMenu = function (event) {

    if (event) event.stopPropagation();

    const menu = document.getElementById("menuDesplegable");

    if (menu) {
        menu.classList.toggle("active");
    }
};

// cerrar menú al hacer click afuera
document.addEventListener("click", function () {
    const menu = document.getElementById("menuDesplegable");
    if (menu) menu.classList.remove("active");
});



// NOTIFICACIONES / GAMIFICACIÓN


function notificarDescuentoFavoritos() {

    let fav = JSON.parse(localStorage.getItem("favoritos")) || [];

    if (fav.length > 0) {
        console.log("🔥 Tienes productos en favoritos con posibles descuentos");
    }
}


// SISTEMA DE PUNTOS


function calcularPuntos() {

    const carrito = JSON.parse(localStorage.getItem("carrito")) || [];

    let total = carrito.reduce((acc, item) => acc + item.precio * item.cantidad, 0);

    let puntos = Math.floor(total / 10000); // 1 punto por cada 10.000

    localStorage.setItem("puntos", puntos);

    return puntos;
}



// BONO PRIMERA COMPRA


function bonoPrimeraCompra() {

    const compras = localStorage.getItem("primeraCompra");

    if (!compras) {
        alert("🎁 Bienvenido! tienes bono de primera compra");
        localStorage.setItem("primeraCompra", "true");
    }
}


// EXPORT GLOBAL HELPERS


window.calcularPuntos = calcularPuntos;
window.bonoPrimeraCompra = bonoPrimeraCompra;

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
