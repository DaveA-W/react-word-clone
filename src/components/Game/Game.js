import React from 'react';

import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { WORDS } from '../../data';
import { checkGuess } from '../../game-helpers';
import { sample } from '../../utils';
import GuessInput from '../GuessInput';
import GuessOutput from '../GuessOutput';
import GameResult from '../GameResult/GameResult';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [hasWon, setHasWon] = React.useState();

  const addGuess = guess => {
    const result = checkGuess(guess, answer);
    const nextGuesses = [...guesses, result];
    setGuesses(nextGuesses);

    const nextHasWon = guess === answer || (
      nextGuesses.length >= NUM_OF_GUESSES_ALLOWED ? false : undefined
    );
    setHasWon(nextHasWon);
  };

  const isGameOver = hasWon !== undefined;

  return (
    <>      
      <GuessOutput
        guesses={guesses}
      />
      <GuessInput
        addGuess={addGuess}
        isDisabled={isGameOver}
      />
      {
        isGameOver &&
          <GameResult isCorrect={hasWon} guessCount={guesses.length} answer={answer} />
      }
    </>
  );
}

export default Game;
