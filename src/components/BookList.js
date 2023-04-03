import BookShow from './BookShow'

function BookList({ books, onBookDelete, onEdit }) {

  return (
    <div className='book-list'>
      {books.map(book => {
        return <BookShow key={book.id} book={book} onBookDelete={onBookDelete} onEdit={onEdit}/>
      })}
    </div>
  );
}

export default BookList;
