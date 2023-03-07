import React from "react";
import NavBar from "../components/NavBar";
import InnerContainer from "./InnerContainer";

const Container = ({ children }) => {
  return (
    <div className="max-w-screen-2xl m-auto bg-background-home-desktop h-screen bg-no-repeat bg-cover">
      <NavBar />
      <div className="px-[55px] py-[40px]">{children}</div>
    </div>
  );
};

export default Container;
