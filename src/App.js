import './App.css';
import CompoCardPlayer from './Components/CompoCardPlayer.jsx';
import players from './Data.js';

function App() {
  return (
    <div className="App">
      <CompoCardPlayer data={players} />

    </div>
  );
}

export default App;
