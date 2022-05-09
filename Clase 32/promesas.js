
// const promesa = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     //reject("No se resolvio la promesa")
//     resolve("se resolvio la promesa")
//   }, 2000);
// })

// promesa.then((response) => {console.log(response)})
// promesa.catch((error) => {console.warn(error)})


const motos = [
  {
    id: 1,
    marca: "Acme"
  },
  {
    id: 2,
    marca: "KTM"
  },
  {
    id: 3,
    marca: "Yamaha"
  },
  {
    id: 4,
    marca: "Honda"
  }
]


const buscarMoto = (id) => {

  return new Promise((resolve, reject) => {
    console.log("Esperando")
    setTimeout(() => {
      const buscarMotoId = motos.find((moto) => moto.id == id)
      if (buscarMotoId) {
        resolve(buscarMotoId)
      } else {
        reject("No se encontro el id")
      }
    }, 2000);
  })
}

buscarMoto(2)
.then((resp) => {console.log(resp)})
.catch((error) => console.warn(error))

