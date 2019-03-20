import React from 'react';

const Search = ({ value, handleInput }) => {
  return (
    <form>
      <label htmlFor="search">Filter By Title</label>
      <input type="text" id="search" value={value} onChange={handleInput} />
    </form>
  );
}

export default Search;
