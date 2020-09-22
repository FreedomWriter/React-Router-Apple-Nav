import React from "react";
import { Link } from "react-router-dom";
import Support from "../NavComponent/Support";
import Logo from "../NavComponent/Logo";
import Search from "../NavComponent/Search";
import ShoppingBag from "../NavComponent/ShoppingBag";
import styled from "styled-components";
import { Route } from "react-router-dom";
import SubMenu from "../SubNavComponent/SubMenu";

const Justify = styled.div`
  width: 100%;
  height: 150px;
  margin: 0 auto;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  font-size: 1.6rem;
  background: black;
  padding: 0 5%;
  opacity: 80%;
`;

const StyledLink = styled(Link)`
  color: white;
`;
export default function NavBar() {
  return (
    <div>
      <Justify>
        <Justify>
          <Logo />
          <StyledLink to="/mac">Mac</StyledLink>
          <StyledLink to="/ipad">iPad</StyledLink>
          <StyledLink to="/iphone">iPhone</StyledLink>
          <StyledLink to="/watch">Watch</StyledLink>
          <StyledLink to="/tv">TV</StyledLink>
          <StyledLink to="/music">Music</StyledLink>
          <Route path="/" render={(props) => <Support {...props} />} />
          <Route path="/" render={(props) => <Search {...props} />} />
          <Route path="/" render={(props) => <ShoppingBag {...props} />} />
        </Justify>
      </Justify>

      <Route path="/:category">
        <SubMenu />
      </Route>
    </div>
  );
}
