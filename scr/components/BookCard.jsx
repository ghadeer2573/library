const BookCard = ({ book, onSelect }) => {
  const coverUrl = book.cover_i
    ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
    : "https://via.placeholder.com/150";

  return (
    <div
      onClick={() => onSelect(book)}
      className="cursor-pointer bg-white shadow rounded p-4 hover:scale-105 transition"
    >
      <img src={coverUrl} alt={book.title} className="h-48 mx-auto mb-3" />
      <h3 className="font-bold">{book.title}</h3>
      <p className="text-sm text-gray-600">
        {book.author_name?.join(", ") || "Unknown Author"}
      </p>
      <p className="text-xs text-gray-500">
        {book.publisher?.[0] || "Unknown Publisher"}
      </p>
    </div>
  );
};

export default BookCard;
