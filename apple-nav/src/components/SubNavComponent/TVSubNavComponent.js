import React from "react";
import AppleIcons from "../../AppleIcons";
import styled from "styled-components";

const Justify = styled.div`
  width: 100%;
  max-height: 600px;
  margin: 0 auto;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: flex-end;
  font-size: 1rem;
  padding: 0 5%;
  background: black;
  color: white;
`;

const ImgSize = styled.div`
  margin: 10% auto;
  height: 125px;
  width: 125px;
  display: flex;
  justify-content: center;
`;

export default function TVSubNavComponents() {
  return (
    <Justify>
      {AppleIcons.tv.map(item => (
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
