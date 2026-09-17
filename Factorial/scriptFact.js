// Función principal que calcula el factorial de un número.
function calcularFactorial(numero) {
    // Convierte el valor a texto y elimina espacios en blanco si viene como cadena.
    const valor = typeof numero === "string" ? numero.trim() : numero;
    // Transforma el valor a un número para validar si es numérico.
    const numeroValido = Number(valor);

    // Comprueba si el campo está vacío o si el valor no es un número válido.
    if (valor === "" || valor === null || valor === undefined || !Number.isFinite(numeroValido)) {
        const mensaje = "Por favor, ingrese un número válido.";
        console.log(mensaje);
        return mensaje;
    }

    // Comprueba que el número sea entero, porque el factorial no se define para decimales.
    if (!Number.isInteger(numeroValido)) {
        const mensaje = "El factorial solo se puede calcular con números enteros.";
        console.log(mensaje);
        return mensaje;
    }

    // Evita que se introduzcan números negativos.
    if (numeroValido < 0) {
        const mensaje = "El factorial no está definido para números negativos.";
        console.log(mensaje);
        return mensaje;
    }

    // Caso base: factorial de 0 y 1 es 1.
    if (numeroValido === 0 || numeroValido === 1) {
        const mensaje = "El factorial de " + numeroValido + " es: 1";
        console.log(mensaje);
        return 1;
    }

    // Calcula el factorial usando un bucle desde 2 hasta el número introducido.
    let resultado = 1;
    for (let i = 2; i <= numeroValido; i++) {
        resultado *= i;
    }

    // Muestra el resultado final en la consola.
    const mensaje = "El factorial de " + numeroValido + " es: " + resultado;
    console.log(mensaje);
    return resultado;
}
