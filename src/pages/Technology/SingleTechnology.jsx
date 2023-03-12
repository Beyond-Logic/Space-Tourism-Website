import React from "react";
import { Link, useLocation, useParams } from "react-router-dom";

const SingleTechnology = ({ dataTechnology }) => {
  const { id } = useParams();
  const { pathname } = useLocation();
  const item = dataTechnology?.find(
    (item) => item.name.toLowerCase().split(" ").join("-") === id.toLowerCase()
  );

  if (!item) {
    return <div>Item not found</div>;
  }

  return (
    <div className=" flex lg:flex-row flex-col justify-between w-full pt-[97px] px-[5px]">
      <div className="w-full relative">
        <div className="w-full lg:hidden flex -mt-16">
          <img
            src={item.images.landscape}
            alt={item.name}
            className="h-auto max-h-[527px] w-full"
          />
        </div>
        <div className="xs:px-[55px] px-[24px] lg:pt-[37px] w-full flex lg:flex-row flex-col gap-[80px]">
          <div className="flex lg:flex-col flex-row gap-[32px] lg:justify-start justify-center lg:mt-0 xxs:mt-[56px] mt-[34px]">
            <Link to="/technology/launch-vehicle">
              <div
                className={`flex justify-center items-center lg:w-[80px] lg:h-[80px] xxs:w-[60px] xxs:h-[60px]  h-[40px] w-[40px] rounded-full ${
                  pathname === "/technology/launch-vehicle"
                    ? " bg-white"
                    : "border-2 border-white bg-transparent"
                }`}
              >
                <h4
                  className={`xl:text-[32px] xxs:text-[24px] text-[16px] ${
                    pathname === "/technology/launch-vehicle"
                      ? "text-primary"
                      : "text-white"
                  }`}
                >
                  1
                </h4>
              </div>
            </Link>
            <Link to="/technology/spaceport">
              <div
                className={`flex justify-center items-center lg:w-[80px] lg:h-[80px] xxs:w-[60px] xxs:h-[60px]  h-[40px] w-[40px] rounded-full ${
                  pathname === "/technology/spaceport"
                    ? "bg-white"
                    : "border-2 border-white bg-transparent"
                }`}
              >
                <h4
                  className={`xl:text-[32px] xxs:text-[24px] text-[16px] ${
                    pathname === "/technology/spaceport"
                      ? "text-primary"
                      : "text-white"
                  }`}
                >
                  2
                </h4>
              </div>
            </Link>
            <Link to="/technology/space-capsule">
              <div
                className={`flex justify-center items-center lg:w-[80px] lg:h-[80px] xxs:w-[60px] xxs:h-[60px]  h-[40px] w-[40px]  rounded-full  ${
                  pathname === "/technology/space-capsule"
                    ? "bg-white"
                    : "border-2 border-white bg-transparent"
                }`}
              >
                <h4
                  className={`xl:text-[32px] xxs:text-[24px] text-[16px] ${
                    pathname === "/technology/space-capsule"
                      ? "text-primary"
                      : "text-white"
                  }`}
                >
                  3
                </h4>
              </div>
            </Link>
          </div>
          <div>
            <p className="nav_text uppercase text-secondary tracking-[2.7px] leading-[19px]">
              The Technology...
            </p>
            <h3 className="mt-[16px] xl:mt-[25px] whitespace-nowrap xl:text-[56px] xxs:text-[40px] text-2xl">
              {item.name}
            </h3>
            <p className="lg:pt-[38px] pt-[16px] lg:pb-0 xss:pb-[97px] pb-[81px] text-secondary lg:max-w-[444px] max-w-[550px] lg:m-0 m-auto w-full lg:text-lg text-base">
              {item.description}
            </p>
          </div>
        </div>
      </div>
      <div className="w-full lg:flex hidden">
        <img
          src={item.images.portrait}
          alt={item.name}
          className="h-auto w-auto  xl:max-w-[515px] xl:max-h-[527px] lg:max-w-[415px] lg:max-h-[427px] lg:absolute bottom-0 top-40 m-auto right-0"
        />
      </div>
    </div>
  );
};

export default SingleTechnology;
