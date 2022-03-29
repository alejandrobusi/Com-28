// //AGREGAR PROPIEDAD AL OBJETO
// auto.papeles = true;
// //EDITAR PROPIEDAD DEL OBJETO
// auto.papeles = false;
// //ELIMINAR PROPIEDAD
// delete auto.año;

// console.log(auto);
// var products = [
//   { id: 1, name: "Leche", price: 120, categories: ["familiar", "comida"] },
//   { id: 2, name: "Arroz", price: 80, categories: ["familiar", "comida"] },
//   { id: 3, name: "Lavadora", price: 7800, categories: ["electrodomésticos"] }
// ];

// for (let i=0; i < products.length; i++) {
//   let product = products[i];
//   console.log(product.name);
//   console.log("  Id: " + product.id);
//   console.log("  Precio: " + product.price);
//   console.log("  Categorías: " + product.categories.join(", "));
// }
//**********************************//
// Crear objeto usando con notacion literal
let auto = {
	color: ["rojo", "negro", "azul"],
	marca: "fiat",
	modelo: "bravo",
	año: 2008,
	potencia: "130bhp"
};

//Creando objeto con la funcion constructora

function Auto(colorAuto, marcaAuto, modeloAuto, añoAuto){
	this.color = colorAuto;
	this.marca = marcaAuto;
	this.modelo = modeloAuto;
	this.año = añoAuto;
}

let chevrolet = new Auto(["azul", "rojo"], "Chevrolet", "Corsa", 2010)
console.log(chevrolet)

// let fiat = new Auto(["negro", "morado"], "fiat", "siena", 2004)
// let autos = []
// console.log(fiat)

//El constructor Object()
let gaston = new Object();
gaston.name = "Gaston";
gaston.lastName = "Avila";
//console.log(gaston);


// Creando objeto con Object.create()

var auto2 = Object.create(auto);
auto2.color = "rojo"
auto2.marca = "peugeot"
auto2.modelo = "504"
auto2.año = 1993
console.log(auto2) 


const ejercicio9 = () => {

  let ingreso = prompt("ingresa una frace").toLowerCase()
  let nuevoTexto = "";
  for (let i = 0; i < ingreso.length; i++) {
    
    if (ingreso[i] === "a" || ingreso[i] === "e" || ingreso[i] === "i" || ingreso[i] === "o" || ingreso[i] === "u" ) {
      nuevoTexto = nuevoTexto + ingreso[i]
    }
    
  }

  console.log(nuevoTexto)

}
ejercicio9()

