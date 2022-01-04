import { useState, useEffect } from "react";

const useContador = (inicial) => {
  const [contador, setContador] = useState(inicial);
  const incrementar = () => {
    setContador(contador + 1);
  };
  return [contador, incrementar];
};
const Interval = ({ contador }) => {
  useEffect(() => {
    const i = setInterval(() => console.log(contador), 1000);
    return () => clearInterval(i);
  }, [contador]);
  return <p>Intervalo</p>;
};
const App = () => {
  const [contador, incrementar] = useContador(0);
  useEffect(() => {
    document.title = contador;
    /* console.log("soy un efecto"); */
  }, [contador]);

  return (
    <div>
      Contador:{contador}
      <button onClick={incrementar}>Incrementar</button>
      <Interval contador={contador} />
    </div>
  );
};

export default App;
