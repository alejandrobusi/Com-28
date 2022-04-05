let auto = {
  color: ["rojo", "negro"],
  marca: "fiat",
  modelo: "bravo",
  año: 2008,
  potencia: "130bhp",
};

//agregar propiedades
auto.puertas = 5;
//Editar propiedades
//auto.color = "Negro"
//Eliminar propiedad
//delete auto.año

/////////ARRAYS DE OBJETOS

let products = [
  { id: 1, name: "Leche", price: 120, categories: ["familiar", "comida"] },
  { id: 2, name: "Arroz", price: 80, categories: ["familiar", "comida"] },
  { id: 3, name: "Lavadora", price: 7800, categories: ["electrodomésticos"] },
];


let arrayNuevo = products.map((producto) => {
  console.log(producto.name)
})

console.log("//////////////////////")
for (let i = 0; i < products.length; i++) {
  console.log(products[i].name)
  
}
console.log("//////////////////////")
products.forEach((producto) => {
  console.log(producto.name)
})

function Persona (name, lastName, age){
  this.nombre = name;
  this.apellido = lastName;
  this.edad = age;
};

let persona1 = new Persona("Gaston", "Avila" , 19);
let persona2 = new Persona("Ale", "Vexler" , 25);

/* 
console.log(persona1);
console.log(persona2);


let car = new Object();
car.marca = "fiat"

let car2 = Object.create(car)

// variable de referencia del objeto persona1
var personaA = {nombre: "Juan"};

// variable de referencia del objeto persona2
var personaB = {nombre: "Juan"};

personaA == personaB // retorna false
if (personaA === personaB) {
  console.log("true")
}else {
  console.log("False")
}




// variable de referencia del objeto persona1
var personaA = {nombre: "Juliana"};

// variable de referencia del objeto persona2
var personaB = personaA; // asignamos la referencia del objeto persona a la variable de referencia del objeto persona2
if (personaA === personaB) {
  console.log("true")
}else {
  console.log("False")
}
 */

////

function Persona2(nombre, apellido, edad){
	this.nombre = nombre;
	this.apellido = apellido;
	this.edad = edad;
      this.comer = function(){
        alert('Comiendo…')
      };
}
let personita = new Persona2("ale", "busi", 28);


/// Con es6 (ecma)

class Persona3 {
  constructor(name, lastName, age = 23){
    this.nombre = name;
    this.apellido = lastName;
    this.edad = age;
  }
  
  comer(name = "un amigo." ){
    this.nombre = "Jose"
    //alert(`Soy ${this.nombre} y estoy comiendo con ${name.toUpperCase()}`)
  }
}

let people = new Persona3("Maciel", "Castro", 32);

console.log(people)
people.comer()
console.log(people)

///Getter y Setter

class Rectangle {
  constructor ( height = 0, width = 0 ) {
    this._height = height;
    this._width = width;
  }
  
  static saludar (valor) {
    alert(`Hola soy ${valor}`)
  }

  set changeHeight( value ) {
    this._height = value;
  }

  set changeWidth ( value = 0 ) {
    this._width = value;
  }

  get area() {
    return this._height * this._width;
  }
}

let rectangulo = new Rectangle(10, 10);

///Setear con Setter
rectangulo.changeHeight = 120
rectangulo.changeWidth = 1

console.log(rectangulo)
///Obtener con getter
console.log(rectangulo.area)
/// metodos estaticos

Rectangle.saludar("Bob Esponja")











