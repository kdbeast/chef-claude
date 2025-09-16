import "./App.css";
import jokeData from "./components/jokeData";
import Joke from "./components/Joke";
import { useState } from "react";

function App() {
  const [unreadMessages, setUnreadMessages] = useState(["a", "b"]);

  const toogleClick = () => {
    setUnreadMessages((prevMess) => !prevMess);
  };

  return (
    <main>
      {jokeData.map((joke) => (
        <Joke key={joke.id} setup={joke.setup} punchline={joke.punchline} />
      ))}
      {unreadMessages && (
        <h1>{`You have ${unreadMessages.length} unread messages`}</h1>
      )}
      <button onClick={toogleClick}>
        {unreadMessages.length > 0
          ? `You have ${unreadMessages.length} unread messages`
          : "You have no unread messages"}
      </button>
    </main>
  );
}

export default App;
