import React from "react";
import styled from "styled-components";

const CartIconElem = styled.div`
  position: relative;
  background: white;
  display: flex;
  align-items: center;
  width: 200px;
  gap: 10px;
  padding: 5px;
  left: calc(100% - 200px);
  cursor: pointer;
  &:hover {
    background-color: #fbf1f1;
  }
  img {
    width: 25px;
  }
  .rotate {
    transform: rotate(180deg);
  }
`;

const ItemsP = styled.p`
  background-color: #e0cece;
  font-weight: 500;

  height: 25px;
  width: 25px;
  border-radius: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DownArrow = styled.div`
  width: 0;
  height: 0;
  border-left: 7px solid transparent;
  border-right: 7px solid transparent;
  border-top: 7px solid black;
  position: absolute;
  right: 15px;
  transition: transform 0.5s ease;
`;

export default function CartIcon(props) {
  return (
    <CartIconElem onClick={props.toggleOpen}>
      <img src={require("../Data/Images/Cart.png")} alt="cart" />
      <ItemsP>{props.cartValue.items}</ItemsP>
      <p>${props.cartValue.total.toFixed(2)} </p>
      <DownArrow className={props.open ? "rotate" : ""}> </DownArrow>
    </CartIconElem>
  );
}
