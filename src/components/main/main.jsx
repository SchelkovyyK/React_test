import React from "react";
import MyPost from "./MyPosts/myPost";
import o from "./main.module.css";

const Main = () => {
  return (
    <div className={o.main}>
      <div>
        <img
          src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D"
          alt=""
        />
      </div>
      <MyPost />
    </div>
  );
};
export default Main;
