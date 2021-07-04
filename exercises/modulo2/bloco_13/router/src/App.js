import './App.css';
import { BrowserRouter } from 'react-router-dom';
import TrybePage from './TrybePage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <TrybePage />
      </BrowserRouter>
    </div>
  );
}

export default App;
