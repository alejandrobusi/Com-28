//FUNCION DECLARATIVA
saludar();
function saludar () {
  
  console.log( 25 + 25 );
  
};
;//FUNCION ANONIMA

const saludar2 = function () {
  
  console.log( 25 + 25 );
  
};


const saludo3 = function () {
  console.log("aqui comienza la ejecucion de mi funcion");
  let num1 = parseInt(prompt("ingresa un numero"));
  //if 
  if (!isNaN(num1)) {
    alert("true")
  } else {
    num1 = parseInt(prompt("ingresa solo numeros"));
  }
  //operador ternario
  !isNaN(num1)? num1 : num1 = parseInt(prompt("ingresa solo numeros"));

  let num2 = parseInt(prompt("Ingresa otro numero"));
  let res = num1 + num2;
  
  alert(`La suma es de ${num1} mas ${num2}, es igual a ${res}`);
  console.log("Aqui termina mi funcion")
};

//Arrow Function o Funcion Flecha

const suma = function() {
  console.log( 100 + 25 ); 
};

const suma2 = (num1, num2) => ( num1 + num2 ); 

const suma3 = function (){
  let valor = 100;
  return 50 + 50 + valor;
};

//let numeroa = parseInt(prompt("ingresa un numero"));
//let numerob = parseInt(prompt("ingresa otro numero"));

const suma4 = (a, b) => {



  console.log( a + b );




};



///SCOPE/////

//SCOPE GLOBAL una variable declarada fuera de cualquier funcion o bloque de codigo//

let persona = {
  nombre: "Max",
  apellido: "Lezano"
};

const getPeople = function () {
  console.log(persona.nombre);
  console.log(persona.apellido);
};

///SCOPE LOCAL
//una variable es local cuando esta definida dentro de una funcion.

const saludarAlumno = function (a) {
  let alumno = "Flavia";
  console.log(`Hola, soy ${a}`);
}
saludarAlumno(alumno)

//let alumno = "Marcelo";
const saludarAlumno2 = function () {
  console.log(`Hola, soy ${alumno}`);
}
