let puntos = parseInt(localStorage.getItem("puntos")) || 0;

function sumarPuntos(compraTotal) {

    let ganados = Math.floor(compraTotal / 10000);

    puntos += ganados;

    localStorage.setItem("puntos", puntos);

    if (puntos > 50) {
        alert("🏆 Eres nivel ORO!");
    } else if (puntos > 20) {
        alert("🥈 Nivel PLATA desbloqueado");
    }
}