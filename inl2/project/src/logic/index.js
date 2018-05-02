// ---------- A tictactoe gaming library! ------------

/*
A game is an object with...
- state: a string describing the current state:
  - 'plr1': It is player 1's turn to play
  - 'plr2': It is player 2's turn to play
  - 'plr1won': Game over, the first player won
  - 'plr2won': Game over, the second player won
  - 'draw': Game over, nobody won
- board: An array of 9 numbers, each of which are either:
  - 0: An empty square
  - 1: Player 1 has a marker here
  - 2: Player 2 has a marker here
- line: an array of all positions involved in the win, otherwise empty array (STRETCH TASK)

The board array goes from top left to bottom right. For example, the array
[0,1,2,1,2,0,1,0,2] represents this board:

  .---.---.---.
  |   | 1 | 2 |
  |---+---+---|
  | 1 | 2 |   |
  |---+---+---|
  | 1 |   | 2 |
  '---'---'---'
*/

/*
The newGame function will return a valid new game object.
*/
export const newGame = () => ({
  state: 'plr1',
  board: [0,0,0,0,0,0,0,0,0],
  line: []
});

/*
The makeMove function should be called with...
- game: A valid game object
- pos: A number 0-8 corresponding to where we want to play

It will return a new game object. If the move was invalid
(because the position was already taken or the game is over),
an unchanged game will be returned.
*/

function gameAlreadyWon(status){
  if(status === 'plr1WON' || status === 'plr2WON'){
    return true
  }
  return null;
}

function calculateDraw(board){
  for(let i; i < board.length; i++){
    if (board[i] === 0){
      
      // game continues
      return false;
    }
    // game is a draw
    return true;
  }
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
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return true;
    }
  }
  return null;
}

export const makeMove = (game, pos) => {
  let player = game.state;
  let newBoard = [...game.board];
  
  //tile is already taken
  if(newBoard[pos] === 1 || newBoard[pos] === 2){
    return game;
  }
  if(player === 'plr1WON' || player === 'plr2WON'){
    return game;
  }

  if (player === 'plr1'){
    newBoard.splice(pos, 1, 1);
    if(calculateWinner(newBoard)){
      return {state: 'plr1WON', board: newBoard, line:[]};
    }
    if(!newBoard.includes(0)){
      return {state: 'draw', board: newBoard, line:[]};
    }
    return {state: 'plr2', board: newBoard, line:[]}
  }


  if (player === 'plr2'){
    newBoard.splice(pos, 1, 2)
    if(calculateWinner(newBoard)){
      return {state: 'plr2WON', board: newBoard, line:[]};
    }
    if(!newBoard.includes(0)){
      return {state: 'draw', board: newBoard, line:[]};
    }
    return {state: 'plr1', board: newBoard, line:[]};
  }

}