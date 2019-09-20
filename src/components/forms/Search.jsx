import React from "react";

const SearchForm = ({ value, onChange }) => {
  return (
    <form>
      <div className="form-group">
        {/* <label htmlFor="searchQuery">Search for</label> */}
        <input
          type="text"
          className="form-control"
          id="searchQuery"
          name="searchQuery"
          value={value}
          onChange={e => onChange(e.currentTarget.value)}
          aria-describedby="searchQueryHelp"
          placeholder="Enter search term"
        />
      </div>
    </form>
  );
};

export default SearchForm;
