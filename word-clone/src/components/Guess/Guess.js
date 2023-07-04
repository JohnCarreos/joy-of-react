import React from "react";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

function Guess({ tentativeGuess, answer }) {
  const tentativeGuessChecked = checkGuess(tentativeGuess, answer);

  return (
    <>
      {tentativeGuessChecked
        ? tentativeGuessChecked.map((char, index) => (
            <span key={index} className={`cell ${char.status}`}>
              {char.letter}
            </span>
          ))
        : range(5).map((i) => <span key={i} className="cell"></span>)}
    </>
  );
}

export default Guess;
