import { describe, it } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Main from '../../pages/Main';

const existingInAPIValue = 'cat';

const setup = () => {
  const utils = render(<Main />);

  const searchInput: HTMLInputElement = screen.getByRole('textbox');

  const searchBtn = screen.getByRole('button', { name: 'search' });

  return { searchInput, searchBtn, ...utils };
};

describe('ItemDescription component', () => {
  it('renders ItemDescription component', async () => {
    const { searchInput, searchBtn } = setup();

    await userEvent.type(searchInput, existingInAPIValue);

    await userEvent.click(searchBtn);

    await waitFor(async () => {
      const catCard = screen.getByText(/Cat/i);

      expect(catCard).toBeTruthy();

      await userEvent.click(catCard);

      expect(screen.findByText(/Examples of using:/i)).toBeTruthy();
      expect(screen.findByText(/Other forms:/i)).toBeTruthy();
      expect(screen.findByText(/Cool!/i)).toBeTruthy();
    });

    expect(screen.getByTestId('cards')).toBeTruthy();
  });
});
