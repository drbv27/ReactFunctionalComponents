import { Component, useState } from "react";

//reglas de  los hooks
//los hooks no se llaman en ciclos ni condicionales....se deben llamar al ppio
//y idealmente deben estar en el nivel mas alto de la funcion
//solo se llaman en 2 partes:
//Componentes de React
//custom hooks
// Cuando creemos un custom hook, este tiene que comenzar con use****

/** Comparemos con clases**/
class App extends Component {
  state = { contador: 0 };
  incrementar = () => {
    this.setState({ contador: this.state.contador + 1 });
  };
  render() {
    return (
      <div>
        contador:{this.state.contador}
        <button onClick={this.incrementar}>Incrementar</button>
      </div>
    );
  }
}
/* const App = () => {
  const [contador, setContador] = useState(0);
  return (
    <div>
      Contador:{contador}
      <button onClick={() => setContador(contador + 1)}>Incrementar</button>
    </div>
  );
}; */

export default App;
