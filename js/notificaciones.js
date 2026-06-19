function notificarDescuentoFavoritos() {

    let fav = JSON.parse(localStorage.getItem("favoritos")) || [];

    if (fav.length > 0) {
        alert("🔥 Hay descuentos en tus favoritos!");
    }
}