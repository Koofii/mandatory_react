/*
The Message component expects to be passed...
- state: a game state string (plr1,plr2,plr1won,plr2won,draw)

The component will then render an appropriate message.
*/

import React from 'react';

export default function Message(props){

  if (props.whatState === 'draw'){
    return <div>The game is a draw</div>
  }
  if(props.whatState === 'plr1WON' || props.whatState === 'plr2WON'){
    return <div>{props.whatState} has won!</div>
  }
  return <div>It's {props.whatState}'s turn</div>
}
