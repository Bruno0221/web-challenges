import ColoredNumber from "./ColoredNumber";
import { useState } from "react";

export default function Counter() {
  const [value, setValue] = useState(0);

  return (
    <div className="counter">
      <h1>Colored Number</h1>
      <ColoredNumber value={value} />
      <div className="counter__buttons-container">
        <button
          type="button"
          className="counter__button"
          aria-label="decrement count"
          onClick={() => {
            setValue(value - 1);
          }}
        >
          -
        </button>
        <button
          type="button"
          className="counter__button"
          aria-label="increment count"
          onClick={() => {
            setValue(value + 1);
          }}
        >
          +
        </button>
      </div>
    </div>
  );
}
