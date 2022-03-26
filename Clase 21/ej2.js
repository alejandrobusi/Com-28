let ej2 = () => {
  let ciudades = [];
  let input = "";

  do {
    //asignamos valor a input
    input = prompt("ingresa cuidad");
    //verificamos si el valor de input es igual a null, de lo contrario, pusheamos input al ciudadesay.
    input == null? console.log(ciudades) : ciudades.push(input);
    
    console.log(ciudades)
  } while (input !== null);
  document.write(`El largo del array de ciudad es ${ciudades.length}. <br>`);
  document.write(`La primer posición es ${ciudades[0]}.<br>`);
  document.write(`La tercera posición es ${ciudades[2]}.<br>`);
  document.write(`La ultima posición es ${ciudades[ciudades.length - 1]}.<br>`);
  ciudades.push("Paris");
  document.write(`La segunda posición es ${ciudades[1]}.<br>`);
  ciudades.splice( 1, 1, "barcelona");
  document.write(`El array es el siguiente ${ciudades.join(" - ")}`)
}

ej2()