import React, { useState } from "react";
import Counter from "./components/Counter";
import "./styles.css";

export default function App() {
  const [people, setPeople] = useState(1);

  function handlePeople(event, count) {
    if (people > 1) {
      setPeople(count);
    }
    if (people === 1 && event.target.innerText === "+") {
      setPeople(count);
    }
  }

  return (
    <div className="container">
      <h1>Place a Table Reservation</h1>
      <Counter people={people} setPeople={handlePeople} />
      <p>
        You are going to reserve a table for {people}{" "}
        {people === 1 ? "person" : "people"}.
      </p>
    </div>
  );
}
