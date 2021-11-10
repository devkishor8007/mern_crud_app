import React from "react";
import "../App.css";
import { NavLink } from "react-router-dom";

export default function Menu() {
  return (
    <>
      <NavLink className="navs " to="/">
        Kishor Kc
      </NavLink>
      <NavLink className="nav " exact activeClassName="active_class" to="/">
        Images
      </NavLink>
      <NavLink
        className="nav "
        exact
        activeClassName="active_class"
        to="/student"
      >
        Students
      </NavLink>
    </>
  );
}
