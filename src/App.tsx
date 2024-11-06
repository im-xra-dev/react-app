import * as React from "react";
import ProfilePage from "./pages/profile";
import Header from "./components/header";
import ContentFull from "./components/content-full";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { ViewPost } from "./pages/view_post/ViewPost";
import { ContentPart } from "./components/content-part/ContentPart";
import { PostList } from "./components/PostList/PostList";
import { SubsectionPage } from "./pages/s/s";
import { SearchPage } from "./pages/search/search";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Routes>
          {/*showing content (full length pages)*/}
          <Route path="/" element={<ContentFull/>}>
            <Route index element={<PostList id="home"/>}/>
            <Route path="search/" element={<SearchPage/>}/>
            <Route path="s/:id/" element={<SubsectionPage/>}/>
            <Route path="post/:postid/" element={<ViewPost/>}/>
            <Route path="profile/">
              <Route index element={<ProfilePage/>}/>
              <Route path=":uname/" element={<ProfilePage/>}/>
            </Route>
          </Route>
          {/*submitting content (half length pages)*/}
          <Route path="/" element={<ContentPart/>}>
            <Route path="/login"/>
            <Route path="/signup"/>
            <Route path="post/">
              <Route index element={<ProfilePage/>}/>
              <Route path=":postid/comment/" element={<ProfilePage/>}/>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
