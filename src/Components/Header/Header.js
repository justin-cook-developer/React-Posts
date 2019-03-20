import React from 'react';
import PropTypes from 'prop-types';

import Navigation from './Navigation';
import Search from './Search';

const manualStyle = {
  marginTop: 15,
};

const Header = (props) => {
  return (
    <header className="level" style={manualStyle}>
      <Navigation className="level-left" />
      <Search className="level-right" {...props} />
    </header>
  );
};

Header.propTypes = {
  handleInput: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired
};

export default Header;
