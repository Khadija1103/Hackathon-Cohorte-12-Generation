
document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("loginForm");

    if (!form) return;

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        let email = document.getElementById("loginEmail").value.trim();
        let password = document.getElementById("loginPassword").value.trim();

        let user = JSON.parse(localStorage.getItem("user"));

        if (!user) {
            alert("No hay usuario registrado");
            return;
        }

        if (user.email === email && user.password === password) {

            localStorage.setItem("usuarioLogeado", "true");

            alert("Bienvenido " + user.nombre);

            window.location.href = "index.html";

        } else {
            alert("Credenciales incorrectas");
        }
    });

});