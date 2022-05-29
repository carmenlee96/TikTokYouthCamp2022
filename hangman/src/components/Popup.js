import React, { useEffect } from 'react';
import { checkWin } from '../helpers/helpers';

const Popup = ({correct, wrong, word, set, replay}) => {
  let message = '';
  let revealWord = '';
  let playable = true;

  if( checkWin(correct, wrong, word) === 'win' ) {
    message = 'You won!!';
    playable = false;
  } else if( checkWin(correct, wrong, word) === 'lose' ) {
    message = 'Game over';
    revealWord = `the word was ${word}`;
    playable = false;
  }

  useEffect(() => {
    set(playable);
  });

  return (
    <div className="popup-container" style={message !== '' ? {display:'flex'} : {}}>
      <div className="popup">
        <h2>{message}</h2>
        <h3>{revealWord}</h3>
        <button onClick={replay}>Play Again</button>
      </div>
    </div>
  )
}

export default Popup
