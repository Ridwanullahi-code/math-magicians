import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Welcome from '../components/Welcome';

afterEach(cleanup);

describe('render welcome component without error', () => {
  test('welcome should render', () => {
    render(<Welcome />);
  });
});
