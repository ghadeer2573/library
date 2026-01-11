const SearchBar = ({ onSearch }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const query = e.target.search.value.trim();
    if (query) onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-6">
      <input
        name="search"
        type="text"
        placeholder="Search by title, author, or keyword..."
        className="w-full p-3 border rounded"
      />
      <button className="bg-blue-600 text-white px-4 rounded">
        Search
      </button>
    </form>
  );
};

export default SearchBar;
