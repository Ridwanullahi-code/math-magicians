import React from 'react';
import Navbar from './Navbar';
import Welcome from './Welcome';

class Header extends React.PureComponent {
  render() {
    return (
      <header className="header-container">
        <Navbar />
        <Welcome className="container" />
      </header>
    );
  }
}
export default Header;
