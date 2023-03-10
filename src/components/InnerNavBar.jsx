import React from "react";
import { NavLink } from "react-router-dom";

const InnerNavBar = () => {
  return (
    <div className="navbar_inner flex lg:justify-start justify-center items-center lg:-mt-10">
      <ul className="flex gap-12 uppercase lg:text-base text-sm text-secondary">
        <NavLink to="/destination/moon" activeclassname="active">
          Moon
        </NavLink>
        <NavLink to="/destination/mars" activeclassname="active">
          Mars
        </NavLink>
        <NavLink to="/destination/europa" activeclassname="active">
          Europa
        </NavLink>
        <NavLink to="/destination/titan" activeclassname="active">
          Titan
        </NavLink>
      </ul>
    </div>
  );
};

export default InnerNavBar;
