import * as React from 'react';
// import "./ProfilePage.css";
import { useParams } from 'react-router-dom';
import PostList from '../../components/PostList';
import '../../assets/css/ContentHeader.css';

export function SubsectionPage() {
  const sec: string = useParams().id;
  if (!sec) return <p>TODO: handle error</p>;

  return (
    <>
      {/*<div id="content-Header" className="content-table">*/}

      <div id="s-posts">
        <div id="users-posts-header">{`${sec}`}</div>
        <div id="s-posts-container">
          <PostList id="s" options={{ id: sec }} />
        </div>
      </div>
      {/*TODO link <div id="new-post" onClick="window.location.href='/post';">New PostData</div>*/}
    </>
  );
}
