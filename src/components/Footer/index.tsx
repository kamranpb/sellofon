import React from "react";
import logo from "./logo-purple.png";
export const Footer = () => {
  return (
    <div className="z-50 w-full border-t border-purple-300 flex justify-center bottom-0">
      <div
        className=" flex justify-between items-center text-purple-700"
        style={{ width: 922 }}
      >
        <img src={logo} alt="" className="w-32  mb-2" />
        <span className=" ">© created by kamruncode </span>
        <span className="">2023</span>
      </div>
    </div>
  );
};
