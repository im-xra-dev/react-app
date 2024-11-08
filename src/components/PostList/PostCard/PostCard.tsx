import * as React from 'react';
import { Link } from 'react-router-dom';
import { TimelineContextState } from '../PostList';
import { useContext } from 'react';
import { IMAGE_HOST } from '../../../config';

type indexObj = {index:number};

/**This function builds the forum posts into UI elements
 *
 * @param index
 * @constructor
 */
export function PostCard({ index }: indexObj) {
  const value = useContext(TimelineContextState);
  const post_id = value.timelineStateData.data[index].post_id;

  return (
    <div className="post-container-card" id={post_id} key={index}>
      <HeadTbl index={index} />
      <TitleTbl index={index} />
      <RecipeTbl index={index} />
      <ContentTbl index={index} />
      <FooterTbl index={index} />
    </div>
  );
}

/**Inserts post information into the header
 *
 * @param index
 * @constructor
 */
function HeadTbl({ index }: indexObj) {
  const value = useContext(TimelineContextState);
  const data = value.timelineStateData.data[index];

  return (
    <div className="head-tbl table">
      <ClickableProfileImage index={index} />
      <div className="info grid">
        <Link to={`/profile/${data.user_id}`} data-testid="username-lnk">
          <div className="card-view-username cell">{data.username}</div>
        </Link>
        <div className="card-view-timestamp cell">
          {formatDate(data.timestamp)}
        </div>
        <div className="card-view-section cell">
          posted to <Link to={`/s/${data.sec}`}>{data.sec}</Link>
        </div>
      </div>
      <div className="ddmu cell">TODO:ddmu</div>
    </div>
  );
}

/** Generate the profile image
 *
 * @param index
 * @constructor
 */
function ClickableProfileImage({ index }: indexObj) {
  const value = useContext(TimelineContextState);
  const user_id = value.timelineStateData.data[index].user_id;
  const avatarURL = `${IMAGE_HOST}${user_id}.png`;

  return (
    <Link
      className="cell"
      to={`/profile/${user_id}`}
      data-testid="image-lnk"
    >
      <img className="card-view-profile-pic cell" src={avatarURL} />
    </Link>
  );
}

/**Inserts the title
 *
 * @param index
 * @constructor
 */
function TitleTbl({ index }: indexObj) {
  const value = useContext(TimelineContextState);
  const title = value.timelineStateData.data[index].title;

  return (
    <div className="title-tbl table">
      <div className="card-view-title cell content-wrap">{title}</div>
      <div className="filler" />
    </div>
  );
}

/**TODO: setup recipe lazyloading
 *
 * @param index
 * @constructor
 */
function RecipeTbl({ index }: indexObj) {
  const value = useContext(TimelineContextState);
  const data = value.timelineStateData.data[index];

  return <div>{data.post_type === 1 ? 'recipe lazyload todo' : ''}</div>;
}

/** Loads the post content
 * TODO: ingredients
 *
 * @param index
 * @constructor
 */
function ContentTbl({ index }: indexObj) {
  const value = useContext(TimelineContextState);
  const content = value.timelineStateData.data[index].content;

  return (
    <div className="content-tbl table">
      <div className="post-content card-view-content cell content-wrap full">
        {content}
      </div>
      <div className="card-view-ingredients cell" />
    </div>
  );
}

/**Loads in the footer information
 *
 * @param index
 * @constructor
 */
function FooterTbl({ index }: indexObj) {
  const value = useContext(TimelineContextState);
  const data = value.timelineStateData.data[index];

  return (
    <>
      <div className="footer-tbl table">
        <div className="vote-cell ups cell">
          <div className="gui arrow up"></div>
        </div>
        <div className="vote-cell vote-txt txt cell">{data.score}</div>
        <div className="vote-cell downs cell">
          <div className="gui arrow down"></div>
        </div>
        <div className="vote-cell comms cell">
          <div className="comment-icon" />
          <div className="txt">{data.comments}</div>
        </div>
      </div>
      <div className="tags-tbl table">
        <div className="post-tags content-wrap"></div>
      </div>
    </>
  );
}

/**Date formatter
 *
 * @param timestamp
 */
function formatDate(timestamp) {
  const d = new Date(timestamp);
  const mins = d.getMinutes();
  const minText = mins < 10 ? `0${mins}` : mins;
  return `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()} at ${d.getHours()}:${minText}`;
}