//Declarando Variables
const nombre = "Alex";

const pi = 3.14;

//Tipos de Datos
//string
let stringName = "esto es un string";
//number
let numberEj = 23;
//boolean
let booleanEj = false;
let booleanEj2 = true;
// 
let nullValue = null;
let UndefinedValue = undefined;
// Array
let lista = ["Maciel" , "Castro", 23];
//objetos
let persona = {
  name : "Maciel",
  lastName : "Castro",
  age : 21,
};

//Condicionales
// let maciel = {
// age : 20,
// wallet : 1000
// };

// const error = "Algo anda mal, Volve a la casa";

// if (maciel.age >= 21){
//  alert("Entras, pase pibe!")
// } else {
//   if (maciel.wallet >= 2000 ) {
//     alert("Bueno, entra igual y compra escabio")
//   } else {
//     alert(error)
//   }
// };
 //Switch
// let estacion = prompt("Ingresa la estación del año")

//  switch (estacion) {
//    case "verano": 
//      if (true) {
//        alert("entra")
//      } else {
       
//      }
//      console.log("Hace calor")
//      break;

//    case "otoño":
//      console.log("Está amarillo")
//      break;

//    case "invierno":
//     console.log("Hace chuiii")
//      break;
 
//    case "primavera":
//     console.log("Me gusta!!")
//    break;

//    default:
//      console.log("no es ninguna de estas")
//      break;
//  }

//Condicionales compuestas

//const num1 = parseInt(prompt("ingresa el primer numero"));

//const num2 = parseInt(prompt("ingresa el segundo numero"));


// if (num1 >= 10 || num2 <= 10) {
//   alert("Es Verdadero")
// } else {
//   alert("Es Falso")
// };

// const valueBoolean = true;

// if (valueBoolean != false) {
//   console.log("verdadero")
// } else {
//   console.log("Falso")
// };

 //Bucles

// let contador = 30

//  while (contador < 20) {
//    console.log("Hola Mundo")
//    contador = contador + 1;
//  }

//  do {
//   console.log("Hola Mundo (DoWhile)")
//   contador = contador - 1;
//  } while (contador > 20);


//  // 

let cadena= 'funciones'

let cantidadDeO = 0;

for (let i = 0; i < cadena.length; i++) {

  if(cadena[i] === 'o'){
    cantidadDeO++
  }

}

console.log(cantidadDeO)


let nombres = ["Maciel", "Gaston", 1, true]

console.log(nombres[4])