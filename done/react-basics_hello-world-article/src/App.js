import React from "react";
import "./styles.css";

function HelloWorldArticle() {
  const text = '"Hello"';
  return (
    <article>
      <h1>Hello World</h1>
      <p>{text}</p>
    </article>
  );
}

export default function App() {
  return <HelloWorldArticle />;
}
