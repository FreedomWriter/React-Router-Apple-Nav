import React from "react";
// import { Nav } from "reactstrap";
import Mac from "../NavComponent/Mac";
import IPad from "../NavComponent/iPad";
import IPhone from "../NavComponent/iPhone";
import Watch from "../NavComponent/Watch";
import TV from "../NavComponent/TV";
import Music from "../NavComponent/Music";
import Support from "../NavComponent/Support";
import Logo from "../NavComponent/Logo";
import Search from "../NavComponent/Search";
import ShoppingBag from "../NavComponent/ShoppingBag";
import MacSubNavComponents from "../SubNavComponent/MacSubNavComponent";
import styled from "styled-components";
import { Route } from "react-router-dom";

const Justify = styled.div`
  width: 100%;
  height: 150px
  margin: 0 auto;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  font-size: 3rem;
  background: black;
  padding: 0 5%;
  color: hotpink;
  opacity: 20%;
`;
export default function NavBar(props) {
  console.log("props from NavBar: " + props);
  return (
    <div>
      <Justify>
        <Route
          path="/"
          render={() => {
            return (
              <Justify>
                <Logo />
                <Mac />
                <IPad />
                <IPhone />
                <Watch />
                <TV />
                <Music />
                <Support />
                <Search />
                <ShoppingBag />
              </Justify>
            );
          }}
        />
        {/* <Mac /> */}
        {/* <Route path="/ipad" render={() => <IPad />} />
        <Route path="/iphone" render={() => <IPhone />} />
        <Route path="/watch" render={() => <Watch />} />
        <Route path="/tv" render={() => <TV />} />
        <Route path="/music" render={() => <Music />} />
        <Route path="/support" render={() => <Support />} />
        <Route path="/search" render={() => <Search />} />
        <Route path="/shoppingbag" render={() => <ShoppingBag />} /> */}
        {/* <SearchBar />
        <ShoppingBag /> */}
        {/* <NavItem>
          <NavLink href="#">Another Link</NavLink>
        </NavItem>
        <NavItem>
          <NavLink disabled href="#">
            Disabled Link
          </NavLink>
        </NavItem> */}
      </Justify>
      <Route
        exact
        path="/macsubnav"
        render={props => <MacSubNavComponents {...props} />}
      />
    </div>
  );
}
