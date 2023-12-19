import React from "react";
import Header from "../components/header";

const layout = ({ children }: any) => {
  return (
    <div>
      <div className=" px-10 flex navbar bg-neutral text-neutral-content justify-between">
        <button className="btn btn-ghost text-xl">Dash Media</button>
        <Header />
      </div>
      <main>{children}</main>
    </div>
  );
};

export default layout;
