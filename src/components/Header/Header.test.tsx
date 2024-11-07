import { render, screen } from '@testing-library/react';
import * as React from 'react';
import App from '../../App';

test('Header component initialised', () => {
  render(<App />);
  const linkElement = screen.getByTestId('Header-home');
  expect(linkElement).toBeInTheDocument();
});
