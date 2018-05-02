import {makeMove, newGame} from '../src/logic';

test('first move works ok', () => {
  const initial = newGame();
  const expected = { state: 'plr2', board: [0,0,1,0,0,0,0,0,0], line: [] };
  const result = makeMove(initial, 2);
  expect(result).toEqual(expected);
  expect(initial).toEqual(newGame()); // testing we didn't mutate entry state
});

test('second move works ok', () => {
  const initial = newGame();
  const lastMove = { state: 'plr2', board: [0,0,1,0,0,0,0,0,0], line: []};
  const expected = { state: 'plr1', board: [0,2,1,0,0,0,0,0,0], line: []};
  const result = makeMove(lastMove, 1);
  expect(result).toEqual(expected);
  expect(initial).toEqual(newGame());
});
// IF SOMEONE ALREADY HAS MOVED TO THIS TILE
test('Should return same object if tile already been taken', () => {
  const lastMove = { state: 'plr1', board: [0,2,1,0,0,0,0,0,0], line: []};
  const expected = { state: 'plr1', board: [0,2,1,0,0,0,0,0,0], line: []};
  const result = makeMove(lastMove, 2);
  expect(result).toEqual(lastMove);
});

// IF PLR1 HAS WON
test('should return same object if won', () => {
  const move = { state: 'plr1', board: [1,1,0,0,0,0,0,0,0], line: []};
  const expected = { state: 'plr1WON', board: [1,1,1,0,0,0,0,0,0], line: []};
  const result = makeMove(move, 2);
  expect(result).toEqual(expected);
});


// IF SOMEONE HAS WON YOU SHOULD NOT BE ABLE TO PLAY MORE

test('Should return the object as passed in when trying to play when game is won', () => {
  const move = { state: 'plr1WON', board: [1,1,1,0,0,0,0,0,0], line: []};
  const expected = {state: 'plr1WON', board: [1,1,1,0,0,0,0,0,0], line: []};
  
  expect(makeMove(move, 3)).toEqual(expected);

});


// IF THE GAME IS A DRAW

test('should return object of draw ', () => {
  const move = {state: 'plr1', board: [0,2,1,2,1,1,2,1,2], line: []}
  const expected = {state: 'draw', board: [1,2,1,2,1,1,2,1,2], line: []}
  expect(makeMove(move, 0)).toEqual(expected);
})