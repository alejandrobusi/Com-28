// hola mi nombre es franco, un gusto.
// let saludo = "hola ";
// let presentacion = saludo + "mi nombre es franco";
///presentacion = presentacion + ", un gusto";

let presentacion = "hoLa mi NOMBRE es franco, uN gusto.";
console.log(presentacion.length);

//CONVERTIR EN MAYUSCULAS
console.log(presentacion.toUpperCase());
//CONVERTIR EN minusculas
console.log(presentacion.toLowerCase());

let apellido = "Guijarro";
let nombre = "Franco";
console.log("apellido.length: " + apellido.length);
// Franco Casas
// Template string
//          Franco     Casas
console.log(nombre + " " + apellido);
console.log(`${nombre} ${apellido}`);

let nombreProd = "Coca Cola";
let precioProd = 15;
let unidadesDispo = 1;
// console.log("Disponible: " + unidadesDispo);
// console.log(`Disponible: ${unidadesDispo}`);
console.log(nombreProd + " $" + precioProd + " Disponible: " + unidadesDispo);
console.log(`${nombreProd} $${precioProd} Disponible: ${unidadesDispo}`);

// Obtener ultimo caracter de un string (cadena de texto)
console.log(apellido);

let ultimaPosicionApellido = apellido.length - 1; // 16
let ultimoCaracterApellido = apellido.charAt(ultimaPosicionApellido);
console.log(`La ultima letra del apellido es: ${ultimoCaracterApellido}`);
// console.log(`ultimo caracter: ${apellido.charAt(apellido.length - 1)}`);

//Ejemplo
// El usuario ingresa por pantalla su apellido
// Simpre la primera letra de su apellido debera ser mayusculas
// Mostrar una alerta con el apellido

let apellidoIngresado = prompt("Ingrese su apellido");
let primeraLetra = apellidoIngresado.charAt(0);
let letraMayuscula = primeraLetra.toUpperCase();
//casas
//C

//Casas
// let aux = apellidoIngresado.substring(1, 17);
// let aux = apellidoIngresado.substring(1, apellidoIngresado.length);
let restoDeApellido = apellidoIngresado.substring(1);
const apellidoConPrimeraLetraMayusculas = letraMayuscula + restoDeApellido;

console.log(
  `Apellido ingresado: ${apellidoIngresado} --> apellido transformado: ${apellidoConPrimeraLetraMayusculas}`
);

alert(apellidoConPrimeraLetraMayusculas);
