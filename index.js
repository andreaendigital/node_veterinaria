// Importación con CommonJS de las funciones a utilizar:
const { registrar, leer } = require ("./operaciones");

//Instrucción para ingresar la información por línea de comando:
const [operacion, nombre, edad, tipoAnimal, colorAnimal, enfermedad] = process.argv.slice(2);

//Condicional a ejecutar según la operación a realizar:
if (operacion == "registrar") {
    registrar(nombre, edad, tipoAnimal, colorAnimal, enfermedad);
    }
    if ( operacion == "leer"){
        leer();
    }