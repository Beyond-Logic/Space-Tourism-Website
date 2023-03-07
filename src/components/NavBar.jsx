import React from "react";
import Logo from "../assets/shared/logo.svg";

const NavBar = () => {
  return (
    <div className="flex justify-between items-center relative pt-10">
      <div className="flex pl-[55px] justify-between items-center gap-16 ">
        <img src={Logo} alt="Logo" />
        <div className="navbar_divider absolute z-10 max-w-[473px] left-[170px]"></div>
      </div>
      <div className="navbar flex justify-center items-center max-w-[830px] w-full">
        <ul className="flex gap-12 uppercase">
          <li>
            <span>00</span>Home
          </li>
          <li>
            <span>01</span>Destination
          </li>
          <li>
            <span>02</span>Crew
          </li>
          <li>
            <span>03</span>Technology
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
