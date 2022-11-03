/* eslint-disable */
import React from 'react';

const Button = (props) => (
  <button type="button" className={props.class} onClick={props.click}>
    {props.text}
  </button>
);

export default Button;
