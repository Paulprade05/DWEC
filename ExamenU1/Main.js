countGoodPairs("1, a, 3, 1, 1, 3");


function countGoodPairs(lista) {
    let nums = [];
    //let lista = prompt("Introduce la secuenca de numeros separados por coma:");
    let numeros = lista.split(",");

    for (let i = 0; i < numeros.length; i++) {
        if (!isNaN(numeros[i].trim)) {
            console.log("Numero no valido");
            document.getElementById("errores").innerHTML = numeros[i] + "No es un numero válido";
            continue;
        } else {
            nums.push(Number(numeros[i].trim()));


        }
    }
    console.table(nums);
    let paresBuenos = 0;

    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] === nums[j])
                paresBuenos++;
        }
    }
    let salida = "Numeros de pares buenos: " + paresBuenos;
    console.log(salida);
    document.getElementBy("p0").innerHTML = salida;
    console.log(paresBuenos);
    document.getElementById("p1").innerHTML = nums;
}
