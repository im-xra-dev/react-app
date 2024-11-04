import * as React from 'react';
import './PostList.css';

export function PostList({
  id,
}: {
  id: 'home' | 'search' | 'profile' | 's'; //ID of post view
}) {
  return (
    <div data-testid="post-list" className="post-tline">
      {id} --- Loading...
    </div>
  );
}
