// Esperar a que cargue toda la página
document.addEventListener("DOMContentLoaded", () => {
  // Mostrar productos en pantalla
  mostrarProductos();

  // Actualizar contador del carrito
  actualizarContadorCarrito();
});


window.addEventListener("load", function() {
    const loader = document.getElementById("pantalla-carga");
    
    
    setTimeout(function() {
        loader.style.opacity = 0;
        loader.addEventListener("transitionend", function() {
            loader.remove();
        });
    }, 2000); 
});