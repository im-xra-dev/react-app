import * as React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import ProfilePage from "./pages/ProfilePage";
import Header from "./components/Header";
import ContentFull from "./components/ContentFull";
import ViewPost from "./pages/ViewPostPage";
import ContentPart from "./components/ContentPart";
import PostList from "./components/PostList";
import SubsectionPage from "./pages/SubsectionPage";
import SearchPage from "./pages/SearchPage";

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
              <Route index/>
              <Route path=":postid/comment/"/>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
