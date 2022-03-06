import React from "react";
import styled from "styled-components";
import { NavLink, useParams } from "react-router-dom";
import { nanoid } from "nanoid";
import SubCatagory from "./SubCatagory";
const SubCatagoryContElem = styled.div``;

export default function SubCatagoryCont(props) {
  const { subCatagory } = useParams();
  const data = props.data.find((field) => {
    return field.title == subCatagory;
  });

  const subCatagories = Object.entries(data.content).map(([key, value]) => {
    return (
      <SubCatagory
        key={nanoid()}
        title={key}
        image={value.image}
        content={value.content}
      />
    );
  });
  return (
    <SubCatagoryContElem>
      <div className="catagory-holder">{subCatagories}</div>
    </SubCatagoryContElem>
  );
}
