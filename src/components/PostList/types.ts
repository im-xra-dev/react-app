import { Post } from "../../types/post";

export type PostDataType = {
  error: boolean;
  responseCode: number;
  data: PostList;
  object: any;
  recipeDataResolved: any;
};

export type PostList = [Post?];

export type Post = {
  comments: number;
  content: string
  pinned: number;
  post_id: string;
  post_type: number;
  score: number;
  sec: string;
  timestamp: string;
  title: string;
  user_id: string;
  username: string;
  value?: number
};
