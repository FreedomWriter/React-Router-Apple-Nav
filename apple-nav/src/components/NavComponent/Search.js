import React from "react";
// import { NavItem, NavLink } from "reactstrap";
import { Link } from "react-router-dom";

export default function Search() {
  return (
    <div>
      <Link to="/">
        <i className="fas fa-search" style={{ color: "#FFF" }}></i>
      </Link>
    </div>
  );
}
