/* eslint-disable */
import React from 'react'
import ReactDOM from 'react-dom';
import App from './App.js';
import { BrowserRouter as Router} from 'react-router-dom';

// import css files here
import "./css/App.css";
import './css/calculator.css';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root'));
