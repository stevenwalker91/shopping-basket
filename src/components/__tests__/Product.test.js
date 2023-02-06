import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import Product from '../Product';

const oldFetch = window.fetch;
beforeEach(() => {
  window.fetch = jest.fn(async () =>
    Promise.resolve({
      json: () => Promise.resolve({
      "products": [
          {
              "id": 96,
              "title": "lighting ceiling kitchen",
              "description": "Wholesale slim hanging decorative kid room lighting ceiling kitchen chandeliers pendant light modern",
              "price": 30,
              "discountPercentage": 14.89,
              "rating": 4.83,
              "stock": 96,
              "brand": "lightingbrilliance",
              "category": "lighting",
              "thumbnail": "https://i.dummyjson.com/data/products/96/thumbnail.jpg",
              "images": [
                  "https://i.dummyjson.com/data/products/96/1.jpg",
                  "https://i.dummyjson.com/data/products/96/2.jpg",
                  "https://i.dummyjson.com/data/products/96/3.jpg",
                  "https://i.dummyjson.com/data/products/96/4.jpg",
                  "https://i.dummyjson.com/data/products/96/thumbnail.jpg"
              ]
          }
        ],
        "total": 5,
        "skip": 0,
        "limit": 5
     }),
    })
  );
});

afterEach(() => {
  window.fetch = oldFetch;
});

const product = {
  price : 41,
  thumbnail : "https://i.dummyjson.com/data/products/26/thumbnail.jpg",
  title: "Plant Hanger For Home",
  description : "Boho Decor Plant Hanger For Home Wall Decoration Macrame Wall Hanging Shelf"
}

describe('Product', () => {
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