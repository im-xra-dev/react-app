import * as React from 'react';
// import "./ProfilePage.css";
import { useParams } from 'react-router-dom';
import PostList from '../../components/PostList';
import '../../assets/css/ContentHeader.css';

export function SearchPage() {
  //TODO when auth then params || auth
  // const sec: string = useParams().id;
  // if (!sec) return <p>TODO: handle error</p>;

  return (
    <>
      {/*<div id="content-Header" className="content-table">*/}

      <div id="s-posts">
        <div id="users-posts-header">{`Search page not setup`}</div>
        <div id="s-posts-container">
          <PostList id="search" options={{ id: 'TODO' }} />
        </div>
      </div>
    </>
  );
}
