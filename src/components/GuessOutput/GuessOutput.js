import React from 'react';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { range } from '../../utils';

function GuessOutput({ guesses }) {
  const output = range(NUM_OF_GUESSES_ALLOWED).map(index => guesses.length > index ? guesses[index] : '');
  return (
    <div className="guess-results">
      { output.map((guess, guessNumber) => (
        <p key={guessNumber} className="guess">
          {range(5).map(guessLetter => (
            <span className="cell">{guess.length > guessLetter ? guess.charAt(guessLetter) : ''}</span>
          ))}    
        </p>
      ))}
    </div>
  );
}

export default GuessOutput;
