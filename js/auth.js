// =====================
// REGISTRO
// =====================
const registerForm = document.getElementById("registerForm");

if (registerForm) {
    registerForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const usuario = {
            nombre: document.getElementById("nombre").value.trim(),
            email: document.getElementById("email").value.trim(),
            telefono: document.getElementById("telefono").value.trim(),
            password: document.getElementById("password").value.trim()
        };

        localStorage.setItem("usuario", JSON.stringify(usuario));

        alert("Registro exitoso");

        window.location.href = "inicio.html";
    });
}


// =====================
// LOGIN
// =====================
const loginForm = document.getElementById("loginForm");

if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const email = document.getElementById("loginEmail").value.trim();
        const password = document.getElementById("loginPassword").value.trim();

        const usuario = JSON.parse(localStorage.getItem("usuario"));

        if (!usuario) {
            alert("Primero regístrate");
            return;
        }

        if (email === usuario.email && password === usuario.password) {

            localStorage.setItem("sesionActiva", "true");

            alert("Bienvenido " + usuario.nombre);

            window.location.replace("index.html");

        } else {
            alert("Correo o contraseña incorrectos");
        }
    });
}


// =====================
// LOGOUT
// =====================
function logout() {
    localStorage.removeItem("sesionActiva");
    alert("Sesión cerrada");
    window.location.href = "index.html";
}