// class Rectangle {
//   constructor( alto = 0, ancho = 0 ){
//     this.alto = alto;
//     this.ancho = ancho;
//   }

//   set setAltura (x) {
//     this.alto = x;
//   }
//   set setAncho (y) {
//     this.ancho = y;
//   }
//   get getArea () {
//     return this.alto * this.ancho;
//   }
// }

// const rectangulo = new Rectangle(10, 20)

// rectangulo.setAltura = 30;
// rectangulo.setAncho = 50;

// console.log(rectangulo.getArea)

///Bom (Window)

//console.log(window.location)


// if (window.location.protocol == "http:") {
//   alert("estas usando un protocolo no seguro")
// }else {
//   alert("estas usando un protocolo Seguro")
// }


// const statusCode = 400

// if (statusCode == 200) {
  
// } else {
//   window.location.href = "https://www.google.com.ar"
// }

//EVENTOS DE TIEMPO

// const IntervalFunction = setInterval(() => {console.log("Estoy repitiendome")}, 1000);


// const pararTiempo =() => {

//   clearInterval(IntervalFunction)
//   console.log("aqui se detiene mi setInterval()")

// }

// setTimeout(() => {
//   clearInterval(IntervalFunction)

//   alert("te queda poco tiempo de uso")
// }, 8000);

//
const titleCard = "Titulo harcodeado"
const PCard = " Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora rem velit mollitia temporibus fuga sapiente nihil ipsam dolorum esse fugit odit at assumenda adipisci nemo tenetur ex non, aperiam quibusdam!"
const imgCard = "https://picsum.photos/id/1/200/300"


document.body.innerHTML = `<div class="card" style="width: 18rem;">
<img src=${imgCard} class="card-img-top" alt="...">
<div class="card-body">
  <h5 class="card-title">${titleCard}</h5>
  <p class="card-text">${PCard}</p>
  <a href="#" class="btn btn-primary">Go somewhere</a>
</div>
</div>`;

//Primer paso : crear elemento.
const exampleDom = document.createElement('h1')
//Segundo paso : inyectar contenido a nuestro "elemento"
exampleDom.innerHTML = "Hola Mundo!"
//Tercer paso : añadirlo al DOM
document.body.appendChild(exampleDom)

console.log(exampleDom)
