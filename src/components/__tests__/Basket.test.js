import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Basket from '../Basket';
import userEvent from '@testing-library/user-event';

const sampleData = [
  {
      "id": 2,
      "title": "iPhone X",
      "description": "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
      "price": 899,
      "discountPercentage": 17.94,
      "rating": 4.44,
      "stock": 34,
      "brand": "Apple",
      "category": "smartphones",
      "thumbnail": "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
      "images": [
          "https://i.dummyjson.com/data/products/2/1.jpg",
          "https://i.dummyjson.com/data/products/2/2.jpg",
          "https://i.dummyjson.com/data/products/2/3.jpg",
          "https://i.dummyjson.com/data/products/2/thumbnail.jpg"
      ],
      "qty": 2
  },
  {
      "id": 3,
      "title": "Samsung Universe 9",
      "description": "Samsung's new variant which goes beyond Galaxy to the Universe",
      "price": 1249,
      "discountPercentage": 15.46,
      "rating": 4.09,
      "stock": 36,
      "brand": "Samsung",
      "category": "smartphones",
      "thumbnail": "https://i.dummyjson.com/data/products/3/thumbnail.jpg",
      "images": [
          "https://i.dummyjson.com/data/products/3/1.jpg"
      ],
      "qty": 3
  },
  {
      "id": 7,
      "title": "Samsung Galaxy Book",
      "description": "Samsung Galaxy Book S (2020) Laptop With Intel Lakefield Chip, 8GB of RAM Launched",
      "price": 1499,
      "discountPercentage": 4.15,
      "rating": 4.25,
      "stock": 50,
      "brand": "Samsung",
      "category": "laptops",
      "thumbnail": "https://i.dummyjson.com/data/products/7/thumbnail.jpg",
      "images": [
          "https://i.dummyjson.com/data/products/7/1.jpg",
          "https://i.dummyjson.com/data/products/7/2.jpg",
          "https://i.dummyjson.com/data/products/7/3.jpg",
          "https://i.dummyjson.com/data/products/7/thumbnail.jpg"
      ],
      "qty": 1
  },
  {
      "id": 17,
      "title": "Tree Oil 30ml",
      "description": "Tea tree oil contains a number of compounds, including terpinen-4-ol, that have been shown to kill certain bacteria,",
      "price": 12,
      "discountPercentage": 4.09,
      "rating": 4.52,
      "stock": 78,
      "brand": "Hemani Tea",
      "category": "skincare",
      "thumbnail": "https://i.dummyjson.com/data/products/17/thumbnail.jpg",
      "images": [
          "https://i.dummyjson.com/data/products/17/1.jpg",
          "https://i.dummyjson.com/data/products/17/2.jpg",
          "https://i.dummyjson.com/data/products/17/3.jpg",
          "https://i.dummyjson.com/data/products/17/thumbnail.jpg"
      ],
      "qty": 1
  },
  {
      "id": 20,
      "title": "Freckle Treatment Cream- 15gm",
      "description": "Fair & Clear is Pakistan's only pure Freckle cream which helpsfade Freckles, Darkspots and pigments. Mercury level is 0%, so there are no side effects.",
      "price": 70,
      "discountPercentage": 16.99,
      "rating": 4.06,
      "stock": 140,
      "brand": "Fair & Clear",
      "category": "skincare",
      "thumbnail": "https://i.dummyjson.com/data/products/20/thumbnail.jpg",
      "images": [
          "https://i.dummyjson.com/data/products/20/1.jpg",
          "https://i.dummyjson.com/data/products/20/2.jpg",
          "https://i.dummyjson.com/data/products/20/3.jpg",
          "https://i.dummyjson.com/data/products/20/4.jpg",
          "https://i.dummyjson.com/data/products/20/thumbnail.jpg"
      ],
      "qty": 1
  }
]
const emptyArray = [];

describe('Basket', () => {
  it('displays the basket', () => {
    render(<Basket basketContents={sampleData}/>)
    const basket = screen.queryByText('Shopping Basket');

    expect(basket).toBeInTheDocument();
  })
  it('works when passed an empty array', () => {
    render(<Basket basketContents={emptyArray}/>)
    const basket = screen.queryByText('Shopping Basket');
    expect(basket).toBeInTheDocument();
  })
  it('displays products with a qty of 1', () => {
    render(<Basket basketContents={sampleData}/>)
    const row = screen.getByRole('row', { name: /Tree Oil 30ml/ })
    expect(row).toBeInTheDocument();
    expect(row).toContainHTML('value="1"');
  })
  it('displays products with a qty of more than 1', () => {
    render(<Basket basketContents={sampleData}/>)
    const row = screen.getByRole('row', { name: /Samsung Universe 9/ })
    expect(row).toBeInTheDocument();
    expect(row).toContainHTML('value="3"');
  })
  it('displays basket total', () => {

    render(<Basket basketContents={sampleData} />)
    expect(screen.getByText(/£7,126/)).toBeInTheDocument();
  })
  it('deducts the qty when a user changes qty', async () => {
    const changeBasketQty = jest.fn();
    render(<Basket basketContents={sampleData} changeBasketQty={changeBasketQty}/>)
    const buttons = await screen.findAllByRole('button', {name: '-'})
    const row = screen.getByRole('row', { name: /iPhone X/ })

    expect(buttons[0]).toBeInTheDocument();
    expect(row).toContainHTML('value="2"');

    userEvent.click(buttons[0]);
    expect(row).toContainHTML('value="1"');

  })
})