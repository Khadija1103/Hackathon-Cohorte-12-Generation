
function estaLogeado() {
    return localStorage.getItem("usuarioLogeado") === "true";
}

document.addEventListener("DOMContentLoaded", () => {

    const carritoNav = document.getElementById("carrito-nav");
    const loginNav = document.getElementById("login-nav");
    const registroNav = document.getElementById("registro-nav");
    const perfilNav = document.getElementById("perfil-nav");

    if (estaLogeado()) {

        if (carritoNav) carritoNav.style.display = "block";
        if (perfilNav) perfilNav.style.display = "block";
        if (loginNav) loginNav.style.display = "none";
        if (registroNav) registroNav.style.display = "none";

    } else {

        if (carritoNav) carritoNav.style.display = "none";
        if (perfilNav) perfilNav.style.display = "none";
        if (loginNav) loginNav.style.display = "block";
        if (registroNav) registroNav.style.display = "block";
    }
});