import React from "react";
import NavBar from "../components/NavBar";

const Container = ({ children, style, style1 }) => {
  return (
    <div
      className={`max-w-screen-2xl m-auto ${style} h-full bg-no-repeat bg-cover relative`}
    >
      <NavBar />
      <div className={`${style1}`}>{children}</div>
    </div>
  );
};

export default Container;
