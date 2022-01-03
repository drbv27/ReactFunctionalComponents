/* function App(){} */
const MiComponente = ({ miProp }) => {
  /* const { miProp } = props; */
  return <div>Nombre: {miProp}</div>;
};
const App = () => {
  return <MiComponente miProp={"Orion Enojado"} />;
};

export default App;
