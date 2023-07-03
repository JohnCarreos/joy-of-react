import React from "react";
import Game from "../Game";
import Header from "../Header";
import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults";

function App() {
  const [guessResults, setGuessResults] = React.useState([]);

  function addGuessResult(guess) {
    const nextGuess = [...guessResults, { guess, id: crypto.randomUUID() }];
    setGuessResults(nextGuess);
  }
  return (
    <div className="wrapper">
      <Header />

      <div className="game-wrapper">
        <Game />
        <GuessResults guessResults={guessResults} />
        <GuessInput addGuessResult={addGuessResult} />
      </div>
    </div>
  );
}

export default App;
