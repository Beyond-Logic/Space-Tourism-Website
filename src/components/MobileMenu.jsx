import React from "react";
import { Link } from "react-router-dom";
import IconClose from "../assets/shared/icon-close.svg";

const MobileMenu = ({ onClick }) => {
  return (
    <div className="mobile_menu absolute w-[70%] right-0 h-full h-screen top-0 z-50">
      <img
        src={IconClose}
        alt="Icon Close"
        className="absolute cursor-pointer z-20 top-10 right-10"
        onClick={onClick}
      />
      <div className="absolute left-0">
        <div className="flex flex-col gap-8 pt-[118px] pl-8">
          <Link to="/">
            <div className="nav-text uppercase flex items-center text-white gap-3">
              <span className="font-bold">01</span>
              <p>Home</p>
            </div>
          </Link>
          <Link to="/destination/moon">
            <div className="nav-text uppercase flex items-center text-white gap-3">
              <span className="font-bold">02</span>
              <p>Destination</p>
            </div>
          </Link>
          <Link to="/crew/douglas-hurley">
            <div className="nav-text uppercase flex items-center text-white gap-3">
              <span className="font-bold">03</span>
              <p>Crew</p>
            </div>
          </Link>
          <Link to="/technology/launch-vehicle">
            <div className="nav-text uppercase flex items-center text-white gap-3">
              <span className="font-bold">04</span>
              <p>Technology</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
