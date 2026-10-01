const productosTest = [
    {id: 1, nombre: "Portatil i7", categoria: "portatiles", precio: 899, stock:5},
    {id: 2, nombre: "Tablet", categoria: "Informatica", precio: 399, stock:0},
    {id: 3, nombre: "Monitor 24 pulgadas", categoria: "Informatica", precio: 199, stock:15},
    {id: 4, nombre: "Portatil i5", categoria: "portatiles", precio: 699, stock:7}    

]

console.table(productosTest);

 function procesarInventario(productos) {
    const catalogoProductos = [];
    let errorCritico = false;

    for (const producto of productos) {
        if (producto.precio < 0) {
            console.error(`Error crítico: El producto con ID ${producto.id} tiene un precio negativo.`);
            errorCritico = true;
            break; 
        }

        if (producto.stock == 0) {
            console.warn(`Advertencia: El producto con ID ${producto.id} está agotado.`);
            continue;
        }

        let descuento = 0;
        switch (producto.categoria) {
            case "Informatica":
                descuento = 0.1; 
                break;
            case "portatiles":
                descuento = 0.05; 
                break;
            default:
                descuento = 0; 
        }

        const precioFinal = producto.precio * (1 - descuento);
        catalogoProductos.push({
            id: producto.id,
            nombre: producto.nombre,
            categoria: producto.categoria,
            precioFinal: precioFinal.toFixed(2),
            stock: producto.stock
        });
    }
        return catalogoProductos;

            
 }   
 

console.table(procesarInventario(productosTest));