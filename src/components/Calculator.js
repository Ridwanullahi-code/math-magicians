import React from 'react';
import Row from './Rows';

class Calculator extends React.PureComponent {
  render() {
    return (
      <div className="calculator-grid">
        <Row />
      </div>
    );
  }
}
export default Calculator;
