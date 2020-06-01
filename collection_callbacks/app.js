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