import React from "react";

function GuessResults({ guessResults }) {
  return (
    <div className="guess-results">
      {guessResults.map((result) => (
        <p key={result.id} className="guess">
          {result.guess}
        </p>
      ))}
    </div>
  );
}

export default GuessResults;
