import { describe, it } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Main from './Main';

const notExistingInAPIValue = 'abcdefghijklmnopqrstuvwxyz';

const setup = () => {
  const utils = render(<Main />);

  const searchInput: HTMLInputElement = screen.getByRole('textbox');

  const searchBtn = screen.getByRole('button', { name: 'search' });

  return { searchInput, searchBtn, ...utils };
};

describe('Main page component', () => {
  it('renders the Main component', () => {
    render(<Main />);
  });

  it('renders all cards when searching value is empty string', async () => {
    const { searchBtn } = setup();
    await userEvent.click(searchBtn);

    expect(screen.getByTestId('loader')).toBeInTheDocument();

    await waitFor(() => {
      const list = screen.getByTestId('cards');

      expect(list).toBeInTheDocument();

      const cards = list.getElementsByTagName('li');

      expect(cards.length).toBe(8);

      const paginate = screen.getByTestId('paginate');

      expect(paginate).toBeInTheDocument();
    });
  });

  it('renders not found message if value is not existing in API', async () => {
    const { searchInput, searchBtn } = setup();

    await userEvent.type(searchInput, notExistingInAPIValue);

    await userEvent.click(searchBtn);

    await waitFor(() => expect(screen.findByText(/No Results Found/i)).toBeTruthy());
  });
});
