"use client";

import axios from "axios";
import JoditEditor from "jodit-react";
import { useRouter, redirect } from "next/navigation";
import { useLayoutEffect, useState } from "react";

const EditPost = () => {
  const [data, setData] = useState({
    title: "",
    content: "",
    authorName: "",
    authorId: "",
  });

  const router = useRouter();
  const handleChange = (e: any) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleEditor = (newContent: string) => {
    setData({ ...data, content: newContent });
  };

  useLayoutEffect(() => {
    const getPosts = async () => {
      const url = window.location.pathname;
      const id = url.match(/\/post\/(.*?)\/edit/);

      const { data } = await axios.get(
        `http://localhost:5001/post/${id?.[1]}`,
        {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem("token")}`,
          },
        }
      );
      if (data.authorId != sessionStorage.getItem("authorId")) {
        router.push("/post");
      }
      setData(data);
    };

    getPosts();
  }, [router]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const url = window.location.pathname;
    const id = url.match(/\/post\/(.*?)\/edit/);

    try {
      const res = await axios.patch(
        `http://localhost:5001/post/${id?.[1]}`,
        data,
        {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem("token")}`,
          },
        }
      );
      if (res) {
        router.push("/post");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="p-10 gap-10">
      <h1 className="font-bold text-3xl mb-5">New Post</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-10">
        <div className="flex flex-col gap-2 ">
          <label htmlFor="name">Title</label>
          <input
            type="text"
            placeholder="Title"
            name="title"
            value={data.title}
            onChange={handleChange}
            className="input input-bordered w-full md:w-[50%]"
          />
        </div>
        <div className=" w-full md:w-[50%]  ">
          <JoditEditor
            value={data.content}
            onBlur={(newContent) => handleEditor(newContent)}
          />
        </div>
        <button type="submit" className="btn btn-active btn-neutral w-48">
          Save
        </button>
      </form>
    </div>
  );
};

export default EditPost;
