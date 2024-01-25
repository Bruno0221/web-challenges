console.clear();

/*
Change the contents of this page depending on the current day and time.

- Write a function getGreeting that returns a different greeting depending on the current time:
  - 6 - 12: returns "Good Morning"
  - 13 - 18: returns "Good Afternoon"
  - 19 - 22: returns "Good Evening"
  - 23 - 5: returns "Good Night"

(HINT: you can get the current time: new Date().getHours() )

- Write a function getDayColor that returns a different color depending on the current weekday:
  - monday: "darkgray"
  - tuesday - friday: "lightblue"
  - saturday - sunday: "hotpink"

(HINT: you can get the current weekday: new Date().getDay() )

*/

const display = document.querySelector('[data-js="display"]');

function getGreeting() {
  const currentTime = new Date().getHours();
  if (currentTime > 5 && currentTime < 13) {
    return "Good Morning";
  } else if (currentTime > 12 && currentTime < 19) {
    return "Good Afternoon";
  } else if (currentTime > 18 && currentTime < 23) {
    return "Good Evening";
  } else if (
    (currentTime > 22 && currentTime <= 24) ||
    (currentTime < 6 && currentTime >= 0)
  ) {
    return "Good Night";
  } else {
    return "What time is it again?";
  }
}

function getDayColor() {
  const currentWeekday = new Date().getDay();
  if (currentWeekday === 1) {
    return "darkgray";
  } else if (currentWeekday >= 2 && currentWeekday <= 5) {
    return "lightblue";
  } else if (currentWeekday === 6 || currentWeekday === 7) {
    return "hotpink";
  }
}

display.textContent = getGreeting();
document.body.style.backgroundColor = getDayColor();
