import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import AboutUs from './AboutUs';

describe('AboutUs component', () => {
  it('renders the About us component', () => {
    render(<AboutUs />);
  });

  it('find heading', () => {
    render(<AboutUs />);
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('About us');
  });

  it('find lorem text', () => {
    render(<AboutUs />);
    expect(screen.getByText(/Lorem/i)).toBeInTheDocument();
  });

  it('find about-us_wrapper class', () => {
    const { container } = render(<AboutUs />);

    const wrapper = container.getElementsByClassName('about-us_wrapper');

    expect(wrapper).toBeTruthy();
  });
});
