import React from "react";
// import { NavItem, NavLink } from "reactstrap";
import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <div>
      <Link to="/">
        <i className="fab fa-apple icon-3x" style={{ color: "#FFF" }}></i>
      </Link>
    </div>
  );
}
