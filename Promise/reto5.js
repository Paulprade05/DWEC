/**
 * Clase CarritoPersistente para gestionar una lista de productos en localStorage.
 * Incluye métodos para añadir, eliminar y vaciar productos con persistencia y renderizado DOM.
 */
class CarritoPersistente {
    constructor() {
        this.storageKey = 'carrito_compras';
        this.productos = [];
        
        // Inicializar carrito desde localStorage
        this.cargarDelStorage();
        
        // Escuchar cambios en otra pestaña
        window.addEventListener('storage', (event) => {
            if (event.key === this.storageKey && event.newValue !== null) {
                this.actualizarDesdeStorage();
            }
        });
    }

    /**
     * Cargar productos desde localStorage
     */
    cargarDelStorage() {
        const data = localStorage.getItem(this.storageKey);
        if (data) {
            this.productos = JSON.parse(data);
        }
    }

    /**
     * Actualizar carrito desde storage (para cambios en otras pestañas)
     */
    actualizarDesdeStorage() {
        const data = localStorage.getItem(this.storageKey);
        if (data) {
            this.productos = JSON.parse(data);
            this.renderizarLista();
        }
    }

    /**
     * Añadir producto al carrito, gestionando cantidades si ya existe
     * @param {Object} producto - Objeto con id y precio
     */
    agregarProducto(producto) {
        const existenteIndex = this.productos.findIndex(p => p.id === producto.id);
        
        if (existenteIndex >= 0) {
            // Sumar cantidades si el producto ya existe
            this.productos[existenteIndex].cantidad += 1;
        } else {
            // Añadir nuevo producto con cantidad inicial de 1
            this.productos.push({
                ...producto,
                cantidad: 1
            });
        }

        this.persistirEnStorage();
        this.renderizarLista();
    }

    /**
     * Eliminar producto del carrito
     * @param {number} id - ID del producto a eliminar
     */
    eliminarProducto(id) {
        const index = this.productos.findIndex(p => p.id === id);
        if (index >= 0) {
            this.productos.splice(index, 1);
            this.persistirEnStorage();
            this.renderizarLista();
        }
    }

    /**
     * Vaciar la cesta completamente
     */
    vaciarCesta() {
        this.productos = [];
        this.persistirEnStorage();
        this.renderizarLista();
    }

    /**
     * Guardar productos en localStorage
     */
    persistirEnStorage() {
        localStorage.setItem(this.storageKey, JSON.stringify(this.productos));
    }

    /**
     * Renderizar la lista de productos en el DOM usando document.createElement()
     */
    renderizarLista() {
        // Eliminar contenedor previo si existe
        let contenedor = document.getElementById('lista-carrito');
        if (contenedor) {
            contenedor.remove();
        }

        // Crear nuevo contenedor
        contenedor = document.createElement('div');
        contenedor.id = 'lista-carrito';
        contenedor.className = 'carrito-container';
        
        // Título
        const titulo = document.createElement('h2');
        titulo.textContent = 'Tu Carrito de Compras';
        titulo.className = 'carrito-titulo';
        contenedor.appendChild(titulo);

        // Subtítulo con total de productos
        const subtotalElem = this.calcularSubtotal();
        const subtitulo = document.createElement('p');
        subtitulo.textContent = `Productos: ${this.productos.reduce((sum, p) => sum + p.cantidad, 0)} | Subtotal: €${subtotalElem}`;
        subtitulo.className = 'carrito-subtitulo';
        contenedor.appendChild(subtitulo);

        // Lista de productos
        if (this.productos.length === 0) {
            const vacio = document.createElement('p');
            vacio.textContent = 'El carrito está vacío';
            vacio.className = 'carrito-vacio';
            contenedor.appendChild(vacio);
        } else {
            const lista = document.createElement('ul');
            lista.className = 'carrito-lista';

            this.productos.forEach(producto => {
                const item = document.createElement('li');
                item.className = 'carrito-item';

                // Información del producto
                const infoDiv = document.createElement('div');
                infoDiv.className = 'producto-info';

                const nombre = document.createElement('strong');
                nombre.textContent = producto.nombre || `Producto ${producto.id}`;
                
                const precio = document.createElement('span');
                precio.className = 'producto-precio';
                precio.textContent = `€${producto.precio.toFixed(2)}`;

                infoDiv.appendChild(nombre);
                infoDiv.appendChild(precio);
                item.appendChild(infoDiv);

                // Cantidad
                const cantidadDiv = document.createElement('div');
                cantidadDiv.className = 'producto-cantidad';

                const cantLabel = document.createElement('span');
                cantLabel.textContent = 'Cant: ';
                
                const cantValue = document.createElement('strong');
                cantValue.textContent = producto.cantidad;

                cantidadDiv.appendChild(cantLabel);
                cantidadDiv.appendChild(cantValue);
                item.appendChild(cantidadDiv);

                // Total del producto
                const total = (producto.precio * producto.cantidad).toFixed(2);
                const totalDiv = document.createElement('div');
                totalDiv.className = 'producto-total';
                totalDiv.textContent = `Total: €${total}`;
                item.appendChild(totalDiv);

                // Botón eliminar
                const btnEliminar = document.createElement('button');
                btnEliminar.textContent = 'Eliminar';
                btnEliminar.className = 'btn-eliminar';
                btnEliminar.onclick = () => this.eliminarProducto(producto.id);
                item.appendChild(btnEliminar);

                lista.appendChild(item);
            });

            contenedor.appendChild(lista);
        }

        // Añadir al DOM (antes del footer o body si no existe)
        const container = document.querySelector('footer') || document.body;
        container.insertBefore(contenedor, container.firstChild.nextSibling);
    }

    /**
     * Calcular subtotal de todos los productos
     * @returns {number} Subtotal total
     */
    calcularSubtotal() {
        return this.productos.reduce((sum, p) => sum + (p.precio * p.cantidad), 0);
    }

    /**
     * Obtener copia del array de productos actual
     * @returns {Array} Array de productos
     */
    getProductos() {
        return [...this.productos];
    }

    /**
     * Obtener el número total de items en el carrito
     * @returns {number} Total de items
     */
    getTotalItems() {
        return this.productos.reduce((sum, p) => sum + p.cantidad, 0);
    }
}

// Ejemplo de uso (descomentar para probar):
/*
const carrito = new CarritoPersistente();

// Añadir productos
carrito.agregarProducto({ id: 1, nombre: 'Camiseta', precio: 29.99 });
carrito.agregarProducto({ id: 1, nombre: 'Camiseta', precio: 29.99 }); // Aumentará cantidad a 2
carrito.agregarProducto({ id: 2, nombre: 'Pantalón', precio: 49.99 });

console.log('Productos:', carrito.getProductos());
console.log('Total items:', carrito.getTotalItems());

// Eliminar producto
carrito.eliminarProducto(1);

// Vaciar cesta
carrito.vaciarCesta();
*/


