function cuatroCuadrados(n) {
    const limite = Math.floor(Math.sqrt(n));

    for (let a = limite; a >= 0; a--) {
        for (let b = Math.min(a, Math.floor(Math.sqrt(n - a * a))); b >= 0; b--) {
            for (let c = Math.min(b, Math.floor(Math.sqrt(n - a * a - b * b))); c >= 0; c--) {
                const resto = n - a * a - b * b - c * c;
                const d = Math.round(Math.sqrt(resto));

                if (d * d === resto && d <= c) {
                    return [a, b, c, d];
                }
            }
        }
    }

    return [];
}

document.getElementById("formulario").addEventListener("submit", function (e) {
    e.preventDefault();
    const numero = parseInt(document.getElementById("numero").value, 10);

    if (isNaN(numero) || numero < 0) {
        alert("Introduce un número natural");
        return;
    }

    const resultado = cuatroCuadrados(numero);
    alert(`${numero} = ${resultado.map(x => x + "²").join(" + ")}\n[${resultado.join(", ")}]`);
});
