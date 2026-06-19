function validarEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function soloLetras(texto) {
    return /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]{3,}$/.test(texto);
}

function soloNumeros(texto) {
    return /^[0-9]{7,}$/.test(texto);
}

document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("registerForm");

    if (!form) return;

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        let nombre = document.getElementById("nombre").value.trim();
        let email = document.getElementById("email").value.trim();
        let password = document.getElementById("password").value.trim();
        let telefono = document.getElementById("telefono").value.trim();

        if (!soloLetras(nombre)) {
            alert("Nombre mínimo 3 letras");
            return;
        }

        if (!validarEmail(email)) {
            alert("Email inválido");
            return;
        }

        if (password.length < 4) {
            alert("Contraseña muy corta");
            return;
        }

        if (!soloNumeros(telefono)) {
            alert("Teléfono inválido (mínimo 7 números)");
            return;
        }

        const user = {
            nombre,
            email,
            password,
            telefono
        };

        // guardar usuario
        localStorage.setItem("user", JSON.stringify(user));

        // activar sesión
        localStorage.setItem("sesion", "activa");

        alert("Registro exitoso ✔");

        // redirigir a inicio
        window.location.href = "inicio.html";
    });
});