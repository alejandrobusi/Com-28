//Funcion declarativa

function saludarAlumno () {
  console.log("aqui comienza mi funcion")
  let saludo = "Hola Comision"
  console.log("aqui termina mi funcion")
  return saludo;
};

//Fucinon anonima

const saludar = function () {

  console.log("Hola Comison")

}

//Creando funcion

//let num1a = parseInt(prompt("ingresa el primer numero"));
//let num2b = parseInt(prompt("ingresa el segundo numero"));
let resultadoSuma;
const sumaNums = function (primerValor , segundoValor) {

  let resultado = primerValor + segundoValor;
  return resultado;

};

//resultadoSuma = sumaNums(num1a, num2b);

//console.log(`este es el console.log de resultadoSuma ${resultadoSuma}`);

//Funcion flecha o arrow function

const funcAn = "esto es una funcion anonima"
const funcArr = "esto es una funcion flecha o arrow function"

const saludo = function (a) {

console.log(a)
};

const frutas = ["banana" , "manzana" , "pera"]

const saludo2 = (arr) => {
  console.log(arr.join(" + "))
};

saludo(funcAn);
saludo2(frutas);

//Scope: es la vida que tiene una variable segun donde este declarada

//Scope Local

const paises = () => {
  
  const nombrePaises = ["argentina", "peru", "venezuela"];

  for (let i = 0; i < nombrePaises.length; i++) {
    console.log(nombrePaises[i])  
  }

}

//Scope Global
let nombrePaises = ["argentina", "peru", "venezuela"];

const paises2 = (arr) => {
  
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])  
  }

}















