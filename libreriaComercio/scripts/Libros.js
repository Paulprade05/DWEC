/**
 * Clase Libros - Gestiona la creación y almacenamiento de libros
 */
class Libros {
    constructor() {
        this.libros = [];
        this.nextId = 1;
        // Intentar cargar libros guardados
        const savedLibros = localStorage.getItem('libreriaComercio_libros');
        if (savedLibros) {
            try {
                const data = JSON.parse(savedLibros);
                this.libros = data.libros || [];
                this.nextId = data.nextId || 1;
            } catch (e) {
                console.error('Error al cargar libros:', e);
            }
        }
    }

    /**
     * Crea un nuevo libro
     * @param {Object} libro - Objeto con título, autor, año, isbn y descripción
     * @returns {Object} El libro creado con su ID
     */
    crear(libro) {
        const nuevoLibro = {
            id: this.nextId++,
            titulo: libro.titulo || '',
            autor: libro.autor || '',
            ano: libro.ano || '',
            isbn: libro.isbn || '',
            descripcion: libro.descripcion || '',
            fechaCreacion: new Date().toISOString()
        };

        this.libros.push(nuevoLibro);
        this.guardar();
        
        return nuevoLibro;
    }

    /**
     * Obtiene todos los libros
     * @returns {Array} Array de libros
     */
    obtenerTodos() {
        return [...this.libros];
    }

    /**
     * Busca libros por criterio
     * @param {Object} criterios - Criterios de búsqueda (título, autor, año, isbn)
     * @returns {Array} Libros que coinciden con los criterios
     */
    buscar(criterios) {
        if (!criterios || Object.keys(criterios).length === 0) {
            return this.obtenerTodos();
        }

        return this.libros.filter(libro => {
            return (
                (criterios.titulo === '' || libro.titulo.toLowerCase().includes(criterios.titulo.toLowerCase())) &&
                (criterios.autor === '' || libro.autor.toLowerCase().includes(criterios.autor.toLowerCase())) &&
                (criterios.ano === '' || String(libro.ano).includes(String(criterios.ano))) &&
                (criterios.isbn === '' || libro.isbn.includes(criterios.isbn))
            );
        });
    }

    /**
     * Obtiene un libro por ID
     * @param {number} id - ID del libro
     * @returns {Object|null} Libro encontrado o null
     */
    obtenerPorId(id) {
        return this.libros.find(libro => libro.id === id) || null;
    }

    /**
     * Elimina un libro por ID
     * @param {number} id - ID del libro a eliminar
     */
    eliminar(id) {
        const index = this.libros.findIndex(libro => libro.id === id);
        if (index !== -1) {
            this.libros.splice(index, 1);
            this.guardar();
        }
    }

    /**
     * Actualiza un libro
     * @param {number} id - ID del libro a actualizar
     * @param {Object} datos - Nuevos datos del libro
     * @returns {Object|false} Libro actualizado o false si no existe
     */
    actualizar(id, datos) {
        const index = this.libros.findIndex(libro => libro.id === id);
        if (index !== -1) {
            this.libros[index] = {
                ...this.libros[index],
                ...datos,
                id // Mantener el ID original
            };
            this.guardar();
            return this.libros[index];
        }
        return false;
    }

    /**
     * Guarda los libros en localStorage
     */
    guardar() {
        try {
            localStorage.setItem('libreriaComercio_libros', JSON.stringify({
                libros: this.libros,
                nextId: this.nextId
            }));
        } catch (e) {
            console.error('Error al guardar libros:', e);
        }
    }

    /**
     * Limpia todos los libros
     */
    limpiar() {
        this.libros = [];
        this.nextId = 1;
        this.guardar();
    }

    /**
     * Obtiene el número total de libros
     * @returns {number} Cantidad de libros
     */
    obtenerCantidad() {
        return this.libros.length;
    }
}

// Instancia global de la clase Libros
const libros = new Libros();
