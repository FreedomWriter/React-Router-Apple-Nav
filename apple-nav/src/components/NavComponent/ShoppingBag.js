import React from "react";
// import { NavItem, NavLink } from "reactstrap";
import { Link } from "react-router-dom";

export default function ShoppingBag() {
  return (
    <div>
      <Link to="/">
        <i className="fas fa-shopping-bag"></i>
      </Link>
    </div>
  );
}
