import React from 'react'
/* Provided functions. Should not need to modify */
function calculateNextValue(squares) {
  return squares.filter(Boolean).length % 2 === 0 ? 'X' : 'O'
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i]
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a]
    }
  }
  return null
}

function calculateStatus(winner, squares, nextValue) {
  return winner
    ? `Winner: ${winner}`
    : squares.every(Boolean)
    ? `Scratch: Cat's game`
    : `Next player: ${nextValue}`
}
/* */

function App() {
  // state
  const squares = Array(9).fill(null) // Convert to React state
  
  // derived state
  let winner; // TODO
  let nextValue; // TODO
  let status; // TODO

  function selectSquare(square) {
    // Update state
  }

  function restart() {
      // Reset state
  }

  function renderSquare(i) {
    return (
      <button style={{minHeight: '30px', minWidth: '30px'}} onClick={() => selectSquare(i)}>
        {squares[i]}
      </button>
    )
  }
  return (
    <div>
      <div>{status}</div>
      <div>
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div>
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div>
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
      <button onClick={restart}>
        restart
      </button>
    </div>
  )
}
export default App