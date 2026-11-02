function contarBits(num) {
    if (!Number.isInteger(num) || num < 0) {
        return -1;
    }

    return num
        .toString(2)
        .split('')
        .filter(bit => bit === '1')
        .length;
}

document.getElementById("formulario").addEventListener("submit", function (e) {
    e.preventDefault();
    const numero = Number(document.getElementById("numero").value);
    const resultado = contarBits(numero);

    if (resultado === -1) {
        alert("Introduce un número entero no negativo");
    } else {
        alert(`${numero} en binario es ${numero.toString(2)} y tiene ${resultado} bits a uno`);
    }
});
