import React from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <h2>Search for Movies</h2>
      <Outlet />
    </>
  );
};

export default Layout;
