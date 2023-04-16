import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

import App from './App';
import addReduxProvider from './test-utils/addReduxProvider';

describe('App component', () => {
  it('should render App component', () => {
    render(addReduxProvider(<App />));
    expect(screen.getByText(/search/i)).toBeInTheDocument();
  });
});

describe('test Router', () => {
  it('renders the NotFound page if route is not handled', () => {
    window.history.pushState({}, '', '/login');

    render(addReduxProvider(<App />));
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/not found/i);
  });

  it('renders the About us page if route is about-us', () => {
    window.history.pushState({}, '', '/about-us');

    render(addReduxProvider(<App />));
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/about us/i);
  });

  it('renders the Add new form page if route is new-word', () => {
    window.history.pushState({}, '', '/new-word');

    render(addReduxProvider(<App />));
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/new word/i);
  });
});
