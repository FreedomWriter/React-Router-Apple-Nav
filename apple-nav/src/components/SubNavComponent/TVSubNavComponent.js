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
  align-items: center;
  font-size: 3rem;
  //   background: whi;
  padding: 0 5%;
  color: black;
`;

const ImgSize = styled.div`
  margin-top: 10%;
  height: 100px;
  width: 100px;
  display: flex;
  justify-content: center;
  background: black;
`;

export default function TVSubNavComponents(props) {
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
