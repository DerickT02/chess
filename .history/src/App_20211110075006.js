import './App.css'
import Chessboard from 'chessboardjsx';


function App() {

  
  return (
    <div className="App">
      <Chessboard draggable = {true} position = "start" />
    </div>
  );
}

export default App;
