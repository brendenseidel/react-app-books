import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import { useState } from "react";

function App() {
  const [books, setBooks] = useState([]);

  const createBook = (title) => {
    const id = Math.round(Math.random() * 99999);
    setBooks([...books, {id , title}]);
  }

  // const editBook = (book) => {

  // }

  const deleteBookById = (id) => {
    const updatedBooks = books.filter(book => {
      return book.id !== id;
    })

    setBooks(updatedBooks);
  }

  return (
    <div className="app">
      <BookList books={books} onBookDelete={deleteBookById}/>
      <BookCreate onCreate={createBook} />
    </div>
  );
}

export default App;
