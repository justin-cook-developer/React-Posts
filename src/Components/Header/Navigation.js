import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => (
  <nav>
    <ul>
      <li>
        <NavLink to="/" exact activeStyle={{ color: 'green' }} >Home</NavLink>
      </li>
      <li>
        <NavLink to="/about" activeStyle={{ color: 'green' }} >About</NavLink>
      </li>
    </ul>
  </nav>
);

export default Navigation;
