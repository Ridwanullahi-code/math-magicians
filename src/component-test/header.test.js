import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Header from '../components/Header';

afterEach(cleanup);

describe('render header component without error', () => {
  test('header should render correctly', () => {
    render(<Header />);
  });
});
