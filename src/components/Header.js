import React from 'react';
import Welcome from './Welcome';

class Header extends React.PureComponent {
  render() {
    return (
      <header className="header-container">
        <Welcome className="container" />
      </header>
    );
  }
}
export default Header;
