import React from 'react';
import { NavLink } from 'react-router-dom';

class Navbar extends React.PureComponent {
  render() {
    return (
      <nav className="navbar">
        <NavLink className="link" to="/">
          Math Magicians
        </NavLink>
        <ul className="nav-items">
          <li className="nav-item">
            <NavLink className="link" to="/">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="link" to="/Calculator">
              Calculator
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="link" to="/Quote">
              Quote
            </NavLink>
          </li>
        </ul>
      </nav>
    );
  }
}
export default Navbar;
