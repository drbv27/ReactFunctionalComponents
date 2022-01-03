import { useState } from "react";

//reglas de  los hooks
//los hooks no se llaman en ciclos ni condicionales....se deben llamar al ppio
//y idealmente deben estar en el nivel mas alto de la funcion
//solo se llaman en 2 partes:
//Componentes de React
//custom hooks
// Cuando creemos un custom hook, este tiene que comenzar con use****
const App = () => {
  const [contador, setContador] = useState(0);
  return (
    <div>
      Contador:{contador}
      <button onClick={() => setContador(contador + 1)}>Incrementar</button>
    </div>
  );
};

export default App;
