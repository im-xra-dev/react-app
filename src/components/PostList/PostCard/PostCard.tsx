import * as React from "react";
import { Post } from "../types";
import { Link } from "react-router-dom";

export function PostCard({ data }: { data: Post }) {
  return <Link to={`/post/${data.post_id}`}>
    <div className="post-container-card" id={data.post_id}>
      <HeadTbl data={data}/>
      <TitleTbl data={data}/>
      <RecipeTbl data={data}/>
      <ContentTbl data={data}/>
      <FooterTbl data={data}/>
    </div>
  </Link>;
}

function ClickableProfileImage({ data }) {
  const style = `http://localhost:8081/src/img/profile/users/${data.user_id}.png`;
  return <Link className="cell" to={`/profile/${data.username}`} data-testid="image-lnk">
    <img className="card-view-profile-pic cell" src={style}/>
  </Link>;
}

function HeadTbl({ data }) {
  return <div className="head-tbl table">
    <ClickableProfileImage data={data}/>
    <div className="info grid">
      <Link to={`/profile/${data.username}`} data-testid="username-lnk">
        <div className="card-view-username cell">{data.username}</div>
      </Link>
      <div className="card-view-timestamp cell">{formatDate(data.timestamp)}</div>
      <div className="card-view-section cell">
        posted to <Link to={`/s/${data.sec}`}>{data.sec}</Link>
      </div>
    </div>
    <div className="ddmu cell">TODO:ddmu</div>
  </div>;
}

function formatDate(timestamp) {
  const d = new Date(timestamp);
  const mins = d.getMinutes();
  const minText = mins < 10 ? `0${mins}` : mins;
  return `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()} at ${d.getHours()}:${minText}`;
}


function TitleTbl({ data }) {
  return <div className="title-tbl table">
    <div className="card-view-title cell content-wrap">{data.title}</div>
    <div className="filler"/>
  </div>;
}

function RecipeTbl({ data }) {
  return <div>{data.post_type === 1 ? "recipe lazyload todo" : ""}</div>;
}

function ContentTbl({ data }) {
  return <div className="content-tbl table">
    <div className="post-content card-view-content cell content-wrap full">{data.content}</div>
    <div className="card-view-ingredients cell"/>
  </div>;
}

function FooterTbl({ data }) {
  return <>
    <div className="footer-tbl table">
      <div className="vote-cell ups cell">
        <div className="gui arrow up"></div>
      </div>
      <div className="vote-cell vote-txt txt cell">{data.score}</div>
      <div className="vote-cell downs cell">
        <div className="gui arrow down"></div>
      </div>
      <div className="vote-cell comms cell">
        <div className="comment-icon"/>
        <div className="txt">{data.comments}</div>
      </div>
    </div>
    <div className="tags-tbl table">
      <div className="post-tags content-wrap"></div>
    </div>
  </>;
}

