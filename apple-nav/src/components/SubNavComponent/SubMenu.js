import React from "react";
import { useParams } from "react-router-dom";
import data from "../../AppleIcons";
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
  background: black;
  padding: 0 5%;
  /* color: black; */
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

export default function SubMenu() {
  const { category } = useParams();

  return (
    <Justify>
      {data[category].map((item) => (
        <div key={item.id}>
          <ImgSize>
            <img src={item.url} alt={item.name} />
          </ImgSize>
          <p>{item.name}</p>
        </div>
      ))}
    </Justify>
  );
}
