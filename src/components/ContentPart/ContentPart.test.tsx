import { render, screen } from '@testing-library/react';
import ContentPart from './';
import * as React from 'react';

test('ContentPart component', () => {
  render(<ContentPart />);
  const linkElement = screen.getByTestId('mcp');
  expect(linkElement).toBeInTheDocument();
});
