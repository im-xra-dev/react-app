import * as React from "react";
import "./profile.css";
import { useParams } from "react-router-dom";
import PostList from "../../components/PostList";
import "../../assets/css/ContentHeader.css";

export function ProfilePage() {
  //TODO when auth setup then params || authed user
  const uid: string = useParams().uname;
  const uname: string = useParams().uname;
  if (!uid) return <p>TODO: no user handle error</p>;

  //setState user obj
  /*TODO follow <form action="/API/follow_user" method="post">*/
  /*  <input style="display:none" id="userID" className="textInput" name="userID" value="12345678"/>*/
  /*  <button id="submit" type="submit">follow</button>*/
  /*</form>*/
  /*TODO edit <button style="display: none" id="edit-ProfilePage" onClick="editProfile()">Edit Profile</button>*/


  return (
    <>
      {/*<div id="ProfilePage-Header" className="content-table">*/}
      {/*  <div className="content-row">*/}
      {/*    <ProfilePage/>*/}
      {/*    <ProfileInfo/>*/}
      {/*  </div>*/}
      {/*  <div className="content-row" id="customisable">*/}
      {/*    <Bio/>*/}
      {/*    <div className="content-obj" id="ProfilePage-badges"/>*/}
      {/*  </div>*/}
      {/*</div>*/}

      <div id="users-posts">
        <div id="users-posts-header">{`${uname}s posts`}</div>
        <div id="users-posts-container">
          <PostList id="profile" options={{ id: uid }}/>
        </div>
      </div>
      {/*TODO link <div id="new-post" onClick="window.location.href='/post';">New PostData</div>*/}
    </>
  );
}

//Utilities
//TODO: implement user data and implement ProfilePage pic
function ProfilePic() {
  return (
    <div id="profile-image" className="content-obj">
      //TODO load
    </div>
  );
}

//TODO: implement user data and implement ProfilePage pic
function ProfileInfo() {
  return (
    <div className="content-obj stacked" id="stacked">
      <div id="profile-username" className="content-row">
        USERNAME
      </div>
      <div id="profile-stats" className="content-row">
        posts: - rep: -
      </div>
    </div>
  );
}

//TODO: implement user data and implement ProfilePage pic
function Bio() {
  return (
    <div id="profile-bio" className="content-obj">
      //TODO load
    </div>
  );
}
