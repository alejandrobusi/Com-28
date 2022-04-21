// function testEvent (ingreso, ingreso2){
//   let texto = document.getElementById("inputText").value
//   console.log(texto)
//   console.log(ingreso.value, ingreso2.value)
// }
// function modeloAvanzado (){
//   alert("Estamos usando el modelo de eventos avanzado")
// }

// let button = document.getElementById("buttonTest");
// button.addEventListener('click', modeloAvanzado,)

// setTimeout(() => {
//   button.removeEventListener('click', modeloAvanzado)
//   alert("Este boton ya no tiene evento")
// }, 3000);

var usuario = `{
  "id": "012345888",
  "username": "carlosrivera",
  "password": "fkldfn4r09330adafnanf9843fbcdkjdkks",
  "data": {
     "name": "Carlos Rivera",
     "email": "example@gmail.com",
     "city": "Tucumán",
     "country": "ARG"
   }
 }`;
// //Convertimos JSON a objeto
// const usuariosObj = JSON.parse(usuario)
// console.log("JSON convertido a objeto: ")
// console.log(usuariosObj)
// //Convertir objeto a JSON
// const usuarioJson = JSON.stringify(usuariosObj)
// console.log("Objeto convertido a JSON: ")
// console.log(usuarioJson)

// // LOCAL STORAGE!!

// // verificar si el objeto localStorage existe
// if(localStorage) {
//   // almacenar datos
//   localStorage.setItem("firstName", "Gaston");

// } else {
//   alert("Tu navegador no soporta local storage :(");
// }
const auto = {
  marca: "fiat",
  color: "rojo"
}
const autoSerializado = JSON.stringify(auto)
function setData(data, data2) {
  localStorage.setItem("email", data.value)
  localStorage.setItem("email2", autoSerializado)
}

function getData() {
  console.log(localStorage.getItem("email"))
  console.log(localStorage.getItem("email2"))
}

function deleteData() {
  localStorage.clear();
}

setTimeout(() => {
  localStorage.removeItem("email")
}, 5000);

setTimeout(() => {
  localStorage.removeItem("email2")
}, 7000);
