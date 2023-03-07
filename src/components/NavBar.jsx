import React, { useState } from "react";
import Logo from "../assets/shared/logo.svg";
import IconHamburger from "../assets/shared/icon-hamburger.svg";
import IconClose from "../assets/shared/icon-close.svg";

const NavBar = () => {
  const [toggleMobileMenu, settoggleMobileMenu] = useState(false);
  return (
    <div className="flex justify-between items-center relative xl:pt-10 pt-0 px-10 md:px-0 ">
      <div className="flex md:pl-[55px] justify-between items-center gap-16 ">
        <img src={Logo} alt="Logo" className="w-full" />
        <div className="navbar_divider absolute xl:max-w-[473px] left-[170px] xl:block hidden"></div>
      </div>
      <div className="navbar flex  justify-center items-center lg:max-w-[830px] lg:w-full px-0 md:px-10 ">
        <ul className="md:flex hidden xl:gap-12 gap-9 uppercase lg:text-base text-sm">
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
        {toggleMobileMenu ? (
          <img
            src={IconClose}
            alt="Icon Close"
            className="md:hidden block cursor-pointer"
            onClick={() => settoggleMobileMenu(!toggleMobileMenu)}
          />
        ) : (
          <img
            src={IconHamburger}
            alt="Icon Hamburger Open"
            className="md:hidden block cursor-pointer"
            onClick={() => settoggleMobileMenu(!toggleMobileMenu)}
          />
        )}
      </div>
    </div>
  );
};

export default NavBar;
