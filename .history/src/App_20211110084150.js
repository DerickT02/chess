import './App.css'
import { Chessboard } from 'react-chessboard';
import { useState, useEffect, useRef } from 'react'
import * as Chess from 'chess.js'


function App() {
  const [game, setGame] = useState(new Chess());

  function safeGameMutate(modify) {
    setGame((g) => {
      const update = { ...g };
      modify(update);
      return update;
    });
  }



function onDrop(sourceSquare, targetSquare) {
  let move = null;
  safeGameMutate((game) => {
    move = game.move({
      from: sourceSquare,
      to: targetSquare,
      promotion: 'q' // always promote to a queen for example simplicity
    });
  });
  if (move === null) return false; // illegal move
  
  return true;
}
  
  return (
    <div className="App">
      <Chessboard position = {fen} onPieceDrop = {onDrop}/>
    </div>
  );
}


export default App;
