// INICIO SESIÓN / CONTROL DE ACCESO

document.addEventListener("DOMContentLoaded", () => {

    const sesion = localStorage.getItem("sesionActiva");

    // Si no hay sesión activa, bloquea compra
    if (sesion !== "true") {
        console.log("Usuario no logueado");
    }

    verificarSesion();
});


// ================= SESIÓN =================

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


// ================= LOGOUT (OPCIONAL) =================

function cerrarSesion() {

    localStorage.removeItem("sesionActiva");
    localStorage.removeItem("usuarioActivo");

    window.location.href = "inicio.html";
}