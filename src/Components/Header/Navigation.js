import React from 'react';
import { NavLink } from 'react-router-dom';

const manualStyle = {
  marginRight: 10,
};

const Navigation = () => (
  <nav>
    <ul className="level">
      <li className="level-left" style={manualStyle}>
        <NavLink to="/" exact activeStyle={{ color: 'green' }} >Home</NavLink>
      </li>
      <li className="level-right">
        <NavLink to="/about" activeStyle={{ color: 'green' }} >About</NavLink>
      </li>
    </ul>
  </nav>
);

export default Navigation;
