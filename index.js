const { leer, registrar } = require("./operaciones");

const [operacion, nombre, edad, tipo, color, enfermedad] =
  process.argv.slice(2);

if (operacion !== undefined) {
  if (operacion.trim().toLowerCase() === "registrar") {
    let resultado = registrar(nombre,edad,tipo,color,enfermedad);
    console.log(resultado)
  }
  if (operacion.trim().toLowerCase() === "leer") {
    let resultado = leer();
    console.log(resultado)
  }
}
