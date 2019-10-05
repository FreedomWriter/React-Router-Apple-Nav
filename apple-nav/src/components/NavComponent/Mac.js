import React, { useState } from "react";
// import { NavItem, NavLink } from "reactstrap";
import { Link } from "react-router-dom";
import AppleIcons from "../../AppleIcons";
import MacSubNavComponents from "../SubNavComponent/MacSubNavComponent";

function clickHandler(props) {
  console.log("Clicked in Mac.js and here are my props: " + props);
  return props.macMenu;
}
export default function Mac() {
  console.log(AppleIcons.mac);
  const [toggle, setToggle] = useState(true);

  function toggleNav() {
    console.log("I was toggled!");
    setToggle(!toggle);
  }

  return (
    <div>
      <Link to="/" onClick={toggleNav}>
        Mac
      </Link>
      {/* <MacSubNavComponents /> */}
    </div>
  );
}
