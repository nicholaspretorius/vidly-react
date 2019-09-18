import React from "react";

const SearchForm = () => {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="searchQuery">Search for</label>
        <input
          type="text"
          className="form-control"
          id="searchQuery"
          aria-describedby="searchQueryHelp"
          placeholder="Enter search term"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Search
      </button>
    </form>
  );
};

export default SearchForm;
