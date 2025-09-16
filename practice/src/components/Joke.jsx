import { useState } from "react";

const Joke = ({ setup, punchline }) => {
  const [isShown, setIsShown] = useState(false);

  const toogleShown = () => {
    setIsShown((prevShown) => !prevShown);
  };

  return (
    <>
      {setup && <p className="setup">Setup: {setup}</p>}
      {isShown && <p className="punchline">Punchline: {punchline}</p>}
      <button onClick={toogleShown}>{isShown ? "Hide" : "Show"} Punchline</button>
      <hr />
    </>
  );
};

export default Joke;
