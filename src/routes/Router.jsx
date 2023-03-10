import React from "react";
import { Routes, Route } from "react-router-dom";
import { Destination } from "../pages";
import SingleDestination from "../pages/Destination/SingleDestination";
import Home from "../pages/Home";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/destination/:id" element={<Destination />}>
        <Route path="" element={<SingleDestination />} />
      </Route>
    </Routes>
  );
};

export default Router;
