import React from "react";
import { Outlet, Link } from "react-router-dom";

function RoutingComp() {
  return (
    <>
      <h1>This heading is for Routing Component</h1>

      <Link to="/About">About</Link>
      <Link to="/Contact">Contact</Link>
      <Outlet />
    </>
  );
}

export default RoutingComp;
