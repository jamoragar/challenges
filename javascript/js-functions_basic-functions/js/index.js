console.clear();

/*
1: Create the data for a book in an online store. Create variables for the following data:
  - the book title
  - the author
  - the rating
  - the number of sales
*/

const book = {
  title: 'Lord of the rings',
  author: 'J.R.R. Tolkien',
  rating: 9.9,
  sales: 99000
}

/*
2: Log all variables to the console, for example:

Title: The Lord of the Javascript
Author: Mario
Rating: 4.2
Sales: 120

Increase the number of sales and change the rating of the book afterwards.
Then log all variables to the console again.
*/

console.log(`Title: ${book.title}`)
console.log(`Author: ${book.author}`)
console.log(`Rating: ${book.rating}`)
console.log(`Sales: ${book.sales}`)

console.log('\n')

console.log(`Rating: ${book.rating - 0.5}`)
console.log(`Sales: ${book.sales + 4000}`)


/*
3: This code is quite repetitive and hard to read.
 - Write a function called logBookData which console logs all
   variables when it is called.
 - Then replace the console logs above with this function.
 - Now increase the number of sales 2 more times and log the data after each increase.
*/

function logBookData(sales) {
  console.log('\n')
  console.log(`Title: ${book.title}`)
  console.log(`Author: ${book.author}`)
  console.log(`Rating: ${book.rating}`)
  console.log(`Sales: ${book.sales + sales}`)
}

logBookData(2000);
logBookData(444);

