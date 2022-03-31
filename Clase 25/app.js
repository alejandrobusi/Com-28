// //Funcion constructora
// function Cars (color, marca, modelo){
//   this.color = color;
//   this.marca = marca;
//   this.modelo = modelo;
// }

// let auto = new Cars (["rojo", "negro"], "Fiat", 2019)

// console.log(auto)
// //Objeto constructor

// let auto2 = new Object();
// auto2.color = "amarillo"
// auto2.marca = "Chevrolet"
// console.log(auto2)

// //Object.Create

// let auto3 = Object.create(auto)
// auto3.color = "amarillo"
// auto3.marca = "Chevrolet"
// console.log(auto3)

// //COMPARACION DE OBJETOS

// let persona1 = {nombre : "Gaston"};
// let persona2 = {nombre : "Gaston"};

// if (persona1.nombre == persona2.nombre) {
//   alert("son iguales")
// } else {
//   alert("son diferentes")
// }

// let personaA1 = {nombre : "Gaston"}
// let personaB2 = personaA1

// if (persona1 == persona2) {
//   alert("son iguales")
// } else {
//   alert("son diferentes")
// } 

//CLASES,Antes de es6

// function Persona(nombre, apellido, edad){
// 	this.nombre = nombre;
// 	this.apellido = apellido;
// 	this.edad = edad;
//       this.comer = function(){
//         alert(`Hola soy ${this.nombre}, y estoy comiendo...`);
//       }
// }

let nombre = "Gaston";
let apellido = "Avila";
let edad = 22;

// let personita = new Persona(nombre, apellido, edad);

// console.log(personita)
// personita.comer()

//CLASES, CON de es6

class PersonaNueva {
  constructor(nombre, apellido, edad){
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
  }
  
  comer(){
    
    alert(`Hola soy ${this.nombre}, y estoy comiendo...`);
    this.nombre =  prompt("Ingresa un nuevo nombre")
    alert(`Hola ahora soy ${this.nombre}, y estoy comiendo...`);

  }
  volar(name){
    alert(`Hola soy ${name}, y estoy VOLANDOOO...`);
  }

}

let persona4 = new PersonaNueva(nombre, apellido, edad)
let persona5 = new PersonaNueva("Marcos", "Ramos", 35)
console.log(persona4)
persona4.comer()
// persona4.volar("Ale")
console.log(persona4)
persona5.altura = 1.7
delete persona5.nombre
console.log(persona5)