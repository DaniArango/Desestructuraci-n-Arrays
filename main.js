
// 1.  Ejercicios destructuring
// Dado el siguiente objeto:
// Extrae la empleada Ana con todos sus datos personales:


const empleados = [
    { name: "Luis", email: "Luis@gmail.com" },
    { name: "Ana", email: "Ana@gmail.com" },
    { name: "Andrea", email: "Andrea@gmail.com" },
  ];
  

  const [,p2,] = empleados
  const {name,email} =p2
  console.log(name,email)

  //Extrae el email del empleado Luis --> Luis@gmail.com


const [p1] =empleados
const {email:correo} = p1
console.log(correo)



// Dado el siguiente objeto:

const pokemon = {
    name: "Bulbasaur",
    type: "grass",
    ability: {
        "primary": "Overgrow",
        "hidden": "Chlorophyll"
    },
    stats: {
        hp: 45,
        attack: 49,
        deffense: 59,
        speed: 45
    },
    moves: [
        "Growl", "Tackle", "Vine Whip", "Razor Leaf"
    ]
}

// Cambia el nombre de la propiedad “name” por “nombre
// Extrae el nombre del Pokemon

const {name:nombre} = pokemon
console.log(nombre)

// Extrae el tipo de Pokemon que es

const {type} = pokemon
console.log (type)


// Extrae el movimiento “Tackle”

const { moves } = pokemon;
const [, mov2] = moves;
console.log(mov2);


// 2. Ejercicios spread/rest
// Mergea el siguiente pokémon con el Pokemon del ejercicio anterior:


const pikachu = {
    name: "Pikachu",
    type: "electric",
    ability: {
        "primary": "Static",
        "hidden": "Lightning rod"
    },
    stats: {
        hp: 35,
        attack: 55,
        deffense: 40,
        speed: 90
    },
    moves: [
        "Quick Attack", "Volt Tackle", "Iron Tail", "Thunderbolt"
    ],
}

const pokemons ={...pokemon,...pikachu}
console.log (pokemons)

// Escribe una función llamada sumEveryOther que pueda recibir cualquier 
// cantidad de números y devuelva la suma de todos los demás argumentos.

const sumEveryOther = (...numeros) => {
    console.log(numeros.reduce((a, b) => a + b));
}
  sumEveryOther(6, 8, 2, 3, 1); //20
  sumEveryOther(11, 3, 12); //26 


// Escribe una función llamada addOnlyNums que pueda recibir cualquier número de argumentos 
// (incluyendo números y strings y retorne la suma solo de los números.

function addOnlyNums(...numeros) {
  let filtrados = numeros
    .filter((numero) => Number.isInteger(numero))
    .reduce((a, b) => a + b);
  return console.log(filtrados);

}
   
addOnlyNums(1, 'perro', 2, 4); //7


// // Escribe una función llamada countTheArgs que pueda recibir cualquier número de argumentos y 
// // devuelva un número que indique cuántos argumentos ha recibido.

    function countTheArgs(){

        let size=arguments.length
        return console.log(size)
    }

countTheArgs('gato', 'perro'); //2
countTheArgs('gato', 'perro', 'pollo', 'oso'); //4


// // Escribe una función llamada combineTwoArrays que reciba dos array cómo argumentos y devuelva 
// // solo un array que combine los dos (usando spread operator).

function combineTwoArrays(a,b){
    const newArray = [...arguments[0],...arguments[1]];

     console.log(newArray)
}


combineTwoArrays(["Gaby,Daniela,Ignazio,Piero"],[0911,2105,0410,1206]);

