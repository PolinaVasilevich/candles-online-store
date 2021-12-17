import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "../pages";
import { routes } from "../router";

const AppRouter = () => {
  return (
    <Routes>
      {routes.map((route) => (
        <Route key={route.path} path={route.path} element={route.element} />
      ))}
      <Route path="*" element={<Home />} />
    </Routes>
  );
};

export default AppRouter;
