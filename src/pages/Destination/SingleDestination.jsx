import React from "react";
import MoonImage from "../../assets/destination/image-moon.webp";
import InnerNavBar from "../../components/InnerNavBar";
const SingleDestination = () => {
  return (
    <div className="flex lg:flex-row flex-col gap-[157px] w-full  pt-[97px] md:px-[30px] px-[5px]">
      <div className="w-full lg:flex hidden">
        <img
          src={MoonImage}
          alt="moon"
          className="h-auto w-auto xl:max-w-[445px] xl:max-h-[445px] max-w-[350px] max-h-[350px]"
        />
      </div>
      <div className="w-full">
        <div className="w-full lg:hidden flex pb-[20px] lg:-mt-0 -mt-16">
          <img
            src={MoonImage}
            alt="moon"
            className="h-auto w-auto xxs:max-w-[300px] xxs:max-h-[300px] m-auto"
          />
        </div>
        <InnerNavBar />
        <div className="pt-[37px]">
          <h2>MOON</h2>
          <p className="pt-[14px] text-secondary">
            See our planet as you’ve never seen it before. A perfect relaxing
            trip away to help regain perspective and come back refreshed. While
            you’re there, take in some history by visiting the Luna 2 and Apollo
            11 landing sites.
          </p>
          <div className="pt-[54px] border-b-[2px] border-[#383B4B]"></div>
          <div className="flex md:flex-row flex-col lg:justify-start justify-center md:mt-[28px] mt-[50px] gap-[79px]">
            <div className="flex flex-col gap-[12px]">
              <p className="subheading_two text-secondary">AVG. DISTANCE</p>
              <p className="subheading_one">384,400 km</p>
            </div>
            <div className="flex flex-col gap-[12px]">
              <p className="subheading_two text-secondary">Est. travel time</p>
              <p className="subheading_one">3 days</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleDestination;
