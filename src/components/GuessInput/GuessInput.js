import React from 'react';

function GuessInput({ addGuess }) {
  const [guess, setGuess] = React.useState('');

  /** Dynamically checks for invalid characters within user input, and replaces them before setting the current (partial) guess state */
  const normalizeGuess = (event) => {
    // Convert input to upper case
    const upper = event.target.value?.toUpperCase();
    // Strip non-letters
    const replaced = upper.replace(/[^A-Z]/gi, '');
    // Set in state
    setGuess(replaced);
  }
  
  /** Adds a completed guess when the user submits the form (by pressing Enter) */
  const submitGuess = (event) => {
    event.preventDefault();
    console.info({ guess });
    addGuess(guess);
    setGuess('');
  };

  return (
    <form className="guess-input-wrapper" onSubmit={submitGuess}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        title="5 letter word"
        type="text"
        required={true}
        minLength={5}
        maxLength={5}
        pattern='[A-Z]{5}'
        value={guess}
        onChange={normalizeGuess} 
      />
    </form>
  );
}

export default GuessInput;
