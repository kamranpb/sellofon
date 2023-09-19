import React from "react";
import { Route, Routes } from "react-router-dom";
import { Main } from "../pages/Main";
import { Details } from "../pages/Details";
import { Navbar } from "../components/Navbar";

export interface IApplicaionProps {}

export const Application: React.FC<IApplicaionProps> = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/detail" element={<Details />} />
      </Routes>{" "}
    </>
  );
};
