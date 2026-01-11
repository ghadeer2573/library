import BookCard from "./BookCard";

const BookList = ({ books, onSelect }) => {
  if (books.length === 0) {
    return <p className="text-center text-gray-500">No books found.</p>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {books.map((book) => (
        <BookCard key={book.key} book={book} onSelect={onSelect} />
      ))}
    </div>
  );
};

export default BookList;
