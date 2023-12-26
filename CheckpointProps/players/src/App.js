import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import PlayerList from './PlayerList';

function App() {
  return (
    <>
    <h1 style={{display: "flex", flexWrap: "wrap", justifyContent: "center", background:"purple"}}>Playerlist</h1>
    <PlayerList/>
    </>
  );
}

export default App;
