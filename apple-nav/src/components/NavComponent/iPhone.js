import React from "react";
// import { NavItem, NavLink } from "reactstrap";
import { Link } from "react-router-dom";

export default function IPhone() {
  return (
    <div>
      <Link to="/iphonesubnav" style={{ color: "#FFF" }}>
        iPhone
      </Link>
    </div>
  );
}
