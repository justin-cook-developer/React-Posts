import React from 'react';
import PropTypes from 'prop-types';

import Navigation from './Navigation';
import Search from './Search';

const Header = (props) => {
  return (
    <header>
      <Navigation />
      <Search {...props} />
    </header>
  );
};

Header.propTypes = {
  handleInput: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired
};

export default Header;
