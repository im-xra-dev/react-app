import * as React from 'react';
import { Link } from 'react-router-dom';
import { TimelineContextState } from '../PostList';
import { useContext } from 'react';
import { IMAGE_HOST } from '../../../config';

export function PostCard({ index }: { index: number }) {
  const value = useContext(TimelineContextState);
  const SinglePost = value.timelineStateData.data[index];

  return (
    // <Link to={`/post/${SinglePost.post_id}`}>
    <div className="post-container-card" id={SinglePost.post_id} key={index}>
      <HeadTbl data={SinglePost} />
      <TitleTbl data={SinglePost} />
      <RecipeTbl data={SinglePost} />
      <ContentTbl data={SinglePost} />
      <FooterTbl data={SinglePost} />
    </div>
    // </Link>
  );
}

function ClickableProfileImage({ data }) {
  const avatarURL = `${IMAGE_HOST}${data.user_id}.png`;
  return (
    <Link
      className="cell"
      to={`/profile/${data.user_id}`}
      data-testid="image-lnk"
    >
      <img className="card-view-profile-pic cell" src={avatarURL} />
    </Link>
  );
}

function HeadTbl({ data }) {
  return (
    <div className="head-tbl table">
      <ClickableProfileImage data={data} />
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

function formatDate(timestamp) {
  const d = new Date(timestamp);
  const mins = d.getMinutes();
  const minText = mins < 10 ? `0${mins}` : mins;
  return `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()} at ${d.getHours()}:${minText}`;
}

function TitleTbl({ data }) {
  return (
    <div className="title-tbl table">
      <div className="card-view-title cell content-wrap">{data.title}</div>
      <div className="filler" />
    </div>
  );
}

function RecipeTbl({ data }) {
  return <div>{data.post_type === 1 ? 'recipe lazyload todo' : ''}</div>;
}

function ContentTbl({ data }) {
  return (
    <div className="content-tbl table">
      <div className="post-content card-view-content cell content-wrap full">
        {data.content}
      </div>
      <div className="card-view-ingredients cell" />
    </div>
  );
}

function FooterTbl({ data }) {
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
