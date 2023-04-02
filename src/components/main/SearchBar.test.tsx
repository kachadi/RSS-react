import { describe, it } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import App from '../../App';
import styles from './SearchBar.module.css';


const testSearchValue = 'dog';

const setup = () => {
  const utils = render(<App />);
  const searchInput: HTMLInputElement = screen.getByRole('textbox');
  return {
    searchInput,
    ...utils,
  };
};

describe('SearchBar component', () => {
  it('renders the SearchBar component and find search input', () => {
    const { searchInput } = setup();
    expect(searchInput).toBeInTheDocument();
    expect(searchInput).toHaveAttribute('type', 'text');
    expect(searchInput).toHaveClass(styles.searchInput);
  });

  it('pass value to search input', () => {
    const { searchInput } = setup();
    expect(searchInput).toBeInTheDocument();

    fireEvent.change(searchInput, { target: { value: testSearchValue } });
    expect(searchInput.value).toBe(testSearchValue);
  });

  it('does not change input on search button click', () => {
    const { searchInput } = setup();
    expect(searchInput).toBeInTheDocument();

    fireEvent.change(searchInput, { target: { value: testSearchValue } });
    expect(searchInput.value).toBe(testSearchValue);
    fireEvent.click(screen.getByText('search'));
    expect(searchInput.value).toBe(testSearchValue);
  });

  it('does not change input after going to another page', () => {
    const { searchInput } = setup();
    expect(searchInput).toBeInTheDocument();

    fireEvent.change(searchInput, { target: { value: testSearchValue } });
    fireEvent.click(screen.getByText('About us'));
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('About us');

    fireEvent.click(screen.getByText('Main'));
    const newSearchInput: HTMLInputElement = screen.getByRole('textbox');
    expect(searchInput.value).toBe(newSearchInput.value);
  });
});
