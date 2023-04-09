import { describe, it } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import Main from '../../pages/Main';
import styles from './Item.module.css';

describe('Item component', () => {
  it('renders the Item component', async () => {
    render(<Main />);

    await waitFor(async () => {
      const item = screen.getAllByRole('listitem')[0];

      expect(item).toBeInTheDocument();
      expect(item).toHaveClass(styles.itemCardWrapper);
    });
  });
});
