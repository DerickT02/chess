import './App.css'
import { Chessboard } from 'react-chessboard';
import { useState, useEffect, useRef } from 'react'
import * as Chess from 'chess.js'


function App() {
const [game, setGame] = useState('start')
let game = useRef(null)



useEffect(() => {
  game.current = new Chess()
},[])

const onDrop = ({fromSquare, targetSquare}) => {
  let move = game.current.move({from: fromSquare, to: targetSquare})
  console.log(move)
}

  
  return (
    <div className="App">
      <Chessboard position = 'start' onPieceDrop = {onDrop}/>
    </div>
  );
}


export default App;
