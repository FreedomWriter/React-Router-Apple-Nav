import React from "react";
// import { NavItem, NavLink } from "reactstrap";
import { Link } from "react-router-dom";

export default function TV() {
  return (
    <div>
      <Link to="/tvsubnav" style={{ color: "#FFF" }}>
        TV
      </Link>
    </div>
  );
}
