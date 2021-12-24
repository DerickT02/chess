import './App.css'


function App() {

  let board = Chessboard('myBoard', 'start')
  return (
    <div className="App">
      <div className = 'myBoard' style = {{width: '500px'}}></div>
    </div>
  );
}

export default App;
