import React from 'react';
import calculate from '../logic/calculate';

class Calculator extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { total: 0, next: null, operation: null };
  }

  handleClick = (event) => {
    const buttonName = event.target.innerText;
    const result = calculate(this.state, buttonName);
    this.setState(result);
  };

  render() {
    const { total, next, operation } = this.state;
    return (
      <div className="calculator">
        <div className="result-container">
          {total}
          {operation}
          {next}
        </div>
        <div className="grid-container">
          <button type="button" onClick={this.handleClick}>
            AC
          </button>
          <button type="button" onClick={this.handleClick}>
            +/-
          </button>
          <button type="button" onClick={this.handleClick}>
            %
          </button>
          <button type="button" onClick={this.handleClick} className="operator">
            &#247;
          </button>
          <button type="button" onClick={this.handleClick}>
            7
          </button>
          <button type="button" onClick={this.handleClick}>
            8
          </button>
          <button type="button" onClick={this.handleClick}>
            9
          </button>
          <button type="button" onClick={this.handleClick} className="operator">
            x
          </button>
          <button type="button" onClick={this.handleClick}>
            4
          </button>
          <button type="button" onClick={this.handleClick}>
            5
          </button>
          <button type="button" onClick={this.handleClick}>
            6
          </button>
          <button type="button" onClick={this.handleClick} className="operator">
            -
          </button>
          <button type="button" onClick={this.handleClick}>
            1
          </button>
          <button type="button" onClick={this.handleClick}>
            2
          </button>
          <button type="button" onClick={this.handleClick}>
            3
          </button>
          <button type="button" onClick={this.handleClick} className="operator">
            +
          </button>
          <button type="button" onClick={this.handleClick} className="zero">
            0
          </button>
          <button type="button" onClick={this.handleClick}>
            .
          </button>
          <button type="button" onClick={this.handleClick} className="operator">
            =
          </button>
        </div>
      </div>
    );
  }
}
export default Calculator;
