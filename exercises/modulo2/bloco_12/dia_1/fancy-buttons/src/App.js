import './App.css';

function handleClickOne() {
  console.log('Ummm')
}
function handleClickTwo() {
  console.log('Doissss')
}
function handleClickThree() {
  console.log('Trêeeesss')
}

function App() {
  return (
    <div className="App">
      <button onClick={handleClickOne}>Botão 1</button>
      <button onClick={handleClickTwo}>Botão 2</button>
      <button onClick={handleClickThree}>Botão 3</button>
    </div>
  );
}

export default App;
