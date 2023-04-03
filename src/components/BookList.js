import BookShow from './BookShow'

function BookList({ books, onBookDelete }) {

  return (
    <div className='book-list'>
      {books.map(book => {
        return <BookShow key={book.id} book={book} onBookDelete={onBookDelete}/>
      })}
    </div>
  );
}

export default BookList;
