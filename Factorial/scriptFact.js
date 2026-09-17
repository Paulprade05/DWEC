function calcularFactorial(numero) {
    const valor = typeof numero === "string" ? numero.trim() : numero;
    const numeroValido = Number(valor);

    if (valor === "" || valor === null || valor === undefined || !Number.isFinite(numeroValido)) {
        alert("Por favor, ingrese un número válido.");
        return "Por favor, ingrese un número válido.";
    }

    if (!Number.isInteger(numeroValido)) {
        alert("El factorial solo se puede calcular con números enteros.");
        return "El factorial solo se puede calcular con números enteros.";
    }

    if (numeroValido < 0) {
        alert("El factorial no está definido para números negativos.");
        return "El factorial no está definido para números negativos.";
    }

    if (numeroValido === 0 || numeroValido === 1) {
        return 1;
    }

    let resultado = 1;
    for (let i = 2; i <= numeroValido; i++) {
        resultado *= i;
    }

    alert("El factorial de " + numeroValido + " es: " + resultado);
    return resultado;
}
