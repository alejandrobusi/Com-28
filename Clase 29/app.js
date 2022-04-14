////////BOM
// const statusCode = 400;

// if (statusCode == 200) {
//   if ( window.location.protocol == "http:") {
//     window.alert("este sitio no es seguro")
//     window.location.href = "https://www.google.com.ar"
//   }

// } else {
//   window.alert("La pagina que buscas esta en mantenimiento")
// }

// const bucle = setInterval(() => {
//   console.log("Hola soy el setInterval")
// }, 1000);

// const stopBucle = () => {
//   clearInterval(bucle)
// console.log("el bucle ha muerto")
// }

// setTimeout(() => {
//   stopBucle()
 
// }, 5000);

//////DOM 
//accediendo por ID
// console.log(document.getElementById("cabecera1"))
// //accediendo por tag
// console.log(document.getElementsByTagName("h2"))
// //accediendo por clases
// console.log(document.getElementsByClassName("cabecera3"))

// ///////////////////Creando nodos
// //Creando elemento
// let titulo = document.createElement("p")
// //añadiendo contenido al elemento
// titulo.innerHTML = "Soy un parrafo"
// //añadir al dom
// document.querySelector("#container").appendChild(titulo)
// ////Clonar nodos

// document.body.appendChild(titulo.cloneNode(true))

// //

// document.body.insertBefore(document.createTextNode('boo!'), 
//   document.body.firstChild
// )
// let h1 = document.getElementById("cabecera1")

// let remove = document.body.removeChild(h1)

// let remplaced = document.body.replaceChild(remove,titulo)

