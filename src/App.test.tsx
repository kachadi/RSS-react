import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import App from './App';


describe('App component', () => {
  it('renders the App component', () => {
    render(<App />);
  });

  it('renders the App component and do not find word login at page', () => {
    render(<App />);
    expect(screen.queryByText(/login/i)).not.toBeInTheDocument();
  });
});

describe('Router', () => {
  it('renders the NotFound page if route is not handled', () => {
    window.history.pushState({}, '', '/login');

    render(<App />);
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      /not found/i,
    );
  });

  it('renders the About us page if route is about-us', () => {
    window.history.pushState({}, '', '/about-us');

    render(<App />);
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      /about us/i,
    );
  });
});
