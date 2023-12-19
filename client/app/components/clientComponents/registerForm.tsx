"use client";

import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const RegisterForm = () => {
  const router = useRouter();

  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5001/auth/register", data);
      if (res) {
        router.replace("/auth/login");
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
      <h1 className="font-bold text-3xl mb-5">Register To MEDIA</h1>
      <form
        className="flex flex-col gap-5 mb-3"
        onSubmit={handleSubmit}
        method="post"
      >
        <div className="flex flex-col gap-2">
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            placeholder="Full Name"
            name="name"
            value={data.name}
            onChange={handleChange}
            className="input input-bordered w-full max-w-xs"
          />
        </div>
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
          Register
        </button>
      </form>
      <div className="flex justify-center gap-2">
        <p className="">{`Already have an account?`}</p>
        <Link href="/auth/login">
          <button className="text-blue-700">Login</button>
        </Link>
      </div>
    </div>
  );
};

export default RegisterForm;
