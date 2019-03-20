import React from 'react';
import PropTypes from 'prop-types';

const Search = ({ value, handleInput }) => {
  return (
    <form>
      <label htmlFor="search">Filter By Title</label>
      <input type="text" id="search" value={value} onChange={handleInput} />
    </form>
  );
}

Search.propTypes = {
  handleInput: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired
};

export default Search;
