import React from 'react';
import Navbar from './Navbar';

class Quote extends React.PureComponent {
  render() {
    return (
      <div className="quote-container">
        <Navbar />
        <h2 className="quote">
          Mathematics is not about a numbers, equations, computations,or
          algorithms: it is about understanding. - Williams Paul Thurston
        </h2>
      </div>
    );
  }
}
export default Quote;
