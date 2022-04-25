class Movies {
  constructor(){
    this.movies = JSON.parse(localStorage.getItem("Peliculas")) || [];
  }
  addMovie(nombrePeli, descPeli){
    const movie = {
      nombre: nombrePeli.value,
      puntaje: descPeli.value
    }
    this.movies.push(movie)
    localStorage.setItem("Peliculas", JSON.stringify(this.movies))
  }
  getMovies(){
    if(localStorage.getItem("Peliculas")) {
      const pelisLocal = JSON.parse(localStorage.getItem("Peliculas"))
    
      pelisLocal.map((peli) => {
        console.group("Item")
        console.log(`Nombre: ${peli.nombre}.`)
        console.log(`Puntaje: ${peli.puntaje}.`)
        console.groupEnd()
      })
    } else {
      alert("No hay peliculas en el localStorage.")
    }
  }
  deleteMovies(){
    const warning = confirm("Estas seguro que quieres eliminar? no se podra recuperar.")
    if (warning) {
      localStorage.clear()
    } 
  }

}

const peliculas = new Movies();
