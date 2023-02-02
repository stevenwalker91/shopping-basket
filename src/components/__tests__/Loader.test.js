import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Loader from '../Loader';

describe('Loader', () => {
  it('displays the loader', () => {
    render(<Loader/>);
    const spinner = screen.getByTestId("spinner");
    expect(spinner).toBeInTheDocument();
  })
  it('loader doesnt contain content', () => {
    render(<Loader/>);
    const spinner = screen.getByTestId("spinner");
    expect(spinner).toBeEmptyDOMElement();
  })
  it('applies class to update colour when provided', () => {
    render(<Loader color="black" />);
    const spinner = screen.getByTestId("spinner");
    expect(spinner).toHaveClass("loader-black")
  })
  it('doesnt apply colour class when not provided', () => {
    render(<Loader />);
    const spinner = screen.getByTestId("spinner");
    expect(spinner).not.toHaveClass("loader-black")
  })
  
})