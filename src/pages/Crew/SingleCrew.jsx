import React from "react";
import { Link, useLocation, useParams } from "react-router-dom";

const SingleCrew = ({ dataCrew }) => {
  const { id } = useParams();
  const { pathname } = useLocation();
  const item = dataCrew?.find(
    (item) => item.name.toLowerCase().split(" ").join("-") === id.toLowerCase()
  );

  if (!item) {
    return <div>Item not found</div>;
  }

  return (
    <div className="flex lg:flex-row flex-col xl:gap-[120px] w-full  pt-[97px]  px-[5px]">
      <div className="w-full relative">
        <div className="w-full xxs:hidden flex -mt-14 mb-[32px]">
          <img
            src={item.images.webp}
            alt={item.name}
            className="h-auto w-auto max-w-[188px] max-h-[233px] m-auto"
          />
        </div>
        <div className="mb-[72px] xxs:hidden flex lg:justify-start justify-center gap-[24px] bg-blend-normal ">
          <Link to="/crew/douglas-hurley">
            <div
              className={`lg:w-[15px] lg:h-[15px] h-[15px] w-[15px] rounded-full bg-white ${
                pathname === "/crew/douglas-hurley"
                  ? "opacity-100"
                  : "opacity-20"
              }`}
            ></div>
          </Link>
          <Link to="/crew/mark-shuttleworth">
            <div
              className={`lg:w-[15px] lg:h-[15px] h-[15px] w-[15px] rounded-full bg-white ${
                pathname === "/crew/mark-shuttleworth"
                  ? "opacity-100"
                  : "opacity-20"
              }`}
            ></div>
          </Link>
          <Link to="/crew/victor-glover">
            <div
              className={`lg:w-[15px] lg:h-[15px] h-[15px] w-[15px]  rounded-full bg-white ${
                pathname === "/crew/victor-glover"
                  ? "opacity-100"
                  : "opacity-20"
              }`}
            ></div>
          </Link>
          <Link to="/crew/anousheh-ansari">
            <div
              className={`lg:w-[15px] lg:h-[15px] h-[15px] w-[15px] rounded-full bg-white ${
                pathname === "/crew/anousheh-ansari"
                  ? "opacity-100"
                  : "opacity-20"
              }`}
            ></div>
          </Link>
        </div>

        <div className="lg:pt-[37px] w-full">
          <h4 className="mix-blend-normal opacity-50 lg:text-[32px] md:text-2xl text-base lg:mt-0 -mt-10">
            {item.role}
          </h4>
          <h3 className="xl:mt-[25px] mt-[8px] whitespace-nowrap xl:text-[56px] md:text-[40px] text-2xl">
            {item.name}
          </h3>
          <p className="pt-[38px] text-secondary lg:max-w-[444px] max-w-[550px] lg:m-0 m-auto w-full lg:text-lg text-base">
            {item.bio}
          </p>
          <div className="lg:mt-[80px] mt-[40px] lg:mb-0 mb-[40px] xxs:flex hidden lg:justify-start justify-center gap-[24px] bg-blend-normal ">
            <Link to="/crew/douglas-hurley">
              <div
                className={`lg:w-[15px] lg:h-[15px] h-[15px] w-[15px] rounded-full bg-white ${
                  pathname === "/crew/douglas-hurley"
                    ? "opacity-100"
                    : "opacity-20"
                }`}
              ></div>
            </Link>
            <Link to="/crew/mark-shuttleworth">
              <div
                className={`lg:w-[15px] lg:h-[15px] h-[15px] w-[15px] rounded-full bg-white ${
                  pathname === "/crew/mark-shuttleworth"
                    ? "opacity-100"
                    : "opacity-20"
                }`}
              ></div>
            </Link>
            <Link to="/crew/victor-glover">
              <div
                className={`lg:w-[15px] lg:h-[15px] h-[15px] w-[15px]  rounded-full bg-white ${
                  pathname === "/crew/victor-glover"
                    ? "opacity-100"
                    : "opacity-20"
                }`}
              ></div>
            </Link>
            <Link to="/crew/anousheh-ansari">
              <div
                className={`lg:w-[15px] lg:h-[15px] h-[15px] w-[15px] rounded-full bg-white ${
                  pathname === "/crew/anousheh-ansari"
                    ? "opacity-100"
                    : "opacity-20"
                }`}
              ></div>
            </Link>
          </div>
        </div>
      </div>
      <div className="w-full xxs:flex hidden">
        <img
          src={item.images.webp}
          alt={item.name}
          className="h-auto w-auto xl:max-h-[712px] xl:max-w-[568px] md:max-h-[500px] md:max-w-[612px] sm:max-h-[532px] sm:max-w-[433px] lg:absolute bottom-0 m-auto xl:right-44 right-16 xl:m-0"
        />
      </div>
    </div>
  );
};

export default SingleCrew;
