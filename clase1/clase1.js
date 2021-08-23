//Repaso JS clase1

/* 3 tipos de variables:
    -const: constantes que no cambian con el tiempo, se les asigna un valor incial y este valor no puede cambiar.
    -let: variables pueden cambair de valor.
    -var: variable global NO LA USAMOS.

    tipos de datos:
    -int: numeros enteros.
    -float: numeros decimales.
    -string: cadenas de caracteres.
    -char: caracter.
    -boolean: 2 valores true o false.
*/

const jon = {
    nombre: 'Jon',
    apellido: 'Gibaut',
    edad: 19,
    mails: ['jongibaut@gmail.com', 'jongibaut@hotmail.com'],
}

const personajes = [
    {
        nombre: 'Homero',
        apellido: 'Simpson',
        trabajos: ['planta nuclear', 'don barredora']
    },
    {
        nombre: 'Marge',
        apellido: 'Simpson',
        trabajos: ['ama de casa'] // puede ser una array con una o más variables, o solo una variable sin el array
    },
    {
        nombre: 'Bob',
        apellido: 'Esponja',
        trabajos: 'cocinero'
    },
    {
        nombre: 'Leo',
        apellido: 'Messi',
        trabajos: 'PSG'
    }
]

const getAll = (arrayDeObjetos) => {     
    arrayDeObjetos.forEach(item => {    // forEach recorre el objeto
        let mas1Trabajo = false;
        if (item.trabajos.length > 1){
            mas1Trabajo = true;
        }
        console.log(`Nombre: ${item.nombre}. Apellido: ${item.apellido}. Tiene mas de un trabajo? ${mas1Trabajo ? 'SI': 'NO'}`)
    })  // se puede poner  console.log('Nombre: ' + item.nombre + 'Apellido: ' + item.apellido......
}

getAll(personajes)

///////////////////////////////////////////////

const axios = require('axios'); 

async function get(url) {
    const personajes = await axios.get(url);
    console.log(personajes);
}

get('https://breakingbadapi.com/api/characters')