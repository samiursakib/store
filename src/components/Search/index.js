import React, { useState } from "react";

// Styles
import "./style.scss";

const Search = ({ search, resetSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [toggleReset, setToggleReset] = useState(false);

  const onInputChange = event => {
    const value = event.target.value;
    setSearchTerm(value);
    if (!value.length) {
      search(value);
    }
  };

  const handleSearchReset = () => {
    setToggleReset(false);
    resetSearch("");
  };

  const handleSubmit = event => {
    event.preventDefault();
    setSearchTerm("");

    if (searchTerm.length > 2) {
      setToggleReset(true);
    } else {
      setToggleReset(false);
    }

    search(searchTerm);
  };

  return (
    <form
      className="search-form"
      onSubmit={event => {
        handleSubmit(event);
      }}>
      <div className="form-group">
        <input
          type="text"
          placeholder="Search"
          onChange={onInputChange}
          value={searchTerm}
        />
        <button className="primary-btn">Search</button>
      </div>
      {toggleReset && (
        <span className="reset-search-btn" onClick={handleSearchReset}>
          Reset Search <strong>X</strong>
        </span>
      )}
    </form>
  );
};

export default Search;
