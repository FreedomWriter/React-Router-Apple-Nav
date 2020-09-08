import React from "react";
import AppleIcons from "../../AppleIcons";
import styled from "styled-components";

const Justify = styled.div`
  width: 100%;
  max-height: 600px
  margin: 0 auto;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: flex-end;
  font-size: 1rem;
  // background: black;
  padding: 0 5%;
  color: black;
  overflow: auto;
`;

const ImgSize = styled.div`
  margin: 10% auto;
  height: 125px;
  width: 125px;
  display: flex;
  justify-content: flex-top;
  align-self: center;
`;

export default function MacSubNavComponents() {
  return (
    <Justify>
      {AppleIcons.mac.map(item => (
        <div>
          <ImgSize>
            <img src={item.url} alt={item.name} />
          </ImgSize>
          <p>{item.name}</p>
        </div>
      ))}
    </Justify>
  );
}
