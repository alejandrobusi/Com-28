import Saludar from './Components/Saludar/Saludar';
import Adios from './Components/Adios/Adios';

function App() {
  const user = {
    name: "Lucho",
    lastName: "Busi",
    age: 28
  };

  function saludando(name = "hola"){
    alert(`Hola, soy ${name}`);
  };
  
  return (
  <>
    <Saludar user={user} saludo={saludando} />
    <Adios />
  </>
  );
}

export default App;
