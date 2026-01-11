const BookDetails = ({ book, onClose }) => {
  if (!book) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded w-full max-w-lg">
        <button
          onClick={onClose}
          className="text-red-500 float-right"
        >
          Close
        </button>

        <h2 className="text-xl font-bold mb-2">{book.title}</h2>
        <p><strong>Author:</strong> {book.author_name?.join(", ")}</p>
        <p><strong>First Published:</strong> {book.first_publish_year}</p>
        <p><strong>ISBN:</strong> {book.isbn?.[0]}</p>
        <p className="mt-3 text-sm text-gray-700">
          Subjects: {book.subject?.slice(0, 5).join(", ")}
        </p>
      </div>
    </div>
  );
};

export default BookDetails;
