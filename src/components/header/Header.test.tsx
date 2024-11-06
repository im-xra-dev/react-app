import { render, screen } from '@testing-library/react';
import * as React from 'react';
import App from '../../App';

test('ContentHeader component initialised', () => {
  render(<App />);
  const linkElement = screen.getByTestId('header-home');
  expect(linkElement).toBeInTheDocument();
});
