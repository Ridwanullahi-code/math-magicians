import React from 'react';
import { render, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Button from '../components/Buttons';

afterEach(cleanup);

describe('test for button component', () => {
  test('button should render without error', () => {
    render(<Button />);
  });
  test('matches snapshot for new button', () => {
    const tree = renderer.create(<Button />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
