import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from "react-router-dom";
import Nav from '../Nav';

describe('Nav', () => {
  it('displays the nav', () => {
    render(<BrowserRouter><Nav/></BrowserRouter>);
    const header = screen.getByRole("navigation");
    expect(header).toBeInTheDocument();
  })
  it('contains a home link', () => {
    render(<BrowserRouter><Nav/></BrowserRouter>);
    const header = screen.getByRole("navigation");
    const link = screen.getByRole("link", {name: 'Home'})

    expect(header).toContainElement(link);
    expect(link).toBeVisible();
    expect(link).toHaveAttribute('href', '/')
  })
  it('contains a shop link', () => {
    render(<BrowserRouter><Nav/></BrowserRouter>);
    const header = screen.getByRole("navigation");
    const link = screen.getByRole("link", {name: 'Shop'})

    expect(header).toContainElement(link);
    expect(link).toBeVisible();
    expect(link).toHaveAttribute('href', '/shop')
  })
})