import { render, screen } from '@testing-library/react';
import ContentFull from './';
import * as React from 'react';

test('ContentPart component', () => {
  render(<ContentFull />);
  const linkElement = screen.getByTestId('mcf');
  expect(linkElement).toBeInTheDocument();
});
