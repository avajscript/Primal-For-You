import React from "react";
import styled from "styled-components";
import CartLine from "./CartLine";
import { nanoid } from "nanoid";
const CartCont = styled.div`
  position: absolute;
  background: white;
  right: 0;
  padding: 15px;
  width: 600px;
  opacity: 0;
  z-index: -1;
  transition: opacity 1s ease, z-index 1s ease;
  box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.5);
  @media screen and (max-width: 650px) {
    width: 100vw;
    right: -20px;
  }
  @media screen and (max-width: 470px) {
    position: fixed;
    right: 0;
  }
`;

const Title = styled.h3`
  font-weight: 500;
  padding-bottom: 15px;
`;

const Holder = styled.div`
  border-top: 1px solid #e0cece;
  border-bottom: 1px solid #e0cece;
  padding: 1rem 0;
`;

const CheckOut = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-top: 15px;
  align-items: center;
  gap: 2rem;
`;

const CheckoutBtn = styled.button`
  border: 2px solid #8a0707;
  cursor: pointer;
  background-color: white;
  padding: 5px;
  transition: background-color 0.25s ease;
  &:hover {
    background-color: #e0cece;
  }
`;

const CheckoutText = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export default function CartDropdown(props) {
  const cartLines = Object.entries(props.cart).map(([key, value]) => {
    return (
      <CartLine
        key={nanoid()}
        title={value.title}
        quantity={value.quantity}
        price={value.price}
        weight={value.weight}
        image={value.image}
        code={value.code}
        deleteItem={props.deleteItem}
        incrementItem={props.incrementItem}
        decrementItem={props.decrementItem}
      />
    );
  });
  return (
    <CartCont style={props.open ? { opacity: 1, zIndex: 1 } : {}}>
      <Title> Your Shopping Cart </Title>
      <Holder>{cartLines}</Holder>
      <CheckOut>
        <CheckoutText>
          <p> Subtotal:</p>
          <h3>${props.cartValue.total.toFixed(2)} </h3>
        </CheckoutText>
        <CheckoutBtn>
          <h3> Checkout </h3>
        </CheckoutBtn>
      </CheckOut>
    </CartCont>
  );
}
