import React, { useState } from 'react';
import calculate from '../logic/calculate';

const Calculator = () => {
  const data = { total: 0, next: null, operation: null };
  const [state, setState] = useState(data);

  const handleClick = (event) => {
    const buttonName = event.target.innerText;
    const result = calculate(state, buttonName);
    setState(result);
  };
  const { total, next, operation } = state;
  return (
    <div className="calculator">
      <div className="result-container">
        {total}
        {operation}
        {next}
      </div>
      <div className="grid-container">
        <button type="button" onClick={handleClick}>
          AC
        </button>
        <button type="button" onClick={handleClick}>
          +/-
        </button>
        <button type="button" onClick={handleClick}>
          %
        </button>
        <button type="button" onClick={handleClick} className="operator">
          &#247;
        </button>
        <button type="button" onClick={handleClick}>
          7
        </button>
        <button type="button" onClick={handleClick}>
          8
        </button>
        <button type="button" onClick={handleClick}>
          9
        </button>
        <button type="button" onClick={handleClick} className="operator">
          x
        </button>
        <button type="button" onClick={handleClick}>
          4
        </button>
        <button type="button" onClick={handleClick}>
          5
        </button>
        <button type="button" onClick={handleClick}>
          6
        </button>
        <button type="button" onClick={handleClick} className="operator">
          -
        </button>
        <button type="button" onClick={handleClick}>
          1
        </button>
        <button type="button" onClick={handleClick}>
          2
        </button>
        <button type="button" onClick={handleClick}>
          3
        </button>
        <button type="button" onClick={handleClick} className="operator">
          +
        </button>
        <button type="button" onClick={handleClick} className="zero">
          0
        </button>
        <button type="button" onClick={handleClick}>
          .
        </button>
        <button type="button" onClick={handleClick} className="operator">
          =
        </button>
      </div>
    </div>
  );
};

export default Calculator;
