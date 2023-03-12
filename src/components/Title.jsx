import React from "react";

const Title = ({ number, title }) => {
  return (
    <div className="flex gap-7 items-center md:justify-start justify-center lg:mt-0 -mt-10">
      <span className="text-white opacity-20 lg:text-[28px] md:text-[20px] text-[16px] leading-[4.725px]">
        {number}
      </span>
      <h5 className="lg:text-[28px] sm:text-xl text-base text-white ">
        {title}
      </h5>
    </div>
  );
};

export default Title;
