import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const SubCatagoryElem = styled.div``;

const CatagoryImage = styled.div`
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-position: center;
  width: 200px;
  height: 175px;
`;

export default function SubCatagory(props) {
  return (
    <Link className="product" to={props.title}>
      <CatagoryImage image={props.image}></CatagoryImage>
      <div className="product-text">
        <h3> {props.title}</h3>
      </div>
    </Link>
  );
}
