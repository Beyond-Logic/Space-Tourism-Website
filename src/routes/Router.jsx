import React from "react";
import { Routes, Route } from "react-router-dom";
import { Destination } from "../pages";
import SingleDestination from "../pages/Destination/SingleDestination";
import Home from "../pages/Home";
import { data } from "../Data";

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
    </Routes>
  );
};

export default Router;
