import React, { useEffect, useState } from "react";
import Container from "../layouts/Container";
import { Link } from "react-router-dom";

const Home = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <>
      <Container
        style={`${
          windowWidth > 1024
            ? "bg-background-home-desktop"
            : windowWidth > 480
            ? "bg-background-home-tablet"
            : "bg-background-home-mobile"
        }`}
      >
        <div className="flex lg:flex-row flex-col lg:justify-between justify-center lg:items-end xl:px-[115px] lg:px-[40px] pt-[151px] pb-[131px] lg:text-left text-center">
          <div className="flex flex-col gap-6 ">
            <h5 className="lg:text-[28px] md:text-[20px] text-[16px]">
              SO, YOU WANT TO TRAVEL TO
            </h5>
            <h1 className="md:text-[150px] xxs:text-[80px] text-[40px]">
              SPACE
            </h1>
            <p className="max-w-[444px] w-full text-secondary lg:m-0 m-auto">
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience!
            </p>
          </div>

          <div className="circle-container mt-[150px]">
            <div
              className="outer-circle relative rounded-full md:px-[200px] md:py-[200px] py-[120px] px-[120px] lg:m-0 m-auto"
              style={{
                backgroundColor: isHovered ? "#000" : "transparent",
                opacity: isHovered ? "0.2" : "1",
                mixBlendMode: "normal",
              }}
            ></div>
            <Link to="/destination/moon">
              <div
                className="inner-circle cursor-pointer flex justify-center items-center bg-white lg:h-[274px] lg:w-[274px] w-[150px] h-[150px] lg:m-0 m-auto rounded-full 
          "
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <h4 className="text-[#0B0D17] lg:text-[32px] text-xl">
                  EXPLORE
                </h4>
              </div>
            </Link>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Home;
