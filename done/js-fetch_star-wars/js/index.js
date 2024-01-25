import { Card } from "../components/Card/Card.js";
import { renderElement } from "./utils.js";

console.clear();

const starWarsApi = "https://swapi.dev/api/people";

async function fetchDataAndRender() {
  const response = await fetch(starWarsApi);
  const data = await response.json();
  const results = data.results;
  results.forEach((result) => {
    const card = Card(result);
    renderElement(card);
  });
}

fetchDataAndRender();
