// const opciones = {
//   method: 'GET'
// }
// let cardContainer = document.getElementById('contenedor')

// fetch('https://rickandmortyapi.com/api/character',opciones)
// .then((response) => response.json())
// .then(response => {
//   console.log(response.results)
//   response.results.map((personaje => {
//     const card = document.createElement('div')
//     const contenido = `<img src=${personaje.image} class="card-img-top" alt="...">
//       <div class="card-body">
//         <h5 class="card-title">${personaje.name}</h5>
//       </div>`
//     card.className = 'card mt-5 mx-4 col-2 g-0'
//     card.innerHTML = contenido
//     cardContainer.appendChild(card)
//   }))
// })

function obtener(){
  fetch('http://localhost:3000/posts/')
  .then(response => response.json())
  .then(response => {
    console.log(response[response.length -1])
  })
}

function postear(){
  fetch('http://localhost:3000/posts/', {
    method: 'POST',
    body: JSON.stringify({
      title: "Post by Json-Server",
      author: "Ale Busi",
      colorFavorito: "rojo"
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    }
  })
  .then(response => response.json())
  .then(response => console.log(response))
}

function eliminar(){
  fetch('http://localhost:3000/posts/1', {
    method: 'DELETE'
  })
}

function actualizar(){
  fetch(`http://localhost:3000/posts/3`,{
    method: 'PUT',
    body: JSON.stringify({
      title: "Modificado con PUT, no olvidar los headers",
      author: "by Ale"
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    }
  })
}

function modificar(){
  fetch('http://localhost:3000/posts/5', {
    method: 'PATCH',
    body: JSON.stringify({
      title: "Editado con PATCH",
      author: "By Maciel"
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    }
  })
}