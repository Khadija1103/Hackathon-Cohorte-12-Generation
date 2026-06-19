let favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];

function toggleFavorito(producto) {

    const existe = favoritos.find(p => p.id === producto.id);

    if (existe) {
        favoritos = favoritos.filter(p => p.id !== producto.id);
    } else {
        favoritos.push(producto);
        alert("❤️ Agregado a favoritos");
    }

    localStorage.setItem("favoritos", JSON.stringify(favoritos));
}