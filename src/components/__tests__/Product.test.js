import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
//import userEvent from '@testing-library/user-event';
import Product from '../Product';

const product = {
  price : 41,
  thumbnail : "https://i.dummyjson.com/data/products/26/thumbnail.jpg",
  title: "Plant Hanger For Home",
  description : "Boho Decor Plant Hanger For Home Wall Decoration Macrame Wall Hanging Shelf"
}

describe('Product product title', () => {
  it('displays the title', () => {
    render(<Product product={product} />);
    const field = screen.getByText("Plant Hanger For Home");
    expect(field.textContent).toBe('Plant Hanger For Home')
  })
  it('displays the price', () => {
    render(<Product product={product} />);
    const field = screen.getByText("£41");
    expect(field.textContent).toBe('£41')
  })
  it('contains the image', () => {
    render(<Product product={product} />);
    const image = screen.getByAltText("Boho Decor Plant Hanger For Home Wall Decoration Macrame Wall Hanging Shelf");
    expect(image.src).toContain('https://i.dummyjson.com/data/products/26/thumbnail.jpg')
  })
})