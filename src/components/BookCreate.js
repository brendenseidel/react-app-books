import { useState } from "react";

function BookCreate({createBook}) {

  const [book, setBook] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    createBook(book)
  }

  const handleChange = e => {
    setBook(e.target.value)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input value={book} onChange={handleChange}/>
      </form>
    </div>
  );
}

export default BookCreate;
