// import { useState } from "react";
import { useState } from "react";
import "./App.css";

function App() {
  // const [count, setCount] = useState(0);

  // const add = () => {
  //   setCount((prevCount) => prevCount + 1);
  // };

  // const subtract = () => {
  //   setCount((prevCount) => prevCount - 1);
  // };

  // 2
  // const [isGoingOut, setIsGoingOut] = useState(true);

  // const toggle = () => {
  //   setIsGoingOut(!isGoingOut);
  // };

  // 3
  const [myFavoriteThings, setMyFavoriteThings] = useState([]);
  const allFavoriteThings = [
    "💦🌹",
    "😺",
    "💡🫖",
    "🔥🧤",
    "🟤🎁",
    "🐴",
    "🍎🥧",
    "🚪🔔",
    "🛷🔔",
    "🥩🍝",
  ];
  const thingsElements = myFavoriteThings.map((thing) => (
    <p key={thing}>{thing}</p>
  ));

  function addFavoriteThing() {
    setMyFavoriteThings([
      ...myFavoriteThings,
      allFavoriteThings[myFavoriteThings.length],
    ]);
  }

  return (
    <>
      <main className="container">
        {/* 1 */}
        {/* <h1>How many times will Bob say "state" in this section?</h1>
        <div className="counter">
          <button
            className="minus"
            onClick={subtract}
            aria-label="Decrease count"
          >
            –
          </button>
          <h2 className="count">{count}</h2>
          <button className="plus" onClick={add} aria-label="Increase count">
            +
          </button>
        </div> */}

        {/* 2 */}
        {/* <h1 className="title">Do I feel like going out tonight?</h1>
        <button onClick={toggle} className="value">
          {isGoingOut ? "Yes" : "No"}
        </button> */}

        {/* 3 */}
        <main>
          <button onClick={addFavoriteThing}>Add item</button>
          <section aria-live="polite">{thingsElements}</section>
        </main>
      </main>
    </>
  );
}

export default App;
