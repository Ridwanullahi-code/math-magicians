import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Header from '../components/Header';
import renderer from "react-test-renderer";

afterEach(cleanup);

describe('render header component without error', () => {
  test('header should render correctly', () => {
    render(<Header />);
  });
  test("matches snapshot for new Header", () => {
    const tree = renderer.create(<Header />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
