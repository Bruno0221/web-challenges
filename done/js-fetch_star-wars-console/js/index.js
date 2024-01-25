console.clear();

const url = "https://swapi.dev/api/people";

async function fetchData(index, property) {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data.results[index][property]);
}

const itemIndex = 2;
const itemProperty = "eye_color";

fetchData(itemIndex, itemProperty);
