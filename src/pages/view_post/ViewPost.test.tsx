import { render, screen } from '@testing-library/react';
import * as React from 'react';
import { ViewPost } from './ViewPost';

test('page not set up', () => {
  render(<ViewPost />);
  const linkElement = screen.getByText(/_vp_/i);
  expect(linkElement).toBeInTheDocument();
});
