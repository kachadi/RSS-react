import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import ItemsList from './ItemsList';

describe('Item component', () => {
  it('renders the Item component', () => {
    render(<ItemsList />);
    const item = screen.getAllByRole('listitem')[0];

    expect(item).toBeInTheDocument();
    expect(item).toHaveClass('item-card_wrapper');
  });
});
