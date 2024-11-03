import * as React from 'react';
import {useParams} from "react-router-dom";

export function ViewPost() {
  const postid: string = useParams().postid;
  return <div className="App">vp {postid}</div>;
}
