//Variables
//Espacio de memoria donde se guarda un dato

//Declaracion
let nombre = "valor";

const nombreConst = "valor";

const pi = 3.14;

// Tipos de datos

//String
let string = "este es un string";

// Number
let numero = 25;

//Boolean --> true o false
let hoyLlueve = true;
let hoyLlueveF = false;

// Null
let valorNulo = null;

//Arreglo []
let arreglo = ["valor1", 2, true, null, {}];

//Objetos --> clave valor
let persona = {
  edad: 15,
  nombre: "Franco",
  arreglo: [],
};

//Operadores
let suma = 15 + 15;
let resta = 15 - 15;
let multiplic = 15 * 2;
let division = 9 / 3;
let resto = 9 % 3;

console.log("Resultado de la suma: " + suma);

// Operadores unitarios
// ++
// --
let num1 = 1;
num1++;
console.log("Resultado de la suma ++ : " + num1);

let num2 = 2;
num2--;
console.log("Resultado de la resta -- : " + num2);

//Operadores relacionales (devuelve true o false)

let primerNumero = 10;
let segundoNumero = 15;
let tercerNumero = 20;
let cuartoNumero = 25;

// console.log(
//   "primerNumero:10 segundoNumero: 15 -->" + (primerNumero == segundoNumero)
// );
console.log("?Los valores son iguales?");
console.log(primerNumero == segundoNumero);
console.log("?Los valores son estrictamente iguales?");
console.log(primerNumero === segundoNumero); //estrictamente igual (se fija el tipo de dato)
console.log("?Los valores son distintos?");
console.log(primerNumero != segundoNumero);
console.log("?Los valores son estrictamente distintos?");
console.log(primerNumero !== segundoNumero); //estrictamente distinto (se fija el tipo de dato)

//             10        >       15
console.log(primerNumero > segundoNumero);
console.log(primerNumero < segundoNumero);
console.log(primerNumero <= segundoNumero);

let verdadero = true;
console.log("Negacion de verdadero:");
console.log(!verdadero);

let falso = false;
console.log("Negacion de falso:");
console.log(!falso);

//Tarea
// Creamos tres variables: numero1, numero2, resultado
// mostramos por consola (console.log();) los resultados de las operaciones
// Sumamos dos números
// Restamos dos números
// multiplicamos dos números
// Dividimos dos numeros
// comparamos si el numero 1 es mayor o igual que numero 2
// comparamos si numero 1 es distinto de numero 2
// Intentar usar prompt
//Parecido al alert()

let edad = prompt("Ingrese su edad");
alert("Su edad es: " + edad);
