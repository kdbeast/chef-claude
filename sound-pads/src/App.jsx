import { useState } from "react";
import "./App.css";
import padsData from "./components/pads.js";
import Pad from "./components/Pad.jsx";

function App() {
  const [pads, setPads] = useState(padsData);

  const toggle = (id) => {
    setPads((prevPads) =>
      prevPads.map((pad) => {
        return pad.id === id ? { ...pad, on: !pad.on } : pad;
      })
    );
  };

  return (
    <main>
      <div className="pad-container">
        {pads.map((pad) => (
          <Pad
            key={pad.id}
            id={pad.id}
            color={pad.color}
            onn={pad.on}
            toggle={toggle}
          />
        ))}
      </div>
    </main>
  );
}

export default App;
