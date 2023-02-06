import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Products from '../Products';

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

describe('Product List', () => {
  it('returns a list of products and displays a heading', async () => {
    render(<Products category="lighting"/>);

    await window.fetch();
    expect(await screen.findByRole('heading', {name: 'lighting'})).toBeInTheDocument();
  })

  it('displays all when catgeory is omitted', async () => {
    render(<Products category="all"/>);

    await window.fetch();
    expect(await screen.findByRole('heading', {name: 'all'})).toBeInTheDocument();
  })

  it('shows the product details', async () => {
    render(<Products category="all"/>);
    await window.fetch();

    expect(await screen.findByRole('img')).toBeInTheDocument();
    expect(await screen.findByText('lighting ceiling kitchen')).toBeInTheDocument();
    expect(await screen.findByText('£30')).toBeInTheDocument();
    expect(await screen.findByRole('img')).toHaveAttribute('alt', 'Wholesale slim hanging decorative kid room lighting ceiling kitchen chandeliers pendant light modern');
  })


})