import React from "react";
import Post from "./post/post";
import b from "./myPost.module.css";
const MyPost = () => {
  return (
    <div>
      <div>
        <textarea name="" id="" cols="24" rows="5"></textarea>
        <button>add post</button>
        <button>remove</button>
      </div>
      <ul className={b.fatherUl}>
        <Post message="Hi its a me mario"/>
        <Post message="Litera"/>
        <Post message="I"/>
        <Post message="No"/>
        <Post message="Love industrial craft"/>
      </ul>
    </div>
  );
};
export default MyPost;
