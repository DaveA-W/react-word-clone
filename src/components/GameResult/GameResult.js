import React from 'react';

function GameResult({ isCorrect, guessCount, answer }) {
  return isCorrect
    ? (
        <div className="happy banner">
          <p>
            <strong>Congratulations!</strong> Got it in
            <strong> {guessCount} {guessCount === 1 ? 'guess' : 'guesses'}</strong>.
          </p>
        </div>
      )
    : (
      <div className="sad banner">
        <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
      </div>
    );
}

export default GameResult;
