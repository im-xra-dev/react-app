import * as React from 'react';
import './PostList.css';
import {
  useEffect,
  useState,
  createContext,
  SetStateAction,
  Dispatch,
} from 'react';
import { PostCard } from './PostCard/PostCard';
import {
  PostDataList,
  PostListViews,
  PostListProps,
  TimelineState,
} from './types';
import {
  newTimelineState,
  queryTimelineObject,
} from '../../hooks/TimelineHook/interface';

//exports
export const TimelineContextState = createContext(null);
export type Props = { id: PostListViews; options?: PostListProps };

export function PostList(props: Props) {
  //initialize contexts
  const [message, setMessage] = useState('loading...');
  const [timelineStateData, setTimelineStateData]: [
    TimelineState,
    Dispatch<SetStateAction<TimelineState>>,
  ] = useState(newTimelineState(props.id, props.options));

  //create a scoped scroll handler
  const scopedScrollHandler = () => {
    //    calculates the distance left to scroll in px
    const E = document.documentElement;
    const winScroll = document.body.scrollTop || E.scrollTop;
    const height = E.scrollHeight - E.clientHeight;
    const dist = height - winScroll;

    if (dist < 500 && !message) {
      //load next chunk
      setMessage('loading more posts...');
      queryTimelineObject(timelineStateData, setTimelineStateData, setMessage);
    }
  };

  //On first load
  useEffect(() => {
    //query the timeline object for the first block of posts
    queryTimelineObject(timelineStateData, setTimelineStateData, setMessage);
  }, []);

  //When message changes update scope
  useEffect(() => {
    //then lazy load future posts as the user scrolls
    window.addEventListener('scroll', scopedScrollHandler, { passive: true });
    return () => {
      window.removeEventListener('scroll', scopedScrollHandler);
    };
  }, [message]);

  //timeline context with message at the bottom
  return (
    <TimelineContextState.Provider
      value={{ timelineStateData, setTimelineStateData }}
    >
      <div data-testid="post-list" className="post-tline">
        <GenerateFeed posts={timelineStateData.data} />
      </div>
      <div>
        <p>{message}</p>
      </div>
    </TimelineContextState.Provider>
  );
}

function GenerateFeed({ posts }: { posts: PostDataList }) {
  const out = [];
  for (let i = 0; i < posts.length; i++) out.push(<PostCard index={i} />);
  return <>{out}</>;
}
