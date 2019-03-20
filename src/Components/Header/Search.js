import React from 'react';
import PropTypes from 'prop-types';

const Search = ({ value, handleInput }) => {
  return (
    <form>
      <div className="field is-horizontal">
        <div className="field-label">
          <label className="label" htmlFor="search">Filter By Title</label>
        </div>
        <div className="control field-body">
          <input className="input" type="text" id="search" value={value} onChange={handleInput} />
        </div>
      </div>
    </form>
  );
}

Search.propTypes = {
  handleInput: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired
};

export default Search;
