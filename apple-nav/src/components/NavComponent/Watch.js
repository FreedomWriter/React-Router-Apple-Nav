import React from "react";
// import { NavItem, NavLink } from "reactstrap";
import { Link } from "react-router-dom";

export default function Watch() {
  return (
    <div>
      <Link to="/watchsubnav" style={{ color: "#FFF" }}>
        Watch
      </Link>
    </div>
  );
}
