import { useEffect, useState } from 'react';
import { PostList } from "../components/PostList/types";


export function ForumPostList(feed: PostList = []): PostList {
  const [posts, setPosts]: [PostList, any] = useState(feed);

  console.log(1);

  setTimeout(() => {
    const out = [...feed, ...[{ id: 'testid', title: 'title' }]];
    setPosts(out);
  }, 1000);

  return posts;
}
