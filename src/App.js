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
