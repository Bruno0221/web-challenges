import React from "react";
import "./styles.css";

function Article() {
  return (
    <article>
      <h2 className="article__title">Hello</h2>
      <label htmlFor="testInput">Test Label</label>
      <input id="testInput"></input>
      <a
        className="article__link"
        href="https://create-react-app.dev/docs/getting-started"
      >
        React Docu
      </a>
    </article>
  );
}

export default function App() {
  return <Article />;
}
