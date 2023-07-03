import React from "react";

function GuessInput({ addGuessResult }) {
  const [guess, setGuess] = React.useState("");

  function submitGuess(word) {
    console.log({ guess: word });
    addGuessResult(word);
    setGuess("");
  }

  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(event) => {
        event.preventDefault();
        submitGuess(guess);
      }}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        required
        id="guess-input"
        type="text"
        value={guess}
        pattern=".{5,5}"
        maxLength={5}
        onChange={(event) => setGuess(event.target.value.toUpperCase())}
      />
    </form>
  );
}

export default GuessInput;
