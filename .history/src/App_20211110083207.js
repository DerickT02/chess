import './App.css'
import { Chessboard } from 'react-chessboard';
import { useState, useEffect, useRef } from 'react'
import * as Chess from 'chess.js'


function App() {
const [game, setGame] = useState(new Chess())

  
  return (
    <div className="App">
      <Chessboard position = 'start'/>
    </div>
  );
}


export default App;
