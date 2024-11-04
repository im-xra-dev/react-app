import { useEffect, useState } from "react";
import { Post } from "../types/post";

export type PostList = [Post?]

export function ForumPostList(feed: PostList = []): PostList {
  const [posts, setPosts]: [PostList, any] = useState(feed);

  console.log(1);

  setTimeout(() => {
    const out = [...feed, ...[{ id: "testid", title: "title" }]];
    setPosts(out);
  }, 1000);

  return posts;
}