import React, { useState } from "react";
import styled from "styled-components";
import { nanoid } from "nanoid";
import Data from "../Data/Data";
import Catagory from "./Catagory";
const CatagoriesElem = styled.div``;

const CatagoryHolder = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export default function Catagories(props) {
  const mainCatas = props.data.map((catagory) => {
    return (
      <Catagory key={nanoid()} title={catagory.title} image={catagory.image} />
    );
  });

  return (
    <CatagoriesElem>
      <div className="catagory-holder">{mainCatas}</div>
    </CatagoriesElem>
  );
}
