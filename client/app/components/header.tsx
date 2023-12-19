"use client";

import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();
  const handleClick = () => {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("authorId");
    router.replace("/auth/login");
  };

  return (
    <div>
      <button onClick={handleClick} className="btn btn-sm glass bg-slate-400 ">
        Log Out
      </button>
    </div>
  );
};

export default Header;
