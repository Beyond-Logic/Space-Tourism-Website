import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

import Container from "../../layouts/Container";

const Destination = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Container
      style={`${
        windowWidth > 1024
          ? "bg-background-destination-desktop"
          : windowWidth > 480
          ? "bg-background-destination-tablet"
          : "bg-background-destination-mobile"
      }`}
    >
      <div className="xl:px-[115px] lg:px-[40px] lg:pt-[40px] md:pt-[40px] pb-[118px] lg:text-left text-center">
        <div className="">
          <div className="flex gap-7 items-center md:justify-start justify-center md:mt-0 -mt-5">
            <span className="text-white opacity-20 text-[28px] leading-[4.725px]">
              01
            </span>
            <h5 className="lg:text-[28px] sm:text-xl text-base text-white ">
              Pick your destination
            </h5>
          </div>
          <Outlet />
        </div>
      </div>
    </Container>
  );
};

export default Destination;
