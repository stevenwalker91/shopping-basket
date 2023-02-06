import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Shop from '../Shop';

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useLocation: () => ({
    "pathname": "/shop/mens-shirts",
    "search": "",
    "hash": "",
    "state": {
        "category": "mens-shirts"
    },
    "key": "yec0w128"
  })
}));

const mockChildComponent = jest.fn();
jest.mock("../Products", () => (props) => {
  mockChildComponent(props);
  return <mock-childComponent />;
});

describe('Shop', () => {
  it('displays the nav', () => {
    render(<Shop/>);
    const header = screen.getByRole("navigation");
    expect(header).toBeInTheDocument();
  })
  it('passes correct category to Products component', () => {
    render(<Shop/>);

    expect(mockChildComponent).toHaveBeenCalledWith(
      expect.objectContaining({
        category: "mens-shirts"
      })
    );
  })

  
})