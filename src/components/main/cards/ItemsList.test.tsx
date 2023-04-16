import { describe, it } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import Main from '../../pages/Main';
import styles from './ItemsList.module.css';
import addReduxProvider from '../../../test-utils/addReduxProvider';

describe('ItemsList component', () => {
  it('renders the ItemList component', async () => {
    render(addReduxProvider(<Main />));

    await waitFor(async () => {
      const itemsList = screen.getByTestId('cards');

      expect(itemsList).toBeInTheDocument();
      expect(itemsList).toHaveClass(styles.items);
    });
  });
});
