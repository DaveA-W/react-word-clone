import React from 'react';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { range } from '../../utils';

function GuessOutput({ guesses }) {
  const output = range(NUM_OF_GUESSES_ALLOWED).map(index => guesses.length > index ? guesses[index] : '');
  return (
    <div className="guess-results">
      { output.map((guess, guessIndex) => (
        <p key={guessIndex} className="guess">
          {range(5).map(letterIndex => (
            <span key={letterIndex} className={`cell ${guess.length > letterIndex ? guess[letterIndex].status : ''}`}>
              {guess.length > letterIndex ? guess[letterIndex].letter : ''}
            </span>
          ))}    
        </p>
      ))}
    </div>
  );
}

export default GuessOutput;
