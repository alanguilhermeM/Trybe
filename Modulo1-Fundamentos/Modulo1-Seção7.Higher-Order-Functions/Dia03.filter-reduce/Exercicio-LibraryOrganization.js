const { books } = require('../data/library');

// Requisito 1
const fantasyOrScienceFiction = () => {
  const fantasyOrScienceFictionSearch = books
    .filter((book) => book.genre === 'Fantasia' || book.genre === 'Ficção Científica');
  return fantasyOrScienceFictionSearch;
};

const oldBooksOrdered = (year) => books.filter((book) => year - book.releaseYear > 60)
  .sort((a, b) => a.releaseYear - b.releaseYear);

const booksByAuthorBirthYear = (birthYear) => {
  const newArray = [];
  books.filter((book) => {
    if (book.author.birthYear === birthYear) {
      newArray.push(book.name);
      return newArray;
    }
    return newArray;
  });
  return newArray;
};

const fantasyOrScienceFictionAuthors = () => {
  const newArray = [];
  books.filter((book) => {
    if (book.genre === 'Fantasia' || book.genre === 'Ficção Científica') {
      newArray.push(book.author.name);
    }
    return newArray;
  });
  return newArray.sort();
};

const oldBooks = (year) => {
  const newArray = [];
  books.filter((book) => {
    if (year - book.releaseYear > 60) {
      newArray.push(book.name);
    }
    return newArray;
  });
  return newArray;
};

const authorWith3DotsOnName = () => books.find((book) => book.author.name
  .match(/[A-Z]\./g).length === 3).name; // Tive ajuda do Gilliady que me explicou como funciona match(/[A-Z]\./g), VLW GILLIADY!!!

module.exports = {
  fantasyOrScienceFiction,
  oldBooksOrdered,
  booksByAuthorBirthYear,
  fantasyOrScienceFictionAuthors,
  oldBooks,
  authorWith3DotsOnName,
};
