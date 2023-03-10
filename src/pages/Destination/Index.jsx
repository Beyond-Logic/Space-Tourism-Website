import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Title from "../../components/Title";

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
      style1="xs:px-[55px] px-[24px] py-[40px]"
    >
      <div className="xl:px-[115px] lg:px-[40px] lg:pt-[40px] md:pt-[40px] pb-[118px] lg:text-left text-center">
        <div className="">
          <Title number="01" title="Pick Your Destination" />
          <Outlet />
        </div>
      </div>
    </Container>
  );
};

export default Destination;
