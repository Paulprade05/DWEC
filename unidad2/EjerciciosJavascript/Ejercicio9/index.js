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
        alert("Introduce un número entero no negativo");
        return;
    }

    alert(`Entrada: ${numero} Salida: ${ordenDescendente(numero)}`);
});
