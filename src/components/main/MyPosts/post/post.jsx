import React from "react";
import b from "./post.module.css";
const Post = (props) => {
  return (
        <li>
          <img src="https://cdn-icons-png.flaticon.com/512/206/206075.png" alt="bucket"></img>
          <p>{props.message}</p>
          <button>like</button>
        </li>
  );
};
export default Post;
