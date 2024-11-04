import * as React from 'react';

export type ForumPostData = {
  id: string; //ID of post
};

export function PostCard({ id }: ForumPostData) {
  return <>{id}</>;
}
