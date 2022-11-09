import React, { useState } from 'react';
import calculate from '../logic/calculate';
import Button from '../components/Buttons';

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
    <>
      <div className="container">
        <h2>Let us do some math here!</h2>
        <div className="calculator">
          <div className="result-container">
            {total}
            {operation}
            {next}
          </div>
          <div className="grid-container">
            <Button click={handleClick} text="AC" />
            <Button click={handleClick} text="+/-" />
            <Button click={handleClick} text="%" />
            <Button click={handleClick} class="operator" text="&#247;" />
            <Button click={handleClick} text="7" />
            <Button click={handleClick} text="8" />
            <Button click={handleClick} text="9" />
            <Button click={handleClick} class="operator" text="x" />
            <Button click={handleClick} text="4" />
            <Button click={handleClick} text="5" />
            <Button click={handleClick} text="6" />
            <Button click={handleClick} class="operator" text="-" />
            <Button click={handleClick} text="1" />
            <Button click={handleClick} text="2" />
            <Button click={handleClick} text="3" />
            <Button click={handleClick} class="operator" text="+" />
            <Button click={handleClick} class="zero" text="0" />
            <Button click={handleClick} text="." />
            <Button click={handleClick} class="operator" text="=" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Calculator;
