import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import { data } from "../Data";

import { Crew, Destination, Technology } from "../pages";

import SingleDestination from "../pages/Destination/SingleDestination";
import SingleCrew from "../pages/Crew/SingleCrew";
import SingleTechnology from "../pages/Technology/SingleTechnology";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/destination/:id" element={<Destination />}>
        <Route
          path=""
          element={<SingleDestination dataDestination={data.destinations} />}
        />
      </Route>
      <Route path="/crew/:id" element={<Crew />}>
        <Route path="" element={<SingleCrew dataCrew={data.crew} />} />
      </Route>
      <Route path="/technology/:id" element={<Technology />}>
        <Route
          path=""
          element={<SingleTechnology dataTechnology={data.technology} />}
        />
      </Route>
    </Routes>
  );
};

export default Router;
