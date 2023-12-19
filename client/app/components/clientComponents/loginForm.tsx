"use client";

import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const LoginForm = () => {
  const router = useRouter();
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5001/auth/login", data);
      if (res) {
        sessionStorage.setItem("token", res.data.token);
        sessionStorage.setItem("authorId", res.data.author._id);
        router.replace("/post");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (e: any) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <h1 className="font-bold text-3xl mb-5">Login To Your account</h1>
      <form className="flex flex-col gap-5 mb-3" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-2">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={data.email}
            onChange={handleChange}
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            placeholder="password"
            name="password"
            value={data.password}
            onChange={handleChange}
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <button type="submit" className="btn btn-active btn-neutral">
          Login
        </button>
      </form>
      <div className="flex justify-center gap-2">
        <p className="">{`Don't have an account?`}</p>
        <Link href="/auth/register">
          <button className="text-blue-700">Register</button>
        </Link>
      </div>
    </div>
  );
};

export default LoginForm;
