import React from 'react';
import { render, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Welcome from '../components/Welcome';

afterEach(cleanup);

describe('render welcome component without error', () => {
  test('welcome should render', () => {
    render(<Welcome />);
  });
  test('matches snapshot for new Header', () => {
    const tree = renderer.create(<Welcome />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
