"use client";

import Post from "@/app/components/post";
import { PostType } from "@/app/types/types";
import axios from "axios";
import { useRouter } from "next/navigation";

import { useEffect, useState } from "react";

const Postpage = () => {
  const router = useRouter();
  const url = window.location.pathname;
  const id = url.slice(url.lastIndexOf("/post/") + 6);

  const [authorised, setAuthorised] = useState(false);

  const [post, setPost] = useState<any>();
  useEffect(() => {
    const getPosts = async () => {
      const { data } = await axios.get(`http://localhost:5001/post/${id}`, {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("token")}`,
        },
      });
      if (data.authorId == sessionStorage.getItem("authorId")) {
        setAuthorised(true);
      }
      setPost(data);
    };

    getPosts();
  }, [id]);

  const handleEdit = () => {
    router.replace(`${id}/edit`);
  };

  const handleDelete = async () => {
    try {
      const res = await axios.delete(`http://localhost:5001/post/${id}`, {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("token")}`,
        },
      });
      if (res) {
        router.replace("/post");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex flex-col gap-10 p-10">
      <Post post={post} />
      {authorised && (
        <div className="flex flex-col sm:flex-row gap-10">
          <button
            onClick={handleEdit}
            type="submit"
            className="btn w-48 btn-neutral"
          >
            Edit
          </button>

          <button
            onClick={handleDelete}
            type="submit"
            className="btn w-48 btn-error"
          >
            Delete
          </button>
        </div>
      )}
    </div>
  );
};

export default Postpage;
