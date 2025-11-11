import React from "react";

function Search({ searchTerm, setSearchTerm }) {
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        value={searchTerm}
        type="text"
        id="search"
        placeholder="Type a name to search..."
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
}

export default Search;