

// VALIDACIONES


function validarEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function soloLetras(texto) {
    return /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/.test(texto);
}

function soloNumeros(texto) {
    return /^[0-9]+$/.test(texto);
}


// FORMULARIO PERFIL


document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("formPerfil");

    if (!form) return;

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        let nombre = document.getElementById("nombre").value.trim();
        let email = document.getElementById("email").value.trim();
        let telefono = document.getElementById("telefono").value.trim();
        let direccion = document.getElementById("direccion").value.trim();
        let ciudad = document.getElementById("ciudad").value.trim();

        let valido = true;

        // limpiar errores
        document.getElementById("errorNombre").textContent = "";
        document.getElementById("errorEmail").textContent = "";
        document.getElementById("errorTelefono").textContent = "";

      
        // VALIDAR NOMBRE
     
        if (nombre.length < 3 || !soloLetras(nombre)) {
            document.getElementById("errorNombre").textContent =
                "El nombre debe tener mínimo 3 letras y solo contener texto";
            valido = false;
        }

  
        // VALIDAR EMAIL
     
        if (!validarEmail(email)) {
            document.getElementById("errorEmail").textContent =
                "Correo inválido";
            valido = false;
        }

        // VALIDAR TELÉFONO
  
        if (!soloNumeros(telefono) || telefono.length < 7) {
            document.getElementById("errorTelefono").textContent =
                "El teléfono debe tener mínimo 7 números y solo dígitos";
            valido = false;
        }

     
        // SI TODO ESTÁ BIEN
   
        if (valido) {

            const usuario = {
                nombre,
                email,
                telefono,
                direccion,
                ciudad
            };

            localStorage.setItem("usuario", JSON.stringify(usuario));

            alert("✅ Perfil guardado correctamente");
        }
    });
});



// MENU DEL LOGO (SI LO USAS)


function toggleMenu() {
    const menu = document.getElementById("menuDesplegable");

    if (menu) {
        menu.classList.toggle("show");
    }
}