/* eslint-disable */
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Home from './pages/Home';
import Calculator from './pages/Calculator';
import Quote from './pages/Quote';

class App extends React.PureComponent {
  render() {
    return (
      <div>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/quote" element={<Quote />} />
        </Routes>
      </div>
    );
  }
}
export default App;
