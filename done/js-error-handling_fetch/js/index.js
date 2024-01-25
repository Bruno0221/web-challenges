console.clear();

const userElement = document.querySelector(".user");
const errorElement = document.querySelector(".error");

async function getUser(url) {

    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(response.status + " Page not found");
      return null;

    const json = await response.json();
    return json.data;

}

document.querySelectorAll("button[data-url]").forEach((button) =>
  button.addEventListener("click", async (event) => {
    errorElement.textContent = "";
    try {
      const user = await getUser(event.target.dataset.url);
      userElement.innerHTML = `
    <h2>${user.first_name} ${user.last_name}</h2>
    <img alt="${user.first_name} ${user.last_name}" src="${user.avatar}"/>
    `;
    } catch {
      userElement.innerHTML = "";
      errorElement.textContent = "This page can not be found";
    }
  })
);

