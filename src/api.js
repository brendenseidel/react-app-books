import axios from "axios";

const apiUrl = 'http://localhost:3001/books'

export const createBook = (title) => {
  const id = Math.round(Math.random() * 99999);
  setBooks([...books, {id , title}]);
}

export const editBookById = (id, title) => {
  const updatedBooks = books.map(book => {
    if (book.id === id) {
      return {...book, title};
    }
    return book;
  })

  setBooks(updatedBooks)
}

export const deleteBookById = (id) => {
  const updatedBooks = books.filter(book => {
    return book.id !== id;
  })
  setBooks(updatedBooks);
}