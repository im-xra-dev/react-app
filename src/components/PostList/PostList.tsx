import * as React from 'react';
import './PostList.css';
import { useEffect, useState, createContext } from 'react';
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
import { useContext } from 'react';

//exports
export const TimelineContextState = createContext(null);
export type Props = {
  id: PostListViews;
  options?: PostListProps;
  mock?: { _: TimelineState };
};

/** PostList
 *
 * PostList creates a timeline context and renders that context as a list of forum Posts
 * It interfaces with the TimelineHook to query chunks of posts on init and as the user scrolls
 *
 * @param props
 * @constructor
 */
export function PostList(props: Props) {
  //initialize contexts TimelineState and string
  const [message, setMessage] = useState('loading...');
  const [timelineStateData, setTimelineStateData] = useState(
    newTimelineState(props.id, props.options),
  );

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
      queryTimelineObject(
        timelineStateData,
        setTimelineStateData,
        setMessage,
        props.mock,
      );
    }
  };

  //On first load
  useEffect(() => {
    //query the timeline object for the first block of posts
    queryTimelineObject(
      timelineStateData,
      setTimelineStateData,
      setMessage,
      props.mock,
    );
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
        <GenerateFeed />
      </div>
      <div>
        <p data-testid="postlist-state">{message}</p>
      </div>
    </TimelineContextState.Provider>
  );
}

function GenerateFeed() {
  const value = useContext(TimelineContextState);
  const posts = value.timelineStateData.data;

  const out = [];
  for (let i = 0; i < posts.length; i++)
    out.push(<PostCard key={i} index={i} />);
  return <>{out}</>;
}
