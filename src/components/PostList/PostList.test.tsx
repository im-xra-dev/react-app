import { render, screen } from '@testing-library/react';
import * as React from 'react';
import { PostList } from './PostList';

test('PostList component loading', () => {
  render(<PostList id={'home'} />);
  const linkElement = screen.getByTestId('post-list');
  expect(linkElement).toBeInTheDocument();
});
