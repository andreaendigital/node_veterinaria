# FileSystem (fs) con Node.js

## Descripción del Proyecto :scroll:

Proyecto donde se validan conocimientos básicos en Node.js, con pequeña app para ingresar citas médicas a una veterinaria a través de línea de comando (process.arvg) en consola.

## Sobre el proyecto 🚀

### ✨ Requerimientos ✨

👌 1. index.js: que es el archivo principal que interactuar con la aplicación. En este archivo se deberán importar las operaciones que creen y las citas en la veterinaria.

👌 2. operaciones.js:En este archivo se deberán crear 2 funciones para: 
  - Registrar: Agregar una nueva cita de atención veterinaria que debe incluir: Nombre de la mascota Edad Tipo de animal Color del animal Enfermedad
  - Leer: Mostrar por consola todas las citas registradas

👌 3. citas.json: Deberá ser un json que simplemente guarde un arreglo vacío.

👉 Para interactuar con el archivo index.js se deberán pasar argumentos por línea de comando especificando qué función se desea ejecutar, por ejemplo:

  - node index.js registrar Benito “2 años” perro blanco vomitos node index.js leer

  - Se deberá crear condiciones que evalúen, según el argumento correspondiente, qué función ejecutar:
  if (operacion === "registrar") { registrar(nombre, edad, animal, color, enfermedad); }
  if (operacion === "leer") { leer(); }



## Visuales :mage_woman:

![Captura de pantalla 2024-08-27 155639](https://github.com/user-attachments/assets/695e3f94-f9b0-4079-9d25-0705d0e8d50f)

![Captura de pantalla 2024-08-27 155815](https://github.com/user-attachments/assets/5911dc38-c334-4bbb-9c40-d2495c70561e)

![Captura de pantalla 2024-08-27 155830](https://github.com/user-attachments/assets/0939a2a0-cc09-4f27-a0e7-29b47d3d4e1e)



## Construido Con 🛠️

- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) - El lenguaje utilizado
- [Node](https://nodejs.org/en)- Node.js

## Autora ⚡ 

- **Andrea Rosero** ⚡  - [Andrea Rosero](https://github.com/andreaendigital)
