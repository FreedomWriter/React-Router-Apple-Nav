import React from "react";
// import { NavItem, NavLink } from "reactstrap";
import { Link } from "react-router-dom";

export default function Music() {
  return (
    <div>
      <Link to="/musicsubnav" style={{ color: "#FFF" }}>
        Music
      </Link>
    </div>
  );
}
