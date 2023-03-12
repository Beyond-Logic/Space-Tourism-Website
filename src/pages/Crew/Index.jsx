import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Title from "../../components/Title";

import Container from "../../layouts/Container";

const Crew = () => {
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
          ? "bg-background-crew-desktop"
          : windowWidth > 480
          ? "bg-background-crew-tablet"
          : "bg-background-crew-mobile"
      } w-full overflow-hidden`}
      style1={
        " xs:px-[55px] px-[24px] pt-[40px] xl:pb-[40px] xxs:pb-[0px] pb-[104px]"
      }
    >
      <div className="xl:px-[115px] lg:pt-[40px] md:pt-[40px] lg:pb-[140px] pb-0 lg:text-left text-center">
        <div className="">
          <Title number="02" title="Meet Your Crew" />
          <Outlet />
        </div>
      </div>
    </Container>
  );
};

export default Crew;
