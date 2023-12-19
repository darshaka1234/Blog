import React from "react";
import PostsView from "../components/clientComponents/postsView";
import Link from "next/link";

const page = () => {
  return (
    <div>
      <div className="p-10 gap-10">
        <Link href={"/post/create"}>
          <button className="btn btn-neutral">Add New Post</button>
        </Link>
        <PostsView />
      </div>
    </div>
  );
};

export default page;
