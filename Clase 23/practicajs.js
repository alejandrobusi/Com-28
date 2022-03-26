const opciones = ["Piedra", "papel" , "Tijera" ];
let jugador = null;
let bot = null;

function playGame() {
  aleatorio();
  seleccionDelUsuario();
}

playGame();


function aleatorio () {

  return (bot = Math.round(Math.random() * 2));
}

function seleccionDelUsuario () {

  jugador = parseInt(prompt("ingresa un valor del 0 al 2, piedra = 0, papel = 1 y tijera = 2."));

  if (!isNaN(jugador)) {
    if ( jugador >= 0 && jugador <= 2 ) {
      switch (true) {
        case jugador === bot:
          alert("EMPATE");
          break;

        case (jugador === 0 && bot === 2):
          alert("GANASTE");
          break;
          
        case (jugador === 1 && bot === 0):
          alert("GANASTE");
          break;
    
        case (jugador === 2 && bot === 1):
          alert("GANASTE");
          break;
    
        default:
          alert("A LA CASA PAPI");
          break;
        }
      } else {
      alert("Solo puedes ingresar un numero del 0 al 2.")
    }
  } else {
    alert("Solo puedes ingresar NUMEROSSSS Wachin")
  }
}
document.write(`<h1>El bot elije: ${opciones[bot]} </h1> <br> <h1>El usuario elije: ${opciones[jugador]}</h1>`)


