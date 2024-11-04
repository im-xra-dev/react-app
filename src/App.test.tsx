import { render, screen } from '@testing-library/react';
import App from './App';
import * as React from 'react';

test('page', () => {
  render(<App />);
  const linkElement = screen.getByText(/TODO/i);
  expect(linkElement).toBeInTheDocument();
});
