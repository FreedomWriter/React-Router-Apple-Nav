import React from "react";
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
import IPadSubNavComponents from "../SubNavComponent/IPadSubNavComponent";
import IPhoneSubNavComponents from "../SubNavComponent/IPhoneSubNavComponent";
import MusicSubNavComponents from "../SubNavComponent/MusicSubNavComponent";
// import SearchSubNavComponents from "../SubNavComponent/SearchSubNavComponent";
// import ShoppingBagSubNavComponents from "../SubNavComponent/ShoppingBagSubNavComponent";
// import SupportSubNavComponents from "../SubNavComponent/SupportSubNavComponent";
import TVSubNavComponents from "../SubNavComponent/TVSubNavComponent";
import WatchSubNavComponents from "../SubNavComponent/WatchSubNavComponent";
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
  font-size: 1.6rem;
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
                <Route path="/" render={props => <Mac {...props} />} />
                <Route path="/" render={props => <IPad {...props} />} />
                <Route path="/" render={props => <IPhone {...props} />} />
                <Route path="/" render={props => <Watch {...props} />} />
                <Route path="/" render={props => <TV {...props} />} />
                <Route path="/" render={props => <Music {...props} />} />
                <Route path="/" render={props => <Support {...props} />} />
                <Route path="/" render={props => <Search {...props} />} />
                <Route path="/" render={props => <ShoppingBag {...props} />} />
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
      <Route
        exact
        path="/ipadsubnav"
        render={props => <IPadSubNavComponents {...props} />}
      />
      <Route
        exact
        path="/iphonesubnav"
        render={props => <IPhoneSubNavComponents {...props} />}
      />
      <Route
        exact
        path="/watchsubnav"
        render={props => <WatchSubNavComponents {...props} />}
      />
      <Route
        exact
        path="/tvsubnav"
        render={props => <TVSubNavComponents {...props} />}
      />
      <Route
        exact
        path="/musicsubnav"
        render={props => <MusicSubNavComponents {...props} />}
      />
    </div>
  );
}
