import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBox = ({ toggle }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const query = searchQuery.trim();
    if (query) {
      navigate(`/entries?search=${encodeURIComponent(query)}`);
    } else {
      navigate("/entries");
    }
    toggle && toggle();
    setSearchQuery("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-md mx-auto flex"
      role="search"
      aria-label="Search journal entries"
    >
      <input
        type="search"
        name="search"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search entries..."
        autoComplete="off"
        aria-label="Search journal entries"
        className="flex-grow px-4 py-2 rounded-l-full border border-stone-800 bg-[#1a1a1a] text-gray-100 transition"
      />
      <button
        type="submit"
        aria-label="Submit search"
        className="px-6 py-2 bg-[#242424] text-gray-100 rounded-r-full hover:bg-[#323232] transition"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBox;