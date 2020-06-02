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
    title: "Good Omens",
    authors: ["Terry Pratchett", "Neil Gaiman"],
    rating: 4.25,
    genres: ["fiction", "fantasy"]
  },
  {
    title: "Bone: The Complete Edition",
    authors: ["Jeff Smith"],
    rating: 4.42,
    genres: ["nonfiction", "essays"]
  },
  {
    title: "American Gods",
    authors: ["Neil Gaiman"],
    rating: 4.11,
    genres: ["fiction", "graphic novel", "fantasy"]
  },
  {
    title: "A Gentleman in Moscow",
    authors: ["Amor Towles"],
    rating: 4.36,
    genres: ["fiction", "historical fiction"]
  },
  {
    title: "The Name of the Wind",
    authors: ["Patrick Rothfuss"],
    rating: 4.54,
    genres: ["fiction", "fantasy"]
  },
  {
    title: "The Overstory",
    authors: ["Richard Powers"],
    rating: 4.19,
    genres: ["fiction", "short stories"]
  },
  {
    title: "The Way of Kings",
    authors: ["Brandon Sanderson"],
    rating: 4.65,
    genres: ["fantasy", "epic"]
  },
  {
    title: "Lord of the Flies",
    authors: ["William Golding"],
    rating: 3.67,
    genres: ["fiction"]
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
// const words = ["asap", "byob", "rsvp", "diy"];

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
  b.authors.includes("Neil Gaiman")
));

// Filter

const oddNums = nums.filter(n => n % 2 === 1);

const bigNums = nums.filter(n => n > 5);

const goodBooks = books.filter(b => b.rating > 4.3);

const fantasyBooks = books.filter(book => (
  book.genres.includes("fantasy")
));

const shortForm = books.filter(book => (
  book.genres.includes("short stories") ||
  book.genres.includes("essays")
));

const query = "The";

const results = books.filter(book => {
  const title = book.title.toLowerCase();
  return title.includes(query.toLowerCase());
});

// Every

const words = ["dog", "dig", "log", "bag", "wag"];

const all3Lets = words.every(word => word.length === 3);
const lastLetter = words.every(word => {
  const last = word.length - 1;
  return word[last] === 'g';
});

const allGoodBooks = books.every(book => book.rating > 3.5);

// Some

const someStartWithD = words.some(word => word[0] === 'd');

const anyTwoAuthors = books.some(book => (
  book.authors.length === 2
));

// Sort

const prices = [400.50, 3000, 99.99, 35.99, 12.00, 9500];

const badSort = prices.slice().sort();

// slice makes copy of prices array
const ascSort = prices.slice().sort((a, b) => a - b);
const descSort = prices.slice().sort((a, b) => b - a);

books.sort((a, b) => a.rating - b.rating);