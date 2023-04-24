import React from "react";
import { useState } from "react";
import "./App.css";

function App () {
  const [score, setscore] = useState(0)
  const [pointIncrement, setPointIncrement] = useState(1)

  function increaseScore () {
    setscore(score + {pointIncrement})
  }

  function increasePointIncrement (){
    if (score >=10) {
      // we are gonna update
      setscore(score -10)
      setPointIncrement (pointIncrement +1)
    } else {
      // we will tell the player they can't afford it
      window.alert ("You can't afford that!")
    }
  }

// Terrinary operator 
    return (
      <main>
    
      <h1>Current Score: {score}</h1>
        {score <100 ?(
          <div>
            <button onClick={increaseScore}>+{pointIncrement}</button>
            <button onClick={increasePointIncrement}>Pay 10 points to change from +{pointIncrement} to +{pointIncrement}</button>
          </div>

        ): (
          <h2> You win </h2>
        )}
        
      </main>
    );
}

export default App;
