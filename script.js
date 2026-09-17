console.log("=== MAPA DE TECNOLOGÍAS WEB EN CLIENTE ===");
console.log("1. HTML: Define la estructura semántica del documento.");
console.log("2. CSS: Define la apariencia visual, colores y maquetación responsive.");
console.log("3. JavaScript: Implementa la lógica de interacción, dinamismo y eventos.");
console.log("4. TypeScript: Superconjunto tipado que se transpila a JavaScript estándar.");

const soporteWasm = typeof WebAssembly !== "undefined";
console.log("soporta webassembly?:", soporteWasm ? "Sí" : "No");

if (soporteWasm) {
  console.log("esta preparado.");
} else {
  console.log("no esta preparado.");
}