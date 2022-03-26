//primer ejercicio
const meses = [ "enero", "febrero" , "marzo" , "abril" , "mayo" , "junio" , "julio" , "agosto", "septiembre" , "octubre" , "noviembre" , "diciembre" ]



const imprimirArreglo = (arreglo) => {
  for (let i = 0; i < arreglo.length; i++) {
    document.write(`${arreglo[i]} <br>`)
  }
}

imprimirArreglo(meses)

