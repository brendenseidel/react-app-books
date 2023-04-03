import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import { useState } from "react";

let id = 1;


function App() {
  const [books, setBooks] = useState([]);

  const createBook = (title) => {
    const newBook = {title: title, id: id};
    setBooks([...books, newBook]);
    id++;
  }

  // const editBook = (book) => {

  // }

  // const deleteBook = () => {

  // }

  return (
    <div>
      <BookCreate onCreate={createBook}/>
      <BookList books={books}/>
    </div>
  );
}

export default App;
