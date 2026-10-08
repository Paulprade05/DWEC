function encontrarIndice(arr) {
    const totalSum = arr.reduce((acc, num) => acc + num, 0);
    let leftSum = 0;

    for (let i = 0; i < arr.length; i++) {
        const rightSum = totalSum - leftSum - arr[i];

        if (leftSum === rightSum) {
            return i;
        }

        leftSum += arr[i];
    }

    return -1;
}

document.getElementById("formulario").addEventListener("submit", function (e) {
    e.preventDefault();
    const texto = document.getElementById("arrayNumeros").value.trim();

    const arrayNumeros = texto.split(",").map(num => parseInt(num.trim(), 10));

    const resultado = encontrarIndice(arrayNumeros);

    if (resultado !== -1) {
        alert(`El índice de equilibrio es: ${resultado}`);
    } else {
        alert("No existe ningún índice de equilibrio (-1)");
    }
});
