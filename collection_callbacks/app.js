// forEach

const nums = [9, 8, 7, 6, 5, 4, 3, 2, 1];

// nums.forEach(function (n) {
//   console.log(n * 2);
// });

// function printTriple(n) {
//   console.log(n * 3);
// }

// nums.forEach(printTriple);

nums.forEach(function (num, idx) {
  console.log(idx, num);
});

const books = [{
    title: 'Good Omens',
    authors: ['Terry Pratchett', 'Neil Gaiman'],
    rating: 4.25
  },
  {
    title: 'Bone: The Complete Edition',
    authors: ['Jeff Smith'],
    rating: 4.42
  },
  {
    title: 'American Gods',
    authors: ['Neil Gaiman'],
    rating: 4.11
  },
  {
    title: 'A Gentleman in Moscow',
    authors: ['Amor Towles'],
    rating: 4.36
  }
];

// books.forEach(function (book) {
//   console.log(book.title.toUpperCase());
// });

// for(let book of books) {
//   console.log(book.title.toUpperCase());
// }

// Map

// const numbers = [20, 21, 22, 23, 24, 25, 26, 27];
// const words = ['asap', 'byob', 'rsvp', 'diy'];

// const doubles = numbers.map(function(num) {
//   return num * 2;
// });

// const numDetails = numbers.map(function(n) {
//   return {
//     value: n,
//     isEven: n % 2 === 0
//   };
// });

// const formatStrings = words.map(function(word) {
//   return word.toUpperCase().split("").join(".");
// });

// const bookTitles = books.map(function(b) {
//   return b.title;
// });

// Find

let movies = [
  "The Fantastic Mr. Fox",
  "Mr. and Mrs. Smith",
  "Mrs. Doubtfire",
  "Mr. Deeds"
];

const movie = movies.find(movie => {
  return movie.includes("Mrs.");
});

const movie2 = movies.find(m => (
  m.indexOf("Mrs.") === 0
));

const goodBook = books.find(b => b.rating >= 4.3);
const neilBook = books.find(b => (
  b.authors.includes('Neil Gaiman')
));