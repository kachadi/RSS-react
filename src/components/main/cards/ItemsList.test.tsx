import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import ItemsList from './ItemsList';

describe('ItemsList component', () => {
  it('renders the ItemList component', () => {
    render(<ItemsList />);

    const itemsList = screen.getByRole('list');

    expect(itemsList).toBeInTheDocument();
    expect(itemsList).toHaveClass('items');
  });

  it('length of item list - 8', () => {
    render(<ItemsList />);

    const itemsCount = screen.getAllByRole('listitem').length;

    expect(itemsCount).toBe(8);
  });
});
