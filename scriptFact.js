function calcularFactorial(numero) {
    if (numero < 0) {   
        return "El factorial no está definido para números negativos.";
    } else if (numero === 0 || numero === 1) {
        return 1;
        
    } else if(isNaN(numero)) {
        return "Por favor, ingrese un número válido.";
    }
    else {
        let resultado = 1;
        for (let i = 2; i <= numero; i++) {
            resultado *= i;
        }
        alert("El factorial de " + numero + " es: " + resultado);
        return resultado;
    }
    
}
