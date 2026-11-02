function ordenDescendente(num) {
    return Number(
        num
            .toString()
            .split('')
            .sort((a, b) => b - a)
            .join('')
    );
}

document.getElementById("formulario").addEventListener("submit", function (e) {
    e.preventDefault();
    const numero = parseInt(document.getElementById("numero").value, 10);

    if (isNaN(numero) || numero < 0) {
        alert("introduce un numero entero no negativo");
        return;
    }

    alert(`entrada: ${numero} salida: ${ordenDescendente(numero)}`);
});
