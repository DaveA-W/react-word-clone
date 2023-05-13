import React from 'react';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { range } from '../../utils';

function GuessOutput({ results }) {
  const output = range(NUM_OF_GUESSES_ALLOWED).map(index => results.length > index ? results[index] : '');
  return (
    <div className="guess-results">
      { output.map((result, resultIndex) => (
        <p key={resultIndex} className="guess">
          {range(5).map(letterIndex => (
            <span key={letterIndex} className={`cell ${result.length > letterIndex ? result[letterIndex].status : ''}`}>
              {result.length > letterIndex ? result[letterIndex].letter : ''}
            </span>
          ))}    
        </p>
      ))}
    </div>
  );
}

export default GuessOutput;
