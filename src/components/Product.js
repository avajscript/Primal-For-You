import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { nanoid } from "nanoid";

const CatagoryImage = styled.div`
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-position: center;
  width: 200px;
  height: 175px;
`;
const PriceH3 = styled.h3``;
const QuantityP = styled.p``;

export default function Product(props) {
  return (
    <Link
      className="product"
      to={props.title}
      state={{
        title: props.title,
        price: props.price,
        quantity: 1,
        weight: props.weight,
        image: props.image,
        code: props.code
      }}
    >
      <CatagoryImage image={props.image}></CatagoryImage>
      <div className="product-text">
        <h3> {props.title}</h3>
        <PriceH3>${props.price} </PriceH3>
        <QuantityP> ({props.weight}) </QuantityP>
      </div>
    </Link>
  );
}
