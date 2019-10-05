import React from "react";
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
  // background: black;
  padding: 0 5%;
  color: hotpink;
`;

export default function IPadSubNavComponents() {
  console.log(AppleIcons.ipad.url);
  return (
    <Justify>
      {AppleIcons.ipad.map(item => (
        <div>
          <img src={item.url} alt={item.name} />
        </div>
      ))}
    </Justify>
  );
}
