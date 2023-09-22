import React from "react";
import logo from "./logo-white.png";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="z-50 w-full py-2 bg-purple-700  flex justify-center  top-0">
      <div
        className=" flex justify-between items-center"
        style={{ width: 922 }}
      >
        <Link to="/">
          <img src={logo} alt="" className="w-32  mb-2" />
        </Link>
        <span className="text-lg font-medium font-mono text-slate-100 w-36">
          Bütün elanlar
        </span>
        <span className="text-lg font-medium font-mono text-slate-100 w-36">
          Aksesuarlar
        </span>
        <span
          style={{ color: "rgb(255, 250, 255)" }}
          className="text-md ml-40 flex justify-center items-center w-36 h-9 bg-green-500 rounded-md cursor-pointer font-medium font-mono text-slate-100"
        >
          + Yeni Elan
        </span>
      </div>
    </div>
  );
};
