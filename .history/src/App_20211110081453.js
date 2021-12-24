import './App.css'
import ChessBoard from 'chessboardjsx';
import { useState, useEffect, useRef } from 'react'
import { Chess } from 'chess.js';


function App() {
const [fen, setFen] = useState('start')
let game = useRef(null)

useEffect(() => {
  game.current = new Chess()
})
  
  return (
    <div className="App">
      <ChessBoard position = {fen}/>
    </div>
  );
}

export default App;
