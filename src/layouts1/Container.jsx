import React from "react";
import NavBar from "../components/NavBar";

const Container = ({ children, style }) => {
  return (
    <div
      className={`max-w-screen-2xl m-auto ${style} h-full bg-no-repeat bg-cover`}
    >
      <NavBar />
      <div className="xs:px-[55px] px-[24px] py-[40px]">{children}</div>
    </div>
  );
};

export default Container;
