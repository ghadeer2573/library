import { useState } from "react";
import SearchBar from "../components/SearchBar";
import BookList from "../components/BookList";
import BookDetails from "../components/BookDetails";

const Home = () => {
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);
  const [error, setError] = useState("");

  const searchBooks = async (query) => {
    try {
      setError("");
      const res = await fetch(
        `https://openlibrary.org/search.json?q=${query}`
      );
      const data = await res.json();
      setBooks(data.docs.slice(0, 20));
    } catch {
      setError("Failed to fetch books. Please try again.");
    }
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <SearchBar onSearch={searchBooks} />
      {error && <p className="text-red-500">{error}</p>}
      <BookList books={books} onSelect={setSelectedBook} />
      <BookDetails book={selectedBook} onClose={() => setSelectedBook(null)} />
    </div>
  );
};

export default Home;
