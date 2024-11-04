import * as React from 'react';
import ProfilePage from './pages/profile';
import Header from './components/header';
import ContentFull from './components/content-full';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { ViewPost } from './pages/view_post/ViewPost';
import { ContentPart } from './components/content-part/ContentPart';
import { PostList } from './components/PostList/PostList';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          {/*Full length pages*/}
          <Route path="/" element={<ContentFull />}>
            <Route index element={<PostList id="home" />} />
            <Route path="search/" element={<PostList id="search" />} />
            <Route path="s/:id/" element={<PostList id="s" />} />
            <Route path="profile/">
              <Route index element={<ProfilePage user="TODO-me" />} />
              <Route path=":uid/" element={<ProfilePage user="TODO" />} />
            </Route>
            <Route path="post/:postid/" element={<ViewPost />} />
          </Route>
          {/*Half length pages*/}
          <Route path="/" element={<ContentPart />}>
            <Route path="post/">
              <Route index element={<ProfilePage user="post new hi" />} />
              <Route
                path=":postid/comment/"
                element={<ProfilePage user="comment new hi" />}
              />
            </Route>
            <Route path="/login" />
            <Route path="/signup" />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
