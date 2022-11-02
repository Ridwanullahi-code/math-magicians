import React from 'react';
import Calculator from './components/Calculator';
import './App.css';

class App extends React.PureComponent {
  render() {
    return (
      <div className="App">
        <div className="result-container">0</div>
        <Calculator />
      </div>
    );
  }
}

export default App;
