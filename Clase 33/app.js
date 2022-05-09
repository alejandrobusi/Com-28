// const promise = new Promise(( resolve, reject ) => {
  
//   setTimeout(() => {
//     reject ("promesa Resuelta")
//   }, 4000);
// })

// promise.then((response) => {console.log(response)})
// promise.catch((err) => {console.log(err)})

// const alumnos = [
//   {
//     id: 1,
//     nombre: "Maciel"
//   },
//   {
//     id: 2,
//     nombre: "Ale"
//   },
//   {
//     id: 3,
//     nombre: "Gaston"
//   },
//   {
//     id: 4,
//     nombre: "Jose"
//   },
//   {
//     id: 5,
//     nombre: "Marcos Ramos"
//   }
// ]

// const buscarAlumnos = (id) => {

//   return new Promise(( resolve, reject ) => {
  
//     setTimeout(() => {
//       const filterId = alumnos.find((alumno) => alumno.id == id )
//       if (filterId) {
//         resolve(filterId)
//       } else {
//         reject("No se encontraron coincidencias!")
//       }
//     }, 4000);
//   })
// }

// buscarAlumnos(2)
// .then((resp) => console.log(resp))
// .catch((err) => console.warn(err))
let result = null;
fetch('https://jsonplaceholder.typicode.com/posts',{
  method: 'POST',
  body: JSON.stringify({
    title: 'foo',
    body: 'bar',
    userId: 1
  }),
  header: {
    'Content-type': 'application/json; charset=UTF-8',
  }
})
.then((response) => response.json())
.then((response) => {
  const h1 = document.createElement('h1')
  h1.innerHTML = response.id
  document.body.append(h1)
})

console.log(result)