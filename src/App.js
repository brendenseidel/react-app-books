import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import { useState } from "react";
import axios from "axios";

function App() {
  const [books, setBooks] = useState([]);

  const createBook = async (title) => {
    const response = await axios.post('http://localhost:3001/books', { title })
    setBooks([...books, response.data]);
  }

  const editBookById = (id, title) => {
    const updatedBooks = books.map(book => {
      if (book.id === id) {
        return {...book, title};
      }
      return book;
    })

    setBooks(updatedBooks)
  }

  const deleteBookById = (id) => {
    const updatedBooks = books.filter(book => {
      return book.id !== id;
    })
    setBooks(updatedBooks);
  }



  return (
    <div className="app">
      <h1>Reading List</h1>
      <BookList books={books} onBookDelete={deleteBookById} onEdit={editBookById}/>
      <BookCreate onCreate={createBook} />
    </div>
  );
}

export default App;
