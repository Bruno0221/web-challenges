console.clear();

const form = document.querySelector('[data-js="form"]');
const inputName = document.querySelector("#first-name");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);
  const nameValue = data.firstName;
  const ageValue = data.age;
  const badnessValue = data.badness;
  console.log(data);
  console.log(
    `The age-badness-sum of ${nameValue} is ${ageValue + badnessValue}`
  );

  form.reset();
  inputName.focus();
});
