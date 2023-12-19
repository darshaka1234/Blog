"use client";

import axios from "axios";
import JoditEditor from "jodit-react";
import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useState } from "react";

const CretePost = () => {
  const [data, setData] = useState({ title: "", content: "" });
  const router = useRouter();
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleEditor = (newContent: string) => {
    setData({ ...data, content: newContent });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const allData = { ...data, authorId: sessionStorage.getItem("authorId") };
    try {
      const res = await axios.post("http://localhost:5001/post", allData, {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("token")}`,
        },
      });
      if (res) {
        router.push("/post/");
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
          Create
        </button>
      </form>
    </div>
  );
};

export default CretePost;
