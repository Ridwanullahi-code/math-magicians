import React from 'react';
import { Link } from 'react-router-dom';

class Navbar extends React.PureComponent {
  render() {
    return (
      <nav className="navbar">
        <Link className="link" to="/">Math Magicians</Link>
        <ul className="nav-items">
          <li className="nav-item">
            <Link className="link" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="link" to="/Calculator">Calculator</Link>
          </li>
          <li className="nav-item">
            <Link className="link" to="/Quote">Quote</Link>
          </li>
        </ul>
      </nav>
    );
  }
}
export default Navbar;
