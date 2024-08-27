const fs = require("fs");

// creación de la función registrar 
const registrar = (nombre, edad, tipoAnimal, colorAnimal, enfermedad) => {
    const datosAnimal = {
        nombreMascota: nombre,
        edad: edad,
        tipoAnimal: tipoAnimal,
        colorAnimal: colorAnimal,
        enfermedad: enfermedad
    };
    const datos = JSON.parse(fs.readFileSync("citas.json", "utf-8"));
    datos.push(datosAnimal);
    fs.writeFileSync("citas.json", JSON.stringify(datos));
    console.log("Cita registrada con éxito");
};

//creación de la función leer

const leer = () => {
    const datos = JSON.parse(fs.readFileSync("citas.json", "utf-8"));
    console.log (datos);
};

module.exports = {registrar,leer};