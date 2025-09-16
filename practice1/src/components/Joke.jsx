const Joke = ({ setup, punchline }) => {
  return (
    <>
      {setup && <p className="setup">Setup: {setup}</p>}
      <p className="punchline">Punchline: {punchline}</p>
      <hr />
    </>
  );
};

export default Joke;
