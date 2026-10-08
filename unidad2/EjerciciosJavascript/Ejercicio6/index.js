function persistencia(num) {
    let contador = 0;

    while (num >= 10) {
        num = num
            .toString()
            .split('')
            .reduce((acc, digito) => acc * Number(digito), 1);
        contador++;
    }

    return contador;
}

// Evento del formulario para probarlo
document.getElementById("formulario").addEventListener("submit", function (e) {
    e.preventDefault();
    const numero = parseInt(document.getElementById("numero").value, 10);
    const resultado = persistencia(numero);
    alert(`La persistencia multiplicativa de ${numero} es: ${resultado}`);
});
