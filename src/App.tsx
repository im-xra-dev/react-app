import * as React from "react";
import IndexPage from "./pages/index";
import Header from "./components/header";
import {
  Routes, Route, BrowserRouter
} from "react-router-dom";
import { ViewPost } from "./pages/view_post/page";

function App() {
  return (
    <div className="App">
      <Header test={"yes"}></Header>

      <BrowserRouter>
        <Routes>
        <Route path="/" element={<IndexPage test="yeet"/>}/>
        <Route path="/post/:postid" element={<ViewPost/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
