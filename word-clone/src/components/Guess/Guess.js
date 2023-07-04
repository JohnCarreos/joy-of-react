import React from "react";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

function Guess({ tentativeGuess, answer }) {
  return (
    <>
      {tentativeGuess
        ? tentativeGuess.split("").map((char, index) => (
            <span key={index} className="cell">
              {char}
            </span>
          ))
        : range(5).map((i) => <span key={i} className="cell"></span>)}

      {/* {range(5).map(() => (
        <span class="cell"></span>
      ))} */}
    </>
  );
}

export default Guess;
