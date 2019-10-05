import React from "react";
// import { NavItem, NavLink } from "reactstrap";
// import { Link } from "react-router-dom";
import AppleIcons from "../../AppleIcons";
import styled from "styled-components";

const Justify = styled.div`
  width: 100%;
  height: 150px
  margin: 0 auto;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  font-size: 3rem;
//   background: whi;
  padding: 0 5%;
  color: hotpink;
`;

export default function MacSubNavComponents(props) {
  console.log(`from MacSubNav Components ` + props);
  console.log(AppleIcons.mac);
  return (
    <Justify>
      {AppleIcons.mac.map(item => (
        <div className="item-card" key={item.id}>
          <img className="item-list-image" src={item.url} alt={item.name} />
        </div>
      ))}
    </Justify>
  );
}
