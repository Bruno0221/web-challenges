import "./styles.css";
import { useState } from "react";

export default function App() {
  const [isActive, setIsActive] = useState(true);

  function handleClick() {
    setIsActive(!isActive);
  }

  return (
    <main>
      <div className={`box ${isActive ? "box--active" : ""}`} />
      <button onClick={handleClick}>
        <span>{isActive ? "Activate" : "Deactivate"}</span>
      </button>
    </main>
  );
}
