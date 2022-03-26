let alumnos = ["Daniel", "Gaston", "Matias"]
let alumnas = ["Flavia", "Pia", "Gabriela"]
let loteria = [122, 23, 4, 5] 
// TRAER LA EL ULTOMO ALUMNO

//console.log(alumnos[alumnos.length -1])

// RECORRER ARRAY CON FOR

for (let i = 0; i < alumnos.length; i++) {
  console.log(alumnos[i])
}

//AÑADIR UN ELEMENTO AL FINAL DEL ARRAY
//alumnos.push("Marcelo")

// BORRAR EL ULTIMO ELEMENTO
//alumnos.pop()

//AÑADIR UNO O MAS ELEMENTOS AL PRINCIPIO DEL ARRAY
//alumnos.unshift("Flavia", "Gaston", "Max")

//BORRAR EL PRIMER VALOR (INDICE 0)
//alumnos.shift()
//console.log(alumnos)
//ENCOTRAR INDICE DEL ELEMENTO
// const findIndex = prompt("ingresa el nombre")
// console.log(alumnos.indexOf(findIndex))
// if (alumnos.indexOf(findIndex) !== -1) {
//   console.log(" el indice es " + alumnos.indexOf(findIndex))
// } else {
//   console.log("no se encontro el indice")
// }

//ELIMINAR ALUMNOS SEGUN SU POSICIÓN 

// const pos = 1
// alumnos.splice(pos , 1 )

//CONCATENAR ARRAYS
let concatenando = alumnos.concat(alumnas)

//DETERMINAR SI UN VALOR ESTA EN EL ARRAY

console.log(concatenando.includes("Gaston"))

//ORDEN ALLFABETICO

console.log(concatenando.sort())
//PASAR ARRAY A TEXTO 
console.log(concatenando.join())

//CREANDO ARRAY CON .MAP

let mapArray = alumnos.map (function(alumno){
  return document.write`<p> Comision 28 ${alumno}</p>`;
})
console.log(mapArray)
console.log(alumnos)

// METODO FIND
const array1 = [5, 12, 8, 130, 44];

const found = array1.find(element => element < 129);

console.log(found);


//METODOS PARA NUMEROS

let num1 = 46.23;

let num2 = 25;

let num3 = 34.656778;
//REDONDEAR PARA ABAJO
console.log(Math.floor(num1))

//REDONDEAR AL NUMERO MAS CERCANO
console.log(Math.round(num1))

//OBTENER EL MAXIMO
console.log(Math.max(45, 17, 0.2, 45.001))

//OBTENER EL MINIMO
console.log(Math.min(45, 17, 0.2, 45.001))

//ELEVAR POTENCIA 
const base = parseInt("4");
const exponente = 2;
console.log(Math.pow(base ,exponente))

//OBTENER RAIZ CUADRADA
console.log(Math.sqrt(num2))

//OBTENER UN NUMERO CON DOS DECIMALES

console.log(Math.round(num3 * 100)/ 100)
console.log(Number((Math.fround(num3).toFixed(1))))
