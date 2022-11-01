/* eslint-disable */
import React from "react";
import Button from "./Button.js";

class Row extends React.Component {
  render() {
    return (
      <div className="grid-container">
        <Button text="AC" />
        <Button text="+/-" />
        <Button text="%" />
        <Button text="&#247;" class="operator" />
        <Button text="7" />
        <Button text="8" />
        <Button text="9" />
        <Button text="x" class="operator" />
        <Button text="4" />
        <Button text="5" />
        <Button text="6" />
        <Button text="-" class="operator" />
        <Button text="1" />
        <Button text="2" />
        <Button text="3" />
        <Button text="+" class="operator" />
        <Button text="0" class="zero" />
        <Button text="." />
        <Button text="=" class="operator" />
      </div>
    );
  }
}
export default Row;
