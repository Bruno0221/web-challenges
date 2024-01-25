console.clear();

// EXERCISE 1
// Create an object personWithNameAgeEmail with the properties "name", "age" and "email".

const personWithNameAgeEmail = {
  name: "name",
  age: "age",
  email: "email",
};

// EXERCISE 2
// Set the values of name and age equal to the corresponding values of the personAlex object.

const personAlex = {
  name: "Alex",
  age: 24,
};

const nameOfAlex = personAlex.name;
const ageOfAlex = personAlex.age;
console.log(nameOfAlex, ageOfAlex);

function getValueFromObject(object, element) {
  return object[element];
}
const alexName = getValueFromObject(personAlex, "name");
const alexAge = getValueFromObject(personAlex, "age");

console.log(alexName, alexAge);

// EXERCISE 3
// Change the value of name to "Alex" and the value of age to "35" by updating the object personToChange: person.existingProperty = newValue.

const personToChange = {
  name: "Kim",
  age: 24,
};

function changeName(object, newName) {
  object.name = newName;
}
function changeAge(object, newAge) {
  object.age = newAge;
}

function changeAgeAndName(object, newAge, newName) {
  changeAge(object, newAge);
  changeName(object, newName);
}

changeAgeAndName(personToChange, 35, "Alex");

console.log(personToChange);

// EXERCISE 4
// Add the properties age "5" and breed "husky" to the object petPluto: pet.newProperty = newValue.

const petPluto = {
  name: "Pluto",
  species: "dog",
};

function addPropertyToObject(object, property, value) {
  return (object[property] = value);
}

addPropertyToObject(petPluto, "age", 5);
addPropertyToObject(petPluto, "breed", "husky");

console.log(petPluto);

export {
  personWithNameAgeEmail,
  nameOfAlex,
  ageOfAlex,
  personToChange,
  petPluto,
};
