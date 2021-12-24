import './App.css'
import { Chessboard } from 'react-chessboard';
import { useState, useEffect, useRef } from 'react'
import * as Chess from 'chess.js'


function App() {
const [game, setGame] = useState()

  
  return (
    <div className="App">
      <Chessboard/>
    </div>
  );
}


export default App;
