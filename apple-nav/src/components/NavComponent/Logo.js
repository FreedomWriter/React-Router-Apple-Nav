import React from "react";
// import { NavItem, NavLink } from "reactstrap";
import { Link } from "react-router-dom";
import AppleIcons from "../../AppleIcons";

export default function Logo() {
  console.log(AppleIcons.apple.url);
  return (
    <div>
      <Link to="/">
        <i className="fab fa-apple icon-3x" style={{ color: "#FFF" }}></i>
      </Link>
    </div>
  );
}
