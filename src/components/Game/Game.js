import React from 'react';

import { WORDS } from '../../data';
import { checkGuess } from '../../game-helpers';
import { sample } from '../../utils';
import GuessInput from '../GuessInput';
import GuessOutput from '../GuessOutput';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [results, setResults] = React.useState([]);
  const addGuess = guess => {
    const result = checkGuess(guess, answer);    
    console.info({ result });
    setResults([...results, result]);
  };

  return (
    <>      
      <GuessOutput results={results} />
      <GuessInput addGuess={addGuess} />
    </>
  );
}

export default Game;
