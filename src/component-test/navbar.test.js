import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Navbar from '../component-test/__mock__/Navbar';

afterEach(cleanup);

describe('render navbar component without error', () => {
  test('navbar should render correctly', () => {
    render(<Navbar />);
  });
});
