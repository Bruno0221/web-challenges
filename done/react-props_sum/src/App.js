import React from "react";
import "./styles.css";

export default function App() {
  return <Sum valueA={3} valueB={2} />;
}

function Sum({ valueA, valueB }) {
  const sum = valueA + valueB;
  return (
    <h1>
      The sum of {valueA} + {valueB} is: {sum}
    </h1>
  );
}
