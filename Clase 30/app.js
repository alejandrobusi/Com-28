// function testeando (){
//   alert("Jose Creeeek")
// };

// function guardando (email) {
//   console.log(email.value)
//   // if (email.value == "alejandrobusi@gmail.com") {
//   //   window.location.pathname = "/home.html"
//   // } else {
//   //   alert("Email incorrecto")
//   // }
// }

class Pesona {
  constructor(nombre, edad, dni, sexo, peso, altura, añoNacimiento) {
    this.nombre = nombre;
    this.edad = edad;
    this.dni = dni;
    this.sexo = sexo;
    this.peso = peso;
    this.altura = altura;
    this.añoNacimiento = añoNacimiento;
  }
  mostrarGen () {
    switch (true) {
      case ( this.añoNacimiento >= 1930 && this.añoNacimiento <= 1948 ):
        alert(`${this.nombre} pertenece a la generación "Silent" \n
        Su rasgo caracteristico es "AUSTERIDAD"`)
        break;
      case ( this.añoNacimiento >= 1949 && this.añoNacimiento <= 1968 ):
        alert(`${this.nombre} pertenece a la generación "Baby Boom" \n
        Su rasgo caracteristico es "Ambición"`)
        break;
      case ( this.añoNacimiento >= 1969 && this.añoNacimiento <= 1980 ):
        alert(`${this.nombre} pertenece a la generación "Gen X" \n
        Su rasgo caracteristico es "Obsesión por el éxito"`)
        break;
      case ( this.añoNacimiento >= 1981 && this.añoNacimiento <= 1993 ):
        alert(`${this.nombre} pertenece a la generación "Gen Y (Millenials)" \n
        Su rasgo caracteristico es "Frustración"`)
        break;
      case ( this.añoNacimiento >= 1994 && this.añoNacimiento <= 2010 ):
        alert(`${this.nombre} pertenece a la generación "Gen Z" \n
        Su rasgo caracteristico es "Irreverencia"`)
      break;

      default:
        alert("no perteneces a nada viejo")
        break;
    }
  }
  esMayor () {
    if (this.edad >= 18) {
      alert("Eres mayor de edad")
    } else {
      alert("No eres mayor de edad")
    }

  }
  mostrarDatos () {
    alert(`Datos personales: \n
    Nombre: ${this.nombre}.\n
    Edad: ${this.edad}.\n
    DNI: ${this.dni}.\n
    Sexo: ${this.sexo}.\n
    Peso: ${this.peso}.\n
    Altura: ${this.altura}.\n
    Año de Nacimiento: ${this.añoNacimiento}.`)
  }
  generarId () {
    this.dni = Math.round(Math.random() * 100000000);
  }

}

let persona1 = null;

const generarPersona = () => {

  let nombre = document.getElementById("nombre").value,
  edad = document.getElementById("edad").value,
  dni = document.getElementById("dni").value,
  sexo = document.getElementById("sexo").value,
  peso = document.getElementById("peso").value,
  altura = document.getElementById("altura").value,
  año = document.getElementById("año").value;
  
  persona1 = new Pesona(nombre, edad, dni, sexo, peso, altura, año);
  
}

const ejecutar = (method) => {
  
  persona1[method]();
  
}

