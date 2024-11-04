import * as React from "react";
import "./PostList.css";
import { ForumPostList } from "../../hooks/getPostList";
import { useEffect, useState } from "react";
import { Simulate } from "react-dom/test-utils";
import load = Simulate.load;
import { PostCard } from "./PostCard/PostCard";
import { PostDataType, PostList } from "./types";

export function PostList({
                           id
                         }: {
  id: "home" | "search" | "profile" | "s"; //ID of post view
}) {
  // const posts = ForumPostList();
  // const posts = []
  const [posts, setPosts]: [PostDataType, any] = useState({
    error: false,
    responseCode: -1,
    data: [],
    object: "",
    recipeDataResolved: ""
  });
  // const [loadMore, setLoadMore]: [boolean, any] = useState(true);

  //doEffectStuff

  useEffect(() => {
    //i need to load posts initially
    // POST request using fetch inside useEffect React hook
    const requestOptions = {
      method: "POST",
      // headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ timeline: true, xml: false })
    };
    fetch("http://localhost:8081/API/get-posts", requestOptions)
      .then((response) => response.json())
      .then(setPosts);
    }, []);

  // console.log(`iter${iter}`);
  // const loadMore = false;

  // useEffect(() => {
  // }, [iter]);
  console.log(posts);

  return (
    <div data-testid="post-list" className="post-tline">
      {posts.data.length === 0 ? "Loading..." : <GenerateFeed posts={posts.data}/>}
    </div>
  );
}

function GenerateFeed({posts} : {posts:PostList}) {
  const out = [];
  for(let i = 0; i < posts.length; i++)
    out.push(<PostCard data={posts[i]}/>);
  return <>{out}</>
}

function doEffectStuff() {
  // useEffect(() => {
  //   const handleScroll = () => {
  //     const E = document.documentElement;
  //     const winScroll = document.body.scrollTop || E.scrollTop;
  //     const height = E.scrollHeight - E.clientHeight;
  //     const dist = height - winScroll;
  //
  //     console.log({ dist, loadMore });
  //     if (dist < 500 && loadMore) {
  //       setLoadMore(false);
  //       console.log(1.2);
  //       setTimeout(() => {
  //         const out = [...posts, ...[{ id: "testid", title: "title" }]];
  //         setLoadMore(true);
  //         setPosts(out);
  //       }, 1000);
  //     }
  //   };
  //
  //   window.addEventListener("scroll", handleScroll, { passive: true });
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);
}
