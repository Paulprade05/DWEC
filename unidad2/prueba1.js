"use strict";

// Hoisting y TDZ
function hoisting() {
  console.log("var antes:", v); // undefined
  var v = 1;
  try { console.log(l); } catch (e) { console.log("let:", e.name); }
  let l = 2;
  try { console.log(c); } catch (e) { console.log("const:", e.name); }
  const c = 3;
}
hoisting();

// Ámbito
function ambito() {
  if (true) {
    var v = "var";
    let l = "let";
    const c = "const";
  }
  console.log(v); // "var"
  try { console.log(l); } catch (e) { console.log("let:", e.name); }
  try { console.log(c); } catch (e) { console.log("const:", e.name); }
}
ambito();

// typeof de los primitivos
for (const valor of [1, "a", true, undefined, Symbol(), 1n, null])
  console.log(valor, "=>", typeof valor);

// const protege la referencia, no las propiedades
const objeto = { valor: 1 };
objeto.valor = 2;
console.log(objeto);
try { objeto = {}; } catch (e) { console.log("Reasignar:", e.name); }
