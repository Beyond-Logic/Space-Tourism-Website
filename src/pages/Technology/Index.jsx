import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Title from "../../components/Title";

import Container from "../../layouts/Container";

const Technology = () => {
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
          ? "bg-background-technology-desktop"
          : windowWidth > 480
          ? "bg-background-technology-tablet"
          : "bg-background-technology-mobile"
      } w-full overflow-hidden`}
      style1={"pt-[40px] xl:pb-[40px] xxs:pb-[0px] pb-[104px]"}
    >
      <div className="customxl:px-[115px] lg:pt-[40px] md:pt-[40px] lg:pb-[140px] pb-0 lg:text-left text-center">
        <div className="">
          <div className="xs:px-[55px] px-[24px]">
            <Title number="03" title="Space Launch 101" />
          </div>

          <Outlet />
        </div>
      </div>
    </Container>
  );
};

export default Technology;
