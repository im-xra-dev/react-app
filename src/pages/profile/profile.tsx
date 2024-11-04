import * as React from 'react';
import { PostList } from '../../components/PostList/PostList';
import './profile.css';

export function ProfilePage({ user }: { user: string }) {
  return (
    <>
      {/*TODO profile table as module; re-use as s categories*/}
      <div id="profile-header" className="profile-table">
        <div className="profile-row">
          <div id="profile-image" className="profile-obj">
            //TODO load
          </div>
          <div className="profile-obj" id="stacked">
            <div id="profile-username" className="profile-row">
              USERNAME
            </div>
            <div id="profile-stats" className="profile-row">
              posts: - rep: -
            </div>
          </div>
        </div>
        <div className="profile-row" id="customisable">
          <div className="profile-obj" id="profile-bio">
            TODO load
          </div>
          <div className="profile-obj" id="profile-badges">
            {/*TODO follow <form action="/API/follow_user" method="post">*/}
            {/*  <input style="display:none" id="userID" className="textInput" name="userID" value="12345678"/>*/}
            {/*  <button id="submit" type="submit">follow</button>*/}
            {/*</form>*/}
            <div>
              {/*TODO edit <button style="display: none" id="edit-profile" onClick="editProfile()">Edit Profile</button>*/}
            </div>
          </div>
        </div>
      </div>

      <div id="users-posts">
        <div id="users-posts-header">{`${user}s posts`}</div>
        <div id="users-posts-container">
          <PostList id="profile" />
        </div>
      </div>
      {/*TODO link <div id="new-post" onClick="window.location.href='/post';">New Post</div>*/}
    </>
  );
}
