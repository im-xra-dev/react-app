export type TimelineState = {
  error: boolean;
  responseCode: number;
  data: PostDataList;
  object: any;
  recipeDataResolved: any;
};

export type PostDataList = [PostData?];

export type PostData = {
  comments: number;
  content: string;
  pinned: number;
  post_id: string;
  post_type: number;
  score: number;
  sec: string;
  timestamp: string;
  title: string;
  user_id: string;
  username: string;
  value?: number;
};

export type PostListViews = 'home' | 'search' | 'profile' | 's';

export type PostListProps = { id?: string };

export type tlineObj = {
  iter: number;
  users: { [key: string]: tlineStructure };
  secs: { [key: string]: tlineStructure };
  prio_usr: [];
  reco_usr: [];
  prio_sec: [];
  reco_sec: [];
  promo: [];
};

export type tlineStructure = {
  date?: Date | number;
  actv?: number;
  _?: number;
};
