"use client";

import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./card";
import { PostType } from "@/app/types/types";

const PostsView = () => {
  const [posts, setPosts] = useState<PostType[]>([]);
  useEffect(() => {
    const getPosts = async () => {
      const { data } = await axios.get("http://localhost:5001/post", {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("token")}`,
        },
      });

      setPosts(data);
    };

    getPosts();
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
      {posts.map((post) => (
        <Card post={post} key={post._id} />
      ))}
    </div>
  );
};

export default PostsView;
