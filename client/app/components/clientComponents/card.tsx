"use client";

import { PostType } from "@/app/types/types";
import { useRouter } from "next/navigation";
import React from "react";
import Renderhtml from "../renderHTML";

const Card = ({ post }: { post: PostType }) => {
  const router = useRouter();
  const handleClick = () => {
    router.push(`post/${post._id}`);
  };

  return (
    <div className="card w-96 bg-base-100 shadow-xl my-5 max-h-96">
      <div className="card-body">
        <h2 className="card-title">{post.title}</h2>
        <Renderhtml htmlContent={post.content} classname="h-[30%] truncate" />
        <div className="flex justify-between">
          <h4 className="font-medium">{`Author :  ${post.authorName}`}</h4>
          <div className="card-actions justify-end">
            <button onClick={handleClick} className="btn btn-sm btn-neutral">
              Read more...
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
