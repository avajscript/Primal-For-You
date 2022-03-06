import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const CatagoryImage = styled.div`
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-position: center;
  width: 200px;
  height: 175px;
`;

const TextContent = styled.div`
  padding: 5px;

  h3 {
    &:first-of-type {
      font-weight: 600;
    }
  }
`;

export default function Catagory(props) {
  return (
    <Link className="product" to={props.title}>
      <CatagoryImage image={props.image}></CatagoryImage>
      <div className="product-text">
        <h3> {props.title}</h3>
      </div>
    </Link>
  );
}
