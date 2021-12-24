import './App.css'
import { Chessboard } from 'react-chessboard';
import { useState, useEffect, useRef } from 'react'
import * as Chess from 'chess.js'


function App() {
const [game, setGame] = useState()

  
  return (
    <div className="App">
      <Chessboard position = 'rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR'/>
    </div>
  );
}


export default App;
