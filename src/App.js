import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import { useState } from "react";

let id = 1;


function App() {
  const [books, setBooks] = useState([]);

  const createBook = (book) => {
    const bookObj = {title: book, id: id};
    setBooks([...books, bookObj]);
    id++;
  }

  // const editBook = (book) => {

  // }

  // const deleteBook = () => {

  // }

  return (
    <div>
      <BookList books={books}/>
      <BookCreate createBook={createBook}/>
    </div>
  );
}

export default App;
