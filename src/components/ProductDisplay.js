import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
const ProductDisplayElem = styled.div`
  padding: 5%;

  img {
    flex: 1;
    width: 1%;
    flex-basis: 30%;
    object-fit: cover;
  }
`;

const Product = styled.div`
  display: flex;
  gap: 1rem;
  @media screen and (max-width: 630px) {
    flex-direction: column;
    img {
      width: 75%;
      margin: auto;
    }
  }
`;
const TextContent = styled.div`
  flex: 1;
  flex-basis: 70%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 150px;
  .top {
  }

  .bottom {
    display: flex;
    gap: 1rem;
    align-items: center;
  }
  .quantity {
    background-color: #e0cece;
    width: 24px;
    height: 24px;
    text-align: center;
    font-size: 18px;
  }
  .add-cart {
    background: white;
    border: 2px solid #8a0707;
    color: #8a0707;

    padding-left: 2px;
    padding-right: 2px;
    cursor: pointer;
  }
`;
export default function ProductDisplay(props) {
  const { state } = useLocation();
  const [quantity, setQuantity] = React.useState(1);
  function updateQuantity(e) {
    const value = e.currentTarget.value;
    setQuantity((prevValue) => {
      return value;
    });
  }
  return (
    <ProductDisplayElem>
      <Product>
        {state && <img src={state.image} />}
        <TextContent>
          <div className="top">
            <h1>
              {state && state.title} - ({state && state.weight})
            </h1>
            <h2>${state && state.price} </h2>
          </div>
          <div className="bottom">
            <h2 className="bold"> QTY </h2>

            <input
              className=" bold quantity"
              type="text"
              value={quantity}
              onChange={updateQuantity}
            />

            <button
              onClick={() => {
                props.updateCart(state.code, quantity);
                props.toggleOpen(true);
              }}
              className="add-cart"
            >
              <h2 className="bold"> ADD TO CART </h2>
            </button>
          </div>
        </TextContent>
      </Product>
    </ProductDisplayElem>
  );
}
