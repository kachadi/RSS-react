import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import Main from '../../pages/Main';
import styles from './ItemsList.module.css';

describe('ItemsList component', () => {
  it('renders the ItemList component', () => {
    render(<Main />);

    const itemsList = screen.getByRole('list');

    expect(itemsList).toBeInTheDocument();
    expect(itemsList).toHaveClass(styles.items);
  });

  it('length of item list - 8', () => {
    render(<Main />);

    const itemsCount = screen.getAllByRole('listitem').length;

    expect(itemsCount).toBe(8);
  });
});
