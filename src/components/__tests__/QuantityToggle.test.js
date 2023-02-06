import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import QuantityToggle from '../QuantityToggle';


describe('Quantity Toggle', () => {
  it('displays buttons to change the qty', async () => {
    render(<QuantityToggle/>);

    expect(await screen.findByRole('button', {name: '+'})).toBeInTheDocument();
    expect(await screen.findByRole('button', {name: '-'})).toBeInTheDocument();
    expect(await screen.findByLabelText('Quantity')).toHaveValue(1);

  })
  it('correctly increases the qty', async () => {
    render(<QuantityToggle/>);
    const value = await screen.findByLabelText('Quantity');
    const button = await screen.findByRole('button', {name: '+'});

    userEvent.click(button);
    expect(value).toHaveValue(2);

    for (let i = 0; i < 5; i++) {
      userEvent.click(button);
    }
    expect(value).toHaveValue(7);
  })

  it('correctly decreases the qty', async () => {
    render(<QuantityToggle/>);
    const value = await screen.findByLabelText('Quantity');
    const addButton = await screen.findByRole('button', {name: '+'});
    const minusButton = await screen.findByRole('button', {name: '-'});

    for (let i = 0; i < 5; i++) {
      userEvent.click(addButton);
    }
    userEvent.click(minusButton);
    expect(value).toHaveValue(5);
    for (let i = 0; i < 4; i++) {
      userEvent.click(minusButton);
    }
    expect(value).toHaveValue(1);
  })

  it('doesnt allow you to have a negative qty', async () => {
    render(<QuantityToggle/>);
    const value = await screen.findByLabelText('Quantity');
    const minusButton = await screen.findByRole('button', {name: '-'});

    userEvent.click(minusButton);
    userEvent.click(minusButton);

    expect(value).toHaveValue(0);
    expect(minusButton).toHaveAttribute('disabled');
  })

  it('doesnt show add btn if not provided', async () => {
    render(<QuantityToggle/>);
    const value = await screen.findByLabelText('Quantity');
    expect(value).toBeInTheDocument();
    expect(screen.queryByRole('button', {name: 'Add'})).not.toBeInTheDocument();
  })
  it('show add btn if provided', async () => {
    render(<QuantityToggle toggleType="add" />);
    expect(await screen.findByRole('button', {name: 'Add'})).toBeInTheDocument();
  })
})