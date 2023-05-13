import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput/GuessInput';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const addGuess = guess => {
    setGuesses([...guesses, guess]);
  };

  return (
    <>
      <div>Put a game here!</div>
      <GuessInput addGuess={addGuess} />
    </>
  );
}

export default Game;
