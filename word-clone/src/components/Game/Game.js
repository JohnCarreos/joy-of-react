import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessResults, setGuessResults] = React.useState([]);

  const [correctGuess, setCorrectGuess] = React.useState(false);

  function addGuessResult(guess) {
    const nextGuessResults = [...guessResults, guess];
    setGuessResults(nextGuessResults);
    setCorrectGuess(guess === answer);
  }

  return (
    <>
      {correctGuess ? (
        <div className="happy banner">
          <p>
            <strong>Congratulations!</strong> Got it in
            <strong> {guessResults.length} guesses</strong>.
          </p>
        </div>
      ) : guessResults.length >= NUM_OF_GUESSES_ALLOWED ? (
        <div class="sad banner">
          <p>
            Sorry, the correct answer is <strong>{answer}</strong>.
          </p>
        </div>
      ) : (
        ""
      )}
      <GuessResults guessResults={guessResults} answer={answer} />
      <GuessInput addGuessResult={addGuessResult} />
      {/* {!correctGuess && !(guessResults.length >= NUM_OF_GUESSES_ALLOWED) && (
        <GuessInput addGuessResult={addGuessResult} />
      )} */}
    </>
  );
}

export default Game;
