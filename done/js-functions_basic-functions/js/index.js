console.clear();

/*
1: Create the data for a book in an online store. Create variables for the following data:
  - the book title
  - the author
  - the rating
  - the number of sales
*/

// --v-- write your code here --v--

const bookTitle = "JS Basics";
const bookAuthor = "Jane Doe";
let bookRating = 4.8;
let bookSales = 333;

// --^-- write your code here --^--

/*
2: Log all variables to the console, for example:

Title: The Lord of the Javascript
Author: Mario
Rating: 4.2
Sales: 120

Increase the number of sales and change the rating of the book afterwards.
Then log all variables to the console again.
*/

// --v-- write your code here --v--

console.log("Title: " + bookTitle);
console.log("Author: " + bookAuthor);
console.log("Rating: " + bookRating);
console.log("Sales: " + bookSales);

bookSales += 20;
bookRating += -1;

console.log("Rating: " + bookRating);
console.log("Sales: " + bookSales);

// --^-- write your code here --^--

/*
3: This code is quite repetitive and hard to read.
- Write a function called logBookData which console logs all
variables when it is called.
- Then replace the console logs above with this function.
- Now increase the number of sales 2 more times and log the data after each increase.
*/

// --v-- write your code here --v--

function logBookData(newSales, newRating) {
  bookSales += newSales;
  bookRating += newRating;
  console.log(
    "Title: " + bookTitle,
    ", Author: " + bookAuthor,
    ", Sales: " + bookSales,
    ", Rating: " + bookRating
  );
}

logBookData(55, 0.1);
logBookData(12, -0.2);

// --^-- write your code here --^--
