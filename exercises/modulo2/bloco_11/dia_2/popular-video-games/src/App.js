import './App.css';
import VideoGameList from './VideoGameList';
import Footer from './Footer';
import data from './data';

function App() {
  return (
    <div className="App">
      <VideoGameList data={data} />
      <Footer text={'Made in live class. 🚀'}/>
    </div>
  );
}

export default App;
