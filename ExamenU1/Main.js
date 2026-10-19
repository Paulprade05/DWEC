countGoodPairs("1, 2, 3, 1, 1, 3");


function countGoodPairs(lista) {
    const element = document.getElementById("div1");
    let nums = [];
    //const lista = prompt("Introduce la secuenca de numeros separados por coma:");
    let numeros = lista.split(",");

    for (let i = 0; i < numeros.length; i++) {
        let valor = numeros[i].trim();
        let numero = numeros[valor]
        if (valor === "" || isNaN(numero)) {
            const paraError = document.createElement("p");
            const nodeError = document.createTextNode("El valor '" + valor + "' no es un numero.");
            paraError.appendChild(nodeError);
            element.appendChild(paraError);
        } else {
            nums.push(numero);
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

    const paraLista = document.createElement("p");
    const nodeLista = document.createTextNode("Lista: " + nums.join(", "));
    paraLista.appendChild(nodeLista);
    element.appendChild(paraLista);
    const paraPares = document.createElement("p");
    const nodePares = document.createTextNode("Numero de pares buenos: " + paresBuenos);
    paraPares.appendChild(nodePares);
    element.appendChild(paraPares);
}
