import axios from 'axios';

export const FETCH_BOOKS = 'fetch_books';
export const FETCH_BOOK = 'fetch_book';

const data = require('../library');
console.log(`Request: ${data}`);

export function fetchBooks() {
  const request = data;


  return {
    type: FETCH_BOOKS,
    payload: request
  };
}

export function fetchBook(id) {
  console.log(id);
  //const request = data.find(id => return id === data.id);
  const request = '';
  return {
    type: FETCH_BOOK,
    payload: request
  };
}
