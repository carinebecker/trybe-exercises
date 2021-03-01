import './App.css';

import data from './data';
import Pokedex from './Pokedex';

function App() {
  return (
    <div>
      <h1>Pokedex</h1>
      <Pokedex data={data} />
    </div>
  );
}

export default App;
