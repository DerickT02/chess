import './App.css'
import Chessboard from '@chrisoakman/chessboardjs'


function App() {

  let board = Chessboard('myBoard', 'start')
  return (
    <div className="App">
      <div className = 'myBoard' style = {{width: '500px'}}></div>
    </div>
  );
}

export default App;
