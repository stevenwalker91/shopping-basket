import React from 'react';
import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from "react-router-dom";
import Sidebar from '../Sidebar';

describe('Sidebar', () => {
  it('displays the sidebar', () => {
    render(<BrowserRouter><Sidebar/></BrowserRouter>);
    const header = screen.getByRole("navigation");
    expect(header).toBeInTheDocument();
  })
  it('removes the loader', async () => {
    render(<BrowserRouter><Sidebar/></BrowserRouter>);
    await waitForElementToBeRemoved(() => screen.queryByTestId("spinner"));
  })

  it('makes the request to the API', async () => {
    jest.spyOn(global, 'fetch').mockImplementation(() => Promise.resolve({
        json: () => Promise.resolve([
          'electronics',
          'clothing',
          'shoes',
          'sports',
          'Automotive'
        ])
      }));
    
    render(<BrowserRouter><Sidebar/></BrowserRouter>);

    const electronics = await screen.findByText('electronics');
    const clothing = await screen.findByText('clothing');
    const shoes = await screen.findByText('shoes');
    const sports = await screen.findByText('sports');
    const automotive = await screen.findByText('Automotive');
    expect(electronics).toBeInTheDocument();
    expect(clothing).toBeInTheDocument();
    expect(sports).toBeInTheDocument();
    expect(shoes).toBeInTheDocument();
    expect(automotive).toBeInTheDocument();

    global.fetch.mockClear();
  })
})