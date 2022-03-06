import React, { useState } from "react";
import styled from "styled-components";
import { useParams, useLocation } from "react-router-dom";
import { nanoid } from "nanoid";
import Product from "./Product";

export default function ProductHolder(props) {
  const { pathname } = useLocation();
  const catagories = pathname.split("/");
  const catagory = catagories[catagories.length - 2];
  const subCatagory = catagories[catagories.length - 1];

  const data = props.data.find((field) => {
    return field.title === catagory;
  }).content[subCatagory].content;

  const products = data.map((field) => {
    return (
      <Product
        key={nanoid()}
        title={field.title}
        weight={field.weight}
        price={field.price}
        image={field.image}
        code={field.code}
      />
    );
  });
  return <div className="catagory-holder">{products}</div>;
}
