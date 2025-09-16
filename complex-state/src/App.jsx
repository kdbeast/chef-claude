import React from "react";
import starFilled from "../public/star-filled.png";
import starEmpty from "../public/star-empty.png";
import "./App.css";
import Card from "./Card";

export default function App() {
  const [contact, setContact] = React.useState({
    firstName: "John",
    lastName: "Doe",
    phone: "+1 (212) 555-1212",
    email: "itsmyrealname@example.com",
    isFavorite: false,
  });

  const starIcon = contact.isFavorite ? starFilled : starEmpty;

  function toggleFavorite() {
    setContact((prev) => {
      return {
        ...prev,
        isFavorite: !prev.isFavorite,
      };
    });
  }

  return (
    <main>
      <Card
        contact={contact}
        toggleFavorite={toggleFavorite}
        starIcon={starIcon}
      />
    </main>
  );
}
