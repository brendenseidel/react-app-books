import { useState } from "react";

function BookEdit({ book, onSubmit }) {
  const [title, setTitle] = useState(book.title)

  const handleChange = (e) => {
    setTitle(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit(book.id, title)
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="book-edit">
        <label>Title</label>
        <input value={title} onChange={handleChange} className="input"/>
        <button className="button is-primary">Save</button>
      </form>
    </div>
  );
}

export default BookEdit;
