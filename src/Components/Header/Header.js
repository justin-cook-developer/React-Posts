import React from 'react';

import Navigation from './Navigation';
import Search from './Search';

const Header = (props) => {
  return (
    <header>
      <Navigation />
      <Search {...props} />
    </header>
  );
}

export default Header;
