import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from "react-router-dom";
import Shop from '../Shop';



describe('Shop', () => {
  it('displays the nav', () => {
    const state = { category: 'all'}
    
    render(<BrowserRouter><Shop/></BrowserRouter>);
    const header = screen.getByRole("navigation");
    expect(header).toBeInTheDocument();
  })


  
})